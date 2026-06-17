import Pusher from 'pusher-js';
import { MODULE_ID } from './constants.js';
import { CyberpunkBridge } from './bridge.js';
import { DataPoolPageModel } from "./data-pool-model.js";
import { DataPoolPageSheet } from "./data-pool-sheet.js";

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
    console.log("[Bridge] Cyberpunk Bridge Fully Online.");
});

function ensureSettingsRegistered() {
    if (!game.settings.settings.has(`${MODULE_ID}.apiUrl`)) {
        console.log("[Bridge] Registering Module Settings...");
        window.cyberpunkBridge.registerSettings();
    }
}
