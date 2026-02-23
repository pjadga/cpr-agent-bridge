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
  for (var s = 0; s < h.length; s++) {
    var a = h[s];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(g, a.key, a);
  }
}
function Q(g, h, s) {
  return h && Rr(g.prototype, h), Object.defineProperty(g, "prototype", {
    writable: !1
  }), g;
}
function Ae() {
  return Ae = Object.assign || function(g) {
    for (var h = 1; h < arguments.length; h++) {
      var s = arguments[h];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (g[a] = s[a]);
    }
    return g;
  }, Ae.apply(this, arguments);
}
function ie(g, h) {
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
function je(g) {
  return je = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, je(g);
}
function Qe(g, h) {
  return Qe = Object.setPrototypeOf || function(a, i) {
    return a.__proto__ = i, a;
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
    var a = je(g), i;
    if (h) {
      var l = je(this).constructor;
      i = Reflect.construct(a, arguments, l);
    } else
      i = a.apply(this, arguments);
    return Pr(this, i);
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
      function(s, a) {
        return this.listen(".client-" + s, a);
      }
    )
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "notification",
    value: function(s) {
      return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated", s);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */
  }, {
    key: "stopListeningForWhisper",
    value: function(s, a) {
      return this.stopListening(".client-" + s, a);
    }
  }]), g;
}(), St = /* @__PURE__ */ function() {
  function g(h) {
    K(this, g), this.namespace = h;
  }
  return Q(g, [{
    key: "format",
    value: function(s) {
      return [".", "\\"].includes(s.charAt(0)) ? s.substring(1) : (this.namespace && (s = this.namespace + "." + s), s.replace(/\./g, "\\"));
    }
    /**
     * Set the event namespace.
     */
  }, {
    key: "setNamespace",
    value: function(s) {
      this.namespace = s;
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
  ie(s, g);
  var h = oe(s);
  function s(a, i, l) {
    var c;
    return K(this, s), c = h.call(this), c.name = i, c.pusher = a, c.options = l, c.eventFormatter = new St(c.options.namespace), c.subscribe(), c;
  }
  return Q(s, [{
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
      return this.subscription.bind_global(function(c, x) {
        if (!c.startsWith("pusher:")) {
          var k = l.options.namespace.replace(/\./g, "\\"), O = c.startsWith(k) ? c.substring(k.length + 1) : "." + c;
          i(O, x);
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
  }]), s;
}(Ye), Ct = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(i), l), this;
      }
    )
  }]), s;
}(Ze), xr = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(i), l), this;
      }
    )
  }]), s;
}(Ze), Er = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("pusher:subscription_succeeded", function(l) {
          i(Object.keys(l.members).map(function(c) {
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
  }]), s;
}(Ct), Tt = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s(a, i, l) {
    var c;
    return K(this, s), c = h.call(this), c.events = {}, c.listeners = {}, c.name = i, c.socket = a, c.options = l, c.eventFormatter = new St(c.options.namespace), c.subscribe(), c;
  }
  return Q(s, [{
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
      var c = this;
      return this.listeners[i] = this.listeners[i] || [], this.events[i] || (this.events[i] = function(x, k) {
        c.name === x && c.listeners[i] && c.listeners[i].forEach(function(O) {
          return O(k);
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
      this.listeners[i] = this.listeners[i] || [], l && (this.listeners[i] = this.listeners[i].filter(function(c) {
        return c !== l;
      })), (!l || this.listeners[i].length === 0) && (this.events[i] && (this.socket.removeListener(i, this.events[i]), delete this.events[i]), delete this.listeners[i]);
    }
  }]), s;
}(Ye), Rt = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
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
  }]), s;
}(Tt), Or = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("presence:subscribed", function(l) {
          i(l.map(function(c) {
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
  }]), s;
}(Rt), De = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
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
  }]), s;
}(Ye), It = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this;
      }
    )
  }]), s;
}(De), Nr = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, l) {
        return this;
      }
    )
  }]), s;
}(De), Mr = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    return K(this, s), h.apply(this, arguments);
  }
  return Q(s, [{
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
  }]), s;
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
    value: function(s) {
      this.options = Ae(this._defaultOptions, s);
      var a = this.csrfToken();
      return a && (this.options.auth.headers["X-CSRF-TOKEN"] = a, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = a), a = this.options.bearerToken, a && (this.options.auth.headers.Authorization = "Bearer " + a, this.options.userAuthentication.headers.Authorization = "Bearer " + a), s;
    }
    /**
     * Extract the CSRF token from the page.
     */
  }, {
    key: "csrfToken",
    value: function() {
      var s;
      return typeof window < "u" && window.Laravel && window.Laravel.csrfToken ? window.Laravel.csrfToken : this.options.csrfToken ? this.options.csrfToken : typeof document < "u" && typeof document.querySelector == "function" && (s = document.querySelector('meta[name="csrf-token"]')) ? s.getAttribute("content") : null;
    }
  }]), g;
}(), kt = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    var a;
    return K(this, s), a = h.apply(this, arguments), a.channels = {}, a;
  }
  return Q(s, [{
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
    value: function(i, l, c) {
      return this.channel(i).listen(l, c);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new Ze(this.pusher, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Ct(this.pusher, "private-" + i, this.options)), this.channels["private-" + i];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(i) {
      return this.channels["private-encrypted-" + i] || (this.channels["private-encrypted-" + i] = new xr(this.pusher, "private-encrypted-" + i, this.options)), this.channels["private-encrypted-" + i];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(i) {
      return this.channels["presence-" + i] || (this.channels["presence-" + i] = new Er(this.pusher, "presence-" + i, this.options)), this.channels["presence-" + i];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(i) {
      var l = this, c = [i, "private-" + i, "private-encrypted-" + i, "presence-" + i];
      c.forEach(function(x, k) {
        l.leaveChannel(x);
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
  }]), s;
}(et), _t = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    var a;
    return K(this, s), a = h.apply(this, arguments), a.channels = {}, a;
  }
  return Q(s, [{
    key: "connect",
    value: function() {
      var i = this, l = this.getSocketIO();
      return this.socket = l(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(i.channels).forEach(function(c) {
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
    value: function(i, l, c) {
      return this.channel(i).listen(l, c);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new Tt(this.socket, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Rt(this.socket, "private-" + i, this.options)), this.channels["private-" + i];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(i) {
      return this.channels["presence-" + i] || (this.channels["presence-" + i] = new Or(this.socket, "presence-" + i, this.options)), this.channels["presence-" + i];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(i) {
      var l = this, c = [i, "private-" + i, "presence-" + i];
      c.forEach(function(x) {
        l.leaveChannel(x);
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
  }]), s;
}(et), jr = /* @__PURE__ */ function(g) {
  ie(s, g);
  var h = oe(s);
  function s() {
    var a;
    return K(this, s), a = h.apply(this, arguments), a.channels = {}, a;
  }
  return Q(s, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l, c) {
      return new De();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return new De();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return new It();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(i) {
      return new Nr();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(i) {
      return new Mr();
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
  }]), s;
}(et), Dr = /* @__PURE__ */ function() {
  function g(h) {
    K(this, g), this.options = h, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return Q(g, [{
    key: "channel",
    value: function(s) {
      return this.connector.channel(s);
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
        this.connector = new jr(this.options);
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
    value: function(s) {
      return this.connector.presenceChannel(s);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(s) {
      this.connector.leave(s);
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(s) {
      this.connector.leaveChannel(s);
    }
    /**
     * Leave all channels.
     */
  }, {
    key: "leaveAllChannels",
    value: function() {
      for (var s in this.connector.channels)
        this.leaveChannel(s);
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(s, a, i) {
      return this.connector.listen(s, a, i);
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "private",
    value: function(s) {
      return this.connector.privateChannel(s);
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivate",
    value: function(s) {
      if (this.connector instanceof _t)
        throw new Error("Broadcaster ".concat(Ie(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
      return this.connector.encryptedPrivateChannel(s);
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
      var s = this;
      Vue.http.interceptors.push(function(a, i) {
        s.socketId() && a.headers.set("X-Socket-ID", s.socketId()), i();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function() {
      var s = this;
      axios.interceptors.request.use(function(a) {
        return s.socketId() && (a.headers["X-Socket-Id"] = s.socketId()), a;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function() {
      var s = this;
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(a, i, l) {
        s.socketId() && l.setRequestHeader("X-Socket-Id", s.socketId());
      });
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerTurboRequestInterceptor",
    value: function() {
      var s = this;
      document.addEventListener("turbo:before-fetch-request", function(a) {
        a.detail.fetchOptions.headers["X-Socket-Id"] = s.socketId();
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
  (function(a, i) {
    g.exports = i();
  })(window, function() {
    return (
      /******/
      function(s) {
        var a = {};
        function i(l) {
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
          return s[l].call(c.exports, c, c.exports, i), c.l = !0, c.exports;
        }
        return i.m = s, i.c = a, i.d = function(l, c, x) {
          i.o(l, c) || Object.defineProperty(l, c, { enumerable: !0, get: x });
        }, i.r = function(l) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
        }, i.t = function(l, c) {
          if (c & 1 && (l = i(l)), c & 8 || c & 4 && typeof l == "object" && l && l.__esModule) return l;
          var x = /* @__PURE__ */ Object.create(null);
          if (i.r(x), Object.defineProperty(x, "default", { enumerable: !0, value: l }), c & 2 && typeof l != "string") for (var k in l) i.d(x, k, (function(O) {
            return l[O];
          }).bind(null, k));
          return x;
        }, i.n = function(l) {
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
          return i.d(c, "a", c), c;
        }, i.o = function(l, c) {
          return Object.prototype.hasOwnProperty.call(l, c);
        }, i.p = "", i(i.s = 2);
      }([
        /* 0 */
        /***/
        function(s, a, i) {
          var l = this && this.__extends || /* @__PURE__ */ function() {
            var S = function(v, b) {
              return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A, F) {
                A.__proto__ = F;
              } || function(A, F) {
                for (var X in F) F.hasOwnProperty(X) && (A[X] = F[X]);
              }, S(v, b);
            };
            return function(v, b) {
              S(v, b);
              function A() {
                this.constructor = v;
              }
              v.prototype = b === null ? Object.create(b) : (A.prototype = b.prototype, new A());
            };
          }();
          Object.defineProperty(a, "__esModule", { value: !0 });
          var c = 256, x = (
            /** @class */
            function() {
              function S(v) {
                v === void 0 && (v = "="), this._paddingCharacter = v;
              }
              return S.prototype.encodedLength = function(v) {
                return this._paddingCharacter ? (v + 2) / 3 * 4 | 0 : (v * 8 + 5) / 6 | 0;
              }, S.prototype.encode = function(v) {
                for (var b = "", A = 0; A < v.length - 2; A += 3) {
                  var F = v[A] << 16 | v[A + 1] << 8 | v[A + 2];
                  b += this._encodeByte(F >>> 3 * 6 & 63), b += this._encodeByte(F >>> 2 * 6 & 63), b += this._encodeByte(F >>> 1 * 6 & 63), b += this._encodeByte(F >>> 0 * 6 & 63);
                }
                var X = v.length - A;
                if (X > 0) {
                  var F = v[A] << 16 | (X === 2 ? v[A + 1] << 8 : 0);
                  b += this._encodeByte(F >>> 3 * 6 & 63), b += this._encodeByte(F >>> 2 * 6 & 63), X === 2 ? b += this._encodeByte(F >>> 1 * 6 & 63) : b += this._paddingCharacter || "", b += this._paddingCharacter || "";
                }
                return b;
              }, S.prototype.maxDecodedLength = function(v) {
                return this._paddingCharacter ? v / 4 * 3 | 0 : (v * 6 + 7) / 8 | 0;
              }, S.prototype.decodedLength = function(v) {
                return this.maxDecodedLength(v.length - this._getPaddingLength(v));
              }, S.prototype.decode = function(v) {
                if (v.length === 0)
                  return new Uint8Array(0);
                for (var b = this._getPaddingLength(v), A = v.length - b, F = new Uint8Array(this.maxDecodedLength(A)), X = 0, G = 0, re = 0, ce = 0, ne = 0, le = 0, he = 0; G < A - 4; G += 4)
                  ce = this._decodeChar(v.charCodeAt(G + 0)), ne = this._decodeChar(v.charCodeAt(G + 1)), le = this._decodeChar(v.charCodeAt(G + 2)), he = this._decodeChar(v.charCodeAt(G + 3)), F[X++] = ce << 2 | ne >>> 4, F[X++] = ne << 4 | le >>> 2, F[X++] = le << 6 | he, re |= ce & c, re |= ne & c, re |= le & c, re |= he & c;
                if (G < A - 1 && (ce = this._decodeChar(v.charCodeAt(G)), ne = this._decodeChar(v.charCodeAt(G + 1)), F[X++] = ce << 2 | ne >>> 4, re |= ce & c, re |= ne & c), G < A - 2 && (le = this._decodeChar(v.charCodeAt(G + 2)), F[X++] = ne << 4 | le >>> 2, re |= le & c), G < A - 3 && (he = this._decodeChar(v.charCodeAt(G + 3)), F[X++] = le << 6 | he, re |= he & c), re !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return F;
              }, S.prototype._encodeByte = function(v) {
                var b = v;
                return b += 65, b += 25 - v >>> 8 & 6, b += 51 - v >>> 8 & -75, b += 61 - v >>> 8 & -15, b += 62 - v >>> 8 & 3, String.fromCharCode(b);
              }, S.prototype._decodeChar = function(v) {
                var b = c;
                return b += (42 - v & v - 44) >>> 8 & -c + v - 43 + 62, b += (46 - v & v - 48) >>> 8 & -c + v - 47 + 63, b += (47 - v & v - 58) >>> 8 & -c + v - 48 + 52, b += (64 - v & v - 91) >>> 8 & -c + v - 65 + 0, b += (96 - v & v - 123) >>> 8 & -c + v - 97 + 26, b;
              }, S.prototype._getPaddingLength = function(v) {
                var b = 0;
                if (this._paddingCharacter) {
                  for (var A = v.length - 1; A >= 0 && v[A] === this._paddingCharacter; A--)
                    b++;
                  if (v.length < 4 || b > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return b;
              }, S;
            }()
          );
          a.Coder = x;
          var k = new x();
          function O(S) {
            return k.encode(S);
          }
          a.encode = O;
          function E(S) {
            return k.decode(S);
          }
          a.decode = E;
          var T = (
            /** @class */
            function(S) {
              l(v, S);
              function v() {
                return S !== null && S.apply(this, arguments) || this;
              }
              return v.prototype._encodeByte = function(b) {
                var A = b;
                return A += 65, A += 25 - b >>> 8 & 6, A += 51 - b >>> 8 & -75, A += 61 - b >>> 8 & -13, A += 62 - b >>> 8 & 49, String.fromCharCode(A);
              }, v.prototype._decodeChar = function(b) {
                var A = c;
                return A += (44 - b & b - 46) >>> 8 & -c + b - 45 + 62, A += (94 - b & b - 96) >>> 8 & -c + b - 95 + 63, A += (47 - b & b - 58) >>> 8 & -c + b - 48 + 52, A += (64 - b & b - 91) >>> 8 & -c + b - 65 + 0, A += (96 - b & b - 123) >>> 8 & -c + b - 97 + 26, A;
              }, v;
            }(x)
          );
          a.URLSafeCoder = T;
          var I = new T();
          function C(S) {
            return I.encode(S);
          }
          a.encodeURLSafe = C;
          function j(S) {
            return I.decode(S);
          }
          a.decodeURLSafe = j, a.encodedLength = function(S) {
            return k.encodedLength(S);
          }, a.maxDecodedLength = function(S) {
            return k.maxDecodedLength(S);
          }, a.decodedLength = function(S) {
            return k.decodedLength(S);
          };
        },
        /* 1 */
        /***/
        function(s, a, i) {
          Object.defineProperty(a, "__esModule", { value: !0 });
          var l = "utf8: invalid string", c = "utf8: invalid source encoding";
          function x(E) {
            for (var T = new Uint8Array(k(E)), I = 0, C = 0; C < E.length; C++) {
              var j = E.charCodeAt(C);
              j < 128 ? T[I++] = j : j < 2048 ? (T[I++] = 192 | j >> 6, T[I++] = 128 | j & 63) : j < 55296 ? (T[I++] = 224 | j >> 12, T[I++] = 128 | j >> 6 & 63, T[I++] = 128 | j & 63) : (C++, j = (j & 1023) << 10, j |= E.charCodeAt(C) & 1023, j += 65536, T[I++] = 240 | j >> 18, T[I++] = 128 | j >> 12 & 63, T[I++] = 128 | j >> 6 & 63, T[I++] = 128 | j & 63);
            }
            return T;
          }
          a.encode = x;
          function k(E) {
            for (var T = 0, I = 0; I < E.length; I++) {
              var C = E.charCodeAt(I);
              if (C < 128)
                T += 1;
              else if (C < 2048)
                T += 2;
              else if (C < 55296)
                T += 3;
              else if (C <= 57343) {
                if (I >= E.length - 1)
                  throw new Error(l);
                I++, T += 4;
              } else
                throw new Error(l);
            }
            return T;
          }
          a.encodedLength = k;
          function O(E) {
            for (var T = [], I = 0; I < E.length; I++) {
              var C = E[I];
              if (C & 128) {
                var j = void 0;
                if (C < 224) {
                  if (I >= E.length)
                    throw new Error(c);
                  var S = E[++I];
                  if ((S & 192) !== 128)
                    throw new Error(c);
                  C = (C & 31) << 6 | S & 63, j = 128;
                } else if (C < 240) {
                  if (I >= E.length - 1)
                    throw new Error(c);
                  var S = E[++I], v = E[++I];
                  if ((S & 192) !== 128 || (v & 192) !== 128)
                    throw new Error(c);
                  C = (C & 15) << 12 | (S & 63) << 6 | v & 63, j = 2048;
                } else if (C < 248) {
                  if (I >= E.length - 2)
                    throw new Error(c);
                  var S = E[++I], v = E[++I], b = E[++I];
                  if ((S & 192) !== 128 || (v & 192) !== 128 || (b & 192) !== 128)
                    throw new Error(c);
                  C = (C & 15) << 18 | (S & 63) << 12 | (v & 63) << 6 | b & 63, j = 65536;
                } else
                  throw new Error(c);
                if (C < j || C >= 55296 && C <= 57343)
                  throw new Error(c);
                if (C >= 65536) {
                  if (C > 1114111)
                    throw new Error(c);
                  C -= 65536, T.push(String.fromCharCode(55296 | C >> 10)), C = 56320 | C & 1023;
                }
              }
              T.push(String.fromCharCode(C));
            }
            return T.join("");
          }
          a.decode = O;
        },
        /* 2 */
        /***/
        function(s, a, i) {
          s.exports = i(3).default;
        },
        /* 3 */
        /***/
        function(s, a, i) {
          i.r(a);
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
          var c = new l("_pusher_script_", "Pusher.ScriptReceivers"), x = {
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
          }, k = x;
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
                var u = L.createScriptRequest(o.getPath(e, t)), m = o.receivers.create(function(w) {
                  if (o.receivers.remove(m), o.loading[e]) {
                    var P = o.loading[e];
                    delete o.loading[e];
                    for (var D = function(V) {
                      V || u.cleanup();
                    }, U = 0; U < P.length; U++)
                      P[U](w, D);
                  }
                });
                u.send(m);
              }
            }
            getRoot(e) {
              var t, r = L.getDocument().location.protocol;
              return e && e.useTLS || r === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var E = new l("_pusher_dependencies", "Pusher.DependenciesReceivers"), T = new O({
            cdn_http: k.cdn_http,
            cdn_https: k.cdn_https,
            version: k.VERSION,
            suffix: k.dependency_suffix,
            receivers: E
          });
          const I = {
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
          var j = { buildLogSuffix: function(n) {
            const e = "See:", t = I.urls[n];
            if (!t)
              return "";
            let r;
            return t.fullUrl ? r = t.fullUrl : t.path && (r = I.baseUrl + t.path), r ? `${e} ${r}` : "";
          } }, S;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(S || (S = {}));
          class v extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class b extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class A extends Error {
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
          class re extends Error {
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
          var he = function(n, e, t, r, o) {
            const u = L.createXHR();
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
                  let w, P = !1;
                  try {
                    w = JSON.parse(u.responseText), P = !0;
                  } catch {
                    o(new ne(200, `JSON returned from ${r.toString()} endpoint was invalid, yet status code was 200. Data was: ${u.responseText}`), null);
                  }
                  P && o(null, w);
                } else {
                  let w = "";
                  switch (r) {
                    case S.UserAuthentication:
                      w = j.buildLogSuffix("authenticationEndpoint");
                      break;
                    case S.ChannelAuthorization:
                      w = `Clients must be authorized to join private or presence channels. ${j.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  o(new ne(u.status, `Unable to retrieve auth string from ${r.toString()} endpoint - received status: ${u.status} from ${t.endpoint}. ${w}`), null);
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
          class y {
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
          var _ = y;
          function B(n) {
            window.clearTimeout(n);
          }
          function R(n) {
            window.clearInterval(n);
          }
          class N extends _ {
            constructor(e, t) {
              super(setTimeout, B, e, function(r) {
                return t(), null;
              });
            }
          }
          class $ extends _ {
            constructor(e, t) {
              super(setInterval, R, e, function(r) {
                return t(), r;
              });
            }
          }
          var W = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new N(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(r) {
                return r[n].apply(r, t.concat(arguments));
              };
            }
          }, M = W;
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
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(xe(arguments[e]));
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
          function se(n, e) {
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
              return typeof e == "object" && (e = xe(e)), encodeURIComponent(Pe(e.toString()));
            });
          }
          function xt(n) {
            var e = se(n, function(r) {
              return r !== void 0;
            }), t = ue(be(Lt(e)), M.method("join", "=")).join("&");
            return t;
          }
          function Et(n) {
            var e = [], t = [];
            return function r(o, u) {
              var m, w, P;
              switch (typeof o) {
                case "object":
                  if (!o)
                    return null;
                  for (m = 0; m < e.length; m += 1)
                    if (e[m] === o)
                      return { $ref: t[m] };
                  if (e.push(o), t.push(u), Object.prototype.toString.apply(o) === "[object Array]")
                    for (P = [], m = 0; m < o.length; m += 1)
                      P[m] = r(o[m], u + "[" + m + "]");
                  else {
                    P = {};
                    for (w in o)
                      Object.prototype.hasOwnProperty.call(o, w) && (P[w] = r(o[w], u + "[" + JSON.stringify(w) + "]"));
                  }
                  return P;
                case "number":
                case "string":
                case "boolean":
                  return o;
              }
            }(n, "$");
          }
          function xe(n) {
            try {
              return JSON.stringify(n);
            } catch {
              return JSON.stringify(Et(n));
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
            var P = "Pusher.auth_callbacks['" + u + "']";
            w.src = t.endpoint + "?callback=" + encodeURIComponent(P) + "&" + e;
            var D = m.getElementsByTagName("head")[0] || m.documentElement;
            D.insertBefore(w, D.firstChild);
          }, Mt = Nt;
          class jt {
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
          class Dt {
            constructor(e, t) {
              this.url = e, this.data = t;
            }
            send(e) {
              if (!this.request) {
                var t = xt(this.data), r = this.url + "/" + e.number + "?" + t;
                this.request = L.createScriptRequest(r), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Ut = function(n, e) {
            return function(t, r) {
              var o = "http" + (e ? "s" : "") + "://", u = o + (n.host || n.options.host) + n.options.path, m = L.createJSONPRequest(u, t), w = L.ScriptReceivers.create(function(P, D) {
                c.remove(w), m.cleanup(), D && D.host && (n.host = D.host), r && r(P, D);
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
          class Wt extends ge {
            constructor(e, t, r, o, u) {
              super(), this.initialize = L.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = r, this.key = o, this.options = u, this.state = "new", this.timeline = u.timeline, this.activityTimeout = u.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return M.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), q.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (M.defer(() => {
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
              return new Wt(this.hooks, e, t, r, o);
            }
          }
          var Vt = new Ce({
            urls: zt,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!L.getWebSocketAPI();
            },
            isSupported: function() {
              return !!L.getWebSocketAPI();
            },
            getSocket: function(n) {
              return L.createWebSocket(n);
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
              return L.HTTPFactory.createStreamingSocket(n);
            }
          }, tt), rt = H({
            getSocket: function(n) {
              return L.HTTPFactory.createPollingSocket(n);
            }
          }, tt), st = {
            isSupported: function() {
              return L.isXHRSupported();
            }
          }, Xt = new Ce(H({}, nt, st)), Gt = new Ce(H({}, rt, st)), Jt = {
            ws: Vt,
            xhr_streaming: Xt,
            xhr_polling: Gt
          }, Ee = Jt, Kt = new Ce({
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
                js_path: T.getPath("sockjs", {
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
          }), it = {
            isSupported: function(n) {
              var e = L.isXDRSupported(n.useTLS);
              return e;
            }
          }, Qt = new Ce(H({}, nt, it)), Yt = new Ce(H({}, rt, it));
          Ee.xdr_streaming = Qt, Ee.xdr_polling = Yt, Ee.sockjs = Kt;
          var Zt = Ee;
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
                u.unbind("open", w), u.bind("closed", P), m = M.now();
              }, P = (D) => {
                if (u.unbind("closed", P), D.code === 1002 || D.code === 1003)
                  this.manager.reportDeath();
                else if (!D.wasClean && m) {
                  var U = M.now() - m;
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
              this.timeline.isEmpty() || this.timeline.send(L.TimelineTransport.getAgent(this, e), t);
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
                var r = j.buildLogSuffix("triggeringClientEvents");
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
                  D(r.next(U));
                } catch (V) {
                  m(V);
                }
              }
              function P(U) {
                try {
                  D(r.throw(U));
                } catch (V) {
                  m(V);
                }
              }
              function D(U) {
                U.done ? u(U.value) : o(U.value).then(w, P);
              }
              D((r = r.apply(n, e || [])).next());
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
                    let m = j.buildLogSuffix("authorizationEndpoint");
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
          var un = i(1), Be = i(0);
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
              var r = L.getNetwork();
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new N(e || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new N(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new N(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new N(this.activityTimeout, () => {
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
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", r = j.buildLogSuffix("encryptedChannelSupport");
              throw new G(`${t}. ${r}`);
            } else {
              if (n.indexOf("private-") === 0)
                return me.createPrivateChannel(n, e);
              if (n.indexOf("presence-") === 0)
                return me.createPresenceChannel(n, e);
              if (n.indexOf("#") === 0)
                throw new b('Cannot create a channel with name "' + n + '".');
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
              return we(this.strategies, M.method("isSupported"));
            }
            connect(e, t) {
              var r = this.strategies, o = 0, u = this.timeout, m = null, w = (P, D) => {
                D ? t(null, D) : (o = o + 1, this.loop && (o = o % r.length), o < r.length ? (u && (u = u * 2, this.timeoutLimit && (u = Math.min(u, this.timeoutLimit))), m = this.tryStrategy(r[o], e, { timeout: u, failFast: this.failFast }, w)) : t(!0));
              };
              return m = this.tryStrategy(r[o], e, { timeout: u, failFast: this.failFast }, w), {
                abort: function() {
                  m.abort();
                },
                forceMinPriority: function(P) {
                  e = P, m && m.forceMinPriority(P);
                }
              };
            }
            tryStrategy(e, t, r, o) {
              var u = null, m = null;
              return r.timeout > 0 && (u = new N(r.timeout, function() {
                m.abort(), o(!0);
              })), m = e.connect(t, function(w, P) {
                w && u && u.isRunning() && !r.failFast || (u && u.ensureAborted(), o(w, P));
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
              return we(this.strategies, M.method("isSupported"));
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
              if (o && o.timestamp + this.ttl >= M.now()) {
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
              var P = M.now(), D = m.pop().connect(e, function U(V, Me) {
                V ? (ct(r), m.length > 0 ? (P = M.now(), D = m.pop().connect(e, U)) : t(V)) : (kn(r, Me.transport.name, M.now() - P, u), t(null, Me));
              });
              return {
                abort: function() {
                  D.abort();
                },
                forceMinPriority: function(U) {
                  e = U, D && D.forceMinPriority(U);
                }
              };
            }
          }
          function We(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function wn(n) {
            var e = L.getLocalStorage();
            if (e)
              try {
                var t = e[We(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                ct(n);
              }
            return null;
          }
          function kn(n, e, t, r) {
            var o = L.getLocalStorage();
            if (o)
              try {
                o[We(n)] = xe({
                  timestamp: M.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: r
                });
              } catch {
              }
          }
          function ct(n) {
            var e = L.getLocalStorage();
            if (e)
              try {
                delete e[We(n)];
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
              var r = this.strategy, o, u = new N(this.options.delay, function() {
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
            }), P = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, D = new at({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), U = new at({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), V = o("ws", "ws", 3, u, D), Me = o("wss", "ws", 3, m, D), vr = o("sockjs", "sockjs", 1, w), ft = o("xhr_streaming", "xhr_streaming", 1, w, U), yr = o("xdr_streaming", "xdr_streaming", 1, w, U), pt = o("xhr_polling", "xhr_polling", 1, w), br = o("xdr_polling", "xdr_polling", 1, w), gt = new _e([V], P), wr = new _e([Me], P), kr = new _e([vr], P), mt = new _e([
              new Te(Re(ft), ft, yr)
            ], P), vt = new _e([
              new Te(Re(pt), pt, br)
            ], P), yt = new _e([
              new Te(Re(mt), new $e([
                mt,
                new Oe(vt, { delay: 4e3 })
              ]), vt)
            ], P), Je = new Te(Re(yt), yt, kr), Ke;
            return e.useTLS ? Ke = new $e([
              gt,
              new Oe(Je, { delay: 2e3 })
            ]) : Ke = new $e([
              gt,
              new Oe(wr, { delay: 2e3 }),
              new Oe(Je, { delay: 5e3 })
            ]), new bn(new _n(new Te(Re(V), Ke, Je)), r, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, Cn = Sn, Tn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), T.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
              n.hooks.isInitialized() ? (n.changeState("initialized"), t(!0)) : (e && n.onError(e), n.onClose(), t(!1));
            })) : n.onClose();
          }, Rn = {
            getRequest: function(n) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                n.emit("error", new A()), n.close();
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
              }, L.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (L.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
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
          var Ve;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(Ve || (Ve = {}));
          var Se = Ve, Ln = 1;
          class xn {
            constructor(e, t) {
              this.hooks = e, this.session = ut(1e3) + "/" + Mn(8), this.location = En(t), this.readyState = Se.CONNECTING, this.openStream();
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
                  return L.createSocketRequest("POST", lt(On(this.location, this.session))).start(e), !0;
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
              this.stream = L.createSocketRequest("POST", lt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                M.defer(() => {
                  this.onError(e), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function En(n) {
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
            return L.randomInt(n);
          }
          function Mn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(ut(32).toString(32));
            return e.join("");
          }
          var jn = xn, Dn = {
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
          }, Un = Dn, Fn = {
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
              var e = L.getXHRAPI(), t = new e();
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
              return new jn(n, e);
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
          var $n = ht, Wn = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: c,
            DependenciesReceivers: E,
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
              window.JSON ? e() : T.load("json2", {}, e);
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
              return new Dt(n, e);
            },
            createScriptRequest(n) {
              return new jt(n);
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
          }, L = Wn, Xe;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(Xe || (Xe = {}));
          var Ne = Xe;
          class Vn {
            constructor(e, t, r) {
              this.key = e, this.session = t, this.events = [], this.options = r || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(H({}, t, { timestamp: M.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
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
                u = me.createHandshake(o, function(V) {
                  r = !0, U(), t(null, V);
                });
              }, P = function(V) {
                U(), t(V);
              }, D = function() {
                U();
                var V;
                V = xe(o), t(new X(V));
              }, U = function() {
                o.unbind("initialized", m), o.unbind("open", w), o.unbind("error", P), o.unbind("closed", D);
              };
              return o.bind("initialized", m), o.bind("open", w), o.bind("error", P), o.bind("closed", D), o.initialize(), {
                abort: () => {
                  r || (U(), u ? u.close() : o.close());
                },
                forceMinPriority: (V) => {
                  r || this.priority < V && (u ? u.close() : o.close());
                }
              };
            }
          }
          function dt(n, e) {
            return M.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Gn } = L;
          var Jn = function(n, e, t, r, o, u) {
            var m = Gn[t];
            if (!m)
              throw new re(t);
            var w = (!n.enabledTransports || Z(n.enabledTransports, e) !== -1) && (!n.disabledTransports || Z(n.disabledTransports, e) === -1), P;
            return w ? (o = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, o), P = new Xn(e, r, u ? u.getAssistant(m) : m, o)) : P = Kn, P;
          }, Kn = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = M.defer(function() {
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
            if (typeof L.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = Yn(e, n);
              L.getAuthorizers()[n.transport](L, r, n, S.UserAuthentication, t);
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
            if (typeof L.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = er(e, n);
              L.getAuthorizers()[n.transport](L, r, n, S.ChannelAuthorization, t);
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
              httpHost: sr(n),
              useTLS: ar(n),
              wsHost: ir(n),
              userAuthenticator: lr(n),
              channelAuthorizer: hr(n, e)
            };
            return "disabledTransports" in n && (t.disabledTransports = n.disabledTransports), "enabledTransports" in n && (t.enabledTransports = n.enabledTransports), "ignoreNullOrigin" in n && (t.ignoreNullOrigin = n.ignoreNullOrigin), "timelineParams" in n && (t.timelineParams = n.timelineParams), "nacl" in n && (t.nacl = n.nacl), t;
          }
          function sr(n) {
            return n.httpHost ? n.httpHost : n.cluster ? `sockjs-${n.cluster}.pusher.com` : k.httpHost;
          }
          function ir(n) {
            return n.wsHost ? n.wsHost : or(n.cluster);
          }
          function or(n) {
            return `ws-${n}.pusher.com`;
          }
          function ar(n) {
            return L.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
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
              return fe(se({ ws: L.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              mr(e), Qn(t), this.key = e, this.config = rr(t, this), this.channels = me.createChannels(), this.global_emitter = new ge(), this.sessionID = L.randomInt(1e9), this.timeline = new Vn(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: Y.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: Ne.INFO,
                version: k.VERSION
              }), this.config.enableStats && (this.timelineSender = me.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + L.TimelineTransport.name
              }));
              var r = (o) => L.getDefaultStrategy(this.config, o, Jn);
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
          Y.instances = [], Y.isReady = !1, Y.logToConsole = !1, Y.Runtime = L, Y.ScriptReceivers = L.ScriptReceivers, Y.DependenciesReceivers = L.DependenciesReceivers, Y.auth_callbacks = L.auth_callbacks;
          var Ge = a.default = Y;
          function mr(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          L.setup(Y);
        }
        /******/
      ])
    );
  });
})(At);
var Fr = At.exports;
const Hr = /* @__PURE__ */ Ur(Fr);
window.Pusher = Hr;
const te = "cpr-agent";
class zr {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.hookIds = {};
  }
  /**
   * INTERCEPTOR: Wraps renderTemplate to steal the CPRRoll object before it vanishes.
   */
  async rollAndCapture(h, s) {
    return console.log(`%c[Bridge] 🕵️‍♂️ Starting Render Interceptor for Actor ${h}`, "color: #00ffff; font-weight: bold;"), new Promise(async (a, i) => {
      let l = !1;
      const c = renderTemplate, x = function(k, O) {
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
      renderTemplate = x, setTimeout(() => {
        l || (renderTemplate = c, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), a({ success: !1, error: "Timed out waiting for render" }));
      }, 5e3);
      try {
        await s();
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
    for (let [h, s] of Object.entries(this.hookIds))
      Hooks.off(h, s);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  /**
   * Initialize Settings
   */
  registerSettings() {
    game.settings.register(te, "apiUrl", {
      name: "Relay Controller URL",
      hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk). Do NOT include port 8080 here.",
      scope: "client",
      config: !0,
      type: String,
      default: "https://agent.surrealdisco.co.uk",
      onChange: () => this.reconnect()
    }), game.settings.register(te, "reverbHost", {
      name: "Reverb Host (override)",
      hint: "Optional. Override the WebSocket host used for Reverb (e.g., my-tunnel.ngrok-free.dev). Leave blank to derive from Foundry URL.",
      scope: "world",
      config: !0,
      type: String,
      default: "",
      onChange: () => this.reconnect()
    }), game.settings.register(te, "reverbPort", {
      name: "Reverb Port",
      hint: "Optional. If blank, auto-detects: 443 for https/wss, 80 for http/ws, or use your custom value.",
      scope: "world",
      config: !0,
      type: Number,
      default: 0,
      onChange: () => this.reconnect()
    }), game.settings.register(te, "reverbUseSSL", {
      name: "Reverb Use SSL (wss)",
      hint: "If enabled, uses secure WebSockets (wss). If left off, auto-detects from Relay URL protocol.",
      scope: "world",
      config: !0,
      type: Boolean,
      default: !0,
      onChange: () => this.reconnect()
    }), game.settings.register(te, "reverbKey", {
      name: "Reverb App Key",
      hint: "The App Key from your .env file.",
      scope: "world",
      config: !0,
      type: String,
      default: "itdsiqtx8cpskowawl1p",
      onChange: () => this.reconnect()
    }), game.settings.register(te, "apiKey", {
      name: "API Key (Sanctum Token)",
      hint: "Generate this in your Cyberpunk Agent dashboard.",
      scope: "world",
      // or 'client' if each player has their own
      config: !0,
      type: String,
      default: "",
      onChange: () => this.reconnect()
    }), game.settings.register(te, "debugMode", {
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
    const h = game.settings.get(te, "apiUrl"), s = game.settings.get(te, "apiKey"), a = game.settings.get(te, "debugMode"), i = Number(game.settings.get(te, "reverbPort") || 0) || 0, l = game.settings.get(te, "reverbUseSSL"), c = (game.settings.get(te, "reverbHost") || "").trim();
    if (!s || !h) {
      ui.notifications.warn("Cyberpunk Bridge: Missing API URL or Key.");
      return;
    }
    this.echo && this.echo.disconnect();
    let x;
    try {
      x = new URL(h);
    } catch (j) {
      console.error("Invalid Relay URL", j);
      return;
    }
    const k = c || x.hostname, O = x.protocol === "https:", E = typeof l == "boolean" ? l : void 0, T = E ?? O, I = T ? 443 : 80, C = i > 0 ? i : I;
    console.log(`[Bridge] Connecting to Agent Relay via Reverb host=${k} port=${C} secure=${T}`), this.echo = new Dr({
      broadcaster: "reverb",
      key: game.settings.get(te, "reverbKey") || "itdsiqtx8cpskowawl1p",
      wsHost: k,
      wsPort: C,
      wssPort: C,
      forceTLS: T,
      enabledTransports: ["ws", "wss"],
      disableStats: !0,
      authEndpoint: `${h.replace(/\/$/, "")}/api/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: "Bearer " + s,
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
    const h = async (s, a) => {
      this.isConnected && (!s || !["character", "mook"].includes(s.type) || (console.log(`%c[Bridge] 🔄 Syncing change for ${s.name}`, "color: #ffaa00;", a), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: s.id,
        delta: a,
        success: !0
      })));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (s, a, i, l) => {
      if (a.system) {
        const c = {}, x = (k, O = "system.") => {
          for (let E in k) {
            const T = k[E];
            T !== null && typeof T == "object" && !Array.isArray(T) && !(T instanceof foundry.utils.Color) ? x(T, `${O}${E}.`) : c[`${O}${E}`] = T;
          }
        };
        x(a.system), h(s, c);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (s, a, i, l) => {
      const c = s.parent;
      if (c instanceof Actor) {
        const x = {}, k = `items.${s.id}.`;
        if (a.system) {
          const O = (E, T = `${k}system.`) => {
            for (let I in E) {
              const C = E[I];
              C !== null && typeof C == "object" && !Array.isArray(C) && !(C instanceof foundry.utils.Color) ? O(C, `${T}${I}.`) : x[`${T}${I}`] = C;
            }
          };
          O(a.system);
        }
        for (let O in a)
          O !== "system" && O !== "_id" && (x[`${k}${O}`] = a[O]);
        Object.keys(x).length > 0 && h(c, x);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (s, a, i) => {
      const l = s.parent;
      if (l instanceof Actor) {
        const c = {
          [`items.+${s.id}`]: s.toObject()
        };
        h(l, c);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (s, a, i) => {
      const l = s.parent;
      if (l instanceof Actor) {
        const c = {
          [`items.${s.id}`]: null
        };
        h(l, c);
      }
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(h) {
    let s = game.settings.get(te, "apiUrl");
    const a = game.settings.get(te, "apiKey");
    if (!(!s || !a)) {
      s.endsWith("/") && (s = s.slice(0, -1));
      try {
        const i = await fetch(`${s}/api/foundry/callback`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${a}`,
            Accept: "application/json"
          },
          body: JSON.stringify(h)
        });
        i.ok || console.error("Cyberpunk Bridge: Callback failed", i.statusText);
      } catch (i) {
        console.error("Cyberpunk Bridge: Error sending callback", i);
      }
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(h) {
    var x, k, O, E, T, I, C, j, S, v, b, A, F, X, G, re, ce, ne, le, he, Pe, ve, ye, Le;
    const s = h.payload || h;
    console.log("Received Order:", s);
    const a = s.type, i = s.actorId, l = s.tokenId, c = s.requestId;
    switch (a) {
      case "UPDATE_ACTOR": {
        const d = game.actors.get(i);
        if (!d) {
          console.warn(`⚠️ Actor ID ${i} not found in this world.`);
          return;
        }
        await d.update(s.changes), ui.notifications.info(`💾 Sync: ${d.name} updated.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: i, success: !0, requestId: c });
        break;
      }
      case "ITEM_EQUIP": {
        const d = game.actors.get(i);
        if (d) {
          const p = d.items.get(s.itemId);
          if (p) {
            const f = `items.${s.itemId}.system.equipped`;
            await p.update({ "system.equipped": s.state }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [f]: s.state }, success: !0, requestId: c });
          }
        }
        break;
      }
      case "INSTALL_PROGRAM": {
        const d = game.actors.get(i);
        if (!d) return;
        const p = d.items.get(s.cyberdeckId), f = d.items.get(s.programId);
        if (!p || !f) return;
        const y = p.system.installedItems.usedSlots || 0, _ = p.system.installedItems.slots || 0, B = f.system.size || 1;
        if (y + B > _) {
          ui.notifications.warn("Not enough memory slots on cyberdeck.");
          return;
        }
        const R = p.system.installedItems.list || [];
        if (R.includes(s.programId)) return;
        const N = [...R, s.programId], $ = y + B;
        await p.update({
          "system.installedItems.list": N,
          "system.installedItems.usedSlots": $
        }), await this.sendResponse({
          type: "SHEET_DELTA",
          actorId: i,
          delta: {
            [`items.${s.cyberdeckId}.system.installedItems.list`]: N,
            [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: $
          },
          success: !0,
          requestId: c
        });
        break;
      }
      case "REMOVE_PROGRAM": {
        const d = game.actors.get(i);
        if (!d) return;
        const p = d.items.get(s.cyberdeckId), f = d.items.get(s.programId);
        if (!p) return;
        const y = p.system.installedItems.list || [];
        if (!y.includes(s.programId)) return;
        const _ = y.filter((W) => W !== s.programId), B = f && f.system.size || 1, R = p.system.installedItems.usedSlots || 0, N = Math.max(0, R - B);
        await p.update({
          "system.installedItems.list": _,
          "system.installedItems.usedSlots": N
        });
        const $ = {
          [`items.${s.cyberdeckId}.system.installedItems.list`]: _,
          [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: N
        };
        f && f.system.isRezzed && (await f.update({ "system.isRezzed": !1 }), $[`items.${s.programId}.system.isRezzed`] = !1), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: $, success: !0, requestId: c });
        break;
      }
      case "TOGGLE_REZ": {
        const d = game.actors.get(i);
        if (d) {
          const p = d.items.get(s.programId);
          p && (await p.update({ "system.isRezzed": s.targetState }), await this.sendResponse({
            type: "SHEET_DELTA",
            actorId: i,
            delta: { [`items.${s.programId}.system.isRezzed`]: s.targetState },
            success: !0,
            requestId: c
          }));
        }
        break;
      }
      case "DAMAGE_ROLL": {
        const d = game.actors.get(i), p = d.items.get(s.weaponId);
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
          }, y = await this.rollAndCapture(i, f);
          y.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: i,
            total: y.total,
            isCriticalSuccess: y.isCriticalSuccess,
            isCriticalFailure: y.isCriticalFailure,
            label: `${p.name} (Damage)`,
            rawRoll: {
              total: y.total,
              isCriticalSuccess: y.isCriticalSuccess,
              isCriticalFailure: y.isCriticalFailure,
              label: y.label,
              resultTotal: (x = y.rawRoll) == null ? void 0 : x.resultTotal,
              rollTitle: (k = y.rawRoll) == null ? void 0 : k.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DEATH_SAVE": {
        const d = game.actors.get(i);
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
          }, f = await this.rollAndCapture(i, p);
          if (f.success) {
            const y = d.system.derivedStats.deathsave || {};
            await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: i,
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
                rollTitle: (E = f.rawRoll) == null ? void 0 : E.rollTitle
              },
              success: !0
            }), await this.sendResponse({
              type: "SHEET_DELTA",
              actorId: i,
              delta: { "system.derivedStats.deathsave": y },
              tab: "stats",
              success: !0
            });
          }
        }
        break;
      }
      case "FACEDOWN_ROLL": {
        const d = game.actors.get(i), p = async () => {
          await d.sheet._onRoll({
            "data-roll-type": "facedown",
            "data-roll-title": "Face Down",
            type: "click",
            currentTarget: {
              "data-roll-type": "facedown",
              "data-roll-title": "Face Down"
            }
          });
        }, f = await this.rollAndCapture(i, p);
        f.success && await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: c,
          actorId: i,
          total: f.total,
          isCriticalSuccess: f.isCriticalSuccess,
          isCriticalFailure: f.isCriticalFailure,
          rawRoll: {
            total: f.total,
            isCriticalSuccess: f.isCriticalSuccess,
            isCriticalFailure: f.isCriticalFailure,
            label: f.label,
            resultTotal: (T = f.rawRoll) == null ? void 0 : T.resultTotal,
            rollTitle: (I = f.rawRoll) == null ? void 0 : I.rollTitle
          },
          success: !0
        });
        break;
      }
      case "INITIATIVE_ROLL": {
        const d = game.actors.get(i);
        if (d) {
          const p = async () => {
            await d.rollInitiative();
          }, f = await this.rollAndCapture(i, p);
          f.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: i,
            total: f.total,
            isCriticalSuccess: f.isCriticalSuccess,
            isCriticalFailure: f.isCriticalFailure,
            label: "Initiative",
            rawRoll: {
              total: f.total,
              isCriticalSuccess: f.isCriticalSuccess,
              isCriticalFailure: f.isCriticalFailure,
              label: f.label,
              resultTotal: (C = f.rawRoll) == null ? void 0 : C.resultTotal,
              rollTitle: (j = f.rawRoll) == null ? void 0 : j.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "PROGRAM_ROLL": {
        const d = game.actors.get(i);
        if (d) {
          const p = document.createElement("a");
          p.dataset.rollType = s.rollType, p.dataset.cyberdeckId = s.cyberdeckId, p.dataset.rollTitle = s.programName, p.dataset.interfaceAbility = s.programName, p.dataset.itemId = s.cyberdeckId, p.dataset.programId = s.programId, p.dataset.executionType = s.executionType;
          const f = async () => {
            await d.sheet._onRoll({
              type: "click",
              currentTarget: p
            });
          }, y = await this.rollAndCapture(i, f);
          y.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: i,
            total: y.total,
            isCriticalSuccess: y.isCriticalSuccess,
            isCriticalFailure: y.isCriticalFailure,
            label: s.programName,
            rawRoll: {
              total: y.total,
              isCriticalSuccess: y.isCriticalSuccess,
              isCriticalFailure: y.isCriticalFailure,
              label: y.label,
              resultTotal: (S = y.rawRoll) == null ? void 0 : S.resultTotal,
              rollTitle: (v = y.rawRoll) == null ? void 0 : v.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "ROLE_ROLL": {
        const d = game.actors.get(i);
        if (d) {
          const p = d.items.getName(s.itemName);
          if (p) {
            const f = {
              "data-roll-type": "roleAbility",
              "data-roll-title": s.label,
              "data-item-id": p.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "roleAbility",
                "data-roll-title": s.label,
                "data-item-id": p.id,
                "data-item-subtype": s.label
              }
            };
            s.isAbility && (f["data-roll-subtype"] = "subRoleAbility", f["data-role-name"] = s.label, f.currentTarget["data-roll-subtype"] = "subRoleAbility", f.currentTarget["data-role-name"] = s.label);
            const y = async () => {
              await d.sheet._onRoll(f);
            }, _ = await this.rollAndCapture(i, y);
            _.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: i,
              total: _.total,
              isCriticalSuccess: _.isCriticalSuccess,
              isCriticalFailure: _.isCriticalFailure,
              label: s.label,
              rawRoll: {
                total: _.total,
                isCriticalSuccess: _.isCriticalSuccess,
                isCriticalFailure: _.isCriticalFailure,
                label: _.label,
                resultTotal: (b = _.rawRoll) == null ? void 0 : b.resultTotal,
                rollTitle: (A = _.rawRoll) == null ? void 0 : A.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "SKILL_ROLL": {
        const d = game.actors.get(i);
        if (d) {
          const p = d.items.getName(s.label);
          if (p) {
            const f = async () => {
              await d.sheet._onRoll({
                "data-roll-type": "skill",
                "data-roll-title": s.label,
                "data-item-id": p.id,
                type: "click",
                currentTarget: {
                  "data-roll-type": "skill",
                  "data-roll-title": s.label,
                  "data-item-id": p.id
                }
              });
            }, y = await this.rollAndCapture(i, f);
            y.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: i,
              total: y.total,
              isCriticalSuccess: y.isCriticalSuccess,
              isCriticalFailure: y.isCriticalFailure,
              label: s.label,
              rawRoll: {
                total: y.total,
                isCriticalSuccess: y.isCriticalSuccess,
                isCriticalFailure: y.isCriticalFailure,
                label: y.label,
                resultTotal: (F = y.rawRoll) == null ? void 0 : F.resultTotal,
                rollTitle: (X = y.rawRoll) == null ? void 0 : X.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "STAT_ROLL": {
        const d = game.actors.get(i);
        if (d) {
          const p = async () => {
            await d.sheet._onRoll({
              "data-roll-type": "stat",
              "data-roll-title": s.label,
              type: "click",
              currentTarget: {
                "data-roll-type": "stat",
                "data-roll-title": s.label
              }
            });
          }, f = await this.rollAndCapture(i, p);
          f.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: c,
            actorId: i,
            total: f.total,
            isCriticalSuccess: f.isCriticalSuccess,
            isCriticalFailure: f.isCriticalFailure,
            label: s.label,
            rawRoll: {
              total: f.total,
              isCriticalSuccess: f.isCriticalSuccess,
              isCriticalFailure: f.isCriticalFailure,
              label: f.label,
              resultTotal: (G = f.rawRoll) == null ? void 0 : G.resultTotal,
              rollTitle: (re = f.rawRoll) == null ? void 0 : re.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DICE_ROLL": {
        c && this.activeRequests.set(c, { actorId: i, timestamp: Date.now() });
        const d = new Roll(s.formula);
        await d.evaluate(), await d.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
          flavor: s.flavor
        }), await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: c,
          actorId: i,
          total: d.total,
          isCriticalSuccess: d.isCriticalSuccess || !1,
          isCriticalFailure: d.isCriticalFailure || !1,
          label: s.flavor || "Dice Roll",
          rawRoll: {
            rollTitle: s.flavor || "Dice Roll",
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
          s.direction === "up" ? p.y = d.document.y - canvas.grid.size : s.direction === "down" ? p.y = d.document.y + canvas.grid.size : s.direction === "left" ? p.x = d.document.x - canvas.grid.size : s.direction === "right" && (p.x = d.document.x + canvas.grid.size), await d.document.update(p), setTimeout(async () => {
            const f = { tokenId: l, requestId: c || "move-refresh" };
            await this.handleIncomingData({ type: "LIST_VISIBLE_TOKENS", ...f }), Array.from(game.user.targets)[0] && s.weaponId && await this.handleIncomingData({ type: "GET_DV_INFO", ...f, weaponId: s.weaponId });
          }, 200), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: l, success: !0, requestId: c });
        }
        break;
      }
      case "RELOAD_WEAPON": {
        const d = game.actors.get(i);
        if (d) {
          const p = d.items.get(s.weaponId), f = s.ammoId ? d.items.get(s.ammoId) : null, y = async () => {
            await p.reload();
            const _ = {
              [`items.${s.weaponId}.system.magazine`]: {
                value: p.system.magazine.value,
                max: p.system.magazine.max
              },
              [`items.${s.weaponId}.system.installedItems`]: {
                list: [...p.system.installedItems.list],
                slots: p.system.installedItems.slots,
                usedSlots: p.system.installedItems.usedSlots
              }
            };
            f && (_[`items.${f.id}.system.amount`] = f.system.amount), d.items.filter((R) => R.type === "ammo").forEach((R) => {
              _[`items.${R.id}.system.amount`] = R.system.amount;
            }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: _, success: !0, requestId: c });
          };
          if (f) {
            let _ = p.getInstalledItems("ammo");
            _ && _.length > 0 && p.uninstallItems(_), setTimeout(function() {
              p.installItems([f]);
            }, 500), setTimeout(async () => {
              await y();
            }, 1500);
          } else
            await y();
        }
        break;
      }
      case "TARGET_TOKEN": {
        const d = canvas.tokens.get(s.tokenId);
        d && (d.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: s.tokenId, success: !0 }));
        break;
      }
      case "UPDATE_STAT": {
        const d = game.actors.get(i);
        if (d) {
          const p = `system.${s.label}`;
          let f;
          if (s.operation === "inc") {
            const y = p.split(".");
            let _ = d;
            for (let N = 0; N < y.length; N++)
              _ = N === 0 ? _[y[N]] : _ == null ? void 0 : _[y[N]];
            const B = Number(_) || 0, R = Number(s.delta) || 0;
            f = B + R;
          } else
            f = typeof s.value == "string" ? s.value : Number(s.value) || 0;
          await d.update({ [p]: f }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [p]: f }, tab: "stats", success: !0 });
        }
        break;
      }
      case "ATTACK_ROLL": {
        const d = game.actors.get(i);
        if (d) {
          const p = s.weaponId, f = s.fireMode, y = canvas.tokens.get(s.targetId), _ = "firetype-" + p, B = "cyberpunk-red-core";
          let R = "";
          switch (f) {
            case "Auto":
              R = "autofire";
              break;
            case "Suppress":
              R = "suppressive";
              break;
            case "Aimed":
              R = "aimed", await d.setFlag(B, "aimedLocation", "head");
              break;
            default:
              R = "";
              break;
          }
          y && y.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), R === "" ? await d.unsetFlag(B, _) : await d.setFlag(B, _, R);
          const N = document.createElement("a");
          N.dataset.rollType = "attack", N.dataset.itemId = p, N.dataset.rollTitle = f + " Attack";
          const $ = async () => {
            await d.sheet._onRoll({
              preventDefault: () => {
              },
              currentTarget: N,
              type: "click"
            }, { showDialog: !0 });
          };
          let W = null;
          if (y) {
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
              }, Z = [6, 12, 25, 50, 100, 200, 400, 800], ee = y.center.x - H.center.x, fe = y.center.y - H.center.y, z = Math.sqrt(Math.pow(ee, 2) + Math.pow(fe, 2)), ae = Math.ceil(z / (((ne = canvas.grid) == null ? void 0 : ne.size) || 128)), ue = d.items.get(p), pe = {
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
              }, de = pe[(le = ue == null ? void 0 : ue.system) == null ? void 0 : le.weaponType] || pe[(he = ue == null ? void 0 : ue.system) == null ? void 0 : he.variety] || "Pistol", se = Z.findIndex((we) => ae <= we);
              let be = se !== -1 ? J[de][se] : 99;
              Array.isArray(J[de]) && typeof J[de][0] == "string" && (be = J[de][Math.min(se !== -1 ? se : 0, J[de].length - 1)]), W = be === 99 ? "Out of Range" : be;
            }
          }
          const M = await this.rollAndCapture(i, $);
          if (M.success) {
            let H = null;
            typeof W == "number" ? H = M.total >= W ? "Hit" : "Miss" : W === "Out of Range" && (H = "Miss"), await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: c,
              actorId: i,
              total: M.total,
              isCriticalSuccess: M.isCriticalSuccess,
              isCriticalFailure: M.isCriticalFailure,
              label: f + " Attack",
              rawRoll: {
                total: M.total,
                isCriticalSuccess: M.isCriticalSuccess,
                isCriticalFailure: M.isCriticalFailure,
                label: M.label,
                resultTotal: (Pe = M.rawRoll) == null ? void 0 : Pe.resultTotal,
                rollTitle: (ve = M.rawRoll) == null ? void 0 : ve.rollTitle
              },
              dv: W,
              outcome: H,
              success: !0
            });
          }
        }
        break;
      }
      case "GET_ROLL_MODIFIERS": {
        const d = game.actors.get(i);
        if (!d) return;
        const p = s.weaponId, f = p ? d.items.get(p) : null;
        let y = "None", _ = 0, B = "None", R = 0, N = 0;
        if (f) {
          y = f.system.weaponSkill;
          const z = d.items.find((ae) => ae.type === "skill" && ae.name === y);
          _ = z && Number(z.system.level) || 0, B = z && z.system.stat || "ref", R = Number((ye = d.system.stats[B]) == null ? void 0 : ye.value) || 0, N = Number(f.system.attackmod) || 0;
        }
        let $ = 0;
        const W = [], M = Number(d.system.derivedStats.hp.value) || 0, H = Number(d.system.derivedStats.seriouslyWounded) || 0, J = d.items.find((z) => z.name === "Stim" && z.type === "drug"), Z = J && J.effects.some((z) => z.disabled === !1);
        if (M <= 0)
          $ -= 4, W.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
        else if (M <= H) {
          const z = Z ? 0 : -2;
          $ += z, W.push({
            title: Z ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
            penalty: z,
            description: Z ? "Ignoring penalty due to Stim drug." : "All actions at -2."
          });
        }
        d.items.filter((z) => z.type === "criticalInjury").forEach((z) => {
          var de;
          const ae = z.name || "Injury", ue = (((de = z.system.description) == null ? void 0 : de.value) || "").replace(/<[^>]*>/g, "");
          let pe = 0;
          if (z.effects && z.effects.length > 0 && z.effects.forEach((se) => {
            !se.disabled && se.changes && se.changes.forEach((be) => {
              const we = parseInt(be.value);
              isNaN(we) || (pe += we);
            });
          }), pe === 0) {
            const se = String(ae).toLowerCase();
            (ue.includes("-2") || se.includes("arm") || se.includes("eye")) && (pe = -2);
          }
          $ += pe, W.push({ title: ae, description: ue, penalty: pe });
        });
        const fe = {
          actorName: d.name,
          baseBonus: R + _ + N,
          breakdown: {
            statName: B,
            statValue: R,
            skillName: y,
            skillLevel: _,
            weaponAcc: N
          },
          totalPenalty: $,
          finalModifier: R + _ + N + $,
          injuries: W
        };
        console.log("GET_ROLL_MODIFIERS result:", fe), await this.sendResponse({ type: "ROLL_MODIFIERS_DATA", result: fe });
        break;
      }
      case "GET_DV_INFO": {
        const d = canvas.tokens.get(s.tokenId), p = s.targetTokenId || ((Le = Array.from(game.user.targets)[0]) == null ? void 0 : Le.id), f = canvas.tokens.get(p), y = s.weaponId;
        if (d && f) {
          const _ = {
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
          }, B = [6, 12, 25, 50, 100, 200, 400, 800], R = f.center.x - d.center.x, N = f.center.y - d.center.y, $ = Math.sqrt(Math.pow(R, 2) + Math.pow(N, 2)), W = Math.ceil($ / 128), M = d.actor.items.get(y), H = {
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
          }, J = H[M.system.weaponType] || H[M.system.variety] || "Pistol", Z = B.findIndex((z) => W <= z);
          let ee = Z !== -1 ? _[J][Z] : 99;
          Array.isArray(_[J]) && typeof _[J][0] == "string" && (ee = _[J][Math.min(Z !== -1 ? Z : 0, _[J].length - 1)]);
          const fe = {
            targetName: f.name,
            distanceMeters: W,
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
          const p = canvas.grid.size, f = canvas.dimensions, y = d.center.x, _ = d.center.y, B = canvas.tokens.placeables.filter((R) => {
            const N = !R.document.hidden, $ = R.actor && (R.actor.type === "character" || R.actor.type === "mook"), W = R.x >= f.sceneX && R.x <= f.sceneX + f.sceneWidth && R.y >= f.sceneY && R.y <= f.sceneY + f.sceneHeight;
            return N && $ && W && R.id !== d.id;
          }).map((R) => {
            const N = R.center.x - y, $ = R.center.y - _, M = (Math.sqrt(Math.pow(N, 2) + Math.pow($, 2)) / p).toFixed(2);
            return {
              name: R.name,
              id: R.id,
              distanceM: parseFloat(M),
              type: R.actor.type
            };
          }).sort((R, N) => R.distanceM - N.distanceM);
          console.log("LIST_VISIBLE_TOKENS result:", B), await this.sendResponse({ type: "VISIBLE_TOKENS_DATA", tokens: B, requestId: c });
        }
        break;
      }
      case "GET_ACTOR": {
        let d = s.actorId;
        if (d !== null) {
          const p = game.actors.get(d);
          if (p) {
            const f = p.toObject(), y = {
              _id: p.id,
              name: p.name,
              type: p.type,
              img: f.img,
              system: f.system,
              items: (f.items || []).map((_) => ({
                _id: _._id,
                name: _.name,
                type: _.type,
                img: _.img,
                system: _.system
              })),
              flags: f.flags && f.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": f.flags["cyberpunk-red-core"] } : {}
            };
            await this.sendResponse({ type: "ACTOR_DATA", actor: y, requestId: c });
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
