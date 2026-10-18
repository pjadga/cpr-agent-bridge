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

/**
 * Whether this client is the one GM that acts on Agent traffic.
 *
 * Every GM client receives every Agent command. A second GM account (often the
 * table's TV screen) used to execute them all again: double rolls, tokens
 * moving two squares, duplicate prompts. Foundry designates one active GM;
 * only that client acts. If Foundry can't say (no activeGM), fall back to
 * "any GM" so a lone GM is never locked out.
 */
export function isPrimaryGM() {
    if (!game.user?.isGM) return false;
    const primary = game.users?.activeGM;
    return !primary || primary.id === game.user.id;
}

/**
 * The Foundry user an Agent request came from.
 *
 * Embed calls run on the requester's own client, so that's game.user. Remote
 * calls (Reverb, handled by the GM) are matched by agent link, and an unknown
 * link resolves to null, never to the GM running this client, or GM-only
 * content would leak to whoever sent it.
 */
export function requestingUser(agentLink, { remote = false } = {}) {
    if (!remote) return game.user;
    if (!agentLink) return null;
    return game.users.find(u => u.getFlag(MODULE_ID, 'agent-link') === agentLink) ?? null;
}


/**
 * Whether a user's Agent moves ignore walls. A per-user flag set from the Agent
 * Console; unset means GMs ignore walls and players don't.
 */
export function hasNoClip(user) {
    if (!user) return false;
    return user.getFlag(MODULE_ID, 'noclip') ?? user.isGM;
}

/**
 * Distance between two tokens in scene units (metres in CPR, normally 2 per grid square),
 * measured the same way as Foundry's ruler so DVs match what the GM sees. Rounded up to a
 * whole metre because the DV bands are integer ranges (0-6, 7-12, ...).
 */
export function tokenDistanceM(a, b) {
    const { distance } = canvas.grid.measurePath([a.center, b.center]);
    return Math.ceil(distance - 1e-6);
}

/**
 * Token ids are per-scene, so one the Agent stored earlier goes stale on a scene change or
 * when a token is deleted and re-added. Trust the supplied id only if it is still on the
 * canvas; otherwise fall back to the actor's token on the current scene.
 */
export function resolveTokenId(tokenId, actorId) {
    if (tokenId && canvas.tokens?.get(tokenId)) return tokenId;
    if (!actorId) return tokenId;
    return canvas.tokens?.placeables?.find(t => t.actor?.id === actorId)?.id ?? tokenId;
}
