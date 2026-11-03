import { MODULE_ID } from './constants.js';
import { nextRoll } from './roll-tap.js';

// ==================================================================
// ROLL CAPTURE
//
// Runs a roll triggered programmatically (an Agent-initiated roll) and
// resolves with its result, read from the roll card through the roll tap.
// ==================================================================

// After the trigger returns (the roll dialog was confirmed or cancelled), how
// long to wait for its card before giving up.
const AFTER_TRIGGER_MS = 1500;
// Upper bound while a roll dialog waits for someone to confirm it.
const MAX_WAIT_MS = 120000;

/**
 * Run `triggerFunction` and resolve with the captured roll's result.
 * @param {CyberpunkBridge} bridge
 * @param {string} actorId
 * @param {Function} triggerFunction
 * @param {string|null} rollMode
 */
export async function rollAndCapture(bridge, actorId, triggerFunction, rollMode = null) {
    if (game.settings.get(MODULE_ID, 'debugMode')) {
        console.log(`%c[Bridge] Capturing a roll for Actor ${actorId}`, "color: #00ffff; font-weight: bold;");
    }

    // Marks the capture active and mirrors rollMode onto core.rollMode. Awaited
    // so the setting has landed before the roll fires. The flag is consumed later
    // by the roll's createChatMessage (or a safety timer), NOT here, so the
    // privacy stamp and the self-roll dedupe still apply to its chat message.
    await bridge._beginRollCapture(rollMode, MAX_WAIT_MS);

    const roll = nextRoll();
    const failed = (error) => {
        roll.cancel();
        bridge._endRollCapture();
        return { success: false, error };
    };

    let timer;
    const timeout = new Promise((resolve) => { timer = setTimeout(() => resolve(null), MAX_WAIT_MS); });
    const triggered = (async () => {
        await triggerFunction();
        // A cancelled dialog renders no card: give a confirmed one a moment, then stop waiting.
        await new Promise((resolve) => setTimeout(resolve, AFTER_TRIGGER_MS));
        return null;
    })();

    let summary;
    try {
        summary = await Promise.race([roll.promise, triggered, timeout]);
    } catch (e) {
        clearTimeout(timer);
        return failed('Trigger failed');
    }
    clearTimeout(timer);
    if (!summary) {
        console.warn("[Bridge] No roll card was rendered for the Agent's roll.");
        return failed('No roll card rendered');
    }

    // The card's chat message follows; leave the capture to it, with a short safety net.
    bridge._armCaptureSafety();
    return {
        success: true,
        total: summary.total,
        isCriticalSuccess: summary.isCriticalSuccess,
        isCriticalFailure: summary.isCriticalFailure,
        label: summary.label,
        rollMode: bridge._captureRollMode || game.settings.get("core", "rollMode"),
        rawRoll: summary.rawRoll
    };
}
