import { requestSelfServePairing } from '../pairing-hooks.js';

// ==================================================================
// PLAYER-FACING "LINK MY AGENT" MENU (unrestricted)
//
// For remote players logged into the GM's world. Requests a pairing QR
// from the GM and renders it when it arrives (see pairing-hooks.js).
// ==================================================================

export class AgentLinkMenu extends FormApplication {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: 'cpr-agent-link-menu',
            title: 'Link my Agent',
            width: 420,
            classes: ['form'],
        });
    }

    async _renderInner() {
        return $(`
            <div style="padding: 8px;">
                <p>Generate a QR code to link the Cyberpunk Agent app on your phone to this game.</p>
                <ol style="margin: 0 0 12px 18px; padding: 0;">
                    <li>Click <strong>Generate QR</strong> below.</li>
                    <li>The GM's Foundry mints a one-time code (the GM must be online).</li>
                    <li>Open the Agent app, tap <strong>Scan to Link</strong>, and scan it.</li>
                </ol>
                <button type="button" id="cpr-generate-qr">
                    <i class="fas fa-qrcode"></i> Generate QR
                </button>
            </div>
        `);
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('#cpr-generate-qr').click(async (event) => {
            event.preventDefault();
            await requestSelfServePairing();
            this.close();
        });
    }
}
