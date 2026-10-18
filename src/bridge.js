import Echo from 'laravel-echo';
import { MODULE_ID, DEFAULT_REVERB_KEY } from './constants.js';
import { flattenToDelta, resolveWsSecurity, isPrimaryGM, resolveTokenId } from './utils.js';
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
        // Roll-capture state. _isCapturingRoll gates the createChatMessage
        // dedupe (so an Agent-initiated roll isn't double-broadcast) and the
        // preCreateChatMessage privacy stamp. _captureRollMode is the mode the
        // player picked in the Agent for the in-flight roll; _prevRollMode +
        // _captureSafetyTimer restore/clean up if no chat message consumes it.
        this._isCapturingRoll = false;
        this._captureRollMode = null;
        this._prevRollMode = null;
        this._captureSafetyTimer = null;
        // Active postMessage transport to an embedded Agent iframe, if any.
        // When set, sendResponse() tees every outbound message to it.
        this.embedTransport = null;
    }

    rollAndCapture(actorId, triggerFunction, rollMode = null) {
        return rollAndCapture(this, actorId, triggerFunction, rollMode);
    }

    /**
     * Begin an Agent-initiated roll capture. Records the desired roll mode and
     * mirrors it onto core.rollMode (so a CPR roll that reads the dropdown picks
     * it up). Awaited, so the setting has landed before the roll fires. A safety
     * timer guarantees the capture state can't leak if, unusually, no chat
     * message is ever created to consume it.
     */
    async _beginRollCapture(rollMode = null) {
        this._isCapturingRoll = true;
        this._captureRollMode = rollMode || null;
        this._prevRollMode = game.settings.get("core", "rollMode");
        if (game.settings.get(MODULE_ID, 'debugMode')) {
            console.log(`%c[Bridge] Roll capture begin: rollMode=${rollMode}`, "color:#c084fc; font-weight:bold;");
        }
        if (rollMode) {
            try { await game.settings.set("core", "rollMode", rollMode); } catch (e) {}
        }
        clearTimeout(this._captureSafetyTimer);
        this._captureSafetyTimer = setTimeout(() => this._endRollCapture(), 6000);
    }

    /**
     * End the current capture: consumed by the roll's createChatMessage (the
     * normal path) or by the safety timer / a failed trigger. Restores the
     * player's previous core.rollMode.
     */
    _endRollCapture() {
        if (!this._isCapturingRoll) return;
        clearTimeout(this._captureSafetyTimer);
        this._captureSafetyTimer = null;
        const prev = this._prevRollMode;
        const changed = this._captureRollMode && prev && prev !== this._captureRollMode;
        this._isCapturingRoll = false;
        this._captureRollMode = null;
        this._prevRollMode = null;
        if (changed) { try { game.settings.set("core", "rollMode", prev); } catch (e) {} }
    }

    /**
     * Whisper/blind recipients for a Cyberpunk roll mode, matching Foundry's
     * own applyRollMode semantics but version-independent. publicroll clears any
     * inherited whisper.
     */
    _whisperForRollMode(rollMode) {
        const gmIds = game.users.filter(u => u.isGM).map(u => u.id);
        switch (rollMode) {
            case 'gmroll':    return { whisper: gmIds, blind: false };
            case 'blindroll': return { whisper: gmIds, blind: true };
            case 'selfroll':  return { whisper: [game.user.id], blind: false };
            default:          return { whisper: [], blind: false }; // publicroll
        }
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
        try { game.socket?.off(`module.${MODULE_ID}`); } catch (e) { /* noop */ }
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

        // The scheme comes from the Agent URL unless the GM has explicitly said
        // otherwise. This used to read a Boolean setting, and a registered
        // Boolean is always a boolean, so the `typeof` guard here never fell
        // through and the URL was never consulted: with the tick-box defaulting
        // to ON, every http Agent dialled wss://host:443 and simply never
        // connected. See resolveWsSecurity.
        const useTLS = resolveWsSecurity(useSSLSetting, apiUrl);

        // The port is a property of where the Agent is served, so it comes
        // from the Agent URL and never from the TLS choice above: an Agent on
        // http://192.168.1.50:8000 serves its WebSocket on 8000 too, and
        // falling back to the scheme's default dialled a port nothing was
        // listening on. Deriving it from useTLS instead would also mean the
        // scheme override silently moved the port, which is not what it says.
        const defaultPort = baseUrl.port
            ? Number(baseUrl.port)
            : (baseUrl.protocol === 'https:' ? 443 : 80);
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
            // Proceed for the embedded Agent even without Reverb/token: in embed
            // there is no hosted connection, but sendResponse still tees the
            // SHEET_DELTA into the local iframe. Without this, live HP/ammo (and
            // every other actor/item change) never reached the embedded sheet.
            if (!this.isConnected && !token && !this.embedTransport) return;
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

        // Wall blocking for Agent moves lives in handlers/tokens.js moveToken, not
        // a global preUpdateToken hook: a hook here also blocked the GM's own drags.

        // Item effects (drugs snorted, injuries toggled) change via ActiveEffect
        // documents, which never fire updateItem. Resend the item's effects array
        // so the Agent's roll mods and stat display stay live.
        const syncItemEffects = (effect) => {
            const item = effect.parent;
            const actor = item?.parent;
            if (!(item instanceof Item) || !(actor instanceof Actor)) return;
            syncUpdate(actor, { [`items.${item.id}.effects`]: item.toObject().effects });
        };
        this.hookIds.createActiveEffect = Hooks.on('createActiveEffect', syncItemEffects);
        this.hookIds.updateActiveEffect = Hooks.on('updateActiveEffect', syncItemEffects);
        this.hookIds.deleteActiveEffect = Hooks.on('deleteActiveEffect', syncItemEffects);

        this.hookIds.deleteToken = Hooks.on('deleteToken', (token, options, userId) => {
            this.broadcastRefresh('VISIBLE_TOKENS_DATA');
        });

        // Stamp the player's chosen roll mode (whisper/blind) onto an
        // Agent-initiated roll BEFORE it's created, so Foundry delivers it with
        // the right visibility natively — this is "privacy reflected in game",
        // and it's also what gates cross-agent fan-out (Foundry only replicates
        // a whisper/blind message to its recipients). preCreate fires only on
        // the originating client, so this only ever touches our own roll.
        this.hookIds.preCreateChatMessage = Hooks.on('preCreateChatMessage', (message, data, options, userId) => {
            // Gate on the capture only, not on message.rolls: CPR does not always
            // populate the rolls array at preCreate time, and during a capture the
            // message being created IS our roll (preCreate fires only on the
            // originating client for a message it is creating).
            if (!this._isCapturingRoll || !this._captureRollMode) return;
            try {
                const vis = this._whisperForRollMode(this._captureRollMode);
                message.updateSource(vis);
                if (game.settings.get(MODULE_ID, 'debugMode')) {
                    console.log(`%c[Bridge] Stamped rollMode ${this._captureRollMode}`, "color:#c084fc; font-weight:bold;", vis);
                }
            } catch (e) {
                console.warn('[Bridge] Failed to apply roll-mode visibility', e);
            }
        });

        this.hookIds.createChatMessage = Hooks.on('createChatMessage', (message, options, userId) => {
            const hasRolls = !!(message.rolls && message.rolls.length > 0);
            const mine = message.author?.id === game.user.id;
            if (game.settings.get(MODULE_ID, 'debugMode')) {
                console.log(`%c[Bridge] createChatMessage: hasRolls=${hasRolls} mine=${mine} capturing=${this._isCapturingRoll} embed=${!!this.embedTransport}`, "color:#00ff88; font-weight:bold;");
            }
            if (!hasRolls) return;

            // Only act on MY own rolls here. Peers no longer tee from
            // createChatMessage: CPR does not populate message.rolls on the
            // receiving client (hasRolls comes through false), so that path was
            // dead. Peers now receive roll results over game.socket instead (see
            // _emitRollToPeers), driven by the roller's clean captured data.
            if (!mine) return;

            // Agent-initiated roll: we're mid-capture and rollAndCapture emits the
            // ROLL_RESULT itself, so consume the capture and skip the duplicate. A
            // Foundry-native roll by me broadcasts normally, which also fans out to
            // peers via the socket inside sendResponse.
            if (this._isCapturingRoll) {
                this._endRollCapture();
                return;
            }
            this.broadcastRoll(message);
        });

        // Peer roll fan-out (embed has no shared Reverb channel). Each client tees
        // a roll it receives here into its own iframe, but only if it's an allowed
        // recipient for that roll mode, so gm/blind/self privacy is preserved.
        console.log(`%c[Bridge] registerGlobalHooks: user=${game.user?.name} isGM=${game.user?.isGM} socket=${!!game.socket} → registering peer-roll listener on module.${MODULE_ID}`, "color:#00ffff; font-weight:bold;");
        if (game.socket) {
            game.socket.on(`module.${MODULE_ID}`, (msg) => {
                if (!msg || msg.kind !== 'peer-roll' || !msg.payload) return;
                // Unconditional logs (not debug-gated): debugMode is client-scoped,
                // so an observer usually has it off. These prove socket delivery.
                console.log(`%c[Bridge] peer-roll socket IN (rollMode=${msg.payload.rollMode}, recipients=${JSON.stringify(msg.recipients)}, embed=${!!this.embedTransport})`, "color:#00ff88; font-weight:bold;");
                if (Array.isArray(msg.recipients) && !msg.recipients.includes(game.user.id)) {
                    console.log('%c[Bridge] peer-roll dropped: not a recipient', "color:#ffaa00;");
                    return;
                }
                if (!this.embedTransport) {
                    console.log('%c[Bridge] peer-roll dropped: no embedTransport (Agent window not open on this client)', "color:#ffaa00;");
                    return;
                }
                console.log('%c[Bridge] peer-roll → iframe', "color:#00ff88; font-weight:bold;");
                try { this.embedTransport.send(msg.payload); }
                catch (e) { console.error("Cyberpunk Bridge: peer-roll tee failed", e); }
            });
        }
    }

    /**
     * Recipients allowed to see a roll of the given mode, mirroring Foundry's own
     * whisper visibility. null means everyone (public). The roller is always
     * included so their own client logic stays consistent (it sees the roll via
     * its local tee anyway; the socket never loops back to the sender).
     */
    _rollRecipients(rollMode) {
        if (!rollMode || rollMode === 'publicroll') return null;
        const gmIds = game.users.filter(u => u.isGM).map(u => u.id);
        const me = game.user.id;
        if (rollMode === 'selfroll') return [me];
        return [...new Set([...gmIds, me])]; // gmroll / blindroll
    }

    /**
     * Fan a roll result out to peer clients over Foundry's socket. Each peer's
     * listener tees it into its own iframe (small side popup). Recipient list
     * enforces roll-mode privacy; game.socket.emit never echoes to the sender, so
     * the roller does not double-see its own roll.
     */
    _emitRollToPeers(data) {
        if (!game.socket) return;
        const recipients = this._rollRecipients(data.rollMode);
        if (game.settings.get(MODULE_ID, 'debugMode')) {
            console.log(`%c[Bridge] peer-roll socket OUT (type=${data.type}, rollMode=${data.rollMode}, recipients=${JSON.stringify(recipients)})`, "color:#00ffff; font-weight:bold;");
        }
        try {
            game.socket.emit(`module.${MODULE_ID}`, {
                kind: 'peer-roll',
                payload: data,
                recipients
            });
        } catch (e) {
            console.error("Cyberpunk Bridge: peer-roll emit failed", e);
        }
    }

    broadcastRefresh(type) {
        this.sendResponse({ type: 'REFRESH_SIGNAL', target: type });
    }

    broadcastRoll(message, { localOnly = false } = {}) {
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

        if (game.settings.get(MODULE_ID, 'debugMode')) {
            console.log(`%c[Bridge] broadcastRoll ${localOnly ? '(peer→iframe)' : '(mine)'} rollMode=${rollMode} total=${roll?.total}`, "color:#00ff88; font-weight:bold;");
        }

        let rollJson = null;
        try { rollJson = roll.toJSON(); } catch (e) { /* CPRRoll may not serialize on a peer; the tee doesn't need it */ }

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
                _roll: rollJson
            },
            success: true
        }, { localOnly });
    }

    /**
     * Send results outbound. Enriches the message, tees it to an embedded
     * Agent iframe (postMessage) when one is attached, then POSTs to Laravel
     * if a hosted Agent is configured. Either transport may be absent.
     */
    async sendResponse(data, { localOnly = false } = {}) {
        // --- Enrich (transport-agnostic) ---
        // Include agent-link if available on the current Foundry user. For a
        // localOnly peer roll we must NOT fall back to *this* user's link — the
        // roll isn't ours, and mis-stamping it would make our own iframe treat a
        // peer's roll as mine (big popup instead of the small side icon).
        const agentLink = (data.requestId ? this.requestAgentLinks.get(data.requestId) : null)
            || (localOnly ? null : game.user.getFlag(MODULE_ID, 'agent-link'));
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

        // --- Tee to the embedded iframe (local postMessage path) ---
        if (this.embedTransport) {
            try { this.embedTransport.send(data); }
            catch (e) { console.error("Cyberpunk Bridge: Embed send failed", e); }
        }

        // Fan roll results out to peer clients over Foundry's socket so other
        // agents get the small side popup. Embed has no shared Reverb channel, and
        // CPR doesn't carry the roll on the replicated chat message, so this is the
        // path that reaches peers. localOnly messages are already peer-received.
        if (!localOnly && (data.type === 'ROLL_RESULT' || data.type === 'DICE_ROLL_EVENT')) {
            this._emitRollToPeers(data);
        }

        // A peer's roll teed into our own iframe must not also be re-reported to
        // Laravel: the author's client already owns that broadcast.
        if (localOnly) return null;

        // --- Hosted Laravel path (unchanged) ---
        let apiUrl = game.settings.get(MODULE_ID, 'apiUrl');
        const token = game.settings.get(MODULE_ID, 'apiKey');
        if (!apiUrl || !token) return null;

        // Ensure no trailing slash
        if (apiUrl.endsWith('/')) {
            apiUrl = apiUrl.slice(0, -1);
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

        const tokenId = resolveTokenId(data.tokenId, actorId);

        await dispatch(this, type, data, { type, requestId, actorId, tokenId, debug, remote: true });
    }

    /**
     * Ingress for messages arriving from an embedded Agent iframe.
     * Skips the Laravel-oriented channel/agentLink routing in handleIncomingData:
     * the iframe runs in this same client for this same user, already
     * authenticated by Foundry and validated (origin + nonce) at the transport.
     * Foundry's own permission model still gates every handler action.
     */
    async handleIncomingDataLocal(data) {
        const type = data.type;
        const requestId = data.requestId;
        const actorId = data.actorId;
        const debug = game.settings.get(MODULE_ID, 'debugMode');

        const tokenId = resolveTokenId(data.tokenId, actorId);

        if (debug) console.log(`%c[Bridge] Embed Call: ${type}`, "color: #c084fc; font-weight: bold;", data);

        await dispatch(this, type, data, { type, requestId, actorId, tokenId, debug });
    }

    reconnect() {
        if (game.user.isGM && this.echo) {
            this.connect();
        }
    }
}