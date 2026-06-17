import { MODULE_ID } from '../constants.js';

// ==================================================================
// QUICK SETUP MENU (GM only)
//
// Accepts the "Foundry Setup Code" copied from the Agent settings page
// and fills in the module's connection settings in one paste: Agent URL,
// Channel ID, API key, and Reverb key. The Bridge derives Reverb host/port/
// SSL from the Agent URL, so the code only needs to carry the key.
// ==================================================================

const SUPPORTED_VERSION = 1;

/**
 * Decode a base64-wrapped JSON setup code. Returns the object or null.
 */
function decodeSetupCode(text) {
    const trimmed = (text || '').trim();
    if (!trimmed) return null;

    // base64 JSON (what the Agent emits); fall back to raw JSON for resilience.
    for (const candidate of [() => atob(trimmed), () => trimmed]) {
        try {
            return JSON.parse(candidate());
        } catch { /* try next */ }
    }
    return null;
}

export class QuickSetupMenu extends FormApplication {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: 'cpr-agent-quick-setup',
            title: 'Quick Setup — Paste Agent Config',
            width: 460,
            classes: ['form'],
        });
    }

    async _renderInner() {
        return $(`
            <div style="padding: 8px;">
                <p>In the <strong>Cyberpunk Agent</strong> app, open <strong>Settings</strong>,
                find <strong>Foundry Setup Code</strong>, click <strong>Copy Setup Code</strong>,
                then paste it below.</p>
                <textarea id="cpr-setup-code" rows="4"
                          placeholder="Paste your Foundry Setup Code here"
                          style="width:100%;font-family:monospace;font-size:0.75em;resize:vertical;"></textarea>
                <button type="button" id="cpr-apply-setup" style="margin-top:8px;">
                    <i class="fas fa-bolt"></i> Apply Setup
                </button>
            </div>
        `);
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('#cpr-apply-setup').click(async (event) => {
            event.preventDefault();
            await this._apply(html.find('#cpr-setup-code').val());
        });
    }

    async _apply(raw) {
        const data = decodeSetupCode(raw);
        if (!data || !data.agentUrl) {
            ui.notifications.error('Agent setup: that does not look like a valid setup code. Re-copy it from the Agent.');
            return;
        }
        if (data.v && data.v !== SUPPORTED_VERSION) {
            ui.notifications.error('Agent setup: this code was made by a newer Agent. Update the Bridge module.');
            return;
        }

        try {
            await game.settings.set(MODULE_ID, 'apiUrl', String(data.agentUrl).replace(/\/$/, ''));
            if (data.channelId) await game.settings.set(MODULE_ID, 'channelId', String(data.channelId));
            if (data.apiKey) await game.settings.set(MODULE_ID, 'apiKey', String(data.apiKey));
            if (data.reverbKey) await game.settings.set(MODULE_ID, 'reverbKey', String(data.reverbKey));
        } catch (e) {
            ui.notifications.error('Agent setup: failed to save settings.');
            return;
        }

        const missing = data.channelId ? '' : ' (no Channel ID in code — set it manually if needed)';
        ui.notifications.info(`Agent setup applied — connecting to ${data.agentUrl}.${missing}`);
        this.close();
    }
}
