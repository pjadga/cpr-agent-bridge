import { weaponCategory, lookupRangeDV } from '../constants.js';

// Handlers for token/targeting/combat-info reads:
// MOVE_TOKEN, TARGET_TOKEN, LIST_VISIBLE_TOKENS, GET_DV_INFO, GET_ROLL_MODIFIERS.

export async function moveToken(bridge, data, { type, requestId, actorId, tokenId }) {
    if (game.paused) return;

    const token = canvas.tokens.get(tokenId);
    if (token) {
        let newPos = {};
        if (data.direction === "up") newPos.y = token.document.y - canvas.grid.size;
        else if (data.direction === "down") newPos.y = token.document.y + canvas.grid.size;
        else if (data.direction === "left") newPos.x = token.document.x - canvas.grid.size;
        else if (data.direction === "right") newPos.x = token.document.x + canvas.grid.size;
        await token.document.update(newPos);

        await bridge.sendResponse({ type: 'CONFIRMATION', action: type, actorId: actorId, tokenId, success: true, requestId });
    } else {
        console.warn(`MOVE_TOKEN: Token ID ${tokenId} not found.`);
        await bridge.sendResponse({ type: 'CONFIRMATION', action: type, actorId: actorId, tokenId, success: false, message: 'Token not found', requestId });
    }
}

export async function targetToken(bridge, data, { type, requestId, actorId }) {
    const token = canvas.tokens.get(data.targetTokenId);
    if (token) {
        token.setTarget(true, { releaseOthers: true, groupSelection: true });
        await bridge.sendResponse({ type: 'CONFIRMATION', action: type, actorId: actorId, tokenId: data.targetTokenId, success: true, requestId });
    }
}

export async function listVisibleTokens(bridge, data, { requestId, actorId, tokenId }) {
    const tokens = canvas.tokens.placeables.filter(t => t.actor?.id === actorId);
    if (tokenId === null) {
        tokenId = tokens[0]?.id ?? null;
    }

    const jim = canvas.tokens.get(tokenId);
    let nearbyTokens = [];
    if (jim) {
        const PIXELS_PER_METER = canvas.grid.size;
        const d = canvas.dimensions;
        const jimX = jim.center.x;
        const jimY = jim.center.y;

        nearbyTokens = canvas.tokens.placeables
            .filter(t => {
                const isVisible = !t.document.hidden;
                const isActorType = t.actor && (t.actor.type === 'character' || t.actor.type === 'mook');
                const isOnMap = t.x >= d.sceneX && t.x <= (d.sceneX + d.sceneWidth) &&
                    t.y >= d.sceneY && t.y <= (d.sceneY + d.sceneHeight);
                return isVisible && isActorType && isOnMap && t.id !== jim.id;
            })
            .map(t => {
                const distX = t.center.x - jimX;
                const distY = t.center.y - jimY;
                const distancePx = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
                const distanceMeters = (distancePx / PIXELS_PER_METER).toFixed(2);
                return {
                    name: t.name,
                    id: t.id,
                    distanceM: parseFloat(distanceMeters),
                    type: t.actor.type
                };
            })
            .sort((a, b) => a.distanceM - b.distanceM);
    } else {
        console.warn(`LIST_VISIBLE_TOKENS: Token ID ${tokenId} not found.`);
    }
    await bridge.sendResponse({ type: 'VISIBLE_TOKENS_DATA', actorId: actorId, tokens: nearbyTokens, requestId });
}

