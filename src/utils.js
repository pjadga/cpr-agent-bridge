// ==================================================================
// SHARED UTILITIES
// ==================================================================

/**
 * Truncates a string to show first and last N characters with ellipsis.
 */
export function truncateAgentLink(link, chars = 6) {
    if (!link || link.length <= chars * 2 + 3) return link;
    return `${link.substring(0, chars)}...${link.substring(link.length - chars)}`;
}

/**
 * Flatten a nested object into dot-notation keys, mirroring the SHEET_DELTA
 * format the Agent expects. Foundry Color instances and arrays are treated
 * as leaf values.
 */
export function flattenToDelta(obj, prefix, target = {}) {
    for (let key in obj) {
        const val = obj[key];
        if (val !== null && typeof val === 'object' && !Array.isArray(val) && !(val instanceof foundry.utils.Color)) {
            flattenToDelta(val, `${prefix}${key}.`, target);
        } else {
            target[`${prefix}${key}`] = val;
        }
    }
    return target;
}