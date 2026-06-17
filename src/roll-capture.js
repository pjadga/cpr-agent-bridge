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
    bridge._isCapturingRoll = true;

    const prevRollMode = game.settings.get("core", "rollMode");
    if (rollMode) await game.settings.set("core", "rollMode", rollMode);

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
                    rollMode: rollMode || game.settings.get("core", "rollMode"),
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
                resolve({ success: false, error: "Timed out waiting for render" });
            }
        }, 5000);

        try {
            await triggerFunction();
        } catch (e) {
            renderTemplate = originalRender;
            resolve({ success: false, error: "Trigger failed" });
        }
    });
}