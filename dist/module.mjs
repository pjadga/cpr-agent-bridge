var Dr = Object.defineProperty;
var Fr = (h, s, o) => s in h ? Dr(h, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : h[s] = o;
var Me = (h, s, o) => Fr(h, typeof s != "symbol" ? s + "" : s, o);
import.meta.hot && import.meta.hot.accept((h) => {
  console.log("Hot reloading module...");
});
function jr(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var mt = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(h, s) {
  (function(i, r) {
    h.exports = r();
  })(window, function() {
    return (
      /******/
      function(o) {
        var i = {};
        function r(c) {
          if (i[c])
            return i[c].exports;
          var l = i[c] = {
            /******/
            i: c,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return o[c].call(l.exports, l, l.exports, r), l.l = !0, l.exports;
        }
        return r.m = o, r.c = i, r.d = function(c, l, f) {
          r.o(c, l) || Object.defineProperty(c, l, { enumerable: !0, get: f });
        }, r.r = function(c) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(c, "__esModule", { value: !0 });
        }, r.t = function(c, l) {
          if (l & 1 && (c = r(c)), l & 8 || l & 4 && typeof c == "object" && c && c.__esModule) return c;
          var f = /* @__PURE__ */ Object.create(null);
          if (r.r(f), Object.defineProperty(f, "default", { enumerable: !0, value: c }), l & 2 && typeof c != "string") for (var d in c) r.d(f, d, (function(p) {
            return c[p];
          }).bind(null, d));
          return f;
        }, r.n = function(c) {
          var l = c && c.__esModule ? (
            /******/
            function() {
              return c.default;
            }
          ) : (
            /******/
            function() {
              return c;
            }
          );
          return r.d(l, "a", l), l;
        }, r.o = function(c, l) {
          return Object.prototype.hasOwnProperty.call(c, l);
        }, r.p = "", r(r.s = 2);
      }([
        /* 0 */
        /***/
        function(o, i, r) {
          var c = this && this.__extends || /* @__PURE__ */ function() {
            var S = function(y, k) {
              return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(R, x) {
                R.__proto__ = x;
              } || function(R, x) {
                for (var F in x) x.hasOwnProperty(F) && (R[F] = x[F]);
              }, S(y, k);
            };
            return function(y, k) {
              S(y, k);
              function R() {
                this.constructor = y;
              }
              y.prototype = k === null ? Object.create(k) : (R.prototype = k.prototype, new R());
            };
          }();
          Object.defineProperty(i, "__esModule", { value: !0 });
          var l = 256, f = (
            /** @class */
            function() {
              function S(y) {
                y === void 0 && (y = "="), this._paddingCharacter = y;
              }
              return S.prototype.encodedLength = function(y) {
                return this._paddingCharacter ? (y + 2) / 3 * 4 | 0 : (y * 8 + 5) / 6 | 0;
              }, S.prototype.encode = function(y) {
                for (var k = "", R = 0; R < y.length - 2; R += 3) {
                  var x = y[R] << 16 | y[R + 1] << 8 | y[R + 2];
                  k += this._encodeByte(x >>> 3 * 6 & 63), k += this._encodeByte(x >>> 2 * 6 & 63), k += this._encodeByte(x >>> 1 * 6 & 63), k += this._encodeByte(x >>> 0 * 6 & 63);
                }
                var F = y.length - R;
                if (F > 0) {
                  var x = y[R] << 16 | (F === 2 ? y[R + 1] << 8 : 0);
                  k += this._encodeByte(x >>> 3 * 6 & 63), k += this._encodeByte(x >>> 2 * 6 & 63), F === 2 ? k += this._encodeByte(x >>> 1 * 6 & 63) : k += this._paddingCharacter || "", k += this._paddingCharacter || "";
                }
                return k;
              }, S.prototype.maxDecodedLength = function(y) {
                return this._paddingCharacter ? y / 4 * 3 | 0 : (y * 6 + 7) / 8 | 0;
              }, S.prototype.decodedLength = function(y) {
                return this.maxDecodedLength(y.length - this._getPaddingLength(y));
              }, S.prototype.decode = function(y) {
                if (y.length === 0)
                  return new Uint8Array(0);
                for (var k = this._getPaddingLength(y), R = y.length - k, x = new Uint8Array(this.maxDecodedLength(R)), F = 0, L = 0, O = 0, j = 0, N = 0, q = 0, z = 0; L < R - 4; L += 4)
                  j = this._decodeChar(y.charCodeAt(L + 0)), N = this._decodeChar(y.charCodeAt(L + 1)), q = this._decodeChar(y.charCodeAt(L + 2)), z = this._decodeChar(y.charCodeAt(L + 3)), x[F++] = j << 2 | N >>> 4, x[F++] = N << 4 | q >>> 2, x[F++] = q << 6 | z, O |= j & l, O |= N & l, O |= q & l, O |= z & l;
                if (L < R - 1 && (j = this._decodeChar(y.charCodeAt(L)), N = this._decodeChar(y.charCodeAt(L + 1)), x[F++] = j << 2 | N >>> 4, O |= j & l, O |= N & l), L < R - 2 && (q = this._decodeChar(y.charCodeAt(L + 2)), x[F++] = N << 4 | q >>> 2, O |= q & l), L < R - 3 && (z = this._decodeChar(y.charCodeAt(L + 3)), x[F++] = q << 6 | z, O |= z & l), O !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return x;
              }, S.prototype._encodeByte = function(y) {
                var k = y;
                return k += 65, k += 25 - y >>> 8 & 6, k += 51 - y >>> 8 & -75, k += 61 - y >>> 8 & -15, k += 62 - y >>> 8 & 3, String.fromCharCode(k);
              }, S.prototype._decodeChar = function(y) {
                var k = l;
                return k += (42 - y & y - 44) >>> 8 & -l + y - 43 + 62, k += (46 - y & y - 48) >>> 8 & -l + y - 47 + 63, k += (47 - y & y - 58) >>> 8 & -l + y - 48 + 52, k += (64 - y & y - 91) >>> 8 & -l + y - 65 + 0, k += (96 - y & y - 123) >>> 8 & -l + y - 97 + 26, k;
              }, S.prototype._getPaddingLength = function(y) {
                var k = 0;
                if (this._paddingCharacter) {
                  for (var R = y.length - 1; R >= 0 && y[R] === this._paddingCharacter; R--)
                    k++;
                  if (y.length < 4 || k > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return k;
              }, S;
            }()
          );
          i.Coder = f;
          var d = new f();
          function p(S) {
            return d.encode(S);
          }
          i.encode = p;
          function m(S) {
            return d.decode(S);
          }
          i.decode = m;
          var b = (
            /** @class */
            function(S) {
              c(y, S);
              function y() {
                return S !== null && S.apply(this, arguments) || this;
              }
              return y.prototype._encodeByte = function(k) {
                var R = k;
                return R += 65, R += 25 - k >>> 8 & 6, R += 51 - k >>> 8 & -75, R += 61 - k >>> 8 & -13, R += 62 - k >>> 8 & 49, String.fromCharCode(R);
              }, y.prototype._decodeChar = function(k) {
                var R = l;
                return R += (44 - k & k - 46) >>> 8 & -l + k - 45 + 62, R += (94 - k & k - 96) >>> 8 & -l + k - 95 + 63, R += (47 - k & k - 58) >>> 8 & -l + k - 48 + 52, R += (64 - k & k - 91) >>> 8 & -l + k - 65 + 0, R += (96 - k & k - 123) >>> 8 & -l + k - 97 + 26, R;
              }, y;
            }(f)
          );
          i.URLSafeCoder = b;
          var _ = new b();
          function w(S) {
            return _.encode(S);
          }
          i.encodeURLSafe = w;
          function T(S) {
            return _.decode(S);
          }
          i.decodeURLSafe = T, i.encodedLength = function(S) {
            return d.encodedLength(S);
          }, i.maxDecodedLength = function(S) {
            return d.maxDecodedLength(S);
          }, i.decodedLength = function(S) {
            return d.decodedLength(S);
          };
        },
        /* 1 */
        /***/
        function(o, i, r) {
          Object.defineProperty(i, "__esModule", { value: !0 });
          var c = "utf8: invalid string", l = "utf8: invalid source encoding";
          function f(m) {
            for (var b = new Uint8Array(d(m)), _ = 0, w = 0; w < m.length; w++) {
              var T = m.charCodeAt(w);
              T < 128 ? b[_++] = T : T < 2048 ? (b[_++] = 192 | T >> 6, b[_++] = 128 | T & 63) : T < 55296 ? (b[_++] = 224 | T >> 12, b[_++] = 128 | T >> 6 & 63, b[_++] = 128 | T & 63) : (w++, T = (T & 1023) << 10, T |= m.charCodeAt(w) & 1023, T += 65536, b[_++] = 240 | T >> 18, b[_++] = 128 | T >> 12 & 63, b[_++] = 128 | T >> 6 & 63, b[_++] = 128 | T & 63);
            }
            return b;
          }
          i.encode = f;
          function d(m) {
            for (var b = 0, _ = 0; _ < m.length; _++) {
              var w = m.charCodeAt(_);
              if (w < 128)
                b += 1;
              else if (w < 2048)
                b += 2;
              else if (w < 55296)
                b += 3;
              else if (w <= 57343) {
                if (_ >= m.length - 1)
                  throw new Error(c);
                _++, b += 4;
              } else
                throw new Error(c);
            }
            return b;
          }
          i.encodedLength = d;
          function p(m) {
            for (var b = [], _ = 0; _ < m.length; _++) {
              var w = m[_];
              if (w & 128) {
                var T = void 0;
                if (w < 224) {
                  if (_ >= m.length)
                    throw new Error(l);
                  var S = m[++_];
                  if ((S & 192) !== 128)
                    throw new Error(l);
                  w = (w & 31) << 6 | S & 63, T = 128;
                } else if (w < 240) {
                  if (_ >= m.length - 1)
                    throw new Error(l);
                  var S = m[++_], y = m[++_];
                  if ((S & 192) !== 128 || (y & 192) !== 128)
                    throw new Error(l);
                  w = (w & 15) << 12 | (S & 63) << 6 | y & 63, T = 2048;
                } else if (w < 248) {
                  if (_ >= m.length - 2)
                    throw new Error(l);
                  var S = m[++_], y = m[++_], k = m[++_];
                  if ((S & 192) !== 128 || (y & 192) !== 128 || (k & 192) !== 128)
                    throw new Error(l);
                  w = (w & 15) << 18 | (S & 63) << 12 | (y & 63) << 6 | k & 63, T = 65536;
                } else
                  throw new Error(l);
                if (w < T || w >= 55296 && w <= 57343)
                  throw new Error(l);
                if (w >= 65536) {
                  if (w > 1114111)
                    throw new Error(l);
                  w -= 65536, b.push(String.fromCharCode(55296 | w >> 10)), w = 56320 | w & 1023;
                }
              }
              b.push(String.fromCharCode(w));
            }
            return b.join("");
          }
          i.decode = p;
        },
        /* 2 */
        /***/
        function(o, i, r) {
          o.exports = r(3).default;
        },
        /* 3 */
        /***/
        function(o, i, r) {
          r.r(i);
          class c {
            constructor(e, t) {
              this.lastId = 0, this.prefix = e, this.name = t;
            }
            create(e) {
              this.lastId++;
              var t = this.lastId, a = this.prefix + t, u = this.name + "[" + t + "]", g = !1, v = function() {
                g || (e.apply(null, arguments), g = !0);
              };
              return this[t] = v, { number: t, id: a, name: u, callback: v };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var l = new c("_pusher_script_", "Pusher.ScriptReceivers"), f = {
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
          }, d = f;
          class p {
            constructor(e) {
              this.options = e, this.receivers = e.receivers || l, this.loading = {};
            }
            load(e, t, a) {
              var u = this;
              if (u.loading[e] && u.loading[e].length > 0)
                u.loading[e].push(a);
              else {
                u.loading[e] = [a];
                var g = P.createScriptRequest(u.getPath(e, t)), v = u.receivers.create(function(C) {
                  if (u.receivers.remove(v), u.loading[e]) {
                    var A = u.loading[e];
                    delete u.loading[e];
                    for (var E = function(U) {
                      U || g.cleanup();
                    }, M = 0; M < A.length; M++)
                      A[M](C, E);
                  }
                });
                g.send(v);
              }
            }
            getRoot(e) {
              var t, a = P.getDocument().location.protocol;
              return e && e.useTLS || a === "https:" ? t = this.options.cdn_https : t = this.options.cdn_http, t.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, t) {
              return this.getRoot(t) + "/" + e + this.options.suffix + ".js";
            }
          }
          var m = new c("_pusher_dependencies", "Pusher.DependenciesReceivers"), b = new p({
            cdn_http: d.cdn_http,
            cdn_https: d.cdn_https,
            version: d.VERSION,
            suffix: d.dependency_suffix,
            receivers: m
          });
          const _ = {
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
          var T = { buildLogSuffix: function(n) {
            const e = "See:", t = _.urls[n];
            if (!t)
              return "";
            let a;
            return t.fullUrl ? a = t.fullUrl : t.path && (a = _.baseUrl + t.path), a ? `${e} ${a}` : "";
          } }, S;
          (function(n) {
            n.UserAuthentication = "user-authentication", n.ChannelAuthorization = "channel-authorization";
          })(S || (S = {}));
          class y extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class k extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class R extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class x extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class F extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class L extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class O extends Error {
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
          var z = function(n, e, t, a, u) {
            const g = P.createXHR();
            g.open("POST", t.endpoint, !0), g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var v in t.headers)
              g.setRequestHeader(v, t.headers[v]);
            if (t.headersProvider != null) {
              let C = t.headersProvider();
              for (var v in C)
                g.setRequestHeader(v, C[v]);
            }
            return g.onreadystatechange = function() {
              if (g.readyState === 4)
                if (g.status === 200) {
                  let C, A = !1;
                  try {
                    C = JSON.parse(g.responseText), A = !0;
                  } catch {
                    u(new N(200, `JSON returned from ${a.toString()} endpoint was invalid, yet status code was 200. Data was: ${g.responseText}`), null);
                  }
                  A && u(null, C);
                } else {
                  let C = "";
                  switch (a) {
                    case S.UserAuthentication:
                      C = T.buildLogSuffix("authenticationEndpoint");
                      break;
                    case S.ChannelAuthorization:
                      C = `Clients must be authorized to join private or presence channels. ${T.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  u(new N(g.status, `Unable to retrieve auth string from ${a.toString()} endpoint - received status: ${g.status} from ${t.endpoint}. ${C}`), null);
                }
            }, g.send(e), g;
          };
          function oe(n) {
            return At(Rt(n));
          }
          var J = String.fromCharCode, se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fe = function(n) {
            var e = n.charCodeAt(0);
            return e < 128 ? n : e < 2048 ? J(192 | e >>> 6) + J(128 | e & 63) : J(224 | e >>> 12 & 15) + J(128 | e >>> 6 & 63) + J(128 | e & 63);
          }, Rt = function(n) {
            return n.replace(/[^\x00-\x7F]/g, fe);
          }, Lt = function(n) {
            var e = [0, 2, 1][n.length % 3], t = n.charCodeAt(0) << 16 | (n.length > 1 ? n.charCodeAt(1) : 0) << 8 | (n.length > 2 ? n.charCodeAt(2) : 0), a = [
              se.charAt(t >>> 18),
              se.charAt(t >>> 12 & 63),
              e >= 2 ? "=" : se.charAt(t >>> 6 & 63),
              e >= 1 ? "=" : se.charAt(t & 63)
            ];
            return a.join("");
          }, At = window.btoa || function(n) {
            return n.replace(/[\s\S]{1,3}/g, Lt);
          };
          class Pt {
            constructor(e, t, a, u) {
              this.clear = t, this.timer = e(() => {
                this.timer && (this.timer = u(this.timer));
              }, a);
            }
            isRunning() {
              return this.timer !== null;
            }
            ensureAborted() {
              this.timer && (this.clear(this.timer), this.timer = null);
            }
          }
          var He = Pt;
          function Et(n) {
            window.clearTimeout(n);
          }
          function xt(n) {
            window.clearInterval(n);
          }
          class ee extends He {
            constructor(e, t) {
              super(setTimeout, Et, e, function(a) {
                return t(), null;
              });
            }
          }
          class Ot extends He {
            constructor(e, t) {
              super(setInterval, xt, e, function(a) {
                return t(), a;
              });
            }
          }
          var Mt = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(n) {
              return new ee(0, n);
            },
            method(n, ...e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return function(a) {
                return a[n].apply(a, t.concat(arguments));
              };
            }
          }, V = Mt;
          function W(n, ...e) {
            for (var t = 0; t < e.length; t++) {
              var a = e[t];
              for (var u in a)
                a[u] && a[u].constructor && a[u].constructor === Object ? n[u] = W(n[u] || {}, a[u]) : n[u] = a[u];
            }
            return n;
          }
          function Nt() {
            for (var n = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? n.push(arguments[e]) : n.push(pe(arguments[e]));
            return n.join(" : ");
          }
          function Be(n, e) {
            var t = Array.prototype.indexOf;
            if (n === null)
              return -1;
            if (t && n.indexOf === t)
              return n.indexOf(e);
            for (var a = 0, u = n.length; a < u; a++)
              if (n[a] === e)
                return a;
            return -1;
          }
          function Y(n, e) {
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && e(n[t], t, n);
          }
          function qe(n) {
            var e = [];
            return Y(n, function(t, a) {
              e.push(a);
            }), e;
          }
          function Dt(n) {
            var e = [];
            return Y(n, function(t) {
              e.push(t);
            }), e;
          }
          function ae(n, e, t) {
            for (var a = 0; a < n.length; a++)
              e.call(t || window, n[a], a, n);
          }
          function ze(n, e) {
            for (var t = [], a = 0; a < n.length; a++)
              t.push(e(n[a], a, n, t));
            return t;
          }
          function Ft(n, e) {
            var t = {};
            return Y(n, function(a, u) {
              t[u] = e(a);
            }), t;
          }
          function $e(n, e) {
            e = e || function(u) {
              return !!u;
            };
            for (var t = [], a = 0; a < n.length; a++)
              e(n[a], a, n, t) && t.push(n[a]);
            return t;
          }
          function Ge(n, e) {
            var t = {};
            return Y(n, function(a, u) {
              (e && e(a, u, n, t) || a) && (t[u] = a);
            }), t;
          }
          function jt(n) {
            var e = [];
            return Y(n, function(t, a) {
              e.push([a, t]);
            }), e;
          }
          function Ve(n, e) {
            for (var t = 0; t < n.length; t++)
              if (e(n[t], t, n))
                return !0;
            return !1;
          }
          function Ut(n, e) {
            for (var t = 0; t < n.length; t++)
              if (!e(n[t], t, n))
                return !1;
            return !0;
          }
          function Ht(n) {
            return Ft(n, function(e) {
              return typeof e == "object" && (e = pe(e)), encodeURIComponent(oe(e.toString()));
            });
          }
          function Bt(n) {
            var e = Ge(n, function(a) {
              return a !== void 0;
            }), t = ze(jt(Ht(e)), V.method("join", "=")).join("&");
            return t;
          }
          function qt(n) {
            var e = [], t = [];
            return function a(u, g) {
              var v, C, A;
              switch (typeof u) {
                case "object":
                  if (!u)
                    return null;
                  for (v = 0; v < e.length; v += 1)
                    if (e[v] === u)
                      return { $ref: t[v] };
                  if (e.push(u), t.push(g), Object.prototype.toString.apply(u) === "[object Array]")
                    for (A = [], v = 0; v < u.length; v += 1)
                      A[v] = a(u[v], g + "[" + v + "]");
                  else {
                    A = {};
                    for (C in u)
                      Object.prototype.hasOwnProperty.call(u, C) && (A[C] = a(u[C], g + "[" + JSON.stringify(C) + "]"));
                  }
                  return A;
                case "number":
                case "string":
                case "boolean":
                  return u;
              }
            }(n, "$");
          }
          function pe(n) {
            try {
              return JSON.stringify(n);
            } catch {
              return JSON.stringify(qt(n));
            }
          }
          class zt {
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
              var a = Nt.apply(this, arguments);
              Ee.log ? Ee.log(a) : Ee.logToConsole && e.bind(this)(a);
            }
          }
          var D = new zt(), $t = function(n, e, t, a, u) {
            (t.headers !== void 0 || t.headersProvider != null) && D.warn(`To send headers with the ${a.toString()} request, you must use AJAX, rather than JSONP.`);
            var g = n.nextAuthCallbackID.toString();
            n.nextAuthCallbackID++;
            var v = n.getDocument(), C = v.createElement("script");
            n.auth_callbacks[g] = function(M) {
              u(null, M);
            };
            var A = "Pusher.auth_callbacks['" + g + "']";
            C.src = t.endpoint + "?callback=" + encodeURIComponent(A) + "&" + e;
            var E = v.getElementsByTagName("head")[0] || v.documentElement;
            E.insertBefore(C, E.firstChild);
          }, Gt = $t;
          class Vt {
            constructor(e) {
              this.src = e;
            }
            send(e) {
              var t = this, a = "Error loading " + t.src;
              t.script = document.createElement("script"), t.script.id = e.id, t.script.src = t.src, t.script.type = "text/javascript", t.script.charset = "UTF-8", t.script.addEventListener ? (t.script.onerror = function() {
                e.callback(a);
              }, t.script.onload = function() {
                e.callback(null);
              }) : t.script.onreadystatechange = function() {
                (t.script.readyState === "loaded" || t.script.readyState === "complete") && e.callback(null);
              }, t.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (t.errorScript = document.createElement("script"), t.errorScript.id = e.id + "_error", t.errorScript.text = e.name + "('" + a + "');", t.script.async = t.errorScript.async = !1) : t.script.async = !0;
              var u = document.getElementsByTagName("head")[0];
              u.insertBefore(t.script, u.firstChild), t.errorScript && u.insertBefore(t.errorScript, t.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class Wt {
            constructor(e, t) {
              this.url = e, this.data = t;
            }
            send(e) {
              if (!this.request) {
                var t = Bt(this.data), a = this.url + "/" + e.number + "?" + t;
                this.request = P.createScriptRequest(a), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var Xt = function(n, e) {
            return function(t, a) {
              var u = "http" + (e ? "s" : "") + "://", g = u + (n.host || n.options.host) + n.options.path, v = P.createJSONPRequest(g, t), C = P.ScriptReceivers.create(function(A, E) {
                l.remove(C), v.cleanup(), E && E.host && (n.host = E.host), a && a(A, E);
              });
              v.send(C);
            };
          }, Kt = {
            name: "jsonp",
            getAgent: Xt
          }, Jt = Kt;
          function ke(n, e, t) {
            var a = n + (e.useTLS ? "s" : ""), u = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return a + "://" + u + t;
          }
          function _e(n, e) {
            var t = "/app/" + n, a = "?protocol=" + d.PROTOCOL + "&client=js&version=" + d.VERSION + (e ? "&" + e : "");
            return t + a;
          }
          var Yt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "") + _e(n, "flash=false");
              return ke("ws", e, t);
            }
          }, Qt = {
            getInitial: function(n, e) {
              var t = (e.httpPath || "/pusher") + _e(n);
              return ke("http", e, t);
            }
          }, Zt = {
            getInitial: function(n, e) {
              return ke("http", e, e.httpPath || "/pusher");
            },
            getPath: function(n, e) {
              return _e(n);
            }
          };
          class en {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Se(e)];
            }
            add(e, t, a) {
              var u = Se(e);
              this._callbacks[u] = this._callbacks[u] || [], this._callbacks[u].push({
                fn: t,
                context: a
              });
            }
            remove(e, t, a) {
              if (!e && !t && !a) {
                this._callbacks = {};
                return;
              }
              var u = e ? [Se(e)] : qe(this._callbacks);
              t || a ? this.removeCallback(u, t, a) : this.removeAllCallbacks(u);
            }
            removeCallback(e, t, a) {
              ae(e, function(u) {
                this._callbacks[u] = $e(this._callbacks[u] || [], function(g) {
                  return t && t !== g.fn || a && a !== g.context;
                }), this._callbacks[u].length === 0 && delete this._callbacks[u];
              }, this);
            }
            removeAllCallbacks(e) {
              ae(e, function(t) {
                delete this._callbacks[t];
              }, this);
            }
          }
          function Se(n) {
            return "_" + n;
          }
          class Q {
            constructor(e) {
              this.callbacks = new en(), this.global_callbacks = [], this.failThrough = e;
            }
            bind(e, t, a) {
              return this.callbacks.add(e, t, a), this;
            }
            bind_global(e) {
              return this.global_callbacks.push(e), this;
            }
            unbind(e, t, a) {
              return this.callbacks.remove(e, t, a), this;
            }
            unbind_global(e) {
              return e ? (this.global_callbacks = $e(this.global_callbacks || [], (t) => t !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, t, a) {
              for (var u = 0; u < this.global_callbacks.length; u++)
                this.global_callbacks[u](e, t);
              var g = this.callbacks.get(e), v = [];
              if (a ? v.push(t, a) : t && v.push(t), g && g.length > 0)
                for (var u = 0; u < g.length; u++)
                  g[u].fn.apply(g[u].context || window, v);
              else this.failThrough && this.failThrough(e, t);
              return this;
            }
          }
          class tn extends Q {
            constructor(e, t, a, u, g) {
              super(), this.initialize = P.transportConnectionInitializer, this.hooks = e, this.name = t, this.priority = a, this.key = u, this.options = g, this.state = "new", this.timeline = g.timeline, this.activityTimeout = g.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return V.defer(() => {
                  this.onError(t), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), D.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (V.defer(() => {
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
          class ie {
            constructor(e) {
              this.hooks = e;
            }
            isSupported(e) {
              return this.hooks.isSupported(e);
            }
            createConnection(e, t, a, u) {
              return new tn(this.hooks, e, t, a, u);
            }
          }
          var nn = new ie({
            urls: Yt,
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
          }), We = {
            urls: Qt,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Xe = W({
            getSocket: function(n) {
              return P.HTTPFactory.createStreamingSocket(n);
            }
          }, We), Ke = W({
            getSocket: function(n) {
              return P.HTTPFactory.createPollingSocket(n);
            }
          }, We), Je = {
            isSupported: function() {
              return P.isXHRSupported();
            }
          }, rn = new ie(W({}, Xe, Je)), sn = new ie(W({}, Ke, Je)), on = {
            ws: nn,
            xhr_streaming: rn,
            xhr_polling: sn
          }, ge = on, an = new ie({
            file: "sockjs",
            urls: Zt,
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
                js_path: b.getPath("sockjs", {
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
          }), Ye = {
            isSupported: function(n) {
              var e = P.isXDRSupported(n.useTLS);
              return e;
            }
          }, cn = new ie(W({}, Xe, Ye)), ln = new ie(W({}, Ke, Ye));
          ge.xdr_streaming = cn, ge.xdr_polling = ln, ge.sockjs = an;
          var un = ge;
          class hn extends Q {
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
          var dn = new hn();
          class fn {
            constructor(e, t, a) {
              this.manager = e, this.transport = t, this.minPingDelay = a.minPingDelay, this.maxPingDelay = a.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(e, t, a, u) {
              u = W({}, u, {
                activityTimeout: this.pingDelay
              });
              var g = this.transport.createConnection(e, t, a, u), v = null, C = function() {
                g.unbind("open", C), g.bind("closed", A), v = V.now();
              }, A = (E) => {
                if (g.unbind("closed", A), E.code === 1002 || E.code === 1003)
                  this.manager.reportDeath();
                else if (!E.wasClean && v) {
                  var M = V.now() - v;
                  M < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(M / 2, this.minPingDelay));
                }
              };
              return g.bind("open", C), g;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const Qe = {
            decodeMessage: function(n) {
              try {
                var e = JSON.parse(n.data), t = e.data;
                if (typeof t == "string")
                  try {
                    t = JSON.parse(e.data);
                  } catch {
                  }
                var a = {
                  event: e.event,
                  channel: e.channel,
                  data: t
                };
                return e.user_id && (a.user_id = e.user_id), a;
              } catch (u) {
                throw { type: "MessageParseError", error: u, data: n.data };
              }
            },
            encodeMessage: function(n) {
              return JSON.stringify(n);
            },
            processHandshake: function(n) {
              var e = Qe.decodeMessage(n);
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
          var te = Qe;
          class pn extends Q {
            constructor(e, t) {
              super(), this.id = e, this.transport = t, this.activityTimeout = t.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(e) {
              return this.transport.send(e);
            }
            send_event(e, t, a) {
              var u = { event: e, data: t };
              return a && (u.channel = a), D.debug("Event sent", u), this.send(te.encodeMessage(u));
            }
            ping() {
              this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
            }
            close() {
              this.transport.close();
            }
            bindListeners() {
              var e = {
                message: (a) => {
                  var u;
                  try {
                    u = te.decodeMessage(a);
                  } catch (g) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: g,
                      data: a.data
                    });
                  }
                  if (u !== void 0) {
                    switch (D.debug("Event recd", u), u.event) {
                      case "pusher:error":
                        this.emit("error", {
                          type: "PusherError",
                          data: u.data
                        });
                        break;
                      case "pusher:ping":
                        this.emit("ping");
                        break;
                      case "pusher:pong":
                        this.emit("pong");
                        break;
                    }
                    this.emit("message", u);
                  }
                },
                activity: () => {
                  this.emit("activity");
                },
                error: (a) => {
                  this.emit("error", a);
                },
                closed: (a) => {
                  t(), a && a.code && this.handleCloseEvent(a), this.transport = null, this.emit("closed");
                }
              }, t = () => {
                Y(e, (a, u) => {
                  this.transport.unbind(u, a);
                });
              };
              Y(e, (a, u) => {
                this.transport.bind(u, a);
              });
            }
            handleCloseEvent(e) {
              var t = te.getCloseAction(e), a = te.getCloseError(e);
              a && this.emit("error", a), t && this.emit(t, { action: t, error: a });
            }
          }
          class gn {
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
                  t = te.processHandshake(e);
                } catch (a) {
                  this.finish("error", { error: a }), this.transport.close();
                  return;
                }
                t.action === "connected" ? this.finish("connected", {
                  connection: new pn(t.id, this.transport),
                  activityTimeout: t.activityTimeout
                }) : (this.finish(t.action, { error: t.error }), this.transport.close());
              }, this.onClosed = (e) => {
                this.unbindListeners();
                var t = te.getCloseAction(e) || "backoff", a = te.getCloseError(e);
                this.finish(t, { error: a });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, t) {
              this.callback(W({ transport: this.transport, action: e }, t));
            }
          }
          class mn {
            constructor(e, t) {
              this.timeline = e, this.options = t || {};
            }
            send(e, t) {
              this.timeline.isEmpty() || this.timeline.send(P.TimelineTransport.getAgent(this, e), t);
            }
          }
          class Ce extends Q {
            constructor(e, t) {
              super(function(a, u) {
                D.debug("No callbacks on " + e + " for " + a);
              }), this.name = e, this.pusher = t, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, t) {
              return t(null, { auth: "" });
            }
            trigger(e, t) {
              if (e.indexOf("client-") !== 0)
                throw new y("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var a = T.buildLogSuffix("triggeringClientEvents");
                D.warn(`Client event triggered before channel 'subscription_succeeded' event . ${a}`);
              }
              return this.pusher.send_event(e, t, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(e) {
              var t = e.event, a = e.data;
              if (t === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(e);
              else if (t === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(e);
              else if (t.indexOf("pusher_internal:") !== 0) {
                var u = {};
                this.emit(t, a, u);
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
                e ? (this.subscriptionPending = !1, D.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
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
          class Te extends Ce {
            authorize(e, t) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: e
              }, t);
            }
          }
          class yn {
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
              Y(this.members, (t, a) => {
                e(this.get(a));
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
          var vn = function(n, e, t, a) {
            function u(g) {
              return g instanceof t ? g : new t(function(v) {
                v(g);
              });
            }
            return new (t || (t = Promise))(function(g, v) {
              function C(M) {
                try {
                  E(a.next(M));
                } catch (U) {
                  v(U);
                }
              }
              function A(M) {
                try {
                  E(a.throw(M));
                } catch (U) {
                  v(U);
                }
              }
              function E(M) {
                M.done ? g(M.value) : u(M.value).then(C, A);
              }
              E((a = a.apply(n, e || [])).next());
            });
          };
          class bn extends Te {
            constructor(e, t) {
              super(e, t), this.members = new yn();
            }
            authorize(e, t) {
              super.authorize(e, (a, u) => vn(this, void 0, void 0, function* () {
                if (!a)
                  if (u = u, u.channel_data != null) {
                    var g = JSON.parse(u.channel_data);
                    this.members.setMyID(g.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let v = T.buildLogSuffix("authorizationEndpoint");
                    D.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${v}, or the user should be signed in.`), t("Invalid auth response");
                    return;
                  }
                t(a, u);
              }));
            }
            handleEvent(e) {
              var t = e.event;
              if (t.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(e);
              else {
                var a = e.data, u = {};
                e.user_id && (u.user_id = e.user_id), this.emit(t, a, u);
              }
            }
            handleInternalEvent(e) {
              var t = e.event, a = e.data;
              switch (t) {
                case "pusher_internal:subscription_succeeded":
                  this.handleSubscriptionSucceededEvent(e);
                  break;
                case "pusher_internal:subscription_count":
                  this.handleSubscriptionCountEvent(e);
                  break;
                case "pusher_internal:member_added":
                  var u = this.members.addMember(a);
                  this.emit("pusher:member_added", u);
                  break;
                case "pusher_internal:member_removed":
                  var g = this.members.removeMember(a);
                  g && this.emit("pusher:member_removed", g);
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
          var wn = r(1), Ie = r(0);
          class kn extends Te {
            constructor(e, t, a) {
              super(e, t), this.key = null, this.nacl = a;
            }
            authorize(e, t) {
              super.authorize(e, (a, u) => {
                if (a) {
                  t(a, u);
                  return;
                }
                let g = u.shared_secret;
                if (!g) {
                  t(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(Ie.decode)(g), delete u.shared_secret, t(null, u);
              });
            }
            trigger(e, t) {
              throw new L("Client events are not currently supported for encrypted channels");
            }
            handleEvent(e) {
              var t = e.event, a = e.data;
              if (t.indexOf("pusher_internal:") === 0 || t.indexOf("pusher:") === 0) {
                super.handleEvent(e);
                return;
              }
              this.handleEncryptedEvent(t, a);
            }
            handleEncryptedEvent(e, t) {
              if (!this.key) {
                D.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!t.ciphertext || !t.nonce) {
                D.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + t);
                return;
              }
              let a = Object(Ie.decode)(t.ciphertext);
              if (a.length < this.nacl.secretbox.overheadLength) {
                D.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${a.length}`);
                return;
              }
              let u = Object(Ie.decode)(t.nonce);
              if (u.length < this.nacl.secretbox.nonceLength) {
                D.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${u.length}`);
                return;
              }
              let g = this.nacl.secretbox.open(a, u, this.key);
              if (g === null) {
                D.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (v, C) => {
                  if (v) {
                    D.error(`Failed to make a request to the authEndpoint: ${C}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (g = this.nacl.secretbox.open(a, u, this.key), g === null) {
                    D.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(e, this.getDataToEmit(g));
                });
                return;
              }
              this.emit(e, this.getDataToEmit(g));
            }
            getDataToEmit(e) {
              let t = Object(wn.decode)(e);
              try {
                return JSON.parse(t);
              } catch {
                return t;
              }
            }
          }
          class _n extends Q {
            constructor(e, t) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = t, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var a = P.getNetwork();
              a.bind("online", () => {
                this.timeline.info({ netinfo: "online" }), (this.state === "connecting" || this.state === "unavailable") && this.retryIn(0);
              }), a.bind("offline", () => {
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
            send_event(e, t, a) {
              return this.connection ? this.connection.send_event(e, t, a) : !1;
            }
            disconnect() {
              this.disconnectInternally(), this.updateState("disconnected");
            }
            isUsingTLS() {
              return this.usingTLS;
            }
            startConnecting() {
              var e = (t, a) => {
                t ? this.runner = this.strategy.connect(0, e) : a.action === "error" ? (this.emit("error", {
                  type: "HandshakeError",
                  error: a.error
                }), this.timeline.error({ handshakeError: a.error })) : (this.abortConnecting(), this.handshakeCallbacks[a.action](a));
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new ee(e || 0, () => {
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
              let e = (t) => (a) => {
                a.error && this.emit("error", { type: "WebSocketError", error: a.error }), t(a);
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
              var a = this.state;
              if (this.state = e, a !== e) {
                var u = e;
                u === "connected" && (u += " with new socket ID " + t.socket_id), D.debug("State changed", a + " -> " + u), this.timeline.info({ state: e, params: t }), this.emit("state_change", { previous: a, current: e }), this.emit(e, t);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class Sn {
            constructor() {
              this.channels = {};
            }
            add(e, t) {
              return this.channels[e] || (this.channels[e] = Cn(e, t)), this.channels[e];
            }
            all() {
              return Dt(this.channels);
            }
            find(e) {
              return this.channels[e];
            }
            remove(e) {
              var t = this.channels[e];
              return delete this.channels[e], t;
            }
            disconnect() {
              Y(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function Cn(n, e) {
            if (n.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return Z.createEncryptedChannel(n, e, e.config.nacl);
              let t = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", a = T.buildLogSuffix("encryptedChannelSupport");
              throw new L(`${t}. ${a}`);
            } else {
              if (n.indexOf("private-") === 0)
                return Z.createPrivateChannel(n, e);
              if (n.indexOf("presence-") === 0)
                return Z.createPresenceChannel(n, e);
              if (n.indexOf("#") === 0)
                throw new k('Cannot create a channel with name "' + n + '".');
              return Z.createChannel(n, e);
            }
          }
          var Tn = {
            createChannels() {
              return new Sn();
            },
            createConnectionManager(n, e) {
              return new _n(n, e);
            },
            createChannel(n, e) {
              return new Ce(n, e);
            },
            createPrivateChannel(n, e) {
              return new Te(n, e);
            },
            createPresenceChannel(n, e) {
              return new bn(n, e);
            },
            createEncryptedChannel(n, e, t) {
              return new kn(n, e, t);
            },
            createTimelineSender(n, e) {
              return new mn(n, e);
            },
            createHandshake(n, e) {
              return new gn(n, e);
            },
            createAssistantToTheTransportManager(n, e, t) {
              return new fn(n, e, t);
            }
          }, Z = Tn;
          class Ze {
            constructor(e) {
              this.options = e || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(e) {
              return Z.createAssistantToTheTransportManager(this, e, {
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
          class ne {
            constructor(e, t) {
              this.strategies = e, this.loop = !!t.loop, this.failFast = !!t.failFast, this.timeout = t.timeout, this.timeoutLimit = t.timeoutLimit;
            }
            isSupported() {
              return Ve(this.strategies, V.method("isSupported"));
            }
            connect(e, t) {
              var a = this.strategies, u = 0, g = this.timeout, v = null, C = (A, E) => {
                E ? t(null, E) : (u = u + 1, this.loop && (u = u % a.length), u < a.length ? (g && (g = g * 2, this.timeoutLimit && (g = Math.min(g, this.timeoutLimit))), v = this.tryStrategy(a[u], e, { timeout: g, failFast: this.failFast }, C)) : t(!0));
              };
              return v = this.tryStrategy(a[u], e, { timeout: g, failFast: this.failFast }, C), {
                abort: function() {
                  v.abort();
                },
                forceMinPriority: function(A) {
                  e = A, v && v.forceMinPriority(A);
                }
              };
            }
            tryStrategy(e, t, a, u) {
              var g = null, v = null;
              return a.timeout > 0 && (g = new ee(a.timeout, function() {
                v.abort(), u(!0);
              })), v = e.connect(t, function(C, A) {
                C && g && g.isRunning() && !a.failFast || (g && g.ensureAborted(), u(C, A));
              }), {
                abort: function() {
                  g && g.ensureAborted(), v.abort();
                },
                forceMinPriority: function(C) {
                  v.forceMinPriority(C);
                }
              };
            }
          }
          class Re {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return Ve(this.strategies, V.method("isSupported"));
            }
            connect(e, t) {
              return In(this.strategies, e, function(a, u) {
                return function(g, v) {
                  if (u[a].error = g, g) {
                    Rn(u) && t(!0);
                    return;
                  }
                  ae(u, function(C) {
                    C.forceMinPriority(v.transport.priority);
                  }), t(null, v);
                };
              });
            }
          }
          function In(n, e, t) {
            var a = ze(n, function(u, g, v, C) {
              return u.connect(e, t(g, C));
            });
            return {
              abort: function() {
                ae(a, Ln);
              },
              forceMinPriority: function(u) {
                ae(a, function(g) {
                  g.forceMinPriority(u);
                });
              }
            };
          }
          function Rn(n) {
            return Ut(n, function(e) {
              return !!e.error;
            });
          }
          function Ln(n) {
            !n.error && !n.aborted && (n.abort(), n.aborted = !0);
          }
          class An {
            constructor(e, t, a) {
              this.strategy = e, this.transports = t, this.ttl = a.ttl || 1800 * 1e3, this.usingTLS = a.useTLS, this.timeline = a.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var a = this.usingTLS, u = Pn(a), g = u && u.cacheSkipCount ? u.cacheSkipCount : 0, v = [this.strategy];
              if (u && u.timestamp + this.ttl >= V.now()) {
                var C = this.transports[u.transport];
                C && (["ws", "wss"].includes(u.transport) || g > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: u.transport,
                  latency: u.latency
                }), v.push(new ne([C], {
                  timeout: u.latency * 2 + 1e3,
                  failFast: !0
                }))) : g++);
              }
              var A = V.now(), E = v.pop().connect(e, function M(U, ve) {
                U ? (et(a), v.length > 0 ? (A = V.now(), E = v.pop().connect(e, M)) : t(U)) : (En(a, ve.transport.name, V.now() - A, g), t(null, ve));
              });
              return {
                abort: function() {
                  E.abort();
                },
                forceMinPriority: function(M) {
                  e = M, E && E.forceMinPriority(M);
                }
              };
            }
          }
          function Le(n) {
            return "pusherTransport" + (n ? "TLS" : "NonTLS");
          }
          function Pn(n) {
            var e = P.getLocalStorage();
            if (e)
              try {
                var t = e[Le(n)];
                if (t)
                  return JSON.parse(t);
              } catch {
                et(n);
              }
            return null;
          }
          function En(n, e, t, a) {
            var u = P.getLocalStorage();
            if (u)
              try {
                u[Le(n)] = pe({
                  timestamp: V.now(),
                  transport: e,
                  latency: t,
                  cacheSkipCount: a
                });
              } catch {
              }
          }
          function et(n) {
            var e = P.getLocalStorage();
            if (e)
              try {
                delete e[Le(n)];
              } catch {
              }
          }
          class me {
            constructor(e, { delay: t }) {
              this.strategy = e, this.options = { delay: t };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var a = this.strategy, u, g = new ee(this.options.delay, function() {
                u = a.connect(e, t);
              });
              return {
                abort: function() {
                  g.ensureAborted(), u && u.abort();
                },
                forceMinPriority: function(v) {
                  e = v, u && u.forceMinPriority(v);
                }
              };
            }
          }
          class ce {
            constructor(e, t, a) {
              this.test = e, this.trueBranch = t, this.falseBranch = a;
            }
            isSupported() {
              var e = this.test() ? this.trueBranch : this.falseBranch;
              return e.isSupported();
            }
            connect(e, t) {
              var a = this.test() ? this.trueBranch : this.falseBranch;
              return a.connect(e, t);
            }
          }
          class xn {
            constructor(e) {
              this.strategy = e;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, t) {
              var a = this.strategy.connect(e, function(u, g) {
                g && a.abort(), t(u, g);
              });
              return a;
            }
          }
          function le(n) {
            return function() {
              return n.isSupported();
            };
          }
          var On = function(n, e, t) {
            var a = {};
            function u(ht, xr, Or, Mr, Nr) {
              var dt = t(n, ht, xr, Or, Mr, Nr);
              return a[ht] = dt, dt;
            }
            var g = Object.assign({}, e, {
              hostNonTLS: n.wsHost + ":" + n.wsPort,
              hostTLS: n.wsHost + ":" + n.wssPort,
              httpPath: n.wsPath
            }), v = Object.assign({}, g, {
              useTLS: !0
            }), C = Object.assign({}, e, {
              hostNonTLS: n.httpHost + ":" + n.httpPort,
              hostTLS: n.httpHost + ":" + n.httpsPort,
              httpPath: n.httpPath
            }), A = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, E = new Ze({
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), M = new Ze({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: n.activityTimeout
            }), U = u("ws", "ws", 3, g, E), ve = u("wss", "ws", 3, v, E), Rr = u("sockjs", "sockjs", 1, C), it = u("xhr_streaming", "xhr_streaming", 1, C, M), Lr = u("xdr_streaming", "xdr_streaming", 1, C, M), ot = u("xhr_polling", "xhr_polling", 1, C), Ar = u("xdr_polling", "xdr_polling", 1, C), at = new ne([U], A), Pr = new ne([ve], A), Er = new ne([Rr], A), ct = new ne([
              new ce(le(it), it, Lr)
            ], A), lt = new ne([
              new ce(le(ot), ot, Ar)
            ], A), ut = new ne([
              new ce(le(ct), new Re([
                ct,
                new me(lt, { delay: 4e3 })
              ]), lt)
            ], A), xe = new ce(le(ut), ut, Er), Oe;
            return e.useTLS ? Oe = new Re([
              at,
              new me(xe, { delay: 2e3 })
            ]) : Oe = new Re([
              at,
              new me(Pr, { delay: 2e3 }),
              new me(xe, { delay: 5e3 })
            ]), new An(new xn(new ce(le(U), Oe, xe)), a, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, Mn = On, Nn = function() {
            var n = this;
            n.timeline.info(n.buildTimelineMessage({
              transport: n.name + (n.options.useTLS ? "s" : "")
            })), n.hooks.isInitialized() ? n.changeState("initialized") : n.hooks.file ? (n.changeState("initializing"), b.load(n.hooks.file, { useTLS: n.options.useTLS }, function(e, t) {
              n.hooks.isInitialized() ? (n.changeState("initialized"), t(!0)) : (e && n.onError(e), n.onClose(), t(!1));
            })) : n.onClose();
          }, Dn = {
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
          }, Fn = Dn;
          const jn = 256 * 1024;
          class Un extends Q {
            constructor(e, t, a) {
              super(), this.hooks = e, this.method = t, this.url = a;
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
                var a = this.advanceBuffer(t);
                if (a)
                  this.emit("chunk", { status: e, data: a });
                else
                  break;
              }
              this.isBufferTooLong(t) && this.emit("buffer_too_long");
            }
            advanceBuffer(e) {
              var t = e.slice(this.position), a = t.indexOf(`
`);
              return a !== -1 ? (this.position += a + 1, t.slice(0, a)) : null;
            }
            isBufferTooLong(e) {
              return this.position === e.length && e.length > jn;
            }
          }
          var Ae;
          (function(n) {
            n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 3] = "CLOSED";
          })(Ae || (Ae = {}));
          var re = Ae, Hn = 1;
          class Bn {
            constructor(e, t) {
              this.hooks = e, this.session = nt(1e3) + "/" + Gn(8), this.location = qn(t), this.readyState = re.CONNECTING, this.openStream();
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
              if (this.readyState === re.OPEN)
                try {
                  return P.createSocketRequest("POST", tt(zn(this.location, this.session))).start(e), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(e, t, a) {
              this.closeStream(), this.readyState = re.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: t,
                wasClean: a
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === re.OPEN && this.onActivity();
                var t, a = e.data.slice(0, 1);
                switch (a) {
                  case "o":
                    t = JSON.parse(e.data.slice(1) || "{}"), this.onOpen(t);
                    break;
                  case "a":
                    t = JSON.parse(e.data.slice(1) || "[]");
                    for (var u = 0; u < t.length; u++)
                      this.onEvent(t[u]);
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
              this.readyState === re.CONNECTING ? (e && e.hostname && (this.location.base = $n(this.location.base, e.hostname)), this.readyState = re.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
            }
            onEvent(e) {
              this.readyState === re.OPEN && this.onmessage && this.onmessage({ data: e });
            }
            onActivity() {
              this.onactivity && this.onactivity();
            }
            onError(e) {
              this.onerror && this.onerror(e);
            }
            openStream() {
              this.stream = P.createSocketRequest("POST", tt(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                V.defer(() => {
                  this.onError(e), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function qn(n) {
            var e = /([^\?]*)\/*(\??.*)/.exec(n);
            return {
              base: e[1],
              queryString: e[2]
            };
          }
          function zn(n, e) {
            return n.base + "/" + e + "/xhr_send";
          }
          function tt(n) {
            var e = n.indexOf("?") === -1 ? "?" : "&";
            return n + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + Hn++;
          }
          function $n(n, e) {
            var t = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);
            return t[1] + e + t[3];
          }
          function nt(n) {
            return P.randomInt(n);
          }
          function Gn(n) {
            for (var e = [], t = 0; t < n; t++)
              e.push(nt(32).toString(32));
            return e.join("");
          }
          var Vn = Bn, Wn = {
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
          }, Xn = Wn, Kn = {
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
          }, Jn = Kn, Yn = {
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
          }, Qn = Yn, Zn = {
            createStreamingSocket(n) {
              return this.createSocket(Xn, n);
            },
            createPollingSocket(n) {
              return this.createSocket(Jn, n);
            },
            createSocket(n, e) {
              return new Vn(n, e);
            },
            createXHR(n, e) {
              return this.createRequest(Qn, n, e);
            },
            createRequest(n, e, t) {
              return new Un(n, e, t);
            }
          }, rt = Zn;
          rt.createXDR = function(n, e) {
            return this.createRequest(Fn, n, e);
          };
          var er = rt, tr = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: m,
            getDefaultStrategy: Mn,
            Transports: un,
            transportConnectionInitializer: Nn,
            HTTPFactory: er,
            TimelineTransport: Jt,
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
              window.JSON ? e() : b.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: z, jsonp: Gt };
            },
            onDocumentBody(n) {
              document.body ? n() : setTimeout(() => {
                this.onDocumentBody(n);
              }, 0);
            },
            createJSONPRequest(n, e) {
              return new Wt(n, e);
            },
            createScriptRequest(n) {
              return new Vt(n);
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
              return dn;
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
          }, P = tr, Pe;
          (function(n) {
            n[n.ERROR = 3] = "ERROR", n[n.INFO = 6] = "INFO", n[n.DEBUG = 7] = "DEBUG";
          })(Pe || (Pe = {}));
          var ye = Pe;
          class nr {
            constructor(e, t, a) {
              this.key = e, this.session = t, this.events = [], this.options = a || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, t) {
              e <= this.options.level && (this.events.push(W({}, t, { timestamp: V.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(ye.ERROR, e);
            }
            info(e) {
              this.log(ye.INFO, e);
            }
            debug(e) {
              this.log(ye.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, t) {
              var a = W({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], e(a, (u, g) => {
                u || this.sent++, t && t(u, g);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class rr {
            constructor(e, t, a, u) {
              this.name = e, this.priority = t, this.transport = a, this.options = u || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(e, t) {
              if (this.isSupported()) {
                if (this.priority < e)
                  return st(new x(), t);
              } else return st(new j(), t);
              var a = !1, u = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), g = null, v = function() {
                u.unbind("initialized", v), u.connect();
              }, C = function() {
                g = Z.createHandshake(u, function(U) {
                  a = !0, M(), t(null, U);
                });
              }, A = function(U) {
                M(), t(U);
              }, E = function() {
                M();
                var U;
                U = pe(u), t(new F(U));
              }, M = function() {
                u.unbind("initialized", v), u.unbind("open", C), u.unbind("error", A), u.unbind("closed", E);
              };
              return u.bind("initialized", v), u.bind("open", C), u.bind("error", A), u.bind("closed", E), u.initialize(), {
                abort: () => {
                  a || (M(), g ? g.close() : u.close());
                },
                forceMinPriority: (U) => {
                  a || this.priority < U && (g ? g.close() : u.close());
                }
              };
            }
          }
          function st(n, e) {
            return V.defer(function() {
              e(n);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: sr } = P;
          var ir = function(n, e, t, a, u, g) {
            var v = sr[t];
            if (!v)
              throw new O(t);
            var C = (!n.enabledTransports || Be(n.enabledTransports, e) !== -1) && (!n.disabledTransports || Be(n.disabledTransports, e) === -1), A;
            return C ? (u = Object.assign({ ignoreNullOrigin: n.ignoreNullOrigin }, u), A = new rr(e, a, g ? g.getAssistant(v) : v, u)) : A = or, A;
          }, or = {
            isSupported: function() {
              return !1;
            },
            connect: function(n, e) {
              var t = V.defer(function() {
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
          function ar(n) {
            if (n == null)
              throw "You must pass an options object";
            if (n.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in n && D.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const cr = (n, e) => {
            var t = "socket_id=" + encodeURIComponent(n.socketId);
            for (var a in e.params)
              t += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(e.params[a]);
            if (e.paramsProvider != null) {
              let u = e.paramsProvider();
              for (var a in u)
                t += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(u[a]);
            }
            return t;
          };
          var lr = (n) => {
            if (typeof P.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const a = cr(e, n);
              P.getAuthorizers()[n.transport](P, a, n, S.UserAuthentication, t);
            };
          };
          const ur = (n, e) => {
            var t = "socket_id=" + encodeURIComponent(n.socketId);
            t += "&channel_name=" + encodeURIComponent(n.channelName);
            for (var a in e.params)
              t += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(e.params[a]);
            if (e.paramsProvider != null) {
              let u = e.paramsProvider();
              for (var a in u)
                t += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(u[a]);
            }
            return t;
          };
          var hr = (n) => {
            if (typeof P.getAuthorizers()[n.transport] > "u")
              throw `'${n.transport}' is not a recognized auth transport`;
            return (e, t) => {
              const a = ur(e, n);
              P.getAuthorizers()[n.transport](P, a, n, S.ChannelAuthorization, t);
            };
          };
          const dr = (n, e, t) => {
            const a = {
              authTransport: e.transport,
              authEndpoint: e.endpoint,
              auth: {
                params: e.params,
                headers: e.headers
              }
            };
            return (u, g) => {
              const v = n.channel(u.channelName);
              t(v, a).authorize(u.socketId, g);
            };
          };
          function fr(n, e) {
            let t = {
              activityTimeout: n.activityTimeout || d.activityTimeout,
              cluster: n.cluster,
              httpPath: n.httpPath || d.httpPath,
              httpPort: n.httpPort || d.httpPort,
              httpsPort: n.httpsPort || d.httpsPort,
              pongTimeout: n.pongTimeout || d.pongTimeout,
              statsHost: n.statsHost || d.stats_host,
              unavailableTimeout: n.unavailableTimeout || d.unavailableTimeout,
              wsPath: n.wsPath || d.wsPath,
              wsPort: n.wsPort || d.wsPort,
              wssPort: n.wssPort || d.wssPort,
              enableStats: vr(n),
              httpHost: pr(n),
              useTLS: yr(n),
              wsHost: gr(n),
              userAuthenticator: br(n),
              channelAuthorizer: kr(n, e)
            };
            return "disabledTransports" in n && (t.disabledTransports = n.disabledTransports), "enabledTransports" in n && (t.enabledTransports = n.enabledTransports), "ignoreNullOrigin" in n && (t.ignoreNullOrigin = n.ignoreNullOrigin), "timelineParams" in n && (t.timelineParams = n.timelineParams), "nacl" in n && (t.nacl = n.nacl), t;
          }
          function pr(n) {
            return n.httpHost ? n.httpHost : n.cluster ? `sockjs-${n.cluster}.pusher.com` : d.httpHost;
          }
          function gr(n) {
            return n.wsHost ? n.wsHost : mr(n.cluster);
          }
          function mr(n) {
            return `ws-${n}.pusher.com`;
          }
          function yr(n) {
            return P.getProtocol() === "https:" ? !0 : n.forceTLS !== !1;
          }
          function vr(n) {
            return "enableStats" in n ? n.enableStats : "disableStats" in n ? !n.disableStats : !1;
          }
          function br(n) {
            const e = Object.assign(Object.assign({}, d.userAuthentication), n.userAuthentication);
            return "customHandler" in e && e.customHandler != null ? e.customHandler : lr(e);
          }
          function wr(n, e) {
            let t;
            return "channelAuthorization" in n ? t = Object.assign(Object.assign({}, d.channelAuthorization), n.channelAuthorization) : (t = {
              transport: n.authTransport || d.authTransport,
              endpoint: n.authEndpoint || d.authEndpoint
            }, "auth" in n && ("params" in n.auth && (t.params = n.auth.params), "headers" in n.auth && (t.headers = n.auth.headers)), "authorizer" in n && (t.customHandler = dr(e, t, n.authorizer))), t;
          }
          function kr(n, e) {
            const t = wr(n, e);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : hr(t);
          }
          class _r extends Q {
            constructor(e) {
              super(function(t, a) {
                D.debug(`No callbacks on watchlist events for ${t}`);
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
          function Sr() {
            let n, e;
            return { promise: new Promise((a, u) => {
              n = a, e = u;
            }), resolve: n, reject: e };
          }
          var Cr = Sr;
          class Tr extends Q {
            constructor(e) {
              super(function(t, a) {
                D.debug("No callbacks on user for " + t);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (t, a) => {
                if (t) {
                  D.warn(`Error during signin: ${t}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: a.auth,
                  user_data: a.user_data
                });
              }, this.pusher = e, this.pusher.connection.bind("state_change", ({ previous: t, current: a }) => {
                t !== "connected" && a === "connected" && this._signin(), t === "connected" && a !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new _r(e), this.pusher.connection.bind("message", (t) => {
                var a = t.event;
                a === "pusher:signin_success" && this._onSigninSuccess(t.data), this.serverToUserChannel && this.serverToUserChannel.name === t.channel && this.serverToUserChannel.handleEvent(t);
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
                D.error(`Failed parsing user data after signin: ${e.user_data}`), this._cleanup();
                return;
              }
              if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                D.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                return;
              }
              this._signinDoneResolve(), this._subscribeChannels();
            }
            _subscribeChannels() {
              const e = (t) => {
                t.subscriptionPending && t.subscriptionCancelled ? t.reinstateSubscription() : !t.subscriptionPending && this.pusher.connection.state === "connected" && t.subscribe();
              };
              this.serverToUserChannel = new Ce(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((t, a) => {
                t.indexOf("pusher_internal:") === 0 || t.indexOf("pusher:") === 0 || this.emit(t, a);
              }), e(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: e, resolve: t } = Cr();
              e.done = !1;
              const a = () => {
                e.done = !0;
              };
              e.then(a).catch(a), this.signinDonePromise = e, this._signinDoneResolve = t;
            }
          }
          class G {
            static ready() {
              G.isReady = !0;
              for (var e = 0, t = G.instances.length; e < t; e++)
                G.instances[e].connect();
            }
            static getClientFeatures() {
              return qe(Ge({ ws: P.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, t) {
              Ir(e), ar(t), this.key = e, this.config = fr(t, this), this.channels = Z.createChannels(), this.global_emitter = new Q(), this.sessionID = P.randomInt(1e9), this.timeline = new nr(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: G.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: ye.INFO,
                version: d.VERSION
              }), this.config.enableStats && (this.timelineSender = Z.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + P.TimelineTransport.name
              }));
              var a = (u) => P.getDefaultStrategy(this.config, u, ir);
              this.connection = Z.createConnectionManager(this.key, {
                getStrategy: a,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (u) => {
                var g = u.event, v = g.indexOf("pusher_internal:") === 0;
                if (u.channel) {
                  var C = this.channel(u.channel);
                  C && C.handleEvent(u);
                }
                v || this.global_emitter.emit(u.event, u.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (u) => {
                D.warn(u);
              }), G.instances.push(this), this.timeline.info({ instances: G.instances.length }), this.user = new Tr(this), G.isReady && this.connect();
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
                this.timelineSenderTimer = new Ot(6e4, function() {
                  t.send(e);
                });
              }
            }
            disconnect() {
              this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
            }
            bind(e, t, a) {
              return this.global_emitter.bind(e, t, a), this;
            }
            unbind(e, t, a) {
              return this.global_emitter.unbind(e, t, a), this;
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
            send_event(e, t, a) {
              return this.connection.send_event(e, t, a);
            }
            shouldUseTLS() {
              return this.config.useTLS;
            }
            signin() {
              this.user.signin();
            }
          }
          G.instances = [], G.isReady = !1, G.logToConsole = !1, G.Runtime = P, G.ScriptReceivers = P.ScriptReceivers, G.DependenciesReceivers = P.DependenciesReceivers, G.auth_callbacks = P.auth_callbacks;
          var Ee = i.default = G;
          function Ir(n) {
            if (n == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          P.setup(G);
        }
        /******/
      ])
    );
  });
})(mt);
var Ur = mt.exports;
const Hr = /* @__PURE__ */ jr(Ur), I = "cpr-agent", yt = "itdsiqtx8cpskowawl1p", Br = "https://agent.surrealdisco.co.uk", ue = {
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
}, qr = [6, 12, 25, 50, 100, 200, 400, 800], ft = {
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
};
function vt(h) {
  var s, o;
  return ft[(s = h == null ? void 0 : h.system) == null ? void 0 : s.weaponType] || ft[(o = h == null ? void 0 : h.system) == null ? void 0 : o.variety] || "Pistol";
}
function bt(h, s) {
  const o = qr.findIndex((r) => s <= r);
  let i = o !== -1 ? ue[h][o] : 99;
  return Array.isArray(ue[h]) && typeof ue[h][0] == "string" && (i = ue[h][Math.min(o !== -1 ? o : 0, ue[h].length - 1)]), i;
}
function he(h) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
    return typeof s;
  } : function(s) {
    return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
  }, he(h);
}
function H(h, s) {
  if (!(h instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
function zr(h, s) {
  for (var o = 0; o < s.length; o++) {
    var i = s[o];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(h, i.key, i);
  }
}
function B(h, s, o) {
  return s && zr(h.prototype, s), Object.defineProperty(h, "prototype", {
    writable: !1
  }), h;
}
function de() {
  return de = Object.assign || function(h) {
    for (var s = 1; s < arguments.length; s++) {
      var o = arguments[s];
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (h[i] = o[i]);
    }
    return h;
  }, de.apply(this, arguments);
}
function X(h, s) {
  if (typeof s != "function" && s !== null)
    throw new TypeError("Super expression must either be null or a function");
  h.prototype = Object.create(s && s.prototype, {
    constructor: {
      value: h,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(h, "prototype", {
    writable: !1
  }), s && Ne(h, s);
}
function be(h) {
  return be = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, be(h);
}
function Ne(h, s) {
  return Ne = Object.setPrototypeOf || function(i, r) {
    return i.__proto__ = r, i;
  }, Ne(h, s);
}
function $r() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Gr(h) {
  if (h === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return h;
}
function Vr(h, s) {
  if (s && (typeof s == "object" || typeof s == "function"))
    return s;
  if (s !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gr(h);
}
function K(h) {
  var s = $r();
  return function() {
    var i = be(h), r;
    if (s) {
      var c = be(this).constructor;
      r = Reflect.construct(i, arguments, c);
    } else
      r = i.apply(this, arguments);
    return Vr(this, r);
  };
}
var Fe = /* @__PURE__ */ function() {
  function h() {
    H(this, h);
  }
  return B(h, [{
    key: "listenForWhisper",
    value: (
      /**
       * Listen for a whisper event on the channel instance.
       */
      function(o, i) {
        return this.listen(".client-" + o, i);
      }
    )
    /**
     * Listen for an event on the channel instance.
     */
  }, {
    key: "notification",
    value: function(o) {
      return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated", o);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */
  }, {
    key: "stopListeningForWhisper",
    value: function(o, i) {
      return this.stopListening(".client-" + o, i);
    }
  }]), h;
}(), wt = /* @__PURE__ */ function() {
  function h(s) {
    H(this, h), this.namespace = s;
  }
  return B(h, [{
    key: "format",
    value: function(o) {
      return [".", "\\"].includes(o.charAt(0)) ? o.substring(1) : (this.namespace && (o = this.namespace + "." + o), o.replace(/\./g, "\\"));
    }
    /**
     * Set the event namespace.
     */
  }, {
    key: "setNamespace",
    value: function(o) {
      this.namespace = o;
    }
  }]), h;
}();
function Wr(h) {
  try {
    new h();
  } catch (s) {
    if (s.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var je = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o(i, r, c) {
    var l;
    return H(this, o), l = s.call(this), l.name = r, l.pusher = i, l.options = c, l.eventFormatter = new wt(l.options.namespace), l.subscribe(), l;
  }
  return B(o, [{
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
    value: function(r, c) {
      return this.on(this.eventFormatter.format(r), c), this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(r) {
      var c = this;
      return this.subscription.bind_global(function(l, f) {
        if (!l.startsWith("pusher:")) {
          var d = c.options.namespace.replace(/\./g, "\\"), p = l.startsWith(d) ? l.substring(d.length + 1) : "." + l;
          r(p, f);
        }
      }), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(r, c) {
      return c ? this.subscription.unbind(this.eventFormatter.format(r), c) : this.subscription.unbind(this.eventFormatter.format(r)), this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */
  }, {
    key: "stopListeningToAll",
    value: function(r) {
      return r ? this.subscription.unbind_global(r) : this.subscription.unbind_global(), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(r) {
      return this.on("pusher:subscription_succeeded", function() {
        r();
      }), this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */
  }, {
    key: "error",
    value: function(r) {
      return this.on("pusher:subscription_error", function(c) {
        r(c);
      }), this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(r, c) {
      return this.subscription.bind(r, c), this;
    }
  }]), o;
}(Fe), kt = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(r, c) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(r), c), this;
      }
    )
  }]), o;
}(je), Xr = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(r, c) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(r), c), this;
      }
    )
  }]), o;
}(je), Kr = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(r) {
        return this.on("pusher:subscription_succeeded", function(c) {
          r(Object.keys(c.members).map(function(l) {
            return c.members[l];
          }));
        }), this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(r) {
      return this.on("pusher:member_added", function(c) {
        r(c.info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(r, c) {
      return this.pusher.channels.channels[this.name].trigger("client-".concat(r), c), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(r) {
      return this.on("pusher:member_removed", function(c) {
        r(c.info);
      }), this;
    }
  }]), o;
}(kt), _t = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o(i, r, c) {
    var l;
    return H(this, o), l = s.call(this), l.events = {}, l.listeners = {}, l.name = r, l.socket = i, l.options = c, l.eventFormatter = new wt(l.options.namespace), l.subscribe(), l;
  }
  return B(o, [{
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
    value: function(r, c) {
      return this.on(this.eventFormatter.format(r), c), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(r, c) {
      return this.unbindEvent(this.eventFormatter.format(r), c), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(r) {
      return this.on("connect", function(c) {
        r(c);
      }), this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(r) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */
  }, {
    key: "on",
    value: function(r, c) {
      var l = this;
      return this.listeners[r] = this.listeners[r] || [], this.events[r] || (this.events[r] = function(f, d) {
        l.name === f && l.listeners[r] && l.listeners[r].forEach(function(p) {
          return p(d);
        });
      }, this.socket.on(r, this.events[r])), this.listeners[r].push(c), this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function() {
      var r = this;
      Object.keys(this.events).forEach(function(c) {
        r.unbindEvent(c);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function(r, c) {
      this.listeners[r] = this.listeners[r] || [], c && (this.listeners[r] = this.listeners[r].filter(function(l) {
        return l !== c;
      })), (!c || this.listeners[r].length === 0) && (this.events[r] && (this.socket.removeListener(r, this.events[r]), delete this.events[r]), delete this.listeners[r]);
    }
  }]), o;
}(Fe), St = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(r, c) {
        return this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(r),
          data: c
        }), this;
      }
    )
  }]), o;
}(_t), Jr = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(r) {
        return this.on("presence:subscribed", function(c) {
          r(c.map(function(l) {
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
    value: function(r) {
      return this.on("presence:joining", function(c) {
        return r(c.user_info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(r, c) {
      return this.socket.emit("client event", {
        channel: this.name,
        event: "client-".concat(r),
        data: c
      }), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(r) {
      return this.on("presence:leaving", function(c) {
        return r(c.user_info);
      }), this;
    }
  }]), o;
}(St), we = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
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
    value: function(r, c) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(r) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(r, c) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(r) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(r) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(r, c) {
      return this;
    }
  }]), o;
}(Fe), Ct = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(r, c) {
        return this;
      }
    )
  }]), o;
}(we), Yr = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(r, c) {
        return this;
      }
    )
  }]), o;
}(we), Qr = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    return H(this, o), s.apply(this, arguments);
  }
  return B(o, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(r) {
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(r) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(r, c) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(r) {
      return this;
    }
  }]), o;
}(Ct), Ue = /* @__PURE__ */ function() {
  function h(s) {
    H(this, h), this._defaultOptions = {
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
    }, this.setOptions(s), this.connect();
  }
  return B(h, [{
    key: "setOptions",
    value: function(o) {
      this.options = de(this._defaultOptions, o);
      var i = this.csrfToken();
      return i && (this.options.auth.headers["X-CSRF-TOKEN"] = i, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = i), i = this.options.bearerToken, i && (this.options.auth.headers.Authorization = "Bearer " + i, this.options.userAuthentication.headers.Authorization = "Bearer " + i), o;
    }
    /**
     * Extract the CSRF token from the page.
     */
  }, {
    key: "csrfToken",
    value: function() {
      var o;
      return typeof window < "u" && window.Laravel && window.Laravel.csrfToken ? window.Laravel.csrfToken : this.options.csrfToken ? this.options.csrfToken : typeof document < "u" && typeof document.querySelector == "function" && (o = document.querySelector('meta[name="csrf-token"]')) ? o.getAttribute("content") : null;
    }
  }]), h;
}(), pt = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    var i;
    return H(this, o), i = s.apply(this, arguments), i.channels = {}, i;
  }
  return B(o, [{
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
    value: function(r, c, l) {
      return this.channel(r).listen(c, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(r) {
      return this.channels[r] || (this.channels[r] = new je(this.pusher, r, this.options)), this.channels[r];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(r) {
      return this.channels["private-" + r] || (this.channels["private-" + r] = new kt(this.pusher, "private-" + r, this.options)), this.channels["private-" + r];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(r) {
      return this.channels["private-encrypted-" + r] || (this.channels["private-encrypted-" + r] = new Xr(this.pusher, "private-encrypted-" + r, this.options)), this.channels["private-encrypted-" + r];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(r) {
      return this.channels["presence-" + r] || (this.channels["presence-" + r] = new Kr(this.pusher, "presence-" + r, this.options)), this.channels["presence-" + r];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(r) {
      var c = this, l = [r, "private-" + r, "private-encrypted-" + r, "presence-" + r];
      l.forEach(function(f, d) {
        c.leaveChannel(f);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(r) {
      this.channels[r] && (this.channels[r].unsubscribe(), delete this.channels[r]);
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
  }]), o;
}(Ue), gt = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    var i;
    return H(this, o), i = s.apply(this, arguments), i.channels = {}, i;
  }
  return B(o, [{
    key: "connect",
    value: function() {
      var r = this, c = this.getSocketIO();
      return this.socket = c(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(r.channels).forEach(function(l) {
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
    value: function(r, c, l) {
      return this.channel(r).listen(c, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(r) {
      return this.channels[r] || (this.channels[r] = new _t(this.socket, r, this.options)), this.channels[r];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(r) {
      return this.channels["private-" + r] || (this.channels["private-" + r] = new St(this.socket, "private-" + r, this.options)), this.channels["private-" + r];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(r) {
      return this.channels["presence-" + r] || (this.channels["presence-" + r] = new Jr(this.socket, "presence-" + r, this.options)), this.channels["presence-" + r];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(r) {
      var c = this, l = [r, "private-" + r, "presence-" + r];
      l.forEach(function(f) {
        c.leaveChannel(f);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(r) {
      this.channels[r] && (this.channels[r].unsubscribe(), delete this.channels[r]);
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
  }]), o;
}(Ue), Zr = /* @__PURE__ */ function(h) {
  X(o, h);
  var s = K(o);
  function o() {
    var i;
    return H(this, o), i = s.apply(this, arguments), i.channels = {}, i;
  }
  return B(o, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(r, c, l) {
      return new we();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(r) {
      return new we();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(r) {
      return new Ct();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(r) {
      return new Yr();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(r) {
      return new Qr();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(r) {
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(r) {
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
  }]), o;
}(Ue), es = /* @__PURE__ */ function() {
  function h(s) {
    H(this, h), this.options = s, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return B(h, [{
    key: "channel",
    value: function(o) {
      return this.connector.channel(o);
    }
    /**
     * Create a new connection.
     */
  }, {
    key: "connect",
    value: function() {
      if (this.options.broadcaster == "reverb")
        this.connector = new pt(de(de({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new pt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new gt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new Zr(this.options);
      else if (typeof this.options.broadcaster == "function" && Wr(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(he(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
    value: function(o) {
      return this.connector.presenceChannel(o);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(o) {
      this.connector.leave(o);
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(o) {
      this.connector.leaveChannel(o);
    }
    /**
     * Leave all channels.
     */
  }, {
    key: "leaveAllChannels",
    value: function() {
      for (var o in this.connector.channels)
        this.leaveChannel(o);
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(o, i, r) {
      return this.connector.listen(o, i, r);
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "private",
    value: function(o) {
      return this.connector.privateChannel(o);
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivate",
    value: function(o) {
      if (this.connector instanceof gt)
        throw new Error("Broadcaster ".concat(he(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
      return this.connector.encryptedPrivateChannel(o);
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : he(Turbo)) === "object" && this.registerTurboRequestInterceptor();
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerVueRequestInterceptor",
    value: function() {
      var o = this;
      Vue.http.interceptors.push(function(i, r) {
        o.socketId() && i.headers.set("X-Socket-ID", o.socketId()), r();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function() {
      var o = this;
      axios.interceptors.request.use(function(i) {
        return o.socketId() && (i.headers["X-Socket-Id"] = o.socketId()), i;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function() {
      var o = this;
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(i, r, c) {
        o.socketId() && c.setRequestHeader("X-Socket-Id", o.socketId());
      });
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerTurboRequestInterceptor",
    value: function() {
      var o = this;
      document.addEventListener("turbo:before-fetch-request", function(i) {
        i.detail.fetchOptions.headers["X-Socket-Id"] = o.socketId();
      });
    }
  }]), h;
}();
function ts(h, s = 6) {
  return !h || h.length <= s * 2 + 3 ? h : `${h.substring(0, s)}...${h.substring(h.length - s)}`;
}
function De(h, s, o = {}) {
  for (let i in h) {
    const r = h[i];
    r !== null && typeof r == "object" && !Array.isArray(r) && !(r instanceof foundry.utils.Color) ? De(r, `${s}${i}.`, o) : o[`${s}${i}`] = r;
  }
  return o;
}
async function ns(h, s, o, i = null) {
  return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${s}`, "color: #00ffff; font-weight: bold;"), h._isCapturingRoll = !0, game.settings.get("core", "rollMode"), i && await game.settings.set("core", "rollMode", i), new Promise(async (r, c) => {
    let l = !1;
    const f = renderTemplate, d = function(p, m) {
      return p && typeof p == "string" && p.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${p}`, "color: #00ff00;", m), l = !0, renderTemplate = f, r({
        success: !0,
        total: m.resultTotal,
        isCriticalSuccess: m.wasCritSuccess ? m.wasCritSuccess() : m.isCriticalSuccess || !1,
        isCriticalFailure: m.wasCritFail ? m.wasCritFail() : m.isCriticalFailure || !1,
        label: m.rollTitle,
        rollMode: i || game.settings.get("core", "rollMode"),
        rawRoll: m
      })), f.apply(this, arguments);
    };
    renderTemplate = d, setTimeout(async () => {
      l || (renderTemplate = f, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), r({ success: !1, error: "Timed out waiting for render" }));
    }, 5e3);
    try {
      await o();
    } catch {
      renderTemplate = f, r({ success: !1, error: "Trigger failed" });
    }
  });
}
class rs extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-assignment-menu",
      title: "Agent Character Assignment",
      width: 500,
      classes: ["form"]
    });
  }
  async _renderInner(s) {
    let o = `
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
    for (let i of s.users) {
      const r = ts(i.agentLink);
      if (o += `<tr><td style="padding: 5px 0;"><strong>${i.name}</strong></td>`, i.hasKey) {
        o += '<td style="color: #00ff00;">✔ Linked</td>', o += `<td><small><code title="${i.agentLink || ""}">${r || "Pending..."}</code></small></td>`, o += `<td><select class="character-select" data-userid="${i.id}" style="width: 100%;">
                <option value="">- None -</option>`;
        for (let c of s.characters) {
          const l = c.id === i.characterId ? "selected" : "";
          o += `<option value="${c.id}" ${l}>${c.name}</option>`;
        }
        o += "</select></td>", o += `<td><button type="button" class="refresh-user" data-userid="${i.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
      } else
        o += `<td style="color: #ff0000;">❌ Missing</td>
                <td><small>-</small></td>
                <td><select disabled style="width: 100%;"><option>- Key Missing -</option></select></td>
                <td><button type="button" class="refresh-user" data-userid="${i.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
      o += "</tr>";
    }
    return o += `</table>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button type="button" id="save-agent-assignments"><i class="fas fa-save"></i> Save Assignments</button>
        <button type="button" id="refresh-all-users"><i class="fas fa-sync-alt"></i> Refresh All Users</button>
        </div>
        </div>`, $(o);
  }
  getData() {
    const s = game.users.map((i) => {
      var r;
      return {
        id: i.id,
        name: i.name,
        isGM: i.isGM,
        hasKey: !!i.getFlag(I, "hasApiKey"),
        agentLink: i.getFlag(I, "agent-link"),
        characterId: ((r = i.character) == null ? void 0 : r.id) || ""
      };
    }), o = game.actors.filter((i) => i.type === "character").map((i) => ({
      id: i.id,
      name: i.name
    }));
    return { users: s, characters: o };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(s) {
    super.activateListeners(s), s.find("#save-agent-assignments").click(async (o) => {
      o.preventDefault();
      let i = 0;
      const r = [];
      if (s.find(".character-select").each((c, l) => {
        var m;
        const f = l.dataset.userid, d = l.value, p = game.users.get(f);
        if (p) {
          const b = d === "" || d === "null" ? null : d;
          (((m = p.character) == null ? void 0 : m.id) || null) !== b && (r.push({ _id: p.id, character: b }), i++);
        }
      }), r.length > 0) {
        await User.updateDocuments(r), ui.notifications.info(`Cyberpunk Bridge: Updated ${i} player assignments!`);
        for (let c of r) {
          const l = game.users.get(c._id), f = l == null ? void 0 : l.getFlag(I, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: f || c._id,
            // Use agent-link as primary ID for Laravel
            actorId: c.character,
            character: c.character,
            isGM: l.isGM
          });
        }
        window.cyberpunkBridge.syncPlayerLink();
      } else
        ui.notifications.info("Cyberpunk Bridge: No assignment changes made.");
      this.close();
    }), s.find(".refresh-user").click(async (o) => {
      o.preventDefault();
      const i = o.currentTarget.dataset.userid, r = game.users.get(i);
      r && (await r.unsetFlag(I, "agent-link"), await r.unsetFlag(I, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${r.name}. They will need to re-sync.`), this.render(!0));
    }), s.find("#refresh-all-users").click(async (o) => {
      o.preventDefault();
      for (let i of game.users)
        await i.unsetFlag(I, "agent-link"), await i.unsetFlag(I, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
function ss(h) {
  game.settings.registerMenu(I, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: rs,
    restricted: !0
    // GM Only
  }), game.settings.register(I, "apiUrl", {
    name: "Agent URL",
    hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
    scope: "world",
    // URL is usually the same for everyone
    config: !0,
    type: String,
    default: Br,
    onChange: () => {
      game.user.isGM && h.reconnect(), h.syncPlayerLink();
    }
  }), game.settings.register(I, "reverbHost", {
    name: "Reverb Host (override)",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => h.reconnect()
  }), game.settings.register(I, "reverbPort", {
    name: "Reverb Port",
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => h.reconnect()
  }), game.settings.register(I, "reverbUseSSL", {
    name: "Reverb Use SSL (wss)",
    scope: "world",
    config: !0,
    type: Boolean,
    default: !0,
    onChange: () => h.reconnect()
  }), game.settings.register(I, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: yt,
    onChange: () => h.reconnect()
  }), game.settings.register(I, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (s) => {
      await game.user.setFlag(I, "hasApiKey", !!s), game.user.isGM && h.reconnect(), h.syncPlayerLink();
    }
  }), game.settings.register(I, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && h.reconnect();
    }
  }), game.settings.register(I, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function is(h, s, { type: o, requestId: i, actorId: r }) {
  const c = game.actors.get(r);
  if (!c) {
    console.warn(`⚠️ Actor ID ${r} not found in this world.`);
    return;
  }
  await c.update(s.changes), ui.notifications.info(`💾 Sync: ${c.name} updated.`), await h.sendResponse({ type: "CONFIRMATION", action: o, actorId: r, success: !0, requestId: i });
}
async function os(h, s, { requestId: o }) {
  let i = s.actorId, r = game.user;
  const c = s.agentLink || s.agent_link || s.foundryUserId || s.requestId;
  if (c && (r = game.users.find((l) => l.getFlag(I, "agent-link") === c) || game.users.get(c) || (c === game.user.id ? game.user : null)), r || (r = game.user), !i) {
    const l = r.character;
    l && (i = l.id);
  }
  if (i !== null) {
    const l = game.actors.get(i);
    if (l) {
      const f = l.toObject(), d = {
        _id: l.id,
        name: l.name,
        type: l.type,
        img: f.img,
        system: f.system,
        items: (f.items || []).map((p) => ({
          _id: p._id,
          name: p.name,
          type: p.type,
          img: p.img,
          system: p.system
        })),
        flags: f.flags && f.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": f.flags["cyberpunk-red-core"] } : {}
      };
      await h.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: d, requestId: o, isGM: r.isGM, agentLink: r.getFlag(I, "agent-link") || r.id });
      return;
    }
  }
  await h.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: !1, requestId: o, isGM: r.isGM, agentLink: r.getFlag(I, "agent-link") || r.id });
}
async function as(h, s, { requestId: o, actorId: i }) {
  let r = game.user;
  const c = s.agentLink || s.agent_link || s.foundryUserId || s.requestId;
  c && (r = game.users.find((d) => d.getFlag(I, "agent-link") === c) || game.users.get(c) || (c === game.user.id ? game.user : null)), r || (r = game.user);
  function l(d) {
    var m;
    return ((m = canvas.tokens.placeables.filter((b) => {
      var _;
      return ((_ = b.actor) == null ? void 0 : _.id) === d;
    })[0]) == null ? void 0 : m.id) ?? null;
  }
  let f = [];
  r.isGM ? f = game.actors.filter((d) => d.type === "character" || d.type === "mook").map((d) => {
    var m, b;
    const p = (m = Object.entries(d.ownership || {}).find(([_, w]) => {
      const T = game.users.get(_);
      return T && !T.isGM && w >= 3;
    })) == null ? void 0 : m[0];
    return {
      name: d.name,
      actorId: d.id,
      tokenId: l(d.id),
      agentLink: (p ? (b = game.users.get(p)) == null ? void 0 : b.getFlag(I, "agent-link") : null) || p || r.getFlag(I, "agent-link") || r.id
    };
  }) : (f = canvas.tokens.placeables.filter((d) => d.actor && (d.actor.type === "character" || d.actor.type === "mook")).filter((d) => d.actor.testUserPermission(r, "OWNER")).map((d) => {
    var m, b;
    const p = (m = Object.entries(d.actor.ownership || {}).find(([_, w]) => {
      const T = game.users.get(_);
      return T && !T.isGM && w >= 3;
    })) == null ? void 0 : m[0];
    return {
      name: d.name,
      actorId: d.actor.id,
      tokenId: l(d.actor.id),
      agentLink: (p ? (b = game.users.get(p)) == null ? void 0 : b.getFlag(I, "agent-link") : null) || p || null
    };
  }), r.character && (f.some((p) => p.actorId === r.character.id) || f.push({
    name: r.character.name,
    actorId: r.character.id,
    tokenId: l(r.character.id),
    agentLink: r.getFlag(I, "agent-link") || r.id
  })), !r.isGM && r.character && (f = f.filter((d) => d.actorId === r.character.id))), await h.sendResponse({ type: "ACTORS_DATA", actorId: i, actors: f, requestId: o, isGM: r.isGM, agentLink: r.getFlag(I, "agent-link") || r.id });
}
async function cs(h, s, { type: o, requestId: i, actorId: r }) {
  const c = game.actors.get(r);
  if (!c) {
    console.warn(`Actor ID ${r} not found in this world.`);
    return;
  }
  const l = c.items.get(s.itemId);
  if (!l) {
    console.warn(`Item ID ${s.itemId} not found on actor ${c.name}.`);
    return;
  }
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await h.sendResponse({ type: "CONFIRMATION", action: o, actorId: r, success: !0, requestId: i });
}
async function ls(h, s, { requestId: o, actorId: i }) {
  const r = game.actors.get(i);
  if (r) {
    const c = r.items.get(s.itemId);
    if (c) {
      const l = `items.${s.itemId}.system.equipped`;
      await c.update({ "system.equipped": s.state }), await h.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [l]: s.state }, success: !0, requestId: o });
    }
  }
}
async function us(h, s, { requestId: o, actorId: i }) {
  const r = game.actors.get(i);
  if (r) {
    const c = r.items.get(s.weaponId), l = s.ammoId ? r.items.get(s.ammoId) : null, f = async () => {
      await c.reload();
      const d = {
        [`items.${s.weaponId}.system.magazine`]: {
          value: c.system.magazine.value,
          max: c.system.magazine.max
        },
        [`items.${s.weaponId}.system.installedItems`]: {
          list: [...c.system.installedItems.list],
          slots: c.system.installedItems.slots,
          usedSlots: c.system.installedItems.usedSlots
        }
      };
      l && (d[`items.${l.id}.system.amount`] = l.system.amount), r.items.filter((m) => m.type === "ammo").forEach((m) => {
        d[`items.${m.id}.system.amount`] = m.system.amount;
      }), await h.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: d, success: !0, requestId: o });
    };
    if (l) {
      let d = c.getInstalledItems("ammo");
      d && d.length > 0 && c.uninstallItems(d), setTimeout(function() {
        c.installItems([l]);
      }, 500), setTimeout(async () => {
        await f();
      }, 1500);
    } else
      await f();
  }
}
async function hs(h, s, { requestId: o, actorId: i }) {
  const r = game.actors.get(i);
  if (!r) return;
  const c = r.items.get(s.cyberdeckId), l = r.items.get(s.programId);
  if (!c || !l) return;
  const f = c.system.installedItems.usedSlots || 0, d = c.system.installedItems.slots || 0, p = l.system.size || 1;
  if (f + p > d) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const m = c.system.installedItems.list || [];
  if (m.includes(s.programId)) return;
  const b = [...m, s.programId], _ = f + p;
  await c.update({
    "system.installedItems.list": b,
    "system.installedItems.usedSlots": _
  }), await h.sendResponse({
    type: "SHEET_DELTA",
    actorId: i,
    delta: {
      [`items.${s.cyberdeckId}.system.installedItems.list`]: b,
      [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: _
    },
    success: !0,
    requestId: o
  });
}
async function ds(h, s, { requestId: o, actorId: i }) {
  const r = game.actors.get(i);
  if (!r) return;
  const c = r.items.get(s.cyberdeckId), l = r.items.get(s.programId);
  if (!c) return;
  const f = c.system.installedItems.list || [];
  if (!f.includes(s.programId)) return;
  const d = f.filter((w) => w !== s.programId), p = l && l.system.size || 1, m = c.system.installedItems.usedSlots || 0, b = Math.max(0, m - p);
  await c.update({
    "system.installedItems.list": d,
    "system.installedItems.usedSlots": b
  });
  const _ = {
    [`items.${s.cyberdeckId}.system.installedItems.list`]: d,
    [`items.${s.cyberdeckId}.system.installedItems.usedSlots`]: b
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), _[`items.${s.programId}.system.isRezzed`] = !1), await h.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: _, success: !0, requestId: o });
}
async function fs(h, s, { requestId: o, actorId: i }) {
  const r = game.actors.get(i);
  if (r) {
    const c = r.items.get(s.programId);
    c && (await c.update({ "system.isRezzed": s.targetState }), await h.sendResponse({
      type: "SHEET_DELTA",
      actorId: i,
      delta: { [`items.${s.programId}.system.isRezzed`]: s.targetState },
      success: !0,
      requestId: o
    }));
  }
}
async function ps(h, s, { requestId: o, actorId: i }) {
  var c, l;
  const r = game.actors.get(i);
  if (r) {
    const f = document.createElement("a");
    f.dataset.rollType = s.rollType, f.dataset.cyberdeckId = s.cyberdeckId, f.dataset.rollTitle = s.programName, f.dataset.interfaceAbility = s.programName, f.dataset.itemId = s.cyberdeckId, f.dataset.programId = s.programId, f.dataset.executionType = s.executionType;
    const d = async () => {
      await r.sheet._onRoll({
        type: "click",
        currentTarget: f
      });
    }, p = await h.rollAndCapture(i, d, s.rollMode);
    p.success && await h.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: o,
      actorId: i,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: s.programName,
      rawRoll: {
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: p.label,
        resultTotal: (c = p.rawRoll) == null ? void 0 : c.resultTotal,
        rollTitle: (l = p.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function gs(h, s, { requestId: o, actorId: i }) {
  var l, f;
  const r = game.actors.get(i), c = r.items.get(s.weaponId);
  if (r && c) {
    const d = async () => {
      await r.sheet._onRoll({
        "data-roll-type": "damage",
        "data-item-id": c.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "damage",
          "data-item-id": c.id
        }
      });
    }, p = await h.rollAndCapture(i, d, s.rollMode);
    p.success && await h.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: o,
      actorId: i,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: `${c.name} (Damage)`,
      rawRoll: {
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: p.label,
        resultTotal: (l = p.rawRoll) == null ? void 0 : l.resultTotal,
        rollTitle: (f = p.rawRoll) == null ? void 0 : f.rollTitle
      },
      success: !0
    });
  }
}
async function ms(h, s, { requestId: o, actorId: i }) {
  var c, l;
  const r = game.actors.get(i);
  if (r) {
    const f = async () => {
      await r.sheet._onRoll({
        "data-roll-type": "deathsave",
        "data-roll-title": "Death Save",
        type: "click",
        currentTarget: {
          "data-roll-type": "deathsave",
          "data-roll-title": "Death Save"
        }
      });
    }, d = await h.rollAndCapture(i, f, s.rollMode);
    if (d.success) {
      const p = r.system.derivedStats.deathsave || {};
      await h.sendResponse({
        type: "ROLL_RESULT",
        rollMode: d.rollMode,
        requestId: o,
        actorId: i,
        total: d.total,
        isCriticalSuccess: d.isCriticalSuccess,
        isCriticalFailure: d.isCriticalFailure,
        label: "Death Save",
        rawRoll: {
          total: d.total,
          isCriticalSuccess: d.isCriticalSuccess,
          isCriticalFailure: d.isCriticalFailure,
          label: d.label,
          resultTotal: (c = d.rawRoll) == null ? void 0 : c.resultTotal,
          rollTitle: (l = d.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      }), await h.sendResponse({
        type: "SHEET_DELTA",
        actorId: i,
        delta: { "system.derivedStats.deathsave": p },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function ys(h, s, { requestId: o, actorId: i }) {
  var f, d;
  const r = game.actors.get(i), c = async () => {
    await r.sheet._onRoll({
      "data-roll-type": "facedown",
      "data-roll-title": "Face Down",
      type: "click",
      currentTarget: {
        "data-roll-type": "facedown",
        "data-roll-title": "Face Down"
      }
    });
  }, l = await h.rollAndCapture(i, c, s.rollMode);
  l.success && await h.sendResponse({
    type: "ROLL_RESULT",
    rollMode: l.rollMode,
    requestId: o,
    actorId: i,
    total: l.total,
    isCriticalSuccess: l.isCriticalSuccess,
    isCriticalFailure: l.isCriticalFailure,
    rawRoll: {
      total: l.total,
      isCriticalSuccess: l.isCriticalSuccess,
      isCriticalFailure: l.isCriticalFailure,
      label: l.label,
      resultTotal: (f = l.rawRoll) == null ? void 0 : f.resultTotal,
      rollTitle: (d = l.rawRoll) == null ? void 0 : d.rollTitle
    },
    success: !0
  });
}
async function vs(h, s, { requestId: o, actorId: i }) {
  var c, l;
  const r = game.actors.get(i);
  if (r) {
    const f = async () => {
      await r.rollInitiative();
    }, d = await h.rollAndCapture(i, f, s.rollMode);
    d.success && await h.sendResponse({
      type: "ROLL_RESULT",
      rollMode: d.rollMode,
      requestId: o,
      actorId: i,
      total: d.total,
      isCriticalSuccess: d.isCriticalSuccess,
      isCriticalFailure: d.isCriticalFailure,
      label: "Initiative",
      rawRoll: {
        total: d.total,
        isCriticalSuccess: d.isCriticalSuccess,
        isCriticalFailure: d.isCriticalFailure,
        label: d.label,
        resultTotal: (c = d.rawRoll) == null ? void 0 : c.resultTotal,
        rollTitle: (l = d.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function bs(h, s, { requestId: o, actorId: i }) {
  var c, l;
  const r = game.actors.get(i);
  if (r) {
    const f = r.items.getName(s.itemName);
    if (f) {
      const d = {
        "data-roll-type": "roleAbility",
        "data-roll-title": s.label,
        "data-item-id": f.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "roleAbility",
          "data-roll-title": s.label,
          "data-item-id": f.id,
          "data-item-subtype": s.label
        }
      };
      s.isAbility && (d["data-roll-subtype"] = "subRoleAbility", d["data-role-name"] = s.label, d.currentTarget["data-roll-subtype"] = "subRoleAbility", d.currentTarget["data-role-name"] = s.label);
      const p = async () => {
        await r.sheet._onRoll(d);
      }, m = await h.rollAndCapture(i, p, s.rollMode);
      m.success && await h.sendResponse({
        type: "ROLL_RESULT",
        rollMode: m.rollMode,
        requestId: o,
        actorId: i,
        total: m.total,
        isCriticalSuccess: m.isCriticalSuccess,
        isCriticalFailure: m.isCriticalFailure,
        label: s.label,
        rawRoll: {
          total: m.total,
          isCriticalSuccess: m.isCriticalSuccess,
          isCriticalFailure: m.isCriticalFailure,
          label: m.label,
          resultTotal: (c = m.rawRoll) == null ? void 0 : c.resultTotal,
          rollTitle: (l = m.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function ws(h, s, { requestId: o, actorId: i }) {
  var c, l;
  const r = game.actors.get(i);
  if (r) {
    const f = r.items.getName(s.label);
    if (f) {
      const d = async () => {
        await r.sheet._onRoll({
          "data-roll-type": "skill",
          "data-roll-title": s.label,
          "data-item-id": f.id,
          type: "click",
          currentTarget: {
            "data-roll-type": "skill",
            "data-roll-title": s.label,
            "data-item-id": f.id
          }
        });
      }, p = await h.rollAndCapture(i, d, s.rollMode);
      p.success && await h.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: o,
        actorId: i,
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: s.label,
        rawRoll: {
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          label: p.label,
          resultTotal: (c = p.rawRoll) == null ? void 0 : c.resultTotal,
          rollTitle: (l = p.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function ks(h, s, { requestId: o, actorId: i }) {
  var c, l;
  const r = game.actors.get(i);
  if (r) {
    const f = async () => {
      await r.sheet._onRoll({
        "data-roll-type": "stat",
        "data-roll-title": s.label,
        type: "click",
        currentTarget: {
          "data-roll-type": "stat",
          "data-roll-title": s.label
        }
      });
    }, d = await h.rollAndCapture(i, f, s.rollMode);
    d.success && await h.sendResponse({
      type: "ROLL_RESULT",
      rollMode: d.rollMode,
      requestId: o,
      actorId: i,
      total: d.total,
      isCriticalSuccess: d.isCriticalSuccess,
      isCriticalFailure: d.isCriticalFailure,
      label: s.label,
      rawRoll: {
        total: d.total,
        isCriticalSuccess: d.isCriticalSuccess,
        isCriticalFailure: d.isCriticalFailure,
        label: d.label,
        resultTotal: (c = d.rawRoll) == null ? void 0 : c.resultTotal,
        rollTitle: (l = d.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function _s(h, s, { requestId: o, actorId: i }) {
  o && h.activeRequests.set(o, { actorId: i, timestamp: Date.now() });
  const r = new Roll(s.formula);
  await r.evaluate(), await r.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
    flavor: s.flavor,
    rollMode: s.rollMode || game.settings.get("core", "rollMode")
  }), await h.sendResponse({
    type: "ROLL_RESULT",
    rollMode: s.rollMode || game.settings.get("core", "rollMode"),
    requestId: o,
    actorId: i,
    total: r.total,
    isCriticalSuccess: r.isCriticalSuccess || !1,
    isCriticalFailure: r.isCriticalFailure || !1,
    label: s.flavor || "Dice Roll",
    rawRoll: {
      rollTitle: s.flavor || "Dice Roll",
      _roll: r,
      formula: r.formula,
      resultTotal: r.total
    },
    success: !0
  });
}
async function Ss(h, s, { requestId: o, actorId: i, tokenId: r }) {
  var l, f, d, p, m, b, _;
  const c = game.actors.get(i);
  if (c) {
    const w = s.weaponId, T = s.fireMode, S = canvas.tokens.get(s.targetId), y = "firetype-" + w, k = "cyberpunk-red-core";
    let R = "";
    switch (T) {
      case "Auto":
        R = "autofire";
        break;
      case "Suppress":
        R = "suppressive";
        break;
      case "Aimed":
        R = "aimed", await c.setFlag(k, "aimedLocation", "head");
        break;
      default:
        R = "";
        break;
    }
    S && S.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), R === "" ? await c.unsetFlag(k, y) : await c.setFlag(k, y, R);
    const x = document.createElement("a");
    x.dataset.rollType = "attack", x.dataset.itemId = w, x.dataset.rollTitle = T + " Attack";
    const F = async () => {
      await c.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: x,
        type: "click"
      }, { showDialog: !0 });
    };
    let L = null;
    if (S) {
      const j = canvas.tokens.get(r) || ((l = c.getActiveTokens()) == null ? void 0 : l[0]) || canvas.tokens.placeables.find((N) => {
        var q;
        return ((q = N.actor) == null ? void 0 : q.id) === c.id;
      });
      if (j) {
        const N = S.center.x - j.center.x, q = S.center.y - j.center.y, z = Math.sqrt(Math.pow(N, 2) + Math.pow(q, 2)), oe = Math.ceil(z / (((f = canvas.grid) == null ? void 0 : f.size) || 128)), J = c.items.get(w), se = vt(J), fe = bt(se, oe);
        L = fe === 99 ? "Out of Range" : fe;
      }
    }
    const O = await h.rollAndCapture(i, F, s.rollMode);
    if (O.success) {
      let j = null;
      typeof L == "number" ? j = O.total >= L ? "Hit" : "Miss" : L === "Out of Range" && (j = "Miss");
      const N = ((m = (p = (d = c.items.get(w)) == null ? void 0 : d.system) == null ? void 0 : p.magazine) == null ? void 0 : m.value) ?? null;
      await h.sendResponse({
        type: "ROLL_RESULT",
        rollMode: O.rollMode,
        requestId: o,
        actorId: i,
        total: O.total,
        isCriticalSuccess: O.isCriticalSuccess,
        isCriticalFailure: O.isCriticalFailure,
        label: T + " Attack",
        rawRoll: {
          total: O.total,
          isCriticalSuccess: O.isCriticalSuccess,
          isCriticalFailure: O.isCriticalFailure,
          label: O.label,
          resultTotal: (b = O.rawRoll) == null ? void 0 : b.resultTotal,
          rollTitle: (_ = O.rawRoll) == null ? void 0 : _.rollTitle
        },
        dv: L,
        ammoTo: N,
        outcome: j,
        success: !0
      });
    }
  }
}
async function Cs(h, s, { type: o, requestId: i, actorId: r, tokenId: c }) {
  if (game.paused) return;
  const l = canvas.tokens.get(c);
  if (l) {
    let f = {};
    s.direction === "up" ? f.y = l.document.y - canvas.grid.size : s.direction === "down" ? f.y = l.document.y + canvas.grid.size : s.direction === "left" ? f.x = l.document.x - canvas.grid.size : s.direction === "right" && (f.x = l.document.x + canvas.grid.size), await l.document.update(f), await h.sendResponse({ type: "CONFIRMATION", action: o, actorId: r, tokenId: c, success: !0, requestId: i });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${c} not found.`), await h.sendResponse({ type: "CONFIRMATION", action: o, actorId: r, tokenId: c, success: !1, message: "Token not found", requestId: i });
}
async function Ts(h, s, { type: o, requestId: i, actorId: r }) {
  const c = canvas.tokens.get(s.targetTokenId);
  c && (c.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await h.sendResponse({ type: "CONFIRMATION", action: o, actorId: r, tokenId: s.targetTokenId, success: !0, requestId: i }));
}
async function Is(h, s, { requestId: o, actorId: i, tokenId: r }) {
  var d;
  const c = canvas.tokens.placeables.filter((p) => {
    var m;
    return ((m = p.actor) == null ? void 0 : m.id) === i;
  });
  r === null && (r = ((d = c[0]) == null ? void 0 : d.id) ?? null);
  const l = canvas.tokens.get(r);
  let f = [];
  if (l) {
    const p = canvas.grid.size, m = canvas.dimensions, b = l.center.x, _ = l.center.y;
    f = canvas.tokens.placeables.filter((w) => {
      const T = !w.document.hidden, S = w.actor && (w.actor.type === "character" || w.actor.type === "mook"), y = w.x >= m.sceneX && w.x <= m.sceneX + m.sceneWidth && w.y >= m.sceneY && w.y <= m.sceneY + m.sceneHeight;
      return T && S && y && w.id !== l.id;
    }).map((w) => {
      const T = w.center.x - b, S = w.center.y - _, k = (Math.sqrt(Math.pow(T, 2) + Math.pow(S, 2)) / p).toFixed(2);
      return {
        name: w.name,
        id: w.id,
        distanceM: parseFloat(k),
        type: w.actor.type
      };
    }).sort((w, T) => w.distanceM - T.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${r} not found.`);
  await h.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: i, tokens: f, requestId: o });
}
async function Rs(h, s, { requestId: o, actorId: i, tokenId: r }) {
  var p;
  const c = canvas.tokens.get(r), l = s.targetTokenId || ((p = Array.from(game.user.targets)[0]) == null ? void 0 : p.id), f = canvas.tokens.get(l), d = s.weaponId;
  if (c && f) {
    const m = f.center.x - c.center.x, b = f.center.y - c.center.y, _ = Math.sqrt(Math.pow(m, 2) + Math.pow(b, 2)), w = Math.ceil(_ / 128), T = c.actor.items.get(d);
    if (!T) {
      console.warn(`GET_DV_INFO: Weapon ID ${d} not found on actor ${c.actor.name}.`), await h.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: o });
      return;
    }
    const S = vt(T), y = bt(S, w), k = {
      targetName: f.name,
      distanceMeters: w,
      weaponCategory: S,
      dv: y === 99 ? "Out of Range" : y
    };
    await h.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: k, requestId: o });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!c}, Target: ${!!f}`), await h.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: o });
}
async function Ls(h, s, { requestId: o, actorId: i }) {
  var F;
  const r = game.actors.get(i);
  if (!r) return;
  const c = s.weaponId, l = c ? r.items.get(c) : null;
  let f = "None", d = 0, p = "None", m = 0, b = 0;
  if (l) {
    f = l.system.weaponSkill;
    const L = r.items.find((O) => O.type === "skill" && O.name === f);
    d = L && Number(L.system.level) || 0, p = L && L.system.stat || "ref", m = Number((F = r.system.stats[p]) == null ? void 0 : F.value) || 0, b = Number(l.system.attackmod) || 0;
  }
  let _ = 0;
  const w = [], T = Number(r.system.derivedStats.hp.value) || 0, S = Number(r.system.derivedStats.seriouslyWounded) || 0, y = r.items.find((L) => L.name === "Stim" && L.type === "drug"), k = y && y.effects.some((L) => L.disabled === !1);
  if (T <= 0)
    _ -= 4, w.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (T <= S) {
    const L = k ? 0 : -2;
    _ += L, w.push({
      title: k ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: L,
      description: k ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  r.items.filter((L) => L.type === "criticalInjury").forEach((L) => {
    var q;
    const O = L.name || "Injury", j = (((q = L.system.description) == null ? void 0 : q.value) || "").replace(/<[^>]*>/g, "");
    let N = 0;
    if (L.effects && L.effects.length > 0 && L.effects.forEach((z) => {
      !z.disabled && z.changes && z.changes.forEach((oe) => {
        const J = parseInt(oe.value);
        isNaN(J) || (N += J);
      });
    }), N === 0) {
      const z = String(O).toLowerCase();
      (j.includes("-2") || z.includes("arm") || z.includes("eye")) && (N = -2);
    }
    _ += N, w.push({ title: O, description: j, penalty: N });
  });
  const x = {
    actorName: r.name,
    baseBonus: m + d + b,
    breakdown: {
      statName: p,
      statValue: m,
      skillName: f,
      skillLevel: d,
      weaponAcc: b
    },
    totalPenalty: _,
    finalModifier: m + d + b + _,
    injuries: w
  };
  await h.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: i, result: x, requestId: o });
}
async function As(h, s, { requestId: o, actorId: i }) {
  const r = game.actors.get(i);
  if (r) {
    const c = `system.${s.label}`;
    let l;
    if (s.operation === "inc") {
      const f = c.split(".");
      let d = r;
      for (let b = 0; b < f.length; b++)
        d = b === 0 ? d[f[b]] : d == null ? void 0 : d[f[b]];
      const p = Number(d) || 0, m = Number(s.delta) || 0;
      l = p + m;
    } else
      l = typeof s.value == "string" ? s.value : Number(s.value) || 0;
    await r.update({ [c]: l }), await h.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [c]: l }, tab: "stats", success: !0, requestId: o });
  }
}
async function Ps(h, s, { requestId: o, actorId: i, debug: r }) {
  if (i == null) {
    r && console.log("[Bridge] Actor ID Not set:");
    return;
  }
  let c = game.actors.get(i);
  switch ((s.action == null || s.value == null) && r && console.log("[Bridge] EuroBucks data error"), s.action) {
    case "add":
      c.deltaLedgerProperty("wealth", s.value, s.reason);
      break;
    case "subtract":
      c.deltaLedgerProperty("wealth", -Number(s.value), s.reason);
      break;
    case "set":
      c.setLedgerProperty("wealth", s.value, s.reason);
      break;
  }
  c && await h.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { "system.wealth": c.system.wealth }, tab: "stats", success: !0, requestId: o });
}
async function Es(h, s, { requestId: o, actorId: i, debug: r }) {
  const c = [];
  for (const l of game.journal) {
    const f = l.pages.filter((d) => d.type === "cpr-agent.datapool");
    for (const d of f) {
      const p = d.system.entries || [], m = [];
      for (const b of p) {
        let _ = b.htmlContent;
        b.type === "html" && _ && (_ = await TextEditor.enrichHTML(_, { async: !0 })), m.push({
          id: b.id,
          icon: b.icon,
          title: b.title,
          type: b.type,
          htmlContent: _,
          pdfPath: b.pdfPath
        });
      }
      c.push({
        journalId: l.id,
        journalName: l.name,
        pageId: d.id,
        pageName: d.name,
        entries: m
      });
    }
  }
  r && console.log("[Bridge] Found Data Pools:", c), await h.sendResponse({
    type: "NET_POOL_DATA",
    actorId: i,
    pools: c,
    requestId: o,
    success: !0
  });
}
const xs = {
  UPDATE_ACTOR: is,
  GET_ACTOR: os,
  GET_ACTORS: as,
  CONSUME_ITEM: cs,
  ITEM_EQUIP: ls,
  RELOAD_WEAPON: us,
  INSTALL_PROGRAM: hs,
  REMOVE_PROGRAM: ds,
  TOGGLE_REZ: fs,
  PROGRAM_ROLL: ps,
  DAMAGE_ROLL: gs,
  DEATH_SAVE: ms,
  FACEDOWN_ROLL: ys,
  INITIATIVE_ROLL: vs,
  ROLE_ROLL: bs,
  SKILL_ROLL: ws,
  STAT_ROLL: ks,
  DICE_ROLL: _s,
  ATTACK_ROLL: Ss,
  MOVE_TOKEN: Cs,
  TARGET_TOKEN: Ts,
  LIST_VISIBLE_TOKENS: Is,
  GET_DV_INFO: Rs,
  GET_ROLL_MODIFIERS: Ls,
  UPDATE_STAT: As,
  UPDATE_EB: Ps,
  GET_NET_POOL: Es
};
async function Os(h, s, o, i) {
  const r = xs[s];
  if (!r) {
    console.log("Unknown DataType: " + s);
    return;
  }
  return r(h, o, i);
}
class Ms {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1;
  }
  rollAndCapture(s, o, i = null) {
    return ns(this, s, o, i);
  }
  registerSettings() {
    ss(this);
  }
  destroy() {
    this.echo && this.echo.disconnect();
    for (let [s, o] of Object.entries(this.hookIds))
      Hooks.off(s, o);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  connect() {
    const s = game.settings.get(I, "apiUrl"), o = game.settings.get(I, "apiKey"), i = game.settings.get(I, "debugMode"), r = Number(game.settings.get(I, "reverbPort") || 0) || 0, c = game.settings.get(I, "reverbUseSSL"), l = (game.settings.get(I, "reverbHost") || "").trim();
    if (!o || !s) return;
    this.echo && this.echo.disconnect();
    let f;
    try {
      f = new URL(s);
    } catch {
      return;
    }
    const d = l || f.hostname, p = f.protocol === "https:", m = typeof c == "boolean" ? c : void 0, b = m ?? p, _ = b ? 443 : 80, w = r > 0 ? r : _;
    this.echo = new es({
      broadcaster: "reverb",
      key: game.settings.get(I, "reverbKey") || yt,
      wsHost: d,
      wsPort: w,
      wssPort: w,
      forceTLS: b,
      enabledTransports: ["ws", "wss"],
      disableStats: !0,
      authEndpoint: `${s.replace(/\/$/, "")}/api/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: "Bearer " + o,
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
    const s = game.settings.get(I, "channelId"), o = s ? `cpr-agent.${s}` : "cpr-agent";
    this.echo.private(o).listen(".GameUpdate", (i) => {
      this.handleIncomingData(i);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const s = game.settings.get(I, "apiKey"), o = game.settings.get(I, "debugMode");
    if (o && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(I, "hasApiKey") !== !!s && await game.user.setFlag(I, "hasApiKey", !!s), !s) {
      o && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const i = async () => {
      var l;
      const r = game.user.character, c = game.user.getFlag(I, "agent-link");
      o && (console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(r == null ? void 0 : r.name) || "None"}...`), console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`), console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${c || "(none)"}`));
      try {
        const f = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          actorId: r ? r.id : null,
          character: r ? { id: r.id, name: r.name } : null,
          actorName: r ? r.name : null,
          agentLink: c || game.user.id,
          foundryUserId: game.user.id,
          foundryUserName: game.user.name,
          isGM: game.user.isGM
        });
        o && console.log("[Bridge] syncPlayerLink: Laravel response:", f), f && f.agent_link ? c !== f.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${f.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${f.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(I, "agent-link", f.agent_link), (l = ui.notifications) == null || l.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", f);
      } catch (f) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", f);
      }
    };
    await i(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (r, c) => {
      r.id === game.user.id && c.character !== void 0 && i();
    }));
  }
  registerGlobalHooks() {
    if (this.hookIds.updateActor) return;
    const s = async (o, i) => {
      const r = game.settings.get(I, "apiKey");
      !this.isConnected && !r || !o || !["character", "mook"].includes(o.type) || (console.log(`%c[Bridge] Syncing change for ${o.name}`, "color: #ffaa00;", i), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: o.id,
        uuid: o.id,
        delta: i,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (o, i, r, c) => {
      if (i.system) {
        const l = De(i.system, "system.");
        s(o, l);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (o, i, r, c) => {
      const l = o.parent;
      if (l instanceof Actor) {
        const f = {}, d = `items.${o.id}.`;
        i.system && De(i.system, `${d}system.`, f);
        for (let p in i)
          p !== "system" && p !== "_id" && (f[`${d}${p}`] = i[p]);
        Object.keys(f).length > 0 && s(l, f);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (o, i, r) => {
      const c = o.parent;
      if (c instanceof Actor) {
        const l = {
          [`items.+${o.id}`]: o.toObject()
        };
        s(c, l);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (o, i, r) => {
      const c = o.parent;
      if (c instanceof Actor) {
        const l = {
          [`items.${o.id}`]: null
        };
        s(c, l);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (o, i) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (o, i, r, c) => {
      (i.x || i.y || i.disposition || i.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.deleteToken = Hooks.on("deleteToken", (o, i, r) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (o, i, r) => {
      o.author.id === game.user.id && (this._isCapturingRoll || o.rolls && o.rolls.length > 0 && this.broadcastRoll(o));
    });
  }
  broadcastRefresh(s) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: s });
  }
  broadcastRoll(s) {
    var c;
    const o = game.users.get(s.author.id), i = s.rolls[0];
    let r = "publicroll";
    if (s.blind)
      r = "blindroll";
    else if (s.whisper && s.whisper.length > 0) {
      const l = game.users.filter((p) => p.isGM).map((p) => p.id), f = s.whisper.every((p) => l.includes(p) || p === s.author.id);
      s.whisper.length === 1 && s.whisper[0] === s.author.id ? r = "selfroll" : r = "gmroll";
    }
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((c = s.speaker) == null ? void 0 : c.actor) || null,
      agentLink: o ? o.getFlag(I, "agent-link") : null,
      playerName: s.alias,
      total: i.total,
      formula: i.formula,
      rollMode: s.rollMode || r,
      label: s.flavor || "Dice Roll",
      rawRoll: {
        total: i.total,
        formula: i.formula,
        rollTitle: s.flavor || "Dice Roll",
        _roll: i.toJSON()
      },
      success: !0
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(s) {
    let o = game.settings.get(I, "apiUrl");
    const i = game.settings.get(I, "apiKey");
    if (!o || !i) return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const r = (s.requestId ? this.requestAgentLinks.get(s.requestId) : null) || game.user.getFlag(I, "agent-link");
    r && !s.agentLink && (s.agentLink = r);
    const c = game.settings.get(I, "channelId");
    if (c && !s.channelId && (s.channelId = c), s.type === "ROLL_RESULT") {
      if (!s.playerName) {
        const l = s.actorId ? game.actors.get(s.actorId) : null;
        s.playerName = l ? l.name : game.user.name;
      }
      s.rollMode || (s.rollMode = game.settings.get("core", "rollMode"));
    }
    try {
      const l = await fetch(`${o}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${i}`,
          Accept: "application/json"
        },
        body: JSON.stringify(s)
      });
      return l.ok ? await l.json() : (console.error("Cyberpunk Bridge: Callback failed", l.statusText), null);
    } catch (l) {
      return console.error("Cyberpunk Bridge: Error sending callback", l), null;
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(s) {
    var _, w;
    const o = s.payload || s, i = o.type;
    console.log(`%c[Bridge] Incoming Call: ${i}`, "color: #00ffff; font-weight: bold;", o);
    const r = o.requestId, c = o.agent_link || o.agentLink;
    r && c && (this.requestAgentLinks.set(r, c), setTimeout(() => this.requestAgentLinks.delete(r), 3e4));
    const l = game.user.getFlag(I, "agent-link"), f = o.actorId, d = (_ = game.user.character) == null ? void 0 : _.id, p = game.settings.get(I, "debugMode");
    p && console.log(`[Bridge] handleIncomingData: requestId=${r}, agentLink=${c}, myAgentLink=${l}, actorId=${f}, myCharacterId=${d}`);
    let m = !1;
    if (game.user.isGM || l && (r === l || c === l) ? m = !0 : !l && r && f && d === f && (console.log(`[Bridge] Discovery: Matching incoming request to character ${f}`), m = !0), !m) {
      p && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && c && l !== c && (r === c || f && d === f) && (console.log(`%c[Bridge] Setting agent-link flag: ${c}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(I, "agent-link", c), (w = ui.notifications) == null || w.info("Agent: Account linked!"));
    let b = o.tokenId;
    if (!b && f) {
      const T = canvas.tokens.placeables.find((S) => {
        var y;
        return ((y = S.actor) == null ? void 0 : y.id) === f;
      });
      T && (b = T.id);
    }
    await Os(this, i, o, { type: i, requestId: r, actorId: f, tokenId: b, debug: p });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class Tt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const s = foundry.data.fields;
    return {
      // An array of dynamic rows
      entries: new s.ArrayField(new s.SchemaField({
        id: new s.StringField({ required: !0, initial: () => foundry.utils.randomID() }),
        icon: new s.FilePathField({ categories: ["IMAGE"], initial: "icons/svg/item-bag.svg" }),
        title: new s.StringField({ required: !0, initial: "Link Title" }),
        type: new s.StringField({ choices: ["html", "pdf"], initial: "html" }),
        htmlContent: new s.HTMLField(),
        pdfPath: new s.FilePathField({ categories: ["TEXT"] })
      }))
    };
  }
}
Me(Tt, "metadata", {
  label: "Agent Data Pool"
});
class It extends JournalPageSheet {
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
  async getData(s) {
    const o = super.getData(s);
    o.entries = this.document.system.entries || [];
    for (let i of o.entries)
      i.type === "html" && (i.enrichedHtml = await TextEditor.enrichHTML(i.htmlContent, {
        async: !0,
        secrets: this.document.isOwner,
        documents: !0
      }));
    return o;
  }
  activateListeners(s) {
    super.activateListeners(s), s.find(".add-entry").click(this._onAddEntry.bind(this)), s.find(".delete-entry").click(this._onDeleteEntry.bind(this));
  }
  async _onAddEntry(s) {
    s.preventDefault();
    const i = [...this.document.system.entries || [], {
      id: foundry.utils.randomID(),
      title: "New Data Pool Link",
      type: "html"
    }];
    await this.document.update({ "system.entries": i });
  }
  async _onDeleteEntry(s) {
    s.preventDefault();
    const o = s.currentTarget.dataset.id, r = (this.document.system.entries || []).filter((c) => c.id !== o);
    await this.document.update({ "system.entries": r });
  }
}
/** @override */
Me(It, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
window.Pusher = Hr;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new Ms();
Hooks.once("init", () => {
  Ns(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = Tt, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", It, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), console.log("[Bridge] Cyberpunk Bridge Fully Online.");
});
function Ns() {
  game.settings.settings.has(`${I}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
