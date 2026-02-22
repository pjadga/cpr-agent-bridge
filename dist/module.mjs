import.meta.hot && import.meta.hot.accept((g) => {
  console.log("Hot reloading module...");
});
function Ie(g) {
  "@babel/helpers - typeof";
  return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
    return typeof h;
  } : function(h) {
    return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
  }, Ie(g);
}
function K(g, h) {
  if (!(g instanceof h))
    throw new TypeError("Cannot call a class as a function");
}
function Rr(g, h) {
  for (var i = 0; i < h.length; i++) {
    var a = h[i];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(g, a.key, a);
  }
}
function Q(g, h, i) {
  return h && Rr(g.prototype, h), Object.defineProperty(g, "prototype", {
    writable: !1
  }), g;
}
function Ae() {
  return Ae = Object.assign || function(g) {
    for (var h = 1; h < arguments.length; h++) {
      var i = arguments[h];
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (g[a] = i[a]);
    }
    return g;
  }, Ae.apply(this, arguments);
}
function se(g, h) {
  if (typeof h != "function" && h !== null)
    throw new TypeError("Super expression must either be null or a function");
  g.prototype = Object.create(h && h.prototype, {
    constructor: {
      value: g,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(g, "prototype", {
    writable: !1
  }), h && Qe(g, h);
}
function De(g) {
  return De = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, De(g);
}
function Qe(g, h) {
  return Qe = Object.setPrototypeOf || function(a, s) {
    return a.__proto__ = s, a;
  }, Qe(g, h);
}
function Ir() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ar(g) {
  if (g === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return g;
}
function Pr(g, h) {
  if (h && (typeof h == "object" || typeof h == "function"))
    return h;
  if (h !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ar(g);
}
function oe(g) {
  var h = Ir();
  return function() {
    var a = De(g), s;
    if (h) {
      var l = De(this).constructor;
      s = Reflect.construct(a, arguments, l);
    } else
      s = a.apply(this, arguments);
    return Pr(this, s);
  };
}
var Ye = /* @__PURE__ */ function() {
  function g() {
    K(this, g);
  }
  return Q(g, [{
    key: "listenForWhisper",
    value: (
      /**
       * Listen for a whisper event on the channel instance.
       */
      function(i, a) {
        return this.listen(".client-" + i, a);
      }
    )
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "notification",
    value: function(i) {
      return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated", i);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */
  }, {
    key: "stopListeningForWhisper",
    value: function(i, a) {
      return this.stopListening(".client-" + i, a);
    }
  }]), g;
}(), St = /* @__PURE__ */ function() {
  function g(h) {
    K(this, g), this.namespace = h;
  }
  return Q(g, [{
    key: "format",
    value: function(i) {
      return [".", "\\"].includes(i.charAt(0)) ? i.substring(1) : (this.namespace && (i = this.namespace + "." + i), i.replace(/\./g, "\\"));
    }
    /**
     * Set the event namespace.
     */
  }, {
    key: "setNamespace",
    value: function(i) {
      this.namespace = i;
    }
  }]), g;
}();
function Lr(g) {
  try {
    new g();
  } catch (h) {
    if (h.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var Ze = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i(a, s, l) {
    var c;
    return K(this, i), c = h.call(this), c.name = s, c.pusher = a, c.options = l, c.eventFormatter = new St(c.options.namespace), c.subscribe(), c;
  }
  return Q(i, [{
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
    value: function(s, l) {
      return this.on(this.eventFormatter.format(s), l), this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(s) {
      var l = this;
      return this.subscription.bind_global(function(c, E) {
        if (!c.startsWith("pusher:")) {
          var k = l.options.namespace.replace(/\./g, "\\"), O = c.startsWith(k) ? c.substring(k.length + 1) : "." + c;
          s(O, E);
        }
      }), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(s, l) {
      return l ? this.subscription.unbind(this.eventFormatter.format(s), l) : this.subscription.unbind(this.eventFormatter.format(s)), this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */
  }, {
    key: "stopListeningToAll",
    value: function(s) {
      return s ? this.subscription.unbind_global(s) : this.subscription.unbind_global(), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(s) {
      return this.on("pusher:subscription_succeeded", function() {
        s();
      }), this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */
  }, {
    key: "error",
    value: function(s) {
      return this.on("pusher:subscription_error", function(l) {
        s(l);
      }), this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(s, l) {
      return this.subscription.bind(s, l), this;
    }
  }]), i;
}(Ye), Ct = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(s, l) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(s), l), this;
      }
    )
  }]), i;
}(Ze), Er = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(s, l) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(s), l), this;
      }
    )
  }]), i;
}(Ze), xr = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(s) {
        return this.on("pusher:subscription_succeeded", function(l) {
          s(Object.keys(l.members).map(function(c) {
            return l.members[c];
          }));
        }), this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(s) {
      return this.on("pusher:member_added", function(l) {
        s(l.info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(s, l) {
      return this.pusher.channels.channels[this.name].trigger("client-".concat(s), l), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(s) {
      return this.on("pusher:member_removed", function(l) {
        s(l.info);
      }), this;
    }
  }]), i;
}(Ct), Tt = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i(a, s, l) {
    var c;
    return K(this, i), c = h.call(this), c.events = {}, c.listeners = {}, c.name = s, c.socket = a, c.options = l, c.eventFormatter = new St(c.options.namespace), c.subscribe(), c;
  }
  return Q(i, [{
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
    value: function(s, l) {
      return this.on(this.eventFormatter.format(s), l), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(s, l) {
      return this.unbindEvent(this.eventFormatter.format(s), l), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(s) {
      return this.on("connect", function(l) {
        s(l);
      }), this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(s) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */
  }, {
    key: "on",
    value: function(s, l) {
      var c = this;
      return this.listeners[s] = this.listeners[s] || [], this.events[s] || (this.events[s] = function(E, k) {
        c.name === E && c.listeners[s] && c.listeners[s].forEach(function(O) {
          return O(k);
        });
      }, this.socket.on(s, this.events[s])), this.listeners[s].push(l), this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function() {
      var s = this;
      Object.keys(this.events).forEach(function(l) {
        s.unbindEvent(l);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function(s, l) {
      this.listeners[s] = this.listeners[s] || [], l && (this.listeners[s] = this.listeners[s].filter(function(c) {
        return c !== l;
      })), (!l || this.listeners[s].length === 0) && (this.events[s] && (this.socket.removeListener(s, this.events[s]), delete this.events[s]), delete this.listeners[s]);
    }
  }]), i;
}(Ye), Rt = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(s, l) {
        return this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(s),
          data: l
        }), this;
      }
    )
  }]), i;
}(Tt), Or = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(s) {
        return this.on("presence:subscribed", function(l) {
          s(l.map(function(c) {
            return c.user_info;
          }));
        }), this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(s) {
      return this.on("presence:joining", function(l) {
        return s(l.user_info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(s, l) {
      return this.socket.emit("client event", {
        channel: this.name,
        event: "client-".concat(s),
        data: l
      }), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(s) {
      return this.on("presence:leaving", function(l) {
        return s(l.user_info);
      }), this;
    }
  }]), i;
}(Rt), je = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
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
    value: function(s, l) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(s) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(s, l) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(s) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(s) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(s, l) {
      return this;
    }
  }]), i;
}(Ye), It = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(s, l) {
        return this;
      }
    )
  }]), i;
}(je), Nr = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(s, l) {
        return this;
      }
    )
  }]), i;
}(je), Mr = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    return K(this, i), h.apply(this, arguments);
  }
  return Q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(s) {
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(s) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(s, l) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(s) {
      return this;
    }
  }]), i;
}(It), et = /* @__PURE__ */ function() {
  function g(h) {
    K(this, g), this._defaultOptions = {
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
    }, this.setOptions(h), this.connect();
  }
  return Q(g, [{
    key: "setOptions",
    value: function(i) {
      this.options = Ae(this._defaultOptions, i);
      var a = this.csrfToken();
      return a && (this.options.auth.headers["X-CSRF-TOKEN"] = a, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = a), a = this.options.bearerToken, a && (this.options.auth.headers.Authorization = "Bearer " + a, this.options.userAuthentication.headers.Authorization = "Bearer " + a), i;
    }
    /**
     * Extract the CSRF token from the page.
     */
  }, {
    key: "csrfToken",
    value: function() {
      var i;
      return typeof window < "u" && window.Laravel && window.Laravel.csrfToken ? window.Laravel.csrfToken : this.options.csrfToken ? this.options.csrfToken : typeof document < "u" && typeof document.querySelector == "function" && (i = document.querySelector('meta[name="csrf-token"]')) ? i.getAttribute("content") : null;
    }
  }]), g;
}(), kt = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    var a;
    return K(this, i), a = h.apply(this, arguments), a.channels = {}, a;
  }
  return Q(i, [{
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
    value: function(s, l, c) {
      return this.channel(s).listen(l, c);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(s) {
      return this.channels[s] || (this.channels[s] = new Ze(this.pusher, s, this.options)), this.channels[s];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(s) {
      return this.channels["private-" + s] || (this.channels["private-" + s] = new Ct(this.pusher, "private-" + s, this.options)), this.channels["private-" + s];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(s) {
      return this.channels["private-encrypted-" + s] || (this.channels["private-encrypted-" + s] = new Er(this.pusher, "private-encrypted-" + s, this.options)), this.channels["private-encrypted-" + s];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(s) {
      return this.channels["presence-" + s] || (this.channels["presence-" + s] = new xr(this.pusher, "presence-" + s, this.options)), this.channels["presence-" + s];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(s) {
      var l = this, c = [s, "private-" + s, "private-encrypted-" + s, "presence-" + s];
      c.forEach(function(E, k) {
        l.leaveChannel(E);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(s) {
      this.channels[s] && (this.channels[s].unsubscribe(), delete this.channels[s]);
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
  }]), i;
}(et), _t = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    var a;
    return K(this, i), a = h.apply(this, arguments), a.channels = {}, a;
  }
  return Q(i, [{
    key: "connect",
    value: function() {
      var s = this, l = this.getSocketIO();
      return this.socket = l(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(s.channels).forEach(function(c) {
          c.subscribe();
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
    value: function(s, l, c) {
      return this.channel(s).listen(l, c);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(s) {
      return this.channels[s] || (this.channels[s] = new Tt(this.socket, s, this.options)), this.channels[s];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(s) {
      return this.channels["private-" + s] || (this.channels["private-" + s] = new Rt(this.socket, "private-" + s, this.options)), this.channels["private-" + s];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(s) {
      return this.channels["presence-" + s] || (this.channels["presence-" + s] = new Or(this.socket, "presence-" + s, this.options)), this.channels["presence-" + s];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(s) {
      var l = this, c = [s, "private-" + s, "presence-" + s];
      c.forEach(function(E) {
        l.leaveChannel(E);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(s) {
      this.channels[s] && (this.channels[s].unsubscribe(), delete this.channels[s]);
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
  }]), i;
}(et), Dr = /* @__PURE__ */ function(g) {
  se(i, g);
  var h = oe(i);
  function i() {
    var a;
    return K(this, i), a = h.apply(this, arguments), a.channels = {}, a;
  }
  return Q(i, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(s, l, c) {
      return new je();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(s) {
      return new je();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(s) {
      return new It();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(s) {
      return new Nr();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(s) {
      return new Mr();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(s) {
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(s) {
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
  }]), i;
}(et), jr = /* @__PURE__ */ function() {
  function g(h) {
    K(this, g), this.options = h, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return Q(g, [{
    key: "channel",
    value: function(i) {
      return this.connector.channel(i);
    }
    /**
     * Create a new connection.
     */
  }, {
    key: "connect",
    value: function() {
      if (this.options.broadcaster == "reverb")
        this.connector = new kt(Ae(Ae({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new kt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new _t(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new Dr(this.options);
      else if (typeof this.options.broadcaster == "function" && Lr(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(Ie(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
    value: function(i) {
      return this.connector.presenceChannel(i);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(i) {
      this.connector.leave(i);
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(i) {
      this.connector.leaveChannel(i);
    }
    /**
     * Leave all channels.
     */
  }, {
    key: "leaveAllChannels",
    value: function() {
      for (var i in this.connector.channels)
        this.leaveChannel(i);
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, a, s) {
      return this.connector.listen(i, a, s);
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "private",
    value: function(i) {
      return this.connector.privateChannel(i);
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivate",
    value: function(i) {
      if (this.connector instanceof _t)
        throw new Error("Broadcaster ".concat(Ie(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
      return this.connector.encryptedPrivateChannel(i);
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : Ie(Turbo)) === "object" && this.registerTurboRequestInterceptor();
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerVueRequestInterceptor",
    value: function() {
      var i = this;
      Vue.http.interceptors.push(function(a, s) {
        i.socketId() && a.headers.set("X-Socket-ID", i.socketId()), s();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function() {
      var i = this;
      axios.interceptors.request.use(function(a) {
        return i.socketId() && (a.headers["X-Socket-Id"] = i.socketId()), a;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function() {
      var i = this;
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(a, s, l) {
        i.socketId() && l.setRequestHeader("X-Socket-Id", i.socketId());
      });
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerTurboRequestInterceptor",
    value: function() {
      var i = this;
      document.addEventListener("turbo:before-fetch-request", function(a) {
        a.detail.fetchOptions.headers["X-Socket-Id"] = i.socketId();
      });
    }
  }]), g;
}();
function Ur(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var At = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(g, h) {
  (function(a, s) {
    g.exports = s();
  })(window, function() {
    return (
      /******/
      function(i) {
        var a = {};
        function s(l) {
          if (a[l])
            return a[l].exports;
          var c = a[l] = {
            /******/
            i: l,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return i[l].call(c.exports, c, c.exports, s), c.l = !0, c.exports;
        }
        return s.m = i, s.c = a, s.d = function(l, c, E) {
          s.o(l, c) || Object.defineProperty(l, c, { enumerable: !0, get: E });
        }, s.r = function(l) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
        }, s.t = function(l, c) {
          if (c & 1 && (l = s(l)), c & 8 || c & 4 && typeof l == "object" && l && l.__esModule) return l;
          var E = /* @__PURE__ */ Object.create(null);
          if (s.r(E), Object.defineProperty(E, "default", { enumerable: !0, value: l }), c & 2 && typeof l != "string") for (var k in l) s.d(E, k, (function(O) {
            return l[O];
          }).bind(null, k));
          return E;
        }, s.n = function(l) {
          var c = l && l.__esModule ? (
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
          return s.d(c, "a", c), c;
        }, s.o = function(l, c) {
          return Object.prototype.hasOwnProperty.call(l, c);
        }, s.p = "", s(s.s = 2);
      }([
        /* 0 */
        /***/
        function(i, a, s) {
          var l = this && this.__extends || /* @__PURE__ */ function() {
            var _ = function(v, y) {
              return _ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(R, F) {
                R.__proto__ = F;
              } || function(R, F) {
                for (var X in F) F.hasOwnProperty(X) && (R[X] = F[X]);
              }, _(v, y);
            };
            return function(v, y) {
              _(v, y);
              function R() {
                this.constructor = v;
              }
              v.prototype = y === null ? Object.create(y) : (R.prototype = y.prototype, new R());
            };
          }();
          Object.defineProperty(a, "__esModule", { value: !0 });
          var c = 256, E = (
            /** @class */
            function() {
              function _(v) {
                v === void 0 && (v = "="), this._paddingCharacter = v;
              }
              return _.prototype.encodedLength = function(v) {
                return this._paddingCharacter ? (v + 2) / 3 * 4 | 0 : (v * 8 + 5) / 6 | 0;
              }, _.prototype.encode = function(v) {
                for (var y = "", R = 0; R < v.length - 2; R += 3) {
                  var F = v[R] << 16 | v[R + 1] << 8 | v[R + 2];
                  y += this._encodeByte(F >>> 3 * 6 & 63), y += this._encodeByte(F >>> 2 * 6 & 63), y += this._encodeByte(F >>> 1 * 6 & 63), y += this._encodeByte(F >>> 0 * 6 & 63);
                }
                var X = v.length - R;
                if (X > 0) {
                  var F = v[R] << 16 | (X === 2 ? v[R + 1] << 8 : 0);
                  y += this._encodeByte(F >>> 3 * 6 & 63), y += this._encodeByte(F >>> 2 * 6 & 63), X === 2 ? y += this._encodeByte(F >>> 1 * 6 & 63) : y += this._paddingCharacter || "", y += this._paddingCharacter || "";
                }
                return y;
              }, _.prototype.maxDecodedLength = function(v) {
                return this._paddingCharacter ? v / 4 * 3 | 0 : (v * 6 + 7) / 8 | 0;
              }, _.prototype.decodedLength = function(v) {
                return this.maxDecodedLength(v.length - this._getPaddingLength(v));
              }, _.prototype.decode = function(v) {
                if (v.length === 0)
                  return new Uint8Array(0);
                for (var y = this._getPaddingLength(v), R = v.length - y, F = new Uint8Array(this.maxDecodedLength(R)), X = 0, G = 0, ne = 0, ce = 0, te = 0, le = 0, he = 0; G < R - 4; G += 4)
                  ce = this._decodeChar(v.charCodeAt(G + 0)), te = this._decodeChar(v.charCodeAt(G + 1)), le = this._decodeChar(v.charCodeAt(G + 2)), he = this._decodeChar(v.charCodeAt(G + 3)), F[X++] = ce << 2 | te >>> 4, F[X++] = te << 4 | le >>> 2, F[X++] = le << 6 | he, ne |= ce & c, ne |= te & c, ne |= le & c, ne |= he & c;
                if (G < R - 1 && (ce = this._decodeChar(v.charCodeAt(G)), te = this._decodeChar(v.charCodeAt(G + 1)), F[X++] = ce << 2 | te >>> 4, ne |= ce & c, ne |= te & c), G < R - 2 && (le = this._decodeChar(v.charCodeAt(G + 2)), F[X++] = te << 4 | le >>> 2, ne |= le & c), G < R - 3 && (he = this._decodeChar(v.charCodeAt(G + 3)), F[X++] = le << 6 | he, ne |= he & c), ne !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return F;
              }, _.prototype._encodeByte = function(v) {
                var y = v;
                return y += 65, y += 25 - v >>> 8 & 6, y += 51 - v >>> 8 & -75, y += 61 - v >>> 8 & -15, y += 62 - v >>> 8 & 3, String.fromCharCode(y);
              }, _.prototype._decodeChar = function(v) {
                var y = c;
                return y += (42 - v & v - 44) >>> 8 & -c + v - 43 + 62, y += (46 - v & v - 48) >>> 8 & -c + v - 47 + 63, y += (47 - v & v - 58) >>> 8 & -c + v - 48 + 52, y += (64 - v & v - 91) >>> 8 & -c + v - 65 + 0, y += (96 - v & v - 123) >>> 8 & -c + v - 97 + 26, y;
              }, _.prototype._getPaddingLength = function(v) {
                var y = 0;
                if (this._paddingCharacter) {
                  for (var R = v.length - 1; R >= 0 && v[R] === this._paddingCharacter; R--)
                    y++;
                  if (v.length < 4 || y > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return y;
              }, _;
            }()
          );
          a.Coder = E;
          var k = new E();
          function O(_) {
            return k.encode(_);
          }
          a.encode = O;
          function M(_) {
            return k.decode(_);
          }
          a.decode = M;
          var L = (
            /** @class */
            function(_) {
              l(v, _);
              function v() {
                return _ !== null && _.apply(this, arguments) || this;
              }
              return v.prototype._encodeByte = function(y) {
                var R = y;
                return R += 65, R += 25 - y >>> 8 & 6, R += 51 - y >>> 8 & -75, R += 61 - y >>> 8 & -13, R += 62 - y >>> 8 & 49, String.fromCharCode(R);
              }, v.prototype._decodeChar = function(y) {
                var R = c;
                return R += (44 - y & y - 46) >>> 8 & -c + y - 45 + 62, R += (94 - y & y - 96) >>> 8 & -c + y - 95 + 63, R += (47 - y & y - 58) >>> 8 & -c + y - 48 + 52, R += (64 - y & y - 91) >>> 8 & -c + y - 65 + 0, R += (96 - y & y - 123) >>> 8 & -c + y - 97 + 26, R;
              }, v;
            }(E)
          );
          a.URLSafeCoder = L;
          var A = new L();
          function T(_) {
            return A.encode(_);
          }
          a.encodeURLSafe = T;
          function D(_) {
            return A.decode(_);
          }
          a.decodeURLSafe = D, a.encodedLength = function(_) {
            return k.encodedLength(_);
          }, a.maxDecodedLength = function(_) {
            return k.maxDecodedLength(_);
          }, a.decodedLength = function(_) {
            return k.decodedLength(_);
          };
        },
        /* 1 */
        /***/
        function(i, a, s) {
          Object.defineProperty(a, "__esModule", { value: !0 });
          var l = "utf8: invalid string", c = "utf8: invalid source encoding";
          function E(M) {
            for (var L = new Uint8Array(k(M)), A = 0, T = 0; T < M.length; T++) {
              var D = M.charCodeAt(T);
              D < 128 ? L[A++] = D : D < 2048 ? (L[A++] = 192 | D >> 6, L[A++] = 128 | D & 63) : D < 55296 ? (L[A++] = 224 | D >> 12, L[A++] = 128 | D >> 6 & 63, L[A++] = 128 | D & 63) : (T++, D = (D & 1023) << 10, D |= M.charCodeAt(T) & 1023, D += 65536, L[A++] = 240 | D >> 18, L[A++] = 128 | D >> 12 & 63, L[A++] = 128 | D >> 6 & 63, L[A++] = 128 | D & 63);
            }
            return L;
          }
          a.encode = E;
          function k(M) {
            for (var L = 0, A = 0; A < M.length; A++) {
              var T = M.charCodeAt(A);
              if (T < 128)
                L += 1;
              else if (T < 2048)
                L += 2;
              else if (T < 55296)
                L += 3;
              else if (T <= 57343) {
                if (A >= M.length - 1)
                  throw new Error(l);
                A++, L += 4;
              } else
                throw new Error(l);
            }
            return L;
          }
          a.encodedLength = k;
          function O(M) {
            for (var L = [], A = 0; A < M.length; A++) {
              var T = M[A];
              if (T & 128) {
                var D = void 0;
                if (T < 224) {
                  if (A >= M.length)
                    throw new Error(c);
                  var _ = M[++A];
                  if ((_ & 192) !== 128)
                    throw new Error(c);
                  T = (T & 31) << 6 | _ & 63, D = 128;
                } else if (T < 240) {
                  if (A >= M.length - 1)
                    throw new Error(c);
                  var _ = M[++A], v = M[++A];
                  if ((_ & 192) !== 128 || (v & 192) !== 128)
                    throw new Error(c);
                  T = (T & 15) << 12 | (_ & 63) << 6 | v & 63, D = 2048;
                } else if (T < 248) {
                  if (A >= M.length - 2)
                    throw new Error(c);
                  var _ = M[++A], v = M[++A], y = M[++A];
                  if ((_ & 192) !== 128 || (v & 192) !== 128 || (y & 192) !== 128)
                    throw new Error(c);
                  T = (T & 15) << 18 | (_ & 63) << 12 | (v & 63) << 6 | y & 63, D = 65536;
                } else
                  throw new Error(c);
                if (T < D || T >= 55296 && T <= 57343)
                  throw new Error(c);
                if (T >= 65536) {
                  if (T > 1114111)
                    throw new Error(c);
                  T -= 65536, L.push(String.fromCharCode(55296 | T >> 10)), T = 56320 | T & 1023;
                }
              }
              L.push(String.fromCharCode(T));
            }
            return L.join("");
          }
          a.decode = O;
        },
        /* 2 */
        /***/
        function(i, a, s) {
          i.exports = s(3).default;
        },
        /* 3 */
        /***/
        function(i, a, s) {
          s.r(a);
          class l {
            constructor(e, t) {
              this.lastId = 0, this.prefix = e, this.name = t;
            }
            create(e) {
              this.lastId++;
              var t = this.lastId, r = this.prefix + t, o = this.name + "[" + t + "]", u = !1, m = function() {
                u || (e.apply(null, arguments), u = !0);
              };
              return this[t] = m, { number: t, id: r, name: o, callback: m };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var c = new l("_pusher_script_", "Pusher.ScriptReceivers"), E = {
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
          }, k = E;
          class O {
            constructor(e) {
              this.options = e, this.receivers = e.receivers || c, this.loading = {};
            }
            load(e, t, r) {
              var o = this;
              if (o.loading[e] && o.loading[e].length > 0)
                o.loading[e].push(r);
              else {
                o.loading[e] = [r];
                var u = P.createScriptRequest(o.getPath(e, t)), m = o.receivers.create(function(w) {
                  if (o.receivers.remove(m), o.loading[e]) {
                    var I = o.loading[e];
                    delete o.loading[e];
                    for (var j = function(W) {
                      W || u.cleanup();
                    }, U = 0; U < I.length; U++)
                      I[U](w, j);
                  }
                });
                u.send(m);
              }
            }
            getRoot(e) {
              var t, r = P.getDocument().location.protocol;
              return e && e.useTLS || r === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var M = new l("_pusher_dependencies", "Pusher.DependenciesReceivers"), L = new O({
            cdn_http: k.cdn_http,
            cdn_https: k.cdn_https,
            version: k.VERSION,
            suffix: k.dependency_suffix,
            receivers: M
          });
          const A = {
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
            const e = "See:", t = A.urls[n];
            if (!t)
              return "";
            let r;
            return t.fullUrl ? r = t.fullUrl : t.path && (r = A.baseUrl + t.path), r ? `${e} ${r}` : "";
          } }, _;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(_ || (_ = {}));
          class v extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class y extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class R extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class F extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class X extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class G extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class ne extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class ce extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class te extends Error {
            constructor(e, t) {
              super(t), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var he = function(n, e, t, r, o) {
            const u = P.createXHR();
            u.open("POST", t.endpoint, !0), u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var m in t.headers)
              u.setRequestHeader(m, t.headers[m]);
            if (t.headersProvider != null) {
              let w = t.headersProvider();
              for (var m in w)
                u.setRequestHeader(m, w[m]);
            }
            return u.onreadystatechange = function() {
              if (u.readyState === 4)
                if (u.status === 200) {
                  let w, I = !1;
                  try {
                    w = JSON.parse(u.responseText), I = !0;
                  } catch {
                    o(new te(200, `JSON returned from ${r.toString()} endpoint was invalid, yet status code was 200. Data was: ${u.responseText}`), null);
                  }
                  I && o(null, w);
                } else {
                  let w = "";
                  switch (r) {
                    case _.UserAuthentication:
                      w = D.buildLogSuffix("authenticationEndpoint");
                      break;
                    case _.ChannelAuthorization:
                      w = `Clients must be authorized to join private or presence channels. ${D.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  o(new te(u.status, `Unable to retrieve auth string from ${r.toString()} endpoint - received status: ${u.status} from ${t.endpoint}. ${w}`), null);
                }
            }, u.send(e), u;
          };
          function Pe(n) {
            return f(d(n));
          }
          var ve = String.fromCharCode, ye = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Le = function(n) {
            var e = n.charCodeAt(0);
            return e < 128 ? n : e < 2048 ? ve(192 | e >>> 6) + ve(128 | e & 63) : ve(224 | e >>> 12 & 15) + ve(128 | e >>> 6 & 63) + ve(128 | e & 63);
          }, d = function(n) {
            return n.replace(/[^\x00-\x7F]/g, Le);
          }, p = function(n) {
            var e = [0, 2, 1][n.length % 3], t = n.charCodeAt(0) << 16 | (n.length > 1 ? n.charCodeAt(1) : 0) << 8 | (n.length > 2 ? n.charCodeAt(2) : 0), r = [
              ye.charAt(t >>> 18),
              ye.charAt(t >>> 12 & 63),
              e >= 2 ? "=" : ye.charAt(t >>> 6 & 63),
              e >= 1 ? "=" : ye.charAt(t & 63)
            ];
            return r.join("");
          }, f = window.btoa || function(n) {
            return n.replace(/[\s\S]{1,3}/g, p);
          };
          class b {
            constructor(e, t, r, o) {
              this.clear = t, this.timer = e(() => {
                this.timer && (this.timer = o(this.timer));
              }, r);
            }
            isRunning() {
              return this.timer !== null;
            }
            ensureAborted() {
              this.timer && (this.clear(this.timer), this.timer = null);
            }
          }
          var S = b;
          function B(n) {
            window.clearTimeout(n);
          }
          function C(n) {
            window.clearInterval(n);
          }
          class x extends S {
            constructor(e, t) {
              super(setTimeout, B, e, function(r) {
                return t(), null;
              });
            }
          }
          class $ extends S {
            constructor(e, t) {
              super(setInterval, C, e, function(r) {
                return t(), r;
              });
            }
          }
          var V = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new x(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(r) {
                return r[n].apply(r, t.concat(arguments));
              };
            }
          }, N = V;
          function H(n, ...e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              for (var o in r)
                r[o] && r[o].constructor && r[o].constructor === Object ? n[o] = H(n[o] || {}, r[o]) : n[o] = r[o];
            }
            return n;
          }
          function J() {
            for (var n = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(Ee(arguments[e]));
            return n.join(" : ");
          }
          function Z(n, e) {
            var t = Array.prototype.indexOf;
            if (n === null)
              return -1;
            if (t && n.indexOf === t)
              return n.indexOf(e);
            for (var r = 0, o = n.length; r < o; r++)
              if (n[r] === e)
                return r;
            return -1;
          }
          function ee(n, e) {
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && e(n[t], t, n);
          }
          function fe(n) {
            var e = [];
            return ee(n, function(t, r) {
              e.push(r);
            }), e;
          }
          function z(n) {
            var e = [];
            return ee(n, function(t) {
              e.push(t);
            }), e;
          }
          function ae(n, e, t) {
            for (var r = 0; r < n.length; r++)
              e.call(t || window, n[r], r, n);
          }
          function ue(n, e) {
            for (var t = [], r = 0; r < n.length; r++)
              t.push(e(n[r], r, n, t));
            return t;
          }
          function pe(n, e) {
            var t = {};
            return ee(n, function(r, o) {
              t[o] = e(r);
            }), t;
          }
          function de(n, e) {
            e = e || function(o) {
              return !!o;
            };
            for (var t = [], r = 0; r < n.length; r++)
              e(n[r], r, n, t) && t.push(n[r]);
            return t;
          }
          function re(n, e) {
            var t = {};
            return ee(n, function(r, o) {
              (e && e(r, o, n, t) || r) && (t[o] = r);
            }), t;
          }
          function be(n) {
            var e = [];
            return ee(n, function(t, r) {
              e.push([r, t]);
            }), e;
          }
          function we(n, e) {
            for (var t = 0; t < n.length; t++)
              if (e(n[t], t, n))
                return !0;
            return !1;
          }
          function Pt(n, e) {
            for (var t = 0; t < n.length; t++)
              if (!e(n[t], t, n))
                return !1;
            return !0;
          }
          function Lt(n) {
            return pe(n, function(e) {
              return typeof e == "object" && (e = Ee(e)), encodeURIComponent(Pe(e.toString()));
            });
          }
          function Et(n) {
            var e = re(n, function(r) {
              return r !== void 0;
            }), t = ue(be(Lt(e)), N.method("join", "=")).join("&");
            return t;
          }
          function xt(n) {
            var e = [], t = [];
            return function r(o, u) {
              var m, w, I;
              switch (typeof o) {
                case "object":
                  if (!o)
                    return null;
                  for (m = 0; m < e.length; m += 1)
                    if (e[m] === o)
                      return { $ref: t[m] };
                  if (e.push(o), t.push(u), Object.prototype.toString.apply(o) === "[object Array]")
                    for (I = [], m = 0; m < o.length; m += 1)
                      I[m] = r(o[m], u + "[" + m + "]");
                  else {
                    I = {};
                    for (w in o)
                      Object.prototype.hasOwnProperty.call(o, w) && (I[w] = r(o[w], u + "[" + JSON.stringify(w) + "]"));
                  }
                  return I;
                case "number":
                case "string":
                case "boolean":
                  return o;
              }
            }(n, "$");
          }
          function Ee(n) {
            try {
              return JSON.stringify(n);
            } catch {
              return JSON.stringify(xt(n));
            }
          }
          class Ot {
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
              var r = J.apply(this, arguments);
              Ge.log ? Ge.log(r) : Ge.logToConsole && e.bind(this)(r);
            }
          }
          var q = new Ot(), Nt = function(n, e, t, r, o) {
            (t.headers !== void 0 || t.headersProvider != null) && q.warn(`To send headers with the ${r.toString()} request, you must use AJAX, rather than JSONP.`);
            var u = n.nextAuthCallbackID.toString();
            n.nextAuthCallbackID++;
            var m = n.getDocument(), w = m.createElement("script");
            n.auth_callbacks[u] = function(U) {
              o(null, U);
            };
            var I = "Pusher.auth_callbacks['" + u + "']";
            w.src = t.endpoint + "?callback=" + encodeURIComponent(I) + "&" + e;
            var j = m.getElementsByTagName("head")[0] || m.documentElement;
            j.insertBefore(w, j.firstChild);
          }, Mt = Nt;
          class Dt {
            constructor(e) {
              this.src = e;
            }
            send(e) {
              var t = this, r = "Error loading " + t.src;
              t.script = document.createElement("script"), t.script.id = e.id, t.script.src = t.src, t.script.type = "text/javascript", t.script.charset = "UTF-8", t.script.addEventListener ? (t.script.onerror = function() {
                e.callback(r);
              }, t.script.onload = function() {
                e.callback(null);
              }) : t.script.onreadystatechange = function() {
                (t.script.readyState === "loaded" || t.script.readyState === "complete") && e.callback(null);
              }, t.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (t.errorScript = document.createElement("script"), t.errorScript.id = e.id + "_error", t.errorScript.text = e.name + "('" + r + "');", t.script.async = t.errorScript.async = !1) : t.script.async = !0;
              var o = document.getElementsByTagName("head")[0];
              o.insertBefore(t.script, o.firstChild), t.errorScript && o.insertBefore(t.errorScript, t.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class jt {
            constructor(e, t) {
              this.url = e, this.data = t;
            }
            send(e) {
              if (!this.request) {
                var t = Et(this.data), r = this.url + "/" + e.number + "?" + t;
                this.request = P.createScriptRequest(r), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Ut = function(n, e) {
            return function(t, r) {
              var o = "http" + (e ? "s" : "") + "://", u = o + (n.host || n.options.host) + n.options.path, m = P.createJSONPRequest(u, t), w = P.ScriptReceivers.create(function(I, j) {
                c.remove(w), m.cleanup(), j && j.host && (n.host = j.host), r && r(I, j);
              });
              m.send(w);
            };
          }, Ft = {
            name: "jsonp",
            getAgent: Ut
          }, Ht = Ft;
          function Ue(n, e, t) {
            var r = n + (e.useTLS ? "s" : ""), o = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return r + "://" + o + t;
          }
          function Fe(n, e) {
            var t = "/app/" + n, r = "?protocol=" + k.PROTOCOL + "&client=js&version=" + k.VERSION + (e ? "&" + e : "");
            return t + r;
          }
          var zt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "") + Fe(n, "flash=false");
              return Ue("ws", e, t);
            }
          }, qt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "/pusher") + Fe(n);
              return Ue("http", e, t);
            }
          }, Bt = {
            getInitial: function(n, e) {
              return Ue("http", e, e.httpPath || "/pusher");
            },
            getPath: function(n, e) {
              return Fe(n);
            }
          };
          class $t {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[He(e)];
            }
            add(e, t, r) {
              var o = He(e);
              this._callbacks[o] = this._callbacks[o] || [], this._callbacks[o].push({
                fn: t,
                context: r
              });
            }
            remove(e, t, r) {
              if (!e && !t && !r) {
                this._callbacks = {};
                return;
              }
              var o = e ? [He(e)] : fe(this._callbacks);
              t || r ? this.removeCallback(o, t, r) : this.removeAllCallbacks(o);
            }
            removeCallback(e, t, r) {
              ae(e, function(o) {
                this._callbacks[o] = de(this._callbacks[o] || [], function(u) {
                  return t && t !== u.fn || r && r !== u.context;
                }), this._callbacks[o].length === 0 && delete this._callbacks[o];
              }, this);
            }
            removeAllCallbacks(e) {
              ae(e, function(t) {
                delete this._callbacks[t];
              }, this);
            }
          }
          function He(n) {
            return "_" + n;
          }
          class ge {
            constructor(e) {
              this.callbacks = new $t(), this.global_callbacks = [], this.failThrough = e;
            }
            bind(e, t, r) {
              return this.callbacks.add(e, t, r), this;
            }
            bind_global(e) {
              return this.global_callbacks.push(e), this;
            }
            unbind(e, t, r) {
              return this.callbacks.remove(e, t, r), this;
            }
            unbind_global(e) {
              return e ? (this.global_callbacks = de(this.global_callbacks || [], (t) => t !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, t, r) {
              for (var o = 0; o < this.global_callbacks.length; o++)
                this.global_callbacks[o](e, t);
              var u = this.callbacks.get(e), m = [];
              if (r ? m.push(t, r) : t && m.push(t), u && u.length > 0)
                for (var o = 0; o < u.length; o++)
                  u[o].fn.apply(u[o].context || window, m);
              else this.failThrough && this.failThrough(e, t);
              return this;
            }
          }
          class Vt extends ge {
            constructor(e, t, r, o, u) {
              super(), this.initialize = P.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = r, this.key = o, this.options = u, this.state = "new", this.timeline = u.timeline, this.activityTimeout = u.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return N.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), q.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (N.defer(() => {
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
              return H({ cid: this.id }, e);
            }
          }
          class Ce {
            constructor(e) {
              this.hooks = e;
            }
            isSupported(e) {
              return this.hooks.isSupported(e);
            }
            createConnection(e, t, r, o) {
              return new Vt(this.hooks, e, t, r, o);
            }
          }
          var Wt = new Ce({
            urls: zt,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!P.getWebSocketAPI();
            },
            isSupported: function() {
              return !!P.getWebSocketAPI();
            },
            getSocket: function(n) {
              return P.createWebSocket(n);
            }
          }), tt = {
            urls: qt,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, nt = H({
            getSocket: function(n) {
              return P.HTTPFactory.createStreamingSocket(n);
            }
          }, tt), rt = H({
            getSocket: function(n) {
              return P.HTTPFactory.createPollingSocket(n);
            }
          }, tt), it = {
            isSupported: function() {
              return P.isXHRSupported();
            }
          }, Xt = new Ce(H({}, nt, it)), Gt = new Ce(H({}, rt, it)), Jt = {
            ws: Wt,
            xhr_streaming: Xt,
            xhr_polling: Gt
          }, xe = Jt, Kt = new Ce({
            file: "sockjs",
            urls: Bt,
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
                js_path: L.getPath("sockjs", {
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
          }), st = {
            isSupported: function(n) {
              var e = P.isXDRSupported(n.useTLS);
              return e;
            }
          }, Qt = new Ce(H({}, nt, st)), Yt = new Ce(H({}, rt, st));
          xe.xdr_streaming = Qt, xe.xdr_polling = Yt, xe.sockjs = Kt;
          var Zt = xe;
          class en extends ge {
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
          var tn = new en();
          class nn {
            constructor(e, t, r) {
              this.manager = e, this.transport = t, this.minPingDelay = r.minPingDelay, this.maxPingDelay = r.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(e, t, r, o) {
              o = H({}, o, {
                activityTimeout: this.pingDelay
              });
              var u = this.transport.createConnection(e, t, r, o), m = null, w = function() {
                u.unbind("open", w), u.bind("closed", I), m = N.now();
              }, I = (j) => {
                if (u.unbind("closed", I), j.code === 1002 || j.code === 1003)
                  this.manager.reportDeath();
                else if (!j.wasClean && m) {
                  var U = N.now() - m;
                  U < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(U / 2, this.minPingDelay));
                }
              };
              return u.bind("open", w), u;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const ot = {
            decodeMessage: function(n) {
              try {
                var e = JSON.parse(n.data), t = e.data;
                if (typeof t == "string")
                  try {
                    t = JSON.parse(e.data);
                  } catch {
                  }
                var r = {
                  event: e.event,
                  channel: e.channel,
                  data: t
                };
                return e.user_id && (r.user_id = e.user_id), r;
              } catch (o) {
                throw { type: "MessageParseError", error: o, data: n.data };
              }
            },
            encodeMessage: function(n) {
              return JSON.stringify(n);
            },
            processHandshake: function(n) {
              var e = ot.decodeMessage(n);
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
          var ke = ot;
          class rn extends ge {
            constructor(e, t) {
              super(), this.id = e, this.transport = t, this.activityTimeout = t.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(e) {
              return this.transport.send(e);
            }
            send_event(e, t, r) {
              var o = { event: e, data: t };
              return r && (o.channel = r), q.debug("Event sent", o), this.send(ke.encodeMessage(o));
            }
            ping() {
              this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
            }
            close() {
              this.transport.close();
            }
            bindListeners() {
              var e = {
                message: (r) => {
                  var o;
                  try {
                    o = ke.decodeMessage(r);
                  } catch (u) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: u,
                      data: r.data
                    });
                  }
                  if (o !== void 0) {
                    switch (q.debug("Event recd", o), o.event) {
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
                error: (r) => {
                  this.emit("error", r);
                },
                closed: (r) => {
                  t(), r && r.code && this.handleCloseEvent(r), this.transport = null, this.emit("closed");
                }
              }, t = () => {
                ee(e, (r, o) => {
                  this.transport.unbind(o, r);
                });
              };
              ee(e, (r, o) => {
                this.transport.bind(o, r);
              });
            }
            handleCloseEvent(e) {
              var t = ke.getCloseAction(e), r = ke.getCloseError(e);
              r && this.emit("error", r), t && this.emit(t, { action: t, error: r });
            }
          }
          class sn {
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
                  t = ke.processHandshake(e);
                } catch (r) {
                  this.finish("error", { error: r }), this.transport.close();
                  return;
                }
                t.action === "connected" ? this.finish("connected", {
                  connection: new rn(t.id, this.transport),
                  activityTimeout: t.activityTimeout
                }) : (this.finish(t.action, { error: t.error }), this.transport.close());
              }, this.onClosed = (e) => {
                this.unbindListeners();
                var t = ke.getCloseAction(e) || "backoff", r = ke.getCloseError(e);
                this.finish(t, { error: r });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, t) {
              this.callback(H({ transport: this.transport, action: e }, t));
            }
          }
          class on {
            constructor(e, t) {
              this.timeline = e, this.options = t || {};
            }
            send(e, t) {
              this.timeline.isEmpty() || this.timeline.send(P.TimelineTransport.getAgent(this, e), t);
            }
          }
          class ze extends ge {
            constructor(e, t) {
              super(function(r, o) {
                q.debug("No callbacks on " + e + " for " + r);
              }), this.name = e, this.pusher = t, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, t) {
              return t(null, { auth: "" });
            }
            trigger(e, t) {
              if (e.indexOf("client-") !== 0)
                throw new v("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var r = D.buildLogSuffix("triggeringClientEvents");
                q.warn(`Client event triggered before channel 'subscription_succeeded' event . ${r}`);
              }
              return this.pusher.send_event(e, t, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(e) {
              var t = e.event, r = e.data;
              if (t === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(e);
              else if (t === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(e);
              else if (t.indexOf("pusher_internal:") !== 0) {
                var o = {};
                this.emit(t, r, o);
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
                e ? (this.subscriptionPending = !1, q.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: e.message
                }, e instanceof te ? { status: e.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
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
          class qe extends ze {
            authorize(e, t) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: e
              }, t);
            }
          }
          class an {
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
              ee(this.members, (t, r) => {
                e(this.get(r));
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
          var cn = function(n, e, t, r) {
            function o(u) {
              return u instanceof t ? u : new t(function(m) {
                m(u);
              });
            }
            return new (t || (t = Promise))(function(u, m) {
              function w(U) {
                try {
                  j(r.next(U));
                } catch (W) {
                  m(W);
                }
              }
              function I(U) {
                try {
                  j(r.throw(U));
                } catch (W) {
                  m(W);
                }
              }
              function j(U) {
                U.done ? u(U.value) : o(U.value).then(w, I);
              }
              j((r = r.apply(n, e || [])).next());
            });
          };
          class ln extends qe {
            constructor(e, t) {
              super(e, t), this.members = new an();
            }
            authorize(e, t) {
              super.authorize(e, (r, o) => cn(this, void 0, void 0, function* () {
                if (!r)
                  if (o = o, o.channel_data != null) {
                    var u = JSON.parse(o.channel_data);
                    this.members.setMyID(u.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let m = D.buildLogSuffix("authorizationEndpoint");
                    q.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${m}, or the user should be signed in.`), t("Invalid auth response");
                    return;
                  }
                t(r, o);
              }));
            }
            handleEvent(e) {
              var t = e.event;
              if (t.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(e);
              else {
                var r = e.data, o = {};
                e.user_id && (o.user_id = e.user_id), this.emit(t, r, o);
              }
            }
            handleInternalEvent(e) {
              var t = e.event, r = e.data;
              switch (t) {
                case "pusher_internal:subscription_succeeded":
                  this.handleSubscriptionSucceededEvent(e);
                  break;
                case "pusher_internal:subscription_count":
                  this.handleSubscriptionCountEvent(e);
                  break;
                case "pusher_internal:member_added":
                  var o = this.members.addMember(r);
                  this.emit("pusher:member_added", o);
                  break;
                case "pusher_internal:member_removed":
                  var u = this.members.removeMember(r);
                  u && this.emit("pusher:member_removed", u);
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
          var un = s(1), Be = s(0);
          class hn extends qe {
            constructor(e, t, r) {
              super(e, t), this.key = null, this.nacl = r;
            }
            authorize(e, t) {
              super.authorize(e, (r, o) => {
                if (r) {
                  t(r, o);
                  return;
                }
                let u = o.shared_secret;
                if (!u) {
                  t(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(Be.decode)(u), delete o.shared_secret, t(null, o);
              });
            }
            trigger(e, t) {
              throw new G("Client events are not currently supported for encrypted channels");
            }
            handleEvent(e) {
              var t = e.event, r = e.data;
              if (t.indexOf("pusher_internal:") === 0 || t.indexOf("pusher:") === 0) {
                super.handleEvent(e);
                return;
              }
              this.handleEncryptedEvent(t, r);
            }
            handleEncryptedEvent(e, t) {
              if (!this.key) {
                q.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!t.ciphertext || !t.nonce) {
                q.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + t);
                return;
              }
              let r = Object(Be.decode)(t.ciphertext);
              if (r.length < this.nacl.secretbox.overheadLength) {
                q.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${r.length}`);
                return;
              }
              let o = Object(Be.decode)(t.nonce);
              if (o.length < this.nacl.secretbox.nonceLength) {
                q.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${o.length}`);
                return;
              }
              let u = this.nacl.secretbox.open(r, o, this.key);
              if (u === null) {
                q.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (m, w) => {
                  if (m) {
                    q.error(`Failed to make a request to the authEndpoint: ${w}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (u = this.nacl.secretbox.open(r, o, this.key), u === null) {
                    q.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(e, this.getDataToEmit(u));
                });
                return;
              }
              this.emit(e, this.getDataToEmit(u));
            }
            getDataToEmit(e) {
              let t = Object(un.decode)(e);
              try {
                return JSON.parse(t);
              } catch {
                return t;
              }
            }
          }
          class dn extends ge {
            constructor(e, t) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = t, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var r = P.getNetwork();
              r.bind("online", () => {
                this.timeline.info({ netinfo: "online" }), (this.state === "connecting" || this.state === "unavailable") && this.retryIn(0);
              }), r.bind("offline", () => {
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
            send_event(e, t, r) {
              return this.connection ? this.connection.send_event(e, t, r) : !1;
            }
            disconnect() {
              this.disconnectInternally(), this.updateState("disconnected");
            }
            isUsingTLS() {
              return this.usingTLS;
            }
            startConnecting() {
              var e = (t, r) => {
                t ? this.runner = this.strategy.connect(0, e) : r.action === "error" ? (this.emit("error", {
                  type: "HandshakeError",
                  error: r.error
                }), this.timeline.error({ handshakeError: r.error })) : (this.abortConnecting(), this.handshakeCallbacks[r.action](r));
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new x(e || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new x(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new x(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new x(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(e) {
              return H({}, e, {
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
              return H({}, e, {
                connected: (t) => {
                  this.activityTimeout = Math.min(this.options.activityTimeout, t.activityTimeout, t.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(t.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
                }
              });
            }
            buildErrorCallbacks() {
              let e = (t) => (r) => {
                r.error && this.emit("error", { type: "WebSocketError", error: r.error }), t(r);
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
              var r = this.state;
              if (this.state = e, r !== e) {
                var o = e;
                o === "connected" && (o += " with new socket ID " + t.socket_id), q.debug("State changed", r + " -> " + o), this.timeline.info({ state: e, params: t }), this.emit("state_change", { previous: r, current: e }), this.emit(e, t);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class fn {
            constructor() {
              this.channels = {};
            }
            add(e, t) {
              return this.channels[e] || (this.channels[e] = pn(e, t)), this.channels[e];
            }
            all() {
              return z(this.channels);
            }
            find(e) {
              return this.channels[e];
            }
            remove(e) {
              var t = this.channels[e];
              return delete this.channels[e], t;
            }
            disconnect() {
              ee(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function pn(n, e) {
            if (n.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return me.createEncryptedChannel(n, e, e.config.nacl);
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", r = D.buildLogSuffix("encryptedChannelSupport");
              throw new G(`${t}. ${r}`);
            } else {
              if (n.indexOf("private-") === 0)
                return me.createPrivateChannel(n, e);
              if (n.indexOf("presence-") === 0)
                return me.createPresenceChannel(n, e);
              if (n.indexOf("#") === 0)
                throw new y('Cannot create a channel with name "' + n + '".');
              return me.createChannel(n, e);
            }
          }
          var gn = {
            createChannels() {
              return new fn();
            },
            createConnectionManager(n, e) {
              return new dn(n, e);
            },
            createChannel(n, e) {
              return new ze(n, e);
            },
            createPrivateChannel(n, e) {
              return new qe(n, e);
            },
            createPresenceChannel(n, e) {
              return new ln(n, e);
            },
            createEncryptedChannel(n, e, t) {
              return new hn(n, e, t);
            },
            createTimelineSender(n, e) {
              return new on(n, e);
            },
            createHandshake(n, e) {
              return new sn(n, e);
            },
            createAssistantToTheTransportManager(n, e, t) {
              return new nn(n, e, t);
            }
          }, me = gn;
          class at {
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
          class _e {
            constructor(e, t) {
              this.strategies = e, this.loop = !!t.loop, this.failFast = !!t.failFast, this.timeout = t.timeout, this.timeoutLimit = t.timeoutLimit;
            }
            isSupported() {
              return we(this.strategies, N.method("isSupported"));
            }
            connect(e, t) {
              var r = this.strategies, o = 0, u = this.timeout, m = null, w = (I, j) => {
                j ? t(null, j) : (o = o + 1, this.loop && (o = o % r.length), o < r.length ? (u && (u = u * 2, this.timeoutLimit && (u = Math.min(u, this.timeoutLimit))), m = this.tryStrategy(r[o], e, { timeout: u, failFast: this.failFast }, w)) : t(!0));
              };
              return m = this.tryStrategy(r[o], e, { timeout: u, failFast: this.failFast }, w), {
                abort: function() {
                  m.abort();
                },
                forceMinPriority: function(I) {
                  e = I, m && m.forceMinPriority(I);
                }
              };
            }
            tryStrategy(e, t, r, o) {
              var u = null, m = null;
              return r.timeout > 0 && (u = new x(r.timeout, function() {
                m.abort(), o(!0);
              })), m = e.connect(t, function(w, I) {
                w && u && u.isRunning() && !r.failFast || (u && u.ensureAborted(), o(w, I));
              }), {
                abort: function() {
                  u && u.ensureAborted(), m.abort();
                },
                forceMinPriority: function(w) {
                  m.forceMinPriority(w);
                }
              };
            }
          }
          class $e {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return we(this.strategies, N.method("isSupported"));
            }
            connect(e, t) {
              return mn(this.strategies, e, function(r, o) {
                return function(u, m) {
                  if (o[r].error = u, u) {
                    vn(o) && t(!0);
                    return;
                  }
                  ae(o, function(w) {
                    w.forceMinPriority(m.transport.priority);
                  }), t(null, m);
                };
              });
            }
          }
          function mn(n, e, t) {
            var r = ue(n, function(o, u, m, w) {
              return o.connect(e, t(u, w));
            });
            return {
              abort: function() {
                ae(r, yn);
              },
              forceMinPriority: function(o) {
                ae(r, function(u) {
                  u.forceMinPriority(o);
                });
              }
            };
          }
          function vn(n) {
            return Pt(n, function(e) {
              return !!e.error;
            });
          }
          function yn(n) {
            !n.error && !n.aborted && (n.abort(), n.aborted = !0);
          }
          class bn {
            constructor(e, t, r) {
              this.strategy = e, this.transports = t, this.ttl = r.ttl || 1800 * 1e3, this.usingTLS = r.useTLS, this.timeline = r.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var r = this.usingTLS, o = wn(r), u = o && o.cacheSkipCount ? o.cacheSkipCount : 0, m = [this.strategy];
              if (o && o.timestamp + this.ttl >= N.now()) {
                var w = this.transports[o.transport];
                w && (["ws", "wss"].includes(o.transport) || u > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: o.transport,
                  latency: o.latency
                }), m.push(new _e([w], {
                  timeout: o.latency * 2 + 1e3,
                  failFast: !0
                }))) : u++);
              }
              var I = N.now(), j = m.pop().connect(e, function U(W, Me) {
                W ? (ct(r), m.length > 0 ? (I = N.now(), j = m.pop().connect(e, U)) : t(W)) : (kn(r, Me.transport.name, N.now() - I, u), t(null, Me));
              });
              return {
                abort: function() {
                  j.abort();
                },
                forceMinPriority: function(U) {
                  e = U, j && j.forceMinPriority(U);
                }
              };
            }
          }
          function Ve(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function wn(n) {
            var e = P.getLocalStorage();
            if (e)
              try {
                var t = e[Ve(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                ct(n);
              }
            return null;
          }
          function kn(n, e, t, r) {
            var o = P.getLocalStorage();
            if (o)
              try {
                o[Ve(n)] = Ee({
                  timestamp: N.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: r
                });
              } catch {
              }
          }
          function ct(n) {
            var e = P.getLocalStorage();
            if (e)
              try {
                delete e[Ve(n)];
              } catch {
              }
          }
          class Oe {
            constructor(e, { delay: t }) {
              this.strategy = e, this.options = { delay: t };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var r = this.strategy, o, u = new x(this.options.delay, function() {
                o = r.connect(e, t);
              });
              return {
                abort: function() {
                  u.ensureAborted(), o && o.abort();
                },
                forceMinPriority: function(m) {
                  e = m, o && o.forceMinPriority(m);
                }
              };
            }
          }
          class Te {
            constructor(e, t, r) {
              this.test = e, this.trueBranch = t, this.falseBranch = r;
            }
            isSupported() {
              var e = this.test() ? this.trueBranch : this.falseBranch;
              return e.isSupported();
            }
            connect(e, t) {
              var r = this.test() ? this.trueBranch : this.falseBranch;
              return r.connect(e, t);
            }
          }
          class _n {
            constructor(e) {
              this.strategy = e;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var r = this.strategy.connect(e, function(o, u) {
                u && r.abort(), t(o, u);
              });
              return r;
            }
          }
          function Re(n) {
            return function() {
              return n.isSupported();
            };
          }
          var Sn = function(n, e, t) {
            var r = {};
            function o(bt, _r, Sr, Cr, Tr) {
              var wt = t(n, bt, _r, Sr, Cr, Tr);
              return r[bt] = wt, wt;
            }
            var u = Object.assign({}, e, {
              hostNonTLS: n.wsHost + ":" + n.wsPort,
              hostTLS: n.wsHost + ":" + n.wssPort,
              httpPath: n.wsPath
            }), m = Object.assign({}, u, {
              useTLS: !0
            }), w = Object.assign({}, e, {
              hostNonTLS: n.httpHost + ":" + n.httpPort,
              hostTLS: n.httpHost + ":" + n.httpsPort,
              httpPath: n.httpPath
            }), I = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, j = new at({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), U = new at({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), W = o("ws", "ws", 3, u, j), Me = o("wss", "ws", 3, m, j), vr = o("sockjs", "sockjs", 1, w), ft = o("xhr_streaming", "xhr_streaming", 1, w, U), yr = o("xdr_streaming", "xdr_streaming", 1, w, U), pt = o("xhr_polling", "xhr_polling", 1, w), br = o("xdr_polling", "xdr_polling", 1, w), gt = new _e([W], I), wr = new _e([Me], I), kr = new _e([vr], I), mt = new _e([
              new Te(Re(ft), ft, yr)
            ], I), vt = new _e([
              new Te(Re(pt), pt, br)
            ], I), yt = new _e([
              new Te(Re(mt), new $e([
                mt,
                new Oe(vt, { delay: 4e3 })
              ]), vt)
            ], I), Je = new Te(Re(yt), yt, kr), Ke;
            return e.useTLS ? Ke = new $e([
              gt,
              new Oe(Je, { delay: 2e3 })
            ]) : Ke = new $e([
              gt,
              new Oe(wr, { delay: 2e3 }),
              new Oe(Je, { delay: 5e3 })
            ]), new bn(new _n(new Te(Re(W), Ke, Je)), r, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, Cn = Sn, Tn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), L.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
              n.hooks.isInitialized() ? (n.changeState("initialized"), t(!0)) : (e && n.onError(e), n.onClose(), t(!1));
            })) : n.onClose();
          }, Rn = {
            getRequest: function(n) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                n.emit("error", new R()), n.close();
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
          }, In = Rn;
          const An = 256 * 1024;
          class Pn extends ge {
            constructor(e, t, r) {
              super(), this.hooks = e, this.method = t, this.url = r;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, P.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (P.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
            }
            onChunk(e, t) {
              for (; ; ) {
                var r = this.advanceBuffer(t);
                if (r)
                  this.emit("chunk", { status: e, data: r });
                else
                  break;
              }
              this.isBufferTooLong(t) && this.emit("buffer_too_long");
            }
            advanceBuffer(e) {
              var t = e.slice(this.position), r = t.indexOf(`
`);
              return r !== -1 ? (this.position += r + 1, t.slice(0, r)) : null;
            }
            isBufferTooLong(e) {
              return this.position === e.length && e.length > An;
            }
          }
          var We;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(We || (We = {}));
          var Se = We, Ln = 1;
          class En {
            constructor(e, t) {
              this.hooks = e, this.session = ut(1e3) + "/" + Mn(8), this.location = xn(t), this.readyState = Se.CONNECTING, this.openStream();
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
              if (this.readyState === Se.OPEN)
                try {
                  return P.createSocketRequest("POST", lt(On(this.location, this.session))).start(e), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(e, t, r) {
              this.closeStream(), this.readyState = Se.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: t,
                wasClean: r
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === Se.OPEN && this.onActivity();
                var t, r = e.data.slice(0, 1);
                switch (r) {
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
              this.readyState === Se.CONNECTING ? (e && e.hostname && (this.location.base = Nn(this.location.base, e.hostname)), this.readyState = Se.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
            }
            onEvent(e) {
              this.readyState === Se.OPEN && this.onmessage && this.onmessage({ data: e });
            }
            onActivity() {
              this.onactivity && this.onactivity();
            }
            onError(e) {
              this.onerror && this.onerror(e);
            }
            openStream() {
              this.stream = P.createSocketRequest("POST", lt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                N.defer(() => {
                  this.onError(e), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function xn(n) {
            var e = /([^\?]*)\/*(\??.*)/.exec(n);
            return {
              base: e[1],
              queryString: e[2]
            };
          }
          function On(n, e) {
            return n.base + "/" + e + "/xhr_send";
          }
          function lt(n) {
            var e = n.indexOf("?") === -1 ? "?" : "&";
            return n + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + Ln++;
          }
          function Nn(n, e) {
            var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);
            return t[1] + e + t[3];
          }
          function ut(n) {
            return P.randomInt(n);
          }
          function Mn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(ut(32).toString(32));
            return e.join("");
          }
          var Dn = En, jn = {
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
          }, Un = jn, Fn = {
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
          }, Hn = Fn, zn = {
            getRequest: function(n) {
              var e = P.getXHRAPI(), t = new e();
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
          }, qn = zn, Bn = {
            createStreamingSocket(n) {
              return this.createSocket(Un, n);
            },
            createPollingSocket(n) {
              return this.createSocket(Hn, n);
            },
            createSocket(n, e) {
              return new Dn(n, e);
            },
            createXHR(n, e) {
              return this.createRequest(qn, n, e);
            },
            createRequest(n, e, t) {
              return new Pn(n, e, t);
            }
          }, ht = Bn;
          ht.createXDR = function(n, e) {
            return this.createRequest(In, n, e);
          };
          var $n = ht, Vn = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: c,
            DependenciesReceivers: M,
            getDefaultStrategy: Cn,
            Transports: Zt,
            transportConnectionInitializer: Tn,
            HTTPFactory: $n,
            TimelineTransport: Ht,
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
              window.JSON ? e() : L.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: he, jsonp: Mt };
            },
            onDocumentBody(n) {
              document.body ? n() : setTimeout(() => {
                this.onDocumentBody(n);
              }, 0);
            },
            createJSONPRequest(n, e) {
              return new jt(n, e);
            },
            createScriptRequest(n) {
              return new Dt(n);
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
              return tn;
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
          }, P = Vn, Xe;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(Xe || (Xe = {}));
          var Ne = Xe;
          class Wn {
            constructor(e, t, r) {
              this.key = e, this.session = t, this.events = [], this.options = r || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(H({}, t, { timestamp: N.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(Ne.ERROR, e);
            }
            info(e) {
              this.log(Ne.INFO, e);
            }
            debug(e) {
              this.log(Ne.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, t) {
              var r = H({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], e(r, (o, u) => {
                o || this.sent++, t && t(o, u);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class Xn {
            constructor(e, t, r, o) {
              this.name = e, this.priority = t, this.transport = r, this.options = o || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(e, t) {
              if (this.isSupported()) {
                if (this.priority < e)
                  return dt(new F(), t);
              } else return dt(new ce(), t);
              var r = !1, o = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), u = null, m = function() {
                o.unbind("initialized", m), o.connect();
              }, w = function() {
                u = me.createHandshake(o, function(W) {
                  r = !0, U(), t(null, W);
                });
              }, I = function(W) {
                U(), t(W);
              }, j = function() {
                U();
                var W;
                W = Ee(o), t(new X(W));
              }, U = function() {
                o.unbind("initialized", m), o.unbind("open", w), o.unbind("error", I), o.unbind("closed", j);
              };
              return o.bind("initialized", m), o.bind("open", w), o.bind("error", I), o.bind("closed", j), o.initialize(), {
                abort: () => {
                  r || (U(), u ? u.close() : o.close());
                },
                forceMinPriority: (W) => {
                  r || this.priority < W && (u ? u.close() : o.close());
                }
              };
            }
          }
          function dt(n, e) {
            return N.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Gn } = P;
          var Jn = function(n, e, t, r, o, u) {
            var m = Gn[t];
            if (!m)
              throw new ne(t);
            var w = (!n.enabledTransports || Z(n.enabledTransports, e) !== -1) && (!n.disabledTransports || Z(n.disabledTransports, e) === -1), I;
            return w ? (o = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, o), I = new Xn(e, r, u ? u.getAssistant(m) : m, o)) : I = Kn, I;
          }, Kn = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = N.defer(function() {
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
          function Qn(n) {
            if (n == null)
              throw "You must pass an options object";
            if (n.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in n && q.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const Yn = (n, e) => {
            var t = "socket_id=" + encodeURIComponent(n.socketId);
            for (var r in e.params)
              t += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(e.params[r]);
            if (e.paramsProvider != null) {
              let o = e.paramsProvider();
              for (var r in o)
                t += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(o[r]);
            }
            return t;
          };
          var Zn = (n) => {
            if (typeof P.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = Yn(e, n);
              P.getAuthorizers()[n.transport](P, r, n, _.UserAuthentication, t);
            };
          };
          const er = (n, e) => {
            var t = "socket_id=" + encodeURIComponent(n.socketId);
            t += "&channel_name=" + encodeURIComponent(n.channelName);
            for (var r in e.params)
              t += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(e.params[r]);
            if (e.paramsProvider != null) {
              let o = e.paramsProvider();
              for (var r in o)
                t += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(o[r]);
            }
            return t;
          };
          var tr = (n) => {
            if (typeof P.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = er(e, n);
              P.getAuthorizers()[n.transport](P, r, n, _.ChannelAuthorization, t);
            };
          };
          const nr = (n, e, t) => {
            const r = {
              authTransport: e.transport,
              authEndpoint: e.endpoint,
              auth: {
                params: e.params,
                headers: e.headers
              }
            };
            return (o, u) => {
              const m = n.channel(o.channelName);
              t(m, r).authorize(o.socketId, u);
            };
          };
          function rr(n, e) {
            let t = {
              activityTimeout: n.activityTimeout || k.activityTimeout,
              cluster: n.cluster,
              httpPath: n.httpPath || k.httpPath,
              httpPort: n.httpPort || k.httpPort,
              httpsPort: n.httpsPort || k.httpsPort,
              pongTimeout: n.pongTimeout || k.pongTimeout,
              statsHost: n.statsHost || k.stats_host,
              unavailableTimeout: n.unavailableTimeout || k.unavailableTimeout,
              wsPath: n.wsPath || k.wsPath,
              wsPort: n.wsPort || k.wsPort,
              wssPort: n.wssPort || k.wssPort,
              enableStats: cr(n),
              httpHost: ir(n),
              useTLS: ar(n),
              wsHost: sr(n),
              userAuthenticator: lr(n),
              channelAuthorizer: hr(n, e)
            };
            return "disabledTransports" in n && (t.disabledTransports = n.disabledTransports), "enabledTransports" in n && (t.enabledTransports = n.enabledTransports), "ignoreNullOrigin" in n && (t.ignoreNullOrigin = n.ignoreNullOrigin), "timelineParams" in n && (t.timelineParams = n.timelineParams), "nacl" in n && (t.nacl = n.nacl), t;
          }
          function ir(n) {
            return n.httpHost ? n.httpHost : n.cluster ? `sockjs-${n.cluster}.pusher.com` : k.httpHost;
          }
          function sr(n) {
            return n.wsHost ? n.wsHost : or(n.cluster);
          }
          function or(n) {
            return `ws-${n}.pusher.com`;
          }
          function ar(n) {
            return P.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
          }
          function cr(n) {
            return "enableStats" in n ? n.enableStats : "disableStats" in n ? !n.disableStats : !1;
          }
          function lr(n) {
            const e = Object.assign(Object.assign({}, k.userAuthentication), n.userAuthentication);
            return "customHandler" in e && e.customHandler != null ? e.customHandler : Zn(e);
          }
          function ur(n, e) {
            let t;
            return "channelAuthorization" in n ? t = Object.assign(Object.assign({}, k.channelAuthorization), n.channelAuthorization) : (t = {
              transport: n.authTransport || k.authTransport,
              endpoint: n.authEndpoint || k.authEndpoint
            }, "auth" in n && ("params" in n.auth && (t.params = n.auth.params), "headers" in n.auth && (t.headers = n.auth.headers)), "authorizer" in n && (t.customHandler = nr(e, t, n.authorizer))), t;
          }
          function hr(n, e) {
            const t = ur(n, e);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : tr(t);
          }
          class dr extends ge {
            constructor(e) {
              super(function(t, r) {
                q.debug(`No callbacks on watchlist events for ${t}`);
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
          function fr() {
            let n, e;
            return { promise: new Promise((r, o) => {
              n = r, e = o;
            }), resolve: n, reject: e };
          }
          var pr = fr;
          class gr extends ge {
            constructor(e) {
              super(function(t, r) {
                q.debug("No callbacks on user for " + t);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (t, r) => {
                if (t) {
                  q.warn(`Error during signin: ${t}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: r.auth,
                  user_data: r.user_data
                });
              }, this.pusher = e, this.pusher.connection.bind("state_change", ({ previous: t, current: r }) => {
                t !== "connected" && r === "connected" && this._signin(), t === "connected" && r !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new dr(e), this.pusher.connection.bind("message", (t) => {
                var r = t.event;
                r === "pusher:signin_success" && this._onSigninSuccess(t.data), this.serverToUserChannel && this.serverToUserChannel.name === t.channel && this.serverToUserChannel.handleEvent(t);
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
                q.error(`Failed parsing user data after signin: ${e.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                q.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const e = (t) => {
                t.subscriptionPending && t.subscriptionCancelled ? t.reinstateSubscription() : !t.subscriptionPending && this.pusher.connection.state === "connected" && t.subscribe();
              };
              this.serverToUserChannel = new ze(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((t, r) => {
                t.indexOf("pusher_internal:") === 0 || t.indexOf("pusher:") === 0 || this.emit(t, r);
              }), e(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: e, resolve: t } = pr();
              e.done = !1;
              const r = () => {
                e.done = !0;
              };
              e.then(r).catch(r), this.signinDonePromise = e, this._signinDoneResolve = t;
            }
          }
          class Y {
            static ready() {
              Y.isReady = !0;
              for (var e = 0, t = Y.instances.length; e < t; e++)
                Y.instances[e].connect();
            }
            static getClientFeatures() {
              return fe(re({ ws: P.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              mr(e), Qn(t), this.key = e, this.config = rr(t, this), this.channels = me.createChannels(), this.global_emitter = new ge(), this.sessionID = P.randomInt(1e9), this.timeline = new Wn(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: Y.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: Ne.INFO,
                version: k.VERSION
              }), this.config.enableStats && (this.timelineSender = me.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + P.TimelineTransport.name
              }));
              var r = (o) => P.getDefaultStrategy(this.config, o, Jn);
              this.connection = me.createConnectionManager(this.key, {
                getStrategy: r,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (o) => {
                var u = o.event, m = u.indexOf("pusher_internal:") === 0;
                if (o.channel) {
                  var w = this.channel(o.channel);
                  w && w.handleEvent(o);
                }
                m || this.global_emitter.emit(o.event, o.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (o) => {
                q.warn(o);
              }), Y.instances.push(this), this.timeline.info({ instances: Y.instances.length }), this.user = new gr(this), Y.isReady && this.connect();
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
                this.timelineSenderTimer = new $(6e4, function() {
                  t.send(e);
                });
              }
            }
            disconnect() {
              this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
            }
            bind(e, t, r) {
              return this.global_emitter.bind(e, t, r), this;
            }
            unbind(e, t, r) {
              return this.global_emitter.unbind(e, t, r), this;
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
            send_event(e, t, r) {
              return this.connection.send_event(e, t, r);
            }
            shouldUseTLS() {
              return this.config.useTLS;
            }
            signin() {
              this.user.signin();
            }
          }
          Y.instances = [], Y.isReady = !1, Y.logToConsole = !1, Y.Runtime = P, Y.ScriptReceivers = P.ScriptReceivers, Y.DependenciesReceivers = P.DependenciesReceivers, Y.auth_callbacks = P.auth_callbacks;
          var Ge = a.default = Y;
          function mr(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          P.setup(Y);
        }
        /******/
      ])
    );
  });
})(At);
var Fr = At.exports;
const Hr = /* @__PURE__ */ Ur(Fr);
window.Pusher = Hr;
const ie = "cpr-agent";
class zr {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.hookIds = {};
  }
  /**
   * INTERCEPTOR: Wraps renderTemplate to steal the CPRRoll object before it vanishes.
   */
  async rollAndCapture(h, i) {
    return console.log(`%c[Bridge] 🕵️‍♂️ Starting Render Interceptor for Actor ${h}`, "color: #00ffff; font-weight: bold;"), new Promise(async (a, s) => {
      let l = !1;
      const c = renderTemplate, E = function(k, O) {
        return k && typeof k == "string" && k.includes("rollcard") && (console.log(`%c[Bridge] 🎯 Intercepted Render: ${k}`, "color: #00ff00;", O), l = !0, renderTemplate = c, a({
          success: !0,
          total: O.resultTotal,
          isCriticalSuccess: O.wasCritSuccess ? O.wasCritSuccess() : O.isCriticalSuccess || !1,
          isCriticalFailure: O.wasCritFail ? O.wasCritFail() : O.isCriticalFailure || !1,
          label: O.rollTitle,
          rawRoll: O
          // <--- HERE IS YOUR FULL OBJECT
        })), c.apply(this, arguments);
      };
      renderTemplate = E, setTimeout(() => {
        l || (renderTemplate = c, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), a({ success: !1, error: "Timed out waiting for render" }));
      }, 5e3);
      try {
        await i();
      } catch {
        renderTemplate = c, a({ success: !1, error: "Trigger failed" });
      }
    });
  }
  /**
   * Clean up before reloading
   */
  destroy() {
    this.echo && this.echo.disconnect();
    for (let [h, i] of Object.entries(this.hookIds))
      Hooks.off(h, i);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  /**
   * Initialize Settings
   */
  registerSettings() {
    game.settings.register(ie, "apiUrl", {
      name: "Relay Controller URL",
      hint: "The base URL of your Agent (e.g., http://cyberpunk.ddev.site). Do NOT include port 8080 here.",
      scope: "world",
      config: !0,
      type: String,
      default: "http://localhost",
      onChange: () => this.reconnect()
    }), game.settings.register(ie, "reverbPort", {
      name: "Reverb Port",
      hint: "The port your Reverb server is running on (default: 8080). If using DDEV with SSL, try 8081.",
      scope: "world",
      config: !0,
      type: Number,
      default: 8080,
      onChange: () => this.reconnect()
    }), game.settings.register(ie, "reverbUseSSL", {
      name: "Reverb Use SSL",
      hint: "Enable if using https/wss for Reverb.",
      scope: "world",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: () => this.reconnect()
    }), game.settings.register(ie, "reverbKey", {
      name: "Reverb App Key",
      hint: "The App Key from your .env file.",
      scope: "world",
      config: !0,
      type: String,
      default: "itdsiqtx8cpskowawl1p",
      onChange: () => this.reconnect()
    }), game.settings.register(ie, "apiKey", {
      name: "API Key (Sanctum Token)",
      hint: "Generate this in your Cyberpunk Agent dashboard.",
      scope: "world",
      // or 'client' if each player has their own
      config: !0,
      type: String,
      default: "",
      onChange: () => this.reconnect()
    }), game.settings.register(ie, "debugMode", {
      name: "Debug Mode",
      hint: "Log all socket events to console",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1
    });
  }
  /**
   * Connect to Laravel Reverb
   */
  connect() {
    const h = game.settings.get(ie, "apiUrl"), i = game.settings.get(ie, "apiKey"), a = game.settings.get(ie, "debugMode"), s = game.settings.get(ie, "reverbPort") || 8080, l = game.settings.get(ie, "reverbUseSSL") || !1;
    if (!i || !h) {
      ui.notifications.warn("Cyberpunk Bridge: Missing API URL or Key.");
      return;
    }
    this.echo && this.echo.disconnect();
    let c;
    try {
      c = new URL(h);
    } catch (E) {
      console.error("Invalid URL", E);
      return;
    }
    console.log(`Connecting to Cyberpunk Agent Relay at ${c.hostname}:${s}...`), this.echo = new jr({
      broadcaster: "reverb",
      key: game.settings.get(ie, "reverbKey") || "itdsiqtx8cpskowawl1p",
      wsHost: c.hostname,
      wsPort: s,
      wssPort: s,
      forceTLS: l,
      enabledTransports: l ? ["ws", "wss"] : ["ws"],
      disableStats: !0,
      authEndpoint: `${h.replace(/\/$/, "")}/api/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: "Bearer " + i,
          Accept: "application/json"
        }
      }
    }), window.CyberpunkSocket = this.echo, this.echo.connector.pusher.connection.bind("connected", () => {
      this.isConnected = !0, ui.notifications.info("Cyberpunk Bridge: Online"), a && console.log("Cyberpunk Bridge: Connection Established");
    }), this.echo.connector.pusher.connection.bind("disconnected", () => {
      this.isConnected = !1, a && console.warn("Cyberpunk Bridge: Disconnected");
    }), this.listen();
  }
  /**
   * Listen for Private Channel Events
   */
  listen() {
    game.user.id, this.echo.private("cpr-agent").listen(".GameUpdate", (h) => {
      console.log("Incoming Data:", h), this.handleIncomingData(h);
    }), this.registerGlobalHooks();
  }
  registerGlobalHooks() {
    const h = async (i, a) => {
      this.isConnected && (!i || !["character", "mook"].includes(i.type) || (console.log(`%c[Bridge] 🔄 Syncing change for ${i.name}`, "color: #ffaa00;", a), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: i.id,
        delta: a,
        success: !0
      })));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (i, a, s, l) => {
      if (a.system) {
        const c = {}, E = (k, O = "system.") => {
          for (let M in k) {
            const L = k[M];
            L !== null && typeof L == "object" && !Array.isArray(L) && !(L instanceof foundry.utils.Color) ? E(L, `${O}${M}.`) : c[`${O}${M}`] = L;
          }
        };
        E(a.system), h(i, c);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (i, a, s, l) => {
      const c = i.parent;
      if (c instanceof Actor) {
        const E = {}, k = `items.${i.id}.`;
        if (a.system) {
          const O = (M, L = `${k}system.`) => {
            for (let A in M) {
              const T = M[A];
              T !== null && typeof T == "object" && !Array.isArray(T) && !(T instanceof foundry.utils.Color) ? O(T, `${L}${A}.`) : E[`${L}${A}`] = T;
            }
          };
          O(a.system);
        }
        for (let O in a)
          O !== "system" && O !== "_id" && (E[`${k}${O}`] = a[O]);
        Object.keys(E).length > 0 && h(c, E);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (i, a, s) => {
      const l = i.parent;
      if (l instanceof Actor) {
        const c = {
          [`items.+${i.id}`]: i.toObject()
        };
        h(l, c);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (i, a, s) => {
      const l = i.parent;
      if (l instanceof Actor) {
        const c = {
          [`items.${i.id}`]: null
        };
        h(l, c);
      }
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(h) {
    let i = game.settings.get(ie, "apiUrl");
    const a = game.settings.get(ie, "apiKey");
    if (!(!i || !a)) {
      i.endsWith("/") && (i = i.slice(0, -1));
      try {
        const s = await fetch(`${i}/api/foundry/callback`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${a}`,
            Accept: "application/json"
          },
          body: JSON.stringify(h)
        });
        s.ok || console.error("Cyberpunk Bridge: Callback failed", s.statusText);
      } catch (s) {
        console.error("Cyberpunk Bridge: Error sending callback", s);
      }
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(h) {
    var E, k, O, M, L, A, T, D, _, v, y, R, F, X, G, ne, ce, te, le, he, Pe, ve, ye, Le;
    const i = h.payload || h;
    console.log("Received Order:", i);
    const a = i.type, s = i.actorId, l = i.tokenId, c = i.requestId;
    switch (a) {
      case "UPDATE_ACTOR": {
        const d = game.actors.get(s);
        if (!d) {
          console.warn(`⚠️ Actor ID ${s} not found in this world.`);
          return;
        }
        await d.update(i.changes), ui.notifications.info(`💾 Sync: ${d.name} updated.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: s, success: !0, requestId: c });
        break;
      }
      case "ITEM_EQUIP": {
        const d = game.actors.get(s);
        if (d) {
          const p = d.items.get(i.itemId);
          if (p) {
            const f = `items.${i.itemId}.system.equipped`;
            await p.update({ "system.equipped": i.state }), await this.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: { [f]: i.state }, success: !0, requestId: c });
          }
        }
        break;
      }
      case "INSTALL_PROGRAM": {
        const d = game.actors.get(s);
        if (!d) return;
        const p = d.items.get(i.cyberdeckId), f = d.items.get(i.programId);
        if (!p || !f) return;
        const b = p.system.installedItems.usedSlots || 0, S = p.system.installedItems.slots || 0, B = f.system.size || 1;
        if (b + B > S) {
          ui.notifications.warn("Not enough memory slots on cyberdeck.");
          return;
        }
        const C = p.system.installedItems.list || [];
        if (C.includes(i.programId)) return;
        const x = [...C, i.programId], $ = b + B;
        await p.update({
          "system.installedItems.list": x,
          "system.installedItems.usedSlots": $
        }), await this.sendResponse({
          type: "SHEET_DELTA",
          actorId: s,
          delta: {
            [`items.${i.cyberdeckId}.system.installedItems.list`]: x,
            [`items.${i.cyberdeckId}.system.installedItems.usedSlots`]: $
          },
          success: !0,
          requestId: c
        });
        break;
      }
      case "REMOVE_PROGRAM": {
        const d = game.actors.get(s);
        if (!d) return;
        const p = d.items.get(i.cyberdeckId), f = d.items.get(i.programId);
        if (!p) return;
        const b = p.system.installedItems.list || [];
        if (!b.includes(i.programId)) return;
        const S = b.filter((V) => V !== i.programId), B = f && f.system.size || 1, C = p.system.installedItems.usedSlots || 0, x = Math.max(0, C - B);
        await p.update({
          "system.installedItems.list": S,
          "system.installedItems.usedSlots": x
        });
        const $ = {
          [`items.${i.cyberdeckId}.system.installedItems.list`]: S,
          [`items.${i.cyberdeckId}.system.installedItems.usedSlots`]: x
        };
        f && f.system.isRezzed && (await f.update({ "system.isRezzed": !1 }), $[`items.${i.programId}.system.isRezzed`] = !1), await this.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: $, success: !0, requestId: c });
        break;
      }
      case "TOGGLE_REZ": {
        const d = game.actors.get(s);
        if (d) {
          const p = d.items.get(i.programId);
          p && (await p.update({ "system.isRezzed": i.targetState }), await this.sendResponse({
            type: "SHEET_DELTA",
            actorId: s,
            delta: { [`items.${i.programId}.system.isRezzed`]: i.targetState },
            success: !0,
            requestId: c
          }));
        }
        break;
      }
      case "DAMAGE_ROLL": {
        const d = game.actors.get(s), p = d.items.get(i.weaponId);
        if (d && p) {
          const f = async () => {
            await d.sheet._onRoll({
              "data-roll-type": "damage",
              "data-item-id": p.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "damage",
                "data-item-id": p.id
              }
            });
          }, b = await this.rollAndCapture(s, f);
          b.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: s,
            total: b.total,
            isCriticalSuccess: b.isCriticalSuccess,
            isCriticalFailure: b.isCriticalFailure,
            label: `${p.name} (Damage)`,
            rawRoll: {
              total: b.total,
              isCriticalSuccess: b.isCriticalSuccess,
              isCriticalFailure: b.isCriticalFailure,
              label: b.label,
              resultTotal: (E = b.rawRoll) == null ? void 0 : E.resultTotal,
              rollTitle: (k = b.rawRoll) == null ? void 0 : k.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DEATH_SAVE": {
        const d = game.actors.get(s);
        if (d) {
          const p = async () => {
            await d.sheet._onRoll({
              "data-roll-type": "deathsave",
              "data-roll-title": "Death Save",
              type: "click",
              currentTarget: {
                "data-roll-type": "deathsave",
                "data-roll-title": "Death Save"
              }
            });
          }, f = await this.rollAndCapture(s, p);
          if (f.success) {
            const b = d.system.derivedStats.deathsave || {};
            await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: s,
              total: f.total,
              isCriticalSuccess: f.isCriticalSuccess,
              isCriticalFailure: f.isCriticalFailure,
              label: "Death Save",
              rawRoll: {
                total: f.total,
                isCriticalSuccess: f.isCriticalSuccess,
                isCriticalFailure: f.isCriticalFailure,
                label: f.label,
                resultTotal: (O = f.rawRoll) == null ? void 0 : O.resultTotal,
                rollTitle: (M = f.rawRoll) == null ? void 0 : M.rollTitle
              },
              success: !0
            }), await this.sendResponse({
              type: "SHEET_DELTA",
              actorId: s,
              delta: { "system.derivedStats.deathsave": b },
              tab: "stats",
              success: !0
            });
          }
        }
        break;
      }
      case "FACEDOWN_ROLL": {
        const d = game.actors.get(s), p = async () => {
          await d.sheet._onRoll({
            "data-roll-type": "facedown",
            "data-roll-title": "Face Down",
            type: "click",
            currentTarget: {
              "data-roll-type": "facedown",
              "data-roll-title": "Face Down"
            }
          });
        }, f = await this.rollAndCapture(s, p);
        f.success && await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: c,
          actorId: s,
          total: f.total,
          isCriticalSuccess: f.isCriticalSuccess,
          isCriticalFailure: f.isCriticalFailure,
          rawRoll: {
            total: f.total,
            isCriticalSuccess: f.isCriticalSuccess,
            isCriticalFailure: f.isCriticalFailure,
            label: f.label,
            resultTotal: (L = f.rawRoll) == null ? void 0 : L.resultTotal,
            rollTitle: (A = f.rawRoll) == null ? void 0 : A.rollTitle
          },
          success: !0
        });
        break;
      }
      case "INITIATIVE_ROLL": {
        const d = game.actors.get(s);
        if (d) {
          const p = async () => {
            await d.rollInitiative();
          }, f = await this.rollAndCapture(s, p);
          f.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: s,
            total: f.total,
            isCriticalSuccess: f.isCriticalSuccess,
            isCriticalFailure: f.isCriticalFailure,
            label: "Initiative",
            rawRoll: {
              total: f.total,
              isCriticalSuccess: f.isCriticalSuccess,
              isCriticalFailure: f.isCriticalFailure,
              label: f.label,
              resultTotal: (T = f.rawRoll) == null ? void 0 : T.resultTotal,
              rollTitle: (D = f.rawRoll) == null ? void 0 : D.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "PROGRAM_ROLL": {
        const d = game.actors.get(s);
        if (d) {
          const p = document.createElement("a");
          p.dataset.rollType = i.rollType, p.dataset.cyberdeckId = i.cyberdeckId, p.dataset.rollTitle = i.programName, p.dataset.interfaceAbility = i.programName, p.dataset.itemId = i.cyberdeckId, p.dataset.programId = i.programId, p.dataset.executionType = i.executionType;
          const f = async () => {
            await d.sheet._onRoll({
              type: "click",
              currentTarget: p
            });
          }, b = await this.rollAndCapture(s, f);
          b.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: s,
            total: b.total,
            isCriticalSuccess: b.isCriticalSuccess,
            isCriticalFailure: b.isCriticalFailure,
            label: i.programName,
            rawRoll: {
              total: b.total,
              isCriticalSuccess: b.isCriticalSuccess,
              isCriticalFailure: b.isCriticalFailure,
              label: b.label,
              resultTotal: (_ = b.rawRoll) == null ? void 0 : _.resultTotal,
              rollTitle: (v = b.rawRoll) == null ? void 0 : v.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "ROLE_ROLL": {
        const d = game.actors.get(s);
        if (d) {
          const p = d.items.getName(i.itemName);
          if (p) {
            const f = {
              "data-roll-type": "roleAbility",
              "data-roll-title": i.label,
              "data-item-id": p.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "roleAbility",
                "data-roll-title": i.label,
                "data-item-id": p.id,
                "data-item-subtype": i.label
              }
            };
            i.isAbility && (f["data-roll-subtype"] = "subRoleAbility", f["data-role-name"] = i.label, f.currentTarget["data-roll-subtype"] = "subRoleAbility", f.currentTarget["data-role-name"] = i.label);
            const b = async () => {
              await d.sheet._onRoll(f);
            }, S = await this.rollAndCapture(s, b);
            S.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: s,
              total: S.total,
              isCriticalSuccess: S.isCriticalSuccess,
              isCriticalFailure: S.isCriticalFailure,
              label: i.label,
              rawRoll: {
                total: S.total,
                isCriticalSuccess: S.isCriticalSuccess,
                isCriticalFailure: S.isCriticalFailure,
                label: S.label,
                resultTotal: (y = S.rawRoll) == null ? void 0 : y.resultTotal,
                rollTitle: (R = S.rawRoll) == null ? void 0 : R.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "SKILL_ROLL": {
        const d = game.actors.get(s);
        if (d) {
          const p = d.items.getName(i.label);
          if (p) {
            const f = async () => {
              await d.sheet._onRoll({
                "data-roll-type": "skill",
                "data-roll-title": i.label,
                "data-item-id": p.id,
                type: "click",
                currentTarget: {
                  "data-roll-type": "skill",
                  "data-roll-title": i.label,
                  "data-item-id": p.id
                }
              });
            }, b = await this.rollAndCapture(s, f);
            b.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: s,
              total: b.total,
              isCriticalSuccess: b.isCriticalSuccess,
              isCriticalFailure: b.isCriticalFailure,
              label: i.label,
              rawRoll: {
                total: b.total,
                isCriticalSuccess: b.isCriticalSuccess,
                isCriticalFailure: b.isCriticalFailure,
                label: b.label,
                resultTotal: (F = b.rawRoll) == null ? void 0 : F.resultTotal,
                rollTitle: (X = b.rawRoll) == null ? void 0 : X.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "STAT_ROLL": {
        const d = game.actors.get(s);
        if (d) {
          const p = async () => {
            await d.sheet._onRoll({
              "data-roll-type": "stat",
              "data-roll-title": i.label,
              type: "click",
              currentTarget: {
                "data-roll-type": "stat",
                "data-roll-title": i.label
              }
            });
          }, f = await this.rollAndCapture(s, p);
          f.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: s,
            total: f.total,
            isCriticalSuccess: f.isCriticalSuccess,
            isCriticalFailure: f.isCriticalFailure,
            label: i.label,
            rawRoll: {
              total: f.total,
              isCriticalSuccess: f.isCriticalSuccess,
              isCriticalFailure: f.isCriticalFailure,
              label: f.label,
              resultTotal: (G = f.rawRoll) == null ? void 0 : G.resultTotal,
              rollTitle: (ne = f.rawRoll) == null ? void 0 : ne.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DICE_ROLL": {
        c && this.activeRequests.set(c, { actorId: s, timestamp: Date.now() });
        const d = new Roll(i.formula);
        await d.evaluate(), await d.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: game.actors.get(s) }),
          flavor: i.flavor
        }), await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: c,
          actorId: s,
          total: d.total,
          isCriticalSuccess: d.isCriticalSuccess || !1,
          isCriticalFailure: d.isCriticalFailure || !1,
          label: i.flavor || "Dice Roll",
          rawRoll: {
            rollTitle: i.flavor || "Dice Roll",
            _roll: d,
            formula: d.formula,
            resultTotal: d.total
          },
          success: !0
        });
        break;
      }
      case "MOVE_TOKEN": {
        const d = canvas.tokens.get(l);
        if (d) {
          let p = {};
          i.direction === "up" ? p.y = d.document.y - canvas.grid.size : i.direction === "down" ? p.y = d.document.y + canvas.grid.size : i.direction === "left" ? p.x = d.document.x - canvas.grid.size : i.direction === "right" && (p.x = d.document.x + canvas.grid.size), await d.document.update(p), setTimeout(async () => {
            const f = { tokenId: l, requestId: c || "move-refresh" };
            await this.handleIncomingData({ type: "LIST_VISIBLE_TOKENS", ...f }), Array.from(game.user.targets)[0] && i.weaponId && await this.handleIncomingData({ type: "GET_DV_INFO", ...f, weaponId: i.weaponId });
          }, 200), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: l, success: !0, requestId: c });
        }
        break;
      }
      case "RELOAD_WEAPON": {
        const d = game.actors.get(s);
        if (d) {
          const p = d.items.get(i.weaponId), f = i.ammoId ? d.items.get(i.ammoId) : null, b = async () => {
            await p.reload();
            const S = {
              [`items.${i.weaponId}.system.magazine`]: {
                value: p.system.magazine.value,
                max: p.system.magazine.max
              },
              [`items.${i.weaponId}.system.installedItems`]: {
                list: [...p.system.installedItems.list],
                slots: p.system.installedItems.slots,
                usedSlots: p.system.installedItems.usedSlots
              }
            };
            f && (S[`items.${f.id}.system.amount`] = f.system.amount), d.items.filter((C) => C.type === "ammo").forEach((C) => {
              S[`items.${C.id}.system.amount`] = C.system.amount;
            }), await this.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: S, success: !0, requestId: c });
          };
          if (f) {
            let S = p.getInstalledItems("ammo");
            S && S.length > 0 && p.uninstallItems(S), setTimeout(function() {
              p.installItems([f]);
            }, 500), setTimeout(async () => {
              await b();
            }, 1500);
          } else
            await b();
        }
        break;
      }
      case "TARGET_TOKEN": {
        const d = canvas.tokens.get(i.tokenId);
        d && (d.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: i.tokenId, success: !0 }));
        break;
      }
      case "UPDATE_STAT": {
        const d = game.actors.get(s);
        if (d) {
          const p = `system.${i.label}`;
          let f;
          if (i.operation === "inc") {
            const b = p.split(".");
            let S = d;
            for (let x = 0; x < b.length; x++)
              S = x === 0 ? S[b[x]] : S == null ? void 0 : S[b[x]];
            const B = Number(S) || 0, C = Number(i.delta) || 0;
            f = B + C;
          } else
            f = typeof i.value == "string" ? i.value : Number(i.value) || 0;
          await d.update({ [p]: f }), await this.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: { [p]: f }, tab: "stats", success: !0 });
        }
        break;
      }
      case "ATTACK_ROLL": {
        const d = game.actors.get(s);
        if (d) {
          const p = i.weaponId, f = i.fireMode, b = canvas.tokens.get(i.targetId), S = "firetype-" + p, B = "cyberpunk-red-core";
          let C = "";
          switch (f) {
            case "Auto":
              C = "autofire";
              break;
            case "Suppress":
              C = "suppressive";
              break;
            case "Aimed":
              C = "aimed", await d.setFlag(B, "aimedLocation", "head");
              break;
            default:
              C = "";
              break;
          }
          b && b.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), C === "" ? await d.unsetFlag(B, S) : await d.setFlag(B, S, C);
          const x = document.createElement("a");
          x.dataset.rollType = "attack", x.dataset.itemId = p, x.dataset.rollTitle = f + " Attack";
          const $ = async () => {
            await d.sheet._onRoll({
              preventDefault: () => {
              },
              currentTarget: x,
              type: "click"
            }, { showDialog: !0 });
          };
          let V = null;
          if (b) {
            const H = ((ce = d.getActiveTokens()) == null ? void 0 : ce[0]) || canvas.tokens.placeables.find((J) => {
              var Z;
              return ((Z = J.actor) == null ? void 0 : Z.id) === d.id;
            });
            if (H) {
              const J = {
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
              }, Z = [6, 12, 25, 50, 100, 200, 400, 800], ee = b.center.x - H.center.x, fe = b.center.y - H.center.y, z = Math.sqrt(Math.pow(ee, 2) + Math.pow(fe, 2)), ae = Math.ceil(z / (((te = canvas.grid) == null ? void 0 : te.size) || 128)), ue = d.items.get(p), pe = {
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
              }, de = pe[(le = ue == null ? void 0 : ue.system) == null ? void 0 : le.weaponType] || pe[(he = ue == null ? void 0 : ue.system) == null ? void 0 : he.variety] || "Pistol", re = Z.findIndex((we) => ae <= we);
              let be = re !== -1 ? J[de][re] : 99;
              Array.isArray(J[de]) && typeof J[de][0] == "string" && (be = J[de][Math.min(re !== -1 ? re : 0, J[de].length - 1)]), V = be === 99 ? "Out of Range" : be;
            }
          }
          const N = await this.rollAndCapture(s, $);
          if (N.success) {
            let H = null;
            typeof V == "number" ? H = N.total >= V ? "Hit" : "Miss" : V === "Out of Range" && (H = "Miss"), await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: s,
              total: N.total,
              isCriticalSuccess: N.isCriticalSuccess,
              isCriticalFailure: N.isCriticalFailure,
              label: f + " Attack",
              rawRoll: {
                total: N.total,
                isCriticalSuccess: N.isCriticalSuccess,
                isCriticalFailure: N.isCriticalFailure,
                label: N.label,
                resultTotal: (Pe = N.rawRoll) == null ? void 0 : Pe.resultTotal,
                rollTitle: (ve = N.rawRoll) == null ? void 0 : ve.rollTitle
              },
              dv: V,
              outcome: H,
              success: !0
            });
          }
        }
        break;
      }
      case "GET_ROLL_MODIFIERS": {
        const d = game.actors.get(s);
        if (!d) return;
        const p = i.weaponId, f = p ? d.items.get(p) : null;
        let b = "None", S = 0, B = "None", C = 0, x = 0;
        if (f) {
          b = f.system.weaponSkill;
          const z = d.items.find((ae) => ae.type === "skill" && ae.name === b);
          S = z && Number(z.system.level) || 0, B = z && z.system.stat || "ref", C = Number((ye = d.system.stats[B]) == null ? void 0 : ye.value) || 0, x = Number(f.system.attackmod) || 0;
        }
        let $ = 0;
        const V = [], N = Number(d.system.derivedStats.hp.value) || 0, H = Number(d.system.derivedStats.seriouslyWounded) || 0, J = d.items.find((z) => z.name === "Stim" && z.type === "drug"), Z = J && J.effects.some((z) => z.disabled === !1);
        if (N <= 0)
          $ -= 4, V.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
        else if (N <= H) {
          const z = Z ? 0 : -2;
          $ += z, V.push({
            title: Z ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
            penalty: z,
            description: Z ? "Ignoring penalty due to Stim drug." : "All actions at -2."
          });
        }
        d.items.filter((z) => z.type === "criticalInjury").forEach((z) => {
          var de;
          const ae = z.name || "Injury", ue = (((de = z.system.description) == null ? void 0 : de.value) || "").replace(/<[^>]*>/g, "");
          let pe = 0;
          if (z.effects && z.effects.length > 0 && z.effects.forEach((re) => {
            !re.disabled && re.changes && re.changes.forEach((be) => {
              const we = parseInt(be.value);
              isNaN(we) || (pe += we);
            });
          }), pe === 0) {
            const re = String(ae).toLowerCase();
            (ue.includes("-2") || re.includes("arm") || re.includes("eye")) && (pe = -2);
          }
          $ += pe, V.push({ title: ae, description: ue, penalty: pe });
        });
        const fe = {
          actorName: d.name,
          baseBonus: C + S + x,
          breakdown: {
            statName: B,
            statValue: C,
            skillName: b,
            skillLevel: S,
            weaponAcc: x
          },
          totalPenalty: $,
          finalModifier: C + S + x + $,
          injuries: V
        };
        console.log("GET_ROLL_MODIFIERS result:", fe), await this.sendResponse({ type: "ROLL_MODIFIERS_DATA", result: fe });
        break;
      }
      case "GET_DV_INFO": {
        const d = canvas.tokens.get(i.tokenId), p = i.targetTokenId || ((Le = Array.from(game.user.targets)[0]) == null ? void 0 : Le.id), f = canvas.tokens.get(p), b = i.weaponId;
        if (d && f) {
          const S = {
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
          }, B = [6, 12, 25, 50, 100, 200, 400, 800], C = f.center.x - d.center.x, x = f.center.y - d.center.y, $ = Math.sqrt(Math.pow(C, 2) + Math.pow(x, 2)), V = Math.ceil($ / 128), N = d.actor.items.get(b), H = {
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
          }, J = H[N.system.weaponType] || H[N.system.variety] || "Pistol", Z = B.findIndex((z) => V <= z);
          let ee = Z !== -1 ? S[J][Z] : 99;
          Array.isArray(S[J]) && typeof S[J][0] == "string" && (ee = S[J][Math.min(Z !== -1 ? Z : 0, S[J].length - 1)]);
          const fe = {
            targetName: f.name,
            distanceMeters: V,
            weaponCategory: J,
            dv: ee === 99 ? "Out of Range" : ee
          };
          console.log("GET_DV_INFO result:", fe), await this.sendResponse({ type: "DV_INFO_DATA", result: fe, requestId: c });
        }
        break;
      }
      case "LIST_VISIBLE_TOKENS": {
        const d = canvas.tokens.get(l);
        if (d) {
          const p = canvas.grid.size, f = canvas.dimensions, b = d.center.x, S = d.center.y, B = canvas.tokens.placeables.filter((C) => {
            const x = !C.document.hidden, $ = C.actor && (C.actor.type === "character" || C.actor.type === "mook"), V = C.x >= f.sceneX && C.x <= f.sceneX + f.sceneWidth && C.y >= f.sceneY && C.y <= f.sceneY + f.sceneHeight;
            return x && $ && V && C.id !== d.id;
          }).map((C) => {
            const x = C.center.x - b, $ = C.center.y - S, N = (Math.sqrt(Math.pow(x, 2) + Math.pow($, 2)) / p).toFixed(2);
            return {
              name: C.name,
              id: C.id,
              distanceM: parseFloat(N),
              type: C.actor.type
            };
          }).sort((C, x) => C.distanceM - x.distanceM);
          console.log("LIST_VISIBLE_TOKENS result:", B), await this.sendResponse({ type: "VISIBLE_TOKENS_DATA", tokens: B, requestId: c });
        }
        break;
      }
      case "GET_ACTOR": {
        let d = i.actorId;
        if (d !== null) {
          const p = game.actors.get(d);
          if (p) {
            console.log("GET_ACTOR result:", p), await this.sendResponse({ type: "ACTOR_DATA", actor: p, requestId: c });
            break;
          }
        }
        await this.sendResponse({ type: "ACTOR_DATA", actor: !1, requestId: c });
        break;
      }
      case "GET_ACTORS": {
        let d = canvas.tokens.placeables.filter((p) => p.actor && p.actor.hasPlayerOwner).map((p) => ({
          name: p.name,
          actorId: p.actor.id,
          tokenId: p.id
        }));
        console.log("GET_ACTORS result:", d), await this.sendResponse({ type: "ACTORS_DATA", actors: d, requestId: c });
        break;
      }
      default:
        console.log("Unknown DataType: " + a);
        break;
    }
  }
  reconnect() {
    this.echo && this.connect();
  }
}
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new zr();
game.ready ? (window.cyberpunkBridge.registerSettings(), game.user.isGM && window.cyberpunkBridge.connect()) : (Hooks.once("init", () => {
  window.cyberpunkBridge.registerSettings();
}), Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect();
}));
