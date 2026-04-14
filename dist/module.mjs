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
function Lr(y, c) {
  for (var r = 0; r < c.length; r++) {
    var a = c[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(y, a.key, a);
  }
}
function Y(y, c, r) {
  return c && Lr(y.prototype, c), Object.defineProperty(y, "prototype", {
    writable: !1
  }), y;
}
function Pe() {
  return Pe = Object.assign || function(y) {
    for (var c = 1; c < arguments.length; c++) {
      var r = arguments[c];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (y[a] = r[a]);
    }
    return y;
  }, Pe.apply(this, arguments);
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
  }), c && at(y, c);
}
function Ge(y) {
  return Ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ge(y);
}
function at(y, c) {
  return at = Object.setPrototypeOf || function(a, i) {
    return a.__proto__ = i, a;
  }, at(y, c);
}
function Ar() {
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
  var c = Ar();
  return function() {
    var a = Ge(y), i;
    if (c) {
      var l = Ge(this).constructor;
      i = Reflect.construct(a, arguments, l);
    } else
      i = a.apply(this, arguments);
    return xr(this, i);
  };
}
var ct = /* @__PURE__ */ function() {
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
}(), Ot = /* @__PURE__ */ function() {
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
function Er(y) {
  try {
    new y();
  } catch (c) {
    if (c.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var lt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r(a, i, l) {
    var h;
    return Q(this, r), h = c.call(this), h.name = i, h.pusher = a, h.options = l, h.eventFormatter = new Ot(h.options.namespace), h.subscribe(), h;
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
}(ct), Mt = /* @__PURE__ */ function(y) {
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
}(lt), Or = /* @__PURE__ */ function(y) {
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
}(lt), Mr = /* @__PURE__ */ function(y) {
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
}(Mt), Nt = /* @__PURE__ */ function(y) {
  ie(r, y);
  var c = oe(r);
  function r(a, i, l) {
    var h;
    return Q(this, r), h = c.call(this), h.events = {}, h.listeners = {}, h.name = i, h.socket = a, h.options = l, h.eventFormatter = new Ot(h.options.namespace), h.subscribe(), h;
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
}(ct), Dt = /* @__PURE__ */ function(y) {
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
}(Nt), Nr = /* @__PURE__ */ function(y) {
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
}(Dt), Ve = /* @__PURE__ */ function(y) {
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
}(ct), Ft = /* @__PURE__ */ function(y) {
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
}(Ve), Dr = /* @__PURE__ */ function(y) {
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
}(Ve), Fr = /* @__PURE__ */ function(y) {
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
}(Ft), ut = /* @__PURE__ */ function() {
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
      this.options = Pe(this._defaultOptions, r);
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
}(), xt = /* @__PURE__ */ function(y) {
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
    value: function(i, l, h) {
      return this.channel(i).listen(l, h);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return this.channels[i] || (this.channels[i] = new lt(this.pusher, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Mt(this.pusher, "private-" + i, this.options)), this.channels["private-" + i];
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
}(ut), Et = /* @__PURE__ */ function(y) {
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
      return this.channels[i] || (this.channels[i] = new Nt(this.socket, i, this.options)), this.channels[i];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return this.channels["private-" + i] || (this.channels["private-" + i] = new Dt(this.socket, "private-" + i, this.options)), this.channels["private-" + i];
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
}(ut), jr = /* @__PURE__ */ function(y) {
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
    value: function(i, l, h) {
      return new Ve();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(i) {
      return new Ve();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(i) {
      return new Ft();
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
}(ut), Ur = /* @__PURE__ */ function() {
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
        this.connector = new xt(Pe(Pe({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new xt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Et(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new jr(this.options);
      else if (typeof this.options.broadcaster == "function" && Er(this.options.broadcaster))
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
      if (this.connector instanceof Et)
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
var jt = { exports: {} };
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
            var R = function(b, w) {
              return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(x, B) {
                x.__proto__ = B;
              } || function(x, B) {
                for (var K in B) B.hasOwnProperty(K) && (x[K] = B[K]);
              }, R(b, w);
            };
            return function(b, w) {
              R(b, w);
              function x() {
                this.constructor = b;
              }
              b.prototype = w === null ? Object.create(w) : (x.prototype = w.prototype, new x());
            };
          }();
          Object.defineProperty(a, "__esModule", { value: !0 });
          var h = 256, f = (
            /** @class */
            function() {
              function R(b) {
                b === void 0 && (b = "="), this._paddingCharacter = b;
              }
              return R.prototype.encodedLength = function(b) {
                return this._paddingCharacter ? (b + 2) / 3 * 4 | 0 : (b * 8 + 5) / 6 | 0;
              }, R.prototype.encode = function(b) {
                for (var w = "", x = 0; x < b.length - 2; x += 3) {
                  var B = b[x] << 16 | b[x + 1] << 8 | b[x + 2];
                  w += this._encodeByte(B >>> 3 * 6 & 63), w += this._encodeByte(B >>> 2 * 6 & 63), w += this._encodeByte(B >>> 1 * 6 & 63), w += this._encodeByte(B >>> 0 * 6 & 63);
                }
                var K = b.length - x;
                if (K > 0) {
                  var B = b[x] << 16 | (K === 2 ? b[x + 1] << 8 : 0);
                  w += this._encodeByte(B >>> 3 * 6 & 63), w += this._encodeByte(B >>> 2 * 6 & 63), K === 2 ? w += this._encodeByte(B >>> 1 * 6 & 63) : w += this._paddingCharacter || "", w += this._paddingCharacter || "";
                }
                return w;
              }, R.prototype.maxDecodedLength = function(b) {
                return this._paddingCharacter ? b / 4 * 3 | 0 : (b * 6 + 7) / 8 | 0;
              }, R.prototype.decodedLength = function(b) {
                return this.maxDecodedLength(b.length - this._getPaddingLength(b));
              }, R.prototype.decode = function(b) {
                if (b.length === 0)
                  return new Uint8Array(0);
                for (var w = this._getPaddingLength(b), x = b.length - w, B = new Uint8Array(this.maxDecodedLength(x)), K = 0, J = 0, re = 0, ce = 0, te = 0, le = 0, ue = 0; J < x - 4; J += 4)
                  ce = this._decodeChar(b.charCodeAt(J + 0)), te = this._decodeChar(b.charCodeAt(J + 1)), le = this._decodeChar(b.charCodeAt(J + 2)), ue = this._decodeChar(b.charCodeAt(J + 3)), B[K++] = ce << 2 | te >>> 4, B[K++] = te << 4 | le >>> 2, B[K++] = le << 6 | ue, re |= ce & h, re |= te & h, re |= le & h, re |= ue & h;
                if (J < x - 1 && (ce = this._decodeChar(b.charCodeAt(J)), te = this._decodeChar(b.charCodeAt(J + 1)), B[K++] = ce << 2 | te >>> 4, re |= ce & h, re |= te & h), J < x - 2 && (le = this._decodeChar(b.charCodeAt(J + 2)), B[K++] = te << 4 | le >>> 2, re |= le & h), J < x - 3 && (ue = this._decodeChar(b.charCodeAt(J + 3)), B[K++] = le << 6 | ue, re |= ue & h), re !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return B;
              }, R.prototype._encodeByte = function(b) {
                var w = b;
                return w += 65, w += 25 - b >>> 8 & 6, w += 51 - b >>> 8 & -75, w += 61 - b >>> 8 & -15, w += 62 - b >>> 8 & 3, String.fromCharCode(w);
              }, R.prototype._decodeChar = function(b) {
                var w = h;
                return w += (42 - b & b - 44) >>> 8 & -h + b - 43 + 62, w += (46 - b & b - 48) >>> 8 & -h + b - 47 + 63, w += (47 - b & b - 58) >>> 8 & -h + b - 48 + 52, w += (64 - b & b - 91) >>> 8 & -h + b - 65 + 0, w += (96 - b & b - 123) >>> 8 & -h + b - 97 + 26, w;
              }, R.prototype._getPaddingLength = function(b) {
                var w = 0;
                if (this._paddingCharacter) {
                  for (var x = b.length - 1; x >= 0 && b[x] === this._paddingCharacter; x--)
                    w++;
                  if (b.length < 4 || w > 2)
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
          var I = (
            /** @class */
            function(R) {
              l(b, R);
              function b() {
                return R !== null && R.apply(this, arguments) || this;
              }
              return b.prototype._encodeByte = function(w) {
                var x = w;
                return x += 65, x += 25 - w >>> 8 & 6, x += 51 - w >>> 8 & -75, x += 61 - w >>> 8 & -13, x += 62 - w >>> 8 & 49, String.fromCharCode(x);
              }, b.prototype._decodeChar = function(w) {
                var x = h;
                return x += (44 - w & w - 46) >>> 8 & -h + w - 45 + 62, x += (94 - w & w - 96) >>> 8 & -h + w - 95 + 63, x += (47 - w & w - 58) >>> 8 & -h + w - 48 + 52, x += (64 - w & w - 91) >>> 8 & -h + w - 65 + 0, x += (96 - w & w - 123) >>> 8 & -h + w - 97 + 26, x;
              }, b;
            }(f)
          );
          a.URLSafeCoder = I;
          var P = new I();
          function A(R) {
            return P.encode(R);
          }
          a.encodeURLSafe = A;
          function D(R) {
            return P.decode(R);
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
            for (var I = new Uint8Array(_(T)), P = 0, A = 0; A < T.length; A++) {
              var D = T.charCodeAt(A);
              D < 128 ? I[P++] = D : D < 2048 ? (I[P++] = 192 | D >> 6, I[P++] = 128 | D & 63) : D < 55296 ? (I[P++] = 224 | D >> 12, I[P++] = 128 | D >> 6 & 63, I[P++] = 128 | D & 63) : (A++, D = (D & 1023) << 10, D |= T.charCodeAt(A) & 1023, D += 65536, I[P++] = 240 | D >> 18, I[P++] = 128 | D >> 12 & 63, I[P++] = 128 | D >> 6 & 63, I[P++] = 128 | D & 63);
            }
            return I;
          }
          a.encode = f;
          function _(T) {
            for (var I = 0, P = 0; P < T.length; P++) {
              var A = T.charCodeAt(P);
              if (A < 128)
                I += 1;
              else if (A < 2048)
                I += 2;
              else if (A < 55296)
                I += 3;
              else if (A <= 57343) {
                if (P >= T.length - 1)
                  throw new Error(l);
                P++, I += 4;
              } else
                throw new Error(l);
            }
            return I;
          }
          a.encodedLength = _;
          function N(T) {
            for (var I = [], P = 0; P < T.length; P++) {
              var A = T[P];
              if (A & 128) {
                var D = void 0;
                if (A < 224) {
                  if (P >= T.length)
                    throw new Error(h);
                  var R = T[++P];
                  if ((R & 192) !== 128)
                    throw new Error(h);
                  A = (A & 31) << 6 | R & 63, D = 128;
                } else if (A < 240) {
                  if (P >= T.length - 1)
                    throw new Error(h);
                  var R = T[++P], b = T[++P];
                  if ((R & 192) !== 128 || (b & 192) !== 128)
                    throw new Error(h);
                  A = (A & 15) << 12 | (R & 63) << 6 | b & 63, D = 2048;
                } else if (A < 248) {
                  if (P >= T.length - 2)
                    throw new Error(h);
                  var R = T[++P], b = T[++P], w = T[++P];
                  if ((R & 192) !== 128 || (b & 192) !== 128 || (w & 192) !== 128)
                    throw new Error(h);
                  A = (A & 15) << 18 | (R & 63) << 12 | (b & 63) << 6 | w & 63, D = 65536;
                } else
                  throw new Error(h);
                if (A < D || A >= 55296 && A <= 57343)
                  throw new Error(h);
                if (A >= 65536) {
                  if (A > 1114111)
                    throw new Error(h);
                  A -= 65536, I.push(String.fromCharCode(55296 | A >> 10)), A = 56320 | A & 1023;
                }
              }
              I.push(String.fromCharCode(A));
            }
            return I.join("");
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
              var t = this.lastId, s = this.prefix + t, o = this.name + "[" + t + "]", d = !1, v = function() {
                d || (e.apply(null, arguments), d = !0);
              };
              return this[t] = v, { number: t, id: s, name: o, callback: v };
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
                var d = O.createScriptRequest(o.getPath(e, t)), v = o.receivers.create(function(S) {
                  if (o.receivers.remove(v), o.loading[e]) {
                    var E = o.loading[e];
                    delete o.loading[e];
                    for (var j = function(X) {
                      X || d.cleanup();
                    }, H = 0; H < E.length; H++)
                      E[H](S, j);
                  }
                });
                d.send(v);
              }
            }
            getRoot(e) {
              var t, s = O.getDocument().location.protocol;
              return e && e.useTLS || s === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var T = new l("_pusher_dependencies", "Pusher.DependenciesReceivers"), I = new N({
            cdn_http: _.cdn_http,
            cdn_https: _.cdn_https,
            version: _.VERSION,
            suffix: _.dependency_suffix,
            receivers: T
          });
          const P = {
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
            const e = "See:", t = P.urls[n];
            if (!t)
              return "";
            let s;
            return t.fullUrl ? s = t.fullUrl : t.path && (s = P.baseUrl + t.path), s ? `${e} ${s}` : "";
          } }, R;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(R || (R = {}));
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
          class x extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class B extends Error {
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
          class te extends Error {
            constructor(e, t) {
              super(t), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var ue = function(n, e, t, s, o) {
            const d = O.createXHR();
            d.open("POST", t.endpoint, !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var v in t.headers)
              d.setRequestHeader(v, t.headers[v]);
            if (t.headersProvider != null) {
              let S = t.headersProvider();
              for (var v in S)
                d.setRequestHeader(v, S[v]);
            }
            return d.onreadystatechange = function() {
              if (d.readyState === 4)
                if (d.status === 200) {
                  let S, E = !1;
                  try {
                    S = JSON.parse(d.responseText), E = !0;
                  } catch {
                    o(new te(200, `JSON returned from ${s.toString()} endpoint was invalid, yet status code was 200. Data was: ${d.responseText}`), null);
                  }
                  E && o(null, S);
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
                  o(new te(d.status, `Unable to retrieve auth string from ${s.toString()} endpoint - received status: ${d.status} from ${t.endpoint}. ${S}`), null);
                }
            }, d.send(e), d;
          };
          function xe(n) {
            return Ne(Oe(n));
          }
          var me = String.fromCharCode, ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ee = function(n) {
            var e = n.charCodeAt(0);
            return e < 128 ? n : e < 2048 ? me(192 | e >>> 6) + me(128 | e & 63) : me(224 | e >>> 12 & 15) + me(128 | e >>> 6 & 63) + me(128 | e & 63);
          }, Oe = function(n) {
            return n.replace(/[^\x00-\x7F]/g, Ee);
          }, Me = function(n) {
            var e = [0, 2, 1][n.length % 3], t = n.charCodeAt(0) << 16 | (n.length > 1 ? n.charCodeAt(1) : 0) << 8 | (n.length > 2 ? n.charCodeAt(2) : 0), s = [
              ve.charAt(t >>> 18),
              ve.charAt(t >>> 12 & 63),
              e >= 2 ? "=" : ve.charAt(t >>> 6 & 63),
              e >= 1 ? "=" : ve.charAt(t & 63)
            ];
            return s.join("");
          }, Ne = window.btoa || function(n) {
            return n.replace(/[\s\S]{1,3}/g, Me);
          };
          class De {
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
          var Ie = De;
          function Fe(n) {
            window.clearTimeout(n);
          }
          function je(n) {
            window.clearInterval(n);
          }
          class he extends Ie {
            constructor(e, t) {
              super(setTimeout, Fe, e, function(s) {
                return t(), null;
              });
            }
          }
          class Ue extends Ie {
            constructor(e, t) {
              super(setInterval, je, e, function(s) {
                return t(), s;
              });
            }
          }
          var He = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new he(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(s) {
                return s[n].apply(s, t.concat(arguments));
              };
            }
          }, u = He;
          function p(n, ...e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t];
              for (var o in s)
                s[o] && s[o].constructor && s[o].constructor === Object ? n[o] = p(n[o] || {}, s[o]) : n[o] = s[o];
            }
            return n;
          }
          function g() {
            for (var n = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(se(arguments[e]));
            return n.join(" : ");
          }
          function m(n, e) {
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
          function k(n, e) {
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && e(n[t], t, n);
          }
          function U(n) {
            var e = [];
            return k(n, function(t, s) {
              e.push(s);
            }), e;
          }
          function C(n) {
            var e = [];
            return k(n, function(t) {
              e.push(t);
            }), e;
          }
          function M(n, e, t) {
            for (var s = 0; s < n.length; s++)
              e.call(t || window, n[s], s, n);
          }
          function q(n, e) {
            for (var t = [], s = 0; s < n.length; s++)
              t.push(e(n[s], s, n, t));
            return t;
          }
          function z(n, e) {
            var t = {};
            return k(n, function(s, o) {
              t[o] = e(s);
            }), t;
          }
          function V(n, e) {
            e = e || function(o) {
              return !!o;
            };
            for (var t = [], s = 0; s < n.length; s++)
              e(n[s], s, n, t) && t.push(n[s]);
            return t;
          }
          function ne(n, e) {
            var t = {};
            return k(n, function(s, o) {
              (e && e(s, o, n, t) || s) && (t[o] = s);
            }), t;
          }
          function W(n) {
            var e = [];
            return k(n, function(t, s) {
              e.push([s, t]);
            }), e;
          }
          function ee(n, e) {
            for (var t = 0; t < n.length; t++)
              if (e(n[t], t, n))
                return !0;
            return !1;
          }
          function ye(n, e) {
            for (var t = 0; t < n.length; t++)
              if (!e(n[t], t, n))
                return !1;
            return !0;
          }
          function be(n) {
            return z(n, function(e) {
              return typeof e == "object" && (e = se(e)), encodeURIComponent(xe(e.toString()));
            });
          }
          function G(n) {
            var e = ne(n, function(s) {
              return s !== void 0;
            }), t = q(W(be(e)), u.method("join", "=")).join("&");
            return t;
          }
          function fe(n) {
            var e = [], t = [];
            return function s(o, d) {
              var v, S, E;
              switch (typeof o) {
                case "object":
                  if (!o)
                    return null;
                  for (v = 0; v < e.length; v += 1)
                    if (e[v] === o)
                      return { $ref: t[v] };
                  if (e.push(o), t.push(d), Object.prototype.toString.apply(o) === "[object Array]")
                    for (E = [], v = 0; v < o.length; v += 1)
                      E[v] = s(o[v], d + "[" + v + "]");
                  else {
                    E = {};
                    for (S in o)
                      Object.prototype.hasOwnProperty.call(o, S) && (E[S] = s(o[S], d + "[" + JSON.stringify(S) + "]"));
                  }
                  return E;
                case "number":
                case "string":
                case "boolean":
                  return o;
              }
            }(n, "$");
          }
          function se(n) {
            try {
              return JSON.stringify(n);
            } catch {
              return JSON.stringify(fe(n));
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
              rt.log ? rt.log(s) : rt.logToConsole && e.bind(this)(s);
            }
          }
          var F = new de(), ae = function(n, e, t, s, o) {
            (t.headers !== void 0 || t.headersProvider != null) && F.warn(`To send headers with the ${s.toString()} request, you must use AJAX, rather than JSONP.`);
            var d = n.nextAuthCallbackID.toString();
            n.nextAuthCallbackID++;
            var v = n.getDocument(), S = v.createElement("script");
            n.auth_callbacks[d] = function(H) {
              o(null, H);
            };
            var E = "Pusher.auth_callbacks['" + d + "']";
            S.src = t.endpoint + "?callback=" + encodeURIComponent(E) + "&" + e;
            var j = v.getElementsByTagName("head")[0] || v.documentElement;
            j.insertBefore(S, j.firstChild);
          }, ke = ae;
          class Ce {
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
                var t = G(this.data), s = this.url + "/" + e.number + "?" + t;
                this.request = O.createScriptRequest(s), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Ht = function(n, e) {
            return function(t, s) {
              var o = "http" + (e ? "s" : "") + "://", d = o + (n.host || n.options.host) + n.options.path, v = O.createJSONPRequest(d, t), S = O.ScriptReceivers.create(function(E, j) {
                h.remove(S), v.cleanup(), j && j.host && (n.host = j.host), s && s(E, j);
              });
              v.send(S);
            };
          }, Bt = {
            name: "jsonp",
            getAgent: Ht
          }, qt = Bt;
          function We(n, e, t) {
            var s = n + (e.useTLS ? "s" : ""), o = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return s + "://" + o + t;
          }
          function Xe(n, e) {
            var t = "/app/" + n, s = "?protocol=" + _.PROTOCOL + "&client=js&version=" + _.VERSION + (e ? "&" + e : "");
            return t + s;
          }
          var zt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "") + Xe(n, "flash=false");
              return We("ws", e, t);
            }
          }, $t = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "/pusher") + Xe(n);
              return We("http", e, t);
            }
          }, Gt = {
            getInitial: function(n, e) {
              return We("http", e, e.httpPath || "/pusher");
            },
            getPath: function(n, e) {
              return Xe(n);
            }
          };
          class Vt {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Ke(e)];
            }
            add(e, t, s) {
              var o = Ke(e);
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
              var o = e ? [Ke(e)] : U(this._callbacks);
              t || s ? this.removeCallback(o, t, s) : this.removeAllCallbacks(o);
            }
            removeCallback(e, t, s) {
              M(e, function(o) {
                this._callbacks[o] = V(this._callbacks[o] || [], function(d) {
                  return t && t !== d.fn || s && s !== d.context;
                }), this._callbacks[o].length === 0 && delete this._callbacks[o];
              }, this);
            }
            removeAllCallbacks(e) {
              M(e, function(t) {
                delete this._callbacks[t];
              }, this);
            }
          }
          function Ke(n) {
            return "_" + n;
          }
          class pe {
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
              return e ? (this.global_callbacks = V(this.global_callbacks || [], (t) => t !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, t, s) {
              for (var o = 0; o < this.global_callbacks.length; o++)
                this.global_callbacks[o](e, t);
              var d = this.callbacks.get(e), v = [];
              if (s ? v.push(t, s) : t && v.push(t), d && d.length > 0)
                for (var o = 0; o < d.length; o++)
                  d[o].fn.apply(d[o].context || window, v);
              else this.failThrough && this.failThrough(e, t);
              return this;
            }
          }
          class Wt extends pe {
            constructor(e, t, s, o, d) {
              super(), this.initialize = O.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = s, this.key = o, this.options = d, this.state = "new", this.timeline = d.timeline, this.activityTimeout = d.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return u.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), F.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (u.defer(() => {
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
              return p({ cid: this.id }, e);
            }
          }
          class Te {
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
          var Xt = new Te({
            urls: zt,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!O.getWebSocketAPI();
            },
            isSupported: function() {
              return !!O.getWebSocketAPI();
            },
            getSocket: function(n) {
              return O.createWebSocket(n);
            }
          }), ht = {
            urls: $t,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, dt = p({
            getSocket: function(n) {
              return O.HTTPFactory.createStreamingSocket(n);
            }
          }, ht), ft = p({
            getSocket: function(n) {
              return O.HTTPFactory.createPollingSocket(n);
            }
          }, ht), pt = {
            isSupported: function() {
              return O.isXHRSupported();
            }
          }, Kt = new Te(p({}, dt, pt)), Jt = new Te(p({}, ft, pt)), Qt = {
            ws: Xt,
            xhr_streaming: Kt,
            xhr_polling: Jt
          }, Be = Qt, Yt = new Te({
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
                js_path: I.getPath("sockjs", {
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
          }), gt = {
            isSupported: function(n) {
              var e = O.isXDRSupported(n.useTLS);
              return e;
            }
          }, Zt = new Te(p({}, dt, gt)), en = new Te(p({}, ft, gt));
          Be.xdr_streaming = Zt, Be.xdr_polling = en, Be.sockjs = Yt;
          var tn = Be;
          class nn extends pe {
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
              o = p({}, o, {
                activityTimeout: this.pingDelay
              });
              var d = this.transport.createConnection(e, t, s, o), v = null, S = function() {
                d.unbind("open", S), d.bind("closed", E), v = u.now();
              }, E = (j) => {
                if (d.unbind("closed", E), j.code === 1002 || j.code === 1003)
                  this.manager.reportDeath();
                else if (!j.wasClean && v) {
                  var H = u.now() - v;
                  H < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(H / 2, this.minPingDelay));
                }
              };
              return d.bind("open", S), d;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const mt = {
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
              var e = mt.decodeMessage(n);
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
          var we = mt;
          class on extends pe {
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
              return s && (o.channel = s), F.debug("Event sent", o), this.send(we.encodeMessage(o));
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
                  } catch (d) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: d,
                      data: s.data
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
                error: (s) => {
                  this.emit("error", s);
                },
                closed: (s) => {
                  t(), s && s.code && this.handleCloseEvent(s), this.transport = null, this.emit("closed");
                }
              }, t = () => {
                k(e, (s, o) => {
                  this.transport.unbind(o, s);
                });
              };
              k(e, (s, o) => {
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
              this.callback(p({ transport: this.transport, action: e }, t));
            }
          }
          class cn {
            constructor(e, t) {
              this.timeline = e, this.options = t || {};
            }
            send(e, t) {
              this.timeline.isEmpty() || this.timeline.send(O.TimelineTransport.getAgent(this, e), t);
            }
          }
          class Je extends pe {
            constructor(e, t) {
              super(function(s, o) {
                F.debug("No callbacks on " + e + " for " + s);
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
                F.warn(`Client event triggered before channel 'subscription_succeeded' event . ${s}`);
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
                e ? (this.subscriptionPending = !1, F.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
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
          class Qe extends Je {
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
              k(this.members, (t, s) => {
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
              return d instanceof t ? d : new t(function(v) {
                v(d);
              });
            }
            return new (t || (t = Promise))(function(d, v) {
              function S(H) {
                try {
                  j(s.next(H));
                } catch (X) {
                  v(X);
                }
              }
              function E(H) {
                try {
                  j(s.throw(H));
                } catch (X) {
                  v(X);
                }
              }
              function j(H) {
                H.done ? d(H.value) : o(H.value).then(S, E);
              }
              j((s = s.apply(n, e || [])).next());
            });
          };
          class hn extends Qe {
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
                    let v = D.buildLogSuffix("authorizationEndpoint");
                    F.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${v}, or the user should be signed in.`), t("Invalid auth response");
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
          var dn = i(1), Ye = i(0);
          class fn extends Qe {
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
                this.key = Object(Ye.decode)(d), delete o.shared_secret, t(null, o);
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
                F.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!t.ciphertext || !t.nonce) {
                F.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + t);
                return;
              }
              let s = Object(Ye.decode)(t.ciphertext);
              if (s.length < this.nacl.secretbox.overheadLength) {
                F.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${s.length}`);
                return;
              }
              let o = Object(Ye.decode)(t.nonce);
              if (o.length < this.nacl.secretbox.nonceLength) {
                F.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${o.length}`);
                return;
              }
              let d = this.nacl.secretbox.open(s, o, this.key);
              if (d === null) {
                F.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (v, S) => {
                  if (v) {
                    F.error(`Failed to make a request to the authEndpoint: ${S}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (d = this.nacl.secretbox.open(s, o, this.key), d === null) {
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
              let t = Object(dn.decode)(e);
              try {
                return JSON.parse(t);
              } catch {
                return t;
              }
            }
          }
          class pn extends pe {
            constructor(e, t) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = t, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var s = O.getNetwork();
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new he(e || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new he(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new he(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new he(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(e) {
              return p({}, e, {
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
              return p({}, e, {
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
                o === "connected" && (o += " with new socket ID " + t.socket_id), F.debug("State changed", s + " -> " + o), this.timeline.info({ state: e, params: t }), this.emit("state_change", { previous: s, current: e }), this.emit(e, t);
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
              return C(this.channels);
            }
            find(e) {
              return this.channels[e];
            }
            remove(e) {
              var t = this.channels[e];
              return delete this.channels[e], t;
            }
            disconnect() {
              k(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function mn(n, e) {
            if (n.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return ge.createEncryptedChannel(n, e, e.config.nacl);
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", s = D.buildLogSuffix("encryptedChannelSupport");
              throw new J(`${t}. ${s}`);
            } else {
              if (n.indexOf("private-") === 0)
                return ge.createPrivateChannel(n, e);
              if (n.indexOf("presence-") === 0)
                return ge.createPresenceChannel(n, e);
              if (n.indexOf("#") === 0)
                throw new w('Cannot create a channel with name "' + n + '".');
              return ge.createChannel(n, e);
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
              return new Je(n, e);
            },
            createPrivateChannel(n, e) {
              return new Qe(n, e);
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
          }, ge = yn;
          class yt {
            constructor(e) {
              this.options = e || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(e) {
              return ge.createAssistantToTheTransportManager(this, e, {
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
              return ee(this.strategies, u.method("isSupported"));
            }
            connect(e, t) {
              var s = this.strategies, o = 0, d = this.timeout, v = null, S = (E, j) => {
                j ? t(null, j) : (o = o + 1, this.loop && (o = o % s.length), o < s.length ? (d && (d = d * 2, this.timeoutLimit && (d = Math.min(d, this.timeoutLimit))), v = this.tryStrategy(s[o], e, { timeout: d, failFast: this.failFast }, S)) : t(!0));
              };
              return v = this.tryStrategy(s[o], e, { timeout: d, failFast: this.failFast }, S), {
                abort: function() {
                  v.abort();
                },
                forceMinPriority: function(E) {
                  e = E, v && v.forceMinPriority(E);
                }
              };
            }
            tryStrategy(e, t, s, o) {
              var d = null, v = null;
              return s.timeout > 0 && (d = new he(s.timeout, function() {
                v.abort(), o(!0);
              })), v = e.connect(t, function(S, E) {
                S && d && d.isRunning() && !s.failFast || (d && d.ensureAborted(), o(S, E));
              }), {
                abort: function() {
                  d && d.ensureAborted(), v.abort();
                },
                forceMinPriority: function(S) {
                  v.forceMinPriority(S);
                }
              };
            }
          }
          class Ze {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return ee(this.strategies, u.method("isSupported"));
            }
            connect(e, t) {
              return vn(this.strategies, e, function(s, o) {
                return function(d, v) {
                  if (o[s].error = d, d) {
                    bn(o) && t(!0);
                    return;
                  }
                  M(o, function(S) {
                    S.forceMinPriority(v.transport.priority);
                  }), t(null, v);
                };
              });
            }
          }
          function vn(n, e, t) {
            var s = q(n, function(o, d, v, S) {
              return o.connect(e, t(d, S));
            });
            return {
              abort: function() {
                M(s, kn);
              },
              forceMinPriority: function(o) {
                M(s, function(d) {
                  d.forceMinPriority(o);
                });
              }
            };
          }
          function bn(n) {
            return ye(n, function(e) {
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
              var s = this.usingTLS, o = _n(s), d = o && o.cacheSkipCount ? o.cacheSkipCount : 0, v = [this.strategy];
              if (o && o.timestamp + this.ttl >= u.now()) {
                var S = this.transports[o.transport];
                S && (["ws", "wss"].includes(o.transport) || d > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: o.transport,
                  latency: o.latency
                }), v.push(new _e([S], {
                  timeout: o.latency * 2 + 1e3,
                  failFast: !0
                }))) : d++);
              }
              var E = u.now(), j = v.pop().connect(e, function H(X, $e) {
                X ? (vt(s), v.length > 0 ? (E = u.now(), j = v.pop().connect(e, H)) : t(X)) : (Sn(s, $e.transport.name, u.now() - E, d), t(null, $e));
              });
              return {
                abort: function() {
                  j.abort();
                },
                forceMinPriority: function(H) {
                  e = H, j && j.forceMinPriority(H);
                }
              };
            }
          }
          function et(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function _n(n) {
            var e = O.getLocalStorage();
            if (e)
              try {
                var t = e[et(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                vt(n);
              }
            return null;
          }
          function Sn(n, e, t, s) {
            var o = O.getLocalStorage();
            if (o)
              try {
                o[et(n)] = se({
                  timestamp: u.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: s
                });
              } catch {
              }
          }
          function vt(n) {
            var e = O.getLocalStorage();
            if (e)
              try {
                delete e[et(n)];
              } catch {
              }
          }
          class qe {
            constructor(e, { delay: t }) {
              this.strategy = e, this.options = { delay: t };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var s = this.strategy, o, d = new he(this.options.delay, function() {
                o = s.connect(e, t);
              });
              return {
                abort: function() {
                  d.ensureAborted(), o && o.abort();
                },
                forceMinPriority: function(v) {
                  e = v, o && o.forceMinPriority(v);
                }
              };
            }
          }
          class Re {
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
            function o(At, Cr, Tr, Ir, Rr) {
              var Pt = t(n, At, Cr, Tr, Ir, Rr);
              return s[At] = Pt, Pt;
            }
            var d = Object.assign({}, e, {
              hostNonTLS: n.wsHost + ":" + n.wsPort,
              hostTLS: n.wsHost + ":" + n.wssPort,
              httpPath: n.wsPath
            }), v = Object.assign({}, d, {
              useTLS: !0
            }), S = Object.assign({}, e, {
              hostNonTLS: n.httpHost + ":" + n.httpPort,
              hostTLS: n.httpHost + ":" + n.httpsPort,
              httpPath: n.httpPath
            }), E = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, j = new yt({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), H = new yt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), X = o("ws", "ws", 3, d, j), $e = o("wss", "ws", 3, v, j), br = o("sockjs", "sockjs", 1, S), St = o("xhr_streaming", "xhr_streaming", 1, S, H), kr = o("xdr_streaming", "xdr_streaming", 1, S, H), Ct = o("xhr_polling", "xhr_polling", 1, S), wr = o("xdr_polling", "xdr_polling", 1, S), Tt = new _e([X], E), _r = new _e([$e], E), Sr = new _e([br], E), It = new _e([
              new Re(Le(St), St, kr)
            ], E), Rt = new _e([
              new Re(Le(Ct), Ct, wr)
            ], E), Lt = new _e([
              new Re(Le(It), new Ze([
                It,
                new qe(Rt, { delay: 4e3 })
              ]), Rt)
            ], E), st = new Re(Le(Lt), Lt, Sr), it;
            return e.useTLS ? it = new Ze([
              Tt,
              new qe(st, { delay: 2e3 })
            ]) : it = new Ze([
              Tt,
              new qe(_r, { delay: 2e3 }),
              new qe(st, { delay: 5e3 })
            ]), new wn(new Cn(new Re(Le(X), it, st)), s, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, In = Tn, Rn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), I.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
              n.hooks.isInitialized() ? (n.changeState("initialized"), t(!0)) : (e && n.onError(e), n.onClose(), t(!1));
            })) : n.onClose();
          }, Ln = {
            getRequest: function(n) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                n.emit("error", new x()), n.close();
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
          }, An = Ln;
          const Pn = 256 * 1024;
          class xn extends pe {
            constructor(e, t, s) {
              super(), this.hooks = e, this.method = t, this.url = s;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, O.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (O.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
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
          var tt;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(tt || (tt = {}));
          var Se = tt, En = 1;
          class On {
            constructor(e, t) {
              this.hooks = e, this.session = kt(1e3) + "/" + Fn(8), this.location = Mn(t), this.readyState = Se.CONNECTING, this.openStream();
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
                  return O.createSocketRequest("POST", bt(Nn(this.location, this.session))).start(e), !0;
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
              this.stream = O.createSocketRequest("POST", bt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                u.defer(() => {
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
          function bt(n) {
            var e = n.indexOf("?") === -1 ? "?" : "&";
            return n + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + En++;
          }
          function Dn(n, e) {
            var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);
            return t[1] + e + t[3];
          }
          function kt(n) {
            return O.randomInt(n);
          }
          function Fn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(kt(32).toString(32));
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
              var e = O.getXHRAPI(), t = new e();
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
          }, wt = Gn;
          wt.createXDR = function(n, e) {
            return this.createRequest(An, n, e);
          };
          var Vn = wt, Wn = {
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
              window.JSON ? e() : I.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: ue, jsonp: ke };
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
              return new Ce(n);
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
          }, O = Wn, nt;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(nt || (nt = {}));
          var ze = nt;
          class Xn {
            constructor(e, t, s) {
              this.key = e, this.session = t, this.events = [], this.options = s || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(p({}, t, { timestamp: u.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(ze.ERROR, e);
            }
            info(e) {
              this.log(ze.INFO, e);
            }
            debug(e) {
              this.log(ze.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, t) {
              var s = p({
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
                  return _t(new B(), t);
              } else return _t(new ce(), t);
              var s = !1, o = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), d = null, v = function() {
                o.unbind("initialized", v), o.connect();
              }, S = function() {
                d = ge.createHandshake(o, function(X) {
                  s = !0, H(), t(null, X);
                });
              }, E = function(X) {
                H(), t(X);
              }, j = function() {
                H();
                var X;
                X = se(o), t(new K(X));
              }, H = function() {
                o.unbind("initialized", v), o.unbind("open", S), o.unbind("error", E), o.unbind("closed", j);
              };
              return o.bind("initialized", v), o.bind("open", S), o.bind("error", E), o.bind("closed", j), o.initialize(), {
                abort: () => {
                  s || (H(), d ? d.close() : o.close());
                },
                forceMinPriority: (X) => {
                  s || this.priority < X && (d ? d.close() : o.close());
                }
              };
            }
          }
          function _t(n, e) {
            return u.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Jn } = O;
          var Qn = function(n, e, t, s, o, d) {
            var v = Jn[t];
            if (!v)
              throw new re(t);
            var S = (!n.enabledTransports || m(n.enabledTransports, e) !== -1) && (!n.disabledTransports || m(n.disabledTransports, e) === -1), E;
            return S ? (o = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, o), E = new Kn(e, s, d ? d.getAssistant(v) : v, o)) : E = Yn, E;
          }, Yn = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = u.defer(function() {
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
            "disableStats" in n && F.warn("The disableStats option is deprecated in favor of enableStats");
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
            if (typeof O.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const s = er(e, n);
              O.getAuthorizers()[n.transport](O, s, n, R.UserAuthentication, t);
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
            if (typeof O.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const s = nr(e, n);
              O.getAuthorizers()[n.transport](O, s, n, R.ChannelAuthorization, t);
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
              const v = n.channel(o.channelName);
              t(v, s).authorize(o.socketId, d);
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
            return O.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
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
          class pr extends pe {
            constructor(e) {
              super(function(t, s) {
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
          function gr() {
            let n, e;
            return { promise: new Promise((s, o) => {
              n = s, e = o;
            }), resolve: n, reject: e };
          }
          var mr = gr;
          class yr extends pe {
            constructor(e) {
              super(function(t, s) {
                F.debug("No callbacks on user for " + t);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (t, s) => {
                if (t) {
                  F.warn(`Error during signin: ${t}`), this._cleanup();
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
              this.serverToUserChannel = new Je(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((t, s) => {
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
              return U(ne({ ws: O.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              vr(e), Zn(t), this.key = e, this.config = ir(t, this), this.channels = ge.createChannels(), this.global_emitter = new pe(), this.sessionID = O.randomInt(1e9), this.timeline = new Xn(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: Z.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: ze.INFO,
                version: _.VERSION
              }), this.config.enableStats && (this.timelineSender = ge.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + O.TimelineTransport.name
              }));
              var s = (o) => O.getDefaultStrategy(this.config, o, Qn);
              this.connection = ge.createConnectionManager(this.key, {
                getStrategy: s,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (o) => {
                var d = o.event, v = d.indexOf("pusher_internal:") === 0;
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
                F.warn(o);
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
                this.timelineSenderTimer = new Ue(6e4, function() {
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
          Z.instances = [], Z.isReady = !1, Z.logToConsole = !1, Z.Runtime = O, Z.ScriptReceivers = O.ScriptReceivers, Z.DependenciesReceivers = O.DependenciesReceivers, Z.auth_callbacks = O.auth_callbacks;
          var rt = a.default = Z;
          function vr(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          O.setup(Z);
        }
        /******/
      ])
    );
  });
})(jt);
var Br = jt.exports;
const qr = /* @__PURE__ */ Hr(Br);
window.Pusher = qr;
const L = "cpr-agent";
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
        hasKey: !!a.getFlag(L, "hasApiKey"),
        agentLink: a.getFlag(L, "agent-link"),
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
          const I = _ === "" || _ === "null" ? null : _;
          (((T = N.character) == null ? void 0 : T.id) || null) !== I && (i.push({ _id: N.id, character: I }), a++);
        }
      }), i.length > 0) {
        await User.updateDocuments(i), ui.notifications.info(`Cyberpunk Bridge: Updated ${a} player assignments!`);
        for (let l of i) {
          const h = game.users.get(l._id), f = h == null ? void 0 : h.getFlag(L, "agent-link");
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
      i && (await i.unsetFlag(L, "agent-link"), await i.unsetFlag(L, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${i.name}. They will need to re-sync.`), this.render(!0));
    }), c.find("#refresh-all-users").click(async (r) => {
      r.preventDefault();
      for (let a of game.users)
        await a.unsetFlag(L, "agent-link"), await a.unsetFlag(L, "hasApiKey");
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
    game.settings.registerMenu(L, "characterAssignment", {
      name: "Player Assignments",
      label: "Manage Characters",
      hint: "Assign playable characters to players who have linked their Agent API keys.",
      icon: "fas fa-users",
      type: $r,
      restricted: !0
      // GM Only
    }), game.settings.register(L, "apiUrl", {
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
    }), game.settings.register(L, "reverbHost", {
      name: "Reverb Host (override)",
      scope: "world",
      config: !0,
      type: String,
      default: "",
      onChange: () => this.reconnect()
    }), game.settings.register(L, "reverbPort", {
      name: "Reverb Port",
      scope: "world",
      config: !0,
      type: Number,
      default: 0,
      onChange: () => this.reconnect()
    }), game.settings.register(L, "reverbUseSSL", {
      name: "Reverb Use SSL (wss)",
      scope: "world",
      config: !0,
      type: Boolean,
      default: !0,
      onChange: () => this.reconnect()
    }), game.settings.register(L, "reverbKey", {
      name: "Reverb App Key",
      scope: "world",
      config: !0,
      type: String,
      default: "itdsiqtx8cpskowawl1p",
      onChange: () => this.reconnect()
    }), game.settings.register(L, "apiKey", {
      name: "API Key (Sanctum Token)",
      hint: "Generate this in your Cyberpunk Agent dashboard.",
      scope: "client",
      // Vital for player uniqueness
      config: !0,
      type: String,
      default: "",
      onChange: async (c) => {
        await game.user.setFlag(L, "hasApiKey", !!c), game.user.isGM && this.reconnect(), this.syncPlayerLink();
      }
    }), game.settings.register(L, "channelId", {
      name: "Channel ID",
      hint: "The unique channel name for this game group. Must match your Agent dashboard.",
      scope: "world",
      config: !0,
      type: String,
      default: "",
      onChange: () => {
        game.user.isGM && this.reconnect();
      }
    }), game.settings.register(L, "debugMode", {
      name: "Debug Mode",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1
    });
  }
  connect() {
    const c = game.settings.get(L, "apiUrl"), r = game.settings.get(L, "apiKey"), a = game.settings.get(L, "debugMode"), i = Number(game.settings.get(L, "reverbPort") || 0) || 0, l = game.settings.get(L, "reverbUseSSL"), h = (game.settings.get(L, "reverbHost") || "").trim();
    if (!r || !c) return;
    this.echo && this.echo.disconnect();
    let f;
    try {
      f = new URL(c);
    } catch {
      return;
    }
    const _ = h || f.hostname, N = f.protocol === "https:", T = typeof l == "boolean" ? l : void 0, I = T ?? N, P = I ? 443 : 80, A = i > 0 ? i : P;
    this.echo = new Ur({
      broadcaster: "reverb",
      key: game.settings.get(L, "reverbKey") || "itdsiqtx8cpskowawl1p",
      wsHost: _,
      wsPort: A,
      wssPort: A,
      forceTLS: I,
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
    const c = game.settings.get(L, "channelId"), r = c ? `cpr-agent.${c}` : "cpr-agent";
    this.echo.private(r).listen(".GameUpdate", (a) => {
      this.handleIncomingData(a);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const c = game.settings.get(L, "apiKey"), r = game.settings.get(L, "debugMode");
    if (r && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(L, "hasApiKey") !== !!c && await game.user.setFlag(L, "hasApiKey", !!c), !c) {
      r && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const a = async () => {
      var h;
      const i = game.user.character, l = game.user.getFlag(L, "agent-link");
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
        r && console.log("[Bridge] syncPlayerLink: Laravel response:", f), f && f.agent_link ? l !== f.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${f.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${f.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(L, "agent-link", f.agent_link), (h = ui.notifications) == null || h.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", f);
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
      const i = game.settings.get(L, "apiKey");
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
            const I = _[T];
            I !== null && typeof I == "object" && !Array.isArray(I) && !(I instanceof foundry.utils.Color) ? f(I, `${N}${T}.`) : h[`${N}${T}`] = I;
          }
        };
        f(a.system), c(r, h);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (r, a, i, l) => {
      const h = r.parent;
      if (h instanceof Actor) {
        const f = {}, _ = `items.${r.id}.`;
        if (a.system) {
          const N = (T, I = `${_}system.`) => {
            for (let P in T) {
              const A = T[P];
              A !== null && typeof A == "object" && !Array.isArray(A) && !(A instanceof foundry.utils.Color) ? N(A, `${I}${P}.`) : f[`${I}${P}`] = A;
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
      agentLink: r ? r.getFlag(L, "agent-link") : null,
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
    let r = game.settings.get(L, "apiUrl");
    const a = game.settings.get(L, "apiKey");
    if (!r || !a) return;
    r.endsWith("/") && (r = r.slice(0, -1));
    const i = (c.requestId ? this.requestAgentLinks.get(c.requestId) : null) || game.user.getFlag(L, "agent-link");
    i && !c.agentLink && (c.agentLink = i);
    const l = game.settings.get(L, "channelId");
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
    var P, A, D, R, b, w, x, B, K, J, re, ce, te, le, ue, xe, me, ve, Ee, Oe, Me, Ne, De, Ie, Fe, je, he, Ue, He;
    const r = c.payload || c, a = r.type;
    console.log(`%c[Bridge] Incoming Call: ${a}`, "color: #00ffff; font-weight: bold;", r);
    const i = r.requestId, l = r.agent_link || r.agentLink;
    i && l && (this.requestAgentLinks.set(i, l), setTimeout(() => this.requestAgentLinks.delete(i), 3e4));
    const h = game.user.getFlag(L, "agent-link"), f = r.actorId, _ = (P = game.user.character) == null ? void 0 : P.id, N = game.settings.get(L, "debugMode");
    N && console.log(`[Bridge] handleIncomingData: requestId=${i}, agentLink=${l}, myAgentLink=${h}, actorId=${f}, myCharacterId=${_}`);
    let T = !1;
    if (game.user.isGM || h && (i === h || l === h) ? T = !0 : !h && i && f && _ === f && (console.log(`[Bridge] Discovery: Matching incoming request to character ${f}`), T = !0), !T) {
      N && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && l && h !== l && (i === l || f && _ === f) && (console.log(`%c[Bridge] Setting agent-link flag: ${l}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(L, "agent-link", l), (A = ui.notifications) == null || A.info("Agent: Account linked!"));
    let I = r.tokenId;
    if (!I && f) {
      const u = canvas.tokens.placeables.find((p) => {
        var g;
        return ((g = p.actor) == null ? void 0 : g.id) === f;
      });
      u && (I = u.id);
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
        const p = u.items.get(r.itemId);
        if (!p) {
          console.warn(`Item ID ${r.itemId} not found on actor ${u.name}.`);
          return;
        }
        await p.snort(), ui.notifications.info(`Sync: ${p.name} consumed.`), await this.sendResponse({ type: "CONFIRMATION", action: a, actorId: f, success: !0, requestId: i });
        break;
      }
      case "ITEM_EQUIP": {
        const u = game.actors.get(f);
        if (u) {
          const p = u.items.get(r.itemId);
          if (p) {
            const g = `items.${r.itemId}.system.equipped`;
            await p.update({ "system.equipped": r.state }), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: { [g]: r.state }, success: !0, requestId: i });
          }
        }
        break;
      }
      case "INSTALL_PROGRAM": {
        const u = game.actors.get(f);
        if (!u) return;
        const p = u.items.get(r.cyberdeckId), g = u.items.get(r.programId);
        if (!p || !g) return;
        const m = p.system.installedItems.usedSlots || 0, k = p.system.installedItems.slots || 0, U = g.system.size || 1;
        if (m + U > k) {
          ui.notifications.warn("Not enough memory slots on cyberdeck.");
          return;
        }
        const C = p.system.installedItems.list || [];
        if (C.includes(r.programId)) return;
        const M = [...C, r.programId], q = m + U;
        await p.update({
          "system.installedItems.list": M,
          "system.installedItems.usedSlots": q
        }), await this.sendResponse({
          type: "SHEET_DELTA",
          actorId: f,
          delta: {
            [`items.${r.cyberdeckId}.system.installedItems.list`]: M,
            [`items.${r.cyberdeckId}.system.installedItems.usedSlots`]: q
          },
          success: !0,
          requestId: i
        });
        break;
      }
      case "REMOVE_PROGRAM": {
        const u = game.actors.get(f);
        if (!u) return;
        const p = u.items.get(r.cyberdeckId), g = u.items.get(r.programId);
        if (!p) return;
        const m = p.system.installedItems.list || [];
        if (!m.includes(r.programId)) return;
        const k = m.filter((z) => z !== r.programId), U = g && g.system.size || 1, C = p.system.installedItems.usedSlots || 0, M = Math.max(0, C - U);
        await p.update({
          "system.installedItems.list": k,
          "system.installedItems.usedSlots": M
        });
        const q = {
          [`items.${r.cyberdeckId}.system.installedItems.list`]: k,
          [`items.${r.cyberdeckId}.system.installedItems.usedSlots`]: M
        };
        g && g.system.isRezzed && (await g.update({ "system.isRezzed": !1 }), q[`items.${r.programId}.system.isRezzed`] = !1), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: q, success: !0, requestId: i });
        break;
      }
      case "TOGGLE_REZ": {
        const u = game.actors.get(f);
        if (u) {
          const p = u.items.get(r.programId);
          p && (await p.update({ "system.isRezzed": r.targetState }), await this.sendResponse({
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
        const u = game.actors.get(f), p = u.items.get(r.weaponId);
        if (u && p) {
          const g = async () => {
            await u.sheet._onRoll({
              "data-roll-type": "damage",
              "data-item-id": p.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "damage",
                "data-item-id": p.id
              }
            });
          }, m = await this.rollAndCapture(f, g, r.rollMode);
          m.success && await this.sendResponse({
            type: "ROLL_RESULT",
            rollMode: m.rollMode,
            requestId: i,
            actorId: f,
            total: m.total,
            isCriticalSuccess: m.isCriticalSuccess,
            isCriticalFailure: m.isCriticalFailure,
            label: `${p.name} (Damage)`,
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
          const p = async () => {
            await u.sheet._onRoll({
              "data-roll-type": "deathsave",
              "data-roll-title": "Death Save",
              type: "click",
              currentTarget: {
                "data-roll-type": "deathsave",
                "data-roll-title": "Death Save"
              }
            });
          }, g = await this.rollAndCapture(f, p, r.rollMode);
          if (g.success) {
            const m = u.system.derivedStats.deathsave || {};
            await this.sendResponse({
              type: "ROLL_RESULT",
              rollMode: g.rollMode,
              requestId: i,
              actorId: f,
              total: g.total,
              isCriticalSuccess: g.isCriticalSuccess,
              isCriticalFailure: g.isCriticalFailure,
              label: "Death Save",
              rawRoll: {
                total: g.total,
                isCriticalSuccess: g.isCriticalSuccess,
                isCriticalFailure: g.isCriticalFailure,
                label: g.label,
                resultTotal: (b = g.rawRoll) == null ? void 0 : b.resultTotal,
                rollTitle: (w = g.rawRoll) == null ? void 0 : w.rollTitle
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
        const u = game.actors.get(f), p = async () => {
          await u.sheet._onRoll({
            "data-roll-type": "facedown",
            "data-roll-title": "Face Down",
            type: "click",
            currentTarget: {
              "data-roll-type": "facedown",
              "data-roll-title": "Face Down"
            }
          });
        }, g = await this.rollAndCapture(f, p, r.rollMode);
        g.success && await this.sendResponse({
          type: "ROLL_RESULT",
          rollMode: g.rollMode,
          requestId: i,
          actorId: f,
          total: g.total,
          isCriticalSuccess: g.isCriticalSuccess,
          isCriticalFailure: g.isCriticalFailure,
          rawRoll: {
            total: g.total,
            isCriticalSuccess: g.isCriticalSuccess,
            isCriticalFailure: g.isCriticalFailure,
            label: g.label,
            resultTotal: (x = g.rawRoll) == null ? void 0 : x.resultTotal,
            rollTitle: (B = g.rawRoll) == null ? void 0 : B.rollTitle
          },
          success: !0
        });
        break;
      }
      case "INITIATIVE_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const p = async () => {
            await u.rollInitiative();
          }, g = await this.rollAndCapture(f, p, r.rollMode);
          g.success && await this.sendResponse({
            type: "ROLL_RESULT",
            rollMode: g.rollMode,
            requestId: i,
            actorId: f,
            total: g.total,
            isCriticalSuccess: g.isCriticalSuccess,
            isCriticalFailure: g.isCriticalFailure,
            label: "Initiative",
            rawRoll: {
              total: g.total,
              isCriticalSuccess: g.isCriticalSuccess,
              isCriticalFailure: g.isCriticalFailure,
              label: g.label,
              resultTotal: (K = g.rawRoll) == null ? void 0 : K.resultTotal,
              rollTitle: (J = g.rawRoll) == null ? void 0 : J.rollTitle
            },
            success: !0
          });
        }
        break;
      }
      case "PROGRAM_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const p = document.createElement("a");
          p.dataset.rollType = r.rollType, p.dataset.cyberdeckId = r.cyberdeckId, p.dataset.rollTitle = r.programName, p.dataset.interfaceAbility = r.programName, p.dataset.itemId = r.cyberdeckId, p.dataset.programId = r.programId, p.dataset.executionType = r.executionType;
          const g = async () => {
            await u.sheet._onRoll({
              type: "click",
              currentTarget: p
            });
          }, m = await this.rollAndCapture(f, g, r.rollMode);
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
              resultTotal: (re = m.rawRoll) == null ? void 0 : re.resultTotal,
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
          const p = u.items.getName(r.itemName);
          if (p) {
            const g = {
              "data-roll-type": "roleAbility",
              "data-roll-title": r.label,
              "data-item-id": p.id,
              type: "click",
              currentTarget: {
                "data-roll-type": "roleAbility",
                "data-roll-title": r.label,
                "data-item-id": p.id,
                "data-item-subtype": r.label
              }
            };
            r.isAbility && (g["data-roll-subtype"] = "subRoleAbility", g["data-role-name"] = r.label, g.currentTarget["data-roll-subtype"] = "subRoleAbility", g.currentTarget["data-role-name"] = r.label);
            const m = async () => {
              await u.sheet._onRoll(g);
            }, k = await this.rollAndCapture(f, m, r.rollMode);
            k.success && await this.sendResponse({
              type: "ROLL_RESULT",
              rollMode: k.rollMode,
              requestId: i,
              actorId: f,
              total: k.total,
              isCriticalSuccess: k.isCriticalSuccess,
              isCriticalFailure: k.isCriticalFailure,
              label: r.label,
              rawRoll: {
                total: k.total,
                isCriticalSuccess: k.isCriticalSuccess,
                isCriticalFailure: k.isCriticalFailure,
                label: k.label,
                resultTotal: (te = k.rawRoll) == null ? void 0 : te.resultTotal,
                rollTitle: (le = k.rawRoll) == null ? void 0 : le.rollTitle
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
          const p = u.items.getName(r.label);
          if (p) {
            const g = async () => {
              await u.sheet._onRoll({
                "data-roll-type": "skill",
                "data-roll-title": r.label,
                "data-item-id": p.id,
                type: "click",
                currentTarget: {
                  "data-roll-type": "skill",
                  "data-roll-title": r.label,
                  "data-item-id": p.id
                }
              });
            }, m = await this.rollAndCapture(f, g, r.rollMode);
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
                resultTotal: (ue = m.rawRoll) == null ? void 0 : ue.resultTotal,
                rollTitle: (xe = m.rawRoll) == null ? void 0 : xe.rollTitle
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
          const p = async () => {
            await u.sheet._onRoll({
              "data-roll-type": "stat",
              "data-roll-title": r.label,
              type: "click",
              currentTarget: {
                "data-roll-type": "stat",
                "data-roll-title": r.label
              }
            });
          }, g = await this.rollAndCapture(f, p, r.rollMode);
          g.success && await this.sendResponse({
            type: "ROLL_RESULT",
            rollMode: g.rollMode,
            requestId: i,
            actorId: f,
            total: g.total,
            isCriticalSuccess: g.isCriticalSuccess,
            isCriticalFailure: g.isCriticalFailure,
            label: r.label,
            rawRoll: {
              total: g.total,
              isCriticalSuccess: g.isCriticalSuccess,
              isCriticalFailure: g.isCriticalFailure,
              label: g.label,
              resultTotal: (me = g.rawRoll) == null ? void 0 : me.resultTotal,
              rollTitle: (ve = g.rawRoll) == null ? void 0 : ve.rollTitle
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
        const u = canvas.tokens.get(I);
        if (u) {
          let p = {};
          r.direction === "up" ? p.y = u.document.y - canvas.grid.size : r.direction === "down" ? p.y = u.document.y + canvas.grid.size : r.direction === "left" ? p.x = u.document.x - canvas.grid.size : r.direction === "right" && (p.x = u.document.x + canvas.grid.size), await u.document.update(p), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: I, success: !0, requestId: i });
        } else
          console.warn(`MOVE_TOKEN: Token ID ${I} not found.`), await this.sendResponse({ type: "CONFIRMATION", action: a, tokenId: I, success: !1, message: "Token not found", requestId: i });
        break;
      }
      case "RELOAD_WEAPON": {
        const u = game.actors.get(f);
        if (u) {
          const p = u.items.get(r.weaponId), g = r.ammoId ? u.items.get(r.ammoId) : null, m = async () => {
            await p.reload();
            const k = {
              [`items.${r.weaponId}.system.magazine`]: {
                value: p.system.magazine.value,
                max: p.system.magazine.max
              },
              [`items.${r.weaponId}.system.installedItems`]: {
                list: [...p.system.installedItems.list],
                slots: p.system.installedItems.slots,
                usedSlots: p.system.installedItems.usedSlots
              }
            };
            g && (k[`items.${g.id}.system.amount`] = g.system.amount), u.items.filter((C) => C.type === "ammo").forEach((C) => {
              k[`items.${C.id}.system.amount`] = C.system.amount;
            }), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: k, success: !0, requestId: i });
          };
          if (g) {
            let k = p.getInstalledItems("ammo");
            k && k.length > 0 && p.uninstallItems(k), setTimeout(function() {
              p.installItems([g]);
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
          const p = `system.${r.label}`;
          let g;
          if (r.operation === "inc") {
            const m = p.split(".");
            let k = u;
            for (let M = 0; M < m.length; M++)
              k = M === 0 ? k[m[M]] : k == null ? void 0 : k[m[M]];
            const U = Number(k) || 0, C = Number(r.delta) || 0;
            g = U + C;
          } else
            g = typeof r.value == "string" ? r.value : Number(r.value) || 0;
          await u.update({ [p]: g }), await this.sendResponse({ type: "SHEET_DELTA", actorId: f, delta: { [p]: g }, tab: "stats", success: !0, requestId: i });
        }
        break;
      }
      case "ATTACK_ROLL": {
        const u = game.actors.get(f);
        if (u) {
          const p = r.weaponId, g = r.fireMode, m = canvas.tokens.get(r.targetId), k = "firetype-" + p, U = "cyberpunk-red-core";
          let C = "";
          switch (g) {
            case "Auto":
              C = "autofire";
              break;
            case "Suppress":
              C = "suppressive";
              break;
            case "Aimed":
              C = "aimed", await u.setFlag(U, "aimedLocation", "head");
              break;
            default:
              C = "";
              break;
          }
          m && m.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), C === "" ? await u.unsetFlag(U, k) : await u.setFlag(U, k, C);
          const M = document.createElement("a");
          M.dataset.rollType = "attack", M.dataset.itemId = p, M.dataset.rollTitle = g + " Attack";
          const q = async () => {
            await u.sheet._onRoll({
              preventDefault: () => {
              },
              currentTarget: M,
              type: "click"
            }, { showDialog: !0 });
          };
          let z = null;
          if (m) {
            const ne = canvas.tokens.get(I) || ((Ee = u.getActiveTokens()) == null ? void 0 : Ee[0]) || canvas.tokens.placeables.find((W) => {
              var ee;
              return ((ee = W.actor) == null ? void 0 : ee.id) === u.id;
            });
            if (ne) {
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
              }, ee = [6, 12, 25, 50, 100, 200, 400, 800], ye = m.center.x - ne.center.x, be = m.center.y - ne.center.y, G = Math.sqrt(Math.pow(ye, 2) + Math.pow(be, 2)), fe = Math.ceil(G / (((Oe = canvas.grid) == null ? void 0 : Oe.size) || 128)), se = u.items.get(p), de = {
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
              }, F = de[(Me = se == null ? void 0 : se.system) == null ? void 0 : Me.weaponType] || de[(Ne = se == null ? void 0 : se.system) == null ? void 0 : Ne.variety] || "Pistol", ae = ee.findIndex((Ce) => fe <= Ce);
              let ke = ae !== -1 ? W[F][ae] : 99;
              Array.isArray(W[F]) && typeof W[F][0] == "string" && (ke = W[F][Math.min(ae !== -1 ? ae : 0, W[F].length - 1)]), z = ke === 99 ? "Out of Range" : ke;
            }
          }
          const V = await this.rollAndCapture(f, q, r.rollMode);
          if (V.success) {
            let ne = null;
            typeof z == "number" ? ne = V.total >= z ? "Hit" : "Miss" : z === "Out of Range" && (ne = "Miss");
            const W = ((Fe = (Ie = (De = u.items.get(p)) == null ? void 0 : De.system) == null ? void 0 : Ie.magazine) == null ? void 0 : Fe.value) ?? null;
            await this.sendResponse({
              type: "ROLL_RESULT",
              rollMode: V.rollMode,
              requestId: i,
              actorId: f,
              total: V.total,
              isCriticalSuccess: V.isCriticalSuccess,
              isCriticalFailure: V.isCriticalFailure,
              label: g + " Attack",
              rawRoll: {
                total: V.total,
                isCriticalSuccess: V.isCriticalSuccess,
                isCriticalFailure: V.isCriticalFailure,
                label: V.label,
                resultTotal: (je = V.rawRoll) == null ? void 0 : je.resultTotal,
                rollTitle: (he = V.rawRoll) == null ? void 0 : he.rollTitle
              },
              dv: z,
              ammoTo: W,
              outcome: ne,
              success: !0
            });
          }
        }
        break;
      }
      case "GET_ROLL_MODIFIERS": {
        const u = game.actors.get(f);
        if (!u) return;
        const p = r.weaponId, g = p ? u.items.get(p) : null;
        let m = "None", k = 0, U = "None", C = 0, M = 0;
        if (g) {
          m = g.system.weaponSkill;
          const G = u.items.find((fe) => fe.type === "skill" && fe.name === m);
          k = G && Number(G.system.level) || 0, U = G && G.system.stat || "ref", C = Number((Ue = u.system.stats[U]) == null ? void 0 : Ue.value) || 0, M = Number(g.system.attackmod) || 0;
        }
        let q = 0;
        const z = [], V = Number(u.system.derivedStats.hp.value) || 0, ne = Number(u.system.derivedStats.seriouslyWounded) || 0, W = u.items.find((G) => G.name === "Stim" && G.type === "drug"), ee = W && W.effects.some((G) => G.disabled === !1);
        if (V <= 0)
          q -= 4, z.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
        else if (V <= ne) {
          const G = ee ? 0 : -2;
          q += G, z.push({
            title: ee ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
            penalty: G,
            description: ee ? "Ignoring penalty due to Stim drug." : "All actions at -2."
          });
        }
        u.items.filter((G) => G.type === "criticalInjury").forEach((G) => {
          var F;
          const fe = G.name || "Injury", se = (((F = G.system.description) == null ? void 0 : F.value) || "").replace(/<[^>]*>/g, "");
          let de = 0;
          if (G.effects && G.effects.length > 0 && G.effects.forEach((ae) => {
            !ae.disabled && ae.changes && ae.changes.forEach((ke) => {
              const Ce = parseInt(ke.value);
              isNaN(Ce) || (de += Ce);
            });
          }), de === 0) {
            const ae = String(fe).toLowerCase();
            (se.includes("-2") || ae.includes("arm") || ae.includes("eye")) && (de = -2);
          }
          q += de, z.push({ title: fe, description: se, penalty: de });
        });
        const be = {
          actorName: u.name,
          baseBonus: C + k + M,
          breakdown: {
            statName: U,
            statValue: C,
            skillName: m,
            skillLevel: k,
            weaponAcc: M
          },
          totalPenalty: q,
          finalModifier: C + k + M + q,
          injuries: z
        };
        await this.sendResponse({ type: "ROLL_MODIFIERS_DATA", result: be, requestId: i });
        break;
      }
      case "GET_DV_INFO": {
        const u = canvas.tokens.get(I), p = r.targetTokenId || ((He = Array.from(game.user.targets)[0]) == null ? void 0 : He.id), g = canvas.tokens.get(p), m = r.weaponId;
        if (u && g) {
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
          }, U = [6, 12, 25, 50, 100, 200, 400, 800], C = g.center.x - u.center.x, M = g.center.y - u.center.y, q = Math.sqrt(Math.pow(C, 2) + Math.pow(M, 2)), z = Math.ceil(q / 128), V = u.actor.items.get(m);
          if (!V) {
            console.warn(`GET_DV_INFO: Weapon ID ${m} not found on actor ${u.actor.name}.`), await this.sendResponse({ type: "DV_INFO_DATA", result: null, requestId: i });
            break;
          }
          const ne = {
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
          }, W = ne[V.system.weaponType] || ne[V.system.variety] || "Pistol", ee = U.findIndex((G) => z <= G);
          let ye = ee !== -1 ? k[W][ee] : 99;
          Array.isArray(k[W]) && typeof k[W][0] == "string" && (ye = k[W][Math.min(ee !== -1 ? ee : 0, k[W].length - 1)]);
          const be = {
            targetName: g.name,
            distanceMeters: z,
            weaponCategory: W,
            dv: ye === 99 ? "Out of Range" : ye
          };
          await this.sendResponse({ type: "DV_INFO_DATA", result: be, requestId: i });
        } else
          console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!u}, Target: ${!!g}`), await this.sendResponse({ type: "DV_INFO_DATA", result: null, requestId: i });
        break;
      }
      case "LIST_VISIBLE_TOKENS": {
        const u = canvas.tokens.get(I);
        let p = [];
        if (u) {
          const g = canvas.grid.size, m = canvas.dimensions, k = u.center.x, U = u.center.y;
          p = canvas.tokens.placeables.filter((C) => {
            const M = !C.document.hidden, q = C.actor && (C.actor.type === "character" || C.actor.type === "mook"), z = C.x >= m.sceneX && C.x <= m.sceneX + m.sceneWidth && C.y >= m.sceneY && C.y <= m.sceneY + m.sceneHeight;
            return M && q && z && C.id !== u.id;
          }).map((C) => {
            const M = C.center.x - k, q = C.center.y - U, V = (Math.sqrt(Math.pow(M, 2) + Math.pow(q, 2)) / g).toFixed(2);
            return {
              name: C.name,
              id: C.id,
              distanceM: parseFloat(V),
              type: C.actor.type
            };
          }).sort((C, M) => C.distanceM - M.distanceM);
        } else
          console.warn(`LIST_VISIBLE_TOKENS: Token ID ${I} not found.`);
        await this.sendResponse({ type: "VISIBLE_TOKENS_DATA", tokens: p, requestId: i });
        break;
      }
      case "GET_ACTOR": {
        let u = r.actorId, p = game.user;
        const g = r.agentLink || r.agent_link || r.foundryUserId || r.requestId;
        if (g && (p = game.users.find((m) => m.getFlag(L, "agent-link") === g) || game.users.get(g) || (g === game.user.id ? game.user : null)), p || (p = game.user), !u) {
          const m = p.character;
          m && (u = m.id);
        }
        if (u !== null) {
          const m = game.actors.get(u);
          if (m) {
            const k = m.toObject(), U = {
              _id: m.id,
              name: m.name,
              type: m.type,
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
            await this.sendResponse({ type: "ACTOR_DATA", actor: U, requestId: i, isGM: p.isGM, agentLink: p.getFlag(L, "agent-link") || p.id });
            break;
          }
        }
        await this.sendResponse({ type: "ACTOR_DATA", actor: !1, requestId: i, isGM: p.isGM, agentLink: p.getFlag(L, "agent-link") || p.id });
        break;
      }
      case "GET_ACTORS": {
        let u = game.user;
        const p = r.agentLink || r.agent_link || r.foundryUserId || r.requestId;
        p && (u = game.users.find((m) => m.getFlag(L, "agent-link") === p) || game.users.get(p) || (p === game.user.id ? game.user : null)), u || (u = game.user);
        let g = [];
        u.isGM ? g = game.actors.filter((m) => m.type === "character" || m.type === "mook").map((m) => {
          var U, C;
          const k = (U = Object.entries(m.ownership || {}).find(([M, q]) => {
            const z = game.users.get(M);
            return z && !z.isGM && q >= 3;
          })) == null ? void 0 : U[0];
          return {
            name: m.name,
            actorId: m.id,
            tokenId: null,
            agentLink: (k ? (C = game.users.get(k)) == null ? void 0 : C.getFlag(L, "agent-link") : null) || k || u.getFlag(L, "agent-link") || u.id
          };
        }) : (g = canvas.tokens.placeables.filter((m) => m.actor && (m.actor.type === "character" || m.actor.type === "mook")).filter((m) => m.actor.testUserPermission(u, "OWNER")).map((m) => {
          var U, C;
          const k = (U = Object.entries(m.actor.ownership || {}).find(([M, q]) => {
            const z = game.users.get(M);
            return z && !z.isGM && q >= 3;
          })) == null ? void 0 : U[0];
          return {
            name: m.name,
            actorId: m.actor.id,
            tokenId: m.id,
            agentLink: (k ? (C = game.users.get(k)) == null ? void 0 : C.getFlag(L, "agent-link") : null) || k || null
          };
        }), u.character && (g.some((k) => k.actorId === u.character.id) || g.push({
          name: u.character.name,
          actorId: u.character.id,
          tokenId: null,
          agentLink: u.getFlag(L, "agent-link") || u.id
        })), !u.isGM && u.character && (g = g.filter((m) => m.actorId === u.character.id))), await this.sendResponse({ type: "ACTORS_DATA", actors: g, requestId: i, isGM: u.isGM, agentLink: u.getFlag(L, "agent-link") || u.id });
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
function ot() {
  game.settings.settings.has(`${L}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
game.ready ? (ot(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks()) : (Hooks.once("init", () => {
  ot();
}), Hooks.once("ready", () => {
  ot(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks();
}));
