// ==================================================================
// ROLL CAPTURE
//
// Intercepts Foundry's renderTemplate to capture the result of a roll
// triggered programmatically (so Agent-initiated rolls return a result).
// ==================================================================

/**
 * Run `triggerFunction` and resolve with the captured rollcard result.
 * @param {CyberpunkBridge} bridge
 * @param {string} actorId
 * @param {Function} triggerFunction
 * @param {string|null} rollMode
 */
export async function rollAndCapture(bridge, actorId, triggerFunction, rollMode = null) {
    console.log(`%c[Bridge] Starting Render Interceptor for Actor ${actorId}`, "color: #00ffff; font-weight: bold;");

    // Marks the capture active and mirrors rollMode onto core.rollMode. Awaited
    // so the setting has landed before the roll fires. The flag is consumed later
    // by the roll's createChatMessage (or a safety timer), NOT here: resetting it
    // at render time would fire before preCreateChatMessage and lose the privacy
    // stamp and the self-roll dedupe.
    await bridge._beginRollCapture(rollMode);

    return new Promise(async (resolve, reject) => {
        let rollFound = false;
        const originalRender = renderTemplate;

        const spyRender = function(path, data) {
            if (path && typeof path === 'string' && path.includes('rollcard')) {
                console.log(`%c[Bridge] Intercepted Render: ${path}`, "color: #00ff00;", data);
                rollFound = true;
                renderTemplate = originalRender;

                resolve({
                    success: true,
                    total: data.resultTotal,
                    isCriticalSuccess: data.wasCritSuccess ? data.wasCritSuccess() : (data.isCriticalSuccess || false),
                    isCriticalFailure: data.wasCritFail ? data.wasCritFail() : (data.isCriticalFailure || false),
                    label: data.rollTitle,
                    rollMode: bridge._captureRollMode || game.settings.get("core", "rollMode"),
                    rawRoll: data
                });
            }
            return originalRender.apply(this, arguments);
        };

        renderTemplate = spyRender;

        setTimeout(async () => {
            if (!rollFound) {
                renderTemplate = originalRender;
                console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered.");
                bridge._endRollCapture();
                resolve({ success: false, error: "Timed out waiting for render" });
            }
        }, 5000);

        try {
            await triggerFunction();
        } catch (e) {
            renderTemplate = originalRender;
            bridge._endRollCapture();
            resolve({ success: false, error: "Trigger failed" });
        }
    });
}