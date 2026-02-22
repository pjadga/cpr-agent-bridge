import.meta.hot && import.meta.hot.accept((g) => {
  console.log("Hot reloading module...");
});
function be(g) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
    return typeof f;
  } : function(f) {
    return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
  }, be(g);
}
function W(g, f) {
  if (!(g instanceof f))
    throw new TypeError("Cannot call a class as a function");
}
function Rr(g, f) {
  for (var s = 0; s < f.length; s++) {
    var a = f[s];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(g, a.key, a);
  }
}
function X(g, f, s) {
  return f && Rr(g.prototype, f), Object.defineProperty(g, "prototype", {
    writable: !1
  }), g;
}
function we() {
  return we = Object.assign || function(g) {
    for (var f = 1; f < arguments.length; f++) {
      var s = arguments[f];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (g[a] = s[a]);
    }
    return g;
  }, we.apply(this, arguments);
}
function Z(g, f) {
  if (typeof f != "function" && f !== null)
    throw new TypeError("Super expression must either be null or a function");
  g.prototype = Object.create(f && f.prototype, {
    constructor: {
      value: g,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(g, "prototype", {
    writable: !1
  }), f && ze(g, f);
}
function Re(g) {
  return Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, Re(g);
}
function ze(g, f) {
  return ze = Object.setPrototypeOf || function(a, i) {
    return a.__proto__ = i, a;
  }, ze(g, f);
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
function Pr(g, f) {
  if (f && (typeof f == "object" || typeof f == "function"))
    return f;
  if (f !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ar(g);
}
function ee(g) {
  var f = Ir();
  return function() {
    var a = Re(g), i;
    if (f) {
      var u = Re(this).constructor;
      i = Reflect.construct(a, arguments, u);
    } else
      i = a.apply(this, arguments);
    return Pr(this, i);
  };
}
var qe = /* @__PURE__ */ function() {
  function g() {
    W(this, g);
  }
  return X(g, [{
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
}(), bt = /* @__PURE__ */ function() {
  function g(f) {
    W(this, g), this.namespace = f;
  }
  return X(g, [{
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
  } catch (f) {
    if (f.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var Be = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s(a, i, u) {
    var l;
    return W(this, s), l = f.call(this), l.name = i, l.pusher = a, l.options = u, l.eventFormatter = new bt(l.options.namespace), l.subscribe(), l;
  }
  return X(s, [{
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
    value: function(i, u) {
      return this.on(this.eventFormatter.format(i), u), this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(i) {
      var u = this;
      return this.subscription.bind_global(function(l, L) {
        if (!l.startsWith("pusher:")) {
          var k = u.options.namespace.replace(/\./g, "\\"), E = l.startsWith(k) ? l.substring(k.length + 1) : "." + l;
          i(E, L);
        }
      }), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(i, u) {
      return u ? this.subscription.unbind(this.eventFormatter.format(i), u) : this.subscription.unbind(this.eventFormatter.format(i)), this;
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
      return this.on("pusher:subscription_error", function(u) {
        i(u);
      }), this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(i, u) {
      return this.subscription.bind(i, u), this;
    }
  }]), s;
}(qe), wt = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, u) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(i), u), this;
      }
    )
  }]), s;
}(Be), Er = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, u) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(i), u), this;
      }
    )
  }]), s;
}(Be), xr = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("pusher:subscription_succeeded", function(u) {
          i(Object.keys(u.members).map(function(l) {
            return u.members[l];
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
      return this.on("pusher:member_added", function(u) {
        i(u.info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(i, u) {
      return this.pusher.channels.channels[this.name].trigger("client-".concat(i), u), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(i) {
      return this.on("pusher:member_removed", function(u) {
        i(u.info);
      }), this;
    }
  }]), s;
}(wt), kt = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s(a, i, u) {
    var l;
    return W(this, s), l = f.call(this), l.events = {}, l.listeners = {}, l.name = i, l.socket = a, l.options = u, l.eventFormatter = new bt(l.options.namespace), l.subscribe(), l;
  }
  return X(s, [{
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
    value: function(i, u) {
      return this.on(this.eventFormatter.format(i), u), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(i, u) {
      return this.unbindEvent(this.eventFormatter.format(i), u), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(i) {
      return this.on("connect", function(u) {
        i(u);
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
    value: function(i, u) {
      var l = this;
      return this.listeners[i] = this.listeners[i] || [], this.events[i] || (this.events[i] = function(L, k) {
        l.name === L && l.listeners[i] && l.listeners[i].forEach(function(E) {
          return E(k);
        });
      }, this.socket.on(i, this.events[i])), this.listeners[i].push(u), this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function() {
      var i = this;
      Object.keys(this.events).forEach(function(u) {
        i.unbindEvent(u);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function(i, u) {
      this.listeners[i] = this.listeners[i] || [], u && (this.listeners[i] = this.listeners[i].filter(function(l) {
        return l !== u;
      })), (!u || this.listeners[i].length === 0) && (this.events[i] && (this.socket.removeListener(i, this.events[i]), delete this.events[i]), delete this.listeners[i]);
    }
  }]), s;
}(qe), _t = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, u) {
        return this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(i),
          data: u
        }), this;
      }
    )
  }]), s;
}(kt), Or = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("presence:subscribed", function(u) {
          i(u.map(function(l) {
            return l.user_info;
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
      return this.on("presence:joining", function(u) {
        return i(u.user_info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(i, u) {
      return this.socket.emit("client event", {
        channel: this.name,
        event: "client-".concat(i),
        data: u
      }), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(i) {
      return this.on("presence:leaving", function(u) {
        return i(u.user_info);
      }), this;
    }
  }]), s;
}(_t), Ie = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
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
    value: function(i, u) {
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
    value: function(i, u) {
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
    value: function(i, u) {
      return this;
    }
  }]), s;
}(qe), St = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, u) {
        return this;
      }
    )
  }]), s;
}(Ie), Nr = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(i, u) {
        return this;
      }
    )
  }]), s;
}(Ie), Mr = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    return W(this, s), f.apply(this, arguments);
  }
  return X(s, [{
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
    value: function(i, u) {
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
}(St), $e = /* @__PURE__ */ function() {
  function g(f) {
    W(this, g), this._defaultOptions = {
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
    }, this.setOptions(f), this.connect();
  }
  return X(g, [{
    key: "setOptions",
    value: function(s) {
      this.options = we(this._defaultOptions, s);
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
}(), vt = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    var a;
    return W(this, s), a = f.apply(this, arguments), a.channels = {}, a;
  }
  return X(s, [{
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
    value: function(i, u, l) {
      return this.channel(i).listen(u, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new Be(this.pusher, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new wt(this.pusher, "private-" + i, this.options)), this.channels["private-" + i];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(i) {
      return this.channels["private-encrypted-" + i] || (this.channels["private-encrypted-" + i] = new Er(this.pusher, "private-encrypted-" + i, this.options)), this.channels["private-encrypted-" + i];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(i) {
      return this.channels["presence-" + i] || (this.channels["presence-" + i] = new xr(this.pusher, "presence-" + i, this.options)), this.channels["presence-" + i];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(i) {
      var u = this, l = [i, "private-" + i, "private-encrypted-" + i, "presence-" + i];
      l.forEach(function(L, k) {
        u.leaveChannel(L);
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
}($e), yt = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    var a;
    return W(this, s), a = f.apply(this, arguments), a.channels = {}, a;
  }
  return X(s, [{
    key: "connect",
    value: function() {
      var i = this, u = this.getSocketIO();
      return this.socket = u(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(i.channels).forEach(function(l) {
          l.subscribe();
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
    value: function(i, u, l) {
      return this.channel(i).listen(u, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new kt(this.socket, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new _t(this.socket, "private-" + i, this.options)), this.channels["private-" + i];
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
      var u = this, l = [i, "private-" + i, "presence-" + i];
      l.forEach(function(L) {
        u.leaveChannel(L);
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
}($e), Dr = /* @__PURE__ */ function(g) {
  Z(s, g);
  var f = ee(s);
  function s() {
    var a;
    return W(this, s), a = f.apply(this, arguments), a.channels = {}, a;
  }
  return X(s, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, u, l) {
      return new Ie();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return new Ie();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return new St();
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
}($e), jr = /* @__PURE__ */ function() {
  function g(f) {
    W(this, g), this.options = f, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return X(g, [{
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
        this.connector = new vt(we(we({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new vt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new yt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new Dr(this.options);
      else if (typeof this.options.broadcaster == "function" && Lr(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(be(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
      if (this.connector instanceof yt)
        throw new Error("Broadcaster ".concat(be(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : be(Turbo)) === "object" && this.registerTurboRequestInterceptor();
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
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(a, i, u) {
        s.socketId() && u.setRequestHeader("X-Socket-Id", s.socketId());
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
var Ct = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(g, f) {
  (function(a, i) {
    g.exports = i();
  })(window, function() {
    return (
      /******/
      function(s) {
        var a = {};
        function i(u) {
          if (a[u])
            return a[u].exports;
          var l = a[u] = {
            /******/
            i: u,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return s[u].call(l.exports, l, l.exports, i), l.l = !0, l.exports;
        }
        return i.m = s, i.c = a, i.d = function(u, l, L) {
          i.o(u, l) || Object.defineProperty(u, l, { enumerable: !0, get: L });
        }, i.r = function(u) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
        }, i.t = function(u, l) {
          if (l & 1 && (u = i(u)), l & 8 || l & 4 && typeof u == "object" && u && u.__esModule) return u;
          var L = /* @__PURE__ */ Object.create(null);
          if (i.r(L), Object.defineProperty(L, "default", { enumerable: !0, value: u }), l & 2 && typeof u != "string") for (var k in u) i.d(L, k, (function(E) {
            return u[E];
          }).bind(null, k));
          return L;
        }, i.n = function(u) {
          var l = u && u.__esModule ? (
            /******/
            function() {
              return u.default;
            }
          ) : (
            /******/
            function() {
              return u;
            }
          );
          return i.d(l, "a", l), l;
        }, i.o = function(u, l) {
          return Object.prototype.hasOwnProperty.call(u, l);
        }, i.p = "", i(i.s = 2);
      }([
        /* 0 */
        /***/
        function(s, a, i) {
          var u = this && this.__extends || /* @__PURE__ */ function() {
            var S = function(v, c) {
              return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, p) {
                h.__proto__ = p;
              } || function(h, p) {
                for (var y in p) p.hasOwnProperty(y) && (h[y] = p[y]);
              }, S(v, c);
            };
            return function(v, c) {
              S(v, c);
              function h() {
                this.constructor = v;
              }
              v.prototype = c === null ? Object.create(c) : (h.prototype = c.prototype, new h());
            };
          }();
          Object.defineProperty(a, "__esModule", { value: !0 });
          var l = 256, L = (
            /** @class */
            function() {
              function S(v) {
                v === void 0 && (v = "="), this._paddingCharacter = v;
              }
              return S.prototype.encodedLength = function(v) {
                return this._paddingCharacter ? (v + 2) / 3 * 4 | 0 : (v * 8 + 5) / 6 | 0;
              }, S.prototype.encode = function(v) {
                for (var c = "", h = 0; h < v.length - 2; h += 3) {
                  var p = v[h] << 16 | v[h + 1] << 8 | v[h + 2];
                  c += this._encodeByte(p >>> 3 * 6 & 63), c += this._encodeByte(p >>> 2 * 6 & 63), c += this._encodeByte(p >>> 1 * 6 & 63), c += this._encodeByte(p >>> 0 * 6 & 63);
                }
                var y = v.length - h;
                if (y > 0) {
                  var p = v[h] << 16 | (y === 2 ? v[h + 1] << 8 : 0);
                  c += this._encodeByte(p >>> 3 * 6 & 63), c += this._encodeByte(p >>> 2 * 6 & 63), y === 2 ? c += this._encodeByte(p >>> 1 * 6 & 63) : c += this._paddingCharacter || "", c += this._paddingCharacter || "";
                }
                return c;
              }, S.prototype.maxDecodedLength = function(v) {
                return this._paddingCharacter ? v / 4 * 3 | 0 : (v * 6 + 7) / 8 | 0;
              }, S.prototype.decodedLength = function(v) {
                return this.maxDecodedLength(v.length - this._getPaddingLength(v));
              }, S.prototype.decode = function(v) {
                if (v.length === 0)
                  return new Uint8Array(0);
                for (var c = this._getPaddingLength(v), h = v.length - c, p = new Uint8Array(this.maxDecodedLength(h)), y = 0, w = 0, N = 0, _ = 0, I = 0, D = 0, U = 0; w < h - 4; w += 4)
                  _ = this._decodeChar(v.charCodeAt(w + 0)), I = this._decodeChar(v.charCodeAt(w + 1)), D = this._decodeChar(v.charCodeAt(w + 2)), U = this._decodeChar(v.charCodeAt(w + 3)), p[y++] = _ << 2 | I >>> 4, p[y++] = I << 4 | D >>> 2, p[y++] = D << 6 | U, N |= _ & l, N |= I & l, N |= D & l, N |= U & l;
                if (w < h - 1 && (_ = this._decodeChar(v.charCodeAt(w)), I = this._decodeChar(v.charCodeAt(w + 1)), p[y++] = _ << 2 | I >>> 4, N |= _ & l, N |= I & l), w < h - 2 && (D = this._decodeChar(v.charCodeAt(w + 2)), p[y++] = I << 4 | D >>> 2, N |= D & l), w < h - 3 && (U = this._decodeChar(v.charCodeAt(w + 3)), p[y++] = D << 6 | U, N |= U & l), N !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return p;
              }, S.prototype._encodeByte = function(v) {
                var c = v;
                return c += 65, c += 25 - v >>> 8 & 6, c += 51 - v >>> 8 & -75, c += 61 - v >>> 8 & -15, c += 62 - v >>> 8 & 3, String.fromCharCode(c);
              }, S.prototype._decodeChar = function(v) {
                var c = l;
                return c += (42 - v & v - 44) >>> 8 & -l + v - 43 + 62, c += (46 - v & v - 48) >>> 8 & -l + v - 47 + 63, c += (47 - v & v - 58) >>> 8 & -l + v - 48 + 52, c += (64 - v & v - 91) >>> 8 & -l + v - 65 + 0, c += (96 - v & v - 123) >>> 8 & -l + v - 97 + 26, c;
              }, S.prototype._getPaddingLength = function(v) {
                var c = 0;
                if (this._paddingCharacter) {
                  for (var h = v.length - 1; h >= 0 && v[h] === this._paddingCharacter; h--)
                    c++;
                  if (v.length < 4 || c > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return c;
              }, S;
            }()
          );
          a.Coder = L;
          var k = new L();
          function E(S) {
            return k.encode(S);
          }
          a.encode = E;
          function x(S) {
            return k.decode(S);
          }
          a.decode = x;
          var P = (
            /** @class */
            function(S) {
              u(v, S);
              function v() {
                return S !== null && S.apply(this, arguments) || this;
              }
              return v.prototype._encodeByte = function(c) {
                var h = c;
                return h += 65, h += 25 - c >>> 8 & 6, h += 51 - c >>> 8 & -75, h += 61 - c >>> 8 & -13, h += 62 - c >>> 8 & 49, String.fromCharCode(h);
              }, v.prototype._decodeChar = function(c) {
                var h = l;
                return h += (44 - c & c - 46) >>> 8 & -l + c - 45 + 62, h += (94 - c & c - 96) >>> 8 & -l + c - 95 + 63, h += (47 - c & c - 58) >>> 8 & -l + c - 48 + 52, h += (64 - c & c - 91) >>> 8 & -l + c - 65 + 0, h += (96 - c & c - 123) >>> 8 & -l + c - 97 + 26, h;
              }, v;
            }(L)
          );
          a.URLSafeCoder = P;
          var R = new P();
          function C(S) {
            return R.encode(S);
          }
          a.encodeURLSafe = C;
          function O(S) {
            return R.decode(S);
          }
          a.decodeURLSafe = O, a.encodedLength = function(S) {
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
          var u = "utf8: invalid string", l = "utf8: invalid source encoding";
          function L(x) {
            for (var P = new Uint8Array(k(x)), R = 0, C = 0; C < x.length; C++) {
              var O = x.charCodeAt(C);
              O < 128 ? P[R++] = O : O < 2048 ? (P[R++] = 192 | O >> 6, P[R++] = 128 | O & 63) : O < 55296 ? (P[R++] = 224 | O >> 12, P[R++] = 128 | O >> 6 & 63, P[R++] = 128 | O & 63) : (C++, O = (O & 1023) << 10, O |= x.charCodeAt(C) & 1023, O += 65536, P[R++] = 240 | O >> 18, P[R++] = 128 | O >> 12 & 63, P[R++] = 128 | O >> 6 & 63, P[R++] = 128 | O & 63);
            }
            return P;
          }
          a.encode = L;
          function k(x) {
            for (var P = 0, R = 0; R < x.length; R++) {
              var C = x.charCodeAt(R);
              if (C < 128)
                P += 1;
              else if (C < 2048)
                P += 2;
              else if (C < 55296)
                P += 3;
              else if (C <= 57343) {
                if (R >= x.length - 1)
                  throw new Error(u);
                R++, P += 4;
              } else
                throw new Error(u);
            }
            return P;
          }
          a.encodedLength = k;
          function E(x) {
            for (var P = [], R = 0; R < x.length; R++) {
              var C = x[R];
              if (C & 128) {
                var O = void 0;
                if (C < 224) {
                  if (R >= x.length)
                    throw new Error(l);
                  var S = x[++R];
                  if ((S & 192) !== 128)
                    throw new Error(l);
                  C = (C & 31) << 6 | S & 63, O = 128;
                } else if (C < 240) {
                  if (R >= x.length - 1)
                    throw new Error(l);
                  var S = x[++R], v = x[++R];
                  if ((S & 192) !== 128 || (v & 192) !== 128)
                    throw new Error(l);
                  C = (C & 15) << 12 | (S & 63) << 6 | v & 63, O = 2048;
                } else if (C < 248) {
                  if (R >= x.length - 2)
                    throw new Error(l);
                  var S = x[++R], v = x[++R], c = x[++R];
                  if ((S & 192) !== 128 || (v & 192) !== 128 || (c & 192) !== 128)
                    throw new Error(l);
                  C = (C & 15) << 18 | (S & 63) << 12 | (v & 63) << 6 | c & 63, O = 65536;
                } else
                  throw new Error(l);
                if (C < O || C >= 55296 && C <= 57343)
                  throw new Error(l);
                if (C >= 65536) {
                  if (C > 1114111)
                    throw new Error(l);
                  C -= 65536, P.push(String.fromCharCode(55296 | C >> 10)), C = 56320 | C & 1023;
                }
              }
              P.push(String.fromCharCode(C));
            }
            return P.join("");
          }
          a.decode = E;
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
          class u {
            constructor(e, t) {
              this.lastId = 0, this.prefix = e, this.name = t;
            }
            create(e) {
              this.lastId++;
              var t = this.lastId, r = this.prefix + t, o = this.name + "[" + t + "]", d = !1, m = function() {
                d || (e.apply(null, arguments), d = !0);
              };
              return this[t] = m, { number: t, id: r, name: o, callback: m };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var l = new u("_pusher_script_", "Pusher.ScriptReceivers"), L = {
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
          }, k = L;
          class E {
            constructor(e) {
              this.options = e, this.receivers = e.receivers || l, this.loading = {};
            }
            load(e, t, r) {
              var o = this;
              if (o.loading[e] && o.loading[e].length > 0)
                o.loading[e].push(r);
              else {
                o.loading[e] = [r];
                var d = A.createScriptRequest(o.getPath(e, t)), m = o.receivers.create(function(b) {
                  if (o.receivers.remove(m), o.loading[e]) {
                    var T = o.loading[e];
                    delete o.loading[e];
                    for (var M = function(B) {
                      B || d.cleanup();
                    }, j = 0; j < T.length; j++)
                      T[j](b, M);
                  }
                });
                d.send(m);
              }
            }
            getRoot(e) {
              var t, r = A.getDocument().location.protocol;
              return e && e.useTLS || r === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var x = new u("_pusher_dependencies", "Pusher.DependenciesReceivers"), P = new E({
            cdn_http: k.cdn_http,
            cdn_https: k.cdn_https,
            version: k.VERSION,
            suffix: k.dependency_suffix,
            receivers: x
          });
          const R = {
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
          var O = { buildLogSuffix: function(n) {
            const e = "See:", t = R.urls[n];
            if (!t)
              return "";
            let r;
            return t.fullUrl ? r = t.fullUrl : t.path && (r = R.baseUrl + t.path), r ? `${e} ${r}` : "";
          } }, S;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(S || (S = {}));
          class v extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class c extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class h extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class p extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class y extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class w extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class N extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class _ extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class I extends Error {
            constructor(e, t) {
              super(t), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var U = function(n, e, t, r, o) {
            const d = A.createXHR();
            d.open("POST", t.endpoint, !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var m in t.headers)
              d.setRequestHeader(m, t.headers[m]);
            if (t.headersProvider != null) {
              let b = t.headersProvider();
              for (var m in b)
                d.setRequestHeader(m, b[m]);
            }
            return d.onreadystatechange = function() {
              if (d.readyState === 4)
                if (d.status === 200) {
                  let b, T = !1;
                  try {
                    b = JSON.parse(d.responseText), T = !0;
                  } catch {
                    o(new I(200, `JSON returned from ${r.toString()} endpoint was invalid, yet status code was 200. Data was: ${d.responseText}`), null);
                  }
                  T && o(null, b);
                } else {
                  let b = "";
                  switch (r) {
                    case S.UserAuthentication:
                      b = O.buildLogSuffix("authenticationEndpoint");
                      break;
                    case S.ChannelAuthorization:
                      b = `Clients must be authorized to join private or presence channels. ${O.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  o(new I(d.status, `Unable to retrieve auth string from ${r.toString()} endpoint - received status: ${d.status} from ${t.endpoint}. ${b}`), null);
                }
            }, d.send(e), d;
          };
          function q(n) {
            return H(le(n));
          }
          var V = String.fromCharCode, z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", K = function(n) {
            var e = n.charCodeAt(0);
            return e < 128 ? n : e < 2048 ? V(192 | e >>> 6) + V(128 | e & 63) : V(224 | e >>> 12 & 15) + V(128 | e >>> 6 & 63) + V(128 | e & 63);
          }, le = function(n) {
            return n.replace(/[^\x00-\x7F]/g, K);
          }, se = function(n) {
            var e = [0, 2, 1][n.length % 3], t = n.charCodeAt(0) << 16 | (n.length > 1 ? n.charCodeAt(1) : 0) << 8 | (n.length > 2 ? n.charCodeAt(2) : 0), r = [
              z.charAt(t >>> 18),
              z.charAt(t >>> 12 & 63),
              e >= 2 ? "=" : z.charAt(t >>> 6 & 63),
              e >= 1 ? "=" : z.charAt(t & 63)
            ];
            return r.join("");
          }, H = window.btoa || function(n) {
            return n.replace(/[\s\S]{1,3}/g, se);
          };
          class ie {
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
          var te = ie;
          function ne(n) {
            window.clearTimeout(n);
          }
          function re(n) {
            window.clearInterval(n);
          }
          class $ extends te {
            constructor(e, t) {
              super(setTimeout, ne, e, function(r) {
                return t(), null;
              });
            }
          }
          class ue extends te {
            constructor(e, t) {
              super(setInterval, re, e, function(r) {
                return t(), r;
              });
            }
          }
          var pe = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new $(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(r) {
                return r[n].apply(r, t.concat(arguments));
              };
            }
          }, J = pe;
          function Q(n, ...e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              for (var o in r)
                r[o] && r[o].constructor && r[o].constructor === Object ? n[o] = Q(n[o] || {}, r[o]) : n[o] = r[o];
            }
            return n;
          }
          function Tt() {
            for (var n = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(ke(arguments[e]));
            return n.join(" : ");
          }
          function Ve(n, e) {
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
          function oe(n, e) {
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && e(n[t], t, n);
          }
          function We(n) {
            var e = [];
            return oe(n, function(t, r) {
              e.push(r);
            }), e;
          }
          function Rt(n) {
            var e = [];
            return oe(n, function(t) {
              e.push(t);
            }), e;
          }
          function me(n, e, t) {
            for (var r = 0; r < n.length; r++)
              e.call(t || window, n[r], r, n);
          }
          function Xe(n, e) {
            for (var t = [], r = 0; r < n.length; r++)
              t.push(e(n[r], r, n, t));
            return t;
          }
          function It(n, e) {
            var t = {};
            return oe(n, function(r, o) {
              t[o] = e(r);
            }), t;
          }
          function Ge(n, e) {
            e = e || function(o) {
              return !!o;
            };
            for (var t = [], r = 0; r < n.length; r++)
              e(n[r], r, n, t) && t.push(n[r]);
            return t;
          }
          function Je(n, e) {
            var t = {};
            return oe(n, function(r, o) {
              (e && e(r, o, n, t) || r) && (t[o] = r);
            }), t;
          }
          function At(n) {
            var e = [];
            return oe(n, function(t, r) {
              e.push([r, t]);
            }), e;
          }
          function Ke(n, e) {
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
            return It(n, function(e) {
              return typeof e == "object" && (e = ke(e)), encodeURIComponent(q(e.toString()));
            });
          }
          function Et(n) {
            var e = Je(n, function(r) {
              return r !== void 0;
            }), t = Xe(At(Lt(e)), J.method("join", "=")).join("&");
            return t;
          }
          function xt(n) {
            var e = [], t = [];
            return function r(o, d) {
              var m, b, T;
              switch (typeof o) {
                case "object":
                  if (!o)
                    return null;
                  for (m = 0; m < e.length; m += 1)
                    if (e[m] === o)
                      return { $ref: t[m] };
                  if (e.push(o), t.push(d), Object.prototype.toString.apply(o) === "[object Array]")
                    for (T = [], m = 0; m < o.length; m += 1)
                      T[m] = r(o[m], d + "[" + m + "]");
                  else {
                    T = {};
                    for (b in o)
                      Object.prototype.hasOwnProperty.call(o, b) && (T[b] = r(o[b], d + "[" + JSON.stringify(b) + "]"));
                  }
                  return T;
                case "number":
                case "string":
                case "boolean":
                  return o;
              }
            }(n, "$");
          }
          function ke(n) {
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
              var r = Tt.apply(this, arguments);
              Ue.log ? Ue.log(r) : Ue.logToConsole && e.bind(this)(r);
            }
          }
          var F = new Ot(), Nt = function(n, e, t, r, o) {
            (t.headers !== void 0 || t.headersProvider != null) && F.warn(`To send headers with the ${r.toString()} request, you must use AJAX, rather than JSONP.`);
            var d = n.nextAuthCallbackID.toString();
            n.nextAuthCallbackID++;
            var m = n.getDocument(), b = m.createElement("script");
            n.auth_callbacks[d] = function(j) {
              o(null, j);
            };
            var T = "Pusher.auth_callbacks['" + d + "']";
            b.src = t.endpoint + "?callback=" + encodeURIComponent(T) + "&" + e;
            var M = m.getElementsByTagName("head")[0] || m.documentElement;
            M.insertBefore(b, M.firstChild);
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
                this.request = A.createScriptRequest(r), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Ut = function(n, e) {
            return function(t, r) {
              var o = "http" + (e ? "s" : "") + "://", d = o + (n.host || n.options.host) + n.options.path, m = A.createJSONPRequest(d, t), b = A.ScriptReceivers.create(function(T, M) {
                l.remove(b), m.cleanup(), M && M.host && (n.host = M.host), r && r(T, M);
              });
              m.send(b);
            };
          }, Ht = {
            name: "jsonp",
            getAgent: Ut
          }, Ft = Ht;
          function Ae(n, e, t) {
            var r = n + (e.useTLS ? "s" : ""), o = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return r + "://" + o + t;
          }
          function Pe(n, e) {
            var t = "/app/" + n, r = "?protocol=" + k.PROTOCOL + "&client=js&version=" + k.VERSION + (e ? "&" + e : "");
            return t + r;
          }
          var zt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "") + Pe(n, "flash=false");
              return Ae("ws", e, t);
            }
          }, qt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "/pusher") + Pe(n);
              return Ae("http", e, t);
            }
          }, Bt = {
            getInitial: function(n, e) {
              return Ae("http", e, e.httpPath || "/pusher");
            },
            getPath: function(n, e) {
              return Pe(n);
            }
          };
          class $t {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Le(e)];
            }
            add(e, t, r) {
              var o = Le(e);
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
              var o = e ? [Le(e)] : We(this._callbacks);
              t || r ? this.removeCallback(o, t, r) : this.removeAllCallbacks(o);
            }
            removeCallback(e, t, r) {
              me(e, function(o) {
                this._callbacks[o] = Ge(this._callbacks[o] || [], function(d) {
                  return t && t !== d.fn || r && r !== d.context;
                }), this._callbacks[o].length === 0 && delete this._callbacks[o];
              }, this);
            }
            removeAllCallbacks(e) {
              me(e, function(t) {
                delete this._callbacks[t];
              }, this);
            }
          }
          function Le(n) {
            return "_" + n;
          }
          class ae {
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
              return e ? (this.global_callbacks = Ge(this.global_callbacks || [], (t) => t !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, t, r) {
              for (var o = 0; o < this.global_callbacks.length; o++)
                this.global_callbacks[o](e, t);
              var d = this.callbacks.get(e), m = [];
              if (r ? m.push(t, r) : t && m.push(t), d && d.length > 0)
                for (var o = 0; o < d.length; o++)
                  d[o].fn.apply(d[o].context || window, m);
              else this.failThrough && this.failThrough(e, t);
              return this;
            }
          }
          class Vt extends ae {
            constructor(e, t, r, o, d) {
              super(), this.initialize = A.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = r, this.key = o, this.options = d, this.state = "new", this.timeline = d.timeline, this.activityTimeout = d.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return J.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), F.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (J.defer(() => {
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
              return Q({ cid: this.id }, e);
            }
          }
          class ge {
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
          var Wt = new ge({
            urls: zt,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!A.getWebSocketAPI();
            },
            isSupported: function() {
              return !!A.getWebSocketAPI();
            },
            getSocket: function(n) {
              return A.createWebSocket(n);
            }
          }), Qe = {
            urls: qt,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Ye = Q({
            getSocket: function(n) {
              return A.HTTPFactory.createStreamingSocket(n);
            }
          }, Qe), Ze = Q({
            getSocket: function(n) {
              return A.HTTPFactory.createPollingSocket(n);
            }
          }, Qe), et = {
            isSupported: function() {
              return A.isXHRSupported();
            }
          }, Xt = new ge(Q({}, Ye, et)), Gt = new ge(Q({}, Ze, et)), Jt = {
            ws: Wt,
            xhr_streaming: Xt,
            xhr_polling: Gt
          }, _e = Jt, Kt = new ge({
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
                js_path: P.getPath("sockjs", {
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
          }), tt = {
            isSupported: function(n) {
              var e = A.isXDRSupported(n.useTLS);
              return e;
            }
          }, Qt = new ge(Q({}, Ye, tt)), Yt = new ge(Q({}, Ze, tt));
          _e.xdr_streaming = Qt, _e.xdr_polling = Yt, _e.sockjs = Kt;
          var Zt = _e;
          class en extends ae {
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
              o = Q({}, o, {
                activityTimeout: this.pingDelay
              });
              var d = this.transport.createConnection(e, t, r, o), m = null, b = function() {
                d.unbind("open", b), d.bind("closed", T), m = J.now();
              }, T = (M) => {
                if (d.unbind("closed", T), M.code === 1002 || M.code === 1003)
                  this.manager.reportDeath();
                else if (!M.wasClean && m) {
                  var j = J.now() - m;
                  j < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(j / 2, this.minPingDelay));
                }
              };
              return d.bind("open", b), d;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const nt = {
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
              var e = nt.decodeMessage(n);
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
          var he = nt;
          class rn extends ae {
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
              return r && (o.channel = r), F.debug("Event sent", o), this.send(he.encodeMessage(o));
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
                    o = he.decodeMessage(r);
                  } catch (d) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: d,
                      data: r.data
                    });
                  }
                  if (o !== void 0) {
                    switch (F.debug("Event recd", o), o.event) {
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
                oe(e, (r, o) => {
                  this.transport.unbind(o, r);
                });
              };
              oe(e, (r, o) => {
                this.transport.bind(o, r);
              });
            }
            handleCloseEvent(e) {
              var t = he.getCloseAction(e), r = he.getCloseError(e);
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
                  t = he.processHandshake(e);
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
                var t = he.getCloseAction(e) || "backoff", r = he.getCloseError(e);
                this.finish(t, { error: r });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, t) {
              this.callback(Q({ transport: this.transport, action: e }, t));
            }
          }
          class on {
            constructor(e, t) {
              this.timeline = e, this.options = t || {};
            }
            send(e, t) {
              this.timeline.isEmpty() || this.timeline.send(A.TimelineTransport.getAgent(this, e), t);
            }
          }
          class Ee extends ae {
            constructor(e, t) {
              super(function(r, o) {
                F.debug("No callbacks on " + e + " for " + r);
              }), this.name = e, this.pusher = t, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, t) {
              return t(null, { auth: "" });
            }
            trigger(e, t) {
              if (e.indexOf("client-") !== 0)
                throw new v("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var r = O.buildLogSuffix("triggeringClientEvents");
                F.warn(`Client event triggered before channel 'subscription_succeeded' event . ${r}`);
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
                e ? (this.subscriptionPending = !1, F.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: e.message
                }, e instanceof I ? { status: e.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
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
          class xe extends Ee {
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
              oe(this.members, (t, r) => {
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
            function o(d) {
              return d instanceof t ? d : new t(function(m) {
                m(d);
              });
            }
            return new (t || (t = Promise))(function(d, m) {
              function b(j) {
                try {
                  M(r.next(j));
                } catch (B) {
                  m(B);
                }
              }
              function T(j) {
                try {
                  M(r.throw(j));
                } catch (B) {
                  m(B);
                }
              }
              function M(j) {
                j.done ? d(j.value) : o(j.value).then(b, T);
              }
              M((r = r.apply(n, e || [])).next());
            });
          };
          class ln extends xe {
            constructor(e, t) {
              super(e, t), this.members = new an();
            }
            authorize(e, t) {
              super.authorize(e, (r, o) => cn(this, void 0, void 0, function* () {
                if (!r)
                  if (o = o, o.channel_data != null) {
                    var d = JSON.parse(o.channel_data);
                    this.members.setMyID(d.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let m = O.buildLogSuffix("authorizationEndpoint");
                    F.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${m}, or the user should be signed in.`), t("Invalid auth response");
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
                  var d = this.members.removeMember(r);
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
          var un = i(1), Oe = i(0);
          class hn extends xe {
            constructor(e, t, r) {
              super(e, t), this.key = null, this.nacl = r;
            }
            authorize(e, t) {
              super.authorize(e, (r, o) => {
                if (r) {
                  t(r, o);
                  return;
                }
                let d = o.shared_secret;
                if (!d) {
                  t(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(Oe.decode)(d), delete o.shared_secret, t(null, o);
              });
            }
            trigger(e, t) {
              throw new w("Client events are not currently supported for encrypted channels");
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
                F.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!t.ciphertext || !t.nonce) {
                F.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + t);
                return;
              }
              let r = Object(Oe.decode)(t.ciphertext);
              if (r.length < this.nacl.secretbox.overheadLength) {
                F.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${r.length}`);
                return;
              }
              let o = Object(Oe.decode)(t.nonce);
              if (o.length < this.nacl.secretbox.nonceLength) {
                F.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${o.length}`);
                return;
              }
              let d = this.nacl.secretbox.open(r, o, this.key);
              if (d === null) {
                F.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (m, b) => {
                  if (m) {
                    F.error(`Failed to make a request to the authEndpoint: ${b}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (d = this.nacl.secretbox.open(r, o, this.key), d === null) {
                    F.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(e, this.getDataToEmit(d));
                });
                return;
              }
              this.emit(e, this.getDataToEmit(d));
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
          class dn extends ae {
            constructor(e, t) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = t, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var r = A.getNetwork();
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new $(e || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new $(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new $(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new $(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(e) {
              return Q({}, e, {
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
              return Q({}, e, {
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
                o === "connected" && (o += " with new socket ID " + t.socket_id), F.debug("State changed", r + " -> " + o), this.timeline.info({ state: e, params: t }), this.emit("state_change", { previous: r, current: e }), this.emit(e, t);
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
              return Rt(this.channels);
            }
            find(e) {
              return this.channels[e];
            }
            remove(e) {
              var t = this.channels[e];
              return delete this.channels[e], t;
            }
            disconnect() {
              oe(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function pn(n, e) {
            if (n.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return ce.createEncryptedChannel(n, e, e.config.nacl);
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", r = O.buildLogSuffix("encryptedChannelSupport");
              throw new w(`${t}. ${r}`);
            } else {
              if (n.indexOf("private-") === 0)
                return ce.createPrivateChannel(n, e);
              if (n.indexOf("presence-") === 0)
                return ce.createPresenceChannel(n, e);
              if (n.indexOf("#") === 0)
                throw new c('Cannot create a channel with name "' + n + '".');
              return ce.createChannel(n, e);
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
              return new Ee(n, e);
            },
            createPrivateChannel(n, e) {
              return new xe(n, e);
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
          }, ce = gn;
          class rt {
            constructor(e) {
              this.options = e || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(e) {
              return ce.createAssistantToTheTransportManager(this, e, {
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
          class de {
            constructor(e, t) {
              this.strategies = e, this.loop = !!t.loop, this.failFast = !!t.failFast, this.timeout = t.timeout, this.timeoutLimit = t.timeoutLimit;
            }
            isSupported() {
              return Ke(this.strategies, J.method("isSupported"));
            }
            connect(e, t) {
              var r = this.strategies, o = 0, d = this.timeout, m = null, b = (T, M) => {
                M ? t(null, M) : (o = o + 1, this.loop && (o = o % r.length), o < r.length ? (d && (d = d * 2, this.timeoutLimit && (d = Math.min(d, this.timeoutLimit))), m = this.tryStrategy(r[o], e, { timeout: d, failFast: this.failFast }, b)) : t(!0));
              };
              return m = this.tryStrategy(r[o], e, { timeout: d, failFast: this.failFast }, b), {
                abort: function() {
                  m.abort();
                },
                forceMinPriority: function(T) {
                  e = T, m && m.forceMinPriority(T);
                }
              };
            }
            tryStrategy(e, t, r, o) {
              var d = null, m = null;
              return r.timeout > 0 && (d = new $(r.timeout, function() {
                m.abort(), o(!0);
              })), m = e.connect(t, function(b, T) {
                b && d && d.isRunning() && !r.failFast || (d && d.ensureAborted(), o(b, T));
              }), {
                abort: function() {
                  d && d.ensureAborted(), m.abort();
                },
                forceMinPriority: function(b) {
                  m.forceMinPriority(b);
                }
              };
            }
          }
          class Ne {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return Ke(this.strategies, J.method("isSupported"));
            }
            connect(e, t) {
              return mn(this.strategies, e, function(r, o) {
                return function(d, m) {
                  if (o[r].error = d, d) {
                    vn(o) && t(!0);
                    return;
                  }
                  me(o, function(b) {
                    b.forceMinPriority(m.transport.priority);
                  }), t(null, m);
                };
              });
            }
          }
          function mn(n, e, t) {
            var r = Xe(n, function(o, d, m, b) {
              return o.connect(e, t(d, b));
            });
            return {
              abort: function() {
                me(r, yn);
              },
              forceMinPriority: function(o) {
                me(r, function(d) {
                  d.forceMinPriority(o);
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
              var r = this.usingTLS, o = wn(r), d = o && o.cacheSkipCount ? o.cacheSkipCount : 0, m = [this.strategy];
              if (o && o.timestamp + this.ttl >= J.now()) {
                var b = this.transports[o.transport];
                b && (["ws", "wss"].includes(o.transport) || d > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: o.transport,
                  latency: o.latency
                }), m.push(new de([b], {
                  timeout: o.latency * 2 + 1e3,
                  failFast: !0
                }))) : d++);
              }
              var T = J.now(), M = m.pop().connect(e, function j(B, Te) {
                B ? (st(r), m.length > 0 ? (T = J.now(), M = m.pop().connect(e, j)) : t(B)) : (kn(r, Te.transport.name, J.now() - T, d), t(null, Te));
              });
              return {
                abort: function() {
                  M.abort();
                },
                forceMinPriority: function(j) {
                  e = j, M && M.forceMinPriority(j);
                }
              };
            }
          }
          function Me(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function wn(n) {
            var e = A.getLocalStorage();
            if (e)
              try {
                var t = e[Me(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                st(n);
              }
            return null;
          }
          function kn(n, e, t, r) {
            var o = A.getLocalStorage();
            if (o)
              try {
                o[Me(n)] = ke({
                  timestamp: J.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: r
                });
              } catch {
              }
          }
          function st(n) {
            var e = A.getLocalStorage();
            if (e)
              try {
                delete e[Me(n)];
              } catch {
              }
          }
          class Se {
            constructor(e, { delay: t }) {
              this.strategy = e, this.options = { delay: t };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var r = this.strategy, o, d = new $(this.options.delay, function() {
                o = r.connect(e, t);
              });
              return {
                abort: function() {
                  d.ensureAborted(), o && o.abort();
                },
                forceMinPriority: function(m) {
                  e = m, o && o.forceMinPriority(m);
                }
              };
            }
          }
          class ve {
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
              var r = this.strategy.connect(e, function(o, d) {
                d && r.abort(), t(o, d);
              });
              return r;
            }
          }
          function ye(n) {
            return function() {
              return n.isSupported();
            };
          }
          var Sn = function(n, e, t) {
            var r = {};
            function o(gt, _r, Sr, Cr, Tr) {
              var mt = t(n, gt, _r, Sr, Cr, Tr);
              return r[gt] = mt, mt;
            }
            var d = Object.assign({}, e, {
              hostNonTLS: n.wsHost + ":" + n.wsPort,
              hostTLS: n.wsHost + ":" + n.wssPort,
              httpPath: n.wsPath
            }), m = Object.assign({}, d, {
              useTLS: !0
            }), b = Object.assign({}, e, {
              hostNonTLS: n.httpHost + ":" + n.httpPort,
              hostTLS: n.httpHost + ":" + n.httpsPort,
              httpPath: n.httpPath
            }), T = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, M = new rt({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), j = new rt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), B = o("ws", "ws", 3, d, M), Te = o("wss", "ws", 3, m, M), vr = o("sockjs", "sockjs", 1, b), lt = o("xhr_streaming", "xhr_streaming", 1, b, j), yr = o("xdr_streaming", "xdr_streaming", 1, b, j), ut = o("xhr_polling", "xhr_polling", 1, b), br = o("xdr_polling", "xdr_polling", 1, b), ht = new de([B], T), wr = new de([Te], T), kr = new de([vr], T), dt = new de([
              new ve(ye(lt), lt, yr)
            ], T), ft = new de([
              new ve(ye(ut), ut, br)
            ], T), pt = new de([
              new ve(ye(dt), new Ne([
                dt,
                new Se(ft, { delay: 4e3 })
              ]), ft)
            ], T), He = new ve(ye(pt), pt, kr), Fe;
            return e.useTLS ? Fe = new Ne([
              ht,
              new Se(He, { delay: 2e3 })
            ]) : Fe = new Ne([
              ht,
              new Se(wr, { delay: 2e3 }),
              new Se(He, { delay: 5e3 })
            ]), new bn(new _n(new ve(ye(B), Fe, He)), r, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, Cn = Sn, Tn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), P.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
              n.hooks.isInitialized() ? (n.changeState("initialized"), t(!0)) : (e && n.onError(e), n.onClose(), t(!1));
            })) : n.onClose();
          }, Rn = {
            getRequest: function(n) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                n.emit("error", new h()), n.close();
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
          class Pn extends ae {
            constructor(e, t, r) {
              super(), this.hooks = e, this.method = t, this.url = r;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, A.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (A.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
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
          var De;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(De || (De = {}));
          var fe = De, Ln = 1;
          class En {
            constructor(e, t) {
              this.hooks = e, this.session = ot(1e3) + "/" + Mn(8), this.location = xn(t), this.readyState = fe.CONNECTING, this.openStream();
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
              if (this.readyState === fe.OPEN)
                try {
                  return A.createSocketRequest("POST", it(On(this.location, this.session))).start(e), !0;
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
              this.closeStream(), this.readyState = fe.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: t,
                wasClean: r
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === fe.OPEN && this.onActivity();
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
              this.readyState === fe.CONNECTING ? (e && e.hostname && (this.location.base = Nn(this.location.base, e.hostname)), this.readyState = fe.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
            }
            onEvent(e) {
              this.readyState === fe.OPEN && this.onmessage && this.onmessage({ data: e });
            }
            onActivity() {
              this.onactivity && this.onactivity();
            }
            onError(e) {
              this.onerror && this.onerror(e);
            }
            openStream() {
              this.stream = A.createSocketRequest("POST", it(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                J.defer(() => {
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
          function it(n) {
            var e = n.indexOf("?") === -1 ? "?" : "&";
            return n + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + Ln++;
          }
          function Nn(n, e) {
            var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);
            return t[1] + e + t[3];
          }
          function ot(n) {
            return A.randomInt(n);
          }
          function Mn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(ot(32).toString(32));
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
          }, Un = jn, Hn = {
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
          }, Fn = Hn, zn = {
            getRequest: function(n) {
              var e = A.getXHRAPI(), t = new e();
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
              return this.createSocket(Fn, n);
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
          }, at = Bn;
          at.createXDR = function(n, e) {
            return this.createRequest(In, n, e);
          };
          var $n = at, Vn = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: x,
            getDefaultStrategy: Cn,
            Transports: Zt,
            transportConnectionInitializer: Tn,
            HTTPFactory: $n,
            TimelineTransport: Ft,
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
              window.JSON ? e() : P.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: U, jsonp: Mt };
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
          }, A = Vn, je;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(je || (je = {}));
          var Ce = je;
          class Wn {
            constructor(e, t, r) {
              this.key = e, this.session = t, this.events = [], this.options = r || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(Q({}, t, { timestamp: J.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(Ce.ERROR, e);
            }
            info(e) {
              this.log(Ce.INFO, e);
            }
            debug(e) {
              this.log(Ce.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, t) {
              var r = Q({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], e(r, (o, d) => {
                o || this.sent++, t && t(o, d);
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
                  return ct(new p(), t);
              } else return ct(new _(), t);
              var r = !1, o = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), d = null, m = function() {
                o.unbind("initialized", m), o.connect();
              }, b = function() {
                d = ce.createHandshake(o, function(B) {
                  r = !0, j(), t(null, B);
                });
              }, T = function(B) {
                j(), t(B);
              }, M = function() {
                j();
                var B;
                B = ke(o), t(new y(B));
              }, j = function() {
                o.unbind("initialized", m), o.unbind("open", b), o.unbind("error", T), o.unbind("closed", M);
              };
              return o.bind("initialized", m), o.bind("open", b), o.bind("error", T), o.bind("closed", M), o.initialize(), {
                abort: () => {
                  r || (j(), d ? d.close() : o.close());
                },
                forceMinPriority: (B) => {
                  r || this.priority < B && (d ? d.close() : o.close());
                }
              };
            }
          }
          function ct(n, e) {
            return J.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Gn } = A;
          var Jn = function(n, e, t, r, o, d) {
            var m = Gn[t];
            if (!m)
              throw new N(t);
            var b = (!n.enabledTransports || Ve(n.enabledTransports, e) !== -1) && (!n.disabledTransports || Ve(n.disabledTransports, e) === -1), T;
            return b ? (o = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, o), T = new Xn(e, r, d ? d.getAssistant(m) : m, o)) : T = Kn, T;
          }, Kn = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = J.defer(function() {
                e(new _());
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
            "disableStats" in n && F.warn("The disableStats option is deprecated in favor of enableStats");
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
            if (typeof A.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = Yn(e, n);
              A.getAuthorizers()[n.transport](A, r, n, S.UserAuthentication, t);
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
            if (typeof A.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = er(e, n);
              A.getAuthorizers()[n.transport](A, r, n, S.ChannelAuthorization, t);
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
            return (o, d) => {
              const m = n.channel(o.channelName);
              t(m, r).authorize(o.socketId, d);
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
            return A.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
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
          class dr extends ae {
            constructor(e) {
              super(function(t, r) {
                F.debug(`No callbacks on watchlist events for ${t}`);
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
          class gr extends ae {
            constructor(e) {
              super(function(t, r) {
                F.debug("No callbacks on user for " + t);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (t, r) => {
                if (t) {
                  F.warn(`Error during signin: ${t}`), this._cleanup();
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
                F.error(`Failed parsing user data after signin: ${e.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                F.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const e = (t) => {
                t.subscriptionPending && t.subscriptionCancelled ? t.reinstateSubscription() : !t.subscriptionPending && this.pusher.connection.state === "connected" && t.subscribe();
              };
              this.serverToUserChannel = new Ee(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((t, r) => {
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
          class G {
            static ready() {
              G.isReady = !0;
              for (var e = 0, t = G.instances.length; e < t; e++)
                G.instances[e].connect();
            }
            static getClientFeatures() {
              return We(Je({ ws: A.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              mr(e), Qn(t), this.key = e, this.config = rr(t, this), this.channels = ce.createChannels(), this.global_emitter = new ae(), this.sessionID = A.randomInt(1e9), this.timeline = new Wn(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: G.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: Ce.INFO,
                version: k.VERSION
              }), this.config.enableStats && (this.timelineSender = ce.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + A.TimelineTransport.name
              }));
              var r = (o) => A.getDefaultStrategy(this.config, o, Jn);
              this.connection = ce.createConnectionManager(this.key, {
                getStrategy: r,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (o) => {
                var d = o.event, m = d.indexOf("pusher_internal:") === 0;
                if (o.channel) {
                  var b = this.channel(o.channel);
                  b && b.handleEvent(o);
                }
                m || this.global_emitter.emit(o.event, o.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (o) => {
                F.warn(o);
              }), G.instances.push(this), this.timeline.info({ instances: G.instances.length }), this.user = new gr(this), G.isReady && this.connect();
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
                this.timelineSenderTimer = new ue(6e4, function() {
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
          G.instances = [], G.isReady = !1, G.logToConsole = !1, G.Runtime = A, G.ScriptReceivers = A.ScriptReceivers, G.DependenciesReceivers = A.DependenciesReceivers, G.auth_callbacks = A.auth_callbacks;
          var Ue = a.default = G;
          function mr(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          A.setup(G);
        }
        /******/
      ])
    );
  });
})(Ct);
var Hr = Ct.exports;
const Fr = /* @__PURE__ */ Ur(Hr);
window.Pusher = Fr;
const Y = "cpr-agent";
class zr {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.hookIds = {};
  }
  /**
   * INTERCEPTOR: Wraps renderTemplate to steal the CPRRoll object before it vanishes.
   */
  async rollAndCapture(f, s) {
    return console.log(`%c[Bridge] 🕵️‍♂️ Starting Render Interceptor for Actor ${f}`, "color: #00ffff; font-weight: bold;"), new Promise(async (a, i) => {
      let u = !1;
      const l = renderTemplate, L = function(k, E) {
        return k && typeof k == "string" && k.includes("rollcard") && (console.log(`%c[Bridge] 🎯 Intercepted Render: ${k}`, "color: #00ff00;", E), u = !0, renderTemplate = l, a({
          success: !0,
          total: E.resultTotal,
          isCriticalSuccess: E.wasCritSuccess ? E.wasCritSuccess() : E.isCriticalSuccess || !1,
          isCriticalFailure: E.wasCritFail ? E.wasCritFail() : E.isCriticalFailure || !1,
          label: E.rollTitle,
          rawRoll: E
          // <--- HERE IS YOUR FULL OBJECT
        })), l.apply(this, arguments);
      };
      renderTemplate = L, setTimeout(() => {
        u || (renderTemplate = l, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), a({ success: !1, error: "Timed out waiting for render" }));
      }, 5e3);
      try {
        await s();
      } catch {
        renderTemplate = l, a({ success: !1, error: "Trigger failed" });
      }
    });
  }
  /**
   * Clean up before reloading
   */
  destroy() {
    this.echo && this.echo.disconnect();
    for (let [f, s] of Object.entries(this.hookIds))
      Hooks.off(f, s);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  /**
   * Initialize Settings
   */
  registerSettings() {
    game.settings.register(Y, "apiUrl", {
      name: "Relay Controller URL",
      hint: "The base URL of your Agent (e.g., http://cyberpunk.ddev.site). Do NOT include port 8080 here.",
      scope: "world",
      config: !0,
      type: String,
      default: "http://localhost",
      onChange: () => this.reconnect()
    }), game.settings.register(Y, "reverbPort", {
      name: "Reverb Port",
      hint: "The port your Reverb server is running on (default: 8080). If using DDEV with SSL, try 8081.",
      scope: "world",
      config: !0,
      type: Number,
      default: 8080,
      onChange: () => this.reconnect()
    }), game.settings.register(Y, "reverbUseSSL", {
      name: "Reverb Use SSL",
      hint: "Enable if using https/wss for Reverb.",
      scope: "world",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: () => this.reconnect()
    }), game.settings.register(Y, "reverbKey", {
      name: "Reverb App Key",
      hint: "The App Key from your .env file.",
      scope: "world",
      config: !0,
      type: String,
      default: "itdsiqtx8cpskowawl1p",
      onChange: () => this.reconnect()
    }), game.settings.register(Y, "apiKey", {
      name: "API Key (Sanctum Token)",
      hint: "Generate this in your Cyberpunk Agent dashboard.",
      scope: "world",
      // or 'client' if each player has their own
      config: !0,
      type: String,
      default: "",
      onChange: () => this.reconnect()
    }), game.settings.register(Y, "debugMode", {
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
    const f = game.settings.get(Y, "apiUrl"), s = game.settings.get(Y, "apiKey"), a = game.settings.get(Y, "debugMode"), i = game.settings.get(Y, "reverbPort") || 8080, u = game.settings.get(Y, "reverbUseSSL") || !1;
    if (!s || !f) {
      ui.notifications.warn("Cyberpunk Bridge: Missing API URL or Key.");
      return;
    }
    this.echo && this.echo.disconnect();
    let l;
    try {
      l = new URL(f);
    } catch (L) {
      console.error("Invalid URL", L);
      return;
    }
    console.log(`Connecting to Cyberpunk Agent Relay at ${l.hostname}:${i}...`), this.echo = new jr({
      broadcaster: "reverb",
      key: game.settings.get(Y, "reverbKey") || "itdsiqtx8cpskowawl1p",
      wsHost: l.hostname,
      wsPort: i,
      wssPort: i,
      forceTLS: u,
      enabledTransports: u ? ["ws", "wss"] : ["ws"],
      disableStats: !0,
      authEndpoint: `${f.replace(/\/$/, "")}/api/broadcasting/auth`,
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
    game.user.id, this.echo.private("cpr-agent").listen(".GameUpdate", (f) => {
      console.log("Incoming Data:", f), this.handleIncomingData(f);
    }), this.registerGlobalHooks();
  }
  registerGlobalHooks() {
    const f = async (s, a) => {
      this.isConnected && (!s || !["character", "mook"].includes(s.type) || (console.log(`%c[Bridge] 🔄 Syncing change for ${s.name}`, "color: #ffaa00;", a), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: s.id,
        delta: a,
        success: !0
      })));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (s, a, i, u) => {
      if (a.system) {
        const l = {}, L = (k, E = "system.") => {
          for (let x in k) {
            const P = k[x];
            P !== null && typeof P == "object" && !Array.isArray(P) && !(P instanceof foundry.utils.Color) ? L(P, `${E}${x}.`) : l[`${E}${x}`] = P;
          }
        };
        L(a.system), f(s, l);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (s, a, i, u) => {
      const l = s.parent;
      if (l instanceof Actor) {
        const L = {}, k = `items.${s.id}.`;
        if (a.system) {
          const E = (x, P = `${k}system.`) => {
            for (let R in x) {
              const C = x[R];
              C !== null && typeof C == "object" && !Array.isArray(C) && !(C instanceof foundry.utils.Color) ? E(C, `${P}${R}.`) : L[`${P}${R}`] = C;
            }
          };
          E(a.system);
        }
        for (let E in a)
          E !== "system" && E !== "_id" && (L[`${k}${E}`] = a[E]);
        Object.keys(L).length > 0 && f(l, L);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (s, a, i) => {
      const u = s.parent;
      if (u instanceof Actor) {
        const l = {
          [`items.+${s.id}`]: s.toObject()
        };
        f(u, l);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (s, a, i) => {
      const u = s.parent;
      if (u instanceof Actor) {
        const l = {
          [`items.${s.id}`]: null
        };
        f(u, l);
      }
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(f) {
    let s = game.settings.get(Y, "apiUrl");
    const a = game.settings.get(Y, "apiKey");
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
          body: JSON.stringify(f)
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
  async handleIncomingData(f) {
    var L, k, E, x, P, R, C, O, S, v;
    const s = f.payload || f;
    console.log("Received Order:", s);
    const a = s.type, i = s.actorId, u = s.tokenId, l = s.requestId;
    switch (a) {
      case "UPDATE_ACTOR": {
        const c = game.actors.get(i);
        if (!c) {
          console.warn(`⚠️ Actor ID ${i} not found in this world.`);
          return;
        }
        await c.update(s.changes), ui.notifications.info(`💾 Sync: ${c.name} updated.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: i, success: !0, requestId: l });
        break;
      }
      case "ITEM_EQUIP": {
        const c = game.actors.get(i);
        if (c) {
          const h = c.items.get(s.itemId);
          if (h) {
            const p = `items.${s.itemId}.system.equipped`;
            await h.update({ "system.equipped": s.state }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [p]: s.state }, success: !0, requestId: l });
          }
        }
        break;
      }
      case "INSTALL_PROGRAM": {
        const c = game.actors.get(i);
        if (!c) return;
        const h = c.items.get(s.cyberdeckId), p = c.items.get(s.programId);
        if (!h || !p) return;
        const y = h.system.installedItems.usedSlots || 0, w = h.system.installedItems.slots || 0, N = p.system.size || 1;
        if (y + N > w) {
          ui.notifications.warn("Not enough memory slots on cyberdeck.");
          return;
        }
        const _ = h.system.installedItems.list || [];
        if (_.includes(s.programId)) return;
        const I = [..._, s.programId], D = y + N;
        await h.update({
          "system.installedItems.list": I,
          "system.installedItems.usedSlots": D
        }), await this.sendResponse({
          type: "SHEET_DELTA",
          actorId: i,
          delta: {
            [`items.${s.cyberdeckId}.system.installedItems.list`]: I,
            [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: D
          },
          success: !0,
          requestId: l
        });
        break;
      }
      case "REMOVE_PROGRAM": {
        const c = game.actors.get(i);
        if (!c) return;
        const h = c.items.get(s.cyberdeckId), p = c.items.get(s.programId);
        if (!h) return;
        const y = h.system.installedItems.list || [];
        if (!y.includes(s.programId)) return;
        const w = y.filter((U) => U !== s.programId), N = p && p.system.size || 1, _ = h.system.installedItems.usedSlots || 0, I = Math.max(0, _ - N);
        await h.update({
          "system.installedItems.list": w,
          "system.installedItems.usedSlots": I
        });
        const D = {
          [`items.${s.cyberdeckId}.system.installedItems.list`]: w,
          [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: I
        };
        p && p.system.isRezzed && (await p.update({ "system.isRezzed": !1 }), D[`items.${s.programId}.system.isRezzed`] = !1), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: D, success: !0, requestId: l });
        break;
      }
      case "TOGGLE_REZ": {
        const c = game.actors.get(i);
        if (c) {
          const h = c.items.get(s.programId);
          h && (await h.update({ "system.isRezzed": s.targetState }), await this.sendResponse({
            type: "SHEET_DELTA",
            actorId: i,
            delta: { [`items.${s.programId}.system.isRezzed`]: s.targetState },
            success: !0,
            requestId: l
          }));
        }
        break;
      }
      case "DAMAGE_ROLL": {
        const c = game.actors.get(i), h = c.items.get(s.weaponId);
        if (c && h) {
          const p = async () => {
            await c.sheet._onRoll({
              "data-roll-type": "damage",
              "data-item-id": h.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "damage",
                "data-item-id": h.id
              }
            });
          }, y = await this.rollAndCapture(i, p);
          y.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: l,
            actorId: i,
            total: y.total,
            isCriticalSuccess: y.isCriticalSuccess,
            isCriticalFailure: y.isCriticalFailure,
            label: `${h.name} (Damage)`,
            rawRoll: y.rawRoll,
            success: !0
          });
        }
        break;
      }
      case "DEATH_SAVE": {
        const c = game.actors.get(i);
        if (c) {
          const h = async () => {
            await c.sheet._onRoll({
              "data-roll-type": "deathsave",
              "data-roll-title": "Death Save",
              type: "click",
              currentTarget: {
                "data-roll-type": "deathsave",
                "data-roll-title": "Death Save"
              }
            });
          }, p = await this.rollAndCapture(i, h);
          if (p.success) {
            const y = c.system.derivedStats.deathsave || {};
            await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: l,
              actorId: i,
              total: p.total,
              isCriticalSuccess: p.isCriticalSuccess,
              isCriticalFailure: p.isCriticalFailure,
              label: "Death Save",
              rawRoll: p.rawRoll,
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
        const c = game.actors.get(i), h = async () => {
          await c.sheet._onRoll({
            "data-roll-type": "facedown",
            "data-roll-title": "Face Down",
            type: "click",
            currentTarget: {
              "data-roll-type": "facedown",
              "data-roll-title": "Face Down"
            }
          });
        }, p = await this.rollAndCapture(i, h);
        p.success && await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: l,
          actorId: i,
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          rawRoll: {
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: p.label,
            resultTotal: (L = p.rawRoll) == null ? void 0 : L.resultTotal,
            rollTitle: (k = p.rawRoll) == null ? void 0 : k.rollTitle
          },
          success: !0
        });
        break;
      }
      case "INITIATIVE_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = async () => {
            await c.rollInitiative();
          }, p = await this.rollAndCapture(i, h);
          p.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: l,
            actorId: i,
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: "Initiative",
            rawRoll: p.rawRoll,
            success: !0
          });
        }
        break;
      }
      case "PROGRAM_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = document.createElement("a");
          h.dataset.rollType = s.rollType, h.dataset.cyberdeckId = s.cyberdeckId, h.dataset.rollTitle = s.programName, h.dataset.interfaceAbility = s.programName, h.dataset.itemId = s.cyberdeckId, h.dataset.programId = s.programId, h.dataset.executionType = s.executionType;
          const p = async () => {
            await c.sheet._onRoll({
              type: "click",
              currentTarget: h
            });
          }, y = await this.rollAndCapture(i, p);
          y.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: l,
            actorId: i,
            total: y.total,
            isCriticalSuccess: y.isCriticalSuccess,
            isCriticalFailure: y.isCriticalFailure,
            label: s.programName,
            rawRoll: y.rawRoll,
            success: !0
          });
        }
        break;
      }
      case "ROLE_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = c.items.getName(s.itemName);
          if (h) {
            const p = {
              "data-roll-type": "roleAbility",
              "data-roll-title": s.label,
              "data-item-id": h.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "roleAbility",
                "data-roll-title": s.label,
                "data-item-id": h.id,
                "data-item-subtype": s.label
              }
            };
            s.isAbility && (p["data-roll-subtype"] = "subRoleAbility", p["data-role-name"] = s.label, p.currentTarget["data-roll-subtype"] = "subRoleAbility", p.currentTarget["data-role-name"] = s.label);
            const y = async () => {
              await c.sheet._onRoll(p);
            }, w = await this.rollAndCapture(i, y);
            w.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: l,
              actorId: i,
              total: w.total,
              isCriticalSuccess: w.isCriticalSuccess,
              isCriticalFailure: w.isCriticalFailure,
              label: s.label,
              rawRoll: w.rawRoll,
              success: !0
            });
          }
        }
        break;
      }
      case "SKILL_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = c.items.getName(s.label);
          if (h) {
            const p = async () => {
              await c.sheet._onRoll({
                "data-roll-type": "skill",
                "data-roll-title": s.label,
                "data-item-id": h.id,
                type: "click",
                currentTarget: {
                  "data-roll-type": "skill",
                  "data-roll-title": s.label,
                  "data-item-id": h.id
                }
              });
            }, y = await this.rollAndCapture(i, p);
            y.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: l,
              actorId: i,
              total: y.total,
              isCriticalSuccess: y.isCriticalSuccess,
              isCriticalFailure: y.isCriticalFailure,
              label: s.label,
              rawRoll: y.rawRoll,
              success: !0
            });
          }
        }
        break;
      }
      case "STAT_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = async () => {
            await c.sheet._onRoll({
              "data-roll-type": "stat",
              "data-roll-title": s.label,
              type: "click",
              currentTarget: {
                "data-roll-type": "stat",
                "data-roll-title": s.label
              }
            });
          }, p = await this.rollAndCapture(i, h);
          p.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: l,
            actorId: i,
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: s.label,
            rawRoll: p.rawRoll,
            success: !0
          });
        }
        break;
      }
      case "DICE_ROLL": {
        l && this.activeRequests.set(l, { actorId: i, timestamp: Date.now() });
        const c = new Roll(s.formula);
        await c.evaluate(), await c.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
          flavor: s.flavor
        }), await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: l,
          actorId: i,
          total: c.total,
          isCriticalSuccess: c.isCriticalSuccess || !1,
          isCriticalFailure: c.isCriticalFailure || !1,
          label: s.flavor || "Dice Roll",
          rawRoll: {
            rollTitle: s.flavor || "Dice Roll",
            _roll: c,
            formula: c.formula,
            resultTotal: c.total
          },
          success: !0
        });
        break;
      }
      case "MOVE_TOKEN": {
        const c = canvas.tokens.get(u);
        if (c) {
          let h = {};
          s.direction === "up" ? h.y = c.document.y - canvas.grid.size : s.direction === "down" ? h.y = c.document.y + canvas.grid.size : s.direction === "left" ? h.x = c.document.x - canvas.grid.size : s.direction === "right" && (h.x = c.document.x + canvas.grid.size), await c.document.update(h), setTimeout(async () => {
            const p = { tokenId: u, requestId: l || "move-refresh" };
            await this.handleIncomingData({ type: "LIST_VISIBLE_TOKENS", ...p }), Array.from(game.user.targets)[0] && s.weaponId && await this.handleIncomingData({ type: "GET_DV_INFO", ...p, weaponId: s.weaponId });
          }, 200), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: u, success: !0, requestId: l });
        }
        break;
      }
      case "RELOAD_WEAPON": {
        const c = game.actors.get(i);
        if (c) {
          const h = c.items.get(s.weaponId), p = s.ammoId ? c.items.get(s.ammoId) : null, y = async () => {
            await h.reload();
            const w = {
              [`items.${s.weaponId}.system.magazine`]: {
                value: h.system.magazine.value,
                max: h.system.magazine.max
              },
              [`items.${s.weaponId}.system.installedItems`]: {
                list: [...h.system.installedItems.list],
                slots: h.system.installedItems.slots,
                usedSlots: h.system.installedItems.usedSlots
              }
            };
            p && (w[`items.${p.id}.system.amount`] = p.system.amount), c.items.filter((_) => _.type === "ammo").forEach((_) => {
              w[`items.${_.id}.system.amount`] = _.system.amount;
            }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: w, success: !0, requestId: l });
          };
          if (p) {
            let w = h.getInstalledItems("ammo");
            w && w.length > 0 && h.uninstallItems(w), setTimeout(function() {
              h.installItems([p]);
            }, 500), setTimeout(async () => {
              await y();
            }, 1500);
          } else
            await y();
        }
        break;
      }
      case "TARGET_TOKEN": {
        const c = canvas.tokens.get(s.tokenId);
        c && (c.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: s.tokenId, success: !0 }));
        break;
      }
      case "UPDATE_STAT": {
        const c = game.actors.get(i);
        if (c) {
          const h = `system.${s.label}`;
          let p;
          if (s.operation === "inc") {
            const y = h.split(".");
            let w = c;
            for (let I = 0; I < y.length; I++)
              w = I === 0 ? w[y[I]] : w == null ? void 0 : w[y[I]];
            const N = Number(w) || 0, _ = Number(s.delta) || 0;
            p = N + _;
          } else
            p = Number(s.value) || 0;
          await c.update({ [h]: p }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [h]: p }, tab: "stats", success: !0 });
        }
        break;
      }
      case "ATTACK_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = s.weaponId, p = s.fireMode, y = canvas.tokens.get(s.targetId), w = "firetype-" + h, N = "cyberpunk-red-core";
          let _ = "";
          switch (p) {
            case "Auto":
              _ = "autofire";
              break;
            case "Suppress":
              _ = "suppressive";
              break;
            case "Aimed":
              _ = "aimed", await c.setFlag(N, "aimedLocation", "head");
              break;
            default:
              _ = "";
              break;
          }
          y && y.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), _ === "" ? await c.unsetFlag(N, w) : await c.setFlag(N, w, _);
          const I = document.createElement("a");
          I.dataset.rollType = "attack", I.dataset.itemId = h, I.dataset.rollTitle = p + " Attack";
          const D = async () => {
            await c.sheet._onRoll({
              preventDefault: () => {
              },
              currentTarget: I,
              type: "click"
            }, { showDialog: !0 });
          };
          let U = null;
          if (y) {
            const V = ((E = c.getActiveTokens()) == null ? void 0 : E[0]) || canvas.tokens.placeables.find((z) => {
              var K;
              return ((K = z.actor) == null ? void 0 : K.id) === c.id;
            });
            if (V) {
              const z = {
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
              }, K = [6, 12, 25, 50, 100, 200, 400, 800], le = y.center.x - V.center.x, se = y.center.y - V.center.y, H = Math.sqrt(Math.pow(le, 2) + Math.pow(se, 2)), ie = Math.ceil(H / (((x = canvas.grid) == null ? void 0 : x.size) || 128)), te = c.items.get(h), ne = {
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
              }, re = ne[(P = te == null ? void 0 : te.system) == null ? void 0 : P.weaponType] || ne[(R = te == null ? void 0 : te.system) == null ? void 0 : R.variety] || "Pistol", $ = K.findIndex((pe) => ie <= pe);
              let ue = $ !== -1 ? z[re][$] : 99;
              Array.isArray(z[re]) && typeof z[re][0] == "string" && (ue = z[re][Math.min($ !== -1 ? $ : 0, z[re].length - 1)]), U = ue === 99 ? "Out of Range" : ue;
            }
          }
          const q = await this.rollAndCapture(i, D);
          if (q.success) {
            let V = null;
            typeof U == "number" ? V = q.total >= U ? "Hit" : "Miss" : U === "Out of Range" && (V = "Miss"), await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: l,
              actorId: i,
              total: q.total,
              isCriticalSuccess: q.isCriticalSuccess,
              isCriticalFailure: q.isCriticalFailure,
              label: p + " Attack",
              rawRoll: {
                total: q.total,
                isCriticalSuccess: q.isCriticalSuccess,
                isCriticalFailure: q.isCriticalFailure,
                label: q.label,
                resultTotal: (C = q.rawRoll) == null ? void 0 : C.resultTotal,
                rollTitle: (O = q.rawRoll) == null ? void 0 : O.rollTitle
              },
              dv: U,
              outcome: V,
              success: !0
            });
          }
        }
        break;
      }
      case "GET_ROLL_MODIFIERS": {
        const c = game.actors.get(i);
        if (!c) return;
        const h = s.weaponId, p = h ? c.items.get(h) : null;
        let y = "None", w = 0, N = "None", _ = 0, I = 0;
        if (p) {
          y = p.system.weaponSkill;
          const H = c.items.find((ie) => ie.type === "skill" && ie.name === y);
          w = H && Number(H.system.level) || 0, N = H && H.system.stat || "ref", _ = Number((S = c.system.stats[N]) == null ? void 0 : S.value) || 0, I = Number(p.system.attackmod) || 0;
        }
        let D = 0;
        const U = [], q = Number(c.system.derivedStats.hp.value) || 0, V = Number(c.system.derivedStats.seriouslyWounded) || 0, z = c.items.find((H) => H.name === "Stim" && H.type === "drug"), K = z && z.effects.some((H) => H.disabled === !1);
        if (q <= 0)
          D -= 4, U.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
        else if (q <= V) {
          const H = K ? 0 : -2;
          D += H, U.push({
            title: K ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
            penalty: H,
            description: K ? "Ignoring penalty due to Stim drug." : "All actions at -2."
          });
        }
        c.items.filter((H) => H.type === "criticalInjury").forEach((H) => {
          var re;
          const ie = H.name || "Injury", te = (((re = H.system.description) == null ? void 0 : re.value) || "").replace(/<[^>]*>/g, "");
          let ne = 0;
          if (H.effects && H.effects.length > 0 && H.effects.forEach(($) => {
            !$.disabled && $.changes && $.changes.forEach((ue) => {
              const pe = parseInt(ue.value);
              isNaN(pe) || (ne += pe);
            });
          }), ne === 0) {
            const $ = String(ie).toLowerCase();
            (te.includes("-2") || $.includes("arm") || $.includes("eye")) && (ne = -2);
          }
          D += ne, U.push({ title: ie, description: te, penalty: ne });
        });
        const se = {
          actorName: c.name,
          baseBonus: _ + w + I,
          breakdown: {
            statName: N,
            statValue: _,
            skillName: y,
            skillLevel: w,
            weaponAcc: I
          },
          totalPenalty: D,
          finalModifier: _ + w + I + D,
          injuries: U
        };
        console.log("GET_ROLL_MODIFIERS result:", se), await this.sendResponse({ type: "ROLL_MODIFIERS_DATA", result: se });
        break;
      }
      case "GET_DV_INFO": {
        const c = canvas.tokens.get(s.tokenId), h = s.targetTokenId || ((v = Array.from(game.user.targets)[0]) == null ? void 0 : v.id), p = canvas.tokens.get(h), y = s.weaponId;
        if (c && p) {
          const w = {
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
          }, N = [6, 12, 25, 50, 100, 200, 400, 800], _ = p.center.x - c.center.x, I = p.center.y - c.center.y, D = Math.sqrt(Math.pow(_, 2) + Math.pow(I, 2)), U = Math.ceil(D / 128), q = c.actor.items.get(y), V = {
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
          }, z = V[q.system.weaponType] || V[q.system.variety] || "Pistol", K = N.findIndex((H) => U <= H);
          let le = K !== -1 ? w[z][K] : 99;
          Array.isArray(w[z]) && typeof w[z][0] == "string" && (le = w[z][Math.min(K !== -1 ? K : 0, w[z].length - 1)]);
          const se = {
            targetName: p.name,
            distanceMeters: U,
            weaponCategory: z,
            dv: le === 99 ? "Out of Range" : le
          };
          console.log("GET_DV_INFO result:", se), await this.sendResponse({ type: "DV_INFO_DATA", result: se, requestId: l });
        }
        break;
      }
      case "LIST_VISIBLE_TOKENS": {
        const c = canvas.tokens.get(u);
        if (c) {
          const h = canvas.grid.size, p = canvas.dimensions, y = c.center.x, w = c.center.y, N = canvas.tokens.placeables.filter((_) => {
            const I = !_.document.hidden, D = _.actor && (_.actor.type === "character" || _.actor.type === "mook"), U = _.x >= p.sceneX && _.x <= p.sceneX + p.sceneWidth && _.y >= p.sceneY && _.y <= p.sceneY + p.sceneHeight;
            return I && D && U && _.id !== c.id;
          }).map((_) => {
            const I = _.center.x - y, D = _.center.y - w, q = (Math.sqrt(Math.pow(I, 2) + Math.pow(D, 2)) / h).toFixed(2);
            return {
              name: _.name,
              id: _.id,
              distanceM: parseFloat(q),
              type: _.actor.type
            };
          }).sort((_, I) => _.distanceM - I.distanceM);
          console.log("LIST_VISIBLE_TOKENS result:", N), await this.sendResponse({ type: "VISIBLE_TOKENS_DATA", tokens: N, requestId: l });
        }
        break;
      }
      case "GET_ACTOR": {
        let c = s.actorId;
        if (c !== null) {
          const h = game.actors.get(c);
          if (h) {
            console.log("GET_ACTOR result:", h), await this.sendResponse({ type: "ACTOR_DATA", actor: h, requestId: l });
            break;
          }
        }
        await this.sendResponse({ type: "ACTOR_DATA", actor: !1, requestId: l });
        break;
      }
      case "GET_ACTORS": {
        let c = canvas.tokens.placeables.filter((h) => h.actor && h.actor.hasPlayerOwner).map((h) => ({
          name: h.name,
          actorId: h.actor.id,
          tokenId: h.id
        }));
        console.log("GET_ACTORS result:", c), await this.sendResponse({ type: "ACTORS_DATA", actors: c, requestId: l });
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
