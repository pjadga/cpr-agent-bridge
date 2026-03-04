import.meta.hot && import.meta.hot.accept((y) => {
  console.log("Hot reloading module...");
});
function Ae(y) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  }, Ae(y);
}
function Q(y, c) {
  if (!(y instanceof c))
    throw new TypeError("Cannot call a class as a function");
}
function Ar(y, c) {
  for (var r = 0; r < c.length; r++) {
    var a = c[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(y, a.key, a);
  }
}
function Y(y, c, r) {
  return c && Ar(y.prototype, c), Object.defineProperty(y, "prototype", {
    writable: !1
  }), y;
}
function Le() {
  return Le = Object.assign || function(y) {
    for (var c = 1; c < arguments.length; c++) {
      var r = arguments[c];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (y[a] = r[a]);
    }
    return y;
  }, Le.apply(this, arguments);
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
  }), c && st(y, c);
}
function qe(y) {
  return qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qe(y);
}
function st(y, c) {
  return st = Object.setPrototypeOf || function(a, i) {
    return a.__proto__ = i, a;
  }, st(y, c);
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
function Er(y, c) {
  if (c && (typeof c == "object" || typeof c == "function"))
    return c;
  if (c !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pr(y);
}
function oe(y) {
  var c = Lr();
  return function() {
    var a = qe(y), i;
    if (c) {
      var l = qe(this).constructor;
      i = Reflect.construct(a, arguments, l);
    } else
      i = a.apply(this, arguments);
    return Er(this, i);
  };
}
var it = /* @__PURE__ */ function() {
  function y() {
    Q(this, y);
  }
  return Y(y, [{
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
}(), Pt = /* @__PURE__ */ function() {
  function y(c) {
    Q(this, y), this.namespace = c;
  }
  return Y(y, [{
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
function xr(y) {
  try {
    new y();
  } catch (c) {
    if (c.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var ot = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r(a, i, l) {
    var u;
    return Q(this, r), u = c.call(this), u.name = i, u.pusher = a, u.options = l, u.eventFormatter = new Pt(u.options.namespace), u.subscribe(), u;
  }
  return Y(r, [{
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
      return this.subscription.bind_global(function(u, g) {
        if (!u.startsWith("pusher:")) {
          var _ = l.options.namespace.replace(/\./g, "\\"), M = u.startsWith(_) ? u.substring(_.length + 1) : "." + u;
          i(M, g);
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
}(it), Et = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
}(ot), Or = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
}(ot), Mr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
  }]), r;
}(Et), xt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r(a, i, l) {
    var u;
    return Q(this, r), u = c.call(this), u.events = {}, u.listeners = {}, u.name = i, u.socket = a, u.options = l, u.eventFormatter = new Pt(u.options.namespace), u.subscribe(), u;
  }
  return Y(r, [{
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
      return this.listeners[i] = this.listeners[i] || [], this.events[i] || (this.events[i] = function(g, _) {
        u.name === g && u.listeners[i] && u.listeners[i].forEach(function(M) {
          return M(_);
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
  }]), r;
}(it), Ot = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
}(xt), Nr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
  }]), r;
}(Ot), ze = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
}(it), Mt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
}(ze), Dr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
}(ze), jr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    return Q(this, r), c.apply(this, arguments);
  }
  return Y(r, [{
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
}(Mt), at = /* @__PURE__ */ function() {
  function y(c) {
    Q(this, y), this._defaultOptions = {
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
  return Y(y, [{
    key: "setOptions",
    value: function(r) {
      this.options = Le(this._defaultOptions, r);
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
}(), At = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    var a;
    return Q(this, r), a = c.apply(this, arguments), a.channels = {}, a;
  }
  return Y(r, [{
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
      return this.channels[i] || (this.channels[i] = new ot(this.pusher, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Et(this.pusher, "private-" + i, this.options)), this.channels["private-" + i];
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
      var l = this, u = [i, "private-" + i, "private-encrypted-" + i, "presence-" + i];
      u.forEach(function(g, _) {
        l.leaveChannel(g);
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
}(at), Lt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    var a;
    return Q(this, r), a = c.apply(this, arguments), a.channels = {}, a;
  }
  return Y(r, [{
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
      return this.channels[i] || (this.channels[i] = new xt(this.socket, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Ot(this.socket, "private-" + i, this.options)), this.channels["private-" + i];
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
      var l = this, u = [i, "private-" + i, "presence-" + i];
      u.forEach(function(g) {
        l.leaveChannel(g);
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
}(at), Fr = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r() {
    var a;
    return Q(this, r), a = c.apply(this, arguments), a.channels = {}, a;
  }
  return Y(r, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(i, l, u) {
      return new ze();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return new ze();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return new Mt();
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
      return new jr();
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
}(at), Ur = /* @__PURE__ */ function() {
  function y(c) {
    Q(this, y), this.options = c, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return Y(y, [{
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
        this.connector = new At(Le(Le({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new At(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Lt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new Fr(this.options);
      else if (typeof this.options.broadcaster == "function" && xr(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(Ae(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
      if (this.connector instanceof Lt)
        throw new Error("Broadcaster ".concat(Ae(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : Ae(Turbo)) === "object" && this.registerTurboRequestInterceptor();
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
var Nt = { exports: {} };
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
          var u = a[l] = {
            /******/
            i: l,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[l].call(u.exports, u, u.exports, i), u.l = !0, u.exports;
        }
        return i.m = r, i.c = a, i.d = function(l, u, g) {
          i.o(l, u) || Object.defineProperty(l, u, { enumerable: !0, get: g });
        }, i.r = function(l) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
        }, i.t = function(l, u) {
          if (u & 1 && (l = i(l)), u & 8 || u & 4 && typeof l == "object" && l && l.__esModule) return l;
          var g = /* @__PURE__ */ Object.create(null);
          if (i.r(g), Object.defineProperty(g, "default", { enumerable: !0, value: l }), u & 2 && typeof l != "string") for (var _ in l) i.d(g, _, (function(M) {
            return l[M];
          }).bind(null, _));
          return g;
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
        function(r, a, i) {
          var l = this && this.__extends || /* @__PURE__ */ function() {
            var I = function(b, w) {
              return I = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, B) {
                E.__proto__ = B;
              } || function(E, B) {
                for (var X in B) B.hasOwnProperty(X) && (E[X] = B[X]);
              }, I(b, w);
            };
            return function(b, w) {
              I(b, w);
              function E() {
                this.constructor = b;
              }
              b.prototype = w === null ? Object.create(w) : (E.prototype = w.prototype, new E());
            };
          }();
          Object.defineProperty(a, "__esModule", { value: !0 });
          var u = 256, g = (
            /** @class */
            function() {
              function I(b) {
                b === void 0 && (b = "="), this._paddingCharacter = b;
              }
              return I.prototype.encodedLength = function(b) {
                return this._paddingCharacter ? (b + 2) / 3 * 4 | 0 : (b * 8 + 5) / 6 | 0;
              }, I.prototype.encode = function(b) {
                for (var w = "", E = 0; E < b.length - 2; E += 3) {
                  var B = b[E] << 16 | b[E + 1] << 8 | b[E + 2];
                  w += this._encodeByte(B >>> 3 * 6 & 63), w += this._encodeByte(B >>> 2 * 6 & 63), w += this._encodeByte(B >>> 1 * 6 & 63), w += this._encodeByte(B >>> 0 * 6 & 63);
                }
                var X = b.length - E;
                if (X > 0) {
                  var B = b[E] << 16 | (X === 2 ? b[E + 1] << 8 : 0);
                  w += this._encodeByte(B >>> 3 * 6 & 63), w += this._encodeByte(B >>> 2 * 6 & 63), X === 2 ? w += this._encodeByte(B >>> 1 * 6 & 63) : w += this._paddingCharacter || "", w += this._paddingCharacter || "";
                }
                return w;
              }, I.prototype.maxDecodedLength = function(b) {
                return this._paddingCharacter ? b / 4 * 3 | 0 : (b * 6 + 7) / 8 | 0;
              }, I.prototype.decodedLength = function(b) {
                return this.maxDecodedLength(b.length - this._getPaddingLength(b));
              }, I.prototype.decode = function(b) {
                if (b.length === 0)
                  return new Uint8Array(0);
                for (var w = this._getPaddingLength(b), E = b.length - w, B = new Uint8Array(this.maxDecodedLength(E)), X = 0, K = 0, se = 0, ae = 0, ne = 0, ce = 0, le = 0; K < E - 4; K += 4)
                  ae = this._decodeChar(b.charCodeAt(K + 0)), ne = this._decodeChar(b.charCodeAt(K + 1)), ce = this._decodeChar(b.charCodeAt(K + 2)), le = this._decodeChar(b.charCodeAt(K + 3)), B[X++] = ae << 2 | ne >>> 4, B[X++] = ne << 4 | ce >>> 2, B[X++] = ce << 6 | le, se |= ae & u, se |= ne & u, se |= ce & u, se |= le & u;
                if (K < E - 1 && (ae = this._decodeChar(b.charCodeAt(K)), ne = this._decodeChar(b.charCodeAt(K + 1)), B[X++] = ae << 2 | ne >>> 4, se |= ae & u, se |= ne & u), K < E - 2 && (ce = this._decodeChar(b.charCodeAt(K + 2)), B[X++] = ne << 4 | ce >>> 2, se |= ce & u), K < E - 3 && (le = this._decodeChar(b.charCodeAt(K + 3)), B[X++] = ce << 6 | le, se |= le & u), se !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return B;
              }, I.prototype._encodeByte = function(b) {
                var w = b;
                return w += 65, w += 25 - b >>> 8 & 6, w += 51 - b >>> 8 & -75, w += 61 - b >>> 8 & -15, w += 62 - b >>> 8 & 3, String.fromCharCode(w);
              }, I.prototype._decodeChar = function(b) {
                var w = u;
                return w += (42 - b & b - 44) >>> 8 & -u + b - 43 + 62, w += (46 - b & b - 48) >>> 8 & -u + b - 47 + 63, w += (47 - b & b - 58) >>> 8 & -u + b - 48 + 52, w += (64 - b & b - 91) >>> 8 & -u + b - 65 + 0, w += (96 - b & b - 123) >>> 8 & -u + b - 97 + 26, w;
              }, I.prototype._getPaddingLength = function(b) {
                var w = 0;
                if (this._paddingCharacter) {
                  for (var E = b.length - 1; E >= 0 && b[E] === this._paddingCharacter; E--)
                    w++;
                  if (b.length < 4 || w > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return w;
              }, I;
            }()
          );
          a.Coder = g;
          var _ = new g();
          function M(I) {
            return _.encode(I);
          }
          a.encode = M;
          function P(I) {
            return _.decode(I);
          }
          a.decode = P;
          var T = (
            /** @class */
            function(I) {
              l(b, I);
              function b() {
                return I !== null && I.apply(this, arguments) || this;
              }
              return b.prototype._encodeByte = function(w) {
                var E = w;
                return E += 65, E += 25 - w >>> 8 & 6, E += 51 - w >>> 8 & -75, E += 61 - w >>> 8 & -13, E += 62 - w >>> 8 & 49, String.fromCharCode(E);
              }, b.prototype._decodeChar = function(w) {
                var E = u;
                return E += (44 - w & w - 46) >>> 8 & -u + w - 45 + 62, E += (94 - w & w - 96) >>> 8 & -u + w - 95 + 63, E += (47 - w & w - 58) >>> 8 & -u + w - 48 + 52, E += (64 - w & w - 91) >>> 8 & -u + w - 65 + 0, E += (96 - w & w - 123) >>> 8 & -u + w - 97 + 26, E;
              }, b;
            }(g)
          );
          a.URLSafeCoder = T;
          var L = new T();
          function R(I) {
            return L.encode(I);
          }
          a.encodeURLSafe = R;
          function D(I) {
            return L.decode(I);
          }
          a.decodeURLSafe = D, a.encodedLength = function(I) {
            return _.encodedLength(I);
          }, a.maxDecodedLength = function(I) {
            return _.maxDecodedLength(I);
          }, a.decodedLength = function(I) {
            return _.decodedLength(I);
          };
        },
        /* 1 */
        /***/
        function(r, a, i) {
          Object.defineProperty(a, "__esModule", { value: !0 });
          var l = "utf8: invalid string", u = "utf8: invalid source encoding";
          function g(P) {
            for (var T = new Uint8Array(_(P)), L = 0, R = 0; R < P.length; R++) {
              var D = P.charCodeAt(R);
              D < 128 ? T[L++] = D : D < 2048 ? (T[L++] = 192 | D >> 6, T[L++] = 128 | D & 63) : D < 55296 ? (T[L++] = 224 | D >> 12, T[L++] = 128 | D >> 6 & 63, T[L++] = 128 | D & 63) : (R++, D = (D & 1023) << 10, D |= P.charCodeAt(R) & 1023, D += 65536, T[L++] = 240 | D >> 18, T[L++] = 128 | D >> 12 & 63, T[L++] = 128 | D >> 6 & 63, T[L++] = 128 | D & 63);
            }
            return T;
          }
          a.encode = g;
          function _(P) {
            for (var T = 0, L = 0; L < P.length; L++) {
              var R = P.charCodeAt(L);
              if (R < 128)
                T += 1;
              else if (R < 2048)
                T += 2;
              else if (R < 55296)
                T += 3;
              else if (R <= 57343) {
                if (L >= P.length - 1)
                  throw new Error(l);
                L++, T += 4;
              } else
                throw new Error(l);
            }
            return T;
          }
          a.encodedLength = _;
          function M(P) {
            for (var T = [], L = 0; L < P.length; L++) {
              var R = P[L];
              if (R & 128) {
                var D = void 0;
                if (R < 224) {
                  if (L >= P.length)
                    throw new Error(u);
                  var I = P[++L];
                  if ((I & 192) !== 128)
                    throw new Error(u);
                  R = (R & 31) << 6 | I & 63, D = 128;
                } else if (R < 240) {
                  if (L >= P.length - 1)
                    throw new Error(u);
                  var I = P[++L], b = P[++L];
                  if ((I & 192) !== 128 || (b & 192) !== 128)
                    throw new Error(u);
                  R = (R & 15) << 12 | (I & 63) << 6 | b & 63, D = 2048;
                } else if (R < 248) {
                  if (L >= P.length - 2)
                    throw new Error(u);
                  var I = P[++L], b = P[++L], w = P[++L];
                  if ((I & 192) !== 128 || (b & 192) !== 128 || (w & 192) !== 128)
                    throw new Error(u);
                  R = (R & 15) << 18 | (I & 63) << 12 | (b & 63) << 6 | w & 63, D = 65536;
                } else
                  throw new Error(u);
                if (R < D || R >= 55296 && R <= 57343)
                  throw new Error(u);
                if (R >= 65536) {
                  if (R > 1114111)
                    throw new Error(u);
                  R -= 65536, T.push(String.fromCharCode(55296 | R >> 10)), R = 56320 | R & 1023;
                }
              }
              T.push(String.fromCharCode(R));
            }
            return T.join("");
          }
          a.decode = M;
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
              var t = this.lastId, s = this.prefix + t, o = this.name + "[" + t + "]", f = !1, v = function() {
                f || (e.apply(null, arguments), f = !0);
              };
              return this[t] = v, { number: t, id: s, name: o, callback: v };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var u = new l("_pusher_script_", "Pusher.ScriptReceivers"), g = {
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
          }, _ = g;
          class M {
            constructor(e) {
              this.options = e, this.receivers = e.receivers || u, this.loading = {};
            }
            load(e, t, s) {
              var o = this;
              if (o.loading[e] && o.loading[e].length > 0)
                o.loading[e].push(s);
              else {
                o.loading[e] = [s];
                var f = N.createScriptRequest(o.getPath(e, t)), v = o.receivers.create(function(S) {
                  if (o.receivers.remove(v), o.loading[e]) {
                    var O = o.loading[e];
                    delete o.loading[e];
                    for (var j = function(W) {
                      W || f.cleanup();
                    }, U = 0; U < O.length; U++)
                      O[U](S, j);
                  }
                });
                f.send(v);
              }
            }
            getRoot(e) {
              var t, s = N.getDocument().location.protocol;
              return e && e.useTLS || s === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var P = new l("_pusher_dependencies", "Pusher.DependenciesReceivers"), T = new M({
            cdn_http: _.cdn_http,
            cdn_https: _.cdn_https,
            version: _.VERSION,
            suffix: _.dependency_suffix,
            receivers: P
          });
          const L = {
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
            const e = "See:", t = L.urls[n];
            if (!t)
              return "";
            let s;
            return t.fullUrl ? s = t.fullUrl : t.path && (s = L.baseUrl + t.path), s ? `${e} ${s}` : "";
          } }, I;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(I || (I = {}));
          class b extends Error {
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
          class B extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class X extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class K extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class se extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class ae extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class ne extends Error {
            constructor(e, t) {
              super(t), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var le = function(n, e, t, s, o) {
            const f = N.createXHR();
            f.open("POST", t.endpoint, !0), f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var v in t.headers)
              f.setRequestHeader(v, t.headers[v]);
            if (t.headersProvider != null) {
              let S = t.headersProvider();
              for (var v in S)
                f.setRequestHeader(v, S[v]);
            }
            return f.onreadystatechange = function() {
              if (f.readyState === 4)
                if (f.status === 200) {
                  let S, O = !1;
                  try {
                    S = JSON.parse(f.responseText), O = !0;
                  } catch {
                    o(new ne(200, `JSON returned from ${s.toString()} endpoint was invalid, yet status code was 200. Data was: ${f.responseText}`), null);
                  }
                  O && o(null, S);
                } else {
                  let S = "";
                  switch (s) {
                    case I.UserAuthentication:
                      S = D.buildLogSuffix("authenticationEndpoint");
                      break;
                    case I.ChannelAuthorization:
                      S = `Clients must be authorized to join private or presence channels. ${D.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  o(new ne(f.status, `Unable to retrieve auth string from ${s.toString()} endpoint - received status: ${f.status} from ${t.endpoint}. ${S}`), null);
                }
            }, f.send(e), f;
          };
          function Pe(n) {
            return Me(xe(n));
          }
          var ye = String.fromCharCode, ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ee = function(n) {
            var e = n.charCodeAt(0);
            return e < 128 ? n : e < 2048 ? ye(192 | e >>> 6) + ye(128 | e & 63) : ye(224 | e >>> 12 & 15) + ye(128 | e >>> 6 & 63) + ye(128 | e & 63);
          }, xe = function(n) {
            return n.replace(/[^\x00-\x7F]/g, Ee);
          }, Oe = function(n) {
            var e = [0, 2, 1][n.length % 3], t = n.charCodeAt(0) << 16 | (n.length > 1 ? n.charCodeAt(1) : 0) << 8 | (n.length > 2 ? n.charCodeAt(2) : 0), s = [
              ve.charAt(t >>> 18),
              ve.charAt(t >>> 12 & 63),
              e >= 2 ? "=" : ve.charAt(t >>> 6 & 63),
              e >= 1 ? "=" : ve.charAt(t & 63)
            ];
            return s.join("");
          }, Me = window.btoa || function(n) {
            return n.replace(/[\s\S]{1,3}/g, Oe);
          };
          class Ne {
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
          var Te = Ne;
          function De(n) {
            window.clearTimeout(n);
          }
          function je(n) {
            window.clearInterval(n);
          }
          class h extends Te {
            constructor(e, t) {
              super(setTimeout, De, e, function(s) {
                return t(), null;
              });
            }
          }
          class m extends Te {
            constructor(e, t) {
              super(setInterval, je, e, function(s) {
                return t(), s;
              });
            }
          }
          var p = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new h(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(s) {
                return s[n].apply(s, t.concat(arguments));
              };
            }
          }, d = p;
          function k(n, ...e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t];
              for (var o in s)
                s[o] && s[o].constructor && s[o].constructor === Object ? n[o] = k(n[o] || {}, s[o]) : n[o] = s[o];
            }
            return n;
          }
          function F() {
            for (var n = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(te(arguments[e]));
            return n.join(" : ");
          }
          function C(n, e) {
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
          function x(n, e) {
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && e(n[t], t, n);
          }
          function z(n) {
            var e = [];
            return x(n, function(t, s) {
              e.push(s);
            }), e;
          }
          function G(n) {
            var e = [];
            return x(n, function(t) {
              e.push(t);
            }), e;
          }
          function V(n, e, t) {
            for (var s = 0; s < n.length; s++)
              e.call(t || window, n[s], s, n);
          }
          function re(n, e) {
            for (var t = [], s = 0; s < n.length; s++)
              t.push(e(n[s], s, n, t));
            return t;
          }
          function J(n, e) {
            var t = {};
            return x(n, function(s, o) {
              t[o] = e(s);
            }), t;
          }
          function ee(n, e) {
            e = e || function(o) {
              return !!o;
            };
            for (var t = [], s = 0; s < n.length; s++)
              e(n[s], s, n, t) && t.push(n[s]);
            return t;
          }
          function fe(n, e) {
            var t = {};
            return x(n, function(s, o) {
              (e && e(s, o, n, t) || s) && (t[o] = s);
            }), t;
          }
          function be(n) {
            var e = [];
            return x(n, function(t, s) {
              e.push([s, t]);
            }), e;
          }
          function q(n, e) {
            for (var t = 0; t < n.length; t++)
              if (e(n[t], t, n))
                return !0;
            return !1;
          }
          function pe(n, e) {
            for (var t = 0; t < n.length; t++)
              if (!e(n[t], t, n))
                return !1;
            return !0;
          }
          function ue(n) {
            return J(n, function(e) {
              return typeof e == "object" && (e = te(e)), encodeURIComponent(Pe(e.toString()));
            });
          }
          function he(n) {
            var e = fe(n, function(s) {
              return s !== void 0;
            }), t = re(be(ue(e)), d.method("join", "=")).join("&");
            return t;
          }
          function de(n) {
            var e = [], t = [];
            return function s(o, f) {
              var v, S, O;
              switch (typeof o) {
                case "object":
                  if (!o)
                    return null;
                  for (v = 0; v < e.length; v += 1)
                    if (e[v] === o)
                      return { $ref: t[v] };
                  if (e.push(o), t.push(f), Object.prototype.toString.apply(o) === "[object Array]")
                    for (O = [], v = 0; v < o.length; v += 1)
                      O[v] = s(o[v], f + "[" + v + "]");
                  else {
                    O = {};
                    for (S in o)
                      Object.prototype.hasOwnProperty.call(o, S) && (O[S] = s(o[S], f + "[" + JSON.stringify(S) + "]"));
                  }
                  return O;
                case "number":
                case "string":
                case "boolean":
                  return o;
              }
            }(n, "$");
          }
          function te(n) {
            try {
              return JSON.stringify(n);
            } catch {
              return JSON.stringify(de(n));
            }
          }
          class ke {
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
              var s = F.apply(this, arguments);
              et.log ? et.log(s) : et.logToConsole && e.bind(this)(s);
            }
          }
          var H = new ke(), Dt = function(n, e, t, s, o) {
            (t.headers !== void 0 || t.headersProvider != null) && H.warn(`To send headers with the ${s.toString()} request, you must use AJAX, rather than JSONP.`);
            var f = n.nextAuthCallbackID.toString();
            n.nextAuthCallbackID++;
            var v = n.getDocument(), S = v.createElement("script");
            n.auth_callbacks[f] = function(U) {
              o(null, U);
            };
            var O = "Pusher.auth_callbacks['" + f + "']";
            S.src = t.endpoint + "?callback=" + encodeURIComponent(O) + "&" + e;
            var j = v.getElementsByTagName("head")[0] || v.documentElement;
            j.insertBefore(S, j.firstChild);
          }, jt = Dt;
          class Ft {
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
          class Ut {
            constructor(e, t) {
              this.url = e, this.data = t;
            }
            send(e) {
              if (!this.request) {
                var t = he(this.data), s = this.url + "/" + e.number + "?" + t;
                this.request = N.createScriptRequest(s), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Ht = function(n, e) {
            return function(t, s) {
              var o = "http" + (e ? "s" : "") + "://", f = o + (n.host || n.options.host) + n.options.path, v = N.createJSONPRequest(f, t), S = N.ScriptReceivers.create(function(O, j) {
                u.remove(S), v.cleanup(), j && j.host && (n.host = j.host), s && s(O, j);
              });
              v.send(S);
            };
          }, Bt = {
            name: "jsonp",
            getAgent: Ht
          }, qt = Bt;
          function $e(n, e, t) {
            var s = n + (e.useTLS ? "s" : ""), o = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return s + "://" + o + t;
          }
          function Ge(n, e) {
            var t = "/app/" + n, s = "?protocol=" + _.PROTOCOL + "&client=js&version=" + _.VERSION + (e ? "&" + e : "");
            return t + s;
          }
          var zt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "") + Ge(n, "flash=false");
              return $e("ws", e, t);
            }
          }, $t = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "/pusher") + Ge(n);
              return $e("http", e, t);
            }
          }, Gt = {
            getInitial: function(n, e) {
              return $e("http", e, e.httpPath || "/pusher");
            },
            getPath: function(n, e) {
              return Ge(n);
            }
          };
          class Vt {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Ve(e)];
            }
            add(e, t, s) {
              var o = Ve(e);
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
              var o = e ? [Ve(e)] : z(this._callbacks);
              t || s ? this.removeCallback(o, t, s) : this.removeAllCallbacks(o);
            }
            removeCallback(e, t, s) {
              V(e, function(o) {
                this._callbacks[o] = ee(this._callbacks[o] || [], function(f) {
                  return t && t !== f.fn || s && s !== f.context;
                }), this._callbacks[o].length === 0 && delete this._callbacks[o];
              }, this);
            }
            removeAllCallbacks(e) {
              V(e, function(t) {
                delete this._callbacks[t];
              }, this);
            }
          }
          function Ve(n) {
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
              return e ? (this.global_callbacks = ee(this.global_callbacks || [], (t) => t !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, t, s) {
              for (var o = 0; o < this.global_callbacks.length; o++)
                this.global_callbacks[o](e, t);
              var f = this.callbacks.get(e), v = [];
              if (s ? v.push(t, s) : t && v.push(t), f && f.length > 0)
                for (var o = 0; o < f.length; o++)
                  f[o].fn.apply(f[o].context || window, v);
              else this.failThrough && this.failThrough(e, t);
              return this;
            }
          }
          class Wt extends ge {
            constructor(e, t, s, o, f) {
              super(), this.initialize = N.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = s, this.key = o, this.options = f, this.state = "new", this.timeline = f.timeline, this.activityTimeout = f.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return d.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), H.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (d.defer(() => {
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
              return k({ cid: this.id }, e);
            }
          }
          class Ce {
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
          var Xt = new Ce({
            urls: zt,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!N.getWebSocketAPI();
            },
            isSupported: function() {
              return !!N.getWebSocketAPI();
            },
            getSocket: function(n) {
              return N.createWebSocket(n);
            }
          }), ct = {
            urls: $t,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, lt = k({
            getSocket: function(n) {
              return N.HTTPFactory.createStreamingSocket(n);
            }
          }, ct), ut = k({
            getSocket: function(n) {
              return N.HTTPFactory.createPollingSocket(n);
            }
          }, ct), ht = {
            isSupported: function() {
              return N.isXHRSupported();
            }
          }, Kt = new Ce(k({}, lt, ht)), Jt = new Ce(k({}, ut, ht)), Qt = {
            ws: Xt,
            xhr_streaming: Kt,
            xhr_polling: Jt
          }, Fe = Qt, Yt = new Ce({
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
          }), dt = {
            isSupported: function(n) {
              var e = N.isXDRSupported(n.useTLS);
              return e;
            }
          }, Zt = new Ce(k({}, lt, dt)), en = new Ce(k({}, ut, dt));
          Fe.xdr_streaming = Zt, Fe.xdr_polling = en, Fe.sockjs = Yt;
          var tn = Fe;
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
              o = k({}, o, {
                activityTimeout: this.pingDelay
              });
              var f = this.transport.createConnection(e, t, s, o), v = null, S = function() {
                f.unbind("open", S), f.bind("closed", O), v = d.now();
              }, O = (j) => {
                if (f.unbind("closed", O), j.code === 1002 || j.code === 1003)
                  this.manager.reportDeath();
                else if (!j.wasClean && v) {
                  var U = d.now() - v;
                  U < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(U / 2, this.minPingDelay));
                }
              };
              return f.bind("open", S), f;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const ft = {
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
              var e = ft.decodeMessage(n);
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
          var we = ft;
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
              return s && (o.channel = s), H.debug("Event sent", o), this.send(we.encodeMessage(o));
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
                    o = we.decodeMessage(s);
                  } catch (f) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: f,
                      data: s.data
                    });
                  }
                  if (o !== void 0) {
                    switch (H.debug("Event recd", o), o.event) {
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
                x(e, (s, o) => {
                  this.transport.unbind(o, s);
                });
              };
              x(e, (s, o) => {
                this.transport.bind(o, s);
              });
            }
            handleCloseEvent(e) {
              var t = we.getCloseAction(e), s = we.getCloseError(e);
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
                  t = we.processHandshake(e);
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
                var t = we.getCloseAction(e) || "backoff", s = we.getCloseError(e);
                this.finish(t, { error: s });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, t) {
              this.callback(k({ transport: this.transport, action: e }, t));
            }
          }
          class cn {
            constructor(e, t) {
              this.timeline = e, this.options = t || {};
            }
            send(e, t) {
              this.timeline.isEmpty() || this.timeline.send(N.TimelineTransport.getAgent(this, e), t);
            }
          }
          class We extends ge {
            constructor(e, t) {
              super(function(s, o) {
                H.debug("No callbacks on " + e + " for " + s);
              }), this.name = e, this.pusher = t, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, t) {
              return t(null, { auth: "" });
            }
            trigger(e, t) {
              if (e.indexOf("client-") !== 0)
                throw new b("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var s = D.buildLogSuffix("triggeringClientEvents");
                H.warn(`Client event triggered before channel 'subscription_succeeded' event . ${s}`);
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
                e ? (this.subscriptionPending = !1, H.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
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
          class Xe extends We {
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
              x(this.members, (t, s) => {
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
            function o(f) {
              return f instanceof t ? f : new t(function(v) {
                v(f);
              });
            }
            return new (t || (t = Promise))(function(f, v) {
              function S(U) {
                try {
                  j(s.next(U));
                } catch (W) {
                  v(W);
                }
              }
              function O(U) {
                try {
                  j(s.throw(U));
                } catch (W) {
                  v(W);
                }
              }
              function j(U) {
                U.done ? f(U.value) : o(U.value).then(S, O);
              }
              j((s = s.apply(n, e || [])).next());
            });
          };
          class hn extends Xe {
            constructor(e, t) {
              super(e, t), this.members = new ln();
            }
            authorize(e, t) {
              super.authorize(e, (s, o) => un(this, void 0, void 0, function* () {
                if (!s)
                  if (o = o, o.channel_data != null) {
                    var f = JSON.parse(o.channel_data);
                    this.members.setMyID(f.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let v = D.buildLogSuffix("authorizationEndpoint");
                    H.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${v}, or the user should be signed in.`), t("Invalid auth response");
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
                  var f = this.members.removeMember(s);
                  f && this.emit("pusher:member_removed", f);
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
          var dn = i(1), Ke = i(0);
          class fn extends Xe {
            constructor(e, t, s) {
              super(e, t), this.key = null, this.nacl = s;
            }
            authorize(e, t) {
              super.authorize(e, (s, o) => {
                if (s) {
                  t(s, o);
                  return;
                }
                let f = o.shared_secret;
                if (!f) {
                  t(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(Ke.decode)(f), delete o.shared_secret, t(null, o);
              });
            }
            trigger(e, t) {
              throw new K("Client events are not currently supported for encrypted channels");
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
                H.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!t.ciphertext || !t.nonce) {
                H.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + t);
                return;
              }
              let s = Object(Ke.decode)(t.ciphertext);
              if (s.length < this.nacl.secretbox.overheadLength) {
                H.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${s.length}`);
                return;
              }
              let o = Object(Ke.decode)(t.nonce);
              if (o.length < this.nacl.secretbox.nonceLength) {
                H.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${o.length}`);
                return;
              }
              let f = this.nacl.secretbox.open(s, o, this.key);
              if (f === null) {
                H.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (v, S) => {
                  if (v) {
                    H.error(`Failed to make a request to the authEndpoint: ${S}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (f = this.nacl.secretbox.open(s, o, this.key), f === null) {
                    H.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(e, this.getDataToEmit(f));
                });
                return;
              }
              this.emit(e, this.getDataToEmit(f));
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
              var s = N.getNetwork();
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new h(e || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new h(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new h(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new h(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(e) {
              return k({}, e, {
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
              return k({}, e, {
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
                o === "connected" && (o += " with new socket ID " + t.socket_id), H.debug("State changed", s + " -> " + o), this.timeline.info({ state: e, params: t }), this.emit("state_change", { previous: s, current: e }), this.emit(e, t);
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
              return G(this.channels);
            }
            find(e) {
              return this.channels[e];
            }
            remove(e) {
              var t = this.channels[e];
              return delete this.channels[e], t;
            }
            disconnect() {
              x(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function mn(n, e) {
            if (n.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return me.createEncryptedChannel(n, e, e.config.nacl);
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", s = D.buildLogSuffix("encryptedChannelSupport");
              throw new K(`${t}. ${s}`);
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
              return new We(n, e);
            },
            createPrivateChannel(n, e) {
              return new Xe(n, e);
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
          class pt {
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
              return q(this.strategies, d.method("isSupported"));
            }
            connect(e, t) {
              var s = this.strategies, o = 0, f = this.timeout, v = null, S = (O, j) => {
                j ? t(null, j) : (o = o + 1, this.loop && (o = o % s.length), o < s.length ? (f && (f = f * 2, this.timeoutLimit && (f = Math.min(f, this.timeoutLimit))), v = this.tryStrategy(s[o], e, { timeout: f, failFast: this.failFast }, S)) : t(!0));
              };
              return v = this.tryStrategy(s[o], e, { timeout: f, failFast: this.failFast }, S), {
                abort: function() {
                  v.abort();
                },
                forceMinPriority: function(O) {
                  e = O, v && v.forceMinPriority(O);
                }
              };
            }
            tryStrategy(e, t, s, o) {
              var f = null, v = null;
              return s.timeout > 0 && (f = new h(s.timeout, function() {
                v.abort(), o(!0);
              })), v = e.connect(t, function(S, O) {
                S && f && f.isRunning() && !s.failFast || (f && f.ensureAborted(), o(S, O));
              }), {
                abort: function() {
                  f && f.ensureAborted(), v.abort();
                },
                forceMinPriority: function(S) {
                  v.forceMinPriority(S);
                }
              };
            }
          }
          class Je {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return q(this.strategies, d.method("isSupported"));
            }
            connect(e, t) {
              return vn(this.strategies, e, function(s, o) {
                return function(f, v) {
                  if (o[s].error = f, f) {
                    bn(o) && t(!0);
                    return;
                  }
                  V(o, function(S) {
                    S.forceMinPriority(v.transport.priority);
                  }), t(null, v);
                };
              });
            }
          }
          function vn(n, e, t) {
            var s = re(n, function(o, f, v, S) {
              return o.connect(e, t(f, S));
            });
            return {
              abort: function() {
                V(s, kn);
              },
              forceMinPriority: function(o) {
                V(s, function(f) {
                  f.forceMinPriority(o);
                });
              }
            };
          }
          function bn(n) {
            return pe(n, function(e) {
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
              var s = this.usingTLS, o = _n(s), f = o && o.cacheSkipCount ? o.cacheSkipCount : 0, v = [this.strategy];
              if (o && o.timestamp + this.ttl >= d.now()) {
                var S = this.transports[o.transport];
                S && (["ws", "wss"].includes(o.transport) || f > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: o.transport,
                  latency: o.latency
                }), v.push(new _e([S], {
                  timeout: o.latency * 2 + 1e3,
                  failFast: !0
                }))) : f++);
              }
              var O = d.now(), j = v.pop().connect(e, function U(W, Be) {
                W ? (gt(s), v.length > 0 ? (O = d.now(), j = v.pop().connect(e, U)) : t(W)) : (Sn(s, Be.transport.name, d.now() - O, f), t(null, Be));
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
          function Qe(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function _n(n) {
            var e = N.getLocalStorage();
            if (e)
              try {
                var t = e[Qe(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                gt(n);
              }
            return null;
          }
          function Sn(n, e, t, s) {
            var o = N.getLocalStorage();
            if (o)
              try {
                o[Qe(n)] = te({
                  timestamp: d.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: s
                });
              } catch {
              }
          }
          function gt(n) {
            var e = N.getLocalStorage();
            if (e)
              try {
                delete e[Qe(n)];
              } catch {
              }
          }
          class Ue {
            constructor(e, { delay: t }) {
              this.strategy = e, this.options = { delay: t };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var s = this.strategy, o, f = new h(this.options.delay, function() {
                o = s.connect(e, t);
              });
              return {
                abort: function() {
                  f.ensureAborted(), o && o.abort();
                },
                forceMinPriority: function(v) {
                  e = v, o && o.forceMinPriority(v);
                }
              };
            }
          }
          class Ie {
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
              var s = this.strategy.connect(e, function(o, f) {
                f && s.abort(), t(o, f);
              });
              return s;
            }
          }
          function Re(n) {
            return function() {
              return n.isSupported();
            };
          }
          var Tn = function(n, e, t) {
            var s = {};
            function o(It, Cr, Tr, Ir, Rr) {
              var Rt = t(n, It, Cr, Tr, Ir, Rr);
              return s[It] = Rt, Rt;
            }
            var f = Object.assign({}, e, {
              hostNonTLS: n.wsHost + ":" + n.wsPort,
              hostTLS: n.wsHost + ":" + n.wssPort,
              httpPath: n.wsPath
            }), v = Object.assign({}, f, {
              useTLS: !0
            }), S = Object.assign({}, e, {
              hostNonTLS: n.httpHost + ":" + n.httpPort,
              hostTLS: n.httpHost + ":" + n.httpsPort,
              httpPath: n.httpPath
            }), O = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, j = new pt({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), U = new pt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), W = o("ws", "ws", 3, f, j), Be = o("wss", "ws", 3, v, j), br = o("sockjs", "sockjs", 1, S), kt = o("xhr_streaming", "xhr_streaming", 1, S, U), kr = o("xdr_streaming", "xdr_streaming", 1, S, U), wt = o("xhr_polling", "xhr_polling", 1, S), wr = o("xdr_polling", "xdr_polling", 1, S), _t = new _e([W], O), _r = new _e([Be], O), Sr = new _e([br], O), St = new _e([
              new Ie(Re(kt), kt, kr)
            ], O), Ct = new _e([
              new Ie(Re(wt), wt, wr)
            ], O), Tt = new _e([
              new Ie(Re(St), new Je([
                St,
                new Ue(Ct, { delay: 4e3 })
              ]), Ct)
            ], O), tt = new Ie(Re(Tt), Tt, Sr), nt;
            return e.useTLS ? nt = new Je([
              _t,
              new Ue(tt, { delay: 2e3 })
            ]) : nt = new Je([
              _t,
              new Ue(_r, { delay: 2e3 }),
              new Ue(tt, { delay: 5e3 })
            ]), new wn(new Cn(new Ie(Re(W), nt, tt)), s, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, In = Tn, Rn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), T.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
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
          class En extends ge {
            constructor(e, t, s) {
              super(), this.hooks = e, this.method = t, this.url = s;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, N.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (N.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
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
          var Ye;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(Ye || (Ye = {}));
          var Se = Ye, xn = 1;
          class On {
            constructor(e, t) {
              this.hooks = e, this.session = yt(1e3) + "/" + jn(8), this.location = Mn(t), this.readyState = Se.CONNECTING, this.openStream();
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
                  return N.createSocketRequest("POST", mt(Nn(this.location, this.session))).start(e), !0;
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
              this.closeStream(), this.readyState = Se.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: t,
                wasClean: s
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === Se.OPEN && this.onActivity();
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
              this.readyState === Se.CONNECTING ? (e && e.hostname && (this.location.base = Dn(this.location.base, e.hostname)), this.readyState = Se.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
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
              this.stream = N.createSocketRequest("POST", mt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                d.defer(() => {
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
          function mt(n) {
            var e = n.indexOf("?") === -1 ? "?" : "&";
            return n + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + xn++;
          }
          function Dn(n, e) {
            var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);
            return t[1] + e + t[3];
          }
          function yt(n) {
            return N.randomInt(n);
          }
          function jn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(yt(32).toString(32));
            return e.join("");
          }
          var Fn = On, Un = {
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
              var e = N.getXHRAPI(), t = new e();
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
              return new Fn(n, e);
            },
            createXHR(n, e) {
              return this.createRequest($n, n, e);
            },
            createRequest(n, e, t) {
              return new En(n, e, t);
            }
          }, vt = Gn;
          vt.createXDR = function(n, e) {
            return this.createRequest(Ln, n, e);
          };
          var Vn = vt, Wn = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: u,
            DependenciesReceivers: P,
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
              window.JSON ? e() : T.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: le, jsonp: jt };
            },
            onDocumentBody(n) {
              document.body ? n() : setTimeout(() => {
                this.onDocumentBody(n);
              }, 0);
            },
            createJSONPRequest(n, e) {
              return new Ut(n, e);
            },
            createScriptRequest(n) {
              return new Ft(n);
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
          }, N = Wn, Ze;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(Ze || (Ze = {}));
          var He = Ze;
          class Xn {
            constructor(e, t, s) {
              this.key = e, this.session = t, this.events = [], this.options = s || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(k({}, t, { timestamp: d.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(He.ERROR, e);
            }
            info(e) {
              this.log(He.INFO, e);
            }
            debug(e) {
              this.log(He.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, t) {
              var s = k({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], e(s, (o, f) => {
                o || this.sent++, t && t(o, f);
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
                  return bt(new B(), t);
              } else return bt(new ae(), t);
              var s = !1, o = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), f = null, v = function() {
                o.unbind("initialized", v), o.connect();
              }, S = function() {
                f = me.createHandshake(o, function(W) {
                  s = !0, U(), t(null, W);
                });
              }, O = function(W) {
                U(), t(W);
              }, j = function() {
                U();
                var W;
                W = te(o), t(new X(W));
              }, U = function() {
                o.unbind("initialized", v), o.unbind("open", S), o.unbind("error", O), o.unbind("closed", j);
              };
              return o.bind("initialized", v), o.bind("open", S), o.bind("error", O), o.bind("closed", j), o.initialize(), {
                abort: () => {
                  s || (U(), f ? f.close() : o.close());
                },
                forceMinPriority: (W) => {
                  s || this.priority < W && (f ? f.close() : o.close());
                }
              };
            }
          }
          function bt(n, e) {
            return d.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Jn } = N;
          var Qn = function(n, e, t, s, o, f) {
            var v = Jn[t];
            if (!v)
              throw new se(t);
            var S = (!n.enabledTransports || C(n.enabledTransports, e) !== -1) && (!n.disabledTransports || C(n.disabledTransports, e) === -1), O;
            return S ? (o = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, o), O = new Kn(e, s, f ? f.getAssistant(v) : v, o)) : O = Yn, O;
          }, Yn = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = d.defer(function() {
                e(new ae());
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
            "disableStats" in n && H.warn("The disableStats option is deprecated in favor of enableStats");
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
            if (typeof N.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const s = er(e, n);
              N.getAuthorizers()[n.transport](N, s, n, I.UserAuthentication, t);
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
            if (typeof N.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const s = nr(e, n);
              N.getAuthorizers()[n.transport](N, s, n, I.ChannelAuthorization, t);
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
            return (o, f) => {
              const v = n.channel(o.channelName);
              t(v, s).authorize(o.socketId, f);
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
            return N.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
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
                H.debug(`No callbacks on watchlist events for ${t}`);
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
                H.debug("No callbacks on user for " + t);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (t, s) => {
                if (t) {
                  H.warn(`Error during signin: ${t}`), this._cleanup();
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
                H.error(`Failed parsing user data after signin: ${e.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                H.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const e = (t) => {
                t.subscriptionPending && t.subscriptionCancelled ? t.reinstateSubscription() : !t.subscriptionPending && this.pusher.connection.state === "connected" && t.subscribe();
              };
              this.serverToUserChannel = new We(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((t, s) => {
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
          class Z {
            static ready() {
              Z.isReady = !0;
              for (var e = 0, t = Z.instances.length; e < t; e++)
                Z.instances[e].connect();
            }
            static getClientFeatures() {
              return z(fe({ ws: N.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              vr(e), Zn(t), this.key = e, this.config = ir(t, this), this.channels = me.createChannels(), this.global_emitter = new ge(), this.sessionID = N.randomInt(1e9), this.timeline = new Xn(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: Z.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: He.INFO,
                version: _.VERSION
              }), this.config.enableStats && (this.timelineSender = me.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + N.TimelineTransport.name
              }));
              var s = (o) => N.getDefaultStrategy(this.config, o, Qn);
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
                var f = o.event, v = f.indexOf("pusher_internal:") === 0;
                if (o.channel) {
                  var S = this.channel(o.channel);
                  S && S.handleEvent(o);
                }
                v || this.global_emitter.emit(o.event, o.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (o) => {
                H.warn(o);
              }), Z.instances.push(this), this.timeline.info({ instances: Z.instances.length }), this.user = new yr(this), Z.isReady && this.connect();
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
                this.timelineSenderTimer = new m(6e4, function() {
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
          Z.instances = [], Z.isReady = !1, Z.logToConsole = !1, Z.Runtime = N, Z.ScriptReceivers = N.ScriptReceivers, Z.DependenciesReceivers = N.DependenciesReceivers, Z.auth_callbacks = N.auth_callbacks;
          var et = a.default = Z;
          function vr(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          N.setup(Z);
        }
        /******/
      ])
    );
  });
})(Nt);
var Br = Nt.exports;
const qr = /* @__PURE__ */ Hr(Br);
window.Pusher = qr;
const A = "cpr-agent";
class zr extends FormApplication {
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
                    </tr>`;
    for (let a of c.users) {
      if (r += `<tr><td style="padding: 5px 0;"><strong>${a.name}</strong></td>`, a.hasKey) {
        r += '<td style="color: #00ff00;">✔ Linked</td>', r += `<td><small><code>${a.agentLink || "Pending..."}</code></small></td>`, r += `<td><select class="character-select" data-userid="${a.id}" style="width: 100%;">
                         <option value="">- None -</option>`;
        for (let i of c.characters) {
          const l = i.id === a.characterId ? "selected" : "";
          r += `<option value="${i.id}" ${l}>${i.name}</option>`;
        }
        r += "</select></td>";
      } else
        r += `<td style="color: #ff0000;">❌ Missing</td>
                         <td><small>-</small></td>
                         <td><select disabled style="width: 100%;"><option>- Key Missing -</option></select></td>`;
      r += "</tr>";
    }
    return r += `</table>
                 <button type="button" id="save-agent-assignments"><i class="fas fa-save"></i> Save Assignments</button>
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
      if (c.find(".character-select").each((l, u) => {
        var P;
        const g = u.dataset.userid, _ = u.value, M = game.users.get(g);
        if (M) {
          const T = _ === "" || _ === "null" ? null : _;
          (((P = M.character) == null ? void 0 : P.id) || null) !== T && (i.push({ _id: M.id, character: T }), a++);
        }
      }), i.length > 0) {
        await User.updateDocuments(i), ui.notifications.info(`Cyberpunk Bridge: Updated ${a} player assignments!`);
        for (let l of i) {
          const u = game.users.get(l._id), g = u == null ? void 0 : u.getFlag(A, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: g || l._id,
            // Use agent-link as primary ID for Laravel
            character: l.character,
            isGM: u.isGM
          });
        }
        window.cyberpunkBridge.syncPlayerLink();
      } else
        ui.notifications.info("Cyberpunk Bridge: No assignment changes made.");
      this.close();
    });
  }
}
class $r {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1;
  }
  async rollAndCapture(c, r) {
    return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${c}`, "color: #00ffff; font-weight: bold;"), this._isCapturingRoll = !0, new Promise(async (a, i) => {
      let l = !1;
      const u = renderTemplate, g = function(_, M) {
        return _ && typeof _ == "string" && _.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${_}`, "color: #00ff00;", M), l = !0, renderTemplate = u, a({
          success: !0,
          total: M.resultTotal,
          isCriticalSuccess: M.wasCritSuccess ? M.wasCritSuccess() : M.isCriticalSuccess || !1,
          isCriticalFailure: M.wasCritFail ? M.wasCritFail() : M.isCriticalFailure || !1,
          label: M.rollTitle,
          rawRoll: M
        })), u.apply(this, arguments);
      };
      renderTemplate = g, setTimeout(() => {
        l || (renderTemplate = u, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), a({ success: !1, error: "Timed out waiting for render" }));
      }, 5e3);
      try {
        await r();
      } catch {
        renderTemplate = u, a({ success: !1, error: "Trigger failed" });
      } finally {
        setTimeout(() => {
          this._isCapturingRoll = !1;
        }, 1e3);
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
      type: zr,
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
    const c = game.settings.get(A, "apiUrl"), r = game.settings.get(A, "apiKey"), a = game.settings.get(A, "debugMode"), i = Number(game.settings.get(A, "reverbPort") || 0) || 0, l = game.settings.get(A, "reverbUseSSL"), u = (game.settings.get(A, "reverbHost") || "").trim();
    if (!r || !c) return;
    this.echo && this.echo.disconnect();
    let g;
    try {
      g = new URL(c);
    } catch {
      return;
    }
    const _ = u || g.hostname, M = g.protocol === "https:", P = typeof l == "boolean" ? l : void 0, T = P ?? M, L = T ? 443 : 80, R = i > 0 ? i : L;
    this.echo = new Ur({
      broadcaster: "reverb",
      key: game.settings.get(A, "reverbKey") || "itdsiqtx8cpskowawl1p",
      wsHost: _,
      wsPort: R,
      wssPort: R,
      forceTLS: T,
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
      var l;
      const i = game.user.character;
      r && console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(i == null ? void 0 : i.name) || "None"}...`);
      try {
        const u = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          character: i ? { id: i.id, name: i.name } : null,
          actorName: i ? i.name : null,
          agentLink: game.user.getFlag(A, "agent-link") || game.user.id,
          isGM: game.user.isGM
        });
        u && u.agent_link ? game.user.getFlag(A, "agent-link") !== u.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${u.agent_link}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(A, "agent-link", u.agent_link), (l = ui.notifications) == null || l.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", u);
      } catch (u) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", u);
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
      !this.isConnected && !i || !r || !["character", "mook"].includes(r.type) || (console.log(`%c[Bridge] 🔄 Syncing change for ${r.name}`, "color: #ffaa00;", a), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: r.id,
        delta: a,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (r, a, i, l) => {
      if (a.system) {
        const u = {}, g = (_, M = "system.") => {
          for (let P in _) {
            const T = _[P];
            T !== null && typeof T == "object" && !Array.isArray(T) && !(T instanceof foundry.utils.Color) ? g(T, `${M}${P}.`) : u[`${M}${P}`] = T;
          }
        };
        g(a.system), c(r, u);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (r, a, i, l) => {
      const u = r.parent;
      if (u instanceof Actor) {
        const g = {}, _ = `items.${r.id}.`;
        if (a.system) {
          const M = (P, T = `${_}system.`) => {
            for (let L in P) {
              const R = P[L];
              R !== null && typeof R == "object" && !Array.isArray(R) && !(R instanceof foundry.utils.Color) ? M(R, `${T}${L}.`) : g[`${T}${L}`] = R;
            }
          };
          M(a.system);
        }
        for (let M in a)
          M !== "system" && M !== "_id" && (g[`${_}${M}`] = a[M]);
        Object.keys(g).length > 0 && c(u, g);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (r, a, i) => {
      const l = r.parent;
      if (l instanceof Actor) {
        const u = {
          [`items.+${r.id}`]: r.toObject()
        };
        c(l, u);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (r, a, i) => {
      const l = r.parent;
      if (l instanceof Actor) {
        const u = {
          [`items.${r.id}`]: null
        };
        c(l, u);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (r, a) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (r, a, i, l) => {
      (a.x || a.y || a.disposition || a.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.deleteToken = Hooks.on("deleteToken", (r, a, i) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (r, a, i) => {
      r.author.id === game.user.id && (this._isCapturingRoll || r.rolls && r.rolls.length > 0 && r.whisper.length === 0 && !r.blind && this.broadcastRoll(r));
    });
  }
  broadcastRefresh(c) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: c });
  }
  broadcastRoll(c) {
    const r = game.users.get(c.author.id), a = c.rolls[0];
    this.sendResponse({
      type: "ROLL_RESULT",
      agentLink: r ? r.getFlag(A, "agent-link") : null,
      playerName: c.alias,
      total: a.total,
      formula: a.formula,
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
    if (l && !c.channelId && (c.channelId = l), c.type === "ROLL_RESULT" && !c.playerName) {
      const u = c.actorId ? game.actors.get(c.actorId) : null;
      c.playerName = u ? u.name : game.user.name;
    }
    try {
      const u = await fetch(`${r}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${a}`,
          Accept: "application/json"
        },
        body: JSON.stringify(c)
      });
      return u.ok ? await u.json() : (console.error("Cyberpunk Bridge: Callback failed", u.statusText), null);
    } catch (u) {
      return console.error("Cyberpunk Bridge: Error sending callback", u), null;
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(c) {
    var L, R, D, I, b, w, E, B, X, K, se, ae, ne, ce, le, Pe, ye, ve, Ee, xe, Oe, Me, Ne, Te, De, je;
    const r = c.payload || c, a = r.type;
    console.log(`%c[Bridge] Incoming Call: ${a}`, "color: #00ffff; font-weight: bold;", r);
    const i = r.requestId, l = r.agent_link || r.agentLink;
    i && l && (this.requestAgentLinks.set(i, l), setTimeout(() => this.requestAgentLinks.delete(i), 3e4));
    const u = game.user.getFlag(A, "agent-link"), g = r.actorId, _ = (L = game.user.character) == null ? void 0 : L.id, M = game.settings.get(A, "debugMode");
    M && console.log(`[Bridge] handleIncomingData: requestId=${i}, agentLink=${l}, myAgentLink=${u}, actorId=${g}, myCharacterId=${_}`);
    let P = !1;
    if (game.user.isGM || u && (i === u || l === u) ? P = !0 : !u && i && g && _ === g && (console.log(`[Bridge] Discovery: Matching incoming request to character ${g}`), P = !0), !P) {
      M && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && l && u !== l && (i === l || g && _ === g) && (console.log(`%c[Bridge] Setting agent-link flag: ${l}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(A, "agent-link", l), (R = ui.notifications) == null || R.info("Agent: Account linked!"));
    let T = r.tokenId;
    if (!T && g) {
      const h = canvas.tokens.placeables.find((m) => {
        var p;
        return ((p = m.actor) == null ? void 0 : p.id) === g;
      });
      h && (T = h.id);
    }
    switch (a) {
      case "UPDATE_ACTOR": {
        const h = game.actors.get(g);
        if (!h) {
          console.warn(`⚠️ Actor ID ${g} not found in this world.`);
          return;
        }
        await h.update(r.changes), ui.notifications.info(`💾 Sync: ${h.name} updated.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: g, success: !0, requestId: i });
        break;
      }
      case "ITEM_EQUIP": {
        const h = game.actors.get(g);
        if (h) {
          const m = h.items.get(r.itemId);
          if (m) {
            const p = `items.${r.itemId}.system.equipped`;
            await m.update({ "system.equipped": r.state }), await this.sendResponse({ type: "SHEET_DELTA", actorId: g, delta: { [p]: r.state }, success: !0, requestId: i });
          }
        }
        break;
      }
      case "INSTALL_PROGRAM": {
        const h = game.actors.get(g);
        if (!h) return;
        const m = h.items.get(r.cyberdeckId), p = h.items.get(r.programId);
        if (!m || !p) return;
        const d = m.system.installedItems.usedSlots || 0, k = m.system.installedItems.slots || 0, F = p.system.size || 1;
        if (d + F > k) {
          ui.notifications.warn("Not enough memory slots on cyberdeck.");
          return;
        }
        const C = m.system.installedItems.list || [];
        if (C.includes(r.programId)) return;
        const x = [...C, r.programId], z = d + F;
        await m.update({
          "system.installedItems.list": x,
          "system.installedItems.usedSlots": z
        }), await this.sendResponse({
          type: "SHEET_DELTA",
          actorId: g,
          delta: {
            [`items.${r.cyberdeckId}.system.installedItems.list`]: x,
            [`items.${r.cyberdeckId}.system.installedItems.usedSlots`]: z
          },
          success: !0,
          requestId: i
        });
        break;
      }
      case "REMOVE_PROGRAM": {
        const h = game.actors.get(g);
        if (!h) return;
        const m = h.items.get(r.cyberdeckId), p = h.items.get(r.programId);
        if (!m) return;
        const d = m.system.installedItems.list || [];
        if (!d.includes(r.programId)) return;
        const k = d.filter((G) => G !== r.programId), F = p && p.system.size || 1, C = m.system.installedItems.usedSlots || 0, x = Math.max(0, C - F);
        await m.update({
          "system.installedItems.list": k,
          "system.installedItems.usedSlots": x
        });
        const z = {
          [`items.${r.cyberdeckId}.system.installedItems.list`]: k,
          [`items.${r.cyberdeckId}.system.installedItems.usedSlots`]: x
        };
        p && p.system.isRezzed && (await p.update({ "system.isRezzed": !1 }), z[`items.${r.programId}.system.isRezzed`] = !1), await this.sendResponse({ type: "SHEET_DELTA", actorId: g, delta: z, success: !0, requestId: i });
        break;
      }
      case "TOGGLE_REZ": {
        const h = game.actors.get(g);
        if (h) {
          const m = h.items.get(r.programId);
          m && (await m.update({ "system.isRezzed": r.targetState }), await this.sendResponse({
            type: "SHEET_DELTA",
            actorId: g,
            delta: { [`items.${r.programId}.system.isRezzed`]: r.targetState },
            success: !0,
            requestId: i
          }));
        }
        break;
      }
      case "DAMAGE_ROLL": {
        const h = game.actors.get(g), m = h.items.get(r.weaponId);
        if (h && m) {
          const p = async () => {
            await h.sheet._onRoll({
              "data-roll-type": "damage",
              "data-item-id": m.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "damage",
                "data-item-id": m.id
              }
            });
          }, d = await this.rollAndCapture(g, p);
          d.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: i,
            actorId: g,
            total: d.total,
            isCriticalSuccess: d.isCriticalSuccess,
            isCriticalFailure: d.isCriticalFailure,
            label: `${m.name} (Damage)`,
            rawRoll: {
              total: d.total,
              isCriticalSuccess: d.isCriticalSuccess,
              isCriticalFailure: d.isCriticalFailure,
              label: d.label,
              resultTotal: (D = d.rawRoll) == null ? void 0 : D.resultTotal,
              rollTitle: (I = d.rawRoll) == null ? void 0 : I.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DEATH_SAVE": {
        const h = game.actors.get(g);
        if (h) {
          const m = async () => {
            await h.sheet._onRoll({
              "data-roll-type": "deathsave",
              "data-roll-title": "Death Save",
              type: "click",
              currentTarget: {
                "data-roll-type": "deathsave",
                "data-roll-title": "Death Save"
              }
            });
          }, p = await this.rollAndCapture(g, m);
          if (p.success) {
            const d = h.system.derivedStats.deathsave || {};
            await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: i,
              actorId: g,
              total: p.total,
              isCriticalSuccess: p.isCriticalSuccess,
              isCriticalFailure: p.isCriticalFailure,
              label: "Death Save",
              rawRoll: {
                total: p.total,
                isCriticalSuccess: p.isCriticalSuccess,
                isCriticalFailure: p.isCriticalFailure,
                label: p.label,
                resultTotal: (b = p.rawRoll) == null ? void 0 : b.resultTotal,
                rollTitle: (w = p.rawRoll) == null ? void 0 : w.rollTitle
              },
              success: !0
            }), await this.sendResponse({
              type: "SHEET_DELTA",
              actorId: g,
              delta: { "system.derivedStats.deathsave": d },
              tab: "stats",
              success: !0
            });
          }
        }
        break;
      }
      case "FACEDOWN_ROLL": {
        const h = game.actors.get(g), m = async () => {
          await h.sheet._onRoll({
            "data-roll-type": "facedown",
            "data-roll-title": "Face Down",
            type: "click",
            currentTarget: {
              "data-roll-type": "facedown",
              "data-roll-title": "Face Down"
            }
          });
        }, p = await this.rollAndCapture(g, m);
        p.success && await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: i,
          actorId: g,
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          rawRoll: {
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: p.label,
            resultTotal: (E = p.rawRoll) == null ? void 0 : E.resultTotal,
            rollTitle: (B = p.rawRoll) == null ? void 0 : B.rollTitle
          },
          success: !0
        });
        break;
      }
      case "INITIATIVE_ROLL": {
        const h = game.actors.get(g);
        if (h) {
          const m = async () => {
            await h.rollInitiative();
          }, p = await this.rollAndCapture(g, m);
          p.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: i,
            actorId: g,
            total: p.total,
            isCriticalSuccess: p.isCriticalSuccess,
            isCriticalFailure: p.isCriticalFailure,
            label: "Initiative",
            rawRoll: {
              total: p.total,
              isCriticalSuccess: p.isCriticalSuccess,
              isCriticalFailure: p.isCriticalFailure,
              label: p.label,
              resultTotal: (X = p.rawRoll) == null ? void 0 : X.resultTotal,
              rollTitle: (K = p.rawRoll) == null ? void 0 : K.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "PROGRAM_ROLL": {
        const h = game.actors.get(g);
        if (h) {
          const m = document.createElement("a");
          m.dataset.rollType = r.rollType, m.dataset.cyberdeckId = r.cyberdeckId, m.dataset.rollTitle = r.programName, m.dataset.interfaceAbility = r.programName, m.dataset.itemId = r.cyberdeckId, m.dataset.programId = r.programId, m.dataset.executionType = r.executionType;
          const p = async () => {
            await h.sheet._onRoll({
              type: "click",
              currentTarget: m
            });
          }, d = await this.rollAndCapture(g, p);
          d.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: i,
            actorId: g,
            total: d.total,
            isCriticalSuccess: d.isCriticalSuccess,
            isCriticalFailure: d.isCriticalFailure,
            label: r.programName,
            rawRoll: {
              total: d.total,
              isCriticalSuccess: d.isCriticalSuccess,
              isCriticalFailure: d.isCriticalFailure,
              label: d.label,
              resultTotal: (se = d.rawRoll) == null ? void 0 : se.resultTotal,
              rollTitle: (ae = d.rawRoll) == null ? void 0 : ae.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "ROLE_ROLL": {
        const h = game.actors.get(g);
        if (h) {
          const m = h.items.getName(r.itemName);
          if (m) {
            const p = {
              "data-roll-type": "roleAbility",
              "data-roll-title": r.label,
              "data-item-id": m.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "roleAbility",
                "data-roll-title": r.label,
                "data-item-id": m.id,
                "data-item-subtype": r.label
              }
            };
            r.isAbility && (p["data-roll-subtype"] = "subRoleAbility", p["data-role-name"] = r.label, p.currentTarget["data-roll-subtype"] = "subRoleAbility", p.currentTarget["data-role-name"] = r.label);
            const d = async () => {
              await h.sheet._onRoll(p);
            }, k = await this.rollAndCapture(g, d);
            k.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: i,
              actorId: g,
              total: k.total,
              isCriticalSuccess: k.isCriticalSuccess,
              isCriticalFailure: k.isCriticalFailure,
              label: r.label,
              rawRoll: {
                total: k.total,
                isCriticalSuccess: k.isCriticalSuccess,
                isCriticalFailure: k.isCriticalFailure,
                label: k.label,
                resultTotal: (ne = k.rawRoll) == null ? void 0 : ne.resultTotal,
                rollTitle: (ce = k.rawRoll) == null ? void 0 : ce.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "SKILL_ROLL": {
        const h = game.actors.get(g);
        if (h) {
          const m = h.items.getName(r.label);
          if (m) {
            const p = async () => {
              await h.sheet._onRoll({
                "data-roll-type": "skill",
                "data-roll-title": r.label,
                "data-item-id": m.id,
                type: "click",
                currentTarget: {
                  "data-roll-type": "skill",
                  "data-roll-title": r.label,
                  "data-item-id": m.id
                }
              });
            }, d = await this.rollAndCapture(g, p);
            d.success && await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: i,
              actorId: g,
              total: d.total,
              isCriticalSuccess: d.isCriticalSuccess,
              isCriticalFailure: d.isCriticalFailure,
              label: r.label,
              rawRoll: {
                total: d.total,
                isCriticalSuccess: d.isCriticalSuccess,
                isCriticalFailure: d.isCriticalFailure,
                label: d.label,
                resultTotal: (le = d.rawRoll) == null ? void 0 : le.resultTotal,
                rollTitle: (Pe = d.rawRoll) == null ? void 0 : Pe.rollTitle
              },
              success: !0
            });
          }
        }
        break;
      }
      case "STAT_ROLL": {
        const h = game.actors.get(g);
        if (h) {
          const m = async () => {
            await h.sheet._onRoll({
              "data-roll-type": "stat",
              "data-roll-title": r.label,
              type: "click",
              currentTarget: {
                "data-roll-type": "stat",
                "data-roll-title": r.label
              }
            });
          }, p = await this.rollAndCapture(g, m);
          p.success && await this.sendResponse({
            type: "ROLL_RESULT",
            requestId: i,
            actorId: g,
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
              rollTitle: (ve = p.rawRoll) == null ? void 0 : ve.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "DICE_ROLL": {
        i && this.activeRequests.set(i, { actorId: g, timestamp: Date.now() });
        const h = new Roll(r.formula);
        await h.evaluate(), await h.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: game.actors.get(g) }),
          flavor: r.flavor
        }), await this.sendResponse({
          type: "ROLL_RESULT",
          requestId: i,
          actorId: g,
          total: h.total,
          isCriticalSuccess: h.isCriticalSuccess || !1,
          isCriticalFailure: h.isCriticalFailure || !1,
          label: r.flavor || "Dice Roll",
          rawRoll: {
            rollTitle: r.flavor || "Dice Roll",
            _roll: h,
            formula: h.formula,
            resultTotal: h.total
          },
          success: !0
        });
        break;
      }
      case "MOVE_TOKEN": {
        const h = canvas.tokens.get(T);
        if (h) {
          let m = {};
          r.direction === "up" ? m.y = h.document.y - canvas.grid.size : r.direction === "down" ? m.y = h.document.y + canvas.grid.size : r.direction === "left" ? m.x = h.document.x - canvas.grid.size : r.direction === "right" && (m.x = h.document.x + canvas.grid.size), await h.document.update(m), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: T, success: !0, requestId: i });
        } else
          console.warn(`MOVE_TOKEN: Token ID ${T} not found.`), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: T, success: !1, message: "Token not found", requestId: i });
        break;
      }
      case "RELOAD_WEAPON": {
        const h = game.actors.get(g);
        if (h) {
          const m = h.items.get(r.weaponId), p = r.ammoId ? h.items.get(r.ammoId) : null, d = async () => {
            await m.reload();
            const k = {
              [`items.${r.weaponId}.system.magazine`]: {
                value: m.system.magazine.value,
                max: m.system.magazine.max
              },
              [`items.${r.weaponId}.system.installedItems`]: {
                list: [...m.system.installedItems.list],
                slots: m.system.installedItems.slots,
                usedSlots: m.system.installedItems.usedSlots
              }
            };
            p && (k[`items.${p.id}.system.amount`] = p.system.amount), h.items.filter((C) => C.type === "ammo").forEach((C) => {
              k[`items.${C.id}.system.amount`] = C.system.amount;
            }), await this.sendResponse({ type: "SHEET_DELTA", actorId: g, delta: k, success: !0, requestId: i });
          };
          if (p) {
            let k = m.getInstalledItems("ammo");
            k && k.length > 0 && m.uninstallItems(k), setTimeout(function() {
              m.installItems([p]);
            }, 500), setTimeout(async () => {
              await d();
            }, 1500);
          } else
            await d();
        }
        break;
      }
      case "TARGET_TOKEN": {
        const h = canvas.tokens.get(r.targetTokenId);
        h && (h.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: r.targetTokenId, success: !0, requestId: i }));
        break;
      }
      case "UPDATE_STAT": {
        const h = game.actors.get(g);
        if (h) {
          const m = `system.${r.label}`;
          let p;
          if (r.operation === "inc") {
            const d = m.split(".");
            let k = h;
            for (let x = 0; x < d.length; x++)
              k = x === 0 ? k[d[x]] : k == null ? void 0 : k[d[x]];
            const F = Number(k) || 0, C = Number(r.delta) || 0;
            p = F + C;
          } else
            p = typeof r.value == "string" ? r.value : Number(r.value) || 0;
          await h.update({ [m]: p }), await this.sendResponse({ type: "SHEET_DELTA", actorId: g, delta: { [m]: p }, tab: "stats", success: !0, requestId: i });
        }
        break;
      }
      case "ATTACK_ROLL": {
        const h = game.actors.get(g);
        if (h) {
          const m = r.weaponId, p = r.fireMode, d = canvas.tokens.get(r.targetId), k = "firetype-" + m, F = "cyberpunk-red-core";
          let C = "";
          switch (p) {
            case "Auto":
              C = "autofire";
              break;
            case "Suppress":
              C = "suppressive";
              break;
            case "Aimed":
              C = "aimed", await h.setFlag(F, "aimedLocation", "head");
              break;
            default:
              C = "";
              break;
          }
          d && d.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), C === "" ? await h.unsetFlag(F, k) : await h.setFlag(F, k, C);
          const x = document.createElement("a");
          x.dataset.rollType = "attack", x.dataset.itemId = m, x.dataset.rollTitle = p + " Attack";
          const z = async () => {
            await h.sheet._onRoll({
              preventDefault: () => {
              },
              currentTarget: x,
              type: "click"
            }, { showDialog: !0 });
          };
          let G = null;
          if (d) {
            const re = canvas.tokens.get(T) || ((Ee = h.getActiveTokens()) == null ? void 0 : Ee[0]) || canvas.tokens.placeables.find((J) => {
              var ee;
              return ((ee = J.actor) == null ? void 0 : ee.id) === h.id;
            });
            if (re) {
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
              }, ee = [6, 12, 25, 50, 100, 200, 400, 800], fe = d.center.x - re.center.x, be = d.center.y - re.center.y, q = Math.sqrt(Math.pow(fe, 2) + Math.pow(be, 2)), pe = Math.ceil(q / (((xe = canvas.grid) == null ? void 0 : xe.size) || 128)), ue = h.items.get(m), he = {
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
              }, de = he[(Oe = ue == null ? void 0 : ue.system) == null ? void 0 : Oe.weaponType] || he[(Me = ue == null ? void 0 : ue.system) == null ? void 0 : Me.variety] || "Pistol", te = ee.findIndex((H) => pe <= H);
              let ke = te !== -1 ? J[de][te] : 99;
              Array.isArray(J[de]) && typeof J[de][0] == "string" && (ke = J[de][Math.min(te !== -1 ? te : 0, J[de].length - 1)]), G = ke === 99 ? "Out of Range" : ke;
            }
          }
          const V = await this.rollAndCapture(g, z);
          if (V.success) {
            let re = null;
            typeof G == "number" ? re = V.total >= G ? "Hit" : "Miss" : G === "Out of Range" && (re = "Miss"), await this.sendResponse({
              type: "ROLL_RESULT",
              requestId: i,
              actorId: g,
              total: V.total,
              isCriticalSuccess: V.isCriticalSuccess,
              isCriticalFailure: V.isCriticalFailure,
              label: p + " Attack",
              rawRoll: {
                total: V.total,
                isCriticalSuccess: V.isCriticalSuccess,
                isCriticalFailure: V.isCriticalFailure,
                label: V.label,
                resultTotal: (Ne = V.rawRoll) == null ? void 0 : Ne.resultTotal,
                rollTitle: (Te = V.rawRoll) == null ? void 0 : Te.rollTitle
              },
              dv: G,
              outcome: re,
              success: !0
            });
          }
        }
        break;
      }
      case "GET_ROLL_MODIFIERS": {
        const h = game.actors.get(g);
        if (!h) return;
        const m = r.weaponId, p = m ? h.items.get(m) : null;
        let d = "None", k = 0, F = "None", C = 0, x = 0;
        if (p) {
          d = p.system.weaponSkill;
          const q = h.items.find((pe) => pe.type === "skill" && pe.name === d);
          k = q && Number(q.system.level) || 0, F = q && q.system.stat || "ref", C = Number((De = h.system.stats[F]) == null ? void 0 : De.value) || 0, x = Number(p.system.attackmod) || 0;
        }
        let z = 0;
        const G = [], V = Number(h.system.derivedStats.hp.value) || 0, re = Number(h.system.derivedStats.seriouslyWounded) || 0, J = h.items.find((q) => q.name === "Stim" && q.type === "drug"), ee = J && J.effects.some((q) => q.disabled === !1);
        if (V <= 0)
          z -= 4, G.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
        else if (V <= re) {
          const q = ee ? 0 : -2;
          z += q, G.push({
            title: ee ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
            penalty: q,
            description: ee ? "Ignoring penalty due to Stim drug." : "All actions at -2."
          });
        }
        h.items.filter((q) => q.type === "criticalInjury").forEach((q) => {
          var de;
          const pe = q.name || "Injury", ue = (((de = q.system.description) == null ? void 0 : de.value) || "").replace(/<[^>]*>/g, "");
          let he = 0;
          if (q.effects && q.effects.length > 0 && q.effects.forEach((te) => {
            !te.disabled && te.changes && te.changes.forEach((ke) => {
              const H = parseInt(ke.value);
              isNaN(H) || (he += H);
            });
          }), he === 0) {
            const te = String(pe).toLowerCase();
            (ue.includes("-2") || te.includes("arm") || te.includes("eye")) && (he = -2);
          }
          z += he, G.push({ title: pe, description: ue, penalty: he });
        });
        const be = {
          actorName: h.name,
          baseBonus: C + k + x,
          breakdown: {
            statName: F,
            statValue: C,
            skillName: d,
            skillLevel: k,
            weaponAcc: x
          },
          totalPenalty: z,
          finalModifier: C + k + x + z,
          injuries: G
        };
        await this.sendResponse({ type: "ROLL_MODIFIERS_DATA", result: be, requestId: i });
        break;
      }
      case "GET_DV_INFO": {
        const h = canvas.tokens.get(T), m = r.targetTokenId || ((je = Array.from(game.user.targets)[0]) == null ? void 0 : je.id), p = canvas.tokens.get(m), d = r.weaponId;
        if (h && p) {
          const k = {
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
          }, F = [6, 12, 25, 50, 100, 200, 400, 800], C = p.center.x - h.center.x, x = p.center.y - h.center.y, z = Math.sqrt(Math.pow(C, 2) + Math.pow(x, 2)), G = Math.ceil(z / 128), V = h.actor.items.get(d);
          if (!V) {
            console.warn(`GET_DV_INFO: Weapon ID ${d} not found on actor ${h.actor.name}.`), await this.sendResponse({ type: "DV_INFO_DATA", result: null, requestId: i });
            break;
          }
          const re = {
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
          }, J = re[V.system.weaponType] || re[V.system.variety] || "Pistol", ee = F.findIndex((q) => G <= q);
          let fe = ee !== -1 ? k[J][ee] : 99;
          Array.isArray(k[J]) && typeof k[J][0] == "string" && (fe = k[J][Math.min(ee !== -1 ? ee : 0, k[J].length - 1)]);
          const be = {
            targetName: p.name,
            distanceMeters: G,
            weaponCategory: J,
            dv: fe === 99 ? "Out of Range" : fe
          };
          await this.sendResponse({ type: "DV_INFO_DATA", result: be, requestId: i });
        } else
          console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!h}, Target: ${!!p}`), await this.sendResponse({ type: "DV_INFO_DATA", result: null, requestId: i });
        break;
      }
      case "LIST_VISIBLE_TOKENS": {
        const h = canvas.tokens.get(T);
        let m = [];
        if (h) {
          const p = canvas.grid.size, d = canvas.dimensions, k = h.center.x, F = h.center.y;
          m = canvas.tokens.placeables.filter((C) => {
            const x = !C.document.hidden, z = C.actor && (C.actor.type === "character" || C.actor.type === "mook"), G = C.x >= d.sceneX && C.x <= d.sceneX + d.sceneWidth && C.y >= d.sceneY && C.y <= d.sceneY + d.sceneHeight;
            return x && z && G && C.id !== h.id;
          }).map((C) => {
            const x = C.center.x - k, z = C.center.y - F, V = (Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2)) / p).toFixed(2);
            return {
              name: C.name,
              id: C.id,
              distanceM: parseFloat(V),
              type: C.actor.type
            };
          }).sort((C, x) => C.distanceM - x.distanceM);
        } else
          console.warn(`LIST_VISIBLE_TOKENS: Token ID ${T} not found.`);
        await this.sendResponse({ type: "VISIBLE_TOKENS_DATA", tokens: m, requestId: i });
        break;
      }
      case "GET_ACTOR": {
        let h = r.actorId, m = game.user;
        const p = r.agentLink || r.agent_link || r.foundryUserId || r.requestId;
        if (p && (m = game.users.find((d) => d.getFlag(A, "agent-link") === p) || game.users.get(p) || (p === game.user.id ? game.user : null)), m || (m = game.user), !h) {
          const d = m.character;
          d && (h = d.id);
        }
        if (h !== null) {
          const d = game.actors.get(h);
          if (d) {
            const k = d.toObject(), F = {
              _id: d.id,
              name: d.name,
              type: d.type,
              img: k.img,
              system: k.system,
              items: (k.items || []).map((C) => ({
                _id: C._id,
                name: C.name,
                type: C.type,
                img: C.img,
                system: C.system
              })),
              flags: k.flags && k.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": k.flags["cyberpunk-red-core"] } : {}
            };
            await this.sendResponse({ type: "ACTOR_DATA", actor: F, requestId: i, isGM: m.isGM, agentLink: m.getFlag(A, "agent-link") || m.id });
            break;
          }
        }
        await this.sendResponse({ type: "ACTOR_DATA", actor: !1, requestId: i, isGM: m.isGM, agentLink: m.getFlag(A, "agent-link") || m.id });
        break;
      }
      case "GET_ACTORS": {
        let h = game.user;
        const m = r.agentLink || r.agent_link || r.foundryUserId || r.requestId;
        m && (h = game.users.find((d) => d.getFlag(A, "agent-link") === m) || game.users.get(m) || (m === game.user.id ? game.user : null)), h || (h = game.user);
        let p = [];
        h.isGM ? p = game.actors.filter((d) => d.type === "character" || d.type === "mook").map((d) => {
          var F, C;
          const k = (F = Object.entries(d.ownership || {}).find(([x, z]) => {
            const G = game.users.get(x);
            return G && !G.isGM && z >= 3;
          })) == null ? void 0 : F[0];
          return {
            name: d.name,
            actorId: d.id,
            tokenId: null,
            agentLink: (k ? (C = game.users.get(k)) == null ? void 0 : C.getFlag(A, "agent-link") : null) || k || h.getFlag(A, "agent-link") || h.id
          };
        }) : (p = canvas.tokens.placeables.filter((d) => d.actor && (d.actor.type === "character" || d.actor.type === "mook")).filter((d) => d.actor.testUserPermission(h, "OWNER")).map((d) => {
          var F, C;
          const k = (F = Object.entries(d.actor.ownership || {}).find(([x, z]) => {
            const G = game.users.get(x);
            return G && !G.isGM && z >= 3;
          })) == null ? void 0 : F[0];
          return {
            name: d.name,
            actorId: d.actor.id,
            tokenId: d.id,
            agentLink: (k ? (C = game.users.get(k)) == null ? void 0 : C.getFlag(A, "agent-link") : null) || k || null
          };
        }), h.character && (p.some((k) => k.actorId === h.character.id) || p.push({
          name: h.character.name,
          actorId: h.character.id,
          tokenId: null,
          agentLink: h.getFlag(A, "agent-link") || h.id
        })), !h.isGM && h.character && (p = p.filter((d) => d.actorId === h.character.id))), await this.sendResponse({ type: "ACTORS_DATA", actors: p, requestId: i, isGM: h.isGM, agentLink: h.getFlag(A, "agent-link") || h.id });
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
window.cyberpunkBridge = new $r();
function rt() {
  game.settings.settings.has(`${A}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
game.ready ? (rt(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks()) : (Hooks.once("init", () => {
  rt();
}), Hooks.once("ready", () => {
  rt(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks();
}));
