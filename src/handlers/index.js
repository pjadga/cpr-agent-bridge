import * as actors from './actors.js';
import * as items from './items.js';
import * as cyberdeck from './cyberdeck.js';
import * as rolls from './rolls.js';
import * as tokens from './tokens.js';
import * as economy from './economy.js';
import * as netpool from './netpool.js';
import * as pairing from './pairing.js';

// Maps an incoming message `type` to its handler function.
// Each handler has the signature (bridge, data, ctx) where ctx is
// { type, requestId, actorId, tokenId, debug }.
export const HANDLERS = {
    UPDATE_ACTOR: actors.updateActor,
    GET_ACTOR: actors.getActor,
    GET_ACTORS: actors.getActors,

    CONSUME_ITEM: items.consumeItem,
    ITEM_EQUIP: items.itemEquip,
    RELOAD_WEAPON: items.reloadWeapon,

    INSTALL_PROGRAM: cyberdeck.installProgram,
    REMOVE_PROGRAM: cyberdeck.removeProgram,
    TOGGLE_REZ: cyberdeck.toggleRez,
    PROGRAM_ROLL: cyberdeck.programRoll,

    DAMAGE_ROLL: rolls.damageRoll,
    DEATH_SAVE: rolls.deathSave,
    FACEDOWN_ROLL: rolls.facedownRoll,
    INITIATIVE_ROLL: rolls.initiativeRoll,
    ROLE_ROLL: rolls.roleRoll,
    SKILL_ROLL: rolls.skillRoll,
    STAT_ROLL: rolls.statRoll,
    DICE_ROLL: rolls.diceRoll,
    ATTACK_ROLL: rolls.attackRoll,

    MOVE_TOKEN: tokens.moveToken,
    TARGET_TOKEN: tokens.targetToken,
    LIST_VISIBLE_TOKENS: tokens.listVisibleTokens,
    GET_DV_INFO: tokens.getDvInfo,
    GET_ROLL_MODIFIERS: tokens.getRollModifiers,

    UPDATE_STAT: economy.updateStat,
    UPDATE_EB: economy.updateEb,

    GET_NET_POOL: netpool.getNetPool,

    PAIR_AGENT: pairing.pairAgent,
};

/**
 * Dispatch an incoming message to its handler.
 * @param {CyberpunkBridge} bridge
 * @param {string} type
 * @param {object} data
 * @param {object} ctx - { type, requestId, actorId, tokenId, debug }
 */
export async function dispatch(bridge, type, data, ctx) {
    const handler = HANDLERS[type];
    if (!handler) {
        console.log("Unknown DataType: " + type);
        return;
    }
    return handler(bridge, data, ctx);
}
