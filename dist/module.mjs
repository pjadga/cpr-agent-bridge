var qi = Object.defineProperty;
var Gi = (c, t, i) => t in c ? qi(c, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : c[t] = i;
var nt = (c, t, i) => Gi(c, typeof t != "symbol" ? t + "" : t, i);
import.meta.hot && import.meta.hot.accept((c) => {
  console.log("Hot reloading module...");
});
function Vi(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var rn = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(c, t) {
  (function(r, n) {
    c.exports = n();
  })(window, function() {
    return (
      /******/
      function(i) {
        var r = {};
        function n(o) {
          if (r[o])
            return r[o].exports;
          var l = r[o] = {
            /******/
            i: o,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return i[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
        }
        return n.m = i, n.c = r, n.d = function(o, l, d) {
          n.o(o, l) || Object.defineProperty(o, l, { enumerable: !0, get: d });
        }, n.r = function(o) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
        }, n.t = function(o, l) {
          if (l & 1 && (o = n(o)), l & 8 || l & 4 && typeof o == "object" && o && o.__esModule) return o;
          var d = /* @__PURE__ */ Object.create(null);
          if (n.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: o }), l & 2 && typeof o != "string") for (var u in o) n.d(d, u, (function(p) {
            return o[p];
          }).bind(null, u));
          return d;
        }, n.n = function(o) {
          var l = o && o.__esModule ? (
            /******/
            function() {
              return o.default;
            }
          ) : (
            /******/
            function() {
              return o;
            }
          );
          return n.d(l, "a", l), l;
        }, n.o = function(o, l) {
          return Object.prototype.hasOwnProperty.call(o, l);
        }, n.p = "", n(n.s = 2);
      }([
        /* 0 */
        /***/
        function(i, r, n) {
          var o = this && this.__extends || /* @__PURE__ */ function() {
            var C = function(w, v) {
              return C = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(_, I) {
                _.__proto__ = I;
              } || function(_, I) {
                for (var E in I) I.hasOwnProperty(E) && (_[E] = I[E]);
              }, C(w, v);
            };
            return function(w, v) {
              C(w, v);
              function _() {
                this.constructor = w;
              }
              w.prototype = v === null ? Object.create(v) : (_.prototype = v.prototype, new _());
            };
          }();
          Object.defineProperty(r, "__esModule", { value: !0 });
          var l = 256, d = (
            /** @class */
            function() {
              function C(w) {
                w === void 0 && (w = "="), this._paddingCharacter = w;
              }
              return C.prototype.encodedLength = function(w) {
                return this._paddingCharacter ? (w + 2) / 3 * 4 | 0 : (w * 8 + 5) / 6 | 0;
              }, C.prototype.encode = function(w) {
                for (var v = "", _ = 0; _ < w.length - 2; _ += 3) {
                  var I = w[_] << 16 | w[_ + 1] << 8 | w[_ + 2];
                  v += this._encodeByte(I >>> 3 * 6 & 63), v += this._encodeByte(I >>> 2 * 6 & 63), v += this._encodeByte(I >>> 1 * 6 & 63), v += this._encodeByte(I >>> 0 * 6 & 63);
                }
                var E = w.length - _;
                if (E > 0) {
                  var I = w[_] << 16 | (E === 2 ? w[_ + 1] << 8 : 0);
                  v += this._encodeByte(I >>> 3 * 6 & 63), v += this._encodeByte(I >>> 2 * 6 & 63), E === 2 ? v += this._encodeByte(I >>> 1 * 6 & 63) : v += this._paddingCharacter || "", v += this._paddingCharacter || "";
                }
                return v;
              }, C.prototype.maxDecodedLength = function(w) {
                return this._paddingCharacter ? w / 4 * 3 | 0 : (w * 6 + 7) / 8 | 0;
              }, C.prototype.decodedLength = function(w) {
                return this.maxDecodedLength(w.length - this._getPaddingLength(w));
              }, C.prototype.decode = function(w) {
                if (w.length === 0)
                  return new Uint8Array(0);
                for (var v = this._getPaddingLength(w), _ = w.length - v, I = new Uint8Array(this.maxDecodedLength(_)), E = 0, A = 0, L = 0, O = 0, x = 0, U = 0, F = 0; A < _ - 4; A += 4)
                  O = this._decodeChar(w.charCodeAt(A + 0)), x = this._decodeChar(w.charCodeAt(A + 1)), U = this._decodeChar(w.charCodeAt(A + 2)), F = this._decodeChar(w.charCodeAt(A + 3)), I[E++] = O << 2 | x >>> 4, I[E++] = x << 4 | U >>> 2, I[E++] = U << 6 | F, L |= O & l, L |= x & l, L |= U & l, L |= F & l;
                if (A < _ - 1 && (O = this._decodeChar(w.charCodeAt(A)), x = this._decodeChar(w.charCodeAt(A + 1)), I[E++] = O << 2 | x >>> 4, L |= O & l, L |= x & l), A < _ - 2 && (U = this._decodeChar(w.charCodeAt(A + 2)), I[E++] = x << 4 | U >>> 2, L |= U & l), A < _ - 3 && (F = this._decodeChar(w.charCodeAt(A + 3)), I[E++] = U << 6 | F, L |= F & l), L !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return I;
              }, C.prototype._encodeByte = function(w) {
                var v = w;
                return v += 65, v += 25 - w >>> 8 & 6, v += 51 - w >>> 8 & -75, v += 61 - w >>> 8 & -15, v += 62 - w >>> 8 & 3, String.fromCharCode(v);
              }, C.prototype._decodeChar = function(w) {
                var v = l;
                return v += (42 - w & w - 44) >>> 8 & -l + w - 43 + 62, v += (46 - w & w - 48) >>> 8 & -l + w - 47 + 63, v += (47 - w & w - 58) >>> 8 & -l + w - 48 + 52, v += (64 - w & w - 91) >>> 8 & -l + w - 65 + 0, v += (96 - w & w - 123) >>> 8 & -l + w - 97 + 26, v;
              }, C.prototype._getPaddingLength = function(w) {
                var v = 0;
                if (this._paddingCharacter) {
                  for (var _ = w.length - 1; _ >= 0 && w[_] === this._paddingCharacter; _--)
                    v++;
                  if (w.length < 4 || v > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return v;
              }, C;
            }()
          );
          r.Coder = d;
          var u = new d();
          function p(C) {
            return u.encode(C);
          }
          r.encode = p;
          function g(C) {
            return u.decode(C);
          }
          r.decode = g;
          var k = (
            /** @class */
            function(C) {
              o(w, C);
              function w() {
                return C !== null && C.apply(this, arguments) || this;
              }
              return w.prototype._encodeByte = function(v) {
                var _ = v;
                return _ += 65, _ += 25 - v >>> 8 & 6, _ += 51 - v >>> 8 & -75, _ += 61 - v >>> 8 & -13, _ += 62 - v >>> 8 & 49, String.fromCharCode(_);
              }, w.prototype._decodeChar = function(v) {
                var _ = l;
                return _ += (44 - v & v - 46) >>> 8 & -l + v - 45 + 62, _ += (94 - v & v - 96) >>> 8 & -l + v - 95 + 63, _ += (47 - v & v - 58) >>> 8 & -l + v - 48 + 52, _ += (64 - v & v - 91) >>> 8 & -l + v - 65 + 0, _ += (96 - v & v - 123) >>> 8 & -l + v - 97 + 26, _;
              }, w;
            }(d)
          );
          r.URLSafeCoder = k;
          var b = new k();
          function m(C) {
            return b.encode(C);
          }
          r.encodeURLSafe = m;
          function S(C) {
            return b.decode(C);
          }
          r.decodeURLSafe = S, r.encodedLength = function(C) {
            return u.encodedLength(C);
          }, r.maxDecodedLength = function(C) {
            return u.maxDecodedLength(C);
          }, r.decodedLength = function(C) {
            return u.decodedLength(C);
          };
        },
        /* 1 */
        /***/
        function(i, r, n) {
          Object.defineProperty(r, "__esModule", { value: !0 });
          var o = "utf8: invalid string", l = "utf8: invalid source encoding";
          function d(g) {
            for (var k = new Uint8Array(u(g)), b = 0, m = 0; m < g.length; m++) {
              var S = g.charCodeAt(m);
              S < 128 ? k[b++] = S : S < 2048 ? (k[b++] = 192 | S >> 6, k[b++] = 128 | S & 63) : S < 55296 ? (k[b++] = 224 | S >> 12, k[b++] = 128 | S >> 6 & 63, k[b++] = 128 | S & 63) : (m++, S = (S & 1023) << 10, S |= g.charCodeAt(m) & 1023, S += 65536, k[b++] = 240 | S >> 18, k[b++] = 128 | S >> 12 & 63, k[b++] = 128 | S >> 6 & 63, k[b++] = 128 | S & 63);
            }
            return k;
          }
          r.encode = d;
          function u(g) {
            for (var k = 0, b = 0; b < g.length; b++) {
              var m = g.charCodeAt(b);
              if (m < 128)
                k += 1;
              else if (m < 2048)
                k += 2;
              else if (m < 55296)
                k += 3;
              else if (m <= 57343) {
                if (b >= g.length - 1)
                  throw new Error(o);
                b++, k += 4;
              } else
                throw new Error(o);
            }
            return k;
          }
          r.encodedLength = u;
          function p(g) {
            for (var k = [], b = 0; b < g.length; b++) {
              var m = g[b];
              if (m & 128) {
                var S = void 0;
                if (m < 224) {
                  if (b >= g.length)
                    throw new Error(l);
                  var C = g[++b];
                  if ((C & 192) !== 128)
                    throw new Error(l);
                  m = (m & 31) << 6 | C & 63, S = 128;
                } else if (m < 240) {
                  if (b >= g.length - 1)
                    throw new Error(l);
                  var C = g[++b], w = g[++b];
                  if ((C & 192) !== 128 || (w & 192) !== 128)
                    throw new Error(l);
                  m = (m & 15) << 12 | (C & 63) << 6 | w & 63, S = 2048;
                } else if (m < 248) {
                  if (b >= g.length - 2)
                    throw new Error(l);
                  var C = g[++b], w = g[++b], v = g[++b];
                  if ((C & 192) !== 128 || (w & 192) !== 128 || (v & 192) !== 128)
                    throw new Error(l);
                  m = (m & 15) << 18 | (C & 63) << 12 | (w & 63) << 6 | v & 63, S = 65536;
                } else
                  throw new Error(l);
                if (m < S || m >= 55296 && m <= 57343)
                  throw new Error(l);
                if (m >= 65536) {
                  if (m > 1114111)
                    throw new Error(l);
                  m -= 65536, k.push(String.fromCharCode(55296 | m >> 10)), m = 56320 | m & 1023;
                }
              }
              k.push(String.fromCharCode(m));
            }
            return k.join("");
          }
          r.decode = p;
        },
        /* 2 */
        /***/
        function(i, r, n) {
          i.exports = n(3).default;
        },
        /* 3 */
        /***/
        function(i, r, n) {
          n.r(r);
          class o {
            constructor(e, s) {
              this.lastId = 0, this.prefix = e, this.name = s;
            }
            create(e) {
              this.lastId++;
              var s = this.lastId, h = this.prefix + s, f = this.name + "[" + s + "]", y = !1, T = function() {
                y || (e.apply(null, arguments), y = !0);
              };
              return this[s] = T, { number: s, id: h, name: f, callback: T };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var l = new o("_pusher_script_", "Pusher.ScriptReceivers"), d = {
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
          }, u = d;
          class p {
            constructor(e) {
              this.options = e, this.receivers = e.receivers || l, this.loading = {};
            }
            load(e, s, h) {
              var f = this;
              if (f.loading[e] && f.loading[e].length > 0)
                f.loading[e].push(h);
              else {
                f.loading[e] = [h];
                var y = N.createScriptRequest(f.getPath(e, s)), T = f.receivers.create(function(P) {
                  if (f.receivers.remove(T), f.loading[e]) {
                    var M = f.loading[e];
                    delete f.loading[e];
                    for (var B = function(H) {
                      H || y.cleanup();
                    }, D = 0; D < M.length; D++)
                      M[D](P, B);
                  }
                });
                y.send(T);
              }
            }
            getRoot(e) {
              var s, h = N.getDocument().location.protocol;
              return e && e.useTLS || h === "https:" ? s = this.options.cdn_https : s = this.options.cdn_http, s.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(e, s) {
              return this.getRoot(s) + "/" + e + this.options.suffix + ".js";
            }
          }
          var g = new o("_pusher_dependencies", "Pusher.DependenciesReceivers"), k = new p({
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
          var S = { buildLogSuffix: function(a) {
            const e = "See:", s = b.urls[a];
            if (!s)
              return "";
            let h;
            return s.fullUrl ? h = s.fullUrl : s.path && (h = b.baseUrl + s.path), h ? `${e} ${h}` : "";
          } }, C;
          (function(a) {
            a.UserAuthentication = "user-authentication", a.ChannelAuthorization = "channel-authorization";
          })(C || (C = {}));
          class w extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class v extends Error {
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
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class E extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class A extends Error {
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
          class x extends Error {
            constructor(e, s) {
              super(s), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var F = function(a, e, s, h, f) {
            const y = N.createXHR();
            y.open("POST", s.endpoint, !0), y.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var T in s.headers)
              y.setRequestHeader(T, s.headers[T]);
            if (s.headersProvider != null) {
              let P = s.headersProvider();
              for (var T in P)
                y.setRequestHeader(T, P[T]);
            }
            return y.onreadystatechange = function() {
              if (y.readyState === 4)
                if (y.status === 200) {
                  let P, M = !1;
                  try {
                    P = JSON.parse(y.responseText), M = !0;
                  } catch {
                    f(new x(200, `JSON returned from ${h.toString()} endpoint was invalid, yet status code was 200. Data was: ${y.responseText}`), null);
                  }
                  M && f(null, P);
                } else {
                  let P = "";
                  switch (h) {
                    case C.UserAuthentication:
                      P = S.buildLogSuffix("authenticationEndpoint");
                      break;
                    case C.ChannelAuthorization:
                      P = `Clients must be authorized to join private or presence channels. ${S.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  f(new x(y.status, `Unable to retrieve auth string from ${h.toString()} endpoint - received status: ${y.status} from ${s.endpoint}. ${P}`), null);
                }
            }, y.send(e), y;
          };
          function Z(a) {
            return Bn(On(a));
          }
          var J = String.fromCharCode, V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ie = function(a) {
            var e = a.charCodeAt(0);
            return e < 128 ? a : e < 2048 ? J(192 | e >>> 6) + J(128 | e & 63) : J(224 | e >>> 12 & 15) + J(128 | e >>> 6 & 63) + J(128 | e & 63);
          }, On = function(a) {
            return a.replace(/[^\x00-\x7F]/g, Ie);
          }, xn = function(a) {
            var e = [0, 2, 1][a.length % 3], s = a.charCodeAt(0) << 16 | (a.length > 1 ? a.charCodeAt(1) : 0) << 8 | (a.length > 2 ? a.charCodeAt(2) : 0), h = [
              V.charAt(s >>> 18),
              V.charAt(s >>> 12 & 63),
              e >= 2 ? "=" : V.charAt(s >>> 6 & 63),
              e >= 1 ? "=" : V.charAt(s & 63)
            ];
            return h.join("");
          }, Bn = window.btoa || function(a) {
            return a.replace(/[\s\S]{1,3}/g, xn);
          };
          class Dn {
            constructor(e, s, h, f) {
              this.clear = s, this.timer = e(() => {
                this.timer && (this.timer = f(this.timer));
              }, h);
            }
            isRunning() {
              return this.timer !== null;
            }
            ensureAborted() {
              this.timer && (this.clear(this.timer), this.timer = null);
            }
          }
          var St = Dn;
          function Fn(a) {
            window.clearTimeout(a);
          }
          function Un(a) {
            window.clearInterval(a);
          }
          class oe extends St {
            constructor(e, s) {
              super(setTimeout, Fn, e, function(h) {
                return s(), null;
              });
            }
          }
          class jn extends St {
            constructor(e, s) {
              super(setInterval, Un, e, function(h) {
                return s(), h;
              });
            }
          }
          var Hn = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(a) {
              return new oe(0, a);
            },
            method(a, ...e) {
              var s = Array.prototype.slice.call(arguments, 1);
              return function(h) {
                return h[a].apply(h, s.concat(arguments));
              };
            }
          }, K = Hn;
          function W(a, ...e) {
            for (var s = 0; s < e.length; s++) {
              var h = e[s];
              for (var f in h)
                h[f] && h[f].constructor && h[f].constructor === Object ? a[f] = W(a[f] || {}, h[f]) : a[f] = h[f];
            }
            return a;
          }
          function zn() {
            for (var a = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? a.push(arguments[e]) : a.push(Ae(arguments[e]));
            return a.join(" : ");
          }
          function _t(a, e) {
            var s = Array.prototype.indexOf;
            if (a === null)
              return -1;
            if (s && a.indexOf === s)
              return a.indexOf(e);
            for (var h = 0, f = a.length; h < f; h++)
              if (a[h] === e)
                return h;
            return -1;
          }
          function te(a, e) {
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && e(a[s], s, a);
          }
          function Tt(a) {
            var e = [];
            return te(a, function(s, h) {
              e.push(h);
            }), e;
          }
          function qn(a) {
            var e = [];
            return te(a, function(s) {
              e.push(s);
            }), e;
          }
          function me(a, e, s) {
            for (var h = 0; h < a.length; h++)
              e.call(s || window, a[h], h, a);
          }
          function It(a, e) {
            for (var s = [], h = 0; h < a.length; h++)
              s.push(e(a[h], h, a, s));
            return s;
          }
          function Gn(a, e) {
            var s = {};
            return te(a, function(h, f) {
              s[f] = e(h);
            }), s;
          }
          function At(a, e) {
            e = e || function(f) {
              return !!f;
            };
            for (var s = [], h = 0; h < a.length; h++)
              e(a[h], h, a, s) && s.push(a[h]);
            return s;
          }
          function Rt(a, e) {
            var s = {};
            return te(a, function(h, f) {
              (e && e(h, f, a, s) || h) && (s[f] = h);
            }), s;
          }
          function Vn(a) {
            var e = [];
            return te(a, function(s, h) {
              e.push([h, s]);
            }), e;
          }
          function Et(a, e) {
            for (var s = 0; s < a.length; s++)
              if (e(a[s], s, a))
                return !0;
            return !1;
          }
          function $n(a, e) {
            for (var s = 0; s < a.length; s++)
              if (!e(a[s], s, a))
                return !1;
            return !0;
          }
          function Kn(a) {
            return Gn(a, function(e) {
              return typeof e == "object" && (e = Ae(e)), encodeURIComponent(Z(e.toString()));
            });
          }
          function Jn(a) {
            var e = Rt(a, function(h) {
              return h !== void 0;
            }), s = It(Vn(Kn(e)), K.method("join", "=")).join("&");
            return s;
          }
          function Wn(a) {
            var e = [], s = [];
            return function h(f, y) {
              var T, P, M;
              switch (typeof f) {
                case "object":
                  if (!f)
                    return null;
                  for (T = 0; T < e.length; T += 1)
                    if (e[T] === f)
                      return { $ref: s[T] };
                  if (e.push(f), s.push(y), Object.prototype.toString.apply(f) === "[object Array]")
                    for (M = [], T = 0; T < f.length; T += 1)
                      M[T] = h(f[T], y + "[" + T + "]");
                  else {
                    M = {};
                    for (P in f)
                      Object.prototype.hasOwnProperty.call(f, P) && (M[P] = h(f[P], y + "[" + JSON.stringify(P) + "]"));
                  }
                  return M;
                case "number":
                case "string":
                case "boolean":
                  return f;
              }
            }(a, "$");
          }
          function Ae(a) {
            try {
              return JSON.stringify(a);
            } catch {
              return JSON.stringify(Wn(a));
            }
          }
          class Xn {
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
            log(e, ...s) {
              var h = zn.apply(this, arguments);
              Ze.log ? Ze.log(h) : Ze.logToConsole && e.bind(this)(h);
            }
          }
          var j = new Xn(), Qn = function(a, e, s, h, f) {
            (s.headers !== void 0 || s.headersProvider != null) && j.warn(`To send headers with the ${h.toString()} request, you must use AJAX, rather than JSONP.`);
            var y = a.nextAuthCallbackID.toString();
            a.nextAuthCallbackID++;
            var T = a.getDocument(), P = T.createElement("script");
            a.auth_callbacks[y] = function(D) {
              f(null, D);
            };
            var M = "Pusher.auth_callbacks['" + y + "']";
            P.src = s.endpoint + "?callback=" + encodeURIComponent(M) + "&" + e;
            var B = T.getElementsByTagName("head")[0] || T.documentElement;
            B.insertBefore(P, B.firstChild);
          }, Yn = Qn;
          class Zn {
            constructor(e) {
              this.src = e;
            }
            send(e) {
              var s = this, h = "Error loading " + s.src;
              s.script = document.createElement("script"), s.script.id = e.id, s.script.src = s.src, s.script.type = "text/javascript", s.script.charset = "UTF-8", s.script.addEventListener ? (s.script.onerror = function() {
                e.callback(h);
              }, s.script.onload = function() {
                e.callback(null);
              }) : s.script.onreadystatechange = function() {
                (s.script.readyState === "loaded" || s.script.readyState === "complete") && e.callback(null);
              }, s.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (s.errorScript = document.createElement("script"), s.errorScript.id = e.id + "_error", s.errorScript.text = e.name + "('" + h + "');", s.script.async = s.errorScript.async = !1) : s.script.async = !0;
              var f = document.getElementsByTagName("head")[0];
              f.insertBefore(s.script, f.firstChild), s.errorScript && f.insertBefore(s.errorScript, s.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class er {
            constructor(e, s) {
              this.url = e, this.data = s;
            }
            send(e) {
              if (!this.request) {
                var s = Jn(this.data), h = this.url + "/" + e.number + "?" + s;
                this.request = N.createScriptRequest(h), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var tr = function(a, e) {
            return function(s, h) {
              var f = "http" + (e ? "s" : "") + "://", y = f + (a.host || a.options.host) + a.options.path, T = N.createJSONPRequest(y, s), P = N.ScriptReceivers.create(function(M, B) {
                l.remove(P), T.cleanup(), B && B.host && (a.host = B.host), h && h(M, B);
              });
              T.send(P);
            };
          }, nr = {
            name: "jsonp",
            getAgent: tr
          }, rr = nr;
          function qe(a, e, s) {
            var h = a + (e.useTLS ? "s" : ""), f = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return h + "://" + f + s;
          }
          function Ge(a, e) {
            var s = "/app/" + a, h = "?protocol=" + u.PROTOCOL + "&client=js&version=" + u.VERSION + (e ? "&" + e : "");
            return s + h;
          }
          var ir = {
            getInitial: function(a, e) {
              var s = (e.httpPath || "") + Ge(a, "flash=false");
              return qe("ws", e, s);
            }
          }, sr = {
            getInitial: function(a, e) {
              var s = (e.httpPath || "/pusher") + Ge(a);
              return qe("http", e, s);
            }
          }, or = {
            getInitial: function(a, e) {
              return qe("http", e, e.httpPath || "/pusher");
            },
            getPath: function(a, e) {
              return Ge(a);
            }
          };
          class ar {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Ve(e)];
            }
            add(e, s, h) {
              var f = Ve(e);
              this._callbacks[f] = this._callbacks[f] || [], this._callbacks[f].push({
                fn: s,
                context: h
              });
            }
            remove(e, s, h) {
              if (!e && !s && !h) {
                this._callbacks = {};
                return;
              }
              var f = e ? [Ve(e)] : Tt(this._callbacks);
              s || h ? this.removeCallback(f, s, h) : this.removeAllCallbacks(f);
            }
            removeCallback(e, s, h) {
              me(e, function(f) {
                this._callbacks[f] = At(this._callbacks[f] || [], function(y) {
                  return s && s !== y.fn || h && h !== y.context;
                }), this._callbacks[f].length === 0 && delete this._callbacks[f];
              }, this);
            }
            removeAllCallbacks(e) {
              me(e, function(s) {
                delete this._callbacks[s];
              }, this);
            }
          }
          function Ve(a) {
            return "_" + a;
          }
          class ne {
            constructor(e) {
              this.callbacks = new ar(), this.global_callbacks = [], this.failThrough = e;
            }
            bind(e, s, h) {
              return this.callbacks.add(e, s, h), this;
            }
            bind_global(e) {
              return this.global_callbacks.push(e), this;
            }
            unbind(e, s, h) {
              return this.callbacks.remove(e, s, h), this;
            }
            unbind_global(e) {
              return e ? (this.global_callbacks = At(this.global_callbacks || [], (s) => s !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, s, h) {
              for (var f = 0; f < this.global_callbacks.length; f++)
                this.global_callbacks[f](e, s);
              var y = this.callbacks.get(e), T = [];
              if (h ? T.push(s, h) : s && T.push(s), y && y.length > 0)
                for (var f = 0; f < y.length; f++)
                  y[f].fn.apply(y[f].context || window, T);
              else this.failThrough && this.failThrough(e, s);
              return this;
            }
          }
          class cr extends ne {
            constructor(e, s, h, f, y) {
              super(), this.initialize = N.transportConnectionInitializer, this.hooks = e, this.name = s, this.priority = h, this.key = f, this.options = y, this.state = "new", this.timeline = y.timeline, this.activityTimeout = y.activityTimeout, this.id = this.timeline.generateUniqueID();
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
              } catch (s) {
                return K.defer(() => {
                  this.onError(s), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), j.debug("Connecting", { transport: this.name, url: e }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(e) {
              return this.state === "open" ? (K.defer(() => {
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
            changeState(e, s) {
              this.state = e, this.timeline.info(this.buildTimelineMessage({
                state: e,
                params: s
              })), this.emit(e, s);
            }
            buildTimelineMessage(e) {
              return W({ cid: this.id }, e);
            }
          }
          class ue {
            constructor(e) {
              this.hooks = e;
            }
            isSupported(e) {
              return this.hooks.isSupported(e);
            }
            createConnection(e, s, h, f) {
              return new cr(this.hooks, e, s, h, f);
            }
          }
          var lr = new ue({
            urls: ir,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!N.getWebSocketAPI();
            },
            isSupported: function() {
              return !!N.getWebSocketAPI();
            },
            getSocket: function(a) {
              return N.createWebSocket(a);
            }
          }), Pt = {
            urls: sr,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Lt = W({
            getSocket: function(a) {
              return N.HTTPFactory.createStreamingSocket(a);
            }
          }, Pt), Mt = W({
            getSocket: function(a) {
              return N.HTTPFactory.createPollingSocket(a);
            }
          }, Pt), Nt = {
            isSupported: function() {
              return N.isXHRSupported();
            }
          }, ur = new ue(W({}, Lt, Nt)), hr = new ue(W({}, Mt, Nt)), dr = {
            ws: lr,
            xhr_streaming: ur,
            xhr_polling: hr
          }, Re = dr, fr = new ue({
            file: "sockjs",
            urls: or,
            handlesActivityChecks: !0,
            supportsPing: !1,
            isSupported: function() {
              return !0;
            },
            isInitialized: function() {
              return window.SockJS !== void 0;
            },
            getSocket: function(a, e) {
              return new window.SockJS(a, null, {
                js_path: k.getPath("sockjs", {
                  useTLS: e.useTLS
                }),
                ignore_null_origin: e.ignoreNullOrigin
              });
            },
            beforeOpen: function(a, e) {
              a.send(JSON.stringify({
                path: e
              }));
            }
          }), Ot = {
            isSupported: function(a) {
              var e = N.isXDRSupported(a.useTLS);
              return e;
            }
          }, pr = new ue(W({}, Lt, Ot)), gr = new ue(W({}, Mt, Ot));
          Re.xdr_streaming = pr, Re.xdr_polling = gr, Re.sockjs = fr;
          var mr = Re;
          class yr extends ne {
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
          var vr = new yr();
          class br {
            constructor(e, s, h) {
              this.manager = e, this.transport = s, this.minPingDelay = h.minPingDelay, this.maxPingDelay = h.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(e, s, h, f) {
              f = W({}, f, {
                activityTimeout: this.pingDelay
              });
              var y = this.transport.createConnection(e, s, h, f), T = null, P = function() {
                y.unbind("open", P), y.bind("closed", M), T = K.now();
              }, M = (B) => {
                if (y.unbind("closed", M), B.code === 1002 || B.code === 1003)
                  this.manager.reportDeath();
                else if (!B.wasClean && T) {
                  var D = K.now() - T;
                  D < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(D / 2, this.minPingDelay));
                }
              };
              return y.bind("open", P), y;
            }
            isSupported(e) {
              return this.manager.isAlive() && this.transport.isSupported(e);
            }
          }
          const xt = {
            decodeMessage: function(a) {
              try {
                var e = JSON.parse(a.data), s = e.data;
                if (typeof s == "string")
                  try {
                    s = JSON.parse(e.data);
                  } catch {
                  }
                var h = {
                  event: e.event,
                  channel: e.channel,
                  data: s
                };
                return e.user_id && (h.user_id = e.user_id), h;
              } catch (f) {
                throw { type: "MessageParseError", error: f, data: a.data };
              }
            },
            encodeMessage: function(a) {
              return JSON.stringify(a);
            },
            processHandshake: function(a) {
              var e = xt.decodeMessage(a);
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
            getCloseAction: function(a) {
              return a.code < 4e3 ? a.code >= 1002 && a.code <= 1004 ? "backoff" : null : a.code === 4e3 ? "tls_only" : a.code < 4100 ? "refused" : a.code < 4200 ? "backoff" : a.code < 4300 ? "retry" : "refused";
            },
            getCloseError: function(a) {
              return a.code !== 1e3 && a.code !== 1001 ? {
                type: "PusherError",
                data: {
                  code: a.code,
                  message: a.reason || a.message
                }
              } : null;
            }
          };
          var ae = xt;
          class wr extends ne {
            constructor(e, s) {
              super(), this.id = e, this.transport = s, this.activityTimeout = s.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(e) {
              return this.transport.send(e);
            }
            send_event(e, s, h) {
              var f = { event: e, data: s };
              return h && (f.channel = h), j.debug("Event sent", f), this.send(ae.encodeMessage(f));
            }
            ping() {
              this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
            }
            close() {
              this.transport.close();
            }
            bindListeners() {
              var e = {
                message: (h) => {
                  var f;
                  try {
                    f = ae.decodeMessage(h);
                  } catch (y) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: y,
                      data: h.data
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
                error: (h) => {
                  this.emit("error", h);
                },
                closed: (h) => {
                  s(), h && h.code && this.handleCloseEvent(h), this.transport = null, this.emit("closed");
                }
              }, s = () => {
                te(e, (h, f) => {
                  this.transport.unbind(f, h);
                });
              };
              te(e, (h, f) => {
                this.transport.bind(f, h);
              });
            }
            handleCloseEvent(e) {
              var s = ae.getCloseAction(e), h = ae.getCloseError(e);
              h && this.emit("error", h), s && this.emit(s, { action: s, error: h });
            }
          }
          class kr {
            constructor(e, s) {
              this.transport = e, this.callback = s, this.bindListeners();
            }
            close() {
              this.unbindListeners(), this.transport.close();
            }
            bindListeners() {
              this.onMessage = (e) => {
                this.unbindListeners();
                var s;
                try {
                  s = ae.processHandshake(e);
                } catch (h) {
                  this.finish("error", { error: h }), this.transport.close();
                  return;
                }
                s.action === "connected" ? this.finish("connected", {
                  connection: new wr(s.id, this.transport),
                  activityTimeout: s.activityTimeout
                }) : (this.finish(s.action, { error: s.error }), this.transport.close());
              }, this.onClosed = (e) => {
                this.unbindListeners();
                var s = ae.getCloseAction(e) || "backoff", h = ae.getCloseError(e);
                this.finish(s, { error: h });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, s) {
              this.callback(W({ transport: this.transport, action: e }, s));
            }
          }
          class Cr {
            constructor(e, s) {
              this.timeline = e, this.options = s || {};
            }
            send(e, s) {
              this.timeline.isEmpty() || this.timeline.send(N.TimelineTransport.getAgent(this, e), s);
            }
          }
          class $e extends ne {
            constructor(e, s) {
              super(function(h, f) {
                j.debug("No callbacks on " + e + " for " + h);
              }), this.name = e, this.pusher = s, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, s) {
              return s(null, { auth: "" });
            }
            trigger(e, s) {
              if (e.indexOf("client-") !== 0)
                throw new w("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var h = S.buildLogSuffix("triggeringClientEvents");
                j.warn(`Client event triggered before channel 'subscription_succeeded' event . ${h}`);
              }
              return this.pusher.send_event(e, s, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(e) {
              var s = e.event, h = e.data;
              if (s === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(e);
              else if (s === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(e);
              else if (s.indexOf("pusher_internal:") !== 0) {
                var f = {};
                this.emit(s, h, f);
              }
            }
            handleSubscriptionSucceededEvent(e) {
              this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", e.data);
            }
            handleSubscriptionCountEvent(e) {
              e.data.subscription_count && (this.subscriptionCount = e.data.subscription_count), this.emit("pusher:subscription_count", e.data);
            }
            subscribe() {
              this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (e, s) => {
                e ? (this.subscriptionPending = !1, j.error(e.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: e.message
                }, e instanceof x ? { status: e.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
                  auth: s.auth,
                  channel_data: s.channel_data,
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
          class Ke extends $e {
            authorize(e, s) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: e
              }, s);
            }
          }
          class Sr {
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
              te(this.members, (s, h) => {
                e(this.get(h));
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
              var s = this.get(e.user_id);
              return s && (delete this.members[e.user_id], this.count--), s;
            }
            reset() {
              this.members = {}, this.count = 0, this.myID = null, this.me = null;
            }
          }
          var _r = function(a, e, s, h) {
            function f(y) {
              return y instanceof s ? y : new s(function(T) {
                T(y);
              });
            }
            return new (s || (s = Promise))(function(y, T) {
              function P(D) {
                try {
                  B(h.next(D));
                } catch (H) {
                  T(H);
                }
              }
              function M(D) {
                try {
                  B(h.throw(D));
                } catch (H) {
                  T(H);
                }
              }
              function B(D) {
                D.done ? y(D.value) : f(D.value).then(P, M);
              }
              B((h = h.apply(a, e || [])).next());
            });
          };
          class Tr extends Ke {
            constructor(e, s) {
              super(e, s), this.members = new Sr();
            }
            authorize(e, s) {
              super.authorize(e, (h, f) => _r(this, void 0, void 0, function* () {
                if (!h)
                  if (f = f, f.channel_data != null) {
                    var y = JSON.parse(f.channel_data);
                    this.members.setMyID(y.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let T = S.buildLogSuffix("authorizationEndpoint");
                    j.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${T}, or the user should be signed in.`), s("Invalid auth response");
                    return;
                  }
                s(h, f);
              }));
            }
            handleEvent(e) {
              var s = e.event;
              if (s.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(e);
              else {
                var h = e.data, f = {};
                e.user_id && (f.user_id = e.user_id), this.emit(s, h, f);
              }
            }
            handleInternalEvent(e) {
              var s = e.event, h = e.data;
              switch (s) {
                case "pusher_internal:subscription_succeeded":
                  this.handleSubscriptionSucceededEvent(e);
                  break;
                case "pusher_internal:subscription_count":
                  this.handleSubscriptionCountEvent(e);
                  break;
                case "pusher_internal:member_added":
                  var f = this.members.addMember(h);
                  this.emit("pusher:member_added", f);
                  break;
                case "pusher_internal:member_removed":
                  var y = this.members.removeMember(h);
                  y && this.emit("pusher:member_removed", y);
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
          var Ir = n(1), Je = n(0);
          class Ar extends Ke {
            constructor(e, s, h) {
              super(e, s), this.key = null, this.nacl = h;
            }
            authorize(e, s) {
              super.authorize(e, (h, f) => {
                if (h) {
                  s(h, f);
                  return;
                }
                let y = f.shared_secret;
                if (!y) {
                  s(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(Je.decode)(y), delete f.shared_secret, s(null, f);
              });
            }
            trigger(e, s) {
              throw new A("Client events are not currently supported for encrypted channels");
            }
            handleEvent(e) {
              var s = e.event, h = e.data;
              if (s.indexOf("pusher_internal:") === 0 || s.indexOf("pusher:") === 0) {
                super.handleEvent(e);
                return;
              }
              this.handleEncryptedEvent(s, h);
            }
            handleEncryptedEvent(e, s) {
              if (!this.key) {
                j.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!s.ciphertext || !s.nonce) {
                j.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + s);
                return;
              }
              let h = Object(Je.decode)(s.ciphertext);
              if (h.length < this.nacl.secretbox.overheadLength) {
                j.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${h.length}`);
                return;
              }
              let f = Object(Je.decode)(s.nonce);
              if (f.length < this.nacl.secretbox.nonceLength) {
                j.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${f.length}`);
                return;
              }
              let y = this.nacl.secretbox.open(h, f, this.key);
              if (y === null) {
                j.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (T, P) => {
                  if (T) {
                    j.error(`Failed to make a request to the authEndpoint: ${P}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (y = this.nacl.secretbox.open(h, f, this.key), y === null) {
                    j.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(e, this.getDataToEmit(y));
                });
                return;
              }
              this.emit(e, this.getDataToEmit(y));
            }
            getDataToEmit(e) {
              let s = Object(Ir.decode)(e);
              try {
                return JSON.parse(s);
              } catch {
                return s;
              }
            }
          }
          class Rr extends ne {
            constructor(e, s) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = s, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var h = N.getNetwork();
              h.bind("online", () => {
                this.timeline.info({ netinfo: "online" }), (this.state === "connecting" || this.state === "unavailable") && this.retryIn(0);
              }), h.bind("offline", () => {
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
            send_event(e, s, h) {
              return this.connection ? this.connection.send_event(e, s, h) : !1;
            }
            disconnect() {
              this.disconnectInternally(), this.updateState("disconnected");
            }
            isUsingTLS() {
              return this.usingTLS;
            }
            startConnecting() {
              var e = (s, h) => {
                s ? this.runner = this.strategy.connect(0, e) : h.action === "error" ? (this.emit("error", {
                  type: "HandshakeError",
                  error: h.error
                }), this.timeline.error({ handshakeError: h.error })) : (this.abortConnecting(), this.handshakeCallbacks[h.action](h));
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
              this.timeline.info({ action: "retry", delay: e }), e > 0 && this.emit("connecting_in", Math.round(e / 1e3)), this.retryTimer = new oe(e || 0, () => {
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
            buildConnectionCallbacks(e) {
              return W({}, e, {
                message: (s) => {
                  this.resetActivityCheck(), this.emit("message", s);
                },
                ping: () => {
                  this.send_event("pusher:pong", {});
                },
                activity: () => {
                  this.resetActivityCheck();
                },
                error: (s) => {
                  this.emit("error", s);
                },
                closed: () => {
                  this.abandonConnection(), this.shouldRetry() && this.retryIn(1e3);
                }
              });
            }
            buildHandshakeCallbacks(e) {
              return W({}, e, {
                connected: (s) => {
                  this.activityTimeout = Math.min(this.options.activityTimeout, s.activityTimeout, s.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(s.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
                }
              });
            }
            buildErrorCallbacks() {
              let e = (s) => (h) => {
                h.error && this.emit("error", { type: "WebSocketError", error: h.error }), s(h);
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
              for (var s in this.connectionCallbacks)
                this.connection.bind(s, this.connectionCallbacks[s]);
              this.resetActivityCheck();
            }
            abandonConnection() {
              if (this.connection) {
                this.stopActivityCheck();
                for (var e in this.connectionCallbacks)
                  this.connection.unbind(e, this.connectionCallbacks[e]);
                var s = this.connection;
                return this.connection = null, s;
              }
            }
            updateState(e, s) {
              var h = this.state;
              if (this.state = e, h !== e) {
                var f = e;
                f === "connected" && (f += " with new socket ID " + s.socket_id), j.debug("State changed", h + " -> " + f), this.timeline.info({ state: e, params: s }), this.emit("state_change", { previous: h, current: e }), this.emit(e, s);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class Er {
            constructor() {
              this.channels = {};
            }
            add(e, s) {
              return this.channels[e] || (this.channels[e] = Pr(e, s)), this.channels[e];
            }
            all() {
              return qn(this.channels);
            }
            find(e) {
              return this.channels[e];
            }
            remove(e) {
              var s = this.channels[e];
              return delete this.channels[e], s;
            }
            disconnect() {
              te(this.channels, function(e) {
                e.disconnect();
              });
            }
          }
          function Pr(a, e) {
            if (a.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return re.createEncryptedChannel(a, e, e.config.nacl);
              let s = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", h = S.buildLogSuffix("encryptedChannelSupport");
              throw new A(`${s}. ${h}`);
            } else {
              if (a.indexOf("private-") === 0)
                return re.createPrivateChannel(a, e);
              if (a.indexOf("presence-") === 0)
                return re.createPresenceChannel(a, e);
              if (a.indexOf("#") === 0)
                throw new v('Cannot create a channel with name "' + a + '".');
              return re.createChannel(a, e);
            }
          }
          var Lr = {
            createChannels() {
              return new Er();
            },
            createConnectionManager(a, e) {
              return new Rr(a, e);
            },
            createChannel(a, e) {
              return new $e(a, e);
            },
            createPrivateChannel(a, e) {
              return new Ke(a, e);
            },
            createPresenceChannel(a, e) {
              return new Tr(a, e);
            },
            createEncryptedChannel(a, e, s) {
              return new Ar(a, e, s);
            },
            createTimelineSender(a, e) {
              return new Cr(a, e);
            },
            createHandshake(a, e) {
              return new kr(a, e);
            },
            createAssistantToTheTransportManager(a, e, s) {
              return new br(a, e, s);
            }
          }, re = Lr;
          class Bt {
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
          class ce {
            constructor(e, s) {
              this.strategies = e, this.loop = !!s.loop, this.failFast = !!s.failFast, this.timeout = s.timeout, this.timeoutLimit = s.timeoutLimit;
            }
            isSupported() {
              return Et(this.strategies, K.method("isSupported"));
            }
            connect(e, s) {
              var h = this.strategies, f = 0, y = this.timeout, T = null, P = (M, B) => {
                B ? s(null, B) : (f = f + 1, this.loop && (f = f % h.length), f < h.length ? (y && (y = y * 2, this.timeoutLimit && (y = Math.min(y, this.timeoutLimit))), T = this.tryStrategy(h[f], e, { timeout: y, failFast: this.failFast }, P)) : s(!0));
              };
              return T = this.tryStrategy(h[f], e, { timeout: y, failFast: this.failFast }, P), {
                abort: function() {
                  T.abort();
                },
                forceMinPriority: function(M) {
                  e = M, T && T.forceMinPriority(M);
                }
              };
            }
            tryStrategy(e, s, h, f) {
              var y = null, T = null;
              return h.timeout > 0 && (y = new oe(h.timeout, function() {
                T.abort(), f(!0);
              })), T = e.connect(s, function(P, M) {
                P && y && y.isRunning() && !h.failFast || (y && y.ensureAborted(), f(P, M));
              }), {
                abort: function() {
                  y && y.ensureAborted(), T.abort();
                },
                forceMinPriority: function(P) {
                  T.forceMinPriority(P);
                }
              };
            }
          }
          class We {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return Et(this.strategies, K.method("isSupported"));
            }
            connect(e, s) {
              return Mr(this.strategies, e, function(h, f) {
                return function(y, T) {
                  if (f[h].error = y, y) {
                    Nr(f) && s(!0);
                    return;
                  }
                  me(f, function(P) {
                    P.forceMinPriority(T.transport.priority);
                  }), s(null, T);
                };
              });
            }
          }
          function Mr(a, e, s) {
            var h = It(a, function(f, y, T, P) {
              return f.connect(e, s(y, P));
            });
            return {
              abort: function() {
                me(h, Or);
              },
              forceMinPriority: function(f) {
                me(h, function(y) {
                  y.forceMinPriority(f);
                });
              }
            };
          }
          function Nr(a) {
            return $n(a, function(e) {
              return !!e.error;
            });
          }
          function Or(a) {
            !a.error && !a.aborted && (a.abort(), a.aborted = !0);
          }
          class xr {
            constructor(e, s, h) {
              this.strategy = e, this.transports = s, this.ttl = h.ttl || 1800 * 1e3, this.usingTLS = h.useTLS, this.timeline = h.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, s) {
              var h = this.usingTLS, f = Br(h), y = f && f.cacheSkipCount ? f.cacheSkipCount : 0, T = [this.strategy];
              if (f && f.timestamp + this.ttl >= K.now()) {
                var P = this.transports[f.transport];
                P && (["ws", "wss"].includes(f.transport) || y > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: f.transport,
                  latency: f.latency
                }), T.push(new ce([P], {
                  timeout: f.latency * 2 + 1e3,
                  failFast: !0
                }))) : y++);
              }
              var M = K.now(), B = T.pop().connect(e, function D(H, Le) {
                H ? (Dt(h), T.length > 0 ? (M = K.now(), B = T.pop().connect(e, D)) : s(H)) : (Dr(h, Le.transport.name, K.now() - M, y), s(null, Le));
              });
              return {
                abort: function() {
                  B.abort();
                },
                forceMinPriority: function(D) {
                  e = D, B && B.forceMinPriority(D);
                }
              };
            }
          }
          function Xe(a) {
            return "pusherTransport" + (a ? "TLS" : "NonTLS");
          }
          function Br(a) {
            var e = N.getLocalStorage();
            if (e)
              try {
                var s = e[Xe(a)];
                if (s)
                  return JSON.parse(s);
              } catch {
                Dt(a);
              }
            return null;
          }
          function Dr(a, e, s, h) {
            var f = N.getLocalStorage();
            if (f)
              try {
                f[Xe(a)] = Ae({
                  timestamp: K.now(),
                  transport: e,
                  latency: s,
                  cacheSkipCount: h
                });
              } catch {
              }
          }
          function Dt(a) {
            var e = N.getLocalStorage();
            if (e)
              try {
                delete e[Xe(a)];
              } catch {
              }
          }
          class Ee {
            constructor(e, { delay: s }) {
              this.strategy = e, this.options = { delay: s };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, s) {
              var h = this.strategy, f, y = new oe(this.options.delay, function() {
                f = h.connect(e, s);
              });
              return {
                abort: function() {
                  y.ensureAborted(), f && f.abort();
                },
                forceMinPriority: function(T) {
                  e = T, f && f.forceMinPriority(T);
                }
              };
            }
          }
          class ye {
            constructor(e, s, h) {
              this.test = e, this.trueBranch = s, this.falseBranch = h;
            }
            isSupported() {
              var e = this.test() ? this.trueBranch : this.falseBranch;
              return e.isSupported();
            }
            connect(e, s) {
              var h = this.test() ? this.trueBranch : this.falseBranch;
              return h.connect(e, s);
            }
          }
          class Fr {
            constructor(e) {
              this.strategy = e;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, s) {
              var h = this.strategy.connect(e, function(f, y) {
                y && h.abort(), s(f, y);
              });
              return h;
            }
          }
          function ve(a) {
            return function() {
              return a.isSupported();
            };
          }
          var Ur = function(a, e, s) {
            var h = {};
            function f(Jt, Ui, ji, Hi, zi) {
              var Wt = s(a, Jt, Ui, ji, Hi, zi);
              return h[Jt] = Wt, Wt;
            }
            var y = Object.assign({}, e, {
              hostNonTLS: a.wsHost + ":" + a.wsPort,
              hostTLS: a.wsHost + ":" + a.wssPort,
              httpPath: a.wsPath
            }), T = Object.assign({}, y, {
              useTLS: !0
            }), P = Object.assign({}, e, {
              hostNonTLS: a.httpHost + ":" + a.httpPort,
              hostTLS: a.httpHost + ":" + a.httpsPort,
              httpPath: a.httpPath
            }), M = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, B = new Bt({
              minPingDelay: 1e4,
              maxPingDelay: a.activityTimeout
            }), D = new Bt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: a.activityTimeout
            }), H = f("ws", "ws", 3, y, B), Le = f("wss", "ws", 3, T, B), Oi = f("sockjs", "sockjs", 1, P), zt = f("xhr_streaming", "xhr_streaming", 1, P, D), xi = f("xdr_streaming", "xdr_streaming", 1, P, D), qt = f("xhr_polling", "xhr_polling", 1, P), Bi = f("xdr_polling", "xdr_polling", 1, P), Gt = new ce([H], M), Di = new ce([Le], M), Fi = new ce([Oi], M), Vt = new ce([
              new ye(ve(zt), zt, xi)
            ], M), $t = new ce([
              new ye(ve(qt), qt, Bi)
            ], M), Kt = new ce([
              new ye(ve(Vt), new We([
                Vt,
                new Ee($t, { delay: 4e3 })
              ]), $t)
            ], M), et = new ye(ve(Kt), Kt, Fi), tt;
            return e.useTLS ? tt = new We([
              Gt,
              new Ee(et, { delay: 2e3 })
            ]) : tt = new We([
              Gt,
              new Ee(Di, { delay: 2e3 }),
              new Ee(et, { delay: 5e3 })
            ]), new xr(new Fr(new ye(ve(H), tt, et)), h, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, jr = Ur, Hr = function() {
            var a = this;
            a.timeline.info(a.buildTimelineMessage({
              transport: a.name + (a.options.useTLS ? "s" : "")
            })), a.hooks.isInitialized() ? a.changeState("initialized") : a.hooks.file ? (a.changeState("initializing"), k.load(a.hooks.file, { useTLS: a.options.useTLS }, function(e, s) {
              a.hooks.isInitialized() ? (a.changeState("initialized"), s(!0)) : (e && a.onError(e), a.onClose(), s(!1));
            })) : a.onClose();
          }, zr = {
            getRequest: function(a) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                a.emit("error", new _()), a.close();
              }, e.onerror = function(s) {
                a.emit("error", s), a.close();
              }, e.onprogress = function() {
                e.responseText && e.responseText.length > 0 && a.onChunk(200, e.responseText);
              }, e.onload = function() {
                e.responseText && e.responseText.length > 0 && a.onChunk(200, e.responseText), a.emit("finished", 200), a.close();
              }, e;
            },
            abortRequest: function(a) {
              a.ontimeout = a.onerror = a.onprogress = a.onload = null, a.abort();
            }
          }, qr = zr;
          const Gr = 256 * 1024;
          class Vr extends ne {
            constructor(e, s, h) {
              super(), this.hooks = e, this.method = s, this.url = h;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, N.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (N.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
            }
            onChunk(e, s) {
              for (; ; ) {
                var h = this.advanceBuffer(s);
                if (h)
                  this.emit("chunk", { status: e, data: h });
                else
                  break;
              }
              this.isBufferTooLong(s) && this.emit("buffer_too_long");
            }
            advanceBuffer(e) {
              var s = e.slice(this.position), h = s.indexOf(`
`);
              return h !== -1 ? (this.position += h + 1, s.slice(0, h)) : null;
            }
            isBufferTooLong(e) {
              return this.position === e.length && e.length > Gr;
            }
          }
          var Qe;
          (function(a) {
            a[a.CONNECTING = 0] = "CONNECTING", a[a.OPEN = 1] = "OPEN", a[a.CLOSED = 3] = "CLOSED";
          })(Qe || (Qe = {}));
          var le = Qe, $r = 1;
          class Kr {
            constructor(e, s) {
              this.hooks = e, this.session = Ut(1e3) + "/" + Qr(8), this.location = Jr(s), this.readyState = le.CONNECTING, this.openStream();
            }
            send(e) {
              return this.sendRaw(JSON.stringify([e]));
            }
            ping() {
              this.hooks.sendHeartbeat(this);
            }
            close(e, s) {
              this.onClose(e, s, !0);
            }
            sendRaw(e) {
              if (this.readyState === le.OPEN)
                try {
                  return N.createSocketRequest("POST", Ft(Wr(this.location, this.session))).start(e), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(e, s, h) {
              this.closeStream(), this.readyState = le.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: s,
                wasClean: h
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === le.OPEN && this.onActivity();
                var s, h = e.data.slice(0, 1);
                switch (h) {
                  case "o":
                    s = JSON.parse(e.data.slice(1) || "{}"), this.onOpen(s);
                    break;
                  case "a":
                    s = JSON.parse(e.data.slice(1) || "[]");
                    for (var f = 0; f < s.length; f++)
                      this.onEvent(s[f]);
                    break;
                  case "m":
                    s = JSON.parse(e.data.slice(1) || "null"), this.onEvent(s);
                    break;
                  case "h":
                    this.hooks.onHeartbeat(this);
                    break;
                  case "c":
                    s = JSON.parse(e.data.slice(1) || "[]"), this.onClose(s[0], s[1], !0);
                    break;
                }
              }
            }
            onOpen(e) {
              this.readyState === le.CONNECTING ? (e && e.hostname && (this.location.base = Xr(this.location.base, e.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
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
              this.stream = N.createSocketRequest("POST", Ft(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
                this.onChunk(e);
              }), this.stream.bind("finished", (e) => {
                this.hooks.onFinished(this, e);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (e) {
                K.defer(() => {
                  this.onError(e), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function Jr(a) {
            var e = /([^\?]*)\/*(\??.*)/.exec(a);
            return {
              base: e[1],
              queryString: e[2]
            };
          }
          function Wr(a, e) {
            return a.base + "/" + e + "/xhr_send";
          }
          function Ft(a) {
            var e = a.indexOf("?") === -1 ? "?" : "&";
            return a + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + $r++;
          }
          function Xr(a, e) {
            var s = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(a);
            return s[1] + e + s[3];
          }
          function Ut(a) {
            return N.randomInt(a);
          }
          function Qr(a) {
            for (var e = [], s = 0; s < a; s++)
              e.push(Ut(32).toString(32));
            return e.join("");
          }
          var Yr = Kr, Zr = {
            getReceiveURL: function(a, e) {
              return a.base + "/" + e + "/xhr_streaming" + a.queryString;
            },
            onHeartbeat: function(a) {
              a.sendRaw("[]");
            },
            sendHeartbeat: function(a) {
              a.sendRaw("[]");
            },
            onFinished: function(a, e) {
              a.onClose(1006, "Connection interrupted (" + e + ")", !1);
            }
          }, ei = Zr, ti = {
            getReceiveURL: function(a, e) {
              return a.base + "/" + e + "/xhr" + a.queryString;
            },
            onHeartbeat: function() {
            },
            sendHeartbeat: function(a) {
              a.sendRaw("[]");
            },
            onFinished: function(a, e) {
              e === 200 ? a.reconnect() : a.onClose(1006, "Connection interrupted (" + e + ")", !1);
            }
          }, ni = ti, ri = {
            getRequest: function(a) {
              var e = N.getXHRAPI(), s = new e();
              return s.onreadystatechange = s.onprogress = function() {
                switch (s.readyState) {
                  case 3:
                    s.responseText && s.responseText.length > 0 && a.onChunk(s.status, s.responseText);
                    break;
                  case 4:
                    s.responseText && s.responseText.length > 0 && a.onChunk(s.status, s.responseText), a.emit("finished", s.status), a.close();
                    break;
                }
              }, s;
            },
            abortRequest: function(a) {
              a.onreadystatechange = null, a.abort();
            }
          }, ii = ri, si = {
            createStreamingSocket(a) {
              return this.createSocket(ei, a);
            },
            createPollingSocket(a) {
              return this.createSocket(ni, a);
            },
            createSocket(a, e) {
              return new Yr(a, e);
            },
            createXHR(a, e) {
              return this.createRequest(ii, a, e);
            },
            createRequest(a, e, s) {
              return new Vr(a, e, s);
            }
          }, jt = si;
          jt.createXDR = function(a, e) {
            return this.createRequest(qr, a, e);
          };
          var oi = jt, ai = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: g,
            getDefaultStrategy: jr,
            Transports: mr,
            transportConnectionInitializer: Hr,
            HTTPFactory: oi,
            TimelineTransport: rr,
            getXHRAPI() {
              return window.XMLHttpRequest;
            },
            getWebSocketAPI() {
              return window.WebSocket || window.MozWebSocket;
            },
            setup(a) {
              window.Pusher = a;
              var e = () => {
                this.onDocumentBody(a.ready);
              };
              window.JSON ? e() : k.load("json2", {}, e);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: F, jsonp: Yn };
            },
            onDocumentBody(a) {
              document.body ? a() : setTimeout(() => {
                this.onDocumentBody(a);
              }, 0);
            },
            createJSONPRequest(a, e) {
              return new er(a, e);
            },
            createScriptRequest(a) {
              return new Zn(a);
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
              var a = this.getXHRAPI();
              return new a();
            },
            createMicrosoftXHR() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            },
            getNetwork() {
              return vr;
            },
            createWebSocket(a) {
              var e = this.getWebSocketAPI();
              return new e(a);
            },
            createSocketRequest(a, e) {
              if (this.isXHRSupported())
                return this.HTTPFactory.createXHR(a, e);
              if (this.isXDRSupported(e.indexOf("https:") === 0))
                return this.HTTPFactory.createXDR(a, e);
              throw "Cross-origin HTTP requests are not supported";
            },
            isXHRSupported() {
              var a = this.getXHRAPI();
              return !!a && new a().withCredentials !== void 0;
            },
            isXDRSupported(a) {
              var e = a ? "https:" : "http:", s = this.getProtocol();
              return !!window.XDomainRequest && s === e;
            },
            addUnloadListener(a) {
              window.addEventListener !== void 0 ? window.addEventListener("unload", a, !1) : window.attachEvent !== void 0 && window.attachEvent("onunload", a);
            },
            removeUnloadListener(a) {
              window.addEventListener !== void 0 ? window.removeEventListener("unload", a, !1) : window.detachEvent !== void 0 && window.detachEvent("onunload", a);
            },
            randomInt(a) {
              return Math.floor(function() {
                return (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
              }() * a);
            }
          }, N = ai, Ye;
          (function(a) {
            a[a.ERROR = 3] = "ERROR", a[a.INFO = 6] = "INFO", a[a.DEBUG = 7] = "DEBUG";
          })(Ye || (Ye = {}));
          var Pe = Ye;
          class ci {
            constructor(e, s, h) {
              this.key = e, this.session = s, this.events = [], this.options = h || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, s) {
              e <= this.options.level && (this.events.push(W({}, s, { timestamp: K.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(Pe.ERROR, e);
            }
            info(e) {
              this.log(Pe.INFO, e);
            }
            debug(e) {
              this.log(Pe.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, s) {
              var h = W({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], e(h, (f, y) => {
                f || this.sent++, s && s(f, y);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class li {
            constructor(e, s, h, f) {
              this.name = e, this.priority = s, this.transport = h, this.options = f || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(e, s) {
              if (this.isSupported()) {
                if (this.priority < e)
                  return Ht(new I(), s);
              } else return Ht(new O(), s);
              var h = !1, f = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), y = null, T = function() {
                f.unbind("initialized", T), f.connect();
              }, P = function() {
                y = re.createHandshake(f, function(H) {
                  h = !0, D(), s(null, H);
                });
              }, M = function(H) {
                D(), s(H);
              }, B = function() {
                D();
                var H;
                H = Ae(f), s(new E(H));
              }, D = function() {
                f.unbind("initialized", T), f.unbind("open", P), f.unbind("error", M), f.unbind("closed", B);
              };
              return f.bind("initialized", T), f.bind("open", P), f.bind("error", M), f.bind("closed", B), f.initialize(), {
                abort: () => {
                  h || (D(), y ? y.close() : f.close());
                },
                forceMinPriority: (H) => {
                  h || this.priority < H && (y ? y.close() : f.close());
                }
              };
            }
          }
          function Ht(a, e) {
            return K.defer(function() {
              e(a);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: hi } = N;
          var di = function(a, e, s, h, f, y) {
            var T = hi[s];
            if (!T)
              throw new L(s);
            var P = (!a.enabledTransports || _t(a.enabledTransports, e) !== -1) && (!a.disabledTransports || _t(a.disabledTransports, e) === -1), M;
            return P ? (f = Object.assign({ ignoreNullOrigin: a.ignoreNullOrigin }, f), M = new li(e, h, y ? y.getAssistant(T) : T, f)) : M = fi, M;
          }, fi = {
            isSupported: function() {
              return !1;
            },
            connect: function(a, e) {
              var s = K.defer(function() {
                e(new O());
              });
              return {
                abort: function() {
                  s.ensureAborted();
                },
                forceMinPriority: function() {
                }
              };
            }
          };
          function pi(a) {
            if (a == null)
              throw "You must pass an options object";
            if (a.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in a && j.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const gi = (a, e) => {
            var s = "socket_id=" + encodeURIComponent(a.socketId);
            for (var h in e.params)
              s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(e.params[h]);
            if (e.paramsProvider != null) {
              let f = e.paramsProvider();
              for (var h in f)
                s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(f[h]);
            }
            return s;
          };
          var mi = (a) => {
            if (typeof N.getAuthorizers()[a.transport] > "u")
              throw `'${a.transport}' is not a recognized auth transport`;
            return (e, s) => {
              const h = gi(e, a);
              N.getAuthorizers()[a.transport](N, h, a, C.UserAuthentication, s);
            };
          };
          const yi = (a, e) => {
            var s = "socket_id=" + encodeURIComponent(a.socketId);
            s += "&channel_name=" + encodeURIComponent(a.channelName);
            for (var h in e.params)
              s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(e.params[h]);
            if (e.paramsProvider != null) {
              let f = e.paramsProvider();
              for (var h in f)
                s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(f[h]);
            }
            return s;
          };
          var vi = (a) => {
            if (typeof N.getAuthorizers()[a.transport] > "u")
              throw `'${a.transport}' is not a recognized auth transport`;
            return (e, s) => {
              const h = yi(e, a);
              N.getAuthorizers()[a.transport](N, h, a, C.ChannelAuthorization, s);
            };
          };
          const bi = (a, e, s) => {
            const h = {
              authTransport: e.transport,
              authEndpoint: e.endpoint,
              auth: {
                params: e.params,
                headers: e.headers
              }
            };
            return (f, y) => {
              const T = a.channel(f.channelName);
              s(T, h).authorize(f.socketId, y);
            };
          };
          function wi(a, e) {
            let s = {
              activityTimeout: a.activityTimeout || u.activityTimeout,
              cluster: a.cluster,
              httpPath: a.httpPath || u.httpPath,
              httpPort: a.httpPort || u.httpPort,
              httpsPort: a.httpsPort || u.httpsPort,
              pongTimeout: a.pongTimeout || u.pongTimeout,
              statsHost: a.statsHost || u.stats_host,
              unavailableTimeout: a.unavailableTimeout || u.unavailableTimeout,
              wsPath: a.wsPath || u.wsPath,
              wsPort: a.wsPort || u.wsPort,
              wssPort: a.wssPort || u.wssPort,
              enableStats: Ti(a),
              httpHost: ki(a),
              useTLS: _i(a),
              wsHost: Ci(a),
              userAuthenticator: Ii(a),
              channelAuthorizer: Ri(a, e)
            };
            return "disabledTransports" in a && (s.disabledTransports = a.disabledTransports), "enabledTransports" in a && (s.enabledTransports = a.enabledTransports), "ignoreNullOrigin" in a && (s.ignoreNullOrigin = a.ignoreNullOrigin), "timelineParams" in a && (s.timelineParams = a.timelineParams), "nacl" in a && (s.nacl = a.nacl), s;
          }
          function ki(a) {
            return a.httpHost ? a.httpHost : a.cluster ? `sockjs-${a.cluster}.pusher.com` : u.httpHost;
          }
          function Ci(a) {
            return a.wsHost ? a.wsHost : Si(a.cluster);
          }
          function Si(a) {
            return `ws-${a}.pusher.com`;
          }
          function _i(a) {
            return N.getProtocol() === "https:" ? !0 : a.forceTLS !== !1;
          }
          function Ti(a) {
            return "enableStats" in a ? a.enableStats : "disableStats" in a ? !a.disableStats : !1;
          }
          function Ii(a) {
            const e = Object.assign(Object.assign({}, u.userAuthentication), a.userAuthentication);
            return "customHandler" in e && e.customHandler != null ? e.customHandler : mi(e);
          }
          function Ai(a, e) {
            let s;
            return "channelAuthorization" in a ? s = Object.assign(Object.assign({}, u.channelAuthorization), a.channelAuthorization) : (s = {
              transport: a.authTransport || u.authTransport,
              endpoint: a.authEndpoint || u.authEndpoint
            }, "auth" in a && ("params" in a.auth && (s.params = a.auth.params), "headers" in a.auth && (s.headers = a.auth.headers)), "authorizer" in a && (s.customHandler = bi(e, s, a.authorizer))), s;
          }
          function Ri(a, e) {
            const s = Ai(a, e);
            return "customHandler" in s && s.customHandler != null ? s.customHandler : vi(s);
          }
          class Ei extends ne {
            constructor(e) {
              super(function(s, h) {
                j.debug(`No callbacks on watchlist events for ${s}`);
              }), this.pusher = e, this.bindWatchlistInternalEvent();
            }
            handleEvent(e) {
              e.data.events.forEach((s) => {
                this.emit(s.name, s);
              });
            }
            bindWatchlistInternalEvent() {
              this.pusher.connection.bind("message", (e) => {
                var s = e.event;
                s === "pusher_internal:watchlist_events" && this.handleEvent(e);
              });
            }
          }
          function Pi() {
            let a, e;
            return { promise: new Promise((h, f) => {
              a = h, e = f;
            }), resolve: a, reject: e };
          }
          var Li = Pi;
          class Mi extends ne {
            constructor(e) {
              super(function(s, h) {
                j.debug("No callbacks on user for " + s);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (s, h) => {
                if (s) {
                  j.warn(`Error during signin: ${s}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: h.auth,
                  user_data: h.user_data
                });
              }, this.pusher = e, this.pusher.connection.bind("state_change", ({ previous: s, current: h }) => {
                s !== "connected" && h === "connected" && this._signin(), s === "connected" && h !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new Ei(e), this.pusher.connection.bind("message", (s) => {
                var h = s.event;
                h === "pusher:signin_success" && this._onSigninSuccess(s.data), this.serverToUserChannel && this.serverToUserChannel.name === s.channel && this.serverToUserChannel.handleEvent(s);
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
              const e = (s) => {
                s.subscriptionPending && s.subscriptionCancelled ? s.reinstateSubscription() : !s.subscriptionPending && this.pusher.connection.state === "connected" && s.subscribe();
              };
              this.serverToUserChannel = new $e(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((s, h) => {
                s.indexOf("pusher_internal:") === 0 || s.indexOf("pusher:") === 0 || this.emit(s, h);
              }), e(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: e, resolve: s } = Li();
              e.done = !1;
              const h = () => {
                e.done = !0;
              };
              e.then(h).catch(h), this.signinDonePromise = e, this._signinDoneResolve = s;
            }
          }
          class G {
            static ready() {
              G.isReady = !0;
              for (var e = 0, s = G.instances.length; e < s; e++)
                G.instances[e].connect();
            }
            static getClientFeatures() {
              return Tt(Rt({ ws: N.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, s) {
              Ni(e), pi(s), this.key = e, this.config = wi(s, this), this.channels = re.createChannels(), this.global_emitter = new ne(), this.sessionID = N.randomInt(1e9), this.timeline = new ci(this.key, this.sessionID, {
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
              var h = (f) => N.getDefaultStrategy(this.config, f, di);
              this.connection = re.createConnectionManager(this.key, {
                getStrategy: h,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (f) => {
                var y = f.event, T = y.indexOf("pusher_internal:") === 0;
                if (f.channel) {
                  var P = this.channel(f.channel);
                  P && P.handleEvent(f);
                }
                T || this.global_emitter.emit(f.event, f.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (f) => {
                j.warn(f);
              }), G.instances.push(this), this.timeline.info({ instances: G.instances.length }), this.user = new Mi(this), G.isReady && this.connect();
            }
            channel(e) {
              return this.channels.find(e);
            }
            allChannels() {
              return this.channels.all();
            }
            connect() {
              if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                var e = this.connection.isUsingTLS(), s = this.timelineSender;
                this.timelineSenderTimer = new jn(6e4, function() {
                  s.send(e);
                });
              }
            }
            disconnect() {
              this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
            }
            bind(e, s, h) {
              return this.global_emitter.bind(e, s, h), this;
            }
            unbind(e, s, h) {
              return this.global_emitter.unbind(e, s, h), this;
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
              var s = this.channels.add(e, this);
              return s.subscriptionPending && s.subscriptionCancelled ? s.reinstateSubscription() : !s.subscriptionPending && this.connection.state === "connected" && s.subscribe(), s;
            }
            unsubscribe(e) {
              var s = this.channels.find(e);
              s && s.subscriptionPending ? s.cancelSubscription() : (s = this.channels.remove(e), s && s.subscribed && s.unsubscribe());
            }
            send_event(e, s, h) {
              return this.connection.send_event(e, s, h);
            }
            shouldUseTLS() {
              return this.config.useTLS;
            }
            signin() {
              this.user.signin();
            }
          }
          G.instances = [], G.isReady = !1, G.logToConsole = !1, G.Runtime = N, G.ScriptReceivers = N.ScriptReceivers, G.DependenciesReceivers = N.DependenciesReceivers, G.auth_callbacks = N.auth_callbacks;
          var Ze = r.default = G;
          function Ni(a) {
            if (a == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          N.setup(G);
        }
        /******/
      ])
    );
  });
})(rn);
var $i = rn.exports;
const Ki = /* @__PURE__ */ Vi($i), R = "cpr-agent", sn = "itdsiqtx8cpskowawl1p", Ji = "https://agent.surrealdisco.co.uk", be = {
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
}, Wi = [6, 12, 25, 50, 100, 200, 400, 800], Xt = {
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
function on(c) {
  var t, i;
  return Xt[(t = c == null ? void 0 : c.system) == null ? void 0 : t.weaponType] || Xt[(i = c == null ? void 0 : c.system) == null ? void 0 : i.variety] || "Pistol";
}
function an(c, t) {
  const i = Wi.findIndex((n) => t <= n);
  let r = i !== -1 ? be[c][i] : 99;
  return Array.isArray(be[c]) && typeof be[c][0] == "string" && (r = be[c][Math.min(i !== -1 ? i : 0, be[c].length - 1)]), r;
}
function we(c) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, we(c);
}
function z(c, t) {
  if (!(c instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xi(c, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(c, r.key, r);
  }
}
function q(c, t, i) {
  return t && Xi(c.prototype, t), Object.defineProperty(c, "prototype", {
    writable: !1
  }), c;
}
function Ce() {
  return Ce = Object.assign || function(c) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (c[r] = i[r]);
    }
    return c;
  }, Ce.apply(this, arguments);
}
function X(c, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: c,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(c, "prototype", {
    writable: !1
  }), t && ct(c, t);
}
function Oe(c) {
  return Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, Oe(c);
}
function ct(c, t) {
  return ct = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, ct(c, t);
}
function Qi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Yi(c) {
  if (c === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function Zi(c, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Yi(c);
}
function Q(c) {
  var t = Qi();
  return function() {
    var r = Oe(c), n;
    if (t) {
      var o = Oe(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else
      n = r.apply(this, arguments);
    return Zi(this, n);
  };
}
var gt = /* @__PURE__ */ function() {
  function c() {
    z(this, c);
  }
  return q(c, [{
    key: "listenForWhisper",
    value: (
      /**
       * Listen for a whisper event on the channel instance.
       */
      function(i, r) {
        return this.listen(".client-" + i, r);
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
    value: function(i, r) {
      return this.stopListening(".client-" + i, r);
    }
  }]), c;
}(), cn = /* @__PURE__ */ function() {
  function c(t) {
    z(this, c), this.namespace = t;
  }
  return q(c, [{
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
  }]), c;
}();
function es(c) {
  try {
    new c();
  } catch (t) {
    if (t.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var mt = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i(r, n, o) {
    var l;
    return z(this, i), l = t.call(this), l.name = n, l.pusher = r, l.options = o, l.eventFormatter = new cn(l.options.namespace), l.subscribe(), l;
  }
  return q(i, [{
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
    value: function(n, o) {
      return this.on(this.eventFormatter.format(n), o), this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(n) {
      var o = this;
      return this.subscription.bind_global(function(l, d) {
        if (!l.startsWith("pusher:")) {
          var u = o.options.namespace.replace(/\./g, "\\"), p = l.startsWith(u) ? l.substring(u.length + 1) : "." + l;
          n(p, d);
        }
      }), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(n, o) {
      return o ? this.subscription.unbind(this.eventFormatter.format(n), o) : this.subscription.unbind(this.eventFormatter.format(n)), this;
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
      return this.on("pusher:subscription_error", function(o) {
        n(o);
      }), this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(n, o) {
      return this.subscription.bind(n, o), this;
    }
  }]), i;
}(gt), ln = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), o), this;
      }
    )
  }]), i;
}(mt), ts = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), o), this;
      }
    )
  }]), i;
}(mt), ns = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(n) {
        return this.on("pusher:subscription_succeeded", function(o) {
          n(Object.keys(o.members).map(function(l) {
            return o.members[l];
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
      return this.on("pusher:member_added", function(o) {
        n(o.info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(n, o) {
      return this.pusher.channels.channels[this.name].trigger("client-".concat(n), o), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(n) {
      return this.on("pusher:member_removed", function(o) {
        n(o.info);
      }), this;
    }
  }]), i;
}(ln), un = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i(r, n, o) {
    var l;
    return z(this, i), l = t.call(this), l.events = {}, l.listeners = {}, l.name = n, l.socket = r, l.options = o, l.eventFormatter = new cn(l.options.namespace), l.subscribe(), l;
  }
  return q(i, [{
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
    value: function(n, o) {
      return this.on(this.eventFormatter.format(n), o), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(n, o) {
      return this.unbindEvent(this.eventFormatter.format(n), o), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(n) {
      return this.on("connect", function(o) {
        n(o);
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
    value: function(n, o) {
      var l = this;
      return this.listeners[n] = this.listeners[n] || [], this.events[n] || (this.events[n] = function(d, u) {
        l.name === d && l.listeners[n] && l.listeners[n].forEach(function(p) {
          return p(u);
        });
      }, this.socket.on(n, this.events[n])), this.listeners[n].push(o), this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function() {
      var n = this;
      Object.keys(this.events).forEach(function(o) {
        n.unbindEvent(o);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function(n, o) {
      this.listeners[n] = this.listeners[n] || [], o && (this.listeners[n] = this.listeners[n].filter(function(l) {
        return l !== o;
      })), (!o || this.listeners[n].length === 0) && (this.events[n] && (this.socket.removeListener(n, this.events[n]), delete this.events[n]), delete this.listeners[n]);
    }
  }]), i;
}(gt), hn = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(n),
          data: o
        }), this;
      }
    )
  }]), i;
}(un), rs = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(n) {
        return this.on("presence:subscribed", function(o) {
          n(o.map(function(l) {
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
      return this.on("presence:joining", function(o) {
        return n(o.user_info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(n, o) {
      return this.socket.emit("client event", {
        channel: this.name,
        event: "client-".concat(n),
        data: o
      }), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(n) {
      return this.on("presence:leaving", function(o) {
        return n(o.user_info);
      }), this;
    }
  }]), i;
}(hn), xe = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
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
    value: function(n, o) {
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
    value: function(n, o) {
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
    value: function(n, o) {
      return this;
    }
  }]), i;
}(gt), dn = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this;
      }
    )
  }]), i;
}(xe), is = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this;
      }
    )
  }]), i;
}(xe), ss = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    return z(this, i), t.apply(this, arguments);
  }
  return q(i, [{
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
    value: function(n, o) {
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
  }]), i;
}(dn), yt = /* @__PURE__ */ function() {
  function c(t) {
    z(this, c), this._defaultOptions = {
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
    }, this.setOptions(t), this.connect();
  }
  return q(c, [{
    key: "setOptions",
    value: function(i) {
      this.options = Ce(this._defaultOptions, i);
      var r = this.csrfToken();
      return r && (this.options.auth.headers["X-CSRF-TOKEN"] = r, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = r), r = this.options.bearerToken, r && (this.options.auth.headers.Authorization = "Bearer " + r, this.options.userAuthentication.headers.Authorization = "Bearer " + r), i;
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
  }]), c;
}(), Qt = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    var r;
    return z(this, i), r = t.apply(this, arguments), r.channels = {}, r;
  }
  return q(i, [{
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
    value: function(n, o, l) {
      return this.channel(n).listen(o, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return this.channels[n] || (this.channels[n] = new mt(this.pusher, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new ln(this.pusher, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return this.channels["private-encrypted-" + n] || (this.channels["private-encrypted-" + n] = new ts(this.pusher, "private-encrypted-" + n, this.options)), this.channels["private-encrypted-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new ns(this.pusher, "presence-" + n, this.options)), this.channels["presence-" + n];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(n) {
      var o = this, l = [n, "private-" + n, "private-encrypted-" + n, "presence-" + n];
      l.forEach(function(d, u) {
        o.leaveChannel(d);
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
  }]), i;
}(yt), Yt = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    var r;
    return z(this, i), r = t.apply(this, arguments), r.channels = {}, r;
  }
  return q(i, [{
    key: "connect",
    value: function() {
      var n = this, o = this.getSocketIO();
      return this.socket = o(this.options.host, this.options), this.socket.on("reconnect", function() {
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
    value: function(n, o, l) {
      return this.channel(n).listen(o, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return this.channels[n] || (this.channels[n] = new un(this.socket, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new hn(this.socket, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new rs(this.socket, "presence-" + n, this.options)), this.channels["presence-" + n];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(n) {
      var o = this, l = [n, "private-" + n, "presence-" + n];
      l.forEach(function(d) {
        o.leaveChannel(d);
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
  }]), i;
}(yt), os = /* @__PURE__ */ function(c) {
  X(i, c);
  var t = Q(i);
  function i() {
    var r;
    return z(this, i), r = t.apply(this, arguments), r.channels = {}, r;
  }
  return q(i, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(n, o, l) {
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
      return new dn();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return new is();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return new ss();
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
  }]), i;
}(yt), as = /* @__PURE__ */ function() {
  function c(t) {
    z(this, c), this.options = t, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return q(c, [{
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
        this.connector = new Qt(Ce(Ce({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new Qt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Yt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new os(this.options);
      else if (typeof this.options.broadcaster == "function" && es(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(we(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
    value: function(i, r, n) {
      return this.connector.listen(i, r, n);
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
      if (this.connector instanceof Yt)
        throw new Error("Broadcaster ".concat(we(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : we(Turbo)) === "object" && this.registerTurboRequestInterceptor();
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerVueRequestInterceptor",
    value: function() {
      var i = this;
      Vue.http.interceptors.push(function(r, n) {
        i.socketId() && r.headers.set("X-Socket-ID", i.socketId()), n();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function() {
      var i = this;
      axios.interceptors.request.use(function(r) {
        return i.socketId() && (r.headers["X-Socket-Id"] = i.socketId()), r;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function() {
      var i = this;
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(r, n, o) {
        i.socketId() && o.setRequestHeader("X-Socket-Id", i.socketId());
      });
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerTurboRequestInterceptor",
    value: function() {
      var i = this;
      document.addEventListener("turbo:before-fetch-request", function(r) {
        r.detail.fetchOptions.headers["X-Socket-Id"] = i.socketId();
      });
    }
  }]), c;
}();
function cs(c, t = 6) {
  return !c || c.length <= t * 2 + 3 ? c : `${c.substring(0, t)}...${c.substring(c.length - t)}`;
}
function lt(c, t, i = {}) {
  for (let r in c) {
    const n = c[r];
    n !== null && typeof n == "object" && !Array.isArray(n) && !(n instanceof foundry.utils.Color) ? lt(n, `${t}${r}.`, i) : i[`${t}${r}`] = n;
  }
  return i;
}
async function ls(c, t, i, r = null) {
  return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${t}`, "color: #00ffff; font-weight: bold;"), c._isCapturingRoll = !0, game.settings.get("core", "rollMode"), r && await game.settings.set("core", "rollMode", r), new Promise(async (n, o) => {
    let l = !1;
    const d = renderTemplate, u = function(p, g) {
      return p && typeof p == "string" && p.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${p}`, "color: #00ff00;", g), l = !0, renderTemplate = d, n({
        success: !0,
        total: g.resultTotal,
        isCriticalSuccess: g.wasCritSuccess ? g.wasCritSuccess() : g.isCriticalSuccess || !1,
        isCriticalFailure: g.wasCritFail ? g.wasCritFail() : g.isCriticalFailure || !1,
        label: g.rollTitle,
        rollMode: r || game.settings.get("core", "rollMode"),
        rawRoll: g
      })), d.apply(this, arguments);
    };
    renderTemplate = u, setTimeout(async () => {
      l || (renderTemplate = d, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), n({ success: !1, error: "Timed out waiting for render" }));
    }, 5e3);
    try {
      await i();
    } catch {
      renderTemplate = d, n({ success: !1, error: "Trigger failed" });
    }
  });
}
var _e = {}, us = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, fn = {}, Y = {};
let vt;
const hs = [
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
Y.getSymbolSize = function(t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
Y.getSymbolTotalCodewords = function(t) {
  return hs[t];
};
Y.getBCHDigit = function(c) {
  let t = 0;
  for (; c !== 0; )
    t++, c >>>= 1;
  return t;
};
Y.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  vt = t;
};
Y.isKanjiModeEnabled = function() {
  return typeof vt < "u";
};
Y.toSJIS = function(t) {
  return vt(t);
};
var Ue = {};
(function(c) {
  c.L = { bit: 1 }, c.M = { bit: 0 }, c.Q = { bit: 3 }, c.H = { bit: 2 };
  function t(i) {
    if (typeof i != "string")
      throw new Error("Param is not a string");
    switch (i.toLowerCase()) {
      case "l":
      case "low":
        return c.L;
      case "m":
      case "medium":
        return c.M;
      case "q":
      case "quartile":
        return c.Q;
      case "h":
      case "high":
        return c.H;
      default:
        throw new Error("Unknown EC Level: " + i);
    }
  }
  c.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }, c.from = function(r, n) {
    if (c.isValid(r))
      return r;
    try {
      return t(r);
    } catch {
      return n;
    }
  };
})(Ue);
function pn() {
  this.buffer = [], this.length = 0;
}
pn.prototype = {
  get: function(c) {
    const t = Math.floor(c / 8);
    return (this.buffer[t] >>> 7 - c % 8 & 1) === 1;
  },
  put: function(c, t) {
    for (let i = 0; i < t; i++)
      this.putBit((c >>> t - i - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(c) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), c && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var ds = pn;
function Te(c) {
  if (!c || c < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = c, this.data = new Uint8Array(c * c), this.reservedBit = new Uint8Array(c * c);
}
Te.prototype.set = function(c, t, i, r) {
  const n = c * this.size + t;
  this.data[n] = i, r && (this.reservedBit[n] = !0);
};
Te.prototype.get = function(c, t) {
  return this.data[c * this.size + t];
};
Te.prototype.xor = function(c, t, i) {
  this.data[c * this.size + t] ^= i;
};
Te.prototype.isReserved = function(c, t) {
  return this.reservedBit[c * this.size + t];
};
var fs = Te, gn = {};
(function(c) {
  const t = Y.getSymbolSize;
  c.getRowColCoords = function(r) {
    if (r === 1) return [];
    const n = Math.floor(r / 7) + 2, o = t(r), l = o === 145 ? 26 : Math.ceil((o - 13) / (2 * n - 2)) * 2, d = [o - 7];
    for (let u = 1; u < n - 1; u++)
      d[u] = d[u - 1] - l;
    return d.push(6), d.reverse();
  }, c.getPositions = function(r) {
    const n = [], o = c.getRowColCoords(r), l = o.length;
    for (let d = 0; d < l; d++)
      for (let u = 0; u < l; u++)
        d === 0 && u === 0 || // top-left
        d === 0 && u === l - 1 || // bottom-left
        d === l - 1 && u === 0 || n.push([o[d], o[u]]);
    return n;
  };
})(gn);
var mn = {};
const ps = Y.getSymbolSize, Zt = 7;
mn.getPositions = function(t) {
  const i = ps(t);
  return [
    // top-left
    [0, 0],
    // top-right
    [i - Zt, 0],
    // bottom-left
    [0, i - Zt]
  ];
};
var yn = {};
(function(c) {
  c.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  c.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, c.from = function(n) {
    return c.isValid(n) ? parseInt(n, 10) : void 0;
  }, c.getPenaltyN1 = function(n) {
    const o = n.size;
    let l = 0, d = 0, u = 0, p = null, g = null;
    for (let k = 0; k < o; k++) {
      d = u = 0, p = g = null;
      for (let b = 0; b < o; b++) {
        let m = n.get(k, b);
        m === p ? d++ : (d >= 5 && (l += t.N1 + (d - 5)), p = m, d = 1), m = n.get(b, k), m === g ? u++ : (u >= 5 && (l += t.N1 + (u - 5)), g = m, u = 1);
      }
      d >= 5 && (l += t.N1 + (d - 5)), u >= 5 && (l += t.N1 + (u - 5));
    }
    return l;
  }, c.getPenaltyN2 = function(n) {
    const o = n.size;
    let l = 0;
    for (let d = 0; d < o - 1; d++)
      for (let u = 0; u < o - 1; u++) {
        const p = n.get(d, u) + n.get(d, u + 1) + n.get(d + 1, u) + n.get(d + 1, u + 1);
        (p === 4 || p === 0) && l++;
      }
    return l * t.N2;
  }, c.getPenaltyN3 = function(n) {
    const o = n.size;
    let l = 0, d = 0, u = 0;
    for (let p = 0; p < o; p++) {
      d = u = 0;
      for (let g = 0; g < o; g++)
        d = d << 1 & 2047 | n.get(p, g), g >= 10 && (d === 1488 || d === 93) && l++, u = u << 1 & 2047 | n.get(g, p), g >= 10 && (u === 1488 || u === 93) && l++;
    }
    return l * t.N3;
  }, c.getPenaltyN4 = function(n) {
    let o = 0;
    const l = n.data.length;
    for (let u = 0; u < l; u++) o += n.data[u];
    return Math.abs(Math.ceil(o * 100 / l / 5) - 10) * t.N4;
  };
  function i(r, n, o) {
    switch (r) {
      case c.Patterns.PATTERN000:
        return (n + o) % 2 === 0;
      case c.Patterns.PATTERN001:
        return n % 2 === 0;
      case c.Patterns.PATTERN010:
        return o % 3 === 0;
      case c.Patterns.PATTERN011:
        return (n + o) % 3 === 0;
      case c.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(o / 3)) % 2 === 0;
      case c.Patterns.PATTERN101:
        return n * o % 2 + n * o % 3 === 0;
      case c.Patterns.PATTERN110:
        return (n * o % 2 + n * o % 3) % 2 === 0;
      case c.Patterns.PATTERN111:
        return (n * o % 3 + (n + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  c.applyMask = function(n, o) {
    const l = o.size;
    for (let d = 0; d < l; d++)
      for (let u = 0; u < l; u++)
        o.isReserved(u, d) || o.xor(u, d, i(n, u, d));
  }, c.getBestMask = function(n, o) {
    const l = Object.keys(c.Patterns).length;
    let d = 0, u = 1 / 0;
    for (let p = 0; p < l; p++) {
      o(p), c.applyMask(p, n);
      const g = c.getPenaltyN1(n) + c.getPenaltyN2(n) + c.getPenaltyN3(n) + c.getPenaltyN4(n);
      c.applyMask(p, n), g < u && (u = g, d = p);
    }
    return d;
  };
})(yn);
var je = {};
const ie = Ue, Me = [
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
], Ne = [
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
je.getBlocksCount = function(t, i) {
  switch (i) {
    case ie.L:
      return Me[(t - 1) * 4 + 0];
    case ie.M:
      return Me[(t - 1) * 4 + 1];
    case ie.Q:
      return Me[(t - 1) * 4 + 2];
    case ie.H:
      return Me[(t - 1) * 4 + 3];
    default:
      return;
  }
};
je.getTotalCodewordsCount = function(t, i) {
  switch (i) {
    case ie.L:
      return Ne[(t - 1) * 4 + 0];
    case ie.M:
      return Ne[(t - 1) * 4 + 1];
    case ie.Q:
      return Ne[(t - 1) * 4 + 2];
    case ie.H:
      return Ne[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var vn = {}, He = {};
const ke = new Uint8Array(512), Be = new Uint8Array(256);
(function() {
  let t = 1;
  for (let i = 0; i < 255; i++)
    ke[i] = t, Be[t] = i, t <<= 1, t & 256 && (t ^= 285);
  for (let i = 255; i < 512; i++)
    ke[i] = ke[i - 255];
})();
He.log = function(t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return Be[t];
};
He.exp = function(t) {
  return ke[t];
};
He.mul = function(t, i) {
  return t === 0 || i === 0 ? 0 : ke[Be[t] + Be[i]];
};
(function(c) {
  const t = He;
  c.mul = function(r, n) {
    const o = new Uint8Array(r.length + n.length - 1);
    for (let l = 0; l < r.length; l++)
      for (let d = 0; d < n.length; d++)
        o[l + d] ^= t.mul(r[l], n[d]);
    return o;
  }, c.mod = function(r, n) {
    let o = new Uint8Array(r);
    for (; o.length - n.length >= 0; ) {
      const l = o[0];
      for (let u = 0; u < n.length; u++)
        o[u] ^= t.mul(n[u], l);
      let d = 0;
      for (; d < o.length && o[d] === 0; ) d++;
      o = o.slice(d);
    }
    return o;
  }, c.generateECPolynomial = function(r) {
    let n = new Uint8Array([1]);
    for (let o = 0; o < r; o++)
      n = c.mul(n, new Uint8Array([1, t.exp(o)]));
    return n;
  };
})(vn);
const bn = vn;
function bt(c) {
  this.genPoly = void 0, this.degree = c, this.degree && this.initialize(this.degree);
}
bt.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = bn.generateECPolynomial(this.degree);
};
bt.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const i = new Uint8Array(t.length + this.degree);
  i.set(t);
  const r = bn.mod(i, this.genPoly), n = this.degree - r.length;
  if (n > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(r, n), o;
  }
  return r;
};
var gs = bt, wn = {}, se = {}, wt = {};
wt.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var ee = {};
const kn = "[0-9]+", ms = "[A-Z $%*+\\-./:]+";
let Se = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Se = Se.replace(/u/g, "\\u");
const ys = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Se + `)(?:.|[\r
]))+`;
ee.KANJI = new RegExp(Se, "g");
ee.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
ee.BYTE = new RegExp(ys, "g");
ee.NUMERIC = new RegExp(kn, "g");
ee.ALPHANUMERIC = new RegExp(ms, "g");
const vs = new RegExp("^" + Se + "$"), bs = new RegExp("^" + kn + "$"), ws = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
ee.testKanji = function(t) {
  return vs.test(t);
};
ee.testNumeric = function(t) {
  return bs.test(t);
};
ee.testAlphanumeric = function(t) {
  return ws.test(t);
};
(function(c) {
  const t = wt, i = ee;
  c.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, c.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, c.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, c.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, c.MIXED = {
    bit: -1
  }, c.getCharCountIndicator = function(o, l) {
    if (!o.ccBits) throw new Error("Invalid mode: " + o);
    if (!t.isValid(l))
      throw new Error("Invalid version: " + l);
    return l >= 1 && l < 10 ? o.ccBits[0] : l < 27 ? o.ccBits[1] : o.ccBits[2];
  }, c.getBestModeForData = function(o) {
    return i.testNumeric(o) ? c.NUMERIC : i.testAlphanumeric(o) ? c.ALPHANUMERIC : i.testKanji(o) ? c.KANJI : c.BYTE;
  }, c.toString = function(o) {
    if (o && o.id) return o.id;
    throw new Error("Invalid mode");
  }, c.isValid = function(o) {
    return o && o.bit && o.ccBits;
  };
  function r(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "numeric":
        return c.NUMERIC;
      case "alphanumeric":
        return c.ALPHANUMERIC;
      case "kanji":
        return c.KANJI;
      case "byte":
        return c.BYTE;
      default:
        throw new Error("Unknown mode: " + n);
    }
  }
  c.from = function(o, l) {
    if (c.isValid(o))
      return o;
    try {
      return r(o);
    } catch {
      return l;
    }
  };
})(se);
(function(c) {
  const t = Y, i = je, r = Ue, n = se, o = wt, l = 7973, d = t.getBCHDigit(l);
  function u(b, m, S) {
    for (let C = 1; C <= 40; C++)
      if (m <= c.getCapacity(C, S, b))
        return C;
  }
  function p(b, m) {
    return n.getCharCountIndicator(b, m) + 4;
  }
  function g(b, m) {
    let S = 0;
    return b.forEach(function(C) {
      const w = p(C.mode, m);
      S += w + C.getBitsLength();
    }), S;
  }
  function k(b, m) {
    for (let S = 1; S <= 40; S++)
      if (g(b, S) <= c.getCapacity(S, m, n.MIXED))
        return S;
  }
  c.from = function(m, S) {
    return o.isValid(m) ? parseInt(m, 10) : S;
  }, c.getCapacity = function(m, S, C) {
    if (!o.isValid(m))
      throw new Error("Invalid QR Code version");
    typeof C > "u" && (C = n.BYTE);
    const w = t.getSymbolTotalCodewords(m), v = i.getTotalCodewordsCount(m, S), _ = (w - v) * 8;
    if (C === n.MIXED) return _;
    const I = _ - p(C, m);
    switch (C) {
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
  }, c.getBestVersionForData = function(m, S) {
    let C;
    const w = r.from(S, r.M);
    if (Array.isArray(m)) {
      if (m.length > 1)
        return k(m, w);
      if (m.length === 0)
        return 1;
      C = m[0];
    } else
      C = m;
    return u(C.mode, C.getLength(), w);
  }, c.getEncodedBits = function(m) {
    if (!o.isValid(m) || m < 7)
      throw new Error("Invalid QR Code version");
    let S = m << 12;
    for (; t.getBCHDigit(S) - d >= 0; )
      S ^= l << t.getBCHDigit(S) - d;
    return m << 12 | S;
  };
})(wn);
var Cn = {};
const ut = Y, Sn = 1335, ks = 21522, en = ut.getBCHDigit(Sn);
Cn.getEncodedBits = function(t, i) {
  const r = t.bit << 3 | i;
  let n = r << 10;
  for (; ut.getBCHDigit(n) - en >= 0; )
    n ^= Sn << ut.getBCHDigit(n) - en;
  return (r << 10 | n) ^ ks;
};
var _n = {};
const Cs = se;
function he(c) {
  this.mode = Cs.NUMERIC, this.data = c.toString();
}
he.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
he.prototype.getLength = function() {
  return this.data.length;
};
he.prototype.getBitsLength = function() {
  return he.getBitsLength(this.data.length);
};
he.prototype.write = function(t) {
  let i, r, n;
  for (i = 0; i + 3 <= this.data.length; i += 3)
    r = this.data.substr(i, 3), n = parseInt(r, 10), t.put(n, 10);
  const o = this.data.length - i;
  o > 0 && (r = this.data.substr(i), n = parseInt(r, 10), t.put(n, o * 3 + 1));
};
var Ss = he;
const _s = se, rt = [
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
function de(c) {
  this.mode = _s.ALPHANUMERIC, this.data = c;
}
de.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
de.prototype.getLength = function() {
  return this.data.length;
};
de.prototype.getBitsLength = function() {
  return de.getBitsLength(this.data.length);
};
de.prototype.write = function(t) {
  let i;
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    let r = rt.indexOf(this.data[i]) * 45;
    r += rt.indexOf(this.data[i + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(rt.indexOf(this.data[i]), 6);
};
var Ts = de;
const Is = se;
function fe(c) {
  this.mode = Is.BYTE, typeof c == "string" ? this.data = new TextEncoder().encode(c) : this.data = new Uint8Array(c);
}
fe.getBitsLength = function(t) {
  return t * 8;
};
fe.prototype.getLength = function() {
  return this.data.length;
};
fe.prototype.getBitsLength = function() {
  return fe.getBitsLength(this.data.length);
};
fe.prototype.write = function(c) {
  for (let t = 0, i = this.data.length; t < i; t++)
    c.put(this.data[t], 8);
};
var As = fe;
const Rs = se, Es = Y;
function pe(c) {
  this.mode = Rs.KANJI, this.data = c;
}
pe.getBitsLength = function(t) {
  return t * 13;
};
pe.prototype.getLength = function() {
  return this.data.length;
};
pe.prototype.getBitsLength = function() {
  return pe.getBitsLength(this.data.length);
};
pe.prototype.write = function(c) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let i = Es.toSJIS(this.data[t]);
    if (i >= 33088 && i <= 40956)
      i -= 33088;
    else if (i >= 57408 && i <= 60351)
      i -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    i = (i >>> 8 & 255) * 192 + (i & 255), c.put(i, 13);
  }
};
var Ps = pe, Tn = { exports: {} };
(function(c) {
  var t = {
    single_source_shortest_paths: function(i, r, n) {
      var o = {}, l = {};
      l[r] = 0;
      var d = t.PriorityQueue.make();
      d.push(r, 0);
      for (var u, p, g, k, b, m, S, C, w; !d.empty(); ) {
        u = d.pop(), p = u.value, k = u.cost, b = i[p] || {};
        for (g in b)
          b.hasOwnProperty(g) && (m = b[g], S = k + m, C = l[g], w = typeof l[g] > "u", (w || C > S) && (l[g] = S, d.push(g, S), o[g] = p));
      }
      if (typeof n < "u" && typeof l[n] > "u") {
        var v = ["Could not find a path from ", r, " to ", n, "."].join("");
        throw new Error(v);
      }
      return o;
    },
    extract_shortest_path_from_predecessor_list: function(i, r) {
      for (var n = [], o = r; o; )
        n.push(o), i[o], o = i[o];
      return n.reverse(), n;
    },
    find_path: function(i, r, n) {
      var o = t.single_source_shortest_paths(i, r, n);
      return t.extract_shortest_path_from_predecessor_list(
        o,
        n
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(i) {
        var r = t.PriorityQueue, n = {}, o;
        i = i || {};
        for (o in r)
          r.hasOwnProperty(o) && (n[o] = r[o]);
        return n.queue = [], n.sorter = i.sorter || r.default_sorter, n;
      },
      default_sorter: function(i, r) {
        return i.cost - r.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(i, r) {
        var n = { value: i, cost: r };
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
  c.exports = t;
})(Tn);
var Ls = Tn.exports;
(function(c) {
  const t = se, i = Ss, r = Ts, n = As, o = Ps, l = ee, d = Y, u = Ls;
  function p(v) {
    return unescape(encodeURIComponent(v)).length;
  }
  function g(v, _, I) {
    const E = [];
    let A;
    for (; (A = v.exec(I)) !== null; )
      E.push({
        data: A[0],
        index: A.index,
        mode: _,
        length: A[0].length
      });
    return E;
  }
  function k(v) {
    const _ = g(l.NUMERIC, t.NUMERIC, v), I = g(l.ALPHANUMERIC, t.ALPHANUMERIC, v);
    let E, A;
    return d.isKanjiModeEnabled() ? (E = g(l.BYTE, t.BYTE, v), A = g(l.KANJI, t.KANJI, v)) : (E = g(l.BYTE_KANJI, t.BYTE, v), A = []), _.concat(I, E, A).sort(function(O, x) {
      return O.index - x.index;
    }).map(function(O) {
      return {
        data: O.data,
        mode: O.mode,
        length: O.length
      };
    });
  }
  function b(v, _) {
    switch (_) {
      case t.NUMERIC:
        return i.getBitsLength(v);
      case t.ALPHANUMERIC:
        return r.getBitsLength(v);
      case t.KANJI:
        return o.getBitsLength(v);
      case t.BYTE:
        return n.getBitsLength(v);
    }
  }
  function m(v) {
    return v.reduce(function(_, I) {
      const E = _.length - 1 >= 0 ? _[_.length - 1] : null;
      return E && E.mode === I.mode ? (_[_.length - 1].data += I.data, _) : (_.push(I), _);
    }, []);
  }
  function S(v) {
    const _ = [];
    for (let I = 0; I < v.length; I++) {
      const E = v[I];
      switch (E.mode) {
        case t.NUMERIC:
          _.push([
            E,
            { data: E.data, mode: t.ALPHANUMERIC, length: E.length },
            { data: E.data, mode: t.BYTE, length: E.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          _.push([
            E,
            { data: E.data, mode: t.BYTE, length: E.length }
          ]);
          break;
        case t.KANJI:
          _.push([
            E,
            { data: E.data, mode: t.BYTE, length: p(E.data) }
          ]);
          break;
        case t.BYTE:
          _.push([
            { data: E.data, mode: t.BYTE, length: p(E.data) }
          ]);
      }
    }
    return _;
  }
  function C(v, _) {
    const I = {}, E = { start: {} };
    let A = ["start"];
    for (let L = 0; L < v.length; L++) {
      const O = v[L], x = [];
      for (let U = 0; U < O.length; U++) {
        const F = O[U], Z = "" + L + U;
        x.push(Z), I[Z] = { node: F, lastCount: 0 }, E[Z] = {};
        for (let J = 0; J < A.length; J++) {
          const V = A[J];
          I[V] && I[V].node.mode === F.mode ? (E[V][Z] = b(I[V].lastCount + F.length, F.mode) - b(I[V].lastCount, F.mode), I[V].lastCount += F.length) : (I[V] && (I[V].lastCount = F.length), E[V][Z] = b(F.length, F.mode) + 4 + t.getCharCountIndicator(F.mode, _));
        }
      }
      A = x;
    }
    for (let L = 0; L < A.length; L++)
      E[A[L]].end = 0;
    return { map: E, table: I };
  }
  function w(v, _) {
    let I;
    const E = t.getBestModeForData(v);
    if (I = t.from(_, E), I !== t.BYTE && I.bit < E.bit)
      throw new Error('"' + v + '" cannot be encoded with mode ' + t.toString(I) + `.
 Suggested mode is: ` + t.toString(E));
    switch (I === t.KANJI && !d.isKanjiModeEnabled() && (I = t.BYTE), I) {
      case t.NUMERIC:
        return new i(v);
      case t.ALPHANUMERIC:
        return new r(v);
      case t.KANJI:
        return new o(v);
      case t.BYTE:
        return new n(v);
    }
  }
  c.fromArray = function(_) {
    return _.reduce(function(I, E) {
      return typeof E == "string" ? I.push(w(E, null)) : E.data && I.push(w(E.data, E.mode)), I;
    }, []);
  }, c.fromString = function(_, I) {
    const E = k(_, d.isKanjiModeEnabled()), A = S(E), L = C(A, I), O = u.find_path(L.map, "start", "end"), x = [];
    for (let U = 1; U < O.length - 1; U++)
      x.push(L.table[O[U]].node);
    return c.fromArray(m(x));
  }, c.rawSplit = function(_) {
    return c.fromArray(
      k(_, d.isKanjiModeEnabled())
    );
  };
})(_n);
const ze = Y, it = Ue, Ms = ds, Ns = fs, Os = gn, xs = mn, ht = yn, dt = je, Bs = gs, De = wn, Ds = Cn, Fs = se, st = _n;
function Us(c, t) {
  const i = c.size, r = xs.getPositions(t);
  for (let n = 0; n < r.length; n++) {
    const o = r[n][0], l = r[n][1];
    for (let d = -1; d <= 7; d++)
      if (!(o + d <= -1 || i <= o + d))
        for (let u = -1; u <= 7; u++)
          l + u <= -1 || i <= l + u || (d >= 0 && d <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (d === 0 || d === 6) || d >= 2 && d <= 4 && u >= 2 && u <= 4 ? c.set(o + d, l + u, !0, !0) : c.set(o + d, l + u, !1, !0));
  }
}
function js(c) {
  const t = c.size;
  for (let i = 8; i < t - 8; i++) {
    const r = i % 2 === 0;
    c.set(i, 6, r, !0), c.set(6, i, r, !0);
  }
}
function Hs(c, t) {
  const i = Os.getPositions(t);
  for (let r = 0; r < i.length; r++) {
    const n = i[r][0], o = i[r][1];
    for (let l = -2; l <= 2; l++)
      for (let d = -2; d <= 2; d++)
        l === -2 || l === 2 || d === -2 || d === 2 || l === 0 && d === 0 ? c.set(n + l, o + d, !0, !0) : c.set(n + l, o + d, !1, !0);
  }
}
function zs(c, t) {
  const i = c.size, r = De.getEncodedBits(t);
  let n, o, l;
  for (let d = 0; d < 18; d++)
    n = Math.floor(d / 3), o = d % 3 + i - 8 - 3, l = (r >> d & 1) === 1, c.set(n, o, l, !0), c.set(o, n, l, !0);
}
function ot(c, t, i) {
  const r = c.size, n = Ds.getEncodedBits(t, i);
  let o, l;
  for (o = 0; o < 15; o++)
    l = (n >> o & 1) === 1, o < 6 ? c.set(o, 8, l, !0) : o < 8 ? c.set(o + 1, 8, l, !0) : c.set(r - 15 + o, 8, l, !0), o < 8 ? c.set(8, r - o - 1, l, !0) : o < 9 ? c.set(8, 15 - o - 1 + 1, l, !0) : c.set(8, 15 - o - 1, l, !0);
  c.set(r - 8, 8, 1, !0);
}
function qs(c, t) {
  const i = c.size;
  let r = -1, n = i - 1, o = 7, l = 0;
  for (let d = i - 1; d > 0; d -= 2)
    for (d === 6 && d--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!c.isReserved(n, d - u)) {
          let p = !1;
          l < t.length && (p = (t[l] >>> o & 1) === 1), c.set(n, d - u, p), o--, o === -1 && (l++, o = 7);
        }
      if (n += r, n < 0 || i <= n) {
        n -= r, r = -r;
        break;
      }
    }
}
function Gs(c, t, i) {
  const r = new Ms();
  i.forEach(function(u) {
    r.put(u.mode.bit, 4), r.put(u.getLength(), Fs.getCharCountIndicator(u.mode, c)), u.write(r);
  });
  const n = ze.getSymbolTotalCodewords(c), o = dt.getTotalCodewordsCount(c, t), l = (n - o) * 8;
  for (r.getLengthInBits() + 4 <= l && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const d = (l - r.getLengthInBits()) / 8;
  for (let u = 0; u < d; u++)
    r.put(u % 2 ? 17 : 236, 8);
  return Vs(r, c, t);
}
function Vs(c, t, i) {
  const r = ze.getSymbolTotalCodewords(t), n = dt.getTotalCodewordsCount(t, i), o = r - n, l = dt.getBlocksCount(t, i), d = r % l, u = l - d, p = Math.floor(r / l), g = Math.floor(o / l), k = g + 1, b = p - g, m = new Bs(b);
  let S = 0;
  const C = new Array(l), w = new Array(l);
  let v = 0;
  const _ = new Uint8Array(c.buffer);
  for (let O = 0; O < l; O++) {
    const x = O < u ? g : k;
    C[O] = _.slice(S, S + x), w[O] = m.encode(C[O]), S += x, v = Math.max(v, x);
  }
  const I = new Uint8Array(r);
  let E = 0, A, L;
  for (A = 0; A < v; A++)
    for (L = 0; L < l; L++)
      A < C[L].length && (I[E++] = C[L][A]);
  for (A = 0; A < b; A++)
    for (L = 0; L < l; L++)
      I[E++] = w[L][A];
  return I;
}
function $s(c, t, i, r) {
  let n;
  if (Array.isArray(c))
    n = st.fromArray(c);
  else if (typeof c == "string") {
    let p = t;
    if (!p) {
      const g = st.rawSplit(c);
      p = De.getBestVersionForData(g, i);
    }
    n = st.fromString(c, p || 40);
  } else
    throw new Error("Invalid data");
  const o = De.getBestVersionForData(n, i);
  if (!o)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = o;
  else if (t < o)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o + `.
`
    );
  const l = Gs(t, i, n), d = ze.getSymbolSize(t), u = new Ns(d);
  return Us(u, t), js(u), Hs(u, t), ot(u, i, 0), t >= 7 && zs(u, t), qs(u, l), isNaN(r) && (r = ht.getBestMask(
    u,
    ot.bind(null, u, i)
  )), ht.applyMask(r, u), ot(u, i, r), {
    modules: u,
    version: t,
    errorCorrectionLevel: i,
    maskPattern: r,
    segments: n
  };
}
fn.create = function(t, i) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let r = it.M, n, o;
  return typeof i < "u" && (r = it.from(i.errorCorrectionLevel, it.M), n = De.from(i.version), o = ht.from(i.maskPattern), i.toSJISFunc && ze.setToSJISFunction(i.toSJISFunc)), $s(t, n, r, o);
};
var In = {}, kt = {};
(function(c) {
  function t(i) {
    if (typeof i == "number" && (i = i.toString()), typeof i != "string")
      throw new Error("Color should be defined as hex string");
    let r = i.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + i);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(o) {
      return [o, o];
    }))), r.length === 6 && r.push("F", "F");
    const n = parseInt(r.join(""), 16);
    return {
      r: n >> 24 & 255,
      g: n >> 16 & 255,
      b: n >> 8 & 255,
      a: n & 255,
      hex: "#" + r.slice(0, 6).join("")
    };
  }
  c.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const n = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, o = r.width && r.width >= 21 ? r.width : void 0, l = r.scale || 4;
    return {
      width: o,
      scale: o ? 4 : l,
      margin: n,
      color: {
        dark: t(r.color.dark || "#000000ff"),
        light: t(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    };
  }, c.getScale = function(r, n) {
    return n.width && n.width >= r + n.margin * 2 ? n.width / (r + n.margin * 2) : n.scale;
  }, c.getImageWidth = function(r, n) {
    const o = c.getScale(r, n);
    return Math.floor((r + n.margin * 2) * o);
  }, c.qrToImageData = function(r, n, o) {
    const l = n.modules.size, d = n.modules.data, u = c.getScale(l, o), p = Math.floor((l + o.margin * 2) * u), g = o.margin * u, k = [o.color.light, o.color.dark];
    for (let b = 0; b < p; b++)
      for (let m = 0; m < p; m++) {
        let S = (b * p + m) * 4, C = o.color.light;
        if (b >= g && m >= g && b < p - g && m < p - g) {
          const w = Math.floor((b - g) / u), v = Math.floor((m - g) / u);
          C = k[d[w * l + v] ? 1 : 0];
        }
        r[S++] = C.r, r[S++] = C.g, r[S++] = C.b, r[S] = C.a;
      }
  };
})(kt);
(function(c) {
  const t = kt;
  function i(n, o, l) {
    n.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = l, o.width = l, o.style.height = l + "px", o.style.width = l + "px";
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  c.render = function(o, l, d) {
    let u = d, p = l;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (p = r()), u = t.getOptions(u);
    const g = t.getImageWidth(o.modules.size, u), k = p.getContext("2d"), b = k.createImageData(g, g);
    return t.qrToImageData(b.data, o, u), i(k, p, g), k.putImageData(b, 0, 0), p;
  }, c.renderToDataURL = function(o, l, d) {
    let u = d;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
    const p = c.render(o, l, u), g = u.type || "image/png", k = u.rendererOpts || {};
    return p.toDataURL(g, k.quality);
  };
})(In);
var An = {};
const Ks = kt;
function tn(c, t) {
  const i = c.a / 255, r = t + '="' + c.hex + '"';
  return i < 1 ? r + " " + t + '-opacity="' + i.toFixed(2).slice(1) + '"' : r;
}
function at(c, t, i) {
  let r = c + t;
  return typeof i < "u" && (r += " " + i), r;
}
function Js(c, t, i) {
  let r = "", n = 0, o = !1, l = 0;
  for (let d = 0; d < c.length; d++) {
    const u = Math.floor(d % t), p = Math.floor(d / t);
    !u && !o && (o = !0), c[d] ? (l++, d > 0 && u > 0 && c[d - 1] || (r += o ? at("M", u + i, 0.5 + p + i) : at("m", n, 0), n = 0, o = !1), u + 1 < t && c[d + 1] || (r += at("h", l), l = 0)) : n++;
  }
  return r;
}
An.render = function(t, i, r) {
  const n = Ks.getOptions(i), o = t.modules.size, l = t.modules.data, d = o + n.margin * 2, u = n.color.light.a ? "<path " + tn(n.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "", p = "<path " + tn(n.color.dark, "stroke") + ' d="' + Js(l, o, n.margin) + '"/>', g = 'viewBox="0 0 ' + d + " " + d + '"', b = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + g + ' shape-rendering="crispEdges">' + u + p + `</svg>
`;
  return typeof r == "function" && r(null, b), b;
};
const Ws = us, ft = fn, Rn = In, Xs = An;
function Ct(c, t, i, r, n) {
  const o = [].slice.call(arguments, 1), l = o.length, d = typeof o[l - 1] == "function";
  if (!d && !Ws())
    throw new Error("Callback required as last argument");
  if (d) {
    if (l < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (n = i, i = t, t = r = void 0) : l === 3 && (t.getContext && typeof n > "u" ? (n = r, r = void 0) : (n = r, r = i, i = t, t = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return l === 1 ? (i = t, t = r = void 0) : l === 2 && !t.getContext && (r = i, i = t, t = void 0), new Promise(function(u, p) {
      try {
        const g = ft.create(i, r);
        u(c(g, t, r));
      } catch (g) {
        p(g);
      }
    });
  }
  try {
    const u = ft.create(i, r);
    n(null, c(u, t, r));
  } catch (u) {
    n(u);
  }
}
_e.create = ft.create;
_e.toCanvas = Ct.bind(null, Rn.render);
_e.toDataURL = Ct.bind(null, Rn.renderToDataURL);
_e.toString = Ct.bind(null, function(c, t, i) {
  return Xs.render(c, i);
});
const pt = 300, Qs = 1;
function En() {
  return (game.settings.get(R, "apiUrl") || "").replace(/\/$/, "");
}
function Ys({ nonce: c, channelId: t, foundryUserName: i }) {
  return JSON.stringify({
    v: Qs,
    agentUrl: En(),
    channelId: t || null,
    nonce: c,
    foundryUserName: i || null
  });
}
async function Pn(c, t, i) {
  const r = En(), n = game.settings.get(R, "apiKey"), o = game.settings.get(R, "channelId");
  if (!r) throw new Error("Set the Agent URL in module settings first.");
  if (!n) throw new Error("Set your Agent API key in module settings first.");
  if (!o) throw new Error("Set the Channel ID (session code) in module settings first.");
  const l = foundry.utils.randomID(24);
  let d;
  try {
    d = await fetch(`${r}/api/pairing/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${n}`,
        Accept: "application/json"
      },
      body: JSON.stringify({
        nonce: l,
        channel_id: o,
        foundry_user_id: t,
        foundry_user_name: i,
        expires_in: pt
      })
    });
  } catch {
    throw new Error("Could not reach the Agent server. Check the Agent URL and your connection.");
  }
  if (!d.ok)
    throw d.status === 403 ? new Error("Only a GM with a linked Agent account can generate pairings.") : d.status === 404 ? new Error("No Agent session matches this Channel ID. Create/sync the session in the Agent first.") : new Error(`Agent server rejected the pairing (HTTP ${d.status}).`);
  return c.pendingPairings.set(l, { foundryUserId: t, ts: Date.now() }), setTimeout(() => c.pendingPairings.delete(l), pt * 1e3), { nonce: l, payload: Ys({ nonce: l, channelId: o, foundryUserName: i }) };
}
async function Zs(c, t, i) {
  let r;
  try {
    ({ payload: r } = await Pn(c, t, i));
  } catch (n) {
    ui.notifications.error(`Agent pairing: ${n.message}`);
    return;
  }
  await Ln(r, i);
}
async function Ln(c, t) {
  let i;
  try {
    i = await _e.toDataURL(c, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const r = Math.round(pt / 60), n = t || "this player", o = btoa(c);
  new Dialog({
    title: `Link Agent — ${n}`,
    content: `
            <div style="text-align:center;">
                <p>Open the Cyberpunk Agent app on your phone, tap <strong>Scan to Link</strong>,
                and point the camera at this code.</p>
                <img src="${i}" alt="Pairing QR code"
                     style="width:320px;height:320px;image-rendering:pixelated;background:#fff;padding:8px;border-radius:8px;" />
                <p style="margin-top:10px;">On a PC with no camera? Copy this code and paste it into the Agent:</p>
                <textarea readonly id="cpr-link-code" rows="2"
                          style="width:100%;font-family:monospace;font-size:0.7em;resize:none;word-break:break-all;"
                          onclick="this.select()">${o}</textarea>
                <button type="button" id="cpr-copy-link-code" style="margin-top:6px;">
                    <i class="fas fa-copy"></i> Copy link code
                </button>
                <p style="color:#ffaa00;font-size:0.85em;margin-top:10px;">This code expires in ~${r} minutes and can only be used once.</p>
            </div>
        `,
    buttons: {
      close: { icon: '<i class="fas fa-check"></i>', label: "Done" }
    },
    default: "close",
    render: (l) => {
      l.find("#cpr-copy-link-code").click(async () => {
        try {
          await navigator.clipboard.writeText(o), ui.notifications.info("Link code copied to clipboard.");
        } catch {
          l.find("#cpr-link-code").trigger("select"), ui.notifications.warn("Copy failed — select the code and copy it manually.");
        }
      });
    }
  }, { width: 380 }).render(!0);
}
class eo extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-assignment-menu",
      title: "Agent Character Assignment",
      width: 500,
      classes: ["form"]
    });
  }
  async _renderInner(t) {
    let i = `
        <div>
        <p>Assign playable characters to players who have linked their API keys.</p>
        <table style="width: 100%; text-align: left; margin-bottom: 10px;">
        <tr>
        <th>Player</th>
        <th>API Status</th>
        <th>Agent Link</th>
        <th>Assigned Character</th>
        <th style="width: 80px;"></th>
        </tr>`;
    for (let r of t.users) {
      const n = cs(r.agentLink);
      if (i += `<tr><td style="padding: 5px 0;"><strong>${r.name}</strong></td>`, r.hasKey) {
        i += '<td style="color: #00ff00;">✔ Linked</td>', i += `<td><small><code title="${r.agentLink || ""}">${n || "Pending..."}</code></small></td>`, i += `<td><select class="character-select" data-userid="${r.id}" style="width: 100%;">
                <option value="">- None -</option>`;
        for (let o of t.characters) {
          const l = o.id === r.characterId ? "selected" : "";
          i += `<option value="${o.id}" ${l}>${o.name}</option>`;
        }
        i += "</select></td>", i += `<td><button type="button" class="show-qr" data-userid="${r.id}" data-username="${r.name}" title="Show pairing QR"><i class="fas fa-qrcode"></i></button> <button type="button" class="refresh-user" data-userid="${r.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
      } else
        i += `<td style="color: #ff0000;">❌ Missing</td>
                <td><small>-</small></td>
                <td><select disabled style="width: 100%;"><option>- Key Missing -</option></select></td>
                <td><button type="button" class="show-qr" data-userid="${r.id}" data-username="${r.name}" title="Show pairing QR"><i class="fas fa-qrcode"></i></button> <button type="button" class="refresh-user" data-userid="${r.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
      i += "</tr>";
    }
    return i += `</table>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button type="button" id="save-agent-assignments"><i class="fas fa-save"></i> Save Assignments</button>
        <button type="button" id="refresh-all-users"><i class="fas fa-sync-alt"></i> Refresh All Users</button>
        </div>
        </div>`, $(i);
  }
  getData() {
    const t = game.users.map((r) => {
      var n;
      return {
        id: r.id,
        name: r.name,
        isGM: r.isGM,
        hasKey: !!r.getFlag(R, "hasApiKey"),
        agentLink: r.getFlag(R, "agent-link"),
        characterId: ((n = r.character) == null ? void 0 : n.id) || ""
      };
    }), i = game.actors.filter((r) => r.type === "character").map((r) => ({
      id: r.id,
      name: r.name
    }));
    return { users: t, characters: i };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(t) {
    super.activateListeners(t), t.find("#save-agent-assignments").click(async (i) => {
      i.preventDefault();
      let r = 0;
      const n = [];
      if (t.find(".character-select").each((o, l) => {
        var g;
        const d = l.dataset.userid, u = l.value, p = game.users.get(d);
        if (p) {
          const k = u === "" || u === "null" ? null : u;
          (((g = p.character) == null ? void 0 : g.id) || null) !== k && (n.push({ _id: p.id, character: k }), r++);
        }
      }), n.length > 0) {
        await User.updateDocuments(n), ui.notifications.info(`Cyberpunk Bridge: Updated ${r} player assignments!`);
        for (let o of n) {
          const l = game.users.get(o._id), d = l == null ? void 0 : l.getFlag(R, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: d || o._id,
            // Use agent-link as primary ID for Laravel
            actorId: o.character,
            character: o.character,
            isGM: l.isGM
          });
        }
        window.cyberpunkBridge.syncPlayerLink();
      } else
        ui.notifications.info("Cyberpunk Bridge: No assignment changes made.");
      this.close();
    }), t.find(".show-qr").click(async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.userid, n = i.currentTarget.dataset.username;
      await Zs(window.cyberpunkBridge, r, n);
    }), t.find(".refresh-user").click(async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.userid, n = game.users.get(r);
      n && (await n.unsetFlag(R, "agent-link"), await n.unsetFlag(R, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${n.name}. They will need to re-sync.`), this.render(!0));
    }), t.find("#refresh-all-users").click(async (i) => {
      i.preventDefault();
      for (let r of game.users)
        await r.unsetFlag(R, "agent-link"), await r.unsetFlag(R, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
const Fe = "pairing-request", ge = "pairing-nonce";
function to(c) {
  c.hookIds.pairingUpdateUser || (c.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (t, i) => {
    if (game.user.isGM && foundry.utils.getProperty(i, `flags.${R}.${Fe}`) && await no(c, t), t.id === game.user.id) {
      const r = foundry.utils.getProperty(i, `flags.${R}.${ge}`);
      r && r.payload && (await Ln(r.payload, game.user.name), await game.user.unsetFlag(R, ge), await game.user.unsetFlag(R, Fe));
    }
  }));
}
async function no(c, t) {
  try {
    const { payload: i } = await Pn(c, t.id, t.name);
    await t.setFlag(R, ge, { payload: i, ts: Date.now() });
  } catch (i) {
    console.warn(`[Bridge] Failed to mint pairing for ${t.name}: ${i.message}`), await t.setFlag(R, ge, { error: i.message, ts: Date.now() });
  }
}
async function ro() {
  if (game.user.isGM) {
    ui.notifications.info("As GM, use Manage Characters → the QR button beside a player.");
    return;
  }
  await game.user.setFlag(R, ge, null), await game.user.setFlag(R, Fe, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(R, ge) || (await game.user.unsetFlag(R, Fe), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class so extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-link-menu",
      title: "Link my Agent",
      width: 420,
      classes: ["form"]
    });
  }
  async _renderInner() {
    return $(`
            <div style="padding: 8px;">
                <p>Generate a QR code to link the Cyberpunk Agent app on your phone to this game.</p>
                <ol style="margin: 0 0 12px 18px; padding: 0;">
                    <li>Click <strong>Generate QR</strong> below.</li>
                    <li>The GM's Foundry mints a one-time code (the GM must be online).</li>
                    <li>Open the Agent app, tap <strong>Scan to Link</strong>, and scan it.</li>
                </ol>
                <button type="button" id="cpr-generate-qr">
                    <i class="fas fa-qrcode"></i> Generate QR
                </button>
            </div>
        `);
  }
  activateListeners(t) {
    super.activateListeners(t), t.find("#cpr-generate-qr").click(async (i) => {
      i.preventDefault(), await ro(), this.close();
    });
  }
}
const oo = 1;
function nn(c) {
  const t = (c || "").trim();
  if (!t) return null;
  for (const i of [() => atob(t), () => t])
    try {
      return JSON.parse(i());
    } catch {
    }
  return null;
}
class ao extends FormApplication {
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
                <p>In the <strong>Cyberpunk Agent</strong> app, open <strong>Settings</strong>,
                find <strong>Foundry Setup Code</strong>, click <strong>Copy Setup Code</strong>,
                then paste it below.</p>
                <textarea id="cpr-setup-code" rows="4"
                          placeholder="Paste your Foundry Setup Code here"
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
  activateListeners(t) {
    super.activateListeners(t), t.find("#cpr-setup-code").on("input", (i) => {
      this._renderPreview(t, nn(i.currentTarget.value));
    }), t.find("#cpr-apply-setup").click(async (i) => {
      i.preventDefault(), await this._apply(t.find("#cpr-setup-code").val());
    });
  }
  /**
   * Render the decoded fields into the preview area. Called on every edit so the
   * displayed values stay in sync with what Apply would save. API/Reverb keys are
   * masked since they are secrets.
   */
  _renderPreview(t, i) {
    const r = t.find("#cpr-setup-preview");
    if (!i || !i.agentUrl) {
      const l = t.find("#cpr-setup-code").val().trim() ? "Not a valid setup code yet — re-copy it from the Agent." : "Paste a code above to preview its values.";
      r.html(`<div class="notes" style="opacity:0.7;">${l}</div>`);
      return;
    }
    const n = (l) => l ? `••••${String(l).slice(-4)}` : "—", o = [
      ["Agent URL", String(i.agentUrl).replace(/\/$/, "")],
      ["Channel ID", i.channelId ? String(i.channelId) : "—"],
      ["API Key", n(i.apiKey)],
      ["Reverb Key", n(i.reverbKey)],
      ["Reverb Port", i.reverbPort ? String(i.reverbPort) : "—"]
    ];
    r.html(o.map(([l, d]) => `
            <div style="display:flex;justify-content:space-between;gap:8px;">
                <span style="opacity:0.7;">${l}</span>
                <span style="font-family:monospace;">${d}</span>
            </div>
        `).join(""));
  }
  async _apply(t) {
    const i = nn(t);
    if (!i || !i.agentUrl) {
      ui.notifications.error("Agent setup: that does not look like a valid setup code. Re-copy it from the Agent.");
      return;
    }
    if (i.v && i.v !== oo) {
      ui.notifications.error("Agent setup: this code was made by a newer Agent. Update the Bridge module.");
      return;
    }
    const r = { apiUrl: String(i.agentUrl).replace(/\/$/, "") };
    i.channelId && (r.channelId = String(i.channelId)), i.apiKey && (r.apiKey = String(i.apiKey)), i.reverbKey && (r.reverbKey = String(i.reverbKey)), i.reverbPort && (r.reverbPort = String(i.reverbPort));
    try {
      for (const [o, l] of Object.entries(r))
        await game.settings.set(R, o, l);
    } catch {
      ui.notifications.error("Agent setup: failed to save settings.");
      return;
    }
    this._reflectInSettingsForm(r);
    const n = i.channelId ? "" : " (no Channel ID in code — set it manually if needed)";
    ui.notifications.info(`Agent setup applied — connecting to ${i.agentUrl}.${n}`), this.close();
  }
  /**
   * Push the applied values into the open "Configure Settings" form, if any.
   * The settings we just saved are also editable fields on that form; without
   * this, those fields keep showing the pre-paste values and a subsequent
   * "Save Changes" there would overwrite the fresh values with stale ones.
   * @param {Record<string, string>} applied  setting key -> saved value
   */
  _reflectInSettingsForm(t) {
    const i = Object.values(ui.windows).find((r) => r instanceof SettingsConfig);
    if (i != null && i.element)
      for (const [r, n] of Object.entries(t)) {
        const o = i.element.find(`[name="${R}.${r}"]`);
        o.length && o.val(n);
      }
  }
}
function co(c) {
  game.settings.registerMenu(R, "quickSetup", {
    name: "Quick Setup",
    label: "Paste Agent Config",
    hint: "Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.",
    icon: "fas fa-bolt",
    type: ao,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(R, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: eo,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(R, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: so,
    restricted: !1
    // Available to all players
  }), game.settings.register(R, "apiUrl", {
    name: "Agent URL",
    hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
    scope: "world",
    // URL is usually the same for everyone
    config: !0,
    type: String,
    default: Ji,
    onChange: () => {
      game.user.isGM && c.reconnect(), c.syncPlayerLink();
    }
  }), game.settings.register(R, "reverbHost", {
    name: "Reverb Host (override)",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => c.reconnect()
  }), game.settings.register(R, "reverbPort", {
    name: "Reverb Port",
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => c.reconnect()
  }), game.settings.register(R, "reverbUseSSL", {
    name: "Reverb Use SSL (wss)",
    scope: "world",
    config: !0,
    type: Boolean,
    default: !0,
    onChange: () => c.reconnect()
  }), game.settings.register(R, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: sn,
    onChange: () => c.reconnect()
  }), game.settings.register(R, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (t) => {
      await game.user.setFlag(R, "hasApiKey", !!t), game.user.isGM && c.reconnect(), c.syncPlayerLink();
    }
  }), game.settings.register(R, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && c.reconnect();
    }
  }), game.settings.register(R, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function lo(c, t, { type: i, requestId: r, actorId: n }) {
  const o = game.actors.get(n);
  if (!o) {
    console.warn(`⚠️ Actor ID ${n} not found in this world.`);
    return;
  }
  await o.update(t.changes), ui.notifications.info(`💾 Sync: ${o.name} updated.`), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: n, success: !0, requestId: r });
}
async function uo(c, t, { requestId: i }) {
  let r = t.actorId, n = game.user;
  const o = t.agentLink || t.agent_link || t.foundryUserId || t.requestId;
  if (o && (n = game.users.find((l) => l.getFlag(R, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user), !r) {
    const l = n.character;
    l && (r = l.id);
  }
  if (r !== null) {
    const l = game.actors.get(r);
    if (l) {
      const d = l.toObject(), u = {
        _id: l.id,
        name: l.name,
        type: l.type,
        img: d.img,
        system: d.system,
        items: (d.items || []).map((p) => ({
          _id: p._id,
          name: p.name,
          type: p.type,
          img: p.img,
          system: p.system
        })),
        flags: d.flags && d.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": d.flags["cyberpunk-red-core"] } : {}
      };
      await c.sendResponse({ type: "ACTOR_DATA", actorId: r, actor: u, requestId: i, isGM: n.isGM, agentLink: n.getFlag(R, "agent-link") || n.id });
      return;
    }
  }
  await c.sendResponse({ type: "ACTOR_DATA", actorId: r, actor: !1, requestId: i, isGM: n.isGM, agentLink: n.getFlag(R, "agent-link") || n.id });
}
async function ho(c, t, { requestId: i, actorId: r }) {
  let n = game.user;
  const o = t.agentLink || t.agent_link || t.foundryUserId || t.requestId;
  o && (n = game.users.find((u) => u.getFlag(R, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user);
  function l(u) {
    var g;
    return ((g = canvas.tokens.placeables.filter((k) => {
      var b;
      return ((b = k.actor) == null ? void 0 : b.id) === u;
    })[0]) == null ? void 0 : g.id) ?? null;
  }
  let d = [];
  n.isGM ? d = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var g, k;
    const p = (g = Object.entries(u.ownership || {}).find(([b, m]) => {
      const S = game.users.get(b);
      return S && !S.isGM && m >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: l(u.id),
      agentLink: (p ? (k = game.users.get(p)) == null ? void 0 : k.getFlag(R, "agent-link") : null) || p || n.getFlag(R, "agent-link") || n.id
    };
  }) : (d = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(n, "OWNER")).map((u) => {
    var g, k;
    const p = (g = Object.entries(u.actor.ownership || {}).find(([b, m]) => {
      const S = game.users.get(b);
      return S && !S.isGM && m >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.actor.id,
      tokenId: l(u.actor.id),
      agentLink: (p ? (k = game.users.get(p)) == null ? void 0 : k.getFlag(R, "agent-link") : null) || p || null
    };
  }), n.character && (d.some((p) => p.actorId === n.character.id) || d.push({
    name: n.character.name,
    actorId: n.character.id,
    tokenId: l(n.character.id),
    agentLink: n.getFlag(R, "agent-link") || n.id
  })), !n.isGM && n.character && (d = d.filter((u) => u.actorId === n.character.id))), await c.sendResponse({ type: "ACTORS_DATA", actorId: r, actors: d, requestId: i, isGM: n.isGM, agentLink: n.getFlag(R, "agent-link") || n.id });
}
async function fo(c, t, { type: i, requestId: r, actorId: n }) {
  const o = game.actors.get(n);
  if (!o) {
    console.warn(`Actor ID ${n} not found in this world.`);
    return;
  }
  const l = o.items.get(t.itemId);
  if (!l) {
    console.warn(`Item ID ${t.itemId} not found on actor ${o.name}.`);
    return;
  }
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: n, success: !0, requestId: r });
}
async function po(c, t, { requestId: i, actorId: r }) {
  const n = game.actors.get(r);
  if (n) {
    const o = n.items.get(t.itemId);
    if (o) {
      const l = `items.${t.itemId}.system.equipped`;
      await o.update({ "system.equipped": t.state }), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: { [l]: t.state }, success: !0, requestId: i });
    }
  }
}
async function go(c, t, { requestId: i, actorId: r }) {
  const n = game.actors.get(r);
  if (n) {
    const o = n.items.get(t.weaponId), l = t.ammoId ? n.items.get(t.ammoId) : null, d = async () => {
      await o.reload();
      const u = {
        [`items.${t.weaponId}.system.magazine`]: {
          value: o.system.magazine.value,
          max: o.system.magazine.max
        },
        [`items.${t.weaponId}.system.installedItems`]: {
          list: [...o.system.installedItems.list],
          slots: o.system.installedItems.slots,
          usedSlots: o.system.installedItems.usedSlots
        }
      };
      l && (u[`items.${l.id}.system.amount`] = l.system.amount), n.items.filter((g) => g.type === "ammo").forEach((g) => {
        u[`items.${g.id}.system.amount`] = g.system.amount;
      }), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: u, success: !0, requestId: i });
    };
    if (l) {
      let u = o.getInstalledItems("ammo");
      u && u.length > 0 && o.uninstallItems(u), setTimeout(function() {
        o.installItems([l]);
      }, 500), setTimeout(async () => {
        await d();
      }, 1500);
    } else
      await d();
  }
}
async function mo(c, t, { requestId: i, actorId: r }) {
  const n = game.actors.get(r);
  if (!n) return;
  const o = n.items.get(t.cyberdeckId), l = n.items.get(t.programId);
  if (!o || !l) return;
  const d = o.system.installedItems.usedSlots || 0, u = o.system.installedItems.slots || 0, p = l.system.size || 1;
  if (d + p > u) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const g = o.system.installedItems.list || [];
  if (g.includes(t.programId)) return;
  const k = [...g, t.programId], b = d + p;
  await o.update({
    "system.installedItems.list": k,
    "system.installedItems.usedSlots": b
  }), await c.sendResponse({
    type: "SHEET_DELTA",
    actorId: r,
    delta: {
      [`items.${t.cyberdeckId}.system.installedItems.list`]: k,
      [`items.${t.cyberdeckId}.system.installedItems.usedSlots`]: b
    },
    success: !0,
    requestId: i
  });
}
async function yo(c, t, { requestId: i, actorId: r }) {
  const n = game.actors.get(r);
  if (!n) return;
  const o = n.items.get(t.cyberdeckId), l = n.items.get(t.programId);
  if (!o) return;
  const d = o.system.installedItems.list || [];
  if (!d.includes(t.programId)) return;
  const u = d.filter((m) => m !== t.programId), p = l && l.system.size || 1, g = o.system.installedItems.usedSlots || 0, k = Math.max(0, g - p);
  await o.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": k
  });
  const b = {
    [`items.${t.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${t.cyberdeckId}.system.installedItems.usedSlots`]: k
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), b[`items.${t.programId}.system.isRezzed`] = !1), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: b, success: !0, requestId: i });
}
async function vo(c, t, { requestId: i, actorId: r }) {
  const n = game.actors.get(r);
  if (n) {
    const o = n.items.get(t.programId);
    o && (await o.update({ "system.isRezzed": t.targetState }), await c.sendResponse({
      type: "SHEET_DELTA",
      actorId: r,
      delta: { [`items.${t.programId}.system.isRezzed`]: t.targetState },
      success: !0,
      requestId: i
    }));
  }
}
async function bo(c, t, { requestId: i, actorId: r }) {
  var o, l;
  const n = game.actors.get(r);
  if (n) {
    const d = document.createElement("a");
    d.dataset.rollType = t.rollType, d.dataset.cyberdeckId = t.cyberdeckId, d.dataset.rollTitle = t.programName, d.dataset.interfaceAbility = t.programName, d.dataset.itemId = t.cyberdeckId, d.dataset.programId = t.programId, d.dataset.executionType = t.executionType;
    const u = async () => {
      await n.sheet._onRoll({
        type: "click",
        currentTarget: d
      });
    }, p = await c.rollAndCapture(r, u, t.rollMode);
    p.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: i,
      actorId: r,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: t.programName,
      rawRoll: {
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: p.label,
        resultTotal: (o = p.rawRoll) == null ? void 0 : o.resultTotal,
        rollTitle: (l = p.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function wo(c, t, { requestId: i, actorId: r }) {
  var l, d;
  const n = game.actors.get(r), o = n.items.get(t.weaponId);
  if (n && o) {
    const u = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "damage",
        "data-item-id": o.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "damage",
          "data-item-id": o.id
        }
      });
    }, p = await c.rollAndCapture(r, u, t.rollMode);
    p.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: i,
      actorId: r,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: `${o.name} (Damage)`,
      rawRoll: {
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: p.label,
        resultTotal: (l = p.rawRoll) == null ? void 0 : l.resultTotal,
        rollTitle: (d = p.rawRoll) == null ? void 0 : d.rollTitle
      },
      success: !0
    });
  }
}
async function ko(c, t, { requestId: i, actorId: r }) {
  var o, l;
  const n = game.actors.get(r);
  if (n) {
    const d = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "deathsave",
        "data-roll-title": "Death Save",
        type: "click",
        currentTarget: {
          "data-roll-type": "deathsave",
          "data-roll-title": "Death Save"
        }
      });
    }, u = await c.rollAndCapture(r, d, t.rollMode);
    if (u.success) {
      const p = n.system.derivedStats.deathsave || {};
      await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: u.rollMode,
        requestId: i,
        actorId: r,
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: "Death Save",
        rawRoll: {
          total: u.total,
          isCriticalSuccess: u.isCriticalSuccess,
          isCriticalFailure: u.isCriticalFailure,
          label: u.label,
          resultTotal: (o = u.rawRoll) == null ? void 0 : o.resultTotal,
          rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      }), await c.sendResponse({
        type: "SHEET_DELTA",
        actorId: r,
        delta: { "system.derivedStats.deathsave": p },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function Co(c, t, { requestId: i, actorId: r }) {
  var d, u;
  const n = game.actors.get(r), o = async () => {
    await n.sheet._onRoll({
      "data-roll-type": "facedown",
      "data-roll-title": "Face Down",
      type: "click",
      currentTarget: {
        "data-roll-type": "facedown",
        "data-roll-title": "Face Down"
      }
    });
  }, l = await c.rollAndCapture(r, o, t.rollMode);
  l.success && await c.sendResponse({
    type: "ROLL_RESULT",
    rollMode: l.rollMode,
    requestId: i,
    actorId: r,
    total: l.total,
    isCriticalSuccess: l.isCriticalSuccess,
    isCriticalFailure: l.isCriticalFailure,
    rawRoll: {
      total: l.total,
      isCriticalSuccess: l.isCriticalSuccess,
      isCriticalFailure: l.isCriticalFailure,
      label: l.label,
      resultTotal: (d = l.rawRoll) == null ? void 0 : d.resultTotal,
      rollTitle: (u = l.rawRoll) == null ? void 0 : u.rollTitle
    },
    success: !0
  });
}
async function So(c, t, { requestId: i, actorId: r }) {
  var o, l;
  const n = game.actors.get(r);
  if (n) {
    const d = async () => {
      await n.rollInitiative();
    }, u = await c.rollAndCapture(r, d, t.rollMode);
    u.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: i,
      actorId: r,
      total: u.total,
      isCriticalSuccess: u.isCriticalSuccess,
      isCriticalFailure: u.isCriticalFailure,
      label: "Initiative",
      rawRoll: {
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: u.label,
        resultTotal: (o = u.rawRoll) == null ? void 0 : o.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function _o(c, t, { requestId: i, actorId: r }) {
  var o, l;
  const n = game.actors.get(r);
  if (n) {
    const d = n.items.getName(t.itemName);
    if (d) {
      const u = {
        "data-roll-type": "roleAbility",
        "data-roll-title": t.label,
        "data-item-id": d.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "roleAbility",
          "data-roll-title": t.label,
          "data-item-id": d.id,
          "data-item-subtype": t.label
        }
      };
      t.isAbility && (u["data-roll-subtype"] = "subRoleAbility", u["data-role-name"] = t.label, u.currentTarget["data-roll-subtype"] = "subRoleAbility", u.currentTarget["data-role-name"] = t.label);
      const p = async () => {
        await n.sheet._onRoll(u);
      }, g = await c.rollAndCapture(r, p, t.rollMode);
      g.success && await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: g.rollMode,
        requestId: i,
        actorId: r,
        total: g.total,
        isCriticalSuccess: g.isCriticalSuccess,
        isCriticalFailure: g.isCriticalFailure,
        label: t.label,
        rawRoll: {
          total: g.total,
          isCriticalSuccess: g.isCriticalSuccess,
          isCriticalFailure: g.isCriticalFailure,
          label: g.label,
          resultTotal: (o = g.rawRoll) == null ? void 0 : o.resultTotal,
          rollTitle: (l = g.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function To(c, t, { requestId: i, actorId: r }) {
  var o, l;
  const n = game.actors.get(r);
  if (n) {
    const d = n.items.getName(t.label);
    if (d) {
      const u = async () => {
        await n.sheet._onRoll({
          "data-roll-type": "skill",
          "data-roll-title": t.label,
          "data-item-id": d.id,
          type: "click",
          currentTarget: {
            "data-roll-type": "skill",
            "data-roll-title": t.label,
            "data-item-id": d.id
          }
        });
      }, p = await c.rollAndCapture(r, u, t.rollMode);
      p.success && await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: i,
        actorId: r,
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: t.label,
        rawRoll: {
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          label: p.label,
          resultTotal: (o = p.rawRoll) == null ? void 0 : o.resultTotal,
          rollTitle: (l = p.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function Io(c, t, { requestId: i, actorId: r }) {
  var o, l;
  const n = game.actors.get(r);
  if (n) {
    const d = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "stat",
        "data-roll-title": t.label,
        type: "click",
        currentTarget: {
          "data-roll-type": "stat",
          "data-roll-title": t.label
        }
      });
    }, u = await c.rollAndCapture(r, d, t.rollMode);
    u.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: i,
      actorId: r,
      total: u.total,
      isCriticalSuccess: u.isCriticalSuccess,
      isCriticalFailure: u.isCriticalFailure,
      label: t.label,
      rawRoll: {
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: u.label,
        resultTotal: (o = u.rawRoll) == null ? void 0 : o.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function Ao(c, t, { requestId: i, actorId: r }) {
  i && c.activeRequests.set(i, { actorId: r, timestamp: Date.now() });
  const n = new Roll(t.formula);
  await n.evaluate(), await n.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(r) }),
    flavor: t.flavor,
    rollMode: t.rollMode || game.settings.get("core", "rollMode")
  }), await c.sendResponse({
    type: "ROLL_RESULT",
    rollMode: t.rollMode || game.settings.get("core", "rollMode"),
    requestId: i,
    actorId: r,
    total: n.total,
    isCriticalSuccess: n.isCriticalSuccess || !1,
    isCriticalFailure: n.isCriticalFailure || !1,
    label: t.flavor || "Dice Roll",
    rawRoll: {
      rollTitle: t.flavor || "Dice Roll",
      _roll: n,
      formula: n.formula,
      resultTotal: n.total
    },
    success: !0
  });
}
async function Ro(c, t, { requestId: i, actorId: r, tokenId: n }) {
  var l, d, u, p, g, k, b;
  const o = game.actors.get(r);
  if (o) {
    const m = t.weaponId, S = t.fireMode, C = canvas.tokens.get(t.targetId), w = "firetype-" + m, v = "cyberpunk-red-core";
    let _ = "";
    switch (S) {
      case "Auto":
        _ = "autofire";
        break;
      case "Suppress":
        _ = "suppressive";
        break;
      case "Aimed":
        _ = "aimed", await o.setFlag(v, "aimedLocation", "head");
        break;
      default:
        _ = "";
        break;
    }
    C && C.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), _ === "" ? await o.unsetFlag(v, w) : await o.setFlag(v, w, _);
    const I = document.createElement("a");
    I.dataset.rollType = "attack", I.dataset.itemId = m, I.dataset.rollTitle = S + " Attack";
    const E = async () => {
      await o.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: I,
        type: "click"
      }, { showDialog: !0 });
    };
    let A = null;
    if (C) {
      const O = canvas.tokens.get(n) || ((l = o.getActiveTokens()) == null ? void 0 : l[0]) || canvas.tokens.placeables.find((x) => {
        var U;
        return ((U = x.actor) == null ? void 0 : U.id) === o.id;
      });
      if (O) {
        const x = C.center.x - O.center.x, U = C.center.y - O.center.y, F = Math.sqrt(Math.pow(x, 2) + Math.pow(U, 2)), Z = Math.ceil(F / (((d = canvas.grid) == null ? void 0 : d.size) || 128)), J = o.items.get(m), V = on(J), Ie = an(V, Z);
        A = Ie === 99 ? "Out of Range" : Ie;
      }
    }
    const L = await c.rollAndCapture(r, E, t.rollMode);
    if (L.success) {
      let O = null;
      typeof A == "number" ? O = L.total >= A ? "Hit" : "Miss" : A === "Out of Range" && (O = "Miss");
      const x = ((g = (p = (u = o.items.get(m)) == null ? void 0 : u.system) == null ? void 0 : p.magazine) == null ? void 0 : g.value) ?? null;
      await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: L.rollMode,
        requestId: i,
        actorId: r,
        total: L.total,
        isCriticalSuccess: L.isCriticalSuccess,
        isCriticalFailure: L.isCriticalFailure,
        label: S + " Attack",
        rawRoll: {
          total: L.total,
          isCriticalSuccess: L.isCriticalSuccess,
          isCriticalFailure: L.isCriticalFailure,
          label: L.label,
          resultTotal: (k = L.rawRoll) == null ? void 0 : k.resultTotal,
          rollTitle: (b = L.rawRoll) == null ? void 0 : b.rollTitle
        },
        dv: A,
        ammoTo: x,
        outcome: O,
        success: !0
      });
    }
  }
}
async function Eo(c, t, { type: i, requestId: r, actorId: n, tokenId: o }) {
  if (game.paused) return;
  const l = canvas.tokens.get(o);
  if (l) {
    let d = {};
    t.direction === "up" ? d.y = l.document.y - canvas.grid.size : t.direction === "down" ? d.y = l.document.y + canvas.grid.size : t.direction === "left" ? d.x = l.document.x - canvas.grid.size : t.direction === "right" && (d.x = l.document.x + canvas.grid.size), await l.document.update(d), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: n, tokenId: o, success: !0, requestId: r });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${o} not found.`), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: n, tokenId: o, success: !1, message: "Token not found", requestId: r });
}
async function Po(c, t, { type: i, requestId: r, actorId: n }) {
  const o = canvas.tokens.get(t.targetTokenId);
  o && (o.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: n, tokenId: t.targetTokenId, success: !0, requestId: r }));
}
async function Lo(c, t, { requestId: i, actorId: r, tokenId: n }) {
  var u;
  const o = canvas.tokens.placeables.filter((p) => {
    var g;
    return ((g = p.actor) == null ? void 0 : g.id) === r;
  });
  n === null && (n = ((u = o[0]) == null ? void 0 : u.id) ?? null);
  const l = canvas.tokens.get(n);
  let d = [];
  if (l) {
    const p = canvas.grid.size, g = canvas.dimensions, k = l.center.x, b = l.center.y;
    d = canvas.tokens.placeables.filter((m) => {
      const S = !m.document.hidden, C = m.actor && (m.actor.type === "character" || m.actor.type === "mook"), w = m.x >= g.sceneX && m.x <= g.sceneX + g.sceneWidth && m.y >= g.sceneY && m.y <= g.sceneY + g.sceneHeight;
      return S && C && w && m.id !== l.id;
    }).map((m) => {
      const S = m.center.x - k, C = m.center.y - b, v = (Math.sqrt(Math.pow(S, 2) + Math.pow(C, 2)) / p).toFixed(2);
      return {
        name: m.name,
        id: m.id,
        distanceM: parseFloat(v),
        type: m.actor.type
      };
    }).sort((m, S) => m.distanceM - S.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${n} not found.`);
  await c.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: r, tokens: d, requestId: i });
}
async function Mo(c, t, { requestId: i, actorId: r, tokenId: n }) {
  var p;
  const o = canvas.tokens.get(n), l = t.targetTokenId || ((p = Array.from(game.user.targets)[0]) == null ? void 0 : p.id), d = canvas.tokens.get(l), u = t.weaponId;
  if (o && d) {
    const g = d.center.x - o.center.x, k = d.center.y - o.center.y, b = Math.sqrt(Math.pow(g, 2) + Math.pow(k, 2)), m = Math.ceil(b / 128), S = o.actor.items.get(u);
    if (!S) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${o.actor.name}.`), await c.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: null, requestId: i });
      return;
    }
    const C = on(S), w = an(C, m), v = {
      targetName: d.name,
      distanceMeters: m,
      weaponCategory: C,
      dv: w === 99 ? "Out of Range" : w
    };
    await c.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: v, requestId: i });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!o}, Target: ${!!d}`), await c.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: null, requestId: i });
}
async function No(c, t, { requestId: i, actorId: r }) {
  var E;
  const n = game.actors.get(r);
  if (!n) return;
  const o = t.weaponId, l = o ? n.items.get(o) : null;
  let d = "None", u = 0, p = "None", g = 0, k = 0;
  if (l) {
    d = l.system.weaponSkill;
    const A = n.items.find((L) => L.type === "skill" && L.name === d);
    u = A && Number(A.system.level) || 0, p = A && A.system.stat || "ref", g = Number((E = n.system.stats[p]) == null ? void 0 : E.value) || 0, k = Number(l.system.attackmod) || 0;
  }
  let b = 0;
  const m = [], S = Number(n.system.derivedStats.hp.value) || 0, C = Number(n.system.derivedStats.seriouslyWounded) || 0, w = n.items.find((A) => A.name === "Stim" && A.type === "drug"), v = w && w.effects.some((A) => A.disabled === !1);
  if (S <= 0)
    b -= 4, m.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (S <= C) {
    const A = v ? 0 : -2;
    b += A, m.push({
      title: v ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: A,
      description: v ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  n.items.filter((A) => A.type === "criticalInjury").forEach((A) => {
    var U;
    const L = A.name || "Injury", O = (((U = A.system.description) == null ? void 0 : U.value) || "").replace(/<[^>]*>/g, "");
    let x = 0;
    if (A.effects && A.effects.length > 0 && A.effects.forEach((F) => {
      !F.disabled && F.changes && F.changes.forEach((Z) => {
        const J = parseInt(Z.value);
        isNaN(J) || (x += J);
      });
    }), x === 0) {
      const F = String(L).toLowerCase();
      (O.includes("-2") || F.includes("arm") || F.includes("eye")) && (x = -2);
    }
    b += x, m.push({ title: L, description: O, penalty: x });
  });
  const I = {
    actorName: n.name,
    baseBonus: g + u + k,
    breakdown: {
      statName: p,
      statValue: g,
      skillName: d,
      skillLevel: u,
      weaponAcc: k
    },
    totalPenalty: b,
    finalModifier: g + u + k + b,
    injuries: m
  };
  await c.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: r, result: I, requestId: i });
}
async function Oo(c, t, { requestId: i, actorId: r }) {
  const n = game.actors.get(r);
  if (n) {
    const o = `system.${t.label}`;
    let l;
    if (t.operation === "inc") {
      const d = o.split(".");
      let u = n;
      for (let k = 0; k < d.length; k++)
        u = k === 0 ? u[d[k]] : u == null ? void 0 : u[d[k]];
      const p = Number(u) || 0, g = Number(t.delta) || 0;
      l = p + g;
    } else
      l = typeof t.value == "string" ? t.value : Number(t.value) || 0;
    await n.update({ [o]: l }), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: { [o]: l }, tab: "stats", success: !0, requestId: i });
  }
}
async function xo(c, t, { requestId: i, actorId: r, debug: n }) {
  if (r == null) {
    n && console.log("[Bridge] Actor ID Not set:");
    return;
  }
  let o = game.actors.get(r);
  switch ((t.action == null || t.value == null) && n && console.log("[Bridge] EuroBucks data error"), t.action) {
    case "add":
      o.deltaLedgerProperty("wealth", t.value, t.reason);
      break;
    case "subtract":
      o.deltaLedgerProperty("wealth", -Number(t.value), t.reason);
      break;
    case "set":
      o.setLedgerProperty("wealth", t.value, t.reason);
      break;
  }
  o && await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: { "system.wealth": o.system.wealth }, tab: "stats", success: !0, requestId: i });
}
async function Bo(c, t, { requestId: i, actorId: r, debug: n }) {
  const o = [];
  for (const l of game.journal) {
    const d = l.pages.filter((u) => u.type === "cpr-agent.datapool");
    for (const u of d) {
      const p = u.system.entries || [], g = [];
      for (const k of p) {
        let b = k.htmlContent;
        k.type === "html" && b && (b = await TextEditor.enrichHTML(b, { async: !0 })), g.push({
          id: k.id,
          icon: k.icon,
          title: k.title,
          type: k.type,
          htmlContent: b,
          pdfPath: k.pdfPath
        });
      }
      o.push({
        journalId: l.id,
        journalName: l.name,
        pageId: u.id,
        pageName: u.name,
        entries: g
      });
    }
  }
  n && console.log("[Bridge] Found Data Pools:", o), await c.sendResponse({
    type: "NET_POOL_DATA",
    actorId: r,
    pools: o,
    requestId: i,
    success: !0
  });
}
async function Do(c, t, { debug: i }) {
  var u;
  if (!game.user.isGM) return;
  const r = t.foundryUserId, n = t.agentLink || t.agent_link, o = t.nonce;
  if (!r || !n || !o) {
    console.warn("[Bridge] PAIR_AGENT missing fields.", t);
    return;
  }
  const l = c.pendingPairings.get(o);
  if (l && l.foundryUserId !== r) {
    console.warn(`[Bridge] PAIR_AGENT nonce/user mismatch for ${r}. Ignoring.`);
    return;
  }
  l || console.warn(`[Bridge] PAIR_AGENT nonce not in local cache (GM reload?). Trusting server payload for ${r}.`);
  const d = game.users.get(r);
  if (!d) {
    console.warn(`[Bridge] PAIR_AGENT: Foundry user ${r} not found.`);
    return;
  }
  c.pendingPairings.delete(o), await d.setFlag(R, "agent-link", n), await d.setFlag(R, "hasApiKey", !0), i && console.log(`[Bridge] PAIR_AGENT: linked ${d.name} -> ${n}`), ui.notifications.info(`Agent: ${d.name} linked successfully.`), (u = Object.values(ui.windows).find((p) => {
    var g;
    return ((g = p.options) == null ? void 0 : g.id) === "cpr-agent-assignment-menu";
  })) == null || u.render(!1), await c.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: r,
    agentLink: n,
    nonce: o,
    success: !0
  });
}
const Fo = {
  UPDATE_ACTOR: lo,
  GET_ACTOR: uo,
  GET_ACTORS: ho,
  CONSUME_ITEM: fo,
  ITEM_EQUIP: po,
  RELOAD_WEAPON: go,
  INSTALL_PROGRAM: mo,
  REMOVE_PROGRAM: yo,
  TOGGLE_REZ: vo,
  PROGRAM_ROLL: bo,
  DAMAGE_ROLL: wo,
  DEATH_SAVE: ko,
  FACEDOWN_ROLL: Co,
  INITIATIVE_ROLL: So,
  ROLE_ROLL: _o,
  SKILL_ROLL: To,
  STAT_ROLL: Io,
  DICE_ROLL: Ao,
  ATTACK_ROLL: Ro,
  MOVE_TOKEN: Eo,
  TARGET_TOKEN: Po,
  LIST_VISIBLE_TOKENS: Lo,
  GET_DV_INFO: Mo,
  GET_ROLL_MODIFIERS: No,
  UPDATE_STAT: Oo,
  UPDATE_EB: xo,
  GET_NET_POOL: Bo,
  PAIR_AGENT: Do
};
async function Uo(c, t, i, r) {
  const n = Fo[t];
  if (!n) {
    console.log("Unknown DataType: " + t);
    return;
  }
  return n(c, i, r);
}
class jo {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1;
  }
  rollAndCapture(t, i, r = null) {
    return ls(this, t, i, r);
  }
  registerSettings() {
    co(this);
  }
  destroy() {
    this.echo && this.echo.disconnect();
    for (let [t, i] of Object.entries(this.hookIds))
      Hooks.off(t, i);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  connect() {
    const t = game.settings.get(R, "apiUrl"), i = game.settings.get(R, "apiKey"), r = game.settings.get(R, "debugMode"), n = Number(game.settings.get(R, "reverbPort") || 0) || 0, o = game.settings.get(R, "reverbUseSSL"), l = (game.settings.get(R, "reverbHost") || "").trim();
    if (!i || !t) return;
    this.echo && this.echo.disconnect();
    let d;
    try {
      d = new URL(t);
    } catch {
      return;
    }
    const u = l || d.hostname, p = d.protocol === "https:", g = typeof o == "boolean" ? o : void 0, k = g ?? p, b = k ? 443 : 80, m = n > 0 ? n : b;
    this.echo = new as({
      broadcaster: "reverb",
      key: game.settings.get(R, "reverbKey") || sn,
      wsHost: u,
      wsPort: m,
      wssPort: m,
      forceTLS: k,
      enabledTransports: ["ws", "wss"],
      disableStats: !0,
      authEndpoint: `${t.replace(/\/$/, "")}/api/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: "Bearer " + i,
          Accept: "application/json"
        }
      }
    }), window.CyberpunkSocket = this.echo, this.echo.connector.pusher.connection.bind("connected", () => {
      this.isConnected = !0, ui.notifications.info("Cyberpunk Bridge: Online"), r && console.log("Cyberpunk Bridge: Connection Established");
    }), this.echo.connector.pusher.connection.bind("disconnected", () => {
      this.isConnected = !1;
    }), this.listen();
  }
  listen() {
    const t = game.settings.get(R, "channelId"), i = t ? `cpr-agent.${t}` : "cpr-agent";
    this.echo.private(i).listen(".GameUpdate", (r) => {
      this.handleIncomingData(r);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const t = game.settings.get(R, "apiKey"), i = game.settings.get(R, "debugMode");
    if (i && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(R, "hasApiKey") !== !!t && await game.user.setFlag(R, "hasApiKey", !!t), !t) {
      i && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const r = async () => {
      var l;
      const n = game.user.character, o = game.user.getFlag(R, "agent-link");
      i && (console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(n == null ? void 0 : n.name) || "None"}...`), console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`), console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${o || "(none)"}`));
      try {
        const d = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          actorId: n ? n.id : null,
          character: n ? { id: n.id, name: n.name } : null,
          actorName: n ? n.name : null,
          agentLink: o || game.user.id,
          foundryUserId: game.user.id,
          foundryUserName: game.user.name,
          isGM: game.user.isGM
        });
        i && console.log("[Bridge] syncPlayerLink: Laravel response:", d), d && d.agent_link ? o !== d.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${d.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${d.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(R, "agent-link", d.agent_link), (l = ui.notifications) == null || l.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", d);
      } catch (d) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", d);
      }
    };
    await r(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (n, o) => {
      n.id === game.user.id && o.character !== void 0 && r();
    }));
  }
  registerGlobalHooks() {
    if (this.hookIds.updateActor) return;
    const t = async (i, r) => {
      const n = game.settings.get(R, "apiKey");
      !this.isConnected && !n || !i || !["character", "mook"].includes(i.type) || (console.log(`%c[Bridge] Syncing change for ${i.name}`, "color: #ffaa00;", r), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: i.id,
        uuid: i.id,
        delta: r,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (i, r, n, o) => {
      if (r.system) {
        const l = lt(r.system, "system.");
        t(i, l);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (i, r, n, o) => {
      const l = i.parent;
      if (l instanceof Actor) {
        const d = {}, u = `items.${i.id}.`;
        r.system && lt(r.system, `${u}system.`, d);
        for (let p in r)
          p !== "system" && p !== "_id" && (d[`${u}${p}`] = r[p]);
        Object.keys(d).length > 0 && t(l, d);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (i, r, n) => {
      const o = i.parent;
      if (o instanceof Actor) {
        const l = {
          [`items.+${i.id}`]: i.toObject()
        };
        t(o, l);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (i, r, n) => {
      const o = i.parent;
      if (o instanceof Actor) {
        const l = {
          [`items.${i.id}`]: null
        };
        t(o, l);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (i, r) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (i, r, n, o) => {
      (r.x || r.y || r.disposition || r.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.deleteToken = Hooks.on("deleteToken", (i, r, n) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (i, r, n) => {
      i.author.id === game.user.id && (this._isCapturingRoll || i.rolls && i.rolls.length > 0 && this.broadcastRoll(i));
    });
  }
  broadcastRefresh(t) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: t });
  }
  broadcastRoll(t) {
    var o;
    const i = game.users.get(t.author.id), r = t.rolls[0];
    let n = "publicroll";
    if (t.blind)
      n = "blindroll";
    else if (t.whisper && t.whisper.length > 0) {
      const l = game.users.filter((p) => p.isGM).map((p) => p.id), d = t.whisper.every((p) => l.includes(p) || p === t.author.id);
      t.whisper.length === 1 && t.whisper[0] === t.author.id ? n = "selfroll" : n = "gmroll";
    }
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((o = t.speaker) == null ? void 0 : o.actor) || null,
      agentLink: i ? i.getFlag(R, "agent-link") : null,
      playerName: t.alias,
      total: r.total,
      formula: r.formula,
      rollMode: t.rollMode || n,
      label: t.flavor || "Dice Roll",
      rawRoll: {
        total: r.total,
        formula: r.formula,
        rollTitle: t.flavor || "Dice Roll",
        _roll: r.toJSON()
      },
      success: !0
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(t) {
    let i = game.settings.get(R, "apiUrl");
    const r = game.settings.get(R, "apiKey");
    if (!i || !r) return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const n = (t.requestId ? this.requestAgentLinks.get(t.requestId) : null) || game.user.getFlag(R, "agent-link");
    n && !t.agentLink && (t.agentLink = n);
    const o = game.settings.get(R, "channelId");
    if (o && !t.channelId && (t.channelId = o), t.type === "ROLL_RESULT") {
      if (!t.playerName) {
        const l = t.actorId ? game.actors.get(t.actorId) : null;
        t.playerName = l ? l.name : game.user.name;
      }
      t.rollMode || (t.rollMode = game.settings.get("core", "rollMode"));
    }
    try {
      const l = await fetch(`${i}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${r}`,
          Accept: "application/json"
        },
        body: JSON.stringify(t)
      });
      return l.ok ? await l.json() : (console.error("Cyberpunk Bridge: Callback failed", l.statusText), null);
    } catch (l) {
      return console.error("Cyberpunk Bridge: Error sending callback", l), null;
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(t) {
    var b, m;
    const i = t.payload || t, r = i.type;
    console.log(`%c[Bridge] Incoming Call: ${r}`, "color: #00ffff; font-weight: bold;", i);
    const n = i.requestId, o = i.agent_link || i.agentLink;
    n && o && (this.requestAgentLinks.set(n, o), setTimeout(() => this.requestAgentLinks.delete(n), 3e4));
    const l = game.user.getFlag(R, "agent-link"), d = i.actorId, u = (b = game.user.character) == null ? void 0 : b.id, p = game.settings.get(R, "debugMode");
    p && console.log(`[Bridge] handleIncomingData: requestId=${n}, agentLink=${o}, myAgentLink=${l}, actorId=${d}, myCharacterId=${u}`);
    let g = !1;
    if (game.user.isGM || l && (n === l || o === l) ? g = !0 : !l && n && d && u === d && (console.log(`[Bridge] Discovery: Matching incoming request to character ${d}`), g = !0), !g) {
      p && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && o && l !== o && (n === o || d && u === d) && (console.log(`%c[Bridge] Setting agent-link flag: ${o}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(R, "agent-link", o), (m = ui.notifications) == null || m.info("Agent: Account linked!"));
    let k = i.tokenId;
    if (!k && d) {
      const S = canvas.tokens.placeables.find((C) => {
        var w;
        return ((w = C.actor) == null ? void 0 : w.id) === d;
      });
      S && (k = S.id);
    }
    await Uo(this, r, i, { type: r, requestId: n, actorId: d, tokenId: k, debug: p });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class Mn extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const t = foundry.data.fields;
    return {
      // An array of dynamic rows
      entries: new t.ArrayField(new t.SchemaField({
        id: new t.StringField({ required: !0, initial: () => foundry.utils.randomID() }),
        icon: new t.FilePathField({ categories: ["IMAGE"], initial: "icons/svg/item-bag.svg" }),
        title: new t.StringField({ required: !0, initial: "Link Title" }),
        type: new t.StringField({ choices: ["html", "pdf"], initial: "html" }),
        htmlContent: new t.HTMLField(),
        pdfPath: new t.FilePathField({ categories: ["TEXT"] })
      }))
    };
  }
}
nt(Mn, "metadata", {
  label: "Agent Data Pool"
});
class Nn extends JournalPageSheet {
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
  async getData(t) {
    const i = super.getData(t);
    i.entries = this.document.system.entries || [];
    for (let r of i.entries)
      r.type === "html" && (r.enrichedHtml = await TextEditor.enrichHTML(r.htmlContent, {
        async: !0,
        secrets: this.document.isOwner,
        documents: !0
      }));
    return i;
  }
  activateListeners(t) {
    super.activateListeners(t), t.find(".add-entry").click(this._onAddEntry.bind(this)), t.find(".delete-entry").click(this._onDeleteEntry.bind(this));
  }
  async _onAddEntry(t) {
    t.preventDefault();
    const r = [...this.document.system.entries || [], {
      id: foundry.utils.randomID(),
      title: "New Data Pool Link",
      type: "html"
    }];
    await this.document.update({ "system.entries": r });
  }
  async _onDeleteEntry(t) {
    t.preventDefault();
    const i = t.currentTarget.dataset.id, n = (this.document.system.entries || []).filter((o) => o.id !== i);
    await this.document.update({ "system.entries": n });
  }
}
/** @override */
nt(Nn, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
window.Pusher = Ki;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new jo();
Hooks.once("init", () => {
  Ho(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = Mn, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", Nn, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), to(window.cyberpunkBridge), console.log("[Bridge] Cyberpunk Bridge Fully Online.");
});
function Ho() {
  game.settings.settings.has(`${R}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
