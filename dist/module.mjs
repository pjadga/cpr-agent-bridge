var zi = Object.defineProperty;
var qi = (c, n, i) => n in c ? zi(c, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : c[n] = i;
var nt = (c, n, i) => qi(c, typeof n != "symbol" ? n + "" : n, i);
import.meta.hot && import.meta.hot.accept((c) => {
  console.log("Hot reloading module...");
});
function Gi(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var nn = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(c, n) {
  (function(r, t) {
    c.exports = t();
  })(window, function() {
    return (
      /******/
      function(i) {
        var r = {};
        function t(a) {
          if (r[a])
            return r[a].exports;
          var l = r[a] = {
            /******/
            i: a,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return i[a].call(l.exports, l, l.exports, t), l.l = !0, l.exports;
        }
        return t.m = i, t.c = r, t.d = function(a, l, d) {
          t.o(a, l) || Object.defineProperty(a, l, { enumerable: !0, get: d });
        }, t.r = function(a) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
        }, t.t = function(a, l) {
          if (l & 1 && (a = t(a)), l & 8 || l & 4 && typeof a == "object" && a && a.__esModule) return a;
          var d = /* @__PURE__ */ Object.create(null);
          if (t.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: a }), l & 2 && typeof a != "string") for (var u in a) t.d(d, u, (function(g) {
            return a[g];
          }).bind(null, u));
          return d;
        }, t.n = function(a) {
          var l = a && a.__esModule ? (
            /******/
            function() {
              return a.default;
            }
          ) : (
            /******/
            function() {
              return a;
            }
          );
          return t.d(l, "a", l), l;
        }, t.o = function(a, l) {
          return Object.prototype.hasOwnProperty.call(a, l);
        }, t.p = "", t(t.s = 2);
      }([
        /* 0 */
        /***/
        function(i, r, t) {
          var a = this && this.__extends || /* @__PURE__ */ function() {
            var C = function(w, v) {
              return C = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, I) {
                S.__proto__ = I;
              } || function(S, I) {
                for (var E in I) I.hasOwnProperty(E) && (S[E] = I[E]);
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
                for (var v = "", S = 0; S < w.length - 2; S += 3) {
                  var I = w[S] << 16 | w[S + 1] << 8 | w[S + 2];
                  v += this._encodeByte(I >>> 3 * 6 & 63), v += this._encodeByte(I >>> 2 * 6 & 63), v += this._encodeByte(I >>> 1 * 6 & 63), v += this._encodeByte(I >>> 0 * 6 & 63);
                }
                var E = w.length - S;
                if (E > 0) {
                  var I = w[S] << 16 | (E === 2 ? w[S + 1] << 8 : 0);
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
                for (var v = this._getPaddingLength(w), S = w.length - v, I = new Uint8Array(this.maxDecodedLength(S)), E = 0, A = 0, L = 0, O = 0, x = 0, U = 0, F = 0; A < S - 4; A += 4)
                  O = this._decodeChar(w.charCodeAt(A + 0)), x = this._decodeChar(w.charCodeAt(A + 1)), U = this._decodeChar(w.charCodeAt(A + 2)), F = this._decodeChar(w.charCodeAt(A + 3)), I[E++] = O << 2 | x >>> 4, I[E++] = x << 4 | U >>> 2, I[E++] = U << 6 | F, L |= O & l, L |= x & l, L |= U & l, L |= F & l;
                if (A < S - 1 && (O = this._decodeChar(w.charCodeAt(A)), x = this._decodeChar(w.charCodeAt(A + 1)), I[E++] = O << 2 | x >>> 4, L |= O & l, L |= x & l), A < S - 2 && (U = this._decodeChar(w.charCodeAt(A + 2)), I[E++] = x << 4 | U >>> 2, L |= U & l), A < S - 3 && (F = this._decodeChar(w.charCodeAt(A + 3)), I[E++] = U << 6 | F, L |= F & l), L !== 0)
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
                  for (var S = w.length - 1; S >= 0 && w[S] === this._paddingCharacter; S--)
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
          function g(C) {
            return u.encode(C);
          }
          r.encode = g;
          function p(C) {
            return u.decode(C);
          }
          r.decode = p;
          var k = (
            /** @class */
            function(C) {
              a(w, C);
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
            }(d)
          );
          r.URLSafeCoder = k;
          var b = new k();
          function m(C) {
            return b.encode(C);
          }
          r.encodeURLSafe = m;
          function _(C) {
            return b.decode(C);
          }
          r.decodeURLSafe = _, r.encodedLength = function(C) {
            return u.encodedLength(C);
          }, r.maxDecodedLength = function(C) {
            return u.maxDecodedLength(C);
          }, r.decodedLength = function(C) {
            return u.decodedLength(C);
          };
        },
        /* 1 */
        /***/
        function(i, r, t) {
          Object.defineProperty(r, "__esModule", { value: !0 });
          var a = "utf8: invalid string", l = "utf8: invalid source encoding";
          function d(p) {
            for (var k = new Uint8Array(u(p)), b = 0, m = 0; m < p.length; m++) {
              var _ = p.charCodeAt(m);
              _ < 128 ? k[b++] = _ : _ < 2048 ? (k[b++] = 192 | _ >> 6, k[b++] = 128 | _ & 63) : _ < 55296 ? (k[b++] = 224 | _ >> 12, k[b++] = 128 | _ >> 6 & 63, k[b++] = 128 | _ & 63) : (m++, _ = (_ & 1023) << 10, _ |= p.charCodeAt(m) & 1023, _ += 65536, k[b++] = 240 | _ >> 18, k[b++] = 128 | _ >> 12 & 63, k[b++] = 128 | _ >> 6 & 63, k[b++] = 128 | _ & 63);
            }
            return k;
          }
          r.encode = d;
          function u(p) {
            for (var k = 0, b = 0; b < p.length; b++) {
              var m = p.charCodeAt(b);
              if (m < 128)
                k += 1;
              else if (m < 2048)
                k += 2;
              else if (m < 55296)
                k += 3;
              else if (m <= 57343) {
                if (b >= p.length - 1)
                  throw new Error(a);
                b++, k += 4;
              } else
                throw new Error(a);
            }
            return k;
          }
          r.encodedLength = u;
          function g(p) {
            for (var k = [], b = 0; b < p.length; b++) {
              var m = p[b];
              if (m & 128) {
                var _ = void 0;
                if (m < 224) {
                  if (b >= p.length)
                    throw new Error(l);
                  var C = p[++b];
                  if ((C & 192) !== 128)
                    throw new Error(l);
                  m = (m & 31) << 6 | C & 63, _ = 128;
                } else if (m < 240) {
                  if (b >= p.length - 1)
                    throw new Error(l);
                  var C = p[++b], w = p[++b];
                  if ((C & 192) !== 128 || (w & 192) !== 128)
                    throw new Error(l);
                  m = (m & 15) << 12 | (C & 63) << 6 | w & 63, _ = 2048;
                } else if (m < 248) {
                  if (b >= p.length - 2)
                    throw new Error(l);
                  var C = p[++b], w = p[++b], v = p[++b];
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
          r.decode = g;
        },
        /* 2 */
        /***/
        function(i, r, t) {
          i.exports = t(3).default;
        },
        /* 3 */
        /***/
        function(i, r, t) {
          t.r(r);
          class a {
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
          var l = new a("_pusher_script_", "Pusher.ScriptReceivers"), d = {
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
          class g {
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
          var p = new a("_pusher_dependencies", "Pusher.DependenciesReceivers"), k = new g({
            cdn_http: u.cdn_http,
            cdn_https: u.cdn_https,
            version: u.VERSION,
            suffix: u.dependency_suffix,
            receivers: p
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
          var _ = { buildLogSuffix: function(o) {
            const e = "See:", s = b.urls[o];
            if (!s)
              return "";
            let h;
            return s.fullUrl ? h = s.fullUrl : s.path && (h = b.baseUrl + s.path), h ? `${e} ${h}` : "";
          } }, C;
          (function(o) {
            o.UserAuthentication = "user-authentication", o.ChannelAuthorization = "channel-authorization";
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
          var F = function(o, e, s, h, f) {
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
                      P = _.buildLogSuffix("authenticationEndpoint");
                      break;
                    case C.ChannelAuthorization:
                      P = `Clients must be authorized to join private or presence channels. ${_.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  f(new x(y.status, `Unable to retrieve auth string from ${h.toString()} endpoint - received status: ${y.status} from ${s.endpoint}. ${P}`), null);
                }
            }, y.send(e), y;
          };
          function Z(o) {
            return xn(Nn(o));
          }
          var J = String.fromCharCode, V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ie = function(o) {
            var e = o.charCodeAt(0);
            return e < 128 ? o : e < 2048 ? J(192 | e >>> 6) + J(128 | e & 63) : J(224 | e >>> 12 & 15) + J(128 | e >>> 6 & 63) + J(128 | e & 63);
          }, Nn = function(o) {
            return o.replace(/[^\x00-\x7F]/g, Ie);
          }, On = function(o) {
            var e = [0, 2, 1][o.length % 3], s = o.charCodeAt(0) << 16 | (o.length > 1 ? o.charCodeAt(1) : 0) << 8 | (o.length > 2 ? o.charCodeAt(2) : 0), h = [
              V.charAt(s >>> 18),
              V.charAt(s >>> 12 & 63),
              e >= 2 ? "=" : V.charAt(s >>> 6 & 63),
              e >= 1 ? "=" : V.charAt(s & 63)
            ];
            return h.join("");
          }, xn = window.btoa || function(o) {
            return o.replace(/[\s\S]{1,3}/g, On);
          };
          class Bn {
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
          var _t = Bn;
          function Dn(o) {
            window.clearTimeout(o);
          }
          function Fn(o) {
            window.clearInterval(o);
          }
          class oe extends _t {
            constructor(e, s) {
              super(setTimeout, Dn, e, function(h) {
                return s(), null;
              });
            }
          }
          class Un extends _t {
            constructor(e, s) {
              super(setInterval, Fn, e, function(h) {
                return s(), h;
              });
            }
          }
          var jn = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(o) {
              return new oe(0, o);
            },
            method(o, ...e) {
              var s = Array.prototype.slice.call(arguments, 1);
              return function(h) {
                return h[o].apply(h, s.concat(arguments));
              };
            }
          }, K = jn;
          function W(o, ...e) {
            for (var s = 0; s < e.length; s++) {
              var h = e[s];
              for (var f in h)
                h[f] && h[f].constructor && h[f].constructor === Object ? o[f] = W(o[f] || {}, h[f]) : o[f] = h[f];
            }
            return o;
          }
          function Hn() {
            for (var o = ["Pusher"], e = 0; e < arguments.length; e++)
              typeof arguments[e] == "string" ? o.push(arguments[e]) : o.push(Ae(arguments[e]));
            return o.join(" : ");
          }
          function St(o, e) {
            var s = Array.prototype.indexOf;
            if (o === null)
              return -1;
            if (s && o.indexOf === s)
              return o.indexOf(e);
            for (var h = 0, f = o.length; h < f; h++)
              if (o[h] === e)
                return h;
            return -1;
          }
          function te(o, e) {
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && e(o[s], s, o);
          }
          function Tt(o) {
            var e = [];
            return te(o, function(s, h) {
              e.push(h);
            }), e;
          }
          function zn(o) {
            var e = [];
            return te(o, function(s) {
              e.push(s);
            }), e;
          }
          function me(o, e, s) {
            for (var h = 0; h < o.length; h++)
              e.call(s || window, o[h], h, o);
          }
          function It(o, e) {
            for (var s = [], h = 0; h < o.length; h++)
              s.push(e(o[h], h, o, s));
            return s;
          }
          function qn(o, e) {
            var s = {};
            return te(o, function(h, f) {
              s[f] = e(h);
            }), s;
          }
          function At(o, e) {
            e = e || function(f) {
              return !!f;
            };
            for (var s = [], h = 0; h < o.length; h++)
              e(o[h], h, o, s) && s.push(o[h]);
            return s;
          }
          function Et(o, e) {
            var s = {};
            return te(o, function(h, f) {
              (e && e(h, f, o, s) || h) && (s[f] = h);
            }), s;
          }
          function Gn(o) {
            var e = [];
            return te(o, function(s, h) {
              e.push([h, s]);
            }), e;
          }
          function Rt(o, e) {
            for (var s = 0; s < o.length; s++)
              if (e(o[s], s, o))
                return !0;
            return !1;
          }
          function Vn(o, e) {
            for (var s = 0; s < o.length; s++)
              if (!e(o[s], s, o))
                return !1;
            return !0;
          }
          function Kn(o) {
            return qn(o, function(e) {
              return typeof e == "object" && (e = Ae(e)), encodeURIComponent(Z(e.toString()));
            });
          }
          function $n(o) {
            var e = Et(o, function(h) {
              return h !== void 0;
            }), s = It(Gn(Kn(e)), K.method("join", "=")).join("&");
            return s;
          }
          function Jn(o) {
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
            }(o, "$");
          }
          function Ae(o) {
            try {
              return JSON.stringify(o);
            } catch {
              return JSON.stringify(Jn(o));
            }
          }
          class Wn {
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
              var h = Hn.apply(this, arguments);
              Ze.log ? Ze.log(h) : Ze.logToConsole && e.bind(this)(h);
            }
          }
          var j = new Wn(), Xn = function(o, e, s, h, f) {
            (s.headers !== void 0 || s.headersProvider != null) && j.warn(`To send headers with the ${h.toString()} request, you must use AJAX, rather than JSONP.`);
            var y = o.nextAuthCallbackID.toString();
            o.nextAuthCallbackID++;
            var T = o.getDocument(), P = T.createElement("script");
            o.auth_callbacks[y] = function(D) {
              f(null, D);
            };
            var M = "Pusher.auth_callbacks['" + y + "']";
            P.src = s.endpoint + "?callback=" + encodeURIComponent(M) + "&" + e;
            var B = T.getElementsByTagName("head")[0] || T.documentElement;
            B.insertBefore(P, B.firstChild);
          }, Yn = Xn;
          class Qn {
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
          class Zn {
            constructor(e, s) {
              this.url = e, this.data = s;
            }
            send(e) {
              if (!this.request) {
                var s = $n(this.data), h = this.url + "/" + e.number + "?" + s;
                this.request = N.createScriptRequest(h), this.request.send(e);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var er = function(o, e) {
            return function(s, h) {
              var f = "http" + (e ? "s" : "") + "://", y = f + (o.host || o.options.host) + o.options.path, T = N.createJSONPRequest(y, s), P = N.ScriptReceivers.create(function(M, B) {
                l.remove(P), T.cleanup(), B && B.host && (o.host = B.host), h && h(M, B);
              });
              T.send(P);
            };
          }, tr = {
            name: "jsonp",
            getAgent: er
          }, nr = tr;
          function qe(o, e, s) {
            var h = o + (e.useTLS ? "s" : ""), f = e.useTLS ? e.hostTLS : e.hostNonTLS;
            return h + "://" + f + s;
          }
          function Ge(o, e) {
            var s = "/app/" + o, h = "?protocol=" + u.PROTOCOL + "&client=js&version=" + u.VERSION + (e ? "&" + e : "");
            return s + h;
          }
          var rr = {
            getInitial: function(o, e) {
              var s = (e.httpPath || "") + Ge(o, "flash=false");
              return qe("ws", e, s);
            }
          }, ir = {
            getInitial: function(o, e) {
              var s = (e.httpPath || "/pusher") + Ge(o);
              return qe("http", e, s);
            }
          }, sr = {
            getInitial: function(o, e) {
              return qe("http", e, e.httpPath || "/pusher");
            },
            getPath: function(o, e) {
              return Ge(o);
            }
          };
          class or {
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
          function Ve(o) {
            return "_" + o;
          }
          class ne {
            constructor(e) {
              this.callbacks = new or(), this.global_callbacks = [], this.failThrough = e;
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
          class ar extends ne {
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
              return new ar(this.hooks, e, s, h, f);
            }
          }
          var cr = new ue({
            urls: rr,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!N.getWebSocketAPI();
            },
            isSupported: function() {
              return !!N.getWebSocketAPI();
            },
            getSocket: function(o) {
              return N.createWebSocket(o);
            }
          }), Pt = {
            urls: ir,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Lt = W({
            getSocket: function(o) {
              return N.HTTPFactory.createStreamingSocket(o);
            }
          }, Pt), Mt = W({
            getSocket: function(o) {
              return N.HTTPFactory.createPollingSocket(o);
            }
          }, Pt), Nt = {
            isSupported: function() {
              return N.isXHRSupported();
            }
          }, lr = new ue(W({}, Lt, Nt)), ur = new ue(W({}, Mt, Nt)), hr = {
            ws: cr,
            xhr_streaming: lr,
            xhr_polling: ur
          }, Ee = hr, dr = new ue({
            file: "sockjs",
            urls: sr,
            handlesActivityChecks: !0,
            supportsPing: !1,
            isSupported: function() {
              return !0;
            },
            isInitialized: function() {
              return window.SockJS !== void 0;
            },
            getSocket: function(o, e) {
              return new window.SockJS(o, null, {
                js_path: k.getPath("sockjs", {
                  useTLS: e.useTLS
                }),
                ignore_null_origin: e.ignoreNullOrigin
              });
            },
            beforeOpen: function(o, e) {
              o.send(JSON.stringify({
                path: e
              }));
            }
          }), Ot = {
            isSupported: function(o) {
              var e = N.isXDRSupported(o.useTLS);
              return e;
            }
          }, fr = new ue(W({}, Lt, Ot)), gr = new ue(W({}, Mt, Ot));
          Ee.xdr_streaming = fr, Ee.xdr_polling = gr, Ee.sockjs = dr;
          var pr = Ee;
          class mr extends ne {
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
          var yr = new mr();
          class vr {
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
            decodeMessage: function(o) {
              try {
                var e = JSON.parse(o.data), s = e.data;
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
                throw { type: "MessageParseError", error: f, data: o.data };
              }
            },
            encodeMessage: function(o) {
              return JSON.stringify(o);
            },
            processHandshake: function(o) {
              var e = xt.decodeMessage(o);
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
            getCloseAction: function(o) {
              return o.code < 4e3 ? o.code >= 1002 && o.code <= 1004 ? "backoff" : null : o.code === 4e3 ? "tls_only" : o.code < 4100 ? "refused" : o.code < 4200 ? "backoff" : o.code < 4300 ? "retry" : "refused";
            },
            getCloseError: function(o) {
              return o.code !== 1e3 && o.code !== 1001 ? {
                type: "PusherError",
                data: {
                  code: o.code,
                  message: o.reason || o.message
                }
              } : null;
            }
          };
          var ae = xt;
          class br extends ne {
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
          class wr {
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
                  connection: new br(s.id, this.transport),
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
          class kr {
            constructor(e, s) {
              this.timeline = e, this.options = s || {};
            }
            send(e, s) {
              this.timeline.isEmpty() || this.timeline.send(N.TimelineTransport.getAgent(this, e), s);
            }
          }
          class Ke extends ne {
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
                var h = _.buildLogSuffix("triggeringClientEvents");
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
          class $e extends Ke {
            authorize(e, s) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: e
              }, s);
            }
          }
          class Cr {
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
          var _r = function(o, e, s, h) {
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
              B((h = h.apply(o, e || [])).next());
            });
          };
          class Sr extends $e {
            constructor(e, s) {
              super(e, s), this.members = new Cr();
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
                    let T = _.buildLogSuffix("authorizationEndpoint");
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
          var Tr = t(1), Je = t(0);
          class Ir extends $e {
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
              let s = Object(Tr.decode)(e);
              try {
                return JSON.parse(s);
              } catch {
                return s;
              }
            }
          }
          class Ar extends ne {
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
              return this.channels[e] || (this.channels[e] = Rr(e, s)), this.channels[e];
            }
            all() {
              return zn(this.channels);
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
          function Rr(o, e) {
            if (o.indexOf("private-encrypted-") === 0) {
              if (e.config.nacl)
                return re.createEncryptedChannel(o, e, e.config.nacl);
              let s = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", h = _.buildLogSuffix("encryptedChannelSupport");
              throw new A(`${s}. ${h}`);
            } else {
              if (o.indexOf("private-") === 0)
                return re.createPrivateChannel(o, e);
              if (o.indexOf("presence-") === 0)
                return re.createPresenceChannel(o, e);
              if (o.indexOf("#") === 0)
                throw new v('Cannot create a channel with name "' + o + '".');
              return re.createChannel(o, e);
            }
          }
          var Pr = {
            createChannels() {
              return new Er();
            },
            createConnectionManager(o, e) {
              return new Ar(o, e);
            },
            createChannel(o, e) {
              return new Ke(o, e);
            },
            createPrivateChannel(o, e) {
              return new $e(o, e);
            },
            createPresenceChannel(o, e) {
              return new Sr(o, e);
            },
            createEncryptedChannel(o, e, s) {
              return new Ir(o, e, s);
            },
            createTimelineSender(o, e) {
              return new kr(o, e);
            },
            createHandshake(o, e) {
              return new wr(o, e);
            },
            createAssistantToTheTransportManager(o, e, s) {
              return new vr(o, e, s);
            }
          }, re = Pr;
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
              return Rt(this.strategies, K.method("isSupported"));
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
              return Rt(this.strategies, K.method("isSupported"));
            }
            connect(e, s) {
              return Lr(this.strategies, e, function(h, f) {
                return function(y, T) {
                  if (f[h].error = y, y) {
                    Mr(f) && s(!0);
                    return;
                  }
                  me(f, function(P) {
                    P.forceMinPriority(T.transport.priority);
                  }), s(null, T);
                };
              });
            }
          }
          function Lr(o, e, s) {
            var h = It(o, function(f, y, T, P) {
              return f.connect(e, s(y, P));
            });
            return {
              abort: function() {
                me(h, Nr);
              },
              forceMinPriority: function(f) {
                me(h, function(y) {
                  y.forceMinPriority(f);
                });
              }
            };
          }
          function Mr(o) {
            return Vn(o, function(e) {
              return !!e.error;
            });
          }
          function Nr(o) {
            !o.error && !o.aborted && (o.abort(), o.aborted = !0);
          }
          class Or {
            constructor(e, s, h) {
              this.strategy = e, this.transports = s, this.ttl = h.ttl || 1800 * 1e3, this.usingTLS = h.useTLS, this.timeline = h.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(e, s) {
              var h = this.usingTLS, f = xr(h), y = f && f.cacheSkipCount ? f.cacheSkipCount : 0, T = [this.strategy];
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
                H ? (Dt(h), T.length > 0 ? (M = K.now(), B = T.pop().connect(e, D)) : s(H)) : (Br(h, Le.transport.name, K.now() - M, y), s(null, Le));
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
          function Xe(o) {
            return "pusherTransport" + (o ? "TLS" : "NonTLS");
          }
          function xr(o) {
            var e = N.getLocalStorage();
            if (e)
              try {
                var s = e[Xe(o)];
                if (s)
                  return JSON.parse(s);
              } catch {
                Dt(o);
              }
            return null;
          }
          function Br(o, e, s, h) {
            var f = N.getLocalStorage();
            if (f)
              try {
                f[Xe(o)] = Ae({
                  timestamp: K.now(),
                  transport: e,
                  latency: s,
                  cacheSkipCount: h
                });
              } catch {
              }
          }
          function Dt(o) {
            var e = N.getLocalStorage();
            if (e)
              try {
                delete e[Xe(o)];
              } catch {
              }
          }
          class Re {
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
          class Dr {
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
          function ve(o) {
            return function() {
              return o.isSupported();
            };
          }
          var Fr = function(o, e, s) {
            var h = {};
            function f(Jt, Fi, Ui, ji, Hi) {
              var Wt = s(o, Jt, Fi, Ui, ji, Hi);
              return h[Jt] = Wt, Wt;
            }
            var y = Object.assign({}, e, {
              hostNonTLS: o.wsHost + ":" + o.wsPort,
              hostTLS: o.wsHost + ":" + o.wssPort,
              httpPath: o.wsPath
            }), T = Object.assign({}, y, {
              useTLS: !0
            }), P = Object.assign({}, e, {
              hostNonTLS: o.httpHost + ":" + o.httpPort,
              hostTLS: o.httpHost + ":" + o.httpsPort,
              httpPath: o.httpPath
            }), M = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, B = new Bt({
              minPingDelay: 1e4,
              maxPingDelay: o.activityTimeout
            }), D = new Bt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: o.activityTimeout
            }), H = f("ws", "ws", 3, y, B), Le = f("wss", "ws", 3, T, B), Ni = f("sockjs", "sockjs", 1, P), zt = f("xhr_streaming", "xhr_streaming", 1, P, D), Oi = f("xdr_streaming", "xdr_streaming", 1, P, D), qt = f("xhr_polling", "xhr_polling", 1, P), xi = f("xdr_polling", "xdr_polling", 1, P), Gt = new ce([H], M), Bi = new ce([Le], M), Di = new ce([Ni], M), Vt = new ce([
              new ye(ve(zt), zt, Oi)
            ], M), Kt = new ce([
              new ye(ve(qt), qt, xi)
            ], M), $t = new ce([
              new ye(ve(Vt), new We([
                Vt,
                new Re(Kt, { delay: 4e3 })
              ]), Kt)
            ], M), et = new ye(ve($t), $t, Di), tt;
            return e.useTLS ? tt = new We([
              Gt,
              new Re(et, { delay: 2e3 })
            ]) : tt = new We([
              Gt,
              new Re(Bi, { delay: 2e3 }),
              new Re(et, { delay: 5e3 })
            ]), new Or(new Dr(new ye(ve(H), tt, et)), h, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            });
          }, Ur = Fr, jr = function() {
            var o = this;
            o.timeline.info(o.buildTimelineMessage({
              transport: o.name + (o.options.useTLS ? "s" : "")
            })), o.hooks.isInitialized() ? o.changeState("initialized") : o.hooks.file ? (o.changeState("initializing"), k.load(o.hooks.file, { useTLS: o.options.useTLS }, function(e, s) {
              o.hooks.isInitialized() ? (o.changeState("initialized"), s(!0)) : (e && o.onError(e), o.onClose(), s(!1));
            })) : o.onClose();
          }, Hr = {
            getRequest: function(o) {
              var e = new window.XDomainRequest();
              return e.ontimeout = function() {
                o.emit("error", new S()), o.close();
              }, e.onerror = function(s) {
                o.emit("error", s), o.close();
              }, e.onprogress = function() {
                e.responseText && e.responseText.length > 0 && o.onChunk(200, e.responseText);
              }, e.onload = function() {
                e.responseText && e.responseText.length > 0 && o.onChunk(200, e.responseText), o.emit("finished", 200), o.close();
              }, e;
            },
            abortRequest: function(o) {
              o.ontimeout = o.onerror = o.onprogress = o.onload = null, o.abort();
            }
          }, zr = Hr;
          const qr = 256 * 1024;
          class Gr extends ne {
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
              return this.position === e.length && e.length > qr;
            }
          }
          var Ye;
          (function(o) {
            o[o.CONNECTING = 0] = "CONNECTING", o[o.OPEN = 1] = "OPEN", o[o.CLOSED = 3] = "CLOSED";
          })(Ye || (Ye = {}));
          var le = Ye, Vr = 1;
          class Kr {
            constructor(e, s) {
              this.hooks = e, this.session = Ut(1e3) + "/" + Xr(8), this.location = $r(s), this.readyState = le.CONNECTING, this.openStream();
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
                  return N.createSocketRequest("POST", Ft(Jr(this.location, this.session))).start(e), !0;
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
              this.readyState === le.CONNECTING ? (e && e.hostname && (this.location.base = Wr(this.location.base, e.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
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
          function $r(o) {
            var e = /([^\?]*)\/*(\??.*)/.exec(o);
            return {
              base: e[1],
              queryString: e[2]
            };
          }
          function Jr(o, e) {
            return o.base + "/" + e + "/xhr_send";
          }
          function Ft(o) {
            var e = o.indexOf("?") === -1 ? "?" : "&";
            return o + e + "t=" + +/* @__PURE__ */ new Date() + "&n=" + Vr++;
          }
          function Wr(o, e) {
            var s = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(o);
            return s[1] + e + s[3];
          }
          function Ut(o) {
            return N.randomInt(o);
          }
          function Xr(o) {
            for (var e = [], s = 0; s < o; s++)
              e.push(Ut(32).toString(32));
            return e.join("");
          }
          var Yr = Kr, Qr = {
            getReceiveURL: function(o, e) {
              return o.base + "/" + e + "/xhr_streaming" + o.queryString;
            },
            onHeartbeat: function(o) {
              o.sendRaw("[]");
            },
            sendHeartbeat: function(o) {
              o.sendRaw("[]");
            },
            onFinished: function(o, e) {
              o.onClose(1006, "Connection interrupted (" + e + ")", !1);
            }
          }, Zr = Qr, ei = {
            getReceiveURL: function(o, e) {
              return o.base + "/" + e + "/xhr" + o.queryString;
            },
            onHeartbeat: function() {
            },
            sendHeartbeat: function(o) {
              o.sendRaw("[]");
            },
            onFinished: function(o, e) {
              e === 200 ? o.reconnect() : o.onClose(1006, "Connection interrupted (" + e + ")", !1);
            }
          }, ti = ei, ni = {
            getRequest: function(o) {
              var e = N.getXHRAPI(), s = new e();
              return s.onreadystatechange = s.onprogress = function() {
                switch (s.readyState) {
                  case 3:
                    s.responseText && s.responseText.length > 0 && o.onChunk(s.status, s.responseText);
                    break;
                  case 4:
                    s.responseText && s.responseText.length > 0 && o.onChunk(s.status, s.responseText), o.emit("finished", s.status), o.close();
                    break;
                }
              }, s;
            },
            abortRequest: function(o) {
              o.onreadystatechange = null, o.abort();
            }
          }, ri = ni, ii = {
            createStreamingSocket(o) {
              return this.createSocket(Zr, o);
            },
            createPollingSocket(o) {
              return this.createSocket(ti, o);
            },
            createSocket(o, e) {
              return new Yr(o, e);
            },
            createXHR(o, e) {
              return this.createRequest(ri, o, e);
            },
            createRequest(o, e, s) {
              return new Gr(o, e, s);
            }
          }, jt = ii;
          jt.createXDR = function(o, e) {
            return this.createRequest(zr, o, e);
          };
          var si = jt, oi = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: p,
            getDefaultStrategy: Ur,
            Transports: pr,
            transportConnectionInitializer: jr,
            HTTPFactory: si,
            TimelineTransport: nr,
            getXHRAPI() {
              return window.XMLHttpRequest;
            },
            getWebSocketAPI() {
              return window.WebSocket || window.MozWebSocket;
            },
            setup(o) {
              window.Pusher = o;
              var e = () => {
                this.onDocumentBody(o.ready);
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
            onDocumentBody(o) {
              document.body ? o() : setTimeout(() => {
                this.onDocumentBody(o);
              }, 0);
            },
            createJSONPRequest(o, e) {
              return new Zn(o, e);
            },
            createScriptRequest(o) {
              return new Qn(o);
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
              var o = this.getXHRAPI();
              return new o();
            },
            createMicrosoftXHR() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            },
            getNetwork() {
              return yr;
            },
            createWebSocket(o) {
              var e = this.getWebSocketAPI();
              return new e(o);
            },
            createSocketRequest(o, e) {
              if (this.isXHRSupported())
                return this.HTTPFactory.createXHR(o, e);
              if (this.isXDRSupported(e.indexOf("https:") === 0))
                return this.HTTPFactory.createXDR(o, e);
              throw "Cross-origin HTTP requests are not supported";
            },
            isXHRSupported() {
              var o = this.getXHRAPI();
              return !!o && new o().withCredentials !== void 0;
            },
            isXDRSupported(o) {
              var e = o ? "https:" : "http:", s = this.getProtocol();
              return !!window.XDomainRequest && s === e;
            },
            addUnloadListener(o) {
              window.addEventListener !== void 0 ? window.addEventListener("unload", o, !1) : window.attachEvent !== void 0 && window.attachEvent("onunload", o);
            },
            removeUnloadListener(o) {
              window.addEventListener !== void 0 ? window.removeEventListener("unload", o, !1) : window.detachEvent !== void 0 && window.detachEvent("onunload", o);
            },
            randomInt(o) {
              return Math.floor(function() {
                return (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
              }() * o);
            }
          }, N = oi, Qe;
          (function(o) {
            o[o.ERROR = 3] = "ERROR", o[o.INFO = 6] = "INFO", o[o.DEBUG = 7] = "DEBUG";
          })(Qe || (Qe = {}));
          var Pe = Qe;
          class ai {
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
          class ci {
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
          function Ht(o, e) {
            return K.defer(function() {
              e(o);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: li } = N;
          var hi = function(o, e, s, h, f, y) {
            var T = li[s];
            if (!T)
              throw new L(s);
            var P = (!o.enabledTransports || St(o.enabledTransports, e) !== -1) && (!o.disabledTransports || St(o.disabledTransports, e) === -1), M;
            return P ? (f = Object.assign({ ignoreNullOrigin: o.ignoreNullOrigin }, f), M = new ci(e, h, y ? y.getAssistant(T) : T, f)) : M = di, M;
          }, di = {
            isSupported: function() {
              return !1;
            },
            connect: function(o, e) {
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
          function fi(o) {
            if (o == null)
              throw "You must pass an options object";
            if (o.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in o && j.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const gi = (o, e) => {
            var s = "socket_id=" + encodeURIComponent(o.socketId);
            for (var h in e.params)
              s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(e.params[h]);
            if (e.paramsProvider != null) {
              let f = e.paramsProvider();
              for (var h in f)
                s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(f[h]);
            }
            return s;
          };
          var pi = (o) => {
            if (typeof N.getAuthorizers()[o.transport] > "u")
              throw `'${o.transport}' is not a recognized auth transport`;
            return (e, s) => {
              const h = gi(e, o);
              N.getAuthorizers()[o.transport](N, h, o, C.UserAuthentication, s);
            };
          };
          const mi = (o, e) => {
            var s = "socket_id=" + encodeURIComponent(o.socketId);
            s += "&channel_name=" + encodeURIComponent(o.channelName);
            for (var h in e.params)
              s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(e.params[h]);
            if (e.paramsProvider != null) {
              let f = e.paramsProvider();
              for (var h in f)
                s += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(f[h]);
            }
            return s;
          };
          var yi = (o) => {
            if (typeof N.getAuthorizers()[o.transport] > "u")
              throw `'${o.transport}' is not a recognized auth transport`;
            return (e, s) => {
              const h = mi(e, o);
              N.getAuthorizers()[o.transport](N, h, o, C.ChannelAuthorization, s);
            };
          };
          const vi = (o, e, s) => {
            const h = {
              authTransport: e.transport,
              authEndpoint: e.endpoint,
              auth: {
                params: e.params,
                headers: e.headers
              }
            };
            return (f, y) => {
              const T = o.channel(f.channelName);
              s(T, h).authorize(f.socketId, y);
            };
          };
          function bi(o, e) {
            let s = {
              activityTimeout: o.activityTimeout || u.activityTimeout,
              cluster: o.cluster,
              httpPath: o.httpPath || u.httpPath,
              httpPort: o.httpPort || u.httpPort,
              httpsPort: o.httpsPort || u.httpsPort,
              pongTimeout: o.pongTimeout || u.pongTimeout,
              statsHost: o.statsHost || u.stats_host,
              unavailableTimeout: o.unavailableTimeout || u.unavailableTimeout,
              wsPath: o.wsPath || u.wsPath,
              wsPort: o.wsPort || u.wsPort,
              wssPort: o.wssPort || u.wssPort,
              enableStats: Si(o),
              httpHost: wi(o),
              useTLS: _i(o),
              wsHost: ki(o),
              userAuthenticator: Ti(o),
              channelAuthorizer: Ai(o, e)
            };
            return "disabledTransports" in o && (s.disabledTransports = o.disabledTransports), "enabledTransports" in o && (s.enabledTransports = o.enabledTransports), "ignoreNullOrigin" in o && (s.ignoreNullOrigin = o.ignoreNullOrigin), "timelineParams" in o && (s.timelineParams = o.timelineParams), "nacl" in o && (s.nacl = o.nacl), s;
          }
          function wi(o) {
            return o.httpHost ? o.httpHost : o.cluster ? `sockjs-${o.cluster}.pusher.com` : u.httpHost;
          }
          function ki(o) {
            return o.wsHost ? o.wsHost : Ci(o.cluster);
          }
          function Ci(o) {
            return `ws-${o}.pusher.com`;
          }
          function _i(o) {
            return N.getProtocol() === "https:" ? !0 : o.forceTLS !== !1;
          }
          function Si(o) {
            return "enableStats" in o ? o.enableStats : "disableStats" in o ? !o.disableStats : !1;
          }
          function Ti(o) {
            const e = Object.assign(Object.assign({}, u.userAuthentication), o.userAuthentication);
            return "customHandler" in e && e.customHandler != null ? e.customHandler : pi(e);
          }
          function Ii(o, e) {
            let s;
            return "channelAuthorization" in o ? s = Object.assign(Object.assign({}, u.channelAuthorization), o.channelAuthorization) : (s = {
              transport: o.authTransport || u.authTransport,
              endpoint: o.authEndpoint || u.authEndpoint
            }, "auth" in o && ("params" in o.auth && (s.params = o.auth.params), "headers" in o.auth && (s.headers = o.auth.headers)), "authorizer" in o && (s.customHandler = vi(e, s, o.authorizer))), s;
          }
          function Ai(o, e) {
            const s = Ii(o, e);
            return "customHandler" in s && s.customHandler != null ? s.customHandler : yi(s);
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
          function Ri() {
            let o, e;
            return { promise: new Promise((h, f) => {
              o = h, e = f;
            }), resolve: o, reject: e };
          }
          var Pi = Ri;
          class Li extends ne {
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
              this.serverToUserChannel = new Ke(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((s, h) => {
                s.indexOf("pusher_internal:") === 0 || s.indexOf("pusher:") === 0 || this.emit(s, h);
              }), e(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: e, resolve: s } = Pi();
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
              return Tt(Et({ ws: N.Transports.ws }, function(e) {
                return e.isSupported({});
              }));
            }
            constructor(e, s) {
              Mi(e), fi(s), this.key = e, this.config = bi(s, this), this.channels = re.createChannels(), this.global_emitter = new ne(), this.sessionID = N.randomInt(1e9), this.timeline = new ai(this.key, this.sessionID, {
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
              var h = (f) => N.getDefaultStrategy(this.config, f, hi);
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
              }), G.instances.push(this), this.timeline.info({ instances: G.instances.length }), this.user = new Li(this), G.isReady && this.connect();
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
                this.timelineSenderTimer = new Un(6e4, function() {
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
          function Mi(o) {
            if (o == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          N.setup(G);
        }
        /******/
      ])
    );
  });
})(nn);
var Vi = nn.exports;
const Ki = /* @__PURE__ */ Gi(Vi), R = "cpr-agent", rn = "itdsiqtx8cpskowawl1p", $i = "https://agent.surrealdisco.co.uk", be = {
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
}, Ji = [6, 12, 25, 50, 100, 200, 400, 800], Xt = {
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
function sn(c) {
  var n, i;
  return Xt[(n = c == null ? void 0 : c.system) == null ? void 0 : n.weaponType] || Xt[(i = c == null ? void 0 : c.system) == null ? void 0 : i.variety] || "Pistol";
}
function on(c, n) {
  const i = Ji.findIndex((t) => n <= t);
  let r = i !== -1 ? be[c][i] : 99;
  return Array.isArray(be[c]) && typeof be[c][0] == "string" && (r = be[c][Math.min(i !== -1 ? i : 0, be[c].length - 1)]), r;
}
function we(c) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, we(c);
}
function z(c, n) {
  if (!(c instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Wi(c, n) {
  for (var i = 0; i < n.length; i++) {
    var r = n[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(c, r.key, r);
  }
}
function q(c, n, i) {
  return n && Wi(c.prototype, n), Object.defineProperty(c, "prototype", {
    writable: !1
  }), c;
}
function Ce() {
  return Ce = Object.assign || function(c) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (c[r] = i[r]);
    }
    return c;
  }, Ce.apply(this, arguments);
}
function X(c, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: c,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(c, "prototype", {
    writable: !1
  }), n && ct(c, n);
}
function Oe(c) {
  return Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, Oe(c);
}
function ct(c, n) {
  return ct = Object.setPrototypeOf || function(r, t) {
    return r.__proto__ = t, r;
  }, ct(c, n);
}
function Xi() {
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
function Qi(c, n) {
  if (n && (typeof n == "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Yi(c);
}
function Y(c) {
  var n = Xi();
  return function() {
    var r = Oe(c), t;
    if (n) {
      var a = Oe(this).constructor;
      t = Reflect.construct(r, arguments, a);
    } else
      t = r.apply(this, arguments);
    return Qi(this, t);
  };
}
var pt = /* @__PURE__ */ function() {
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
}(), an = /* @__PURE__ */ function() {
  function c(n) {
    z(this, c), this.namespace = n;
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
function Zi(c) {
  try {
    new c();
  } catch (n) {
    if (n.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var mt = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i(r, t, a) {
    var l;
    return z(this, i), l = n.call(this), l.name = t, l.pusher = r, l.options = a, l.eventFormatter = new an(l.options.namespace), l.subscribe(), l;
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
    value: function(t, a) {
      return this.on(this.eventFormatter.format(t), a), this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(t) {
      var a = this;
      return this.subscription.bind_global(function(l, d) {
        if (!l.startsWith("pusher:")) {
          var u = a.options.namespace.replace(/\./g, "\\"), g = l.startsWith(u) ? l.substring(u.length + 1) : "." + l;
          t(g, d);
        }
      }), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(t, a) {
      return a ? this.subscription.unbind(this.eventFormatter.format(t), a) : this.subscription.unbind(this.eventFormatter.format(t)), this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */
  }, {
    key: "stopListeningToAll",
    value: function(t) {
      return t ? this.subscription.unbind_global(t) : this.subscription.unbind_global(), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(t) {
      return this.on("pusher:subscription_succeeded", function() {
        t();
      }), this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */
  }, {
    key: "error",
    value: function(t) {
      return this.on("pusher:subscription_error", function(a) {
        t(a);
      }), this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(t, a) {
      return this.subscription.bind(t, a), this;
    }
  }]), i;
}(pt), cn = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(t, a) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(t), a), this;
      }
    )
  }]), i;
}(mt), es = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(t, a) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(t), a), this;
      }
    )
  }]), i;
}(mt), ts = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(t) {
        return this.on("pusher:subscription_succeeded", function(a) {
          t(Object.keys(a.members).map(function(l) {
            return a.members[l];
          }));
        }), this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(t) {
      return this.on("pusher:member_added", function(a) {
        t(a.info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(t, a) {
      return this.pusher.channels.channels[this.name].trigger("client-".concat(t), a), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(t) {
      return this.on("pusher:member_removed", function(a) {
        t(a.info);
      }), this;
    }
  }]), i;
}(cn), ln = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i(r, t, a) {
    var l;
    return z(this, i), l = n.call(this), l.events = {}, l.listeners = {}, l.name = t, l.socket = r, l.options = a, l.eventFormatter = new an(l.options.namespace), l.subscribe(), l;
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
    value: function(t, a) {
      return this.on(this.eventFormatter.format(t), a), this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(t, a) {
      return this.unbindEvent(this.eventFormatter.format(t), a), this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(t) {
      return this.on("connect", function(a) {
        t(a);
      }), this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(t) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */
  }, {
    key: "on",
    value: function(t, a) {
      var l = this;
      return this.listeners[t] = this.listeners[t] || [], this.events[t] || (this.events[t] = function(d, u) {
        l.name === d && l.listeners[t] && l.listeners[t].forEach(function(g) {
          return g(u);
        });
      }, this.socket.on(t, this.events[t])), this.listeners[t].push(a), this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */
  }, {
    key: "unbind",
    value: function() {
      var t = this;
      Object.keys(this.events).forEach(function(a) {
        t.unbindEvent(a);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */
  }, {
    key: "unbindEvent",
    value: function(t, a) {
      this.listeners[t] = this.listeners[t] || [], a && (this.listeners[t] = this.listeners[t].filter(function(l) {
        return l !== a;
      })), (!a || this.listeners[t].length === 0) && (this.events[t] && (this.socket.removeListener(t, this.events[t]), delete this.events[t]), delete this.listeners[t]);
    }
  }]), i;
}(pt), un = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(t, a) {
        return this.socket.emit("client event", {
          channel: this.name,
          event: "client-".concat(t),
          data: a
        }), this;
      }
    )
  }]), i;
}(ln), ns = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(t) {
        return this.on("presence:subscribed", function(a) {
          t(a.map(function(l) {
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
    value: function(t) {
      return this.on("presence:joining", function(a) {
        return t(a.user_info);
      }), this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(t, a) {
      return this.socket.emit("client event", {
        channel: this.name,
        event: "client-".concat(t),
        data: a
      }), this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(t) {
      return this.on("presence:leaving", function(a) {
        return t(a.user_info);
      }), this;
    }
  }]), i;
}(un), xe = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
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
    value: function(t, a) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */
  }, {
    key: "listenToAll",
    value: function(t) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */
  }, {
    key: "stopListening",
    value: function(t, a) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */
  }, {
    key: "subscribed",
    value: function(t) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */
  }, {
    key: "error",
    value: function(t) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */
  }, {
    key: "on",
    value: function(t, a) {
      return this;
    }
  }]), i;
}(pt), hn = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(t, a) {
        return this;
      }
    )
  }]), i;
}(xe), rs = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(t, a) {
        return this;
      }
    )
  }]), i;
}(xe), is = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    return z(this, i), n.apply(this, arguments);
  }
  return q(i, [{
    key: "here",
    value: (
      /**
       * Register a callback to be called anytime the member list changes.
       */
      function(t) {
        return this;
      }
    )
    /**
     * Listen for someone joining the channel.
     */
  }, {
    key: "joining",
    value: function(t) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */
  }, {
    key: "whisper",
    value: function(t, a) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */
  }, {
    key: "leaving",
    value: function(t) {
      return this;
    }
  }]), i;
}(hn), yt = /* @__PURE__ */ function() {
  function c(n) {
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
    }, this.setOptions(n), this.connect();
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
}(), Yt = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    var r;
    return z(this, i), r = n.apply(this, arguments), r.channels = {}, r;
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
    value: function(t, a, l) {
      return this.channel(t).listen(a, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(t) {
      return this.channels[t] || (this.channels[t] = new mt(this.pusher, t, this.options)), this.channels[t];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(t) {
      return this.channels["private-" + t] || (this.channels["private-" + t] = new cn(this.pusher, "private-" + t, this.options)), this.channels["private-" + t];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(t) {
      return this.channels["private-encrypted-" + t] || (this.channels["private-encrypted-" + t] = new es(this.pusher, "private-encrypted-" + t, this.options)), this.channels["private-encrypted-" + t];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(t) {
      return this.channels["presence-" + t] || (this.channels["presence-" + t] = new ts(this.pusher, "presence-" + t, this.options)), this.channels["presence-" + t];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(t) {
      var a = this, l = [t, "private-" + t, "private-encrypted-" + t, "presence-" + t];
      l.forEach(function(d, u) {
        a.leaveChannel(d);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(t) {
      this.channels[t] && (this.channels[t].unsubscribe(), delete this.channels[t]);
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
}(yt), Qt = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    var r;
    return z(this, i), r = n.apply(this, arguments), r.channels = {}, r;
  }
  return q(i, [{
    key: "connect",
    value: function() {
      var t = this, a = this.getSocketIO();
      return this.socket = a(this.options.host, this.options), this.socket.on("reconnect", function() {
        Object.values(t.channels).forEach(function(l) {
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
    value: function(t, a, l) {
      return this.channel(t).listen(a, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(t) {
      return this.channels[t] || (this.channels[t] = new ln(this.socket, t, this.options)), this.channels[t];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(t) {
      return this.channels["private-" + t] || (this.channels["private-" + t] = new un(this.socket, "private-" + t, this.options)), this.channels["private-" + t];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(t) {
      return this.channels["presence-" + t] || (this.channels["presence-" + t] = new ns(this.socket, "presence-" + t, this.options)), this.channels["presence-" + t];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(t) {
      var a = this, l = [t, "private-" + t, "presence-" + t];
      l.forEach(function(d) {
        a.leaveChannel(d);
      });
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(t) {
      this.channels[t] && (this.channels[t].unsubscribe(), delete this.channels[t]);
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
}(yt), ss = /* @__PURE__ */ function(c) {
  X(i, c);
  var n = Y(i);
  function i() {
    var r;
    return z(this, i), r = n.apply(this, arguments), r.channels = {}, r;
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
    value: function(t, a, l) {
      return new xe();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(t) {
      return new xe();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(t) {
      return new hn();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(t) {
      return new rs();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(t) {
      return new is();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(t) {
    }
    /**
     * Leave the given channel.
     */
  }, {
    key: "leaveChannel",
    value: function(t) {
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
}(yt), os = /* @__PURE__ */ function() {
  function c(n) {
    z(this, c), this.options = n, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
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
        this.connector = new Yt(Ce(Ce({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new Yt(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Qt(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new ss(this.options);
      else if (typeof this.options.broadcaster == "function" && Zi(this.options.broadcaster))
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
    value: function(i, r, t) {
      return this.connector.listen(i, r, t);
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
      if (this.connector instanceof Qt)
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
      Vue.http.interceptors.push(function(r, t) {
        i.socketId() && r.headers.set("X-Socket-ID", i.socketId()), t();
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
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(r, t, a) {
        i.socketId() && a.setRequestHeader("X-Socket-Id", i.socketId());
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
function as(c, n = 6) {
  return !c || c.length <= n * 2 + 3 ? c : `${c.substring(0, n)}...${c.substring(c.length - n)}`;
}
function lt(c, n, i = {}) {
  for (let r in c) {
    const t = c[r];
    t !== null && typeof t == "object" && !Array.isArray(t) && !(t instanceof foundry.utils.Color) ? lt(t, `${n}${r}.`, i) : i[`${n}${r}`] = t;
  }
  return i;
}
async function cs(c, n, i, r = null) {
  return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${n}`, "color: #00ffff; font-weight: bold;"), c._isCapturingRoll = !0, game.settings.get("core", "rollMode"), r && await game.settings.set("core", "rollMode", r), new Promise(async (t, a) => {
    let l = !1;
    const d = renderTemplate, u = function(g, p) {
      return g && typeof g == "string" && g.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${g}`, "color: #00ff00;", p), l = !0, renderTemplate = d, t({
        success: !0,
        total: p.resultTotal,
        isCriticalSuccess: p.wasCritSuccess ? p.wasCritSuccess() : p.isCriticalSuccess || !1,
        isCriticalFailure: p.wasCritFail ? p.wasCritFail() : p.isCriticalFailure || !1,
        label: p.rollTitle,
        rollMode: r || game.settings.get("core", "rollMode"),
        rawRoll: p
      })), d.apply(this, arguments);
    };
    renderTemplate = u, setTimeout(async () => {
      l || (renderTemplate = d, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), t({ success: !1, error: "Timed out waiting for render" }));
    }, 5e3);
    try {
      await i();
    } catch {
      renderTemplate = d, t({ success: !1, error: "Trigger failed" });
    }
  });
}
var Se = {}, ls = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, dn = {}, Q = {};
let vt;
const us = [
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
Q.getSymbolSize = function(n) {
  if (!n) throw new Error('"version" cannot be null or undefined');
  if (n < 1 || n > 40) throw new Error('"version" should be in range from 1 to 40');
  return n * 4 + 17;
};
Q.getSymbolTotalCodewords = function(n) {
  return us[n];
};
Q.getBCHDigit = function(c) {
  let n = 0;
  for (; c !== 0; )
    n++, c >>>= 1;
  return n;
};
Q.setToSJISFunction = function(n) {
  if (typeof n != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  vt = n;
};
Q.isKanjiModeEnabled = function() {
  return typeof vt < "u";
};
Q.toSJIS = function(n) {
  return vt(n);
};
var Ue = {};
(function(c) {
  c.L = { bit: 1 }, c.M = { bit: 0 }, c.Q = { bit: 3 }, c.H = { bit: 2 };
  function n(i) {
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
  }, c.from = function(r, t) {
    if (c.isValid(r))
      return r;
    try {
      return n(r);
    } catch {
      return t;
    }
  };
})(Ue);
function fn() {
  this.buffer = [], this.length = 0;
}
fn.prototype = {
  get: function(c) {
    const n = Math.floor(c / 8);
    return (this.buffer[n] >>> 7 - c % 8 & 1) === 1;
  },
  put: function(c, n) {
    for (let i = 0; i < n; i++)
      this.putBit((c >>> n - i - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(c) {
    const n = Math.floor(this.length / 8);
    this.buffer.length <= n && this.buffer.push(0), c && (this.buffer[n] |= 128 >>> this.length % 8), this.length++;
  }
};
var hs = fn;
function Te(c) {
  if (!c || c < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = c, this.data = new Uint8Array(c * c), this.reservedBit = new Uint8Array(c * c);
}
Te.prototype.set = function(c, n, i, r) {
  const t = c * this.size + n;
  this.data[t] = i, r && (this.reservedBit[t] = !0);
};
Te.prototype.get = function(c, n) {
  return this.data[c * this.size + n];
};
Te.prototype.xor = function(c, n, i) {
  this.data[c * this.size + n] ^= i;
};
Te.prototype.isReserved = function(c, n) {
  return this.reservedBit[c * this.size + n];
};
var ds = Te, gn = {};
(function(c) {
  const n = Q.getSymbolSize;
  c.getRowColCoords = function(r) {
    if (r === 1) return [];
    const t = Math.floor(r / 7) + 2, a = n(r), l = a === 145 ? 26 : Math.ceil((a - 13) / (2 * t - 2)) * 2, d = [a - 7];
    for (let u = 1; u < t - 1; u++)
      d[u] = d[u - 1] - l;
    return d.push(6), d.reverse();
  }, c.getPositions = function(r) {
    const t = [], a = c.getRowColCoords(r), l = a.length;
    for (let d = 0; d < l; d++)
      for (let u = 0; u < l; u++)
        d === 0 && u === 0 || // top-left
        d === 0 && u === l - 1 || // bottom-left
        d === l - 1 && u === 0 || t.push([a[d], a[u]]);
    return t;
  };
})(gn);
var pn = {};
const fs = Q.getSymbolSize, Zt = 7;
pn.getPositions = function(n) {
  const i = fs(n);
  return [
    // top-left
    [0, 0],
    // top-right
    [i - Zt, 0],
    // bottom-left
    [0, i - Zt]
  ];
};
var mn = {};
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
  const n = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  c.isValid = function(t) {
    return t != null && t !== "" && !isNaN(t) && t >= 0 && t <= 7;
  }, c.from = function(t) {
    return c.isValid(t) ? parseInt(t, 10) : void 0;
  }, c.getPenaltyN1 = function(t) {
    const a = t.size;
    let l = 0, d = 0, u = 0, g = null, p = null;
    for (let k = 0; k < a; k++) {
      d = u = 0, g = p = null;
      for (let b = 0; b < a; b++) {
        let m = t.get(k, b);
        m === g ? d++ : (d >= 5 && (l += n.N1 + (d - 5)), g = m, d = 1), m = t.get(b, k), m === p ? u++ : (u >= 5 && (l += n.N1 + (u - 5)), p = m, u = 1);
      }
      d >= 5 && (l += n.N1 + (d - 5)), u >= 5 && (l += n.N1 + (u - 5));
    }
    return l;
  }, c.getPenaltyN2 = function(t) {
    const a = t.size;
    let l = 0;
    for (let d = 0; d < a - 1; d++)
      for (let u = 0; u < a - 1; u++) {
        const g = t.get(d, u) + t.get(d, u + 1) + t.get(d + 1, u) + t.get(d + 1, u + 1);
        (g === 4 || g === 0) && l++;
      }
    return l * n.N2;
  }, c.getPenaltyN3 = function(t) {
    const a = t.size;
    let l = 0, d = 0, u = 0;
    for (let g = 0; g < a; g++) {
      d = u = 0;
      for (let p = 0; p < a; p++)
        d = d << 1 & 2047 | t.get(g, p), p >= 10 && (d === 1488 || d === 93) && l++, u = u << 1 & 2047 | t.get(p, g), p >= 10 && (u === 1488 || u === 93) && l++;
    }
    return l * n.N3;
  }, c.getPenaltyN4 = function(t) {
    let a = 0;
    const l = t.data.length;
    for (let u = 0; u < l; u++) a += t.data[u];
    return Math.abs(Math.ceil(a * 100 / l / 5) - 10) * n.N4;
  };
  function i(r, t, a) {
    switch (r) {
      case c.Patterns.PATTERN000:
        return (t + a) % 2 === 0;
      case c.Patterns.PATTERN001:
        return t % 2 === 0;
      case c.Patterns.PATTERN010:
        return a % 3 === 0;
      case c.Patterns.PATTERN011:
        return (t + a) % 3 === 0;
      case c.Patterns.PATTERN100:
        return (Math.floor(t / 2) + Math.floor(a / 3)) % 2 === 0;
      case c.Patterns.PATTERN101:
        return t * a % 2 + t * a % 3 === 0;
      case c.Patterns.PATTERN110:
        return (t * a % 2 + t * a % 3) % 2 === 0;
      case c.Patterns.PATTERN111:
        return (t * a % 3 + (t + a) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  c.applyMask = function(t, a) {
    const l = a.size;
    for (let d = 0; d < l; d++)
      for (let u = 0; u < l; u++)
        a.isReserved(u, d) || a.xor(u, d, i(t, u, d));
  }, c.getBestMask = function(t, a) {
    const l = Object.keys(c.Patterns).length;
    let d = 0, u = 1 / 0;
    for (let g = 0; g < l; g++) {
      a(g), c.applyMask(g, t);
      const p = c.getPenaltyN1(t) + c.getPenaltyN2(t) + c.getPenaltyN3(t) + c.getPenaltyN4(t);
      c.applyMask(g, t), p < u && (u = p, d = g);
    }
    return d;
  };
})(mn);
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
je.getBlocksCount = function(n, i) {
  switch (i) {
    case ie.L:
      return Me[(n - 1) * 4 + 0];
    case ie.M:
      return Me[(n - 1) * 4 + 1];
    case ie.Q:
      return Me[(n - 1) * 4 + 2];
    case ie.H:
      return Me[(n - 1) * 4 + 3];
    default:
      return;
  }
};
je.getTotalCodewordsCount = function(n, i) {
  switch (i) {
    case ie.L:
      return Ne[(n - 1) * 4 + 0];
    case ie.M:
      return Ne[(n - 1) * 4 + 1];
    case ie.Q:
      return Ne[(n - 1) * 4 + 2];
    case ie.H:
      return Ne[(n - 1) * 4 + 3];
    default:
      return;
  }
};
var yn = {}, He = {};
const ke = new Uint8Array(512), Be = new Uint8Array(256);
(function() {
  let n = 1;
  for (let i = 0; i < 255; i++)
    ke[i] = n, Be[n] = i, n <<= 1, n & 256 && (n ^= 285);
  for (let i = 255; i < 512; i++)
    ke[i] = ke[i - 255];
})();
He.log = function(n) {
  if (n < 1) throw new Error("log(" + n + ")");
  return Be[n];
};
He.exp = function(n) {
  return ke[n];
};
He.mul = function(n, i) {
  return n === 0 || i === 0 ? 0 : ke[Be[n] + Be[i]];
};
(function(c) {
  const n = He;
  c.mul = function(r, t) {
    const a = new Uint8Array(r.length + t.length - 1);
    for (let l = 0; l < r.length; l++)
      for (let d = 0; d < t.length; d++)
        a[l + d] ^= n.mul(r[l], t[d]);
    return a;
  }, c.mod = function(r, t) {
    let a = new Uint8Array(r);
    for (; a.length - t.length >= 0; ) {
      const l = a[0];
      for (let u = 0; u < t.length; u++)
        a[u] ^= n.mul(t[u], l);
      let d = 0;
      for (; d < a.length && a[d] === 0; ) d++;
      a = a.slice(d);
    }
    return a;
  }, c.generateECPolynomial = function(r) {
    let t = new Uint8Array([1]);
    for (let a = 0; a < r; a++)
      t = c.mul(t, new Uint8Array([1, n.exp(a)]));
    return t;
  };
})(yn);
const vn = yn;
function bt(c) {
  this.genPoly = void 0, this.degree = c, this.degree && this.initialize(this.degree);
}
bt.prototype.initialize = function(n) {
  this.degree = n, this.genPoly = vn.generateECPolynomial(this.degree);
};
bt.prototype.encode = function(n) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const i = new Uint8Array(n.length + this.degree);
  i.set(n);
  const r = vn.mod(i, this.genPoly), t = this.degree - r.length;
  if (t > 0) {
    const a = new Uint8Array(this.degree);
    return a.set(r, t), a;
  }
  return r;
};
var gs = bt, bn = {}, se = {}, wt = {};
wt.isValid = function(n) {
  return !isNaN(n) && n >= 1 && n <= 40;
};
var ee = {};
const wn = "[0-9]+", ps = "[A-Z $%*+\\-./:]+";
let _e = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
_e = _e.replace(/u/g, "\\u");
const ms = "(?:(?![A-Z0-9 $%*+\\-./:]|" + _e + `)(?:.|[\r
]))+`;
ee.KANJI = new RegExp(_e, "g");
ee.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
ee.BYTE = new RegExp(ms, "g");
ee.NUMERIC = new RegExp(wn, "g");
ee.ALPHANUMERIC = new RegExp(ps, "g");
const ys = new RegExp("^" + _e + "$"), vs = new RegExp("^" + wn + "$"), bs = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
ee.testKanji = function(n) {
  return ys.test(n);
};
ee.testNumeric = function(n) {
  return vs.test(n);
};
ee.testAlphanumeric = function(n) {
  return bs.test(n);
};
(function(c) {
  const n = wt, i = ee;
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
  }, c.getCharCountIndicator = function(a, l) {
    if (!a.ccBits) throw new Error("Invalid mode: " + a);
    if (!n.isValid(l))
      throw new Error("Invalid version: " + l);
    return l >= 1 && l < 10 ? a.ccBits[0] : l < 27 ? a.ccBits[1] : a.ccBits[2];
  }, c.getBestModeForData = function(a) {
    return i.testNumeric(a) ? c.NUMERIC : i.testAlphanumeric(a) ? c.ALPHANUMERIC : i.testKanji(a) ? c.KANJI : c.BYTE;
  }, c.toString = function(a) {
    if (a && a.id) return a.id;
    throw new Error("Invalid mode");
  }, c.isValid = function(a) {
    return a && a.bit && a.ccBits;
  };
  function r(t) {
    if (typeof t != "string")
      throw new Error("Param is not a string");
    switch (t.toLowerCase()) {
      case "numeric":
        return c.NUMERIC;
      case "alphanumeric":
        return c.ALPHANUMERIC;
      case "kanji":
        return c.KANJI;
      case "byte":
        return c.BYTE;
      default:
        throw new Error("Unknown mode: " + t);
    }
  }
  c.from = function(a, l) {
    if (c.isValid(a))
      return a;
    try {
      return r(a);
    } catch {
      return l;
    }
  };
})(se);
(function(c) {
  const n = Q, i = je, r = Ue, t = se, a = wt, l = 7973, d = n.getBCHDigit(l);
  function u(b, m, _) {
    for (let C = 1; C <= 40; C++)
      if (m <= c.getCapacity(C, _, b))
        return C;
  }
  function g(b, m) {
    return t.getCharCountIndicator(b, m) + 4;
  }
  function p(b, m) {
    let _ = 0;
    return b.forEach(function(C) {
      const w = g(C.mode, m);
      _ += w + C.getBitsLength();
    }), _;
  }
  function k(b, m) {
    for (let _ = 1; _ <= 40; _++)
      if (p(b, _) <= c.getCapacity(_, m, t.MIXED))
        return _;
  }
  c.from = function(m, _) {
    return a.isValid(m) ? parseInt(m, 10) : _;
  }, c.getCapacity = function(m, _, C) {
    if (!a.isValid(m))
      throw new Error("Invalid QR Code version");
    typeof C > "u" && (C = t.BYTE);
    const w = n.getSymbolTotalCodewords(m), v = i.getTotalCodewordsCount(m, _), S = (w - v) * 8;
    if (C === t.MIXED) return S;
    const I = S - g(C, m);
    switch (C) {
      case t.NUMERIC:
        return Math.floor(I / 10 * 3);
      case t.ALPHANUMERIC:
        return Math.floor(I / 11 * 2);
      case t.KANJI:
        return Math.floor(I / 13);
      case t.BYTE:
      default:
        return Math.floor(I / 8);
    }
  }, c.getBestVersionForData = function(m, _) {
    let C;
    const w = r.from(_, r.M);
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
    if (!a.isValid(m) || m < 7)
      throw new Error("Invalid QR Code version");
    let _ = m << 12;
    for (; n.getBCHDigit(_) - d >= 0; )
      _ ^= l << n.getBCHDigit(_) - d;
    return m << 12 | _;
  };
})(bn);
var kn = {};
const ut = Q, Cn = 1335, ws = 21522, en = ut.getBCHDigit(Cn);
kn.getEncodedBits = function(n, i) {
  const r = n.bit << 3 | i;
  let t = r << 10;
  for (; ut.getBCHDigit(t) - en >= 0; )
    t ^= Cn << ut.getBCHDigit(t) - en;
  return (r << 10 | t) ^ ws;
};
var _n = {};
const ks = se;
function he(c) {
  this.mode = ks.NUMERIC, this.data = c.toString();
}
he.getBitsLength = function(n) {
  return 10 * Math.floor(n / 3) + (n % 3 ? n % 3 * 3 + 1 : 0);
};
he.prototype.getLength = function() {
  return this.data.length;
};
he.prototype.getBitsLength = function() {
  return he.getBitsLength(this.data.length);
};
he.prototype.write = function(n) {
  let i, r, t;
  for (i = 0; i + 3 <= this.data.length; i += 3)
    r = this.data.substr(i, 3), t = parseInt(r, 10), n.put(t, 10);
  const a = this.data.length - i;
  a > 0 && (r = this.data.substr(i), t = parseInt(r, 10), n.put(t, a * 3 + 1));
};
var Cs = he;
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
de.getBitsLength = function(n) {
  return 11 * Math.floor(n / 2) + 6 * (n % 2);
};
de.prototype.getLength = function() {
  return this.data.length;
};
de.prototype.getBitsLength = function() {
  return de.getBitsLength(this.data.length);
};
de.prototype.write = function(n) {
  let i;
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    let r = rt.indexOf(this.data[i]) * 45;
    r += rt.indexOf(this.data[i + 1]), n.put(r, 11);
  }
  this.data.length % 2 && n.put(rt.indexOf(this.data[i]), 6);
};
var Ss = de;
const Ts = se;
function fe(c) {
  this.mode = Ts.BYTE, typeof c == "string" ? this.data = new TextEncoder().encode(c) : this.data = new Uint8Array(c);
}
fe.getBitsLength = function(n) {
  return n * 8;
};
fe.prototype.getLength = function() {
  return this.data.length;
};
fe.prototype.getBitsLength = function() {
  return fe.getBitsLength(this.data.length);
};
fe.prototype.write = function(c) {
  for (let n = 0, i = this.data.length; n < i; n++)
    c.put(this.data[n], 8);
};
var Is = fe;
const As = se, Es = Q;
function ge(c) {
  this.mode = As.KANJI, this.data = c;
}
ge.getBitsLength = function(n) {
  return n * 13;
};
ge.prototype.getLength = function() {
  return this.data.length;
};
ge.prototype.getBitsLength = function() {
  return ge.getBitsLength(this.data.length);
};
ge.prototype.write = function(c) {
  let n;
  for (n = 0; n < this.data.length; n++) {
    let i = Es.toSJIS(this.data[n]);
    if (i >= 33088 && i <= 40956)
      i -= 33088;
    else if (i >= 57408 && i <= 60351)
      i -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[n] + `
Make sure your charset is UTF-8`
      );
    i = (i >>> 8 & 255) * 192 + (i & 255), c.put(i, 13);
  }
};
var Rs = ge, Sn = { exports: {} };
(function(c) {
  var n = {
    single_source_shortest_paths: function(i, r, t) {
      var a = {}, l = {};
      l[r] = 0;
      var d = n.PriorityQueue.make();
      d.push(r, 0);
      for (var u, g, p, k, b, m, _, C, w; !d.empty(); ) {
        u = d.pop(), g = u.value, k = u.cost, b = i[g] || {};
        for (p in b)
          b.hasOwnProperty(p) && (m = b[p], _ = k + m, C = l[p], w = typeof l[p] > "u", (w || C > _) && (l[p] = _, d.push(p, _), a[p] = g));
      }
      if (typeof t < "u" && typeof l[t] > "u") {
        var v = ["Could not find a path from ", r, " to ", t, "."].join("");
        throw new Error(v);
      }
      return a;
    },
    extract_shortest_path_from_predecessor_list: function(i, r) {
      for (var t = [], a = r; a; )
        t.push(a), i[a], a = i[a];
      return t.reverse(), t;
    },
    find_path: function(i, r, t) {
      var a = n.single_source_shortest_paths(i, r, t);
      return n.extract_shortest_path_from_predecessor_list(
        a,
        t
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(i) {
        var r = n.PriorityQueue, t = {}, a;
        i = i || {};
        for (a in r)
          r.hasOwnProperty(a) && (t[a] = r[a]);
        return t.queue = [], t.sorter = i.sorter || r.default_sorter, t;
      },
      default_sorter: function(i, r) {
        return i.cost - r.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(i, r) {
        var t = { value: i, cost: r };
        this.queue.push(t), this.queue.sort(this.sorter);
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
  c.exports = n;
})(Sn);
var Ps = Sn.exports;
(function(c) {
  const n = se, i = Cs, r = Ss, t = Is, a = Rs, l = ee, d = Q, u = Ps;
  function g(v) {
    return unescape(encodeURIComponent(v)).length;
  }
  function p(v, S, I) {
    const E = [];
    let A;
    for (; (A = v.exec(I)) !== null; )
      E.push({
        data: A[0],
        index: A.index,
        mode: S,
        length: A[0].length
      });
    return E;
  }
  function k(v) {
    const S = p(l.NUMERIC, n.NUMERIC, v), I = p(l.ALPHANUMERIC, n.ALPHANUMERIC, v);
    let E, A;
    return d.isKanjiModeEnabled() ? (E = p(l.BYTE, n.BYTE, v), A = p(l.KANJI, n.KANJI, v)) : (E = p(l.BYTE_KANJI, n.BYTE, v), A = []), S.concat(I, E, A).sort(function(O, x) {
      return O.index - x.index;
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
      case n.NUMERIC:
        return i.getBitsLength(v);
      case n.ALPHANUMERIC:
        return r.getBitsLength(v);
      case n.KANJI:
        return a.getBitsLength(v);
      case n.BYTE:
        return t.getBitsLength(v);
    }
  }
  function m(v) {
    return v.reduce(function(S, I) {
      const E = S.length - 1 >= 0 ? S[S.length - 1] : null;
      return E && E.mode === I.mode ? (S[S.length - 1].data += I.data, S) : (S.push(I), S);
    }, []);
  }
  function _(v) {
    const S = [];
    for (let I = 0; I < v.length; I++) {
      const E = v[I];
      switch (E.mode) {
        case n.NUMERIC:
          S.push([
            E,
            { data: E.data, mode: n.ALPHANUMERIC, length: E.length },
            { data: E.data, mode: n.BYTE, length: E.length }
          ]);
          break;
        case n.ALPHANUMERIC:
          S.push([
            E,
            { data: E.data, mode: n.BYTE, length: E.length }
          ]);
          break;
        case n.KANJI:
          S.push([
            E,
            { data: E.data, mode: n.BYTE, length: g(E.data) }
          ]);
          break;
        case n.BYTE:
          S.push([
            { data: E.data, mode: n.BYTE, length: g(E.data) }
          ]);
      }
    }
    return S;
  }
  function C(v, S) {
    const I = {}, E = { start: {} };
    let A = ["start"];
    for (let L = 0; L < v.length; L++) {
      const O = v[L], x = [];
      for (let U = 0; U < O.length; U++) {
        const F = O[U], Z = "" + L + U;
        x.push(Z), I[Z] = { node: F, lastCount: 0 }, E[Z] = {};
        for (let J = 0; J < A.length; J++) {
          const V = A[J];
          I[V] && I[V].node.mode === F.mode ? (E[V][Z] = b(I[V].lastCount + F.length, F.mode) - b(I[V].lastCount, F.mode), I[V].lastCount += F.length) : (I[V] && (I[V].lastCount = F.length), E[V][Z] = b(F.length, F.mode) + 4 + n.getCharCountIndicator(F.mode, S));
        }
      }
      A = x;
    }
    for (let L = 0; L < A.length; L++)
      E[A[L]].end = 0;
    return { map: E, table: I };
  }
  function w(v, S) {
    let I;
    const E = n.getBestModeForData(v);
    if (I = n.from(S, E), I !== n.BYTE && I.bit < E.bit)
      throw new Error('"' + v + '" cannot be encoded with mode ' + n.toString(I) + `.
 Suggested mode is: ` + n.toString(E));
    switch (I === n.KANJI && !d.isKanjiModeEnabled() && (I = n.BYTE), I) {
      case n.NUMERIC:
        return new i(v);
      case n.ALPHANUMERIC:
        return new r(v);
      case n.KANJI:
        return new a(v);
      case n.BYTE:
        return new t(v);
    }
  }
  c.fromArray = function(S) {
    return S.reduce(function(I, E) {
      return typeof E == "string" ? I.push(w(E, null)) : E.data && I.push(w(E.data, E.mode)), I;
    }, []);
  }, c.fromString = function(S, I) {
    const E = k(S, d.isKanjiModeEnabled()), A = _(E), L = C(A, I), O = u.find_path(L.map, "start", "end"), x = [];
    for (let U = 1; U < O.length - 1; U++)
      x.push(L.table[O[U]].node);
    return c.fromArray(m(x));
  }, c.rawSplit = function(S) {
    return c.fromArray(
      k(S, d.isKanjiModeEnabled())
    );
  };
})(_n);
const ze = Q, it = Ue, Ls = hs, Ms = ds, Ns = gn, Os = pn, ht = mn, dt = je, xs = gs, De = bn, Bs = kn, Ds = se, st = _n;
function Fs(c, n) {
  const i = c.size, r = Os.getPositions(n);
  for (let t = 0; t < r.length; t++) {
    const a = r[t][0], l = r[t][1];
    for (let d = -1; d <= 7; d++)
      if (!(a + d <= -1 || i <= a + d))
        for (let u = -1; u <= 7; u++)
          l + u <= -1 || i <= l + u || (d >= 0 && d <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (d === 0 || d === 6) || d >= 2 && d <= 4 && u >= 2 && u <= 4 ? c.set(a + d, l + u, !0, !0) : c.set(a + d, l + u, !1, !0));
  }
}
function Us(c) {
  const n = c.size;
  for (let i = 8; i < n - 8; i++) {
    const r = i % 2 === 0;
    c.set(i, 6, r, !0), c.set(6, i, r, !0);
  }
}
function js(c, n) {
  const i = Ns.getPositions(n);
  for (let r = 0; r < i.length; r++) {
    const t = i[r][0], a = i[r][1];
    for (let l = -2; l <= 2; l++)
      for (let d = -2; d <= 2; d++)
        l === -2 || l === 2 || d === -2 || d === 2 || l === 0 && d === 0 ? c.set(t + l, a + d, !0, !0) : c.set(t + l, a + d, !1, !0);
  }
}
function Hs(c, n) {
  const i = c.size, r = De.getEncodedBits(n);
  let t, a, l;
  for (let d = 0; d < 18; d++)
    t = Math.floor(d / 3), a = d % 3 + i - 8 - 3, l = (r >> d & 1) === 1, c.set(t, a, l, !0), c.set(a, t, l, !0);
}
function ot(c, n, i) {
  const r = c.size, t = Bs.getEncodedBits(n, i);
  let a, l;
  for (a = 0; a < 15; a++)
    l = (t >> a & 1) === 1, a < 6 ? c.set(a, 8, l, !0) : a < 8 ? c.set(a + 1, 8, l, !0) : c.set(r - 15 + a, 8, l, !0), a < 8 ? c.set(8, r - a - 1, l, !0) : a < 9 ? c.set(8, 15 - a - 1 + 1, l, !0) : c.set(8, 15 - a - 1, l, !0);
  c.set(r - 8, 8, 1, !0);
}
function zs(c, n) {
  const i = c.size;
  let r = -1, t = i - 1, a = 7, l = 0;
  for (let d = i - 1; d > 0; d -= 2)
    for (d === 6 && d--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!c.isReserved(t, d - u)) {
          let g = !1;
          l < n.length && (g = (n[l] >>> a & 1) === 1), c.set(t, d - u, g), a--, a === -1 && (l++, a = 7);
        }
      if (t += r, t < 0 || i <= t) {
        t -= r, r = -r;
        break;
      }
    }
}
function qs(c, n, i) {
  const r = new Ls();
  i.forEach(function(u) {
    r.put(u.mode.bit, 4), r.put(u.getLength(), Ds.getCharCountIndicator(u.mode, c)), u.write(r);
  });
  const t = ze.getSymbolTotalCodewords(c), a = dt.getTotalCodewordsCount(c, n), l = (t - a) * 8;
  for (r.getLengthInBits() + 4 <= l && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const d = (l - r.getLengthInBits()) / 8;
  for (let u = 0; u < d; u++)
    r.put(u % 2 ? 17 : 236, 8);
  return Gs(r, c, n);
}
function Gs(c, n, i) {
  const r = ze.getSymbolTotalCodewords(n), t = dt.getTotalCodewordsCount(n, i), a = r - t, l = dt.getBlocksCount(n, i), d = r % l, u = l - d, g = Math.floor(r / l), p = Math.floor(a / l), k = p + 1, b = g - p, m = new xs(b);
  let _ = 0;
  const C = new Array(l), w = new Array(l);
  let v = 0;
  const S = new Uint8Array(c.buffer);
  for (let O = 0; O < l; O++) {
    const x = O < u ? p : k;
    C[O] = S.slice(_, _ + x), w[O] = m.encode(C[O]), _ += x, v = Math.max(v, x);
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
function Vs(c, n, i, r) {
  let t;
  if (Array.isArray(c))
    t = st.fromArray(c);
  else if (typeof c == "string") {
    let g = n;
    if (!g) {
      const p = st.rawSplit(c);
      g = De.getBestVersionForData(p, i);
    }
    t = st.fromString(c, g || 40);
  } else
    throw new Error("Invalid data");
  const a = De.getBestVersionForData(t, i);
  if (!a)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!n)
    n = a;
  else if (n < a)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + a + `.
`
    );
  const l = qs(n, i, t), d = ze.getSymbolSize(n), u = new Ms(d);
  return Fs(u, n), Us(u), js(u, n), ot(u, i, 0), n >= 7 && Hs(u, n), zs(u, l), isNaN(r) && (r = ht.getBestMask(
    u,
    ot.bind(null, u, i)
  )), ht.applyMask(r, u), ot(u, i, r), {
    modules: u,
    version: n,
    errorCorrectionLevel: i,
    maskPattern: r,
    segments: t
  };
}
dn.create = function(n, i) {
  if (typeof n > "u" || n === "")
    throw new Error("No input text");
  let r = it.M, t, a;
  return typeof i < "u" && (r = it.from(i.errorCorrectionLevel, it.M), t = De.from(i.version), a = ht.from(i.maskPattern), i.toSJISFunc && ze.setToSJISFunction(i.toSJISFunc)), Vs(n, t, r, a);
};
var Tn = {}, kt = {};
(function(c) {
  function n(i) {
    if (typeof i == "number" && (i = i.toString()), typeof i != "string")
      throw new Error("Color should be defined as hex string");
    let r = i.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + i);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(a) {
      return [a, a];
    }))), r.length === 6 && r.push("F", "F");
    const t = parseInt(r.join(""), 16);
    return {
      r: t >> 24 & 255,
      g: t >> 16 & 255,
      b: t >> 8 & 255,
      a: t & 255,
      hex: "#" + r.slice(0, 6).join("")
    };
  }
  c.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const t = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, a = r.width && r.width >= 21 ? r.width : void 0, l = r.scale || 4;
    return {
      width: a,
      scale: a ? 4 : l,
      margin: t,
      color: {
        dark: n(r.color.dark || "#000000ff"),
        light: n(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    };
  }, c.getScale = function(r, t) {
    return t.width && t.width >= r + t.margin * 2 ? t.width / (r + t.margin * 2) : t.scale;
  }, c.getImageWidth = function(r, t) {
    const a = c.getScale(r, t);
    return Math.floor((r + t.margin * 2) * a);
  }, c.qrToImageData = function(r, t, a) {
    const l = t.modules.size, d = t.modules.data, u = c.getScale(l, a), g = Math.floor((l + a.margin * 2) * u), p = a.margin * u, k = [a.color.light, a.color.dark];
    for (let b = 0; b < g; b++)
      for (let m = 0; m < g; m++) {
        let _ = (b * g + m) * 4, C = a.color.light;
        if (b >= p && m >= p && b < g - p && m < g - p) {
          const w = Math.floor((b - p) / u), v = Math.floor((m - p) / u);
          C = k[d[w * l + v] ? 1 : 0];
        }
        r[_++] = C.r, r[_++] = C.g, r[_++] = C.b, r[_] = C.a;
      }
  };
})(kt);
(function(c) {
  const n = kt;
  function i(t, a, l) {
    t.clearRect(0, 0, a.width, a.height), a.style || (a.style = {}), a.height = l, a.width = l, a.style.height = l + "px", a.style.width = l + "px";
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  c.render = function(a, l, d) {
    let u = d, g = l;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (g = r()), u = n.getOptions(u);
    const p = n.getImageWidth(a.modules.size, u), k = g.getContext("2d"), b = k.createImageData(p, p);
    return n.qrToImageData(b.data, a, u), i(k, g, p), k.putImageData(b, 0, 0), g;
  }, c.renderToDataURL = function(a, l, d) {
    let u = d;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
    const g = c.render(a, l, u), p = u.type || "image/png", k = u.rendererOpts || {};
    return g.toDataURL(p, k.quality);
  };
})(Tn);
var In = {};
const Ks = kt;
function tn(c, n) {
  const i = c.a / 255, r = n + '="' + c.hex + '"';
  return i < 1 ? r + " " + n + '-opacity="' + i.toFixed(2).slice(1) + '"' : r;
}
function at(c, n, i) {
  let r = c + n;
  return typeof i < "u" && (r += " " + i), r;
}
function $s(c, n, i) {
  let r = "", t = 0, a = !1, l = 0;
  for (let d = 0; d < c.length; d++) {
    const u = Math.floor(d % n), g = Math.floor(d / n);
    !u && !a && (a = !0), c[d] ? (l++, d > 0 && u > 0 && c[d - 1] || (r += a ? at("M", u + i, 0.5 + g + i) : at("m", t, 0), t = 0, a = !1), u + 1 < n && c[d + 1] || (r += at("h", l), l = 0)) : t++;
  }
  return r;
}
In.render = function(n, i, r) {
  const t = Ks.getOptions(i), a = n.modules.size, l = n.modules.data, d = a + t.margin * 2, u = t.color.light.a ? "<path " + tn(t.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "", g = "<path " + tn(t.color.dark, "stroke") + ' d="' + $s(l, a, t.margin) + '"/>', p = 'viewBox="0 0 ' + d + " " + d + '"', b = '<svg xmlns="http://www.w3.org/2000/svg" ' + (t.width ? 'width="' + t.width + '" height="' + t.width + '" ' : "") + p + ' shape-rendering="crispEdges">' + u + g + `</svg>
`;
  return typeof r == "function" && r(null, b), b;
};
const Js = ls, ft = dn, An = Tn, Ws = In;
function Ct(c, n, i, r, t) {
  const a = [].slice.call(arguments, 1), l = a.length, d = typeof a[l - 1] == "function";
  if (!d && !Js())
    throw new Error("Callback required as last argument");
  if (d) {
    if (l < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (t = i, i = n, n = r = void 0) : l === 3 && (n.getContext && typeof t > "u" ? (t = r, r = void 0) : (t = r, r = i, i = n, n = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return l === 1 ? (i = n, n = r = void 0) : l === 2 && !n.getContext && (r = i, i = n, n = void 0), new Promise(function(u, g) {
      try {
        const p = ft.create(i, r);
        u(c(p, n, r));
      } catch (p) {
        g(p);
      }
    });
  }
  try {
    const u = ft.create(i, r);
    t(null, c(u, n, r));
  } catch (u) {
    t(u);
  }
}
Se.create = ft.create;
Se.toCanvas = Ct.bind(null, An.render);
Se.toDataURL = Ct.bind(null, An.renderToDataURL);
Se.toString = Ct.bind(null, function(c, n, i) {
  return Ws.render(c, i);
});
const gt = 300, Xs = 1;
function En() {
  return (game.settings.get(R, "apiUrl") || "").replace(/\/$/, "");
}
function Ys({ nonce: c, channelId: n, foundryUserName: i }) {
  return JSON.stringify({
    v: Xs,
    agentUrl: En(),
    channelId: n || null,
    nonce: c,
    foundryUserName: i || null
  });
}
async function Rn(c, n, i) {
  const r = En(), t = game.settings.get(R, "apiKey"), a = game.settings.get(R, "channelId");
  if (!r) throw new Error("Set the Agent URL in module settings first.");
  if (!t) throw new Error("Set your Agent API key in module settings first.");
  if (!a) throw new Error("Set the Channel ID (session code) in module settings first.");
  const l = foundry.utils.randomID(24);
  let d;
  try {
    d = await fetch(`${r}/api/pairing/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
        Accept: "application/json"
      },
      body: JSON.stringify({
        nonce: l,
        channel_id: a,
        foundry_user_id: n,
        foundry_user_name: i,
        expires_in: gt
      })
    });
  } catch {
    throw new Error("Could not reach the Agent server. Check the Agent URL and your connection.");
  }
  if (!d.ok)
    throw d.status === 403 ? new Error("Only a GM with a linked Agent account can generate pairings.") : d.status === 404 ? new Error("No Agent session matches this Channel ID. Create/sync the session in the Agent first.") : new Error(`Agent server rejected the pairing (HTTP ${d.status}).`);
  return c.pendingPairings.set(l, { foundryUserId: n, ts: Date.now() }), setTimeout(() => c.pendingPairings.delete(l), gt * 1e3), { nonce: l, payload: Ys({ nonce: l, channelId: a, foundryUserName: i }) };
}
async function Qs(c, n, i) {
  let r;
  try {
    ({ payload: r } = await Rn(c, n, i));
  } catch (t) {
    ui.notifications.error(`Agent pairing: ${t.message}`);
    return;
  }
  await Pn(r, i);
}
async function Pn(c, n) {
  let i;
  try {
    i = await Se.toDataURL(c, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const r = Math.round(gt / 60), t = n || "this player";
  new Dialog({
    title: `Link Agent — ${t}`,
    content: `
            <div style="text-align:center;">
                <p>Open the Cyberpunk Agent app on your phone, tap <strong>Scan to Link</strong>,
                and point the camera at this code.</p>
                <img src="${i}" alt="Pairing QR code"
                     style="width:320px;height:320px;image-rendering:pixelated;background:#fff;padding:8px;border-radius:8px;" />
                <p style="color:#ffaa00;font-size:0.85em;">This code expires in ~${r} minutes and can only be used once.</p>
            </div>
        `,
    buttons: {
      close: { icon: '<i class="fas fa-check"></i>', label: "Done" }
    },
    default: "close"
  }, { width: 380 }).render(!0);
}
class Zs extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-assignment-menu",
      title: "Agent Character Assignment",
      width: 500,
      classes: ["form"]
    });
  }
  async _renderInner(n) {
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
    for (let r of n.users) {
      const t = as(r.agentLink);
      if (i += `<tr><td style="padding: 5px 0;"><strong>${r.name}</strong></td>`, r.hasKey) {
        i += '<td style="color: #00ff00;">✔ Linked</td>', i += `<td><small><code title="${r.agentLink || ""}">${t || "Pending..."}</code></small></td>`, i += `<td><select class="character-select" data-userid="${r.id}" style="width: 100%;">
                <option value="">- None -</option>`;
        for (let a of n.characters) {
          const l = a.id === r.characterId ? "selected" : "";
          i += `<option value="${a.id}" ${l}>${a.name}</option>`;
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
    const n = game.users.map((r) => {
      var t;
      return {
        id: r.id,
        name: r.name,
        isGM: r.isGM,
        hasKey: !!r.getFlag(R, "hasApiKey"),
        agentLink: r.getFlag(R, "agent-link"),
        characterId: ((t = r.character) == null ? void 0 : t.id) || ""
      };
    }), i = game.actors.filter((r) => r.type === "character").map((r) => ({
      id: r.id,
      name: r.name
    }));
    return { users: n, characters: i };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(n) {
    super.activateListeners(n), n.find("#save-agent-assignments").click(async (i) => {
      i.preventDefault();
      let r = 0;
      const t = [];
      if (n.find(".character-select").each((a, l) => {
        var p;
        const d = l.dataset.userid, u = l.value, g = game.users.get(d);
        if (g) {
          const k = u === "" || u === "null" ? null : u;
          (((p = g.character) == null ? void 0 : p.id) || null) !== k && (t.push({ _id: g.id, character: k }), r++);
        }
      }), t.length > 0) {
        await User.updateDocuments(t), ui.notifications.info(`Cyberpunk Bridge: Updated ${r} player assignments!`);
        for (let a of t) {
          const l = game.users.get(a._id), d = l == null ? void 0 : l.getFlag(R, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: d || a._id,
            // Use agent-link as primary ID for Laravel
            actorId: a.character,
            character: a.character,
            isGM: l.isGM
          });
        }
        window.cyberpunkBridge.syncPlayerLink();
      } else
        ui.notifications.info("Cyberpunk Bridge: No assignment changes made.");
      this.close();
    }), n.find(".show-qr").click(async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.userid, t = i.currentTarget.dataset.username;
      await Qs(window.cyberpunkBridge, r, t);
    }), n.find(".refresh-user").click(async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.userid, t = game.users.get(r);
      t && (await t.unsetFlag(R, "agent-link"), await t.unsetFlag(R, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${t.name}. They will need to re-sync.`), this.render(!0));
    }), n.find("#refresh-all-users").click(async (i) => {
      i.preventDefault();
      for (let r of game.users)
        await r.unsetFlag(R, "agent-link"), await r.unsetFlag(R, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
const Fe = "pairing-request", pe = "pairing-nonce";
function eo(c) {
  c.hookIds.pairingUpdateUser || (c.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (n, i) => {
    if (game.user.isGM && foundry.utils.getProperty(i, `flags.${R}.${Fe}`) && await to(c, n), n.id === game.user.id) {
      const r = foundry.utils.getProperty(i, `flags.${R}.${pe}`);
      r && r.payload && (await Pn(r.payload, game.user.name), await game.user.unsetFlag(R, pe), await game.user.unsetFlag(R, Fe));
    }
  }));
}
async function to(c, n) {
  try {
    const { payload: i } = await Rn(c, n.id, n.name);
    await n.setFlag(R, pe, { payload: i, ts: Date.now() });
  } catch (i) {
    console.warn(`[Bridge] Failed to mint pairing for ${n.name}: ${i.message}`), await n.setFlag(R, pe, { error: i.message, ts: Date.now() });
  }
}
async function no() {
  if (game.user.isGM) {
    ui.notifications.info("As GM, use Manage Characters → the QR button beside a player.");
    return;
  }
  await game.user.setFlag(R, pe, null), await game.user.setFlag(R, Fe, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(R, pe) || (await game.user.unsetFlag(R, Fe), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class ro extends FormApplication {
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
  activateListeners(n) {
    super.activateListeners(n), n.find("#cpr-generate-qr").click(async (i) => {
      i.preventDefault(), await no(), this.close();
    });
  }
}
function so(c) {
  game.settings.registerMenu(R, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: Zs,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(R, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: ro,
    restricted: !1
    // Available to all players
  }), game.settings.register(R, "apiUrl", {
    name: "Agent URL",
    hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
    scope: "world",
    // URL is usually the same for everyone
    config: !0,
    type: String,
    default: $i,
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
    default: rn,
    onChange: () => c.reconnect()
  }), game.settings.register(R, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (n) => {
      await game.user.setFlag(R, "hasApiKey", !!n), game.user.isGM && c.reconnect(), c.syncPlayerLink();
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
async function oo(c, n, { type: i, requestId: r, actorId: t }) {
  const a = game.actors.get(t);
  if (!a) {
    console.warn(`⚠️ Actor ID ${t} not found in this world.`);
    return;
  }
  await a.update(n.changes), ui.notifications.info(`💾 Sync: ${a.name} updated.`), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: t, success: !0, requestId: r });
}
async function ao(c, n, { requestId: i }) {
  let r = n.actorId, t = game.user;
  const a = n.agentLink || n.agent_link || n.foundryUserId || n.requestId;
  if (a && (t = game.users.find((l) => l.getFlag(R, "agent-link") === a) || game.users.get(a) || (a === game.user.id ? game.user : null)), t || (t = game.user), !r) {
    const l = t.character;
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
        items: (d.items || []).map((g) => ({
          _id: g._id,
          name: g.name,
          type: g.type,
          img: g.img,
          system: g.system
        })),
        flags: d.flags && d.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": d.flags["cyberpunk-red-core"] } : {}
      };
      await c.sendResponse({ type: "ACTOR_DATA", actorId: r, actor: u, requestId: i, isGM: t.isGM, agentLink: t.getFlag(R, "agent-link") || t.id });
      return;
    }
  }
  await c.sendResponse({ type: "ACTOR_DATA", actorId: r, actor: !1, requestId: i, isGM: t.isGM, agentLink: t.getFlag(R, "agent-link") || t.id });
}
async function co(c, n, { requestId: i, actorId: r }) {
  let t = game.user;
  const a = n.agentLink || n.agent_link || n.foundryUserId || n.requestId;
  a && (t = game.users.find((u) => u.getFlag(R, "agent-link") === a) || game.users.get(a) || (a === game.user.id ? game.user : null)), t || (t = game.user);
  function l(u) {
    var p;
    return ((p = canvas.tokens.placeables.filter((k) => {
      var b;
      return ((b = k.actor) == null ? void 0 : b.id) === u;
    })[0]) == null ? void 0 : p.id) ?? null;
  }
  let d = [];
  t.isGM ? d = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var p, k;
    const g = (p = Object.entries(u.ownership || {}).find(([b, m]) => {
      const _ = game.users.get(b);
      return _ && !_.isGM && m >= 3;
    })) == null ? void 0 : p[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: l(u.id),
      agentLink: (g ? (k = game.users.get(g)) == null ? void 0 : k.getFlag(R, "agent-link") : null) || g || t.getFlag(R, "agent-link") || t.id
    };
  }) : (d = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(t, "OWNER")).map((u) => {
    var p, k;
    const g = (p = Object.entries(u.actor.ownership || {}).find(([b, m]) => {
      const _ = game.users.get(b);
      return _ && !_.isGM && m >= 3;
    })) == null ? void 0 : p[0];
    return {
      name: u.name,
      actorId: u.actor.id,
      tokenId: l(u.actor.id),
      agentLink: (g ? (k = game.users.get(g)) == null ? void 0 : k.getFlag(R, "agent-link") : null) || g || null
    };
  }), t.character && (d.some((g) => g.actorId === t.character.id) || d.push({
    name: t.character.name,
    actorId: t.character.id,
    tokenId: l(t.character.id),
    agentLink: t.getFlag(R, "agent-link") || t.id
  })), !t.isGM && t.character && (d = d.filter((u) => u.actorId === t.character.id))), await c.sendResponse({ type: "ACTORS_DATA", actorId: r, actors: d, requestId: i, isGM: t.isGM, agentLink: t.getFlag(R, "agent-link") || t.id });
}
async function lo(c, n, { type: i, requestId: r, actorId: t }) {
  const a = game.actors.get(t);
  if (!a) {
    console.warn(`Actor ID ${t} not found in this world.`);
    return;
  }
  const l = a.items.get(n.itemId);
  if (!l) {
    console.warn(`Item ID ${n.itemId} not found on actor ${a.name}.`);
    return;
  }
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: t, success: !0, requestId: r });
}
async function uo(c, n, { requestId: i, actorId: r }) {
  const t = game.actors.get(r);
  if (t) {
    const a = t.items.get(n.itemId);
    if (a) {
      const l = `items.${n.itemId}.system.equipped`;
      await a.update({ "system.equipped": n.state }), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: { [l]: n.state }, success: !0, requestId: i });
    }
  }
}
async function ho(c, n, { requestId: i, actorId: r }) {
  const t = game.actors.get(r);
  if (t) {
    const a = t.items.get(n.weaponId), l = n.ammoId ? t.items.get(n.ammoId) : null, d = async () => {
      await a.reload();
      const u = {
        [`items.${n.weaponId}.system.magazine`]: {
          value: a.system.magazine.value,
          max: a.system.magazine.max
        },
        [`items.${n.weaponId}.system.installedItems`]: {
          list: [...a.system.installedItems.list],
          slots: a.system.installedItems.slots,
          usedSlots: a.system.installedItems.usedSlots
        }
      };
      l && (u[`items.${l.id}.system.amount`] = l.system.amount), t.items.filter((p) => p.type === "ammo").forEach((p) => {
        u[`items.${p.id}.system.amount`] = p.system.amount;
      }), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: u, success: !0, requestId: i });
    };
    if (l) {
      let u = a.getInstalledItems("ammo");
      u && u.length > 0 && a.uninstallItems(u), setTimeout(function() {
        a.installItems([l]);
      }, 500), setTimeout(async () => {
        await d();
      }, 1500);
    } else
      await d();
  }
}
async function fo(c, n, { requestId: i, actorId: r }) {
  const t = game.actors.get(r);
  if (!t) return;
  const a = t.items.get(n.cyberdeckId), l = t.items.get(n.programId);
  if (!a || !l) return;
  const d = a.system.installedItems.usedSlots || 0, u = a.system.installedItems.slots || 0, g = l.system.size || 1;
  if (d + g > u) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const p = a.system.installedItems.list || [];
  if (p.includes(n.programId)) return;
  const k = [...p, n.programId], b = d + g;
  await a.update({
    "system.installedItems.list": k,
    "system.installedItems.usedSlots": b
  }), await c.sendResponse({
    type: "SHEET_DELTA",
    actorId: r,
    delta: {
      [`items.${n.cyberdeckId}.system.installedItems.list`]: k,
      [`items.${n.cyberdeckId}.system.installedItems.usedSlots`]: b
    },
    success: !0,
    requestId: i
  });
}
async function go(c, n, { requestId: i, actorId: r }) {
  const t = game.actors.get(r);
  if (!t) return;
  const a = t.items.get(n.cyberdeckId), l = t.items.get(n.programId);
  if (!a) return;
  const d = a.system.installedItems.list || [];
  if (!d.includes(n.programId)) return;
  const u = d.filter((m) => m !== n.programId), g = l && l.system.size || 1, p = a.system.installedItems.usedSlots || 0, k = Math.max(0, p - g);
  await a.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": k
  });
  const b = {
    [`items.${n.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${n.cyberdeckId}.system.installedItems.usedSlots`]: k
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), b[`items.${n.programId}.system.isRezzed`] = !1), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: b, success: !0, requestId: i });
}
async function po(c, n, { requestId: i, actorId: r }) {
  const t = game.actors.get(r);
  if (t) {
    const a = t.items.get(n.programId);
    a && (await a.update({ "system.isRezzed": n.targetState }), await c.sendResponse({
      type: "SHEET_DELTA",
      actorId: r,
      delta: { [`items.${n.programId}.system.isRezzed`]: n.targetState },
      success: !0,
      requestId: i
    }));
  }
}
async function mo(c, n, { requestId: i, actorId: r }) {
  var a, l;
  const t = game.actors.get(r);
  if (t) {
    const d = document.createElement("a");
    d.dataset.rollType = n.rollType, d.dataset.cyberdeckId = n.cyberdeckId, d.dataset.rollTitle = n.programName, d.dataset.interfaceAbility = n.programName, d.dataset.itemId = n.cyberdeckId, d.dataset.programId = n.programId, d.dataset.executionType = n.executionType;
    const u = async () => {
      await t.sheet._onRoll({
        type: "click",
        currentTarget: d
      });
    }, g = await c.rollAndCapture(r, u, n.rollMode);
    g.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: g.rollMode,
      requestId: i,
      actorId: r,
      total: g.total,
      isCriticalSuccess: g.isCriticalSuccess,
      isCriticalFailure: g.isCriticalFailure,
      label: n.programName,
      rawRoll: {
        total: g.total,
        isCriticalSuccess: g.isCriticalSuccess,
        isCriticalFailure: g.isCriticalFailure,
        label: g.label,
        resultTotal: (a = g.rawRoll) == null ? void 0 : a.resultTotal,
        rollTitle: (l = g.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function yo(c, n, { requestId: i, actorId: r }) {
  var l, d;
  const t = game.actors.get(r), a = t.items.get(n.weaponId);
  if (t && a) {
    const u = async () => {
      await t.sheet._onRoll({
        "data-roll-type": "damage",
        "data-item-id": a.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "damage",
          "data-item-id": a.id
        }
      });
    }, g = await c.rollAndCapture(r, u, n.rollMode);
    g.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: g.rollMode,
      requestId: i,
      actorId: r,
      total: g.total,
      isCriticalSuccess: g.isCriticalSuccess,
      isCriticalFailure: g.isCriticalFailure,
      label: `${a.name} (Damage)`,
      rawRoll: {
        total: g.total,
        isCriticalSuccess: g.isCriticalSuccess,
        isCriticalFailure: g.isCriticalFailure,
        label: g.label,
        resultTotal: (l = g.rawRoll) == null ? void 0 : l.resultTotal,
        rollTitle: (d = g.rawRoll) == null ? void 0 : d.rollTitle
      },
      success: !0
    });
  }
}
async function vo(c, n, { requestId: i, actorId: r }) {
  var a, l;
  const t = game.actors.get(r);
  if (t) {
    const d = async () => {
      await t.sheet._onRoll({
        "data-roll-type": "deathsave",
        "data-roll-title": "Death Save",
        type: "click",
        currentTarget: {
          "data-roll-type": "deathsave",
          "data-roll-title": "Death Save"
        }
      });
    }, u = await c.rollAndCapture(r, d, n.rollMode);
    if (u.success) {
      const g = t.system.derivedStats.deathsave || {};
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
          resultTotal: (a = u.rawRoll) == null ? void 0 : a.resultTotal,
          rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      }), await c.sendResponse({
        type: "SHEET_DELTA",
        actorId: r,
        delta: { "system.derivedStats.deathsave": g },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function bo(c, n, { requestId: i, actorId: r }) {
  var d, u;
  const t = game.actors.get(r), a = async () => {
    await t.sheet._onRoll({
      "data-roll-type": "facedown",
      "data-roll-title": "Face Down",
      type: "click",
      currentTarget: {
        "data-roll-type": "facedown",
        "data-roll-title": "Face Down"
      }
    });
  }, l = await c.rollAndCapture(r, a, n.rollMode);
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
async function wo(c, n, { requestId: i, actorId: r }) {
  var a, l;
  const t = game.actors.get(r);
  if (t) {
    const d = async () => {
      await t.rollInitiative();
    }, u = await c.rollAndCapture(r, d, n.rollMode);
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
        resultTotal: (a = u.rawRoll) == null ? void 0 : a.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function ko(c, n, { requestId: i, actorId: r }) {
  var a, l;
  const t = game.actors.get(r);
  if (t) {
    const d = t.items.getName(n.itemName);
    if (d) {
      const u = {
        "data-roll-type": "roleAbility",
        "data-roll-title": n.label,
        "data-item-id": d.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "roleAbility",
          "data-roll-title": n.label,
          "data-item-id": d.id,
          "data-item-subtype": n.label
        }
      };
      n.isAbility && (u["data-roll-subtype"] = "subRoleAbility", u["data-role-name"] = n.label, u.currentTarget["data-roll-subtype"] = "subRoleAbility", u.currentTarget["data-role-name"] = n.label);
      const g = async () => {
        await t.sheet._onRoll(u);
      }, p = await c.rollAndCapture(r, g, n.rollMode);
      p.success && await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: i,
        actorId: r,
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: n.label,
        rawRoll: {
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          label: p.label,
          resultTotal: (a = p.rawRoll) == null ? void 0 : a.resultTotal,
          rollTitle: (l = p.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function Co(c, n, { requestId: i, actorId: r }) {
  var a, l;
  const t = game.actors.get(r);
  if (t) {
    const d = t.items.getName(n.label);
    if (d) {
      const u = async () => {
        await t.sheet._onRoll({
          "data-roll-type": "skill",
          "data-roll-title": n.label,
          "data-item-id": d.id,
          type: "click",
          currentTarget: {
            "data-roll-type": "skill",
            "data-roll-title": n.label,
            "data-item-id": d.id
          }
        });
      }, g = await c.rollAndCapture(r, u, n.rollMode);
      g.success && await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: g.rollMode,
        requestId: i,
        actorId: r,
        total: g.total,
        isCriticalSuccess: g.isCriticalSuccess,
        isCriticalFailure: g.isCriticalFailure,
        label: n.label,
        rawRoll: {
          total: g.total,
          isCriticalSuccess: g.isCriticalSuccess,
          isCriticalFailure: g.isCriticalFailure,
          label: g.label,
          resultTotal: (a = g.rawRoll) == null ? void 0 : a.resultTotal,
          rollTitle: (l = g.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function _o(c, n, { requestId: i, actorId: r }) {
  var a, l;
  const t = game.actors.get(r);
  if (t) {
    const d = async () => {
      await t.sheet._onRoll({
        "data-roll-type": "stat",
        "data-roll-title": n.label,
        type: "click",
        currentTarget: {
          "data-roll-type": "stat",
          "data-roll-title": n.label
        }
      });
    }, u = await c.rollAndCapture(r, d, n.rollMode);
    u.success && await c.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: i,
      actorId: r,
      total: u.total,
      isCriticalSuccess: u.isCriticalSuccess,
      isCriticalFailure: u.isCriticalFailure,
      label: n.label,
      rawRoll: {
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: u.label,
        resultTotal: (a = u.rawRoll) == null ? void 0 : a.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function So(c, n, { requestId: i, actorId: r }) {
  i && c.activeRequests.set(i, { actorId: r, timestamp: Date.now() });
  const t = new Roll(n.formula);
  await t.evaluate(), await t.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(r) }),
    flavor: n.flavor,
    rollMode: n.rollMode || game.settings.get("core", "rollMode")
  }), await c.sendResponse({
    type: "ROLL_RESULT",
    rollMode: n.rollMode || game.settings.get("core", "rollMode"),
    requestId: i,
    actorId: r,
    total: t.total,
    isCriticalSuccess: t.isCriticalSuccess || !1,
    isCriticalFailure: t.isCriticalFailure || !1,
    label: n.flavor || "Dice Roll",
    rawRoll: {
      rollTitle: n.flavor || "Dice Roll",
      _roll: t,
      formula: t.formula,
      resultTotal: t.total
    },
    success: !0
  });
}
async function To(c, n, { requestId: i, actorId: r, tokenId: t }) {
  var l, d, u, g, p, k, b;
  const a = game.actors.get(r);
  if (a) {
    const m = n.weaponId, _ = n.fireMode, C = canvas.tokens.get(n.targetId), w = "firetype-" + m, v = "cyberpunk-red-core";
    let S = "";
    switch (_) {
      case "Auto":
        S = "autofire";
        break;
      case "Suppress":
        S = "suppressive";
        break;
      case "Aimed":
        S = "aimed", await a.setFlag(v, "aimedLocation", "head");
        break;
      default:
        S = "";
        break;
    }
    C && C.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), S === "" ? await a.unsetFlag(v, w) : await a.setFlag(v, w, S);
    const I = document.createElement("a");
    I.dataset.rollType = "attack", I.dataset.itemId = m, I.dataset.rollTitle = _ + " Attack";
    const E = async () => {
      await a.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: I,
        type: "click"
      }, { showDialog: !0 });
    };
    let A = null;
    if (C) {
      const O = canvas.tokens.get(t) || ((l = a.getActiveTokens()) == null ? void 0 : l[0]) || canvas.tokens.placeables.find((x) => {
        var U;
        return ((U = x.actor) == null ? void 0 : U.id) === a.id;
      });
      if (O) {
        const x = C.center.x - O.center.x, U = C.center.y - O.center.y, F = Math.sqrt(Math.pow(x, 2) + Math.pow(U, 2)), Z = Math.ceil(F / (((d = canvas.grid) == null ? void 0 : d.size) || 128)), J = a.items.get(m), V = sn(J), Ie = on(V, Z);
        A = Ie === 99 ? "Out of Range" : Ie;
      }
    }
    const L = await c.rollAndCapture(r, E, n.rollMode);
    if (L.success) {
      let O = null;
      typeof A == "number" ? O = L.total >= A ? "Hit" : "Miss" : A === "Out of Range" && (O = "Miss");
      const x = ((p = (g = (u = a.items.get(m)) == null ? void 0 : u.system) == null ? void 0 : g.magazine) == null ? void 0 : p.value) ?? null;
      await c.sendResponse({
        type: "ROLL_RESULT",
        rollMode: L.rollMode,
        requestId: i,
        actorId: r,
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
        dv: A,
        ammoTo: x,
        outcome: O,
        success: !0
      });
    }
  }
}
async function Io(c, n, { type: i, requestId: r, actorId: t, tokenId: a }) {
  if (game.paused) return;
  const l = canvas.tokens.get(a);
  if (l) {
    let d = {};
    n.direction === "up" ? d.y = l.document.y - canvas.grid.size : n.direction === "down" ? d.y = l.document.y + canvas.grid.size : n.direction === "left" ? d.x = l.document.x - canvas.grid.size : n.direction === "right" && (d.x = l.document.x + canvas.grid.size), await l.document.update(d), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: t, tokenId: a, success: !0, requestId: r });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${a} not found.`), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: t, tokenId: a, success: !1, message: "Token not found", requestId: r });
}
async function Ao(c, n, { type: i, requestId: r, actorId: t }) {
  const a = canvas.tokens.get(n.targetTokenId);
  a && (a.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await c.sendResponse({ type: "CONFIRMATION", action: i, actorId: t, tokenId: n.targetTokenId, success: !0, requestId: r }));
}
async function Eo(c, n, { requestId: i, actorId: r, tokenId: t }) {
  var u;
  const a = canvas.tokens.placeables.filter((g) => {
    var p;
    return ((p = g.actor) == null ? void 0 : p.id) === r;
  });
  t === null && (t = ((u = a[0]) == null ? void 0 : u.id) ?? null);
  const l = canvas.tokens.get(t);
  let d = [];
  if (l) {
    const g = canvas.grid.size, p = canvas.dimensions, k = l.center.x, b = l.center.y;
    d = canvas.tokens.placeables.filter((m) => {
      const _ = !m.document.hidden, C = m.actor && (m.actor.type === "character" || m.actor.type === "mook"), w = m.x >= p.sceneX && m.x <= p.sceneX + p.sceneWidth && m.y >= p.sceneY && m.y <= p.sceneY + p.sceneHeight;
      return _ && C && w && m.id !== l.id;
    }).map((m) => {
      const _ = m.center.x - k, C = m.center.y - b, v = (Math.sqrt(Math.pow(_, 2) + Math.pow(C, 2)) / g).toFixed(2);
      return {
        name: m.name,
        id: m.id,
        distanceM: parseFloat(v),
        type: m.actor.type
      };
    }).sort((m, _) => m.distanceM - _.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${t} not found.`);
  await c.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: r, tokens: d, requestId: i });
}
async function Ro(c, n, { requestId: i, actorId: r, tokenId: t }) {
  var g;
  const a = canvas.tokens.get(t), l = n.targetTokenId || ((g = Array.from(game.user.targets)[0]) == null ? void 0 : g.id), d = canvas.tokens.get(l), u = n.weaponId;
  if (a && d) {
    const p = d.center.x - a.center.x, k = d.center.y - a.center.y, b = Math.sqrt(Math.pow(p, 2) + Math.pow(k, 2)), m = Math.ceil(b / 128), _ = a.actor.items.get(u);
    if (!_) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${a.actor.name}.`), await c.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: null, requestId: i });
      return;
    }
    const C = sn(_), w = on(C, m), v = {
      targetName: d.name,
      distanceMeters: m,
      weaponCategory: C,
      dv: w === 99 ? "Out of Range" : w
    };
    await c.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: v, requestId: i });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!a}, Target: ${!!d}`), await c.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: null, requestId: i });
}
async function Po(c, n, { requestId: i, actorId: r }) {
  var E;
  const t = game.actors.get(r);
  if (!t) return;
  const a = n.weaponId, l = a ? t.items.get(a) : null;
  let d = "None", u = 0, g = "None", p = 0, k = 0;
  if (l) {
    d = l.system.weaponSkill;
    const A = t.items.find((L) => L.type === "skill" && L.name === d);
    u = A && Number(A.system.level) || 0, g = A && A.system.stat || "ref", p = Number((E = t.system.stats[g]) == null ? void 0 : E.value) || 0, k = Number(l.system.attackmod) || 0;
  }
  let b = 0;
  const m = [], _ = Number(t.system.derivedStats.hp.value) || 0, C = Number(t.system.derivedStats.seriouslyWounded) || 0, w = t.items.find((A) => A.name === "Stim" && A.type === "drug"), v = w && w.effects.some((A) => A.disabled === !1);
  if (_ <= 0)
    b -= 4, m.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (_ <= C) {
    const A = v ? 0 : -2;
    b += A, m.push({
      title: v ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: A,
      description: v ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  t.items.filter((A) => A.type === "criticalInjury").forEach((A) => {
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
    actorName: t.name,
    baseBonus: p + u + k,
    breakdown: {
      statName: g,
      statValue: p,
      skillName: d,
      skillLevel: u,
      weaponAcc: k
    },
    totalPenalty: b,
    finalModifier: p + u + k + b,
    injuries: m
  };
  await c.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: r, result: I, requestId: i });
}
async function Lo(c, n, { requestId: i, actorId: r }) {
  const t = game.actors.get(r);
  if (t) {
    const a = `system.${n.label}`;
    let l;
    if (n.operation === "inc") {
      const d = a.split(".");
      let u = t;
      for (let k = 0; k < d.length; k++)
        u = k === 0 ? u[d[k]] : u == null ? void 0 : u[d[k]];
      const g = Number(u) || 0, p = Number(n.delta) || 0;
      l = g + p;
    } else
      l = typeof n.value == "string" ? n.value : Number(n.value) || 0;
    await t.update({ [a]: l }), await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: { [a]: l }, tab: "stats", success: !0, requestId: i });
  }
}
async function Mo(c, n, { requestId: i, actorId: r, debug: t }) {
  if (r == null) {
    t && console.log("[Bridge] Actor ID Not set:");
    return;
  }
  let a = game.actors.get(r);
  switch ((n.action == null || n.value == null) && t && console.log("[Bridge] EuroBucks data error"), n.action) {
    case "add":
      a.deltaLedgerProperty("wealth", n.value, n.reason);
      break;
    case "subtract":
      a.deltaLedgerProperty("wealth", -Number(n.value), n.reason);
      break;
    case "set":
      a.setLedgerProperty("wealth", n.value, n.reason);
      break;
  }
  a && await c.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: { "system.wealth": a.system.wealth }, tab: "stats", success: !0, requestId: i });
}
async function No(c, n, { requestId: i, actorId: r, debug: t }) {
  const a = [];
  for (const l of game.journal) {
    const d = l.pages.filter((u) => u.type === "cpr-agent.datapool");
    for (const u of d) {
      const g = u.system.entries || [], p = [];
      for (const k of g) {
        let b = k.htmlContent;
        k.type === "html" && b && (b = await TextEditor.enrichHTML(b, { async: !0 })), p.push({
          id: k.id,
          icon: k.icon,
          title: k.title,
          type: k.type,
          htmlContent: b,
          pdfPath: k.pdfPath
        });
      }
      a.push({
        journalId: l.id,
        journalName: l.name,
        pageId: u.id,
        pageName: u.name,
        entries: p
      });
    }
  }
  t && console.log("[Bridge] Found Data Pools:", a), await c.sendResponse({
    type: "NET_POOL_DATA",
    actorId: r,
    pools: a,
    requestId: i,
    success: !0
  });
}
async function Oo(c, n, { debug: i }) {
  if (!game.user.isGM) return;
  const r = n.foundryUserId, t = n.agentLink || n.agent_link, a = n.nonce;
  if (!r || !t || !a) {
    console.warn("[Bridge] PAIR_AGENT missing fields.", n);
    return;
  }
  const l = c.pendingPairings.get(a);
  if (!l || l.foundryUserId !== r) {
    console.warn(`[Bridge] PAIR_AGENT nonce not recognised for user ${r}. Ignoring.`);
    return;
  }
  const d = game.users.get(r);
  if (!d) {
    console.warn(`[Bridge] PAIR_AGENT: Foundry user ${r} not found.`);
    return;
  }
  c.pendingPairings.delete(a), await d.setFlag(R, "agent-link", t), await d.setFlag(R, "hasApiKey", !0), i && console.log(`[Bridge] PAIR_AGENT: linked ${d.name} -> ${t}`), ui.notifications.info(`Agent: ${d.name} linked successfully.`), await c.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: r,
    agentLink: t,
    nonce: a,
    success: !0
  });
}
const xo = {
  UPDATE_ACTOR: oo,
  GET_ACTOR: ao,
  GET_ACTORS: co,
  CONSUME_ITEM: lo,
  ITEM_EQUIP: uo,
  RELOAD_WEAPON: ho,
  INSTALL_PROGRAM: fo,
  REMOVE_PROGRAM: go,
  TOGGLE_REZ: po,
  PROGRAM_ROLL: mo,
  DAMAGE_ROLL: yo,
  DEATH_SAVE: vo,
  FACEDOWN_ROLL: bo,
  INITIATIVE_ROLL: wo,
  ROLE_ROLL: ko,
  SKILL_ROLL: Co,
  STAT_ROLL: _o,
  DICE_ROLL: So,
  ATTACK_ROLL: To,
  MOVE_TOKEN: Io,
  TARGET_TOKEN: Ao,
  LIST_VISIBLE_TOKENS: Eo,
  GET_DV_INFO: Ro,
  GET_ROLL_MODIFIERS: Po,
  UPDATE_STAT: Lo,
  UPDATE_EB: Mo,
  GET_NET_POOL: No,
  PAIR_AGENT: Oo
};
async function Bo(c, n, i, r) {
  const t = xo[n];
  if (!t) {
    console.log("Unknown DataType: " + n);
    return;
  }
  return t(c, i, r);
}
class Do {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1;
  }
  rollAndCapture(n, i, r = null) {
    return cs(this, n, i, r);
  }
  registerSettings() {
    so(this);
  }
  destroy() {
    this.echo && this.echo.disconnect();
    for (let [n, i] of Object.entries(this.hookIds))
      Hooks.off(n, i);
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  connect() {
    const n = game.settings.get(R, "apiUrl"), i = game.settings.get(R, "apiKey"), r = game.settings.get(R, "debugMode"), t = Number(game.settings.get(R, "reverbPort") || 0) || 0, a = game.settings.get(R, "reverbUseSSL"), l = (game.settings.get(R, "reverbHost") || "").trim();
    if (!i || !n) return;
    this.echo && this.echo.disconnect();
    let d;
    try {
      d = new URL(n);
    } catch {
      return;
    }
    const u = l || d.hostname, g = d.protocol === "https:", p = typeof a == "boolean" ? a : void 0, k = p ?? g, b = k ? 443 : 80, m = t > 0 ? t : b;
    this.echo = new os({
      broadcaster: "reverb",
      key: game.settings.get(R, "reverbKey") || rn,
      wsHost: u,
      wsPort: m,
      wssPort: m,
      forceTLS: k,
      enabledTransports: ["ws", "wss"],
      disableStats: !0,
      authEndpoint: `${n.replace(/\/$/, "")}/api/broadcasting/auth`,
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
    const n = game.settings.get(R, "channelId"), i = n ? `cpr-agent.${n}` : "cpr-agent";
    this.echo.private(i).listen(".GameUpdate", (r) => {
      this.handleIncomingData(r);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const n = game.settings.get(R, "apiKey"), i = game.settings.get(R, "debugMode");
    if (i && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(R, "hasApiKey") !== !!n && await game.user.setFlag(R, "hasApiKey", !!n), !n) {
      i && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const r = async () => {
      var l;
      const t = game.user.character, a = game.user.getFlag(R, "agent-link");
      i && (console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(t == null ? void 0 : t.name) || "None"}...`), console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`), console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${a || "(none)"}`));
      try {
        const d = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          actorId: t ? t.id : null,
          character: t ? { id: t.id, name: t.name } : null,
          actorName: t ? t.name : null,
          agentLink: a || game.user.id,
          foundryUserId: game.user.id,
          foundryUserName: game.user.name,
          isGM: game.user.isGM
        });
        i && console.log("[Bridge] syncPlayerLink: Laravel response:", d), d && d.agent_link ? a !== d.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${d.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${d.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(R, "agent-link", d.agent_link), (l = ui.notifications) == null || l.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", d);
      } catch (d) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", d);
      }
    };
    await r(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (t, a) => {
      t.id === game.user.id && a.character !== void 0 && r();
    }));
  }
  registerGlobalHooks() {
    if (this.hookIds.updateActor) return;
    const n = async (i, r) => {
      const t = game.settings.get(R, "apiKey");
      !this.isConnected && !t || !i || !["character", "mook"].includes(i.type) || (console.log(`%c[Bridge] Syncing change for ${i.name}`, "color: #ffaa00;", r), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: i.id,
        uuid: i.id,
        delta: r,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (i, r, t, a) => {
      if (r.system) {
        const l = lt(r.system, "system.");
        n(i, l);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (i, r, t, a) => {
      const l = i.parent;
      if (l instanceof Actor) {
        const d = {}, u = `items.${i.id}.`;
        r.system && lt(r.system, `${u}system.`, d);
        for (let g in r)
          g !== "system" && g !== "_id" && (d[`${u}${g}`] = r[g]);
        Object.keys(d).length > 0 && n(l, d);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (i, r, t) => {
      const a = i.parent;
      if (a instanceof Actor) {
        const l = {
          [`items.+${i.id}`]: i.toObject()
        };
        n(a, l);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (i, r, t) => {
      const a = i.parent;
      if (a instanceof Actor) {
        const l = {
          [`items.${i.id}`]: null
        };
        n(a, l);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (i, r) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (i, r, t, a) => {
      (r.x || r.y || r.disposition || r.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.deleteToken = Hooks.on("deleteToken", (i, r, t) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (i, r, t) => {
      i.author.id === game.user.id && (this._isCapturingRoll || i.rolls && i.rolls.length > 0 && this.broadcastRoll(i));
    });
  }
  broadcastRefresh(n) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: n });
  }
  broadcastRoll(n) {
    var a;
    const i = game.users.get(n.author.id), r = n.rolls[0];
    let t = "publicroll";
    if (n.blind)
      t = "blindroll";
    else if (n.whisper && n.whisper.length > 0) {
      const l = game.users.filter((g) => g.isGM).map((g) => g.id), d = n.whisper.every((g) => l.includes(g) || g === n.author.id);
      n.whisper.length === 1 && n.whisper[0] === n.author.id ? t = "selfroll" : t = "gmroll";
    }
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((a = n.speaker) == null ? void 0 : a.actor) || null,
      agentLink: i ? i.getFlag(R, "agent-link") : null,
      playerName: n.alias,
      total: r.total,
      formula: r.formula,
      rollMode: n.rollMode || t,
      label: n.flavor || "Dice Roll",
      rawRoll: {
        total: r.total,
        formula: r.formula,
        rollTitle: n.flavor || "Dice Roll",
        _roll: r.toJSON()
      },
      success: !0
    });
  }
  /**
   * Send results back to Laravel
   */
  async sendResponse(n) {
    let i = game.settings.get(R, "apiUrl");
    const r = game.settings.get(R, "apiKey");
    if (!i || !r) return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const t = (n.requestId ? this.requestAgentLinks.get(n.requestId) : null) || game.user.getFlag(R, "agent-link");
    t && !n.agentLink && (n.agentLink = t);
    const a = game.settings.get(R, "channelId");
    if (a && !n.channelId && (n.channelId = a), n.type === "ROLL_RESULT") {
      if (!n.playerName) {
        const l = n.actorId ? game.actors.get(n.actorId) : null;
        n.playerName = l ? l.name : game.user.name;
      }
      n.rollMode || (n.rollMode = game.settings.get("core", "rollMode"));
    }
    try {
      const l = await fetch(`${i}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${r}`,
          Accept: "application/json"
        },
        body: JSON.stringify(n)
      });
      return l.ok ? await l.json() : (console.error("Cyberpunk Bridge: Callback failed", l.statusText), null);
    } catch (l) {
      return console.error("Cyberpunk Bridge: Error sending callback", l), null;
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(n) {
    var b, m;
    const i = n.payload || n, r = i.type;
    console.log(`%c[Bridge] Incoming Call: ${r}`, "color: #00ffff; font-weight: bold;", i);
    const t = i.requestId, a = i.agent_link || i.agentLink;
    t && a && (this.requestAgentLinks.set(t, a), setTimeout(() => this.requestAgentLinks.delete(t), 3e4));
    const l = game.user.getFlag(R, "agent-link"), d = i.actorId, u = (b = game.user.character) == null ? void 0 : b.id, g = game.settings.get(R, "debugMode");
    g && console.log(`[Bridge] handleIncomingData: requestId=${t}, agentLink=${a}, myAgentLink=${l}, actorId=${d}, myCharacterId=${u}`);
    let p = !1;
    if (game.user.isGM || l && (t === l || a === l) ? p = !0 : !l && t && d && u === d && (console.log(`[Bridge] Discovery: Matching incoming request to character ${d}`), p = !0), !p) {
      g && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && a && l !== a && (t === a || d && u === d) && (console.log(`%c[Bridge] Setting agent-link flag: ${a}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(R, "agent-link", a), (m = ui.notifications) == null || m.info("Agent: Account linked!"));
    let k = i.tokenId;
    if (!k && d) {
      const _ = canvas.tokens.placeables.find((C) => {
        var w;
        return ((w = C.actor) == null ? void 0 : w.id) === d;
      });
      _ && (k = _.id);
    }
    await Bo(this, r, i, { type: r, requestId: t, actorId: d, tokenId: k, debug: g });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class Ln extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const n = foundry.data.fields;
    return {
      // An array of dynamic rows
      entries: new n.ArrayField(new n.SchemaField({
        id: new n.StringField({ required: !0, initial: () => foundry.utils.randomID() }),
        icon: new n.FilePathField({ categories: ["IMAGE"], initial: "icons/svg/item-bag.svg" }),
        title: new n.StringField({ required: !0, initial: "Link Title" }),
        type: new n.StringField({ choices: ["html", "pdf"], initial: "html" }),
        htmlContent: new n.HTMLField(),
        pdfPath: new n.FilePathField({ categories: ["TEXT"] })
      }))
    };
  }
}
nt(Ln, "metadata", {
  label: "Agent Data Pool"
});
class Mn extends JournalPageSheet {
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
  async getData(n) {
    const i = super.getData(n);
    i.entries = this.document.system.entries || [];
    for (let r of i.entries)
      r.type === "html" && (r.enrichedHtml = await TextEditor.enrichHTML(r.htmlContent, {
        async: !0,
        secrets: this.document.isOwner,
        documents: !0
      }));
    return i;
  }
  activateListeners(n) {
    super.activateListeners(n), n.find(".add-entry").click(this._onAddEntry.bind(this)), n.find(".delete-entry").click(this._onDeleteEntry.bind(this));
  }
  async _onAddEntry(n) {
    n.preventDefault();
    const r = [...this.document.system.entries || [], {
      id: foundry.utils.randomID(),
      title: "New Data Pool Link",
      type: "html"
    }];
    await this.document.update({ "system.entries": r });
  }
  async _onDeleteEntry(n) {
    n.preventDefault();
    const i = n.currentTarget.dataset.id, t = (this.document.system.entries || []).filter((a) => a.id !== i);
    await this.document.update({ "system.entries": t });
  }
}
/** @override */
nt(Mn, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
window.Pusher = Ki;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new Do();
Hooks.once("init", () => {
  Fo(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = Ln, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", Mn, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), eo(window.cyberpunkBridge), console.log("[Bridge] Cyberpunk Bridge Fully Online.");
});
function Fo() {
  game.settings.settings.has(`${R}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
