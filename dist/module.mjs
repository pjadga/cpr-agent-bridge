import.meta.hot && import.meta.hot.accept((y) => {
  console.log("Hot reloading module...");
});
function Pe(y) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  }, Pe(y);
}
function Y(y, c) {
  if (!(y instanceof c))
    throw new TypeError("Cannot call a class as a function");
}
function Ar(y, c) {
  for (var r = 0; r < c.length; r++) {
    var a = c[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(y, a.key, a);
  }
}
function Z(y, c, r) {
  return c && Ar(y.prototype, c), Object.defineProperty(y, "prototype", {
    writable: !1
  }), y;
}
function xe() {
  return xe = Object.assign || function(y) {
    for (var c = 1; c < arguments.length; c++) {
      var r = arguments[c];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (y[a] = r[a]);
    }
    return y;
  }, xe.apply(this, arguments);
}
function ie(y, c) {
  if (typeof c != "function" && c !== null)
    throw new TypeError("Super expression must either be null or a function");
  y.prototype = Object.create(c && c.prototype, {
    constructor: {
      value: y,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(y, "prototype", {
    writable: !1
  }), c && ct(y, c);
}
function Ve(y) {
  return Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ve(y);
}
function ct(y, c) {
  return ct = Object.setPrototypeOf || function(a, i) {
    return a.__proto__ = i, a;
  }, ct(y, c);
}
function Lr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pr(y) {
  if (y === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return y;
}
function xr(y, c) {
  if (c && (typeof c == "object" || typeof c == "function"))
    return c;
  if (c !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pr(y);
}
function oe(y) {
  var c = Lr();
  return function() {
    var a = Ve(y), i;
    if (c) {
      var l = Ve(this).constructor;
      i = Reflect.construct(a, arguments, l);
    } else
      i = a.apply(this, arguments);
    return xr(this, i);
  };
}
var lt = /* @__PURE__ */ function() {
  function y() {
    Y(this, y);
  }
  return Z(y, [{
    key: "listenForWhisper",
    value: (
      /**
       * Listen for a whisper event on the channel instance.
       */
      function(r, a) {
        return this.listen(".client-" + r, a);
      }
    )
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "notification",
    value: function(r) {
      return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated", r);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */
  }, {
    key: "stopListeningForWhisper",
    value: function(r, a) {
      return this.stopListening(".client-" + r, a);
    }
  }]), y;
}(), Mt = /* @__PURE__ */ function() {
  function y(c) {
    Y(this, y), this.namespace = c;
  }
  return Z(y, [{
    key: "format",
    value: function(r) {
      return [".", "\\"].includes(r.charAt(0)) ? r.substring(1) : (this.namespace && (r = this.namespace + "." + r), r.replace(/\./g, "\\"));
    }
    /**
     * Set the event namespace.
     */
  }, {
    key: "setNamespace",
    value: function(r) {
      this.namespace = r;
    }
  }]), y;
}();
function Er(y) {
  try {
    new y();
  } catch (c) {
    if (c.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var ut = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r(a, i, l) {
    var h;
    return Y(this, r), h = c.call(this), h.name = i, h.pusher = a, h.options = l, h.eventFormatter = new Mt(h.options.namespace), h.subscribe(), h;
  }
  return Z(r, [{
    key: "subscribe",
    value: function() {
      this.subscription = this.pusher.subscribe(this.name);
    }
    /**
     * Unsubscribe from a Pusher channel.
     */
  }, {
    key: "unsubscribe",
    value: function() {
      this.pusher.unsubscribe(this.name);
    }
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l) {
      return this.on(this.eventFormatter.format(i), l), this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(i) {
      var l = this;
      return this.subscription.bind_global(function(h, f) {
        if (!h.startsWith("pusher:")) {
          var _ = l.options.namespace.replace(/\./g, "\\"), N = h.startsWith(_) ? h.substring(_.length + 1) : "." + h;
          i(N, f);
        }
      }), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(i, l) {
      return l ? this.subscription.unbind(this.eventFormatter.format(i), l) : this.subscription.unbind(this.eventFormatter.format(i)), this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */
  }, {
    key: "stopListeningToAll",
    value: function(i) {
      return i ? this.subscription.unbind_global(i) : this.subscription.unbind_global(), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(i) {
      return this.on("pusher:subscription_succeeded", function() {
        i();
      }), this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */
  }, {
    key: "error",
    value: function(i) {
      return this.on("pusher:subscription_error", function(l) {
        i(l);
      }), this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(i, l) {
      return this.subscription.bind(i, l), this;
    }
  }]), r;
}(lt), Nt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(i), l), this;
      }
    )
  }]), r;
}(ut), Or = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(i), l), this;
      }
    )
  }]), r;
}(ut), Mr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("pusher:subscription_succeeded", function(l) {
          i(Object.keys(l.members).map(function(h) {
            return l.members[h];
          }));
        }), this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(i) {
      return this.on("pusher:member_added", function(l) {
        i(l.info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(i, l) {
      return this.pusher.channels.channels[this.name].trigger("client-".concat(i), l), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(i) {
      return this.on("pusher:member_removed", function(l) {
        i(l.info);
      }), this;
    }
  }]), r;
}(Nt), Dt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r(a, i, l) {
    var h;
    return Y(this, r), h = c.call(this), h.events = {}, h.listeners = {}, h.name = i, h.socket = a, h.options = l, h.eventFormatter = new Mt(h.options.namespace), h.subscribe(), h;
  }
  return Z(r, [{
    key: "subscribe",
    value: function() {
      this.socket.emit("subscribe", {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Unsubscribe from channel and ubind event callbacks.
     */
  }, {
    key: "unsubscribe",
    value: function() {
      this.unbind(), this.socket.emit("unsubscribe", {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l) {
      return this.on(this.eventFormatter.format(i), l), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(i, l) {
      return this.unbindEvent(this.eventFormatter.format(i), l), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(i) {
      return this.on("connect", function(l) {
        i(l);
      }), this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(i) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */
  }, {
    key: "on",
    value: function(i, l) {
      var h = this;
      return this.listeners[i] = this.listeners[i] || [], this.events[i] || (this.events[i] = function(f, _) {
        h.name === f && h.listeners[i] && h.listeners[i].forEach(function(N) {
          return N(_);
        });
      }, this.socket.on(i, this.events[i])), this.listeners[i].push(l), this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function() {
      var i = this;
      Object.keys(this.events).forEach(function(l) {
        i.unbindEvent(l);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function(i, l) {
      this.listeners[i] = this.listeners[i] || [], l && (this.listeners[i] = this.listeners[i].filter(function(h) {
        return h !== l;
      })), (!l || this.listeners[i].length === 0) && (this.events[i] && (this.socket.removeListener(i, this.events[i]), delete this.events[i]), delete this.listeners[i]);
    }
  }]), r;
}(lt), Ft = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(i),
          data: l
        }), this;
      }
    )
  }]), r;
}(Dt), Nr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("presence:subscribed", function(l) {
          i(l.map(function(h) {
            return h.user_info;
          }));
        }), this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(i) {
      return this.on("presence:joining", function(l) {
        return i(l.user_info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(i, l) {
      return this.socket.emit("client event", {
        channel: this.name,
        event: "client-".concat(i),
        data: l
      }), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(i) {
      return this.on("presence:leaving", function(l) {
        return i(l.user_info);
      }), this;
    }
  }]), r;
}(Ft), We = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "subscribe",
    value: (
      /**
       * Subscribe to a channel.
       */
      function() {
      }
    )
    /**
     * Unsubscribe from a channel.
     */
  }, {
    key: "unsubscribe",
    value: function() {
    }
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(i) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(i, l) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(i) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(i) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(i, l) {
      return this;
    }
  }]), r;
}(lt), jt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this;
      }
    )
  }]), r;
}(We), Dr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this;
      }
    )
  }]), r;
}(We), Fr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Y(this, r), c.apply(this, arguments);
  }
  return Z(r, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(i) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(i, l) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(i) {
      return this;
    }
  }]), r;
}(jt), ht = /* @__PURE__ */ function() {
  function y(c) {
    Y(this, y), this._defaultOptions = {
      auth: {
        headers: {}
      },
      authEndpoint: "/broadcasting/auth",
      userAuthentication: {
        endpoint: "/broadcasting/user-auth",
        headers: {}
      },
      broadcaster: "pusher",
      csrfToken: null,
      bearerToken: null,
      host: null,
      key: null,
      namespace: "App.Events"
    }, this.setOptions(c), this.connect();
  }
  return Z(y, [{
    key: "setOptions",
    value: function(r) {
      this.options = xe(this._defaultOptions, r);
      var a = this.csrfToken();
      return a && (this.options.auth.headers["X-CSRF-TOKEN"] = a, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = a), a = this.options.bearerToken, a && (this.options.auth.headers.Authorization = "Bearer " + a, this.options.userAuthentication.headers.Authorization = "Bearer " + a), r;
    }
    /**
     * Extract the CSRF token from the page.
     */
  }, {
    key: "csrfToken",
    value: function() {
      var r;
      return typeof window < "u" && window.Laravel && window.Laravel.csrfToken ? window.Laravel.csrfToken : this.options.csrfToken ? this.options.csrfToken : typeof document < "u" && typeof document.querySelector == "function" && (r = document.querySelector('meta[name="csrf-token"]')) ? r.getAttribute("content") : null;
    }
  }]), y;
}(), Et = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    var a;
    return Y(this, r), a = c.apply(this, arguments), a.channels = {}, a;
  }
  return Z(r, [{
    key: "connect",
    value: function() {
      typeof this.options.client < "u" ? this.pusher = this.options.client : this.options.Pusher ? this.pusher = new this.options.Pusher(this.options.key, this.options) : this.pusher = new Pusher(this.options.key, this.options);
    }
    /**
     * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
     */
  }, {
    key: "signin",
    value: function() {
      this.pusher.signin();
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l, h) {
      return this.channel(i).listen(l, h);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new ut(this.pusher, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Nt(this.pusher, "private-" + i, this.options)), this.channels["private-" + i];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(i) {
      return this.channels["private-encrypted-" + i] || (this.channels["private-encrypted-" + i] = new Or(this.pusher, "private-encrypted-" + i, this.options)), this.channels["private-encrypted-" + i];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(i) {
      return this.channels["presence-" + i] || (this.channels["presence-" + i] = new Mr(this.pusher, "presence-" + i, this.options)), this.channels["presence-" + i];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(i) {
      var l = this, h = [i, "private-" + i, "private-encrypted-" + i, "presence-" + i];
      h.forEach(function(f, _) {
        l.leaveChannel(f);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(i) {
      this.channels[i] && (this.channels[i].unsubscribe(), delete this.channels[i]);
    }
    /**
     * Get the socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function() {
      return this.pusher.connection.socket_id;
    }
    /**
     * Disconnect Pusher connection.
     */
  }, {
    key: "disconnect",
    value: function() {
      this.pusher.disconnect();
    }
  }]), r;
}(ht), Ot = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    var a;
    return Y(this, r), a = c.apply(this, arguments), a.channels = {}, a;
  }
  return Z(r, [{
    key: "connect",
    value: function() {
      var i = this, l = this.getSocketIO();
      return this.socket = l(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(i.channels).forEach(function(h) {
          h.subscribe();
        });
      }), this.socket;
    }
    /**
     * Get socket.io module from global scope or options.
     */
  }, {
    key: "getSocketIO",
    value: function() {
      if (typeof this.options.client < "u")
        return this.options.client;
      if (typeof io < "u")
        return io;
      throw new Error("Socket.io client not found. Should be globally available or passed via options.client");
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l, h) {
      return this.channel(i).listen(l, h);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new Dt(this.socket, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Ft(this.socket, "private-" + i, this.options)), this.channels["private-" + i];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(i) {
      return this.channels["presence-" + i] || (this.channels["presence-" + i] = new Nr(this.socket, "presence-" + i, this.options)), this.channels["presence-" + i];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(i) {
      var l = this, h = [i, "private-" + i, "presence-" + i];
      h.forEach(function(f) {
        l.leaveChannel(f);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(i) {
      this.channels[i] && (this.channels[i].unsubscribe(), delete this.channels[i]);
    }
    /**
     * Get the socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function() {
      return this.socket.id;
    }
    /**
     * Disconnect Socketio connection.
     */
  }, {
    key: "disconnect",
    value: function() {
      this.socket.disconnect();
    }
  }]), r;
}(ht), jr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    var a;
    return Y(this, r), a = c.apply(this, arguments), a.channels = {}, a;
  }
  return Z(r, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l, h) {
      return new We();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return new We();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return new jt();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(i) {
      return new Dr();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(i) {
      return new Fr();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(i) {
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(i) {
    }
    /**
     * Get the socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function() {
      return "fake-socket-id";
    }
    /**
     * Disconnect the connection.
     */
  }, {
    key: "disconnect",
    value: function() {
    }
  }]), r;
}(ht), Ur = /* @__PURE__ */ function() {
  function y(c) {
    Y(this, y), this.options = c, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return Z(y, [{
    key: "channel",
    value: function(r) {
      return this.connector.channel(r);
    }
    /**
     * Create a new connection.
     */
  }, {
    key: "connect",
    value: function() {
      if (this.options.broadcaster == "reverb")
        this.connector = new Et(xe(xe({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new Et(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Ot(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new jr(this.options);
      else if (typeof this.options.broadcaster == "function" && Er(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(Pe(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
    }
    /**
     * Disconnect from the Echo server.
     */
  }, {
    key: "disconnect",
    value: function() {
      this.connector.disconnect();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "join",
    value: function(r) {
      return this.connector.presenceChannel(r);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(r) {
      this.connector.leave(r);
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(r) {
      this.connector.leaveChannel(r);
    }
    /**
     * Leave all channels.
     */
  }, {
    key: "leaveAllChannels",
    value: function() {
      for (var r in this.connector.channels)
        this.leaveChannel(r);
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(r, a, i) {
      return this.connector.listen(r, a, i);
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "private",
    value: function(r) {
      return this.connector.privateChannel(r);
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivate",
    value: function(r) {
      if (this.connector instanceof Ot)
        throw new Error("Broadcaster ".concat(Pe(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
      return this.connector.encryptedPrivateChannel(r);
    }
    /**
     * Get the Socket ID for the connection.
     */
  }, {
    key: "socketId",
    value: function() {
      return this.connector.socketId();
    }
    /**
     * Register 3rd party request interceptiors. These are used to automatically
     * send a connections socket id to a Laravel app with a X-Socket-Id header.
     */
  }, {
    key: "registerInterceptors",
    value: function() {
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : Pe(Turbo)) === "object" && this.registerTurboRequestInterceptor();
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerVueRequestInterceptor",
    value: function() {
      var r = this;
      Vue.http.interceptors.push(function(a, i) {
        r.socketId() && a.headers.set("X-Socket-ID", r.socketId()), i();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function() {
      var r = this;
      axios.interceptors.request.use(function(a) {
        return r.socketId() && (a.headers["X-Socket-Id"] = r.socketId()), a;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function() {
      var r = this;
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(a, i, l) {
        r.socketId() && l.setRequestHeader("X-Socket-Id", r.socketId());
      });
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerTurboRequestInterceptor",
    value: function() {
      var r = this;
      document.addEventListener("turbo:before-fetch-request", function(a) {
        a.detail.fetchOptions.headers["X-Socket-Id"] = r.socketId();
      });
    }
  }]), y;
}();
function Hr(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var Ut = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(y, c) {
  (function(a, i) {
    y.exports = i();
  })(window, function() {
    return (
      /******/
      function(r) {
        var a = {};
        function i(l) {
          if (a[l])
            return a[l].exports;
          var h = a[l] = {
            /******/
            i: l,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[l].call(h.exports, h, h.exports, i), h.l = !0, h.exports;
        }
        return i.m = r, i.c = a, i.d = function(l, h, f) {
          i.o(l, h) || Object.defineProperty(l, h, { enumerable: !0, get: f });
        }, i.r = function(l) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
        }, i.t = function(l, h) {
          if (h & 1 && (l = i(l)), h & 8 || h & 4 && typeof l == "object" && l && l.__esModule) return l;
          var f = /* @__PURE__ */ Object.create(null);
          if (i.r(f), Object.defineProperty(f, "default", { enumerable: !0, value: l }), h & 2 && typeof l != "string") for (var _ in l) i.d(f, _, (function(N) {
            return l[N];
          }).bind(null, _));
          return f;
        }, i.n = function(l) {
          var h = l && l.__esModule ? (
            /******/
            function() {
              return l.default;
            }
          ) : (
            /******/
            function() {
              return l;
            }
          );
          return i.d(h, "a", h), h;
        }, i.o = function(l, h) {
          return Object.prototype.hasOwnProperty.call(l, h);
        }, i.p = "", i(i.s = 2);
      }([
        /* 0 */
        /***/
        function(r, a, i) {
          var l = this && this.__extends || /* @__PURE__ */ function() {
            var R = function(k, w) {
              return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, z) {
                E.__proto__ = z;
              } || function(E, z) {
                for (var K in z) z.hasOwnProperty(K) && (E[K] = z[K]);
              }, R(k, w);
            };
            return function(k, w) {
              R(k, w);
              function E() {
                this.constructor = k;
              }
              k.prototype = w === null ? Object.create(w) : (E.prototype = w.prototype, new E());
            };
          }();
          Object.defineProperty(a, "__esModule", { value: !0 });
          var h = 256, f = (
            /** @class */
            function() {
              function R(k) {
                k === void 0 && (k = "="), this._paddingCharacter = k;
              }
              return R.prototype.encodedLength = function(k) {
                return this._paddingCharacter ? (k + 2) / 3 * 4 | 0 : (k * 8 + 5) / 6 | 0;
              }, R.prototype.encode = function(k) {
                for (var w = "", E = 0; E < k.length - 2; E += 3) {
                  var z = k[E] << 16 | k[E + 1] << 8 | k[E + 2];
                  w += this._encodeByte(z >>> 3 * 6 & 63), w += this._encodeByte(z >>> 2 * 6 & 63), w += this._encodeByte(z >>> 1 * 6 & 63), w += this._encodeByte(z >>> 0 * 6 & 63);
                }
                var K = k.length - E;
                if (K > 0) {
                  var z = k[E] << 16 | (K === 2 ? k[E + 1] << 8 : 0);
                  w += this._encodeByte(z >>> 3 * 6 & 63), w += this._encodeByte(z >>> 2 * 6 & 63), K === 2 ? w += this._encodeByte(z >>> 1 * 6 & 63) : w += this._paddingCharacter || "", w += this._paddingCharacter || "";
                }
                return w;
              }, R.prototype.maxDecodedLength = function(k) {
                return this._paddingCharacter ? k / 4 * 3 | 0 : (k * 6 + 7) / 8 | 0;
              }, R.prototype.decodedLength = function(k) {
                return this.maxDecodedLength(k.length - this._getPaddingLength(k));
              }, R.prototype.decode = function(k) {
                if (k.length === 0)
                  return new Uint8Array(0);
                for (var w = this._getPaddingLength(k), E = k.length - w, z = new Uint8Array(this.maxDecodedLength(E)), K = 0, J = 0, se = 0, ce = 0, ne = 0, le = 0, he = 0; J < E - 4; J += 4)
                  ce = this._decodeChar(k.charCodeAt(J + 0)), ne = this._decodeChar(k.charCodeAt(J + 1)), le = this._decodeChar(k.charCodeAt(J + 2)), he = this._decodeChar(k.charCodeAt(J + 3)), z[K++] = ce << 2 | ne >>> 4, z[K++] = ne << 4 | le >>> 2, z[K++] = le << 6 | he, se |= ce & h, se |= ne & h, se |= le & h, se |= he & h;
                if (J < E - 1 && (ce = this._decodeChar(k.charCodeAt(J)), ne = this._decodeChar(k.charCodeAt(J + 1)), z[K++] = ce << 2 | ne >>> 4, se |= ce & h, se |= ne & h), J < E - 2 && (le = this._decodeChar(k.charCodeAt(J + 2)), z[K++] = ne << 4 | le >>> 2, se |= le & h), J < E - 3 && (he = this._decodeChar(k.charCodeAt(J + 3)), z[K++] = le << 6 | he, se |= he & h), se !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return z;
              }, R.prototype._encodeByte = function(k) {
                var w = k;
                return w += 65, w += 25 - k >>> 8 & 6, w += 51 - k >>> 8 & -75, w += 61 - k >>> 8 & -15, w += 62 - k >>> 8 & 3, String.fromCharCode(w);
              }, R.prototype._decodeChar = function(k) {
                var w = h;
                return w += (42 - k & k - 44) >>> 8 & -h + k - 43 + 62, w += (46 - k & k - 48) >>> 8 & -h + k - 47 + 63, w += (47 - k & k - 58) >>> 8 & -h + k - 48 + 52, w += (64 - k & k - 91) >>> 8 & -h + k - 65 + 0, w += (96 - k & k - 123) >>> 8 & -h + k - 97 + 26, w;
              }, R.prototype._getPaddingLength = function(k) {
                var w = 0;
                if (this._paddingCharacter) {
                  for (var E = k.length - 1; E >= 0 && k[E] === this._paddingCharacter; E--)
                    w++;
                  if (k.length < 4 || w > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return w;
              }, R;
            }()
          );
          a.Coder = f;
          var _ = new f();
          function N(R) {
            return _.encode(R);
          }
          a.encode = N;
          function T(R) {
            return _.decode(R);
          }
          a.decode = T;
          var C = (
            /** @class */
            function(R) {
              l(k, R);
              function k() {
                return R !== null && R.apply(this, arguments) || this;
              }
              return k.prototype._encodeByte = function(w) {
                var E = w;
                return E += 65, E += 25 - w >>> 8 & 6, E += 51 - w >>> 8 & -75, E += 61 - w >>> 8 & -13, E += 62 - w >>> 8 & 49, String.fromCharCode(E);
              }, k.prototype._decodeChar = function(w) {
                var E = h;
                return E += (44 - w & w - 46) >>> 8 & -h + w - 45 + 62, E += (94 - w & w - 96) >>> 8 & -h + w - 95 + 63, E += (47 - w & w - 58) >>> 8 & -h + w - 48 + 52, E += (64 - w & w - 91) >>> 8 & -h + w - 65 + 0, E += (96 - w & w - 123) >>> 8 & -h + w - 97 + 26, E;
              }, k;
            }(f)
          );
          a.URLSafeCoder = C;
          var x = new C();
          function P(R) {
            return x.encode(R);
          }
          a.encodeURLSafe = P;
          function D(R) {
            return x.decode(R);
          }
          a.decodeURLSafe = D, a.encodedLength = function(R) {
            return _.encodedLength(R);
          }, a.maxDecodedLength = function(R) {
            return _.maxDecodedLength(R);
          }, a.decodedLength = function(R) {
            return _.decodedLength(R);
          };
        },
        /* 1 */
        /***/
        function(r, a, i) {
          Object.defineProperty(a, "__esModule", { value: !0 });
          var l = "utf8: invalid string", h = "utf8: invalid source encoding";
          function f(T) {
            for (var C = new Uint8Array(_(T)), x = 0, P = 0; P < T.length; P++) {
              var D = T.charCodeAt(P);
              D < 128 ? C[x++] = D : D < 2048 ? (C[x++] = 192 | D >> 6, C[x++] = 128 | D & 63) : D < 55296 ? (C[x++] = 224 | D >> 12, C[x++] = 128 | D >> 6 & 63, C[x++] = 128 | D & 63) : (P++, D = (D & 1023) << 10, D |= T.charCodeAt(P) & 1023, D += 65536, C[x++] = 240 | D >> 18, C[x++] = 128 | D >> 12 & 63, C[x++] = 128 | D >> 6 & 63, C[x++] = 128 | D & 63);
            }
            return C;
          }
          a.encode = f;
          function _(T) {
            for (var C = 0, x = 0; x < T.length; x++) {
              var P = T.charCodeAt(x);
              if (P < 128)
                C += 1;
              else if (P < 2048)
                C += 2;
              else if (P < 55296)
                C += 3;
              else if (P <= 57343) {
                if (x >= T.length - 1)
                  throw new Error(l);
                x++, C += 4;
              } else
                throw new Error(l);
            }
            return C;
          }
          a.encodedLength = _;
          function N(T) {
            for (var C = [], x = 0; x < T.length; x++) {
              var P = T[x];
              if (P & 128) {
                var D = void 0;
                if (P < 224) {
                  if (x >= T.length)
                    throw new Error(h);
                  var R = T[++x];
                  if ((R & 192) !== 128)
                    throw new Error(h);
                  P = (P & 31) << 6 | R & 63, D = 128;
                } else if (P < 240) {
                  if (x >= T.length - 1)
                    throw new Error(h);
                  var R = T[++x], k = T[++x];
                  if ((R & 192) !== 128 || (k & 192) !== 128)
                    throw new Error(h);
                  P = (P & 15) << 12 | (R & 63) << 6 | k & 63, D = 2048;
                } else if (P < 248) {
                  if (x >= T.length - 2)
                    throw new Error(h);
                  var R = T[++x], k = T[++x], w = T[++x];
                  if ((R & 192) !== 128 || (k & 192) !== 128 || (w & 192) !== 128)
                    throw new Error(h);
                  P = (P & 15) << 18 | (R & 63) << 12 | (k & 63) << 6 | w & 63, D = 65536;
                } else
                  throw new Error(h);
                if (P < D || P >= 55296 && P <= 57343)
                  throw new Error(h);
                if (P >= 65536) {
                  if (P > 1114111)
                    throw new Error(h);
                  P -= 65536, C.push(String.fromCharCode(55296 | P >> 10)), P = 56320 | P & 1023;
                }
              }
              C.push(String.fromCharCode(P));
            }
            return C.join("");
          }
          a.decode = N;
        },
        /* 2 */
        /***/
        function(r, a, i) {
          r.exports = i(3).default;
        },
        /* 3 */
        /***/
        function(r, a, i) {
          i.r(a);
          class l {
            constructor(e, t) {
              this.lastId = 0, this.prefix = e, this.name = t;
            }
            create(e) {
              this.lastId++;
              var t = this.lastId, s = this.prefix + t, o = this.name + "[" + t + "]", d = !1, b = function() {
                d || (e.apply(null, arguments), d = !0);
              };
              return this[t] = b, { number: t, id: s, name: o, callback: b };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var h = new l("_pusher_script_", "Pusher.ScriptReceivers"), f = {
            VERSION: "8.4.0",
            PROTOCOL: 7,
            wsPort: 80,
            wssPort: 443,
            wsPath: "",
            httpHost: "sockjs.pusher.com",
            httpPort: 80,
            httpsPort: 443,
            httpPath: "/pusher",
            stats_host: "stats.pusher.com",
            authEndpoint: "/pusher/auth",
            authTransport: "ajax",
            activityTimeout: 12e4,
            pongTimeout: 3e4,
            unavailableTimeout: 1e4,
            userAuthentication: {
              endpoint: "/pusher/user-auth",
              transport: "ajax"
            },
            channelAuthorization: {
              endpoint: "/pusher/auth",
              transport: "ajax"
            },
            cdn_http: "http://js.pusher.com",
            cdn_https: "https://js.pusher.com",
            dependency_suffix: ""
          }, _ = f;
          class N {
            constructor(e) {
              this.options = e, this.receivers = e.receivers || h, this.loading = {};
            }
            load(e, t, s) {
              var o = this;
              if (o.loading[e] && o.loading[e].length > 0)
                o.loading[e].push(s);
              else {
                o.loading[e] = [s];
                var d = M.createScriptRequest(o.getPath(e, t)), b = o.receivers.create(function(S) {
                  if (o.receivers.remove(b), o.loading[e]) {
                    var O = o.loading[e];
                    delete o.loading[e];
                    for (var U = function(X) {
                      X || d.cleanup();
                    }, q = 0; q < O.length; q++)
                      O[q](S, U);
                  }
                });
                d.send(b);
              }
            }
            getRoot(e) {
              var t, s = M.getDocument().location.protocol;
              return e && e.useTLS || s === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var T = new l("_pusher_dependencies", "Pusher.DependenciesReceivers"), C = new N({
            cdn_http: _.cdn_http,
            cdn_https: _.cdn_https,
            version: _.VERSION,
            suffix: _.dependency_suffix,
            receivers: T
          });
          const x = {
            baseUrl: "https://pusher.com",
            urls: {
              authenticationEndpoint: {
                path: "/docs/channels/server_api/authenticating_users"
              },
              authorizationEndpoint: {
                path: "/docs/channels/server_api/authorizing-users/"
              },
              javascriptQuickStart: {
                path: "/docs/javascript_quick_start"
              },
              triggeringClientEvents: {
                path: "/docs/client_api_guide/client_events#trigger-events"
              },
              encryptedChannelSupport: {
                fullUrl: "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"
              }
            }
          };
          var D = { buildLogSuffix: function(n) {
            const e = "See:", t = x.urls[n];
            if (!t)
              return "";
            let s;
            return t.fullUrl ? s = t.fullUrl : t.path && (s = x.baseUrl + t.path), s ? `${e} ${s}` : "";
          } }, R;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(R || (R = {}));
          class k extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class w extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class E extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class z extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class K extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class J extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class se extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class ce extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class ne extends Error {
            constructor(e, t) {
              super(t), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var he = function(n, e, t, s, o) {
            const d = M.createXHR();
            d.open("POST", t.endpoint, !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var b in t.headers)
              d.setRequestHeader(b, t.headers[b]);
            if (t.headersProvider != null) {
              let S = t.headersProvider();
              for (var b in S)
                d.setRequestHeader(b, S[b]);
            }
            return d.onreadystatechange = function() {
              if (d.readyState === 4)
                if (d.status === 200) {
                  let S, O = !1;
                  try {
                    S = JSON.parse(d.responseText), O = !0;
                  } catch {
                    o(new ne(200, `JSON returned from ${s.toString()} endpoint was invalid, yet status code was 200. Data was: ${d.responseText}`), null);
                  }
                  O && o(null, S);
                } else {
                  let S = "";
                  switch (s) {
                    case R.UserAuthentication:
                      S = D.buildLogSuffix("authenticationEndpoint");
                      break;
                    case R.ChannelAuthorization:
                      S = `Clients must be authorized to join private or presence channels. ${D.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  o(new ne(d.status, `Unable to retrieve auth string from ${s.toString()} endpoint - received status: ${d.status} from ${t.endpoint}. ${S}`), null);
                }
            }, d.send(e), d;
          };
          function Ee(n) {
            return De(Me(n));
          }
          var ye = String.fromCharCode, be = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Oe = function(n) {
            var e = n.charCodeAt(0);
            return e < 128 ? n : e < 2048 ? ye(192 | e >>> 6) + ye(128 | e & 63) : ye(224 | e >>> 12 & 15) + ye(128 | e >>> 6 & 63) + ye(128 | e & 63);
          }, Me = function(n) {
            return n.replace(/[^\x00-\x7F]/g, Oe);
          }, Ne = function(n) {
            var e = [0, 2, 1][n.length % 3], t = n.charCodeAt(0) << 16 | (n.length > 1 ? n.charCodeAt(1) : 0) << 8 | (n.length > 2 ? n.charCodeAt(2) : 0), s = [
              be.charAt(t >>> 18),
              be.charAt(t >>> 12 & 63),
              e >= 2 ? "=" : be.charAt(t >>> 6 & 63),
              e >= 1 ? "=" : be.charAt(t & 63)
            ];
            return s.join("");
          }, De = window.btoa || function(n) {
            return n.replace(/[\s\S]{1,3}/g, Ne);
          };
          class Fe {
            constructor(e, t, s, o) {
              this.clear = t, this.timer = e(() => {
                this.timer && (this.timer = o(this.timer));
              }, s);
            }
            isRunning() {
              return this.timer !== null;
            }
            ensureAborted() {
              this.timer && (this.clear(this.timer), this.timer = null);
            }
          }
          var Re = Fe;
          function je(n) {
            window.clearTimeout(n);
          }
          function Ue(n) {
            window.clearInterval(n);
          }
          class fe extends Re {
            constructor(e, t) {
              super(setTimeout, je, e, function(s) {
                return t(), null;
              });
            }
          }
          class He extends Re {
            constructor(e, t) {
              super(setInterval, Ue, e, function(s) {
                return t(), s;
              });
            }
          }
          var Be = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new fe(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(s) {
                return s[n].apply(s, t.concat(arguments));
              };
            }
          }, Q = Be;
          function u(n, ...e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t];
              for (var o in s)
                s[o] && s[o].constructor && s[o].constructor === Object ? n[o] = u(n[o] || {}, s[o]) : n[o] = s[o];
            }
            return n;
          }
          function g() {
            for (var n = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(ue(arguments[e]));
            return n.join(" : ");
          }
          function p(n, e) {
            var t = Array.prototype.indexOf;
            if (n === null)
              return -1;
            if (t && n.indexOf === t)
              return n.indexOf(e);
            for (var s = 0, o = n.length; s < o; s++)
              if (n[s] === e)
                return s;
            return -1;
          }
          function m(n, e) {
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && e(n[t], t, n);
          }
          function v(n) {
            var e = [];
            return m(n, function(t, s) {
              e.push(s);
            }), e;
          }
          function F(n) {
            var e = [];
            return m(n, function(t) {
              e.push(t);
            }), e;
          }
          function L(n, e, t) {
            for (var s = 0; s < n.length; s++)
              e.call(t || window, n[s], s, n);
          }
          function I(n, e) {
            for (var t = [], s = 0; s < n.length; s++)
              t.push(e(n[s], s, n, t));
            return t;
          }
          function B(n, e) {
            var t = {};
            return m(n, function(s, o) {
              t[o] = e(s);
            }), t;
          }
          function G(n, e) {
            e = e || function(o) {
              return !!o;
            };
            for (var t = [], s = 0; s < n.length; s++)
              e(n[s], s, n, t) && t.push(n[s]);
            return t;
          }
          function H(n, e) {
            var t = {};
            return m(n, function(s, o) {
              (e && e(s, o, n, t) || s) && (t[o] = s);
            }), t;
          }
          function te(n) {
            var e = [];
            return m(n, function(t, s) {
              e.push([s, t]);
            }), e;
          }
          function W(n, e) {
            for (var t = 0; t < n.length; t++)
              if (e(n[t], t, n))
                return !0;
            return !1;
          }
          function re(n, e) {
            for (var t = 0; t < n.length; t++)
              if (!e(n[t], t, n))
                return !1;
            return !0;
          }
          function ve(n) {
            return B(n, function(e) {
              return typeof e == "object" && (e = ue(e)), encodeURIComponent(Ee(e.toString()));
            });
          }
          function ke(n) {
            var e = H(n, function(s) {
              return s !== void 0;
            }), t = I(te(ve(e)), Q.method("join", "=")).join("&");
            return t;
          }
          function V(n) {
            var e = [], t = [];
            return function s(o, d) {
              var b, S, O;
              switch (typeof o) {
                case "object":
                  if (!o)
                    return null;
                  for (b = 0; b < e.length; b += 1)
                    if (e[b] === o)
                      return { $ref: t[b] };
                  if (e.push(o), t.push(d), Object.prototype.toString.apply(o) === "[object Array]")
                    for (O = [], b = 0; b < o.length; b += 1)
                      O[b] = s(o[b], d + "[" + b + "]");
                  else {
                    O = {};
                    for (S in o)
                      Object.prototype.hasOwnProperty.call(o, S) && (O[S] = s(o[S], d + "[" + JSON.stringify(S) + "]"));
                  }
                  return O;
                case "number":
                case "string":
                case "boolean":
                  return o;
              }
            }(n, "$");
          }
          function ue(n) {
            try {
              return JSON.stringify(n);
            } catch {
              return JSON.stringify(V(n));
            }
          }
          class de {
            constructor() {
              this.globalLog = (e) => {
                window.console && window.console.log && window.console.log(e);
              };
            }
            debug(...e) {
              this.log(this.globalLog, e);
            }
            warn(...e) {
              this.log(this.globalLogWarn, e);
            }
            error(...e) {
              this.log(this.globalLogError, e);
            }
            globalLogWarn(e) {
              window.console && window.console.warn ? window.console.warn(e) : this.globalLog(e);
            }
            globalLogError(e) {
              window.console && window.console.error ? window.console.error(e) : this.globalLogWarn(e);
            }
            log(e, ...t) {
              var s = g.apply(this, arguments);
              st.log ? st.log(s) : st.logToConsole && e.bind(this)(s);
            }
          }
          var j = new de(), pe = function(n, e, t, s, o) {
            (t.headers !== void 0 || t.headersProvider != null) && j.warn(`To send headers with the ${s.toString()} request, you must use AJAX, rather than JSONP.`);
            var d = n.nextAuthCallbackID.toString();
            n.nextAuthCallbackID++;
            var b = n.getDocument(), S = b.createElement("script");
            n.auth_callbacks[d] = function(q) {
              o(null, q);
            };
            var O = "Pusher.auth_callbacks['" + d + "']";
            S.src = t.endpoint + "?callback=" + encodeURIComponent(O) + "&" + e;
            var U = b.getElementsByTagName("head")[0] || b.documentElement;
            U.insertBefore(S, U.firstChild);
          }, ae = pe;
          class we {
            constructor(e) {
              this.src = e;
            }
            send(e) {
              var t = this, s = "Error loading " + t.src;
              t.script = document.createElement("script"), t.script.id = e.id, t.script.src = t.src, t.script.type = "text/javascript", t.script.charset = "UTF-8", t.script.addEventListener ? (t.script.onerror = function() {
                e.callback(s);
              }, t.script.onload = function() {
                e.callback(null);
              }) : t.script.onreadystatechange = function() {
                (t.script.readyState === "loaded" || t.script.readyState === "complete") && e.callback(null);
              }, t.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (t.errorScript = document.createElement("script"), t.errorScript.id = e.id + "_error", t.errorScript.text = e.name + "('" + s + "');", t.script.async = t.errorScript.async = !1) : t.script.async = !0;
              var o = document.getElementsByTagName("head")[0];
              o.insertBefore(t.script, o.firstChild), t.errorScript && o.insertBefore(t.errorScript, t.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class Te {
            constructor(e, t) {
              this.url = e, this.data = t;
            }
            send(e) {
              if (!this.request) {
                var t = ke(this.data), s = this.url + "/" + e.number + "?" + t;
                this.request = M.createScriptRequest(s), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Ht = function(n, e) {
            return function(t, s) {
              var o = "http" + (e ? "s" : "") + "://", d = o + (n.host || n.options.host) + n.options.path, b = M.createJSONPRequest(d, t), S = M.ScriptReceivers.create(function(O, U) {
                h.remove(S), b.cleanup(), U && U.host && (n.host = U.host), s && s(O, U);
              });
              b.send(S);
            };
          }, Bt = {
            name: "jsonp",
            getAgent: Ht
          }, qt = Bt;
          function Xe(n, e, t) {
            var s = n + (e.useTLS ? "s" : ""), o = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return s + "://" + o + t;
          }
          function Ke(n, e) {
            var t = "/app/" + n, s = "?protocol=" + _.PROTOCOL + "&client=js&version=" + _.VERSION + (e ? "&" + e : "");
            return t + s;
          }
          var zt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "") + Ke(n, "flash=false");
              return Xe("ws", e, t);
            }
          }, $t = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "/pusher") + Ke(n);
              return Xe("http", e, t);
            }
          }, Gt = {
            getInitial: function(n, e) {
              return Xe("http", e, e.httpPath || "/pusher");
            },
            getPath: function(n, e) {
              return Ke(n);
            }
          };
          class Vt {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Je(e)];
            }
            add(e, t, s) {
              var o = Je(e);
              this._callbacks[o] = this._callbacks[o] || [], this._callbacks[o].push({
                fn: t,
                context: s
              });
            }
            remove(e, t, s) {
              if (!e && !t && !s) {
                this._callbacks = {};
                return;
              }
              var o = e ? [Je(e)] : v(this._callbacks);
              t || s ? this.removeCallback(o, t, s) : this.removeAllCallbacks(o);
            }
            removeCallback(e, t, s) {
              L(e, function(o) {
                this._callbacks[o] = G(this._callbacks[o] || [], function(d) {
                  return t && t !== d.fn || s && s !== d.context;
                }), this._callbacks[o].length === 0 && delete this._callbacks[o];
              }, this);
            }
            removeAllCallbacks(e) {
              L(e, function(t) {
                delete this._callbacks[t];
              }, this);
            }
          }
          function Je(n) {
            return "_" + n;
          }
          class ge {
            constructor(e) {
              this.callbacks = new Vt(), this.global_callbacks = [], this.failThrough = e;
            }
            bind(e, t, s) {
              return this.callbacks.add(e, t, s), this;
            }
            bind_global(e) {
              return this.global_callbacks.push(e), this;
            }
            unbind(e, t, s) {
              return this.callbacks.remove(e, t, s), this;
            }
            unbind_global(e) {
              return e ? (this.global_callbacks = G(this.global_callbacks || [], (t) => t !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, t, s) {
              for (var o = 0; o < this.global_callbacks.length; o++)
                this.global_callbacks[o](e, t);
              var d = this.callbacks.get(e), b = [];
              if (s ? b.push(t, s) : t && b.push(t), d && d.length > 0)
                for (var o = 0; o < d.length; o++)
                  d[o].fn.apply(d[o].context || window, b);
              else this.failThrough && this.failThrough(e, t);
              return this;
            }
          }
          class Wt extends ge {
            constructor(e, t, s, o, d) {
              super(), this.initialize = M.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = s, this.key = o, this.options = d, this.state = "new", this.timeline = d.timeline, this.activityTimeout = d.activityTimeout, this.id = this.timeline.generateUniqueID();
            }
            handlesActivityChecks() {
              return !!this.hooks.handlesActivityChecks;
            }
            supportsPing() {
              return !!this.hooks.supportsPing;
            }
            connect() {
              if (this.socket || this.state !== "initialized")
                return !1;
              var e = this.hooks.urls.getInitial(this.key, this.options);
              try {
                this.socket = this.hooks.getSocket(e, this.options);
              } catch (t) {
                return Q.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), j.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (Q.defer(() => {
                this.socket && this.socket.send(e);
              }), !0) : !1;
            }
            ping() {
              this.state === "open" && this.supportsPing() && this.socket.ping();
            }
            onOpen() {
              this.hooks.beforeOpen && this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options)), this.changeState("open"), this.socket.onopen = void 0;
            }
            onError(e) {
              this.emit("error", { type: "WebSocketError", error: e }), this.timeline.error(this.buildTimelineMessage({ error: e.toString() }));
            }
            onClose(e) {
              e ? this.changeState("closed", {
                code: e.code,
                reason: e.reason,
                wasClean: e.wasClean
              }) : this.changeState("closed"), this.unbindListeners(), this.socket = void 0;
            }
            onMessage(e) {
              this.emit("message", e);
            }
            onActivity() {
              this.emit("activity");
            }
            bindListeners() {
              this.socket.onopen = () => {
                this.onOpen();
              }, this.socket.onerror = (e) => {
                this.onError(e);
              }, this.socket.onclose = (e) => {
                this.onClose(e);
              }, this.socket.onmessage = (e) => {
                this.onMessage(e);
              }, this.supportsPing() && (this.socket.onactivity = () => {
                this.onActivity();
              });
            }
            unbindListeners() {
              this.socket && (this.socket.onopen = void 0, this.socket.onerror = void 0, this.socket.onclose = void 0, this.socket.onmessage = void 0, this.supportsPing() && (this.socket.onactivity = void 0));
            }
            changeState(e, t) {
              this.state = e, this.timeline.info(this.buildTimelineMessage({
                state: e,
                params: t
              })), this.emit(e, t);
            }
            buildTimelineMessage(e) {
              return u({ cid: this.id }, e);
            }
          }
          class Ie {
            constructor(e) {
              this.hooks = e;
            }
            isSupported(e) {
              return this.hooks.isSupported(e);
            }
            createConnection(e, t, s, o) {
              return new Wt(this.hooks, e, t, s, o);
            }
          }
          var Xt = new Ie({
            urls: zt,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!M.getWebSocketAPI();
            },
            isSupported: function() {
              return !!M.getWebSocketAPI();
            },
            getSocket: function(n) {
              return M.createWebSocket(n);
            }
          }), dt = {
            urls: $t,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, ft = u({
            getSocket: function(n) {
              return M.HTTPFactory.createStreamingSocket(n);
            }
          }, dt), pt = u({
            getSocket: function(n) {
              return M.HTTPFactory.createPollingSocket(n);
            }
          }, dt), gt = {
            isSupported: function() {
              return M.isXHRSupported();
            }
          }, Kt = new Ie(u({}, ft, gt)), Jt = new Ie(u({}, pt, gt)), Qt = {
            ws: Xt,
            xhr_streaming: Kt,
            xhr_polling: Jt
          }, qe = Qt, Yt = new Ie({
            file: "sockjs",
            urls: Gt,
            handlesActivityChecks: !0,
            supportsPing: !1,
            isSupported: function() {
              return !0;
            },
            isInitialized: function() {
              return window.SockJS !== void 0;
            },
            getSocket: function(n, e) {
              return new window.SockJS(n, null, {
                js_path: C.getPath("sockjs", {
                  useTLS: e.useTLS
                }),
                ignore_null_origin: e.ignoreNullOrigin
              });
            },
            beforeOpen: function(n, e) {
              n.send(JSON.stringify({
                path: e
              }));
            }
          }), mt = {
            isSupported: function(n) {
              var e = M.isXDRSupported(n.useTLS);
              return e;
            }
          }, Zt = new Ie(u({}, ft, mt)), en = new Ie(u({}, pt, mt));
          qe.xdr_streaming = Zt, qe.xdr_polling = en, qe.sockjs = Yt;
          var tn = qe;
          class nn extends ge {
            constructor() {
              super();
              var e = this;
              window.addEventListener !== void 0 && (window.addEventListener("online", function() {
                e.emit("online");
              }, !1), window.addEventListener("offline", function() {
                e.emit("offline");
              }, !1));
            }
            isOnline() {
              return window.navigator.onLine === void 0 ? !0 : window.navigator.onLine;
            }
          }
          var rn = new nn();
          class sn {
            constructor(e, t, s) {
              this.manager = e, this.transport = t, this.minPingDelay = s.minPingDelay, this.maxPingDelay = s.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(e, t, s, o) {
              o = u({}, o, {
                activityTimeout: this.pingDelay
              });
              var d = this.transport.createConnection(e, t, s, o), b = null, S = function() {
                d.unbind("open", S), d.bind("closed", O), b = Q.now();
              }, O = (U) => {
                if (d.unbind("closed", O), U.code === 1002 || U.code === 1003)
                  this.manager.reportDeath();
                else if (!U.wasClean && b) {
                  var q = Q.now() - b;
                  q < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(q / 2, this.minPingDelay));
                }
              };
              return d.bind("open", S), d;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const yt = {
            decodeMessage: function(n) {
              try {
                var e = JSON.parse(n.data), t = e.data;
                if (typeof t == "string")
                  try {
                    t = JSON.parse(e.data);
                  } catch {
                  }
                var s = {
                  event: e.event,
                  channel: e.channel,
                  data: t
                };
                return e.user_id && (s.user_id = e.user_id), s;
              } catch (o) {
                throw { type: "MessageParseError", error: o, data: n.data };
              }
            },
            encodeMessage: function(n) {
              return JSON.stringify(n);
            },
            processHandshake: function(n) {
              var e = yt.decodeMessage(n);
              if (e.event === "pusher:connection_established") {
                if (!e.data.activity_timeout)
                  throw "No activity timeout specified in handshake";
                return {
                  action: "connected",
                  id: e.data.socket_id,
                  activityTimeout: e.data.activity_timeout * 1e3
                };
              } else {
                if (e.event === "pusher:error")
                  return {
                    action: this.getCloseAction(e.data),
                    error: this.getCloseError(e.data)
                  };
                throw "Invalid handshake";
              }
            },
            getCloseAction: function(n) {
              return n.code < 4e3 ? n.code >= 1002 && n.code <= 1004 ? "backoff" : null : n.code === 4e3 ? "tls_only" : n.code < 4100 ? "refused" : n.code < 4200 ? "backoff" : n.code < 4300 ? "retry" : "refused";
            },
            getCloseError: function(n) {
              return n.code !== 1e3 && n.code !== 1001 ? {
                type: "PusherError",
                data: {
                  code: n.code,
                  message: n.reason || n.message
                }
              } : null;
            }
          };
          var _e = yt;
          class on extends ge {
            constructor(e, t) {
              super(), this.id = e, this.transport = t, this.activityTimeout = t.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(e) {
              return this.transport.send(e);
            }
            send_event(e, t, s) {
              var o = { event: e, data: t };
              return s && (o.channel = s), j.debug("Event sent", o), this.send(_e.encodeMessage(o));
            }
            ping() {
              this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
            }
            close() {
              this.transport.close();
            }
            bindListeners() {
              var e = {
                message: (s) => {
                  var o;
                  try {
                    o = _e.decodeMessage(s);
                  } catch (d) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: d,
                      data: s.data
                    });
                  }
                  if (o !== void 0) {
                    switch (j.debug("Event recd", o), o.event) {
                      case "pusher:error":
                        this.emit("error", {
                          type: "PusherError",
                          data: o.data
                        });
                        break;
                      case "pusher:ping":
                        this.emit("ping");
                        break;
                      case "pusher:pong":
                        this.emit("pong");
                        break;
                    }
                    this.emit("message", o);
                  }
                },
                activity: () => {
                  this.emit("activity");
                },
                error: (s) => {
                  this.emit("error", s);
                },
                closed: (s) => {
                  t(), s && s.code && this.handleCloseEvent(s), this.transport = null, this.emit("closed");
                }
              }, t = () => {
                m(e, (s, o) => {
                  this.transport.unbind(o, s);
                });
              };
              m(e, (s, o) => {
                this.transport.bind(o, s);
              });
            }
            handleCloseEvent(e) {
              var t = _e.getCloseAction(e), s = _e.getCloseError(e);
              s && this.emit("error", s), t && this.emit(t, { action: t, error: s });
            }
          }
          class an {
            constructor(e, t) {
              this.transport = e, this.callback = t, this.bindListeners();
            }
            close() {
              this.unbindListeners(), this.transport.close();
            }
            bindListeners() {
              this.onMessage = (e) => {
                this.unbindListeners();
                var t;
                try {
                  t = _e.processHandshake(e);
                } catch (s) {
                  this.finish("error", { error: s }), this.transport.close();
                  return;
                }
                t.action === "connected" ? this.finish("connected", {
                  connection: new on(t.id, this.transport),
                  activityTimeout: t.activityTimeout
                }) : (this.finish(t.action, { error: t.error }), this.transport.close());
              }, this.onClosed = (e) => {
                this.unbindListeners();
                var t = _e.getCloseAction(e) || "backoff", s = _e.getCloseError(e);
                this.finish(t, { error: s });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, t) {
              this.callback(u({ transport: this.transport, action: e }, t));
            }
          }
          class cn {
            constructor(e, t) {
              this.timeline = e, this.options = t || {};
            }
            send(e, t) {
              this.timeline.isEmpty() || this.timeline.send(M.TimelineTransport.getAgent(this, e), t);
            }
          }
          class Qe extends ge {
            constructor(e, t) {
              super(function(s, o) {
                j.debug("No callbacks on " + e + " for " + s);
              }), this.name = e, this.pusher = t, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, t) {
              return t(null, { auth: "" });
            }
            trigger(e, t) {
              if (e.indexOf("client-") !== 0)
                throw new k("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var s = D.buildLogSuffix("triggeringClientEvents");
                j.warn(`Client event triggered before channel 'subscription_succeeded' event . ${s}`);
              }
              return this.pusher.send_event(e, t, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(e) {
              var t = e.event, s = e.data;
              if (t === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(e);
              else if (t === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(e);
              else if (t.indexOf("pusher_internal:") !== 0) {
                var o = {};
                this.emit(t, s, o);
              }
            }
            handleSubscriptionSucceededEvent(e) {
              this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", e.data);
            }
            handleSubscriptionCountEvent(e) {
              e.data.subscription_count && (this.subscriptionCount = e.data.subscription_count), this.emit("pusher:subscription_count", e.data);
            }
            subscribe() {
              this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (e, t) => {
                e ? (this.subscriptionPending = !1, j.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: e.message
                }, e instanceof ne ? { status: e.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
                  auth: t.auth,
                  channel_data: t.channel_data,
                  channel: this.name
                });
              }));
            }
            unsubscribe() {
              this.subscribed = !1, this.pusher.send_event("pusher:unsubscribe", {
                channel: this.name
              });
            }
            cancelSubscription() {
              this.subscriptionCancelled = !0;
            }
            reinstateSubscription() {
              this.subscriptionCancelled = !1;
            }
          }
          class Ye extends Qe {
            authorize(e, t) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: e
              }, t);
            }
          }
          class ln {
            constructor() {
              this.reset();
            }
            get(e) {
              return Object.prototype.hasOwnProperty.call(this.members, e) ? {
                id: e,
                info: this.members[e]
              } : null;
            }
            each(e) {
              m(this.members, (t, s) => {
                e(this.get(s));
              });
            }
            setMyID(e) {
              this.myID = e;
            }
            onSubscription(e) {
              this.members = e.presence.hash, this.count = e.presence.count, this.me = this.get(this.myID);
            }
            addMember(e) {
              return this.get(e.user_id) === null && this.count++, this.members[e.user_id] = e.user_info, this.get(e.user_id);
            }
            removeMember(e) {
              var t = this.get(e.user_id);
              return t && (delete this.members[e.user_id], this.count--), t;
            }
            reset() {
              this.members = {}, this.count = 0, this.myID = null, this.me = null;
            }
          }
          var un = function(n, e, t, s) {
            function o(d) {
              return d instanceof t ? d : new t(function(b) {
                b(d);
              });
            }
            return new (t || (t = Promise))(function(d, b) {
              function S(q) {
                try {
                  U(s.next(q));
                } catch (X) {
                  b(X);
                }
              }
              function O(q) {
                try {
                  U(s.throw(q));
                } catch (X) {
                  b(X);
                }
              }
              function U(q) {
                q.done ? d(q.value) : o(q.value).then(S, O);
              }
              U((s = s.apply(n, e || [])).next());
            });
          };
          class hn extends Ye {
            constructor(e, t) {
              super(e, t), this.members = new ln();
            }
            authorize(e, t) {
              super.authorize(e, (s, o) => un(this, void 0, void 0, function* () {
                if (!s)
                  if (o = o, o.channel_data != null) {
                    var d = JSON.parse(o.channel_data);
                    this.members.setMyID(d.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let b = D.buildLogSuffix("authorizationEndpoint");
                    j.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${b}, or the user should be signed in.`), t("Invalid auth response");
                    return;
                  }
                t(s, o);
              }));
            }
            handleEvent(e) {
              var t = e.event;
              if (t.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(e);
              else {
                var s = e.data, o = {};
                e.user_id && (o.user_id = e.user_id), this.emit(t, s, o);
              }
            }
            handleInternalEvent(e) {
              var t = e.event, s = e.data;
              switch (t) {
                case "pusher_internal:subscription_succeeded":
                  this.handleSubscriptionSucceededEvent(e);
                  break;
                case "pusher_internal:subscription_count":
                  this.handleSubscriptionCountEvent(e);
                  break;
                case "pusher_internal:member_added":
                  var o = this.members.addMember(s);
                  this.emit("pusher:member_added", o);
                  break;
                case "pusher_internal:member_removed":
                  var d = this.members.removeMember(s);
                  d && this.emit("pusher:member_removed", d);
                  break;
              }
            }
            handleSubscriptionSucceededEvent(e) {
              this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : (this.members.onSubscription(e.data), this.emit("pusher:subscription_succeeded", this.members));
            }
            disconnect() {
              this.members.reset(), super.disconnect();
            }
          }
          var dn = i(1), Ze = i(0);
          class fn extends Ye {
            constructor(e, t, s) {
              super(e, t), this.key = null, this.nacl = s;
            }
            authorize(e, t) {
              super.authorize(e, (s, o) => {
                if (s) {
                  t(s, o);
                  return;
                }
                let d = o.shared_secret;
                if (!d) {
                  t(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(Ze.decode)(d), delete o.shared_secret, t(null, o);
              });
            }
            trigger(e, t) {
              throw new J("Client events are not currently supported for encrypted channels");
            }
            handleEvent(e) {
              var t = e.event, s = e.data;
              if (t.indexOf("pusher_internal:") === 0 || t.indexOf("pusher:") === 0) {
                super.handleEvent(e);
                return;
              }
              this.handleEncryptedEvent(t, s);
            }
            handleEncryptedEvent(e, t) {
              if (!this.key) {
                j.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!t.ciphertext || !t.nonce) {
                j.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + t);
                return;
              }
              let s = Object(Ze.decode)(t.ciphertext);
              if (s.length < this.nacl.secretbox.overheadLength) {
                j.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${s.length}`);
                return;
              }
              let o = Object(Ze.decode)(t.nonce);
              if (o.length < this.nacl.secretbox.nonceLength) {
                j.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${o.length}`);
                return;
              }
              let d = this.nacl.secretbox.open(s, o, this.key);
              if (d === null) {
                j.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (b, S) => {
                  if (b) {
                    j.error(`Failed to make a request to the authEndpoint: ${S}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (d = this.nacl.secretbox.open(s, o, this.key), d === null) {
                    j.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(e, this.getDataToEmit(d));
                });
                return;
              }
              this.emit(e, this.getDataToEmit(d));
            }
            getDataToEmit(e) {
              let t = Object(dn.decode)(e);
              try {
                return JSON.parse(t);
              } catch {
                return t;
              }
            }
          }
          class pn extends ge {
            constructor(e, t) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = t, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var s = M.getNetwork();
              s.bind("online", () => {
                this.timeline.info({ netinfo: "online" }), (this.state === "connecting" || this.state === "unavailable") && this.retryIn(0);
              }), s.bind("offline", () => {
                this.timeline.info({ netinfo: "offline" }), this.connection && this.sendActivityCheck();
              }), this.updateStrategy();
            }
            connect() {
              if (!(this.connection || this.runner)) {
                if (!this.strategy.isSupported()) {
                  this.updateState("failed");
                  return;
                }
                this.updateState("connecting"), this.startConnecting(), this.setUnavailableTimer();
              }
            }
            send(e) {
              return this.connection ? this.connection.send(e) : !1;
            }
            send_event(e, t, s) {
              return this.connection ? this.connection.send_event(e, t, s) : !1;
            }
            disconnect() {
              this.disconnectInternally(), this.updateState("disconnected");
            }
            isUsingTLS() {
              return this.usingTLS;
            }
            startConnecting() {
              var e = (t, s) => {
                t ? this.runner = this.strategy.connect(0, e) : s.action === "error" ? (this.emit("error", {
                  type: "HandshakeError",
                  error: s.error
                }), this.timeline.error({ handshakeError: s.error })) : (this.abortConnecting(), this.handshakeCallbacks[s.action](s));
              };
              this.runner = this.strategy.connect(0, e);
            }
            abortConnecting() {
              this.runner && (this.runner.abort(), this.runner = null);
            }
            disconnectInternally() {
              if (this.abortConnecting(), this.clearRetryTimer(), this.clearUnavailableTimer(), this.connection) {
                var e = this.abandonConnection();
                e.close();
              }
            }
            updateStrategy() {
              this.strategy = this.options.getStrategy({
                key: this.key,
                timeline: this.timeline,
                useTLS: this.usingTLS
              });
            }
            retryIn(e) {
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new fe(e || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new fe(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new fe(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new fe(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(e) {
              return u({}, e, {
                message: (t) => {
                  this.resetActivityCheck(), this.emit("message", t);
                },
                ping: () => {
                  this.send_event("pusher:pong", {});
                },
                activity: () => {
                  this.resetActivityCheck();
                },
                error: (t) => {
                  this.emit("error", t);
                },
                closed: () => {
                  this.abandonConnection(), this.shouldRetry() && this.retryIn(1e3);
                }
              });
            }
            buildHandshakeCallbacks(e) {
              return u({}, e, {
                connected: (t) => {
                  this.activityTimeout = Math.min(this.options.activityTimeout, t.activityTimeout, t.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(t.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
                }
              });
            }
            buildErrorCallbacks() {
              let e = (t) => (s) => {
                s.error && this.emit("error", { type: "WebSocketError", error: s.error }), t(s);
              };
              return {
                tls_only: e(() => {
                  this.usingTLS = !0, this.updateStrategy(), this.retryIn(0);
                }),
                refused: e(() => {
                  this.disconnect();
                }),
                backoff: e(() => {
                  this.retryIn(1e3);
                }),
                retry: e(() => {
                  this.retryIn(0);
                })
              };
            }
            setConnection(e) {
              this.connection = e;
              for (var t in this.connectionCallbacks)
                this.connection.bind(t, this.connectionCallbacks[t]);
              this.resetActivityCheck();
            }
            abandonConnection() {
              if (this.connection) {
                this.stopActivityCheck();
                for (var e in this.connectionCallbacks)
                  this.connection.unbind(e, this.connectionCallbacks[e]);
                var t = this.connection;
                return this.connection = null, t;
              }
            }
            updateState(e, t) {
              var s = this.state;
              if (this.state = e, s !== e) {
                var o = e;
                o === "connected" && (o += " with new socket ID " + t.socket_id), j.debug("State changed", s + " -> " + o), this.timeline.info({ state: e, params: t }), this.emit("state_change", { previous: s, current: e }), this.emit(e, t);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class gn {
            constructor() {
              this.channels = {};
            }
            add(e, t) {
              return this.channels[e] || (this.channels[e] = mn(e, t)), this.channels[e];
            }
            all() {
              return F(this.channels);
            }
            find(e) {
              return this.channels[e];
            }
            remove(e) {
              var t = this.channels[e];
              return delete this.channels[e], t;
            }
            disconnect() {
              m(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function mn(n, e) {
            if (n.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return me.createEncryptedChannel(n, e, e.config.nacl);
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", s = D.buildLogSuffix("encryptedChannelSupport");
              throw new J(`${t}. ${s}`);
            } else {
              if (n.indexOf("private-") === 0)
                return me.createPrivateChannel(n, e);
              if (n.indexOf("presence-") === 0)
                return me.createPresenceChannel(n, e);
              if (n.indexOf("#") === 0)
                throw new w('Cannot create a channel with name "' + n + '".');
              return me.createChannel(n, e);
            }
          }
          var yn = {
            createChannels() {
              return new gn();
            },
            createConnectionManager(n, e) {
              return new pn(n, e);
            },
            createChannel(n, e) {
              return new Qe(n, e);
            },
            createPrivateChannel(n, e) {
              return new Ye(n, e);
            },
            createPresenceChannel(n, e) {
              return new hn(n, e);
            },
            createEncryptedChannel(n, e, t) {
              return new fn(n, e, t);
            },
            createTimelineSender(n, e) {
              return new cn(n, e);
            },
            createHandshake(n, e) {
              return new an(n, e);
            },
            createAssistantToTheTransportManager(n, e, t) {
              return new sn(n, e, t);
            }
          }, me = yn;
          class vt {
            constructor(e) {
              this.options = e || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(e) {
              return me.createAssistantToTheTransportManager(this, e, {
                minPingDelay: this.options.minPingDelay,
                maxPingDelay: this.options.maxPingDelay
              });
            }
            isAlive() {
              return this.livesLeft > 0;
            }
            reportDeath() {
              this.livesLeft -= 1;
            }
          }
          class Se {
            constructor(e, t) {
              this.strategies = e, this.loop = !!t.loop, this.failFast = !!t.failFast, this.timeout = t.timeout, this.timeoutLimit = t.timeoutLimit;
            }
            isSupported() {
              return W(this.strategies, Q.method("isSupported"));
            }
            connect(e, t) {
              var s = this.strategies, o = 0, d = this.timeout, b = null, S = (O, U) => {
                U ? t(null, U) : (o = o + 1, this.loop && (o = o % s.length), o < s.length ? (d && (d = d * 2, this.timeoutLimit && (d = Math.min(d, this.timeoutLimit))), b = this.tryStrategy(s[o], e, { timeout: d, failFast: this.failFast }, S)) : t(!0));
              };
              return b = this.tryStrategy(s[o], e, { timeout: d, failFast: this.failFast }, S), {
                abort: function() {
                  b.abort();
                },
                forceMinPriority: function(O) {
                  e = O, b && b.forceMinPriority(O);
                }
              };
            }
            tryStrategy(e, t, s, o) {
              var d = null, b = null;
              return s.timeout > 0 && (d = new fe(s.timeout, function() {
                b.abort(), o(!0);
              })), b = e.connect(t, function(S, O) {
                S && d && d.isRunning() && !s.failFast || (d && d.ensureAborted(), o(S, O));
              }), {
                abort: function() {
                  d && d.ensureAborted(), b.abort();
                },
                forceMinPriority: function(S) {
                  b.forceMinPriority(S);
                }
              };
            }
          }
          class et {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return W(this.strategies, Q.method("isSupported"));
            }
            connect(e, t) {
              return vn(this.strategies, e, function(s, o) {
                return function(d, b) {
                  if (o[s].error = d, d) {
                    bn(o) && t(!0);
                    return;
                  }
                  L(o, function(S) {
                    S.forceMinPriority(b.transport.priority);
                  }), t(null, b);
                };
              });
            }
          }
          function vn(n, e, t) {
            var s = I(n, function(o, d, b, S) {
              return o.connect(e, t(d, S));
            });
            return {
              abort: function() {
                L(s, kn);
              },
              forceMinPriority: function(o) {
                L(s, function(d) {
                  d.forceMinPriority(o);
                });
              }
            };
          }
          function bn(n) {
            return re(n, function(e) {
              return !!e.error;
            });
          }
          function kn(n) {
            !n.error && !n.aborted && (n.abort(), n.aborted = !0);
          }
          class wn {
            constructor(e, t, s) {
              this.strategy = e, this.transports = t, this.ttl = s.ttl || 1800 * 1e3, this.usingTLS = s.useTLS, this.timeline = s.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var s = this.usingTLS, o = _n(s), d = o && o.cacheSkipCount ? o.cacheSkipCount : 0, b = [this.strategy];
              if (o && o.timestamp + this.ttl >= Q.now()) {
                var S = this.transports[o.transport];
                S && (["ws", "wss"].includes(o.transport) || d > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: o.transport,
                  latency: o.latency
                }), b.push(new Se([S], {
                  timeout: o.latency * 2 + 1e3,
                  failFast: !0
                }))) : d++);
              }
              var O = Q.now(), U = b.pop().connect(e, function q(X, Ge) {
                X ? (bt(s), b.length > 0 ? (O = Q.now(), U = b.pop().connect(e, q)) : t(X)) : (Sn(s, Ge.transport.name, Q.now() - O, d), t(null, Ge));
              });
              return {
                abort: function() {
                  U.abort();
                },
                forceMinPriority: function(q) {
                  e = q, U && U.forceMinPriority(q);
                }
              };
            }
          }
          function tt(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function _n(n) {
            var e = M.getLocalStorage();
            if (e)
              try {
                var t = e[tt(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                bt(n);
              }
            return null;
          }
          function Sn(n, e, t, s) {
            var o = M.getLocalStorage();
            if (o)
              try {
                o[tt(n)] = ue({
                  timestamp: Q.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: s
                });
              } catch {
              }
          }
          function bt(n) {
            var e = M.getLocalStorage();
            if (e)
              try {
                delete e[tt(n)];
              } catch {
              }
          }
          class ze {
            constructor(e, { delay: t }) {
              this.strategy = e, this.options = { delay: t };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var s = this.strategy, o, d = new fe(this.options.delay, function() {
                o = s.connect(e, t);
              });
              return {
                abort: function() {
                  d.ensureAborted(), o && o.abort();
                },
                forceMinPriority: function(b) {
                  e = b, o && o.forceMinPriority(b);
                }
              };
            }
          }
          class Ae {
            constructor(e, t, s) {
              this.test = e, this.trueBranch = t, this.falseBranch = s;
            }
            isSupported() {
              var e = this.test() ? this.trueBranch : this.falseBranch;
              return e.isSupported();
            }
            connect(e, t) {
              var s = this.test() ? this.trueBranch : this.falseBranch;
              return s.connect(e, t);
            }
          }
          class Cn {
            constructor(e) {
              this.strategy = e;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var s = this.strategy.connect(e, function(o, d) {
                d && s.abort(), t(o, d);
              });
              return s;
            }
          }
          function Le(n) {
            return function() {
              return n.isSupported();
            };
          }
          var Tn = function(n, e, t) {
            var s = {};
            function o(Pt, Cr, Tr, Ir, Rr) {
              var xt = t(n, Pt, Cr, Tr, Ir, Rr);
              return s[Pt] = xt, xt;
            }
            var d = Object.assign({}, e, {
              hostNonTLS: n.wsHost + ":" + n.wsPort,
              hostTLS: n.wsHost + ":" + n.wssPort,
              httpPath: n.wsPath
            }), b = Object.assign({}, d, {
              useTLS: !0
            }), S = Object.assign({}, e, {
              hostNonTLS: n.httpHost + ":" + n.httpPort,
              hostTLS: n.httpHost + ":" + n.httpsPort,
              httpPath: n.httpPath
            }), O = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, U = new vt({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), q = new vt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), X = o("ws", "ws", 3, d, U), Ge = o("wss", "ws", 3, b, U), br = o("sockjs", "sockjs", 1, S), Ct = o("xhr_streaming", "xhr_streaming", 1, S, q), kr = o("xdr_streaming", "xdr_streaming", 1, S, q), Tt = o("xhr_polling", "xhr_polling", 1, S), wr = o("xdr_polling", "xdr_polling", 1, S), It = new Se([X], O), _r = new Se([Ge], O), Sr = new Se([br], O), Rt = new Se([
              new Ae(Le(Ct), Ct, kr)
            ], O), At = new Se([
              new Ae(Le(Tt), Tt, wr)
            ], O), Lt = new Se([
              new Ae(Le(Rt), new et([
                Rt,
                new ze(At, { delay: 4e3 })
              ]), At)
            ], O), it = new Ae(Le(Lt), Lt, Sr), ot;
            return e.useTLS ? ot = new et([
              It,
              new ze(it, { delay: 2e3 })
            ]) : ot = new et([
              It,
              new ze(_r, { delay: 2e3 }),
              new ze(it, { delay: 5e3 })
            ]), new wn(new Cn(new Ae(Le(X), ot, it)), s, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, In = Tn, Rn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), C.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
              n.hooks.isInitialized() ? (n.changeState("initialized"), t(!0)) : (e && n.onError(e), n.onClose(), t(!1));
            })) : n.onClose();
          }, An = {
            getRequest: function(n) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                n.emit("error", new E()), n.close();
              }, e.onerror = function(t) {
                n.emit("error", t), n.close();
              }, e.onprogress = function() {
                e.responseText && e.responseText.length > 0 && n.onChunk(200, e.responseText);
              }, e.onload = function() {
                e.responseText && e.responseText.length > 0 && n.onChunk(200, e.responseText), n.emit("finished", 200), n.close();
              }, e;
            },
            abortRequest: function(n) {
              n.ontimeout = n.onerror = n.onprogress = n.onload = null, n.abort();
            }
          }, Ln = An;
          const Pn = 256 * 1024;
          class xn extends ge {
            constructor(e, t, s) {
              super(), this.hooks = e, this.method = t, this.url = s;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, M.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (M.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
            }
            onChunk(e, t) {
              for (; ; ) {
                var s = this.advanceBuffer(t);
                if (s)
                  this.emit("chunk", { status: e, data: s });
                else
                  break;
              }
              this.isBufferTooLong(t) && this.emit("buffer_too_long");
            }
            advanceBuffer(e) {
              var t = e.slice(this.position), s = t.indexOf(`
`);
              return s !== -1 ? (this.position += s + 1, t.slice(0, s)) : null;
            }
            isBufferTooLong(e) {
              return this.position === e.length && e.length > Pn;
            }
          }
          var nt;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(nt || (nt = {}));
          var Ce = nt, En = 1;
          class On {
            constructor(e, t) {
              this.hooks = e, this.session = wt(1e3) + "/" + Fn(8), this.location = Mn(t), this.readyState = Ce.CONNECTING, this.openStream();
            }
            send(e) {
              return this.sendRaw(JSON.stringify([e]));
            }
            ping() {
              this.hooks.sendHeartbeat(this);
            }
            close(e, t) {
              this.onClose(e, t, !0);
            }
            sendRaw(e) {
              if (this.readyState === Ce.OPEN)
                try {
                  return M.createSocketRequest("POST", kt(Nn(this.location, this.session))).start(e), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(e, t, s) {
              this.closeStream(), this.readyState = Ce.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: t,
                wasClean: s
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === Ce.OPEN && this.onActivity();
                var t, s = e.data.slice(0, 1);
                switch (s) {
                  case "o":
                    t = JSON.parse(e.data.slice(1) || "{}"), this.onOpen(t);
                    break;
                  case "a":
                    t = JSON.parse(e.data.slice(1) || "[]");
                    for (var o = 0; o < t.length; o++)
                      this.onEvent(t[o]);
                    break;
                  case "m":
                    t = JSON.parse(e.data.slice(1) || "null"), this.onEvent(t);
                    break;
                  case "h":
                    this.hooks.onHeartbeat(this);
                    break;
                  case "c":
                    t = JSON.parse(e.data.slice(1) || "[]"), this.onClose(t[0], t[1], !0);
                    break;
                }
              }
            }
            onOpen(e) {
              this.readyState === Ce.CONNECTING ? (e && e.hostname && (this.location.base = Dn(this.location.base, e.hostname)), this.readyState = Ce.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
            }
            onEvent(e) {
              this.readyState === Ce.OPEN && this.onmessage && this.onmessage({ data: e });
            }
            onActivity() {
              this.onactivity && this.onactivity();
            }
            onError(e) {
              this.onerror && this.onerror(e);
            }
            openStream() {
              this.stream = M.createSocketRequest("POST", kt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                Q.defer(() => {
                  this.onError(e), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function Mn(n) {
            var e = /([^\?]*)\/*(\??.*)/.exec(n);
            return {
              base: e[1],
              queryString: e[2]
            };
          }
          function Nn(n, e) {
            return n.base + "/" + e + "/xhr_send";
          }
          function kt(n) {
            var e = n.indexOf("?") === -1 ? "?" : "&";
            return n + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + En++;
          }
          function Dn(n, e) {
            var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);
            return t[1] + e + t[3];
          }
          function wt(n) {
            return M.randomInt(n);
          }
          function Fn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(wt(32).toString(32));
            return e.join("");
          }
          var jn = On, Un = {
            getReceiveURL: function(n, e) {
              return n.base + "/" + e + "/xhr_streaming" + n.queryString;
            },
            onHeartbeat: function(n) {
              n.sendRaw("[]");
            },
            sendHeartbeat: function(n) {
              n.sendRaw("[]");
            },
            onFinished: function(n, e) {
              n.onClose(1006, "Connection interrupted (" + e + ")", !1);
            }
          }, Hn = Un, Bn = {
            getReceiveURL: function(n, e) {
              return n.base + "/" + e + "/xhr" + n.queryString;
            },
            onHeartbeat: function() {
            },
            sendHeartbeat: function(n) {
              n.sendRaw("[]");
            },
            onFinished: function(n, e) {
              e === 200 ? n.reconnect() : n.onClose(1006, "Connection interrupted (" + e + ")", !1);
            }
          }, qn = Bn, zn = {
            getRequest: function(n) {
              var e = M.getXHRAPI(), t = new e();
              return t.onreadystatechange = t.onprogress = function() {
                switch (t.readyState) {
                  case 3:
                    t.responseText && t.responseText.length > 0 && n.onChunk(t.status, t.responseText);
                    break;
                  case 4:
                    t.responseText && t.responseText.length > 0 && n.onChunk(t.status, t.responseText), n.emit("finished", t.status), n.close();
                    break;
                }
              }, t;
            },
            abortRequest: function(n) {
              n.onreadystatechange = null, n.abort();
            }
          }, $n = zn, Gn = {
            createStreamingSocket(n) {
              return this.createSocket(Hn, n);
            },
            createPollingSocket(n) {
              return this.createSocket(qn, n);
            },
            createSocket(n, e) {
              return new jn(n, e);
            },
            createXHR(n, e) {
              return this.createRequest($n, n, e);
            },
            createRequest(n, e, t) {
              return new xn(n, e, t);
            }
          }, _t = Gn;
          _t.createXDR = function(n, e) {
            return this.createRequest(Ln, n, e);
          };
          var Vn = _t, Wn = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: h,
            DependenciesReceivers: T,
            getDefaultStrategy: In,
            Transports: tn,
            transportConnectionInitializer: Rn,
            HTTPFactory: Vn,
            TimelineTransport: qt,
            getXHRAPI() {
              return window.XMLHttpRequest;
            },
            getWebSocketAPI() {
              return window.WebSocket || window.MozWebSocket;
            },
            setup(n) {
              window.Pusher = n;
              var e = () => {
                this.onDocumentBody(n.ready);
              };
              window.JSON ? e() : C.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: he, jsonp: ae };
            },
            onDocumentBody(n) {
              document.body ? n() : setTimeout(() => {
                this.onDocumentBody(n);
              }, 0);
            },
            createJSONPRequest(n, e) {
              return new Te(n, e);
            },
            createScriptRequest(n) {
              return new we(n);
            },
            getLocalStorage() {
              try {
                return window.localStorage;
              } catch {
                return;
              }
            },
            createXHR() {
              return this.getXHRAPI() ? this.createXMLHttpRequest() : this.createMicrosoftXHR();
            },
            createXMLHttpRequest() {
              var n = this.getXHRAPI();
              return new n();
            },
            createMicrosoftXHR() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            },
            getNetwork() {
              return rn;
            },
            createWebSocket(n) {
              var e = this.getWebSocketAPI();
              return new e(n);
            },
            createSocketRequest(n, e) {
              if (this.isXHRSupported())
                return this.HTTPFactory.createXHR(n, e);
              if (this.isXDRSupported(e.indexOf("https:") === 0))
                return this.HTTPFactory.createXDR(n, e);
              throw "Cross-origin HTTP requests are not supported";
            },
            isXHRSupported() {
              var n = this.getXHRAPI();
              return !!n && new n().withCredentials !== void 0;
            },
            isXDRSupported(n) {
              var e = n ? "https:" : "http:", t = this.getProtocol();
              return !!window.XDomainRequest && t === e;
            },
            addUnloadListener(n) {
              window.addEventListener !== void 0 ? window.addEventListener("unload", n, !1) : window.attachEvent !== void 0 && window.attachEvent("onunload", n);
            },
            removeUnloadListener(n) {
              window.addEventListener !== void 0 ? window.removeEventListener("unload", n, !1) : window.detachEvent !== void 0 && window.detachEvent("onunload", n);
            },
            randomInt(n) {
              return Math.floor(function() {
                return (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
              }() * n);
            }
          }, M = Wn, rt;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(rt || (rt = {}));
          var $e = rt;
          class Xn {
            constructor(e, t, s) {
              this.key = e, this.session = t, this.events = [], this.options = s || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(u({}, t, { timestamp: Q.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log($e.ERROR, e);
            }
            info(e) {
              this.log($e.INFO, e);
            }
            debug(e) {
              this.log($e.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, t) {
              var s = u({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], e(s, (o, d) => {
                o || this.sent++, t && t(o, d);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class Kn {
            constructor(e, t, s, o) {
              this.name = e, this.priority = t, this.transport = s, this.options = o || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(e, t) {
              if (this.isSupported()) {
                if (this.priority < e)
                  return St(new z(), t);
              } else return St(new ce(), t);
              var s = !1, o = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), d = null, b = function() {
                o.unbind("initialized", b), o.connect();
              }, S = function() {
                d = me.createHandshake(o, function(X) {
                  s = !0, q(), t(null, X);
                });
              }, O = function(X) {
                q(), t(X);
              }, U = function() {
                q();
                var X;
                X = ue(o), t(new K(X));
              }, q = function() {
                o.unbind("initialized", b), o.unbind("open", S), o.unbind("error", O), o.unbind("closed", U);
              };
              return o.bind("initialized", b), o.bind("open", S), o.bind("error", O), o.bind("closed", U), o.initialize(), {
                abort: () => {
                  s || (q(), d ? d.close() : o.close());
                },
                forceMinPriority: (X) => {
                  s || this.priority < X && (d ? d.close() : o.close());
                }
              };
            }
          }
          function St(n, e) {
            return Q.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Jn } = M;
          var Qn = function(n, e, t, s, o, d) {
            var b = Jn[t];
            if (!b)
              throw new se(t);
            var S = (!n.enabledTransports || p(n.enabledTransports, e) !== -1) && (!n.disabledTransports || p(n.disabledTransports, e) === -1), O;
            return S ? (o = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, o), O = new Kn(e, s, d ? d.getAssistant(b) : b, o)) : O = Yn, O;
          }, Yn = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = Q.defer(function() {
                e(new ce());
              });
              return {
                abort: function() {
                  t.ensureAborted();
                },
                forceMinPriority: function() {
                }
              };
            }
          };
          function Zn(n) {
            if (n == null)
              throw "You must pass an options object";
            if (n.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in n && j.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const er = (n, e) => {
            var t = "socket_id=" + encodeURIComponent(n.socketId);
            for (var s in e.params)
              t += "&" + encodeURIComponent(s) + "=" + encodeURIComponent(e.params[s]);
            if (e.paramsProvider != null) {
              let o = e.paramsProvider();
              for (var s in o)
                t += "&" + encodeURIComponent(s) + "=" + encodeURIComponent(o[s]);
            }
            return t;
          };
          var tr = (n) => {
            if (typeof M.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const s = er(e, n);
              M.getAuthorizers()[n.transport](M, s, n, R.UserAuthentication, t);
            };
          };
          const nr = (n, e) => {
            var t = "socket_id=" + encodeURIComponent(n.socketId);
            t += "&channel_name=" + encodeURIComponent(n.channelName);
            for (var s in e.params)
              t += "&" + encodeURIComponent(s) + "=" + encodeURIComponent(e.params[s]);
            if (e.paramsProvider != null) {
              let o = e.paramsProvider();
              for (var s in o)
                t += "&" + encodeURIComponent(s) + "=" + encodeURIComponent(o[s]);
            }
            return t;
          };
          var rr = (n) => {
            if (typeof M.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const s = nr(e, n);
              M.getAuthorizers()[n.transport](M, s, n, R.ChannelAuthorization, t);
            };
          };
          const sr = (n, e, t) => {
            const s = {
              authTransport: e.transport,
              authEndpoint: e.endpoint,
              auth: {
                params: e.params,
                headers: e.headers
              }
            };
            return (o, d) => {
              const b = n.channel(o.channelName);
              t(b, s).authorize(o.socketId, d);
            };
          };
          function ir(n, e) {
            let t = {
              activityTimeout: n.activityTimeout || _.activityTimeout,
              cluster: n.cluster,
              httpPath: n.httpPath || _.httpPath,
              httpPort: n.httpPort || _.httpPort,
              httpsPort: n.httpsPort || _.httpsPort,
              pongTimeout: n.pongTimeout || _.pongTimeout,
              statsHost: n.statsHost || _.stats_host,
              unavailableTimeout: n.unavailableTimeout || _.unavailableTimeout,
              wsPath: n.wsPath || _.wsPath,
              wsPort: n.wsPort || _.wsPort,
              wssPort: n.wssPort || _.wssPort,
              enableStats: ur(n),
              httpHost: or(n),
              useTLS: lr(n),
              wsHost: ar(n),
              userAuthenticator: hr(n),
              channelAuthorizer: fr(n, e)
            };
            return "disabledTransports" in n && (t.disabledTransports = n.disabledTransports), "enabledTransports" in n && (t.enabledTransports = n.enabledTransports), "ignoreNullOrigin" in n && (t.ignoreNullOrigin = n.ignoreNullOrigin), "timelineParams" in n && (t.timelineParams = n.timelineParams), "nacl" in n && (t.nacl = n.nacl), t;
          }
          function or(n) {
            return n.httpHost ? n.httpHost : n.cluster ? `sockjs-${n.cluster}.pusher.com` : _.httpHost;
          }
          function ar(n) {
            return n.wsHost ? n.wsHost : cr(n.cluster);
          }
          function cr(n) {
            return `ws-${n}.pusher.com`;
          }
          function lr(n) {
            return M.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
          }
          function ur(n) {
            return "enableStats" in n ? n.enableStats : "disableStats" in n ? !n.disableStats : !1;
          }
          function hr(n) {
            const e = Object.assign(Object.assign({}, _.userAuthentication), n.userAuthentication);
            return "customHandler" in e && e.customHandler != null ? e.customHandler : tr(e);
          }
          function dr(n, e) {
            let t;
            return "channelAuthorization" in n ? t = Object.assign(Object.assign({}, _.channelAuthorization), n.channelAuthorization) : (t = {
              transport: n.authTransport || _.authTransport,
              endpoint: n.authEndpoint || _.authEndpoint
            }, "auth" in n && ("params" in n.auth && (t.params = n.auth.params), "headers" in n.auth && (t.headers = n.auth.headers)), "authorizer" in n && (t.customHandler = sr(e, t, n.authorizer))), t;
          }
          function fr(n, e) {
            const t = dr(n, e);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : rr(t);
          }
          class pr extends ge {
            constructor(e) {
              super(function(t, s) {
                j.debug(`No callbacks on watchlist events for ${t}`);
              }), this.pusher = e, this.bindWatchlistInternalEvent();
            }
            handleEvent(e) {
              e.data.events.forEach((t) => {
                this.emit(t.name, t);
              });
            }
            bindWatchlistInternalEvent() {
              this.pusher.connection.bind("message", (e) => {
                var t = e.event;
                t === "pusher_internal:watchlist_events" && this.handleEvent(e);
              });
            }
          }
          function gr() {
            let n, e;
            return { promise: new Promise((s, o) => {
              n = s, e = o;
            }), resolve: n, reject: e };
          }
          var mr = gr;
          class yr extends ge {
            constructor(e) {
              super(function(t, s) {
                j.debug("No callbacks on user for " + t);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (t, s) => {
                if (t) {
                  j.warn(`Error during signin: ${t}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: s.auth,
                  user_data: s.user_data
                });
              }, this.pusher = e, this.pusher.connection.bind("state_change", ({ previous: t, current: s }) => {
                t !== "connected" && s === "connected" && this._signin(), t === "connected" && s !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new pr(e), this.pusher.connection.bind("message", (t) => {
                var s = t.event;
                s === "pusher:signin_success" && this._onSigninSuccess(t.data), this.serverToUserChannel && this.serverToUserChannel.name === t.channel && this.serverToUserChannel.handleEvent(t);
              });
            }
            signin() {
              this.signin_requested || (this.signin_requested = !0, this._signin());
            }
            _signin() {
              this.signin_requested && (this._newSigninPromiseIfNeeded(), this.pusher.connection.state === "connected" && this.pusher.config.userAuthenticator({
                socketId: this.pusher.connection.socket_id
              }, this._onAuthorize));
            }
            _onSigninSuccess(e) {
              try {
                this.user_data = JSON.parse(e.user_data);
              } catch {
                j.error(`Failed parsing user data after signin: ${e.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                j.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const e = (t) => {
                t.subscriptionPending && t.subscriptionCancelled ? t.reinstateSubscription() : !t.subscriptionPending && this.pusher.connection.state === "connected" && t.subscribe();
              };
              this.serverToUserChannel = new Qe(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((t, s) => {
                t.indexOf("pusher_internal:") === 0 || t.indexOf("pusher:") === 0 || this.emit(t, s);
              }), e(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: e, resolve: t } = mr();
              e.done = !1;
              const s = () => {
                e.done = !0;
              };
              e.then(s).catch(s), this.signinDonePromise = e, this._signinDoneResolve = t;
            }
          }
          class ee {
            static ready() {
              ee.isReady = !0;
              for (var e = 0, t = ee.instances.length; e < t; e++)
                ee.instances[e].connect();
            }
            static getClientFeatures() {
              return v(H({ ws: M.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              vr(e), Zn(t), this.key = e, this.config = ir(t, this), this.channels = me.createChannels(), this.global_emitter = new ge(), this.sessionID = M.randomInt(1e9), this.timeline = new Xn(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: ee.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: $e.INFO,
                version: _.VERSION
              }), this.config.enableStats && (this.timelineSender = me.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + M.TimelineTransport.name
              }));
              var s = (o) => M.getDefaultStrategy(this.config, o, Qn);
              this.connection = me.createConnectionManager(this.key, {
                getStrategy: s,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (o) => {
                var d = o.event, b = d.indexOf("pusher_internal:") === 0;
                if (o.channel) {
                  var S = this.channel(o.channel);
                  S && S.handleEvent(o);
                }
                b || this.global_emitter.emit(o.event, o.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (o) => {
                j.warn(o);
              }), ee.instances.push(this), this.timeline.info({ instances: ee.instances.length }), this.user = new yr(this), ee.isReady && this.connect();
            }
            channel(e) {
              return this.channels.find(e);
            }
            allChannels() {
              return this.channels.all();
            }
            connect() {
              if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                var e = this.connection.isUsingTLS(), t = this.timelineSender;
                this.timelineSenderTimer = new He(6e4, function() {
                  t.send(e);
                });
              }
            }
            disconnect() {
              this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
            }
            bind(e, t, s) {
              return this.global_emitter.bind(e, t, s), this;
            }
            unbind(e, t, s) {
              return this.global_emitter.unbind(e, t, s), this;
            }
            bind_global(e) {
              return this.global_emitter.bind_global(e), this;
            }
            unbind_global(e) {
              return this.global_emitter.unbind_global(e), this;
            }
            unbind_all(e) {
              return this.global_emitter.unbind_all(), this;
            }
            subscribeAll() {
              var e;
              for (e in this.channels.channels)
                this.channels.channels.hasOwnProperty(e) && this.subscribe(e);
            }
            subscribe(e) {
              var t = this.channels.add(e, this);
              return t.subscriptionPending && t.subscriptionCancelled ? t.reinstateSubscription() : !t.subscriptionPending && this.connection.state === "connected" && t.subscribe(), t;
            }
            unsubscribe(e) {
              var t = this.channels.find(e);
              t && t.subscriptionPending ? t.cancelSubscription() : (t = this.channels.remove(e), t && t.subscribed && t.unsubscribe());
            }
            send_event(e, t, s) {
              return this.connection.send_event(e, t, s);
            }
            shouldUseTLS() {
              return this.config.useTLS;
            }
            signin() {
              this.user.signin();
            }
          }
          ee.instances = [], ee.isReady = !1, ee.logToConsole = !1, ee.Runtime = M, ee.ScriptReceivers = M.ScriptReceivers, ee.DependenciesReceivers = M.DependenciesReceivers, ee.auth_callbacks = M.auth_callbacks;
          var st = a.default = ee;
          function vr(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          M.setup(ee);
        }
        /******/
      ])
    );
  });
})(Ut);
var Br = Ut.exports;
const qr = /* @__PURE__ */ Hr(Br);
window.Pusher = qr;
const A = "cpr-agent";
function zr(y, c = 6) {
  return !y || y.length <= c * 2 + 3 ? y : `${y.substring(0, c)}...${y.substring(y.length - c)}`;
}
class $r extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-assignment-menu",
      title: "Agent Character Assignment",
      width: 500,
      classes: ["form"]
    });
  }
  async _renderInner(c) {
    let r = `
        <div>
        <p>Assign playable characters to players who have linked their API keys.</p>
        <table style="width: 100%; text-align: left; margin-bottom: 10px;">
        <tr>
        <th>Player</th>
        <th>API Status</th>
        <th>Agent Link</th>
        <th>Assigned Character</th>
        <th style="width: 50px;"></th>
        </tr>`;
    for (let a of c.users) {
      const i = zr(a.agentLink);
      if (r += `<tr><td style="padding: 5px 0;"><strong>${a.name}</strong></td>`, a.hasKey) {
        r += '<td style="color: #00ff00;">✔ Linked</td>', r += `<td><small><code title="${a.agentLink || ""}">${i || "Pending..."}</code></small></td>`, r += `<td><select class="character-select" data-userid="${a.id}" style="width: 100%;">
                <option value="">- None -</option>`;
        for (let l of c.characters) {
          const h = l.id === a.characterId ? "selected" : "";
          r += `<option value="${l.id}" ${h}>${l.name}</option>`;
        }
        r += "</select></td>", r += `<td><button type="button" class="refresh-user" data-userid="${a.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
      } else
        r += `<td style="color: #ff0000;">❌ Missing</td>
                <td><small>-</small></td>
                <td><select disabled style="width: 100%;"><option>- Key Missing -</option></select></td>
                <td><button type="button" class="refresh-user" data-userid="${a.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
      r += "</tr>";
    }
    return r += `</table>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button type="button" id="save-agent-assignments"><i class="fas fa-save"></i> Save Assignments</button>
        <button type="button" id="refresh-all-users"><i class="fas fa-sync-alt"></i> Refresh All Users</button>
        </div>
        </div>`, $(r);
  }
  getData() {
    const c = game.users.map((a) => {
      var i;
      return {
        id: a.id,
        name: a.name,
        isGM: a.isGM,
        hasKey: !!a.getFlag(A, "hasApiKey"),
        agentLink: a.getFlag(A, "agent-link"),
        characterId: ((i = a.character) == null ? void 0 : i.id) || ""
      };
    }), r = game.actors.filter((a) => a.type === "character").map((a) => ({
      id: a.id,
      name: a.name
    }));
    return { users: c, characters: r };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(c) {
    super.activateListeners(c), c.find("#save-agent-assignments").click(async (r) => {
      r.preventDefault();
      let a = 0;
      const i = [];
      if (c.find(".character-select").each((l, h) => {
        var T;
        const f = h.dataset.userid, _ = h.value, N = game.users.get(f);
        if (N) {
          const C = _ === "" || _ === "null" ? null : _;
          (((T = N.character) == null ? void 0 : T.id) || null) !== C && (i.push({ _id: N.id, character: C }), a++);
        }
      }), i.length > 0) {
        await User.updateDocuments(i), ui.notifications.info(`Cyberpunk Bridge: Updated ${a} player assignments!`);
        for (let l of i) {
          const h = game.users.get(l._id), f = h == null ? void 0 : h.getFlag(A, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: f || l._id,
            // Use agent-link as primary ID for Laravel
            character: l.character,
            isGM: h.isGM
          });
        }
        window.cyberpunkBridge.syncPlayerLink();
      } else
        ui.notifications.info("Cyberpunk Bridge: No assignment changes made.");
      this.close();
    }), c.find(".refresh-user").click(async (r) => {
      r.preventDefault();
      const a = r.currentTarget.dataset.userid, i = game.users.get(a);
      i && (await i.unsetFlag(A, "agent-link"), await i.unsetFlag(A, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${i.name}. They will need to re-sync.`), this.render(!0));
    }), c.find("#refresh-all-users").click(async (r) => {
      r.preventDefault();
      for (let a of game.users)
        await a.unsetFlag(A, "agent-link"), await a.unsetFlag(A, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
class Gr {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1;
  }
  async rollAndCapture(c, r, a = null) {
    return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${c}`, "color: #00ffff; font-weight: bold;"), this._isCapturingRoll = !0, game.settings.get("core", "rollMode"), a && await game.settings.set("core", "rollMode", a), new Promise(async (i, l) => {
      let h = !1;
      const f = renderTemplate, _ = function(N, T) {
        return N && typeof N == "string" && N.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${N}`, "color: #00ff00;", T), h = !0, renderTemplate = f, i({
          success: !0,
          total: T.resultTotal,
          isCriticalSuccess: T.wasCritSuccess ? T.wasCritSuccess() : T.isCriticalSuccess || !1,
          isCriticalFailure: T.wasCritFail ? T.wasCritFail() : T.isCriticalFailure || !1,
          label: T.rollTitle,
          rollMode: a || game.settings.get("core", "rollMode"),
          rawRoll: T
        })), f.apply(this, arguments);
      };
      renderTemplate = _, setTimeout(async () => {
        h || (renderTemplate = f, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), i({ success: !1, error: "Timed out waiting for render" }));
      }, 5e3);
      try {
        await r();
      } catch {
        renderTemplate = f, i({ success: !1, error: "Trigger failed" });
      }
    });
  }
  destroy() {
    this.echo && this.echo.disconnect();
    for (let [c, r] of Object.entries(this.hookIds))
      Hooks.off(c, r);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  registerSettings() {
    game.settings.registerMenu(A, "characterAssignment", {
      name: "Player Assignments",
      label: "Manage Characters",
      hint: "Assign playable characters to players who have linked their Agent API keys.",
      icon: "fas fa-users",
      type: $r,
      restricted: !0
      // GM Only
    }), game.settings.register(A, "apiUrl", {
      name: "Agent URL",
      hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
      scope: "world",
      // URL is usually the same for everyone
      config: !0,
      type: String,
      default: "https://agent.surrealdisco.co.uk",
      onChange: () => {
        game.user.isGM && this.reconnect(), this.syncPlayerLink();
      }
    }), game.settings.register(A, "reverbHost", {
      name: "Reverb Host (override)",
      scope: "world",
      config: !0,
      type: String,
      default: "",
      onChange: () => this.reconnect()
    }), game.settings.register(A, "reverbPort", {
      name: "Reverb Port",
      scope: "world",
      config: !0,
      type: Number,
      default: 0,
      onChange: () => this.reconnect()
    }), game.settings.register(A, "reverbUseSSL", {
      name: "Reverb Use SSL (wss)",
      scope: "world",
      config: !0,
      type: Boolean,
      default: !0,
      onChange: () => this.reconnect()
    }), game.settings.register(A, "reverbKey", {
      name: "Reverb App Key",
      scope: "world",
      config: !0,
      type: String,
      default: "itdsiqtx8cpskowawl1p",
      onChange: () => this.reconnect()
    }), game.settings.register(A, "apiKey", {
      name: "API Key (Sanctum Token)",
      hint: "Generate this in your Cyberpunk Agent dashboard.",
      scope: "client",
      // Vital for player uniqueness
      config: !0,
      type: String,
      default: "",
      onChange: async (c) => {
        await game.user.setFlag(A, "hasApiKey", !!c), game.user.isGM && this.reconnect(), this.syncPlayerLink();
      }
    }), game.settings.register(A, "channelId", {
      name: "Channel ID",
      hint: "The unique channel name for this game group. Must match your Agent dashboard.",
      scope: "world",
      config: !0,
      type: String,
      default: "",
      onChange: () => {
        game.user.isGM && this.reconnect();
      }
    }), game.settings.register(A, "debugMode", {
      name: "Debug Mode",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1
    });
  }
  connect() {
    const c = game.settings.get(A, "apiUrl"), r = game.settings.get(A, "apiKey"), a = game.settings.get(A, "debugMode"), i = Number(game.settings.get(A, "reverbPort") || 0) || 0, l = game.settings.get(A, "reverbUseSSL"), h = (game.settings.get(A, "reverbHost") || "").trim();
    if (!r || !c) return;
    this.echo && this.echo.disconnect();
    let f;
    try {
      f = new URL(c);
    } catch {
      return;
    }
    const _ = h || f.hostname, N = f.protocol === "https:", T = typeof l == "boolean" ? l : void 0, C = T ?? N, x = C ? 443 : 80, P = i > 0 ? i : x;
    this.echo = new Ur({
      broadcaster: "reverb",
      key: game.settings.get(A, "reverbKey") || "itdsiqtx8cpskowawl1p",
      wsHost: _,
      wsPort: P,
      wssPort: P,
      forceTLS: C,
      enabledTransports: ["ws", "wss"],
      disableStats: !0,
      authEndpoint: `${c.replace(/\/$/, "")}/api/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: "Bearer " + r,
          Accept: "application/json"
        }
      }
    }), window.CyberpunkSocket = this.echo, this.echo.connector.pusher.connection.bind("connected", () => {
      this.isConnected = !0, ui.notifications.info("Cyberpunk Bridge: Online"), a && console.log("Cyberpunk Bridge: Connection Established");
    }), this.echo.connector.pusher.connection.bind("disconnected", () => {
      this.isConnected = !1;
    }), this.listen();
  }
  listen() {
    const c = game.settings.get(A, "channelId"), r = c ? `cpr-agent.${c}` : "cpr-agent";
    this.echo.private(r).listen(".GameUpdate", (a) => {
      this.handleIncomingData(a);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const c = game.settings.get(A, "apiKey"), r = game.settings.get(A, "debugMode");
    if (r && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(A, "hasApiKey") !== !!c && await game.user.setFlag(A, "hasApiKey", !!c), !c) {
      r && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const a = async () => {
      var h;
      const i = game.user.character, l = game.user.getFlag(A, "agent-link");
      r && (console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(i == null ? void 0 : i.name) || "None"}...`), console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`), console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${l || "(none)"}`));
      try {
        const f = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          character: i ? { id: i.id, name: i.name } : null,
          actorName: i ? i.name : null,
          agentLink: l || game.user.id,
          foundryUserId: game.user.id,
          foundryUserName: game.user.name,
          isGM: game.user.isGM
        });
        r && console.log("[Bridge] syncPlayerLink: Laravel response:", f), f && f.agent_link ? l !== f.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${f.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${f.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(A, "agent-link", f.agent_link), (h = ui.notifications) == null || h.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", f);
      } catch (f) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", f);
      }
    };
    await a(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (i, l) => {
      i.id === game.user.id && l.character !== void 0 && a();
    }));
  }
  registerGlobalHooks() {
    if (this.hookIds.updateActor) return;
    const c = async (r, a) => {
      const i = game.settings.get(A, "apiKey");
      !this.isConnected && !i || !r || !["character", "mook"].includes(r.type) || (console.log(`%c[Bridge] Syncing change for ${r.name}`, "color: #ffaa00;", a), await this.sendResponse({
        type: "SHEET_DELTA",
        uuid: r.id,
        delta: a,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (r, a, i, l) => {
      if (a.system) {
        const h = {}, f = (_, N = "system.") => {
          for (let T in _) {
            const C = _[T];
            C !== null && typeof C == "object" && !Array.isArray(C) && !(C instanceof foundry.utils.Color) ? f(C, `${N}${T}.`) : h[`${N}${T}`] = C;
          }
        };
        f(a.system), c(r, h);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (r, a, i, l) => {
      const h = r.parent;
      if (h instanceof Actor) {
        const f = {}, _ = `items.${r.id}.`;
        if (a.system) {
          const N = (T, C = `${_}system.`) => {
            for (let x in T) {
              const P = T[x];
              P !== null && typeof P == "object" && !Array.isArray(P) && !(P instanceof foundry.utils.Color) ? N(P, `${C}${x}.`) : f[`${C}${x}`] = P;
            }
          };
          N(a.system);
        }
        for (let N in a)
          N !== "system" && N !== "_id" && (f[`${_}${N}`] = a[N]);
        Object.keys(f).length > 0 && c(h, f);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (r, a, i) => {
      const l = r.parent;
      if (l instanceof Actor) {
        const h = {
          [`items.+${r.id}`]: r.toObject()
        };
        c(l, h);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (r, a, i) => {
      const l = r.parent;
      if (l instanceof Actor) {
        const h = {
          [`items.${r.id}`]: null
        };
        c(l, h);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (r, a) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (r, a, i, l) => {
      (a.x || a.y || a.disposition || a.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.deleteToken = Hooks.on("deleteToken", (r, a, i) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (r, a, i) => {
      r.author.id === game.user.id && (this._isCapturingRoll || r.rolls && r.rolls.length > 0 && this.broadcastRoll(r));
    });
  }
  broadcastRefresh(c) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: c });
  }
  broadcastRoll(c) {
    const r = game.users.get(c.author.id), a = c.rolls[0];
    let i = "publicroll";
    if (c.blind)
      i = "blindroll";
    else if (c.whisper && c.whisper.length > 0) {
      const l = game.users.filter((_) => _.isGM).map((_) => _.id), h = c.whisper.every((_) => l.includes(_) || _ === c.author.id);
      c.whisper.length === 1 && c.whisper[0] === c.author.id ? i = "selfroll" : i = "gmroll";
    }
    this.sendResponse({
      type: "ROLL_RESULT",
      agentLink: r ? r.getFlag(A, "agent-link") : null,
      playerName: c.alias,
      total: a.total,
      formula: a.formula,
      rollMode: c.rollMode || i,
      label: c.flavor || "Dice Roll",
      rawRoll: {
        total: a.total,
        formula: a.formula,
        rollTitle: c.flavor || "Dice Roll",
        _roll: a.toJSON()
      },
      success: !0
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(c) {
    let r = game.settings.get(A, "apiUrl");
    const a = game.settings.get(A, "apiKey");
    if (!r || !a) return;
    r.endsWith("/") && (r = r.slice(0, -1));
    const i = (c.requestId ? this.requestAgentLinks.get(c.requestId) : null) || game.user.getFlag(A, "agent-link");
    i && !c.agentLink && (c.agentLink = i);
    const l = game.settings.get(A, "channelId");
    if (l && !c.channelId && (c.channelId = l), c.type === "ROLL_RESULT") {
      if (!c.playerName) {
        const h = c.actorId ? game.actors.get(c.actorId) : null;
        c.playerName = h ? h.name : game.user.name;
      }
      c.rollMode || (c.rollMode = game.settings.get("core", "rollMode"));
    }
    try {
      const h = await fetch(`${r}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${a}`,
          Accept: "application/json"
        },
        body: JSON.stringify(c)
      });
      return h.ok ? await h.json() : (console.error("Cyberpunk Bridge: Callback failed", h.statusText), null);
    } catch (h) {
      return console.error("Cyberpunk Bridge: Error sending callback", h), null;
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(c) {
    var x, P, D, R, k, w, E, z, K, J, se, ce, ne, le, he, Ee, ye, be, Oe, Me, Ne, De, Fe, Re, je, Ue, fe, He, Be, Q;
    const r = c.payload || c, a = r.type;
    console.log(`%c[Bridge] Incoming Call: ${a}`, "color: #00ffff; font-weight: bold;", r);
    const i = r.requestId, l = r.agent_link || r.agentLink;
    i && l && (this.requestAgentLinks.set(i, l), setTimeout(() => this.requestAgentLinks.delete(i), 3e4));
    const h = game.user.getFlag(A, "agent-link"), f = r.actorId, _ = (x = game.user.character) == null ? void 0 : x.id, N = game.settings.get(A, "debugMode");
    N && console.log(`[Bridge] handleIncomingData: requestId=${i}, agentLink=${l}, myAgentLink=${h}, actorId=${f}, myCharacterId=${_}`);
    let T = !1;
    if (game.user.isGM || h && (i === h || l === h) ? T = !0 : !h && i && f && _ === f && (console.log(`[Bridge] Discovery: Matching incoming request to character ${f}`), T = !0), !T) {
      N && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && l && h !== l && (i === l || f && _ === f) && (console.log(`%c[Bridge] Setting agent-link flag: ${l}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(A, "agent-link", l), (P = ui.notifications) == null || P.info("Agent: Account linked!"));
    let C = r.tokenId;
    if (!C && f) {
      const u = canvas.tokens.placeables.find((g) => {
        var p;
        return ((p = g.actor) == null ? void 0 : p.id) === f;
      });
      u && (C = u.id);
    }
    switch (a) {
      case "UPDATE_ACTOR": {
        const u = game.actors.get(f);
        if (!u) {
          console.warn(`⚠️ Actor ID ${f} not found in this world.`);
          return;
        }
        await u.update(r.changes), ui.notifications.info(`💾 Sync: ${u.name} updated.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: f, success: !0, requestId: i });
        break;
      }
      case "CONSUME_ITEM": {
        const u = game.actors.get(f);
        if (!u) {
          console.warn(`Actor ID ${f} not found in this world.`);
          return;
        }
        const g = u.items.get(r.itemId);
        if (!g) {
          console.warn(`Item ID ${r.itemId} not found on actor ${u.name}.`);
          return;
        }
        await g.snort(), ui.notifications.info(`Sync: ${g.name} consumed.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: f, success: !0, requestId: i });
        break;
      }
      case "ITEM_EQUIP": {
        const u = game.actors.get(f);
        if (u) {
          const g = u.items.get(r.itemId);
          if (g) {
            const p = `items.${r.itemId}.system.equipped`;
            await g.update({ "system.equipped": r.state }), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: { [p]: r.state }, success: !0, requestId: i });
          }
        }
        break;
      }
      case "INSTALL_PROGRAM": {
        const u = game.actors.get(f);
        if (!u) return;
        const g = u.items.get(r.cyberdeckId), p = u.items.get(r.programId);
        if (!g || !p) return;
        const m = g.system.installedItems.usedSlots || 0, v = g.system.installedItems.slots || 0, F = p.system.size || 1;
        if (m + F > v) {
          ui.notifications.warn("Not enough memory slots on cyberdeck.");
          return;
        }
        const L = g.system.installedItems.list || [];
        if (L.includes(r.programId)) return;
        const I = [...L, r.programId], B = m + F;
        await g.update({
          "system.installedItems.list": I,
          "system.installedItems.usedSlots": B
        }), await this.sendResponse({
          type: "SHEET_DELTA",
          actorId: f,
          delta: {
            [`items.${r.cyberdeckId}.system.installedItems.list`]: I,
            [`items.${r.cyberdeckId}.system.installedItems.usedSlots`]: B
          },
          success: !0,
          requestId: i
        });
        break;
      }
      case "REMOVE_PROGRAM": {
        const u = game.actors.get(f);
        if (!u) return;
        const g = u.items.get(r.cyberdeckId), p = u.items.get(r.programId);
        if (!g) return;
        const m = g.system.installedItems.list || [];
        if (!m.includes(r.programId)) return;
        const v = m.filter((G) => G !== r.programId), F = p && p.system.size || 1, L = g.system.installedItems.usedSlots || 0, I = Math.max(0, L - F);
        await g.update({
          "system.installedItems.list": v,
          "system.installedItems.usedSlots": I
        });
        const B = {
          [`items.${r.cyberdeckId}.system.installedItems.list`]: v,
          [`items.${r.cyberdeckId}.system.installedItems.usedSlots`]: I
        };
        p && p.system.isRezzed && (await p.update({ "system.isRezzed": !1 }), B[`items.${r.programId}.system.isRezzed`] = !1), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: B, success: !0, requestId: i });
        break;
      }
      case "TOGGLE_REZ": {
        const u = game.actors.get(f);
        if (u) {
          const g = u.items.get(r.programId);
          g && (await g.update({ "system.isRezzed": r.targetState }), await this.sendResponse({
            type: "SHEET_DELTA",
            actorId: f,
            delta: { [`items.${r.programId}.system.isRezzed`]: r.targetState },
            success: !0,
            requestId: i
          }));
        }
        break;
      }
      case "DAMAGE_ROLL": {
        const u = game.actors.get(f), g = u.items.get(r.weaponId);
        if (u && g) {
          const p = async () => {
            await u.sheet._onRoll({
              "data-roll-type": "damage",
              "data-item-id": g.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "damage",
                "data-item-id": g.id
              }
            });
          }, m = await this.rollAndCapture(f, p, r.rollMode);
          m.success && await this.sendResponse({
            type: "ROLL_RESULT",
            rollMode: m.rollMode,
            requestId: i,
            actorId: f,
            total: m.total,
            isCriticalSuccess: m.isCriticalSuccess,
            isCriticalFailure: m.isCriticalFailure,
            label: `${g.name} (Damage)`,
            rawRoll: {
              total: m.total,
              isCriticalSuccess: m.isCriticalSuccess,
              isCriticalFailure: m.isCriticalFailure,
              label: m.label,
              resultTotal: (D = m.rawRoll) == null ? void 0 : D.resultTotal,
              rollTitle: (R = m.rawRoll) == null ? void 0 : R.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DEATH_SAVE": {
        const u = game.actors.get(f);
        if (u) {
          const g = async () => {
            await u.sheet._onRoll({
              "data-roll-type": "deathsave",
              "data-roll-title": "Death Save",
              type: "click",
              currentTarget: {
                "data-roll-type": "deathsave",
                "data-roll-title": "Death Save"
              }
            });
          }, p = await this.rollAndCapture(f, g, r.rollMode);
          if (p.success) {
            const m = u.system.derivedStats.deathsave || {};
            await this.sendResponse({
              type: "ROLL_RESULT",
              rollMode: p.rollMode,
              requestId: i,
              actorId: f,
              total: p.total,
              isCriticalSuccess: p.isCriticalSuccess,
              isCriticalFailure: p.isCriticalFailure,
              label: "Death Save",
              rawRoll: {
                total: p.total,
                isCriticalSuccess: p.isCriticalSuccess,
                isCriticalFailure: p.isCriticalFailure,
                label: p.label,
                resultTotal: (k = p.rawRoll) == null ? void 0 : k.resultTotal,
                rollTitle: (w = p.rawRoll) == null ? void 0 : w.rollTitle
              },
              success: !0
            }), await this.sendResponse({
              type: "SHEET_DELTA",
              actorId: f,
              delta: { "system.derivedStats.deathsave": m },
              tab: "stats",
              success: !0
            });
          }
        }
        break;
      }
      case "FACEDOWN_ROLL": {
        const u = game.actors.get(f), g = async () => {
          await u.sheet._onRoll({
            "data-roll-type": "facedown",
            "data-roll-title": "Face Down",
            type: "click",
            currentTarget: {
              "data-roll-type": "facedown",
              "data-roll-title": "Face Down"
            }
          });
        }, p = await this.rollAndCapture(f, g, r.rollMode);
        p.success && await this.sendResponse({
          type: "ROLL_RESULT",
          rollMode: p.rollMode,
          requestId: i,
          actorId: f,
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          rawRoll: {
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: p.label,
            resultTotal: (E = p.rawRoll) == null ? void 0 : E.resultTotal,
            rollTitle: (z = p.rawRoll) == null ? void 0 : z.rollTitle
          },
          success: !0
        });
        break;
      }
      case "INITIATIVE_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const g = async () => {
            await u.rollInitiative();
          }, p = await this.rollAndCapture(f, g, r.rollMode);
          p.success && await this.sendResponse({
            type: "ROLL_RESULT",
            rollMode: p.rollMode,
            requestId: i,
            actorId: f,
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: "Initiative",
            rawRoll: {
              total: p.total,
              isCriticalSuccess: p.isCriticalSuccess,
              isCriticalFailure: p.isCriticalFailure,
              label: p.label,
              resultTotal: (K = p.rawRoll) == null ? void 0 : K.resultTotal,
              rollTitle: (J = p.rawRoll) == null ? void 0 : J.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "PROGRAM_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const g = document.createElement("a");
          g.dataset.rollType = r.rollType, g.dataset.cyberdeckId = r.cyberdeckId, g.dataset.rollTitle = r.programName, g.dataset.interfaceAbility = r.programName, g.dataset.itemId = r.cyberdeckId, g.dataset.programId = r.programId, g.dataset.executionType = r.executionType;
          const p = async () => {
            await u.sheet._onRoll({
              type: "click",
              currentTarget: g
            });
          }, m = await this.rollAndCapture(f, p, r.rollMode);
          m.success && await this.sendResponse({
            type: "ROLL_RESULT",
            rollMode: m.rollMode,
            requestId: i,
            actorId: f,
            total: m.total,
            isCriticalSuccess: m.isCriticalSuccess,
            isCriticalFailure: m.isCriticalFailure,
            label: r.programName,
            rawRoll: {
              total: m.total,
              isCriticalSuccess: m.isCriticalSuccess,
              isCriticalFailure: m.isCriticalFailure,
              label: m.label,
              resultTotal: (se = m.rawRoll) == null ? void 0 : se.resultTotal,
              rollTitle: (ce = m.rawRoll) == null ? void 0 : ce.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "ROLE_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const g = u.items.getName(r.itemName);
          if (g) {
            const p = {
              "data-roll-type": "roleAbility",
              "data-roll-title": r.label,
              "data-item-id": g.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "roleAbility",
                "data-roll-title": r.label,
                "data-item-id": g.id,
                "data-item-subtype": r.label
              }
            };
            r.isAbility && (p["data-roll-subtype"] = "subRoleAbility", p["data-role-name"] = r.label, p.currentTarget["data-roll-subtype"] = "subRoleAbility", p.currentTarget["data-role-name"] = r.label);
            const m = async () => {
              await u.sheet._onRoll(p);
            }, v = await this.rollAndCapture(f, m, r.rollMode);
            v.success && await this.sendResponse({
              type: "ROLL_RESULT",
              rollMode: v.rollMode,
              requestId: i,
              actorId: f,
              total: v.total,
              isCriticalSuccess: v.isCriticalSuccess,
              isCriticalFailure: v.isCriticalFailure,
              label: r.label,
              rawRoll: {
                total: v.total,
                isCriticalSuccess: v.isCriticalSuccess,
                isCriticalFailure: v.isCriticalFailure,
                label: v.label,
                resultTotal: (ne = v.rawRoll) == null ? void 0 : ne.resultTotal,
                rollTitle: (le = v.rawRoll) == null ? void 0 : le.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "SKILL_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const g = u.items.getName(r.label);
          if (g) {
            const p = async () => {
              await u.sheet._onRoll({
                "data-roll-type": "skill",
                "data-roll-title": r.label,
                "data-item-id": g.id,
                type: "click",
                currentTarget: {
                  "data-roll-type": "skill",
                  "data-roll-title": r.label,
                  "data-item-id": g.id
                }
              });
            }, m = await this.rollAndCapture(f, p, r.rollMode);
            m.success && await this.sendResponse({
              type: "ROLL_RESULT",
              rollMode: m.rollMode,
              requestId: i,
              actorId: f,
              total: m.total,
              isCriticalSuccess: m.isCriticalSuccess,
              isCriticalFailure: m.isCriticalFailure,
              label: r.label,
              rawRoll: {
                total: m.total,
                isCriticalSuccess: m.isCriticalSuccess,
                isCriticalFailure: m.isCriticalFailure,
                label: m.label,
                resultTotal: (he = m.rawRoll) == null ? void 0 : he.resultTotal,
                rollTitle: (Ee = m.rawRoll) == null ? void 0 : Ee.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "STAT_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const g = async () => {
            await u.sheet._onRoll({
              "data-roll-type": "stat",
              "data-roll-title": r.label,
              type: "click",
              currentTarget: {
                "data-roll-type": "stat",
                "data-roll-title": r.label
              }
            });
          }, p = await this.rollAndCapture(f, g, r.rollMode);
          p.success && await this.sendResponse({
            type: "ROLL_RESULT",
            rollMode: p.rollMode,
            requestId: i,
            actorId: f,
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: r.label,
            rawRoll: {
              total: p.total,
              isCriticalSuccess: p.isCriticalSuccess,
              isCriticalFailure: p.isCriticalFailure,
              label: p.label,
              resultTotal: (ye = p.rawRoll) == null ? void 0 : ye.resultTotal,
              rollTitle: (be = p.rawRoll) == null ? void 0 : be.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DICE_ROLL": {
        i && this.activeRequests.set(i, { actorId: f, timestamp: Date.now() });
        const u = new Roll(r.formula);
        await u.evaluate(), await u.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: game.actors.get(f) }),
          flavor: r.flavor,
          rollMode: r.rollMode || game.settings.get("core", "rollMode")
        }), await this.sendResponse({
          type: "ROLL_RESULT",
          rollMode: r.rollMode || game.settings.get("core", "rollMode"),
          requestId: i,
          actorId: f,
          total: u.total,
          isCriticalSuccess: u.isCriticalSuccess || !1,
          isCriticalFailure: u.isCriticalFailure || !1,
          label: r.flavor || "Dice Roll",
          rawRoll: {
            rollTitle: r.flavor || "Dice Roll",
            _roll: u,
            formula: u.formula,
            resultTotal: u.total
          },
          success: !0
        });
        break;
      }
      case "MOVE_TOKEN": {
        const u = canvas.tokens.get(C);
        if (u) {
          let g = {};
          r.direction === "up" ? g.y = u.document.y - canvas.grid.size : r.direction === "down" ? g.y = u.document.y + canvas.grid.size : r.direction === "left" ? g.x = u.document.x - canvas.grid.size : r.direction === "right" && (g.x = u.document.x + canvas.grid.size), await u.document.update(g), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: C, success: !0, requestId: i });
        } else
          console.warn(`MOVE_TOKEN: Token ID ${C} not found.`), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: C, success: !1, message: "Token not found", requestId: i });
        break;
      }
      case "RELOAD_WEAPON": {
        const u = game.actors.get(f);
        if (u) {
          const g = u.items.get(r.weaponId), p = r.ammoId ? u.items.get(r.ammoId) : null, m = async () => {
            await g.reload();
            const v = {
              [`items.${r.weaponId}.system.magazine`]: {
                value: g.system.magazine.value,
                max: g.system.magazine.max
              },
              [`items.${r.weaponId}.system.installedItems`]: {
                list: [...g.system.installedItems.list],
                slots: g.system.installedItems.slots,
                usedSlots: g.system.installedItems.usedSlots
              }
            };
            p && (v[`items.${p.id}.system.amount`] = p.system.amount), u.items.filter((L) => L.type === "ammo").forEach((L) => {
              v[`items.${L.id}.system.amount`] = L.system.amount;
            }), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: v, success: !0, requestId: i });
          };
          if (p) {
            let v = g.getInstalledItems("ammo");
            v && v.length > 0 && g.uninstallItems(v), setTimeout(function() {
              g.installItems([p]);
            }, 500), setTimeout(async () => {
              await m();
            }, 1500);
          } else
            await m();
        }
        break;
      }
      case "TARGET_TOKEN": {
        const u = canvas.tokens.get(r.targetTokenId);
        u && (u.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: r.targetTokenId, success: !0, requestId: i }));
        break;
      }
      case "UPDATE_STAT": {
        const u = game.actors.get(f);
        if (u) {
          const g = `system.${r.label}`;
          let p;
          if (r.operation === "inc") {
            const m = g.split(".");
            let v = u;
            for (let I = 0; I < m.length; I++)
              v = I === 0 ? v[m[I]] : v == null ? void 0 : v[m[I]];
            const F = Number(v) || 0, L = Number(r.delta) || 0;
            p = F + L;
          } else
            p = typeof r.value == "string" ? r.value : Number(r.value) || 0;
          await u.update({ [g]: p }), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: { [g]: p }, tab: "stats", success: !0, requestId: i });
        }
        break;
      }
      case "ATTACK_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const g = r.weaponId, p = r.fireMode, m = canvas.tokens.get(r.targetId), v = "firetype-" + g, F = "cyberpunk-red-core";
          let L = "";
          switch (p) {
            case "Auto":
              L = "autofire";
              break;
            case "Suppress":
              L = "suppressive";
              break;
            case "Aimed":
              L = "aimed", await u.setFlag(F, "aimedLocation", "head");
              break;
            default:
              L = "";
              break;
          }
          m && m.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), L === "" ? await u.unsetFlag(F, v) : await u.setFlag(F, v, L);
          const I = document.createElement("a");
          I.dataset.rollType = "attack", I.dataset.itemId = g, I.dataset.rollTitle = p + " Attack";
          const B = async () => {
            await u.sheet._onRoll({
              preventDefault: () => {
              },
              currentTarget: I,
              type: "click"
            }, { showDialog: !0 });
          };
          let G = null;
          if (m) {
            const te = canvas.tokens.get(C) || ((Oe = u.getActiveTokens()) == null ? void 0 : Oe[0]) || canvas.tokens.placeables.find((W) => {
              var re;
              return ((re = W.actor) == null ? void 0 : re.id) === u.id;
            });
            if (te) {
              const W = {
                Pistol: [13, 15, 20, 25, 30, 30, 99, 99],
                SMG: [15, 13, 15, 20, 25, 25, 30, 99],
                "Shotgun (Slug)": [13, 15, 20, 25, 30, 35, 99, 99],
                "Assault Rifle": [17, 16, 15, 13, 15, 20, 25, 30],
                "Sniper Rifle": [30, 25, 25, 20, 15, 16, 17, 20],
                "Bows & Crossbow": [15, 13, 15, 17, 20, 22, 99, 99],
                "Grenade Launcher": [16, 15, 15, 17, 20, 22, 25, 99],
                "Rocket Launcher": [17, 16, 15, 15, 20, 20, 25, 30],
                "Martial Arts": ["VS"],
                Unarmed: ["VS"],
                "Light Melee Weapon": ["VS"],
                "Medium Melee Weapon": ["VS"],
                "Heavy Melee Weapon": ["VS"],
                "Very Heavy Melee Weapon": ["VS"]
              }, re = [6, 12, 25, 50, 100, 200, 400, 800], ve = m.center.x - te.center.x, ke = m.center.y - te.center.y, V = Math.sqrt(Math.pow(ve, 2) + Math.pow(ke, 2)), ue = Math.ceil(V / (((Me = canvas.grid) == null ? void 0 : Me.size) || 128)), de = u.items.get(g), j = {
                heavyPistol: "Pistol",
                assaultRifle: "Assault Rifle",
                smg: "SMG",
                shotgun: "Shotgun (Slug)",
                sniperRifle: "Sniper Rifle",
                unarmed: "Unarmed",
                martialArts: "Martial Arts",
                grenade: "Grenade Launcher",
                thrownWeapon: "Grenade Launcher",
                lightMelee: "Light Melee Weapon",
                mediumMelee: "Medium Melee Weapon",
                heavyMelee: "Heavy Melee Weapon",
                vHeavyMelee: "Very Heavy Melee Weapon"
              }, pe = j[(Ne = de == null ? void 0 : de.system) == null ? void 0 : Ne.weaponType] || j[(De = de == null ? void 0 : de.system) == null ? void 0 : De.variety] || "Pistol", ae = re.findIndex((Te) => ue <= Te);
              let we = ae !== -1 ? W[pe][ae] : 99;
              Array.isArray(W[pe]) && typeof W[pe][0] == "string" && (we = W[pe][Math.min(ae !== -1 ? ae : 0, W[pe].length - 1)]), G = we === 99 ? "Out of Range" : we;
            }
          }
          const H = await this.rollAndCapture(f, B, r.rollMode);
          if (H.success) {
            let te = null;
            typeof G == "number" ? te = H.total >= G ? "Hit" : "Miss" : G === "Out of Range" && (te = "Miss");
            const W = ((je = (Re = (Fe = u.items.get(g)) == null ? void 0 : Fe.system) == null ? void 0 : Re.magazine) == null ? void 0 : je.value) ?? null;
            await this.sendResponse({
              type: "ROLL_RESULT",
              rollMode: H.rollMode,
              requestId: i,
              actorId: f,
              total: H.total,
              isCriticalSuccess: H.isCriticalSuccess,
              isCriticalFailure: H.isCriticalFailure,
              label: p + " Attack",
              rawRoll: {
                total: H.total,
                isCriticalSuccess: H.isCriticalSuccess,
                isCriticalFailure: H.isCriticalFailure,
                label: H.label,
                resultTotal: (Ue = H.rawRoll) == null ? void 0 : Ue.resultTotal,
                rollTitle: (fe = H.rawRoll) == null ? void 0 : fe.rollTitle
              },
              dv: G,
              ammoTo: W,
              outcome: te,
              success: !0
            });
          }
        }
        break;
      }
      case "GET_ROLL_MODIFIERS": {
        const u = game.actors.get(f);
        if (!u) return;
        const g = r.weaponId, p = g ? u.items.get(g) : null;
        let m = "None", v = 0, F = "None", L = 0, I = 0;
        if (p) {
          m = p.system.weaponSkill;
          const V = u.items.find((ue) => ue.type === "skill" && ue.name === m);
          v = V && Number(V.system.level) || 0, F = V && V.system.stat || "ref", L = Number((He = u.system.stats[F]) == null ? void 0 : He.value) || 0, I = Number(p.system.attackmod) || 0;
        }
        let B = 0;
        const G = [], H = Number(u.system.derivedStats.hp.value) || 0, te = Number(u.system.derivedStats.seriouslyWounded) || 0, W = u.items.find((V) => V.name === "Stim" && V.type === "drug"), re = W && W.effects.some((V) => V.disabled === !1);
        if (H <= 0)
          B -= 4, G.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
        else if (H <= te) {
          const V = re ? 0 : -2;
          B += V, G.push({
            title: re ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
            penalty: V,
            description: re ? "Ignoring penalty due to Stim drug." : "All actions at -2."
          });
        }
        u.items.filter((V) => V.type === "criticalInjury").forEach((V) => {
          var pe;
          const ue = V.name || "Injury", de = (((pe = V.system.description) == null ? void 0 : pe.value) || "").replace(/<[^>]*>/g, "");
          let j = 0;
          if (V.effects && V.effects.length > 0 && V.effects.forEach((ae) => {
            !ae.disabled && ae.changes && ae.changes.forEach((we) => {
              const Te = parseInt(we.value);
              isNaN(Te) || (j += Te);
            });
          }), j === 0) {
            const ae = String(ue).toLowerCase();
            (de.includes("-2") || ae.includes("arm") || ae.includes("eye")) && (j = -2);
          }
          B += j, G.push({ title: ue, description: de, penalty: j });
        });
        const ke = {
          actorName: u.name,
          baseBonus: L + v + I,
          breakdown: {
            statName: F,
            statValue: L,
            skillName: m,
            skillLevel: v,
            weaponAcc: I
          },
          totalPenalty: B,
          finalModifier: L + v + I + B,
          injuries: G
        };
        await this.sendResponse({ type: "ROLL_MODIFIERS_DATA", result: ke, requestId: i });
        break;
      }
      case "GET_DV_INFO": {
        const u = canvas.tokens.get(C), g = r.targetTokenId || ((Be = Array.from(game.user.targets)[0]) == null ? void 0 : Be.id), p = canvas.tokens.get(g), m = r.weaponId;
        if (u && p) {
          const v = {
            Pistol: [13, 15, 20, 25, 30, 30, 99, 99],
            SMG: [15, 13, 15, 20, 25, 25, 30, 99],
            "Shotgun (Slug)": [13, 15, 20, 25, 30, 35, 99, 99],
            "Assault Rifle": [17, 16, 15, 13, 15, 20, 25, 30],
            "Sniper Rifle": [30, 25, 25, 20, 15, 16, 17, 20],
            "Bows & Crossbow": [15, 13, 15, 17, 20, 22, 99, 99],
            "Grenade Launcher": [16, 15, 15, 17, 20, 22, 25, 99],
            "Rocket Launcher": [17, 16, 15, 15, 20, 20, 25, 30],
            "Martial Arts": ["VS"],
            Unarmed: ["VS"],
            "Light Melee Weapon": ["VS"],
            "Medium Melee Weapon": ["VS"],
            "Heavy Melee Weapon": ["VS"],
            "Very Heavy Melee Weapon": ["VS"]
          }, F = [6, 12, 25, 50, 100, 200, 400, 800], L = p.center.x - u.center.x, I = p.center.y - u.center.y, B = Math.sqrt(Math.pow(L, 2) + Math.pow(I, 2)), G = Math.ceil(B / 128), H = u.actor.items.get(m);
          if (!H) {
            console.warn(`GET_DV_INFO: Weapon ID ${m} not found on actor ${u.actor.name}.`), await this.sendResponse({ type: "DV_INFO_DATA", result: null, requestId: i });
            break;
          }
          const te = {
            heavyPistol: "Pistol",
            assaultRifle: "Assault Rifle",
            smg: "SMG",
            shotgun: "Shotgun (Slug)",
            sniperRifle: "Sniper Rifle",
            unarmed: "Unarmed",
            martialArts: "Martial Arts",
            grenade: "Grenade Launcher",
            thrownWeapon: "Grenade Launcher",
            lightMelee: "Light Melee Weapon",
            mediumMelee: "Medium Melee Weapon",
            heavyMelee: "Heavy Melee Weapon",
            vHeavyMelee: "Very Heavy Melee Weapon"
          }, W = te[H.system.weaponType] || te[H.system.variety] || "Pistol", re = F.findIndex((V) => G <= V);
          let ve = re !== -1 ? v[W][re] : 99;
          Array.isArray(v[W]) && typeof v[W][0] == "string" && (ve = v[W][Math.min(re !== -1 ? re : 0, v[W].length - 1)]);
          const ke = {
            targetName: p.name,
            distanceMeters: G,
            weaponCategory: W,
            dv: ve === 99 ? "Out of Range" : ve
          };
          await this.sendResponse({ type: "DV_INFO_DATA", result: ke, requestId: i });
        } else
          console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!u}, Target: ${!!p}`), await this.sendResponse({ type: "DV_INFO_DATA", result: null, requestId: i });
        break;
      }
      case "LIST_VISIBLE_TOKENS": {
        const u = canvas.tokens.placeables.filter((m) => {
          var v;
          return ((v = m.actor) == null ? void 0 : v.id) === f;
        });
        C === null && (C = ((Q = u[0]) == null ? void 0 : Q.id) ?? null);
        const g = canvas.tokens.get(C);
        let p = [];
        if (g) {
          const m = canvas.grid.size, v = canvas.dimensions, F = g.center.x, L = g.center.y;
          p = canvas.tokens.placeables.filter((I) => {
            const B = !I.document.hidden, G = I.actor && (I.actor.type === "character" || I.actor.type === "mook"), H = I.x >= v.sceneX && I.x <= v.sceneX + v.sceneWidth && I.y >= v.sceneY && I.y <= v.sceneY + v.sceneHeight;
            return B && G && H && I.id !== g.id;
          }).map((I) => {
            const B = I.center.x - F, G = I.center.y - L, te = (Math.sqrt(Math.pow(B, 2) + Math.pow(G, 2)) / m).toFixed(2);
            return {
              name: I.name,
              id: I.id,
              distanceM: parseFloat(te),
              type: I.actor.type
            };
          }).sort((I, B) => I.distanceM - B.distanceM);
        } else
          console.warn(`LIST_VISIBLE_TOKENS: Token ID ${C} not found.`);
        await this.sendResponse({ type: "VISIBLE_TOKENS_DATA", tokens: p, requestId: i });
        break;
      }
      case "GET_ACTOR": {
        let u = r.actorId, g = game.user;
        const p = r.agentLink || r.agent_link || r.foundryUserId || r.requestId;
        if (p && (g = game.users.find((m) => m.getFlag(A, "agent-link") === p) || game.users.get(p) || (p === game.user.id ? game.user : null)), g || (g = game.user), !u) {
          const m = g.character;
          m && (u = m.id);
        }
        if (u !== null) {
          const m = game.actors.get(u);
          if (m) {
            const v = m.toObject(), F = {
              _id: m.id,
              name: m.name,
              type: m.type,
              img: v.img,
              system: v.system,
              items: (v.items || []).map((L) => ({
                _id: L._id,
                name: L.name,
                type: L.type,
                img: L.img,
                system: L.system
              })),
              flags: v.flags && v.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": v.flags["cyberpunk-red-core"] } : {}
            };
            await this.sendResponse({ type: "ACTOR_DATA", actor: F, requestId: i, isGM: g.isGM, agentLink: g.getFlag(A, "agent-link") || g.id });
            break;
          }
        }
        await this.sendResponse({ type: "ACTOR_DATA", actor: !1, requestId: i, isGM: g.isGM, agentLink: g.getFlag(A, "agent-link") || g.id });
        break;
      }
      case "GET_ACTORS": {
        let p = function(v) {
          var L;
          return ((L = canvas.tokens.placeables.filter((I) => {
            var B;
            return ((B = I.actor) == null ? void 0 : B.id) === v;
          })[0]) == null ? void 0 : L.id) ?? null;
        }, u = game.user;
        const g = r.agentLink || r.agent_link || r.foundryUserId || r.requestId;
        g && (u = game.users.find((v) => v.getFlag(A, "agent-link") === g) || game.users.get(g) || (g === game.user.id ? game.user : null)), u || (u = game.user);
        let m = [];
        u.isGM ? m = game.actors.filter((v) => v.type === "character" || v.type === "mook").map((v) => {
          var L, I;
          const F = (L = Object.entries(v.ownership || {}).find(([B, G]) => {
            const H = game.users.get(B);
            return H && !H.isGM && G >= 3;
          })) == null ? void 0 : L[0];
          return {
            name: v.name,
            actorId: v.id,
            tokenId: p(v.id),
            agentLink: (F ? (I = game.users.get(F)) == null ? void 0 : I.getFlag(A, "agent-link") : null) || F || u.getFlag(A, "agent-link") || u.id
          };
        }) : (m = canvas.tokens.placeables.filter((v) => v.actor && (v.actor.type === "character" || v.actor.type === "mook")).filter((v) => v.actor.testUserPermission(u, "OWNER")).map((v) => {
          var L, I;
          const F = (L = Object.entries(v.actor.ownership || {}).find(([B, G]) => {
            const H = game.users.get(B);
            return H && !H.isGM && G >= 3;
          })) == null ? void 0 : L[0];
          return {
            name: v.name,
            actorId: v.actor.id,
            tokenId: p(v.actor.id),
            agentLink: (F ? (I = game.users.get(F)) == null ? void 0 : I.getFlag(A, "agent-link") : null) || F || null
          };
        }), u.character && (m.some((F) => F.actorId === u.character.id) || m.push({
          name: u.character.name,
          actorId: u.character.id,
          tokenId: p(u.character.id),
          agentLink: u.getFlag(A, "agent-link") || u.id
        })), !u.isGM && u.character && (m = m.filter((v) => v.actorId === u.character.id))), await this.sendResponse({ type: "ACTORS_DATA", actors: m, requestId: i, isGM: u.isGM, agentLink: u.getFlag(A, "agent-link") || u.id });
        break;
      }
      default:
        console.log("Unknown DataType: " + a);
        break;
    }
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new Gr();
function at() {
  game.settings.settings.has(`${A}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
game.ready ? (at(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks()) : (Hooks.once("init", () => {
  at();
}), Hooks.once("ready", () => {
  at(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks();
}));
