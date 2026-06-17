import { MODULE_ID } from '../constants.js';

// Handler for PAIR_AGENT — the result of a player scanning a pairing QR.
// Broadcast by the Agent server on the session channel; only the GM listens.
// The GM verifies the nonce against the map populated when it minted the
// pairing, then binds the agent_link to the correct Foundry user.

export async function pairAgent(bridge, data, { debug }) {
    if (!game.user.isGM) return;

    const foundryUserId = data.foundryUserId;
    const agentLink = data.agentLink || data.agent_link;
    const nonce = data.nonce;

    if (!foundryUserId || !agentLink || !nonce) {
        console.warn('[Bridge] PAIR_AGENT missing fields.', data);
        return;
    }

    // Verify this nonce was minted by us for this exact Foundry user.
    const pending = bridge.pendingPairings.get(nonce);
    if (!pending || pending.foundryUserId !== foundryUserId) {
        console.warn(`[Bridge] PAIR_AGENT nonce not recognised for user ${foundryUserId}. Ignoring.`);
        return;
    }

    const user = game.users.get(foundryUserId);
    if (!user) {
        console.warn(`[Bridge] PAIR_AGENT: Foundry user ${foundryUserId} not found.`);
        return;
    }

    bridge.pendingPairings.delete(nonce);

    await user.setFlag(MODULE_ID, 'agent-link', agentLink);
    await user.setFlag(MODULE_ID, 'hasApiKey', true);

    if (debug) console.log(`[Bridge] PAIR_AGENT: linked ${user.name} -> ${agentLink}`);
    ui.notifications.info(`Agent: ${user.name} linked successfully.`);

    // Let the Agent know the GM applied the link (round-trip confirmation).
    await bridge.sendResponse({
        type: 'PAIR_CONFIRMED',
        foundryUserId,
        agentLink,
        nonce,
        success: true,
    });
}
