var Qi = Object.defineProperty;
var Zi = (o, e, r) => e in o ? Qi(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r;
var ft = (o, e, r) => Zi(o, typeof e != "symbol" ? e + "" : e, r);
import.meta.hot && import.meta.hot.accept((o) => {
  console.log("Hot reloading module...");
});
function es(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var yn = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(o, e) {
  (function(i, n) {
    o.exports = n();
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
                for (var R in I) I.hasOwnProperty(R) && (S[R] = I[R]);
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
                var R = k.length - S;
                if (R > 0) {
                  var I = k[S] << 16 | (R === 2 ? k[S + 1] << 8 : 0);
                  v += this._encodeByte(I >>> 3 * 6 & 63), v += this._encodeByte(I >>> 2 * 6 & 63), R === 2 ? v += this._encodeByte(I >>> 1 * 6 & 63) : v += this._paddingCharacter || "", v += this._paddingCharacter || "";
                }
                return v;
              }, _.prototype.maxDecodedLength = function(k) {
                return this._paddingCharacter ? k / 4 * 3 | 0 : (k * 6 + 7) / 8 | 0;
              }, _.prototype.decodedLength = function(k) {
                return this.maxDecodedLength(k.length - this._getPaddingLength(k));
              }, _.prototype.decode = function(k) {
                if (k.length === 0)
                  return new Uint8Array(0);
                for (var v = this._getPaddingLength(k), S = k.length - v, I = new Uint8Array(this.maxDecodedLength(S)), R = 0, P = 0, E = 0, N = 0, B = 0, F = 0, j = 0; P < S - 4; P += 4)
                  N = this._decodeChar(k.charCodeAt(P + 0)), B = this._decodeChar(k.charCodeAt(P + 1)), F = this._decodeChar(k.charCodeAt(P + 2)), j = this._decodeChar(k.charCodeAt(P + 3)), I[R++] = N << 2 | B >>> 4, I[R++] = B << 4 | F >>> 2, I[R++] = F << 6 | j, E |= N & l, E |= B & l, E |= F & l, E |= j & l;
                if (P < S - 1 && (N = this._decodeChar(k.charCodeAt(P)), B = this._decodeChar(k.charCodeAt(P + 1)), I[R++] = N << 2 | B >>> 4, E |= N & l, E |= B & l), P < S - 2 && (F = this._decodeChar(k.charCodeAt(P + 2)), I[R++] = B << 4 | F >>> 2, E |= F & l), P < S - 3 && (j = this._decodeChar(k.charCodeAt(P + 3)), I[R++] = F << 6 | j, E |= j & l), E !== 0)
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
          var y = new m();
          function b(_) {
            return y.encode(_);
          }
          i.encodeURLSafe = b;
          function C(_) {
            return y.decode(_);
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
            for (var m = new Uint8Array(u(g)), y = 0, b = 0; b < g.length; b++) {
              var C = g.charCodeAt(b);
              C < 128 ? m[y++] = C : C < 2048 ? (m[y++] = 192 | C >> 6, m[y++] = 128 | C & 63) : C < 55296 ? (m[y++] = 224 | C >> 12, m[y++] = 128 | C >> 6 & 63, m[y++] = 128 | C & 63) : (b++, C = (C & 1023) << 10, C |= g.charCodeAt(b) & 1023, C += 65536, m[y++] = 240 | C >> 18, m[y++] = 128 | C >> 12 & 63, m[y++] = 128 | C >> 6 & 63, m[y++] = 128 | C & 63);
            }
            return m;
          }
          i.encode = h;
          function u(g) {
            for (var m = 0, y = 0; y < g.length; y++) {
              var b = g.charCodeAt(y);
              if (b < 128)
                m += 1;
              else if (b < 2048)
                m += 2;
              else if (b < 55296)
                m += 3;
              else if (b <= 57343) {
                if (y >= g.length - 1)
                  throw new Error(s);
                y++, m += 4;
              } else
                throw new Error(s);
            }
            return m;
          }
          i.encodedLength = u;
          function p(g) {
            for (var m = [], y = 0; y < g.length; y++) {
              var b = g[y];
              if (b & 128) {
                var C = void 0;
                if (b < 224) {
                  if (y >= g.length)
                    throw new Error(l);
                  var _ = g[++y];
                  if ((_ & 192) !== 128)
                    throw new Error(l);
                  b = (b & 31) << 6 | _ & 63, C = 128;
                } else if (b < 240) {
                  if (y >= g.length - 1)
                    throw new Error(l);
                  var _ = g[++y], k = g[++y];
                  if ((_ & 192) !== 128 || (k & 192) !== 128)
                    throw new Error(l);
                  b = (b & 15) << 12 | (_ & 63) << 6 | k & 63, C = 2048;
                } else if (b < 248) {
                  if (y >= g.length - 2)
                    throw new Error(l);
                  var _ = g[++y], k = g[++y], v = g[++y];
                  if ((_ & 192) !== 128 || (k & 192) !== 128 || (v & 192) !== 128)
                    throw new Error(l);
                  b = (b & 15) << 18 | (_ & 63) << 12 | (k & 63) << 6 | v & 63, C = 65536;
                } else
                  throw new Error(l);
                if (b < C || b >= 55296 && b <= 57343)
                  throw new Error(l);
                if (b >= 65536) {
                  if (b > 1114111)
                    throw new Error(l);
                  b -= 65536, m.push(String.fromCharCode(55296 | b >> 10)), b = 56320 | b & 1023;
                }
              }
              m.push(String.fromCharCode(b));
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
            constructor(t, a) {
              this.lastId = 0, this.prefix = t, this.name = a;
            }
            create(t) {
              this.lastId++;
              var a = this.lastId, d = this.prefix + a, f = this.name + "[" + a + "]", w = !1, T = function() {
                w || (t.apply(null, arguments), w = !0);
              };
              return this[a] = T, { number: a, id: d, name: f, callback: T };
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
            load(t, a, d) {
              var f = this;
              if (f.loading[t] && f.loading[t].length > 0)
                f.loading[t].push(d);
              else {
                f.loading[t] = [d];
                var w = O.createScriptRequest(f.getPath(t, a)), T = f.receivers.create(function(L) {
                  if (f.receivers.remove(T), f.loading[t]) {
                    var M = f.loading[t];
                    delete f.loading[t];
                    for (var x = function(z) {
                      z || w.cleanup();
                    }, D = 0; D < M.length; D++)
                      M[D](L, x);
                  }
                });
                w.send(T);
              }
            }
            getRoot(t) {
              var a, d = O.getDocument().location.protocol;
              return t && t.useTLS || d === "https:" ? a = this.options.cdn_https : a = this.options.cdn_http, a.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(t, a) {
              return this.getRoot(a) + "/" + t + this.options.suffix + ".js";
            }
          }
          var g = new s("_pusher_dependencies", "Pusher.DependenciesReceivers"), m = new p({
            cdn_http: u.cdn_http,
            cdn_https: u.cdn_https,
            version: u.VERSION,
            suffix: u.dependency_suffix,
            receivers: g
          });
          const y = {
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
            const t = "See:", a = y.urls[c];
            if (!a)
              return "";
            let d;
            return a.fullUrl ? d = a.fullUrl : a.path && (d = y.baseUrl + a.path), d ? `${t} ${d}` : "";
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
          class E extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class N extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class B extends Error {
            constructor(t, a) {
              super(a), this.status = t, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var j = function(c, t, a, d, f) {
            const w = O.createXHR();
            w.open("POST", a.endpoint, !0), w.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var T in a.headers)
              w.setRequestHeader(T, a.headers[T]);
            if (a.headersProvider != null) {
              let L = a.headersProvider();
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
                  f(new B(w.status, `Unable to retrieve auth string from ${d.toString()} endpoint - received status: ${w.status} from ${a.endpoint}. ${L}`), null);
                }
            }, w.send(t), w;
          };
          function J(c) {
            return Oe(Me(c));
          }
          var X = String.fromCharCode, U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ue = function(c) {
            var t = c.charCodeAt(0);
            return t < 128 ? c : t < 2048 ? X(192 | t >>> 6) + X(128 | t & 63) : X(224 | t >>> 12 & 15) + X(128 | t >>> 6 & 63) + X(128 | t & 63);
          }, Me = function(c) {
            return c.replace(/[^\x00-\x7F]/g, ue);
          }, Ne = function(c) {
            var t = [0, 2, 1][c.length % 3], a = c.charCodeAt(0) << 16 | (c.length > 1 ? c.charCodeAt(1) : 0) << 8 | (c.length > 2 ? c.charCodeAt(2) : 0), d = [
              U.charAt(a >>> 18),
              U.charAt(a >>> 12 & 63),
              t >= 2 ? "=" : U.charAt(a >>> 6 & 63),
              t >= 1 ? "=" : U.charAt(a & 63)
            ];
            return d.join("");
          }, Oe = window.btoa || function(c) {
            return c.replace(/[\s\S]{1,3}/g, Ne);
          };
          class Be {
            constructor(t, a, d, f) {
              this.clear = a, this.timer = t(() => {
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
          var ke = Be;
          function xe(c) {
            window.clearTimeout(c);
          }
          function he(c) {
            window.clearInterval(c);
          }
          class ee extends ke {
            constructor(t, a) {
              super(setTimeout, xe, t, function(d) {
                return a(), null;
              });
            }
          }
          class de extends ke {
            constructor(t, a) {
              super(setInterval, he, t, function(d) {
                return a(), d;
              });
            }
          }
          var fe = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(c) {
              return new ee(0, c);
            },
            method(c, ...t) {
              var a = Array.prototype.slice.call(arguments, 1);
              return function(d) {
                return d[c].apply(d, a.concat(arguments));
              };
            }
          }, q = fe;
          function W(c, ...t) {
            for (var a = 0; a < t.length; a++) {
              var d = t[a];
              for (var f in d)
                d[f] && d[f].constructor && d[f].constructor === Object ? c[f] = W(c[f] || {}, d[f]) : c[f] = d[f];
            }
            return c;
          }
          function De() {
            for (var c = ["Pusher"], t = 0; t < arguments.length; t++)
              typeof arguments[t] == "string" ? c.push(arguments[t]) : c.push(Fe(arguments[t]));
            return c.join(" : ");
          }
          function Ot(c, t) {
            var a = Array.prototype.indexOf;
            if (c === null)
              return -1;
            if (a && c.indexOf === a)
              return c.indexOf(t);
            for (var d = 0, f = c.length; d < f; d++)
              if (c[d] === t)
                return d;
            return -1;
          }
          function ne(c, t) {
            for (var a in c)
              Object.prototype.hasOwnProperty.call(c, a) && t(c[a], a, c);
          }
          function Bt(c) {
            var t = [];
            return ne(c, function(a, d) {
              t.push(d);
            }), t;
          }
          function Qn(c) {
            var t = [];
            return ne(c, function(a) {
              t.push(a);
            }), t;
          }
          function _e(c, t, a) {
            for (var d = 0; d < c.length; d++)
              t.call(a || window, c[d], d, c);
          }
          function xt(c, t) {
            for (var a = [], d = 0; d < c.length; d++)
              a.push(t(c[d], d, c, a));
            return a;
          }
          function Zn(c, t) {
            var a = {};
            return ne(c, function(d, f) {
              a[f] = t(d);
            }), a;
          }
          function Dt(c, t) {
            t = t || function(f) {
              return !!f;
            };
            for (var a = [], d = 0; d < c.length; d++)
              t(c[d], d, c, a) && a.push(c[d]);
            return a;
          }
          function Ft(c, t) {
            var a = {};
            return ne(c, function(d, f) {
              (t && t(d, f, c, a) || d) && (a[f] = d);
            }), a;
          }
          function er(c) {
            var t = [];
            return ne(c, function(a, d) {
              t.push([d, a]);
            }), t;
          }
          function Ut(c, t) {
            for (var a = 0; a < c.length; a++)
              if (t(c[a], a, c))
                return !0;
            return !1;
          }
          function tr(c, t) {
            for (var a = 0; a < c.length; a++)
              if (!t(c[a], a, c))
                return !1;
            return !0;
          }
          function nr(c) {
            return Zn(c, function(t) {
              return typeof t == "object" && (t = Fe(t)), encodeURIComponent(J(t.toString()));
            });
          }
          function rr(c) {
            var t = Ft(c, function(d) {
              return d !== void 0;
            }), a = xt(er(nr(t)), q.method("join", "=")).join("&");
            return a;
          }
          function ir(c) {
            var t = [], a = [];
            return function d(f, w) {
              var T, L, M;
              switch (typeof f) {
                case "object":
                  if (!f)
                    return null;
                  for (T = 0; T < t.length; T += 1)
                    if (t[T] === f)
                      return { $ref: a[T] };
                  if (t.push(f), a.push(w), Object.prototype.toString.apply(f) === "[object Array]")
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
          function Fe(c) {
            try {
              return JSON.stringify(c);
            } catch {
              return JSON.stringify(ir(c));
            }
          }
          class sr {
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
            log(t, ...a) {
              var d = De.apply(this, arguments);
              ut.log ? ut.log(d) : ut.logToConsole && t.bind(this)(d);
            }
          }
          var H = new sr(), or = function(c, t, a, d, f) {
            (a.headers !== void 0 || a.headersProvider != null) && H.warn(`To send headers with the ${d.toString()} request, you must use AJAX, rather than JSONP.`);
            var w = c.nextAuthCallbackID.toString();
            c.nextAuthCallbackID++;
            var T = c.getDocument(), L = T.createElement("script");
            c.auth_callbacks[w] = function(D) {
              f(null, D);
            };
            var M = "Pusher.auth_callbacks['" + w + "']";
            L.src = a.endpoint + "?callback=" + encodeURIComponent(M) + "&" + t;
            var x = T.getElementsByTagName("head")[0] || T.documentElement;
            x.insertBefore(L, x.firstChild);
          }, ar = or;
          class cr {
            constructor(t) {
              this.src = t;
            }
            send(t) {
              var a = this, d = "Error loading " + a.src;
              a.script = document.createElement("script"), a.script.id = t.id, a.script.src = a.src, a.script.type = "text/javascript", a.script.charset = "UTF-8", a.script.addEventListener ? (a.script.onerror = function() {
                t.callback(d);
              }, a.script.onload = function() {
                t.callback(null);
              }) : a.script.onreadystatechange = function() {
                (a.script.readyState === "loaded" || a.script.readyState === "complete") && t.callback(null);
              }, a.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (a.errorScript = document.createElement("script"), a.errorScript.id = t.id + "_error", a.errorScript.text = t.name + "('" + d + "');", a.script.async = a.errorScript.async = !1) : a.script.async = !0;
              var f = document.getElementsByTagName("head")[0];
              f.insertBefore(a.script, f.firstChild), a.errorScript && f.insertBefore(a.errorScript, a.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class lr {
            constructor(t, a) {
              this.url = t, this.data = a;
            }
            send(t) {
              if (!this.request) {
                var a = rr(this.data), d = this.url + "/" + t.number + "?" + a;
                this.request = O.createScriptRequest(d), this.request.send(t);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var ur = function(c, t) {
            return function(a, d) {
              var f = "http" + (t ? "s" : "") + "://", w = f + (c.host || c.options.host) + c.options.path, T = O.createJSONPRequest(w, a), L = O.ScriptReceivers.create(function(M, x) {
                l.remove(L), T.cleanup(), x && x.host && (c.host = x.host), d && d(M, x);
              });
              T.send(L);
            };
          }, hr = {
            name: "jsonp",
            getAgent: ur
          }, dr = hr;
          function et(c, t, a) {
            var d = c + (t.useTLS ? "s" : ""), f = t.useTLS ? t.hostTLS : t.hostNonTLS;
            return d + "://" + f + a;
          }
          function tt(c, t) {
            var a = "/app/" + c, d = "?protocol=" + u.PROTOCOL + "&client=js&version=" + u.VERSION + (t ? "&" + t : "");
            return a + d;
          }
          var fr = {
            getInitial: function(c, t) {
              var a = (t.httpPath || "") + tt(c, "flash=false");
              return et("ws", t, a);
            }
          }, pr = {
            getInitial: function(c, t) {
              var a = (t.httpPath || "/pusher") + tt(c);
              return et("http", t, a);
            }
          }, gr = {
            getInitial: function(c, t) {
              return et("http", t, t.httpPath || "/pusher");
            },
            getPath: function(c, t) {
              return tt(c);
            }
          };
          class mr {
            constructor() {
              this._callbacks = {};
            }
            get(t) {
              return this._callbacks[nt(t)];
            }
            add(t, a, d) {
              var f = nt(t);
              this._callbacks[f] = this._callbacks[f] || [], this._callbacks[f].push({
                fn: a,
                context: d
              });
            }
            remove(t, a, d) {
              if (!t && !a && !d) {
                this._callbacks = {};
                return;
              }
              var f = t ? [nt(t)] : Bt(this._callbacks);
              a || d ? this.removeCallback(f, a, d) : this.removeAllCallbacks(f);
            }
            removeCallback(t, a, d) {
              _e(t, function(f) {
                this._callbacks[f] = Dt(this._callbacks[f] || [], function(w) {
                  return a && a !== w.fn || d && d !== w.context;
                }), this._callbacks[f].length === 0 && delete this._callbacks[f];
              }, this);
            }
            removeAllCallbacks(t) {
              _e(t, function(a) {
                delete this._callbacks[a];
              }, this);
            }
          }
          function nt(c) {
            return "_" + c;
          }
          class re {
            constructor(t) {
              this.callbacks = new mr(), this.global_callbacks = [], this.failThrough = t;
            }
            bind(t, a, d) {
              return this.callbacks.add(t, a, d), this;
            }
            bind_global(t) {
              return this.global_callbacks.push(t), this;
            }
            unbind(t, a, d) {
              return this.callbacks.remove(t, a, d), this;
            }
            unbind_global(t) {
              return t ? (this.global_callbacks = Dt(this.global_callbacks || [], (a) => a !== t), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(t, a, d) {
              for (var f = 0; f < this.global_callbacks.length; f++)
                this.global_callbacks[f](t, a);
              var w = this.callbacks.get(t), T = [];
              if (d ? T.push(a, d) : a && T.push(a), w && w.length > 0)
                for (var f = 0; f < w.length; f++)
                  w[f].fn.apply(w[f].context || window, T);
              else this.failThrough && this.failThrough(t, a);
              return this;
            }
          }
          class yr extends re {
            constructor(t, a, d, f, w) {
              super(), this.initialize = O.transportConnectionInitializer, this.hooks = t, this.name = a, this.priority = d, this.key = f, this.options = w, this.state = "new", this.timeline = w.timeline, this.activityTimeout = w.activityTimeout, this.id = this.timeline.generateUniqueID();
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
              } catch (a) {
                return q.defer(() => {
                  this.onError(a), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), H.debug("Connecting", { transport: this.name, url: t }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(t) {
              return this.state === "open" ? (q.defer(() => {
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
            changeState(t, a) {
              this.state = t, this.timeline.info(this.buildTimelineMessage({
                state: t,
                params: a
              })), this.emit(t, a);
            }
            buildTimelineMessage(t) {
              return W({ cid: this.id }, t);
            }
          }
          class pe {
            constructor(t) {
              this.hooks = t;
            }
            isSupported(t) {
              return this.hooks.isSupported(t);
            }
            createConnection(t, a, d, f) {
              return new yr(this.hooks, t, a, d, f);
            }
          }
          var br = new pe({
            urls: fr,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!O.getWebSocketAPI();
            },
            isSupported: function() {
              return !!O.getWebSocketAPI();
            },
            getSocket: function(c) {
              return O.createWebSocket(c);
            }
          }), jt = {
            urls: pr,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Ht = W({
            getSocket: function(c) {
              return O.HTTPFactory.createStreamingSocket(c);
            }
          }, jt), zt = W({
            getSocket: function(c) {
              return O.HTTPFactory.createPollingSocket(c);
            }
          }, jt), qt = {
            isSupported: function() {
              return O.isXHRSupported();
            }
          }, vr = new pe(W({}, Ht, qt)), wr = new pe(W({}, zt, qt)), kr = {
            ws: br,
            xhr_streaming: vr,
            xhr_polling: wr
          }, Ue = kr, _r = new pe({
            file: "sockjs",
            urls: gr,
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
          }), $t = {
            isSupported: function(c) {
              var t = O.isXDRSupported(c.useTLS);
              return t;
            }
          }, Cr = new pe(W({}, Ht, $t)), Sr = new pe(W({}, zt, $t));
          Ue.xdr_streaming = Cr, Ue.xdr_polling = Sr, Ue.sockjs = _r;
          var Tr = Ue;
          class Ar extends re {
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
          var Ir = new Ar();
          class Rr {
            constructor(t, a, d) {
              this.manager = t, this.transport = a, this.minPingDelay = d.minPingDelay, this.maxPingDelay = d.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(t, a, d, f) {
              f = W({}, f, {
                activityTimeout: this.pingDelay
              });
              var w = this.transport.createConnection(t, a, d, f), T = null, L = function() {
                w.unbind("open", L), w.bind("closed", M), T = q.now();
              }, M = (x) => {
                if (w.unbind("closed", M), x.code === 1002 || x.code === 1003)
                  this.manager.reportDeath();
                else if (!x.wasClean && T) {
                  var D = q.now() - T;
                  D < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(D / 2, this.minPingDelay));
                }
              };
              return w.bind("open", L), w;
            }
            isSupported(t) {
              return this.manager.isAlive() && this.transport.isSupported(t);
            }
          }
          const Gt = {
            decodeMessage: function(c) {
              try {
                var t = JSON.parse(c.data), a = t.data;
                if (typeof a == "string")
                  try {
                    a = JSON.parse(t.data);
                  } catch {
                  }
                var d = {
                  event: t.event,
                  channel: t.channel,
                  data: a
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
              var t = Gt.decodeMessage(c);
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
          var ae = Gt;
          class Er extends re {
            constructor(t, a) {
              super(), this.id = t, this.transport = a, this.activityTimeout = a.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(t) {
              return this.transport.send(t);
            }
            send_event(t, a, d) {
              var f = { event: t, data: a };
              return d && (f.channel = d), H.debug("Event sent", f), this.send(ae.encodeMessage(f));
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
                    switch (H.debug("Event recd", f), f.event) {
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
                  a(), d && d.code && this.handleCloseEvent(d), this.transport = null, this.emit("closed");
                }
              }, a = () => {
                ne(t, (d, f) => {
                  this.transport.unbind(f, d);
                });
              };
              ne(t, (d, f) => {
                this.transport.bind(f, d);
              });
            }
            handleCloseEvent(t) {
              var a = ae.getCloseAction(t), d = ae.getCloseError(t);
              d && this.emit("error", d), a && this.emit(a, { action: a, error: d });
            }
          }
          class Lr {
            constructor(t, a) {
              this.transport = t, this.callback = a, this.bindListeners();
            }
            close() {
              this.unbindListeners(), this.transport.close();
            }
            bindListeners() {
              this.onMessage = (t) => {
                this.unbindListeners();
                var a;
                try {
                  a = ae.processHandshake(t);
                } catch (d) {
                  this.finish("error", { error: d }), this.transport.close();
                  return;
                }
                a.action === "connected" ? this.finish("connected", {
                  connection: new Er(a.id, this.transport),
                  activityTimeout: a.activityTimeout
                }) : (this.finish(a.action, { error: a.error }), this.transport.close());
              }, this.onClosed = (t) => {
                this.unbindListeners();
                var a = ae.getCloseAction(t) || "backoff", d = ae.getCloseError(t);
                this.finish(a, { error: d });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(t, a) {
              this.callback(W({ transport: this.transport, action: t }, a));
            }
          }
          class Pr {
            constructor(t, a) {
              this.timeline = t, this.options = a || {};
            }
            send(t, a) {
              this.timeline.isEmpty() || this.timeline.send(O.TimelineTransport.getAgent(this, t), a);
            }
          }
          class rt extends re {
            constructor(t, a) {
              super(function(d, f) {
                H.debug("No callbacks on " + t + " for " + d);
              }), this.name = t, this.pusher = a, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(t, a) {
              return a(null, { auth: "" });
            }
            trigger(t, a) {
              if (t.indexOf("client-") !== 0)
                throw new k("Event '" + t + "' does not start with 'client-'");
              if (!this.subscribed) {
                var d = C.buildLogSuffix("triggeringClientEvents");
                H.warn(`Client event triggered before channel 'subscription_succeeded' event . ${d}`);
              }
              return this.pusher.send_event(t, a, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(t) {
              var a = t.event, d = t.data;
              if (a === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(t);
              else if (a === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(t);
              else if (a.indexOf("pusher_internal:") !== 0) {
                var f = {};
                this.emit(a, d, f);
              }
            }
            handleSubscriptionSucceededEvent(t) {
              this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", t.data);
            }
            handleSubscriptionCountEvent(t) {
              t.data.subscription_count && (this.subscriptionCount = t.data.subscription_count), this.emit("pusher:subscription_count", t.data);
            }
            subscribe() {
              this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (t, a) => {
                t ? (this.subscriptionPending = !1, H.error(t.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: t.message
                }, t instanceof B ? { status: t.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
                  auth: a.auth,
                  channel_data: a.channel_data,
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
          class it extends rt {
            authorize(t, a) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: t
              }, a);
            }
          }
          class Mr {
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
              ne(this.members, (a, d) => {
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
              var a = this.get(t.user_id);
              return a && (delete this.members[t.user_id], this.count--), a;
            }
            reset() {
              this.members = {}, this.count = 0, this.myID = null, this.me = null;
            }
          }
          var Nr = function(c, t, a, d) {
            function f(w) {
              return w instanceof a ? w : new a(function(T) {
                T(w);
              });
            }
            return new (a || (a = Promise))(function(w, T) {
              function L(D) {
                try {
                  x(d.next(D));
                } catch (z) {
                  T(z);
                }
              }
              function M(D) {
                try {
                  x(d.throw(D));
                } catch (z) {
                  T(z);
                }
              }
              function x(D) {
                D.done ? w(D.value) : f(D.value).then(L, M);
              }
              x((d = d.apply(c, t || [])).next());
            });
          };
          class Or extends it {
            constructor(t, a) {
              super(t, a), this.members = new Mr();
            }
            authorize(t, a) {
              super.authorize(t, (d, f) => Nr(this, void 0, void 0, function* () {
                if (!d)
                  if (f = f, f.channel_data != null) {
                    var w = JSON.parse(f.channel_data);
                    this.members.setMyID(w.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let T = C.buildLogSuffix("authorizationEndpoint");
                    H.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${T}, or the user should be signed in.`), a("Invalid auth response");
                    return;
                  }
                a(d, f);
              }));
            }
            handleEvent(t) {
              var a = t.event;
              if (a.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(t);
              else {
                var d = t.data, f = {};
                t.user_id && (f.user_id = t.user_id), this.emit(a, d, f);
              }
            }
            handleInternalEvent(t) {
              var a = t.event, d = t.data;
              switch (a) {
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
          var Br = n(1), st = n(0);
          class xr extends it {
            constructor(t, a, d) {
              super(t, a), this.key = null, this.nacl = d;
            }
            authorize(t, a) {
              super.authorize(t, (d, f) => {
                if (d) {
                  a(d, f);
                  return;
                }
                let w = f.shared_secret;
                if (!w) {
                  a(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(st.decode)(w), delete f.shared_secret, a(null, f);
              });
            }
            trigger(t, a) {
              throw new P("Client events are not currently supported for encrypted channels");
            }
            handleEvent(t) {
              var a = t.event, d = t.data;
              if (a.indexOf("pusher_internal:") === 0 || a.indexOf("pusher:") === 0) {
                super.handleEvent(t);
                return;
              }
              this.handleEncryptedEvent(a, d);
            }
            handleEncryptedEvent(t, a) {
              if (!this.key) {
                H.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!a.ciphertext || !a.nonce) {
                H.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + a);
                return;
              }
              let d = Object(st.decode)(a.ciphertext);
              if (d.length < this.nacl.secretbox.overheadLength) {
                H.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${d.length}`);
                return;
              }
              let f = Object(st.decode)(a.nonce);
              if (f.length < this.nacl.secretbox.nonceLength) {
                H.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${f.length}`);
                return;
              }
              let w = this.nacl.secretbox.open(d, f, this.key);
              if (w === null) {
                H.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (T, L) => {
                  if (T) {
                    H.error(`Failed to make a request to the authEndpoint: ${L}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (w = this.nacl.secretbox.open(d, f, this.key), w === null) {
                    H.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(t, this.getDataToEmit(w));
                });
                return;
              }
              this.emit(t, this.getDataToEmit(w));
            }
            getDataToEmit(t) {
              let a = Object(Br.decode)(t);
              try {
                return JSON.parse(a);
              } catch {
                return a;
              }
            }
          }
          class Dr extends re {
            constructor(t, a) {
              super(), this.state = "initialized", this.connection = null, this.key = t, this.options = a, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var d = O.getNetwork();
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
            send_event(t, a, d) {
              return this.connection ? this.connection.send_event(t, a, d) : !1;
            }
            disconnect() {
              this.disconnectInternally(), this.updateState("disconnected");
            }
            isUsingTLS() {
              return this.usingTLS;
            }
            startConnecting() {
              var t = (a, d) => {
                a ? this.runner = this.strategy.connect(0, t) : d.action === "error" ? (this.emit("error", {
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
              this.timeline.info({ action: "retry", delay: t }), t > 0 && this.emit("connecting_in", Math.round(t / 1e3)), this.retryTimer = new ee(t || 0, () => {
                this.disconnectInternally(), this.connect();
              });
            }
            clearRetryTimer() {
              this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
            }
            setUnavailableTimer() {
              this.unavailableTimer = new ee(this.options.unavailableTimeout, () => {
                this.updateState("unavailable");
              });
            }
            clearUnavailableTimer() {
              this.unavailableTimer && this.unavailableTimer.ensureAborted();
            }
            sendActivityCheck() {
              this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new ee(this.options.pongTimeout, () => {
                this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
              });
            }
            resetActivityCheck() {
              this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new ee(this.activityTimeout, () => {
                this.sendActivityCheck();
              }));
            }
            stopActivityCheck() {
              this.activityTimer && this.activityTimer.ensureAborted();
            }
            buildConnectionCallbacks(t) {
              return W({}, t, {
                message: (a) => {
                  this.resetActivityCheck(), this.emit("message", a);
                },
                ping: () => {
                  this.send_event("pusher:pong", {});
                },
                activity: () => {
                  this.resetActivityCheck();
                },
                error: (a) => {
                  this.emit("error", a);
                },
                closed: () => {
                  this.abandonConnection(), this.shouldRetry() && this.retryIn(1e3);
                }
              });
            }
            buildHandshakeCallbacks(t) {
              return W({}, t, {
                connected: (a) => {
                  this.activityTimeout = Math.min(this.options.activityTimeout, a.activityTimeout, a.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(a.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
                }
              });
            }
            buildErrorCallbacks() {
              let t = (a) => (d) => {
                d.error && this.emit("error", { type: "WebSocketError", error: d.error }), a(d);
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
              for (var a in this.connectionCallbacks)
                this.connection.bind(a, this.connectionCallbacks[a]);
              this.resetActivityCheck();
            }
            abandonConnection() {
              if (this.connection) {
                this.stopActivityCheck();
                for (var t in this.connectionCallbacks)
                  this.connection.unbind(t, this.connectionCallbacks[t]);
                var a = this.connection;
                return this.connection = null, a;
              }
            }
            updateState(t, a) {
              var d = this.state;
              if (this.state = t, d !== t) {
                var f = t;
                f === "connected" && (f += " with new socket ID " + a.socket_id), H.debug("State changed", d + " -> " + f), this.timeline.info({ state: t, params: a }), this.emit("state_change", { previous: d, current: t }), this.emit(t, a);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class Fr {
            constructor() {
              this.channels = {};
            }
            add(t, a) {
              return this.channels[t] || (this.channels[t] = Ur(t, a)), this.channels[t];
            }
            all() {
              return Qn(this.channels);
            }
            find(t) {
              return this.channels[t];
            }
            remove(t) {
              var a = this.channels[t];
              return delete this.channels[t], a;
            }
            disconnect() {
              ne(this.channels, function(t) {
                t.disconnect();
              });
            }
          }
          function Ur(c, t) {
            if (c.indexOf("private-encrypted-") === 0) {
              if (t.config.nacl)
                return ie.createEncryptedChannel(c, t, t.config.nacl);
              let a = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", d = C.buildLogSuffix("encryptedChannelSupport");
              throw new P(`${a}. ${d}`);
            } else {
              if (c.indexOf("private-") === 0)
                return ie.createPrivateChannel(c, t);
              if (c.indexOf("presence-") === 0)
                return ie.createPresenceChannel(c, t);
              if (c.indexOf("#") === 0)
                throw new v('Cannot create a channel with name "' + c + '".');
              return ie.createChannel(c, t);
            }
          }
          var jr = {
            createChannels() {
              return new Fr();
            },
            createConnectionManager(c, t) {
              return new Dr(c, t);
            },
            createChannel(c, t) {
              return new rt(c, t);
            },
            createPrivateChannel(c, t) {
              return new it(c, t);
            },
            createPresenceChannel(c, t) {
              return new Or(c, t);
            },
            createEncryptedChannel(c, t, a) {
              return new xr(c, t, a);
            },
            createTimelineSender(c, t) {
              return new Pr(c, t);
            },
            createHandshake(c, t) {
              return new Lr(c, t);
            },
            createAssistantToTheTransportManager(c, t, a) {
              return new Rr(c, t, a);
            }
          }, ie = jr;
          class Vt {
            constructor(t) {
              this.options = t || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(t) {
              return ie.createAssistantToTheTransportManager(this, t, {
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
            constructor(t, a) {
              this.strategies = t, this.loop = !!a.loop, this.failFast = !!a.failFast, this.timeout = a.timeout, this.timeoutLimit = a.timeoutLimit;
            }
            isSupported() {
              return Ut(this.strategies, q.method("isSupported"));
            }
            connect(t, a) {
              var d = this.strategies, f = 0, w = this.timeout, T = null, L = (M, x) => {
                x ? a(null, x) : (f = f + 1, this.loop && (f = f % d.length), f < d.length ? (w && (w = w * 2, this.timeoutLimit && (w = Math.min(w, this.timeoutLimit))), T = this.tryStrategy(d[f], t, { timeout: w, failFast: this.failFast }, L)) : a(!0));
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
            tryStrategy(t, a, d, f) {
              var w = null, T = null;
              return d.timeout > 0 && (w = new ee(d.timeout, function() {
                T.abort(), f(!0);
              })), T = t.connect(a, function(L, M) {
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
          class ot {
            constructor(t) {
              this.strategies = t;
            }
            isSupported() {
              return Ut(this.strategies, q.method("isSupported"));
            }
            connect(t, a) {
              return Hr(this.strategies, t, function(d, f) {
                return function(w, T) {
                  if (f[d].error = w, w) {
                    zr(f) && a(!0);
                    return;
                  }
                  _e(f, function(L) {
                    L.forceMinPriority(T.transport.priority);
                  }), a(null, T);
                };
              });
            }
          }
          function Hr(c, t, a) {
            var d = xt(c, function(f, w, T, L) {
              return f.connect(t, a(w, L));
            });
            return {
              abort: function() {
                _e(d, qr);
              },
              forceMinPriority: function(f) {
                _e(d, function(w) {
                  w.forceMinPriority(f);
                });
              }
            };
          }
          function zr(c) {
            return tr(c, function(t) {
              return !!t.error;
            });
          }
          function qr(c) {
            !c.error && !c.aborted && (c.abort(), c.aborted = !0);
          }
          class $r {
            constructor(t, a, d) {
              this.strategy = t, this.transports = a, this.ttl = d.ttl || 1800 * 1e3, this.usingTLS = d.useTLS, this.timeline = d.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.usingTLS, f = Gr(d), w = f && f.cacheSkipCount ? f.cacheSkipCount : 0, T = [this.strategy];
              if (f && f.timestamp + this.ttl >= q.now()) {
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
              var M = q.now(), x = T.pop().connect(t, function D(z, ze) {
                z ? (Wt(d), T.length > 0 ? (M = q.now(), x = T.pop().connect(t, D)) : a(z)) : (Vr(d, ze.transport.name, q.now() - M, w), a(null, ze));
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
          function at(c) {
            return "pusherTransport" + (c ? "TLS" : "NonTLS");
          }
          function Gr(c) {
            var t = O.getLocalStorage();
            if (t)
              try {
                var a = t[at(c)];
                if (a)
                  return JSON.parse(a);
              } catch {
                Wt(c);
              }
            return null;
          }
          function Vr(c, t, a, d) {
            var f = O.getLocalStorage();
            if (f)
              try {
                f[at(c)] = Fe({
                  timestamp: q.now(),
                  transport: t,
                  latency: a,
                  cacheSkipCount: d
                });
              } catch {
              }
          }
          function Wt(c) {
            var t = O.getLocalStorage();
            if (t)
              try {
                delete t[at(c)];
              } catch {
              }
          }
          class je {
            constructor(t, { delay: a }) {
              this.strategy = t, this.options = { delay: a };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.strategy, f, w = new ee(this.options.delay, function() {
                f = d.connect(t, a);
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
          class Ce {
            constructor(t, a, d) {
              this.test = t, this.trueBranch = a, this.falseBranch = d;
            }
            isSupported() {
              var t = this.test() ? this.trueBranch : this.falseBranch;
              return t.isSupported();
            }
            connect(t, a) {
              var d = this.test() ? this.trueBranch : this.falseBranch;
              return d.connect(t, a);
            }
          }
          class Wr {
            constructor(t) {
              this.strategy = t;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.strategy.connect(t, function(f, w) {
                w && d.abort(), a(f, w);
              });
              return d;
            }
          }
          function Se(c) {
            return function() {
              return c.isSupported();
            };
          }
          var Kr = function(c, t, a) {
            var d = {};
            function f(sn, Ki, Ji, Xi, Yi) {
              var on = a(c, sn, Ki, Ji, Xi, Yi);
              return d[sn] = on, on;
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
            }, x = new Vt({
              minPingDelay: 1e4,
              maxPingDelay: c.activityTimeout
            }), D = new Vt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: c.activityTimeout
            }), z = f("ws", "ws", 3, w, x), ze = f("wss", "ws", 3, T, x), qi = f("sockjs", "sockjs", 1, L), Qt = f("xhr_streaming", "xhr_streaming", 1, L, D), $i = f("xdr_streaming", "xdr_streaming", 1, L, D), Zt = f("xhr_polling", "xhr_polling", 1, L), Gi = f("xdr_polling", "xdr_polling", 1, L), en = new ce([z], M), Vi = new ce([ze], M), Wi = new ce([qi], M), tn = new ce([
              new Ce(Se(Qt), Qt, $i)
            ], M), nn = new ce([
              new Ce(Se(Zt), Zt, Gi)
            ], M), rn = new ce([
              new Ce(Se(tn), new ot([
                tn,
                new je(nn, { delay: 4e3 })
              ]), nn)
            ], M), ht = new Ce(Se(rn), rn, Wi), dt;
            return t.useTLS ? dt = new ot([
              en,
              new je(ht, { delay: 2e3 })
            ]) : dt = new ot([
              en,
              new je(Vi, { delay: 2e3 }),
              new je(ht, { delay: 5e3 })
            ]), new $r(new Wr(new Ce(Se(z), dt, ht)), d, {
              ttl: 18e5,
              timeline: t.timeline,
              useTLS: t.useTLS
            });
          }, Jr = Kr, Xr = function() {
            var c = this;
            c.timeline.info(c.buildTimelineMessage({
              transport: c.name + (c.options.useTLS ? "s" : "")
            })), c.hooks.isInitialized() ? c.changeState("initialized") : c.hooks.file ? (c.changeState("initializing"), m.load(c.hooks.file, { useTLS: c.options.useTLS }, function(t, a) {
              c.hooks.isInitialized() ? (c.changeState("initialized"), a(!0)) : (t && c.onError(t), c.onClose(), a(!1));
            })) : c.onClose();
          }, Yr = {
            getRequest: function(c) {
              var t = new window.XDomainRequest();
              return t.ontimeout = function() {
                c.emit("error", new S()), c.close();
              }, t.onerror = function(a) {
                c.emit("error", a), c.close();
              }, t.onprogress = function() {
                t.responseText && t.responseText.length > 0 && c.onChunk(200, t.responseText);
              }, t.onload = function() {
                t.responseText && t.responseText.length > 0 && c.onChunk(200, t.responseText), c.emit("finished", 200), c.close();
              }, t;
            },
            abortRequest: function(c) {
              c.ontimeout = c.onerror = c.onprogress = c.onload = null, c.abort();
            }
          }, Qr = Yr;
          const Zr = 256 * 1024;
          class ei extends re {
            constructor(t, a, d) {
              super(), this.hooks = t, this.method = a, this.url = d;
            }
            start(t) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, O.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(t);
            }
            close() {
              this.unloader && (O.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
            }
            onChunk(t, a) {
              for (; ; ) {
                var d = this.advanceBuffer(a);
                if (d)
                  this.emit("chunk", { status: t, data: d });
                else
                  break;
              }
              this.isBufferTooLong(a) && this.emit("buffer_too_long");
            }
            advanceBuffer(t) {
              var a = t.slice(this.position), d = a.indexOf(`
`);
              return d !== -1 ? (this.position += d + 1, a.slice(0, d)) : null;
            }
            isBufferTooLong(t) {
              return this.position === t.length && t.length > Zr;
            }
          }
          var ct;
          (function(c) {
            c[c.CONNECTING = 0] = "CONNECTING", c[c.OPEN = 1] = "OPEN", c[c.CLOSED = 3] = "CLOSED";
          })(ct || (ct = {}));
          var le = ct, ti = 1;
          class ni {
            constructor(t, a) {
              this.hooks = t, this.session = Jt(1e3) + "/" + oi(8), this.location = ri(a), this.readyState = le.CONNECTING, this.openStream();
            }
            send(t) {
              return this.sendRaw(JSON.stringify([t]));
            }
            ping() {
              this.hooks.sendHeartbeat(this);
            }
            close(t, a) {
              this.onClose(t, a, !0);
            }
            sendRaw(t) {
              if (this.readyState === le.OPEN)
                try {
                  return O.createSocketRequest("POST", Kt(ii(this.location, this.session))).start(t), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(t, a, d) {
              this.closeStream(), this.readyState = le.CLOSED, this.onclose && this.onclose({
                code: t,
                reason: a,
                wasClean: d
              });
            }
            onChunk(t) {
              if (t.status === 200) {
                this.readyState === le.OPEN && this.onActivity();
                var a, d = t.data.slice(0, 1);
                switch (d) {
                  case "o":
                    a = JSON.parse(t.data.slice(1) || "{}"), this.onOpen(a);
                    break;
                  case "a":
                    a = JSON.parse(t.data.slice(1) || "[]");
                    for (var f = 0; f < a.length; f++)
                      this.onEvent(a[f]);
                    break;
                  case "m":
                    a = JSON.parse(t.data.slice(1) || "null"), this.onEvent(a);
                    break;
                  case "h":
                    this.hooks.onHeartbeat(this);
                    break;
                  case "c":
                    a = JSON.parse(t.data.slice(1) || "[]"), this.onClose(a[0], a[1], !0);
                    break;
                }
              }
            }
            onOpen(t) {
              this.readyState === le.CONNECTING ? (t && t.hostname && (this.location.base = si(this.location.base, t.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
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
              this.stream = O.createSocketRequest("POST", Kt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (t) => {
                this.onChunk(t);
              }), this.stream.bind("finished", (t) => {
                this.hooks.onFinished(this, t);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (t) {
                q.defer(() => {
                  this.onError(t), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function ri(c) {
            var t = /([^\?]*)\/*(\??.*)/.exec(c);
            return {
              base: t[1],
              queryString: t[2]
            };
          }
          function ii(c, t) {
            return c.base + "/" + t + "/xhr_send";
          }
          function Kt(c) {
            var t = c.indexOf("?") === -1 ? "?" : "&";
            return c + t + "t=" + +/* @__PURE__ */ new Date() + "&n=" + ti++;
          }
          function si(c, t) {
            var a = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(c);
            return a[1] + t + a[3];
          }
          function Jt(c) {
            return O.randomInt(c);
          }
          function oi(c) {
            for (var t = [], a = 0; a < c; a++)
              t.push(Jt(32).toString(32));
            return t.join("");
          }
          var ai = ni, ci = {
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
          }, li = ci, hi = {
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
          }, di = hi, fi = {
            getRequest: function(c) {
              var t = O.getXHRAPI(), a = new t();
              return a.onreadystatechange = a.onprogress = function() {
                switch (a.readyState) {
                  case 3:
                    a.responseText && a.responseText.length > 0 && c.onChunk(a.status, a.responseText);
                    break;
                  case 4:
                    a.responseText && a.responseText.length > 0 && c.onChunk(a.status, a.responseText), c.emit("finished", a.status), c.close();
                    break;
                }
              }, a;
            },
            abortRequest: function(c) {
              c.onreadystatechange = null, c.abort();
            }
          }, pi = fi, gi = {
            createStreamingSocket(c) {
              return this.createSocket(li, c);
            },
            createPollingSocket(c) {
              return this.createSocket(di, c);
            },
            createSocket(c, t) {
              return new ai(c, t);
            },
            createXHR(c, t) {
              return this.createRequest(pi, c, t);
            },
            createRequest(c, t, a) {
              return new ei(c, t, a);
            }
          }, Xt = gi;
          Xt.createXDR = function(c, t) {
            return this.createRequest(Qr, c, t);
          };
          var mi = Xt, yi = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: g,
            getDefaultStrategy: Jr,
            Transports: Tr,
            transportConnectionInitializer: Xr,
            HTTPFactory: mi,
            TimelineTransport: dr,
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
              return { ajax: j, jsonp: ar };
            },
            onDocumentBody(c) {
              document.body ? c() : setTimeout(() => {
                this.onDocumentBody(c);
              }, 0);
            },
            createJSONPRequest(c, t) {
              return new lr(c, t);
            },
            createScriptRequest(c) {
              return new cr(c);
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
              return Ir;
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
              var t = c ? "https:" : "http:", a = this.getProtocol();
              return !!window.XDomainRequest && a === t;
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
          }, O = yi, lt;
          (function(c) {
            c[c.ERROR = 3] = "ERROR", c[c.INFO = 6] = "INFO", c[c.DEBUG = 7] = "DEBUG";
          })(lt || (lt = {}));
          var He = lt;
          class bi {
            constructor(t, a, d) {
              this.key = t, this.session = a, this.events = [], this.options = d || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(t, a) {
              t <= this.options.level && (this.events.push(W({}, a, { timestamp: q.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(t) {
              this.log(He.ERROR, t);
            }
            info(t) {
              this.log(He.INFO, t);
            }
            debug(t) {
              this.log(He.DEBUG, t);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(t, a) {
              var d = W({
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
                f || this.sent++, a && a(f, w);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class vi {
            constructor(t, a, d, f) {
              this.name = t, this.priority = a, this.transport = d, this.options = f || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(t, a) {
              if (this.isSupported()) {
                if (this.priority < t)
                  return Yt(new I(), a);
              } else return Yt(new N(), a);
              var d = !1, f = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), w = null, T = function() {
                f.unbind("initialized", T), f.connect();
              }, L = function() {
                w = ie.createHandshake(f, function(z) {
                  d = !0, D(), a(null, z);
                });
              }, M = function(z) {
                D(), a(z);
              }, x = function() {
                D();
                var z;
                z = Fe(f), a(new R(z));
              }, D = function() {
                f.unbind("initialized", T), f.unbind("open", L), f.unbind("error", M), f.unbind("closed", x);
              };
              return f.bind("initialized", T), f.bind("open", L), f.bind("error", M), f.bind("closed", x), f.initialize(), {
                abort: () => {
                  d || (D(), w ? w.close() : f.close());
                },
                forceMinPriority: (z) => {
                  d || this.priority < z && (w ? w.close() : f.close());
                }
              };
            }
          }
          function Yt(c, t) {
            return q.defer(function() {
              t(c);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: wi } = O;
          var ki = function(c, t, a, d, f, w) {
            var T = wi[a];
            if (!T)
              throw new E(a);
            var L = (!c.enabledTransports || Ot(c.enabledTransports, t) !== -1) && (!c.disabledTransports || Ot(c.disabledTransports, t) === -1), M;
            return L ? (f = Object.assign({ ignoreNullOrigin: c.ignoreNullOrigin }, f), M = new vi(t, d, w ? w.getAssistant(T) : T, f)) : M = _i, M;
          }, _i = {
            isSupported: function() {
              return !1;
            },
            connect: function(c, t) {
              var a = q.defer(function() {
                t(new N());
              });
              return {
                abort: function() {
                  a.ensureAborted();
                },
                forceMinPriority: function() {
                }
              };
            }
          };
          function Ci(c) {
            if (c == null)
              throw "You must pass an options object";
            if (c.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in c && H.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const Si = (c, t) => {
            var a = "socket_id=" + encodeURIComponent(c.socketId);
            for (var d in t.params)
              a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let f = t.paramsProvider();
              for (var d in f)
                a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(f[d]);
            }
            return a;
          };
          var Ti = (c) => {
            if (typeof O.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, a) => {
              const d = Si(t, c);
              O.getAuthorizers()[c.transport](O, d, c, _.UserAuthentication, a);
            };
          };
          const Ai = (c, t) => {
            var a = "socket_id=" + encodeURIComponent(c.socketId);
            a += "&channel_name=" + encodeURIComponent(c.channelName);
            for (var d in t.params)
              a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let f = t.paramsProvider();
              for (var d in f)
                a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(f[d]);
            }
            return a;
          };
          var Ii = (c) => {
            if (typeof O.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, a) => {
              const d = Ai(t, c);
              O.getAuthorizers()[c.transport](O, d, c, _.ChannelAuthorization, a);
            };
          };
          const Ri = (c, t, a) => {
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
              a(T, d).authorize(f.socketId, w);
            };
          };
          function Ei(c, t) {
            let a = {
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
              enableStats: Oi(c),
              httpHost: Li(c),
              useTLS: Ni(c),
              wsHost: Pi(c),
              userAuthenticator: Bi(c),
              channelAuthorizer: Di(c, t)
            };
            return "disabledTransports" in c && (a.disabledTransports = c.disabledTransports), "enabledTransports" in c && (a.enabledTransports = c.enabledTransports), "ignoreNullOrigin" in c && (a.ignoreNullOrigin = c.ignoreNullOrigin), "timelineParams" in c && (a.timelineParams = c.timelineParams), "nacl" in c && (a.nacl = c.nacl), a;
          }
          function Li(c) {
            return c.httpHost ? c.httpHost : c.cluster ? `sockjs-${c.cluster}.pusher.com` : u.httpHost;
          }
          function Pi(c) {
            return c.wsHost ? c.wsHost : Mi(c.cluster);
          }
          function Mi(c) {
            return `ws-${c}.pusher.com`;
          }
          function Ni(c) {
            return O.getProtocol() === "https:" ? !0 : c.forceTLS !== !1;
          }
          function Oi(c) {
            return "enableStats" in c ? c.enableStats : "disableStats" in c ? !c.disableStats : !1;
          }
          function Bi(c) {
            const t = Object.assign(Object.assign({}, u.userAuthentication), c.userAuthentication);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : Ti(t);
          }
          function xi(c, t) {
            let a;
            return "channelAuthorization" in c ? a = Object.assign(Object.assign({}, u.channelAuthorization), c.channelAuthorization) : (a = {
              transport: c.authTransport || u.authTransport,
              endpoint: c.authEndpoint || u.authEndpoint
            }, "auth" in c && ("params" in c.auth && (a.params = c.auth.params), "headers" in c.auth && (a.headers = c.auth.headers)), "authorizer" in c && (a.customHandler = Ri(t, a, c.authorizer))), a;
          }
          function Di(c, t) {
            const a = xi(c, t);
            return "customHandler" in a && a.customHandler != null ? a.customHandler : Ii(a);
          }
          class Fi extends re {
            constructor(t) {
              super(function(a, d) {
                H.debug(`No callbacks on watchlist events for ${a}`);
              }), this.pusher = t, this.bindWatchlistInternalEvent();
            }
            handleEvent(t) {
              t.data.events.forEach((a) => {
                this.emit(a.name, a);
              });
            }
            bindWatchlistInternalEvent() {
              this.pusher.connection.bind("message", (t) => {
                var a = t.event;
                a === "pusher_internal:watchlist_events" && this.handleEvent(t);
              });
            }
          }
          function Ui() {
            let c, t;
            return { promise: new Promise((d, f) => {
              c = d, t = f;
            }), resolve: c, reject: t };
          }
          var ji = Ui;
          class Hi extends re {
            constructor(t) {
              super(function(a, d) {
                H.debug("No callbacks on user for " + a);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (a, d) => {
                if (a) {
                  H.warn(`Error during signin: ${a}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: d.auth,
                  user_data: d.user_data
                });
              }, this.pusher = t, this.pusher.connection.bind("state_change", ({ previous: a, current: d }) => {
                a !== "connected" && d === "connected" && this._signin(), a === "connected" && d !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new Fi(t), this.pusher.connection.bind("message", (a) => {
                var d = a.event;
                d === "pusher:signin_success" && this._onSigninSuccess(a.data), this.serverToUserChannel && this.serverToUserChannel.name === a.channel && this.serverToUserChannel.handleEvent(a);
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
                H.error(`Failed parsing user data after signin: ${t.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                H.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const t = (a) => {
                a.subscriptionPending && a.subscriptionCancelled ? a.reinstateSubscription() : !a.subscriptionPending && this.pusher.connection.state === "connected" && a.subscribe();
              };
              this.serverToUserChannel = new rt(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((a, d) => {
                a.indexOf("pusher_internal:") === 0 || a.indexOf("pusher:") === 0 || this.emit(a, d);
              }), t(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: t, resolve: a } = ji();
              t.done = !1;
              const d = () => {
                t.done = !0;
              };
              t.then(d).catch(d), this.signinDonePromise = t, this._signinDoneResolve = a;
            }
          }
          class K {
            static ready() {
              K.isReady = !0;
              for (var t = 0, a = K.instances.length; t < a; t++)
                K.instances[t].connect();
            }
            static getClientFeatures() {
              return Bt(Ft({ ws: O.Transports.ws }, function(t) {
                return t.isSupported({});
              }));
            }
            constructor(t, a) {
              zi(t), Ci(a), this.key = t, this.config = Ei(a, this), this.channels = ie.createChannels(), this.global_emitter = new re(), this.sessionID = O.randomInt(1e9), this.timeline = new bi(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: K.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: He.INFO,
                version: u.VERSION
              }), this.config.enableStats && (this.timelineSender = ie.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + O.TimelineTransport.name
              }));
              var d = (f) => O.getDefaultStrategy(this.config, f, ki);
              this.connection = ie.createConnectionManager(this.key, {
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
                H.warn(f);
              }), K.instances.push(this), this.timeline.info({ instances: K.instances.length }), this.user = new Hi(this), K.isReady && this.connect();
            }
            channel(t) {
              return this.channels.find(t);
            }
            allChannels() {
              return this.channels.all();
            }
            connect() {
              if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                var t = this.connection.isUsingTLS(), a = this.timelineSender;
                this.timelineSenderTimer = new de(6e4, function() {
                  a.send(t);
                });
              }
            }
            disconnect() {
              this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
            }
            bind(t, a, d) {
              return this.global_emitter.bind(t, a, d), this;
            }
            unbind(t, a, d) {
              return this.global_emitter.unbind(t, a, d), this;
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
              var a = this.channels.add(t, this);
              return a.subscriptionPending && a.subscriptionCancelled ? a.reinstateSubscription() : !a.subscriptionPending && this.connection.state === "connected" && a.subscribe(), a;
            }
            unsubscribe(t) {
              var a = this.channels.find(t);
              a && a.subscriptionPending ? a.cancelSubscription() : (a = this.channels.remove(t), a && a.subscribed && a.unsubscribe());
            }
            send_event(t, a, d) {
              return this.connection.send_event(t, a, d);
            }
            shouldUseTLS() {
              return this.config.useTLS;
            }
            signin() {
              this.user.signin();
            }
          }
          K.instances = [], K.isReady = !1, K.logToConsole = !1, K.Runtime = O, K.ScriptReceivers = O.ScriptReceivers, K.DependenciesReceivers = O.DependenciesReceivers, K.auth_callbacks = O.auth_callbacks;
          var ut = i.default = K;
          function zi(c) {
            if (c == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          O.setup(K);
        }
        /******/
      ])
    );
  });
})(yn);
var ts = yn.exports;
const ns = /* @__PURE__ */ es(ts), A = "cpr-agent", bn = "itdsiqtx8cpskowawl1p", ge = "https://agent.surrealdisco.co.uk";
function vn() {
  var e;
  return (((e = game == null ? void 0 : game.settings) == null ? void 0 : e.get(A, "apiUrl")) || ge).trim().replace(/\/$/, "") || ge;
}
function rs() {
  try {
    return new URL(vn()).origin;
  } catch {
    return new URL(ge).origin;
  }
}
const Te = {
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
}, is = [6, 12, 25, 50, 100, 200, 400, 800], an = {
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
function wn(o) {
  var e, r;
  return an[(e = o == null ? void 0 : o.system) == null ? void 0 : e.weaponType] || an[(r = o == null ? void 0 : o.system) == null ? void 0 : r.variety] || "Pistol";
}
function kn(o, e) {
  const r = is.findIndex((n) => e <= n);
  let i = r !== -1 ? Te[o][r] : 99;
  return Array.isArray(Te[o]) && typeof Te[o][0] == "string" && (i = Te[o][Math.min(r !== -1 ? r : 0, Te[o].length - 1)]), i;
}
function ss(o) {
  const e = String(o).split(" ").join(""), r = (i) => i.charAt(0).toLowerCase() + i.slice(1);
  return r(o === "Conceal/Reveal Object" || o === "Paint/Draw/Sculpt" || o === "Resist Torture/Drugs" ? e.split("/").join("Or") : o === "Language (Streetslang)" ? e.split("(").join("").split(")").join("") : e.split("/").join("And").split("&").join("And"));
}
function os(o, e) {
  var i, n;
  const r = ["allActions", "allActionsSpeech", "allActionsHands"];
  if (!e) return r;
  if (r.push("universalAttack"), o && o !== "None") {
    const s = ss(o);
    r.push(s, `${s}Hearing`, `${s}Sight`);
  }
  return ((i = e.system) == null ? void 0 : i.isRanged) === !0 && r.push("ranged", "singleShot"), ((n = e.system) == null ? void 0 : n.isRanged) === !1 && r.push("melee"), r;
}
const cn = {
  allActions: "All actions",
  allActionsHands: "Hand actions",
  allActionsSpeech: "Speech actions",
  universalAttack: "Attacks",
  ranged: "Ranged attacks",
  melee: "Melee attacks",
  singleShot: "Single shot",
  perceptionSight: "Perception (sight)",
  perceptionHearing: "Perception (hearing)"
};
function as(o) {
  const e = String(o).match(/^system\.stats\.(\w+)\.value$/);
  if (e) return e[1].toUpperCase();
  const r = String(o).replace(/^bonuses\./, "");
  if (cn[r]) return cn[r];
  const i = r.replace(/([A-Z])/g, " $1").toLowerCase().trim();
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function Ae(o) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ae(o);
}
function G(o, e) {
  if (!(o instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function cs(o, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i);
  }
}
function V(o, e, r) {
  return e && cs(o.prototype, e), Object.defineProperty(o, "prototype", {
    writable: !1
  }), o;
}
function Re() {
  return Re = Object.assign || function(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i]);
    }
    return o;
  }, Re.apply(this, arguments);
}
function Y(o, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  o.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: o,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(o, "prototype", {
    writable: !1
  }), e && vt(o, e);
}
function Ge(o) {
  return Ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ge(o);
}
function vt(o, e) {
  return vt = Object.setPrototypeOf || function(i, n) {
    return i.__proto__ = n, i;
  }, vt(o, e);
}
function ls() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function us(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function hs(o, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return us(o);
}
function Q(o) {
  var e = ls();
  return function() {
    var i = Ge(o), n;
    if (e) {
      var s = Ge(this).constructor;
      n = Reflect.construct(i, arguments, s);
    } else
      n = i.apply(this, arguments);
    return hs(this, n);
  };
}
var At = /* @__PURE__ */ function() {
  function o() {
    G(this, o);
  }
  return V(o, [{
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
  }]), o;
}(), _n = /* @__PURE__ */ function() {
  function o(e) {
    G(this, o), this.namespace = e;
  }
  return V(o, [{
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
  }]), o;
}();
function ds(o) {
  try {
    new o();
  } catch (e) {
    if (e.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var It = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r(i, n, s) {
    var l;
    return G(this, r), l = e.call(this), l.name = n, l.pusher = i, l.options = s, l.eventFormatter = new _n(l.options.namespace), l.subscribe(), l;
  }
  return V(r, [{
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
}(At), Cn = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(It), fs = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(It), ps = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Cn), Sn = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r(i, n, s) {
    var l;
    return G(this, r), l = e.call(this), l.events = {}, l.listeners = {}, l.name = n, l.socket = i, l.options = s, l.eventFormatter = new _n(l.options.namespace), l.subscribe(), l;
  }
  return V(r, [{
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
}(At), Tn = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Sn), gs = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Tn), Ve = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(At), An = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Ve), ms = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Ve), ys = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(An), Rt = /* @__PURE__ */ function() {
  function o(e) {
    G(this, o), this._defaultOptions = {
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
  return V(o, [{
    key: "setOptions",
    value: function(r) {
      this.options = Re(this._defaultOptions, r);
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
  }]), o;
}(), ln = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    var i;
    return G(this, r), i = e.apply(this, arguments), i.channels = {}, i;
  }
  return V(r, [{
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
      return this.channels[n] || (this.channels[n] = new It(this.pusher, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new Cn(this.pusher, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return this.channels["private-encrypted-" + n] || (this.channels["private-encrypted-" + n] = new fs(this.pusher, "private-encrypted-" + n, this.options)), this.channels["private-encrypted-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new ps(this.pusher, "presence-" + n, this.options)), this.channels["presence-" + n];
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
}(Rt), un = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    var i;
    return G(this, r), i = e.apply(this, arguments), i.channels = {}, i;
  }
  return V(r, [{
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
      return this.channels[n] || (this.channels[n] = new Sn(this.socket, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new Tn(this.socket, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new gs(this.socket, "presence-" + n, this.options)), this.channels["presence-" + n];
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
}(Rt), bs = /* @__PURE__ */ function(o) {
  Y(r, o);
  var e = Q(r);
  function r() {
    var i;
    return G(this, r), i = e.apply(this, arguments), i.channels = {}, i;
  }
  return V(r, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(n, s, l) {
      return new Ve();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return new Ve();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return new An();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return new ms();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return new ys();
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
}(Rt), vs = /* @__PURE__ */ function() {
  function o(e) {
    G(this, o), this.options = e, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return V(o, [{
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
        this.connector = new ln(Re(Re({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new ln(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new un(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new bs(this.options);
      else if (typeof this.options.broadcaster == "function" && ds(this.options.broadcaster))
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
      if (this.connector instanceof un)
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
  }]), o;
}();
function ws(o, e = 6) {
  return !o || o.length <= e * 2 + 3 ? o : `${o.substring(0, e)}...${o.substring(o.length - e)}`;
}
function wt(o, e, r = {}) {
  for (let i in o) {
    const n = o[i];
    n !== null && typeof n == "object" && !Array.isArray(n) && !(n instanceof foundry.utils.Color) ? wt(n, `${e}${i}.`, r) : r[`${e}${i}`] = n;
  }
  return r;
}
function ks(o, e) {
  if (o === "wss") return !0;
  if (o === "ws") return !1;
  try {
    return new URL(e).protocol === "https:";
  } catch {
    return !0;
  }
}
async function _s(o, e, r, i = null) {
  return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${e}`, "color: #00ffff; font-weight: bold;"), await o._beginRollCapture(i), new Promise(async (n, s) => {
    let l = !1;
    const h = renderTemplate, u = function(p, g) {
      return p && typeof p == "string" && p.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${p}`, "color: #00ff00;", g), l = !0, renderTemplate = h, n({
        success: !0,
        total: g.resultTotal,
        isCriticalSuccess: g.wasCritSuccess ? g.wasCritSuccess() : g.isCriticalSuccess || !1,
        isCriticalFailure: g.wasCritFail ? g.wasCritFail() : g.isCriticalFailure || !1,
        label: g.rollTitle,
        rollMode: o._captureRollMode || game.settings.get("core", "rollMode"),
        rawRoll: g
      })), h.apply(this, arguments);
    };
    renderTemplate = u, setTimeout(async () => {
      l || (renderTemplate = h, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), o._endRollCapture(), n({ success: !1, error: "Timed out waiting for render" }));
    }, 5e3);
    try {
      await r();
    } catch {
      renderTemplate = h, o._endRollCapture(), n({ success: !1, error: "Trigger failed" });
    }
  });
}
var Le = {}, Cs = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, In = {}, Z = {};
let Et;
const Ss = [
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
Z.getSymbolSize = function(e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
Z.getSymbolTotalCodewords = function(e) {
  return Ss[e];
};
Z.getBCHDigit = function(o) {
  let e = 0;
  for (; o !== 0; )
    e++, o >>>= 1;
  return e;
};
Z.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Et = e;
};
Z.isKanjiModeEnabled = function() {
  return typeof Et < "u";
};
Z.toSJIS = function(e) {
  return Et(e);
};
var Xe = {};
(function(o) {
  o.L = { bit: 1 }, o.M = { bit: 0 }, o.Q = { bit: 3 }, o.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return o.L;
      case "m":
      case "medium":
        return o.M;
      case "q":
      case "quartile":
        return o.Q;
      case "h":
      case "high":
        return o.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  o.isValid = function(i) {
    return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
  }, o.from = function(i, n) {
    if (o.isValid(i))
      return i;
    try {
      return e(i);
    } catch {
      return n;
    }
  };
})(Xe);
function Rn() {
  this.buffer = [], this.length = 0;
}
Rn.prototype = {
  get: function(o) {
    const e = Math.floor(o / 8);
    return (this.buffer[e] >>> 7 - o % 8 & 1) === 1;
  },
  put: function(o, e) {
    for (let r = 0; r < e; r++)
      this.putBit((o >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(o) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), o && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var Ts = Rn;
function Pe(o) {
  if (!o || o < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = o, this.data = new Uint8Array(o * o), this.reservedBit = new Uint8Array(o * o);
}
Pe.prototype.set = function(o, e, r, i) {
  const n = o * this.size + e;
  this.data[n] = r, i && (this.reservedBit[n] = !0);
};
Pe.prototype.get = function(o, e) {
  return this.data[o * this.size + e];
};
Pe.prototype.xor = function(o, e, r) {
  this.data[o * this.size + e] ^= r;
};
Pe.prototype.isReserved = function(o, e) {
  return this.reservedBit[o * this.size + e];
};
var As = Pe, En = {};
(function(o) {
  const e = Z.getSymbolSize;
  o.getRowColCoords = function(i) {
    if (i === 1) return [];
    const n = Math.floor(i / 7) + 2, s = e(i), l = s === 145 ? 26 : Math.ceil((s - 13) / (2 * n - 2)) * 2, h = [s - 7];
    for (let u = 1; u < n - 1; u++)
      h[u] = h[u - 1] - l;
    return h.push(6), h.reverse();
  }, o.getPositions = function(i) {
    const n = [], s = o.getRowColCoords(i), l = s.length;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        h === 0 && u === 0 || // top-left
        h === 0 && u === l - 1 || // bottom-left
        h === l - 1 && u === 0 || n.push([s[h], s[u]]);
    return n;
  };
})(En);
var Ln = {};
const Is = Z.getSymbolSize, hn = 7;
Ln.getPositions = function(e) {
  const r = Is(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [r - hn, 0],
    // bottom-left
    [0, r - hn]
  ];
};
var Pn = {};
(function(o) {
  o.Patterns = {
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
  o.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, o.from = function(n) {
    return o.isValid(n) ? parseInt(n, 10) : void 0;
  }, o.getPenaltyN1 = function(n) {
    const s = n.size;
    let l = 0, h = 0, u = 0, p = null, g = null;
    for (let m = 0; m < s; m++) {
      h = u = 0, p = g = null;
      for (let y = 0; y < s; y++) {
        let b = n.get(m, y);
        b === p ? h++ : (h >= 5 && (l += e.N1 + (h - 5)), p = b, h = 1), b = n.get(y, m), b === g ? u++ : (u >= 5 && (l += e.N1 + (u - 5)), g = b, u = 1);
      }
      h >= 5 && (l += e.N1 + (h - 5)), u >= 5 && (l += e.N1 + (u - 5));
    }
    return l;
  }, o.getPenaltyN2 = function(n) {
    const s = n.size;
    let l = 0;
    for (let h = 0; h < s - 1; h++)
      for (let u = 0; u < s - 1; u++) {
        const p = n.get(h, u) + n.get(h, u + 1) + n.get(h + 1, u) + n.get(h + 1, u + 1);
        (p === 4 || p === 0) && l++;
      }
    return l * e.N2;
  }, o.getPenaltyN3 = function(n) {
    const s = n.size;
    let l = 0, h = 0, u = 0;
    for (let p = 0; p < s; p++) {
      h = u = 0;
      for (let g = 0; g < s; g++)
        h = h << 1 & 2047 | n.get(p, g), g >= 10 && (h === 1488 || h === 93) && l++, u = u << 1 & 2047 | n.get(g, p), g >= 10 && (u === 1488 || u === 93) && l++;
    }
    return l * e.N3;
  }, o.getPenaltyN4 = function(n) {
    let s = 0;
    const l = n.data.length;
    for (let u = 0; u < l; u++) s += n.data[u];
    return Math.abs(Math.ceil(s * 100 / l / 5) - 10) * e.N4;
  };
  function r(i, n, s) {
    switch (i) {
      case o.Patterns.PATTERN000:
        return (n + s) % 2 === 0;
      case o.Patterns.PATTERN001:
        return n % 2 === 0;
      case o.Patterns.PATTERN010:
        return s % 3 === 0;
      case o.Patterns.PATTERN011:
        return (n + s) % 3 === 0;
      case o.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(s / 3)) % 2 === 0;
      case o.Patterns.PATTERN101:
        return n * s % 2 + n * s % 3 === 0;
      case o.Patterns.PATTERN110:
        return (n * s % 2 + n * s % 3) % 2 === 0;
      case o.Patterns.PATTERN111:
        return (n * s % 3 + (n + s) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + i);
    }
  }
  o.applyMask = function(n, s) {
    const l = s.size;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        s.isReserved(u, h) || s.xor(u, h, r(n, u, h));
  }, o.getBestMask = function(n, s) {
    const l = Object.keys(o.Patterns).length;
    let h = 0, u = 1 / 0;
    for (let p = 0; p < l; p++) {
      s(p), o.applyMask(p, n);
      const g = o.getPenaltyN1(n) + o.getPenaltyN2(n) + o.getPenaltyN3(n) + o.getPenaltyN4(n);
      o.applyMask(p, n), g < u && (u = g, h = p);
    }
    return h;
  };
})(Pn);
var Ye = {};
const se = Xe, qe = [
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
], $e = [
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
Ye.getBlocksCount = function(e, r) {
  switch (r) {
    case se.L:
      return qe[(e - 1) * 4 + 0];
    case se.M:
      return qe[(e - 1) * 4 + 1];
    case se.Q:
      return qe[(e - 1) * 4 + 2];
    case se.H:
      return qe[(e - 1) * 4 + 3];
    default:
      return;
  }
};
Ye.getTotalCodewordsCount = function(e, r) {
  switch (r) {
    case se.L:
      return $e[(e - 1) * 4 + 0];
    case se.M:
      return $e[(e - 1) * 4 + 1];
    case se.Q:
      return $e[(e - 1) * 4 + 2];
    case se.H:
      return $e[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var Mn = {}, Qe = {};
const Ie = new Uint8Array(512), We = new Uint8Array(256);
(function() {
  let e = 1;
  for (let r = 0; r < 255; r++)
    Ie[r] = e, We[e] = r, e <<= 1, e & 256 && (e ^= 285);
  for (let r = 255; r < 512; r++)
    Ie[r] = Ie[r - 255];
})();
Qe.log = function(e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return We[e];
};
Qe.exp = function(e) {
  return Ie[e];
};
Qe.mul = function(e, r) {
  return e === 0 || r === 0 ? 0 : Ie[We[e] + We[r]];
};
(function(o) {
  const e = Qe;
  o.mul = function(i, n) {
    const s = new Uint8Array(i.length + n.length - 1);
    for (let l = 0; l < i.length; l++)
      for (let h = 0; h < n.length; h++)
        s[l + h] ^= e.mul(i[l], n[h]);
    return s;
  }, o.mod = function(i, n) {
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
  }, o.generateECPolynomial = function(i) {
    let n = new Uint8Array([1]);
    for (let s = 0; s < i; s++)
      n = o.mul(n, new Uint8Array([1, e.exp(s)]));
    return n;
  };
})(Mn);
const Nn = Mn;
function Lt(o) {
  this.genPoly = void 0, this.degree = o, this.degree && this.initialize(this.degree);
}
Lt.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Nn.generateECPolynomial(this.degree);
};
Lt.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(e.length + this.degree);
  r.set(e);
  const i = Nn.mod(r, this.genPoly), n = this.degree - i.length;
  if (n > 0) {
    const s = new Uint8Array(this.degree);
    return s.set(i, n), s;
  }
  return i;
};
var Rs = Lt, On = {}, oe = {}, Pt = {};
Pt.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var te = {};
const Bn = "[0-9]+", Es = "[A-Z $%*+\\-./:]+";
let Ee = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Ee = Ee.replace(/u/g, "\\u");
const Ls = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ee + `)(?:.|[\r
]))+`;
te.KANJI = new RegExp(Ee, "g");
te.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
te.BYTE = new RegExp(Ls, "g");
te.NUMERIC = new RegExp(Bn, "g");
te.ALPHANUMERIC = new RegExp(Es, "g");
const Ps = new RegExp("^" + Ee + "$"), Ms = new RegExp("^" + Bn + "$"), Ns = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
te.testKanji = function(e) {
  return Ps.test(e);
};
te.testNumeric = function(e) {
  return Ms.test(e);
};
te.testAlphanumeric = function(e) {
  return Ns.test(e);
};
(function(o) {
  const e = Pt, r = te;
  o.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, o.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, o.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, o.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, o.MIXED = {
    bit: -1
  }, o.getCharCountIndicator = function(s, l) {
    if (!s.ccBits) throw new Error("Invalid mode: " + s);
    if (!e.isValid(l))
      throw new Error("Invalid version: " + l);
    return l >= 1 && l < 10 ? s.ccBits[0] : l < 27 ? s.ccBits[1] : s.ccBits[2];
  }, o.getBestModeForData = function(s) {
    return r.testNumeric(s) ? o.NUMERIC : r.testAlphanumeric(s) ? o.ALPHANUMERIC : r.testKanji(s) ? o.KANJI : o.BYTE;
  }, o.toString = function(s) {
    if (s && s.id) return s.id;
    throw new Error("Invalid mode");
  }, o.isValid = function(s) {
    return s && s.bit && s.ccBits;
  };
  function i(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "numeric":
        return o.NUMERIC;
      case "alphanumeric":
        return o.ALPHANUMERIC;
      case "kanji":
        return o.KANJI;
      case "byte":
        return o.BYTE;
      default:
        throw new Error("Unknown mode: " + n);
    }
  }
  o.from = function(s, l) {
    if (o.isValid(s))
      return s;
    try {
      return i(s);
    } catch {
      return l;
    }
  };
})(oe);
(function(o) {
  const e = Z, r = Ye, i = Xe, n = oe, s = Pt, l = 7973, h = e.getBCHDigit(l);
  function u(y, b, C) {
    for (let _ = 1; _ <= 40; _++)
      if (b <= o.getCapacity(_, C, y))
        return _;
  }
  function p(y, b) {
    return n.getCharCountIndicator(y, b) + 4;
  }
  function g(y, b) {
    let C = 0;
    return y.forEach(function(_) {
      const k = p(_.mode, b);
      C += k + _.getBitsLength();
    }), C;
  }
  function m(y, b) {
    for (let C = 1; C <= 40; C++)
      if (g(y, C) <= o.getCapacity(C, b, n.MIXED))
        return C;
  }
  o.from = function(b, C) {
    return s.isValid(b) ? parseInt(b, 10) : C;
  }, o.getCapacity = function(b, C, _) {
    if (!s.isValid(b))
      throw new Error("Invalid QR Code version");
    typeof _ > "u" && (_ = n.BYTE);
    const k = e.getSymbolTotalCodewords(b), v = r.getTotalCodewordsCount(b, C), S = (k - v) * 8;
    if (_ === n.MIXED) return S;
    const I = S - p(_, b);
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
  }, o.getBestVersionForData = function(b, C) {
    let _;
    const k = i.from(C, i.M);
    if (Array.isArray(b)) {
      if (b.length > 1)
        return m(b, k);
      if (b.length === 0)
        return 1;
      _ = b[0];
    } else
      _ = b;
    return u(_.mode, _.getLength(), k);
  }, o.getEncodedBits = function(b) {
    if (!s.isValid(b) || b < 7)
      throw new Error("Invalid QR Code version");
    let C = b << 12;
    for (; e.getBCHDigit(C) - h >= 0; )
      C ^= l << e.getBCHDigit(C) - h;
    return b << 12 | C;
  };
})(On);
var xn = {};
const kt = Z, Dn = 1335, Os = 21522, dn = kt.getBCHDigit(Dn);
xn.getEncodedBits = function(e, r) {
  const i = e.bit << 3 | r;
  let n = i << 10;
  for (; kt.getBCHDigit(n) - dn >= 0; )
    n ^= Dn << kt.getBCHDigit(n) - dn;
  return (i << 10 | n) ^ Os;
};
var Fn = {};
const Bs = oe;
function me(o) {
  this.mode = Bs.NUMERIC, this.data = o.toString();
}
me.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
me.prototype.getLength = function() {
  return this.data.length;
};
me.prototype.getBitsLength = function() {
  return me.getBitsLength(this.data.length);
};
me.prototype.write = function(e) {
  let r, i, n;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    i = this.data.substr(r, 3), n = parseInt(i, 10), e.put(n, 10);
  const s = this.data.length - r;
  s > 0 && (i = this.data.substr(r), n = parseInt(i, 10), e.put(n, s * 3 + 1));
};
var xs = me;
const Ds = oe, pt = [
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
function ye(o) {
  this.mode = Ds.ALPHANUMERIC, this.data = o;
}
ye.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
ye.prototype.getLength = function() {
  return this.data.length;
};
ye.prototype.getBitsLength = function() {
  return ye.getBitsLength(this.data.length);
};
ye.prototype.write = function(e) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let i = pt.indexOf(this.data[r]) * 45;
    i += pt.indexOf(this.data[r + 1]), e.put(i, 11);
  }
  this.data.length % 2 && e.put(pt.indexOf(this.data[r]), 6);
};
var Fs = ye;
const Us = oe;
function be(o) {
  this.mode = Us.BYTE, typeof o == "string" ? this.data = new TextEncoder().encode(o) : this.data = new Uint8Array(o);
}
be.getBitsLength = function(e) {
  return e * 8;
};
be.prototype.getLength = function() {
  return this.data.length;
};
be.prototype.getBitsLength = function() {
  return be.getBitsLength(this.data.length);
};
be.prototype.write = function(o) {
  for (let e = 0, r = this.data.length; e < r; e++)
    o.put(this.data[e], 8);
};
var js = be;
const Hs = oe, zs = Z;
function ve(o) {
  this.mode = Hs.KANJI, this.data = o;
}
ve.getBitsLength = function(e) {
  return e * 13;
};
ve.prototype.getLength = function() {
  return this.data.length;
};
ve.prototype.getBitsLength = function() {
  return ve.getBitsLength(this.data.length);
};
ve.prototype.write = function(o) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let r = zs.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), o.put(r, 13);
  }
};
var qs = ve, Un = { exports: {} };
(function(o) {
  var e = {
    single_source_shortest_paths: function(r, i, n) {
      var s = {}, l = {};
      l[i] = 0;
      var h = e.PriorityQueue.make();
      h.push(i, 0);
      for (var u, p, g, m, y, b, C, _, k; !h.empty(); ) {
        u = h.pop(), p = u.value, m = u.cost, y = r[p] || {};
        for (g in y)
          y.hasOwnProperty(g) && (b = y[g], C = m + b, _ = l[g], k = typeof l[g] > "u", (k || _ > C) && (l[g] = C, h.push(g, C), s[g] = p));
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
  o.exports = e;
})(Un);
var $s = Un.exports;
(function(o) {
  const e = oe, r = xs, i = Fs, n = js, s = qs, l = te, h = Z, u = $s;
  function p(v) {
    return unescape(encodeURIComponent(v)).length;
  }
  function g(v, S, I) {
    const R = [];
    let P;
    for (; (P = v.exec(I)) !== null; )
      R.push({
        data: P[0],
        index: P.index,
        mode: S,
        length: P[0].length
      });
    return R;
  }
  function m(v) {
    const S = g(l.NUMERIC, e.NUMERIC, v), I = g(l.ALPHANUMERIC, e.ALPHANUMERIC, v);
    let R, P;
    return h.isKanjiModeEnabled() ? (R = g(l.BYTE, e.BYTE, v), P = g(l.KANJI, e.KANJI, v)) : (R = g(l.BYTE_KANJI, e.BYTE, v), P = []), S.concat(I, R, P).sort(function(N, B) {
      return N.index - B.index;
    }).map(function(N) {
      return {
        data: N.data,
        mode: N.mode,
        length: N.length
      };
    });
  }
  function y(v, S) {
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
  function b(v) {
    return v.reduce(function(S, I) {
      const R = S.length - 1 >= 0 ? S[S.length - 1] : null;
      return R && R.mode === I.mode ? (S[S.length - 1].data += I.data, S) : (S.push(I), S);
    }, []);
  }
  function C(v) {
    const S = [];
    for (let I = 0; I < v.length; I++) {
      const R = v[I];
      switch (R.mode) {
        case e.NUMERIC:
          S.push([
            R,
            { data: R.data, mode: e.ALPHANUMERIC, length: R.length },
            { data: R.data, mode: e.BYTE, length: R.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          S.push([
            R,
            { data: R.data, mode: e.BYTE, length: R.length }
          ]);
          break;
        case e.KANJI:
          S.push([
            R,
            { data: R.data, mode: e.BYTE, length: p(R.data) }
          ]);
          break;
        case e.BYTE:
          S.push([
            { data: R.data, mode: e.BYTE, length: p(R.data) }
          ]);
      }
    }
    return S;
  }
  function _(v, S) {
    const I = {}, R = { start: {} };
    let P = ["start"];
    for (let E = 0; E < v.length; E++) {
      const N = v[E], B = [];
      for (let F = 0; F < N.length; F++) {
        const j = N[F], J = "" + E + F;
        B.push(J), I[J] = { node: j, lastCount: 0 }, R[J] = {};
        for (let X = 0; X < P.length; X++) {
          const U = P[X];
          I[U] && I[U].node.mode === j.mode ? (R[U][J] = y(I[U].lastCount + j.length, j.mode) - y(I[U].lastCount, j.mode), I[U].lastCount += j.length) : (I[U] && (I[U].lastCount = j.length), R[U][J] = y(j.length, j.mode) + 4 + e.getCharCountIndicator(j.mode, S));
        }
      }
      P = B;
    }
    for (let E = 0; E < P.length; E++)
      R[P[E]].end = 0;
    return { map: R, table: I };
  }
  function k(v, S) {
    let I;
    const R = e.getBestModeForData(v);
    if (I = e.from(S, R), I !== e.BYTE && I.bit < R.bit)
      throw new Error('"' + v + '" cannot be encoded with mode ' + e.toString(I) + `.
 Suggested mode is: ` + e.toString(R));
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
  o.fromArray = function(S) {
    return S.reduce(function(I, R) {
      return typeof R == "string" ? I.push(k(R, null)) : R.data && I.push(k(R.data, R.mode)), I;
    }, []);
  }, o.fromString = function(S, I) {
    const R = m(S, h.isKanjiModeEnabled()), P = C(R), E = _(P, I), N = u.find_path(E.map, "start", "end"), B = [];
    for (let F = 1; F < N.length - 1; F++)
      B.push(E.table[N[F]].node);
    return o.fromArray(b(B));
  }, o.rawSplit = function(S) {
    return o.fromArray(
      m(S, h.isKanjiModeEnabled())
    );
  };
})(Fn);
const Ze = Z, gt = Xe, Gs = Ts, Vs = As, Ws = En, Ks = Ln, _t = Pn, Ct = Ye, Js = Rs, Ke = On, Xs = xn, Ys = oe, mt = Fn;
function Qs(o, e) {
  const r = o.size, i = Ks.getPositions(e);
  for (let n = 0; n < i.length; n++) {
    const s = i[n][0], l = i[n][1];
    for (let h = -1; h <= 7; h++)
      if (!(s + h <= -1 || r <= s + h))
        for (let u = -1; u <= 7; u++)
          l + u <= -1 || r <= l + u || (h >= 0 && h <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && u >= 2 && u <= 4 ? o.set(s + h, l + u, !0, !0) : o.set(s + h, l + u, !1, !0));
  }
}
function Zs(o) {
  const e = o.size;
  for (let r = 8; r < e - 8; r++) {
    const i = r % 2 === 0;
    o.set(r, 6, i, !0), o.set(6, r, i, !0);
  }
}
function eo(o, e) {
  const r = Ws.getPositions(e);
  for (let i = 0; i < r.length; i++) {
    const n = r[i][0], s = r[i][1];
    for (let l = -2; l <= 2; l++)
      for (let h = -2; h <= 2; h++)
        l === -2 || l === 2 || h === -2 || h === 2 || l === 0 && h === 0 ? o.set(n + l, s + h, !0, !0) : o.set(n + l, s + h, !1, !0);
  }
}
function to(o, e) {
  const r = o.size, i = Ke.getEncodedBits(e);
  let n, s, l;
  for (let h = 0; h < 18; h++)
    n = Math.floor(h / 3), s = h % 3 + r - 8 - 3, l = (i >> h & 1) === 1, o.set(n, s, l, !0), o.set(s, n, l, !0);
}
function yt(o, e, r) {
  const i = o.size, n = Xs.getEncodedBits(e, r);
  let s, l;
  for (s = 0; s < 15; s++)
    l = (n >> s & 1) === 1, s < 6 ? o.set(s, 8, l, !0) : s < 8 ? o.set(s + 1, 8, l, !0) : o.set(i - 15 + s, 8, l, !0), s < 8 ? o.set(8, i - s - 1, l, !0) : s < 9 ? o.set(8, 15 - s - 1 + 1, l, !0) : o.set(8, 15 - s - 1, l, !0);
  o.set(i - 8, 8, 1, !0);
}
function no(o, e) {
  const r = o.size;
  let i = -1, n = r - 1, s = 7, l = 0;
  for (let h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!o.isReserved(n, h - u)) {
          let p = !1;
          l < e.length && (p = (e[l] >>> s & 1) === 1), o.set(n, h - u, p), s--, s === -1 && (l++, s = 7);
        }
      if (n += i, n < 0 || r <= n) {
        n -= i, i = -i;
        break;
      }
    }
}
function ro(o, e, r) {
  const i = new Gs();
  r.forEach(function(u) {
    i.put(u.mode.bit, 4), i.put(u.getLength(), Ys.getCharCountIndicator(u.mode, o)), u.write(i);
  });
  const n = Ze.getSymbolTotalCodewords(o), s = Ct.getTotalCodewordsCount(o, e), l = (n - s) * 8;
  for (i.getLengthInBits() + 4 <= l && i.put(0, 4); i.getLengthInBits() % 8 !== 0; )
    i.putBit(0);
  const h = (l - i.getLengthInBits()) / 8;
  for (let u = 0; u < h; u++)
    i.put(u % 2 ? 17 : 236, 8);
  return so(i, o, e);
}
function so(o, e, r) {
  const i = Ze.getSymbolTotalCodewords(e), n = Ct.getTotalCodewordsCount(e, r), s = i - n, l = Ct.getBlocksCount(e, r), h = i % l, u = l - h, p = Math.floor(i / l), g = Math.floor(s / l), m = g + 1, y = p - g, b = new Js(y);
  let C = 0;
  const _ = new Array(l), k = new Array(l);
  let v = 0;
  const S = new Uint8Array(o.buffer);
  for (let N = 0; N < l; N++) {
    const B = N < u ? g : m;
    _[N] = S.slice(C, C + B), k[N] = b.encode(_[N]), C += B, v = Math.max(v, B);
  }
  const I = new Uint8Array(i);
  let R = 0, P, E;
  for (P = 0; P < v; P++)
    for (E = 0; E < l; E++)
      P < _[E].length && (I[R++] = _[E][P]);
  for (P = 0; P < y; P++)
    for (E = 0; E < l; E++)
      I[R++] = k[E][P];
  return I;
}
function oo(o, e, r, i) {
  let n;
  if (Array.isArray(o))
    n = mt.fromArray(o);
  else if (typeof o == "string") {
    let p = e;
    if (!p) {
      const g = mt.rawSplit(o);
      p = Ke.getBestVersionForData(g, r);
    }
    n = mt.fromString(o, p || 40);
  } else
    throw new Error("Invalid data");
  const s = Ke.getBestVersionForData(n, r);
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
  const l = ro(e, r, n), h = Ze.getSymbolSize(e), u = new Vs(h);
  return Qs(u, e), Zs(u), eo(u, e), yt(u, r, 0), e >= 7 && to(u, e), no(u, l), isNaN(i) && (i = _t.getBestMask(
    u,
    yt.bind(null, u, r)
  )), _t.applyMask(i, u), yt(u, r, i), {
    modules: u,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: i,
    segments: n
  };
}
In.create = function(e, r) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let i = gt.M, n, s;
  return typeof r < "u" && (i = gt.from(r.errorCorrectionLevel, gt.M), n = Ke.from(r.version), s = _t.from(r.maskPattern), r.toSJISFunc && Ze.setToSJISFunction(r.toSJISFunc)), oo(e, n, i, s);
};
var jn = {}, Mt = {};
(function(o) {
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
  o.getOptions = function(i) {
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
  }, o.getScale = function(i, n) {
    return n.width && n.width >= i + n.margin * 2 ? n.width / (i + n.margin * 2) : n.scale;
  }, o.getImageWidth = function(i, n) {
    const s = o.getScale(i, n);
    return Math.floor((i + n.margin * 2) * s);
  }, o.qrToImageData = function(i, n, s) {
    const l = n.modules.size, h = n.modules.data, u = o.getScale(l, s), p = Math.floor((l + s.margin * 2) * u), g = s.margin * u, m = [s.color.light, s.color.dark];
    for (let y = 0; y < p; y++)
      for (let b = 0; b < p; b++) {
        let C = (y * p + b) * 4, _ = s.color.light;
        if (y >= g && b >= g && y < p - g && b < p - g) {
          const k = Math.floor((y - g) / u), v = Math.floor((b - g) / u);
          _ = m[h[k * l + v] ? 1 : 0];
        }
        i[C++] = _.r, i[C++] = _.g, i[C++] = _.b, i[C] = _.a;
      }
  };
})(Mt);
(function(o) {
  const e = Mt;
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
  o.render = function(s, l, h) {
    let u = h, p = l;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (p = i()), u = e.getOptions(u);
    const g = e.getImageWidth(s.modules.size, u), m = p.getContext("2d"), y = m.createImageData(g, g);
    return e.qrToImageData(y.data, s, u), r(m, p, g), m.putImageData(y, 0, 0), p;
  }, o.renderToDataURL = function(s, l, h) {
    let u = h;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
    const p = o.render(s, l, u), g = u.type || "image/png", m = u.rendererOpts || {};
    return p.toDataURL(g, m.quality);
  };
})(jn);
var Hn = {};
const ao = Mt;
function fn(o, e) {
  const r = o.a / 255, i = e + '="' + o.hex + '"';
  return r < 1 ? i + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : i;
}
function bt(o, e, r) {
  let i = o + e;
  return typeof r < "u" && (i += " " + r), i;
}
function co(o, e, r) {
  let i = "", n = 0, s = !1, l = 0;
  for (let h = 0; h < o.length; h++) {
    const u = Math.floor(h % e), p = Math.floor(h / e);
    !u && !s && (s = !0), o[h] ? (l++, h > 0 && u > 0 && o[h - 1] || (i += s ? bt("M", u + r, 0.5 + p + r) : bt("m", n, 0), n = 0, s = !1), u + 1 < e && o[h + 1] || (i += bt("h", l), l = 0)) : n++;
  }
  return i;
}
Hn.render = function(e, r, i) {
  const n = ao.getOptions(r), s = e.modules.size, l = e.modules.data, h = s + n.margin * 2, u = n.color.light.a ? "<path " + fn(n.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "", p = "<path " + fn(n.color.dark, "stroke") + ' d="' + co(l, s, n.margin) + '"/>', g = 'viewBox="0 0 ' + h + " " + h + '"', y = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + g + ' shape-rendering="crispEdges">' + u + p + `</svg>
`;
  return typeof i == "function" && i(null, y), y;
};
const lo = Cs, St = In, zn = jn, uo = Hn;
function Nt(o, e, r, i, n) {
  const s = [].slice.call(arguments, 1), l = s.length, h = typeof s[l - 1] == "function";
  if (!h && !lo())
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
        const g = St.create(r, i);
        u(o(g, e, i));
      } catch (g) {
        p(g);
      }
    });
  }
  try {
    const u = St.create(r, i);
    n(null, o(u, e, i));
  } catch (u) {
    n(u);
  }
}
Le.create = St.create;
Le.toCanvas = Nt.bind(null, zn.render);
Le.toDataURL = Nt.bind(null, zn.renderToDataURL);
Le.toString = Nt.bind(null, function(o, e, r) {
  return uo.render(o, r);
});
const Tt = 300, ho = 1;
function qn() {
  return (game.settings.get(A, "apiUrl") || "").replace(/\/$/, "");
}
function fo({ nonce: o, channelId: e, foundryUserName: r }) {
  return JSON.stringify({
    v: ho,
    agentUrl: qn(),
    channelId: e || null,
    nonce: o,
    foundryUserName: r || null
  });
}
async function $n(o, e, r) {
  const i = qn(), n = game.settings.get(A, "apiKey"), s = game.settings.get(A, "channelId");
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
        expires_in: Tt
      })
    });
  } catch {
    throw new Error("Could not reach the Agent server. Check the Agent URL and your connection.");
  }
  if (!h.ok)
    throw h.status === 403 ? new Error("Only a GM with a linked Agent account can generate pairings.") : h.status === 404 ? new Error("No Agent session matches this Channel ID. Create/sync the session in the Agent first.") : new Error(`Agent server rejected the pairing (HTTP ${h.status}).`);
  return o.pendingPairings.set(l, { foundryUserId: e, ts: Date.now() }), setTimeout(() => o.pendingPairings.delete(l), Tt * 1e3), { nonce: l, payload: fo({ nonce: l, channelId: s, foundryUserName: r }) };
}
async function Gn(o, e, r) {
  let i;
  try {
    ({ payload: i } = await $n(o, e, r));
  } catch (n) {
    ui.notifications.error(`Agent pairing: ${n.message}`);
    return;
  }
  await Vn(i, r);
}
async function Vn(o, e) {
  let r;
  try {
    r = await Le.toDataURL(o, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const i = Math.round(Tt / 60), n = e || "this player", s = btoa(o);
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
class po extends FormApplication {
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
      const n = ws(i.agentLink);
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
      await Gn(window.cyberpunkBridge, i, n);
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
const Je = "pairing-request", we = "pairing-nonce";
function go(o) {
  o.hookIds.pairingUpdateUser || (o.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (e, r) => {
    if (game.user.isGM && foundry.utils.getProperty(r, `flags.${A}.${Je}`) && await mo(o, e), e.id === game.user.id) {
      const i = foundry.utils.getProperty(r, `flags.${A}.${we}`);
      i && i.payload && (await Vn(i.payload, game.user.name), await game.user.unsetFlag(A, we), await game.user.unsetFlag(A, Je));
    }
  }));
}
async function mo(o, e) {
  try {
    const { payload: r } = await $n(o, e.id, e.name);
    await e.setFlag(A, we, { payload: r, ts: Date.now() });
  } catch (r) {
    console.warn(`[Bridge] Failed to mint pairing for ${e.name}: ${r.message}`), await e.setFlag(A, we, { error: r.message, ts: Date.now() });
  }
}
async function yo() {
  if (game.user.isGM) {
    await Gn(window.cyberpunkBridge, game.user.id, game.user.name);
    return;
  }
  await game.user.setFlag(A, we, null), await game.user.setFlag(A, Je, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(A, we) || (await game.user.unsetFlag(A, Je), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class bo extends FormApplication {
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
      r.preventDefault(), await yo(), this.close();
    });
  }
}
const vo = 1, wo = /^[A-Z0-9]{4}-?[A-Z0-9]{4}$/i;
function pn(o) {
  const e = (o || "").trim();
  if (!e) return null;
  for (const r of [() => atob(e), () => e])
    try {
      return JSON.parse(r());
    } catch {
    }
  return null;
}
function gn(o) {
  return wo.test((o || "").trim());
}
async function ko(o) {
  const e = o.trim().toUpperCase().replace(/^([A-Z0-9]{4})([A-Z0-9]{4})$/, "$1-$2"), r = (game.settings.get(A, "apiUrl") || ge).replace(/\/$/, "");
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
class _o extends FormApplication {
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
      this._renderPreview(e, pn(r.currentTarget.value));
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
    if (gn(n)) {
      const h = (game.settings.get(A, "apiUrl") || ge).replace(/\/$/, "");
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
      ["Reverb Port", r.reverbPort ? String(r.reverbPort) : "same as Agent URL"]
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
    if (gn(e))
      try {
        r = await ko(e);
      } catch (s) {
        ui.notifications.error(`Agent setup: ${s.message}`);
        return;
      }
    else
      r = pn(e);
    if (!r || !r.agentUrl) {
      ui.notifications.error("Agent setup: that does not look like a valid setup code. Re-copy it from the Agent.");
      return;
    }
    if (r.v && r.v !== vo) {
      ui.notifications.error("Agent setup: this code was made by a newer Agent. Update the Bridge module.");
      return;
    }
    const i = { apiUrl: String(r.agentUrl).replace(/\/$/, "") };
    r.channelId && (i.channelId = String(r.channelId)), r.apiKey && (i.apiKey = String(r.apiKey)), r.reverbKey && (i.reverbKey = String(r.reverbKey)), i.reverbPort = r.reverbPort ? String(r.reverbPort) : "0";
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
function Co(o) {
  game.settings.registerMenu(A, "quickSetup", {
    name: "Quick Setup",
    label: "Paste Agent Config",
    hint: "Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.",
    icon: "fas fa-bolt",
    type: _o,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: po,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: bo,
    restricted: !1
    // Available to all players
  }), game.settings.register(A, "apiUrl", {
    name: "Agent URL",
    hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
    scope: "world",
    // URL is usually the same for everyone
    config: !0,
    type: String,
    default: ge,
    onChange: () => {
      game.user.isGM && o.reconnect(), o.syncPlayerLink();
    }
  }), game.settings.register(A, "reverbHost", {
    name: "WebSocket Host (override)",
    hint: 'Leave blank. Blank means "use the same host as the Agent URL". Fill this in only if your Agent serves its WebSocket from a different hostname. Setup codes never carry a host, so this is one field pasting a code will not correct for you - clear it by hand if you set it while troubleshooting.',
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => o.reconnect()
  }), game.settings.register(A, "reverbPort", {
    name: "WebSocket Port (override)",
    hint: 'Leave at 0. Zero means "use the same port as the Agent URL", which is right whenever the Agent serves its WebSocket on its own address - the normal setup. Set a port only if your Agent publishes Reverb separately. Pasting a setup code from a single-origin Agent resets this to 0.',
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => o.reconnect()
  }), game.settings.register(A, "reverbUseSSL", {
    name: "WebSocket security",
    hint: "Leave on Auto. Auto uses wss:// when your Agent URL starts with https:// and ws:// when it starts with http://, which is what you want unless a proxy in front of the Agent changes the scheme. Only override if live updates fail while the rest of the Agent works.",
    scope: "world",
    config: !0,
    type: String,
    choices: {
      auto: "Auto - match the Agent URL (recommended)",
      wss: "Always secure (wss://)",
      ws: "Always plain (ws://)"
    },
    default: "auto",
    onChange: () => o.reconnect()
  }), game.settings.register(A, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: bn,
    onChange: () => o.reconnect()
  }), game.settings.register(A, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (e) => {
      await game.user.setFlag(A, "hasApiKey", !!e), game.user.isGM && o.reconnect(), o.syncPlayerLink();
    }
  }), game.settings.register(A, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && o.reconnect();
    }
  }), game.settings.register(A, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function So(o, e, { type: r, requestId: i, actorId: n }) {
  const s = game.actors.get(n);
  if (!s) {
    console.warn(`⚠️ Actor ID ${n} not found in this world.`);
    return;
  }
  await s.update(e.changes), ui.notifications.info(`💾 Sync: ${s.name} updated.`), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function Wn(o, e, { requestId: r }) {
  let i = e.actorId, n = game.user;
  const s = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  if (s && (n = game.users.find((l) => l.getFlag(A, "agent-link") === s) || game.users.get(s) || (s === game.user.id ? game.user : null)), n || (n = game.user), !i) {
    const l = n.character;
    l && (i = l.id);
  }
  if (i !== null) {
    const l = game.actors.get(i);
    if (l) {
      const h = l.toObject(), u = (g) => (g || []).map((m) => {
        var y;
        return {
          _id: m._id,
          name: m.name,
          disabled: m.disabled,
          changes: m.changes,
          flags: (y = m.flags) != null && y["cyberpunk-red-core"] ? { "cyberpunk-red-core": m.flags["cyberpunk-red-core"] } : {}
        };
      }), p = {
        _id: l.id,
        name: l.name,
        type: l.type,
        img: h.img,
        system: h.system,
        items: (h.items || []).map((g) => {
          const m = {
            _id: g._id,
            name: g.name,
            type: g.type,
            img: g.img,
            system: g.system,
            effects: u(g.effects)
          };
          if (g.type === "cyberware") {
            const y = l.items.get(g._id);
            y && (m.system = {
              ...g.system,
              isInstalled: !!y.system.isInstalled,
              isFoundational: !!y.system.isFoundational
            });
          }
          return m;
        }),
        effects: u(h.effects),
        flags: h.flags && h.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": h.flags["cyberpunk-red-core"] } : {}
      };
      await o.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: p, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
      return;
    }
  }
  await o.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: !1, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function To(o, e, { requestId: r, actorId: i }) {
  let n = game.user;
  const s = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  s && (n = game.users.find((u) => u.getFlag(A, "agent-link") === s) || game.users.get(s) || (s === game.user.id ? game.user : null)), n || (n = game.user);
  function l(u) {
    var g;
    return ((g = canvas.tokens.placeables.filter((m) => {
      var y;
      return ((y = m.actor) == null ? void 0 : y.id) === u;
    })[0]) == null ? void 0 : g.id) ?? null;
  }
  let h = [];
  n.isGM ? h = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var g, m;
    const p = (g = Object.entries(u.ownership || {}).find(([y, b]) => {
      const C = game.users.get(y);
      return C && !C.isGM && b >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: l(u.id),
      agentLink: (p ? (m = game.users.get(p)) == null ? void 0 : m.getFlag(A, "agent-link") : null) || p || n.getFlag(A, "agent-link") || n.id
    };
  }) : (h = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(n, "OWNER")).map((u) => {
    var g, m;
    const p = (g = Object.entries(u.actor.ownership || {}).find(([y, b]) => {
      const C = game.users.get(y);
      return C && !C.isGM && b >= 3;
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
  })), !n.isGM && n.character && (h = h.filter((u) => u.actorId === n.character.id))), await o.sendResponse({ type: "ACTORS_DATA", actorId: i, actors: h, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function Ao(o, e, { type: r, requestId: i, actorId: n }) {
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
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function Io(o, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const s = n.items.get(e.itemId);
    if (s) {
      const l = `items.${e.itemId}.system.equipped`;
      await s.update({ "system.equipped": e.state }), await o.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [l]: e.state }, success: !0, requestId: r });
    }
  }
}
async function Ro(o, e, { requestId: r, actorId: i }) {
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
      }), await o.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: u, success: !0, requestId: r });
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
async function Eo(o, e, { requestId: r, actorId: i }) {
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
  const m = [...g, e.programId], y = h + p;
  await s.update({
    "system.installedItems.list": m,
    "system.installedItems.usedSlots": y
  }), await o.sendResponse({
    type: "SHEET_DELTA",
    actorId: i,
    delta: {
      [`items.${e.cyberdeckId}.system.installedItems.list`]: m,
      [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: y
    },
    success: !0,
    requestId: r
  });
}
async function Lo(o, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const s = n.items.get(e.cyberdeckId), l = n.items.get(e.programId);
  if (!s) return;
  const h = s.system.installedItems.list || [];
  if (!h.includes(e.programId)) return;
  const u = h.filter((b) => b !== e.programId), p = l && l.system.size || 1, g = s.system.installedItems.usedSlots || 0, m = Math.max(0, g - p);
  await s.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": m
  });
  const y = {
    [`items.${e.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: m
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), y[`items.${e.programId}.system.isRezzed`] = !1), await o.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: y, success: !0, requestId: r });
}
async function Po(o, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const s = n.items.get(e.programId);
    s && (await s.update({ "system.isRezzed": e.targetState }), await o.sendResponse({
      type: "SHEET_DELTA",
      actorId: i,
      delta: { [`items.${e.programId}.system.isRezzed`]: e.targetState },
      success: !0,
      requestId: r
    }));
  }
}
async function Mo(o, e, { requestId: r, actorId: i }) {
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
    }, p = await o.rollAndCapture(i, u, e.rollMode);
    p.success && await o.sendResponse({
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
async function No(o, e, { requestId: r, actorId: i }) {
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
    }, p = await o.rollAndCapture(i, u, e.rollMode);
    p.success && await o.sendResponse({
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
async function Oo(o, e, { requestId: r, actorId: i }) {
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
    }, u = await o.rollAndCapture(i, h, e.rollMode);
    if (u.success) {
      const p = n.system.derivedStats.deathsave || {};
      await o.sendResponse({
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
      }), await o.sendResponse({
        type: "SHEET_DELTA",
        actorId: i,
        delta: { "system.derivedStats.deathsave": p },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function Bo(o, e, { requestId: r, actorId: i }) {
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
  }, l = await o.rollAndCapture(i, s, e.rollMode);
  l.success && await o.sendResponse({
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
async function xo(o, e, { requestId: r, actorId: i }) {
  var s, l;
  const n = game.actors.get(i);
  if (n) {
    const h = async () => {
      await n.rollInitiative();
    }, u = await o.rollAndCapture(i, h, e.rollMode);
    u.success && await o.sendResponse({
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
async function Do(o, e, { requestId: r, actorId: i }) {
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
      }, g = await o.rollAndCapture(i, p, e.rollMode);
      g.success && await o.sendResponse({
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
async function Fo(o, e, { requestId: r, actorId: i }) {
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
      }, p = await o.rollAndCapture(i, u, e.rollMode);
      p.success && await o.sendResponse({
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
async function Uo(o, e, { requestId: r, actorId: i }) {
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
    }, u = await o.rollAndCapture(i, h, e.rollMode);
    u.success && await o.sendResponse({
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
async function jo(o, e, { requestId: r, actorId: i }) {
  r && o.activeRequests.set(r, { actorId: i, timestamp: Date.now() });
  const n = new Roll(e.formula);
  await n.evaluate(), await n.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
    flavor: e.flavor,
    rollMode: e.rollMode || game.settings.get("core", "rollMode")
  }), await o.sendResponse({
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
async function Ho(o, e, { requestId: r, actorId: i, tokenId: n }) {
  var l, h, u, p, g, m, y;
  const s = game.actors.get(i);
  if (s) {
    const b = e.weaponId, C = e.fireMode, _ = canvas.tokens.get(e.targetId), k = "firetype-" + b, v = "cyberpunk-red-core";
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
    I.dataset.rollType = "attack", I.dataset.itemId = b, I.dataset.rollTitle = C + " Attack";
    const R = async () => {
      await s.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: I,
        type: "click"
      }, { showDialog: !0 });
    };
    let P = null;
    if (_) {
      const N = canvas.tokens.get(n) || ((l = s.getActiveTokens()) == null ? void 0 : l[0]) || canvas.tokens.placeables.find((B) => {
        var F;
        return ((F = B.actor) == null ? void 0 : F.id) === s.id;
      });
      if (N) {
        const B = _.center.x - N.center.x, F = _.center.y - N.center.y, j = Math.sqrt(Math.pow(B, 2) + Math.pow(F, 2)), J = Math.ceil(j / (((h = canvas.grid) == null ? void 0 : h.size) || 128)), X = s.items.get(b), U = wn(X), ue = kn(U, J);
        P = ue === 99 ? "Out of Range" : ue;
      }
    }
    const E = await o.rollAndCapture(i, R, e.rollMode);
    if (E.success) {
      let N = null;
      typeof P == "number" ? N = E.total >= P ? "Hit" : "Miss" : P === "Out of Range" && (N = "Miss");
      const B = ((g = (p = (u = s.items.get(b)) == null ? void 0 : u.system) == null ? void 0 : p.magazine) == null ? void 0 : g.value) ?? null;
      await o.sendResponse({
        type: "ROLL_RESULT",
        rollMode: E.rollMode,
        requestId: r,
        actorId: i,
        total: E.total,
        isCriticalSuccess: E.isCriticalSuccess,
        isCriticalFailure: E.isCriticalFailure,
        label: C + " Attack",
        rawRoll: {
          total: E.total,
          isCriticalSuccess: E.isCriticalSuccess,
          isCriticalFailure: E.isCriticalFailure,
          label: E.label,
          resultTotal: (m = E.rawRoll) == null ? void 0 : m.resultTotal,
          rollTitle: (y = E.rawRoll) == null ? void 0 : y.rollTitle
        },
        dv: P,
        ammoTo: B,
        outcome: N,
        success: !0
      });
    }
  }
}
async function zo(o, e, { type: r, requestId: i, actorId: n, tokenId: s }) {
  if (game.paused) return;
  const l = canvas.tokens.get(s);
  if (l) {
    let h = {};
    e.direction === "up" ? h.y = l.document.y - canvas.grid.size : e.direction === "down" ? h.y = l.document.y + canvas.grid.size : e.direction === "left" ? h.x = l.document.x - canvas.grid.size : e.direction === "right" && (h.x = l.document.x + canvas.grid.size);
    const u = l.center, p = {
      x: u.x + ((h.x ?? l.document.x) - l.document.x),
      y: u.y + ((h.y ?? l.document.y) - l.document.y)
    };
    if (CONFIG.Canvas.polygonBackends.move.testCollision(
      u,
      p,
      { type: "move", mode: "any" }
    )) {
      ui.notifications.warn(`${l.name}'s path is blocked by a wall.`), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: s, success: !1, message: "Path blocked by a wall", requestId: i });
      return;
    }
    await l.document.update(h), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: s, success: !0, requestId: i });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${s} not found.`), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: s, success: !1, message: "Token not found", requestId: i });
}
async function qo(o, e, { type: r, requestId: i, actorId: n }) {
  const s = canvas.tokens.get(e.targetTokenId);
  s && (s.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: e.targetTokenId, success: !0, requestId: i }));
}
async function $o(o, e, { requestId: r, actorId: i, tokenId: n }) {
  var u;
  const s = canvas.tokens.placeables.filter((p) => {
    var g;
    return ((g = p.actor) == null ? void 0 : g.id) === i;
  });
  n === null && (n = ((u = s[0]) == null ? void 0 : u.id) ?? null);
  const l = canvas.tokens.get(n);
  let h = [];
  if (l) {
    const p = canvas.grid.size, g = canvas.dimensions, m = l.center.x, y = l.center.y;
    h = canvas.tokens.placeables.filter((b) => {
      const C = !b.document.hidden, _ = b.actor && (b.actor.type === "character" || b.actor.type === "mook"), k = b.x >= g.sceneX && b.x <= g.sceneX + g.sceneWidth && b.y >= g.sceneY && b.y <= g.sceneY + g.sceneHeight;
      return C && _ && k && b.id !== l.id;
    }).map((b) => {
      const C = b.center.x - m, _ = b.center.y - y, v = (Math.sqrt(Math.pow(C, 2) + Math.pow(_, 2)) / p).toFixed(2);
      return {
        name: b.name,
        id: b.id,
        distanceM: parseFloat(v),
        type: b.actor.type
      };
    }).sort((b, C) => b.distanceM - C.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${n} not found.`);
  await o.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: i, tokens: h, requestId: r });
}
async function Go(o, e, { requestId: r, actorId: i, tokenId: n }) {
  var p;
  const s = canvas.tokens.get(n), l = e.targetTokenId || ((p = Array.from(game.user.targets)[0]) == null ? void 0 : p.id), h = canvas.tokens.get(l), u = e.weaponId;
  if (s && h) {
    const g = h.center.x - s.center.x, m = h.center.y - s.center.y, y = Math.sqrt(Math.pow(g, 2) + Math.pow(m, 2)), b = Math.ceil(y / 128), C = s.actor.items.get(u);
    if (!C) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${s.actor.name}.`), await o.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
      return;
    }
    const _ = wn(C), k = kn(_, b), v = {
      targetName: h.name,
      distanceMeters: b,
      weaponCategory: _,
      dv: k === 99 ? "Out of Range" : k
    };
    await o.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: v, requestId: r });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!s}, Target: ${!!h}`), await o.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
}
async function Vo(o, e, { requestId: r, actorId: i }) {
  var P;
  const n = game.actors.get(i);
  if (!n) return;
  const s = e.weaponId, l = s ? n.items.get(s) : null;
  let h = "None", u = 0, p = "None", g = 0, m = 0;
  if (l) {
    h = l.system.weaponSkill;
    const E = n.items.find((N) => N.type === "skill" && N.name === h);
    u = E && Number(E.system.level) || 0, p = E && E.system.stat || "ref", g = Number((P = n.system.stats[p]) == null ? void 0 : P.value) || 0, m = Number(l.system.attackmod) || 0;
  }
  let y = 0;
  const b = [], C = Number(n.system.derivedStats.hp.value) || 0, _ = Number(n.system.derivedStats.seriouslyWounded) || 0, k = n.items.find((E) => E.name === "Stim" && E.type === "drug"), v = k && k.effects.some((E) => E.disabled === !1);
  if (C <= 0)
    y -= 4, b.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (C <= _) {
    const E = v ? 0 : -2;
    y += E, b.push({
      title: v ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: E,
      description: v ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  const S = n.items.filter((E) => E.type === "criticalInjury"), I = os(l ? h : null, l);
  S.forEach((E) => {
    var X;
    const N = E.name || "Injury", B = (((X = E.system.description) == null ? void 0 : X.value) || "").replace(/<[^>]*>/g, "");
    let F = 0, j = !1;
    const J = [];
    if ((E.effects || []).forEach((U) => {
      var Ne, Oe, Be, ke, xe;
      if (!((Ne = U.changes) != null && Ne.length)) return;
      j = !0;
      const ue = U.active ?? (!U.disabled && !((Oe = U.system) != null && Oe.isSuppressed)), Me = ((xe = (ke = (Be = U.flags) == null ? void 0 : Be["cyberpunk-red-core"]) == null ? void 0 : ke.changes) == null ? void 0 : xe.situational) || [];
      U.changes.forEach((he, ee) => {
        var W, De;
        const de = parseInt(he.value);
        if (isNaN(de)) return;
        const fe = `${as(he.key)} ${de > 0 ? "+" : ""}${de}`, q = String(he.key).replace(/^bonuses\./, "");
        if (!ue) return J.push(`${fe} (inactive)`);
        if (q === he.key) return J.push(`${fe} (in stat)`);
        if (!I.includes(q)) return J.push(`${fe} (not this roll)`);
        if ((W = Me[ee]) != null && W.isSituational && !((De = Me[ee]) != null && De.onByDefault))
          return J.push(`${fe} (situational, tick it in Foundry's roll dialog)`);
        F += de;
      });
    }), !j) {
      const U = String(N).toLowerCase();
      (B.includes("-2") || U.includes("arm") || U.includes("eye")) && (F = -2);
    }
    y += F, b.push({ title: N, description: B, penalty: F, note: J.join(" · ") });
  });
  const R = {
    actorName: n.name,
    baseBonus: g + u + m,
    breakdown: {
      statName: p,
      statValue: g,
      skillName: h,
      skillLevel: u,
      weaponAcc: m
    },
    totalPenalty: y,
    finalModifier: g + u + m + y,
    injuries: b
  };
  await o.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: i, result: R, requestId: r });
}
async function Wo(o, e, { requestId: r, actorId: i }) {
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
    await n.update({ [s]: l }), await o.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [s]: l }, tab: "stats", success: !0, requestId: r });
  }
}
async function Ko(o, e, { requestId: r, actorId: i, debug: n }) {
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
  s && await o.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { "system.wealth": s.system.wealth }, tab: "stats", success: !0, requestId: r });
}
async function Jo(o, e, { requestId: r, actorId: i, debug: n }) {
  const s = [];
  for (const l of game.journal) {
    const h = l.pages.filter((u) => u.type === "cpr-agent.datapool");
    for (const u of h) {
      const p = u.system.entries || [], g = [];
      for (const m of p) {
        let y = m.htmlContent;
        m.type === "html" && y && (y = await TextEditor.enrichHTML(y, { async: !0 })), g.push({
          id: m.id,
          icon: m.icon,
          title: m.title,
          type: m.type,
          htmlContent: y,
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
  n && console.log("[Bridge] Found Data Pools:", s), await o.sendResponse({
    type: "NET_POOL_DATA",
    actorId: i,
    pools: s,
    requestId: r,
    success: !0
  });
}
async function Xo(o, e, { debug: r }) {
  var u;
  if (!game.user.isGM) return;
  const i = e.foundryUserId, n = e.agentLink || e.agent_link, s = e.nonce;
  if (!i || !n || !s) {
    console.warn("[Bridge] PAIR_AGENT missing fields.", e);
    return;
  }
  const l = o.pendingPairings.get(s);
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
  o.pendingPairings.delete(s), await h.setFlag(A, "agent-link", n), await h.setFlag(A, "hasApiKey", !0), r && console.log(`[Bridge] PAIR_AGENT: linked ${h.name} -> ${n}`), ui.notifications.info(`Agent: ${h.name} linked successfully.`), (u = Object.values(ui.windows).find((p) => {
    var g;
    return ((g = p.options) == null ? void 0 : g.id) === "cpr-agent-assignment-menu";
  })) == null || u.render(!1), await o.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: i,
    agentLink: n,
    nonce: s,
    success: !0
  });
}
async function Kn(o, e, r) {
  try {
    await Wn(o, { actorId: e }, { requestId: r, actorId: e });
  } catch (i) {
    console.error("[Bridge] cyberware refreshActor failed", i);
  }
}
function Jn(o) {
  return typeof o.recursiveGetAllInstalledItems != "function" ? [] : o.recursiveGetAllInstalledItems().filter((e) => e.type === "cyberware");
}
function Yo(o, e) {
  var n, s, l;
  const r = o.items.filter(
    (h) => h.type === "cyberware" && h.system.isInstalled && h.system.isFoundational && h.system.type === e.system.type
  ), i = [];
  for (const h of r) {
    i.push({ id: h._id, name: h.name });
    let u = [...((n = h.system.installedItems) == null ? void 0 : n.list) || []];
    for (; u.length > 0; ) {
      const p = u;
      u = [];
      for (const g of p) {
        const m = o.items.get(g), y = (s = m == null ? void 0 : m.system) == null ? void 0 : s.installedItems;
        if (y != null && y.allowed) {
          const b = typeof m.availableInstallSlots == "function" ? m.availableInstallSlots() : 1 / 0;
          (l = y.allowedTypes) != null && l.includes(e.type) && b >= (e.system.size || 1) && i.push({ id: m._id, name: m.name }), u = u.concat(y.list || []);
        }
      }
    }
  }
  return i;
}
async function Qo(o, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const s = n.items.get(e.itemId);
  if (!s) {
    await o.sendResponse({ type: "CYBERWARE_INSTALL_OPTIONS", requestId: r, actorId: i, success: !1, reason: "Item not found." });
    return;
  }
  const l = !!s.system.isFoundational, h = l ? [] : Yo(n, s), u = Jn(s), p = u.reduce((y, b) => `${y} + ${b.system.humanityLoss.roll}`, s.system.humanityLoss.roll), g = u.reduce((y, b) => y + b.system.humanityLoss.static, s.system.humanityLoss.static), m = l || h.length > 0;
  await o.sendResponse({
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
async function Zo(o, e, { requestId: r, actorId: i }) {
  var m, y, b, C, _, k;
  const n = game.actors.get(i);
  if (!n) return;
  const s = n.items.get(e.itemId);
  if (!s) return;
  const h = !!s.system.isFoundational ? n : n.items.get(e.foundationalId);
  if (!h) {
    await o.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: i, itemId: e.itemId, success: !1, reason: "Install target not found." });
    return;
  }
  const u = Jn(s), p = e.humanityLossType || "none";
  let g = !1;
  try {
    const v = Number((b = (y = (m = n.system) == null ? void 0 : m.derivedStats) == null ? void 0 : y.humanity) == null ? void 0 : b.value) || 0;
    if (g = await h.installItems([s]), g && (await n.loseHumanityValue([s].concat(u), p), p !== "none")) {
      const S = Number((k = (_ = (C = n.system) == null ? void 0 : C.derivedStats) == null ? void 0 : _.humanity) == null ? void 0 : k.value) || 0, I = Math.max(0, v - S);
      await o.sendResponse({
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
  await o.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: i, itemId: s._id, success: g }), g && await Kn(o, i, r);
}
async function ea(o, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    try {
      await n.uninstallCyberware(e.itemId, e.foundationalId || null, !0);
    } catch (s) {
      console.error("[Bridge] uninstallCyberware failed", s);
    }
    await o.sendResponse({ type: "CYBERWARE_UNINSTALLED", requestId: r, actorId: i, itemId: e.itemId, success: !0 }), await Kn(o, i, r);
  }
}
const ta = {
  UPDATE_ACTOR: So,
  GET_ACTOR: Wn,
  GET_ACTORS: To,
  CONSUME_ITEM: Ao,
  ITEM_EQUIP: Io,
  RELOAD_WEAPON: Ro,
  INSTALL_PROGRAM: Eo,
  REMOVE_PROGRAM: Lo,
  TOGGLE_REZ: Po,
  PROGRAM_ROLL: Mo,
  PREPARE_CYBERWARE_INSTALL: Qo,
  INSTALL_CYBERWARE: Zo,
  UNINSTALL_CYBERWARE: ea,
  DAMAGE_ROLL: No,
  DEATH_SAVE: Oo,
  FACEDOWN_ROLL: Bo,
  INITIATIVE_ROLL: xo,
  ROLE_ROLL: Do,
  SKILL_ROLL: Fo,
  STAT_ROLL: Uo,
  DICE_ROLL: jo,
  ATTACK_ROLL: Ho,
  MOVE_TOKEN: zo,
  TARGET_TOKEN: qo,
  LIST_VISIBLE_TOKENS: $o,
  GET_DV_INFO: Go,
  GET_ROLL_MODIFIERS: Vo,
  UPDATE_STAT: Wo,
  UPDATE_EB: Ko,
  GET_NET_POOL: Jo,
  PAIR_AGENT: Xo
};
async function mn(o, e, r, i) {
  const n = ta[e];
  if (!n) {
    console.log("Unknown DataType: " + e);
    return;
  }
  return n(o, r, i);
}
class na {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1, this._captureRollMode = null, this._prevRollMode = null, this._captureSafetyTimer = null, this.embedTransport = null;
  }
  rollAndCapture(e, r, i = null) {
    return _s(this, e, r, i);
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
    Co(this);
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
    const u = l || h.hostname, p = ks(s, e), g = h.port ? Number(h.port) : h.protocol === "https:" ? 443 : 80, m = n > 0 ? n : g;
    this.echo = new vs({
      broadcaster: "reverb",
      key: game.settings.get(A, "reverbKey") || bn,
      wsHost: u,
      wsPort: m,
      wssPort: m,
      forceTLS: p,
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
    var i, n;
    if (this.hookIds.updateActor) return;
    const e = async (s, l) => {
      const h = game.settings.get(A, "apiKey");
      !this.isConnected && !h && !this.embedTransport || !s || !["character", "mook"].includes(s.type) || (console.log(`%c[Bridge] Syncing change for ${s.name}`, "color: #ffaa00;", l), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: s.id,
        uuid: s.id,
        delta: l,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (s, l, h, u) => {
      if (l.system) {
        const p = wt(l.system, "system.");
        e(s, p);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (s, l, h, u) => {
      const p = s.parent;
      if (p instanceof Actor) {
        const g = {}, m = `items.${s.id}.`;
        l.system && wt(l.system, `${m}system.`, g);
        for (let y in l)
          y !== "system" && y !== "_id" && (g[`${m}${y}`] = l[y]);
        Object.keys(g).length > 0 && e(p, g);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (s, l, h) => {
      const u = s.parent;
      if (u instanceof Actor) {
        const p = {
          [`items.+${s.id}`]: s.toObject()
        };
        e(u, p);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (s, l, h) => {
      const u = s.parent;
      if (u instanceof Actor) {
        const p = {
          [`items.${s.id}`]: null
        };
        e(u, p);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (s, l) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (s, l, h, u) => {
      (l.x || l.y || l.disposition || l.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    });
    const r = (s) => {
      const l = s.parent, h = l == null ? void 0 : l.parent;
      !(l instanceof Item) || !(h instanceof Actor) || e(h, { [`items.${l.id}.effects`]: l.toObject().effects });
    };
    this.hookIds.createActiveEffect = Hooks.on("createActiveEffect", r), this.hookIds.updateActiveEffect = Hooks.on("updateActiveEffect", r), this.hookIds.deleteActiveEffect = Hooks.on("deleteActiveEffect", r), this.hookIds.deleteToken = Hooks.on("deleteToken", (s, l, h) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.preCreateChatMessage = Hooks.on("preCreateChatMessage", (s, l, h, u) => {
      if (!(!this._isCapturingRoll || !this._captureRollMode))
        try {
          const p = this._whisperForRollMode(this._captureRollMode);
          s.updateSource(p), game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Stamped rollMode ${this._captureRollMode}`, "color:#c084fc; font-weight:bold;", p);
        } catch (p) {
          console.warn("[Bridge] Failed to apply roll-mode visibility", p);
        }
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (s, l, h) => {
      var g;
      const u = !!(s.rolls && s.rolls.length > 0), p = ((g = s.author) == null ? void 0 : g.id) === game.user.id;
      if (game.settings.get(A, "debugMode") && console.log(`%c[Bridge] createChatMessage: hasRolls=${u} mine=${p} capturing=${this._isCapturingRoll} embed=${!!this.embedTransport}`, "color:#00ff88; font-weight:bold;"), !!u && p) {
        if (this._isCapturingRoll) {
          this._endRollCapture();
          return;
        }
        this.broadcastRoll(s);
      }
    }), console.log(`%c[Bridge] registerGlobalHooks: user=${(i = game.user) == null ? void 0 : i.name} isGM=${(n = game.user) == null ? void 0 : n.isGM} socket=${!!game.socket} → registering peer-roll listener on module.${A}`, "color:#00ffff; font-weight:bold;"), game.socket && game.socket.on(`module.${A}`, (s) => {
      if (!(!s || s.kind !== "peer-roll" || !s.payload)) {
        if (console.log(`%c[Bridge] peer-roll socket IN (rollMode=${s.payload.rollMode}, recipients=${JSON.stringify(s.recipients)}, embed=${!!this.embedTransport})`, "color:#00ff88; font-weight:bold;"), Array.isArray(s.recipients) && !s.recipients.includes(game.user.id)) {
          console.log("%c[Bridge] peer-roll dropped: not a recipient", "color:#ffaa00;");
          return;
        }
        if (!this.embedTransport) {
          console.log("%c[Bridge] peer-roll dropped: no embedTransport (Agent window not open on this client)", "color:#ffaa00;");
          return;
        }
        console.log("%c[Bridge] peer-roll → iframe", "color:#00ff88; font-weight:bold;");
        try {
          this.embedTransport.send(s.payload);
        } catch (l) {
          console.error("Cyberpunk Bridge: peer-roll tee failed", l);
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
    var y, b;
    const r = e.payload || e, i = r.type;
    console.log(`%c[Bridge] Incoming Call: ${i}`, "color: #00ffff; font-weight: bold;", r);
    const n = r.requestId, s = r.agent_link || r.agentLink;
    n && s && (this.requestAgentLinks.set(n, s), setTimeout(() => this.requestAgentLinks.delete(n), 3e4));
    const l = game.user.getFlag(A, "agent-link"), h = r.actorId, u = (y = game.user.character) == null ? void 0 : y.id, p = game.settings.get(A, "debugMode");
    p && console.log(`[Bridge] handleIncomingData: requestId=${n}, agentLink=${s}, myAgentLink=${l}, actorId=${h}, myCharacterId=${u}`);
    let g = !1;
    if (game.user.isGM || l && (n === l || s === l) ? g = !0 : !l && n && h && u === h && (console.log(`[Bridge] Discovery: Matching incoming request to character ${h}`), g = !0), !g) {
      p && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && s && l !== s && (n === s || h && u === h) && (console.log(`%c[Bridge] Setting agent-link flag: ${s}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(A, "agent-link", s), (b = ui.notifications) == null || b.info("Agent: Account linked!"));
    let m = r.tokenId;
    if (!m && h) {
      const C = canvas.tokens.placeables.find((_) => {
        var k;
        return ((k = _.actor) == null ? void 0 : k.id) === h;
      });
      C && (m = C.id);
    }
    await mn(this, i, r, { type: i, requestId: n, actorId: h, tokenId: m, debug: p });
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
    s && console.log(`%c[Bridge] Embed Call: ${r}`, "color: #c084fc; font-weight: bold;", e), await mn(this, r, e, { type: r, requestId: i, actorId: n, tokenId: l, debug: s });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class Xn extends foundry.abstract.TypeDataModel {
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
ft(Xn, "metadata", {
  label: "Agent Data Pool"
});
class Yn extends JournalPageSheet {
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
ft(Yn, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
class ra {
  constructor(e) {
    this.bridge = e, this.frame = null, this.nonce = null, this.origin = rs(), this.ready = !1, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage);
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
class ia extends Application {
  constructor(e, r = {}) {
    super(r), this.bridge = e, this.nonce = foundry.utils.randomID(24), e.embedTransport || (e.embedTransport = new ra(e)), this.transport = e.embedTransport;
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
      src: `${vn()}/embed?nonce=${encodeURIComponent(this.nonce)}`
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
window.Pusher = ns;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new na();
Hooks.once("init", () => {
  sa(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = Xn, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", Yn, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), go(window.cyberpunkBridge), window.cyberpunkBridge.openAgent = () => {
    window.cyberpunkBridge._agentApp || (window.cyberpunkBridge._agentApp = new ia(window.cyberpunkBridge)), window.cyberpunkBridge._agentApp.render(!0);
  }, console.log("[Bridge] Cyberpunk Bridge Fully Online. Open the embedded Agent with: cyberpunkBridge.openAgent()");
});
Hooks.on("getSceneControlButtons", (o) => {
  const e = Array.isArray(o) ? o.find((r) => r.name === "token") : o == null ? void 0 : o.token;
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
function sa() {
  game.settings.settings.has(`${A}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
