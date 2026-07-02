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

    // Verify against the nonce we minted. If a pending entry exists it must match
    // the Foundry user. If it's gone (e.g. the GM reloaded Foundry between minting
    // the code and the player claiming it), still honour the link: PAIR_AGENT is
    // broadcast by the Agent server on our private channel, so the foundryUserId is
    // the one *we* registered — trusting it can't bind to an arbitrary user.
    const pending = bridge.pendingPairings.get(nonce);
    if (pending && pending.foundryUserId !== foundryUserId) {
        console.warn(`[Bridge] PAIR_AGENT nonce/user mismatch for ${foundryUserId}. Ignoring.`);
        return;
    }
    if (!pending) {
        console.warn(`[Bridge] PAIR_AGENT nonce not in local cache (GM reload?). Trusting server payload for ${foundryUserId}.`);
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

    // Refresh an open Character Assignment menu so the GM sees the link immediately.
    Object.values(ui.windows).find(w => w.options?.id === 'cpr-agent-assignment-menu')?.render(false);

    // Let the Agent know the GM applied the link (round-trip confirmation).
    await bridge.sendResponse({
        type: 'PAIR_CONFIRMED',
        foundryUserId,
        agentLink,
        nonce,
        success: true,
    });
}
