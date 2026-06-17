import QRCode from 'qrcode';
import { mintPairing, PAIRING_TTL_SECONDS } from '../pairing.js';

// ==================================================================
// QR LINK UI
//
// Renders a pairing QR in a Dialog. Used by the GM's Character
// Assignment menu (co-located players) and the player-facing
// "Link my Agent" menu (remote players).
// ==================================================================

/**
 * Mint a pairing for a Foundry user and pop a dialog showing the QR.
 * Surfaces any minting error as a notification so the GM can troubleshoot.
 */
export async function showPairingQr(bridge, foundryUserId, foundryUserName) {
    let payload;
    try {
        ({ payload } = await mintPairing(bridge, foundryUserId, foundryUserName));
    } catch (e) {
        ui.notifications.error(`Agent pairing: ${e.message}`);
        return;
    }

    await renderQrDialog(payload, foundryUserName);
}

/**
 * Render an already-minted pairing payload as a QR dialog. Used by the remote
 * self-serve flow, where the GM mints the payload and hands it to the player.
 */
export async function renderQrDialog(payload, foundryUserName) {
    let dataUrl;
    try {
        dataUrl = await QRCode.toDataURL(payload, { width: 320, margin: 2, errorCorrectionLevel: 'M' });
    } catch (e) {
        ui.notifications.error('Agent pairing: failed to render QR code.');
        return;
    }

    const ttlMinutes = Math.round(PAIRING_TTL_SECONDS / 60);
    const name = foundryUserName || 'this player';

    // Same payload as the QR, base64-wrapped so a player on a PC (no camera)
    // can paste it into the Agent's "Paste the link code" field.
    const linkCode = btoa(payload);

    new Dialog({
        title: `Link Agent — ${name}`,
        content: `
            <div style="text-align:center;">
                <p>Open the Cyberpunk Agent app on your phone, tap <strong>Scan to Link</strong>,
                and point the camera at this code.</p>
                <img src="${dataUrl}" alt="Pairing QR code"
                     style="width:320px;height:320px;image-rendering:pixelated;background:#fff;padding:8px;border-radius:8px;" />
                <p style="margin-top:10px;">On a PC with no camera? Copy this code and paste it into the Agent:</p>
                <textarea readonly id="cpr-link-code" rows="2"
                          style="width:100%;font-family:monospace;font-size:0.7em;resize:none;word-break:break-all;"
                          onclick="this.select()">${linkCode}</textarea>
                <button type="button" id="cpr-copy-link-code" style="margin-top:6px;">
                    <i class="fas fa-copy"></i> Copy link code
                </button>
                <p style="color:#ffaa00;font-size:0.85em;margin-top:10px;">This code expires in ~${ttlMinutes} minutes and can only be used once.</p>
            </div>
        `,
        buttons: {
            close: { icon: '<i class="fas fa-check"></i>', label: 'Done' },
        },
        default: 'close',
        render: (html) => {
            html.find('#cpr-copy-link-code').click(async () => {
                try {
                    await navigator.clipboard.writeText(linkCode);
                    ui.notifications.info('Link code copied to clipboard.');
                } catch (e) {
                    html.find('#cpr-link-code').trigger('select');
                    ui.notifications.warn('Copy failed — select the code and copy it manually.');
                }
            });
        },
    }, { width: 380 }).render(true);
}
