// Handlers for stat/wealth mutations: UPDATE_STAT, UPDATE_EB.

export async function updateStat(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const path = `system.${data.label}`;
        let newValue;
        if (data.operation === 'inc') {
            // Resolve current value from nested path and add delta
            const parts = path.split('.');
            let cur = actor;
            for (let i = 0; i < parts.length; i++) {
                cur = (i === 0 ? cur[parts[i]] : cur?.[parts[i]]);
            }
            const currentVal = Number(cur) || 0;
            const delta = Number(data.delta) || 0;
            newValue = currentVal + delta;
        } else {
            // Check if value is a string or number
            newValue = (typeof data.value === 'string') ? data.value : (Number(data.value) || 0);
        }
        await actor.update({ [path]: newValue });
        // Send a focused sheet delta back to Agent and persist via API
        await bridge.sendResponse({ type: 'SHEET_DELTA', actorId: actorId, delta: { [path]: newValue }, tab: 'stats', success: true, requestId });
    }
}

export async function updateEb(bridge, data, { requestId, actorId, debug }) {
    if (actorId == null) {
        if (debug) console.log("[Bridge] Actor ID Not set:");
        return;
    }

    let actor = game.actors.get(actorId);

    if (data.action == null || data.value == null) {
        if (debug) console.log("[Bridge] EuroBucks data error");
    }

    switch (data.action) {
        case 'add':
            actor.deltaLedgerProperty("wealth", data.value, data.reason);
            break;
        case 'subtract':
            actor.deltaLedgerProperty("wealth", -Number(data.value), data.reason);
            break;
        case 'set':
            actor.setLedgerProperty("wealth", data.value, data.reason);
            break;
    }

    if (actor) {
        await bridge.sendResponse({ type: 'SHEET_DELTA', actorId: actorId, delta: { 'system.wealth': actor.system.wealth }, tab: 'stats', success: true, requestId });
    }
}
