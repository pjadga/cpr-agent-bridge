import { MODULE_ID } from '../constants.js';

// Handlers for actor-level reads/writes: UPDATE_ACTOR, GET_ACTOR, GET_ACTORS.

export async function updateActor(bridge, data, { type, requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) {
        console.warn(`⚠️ Actor ID ${actorId} not found in this world.`);
        return;
    }
    await actor.update(data.changes);
    ui.notifications.info(`💾 Sync: ${actor.name} updated.`);
    await bridge.sendResponse({ type: 'CONFIRMATION', action: type, actorId: actorId, success: true, requestId });
}

export async function getActor(bridge, data, { requestId }) {
    let actorId = data.actorId;
    let targetUser = game.user;
    const userIdentifier = data.agentLink || data.agent_link || data.foundryUserId || data.requestId;

    if (userIdentifier) {
        targetUser = game.users.find(u => u.getFlag(MODULE_ID, 'agent-link') === userIdentifier)
            || game.users.get(userIdentifier)
            || (userIdentifier === game.user.id ? game.user : null);
    }

    if (!targetUser) targetUser = game.user;

    // If no actorId provided, try to get the assigned character for the user
    if (!actorId) {
        const assignedChar = targetUser.character;
        if (assignedChar) {
            actorId = assignedChar.id;
        }
    }

    if (actorId !== null) {
        const actor = game.actors.get(actorId);
        if (actor) {
            const obj = actor.toObject();
            // Effects carry the changes behind armour/drug/injury modifiers. The
            // Agent works out roll mods and effect-adjusted stats from these, so
            // keep the fields it reads and drop the rest (icons, durations, etc).
            const slimEffects = (effects) => (effects || []).map(e => ({
                _id: e._id,
                name: e.name,
                disabled: e.disabled,
                changes: e.changes,
                flags: e.flags?.['cyberpunk-red-core'] ? { 'cyberpunk-red-core': e.flags['cyberpunk-red-core'] } : {}
            }));
            const slim = {
                _id: actor.id,
                name: actor.name,
                type: actor.type,
                img: obj.img,
                system: obj.system,
                items: (obj.items || []).map(i => {
                    const entry = {
                        _id: i._id,
                        name: i.name,
                        type: i.type,
                        img: i.img,
                        system: i.system,
                        effects: slimEffects(i.effects)
                    };
                    // isInstalled / isFoundational on cyberware are DERIVED getters
                    // (installable-schema), which toObject() drops. The Agent needs
                    // them for the install/uninstall affordances, so merge the live
                    // values back in.
                    if (i.type === 'cyberware') {
                        const live = actor.items.get(i._id);
                        if (live) {
                            entry.system = {
                                ...i.system,
                                isInstalled: !!live.system.isInstalled,
                                isFoundational: !!live.system.isFoundational
                            };
                        }
                    }
                    return entry;
                }),
                effects: slimEffects(obj.effects),
                flags: obj.flags && obj.flags['cyberpunk-red-core'] ? { 'cyberpunk-red-core': obj.flags['cyberpunk-red-core'] } : {}
            };
            await bridge.sendResponse({ type: 'ACTOR_DATA', actorId: actorId, actor: slim, requestId, isGM: targetUser.isGM, agentLink: targetUser.getFlag(MODULE_ID, 'agent-link') || targetUser.id });
            return;
        }
    }
    await bridge.sendResponse({ type: 'ACTOR_DATA', actorId: actorId, actor: false, requestId, isGM: targetUser.isGM, agentLink: targetUser.getFlag(MODULE_ID, 'agent-link') || targetUser.id });
}

export async function getActors(bridge, data, { requestId, actorId }) {
    let targetUser = game.user;
    const userIdentifier = data.agentLink || data.agent_link || data.foundryUserId || data.requestId;

    if (userIdentifier) {
        // Try to find the user by their agent-link flag
        targetUser = game.users.find(u => u.getFlag(MODULE_ID, 'agent-link') === userIdentifier)
            || game.users.get(userIdentifier) // Fallback to ID
            || (userIdentifier === game.user.id ? game.user : null);
    }

    if (!targetUser) targetUser = game.user;

    function getTokenFromActor(actorId) {
        let tokens = canvas.tokens.placeables.filter(t => t.actor?.id === actorId);
        return tokens[0]?.id ?? null;
    }

    let actors = [];
    // If the target user is a Game Master, we always return ALL characters and mooks.
    // We check targetUser.isGM instead of game.user.isGM.
    if (targetUser.isGM) {
        // GM sees ALL characters and mooks in the world
        actors = game.actors
            .filter(a => a.type === 'character' || a.type === 'mook')
            .map(a => {
                // Find the primary owner (player) if any
                const ownerId = Object.entries(a.ownership || {}).find(([id, level]) => {
                    const u = game.users.get(id);
                    return u && !u.isGM && level >= 3;
                })?.[0];

                return {
                    name: a.name,
                    actorId: a.id,
                    tokenId: getTokenFromActor(a.id),
                    agentLink: (ownerId ? game.users.get(ownerId)?.getFlag(MODULE_ID, 'agent-link') : null) || (ownerId || targetUser.getFlag(MODULE_ID, 'agent-link') || targetUser.id)
                };
            });
    } else {
        // Players see tokens they own on the canvas
        actors = canvas.tokens.placeables
            .filter(t => t.actor && (t.actor.type === 'character' || t.actor.type === 'mook'))
            .filter(t => t.actor.testUserPermission(targetUser, "OWNER"))
            .map(t => {
                // Find the primary owner (player)
                const ownerId = Object.entries(t.actor.ownership || {}).find(([id, level]) => {
                    const u = game.users.get(id);
                    return u && !u.isGM && level >= 3;
                })?.[0];

                return {
                    name: t.name,
                    actorId: t.actor.id,
                    tokenId: getTokenFromActor(t.actor.id),
                    agentLink: (ownerId ? game.users.get(ownerId)?.getFlag(MODULE_ID, 'agent-link') : null) || ownerId || null
                };
            });

        // If they have an assigned character, always include it
        if (targetUser.character) {
            const alreadyInList = actors.some(a => a.actorId === targetUser.character.id);
            if (!alreadyInList) {
                actors.push({
                    name: targetUser.character.name,
                    actorId: targetUser.character.id,
                    tokenId: getTokenFromActor(targetUser.character.id),
                    agentLink: targetUser.getFlag(MODULE_ID, 'agent-link') || targetUser.id
                });
            }
        }

        // If the user is a player, only return their assigned character if they have one
        if (!targetUser.isGM && targetUser.character) {
            actors = actors.filter(a => a.actorId === targetUser.character.id);
        }
    }

    await bridge.sendResponse({ type: 'ACTORS_DATA', actorId: actorId, actors: actors, requestId, isGM: targetUser.isGM, agentLink: targetUser.getFlag(MODULE_ID, 'agent-link') || targetUser.id });
}