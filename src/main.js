import Pusher from 'pusher-js';
import { MODULE_ID } from './constants.js';
import { CyberpunkBridge } from './bridge.js';
import { registerPairingHooks } from './pairing-hooks.js';
import { DataPoolPageModel } from "./data-pool-model.js";
import { DataPoolPageSheet } from "./data-pool-sheet.js";
import { AgentApp } from "./ui/agent-app.js";

// Make Pusher available globally (required for Echo)
window.Pusher = Pusher;

// ==================================================================
// BOOT SEQUENCE & VITE ASYNC FAILSAFE
// ==================================================================

if (window.cyberpunkBridge) {
    window.cyberpunkBridge.destroy();
}
window.cyberpunkBridge = new CyberpunkBridge();

Hooks.once('init', () => {
    ensureSettingsRegistered();

    if (!CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"]) {
        CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = DataPoolPageModel;
        console.log("[Bridge] Registered DataPool DataModel.");
    }
    DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", DataPoolPageSheet, {
        types: ["cpr-agent.datapool"],
        makeDefault: true,
        label: "Agent Data Pool"
    });
    console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});

Hooks.once('ready', () => {
    if (game.user.isGM) {
        window.cyberpunkBridge.connect();
    }
    window.cyberpunkBridge.syncPlayerLink();
    window.cyberpunkBridge.registerGlobalHooks();
    registerPairingHooks(window.cyberpunkBridge);

    // Open (or focus) the embedded Agent window. Fed locally via postMessage.
    window.cyberpunkBridge.openAgent = () => {
        if (!window.cyberpunkBridge._agentApp) {
            window.cyberpunkBridge._agentApp = new AgentApp(window.cyberpunkBridge);
        }
        window.cyberpunkBridge._agentApp.render(true);
    };

    console.log("[Bridge] Cyberpunk Bridge Fully Online. Open the embedded Agent with: cyberpunkBridge.openAgent()");
});

// Token-controls button to open the embedded Agent window.
Hooks.on('getSceneControlButtons', (controls) => {
    const tokenControls = Array.isArray(controls)
        ? controls.find(c => c.name === 'token')
        : controls?.token;
    if (!tokenControls?.tools) return;
    tokenControls.tools.push({
        name: 'cpr-agent',
        title: 'Open Agent',
        icon: 'fas fa-mobile-screen-button',
        button: true,
        onClick: () => window.cyberpunkBridge?.openAgent?.()
    });
});

function ensureSettingsRegistered() {
    if (!game.settings.settings.has(`${MODULE_ID}.apiUrl`)) {
        console.log("[Bridge] Registering Module Settings...");
        window.cyberpunkBridge.registerSettings();
    }
}
