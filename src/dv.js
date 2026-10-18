import { weaponCategory, lookupRangeDV } from './constants.js';

// Range -> DV, read live from the Core system's DV roll tables (the compendium named by its
// `dvRollTableCompendium` setting), so homebrew tables and re-pointed weapons just work.
// Table entries hold the DV in `text` (system v0.92 on Foundry 12) or `description` (newer).
// The hardcoded tables in constants.js are only a fallback when Foundry has no table to read.

const OUT_OF_RANGE = 'Out of Range';

/** Parse a roll-table result description into a DV: number, 'VS', or OUT_OF_RANGE. */
function parseDV(description) {
    const text = String(description ?? '').replace(/<[^>]*>/g, '').trim();
    if (/^\d+$/.test(text)) return Number(text);
    if (/^vs\b/i.test(text)) return 'VS';
    return OUT_OF_RANGE;
}

/**
 * Rows ({ min, max, dv, label }) for a weapon from its configured Foundry DV table,
 * or null when the weapon has no table / the table cannot be found.
 */
export async function foundryDvRows(weapon) {
    const name = weapon?.system?.dvTable;
    if (!name) return null;
    try {
        const pack = game.packs.get(game.settings.get(game.system.id, 'dvRollTableCompendium'));
        const entry = pack?.index.find(e => e.name === name);
        if (!entry) return null;
        const table = await pack.getDocument(entry._id);
        const rows = [];
        for (const result of table.results) {
            if (result.type !== 'text') continue;
            const [min, max] = result.range;
            rows.push({ min, max, dv: parseDV(result.text ?? result.description), label: `${min}-${max}m` });
        }
        return rows.length ? rows.sort((a, b) => a.min - b.min) : null;
    } catch (e) {
        console.warn('[Bridge] Could not read Foundry DV table, using built-in', e);
        return null;
    }
}

/**
 * DV for a weapon at a distance (whole metres), plus the full table for display.
 * Returns { dv, table, activeIndex, category, source }; dv is a number, 'VS' or 'Out of Range'.
 */
export async function resolveWeaponDV(weapon, distanceM) {
    const category = weaponCategory(weapon);
    const rows = await foundryDvRows(weapon);
    if (rows) {
        const activeIndex = rows.findIndex(r => distanceM >= r.min && distanceM <= r.max);
        const dv = activeIndex === -1 ? OUT_OF_RANGE : rows[activeIndex].dv;
        return { dv, table: rows, activeIndex, category, source: 'foundry' };
    }
    const fallback = lookupRangeDV(category, distanceM);
    return { dv: fallback === 99 ? OUT_OF_RANGE : fallback, table: null, activeIndex: -1, category, source: 'builtin' };
}
