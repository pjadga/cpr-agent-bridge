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
                <div id="cpr-setup-preview" style="margin-top:8px;font-size:0.85em;">
                    <div class="notes" style="opacity:0.7;">Paste a code above to preview its values.</div>
                </div>
                <button type="button" id="cpr-apply-setup" style="margin-top:8px;">
                    <i class="fas fa-bolt"></i> Apply Setup
                </button>
            </div>
        `);
    }

    activateListeners(html) {
        super.activateListeners(html);

        // Live preview: decode and reflect the code's values as the user types/pastes.
        // `input` fires on paste, typing, and cut, so a single listener covers all edits.
        html.find('#cpr-setup-code').on('input', (event) => {
            this._renderPreview(html, decodeSetupCode(event.currentTarget.value));
        });

        html.find('#cpr-apply-setup').click(async (event) => {
            event.preventDefault();
            await this._apply(html.find('#cpr-setup-code').val());
        });
    }

    /**
     * Render the decoded fields into the preview area. Called on every edit so the
     * displayed values stay in sync with what Apply would save. API/Reverb keys are
     * masked since they are secrets.
     */
    _renderPreview(html, data) {
        const preview = html.find('#cpr-setup-preview');
        if (!data || !data.agentUrl) {
            const msg = html.find('#cpr-setup-code').val().trim()
                ? 'Not a valid setup code yet — re-copy it from the Agent.'
                : 'Paste a code above to preview its values.';
            preview.html(`<div class="notes" style="opacity:0.7;">${msg}</div>`);
            return;
        }

        const mask = (v) => (v ? `••••${String(v).slice(-4)}` : '—');
        const rows = [
            ['Agent URL', String(data.agentUrl).replace(/\/$/, '')],
            ['Channel ID', data.channelId ? String(data.channelId) : '—'],
            ['API Key', mask(data.apiKey)],
            ['Reverb Key', mask(data.reverbKey)],
            ['Reverb Port', data.reverbPort ? String(data.reverbPort) : '—'],
        ];
        preview.html(rows.map(([label, value]) => `
            <div style="display:flex;justify-content:space-between;gap:8px;">
                <span style="opacity:0.7;">${label}</span>
                <span style="font-family:monospace;">${value}</span>
            </div>
        `).join(''));
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

        // The keys we set here also render as input fields on Foundry's main
        // "Configure Settings" form. Collect the applied values so we can reflect
        // them there too (see _reflectInSettingsForm).
        const applied = { apiUrl: String(data.agentUrl).replace(/\/$/, '') };
        if (data.channelId) applied.channelId = String(data.channelId);
        if (data.apiKey) applied.apiKey = String(data.apiKey);
        if (data.reverbKey) applied.reverbKey = String(data.reverbKey);
        if (data.reverbPort) applied.reverbPort = String(data.reverbPort);

        try {
            for (const [key, value] of Object.entries(applied)) {
                await game.settings.set(MODULE_ID, key, value);
            }
        } catch (e) {
            ui.notifications.error('Agent setup: failed to save settings.');
            return;
        }

        this._reflectInSettingsForm(applied);

        const missing = data.channelId ? '' : ' (no Channel ID in code — set it manually if needed)';
        ui.notifications.info(`Agent setup applied — connecting to ${data.agentUrl}.${missing}`);
        this.close();
    }

    /**
     * Push the applied values into the open "Configure Settings" form, if any.
     * The settings we just saved are also editable fields on that form; without
     * this, those fields keep showing the pre-paste values and a subsequent
     * "Save Changes" there would overwrite the fresh values with stale ones.
     * @param {Record<string, string>} applied  setting key -> saved value
     */
    _reflectInSettingsForm(applied) {
        const config = Object.values(ui.windows).find((w) => w instanceof SettingsConfig);
        if (!config?.element) return;

        for (const [key, value] of Object.entries(applied)) {
            const input = config.element.find(`[name="${MODULE_ID}.${key}"]`);
            if (input.length) input.val(value);
        }
    }
}