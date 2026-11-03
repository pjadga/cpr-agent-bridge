import { rollSummary } from './roll-summary.js';

// ==================================================================
// ROLL TAP
//
// Every Cyberpunk RED roll card goes through CPRChat.RenderRollCard(cprRoll),
// called through the class in Core 0.92 (Foundry v12) and 0.93 (v13) alike.
// Wrapping it hands us the full CPRRoll before it becomes a chat message, on
// both versions. (Patching the global renderTemplate only worked on 0.92: 0.93
// imports v13's foundry.applications.handlebars.renderTemplate directly.)
// ==================================================================

const CPR_CHAT_PATH = 'systems/cyberpunk-red-core/modules/chat/cpr-chat.js';
const listeners = new Set();
let lastRoll = null;

/**
 * Wrap CPRChat.RenderRollCard once. The system module is imported by the same
 * URL Foundry loaded it from (route prefix included), so it is the same class.
 * @returns {Promise<boolean>} whether the tap is in place
 */
export async function installRollTap() {
    try {
        const route = foundry.utils.getRoute ?? globalThis.getRoute;
        const { default: CPRChat } = await import(/* @vite-ignore */ route(CPR_CHAT_PATH));
        if (typeof CPRChat?.RenderRollCard !== 'function') return false;
        if (CPRChat.RenderRollCard.cprAgentTap) return true;

        const original = CPRChat.RenderRollCard;
        const tapped = function (roll, ...rest) {
            try {
                const summary = rollSummary(roll);
                if (summary) {
                    lastRoll = { summary, at: Date.now() };
                    for (const listener of [...listeners]) listener(summary);
                }
            } catch (e) {
                console.warn('[Bridge] Roll tap failed to read a roll.', e);
            }
            return original.call(this, roll, ...rest);
        };
        tapped.cprAgentTap = true;
        CPRChat.RenderRollCard = tapped;
        return true;
    } catch (e) {
        console.warn('[Bridge] Could not tap Cyberpunk RED roll cards; roll totals come from the chat card instead.', e);
        return false;
    }
}

/**
 * Wait for the next roll card.
 * @returns {{promise: Promise<object>, cancel: Function}} resolves with a rollSummary
 */
export function nextRoll() {
    let listener;
    const promise = new Promise((resolve) => {
        listener = (summary) => {
            listeners.delete(listener);
            resolve(summary);
        };
        listeners.add(listener);
    });
    return { promise, cancel: () => listeners.delete(listener) };
}

/**
 * The summary of the roll card rendered in the last few seconds, used once.
 * The chat message a card becomes is created right after it is rendered.
 */
export function takeRecentRoll(maxAgeMs = 3000) {
    const recent = lastRoll;
    lastRoll = null;
    return recent && Date.now() - recent.at <= maxAgeMs ? recent.summary : null;
}
