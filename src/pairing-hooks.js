import { MODULE_ID } from './constants.js';
import { mintPairing } from './pairing.js';
import { renderQrDialog } from './ui/qr-link.js';

// ==================================================================
// REMOTE SELF-SERVE PAIRING
//
// A remote player (logged into the GM's Foundry world) requests a QR
// without the GM showing it in person. The handshake rides on User
// document flags:
//
//   1. Player sets `pairing-request` on their OWN user. Foundry's
//      document ownership means only that user (or a GM) can do this,
//      so the GM's updateUser hook receives a genuine requester id —
//      no foundryUserId spoofing.
//   2. The GM mints + registers a nonce and writes `pairing-nonce`
//      (the QR payload) back onto that user.
//   3. The player renders the QR and clears the flags.
//
// Trust note: User flags are world-readable, so another logged-in
// member of the same world could read the payload. The nonce is
// single-use, short-lived, and the claim binds the *claimer's* own
// agent_link, so the practical risk is limited to a malicious co-member
// racing the legitimate (actively scanning) player. For worlds needing
// a hard guarantee, socketlib-based targeted delivery is the upgrade.
// The co-located GM-menu vector has no such exposure (the GM mints
// locally and never broadcasts the nonce).
// ==================================================================

const REQUEST_FLAG = 'pairing-request';
const NONCE_FLAG = 'pairing-nonce';

export function registerPairingHooks(bridge) {
    if (bridge.hookIds.pairingUpdateUser) return;

    bridge.hookIds.pairingUpdateUser = Hooks.on('updateUser', async (user, changes) => {
        // GM side: a player asked for a pairing QR.
        if (game.user.isGM) {
            const requested = foundry.utils.getProperty(changes, `flags.${MODULE_ID}.${REQUEST_FLAG}`);
            if (requested) {
                await handleRequestAsGm(bridge, user);
            }
        }

        // Player side: the GM delivered a nonce for me.
        if (user.id === game.user.id) {
            const noncePayload = foundry.utils.getProperty(changes, `flags.${MODULE_ID}.${NONCE_FLAG}`);
            if (noncePayload && noncePayload.payload) {
                await renderQrDialog(noncePayload.payload, game.user.name);
                // Clean up so the next request starts fresh.
                await game.user.unsetFlag(MODULE_ID, NONCE_FLAG);
                await game.user.unsetFlag(MODULE_ID, REQUEST_FLAG);
            }
        }
    });
}

async function handleRequestAsGm(bridge, user) {
    try {
        const { payload } = await mintPairing(bridge, user.id, user.name);
        await user.setFlag(MODULE_ID, NONCE_FLAG, { payload, ts: Date.now() });
    } catch (e) {
        console.warn(`[Bridge] Failed to mint pairing for ${user.name}: ${e.message}`);
        // Surface the failure to the requesting player as a flag they can read.
        await user.setFlag(MODULE_ID, NONCE_FLAG, { error: e.message, ts: Date.now() });
    }
}

/**
 * Called by the player's "Link my Agent" menu. Sets the request flag and
 * waits for the GM to respond; warns if the GM's Foundry never answers.
 */
export async function requestSelfServePairing() {
    if (game.user.isGM) {
        ui.notifications.info('As GM, use Manage Characters → the QR button beside a player.');
        return;
    }

    await game.user.setFlag(MODULE_ID, NONCE_FLAG, null);
    await game.user.setFlag(MODULE_ID, REQUEST_FLAG, Date.now());
    ui.notifications.info('Agent: requesting a pairing code from the GM…');

    // If the GM's Foundry is offline, nothing answers — tell the player plainly.
    setTimeout(async () => {
        const nonce = game.user.getFlag(MODULE_ID, NONCE_FLAG);
        if (!nonce) {
            await game.user.unsetFlag(MODULE_ID, REQUEST_FLAG);
            ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link.");
        }
    }, 12000);
}
