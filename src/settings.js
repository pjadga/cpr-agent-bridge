import { MODULE_ID, DEFAULT_REVERB_KEY, DEFAULT_API_URL } from './constants.js';
import { CharacterAssignmentMenu } from './ui/character-assignment.js';

// ==================================================================
// MODULE SETTINGS
// ==================================================================

/**
 * Register all module settings + menus. Settings onChange handlers delegate
 * to the live bridge instance.
 * @param {CyberpunkBridge} bridge
 */
export function registerSettings(bridge) {
    // Register the GM Menu
    game.settings.registerMenu(MODULE_ID, 'characterAssignment', {
        name: 'Player Assignments',
        label: 'Manage Characters',
        hint: 'Assign playable characters to players who have linked their Agent API keys.',
        icon: 'fas fa-users',
        type: CharacterAssignmentMenu,
        restricted: true // GM Only
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
        name: 'Reverb Host (override)',
        scope: 'world',
        config: true,
        type: String,
        default: '',
        onChange: () => bridge.reconnect()
    });

    game.settings.register(MODULE_ID, 'reverbPort', {
        name: 'Reverb Port',
        scope: 'world',
        config: true,
        type: Number,
        default: 0,
        onChange: () => bridge.reconnect()
    });

    game.settings.register(MODULE_ID, 'reverbUseSSL', {
        name: 'Reverb Use SSL (wss)',
        scope: 'world',
        config: true,
        type: Boolean,
        default: true,
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