import { MODULE_ID, DEFAULT_API_URL } from '../constants.js';

// ==================================================================
// QUICK SETUP MENU (GM only)
//
// Accepts the "Foundry Setup Code" from the Agent settings page in either
// form and fills in the module's connection settings in one go: Agent URL,
// Channel ID, API key, and Reverb key. The Bridge derives Reverb host/port/
// SSL from the Agent URL, so the code only needs to carry the key.
//
//   - Short code (e.g. "KX7M-4PWD"): one-time code redeemed from the Agent
//     over HTTP — typeable when the Agent lives on another device (phone).
//   - Long code: base64 JSON blob, self-contained, same-device paste.
// ==================================================================

const SUPPORTED_VERSION = 1;
const SHORT_CODE_PATTERN = /^[A-Z0-9]{4}-?[A-Z0-9]{4}$/i;

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

/**
 * Does the input look like a short one-time code rather than a blob?
 */
function isShortCode(text) {
    return SHORT_CODE_PATTERN.test((text || '').trim());
}

/**
 * Redeem a short code against the Agent server. Codes are single-use with a
 * short TTL. Uses the configured Agent URL, falling back to the default.
 * @returns {Promise<object>} the setup payload
 * @throws {Error} with a user-facing message
 */
async function redeemShortCode(text) {
    const code = text.trim().toUpperCase().replace(/^([A-Z0-9]{4})([A-Z0-9]{4})$/, '$1-$2');
    const base = (game.settings.get(MODULE_ID, 'apiUrl') || DEFAULT_API_URL).replace(/\/$/, '');

    let response;
    try {
        response = await fetch(`${base}/api/setup-code/${encodeURIComponent(code)}`, {
            headers: { Accept: 'application/json' },
        });
    } catch (e) {
        throw new Error(`Could not reach the Agent server at ${base}.`);
    }

    if (response.status === 404) {
        throw new Error('That setup code is invalid, expired, or already used — generate a fresh one in the Agent.');
    }
    if (!response.ok) {
        throw new Error(`Agent server rejected the setup code (HTTP ${response.status}).`);
    }

    return response.json();
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
                <p>In the <strong>Cyberpunk Agent</strong> app, open <strong>Settings</strong> and click
                <strong>Get Foundry Setup Code</strong>. Type the short code (e.g. <code>KX7M-4PWD</code>)
                below — or paste the full code if the Agent is on this device.</p>
                <textarea id="cpr-setup-code" rows="4"
                          placeholder="Short code (KX7M-4PWD) or full setup code"
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
        const raw = html.find('#cpr-setup-code').val().trim();

        if (isShortCode(raw)) {
            const base = (game.settings.get(MODULE_ID, 'apiUrl') || DEFAULT_API_URL).replace(/\/$/, '');
            preview.html(`<div class="notes" style="opacity:0.7;">Short code — configuration will be fetched from ${base} when you Apply.</div>`);
            return;
        }

        if (!data || !data.agentUrl) {
            const msg = raw
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
        let data;
        if (isShortCode(raw)) {
            try {
                data = await redeemShortCode(raw);
            } catch (e) {
                ui.notifications.error(`Agent setup: ${e.message}`);
                return;
            }
        } else {
            data = decodeSetupCode(raw);
        }

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