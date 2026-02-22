import.meta.hot && import.meta.hot.accept((v) => {
  console.log("Hot reloading module...");
});
function ge(v) {
  "@babel/helpers - typeof";
  return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
    return typeof f;
  } : function(f) {
    return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
  }, ge(v);
}
function q(v, f) {
  if (!(v instanceof f))
    throw new TypeError("Cannot call a class as a function");
}
function Rr(v, f) {
  for (var s = 0; s < f.length; s++) {
    var a = f[s];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(v, a.key, a);
  }
}
function z(v, f, s) {
  return f && Rr(v.prototype, f), Object.defineProperty(v, "prototype", {
    writable: !1
  }), v;
}
function me() {
  return me = Object.assign || function(v) {
    for (var f = 1; f < arguments.length; f++) {
      var s = arguments[f];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (v[a] = s[a]);
    }
    return v;
  }, me.apply(this, arguments);
}
function G(v, f) {
  if (typeof f != "function" && f !== null)
    throw new TypeError("Super expression must either be null or a function");
  v.prototype = Object.create(f && f.prototype, {
    constructor: {
      value: v,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(v, "prototype", {
    writable: !1
  }), f && je(v, f);
}
function ke(v) {
  return ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, ke(v);
}
function je(v, f) {
  return je = Object.setPrototypeOf || function(a, i) {
    return a.__proto__ = i, a;
  }, je(v, f);
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
function Ar(v) {
  if (v === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return v;
}
function Pr(v, f) {
  if (f && (typeof f == "object" || typeof f == "function"))
    return f;
  if (f !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ar(v);
}
function J(v) {
  var f = Ir();
  return function() {
    var a = ke(v), i;
    if (f) {
      var l = ke(this).constructor;
      i = Reflect.construct(a, arguments, l);
    } else
      i = a.apply(this, arguments);
    return Pr(this, i);
  };
}
var Ue = /* @__PURE__ */ function() {
  function v() {
    q(this, v);
  }
  return z(v, [{
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
  }]), v;
}(), gt = /* @__PURE__ */ function() {
  function v(f) {
    q(this, v), this.namespace = f;
  }
  return z(v, [{
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
  }]), v;
}();
function Lr(v) {
  try {
    new v();
  } catch (f) {
    if (f.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var He = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s(a, i, l) {
    var u;
    return q(this, s), u = f.call(this), u.name = i, u.pusher = a, u.options = l, u.eventFormatter = new gt(u.options.namespace), u.subscribe(), u;
  }
  return z(s, [{
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
      return this.subscription.bind_global(function(u, I) {
        if (!u.startsWith("pusher:")) {
          var k = l.options.namespace.replace(/\./g, "\\"), P = u.startsWith(k) ? u.substring(k.length + 1) : "." + u;
          i(P, I);
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
}(Ue), mt = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
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
}(He), Er = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
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
}(He), xr = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("pusher:subscription_succeeded", function(l) {
          i(Object.keys(l.members).map(function(u) {
            return l.members[u];
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
}(mt), vt = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s(a, i, l) {
    var u;
    return q(this, s), u = f.call(this), u.events = {}, u.listeners = {}, u.name = i, u.socket = a, u.options = l, u.eventFormatter = new gt(u.options.namespace), u.subscribe(), u;
  }
  return z(s, [{
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
      var u = this;
      return this.listeners[i] = this.listeners[i] || [], this.events[i] || (this.events[i] = function(I, k) {
        u.name === I && u.listeners[i] && u.listeners[i].forEach(function(P) {
          return P(k);
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
      this.listeners[i] = this.listeners[i] || [], l && (this.listeners[i] = this.listeners[i].filter(function(u) {
        return u !== l;
      })), (!l || this.listeners[i].length === 0) && (this.events[i] && (this.socket.removeListener(i, this.events[i]), delete this.events[i]), delete this.listeners[i]);
    }
  }]), s;
}(Ue), yt = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
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
}(vt), Or = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(i) {
        return this.on("presence:subscribed", function(l) {
          i(l.map(function(u) {
            return u.user_info;
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
}(yt), Se = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
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
}(Ue), bt = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
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
}(Se), Nr = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
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
}(Se), Mr = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    return q(this, s), f.apply(this, arguments);
  }
  return z(s, [{
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
}(bt), Fe = /* @__PURE__ */ function() {
  function v(f) {
    q(this, v), this._defaultOptions = {
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
  return z(v, [{
    key: "setOptions",
    value: function(s) {
      this.options = me(this._defaultOptions, s);
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
  }]), v;
}(), ft = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    var a;
    return q(this, s), a = f.apply(this, arguments), a.channels = {}, a;
  }
  return z(s, [{
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
    value: function(i, l, u) {
      return this.channel(i).listen(l, u);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new He(this.pusher, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new mt(this.pusher, "private-" + i, this.options)), this.channels["private-" + i];
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
      var l = this, u = [i, "private-" + i, "private-encrypted-" + i, "presence-" + i];
      u.forEach(function(I, k) {
        l.leaveChannel(I);
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
}(Fe), pt = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    var a;
    return q(this, s), a = f.apply(this, arguments), a.channels = {}, a;
  }
  return z(s, [{
    key: "connect",
    value: function() {
      var i = this, l = this.getSocketIO();
      return this.socket = l(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(i.channels).forEach(function(u) {
          u.subscribe();
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
    value: function(i, l, u) {
      return this.channel(i).listen(l, u);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new vt(this.socket, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new yt(this.socket, "private-" + i, this.options)), this.channels["private-" + i];
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
      var l = this, u = [i, "private-" + i, "presence-" + i];
      u.forEach(function(I) {
        l.leaveChannel(I);
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
}(Fe), Dr = /* @__PURE__ */ function(v) {
  G(s, v);
  var f = J(s);
  function s() {
    var a;
    return q(this, s), a = f.apply(this, arguments), a.channels = {}, a;
  }
  return z(s, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l, u) {
      return new Se();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return new Se();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return new bt();
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
}(Fe), jr = /* @__PURE__ */ function() {
  function v(f) {
    q(this, v), this.options = f, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return z(v, [{
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
        this.connector = new ft(me(me({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new ft(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new pt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new Dr(this.options);
      else if (typeof this.options.broadcaster == "function" && Lr(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(ge(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
      if (this.connector instanceof pt)
        throw new Error("Broadcaster ".concat(ge(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : ge(Turbo)) === "object" && this.registerTurboRequestInterceptor();
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
  }]), v;
}();
function Ur(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var wt = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(v, f) {
  (function(a, i) {
    v.exports = i();
  })(window, function() {
    return (
      /******/
      function(s) {
        var a = {};
        function i(l) {
          if (a[l])
            return a[l].exports;
          var u = a[l] = {
            /******/
            i: l,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return s[l].call(u.exports, u, u.exports, i), u.l = !0, u.exports;
        }
        return i.m = s, i.c = a, i.d = function(l, u, I) {
          i.o(l, u) || Object.defineProperty(l, u, { enumerable: !0, get: I });
        }, i.r = function(l) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
        }, i.t = function(l, u) {
          if (u & 1 && (l = i(l)), u & 8 || u & 4 && typeof l == "object" && l && l.__esModule) return l;
          var I = /* @__PURE__ */ Object.create(null);
          if (i.r(I), Object.defineProperty(I, "default", { enumerable: !0, value: l }), u & 2 && typeof l != "string") for (var k in l) i.d(I, k, (function(P) {
            return l[P];
          }).bind(null, k));
          return I;
        }, i.n = function(l) {
          var u = l && l.__esModule ? (
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
          return i.d(u, "a", u), u;
        }, i.o = function(l, u) {
          return Object.prototype.hasOwnProperty.call(l, u);
        }, i.p = "", i(i.s = 2);
      }([
        /* 0 */
        /***/
        function(s, a, i) {
          var l = this && this.__extends || /* @__PURE__ */ function() {
            var m = function(p, y) {
              return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(w, S) {
                w.__proto__ = S;
              } || function(w, S) {
                for (var A in S) S.hasOwnProperty(A) && (w[A] = S[A]);
              }, m(p, y);
            };
            return function(p, y) {
              m(p, y);
              function w() {
                this.constructor = p;
              }
              p.prototype = y === null ? Object.create(y) : (w.prototype = y.prototype, new w());
            };
          }();
          Object.defineProperty(a, "__esModule", { value: !0 });
          var u = 256, I = (
            /** @class */
            function() {
              function m(p) {
                p === void 0 && (p = "="), this._paddingCharacter = p;
              }
              return m.prototype.encodedLength = function(p) {
                return this._paddingCharacter ? (p + 2) / 3 * 4 | 0 : (p * 8 + 5) / 6 | 0;
              }, m.prototype.encode = function(p) {
                for (var y = "", w = 0; w < p.length - 2; w += 3) {
                  var S = p[w] << 16 | p[w + 1] << 8 | p[w + 2];
                  y += this._encodeByte(S >>> 3 * 6 & 63), y += this._encodeByte(S >>> 2 * 6 & 63), y += this._encodeByte(S >>> 1 * 6 & 63), y += this._encodeByte(S >>> 0 * 6 & 63);
                }
                var A = p.length - w;
                if (A > 0) {
                  var S = p[w] << 16 | (A === 2 ? p[w + 1] << 8 : 0);
                  y += this._encodeByte(S >>> 3 * 6 & 63), y += this._encodeByte(S >>> 2 * 6 & 63), A === 2 ? y += this._encodeByte(S >>> 1 * 6 & 63) : y += this._paddingCharacter || "", y += this._paddingCharacter || "";
                }
                return y;
              }, m.prototype.maxDecodedLength = function(p) {
                return this._paddingCharacter ? p / 4 * 3 | 0 : (p * 6 + 7) / 8 | 0;
              }, m.prototype.decodedLength = function(p) {
                return this.maxDecodedLength(p.length - this._getPaddingLength(p));
              }, m.prototype.decode = function(p) {
                if (p.length === 0)
                  return new Uint8Array(0);
                for (var y = this._getPaddingLength(p), w = p.length - y, S = new Uint8Array(this.maxDecodedLength(w)), A = 0, E = 0, D = 0, j = 0, N = 0, H = 0, V = 0; E < w - 4; E += 4)
                  j = this._decodeChar(p.charCodeAt(E + 0)), N = this._decodeChar(p.charCodeAt(E + 1)), H = this._decodeChar(p.charCodeAt(E + 2)), V = this._decodeChar(p.charCodeAt(E + 3)), S[A++] = j << 2 | N >>> 4, S[A++] = N << 4 | H >>> 2, S[A++] = H << 6 | V, D |= j & u, D |= N & u, D |= H & u, D |= V & u;
                if (E < w - 1 && (j = this._decodeChar(p.charCodeAt(E)), N = this._decodeChar(p.charCodeAt(E + 1)), S[A++] = j << 2 | N >>> 4, D |= j & u, D |= N & u), E < w - 2 && (H = this._decodeChar(p.charCodeAt(E + 2)), S[A++] = N << 4 | H >>> 2, D |= H & u), E < w - 3 && (V = this._decodeChar(p.charCodeAt(E + 3)), S[A++] = H << 6 | V, D |= V & u), D !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return S;
              }, m.prototype._encodeByte = function(p) {
                var y = p;
                return y += 65, y += 25 - p >>> 8 & 6, y += 51 - p >>> 8 & -75, y += 61 - p >>> 8 & -15, y += 62 - p >>> 8 & 3, String.fromCharCode(y);
              }, m.prototype._decodeChar = function(p) {
                var y = u;
                return y += (42 - p & p - 44) >>> 8 & -u + p - 43 + 62, y += (46 - p & p - 48) >>> 8 & -u + p - 47 + 63, y += (47 - p & p - 58) >>> 8 & -u + p - 48 + 52, y += (64 - p & p - 91) >>> 8 & -u + p - 65 + 0, y += (96 - p & p - 123) >>> 8 & -u + p - 97 + 26, y;
              }, m.prototype._getPaddingLength = function(p) {
                var y = 0;
                if (this._paddingCharacter) {
                  for (var w = p.length - 1; w >= 0 && p[w] === this._paddingCharacter; w--)
                    y++;
                  if (p.length < 4 || y > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return y;
              }, m;
            }()
          );
          a.Coder = I;
          var k = new I();
          function P(m) {
            return k.encode(m);
          }
          a.encode = P;
          function L(m) {
            return k.decode(m);
          }
          a.decode = L;
          var R = (
            /** @class */
            function(m) {
              l(p, m);
              function p() {
                return m !== null && m.apply(this, arguments) || this;
              }
              return p.prototype._encodeByte = function(y) {
                var w = y;
                return w += 65, w += 25 - y >>> 8 & 6, w += 51 - y >>> 8 & -75, w += 61 - y >>> 8 & -13, w += 62 - y >>> 8 & 49, String.fromCharCode(w);
              }, p.prototype._decodeChar = function(y) {
                var w = u;
                return w += (44 - y & y - 46) >>> 8 & -u + y - 45 + 62, w += (94 - y & y - 96) >>> 8 & -u + y - 95 + 63, w += (47 - y & y - 58) >>> 8 & -u + y - 48 + 52, w += (64 - y & y - 91) >>> 8 & -u + y - 65 + 0, w += (96 - y & y - 123) >>> 8 & -u + y - 97 + 26, w;
              }, p;
            }(I)
          );
          a.URLSafeCoder = R;
          var c = new R();
          function h(m) {
            return c.encode(m);
          }
          a.encodeURLSafe = h;
          function g(m) {
            return c.decode(m);
          }
          a.decodeURLSafe = g, a.encodedLength = function(m) {
            return k.encodedLength(m);
          }, a.maxDecodedLength = function(m) {
            return k.maxDecodedLength(m);
          }, a.decodedLength = function(m) {
            return k.decodedLength(m);
          };
        },
        /* 1 */
        /***/
        function(s, a, i) {
          Object.defineProperty(a, "__esModule", { value: !0 });
          var l = "utf8: invalid string", u = "utf8: invalid source encoding";
          function I(L) {
            for (var R = new Uint8Array(k(L)), c = 0, h = 0; h < L.length; h++) {
              var g = L.charCodeAt(h);
              g < 128 ? R[c++] = g : g < 2048 ? (R[c++] = 192 | g >> 6, R[c++] = 128 | g & 63) : g < 55296 ? (R[c++] = 224 | g >> 12, R[c++] = 128 | g >> 6 & 63, R[c++] = 128 | g & 63) : (h++, g = (g & 1023) << 10, g |= L.charCodeAt(h) & 1023, g += 65536, R[c++] = 240 | g >> 18, R[c++] = 128 | g >> 12 & 63, R[c++] = 128 | g >> 6 & 63, R[c++] = 128 | g & 63);
            }
            return R;
          }
          a.encode = I;
          function k(L) {
            for (var R = 0, c = 0; c < L.length; c++) {
              var h = L.charCodeAt(c);
              if (h < 128)
                R += 1;
              else if (h < 2048)
                R += 2;
              else if (h < 55296)
                R += 3;
              else if (h <= 57343) {
                if (c >= L.length - 1)
                  throw new Error(l);
                c++, R += 4;
              } else
                throw new Error(l);
            }
            return R;
          }
          a.encodedLength = k;
          function P(L) {
            for (var R = [], c = 0; c < L.length; c++) {
              var h = L[c];
              if (h & 128) {
                var g = void 0;
                if (h < 224) {
                  if (c >= L.length)
                    throw new Error(u);
                  var m = L[++c];
                  if ((m & 192) !== 128)
                    throw new Error(u);
                  h = (h & 31) << 6 | m & 63, g = 128;
                } else if (h < 240) {
                  if (c >= L.length - 1)
                    throw new Error(u);
                  var m = L[++c], p = L[++c];
                  if ((m & 192) !== 128 || (p & 192) !== 128)
                    throw new Error(u);
                  h = (h & 15) << 12 | (m & 63) << 6 | p & 63, g = 2048;
                } else if (h < 248) {
                  if (c >= L.length - 2)
                    throw new Error(u);
                  var m = L[++c], p = L[++c], y = L[++c];
                  if ((m & 192) !== 128 || (p & 192) !== 128 || (y & 192) !== 128)
                    throw new Error(u);
                  h = (h & 15) << 18 | (m & 63) << 12 | (p & 63) << 6 | y & 63, g = 65536;
                } else
                  throw new Error(u);
                if (h < g || h >= 55296 && h <= 57343)
                  throw new Error(u);
                if (h >= 65536) {
                  if (h > 1114111)
                    throw new Error(u);
                  h -= 65536, R.push(String.fromCharCode(55296 | h >> 10)), h = 56320 | h & 1023;
                }
              }
              R.push(String.fromCharCode(h));
            }
            return R.join("");
          }
          a.decode = P;
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
              var t = this.lastId, r = this.prefix + t, o = this.name + "[" + t + "]", d = !1, b = function() {
                d || (e.apply(null, arguments), d = !0);
              };
              return this[t] = b, { number: t, id: r, name: o, callback: b };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var u = new l("_pusher_script_", "Pusher.ScriptReceivers"), I = {
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
          }, k = I;
          class P {
            constructor(e) {
              this.options = e, this.receivers = e.receivers || u, this.loading = {};
            }
            load(e, t, r) {
              var o = this;
              if (o.loading[e] && o.loading[e].length > 0)
                o.loading[e].push(r);
              else {
                o.loading[e] = [r];
                var d = T.createScriptRequest(o.getPath(e, t)), b = o.receivers.create(function(_) {
                  if (o.receivers.remove(b), o.loading[e]) {
                    var C = o.loading[e];
                    delete o.loading[e];
                    for (var x = function(F) {
                      F || d.cleanup();
                    }, O = 0; O < C.length; O++)
                      C[O](_, x);
                  }
                });
                d.send(b);
              }
            }
            getRoot(e) {
              var t, r = T.getDocument().location.protocol;
              return e && e.useTLS || r === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var L = new l("_pusher_dependencies", "Pusher.DependenciesReceivers"), R = new P({
            cdn_http: k.cdn_http,
            cdn_https: k.cdn_https,
            version: k.VERSION,
            suffix: k.dependency_suffix,
            receivers: L
          });
          const c = {
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
          var g = { buildLogSuffix: function(n) {
            const e = "See:", t = c.urls[n];
            if (!t)
              return "";
            let r;
            return t.fullUrl ? r = t.fullUrl : t.path && (r = c.baseUrl + t.path), r ? `${e} ${r}` : "";
          } }, m;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(m || (m = {}));
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
          class S extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class A extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class E extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class D extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class j extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class N extends Error {
            constructor(e, t) {
              super(t), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var V = function(n, e, t, r, o) {
            const d = T.createXHR();
            d.open("POST", t.endpoint, !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var b in t.headers)
              d.setRequestHeader(b, t.headers[b]);
            if (t.headersProvider != null) {
              let _ = t.headersProvider();
              for (var b in _)
                d.setRequestHeader(b, _[b]);
            }
            return d.onreadystatechange = function() {
              if (d.readyState === 4)
                if (d.status === 200) {
                  let _, C = !1;
                  try {
                    _ = JSON.parse(d.responseText), C = !0;
                  } catch {
                    o(new N(200, `JSON returned from ${r.toString()} endpoint was invalid, yet status code was 200. Data was: ${d.responseText}`), null);
                  }
                  C && o(null, _);
                } else {
                  let _ = "";
                  switch (r) {
                    case m.UserAuthentication:
                      _ = g.buildLogSuffix("authenticationEndpoint");
                      break;
                    case m.ChannelAuthorization:
                      _ = `Clients must be authorized to join private or presence channels. ${g.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  o(new N(d.status, `Unable to retrieve auth string from ${r.toString()} endpoint - received status: ${d.status} from ${t.endpoint}. ${_}`), null);
                }
            }, d.send(e), d;
          };
          function se(n) {
            return K(Z(n));
          }
          var M = String.fromCharCode, Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Y = function(n) {
            var e = n.charCodeAt(0);
            return e < 128 ? n : e < 2048 ? M(192 | e >>> 6) + M(128 | e & 63) : M(224 | e >>> 12 & 15) + M(128 | e >>> 6 & 63) + M(128 | e & 63);
          }, Z = function(n) {
            return n.replace(/[^\x00-\x7F]/g, Y);
          }, ee = function(n) {
            var e = [0, 2, 1][n.length % 3], t = n.charCodeAt(0) << 16 | (n.length > 1 ? n.charCodeAt(1) : 0) << 8 | (n.length > 2 ? n.charCodeAt(2) : 0), r = [
              Q.charAt(t >>> 18),
              Q.charAt(t >>> 12 & 63),
              e >= 2 ? "=" : Q.charAt(t >>> 6 & 63),
              e >= 1 ? "=" : Q.charAt(t & 63)
            ];
            return r.join("");
          }, K = window.btoa || function(n) {
            return n.replace(/[\s\S]{1,3}/g, ee);
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
          var oe = ie;
          function _t(n) {
            window.clearTimeout(n);
          }
          function kt(n) {
            window.clearInterval(n);
          }
          class ae extends oe {
            constructor(e, t) {
              super(setTimeout, _t, e, function(r) {
                return t(), null;
              });
            }
          }
          class St extends oe {
            constructor(e, t) {
              super(setInterval, kt, e, function(r) {
                return t(), r;
              });
            }
          }
          var Ct = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new ae(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(r) {
                return r[n].apply(r, t.concat(arguments));
              };
            }
          }, $ = Ct;
          function W(n, ...e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              for (var o in r)
                r[o] && r[o].constructor && r[o].constructor === Object ? n[o] = W(n[o] || {}, r[o]) : n[o] = r[o];
            }
            return n;
          }
          function Tt() {
            for (var n = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(ve(arguments[e]));
            return n.join(" : ");
          }
          function qe(n, e) {
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
          function te(n, e) {
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && e(n[t], t, n);
          }
          function ze(n) {
            var e = [];
            return te(n, function(t, r) {
              e.push(r);
            }), e;
          }
          function Rt(n) {
            var e = [];
            return te(n, function(t) {
              e.push(t);
            }), e;
          }
          function de(n, e, t) {
            for (var r = 0; r < n.length; r++)
              e.call(t || window, n[r], r, n);
          }
          function Be(n, e) {
            for (var t = [], r = 0; r < n.length; r++)
              t.push(e(n[r], r, n, t));
            return t;
          }
          function It(n, e) {
            var t = {};
            return te(n, function(r, o) {
              t[o] = e(r);
            }), t;
          }
          function $e(n, e) {
            e = e || function(o) {
              return !!o;
            };
            for (var t = [], r = 0; r < n.length; r++)
              e(n[r], r, n, t) && t.push(n[r]);
            return t;
          }
          function Ve(n, e) {
            var t = {};
            return te(n, function(r, o) {
              (e && e(r, o, n, t) || r) && (t[o] = r);
            }), t;
          }
          function At(n) {
            var e = [];
            return te(n, function(t, r) {
              e.push([r, t]);
            }), e;
          }
          function We(n, e) {
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
              return typeof e == "object" && (e = ve(e)), encodeURIComponent(se(e.toString()));
            });
          }
          function Et(n) {
            var e = Ve(n, function(r) {
              return r !== void 0;
            }), t = Be(At(Lt(e)), $.method("join", "=")).join("&");
            return t;
          }
          function xt(n) {
            var e = [], t = [];
            return function r(o, d) {
              var b, _, C;
              switch (typeof o) {
                case "object":
                  if (!o)
                    return null;
                  for (b = 0; b < e.length; b += 1)
                    if (e[b] === o)
                      return { $ref: t[b] };
                  if (e.push(o), t.push(d), Object.prototype.toString.apply(o) === "[object Array]")
                    for (C = [], b = 0; b < o.length; b += 1)
                      C[b] = r(o[b], d + "[" + b + "]");
                  else {
                    C = {};
                    for (_ in o)
                      Object.prototype.hasOwnProperty.call(o, _) && (C[_] = r(o[_], d + "[" + JSON.stringify(_) + "]"));
                  }
                  return C;
                case "number":
                case "string":
                case "boolean":
                  return o;
              }
            }(n, "$");
          }
          function ve(n) {
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
              Ne.log ? Ne.log(r) : Ne.logToConsole && e.bind(this)(r);
            }
          }
          var U = new Ot(), Nt = function(n, e, t, r, o) {
            (t.headers !== void 0 || t.headersProvider != null) && U.warn(`To send headers with the ${r.toString()} request, you must use AJAX, rather than JSONP.`);
            var d = n.nextAuthCallbackID.toString();
            n.nextAuthCallbackID++;
            var b = n.getDocument(), _ = b.createElement("script");
            n.auth_callbacks[d] = function(O) {
              o(null, O);
            };
            var C = "Pusher.auth_callbacks['" + d + "']";
            _.src = t.endpoint + "?callback=" + encodeURIComponent(C) + "&" + e;
            var x = b.getElementsByTagName("head")[0] || b.documentElement;
            x.insertBefore(_, x.firstChild);
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
                this.request = T.createScriptRequest(r), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Ut = function(n, e) {
            return function(t, r) {
              var o = "http" + (e ? "s" : "") + "://", d = o + (n.host || n.options.host) + n.options.path, b = T.createJSONPRequest(d, t), _ = T.ScriptReceivers.create(function(C, x) {
                u.remove(_), b.cleanup(), x && x.host && (n.host = x.host), r && r(C, x);
              });
              b.send(_);
            };
          }, Ht = {
            name: "jsonp",
            getAgent: Ut
          }, Ft = Ht;
          function Ce(n, e, t) {
            var r = n + (e.useTLS ? "s" : ""), o = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return r + "://" + o + t;
          }
          function Te(n, e) {
            var t = "/app/" + n, r = "?protocol=" + k.PROTOCOL + "&client=js&version=" + k.VERSION + (e ? "&" + e : "");
            return t + r;
          }
          var qt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "") + Te(n, "flash=false");
              return Ce("ws", e, t);
            }
          }, zt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "/pusher") + Te(n);
              return Ce("http", e, t);
            }
          }, Bt = {
            getInitial: function(n, e) {
              return Ce("http", e, e.httpPath || "/pusher");
            },
            getPath: function(n, e) {
              return Te(n);
            }
          };
          class $t {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Re(e)];
            }
            add(e, t, r) {
              var o = Re(e);
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
              var o = e ? [Re(e)] : ze(this._callbacks);
              t || r ? this.removeCallback(o, t, r) : this.removeAllCallbacks(o);
            }
            removeCallback(e, t, r) {
              de(e, function(o) {
                this._callbacks[o] = $e(this._callbacks[o] || [], function(d) {
                  return t && t !== d.fn || r && r !== d.context;
                }), this._callbacks[o].length === 0 && delete this._callbacks[o];
              }, this);
            }
            removeAllCallbacks(e) {
              de(e, function(t) {
                delete this._callbacks[t];
              }, this);
            }
          }
          function Re(n) {
            return "_" + n;
          }
          class ne {
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
              return e ? (this.global_callbacks = $e(this.global_callbacks || [], (t) => t !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, t, r) {
              for (var o = 0; o < this.global_callbacks.length; o++)
                this.global_callbacks[o](e, t);
              var d = this.callbacks.get(e), b = [];
              if (r ? b.push(t, r) : t && b.push(t), d && d.length > 0)
                for (var o = 0; o < d.length; o++)
                  d[o].fn.apply(d[o].context || window, b);
              else this.failThrough && this.failThrough(e, t);
              return this;
            }
          }
          class Vt extends ne {
            constructor(e, t, r, o, d) {
              super(), this.initialize = T.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = r, this.key = o, this.options = d, this.state = "new", this.timeline = d.timeline, this.activityTimeout = d.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return $.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), U.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? ($.defer(() => {
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
              return W({ cid: this.id }, e);
            }
          }
          class he {
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
          var Wt = new he({
            urls: qt,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!T.getWebSocketAPI();
            },
            isSupported: function() {
              return !!T.getWebSocketAPI();
            },
            getSocket: function(n) {
              return T.createWebSocket(n);
            }
          }), Xe = {
            urls: zt,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Ge = W({
            getSocket: function(n) {
              return T.HTTPFactory.createStreamingSocket(n);
            }
          }, Xe), Je = W({
            getSocket: function(n) {
              return T.HTTPFactory.createPollingSocket(n);
            }
          }, Xe), Ke = {
            isSupported: function() {
              return T.isXHRSupported();
            }
          }, Xt = new he(W({}, Ge, Ke)), Gt = new he(W({}, Je, Ke)), Jt = {
            ws: Wt,
            xhr_streaming: Xt,
            xhr_polling: Gt
          }, ye = Jt, Kt = new he({
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
                js_path: R.getPath("sockjs", {
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
          }), Qe = {
            isSupported: function(n) {
              var e = T.isXDRSupported(n.useTLS);
              return e;
            }
          }, Qt = new he(W({}, Ge, Qe)), Yt = new he(W({}, Je, Qe));
          ye.xdr_streaming = Qt, ye.xdr_polling = Yt, ye.sockjs = Kt;
          var Zt = ye;
          class en extends ne {
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
              o = W({}, o, {
                activityTimeout: this.pingDelay
              });
              var d = this.transport.createConnection(e, t, r, o), b = null, _ = function() {
                d.unbind("open", _), d.bind("closed", C), b = $.now();
              }, C = (x) => {
                if (d.unbind("closed", C), x.code === 1002 || x.code === 1003)
                  this.manager.reportDeath();
                else if (!x.wasClean && b) {
                  var O = $.now() - b;
                  O < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(O / 2, this.minPingDelay));
                }
              };
              return d.bind("open", _), d;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const Ye = {
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
              var e = Ye.decodeMessage(n);
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
          var ce = Ye;
          class rn extends ne {
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
              return r && (o.channel = r), U.debug("Event sent", o), this.send(ce.encodeMessage(o));
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
                    o = ce.decodeMessage(r);
                  } catch (d) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: d,
                      data: r.data
                    });
                  }
                  if (o !== void 0) {
                    switch (U.debug("Event recd", o), o.event) {
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
                te(e, (r, o) => {
                  this.transport.unbind(o, r);
                });
              };
              te(e, (r, o) => {
                this.transport.bind(o, r);
              });
            }
            handleCloseEvent(e) {
              var t = ce.getCloseAction(e), r = ce.getCloseError(e);
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
                  t = ce.processHandshake(e);
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
                var t = ce.getCloseAction(e) || "backoff", r = ce.getCloseError(e);
                this.finish(t, { error: r });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, t) {
              this.callback(W({ transport: this.transport, action: e }, t));
            }
          }
          class on {
            constructor(e, t) {
              this.timeline = e, this.options = t || {};
            }
            send(e, t) {
              this.timeline.isEmpty() || this.timeline.send(T.TimelineTransport.getAgent(this, e), t);
            }
          }
          class Ie extends ne {
            constructor(e, t) {
              super(function(r, o) {
                U.debug("No callbacks on " + e + " for " + r);
              }), this.name = e, this.pusher = t, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, t) {
              return t(null, { auth: "" });
            }
            trigger(e, t) {
              if (e.indexOf("client-") !== 0)
                throw new p("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var r = g.buildLogSuffix("triggeringClientEvents");
                U.warn(`Client event triggered before channel 'subscription_succeeded' event . ${r}`);
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
                e ? (this.subscriptionPending = !1, U.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: e.message
                }, e instanceof N ? { status: e.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
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
          class Ae extends Ie {
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
              te(this.members, (t, r) => {
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
              return d instanceof t ? d : new t(function(b) {
                b(d);
              });
            }
            return new (t || (t = Promise))(function(d, b) {
              function _(O) {
                try {
                  x(r.next(O));
                } catch (F) {
                  b(F);
                }
              }
              function C(O) {
                try {
                  x(r.throw(O));
                } catch (F) {
                  b(F);
                }
              }
              function x(O) {
                O.done ? d(O.value) : o(O.value).then(_, C);
              }
              x((r = r.apply(n, e || [])).next());
            });
          };
          class un extends Ae {
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
                    let b = g.buildLogSuffix("authorizationEndpoint");
                    U.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${b}, or the user should be signed in.`), t("Invalid auth response");
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
          var ln = i(1), Pe = i(0);
          class hn extends Ae {
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
                this.key = Object(Pe.decode)(d), delete o.shared_secret, t(null, o);
              });
            }
            trigger(e, t) {
              throw new E("Client events are not currently supported for encrypted channels");
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
                U.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!t.ciphertext || !t.nonce) {
                U.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + t);
                return;
              }
              let r = Object(Pe.decode)(t.ciphertext);
              if (r.length < this.nacl.secretbox.overheadLength) {
                U.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${r.length}`);
                return;
              }
              let o = Object(Pe.decode)(t.nonce);
              if (o.length < this.nacl.secretbox.nonceLength) {
                U.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${o.length}`);
                return;
              }
              let d = this.nacl.secretbox.open(r, o, this.key);
              if (d === null) {
                U.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (b, _) => {
                  if (b) {
                    U.error(`Failed to make a request to the authEndpoint: ${_}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (d = this.nacl.secretbox.open(r, o, this.key), d === null) {
                    U.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(e, this.getDataToEmit(d));
                });
                return;
              }
              this.emit(e, this.getDataToEmit(d));
            }
            getDataToEmit(e) {
              let t = Object(ln.decode)(e);
              try {
                return JSON.parse(t);
              } catch {
                return t;
              }
            }
          }
          class dn extends ne {
            constructor(e, t) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = t, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var r = T.getNetwork();
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new ae(e || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new ae(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new ae(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new ae(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(e) {
              return W({}, e, {
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
              return W({}, e, {
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
                o === "connected" && (o += " with new socket ID " + t.socket_id), U.debug("State changed", r + " -> " + o), this.timeline.info({ state: e, params: t }), this.emit("state_change", { previous: r, current: e }), this.emit(e, t);
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
              te(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function pn(n, e) {
            if (n.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return re.createEncryptedChannel(n, e, e.config.nacl);
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", r = g.buildLogSuffix("encryptedChannelSupport");
              throw new E(`${t}. ${r}`);
            } else {
              if (n.indexOf("private-") === 0)
                return re.createPrivateChannel(n, e);
              if (n.indexOf("presence-") === 0)
                return re.createPresenceChannel(n, e);
              if (n.indexOf("#") === 0)
                throw new y('Cannot create a channel with name "' + n + '".');
              return re.createChannel(n, e);
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
              return new Ie(n, e);
            },
            createPrivateChannel(n, e) {
              return new Ae(n, e);
            },
            createPresenceChannel(n, e) {
              return new un(n, e);
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
          }, re = gn;
          class Ze {
            constructor(e) {
              this.options = e || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(e) {
              return re.createAssistantToTheTransportManager(this, e, {
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
          class ue {
            constructor(e, t) {
              this.strategies = e, this.loop = !!t.loop, this.failFast = !!t.failFast, this.timeout = t.timeout, this.timeoutLimit = t.timeoutLimit;
            }
            isSupported() {
              return We(this.strategies, $.method("isSupported"));
            }
            connect(e, t) {
              var r = this.strategies, o = 0, d = this.timeout, b = null, _ = (C, x) => {
                x ? t(null, x) : (o = o + 1, this.loop && (o = o % r.length), o < r.length ? (d && (d = d * 2, this.timeoutLimit && (d = Math.min(d, this.timeoutLimit))), b = this.tryStrategy(r[o], e, { timeout: d, failFast: this.failFast }, _)) : t(!0));
              };
              return b = this.tryStrategy(r[o], e, { timeout: d, failFast: this.failFast }, _), {
                abort: function() {
                  b.abort();
                },
                forceMinPriority: function(C) {
                  e = C, b && b.forceMinPriority(C);
                }
              };
            }
            tryStrategy(e, t, r, o) {
              var d = null, b = null;
              return r.timeout > 0 && (d = new ae(r.timeout, function() {
                b.abort(), o(!0);
              })), b = e.connect(t, function(_, C) {
                _ && d && d.isRunning() && !r.failFast || (d && d.ensureAborted(), o(_, C));
              }), {
                abort: function() {
                  d && d.ensureAborted(), b.abort();
                },
                forceMinPriority: function(_) {
                  b.forceMinPriority(_);
                }
              };
            }
          }
          class Le {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return We(this.strategies, $.method("isSupported"));
            }
            connect(e, t) {
              return mn(this.strategies, e, function(r, o) {
                return function(d, b) {
                  if (o[r].error = d, d) {
                    vn(o) && t(!0);
                    return;
                  }
                  de(o, function(_) {
                    _.forceMinPriority(b.transport.priority);
                  }), t(null, b);
                };
              });
            }
          }
          function mn(n, e, t) {
            var r = Be(n, function(o, d, b, _) {
              return o.connect(e, t(d, _));
            });
            return {
              abort: function() {
                de(r, yn);
              },
              forceMinPriority: function(o) {
                de(r, function(d) {
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
              var r = this.usingTLS, o = wn(r), d = o && o.cacheSkipCount ? o.cacheSkipCount : 0, b = [this.strategy];
              if (o && o.timestamp + this.ttl >= $.now()) {
                var _ = this.transports[o.transport];
                _ && (["ws", "wss"].includes(o.transport) || d > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: o.transport,
                  latency: o.latency
                }), b.push(new ue([_], {
                  timeout: o.latency * 2 + 1e3,
                  failFast: !0
                }))) : d++);
              }
              var C = $.now(), x = b.pop().connect(e, function O(F, _e) {
                F ? (et(r), b.length > 0 ? (C = $.now(), x = b.pop().connect(e, O)) : t(F)) : (_n(r, _e.transport.name, $.now() - C, d), t(null, _e));
              });
              return {
                abort: function() {
                  x.abort();
                },
                forceMinPriority: function(O) {
                  e = O, x && x.forceMinPriority(O);
                }
              };
            }
          }
          function Ee(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function wn(n) {
            var e = T.getLocalStorage();
            if (e)
              try {
                var t = e[Ee(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                et(n);
              }
            return null;
          }
          function _n(n, e, t, r) {
            var o = T.getLocalStorage();
            if (o)
              try {
                o[Ee(n)] = ve({
                  timestamp: $.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: r
                });
              } catch {
              }
          }
          function et(n) {
            var e = T.getLocalStorage();
            if (e)
              try {
                delete e[Ee(n)];
              } catch {
              }
          }
          class be {
            constructor(e, { delay: t }) {
              this.strategy = e, this.options = { delay: t };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var r = this.strategy, o, d = new ae(this.options.delay, function() {
                o = r.connect(e, t);
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
          class fe {
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
          class kn {
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
          function pe(n) {
            return function() {
              return n.isSupported();
            };
          }
          var Sn = function(n, e, t) {
            var r = {};
            function o(ht, kr, Sr, Cr, Tr) {
              var dt = t(n, ht, kr, Sr, Cr, Tr);
              return r[ht] = dt, dt;
            }
            var d = Object.assign({}, e, {
              hostNonTLS: n.wsHost + ":" + n.wsPort,
              hostTLS: n.wsHost + ":" + n.wssPort,
              httpPath: n.wsPath
            }), b = Object.assign({}, d, {
              useTLS: !0
            }), _ = Object.assign({}, e, {
              hostNonTLS: n.httpHost + ":" + n.httpPort,
              hostTLS: n.httpHost + ":" + n.httpsPort,
              httpPath: n.httpPath
            }), C = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, x = new Ze({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), O = new Ze({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), F = o("ws", "ws", 3, d, x), _e = o("wss", "ws", 3, b, x), vr = o("sockjs", "sockjs", 1, _), it = o("xhr_streaming", "xhr_streaming", 1, _, O), yr = o("xdr_streaming", "xdr_streaming", 1, _, O), ot = o("xhr_polling", "xhr_polling", 1, _), br = o("xdr_polling", "xdr_polling", 1, _), at = new ue([F], C), wr = new ue([_e], C), _r = new ue([vr], C), ct = new ue([
              new fe(pe(it), it, yr)
            ], C), ut = new ue([
              new fe(pe(ot), ot, br)
            ], C), lt = new ue([
              new fe(pe(ct), new Le([
                ct,
                new be(ut, { delay: 4e3 })
              ]), ut)
            ], C), Me = new fe(pe(lt), lt, _r), De;
            return e.useTLS ? De = new Le([
              at,
              new be(Me, { delay: 2e3 })
            ]) : De = new Le([
              at,
              new be(wr, { delay: 2e3 }),
              new be(Me, { delay: 5e3 })
            ]), new bn(new kn(new fe(pe(F), De, Me)), r, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, Cn = Sn, Tn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), R.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
              n.hooks.isInitialized() ? (n.changeState("initialized"), t(!0)) : (e && n.onError(e), n.onClose(), t(!1));
            })) : n.onClose();
          }, Rn = {
            getRequest: function(n) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                n.emit("error", new w()), n.close();
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
          class Pn extends ne {
            constructor(e, t, r) {
              super(), this.hooks = e, this.method = t, this.url = r;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, T.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (T.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
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
          var xe;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(xe || (xe = {}));
          var le = xe, Ln = 1;
          class En {
            constructor(e, t) {
              this.hooks = e, this.session = nt(1e3) + "/" + Mn(8), this.location = xn(t), this.readyState = le.CONNECTING, this.openStream();
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
              if (this.readyState === le.OPEN)
                try {
                  return T.createSocketRequest("POST", tt(On(this.location, this.session))).start(e), !0;
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
              this.closeStream(), this.readyState = le.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: t,
                wasClean: r
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === le.OPEN && this.onActivity();
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
              this.readyState === le.CONNECTING ? (e && e.hostname && (this.location.base = Nn(this.location.base, e.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
            }
            onEvent(e) {
              this.readyState === le.OPEN && this.onmessage && this.onmessage({ data: e });
            }
            onActivity() {
              this.onactivity && this.onactivity();
            }
            onError(e) {
              this.onerror && this.onerror(e);
            }
            openStream() {
              this.stream = T.createSocketRequest("POST", tt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                $.defer(() => {
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
          function tt(n) {
            var e = n.indexOf("?") === -1 ? "?" : "&";
            return n + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + Ln++;
          }
          function Nn(n, e) {
            var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);
            return t[1] + e + t[3];
          }
          function nt(n) {
            return T.randomInt(n);
          }
          function Mn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(nt(32).toString(32));
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
          }, Fn = Hn, qn = {
            getRequest: function(n) {
              var e = T.getXHRAPI(), t = new e();
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
          }, zn = qn, Bn = {
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
              return this.createRequest(zn, n, e);
            },
            createRequest(n, e, t) {
              return new Pn(n, e, t);
            }
          }, rt = Bn;
          rt.createXDR = function(n, e) {
            return this.createRequest(In, n, e);
          };
          var $n = rt, Vn = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: u,
            DependenciesReceivers: L,
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
              window.JSON ? e() : R.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: V, jsonp: Mt };
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
          }, T = Vn, Oe;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(Oe || (Oe = {}));
          var we = Oe;
          class Wn {
            constructor(e, t, r) {
              this.key = e, this.session = t, this.events = [], this.options = r || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(W({}, t, { timestamp: $.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(we.ERROR, e);
            }
            info(e) {
              this.log(we.INFO, e);
            }
            debug(e) {
              this.log(we.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, t) {
              var r = W({
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
                  return st(new S(), t);
              } else return st(new j(), t);
              var r = !1, o = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), d = null, b = function() {
                o.unbind("initialized", b), o.connect();
              }, _ = function() {
                d = re.createHandshake(o, function(F) {
                  r = !0, O(), t(null, F);
                });
              }, C = function(F) {
                O(), t(F);
              }, x = function() {
                O();
                var F;
                F = ve(o), t(new A(F));
              }, O = function() {
                o.unbind("initialized", b), o.unbind("open", _), o.unbind("error", C), o.unbind("closed", x);
              };
              return o.bind("initialized", b), o.bind("open", _), o.bind("error", C), o.bind("closed", x), o.initialize(), {
                abort: () => {
                  r || (O(), d ? d.close() : o.close());
                },
                forceMinPriority: (F) => {
                  r || this.priority < F && (d ? d.close() : o.close());
                }
              };
            }
          }
          function st(n, e) {
            return $.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Gn } = T;
          var Jn = function(n, e, t, r, o, d) {
            var b = Gn[t];
            if (!b)
              throw new D(t);
            var _ = (!n.enabledTransports || qe(n.enabledTransports, e) !== -1) && (!n.disabledTransports || qe(n.disabledTransports, e) === -1), C;
            return _ ? (o = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, o), C = new Xn(e, r, d ? d.getAssistant(b) : b, o)) : C = Kn, C;
          }, Kn = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = $.defer(function() {
                e(new j());
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
            "disableStats" in n && U.warn("The disableStats option is deprecated in favor of enableStats");
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
            if (typeof T.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = Yn(e, n);
              T.getAuthorizers()[n.transport](T, r, n, m.UserAuthentication, t);
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
            if (typeof T.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const r = er(e, n);
              T.getAuthorizers()[n.transport](T, r, n, m.ChannelAuthorization, t);
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
              const b = n.channel(o.channelName);
              t(b, r).authorize(o.socketId, d);
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
              userAuthenticator: ur(n),
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
            return T.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
          }
          function cr(n) {
            return "enableStats" in n ? n.enableStats : "disableStats" in n ? !n.disableStats : !1;
          }
          function ur(n) {
            const e = Object.assign(Object.assign({}, k.userAuthentication), n.userAuthentication);
            return "customHandler" in e && e.customHandler != null ? e.customHandler : Zn(e);
          }
          function lr(n, e) {
            let t;
            return "channelAuthorization" in n ? t = Object.assign(Object.assign({}, k.channelAuthorization), n.channelAuthorization) : (t = {
              transport: n.authTransport || k.authTransport,
              endpoint: n.authEndpoint || k.authEndpoint
            }, "auth" in n && ("params" in n.auth && (t.params = n.auth.params), "headers" in n.auth && (t.headers = n.auth.headers)), "authorizer" in n && (t.customHandler = nr(e, t, n.authorizer))), t;
          }
          function hr(n, e) {
            const t = lr(n, e);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : tr(t);
          }
          class dr extends ne {
            constructor(e) {
              super(function(t, r) {
                U.debug(`No callbacks on watchlist events for ${t}`);
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
          class gr extends ne {
            constructor(e) {
              super(function(t, r) {
                U.debug("No callbacks on user for " + t);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (t, r) => {
                if (t) {
                  U.warn(`Error during signin: ${t}`), this._cleanup();
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
                U.error(`Failed parsing user data after signin: ${e.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                U.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const e = (t) => {
                t.subscriptionPending && t.subscriptionCancelled ? t.reinstateSubscription() : !t.subscriptionPending && this.pusher.connection.state === "connected" && t.subscribe();
              };
              this.serverToUserChannel = new Ie(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((t, r) => {
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
          class B {
            static ready() {
              B.isReady = !0;
              for (var e = 0, t = B.instances.length; e < t; e++)
                B.instances[e].connect();
            }
            static getClientFeatures() {
              return ze(Ve({ ws: T.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              mr(e), Qn(t), this.key = e, this.config = rr(t, this), this.channels = re.createChannels(), this.global_emitter = new ne(), this.sessionID = T.randomInt(1e9), this.timeline = new Wn(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: B.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: we.INFO,
                version: k.VERSION
              }), this.config.enableStats && (this.timelineSender = re.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + T.TimelineTransport.name
              }));
              var r = (o) => T.getDefaultStrategy(this.config, o, Jn);
              this.connection = re.createConnectionManager(this.key, {
                getStrategy: r,
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
                  var _ = this.channel(o.channel);
                  _ && _.handleEvent(o);
                }
                b || this.global_emitter.emit(o.event, o.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (o) => {
                U.warn(o);
              }), B.instances.push(this), this.timeline.info({ instances: B.instances.length }), this.user = new gr(this), B.isReady && this.connect();
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
                this.timelineSenderTimer = new St(6e4, function() {
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
          B.instances = [], B.isReady = !1, B.logToConsole = !1, B.Runtime = T, B.ScriptReceivers = T.ScriptReceivers, B.DependenciesReceivers = T.DependenciesReceivers, B.auth_callbacks = T.auth_callbacks;
          var Ne = a.default = B;
          function mr(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          T.setup(B);
        }
        /******/
      ])
    );
  });
})(wt);
var Hr = wt.exports;
const Fr = /* @__PURE__ */ Ur(Hr);
window.Pusher = Fr;
const X = "cpr-agent";
class qr {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.hookIds = {};
  }
  /**
   * INTERCEPTOR: Wraps renderTemplate to steal the CPRRoll object before it vanishes.
   */
  async rollAndCapture(f, s) {
    return console.log(`%c[Bridge] 🕵️‍♂️ Starting Render Interceptor for Actor ${f}`, "color: #00ffff; font-weight: bold;"), new Promise(async (a, i) => {
      let l = !1;
      const u = renderTemplate, I = function(k, P) {
        return k && typeof k == "string" && k.includes("rollcard") && (console.log(`%c[Bridge] 🎯 Intercepted Render: ${k}`, "color: #00ff00;", P), l = !0, renderTemplate = u, a({
          success: !0,
          total: P.resultTotal,
          isCriticalSuccess: P.wasCritSuccess ? P.wasCritSuccess() : P.isCriticalSuccess || !1,
          isCriticalFailure: P.wasCritFail ? P.wasCritFail() : P.isCriticalFailure || !1,
          label: P.rollTitle,
          rawRoll: P
          // <--- HERE IS YOUR FULL OBJECT
        })), u.apply(this, arguments);
      };
      renderTemplate = I, setTimeout(() => {
        l || (renderTemplate = u, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), a({ success: !1, error: "Timed out waiting for render" }));
      }, 5e3);
      try {
        await s();
      } catch {
        renderTemplate = u, a({ success: !1, error: "Trigger failed" });
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
    game.settings.register(X, "apiUrl", {
      name: "Relay Controller URL",
      hint: "The base URL of your Agent (e.g., http://cyberpunk.ddev.site). Do NOT include port 8080 here.",
      scope: "world",
      config: !0,
      type: String,
      default: "http://localhost",
      onChange: () => this.reconnect()
    }), game.settings.register(X, "reverbPort", {
      name: "Reverb Port",
      hint: "The port your Reverb server is running on (default: 8080). If using DDEV with SSL, try 8081.",
      scope: "world",
      config: !0,
      type: Number,
      default: 8080,
      onChange: () => this.reconnect()
    }), game.settings.register(X, "reverbUseSSL", {
      name: "Reverb Use SSL",
      hint: "Enable if using https/wss for Reverb.",
      scope: "world",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: () => this.reconnect()
    }), game.settings.register(X, "reverbKey", {
      name: "Reverb App Key",
      hint: "The App Key from your .env file.",
      scope: "world",
      config: !0,
      type: String,
      default: "itdsiqtx8cpskowawl1p",
      onChange: () => this.reconnect()
    }), game.settings.register(X, "apiKey", {
      name: "API Key (Sanctum Token)",
      hint: "Generate this in your Cyberpunk Agent dashboard.",
      scope: "world",
      // or 'client' if each player has their own
      config: !0,
      type: String,
      default: "",
      onChange: () => this.reconnect()
    }), game.settings.register(X, "debugMode", {
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
    const f = game.settings.get(X, "apiUrl"), s = game.settings.get(X, "apiKey"), a = game.settings.get(X, "debugMode"), i = game.settings.get(X, "reverbPort") || 8080, l = game.settings.get(X, "reverbUseSSL") || !1;
    if (!s || !f) {
      ui.notifications.warn("Cyberpunk Bridge: Missing API URL or Key.");
      return;
    }
    this.echo && this.echo.disconnect();
    let u;
    try {
      u = new URL(f);
    } catch (I) {
      console.error("Invalid URL", I);
      return;
    }
    console.log(`Connecting to Cyberpunk Agent Relay at ${u.hostname}:${i}...`), this.echo = new jr({
      broadcaster: "reverb",
      key: game.settings.get(X, "reverbKey") || "itdsiqtx8cpskowawl1p",
      wsHost: u.hostname,
      wsPort: i,
      wssPort: i,
      forceTLS: l,
      enabledTransports: l ? ["ws", "wss"] : ["ws"],
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
    this.hookIds.updateActor = Hooks.on("updateActor", (s, a, i, l) => {
      if (a.system) {
        const u = {}, I = (k, P = "system.") => {
          for (let L in k) {
            const R = k[L];
            R !== null && typeof R == "object" && !Array.isArray(R) && !(R instanceof foundry.utils.Color) ? I(R, `${P}${L}.`) : u[`${P}${L}`] = R;
          }
        };
        I(a.system), f(s, u);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (s, a, i, l) => {
      const u = s.parent;
      if (u instanceof Actor) {
        const I = {}, k = `items.${s.id}.`;
        if (a.system) {
          const P = (L, R = `${k}system.`) => {
            for (let c in L) {
              const h = L[c];
              h !== null && typeof h == "object" && !Array.isArray(h) && !(h instanceof foundry.utils.Color) ? P(h, `${R}${c}.`) : I[`${R}${c}`] = h;
            }
          };
          P(a.system);
        }
        for (let P in a)
          P !== "system" && P !== "_id" && (I[`${k}${P}`] = a[P]);
        Object.keys(I).length > 0 && f(u, I);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (s, a, i) => {
      const l = s.parent;
      if (l instanceof Actor) {
        const u = {
          [`items.+${s.id}`]: s.toObject()
        };
        f(l, u);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (s, a, i) => {
      const l = s.parent;
      if (l instanceof Actor) {
        const u = {
          [`items.${s.id}`]: null
        };
        f(l, u);
      }
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(f) {
    let s = game.settings.get(X, "apiUrl");
    const a = game.settings.get(X, "apiKey");
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
    var I, k, P, L, R;
    const s = f.payload || f;
    console.log("Received Order:", s);
    const a = s.type, i = s.actorId, l = s.tokenId, u = s.requestId;
    switch (a) {
      case "UPDATE_ACTOR": {
        const c = game.actors.get(i);
        if (!c) {
          console.warn(`⚠️ Actor ID ${i} not found in this world.`);
          return;
        }
        await c.update(s.changes), ui.notifications.info(`💾 Sync: ${c.name} updated.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: i, success: !0, requestId: u });
        break;
      }
      case "ITEM_EQUIP": {
        const c = game.actors.get(i);
        if (c) {
          const h = c.items.get(s.itemId);
          if (h) {
            const g = `items.${s.itemId}.system.equipped`;
            await h.update({ "system.equipped": s.state }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [g]: s.state }, success: !0, requestId: u });
          }
        }
        break;
      }
      case "INSTALL_PROGRAM": {
        const c = game.actors.get(i);
        if (!c) return;
        const h = c.items.get(s.cyberdeckId), g = c.items.get(s.programId);
        if (!h || !g) return;
        const m = h.system.installedItems.usedSlots || 0, p = h.system.installedItems.slots || 0, y = g.system.size || 1;
        if (m + y > p) {
          ui.notifications.warn("Not enough memory slots on cyberdeck.");
          return;
        }
        const w = h.system.installedItems.list || [];
        if (w.includes(s.programId)) return;
        const S = [...w, s.programId], A = m + y;
        await h.update({
          "system.installedItems.list": S,
          "system.installedItems.usedSlots": A
        }), await this.sendResponse({
          type: "SHEET_DELTA",
          actorId: i,
          delta: {
            [`items.${s.cyberdeckId}.system.installedItems.list`]: S,
            [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: A
          },
          success: !0,
          requestId: u
        });
        break;
      }
      case "REMOVE_PROGRAM": {
        const c = game.actors.get(i);
        if (!c) return;
        const h = c.items.get(s.cyberdeckId), g = c.items.get(s.programId);
        if (!h) return;
        const m = h.system.installedItems.list || [];
        if (!m.includes(s.programId)) return;
        const p = m.filter((E) => E !== s.programId), y = g && g.system.size || 1, w = h.system.installedItems.usedSlots || 0, S = Math.max(0, w - y);
        await h.update({
          "system.installedItems.list": p,
          "system.installedItems.usedSlots": S
        });
        const A = {
          [`items.${s.cyberdeckId}.system.installedItems.list`]: p,
          [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: S
        };
        g && g.system.isRezzed && (await g.update({ "system.isRezzed": !1 }), A[`items.${s.programId}.system.isRezzed`] = !1), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: A, success: !0, requestId: u });
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
            requestId: u
          }));
        }
        break;
      }
      case "DAMAGE_ROLL": {
        const c = game.actors.get(i), h = c.items.get(s.weaponId);
        if (c && h) {
          const g = async () => {
            await c.sheet._onRoll({
              "data-roll-type": "damage",
              "data-item-id": h.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "damage",
                "data-item-id": h.id
              }
            });
          }, m = await this.rollAndCapture(i, g);
          m.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: u,
            actorId: i,
            total: m.total,
            isCriticalSuccess: m.isCriticalSuccess,
            isCriticalFailure: m.isCriticalFailure,
            label: `${h.name} (Damage)`,
            rawRoll: m.rawRoll,
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
          }, g = await this.rollAndCapture(i, h);
          if (g.success) {
            const m = c.system.derivedStats.deathsave || {};
            await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: u,
              actorId: i,
              total: g.total,
              isCriticalSuccess: g.isCriticalSuccess,
              isCriticalFailure: g.isCriticalFailure,
              label: "Death Save",
              rawRoll: g.rawRoll,
              success: !0
            }), await this.sendResponse({
              type: "SHEET_DELTA",
              actorId: i,
              delta: { "system.derivedStats.deathsave": m },
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
        }, g = await this.rollAndCapture(i, h);
        g.success && await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: u,
          actorId: i,
          total: g.total,
          isCriticalSuccess: g.isCriticalSuccess,
          isCriticalFailure: g.isCriticalFailure,
          rawRoll: g.rawRoll,
          success: !0
        });
        break;
      }
      case "INITIATIVE_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = async () => {
            await c.rollInitiative();
          }, g = await this.rollAndCapture(i, h);
          g.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: u,
            actorId: i,
            total: g.total,
            isCriticalSuccess: g.isCriticalSuccess,
            isCriticalFailure: g.isCriticalFailure,
            label: "Initiative",
            rawRoll: g.rawRoll,
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
          const g = async () => {
            await c.sheet._onRoll({
              type: "click",
              currentTarget: h
            });
          }, m = await this.rollAndCapture(i, g);
          m.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: u,
            actorId: i,
            total: m.total,
            isCriticalSuccess: m.isCriticalSuccess,
            isCriticalFailure: m.isCriticalFailure,
            label: s.programName,
            rawRoll: m.rawRoll,
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
            const g = {
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
            s.isAbility && (g["data-roll-subtype"] = "subRoleAbility", g["data-role-name"] = s.label, g.currentTarget["data-roll-subtype"] = "subRoleAbility", g.currentTarget["data-role-name"] = s.label);
            const m = async () => {
              await c.sheet._onRoll(g);
            }, p = await this.rollAndCapture(i, m);
            p.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: u,
              actorId: i,
              total: p.total,
              isCriticalSuccess: p.isCriticalSuccess,
              isCriticalFailure: p.isCriticalFailure,
              label: s.label,
              rawRoll: p.rawRoll,
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
            const g = async () => {
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
            }, m = await this.rollAndCapture(i, g);
            m.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: u,
              actorId: i,
              total: m.total,
              isCriticalSuccess: m.isCriticalSuccess,
              isCriticalFailure: m.isCriticalFailure,
              label: s.label,
              rawRoll: m.rawRoll,
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
          }, g = await this.rollAndCapture(i, h);
          g.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: u,
            actorId: i,
            total: g.total,
            isCriticalSuccess: g.isCriticalSuccess,
            isCriticalFailure: g.isCriticalFailure,
            label: s.label,
            rawRoll: g.rawRoll,
            success: !0
          });
        }
        break;
      }
      case "DICE_ROLL": {
        u && this.activeRequests.set(u, { actorId: i, timestamp: Date.now() });
        const c = new Roll(s.formula);
        await c.evaluate(), await c.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
          flavor: s.flavor
        }), await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: u,
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
        const c = canvas.tokens.get(l);
        if (c) {
          let h = {};
          s.direction === "up" ? h.y = c.document.y - canvas.grid.size : s.direction === "down" ? h.y = c.document.y + canvas.grid.size : s.direction === "left" ? h.x = c.document.x - canvas.grid.size : s.direction === "right" && (h.x = c.document.x + canvas.grid.size), await c.document.update(h), setTimeout(async () => {
            const g = { tokenId: l, requestId: u || "move-refresh" };
            await this.handleIncomingData({ type: "LIST_VISIBLE_TOKENS", ...g }), Array.from(game.user.targets)[0] && s.weaponId && await this.handleIncomingData({ type: "GET_DV_INFO", ...g, weaponId: s.weaponId });
          }, 200), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: l, success: !0, requestId: u });
        }
        break;
      }
      case "RELOAD_WEAPON": {
        const c = game.actors.get(i);
        if (c) {
          const h = c.items.get(s.weaponId), g = s.ammoId ? c.items.get(s.ammoId) : null, m = async () => {
            await h.reload();
            const p = {
              [`items.${s.weaponId}.system.magazine`]: h.system.magazine
            };
            g && (p[`items.${g.id}.system.amount`] = g.system.amount), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: p, success: !0, requestId: u });
          };
          if (g) {
            let p = h.getInstalledItems("ammo");
            p && p.length > 0 && h.uninstallItems(p), setTimeout(function() {
              h.installItems([g]);
            }, 500), setTimeout(async () => {
              await m();
            }, 1500);
          } else
            await m();
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
          let g;
          if (s.operation === "inc") {
            const m = h.split(".");
            let p = c;
            for (let S = 0; S < m.length; S++)
              p = S === 0 ? p[m[S]] : p == null ? void 0 : p[m[S]];
            const y = Number(p) || 0, w = Number(s.delta) || 0;
            g = y + w;
          } else
            g = Number(s.value) || 0;
          await c.update({ [h]: g }), await this.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [h]: g }, tab: "stats", success: !0 });
        }
        break;
      }
      case "ATTACK_ROLL": {
        const c = game.actors.get(i);
        if (c) {
          const h = s.weaponId, g = s.fireMode, m = canvas.tokens.get(s.targetId), p = "firetype-" + h, y = "cyberpunk-red-core";
          let w = "";
          switch (g) {
            case "Auto":
              w = "autofire";
              break;
            case "Suppress":
              w = "suppressive";
              break;
            case "Aimed":
              w = "aimed", await c.setFlag(y, "aimedLocation", "head");
              break;
            default:
              w = "";
              break;
          }
          m && m.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), w === "" ? await c.unsetFlag(y, p) : await c.setFlag(y, p, w);
          const S = document.createElement("a");
          S.dataset.rollType = "attack", S.dataset.itemId = h, S.dataset.rollTitle = g + " Attack";
          const A = async () => {
            await c.sheet._onRoll({
              preventDefault: () => {
              },
              currentTarget: S,
              type: "click"
            }, { showDialog: !1 });
          };
          let E = null;
          if (m) {
            const j = ((I = c.getActiveTokens()) == null ? void 0 : I[0]) || canvas.tokens.placeables.find((N) => {
              var H;
              return ((H = N.actor) == null ? void 0 : H.id) === c.id;
            });
            if (j) {
              const N = {
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
              }, H = [6, 12, 25, 50, 100, 200, 400, 800], V = m.center.x - j.center.x, se = m.center.y - j.center.y, M = Math.sqrt(Math.pow(V, 2) + Math.pow(se, 2)), Q = Math.ceil(M / (((k = canvas.grid) == null ? void 0 : k.size) || 128)), Y = c.items.get(h), Z = {
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
              }, ee = Z[(P = Y == null ? void 0 : Y.system) == null ? void 0 : P.weaponType] || Z[(L = Y == null ? void 0 : Y.system) == null ? void 0 : L.variety] || "Pistol", K = H.findIndex((oe) => Q <= oe);
              let ie = K !== -1 ? N[ee][K] : 99;
              Array.isArray(N[ee]) && typeof N[ee][0] == "string" && (ie = N[ee][Math.min(K !== -1 ? K : 0, N[ee].length - 1)]), E = ie === 99 ? "Out of Range" : ie;
            }
          }
          const D = await this.rollAndCapture(i, A);
          if (D.success) {
            let j = null;
            typeof E == "number" ? j = D.total >= E ? "Hit" : "Miss" : E === "Out of Range" && (j = "Miss"), await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: u,
              actorId: i,
              total: D.total,
              isCriticalSuccess: D.isCriticalSuccess,
              isCriticalFailure: D.isCriticalFailure,
              label: g + " Attack",
              rawRoll: D.rawRoll,
              dv: E,
              outcome: j,
              success: !0
            });
          }
        }
        break;
      }
      case "GET_ROLL_MODIFIERS": {
        const c = game.actors.get(i);
        if (!c) return;
        const h = s.weaponId, g = h ? c.items.get(h) : null;
        let m = "None", p = 0, y = "None", w = 0, S = 0;
        if (g) {
          m = g.system.weaponSkill;
          const M = c.items.find((Q) => Q.type === "skill" && Q.name === m);
          p = M && Number(M.system.level) || 0, y = M && M.system.stat || "ref", w = Number((R = c.system.stats[y]) == null ? void 0 : R.value) || 0, S = Number(g.system.attackmod) || 0;
        }
        let A = 0;
        const E = [], D = Number(c.system.derivedStats.hp.value) || 0, j = Number(c.system.derivedStats.seriouslyWounded) || 0, N = c.items.find((M) => M.name === "Stim" && M.type === "drug"), H = N && N.effects.some((M) => M.disabled === !1);
        if (D <= 0)
          A -= 4, E.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
        else if (D <= j) {
          const M = H ? 0 : -2;
          A += M, E.push({
            title: H ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
            penalty: M,
            description: H ? "Ignoring penalty due to Stim drug." : "All actions at -2."
          });
        }
        c.items.filter((M) => M.type === "criticalInjury").forEach((M) => {
          var ee;
          const Q = M.name || "Injury", Y = (((ee = M.system.description) == null ? void 0 : ee.value) || "").replace(/<[^>]*>/g, "");
          let Z = 0;
          if (M.effects && M.effects.length > 0 && M.effects.forEach((K) => {
            !K.disabled && K.changes && K.changes.forEach((ie) => {
              const oe = parseInt(ie.value);
              isNaN(oe) || (Z += oe);
            });
          }), Z === 0) {
            const K = String(Q).toLowerCase();
            (Y.includes("-2") || K.includes("arm") || K.includes("eye")) && (Z = -2);
          }
          A += Z, E.push({ title: Q, description: Y, penalty: Z });
        });
        const se = {
          actorName: c.name,
          baseBonus: w + p + S,
          breakdown: {
            statName: y,
            statValue: w,
            skillName: m,
            skillLevel: p,
            weaponAcc: S
          },
          totalPenalty: A,
          finalModifier: w + p + S + A,
          injuries: E
        };
        console.log("GET_ROLL_MODIFIERS result:", se), await this.sendResponse({ type: "ROLL_MODIFIERS_DATA", result: se });
        break;
      }
      case "GET_DV_INFO": {
        const c = canvas.tokens.get(l), h = Array.from(game.user.targets)[0], g = s.weaponId;
        if (c && h) {
          const m = {
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
          }, p = [6, 12, 25, 50, 100, 200, 400, 800], y = h.center.x - c.center.x, w = h.center.y - c.center.y, S = Math.sqrt(Math.pow(y, 2) + Math.pow(w, 2)), A = Math.ceil(S / 128), E = c.actor.items.get(g), D = {
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
          }, j = D[E.system.weaponType] || D[E.system.variety] || "Pistol", N = p.findIndex((se) => A <= se);
          let H = N !== -1 ? m[j][N] : 99;
          Array.isArray(m[j]) && typeof m[j][0] == "string" && (H = m[j][Math.min(N !== -1 ? N : 0, m[j].length - 1)]);
          const V = {
            targetName: h.name,
            distanceMeters: A,
            weaponCategory: j,
            dv: H === 99 ? "Out of Range" : H
          };
          console.log("GET_DV_INFO result:", V), await this.sendResponse({ type: "DV_INFO_DATA", result: V, requestId: u });
        }
        break;
      }
      case "LIST_VISIBLE_TOKENS": {
        const c = canvas.tokens.get(l);
        if (c) {
          const h = canvas.grid.size, g = canvas.dimensions, m = c.center.x, p = c.center.y, y = canvas.tokens.placeables.filter((w) => {
            const S = !w.document.hidden, A = w.actor && (w.actor.type === "character" || w.actor.type === "mook"), E = w.x >= g.sceneX && w.x <= g.sceneX + g.sceneWidth && w.y >= g.sceneY && w.y <= g.sceneY + g.sceneHeight;
            return S && A && E && w.id !== c.id;
          }).map((w) => {
            const S = w.center.x - m, A = w.center.y - p, D = (Math.sqrt(Math.pow(S, 2) + Math.pow(A, 2)) / h).toFixed(2);
            return {
              name: w.name,
              id: w.id,
              distanceM: parseFloat(D),
              type: w.actor.type
            };
          }).sort((w, S) => w.distanceM - S.distanceM);
          console.log("LIST_VISIBLE_TOKENS result:", y), await this.sendResponse({ type: "VISIBLE_TOKENS_DATA", tokens: y, requestId: u });
        }
        break;
      }
      case "GET_ACTOR": {
        let c = s.actorId;
        if (c !== null) {
          const h = game.actors.get(c);
          if (h) {
            console.log("GET_ACTOR result:", h), await this.sendResponse({ type: "ACTOR_DATA", actor: h, requestId: u });
            break;
          }
        }
        await this.sendResponse({ type: "ACTOR_DATA", actor: !1, requestId: u });
        break;
      }
      case "GET_ACTORS": {
        let c = canvas.tokens.placeables.filter((h) => h.actor && h.actor.hasPlayerOwner).map((h) => ({
          name: h.name,
          actorId: h.actor.id,
          tokenId: h.id
        }));
        console.log("GET_ACTORS result:", c), await this.sendResponse({ type: "ACTORS_DATA", actors: c, requestId: u });
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
window.cyberpunkBridge = new qr();
game.ready ? (window.cyberpunkBridge.registerSettings(), game.user.isGM && window.cyberpunkBridge.connect()) : (Hooks.once("init", () => {
  window.cyberpunkBridge.registerSettings();
}), Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect();
}));
