var Yi = Object.defineProperty;
var Qi = (a, e, r) => e in a ? Yi(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r;
var rt = (a, e, r) => Qi(a, typeof e != "symbol" ? e + "" : e, r);
import.meta.hot && import.meta.hot.accept((a) => {
  console.log("Hot reloading module...");
});
function Zi(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var an = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(a, e) {
  (function(i, n) {
    a.exports = n();
  })(window, function() {
    return (
      /******/
      function(r) {
        var i = {};
        function n(s) {
          if (i[s])
            return i[s].exports;
          var l = i[s] = {
            /******/
            i: s,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[s].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
        }
        return n.m = r, n.c = i, n.d = function(s, l, h) {
          n.o(s, l) || Object.defineProperty(s, l, { enumerable: !0, get: h });
        }, n.r = function(s) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
        }, n.t = function(s, l) {
          if (l & 1 && (s = n(s)), l & 8 || l & 4 && typeof s == "object" && s && s.__esModule) return s;
          var h = /* @__PURE__ */ Object.create(null);
          if (n.r(h), Object.defineProperty(h, "default", { enumerable: !0, value: s }), l & 2 && typeof s != "string") for (var u in s) n.d(h, u, (function(p) {
            return s[p];
          }).bind(null, u));
          return h;
        }, n.n = function(s) {
          var l = s && s.__esModule ? (
            /******/
            function() {
              return s.default;
            }
          ) : (
            /******/
            function() {
              return s;
            }
          );
          return n.d(l, "a", l), l;
        }, n.o = function(s, l) {
          return Object.prototype.hasOwnProperty.call(s, l);
        }, n.p = "", n(n.s = 2);
      }([
        /* 0 */
        /***/
        function(r, i, n) {
          var s = this && this.__extends || /* @__PURE__ */ function() {
            var _ = function(k, v) {
              return _ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, I) {
                S.__proto__ = I;
              } || function(S, I) {
                for (var E in I) I.hasOwnProperty(E) && (S[E] = I[E]);
              }, _(k, v);
            };
            return function(k, v) {
              _(k, v);
              function S() {
                this.constructor = k;
              }
              k.prototype = v === null ? Object.create(v) : (S.prototype = v.prototype, new S());
            };
          }();
          Object.defineProperty(i, "__esModule", { value: !0 });
          var l = 256, h = (
            /** @class */
            function() {
              function _(k) {
                k === void 0 && (k = "="), this._paddingCharacter = k;
              }
              return _.prototype.encodedLength = function(k) {
                return this._paddingCharacter ? (k + 2) / 3 * 4 | 0 : (k * 8 + 5) / 6 | 0;
              }, _.prototype.encode = function(k) {
                for (var v = "", S = 0; S < k.length - 2; S += 3) {
                  var I = k[S] << 16 | k[S + 1] << 8 | k[S + 2];
                  v += this._encodeByte(I >>> 3 * 6 & 63), v += this._encodeByte(I >>> 2 * 6 & 63), v += this._encodeByte(I >>> 1 * 6 & 63), v += this._encodeByte(I >>> 0 * 6 & 63);
                }
                var E = k.length - S;
                if (E > 0) {
                  var I = k[S] << 16 | (E === 2 ? k[S + 1] << 8 : 0);
                  v += this._encodeByte(I >>> 3 * 6 & 63), v += this._encodeByte(I >>> 2 * 6 & 63), E === 2 ? v += this._encodeByte(I >>> 1 * 6 & 63) : v += this._paddingCharacter || "", v += this._paddingCharacter || "";
                }
                return v;
              }, _.prototype.maxDecodedLength = function(k) {
                return this._paddingCharacter ? k / 4 * 3 | 0 : (k * 6 + 7) / 8 | 0;
              }, _.prototype.decodedLength = function(k) {
                return this.maxDecodedLength(k.length - this._getPaddingLength(k));
              }, _.prototype.decode = function(k) {
                if (k.length === 0)
                  return new Uint8Array(0);
                for (var v = this._getPaddingLength(k), S = k.length - v, I = new Uint8Array(this.maxDecodedLength(S)), E = 0, R = 0, P = 0, O = 0, B = 0, U = 0, F = 0; R < S - 4; R += 4)
                  O = this._decodeChar(k.charCodeAt(R + 0)), B = this._decodeChar(k.charCodeAt(R + 1)), U = this._decodeChar(k.charCodeAt(R + 2)), F = this._decodeChar(k.charCodeAt(R + 3)), I[E++] = O << 2 | B >>> 4, I[E++] = B << 4 | U >>> 2, I[E++] = U << 6 | F, P |= O & l, P |= B & l, P |= U & l, P |= F & l;
                if (R < S - 1 && (O = this._decodeChar(k.charCodeAt(R)), B = this._decodeChar(k.charCodeAt(R + 1)), I[E++] = O << 2 | B >>> 4, P |= O & l, P |= B & l), R < S - 2 && (U = this._decodeChar(k.charCodeAt(R + 2)), I[E++] = B << 4 | U >>> 2, P |= U & l), R < S - 3 && (F = this._decodeChar(k.charCodeAt(R + 3)), I[E++] = U << 6 | F, P |= F & l), P !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return I;
              }, _.prototype._encodeByte = function(k) {
                var v = k;
                return v += 65, v += 25 - k >>> 8 & 6, v += 51 - k >>> 8 & -75, v += 61 - k >>> 8 & -15, v += 62 - k >>> 8 & 3, String.fromCharCode(v);
              }, _.prototype._decodeChar = function(k) {
                var v = l;
                return v += (42 - k & k - 44) >>> 8 & -l + k - 43 + 62, v += (46 - k & k - 48) >>> 8 & -l + k - 47 + 63, v += (47 - k & k - 58) >>> 8 & -l + k - 48 + 52, v += (64 - k & k - 91) >>> 8 & -l + k - 65 + 0, v += (96 - k & k - 123) >>> 8 & -l + k - 97 + 26, v;
              }, _.prototype._getPaddingLength = function(k) {
                var v = 0;
                if (this._paddingCharacter) {
                  for (var S = k.length - 1; S >= 0 && k[S] === this._paddingCharacter; S--)
                    v++;
                  if (k.length < 4 || v > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return v;
              }, _;
            }()
          );
          i.Coder = h;
          var u = new h();
          function p(_) {
            return u.encode(_);
          }
          i.encode = p;
          function g(_) {
            return u.decode(_);
          }
          i.decode = g;
          var m = (
            /** @class */
            function(_) {
              s(k, _);
              function k() {
                return _ !== null && _.apply(this, arguments) || this;
              }
              return k.prototype._encodeByte = function(v) {
                var S = v;
                return S += 65, S += 25 - v >>> 8 & 6, S += 51 - v >>> 8 & -75, S += 61 - v >>> 8 & -13, S += 62 - v >>> 8 & 49, String.fromCharCode(S);
              }, k.prototype._decodeChar = function(v) {
                var S = l;
                return S += (44 - v & v - 46) >>> 8 & -l + v - 45 + 62, S += (94 - v & v - 96) >>> 8 & -l + v - 95 + 63, S += (47 - v & v - 58) >>> 8 & -l + v - 48 + 52, S += (64 - v & v - 91) >>> 8 & -l + v - 65 + 0, S += (96 - v & v - 123) >>> 8 & -l + v - 97 + 26, S;
              }, k;
            }(h)
          );
          i.URLSafeCoder = m;
          var b = new m();
          function y(_) {
            return b.encode(_);
          }
          i.encodeURLSafe = y;
          function C(_) {
            return b.decode(_);
          }
          i.decodeURLSafe = C, i.encodedLength = function(_) {
            return u.encodedLength(_);
          }, i.maxDecodedLength = function(_) {
            return u.maxDecodedLength(_);
          }, i.decodedLength = function(_) {
            return u.decodedLength(_);
          };
        },
        /* 1 */
        /***/
        function(r, i, n) {
          Object.defineProperty(i, "__esModule", { value: !0 });
          var s = "utf8: invalid string", l = "utf8: invalid source encoding";
          function h(g) {
            for (var m = new Uint8Array(u(g)), b = 0, y = 0; y < g.length; y++) {
              var C = g.charCodeAt(y);
              C < 128 ? m[b++] = C : C < 2048 ? (m[b++] = 192 | C >> 6, m[b++] = 128 | C & 63) : C < 55296 ? (m[b++] = 224 | C >> 12, m[b++] = 128 | C >> 6 & 63, m[b++] = 128 | C & 63) : (y++, C = (C & 1023) << 10, C |= g.charCodeAt(y) & 1023, C += 65536, m[b++] = 240 | C >> 18, m[b++] = 128 | C >> 12 & 63, m[b++] = 128 | C >> 6 & 63, m[b++] = 128 | C & 63);
            }
            return m;
          }
          i.encode = h;
          function u(g) {
            for (var m = 0, b = 0; b < g.length; b++) {
              var y = g.charCodeAt(b);
              if (y < 128)
                m += 1;
              else if (y < 2048)
                m += 2;
              else if (y < 55296)
                m += 3;
              else if (y <= 57343) {
                if (b >= g.length - 1)
                  throw new Error(s);
                b++, m += 4;
              } else
                throw new Error(s);
            }
            return m;
          }
          i.encodedLength = u;
          function p(g) {
            for (var m = [], b = 0; b < g.length; b++) {
              var y = g[b];
              if (y & 128) {
                var C = void 0;
                if (y < 224) {
                  if (b >= g.length)
                    throw new Error(l);
                  var _ = g[++b];
                  if ((_ & 192) !== 128)
                    throw new Error(l);
                  y = (y & 31) << 6 | _ & 63, C = 128;
                } else if (y < 240) {
                  if (b >= g.length - 1)
                    throw new Error(l);
                  var _ = g[++b], k = g[++b];
                  if ((_ & 192) !== 128 || (k & 192) !== 128)
                    throw new Error(l);
                  y = (y & 15) << 12 | (_ & 63) << 6 | k & 63, C = 2048;
                } else if (y < 248) {
                  if (b >= g.length - 2)
                    throw new Error(l);
                  var _ = g[++b], k = g[++b], v = g[++b];
                  if ((_ & 192) !== 128 || (k & 192) !== 128 || (v & 192) !== 128)
                    throw new Error(l);
                  y = (y & 15) << 18 | (_ & 63) << 12 | (k & 63) << 6 | v & 63, C = 65536;
                } else
                  throw new Error(l);
                if (y < C || y >= 55296 && y <= 57343)
                  throw new Error(l);
                if (y >= 65536) {
                  if (y > 1114111)
                    throw new Error(l);
                  y -= 65536, m.push(String.fromCharCode(55296 | y >> 10)), y = 56320 | y & 1023;
                }
              }
              m.push(String.fromCharCode(y));
            }
            return m.join("");
          }
          i.decode = p;
        },
        /* 2 */
        /***/
        function(r, i, n) {
          r.exports = n(3).default;
        },
        /* 3 */
        /***/
        function(r, i, n) {
          n.r(i);
          class s {
            constructor(t, o) {
              this.lastId = 0, this.prefix = t, this.name = o;
            }
            create(t) {
              this.lastId++;
              var o = this.lastId, d = this.prefix + o, f = this.name + "[" + o + "]", w = !1, T = function() {
                w || (t.apply(null, arguments), w = !0);
              };
              return this[o] = T, { number: o, id: d, name: f, callback: T };
            }
            remove(t) {
              delete this[t.number];
            }
          }
          var l = new s("_pusher_script_", "Pusher.ScriptReceivers"), h = {
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
          }, u = h;
          class p {
            constructor(t) {
              this.options = t, this.receivers = t.receivers || l, this.loading = {};
            }
            load(t, o, d) {
              var f = this;
              if (f.loading[t] && f.loading[t].length > 0)
                f.loading[t].push(d);
              else {
                f.loading[t] = [d];
                var w = N.createScriptRequest(f.getPath(t, o)), T = f.receivers.create(function(L) {
                  if (f.receivers.remove(T), f.loading[t]) {
                    var M = f.loading[t];
                    delete f.loading[t];
                    for (var x = function(H) {
                      H || w.cleanup();
                    }, D = 0; D < M.length; D++)
                      M[D](L, x);
                  }
                });
                w.send(T);
              }
            }
            getRoot(t) {
              var o, d = N.getDocument().location.protocol;
              return t && t.useTLS || d === "https:" ? o = this.options.cdn_https : o = this.options.cdn_http, o.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(t, o) {
              return this.getRoot(o) + "/" + t + this.options.suffix + ".js";
            }
          }
          var g = new s("_pusher_dependencies", "Pusher.DependenciesReceivers"), m = new p({
            cdn_http: u.cdn_http,
            cdn_https: u.cdn_https,
            version: u.VERSION,
            suffix: u.dependency_suffix,
            receivers: g
          });
          const b = {
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
          var C = { buildLogSuffix: function(c) {
            const t = "See:", o = b.urls[c];
            if (!o)
              return "";
            let d;
            return o.fullUrl ? d = o.fullUrl : o.path && (d = b.baseUrl + o.path), d ? `${t} ${d}` : "";
          } }, _;
          (function(c) {
            c.UserAuthentication = "user-authentication", c.ChannelAuthorization = "channel-authorization";
          })(_ || (_ = {}));
          class k extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class v extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class S extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class I extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class E extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class R extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class P extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class O extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class B extends Error {
            constructor(t, o) {
              super(o), this.status = t, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var F = function(c, t, o, d, f) {
            const w = N.createXHR();
            w.open("POST", o.endpoint, !0), w.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var T in o.headers)
              w.setRequestHeader(T, o.headers[T]);
            if (o.headersProvider != null) {
              let L = o.headersProvider();
              for (var T in L)
                w.setRequestHeader(T, L[T]);
            }
            return w.onreadystatechange = function() {
              if (w.readyState === 4)
                if (w.status === 200) {
                  let L, M = !1;
                  try {
                    L = JSON.parse(w.responseText), M = !0;
                  } catch {
                    f(new B(200, `JSON returned from ${d.toString()} endpoint was invalid, yet status code was 200. Data was: ${w.responseText}`), null);
                  }
                  M && f(null, L);
                } else {
                  let L = "";
                  switch (d) {
                    case _.UserAuthentication:
                      L = C.buildLogSuffix("authenticationEndpoint");
                      break;
                    case _.ChannelAuthorization:
                      L = `Clients must be authorized to join private or presence channels. ${C.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  f(new B(w.status, `Unable to retrieve auth string from ${d.toString()} endpoint - received status: ${w.status} from ${o.endpoint}. ${L}`), null);
                }
            }, w.send(t), w;
          };
          function Z(c) {
            return $n(zn(c));
          }
          var W = String.fromCharCode, V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ie = function(c) {
            var t = c.charCodeAt(0);
            return t < 128 ? c : t < 2048 ? W(192 | t >>> 6) + W(128 | t & 63) : W(224 | t >>> 12 & 15) + W(128 | t >>> 6 & 63) + W(128 | t & 63);
          }, zn = function(c) {
            return c.replace(/[^\x00-\x7F]/g, Ie);
          }, qn = function(c) {
            var t = [0, 2, 1][c.length % 3], o = c.charCodeAt(0) << 16 | (c.length > 1 ? c.charCodeAt(1) : 0) << 8 | (c.length > 2 ? c.charCodeAt(2) : 0), d = [
              V.charAt(o >>> 18),
              V.charAt(o >>> 12 & 63),
              t >= 2 ? "=" : V.charAt(o >>> 6 & 63),
              t >= 1 ? "=" : V.charAt(o & 63)
            ];
            return d.join("");
          }, $n = window.btoa || function(c) {
            return c.replace(/[\s\S]{1,3}/g, qn);
          };
          class Gn {
            constructor(t, o, d, f) {
              this.clear = o, this.timer = t(() => {
                this.timer && (this.timer = f(this.timer));
              }, d);
            }
            isRunning() {
              return this.timer !== null;
            }
            ensureAborted() {
              this.timer && (this.clear(this.timer), this.timer = null);
            }
          }
          var St = Gn;
          function Vn(c) {
            window.clearTimeout(c);
          }
          function Kn(c) {
            window.clearInterval(c);
          }
          class oe extends St {
            constructor(t, o) {
              super(setTimeout, Vn, t, function(d) {
                return o(), null;
              });
            }
          }
          class Wn extends St {
            constructor(t, o) {
              super(setInterval, Kn, t, function(d) {
                return o(), d;
              });
            }
          }
          var Jn = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(c) {
              return new oe(0, c);
            },
            method(c, ...t) {
              var o = Array.prototype.slice.call(arguments, 1);
              return function(d) {
                return d[c].apply(d, o.concat(arguments));
              };
            }
          }, K = Jn;
          function J(c, ...t) {
            for (var o = 0; o < t.length; o++) {
              var d = t[o];
              for (var f in d)
                d[f] && d[f].constructor && d[f].constructor === Object ? c[f] = J(c[f] || {}, d[f]) : c[f] = d[f];
            }
            return c;
          }
          function Xn() {
            for (var c = ["Pusher"], t = 0; t < arguments.length; t++)
              typeof arguments[t] == "string" ? c.push(arguments[t]) : c.push(Re(arguments[t]));
            return c.join(" : ");
          }
          function Tt(c, t) {
            var o = Array.prototype.indexOf;
            if (c === null)
              return -1;
            if (o && c.indexOf === o)
              return c.indexOf(t);
            for (var d = 0, f = c.length; d < f; d++)
              if (c[d] === t)
                return d;
            return -1;
          }
          function te(c, t) {
            for (var o in c)
              Object.prototype.hasOwnProperty.call(c, o) && t(c[o], o, c);
          }
          function At(c) {
            var t = [];
            return te(c, function(o, d) {
              t.push(d);
            }), t;
          }
          function Yn(c) {
            var t = [];
            return te(c, function(o) {
              t.push(o);
            }), t;
          }
          function ye(c, t, o) {
            for (var d = 0; d < c.length; d++)
              t.call(o || window, c[d], d, c);
          }
          function It(c, t) {
            for (var o = [], d = 0; d < c.length; d++)
              o.push(t(c[d], d, c, o));
            return o;
          }
          function Qn(c, t) {
            var o = {};
            return te(c, function(d, f) {
              o[f] = t(d);
            }), o;
          }
          function Rt(c, t) {
            t = t || function(f) {
              return !!f;
            };
            for (var o = [], d = 0; d < c.length; d++)
              t(c[d], d, c, o) && o.push(c[d]);
            return o;
          }
          function Et(c, t) {
            var o = {};
            return te(c, function(d, f) {
              (t && t(d, f, c, o) || d) && (o[f] = d);
            }), o;
          }
          function Zn(c) {
            var t = [];
            return te(c, function(o, d) {
              t.push([d, o]);
            }), t;
          }
          function Lt(c, t) {
            for (var o = 0; o < c.length; o++)
              if (t(c[o], o, c))
                return !0;
            return !1;
          }
          function er(c, t) {
            for (var o = 0; o < c.length; o++)
              if (!t(c[o], o, c))
                return !1;
            return !0;
          }
          function tr(c) {
            return Qn(c, function(t) {
              return typeof t == "object" && (t = Re(t)), encodeURIComponent(Z(t.toString()));
            });
          }
          function nr(c) {
            var t = Et(c, function(d) {
              return d !== void 0;
            }), o = It(Zn(tr(t)), K.method("join", "=")).join("&");
            return o;
          }
          function rr(c) {
            var t = [], o = [];
            return function d(f, w) {
              var T, L, M;
              switch (typeof f) {
                case "object":
                  if (!f)
                    return null;
                  for (T = 0; T < t.length; T += 1)
                    if (t[T] === f)
                      return { $ref: o[T] };
                  if (t.push(f), o.push(w), Object.prototype.toString.apply(f) === "[object Array]")
                    for (M = [], T = 0; T < f.length; T += 1)
                      M[T] = d(f[T], w + "[" + T + "]");
                  else {
                    M = {};
                    for (L in f)
                      Object.prototype.hasOwnProperty.call(f, L) && (M[L] = d(f[L], w + "[" + JSON.stringify(L) + "]"));
                  }
                  return M;
                case "number":
                case "string":
                case "boolean":
                  return f;
              }
            }(c, "$");
          }
          function Re(c) {
            try {
              return JSON.stringify(c);
            } catch {
              return JSON.stringify(rr(c));
            }
          }
          class ir {
            constructor() {
              this.globalLog = (t) => {
                window.console && window.console.log && window.console.log(t);
              };
            }
            debug(...t) {
              this.log(this.globalLog, t);
            }
            warn(...t) {
              this.log(this.globalLogWarn, t);
            }
            error(...t) {
              this.log(this.globalLogError, t);
            }
            globalLogWarn(t) {
              window.console && window.console.warn ? window.console.warn(t) : this.globalLog(t);
            }
            globalLogError(t) {
              window.console && window.console.error ? window.console.error(t) : this.globalLogWarn(t);
            }
            log(t, ...o) {
              var d = Xn.apply(this, arguments);
              et.log ? et.log(d) : et.logToConsole && t.bind(this)(d);
            }
          }
          var j = new ir(), sr = function(c, t, o, d, f) {
            (o.headers !== void 0 || o.headersProvider != null) && j.warn(`To send headers with the ${d.toString()} request, you must use AJAX, rather than JSONP.`);
            var w = c.nextAuthCallbackID.toString();
            c.nextAuthCallbackID++;
            var T = c.getDocument(), L = T.createElement("script");
            c.auth_callbacks[w] = function(D) {
              f(null, D);
            };
            var M = "Pusher.auth_callbacks['" + w + "']";
            L.src = o.endpoint + "?callback=" + encodeURIComponent(M) + "&" + t;
            var x = T.getElementsByTagName("head")[0] || T.documentElement;
            x.insertBefore(L, x.firstChild);
          }, or = sr;
          class ar {
            constructor(t) {
              this.src = t;
            }
            send(t) {
              var o = this, d = "Error loading " + o.src;
              o.script = document.createElement("script"), o.script.id = t.id, o.script.src = o.src, o.script.type = "text/javascript", o.script.charset = "UTF-8", o.script.addEventListener ? (o.script.onerror = function() {
                t.callback(d);
              }, o.script.onload = function() {
                t.callback(null);
              }) : o.script.onreadystatechange = function() {
                (o.script.readyState === "loaded" || o.script.readyState === "complete") && t.callback(null);
              }, o.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (o.errorScript = document.createElement("script"), o.errorScript.id = t.id + "_error", o.errorScript.text = t.name + "('" + d + "');", o.script.async = o.errorScript.async = !1) : o.script.async = !0;
              var f = document.getElementsByTagName("head")[0];
              f.insertBefore(o.script, f.firstChild), o.errorScript && f.insertBefore(o.errorScript, o.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class cr {
            constructor(t, o) {
              this.url = t, this.data = o;
            }
            send(t) {
              if (!this.request) {
                var o = nr(this.data), d = this.url + "/" + t.number + "?" + o;
                this.request = N.createScriptRequest(d), this.request.send(t);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var lr = function(c, t) {
            return function(o, d) {
              var f = "http" + (t ? "s" : "") + "://", w = f + (c.host || c.options.host) + c.options.path, T = N.createJSONPRequest(w, o), L = N.ScriptReceivers.create(function(M, x) {
                l.remove(L), T.cleanup(), x && x.host && (c.host = x.host), d && d(M, x);
              });
              T.send(L);
            };
          }, ur = {
            name: "jsonp",
            getAgent: lr
          }, hr = ur;
          function $e(c, t, o) {
            var d = c + (t.useTLS ? "s" : ""), f = t.useTLS ? t.hostTLS : t.hostNonTLS;
            return d + "://" + f + o;
          }
          function Ge(c, t) {
            var o = "/app/" + c, d = "?protocol=" + u.PROTOCOL + "&client=js&version=" + u.VERSION + (t ? "&" + t : "");
            return o + d;
          }
          var dr = {
            getInitial: function(c, t) {
              var o = (t.httpPath || "") + Ge(c, "flash=false");
              return $e("ws", t, o);
            }
          }, fr = {
            getInitial: function(c, t) {
              var o = (t.httpPath || "/pusher") + Ge(c);
              return $e("http", t, o);
            }
          }, pr = {
            getInitial: function(c, t) {
              return $e("http", t, t.httpPath || "/pusher");
            },
            getPath: function(c, t) {
              return Ge(c);
            }
          };
          class gr {
            constructor() {
              this._callbacks = {};
            }
            get(t) {
              return this._callbacks[Ve(t)];
            }
            add(t, o, d) {
              var f = Ve(t);
              this._callbacks[f] = this._callbacks[f] || [], this._callbacks[f].push({
                fn: o,
                context: d
              });
            }
            remove(t, o, d) {
              if (!t && !o && !d) {
                this._callbacks = {};
                return;
              }
              var f = t ? [Ve(t)] : At(this._callbacks);
              o || d ? this.removeCallback(f, o, d) : this.removeAllCallbacks(f);
            }
            removeCallback(t, o, d) {
              ye(t, function(f) {
                this._callbacks[f] = Rt(this._callbacks[f] || [], function(w) {
                  return o && o !== w.fn || d && d !== w.context;
                }), this._callbacks[f].length === 0 && delete this._callbacks[f];
              }, this);
            }
            removeAllCallbacks(t) {
              ye(t, function(o) {
                delete this._callbacks[o];
              }, this);
            }
          }
          function Ve(c) {
            return "_" + c;
          }
          class ne {
            constructor(t) {
              this.callbacks = new gr(), this.global_callbacks = [], this.failThrough = t;
            }
            bind(t, o, d) {
              return this.callbacks.add(t, o, d), this;
            }
            bind_global(t) {
              return this.global_callbacks.push(t), this;
            }
            unbind(t, o, d) {
              return this.callbacks.remove(t, o, d), this;
            }
            unbind_global(t) {
              return t ? (this.global_callbacks = Rt(this.global_callbacks || [], (o) => o !== t), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(t, o, d) {
              for (var f = 0; f < this.global_callbacks.length; f++)
                this.global_callbacks[f](t, o);
              var w = this.callbacks.get(t), T = [];
              if (d ? T.push(o, d) : o && T.push(o), w && w.length > 0)
                for (var f = 0; f < w.length; f++)
                  w[f].fn.apply(w[f].context || window, T);
              else this.failThrough && this.failThrough(t, o);
              return this;
            }
          }
          class mr extends ne {
            constructor(t, o, d, f, w) {
              super(), this.initialize = N.transportConnectionInitializer, this.hooks = t, this.name = o, this.priority = d, this.key = f, this.options = w, this.state = "new", this.timeline = w.timeline, this.activityTimeout = w.activityTimeout, this.id = this.timeline.generateUniqueID();
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
              var t = this.hooks.urls.getInitial(this.key, this.options);
              try {
                this.socket = this.hooks.getSocket(t, this.options);
              } catch (o) {
                return K.defer(() => {
                  this.onError(o), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), j.debug("Connecting", { transport: this.name, url: t }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(t) {
              return this.state === "open" ? (K.defer(() => {
                this.socket && this.socket.send(t);
              }), !0) : !1;
            }
            ping() {
              this.state === "open" && this.supportsPing() && this.socket.ping();
            }
            onOpen() {
              this.hooks.beforeOpen && this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options)), this.changeState("open"), this.socket.onopen = void 0;
            }
            onError(t) {
              this.emit("error", { type: "WebSocketError", error: t }), this.timeline.error(this.buildTimelineMessage({ error: t.toString() }));
            }
            onClose(t) {
              t ? this.changeState("closed", {
                code: t.code,
                reason: t.reason,
                wasClean: t.wasClean
              }) : this.changeState("closed"), this.unbindListeners(), this.socket = void 0;
            }
            onMessage(t) {
              this.emit("message", t);
            }
            onActivity() {
              this.emit("activity");
            }
            bindListeners() {
              this.socket.onopen = () => {
                this.onOpen();
              }, this.socket.onerror = (t) => {
                this.onError(t);
              }, this.socket.onclose = (t) => {
                this.onClose(t);
              }, this.socket.onmessage = (t) => {
                this.onMessage(t);
              }, this.supportsPing() && (this.socket.onactivity = () => {
                this.onActivity();
              });
            }
            unbindListeners() {
              this.socket && (this.socket.onopen = void 0, this.socket.onerror = void 0, this.socket.onclose = void 0, this.socket.onmessage = void 0, this.supportsPing() && (this.socket.onactivity = void 0));
            }
            changeState(t, o) {
              this.state = t, this.timeline.info(this.buildTimelineMessage({
                state: t,
                params: o
              })), this.emit(t, o);
            }
            buildTimelineMessage(t) {
              return J({ cid: this.id }, t);
            }
          }
          class ue {
            constructor(t) {
              this.hooks = t;
            }
            isSupported(t) {
              return this.hooks.isSupported(t);
            }
            createConnection(t, o, d, f) {
              return new mr(this.hooks, t, o, d, f);
            }
          }
          var yr = new ue({
            urls: dr,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!N.getWebSocketAPI();
            },
            isSupported: function() {
              return !!N.getWebSocketAPI();
            },
            getSocket: function(c) {
              return N.createWebSocket(c);
            }
          }), Pt = {
            urls: fr,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Mt = J({
            getSocket: function(c) {
              return N.HTTPFactory.createStreamingSocket(c);
            }
          }, Pt), Nt = J({
            getSocket: function(c) {
              return N.HTTPFactory.createPollingSocket(c);
            }
          }, Pt), Ot = {
            isSupported: function() {
              return N.isXHRSupported();
            }
          }, br = new ue(J({}, Mt, Ot)), vr = new ue(J({}, Nt, Ot)), wr = {
            ws: yr,
            xhr_streaming: br,
            xhr_polling: vr
          }, Ee = wr, kr = new ue({
            file: "sockjs",
            urls: pr,
            handlesActivityChecks: !0,
            supportsPing: !1,
            isSupported: function() {
              return !0;
            },
            isInitialized: function() {
              return window.SockJS !== void 0;
            },
            getSocket: function(c, t) {
              return new window.SockJS(c, null, {
                js_path: m.getPath("sockjs", {
                  useTLS: t.useTLS
                }),
                ignore_null_origin: t.ignoreNullOrigin
              });
            },
            beforeOpen: function(c, t) {
              c.send(JSON.stringify({
                path: t
              }));
            }
          }), Bt = {
            isSupported: function(c) {
              var t = N.isXDRSupported(c.useTLS);
              return t;
            }
          }, _r = new ue(J({}, Mt, Bt)), Cr = new ue(J({}, Nt, Bt));
          Ee.xdr_streaming = _r, Ee.xdr_polling = Cr, Ee.sockjs = kr;
          var Sr = Ee;
          class Tr extends ne {
            constructor() {
              super();
              var t = this;
              window.addEventListener !== void 0 && (window.addEventListener("online", function() {
                t.emit("online");
              }, !1), window.addEventListener("offline", function() {
                t.emit("offline");
              }, !1));
            }
            isOnline() {
              return window.navigator.onLine === void 0 ? !0 : window.navigator.onLine;
            }
          }
          var Ar = new Tr();
          class Ir {
            constructor(t, o, d) {
              this.manager = t, this.transport = o, this.minPingDelay = d.minPingDelay, this.maxPingDelay = d.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(t, o, d, f) {
              f = J({}, f, {
                activityTimeout: this.pingDelay
              });
              var w = this.transport.createConnection(t, o, d, f), T = null, L = function() {
                w.unbind("open", L), w.bind("closed", M), T = K.now();
              }, M = (x) => {
                if (w.unbind("closed", M), x.code === 1002 || x.code === 1003)
                  this.manager.reportDeath();
                else if (!x.wasClean && T) {
                  var D = K.now() - T;
                  D < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(D / 2, this.minPingDelay));
                }
              };
              return w.bind("open", L), w;
            }
            isSupported(t) {
              return this.manager.isAlive() && this.transport.isSupported(t);
            }
          }
          const xt = {
            decodeMessage: function(c) {
              try {
                var t = JSON.parse(c.data), o = t.data;
                if (typeof o == "string")
                  try {
                    o = JSON.parse(t.data);
                  } catch {
                  }
                var d = {
                  event: t.event,
                  channel: t.channel,
                  data: o
                };
                return t.user_id && (d.user_id = t.user_id), d;
              } catch (f) {
                throw { type: "MessageParseError", error: f, data: c.data };
              }
            },
            encodeMessage: function(c) {
              return JSON.stringify(c);
            },
            processHandshake: function(c) {
              var t = xt.decodeMessage(c);
              if (t.event === "pusher:connection_established") {
                if (!t.data.activity_timeout)
                  throw "No activity timeout specified in handshake";
                return {
                  action: "connected",
                  id: t.data.socket_id,
                  activityTimeout: t.data.activity_timeout * 1e3
                };
              } else {
                if (t.event === "pusher:error")
                  return {
                    action: this.getCloseAction(t.data),
                    error: this.getCloseError(t.data)
                  };
                throw "Invalid handshake";
              }
            },
            getCloseAction: function(c) {
              return c.code < 4e3 ? c.code >= 1002 && c.code <= 1004 ? "backoff" : null : c.code === 4e3 ? "tls_only" : c.code < 4100 ? "refused" : c.code < 4200 ? "backoff" : c.code < 4300 ? "retry" : "refused";
            },
            getCloseError: function(c) {
              return c.code !== 1e3 && c.code !== 1001 ? {
                type: "PusherError",
                data: {
                  code: c.code,
                  message: c.reason || c.message
                }
              } : null;
            }
          };
          var ae = xt;
          class Rr extends ne {
            constructor(t, o) {
              super(), this.id = t, this.transport = o, this.activityTimeout = o.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(t) {
              return this.transport.send(t);
            }
            send_event(t, o, d) {
              var f = { event: t, data: o };
              return d && (f.channel = d), j.debug("Event sent", f), this.send(ae.encodeMessage(f));
            }
            ping() {
              this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
            }
            close() {
              this.transport.close();
            }
            bindListeners() {
              var t = {
                message: (d) => {
                  var f;
                  try {
                    f = ae.decodeMessage(d);
                  } catch (w) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: w,
                      data: d.data
                    });
                  }
                  if (f !== void 0) {
                    switch (j.debug("Event recd", f), f.event) {
                      case "pusher:error":
                        this.emit("error", {
                          type: "PusherError",
                          data: f.data
                        });
                        break;
                      case "pusher:ping":
                        this.emit("ping");
                        break;
                      case "pusher:pong":
                        this.emit("pong");
                        break;
                    }
                    this.emit("message", f);
                  }
                },
                activity: () => {
                  this.emit("activity");
                },
                error: (d) => {
                  this.emit("error", d);
                },
                closed: (d) => {
                  o(), d && d.code && this.handleCloseEvent(d), this.transport = null, this.emit("closed");
                }
              }, o = () => {
                te(t, (d, f) => {
                  this.transport.unbind(f, d);
                });
              };
              te(t, (d, f) => {
                this.transport.bind(f, d);
              });
            }
            handleCloseEvent(t) {
              var o = ae.getCloseAction(t), d = ae.getCloseError(t);
              d && this.emit("error", d), o && this.emit(o, { action: o, error: d });
            }
          }
          class Er {
            constructor(t, o) {
              this.transport = t, this.callback = o, this.bindListeners();
            }
            close() {
              this.unbindListeners(), this.transport.close();
            }
            bindListeners() {
              this.onMessage = (t) => {
                this.unbindListeners();
                var o;
                try {
                  o = ae.processHandshake(t);
                } catch (d) {
                  this.finish("error", { error: d }), this.transport.close();
                  return;
                }
                o.action === "connected" ? this.finish("connected", {
                  connection: new Rr(o.id, this.transport),
                  activityTimeout: o.activityTimeout
                }) : (this.finish(o.action, { error: o.error }), this.transport.close());
              }, this.onClosed = (t) => {
                this.unbindListeners();
                var o = ae.getCloseAction(t) || "backoff", d = ae.getCloseError(t);
                this.finish(o, { error: d });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(t, o) {
              this.callback(J({ transport: this.transport, action: t }, o));
            }
          }
          class Lr {
            constructor(t, o) {
              this.timeline = t, this.options = o || {};
            }
            send(t, o) {
              this.timeline.isEmpty() || this.timeline.send(N.TimelineTransport.getAgent(this, t), o);
            }
          }
          class Ke extends ne {
            constructor(t, o) {
              super(function(d, f) {
                j.debug("No callbacks on " + t + " for " + d);
              }), this.name = t, this.pusher = o, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(t, o) {
              return o(null, { auth: "" });
            }
            trigger(t, o) {
              if (t.indexOf("client-") !== 0)
                throw new k("Event '" + t + "' does not start with 'client-'");
              if (!this.subscribed) {
                var d = C.buildLogSuffix("triggeringClientEvents");
                j.warn(`Client event triggered before channel 'subscription_succeeded' event . ${d}`);
              }
              return this.pusher.send_event(t, o, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(t) {
              var o = t.event, d = t.data;
              if (o === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(t);
              else if (o === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(t);
              else if (o.indexOf("pusher_internal:") !== 0) {
                var f = {};
                this.emit(o, d, f);
              }
            }
            handleSubscriptionSucceededEvent(t) {
              this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", t.data);
            }
            handleSubscriptionCountEvent(t) {
              t.data.subscription_count && (this.subscriptionCount = t.data.subscription_count), this.emit("pusher:subscription_count", t.data);
            }
            subscribe() {
              this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (t, o) => {
                t ? (this.subscriptionPending = !1, j.error(t.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: t.message
                }, t instanceof B ? { status: t.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
                  auth: o.auth,
                  channel_data: o.channel_data,
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
          class We extends Ke {
            authorize(t, o) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: t
              }, o);
            }
          }
          class Pr {
            constructor() {
              this.reset();
            }
            get(t) {
              return Object.prototype.hasOwnProperty.call(this.members, t) ? {
                id: t,
                info: this.members[t]
              } : null;
            }
            each(t) {
              te(this.members, (o, d) => {
                t(this.get(d));
              });
            }
            setMyID(t) {
              this.myID = t;
            }
            onSubscription(t) {
              this.members = t.presence.hash, this.count = t.presence.count, this.me = this.get(this.myID);
            }
            addMember(t) {
              return this.get(t.user_id) === null && this.count++, this.members[t.user_id] = t.user_info, this.get(t.user_id);
            }
            removeMember(t) {
              var o = this.get(t.user_id);
              return o && (delete this.members[t.user_id], this.count--), o;
            }
            reset() {
              this.members = {}, this.count = 0, this.myID = null, this.me = null;
            }
          }
          var Mr = function(c, t, o, d) {
            function f(w) {
              return w instanceof o ? w : new o(function(T) {
                T(w);
              });
            }
            return new (o || (o = Promise))(function(w, T) {
              function L(D) {
                try {
                  x(d.next(D));
                } catch (H) {
                  T(H);
                }
              }
              function M(D) {
                try {
                  x(d.throw(D));
                } catch (H) {
                  T(H);
                }
              }
              function x(D) {
                D.done ? w(D.value) : f(D.value).then(L, M);
              }
              x((d = d.apply(c, t || [])).next());
            });
          };
          class Nr extends We {
            constructor(t, o) {
              super(t, o), this.members = new Pr();
            }
            authorize(t, o) {
              super.authorize(t, (d, f) => Mr(this, void 0, void 0, function* () {
                if (!d)
                  if (f = f, f.channel_data != null) {
                    var w = JSON.parse(f.channel_data);
                    this.members.setMyID(w.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let T = C.buildLogSuffix("authorizationEndpoint");
                    j.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${T}, or the user should be signed in.`), o("Invalid auth response");
                    return;
                  }
                o(d, f);
              }));
            }
            handleEvent(t) {
              var o = t.event;
              if (o.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(t);
              else {
                var d = t.data, f = {};
                t.user_id && (f.user_id = t.user_id), this.emit(o, d, f);
              }
            }
            handleInternalEvent(t) {
              var o = t.event, d = t.data;
              switch (o) {
                case "pusher_internal:subscription_succeeded":
                  this.handleSubscriptionSucceededEvent(t);
                  break;
                case "pusher_internal:subscription_count":
                  this.handleSubscriptionCountEvent(t);
                  break;
                case "pusher_internal:member_added":
                  var f = this.members.addMember(d);
                  this.emit("pusher:member_added", f);
                  break;
                case "pusher_internal:member_removed":
                  var w = this.members.removeMember(d);
                  w && this.emit("pusher:member_removed", w);
                  break;
              }
            }
            handleSubscriptionSucceededEvent(t) {
              this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : (this.members.onSubscription(t.data), this.emit("pusher:subscription_succeeded", this.members));
            }
            disconnect() {
              this.members.reset(), super.disconnect();
            }
          }
          var Or = n(1), Je = n(0);
          class Br extends We {
            constructor(t, o, d) {
              super(t, o), this.key = null, this.nacl = d;
            }
            authorize(t, o) {
              super.authorize(t, (d, f) => {
                if (d) {
                  o(d, f);
                  return;
                }
                let w = f.shared_secret;
                if (!w) {
                  o(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(Je.decode)(w), delete f.shared_secret, o(null, f);
              });
            }
            trigger(t, o) {
              throw new R("Client events are not currently supported for encrypted channels");
            }
            handleEvent(t) {
              var o = t.event, d = t.data;
              if (o.indexOf("pusher_internal:") === 0 || o.indexOf("pusher:") === 0) {
                super.handleEvent(t);
                return;
              }
              this.handleEncryptedEvent(o, d);
            }
            handleEncryptedEvent(t, o) {
              if (!this.key) {
                j.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!o.ciphertext || !o.nonce) {
                j.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + o);
                return;
              }
              let d = Object(Je.decode)(o.ciphertext);
              if (d.length < this.nacl.secretbox.overheadLength) {
                j.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${d.length}`);
                return;
              }
              let f = Object(Je.decode)(o.nonce);
              if (f.length < this.nacl.secretbox.nonceLength) {
                j.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${f.length}`);
                return;
              }
              let w = this.nacl.secretbox.open(d, f, this.key);
              if (w === null) {
                j.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (T, L) => {
                  if (T) {
                    j.error(`Failed to make a request to the authEndpoint: ${L}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (w = this.nacl.secretbox.open(d, f, this.key), w === null) {
                    j.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(t, this.getDataToEmit(w));
                });
                return;
              }
              this.emit(t, this.getDataToEmit(w));
            }
            getDataToEmit(t) {
              let o = Object(Or.decode)(t);
              try {
                return JSON.parse(o);
              } catch {
                return o;
              }
            }
          }
          class xr extends ne {
            constructor(t, o) {
              super(), this.state = "initialized", this.connection = null, this.key = t, this.options = o, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var d = N.getNetwork();
              d.bind("online", () => {
                this.timeline.info({ netinfo: "online" }), (this.state === "connecting" || this.state === "unavailable") && this.retryIn(0);
              }), d.bind("offline", () => {
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
            send(t) {
              return this.connection ? this.connection.send(t) : !1;
            }
            send_event(t, o, d) {
              return this.connection ? this.connection.send_event(t, o, d) : !1;
            }
            disconnect() {
              this.disconnectInternally(), this.updateState("disconnected");
            }
            isUsingTLS() {
              return this.usingTLS;
            }
            startConnecting() {
              var t = (o, d) => {
                o ? this.runner = this.strategy.connect(0, t) : d.action === "error" ? (this.emit("error", {
                  type: "HandshakeError",
                  error: d.error
                }), this.timeline.error({ handshakeError: d.error })) : (this.abortConnecting(), this.handshakeCallbacks[d.action](d));
              };
              this.runner = this.strategy.connect(0, t);
            }
            abortConnecting() {
              this.runner && (this.runner.abort(), this.runner = null);
            }
            disconnectInternally() {
              if (this.abortConnecting(), this.clearRetryTimer(), this.clearUnavailableTimer(), this.connection) {
                var t = this.abandonConnection();
                t.close();
              }
            }
            updateStrategy() {
              this.strategy = this.options.getStrategy({
                key: this.key,
                timeline: this.timeline,
                useTLS: this.usingTLS
              });
            }
            retryIn(t) {
              this.timeline.info({ action: "retry", delay: t }), t > 0 && this.emit("connecting_in", Math.round(t / 1e3)), this.retryTimer = new oe(t || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new oe(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new oe(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new oe(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(t) {
              return J({}, t, {
                message: (o) => {
                  this.resetActivityCheck(), this.emit("message", o);
                },
                ping: () => {
                  this.send_event("pusher:pong", {});
                },
                activity: () => {
                  this.resetActivityCheck();
                },
                error: (o) => {
                  this.emit("error", o);
                },
                closed: () => {
                  this.abandonConnection(), this.shouldRetry() && this.retryIn(1e3);
                }
              });
            }
            buildHandshakeCallbacks(t) {
              return J({}, t, {
                connected: (o) => {
                  this.activityTimeout = Math.min(this.options.activityTimeout, o.activityTimeout, o.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(o.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
                }
              });
            }
            buildErrorCallbacks() {
              let t = (o) => (d) => {
                d.error && this.emit("error", { type: "WebSocketError", error: d.error }), o(d);
              };
              return {
                tls_only: t(() => {
                  this.usingTLS = !0, this.updateStrategy(), this.retryIn(0);
                }),
                refused: t(() => {
                  this.disconnect();
                }),
                backoff: t(() => {
                  this.retryIn(1e3);
                }),
                retry: t(() => {
                  this.retryIn(0);
                })
              };
            }
            setConnection(t) {
              this.connection = t;
              for (var o in this.connectionCallbacks)
                this.connection.bind(o, this.connectionCallbacks[o]);
              this.resetActivityCheck();
            }
            abandonConnection() {
              if (this.connection) {
                this.stopActivityCheck();
                for (var t in this.connectionCallbacks)
                  this.connection.unbind(t, this.connectionCallbacks[t]);
                var o = this.connection;
                return this.connection = null, o;
              }
            }
            updateState(t, o) {
              var d = this.state;
              if (this.state = t, d !== t) {
                var f = t;
                f === "connected" && (f += " with new socket ID " + o.socket_id), j.debug("State changed", d + " -> " + f), this.timeline.info({ state: t, params: o }), this.emit("state_change", { previous: d, current: t }), this.emit(t, o);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class Dr {
            constructor() {
              this.channels = {};
            }
            add(t, o) {
              return this.channels[t] || (this.channels[t] = Fr(t, o)), this.channels[t];
            }
            all() {
              return Yn(this.channels);
            }
            find(t) {
              return this.channels[t];
            }
            remove(t) {
              var o = this.channels[t];
              return delete this.channels[t], o;
            }
            disconnect() {
              te(this.channels, function(t) {
                t.disconnect();
              });
            }
          }
          function Fr(c, t) {
            if (c.indexOf("private-encrypted-") === 0) {
              if (t.config.nacl)
                return re.createEncryptedChannel(c, t, t.config.nacl);
              let o = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", d = C.buildLogSuffix("encryptedChannelSupport");
              throw new R(`${o}. ${d}`);
            } else {
              if (c.indexOf("private-") === 0)
                return re.createPrivateChannel(c, t);
              if (c.indexOf("presence-") === 0)
                return re.createPresenceChannel(c, t);
              if (c.indexOf("#") === 0)
                throw new v('Cannot create a channel with name "' + c + '".');
              return re.createChannel(c, t);
            }
          }
          var Ur = {
            createChannels() {
              return new Dr();
            },
            createConnectionManager(c, t) {
              return new xr(c, t);
            },
            createChannel(c, t) {
              return new Ke(c, t);
            },
            createPrivateChannel(c, t) {
              return new We(c, t);
            },
            createPresenceChannel(c, t) {
              return new Nr(c, t);
            },
            createEncryptedChannel(c, t, o) {
              return new Br(c, t, o);
            },
            createTimelineSender(c, t) {
              return new Lr(c, t);
            },
            createHandshake(c, t) {
              return new Er(c, t);
            },
            createAssistantToTheTransportManager(c, t, o) {
              return new Ir(c, t, o);
            }
          }, re = Ur;
          class Dt {
            constructor(t) {
              this.options = t || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(t) {
              return re.createAssistantToTheTransportManager(this, t, {
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
          class ce {
            constructor(t, o) {
              this.strategies = t, this.loop = !!o.loop, this.failFast = !!o.failFast, this.timeout = o.timeout, this.timeoutLimit = o.timeoutLimit;
            }
            isSupported() {
              return Lt(this.strategies, K.method("isSupported"));
            }
            connect(t, o) {
              var d = this.strategies, f = 0, w = this.timeout, T = null, L = (M, x) => {
                x ? o(null, x) : (f = f + 1, this.loop && (f = f % d.length), f < d.length ? (w && (w = w * 2, this.timeoutLimit && (w = Math.min(w, this.timeoutLimit))), T = this.tryStrategy(d[f], t, { timeout: w, failFast: this.failFast }, L)) : o(!0));
              };
              return T = this.tryStrategy(d[f], t, { timeout: w, failFast: this.failFast }, L), {
                abort: function() {
                  T.abort();
                },
                forceMinPriority: function(M) {
                  t = M, T && T.forceMinPriority(M);
                }
              };
            }
            tryStrategy(t, o, d, f) {
              var w = null, T = null;
              return d.timeout > 0 && (w = new oe(d.timeout, function() {
                T.abort(), f(!0);
              })), T = t.connect(o, function(L, M) {
                L && w && w.isRunning() && !d.failFast || (w && w.ensureAborted(), f(L, M));
              }), {
                abort: function() {
                  w && w.ensureAborted(), T.abort();
                },
                forceMinPriority: function(L) {
                  T.forceMinPriority(L);
                }
              };
            }
          }
          class Xe {
            constructor(t) {
              this.strategies = t;
            }
            isSupported() {
              return Lt(this.strategies, K.method("isSupported"));
            }
            connect(t, o) {
              return jr(this.strategies, t, function(d, f) {
                return function(w, T) {
                  if (f[d].error = w, w) {
                    Hr(f) && o(!0);
                    return;
                  }
                  ye(f, function(L) {
                    L.forceMinPriority(T.transport.priority);
                  }), o(null, T);
                };
              });
            }
          }
          function jr(c, t, o) {
            var d = It(c, function(f, w, T, L) {
              return f.connect(t, o(w, L));
            });
            return {
              abort: function() {
                ye(d, zr);
              },
              forceMinPriority: function(f) {
                ye(d, function(w) {
                  w.forceMinPriority(f);
                });
              }
            };
          }
          function Hr(c) {
            return er(c, function(t) {
              return !!t.error;
            });
          }
          function zr(c) {
            !c.error && !c.aborted && (c.abort(), c.aborted = !0);
          }
          class qr {
            constructor(t, o, d) {
              this.strategy = t, this.transports = o, this.ttl = d.ttl || 1800 * 1e3, this.usingTLS = d.useTLS, this.timeline = d.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, o) {
              var d = this.usingTLS, f = $r(d), w = f && f.cacheSkipCount ? f.cacheSkipCount : 0, T = [this.strategy];
              if (f && f.timestamp + this.ttl >= K.now()) {
                var L = this.transports[f.transport];
                L && (["ws", "wss"].includes(f.transport) || w > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: f.transport,
                  latency: f.latency
                }), T.push(new ce([L], {
                  timeout: f.latency * 2 + 1e3,
                  failFast: !0
                }))) : w++);
              }
              var M = K.now(), x = T.pop().connect(t, function D(H, Me) {
                H ? (Ft(d), T.length > 0 ? (M = K.now(), x = T.pop().connect(t, D)) : o(H)) : (Gr(d, Me.transport.name, K.now() - M, w), o(null, Me));
              });
              return {
                abort: function() {
                  x.abort();
                },
                forceMinPriority: function(D) {
                  t = D, x && x.forceMinPriority(D);
                }
              };
            }
          }
          function Ye(c) {
            return "pusherTransport" + (c ? "TLS" : "NonTLS");
          }
          function $r(c) {
            var t = N.getLocalStorage();
            if (t)
              try {
                var o = t[Ye(c)];
                if (o)
                  return JSON.parse(o);
              } catch {
                Ft(c);
              }
            return null;
          }
          function Gr(c, t, o, d) {
            var f = N.getLocalStorage();
            if (f)
              try {
                f[Ye(c)] = Re({
                  timestamp: K.now(),
                  transport: t,
                  latency: o,
                  cacheSkipCount: d
                });
              } catch {
              }
          }
          function Ft(c) {
            var t = N.getLocalStorage();
            if (t)
              try {
                delete t[Ye(c)];
              } catch {
              }
          }
          class Le {
            constructor(t, { delay: o }) {
              this.strategy = t, this.options = { delay: o };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, o) {
              var d = this.strategy, f, w = new oe(this.options.delay, function() {
                f = d.connect(t, o);
              });
              return {
                abort: function() {
                  w.ensureAborted(), f && f.abort();
                },
                forceMinPriority: function(T) {
                  t = T, f && f.forceMinPriority(T);
                }
              };
            }
          }
          class be {
            constructor(t, o, d) {
              this.test = t, this.trueBranch = o, this.falseBranch = d;
            }
            isSupported() {
              var t = this.test() ? this.trueBranch : this.falseBranch;
              return t.isSupported();
            }
            connect(t, o) {
              var d = this.test() ? this.trueBranch : this.falseBranch;
              return d.connect(t, o);
            }
          }
          class Vr {
            constructor(t) {
              this.strategy = t;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, o) {
              var d = this.strategy.connect(t, function(f, w) {
                w && d.abort(), o(f, w);
              });
              return d;
            }
          }
          function ve(c) {
            return function() {
              return c.isSupported();
            };
          }
          var Kr = function(c, t, o) {
            var d = {};
            function f(Jt, Ki, Wi, Ji, Xi) {
              var Xt = o(c, Jt, Ki, Wi, Ji, Xi);
              return d[Jt] = Xt, Xt;
            }
            var w = Object.assign({}, t, {
              hostNonTLS: c.wsHost + ":" + c.wsPort,
              hostTLS: c.wsHost + ":" + c.wssPort,
              httpPath: c.wsPath
            }), T = Object.assign({}, w, {
              useTLS: !0
            }), L = Object.assign({}, t, {
              hostNonTLS: c.httpHost + ":" + c.httpPort,
              hostTLS: c.httpHost + ":" + c.httpsPort,
              httpPath: c.httpPath
            }), M = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, x = new Dt({
              minPingDelay: 1e4,
              maxPingDelay: c.activityTimeout
            }), D = new Dt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: c.activityTimeout
            }), H = f("ws", "ws", 3, w, x), Me = f("wss", "ws", 3, T, x), zi = f("sockjs", "sockjs", 1, L), qt = f("xhr_streaming", "xhr_streaming", 1, L, D), qi = f("xdr_streaming", "xdr_streaming", 1, L, D), $t = f("xhr_polling", "xhr_polling", 1, L), $i = f("xdr_polling", "xdr_polling", 1, L), Gt = new ce([H], M), Gi = new ce([Me], M), Vi = new ce([zi], M), Vt = new ce([
              new be(ve(qt), qt, qi)
            ], M), Kt = new ce([
              new be(ve($t), $t, $i)
            ], M), Wt = new ce([
              new be(ve(Vt), new Xe([
                Vt,
                new Le(Kt, { delay: 4e3 })
              ]), Kt)
            ], M), tt = new be(ve(Wt), Wt, Vi), nt;
            return t.useTLS ? nt = new Xe([
              Gt,
              new Le(tt, { delay: 2e3 })
            ]) : nt = new Xe([
              Gt,
              new Le(Gi, { delay: 2e3 }),
              new Le(tt, { delay: 5e3 })
            ]), new qr(new Vr(new be(ve(H), nt, tt)), d, {
              ttl: 18e5,
              timeline: t.timeline,
              useTLS: t.useTLS
            });
          }, Wr = Kr, Jr = function() {
            var c = this;
            c.timeline.info(c.buildTimelineMessage({
              transport: c.name + (c.options.useTLS ? "s" : "")
            })), c.hooks.isInitialized() ? c.changeState("initialized") : c.hooks.file ? (c.changeState("initializing"), m.load(c.hooks.file, { useTLS: c.options.useTLS }, function(t, o) {
              c.hooks.isInitialized() ? (c.changeState("initialized"), o(!0)) : (t && c.onError(t), c.onClose(), o(!1));
            })) : c.onClose();
          }, Xr = {
            getRequest: function(c) {
              var t = new window.XDomainRequest();
              return t.ontimeout = function() {
                c.emit("error", new S()), c.close();
              }, t.onerror = function(o) {
                c.emit("error", o), c.close();
              }, t.onprogress = function() {
                t.responseText && t.responseText.length > 0 && c.onChunk(200, t.responseText);
              }, t.onload = function() {
                t.responseText && t.responseText.length > 0 && c.onChunk(200, t.responseText), c.emit("finished", 200), c.close();
              }, t;
            },
            abortRequest: function(c) {
              c.ontimeout = c.onerror = c.onprogress = c.onload = null, c.abort();
            }
          }, Yr = Xr;
          const Qr = 256 * 1024;
          class Zr extends ne {
            constructor(t, o, d) {
              super(), this.hooks = t, this.method = o, this.url = d;
            }
            start(t) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, N.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(t);
            }
            close() {
              this.unloader && (N.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
            }
            onChunk(t, o) {
              for (; ; ) {
                var d = this.advanceBuffer(o);
                if (d)
                  this.emit("chunk", { status: t, data: d });
                else
                  break;
              }
              this.isBufferTooLong(o) && this.emit("buffer_too_long");
            }
            advanceBuffer(t) {
              var o = t.slice(this.position), d = o.indexOf(`
`);
              return d !== -1 ? (this.position += d + 1, o.slice(0, d)) : null;
            }
            isBufferTooLong(t) {
              return this.position === t.length && t.length > Qr;
            }
          }
          var Qe;
          (function(c) {
            c[c.CONNECTING = 0] = "CONNECTING", c[c.OPEN = 1] = "OPEN", c[c.CLOSED = 3] = "CLOSED";
          })(Qe || (Qe = {}));
          var le = Qe, ei = 1;
          class ti {
            constructor(t, o) {
              this.hooks = t, this.session = jt(1e3) + "/" + si(8), this.location = ni(o), this.readyState = le.CONNECTING, this.openStream();
            }
            send(t) {
              return this.sendRaw(JSON.stringify([t]));
            }
            ping() {
              this.hooks.sendHeartbeat(this);
            }
            close(t, o) {
              this.onClose(t, o, !0);
            }
            sendRaw(t) {
              if (this.readyState === le.OPEN)
                try {
                  return N.createSocketRequest("POST", Ut(ri(this.location, this.session))).start(t), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(t, o, d) {
              this.closeStream(), this.readyState = le.CLOSED, this.onclose && this.onclose({
                code: t,
                reason: o,
                wasClean: d
              });
            }
            onChunk(t) {
              if (t.status === 200) {
                this.readyState === le.OPEN && this.onActivity();
                var o, d = t.data.slice(0, 1);
                switch (d) {
                  case "o":
                    o = JSON.parse(t.data.slice(1) || "{}"), this.onOpen(o);
                    break;
                  case "a":
                    o = JSON.parse(t.data.slice(1) || "[]");
                    for (var f = 0; f < o.length; f++)
                      this.onEvent(o[f]);
                    break;
                  case "m":
                    o = JSON.parse(t.data.slice(1) || "null"), this.onEvent(o);
                    break;
                  case "h":
                    this.hooks.onHeartbeat(this);
                    break;
                  case "c":
                    o = JSON.parse(t.data.slice(1) || "[]"), this.onClose(o[0], o[1], !0);
                    break;
                }
              }
            }
            onOpen(t) {
              this.readyState === le.CONNECTING ? (t && t.hostname && (this.location.base = ii(this.location.base, t.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
            }
            onEvent(t) {
              this.readyState === le.OPEN && this.onmessage && this.onmessage({ data: t });
            }
            onActivity() {
              this.onactivity && this.onactivity();
            }
            onError(t) {
              this.onerror && this.onerror(t);
            }
            openStream() {
              this.stream = N.createSocketRequest("POST", Ut(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (t) => {
                this.onChunk(t);
              }), this.stream.bind("finished", (t) => {
                this.hooks.onFinished(this, t);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (t) {
                K.defer(() => {
                  this.onError(t), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function ni(c) {
            var t = /([^\?]*)\/*(\??.*)/.exec(c);
            return {
              base: t[1],
              queryString: t[2]
            };
          }
          function ri(c, t) {
            return c.base + "/" + t + "/xhr_send";
          }
          function Ut(c) {
            var t = c.indexOf("?") === -1 ? "?" : "&";
            return c + t + "t=" + +/* @__PURE__ */ new Date() + "&n=" + ei++;
          }
          function ii(c, t) {
            var o = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(c);
            return o[1] + t + o[3];
          }
          function jt(c) {
            return N.randomInt(c);
          }
          function si(c) {
            for (var t = [], o = 0; o < c; o++)
              t.push(jt(32).toString(32));
            return t.join("");
          }
          var oi = ti, ai = {
            getReceiveURL: function(c, t) {
              return c.base + "/" + t + "/xhr_streaming" + c.queryString;
            },
            onHeartbeat: function(c) {
              c.sendRaw("[]");
            },
            sendHeartbeat: function(c) {
              c.sendRaw("[]");
            },
            onFinished: function(c, t) {
              c.onClose(1006, "Connection interrupted (" + t + ")", !1);
            }
          }, ci = ai, li = {
            getReceiveURL: function(c, t) {
              return c.base + "/" + t + "/xhr" + c.queryString;
            },
            onHeartbeat: function() {
            },
            sendHeartbeat: function(c) {
              c.sendRaw("[]");
            },
            onFinished: function(c, t) {
              t === 200 ? c.reconnect() : c.onClose(1006, "Connection interrupted (" + t + ")", !1);
            }
          }, hi = li, di = {
            getRequest: function(c) {
              var t = N.getXHRAPI(), o = new t();
              return o.onreadystatechange = o.onprogress = function() {
                switch (o.readyState) {
                  case 3:
                    o.responseText && o.responseText.length > 0 && c.onChunk(o.status, o.responseText);
                    break;
                  case 4:
                    o.responseText && o.responseText.length > 0 && c.onChunk(o.status, o.responseText), c.emit("finished", o.status), c.close();
                    break;
                }
              }, o;
            },
            abortRequest: function(c) {
              c.onreadystatechange = null, c.abort();
            }
          }, fi = di, pi = {
            createStreamingSocket(c) {
              return this.createSocket(ci, c);
            },
            createPollingSocket(c) {
              return this.createSocket(hi, c);
            },
            createSocket(c, t) {
              return new oi(c, t);
            },
            createXHR(c, t) {
              return this.createRequest(fi, c, t);
            },
            createRequest(c, t, o) {
              return new Zr(c, t, o);
            }
          }, Ht = pi;
          Ht.createXDR = function(c, t) {
            return this.createRequest(Yr, c, t);
          };
          var gi = Ht, mi = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: g,
            getDefaultStrategy: Wr,
            Transports: Sr,
            transportConnectionInitializer: Jr,
            HTTPFactory: gi,
            TimelineTransport: hr,
            getXHRAPI() {
              return window.XMLHttpRequest;
            },
            getWebSocketAPI() {
              return window.WebSocket || window.MozWebSocket;
            },
            setup(c) {
              window.Pusher = c;
              var t = () => {
                this.onDocumentBody(c.ready);
              };
              window.JSON ? t() : m.load("json2", {}, t);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: F, jsonp: or };
            },
            onDocumentBody(c) {
              document.body ? c() : setTimeout(() => {
                this.onDocumentBody(c);
              }, 0);
            },
            createJSONPRequest(c, t) {
              return new cr(c, t);
            },
            createScriptRequest(c) {
              return new ar(c);
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
              var c = this.getXHRAPI();
              return new c();
            },
            createMicrosoftXHR() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            },
            getNetwork() {
              return Ar;
            },
            createWebSocket(c) {
              var t = this.getWebSocketAPI();
              return new t(c);
            },
            createSocketRequest(c, t) {
              if (this.isXHRSupported())
                return this.HTTPFactory.createXHR(c, t);
              if (this.isXDRSupported(t.indexOf("https:") === 0))
                return this.HTTPFactory.createXDR(c, t);
              throw "Cross-origin HTTP requests are not supported";
            },
            isXHRSupported() {
              var c = this.getXHRAPI();
              return !!c && new c().withCredentials !== void 0;
            },
            isXDRSupported(c) {
              var t = c ? "https:" : "http:", o = this.getProtocol();
              return !!window.XDomainRequest && o === t;
            },
            addUnloadListener(c) {
              window.addEventListener !== void 0 ? window.addEventListener("unload", c, !1) : window.attachEvent !== void 0 && window.attachEvent("onunload", c);
            },
            removeUnloadListener(c) {
              window.addEventListener !== void 0 ? window.removeEventListener("unload", c, !1) : window.detachEvent !== void 0 && window.detachEvent("onunload", c);
            },
            randomInt(c) {
              return Math.floor(function() {
                return (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
              }() * c);
            }
          }, N = mi, Ze;
          (function(c) {
            c[c.ERROR = 3] = "ERROR", c[c.INFO = 6] = "INFO", c[c.DEBUG = 7] = "DEBUG";
          })(Ze || (Ze = {}));
          var Pe = Ze;
          class yi {
            constructor(t, o, d) {
              this.key = t, this.session = o, this.events = [], this.options = d || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(t, o) {
              t <= this.options.level && (this.events.push(J({}, o, { timestamp: K.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(t) {
              this.log(Pe.ERROR, t);
            }
            info(t) {
              this.log(Pe.INFO, t);
            }
            debug(t) {
              this.log(Pe.DEBUG, t);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(t, o) {
              var d = J({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], t(d, (f, w) => {
                f || this.sent++, o && o(f, w);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class bi {
            constructor(t, o, d, f) {
              this.name = t, this.priority = o, this.transport = d, this.options = f || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(t, o) {
              if (this.isSupported()) {
                if (this.priority < t)
                  return zt(new I(), o);
              } else return zt(new O(), o);
              var d = !1, f = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), w = null, T = function() {
                f.unbind("initialized", T), f.connect();
              }, L = function() {
                w = re.createHandshake(f, function(H) {
                  d = !0, D(), o(null, H);
                });
              }, M = function(H) {
                D(), o(H);
              }, x = function() {
                D();
                var H;
                H = Re(f), o(new E(H));
              }, D = function() {
                f.unbind("initialized", T), f.unbind("open", L), f.unbind("error", M), f.unbind("closed", x);
              };
              return f.bind("initialized", T), f.bind("open", L), f.bind("error", M), f.bind("closed", x), f.initialize(), {
                abort: () => {
                  d || (D(), w ? w.close() : f.close());
                },
                forceMinPriority: (H) => {
                  d || this.priority < H && (w ? w.close() : f.close());
                }
              };
            }
          }
          function zt(c, t) {
            return K.defer(function() {
              t(c);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: vi } = N;
          var wi = function(c, t, o, d, f, w) {
            var T = vi[o];
            if (!T)
              throw new P(o);
            var L = (!c.enabledTransports || Tt(c.enabledTransports, t) !== -1) && (!c.disabledTransports || Tt(c.disabledTransports, t) === -1), M;
            return L ? (f = Object.assign({ ignoreNullOrigin: c.ignoreNullOrigin }, f), M = new bi(t, d, w ? w.getAssistant(T) : T, f)) : M = ki, M;
          }, ki = {
            isSupported: function() {
              return !1;
            },
            connect: function(c, t) {
              var o = K.defer(function() {
                t(new O());
              });
              return {
                abort: function() {
                  o.ensureAborted();
                },
                forceMinPriority: function() {
                }
              };
            }
          };
          function _i(c) {
            if (c == null)
              throw "You must pass an options object";
            if (c.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in c && j.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const Ci = (c, t) => {
            var o = "socket_id=" + encodeURIComponent(c.socketId);
            for (var d in t.params)
              o += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let f = t.paramsProvider();
              for (var d in f)
                o += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(f[d]);
            }
            return o;
          };
          var Si = (c) => {
            if (typeof N.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, o) => {
              const d = Ci(t, c);
              N.getAuthorizers()[c.transport](N, d, c, _.UserAuthentication, o);
            };
          };
          const Ti = (c, t) => {
            var o = "socket_id=" + encodeURIComponent(c.socketId);
            o += "&channel_name=" + encodeURIComponent(c.channelName);
            for (var d in t.params)
              o += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let f = t.paramsProvider();
              for (var d in f)
                o += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(f[d]);
            }
            return o;
          };
          var Ai = (c) => {
            if (typeof N.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, o) => {
              const d = Ti(t, c);
              N.getAuthorizers()[c.transport](N, d, c, _.ChannelAuthorization, o);
            };
          };
          const Ii = (c, t, o) => {
            const d = {
              authTransport: t.transport,
              authEndpoint: t.endpoint,
              auth: {
                params: t.params,
                headers: t.headers
              }
            };
            return (f, w) => {
              const T = c.channel(f.channelName);
              o(T, d).authorize(f.socketId, w);
            };
          };
          function Ri(c, t) {
            let o = {
              activityTimeout: c.activityTimeout || u.activityTimeout,
              cluster: c.cluster,
              httpPath: c.httpPath || u.httpPath,
              httpPort: c.httpPort || u.httpPort,
              httpsPort: c.httpsPort || u.httpsPort,
              pongTimeout: c.pongTimeout || u.pongTimeout,
              statsHost: c.statsHost || u.stats_host,
              unavailableTimeout: c.unavailableTimeout || u.unavailableTimeout,
              wsPath: c.wsPath || u.wsPath,
              wsPort: c.wsPort || u.wsPort,
              wssPort: c.wssPort || u.wssPort,
              enableStats: Ni(c),
              httpHost: Ei(c),
              useTLS: Mi(c),
              wsHost: Li(c),
              userAuthenticator: Oi(c),
              channelAuthorizer: xi(c, t)
            };
            return "disabledTransports" in c && (o.disabledTransports = c.disabledTransports), "enabledTransports" in c && (o.enabledTransports = c.enabledTransports), "ignoreNullOrigin" in c && (o.ignoreNullOrigin = c.ignoreNullOrigin), "timelineParams" in c && (o.timelineParams = c.timelineParams), "nacl" in c && (o.nacl = c.nacl), o;
          }
          function Ei(c) {
            return c.httpHost ? c.httpHost : c.cluster ? `sockjs-${c.cluster}.pusher.com` : u.httpHost;
          }
          function Li(c) {
            return c.wsHost ? c.wsHost : Pi(c.cluster);
          }
          function Pi(c) {
            return `ws-${c}.pusher.com`;
          }
          function Mi(c) {
            return N.getProtocol() === "https:" ? !0 : c.forceTLS !== !1;
          }
          function Ni(c) {
            return "enableStats" in c ? c.enableStats : "disableStats" in c ? !c.disableStats : !1;
          }
          function Oi(c) {
            const t = Object.assign(Object.assign({}, u.userAuthentication), c.userAuthentication);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : Si(t);
          }
          function Bi(c, t) {
            let o;
            return "channelAuthorization" in c ? o = Object.assign(Object.assign({}, u.channelAuthorization), c.channelAuthorization) : (o = {
              transport: c.authTransport || u.authTransport,
              endpoint: c.authEndpoint || u.authEndpoint
            }, "auth" in c && ("params" in c.auth && (o.params = c.auth.params), "headers" in c.auth && (o.headers = c.auth.headers)), "authorizer" in c && (o.customHandler = Ii(t, o, c.authorizer))), o;
          }
          function xi(c, t) {
            const o = Bi(c, t);
            return "customHandler" in o && o.customHandler != null ? o.customHandler : Ai(o);
          }
          class Di extends ne {
            constructor(t) {
              super(function(o, d) {
                j.debug(`No callbacks on watchlist events for ${o}`);
              }), this.pusher = t, this.bindWatchlistInternalEvent();
            }
            handleEvent(t) {
              t.data.events.forEach((o) => {
                this.emit(o.name, o);
              });
            }
            bindWatchlistInternalEvent() {
              this.pusher.connection.bind("message", (t) => {
                var o = t.event;
                o === "pusher_internal:watchlist_events" && this.handleEvent(t);
              });
            }
          }
          function Fi() {
            let c, t;
            return { promise: new Promise((d, f) => {
              c = d, t = f;
            }), resolve: c, reject: t };
          }
          var Ui = Fi;
          class ji extends ne {
            constructor(t) {
              super(function(o, d) {
                j.debug("No callbacks on user for " + o);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (o, d) => {
                if (o) {
                  j.warn(`Error during signin: ${o}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: d.auth,
                  user_data: d.user_data
                });
              }, this.pusher = t, this.pusher.connection.bind("state_change", ({ previous: o, current: d }) => {
                o !== "connected" && d === "connected" && this._signin(), o === "connected" && d !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new Di(t), this.pusher.connection.bind("message", (o) => {
                var d = o.event;
                d === "pusher:signin_success" && this._onSigninSuccess(o.data), this.serverToUserChannel && this.serverToUserChannel.name === o.channel && this.serverToUserChannel.handleEvent(o);
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
            _onSigninSuccess(t) {
              try {
                this.user_data = JSON.parse(t.user_data);
              } catch {
                j.error(`Failed parsing user data after signin: ${t.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                j.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const t = (o) => {
                o.subscriptionPending && o.subscriptionCancelled ? o.reinstateSubscription() : !o.subscriptionPending && this.pusher.connection.state === "connected" && o.subscribe();
              };
              this.serverToUserChannel = new Ke(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((o, d) => {
                o.indexOf("pusher_internal:") === 0 || o.indexOf("pusher:") === 0 || this.emit(o, d);
              }), t(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: t, resolve: o } = Ui();
              t.done = !1;
              const d = () => {
                t.done = !0;
              };
              t.then(d).catch(d), this.signinDonePromise = t, this._signinDoneResolve = o;
            }
          }
          class G {
            static ready() {
              G.isReady = !0;
              for (var t = 0, o = G.instances.length; t < o; t++)
                G.instances[t].connect();
            }
            static getClientFeatures() {
              return At(Et({ ws: N.Transports.ws }, function(t) {
                return t.isSupported({});
              }));
            }
            constructor(t, o) {
              Hi(t), _i(o), this.key = t, this.config = Ri(o, this), this.channels = re.createChannels(), this.global_emitter = new ne(), this.sessionID = N.randomInt(1e9), this.timeline = new yi(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: G.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: Pe.INFO,
                version: u.VERSION
              }), this.config.enableStats && (this.timelineSender = re.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + N.TimelineTransport.name
              }));
              var d = (f) => N.getDefaultStrategy(this.config, f, wi);
              this.connection = re.createConnectionManager(this.key, {
                getStrategy: d,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (f) => {
                var w = f.event, T = w.indexOf("pusher_internal:") === 0;
                if (f.channel) {
                  var L = this.channel(f.channel);
                  L && L.handleEvent(f);
                }
                T || this.global_emitter.emit(f.event, f.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (f) => {
                j.warn(f);
              }), G.instances.push(this), this.timeline.info({ instances: G.instances.length }), this.user = new ji(this), G.isReady && this.connect();
            }
            channel(t) {
              return this.channels.find(t);
            }
            allChannels() {
              return this.channels.all();
            }
            connect() {
              if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                var t = this.connection.isUsingTLS(), o = this.timelineSender;
                this.timelineSenderTimer = new Wn(6e4, function() {
                  o.send(t);
                });
              }
            }
            disconnect() {
              this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
            }
            bind(t, o, d) {
              return this.global_emitter.bind(t, o, d), this;
            }
            unbind(t, o, d) {
              return this.global_emitter.unbind(t, o, d), this;
            }
            bind_global(t) {
              return this.global_emitter.bind_global(t), this;
            }
            unbind_global(t) {
              return this.global_emitter.unbind_global(t), this;
            }
            unbind_all(t) {
              return this.global_emitter.unbind_all(), this;
            }
            subscribeAll() {
              var t;
              for (t in this.channels.channels)
                this.channels.channels.hasOwnProperty(t) && this.subscribe(t);
            }
            subscribe(t) {
              var o = this.channels.add(t, this);
              return o.subscriptionPending && o.subscriptionCancelled ? o.reinstateSubscription() : !o.subscriptionPending && this.connection.state === "connected" && o.subscribe(), o;
            }
            unsubscribe(t) {
              var o = this.channels.find(t);
              o && o.subscriptionPending ? o.cancelSubscription() : (o = this.channels.remove(t), o && o.subscribed && o.unsubscribe());
            }
            send_event(t, o, d) {
              return this.connection.send_event(t, o, d);
            }
            shouldUseTLS() {
              return this.config.useTLS;
            }
            signin() {
              this.user.signin();
            }
          }
          G.instances = [], G.isReady = !1, G.logToConsole = !1, G.Runtime = N, G.ScriptReceivers = N.ScriptReceivers, G.DependenciesReceivers = N.DependenciesReceivers, G.auth_callbacks = N.auth_callbacks;
          var et = i.default = G;
          function Hi(c) {
            if (c == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          N.setup(G);
        }
        /******/
      ])
    );
  });
})(an);
var es = an.exports;
const ts = /* @__PURE__ */ Zi(es), A = "cpr-agent", cn = "itdsiqtx8cpskowawl1p", he = "https://agent.surrealdisco.co.uk";
function ln() {
  var e;
  return (((e = game == null ? void 0 : game.settings) == null ? void 0 : e.get(A, "apiUrl")) || he).trim().replace(/\/$/, "") || he;
}
function ns() {
  try {
    return new URL(ln()).origin;
  } catch {
    return new URL(he).origin;
  }
}
const we = {
  Pistol: [13, 15, 20, 25, 30, 30, 99, 99],
  SMG: [15, 13, 15, 20, 25, 25, 30, 99],
  Shotgun: [13, 15, 20, 25, 30, 35, 99, 99],
  "Assault Rifle": [17, 16, 15, 13, 15, 20, 25, 30],
  "Sniper Rifle": [30, 25, 25, 20, 15, 16, 17, 20],
  "Bows and Crossbows": [15, 13, 15, 17, 20, 22, 99, 99],
  "Grenade Launcher": [16, 15, 15, 17, 20, 22, 25, 99],
  "Rocket Launcher": [17, 16, 15, 15, 20, 20, 25, 30],
  "Martial Arts": ["VS"],
  Unarmed: ["VS"],
  "Light Melee Weapon": ["VS"],
  "Medium Melee Weapon": ["VS"],
  "Heavy Melee Weapon": ["VS"],
  "Very Heavy Melee Weapon": ["VS"]
}, rs = [6, 12, 25, 50, 100, 200, 400, 800], Yt = {
  mediumPistol: "Pistol",
  heavyPistol: "Pistol",
  veryHeavyPistol: "Pistol",
  smg: "SMG",
  heavySmg: "SMG",
  shotgun: "Shotgun",
  assaultRifle: "Assault Rifle",
  sniperRifle: "Sniper Rifle",
  bowsAndCrossbows: "Bows and Crossbows",
  grenadeLauncher: "Grenade Launcher",
  rocketLauncher: "Rocket Launcher",
  thrownWeapon: "Grenade Launcher",
  unarmed: "Unarmed",
  martialArts: "Martial Arts",
  lightMelee: "Light Melee Weapon",
  lightMeleeWeapon: "Light Melee Weapon",
  mediumMelee: "Medium Melee Weapon",
  mediumMeleeWeapon: "Medium Melee Weapon",
  heavyMelee: "Heavy Melee Weapon",
  heavyMeleeWeapon: "Heavy Melee Weapon",
  vHeavyMelee: "Very Heavy Melee Weapon",
  veryHeavyMelee: "Very Heavy Melee Weapon",
  veryHeavyMeleeWeapon: "Very Heavy Melee Weapon"
};
function un(a) {
  var e, r;
  return Yt[(e = a == null ? void 0 : a.system) == null ? void 0 : e.weaponType] || Yt[(r = a == null ? void 0 : a.system) == null ? void 0 : r.variety] || "Pistol";
}
function hn(a, e) {
  const r = rs.findIndex((n) => e <= n);
  let i = r !== -1 ? we[a][r] : 99;
  return Array.isArray(we[a]) && typeof we[a][0] == "string" && (i = we[a][Math.min(r !== -1 ? r : 0, we[a].length - 1)]), i;
}
function ke(a) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ke(a);
}
function z(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function is(a, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
  }
}
function q(a, e, r) {
  return e && is(a.prototype, e), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function Ce() {
  return Ce = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i]);
    }
    return a;
  }, Ce.apply(this, arguments);
}
function X(a, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  a.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: a,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(a, "prototype", {
    writable: !1
  }), e && lt(a, e);
}
function Be(a) {
  return Be = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Be(a);
}
function lt(a, e) {
  return lt = Object.setPrototypeOf || function(i, n) {
    return i.__proto__ = n, i;
  }, lt(a, e);
}
function ss() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function os(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function as(a, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return os(a);
}
function Y(a) {
  var e = ss();
  return function() {
    var i = Be(a), n;
    if (e) {
      var s = Be(this).constructor;
      n = Reflect.construct(i, arguments, s);
    } else
      n = i.apply(this, arguments);
    return as(this, n);
  };
}
var mt = /* @__PURE__ */ function() {
  function a() {
    z(this, a);
  }
  return q(a, [{
    key: "listenForWhisper",
    value: (
      /**
       * Listen for a whisper event on the channel instance.
       */
      function(r, i) {
        return this.listen(".client-" + r, i);
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
    value: function(r, i) {
      return this.stopListening(".client-" + r, i);
    }
  }]), a;
}(), dn = /* @__PURE__ */ function() {
  function a(e) {
    z(this, a), this.namespace = e;
  }
  return q(a, [{
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
  }]), a;
}();
function cs(a) {
  try {
    new a();
  } catch (e) {
    if (e.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var yt = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r(i, n, s) {
    var l;
    return z(this, r), l = e.call(this), l.name = n, l.pusher = i, l.options = s, l.eventFormatter = new dn(l.options.namespace), l.subscribe(), l;
  }
  return q(r, [{
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
    value: function(n, s) {
      return this.on(this.eventFormatter.format(n), s), this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(n) {
      var s = this;
      return this.subscription.bind_global(function(l, h) {
        if (!l.startsWith("pusher:")) {
          var u = s.options.namespace.replace(/\./g, "\\"), p = l.startsWith(u) ? l.substring(u.length + 1) : "." + l;
          n(p, h);
        }
      }), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(n, s) {
      return s ? this.subscription.unbind(this.eventFormatter.format(n), s) : this.subscription.unbind(this.eventFormatter.format(n)), this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */
  }, {
    key: "stopListeningToAll",
    value: function(n) {
      return n ? this.subscription.unbind_global(n) : this.subscription.unbind_global(), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(n) {
      return this.on("pusher:subscription_succeeded", function() {
        n();
      }), this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */
  }, {
    key: "error",
    value: function(n) {
      return this.on("pusher:subscription_error", function(s) {
        n(s);
      }), this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(n, s) {
      return this.subscription.bind(n, s), this;
    }
  }]), r;
}(mt), fn = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), s), this;
      }
    )
  }]), r;
}(yt), ls = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), s), this;
      }
    )
  }]), r;
}(yt), us = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(n) {
        return this.on("pusher:subscription_succeeded", function(s) {
          n(Object.keys(s.members).map(function(l) {
            return s.members[l];
          }));
        }), this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(n) {
      return this.on("pusher:member_added", function(s) {
        n(s.info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(n, s) {
      return this.pusher.channels.channels[this.name].trigger("client-".concat(n), s), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(n) {
      return this.on("pusher:member_removed", function(s) {
        n(s.info);
      }), this;
    }
  }]), r;
}(fn), pn = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r(i, n, s) {
    var l;
    return z(this, r), l = e.call(this), l.events = {}, l.listeners = {}, l.name = n, l.socket = i, l.options = s, l.eventFormatter = new dn(l.options.namespace), l.subscribe(), l;
  }
  return q(r, [{
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
    value: function(n, s) {
      return this.on(this.eventFormatter.format(n), s), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(n, s) {
      return this.unbindEvent(this.eventFormatter.format(n), s), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(n) {
      return this.on("connect", function(s) {
        n(s);
      }), this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(n) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */
  }, {
    key: "on",
    value: function(n, s) {
      var l = this;
      return this.listeners[n] = this.listeners[n] || [], this.events[n] || (this.events[n] = function(h, u) {
        l.name === h && l.listeners[n] && l.listeners[n].forEach(function(p) {
          return p(u);
        });
      }, this.socket.on(n, this.events[n])), this.listeners[n].push(s), this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function() {
      var n = this;
      Object.keys(this.events).forEach(function(s) {
        n.unbindEvent(s);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function(n, s) {
      this.listeners[n] = this.listeners[n] || [], s && (this.listeners[n] = this.listeners[n].filter(function(l) {
        return l !== s;
      })), (!s || this.listeners[n].length === 0) && (this.events[n] && (this.socket.removeListener(n, this.events[n]), delete this.events[n]), delete this.listeners[n]);
    }
  }]), r;
}(mt), gn = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(n),
          data: s
        }), this;
      }
    )
  }]), r;
}(pn), hs = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(n) {
        return this.on("presence:subscribed", function(s) {
          n(s.map(function(l) {
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
    value: function(n) {
      return this.on("presence:joining", function(s) {
        return n(s.user_info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(n, s) {
      return this.socket.emit("client event", {
        channel: this.name,
        event: "client-".concat(n),
        data: s
      }), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(n) {
      return this.on("presence:leaving", function(s) {
        return n(s.user_info);
      }), this;
    }
  }]), r;
}(gn), xe = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
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
    value: function(n, s) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(n) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(n, s) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(n) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(n) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(n, s) {
      return this;
    }
  }]), r;
}(mt), mn = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this;
      }
    )
  }]), r;
}(xe), ds = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this;
      }
    )
  }]), r;
}(xe), fs = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    return z(this, r), e.apply(this, arguments);
  }
  return q(r, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(n) {
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(n) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(n, s) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(n) {
      return this;
    }
  }]), r;
}(mn), bt = /* @__PURE__ */ function() {
  function a(e) {
    z(this, a), this._defaultOptions = {
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
    }, this.setOptions(e), this.connect();
  }
  return q(a, [{
    key: "setOptions",
    value: function(r) {
      this.options = Ce(this._defaultOptions, r);
      var i = this.csrfToken();
      return i && (this.options.auth.headers["X-CSRF-TOKEN"] = i, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = i), i = this.options.bearerToken, i && (this.options.auth.headers.Authorization = "Bearer " + i, this.options.userAuthentication.headers.Authorization = "Bearer " + i), r;
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
  }]), a;
}(), Qt = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    var i;
    return z(this, r), i = e.apply(this, arguments), i.channels = {}, i;
  }
  return q(r, [{
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
    value: function(n, s, l) {
      return this.channel(n).listen(s, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return this.channels[n] || (this.channels[n] = new yt(this.pusher, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new fn(this.pusher, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return this.channels["private-encrypted-" + n] || (this.channels["private-encrypted-" + n] = new ls(this.pusher, "private-encrypted-" + n, this.options)), this.channels["private-encrypted-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new us(this.pusher, "presence-" + n, this.options)), this.channels["presence-" + n];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(n) {
      var s = this, l = [n, "private-" + n, "private-encrypted-" + n, "presence-" + n];
      l.forEach(function(h, u) {
        s.leaveChannel(h);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(n) {
      this.channels[n] && (this.channels[n].unsubscribe(), delete this.channels[n]);
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
}(bt), Zt = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    var i;
    return z(this, r), i = e.apply(this, arguments), i.channels = {}, i;
  }
  return q(r, [{
    key: "connect",
    value: function() {
      var n = this, s = this.getSocketIO();
      return this.socket = s(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(n.channels).forEach(function(l) {
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
    value: function(n, s, l) {
      return this.channel(n).listen(s, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return this.channels[n] || (this.channels[n] = new pn(this.socket, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new gn(this.socket, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new hs(this.socket, "presence-" + n, this.options)), this.channels["presence-" + n];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(n) {
      var s = this, l = [n, "private-" + n, "presence-" + n];
      l.forEach(function(h) {
        s.leaveChannel(h);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(n) {
      this.channels[n] && (this.channels[n].unsubscribe(), delete this.channels[n]);
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
}(bt), ps = /* @__PURE__ */ function(a) {
  X(r, a);
  var e = Y(r);
  function r() {
    var i;
    return z(this, r), i = e.apply(this, arguments), i.channels = {}, i;
  }
  return q(r, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(n, s, l) {
      return new xe();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return new xe();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return new mn();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return new ds();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return new fs();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(n) {
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(n) {
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
}(bt), gs = /* @__PURE__ */ function() {
  function a(e) {
    z(this, a), this.options = e, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return q(a, [{
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
        this.connector = new Qt(Ce(Ce({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new Qt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Zt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new ps(this.options);
      else if (typeof this.options.broadcaster == "function" && cs(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(ke(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
    value: function(r, i, n) {
      return this.connector.listen(r, i, n);
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
      if (this.connector instanceof Zt)
        throw new Error("Broadcaster ".concat(ke(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : ke(Turbo)) === "object" && this.registerTurboRequestInterceptor();
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerVueRequestInterceptor",
    value: function() {
      var r = this;
      Vue.http.interceptors.push(function(i, n) {
        r.socketId() && i.headers.set("X-Socket-ID", r.socketId()), n();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function() {
      var r = this;
      axios.interceptors.request.use(function(i) {
        return r.socketId() && (i.headers["X-Socket-Id"] = r.socketId()), i;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function() {
      var r = this;
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(i, n, s) {
        r.socketId() && s.setRequestHeader("X-Socket-Id", r.socketId());
      });
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerTurboRequestInterceptor",
    value: function() {
      var r = this;
      document.addEventListener("turbo:before-fetch-request", function(i) {
        i.detail.fetchOptions.headers["X-Socket-Id"] = r.socketId();
      });
    }
  }]), a;
}();
function ms(a, e = 6) {
  return !a || a.length <= e * 2 + 3 ? a : `${a.substring(0, e)}...${a.substring(a.length - e)}`;
}
function ut(a, e, r = {}) {
  for (let i in a) {
    const n = a[i];
    n !== null && typeof n == "object" && !Array.isArray(n) && !(n instanceof foundry.utils.Color) ? ut(n, `${e}${i}.`, r) : r[`${e}${i}`] = n;
  }
  return r;
}
async function ys(a, e, r, i = null) {
  return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${e}`, "color: #00ffff; font-weight: bold;"), await a._beginRollCapture(i), new Promise(async (n, s) => {
    let l = !1;
    const h = renderTemplate, u = function(p, g) {
      return p && typeof p == "string" && p.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${p}`, "color: #00ff00;", g), l = !0, renderTemplate = h, n({
        success: !0,
        total: g.resultTotal,
        isCriticalSuccess: g.wasCritSuccess ? g.wasCritSuccess() : g.isCriticalSuccess || !1,
        isCriticalFailure: g.wasCritFail ? g.wasCritFail() : g.isCriticalFailure || !1,
        label: g.rollTitle,
        rollMode: a._captureRollMode || game.settings.get("core", "rollMode"),
        rawRoll: g
      })), h.apply(this, arguments);
    };
    renderTemplate = u, setTimeout(async () => {
      l || (renderTemplate = h, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), a._endRollCapture(), n({ success: !1, error: "Timed out waiting for render" }));
    }, 5e3);
    try {
      await r();
    } catch {
      renderTemplate = h, a._endRollCapture(), n({ success: !1, error: "Trigger failed" });
    }
  });
}
var Te = {}, bs = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, yn = {}, Q = {};
let vt;
const vs = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
Q.getSymbolSize = function(e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
Q.getSymbolTotalCodewords = function(e) {
  return vs[e];
};
Q.getBCHDigit = function(a) {
  let e = 0;
  for (; a !== 0; )
    e++, a >>>= 1;
  return e;
};
Q.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  vt = e;
};
Q.isKanjiModeEnabled = function() {
  return typeof vt < "u";
};
Q.toSJIS = function(e) {
  return vt(e);
};
var je = {};
(function(a) {
  a.L = { bit: 1 }, a.M = { bit: 0 }, a.Q = { bit: 3 }, a.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return a.L;
      case "m":
      case "medium":
        return a.M;
      case "q":
      case "quartile":
        return a.Q;
      case "h":
      case "high":
        return a.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  a.isValid = function(i) {
    return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
  }, a.from = function(i, n) {
    if (a.isValid(i))
      return i;
    try {
      return e(i);
    } catch {
      return n;
    }
  };
})(je);
function bn() {
  this.buffer = [], this.length = 0;
}
bn.prototype = {
  get: function(a) {
    const e = Math.floor(a / 8);
    return (this.buffer[e] >>> 7 - a % 8 & 1) === 1;
  },
  put: function(a, e) {
    for (let r = 0; r < e; r++)
      this.putBit((a >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(a) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), a && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var ws = bn;
function Ae(a) {
  if (!a || a < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = a, this.data = new Uint8Array(a * a), this.reservedBit = new Uint8Array(a * a);
}
Ae.prototype.set = function(a, e, r, i) {
  const n = a * this.size + e;
  this.data[n] = r, i && (this.reservedBit[n] = !0);
};
Ae.prototype.get = function(a, e) {
  return this.data[a * this.size + e];
};
Ae.prototype.xor = function(a, e, r) {
  this.data[a * this.size + e] ^= r;
};
Ae.prototype.isReserved = function(a, e) {
  return this.reservedBit[a * this.size + e];
};
var ks = Ae, vn = {};
(function(a) {
  const e = Q.getSymbolSize;
  a.getRowColCoords = function(i) {
    if (i === 1) return [];
    const n = Math.floor(i / 7) + 2, s = e(i), l = s === 145 ? 26 : Math.ceil((s - 13) / (2 * n - 2)) * 2, h = [s - 7];
    for (let u = 1; u < n - 1; u++)
      h[u] = h[u - 1] - l;
    return h.push(6), h.reverse();
  }, a.getPositions = function(i) {
    const n = [], s = a.getRowColCoords(i), l = s.length;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        h === 0 && u === 0 || // top-left
        h === 0 && u === l - 1 || // bottom-left
        h === l - 1 && u === 0 || n.push([s[h], s[u]]);
    return n;
  };
})(vn);
var wn = {};
const _s = Q.getSymbolSize, en = 7;
wn.getPositions = function(e) {
  const r = _s(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [r - en, 0],
    // bottom-left
    [0, r - en]
  ];
};
var kn = {};
(function(a) {
  a.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  a.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, a.from = function(n) {
    return a.isValid(n) ? parseInt(n, 10) : void 0;
  }, a.getPenaltyN1 = function(n) {
    const s = n.size;
    let l = 0, h = 0, u = 0, p = null, g = null;
    for (let m = 0; m < s; m++) {
      h = u = 0, p = g = null;
      for (let b = 0; b < s; b++) {
        let y = n.get(m, b);
        y === p ? h++ : (h >= 5 && (l += e.N1 + (h - 5)), p = y, h = 1), y = n.get(b, m), y === g ? u++ : (u >= 5 && (l += e.N1 + (u - 5)), g = y, u = 1);
      }
      h >= 5 && (l += e.N1 + (h - 5)), u >= 5 && (l += e.N1 + (u - 5));
    }
    return l;
  }, a.getPenaltyN2 = function(n) {
    const s = n.size;
    let l = 0;
    for (let h = 0; h < s - 1; h++)
      for (let u = 0; u < s - 1; u++) {
        const p = n.get(h, u) + n.get(h, u + 1) + n.get(h + 1, u) + n.get(h + 1, u + 1);
        (p === 4 || p === 0) && l++;
      }
    return l * e.N2;
  }, a.getPenaltyN3 = function(n) {
    const s = n.size;
    let l = 0, h = 0, u = 0;
    for (let p = 0; p < s; p++) {
      h = u = 0;
      for (let g = 0; g < s; g++)
        h = h << 1 & 2047 | n.get(p, g), g >= 10 && (h === 1488 || h === 93) && l++, u = u << 1 & 2047 | n.get(g, p), g >= 10 && (u === 1488 || u === 93) && l++;
    }
    return l * e.N3;
  }, a.getPenaltyN4 = function(n) {
    let s = 0;
    const l = n.data.length;
    for (let u = 0; u < l; u++) s += n.data[u];
    return Math.abs(Math.ceil(s * 100 / l / 5) - 10) * e.N4;
  };
  function r(i, n, s) {
    switch (i) {
      case a.Patterns.PATTERN000:
        return (n + s) % 2 === 0;
      case a.Patterns.PATTERN001:
        return n % 2 === 0;
      case a.Patterns.PATTERN010:
        return s % 3 === 0;
      case a.Patterns.PATTERN011:
        return (n + s) % 3 === 0;
      case a.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(s / 3)) % 2 === 0;
      case a.Patterns.PATTERN101:
        return n * s % 2 + n * s % 3 === 0;
      case a.Patterns.PATTERN110:
        return (n * s % 2 + n * s % 3) % 2 === 0;
      case a.Patterns.PATTERN111:
        return (n * s % 3 + (n + s) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + i);
    }
  }
  a.applyMask = function(n, s) {
    const l = s.size;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        s.isReserved(u, h) || s.xor(u, h, r(n, u, h));
  }, a.getBestMask = function(n, s) {
    const l = Object.keys(a.Patterns).length;
    let h = 0, u = 1 / 0;
    for (let p = 0; p < l; p++) {
      s(p), a.applyMask(p, n);
      const g = a.getPenaltyN1(n) + a.getPenaltyN2(n) + a.getPenaltyN3(n) + a.getPenaltyN4(n);
      a.applyMask(p, n), g < u && (u = g, h = p);
    }
    return h;
  };
})(kn);
var He = {};
const ie = je, Ne = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], Oe = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
He.getBlocksCount = function(e, r) {
  switch (r) {
    case ie.L:
      return Ne[(e - 1) * 4 + 0];
    case ie.M:
      return Ne[(e - 1) * 4 + 1];
    case ie.Q:
      return Ne[(e - 1) * 4 + 2];
    case ie.H:
      return Ne[(e - 1) * 4 + 3];
    default:
      return;
  }
};
He.getTotalCodewordsCount = function(e, r) {
  switch (r) {
    case ie.L:
      return Oe[(e - 1) * 4 + 0];
    case ie.M:
      return Oe[(e - 1) * 4 + 1];
    case ie.Q:
      return Oe[(e - 1) * 4 + 2];
    case ie.H:
      return Oe[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var _n = {}, ze = {};
const _e = new Uint8Array(512), De = new Uint8Array(256);
(function() {
  let e = 1;
  for (let r = 0; r < 255; r++)
    _e[r] = e, De[e] = r, e <<= 1, e & 256 && (e ^= 285);
  for (let r = 255; r < 512; r++)
    _e[r] = _e[r - 255];
})();
ze.log = function(e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return De[e];
};
ze.exp = function(e) {
  return _e[e];
};
ze.mul = function(e, r) {
  return e === 0 || r === 0 ? 0 : _e[De[e] + De[r]];
};
(function(a) {
  const e = ze;
  a.mul = function(i, n) {
    const s = new Uint8Array(i.length + n.length - 1);
    for (let l = 0; l < i.length; l++)
      for (let h = 0; h < n.length; h++)
        s[l + h] ^= e.mul(i[l], n[h]);
    return s;
  }, a.mod = function(i, n) {
    let s = new Uint8Array(i);
    for (; s.length - n.length >= 0; ) {
      const l = s[0];
      for (let u = 0; u < n.length; u++)
        s[u] ^= e.mul(n[u], l);
      let h = 0;
      for (; h < s.length && s[h] === 0; ) h++;
      s = s.slice(h);
    }
    return s;
  }, a.generateECPolynomial = function(i) {
    let n = new Uint8Array([1]);
    for (let s = 0; s < i; s++)
      n = a.mul(n, new Uint8Array([1, e.exp(s)]));
    return n;
  };
})(_n);
const Cn = _n;
function wt(a) {
  this.genPoly = void 0, this.degree = a, this.degree && this.initialize(this.degree);
}
wt.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Cn.generateECPolynomial(this.degree);
};
wt.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(e.length + this.degree);
  r.set(e);
  const i = Cn.mod(r, this.genPoly), n = this.degree - i.length;
  if (n > 0) {
    const s = new Uint8Array(this.degree);
    return s.set(i, n), s;
  }
  return i;
};
var Cs = wt, Sn = {}, se = {}, kt = {};
kt.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var ee = {};
const Tn = "[0-9]+", Ss = "[A-Z $%*+\\-./:]+";
let Se = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Se = Se.replace(/u/g, "\\u");
const Ts = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Se + `)(?:.|[\r
]))+`;
ee.KANJI = new RegExp(Se, "g");
ee.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
ee.BYTE = new RegExp(Ts, "g");
ee.NUMERIC = new RegExp(Tn, "g");
ee.ALPHANUMERIC = new RegExp(Ss, "g");
const As = new RegExp("^" + Se + "$"), Is = new RegExp("^" + Tn + "$"), Rs = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
ee.testKanji = function(e) {
  return As.test(e);
};
ee.testNumeric = function(e) {
  return Is.test(e);
};
ee.testAlphanumeric = function(e) {
  return Rs.test(e);
};
(function(a) {
  const e = kt, r = ee;
  a.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, a.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, a.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, a.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, a.MIXED = {
    bit: -1
  }, a.getCharCountIndicator = function(s, l) {
    if (!s.ccBits) throw new Error("Invalid mode: " + s);
    if (!e.isValid(l))
      throw new Error("Invalid version: " + l);
    return l >= 1 && l < 10 ? s.ccBits[0] : l < 27 ? s.ccBits[1] : s.ccBits[2];
  }, a.getBestModeForData = function(s) {
    return r.testNumeric(s) ? a.NUMERIC : r.testAlphanumeric(s) ? a.ALPHANUMERIC : r.testKanji(s) ? a.KANJI : a.BYTE;
  }, a.toString = function(s) {
    if (s && s.id) return s.id;
    throw new Error("Invalid mode");
  }, a.isValid = function(s) {
    return s && s.bit && s.ccBits;
  };
  function i(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "numeric":
        return a.NUMERIC;
      case "alphanumeric":
        return a.ALPHANUMERIC;
      case "kanji":
        return a.KANJI;
      case "byte":
        return a.BYTE;
      default:
        throw new Error("Unknown mode: " + n);
    }
  }
  a.from = function(s, l) {
    if (a.isValid(s))
      return s;
    try {
      return i(s);
    } catch {
      return l;
    }
  };
})(se);
(function(a) {
  const e = Q, r = He, i = je, n = se, s = kt, l = 7973, h = e.getBCHDigit(l);
  function u(b, y, C) {
    for (let _ = 1; _ <= 40; _++)
      if (y <= a.getCapacity(_, C, b))
        return _;
  }
  function p(b, y) {
    return n.getCharCountIndicator(b, y) + 4;
  }
  function g(b, y) {
    let C = 0;
    return b.forEach(function(_) {
      const k = p(_.mode, y);
      C += k + _.getBitsLength();
    }), C;
  }
  function m(b, y) {
    for (let C = 1; C <= 40; C++)
      if (g(b, C) <= a.getCapacity(C, y, n.MIXED))
        return C;
  }
  a.from = function(y, C) {
    return s.isValid(y) ? parseInt(y, 10) : C;
  }, a.getCapacity = function(y, C, _) {
    if (!s.isValid(y))
      throw new Error("Invalid QR Code version");
    typeof _ > "u" && (_ = n.BYTE);
    const k = e.getSymbolTotalCodewords(y), v = r.getTotalCodewordsCount(y, C), S = (k - v) * 8;
    if (_ === n.MIXED) return S;
    const I = S - p(_, y);
    switch (_) {
      case n.NUMERIC:
        return Math.floor(I / 10 * 3);
      case n.ALPHANUMERIC:
        return Math.floor(I / 11 * 2);
      case n.KANJI:
        return Math.floor(I / 13);
      case n.BYTE:
      default:
        return Math.floor(I / 8);
    }
  }, a.getBestVersionForData = function(y, C) {
    let _;
    const k = i.from(C, i.M);
    if (Array.isArray(y)) {
      if (y.length > 1)
        return m(y, k);
      if (y.length === 0)
        return 1;
      _ = y[0];
    } else
      _ = y;
    return u(_.mode, _.getLength(), k);
  }, a.getEncodedBits = function(y) {
    if (!s.isValid(y) || y < 7)
      throw new Error("Invalid QR Code version");
    let C = y << 12;
    for (; e.getBCHDigit(C) - h >= 0; )
      C ^= l << e.getBCHDigit(C) - h;
    return y << 12 | C;
  };
})(Sn);
var An = {};
const ht = Q, In = 1335, Es = 21522, tn = ht.getBCHDigit(In);
An.getEncodedBits = function(e, r) {
  const i = e.bit << 3 | r;
  let n = i << 10;
  for (; ht.getBCHDigit(n) - tn >= 0; )
    n ^= In << ht.getBCHDigit(n) - tn;
  return (i << 10 | n) ^ Es;
};
var Rn = {};
const Ls = se;
function de(a) {
  this.mode = Ls.NUMERIC, this.data = a.toString();
}
de.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
de.prototype.getLength = function() {
  return this.data.length;
};
de.prototype.getBitsLength = function() {
  return de.getBitsLength(this.data.length);
};
de.prototype.write = function(e) {
  let r, i, n;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    i = this.data.substr(r, 3), n = parseInt(i, 10), e.put(n, 10);
  const s = this.data.length - r;
  s > 0 && (i = this.data.substr(r), n = parseInt(i, 10), e.put(n, s * 3 + 1));
};
var Ps = de;
const Ms = se, it = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function fe(a) {
  this.mode = Ms.ALPHANUMERIC, this.data = a;
}
fe.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
fe.prototype.getLength = function() {
  return this.data.length;
};
fe.prototype.getBitsLength = function() {
  return fe.getBitsLength(this.data.length);
};
fe.prototype.write = function(e) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let i = it.indexOf(this.data[r]) * 45;
    i += it.indexOf(this.data[r + 1]), e.put(i, 11);
  }
  this.data.length % 2 && e.put(it.indexOf(this.data[r]), 6);
};
var Ns = fe;
const Os = se;
function pe(a) {
  this.mode = Os.BYTE, typeof a == "string" ? this.data = new TextEncoder().encode(a) : this.data = new Uint8Array(a);
}
pe.getBitsLength = function(e) {
  return e * 8;
};
pe.prototype.getLength = function() {
  return this.data.length;
};
pe.prototype.getBitsLength = function() {
  return pe.getBitsLength(this.data.length);
};
pe.prototype.write = function(a) {
  for (let e = 0, r = this.data.length; e < r; e++)
    a.put(this.data[e], 8);
};
var Bs = pe;
const xs = se, Ds = Q;
function ge(a) {
  this.mode = xs.KANJI, this.data = a;
}
ge.getBitsLength = function(e) {
  return e * 13;
};
ge.prototype.getLength = function() {
  return this.data.length;
};
ge.prototype.getBitsLength = function() {
  return ge.getBitsLength(this.data.length);
};
ge.prototype.write = function(a) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let r = Ds.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), a.put(r, 13);
  }
};
var Fs = ge, En = { exports: {} };
(function(a) {
  var e = {
    single_source_shortest_paths: function(r, i, n) {
      var s = {}, l = {};
      l[i] = 0;
      var h = e.PriorityQueue.make();
      h.push(i, 0);
      for (var u, p, g, m, b, y, C, _, k; !h.empty(); ) {
        u = h.pop(), p = u.value, m = u.cost, b = r[p] || {};
        for (g in b)
          b.hasOwnProperty(g) && (y = b[g], C = m + y, _ = l[g], k = typeof l[g] > "u", (k || _ > C) && (l[g] = C, h.push(g, C), s[g] = p));
      }
      if (typeof n < "u" && typeof l[n] > "u") {
        var v = ["Could not find a path from ", i, " to ", n, "."].join("");
        throw new Error(v);
      }
      return s;
    },
    extract_shortest_path_from_predecessor_list: function(r, i) {
      for (var n = [], s = i; s; )
        n.push(s), r[s], s = r[s];
      return n.reverse(), n;
    },
    find_path: function(r, i, n) {
      var s = e.single_source_shortest_paths(r, i, n);
      return e.extract_shortest_path_from_predecessor_list(
        s,
        n
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(r) {
        var i = e.PriorityQueue, n = {}, s;
        r = r || {};
        for (s in i)
          i.hasOwnProperty(s) && (n[s] = i[s]);
        return n.queue = [], n.sorter = r.sorter || i.default_sorter, n;
      },
      default_sorter: function(r, i) {
        return r.cost - i.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(r, i) {
        var n = { value: r, cost: i };
        this.queue.push(n), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  a.exports = e;
})(En);
var Us = En.exports;
(function(a) {
  const e = se, r = Ps, i = Ns, n = Bs, s = Fs, l = ee, h = Q, u = Us;
  function p(v) {
    return unescape(encodeURIComponent(v)).length;
  }
  function g(v, S, I) {
    const E = [];
    let R;
    for (; (R = v.exec(I)) !== null; )
      E.push({
        data: R[0],
        index: R.index,
        mode: S,
        length: R[0].length
      });
    return E;
  }
  function m(v) {
    const S = g(l.NUMERIC, e.NUMERIC, v), I = g(l.ALPHANUMERIC, e.ALPHANUMERIC, v);
    let E, R;
    return h.isKanjiModeEnabled() ? (E = g(l.BYTE, e.BYTE, v), R = g(l.KANJI, e.KANJI, v)) : (E = g(l.BYTE_KANJI, e.BYTE, v), R = []), S.concat(I, E, R).sort(function(O, B) {
      return O.index - B.index;
    }).map(function(O) {
      return {
        data: O.data,
        mode: O.mode,
        length: O.length
      };
    });
  }
  function b(v, S) {
    switch (S) {
      case e.NUMERIC:
        return r.getBitsLength(v);
      case e.ALPHANUMERIC:
        return i.getBitsLength(v);
      case e.KANJI:
        return s.getBitsLength(v);
      case e.BYTE:
        return n.getBitsLength(v);
    }
  }
  function y(v) {
    return v.reduce(function(S, I) {
      const E = S.length - 1 >= 0 ? S[S.length - 1] : null;
      return E && E.mode === I.mode ? (S[S.length - 1].data += I.data, S) : (S.push(I), S);
    }, []);
  }
  function C(v) {
    const S = [];
    for (let I = 0; I < v.length; I++) {
      const E = v[I];
      switch (E.mode) {
        case e.NUMERIC:
          S.push([
            E,
            { data: E.data, mode: e.ALPHANUMERIC, length: E.length },
            { data: E.data, mode: e.BYTE, length: E.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          S.push([
            E,
            { data: E.data, mode: e.BYTE, length: E.length }
          ]);
          break;
        case e.KANJI:
          S.push([
            E,
            { data: E.data, mode: e.BYTE, length: p(E.data) }
          ]);
          break;
        case e.BYTE:
          S.push([
            { data: E.data, mode: e.BYTE, length: p(E.data) }
          ]);
      }
    }
    return S;
  }
  function _(v, S) {
    const I = {}, E = { start: {} };
    let R = ["start"];
    for (let P = 0; P < v.length; P++) {
      const O = v[P], B = [];
      for (let U = 0; U < O.length; U++) {
        const F = O[U], Z = "" + P + U;
        B.push(Z), I[Z] = { node: F, lastCount: 0 }, E[Z] = {};
        for (let W = 0; W < R.length; W++) {
          const V = R[W];
          I[V] && I[V].node.mode === F.mode ? (E[V][Z] = b(I[V].lastCount + F.length, F.mode) - b(I[V].lastCount, F.mode), I[V].lastCount += F.length) : (I[V] && (I[V].lastCount = F.length), E[V][Z] = b(F.length, F.mode) + 4 + e.getCharCountIndicator(F.mode, S));
        }
      }
      R = B;
    }
    for (let P = 0; P < R.length; P++)
      E[R[P]].end = 0;
    return { map: E, table: I };
  }
  function k(v, S) {
    let I;
    const E = e.getBestModeForData(v);
    if (I = e.from(S, E), I !== e.BYTE && I.bit < E.bit)
      throw new Error('"' + v + '" cannot be encoded with mode ' + e.toString(I) + `.
 Suggested mode is: ` + e.toString(E));
    switch (I === e.KANJI && !h.isKanjiModeEnabled() && (I = e.BYTE), I) {
      case e.NUMERIC:
        return new r(v);
      case e.ALPHANUMERIC:
        return new i(v);
      case e.KANJI:
        return new s(v);
      case e.BYTE:
        return new n(v);
    }
  }
  a.fromArray = function(S) {
    return S.reduce(function(I, E) {
      return typeof E == "string" ? I.push(k(E, null)) : E.data && I.push(k(E.data, E.mode)), I;
    }, []);
  }, a.fromString = function(S, I) {
    const E = m(S, h.isKanjiModeEnabled()), R = C(E), P = _(R, I), O = u.find_path(P.map, "start", "end"), B = [];
    for (let U = 1; U < O.length - 1; U++)
      B.push(P.table[O[U]].node);
    return a.fromArray(y(B));
  }, a.rawSplit = function(S) {
    return a.fromArray(
      m(S, h.isKanjiModeEnabled())
    );
  };
})(Rn);
const qe = Q, st = je, js = ws, Hs = ks, zs = vn, qs = wn, dt = kn, ft = He, $s = Cs, Fe = Sn, Gs = An, Vs = se, ot = Rn;
function Ks(a, e) {
  const r = a.size, i = qs.getPositions(e);
  for (let n = 0; n < i.length; n++) {
    const s = i[n][0], l = i[n][1];
    for (let h = -1; h <= 7; h++)
      if (!(s + h <= -1 || r <= s + h))
        for (let u = -1; u <= 7; u++)
          l + u <= -1 || r <= l + u || (h >= 0 && h <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && u >= 2 && u <= 4 ? a.set(s + h, l + u, !0, !0) : a.set(s + h, l + u, !1, !0));
  }
}
function Ws(a) {
  const e = a.size;
  for (let r = 8; r < e - 8; r++) {
    const i = r % 2 === 0;
    a.set(r, 6, i, !0), a.set(6, r, i, !0);
  }
}
function Js(a, e) {
  const r = zs.getPositions(e);
  for (let i = 0; i < r.length; i++) {
    const n = r[i][0], s = r[i][1];
    for (let l = -2; l <= 2; l++)
      for (let h = -2; h <= 2; h++)
        l === -2 || l === 2 || h === -2 || h === 2 || l === 0 && h === 0 ? a.set(n + l, s + h, !0, !0) : a.set(n + l, s + h, !1, !0);
  }
}
function Xs(a, e) {
  const r = a.size, i = Fe.getEncodedBits(e);
  let n, s, l;
  for (let h = 0; h < 18; h++)
    n = Math.floor(h / 3), s = h % 3 + r - 8 - 3, l = (i >> h & 1) === 1, a.set(n, s, l, !0), a.set(s, n, l, !0);
}
function at(a, e, r) {
  const i = a.size, n = Gs.getEncodedBits(e, r);
  let s, l;
  for (s = 0; s < 15; s++)
    l = (n >> s & 1) === 1, s < 6 ? a.set(s, 8, l, !0) : s < 8 ? a.set(s + 1, 8, l, !0) : a.set(i - 15 + s, 8, l, !0), s < 8 ? a.set(8, i - s - 1, l, !0) : s < 9 ? a.set(8, 15 - s - 1 + 1, l, !0) : a.set(8, 15 - s - 1, l, !0);
  a.set(i - 8, 8, 1, !0);
}
function Ys(a, e) {
  const r = a.size;
  let i = -1, n = r - 1, s = 7, l = 0;
  for (let h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!a.isReserved(n, h - u)) {
          let p = !1;
          l < e.length && (p = (e[l] >>> s & 1) === 1), a.set(n, h - u, p), s--, s === -1 && (l++, s = 7);
        }
      if (n += i, n < 0 || r <= n) {
        n -= i, i = -i;
        break;
      }
    }
}
function Qs(a, e, r) {
  const i = new js();
  r.forEach(function(u) {
    i.put(u.mode.bit, 4), i.put(u.getLength(), Vs.getCharCountIndicator(u.mode, a)), u.write(i);
  });
  const n = qe.getSymbolTotalCodewords(a), s = ft.getTotalCodewordsCount(a, e), l = (n - s) * 8;
  for (i.getLengthInBits() + 4 <= l && i.put(0, 4); i.getLengthInBits() % 8 !== 0; )
    i.putBit(0);
  const h = (l - i.getLengthInBits()) / 8;
  for (let u = 0; u < h; u++)
    i.put(u % 2 ? 17 : 236, 8);
  return Zs(i, a, e);
}
function Zs(a, e, r) {
  const i = qe.getSymbolTotalCodewords(e), n = ft.getTotalCodewordsCount(e, r), s = i - n, l = ft.getBlocksCount(e, r), h = i % l, u = l - h, p = Math.floor(i / l), g = Math.floor(s / l), m = g + 1, b = p - g, y = new $s(b);
  let C = 0;
  const _ = new Array(l), k = new Array(l);
  let v = 0;
  const S = new Uint8Array(a.buffer);
  for (let O = 0; O < l; O++) {
    const B = O < u ? g : m;
    _[O] = S.slice(C, C + B), k[O] = y.encode(_[O]), C += B, v = Math.max(v, B);
  }
  const I = new Uint8Array(i);
  let E = 0, R, P;
  for (R = 0; R < v; R++)
    for (P = 0; P < l; P++)
      R < _[P].length && (I[E++] = _[P][R]);
  for (R = 0; R < b; R++)
    for (P = 0; P < l; P++)
      I[E++] = k[P][R];
  return I;
}
function eo(a, e, r, i) {
  let n;
  if (Array.isArray(a))
    n = ot.fromArray(a);
  else if (typeof a == "string") {
    let p = e;
    if (!p) {
      const g = ot.rawSplit(a);
      p = Fe.getBestVersionForData(g, r);
    }
    n = ot.fromString(a, p || 40);
  } else
    throw new Error("Invalid data");
  const s = Fe.getBestVersionForData(n, r);
  if (!s)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = s;
  else if (e < s)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`
    );
  const l = Qs(e, r, n), h = qe.getSymbolSize(e), u = new Hs(h);
  return Ks(u, e), Ws(u), Js(u, e), at(u, r, 0), e >= 7 && Xs(u, e), Ys(u, l), isNaN(i) && (i = dt.getBestMask(
    u,
    at.bind(null, u, r)
  )), dt.applyMask(i, u), at(u, r, i), {
    modules: u,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: i,
    segments: n
  };
}
yn.create = function(e, r) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let i = st.M, n, s;
  return typeof r < "u" && (i = st.from(r.errorCorrectionLevel, st.M), n = Fe.from(r.version), s = dt.from(r.maskPattern), r.toSJISFunc && qe.setToSJISFunction(r.toSJISFunc)), eo(e, n, i, s);
};
var Ln = {}, _t = {};
(function(a) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    let i = r.slice().replace("#", "").split("");
    if (i.length < 3 || i.length === 5 || i.length > 8)
      throw new Error("Invalid hex color: " + r);
    (i.length === 3 || i.length === 4) && (i = Array.prototype.concat.apply([], i.map(function(s) {
      return [s, s];
    }))), i.length === 6 && i.push("F", "F");
    const n = parseInt(i.join(""), 16);
    return {
      r: n >> 24 & 255,
      g: n >> 16 & 255,
      b: n >> 8 & 255,
      a: n & 255,
      hex: "#" + i.slice(0, 6).join("")
    };
  }
  a.getOptions = function(i) {
    i || (i = {}), i.color || (i.color = {});
    const n = typeof i.margin > "u" || i.margin === null || i.margin < 0 ? 4 : i.margin, s = i.width && i.width >= 21 ? i.width : void 0, l = i.scale || 4;
    return {
      width: s,
      scale: s ? 4 : l,
      margin: n,
      color: {
        dark: e(i.color.dark || "#000000ff"),
        light: e(i.color.light || "#ffffffff")
      },
      type: i.type,
      rendererOpts: i.rendererOpts || {}
    };
  }, a.getScale = function(i, n) {
    return n.width && n.width >= i + n.margin * 2 ? n.width / (i + n.margin * 2) : n.scale;
  }, a.getImageWidth = function(i, n) {
    const s = a.getScale(i, n);
    return Math.floor((i + n.margin * 2) * s);
  }, a.qrToImageData = function(i, n, s) {
    const l = n.modules.size, h = n.modules.data, u = a.getScale(l, s), p = Math.floor((l + s.margin * 2) * u), g = s.margin * u, m = [s.color.light, s.color.dark];
    for (let b = 0; b < p; b++)
      for (let y = 0; y < p; y++) {
        let C = (b * p + y) * 4, _ = s.color.light;
        if (b >= g && y >= g && b < p - g && y < p - g) {
          const k = Math.floor((b - g) / u), v = Math.floor((y - g) / u);
          _ = m[h[k * l + v] ? 1 : 0];
        }
        i[C++] = _.r, i[C++] = _.g, i[C++] = _.b, i[C] = _.a;
      }
  };
})(_t);
(function(a) {
  const e = _t;
  function r(n, s, l) {
    n.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = l, s.width = l, s.style.height = l + "px", s.style.width = l + "px";
  }
  function i() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  a.render = function(s, l, h) {
    let u = h, p = l;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (p = i()), u = e.getOptions(u);
    const g = e.getImageWidth(s.modules.size, u), m = p.getContext("2d"), b = m.createImageData(g, g);
    return e.qrToImageData(b.data, s, u), r(m, p, g), m.putImageData(b, 0, 0), p;
  }, a.renderToDataURL = function(s, l, h) {
    let u = h;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
    const p = a.render(s, l, u), g = u.type || "image/png", m = u.rendererOpts || {};
    return p.toDataURL(g, m.quality);
  };
})(Ln);
var Pn = {};
const to = _t;
function nn(a, e) {
  const r = a.a / 255, i = e + '="' + a.hex + '"';
  return r < 1 ? i + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : i;
}
function ct(a, e, r) {
  let i = a + e;
  return typeof r < "u" && (i += " " + r), i;
}
function no(a, e, r) {
  let i = "", n = 0, s = !1, l = 0;
  for (let h = 0; h < a.length; h++) {
    const u = Math.floor(h % e), p = Math.floor(h / e);
    !u && !s && (s = !0), a[h] ? (l++, h > 0 && u > 0 && a[h - 1] || (i += s ? ct("M", u + r, 0.5 + p + r) : ct("m", n, 0), n = 0, s = !1), u + 1 < e && a[h + 1] || (i += ct("h", l), l = 0)) : n++;
  }
  return i;
}
Pn.render = function(e, r, i) {
  const n = to.getOptions(r), s = e.modules.size, l = e.modules.data, h = s + n.margin * 2, u = n.color.light.a ? "<path " + nn(n.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "", p = "<path " + nn(n.color.dark, "stroke") + ' d="' + no(l, s, n.margin) + '"/>', g = 'viewBox="0 0 ' + h + " " + h + '"', b = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + g + ' shape-rendering="crispEdges">' + u + p + `</svg>
`;
  return typeof i == "function" && i(null, b), b;
};
const ro = bs, pt = yn, Mn = Ln, so = Pn;
function Ct(a, e, r, i, n) {
  const s = [].slice.call(arguments, 1), l = s.length, h = typeof s[l - 1] == "function";
  if (!h && !ro())
    throw new Error("Callback required as last argument");
  if (h) {
    if (l < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (n = r, r = e, e = i = void 0) : l === 3 && (e.getContext && typeof n > "u" ? (n = i, i = void 0) : (n = i, i = r, r = e, e = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return l === 1 ? (r = e, e = i = void 0) : l === 2 && !e.getContext && (i = r, r = e, e = void 0), new Promise(function(u, p) {
      try {
        const g = pt.create(r, i);
        u(a(g, e, i));
      } catch (g) {
        p(g);
      }
    });
  }
  try {
    const u = pt.create(r, i);
    n(null, a(u, e, i));
  } catch (u) {
    n(u);
  }
}
Te.create = pt.create;
Te.toCanvas = Ct.bind(null, Mn.render);
Te.toDataURL = Ct.bind(null, Mn.renderToDataURL);
Te.toString = Ct.bind(null, function(a, e, r) {
  return so.render(a, r);
});
const gt = 300, oo = 1;
function Nn() {
  return (game.settings.get(A, "apiUrl") || "").replace(/\/$/, "");
}
function ao({ nonce: a, channelId: e, foundryUserName: r }) {
  return JSON.stringify({
    v: oo,
    agentUrl: Nn(),
    channelId: e || null,
    nonce: a,
    foundryUserName: r || null
  });
}
async function On(a, e, r) {
  const i = Nn(), n = game.settings.get(A, "apiKey"), s = game.settings.get(A, "channelId");
  if (!i) throw new Error("Set the Agent URL in module settings first.");
  if (!n) throw new Error("Set your Agent API key in module settings first.");
  if (!s) throw new Error("Set the Channel ID (session code) in module settings first.");
  const l = foundry.utils.randomID(24);
  let h;
  try {
    h = await fetch(`${i}/api/pairing/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${n}`,
        Accept: "application/json"
      },
      body: JSON.stringify({
        nonce: l,
        channel_id: s,
        foundry_user_id: e,
        foundry_user_name: r,
        expires_in: gt
      })
    });
  } catch {
    throw new Error("Could not reach the Agent server. Check the Agent URL and your connection.");
  }
  if (!h.ok)
    throw h.status === 403 ? new Error("Only a GM with a linked Agent account can generate pairings.") : h.status === 404 ? new Error("No Agent session matches this Channel ID. Create/sync the session in the Agent first.") : new Error(`Agent server rejected the pairing (HTTP ${h.status}).`);
  return a.pendingPairings.set(l, { foundryUserId: e, ts: Date.now() }), setTimeout(() => a.pendingPairings.delete(l), gt * 1e3), { nonce: l, payload: ao({ nonce: l, channelId: s, foundryUserName: r }) };
}
async function Bn(a, e, r) {
  let i;
  try {
    ({ payload: i } = await On(a, e, r));
  } catch (n) {
    ui.notifications.error(`Agent pairing: ${n.message}`);
    return;
  }
  await xn(i, r);
}
async function xn(a, e) {
  let r;
  try {
    r = await Te.toDataURL(a, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const i = Math.round(gt / 60), n = e || "this player", s = btoa(a);
  new Dialog({
    title: `Link Agent — ${n}`,
    content: `
            <div style="text-align:center;">
                <p>Open the Cyberpunk Agent app on your phone, tap <strong>Scan to Link</strong>,
                and point the camera at this code.</p>
                <img src="${r}" alt="Pairing QR code"
                     style="width:320px;height:320px;image-rendering:pixelated;background:#fff;padding:8px;border-radius:8px;" />
                <p style="margin-top:10px;">On a PC with no camera? Copy this code and paste it into the Agent:</p>
                <textarea readonly id="cpr-link-code" rows="2"
                          style="width:100%;font-family:monospace;font-size:0.7em;resize:none;word-break:break-all;"
                          onclick="this.select()">${s}</textarea>
                <button type="button" id="cpr-copy-link-code" style="margin-top:6px;">
                    <i class="fas fa-copy"></i> Copy link code
                </button>
                <p style="color:#ffaa00;font-size:0.85em;margin-top:10px;">This code expires in ~${i} minutes and can only be used once.</p>
            </div>
        `,
    buttons: {
      close: { icon: '<i class="fas fa-check"></i>', label: "Done" }
    },
    default: "close",
    render: (l) => {
      l.find("#cpr-copy-link-code").click(async () => {
        try {
          await navigator.clipboard.writeText(s), ui.notifications.info("Link code copied to clipboard.");
        } catch {
          l.find("#cpr-link-code").trigger("select"), ui.notifications.warn("Copy failed — select the code and copy it manually.");
        }
      });
    }
  }, { width: 380 }).render(!0);
}
class co extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-assignment-menu",
      title: "Agent Character Assignment",
      width: 500,
      classes: ["form"]
    });
  }
  async _renderInner(e) {
    let r = `
        <div>
        <p>Assign a character to each player. A key/QR link is only needed for the
        hosted (remote) Agent; the embedded in-Foundry Agent just uses the
        character assigned here, so assignment works with or without a key.</p>
        <table style="width: 100%; text-align: left; margin-bottom: 10px;">
        <tr>
        <th>Player</th>
        <th>API Status</th>
        <th>Agent Link</th>
        <th>Assigned Character</th>
        <th style="width: 80px;"></th>
        </tr>`;
    for (let i of e.users) {
      const n = ms(i.agentLink);
      r += `<tr><td style="padding: 5px 0;"><strong>${i.name}</strong></td>`, i.hasKey ? (r += '<td style="color: #00ff00;">✔ Linked</td>', r += `<td><small><code title="${i.agentLink || ""}">${n || "Pending..."}</code></small></td>`) : (r += '<td style="color: #ffaa00;" title="No remote key; the embedded Agent still works.">◐ Local only</td>', r += "<td><small>-</small></td>"), r += `<td><select class="character-select" data-userid="${i.id}" style="width: 100%;">
            <option value="">- None -</option>`;
      for (let s of e.characters) {
        const l = s.id === i.characterId ? "selected" : "";
        r += `<option value="${s.id}" ${l}>${s.name}</option>`;
      }
      r += "</select></td>", r += `<td><button type="button" class="show-qr" data-userid="${i.id}" data-username="${i.name}" title="Show pairing QR"><i class="fas fa-qrcode"></i></button> <button type="button" class="refresh-user" data-userid="${i.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`, r += "</tr>";
    }
    return r += `</table>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button type="button" id="save-agent-assignments"><i class="fas fa-save"></i> Save Assignments</button>
        <button type="button" id="refresh-all-users"><i class="fas fa-sync-alt"></i> Refresh All Users</button>
        </div>
        </div>`, $(r);
  }
  getData() {
    const e = game.users.map((i) => {
      var n;
      return {
        id: i.id,
        name: i.name,
        isGM: i.isGM,
        hasKey: !!i.getFlag(A, "hasApiKey"),
        agentLink: i.getFlag(A, "agent-link"),
        characterId: ((n = i.character) == null ? void 0 : n.id) || ""
      };
    }), r = game.actors.filter((i) => i.type === "character").map((i) => ({
      id: i.id,
      name: i.name
    }));
    return { users: e, characters: r };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(e) {
    super.activateListeners(e), e.find("#save-agent-assignments").click(async (r) => {
      r.preventDefault();
      let i = 0;
      const n = [];
      if (e.find(".character-select").each((s, l) => {
        var g;
        const h = l.dataset.userid, u = l.value, p = game.users.get(h);
        if (p) {
          const m = u === "" || u === "null" ? null : u;
          (((g = p.character) == null ? void 0 : g.id) || null) !== m && (n.push({ _id: p.id, character: m }), i++);
        }
      }), n.length > 0) {
        await User.updateDocuments(n), ui.notifications.info(`Cyberpunk Bridge: Updated ${i} player assignments!`);
        for (let s of n) {
          const l = game.users.get(s._id), h = l == null ? void 0 : l.getFlag(A, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: h || s._id,
            // Use agent-link as primary ID for Laravel
            actorId: s.character,
            character: s.character,
            isGM: l.isGM
          });
        }
        window.cyberpunkBridge.syncPlayerLink();
      } else
        ui.notifications.info("Cyberpunk Bridge: No assignment changes made.");
      this.close();
    }), e.find(".show-qr").click(async (r) => {
      r.preventDefault();
      const i = r.currentTarget.dataset.userid, n = r.currentTarget.dataset.username;
      await Bn(window.cyberpunkBridge, i, n);
    }), e.find(".refresh-user").click(async (r) => {
      r.preventDefault();
      const i = r.currentTarget.dataset.userid, n = game.users.get(i);
      n && (await n.unsetFlag(A, "agent-link"), await n.unsetFlag(A, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${n.name}. They will need to re-sync.`), this.render(!0));
    }), e.find("#refresh-all-users").click(async (r) => {
      r.preventDefault();
      for (let i of game.users)
        await i.unsetFlag(A, "agent-link"), await i.unsetFlag(A, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
const Ue = "pairing-request", me = "pairing-nonce";
function lo(a) {
  a.hookIds.pairingUpdateUser || (a.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (e, r) => {
    if (game.user.isGM && foundry.utils.getProperty(r, `flags.${A}.${Ue}`) && await uo(a, e), e.id === game.user.id) {
      const i = foundry.utils.getProperty(r, `flags.${A}.${me}`);
      i && i.payload && (await xn(i.payload, game.user.name), await game.user.unsetFlag(A, me), await game.user.unsetFlag(A, Ue));
    }
  }));
}
async function uo(a, e) {
  try {
    const { payload: r } = await On(a, e.id, e.name);
    await e.setFlag(A, me, { payload: r, ts: Date.now() });
  } catch (r) {
    console.warn(`[Bridge] Failed to mint pairing for ${e.name}: ${r.message}`), await e.setFlag(A, me, { error: r.message, ts: Date.now() });
  }
}
async function ho() {
  if (game.user.isGM) {
    await Bn(window.cyberpunkBridge, game.user.id, game.user.name);
    return;
  }
  await game.user.setFlag(A, me, null), await game.user.setFlag(A, Ue, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(A, me) || (await game.user.unsetFlag(A, Ue), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class fo extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-link-menu",
      title: "Link my Agent",
      width: 420,
      classes: ["form"]
    });
  }
  async _renderInner() {
    const e = game.user.isGM ? `<li>Click <strong>Generate QR</strong> below — as the GM your code is minted instantly.</li>
               <li>In the Agent, open <strong>Settings → Link this Agent</strong>, then scan it (phone) or paste the link code (desktop).</li>` : `<li>Click <strong>Generate QR</strong> below.</li>
               <li>The GM's Foundry mints a one-time code (the GM must be online).</li>
               <li>Open the Agent app, tap <strong>Scan to Link</strong>, and scan it.</li>`;
    return $(`
            <div style="padding: 8px;">
                <p>Generate a QR code to link the Cyberpunk Agent app to this game.</p>
                <ol style="margin: 0 0 12px 18px; padding: 0;">${e}</ol>
                <button type="button" id="cpr-generate-qr">
                    <i class="fas fa-qrcode"></i> Generate QR
                </button>
            </div>
        `);
  }
  activateListeners(e) {
    super.activateListeners(e), e.find("#cpr-generate-qr").click(async (r) => {
      r.preventDefault(), await ho(), this.close();
    });
  }
}
const po = 1, go = /^[A-Z0-9]{4}-?[A-Z0-9]{4}$/i;
function rn(a) {
  const e = (a || "").trim();
  if (!e) return null;
  for (const r of [() => atob(e), () => e])
    try {
      return JSON.parse(r());
    } catch {
    }
  return null;
}
function sn(a) {
  return go.test((a || "").trim());
}
async function mo(a) {
  const e = a.trim().toUpperCase().replace(/^([A-Z0-9]{4})([A-Z0-9]{4})$/, "$1-$2"), r = (game.settings.get(A, "apiUrl") || he).replace(/\/$/, "");
  let i;
  try {
    i = await fetch(`${r}/api/setup-code/${encodeURIComponent(e)}`, {
      headers: { Accept: "application/json" }
    });
  } catch {
    throw new Error(`Could not reach the Agent server at ${r}.`);
  }
  if (i.status === 404)
    throw new Error("That setup code is invalid, expired, or already used — generate a fresh one in the Agent.");
  if (!i.ok)
    throw new Error(`Agent server rejected the setup code (HTTP ${i.status}).`);
  return i.json();
}
class yo extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-quick-setup",
      title: "Quick Setup — Paste Agent Config",
      width: 460,
      classes: ["form"]
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
  activateListeners(e) {
    super.activateListeners(e), e.find("#cpr-setup-code").on("input", (r) => {
      this._renderPreview(e, rn(r.currentTarget.value));
    }), e.find("#cpr-apply-setup").click(async (r) => {
      r.preventDefault(), await this._apply(e.find("#cpr-setup-code").val());
    });
  }
  /**
   * Render the decoded fields into the preview area. Called on every edit so the
   * displayed values stay in sync with what Apply would save. API/Reverb keys are
   * masked since they are secrets.
   */
  _renderPreview(e, r) {
    const i = e.find("#cpr-setup-preview"), n = e.find("#cpr-setup-code").val().trim();
    if (sn(n)) {
      const h = (game.settings.get(A, "apiUrl") || he).replace(/\/$/, "");
      i.html(`<div class="notes" style="opacity:0.7;">Short code — configuration will be fetched from ${h} when you Apply.</div>`);
      return;
    }
    if (!r || !r.agentUrl) {
      const h = n ? "Not a valid setup code yet — re-copy it from the Agent." : "Paste a code above to preview its values.";
      i.html(`<div class="notes" style="opacity:0.7;">${h}</div>`);
      return;
    }
    const s = (h) => h ? `••••${String(h).slice(-4)}` : "—", l = [
      ["Agent URL", String(r.agentUrl).replace(/\/$/, "")],
      ["Channel ID", r.channelId ? String(r.channelId) : "—"],
      ["API Key", s(r.apiKey)],
      ["Reverb Key", s(r.reverbKey)],
      ["Reverb Port", r.reverbPort ? String(r.reverbPort) : "—"]
    ];
    i.html(l.map(([h, u]) => `
            <div style="display:flex;justify-content:space-between;gap:8px;">
                <span style="opacity:0.7;">${h}</span>
                <span style="font-family:monospace;">${u}</span>
            </div>
        `).join(""));
  }
  async _apply(e) {
    let r;
    if (sn(e))
      try {
        r = await mo(e);
      } catch (s) {
        ui.notifications.error(`Agent setup: ${s.message}`);
        return;
      }
    else
      r = rn(e);
    if (!r || !r.agentUrl) {
      ui.notifications.error("Agent setup: that does not look like a valid setup code. Re-copy it from the Agent.");
      return;
    }
    if (r.v && r.v !== po) {
      ui.notifications.error("Agent setup: this code was made by a newer Agent. Update the Bridge module.");
      return;
    }
    const i = { apiUrl: String(r.agentUrl).replace(/\/$/, "") };
    r.channelId && (i.channelId = String(r.channelId)), r.apiKey && (i.apiKey = String(r.apiKey)), r.reverbKey && (i.reverbKey = String(r.reverbKey)), r.reverbPort && (i.reverbPort = String(r.reverbPort));
    try {
      for (const [s, l] of Object.entries(i))
        await game.settings.set(A, s, l);
    } catch {
      ui.notifications.error("Agent setup: failed to save settings.");
      return;
    }
    this._reflectInSettingsForm(i);
    const n = r.channelId ? "" : " (no Channel ID in code — set it manually if needed)";
    ui.notifications.info(`Agent setup applied — connecting to ${r.agentUrl}.${n}`), this.close();
  }
  /**
   * Push the applied values into the open "Configure Settings" form, if any.
   * The settings we just saved are also editable fields on that form; without
   * this, those fields keep showing the pre-paste values and a subsequent
   * "Save Changes" there would overwrite the fresh values with stale ones.
   * @param {Record<string, string>} applied  setting key -> saved value
   */
  _reflectInSettingsForm(e) {
    const r = Object.values(ui.windows).find((i) => i instanceof SettingsConfig);
    if (r != null && r.element)
      for (const [i, n] of Object.entries(e)) {
        const s = r.element.find(`[name="${A}.${i}"]`);
        s.length && s.val(n);
      }
  }
}
function bo(a) {
  game.settings.registerMenu(A, "quickSetup", {
    name: "Quick Setup",
    label: "Paste Agent Config",
    hint: "Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.",
    icon: "fas fa-bolt",
    type: yo,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: co,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: fo,
    restricted: !1
    // Available to all players
  }), game.settings.register(A, "apiUrl", {
    name: "Agent URL",
    hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
    scope: "world",
    // URL is usually the same for everyone
    config: !0,
    type: String,
    default: he,
    onChange: () => {
      game.user.isGM && a.reconnect(), a.syncPlayerLink();
    }
  }), game.settings.register(A, "reverbHost", {
    name: "Reverb Host (override)",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => a.reconnect()
  }), game.settings.register(A, "reverbPort", {
    name: "Reverb Port",
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => a.reconnect()
  }), game.settings.register(A, "reverbUseSSL", {
    name: "Reverb Use SSL (wss)",
    scope: "world",
    config: !0,
    type: Boolean,
    default: !0,
    onChange: () => a.reconnect()
  }), game.settings.register(A, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: cn,
    onChange: () => a.reconnect()
  }), game.settings.register(A, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (e) => {
      await game.user.setFlag(A, "hasApiKey", !!e), game.user.isGM && a.reconnect(), a.syncPlayerLink();
    }
  }), game.settings.register(A, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && a.reconnect();
    }
  }), game.settings.register(A, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function vo(a, e, { type: r, requestId: i, actorId: n }) {
  const s = game.actors.get(n);
  if (!s) {
    console.warn(`⚠️ Actor ID ${n} not found in this world.`);
    return;
  }
  await s.update(e.changes), ui.notifications.info(`💾 Sync: ${s.name} updated.`), await a.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function Dn(a, e, { requestId: r }) {
  let i = e.actorId, n = game.user;
  const s = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  if (s && (n = game.users.find((l) => l.getFlag(A, "agent-link") === s) || game.users.get(s) || (s === game.user.id ? game.user : null)), n || (n = game.user), !i) {
    const l = n.character;
    l && (i = l.id);
  }
  if (i !== null) {
    const l = game.actors.get(i);
    if (l) {
      const h = l.toObject(), u = {
        _id: l.id,
        name: l.name,
        type: l.type,
        img: h.img,
        system: h.system,
        items: (h.items || []).map((p) => {
          const g = {
            _id: p._id,
            name: p.name,
            type: p.type,
            img: p.img,
            system: p.system
          };
          if (p.type === "cyberware") {
            const m = l.items.get(p._id);
            m && (g.system = {
              ...p.system,
              isInstalled: !!m.system.isInstalled,
              isFoundational: !!m.system.isFoundational
            });
          }
          return g;
        }),
        flags: h.flags && h.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": h.flags["cyberpunk-red-core"] } : {}
      };
      await a.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: u, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
      return;
    }
  }
  await a.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: !1, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function wo(a, e, { requestId: r, actorId: i }) {
  let n = game.user;
  const s = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  s && (n = game.users.find((u) => u.getFlag(A, "agent-link") === s) || game.users.get(s) || (s === game.user.id ? game.user : null)), n || (n = game.user);
  function l(u) {
    var g;
    return ((g = canvas.tokens.placeables.filter((m) => {
      var b;
      return ((b = m.actor) == null ? void 0 : b.id) === u;
    })[0]) == null ? void 0 : g.id) ?? null;
  }
  let h = [];
  n.isGM ? h = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var g, m;
    const p = (g = Object.entries(u.ownership || {}).find(([b, y]) => {
      const C = game.users.get(b);
      return C && !C.isGM && y >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: l(u.id),
      agentLink: (p ? (m = game.users.get(p)) == null ? void 0 : m.getFlag(A, "agent-link") : null) || p || n.getFlag(A, "agent-link") || n.id
    };
  }) : (h = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(n, "OWNER")).map((u) => {
    var g, m;
    const p = (g = Object.entries(u.actor.ownership || {}).find(([b, y]) => {
      const C = game.users.get(b);
      return C && !C.isGM && y >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.actor.id,
      tokenId: l(u.actor.id),
      agentLink: (p ? (m = game.users.get(p)) == null ? void 0 : m.getFlag(A, "agent-link") : null) || p || null
    };
  }), n.character && (h.some((p) => p.actorId === n.character.id) || h.push({
    name: n.character.name,
    actorId: n.character.id,
    tokenId: l(n.character.id),
    agentLink: n.getFlag(A, "agent-link") || n.id
  })), !n.isGM && n.character && (h = h.filter((u) => u.actorId === n.character.id))), await a.sendResponse({ type: "ACTORS_DATA", actorId: i, actors: h, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function ko(a, e, { type: r, requestId: i, actorId: n }) {
  const s = game.actors.get(n);
  if (!s) {
    console.warn(`Actor ID ${n} not found in this world.`);
    return;
  }
  const l = s.items.get(e.itemId);
  if (!l) {
    console.warn(`Item ID ${e.itemId} not found on actor ${s.name}.`);
    return;
  }
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await a.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function _o(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const s = n.items.get(e.itemId);
    if (s) {
      const l = `items.${e.itemId}.system.equipped`;
      await s.update({ "system.equipped": e.state }), await a.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [l]: e.state }, success: !0, requestId: r });
    }
  }
}
async function Co(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const s = n.items.get(e.weaponId), l = e.ammoId ? n.items.get(e.ammoId) : null, h = async () => {
      await s.reload();
      const u = {
        [`items.${e.weaponId}.system.magazine`]: {
          value: s.system.magazine.value,
          max: s.system.magazine.max
        },
        [`items.${e.weaponId}.system.installedItems`]: {
          list: [...s.system.installedItems.list],
          slots: s.system.installedItems.slots,
          usedSlots: s.system.installedItems.usedSlots
        }
      };
      l && (u[`items.${l.id}.system.amount`] = l.system.amount), n.items.filter((g) => g.type === "ammo").forEach((g) => {
        u[`items.${g.id}.system.amount`] = g.system.amount;
      }), await a.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: u, success: !0, requestId: r });
    };
    if (l) {
      let u = s.getInstalledItems("ammo");
      u && u.length > 0 && s.uninstallItems(u), setTimeout(function() {
        s.installItems([l]);
      }, 500), setTimeout(async () => {
        await h();
      }, 1500);
    } else
      await h();
  }
}
async function So(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const s = n.items.get(e.cyberdeckId), l = n.items.get(e.programId);
  if (!s || !l) return;
  const h = s.system.installedItems.usedSlots || 0, u = s.system.installedItems.slots || 0, p = l.system.size || 1;
  if (h + p > u) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const g = s.system.installedItems.list || [];
  if (g.includes(e.programId)) return;
  const m = [...g, e.programId], b = h + p;
  await s.update({
    "system.installedItems.list": m,
    "system.installedItems.usedSlots": b
  }), await a.sendResponse({
    type: "SHEET_DELTA",
    actorId: i,
    delta: {
      [`items.${e.cyberdeckId}.system.installedItems.list`]: m,
      [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: b
    },
    success: !0,
    requestId: r
  });
}
async function To(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const s = n.items.get(e.cyberdeckId), l = n.items.get(e.programId);
  if (!s) return;
  const h = s.system.installedItems.list || [];
  if (!h.includes(e.programId)) return;
  const u = h.filter((y) => y !== e.programId), p = l && l.system.size || 1, g = s.system.installedItems.usedSlots || 0, m = Math.max(0, g - p);
  await s.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": m
  });
  const b = {
    [`items.${e.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: m
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), b[`items.${e.programId}.system.isRezzed`] = !1), await a.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: b, success: !0, requestId: r });
}
async function Ao(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const s = n.items.get(e.programId);
    s && (await s.update({ "system.isRezzed": e.targetState }), await a.sendResponse({
      type: "SHEET_DELTA",
      actorId: i,
      delta: { [`items.${e.programId}.system.isRezzed`]: e.targetState },
      success: !0,
      requestId: r
    }));
  }
}
async function Io(a, e, { requestId: r, actorId: i }) {
  var s, l;
  const n = game.actors.get(i);
  if (n) {
    const h = document.createElement("a");
    h.dataset.rollType = e.rollType, h.dataset.cyberdeckId = e.cyberdeckId, h.dataset.rollTitle = e.programName, h.dataset.interfaceAbility = e.programName, h.dataset.itemId = e.cyberdeckId, h.dataset.programId = e.programId, h.dataset.executionType = e.executionType;
    const u = async () => {
      await n.sheet._onRoll({
        type: "click",
        currentTarget: h
      });
    }, p = await a.rollAndCapture(i, u, e.rollMode);
    p.success && await a.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: r,
      actorId: i,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: e.programName,
      rawRoll: {
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: p.label,
        resultTotal: (s = p.rawRoll) == null ? void 0 : s.resultTotal,
        rollTitle: (l = p.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function Ro(a, e, { requestId: r, actorId: i }) {
  var l, h;
  const n = game.actors.get(i), s = n.items.get(e.weaponId);
  if (n && s) {
    const u = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "damage",
        "data-item-id": s.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "damage",
          "data-item-id": s.id
        }
      });
    }, p = await a.rollAndCapture(i, u, e.rollMode);
    p.success && await a.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: r,
      actorId: i,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: `${s.name} (Damage)`,
      rawRoll: {
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: p.label,
        resultTotal: (l = p.rawRoll) == null ? void 0 : l.resultTotal,
        rollTitle: (h = p.rawRoll) == null ? void 0 : h.rollTitle
      },
      success: !0
    });
  }
}
async function Eo(a, e, { requestId: r, actorId: i }) {
  var s, l;
  const n = game.actors.get(i);
  if (n) {
    const h = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "deathsave",
        "data-roll-title": "Death Save",
        type: "click",
        currentTarget: {
          "data-roll-type": "deathsave",
          "data-roll-title": "Death Save"
        }
      });
    }, u = await a.rollAndCapture(i, h, e.rollMode);
    if (u.success) {
      const p = n.system.derivedStats.deathsave || {};
      await a.sendResponse({
        type: "ROLL_RESULT",
        rollMode: u.rollMode,
        requestId: r,
        actorId: i,
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: "Death Save",
        rawRoll: {
          total: u.total,
          isCriticalSuccess: u.isCriticalSuccess,
          isCriticalFailure: u.isCriticalFailure,
          label: u.label,
          resultTotal: (s = u.rawRoll) == null ? void 0 : s.resultTotal,
          rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      }), await a.sendResponse({
        type: "SHEET_DELTA",
        actorId: i,
        delta: { "system.derivedStats.deathsave": p },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function Lo(a, e, { requestId: r, actorId: i }) {
  var h, u;
  const n = game.actors.get(i), s = async () => {
    await n.sheet._onRoll({
      "data-roll-type": "facedown",
      "data-roll-title": "Face Down",
      type: "click",
      currentTarget: {
        "data-roll-type": "facedown",
        "data-roll-title": "Face Down"
      }
    });
  }, l = await a.rollAndCapture(i, s, e.rollMode);
  l.success && await a.sendResponse({
    type: "ROLL_RESULT",
    rollMode: l.rollMode,
    requestId: r,
    actorId: i,
    total: l.total,
    isCriticalSuccess: l.isCriticalSuccess,
    isCriticalFailure: l.isCriticalFailure,
    rawRoll: {
      total: l.total,
      isCriticalSuccess: l.isCriticalSuccess,
      isCriticalFailure: l.isCriticalFailure,
      label: l.label,
      resultTotal: (h = l.rawRoll) == null ? void 0 : h.resultTotal,
      rollTitle: (u = l.rawRoll) == null ? void 0 : u.rollTitle
    },
    success: !0
  });
}
async function Po(a, e, { requestId: r, actorId: i }) {
  var s, l;
  const n = game.actors.get(i);
  if (n) {
    const h = async () => {
      await n.rollInitiative();
    }, u = await a.rollAndCapture(i, h, e.rollMode);
    u.success && await a.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: r,
      actorId: i,
      total: u.total,
      isCriticalSuccess: u.isCriticalSuccess,
      isCriticalFailure: u.isCriticalFailure,
      label: "Initiative",
      rawRoll: {
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: u.label,
        resultTotal: (s = u.rawRoll) == null ? void 0 : s.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function Mo(a, e, { requestId: r, actorId: i }) {
  var s, l;
  const n = game.actors.get(i);
  if (n) {
    const h = n.items.getName(e.itemName);
    if (h) {
      const u = {
        "data-roll-type": "roleAbility",
        "data-roll-title": e.label,
        "data-item-id": h.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "roleAbility",
          "data-roll-title": e.label,
          "data-item-id": h.id,
          "data-item-subtype": e.label
        }
      };
      e.isAbility && (u["data-roll-subtype"] = "subRoleAbility", u["data-role-name"] = e.label, u.currentTarget["data-roll-subtype"] = "subRoleAbility", u.currentTarget["data-role-name"] = e.label);
      const p = async () => {
        await n.sheet._onRoll(u);
      }, g = await a.rollAndCapture(i, p, e.rollMode);
      g.success && await a.sendResponse({
        type: "ROLL_RESULT",
        rollMode: g.rollMode,
        requestId: r,
        actorId: i,
        total: g.total,
        isCriticalSuccess: g.isCriticalSuccess,
        isCriticalFailure: g.isCriticalFailure,
        label: e.label,
        rawRoll: {
          total: g.total,
          isCriticalSuccess: g.isCriticalSuccess,
          isCriticalFailure: g.isCriticalFailure,
          label: g.label,
          resultTotal: (s = g.rawRoll) == null ? void 0 : s.resultTotal,
          rollTitle: (l = g.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function No(a, e, { requestId: r, actorId: i }) {
  var s, l;
  const n = game.actors.get(i);
  if (n) {
    const h = n.items.getName(e.label);
    if (h) {
      const u = async () => {
        await n.sheet._onRoll({
          "data-roll-type": "skill",
          "data-roll-title": e.label,
          "data-item-id": h.id,
          type: "click",
          currentTarget: {
            "data-roll-type": "skill",
            "data-roll-title": e.label,
            "data-item-id": h.id
          }
        });
      }, p = await a.rollAndCapture(i, u, e.rollMode);
      p.success && await a.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: r,
        actorId: i,
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: e.label,
        rawRoll: {
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          label: p.label,
          resultTotal: (s = p.rawRoll) == null ? void 0 : s.resultTotal,
          rollTitle: (l = p.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function Oo(a, e, { requestId: r, actorId: i }) {
  var s, l;
  const n = game.actors.get(i);
  if (n) {
    const h = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "stat",
        "data-roll-title": e.label,
        type: "click",
        currentTarget: {
          "data-roll-type": "stat",
          "data-roll-title": e.label
        }
      });
    }, u = await a.rollAndCapture(i, h, e.rollMode);
    u.success && await a.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: r,
      actorId: i,
      total: u.total,
      isCriticalSuccess: u.isCriticalSuccess,
      isCriticalFailure: u.isCriticalFailure,
      label: e.label,
      rawRoll: {
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: u.label,
        resultTotal: (s = u.rawRoll) == null ? void 0 : s.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function Bo(a, e, { requestId: r, actorId: i }) {
  r && a.activeRequests.set(r, { actorId: i, timestamp: Date.now() });
  const n = new Roll(e.formula);
  await n.evaluate(), await n.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
    flavor: e.flavor,
    rollMode: e.rollMode || game.settings.get("core", "rollMode")
  }), await a.sendResponse({
    type: "ROLL_RESULT",
    rollMode: e.rollMode || game.settings.get("core", "rollMode"),
    requestId: r,
    actorId: i,
    total: n.total,
    isCriticalSuccess: n.isCriticalSuccess || !1,
    isCriticalFailure: n.isCriticalFailure || !1,
    label: e.flavor || "Dice Roll",
    rawRoll: {
      rollTitle: e.flavor || "Dice Roll",
      _roll: n,
      formula: n.formula,
      resultTotal: n.total
    },
    success: !0
  });
}
async function xo(a, e, { requestId: r, actorId: i, tokenId: n }) {
  var l, h, u, p, g, m, b;
  const s = game.actors.get(i);
  if (s) {
    const y = e.weaponId, C = e.fireMode, _ = canvas.tokens.get(e.targetId), k = "firetype-" + y, v = "cyberpunk-red-core";
    let S = "";
    switch (C) {
      case "Auto":
        S = "autofire";
        break;
      case "Suppress":
        S = "suppressive";
        break;
      case "Aimed":
        S = "aimed", await s.setFlag(v, "aimedLocation", "head");
        break;
      default:
        S = "";
        break;
    }
    _ && _.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), S === "" ? await s.unsetFlag(v, k) : await s.setFlag(v, k, S);
    const I = document.createElement("a");
    I.dataset.rollType = "attack", I.dataset.itemId = y, I.dataset.rollTitle = C + " Attack";
    const E = async () => {
      await s.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: I,
        type: "click"
      }, { showDialog: !0 });
    };
    let R = null;
    if (_) {
      const O = canvas.tokens.get(n) || ((l = s.getActiveTokens()) == null ? void 0 : l[0]) || canvas.tokens.placeables.find((B) => {
        var U;
        return ((U = B.actor) == null ? void 0 : U.id) === s.id;
      });
      if (O) {
        const B = _.center.x - O.center.x, U = _.center.y - O.center.y, F = Math.sqrt(Math.pow(B, 2) + Math.pow(U, 2)), Z = Math.ceil(F / (((h = canvas.grid) == null ? void 0 : h.size) || 128)), W = s.items.get(y), V = un(W), Ie = hn(V, Z);
        R = Ie === 99 ? "Out of Range" : Ie;
      }
    }
    const P = await a.rollAndCapture(i, E, e.rollMode);
    if (P.success) {
      let O = null;
      typeof R == "number" ? O = P.total >= R ? "Hit" : "Miss" : R === "Out of Range" && (O = "Miss");
      const B = ((g = (p = (u = s.items.get(y)) == null ? void 0 : u.system) == null ? void 0 : p.magazine) == null ? void 0 : g.value) ?? null;
      await a.sendResponse({
        type: "ROLL_RESULT",
        rollMode: P.rollMode,
        requestId: r,
        actorId: i,
        total: P.total,
        isCriticalSuccess: P.isCriticalSuccess,
        isCriticalFailure: P.isCriticalFailure,
        label: C + " Attack",
        rawRoll: {
          total: P.total,
          isCriticalSuccess: P.isCriticalSuccess,
          isCriticalFailure: P.isCriticalFailure,
          label: P.label,
          resultTotal: (m = P.rawRoll) == null ? void 0 : m.resultTotal,
          rollTitle: (b = P.rawRoll) == null ? void 0 : b.rollTitle
        },
        dv: R,
        ammoTo: B,
        outcome: O,
        success: !0
      });
    }
  }
}
async function Do(a, e, { type: r, requestId: i, actorId: n, tokenId: s }) {
  if (game.paused) return;
  const l = canvas.tokens.get(s);
  if (l) {
    let h = {};
    e.direction === "up" ? h.y = l.document.y - canvas.grid.size : e.direction === "down" ? h.y = l.document.y + canvas.grid.size : e.direction === "left" ? h.x = l.document.x - canvas.grid.size : e.direction === "right" && (h.x = l.document.x + canvas.grid.size), await l.document.update(h), await a.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: s, success: !0, requestId: i });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${s} not found.`), await a.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: s, success: !1, message: "Token not found", requestId: i });
}
async function Fo(a, e, { type: r, requestId: i, actorId: n }) {
  const s = canvas.tokens.get(e.targetTokenId);
  s && (s.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await a.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: e.targetTokenId, success: !0, requestId: i }));
}
async function Uo(a, e, { requestId: r, actorId: i, tokenId: n }) {
  var u;
  const s = canvas.tokens.placeables.filter((p) => {
    var g;
    return ((g = p.actor) == null ? void 0 : g.id) === i;
  });
  n === null && (n = ((u = s[0]) == null ? void 0 : u.id) ?? null);
  const l = canvas.tokens.get(n);
  let h = [];
  if (l) {
    const p = canvas.grid.size, g = canvas.dimensions, m = l.center.x, b = l.center.y;
    h = canvas.tokens.placeables.filter((y) => {
      const C = !y.document.hidden, _ = y.actor && (y.actor.type === "character" || y.actor.type === "mook"), k = y.x >= g.sceneX && y.x <= g.sceneX + g.sceneWidth && y.y >= g.sceneY && y.y <= g.sceneY + g.sceneHeight;
      return C && _ && k && y.id !== l.id;
    }).map((y) => {
      const C = y.center.x - m, _ = y.center.y - b, v = (Math.sqrt(Math.pow(C, 2) + Math.pow(_, 2)) / p).toFixed(2);
      return {
        name: y.name,
        id: y.id,
        distanceM: parseFloat(v),
        type: y.actor.type
      };
    }).sort((y, C) => y.distanceM - C.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${n} not found.`);
  await a.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: i, tokens: h, requestId: r });
}
async function jo(a, e, { requestId: r, actorId: i, tokenId: n }) {
  var p;
  const s = canvas.tokens.get(n), l = e.targetTokenId || ((p = Array.from(game.user.targets)[0]) == null ? void 0 : p.id), h = canvas.tokens.get(l), u = e.weaponId;
  if (s && h) {
    const g = h.center.x - s.center.x, m = h.center.y - s.center.y, b = Math.sqrt(Math.pow(g, 2) + Math.pow(m, 2)), y = Math.ceil(b / 128), C = s.actor.items.get(u);
    if (!C) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${s.actor.name}.`), await a.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
      return;
    }
    const _ = un(C), k = hn(_, y), v = {
      targetName: h.name,
      distanceMeters: y,
      weaponCategory: _,
      dv: k === 99 ? "Out of Range" : k
    };
    await a.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: v, requestId: r });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!s}, Target: ${!!h}`), await a.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
}
async function Ho(a, e, { requestId: r, actorId: i }) {
  var E;
  const n = game.actors.get(i);
  if (!n) return;
  const s = e.weaponId, l = s ? n.items.get(s) : null;
  let h = "None", u = 0, p = "None", g = 0, m = 0;
  if (l) {
    h = l.system.weaponSkill;
    const R = n.items.find((P) => P.type === "skill" && P.name === h);
    u = R && Number(R.system.level) || 0, p = R && R.system.stat || "ref", g = Number((E = n.system.stats[p]) == null ? void 0 : E.value) || 0, m = Number(l.system.attackmod) || 0;
  }
  let b = 0;
  const y = [], C = Number(n.system.derivedStats.hp.value) || 0, _ = Number(n.system.derivedStats.seriouslyWounded) || 0, k = n.items.find((R) => R.name === "Stim" && R.type === "drug"), v = k && k.effects.some((R) => R.disabled === !1);
  if (C <= 0)
    b -= 4, y.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (C <= _) {
    const R = v ? 0 : -2;
    b += R, y.push({
      title: v ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: R,
      description: v ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  n.items.filter((R) => R.type === "criticalInjury").forEach((R) => {
    var U;
    const P = R.name || "Injury", O = (((U = R.system.description) == null ? void 0 : U.value) || "").replace(/<[^>]*>/g, "");
    let B = 0;
    if (R.effects && R.effects.length > 0 && R.effects.forEach((F) => {
      !F.disabled && F.changes && F.changes.forEach((Z) => {
        const W = parseInt(Z.value);
        isNaN(W) || (B += W);
      });
    }), B === 0) {
      const F = String(P).toLowerCase();
      (O.includes("-2") || F.includes("arm") || F.includes("eye")) && (B = -2);
    }
    b += B, y.push({ title: P, description: O, penalty: B });
  });
  const I = {
    actorName: n.name,
    baseBonus: g + u + m,
    breakdown: {
      statName: p,
      statValue: g,
      skillName: h,
      skillLevel: u,
      weaponAcc: m
    },
    totalPenalty: b,
    finalModifier: g + u + m + b,
    injuries: y
  };
  await a.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: i, result: I, requestId: r });
}
async function zo(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const s = `system.${e.label}`;
    let l;
    if (e.operation === "inc") {
      const h = s.split(".");
      let u = n;
      for (let m = 0; m < h.length; m++)
        u = m === 0 ? u[h[m]] : u == null ? void 0 : u[h[m]];
      const p = Number(u) || 0, g = Number(e.delta) || 0;
      l = p + g;
    } else
      l = typeof e.value == "string" ? e.value : Number(e.value) || 0;
    await n.update({ [s]: l }), await a.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [s]: l }, tab: "stats", success: !0, requestId: r });
  }
}
async function qo(a, e, { requestId: r, actorId: i, debug: n }) {
  if (i == null) {
    n && console.log("[Bridge] Actor ID Not set:");
    return;
  }
  let s = game.actors.get(i);
  switch ((e.action == null || e.value == null) && n && console.log("[Bridge] EuroBucks data error"), e.action) {
    case "add":
      s.deltaLedgerProperty("wealth", e.value, e.reason);
      break;
    case "subtract":
      s.deltaLedgerProperty("wealth", -Number(e.value), e.reason);
      break;
    case "set":
      s.setLedgerProperty("wealth", e.value, e.reason);
      break;
  }
  s && await a.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { "system.wealth": s.system.wealth }, tab: "stats", success: !0, requestId: r });
}
async function $o(a, e, { requestId: r, actorId: i, debug: n }) {
  const s = [];
  for (const l of game.journal) {
    const h = l.pages.filter((u) => u.type === "cpr-agent.datapool");
    for (const u of h) {
      const p = u.system.entries || [], g = [];
      for (const m of p) {
        let b = m.htmlContent;
        m.type === "html" && b && (b = await TextEditor.enrichHTML(b, { async: !0 })), g.push({
          id: m.id,
          icon: m.icon,
          title: m.title,
          type: m.type,
          htmlContent: b,
          pdfPath: m.pdfPath
        });
      }
      s.push({
        journalId: l.id,
        journalName: l.name,
        pageId: u.id,
        pageName: u.name,
        entries: g
      });
    }
  }
  n && console.log("[Bridge] Found Data Pools:", s), await a.sendResponse({
    type: "NET_POOL_DATA",
    actorId: i,
    pools: s,
    requestId: r,
    success: !0
  });
}
async function Go(a, e, { debug: r }) {
  var u;
  if (!game.user.isGM) return;
  const i = e.foundryUserId, n = e.agentLink || e.agent_link, s = e.nonce;
  if (!i || !n || !s) {
    console.warn("[Bridge] PAIR_AGENT missing fields.", e);
    return;
  }
  const l = a.pendingPairings.get(s);
  if (l && l.foundryUserId !== i) {
    console.warn(`[Bridge] PAIR_AGENT nonce/user mismatch for ${i}. Ignoring.`);
    return;
  }
  l || console.warn(`[Bridge] PAIR_AGENT nonce not in local cache (GM reload?). Trusting server payload for ${i}.`);
  const h = game.users.get(i);
  if (!h) {
    console.warn(`[Bridge] PAIR_AGENT: Foundry user ${i} not found.`);
    return;
  }
  a.pendingPairings.delete(s), await h.setFlag(A, "agent-link", n), await h.setFlag(A, "hasApiKey", !0), r && console.log(`[Bridge] PAIR_AGENT: linked ${h.name} -> ${n}`), ui.notifications.info(`Agent: ${h.name} linked successfully.`), (u = Object.values(ui.windows).find((p) => {
    var g;
    return ((g = p.options) == null ? void 0 : g.id) === "cpr-agent-assignment-menu";
  })) == null || u.render(!1), await a.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: i,
    agentLink: n,
    nonce: s,
    success: !0
  });
}
async function Fn(a, e, r) {
  try {
    await Dn(a, { actorId: e }, { requestId: r, actorId: e });
  } catch (i) {
    console.error("[Bridge] cyberware refreshActor failed", i);
  }
}
function Un(a) {
  return typeof a.recursiveGetAllInstalledItems != "function" ? [] : a.recursiveGetAllInstalledItems().filter((e) => e.type === "cyberware");
}
function Vo(a, e) {
  var n, s, l;
  const r = a.items.filter(
    (h) => h.type === "cyberware" && h.system.isInstalled && h.system.isFoundational && h.system.type === e.system.type
  ), i = [];
  for (const h of r) {
    i.push({ id: h._id, name: h.name });
    let u = [...((n = h.system.installedItems) == null ? void 0 : n.list) || []];
    for (; u.length > 0; ) {
      const p = u;
      u = [];
      for (const g of p) {
        const m = a.items.get(g), b = (s = m == null ? void 0 : m.system) == null ? void 0 : s.installedItems;
        if (b != null && b.allowed) {
          const y = typeof m.availableInstallSlots == "function" ? m.availableInstallSlots() : 1 / 0;
          (l = b.allowedTypes) != null && l.includes(e.type) && y >= (e.system.size || 1) && i.push({ id: m._id, name: m.name }), u = u.concat(b.list || []);
        }
      }
    }
  }
  return i;
}
async function Ko(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const s = n.items.get(e.itemId);
  if (!s) {
    await a.sendResponse({ type: "CYBERWARE_INSTALL_OPTIONS", requestId: r, actorId: i, success: !1, reason: "Item not found." });
    return;
  }
  const l = !!s.system.isFoundational, h = l ? [] : Vo(n, s), u = Un(s), p = u.reduce((b, y) => `${b} + ${y.system.humanityLoss.roll}`, s.system.humanityLoss.roll), g = u.reduce((b, y) => b + y.system.humanityLoss.static, s.system.humanityLoss.static), m = l || h.length > 0;
  await a.sendResponse({
    type: "CYBERWARE_INSTALL_OPTIONS",
    requestId: r,
    actorId: i,
    itemId: s._id,
    itemName: s.name,
    isFoundational: l,
    canInstall: m,
    reason: m ? null : "No compatible foundational cyberware of the correct type is installed.",
    targets: h,
    humanityLoss: { roll: `${p}`, static: g },
    success: !0
  });
}
async function Wo(a, e, { requestId: r, actorId: i }) {
  var m, b, y, C, _, k;
  const n = game.actors.get(i);
  if (!n) return;
  const s = n.items.get(e.itemId);
  if (!s) return;
  const h = !!s.system.isFoundational ? n : n.items.get(e.foundationalId);
  if (!h) {
    await a.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: i, itemId: e.itemId, success: !1, reason: "Install target not found." });
    return;
  }
  const u = Un(s), p = e.humanityLossType || "none";
  let g = !1;
  try {
    const v = Number((y = (b = (m = n.system) == null ? void 0 : m.derivedStats) == null ? void 0 : b.humanity) == null ? void 0 : y.value) || 0;
    if (g = await h.installItems([s]), g && (await n.loseHumanityValue([s].concat(u), p), p !== "none")) {
      const S = Number((k = (_ = (C = n.system) == null ? void 0 : C.derivedStats) == null ? void 0 : _.humanity) == null ? void 0 : k.value) || 0, I = Math.max(0, v - S);
      await a.sendResponse({
        type: "ROLL_RESULT",
        actorId: i,
        playerName: n.name,
        total: I,
        rollMode: "publicroll",
        label: `${s.name} Humanity Loss`,
        rawRoll: {
          rollTitle: `${s.name} Humanity Loss`,
          total: I,
          formula: p === "static" ? `${I}` : ""
        },
        success: !0
      });
    }
  } catch (v) {
    console.error("[Bridge] installCyberware failed", v);
  }
  await a.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: i, itemId: s._id, success: g }), g && await Fn(a, i, r);
}
async function Jo(a, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    try {
      await n.uninstallCyberware(e.itemId, e.foundationalId || null, !0);
    } catch (s) {
      console.error("[Bridge] uninstallCyberware failed", s);
    }
    await a.sendResponse({ type: "CYBERWARE_UNINSTALLED", requestId: r, actorId: i, itemId: e.itemId, success: !0 }), await Fn(a, i, r);
  }
}
const Xo = {
  UPDATE_ACTOR: vo,
  GET_ACTOR: Dn,
  GET_ACTORS: wo,
  CONSUME_ITEM: ko,
  ITEM_EQUIP: _o,
  RELOAD_WEAPON: Co,
  INSTALL_PROGRAM: So,
  REMOVE_PROGRAM: To,
  TOGGLE_REZ: Ao,
  PROGRAM_ROLL: Io,
  PREPARE_CYBERWARE_INSTALL: Ko,
  INSTALL_CYBERWARE: Wo,
  UNINSTALL_CYBERWARE: Jo,
  DAMAGE_ROLL: Ro,
  DEATH_SAVE: Eo,
  FACEDOWN_ROLL: Lo,
  INITIATIVE_ROLL: Po,
  ROLE_ROLL: Mo,
  SKILL_ROLL: No,
  STAT_ROLL: Oo,
  DICE_ROLL: Bo,
  ATTACK_ROLL: xo,
  MOVE_TOKEN: Do,
  TARGET_TOKEN: Fo,
  LIST_VISIBLE_TOKENS: Uo,
  GET_DV_INFO: jo,
  GET_ROLL_MODIFIERS: Ho,
  UPDATE_STAT: zo,
  UPDATE_EB: qo,
  GET_NET_POOL: $o,
  PAIR_AGENT: Go
};
async function on(a, e, r, i) {
  const n = Xo[e];
  if (!n) {
    console.log("Unknown DataType: " + e);
    return;
  }
  return n(a, r, i);
}
class Yo {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1, this._captureRollMode = null, this._prevRollMode = null, this._captureSafetyTimer = null, this.embedTransport = null;
  }
  rollAndCapture(e, r, i = null) {
    return ys(this, e, r, i);
  }
  /**
   * Begin an Agent-initiated roll capture. Records the desired roll mode and
   * mirrors it onto core.rollMode (so a CPR roll that reads the dropdown picks
   * it up). Awaited, so the setting has landed before the roll fires. A safety
   * timer guarantees the capture state can't leak if, unusually, no chat
   * message is ever created to consume it.
   */
  async _beginRollCapture(e = null) {
    if (this._isCapturingRoll = !0, this._captureRollMode = e || null, this._prevRollMode = game.settings.get("core", "rollMode"), game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Roll capture begin: rollMode=${e}`, "color:#c084fc; font-weight:bold;"), e)
      try {
        await game.settings.set("core", "rollMode", e);
      } catch {
      }
    clearTimeout(this._captureSafetyTimer), this._captureSafetyTimer = setTimeout(() => this._endRollCapture(), 6e3);
  }
  /**
   * End the current capture: consumed by the roll's createChatMessage (the
   * normal path) or by the safety timer / a failed trigger. Restores the
   * player's previous core.rollMode.
   */
  _endRollCapture() {
    if (!this._isCapturingRoll) return;
    clearTimeout(this._captureSafetyTimer), this._captureSafetyTimer = null;
    const e = this._prevRollMode, r = this._captureRollMode && e && e !== this._captureRollMode;
    if (this._isCapturingRoll = !1, this._captureRollMode = null, this._prevRollMode = null, r)
      try {
        game.settings.set("core", "rollMode", e);
      } catch {
      }
  }
  /**
   * Whisper/blind recipients for a Cyberpunk roll mode, matching Foundry's
   * own applyRollMode semantics but version-independent. publicroll clears any
   * inherited whisper.
   */
  _whisperForRollMode(e) {
    const r = game.users.filter((i) => i.isGM).map((i) => i.id);
    switch (e) {
      case "gmroll":
        return { whisper: r, blind: !1 };
      case "blindroll":
        return { whisper: r, blind: !0 };
      case "selfroll":
        return { whisper: [game.user.id], blind: !1 };
      default:
        return { whisper: [], blind: !1 };
    }
  }
  registerSettings() {
    bo(this);
  }
  destroy() {
    var e;
    this.echo && this.echo.disconnect();
    for (let [r, i] of Object.entries(this.hookIds))
      Hooks.off(r, i);
    try {
      (e = game.socket) == null || e.off(`module.${A}`);
    } catch {
    }
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  connect() {
    const e = game.settings.get(A, "apiUrl"), r = game.settings.get(A, "apiKey"), i = game.settings.get(A, "debugMode"), n = Number(game.settings.get(A, "reverbPort") || 0) || 0, s = game.settings.get(A, "reverbUseSSL"), l = (game.settings.get(A, "reverbHost") || "").trim();
    if (!r || !e) return;
    this.echo && this.echo.disconnect();
    let h;
    try {
      h = new URL(e);
    } catch {
      return;
    }
    const u = l || h.hostname, p = h.protocol === "https:", g = typeof s == "boolean" ? s : void 0, m = g ?? p, b = m ? 443 : 80, y = n > 0 ? n : b;
    this.echo = new gs({
      broadcaster: "reverb",
      key: game.settings.get(A, "reverbKey") || cn,
      wsHost: u,
      wsPort: y,
      wssPort: y,
      forceTLS: m,
      enabledTransports: ["ws", "wss"],
      disableStats: !0,
      authEndpoint: `${e.replace(/\/$/, "")}/api/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: "Bearer " + r,
          Accept: "application/json"
        }
      }
    }), window.CyberpunkSocket = this.echo, this.echo.connector.pusher.connection.bind("connected", () => {
      this.isConnected = !0, ui.notifications.info("Cyberpunk Bridge: Online"), i && console.log("Cyberpunk Bridge: Connection Established");
    }), this.echo.connector.pusher.connection.bind("disconnected", () => {
      this.isConnected = !1;
    }), this.listen();
  }
  listen() {
    const e = game.settings.get(A, "channelId"), r = e ? `cpr-agent.${e}` : "cpr-agent";
    this.echo.private(r).listen(".GameUpdate", (i) => {
      this.handleIncomingData(i);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const e = game.settings.get(A, "apiKey"), r = game.settings.get(A, "debugMode");
    if (r && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(A, "hasApiKey") !== !!e && await game.user.setFlag(A, "hasApiKey", !!e), !e) {
      r && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const i = async () => {
      var l;
      const n = game.user.character, s = game.user.getFlag(A, "agent-link");
      r && (console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(n == null ? void 0 : n.name) || "None"}...`), console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`), console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${s || "(none)"}`));
      try {
        const h = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          actorId: n ? n.id : null,
          character: n ? { id: n.id, name: n.name } : null,
          actorName: n ? n.name : null,
          agentLink: s || game.user.id,
          foundryUserId: game.user.id,
          foundryUserName: game.user.name,
          isGM: game.user.isGM
        });
        r && console.log("[Bridge] syncPlayerLink: Laravel response:", h), h && h.agent_link ? s !== h.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${h.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${h.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(A, "agent-link", h.agent_link), (l = ui.notifications) == null || l.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", h);
      } catch (h) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", h);
      }
    };
    await i(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (n, s) => {
      n.id === game.user.id && s.character !== void 0 && i();
    }));
  }
  registerGlobalHooks() {
    var r, i;
    if (this.hookIds.updateActor) return;
    const e = async (n, s) => {
      const l = game.settings.get(A, "apiKey");
      !this.isConnected && !l && !this.embedTransport || !n || !["character", "mook"].includes(n.type) || (console.log(`%c[Bridge] Syncing change for ${n.name}`, "color: #ffaa00;", s), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: n.id,
        uuid: n.id,
        delta: s,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (n, s, l, h) => {
      if (s.system) {
        const u = ut(s.system, "system.");
        e(n, u);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (n, s, l, h) => {
      const u = n.parent;
      if (u instanceof Actor) {
        const p = {}, g = `items.${n.id}.`;
        s.system && ut(s.system, `${g}system.`, p);
        for (let m in s)
          m !== "system" && m !== "_id" && (p[`${g}${m}`] = s[m]);
        Object.keys(p).length > 0 && e(u, p);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (n, s, l) => {
      const h = n.parent;
      if (h instanceof Actor) {
        const u = {
          [`items.+${n.id}`]: n.toObject()
        };
        e(h, u);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (n, s, l) => {
      const h = n.parent;
      if (h instanceof Actor) {
        const u = {
          [`items.${n.id}`]: null
        };
        e(h, u);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (n, s) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (n, s, l, h) => {
      (s.x || s.y || s.disposition || s.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.preUpdateToken = Hooks.on("preUpdateToken", (n, s, l, h) => {
      if (!("x" in s || "y" in s)) return !0;
      const u = n.object;
      if (!u) return !0;
      const p = u.center, g = (s.x !== void 0 ? s.x : n.x) - n.x, m = (s.y !== void 0 ? s.y : n.y) - n.y, b = { x: p.x + g, y: p.y + m }, y = new Ray(p, b);
      if (CONFIG.Canvas.polygonBackends.move.testCollision(
        y.A,
        y.B,
        { type: "move", mode: "any" }
      ))
        return ui.notifications.warn(`${n.name}'s path is blocked by a wall.`), !1;
    }), this.hookIds.deleteToken = Hooks.on("deleteToken", (n, s, l) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.preCreateChatMessage = Hooks.on("preCreateChatMessage", (n, s, l, h) => {
      if (!(!this._isCapturingRoll || !this._captureRollMode))
        try {
          const u = this._whisperForRollMode(this._captureRollMode);
          n.updateSource(u), game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Stamped rollMode ${this._captureRollMode}`, "color:#c084fc; font-weight:bold;", u);
        } catch (u) {
          console.warn("[Bridge] Failed to apply roll-mode visibility", u);
        }
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (n, s, l) => {
      var p;
      const h = !!(n.rolls && n.rolls.length > 0), u = ((p = n.author) == null ? void 0 : p.id) === game.user.id;
      if (game.settings.get(A, "debugMode") && console.log(`%c[Bridge] createChatMessage: hasRolls=${h} mine=${u} capturing=${this._isCapturingRoll} embed=${!!this.embedTransport}`, "color:#00ff88; font-weight:bold;"), !!h && u) {
        if (this._isCapturingRoll) {
          this._endRollCapture();
          return;
        }
        this.broadcastRoll(n);
      }
    }), console.log(`%c[Bridge] registerGlobalHooks: user=${(r = game.user) == null ? void 0 : r.name} isGM=${(i = game.user) == null ? void 0 : i.isGM} socket=${!!game.socket} → registering peer-roll listener on module.${A}`, "color:#00ffff; font-weight:bold;"), game.socket && game.socket.on(`module.${A}`, (n) => {
      if (!(!n || n.kind !== "peer-roll" || !n.payload)) {
        if (console.log(`%c[Bridge] peer-roll socket IN (rollMode=${n.payload.rollMode}, recipients=${JSON.stringify(n.recipients)}, embed=${!!this.embedTransport})`, "color:#00ff88; font-weight:bold;"), Array.isArray(n.recipients) && !n.recipients.includes(game.user.id)) {
          console.log("%c[Bridge] peer-roll dropped: not a recipient", "color:#ffaa00;");
          return;
        }
        if (!this.embedTransport) {
          console.log("%c[Bridge] peer-roll dropped: no embedTransport (Agent window not open on this client)", "color:#ffaa00;");
          return;
        }
        console.log("%c[Bridge] peer-roll → iframe", "color:#00ff88; font-weight:bold;");
        try {
          this.embedTransport.send(n.payload);
        } catch (s) {
          console.error("Cyberpunk Bridge: peer-roll tee failed", s);
        }
      }
    });
  }
  /**
   * Recipients allowed to see a roll of the given mode, mirroring Foundry's own
   * whisper visibility. null means everyone (public). The roller is always
   * included so their own client logic stays consistent (it sees the roll via
   * its local tee anyway; the socket never loops back to the sender).
   */
  _rollRecipients(e) {
    if (!e || e === "publicroll") return null;
    const r = game.users.filter((n) => n.isGM).map((n) => n.id), i = game.user.id;
    return e === "selfroll" ? [i] : [.../* @__PURE__ */ new Set([...r, i])];
  }
  /**
   * Fan a roll result out to peer clients over Foundry's socket. Each peer's
   * listener tees it into its own iframe (small side popup). Recipient list
   * enforces roll-mode privacy; game.socket.emit never echoes to the sender, so
   * the roller does not double-see its own roll.
   */
  _emitRollToPeers(e) {
    if (!game.socket) return;
    const r = this._rollRecipients(e.rollMode);
    game.settings.get(A, "debugMode") && console.log(`%c[Bridge] peer-roll socket OUT (type=${e.type}, rollMode=${e.rollMode}, recipients=${JSON.stringify(r)})`, "color:#00ffff; font-weight:bold;");
    try {
      game.socket.emit(`module.${A}`, {
        kind: "peer-roll",
        payload: e,
        recipients: r
      });
    } catch (i) {
      console.error("Cyberpunk Bridge: peer-roll emit failed", i);
    }
  }
  broadcastRefresh(e) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: e });
  }
  broadcastRoll(e, { localOnly: r = !1 } = {}) {
    var h;
    const i = game.users.get(e.author.id), n = e.rolls[0];
    let s = "publicroll";
    if (e.blind)
      s = "blindroll";
    else if (e.whisper && e.whisper.length > 0) {
      const u = game.users.filter((m) => m.isGM).map((m) => m.id), p = e.whisper.every((m) => u.includes(m) || m === e.author.id);
      e.whisper.length === 1 && e.whisper[0] === e.author.id ? s = "selfroll" : s = "gmroll";
    }
    game.settings.get(A, "debugMode") && console.log(`%c[Bridge] broadcastRoll ${r ? "(peer→iframe)" : "(mine)"} rollMode=${s} total=${n == null ? void 0 : n.total}`, "color:#00ff88; font-weight:bold;");
    let l = null;
    try {
      l = n.toJSON();
    } catch {
    }
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((h = e.speaker) == null ? void 0 : h.actor) || null,
      agentLink: i ? i.getFlag(A, "agent-link") : null,
      playerName: e.alias,
      total: n.total,
      formula: n.formula,
      rollMode: e.rollMode || s,
      label: e.flavor || "Dice Roll",
      rawRoll: {
        total: n.total,
        formula: n.formula,
        rollTitle: e.flavor || "Dice Roll",
        _roll: l
      },
      success: !0
    }, { localOnly: r });
  }
  /**
   * Send results outbound. Enriches the message, tees it to an embedded
   * Agent iframe (postMessage) when one is attached, then POSTs to Laravel
   * if a hosted Agent is configured. Either transport may be absent.
   */
  async sendResponse(e, { localOnly: r = !1 } = {}) {
    const i = (e.requestId ? this.requestAgentLinks.get(e.requestId) : null) || (r ? null : game.user.getFlag(A, "agent-link"));
    i && !e.agentLink && (e.agentLink = i);
    const n = game.settings.get(A, "channelId");
    if (n && !e.channelId && (e.channelId = n), e.type === "ROLL_RESULT") {
      if (!e.playerName) {
        const h = e.actorId ? game.actors.get(e.actorId) : null;
        e.playerName = h ? h.name : game.user.name;
      }
      e.rollMode || (e.rollMode = game.settings.get("core", "rollMode"));
    }
    if (this.embedTransport)
      try {
        this.embedTransport.send(e);
      } catch (h) {
        console.error("Cyberpunk Bridge: Embed send failed", h);
      }
    if (!r && (e.type === "ROLL_RESULT" || e.type === "DICE_ROLL_EVENT") && this._emitRollToPeers(e), r) return null;
    let s = game.settings.get(A, "apiUrl");
    const l = game.settings.get(A, "apiKey");
    if (!s || !l) return null;
    s.endsWith("/") && (s = s.slice(0, -1));
    try {
      const h = await fetch(`${s}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${l}`,
          Accept: "application/json"
        },
        body: JSON.stringify(e)
      });
      return h.ok ? await h.json() : (console.error("Cyberpunk Bridge: Callback failed", h.statusText), null);
    } catch (h) {
      return console.error("Cyberpunk Bridge: Error sending callback", h), null;
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(e) {
    var b, y;
    const r = e.payload || e, i = r.type;
    console.log(`%c[Bridge] Incoming Call: ${i}`, "color: #00ffff; font-weight: bold;", r);
    const n = r.requestId, s = r.agent_link || r.agentLink;
    n && s && (this.requestAgentLinks.set(n, s), setTimeout(() => this.requestAgentLinks.delete(n), 3e4));
    const l = game.user.getFlag(A, "agent-link"), h = r.actorId, u = (b = game.user.character) == null ? void 0 : b.id, p = game.settings.get(A, "debugMode");
    p && console.log(`[Bridge] handleIncomingData: requestId=${n}, agentLink=${s}, myAgentLink=${l}, actorId=${h}, myCharacterId=${u}`);
    let g = !1;
    if (game.user.isGM || l && (n === l || s === l) ? g = !0 : !l && n && h && u === h && (console.log(`[Bridge] Discovery: Matching incoming request to character ${h}`), g = !0), !g) {
      p && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && s && l !== s && (n === s || h && u === h) && (console.log(`%c[Bridge] Setting agent-link flag: ${s}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(A, "agent-link", s), (y = ui.notifications) == null || y.info("Agent: Account linked!"));
    let m = r.tokenId;
    if (!m && h) {
      const C = canvas.tokens.placeables.find((_) => {
        var k;
        return ((k = _.actor) == null ? void 0 : k.id) === h;
      });
      C && (m = C.id);
    }
    await on(this, i, r, { type: i, requestId: n, actorId: h, tokenId: m, debug: p });
  }
  /**
   * Ingress for messages arriving from an embedded Agent iframe.
   * Skips the Laravel-oriented channel/agentLink routing in handleIncomingData:
   * the iframe runs in this same client for this same user, already
   * authenticated by Foundry and validated (origin + nonce) at the transport.
   * Foundry's own permission model still gates every handler action.
   */
  async handleIncomingDataLocal(e) {
    var h, u;
    const r = e.type, i = e.requestId, n = e.actorId, s = game.settings.get(A, "debugMode");
    let l = e.tokenId;
    if (!l && n) {
      const p = (u = (h = canvas.tokens) == null ? void 0 : h.placeables) == null ? void 0 : u.find((g) => {
        var m;
        return ((m = g.actor) == null ? void 0 : m.id) === n;
      });
      p && (l = p.id);
    }
    s && console.log(`%c[Bridge] Embed Call: ${r}`, "color: #c084fc; font-weight: bold;", e), await on(this, r, e, { type: r, requestId: i, actorId: n, tokenId: l, debug: s });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class jn extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const e = foundry.data.fields;
    return {
      // An array of dynamic rows
      entries: new e.ArrayField(new e.SchemaField({
        id: new e.StringField({ required: !0, initial: () => foundry.utils.randomID() }),
        icon: new e.FilePathField({ categories: ["IMAGE"], initial: "icons/svg/item-bag.svg" }),
        title: new e.StringField({ required: !0, initial: "Link Title" }),
        type: new e.StringField({ choices: ["html", "pdf"], initial: "html" }),
        htmlContent: new e.HTMLField(),
        pdfPath: new e.FilePathField({ categories: ["TEXT"] })
      }))
    };
  }
}
rt(jn, "metadata", {
  label: "Agent Data Pool"
});
class Hn extends JournalPageSheet {
  /** @override */
  get template() {
    return this.isEditable ? this.options.editTemplate : this.options.viewTemplate;
  }
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["sheet", "journal-entry-page", "data-pool-sheet"],
      viewTemplate: "modules/cpr-agent/templates/data-pool.hbs",
      editTemplate: "modules/cpr-agent/templates/data-pool.hbs",
      width: 700,
      height: 800,
      submitOnChange: !0,
      closeOnSubmit: !1
    });
  }
  async getData(e) {
    const r = super.getData(e);
    r.entries = this.document.system.entries || [];
    for (let i of r.entries)
      i.type === "html" && (i.enrichedHtml = await TextEditor.enrichHTML(i.htmlContent, {
        async: !0,
        secrets: this.document.isOwner,
        documents: !0
      }));
    return r;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".add-entry").click(this._onAddEntry.bind(this)), e.find(".delete-entry").click(this._onDeleteEntry.bind(this));
  }
  async _onAddEntry(e) {
    e.preventDefault();
    const i = [...this.document.system.entries || [], {
      id: foundry.utils.randomID(),
      title: "New Data Pool Link",
      type: "html"
    }];
    await this.document.update({ "system.entries": i });
  }
  async _onDeleteEntry(e) {
    e.preventDefault();
    const r = e.currentTarget.dataset.id, n = (this.document.system.entries || []).filter((s) => s.id !== r);
    await this.document.update({ "system.entries": n });
  }
}
/** @override */
rt(Hn, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
class Qo {
  constructor(e) {
    this.bridge = e, this.frame = null, this.nonce = null, this.origin = ns(), this.ready = !1, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage);
  }
  /** Bind to a freshly-rendered iframe and await its hello. */
  attach(e, r) {
    this.frame = e, this.nonce = r, this.ready = !1;
  }
  /** Unbind (window closed). The message listener stays; it no-ops without a frame. */
  detach() {
    this.frame = null, this.nonce = null, this.ready = !1;
  }
  destroy() {
    window.removeEventListener("message", this._onMessage), this.detach();
  }
  /** Egress — deliver a bridge message into the iframe. No-op if detached. */
  send(e) {
    var r;
    (r = this.frame) != null && r.contentWindow && this.frame.contentWindow.postMessage(
      { __cpr: !0, nonce: this.nonce, kind: "message", payload: e },
      this.origin
    );
  }
  _onMessage(e) {
    if (e.origin !== this.origin || !this.frame || e.source !== this.frame.contentWindow) return;
    const r = e.data;
    if (!(!r || r.__cpr !== !0) && !(this.nonce && r.nonce !== this.nonce)) {
      if (r.kind === "hello") {
        this.ready = !0, this.frame.contentWindow.postMessage(
          { __cpr: !0, nonce: this.nonce, kind: "welcome" },
          this.origin
        ), this.bridge.handleIncomingDataLocal({ type: "GET_ACTOR" });
        return;
      }
      r.kind === "message" && r.payload && this.bridge.handleIncomingDataLocal(r.payload);
    }
  }
}
class Zo extends Application {
  constructor(e, r = {}) {
    super(r), this.bridge = e, this.nonce = foundry.utils.randomID(24), e.embedTransport || (e.embedTransport = new Qo(e)), this.transport = e.embedTransport;
  }
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-app",
      classes: ["cpr-agent-app"],
      title: "Agent",
      template: "modules/cpr-agent/templates/agent-app.hbs",
      width: 430,
      height: 820,
      resizable: !0,
      popOut: !0
    });
  }
  getData() {
    return {
      src: `${ln()}/embed?nonce=${encodeURIComponent(this.nonce)}`
    };
  }
  _getHeaderButtons() {
    const e = super._getHeaderButtons();
    return e.unshift({
      label: "Fullscreen",
      class: "cpr-agent-fullscreen",
      icon: "fas fa-expand",
      onclick: (r) => this._toggleFullscreen(r)
    }), e;
  }
  _toggleFullscreen(e) {
    var n;
    if (this._isFullscreen = !this._isFullscreen, this._isFullscreen) {
      const s = this.position || {};
      this._prevPosition = { width: s.width, height: s.height, top: s.top, left: s.left }, this.setPosition({ left: 0, top: 0, width: window.innerWidth, height: window.innerHeight });
    } else
      this.setPosition(this._prevPosition || { width: 430, height: 820 });
    const r = e == null ? void 0 : e.currentTarget, i = (n = r == null ? void 0 : r.querySelector) == null ? void 0 : n.call(r, "i");
    i && (i.classList.toggle("fa-expand", !this._isFullscreen), i.classList.toggle("fa-compress", this._isFullscreen)), r && r.childNodes.forEach((s) => {
      s.nodeType === Node.TEXT_NODE && (s.textContent = this._isFullscreen ? " Windowed" : " Fullscreen");
    });
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
  async _render(e, r) {
    var s, l;
    await super._render(e, r);
    const i = this.element instanceof HTMLElement ? this.element : (s = this.element) == null ? void 0 : s[0], n = (l = i == null ? void 0 : i.querySelector) == null ? void 0 : l.call(i, "iframe.cpr-agent-frame");
    n && this.transport.frame !== n ? this.transport.attach(n, this.nonce) : n || console.warn("[Bridge] AgentApp: iframe.cpr-agent-frame not found; transport not attached.");
  }
  async close(e) {
    var r;
    return (r = this.transport) == null || r.detach(), super.close(e);
  }
}
window.Pusher = ts;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new Yo();
Hooks.once("init", () => {
  ea(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = jn, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", Hn, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), lo(window.cyberpunkBridge), window.cyberpunkBridge.openAgent = () => {
    window.cyberpunkBridge._agentApp || (window.cyberpunkBridge._agentApp = new Zo(window.cyberpunkBridge)), window.cyberpunkBridge._agentApp.render(!0);
  }, console.log("[Bridge] Cyberpunk Bridge Fully Online. Open the embedded Agent with: cyberpunkBridge.openAgent()");
});
Hooks.on("getSceneControlButtons", (a) => {
  const e = Array.isArray(a) ? a.find((r) => r.name === "token") : a == null ? void 0 : a.token;
  e != null && e.tools && e.tools.push({
    name: "cpr-agent",
    title: "Open Agent",
    icon: "fas fa-mobile-screen-button",
    button: !0,
    onClick: () => {
      var r, i;
      return (i = (r = window.cyberpunkBridge) == null ? void 0 : r.openAgent) == null ? void 0 : i.call(r);
    }
  });
});
function ea() {
  game.settings.settings.has(`${A}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
