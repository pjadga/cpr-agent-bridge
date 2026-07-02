import Echo from 'laravel-echo';
import { MODULE_ID, DEFAULT_REVERB_KEY } from './constants.js';
import { flattenToDelta } from './utils.js';
import { rollAndCapture } from './roll-capture.js';
import { registerSettings } from './settings.js';
import { dispatch } from './handlers/index.js';

// ==================================================================
// CYBERPUNK BRIDGE
//
// Owns the Echo connection, the outbound transport (sendResponse),
// the Foundry hooks that sync changes to the Agent, and routes
// incoming messages to the dispatch map in handlers/.
// ==================================================================

export class CyberpunkBridge {
    constructor() {
        this.echo = null;
        this.isConnected = false;
        this.activeRequests = new Map();
        this.requestAgentLinks = new Map();
        // nonce -> { foundryUserId, ts } for pairings this (GM) Bridge minted.
        this.pendingPairings = new Map();
        this.hookIds = {};
        this._isCapturingRoll = false;
    }

    rollAndCapture(actorId, triggerFunction, rollMode = null) {
        return rollAndCapture(this, actorId, triggerFunction, rollMode);
    }

    registerSettings() {
        registerSettings(this);
    }

    destroy() {
        if (this.echo) {
            this.echo.disconnect();
        }
        for (let [hookName, id] of Object.entries(this.hookIds)) {
            Hooks.off(hookName, id);
        }
        if (this._originalToMessage) {
            Roll.prototype.toMessage = this._originalToMessage;
        }
        console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
    }

    connect() {
        const apiUrl = game.settings.get(MODULE_ID, 'apiUrl');
        const token = game.settings.get(MODULE_ID, 'apiKey');
        const debug = game.settings.get(MODULE_ID, 'debugMode');
        const reverbPortSetting = Number(game.settings.get(MODULE_ID, 'reverbPort') || 0) || 0;
        const useSSLSetting = game.settings.get(MODULE_ID, 'reverbUseSSL');
        const reverbHostOverride = (game.settings.get(MODULE_ID, 'reverbHost') || '').trim();

        if (!token || !apiUrl) return;

        if (this.echo) {
            this.echo.disconnect();
        }

        let baseUrl;
        try { baseUrl = new URL(apiUrl); }
        catch (e) { return; }

        const wsHost = reverbHostOverride || baseUrl.hostname;
        const inferredSecure = baseUrl.protocol === 'https:';
        const forceTLS = (typeof useSSLSetting === 'boolean' ? useSSLSetting : undefined);
        const useTLS = (forceTLS !== undefined && forceTLS !== null) ? forceTLS : inferredSecure;
        const defaultPort = useTLS ? 443 : 80;
        const wsPort = reverbPortSetting > 0 ? reverbPortSetting : defaultPort;

        this.echo = new Echo({
            broadcaster: 'reverb',
            key: game.settings.get(MODULE_ID, 'reverbKey') || DEFAULT_REVERB_KEY,
            wsHost: wsHost,
            wsPort: wsPort,
            wssPort: wsPort,
            forceTLS: useTLS,
            enabledTransports: ['ws', 'wss'],
            disableStats: true,
            authEndpoint: `${apiUrl.replace(/\/$/, '')}/api/broadcasting/auth`,

            auth: {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            }
        });

        window.CyberpunkSocket = this.echo;

        this.echo.connector.pusher.connection.bind('connected', () => {
            this.isConnected = true;
            ui.notifications.info("Cyberpunk Bridge: Online");
            if (debug) console.log("Cyberpunk Bridge: Connection Established");
        });

        this.echo.connector.pusher.connection.bind('disconnected', () => {
            this.isConnected = false;
        });

        this.listen();
    }

    listen() {
        const channelId = game.settings.get(MODULE_ID, 'channelId');
        const channelName = channelId ? `cpr-agent.${channelId}` : `cpr-agent`;

        // Only the GM listens for World Updates
        this.echo.private(channelName)
            .listen('.GameUpdate', (e) => {
                this.handleIncomingData(e);
            });

        this.registerGlobalHooks();
    }

