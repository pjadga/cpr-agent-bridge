var Wi = Object.defineProperty;
var Ji = (c, t, r) => t in c ? Wi(c, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[t] = r;
var rt = (c, t, r) => Ji(c, typeof t != "symbol" ? t + "" : t, r);
import.meta.hot && import.meta.hot.accept((c) => {
  console.log("Hot reloading module...");
});
function Xi(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var an = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(c, t) {
  (function(i, n) {
    c.exports = n();
  })(window, function() {
    return (
      /******/
      function(r) {
        var i = {};
        function n(o) {
          if (i[o])
            return i[o].exports;
          var l = i[o] = {
            /******/
            i: o,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
        }
        return n.m = r, n.c = i, n.d = function(o, l, h) {
          n.o(o, l) || Object.defineProperty(o, l, { enumerable: !0, get: h });
        }, n.r = function(o) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
        }, n.t = function(o, l) {
          if (l & 1 && (o = n(o)), l & 8 || l & 4 && typeof o == "object" && o && o.__esModule) return o;
          var h = /* @__PURE__ */ Object.create(null);
          if (n.r(h), Object.defineProperty(h, "default", { enumerable: !0, value: o }), l & 2 && typeof o != "string") for (var u in o) n.d(h, u, (function(p) {
            return o[p];
          }).bind(null, u));
          return h;
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
        function(r, i, n) {
          var o = this && this.__extends || /* @__PURE__ */ function() {
            var C = function(w, v) {
              return C = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, A) {
                S.__proto__ = A;
              } || function(S, A) {
                for (var R in A) A.hasOwnProperty(R) && (S[R] = A[R]);
              }, C(w, v);
            };
            return function(w, v) {
              C(w, v);
              function S() {
                this.constructor = w;
              }
              w.prototype = v === null ? Object.create(v) : (S.prototype = v.prototype, new S());
            };
          }();
          Object.defineProperty(i, "__esModule", { value: !0 });
          var l = 256, h = (
            /** @class */
            function() {
              function C(w) {
                w === void 0 && (w = "="), this._paddingCharacter = w;
              }
              return C.prototype.encodedLength = function(w) {
                return this._paddingCharacter ? (w + 2) / 3 * 4 | 0 : (w * 8 + 5) / 6 | 0;
              }, C.prototype.encode = function(w) {
                for (var v = "", S = 0; S < w.length - 2; S += 3) {
                  var A = w[S] << 16 | w[S + 1] << 8 | w[S + 2];
                  v += this._encodeByte(A >>> 3 * 6 & 63), v += this._encodeByte(A >>> 2 * 6 & 63), v += this._encodeByte(A >>> 1 * 6 & 63), v += this._encodeByte(A >>> 0 * 6 & 63);
                }
                var R = w.length - S;
                if (R > 0) {
                  var A = w[S] << 16 | (R === 2 ? w[S + 1] << 8 : 0);
                  v += this._encodeByte(A >>> 3 * 6 & 63), v += this._encodeByte(A >>> 2 * 6 & 63), R === 2 ? v += this._encodeByte(A >>> 1 * 6 & 63) : v += this._paddingCharacter || "", v += this._paddingCharacter || "";
                }
                return v;
              }, C.prototype.maxDecodedLength = function(w) {
                return this._paddingCharacter ? w / 4 * 3 | 0 : (w * 6 + 7) / 8 | 0;
              }, C.prototype.decodedLength = function(w) {
                return this.maxDecodedLength(w.length - this._getPaddingLength(w));
              }, C.prototype.decode = function(w) {
                if (w.length === 0)
                  return new Uint8Array(0);
                for (var v = this._getPaddingLength(w), S = w.length - v, A = new Uint8Array(this.maxDecodedLength(S)), R = 0, E = 0, L = 0, N = 0, x = 0, U = 0, F = 0; E < S - 4; E += 4)
                  N = this._decodeChar(w.charCodeAt(E + 0)), x = this._decodeChar(w.charCodeAt(E + 1)), U = this._decodeChar(w.charCodeAt(E + 2)), F = this._decodeChar(w.charCodeAt(E + 3)), A[R++] = N << 2 | x >>> 4, A[R++] = x << 4 | U >>> 2, A[R++] = U << 6 | F, L |= N & l, L |= x & l, L |= U & l, L |= F & l;
                if (E < S - 1 && (N = this._decodeChar(w.charCodeAt(E)), x = this._decodeChar(w.charCodeAt(E + 1)), A[R++] = N << 2 | x >>> 4, L |= N & l, L |= x & l), E < S - 2 && (U = this._decodeChar(w.charCodeAt(E + 2)), A[R++] = x << 4 | U >>> 2, L |= U & l), E < S - 3 && (F = this._decodeChar(w.charCodeAt(E + 3)), A[R++] = U << 6 | F, L |= F & l), L !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return A;
              }, C.prototype._encodeByte = function(w) {
                var v = w;
                return v += 65, v += 25 - w >>> 8 & 6, v += 51 - w >>> 8 & -75, v += 61 - w >>> 8 & -15, v += 62 - w >>> 8 & 3, String.fromCharCode(v);
              }, C.prototype._decodeChar = function(w) {
                var v = l;
                return v += (42 - w & w - 44) >>> 8 & -l + w - 43 + 62, v += (46 - w & w - 48) >>> 8 & -l + w - 47 + 63, v += (47 - w & w - 58) >>> 8 & -l + w - 48 + 52, v += (64 - w & w - 91) >>> 8 & -l + w - 65 + 0, v += (96 - w & w - 123) >>> 8 & -l + w - 97 + 26, v;
              }, C.prototype._getPaddingLength = function(w) {
                var v = 0;
                if (this._paddingCharacter) {
                  for (var S = w.length - 1; S >= 0 && w[S] === this._paddingCharacter; S--)
                    v++;
                  if (w.length < 4 || v > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return v;
              }, C;
            }()
          );
          i.Coder = h;
          var u = new h();
          function p(C) {
            return u.encode(C);
          }
          i.encode = p;
          function g(C) {
            return u.decode(C);
          }
          i.decode = g;
          var k = (
            /** @class */
            function(C) {
              o(w, C);
              function w() {
                return C !== null && C.apply(this, arguments) || this;
              }
              return w.prototype._encodeByte = function(v) {
                var S = v;
                return S += 65, S += 25 - v >>> 8 & 6, S += 51 - v >>> 8 & -75, S += 61 - v >>> 8 & -13, S += 62 - v >>> 8 & 49, String.fromCharCode(S);
              }, w.prototype._decodeChar = function(v) {
                var S = l;
                return S += (44 - v & v - 46) >>> 8 & -l + v - 45 + 62, S += (94 - v & v - 96) >>> 8 & -l + v - 95 + 63, S += (47 - v & v - 58) >>> 8 & -l + v - 48 + 52, S += (64 - v & v - 91) >>> 8 & -l + v - 65 + 0, S += (96 - v & v - 123) >>> 8 & -l + v - 97 + 26, S;
              }, w;
            }(h)
          );
          i.URLSafeCoder = k;
          var b = new k();
          function m(C) {
            return b.encode(C);
          }
          i.encodeURLSafe = m;
          function _(C) {
            return b.decode(C);
          }
          i.decodeURLSafe = _, i.encodedLength = function(C) {
            return u.encodedLength(C);
          }, i.maxDecodedLength = function(C) {
            return u.maxDecodedLength(C);
          }, i.decodedLength = function(C) {
            return u.decodedLength(C);
          };
        },
        /* 1 */
        /***/
        function(r, i, n) {
          Object.defineProperty(i, "__esModule", { value: !0 });
          var o = "utf8: invalid string", l = "utf8: invalid source encoding";
          function h(g) {
            for (var k = new Uint8Array(u(g)), b = 0, m = 0; m < g.length; m++) {
              var _ = g.charCodeAt(m);
              _ < 128 ? k[b++] = _ : _ < 2048 ? (k[b++] = 192 | _ >> 6, k[b++] = 128 | _ & 63) : _ < 55296 ? (k[b++] = 224 | _ >> 12, k[b++] = 128 | _ >> 6 & 63, k[b++] = 128 | _ & 63) : (m++, _ = (_ & 1023) << 10, _ |= g.charCodeAt(m) & 1023, _ += 65536, k[b++] = 240 | _ >> 18, k[b++] = 128 | _ >> 12 & 63, k[b++] = 128 | _ >> 6 & 63, k[b++] = 128 | _ & 63);
            }
            return k;
          }
          i.encode = h;
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
          i.encodedLength = u;
          function p(g) {
            for (var k = [], b = 0; b < g.length; b++) {
              var m = g[b];
              if (m & 128) {
                var _ = void 0;
                if (m < 224) {
                  if (b >= g.length)
                    throw new Error(l);
                  var C = g[++b];
                  if ((C & 192) !== 128)
                    throw new Error(l);
                  m = (m & 31) << 6 | C & 63, _ = 128;
                } else if (m < 240) {
                  if (b >= g.length - 1)
                    throw new Error(l);
                  var C = g[++b], w = g[++b];
                  if ((C & 192) !== 128 || (w & 192) !== 128)
                    throw new Error(l);
                  m = (m & 15) << 12 | (C & 63) << 6 | w & 63, _ = 2048;
                } else if (m < 248) {
                  if (b >= g.length - 2)
                    throw new Error(l);
                  var C = g[++b], w = g[++b], v = g[++b];
                  if ((C & 192) !== 128 || (w & 192) !== 128 || (v & 192) !== 128)
                    throw new Error(l);
                  m = (m & 15) << 18 | (C & 63) << 12 | (w & 63) << 6 | v & 63, _ = 65536;
                } else
                  throw new Error(l);
                if (m < _ || m >= 55296 && m <= 57343)
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
          class o {
            constructor(e, s) {
              this.lastId = 0, this.prefix = e, this.name = s;
            }
            create(e) {
              this.lastId++;
              var s = this.lastId, d = this.prefix + s, f = this.name + "[" + s + "]", y = !1, T = function() {
                y || (e.apply(null, arguments), y = !0);
              };
              return this[s] = T, { number: s, id: d, name: f, callback: T };
            }
            remove(e) {
              delete this[e.number];
            }
          }
          var l = new o("_pusher_script_", "Pusher.ScriptReceivers"), h = {
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
            constructor(e) {
              this.options = e, this.receivers = e.receivers || l, this.loading = {};
            }
            load(e, s, d) {
              var f = this;
              if (f.loading[e] && f.loading[e].length > 0)
                f.loading[e].push(d);
              else {
                f.loading[e] = [d];
                var y = O.createScriptRequest(f.getPath(e, s)), T = f.receivers.create(function(P) {
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
              var s, d = O.getDocument().location.protocol;
              return e && e.useTLS || d === "https:" ? s = this.options.cdn_https : s = this.options.cdn_http, s.replace(/\/*$/, "") + "/" + this.options.version;
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
          var _ = { buildLogSuffix: function(a) {
            const e = "See:", s = b.urls[a];
            if (!s)
              return "";
            let d;
            return s.fullUrl ? d = s.fullUrl : s.path && (d = b.baseUrl + s.path), d ? `${e} ${d}` : "";
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
          class R extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class E extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class L extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class N extends Error {
            constructor(e) {
              super(e), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class x extends Error {
            constructor(e, s) {
              super(s), this.status = e, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var F = function(a, e, s, d, f) {
            const y = O.createXHR();
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
                    f(new x(200, `JSON returned from ${d.toString()} endpoint was invalid, yet status code was 200. Data was: ${y.responseText}`), null);
                  }
                  M && f(null, P);
                } else {
                  let P = "";
                  switch (d) {
                    case C.UserAuthentication:
                      P = _.buildLogSuffix("authenticationEndpoint");
                      break;
                    case C.ChannelAuthorization:
                      P = `Clients must be authorized to join private or presence channels. ${_.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  f(new x(y.status, `Unable to retrieve auth string from ${d.toString()} endpoint - received status: ${y.status} from ${s.endpoint}. ${P}`), null);
                }
            }, y.send(e), y;
          };
          function Z(a) {
            return Hn(Un(a));
          }
          var W = String.fromCharCode, V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ie = function(a) {
            var e = a.charCodeAt(0);
            return e < 128 ? a : e < 2048 ? W(192 | e >>> 6) + W(128 | e & 63) : W(224 | e >>> 12 & 15) + W(128 | e >>> 6 & 63) + W(128 | e & 63);
          }, Un = function(a) {
            return a.replace(/[^\x00-\x7F]/g, Ie);
          }, jn = function(a) {
            var e = [0, 2, 1][a.length % 3], s = a.charCodeAt(0) << 16 | (a.length > 1 ? a.charCodeAt(1) : 0) << 8 | (a.length > 2 ? a.charCodeAt(2) : 0), d = [
              V.charAt(s >>> 18),
              V.charAt(s >>> 12 & 63),
              e >= 2 ? "=" : V.charAt(s >>> 6 & 63),
              e >= 1 ? "=" : V.charAt(s & 63)
            ];
            return d.join("");
          }, Hn = window.btoa || function(a) {
            return a.replace(/[\s\S]{1,3}/g, jn);
          };
          class zn {
            constructor(e, s, d, f) {
              this.clear = s, this.timer = e(() => {
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
          var St = zn;
          function qn(a) {
            window.clearTimeout(a);
          }
          function Gn(a) {
            window.clearInterval(a);
          }
          class oe extends St {
            constructor(e, s) {
              super(setTimeout, qn, e, function(d) {
                return s(), null;
              });
            }
          }
          class $n extends St {
            constructor(e, s) {
              super(setInterval, Gn, e, function(d) {
                return s(), d;
              });
            }
          }
          var Vn = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(a) {
              return new oe(0, a);
            },
            method(a, ...e) {
              var s = Array.prototype.slice.call(arguments, 1);
              return function(d) {
                return d[a].apply(d, s.concat(arguments));
              };
            }
          }, K = Vn;
          function J(a, ...e) {
            for (var s = 0; s < e.length; s++) {
              var d = e[s];
              for (var f in d)
                d[f] && d[f].constructor && d[f].constructor === Object ? a[f] = J(a[f] || {}, d[f]) : a[f] = d[f];
            }
            return a;
          }
          function Kn() {
            for (var a = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? a.push(arguments[e]) : a.push(Ee(arguments[e]));
            return a.join(" : ");
          }
          function Tt(a, e) {
            var s = Array.prototype.indexOf;
            if (a === null)
              return -1;
            if (s && a.indexOf === s)
              return a.indexOf(e);
            for (var d = 0, f = a.length; d < f; d++)
              if (a[d] === e)
                return d;
            return -1;
          }
          function te(a, e) {
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && e(a[s], s, a);
          }
          function At(a) {
            var e = [];
            return te(a, function(s, d) {
              e.push(d);
            }), e;
          }
          function Wn(a) {
            var e = [];
            return te(a, function(s) {
              e.push(s);
            }), e;
          }
          function ye(a, e, s) {
            for (var d = 0; d < a.length; d++)
              e.call(s || window, a[d], d, a);
          }
          function It(a, e) {
            for (var s = [], d = 0; d < a.length; d++)
              s.push(e(a[d], d, a, s));
            return s;
          }
          function Jn(a, e) {
            var s = {};
            return te(a, function(d, f) {
              s[f] = e(d);
            }), s;
          }
          function Et(a, e) {
            e = e || function(f) {
              return !!f;
            };
            for (var s = [], d = 0; d < a.length; d++)
              e(a[d], d, a, s) && s.push(a[d]);
            return s;
          }
          function Rt(a, e) {
            var s = {};
            return te(a, function(d, f) {
              (e && e(d, f, a, s) || d) && (s[f] = d);
            }), s;
          }
          function Xn(a) {
            var e = [];
            return te(a, function(s, d) {
              e.push([d, s]);
            }), e;
          }
          function Pt(a, e) {
            for (var s = 0; s < a.length; s++)
              if (e(a[s], s, a))
                return !0;
            return !1;
          }
          function Qn(a, e) {
            for (var s = 0; s < a.length; s++)
              if (!e(a[s], s, a))
                return !1;
            return !0;
          }
          function Yn(a) {
            return Jn(a, function(e) {
              return typeof e == "object" && (e = Ee(e)), encodeURIComponent(Z(e.toString()));
            });
          }
          function Zn(a) {
            var e = Rt(a, function(d) {
              return d !== void 0;
            }), s = It(Xn(Yn(e)), K.method("join", "=")).join("&");
            return s;
          }
          function er(a) {
            var e = [], s = [];
            return function d(f, y) {
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
                      M[T] = d(f[T], y + "[" + T + "]");
                  else {
                    M = {};
                    for (P in f)
                      Object.prototype.hasOwnProperty.call(f, P) && (M[P] = d(f[P], y + "[" + JSON.stringify(P) + "]"));
                  }
                  return M;
                case "number":
                case "string":
                case "boolean":
                  return f;
              }
            }(a, "$");
          }
          function Ee(a) {
            try {
              return JSON.stringify(a);
            } catch {
              return JSON.stringify(er(a));
            }
          }
          class tr {
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
              var d = Kn.apply(this, arguments);
              et.log ? et.log(d) : et.logToConsole && e.bind(this)(d);
            }
          }
          var j = new tr(), nr = function(a, e, s, d, f) {
            (s.headers !== void 0 || s.headersProvider != null) && j.warn(`To send headers with the ${d.toString()} request, you must use AJAX, rather than JSONP.`);
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
          }, rr = nr;
          class ir {
            constructor(e) {
              this.src = e;
            }
            send(e) {
              var s = this, d = "Error loading " + s.src;
              s.script = document.createElement("script"), s.script.id = e.id, s.script.src = s.src, s.script.type = "text/javascript", s.script.charset = "UTF-8", s.script.addEventListener ? (s.script.onerror = function() {
                e.callback(d);
              }, s.script.onload = function() {
                e.callback(null);
              }) : s.script.onreadystatechange = function() {
                (s.script.readyState === "loaded" || s.script.readyState === "complete") && e.callback(null);
              }, s.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (s.errorScript = document.createElement("script"), s.errorScript.id = e.id + "_error", s.errorScript.text = e.name + "('" + d + "');", s.script.async = s.errorScript.async = !1) : s.script.async = !0;
              var f = document.getElementsByTagName("head")[0];
              f.insertBefore(s.script, f.firstChild), s.errorScript && f.insertBefore(s.errorScript, s.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class sr {
            constructor(e, s) {
              this.url = e, this.data = s;
            }
            send(e) {
              if (!this.request) {
                var s = Zn(this.data), d = this.url + "/" + e.number + "?" + s;
                this.request = O.createScriptRequest(d), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var or = function(a, e) {
            return function(s, d) {
              var f = "http" + (e ? "s" : "") + "://", y = f + (a.host || a.options.host) + a.options.path, T = O.createJSONPRequest(y, s), P = O.ScriptReceivers.create(function(M, B) {
                l.remove(P), T.cleanup(), B && B.host && (a.host = B.host), d && d(M, B);
              });
              T.send(P);
            };
          }, ar = {
            name: "jsonp",
            getAgent: or
          }, cr = ar;
          function Ge(a, e, s) {
            var d = a + (e.useTLS ? "s" : ""), f = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return d + "://" + f + s;
          }
          function $e(a, e) {
            var s = "/app/" + a, d = "?protocol=" + u.PROTOCOL + "&client=js&version=" + u.VERSION + (e ? "&" + e : "");
            return s + d;
          }
          var lr = {
            getInitial: function(a, e) {
              var s = (e.httpPath || "") + $e(a, "flash=false");
              return Ge("ws", e, s);
            }
          }, ur = {
            getInitial: function(a, e) {
              var s = (e.httpPath || "/pusher") + $e(a);
              return Ge("http", e, s);
            }
          }, hr = {
            getInitial: function(a, e) {
              return Ge("http", e, e.httpPath || "/pusher");
            },
            getPath: function(a, e) {
              return $e(a);
            }
          };
          class dr {
            constructor() {
              this._callbacks = {};
            }
            get(e) {
              return this._callbacks[Ve(e)];
            }
            add(e, s, d) {
              var f = Ve(e);
              this._callbacks[f] = this._callbacks[f] || [], this._callbacks[f].push({
                fn: s,
                context: d
              });
            }
            remove(e, s, d) {
              if (!e && !s && !d) {
                this._callbacks = {};
                return;
              }
              var f = e ? [Ve(e)] : At(this._callbacks);
              s || d ? this.removeCallback(f, s, d) : this.removeAllCallbacks(f);
            }
            removeCallback(e, s, d) {
              ye(e, function(f) {
                this._callbacks[f] = Et(this._callbacks[f] || [], function(y) {
                  return s && s !== y.fn || d && d !== y.context;
                }), this._callbacks[f].length === 0 && delete this._callbacks[f];
              }, this);
            }
            removeAllCallbacks(e) {
              ye(e, function(s) {
                delete this._callbacks[s];
              }, this);
            }
          }
          function Ve(a) {
            return "_" + a;
          }
          class ne {
            constructor(e) {
              this.callbacks = new dr(), this.global_callbacks = [], this.failThrough = e;
            }
            bind(e, s, d) {
              return this.callbacks.add(e, s, d), this;
            }
            bind_global(e) {
              return this.global_callbacks.push(e), this;
            }
            unbind(e, s, d) {
              return this.callbacks.remove(e, s, d), this;
            }
            unbind_global(e) {
              return e ? (this.global_callbacks = Et(this.global_callbacks || [], (s) => s !== e), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(e, s, d) {
              for (var f = 0; f < this.global_callbacks.length; f++)
                this.global_callbacks[f](e, s);
              var y = this.callbacks.get(e), T = [];
              if (d ? T.push(s, d) : s && T.push(s), y && y.length > 0)
                for (var f = 0; f < y.length; f++)
                  y[f].fn.apply(y[f].context || window, T);
              else this.failThrough && this.failThrough(e, s);
              return this;
            }
          }
          class fr extends ne {
            constructor(e, s, d, f, y) {
              super(), this.initialize = O.transportConnectionInitializer, this.hooks = e, this.name = s, this.priority = d, this.key = f, this.options = y, this.state = "new", this.timeline = y.timeline, this.activityTimeout = y.activityTimeout, this.id = this.timeline.generateUniqueID();
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
              return J({ cid: this.id }, e);
            }
          }
          class ue {
            constructor(e) {
              this.hooks = e;
            }
            isSupported(e) {
              return this.hooks.isSupported(e);
            }
            createConnection(e, s, d, f) {
              return new fr(this.hooks, e, s, d, f);
            }
          }
          var pr = new ue({
            urls: lr,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!O.getWebSocketAPI();
            },
            isSupported: function() {
              return !!O.getWebSocketAPI();
            },
            getSocket: function(a) {
              return O.createWebSocket(a);
            }
          }), Lt = {
            urls: ur,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Mt = J({
            getSocket: function(a) {
              return O.HTTPFactory.createStreamingSocket(a);
            }
          }, Lt), Ot = J({
            getSocket: function(a) {
              return O.HTTPFactory.createPollingSocket(a);
            }
          }, Lt), Nt = {
            isSupported: function() {
              return O.isXHRSupported();
            }
          }, gr = new ue(J({}, Mt, Nt)), mr = new ue(J({}, Ot, Nt)), yr = {
            ws: pr,
            xhr_streaming: gr,
            xhr_polling: mr
          }, Re = yr, vr = new ue({
            file: "sockjs",
            urls: hr,
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
          }), xt = {
            isSupported: function(a) {
              var e = O.isXDRSupported(a.useTLS);
              return e;
            }
          }, br = new ue(J({}, Mt, xt)), wr = new ue(J({}, Ot, xt));
          Re.xdr_streaming = br, Re.xdr_polling = wr, Re.sockjs = vr;
          var kr = Re;
          class Cr extends ne {
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
          var _r = new Cr();
          class Sr {
            constructor(e, s, d) {
              this.manager = e, this.transport = s, this.minPingDelay = d.minPingDelay, this.maxPingDelay = d.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(e, s, d, f) {
              f = J({}, f, {
                activityTimeout: this.pingDelay
              });
              var y = this.transport.createConnection(e, s, d, f), T = null, P = function() {
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
          const Bt = {
            decodeMessage: function(a) {
              try {
                var e = JSON.parse(a.data), s = e.data;
                if (typeof s == "string")
                  try {
                    s = JSON.parse(e.data);
                  } catch {
                  }
                var d = {
                  event: e.event,
                  channel: e.channel,
                  data: s
                };
                return e.user_id && (d.user_id = e.user_id), d;
              } catch (f) {
                throw { type: "MessageParseError", error: f, data: a.data };
              }
            },
            encodeMessage: function(a) {
              return JSON.stringify(a);
            },
            processHandshake: function(a) {
              var e = Bt.decodeMessage(a);
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
          var ae = Bt;
          class Tr extends ne {
            constructor(e, s) {
              super(), this.id = e, this.transport = s, this.activityTimeout = s.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(e) {
              return this.transport.send(e);
            }
            send_event(e, s, d) {
              var f = { event: e, data: s };
              return d && (f.channel = d), j.debug("Event sent", f), this.send(ae.encodeMessage(f));
            }
            ping() {
              this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
            }
            close() {
              this.transport.close();
            }
            bindListeners() {
              var e = {
                message: (d) => {
                  var f;
                  try {
                    f = ae.decodeMessage(d);
                  } catch (y) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: y,
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
                  s(), d && d.code && this.handleCloseEvent(d), this.transport = null, this.emit("closed");
                }
              }, s = () => {
                te(e, (d, f) => {
                  this.transport.unbind(f, d);
                });
              };
              te(e, (d, f) => {
                this.transport.bind(f, d);
              });
            }
            handleCloseEvent(e) {
              var s = ae.getCloseAction(e), d = ae.getCloseError(e);
              d && this.emit("error", d), s && this.emit(s, { action: s, error: d });
            }
          }
          class Ar {
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
                } catch (d) {
                  this.finish("error", { error: d }), this.transport.close();
                  return;
                }
                s.action === "connected" ? this.finish("connected", {
                  connection: new Tr(s.id, this.transport),
                  activityTimeout: s.activityTimeout
                }) : (this.finish(s.action, { error: s.error }), this.transport.close());
              }, this.onClosed = (e) => {
                this.unbindListeners();
                var s = ae.getCloseAction(e) || "backoff", d = ae.getCloseError(e);
                this.finish(s, { error: d });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(e, s) {
              this.callback(J({ transport: this.transport, action: e }, s));
            }
          }
          class Ir {
            constructor(e, s) {
              this.timeline = e, this.options = s || {};
            }
            send(e, s) {
              this.timeline.isEmpty() || this.timeline.send(O.TimelineTransport.getAgent(this, e), s);
            }
          }
          class Ke extends ne {
            constructor(e, s) {
              super(function(d, f) {
                j.debug("No callbacks on " + e + " for " + d);
              }), this.name = e, this.pusher = s, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(e, s) {
              return s(null, { auth: "" });
            }
            trigger(e, s) {
              if (e.indexOf("client-") !== 0)
                throw new w("Event '" + e + "' does not start with 'client-'");
              if (!this.subscribed) {
                var d = _.buildLogSuffix("triggeringClientEvents");
                j.warn(`Client event triggered before channel 'subscription_succeeded' event . ${d}`);
              }
              return this.pusher.send_event(e, s, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(e) {
              var s = e.event, d = e.data;
              if (s === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(e);
              else if (s === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(e);
              else if (s.indexOf("pusher_internal:") !== 0) {
                var f = {};
                this.emit(s, d, f);
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
          class We extends Ke {
            authorize(e, s) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: e
              }, s);
            }
          }
          class Er {
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
              te(this.members, (s, d) => {
                e(this.get(d));
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
          var Rr = function(a, e, s, d) {
            function f(y) {
              return y instanceof s ? y : new s(function(T) {
                T(y);
              });
            }
            return new (s || (s = Promise))(function(y, T) {
              function P(D) {
                try {
                  B(d.next(D));
                } catch (H) {
                  T(H);
                }
              }
              function M(D) {
                try {
                  B(d.throw(D));
                } catch (H) {
                  T(H);
                }
              }
              function B(D) {
                D.done ? y(D.value) : f(D.value).then(P, M);
              }
              B((d = d.apply(a, e || [])).next());
            });
          };
          class Pr extends We {
            constructor(e, s) {
              super(e, s), this.members = new Er();
            }
            authorize(e, s) {
              super.authorize(e, (d, f) => Rr(this, void 0, void 0, function* () {
                if (!d)
                  if (f = f, f.channel_data != null) {
                    var y = JSON.parse(f.channel_data);
                    this.members.setMyID(y.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let T = _.buildLogSuffix("authorizationEndpoint");
                    j.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${T}, or the user should be signed in.`), s("Invalid auth response");
                    return;
                  }
                s(d, f);
              }));
            }
            handleEvent(e) {
              var s = e.event;
              if (s.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(e);
              else {
                var d = e.data, f = {};
                e.user_id && (f.user_id = e.user_id), this.emit(s, d, f);
              }
            }
            handleInternalEvent(e) {
              var s = e.event, d = e.data;
              switch (s) {
                case "pusher_internal:subscription_succeeded":
                  this.handleSubscriptionSucceededEvent(e);
                  break;
                case "pusher_internal:subscription_count":
                  this.handleSubscriptionCountEvent(e);
                  break;
                case "pusher_internal:member_added":
                  var f = this.members.addMember(d);
                  this.emit("pusher:member_added", f);
                  break;
                case "pusher_internal:member_removed":
                  var y = this.members.removeMember(d);
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
          var Lr = n(1), Je = n(0);
          class Mr extends We {
            constructor(e, s, d) {
              super(e, s), this.key = null, this.nacl = d;
            }
            authorize(e, s) {
              super.authorize(e, (d, f) => {
                if (d) {
                  s(d, f);
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
              throw new E("Client events are not currently supported for encrypted channels");
            }
            handleEvent(e) {
              var s = e.event, d = e.data;
              if (s.indexOf("pusher_internal:") === 0 || s.indexOf("pusher:") === 0) {
                super.handleEvent(e);
                return;
              }
              this.handleEncryptedEvent(s, d);
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
              let d = Object(Je.decode)(s.ciphertext);
              if (d.length < this.nacl.secretbox.overheadLength) {
                j.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${d.length}`);
                return;
              }
              let f = Object(Je.decode)(s.nonce);
              if (f.length < this.nacl.secretbox.nonceLength) {
                j.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${f.length}`);
                return;
              }
              let y = this.nacl.secretbox.open(d, f, this.key);
              if (y === null) {
                j.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (T, P) => {
                  if (T) {
                    j.error(`Failed to make a request to the authEndpoint: ${P}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (y = this.nacl.secretbox.open(d, f, this.key), y === null) {
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
              let s = Object(Lr.decode)(e);
              try {
                return JSON.parse(s);
              } catch {
                return s;
              }
            }
          }
          class Or extends ne {
            constructor(e, s) {
              super(), this.state = "initialized", this.connection = null, this.key = e, this.options = s, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
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
            send(e) {
              return this.connection ? this.connection.send(e) : !1;
            }
            send_event(e, s, d) {
              return this.connection ? this.connection.send_event(e, s, d) : !1;
            }
            disconnect() {
              this.disconnectInternally(), this.updateState("disconnected");
            }
            isUsingTLS() {
              return this.usingTLS;
            }
            startConnecting() {
              var e = (s, d) => {
                s ? this.runner = this.strategy.connect(0, e) : d.action === "error" ? (this.emit("error", {
                  type: "HandshakeError",
                  error: d.error
                }), this.timeline.error({ handshakeError: d.error })) : (this.abortConnecting(), this.handshakeCallbacks[d.action](d));
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
              return J({}, e, {
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
              return J({}, e, {
                connected: (s) => {
                  this.activityTimeout = Math.min(this.options.activityTimeout, s.activityTimeout, s.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(s.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
                }
              });
            }
            buildErrorCallbacks() {
              let e = (s) => (d) => {
                d.error && this.emit("error", { type: "WebSocketError", error: d.error }), s(d);
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
              var d = this.state;
              if (this.state = e, d !== e) {
                var f = e;
                f === "connected" && (f += " with new socket ID " + s.socket_id), j.debug("State changed", d + " -> " + f), this.timeline.info({ state: e, params: s }), this.emit("state_change", { previous: d, current: e }), this.emit(e, s);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class Nr {
            constructor() {
              this.channels = {};
            }
            add(e, s) {
              return this.channels[e] || (this.channels[e] = xr(e, s)), this.channels[e];
            }
            all() {
              return Wn(this.channels);
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
          function xr(a, e) {
            if (a.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return re.createEncryptedChannel(a, e, e.config.nacl);
              let s = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", d = _.buildLogSuffix("encryptedChannelSupport");
              throw new E(`${s}. ${d}`);
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
          var Br = {
            createChannels() {
              return new Nr();
            },
            createConnectionManager(a, e) {
              return new Or(a, e);
            },
            createChannel(a, e) {
              return new Ke(a, e);
            },
            createPrivateChannel(a, e) {
              return new We(a, e);
            },
            createPresenceChannel(a, e) {
              return new Pr(a, e);
            },
            createEncryptedChannel(a, e, s) {
              return new Mr(a, e, s);
            },
            createTimelineSender(a, e) {
              return new Ir(a, e);
            },
            createHandshake(a, e) {
              return new Ar(a, e);
            },
            createAssistantToTheTransportManager(a, e, s) {
              return new Sr(a, e, s);
            }
          }, re = Br;
          class Dt {
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
              return Pt(this.strategies, K.method("isSupported"));
            }
            connect(e, s) {
              var d = this.strategies, f = 0, y = this.timeout, T = null, P = (M, B) => {
                B ? s(null, B) : (f = f + 1, this.loop && (f = f % d.length), f < d.length ? (y && (y = y * 2, this.timeoutLimit && (y = Math.min(y, this.timeoutLimit))), T = this.tryStrategy(d[f], e, { timeout: y, failFast: this.failFast }, P)) : s(!0));
              };
              return T = this.tryStrategy(d[f], e, { timeout: y, failFast: this.failFast }, P), {
                abort: function() {
                  T.abort();
                },
                forceMinPriority: function(M) {
                  e = M, T && T.forceMinPriority(M);
                }
              };
            }
            tryStrategy(e, s, d, f) {
              var y = null, T = null;
              return d.timeout > 0 && (y = new oe(d.timeout, function() {
                T.abort(), f(!0);
              })), T = e.connect(s, function(P, M) {
                P && y && y.isRunning() && !d.failFast || (y && y.ensureAborted(), f(P, M));
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
          class Xe {
            constructor(e) {
              this.strategies = e;
            }
            isSupported() {
              return Pt(this.strategies, K.method("isSupported"));
            }
            connect(e, s) {
              return Dr(this.strategies, e, function(d, f) {
                return function(y, T) {
                  if (f[d].error = y, y) {
                    Fr(f) && s(!0);
                    return;
                  }
                  ye(f, function(P) {
                    P.forceMinPriority(T.transport.priority);
                  }), s(null, T);
                };
              });
            }
          }
          function Dr(a, e, s) {
            var d = It(a, function(f, y, T, P) {
              return f.connect(e, s(y, P));
            });
            return {
              abort: function() {
                ye(d, Ur);
              },
              forceMinPriority: function(f) {
                ye(d, function(y) {
                  y.forceMinPriority(f);
                });
              }
            };
          }
          function Fr(a) {
            return Qn(a, function(e) {
              return !!e.error;
            });
          }
          function Ur(a) {
            !a.error && !a.aborted && (a.abort(), a.aborted = !0);
          }
          class jr {
            constructor(e, s, d) {
              this.strategy = e, this.transports = s, this.ttl = d.ttl || 1800 * 1e3, this.usingTLS = d.useTLS, this.timeline = d.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, s) {
              var d = this.usingTLS, f = Hr(d), y = f && f.cacheSkipCount ? f.cacheSkipCount : 0, T = [this.strategy];
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
              var M = K.now(), B = T.pop().connect(e, function D(H, Me) {
                H ? (Ft(d), T.length > 0 ? (M = K.now(), B = T.pop().connect(e, D)) : s(H)) : (zr(d, Me.transport.name, K.now() - M, y), s(null, Me));
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
          function Qe(a) {
            return "pusherTransport" + (a ? "TLS" : "NonTLS");
          }
          function Hr(a) {
            var e = O.getLocalStorage();
            if (e)
              try {
                var s = e[Qe(a)];
                if (s)
                  return JSON.parse(s);
              } catch {
                Ft(a);
              }
            return null;
          }
          function zr(a, e, s, d) {
            var f = O.getLocalStorage();
            if (f)
              try {
                f[Qe(a)] = Ee({
                  timestamp: K.now(),
                  transport: e,
                  latency: s,
                  cacheSkipCount: d
                });
              } catch {
              }
          }
          function Ft(a) {
            var e = O.getLocalStorage();
            if (e)
              try {
                delete e[Qe(a)];
              } catch {
              }
          }
          class Pe {
            constructor(e, { delay: s }) {
              this.strategy = e, this.options = { delay: s };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, s) {
              var d = this.strategy, f, y = new oe(this.options.delay, function() {
                f = d.connect(e, s);
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
          class ve {
            constructor(e, s, d) {
              this.test = e, this.trueBranch = s, this.falseBranch = d;
            }
            isSupported() {
              var e = this.test() ? this.trueBranch : this.falseBranch;
              return e.isSupported();
            }
            connect(e, s) {
              var d = this.test() ? this.trueBranch : this.falseBranch;
              return d.connect(e, s);
            }
          }
          class qr {
            constructor(e) {
              this.strategy = e;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, s) {
              var d = this.strategy.connect(e, function(f, y) {
                y && d.abort(), s(f, y);
              });
              return d;
            }
          }
          function be(a) {
            return function() {
              return a.isSupported();
            };
          }
          var Gr = function(a, e, s) {
            var d = {};
            function f(Jt, Gi, $i, Vi, Ki) {
              var Xt = s(a, Jt, Gi, $i, Vi, Ki);
              return d[Jt] = Xt, Xt;
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
            }, B = new Dt({
              minPingDelay: 1e4,
              maxPingDelay: a.activityTimeout
            }), D = new Dt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: a.activityTimeout
            }), H = f("ws", "ws", 3, y, B), Me = f("wss", "ws", 3, T, B), Ui = f("sockjs", "sockjs", 1, P), qt = f("xhr_streaming", "xhr_streaming", 1, P, D), ji = f("xdr_streaming", "xdr_streaming", 1, P, D), Gt = f("xhr_polling", "xhr_polling", 1, P), Hi = f("xdr_polling", "xdr_polling", 1, P), $t = new ce([H], M), zi = new ce([Me], M), qi = new ce([Ui], M), Vt = new ce([
              new ve(be(qt), qt, ji)
            ], M), Kt = new ce([
              new ve(be(Gt), Gt, Hi)
            ], M), Wt = new ce([
              new ve(be(Vt), new Xe([
                Vt,
                new Pe(Kt, { delay: 4e3 })
              ]), Kt)
            ], M), tt = new ve(be(Wt), Wt, qi), nt;
            return e.useTLS ? nt = new Xe([
              $t,
              new Pe(tt, { delay: 2e3 })
            ]) : nt = new Xe([
              $t,
              new Pe(zi, { delay: 2e3 }),
              new Pe(tt, { delay: 5e3 })
            ]), new jr(new qr(new ve(be(H), nt, tt)), d, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, $r = Gr, Vr = function() {
            var a = this;
            a.timeline.info(a.buildTimelineMessage({
              transport: a.name + (a.options.useTLS ? "s" : "")
            })), a.hooks.isInitialized() ? a.changeState("initialized") : a.hooks.file ? (a.changeState("initializing"), k.load(a.hooks.file, { useTLS: a.options.useTLS }, function(e, s) {
              a.hooks.isInitialized() ? (a.changeState("initialized"), s(!0)) : (e && a.onError(e), a.onClose(), s(!1));
            })) : a.onClose();
          }, Kr = {
            getRequest: function(a) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                a.emit("error", new S()), a.close();
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
          }, Wr = Kr;
          const Jr = 256 * 1024;
          class Xr extends ne {
            constructor(e, s, d) {
              super(), this.hooks = e, this.method = s, this.url = d;
            }
            start(e) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, O.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(e);
            }
            close() {
              this.unloader && (O.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
            }
            onChunk(e, s) {
              for (; ; ) {
                var d = this.advanceBuffer(s);
                if (d)
                  this.emit("chunk", { status: e, data: d });
                else
                  break;
              }
              this.isBufferTooLong(s) && this.emit("buffer_too_long");
            }
            advanceBuffer(e) {
              var s = e.slice(this.position), d = s.indexOf(`
`);
              return d !== -1 ? (this.position += d + 1, s.slice(0, d)) : null;
            }
            isBufferTooLong(e) {
              return this.position === e.length && e.length > Jr;
            }
          }
          var Ye;
          (function(a) {
            a[a.CONNECTING = 0] = "CONNECTING", a[a.OPEN = 1] = "OPEN", a[a.CLOSED = 3] = "CLOSED";
          })(Ye || (Ye = {}));
          var le = Ye, Qr = 1;
          class Yr {
            constructor(e, s) {
              this.hooks = e, this.session = jt(1e3) + "/" + ni(8), this.location = Zr(s), this.readyState = le.CONNECTING, this.openStream();
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
                  return O.createSocketRequest("POST", Ut(ei(this.location, this.session))).start(e), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(e, s, d) {
              this.closeStream(), this.readyState = le.CLOSED, this.onclose && this.onclose({
                code: e,
                reason: s,
                wasClean: d
              });
            }
            onChunk(e) {
              if (e.status === 200) {
                this.readyState === le.OPEN && this.onActivity();
                var s, d = e.data.slice(0, 1);
                switch (d) {
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
              this.readyState === le.CONNECTING ? (e && e.hostname && (this.location.base = ti(this.location.base, e.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
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
              this.stream = O.createSocketRequest("POST", Ut(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (e) => {
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
          function Zr(a) {
            var e = /([^\?]*)\/*(\??.*)/.exec(a);
            return {
              base: e[1],
              queryString: e[2]
            };
          }
          function ei(a, e) {
            return a.base + "/" + e + "/xhr_send";
          }
          function Ut(a) {
            var e = a.indexOf("?") === -1 ? "?" : "&";
            return a + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + Qr++;
          }
          function ti(a, e) {
            var s = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(a);
            return s[1] + e + s[3];
          }
          function jt(a) {
            return O.randomInt(a);
          }
          function ni(a) {
            for (var e = [], s = 0; s < a; s++)
              e.push(jt(32).toString(32));
            return e.join("");
          }
          var ri = Yr, ii = {
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
          }, si = ii, oi = {
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
          }, ai = oi, ci = {
            getRequest: function(a) {
              var e = O.getXHRAPI(), s = new e();
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
          }, li = ci, hi = {
            createStreamingSocket(a) {
              return this.createSocket(si, a);
            },
            createPollingSocket(a) {
              return this.createSocket(ai, a);
            },
            createSocket(a, e) {
              return new ri(a, e);
            },
            createXHR(a, e) {
              return this.createRequest(li, a, e);
            },
            createRequest(a, e, s) {
              return new Xr(a, e, s);
            }
          }, Ht = hi;
          Ht.createXDR = function(a, e) {
            return this.createRequest(Wr, a, e);
          };
          var di = Ht, fi = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: g,
            getDefaultStrategy: $r,
            Transports: kr,
            transportConnectionInitializer: Vr,
            HTTPFactory: di,
            TimelineTransport: cr,
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
              return { ajax: F, jsonp: rr };
            },
            onDocumentBody(a) {
              document.body ? a() : setTimeout(() => {
                this.onDocumentBody(a);
              }, 0);
            },
            createJSONPRequest(a, e) {
              return new sr(a, e);
            },
            createScriptRequest(a) {
              return new ir(a);
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
              return _r;
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
          }, O = fi, Ze;
          (function(a) {
            a[a.ERROR = 3] = "ERROR", a[a.INFO = 6] = "INFO", a[a.DEBUG = 7] = "DEBUG";
          })(Ze || (Ze = {}));
          var Le = Ze;
          class pi {
            constructor(e, s, d) {
              this.key = e, this.session = s, this.events = [], this.options = d || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(e, s) {
              e <= this.options.level && (this.events.push(J({}, s, { timestamp: K.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(e) {
              this.log(Le.ERROR, e);
            }
            info(e) {
              this.log(Le.INFO, e);
            }
            debug(e) {
              this.log(Le.DEBUG, e);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(e, s) {
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
              return this.events = [], e(d, (f, y) => {
                f || this.sent++, s && s(f, y);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class gi {
            constructor(e, s, d, f) {
              this.name = e, this.priority = s, this.transport = d, this.options = f || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(e, s) {
              if (this.isSupported()) {
                if (this.priority < e)
                  return zt(new A(), s);
              } else return zt(new N(), s);
              var d = !1, f = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), y = null, T = function() {
                f.unbind("initialized", T), f.connect();
              }, P = function() {
                y = re.createHandshake(f, function(H) {
                  d = !0, D(), s(null, H);
                });
              }, M = function(H) {
                D(), s(H);
              }, B = function() {
                D();
                var H;
                H = Ee(f), s(new R(H));
              }, D = function() {
                f.unbind("initialized", T), f.unbind("open", P), f.unbind("error", M), f.unbind("closed", B);
              };
              return f.bind("initialized", T), f.bind("open", P), f.bind("error", M), f.bind("closed", B), f.initialize(), {
                abort: () => {
                  d || (D(), y ? y.close() : f.close());
                },
                forceMinPriority: (H) => {
                  d || this.priority < H && (y ? y.close() : f.close());
                }
              };
            }
          }
          function zt(a, e) {
            return K.defer(function() {
              e(a);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: mi } = O;
          var yi = function(a, e, s, d, f, y) {
            var T = mi[s];
            if (!T)
              throw new L(s);
            var P = (!a.enabledTransports || Tt(a.enabledTransports, e) !== -1) && (!a.disabledTransports || Tt(a.disabledTransports, e) === -1), M;
            return P ? (f = Object.assign({ ignoreNullOrigin: a.ignoreNullOrigin }, f), M = new gi(e, d, y ? y.getAssistant(T) : T, f)) : M = vi, M;
          }, vi = {
            isSupported: function() {
              return !1;
            },
            connect: function(a, e) {
              var s = K.defer(function() {
                e(new N());
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
          function bi(a) {
            if (a == null)
              throw "You must pass an options object";
            if (a.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in a && j.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const wi = (a, e) => {
            var s = "socket_id=" + encodeURIComponent(a.socketId);
            for (var d in e.params)
              s += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(e.params[d]);
            if (e.paramsProvider != null) {
              let f = e.paramsProvider();
              for (var d in f)
                s += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(f[d]);
            }
            return s;
          };
          var ki = (a) => {
            if (typeof O.getAuthorizers()[a.transport] > "u")
              throw `'${a.transport}' is not a recognized auth transport`;
            return (e, s) => {
              const d = wi(e, a);
              O.getAuthorizers()[a.transport](O, d, a, C.UserAuthentication, s);
            };
          };
          const Ci = (a, e) => {
            var s = "socket_id=" + encodeURIComponent(a.socketId);
            s += "&channel_name=" + encodeURIComponent(a.channelName);
            for (var d in e.params)
              s += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(e.params[d]);
            if (e.paramsProvider != null) {
              let f = e.paramsProvider();
              for (var d in f)
                s += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(f[d]);
            }
            return s;
          };
          var _i = (a) => {
            if (typeof O.getAuthorizers()[a.transport] > "u")
              throw `'${a.transport}' is not a recognized auth transport`;
            return (e, s) => {
              const d = Ci(e, a);
              O.getAuthorizers()[a.transport](O, d, a, C.ChannelAuthorization, s);
            };
          };
          const Si = (a, e, s) => {
            const d = {
              authTransport: e.transport,
              authEndpoint: e.endpoint,
              auth: {
                params: e.params,
                headers: e.headers
              }
            };
            return (f, y) => {
              const T = a.channel(f.channelName);
              s(T, d).authorize(f.socketId, y);
            };
          };
          function Ti(a, e) {
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
              enableStats: Pi(a),
              httpHost: Ai(a),
              useTLS: Ri(a),
              wsHost: Ii(a),
              userAuthenticator: Li(a),
              channelAuthorizer: Oi(a, e)
            };
            return "disabledTransports" in a && (s.disabledTransports = a.disabledTransports), "enabledTransports" in a && (s.enabledTransports = a.enabledTransports), "ignoreNullOrigin" in a && (s.ignoreNullOrigin = a.ignoreNullOrigin), "timelineParams" in a && (s.timelineParams = a.timelineParams), "nacl" in a && (s.nacl = a.nacl), s;
          }
          function Ai(a) {
            return a.httpHost ? a.httpHost : a.cluster ? `sockjs-${a.cluster}.pusher.com` : u.httpHost;
          }
          function Ii(a) {
            return a.wsHost ? a.wsHost : Ei(a.cluster);
          }
          function Ei(a) {
            return `ws-${a}.pusher.com`;
          }
          function Ri(a) {
            return O.getProtocol() === "https:" ? !0 : a.forceTLS !== !1;
          }
          function Pi(a) {
            return "enableStats" in a ? a.enableStats : "disableStats" in a ? !a.disableStats : !1;
          }
          function Li(a) {
            const e = Object.assign(Object.assign({}, u.userAuthentication), a.userAuthentication);
            return "customHandler" in e && e.customHandler != null ? e.customHandler : ki(e);
          }
          function Mi(a, e) {
            let s;
            return "channelAuthorization" in a ? s = Object.assign(Object.assign({}, u.channelAuthorization), a.channelAuthorization) : (s = {
              transport: a.authTransport || u.authTransport,
              endpoint: a.authEndpoint || u.authEndpoint
            }, "auth" in a && ("params" in a.auth && (s.params = a.auth.params), "headers" in a.auth && (s.headers = a.auth.headers)), "authorizer" in a && (s.customHandler = Si(e, s, a.authorizer))), s;
          }
          function Oi(a, e) {
            const s = Mi(a, e);
            return "customHandler" in s && s.customHandler != null ? s.customHandler : _i(s);
          }
          class Ni extends ne {
            constructor(e) {
              super(function(s, d) {
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
          function xi() {
            let a, e;
            return { promise: new Promise((d, f) => {
              a = d, e = f;
            }), resolve: a, reject: e };
          }
          var Bi = xi;
          class Di extends ne {
            constructor(e) {
              super(function(s, d) {
                j.debug("No callbacks on user for " + s);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (s, d) => {
                if (s) {
                  j.warn(`Error during signin: ${s}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: d.auth,
                  user_data: d.user_data
                });
              }, this.pusher = e, this.pusher.connection.bind("state_change", ({ previous: s, current: d }) => {
                s !== "connected" && d === "connected" && this._signin(), s === "connected" && d !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new Ni(e), this.pusher.connection.bind("message", (s) => {
                var d = s.event;
                d === "pusher:signin_success" && this._onSigninSuccess(s.data), this.serverToUserChannel && this.serverToUserChannel.name === s.channel && this.serverToUserChannel.handleEvent(s);
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
              this.serverToUserChannel = new Ke(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((s, d) => {
                s.indexOf("pusher_internal:") === 0 || s.indexOf("pusher:") === 0 || this.emit(s, d);
              }), e(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: e, resolve: s } = Bi();
              e.done = !1;
              const d = () => {
                e.done = !0;
              };
              e.then(d).catch(d), this.signinDonePromise = e, this._signinDoneResolve = s;
            }
          }
          class G {
            static ready() {
              G.isReady = !0;
              for (var e = 0, s = G.instances.length; e < s; e++)
                G.instances[e].connect();
            }
            static getClientFeatures() {
              return At(Rt({ ws: O.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, s) {
              Fi(e), bi(s), this.key = e, this.config = Ti(s, this), this.channels = re.createChannels(), this.global_emitter = new ne(), this.sessionID = O.randomInt(1e9), this.timeline = new pi(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: G.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: Le.INFO,
                version: u.VERSION
              }), this.config.enableStats && (this.timelineSender = re.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + O.TimelineTransport.name
              }));
              var d = (f) => O.getDefaultStrategy(this.config, f, yi);
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
              }), G.instances.push(this), this.timeline.info({ instances: G.instances.length }), this.user = new Di(this), G.isReady && this.connect();
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
                this.timelineSenderTimer = new $n(6e4, function() {
                  s.send(e);
                });
              }
            }
            disconnect() {
              this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
            }
            bind(e, s, d) {
              return this.global_emitter.bind(e, s, d), this;
            }
            unbind(e, s, d) {
              return this.global_emitter.unbind(e, s, d), this;
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
            send_event(e, s, d) {
              return this.connection.send_event(e, s, d);
            }
            shouldUseTLS() {
              return this.config.useTLS;
            }
            signin() {
              this.user.signin();
            }
          }
          G.instances = [], G.isReady = !1, G.logToConsole = !1, G.Runtime = O, G.ScriptReceivers = O.ScriptReceivers, G.DependenciesReceivers = O.DependenciesReceivers, G.auth_callbacks = O.auth_callbacks;
          var et = i.default = G;
          function Fi(a) {
            if (a == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          O.setup(G);
        }
        /******/
      ])
    );
  });
})(an);
var Qi = an.exports;
const Yi = /* @__PURE__ */ Xi(Qi), I = "cpr-agent", cn = "itdsiqtx8cpskowawl1p", he = "https://agent.surrealdisco.co.uk";
function ln() {
  var t;
  return (((t = game == null ? void 0 : game.settings) == null ? void 0 : t.get(I, "apiUrl")) || he).trim().replace(/\/$/, "") || he;
}
function Zi() {
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
}, es = [6, 12, 25, 50, 100, 200, 400, 800], Qt = {
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
function un(c) {
  var t, r;
  return Qt[(t = c == null ? void 0 : c.system) == null ? void 0 : t.weaponType] || Qt[(r = c == null ? void 0 : c.system) == null ? void 0 : r.variety] || "Pistol";
}
function hn(c, t) {
  const r = es.findIndex((n) => t <= n);
  let i = r !== -1 ? we[c][r] : 99;
  return Array.isArray(we[c]) && typeof we[c][0] == "string" && (i = we[c][Math.min(r !== -1 ? r : 0, we[c].length - 1)]), i;
}
function ke(c) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ke(c);
}
function z(c, t) {
  if (!(c instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ts(c, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(c, i.key, i);
  }
}
function q(c, t, r) {
  return t && ts(c.prototype, t), Object.defineProperty(c, "prototype", {
    writable: !1
  }), c;
}
function _e() {
  return _e = Object.assign || function(c) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (c[i] = r[i]);
    }
    return c;
  }, _e.apply(this, arguments);
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
  }), t && lt(c, t);
}
function xe(c) {
  return xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xe(c);
}
function lt(c, t) {
  return lt = Object.setPrototypeOf || function(i, n) {
    return i.__proto__ = n, i;
  }, lt(c, t);
}
function ns() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rs(c) {
  if (c === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function is(c, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rs(c);
}
function Q(c) {
  var t = ns();
  return function() {
    var i = xe(c), n;
    if (t) {
      var o = xe(this).constructor;
      n = Reflect.construct(i, arguments, o);
    } else
      n = i.apply(this, arguments);
    return is(this, n);
  };
}
var mt = /* @__PURE__ */ function() {
  function c() {
    z(this, c);
  }
  return q(c, [{
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
  }]), c;
}(), dn = /* @__PURE__ */ function() {
  function c(t) {
    z(this, c), this.namespace = t;
  }
  return q(c, [{
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
  }]), c;
}();
function ss(c) {
  try {
    new c();
  } catch (t) {
    if (t.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var yt = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r(i, n, o) {
    var l;
    return z(this, r), l = t.call(this), l.name = n, l.pusher = i, l.options = o, l.eventFormatter = new dn(l.options.namespace), l.subscribe(), l;
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
      return this.subscription.bind_global(function(l, h) {
        if (!l.startsWith("pusher:")) {
          var u = o.options.namespace.replace(/\./g, "\\"), p = l.startsWith(u) ? l.substring(u.length + 1) : "." + l;
          n(p, h);
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
  }]), r;
}(mt), fn = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), o), this;
      }
    )
  }]), r;
}(yt), os = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), o), this;
      }
    )
  }]), r;
}(yt), as = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
  }
  return q(r, [{
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
  }]), r;
}(fn), pn = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r(i, n, o) {
    var l;
    return z(this, r), l = t.call(this), l.events = {}, l.listeners = {}, l.name = n, l.socket = i, l.options = o, l.eventFormatter = new dn(l.options.namespace), l.subscribe(), l;
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
      return this.listeners[n] = this.listeners[n] || [], this.events[n] || (this.events[n] = function(h, u) {
        l.name === h && l.listeners[n] && l.listeners[n].forEach(function(p) {
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
  }]), r;
}(mt), gn = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
  }
  return q(r, [{
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
  }]), r;
}(pn), cs = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
  }
  return q(r, [{
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
  }]), r;
}(gn), Be = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
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
  }]), r;
}(mt), mn = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this;
      }
    )
  }]), r;
}(Be), ls = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
  }
  return q(r, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, o) {
        return this;
      }
    )
  }]), r;
}(Be), us = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    return z(this, r), t.apply(this, arguments);
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
  }]), r;
}(mn), vt = /* @__PURE__ */ function() {
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
    value: function(r) {
      this.options = _e(this._defaultOptions, r);
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
  }]), c;
}(), Yt = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    var i;
    return z(this, r), i = t.apply(this, arguments), i.channels = {}, i;
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
    value: function(n, o, l) {
      return this.channel(n).listen(o, l);
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
      return this.channels["private-encrypted-" + n] || (this.channels["private-encrypted-" + n] = new os(this.pusher, "private-encrypted-" + n, this.options)), this.channels["private-encrypted-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new as(this.pusher, "presence-" + n, this.options)), this.channels["presence-" + n];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(n) {
      var o = this, l = [n, "private-" + n, "private-encrypted-" + n, "presence-" + n];
      l.forEach(function(h, u) {
        o.leaveChannel(h);
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
}(vt), Zt = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    var i;
    return z(this, r), i = t.apply(this, arguments), i.channels = {}, i;
  }
  return q(r, [{
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
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new cs(this.socket, "presence-" + n, this.options)), this.channels["presence-" + n];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(n) {
      var o = this, l = [n, "private-" + n, "presence-" + n];
      l.forEach(function(h) {
        o.leaveChannel(h);
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
}(vt), hs = /* @__PURE__ */ function(c) {
  X(r, c);
  var t = Q(r);
  function r() {
    var i;
    return z(this, r), i = t.apply(this, arguments), i.channels = {}, i;
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
    value: function(n, o, l) {
      return new Be();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return new Be();
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
      return new ls();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return new us();
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
}(vt), ds = /* @__PURE__ */ function() {
  function c(t) {
    z(this, c), this.options = t, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return q(c, [{
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
        this.connector = new Yt(_e(_e({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new Yt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Zt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new hs(this.options);
      else if (typeof this.options.broadcaster == "function" && ss(this.options.broadcaster))
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
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(i, n, o) {
        r.socketId() && o.setRequestHeader("X-Socket-Id", r.socketId());
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
  }]), c;
}();
function fs(c, t = 6) {
  return !c || c.length <= t * 2 + 3 ? c : `${c.substring(0, t)}...${c.substring(c.length - t)}`;
}
function ut(c, t, r = {}) {
  for (let i in c) {
    const n = c[i];
    n !== null && typeof n == "object" && !Array.isArray(n) && !(n instanceof foundry.utils.Color) ? ut(n, `${t}${i}.`, r) : r[`${t}${i}`] = n;
  }
  return r;
}
async function ps(c, t, r, i = null) {
  return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${t}`, "color: #00ffff; font-weight: bold;"), c._isCapturingRoll = !0, game.settings.get("core", "rollMode"), i && await game.settings.set("core", "rollMode", i), new Promise(async (n, o) => {
    let l = !1;
    const h = renderTemplate, u = function(p, g) {
      return p && typeof p == "string" && p.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${p}`, "color: #00ff00;", g), l = !0, renderTemplate = h, n({
        success: !0,
        total: g.resultTotal,
        isCriticalSuccess: g.wasCritSuccess ? g.wasCritSuccess() : g.isCriticalSuccess || !1,
        isCriticalFailure: g.wasCritFail ? g.wasCritFail() : g.isCriticalFailure || !1,
        label: g.rollTitle,
        rollMode: i || game.settings.get("core", "rollMode"),
        rawRoll: g
      })), h.apply(this, arguments);
    };
    renderTemplate = u, setTimeout(async () => {
      l || (renderTemplate = h, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), n({ success: !1, error: "Timed out waiting for render" }));
    }, 5e3);
    try {
      await r();
    } catch {
      renderTemplate = h, n({ success: !1, error: "Trigger failed" });
    }
  });
}
var Te = {}, gs = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, yn = {}, Y = {};
let bt;
const ms = [
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
  return ms[t];
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
  bt = t;
};
Y.isKanjiModeEnabled = function() {
  return typeof bt < "u";
};
Y.toSJIS = function(t) {
  return bt(t);
};
var je = {};
(function(c) {
  c.L = { bit: 1 }, c.M = { bit: 0 }, c.Q = { bit: 3 }, c.H = { bit: 2 };
  function t(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
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
        throw new Error("Unknown EC Level: " + r);
    }
  }
  c.isValid = function(i) {
    return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
  }, c.from = function(i, n) {
    if (c.isValid(i))
      return i;
    try {
      return t(i);
    } catch {
      return n;
    }
  };
})(je);
function vn() {
  this.buffer = [], this.length = 0;
}
vn.prototype = {
  get: function(c) {
    const t = Math.floor(c / 8);
    return (this.buffer[t] >>> 7 - c % 8 & 1) === 1;
  },
  put: function(c, t) {
    for (let r = 0; r < t; r++)
      this.putBit((c >>> t - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(c) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), c && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var ys = vn;
function Ae(c) {
  if (!c || c < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = c, this.data = new Uint8Array(c * c), this.reservedBit = new Uint8Array(c * c);
}
Ae.prototype.set = function(c, t, r, i) {
  const n = c * this.size + t;
  this.data[n] = r, i && (this.reservedBit[n] = !0);
};
Ae.prototype.get = function(c, t) {
  return this.data[c * this.size + t];
};
Ae.prototype.xor = function(c, t, r) {
  this.data[c * this.size + t] ^= r;
};
Ae.prototype.isReserved = function(c, t) {
  return this.reservedBit[c * this.size + t];
};
var vs = Ae, bn = {};
(function(c) {
  const t = Y.getSymbolSize;
  c.getRowColCoords = function(i) {
    if (i === 1) return [];
    const n = Math.floor(i / 7) + 2, o = t(i), l = o === 145 ? 26 : Math.ceil((o - 13) / (2 * n - 2)) * 2, h = [o - 7];
    for (let u = 1; u < n - 1; u++)
      h[u] = h[u - 1] - l;
    return h.push(6), h.reverse();
  }, c.getPositions = function(i) {
    const n = [], o = c.getRowColCoords(i), l = o.length;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        h === 0 && u === 0 || // top-left
        h === 0 && u === l - 1 || // bottom-left
        h === l - 1 && u === 0 || n.push([o[h], o[u]]);
    return n;
  };
})(bn);
var wn = {};
const bs = Y.getSymbolSize, en = 7;
wn.getPositions = function(t) {
  const r = bs(t);
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
    let l = 0, h = 0, u = 0, p = null, g = null;
    for (let k = 0; k < o; k++) {
      h = u = 0, p = g = null;
      for (let b = 0; b < o; b++) {
        let m = n.get(k, b);
        m === p ? h++ : (h >= 5 && (l += t.N1 + (h - 5)), p = m, h = 1), m = n.get(b, k), m === g ? u++ : (u >= 5 && (l += t.N1 + (u - 5)), g = m, u = 1);
      }
      h >= 5 && (l += t.N1 + (h - 5)), u >= 5 && (l += t.N1 + (u - 5));
    }
    return l;
  }, c.getPenaltyN2 = function(n) {
    const o = n.size;
    let l = 0;
    for (let h = 0; h < o - 1; h++)
      for (let u = 0; u < o - 1; u++) {
        const p = n.get(h, u) + n.get(h, u + 1) + n.get(h + 1, u) + n.get(h + 1, u + 1);
        (p === 4 || p === 0) && l++;
      }
    return l * t.N2;
  }, c.getPenaltyN3 = function(n) {
    const o = n.size;
    let l = 0, h = 0, u = 0;
    for (let p = 0; p < o; p++) {
      h = u = 0;
      for (let g = 0; g < o; g++)
        h = h << 1 & 2047 | n.get(p, g), g >= 10 && (h === 1488 || h === 93) && l++, u = u << 1 & 2047 | n.get(g, p), g >= 10 && (u === 1488 || u === 93) && l++;
    }
    return l * t.N3;
  }, c.getPenaltyN4 = function(n) {
    let o = 0;
    const l = n.data.length;
    for (let u = 0; u < l; u++) o += n.data[u];
    return Math.abs(Math.ceil(o * 100 / l / 5) - 10) * t.N4;
  };
  function r(i, n, o) {
    switch (i) {
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
        throw new Error("bad maskPattern:" + i);
    }
  }
  c.applyMask = function(n, o) {
    const l = o.size;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        o.isReserved(u, h) || o.xor(u, h, r(n, u, h));
  }, c.getBestMask = function(n, o) {
    const l = Object.keys(c.Patterns).length;
    let h = 0, u = 1 / 0;
    for (let p = 0; p < l; p++) {
      o(p), c.applyMask(p, n);
      const g = c.getPenaltyN1(n) + c.getPenaltyN2(n) + c.getPenaltyN3(n) + c.getPenaltyN4(n);
      c.applyMask(p, n), g < u && (u = g, h = p);
    }
    return h;
  };
})(kn);
var He = {};
const ie = je, Oe = [
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
He.getBlocksCount = function(t, r) {
  switch (r) {
    case ie.L:
      return Oe[(t - 1) * 4 + 0];
    case ie.M:
      return Oe[(t - 1) * 4 + 1];
    case ie.Q:
      return Oe[(t - 1) * 4 + 2];
    case ie.H:
      return Oe[(t - 1) * 4 + 3];
    default:
      return;
  }
};
He.getTotalCodewordsCount = function(t, r) {
  switch (r) {
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
var Cn = {}, ze = {};
const Ce = new Uint8Array(512), De = new Uint8Array(256);
(function() {
  let t = 1;
  for (let r = 0; r < 255; r++)
    Ce[r] = t, De[t] = r, t <<= 1, t & 256 && (t ^= 285);
  for (let r = 255; r < 512; r++)
    Ce[r] = Ce[r - 255];
})();
ze.log = function(t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return De[t];
};
ze.exp = function(t) {
  return Ce[t];
};
ze.mul = function(t, r) {
  return t === 0 || r === 0 ? 0 : Ce[De[t] + De[r]];
};
(function(c) {
  const t = ze;
  c.mul = function(i, n) {
    const o = new Uint8Array(i.length + n.length - 1);
    for (let l = 0; l < i.length; l++)
      for (let h = 0; h < n.length; h++)
        o[l + h] ^= t.mul(i[l], n[h]);
    return o;
  }, c.mod = function(i, n) {
    let o = new Uint8Array(i);
    for (; o.length - n.length >= 0; ) {
      const l = o[0];
      for (let u = 0; u < n.length; u++)
        o[u] ^= t.mul(n[u], l);
      let h = 0;
      for (; h < o.length && o[h] === 0; ) h++;
      o = o.slice(h);
    }
    return o;
  }, c.generateECPolynomial = function(i) {
    let n = new Uint8Array([1]);
    for (let o = 0; o < i; o++)
      n = c.mul(n, new Uint8Array([1, t.exp(o)]));
    return n;
  };
})(Cn);
const _n = Cn;
function wt(c) {
  this.genPoly = void 0, this.degree = c, this.degree && this.initialize(this.degree);
}
wt.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = _n.generateECPolynomial(this.degree);
};
wt.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(t.length + this.degree);
  r.set(t);
  const i = _n.mod(r, this.genPoly), n = this.degree - i.length;
  if (n > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(i, n), o;
  }
  return i;
};
var ws = wt, Sn = {}, se = {}, kt = {};
kt.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var ee = {};
const Tn = "[0-9]+", ks = "[A-Z $%*+\\-./:]+";
let Se = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Se = Se.replace(/u/g, "\\u");
const Cs = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Se + `)(?:.|[\r
]))+`;
ee.KANJI = new RegExp(Se, "g");
ee.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
ee.BYTE = new RegExp(Cs, "g");
ee.NUMERIC = new RegExp(Tn, "g");
ee.ALPHANUMERIC = new RegExp(ks, "g");
const _s = new RegExp("^" + Se + "$"), Ss = new RegExp("^" + Tn + "$"), Ts = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
ee.testKanji = function(t) {
  return _s.test(t);
};
ee.testNumeric = function(t) {
  return Ss.test(t);
};
ee.testAlphanumeric = function(t) {
  return Ts.test(t);
};
(function(c) {
  const t = kt, r = ee;
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
    return r.testNumeric(o) ? c.NUMERIC : r.testAlphanumeric(o) ? c.ALPHANUMERIC : r.testKanji(o) ? c.KANJI : c.BYTE;
  }, c.toString = function(o) {
    if (o && o.id) return o.id;
    throw new Error("Invalid mode");
  }, c.isValid = function(o) {
    return o && o.bit && o.ccBits;
  };
  function i(n) {
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
      return i(o);
    } catch {
      return l;
    }
  };
})(se);
(function(c) {
  const t = Y, r = He, i = je, n = se, o = kt, l = 7973, h = t.getBCHDigit(l);
  function u(b, m, _) {
    for (let C = 1; C <= 40; C++)
      if (m <= c.getCapacity(C, _, b))
        return C;
  }
  function p(b, m) {
    return n.getCharCountIndicator(b, m) + 4;
  }
  function g(b, m) {
    let _ = 0;
    return b.forEach(function(C) {
      const w = p(C.mode, m);
      _ += w + C.getBitsLength();
    }), _;
  }
  function k(b, m) {
    for (let _ = 1; _ <= 40; _++)
      if (g(b, _) <= c.getCapacity(_, m, n.MIXED))
        return _;
  }
  c.from = function(m, _) {
    return o.isValid(m) ? parseInt(m, 10) : _;
  }, c.getCapacity = function(m, _, C) {
    if (!o.isValid(m))
      throw new Error("Invalid QR Code version");
    typeof C > "u" && (C = n.BYTE);
    const w = t.getSymbolTotalCodewords(m), v = r.getTotalCodewordsCount(m, _), S = (w - v) * 8;
    if (C === n.MIXED) return S;
    const A = S - p(C, m);
    switch (C) {
      case n.NUMERIC:
        return Math.floor(A / 10 * 3);
      case n.ALPHANUMERIC:
        return Math.floor(A / 11 * 2);
      case n.KANJI:
        return Math.floor(A / 13);
      case n.BYTE:
      default:
        return Math.floor(A / 8);
    }
  }, c.getBestVersionForData = function(m, _) {
    let C;
    const w = i.from(_, i.M);
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
    let _ = m << 12;
    for (; t.getBCHDigit(_) - h >= 0; )
      _ ^= l << t.getBCHDigit(_) - h;
    return m << 12 | _;
  };
})(Sn);
var An = {};
const ht = Y, In = 1335, As = 21522, tn = ht.getBCHDigit(In);
An.getEncodedBits = function(t, r) {
  const i = t.bit << 3 | r;
  let n = i << 10;
  for (; ht.getBCHDigit(n) - tn >= 0; )
    n ^= In << ht.getBCHDigit(n) - tn;
  return (i << 10 | n) ^ As;
};
var En = {};
const Is = se;
function de(c) {
  this.mode = Is.NUMERIC, this.data = c.toString();
}
de.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
de.prototype.getLength = function() {
  return this.data.length;
};
de.prototype.getBitsLength = function() {
  return de.getBitsLength(this.data.length);
};
de.prototype.write = function(t) {
  let r, i, n;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    i = this.data.substr(r, 3), n = parseInt(i, 10), t.put(n, 10);
  const o = this.data.length - r;
  o > 0 && (i = this.data.substr(r), n = parseInt(i, 10), t.put(n, o * 3 + 1));
};
var Es = de;
const Rs = se, it = [
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
function fe(c) {
  this.mode = Rs.ALPHANUMERIC, this.data = c;
}
fe.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
fe.prototype.getLength = function() {
  return this.data.length;
};
fe.prototype.getBitsLength = function() {
  return fe.getBitsLength(this.data.length);
};
fe.prototype.write = function(t) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let i = it.indexOf(this.data[r]) * 45;
    i += it.indexOf(this.data[r + 1]), t.put(i, 11);
  }
  this.data.length % 2 && t.put(it.indexOf(this.data[r]), 6);
};
var Ps = fe;
const Ls = se;
function pe(c) {
  this.mode = Ls.BYTE, typeof c == "string" ? this.data = new TextEncoder().encode(c) : this.data = new Uint8Array(c);
}
pe.getBitsLength = function(t) {
  return t * 8;
};
pe.prototype.getLength = function() {
  return this.data.length;
};
pe.prototype.getBitsLength = function() {
  return pe.getBitsLength(this.data.length);
};
pe.prototype.write = function(c) {
  for (let t = 0, r = this.data.length; t < r; t++)
    c.put(this.data[t], 8);
};
var Ms = pe;
const Os = se, Ns = Y;
function ge(c) {
  this.mode = Os.KANJI, this.data = c;
}
ge.getBitsLength = function(t) {
  return t * 13;
};
ge.prototype.getLength = function() {
  return this.data.length;
};
ge.prototype.getBitsLength = function() {
  return ge.getBitsLength(this.data.length);
};
ge.prototype.write = function(c) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let r = Ns.toSJIS(this.data[t]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), c.put(r, 13);
  }
};
var xs = ge, Rn = { exports: {} };
(function(c) {
  var t = {
    single_source_shortest_paths: function(r, i, n) {
      var o = {}, l = {};
      l[i] = 0;
      var h = t.PriorityQueue.make();
      h.push(i, 0);
      for (var u, p, g, k, b, m, _, C, w; !h.empty(); ) {
        u = h.pop(), p = u.value, k = u.cost, b = r[p] || {};
        for (g in b)
          b.hasOwnProperty(g) && (m = b[g], _ = k + m, C = l[g], w = typeof l[g] > "u", (w || C > _) && (l[g] = _, h.push(g, _), o[g] = p));
      }
      if (typeof n < "u" && typeof l[n] > "u") {
        var v = ["Could not find a path from ", i, " to ", n, "."].join("");
        throw new Error(v);
      }
      return o;
    },
    extract_shortest_path_from_predecessor_list: function(r, i) {
      for (var n = [], o = i; o; )
        n.push(o), r[o], o = r[o];
      return n.reverse(), n;
    },
    find_path: function(r, i, n) {
      var o = t.single_source_shortest_paths(r, i, n);
      return t.extract_shortest_path_from_predecessor_list(
        o,
        n
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(r) {
        var i = t.PriorityQueue, n = {}, o;
        r = r || {};
        for (o in i)
          i.hasOwnProperty(o) && (n[o] = i[o]);
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
  c.exports = t;
})(Rn);
var Bs = Rn.exports;
(function(c) {
  const t = se, r = Es, i = Ps, n = Ms, o = xs, l = ee, h = Y, u = Bs;
  function p(v) {
    return unescape(encodeURIComponent(v)).length;
  }
  function g(v, S, A) {
    const R = [];
    let E;
    for (; (E = v.exec(A)) !== null; )
      R.push({
        data: E[0],
        index: E.index,
        mode: S,
        length: E[0].length
      });
    return R;
  }
  function k(v) {
    const S = g(l.NUMERIC, t.NUMERIC, v), A = g(l.ALPHANUMERIC, t.ALPHANUMERIC, v);
    let R, E;
    return h.isKanjiModeEnabled() ? (R = g(l.BYTE, t.BYTE, v), E = g(l.KANJI, t.KANJI, v)) : (R = g(l.BYTE_KANJI, t.BYTE, v), E = []), S.concat(A, R, E).sort(function(N, x) {
      return N.index - x.index;
    }).map(function(N) {
      return {
        data: N.data,
        mode: N.mode,
        length: N.length
      };
    });
  }
  function b(v, S) {
    switch (S) {
      case t.NUMERIC:
        return r.getBitsLength(v);
      case t.ALPHANUMERIC:
        return i.getBitsLength(v);
      case t.KANJI:
        return o.getBitsLength(v);
      case t.BYTE:
        return n.getBitsLength(v);
    }
  }
  function m(v) {
    return v.reduce(function(S, A) {
      const R = S.length - 1 >= 0 ? S[S.length - 1] : null;
      return R && R.mode === A.mode ? (S[S.length - 1].data += A.data, S) : (S.push(A), S);
    }, []);
  }
  function _(v) {
    const S = [];
    for (let A = 0; A < v.length; A++) {
      const R = v[A];
      switch (R.mode) {
        case t.NUMERIC:
          S.push([
            R,
            { data: R.data, mode: t.ALPHANUMERIC, length: R.length },
            { data: R.data, mode: t.BYTE, length: R.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          S.push([
            R,
            { data: R.data, mode: t.BYTE, length: R.length }
          ]);
          break;
        case t.KANJI:
          S.push([
            R,
            { data: R.data, mode: t.BYTE, length: p(R.data) }
          ]);
          break;
        case t.BYTE:
          S.push([
            { data: R.data, mode: t.BYTE, length: p(R.data) }
          ]);
      }
    }
    return S;
  }
  function C(v, S) {
    const A = {}, R = { start: {} };
    let E = ["start"];
    for (let L = 0; L < v.length; L++) {
      const N = v[L], x = [];
      for (let U = 0; U < N.length; U++) {
        const F = N[U], Z = "" + L + U;
        x.push(Z), A[Z] = { node: F, lastCount: 0 }, R[Z] = {};
        for (let W = 0; W < E.length; W++) {
          const V = E[W];
          A[V] && A[V].node.mode === F.mode ? (R[V][Z] = b(A[V].lastCount + F.length, F.mode) - b(A[V].lastCount, F.mode), A[V].lastCount += F.length) : (A[V] && (A[V].lastCount = F.length), R[V][Z] = b(F.length, F.mode) + 4 + t.getCharCountIndicator(F.mode, S));
        }
      }
      E = x;
    }
    for (let L = 0; L < E.length; L++)
      R[E[L]].end = 0;
    return { map: R, table: A };
  }
  function w(v, S) {
    let A;
    const R = t.getBestModeForData(v);
    if (A = t.from(S, R), A !== t.BYTE && A.bit < R.bit)
      throw new Error('"' + v + '" cannot be encoded with mode ' + t.toString(A) + `.
 Suggested mode is: ` + t.toString(R));
    switch (A === t.KANJI && !h.isKanjiModeEnabled() && (A = t.BYTE), A) {
      case t.NUMERIC:
        return new r(v);
      case t.ALPHANUMERIC:
        return new i(v);
      case t.KANJI:
        return new o(v);
      case t.BYTE:
        return new n(v);
    }
  }
  c.fromArray = function(S) {
    return S.reduce(function(A, R) {
      return typeof R == "string" ? A.push(w(R, null)) : R.data && A.push(w(R.data, R.mode)), A;
    }, []);
  }, c.fromString = function(S, A) {
    const R = k(S, h.isKanjiModeEnabled()), E = _(R), L = C(E, A), N = u.find_path(L.map, "start", "end"), x = [];
    for (let U = 1; U < N.length - 1; U++)
      x.push(L.table[N[U]].node);
    return c.fromArray(m(x));
  }, c.rawSplit = function(S) {
    return c.fromArray(
      k(S, h.isKanjiModeEnabled())
    );
  };
})(En);
const qe = Y, st = je, Ds = ys, Fs = vs, Us = bn, js = wn, dt = kn, ft = He, Hs = ws, Fe = Sn, zs = An, qs = se, ot = En;
function Gs(c, t) {
  const r = c.size, i = js.getPositions(t);
  for (let n = 0; n < i.length; n++) {
    const o = i[n][0], l = i[n][1];
    for (let h = -1; h <= 7; h++)
      if (!(o + h <= -1 || r <= o + h))
        for (let u = -1; u <= 7; u++)
          l + u <= -1 || r <= l + u || (h >= 0 && h <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && u >= 2 && u <= 4 ? c.set(o + h, l + u, !0, !0) : c.set(o + h, l + u, !1, !0));
  }
}
function $s(c) {
  const t = c.size;
  for (let r = 8; r < t - 8; r++) {
    const i = r % 2 === 0;
    c.set(r, 6, i, !0), c.set(6, r, i, !0);
  }
}
function Vs(c, t) {
  const r = Us.getPositions(t);
  for (let i = 0; i < r.length; i++) {
    const n = r[i][0], o = r[i][1];
    for (let l = -2; l <= 2; l++)
      for (let h = -2; h <= 2; h++)
        l === -2 || l === 2 || h === -2 || h === 2 || l === 0 && h === 0 ? c.set(n + l, o + h, !0, !0) : c.set(n + l, o + h, !1, !0);
  }
}
function Ks(c, t) {
  const r = c.size, i = Fe.getEncodedBits(t);
  let n, o, l;
  for (let h = 0; h < 18; h++)
    n = Math.floor(h / 3), o = h % 3 + r - 8 - 3, l = (i >> h & 1) === 1, c.set(n, o, l, !0), c.set(o, n, l, !0);
}
function at(c, t, r) {
  const i = c.size, n = zs.getEncodedBits(t, r);
  let o, l;
  for (o = 0; o < 15; o++)
    l = (n >> o & 1) === 1, o < 6 ? c.set(o, 8, l, !0) : o < 8 ? c.set(o + 1, 8, l, !0) : c.set(i - 15 + o, 8, l, !0), o < 8 ? c.set(8, i - o - 1, l, !0) : o < 9 ? c.set(8, 15 - o - 1 + 1, l, !0) : c.set(8, 15 - o - 1, l, !0);
  c.set(i - 8, 8, 1, !0);
}
function Ws(c, t) {
  const r = c.size;
  let i = -1, n = r - 1, o = 7, l = 0;
  for (let h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!c.isReserved(n, h - u)) {
          let p = !1;
          l < t.length && (p = (t[l] >>> o & 1) === 1), c.set(n, h - u, p), o--, o === -1 && (l++, o = 7);
        }
      if (n += i, n < 0 || r <= n) {
        n -= i, i = -i;
        break;
      }
    }
}
function Js(c, t, r) {
  const i = new Ds();
  r.forEach(function(u) {
    i.put(u.mode.bit, 4), i.put(u.getLength(), qs.getCharCountIndicator(u.mode, c)), u.write(i);
  });
  const n = qe.getSymbolTotalCodewords(c), o = ft.getTotalCodewordsCount(c, t), l = (n - o) * 8;
  for (i.getLengthInBits() + 4 <= l && i.put(0, 4); i.getLengthInBits() % 8 !== 0; )
    i.putBit(0);
  const h = (l - i.getLengthInBits()) / 8;
  for (let u = 0; u < h; u++)
    i.put(u % 2 ? 17 : 236, 8);
  return Xs(i, c, t);
}
function Xs(c, t, r) {
  const i = qe.getSymbolTotalCodewords(t), n = ft.getTotalCodewordsCount(t, r), o = i - n, l = ft.getBlocksCount(t, r), h = i % l, u = l - h, p = Math.floor(i / l), g = Math.floor(o / l), k = g + 1, b = p - g, m = new Hs(b);
  let _ = 0;
  const C = new Array(l), w = new Array(l);
  let v = 0;
  const S = new Uint8Array(c.buffer);
  for (let N = 0; N < l; N++) {
    const x = N < u ? g : k;
    C[N] = S.slice(_, _ + x), w[N] = m.encode(C[N]), _ += x, v = Math.max(v, x);
  }
  const A = new Uint8Array(i);
  let R = 0, E, L;
  for (E = 0; E < v; E++)
    for (L = 0; L < l; L++)
      E < C[L].length && (A[R++] = C[L][E]);
  for (E = 0; E < b; E++)
    for (L = 0; L < l; L++)
      A[R++] = w[L][E];
  return A;
}
function Qs(c, t, r, i) {
  let n;
  if (Array.isArray(c))
    n = ot.fromArray(c);
  else if (typeof c == "string") {
    let p = t;
    if (!p) {
      const g = ot.rawSplit(c);
      p = Fe.getBestVersionForData(g, r);
    }
    n = ot.fromString(c, p || 40);
  } else
    throw new Error("Invalid data");
  const o = Fe.getBestVersionForData(n, r);
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
  const l = Js(t, r, n), h = qe.getSymbolSize(t), u = new Fs(h);
  return Gs(u, t), $s(u), Vs(u, t), at(u, r, 0), t >= 7 && Ks(u, t), Ws(u, l), isNaN(i) && (i = dt.getBestMask(
    u,
    at.bind(null, u, r)
  )), dt.applyMask(i, u), at(u, r, i), {
    modules: u,
    version: t,
    errorCorrectionLevel: r,
    maskPattern: i,
    segments: n
  };
}
yn.create = function(t, r) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let i = st.M, n, o;
  return typeof r < "u" && (i = st.from(r.errorCorrectionLevel, st.M), n = Fe.from(r.version), o = dt.from(r.maskPattern), r.toSJISFunc && qe.setToSJISFunction(r.toSJISFunc)), Qs(t, n, i, o);
};
var Pn = {}, Ct = {};
(function(c) {
  function t(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    let i = r.slice().replace("#", "").split("");
    if (i.length < 3 || i.length === 5 || i.length > 8)
      throw new Error("Invalid hex color: " + r);
    (i.length === 3 || i.length === 4) && (i = Array.prototype.concat.apply([], i.map(function(o) {
      return [o, o];
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
  c.getOptions = function(i) {
    i || (i = {}), i.color || (i.color = {});
    const n = typeof i.margin > "u" || i.margin === null || i.margin < 0 ? 4 : i.margin, o = i.width && i.width >= 21 ? i.width : void 0, l = i.scale || 4;
    return {
      width: o,
      scale: o ? 4 : l,
      margin: n,
      color: {
        dark: t(i.color.dark || "#000000ff"),
        light: t(i.color.light || "#ffffffff")
      },
      type: i.type,
      rendererOpts: i.rendererOpts || {}
    };
  }, c.getScale = function(i, n) {
    return n.width && n.width >= i + n.margin * 2 ? n.width / (i + n.margin * 2) : n.scale;
  }, c.getImageWidth = function(i, n) {
    const o = c.getScale(i, n);
    return Math.floor((i + n.margin * 2) * o);
  }, c.qrToImageData = function(i, n, o) {
    const l = n.modules.size, h = n.modules.data, u = c.getScale(l, o), p = Math.floor((l + o.margin * 2) * u), g = o.margin * u, k = [o.color.light, o.color.dark];
    for (let b = 0; b < p; b++)
      for (let m = 0; m < p; m++) {
        let _ = (b * p + m) * 4, C = o.color.light;
        if (b >= g && m >= g && b < p - g && m < p - g) {
          const w = Math.floor((b - g) / u), v = Math.floor((m - g) / u);
          C = k[h[w * l + v] ? 1 : 0];
        }
        i[_++] = C.r, i[_++] = C.g, i[_++] = C.b, i[_] = C.a;
      }
  };
})(Ct);
(function(c) {
  const t = Ct;
  function r(n, o, l) {
    n.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = l, o.width = l, o.style.height = l + "px", o.style.width = l + "px";
  }
  function i() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  c.render = function(o, l, h) {
    let u = h, p = l;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (p = i()), u = t.getOptions(u);
    const g = t.getImageWidth(o.modules.size, u), k = p.getContext("2d"), b = k.createImageData(g, g);
    return t.qrToImageData(b.data, o, u), r(k, p, g), k.putImageData(b, 0, 0), p;
  }, c.renderToDataURL = function(o, l, h) {
    let u = h;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
    const p = c.render(o, l, u), g = u.type || "image/png", k = u.rendererOpts || {};
    return p.toDataURL(g, k.quality);
  };
})(Pn);
var Ln = {};
const Ys = Ct;
function nn(c, t) {
  const r = c.a / 255, i = t + '="' + c.hex + '"';
  return r < 1 ? i + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : i;
}
function ct(c, t, r) {
  let i = c + t;
  return typeof r < "u" && (i += " " + r), i;
}
function Zs(c, t, r) {
  let i = "", n = 0, o = !1, l = 0;
  for (let h = 0; h < c.length; h++) {
    const u = Math.floor(h % t), p = Math.floor(h / t);
    !u && !o && (o = !0), c[h] ? (l++, h > 0 && u > 0 && c[h - 1] || (i += o ? ct("M", u + r, 0.5 + p + r) : ct("m", n, 0), n = 0, o = !1), u + 1 < t && c[h + 1] || (i += ct("h", l), l = 0)) : n++;
  }
  return i;
}
Ln.render = function(t, r, i) {
  const n = Ys.getOptions(r), o = t.modules.size, l = t.modules.data, h = o + n.margin * 2, u = n.color.light.a ? "<path " + nn(n.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "", p = "<path " + nn(n.color.dark, "stroke") + ' d="' + Zs(l, o, n.margin) + '"/>', g = 'viewBox="0 0 ' + h + " " + h + '"', b = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + g + ' shape-rendering="crispEdges">' + u + p + `</svg>
`;
  return typeof i == "function" && i(null, b), b;
};
const eo = gs, pt = yn, Mn = Pn, to = Ln;
function _t(c, t, r, i, n) {
  const o = [].slice.call(arguments, 1), l = o.length, h = typeof o[l - 1] == "function";
  if (!h && !eo())
    throw new Error("Callback required as last argument");
  if (h) {
    if (l < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (n = r, r = t, t = i = void 0) : l === 3 && (t.getContext && typeof n > "u" ? (n = i, i = void 0) : (n = i, i = r, r = t, t = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return l === 1 ? (r = t, t = i = void 0) : l === 2 && !t.getContext && (i = r, r = t, t = void 0), new Promise(function(u, p) {
      try {
        const g = pt.create(r, i);
        u(c(g, t, i));
      } catch (g) {
        p(g);
      }
    });
  }
  try {
    const u = pt.create(r, i);
    n(null, c(u, t, i));
  } catch (u) {
    n(u);
  }
}
Te.create = pt.create;
Te.toCanvas = _t.bind(null, Mn.render);
Te.toDataURL = _t.bind(null, Mn.renderToDataURL);
Te.toString = _t.bind(null, function(c, t, r) {
  return to.render(c, r);
});
const gt = 300, no = 1;
function On() {
  return (game.settings.get(I, "apiUrl") || "").replace(/\/$/, "");
}
function ro({ nonce: c, channelId: t, foundryUserName: r }) {
  return JSON.stringify({
    v: no,
    agentUrl: On(),
    channelId: t || null,
    nonce: c,
    foundryUserName: r || null
  });
}
async function Nn(c, t, r) {
  const i = On(), n = game.settings.get(I, "apiKey"), o = game.settings.get(I, "channelId");
  if (!i) throw new Error("Set the Agent URL in module settings first.");
  if (!n) throw new Error("Set your Agent API key in module settings first.");
  if (!o) throw new Error("Set the Channel ID (session code) in module settings first.");
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
        channel_id: o,
        foundry_user_id: t,
        foundry_user_name: r,
        expires_in: gt
      })
    });
  } catch {
    throw new Error("Could not reach the Agent server. Check the Agent URL and your connection.");
  }
  if (!h.ok)
    throw h.status === 403 ? new Error("Only a GM with a linked Agent account can generate pairings.") : h.status === 404 ? new Error("No Agent session matches this Channel ID. Create/sync the session in the Agent first.") : new Error(`Agent server rejected the pairing (HTTP ${h.status}).`);
  return c.pendingPairings.set(l, { foundryUserId: t, ts: Date.now() }), setTimeout(() => c.pendingPairings.delete(l), gt * 1e3), { nonce: l, payload: ro({ nonce: l, channelId: o, foundryUserName: r }) };
}
async function xn(c, t, r) {
  let i;
  try {
    ({ payload: i } = await Nn(c, t, r));
  } catch (n) {
    ui.notifications.error(`Agent pairing: ${n.message}`);
    return;
  }
  await Bn(i, r);
}
async function Bn(c, t) {
  let r;
  try {
    r = await Te.toDataURL(c, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const i = Math.round(gt / 60), n = t || "this player", o = btoa(c);
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
                          onclick="this.select()">${o}</textarea>
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
          await navigator.clipboard.writeText(o), ui.notifications.info("Link code copied to clipboard.");
        } catch {
          l.find("#cpr-link-code").trigger("select"), ui.notifications.warn("Copy failed — select the code and copy it manually.");
        }
      });
    }
  }, { width: 380 }).render(!0);
}
class so extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-assignment-menu",
      title: "Agent Character Assignment",
      width: 500,
      classes: ["form"]
    });
  }
  async _renderInner(t) {
    let r = `
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
    for (let i of t.users) {
      const n = fs(i.agentLink);
      if (r += `<tr><td style="padding: 5px 0;"><strong>${i.name}</strong></td>`, i.hasKey) {
        r += '<td style="color: #00ff00;">✔ Linked</td>', r += `<td><small><code title="${i.agentLink || ""}">${n || "Pending..."}</code></small></td>`, r += `<td><select class="character-select" data-userid="${i.id}" style="width: 100%;">
                <option value="">- None -</option>`;
        for (let o of t.characters) {
          const l = o.id === i.characterId ? "selected" : "";
          r += `<option value="${o.id}" ${l}>${o.name}</option>`;
        }
        r += "</select></td>", r += `<td><button type="button" class="show-qr" data-userid="${i.id}" data-username="${i.name}" title="Show pairing QR"><i class="fas fa-qrcode"></i></button> <button type="button" class="refresh-user" data-userid="${i.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
      } else
        r += `<td style="color: #ff0000;">❌ Missing</td>
                <td><small>-</small></td>
                <td><select disabled style="width: 100%;"><option>- Key Missing -</option></select></td>
                <td><button type="button" class="show-qr" data-userid="${i.id}" data-username="${i.name}" title="Show pairing QR"><i class="fas fa-qrcode"></i></button> <button type="button" class="refresh-user" data-userid="${i.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
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
    const t = game.users.map((i) => {
      var n;
      return {
        id: i.id,
        name: i.name,
        isGM: i.isGM,
        hasKey: !!i.getFlag(I, "hasApiKey"),
        agentLink: i.getFlag(I, "agent-link"),
        characterId: ((n = i.character) == null ? void 0 : n.id) || ""
      };
    }), r = game.actors.filter((i) => i.type === "character").map((i) => ({
      id: i.id,
      name: i.name
    }));
    return { users: t, characters: r };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(t) {
    super.activateListeners(t), t.find("#save-agent-assignments").click(async (r) => {
      r.preventDefault();
      let i = 0;
      const n = [];
      if (t.find(".character-select").each((o, l) => {
        var g;
        const h = l.dataset.userid, u = l.value, p = game.users.get(h);
        if (p) {
          const k = u === "" || u === "null" ? null : u;
          (((g = p.character) == null ? void 0 : g.id) || null) !== k && (n.push({ _id: p.id, character: k }), i++);
        }
      }), n.length > 0) {
        await User.updateDocuments(n), ui.notifications.info(`Cyberpunk Bridge: Updated ${i} player assignments!`);
        for (let o of n) {
          const l = game.users.get(o._id), h = l == null ? void 0 : l.getFlag(I, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: h || o._id,
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
    }), t.find(".show-qr").click(async (r) => {
      r.preventDefault();
      const i = r.currentTarget.dataset.userid, n = r.currentTarget.dataset.username;
      await xn(window.cyberpunkBridge, i, n);
    }), t.find(".refresh-user").click(async (r) => {
      r.preventDefault();
      const i = r.currentTarget.dataset.userid, n = game.users.get(i);
      n && (await n.unsetFlag(I, "agent-link"), await n.unsetFlag(I, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${n.name}. They will need to re-sync.`), this.render(!0));
    }), t.find("#refresh-all-users").click(async (r) => {
      r.preventDefault();
      for (let i of game.users)
        await i.unsetFlag(I, "agent-link"), await i.unsetFlag(I, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
const Ue = "pairing-request", me = "pairing-nonce";
function oo(c) {
  c.hookIds.pairingUpdateUser || (c.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (t, r) => {
    if (game.user.isGM && foundry.utils.getProperty(r, `flags.${I}.${Ue}`) && await ao(c, t), t.id === game.user.id) {
      const i = foundry.utils.getProperty(r, `flags.${I}.${me}`);
      i && i.payload && (await Bn(i.payload, game.user.name), await game.user.unsetFlag(I, me), await game.user.unsetFlag(I, Ue));
    }
  }));
}
async function ao(c, t) {
  try {
    const { payload: r } = await Nn(c, t.id, t.name);
    await t.setFlag(I, me, { payload: r, ts: Date.now() });
  } catch (r) {
    console.warn(`[Bridge] Failed to mint pairing for ${t.name}: ${r.message}`), await t.setFlag(I, me, { error: r.message, ts: Date.now() });
  }
}
async function co() {
  if (game.user.isGM) {
    await xn(window.cyberpunkBridge, game.user.id, game.user.name);
    return;
  }
  await game.user.setFlag(I, me, null), await game.user.setFlag(I, Ue, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(I, me) || (await game.user.unsetFlag(I, Ue), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class lo extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-link-menu",
      title: "Link my Agent",
      width: 420,
      classes: ["form"]
    });
  }
  async _renderInner() {
    const t = game.user.isGM ? `<li>Click <strong>Generate QR</strong> below — as the GM your code is minted instantly.</li>
               <li>In the Agent, open <strong>Settings → Link this Agent</strong>, then scan it (phone) or paste the link code (desktop).</li>` : `<li>Click <strong>Generate QR</strong> below.</li>
               <li>The GM's Foundry mints a one-time code (the GM must be online).</li>
               <li>Open the Agent app, tap <strong>Scan to Link</strong>, and scan it.</li>`;
    return $(`
            <div style="padding: 8px;">
                <p>Generate a QR code to link the Cyberpunk Agent app to this game.</p>
                <ol style="margin: 0 0 12px 18px; padding: 0;">${t}</ol>
                <button type="button" id="cpr-generate-qr">
                    <i class="fas fa-qrcode"></i> Generate QR
                </button>
            </div>
        `);
  }
  activateListeners(t) {
    super.activateListeners(t), t.find("#cpr-generate-qr").click(async (r) => {
      r.preventDefault(), await co(), this.close();
    });
  }
}
const uo = 1, ho = /^[A-Z0-9]{4}-?[A-Z0-9]{4}$/i;
function rn(c) {
  const t = (c || "").trim();
  if (!t) return null;
  for (const r of [() => atob(t), () => t])
    try {
      return JSON.parse(r());
    } catch {
    }
  return null;
}
function sn(c) {
  return ho.test((c || "").trim());
}
async function fo(c) {
  const t = c.trim().toUpperCase().replace(/^([A-Z0-9]{4})([A-Z0-9]{4})$/, "$1-$2"), r = (game.settings.get(I, "apiUrl") || he).replace(/\/$/, "");
  let i;
  try {
    i = await fetch(`${r}/api/setup-code/${encodeURIComponent(t)}`, {
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
class po extends FormApplication {
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
  activateListeners(t) {
    super.activateListeners(t), t.find("#cpr-setup-code").on("input", (r) => {
      this._renderPreview(t, rn(r.currentTarget.value));
    }), t.find("#cpr-apply-setup").click(async (r) => {
      r.preventDefault(), await this._apply(t.find("#cpr-setup-code").val());
    });
  }
  /**
   * Render the decoded fields into the preview area. Called on every edit so the
   * displayed values stay in sync with what Apply would save. API/Reverb keys are
   * masked since they are secrets.
   */
  _renderPreview(t, r) {
    const i = t.find("#cpr-setup-preview"), n = t.find("#cpr-setup-code").val().trim();
    if (sn(n)) {
      const h = (game.settings.get(I, "apiUrl") || he).replace(/\/$/, "");
      i.html(`<div class="notes" style="opacity:0.7;">Short code — configuration will be fetched from ${h} when you Apply.</div>`);
      return;
    }
    if (!r || !r.agentUrl) {
      const h = n ? "Not a valid setup code yet — re-copy it from the Agent." : "Paste a code above to preview its values.";
      i.html(`<div class="notes" style="opacity:0.7;">${h}</div>`);
      return;
    }
    const o = (h) => h ? `••••${String(h).slice(-4)}` : "—", l = [
      ["Agent URL", String(r.agentUrl).replace(/\/$/, "")],
      ["Channel ID", r.channelId ? String(r.channelId) : "—"],
      ["API Key", o(r.apiKey)],
      ["Reverb Key", o(r.reverbKey)],
      ["Reverb Port", r.reverbPort ? String(r.reverbPort) : "—"]
    ];
    i.html(l.map(([h, u]) => `
            <div style="display:flex;justify-content:space-between;gap:8px;">
                <span style="opacity:0.7;">${h}</span>
                <span style="font-family:monospace;">${u}</span>
            </div>
        `).join(""));
  }
  async _apply(t) {
    let r;
    if (sn(t))
      try {
        r = await fo(t);
      } catch (o) {
        ui.notifications.error(`Agent setup: ${o.message}`);
        return;
      }
    else
      r = rn(t);
    if (!r || !r.agentUrl) {
      ui.notifications.error("Agent setup: that does not look like a valid setup code. Re-copy it from the Agent.");
      return;
    }
    if (r.v && r.v !== uo) {
      ui.notifications.error("Agent setup: this code was made by a newer Agent. Update the Bridge module.");
      return;
    }
    const i = { apiUrl: String(r.agentUrl).replace(/\/$/, "") };
    r.channelId && (i.channelId = String(r.channelId)), r.apiKey && (i.apiKey = String(r.apiKey)), r.reverbKey && (i.reverbKey = String(r.reverbKey)), r.reverbPort && (i.reverbPort = String(r.reverbPort));
    try {
      for (const [o, l] of Object.entries(i))
        await game.settings.set(I, o, l);
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
  _reflectInSettingsForm(t) {
    const r = Object.values(ui.windows).find((i) => i instanceof SettingsConfig);
    if (r != null && r.element)
      for (const [i, n] of Object.entries(t)) {
        const o = r.element.find(`[name="${I}.${i}"]`);
        o.length && o.val(n);
      }
  }
}
function go(c) {
  game.settings.registerMenu(I, "quickSetup", {
    name: "Quick Setup",
    label: "Paste Agent Config",
    hint: "Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.",
    icon: "fas fa-bolt",
    type: po,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(I, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: so,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(I, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: lo,
    restricted: !1
    // Available to all players
  }), game.settings.register(I, "apiUrl", {
    name: "Agent URL",
    hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
    scope: "world",
    // URL is usually the same for everyone
    config: !0,
    type: String,
    default: he,
    onChange: () => {
      game.user.isGM && c.reconnect(), c.syncPlayerLink();
    }
  }), game.settings.register(I, "reverbHost", {
    name: "Reverb Host (override)",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => c.reconnect()
  }), game.settings.register(I, "reverbPort", {
    name: "Reverb Port",
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => c.reconnect()
  }), game.settings.register(I, "reverbUseSSL", {
    name: "Reverb Use SSL (wss)",
    scope: "world",
    config: !0,
    type: Boolean,
    default: !0,
    onChange: () => c.reconnect()
  }), game.settings.register(I, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: cn,
    onChange: () => c.reconnect()
  }), game.settings.register(I, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (t) => {
      await game.user.setFlag(I, "hasApiKey", !!t), game.user.isGM && c.reconnect(), c.syncPlayerLink();
    }
  }), game.settings.register(I, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && c.reconnect();
    }
  }), game.settings.register(I, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function mo(c, t, { type: r, requestId: i, actorId: n }) {
  const o = game.actors.get(n);
  if (!o) {
    console.warn(`⚠️ Actor ID ${n} not found in this world.`);
    return;
  }
  await o.update(t.changes), ui.notifications.info(`💾 Sync: ${o.name} updated.`), await c.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function yo(c, t, { requestId: r }) {
  let i = t.actorId, n = game.user;
  const o = t.agentLink || t.agent_link || t.foundryUserId || t.requestId;
  if (o && (n = game.users.find((l) => l.getFlag(I, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user), !i) {
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
        items: (h.items || []).map((p) => ({
          _id: p._id,
          name: p.name,
          type: p.type,
          img: p.img,
          system: p.system
        })),
        flags: h.flags && h.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": h.flags["cyberpunk-red-core"] } : {}
      };
      await c.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: u, requestId: r, isGM: n.isGM, agentLink: n.getFlag(I, "agent-link") || n.id });
      return;
    }
  }
  await c.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: !1, requestId: r, isGM: n.isGM, agentLink: n.getFlag(I, "agent-link") || n.id });
}
async function vo(c, t, { requestId: r, actorId: i }) {
  let n = game.user;
  const o = t.agentLink || t.agent_link || t.foundryUserId || t.requestId;
  o && (n = game.users.find((u) => u.getFlag(I, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user);
  function l(u) {
    var g;
    return ((g = canvas.tokens.placeables.filter((k) => {
      var b;
      return ((b = k.actor) == null ? void 0 : b.id) === u;
    })[0]) == null ? void 0 : g.id) ?? null;
  }
  let h = [];
  n.isGM ? h = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var g, k;
    const p = (g = Object.entries(u.ownership || {}).find(([b, m]) => {
      const _ = game.users.get(b);
      return _ && !_.isGM && m >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: l(u.id),
      agentLink: (p ? (k = game.users.get(p)) == null ? void 0 : k.getFlag(I, "agent-link") : null) || p || n.getFlag(I, "agent-link") || n.id
    };
  }) : (h = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(n, "OWNER")).map((u) => {
    var g, k;
    const p = (g = Object.entries(u.actor.ownership || {}).find(([b, m]) => {
      const _ = game.users.get(b);
      return _ && !_.isGM && m >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.actor.id,
      tokenId: l(u.actor.id),
      agentLink: (p ? (k = game.users.get(p)) == null ? void 0 : k.getFlag(I, "agent-link") : null) || p || null
    };
  }), n.character && (h.some((p) => p.actorId === n.character.id) || h.push({
    name: n.character.name,
    actorId: n.character.id,
    tokenId: l(n.character.id),
    agentLink: n.getFlag(I, "agent-link") || n.id
  })), !n.isGM && n.character && (h = h.filter((u) => u.actorId === n.character.id))), await c.sendResponse({ type: "ACTORS_DATA", actorId: i, actors: h, requestId: r, isGM: n.isGM, agentLink: n.getFlag(I, "agent-link") || n.id });
}
async function bo(c, t, { type: r, requestId: i, actorId: n }) {
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
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await c.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function wo(c, t, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const o = n.items.get(t.itemId);
    if (o) {
      const l = `items.${t.itemId}.system.equipped`;
      await o.update({ "system.equipped": t.state }), await c.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [l]: t.state }, success: !0, requestId: r });
    }
  }
}
async function ko(c, t, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const o = n.items.get(t.weaponId), l = t.ammoId ? n.items.get(t.ammoId) : null, h = async () => {
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
      }), await c.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: u, success: !0, requestId: r });
    };
    if (l) {
      let u = o.getInstalledItems("ammo");
      u && u.length > 0 && o.uninstallItems(u), setTimeout(function() {
        o.installItems([l]);
      }, 500), setTimeout(async () => {
        await h();
      }, 1500);
    } else
      await h();
  }
}
async function Co(c, t, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const o = n.items.get(t.cyberdeckId), l = n.items.get(t.programId);
  if (!o || !l) return;
  const h = o.system.installedItems.usedSlots || 0, u = o.system.installedItems.slots || 0, p = l.system.size || 1;
  if (h + p > u) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const g = o.system.installedItems.list || [];
  if (g.includes(t.programId)) return;
  const k = [...g, t.programId], b = h + p;
  await o.update({
    "system.installedItems.list": k,
    "system.installedItems.usedSlots": b
  }), await c.sendResponse({
    type: "SHEET_DELTA",
    actorId: i,
    delta: {
      [`items.${t.cyberdeckId}.system.installedItems.list`]: k,
      [`items.${t.cyberdeckId}.system.installedItems.usedSlots`]: b
    },
    success: !0,
    requestId: r
  });
}
async function _o(c, t, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const o = n.items.get(t.cyberdeckId), l = n.items.get(t.programId);
  if (!o) return;
  const h = o.system.installedItems.list || [];
  if (!h.includes(t.programId)) return;
  const u = h.filter((m) => m !== t.programId), p = l && l.system.size || 1, g = o.system.installedItems.usedSlots || 0, k = Math.max(0, g - p);
  await o.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": k
  });
  const b = {
    [`items.${t.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${t.cyberdeckId}.system.installedItems.usedSlots`]: k
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), b[`items.${t.programId}.system.isRezzed`] = !1), await c.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: b, success: !0, requestId: r });
}
async function So(c, t, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const o = n.items.get(t.programId);
    o && (await o.update({ "system.isRezzed": t.targetState }), await c.sendResponse({
      type: "SHEET_DELTA",
      actorId: i,
      delta: { [`items.${t.programId}.system.isRezzed`]: t.targetState },
      success: !0,
      requestId: r
    }));
  }
}
async function To(c, t, { requestId: r, actorId: i }) {
  var o, l;
  const n = game.actors.get(i);
  if (n) {
    const h = document.createElement("a");
    h.dataset.rollType = t.rollType, h.dataset.cyberdeckId = t.cyberdeckId, h.dataset.rollTitle = t.programName, h.dataset.interfaceAbility = t.programName, h.dataset.itemId = t.cyberdeckId, h.dataset.programId = t.programId, h.dataset.executionType = t.executionType;
    const u = async () => {
      await n.sheet._onRoll({
        type: "click",
        currentTarget: h
      });
    }, p = await c.rollAndCapture(i, u, t.rollMode);
    p.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: r,
      actorId: i,
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
async function Ao(c, t, { requestId: r, actorId: i }) {
  var l, h;
  const n = game.actors.get(i), o = n.items.get(t.weaponId);
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
    }, p = await c.rollAndCapture(i, u, t.rollMode);
    p.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: r,
      actorId: i,
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
        rollTitle: (h = p.rawRoll) == null ? void 0 : h.rollTitle
      },
      success: !0
    });
  }
}
async function Io(c, t, { requestId: r, actorId: i }) {
  var o, l;
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
    }, u = await c.rollAndCapture(i, h, t.rollMode);
    if (u.success) {
      const p = n.system.derivedStats.deathsave || {};
      await c.sendResponse({
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
          resultTotal: (o = u.rawRoll) == null ? void 0 : o.resultTotal,
          rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      }), await c.sendResponse({
        type: "SHEET_DELTA",
        actorId: i,
        delta: { "system.derivedStats.deathsave": p },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function Eo(c, t, { requestId: r, actorId: i }) {
  var h, u;
  const n = game.actors.get(i), o = async () => {
    await n.sheet._onRoll({
      "data-roll-type": "facedown",
      "data-roll-title": "Face Down",
      type: "click",
      currentTarget: {
        "data-roll-type": "facedown",
        "data-roll-title": "Face Down"
      }
    });
  }, l = await c.rollAndCapture(i, o, t.rollMode);
  l.success && await c.sendResponse({
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
async function Ro(c, t, { requestId: r, actorId: i }) {
  var o, l;
  const n = game.actors.get(i);
  if (n) {
    const h = async () => {
      await n.rollInitiative();
    }, u = await c.rollAndCapture(i, h, t.rollMode);
    u.success && await c.sendResponse({
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
        resultTotal: (o = u.rawRoll) == null ? void 0 : o.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function Po(c, t, { requestId: r, actorId: i }) {
  var o, l;
  const n = game.actors.get(i);
  if (n) {
    const h = n.items.getName(t.itemName);
    if (h) {
      const u = {
        "data-roll-type": "roleAbility",
        "data-roll-title": t.label,
        "data-item-id": h.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "roleAbility",
          "data-roll-title": t.label,
          "data-item-id": h.id,
          "data-item-subtype": t.label
        }
      };
      t.isAbility && (u["data-roll-subtype"] = "subRoleAbility", u["data-role-name"] = t.label, u.currentTarget["data-roll-subtype"] = "subRoleAbility", u.currentTarget["data-role-name"] = t.label);
      const p = async () => {
        await n.sheet._onRoll(u);
      }, g = await c.rollAndCapture(i, p, t.rollMode);
      g.success && await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: g.rollMode,
        requestId: r,
        actorId: i,
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
async function Lo(c, t, { requestId: r, actorId: i }) {
  var o, l;
  const n = game.actors.get(i);
  if (n) {
    const h = n.items.getName(t.label);
    if (h) {
      const u = async () => {
        await n.sheet._onRoll({
          "data-roll-type": "skill",
          "data-roll-title": t.label,
          "data-item-id": h.id,
          type: "click",
          currentTarget: {
            "data-roll-type": "skill",
            "data-roll-title": t.label,
            "data-item-id": h.id
          }
        });
      }, p = await c.rollAndCapture(i, u, t.rollMode);
      p.success && await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: r,
        actorId: i,
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
async function Mo(c, t, { requestId: r, actorId: i }) {
  var o, l;
  const n = game.actors.get(i);
  if (n) {
    const h = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "stat",
        "data-roll-title": t.label,
        type: "click",
        currentTarget: {
          "data-roll-type": "stat",
          "data-roll-title": t.label
        }
      });
    }, u = await c.rollAndCapture(i, h, t.rollMode);
    u.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: r,
      actorId: i,
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
async function Oo(c, t, { requestId: r, actorId: i }) {
  r && c.activeRequests.set(r, { actorId: i, timestamp: Date.now() });
  const n = new Roll(t.formula);
  await n.evaluate(), await n.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
    flavor: t.flavor,
    rollMode: t.rollMode || game.settings.get("core", "rollMode")
  }), await c.sendResponse({
    type: "ROLL_RESULT",
    rollMode: t.rollMode || game.settings.get("core", "rollMode"),
    requestId: r,
    actorId: i,
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
async function No(c, t, { requestId: r, actorId: i, tokenId: n }) {
  var l, h, u, p, g, k, b;
  const o = game.actors.get(i);
  if (o) {
    const m = t.weaponId, _ = t.fireMode, C = canvas.tokens.get(t.targetId), w = "firetype-" + m, v = "cyberpunk-red-core";
    let S = "";
    switch (_) {
      case "Auto":
        S = "autofire";
        break;
      case "Suppress":
        S = "suppressive";
        break;
      case "Aimed":
        S = "aimed", await o.setFlag(v, "aimedLocation", "head");
        break;
      default:
        S = "";
        break;
    }
    C && C.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), S === "" ? await o.unsetFlag(v, w) : await o.setFlag(v, w, S);
    const A = document.createElement("a");
    A.dataset.rollType = "attack", A.dataset.itemId = m, A.dataset.rollTitle = _ + " Attack";
    const R = async () => {
      await o.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: A,
        type: "click"
      }, { showDialog: !0 });
    };
    let E = null;
    if (C) {
      const N = canvas.tokens.get(n) || ((l = o.getActiveTokens()) == null ? void 0 : l[0]) || canvas.tokens.placeables.find((x) => {
        var U;
        return ((U = x.actor) == null ? void 0 : U.id) === o.id;
      });
      if (N) {
        const x = C.center.x - N.center.x, U = C.center.y - N.center.y, F = Math.sqrt(Math.pow(x, 2) + Math.pow(U, 2)), Z = Math.ceil(F / (((h = canvas.grid) == null ? void 0 : h.size) || 128)), W = o.items.get(m), V = un(W), Ie = hn(V, Z);
        E = Ie === 99 ? "Out of Range" : Ie;
      }
    }
    const L = await c.rollAndCapture(i, R, t.rollMode);
    if (L.success) {
      let N = null;
      typeof E == "number" ? N = L.total >= E ? "Hit" : "Miss" : E === "Out of Range" && (N = "Miss");
      const x = ((g = (p = (u = o.items.get(m)) == null ? void 0 : u.system) == null ? void 0 : p.magazine) == null ? void 0 : g.value) ?? null;
      await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: L.rollMode,
        requestId: r,
        actorId: i,
        total: L.total,
        isCriticalSuccess: L.isCriticalSuccess,
        isCriticalFailure: L.isCriticalFailure,
        label: _ + " Attack",
        rawRoll: {
          total: L.total,
          isCriticalSuccess: L.isCriticalSuccess,
          isCriticalFailure: L.isCriticalFailure,
          label: L.label,
          resultTotal: (k = L.rawRoll) == null ? void 0 : k.resultTotal,
          rollTitle: (b = L.rawRoll) == null ? void 0 : b.rollTitle
        },
        dv: E,
        ammoTo: x,
        outcome: N,
        success: !0
      });
    }
  }
}
async function xo(c, t, { type: r, requestId: i, actorId: n, tokenId: o }) {
  if (game.paused) return;
  const l = canvas.tokens.get(o);
  if (l) {
    let h = {};
    t.direction === "up" ? h.y = l.document.y - canvas.grid.size : t.direction === "down" ? h.y = l.document.y + canvas.grid.size : t.direction === "left" ? h.x = l.document.x - canvas.grid.size : t.direction === "right" && (h.x = l.document.x + canvas.grid.size), await l.document.update(h), await c.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !0, requestId: i });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${o} not found.`), await c.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "Token not found", requestId: i });
}
async function Bo(c, t, { type: r, requestId: i, actorId: n }) {
  const o = canvas.tokens.get(t.targetTokenId);
  o && (o.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await c.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: t.targetTokenId, success: !0, requestId: i }));
}
async function Do(c, t, { requestId: r, actorId: i, tokenId: n }) {
  var u;
  const o = canvas.tokens.placeables.filter((p) => {
    var g;
    return ((g = p.actor) == null ? void 0 : g.id) === i;
  });
  n === null && (n = ((u = o[0]) == null ? void 0 : u.id) ?? null);
  const l = canvas.tokens.get(n);
  let h = [];
  if (l) {
    const p = canvas.grid.size, g = canvas.dimensions, k = l.center.x, b = l.center.y;
    h = canvas.tokens.placeables.filter((m) => {
      const _ = !m.document.hidden, C = m.actor && (m.actor.type === "character" || m.actor.type === "mook"), w = m.x >= g.sceneX && m.x <= g.sceneX + g.sceneWidth && m.y >= g.sceneY && m.y <= g.sceneY + g.sceneHeight;
      return _ && C && w && m.id !== l.id;
    }).map((m) => {
      const _ = m.center.x - k, C = m.center.y - b, v = (Math.sqrt(Math.pow(_, 2) + Math.pow(C, 2)) / p).toFixed(2);
      return {
        name: m.name,
        id: m.id,
        distanceM: parseFloat(v),
        type: m.actor.type
      };
    }).sort((m, _) => m.distanceM - _.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${n} not found.`);
  await c.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: i, tokens: h, requestId: r });
}
async function Fo(c, t, { requestId: r, actorId: i, tokenId: n }) {
  var p;
  const o = canvas.tokens.get(n), l = t.targetTokenId || ((p = Array.from(game.user.targets)[0]) == null ? void 0 : p.id), h = canvas.tokens.get(l), u = t.weaponId;
  if (o && h) {
    const g = h.center.x - o.center.x, k = h.center.y - o.center.y, b = Math.sqrt(Math.pow(g, 2) + Math.pow(k, 2)), m = Math.ceil(b / 128), _ = o.actor.items.get(u);
    if (!_) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${o.actor.name}.`), await c.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
      return;
    }
    const C = un(_), w = hn(C, m), v = {
      targetName: h.name,
      distanceMeters: m,
      weaponCategory: C,
      dv: w === 99 ? "Out of Range" : w
    };
    await c.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: v, requestId: r });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!o}, Target: ${!!h}`), await c.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
}
async function Uo(c, t, { requestId: r, actorId: i }) {
  var R;
  const n = game.actors.get(i);
  if (!n) return;
  const o = t.weaponId, l = o ? n.items.get(o) : null;
  let h = "None", u = 0, p = "None", g = 0, k = 0;
  if (l) {
    h = l.system.weaponSkill;
    const E = n.items.find((L) => L.type === "skill" && L.name === h);
    u = E && Number(E.system.level) || 0, p = E && E.system.stat || "ref", g = Number((R = n.system.stats[p]) == null ? void 0 : R.value) || 0, k = Number(l.system.attackmod) || 0;
  }
  let b = 0;
  const m = [], _ = Number(n.system.derivedStats.hp.value) || 0, C = Number(n.system.derivedStats.seriouslyWounded) || 0, w = n.items.find((E) => E.name === "Stim" && E.type === "drug"), v = w && w.effects.some((E) => E.disabled === !1);
  if (_ <= 0)
    b -= 4, m.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (_ <= C) {
    const E = v ? 0 : -2;
    b += E, m.push({
      title: v ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: E,
      description: v ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  n.items.filter((E) => E.type === "criticalInjury").forEach((E) => {
    var U;
    const L = E.name || "Injury", N = (((U = E.system.description) == null ? void 0 : U.value) || "").replace(/<[^>]*>/g, "");
    let x = 0;
    if (E.effects && E.effects.length > 0 && E.effects.forEach((F) => {
      !F.disabled && F.changes && F.changes.forEach((Z) => {
        const W = parseInt(Z.value);
        isNaN(W) || (x += W);
      });
    }), x === 0) {
      const F = String(L).toLowerCase();
      (N.includes("-2") || F.includes("arm") || F.includes("eye")) && (x = -2);
    }
    b += x, m.push({ title: L, description: N, penalty: x });
  });
  const A = {
    actorName: n.name,
    baseBonus: g + u + k,
    breakdown: {
      statName: p,
      statValue: g,
      skillName: h,
      skillLevel: u,
      weaponAcc: k
    },
    totalPenalty: b,
    finalModifier: g + u + k + b,
    injuries: m
  };
  await c.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: i, result: A, requestId: r });
}
async function jo(c, t, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const o = `system.${t.label}`;
    let l;
    if (t.operation === "inc") {
      const h = o.split(".");
      let u = n;
      for (let k = 0; k < h.length; k++)
        u = k === 0 ? u[h[k]] : u == null ? void 0 : u[h[k]];
      const p = Number(u) || 0, g = Number(t.delta) || 0;
      l = p + g;
    } else
      l = typeof t.value == "string" ? t.value : Number(t.value) || 0;
    await n.update({ [o]: l }), await c.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [o]: l }, tab: "stats", success: !0, requestId: r });
  }
}
async function Ho(c, t, { requestId: r, actorId: i, debug: n }) {
  if (i == null) {
    n && console.log("[Bridge] Actor ID Not set:");
    return;
  }
  let o = game.actors.get(i);
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
  o && await c.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { "system.wealth": o.system.wealth }, tab: "stats", success: !0, requestId: r });
}
async function zo(c, t, { requestId: r, actorId: i, debug: n }) {
  const o = [];
  for (const l of game.journal) {
    const h = l.pages.filter((u) => u.type === "cpr-agent.datapool");
    for (const u of h) {
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
    actorId: i,
    pools: o,
    requestId: r,
    success: !0
  });
}
async function qo(c, t, { debug: r }) {
  var u;
  if (!game.user.isGM) return;
  const i = t.foundryUserId, n = t.agentLink || t.agent_link, o = t.nonce;
  if (!i || !n || !o) {
    console.warn("[Bridge] PAIR_AGENT missing fields.", t);
    return;
  }
  const l = c.pendingPairings.get(o);
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
  c.pendingPairings.delete(o), await h.setFlag(I, "agent-link", n), await h.setFlag(I, "hasApiKey", !0), r && console.log(`[Bridge] PAIR_AGENT: linked ${h.name} -> ${n}`), ui.notifications.info(`Agent: ${h.name} linked successfully.`), (u = Object.values(ui.windows).find((p) => {
    var g;
    return ((g = p.options) == null ? void 0 : g.id) === "cpr-agent-assignment-menu";
  })) == null || u.render(!1), await c.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: i,
    agentLink: n,
    nonce: o,
    success: !0
  });
}
const Go = {
  UPDATE_ACTOR: mo,
  GET_ACTOR: yo,
  GET_ACTORS: vo,
  CONSUME_ITEM: bo,
  ITEM_EQUIP: wo,
  RELOAD_WEAPON: ko,
  INSTALL_PROGRAM: Co,
  REMOVE_PROGRAM: _o,
  TOGGLE_REZ: So,
  PROGRAM_ROLL: To,
  DAMAGE_ROLL: Ao,
  DEATH_SAVE: Io,
  FACEDOWN_ROLL: Eo,
  INITIATIVE_ROLL: Ro,
  ROLE_ROLL: Po,
  SKILL_ROLL: Lo,
  STAT_ROLL: Mo,
  DICE_ROLL: Oo,
  ATTACK_ROLL: No,
  MOVE_TOKEN: xo,
  TARGET_TOKEN: Bo,
  LIST_VISIBLE_TOKENS: Do,
  GET_DV_INFO: Fo,
  GET_ROLL_MODIFIERS: Uo,
  UPDATE_STAT: jo,
  UPDATE_EB: Ho,
  GET_NET_POOL: zo,
  PAIR_AGENT: qo
};
async function on(c, t, r, i) {
  const n = Go[t];
  if (!n) {
    console.log("Unknown DataType: " + t);
    return;
  }
  return n(c, r, i);
}
class $o {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1, this.embedTransport = null;
  }
  rollAndCapture(t, r, i = null) {
    return ps(this, t, r, i);
  }
  registerSettings() {
    go(this);
  }
  destroy() {
    this.echo && this.echo.disconnect();
    for (let [t, r] of Object.entries(this.hookIds))
      Hooks.off(t, r);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  connect() {
    const t = game.settings.get(I, "apiUrl"), r = game.settings.get(I, "apiKey"), i = game.settings.get(I, "debugMode"), n = Number(game.settings.get(I, "reverbPort") || 0) || 0, o = game.settings.get(I, "reverbUseSSL"), l = (game.settings.get(I, "reverbHost") || "").trim();
    if (!r || !t) return;
    this.echo && this.echo.disconnect();
    let h;
    try {
      h = new URL(t);
    } catch {
      return;
    }
    const u = l || h.hostname, p = h.protocol === "https:", g = typeof o == "boolean" ? o : void 0, k = g ?? p, b = k ? 443 : 80, m = n > 0 ? n : b;
    this.echo = new ds({
      broadcaster: "reverb",
      key: game.settings.get(I, "reverbKey") || cn,
      wsHost: u,
      wsPort: m,
      wssPort: m,
      forceTLS: k,
      enabledTransports: ["ws", "wss"],
      disableStats: !0,
      authEndpoint: `${t.replace(/\/$/, "")}/api/broadcasting/auth`,
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
    const t = game.settings.get(I, "channelId"), r = t ? `cpr-agent.${t}` : "cpr-agent";
    this.echo.private(r).listen(".GameUpdate", (i) => {
      this.handleIncomingData(i);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const t = game.settings.get(I, "apiKey"), r = game.settings.get(I, "debugMode");
    if (r && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(I, "hasApiKey") !== !!t && await game.user.setFlag(I, "hasApiKey", !!t), !t) {
      r && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const i = async () => {
      var l;
      const n = game.user.character, o = game.user.getFlag(I, "agent-link");
      r && (console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(n == null ? void 0 : n.name) || "None"}...`), console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`), console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${o || "(none)"}`));
      try {
        const h = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          actorId: n ? n.id : null,
          character: n ? { id: n.id, name: n.name } : null,
          actorName: n ? n.name : null,
          agentLink: o || game.user.id,
          foundryUserId: game.user.id,
          foundryUserName: game.user.name,
          isGM: game.user.isGM
        });
        r && console.log("[Bridge] syncPlayerLink: Laravel response:", h), h && h.agent_link ? o !== h.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${h.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${h.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(I, "agent-link", h.agent_link), (l = ui.notifications) == null || l.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", h);
      } catch (h) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", h);
      }
    };
    await i(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (n, o) => {
      n.id === game.user.id && o.character !== void 0 && i();
    }));
  }
  registerGlobalHooks() {
    if (this.hookIds.updateActor) return;
    const t = async (r, i) => {
      const n = game.settings.get(I, "apiKey");
      !this.isConnected && !n || !r || !["character", "mook"].includes(r.type) || (console.log(`%c[Bridge] Syncing change for ${r.name}`, "color: #ffaa00;", i), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: r.id,
        uuid: r.id,
        delta: i,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (r, i, n, o) => {
      if (i.system) {
        const l = ut(i.system, "system.");
        t(r, l);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (r, i, n, o) => {
      const l = r.parent;
      if (l instanceof Actor) {
        const h = {}, u = `items.${r.id}.`;
        i.system && ut(i.system, `${u}system.`, h);
        for (let p in i)
          p !== "system" && p !== "_id" && (h[`${u}${p}`] = i[p]);
        Object.keys(h).length > 0 && t(l, h);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (r, i, n) => {
      const o = r.parent;
      if (o instanceof Actor) {
        const l = {
          [`items.+${r.id}`]: r.toObject()
        };
        t(o, l);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (r, i, n) => {
      const o = r.parent;
      if (o instanceof Actor) {
        const l = {
          [`items.${r.id}`]: null
        };
        t(o, l);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (r, i) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (r, i, n, o) => {
      (i.x || i.y || i.disposition || i.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.preUpdateToken = Hooks.on("preUpdateToken", (r, i, n, o) => {
      if (!("x" in i || "y" in i)) return !0;
      const l = r.object;
      if (!l) return !0;
      const h = l.center, u = (i.x !== void 0 ? i.x : r.x) - r.x, p = (i.y !== void 0 ? i.y : r.y) - r.y, g = { x: h.x + u, y: h.y + p }, k = new Ray(h, g);
      if (CONFIG.Canvas.polygonBackends.move.testCollision(
        k.A,
        k.B,
        { type: "move", mode: "any" }
      ))
        return ui.notifications.warn(`${r.name}'s path is blocked by a wall.`), !1;
    }), this.hookIds.deleteToken = Hooks.on("deleteToken", (r, i, n) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (r, i, n) => {
      r.author.id === game.user.id && (this._isCapturingRoll || r.rolls && r.rolls.length > 0 && this.broadcastRoll(r));
    });
  }
  broadcastRefresh(t) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: t });
  }
  broadcastRoll(t) {
    var o;
    const r = game.users.get(t.author.id), i = t.rolls[0];
    let n = "publicroll";
    if (t.blind)
      n = "blindroll";
    else if (t.whisper && t.whisper.length > 0) {
      const l = game.users.filter((p) => p.isGM).map((p) => p.id), h = t.whisper.every((p) => l.includes(p) || p === t.author.id);
      t.whisper.length === 1 && t.whisper[0] === t.author.id ? n = "selfroll" : n = "gmroll";
    }
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((o = t.speaker) == null ? void 0 : o.actor) || null,
      agentLink: r ? r.getFlag(I, "agent-link") : null,
      playerName: t.alias,
      total: i.total,
      formula: i.formula,
      rollMode: t.rollMode || n,
      label: t.flavor || "Dice Roll",
      rawRoll: {
        total: i.total,
        formula: i.formula,
        rollTitle: t.flavor || "Dice Roll",
        _roll: i.toJSON()
      },
      success: !0
    });
  }
  /**
   * Send results outbound. Enriches the message, tees it to an embedded
   * Agent iframe (postMessage) when one is attached, then POSTs to Laravel
   * if a hosted Agent is configured. Either transport may be absent.
   */
  async sendResponse(t) {
    const r = (t.requestId ? this.requestAgentLinks.get(t.requestId) : null) || game.user.getFlag(I, "agent-link");
    r && !t.agentLink && (t.agentLink = r);
    const i = game.settings.get(I, "channelId");
    if (i && !t.channelId && (t.channelId = i), t.type === "ROLL_RESULT") {
      if (!t.playerName) {
        const l = t.actorId ? game.actors.get(t.actorId) : null;
        t.playerName = l ? l.name : game.user.name;
      }
      t.rollMode || (t.rollMode = game.settings.get("core", "rollMode"));
    }
    if (this.embedTransport)
      try {
        this.embedTransport.send(t);
      } catch (l) {
        console.error("Cyberpunk Bridge: Embed send failed", l);
      }
    let n = game.settings.get(I, "apiUrl");
    const o = game.settings.get(I, "apiKey");
    if (!n || !o) return null;
    n.endsWith("/") && (n = n.slice(0, -1));
    try {
      const l = await fetch(`${n}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${o}`,
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
    const r = t.payload || t, i = r.type;
    console.log(`%c[Bridge] Incoming Call: ${i}`, "color: #00ffff; font-weight: bold;", r);
    const n = r.requestId, o = r.agent_link || r.agentLink;
    n && o && (this.requestAgentLinks.set(n, o), setTimeout(() => this.requestAgentLinks.delete(n), 3e4));
    const l = game.user.getFlag(I, "agent-link"), h = r.actorId, u = (b = game.user.character) == null ? void 0 : b.id, p = game.settings.get(I, "debugMode");
    p && console.log(`[Bridge] handleIncomingData: requestId=${n}, agentLink=${o}, myAgentLink=${l}, actorId=${h}, myCharacterId=${u}`);
    let g = !1;
    if (game.user.isGM || l && (n === l || o === l) ? g = !0 : !l && n && h && u === h && (console.log(`[Bridge] Discovery: Matching incoming request to character ${h}`), g = !0), !g) {
      p && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && o && l !== o && (n === o || h && u === h) && (console.log(`%c[Bridge] Setting agent-link flag: ${o}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(I, "agent-link", o), (m = ui.notifications) == null || m.info("Agent: Account linked!"));
    let k = r.tokenId;
    if (!k && h) {
      const _ = canvas.tokens.placeables.find((C) => {
        var w;
        return ((w = C.actor) == null ? void 0 : w.id) === h;
      });
      _ && (k = _.id);
    }
    await on(this, i, r, { type: i, requestId: n, actorId: h, tokenId: k, debug: p });
  }
  /**
   * Ingress for messages arriving from an embedded Agent iframe.
   * Skips the Laravel-oriented channel/agentLink routing in handleIncomingData:
   * the iframe runs in this same client for this same user, already
   * authenticated by Foundry and validated (origin + nonce) at the transport.
   * Foundry's own permission model still gates every handler action.
   */
  async handleIncomingDataLocal(t) {
    var h, u;
    const r = t.type, i = t.requestId, n = t.actorId, o = game.settings.get(I, "debugMode");
    let l = t.tokenId;
    if (!l && n) {
      const p = (u = (h = canvas.tokens) == null ? void 0 : h.placeables) == null ? void 0 : u.find((g) => {
        var k;
        return ((k = g.actor) == null ? void 0 : k.id) === n;
      });
      p && (l = p.id);
    }
    o && console.log(`%c[Bridge] Embed Call: ${r}`, "color: #c084fc; font-weight: bold;", t), await on(this, r, t, { type: r, requestId: i, actorId: n, tokenId: l, debug: o });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class Dn extends foundry.abstract.TypeDataModel {
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
rt(Dn, "metadata", {
  label: "Agent Data Pool"
});
class Fn extends JournalPageSheet {
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
    const r = super.getData(t);
    r.entries = this.document.system.entries || [];
    for (let i of r.entries)
      i.type === "html" && (i.enrichedHtml = await TextEditor.enrichHTML(i.htmlContent, {
        async: !0,
        secrets: this.document.isOwner,
        documents: !0
      }));
    return r;
  }
  activateListeners(t) {
    super.activateListeners(t), t.find(".add-entry").click(this._onAddEntry.bind(this)), t.find(".delete-entry").click(this._onDeleteEntry.bind(this));
  }
  async _onAddEntry(t) {
    t.preventDefault();
    const i = [...this.document.system.entries || [], {
      id: foundry.utils.randomID(),
      title: "New Data Pool Link",
      type: "html"
    }];
    await this.document.update({ "system.entries": i });
  }
  async _onDeleteEntry(t) {
    t.preventDefault();
    const r = t.currentTarget.dataset.id, n = (this.document.system.entries || []).filter((o) => o.id !== r);
    await this.document.update({ "system.entries": n });
  }
}
/** @override */
rt(Fn, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
class Vo {
  constructor(t) {
    this.bridge = t, this.frame = null, this.nonce = null, this.origin = Zi(), this.ready = !1, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage);
  }
  /** Bind to a freshly-rendered iframe and await its hello. */
  attach(t, r) {
    this.frame = t, this.nonce = r, this.ready = !1;
  }
  /** Unbind (window closed). The message listener stays; it no-ops without a frame. */
  detach() {
    this.frame = null, this.nonce = null, this.ready = !1;
  }
  destroy() {
    window.removeEventListener("message", this._onMessage), this.detach();
  }
  /** Egress — deliver a bridge message into the iframe. No-op if detached. */
  send(t) {
    var r;
    (r = this.frame) != null && r.contentWindow && this.frame.contentWindow.postMessage(
      { __cpr: !0, nonce: this.nonce, kind: "message", payload: t },
      this.origin
    );
  }
  _onMessage(t) {
    if (t.origin !== this.origin || !this.frame || t.source !== this.frame.contentWindow) return;
    const r = t.data;
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
class Ko extends Application {
  constructor(t, r = {}) {
    super(r), this.bridge = t, this.nonce = foundry.utils.randomID(24), t.embedTransport || (t.embedTransport = new Vo(t)), this.transport = t.embedTransport;
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
  async _render(t, r) {
    var o, l;
    await super._render(t, r);
    const i = this.element instanceof HTMLElement ? this.element : (o = this.element) == null ? void 0 : o[0], n = (l = i == null ? void 0 : i.querySelector) == null ? void 0 : l.call(i, "iframe.cpr-agent-frame");
    n && this.transport.frame !== n ? this.transport.attach(n, this.nonce) : n || console.warn("[Bridge] AgentApp: iframe.cpr-agent-frame not found; transport not attached.");
  }
  async close(t) {
    var r;
    return (r = this.transport) == null || r.detach(), super.close(t);
  }
}
window.Pusher = Yi;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new $o();
Hooks.once("init", () => {
  Wo(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = Dn, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", Fn, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), oo(window.cyberpunkBridge), window.cyberpunkBridge.openAgent = () => {
    window.cyberpunkBridge._agentApp || (window.cyberpunkBridge._agentApp = new Ko(window.cyberpunkBridge)), window.cyberpunkBridge._agentApp.render(!0);
  }, console.log("[Bridge] Cyberpunk Bridge Fully Online. Open the embedded Agent with: cyberpunkBridge.openAgent()");
});
Hooks.on("getSceneControlButtons", (c) => {
  const t = Array.isArray(c) ? c.find((r) => r.name === "token") : c == null ? void 0 : c.token;
  t != null && t.tools && t.tools.push({
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
function Wo() {
  game.settings.settings.has(`${I}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
