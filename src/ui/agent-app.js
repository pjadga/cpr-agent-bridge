import { agentBaseUrl } from '../constants.js';
import { EmbedTransport } from '../embed/embed-transport.js';

// ==================================================================
// AGENT APP WINDOW
//
// A resizable Foundry window embedding the Agent web UI in an iframe,
// bridged to Foundry via postMessage (EmbedTransport). This is the
// "no hosting on the player's part" path: the player opens this in
// their own Foundry client and the sheet is fed locally.
// ==================================================================

export class AgentApp extends Application {
    constructor(bridge, options = {}) {
        super(options);
        this.bridge = bridge;
        // Per-window handshake token, handed to the iframe via its URL.
        this.nonce = foundry.utils.randomID(24);
        // One shared transport per bridge; the window attaches/detaches its frame.
        if (!bridge.embedTransport) bridge.embedTransport = new EmbedTransport(bridge);
        this.transport = bridge.embedTransport;
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: 'cpr-agent-app',
            classes: ['cpr-agent-app'],
            title: 'Agent',
            template: 'modules/cpr-agent/templates/agent-app.hbs',
            width: 430,
            height: 820,
            resizable: true,
            popOut: true
        });
    }

    getData() {
        const base = agentBaseUrl();
        return {
            src: `${base}/embed?nonce=${encodeURIComponent(this.nonce)}`
        };
    }

    /**
     * Bind the postMessage transport to our iframe once it's in the DOM.
     *
     * Done in _render rather than activateListeners: our template's root
     * element IS the iframe, and on a V1 popOut Application the `html` passed
     * to activateListeners is that rendered root. `html.find('iframe...')`
     * only searches descendants, so it never matched the root iframe —
     * attach() was skipped and embedTransport.frame stayed null, dropping
     * every inbound message at the `!this.frame` gate. Binding from
     * `this.element` (the whole app window, iframe as a descendant) is
     * reliable; normalizing jQuery-vs-HTMLElement also keeps it correct on
     * v13. attach() runs before the iframe finishes loading, so the frame is
     * bound by the time the embed app posts its `hello`.
     */
    async _render(force, options) {
        await super._render(force, options);
        const root = this.element instanceof HTMLElement ? this.element : this.element?.[0];
        const frame = root?.querySelector?.('iframe.cpr-agent-frame');
        if (frame && this.transport.frame !== frame) {
            this.transport.attach(frame, this.nonce);
        } else if (!frame) {
            console.warn('[Bridge] AgentApp: iframe.cpr-agent-frame not found; transport not attached.');
        }
    }

    async close(options) {
        this.transport?.detach();
        return super.close(options);
    }
}
