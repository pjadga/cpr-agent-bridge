import { agentOrigin } from '../constants.js';

// ==================================================================
// EMBED TRANSPORT
//
// Connects the Bridge to an Agent UI embedded in a Foundry-hosted
// iframe, over window.postMessage — no Laravel/Reverb in this path.
// The iframe runs in the player's own client, so Foundry's session
// already authenticates them; we only verify origin + handshake nonce.
//
// Wire envelope (both directions):
//   { __cpr: true, nonce, kind: 'hello'|'welcome'|'message', payload }
//   - hello   : iframe -> bridge, sent once the embed app has loaded
//   - welcome : bridge -> iframe, handshake ack
//   - message : either direction, `payload` is a bridge message (the
//               same shape sendResponse emits / handlers consume)
// ==================================================================

export class EmbedTransport {
    constructor(bridge) {
        this.bridge = bridge;
        this.frame = null;      // the <iframe> element we're bound to
        this.nonce = null;      // shared handshake token for this window
        this.origin = agentOrigin();
        this.ready = false;
        this._onMessage = this._onMessage.bind(this);
        window.addEventListener('message', this._onMessage);
    }

    /** Bind to a freshly-rendered iframe and await its hello. */
    attach(frame, nonce) {
        this.frame = frame;
        this.nonce = nonce;
        this.ready = false;
    }

    /** Unbind (window closed). The message listener stays; it no-ops without a frame. */
    detach() {
        this.frame = null;
        this.nonce = null;
        this.ready = false;
    }

    destroy() {
        window.removeEventListener('message', this._onMessage);
        this.detach();
    }

    /** Egress — deliver a bridge message into the iframe. No-op if detached. */
    send(payload) {
        if (!this.frame?.contentWindow) return;
        this.frame.contentWindow.postMessage(
            { __cpr: true, nonce: this.nonce, kind: 'message', payload },
            this.origin
        );
    }

    _onMessage(event) {
        // Only accept messages from our iframe's origin and its exact window.
        if (event.origin !== this.origin) return;
        if (!this.frame || event.source !== this.frame.contentWindow) return;

        const msg = event.data;
        if (!msg || msg.__cpr !== true) return;
        if (this.nonce && msg.nonce !== this.nonce) return;

        if (msg.kind === 'hello') {
            this.ready = true;
            this.frame.contentWindow.postMessage(
                { __cpr: true, nonce: this.nonce, kind: 'welcome' },
                this.origin
            );
            // Paint immediately: push the player's assigned character.
            this.bridge.handleIncomingDataLocal({ type: 'GET_ACTOR' });
            return;
        }

        if (msg.kind === 'message' && msg.payload) {
            this.bridge.handleIncomingDataLocal(msg.payload);
        }
    }
}
