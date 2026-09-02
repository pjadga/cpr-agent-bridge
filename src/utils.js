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

/**
 * Decide whether the WebSocket should use TLS.
 *
 * `setting` is the module's `reverbUseSSL` choice:
 *   'auto' - derive from the Agent URL's own scheme (the default, and right
 *            for every single-origin install, which is now all of them)
 *   'wss'  - force secure
 *   'ws'   - force plain
 *
 * Anything else is a leftover from when this was a tick-box. That tick-box
 * defaulted to ON, so a stored `true` cannot be told apart from "never touched
 * it" - which is why every plain-http Agent was silently dialling wss://host:443
 * and reporting nothing but "Bridge Offline". Legacy booleans are therefore
 * ignored rather than honoured, and such worlds fall through to 'auto'.
 *
 * @param {string|boolean} setting  the stored reverbUseSSL value
 * @param {string} agentUrl         the configured Agent base URL
 * @returns {boolean}
 */
export function resolveWsSecurity(setting, agentUrl) {
    if (setting === 'wss') return true;
    if (setting === 'ws') return false;

    try {
        return new URL(agentUrl).protocol === 'https:';
    } catch (e) {
        // Unparseable URL: connect() bails before this matters, but secure is
        // the safer guess if that ever changes.
        return true;
    }
}