export async function getDvInfo(bridge, data, { requestId, actorId, tokenId }) {
    const jim = canvas.tokens.get(tokenId);
    const targetId = data.targetTokenId || Array.from(game.user.targets)[0]?.id;
    const target = canvas.tokens.get(targetId);
    const weaponId = data.weaponId;

    if (jim && target) {
        const distX = target.center.x - jim.center.x;
        const distY = target.center.y - jim.center.y;
        const distancePx = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
        const distanceM = Math.ceil(distancePx / 128);

        const weaponData = jim.actor.items.get(weaponId);
        if (!weaponData) {
            console.warn(`GET_DV_INFO: Weapon ID ${weaponId} not found on actor ${jim.actor.name}.`);
            await bridge.sendResponse({ type: 'DV_INFO_DATA', actorId: actorId, result: null, requestId });
            return;
        }

        const category = weaponCategory(weaponData);
        const targetDV = lookupRangeDV(category, distanceM);

        const result = {
            targetName: target.name,
            distanceMeters: distanceM,
            weaponCategory: category,
            dv: targetDV === 99 ? 'Out of Range' : targetDV
        };
        await bridge.sendResponse({ type: 'DV_INFO_DATA', actorId: actorId, result, requestId });
    } else {
        console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!jim}, Target: ${!!target}`);
        await bridge.sendResponse({ type: 'DV_INFO_DATA', actorId: actorId, result: null, requestId });
    }
}

export async function getRollModifiers(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) return;
    const weaponId = data.weaponId;
    const weapon = weaponId ? actor.items.get(weaponId) : null;

    let weaponSkillName = 'None';
    let skillLevel = 0;
    let statName = 'None';
    let statValue = 0;
    let weaponAcc = 0;

    if (weapon) {
        weaponSkillName = weapon.system.weaponSkill;
        const skillItem = actor.items.find(i => i.type === 'skill' && i.name === weaponSkillName);
        skillLevel = skillItem ? (Number(skillItem.system.level) || 0) : 0;
        statName = skillItem ? (skillItem.system.stat || 'ref') : 'ref';
        statValue = Number(actor.system.stats[statName]?.value) || 0;
        weaponAcc = Number(weapon.system.attackmod) || 0;
    }

    let totalPenalty = 0;
    const effectList = [];

    const hp = Number(actor.system.derivedStats.hp.value) || 0;
    const seriouslyThreshold = Number(actor.system.derivedStats.seriouslyWounded) || 0;
    const stim = actor.items.find(i => i.name === 'Stim' && i.type === 'drug');
    const stimEnabled = stim && stim.effects.some(e => e.disabled === false);

    if (hp <= 0) {
        totalPenalty -= 4;
        effectList.push({ title: 'Mortally Wounded', penalty: -4, description: 'All actions at -4.' });
    } else if (hp <= seriouslyThreshold) {
        const penaltyValue = stimEnabled ? 0 : -2;
        totalPenalty += penaltyValue;
        effectList.push({
            title: stimEnabled ? 'Seriously Wounded (Stim Active)' : 'Seriously Wounded',
            penalty: penaltyValue,
            description: stimEnabled ? 'Ignoring penalty due to Stim drug.' : 'All actions at -2.'
        });
    }

    const critInjuries = actor.items.filter(i => i.type === 'criticalInjury');
    critInjuries.forEach(injury => {
        const title = injury.name || 'Injury';
        const description = (injury.system.description?.value || '').replace(/<[^>]*>/g, '');

        let injuryPenalty = 0;
        if (injury.effects && injury.effects.length > 0) {
            injury.effects.forEach(eff => {
                if (!eff.disabled && eff.changes) {
                    eff.changes.forEach(change => {
                        const val = parseInt(change.value);
                        if (!isNaN(val)) {
                            injuryPenalty += val;
                        }
                    });
                }
            });
        }

        if (injuryPenalty === 0) {
            const lowerTitle = String(title).toLowerCase();
            if (description.includes('-2') || lowerTitle.includes('arm') || lowerTitle.includes('eye')) {
                injuryPenalty = -2;
            }
        }

        totalPenalty += injuryPenalty;
        effectList.push({ title, description, penalty: injuryPenalty });
    });

    const result = {
        actorName: actor.name,
        baseBonus: statValue + skillLevel + weaponAcc,
        breakdown: {
            statName,
            statValue,
            skillName: weaponSkillName,
            skillLevel,
            weaponAcc
        },
        totalPenalty: totalPenalty,
        finalModifier: statValue + skillLevel + weaponAcc + totalPenalty,
        injuries: effectList
    };
    await bridge.sendResponse({ type: 'ROLL_MODIFIERS_DATA', actorId: actorId, result, requestId });
}
