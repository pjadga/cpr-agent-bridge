// Handlers for cyberware install / uninstall.
//
// CPR's actor.installCyberware(itemId) is a single Foundry-dialog flow (find
// targets -> pick foundational + humanity-loss option -> installItems +
// loseHumanityValue). That dialog only renders in Foundry, so the Agent can't
// drive it. We split it: PREPARE_CYBERWARE_INSTALL replicates the pre-dialog
// logic and returns targets + humanity options to the app; INSTALL_CYBERWARE
// commits the app's choices; UNINSTALL_CYBERWARE wraps actor.uninstallCyberware.
// See src/modules/actor/cpr-actor.js installCyberware() in the CPR system.

import { getActor } from './actors.js';

// isInstalled/isFoundational are derived getters, so an install/uninstall does
// not emit them via SHEET_DELTA. Push a fresh ACTOR_DATA so the Agent's derived
// fields (install/uninstall affordances) recompute.
async function refreshActor(bridge, actorId, requestId) {
    try { await getActor(bridge, { actorId }, { requestId, actorId }); }
    catch (e) { console.error('[Bridge] cyberware refreshActor failed', e); }
}

/**
 * Cyberware installed inside `item` (recursively), cyberware type only.
 * Falls back to an empty list if the CPR helper isn't present.
 */
function installedSubCyberware(item) {
    if (typeof item.recursiveGetAllInstalledItems !== 'function') return [];
    return item.recursiveGetAllInstalledItems().filter((i) => i.type === 'cyberware');
}

/**
 * Compatible install targets for a non-foundational cyberware item: installed
 * foundational cyberware of the same type, plus any option-slot container nested
 * under them that allows this item's type and has room. Mirrors CPR's
 * compatibleTargetCyberware build in installCyberware().
 */
function compatibleTargets(actor, item) {
    const baseFoundational = actor.items.filter(
        (cw) =>
            cw.type === 'cyberware' &&
            cw.system.isInstalled &&
            cw.system.isFoundational &&
            cw.system.type === item.system.type,
    );

    const targets = [];
    for (const foundational of baseFoundational) {
        targets.push({ id: foundational._id, name: foundational.name });

        let idList = [...(foundational.system.installedItems?.list || [])];
        while (idList.length > 0) {
            const loop = idList;
            idList = [];
            for (const id of loop) {
                const lookup = actor.items.get(id);
                const inst = lookup?.system?.installedItems;
                // A container is anything that declares installedItems.allowed
                // (avoids CPR's internal SystemUtils.getDocTypesFromMixin).
                if (inst?.allowed) {
                    const slots = typeof lookup.availableInstallSlots === 'function'
                        ? lookup.availableInstallSlots()
                        : Infinity;
                    if (inst.allowedTypes?.includes(item.type) && slots >= (item.system.size || 1)) {
                        targets.push({ id: lookup._id, name: lookup.name });
                    }
                    idList = idList.concat(inst.list || []);
                }
            }
        }
    }
    return targets;
}

export async function prepareCyberwareInstall(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) return;
    const item = actor.items.get(data.itemId);
    if (!item) {
        await bridge.sendResponse({ type: 'CYBERWARE_INSTALL_OPTIONS', requestId, actorId, success: false, reason: 'Item not found.' });
        return;
    }

    const isFoundational = !!item.system.isFoundational;
    const targets = isFoundational ? [] : compatibleTargets(actor, item);
    const subItems = installedSubCyberware(item);

    // Accumulate humanity-loss formulae over the item and anything already in it.
    const rolled = subItems.reduce((acc, i) => `${acc} + ${i.system.humanityLoss.roll}`, item.system.humanityLoss.roll);
    const fixed = subItems.reduce((acc, i) => acc + i.system.humanityLoss.static, item.system.humanityLoss.static);

    const canInstall = isFoundational || targets.length > 0;

    await bridge.sendResponse({
        type: 'CYBERWARE_INSTALL_OPTIONS',
        requestId,
        actorId,
        itemId: item._id,
        itemName: item.name,
        isFoundational,
        canInstall,
        reason: canInstall ? null : 'No compatible foundational cyberware of the correct type is installed.',
        targets,
        humanityLoss: { roll: `${rolled}`, static: fixed },
        success: true,
    });
}

export async function installCyberware(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) return;
    const item = actor.items.get(data.itemId);
    if (!item) return;

    const isFoundational = !!item.system.isFoundational;
    const target = isFoundational ? actor : actor.items.get(data.foundationalId);
    if (!target) {
        await bridge.sendResponse({ type: 'CYBERWARE_INSTALLED', requestId, actorId, itemId: data.itemId, success: false, reason: 'Install target not found.' });
        return;
    }

    const subItems = installedSubCyberware(item);
    const humanityLossType = data.humanityLossType || 'none';

    let success = false;
    try {
        // Capture humanity before/after so we can surface the loss like a dice
        // roll. loseHumanityValue rolls internally and posts a CPR chat card but
        // doesn't hand back a total, so the delta is our result.
        const before = Number(actor.system?.derivedStats?.humanity?.value) || 0;
        success = await target.installItems([item]);
        if (success) {
            await actor.loseHumanityValue([item].concat(subItems), humanityLossType);

            if (humanityLossType !== 'none') {
                const after = Number(actor.system?.derivedStats?.humanity?.value) || 0;
                const loss = Math.max(0, before - after);
                // Route through the same path as dice rolls: local tee = big popup
                // for the installer, _emitRollToPeers (in sendResponse) = mini side
                // popup on other agents.
                await bridge.sendResponse({
                    type: 'ROLL_RESULT',
                    actorId,
                    playerName: actor.name,
                    total: loss,
                    rollMode: 'publicroll',
                    label: `${item.name} Humanity Loss`,
                    rawRoll: {
                        rollTitle: `${item.name} Humanity Loss`,
                        total: loss,
                        formula: humanityLossType === 'static' ? `${loss}` : '',
                    },
                    success: true,
                });
            }
        }
    } catch (e) {
        console.error('[Bridge] installCyberware failed', e);
    }

    await bridge.sendResponse({ type: 'CYBERWARE_INSTALLED', requestId, actorId, itemId: item._id, success });
    if (success) await refreshActor(bridge, actorId, requestId);
}

export async function uninstallCyberware(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) return;
    try {
        // skipConfirm = true: no Foundry dialog; the Agent already confirmed.
        await actor.uninstallCyberware(data.itemId, data.foundationalId || null, true);
    } catch (e) {
        console.error('[Bridge] uninstallCyberware failed', e);
    }
    await bridge.sendResponse({ type: 'CYBERWARE_UNINSTALLED', requestId, actorId, itemId: data.itemId, success: true });
    await refreshActor(bridge, actorId, requestId);
}
