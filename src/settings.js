import { MODULE_ID, DEFAULT_REVERB_KEY, DEFAULT_API_URL } from './constants.js';
import { CharacterAssignmentMenu } from './ui/character-assignment.js';
import { AgentLinkMenu } from './ui/agent-link-menu.js';
import { QuickSetupMenu } from './ui/quick-setup.js';

// ==================================================================
// MODULE SETTINGS
// ==================================================================

/**
 * Register all module settings + menus. Settings onChange handlers delegate
 * to the live bridge instance.
 * @param {CyberpunkBridge} bridge
 */
export function registerSettings(bridge) {
    // GM one-paste connection setup from the Agent's "Foundry Setup Code".
    game.settings.registerMenu(MODULE_ID, 'quickSetup', {
        name: 'Quick Setup',
        label: 'Paste Agent Config',
        hint: 'Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.',
        icon: 'fas fa-bolt',
        type: QuickSetupMenu,
        restricted: true // GM Only
    });

    // Register the GM Menu
    game.settings.registerMenu(MODULE_ID, 'characterAssignment', {
        name: 'Player Assignments',
        label: 'Manage Characters',
        hint: 'Assign playable characters to players who have linked their Agent API keys.',
        icon: 'fas fa-users',
        type: CharacterAssignmentMenu,
        restricted: true // GM Only
    });

    // Player-facing: generate a personal pairing QR (remote self-serve).
    game.settings.registerMenu(MODULE_ID, 'agentLink', {
        name: 'Link my Agent',
        label: 'Link my Agent',
        hint: 'Generate a QR code to link the Cyberpunk Agent app on your phone to this game.',
        icon: 'fas fa-qrcode',
        type: AgentLinkMenu,
        restricted: false // Available to all players
    });

    game.settings.register(MODULE_ID, 'apiUrl', {
        name: 'Agent URL',
        hint: 'The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).',
        scope: 'world', // URL is usually the same for everyone
        config: true,
        type: String,
        default: DEFAULT_API_URL,
        onChange: () => {
            if (game.user.isGM) bridge.reconnect();
            bridge.syncPlayerLink();
        }
    });

    game.settings.register(MODULE_ID, 'reverbHost', {
        name: 'WebSocket Host (override)',
        hint: 'Leave blank. Blank means "use the same host as the Agent URL". Fill this in only if your Agent serves its WebSocket from a different hostname. Setup codes never carry a host, so this is one field pasting a code will not correct for you - clear it by hand if you set it while troubleshooting.',
        scope: 'world',
        config: true,
        type: String,
        default: '',
        onChange: () => bridge.reconnect()
    });

    game.settings.register(MODULE_ID, 'reverbPort', {
        name: 'WebSocket Port (override)',
        hint: 'Leave at 0. Zero means "use the same port as the Agent URL", which is right whenever the Agent serves its WebSocket on its own address - the normal setup. Set a port only if your Agent publishes Reverb separately. Pasting a setup code from a single-origin Agent resets this to 0.',
        scope: 'world',
        config: true,
        type: Number,
        default: 0,
        onChange: () => bridge.reconnect()
    });

    // Was a tick-box defaulting to ON, which forced wss:// on every install and
    // broke plain-http Agents outright. 'auto' reads the scheme off the Agent
    // URL, which is correct for every single-origin setup; the two explicit
    // options stay for the rare proxy that terminates TLS on a different scheme
    // than the one the Agent URL advertises.
    game.settings.register(MODULE_ID, 'reverbUseSSL', {
        name: 'WebSocket security',
        hint: 'Leave on Auto. Auto uses wss:// when your Agent URL starts with https:// and ws:// when it starts with http://, which is what you want unless a proxy in front of the Agent changes the scheme. Only override if live updates fail while the rest of the Agent works.',
        scope: 'world',
        config: true,
        type: String,
        choices: {
            auto: 'Auto - match the Agent URL (recommended)',
            wss: 'Always secure (wss://)',
            ws: 'Always plain (ws://)'
        },
        default: 'auto',
        onChange: () => bridge.reconnect()
    });

    game.settings.register(MODULE_ID, 'reverbKey', {
        name: 'Reverb App Key',
        scope: 'world',
        config: true,
        type: String,
        default: DEFAULT_REVERB_KEY,
        onChange: () => bridge.reconnect()
    });

    game.settings.register(MODULE_ID, 'apiKey', {
        name: 'API Key (Sanctum Token)',
        hint: 'Generate this in your Cyberpunk Agent dashboard.',
        scope: 'client', // Vital for player uniqueness
        config: true,
        type: String,
        default: '',
        onChange: async (val) => {
            // Update the public flag so the GM Menu instantly knows they added a key
            await game.user.setFlag(MODULE_ID, 'hasApiKey', !!val);
            if (game.user.isGM) bridge.reconnect();
            bridge.syncPlayerLink();
        }
    });

    game.settings.register(MODULE_ID, 'channelId', {
        name: 'Channel ID',
        hint: 'The unique channel name for this game group. Must match your Agent dashboard.',
        scope: 'world',
        config: true,
        type: String,
        default: '',
        onChange: () => {
            if (game.user.isGM) bridge.reconnect();
        }
    });

    game.settings.register(MODULE_ID, 'debugMode', {
        name: 'Debug Mode',
        scope: 'client',
        config: true,
        type: Boolean,
        default: false
    });
}