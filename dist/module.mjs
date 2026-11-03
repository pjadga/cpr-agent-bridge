var ai = Object.defineProperty;
var ci = (i, e, r) => e in i ? ai(i, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[e] = r;
var gt = (i, e, r) => ci(i, typeof e != "symbol" ? e + "" : e, r);
import.meta.hot && import.meta.hot.accept((i) => {
  console.log("Hot reloading module...");
});
function li(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var In = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(i, e) {
  (function(s, n) {
    i.exports = n();
  })(window, function() {
    return (
      /******/
      function(r) {
        var s = {};
        function n(o) {
          if (s[o])
            return s[o].exports;
          var l = s[o] = {
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
        return n.m = r, n.c = s, n.d = function(o, l, h) {
          n.o(o, l) || Object.defineProperty(o, l, { enumerable: !0, get: h });
        }, n.r = function(o) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
        }, n.t = function(o, l) {
          if (l & 1 && (o = n(o)), l & 8 || l & 4 && typeof o == "object" && o && o.__esModule) return o;
          var h = /* @__PURE__ */ Object.create(null);
          if (n.r(h), Object.defineProperty(h, "default", { enumerable: !0, value: o }), l & 2 && typeof o != "string") for (var u in o) n.d(h, u, (function(f) {
            return o[f];
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
        function(r, s, n) {
          var o = this && this.__extends || /* @__PURE__ */ function() {
            var _ = function(k, v) {
              return _ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, R) {
                S.__proto__ = R;
              } || function(S, R) {
                for (var I in R) R.hasOwnProperty(I) && (S[I] = R[I]);
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
          Object.defineProperty(s, "__esModule", { value: !0 });
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
                  var R = k[S] << 16 | k[S + 1] << 8 | k[S + 2];
                  v += this._encodeByte(R >>> 3 * 6 & 63), v += this._encodeByte(R >>> 2 * 6 & 63), v += this._encodeByte(R >>> 1 * 6 & 63), v += this._encodeByte(R >>> 0 * 6 & 63);
                }
                var I = k.length - S;
                if (I > 0) {
                  var R = k[S] << 16 | (I === 2 ? k[S + 1] << 8 : 0);
                  v += this._encodeByte(R >>> 3 * 6 & 63), v += this._encodeByte(R >>> 2 * 6 & 63), I === 2 ? v += this._encodeByte(R >>> 1 * 6 & 63) : v += this._paddingCharacter || "", v += this._paddingCharacter || "";
                }
                return v;
              }, _.prototype.maxDecodedLength = function(k) {
                return this._paddingCharacter ? k / 4 * 3 | 0 : (k * 6 + 7) / 8 | 0;
              }, _.prototype.decodedLength = function(k) {
                return this.maxDecodedLength(k.length - this._getPaddingLength(k));
              }, _.prototype.decode = function(k) {
                if (k.length === 0)
                  return new Uint8Array(0);
                for (var v = this._getPaddingLength(k), S = k.length - v, R = new Uint8Array(this.maxDecodedLength(S)), I = 0, P = 0, E = 0, O = 0, B = 0, U = 0, H = 0; P < S - 4; P += 4)
                  O = this._decodeChar(k.charCodeAt(P + 0)), B = this._decodeChar(k.charCodeAt(P + 1)), U = this._decodeChar(k.charCodeAt(P + 2)), H = this._decodeChar(k.charCodeAt(P + 3)), R[I++] = O << 2 | B >>> 4, R[I++] = B << 4 | U >>> 2, R[I++] = U << 6 | H, E |= O & l, E |= B & l, E |= U & l, E |= H & l;
                if (P < S - 1 && (O = this._decodeChar(k.charCodeAt(P)), B = this._decodeChar(k.charCodeAt(P + 1)), R[I++] = O << 2 | B >>> 4, E |= O & l, E |= B & l), P < S - 2 && (U = this._decodeChar(k.charCodeAt(P + 2)), R[I++] = B << 4 | U >>> 2, E |= U & l), P < S - 3 && (H = this._decodeChar(k.charCodeAt(P + 3)), R[I++] = U << 6 | H, E |= H & l), E !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return R;
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
          s.Coder = h;
          var u = new h();
          function f(_) {
            return u.encode(_);
          }
          s.encode = f;
          function p(_) {
            return u.decode(_);
          }
          s.decode = p;
          var y = (
            /** @class */
            function(_) {
              o(k, _);
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
          s.URLSafeCoder = y;
          var m = new y();
          function b(_) {
            return m.encode(_);
          }
          s.encodeURLSafe = b;
          function C(_) {
            return m.decode(_);
          }
          s.decodeURLSafe = C, s.encodedLength = function(_) {
            return u.encodedLength(_);
          }, s.maxDecodedLength = function(_) {
            return u.maxDecodedLength(_);
          }, s.decodedLength = function(_) {
            return u.decodedLength(_);
          };
        },
        /* 1 */
        /***/
        function(r, s, n) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var o = "utf8: invalid string", l = "utf8: invalid source encoding";
          function h(p) {
            for (var y = new Uint8Array(u(p)), m = 0, b = 0; b < p.length; b++) {
              var C = p.charCodeAt(b);
              C < 128 ? y[m++] = C : C < 2048 ? (y[m++] = 192 | C >> 6, y[m++] = 128 | C & 63) : C < 55296 ? (y[m++] = 224 | C >> 12, y[m++] = 128 | C >> 6 & 63, y[m++] = 128 | C & 63) : (b++, C = (C & 1023) << 10, C |= p.charCodeAt(b) & 1023, C += 65536, y[m++] = 240 | C >> 18, y[m++] = 128 | C >> 12 & 63, y[m++] = 128 | C >> 6 & 63, y[m++] = 128 | C & 63);
            }
            return y;
          }
          s.encode = h;
          function u(p) {
            for (var y = 0, m = 0; m < p.length; m++) {
              var b = p.charCodeAt(m);
              if (b < 128)
                y += 1;
              else if (b < 2048)
                y += 2;
              else if (b < 55296)
                y += 3;
              else if (b <= 57343) {
                if (m >= p.length - 1)
                  throw new Error(o);
                m++, y += 4;
              } else
                throw new Error(o);
            }
            return y;
          }
          s.encodedLength = u;
          function f(p) {
            for (var y = [], m = 0; m < p.length; m++) {
              var b = p[m];
              if (b & 128) {
                var C = void 0;
                if (b < 224) {
                  if (m >= p.length)
                    throw new Error(l);
                  var _ = p[++m];
                  if ((_ & 192) !== 128)
                    throw new Error(l);
                  b = (b & 31) << 6 | _ & 63, C = 128;
                } else if (b < 240) {
                  if (m >= p.length - 1)
                    throw new Error(l);
                  var _ = p[++m], k = p[++m];
                  if ((_ & 192) !== 128 || (k & 192) !== 128)
                    throw new Error(l);
                  b = (b & 15) << 12 | (_ & 63) << 6 | k & 63, C = 2048;
                } else if (b < 248) {
                  if (m >= p.length - 2)
                    throw new Error(l);
                  var _ = p[++m], k = p[++m], v = p[++m];
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
                  b -= 65536, y.push(String.fromCharCode(55296 | b >> 10)), b = 56320 | b & 1023;
                }
              }
              y.push(String.fromCharCode(b));
            }
            return y.join("");
          }
          s.decode = f;
        },
        /* 2 */
        /***/
        function(r, s, n) {
          r.exports = n(3).default;
        },
        /* 3 */
        /***/
        function(r, s, n) {
          n.r(s);
          class o {
            constructor(t, a) {
              this.lastId = 0, this.prefix = t, this.name = a;
            }
            create(t) {
              this.lastId++;
              var a = this.lastId, d = this.prefix + a, g = this.name + "[" + a + "]", w = !1, T = function() {
                w || (t.apply(null, arguments), w = !0);
              };
              return this[a] = T, { number: a, id: d, name: g, callback: T };
            }
            remove(t) {
              delete this[t.number];
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
          class f {
            constructor(t) {
              this.options = t, this.receivers = t.receivers || l, this.loading = {};
            }
            load(t, a, d) {
              var g = this;
              if (g.loading[t] && g.loading[t].length > 0)
                g.loading[t].push(d);
              else {
                g.loading[t] = [d];
                var w = N.createScriptRequest(g.getPath(t, a)), T = g.receivers.create(function(L) {
                  if (g.receivers.remove(T), g.loading[t]) {
                    var M = g.loading[t];
                    delete g.loading[t];
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
              var a, d = N.getDocument().location.protocol;
              return t && t.useTLS || d === "https:" ? a = this.options.cdn_https : a = this.options.cdn_http, a.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(t, a) {
              return this.getRoot(a) + "/" + t + this.options.suffix + ".js";
            }
          }
          var p = new o("_pusher_dependencies", "Pusher.DependenciesReceivers"), y = new f({
            cdn_http: u.cdn_http,
            cdn_https: u.cdn_https,
            version: u.VERSION,
            suffix: u.dependency_suffix,
            receivers: p
          });
          const m = {
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
            const t = "See:", a = m.urls[c];
            if (!a)
              return "";
            let d;
            return a.fullUrl ? d = a.fullUrl : a.path && (d = m.baseUrl + a.path), d ? `${t} ${d}` : "";
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
          class R extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class I extends Error {
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
          class O extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class B extends Error {
            constructor(t, a) {
              super(a), this.status = t, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var H = function(c, t, a, d, g) {
            const w = N.createXHR();
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
                    g(new B(200, `JSON returned from ${d.toString()} endpoint was invalid, yet status code was 200. Data was: ${w.responseText}`), null);
                  }
                  M && g(null, L);
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
                  g(new B(w.status, `Unable to retrieve auth string from ${d.toString()} endpoint - received status: ${w.status} from ${a.endpoint}. ${L}`), null);
                }
            }, w.send(t), w;
          };
          function Y(c) {
            return Ne(Pe(c));
          }
          var Z = String.fromCharCode, F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tt = function(c) {
            var t = c.charCodeAt(0);
            return t < 128 ? c : t < 2048 ? Z(192 | t >>> 6) + Z(128 | t & 63) : Z(224 | t >>> 12 & 15) + Z(128 | t >>> 6 & 63) + Z(128 | t & 63);
          }, Pe = function(c) {
            return c.replace(/[^\x00-\x7F]/g, tt);
          }, Me = function(c) {
            var t = [0, 2, 1][c.length % 3], a = c.charCodeAt(0) << 16 | (c.length > 1 ? c.charCodeAt(1) : 0) << 8 | (c.length > 2 ? c.charCodeAt(2) : 0), d = [
              F.charAt(a >>> 18),
              F.charAt(a >>> 12 & 63),
              t >= 2 ? "=" : F.charAt(a >>> 6 & 63),
              t >= 1 ? "=" : F.charAt(a & 63)
            ];
            return d.join("");
          }, Ne = window.btoa || function(c) {
            return c.replace(/[\s\S]{1,3}/g, Me);
          };
          class Oe {
            constructor(t, a, d, g) {
              this.clear = a, this.timer = t(() => {
                this.timer && (this.timer = g(this.timer));
              }, d);
            }
            isRunning() {
              return this.timer !== null;
            }
            ensureAborted() {
              this.timer && (this.clear(this.timer), this.timer = null);
            }
          }
          var we = Oe;
          function Be(c) {
            window.clearTimeout(c);
          }
          function ue(c) {
            window.clearInterval(c);
          }
          class ee extends we {
            constructor(t, a) {
              super(setTimeout, Be, t, function(d) {
                return a(), null;
              });
            }
          }
          class he extends we {
            constructor(t, a) {
              super(setInterval, ue, t, function(d) {
                return a(), d;
              });
            }
          }
          var de = {
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
          }, G = de;
          function W(c, ...t) {
            for (var a = 0; a < t.length; a++) {
              var d = t[a];
              for (var g in d)
                d[g] && d[g].constructor && d[g].constructor === Object ? c[g] = W(c[g] || {}, d[g]) : c[g] = d[g];
            }
            return c;
          }
          function xe() {
            for (var c = ["Pusher"], t = 0; t < arguments.length; t++)
              typeof arguments[t] == "string" ? c.push(arguments[t]) : c.push(De(arguments[t]));
            return c.join(" : ");
          }
          function jt(c, t) {
            var a = Array.prototype.indexOf;
            if (c === null)
              return -1;
            if (a && c.indexOf === a)
              return c.indexOf(t);
            for (var d = 0, g = c.length; d < g; d++)
              if (c[d] === t)
                return d;
            return -1;
          }
          function ne(c, t) {
            for (var a in c)
              Object.prototype.hasOwnProperty.call(c, a) && t(c[a], a, c);
          }
          function Ht(c) {
            var t = [];
            return ne(c, function(a, d) {
              t.push(d);
            }), t;
          }
          function cr(c) {
            var t = [];
            return ne(c, function(a) {
              t.push(a);
            }), t;
          }
          function ke(c, t, a) {
            for (var d = 0; d < c.length; d++)
              t.call(a || window, c[d], d, c);
          }
          function zt(c, t) {
            for (var a = [], d = 0; d < c.length; d++)
              a.push(t(c[d], d, c, a));
            return a;
          }
          function lr(c, t) {
            var a = {};
            return ne(c, function(d, g) {
              a[g] = t(d);
            }), a;
          }
          function $t(c, t) {
            t = t || function(g) {
              return !!g;
            };
            for (var a = [], d = 0; d < c.length; d++)
              t(c[d], d, c, a) && a.push(c[d]);
            return a;
          }
          function Gt(c, t) {
            var a = {};
            return ne(c, function(d, g) {
              (t && t(d, g, c, a) || d) && (a[g] = d);
            }), a;
          }
          function ur(c) {
            var t = [];
            return ne(c, function(a, d) {
              t.push([d, a]);
            }), t;
          }
          function qt(c, t) {
            for (var a = 0; a < c.length; a++)
              if (t(c[a], a, c))
                return !0;
            return !1;
          }
          function hr(c, t) {
            for (var a = 0; a < c.length; a++)
              if (!t(c[a], a, c))
                return !1;
            return !0;
          }
          function dr(c) {
            return lr(c, function(t) {
              return typeof t == "object" && (t = De(t)), encodeURIComponent(Y(t.toString()));
            });
          }
          function fr(c) {
            var t = Gt(c, function(d) {
              return d !== void 0;
            }), a = zt(ur(dr(t)), G.method("join", "=")).join("&");
            return a;
          }
          function pr(c) {
            var t = [], a = [];
            return function d(g, w) {
              var T, L, M;
              switch (typeof g) {
                case "object":
                  if (!g)
                    return null;
                  for (T = 0; T < t.length; T += 1)
                    if (t[T] === g)
                      return { $ref: a[T] };
                  if (t.push(g), a.push(w), Object.prototype.toString.apply(g) === "[object Array]")
                    for (M = [], T = 0; T < g.length; T += 1)
                      M[T] = d(g[T], w + "[" + T + "]");
                  else {
                    M = {};
                    for (L in g)
                      Object.prototype.hasOwnProperty.call(g, L) && (M[L] = d(g[L], w + "[" + JSON.stringify(L) + "]"));
                  }
                  return M;
                case "number":
                case "string":
                case "boolean":
                  return g;
              }
            }(c, "$");
          }
          function De(c) {
            try {
              return JSON.stringify(c);
            } catch {
              return JSON.stringify(pr(c));
            }
          }
          class gr {
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
              var d = xe.apply(this, arguments);
              dt.log ? dt.log(d) : dt.logToConsole && t.bind(this)(d);
            }
          }
          var j = new gr(), mr = function(c, t, a, d, g) {
            (a.headers !== void 0 || a.headersProvider != null) && j.warn(`To send headers with the ${d.toString()} request, you must use AJAX, rather than JSONP.`);
            var w = c.nextAuthCallbackID.toString();
            c.nextAuthCallbackID++;
            var T = c.getDocument(), L = T.createElement("script");
            c.auth_callbacks[w] = function(D) {
              g(null, D);
            };
            var M = "Pusher.auth_callbacks['" + w + "']";
            L.src = a.endpoint + "?callback=" + encodeURIComponent(M) + "&" + t;
            var x = T.getElementsByTagName("head")[0] || T.documentElement;
            x.insertBefore(L, x.firstChild);
          }, yr = mr;
          class br {
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
              var g = document.getElementsByTagName("head")[0];
              g.insertBefore(a.script, g.firstChild), a.errorScript && g.insertBefore(a.errorScript, a.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class vr {
            constructor(t, a) {
              this.url = t, this.data = a;
            }
            send(t) {
              if (!this.request) {
                var a = fr(this.data), d = this.url + "/" + t.number + "?" + a;
                this.request = N.createScriptRequest(d), this.request.send(t);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var wr = function(c, t) {
            return function(a, d) {
              var g = "http" + (t ? "s" : "") + "://", w = g + (c.host || c.options.host) + c.options.path, T = N.createJSONPRequest(w, a), L = N.ScriptReceivers.create(function(M, x) {
                l.remove(L), T.cleanup(), x && x.host && (c.host = x.host), d && d(M, x);
              });
              T.send(L);
            };
          }, kr = {
            name: "jsonp",
            getAgent: wr
          }, _r = kr;
          function nt(c, t, a) {
            var d = c + (t.useTLS ? "s" : ""), g = t.useTLS ? t.hostTLS : t.hostNonTLS;
            return d + "://" + g + a;
          }
          function rt(c, t) {
            var a = "/app/" + c, d = "?protocol=" + u.PROTOCOL + "&client=js&version=" + u.VERSION + (t ? "&" + t : "");
            return a + d;
          }
          var Cr = {
            getInitial: function(c, t) {
              var a = (t.httpPath || "") + rt(c, "flash=false");
              return nt("ws", t, a);
            }
          }, Sr = {
            getInitial: function(c, t) {
              var a = (t.httpPath || "/pusher") + rt(c);
              return nt("http", t, a);
            }
          }, Tr = {
            getInitial: function(c, t) {
              return nt("http", t, t.httpPath || "/pusher");
            },
            getPath: function(c, t) {
              return rt(c);
            }
          };
          class Ar {
            constructor() {
              this._callbacks = {};
            }
            get(t) {
              return this._callbacks[st(t)];
            }
            add(t, a, d) {
              var g = st(t);
              this._callbacks[g] = this._callbacks[g] || [], this._callbacks[g].push({
                fn: a,
                context: d
              });
            }
            remove(t, a, d) {
              if (!t && !a && !d) {
                this._callbacks = {};
                return;
              }
              var g = t ? [st(t)] : Ht(this._callbacks);
              a || d ? this.removeCallback(g, a, d) : this.removeAllCallbacks(g);
            }
            removeCallback(t, a, d) {
              ke(t, function(g) {
                this._callbacks[g] = $t(this._callbacks[g] || [], function(w) {
                  return a && a !== w.fn || d && d !== w.context;
                }), this._callbacks[g].length === 0 && delete this._callbacks[g];
              }, this);
            }
            removeAllCallbacks(t) {
              ke(t, function(a) {
                delete this._callbacks[a];
              }, this);
            }
          }
          function st(c) {
            return "_" + c;
          }
          class re {
            constructor(t) {
              this.callbacks = new Ar(), this.global_callbacks = [], this.failThrough = t;
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
              return t ? (this.global_callbacks = $t(this.global_callbacks || [], (a) => a !== t), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(t, a, d) {
              for (var g = 0; g < this.global_callbacks.length; g++)
                this.global_callbacks[g](t, a);
              var w = this.callbacks.get(t), T = [];
              if (d ? T.push(a, d) : a && T.push(a), w && w.length > 0)
                for (var g = 0; g < w.length; g++)
                  w[g].fn.apply(w[g].context || window, T);
              else this.failThrough && this.failThrough(t, a);
              return this;
            }
          }
          class Rr extends re {
            constructor(t, a, d, g, w) {
              super(), this.initialize = N.transportConnectionInitializer, this.hooks = t, this.name = a, this.priority = d, this.key = g, this.options = w, this.state = "new", this.timeline = w.timeline, this.activityTimeout = w.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                return G.defer(() => {
                  this.onError(a), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), j.debug("Connecting", { transport: this.name, url: t }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(t) {
              return this.state === "open" ? (G.defer(() => {
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
          class fe {
            constructor(t) {
              this.hooks = t;
            }
            isSupported(t) {
              return this.hooks.isSupported(t);
            }
            createConnection(t, a, d, g) {
              return new Rr(this.hooks, t, a, d, g);
            }
          }
          var Ir = new fe({
            urls: Cr,
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
          }), Vt = {
            urls: Sr,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, Wt = W({
            getSocket: function(c) {
              return N.HTTPFactory.createStreamingSocket(c);
            }
          }, Vt), Kt = W({
            getSocket: function(c) {
              return N.HTTPFactory.createPollingSocket(c);
            }
          }, Vt), Jt = {
            isSupported: function() {
              return N.isXHRSupported();
            }
          }, Er = new fe(W({}, Wt, Jt)), Lr = new fe(W({}, Kt, Jt)), Pr = {
            ws: Ir,
            xhr_streaming: Er,
            xhr_polling: Lr
          }, Fe = Pr, Mr = new fe({
            file: "sockjs",
            urls: Tr,
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
                js_path: y.getPath("sockjs", {
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
          }), Xt = {
            isSupported: function(c) {
              var t = N.isXDRSupported(c.useTLS);
              return t;
            }
          }, Nr = new fe(W({}, Wt, Xt)), Or = new fe(W({}, Kt, Xt));
          Fe.xdr_streaming = Nr, Fe.xdr_polling = Or, Fe.sockjs = Mr;
          var Br = Fe;
          class xr extends re {
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
          var Dr = new xr();
          class Fr {
            constructor(t, a, d) {
              this.manager = t, this.transport = a, this.minPingDelay = d.minPingDelay, this.maxPingDelay = d.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(t, a, d, g) {
              g = W({}, g, {
                activityTimeout: this.pingDelay
              });
              var w = this.transport.createConnection(t, a, d, g), T = null, L = function() {
                w.unbind("open", L), w.bind("closed", M), T = G.now();
              }, M = (x) => {
                if (w.unbind("closed", M), x.code === 1002 || x.code === 1003)
                  this.manager.reportDeath();
                else if (!x.wasClean && T) {
                  var D = G.now() - T;
                  D < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(D / 2, this.minPingDelay));
                }
              };
              return w.bind("open", L), w;
            }
            isSupported(t) {
              return this.manager.isAlive() && this.transport.isSupported(t);
            }
          }
          const Yt = {
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
              } catch (g) {
                throw { type: "MessageParseError", error: g, data: c.data };
              }
            },
            encodeMessage: function(c) {
              return JSON.stringify(c);
            },
            processHandshake: function(c) {
              var t = Yt.decodeMessage(c);
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
          var ae = Yt;
          class Ur extends re {
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
              var g = { event: t, data: a };
              return d && (g.channel = d), j.debug("Event sent", g), this.send(ae.encodeMessage(g));
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
                  var g;
                  try {
                    g = ae.decodeMessage(d);
                  } catch (w) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: w,
                      data: d.data
                    });
                  }
                  if (g !== void 0) {
                    switch (j.debug("Event recd", g), g.event) {
                      case "pusher:error":
                        this.emit("error", {
                          type: "PusherError",
                          data: g.data
                        });
                        break;
                      case "pusher:ping":
                        this.emit("ping");
                        break;
                      case "pusher:pong":
                        this.emit("pong");
                        break;
                    }
                    this.emit("message", g);
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
                ne(t, (d, g) => {
                  this.transport.unbind(g, d);
                });
              };
              ne(t, (d, g) => {
                this.transport.bind(g, d);
              });
            }
            handleCloseEvent(t) {
              var a = ae.getCloseAction(t), d = ae.getCloseError(t);
              d && this.emit("error", d), a && this.emit(a, { action: a, error: d });
            }
          }
          class jr {
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
                  connection: new Ur(a.id, this.transport),
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
          class Hr {
            constructor(t, a) {
              this.timeline = t, this.options = a || {};
            }
            send(t, a) {
              this.timeline.isEmpty() || this.timeline.send(N.TimelineTransport.getAgent(this, t), a);
            }
          }
          class it extends re {
            constructor(t, a) {
              super(function(d, g) {
                j.debug("No callbacks on " + t + " for " + d);
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
                j.warn(`Client event triggered before channel 'subscription_succeeded' event . ${d}`);
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
                var g = {};
                this.emit(a, d, g);
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
                t ? (this.subscriptionPending = !1, j.error(t.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
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
          class ot extends it {
            authorize(t, a) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: t
              }, a);
            }
          }
          class zr {
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
          var $r = function(c, t, a, d) {
            function g(w) {
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
                D.done ? w(D.value) : g(D.value).then(L, M);
              }
              x((d = d.apply(c, t || [])).next());
            });
          };
          class Gr extends ot {
            constructor(t, a) {
              super(t, a), this.members = new zr();
            }
            authorize(t, a) {
              super.authorize(t, (d, g) => $r(this, void 0, void 0, function* () {
                if (!d)
                  if (g = g, g.channel_data != null) {
                    var w = JSON.parse(g.channel_data);
                    this.members.setMyID(w.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let T = C.buildLogSuffix("authorizationEndpoint");
                    j.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${T}, or the user should be signed in.`), a("Invalid auth response");
                    return;
                  }
                a(d, g);
              }));
            }
            handleEvent(t) {
              var a = t.event;
              if (a.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(t);
              else {
                var d = t.data, g = {};
                t.user_id && (g.user_id = t.user_id), this.emit(a, d, g);
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
                  var g = this.members.addMember(d);
                  this.emit("pusher:member_added", g);
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
          var qr = n(1), at = n(0);
          class Vr extends ot {
            constructor(t, a, d) {
              super(t, a), this.key = null, this.nacl = d;
            }
            authorize(t, a) {
              super.authorize(t, (d, g) => {
                if (d) {
                  a(d, g);
                  return;
                }
                let w = g.shared_secret;
                if (!w) {
                  a(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(at.decode)(w), delete g.shared_secret, a(null, g);
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
                j.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                return;
              }
              if (!a.ciphertext || !a.nonce) {
                j.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + a);
                return;
              }
              let d = Object(at.decode)(a.ciphertext);
              if (d.length < this.nacl.secretbox.overheadLength) {
                j.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${d.length}`);
                return;
              }
              let g = Object(at.decode)(a.nonce);
              if (g.length < this.nacl.secretbox.nonceLength) {
                j.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${g.length}`);
                return;
              }
              let w = this.nacl.secretbox.open(d, g, this.key);
              if (w === null) {
                j.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (T, L) => {
                  if (T) {
                    j.error(`Failed to make a request to the authEndpoint: ${L}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (w = this.nacl.secretbox.open(d, g, this.key), w === null) {
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
              let a = Object(qr.decode)(t);
              try {
                return JSON.parse(a);
              } catch {
                return a;
              }
            }
          }
          class Wr extends re {
            constructor(t, a) {
              super(), this.state = "initialized", this.connection = null, this.key = t, this.options = a, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
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
                var g = t;
                g === "connected" && (g += " with new socket ID " + a.socket_id), j.debug("State changed", d + " -> " + g), this.timeline.info({ state: t, params: a }), this.emit("state_change", { previous: d, current: t }), this.emit(t, a);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class Kr {
            constructor() {
              this.channels = {};
            }
            add(t, a) {
              return this.channels[t] || (this.channels[t] = Jr(t, a)), this.channels[t];
            }
            all() {
              return cr(this.channels);
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
          function Jr(c, t) {
            if (c.indexOf("private-encrypted-") === 0) {
              if (t.config.nacl)
                return se.createEncryptedChannel(c, t, t.config.nacl);
              let a = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", d = C.buildLogSuffix("encryptedChannelSupport");
              throw new P(`${a}. ${d}`);
            } else {
              if (c.indexOf("private-") === 0)
                return se.createPrivateChannel(c, t);
              if (c.indexOf("presence-") === 0)
                return se.createPresenceChannel(c, t);
              if (c.indexOf("#") === 0)
                throw new v('Cannot create a channel with name "' + c + '".');
              return se.createChannel(c, t);
            }
          }
          var Xr = {
            createChannels() {
              return new Kr();
            },
            createConnectionManager(c, t) {
              return new Wr(c, t);
            },
            createChannel(c, t) {
              return new it(c, t);
            },
            createPrivateChannel(c, t) {
              return new ot(c, t);
            },
            createPresenceChannel(c, t) {
              return new Gr(c, t);
            },
            createEncryptedChannel(c, t, a) {
              return new Vr(c, t, a);
            },
            createTimelineSender(c, t) {
              return new Hr(c, t);
            },
            createHandshake(c, t) {
              return new jr(c, t);
            },
            createAssistantToTheTransportManager(c, t, a) {
              return new Fr(c, t, a);
            }
          }, se = Xr;
          class Qt {
            constructor(t) {
              this.options = t || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(t) {
              return se.createAssistantToTheTransportManager(this, t, {
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
              return qt(this.strategies, G.method("isSupported"));
            }
            connect(t, a) {
              var d = this.strategies, g = 0, w = this.timeout, T = null, L = (M, x) => {
                x ? a(null, x) : (g = g + 1, this.loop && (g = g % d.length), g < d.length ? (w && (w = w * 2, this.timeoutLimit && (w = Math.min(w, this.timeoutLimit))), T = this.tryStrategy(d[g], t, { timeout: w, failFast: this.failFast }, L)) : a(!0));
              };
              return T = this.tryStrategy(d[g], t, { timeout: w, failFast: this.failFast }, L), {
                abort: function() {
                  T.abort();
                },
                forceMinPriority: function(M) {
                  t = M, T && T.forceMinPriority(M);
                }
              };
            }
            tryStrategy(t, a, d, g) {
              var w = null, T = null;
              return d.timeout > 0 && (w = new ee(d.timeout, function() {
                T.abort(), g(!0);
              })), T = t.connect(a, function(L, M) {
                L && w && w.isRunning() && !d.failFast || (w && w.ensureAborted(), g(L, M));
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
          class ct {
            constructor(t) {
              this.strategies = t;
            }
            isSupported() {
              return qt(this.strategies, G.method("isSupported"));
            }
            connect(t, a) {
              return Yr(this.strategies, t, function(d, g) {
                return function(w, T) {
                  if (g[d].error = w, w) {
                    Qr(g) && a(!0);
                    return;
                  }
                  ke(g, function(L) {
                    L.forceMinPriority(T.transport.priority);
                  }), a(null, T);
                };
              });
            }
          }
          function Yr(c, t, a) {
            var d = zt(c, function(g, w, T, L) {
              return g.connect(t, a(w, L));
            });
            return {
              abort: function() {
                ke(d, Zr);
              },
              forceMinPriority: function(g) {
                ke(d, function(w) {
                  w.forceMinPriority(g);
                });
              }
            };
          }
          function Qr(c) {
            return hr(c, function(t) {
              return !!t.error;
            });
          }
          function Zr(c) {
            !c.error && !c.aborted && (c.abort(), c.aborted = !0);
          }
          class es {
            constructor(t, a, d) {
              this.strategy = t, this.transports = a, this.ttl = d.ttl || 1800 * 1e3, this.usingTLS = d.useTLS, this.timeline = d.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.usingTLS, g = ts(d), w = g && g.cacheSkipCount ? g.cacheSkipCount : 0, T = [this.strategy];
              if (g && g.timestamp + this.ttl >= G.now()) {
                var L = this.transports[g.transport];
                L && (["ws", "wss"].includes(g.transport) || w > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: g.transport,
                  latency: g.latency
                }), T.push(new ce([L], {
                  timeout: g.latency * 2 + 1e3,
                  failFast: !0
                }))) : w++);
              }
              var M = G.now(), x = T.pop().connect(t, function D(z, He) {
                z ? (Zt(d), T.length > 0 ? (M = G.now(), x = T.pop().connect(t, D)) : a(z)) : (ns(d, He.transport.name, G.now() - M, w), a(null, He));
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
          function lt(c) {
            return "pusherTransport" + (c ? "TLS" : "NonTLS");
          }
          function ts(c) {
            var t = N.getLocalStorage();
            if (t)
              try {
                var a = t[lt(c)];
                if (a)
                  return JSON.parse(a);
              } catch {
                Zt(c);
              }
            return null;
          }
          function ns(c, t, a, d) {
            var g = N.getLocalStorage();
            if (g)
              try {
                g[lt(c)] = De({
                  timestamp: G.now(),
                  transport: t,
                  latency: a,
                  cacheSkipCount: d
                });
              } catch {
              }
          }
          function Zt(c) {
            var t = N.getLocalStorage();
            if (t)
              try {
                delete t[lt(c)];
              } catch {
              }
          }
          class Ue {
            constructor(t, { delay: a }) {
              this.strategy = t, this.options = { delay: a };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.strategy, g, w = new ee(this.options.delay, function() {
                g = d.connect(t, a);
              });
              return {
                abort: function() {
                  w.ensureAborted(), g && g.abort();
                },
                forceMinPriority: function(T) {
                  t = T, g && g.forceMinPriority(T);
                }
              };
            }
          }
          class _e {
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
          class rs {
            constructor(t) {
              this.strategy = t;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.strategy.connect(t, function(g, w) {
                w && d.abort(), a(g, w);
              });
              return d;
            }
          }
          function Ce(c) {
            return function() {
              return c.isSupported();
            };
          }
          var ss = function(c, t, a) {
            var d = {};
            function g(hn, ri, si, ii, oi) {
              var dn = a(c, hn, ri, si, ii, oi);
              return d[hn] = dn, dn;
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
            }, x = new Qt({
              minPingDelay: 1e4,
              maxPingDelay: c.activityTimeout
            }), D = new Qt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: c.activityTimeout
            }), z = g("ws", "ws", 3, w, x), He = g("wss", "ws", 3, T, x), Qs = g("sockjs", "sockjs", 1, L), sn = g("xhr_streaming", "xhr_streaming", 1, L, D), Zs = g("xdr_streaming", "xdr_streaming", 1, L, D), on = g("xhr_polling", "xhr_polling", 1, L), ei = g("xdr_polling", "xdr_polling", 1, L), an = new ce([z], M), ti = new ce([He], M), ni = new ce([Qs], M), cn = new ce([
              new _e(Ce(sn), sn, Zs)
            ], M), ln = new ce([
              new _e(Ce(on), on, ei)
            ], M), un = new ce([
              new _e(Ce(cn), new ct([
                cn,
                new Ue(ln, { delay: 4e3 })
              ]), ln)
            ], M), ft = new _e(Ce(un), un, ni), pt;
            return t.useTLS ? pt = new ct([
              an,
              new Ue(ft, { delay: 2e3 })
            ]) : pt = new ct([
              an,
              new Ue(ti, { delay: 2e3 }),
              new Ue(ft, { delay: 5e3 })
            ]), new es(new rs(new _e(Ce(z), pt, ft)), d, {
              ttl: 18e5,
              timeline: t.timeline,
              useTLS: t.useTLS
            });
          }, is = ss, os = function() {
            var c = this;
            c.timeline.info(c.buildTimelineMessage({
              transport: c.name + (c.options.useTLS ? "s" : "")
            })), c.hooks.isInitialized() ? c.changeState("initialized") : c.hooks.file ? (c.changeState("initializing"), y.load(c.hooks.file, { useTLS: c.options.useTLS }, function(t, a) {
              c.hooks.isInitialized() ? (c.changeState("initialized"), a(!0)) : (t && c.onError(t), c.onClose(), a(!1));
            })) : c.onClose();
          }, as = {
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
          }, cs = as;
          const ls = 256 * 1024;
          class us extends re {
            constructor(t, a, d) {
              super(), this.hooks = t, this.method = a, this.url = d;
            }
            start(t) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, N.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(t);
            }
            close() {
              this.unloader && (N.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
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
              return this.position === t.length && t.length > ls;
            }
          }
          var ut;
          (function(c) {
            c[c.CONNECTING = 0] = "CONNECTING", c[c.OPEN = 1] = "OPEN", c[c.CLOSED = 3] = "CLOSED";
          })(ut || (ut = {}));
          var le = ut, hs = 1;
          class ds {
            constructor(t, a) {
              this.hooks = t, this.session = tn(1e3) + "/" + ms(8), this.location = fs(a), this.readyState = le.CONNECTING, this.openStream();
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
                  return N.createSocketRequest("POST", en(ps(this.location, this.session))).start(t), !0;
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
                    for (var g = 0; g < a.length; g++)
                      this.onEvent(a[g]);
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
              this.readyState === le.CONNECTING ? (t && t.hostname && (this.location.base = gs(this.location.base, t.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
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
              this.stream = N.createSocketRequest("POST", en(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (t) => {
                this.onChunk(t);
              }), this.stream.bind("finished", (t) => {
                this.hooks.onFinished(this, t);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (t) {
                G.defer(() => {
                  this.onError(t), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function fs(c) {
            var t = /([^\?]*)\/*(\??.*)/.exec(c);
            return {
              base: t[1],
              queryString: t[2]
            };
          }
          function ps(c, t) {
            return c.base + "/" + t + "/xhr_send";
          }
          function en(c) {
            var t = c.indexOf("?") === -1 ? "?" : "&";
            return c + t + "t=" + +/* @__PURE__ */ new Date() + "&n=" + hs++;
          }
          function gs(c, t) {
            var a = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(c);
            return a[1] + t + a[3];
          }
          function tn(c) {
            return N.randomInt(c);
          }
          function ms(c) {
            for (var t = [], a = 0; a < c; a++)
              t.push(tn(32).toString(32));
            return t.join("");
          }
          var ys = ds, bs = {
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
          }, vs = bs, ws = {
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
          }, ks = ws, _s = {
            getRequest: function(c) {
              var t = N.getXHRAPI(), a = new t();
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
          }, Cs = _s, Ss = {
            createStreamingSocket(c) {
              return this.createSocket(vs, c);
            },
            createPollingSocket(c) {
              return this.createSocket(ks, c);
            },
            createSocket(c, t) {
              return new ys(c, t);
            },
            createXHR(c, t) {
              return this.createRequest(Cs, c, t);
            },
            createRequest(c, t, a) {
              return new us(c, t, a);
            }
          }, nn = Ss;
          nn.createXDR = function(c, t) {
            return this.createRequest(cs, c, t);
          };
          var Ts = nn, As = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: p,
            getDefaultStrategy: is,
            Transports: Br,
            transportConnectionInitializer: os,
            HTTPFactory: Ts,
            TimelineTransport: _r,
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
              window.JSON ? t() : y.load("json2", {}, t);
            },
            getDocument() {
              return document;
            },
            getProtocol() {
              return this.getDocument().location.protocol;
            },
            getAuthorizers() {
              return { ajax: H, jsonp: yr };
            },
            onDocumentBody(c) {
              document.body ? c() : setTimeout(() => {
                this.onDocumentBody(c);
              }, 0);
            },
            createJSONPRequest(c, t) {
              return new vr(c, t);
            },
            createScriptRequest(c) {
              return new br(c);
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
              return Dr;
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
          }, N = As, ht;
          (function(c) {
            c[c.ERROR = 3] = "ERROR", c[c.INFO = 6] = "INFO", c[c.DEBUG = 7] = "DEBUG";
          })(ht || (ht = {}));
          var je = ht;
          class Rs {
            constructor(t, a, d) {
              this.key = t, this.session = a, this.events = [], this.options = d || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(t, a) {
              t <= this.options.level && (this.events.push(W({}, a, { timestamp: G.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(t) {
              this.log(je.ERROR, t);
            }
            info(t) {
              this.log(je.INFO, t);
            }
            debug(t) {
              this.log(je.DEBUG, t);
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
              return this.events = [], t(d, (g, w) => {
                g || this.sent++, a && a(g, w);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class Is {
            constructor(t, a, d, g) {
              this.name = t, this.priority = a, this.transport = d, this.options = g || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(t, a) {
              if (this.isSupported()) {
                if (this.priority < t)
                  return rn(new R(), a);
              } else return rn(new O(), a);
              var d = !1, g = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), w = null, T = function() {
                g.unbind("initialized", T), g.connect();
              }, L = function() {
                w = se.createHandshake(g, function(z) {
                  d = !0, D(), a(null, z);
                });
              }, M = function(z) {
                D(), a(z);
              }, x = function() {
                D();
                var z;
                z = De(g), a(new I(z));
              }, D = function() {
                g.unbind("initialized", T), g.unbind("open", L), g.unbind("error", M), g.unbind("closed", x);
              };
              return g.bind("initialized", T), g.bind("open", L), g.bind("error", M), g.bind("closed", x), g.initialize(), {
                abort: () => {
                  d || (D(), w ? w.close() : g.close());
                },
                forceMinPriority: (z) => {
                  d || this.priority < z && (w ? w.close() : g.close());
                }
              };
            }
          }
          function rn(c, t) {
            return G.defer(function() {
              t(c);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Es } = N;
          var Ls = function(c, t, a, d, g, w) {
            var T = Es[a];
            if (!T)
              throw new E(a);
            var L = (!c.enabledTransports || jt(c.enabledTransports, t) !== -1) && (!c.disabledTransports || jt(c.disabledTransports, t) === -1), M;
            return L ? (g = Object.assign({ ignoreNullOrigin: c.ignoreNullOrigin }, g), M = new Is(t, d, w ? w.getAssistant(T) : T, g)) : M = Ps, M;
          }, Ps = {
            isSupported: function() {
              return !1;
            },
            connect: function(c, t) {
              var a = G.defer(function() {
                t(new O());
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
          function Ms(c) {
            if (c == null)
              throw "You must pass an options object";
            if (c.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in c && j.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const Ns = (c, t) => {
            var a = "socket_id=" + encodeURIComponent(c.socketId);
            for (var d in t.params)
              a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let g = t.paramsProvider();
              for (var d in g)
                a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(g[d]);
            }
            return a;
          };
          var Os = (c) => {
            if (typeof N.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, a) => {
              const d = Ns(t, c);
              N.getAuthorizers()[c.transport](N, d, c, _.UserAuthentication, a);
            };
          };
          const Bs = (c, t) => {
            var a = "socket_id=" + encodeURIComponent(c.socketId);
            a += "&channel_name=" + encodeURIComponent(c.channelName);
            for (var d in t.params)
              a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let g = t.paramsProvider();
              for (var d in g)
                a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(g[d]);
            }
            return a;
          };
          var xs = (c) => {
            if (typeof N.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, a) => {
              const d = Bs(t, c);
              N.getAuthorizers()[c.transport](N, d, c, _.ChannelAuthorization, a);
            };
          };
          const Ds = (c, t, a) => {
            const d = {
              authTransport: t.transport,
              authEndpoint: t.endpoint,
              auth: {
                params: t.params,
                headers: t.headers
              }
            };
            return (g, w) => {
              const T = c.channel(g.channelName);
              a(T, d).authorize(g.socketId, w);
            };
          };
          function Fs(c, t) {
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
              enableStats: $s(c),
              httpHost: Us(c),
              useTLS: zs(c),
              wsHost: js(c),
              userAuthenticator: Gs(c),
              channelAuthorizer: Vs(c, t)
            };
            return "disabledTransports" in c && (a.disabledTransports = c.disabledTransports), "enabledTransports" in c && (a.enabledTransports = c.enabledTransports), "ignoreNullOrigin" in c && (a.ignoreNullOrigin = c.ignoreNullOrigin), "timelineParams" in c && (a.timelineParams = c.timelineParams), "nacl" in c && (a.nacl = c.nacl), a;
          }
          function Us(c) {
            return c.httpHost ? c.httpHost : c.cluster ? `sockjs-${c.cluster}.pusher.com` : u.httpHost;
          }
          function js(c) {
            return c.wsHost ? c.wsHost : Hs(c.cluster);
          }
          function Hs(c) {
            return `ws-${c}.pusher.com`;
          }
          function zs(c) {
            return N.getProtocol() === "https:" ? !0 : c.forceTLS !== !1;
          }
          function $s(c) {
            return "enableStats" in c ? c.enableStats : "disableStats" in c ? !c.disableStats : !1;
          }
          function Gs(c) {
            const t = Object.assign(Object.assign({}, u.userAuthentication), c.userAuthentication);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : Os(t);
          }
          function qs(c, t) {
            let a;
            return "channelAuthorization" in c ? a = Object.assign(Object.assign({}, u.channelAuthorization), c.channelAuthorization) : (a = {
              transport: c.authTransport || u.authTransport,
              endpoint: c.authEndpoint || u.authEndpoint
            }, "auth" in c && ("params" in c.auth && (a.params = c.auth.params), "headers" in c.auth && (a.headers = c.auth.headers)), "authorizer" in c && (a.customHandler = Ds(t, a, c.authorizer))), a;
          }
          function Vs(c, t) {
            const a = qs(c, t);
            return "customHandler" in a && a.customHandler != null ? a.customHandler : xs(a);
          }
          class Ws extends re {
            constructor(t) {
              super(function(a, d) {
                j.debug(`No callbacks on watchlist events for ${a}`);
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
          function Ks() {
            let c, t;
            return { promise: new Promise((d, g) => {
              c = d, t = g;
            }), resolve: c, reject: t };
          }
          var Js = Ks;
          class Xs extends re {
            constructor(t) {
              super(function(a, d) {
                j.debug("No callbacks on user for " + a);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (a, d) => {
                if (a) {
                  j.warn(`Error during signin: ${a}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: d.auth,
                  user_data: d.user_data
                });
              }, this.pusher = t, this.pusher.connection.bind("state_change", ({ previous: a, current: d }) => {
                a !== "connected" && d === "connected" && this._signin(), a === "connected" && d !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new Ws(t), this.pusher.connection.bind("message", (a) => {
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
              const t = (a) => {
                a.subscriptionPending && a.subscriptionCancelled ? a.reinstateSubscription() : !a.subscriptionPending && this.pusher.connection.state === "connected" && a.subscribe();
              };
              this.serverToUserChannel = new it(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((a, d) => {
                a.indexOf("pusher_internal:") === 0 || a.indexOf("pusher:") === 0 || this.emit(a, d);
              }), t(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: t, resolve: a } = Js();
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
              return Ht(Gt({ ws: N.Transports.ws }, function(t) {
                return t.isSupported({});
              }));
            }
            constructor(t, a) {
              Ys(t), Ms(a), this.key = t, this.config = Fs(a, this), this.channels = se.createChannels(), this.global_emitter = new re(), this.sessionID = N.randomInt(1e9), this.timeline = new Rs(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: K.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: je.INFO,
                version: u.VERSION
              }), this.config.enableStats && (this.timelineSender = se.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + N.TimelineTransport.name
              }));
              var d = (g) => N.getDefaultStrategy(this.config, g, Ls);
              this.connection = se.createConnectionManager(this.key, {
                getStrategy: d,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (g) => {
                var w = g.event, T = w.indexOf("pusher_internal:") === 0;
                if (g.channel) {
                  var L = this.channel(g.channel);
                  L && L.handleEvent(g);
                }
                T || this.global_emitter.emit(g.event, g.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (g) => {
                j.warn(g);
              }), K.instances.push(this), this.timeline.info({ instances: K.instances.length }), this.user = new Xs(this), K.isReady && this.connect();
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
                this.timelineSenderTimer = new he(6e4, function() {
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
          K.instances = [], K.isReady = !1, K.logToConsole = !1, K.Runtime = N, K.ScriptReceivers = N.ScriptReceivers, K.DependenciesReceivers = N.DependenciesReceivers, K.auth_callbacks = N.auth_callbacks;
          var dt = s.default = K;
          function Ys(c) {
            if (c == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          N.setup(K);
        }
        /******/
      ])
    );
  });
})(In);
var hi = In.exports;
const di = /* @__PURE__ */ li(hi), A = "cpr-agent", En = "itdsiqtx8cpskowawl1p", pe = "https://agent.surrealdisco.co.uk";
function Ln() {
  var e;
  return (((e = game == null ? void 0 : game.settings) == null ? void 0 : e.get(A, "apiUrl")) || pe).trim().replace(/\/$/, "") || pe;
}
function fi() {
  try {
    return new URL(Ln()).origin;
  } catch {
    return new URL(pe).origin;
  }
}
const Se = {
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
}, pi = [6, 12, 25, 50, 100, 200, 400, 800], fn = {
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
function gi(i) {
  var e, r;
  return fn[(e = i == null ? void 0 : i.system) == null ? void 0 : e.weaponType] || fn[(r = i == null ? void 0 : i.system) == null ? void 0 : r.variety] || "Pistol";
}
function mi(i, e) {
  const r = pi.findIndex((n) => e <= n);
  let s = r !== -1 ? Se[i][r] : 99;
  return Array.isArray(Se[i]) && typeof Se[i][0] == "string" && (s = Se[i][Math.min(r !== -1 ? r : 0, Se[i].length - 1)]), s;
}
function yi(i) {
  const e = String(i).split(" ").join(""), r = (s) => s.charAt(0).toLowerCase() + s.slice(1);
  return r(i === "Conceal/Reveal Object" || i === "Paint/Draw/Sculpt" || i === "Resist Torture/Drugs" ? e.split("/").join("Or") : i === "Language (Streetslang)" ? e.split("(").join("").split(")").join("") : e.split("/").join("And").split("&").join("And"));
}
function bi(i, e) {
  var s, n;
  const r = ["allActions", "allActionsSpeech", "allActionsHands"];
  if (!e) return r;
  if (r.push("universalAttack"), i && i !== "None") {
    const o = yi(i);
    r.push(o, `${o}Hearing`, `${o}Sight`);
  }
  return ((s = e.system) == null ? void 0 : s.isRanged) === !0 && r.push("ranged", "singleShot"), ((n = e.system) == null ? void 0 : n.isRanged) === !1 && r.push("melee"), r;
}
const pn = {
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
function vi(i) {
  const e = String(i).match(/^system\.stats\.(\w+)\.value$/);
  if (e) return e[1].toUpperCase();
  const r = String(i).replace(/^bonuses\./, "");
  if (pn[r]) return pn[r];
  const s = r.replace(/([A-Z])/g, " $1").toLowerCase().trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function Te(i) {
  "@babel/helpers - typeof";
  return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Te(i);
}
function q(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wi(i, e) {
  for (var r = 0; r < e.length; r++) {
    var s = e[r];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(i, s.key, s);
  }
}
function V(i, e, r) {
  return e && wi(i.prototype, e), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
function Re() {
  return Re = Object.assign || function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
    }
    return i;
  }, Re.apply(this, arguments);
}
function J(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: i,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(i, "prototype", {
    writable: !1
  }), e && kt(i, e);
}
function Ve(i) {
  return Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ve(i);
}
function kt(i, e) {
  return kt = Object.setPrototypeOf || function(s, n) {
    return s.__proto__ = n, s;
  }, kt(i, e);
}
function ki() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _i(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function Ci(i, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _i(i);
}
function X(i) {
  var e = ki();
  return function() {
    var s = Ve(i), n;
    if (e) {
      var o = Ve(this).constructor;
      n = Reflect.construct(s, arguments, o);
    } else
      n = s.apply(this, arguments);
    return Ci(this, n);
  };
}
var Pt = /* @__PURE__ */ function() {
  function i() {
    q(this, i);
  }
  return V(i, [{
    key: "listenForWhisper",
    value: (
      /**
       * Listen for a whisper event on the channel instance.
       */
      function(r, s) {
        return this.listen(".client-" + r, s);
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
    value: function(r, s) {
      return this.stopListening(".client-" + r, s);
    }
  }]), i;
}(), Pn = /* @__PURE__ */ function() {
  function i(e) {
    q(this, i), this.namespace = e;
  }
  return V(i, [{
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
  }]), i;
}();
function Si(i) {
  try {
    new i();
  } catch (e) {
    if (e.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var Mt = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r(s, n, o) {
    var l;
    return q(this, r), l = e.call(this), l.name = n, l.pusher = s, l.options = o, l.eventFormatter = new Pn(l.options.namespace), l.subscribe(), l;
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
          var u = o.options.namespace.replace(/\./g, "\\"), f = l.startsWith(u) ? l.substring(u.length + 1) : "." + l;
          n(f, h);
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
}(Pt), Mn = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Mt), Ti = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Mt), Ai = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Mn), Nn = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r(s, n, o) {
    var l;
    return q(this, r), l = e.call(this), l.events = {}, l.listeners = {}, l.name = n, l.socket = s, l.options = o, l.eventFormatter = new Pn(l.options.namespace), l.subscribe(), l;
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
        l.name === h && l.listeners[n] && l.listeners[n].forEach(function(f) {
          return f(u);
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
}(Pt), On = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(Nn), Ri = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(On), We = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
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
}(Pt), Bn = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(We), Ii = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
  }
  return V(r, [{
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
}(We), Ei = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    return q(this, r), e.apply(this, arguments);
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
}(Bn), Nt = /* @__PURE__ */ function() {
  function i(e) {
    q(this, i), this._defaultOptions = {
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
  return V(i, [{
    key: "setOptions",
    value: function(r) {
      this.options = Re(this._defaultOptions, r);
      var s = this.csrfToken();
      return s && (this.options.auth.headers["X-CSRF-TOKEN"] = s, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = s), s = this.options.bearerToken, s && (this.options.auth.headers.Authorization = "Bearer " + s, this.options.userAuthentication.headers.Authorization = "Bearer " + s), r;
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
  }]), i;
}(), gn = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    var s;
    return q(this, r), s = e.apply(this, arguments), s.channels = {}, s;
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
    value: function(n, o, l) {
      return this.channel(n).listen(o, l);
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return this.channels[n] || (this.channels[n] = new Mt(this.pusher, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new Mn(this.pusher, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return this.channels["private-encrypted-" + n] || (this.channels["private-encrypted-" + n] = new Ti(this.pusher, "private-encrypted-" + n, this.options)), this.channels["private-encrypted-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new Ai(this.pusher, "presence-" + n, this.options)), this.channels["presence-" + n];
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
}(Nt), mn = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    var s;
    return q(this, r), s = e.apply(this, arguments), s.channels = {}, s;
  }
  return V(r, [{
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
      return this.channels[n] || (this.channels[n] = new Nn(this.socket, n, this.options)), this.channels[n];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return this.channels["private-" + n] || (this.channels["private-" + n] = new On(this.socket, "private-" + n, this.options)), this.channels["private-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new Ri(this.socket, "presence-" + n, this.options)), this.channels["presence-" + n];
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
}(Nt), Li = /* @__PURE__ */ function(i) {
  J(r, i);
  var e = X(r);
  function r() {
    var s;
    return q(this, r), s = e.apply(this, arguments), s.channels = {}, s;
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
    value: function(n, o, l) {
      return new We();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(n) {
      return new We();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(n) {
      return new Bn();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(n) {
      return new Ii();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return new Ei();
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
}(Nt), Pi = /* @__PURE__ */ function() {
  function i(e) {
    q(this, i), this.options = e, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return V(i, [{
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
        this.connector = new gn(Re(Re({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new gn(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new mn(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new Li(this.options);
      else if (typeof this.options.broadcaster == "function" && Si(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(Te(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
    value: function(r, s, n) {
      return this.connector.listen(r, s, n);
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
      if (this.connector instanceof mn)
        throw new Error("Broadcaster ".concat(Te(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : Te(Turbo)) === "object" && this.registerTurboRequestInterceptor();
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerVueRequestInterceptor",
    value: function() {
      var r = this;
      Vue.http.interceptors.push(function(s, n) {
        r.socketId() && s.headers.set("X-Socket-ID", r.socketId()), n();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */
  }, {
    key: "registerAxiosRequestInterceptor",
    value: function() {
      var r = this;
      axios.interceptors.request.use(function(s) {
        return r.socketId() && (s.headers["X-Socket-Id"] = r.socketId()), s;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */
  }, {
    key: "registerjQueryAjaxSetup",
    value: function() {
      var r = this;
      typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(function(s, n, o) {
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
      document.addEventListener("turbo:before-fetch-request", function(s) {
        s.detail.fetchOptions.headers["X-Socket-Id"] = r.socketId();
      });
    }
  }]), i;
}();
function Mi(i, e = 6) {
  return !i || i.length <= e * 2 + 3 ? i : `${i.substring(0, e)}...${i.substring(i.length - e)}`;
}
function _t(i, e, r = {}) {
  for (let s in i) {
    const n = i[s];
    n !== null && typeof n == "object" && !Array.isArray(n) && !(n instanceof foundry.utils.Color) ? _t(n, `${e}${s}.`, r) : r[`${e}${s}`] = n;
  }
  return r;
}
function Ni(i, e) {
  if (i === "wss") return !0;
  if (i === "ws") return !1;
  try {
    return new URL(e).protocol === "https:";
  } catch {
    return !0;
  }
}
function Oi() {
  var e, r;
  if (!((e = game.user) != null && e.isGM)) return !1;
  const i = (r = game.users) == null ? void 0 : r.activeGM;
  return !i || i.id === game.user.id;
}
function Ot(i, e) {
  const { distance: r } = canvas.grid.measurePath([i.center, e.center]);
  return Math.ceil(r - 1e-6);
}
function yn(i, e) {
  var r, s, n, o;
  return i && ((r = canvas.tokens) != null && r.get(i)) || !e ? i : ((o = (n = (s = canvas.tokens) == null ? void 0 : s.placeables) == null ? void 0 : n.find((l) => {
    var h;
    return ((h = l.actor) == null ? void 0 : h.id) === e;
  })) == null ? void 0 : o.id) ?? i;
}
const Ct = (i) => {
  const e = Number(i);
  return i != null && i !== "" && Number.isFinite(e) ? e : null;
}, ze = (i, e) => {
  const r = i == null ? void 0 : i[e];
  if (typeof r == "function")
    try {
      return !!r.call(i);
    } catch {
      return !1;
    }
  return !!r;
};
function Bi(i) {
  if (!i || typeof i != "object") return null;
  const e = Ct(i.resultTotal) ?? Ct(i.total), r = i.rollTitle || i.name || null, s = {
    total: e,
    label: r,
    isCriticalSuccess: ze(i, "wasCritSuccess") || ze(i, "isCriticalSuccess"),
    isCriticalFailure: ze(i, "wasCritFail") || ze(i, "isCriticalFailure")
  }, n = typeof i.saveResult == "string" ? i.saveResult : null;
  return { ...s, rawRoll: { ...s, resultTotal: e, rollTitle: r, saveResult: n } };
}
function xi(i, e) {
  return i ? { isCriticalSuccess: !1, isCriticalFailure: i !== e } : null;
}
const bn = (i) => i.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
function vn(i) {
  if (typeof i != "string" || !i.includes("d10-number-div")) return null;
  const e = i.match(/class="d10-number-div"[^>]*>([\s\S]*?)<\/div>/), r = e ? Ct(bn(e[1])) : null, s = i.match(/class="[^"]*\bchat-rollTitle-[\w-]*[^"]*"[^>]*>\s*<div[^>]*>([\s\S]*?)<\/div>/), n = s && bn(s[1]) || null, o = (i.match(/<li class="([^"]*\bd10\b[^"]*)"/) ?? [])[1] ?? "", l = {
    total: r,
    label: n,
    isCriticalSuccess: /_preem\.svg/.test(i) || /\bmax\b/.test(o),
    isCriticalFailure: /_fail\.svg/.test(i) || /\bmin\b/.test(o)
  };
  return { ...l, rawRoll: { ...l, resultTotal: r, rollTitle: n } };
}
const Di = "systems/cyberpunk-red-core/modules/chat/cpr-chat.js", qe = /* @__PURE__ */ new Set();
let St = null;
async function Fi() {
  try {
    const i = foundry.utils.getRoute ?? globalThis.getRoute, { default: e } = await import(
      /* @vite-ignore */
      i(Di)
    );
    if (typeof (e == null ? void 0 : e.RenderRollCard) != "function") return !1;
    if (e.RenderRollCard.cprAgentTap) return !0;
    const r = e.RenderRollCard, s = function(n, ...o) {
      try {
        const l = Bi(n);
        if (l) {
          St = { summary: l, at: Date.now() };
          for (const h of [...qe]) h(l);
        }
      } catch (l) {
        console.warn("[Bridge] Roll tap failed to read a roll.", l);
      }
      return r.call(this, n, ...o);
    };
    return s.cprAgentTap = !0, e.RenderRollCard = s, !0;
  } catch (i) {
    return console.warn("[Bridge] Could not tap Cyberpunk RED roll cards; roll totals come from the chat card instead.", i), !1;
  }
}
function Ui() {
  let i;
  return { promise: new Promise((r) => {
    i = (s) => {
      qe.delete(i), r(s);
    }, qe.add(i);
  }), cancel: () => qe.delete(i) };
}
function wn(i = 3e3) {
  const e = St;
  return St = null, e && Date.now() - e.at <= i ? e.summary : null;
}
const ji = 1500, kn = 12e4;
async function Hi(i, e, r, s = null) {
  game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Capturing a roll for Actor ${e}`, "color: #00ffff; font-weight: bold;"), await i._beginRollCapture(s, kn);
  const n = Ui(), o = (p) => (n.cancel(), i._endRollCapture(), { success: !1, error: p });
  let l;
  const h = new Promise((p) => {
    l = setTimeout(() => p(null), kn);
  }), u = (async () => (await r(), await new Promise((p) => setTimeout(p, ji)), null))();
  let f;
  try {
    f = await Promise.race([n.promise, u, h]);
  } catch {
    return clearTimeout(l), o("Trigger failed");
  }
  return clearTimeout(l), f ? (i._armCaptureSafety(), {
    success: !0,
    total: f.total,
    isCriticalSuccess: f.isCriticalSuccess,
    isCriticalFailure: f.isCriticalFailure,
    label: f.label,
    rollMode: i._captureRollMode || game.settings.get("core", "rollMode"),
    rawRoll: f.rawRoll
  }) : (console.warn("[Bridge] No roll card was rendered for the Agent's roll."), o("No roll card rendered"));
}
var Ee = {}, zi = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, xn = {}, Q = {};
let Bt;
const $i = [
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
  return $i[e];
};
Q.getBCHDigit = function(i) {
  let e = 0;
  for (; i !== 0; )
    e++, i >>>= 1;
  return e;
};
Q.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Bt = e;
};
Q.isKanjiModeEnabled = function() {
  return typeof Bt < "u";
};
Q.toSJIS = function(e) {
  return Bt(e);
};
var Ye = {};
(function(i) {
  i.L = { bit: 1 }, i.M = { bit: 0 }, i.Q = { bit: 3 }, i.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return i.L;
      case "m":
      case "medium":
        return i.M;
      case "q":
      case "quartile":
        return i.Q;
      case "h":
      case "high":
        return i.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  i.isValid = function(s) {
    return s && typeof s.bit < "u" && s.bit >= 0 && s.bit < 4;
  }, i.from = function(s, n) {
    if (i.isValid(s))
      return s;
    try {
      return e(s);
    } catch {
      return n;
    }
  };
})(Ye);
function Dn() {
  this.buffer = [], this.length = 0;
}
Dn.prototype = {
  get: function(i) {
    const e = Math.floor(i / 8);
    return (this.buffer[e] >>> 7 - i % 8 & 1) === 1;
  },
  put: function(i, e) {
    for (let r = 0; r < e; r++)
      this.putBit((i >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(i) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), i && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var Gi = Dn;
function Le(i) {
  if (!i || i < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = i, this.data = new Uint8Array(i * i), this.reservedBit = new Uint8Array(i * i);
}
Le.prototype.set = function(i, e, r, s) {
  const n = i * this.size + e;
  this.data[n] = r, s && (this.reservedBit[n] = !0);
};
Le.prototype.get = function(i, e) {
  return this.data[i * this.size + e];
};
Le.prototype.xor = function(i, e, r) {
  this.data[i * this.size + e] ^= r;
};
Le.prototype.isReserved = function(i, e) {
  return this.reservedBit[i * this.size + e];
};
var qi = Le, Fn = {};
(function(i) {
  const e = Q.getSymbolSize;
  i.getRowColCoords = function(s) {
    if (s === 1) return [];
    const n = Math.floor(s / 7) + 2, o = e(s), l = o === 145 ? 26 : Math.ceil((o - 13) / (2 * n - 2)) * 2, h = [o - 7];
    for (let u = 1; u < n - 1; u++)
      h[u] = h[u - 1] - l;
    return h.push(6), h.reverse();
  }, i.getPositions = function(s) {
    const n = [], o = i.getRowColCoords(s), l = o.length;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        h === 0 && u === 0 || // top-left
        h === 0 && u === l - 1 || // bottom-left
        h === l - 1 && u === 0 || n.push([o[h], o[u]]);
    return n;
  };
})(Fn);
var Un = {};
const Vi = Q.getSymbolSize, _n = 7;
Un.getPositions = function(e) {
  const r = Vi(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [r - _n, 0],
    // bottom-left
    [0, r - _n]
  ];
};
var jn = {};
(function(i) {
  i.Patterns = {
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
  i.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, i.from = function(n) {
    return i.isValid(n) ? parseInt(n, 10) : void 0;
  }, i.getPenaltyN1 = function(n) {
    const o = n.size;
    let l = 0, h = 0, u = 0, f = null, p = null;
    for (let y = 0; y < o; y++) {
      h = u = 0, f = p = null;
      for (let m = 0; m < o; m++) {
        let b = n.get(y, m);
        b === f ? h++ : (h >= 5 && (l += e.N1 + (h - 5)), f = b, h = 1), b = n.get(m, y), b === p ? u++ : (u >= 5 && (l += e.N1 + (u - 5)), p = b, u = 1);
      }
      h >= 5 && (l += e.N1 + (h - 5)), u >= 5 && (l += e.N1 + (u - 5));
    }
    return l;
  }, i.getPenaltyN2 = function(n) {
    const o = n.size;
    let l = 0;
    for (let h = 0; h < o - 1; h++)
      for (let u = 0; u < o - 1; u++) {
        const f = n.get(h, u) + n.get(h, u + 1) + n.get(h + 1, u) + n.get(h + 1, u + 1);
        (f === 4 || f === 0) && l++;
      }
    return l * e.N2;
  }, i.getPenaltyN3 = function(n) {
    const o = n.size;
    let l = 0, h = 0, u = 0;
    for (let f = 0; f < o; f++) {
      h = u = 0;
      for (let p = 0; p < o; p++)
        h = h << 1 & 2047 | n.get(f, p), p >= 10 && (h === 1488 || h === 93) && l++, u = u << 1 & 2047 | n.get(p, f), p >= 10 && (u === 1488 || u === 93) && l++;
    }
    return l * e.N3;
  }, i.getPenaltyN4 = function(n) {
    let o = 0;
    const l = n.data.length;
    for (let u = 0; u < l; u++) o += n.data[u];
    return Math.abs(Math.ceil(o * 100 / l / 5) - 10) * e.N4;
  };
  function r(s, n, o) {
    switch (s) {
      case i.Patterns.PATTERN000:
        return (n + o) % 2 === 0;
      case i.Patterns.PATTERN001:
        return n % 2 === 0;
      case i.Patterns.PATTERN010:
        return o % 3 === 0;
      case i.Patterns.PATTERN011:
        return (n + o) % 3 === 0;
      case i.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(o / 3)) % 2 === 0;
      case i.Patterns.PATTERN101:
        return n * o % 2 + n * o % 3 === 0;
      case i.Patterns.PATTERN110:
        return (n * o % 2 + n * o % 3) % 2 === 0;
      case i.Patterns.PATTERN111:
        return (n * o % 3 + (n + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + s);
    }
  }
  i.applyMask = function(n, o) {
    const l = o.size;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        o.isReserved(u, h) || o.xor(u, h, r(n, u, h));
  }, i.getBestMask = function(n, o) {
    const l = Object.keys(i.Patterns).length;
    let h = 0, u = 1 / 0;
    for (let f = 0; f < l; f++) {
      o(f), i.applyMask(f, n);
      const p = i.getPenaltyN1(n) + i.getPenaltyN2(n) + i.getPenaltyN3(n) + i.getPenaltyN4(n);
      i.applyMask(f, n), p < u && (u = p, h = f);
    }
    return h;
  };
})(jn);
var Qe = {};
const ie = Ye, $e = [
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
], Ge = [
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
Qe.getBlocksCount = function(e, r) {
  switch (r) {
    case ie.L:
      return $e[(e - 1) * 4 + 0];
    case ie.M:
      return $e[(e - 1) * 4 + 1];
    case ie.Q:
      return $e[(e - 1) * 4 + 2];
    case ie.H:
      return $e[(e - 1) * 4 + 3];
    default:
      return;
  }
};
Qe.getTotalCodewordsCount = function(e, r) {
  switch (r) {
    case ie.L:
      return Ge[(e - 1) * 4 + 0];
    case ie.M:
      return Ge[(e - 1) * 4 + 1];
    case ie.Q:
      return Ge[(e - 1) * 4 + 2];
    case ie.H:
      return Ge[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var Hn = {}, Ze = {};
const Ae = new Uint8Array(512), Ke = new Uint8Array(256);
(function() {
  let e = 1;
  for (let r = 0; r < 255; r++)
    Ae[r] = e, Ke[e] = r, e <<= 1, e & 256 && (e ^= 285);
  for (let r = 255; r < 512; r++)
    Ae[r] = Ae[r - 255];
})();
Ze.log = function(e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return Ke[e];
};
Ze.exp = function(e) {
  return Ae[e];
};
Ze.mul = function(e, r) {
  return e === 0 || r === 0 ? 0 : Ae[Ke[e] + Ke[r]];
};
(function(i) {
  const e = Ze;
  i.mul = function(s, n) {
    const o = new Uint8Array(s.length + n.length - 1);
    for (let l = 0; l < s.length; l++)
      for (let h = 0; h < n.length; h++)
        o[l + h] ^= e.mul(s[l], n[h]);
    return o;
  }, i.mod = function(s, n) {
    let o = new Uint8Array(s);
    for (; o.length - n.length >= 0; ) {
      const l = o[0];
      for (let u = 0; u < n.length; u++)
        o[u] ^= e.mul(n[u], l);
      let h = 0;
      for (; h < o.length && o[h] === 0; ) h++;
      o = o.slice(h);
    }
    return o;
  }, i.generateECPolynomial = function(s) {
    let n = new Uint8Array([1]);
    for (let o = 0; o < s; o++)
      n = i.mul(n, new Uint8Array([1, e.exp(o)]));
    return n;
  };
})(Hn);
const zn = Hn;
function xt(i) {
  this.genPoly = void 0, this.degree = i, this.degree && this.initialize(this.degree);
}
xt.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = zn.generateECPolynomial(this.degree);
};
xt.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(e.length + this.degree);
  r.set(e);
  const s = zn.mod(r, this.genPoly), n = this.degree - s.length;
  if (n > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(s, n), o;
  }
  return s;
};
var Wi = xt, $n = {}, oe = {}, Dt = {};
Dt.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var te = {};
const Gn = "[0-9]+", Ki = "[A-Z $%*+\\-./:]+";
let Ie = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Ie = Ie.replace(/u/g, "\\u");
const Ji = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ie + `)(?:.|[\r
]))+`;
te.KANJI = new RegExp(Ie, "g");
te.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
te.BYTE = new RegExp(Ji, "g");
te.NUMERIC = new RegExp(Gn, "g");
te.ALPHANUMERIC = new RegExp(Ki, "g");
const Xi = new RegExp("^" + Ie + "$"), Yi = new RegExp("^" + Gn + "$"), Qi = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
te.testKanji = function(e) {
  return Xi.test(e);
};
te.testNumeric = function(e) {
  return Yi.test(e);
};
te.testAlphanumeric = function(e) {
  return Qi.test(e);
};
(function(i) {
  const e = Dt, r = te;
  i.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, i.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, i.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, i.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, i.MIXED = {
    bit: -1
  }, i.getCharCountIndicator = function(o, l) {
    if (!o.ccBits) throw new Error("Invalid mode: " + o);
    if (!e.isValid(l))
      throw new Error("Invalid version: " + l);
    return l >= 1 && l < 10 ? o.ccBits[0] : l < 27 ? o.ccBits[1] : o.ccBits[2];
  }, i.getBestModeForData = function(o) {
    return r.testNumeric(o) ? i.NUMERIC : r.testAlphanumeric(o) ? i.ALPHANUMERIC : r.testKanji(o) ? i.KANJI : i.BYTE;
  }, i.toString = function(o) {
    if (o && o.id) return o.id;
    throw new Error("Invalid mode");
  }, i.isValid = function(o) {
    return o && o.bit && o.ccBits;
  };
  function s(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "numeric":
        return i.NUMERIC;
      case "alphanumeric":
        return i.ALPHANUMERIC;
      case "kanji":
        return i.KANJI;
      case "byte":
        return i.BYTE;
      default:
        throw new Error("Unknown mode: " + n);
    }
  }
  i.from = function(o, l) {
    if (i.isValid(o))
      return o;
    try {
      return s(o);
    } catch {
      return l;
    }
  };
})(oe);
(function(i) {
  const e = Q, r = Qe, s = Ye, n = oe, o = Dt, l = 7973, h = e.getBCHDigit(l);
  function u(m, b, C) {
    for (let _ = 1; _ <= 40; _++)
      if (b <= i.getCapacity(_, C, m))
        return _;
  }
  function f(m, b) {
    return n.getCharCountIndicator(m, b) + 4;
  }
  function p(m, b) {
    let C = 0;
    return m.forEach(function(_) {
      const k = f(_.mode, b);
      C += k + _.getBitsLength();
    }), C;
  }
  function y(m, b) {
    for (let C = 1; C <= 40; C++)
      if (p(m, C) <= i.getCapacity(C, b, n.MIXED))
        return C;
  }
  i.from = function(b, C) {
    return o.isValid(b) ? parseInt(b, 10) : C;
  }, i.getCapacity = function(b, C, _) {
    if (!o.isValid(b))
      throw new Error("Invalid QR Code version");
    typeof _ > "u" && (_ = n.BYTE);
    const k = e.getSymbolTotalCodewords(b), v = r.getTotalCodewordsCount(b, C), S = (k - v) * 8;
    if (_ === n.MIXED) return S;
    const R = S - f(_, b);
    switch (_) {
      case n.NUMERIC:
        return Math.floor(R / 10 * 3);
      case n.ALPHANUMERIC:
        return Math.floor(R / 11 * 2);
      case n.KANJI:
        return Math.floor(R / 13);
      case n.BYTE:
      default:
        return Math.floor(R / 8);
    }
  }, i.getBestVersionForData = function(b, C) {
    let _;
    const k = s.from(C, s.M);
    if (Array.isArray(b)) {
      if (b.length > 1)
        return y(b, k);
      if (b.length === 0)
        return 1;
      _ = b[0];
    } else
      _ = b;
    return u(_.mode, _.getLength(), k);
  }, i.getEncodedBits = function(b) {
    if (!o.isValid(b) || b < 7)
      throw new Error("Invalid QR Code version");
    let C = b << 12;
    for (; e.getBCHDigit(C) - h >= 0; )
      C ^= l << e.getBCHDigit(C) - h;
    return b << 12 | C;
  };
})($n);
var qn = {};
const Tt = Q, Vn = 1335, Zi = 21522, Cn = Tt.getBCHDigit(Vn);
qn.getEncodedBits = function(e, r) {
  const s = e.bit << 3 | r;
  let n = s << 10;
  for (; Tt.getBCHDigit(n) - Cn >= 0; )
    n ^= Vn << Tt.getBCHDigit(n) - Cn;
  return (s << 10 | n) ^ Zi;
};
var Wn = {};
const eo = oe;
function ge(i) {
  this.mode = eo.NUMERIC, this.data = i.toString();
}
ge.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
ge.prototype.getLength = function() {
  return this.data.length;
};
ge.prototype.getBitsLength = function() {
  return ge.getBitsLength(this.data.length);
};
ge.prototype.write = function(e) {
  let r, s, n;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    s = this.data.substr(r, 3), n = parseInt(s, 10), e.put(n, 10);
  const o = this.data.length - r;
  o > 0 && (s = this.data.substr(r), n = parseInt(s, 10), e.put(n, o * 3 + 1));
};
var to = ge;
const no = oe, mt = [
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
function me(i) {
  this.mode = no.ALPHANUMERIC, this.data = i;
}
me.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
me.prototype.getLength = function() {
  return this.data.length;
};
me.prototype.getBitsLength = function() {
  return me.getBitsLength(this.data.length);
};
me.prototype.write = function(e) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let s = mt.indexOf(this.data[r]) * 45;
    s += mt.indexOf(this.data[r + 1]), e.put(s, 11);
  }
  this.data.length % 2 && e.put(mt.indexOf(this.data[r]), 6);
};
var ro = me;
const so = oe;
function ye(i) {
  this.mode = so.BYTE, typeof i == "string" ? this.data = new TextEncoder().encode(i) : this.data = new Uint8Array(i);
}
ye.getBitsLength = function(e) {
  return e * 8;
};
ye.prototype.getLength = function() {
  return this.data.length;
};
ye.prototype.getBitsLength = function() {
  return ye.getBitsLength(this.data.length);
};
ye.prototype.write = function(i) {
  for (let e = 0, r = this.data.length; e < r; e++)
    i.put(this.data[e], 8);
};
var oo = ye;
const ao = oe, co = Q;
function be(i) {
  this.mode = ao.KANJI, this.data = i;
}
be.getBitsLength = function(e) {
  return e * 13;
};
be.prototype.getLength = function() {
  return this.data.length;
};
be.prototype.getBitsLength = function() {
  return be.getBitsLength(this.data.length);
};
be.prototype.write = function(i) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let r = co.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), i.put(r, 13);
  }
};
var lo = be, Kn = { exports: {} };
(function(i) {
  var e = {
    single_source_shortest_paths: function(r, s, n) {
      var o = {}, l = {};
      l[s] = 0;
      var h = e.PriorityQueue.make();
      h.push(s, 0);
      for (var u, f, p, y, m, b, C, _, k; !h.empty(); ) {
        u = h.pop(), f = u.value, y = u.cost, m = r[f] || {};
        for (p in m)
          m.hasOwnProperty(p) && (b = m[p], C = y + b, _ = l[p], k = typeof l[p] > "u", (k || _ > C) && (l[p] = C, h.push(p, C), o[p] = f));
      }
      if (typeof n < "u" && typeof l[n] > "u") {
        var v = ["Could not find a path from ", s, " to ", n, "."].join("");
        throw new Error(v);
      }
      return o;
    },
    extract_shortest_path_from_predecessor_list: function(r, s) {
      for (var n = [], o = s; o; )
        n.push(o), r[o], o = r[o];
      return n.reverse(), n;
    },
    find_path: function(r, s, n) {
      var o = e.single_source_shortest_paths(r, s, n);
      return e.extract_shortest_path_from_predecessor_list(
        o,
        n
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(r) {
        var s = e.PriorityQueue, n = {}, o;
        r = r || {};
        for (o in s)
          s.hasOwnProperty(o) && (n[o] = s[o]);
        return n.queue = [], n.sorter = r.sorter || s.default_sorter, n;
      },
      default_sorter: function(r, s) {
        return r.cost - s.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(r, s) {
        var n = { value: r, cost: s };
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
  i.exports = e;
})(Kn);
var uo = Kn.exports;
(function(i) {
  const e = oe, r = to, s = ro, n = oo, o = lo, l = te, h = Q, u = uo;
  function f(v) {
    return unescape(encodeURIComponent(v)).length;
  }
  function p(v, S, R) {
    const I = [];
    let P;
    for (; (P = v.exec(R)) !== null; )
      I.push({
        data: P[0],
        index: P.index,
        mode: S,
        length: P[0].length
      });
    return I;
  }
  function y(v) {
    const S = p(l.NUMERIC, e.NUMERIC, v), R = p(l.ALPHANUMERIC, e.ALPHANUMERIC, v);
    let I, P;
    return h.isKanjiModeEnabled() ? (I = p(l.BYTE, e.BYTE, v), P = p(l.KANJI, e.KANJI, v)) : (I = p(l.BYTE_KANJI, e.BYTE, v), P = []), S.concat(R, I, P).sort(function(O, B) {
      return O.index - B.index;
    }).map(function(O) {
      return {
        data: O.data,
        mode: O.mode,
        length: O.length
      };
    });
  }
  function m(v, S) {
    switch (S) {
      case e.NUMERIC:
        return r.getBitsLength(v);
      case e.ALPHANUMERIC:
        return s.getBitsLength(v);
      case e.KANJI:
        return o.getBitsLength(v);
      case e.BYTE:
        return n.getBitsLength(v);
    }
  }
  function b(v) {
    return v.reduce(function(S, R) {
      const I = S.length - 1 >= 0 ? S[S.length - 1] : null;
      return I && I.mode === R.mode ? (S[S.length - 1].data += R.data, S) : (S.push(R), S);
    }, []);
  }
  function C(v) {
    const S = [];
    for (let R = 0; R < v.length; R++) {
      const I = v[R];
      switch (I.mode) {
        case e.NUMERIC:
          S.push([
            I,
            { data: I.data, mode: e.ALPHANUMERIC, length: I.length },
            { data: I.data, mode: e.BYTE, length: I.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          S.push([
            I,
            { data: I.data, mode: e.BYTE, length: I.length }
          ]);
          break;
        case e.KANJI:
          S.push([
            I,
            { data: I.data, mode: e.BYTE, length: f(I.data) }
          ]);
          break;
        case e.BYTE:
          S.push([
            { data: I.data, mode: e.BYTE, length: f(I.data) }
          ]);
      }
    }
    return S;
  }
  function _(v, S) {
    const R = {}, I = { start: {} };
    let P = ["start"];
    for (let E = 0; E < v.length; E++) {
      const O = v[E], B = [];
      for (let U = 0; U < O.length; U++) {
        const H = O[U], Y = "" + E + U;
        B.push(Y), R[Y] = { node: H, lastCount: 0 }, I[Y] = {};
        for (let Z = 0; Z < P.length; Z++) {
          const F = P[Z];
          R[F] && R[F].node.mode === H.mode ? (I[F][Y] = m(R[F].lastCount + H.length, H.mode) - m(R[F].lastCount, H.mode), R[F].lastCount += H.length) : (R[F] && (R[F].lastCount = H.length), I[F][Y] = m(H.length, H.mode) + 4 + e.getCharCountIndicator(H.mode, S));
        }
      }
      P = B;
    }
    for (let E = 0; E < P.length; E++)
      I[P[E]].end = 0;
    return { map: I, table: R };
  }
  function k(v, S) {
    let R;
    const I = e.getBestModeForData(v);
    if (R = e.from(S, I), R !== e.BYTE && R.bit < I.bit)
      throw new Error('"' + v + '" cannot be encoded with mode ' + e.toString(R) + `.
 Suggested mode is: ` + e.toString(I));
    switch (R === e.KANJI && !h.isKanjiModeEnabled() && (R = e.BYTE), R) {
      case e.NUMERIC:
        return new r(v);
      case e.ALPHANUMERIC:
        return new s(v);
      case e.KANJI:
        return new o(v);
      case e.BYTE:
        return new n(v);
    }
  }
  i.fromArray = function(S) {
    return S.reduce(function(R, I) {
      return typeof I == "string" ? R.push(k(I, null)) : I.data && R.push(k(I.data, I.mode)), R;
    }, []);
  }, i.fromString = function(S, R) {
    const I = y(S, h.isKanjiModeEnabled()), P = C(I), E = _(P, R), O = u.find_path(E.map, "start", "end"), B = [];
    for (let U = 1; U < O.length - 1; U++)
      B.push(E.table[O[U]].node);
    return i.fromArray(b(B));
  }, i.rawSplit = function(S) {
    return i.fromArray(
      y(S, h.isKanjiModeEnabled())
    );
  };
})(Wn);
const et = Q, yt = Ye, ho = Gi, fo = qi, po = Fn, go = Un, At = jn, Rt = Qe, mo = Wi, Je = $n, yo = qn, bo = oe, bt = Wn;
function vo(i, e) {
  const r = i.size, s = go.getPositions(e);
  for (let n = 0; n < s.length; n++) {
    const o = s[n][0], l = s[n][1];
    for (let h = -1; h <= 7; h++)
      if (!(o + h <= -1 || r <= o + h))
        for (let u = -1; u <= 7; u++)
          l + u <= -1 || r <= l + u || (h >= 0 && h <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && u >= 2 && u <= 4 ? i.set(o + h, l + u, !0, !0) : i.set(o + h, l + u, !1, !0));
  }
}
function wo(i) {
  const e = i.size;
  for (let r = 8; r < e - 8; r++) {
    const s = r % 2 === 0;
    i.set(r, 6, s, !0), i.set(6, r, s, !0);
  }
}
function ko(i, e) {
  const r = po.getPositions(e);
  for (let s = 0; s < r.length; s++) {
    const n = r[s][0], o = r[s][1];
    for (let l = -2; l <= 2; l++)
      for (let h = -2; h <= 2; h++)
        l === -2 || l === 2 || h === -2 || h === 2 || l === 0 && h === 0 ? i.set(n + l, o + h, !0, !0) : i.set(n + l, o + h, !1, !0);
  }
}
function _o(i, e) {
  const r = i.size, s = Je.getEncodedBits(e);
  let n, o, l;
  for (let h = 0; h < 18; h++)
    n = Math.floor(h / 3), o = h % 3 + r - 8 - 3, l = (s >> h & 1) === 1, i.set(n, o, l, !0), i.set(o, n, l, !0);
}
function vt(i, e, r) {
  const s = i.size, n = yo.getEncodedBits(e, r);
  let o, l;
  for (o = 0; o < 15; o++)
    l = (n >> o & 1) === 1, o < 6 ? i.set(o, 8, l, !0) : o < 8 ? i.set(o + 1, 8, l, !0) : i.set(s - 15 + o, 8, l, !0), o < 8 ? i.set(8, s - o - 1, l, !0) : o < 9 ? i.set(8, 15 - o - 1 + 1, l, !0) : i.set(8, 15 - o - 1, l, !0);
  i.set(s - 8, 8, 1, !0);
}
function Co(i, e) {
  const r = i.size;
  let s = -1, n = r - 1, o = 7, l = 0;
  for (let h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!i.isReserved(n, h - u)) {
          let f = !1;
          l < e.length && (f = (e[l] >>> o & 1) === 1), i.set(n, h - u, f), o--, o === -1 && (l++, o = 7);
        }
      if (n += s, n < 0 || r <= n) {
        n -= s, s = -s;
        break;
      }
    }
}
function So(i, e, r) {
  const s = new ho();
  r.forEach(function(u) {
    s.put(u.mode.bit, 4), s.put(u.getLength(), bo.getCharCountIndicator(u.mode, i)), u.write(s);
  });
  const n = et.getSymbolTotalCodewords(i), o = Rt.getTotalCodewordsCount(i, e), l = (n - o) * 8;
  for (s.getLengthInBits() + 4 <= l && s.put(0, 4); s.getLengthInBits() % 8 !== 0; )
    s.putBit(0);
  const h = (l - s.getLengthInBits()) / 8;
  for (let u = 0; u < h; u++)
    s.put(u % 2 ? 17 : 236, 8);
  return To(s, i, e);
}
function To(i, e, r) {
  const s = et.getSymbolTotalCodewords(e), n = Rt.getTotalCodewordsCount(e, r), o = s - n, l = Rt.getBlocksCount(e, r), h = s % l, u = l - h, f = Math.floor(s / l), p = Math.floor(o / l), y = p + 1, m = f - p, b = new mo(m);
  let C = 0;
  const _ = new Array(l), k = new Array(l);
  let v = 0;
  const S = new Uint8Array(i.buffer);
  for (let O = 0; O < l; O++) {
    const B = O < u ? p : y;
    _[O] = S.slice(C, C + B), k[O] = b.encode(_[O]), C += B, v = Math.max(v, B);
  }
  const R = new Uint8Array(s);
  let I = 0, P, E;
  for (P = 0; P < v; P++)
    for (E = 0; E < l; E++)
      P < _[E].length && (R[I++] = _[E][P]);
  for (P = 0; P < m; P++)
    for (E = 0; E < l; E++)
      R[I++] = k[E][P];
  return R;
}
function Ao(i, e, r, s) {
  let n;
  if (Array.isArray(i))
    n = bt.fromArray(i);
  else if (typeof i == "string") {
    let f = e;
    if (!f) {
      const p = bt.rawSplit(i);
      f = Je.getBestVersionForData(p, r);
    }
    n = bt.fromString(i, f || 40);
  } else
    throw new Error("Invalid data");
  const o = Je.getBestVersionForData(n, r);
  if (!o)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = o;
  else if (e < o)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o + `.
`
    );
  const l = So(e, r, n), h = et.getSymbolSize(e), u = new fo(h);
  return vo(u, e), wo(u), ko(u, e), vt(u, r, 0), e >= 7 && _o(u, e), Co(u, l), isNaN(s) && (s = At.getBestMask(
    u,
    vt.bind(null, u, r)
  )), At.applyMask(s, u), vt(u, r, s), {
    modules: u,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: s,
    segments: n
  };
}
xn.create = function(e, r) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let s = yt.M, n, o;
  return typeof r < "u" && (s = yt.from(r.errorCorrectionLevel, yt.M), n = Je.from(r.version), o = At.from(r.maskPattern), r.toSJISFunc && et.setToSJISFunction(r.toSJISFunc)), Ao(e, n, s, o);
};
var Jn = {}, Ft = {};
(function(i) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    let s = r.slice().replace("#", "").split("");
    if (s.length < 3 || s.length === 5 || s.length > 8)
      throw new Error("Invalid hex color: " + r);
    (s.length === 3 || s.length === 4) && (s = Array.prototype.concat.apply([], s.map(function(o) {
      return [o, o];
    }))), s.length === 6 && s.push("F", "F");
    const n = parseInt(s.join(""), 16);
    return {
      r: n >> 24 & 255,
      g: n >> 16 & 255,
      b: n >> 8 & 255,
      a: n & 255,
      hex: "#" + s.slice(0, 6).join("")
    };
  }
  i.getOptions = function(s) {
    s || (s = {}), s.color || (s.color = {});
    const n = typeof s.margin > "u" || s.margin === null || s.margin < 0 ? 4 : s.margin, o = s.width && s.width >= 21 ? s.width : void 0, l = s.scale || 4;
    return {
      width: o,
      scale: o ? 4 : l,
      margin: n,
      color: {
        dark: e(s.color.dark || "#000000ff"),
        light: e(s.color.light || "#ffffffff")
      },
      type: s.type,
      rendererOpts: s.rendererOpts || {}
    };
  }, i.getScale = function(s, n) {
    return n.width && n.width >= s + n.margin * 2 ? n.width / (s + n.margin * 2) : n.scale;
  }, i.getImageWidth = function(s, n) {
    const o = i.getScale(s, n);
    return Math.floor((s + n.margin * 2) * o);
  }, i.qrToImageData = function(s, n, o) {
    const l = n.modules.size, h = n.modules.data, u = i.getScale(l, o), f = Math.floor((l + o.margin * 2) * u), p = o.margin * u, y = [o.color.light, o.color.dark];
    for (let m = 0; m < f; m++)
      for (let b = 0; b < f; b++) {
        let C = (m * f + b) * 4, _ = o.color.light;
        if (m >= p && b >= p && m < f - p && b < f - p) {
          const k = Math.floor((m - p) / u), v = Math.floor((b - p) / u);
          _ = y[h[k * l + v] ? 1 : 0];
        }
        s[C++] = _.r, s[C++] = _.g, s[C++] = _.b, s[C] = _.a;
      }
  };
})(Ft);
(function(i) {
  const e = Ft;
  function r(n, o, l) {
    n.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = l, o.width = l, o.style.height = l + "px", o.style.width = l + "px";
  }
  function s() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  i.render = function(o, l, h) {
    let u = h, f = l;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (f = s()), u = e.getOptions(u);
    const p = e.getImageWidth(o.modules.size, u), y = f.getContext("2d"), m = y.createImageData(p, p);
    return e.qrToImageData(m.data, o, u), r(y, f, p), y.putImageData(m, 0, 0), f;
  }, i.renderToDataURL = function(o, l, h) {
    let u = h;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
    const f = i.render(o, l, u), p = u.type || "image/png", y = u.rendererOpts || {};
    return f.toDataURL(p, y.quality);
  };
})(Jn);
var Xn = {};
const Ro = Ft;
function Sn(i, e) {
  const r = i.a / 255, s = e + '="' + i.hex + '"';
  return r < 1 ? s + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : s;
}
function wt(i, e, r) {
  let s = i + e;
  return typeof r < "u" && (s += " " + r), s;
}
function Io(i, e, r) {
  let s = "", n = 0, o = !1, l = 0;
  for (let h = 0; h < i.length; h++) {
    const u = Math.floor(h % e), f = Math.floor(h / e);
    !u && !o && (o = !0), i[h] ? (l++, h > 0 && u > 0 && i[h - 1] || (s += o ? wt("M", u + r, 0.5 + f + r) : wt("m", n, 0), n = 0, o = !1), u + 1 < e && i[h + 1] || (s += wt("h", l), l = 0)) : n++;
  }
  return s;
}
Xn.render = function(e, r, s) {
  const n = Ro.getOptions(r), o = e.modules.size, l = e.modules.data, h = o + n.margin * 2, u = n.color.light.a ? "<path " + Sn(n.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "", f = "<path " + Sn(n.color.dark, "stroke") + ' d="' + Io(l, o, n.margin) + '"/>', p = 'viewBox="0 0 ' + h + " " + h + '"', m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + p + ' shape-rendering="crispEdges">' + u + f + `</svg>
`;
  return typeof s == "function" && s(null, m), m;
};
const Eo = zi, It = xn, Yn = Jn, Lo = Xn;
function Ut(i, e, r, s, n) {
  const o = [].slice.call(arguments, 1), l = o.length, h = typeof o[l - 1] == "function";
  if (!h && !Eo())
    throw new Error("Callback required as last argument");
  if (h) {
    if (l < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (n = r, r = e, e = s = void 0) : l === 3 && (e.getContext && typeof n > "u" ? (n = s, s = void 0) : (n = s, s = r, r = e, e = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return l === 1 ? (r = e, e = s = void 0) : l === 2 && !e.getContext && (s = r, r = e, e = void 0), new Promise(function(u, f) {
      try {
        const p = It.create(r, s);
        u(i(p, e, s));
      } catch (p) {
        f(p);
      }
    });
  }
  try {
    const u = It.create(r, s);
    n(null, i(u, e, s));
  } catch (u) {
    n(u);
  }
}
Ee.create = It.create;
Ee.toCanvas = Ut.bind(null, Yn.render);
Ee.toDataURL = Ut.bind(null, Yn.renderToDataURL);
Ee.toString = Ut.bind(null, function(i, e, r) {
  return Lo.render(i, r);
});
const Et = 300, Po = 1;
function Qn() {
  return (game.settings.get(A, "apiUrl") || "").replace(/\/$/, "");
}
function Mo({ nonce: i, channelId: e, foundryUserName: r }) {
  return JSON.stringify({
    v: Po,
    agentUrl: Qn(),
    channelId: e || null,
    nonce: i,
    foundryUserName: r || null
  });
}
async function Zn(i, e, r) {
  const s = Qn(), n = game.settings.get(A, "apiKey"), o = game.settings.get(A, "channelId");
  if (!s) throw new Error("Set the Agent URL in module settings first.");
  if (!n) throw new Error("Set your Agent API key in module settings first.");
  if (!o) throw new Error("Set the Channel ID (session code) in module settings first.");
  const l = foundry.utils.randomID(24);
  let h;
  try {
    h = await fetch(`${s}/api/pairing/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${n}`,
        Accept: "application/json"
      },
      body: JSON.stringify({
        nonce: l,
        channel_id: o,
        foundry_user_id: e,
        foundry_user_name: r,
        expires_in: Et
      })
    });
  } catch {
    throw new Error("Could not reach the Agent server. Check the Agent URL and your connection.");
  }
  if (!h.ok)
    throw h.status === 403 ? new Error("Only a GM with a linked Agent account can generate pairings.") : h.status === 404 ? new Error("No Agent session matches this Channel ID. Create/sync the session in the Agent first.") : new Error(`Agent server rejected the pairing (HTTP ${h.status}).`);
  return i.pendingPairings.set(l, { foundryUserId: e, ts: Date.now() }), setTimeout(() => i.pendingPairings.delete(l), Et * 1e3), { nonce: l, payload: Mo({ nonce: l, channelId: o, foundryUserName: r }) };
}
async function er(i, e, r) {
  let s;
  try {
    ({ payload: s } = await Zn(i, e, r));
  } catch (n) {
    ui.notifications.error(`Agent pairing: ${n.message}`);
    return;
  }
  await tr(s, r);
}
async function tr(i, e) {
  let r;
  try {
    r = await Ee.toDataURL(i, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const s = Math.round(Et / 60), n = e || "this player", o = btoa(i);
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
                <p style="color:#ffaa00;font-size:0.85em;margin-top:10px;">This code expires in ~${s} minutes and can only be used once.</p>
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
class No extends FormApplication {
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
    for (let s of e.users) {
      const n = Mi(s.agentLink);
      r += `<tr><td style="padding: 5px 0;"><strong>${s.name}</strong></td>`, s.hasKey ? (r += '<td style="color: #00ff00;">✔ Linked</td>', r += `<td><small><code title="${s.agentLink || ""}">${n || "Pending..."}</code></small></td>`) : (r += '<td style="color: #ffaa00;" title="No remote key; the embedded Agent still works.">◐ Local only</td>', r += "<td><small>-</small></td>"), r += `<td><select class="character-select" data-userid="${s.id}" style="width: 100%;">
            <option value="">- None -</option>`;
      for (let o of e.characters) {
        const l = o.id === s.characterId ? "selected" : "";
        r += `<option value="${o.id}" ${l}>${o.name}</option>`;
      }
      r += "</select></td>", r += `<td><button type="button" class="show-qr" data-userid="${s.id}" data-username="${s.name}" title="Show pairing QR"><i class="fas fa-qrcode"></i></button> <button type="button" class="refresh-user" data-userid="${s.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`, r += "</tr>";
    }
    return r += `</table>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button type="button" id="save-agent-assignments"><i class="fas fa-save"></i> Save Assignments</button>
        <button type="button" id="refresh-all-users"><i class="fas fa-sync-alt"></i> Refresh All Users</button>
        </div>
        </div>`, $(r);
  }
  getData() {
    const e = game.users.map((s) => {
      var n;
      return {
        id: s.id,
        name: s.name,
        isGM: s.isGM,
        hasKey: !!s.getFlag(A, "hasApiKey"),
        agentLink: s.getFlag(A, "agent-link"),
        characterId: ((n = s.character) == null ? void 0 : n.id) || ""
      };
    }), r = game.actors.filter((s) => s.type === "character").map((s) => ({
      id: s.id,
      name: s.name
    }));
    return { users: e, characters: r };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(e) {
    super.activateListeners(e), e.find("#save-agent-assignments").click(async (r) => {
      r.preventDefault();
      let s = 0;
      const n = [];
      if (e.find(".character-select").each((o, l) => {
        var p;
        const h = l.dataset.userid, u = l.value, f = game.users.get(h);
        if (f) {
          const y = u === "" || u === "null" ? null : u;
          (((p = f.character) == null ? void 0 : p.id) || null) !== y && (n.push({ _id: f.id, character: y }), s++);
        }
      }), n.length > 0) {
        await User.updateDocuments(n), ui.notifications.info(`Cyberpunk Bridge: Updated ${s} player assignments!`);
        for (let o of n) {
          const l = game.users.get(o._id), h = l == null ? void 0 : l.getFlag(A, "agent-link");
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
    }), e.find(".show-qr").click(async (r) => {
      r.preventDefault();
      const s = r.currentTarget.dataset.userid, n = r.currentTarget.dataset.username;
      await er(window.cyberpunkBridge, s, n);
    }), e.find(".refresh-user").click(async (r) => {
      r.preventDefault();
      const s = r.currentTarget.dataset.userid, n = game.users.get(s);
      n && (await n.unsetFlag(A, "agent-link"), await n.unsetFlag(A, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${n.name}. They will need to re-sync.`), this.render(!0));
    }), e.find("#refresh-all-users").click(async (r) => {
      r.preventDefault();
      for (let s of game.users)
        await s.unsetFlag(A, "agent-link"), await s.unsetFlag(A, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
const Xe = "pairing-request", ve = "pairing-nonce";
function Oo(i) {
  i.hookIds.pairingUpdateUser || (i.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (e, r) => {
    if (game.user.isGM && foundry.utils.getProperty(r, `flags.${A}.${Xe}`) && await Bo(i, e), e.id === game.user.id) {
      const s = foundry.utils.getProperty(r, `flags.${A}.${ve}`);
      s && s.payload && (await tr(s.payload, game.user.name), await game.user.unsetFlag(A, ve), await game.user.unsetFlag(A, Xe));
    }
  }));
}
async function Bo(i, e) {
  try {
    const { payload: r } = await Zn(i, e.id, e.name);
    await e.setFlag(A, ve, { payload: r, ts: Date.now() });
  } catch (r) {
    console.warn(`[Bridge] Failed to mint pairing for ${e.name}: ${r.message}`), await e.setFlag(A, ve, { error: r.message, ts: Date.now() });
  }
}
async function xo() {
  if (game.user.isGM) {
    await er(window.cyberpunkBridge, game.user.id, game.user.name);
    return;
  }
  await game.user.setFlag(A, ve, null), await game.user.setFlag(A, Xe, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(A, ve) || (await game.user.unsetFlag(A, Xe), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class Do extends FormApplication {
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
      r.preventDefault(), await xo(), this.close();
    });
  }
}
const Fo = 1, Uo = /^[A-Z0-9]{4}-?[A-Z0-9]{4}$/i;
function Tn(i) {
  const e = (i || "").trim();
  if (!e) return null;
  for (const r of [() => atob(e), () => e])
    try {
      return JSON.parse(r());
    } catch {
    }
  return null;
}
function An(i) {
  return Uo.test((i || "").trim());
}
async function jo(i) {
  const e = i.trim().toUpperCase().replace(/^([A-Z0-9]{4})([A-Z0-9]{4})$/, "$1-$2"), r = (game.settings.get(A, "apiUrl") || pe).replace(/\/$/, "");
  let s;
  try {
    s = await fetch(`${r}/api/setup-code/${encodeURIComponent(e)}`, {
      headers: { Accept: "application/json" }
    });
  } catch {
    throw new Error(`Could not reach the Agent server at ${r}.`);
  }
  if (s.status === 404)
    throw new Error("That setup code is invalid, expired, or already used — generate a fresh one in the Agent.");
  if (!s.ok)
    throw new Error(`Agent server rejected the setup code (HTTP ${s.status}).`);
  return s.json();
}
class Ho extends FormApplication {
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
      this._renderPreview(e, Tn(r.currentTarget.value));
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
    const s = e.find("#cpr-setup-preview"), n = e.find("#cpr-setup-code").val().trim();
    if (An(n)) {
      const h = (game.settings.get(A, "apiUrl") || pe).replace(/\/$/, "");
      s.html(`<div class="notes" style="opacity:0.7;">Short code — configuration will be fetched from ${h} when you Apply.</div>`);
      return;
    }
    if (!r || !r.agentUrl) {
      const h = n ? "Not a valid setup code yet — re-copy it from the Agent." : "Paste a code above to preview its values.";
      s.html(`<div class="notes" style="opacity:0.7;">${h}</div>`);
      return;
    }
    const o = (h) => h ? `••••${String(h).slice(-4)}` : "—", l = [
      ["Agent URL", String(r.agentUrl).replace(/\/$/, "")],
      ["Channel ID", r.channelId ? String(r.channelId) : "—"],
      ["API Key", o(r.apiKey)],
      ["Reverb Key", o(r.reverbKey)],
      ["Reverb Port", r.reverbPort ? String(r.reverbPort) : "same as Agent URL"]
    ];
    s.html(l.map(([h, u]) => `
            <div style="display:flex;justify-content:space-between;gap:8px;">
                <span style="opacity:0.7;">${h}</span>
                <span style="font-family:monospace;">${u}</span>
            </div>
        `).join(""));
  }
  async _apply(e) {
    let r;
    if (An(e))
      try {
        r = await jo(e);
      } catch (o) {
        ui.notifications.error(`Agent setup: ${o.message}`);
        return;
      }
    else
      r = Tn(e);
    if (!r || !r.agentUrl) {
      ui.notifications.error("Agent setup: that does not look like a valid setup code. Re-copy it from the Agent.");
      return;
    }
    if (r.v && r.v !== Fo) {
      ui.notifications.error("Agent setup: this code was made by a newer Agent. Update the Bridge module.");
      return;
    }
    const s = { apiUrl: String(r.agentUrl).replace(/\/$/, "") };
    r.channelId && (s.channelId = String(r.channelId)), r.apiKey && (s.apiKey = String(r.apiKey)), r.reverbKey && (s.reverbKey = String(r.reverbKey)), s.reverbPort = r.reverbPort ? String(r.reverbPort) : "0";
    try {
      for (const [o, l] of Object.entries(s))
        await game.settings.set(A, o, l);
    } catch {
      ui.notifications.error("Agent setup: failed to save settings.");
      return;
    }
    this._reflectInSettingsForm(s);
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
    const r = Object.values(ui.windows).find((s) => s instanceof SettingsConfig);
    if (r != null && r.element)
      for (const [s, n] of Object.entries(e)) {
        const o = r.element.find(`[name="${A}.${s}"]`);
        o.length && o.val(n);
      }
  }
}
function zo(i) {
  game.settings.registerMenu(A, "quickSetup", {
    name: "Quick Setup",
    label: "Paste Agent Config",
    hint: "Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.",
    icon: "fas fa-bolt",
    type: Ho,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: No,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: Do,
    restricted: !1
    // Available to all players
  }), game.settings.register(A, "apiUrl", {
    name: "Agent URL",
    hint: "The base URL of your Agent (e.g., https://agent.surrealdisco.co.uk).",
    scope: "world",
    // URL is usually the same for everyone
    config: !0,
    type: String,
    default: pe,
    onChange: () => {
      game.user.isGM && i.reconnect(), i.syncPlayerLink();
    }
  }), game.settings.register(A, "reverbHost", {
    name: "WebSocket Host (override)",
    hint: 'Leave blank. Blank means "use the same host as the Agent URL". Fill this in only if your Agent serves its WebSocket from a different hostname. Setup codes never carry a host, so this is one field pasting a code will not correct for you - clear it by hand if you set it while troubleshooting.',
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => i.reconnect()
  }), game.settings.register(A, "reverbPort", {
    name: "WebSocket Port (override)",
    hint: 'Leave at 0. Zero means "use the same port as the Agent URL", which is right whenever the Agent serves its WebSocket on its own address - the normal setup. Set a port only if your Agent publishes Reverb separately. Pasting a setup code from a single-origin Agent resets this to 0.',
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => i.reconnect()
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
    onChange: () => i.reconnect()
  }), game.settings.register(A, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: En,
    onChange: () => i.reconnect()
  }), game.settings.register(A, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (e) => {
      await game.user.setFlag(A, "hasApiKey", !!e), game.user.isGM && i.reconnect(), i.syncPlayerLink();
    }
  }), game.settings.register(A, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && i.reconnect();
    }
  }), game.settings.register(A, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function $o(i, e, { type: r, requestId: s, actorId: n }) {
  const o = game.actors.get(n);
  if (!o) {
    console.warn(`⚠️ Actor ID ${n} not found in this world.`);
    return;
  }
  await o.update(e.changes), ui.notifications.info(`💾 Sync: ${o.name} updated.`), await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: s });
}
async function nr(i, e, { requestId: r }) {
  let s = e.actorId, n = game.user;
  const o = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  if (o && (n = game.users.find((l) => l.getFlag(A, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user), !s) {
    const l = n.character;
    l && (s = l.id);
  }
  if (s !== null) {
    const l = game.actors.get(s);
    if (l) {
      const h = l.toObject(), u = (p) => (p || []).map((y) => {
        var m;
        return {
          _id: y._id,
          name: y.name,
          disabled: y.disabled,
          changes: y.changes,
          flags: (m = y.flags) != null && m["cyberpunk-red-core"] ? { "cyberpunk-red-core": y.flags["cyberpunk-red-core"] } : {}
        };
      }), f = {
        _id: l.id,
        name: l.name,
        type: l.type,
        img: h.img,
        system: h.system,
        items: (h.items || []).map((p) => {
          const y = {
            _id: p._id,
            name: p.name,
            type: p.type,
            img: p.img,
            system: p.system,
            effects: u(p.effects)
          };
          if (p.type === "cyberware") {
            const m = l.items.get(p._id);
            m && (y.system = {
              ...p.system,
              isInstalled: !!m.system.isInstalled,
              isFoundational: !!m.system.isFoundational
            });
          }
          return y;
        }),
        effects: u(h.effects),
        flags: h.flags && h.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": h.flags["cyberpunk-red-core"] } : {}
      };
      await i.sendResponse({ type: "ACTOR_DATA", actorId: s, actor: f, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
      return;
    }
  }
  await i.sendResponse({ type: "ACTOR_DATA", actorId: s, actor: !1, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function Go(i, e, { requestId: r, actorId: s }) {
  let n = game.user;
  const o = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  o && (n = game.users.find((u) => u.getFlag(A, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user);
  function l(u) {
    var p;
    return ((p = canvas.tokens.placeables.filter((y) => {
      var m;
      return ((m = y.actor) == null ? void 0 : m.id) === u;
    })[0]) == null ? void 0 : p.id) ?? null;
  }
  let h = [];
  n.isGM ? h = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var p, y;
    const f = (p = Object.entries(u.ownership || {}).find(([m, b]) => {
      const C = game.users.get(m);
      return C && !C.isGM && b >= 3;
    })) == null ? void 0 : p[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: l(u.id),
      agentLink: (f ? (y = game.users.get(f)) == null ? void 0 : y.getFlag(A, "agent-link") : null) || f || n.getFlag(A, "agent-link") || n.id
    };
  }) : (h = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(n, "OWNER")).map((u) => {
    var p, y;
    const f = (p = Object.entries(u.actor.ownership || {}).find(([m, b]) => {
      const C = game.users.get(m);
      return C && !C.isGM && b >= 3;
    })) == null ? void 0 : p[0];
    return {
      name: u.name,
      actorId: u.actor.id,
      tokenId: l(u.actor.id),
      agentLink: (f ? (y = game.users.get(f)) == null ? void 0 : y.getFlag(A, "agent-link") : null) || f || null
    };
  }), n.character && (h.some((f) => f.actorId === n.character.id) || h.push({
    name: n.character.name,
    actorId: n.character.id,
    tokenId: l(n.character.id),
    agentLink: n.getFlag(A, "agent-link") || n.id
  })), !n.isGM && n.character && (h = h.filter((u) => u.actorId === n.character.id))), await i.sendResponse({ type: "ACTORS_DATA", actorId: s, actors: h, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function qo(i, e, { type: r, requestId: s, actorId: n }) {
  const o = game.actors.get(n);
  if (!o) {
    console.warn(`Actor ID ${n} not found in this world.`);
    return;
  }
  const l = o.items.get(e.itemId);
  if (!l) {
    console.warn(`Item ID ${e.itemId} not found on actor ${o.name}.`);
    return;
  }
  typeof l._confirmSnort == "function" && (l._confirmSnort = async () => !0);
  try {
    await l.snort();
  } finally {
    delete l._confirmSnort;
  }
  ui.notifications.info(`Sync: ${l.name} consumed.`), await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: s });
}
async function Vo(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (n) {
    const o = n.items.get(e.itemId);
    if (o) {
      const l = `items.${e.itemId}.system.equipped`;
      await o.update({ "system.equipped": e.state }), await i.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: { [l]: e.state }, success: !0, requestId: r });
    }
  }
}
async function Wo(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (n) {
    const o = n.items.get(e.weaponId), l = e.ammoId ? n.items.get(e.ammoId) : null, h = async () => {
      await o.reload();
      const u = {
        [`items.${e.weaponId}.system.magazine`]: {
          value: o.system.magazine.value,
          max: o.system.magazine.max
        },
        [`items.${e.weaponId}.system.installedItems`]: {
          list: [...o.system.installedItems.list],
          slots: o.system.installedItems.slots,
          usedSlots: o.system.installedItems.usedSlots
        }
      };
      l && (u[`items.${l.id}.system.amount`] = l.system.amount), n.items.filter((p) => p.type === "ammo").forEach((p) => {
        u[`items.${p.id}.system.amount`] = p.system.amount;
      }), await i.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: u, success: !0, requestId: r });
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
async function Ko(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (!n) return;
  const o = n.items.get(e.cyberdeckId), l = n.items.get(e.programId);
  if (!o || !l) return;
  const h = o.system.installedItems.usedSlots || 0, u = o.system.installedItems.slots || 0, f = l.system.size || 1;
  if (h + f > u) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const p = o.system.installedItems.list || [];
  if (p.includes(e.programId)) return;
  const y = [...p, e.programId], m = h + f;
  await o.update({
    "system.installedItems.list": y,
    "system.installedItems.usedSlots": m
  }), await i.sendResponse({
    type: "SHEET_DELTA",
    actorId: s,
    delta: {
      [`items.${e.cyberdeckId}.system.installedItems.list`]: y,
      [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: m
    },
    success: !0,
    requestId: r
  });
}
async function Jo(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (!n) return;
  const o = n.items.get(e.cyberdeckId), l = n.items.get(e.programId);
  if (!o) return;
  const h = o.system.installedItems.list || [];
  if (!h.includes(e.programId)) return;
  const u = h.filter((b) => b !== e.programId), f = l && l.system.size || 1, p = o.system.installedItems.usedSlots || 0, y = Math.max(0, p - f);
  await o.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": y
  });
  const m = {
    [`items.${e.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: y
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), m[`items.${e.programId}.system.isRezzed`] = !1), await i.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: m, success: !0, requestId: r });
}
async function Xo(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (n) {
    const o = n.items.get(e.programId);
    o && (await o.update({ "system.isRezzed": e.targetState }), await i.sendResponse({
      type: "SHEET_DELTA",
      actorId: s,
      delta: { [`items.${e.programId}.system.isRezzed`]: e.targetState },
      success: !0,
      requestId: r
    }));
  }
}
async function Yo(i, e, { requestId: r, actorId: s }) {
  var o, l;
  const n = game.actors.get(s);
  if (n) {
    const h = document.createElement("a");
    h.dataset.rollType = e.rollType, h.dataset.cyberdeckId = e.cyberdeckId, h.dataset.rollTitle = e.programName, h.dataset.interfaceAbility = e.programName, h.dataset.itemId = e.cyberdeckId, h.dataset.programId = e.programId, h.dataset.executionType = e.executionType;
    const u = async () => {
      await n.sheet._onRoll({
        type: "click",
        currentTarget: h
      });
    }, f = await i.rollAndCapture(s, u, e.rollMode);
    f.success && await i.sendResponse({
      type: "ROLL_RESULT",
      rollMode: f.rollMode,
      requestId: r,
      actorId: s,
      total: f.total,
      isCriticalSuccess: f.isCriticalSuccess,
      isCriticalFailure: f.isCriticalFailure,
      label: e.programName,
      rawRoll: {
        total: f.total,
        isCriticalSuccess: f.isCriticalSuccess,
        isCriticalFailure: f.isCriticalFailure,
        label: f.label,
        resultTotal: (o = f.rawRoll) == null ? void 0 : o.resultTotal,
        rollTitle: (l = f.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
const Lt = "Out of Range";
function Qo(i) {
  const e = String(i ?? "").replace(/<[^>]*>/g, "").trim();
  return /^\d+$/.test(e) ? Number(e) : /^vs\b/i.test(e) ? "VS" : Lt;
}
async function Zo(i, { autofire: e = !1 } = {}) {
  var s;
  const r = (s = i == null ? void 0 : i.system) == null ? void 0 : s.dvTable;
  if (!r) return null;
  try {
    const n = game.packs.get(game.settings.get(game.system.id, "dvRollTableCompendium")), o = e && (n == null ? void 0 : n.index.find((u) => u.name === `${r} (Autofire)`)) || (n == null ? void 0 : n.index.find((u) => u.name === r));
    if (!o) return null;
    const l = await n.getDocument(o._id), h = [];
    for (const u of l.results) {
      if (u.type !== "text") continue;
      const [f, p] = u.range;
      h.push({ min: f, max: p, dv: Qo(u.text ?? u.description), label: `${f}-${p}m` });
    }
    return h.length ? h.sort((u, f) => u.min - f.min) : null;
  } catch (n) {
    return console.warn("[Bridge] Could not read Foundry DV table, using built-in", n), null;
  }
}
async function rr(i, e, { autofire: r = !1 } = {}) {
  const s = gi(i), n = await Zo(i, { autofire: r });
  if (n) {
    const l = n.findIndex((u) => e >= u.min && e <= u.max);
    return { dv: l === -1 ? Lt : n[l].dv, table: n, activeIndex: l, category: s, source: "foundry" };
  }
  const o = mi(s, e);
  return { dv: o === 99 ? Lt : o, table: null, activeIndex: -1, category: s, source: "builtin" };
}
async function ea(i, e, { requestId: r, actorId: s }) {
  var l, h;
  const n = game.actors.get(s), o = n.items.get(e.weaponId);
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
    }, f = await i.rollAndCapture(s, u, e.rollMode);
    f.success && await i.sendResponse({
      type: "ROLL_RESULT",
      rollMode: f.rollMode,
      requestId: r,
      actorId: s,
      total: f.total,
      isCriticalSuccess: f.isCriticalSuccess,
      isCriticalFailure: f.isCriticalFailure,
      label: `${o.name} (Damage)`,
      rawRoll: {
        total: f.total,
        isCriticalSuccess: f.isCriticalSuccess,
        isCriticalFailure: f.isCriticalFailure,
        label: f.label,
        resultTotal: (l = f.rawRoll) == null ? void 0 : l.resultTotal,
        rollTitle: (h = f.rawRoll) == null ? void 0 : h.rollTitle
      },
      success: !0
    });
  }
}
async function ta(i, e, { requestId: r, actorId: s }) {
  var o, l, h, u;
  const n = game.actors.get(s);
  if (n) {
    const f = async () => {
      await n.sheet._onRoll({
        "data-roll-type": "deathsave",
        "data-roll-title": "Death Save",
        type: "click",
        currentTarget: {
          "data-roll-type": "deathsave",
          "data-roll-title": "Death Save"
        }
      });
    }, p = await i.rollAndCapture(s, f, e.rollMode);
    if (p.success) {
      const y = n.system.derivedStats.deathsave || {}, m = xi((o = p.rawRoll) == null ? void 0 : o.saveResult, game.i18n.localize("CPR.rolls.success")) ?? { isCriticalSuccess: p.isCriticalSuccess, isCriticalFailure: p.isCriticalFailure };
      await i.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: r,
        actorId: s,
        total: p.total,
        ...m,
        label: "Death Save",
        rawRoll: {
          total: p.total,
          ...m,
          saveResult: ((l = p.rawRoll) == null ? void 0 : l.saveResult) ?? null,
          label: p.label,
          resultTotal: (h = p.rawRoll) == null ? void 0 : h.resultTotal,
          rollTitle: (u = p.rawRoll) == null ? void 0 : u.rollTitle
        },
        success: !0
      }), await i.sendResponse({
        type: "SHEET_DELTA",
        actorId: s,
        delta: { "system.derivedStats.deathsave": y },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function na(i, e, { requestId: r, actorId: s }) {
  var h, u;
  const n = game.actors.get(s), o = async () => {
    await n.sheet._onRoll({
      "data-roll-type": "facedown",
      "data-roll-title": "Face Down",
      type: "click",
      currentTarget: {
        "data-roll-type": "facedown",
        "data-roll-title": "Face Down"
      }
    });
  }, l = await i.rollAndCapture(s, o, e.rollMode);
  l.success && await i.sendResponse({
    type: "ROLL_RESULT",
    rollMode: l.rollMode,
    requestId: r,
    actorId: s,
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
async function ra(i, e, { type: r, requestId: s, actorId: n }) {
  var l, h, u;
  const o = game.actors.get(n);
  if (o) {
    if (!((l = game.combat) != null && l.combatants.some((y) => {
      var m;
      return ((m = y.actor) == null ? void 0 : m.id) === o.id;
    }))) {
      await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !1, message: "You are not in the current combat. Ask your GM to add you.", requestId: s });
      return;
    }
    const f = async () => {
      await o.rollInitiative();
    }, p = await i.rollAndCapture(n, f, e.rollMode);
    p.success && await i.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: s,
      actorId: n,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: "Initiative",
      rawRoll: {
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: p.label,
        resultTotal: (h = p.rawRoll) == null ? void 0 : h.resultTotal,
        rollTitle: (u = p.rawRoll) == null ? void 0 : u.rollTitle
      },
      success: !0
    });
  }
}
async function sa(i, e, { requestId: r, actorId: s }) {
  var o, l;
  const n = game.actors.get(s);
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
      const f = async () => {
        await n.sheet._onRoll(u);
      }, p = await i.rollAndCapture(s, f, e.rollMode);
      p.success && await i.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: r,
        actorId: s,
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: e.label,
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
async function ia(i, e, { requestId: r, actorId: s }) {
  var o, l;
  const n = game.actors.get(s);
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
      }, f = await i.rollAndCapture(s, u, e.rollMode);
      f.success && await i.sendResponse({
        type: "ROLL_RESULT",
        rollMode: f.rollMode,
        requestId: r,
        actorId: s,
        total: f.total,
        isCriticalSuccess: f.isCriticalSuccess,
        isCriticalFailure: f.isCriticalFailure,
        label: e.label,
        rawRoll: {
          total: f.total,
          isCriticalSuccess: f.isCriticalSuccess,
          isCriticalFailure: f.isCriticalFailure,
          label: f.label,
          resultTotal: (o = f.rawRoll) == null ? void 0 : o.resultTotal,
          rollTitle: (l = f.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function oa(i, e, { requestId: r, actorId: s }) {
  var o, l;
  const n = game.actors.get(s);
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
    }, u = await i.rollAndCapture(s, h, e.rollMode);
    u.success && await i.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: r,
      actorId: s,
      total: u.total,
      isCriticalSuccess: u.isCriticalSuccess,
      isCriticalFailure: u.isCriticalFailure,
      label: e.label,
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
async function aa(i, e, { requestId: r, actorId: s }) {
  const n = s || String(e.speaker ?? "").replace(/^Actor\./, "") || null;
  r && i.activeRequests.set(r, { actorId: n, timestamp: Date.now() });
  const o = e.rollMode || game.settings.get("core", "rollMode"), l = new Roll(e.formula);
  await l.evaluate(), await i._beginRollCapture(o);
  try {
    await l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: game.actors.get(n) }),
      flavor: e.flavor
    }, { rollMode: o });
  } finally {
    i._armCaptureSafety();
  }
  await i.sendResponse({
    type: "ROLL_RESULT",
    rollMode: o,
    requestId: r,
    actorId: n,
    total: l.total,
    isCriticalSuccess: l.isCriticalSuccess || !1,
    isCriticalFailure: l.isCriticalFailure || !1,
    label: e.flavor || "Dice Roll",
    rawRoll: {
      rollTitle: e.flavor || "Dice Roll",
      _roll: l,
      formula: l.formula,
      resultTotal: l.total
    },
    success: !0
  });
}
async function ca(i, e, { requestId: r, actorId: s, tokenId: n }) {
  var l, h, u, f, p, y;
  const o = game.actors.get(s);
  if (o) {
    const m = e.weaponId, b = e.fireMode, C = canvas.tokens.get(e.targetId), _ = "firetype-" + m, k = "cyberpunk-red-core";
    let v = "";
    switch (b) {
      case "Auto":
        v = "autofire";
        break;
      case "Suppress":
        v = "suppressive";
        break;
      case "Aimed":
        v = "aimed", await o.setFlag(k, "aimedLocation", "head");
        break;
      default:
        v = "";
        break;
    }
    C && C.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), v === "" ? await o.unsetFlag(k, _) : await o.setFlag(k, _, v);
    const S = document.createElement("a");
    S.dataset.rollType = "attack", S.dataset.itemId = m, S.dataset.rollTitle = b + " Attack";
    const R = async () => {
      await o.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: S,
        type: "click"
      }, { showDialog: !0 });
    };
    let I = null;
    if (C) {
      const E = canvas.tokens.get(n) || ((l = o.getActiveTokens()) == null ? void 0 : l[0]) || canvas.tokens.placeables.find((O) => {
        var B;
        return ((B = O.actor) == null ? void 0 : B.id) === o.id;
      });
      if (E) {
        const O = Ot(E, C), B = o.items.get(m);
        I = (await rr(B, O, { autofire: b === "Auto" })).dv;
      }
    }
    const P = await i.rollAndCapture(s, R, e.rollMode);
    if (P.success) {
      let E = null;
      typeof I == "number" ? E = P.total >= I ? "Hit" : "Miss" : I === "Out of Range" && (E = "Miss");
      const O = ((f = (u = (h = o.items.get(m)) == null ? void 0 : h.system) == null ? void 0 : u.magazine) == null ? void 0 : f.value) ?? null;
      await i.sendResponse({
        type: "ROLL_RESULT",
        rollMode: P.rollMode,
        requestId: r,
        actorId: s,
        total: P.total,
        isCriticalSuccess: P.isCriticalSuccess,
        isCriticalFailure: P.isCriticalFailure,
        label: b + " Attack",
        rawRoll: {
          total: P.total,
          isCriticalSuccess: P.isCriticalSuccess,
          isCriticalFailure: P.isCriticalFailure,
          label: P.label,
          resultTotal: (p = P.rawRoll) == null ? void 0 : p.resultTotal,
          rollTitle: (y = P.rawRoll) == null ? void 0 : y.rollTitle
        },
        dv: I,
        ammoTo: O,
        outcome: E,
        success: !0
      });
    }
  }
}
async function la(i, e, { type: r, requestId: s, actorId: n, tokenId: o }) {
  var h;
  if (game.paused) {
    await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "The game is paused.", requestId: s });
    return;
  }
  if (!((h = canvas.scene) != null && h.active)) {
    await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "Scene is not active", requestId: s });
    return;
  }
  const l = canvas.tokens.get(o);
  if (l) {
    let u = {};
    e.direction === "up" ? u.y = l.document.y - canvas.grid.size : e.direction === "down" ? u.y = l.document.y + canvas.grid.size : e.direction === "left" ? u.x = l.document.x - canvas.grid.size : e.direction === "right" && (u.x = l.document.x + canvas.grid.size);
    const f = l.center, p = {
      x: f.x + ((u.x ?? l.document.x) - l.document.x),
      y: f.y + ((u.y ?? l.document.y) - l.document.y)
    };
    if (CONFIG.Canvas.polygonBackends.move.testCollision(
      f,
      p,
      { type: "move", mode: "any" }
    )) {
      ui.notifications.warn(`${l.name}'s path is blocked by a wall.`), await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "Path blocked by a wall", requestId: s });
      return;
    }
    await l.document.update(u, { animate: !1 }), await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !0, requestId: s });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${o} not found.`), await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "Token not found", requestId: s });
}
async function ua(i, e, { type: r, requestId: s, actorId: n }) {
  const o = canvas.tokens.get(e.targetTokenId);
  o && (o.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await i.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: e.targetTokenId, success: !0, requestId: s }));
}
async function ha(i, e, { requestId: r, actorId: s, tokenId: n }) {
  var u;
  const o = canvas.tokens.placeables.filter((f) => {
    var p;
    return ((p = f.actor) == null ? void 0 : p.id) === s;
  });
  n === null && (n = ((u = o[0]) == null ? void 0 : u.id) ?? null);
  const l = canvas.tokens.get(n);
  let h = [];
  if (l) {
    const f = canvas.dimensions;
    h = canvas.tokens.placeables.filter((p) => {
      const y = !p.document.hidden, m = p.actor && (p.actor.type === "character" || p.actor.type === "mook"), b = p.x >= f.sceneX && p.x <= f.sceneX + f.sceneWidth && p.y >= f.sceneY && p.y <= f.sceneY + f.sceneHeight;
      return y && m && b && p.id !== l.id;
    }).map((p) => ({
      name: p.name,
      id: p.id,
      distanceM: Ot(l, p),
      type: p.actor.type
    })).sort((p, y) => p.distanceM - y.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${n} not found.`);
  await i.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: s, tokens: h, requestId: r });
}
async function da(i, e, { requestId: r, actorId: s, tokenId: n }) {
  var f;
  const o = canvas.tokens.get(n), l = e.targetTokenId || ((f = Array.from(game.user.targets)[0]) == null ? void 0 : f.id), h = canvas.tokens.get(l), u = e.weaponId;
  if (o && h) {
    const p = Ot(o, h), y = o.actor.items.get(u);
    if (!y) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${o.actor.name}.`), await i.sendResponse({ type: "DV_INFO_DATA", actorId: s, result: null, requestId: r });
      return;
    }
    const m = /^auto/i.test(String(e.fireMode ?? "")), { dv: b, table: C, activeIndex: _, category: k, source: v } = await rr(y, p, { autofire: m }), S = {
      targetName: h.name,
      distanceMeters: p,
      weaponCategory: k,
      dv: b,
      table: C,
      activeIndex: _,
      source: v
    };
    await i.sendResponse({ type: "DV_INFO_DATA", actorId: s, result: S, requestId: r });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!o}, Target: ${!!h}`), await i.sendResponse({ type: "DV_INFO_DATA", actorId: s, result: null, requestId: r });
}
async function fa(i, e, { requestId: r, actorId: s }) {
  var P;
  const n = game.actors.get(s);
  if (!n) return;
  const o = e.weaponId, l = o ? n.items.get(o) : null;
  let h = "None", u = 0, f = "None", p = 0, y = 0;
  if (l) {
    h = l.system.weaponSkill;
    const E = n.items.find((O) => O.type === "skill" && O.name === h);
    u = E && Number(E.system.level) || 0, f = E && E.system.stat || "ref", p = Number((P = n.system.stats[f]) == null ? void 0 : P.value) || 0, y = Number(l.system.attackmod) || 0;
  }
  let m = 0;
  const b = [], C = Number(n.system.derivedStats.hp.value) || 0, _ = Number(n.system.derivedStats.seriouslyWounded) || 0, k = n.items.find((E) => E.name === "Stim" && E.type === "drug"), v = k && k.effects.some((E) => E.disabled === !1);
  if (C <= 0)
    m -= 4, b.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (C <= _) {
    const E = v ? 0 : -2;
    m += E, b.push({
      title: v ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: E,
      description: v ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  const S = n.items.filter((E) => E.type === "criticalInjury"), R = bi(l ? h : null, l);
  S.forEach((E) => {
    var Z;
    const O = E.name || "Injury", B = (((Z = E.system.description) == null ? void 0 : Z.value) || "").replace(/<[^>]*>/g, "");
    let U = 0, H = !1;
    const Y = [];
    if ((E.effects || []).forEach((F) => {
      var Me, Ne, Oe, we, Be;
      if (!((Me = F.changes) != null && Me.length)) return;
      H = !0;
      const tt = F.active ?? (!F.disabled && !((Ne = F.system) != null && Ne.isSuppressed)), Pe = ((Be = (we = (Oe = F.flags) == null ? void 0 : Oe["cyberpunk-red-core"]) == null ? void 0 : we.changes) == null ? void 0 : Be.situational) || [];
      F.changes.forEach((ue, ee) => {
        var W, xe;
        const he = parseInt(ue.value);
        if (isNaN(he)) return;
        const de = `${vi(ue.key)} ${he > 0 ? "+" : ""}${he}`, G = String(ue.key).replace(/^bonuses\./, "");
        if (!tt) return Y.push(`${de} (inactive)`);
        if (G === ue.key) return Y.push(`${de} (in stat)`);
        if (!R.includes(G)) return Y.push(`${de} (not this roll)`);
        if ((W = Pe[ee]) != null && W.isSituational && !((xe = Pe[ee]) != null && xe.onByDefault))
          return Y.push(`${de} (situational, tick it in Foundry's roll dialog)`);
        U += he;
      });
    }), !H) {
      const F = String(O).toLowerCase();
      (B.includes("-2") || F.includes("arm") || F.includes("eye")) && (U = -2);
    }
    m += U, b.push({ title: O, description: B, penalty: U, note: Y.join(" · ") });
  });
  const I = {
    actorName: n.name,
    baseBonus: p + u + y,
    breakdown: {
      statName: f,
      statValue: p,
      skillName: h,
      skillLevel: u,
      weaponAcc: y
    },
    totalPenalty: m,
    finalModifier: p + u + y + m,
    injuries: b
  };
  await i.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: s, result: I, requestId: r });
}
async function pa(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (n) {
    const o = `system.${e.label}`;
    let l;
    if (e.operation === "inc") {
      const h = o.split(".");
      let u = n;
      for (let y = 0; y < h.length; y++)
        u = y === 0 ? u[h[y]] : u == null ? void 0 : u[h[y]];
      const f = Number(u) || 0, p = Number(e.delta) || 0;
      l = f + p;
    } else
      l = typeof e.value == "string" ? e.value : Number(e.value) || 0;
    await n.update({ [o]: l }), await i.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: { [o]: l }, tab: "stats", success: !0, requestId: r });
  }
}
async function ga(i, e, { requestId: r, actorId: s, debug: n }) {
  if (s == null) {
    n && console.log("[Bridge] Actor ID Not set:");
    return;
  }
  let o = game.actors.get(s);
  switch ((e.action == null || e.value == null) && n && console.log("[Bridge] EuroBucks data error"), e.action) {
    case "add":
      o.deltaLedgerProperty("wealth", e.value, e.reason);
      break;
    case "subtract":
      o.deltaLedgerProperty("wealth", -Number(e.value), e.reason);
      break;
    case "set":
      o.setLedgerProperty("wealth", e.value, e.reason);
      break;
  }
  o && await i.sendResponse({ type: "SHEET_DELTA", actorId: s, delta: { "system.wealth": o.system.wealth }, tab: "stats", success: !0, requestId: r });
}
function ma(i) {
  if (!game.user.isGM) return [game.user];
  const e = i ? game.actors.get(i) : null;
  return e ? game.users.filter((r) => !r.isGM && e.testUserPermission(r, "OWNER")) : [];
}
async function ya(i, e, { requestId: r, actorId: s, debug: n }) {
  const o = [], l = ma(s), h = (u) => l.length === 0 || l.some((f) => u.testUserPermission(f, "OBSERVER"));
  for (const u of game.journal) {
    const f = u.pages.filter((p) => p.type === "cpr-agent.datapool" && h(u) && h(p));
    for (const p of f) {
      const y = (p.system.entries || []).filter((b) => !b.hidden);
      if (y.length === 0) continue;
      const m = [];
      for (const b of y) {
        let C = b.htmlContent;
        b.type === "html" && C && (C = await TextEditor.enrichHTML(C, { async: !0 })), m.push({
          id: b.id,
          icon: b.icon,
          title: b.title,
          type: b.type,
          htmlContent: C,
          pdfPath: b.pdfPath
        });
      }
      o.push({
        journalId: u.id,
        journalName: u.name,
        pageId: p.id,
        pageName: p.name,
        entries: m
      });
    }
  }
  n && console.log("[Bridge] Found Data Pools:", o), await i.sendResponse({
    type: "NET_POOL_DATA",
    actorId: s,
    pools: o,
    requestId: r,
    success: !0
  });
}
async function ba(i, e, { debug: r }) {
  var u;
  if (!game.user.isGM) return;
  const s = e.foundryUserId, n = e.agentLink || e.agent_link, o = e.nonce;
  if (!s || !n || !o) {
    console.warn("[Bridge] PAIR_AGENT missing fields.", e);
    return;
  }
  const l = i.pendingPairings.get(o);
  if (l && l.foundryUserId !== s) {
    console.warn(`[Bridge] PAIR_AGENT nonce/user mismatch for ${s}. Ignoring.`);
    return;
  }
  l || console.warn(`[Bridge] PAIR_AGENT nonce not in local cache (GM reload?). Trusting server payload for ${s}.`);
  const h = game.users.get(s);
  if (!h) {
    console.warn(`[Bridge] PAIR_AGENT: Foundry user ${s} not found.`);
    return;
  }
  i.pendingPairings.delete(o), await h.setFlag(A, "agent-link", n), await h.setFlag(A, "hasApiKey", !0), r && console.log(`[Bridge] PAIR_AGENT: linked ${h.name} -> ${n}`), ui.notifications.info(`Agent: ${h.name} linked successfully.`), (u = Object.values(ui.windows).find((f) => {
    var p;
    return ((p = f.options) == null ? void 0 : p.id) === "cpr-agent-assignment-menu";
  })) == null || u.render(!1), await i.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: s,
    agentLink: n,
    nonce: o,
    success: !0
  }), h.character && await i.sendResponse({
    type: "GM_LINK_PLAYER_CHARACTER",
    agentLink: n,
    actorId: h.character.id,
    character: h.character.id,
    isGM: h.isGM
  });
}
async function sr(i, e, r) {
  try {
    await nr(i, { actorId: e }, { requestId: r, actorId: e });
  } catch (s) {
    console.error("[Bridge] cyberware refreshActor failed", s);
  }
}
function ir(i) {
  return typeof i.recursiveGetAllInstalledItems != "function" ? [] : i.recursiveGetAllInstalledItems().filter((e) => e.type === "cyberware");
}
function va(i, e) {
  var n, o, l;
  const r = i.items.filter(
    (h) => h.type === "cyberware" && h.system.isInstalled && h.system.isFoundational && h.system.type === e.system.type
  ), s = [];
  for (const h of r) {
    s.push({ id: h._id, name: h.name });
    let u = [...((n = h.system.installedItems) == null ? void 0 : n.list) || []];
    for (; u.length > 0; ) {
      const f = u;
      u = [];
      for (const p of f) {
        const y = i.items.get(p), m = (o = y == null ? void 0 : y.system) == null ? void 0 : o.installedItems;
        if (m != null && m.allowed) {
          const b = typeof y.availableInstallSlots == "function" ? y.availableInstallSlots() : 1 / 0;
          (l = m.allowedTypes) != null && l.includes(e.type) && b >= (e.system.size || 1) && s.push({ id: y._id, name: y.name }), u = u.concat(m.list || []);
        }
      }
    }
  }
  return s;
}
async function wa(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (!n) return;
  const o = n.items.get(e.itemId);
  if (!o) {
    await i.sendResponse({ type: "CYBERWARE_INSTALL_OPTIONS", requestId: r, actorId: s, success: !1, reason: "Item not found." });
    return;
  }
  const l = !!o.system.isFoundational, h = l ? [] : va(n, o), u = ir(o), f = u.reduce((m, b) => `${m} + ${b.system.humanityLoss.roll}`, o.system.humanityLoss.roll), p = u.reduce((m, b) => m + b.system.humanityLoss.static, o.system.humanityLoss.static), y = l || h.length > 0;
  await i.sendResponse({
    type: "CYBERWARE_INSTALL_OPTIONS",
    requestId: r,
    actorId: s,
    itemId: o._id,
    itemName: o.name,
    isFoundational: l,
    canInstall: y,
    reason: y ? null : "No compatible foundational cyberware of the correct type is installed.",
    targets: h,
    humanityLoss: { roll: `${f}`, static: p },
    success: !0
  });
}
async function ka(i, e, { requestId: r, actorId: s }) {
  var y, m, b, C, _, k;
  const n = game.actors.get(s);
  if (!n) return;
  const o = n.items.get(e.itemId);
  if (!o) return;
  const h = !!o.system.isFoundational ? n : n.items.get(e.foundationalId);
  if (!h) {
    await i.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: s, itemId: e.itemId, success: !1, reason: "Install target not found." });
    return;
  }
  const u = ir(o), f = e.humanityLossType || "none";
  let p = !1;
  try {
    const v = Number((b = (m = (y = n.system) == null ? void 0 : y.derivedStats) == null ? void 0 : m.humanity) == null ? void 0 : b.value) || 0;
    if (p = await h.installItems([o]), p && (await n.loseHumanityValue([o].concat(u), f), f !== "none")) {
      const S = Number((k = (_ = (C = n.system) == null ? void 0 : C.derivedStats) == null ? void 0 : _.humanity) == null ? void 0 : k.value) || 0, R = Math.max(0, v - S);
      await i.sendResponse({
        type: "ROLL_RESULT",
        actorId: s,
        playerName: n.name,
        total: R,
        rollMode: "publicroll",
        label: `${o.name} Humanity Loss`,
        rawRoll: {
          rollTitle: `${o.name} Humanity Loss`,
          total: R,
          formula: f === "static" ? `${R}` : ""
        },
        success: !0
      });
    }
  } catch (v) {
    console.error("[Bridge] installCyberware failed", v);
  }
  await i.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: s, itemId: o._id, success: p }), p && await sr(i, s, r);
}
async function _a(i, e, { requestId: r, actorId: s }) {
  const n = game.actors.get(s);
  if (n) {
    try {
      await n.uninstallCyberware(e.itemId, e.foundationalId || null, !0);
    } catch (o) {
      console.error("[Bridge] uninstallCyberware failed", o);
    }
    await i.sendResponse({ type: "CYBERWARE_UNINSTALLED", requestId: r, actorId: s, itemId: e.itemId, success: !0 }), await sr(i, s, r);
  }
}
const Ca = {
  UPDATE_ACTOR: $o,
  GET_ACTOR: nr,
  GET_ACTORS: Go,
  CONSUME_ITEM: qo,
  ITEM_EQUIP: Vo,
  RELOAD_WEAPON: Wo,
  INSTALL_PROGRAM: Ko,
  REMOVE_PROGRAM: Jo,
  TOGGLE_REZ: Xo,
  PROGRAM_ROLL: Yo,
  PREPARE_CYBERWARE_INSTALL: wa,
  INSTALL_CYBERWARE: ka,
  UNINSTALL_CYBERWARE: _a,
  DAMAGE_ROLL: ea,
  DEATH_SAVE: ta,
  FACEDOWN_ROLL: na,
  INITIATIVE_ROLL: ra,
  ROLE_ROLL: sa,
  SKILL_ROLL: ia,
  STAT_ROLL: oa,
  DICE_ROLL: aa,
  ATTACK_ROLL: ca,
  MOVE_TOKEN: la,
  TARGET_TOKEN: ua,
  LIST_VISIBLE_TOKENS: ha,
  GET_DV_INFO: da,
  GET_ROLL_MODIFIERS: fa,
  UPDATE_STAT: pa,
  UPDATE_EB: ga,
  GET_NET_POOL: ya,
  PAIR_AGENT: ba
};
async function Rn(i, e, r, s) {
  const n = Ca[e];
  if (!n) {
    console.log("Unknown DataType: " + e);
    return;
  }
  return n(i, r, s);
}
class Sa {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1, this._captureRollMode = null, this._prevRollMode = null, this._captureSafetyTimer = null, this.embedTransport = null;
  }
  rollAndCapture(e, r, s = null) {
    return Hi(this, e, r, s);
  }
  /**
   * Begin an Agent-initiated roll capture. Records the desired roll mode and
   * mirrors it onto core.rollMode (so a CPR roll that reads the dropdown picks
   * it up). Awaited, so the setting has landed before the roll fires. A safety
   * timer guarantees the capture state can't leak if, unusually, no chat
   * message is ever created to consume it. `windowMs` covers a roll dialog
   * waiting for someone to confirm it.
   */
  async _beginRollCapture(e = null, r = 6e3) {
    if (this._isCapturingRoll = !0, this._captureRollMode = e || null, this._prevRollMode = game.settings.get("core", "rollMode"), game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Roll capture begin: rollMode=${e}`, "color:#c084fc; font-weight:bold;"), e)
      try {
        await game.settings.set("core", "rollMode", e);
      } catch {
      }
    clearTimeout(this._captureSafetyTimer), this._captureSafetyTimer = setTimeout(() => this._endRollCapture(), r);
  }
  /** Once the roll card is out, its chat message has a few seconds to consume the capture. */
  _armCaptureSafety() {
    this._isCapturingRoll && (clearTimeout(this._captureSafetyTimer), this._captureSafetyTimer = setTimeout(() => this._endRollCapture(), 6e3));
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
    const r = game.users.filter((s) => s.isGM).map((s) => s.id);
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
    zo(this);
  }
  destroy() {
    var e;
    this.echo && this.echo.disconnect();
    for (let [r, s] of Object.entries(this.hookIds))
      Hooks.off(r, s);
    try {
      (e = game.socket) == null || e.off(`module.${A}`);
    } catch {
    }
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  connect() {
    const e = game.settings.get(A, "apiUrl"), r = game.settings.get(A, "apiKey"), s = game.settings.get(A, "debugMode"), n = Number(game.settings.get(A, "reverbPort") || 0) || 0, o = game.settings.get(A, "reverbUseSSL"), l = (game.settings.get(A, "reverbHost") || "").trim();
    if (!r || !e) return;
    this.echo && this.echo.disconnect();
    let h;
    try {
      h = new URL(e);
    } catch {
      return;
    }
    const u = l || h.hostname, f = Ni(o, e), p = h.port ? Number(h.port) : h.protocol === "https:" ? 443 : 80, y = n > 0 ? n : p;
    this.echo = new Pi({
      broadcaster: "reverb",
      key: game.settings.get(A, "reverbKey") || En,
      wsHost: u,
      wsPort: y,
      wssPort: y,
      forceTLS: f,
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
      this.isConnected = !0, ui.notifications.info("Cyberpunk Bridge: Online"), s && console.log("Cyberpunk Bridge: Connection Established");
    }), this.echo.connector.pusher.connection.bind("disconnected", () => {
      this.isConnected = !1;
    }), this.listen();
  }
  listen() {
    const e = game.settings.get(A, "channelId"), r = e ? `cpr-agent.${e}` : "cpr-agent";
    this.echo.private(r).listen(".GameUpdate", (s) => {
      this.handleIncomingData(s);
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
    const s = async () => {
      var l;
      const n = game.user.character, o = game.user.getFlag(A, "agent-link");
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
        r && console.log("[Bridge] syncPlayerLink: Laravel response:", h), h && h.agent_link ? o !== h.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${h.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${h.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(A, "agent-link", h.agent_link), (l = ui.notifications) == null || l.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", h);
      } catch (h) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", h);
      }
    };
    await s(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (n, o) => {
      n.id === game.user.id && o.character !== void 0 && s();
    }));
  }
  /** Agent links of the non-GM users who own this actor and have paired an Agent. */
  _ownerAgentLinks(e) {
    const r = game.users.filter((s) => !s.isGM && e.testUserPermission(s, "OWNER")).map((s) => s.getFlag(A, "agent-link")).filter(Boolean);
    return [...new Set(r)];
  }
  registerGlobalHooks() {
    var l, h;
    if (this.hookIds.updateActor) return;
    const e = async (u, f) => {
      const p = game.settings.get(A, "apiKey");
      if (!this.isConnected && !p && !this.embedTransport || !u || !["character", "mook"].includes(u.type)) return;
      console.log(`%c[Bridge] Syncing change for ${u.name}`, "color: #ffaa00;", f);
      const y = { type: "SHEET_DELTA", actorId: u.id, uuid: u.id, delta: f, success: !0 }, m = game.user.isGM ? this._ownerAgentLinks(u) : [];
      if (!m.length) {
        await this.sendResponse(y);
        return;
      }
      if (Oi())
        for (const b of m) await this.sendResponse({ ...y, agentLink: b });
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (u, f, p, y) => {
      if (f.system) {
        const m = _t(f.system, "system.");
        e(u, m);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (u, f, p, y) => {
      const m = u.parent;
      if (m instanceof Actor) {
        const b = {}, C = `items.${u.id}.`;
        f.system && _t(f.system, `${C}system.`, b);
        for (let _ in f)
          _ !== "system" && _ !== "_id" && (b[`${C}${_}`] = f[_]);
        Object.keys(b).length > 0 && e(m, b);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (u, f, p) => {
      const y = u.parent;
      if (y instanceof Actor) {
        const m = {
          [`items.+${u.id}`]: u.toObject()
        };
        e(y, m);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (u, f, p) => {
      const y = u.parent;
      if (y instanceof Actor) {
        const m = {
          [`items.${u.id}`]: null
        };
        e(y, m);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (u, f) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (u, f, p, y) => {
      (f.x || f.y || f.disposition || f.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    });
    const r = (u) => (u == null ? void 0 : u.type) === "cpr-agent.datapool";
    let s = null;
    const n = (u) => {
      !this.embedTransport && u !== game.user.id || (clearTimeout(s), s = setTimeout(() => this.broadcastRefresh("NET_POOL_DATA"), 300));
    };
    for (const u of ["createJournalEntryPage", "updateJournalEntryPage", "deleteJournalEntryPage"])
      this.hookIds[u] = Hooks.on(u, (f, ...p) => {
        r(f) && n(p[p.length - 1]);
      });
    for (const u of ["updateJournalEntry", "deleteJournalEntry"])
      this.hookIds[u] = Hooks.on(u, (f, ...p) => {
        f.pages.some(r) && n(p[p.length - 1]);
      });
    const o = (u) => {
      const f = u.parent, p = f == null ? void 0 : f.parent;
      !(f instanceof Item) || !(p instanceof Actor) || e(p, { [`items.${f.id}.effects`]: f.toObject().effects });
    };
    this.hookIds.createActiveEffect = Hooks.on("createActiveEffect", o), this.hookIds.updateActiveEffect = Hooks.on("updateActiveEffect", o), this.hookIds.deleteActiveEffect = Hooks.on("deleteActiveEffect", o), this.hookIds.deleteToken = Hooks.on("deleteToken", (u, f, p) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.preCreateChatMessage = Hooks.on("preCreateChatMessage", (u, f, p, y) => {
      if (!(!this._isCapturingRoll || !this._captureRollMode))
        try {
          const m = this._whisperForRollMode(this._captureRollMode);
          u.updateSource(m), game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Stamped rollMode ${this._captureRollMode}`, "color:#c084fc; font-weight:bold;", m);
        } catch (m) {
          console.warn("[Bridge] Failed to apply roll-mode visibility", m);
        }
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (u, f, p) => {
      var b;
      const y = !!(u.rolls && u.rolls.length > 0) || !!vn(u.content), m = ((b = u.author) == null ? void 0 : b.id) === game.user.id;
      if (game.settings.get(A, "debugMode") && console.log(`%c[Bridge] createChatMessage: hasRolls=${y} mine=${m} capturing=${this._isCapturingRoll} embed=${!!this.embedTransport}`, "color:#00ff88; font-weight:bold;"), !!y && m) {
        if (this._isCapturingRoll) {
          this._endRollCapture(), wn();
          return;
        }
        this.broadcastRoll(u);
      }
    }), console.log(`%c[Bridge] registerGlobalHooks: user=${(l = game.user) == null ? void 0 : l.name} isGM=${(h = game.user) == null ? void 0 : h.isGM} socket=${!!game.socket} → registering peer-roll listener on module.${A}`, "color:#00ffff; font-weight:bold;"), game.socket && game.socket.on(`module.${A}`, (u) => {
      if (!(!u || u.kind !== "peer-roll" || !u.payload)) {
        if (console.log(`%c[Bridge] peer-roll socket IN (rollMode=${u.payload.rollMode}, recipients=${JSON.stringify(u.recipients)}, embed=${!!this.embedTransport})`, "color:#00ff88; font-weight:bold;"), Array.isArray(u.recipients) && !u.recipients.includes(game.user.id)) {
          console.log("%c[Bridge] peer-roll dropped: not a recipient", "color:#ffaa00;");
          return;
        }
        if (!this.embedTransport) {
          console.log("%c[Bridge] peer-roll dropped: no embedTransport (Agent window not open on this client)", "color:#ffaa00;");
          return;
        }
        console.log("%c[Bridge] peer-roll → iframe", "color:#00ff88; font-weight:bold;");
        try {
          this.embedTransport.send(u.payload);
        } catch (f) {
          console.error("Cyberpunk Bridge: peer-roll tee failed", f);
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
    const r = game.users.filter((n) => n.isGM).map((n) => n.id), s = game.user.id;
    return e === "selfroll" ? [s] : [.../* @__PURE__ */ new Set([...r, s])];
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
    } catch (s) {
      console.error("Cyberpunk Bridge: peer-roll emit failed", s);
    }
  }
  broadcastRefresh(e) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: e });
  }
  broadcastRoll(e, { localOnly: r = !1 } = {}) {
    var b;
    const s = game.users.get(e.author.id), n = e.rolls[0];
    let o = "publicroll";
    if (e.blind)
      o = "blindroll";
    else if (e.whisper && e.whisper.length > 0) {
      const C = game.users.filter((v) => v.isGM).map((v) => v.id), _ = e.whisper.every((v) => C.includes(v) || v === e.author.id);
      e.whisper.length === 1 && e.whisper[0] === e.author.id ? o = "selfroll" : o = "gmroll";
    }
    game.settings.get(A, "debugMode") && console.log(`%c[Bridge] broadcastRoll ${r ? "(peer→iframe)" : "(mine)"} rollMode=${o} total=${n == null ? void 0 : n.total}`, "color:#00ff88; font-weight:bold;");
    let l = null;
    try {
      l = (n == null ? void 0 : n.toJSON()) ?? null;
    } catch {
    }
    const h = vn(e.content), u = wn(), f = h ? u ?? h : null, p = (f == null ? void 0 : f.total) ?? (n == null ? void 0 : n.total) ?? null, y = (n == null ? void 0 : n.formula) ?? null, m = (f == null ? void 0 : f.label) || e.flavor || "Dice Roll";
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((b = e.speaker) == null ? void 0 : b.actor) || null,
      agentLink: s ? s.getFlag(A, "agent-link") : null,
      playerName: e.alias,
      total: p,
      formula: y,
      rollMode: e.rollMode || o,
      label: m,
      isCriticalSuccess: (f == null ? void 0 : f.isCriticalSuccess) ?? !1,
      isCriticalFailure: (f == null ? void 0 : f.isCriticalFailure) ?? !1,
      rawRoll: {
        total: p,
        formula: y,
        rollTitle: m,
        resultTotal: p,
        isCriticalSuccess: (f == null ? void 0 : f.isCriticalSuccess) ?? !1,
        isCriticalFailure: (f == null ? void 0 : f.isCriticalFailure) ?? !1,
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
    const s = (e.requestId ? this.requestAgentLinks.get(e.requestId) : null) || (r ? null : game.user.getFlag(A, "agent-link"));
    s && !e.agentLink && (e.agentLink = s);
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
    let o = game.settings.get(A, "apiUrl");
    const l = game.settings.get(A, "apiKey");
    if (!o || !l) return null;
    o.endsWith("/") && (o = o.slice(0, -1));
    try {
      const h = await fetch(`${o}/api/foundry/callback`, {
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
    var m, b;
    const r = e.payload || e, s = r.type;
    console.log(`%c[Bridge] Incoming Call: ${s}`, "color: #00ffff; font-weight: bold;", r);
    const n = r.requestId, o = r.agent_link || r.agentLink;
    n && o && (this.requestAgentLinks.set(n, o), setTimeout(() => this.requestAgentLinks.delete(n), 3e4));
    const l = game.user.getFlag(A, "agent-link"), h = r.actorId, u = (m = game.user.character) == null ? void 0 : m.id, f = game.settings.get(A, "debugMode");
    f && console.log(`[Bridge] handleIncomingData: requestId=${n}, agentLink=${o}, myAgentLink=${l}, actorId=${h}, myCharacterId=${u}`);
    let p = !1;
    if (game.user.isGM || l && (n === l || o === l) ? p = !0 : !l && n && h && u === h && (console.log(`[Bridge] Discovery: Matching incoming request to character ${h}`), p = !0), !p) {
      f && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && o && l !== o && (n === o || h && u === h) && (console.log(`%c[Bridge] Setting agent-link flag: ${o}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(A, "agent-link", o), (b = ui.notifications) == null || b.info("Agent: Account linked!"));
    const y = yn(r.tokenId, h);
    await Rn(this, s, r, { type: s, requestId: n, actorId: h, tokenId: y, debug: f, remote: !0 });
  }
  /**
   * Ingress for messages arriving from an embedded Agent iframe.
   * Skips the Laravel-oriented channel/agentLink routing in handleIncomingData:
   * the iframe runs in this same client for this same user, already
   * authenticated by Foundry and validated (origin + nonce) at the transport.
   * Foundry's own permission model still gates every handler action.
   */
  async handleIncomingDataLocal(e) {
    const r = e.type, s = e.requestId, n = e.actorId, o = game.settings.get(A, "debugMode"), l = yn(e.tokenId, n);
    o && console.log(`%c[Bridge] Embed Call: ${r}`, "color: #c084fc; font-weight: bold;", e), await Rn(this, r, e, { type: r, requestId: s, actorId: n, tokenId: l, debug: o });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class or extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const e = foundry.data.fields;
    return {
      // An array of dynamic rows
      entries: new e.ArrayField(new e.SchemaField({
        id: new e.StringField({ required: !0, initial: () => foundry.utils.randomID() }),
        icon: new e.FilePathField({ categories: ["IMAGE"], initial: "icons/svg/item-bag.svg" }),
        title: new e.StringField({ required: !0, initial: "Link Title" }),
        hidden: new e.BooleanField({ initial: !1 }),
        type: new e.StringField({ choices: ["html", "pdf"], initial: "html" }),
        htmlContent: new e.HTMLField(),
        pdfPath: new e.FilePathField({ categories: ["TEXT"] })
      }))
    };
  }
}
gt(or, "metadata", {
  label: "Agent Data Pool"
});
class ar extends JournalPageSheet {
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
    for (let s of r.entries)
      s.type === "html" && (s.enrichedHtml = await TextEditor.enrichHTML(s.htmlContent, {
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
    const s = [...this.document.system.entries || [], {
      id: foundry.utils.randomID(),
      title: "New Data Pool Link",
      type: "html"
    }];
    await this.document.update({ "system.entries": s });
  }
  async _onDeleteEntry(e) {
    e.preventDefault();
    const r = e.currentTarget.dataset.id, n = (this.document.system.entries || []).filter((o) => o.id !== r);
    await this.document.update({ "system.entries": n });
  }
}
/** @override */
gt(ar, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
class Ta {
  constructor(e) {
    this.bridge = e, this.frame = null, this.nonce = null, this.origin = fi(), this.ready = !1, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage);
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
class Aa extends Application {
  constructor(e, r = {}) {
    super(r), this.bridge = e, this.nonce = foundry.utils.randomID(24), e.embedTransport || (e.embedTransport = new Ta(e)), this.transport = e.embedTransport;
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
      src: `${Ln()}/embed?nonce=${encodeURIComponent(this.nonce)}`
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
      const o = this.position || {};
      this._prevPosition = { width: o.width, height: o.height, top: o.top, left: o.left }, this.setPosition({ left: 0, top: 0, width: window.innerWidth, height: window.innerHeight });
    } else
      this.setPosition(this._prevPosition || { width: 430, height: 820 });
    const r = e == null ? void 0 : e.currentTarget, s = (n = r == null ? void 0 : r.querySelector) == null ? void 0 : n.call(r, "i");
    s && (s.classList.toggle("fa-expand", !this._isFullscreen), s.classList.toggle("fa-compress", this._isFullscreen)), r && r.childNodes.forEach((o) => {
      o.nodeType === Node.TEXT_NODE && (o.textContent = this._isFullscreen ? " Windowed" : " Fullscreen");
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
    var o, l;
    await super._render(e, r);
    const s = this.element instanceof HTMLElement ? this.element : (o = this.element) == null ? void 0 : o[0], n = (l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, "iframe.cpr-agent-frame");
    n && this.transport.frame !== n ? this.transport.attach(n, this.nonce) : n || console.warn("[Bridge] AgentApp: iframe.cpr-agent-frame not found; transport not attached.");
  }
  async close(e) {
    var r;
    return (r = this.transport) == null || r.detach(), super.close(e);
  }
}
window.Pusher = di;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new Sa();
Hooks.once("init", () => {
  Ra(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = or, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", ar, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  Fi(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), Oo(window.cyberpunkBridge), window.cyberpunkBridge.openAgent = () => {
    window.cyberpunkBridge._agentApp || (window.cyberpunkBridge._agentApp = new Aa(window.cyberpunkBridge)), window.cyberpunkBridge._agentApp.render(!0);
  }, console.log("[Bridge] Cyberpunk Bridge Fully Online. Open the embedded Agent with: cyberpunkBridge.openAgent()");
});
Hooks.on("getSceneControlButtons", (i) => {
  const e = Array.isArray(i) ? i.find((r) => r.name === "token") : i == null ? void 0 : i.token;
  e != null && e.tools && e.tools.push({
    name: "cpr-agent",
    title: "Open Agent",
    icon: "fas fa-mobile-screen-button",
    button: !0,
    onClick: () => {
      var r, s;
      return (s = (r = window.cyberpunkBridge) == null ? void 0 : r.openAgent) == null ? void 0 : s.call(r);
    }
  });
});
function Ra() {
  game.settings.settings.has(`${A}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
