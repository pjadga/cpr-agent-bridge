// ==================================================================
// SHARED CONSTANTS
// ==================================================================

export const MODULE_ID = 'cpr-agent';

export const DEFAULT_REVERB_KEY = 'itdsiqtx8cpskowawl1p';
export const DEFAULT_API_URL = 'https://agent.surrealdisco.co.uk';

// Range -> Difficulty Value tables, indexed by DISTANCE_BRACKETS.
// Melee/VS weapons use a single-element array of ['VS'].
export const RANGE_DV_TABLE = {
    'Pistol':           [13, 15, 20, 25, 30, 30, 99, 99],
    'SMG':              [15, 13, 15, 20, 25, 25, 30, 99],
    'Shotgun (Slug)':   [13, 15, 20, 25, 30, 35, 99, 99],
    'Assault Rifle':    [17, 16, 15, 13, 15, 20, 25, 30],
    'Sniper Rifle':     [30, 25, 25, 20, 15, 16, 17, 20],
    'Bows & Crossbow':  [15, 13, 15, 17, 20, 22, 99, 99],
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
export const WEAPON_TYPE_MAP = {
    'heavyPistol': 'Pistol',
    'assaultRifle': 'Assault Rifle',
    'smg': 'SMG',
    'shotgun': 'Shotgun (Slug)',
    'sniperRifle': 'Sniper Rifle',
    'unarmed': 'Unarmed',
    'martialArts': 'Martial Arts',
    'grenade': 'Grenade Launcher',
    'thrownWeapon': 'Grenade Launcher',
    'lightMelee': 'Light Melee Weapon',
    'mediumMelee': 'Medium Melee Weapon',
    'heavyMelee': 'Heavy Melee Weapon',
    'vHeavyMelee': 'Very Heavy Melee Weapon',
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