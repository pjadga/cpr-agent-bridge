// ==================================================================
// SHARED CONSTANTS
// ==================================================================

export const MODULE_ID = 'cpr-agent';

export const DEFAULT_REVERB_KEY = 'itdsiqtx8cpskowawl1p';
export const DEFAULT_API_URL = 'https://agent.surrealdisco.co.uk';

/**
 * The configured Agent base URL (no trailing slash), falling back to the default.
 * Used as the iframe embed base and to derive the postMessage origin.
 */
export function agentBaseUrl() {
    const raw = ((game?.settings?.get(MODULE_ID, 'apiUrl')) || DEFAULT_API_URL).trim().replace(/\/$/, '');
    return raw || DEFAULT_API_URL;
}

/** The Agent's origin (scheme://host[:port]) for postMessage targetOrigin + validation. */
export function agentOrigin() {
    try { return new URL(agentBaseUrl()).origin; }
    catch (e) { return new URL(DEFAULT_API_URL).origin; }
}

// Range -> Difficulty Value tables, indexed by DISTANCE_BRACKETS.
// Melee/VS weapons use a single-element array of ['VS'].
export const RANGE_DV_TABLE = {
    'Pistol':           [13, 15, 20, 25, 30, 30, 99, 99],
    'SMG':              [15, 13, 15, 20, 25, 25, 30, 99],
    'Shotgun':   [13, 15, 20, 25, 30, 35, 99, 99],
    'Assault Rifle':    [17, 16, 15, 13, 15, 20, 25, 30],
    'Sniper Rifle':     [30, 25, 25, 20, 15, 16, 17, 20],
    'Bows and Crossbows':  [15, 13, 15, 17, 20, 22, 99, 99],
    'Grenade Launcher': [16, 15, 15, 17, 20, 22, 25, 99],
    'Rocket Launcher':  [17, 16, 15, 15, 20, 20, 25, 30],
    'Martial Arts': ['VS'],
    'Unarmed': ['VS'],
    'Light Melee Weapon': ['VS'],
    'Medium Melee Weapon': ['VS'],
    'Heavy Melee Weapon': ['VS'],
    'Very Heavy Melee Weapon': ['VS'],
};

export const DISTANCE_BRACKETS = [6, 12, 25, 50, 100, 200, 400, 800];

// Maps a weapon's system.weaponType / system.variety to a RANGE_DV_TABLE category.
// The CPR lang file labels melee as *...MeleeWeapon*, but the value actually stored
// on the roll/item (system.weaponType) is the short form (e.g. "heavyMelee").
// Both forms are mapped so lookups resolve regardless of which the item uses.
export const WEAPON_TYPE_MAP = {
    'mediumPistol': 'Pistol',
    'heavyPistol': 'Pistol',
    'veryHeavyPistol': 'Pistol',
    'smg': 'SMG',
    'heavySmg': 'SMG',
    'shotgun': 'Shotgun',
    'assaultRifle': 'Assault Rifle',
    'sniperRifle': 'Sniper Rifle',
    'bowsAndCrossbows': 'Bows and Crossbows',
    'grenadeLauncher': 'Grenade Launcher',
    'rocketLauncher': 'Rocket Launcher',
    'thrownWeapon': 'Grenade Launcher',
    'unarmed': 'Unarmed',
    'martialArts': 'Martial Arts',
    'lightMelee': 'Light Melee Weapon',
    'lightMeleeWeapon': 'Light Melee Weapon',
    'mediumMelee': 'Medium Melee Weapon',
    'mediumMeleeWeapon': 'Medium Melee Weapon',
    'heavyMelee': 'Heavy Melee Weapon',
    'heavyMeleeWeapon': 'Heavy Melee Weapon',
    'vHeavyMelee': 'Very Heavy Melee Weapon',
    'veryHeavyMelee': 'Very Heavy Melee Weapon',
    'veryHeavyMeleeWeapon': 'Very Heavy Melee Weapon'
};

/**
 * Resolve the RANGE_DV_TABLE category for a weapon document.
 */
export function weaponCategory(weaponData) {
    return (WEAPON_TYPE_MAP[weaponData?.system?.weaponType] || WEAPON_TYPE_MAP[weaponData?.system?.variety]) || 'Pistol';
}

/**
 * Look up the Difficulty Value for a weapon category at a given distance (meters).
 * Returns a number, the string 'VS' for melee, or 99 for out of range.
 */
export function lookupRangeDV(category, distanceM) {
    const bracketIndex = DISTANCE_BRACKETS.findIndex(limit => distanceM <= limit);
    let targetDV = bracketIndex !== -1 ? RANGE_DV_TABLE[category][bracketIndex] : 99;

    if (Array.isArray(RANGE_DV_TABLE[category]) && typeof RANGE_DV_TABLE[category][0] === 'string') {
        targetDV = RANGE_DV_TABLE[category][Math.min(bracketIndex !== -1 ? bracketIndex : 0, RANGE_DV_TABLE[category].length - 1)];
    }

    return targetDV;
}

/**
 * CPR's skill-name → bonus-key slug ("Shoulder Arms" → "shoulderArms").
 * Ported from cyberpunk-red-core SystemUtils.slugify, quirks included.
 * Keep in sync with resources/js/utils/rollEffects.js in the Agent repo.
 */
export function slugify(name) {
    const initialSplit = String(name).split(' ').join('');
    const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);
    if (name === 'Conceal/Reveal Object' || name === 'Paint/Draw/Sculpt' || name === 'Resist Torture/Drugs') {
        return lowerFirst(initialSplit.split('/').join('Or'));
    }
    if (name === 'Language (Streetslang)') {
        return lowerFirst(initialSplit.split('(').join('').split(')').join(''));
    }
    return lowerFirst(initialSplit.split('/').join('And').split('&').join('And'));
}

/**
 * The `bonuses.*` keys (without the prefix) a roll picks up, per CPR's
 * cpr-attackable.js. With no weapon, only all-action bonuses apply.
 */
export function rollBonusKeys(skillName, weapon) {
    const keys = ['allActions', 'allActionsSpeech', 'allActionsHands'];
    if (!weapon) return keys;
    keys.push('universalAttack');
    if (skillName && skillName !== 'None') {
        const slug = slugify(skillName);
        keys.push(slug, `${slug}Hearing`, `${slug}Sight`);
    }
    if (weapon.system?.isRanged === true) keys.push('ranged', 'singleShot');
    if (weapon.system?.isRanged === false) keys.push('melee');
    return keys;
}
const MOD_LABELS = {
    allActions: 'All actions',
    allActionsHands: 'Hand actions',
    allActionsSpeech: 'Speech actions',
    universalAttack: 'Attacks',
    ranged: 'Ranged attacks',
    melee: 'Melee attacks',
    singleShot: 'Single shot',
    perceptionSight: 'Perception (sight)',
    perceptionHearing: 'Perception (hearing)',
};

/**
 * Human label for an effect change key: "system.stats.move.value" → "MOVE",
 * "bonuses.allActionsHands" → "Hand actions", "bonuses.shoulderArms" → "Shoulder arms".
 */
export function modLabel(key) {
    const stat = String(key).match(/^system\.stats\.(\w+)\.value$/);
    if (stat) return stat[1].toUpperCase();
    const bonus = String(key).replace(/^bonuses\./, '');
    if (MOD_LABELS[bonus]) return MOD_LABELS[bonus];
    const words = bonus.replace(/([A-Z])/g, ' $1').toLowerCase().trim();
    return words.charAt(0).toUpperCase() + words.slice(1);
}
