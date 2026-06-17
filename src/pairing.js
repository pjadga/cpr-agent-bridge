import { MODULE_ID } from './constants.js';

// ==================================================================
// PAIRING
//
// The GM's Bridge is the sole authority for minting pairing nonces.
// It registers each nonce with the Agent server and keeps a local
// nonce -> foundryUserId map so it can verify the PAIR_AGENT broadcast
// that comes back when a player scans the QR.
// ==================================================================

export const PAIRING_TTL_SECONDS = 300;

/**
 * Current QR payload schema version. Bumped if the encoded shape changes
 * so the Agent scanner can reject incompatible codes with a clear message.
 */
export const PAIRING_PAYLOAD_VERSION = 1;

function apiBase() {
    return (game.settings.get(MODULE_ID, 'apiUrl') || '').replace(/\/$/, '');
}

/**
 * Build the JSON string encoded into the QR code. Kept minimal: the server
 * is the source of truth, so only the nonce is strictly required to claim.
 * agentUrl/channelId are included so the scanner can sanity-check and display.
 */
export function buildPayload({ nonce, channelId, foundryUserName }) {
    return JSON.stringify({
        v: PAIRING_PAYLOAD_VERSION,
        agentUrl: apiBase(),
        channelId: channelId || null,
        nonce,
        foundryUserName: foundryUserName || null,
    });
}

/**
 * Mint a pairing nonce for a Foundry user, register it with the Agent server,
 * and return the QR payload. GM only — uses the GM's Sanctum token.
 *
 * @returns {Promise<{nonce: string, payload: string}>}
 * @throws {Error} with a user-facing message on failure.
 */
export async function mintPairing(bridge, foundryUserId, foundryUserName) {
    const apiUrl = apiBase();
    const token = game.settings.get(MODULE_ID, 'apiKey');
    const channelId = game.settings.get(MODULE_ID, 'channelId');

    if (!apiUrl) throw new Error('Set the Agent URL in module settings first.');
    if (!token) throw new Error('Set your Agent API key in module settings first.');
    if (!channelId) throw new Error('Set the Channel ID (session code) in module settings first.');

    const nonce = foundry.utils.randomID(24);

    let response;
    try {
        response = await fetch(`${apiUrl}/api/pairing/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                nonce,
                channel_id: channelId,
                foundry_user_id: foundryUserId,
                foundry_user_name: foundryUserName,
                expires_in: PAIRING_TTL_SECONDS,
            }),
        });
    } catch (e) {
        throw new Error('Could not reach the Agent server. Check the Agent URL and your connection.');
    }

    if (!response.ok) {
        if (response.status === 403) throw new Error('Only a GM with a linked Agent account can generate pairings.');
        if (response.status === 404) throw new Error('No Agent session matches this Channel ID. Create/sync the session in the Agent first.');
        throw new Error(`Agent server rejected the pairing (HTTP ${response.status}).`);
    }

    // Remember which Foundry user this nonce belongs to so PAIR_AGENT can be verified.
    bridge.pendingPairings.set(nonce, { foundryUserId, ts: Date.now() });
    setTimeout(() => bridge.pendingPairings.delete(nonce), PAIRING_TTL_SECONDS * 1000);

    return { nonce, payload: buildPayload({ nonce, channelId, foundryUserName }) };
}