    /**
     * Syncs the player's assigned character with the Agent.
     * This allows the Agent to know which character the player is using in Foundry.
     */
    async syncPlayerLink() {
        const token = game.settings.get(MODULE_ID, 'apiKey');
        const debug = game.settings.get(MODULE_ID, 'debugMode');

        if (debug) console.log("[Bridge] syncPlayerLink: Checking API status...");

        // Update the key status flag on the user for GM visibility
        if (game.user.getFlag(MODULE_ID, 'hasApiKey') !== !!token) {
            await game.user.setFlag(MODULE_ID, 'hasApiKey', !!token);
        }

        if (!token) {
            if (debug) console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
            return;
        }

        const broadcastToLaravel = async () => {
            const char = game.user.character;
            const currentAgentLink = game.user.getFlag(MODULE_ID, 'agent-link');

            if (debug) {
                console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${char?.name || 'None'}...`);
                console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`);
                console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${currentAgentLink || '(none)'}`);
            }

            try {
                const response = await this.sendResponse({
                    type: 'LINK_PLAYER_CHARACTER',
                    actorId: char ? char.id : null,
                    character: char ? { id: char.id, name: char.name } : null,
                    actorName: char ? char.name : null,
                    agentLink: currentAgentLink || game.user.id,
                    foundryUserId: game.user.id,
                    foundryUserName: game.user.name,
                    isGM: game.user.isGM
                });

                if (debug) {
                    console.log(`[Bridge] syncPlayerLink: Laravel response:`, response);
                }

                if (response && response.agent_link) {
                    if (currentAgentLink !== response.agent_link) {
                        console.log(`%c[Bridge] Link established! Agent Link: ${response.agent_link}`, "color: #00ff00; font-weight: bold;");
                        console.log(`%c[Bridge] Laravel User ID: ${response.user_id || '(not provided)'}`, "color: #00ff00;");
                        await game.user.setFlag(MODULE_ID, 'agent-link', response.agent_link);
                        ui.notifications?.info(`Agent: Account linked successfully.`);
                    }
                } else {
                    console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", response);
                }
            } catch (e) {
                console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", e);
            }
        };

        // Initial sync on load
        await broadcastToLaravel();

        // Listen for character assignment changes
        if (!this.hookIds.updateUser) {
            this.hookIds.updateUser = Hooks.on('updateUser', (user, changes) => {
                if (user.id === game.user.id && changes.character !== undefined) {
                    broadcastToLaravel();
                }
            });
        }
    }

    registerGlobalHooks() {
        if (this.hookIds.updateActor) return;

        // Debounce map for batching updates if needed, though SHEET_DELTA is usually fine per-event
        const syncUpdate = async (actor, delta) => {
            const token = game.settings.get(MODULE_ID, 'apiKey');
            if (!this.isConnected && !token) return;
            // We only sync if the actor is a character or mook and has owners
            if (!actor || !['character', 'mook'].includes(actor.type)) return;

            console.log(`%c[Bridge] Syncing change for ${actor.name}`, "color: #ffaa00;", delta);
            await this.sendResponse({
                type: 'SHEET_DELTA',
                actorId: actor.id,
                uuid: actor.id,
                delta: delta,
                success: true
            });
        };

        // Hook into Actor updates (stats, derived stats, etc.)
        this.hookIds.updateActor = Hooks.on('updateActor', (actor, changes, options, userId) => {
            if (changes.system) {
                // Flatten the changes.system to dot notation for SHEET_DELTA
                const delta = flattenToDelta(changes.system, 'system.');
                syncUpdate(actor, delta);
            }
        });

        // Hook into Item updates (inventory, weapons, etc.)
        this.hookIds.updateItem = Hooks.on('updateItem', (item, changes, options, userId) => {
            const actor = item.parent;
            if (actor instanceof Actor) {
                // Flatten changes.system if it exists, similar to updateActor
                const delta = {};
                const prefix = `items.${item.id}.`;

                if (changes.system) {
                    flattenToDelta(changes.system, `${prefix}system.`, delta);
                }

                // Handle top-level item changes like name, img, etc.
                for (let key in changes) {
                    if (key !== 'system' && key !== '_id') {
                        delta[`${prefix}${key}`] = changes[key];
                    }
                }

                if (Object.keys(delta).length > 0) {
                    syncUpdate(actor, delta);
                }
            }
        });

        this.hookIds.createItem = Hooks.on('createItem', (item, options, userId) => {
            const actor = item.parent;
            if (actor instanceof Actor) {
                // When creating, we send the whole object so the Agent knows all its initial stats
                // Use a special key 'items.+' to signal an append operation
                const delta = {
                    [`items.+${item.id}`]: item.toObject()
                };
                syncUpdate(actor, delta);
            }
        });

        this.hookIds.deleteItem = Hooks.on('deleteItem', (item, options, userId) => {
            const actor = item.parent;
            if (actor instanceof Actor) {
                // Send a null value for this item ID to signal deletion
                const delta = {
                    [`items.${item.id}`]: null
                };
                syncUpdate(actor, delta);
            }
        });

        this.hookIds.closeSettingsConfig = Hooks.on('closeSettingsConfig', (app, html) => {
            this.syncPlayerLink();
        });

        this.hookIds.updateToken = Hooks.on('updateToken', (token, changes, options, userId) => {
            if (changes.x || changes.y || changes.disposition || changes.hidden) {
                this.broadcastRefresh('VISIBLE_TOKENS_DATA');
            }
        });

        this.hookIds.deleteToken = Hooks.on('deleteToken', (token, options, userId) => {
            this.broadcastRefresh('VISIBLE_TOKENS_DATA');
        });

        this.hookIds.createChatMessage = Hooks.on('createChatMessage', (message, options, userId) => {
            if (message.author.id !== game.user.id) return;
            if (this._isCapturingRoll) return;
            if (message.rolls && message.rolls.length > 0) {
                this.broadcastRoll(message);
            }
        });
    }

    broadcastRefresh(type) {
        this.sendResponse({ type: 'REFRESH_SIGNAL', target: type });
    }

    broadcastRoll(message) {
        const user = game.users.get(message.author.id);
        const roll = message.rolls[0];

        // Determine roll mode from message properties
        let rollMode = "publicroll";
        if (message.blind) {
            rollMode = "blindroll";
        } else if (message.whisper && message.whisper.length > 0) {
            const gms = game.users.filter(u => u.isGM).map(u => u.id);
            const isToGMs = message.whisper.every(id => gms.includes(id) || id === message.author.id);
            const isSelf = message.whisper.length === 1 && message.whisper[0] === message.author.id;

            if (isSelf) rollMode = "selfroll";
            else if (isToGMs) rollMode = "gmroll";
            else rollMode = "gmroll"; // Default to private if there's a whisper
        }

        this.sendResponse({
            type: 'ROLL_RESULT',
            actorId: message.speaker?.actor || null,
            agentLink: user ? user.getFlag(MODULE_ID, 'agent-link') : null,
            playerName: message.alias,
            total: roll.total,
            formula: roll.formula,
            rollMode: message.rollMode || rollMode,
            label: message.flavor || 'Dice Roll',
            rawRoll: {
                total: roll.total,
                formula: roll.formula,
                rollTitle: message.flavor || 'Dice Roll',
                _roll: roll.toJSON()
            },
            success: true
        });
    }

    /**
     * Send results back to Laravel
     */
    async sendResponse(data) {
        let apiUrl = game.settings.get(MODULE_ID, 'apiUrl');
        const token = game.settings.get(MODULE_ID, 'apiKey');

        if (!apiUrl || !token) return;

        // Ensure no trailing slash
        if (apiUrl.endsWith('/')) {
            apiUrl = apiUrl.slice(0, -1);
        }

        // Include agent-link if available on the current Foundry user
        const agentLink = (data.requestId ? this.requestAgentLinks.get(data.requestId) : null) || game.user.getFlag(MODULE_ID, 'agent-link');
        if (agentLink && !data.agentLink) {
            data.agentLink = agentLink;
        }

        // Include channelId if set
        const channelId = game.settings.get(MODULE_ID, 'channelId');
        if (channelId && !data.channelId) {
            data.channelId = channelId;
        }

        // Include player name and rollMode for roll results
        if (data.type === 'ROLL_RESULT') {
            if (!data.playerName) {
                const actor = data.actorId ? game.actors.get(data.actorId) : null;
                data.playerName = actor ? actor.name : game.user.name;
            }
            if (!data.rollMode) {
                data.rollMode = game.settings.get("core", "rollMode");
            }
        }

        try {
            const response = await fetch(`${apiUrl}/api/foundry/callback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                console.error("Cyberpunk Bridge: Callback failed", response.statusText);
                return null;
            }

            return await response.json();
        } catch (e) {
            console.error("Cyberpunk Bridge: Error sending callback", e);
            return null;
        }
    }

    /**
     * Handle Logic (The Tunnel Output)
     */
    async handleIncomingData(payload) {
        // 1. Unwrap the data (Laravel sometimes wraps it in a 'payload' property)
        const data = payload.payload || payload;
        const type = data.type;

        console.log(`%c[Bridge] Incoming Call: ${type}`, "color: #00ffff; font-weight: bold;", data);

        const requestId = data.requestId;
        const agentLink = data.agent_link || data.agentLink;

        if (requestId && agentLink) {
            this.requestAgentLinks.set(requestId, agentLink);
            // Cleanup after 30 seconds to prevent leaks
            setTimeout(() => this.requestAgentLinks.delete(requestId), 30000);
        }

        const myAgentLink = game.user.getFlag(MODULE_ID, 'agent-link');
        const actorId = data.actorId;
        const myCharacterId = game.user.character?.id;
        const debug = game.settings.get(MODULE_ID, 'debugMode');

        if (debug) console.log(`[Bridge] handleIncomingData: requestId=${requestId}, agentLink=${agentLink}, myAgentLink=${myAgentLink}, actorId=${actorId}, myCharacterId=${myCharacterId}`);

        // Determine if this message is intended for us
        let isForMe = false;
        if (game.user.isGM) {
            isForMe = true;
        } else if (myAgentLink && (requestId === myAgentLink || agentLink === myAgentLink)) {
            isForMe = true;
        } else if (!myAgentLink && requestId && actorId && myCharacterId === actorId) {
            // "Discovery" link: We aren't linked yet, but the message is for our character.
            console.log(`[Bridge] Discovery: Matching incoming request to character ${actorId}`);
            isForMe = true;
        }

        // SECURITY & ROUTING:
        // If not a GM and not for me, ignore it.
        if (!isForMe) {
            if (debug) console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
            return;
        }

        // Auto-link if we're not a GM and we found a new/different link for ourselves
        if (!game.user.isGM && agentLink && myAgentLink !== agentLink) {
            // Final check: Only set the flag if this message was specifically for us (myAgentLink match or actorId match)
            if (requestId === agentLink || (actorId && myCharacterId === actorId)) {
                console.log(`%c[Bridge] Setting agent-link flag: ${agentLink}`, "color: #00ff00; font-weight: bold;");
                await game.user.setFlag(MODULE_ID, 'agent-link', agentLink);
                ui.notifications?.info(`Agent: Account linked!`);
            }
        }

        let tokenId = data.tokenId;

        // If no tokenId provided, but we have an actorId, try to find a token for that actor on the canvas
        if (!tokenId && actorId) {
            const token = canvas.tokens.placeables.find(t => t.actor?.id === actorId);
            if (token) {
                tokenId = token.id;
            }
        }

        await dispatch(this, type, data, { type, requestId, actorId, tokenId, debug });
    }

    reconnect() {
        if (game.user.isGM && this.echo) {
            this.connect();
        }
    }
}
