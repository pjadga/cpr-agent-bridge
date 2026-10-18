import { resolveWeaponDV } from '../dv.js';
import { tokenDistanceM } from '../utils.js';

// Handlers for rolls: DAMAGE_ROLL, DEATH_SAVE, FACEDOWN_ROLL, INITIATIVE_ROLL,
// ROLE_ROLL, SKILL_ROLL, STAT_ROLL, DICE_ROLL, ATTACK_ROLL.

export async function damageRoll(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    const weapon = actor.items.get(data.weaponId);

    if (actor && weapon) {
        const trigger = async () => {
            await actor.sheet._onRoll({
                'data-roll-type': 'damage',
                'data-item-id': weapon.id,
                type: 'click',
                currentTarget: {
                    'data-roll-type': 'damage',
                    'data-item-id': weapon.id
                }
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
                label: `${weapon.name} (Damage)`,
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

export async function deathSave(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const trigger = async () => {
            await actor.sheet._onRoll({
                'data-roll-type': 'deathsave',
                'data-roll-title': 'Death Save',
                type: 'click',
                currentTarget: {
                    'data-roll-type': 'deathsave',
                    'data-roll-title': 'Death Save'
                }
            });
        };

        const result = await bridge.rollAndCapture(actorId, trigger, data.rollMode);

        if (result.success) {
            // After roll, sync the updated death saves counter
            const deathSaves = actor.system.derivedStats.deathsave || {};

            await bridge.sendResponse({
                type: 'ROLL_RESULT',
                rollMode: result.rollMode,
                requestId: requestId,
                actorId: actorId,
                total: result.total,
                isCriticalSuccess: result.isCriticalSuccess,
                isCriticalFailure: result.isCriticalFailure,
                label: 'Death Save',
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

            // Also send a delta for the death save counter
            await bridge.sendResponse({
                type: 'SHEET_DELTA',
                actorId: actorId,
                delta: { 'system.derivedStats.deathsave': deathSaves },
                tab: 'stats',
                success: true
            });
        }
    }
}

export async function facedownRoll(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);

    // Define the UI Trigger
    const trigger = async () => {
        await actor.sheet._onRoll({
            'data-roll-type': 'facedown',
            'data-roll-title': 'Face Down',
            type: 'click',
            currentTarget: {
                'data-roll-type': 'facedown',
                'data-roll-title': 'Face Down'
            }
        });
    };

    // Use the Interceptor
    const result = await bridge.rollAndCapture(actorId, trigger, data.rollMode);

    if (result.success) {
        await bridge.sendResponse({
            type: 'ROLL_RESULT',
            rollMode: result.rollMode,
            requestId,
            actorId: actorId,
            total: result.total,
            isCriticalSuccess: result.isCriticalSuccess,
            isCriticalFailure: result.isCriticalFailure,
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

export async function initiativeRoll(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const trigger = async () => {
            await actor.rollInitiative();
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
                label: 'Initiative',
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

export async function roleRoll(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const item = actor.items.getName(data.itemName);
        if (item) {
            const rollData = {
                'data-roll-type': 'roleAbility',
                'data-roll-title': data.label,
                'data-item-id': item.id,
                type: 'click',
                currentTarget: {
                    'data-roll-type': 'roleAbility',
                    'data-roll-title': data.label,
                    'data-item-id': item.id,
                    'data-item-subtype': data.label
                }
            };
            if (data.isAbility) {
                rollData['data-roll-subtype'] = 'subRoleAbility';
                rollData['data-role-name'] = data.label;
                rollData.currentTarget['data-roll-subtype'] = 'subRoleAbility';
                rollData.currentTarget['data-role-name'] = data.label;
            }

            const trigger = async () => {
                await actor.sheet._onRoll(rollData);
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
                    label: data.label,
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
}

export async function skillRoll(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const item = actor.items.getName(data.label);
        if (item) {
            const trigger = async () => {
                await actor.sheet._onRoll({
                    'data-roll-type': 'skill',
                    'data-roll-title': data.label,
                    'data-item-id': item.id,
                    type: 'click',
                    currentTarget: {
                        'data-roll-type': 'skill',
                        'data-roll-title': data.label,
                        'data-item-id': item.id
                    }
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
                    label: data.label,
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
}

export async function statRoll(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const trigger = async () => {
            await actor.sheet._onRoll({
                'data-roll-type': 'stat',
                'data-roll-title': data.label,
                type: 'click',
                currentTarget: {
                    'data-roll-type': 'stat',
                    'data-roll-title': data.label
                }
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
                label: data.label,
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

export async function diceRoll(bridge, data, { requestId, actorId }) {
    if (requestId) bridge.activeRequests.set(requestId, { actorId: actorId, timestamp: Date.now() });
    const roll = new Roll(data.formula);
    await roll.evaluate();
    await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: game.actors.get(actorId) }),
        flavor: data.flavor,
        rollMode: data.rollMode || game.settings.get("core", "rollMode")
    });
    await bridge.sendResponse({
        type: 'ROLL_RESULT',
        rollMode: data.rollMode || game.settings.get("core", "rollMode"),
        requestId: requestId,
        actorId: actorId,
        total: roll.total,
        isCriticalSuccess: roll.isCriticalSuccess || false,
        isCriticalFailure: roll.isCriticalFailure || false,
        label: data.flavor || 'Dice Roll',
        rawRoll: {
            rollTitle: data.flavor || 'Dice Roll',
            _roll: roll,
            formula: roll.formula,
            resultTotal: roll.total
        },
        success: true
    });
}

export async function attackRoll(bridge, data, { requestId, actorId, tokenId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const weaponId = data.weaponId;
        const fireMode = data.fireMode;
        const targetToken = canvas.tokens.get(data.targetId);

        const flagKey = 'firetype-' + weaponId;
        const scope = 'cyberpunk-red-core';
        let flagValue = '';

        switch (fireMode) {
            case 'Auto': flagValue = 'autofire'; break;
            case 'Suppress': flagValue = 'suppressive'; break;
            case 'Aimed':
                flagValue = 'aimed';
                await actor.setFlag(scope, 'aimedLocation', 'head');
                break;
            default: flagValue = ''; break;
        }

        if (targetToken) {
            targetToken.setTarget(true, { releaseOthers: true, groupSelection: true });
        }

        if (flagValue === '') {
            await actor.unsetFlag(scope, flagKey);
        } else {
            await actor.setFlag(scope, flagKey, flagValue);
        }

        const dummyBtn = document.createElement('a');
        dummyBtn.dataset.rollType = 'attack';
        dummyBtn.dataset.itemId = weaponId;
        dummyBtn.dataset.rollTitle = fireMode + ' Attack';

        const trigger = async () => {
            await actor.sheet._onRoll({
                preventDefault: () => {},
                currentTarget: dummyBtn,
                type: 'click'
            }, { showDialog: true });
        };

        // Compute DV against current target if available
        let computedDV = null;
        if (targetToken) {
            const shooter = canvas.tokens.get(tokenId) || actor.getActiveTokens()?.[0] || canvas.tokens.placeables.find(t => t.actor?.id === actor.id);
            if (shooter) {
                const distanceM = tokenDistanceM(shooter, targetToken);

                const weaponData = actor.items.get(weaponId);
                computedDV = (await resolveWeaponDV(weaponData, distanceM)).dv;
            }
        }

        const result = await bridge.rollAndCapture(actorId, trigger, data.rollMode);


        if (result.success) {
            let outcome = null;
            if (typeof computedDV === 'number') {
                outcome = result.total >= computedDV ? 'Hit' : 'Miss';
            } else if (computedDV === 'Out of Range') {
                outcome = 'Miss';
            }
            const magazineValue = actor.items.get(weaponId)?.system?.magazine?.value ?? null;
            await bridge.sendResponse({
                type: 'ROLL_RESULT',
                rollMode: result.rollMode,
                requestId: requestId,
                actorId: actorId,
                total: result.total,
                isCriticalSuccess: result.isCriticalSuccess,
                isCriticalFailure: result.isCriticalFailure,
                label: fireMode + ' Attack',
                rawRoll: {
                    total: result.total,
                    isCriticalSuccess: result.isCriticalSuccess,
                    isCriticalFailure: result.isCriticalFailure,
                    label: result.label,
                    resultTotal: result.rawRoll?.resultTotal,
                    rollTitle: result.rawRoll?.rollTitle
                },
                dv: computedDV,
                ammoTo: magazineValue,
                outcome,
                success: true
            });
        }
    }
}
