// Handlers for cyberdeck/netrunning: INSTALL_PROGRAM, REMOVE_PROGRAM, TOGGLE_REZ, PROGRAM_ROLL.

export async function installProgram(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) return;

    const deck = actor.items.get(data.cyberdeckId);
    const program = actor.items.get(data.programId);
    if (!deck || !program) return;

    const currentSlots = deck.system.installedItems.usedSlots || 0;
    const maxSlots = deck.system.installedItems.slots || 0;
    const progSize = program.system.size || 1;

    if (currentSlots + progSize > maxSlots) {
        ui.notifications.warn("Not enough memory slots on cyberdeck.");
        return;
    }

    const currentList = deck.system.installedItems.list || [];
    if (currentList.includes(data.programId)) return;

    const newList = [...currentList, data.programId];
    const newUsedSlots = currentSlots + progSize;

    await deck.update({
        'system.installedItems.list': newList,
        'system.installedItems.usedSlots': newUsedSlots
    });

    await bridge.sendResponse({
        type: 'SHEET_DELTA',
        actorId: actorId,
        delta: {
            [`items.${data.cyberdeckId}.system.installedItems.list`]: newList,
            [`items.${data.cyberdeckId}.system.installedItems.usedSlots`]: newUsedSlots
        },
        success: true,
        requestId
    });
}

export async function removeProgram(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) return;

    const deck = actor.items.get(data.cyberdeckId);
    const program = actor.items.get(data.programId);
    if (!deck) return;

    const currentList = deck.system.installedItems.list || [];
    if (!currentList.includes(data.programId)) return;

    const newList = currentList.filter(id => id !== data.programId);
    const progSize = program ? (program.system.size || 1) : 1;
    const currentSlots = deck.system.installedItems.usedSlots || 0;
    const newSlots = Math.max(0, currentSlots - progSize);

    await deck.update({
        'system.installedItems.list': newList,
        'system.installedItems.usedSlots': newSlots
    });

    const delta = {
        [`items.${data.cyberdeckId}.system.installedItems.list`]: newList,
        [`items.${data.cyberdeckId}.system.installedItems.usedSlots`]: newSlots
    };

    if (program && program.system.isRezzed) {
        await program.update({ 'system.isRezzed': false });
        delta[`items.${data.programId}.system.isRezzed`] = false;
    }

    await bridge.sendResponse({ type: 'SHEET_DELTA', actorId: actorId, delta, success: true, requestId });
}

export async function toggleRez(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const program = actor.items.get(data.programId);
        if (program) {
            await program.update({ 'system.isRezzed': data.targetState });
            await bridge.sendResponse({
                type: 'SHEET_DELTA',
                actorId: actorId,
                delta: { [`items.${data.programId}.system.isRezzed`]: data.targetState },
                success: true,
                requestId
            });
        }
    }
}

export async function programRoll(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const dummyBtn = document.createElement('a');
        dummyBtn.dataset.rollType = data.rollType;
        dummyBtn.dataset.cyberdeckId = data.cyberdeckId;
        dummyBtn.dataset.rollTitle = data.programName;
        dummyBtn.dataset.interfaceAbility = data.programName;
        dummyBtn.dataset.itemId = data.cyberdeckId;
        dummyBtn.dataset.programId = data.programId;
        dummyBtn.dataset.executionType = data.executionType;

        const trigger = async () => {
            await actor.sheet._onRoll({
                type: 'click',
                currentTarget: dummyBtn
            });
        };

        const result = await bridge.rollAndCapture(actorId, trigger, data.rollMode);

        if (result.success) {
            await bridge.sendResponse({
                type: 'ROLL_RESULT',
                rollMode: result.rollMode,
                requestId: requestId,
                actorId: actorId,
                total: result.total,
                isCriticalSuccess: result.isCriticalSuccess,
                isCriticalFailure: result.isCriticalFailure,
                label: data.programName,
                rawRoll: {
                    total: result.total,
                    isCriticalSuccess: result.isCriticalSuccess,
                    isCriticalFailure: result.isCriticalFailure,
                    label: result.label,
                    resultTotal: result.rawRoll?.resultTotal,
                    rollTitle: result.rawRoll?.rollTitle
                },
                success: true
            });
        }
    }
}
