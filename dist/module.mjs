var cs = Object.defineProperty;
var ls = (s, e, r) => e in s ? cs(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var gt = (s, e, r) => ls(s, typeof e != "symbol" ? e + "" : e, r);
import.meta.hot && import.meta.hot.accept((s) => {
  console.log("Hot reloading module...");
});
function us(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var In = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
(function(s, e) {
  (function(i, n) {
    s.exports = n();
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
        function(r, i, n) {
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
          i.Coder = h;
          var u = new h();
          function f(_) {
            return u.encode(_);
          }
          i.encode = f;
          function g(_) {
            return u.decode(_);
          }
          i.decode = g;
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
          i.URLSafeCoder = y;
          var m = new y();
          function b(_) {
            return m.encode(_);
          }
          i.encodeURLSafe = b;
          function C(_) {
            return m.decode(_);
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
          var o = "utf8: invalid string", l = "utf8: invalid source encoding";
          function h(g) {
            for (var y = new Uint8Array(u(g)), m = 0, b = 0; b < g.length; b++) {
              var C = g.charCodeAt(b);
              C < 128 ? y[m++] = C : C < 2048 ? (y[m++] = 192 | C >> 6, y[m++] = 128 | C & 63) : C < 55296 ? (y[m++] = 224 | C >> 12, y[m++] = 128 | C >> 6 & 63, y[m++] = 128 | C & 63) : (b++, C = (C & 1023) << 10, C |= g.charCodeAt(b) & 1023, C += 65536, y[m++] = 240 | C >> 18, y[m++] = 128 | C >> 12 & 63, y[m++] = 128 | C >> 6 & 63, y[m++] = 128 | C & 63);
            }
            return y;
          }
          i.encode = h;
          function u(g) {
            for (var y = 0, m = 0; m < g.length; m++) {
              var b = g.charCodeAt(m);
              if (b < 128)
                y += 1;
              else if (b < 2048)
                y += 2;
              else if (b < 55296)
                y += 3;
              else if (b <= 57343) {
                if (m >= g.length - 1)
                  throw new Error(o);
                m++, y += 4;
              } else
                throw new Error(o);
            }
            return y;
          }
          i.encodedLength = u;
          function f(g) {
            for (var y = [], m = 0; m < g.length; m++) {
              var b = g[m];
              if (b & 128) {
                var C = void 0;
                if (b < 224) {
                  if (m >= g.length)
                    throw new Error(l);
                  var _ = g[++m];
                  if ((_ & 192) !== 128)
                    throw new Error(l);
                  b = (b & 31) << 6 | _ & 63, C = 128;
                } else if (b < 240) {
                  if (m >= g.length - 1)
                    throw new Error(l);
                  var _ = g[++m], k = g[++m];
                  if ((_ & 192) !== 128 || (k & 192) !== 128)
                    throw new Error(l);
                  b = (b & 15) << 12 | (_ & 63) << 6 | k & 63, C = 2048;
                } else if (b < 248) {
                  if (m >= g.length - 2)
                    throw new Error(l);
                  var _ = g[++m], k = g[++m], v = g[++m];
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
          i.decode = f;
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
            constructor(t, a) {
              this.lastId = 0, this.prefix = t, this.name = a;
            }
            create(t) {
              this.lastId++;
              var a = this.lastId, d = this.prefix + a, p = this.name + "[" + a + "]", w = !1, T = function() {
                w || (t.apply(null, arguments), w = !0);
              };
              return this[a] = T, { number: a, id: d, name: p, callback: T };
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
              var p = this;
              if (p.loading[t] && p.loading[t].length > 0)
                p.loading[t].push(d);
              else {
                p.loading[t] = [d];
                var w = N.createScriptRequest(p.getPath(t, a)), T = p.receivers.create(function(L) {
                  if (p.receivers.remove(T), p.loading[t]) {
                    var M = p.loading[t];
                    delete p.loading[t];
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
          var g = new o("_pusher_dependencies", "Pusher.DependenciesReceivers"), y = new f({
            cdn_http: u.cdn_http,
            cdn_https: u.cdn_https,
            version: u.VERSION,
            suffix: u.dependency_suffix,
            receivers: g
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
          var H = function(c, t, a, d, p) {
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
                    p(new B(200, `JSON returned from ${d.toString()} endpoint was invalid, yet status code was 200. Data was: ${w.responseText}`), null);
                  }
                  M && p(null, L);
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
                  p(new B(w.status, `Unable to retrieve auth string from ${d.toString()} endpoint - received status: ${w.status} from ${a.endpoint}. ${L}`), null);
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
            constructor(t, a, d, p) {
              this.clear = a, this.timer = t(() => {
                this.timer && (this.timer = p(this.timer));
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
          }, q = de;
          function W(c, ...t) {
            for (var a = 0; a < t.length; a++) {
              var d = t[a];
              for (var p in d)
                d[p] && d[p].constructor && d[p].constructor === Object ? c[p] = W(c[p] || {}, d[p]) : c[p] = d[p];
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
            for (var d = 0, p = c.length; d < p; d++)
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
            return ne(c, function(d, p) {
              a[p] = t(d);
            }), a;
          }
          function $t(c, t) {
            t = t || function(p) {
              return !!p;
            };
            for (var a = [], d = 0; d < c.length; d++)
              t(c[d], d, c, a) && a.push(c[d]);
            return a;
          }
          function qt(c, t) {
            var a = {};
            return ne(c, function(d, p) {
              (t && t(d, p, c, a) || d) && (a[p] = d);
            }), a;
          }
          function ur(c) {
            var t = [];
            return ne(c, function(a, d) {
              t.push([d, a]);
            }), t;
          }
          function Gt(c, t) {
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
            var t = qt(c, function(d) {
              return d !== void 0;
            }), a = zt(ur(dr(t)), q.method("join", "=")).join("&");
            return a;
          }
          function pr(c) {
            var t = [], a = [];
            return function d(p, w) {
              var T, L, M;
              switch (typeof p) {
                case "object":
                  if (!p)
                    return null;
                  for (T = 0; T < t.length; T += 1)
                    if (t[T] === p)
                      return { $ref: a[T] };
                  if (t.push(p), a.push(w), Object.prototype.toString.apply(p) === "[object Array]")
                    for (M = [], T = 0; T < p.length; T += 1)
                      M[T] = d(p[T], w + "[" + T + "]");
                  else {
                    M = {};
                    for (L in p)
                      Object.prototype.hasOwnProperty.call(p, L) && (M[L] = d(p[L], w + "[" + JSON.stringify(L) + "]"));
                  }
                  return M;
                case "number":
                case "string":
                case "boolean":
                  return p;
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
          var j = new gr(), mr = function(c, t, a, d, p) {
            (a.headers !== void 0 || a.headersProvider != null) && j.warn(`To send headers with the ${d.toString()} request, you must use AJAX, rather than JSONP.`);
            var w = c.nextAuthCallbackID.toString();
            c.nextAuthCallbackID++;
            var T = c.getDocument(), L = T.createElement("script");
            c.auth_callbacks[w] = function(D) {
              p(null, D);
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
              var p = document.getElementsByTagName("head")[0];
              p.insertBefore(a.script, p.firstChild), a.errorScript && p.insertBefore(a.errorScript, a.script.nextSibling);
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
              var p = "http" + (t ? "s" : "") + "://", w = p + (c.host || c.options.host) + c.options.path, T = N.createJSONPRequest(w, a), L = N.ScriptReceivers.create(function(M, x) {
                l.remove(L), T.cleanup(), x && x.host && (c.host = x.host), d && d(M, x);
              });
              T.send(L);
            };
          }, kr = {
            name: "jsonp",
            getAgent: wr
          }, _r = kr;
          function nt(c, t, a) {
            var d = c + (t.useTLS ? "s" : ""), p = t.useTLS ? t.hostTLS : t.hostNonTLS;
            return d + "://" + p + a;
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
              return this._callbacks[it(t)];
            }
            add(t, a, d) {
              var p = it(t);
              this._callbacks[p] = this._callbacks[p] || [], this._callbacks[p].push({
                fn: a,
                context: d
              });
            }
            remove(t, a, d) {
              if (!t && !a && !d) {
                this._callbacks = {};
                return;
              }
              var p = t ? [it(t)] : Ht(this._callbacks);
              a || d ? this.removeCallback(p, a, d) : this.removeAllCallbacks(p);
            }
            removeCallback(t, a, d) {
              ke(t, function(p) {
                this._callbacks[p] = $t(this._callbacks[p] || [], function(w) {
                  return a && a !== w.fn || d && d !== w.context;
                }), this._callbacks[p].length === 0 && delete this._callbacks[p];
              }, this);
            }
            removeAllCallbacks(t) {
              ke(t, function(a) {
                delete this._callbacks[a];
              }, this);
            }
          }
          function it(c) {
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
              for (var p = 0; p < this.global_callbacks.length; p++)
                this.global_callbacks[p](t, a);
              var w = this.callbacks.get(t), T = [];
              if (d ? T.push(a, d) : a && T.push(a), w && w.length > 0)
                for (var p = 0; p < w.length; p++)
                  w[p].fn.apply(w[p].context || window, T);
              else this.failThrough && this.failThrough(t, a);
              return this;
            }
          }
          class Rr extends re {
            constructor(t, a, d, p, w) {
              super(), this.initialize = N.transportConnectionInitializer, this.hooks = t, this.name = a, this.priority = d, this.key = p, this.options = w, this.state = "new", this.timeline = w.timeline, this.activityTimeout = w.activityTimeout, this.id = this.timeline.generateUniqueID();
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
              return this.bindListeners(), j.debug("Connecting", { transport: this.name, url: t }), this.changeState("connecting"), !0;
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
          class fe {
            constructor(t) {
              this.hooks = t;
            }
            isSupported(t) {
              return this.hooks.isSupported(t);
            }
            createConnection(t, a, d, p) {
              return new Rr(this.hooks, t, a, d, p);
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
            createConnection(t, a, d, p) {
              p = W({}, p, {
                activityTimeout: this.pingDelay
              });
              var w = this.transport.createConnection(t, a, d, p), T = null, L = function() {
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
              } catch (p) {
                throw { type: "MessageParseError", error: p, data: c.data };
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
              var p = { event: t, data: a };
              return d && (p.channel = d), j.debug("Event sent", p), this.send(ae.encodeMessage(p));
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
                  var p;
                  try {
                    p = ae.decodeMessage(d);
                  } catch (w) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: w,
                      data: d.data
                    });
                  }
                  if (p !== void 0) {
                    switch (j.debug("Event recd", p), p.event) {
                      case "pusher:error":
                        this.emit("error", {
                          type: "PusherError",
                          data: p.data
                        });
                        break;
                      case "pusher:ping":
                        this.emit("ping");
                        break;
                      case "pusher:pong":
                        this.emit("pong");
                        break;
                    }
                    this.emit("message", p);
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
                ne(t, (d, p) => {
                  this.transport.unbind(p, d);
                });
              };
              ne(t, (d, p) => {
                this.transport.bind(p, d);
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
          class st extends re {
            constructor(t, a) {
              super(function(d, p) {
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
                var p = {};
                this.emit(a, d, p);
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
          class ot extends st {
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
            function p(w) {
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
                D.done ? w(D.value) : p(D.value).then(L, M);
              }
              x((d = d.apply(c, t || [])).next());
            });
          };
          class qr extends ot {
            constructor(t, a) {
              super(t, a), this.members = new zr();
            }
            authorize(t, a) {
              super.authorize(t, (d, p) => $r(this, void 0, void 0, function* () {
                if (!d)
                  if (p = p, p.channel_data != null) {
                    var w = JSON.parse(p.channel_data);
                    this.members.setMyID(w.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let T = C.buildLogSuffix("authorizationEndpoint");
                    j.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${T}, or the user should be signed in.`), a("Invalid auth response");
                    return;
                  }
                a(d, p);
              }));
            }
            handleEvent(t) {
              var a = t.event;
              if (a.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(t);
              else {
                var d = t.data, p = {};
                t.user_id && (p.user_id = t.user_id), this.emit(a, d, p);
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
                  var p = this.members.addMember(d);
                  this.emit("pusher:member_added", p);
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
          var Gr = n(1), at = n(0);
          class Vr extends ot {
            constructor(t, a, d) {
              super(t, a), this.key = null, this.nacl = d;
            }
            authorize(t, a) {
              super.authorize(t, (d, p) => {
                if (d) {
                  a(d, p);
                  return;
                }
                let w = p.shared_secret;
                if (!w) {
                  a(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(at.decode)(w), delete p.shared_secret, a(null, p);
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
              let p = Object(at.decode)(a.nonce);
              if (p.length < this.nacl.secretbox.nonceLength) {
                j.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${p.length}`);
                return;
              }
              let w = this.nacl.secretbox.open(d, p, this.key);
              if (w === null) {
                j.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (T, L) => {
                  if (T) {
                    j.error(`Failed to make a request to the authEndpoint: ${L}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (w = this.nacl.secretbox.open(d, p, this.key), w === null) {
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
              let a = Object(Gr.decode)(t);
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
                var p = t;
                p === "connected" && (p += " with new socket ID " + a.socket_id), j.debug("State changed", d + " -> " + p), this.timeline.info({ state: t, params: a }), this.emit("state_change", { previous: d, current: t }), this.emit(t, a);
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
          var Xr = {
            createChannels() {
              return new Kr();
            },
            createConnectionManager(c, t) {
              return new Wr(c, t);
            },
            createChannel(c, t) {
              return new st(c, t);
            },
            createPrivateChannel(c, t) {
              return new ot(c, t);
            },
            createPresenceChannel(c, t) {
              return new qr(c, t);
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
          }, ie = Xr;
          class Qt {
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
              return Gt(this.strategies, q.method("isSupported"));
            }
            connect(t, a) {
              var d = this.strategies, p = 0, w = this.timeout, T = null, L = (M, x) => {
                x ? a(null, x) : (p = p + 1, this.loop && (p = p % d.length), p < d.length ? (w && (w = w * 2, this.timeoutLimit && (w = Math.min(w, this.timeoutLimit))), T = this.tryStrategy(d[p], t, { timeout: w, failFast: this.failFast }, L)) : a(!0));
              };
              return T = this.tryStrategy(d[p], t, { timeout: w, failFast: this.failFast }, L), {
                abort: function() {
                  T.abort();
                },
                forceMinPriority: function(M) {
                  t = M, T && T.forceMinPriority(M);
                }
              };
            }
            tryStrategy(t, a, d, p) {
              var w = null, T = null;
              return d.timeout > 0 && (w = new ee(d.timeout, function() {
                T.abort(), p(!0);
              })), T = t.connect(a, function(L, M) {
                L && w && w.isRunning() && !d.failFast || (w && w.ensureAborted(), p(L, M));
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
              return Gt(this.strategies, q.method("isSupported"));
            }
            connect(t, a) {
              return Yr(this.strategies, t, function(d, p) {
                return function(w, T) {
                  if (p[d].error = w, w) {
                    Qr(p) && a(!0);
                    return;
                  }
                  ke(p, function(L) {
                    L.forceMinPriority(T.transport.priority);
                  }), a(null, T);
                };
              });
            }
          }
          function Yr(c, t, a) {
            var d = zt(c, function(p, w, T, L) {
              return p.connect(t, a(w, L));
            });
            return {
              abort: function() {
                ke(d, Zr);
              },
              forceMinPriority: function(p) {
                ke(d, function(w) {
                  w.forceMinPriority(p);
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
          class ei {
            constructor(t, a, d) {
              this.strategy = t, this.transports = a, this.ttl = d.ttl || 1800 * 1e3, this.usingTLS = d.useTLS, this.timeline = d.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.usingTLS, p = ti(d), w = p && p.cacheSkipCount ? p.cacheSkipCount : 0, T = [this.strategy];
              if (p && p.timestamp + this.ttl >= q.now()) {
                var L = this.transports[p.transport];
                L && (["ws", "wss"].includes(p.transport) || w > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: p.transport,
                  latency: p.latency
                }), T.push(new ce([L], {
                  timeout: p.latency * 2 + 1e3,
                  failFast: !0
                }))) : w++);
              }
              var M = q.now(), x = T.pop().connect(t, function D(z, He) {
                z ? (Zt(d), T.length > 0 ? (M = q.now(), x = T.pop().connect(t, D)) : a(z)) : (ni(d, He.transport.name, q.now() - M, w), a(null, He));
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
          function ti(c) {
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
          function ni(c, t, a, d) {
            var p = N.getLocalStorage();
            if (p)
              try {
                p[lt(c)] = De({
                  timestamp: q.now(),
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
              var d = this.strategy, p, w = new ee(this.options.delay, function() {
                p = d.connect(t, a);
              });
              return {
                abort: function() {
                  w.ensureAborted(), p && p.abort();
                },
                forceMinPriority: function(T) {
                  t = T, p && p.forceMinPriority(T);
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
          class ri {
            constructor(t) {
              this.strategy = t;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(t, a) {
              var d = this.strategy.connect(t, function(p, w) {
                w && d.abort(), a(p, w);
              });
              return d;
            }
          }
          function Ce(c) {
            return function() {
              return c.isSupported();
            };
          }
          var ii = function(c, t, a) {
            var d = {};
            function p(hn, is, ss, os, as) {
              var dn = a(c, hn, is, ss, os, as);
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
            }), z = p("ws", "ws", 3, w, x), He = p("wss", "ws", 3, T, x), Zi = p("sockjs", "sockjs", 1, L), sn = p("xhr_streaming", "xhr_streaming", 1, L, D), es = p("xdr_streaming", "xdr_streaming", 1, L, D), on = p("xhr_polling", "xhr_polling", 1, L), ts = p("xdr_polling", "xdr_polling", 1, L), an = new ce([z], M), ns = new ce([He], M), rs = new ce([Zi], M), cn = new ce([
              new _e(Ce(sn), sn, es)
            ], M), ln = new ce([
              new _e(Ce(on), on, ts)
            ], M), un = new ce([
              new _e(Ce(cn), new ct([
                cn,
                new Ue(ln, { delay: 4e3 })
              ]), ln)
            ], M), ft = new _e(Ce(un), un, rs), pt;
            return t.useTLS ? pt = new ct([
              an,
              new Ue(ft, { delay: 2e3 })
            ]) : pt = new ct([
              an,
              new Ue(ns, { delay: 2e3 }),
              new Ue(ft, { delay: 5e3 })
            ]), new ei(new ri(new _e(Ce(z), pt, ft)), d, {
              ttl: 18e5,
              timeline: t.timeline,
              useTLS: t.useTLS
            });
          }, si = ii, oi = function() {
            var c = this;
            c.timeline.info(c.buildTimelineMessage({
              transport: c.name + (c.options.useTLS ? "s" : "")
            })), c.hooks.isInitialized() ? c.changeState("initialized") : c.hooks.file ? (c.changeState("initializing"), y.load(c.hooks.file, { useTLS: c.options.useTLS }, function(t, a) {
              c.hooks.isInitialized() ? (c.changeState("initialized"), a(!0)) : (t && c.onError(t), c.onClose(), a(!1));
            })) : c.onClose();
          }, ai = {
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
          }, ci = ai;
          const li = 256 * 1024;
          class hi extends re {
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
              return this.position === t.length && t.length > li;
            }
          }
          var ut;
          (function(c) {
            c[c.CONNECTING = 0] = "CONNECTING", c[c.OPEN = 1] = "OPEN", c[c.CLOSED = 3] = "CLOSED";
          })(ut || (ut = {}));
          var le = ut, di = 1;
          class fi {
            constructor(t, a) {
              this.hooks = t, this.session = tn(1e3) + "/" + yi(8), this.location = pi(a), this.readyState = le.CONNECTING, this.openStream();
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
                  return N.createSocketRequest("POST", en(gi(this.location, this.session))).start(t), !0;
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
                    for (var p = 0; p < a.length; p++)
                      this.onEvent(a[p]);
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
              this.readyState === le.CONNECTING ? (t && t.hostname && (this.location.base = mi(this.location.base, t.hostname)), this.readyState = le.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
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
                q.defer(() => {
                  this.onError(t), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function pi(c) {
            var t = /([^\?]*)\/*(\??.*)/.exec(c);
            return {
              base: t[1],
              queryString: t[2]
            };
          }
          function gi(c, t) {
            return c.base + "/" + t + "/xhr_send";
          }
          function en(c) {
            var t = c.indexOf("?") === -1 ? "?" : "&";
            return c + t + "t=" + +/* @__PURE__ */ new Date() + "&n=" + di++;
          }
          function mi(c, t) {
            var a = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(c);
            return a[1] + t + a[3];
          }
          function tn(c) {
            return N.randomInt(c);
          }
          function yi(c) {
            for (var t = [], a = 0; a < c; a++)
              t.push(tn(32).toString(32));
            return t.join("");
          }
          var bi = fi, vi = {
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
          }, wi = vi, ki = {
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
          }, _i = ki, Ci = {
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
          }, Si = Ci, Ti = {
            createStreamingSocket(c) {
              return this.createSocket(wi, c);
            },
            createPollingSocket(c) {
              return this.createSocket(_i, c);
            },
            createSocket(c, t) {
              return new bi(c, t);
            },
            createXHR(c, t) {
              return this.createRequest(Si, c, t);
            },
            createRequest(c, t, a) {
              return new hi(c, t, a);
            }
          }, nn = Ti;
          nn.createXDR = function(c, t) {
            return this.createRequest(ci, c, t);
          };
          var Ai = nn, Ri = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: l,
            DependenciesReceivers: g,
            getDefaultStrategy: si,
            Transports: Br,
            transportConnectionInitializer: oi,
            HTTPFactory: Ai,
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
          }, N = Ri, ht;
          (function(c) {
            c[c.ERROR = 3] = "ERROR", c[c.INFO = 6] = "INFO", c[c.DEBUG = 7] = "DEBUG";
          })(ht || (ht = {}));
          var je = ht;
          class Ii {
            constructor(t, a, d) {
              this.key = t, this.session = a, this.events = [], this.options = d || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(t, a) {
              t <= this.options.level && (this.events.push(W({}, a, { timestamp: q.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
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
              return this.events = [], t(d, (p, w) => {
                p || this.sent++, a && a(p, w);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class Ei {
            constructor(t, a, d, p) {
              this.name = t, this.priority = a, this.transport = d, this.options = p || {};
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
              var d = !1, p = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), w = null, T = function() {
                p.unbind("initialized", T), p.connect();
              }, L = function() {
                w = ie.createHandshake(p, function(z) {
                  d = !0, D(), a(null, z);
                });
              }, M = function(z) {
                D(), a(z);
              }, x = function() {
                D();
                var z;
                z = De(p), a(new I(z));
              }, D = function() {
                p.unbind("initialized", T), p.unbind("open", L), p.unbind("error", M), p.unbind("closed", x);
              };
              return p.bind("initialized", T), p.bind("open", L), p.bind("error", M), p.bind("closed", x), p.initialize(), {
                abort: () => {
                  d || (D(), w ? w.close() : p.close());
                },
                forceMinPriority: (z) => {
                  d || this.priority < z && (w ? w.close() : p.close());
                }
              };
            }
          }
          function rn(c, t) {
            return q.defer(function() {
              t(c);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Li } = N;
          var Pi = function(c, t, a, d, p, w) {
            var T = Li[a];
            if (!T)
              throw new E(a);
            var L = (!c.enabledTransports || jt(c.enabledTransports, t) !== -1) && (!c.disabledTransports || jt(c.disabledTransports, t) === -1), M;
            return L ? (p = Object.assign({ ignoreNullOrigin: c.ignoreNullOrigin }, p), M = new Ei(t, d, w ? w.getAssistant(T) : T, p)) : M = Mi, M;
          }, Mi = {
            isSupported: function() {
              return !1;
            },
            connect: function(c, t) {
              var a = q.defer(function() {
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
          function Ni(c) {
            if (c == null)
              throw "You must pass an options object";
            if (c.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in c && j.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const Oi = (c, t) => {
            var a = "socket_id=" + encodeURIComponent(c.socketId);
            for (var d in t.params)
              a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let p = t.paramsProvider();
              for (var d in p)
                a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(p[d]);
            }
            return a;
          };
          var Bi = (c) => {
            if (typeof N.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, a) => {
              const d = Oi(t, c);
              N.getAuthorizers()[c.transport](N, d, c, _.UserAuthentication, a);
            };
          };
          const xi = (c, t) => {
            var a = "socket_id=" + encodeURIComponent(c.socketId);
            a += "&channel_name=" + encodeURIComponent(c.channelName);
            for (var d in t.params)
              a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(t.params[d]);
            if (t.paramsProvider != null) {
              let p = t.paramsProvider();
              for (var d in p)
                a += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(p[d]);
            }
            return a;
          };
          var Di = (c) => {
            if (typeof N.getAuthorizers()[c.transport] > "u")
              throw `'${c.transport}' is not a recognized auth transport`;
            return (t, a) => {
              const d = xi(t, c);
              N.getAuthorizers()[c.transport](N, d, c, _.ChannelAuthorization, a);
            };
          };
          const Fi = (c, t, a) => {
            const d = {
              authTransport: t.transport,
              authEndpoint: t.endpoint,
              auth: {
                params: t.params,
                headers: t.headers
              }
            };
            return (p, w) => {
              const T = c.channel(p.channelName);
              a(T, d).authorize(p.socketId, w);
            };
          };
          function Ui(c, t) {
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
              enableStats: qi(c),
              httpHost: ji(c),
              useTLS: $i(c),
              wsHost: Hi(c),
              userAuthenticator: Gi(c),
              channelAuthorizer: Wi(c, t)
            };
            return "disabledTransports" in c && (a.disabledTransports = c.disabledTransports), "enabledTransports" in c && (a.enabledTransports = c.enabledTransports), "ignoreNullOrigin" in c && (a.ignoreNullOrigin = c.ignoreNullOrigin), "timelineParams" in c && (a.timelineParams = c.timelineParams), "nacl" in c && (a.nacl = c.nacl), a;
          }
          function ji(c) {
            return c.httpHost ? c.httpHost : c.cluster ? `sockjs-${c.cluster}.pusher.com` : u.httpHost;
          }
          function Hi(c) {
            return c.wsHost ? c.wsHost : zi(c.cluster);
          }
          function zi(c) {
            return `ws-${c}.pusher.com`;
          }
          function $i(c) {
            return N.getProtocol() === "https:" ? !0 : c.forceTLS !== !1;
          }
          function qi(c) {
            return "enableStats" in c ? c.enableStats : "disableStats" in c ? !c.disableStats : !1;
          }
          function Gi(c) {
            const t = Object.assign(Object.assign({}, u.userAuthentication), c.userAuthentication);
            return "customHandler" in t && t.customHandler != null ? t.customHandler : Bi(t);
          }
          function Vi(c, t) {
            let a;
            return "channelAuthorization" in c ? a = Object.assign(Object.assign({}, u.channelAuthorization), c.channelAuthorization) : (a = {
              transport: c.authTransport || u.authTransport,
              endpoint: c.authEndpoint || u.authEndpoint
            }, "auth" in c && ("params" in c.auth && (a.params = c.auth.params), "headers" in c.auth && (a.headers = c.auth.headers)), "authorizer" in c && (a.customHandler = Fi(t, a, c.authorizer))), a;
          }
          function Wi(c, t) {
            const a = Vi(c, t);
            return "customHandler" in a && a.customHandler != null ? a.customHandler : Di(a);
          }
          class Ki extends re {
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
          function Ji() {
            let c, t;
            return { promise: new Promise((d, p) => {
              c = d, t = p;
            }), resolve: c, reject: t };
          }
          var Xi = Ji;
          class Yi extends re {
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
              }), this.watchlist = new Ki(t), this.pusher.connection.bind("message", (a) => {
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
              this.serverToUserChannel = new st(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((a, d) => {
                a.indexOf("pusher_internal:") === 0 || a.indexOf("pusher:") === 0 || this.emit(a, d);
              }), t(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: t, resolve: a } = Xi();
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
              return Ht(qt({ ws: N.Transports.ws }, function(t) {
                return t.isSupported({});
              }));
            }
            constructor(t, a) {
              Qi(t), Ni(a), this.key = t, this.config = Ui(a, this), this.channels = ie.createChannels(), this.global_emitter = new re(), this.sessionID = N.randomInt(1e9), this.timeline = new Ii(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: K.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: je.INFO,
                version: u.VERSION
              }), this.config.enableStats && (this.timelineSender = ie.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + N.TimelineTransport.name
              }));
              var d = (p) => N.getDefaultStrategy(this.config, p, Pi);
              this.connection = ie.createConnectionManager(this.key, {
                getStrategy: d,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (p) => {
                var w = p.event, T = w.indexOf("pusher_internal:") === 0;
                if (p.channel) {
                  var L = this.channel(p.channel);
                  L && L.handleEvent(p);
                }
                T || this.global_emitter.emit(p.event, p.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (p) => {
                j.warn(p);
              }), K.instances.push(this), this.timeline.info({ instances: K.instances.length }), this.user = new Yi(this), K.isReady && this.connect();
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
          var dt = i.default = K;
          function Qi(c) {
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
var hs = In.exports;
const ds = /* @__PURE__ */ us(hs), A = "cpr-agent", En = "itdsiqtx8cpskowawl1p", pe = "https://agent.surrealdisco.co.uk";
function Ln() {
  var e;
  return (((e = game == null ? void 0 : game.settings) == null ? void 0 : e.get(A, "apiUrl")) || pe).trim().replace(/\/$/, "") || pe;
}
function fs() {
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
}, ps = [6, 12, 25, 50, 100, 200, 400, 800], fn = {
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
function gs(s) {
  var e, r;
  return fn[(e = s == null ? void 0 : s.system) == null ? void 0 : e.weaponType] || fn[(r = s == null ? void 0 : s.system) == null ? void 0 : r.variety] || "Pistol";
}
function ms(s, e) {
  const r = ps.findIndex((n) => e <= n);
  let i = r !== -1 ? Se[s][r] : 99;
  return Array.isArray(Se[s]) && typeof Se[s][0] == "string" && (i = Se[s][Math.min(r !== -1 ? r : 0, Se[s].length - 1)]), i;
}
function ys(s) {
  const e = String(s).split(" ").join(""), r = (i) => i.charAt(0).toLowerCase() + i.slice(1);
  return r(s === "Conceal/Reveal Object" || s === "Paint/Draw/Sculpt" || s === "Resist Torture/Drugs" ? e.split("/").join("Or") : s === "Language (Streetslang)" ? e.split("(").join("").split(")").join("") : e.split("/").join("And").split("&").join("And"));
}
function bs(s, e) {
  var i, n;
  const r = ["allActions", "allActionsSpeech", "allActionsHands"];
  if (!e) return r;
  if (r.push("universalAttack"), s && s !== "None") {
    const o = ys(s);
    r.push(o, `${o}Hearing`, `${o}Sight`);
  }
  return ((i = e.system) == null ? void 0 : i.isRanged) === !0 && r.push("ranged", "singleShot"), ((n = e.system) == null ? void 0 : n.isRanged) === !1 && r.push("melee"), r;
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
function vs(s) {
  const e = String(s).match(/^system\.stats\.(\w+)\.value$/);
  if (e) return e[1].toUpperCase();
  const r = String(s).replace(/^bonuses\./, "");
  if (pn[r]) return pn[r];
  const i = r.replace(/([A-Z])/g, " $1").toLowerCase().trim();
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function Te(s) {
  "@babel/helpers - typeof";
  return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Te(s);
}
function G(s, e) {
  if (!(s instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ws(s, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(s, i.key, i);
  }
}
function V(s, e, r) {
  return e && ws(s.prototype, e), Object.defineProperty(s, "prototype", {
    writable: !1
  }), s;
}
function Re() {
  return Re = Object.assign || function(s) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (s[i] = r[i]);
    }
    return s;
  }, Re.apply(this, arguments);
}
function J(s, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  s.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: s,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(s, "prototype", {
    writable: !1
  }), e && kt(s, e);
}
function Ve(s) {
  return Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ve(s);
}
function kt(s, e) {
  return kt = Object.setPrototypeOf || function(i, n) {
    return i.__proto__ = n, i;
  }, kt(s, e);
}
function ks() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _s(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Cs(s, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _s(s);
}
function X(s) {
  var e = ks();
  return function() {
    var i = Ve(s), n;
    if (e) {
      var o = Ve(this).constructor;
      n = Reflect.construct(i, arguments, o);
    } else
      n = i.apply(this, arguments);
    return Cs(this, n);
  };
}
var Pt = /* @__PURE__ */ function() {
  function s() {
    G(this, s);
  }
  return V(s, [{
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
  }]), s;
}(), Pn = /* @__PURE__ */ function() {
  function s(e) {
    G(this, s), this.namespace = e;
  }
  return V(s, [{
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
  }]), s;
}();
function Ss(s) {
  try {
    new s();
  } catch (e) {
    if (e.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var Mt = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r(i, n, o) {
    var l;
    return G(this, r), l = e.call(this), l.name = n, l.pusher = i, l.options = o, l.eventFormatter = new Pn(l.options.namespace), l.subscribe(), l;
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
}(Pt), Mn = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
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
}(Mt), Ts = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
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
}(Mt), As = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
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
}(Mn), Nn = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r(i, n, o) {
    var l;
    return G(this, r), l = e.call(this), l.events = {}, l.listeners = {}, l.name = n, l.socket = i, l.options = o, l.eventFormatter = new Pn(l.options.namespace), l.subscribe(), l;
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
}(Pt), On = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
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
}(Nn), Rs = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
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
}(On), We = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
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
}(Pt), Bn = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
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
}(We), Is = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r() {
    return G(this, r), e.apply(this, arguments);
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
}(We), Es = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
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
  function s(e) {
    G(this, s), this._defaultOptions = {
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
  return V(s, [{
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
  }]), s;
}(), gn = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
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
      return this.channels["private-encrypted-" + n] || (this.channels["private-encrypted-" + n] = new Ts(this.pusher, "private-encrypted-" + n, this.options)), this.channels["private-encrypted-" + n];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new As(this.pusher, "presence-" + n, this.options)), this.channels["presence-" + n];
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
}(Nt), mn = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
  function r() {
    var i;
    return G(this, r), i = e.apply(this, arguments), i.channels = {}, i;
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
      return this.channels["presence-" + n] || (this.channels["presence-" + n] = new Rs(this.socket, "presence-" + n, this.options)), this.channels["presence-" + n];
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
}(Nt), Ls = /* @__PURE__ */ function(s) {
  J(r, s);
  var e = X(r);
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
      return new Is();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(n) {
      return new Es();
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
}(Nt), Ps = /* @__PURE__ */ function() {
  function s(e) {
    G(this, s), this.options = e, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return V(s, [{
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
        this.connector = new Ls(this.options);
      else if (typeof this.options.broadcaster == "function" && Ss(this.options.broadcaster))
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
  }]), s;
}();
function Ms(s, e = 6) {
  return !s || s.length <= e * 2 + 3 ? s : `${s.substring(0, e)}...${s.substring(s.length - e)}`;
}
function _t(s, e, r = {}) {
  for (let i in s) {
    const n = s[i];
    n !== null && typeof n == "object" && !Array.isArray(n) && !(n instanceof foundry.utils.Color) ? _t(n, `${e}${i}.`, r) : r[`${e}${i}`] = n;
  }
  return r;
}
function Ns(s, e) {
  if (s === "wss") return !0;
  if (s === "ws") return !1;
  try {
    return new URL(e).protocol === "https:";
  } catch {
    return !0;
  }
}
function Ot(s, e) {
  const { distance: r } = canvas.grid.measurePath([s.center, e.center]);
  return Math.ceil(r - 1e-6);
}
function yn(s, e) {
  var r, i, n, o;
  return s && ((r = canvas.tokens) != null && r.get(s)) || !e ? s : ((o = (n = (i = canvas.tokens) == null ? void 0 : i.placeables) == null ? void 0 : n.find((l) => {
    var h;
    return ((h = l.actor) == null ? void 0 : h.id) === e;
  })) == null ? void 0 : o.id) ?? s;
}
const Ct = (s) => {
  const e = Number(s);
  return s != null && s !== "" && Number.isFinite(e) ? e : null;
}, ze = (s, e) => {
  const r = s == null ? void 0 : s[e];
  if (typeof r == "function")
    try {
      return !!r.call(s);
    } catch {
      return !1;
    }
  return !!r;
};
function Os(s) {
  if (!s || typeof s != "object") return null;
  const e = Ct(s.resultTotal) ?? Ct(s.total), r = s.rollTitle || s.name || null, i = {
    total: e,
    label: r,
    isCriticalSuccess: ze(s, "wasCritSuccess") || ze(s, "isCriticalSuccess"),
    isCriticalFailure: ze(s, "wasCritFail") || ze(s, "isCriticalFailure")
  };
  return { ...i, rawRoll: { ...i, resultTotal: e, rollTitle: r } };
}
const bn = (s) => s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
function vn(s) {
  if (typeof s != "string" || !s.includes("d10-number-div")) return null;
  const e = s.match(/class="d10-number-div"[^>]*>([\s\S]*?)<\/div>/), r = e ? Ct(bn(e[1])) : null, i = s.match(/class="[^"]*\bchat-rollTitle-[\w-]*[^"]*"[^>]*>\s*<div[^>]*>([\s\S]*?)<\/div>/), n = i && bn(i[1]) || null, o = (s.match(/<li class="([^"]*\bd10\b[^"]*)"/) ?? [])[1] ?? "", l = {
    total: r,
    label: n,
    isCriticalSuccess: /_preem\.svg/.test(s) || /\bmax\b/.test(o),
    isCriticalFailure: /_fail\.svg/.test(s) || /\bmin\b/.test(o)
  };
  return { ...l, rawRoll: { ...l, resultTotal: r, rollTitle: n } };
}
const Bs = "systems/cyberpunk-red-core/modules/chat/cpr-chat.js", Ge = /* @__PURE__ */ new Set();
let St = null;
async function xs() {
  try {
    const s = foundry.utils.getRoute ?? globalThis.getRoute, { default: e } = await import(
      /* @vite-ignore */
      s(Bs)
    );
    if (typeof (e == null ? void 0 : e.RenderRollCard) != "function") return !1;
    if (e.RenderRollCard.cprAgentTap) return !0;
    const r = e.RenderRollCard, i = function(n, ...o) {
      try {
        const l = Os(n);
        if (l) {
          St = { summary: l, at: Date.now() };
          for (const h of [...Ge]) h(l);
        }
      } catch (l) {
        console.warn("[Bridge] Roll tap failed to read a roll.", l);
      }
      return r.call(this, n, ...o);
    };
    return i.cprAgentTap = !0, e.RenderRollCard = i, !0;
  } catch (s) {
    return console.warn("[Bridge] Could not tap Cyberpunk RED roll cards; roll totals come from the chat card instead.", s), !1;
  }
}
function Ds() {
  let s;
  return { promise: new Promise((r) => {
    s = (i) => {
      Ge.delete(s), r(i);
    }, Ge.add(s);
  }), cancel: () => Ge.delete(s) };
}
function wn(s = 3e3) {
  const e = St;
  return St = null, e && Date.now() - e.at <= s ? e.summary : null;
}
const Fs = 1500, kn = 12e4;
async function Us(s, e, r, i = null) {
  game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Capturing a roll for Actor ${e}`, "color: #00ffff; font-weight: bold;"), await s._beginRollCapture(i, kn);
  const n = Ds(), o = (g) => (n.cancel(), s._endRollCapture(), { success: !1, error: g });
  let l;
  const h = new Promise((g) => {
    l = setTimeout(() => g(null), kn);
  }), u = (async () => (await r(), await new Promise((g) => setTimeout(g, Fs)), null))();
  let f;
  try {
    f = await Promise.race([n.promise, u, h]);
  } catch {
    return clearTimeout(l), o("Trigger failed");
  }
  return clearTimeout(l), f ? (s._armCaptureSafety(), {
    success: !0,
    total: f.total,
    isCriticalSuccess: f.isCriticalSuccess,
    isCriticalFailure: f.isCriticalFailure,
    label: f.label,
    rollMode: s._captureRollMode || game.settings.get("core", "rollMode"),
    rawRoll: f.rawRoll
  }) : (console.warn("[Bridge] No roll card was rendered for the Agent's roll."), o("No roll card rendered"));
}
var Ee = {}, js = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, xn = {}, Q = {};
let Bt;
const Hs = [
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
  return Hs[e];
};
Q.getBCHDigit = function(s) {
  let e = 0;
  for (; s !== 0; )
    e++, s >>>= 1;
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
(function(s) {
  s.L = { bit: 1 }, s.M = { bit: 0 }, s.Q = { bit: 3 }, s.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return s.L;
      case "m":
      case "medium":
        return s.M;
      case "q":
      case "quartile":
        return s.Q;
      case "h":
      case "high":
        return s.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  s.isValid = function(i) {
    return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
  }, s.from = function(i, n) {
    if (s.isValid(i))
      return i;
    try {
      return e(i);
    } catch {
      return n;
    }
  };
})(Ye);
function Dn() {
  this.buffer = [], this.length = 0;
}
Dn.prototype = {
  get: function(s) {
    const e = Math.floor(s / 8);
    return (this.buffer[e] >>> 7 - s % 8 & 1) === 1;
  },
  put: function(s, e) {
    for (let r = 0; r < e; r++)
      this.putBit((s >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(s) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), s && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var zs = Dn;
function Le(s) {
  if (!s || s < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = s, this.data = new Uint8Array(s * s), this.reservedBit = new Uint8Array(s * s);
}
Le.prototype.set = function(s, e, r, i) {
  const n = s * this.size + e;
  this.data[n] = r, i && (this.reservedBit[n] = !0);
};
Le.prototype.get = function(s, e) {
  return this.data[s * this.size + e];
};
Le.prototype.xor = function(s, e, r) {
  this.data[s * this.size + e] ^= r;
};
Le.prototype.isReserved = function(s, e) {
  return this.reservedBit[s * this.size + e];
};
var $s = Le, Fn = {};
(function(s) {
  const e = Q.getSymbolSize;
  s.getRowColCoords = function(i) {
    if (i === 1) return [];
    const n = Math.floor(i / 7) + 2, o = e(i), l = o === 145 ? 26 : Math.ceil((o - 13) / (2 * n - 2)) * 2, h = [o - 7];
    for (let u = 1; u < n - 1; u++)
      h[u] = h[u - 1] - l;
    return h.push(6), h.reverse();
  }, s.getPositions = function(i) {
    const n = [], o = s.getRowColCoords(i), l = o.length;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        h === 0 && u === 0 || // top-left
        h === 0 && u === l - 1 || // bottom-left
        h === l - 1 && u === 0 || n.push([o[h], o[u]]);
    return n;
  };
})(Fn);
var Un = {};
const qs = Q.getSymbolSize, _n = 7;
Un.getPositions = function(e) {
  const r = qs(e);
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
(function(s) {
  s.Patterns = {
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
  s.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, s.from = function(n) {
    return s.isValid(n) ? parseInt(n, 10) : void 0;
  }, s.getPenaltyN1 = function(n) {
    const o = n.size;
    let l = 0, h = 0, u = 0, f = null, g = null;
    for (let y = 0; y < o; y++) {
      h = u = 0, f = g = null;
      for (let m = 0; m < o; m++) {
        let b = n.get(y, m);
        b === f ? h++ : (h >= 5 && (l += e.N1 + (h - 5)), f = b, h = 1), b = n.get(m, y), b === g ? u++ : (u >= 5 && (l += e.N1 + (u - 5)), g = b, u = 1);
      }
      h >= 5 && (l += e.N1 + (h - 5)), u >= 5 && (l += e.N1 + (u - 5));
    }
    return l;
  }, s.getPenaltyN2 = function(n) {
    const o = n.size;
    let l = 0;
    for (let h = 0; h < o - 1; h++)
      for (let u = 0; u < o - 1; u++) {
        const f = n.get(h, u) + n.get(h, u + 1) + n.get(h + 1, u) + n.get(h + 1, u + 1);
        (f === 4 || f === 0) && l++;
      }
    return l * e.N2;
  }, s.getPenaltyN3 = function(n) {
    const o = n.size;
    let l = 0, h = 0, u = 0;
    for (let f = 0; f < o; f++) {
      h = u = 0;
      for (let g = 0; g < o; g++)
        h = h << 1 & 2047 | n.get(f, g), g >= 10 && (h === 1488 || h === 93) && l++, u = u << 1 & 2047 | n.get(g, f), g >= 10 && (u === 1488 || u === 93) && l++;
    }
    return l * e.N3;
  }, s.getPenaltyN4 = function(n) {
    let o = 0;
    const l = n.data.length;
    for (let u = 0; u < l; u++) o += n.data[u];
    return Math.abs(Math.ceil(o * 100 / l / 5) - 10) * e.N4;
  };
  function r(i, n, o) {
    switch (i) {
      case s.Patterns.PATTERN000:
        return (n + o) % 2 === 0;
      case s.Patterns.PATTERN001:
        return n % 2 === 0;
      case s.Patterns.PATTERN010:
        return o % 3 === 0;
      case s.Patterns.PATTERN011:
        return (n + o) % 3 === 0;
      case s.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(o / 3)) % 2 === 0;
      case s.Patterns.PATTERN101:
        return n * o % 2 + n * o % 3 === 0;
      case s.Patterns.PATTERN110:
        return (n * o % 2 + n * o % 3) % 2 === 0;
      case s.Patterns.PATTERN111:
        return (n * o % 3 + (n + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + i);
    }
  }
  s.applyMask = function(n, o) {
    const l = o.size;
    for (let h = 0; h < l; h++)
      for (let u = 0; u < l; u++)
        o.isReserved(u, h) || o.xor(u, h, r(n, u, h));
  }, s.getBestMask = function(n, o) {
    const l = Object.keys(s.Patterns).length;
    let h = 0, u = 1 / 0;
    for (let f = 0; f < l; f++) {
      o(f), s.applyMask(f, n);
      const g = s.getPenaltyN1(n) + s.getPenaltyN2(n) + s.getPenaltyN3(n) + s.getPenaltyN4(n);
      s.applyMask(f, n), g < u && (u = g, h = f);
    }
    return h;
  };
})(jn);
var Qe = {};
const se = Ye, $e = [
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
], qe = [
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
Qe.getTotalCodewordsCount = function(e, r) {
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
(function(s) {
  const e = Ze;
  s.mul = function(i, n) {
    const o = new Uint8Array(i.length + n.length - 1);
    for (let l = 0; l < i.length; l++)
      for (let h = 0; h < n.length; h++)
        o[l + h] ^= e.mul(i[l], n[h]);
    return o;
  }, s.mod = function(i, n) {
    let o = new Uint8Array(i);
    for (; o.length - n.length >= 0; ) {
      const l = o[0];
      for (let u = 0; u < n.length; u++)
        o[u] ^= e.mul(n[u], l);
      let h = 0;
      for (; h < o.length && o[h] === 0; ) h++;
      o = o.slice(h);
    }
    return o;
  }, s.generateECPolynomial = function(i) {
    let n = new Uint8Array([1]);
    for (let o = 0; o < i; o++)
      n = s.mul(n, new Uint8Array([1, e.exp(o)]));
    return n;
  };
})(Hn);
const zn = Hn;
function xt(s) {
  this.genPoly = void 0, this.degree = s, this.degree && this.initialize(this.degree);
}
xt.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = zn.generateECPolynomial(this.degree);
};
xt.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(e.length + this.degree);
  r.set(e);
  const i = zn.mod(r, this.genPoly), n = this.degree - i.length;
  if (n > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(i, n), o;
  }
  return i;
};
var Gs = xt, $n = {}, oe = {}, Dt = {};
Dt.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var te = {};
const qn = "[0-9]+", Vs = "[A-Z $%*+\\-./:]+";
let Ie = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Ie = Ie.replace(/u/g, "\\u");
const Ws = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ie + `)(?:.|[\r
]))+`;
te.KANJI = new RegExp(Ie, "g");
te.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
te.BYTE = new RegExp(Ws, "g");
te.NUMERIC = new RegExp(qn, "g");
te.ALPHANUMERIC = new RegExp(Vs, "g");
const Ks = new RegExp("^" + Ie + "$"), Js = new RegExp("^" + qn + "$"), Xs = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
te.testKanji = function(e) {
  return Ks.test(e);
};
te.testNumeric = function(e) {
  return Js.test(e);
};
te.testAlphanumeric = function(e) {
  return Xs.test(e);
};
(function(s) {
  const e = Dt, r = te;
  s.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, s.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, s.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, s.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, s.MIXED = {
    bit: -1
  }, s.getCharCountIndicator = function(o, l) {
    if (!o.ccBits) throw new Error("Invalid mode: " + o);
    if (!e.isValid(l))
      throw new Error("Invalid version: " + l);
    return l >= 1 && l < 10 ? o.ccBits[0] : l < 27 ? o.ccBits[1] : o.ccBits[2];
  }, s.getBestModeForData = function(o) {
    return r.testNumeric(o) ? s.NUMERIC : r.testAlphanumeric(o) ? s.ALPHANUMERIC : r.testKanji(o) ? s.KANJI : s.BYTE;
  }, s.toString = function(o) {
    if (o && o.id) return o.id;
    throw new Error("Invalid mode");
  }, s.isValid = function(o) {
    return o && o.bit && o.ccBits;
  };
  function i(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "numeric":
        return s.NUMERIC;
      case "alphanumeric":
        return s.ALPHANUMERIC;
      case "kanji":
        return s.KANJI;
      case "byte":
        return s.BYTE;
      default:
        throw new Error("Unknown mode: " + n);
    }
  }
  s.from = function(o, l) {
    if (s.isValid(o))
      return o;
    try {
      return i(o);
    } catch {
      return l;
    }
  };
})(oe);
(function(s) {
  const e = Q, r = Qe, i = Ye, n = oe, o = Dt, l = 7973, h = e.getBCHDigit(l);
  function u(m, b, C) {
    for (let _ = 1; _ <= 40; _++)
      if (b <= s.getCapacity(_, C, m))
        return _;
  }
  function f(m, b) {
    return n.getCharCountIndicator(m, b) + 4;
  }
  function g(m, b) {
    let C = 0;
    return m.forEach(function(_) {
      const k = f(_.mode, b);
      C += k + _.getBitsLength();
    }), C;
  }
  function y(m, b) {
    for (let C = 1; C <= 40; C++)
      if (g(m, C) <= s.getCapacity(C, b, n.MIXED))
        return C;
  }
  s.from = function(b, C) {
    return o.isValid(b) ? parseInt(b, 10) : C;
  }, s.getCapacity = function(b, C, _) {
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
  }, s.getBestVersionForData = function(b, C) {
    let _;
    const k = i.from(C, i.M);
    if (Array.isArray(b)) {
      if (b.length > 1)
        return y(b, k);
      if (b.length === 0)
        return 1;
      _ = b[0];
    } else
      _ = b;
    return u(_.mode, _.getLength(), k);
  }, s.getEncodedBits = function(b) {
    if (!o.isValid(b) || b < 7)
      throw new Error("Invalid QR Code version");
    let C = b << 12;
    for (; e.getBCHDigit(C) - h >= 0; )
      C ^= l << e.getBCHDigit(C) - h;
    return b << 12 | C;
  };
})($n);
var Gn = {};
const Tt = Q, Vn = 1335, Ys = 21522, Cn = Tt.getBCHDigit(Vn);
Gn.getEncodedBits = function(e, r) {
  const i = e.bit << 3 | r;
  let n = i << 10;
  for (; Tt.getBCHDigit(n) - Cn >= 0; )
    n ^= Vn << Tt.getBCHDigit(n) - Cn;
  return (i << 10 | n) ^ Ys;
};
var Wn = {};
const Qs = oe;
function ge(s) {
  this.mode = Qs.NUMERIC, this.data = s.toString();
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
  let r, i, n;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    i = this.data.substr(r, 3), n = parseInt(i, 10), e.put(n, 10);
  const o = this.data.length - r;
  o > 0 && (i = this.data.substr(r), n = parseInt(i, 10), e.put(n, o * 3 + 1));
};
var Zs = ge;
const eo = oe, mt = [
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
function me(s) {
  this.mode = eo.ALPHANUMERIC, this.data = s;
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
    let i = mt.indexOf(this.data[r]) * 45;
    i += mt.indexOf(this.data[r + 1]), e.put(i, 11);
  }
  this.data.length % 2 && e.put(mt.indexOf(this.data[r]), 6);
};
var to = me;
const no = oe;
function ye(s) {
  this.mode = no.BYTE, typeof s == "string" ? this.data = new TextEncoder().encode(s) : this.data = new Uint8Array(s);
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
ye.prototype.write = function(s) {
  for (let e = 0, r = this.data.length; e < r; e++)
    s.put(this.data[e], 8);
};
var ro = ye;
const so = oe, oo = Q;
function be(s) {
  this.mode = so.KANJI, this.data = s;
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
be.prototype.write = function(s) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let r = oo.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), s.put(r, 13);
  }
};
var ao = be, Kn = { exports: {} };
(function(s) {
  var e = {
    single_source_shortest_paths: function(r, i, n) {
      var o = {}, l = {};
      l[i] = 0;
      var h = e.PriorityQueue.make();
      h.push(i, 0);
      for (var u, f, g, y, m, b, C, _, k; !h.empty(); ) {
        u = h.pop(), f = u.value, y = u.cost, m = r[f] || {};
        for (g in m)
          m.hasOwnProperty(g) && (b = m[g], C = y + b, _ = l[g], k = typeof l[g] > "u", (k || _ > C) && (l[g] = C, h.push(g, C), o[g] = f));
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
      var o = e.single_source_shortest_paths(r, i, n);
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
        var i = e.PriorityQueue, n = {}, o;
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
  s.exports = e;
})(Kn);
var co = Kn.exports;
(function(s) {
  const e = oe, r = Zs, i = to, n = ro, o = ao, l = te, h = Q, u = co;
  function f(v) {
    return unescape(encodeURIComponent(v)).length;
  }
  function g(v, S, R) {
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
    const S = g(l.NUMERIC, e.NUMERIC, v), R = g(l.ALPHANUMERIC, e.ALPHANUMERIC, v);
    let I, P;
    return h.isKanjiModeEnabled() ? (I = g(l.BYTE, e.BYTE, v), P = g(l.KANJI, e.KANJI, v)) : (I = g(l.BYTE_KANJI, e.BYTE, v), P = []), S.concat(R, I, P).sort(function(O, B) {
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
        return i.getBitsLength(v);
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
        return new i(v);
      case e.KANJI:
        return new o(v);
      case e.BYTE:
        return new n(v);
    }
  }
  s.fromArray = function(S) {
    return S.reduce(function(R, I) {
      return typeof I == "string" ? R.push(k(I, null)) : I.data && R.push(k(I.data, I.mode)), R;
    }, []);
  }, s.fromString = function(S, R) {
    const I = y(S, h.isKanjiModeEnabled()), P = C(I), E = _(P, R), O = u.find_path(E.map, "start", "end"), B = [];
    for (let U = 1; U < O.length - 1; U++)
      B.push(E.table[O[U]].node);
    return s.fromArray(b(B));
  }, s.rawSplit = function(S) {
    return s.fromArray(
      y(S, h.isKanjiModeEnabled())
    );
  };
})(Wn);
const et = Q, yt = Ye, lo = zs, uo = $s, ho = Fn, fo = Un, At = jn, Rt = Qe, po = Gs, Je = $n, go = Gn, mo = oe, bt = Wn;
function yo(s, e) {
  const r = s.size, i = fo.getPositions(e);
  for (let n = 0; n < i.length; n++) {
    const o = i[n][0], l = i[n][1];
    for (let h = -1; h <= 7; h++)
      if (!(o + h <= -1 || r <= o + h))
        for (let u = -1; u <= 7; u++)
          l + u <= -1 || r <= l + u || (h >= 0 && h <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && u >= 2 && u <= 4 ? s.set(o + h, l + u, !0, !0) : s.set(o + h, l + u, !1, !0));
  }
}
function bo(s) {
  const e = s.size;
  for (let r = 8; r < e - 8; r++) {
    const i = r % 2 === 0;
    s.set(r, 6, i, !0), s.set(6, r, i, !0);
  }
}
function vo(s, e) {
  const r = ho.getPositions(e);
  for (let i = 0; i < r.length; i++) {
    const n = r[i][0], o = r[i][1];
    for (let l = -2; l <= 2; l++)
      for (let h = -2; h <= 2; h++)
        l === -2 || l === 2 || h === -2 || h === 2 || l === 0 && h === 0 ? s.set(n + l, o + h, !0, !0) : s.set(n + l, o + h, !1, !0);
  }
}
function wo(s, e) {
  const r = s.size, i = Je.getEncodedBits(e);
  let n, o, l;
  for (let h = 0; h < 18; h++)
    n = Math.floor(h / 3), o = h % 3 + r - 8 - 3, l = (i >> h & 1) === 1, s.set(n, o, l, !0), s.set(o, n, l, !0);
}
function vt(s, e, r) {
  const i = s.size, n = go.getEncodedBits(e, r);
  let o, l;
  for (o = 0; o < 15; o++)
    l = (n >> o & 1) === 1, o < 6 ? s.set(o, 8, l, !0) : o < 8 ? s.set(o + 1, 8, l, !0) : s.set(i - 15 + o, 8, l, !0), o < 8 ? s.set(8, i - o - 1, l, !0) : o < 9 ? s.set(8, 15 - o - 1 + 1, l, !0) : s.set(8, 15 - o - 1, l, !0);
  s.set(i - 8, 8, 1, !0);
}
function ko(s, e) {
  const r = s.size;
  let i = -1, n = r - 1, o = 7, l = 0;
  for (let h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!s.isReserved(n, h - u)) {
          let f = !1;
          l < e.length && (f = (e[l] >>> o & 1) === 1), s.set(n, h - u, f), o--, o === -1 && (l++, o = 7);
        }
      if (n += i, n < 0 || r <= n) {
        n -= i, i = -i;
        break;
      }
    }
}
function _o(s, e, r) {
  const i = new lo();
  r.forEach(function(u) {
    i.put(u.mode.bit, 4), i.put(u.getLength(), mo.getCharCountIndicator(u.mode, s)), u.write(i);
  });
  const n = et.getSymbolTotalCodewords(s), o = Rt.getTotalCodewordsCount(s, e), l = (n - o) * 8;
  for (i.getLengthInBits() + 4 <= l && i.put(0, 4); i.getLengthInBits() % 8 !== 0; )
    i.putBit(0);
  const h = (l - i.getLengthInBits()) / 8;
  for (let u = 0; u < h; u++)
    i.put(u % 2 ? 17 : 236, 8);
  return Co(i, s, e);
}
function Co(s, e, r) {
  const i = et.getSymbolTotalCodewords(e), n = Rt.getTotalCodewordsCount(e, r), o = i - n, l = Rt.getBlocksCount(e, r), h = i % l, u = l - h, f = Math.floor(i / l), g = Math.floor(o / l), y = g + 1, m = f - g, b = new po(m);
  let C = 0;
  const _ = new Array(l), k = new Array(l);
  let v = 0;
  const S = new Uint8Array(s.buffer);
  for (let O = 0; O < l; O++) {
    const B = O < u ? g : y;
    _[O] = S.slice(C, C + B), k[O] = b.encode(_[O]), C += B, v = Math.max(v, B);
  }
  const R = new Uint8Array(i);
  let I = 0, P, E;
  for (P = 0; P < v; P++)
    for (E = 0; E < l; E++)
      P < _[E].length && (R[I++] = _[E][P]);
  for (P = 0; P < m; P++)
    for (E = 0; E < l; E++)
      R[I++] = k[E][P];
  return R;
}
function So(s, e, r, i) {
  let n;
  if (Array.isArray(s))
    n = bt.fromArray(s);
  else if (typeof s == "string") {
    let f = e;
    if (!f) {
      const g = bt.rawSplit(s);
      f = Je.getBestVersionForData(g, r);
    }
    n = bt.fromString(s, f || 40);
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
  const l = _o(e, r, n), h = et.getSymbolSize(e), u = new uo(h);
  return yo(u, e), bo(u), vo(u, e), vt(u, r, 0), e >= 7 && wo(u, e), ko(u, l), isNaN(i) && (i = At.getBestMask(
    u,
    vt.bind(null, u, r)
  )), At.applyMask(i, u), vt(u, r, i), {
    modules: u,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: i,
    segments: n
  };
}
xn.create = function(e, r) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let i = yt.M, n, o;
  return typeof r < "u" && (i = yt.from(r.errorCorrectionLevel, yt.M), n = Je.from(r.version), o = At.from(r.maskPattern), r.toSJISFunc && et.setToSJISFunction(r.toSJISFunc)), So(e, n, i, o);
};
var Jn = {}, Ft = {};
(function(s) {
  function e(r) {
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
  s.getOptions = function(i) {
    i || (i = {}), i.color || (i.color = {});
    const n = typeof i.margin > "u" || i.margin === null || i.margin < 0 ? 4 : i.margin, o = i.width && i.width >= 21 ? i.width : void 0, l = i.scale || 4;
    return {
      width: o,
      scale: o ? 4 : l,
      margin: n,
      color: {
        dark: e(i.color.dark || "#000000ff"),
        light: e(i.color.light || "#ffffffff")
      },
      type: i.type,
      rendererOpts: i.rendererOpts || {}
    };
  }, s.getScale = function(i, n) {
    return n.width && n.width >= i + n.margin * 2 ? n.width / (i + n.margin * 2) : n.scale;
  }, s.getImageWidth = function(i, n) {
    const o = s.getScale(i, n);
    return Math.floor((i + n.margin * 2) * o);
  }, s.qrToImageData = function(i, n, o) {
    const l = n.modules.size, h = n.modules.data, u = s.getScale(l, o), f = Math.floor((l + o.margin * 2) * u), g = o.margin * u, y = [o.color.light, o.color.dark];
    for (let m = 0; m < f; m++)
      for (let b = 0; b < f; b++) {
        let C = (m * f + b) * 4, _ = o.color.light;
        if (m >= g && b >= g && m < f - g && b < f - g) {
          const k = Math.floor((m - g) / u), v = Math.floor((b - g) / u);
          _ = y[h[k * l + v] ? 1 : 0];
        }
        i[C++] = _.r, i[C++] = _.g, i[C++] = _.b, i[C] = _.a;
      }
  };
})(Ft);
(function(s) {
  const e = Ft;
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
  s.render = function(o, l, h) {
    let u = h, f = l;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), l || (f = i()), u = e.getOptions(u);
    const g = e.getImageWidth(o.modules.size, u), y = f.getContext("2d"), m = y.createImageData(g, g);
    return e.qrToImageData(m.data, o, u), r(y, f, g), y.putImageData(m, 0, 0), f;
  }, s.renderToDataURL = function(o, l, h) {
    let u = h;
    typeof u > "u" && (!l || !l.getContext) && (u = l, l = void 0), u || (u = {});
    const f = s.render(o, l, u), g = u.type || "image/png", y = u.rendererOpts || {};
    return f.toDataURL(g, y.quality);
  };
})(Jn);
var Xn = {};
const To = Ft;
function Sn(s, e) {
  const r = s.a / 255, i = e + '="' + s.hex + '"';
  return r < 1 ? i + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : i;
}
function wt(s, e, r) {
  let i = s + e;
  return typeof r < "u" && (i += " " + r), i;
}
function Ao(s, e, r) {
  let i = "", n = 0, o = !1, l = 0;
  for (let h = 0; h < s.length; h++) {
    const u = Math.floor(h % e), f = Math.floor(h / e);
    !u && !o && (o = !0), s[h] ? (l++, h > 0 && u > 0 && s[h - 1] || (i += o ? wt("M", u + r, 0.5 + f + r) : wt("m", n, 0), n = 0, o = !1), u + 1 < e && s[h + 1] || (i += wt("h", l), l = 0)) : n++;
  }
  return i;
}
Xn.render = function(e, r, i) {
  const n = To.getOptions(r), o = e.modules.size, l = e.modules.data, h = o + n.margin * 2, u = n.color.light.a ? "<path " + Sn(n.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "", f = "<path " + Sn(n.color.dark, "stroke") + ' d="' + Ao(l, o, n.margin) + '"/>', g = 'viewBox="0 0 ' + h + " " + h + '"', m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + g + ' shape-rendering="crispEdges">' + u + f + `</svg>
`;
  return typeof i == "function" && i(null, m), m;
};
const Ro = js, It = xn, Yn = Jn, Io = Xn;
function Ut(s, e, r, i, n) {
  const o = [].slice.call(arguments, 1), l = o.length, h = typeof o[l - 1] == "function";
  if (!h && !Ro())
    throw new Error("Callback required as last argument");
  if (h) {
    if (l < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (n = r, r = e, e = i = void 0) : l === 3 && (e.getContext && typeof n > "u" ? (n = i, i = void 0) : (n = i, i = r, r = e, e = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return l === 1 ? (r = e, e = i = void 0) : l === 2 && !e.getContext && (i = r, r = e, e = void 0), new Promise(function(u, f) {
      try {
        const g = It.create(r, i);
        u(s(g, e, i));
      } catch (g) {
        f(g);
      }
    });
  }
  try {
    const u = It.create(r, i);
    n(null, s(u, e, i));
  } catch (u) {
    n(u);
  }
}
Ee.create = It.create;
Ee.toCanvas = Ut.bind(null, Yn.render);
Ee.toDataURL = Ut.bind(null, Yn.renderToDataURL);
Ee.toString = Ut.bind(null, function(s, e, r) {
  return Io.render(s, r);
});
const Et = 300, Eo = 1;
function Qn() {
  return (game.settings.get(A, "apiUrl") || "").replace(/\/$/, "");
}
function Lo({ nonce: s, channelId: e, foundryUserName: r }) {
  return JSON.stringify({
    v: Eo,
    agentUrl: Qn(),
    channelId: e || null,
    nonce: s,
    foundryUserName: r || null
  });
}
async function Zn(s, e, r) {
  const i = Qn(), n = game.settings.get(A, "apiKey"), o = game.settings.get(A, "channelId");
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
  return s.pendingPairings.set(l, { foundryUserId: e, ts: Date.now() }), setTimeout(() => s.pendingPairings.delete(l), Et * 1e3), { nonce: l, payload: Lo({ nonce: l, channelId: o, foundryUserName: r }) };
}
async function er(s, e, r) {
  let i;
  try {
    ({ payload: i } = await Zn(s, e, r));
  } catch (n) {
    ui.notifications.error(`Agent pairing: ${n.message}`);
    return;
  }
  await tr(i, r);
}
async function tr(s, e) {
  let r;
  try {
    r = await Ee.toDataURL(s, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const i = Math.round(Et / 60), n = e || "this player", o = btoa(s);
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
class Po extends FormApplication {
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
      const n = Ms(i.agentLink);
      r += `<tr><td style="padding: 5px 0;"><strong>${i.name}</strong></td>`, i.hasKey ? (r += '<td style="color: #00ff00;">✔ Linked</td>', r += `<td><small><code title="${i.agentLink || ""}">${n || "Pending..."}</code></small></td>`) : (r += '<td style="color: #ffaa00;" title="No remote key; the embedded Agent still works.">◐ Local only</td>', r += "<td><small>-</small></td>"), r += `<td><select class="character-select" data-userid="${i.id}" style="width: 100%;">
            <option value="">- None -</option>`;
      for (let o of e.characters) {
        const l = o.id === i.characterId ? "selected" : "";
        r += `<option value="${o.id}" ${l}>${o.name}</option>`;
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
      if (e.find(".character-select").each((o, l) => {
        var g;
        const h = l.dataset.userid, u = l.value, f = game.users.get(h);
        if (f) {
          const y = u === "" || u === "null" ? null : u;
          (((g = f.character) == null ? void 0 : g.id) || null) !== y && (n.push({ _id: f.id, character: y }), i++);
        }
      }), n.length > 0) {
        await User.updateDocuments(n), ui.notifications.info(`Cyberpunk Bridge: Updated ${i} player assignments!`);
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
      const i = r.currentTarget.dataset.userid, n = r.currentTarget.dataset.username;
      await er(window.cyberpunkBridge, i, n);
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
const Xe = "pairing-request", ve = "pairing-nonce";
function Mo(s) {
  s.hookIds.pairingUpdateUser || (s.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (e, r) => {
    if (game.user.isGM && foundry.utils.getProperty(r, `flags.${A}.${Xe}`) && await No(s, e), e.id === game.user.id) {
      const i = foundry.utils.getProperty(r, `flags.${A}.${ve}`);
      i && i.payload && (await tr(i.payload, game.user.name), await game.user.unsetFlag(A, ve), await game.user.unsetFlag(A, Xe));
    }
  }));
}
async function No(s, e) {
  try {
    const { payload: r } = await Zn(s, e.id, e.name);
    await e.setFlag(A, ve, { payload: r, ts: Date.now() });
  } catch (r) {
    console.warn(`[Bridge] Failed to mint pairing for ${e.name}: ${r.message}`), await e.setFlag(A, ve, { error: r.message, ts: Date.now() });
  }
}
async function Oo() {
  if (game.user.isGM) {
    await er(window.cyberpunkBridge, game.user.id, game.user.name);
    return;
  }
  await game.user.setFlag(A, ve, null), await game.user.setFlag(A, Xe, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(A, ve) || (await game.user.unsetFlag(A, Xe), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class Bo extends FormApplication {
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
      r.preventDefault(), await Oo(), this.close();
    });
  }
}
const xo = 1, Do = /^[A-Z0-9]{4}-?[A-Z0-9]{4}$/i;
function Tn(s) {
  const e = (s || "").trim();
  if (!e) return null;
  for (const r of [() => atob(e), () => e])
    try {
      return JSON.parse(r());
    } catch {
    }
  return null;
}
function An(s) {
  return Do.test((s || "").trim());
}
async function Fo(s) {
  const e = s.trim().toUpperCase().replace(/^([A-Z0-9]{4})([A-Z0-9]{4})$/, "$1-$2"), r = (game.settings.get(A, "apiUrl") || pe).replace(/\/$/, "");
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
class Uo extends FormApplication {
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
    const i = e.find("#cpr-setup-preview"), n = e.find("#cpr-setup-code").val().trim();
    if (An(n)) {
      const h = (game.settings.get(A, "apiUrl") || pe).replace(/\/$/, "");
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
    if (An(e))
      try {
        r = await Fo(e);
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
    if (r.v && r.v !== xo) {
      ui.notifications.error("Agent setup: this code was made by a newer Agent. Update the Bridge module.");
      return;
    }
    const i = { apiUrl: String(r.agentUrl).replace(/\/$/, "") };
    r.channelId && (i.channelId = String(r.channelId)), r.apiKey && (i.apiKey = String(r.apiKey)), r.reverbKey && (i.reverbKey = String(r.reverbKey)), i.reverbPort = r.reverbPort ? String(r.reverbPort) : "0";
    try {
      for (const [o, l] of Object.entries(i))
        await game.settings.set(A, o, l);
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
        const o = r.element.find(`[name="${A}.${i}"]`);
        o.length && o.val(n);
      }
  }
}
function jo(s) {
  game.settings.registerMenu(A, "quickSetup", {
    name: "Quick Setup",
    label: "Paste Agent Config",
    hint: "Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.",
    icon: "fas fa-bolt",
    type: Uo,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: Po,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(A, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: Bo,
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
      game.user.isGM && s.reconnect(), s.syncPlayerLink();
    }
  }), game.settings.register(A, "reverbHost", {
    name: "WebSocket Host (override)",
    hint: 'Leave blank. Blank means "use the same host as the Agent URL". Fill this in only if your Agent serves its WebSocket from a different hostname. Setup codes never carry a host, so this is one field pasting a code will not correct for you - clear it by hand if you set it while troubleshooting.',
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => s.reconnect()
  }), game.settings.register(A, "reverbPort", {
    name: "WebSocket Port (override)",
    hint: 'Leave at 0. Zero means "use the same port as the Agent URL", which is right whenever the Agent serves its WebSocket on its own address - the normal setup. Set a port only if your Agent publishes Reverb separately. Pasting a setup code from a single-origin Agent resets this to 0.',
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => s.reconnect()
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
    onChange: () => s.reconnect()
  }), game.settings.register(A, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: En,
    onChange: () => s.reconnect()
  }), game.settings.register(A, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (e) => {
      await game.user.setFlag(A, "hasApiKey", !!e), game.user.isGM && s.reconnect(), s.syncPlayerLink();
    }
  }), game.settings.register(A, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && s.reconnect();
    }
  }), game.settings.register(A, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function Ho(s, e, { type: r, requestId: i, actorId: n }) {
  const o = game.actors.get(n);
  if (!o) {
    console.warn(`⚠️ Actor ID ${n} not found in this world.`);
    return;
  }
  await o.update(e.changes), ui.notifications.info(`💾 Sync: ${o.name} updated.`), await s.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function nr(s, e, { requestId: r }) {
  let i = e.actorId, n = game.user;
  const o = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  if (o && (n = game.users.find((l) => l.getFlag(A, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user), !i) {
    const l = n.character;
    l && (i = l.id);
  }
  if (i !== null) {
    const l = game.actors.get(i);
    if (l) {
      const h = l.toObject(), u = (g) => (g || []).map((y) => {
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
        items: (h.items || []).map((g) => {
          const y = {
            _id: g._id,
            name: g.name,
            type: g.type,
            img: g.img,
            system: g.system,
            effects: u(g.effects)
          };
          if (g.type === "cyberware") {
            const m = l.items.get(g._id);
            m && (y.system = {
              ...g.system,
              isInstalled: !!m.system.isInstalled,
              isFoundational: !!m.system.isFoundational
            });
          }
          return y;
        }),
        effects: u(h.effects),
        flags: h.flags && h.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": h.flags["cyberpunk-red-core"] } : {}
      };
      await s.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: f, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
      return;
    }
  }
  await s.sendResponse({ type: "ACTOR_DATA", actorId: i, actor: !1, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function zo(s, e, { requestId: r, actorId: i }) {
  let n = game.user;
  const o = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  o && (n = game.users.find((u) => u.getFlag(A, "agent-link") === o) || game.users.get(o) || (o === game.user.id ? game.user : null)), n || (n = game.user);
  function l(u) {
    var g;
    return ((g = canvas.tokens.placeables.filter((y) => {
      var m;
      return ((m = y.actor) == null ? void 0 : m.id) === u;
    })[0]) == null ? void 0 : g.id) ?? null;
  }
  let h = [];
  n.isGM ? h = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var g, y;
    const f = (g = Object.entries(u.ownership || {}).find(([m, b]) => {
      const C = game.users.get(m);
      return C && !C.isGM && b >= 3;
    })) == null ? void 0 : g[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: l(u.id),
      agentLink: (f ? (y = game.users.get(f)) == null ? void 0 : y.getFlag(A, "agent-link") : null) || f || n.getFlag(A, "agent-link") || n.id
    };
  }) : (h = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(n, "OWNER")).map((u) => {
    var g, y;
    const f = (g = Object.entries(u.actor.ownership || {}).find(([m, b]) => {
      const C = game.users.get(m);
      return C && !C.isGM && b >= 3;
    })) == null ? void 0 : g[0];
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
  })), !n.isGM && n.character && (h = h.filter((u) => u.actorId === n.character.id))), await s.sendResponse({ type: "ACTORS_DATA", actorId: i, actors: h, requestId: r, isGM: n.isGM, agentLink: n.getFlag(A, "agent-link") || n.id });
}
async function $o(s, e, { type: r, requestId: i, actorId: n }) {
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
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await s.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function qo(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const o = n.items.get(e.itemId);
    if (o) {
      const l = `items.${e.itemId}.system.equipped`;
      await o.update({ "system.equipped": e.state }), await s.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [l]: e.state }, success: !0, requestId: r });
    }
  }
}
async function Go(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
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
      l && (u[`items.${l.id}.system.amount`] = l.system.amount), n.items.filter((g) => g.type === "ammo").forEach((g) => {
        u[`items.${g.id}.system.amount`] = g.system.amount;
      }), await s.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: u, success: !0, requestId: r });
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
async function Vo(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const o = n.items.get(e.cyberdeckId), l = n.items.get(e.programId);
  if (!o || !l) return;
  const h = o.system.installedItems.usedSlots || 0, u = o.system.installedItems.slots || 0, f = l.system.size || 1;
  if (h + f > u) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const g = o.system.installedItems.list || [];
  if (g.includes(e.programId)) return;
  const y = [...g, e.programId], m = h + f;
  await o.update({
    "system.installedItems.list": y,
    "system.installedItems.usedSlots": m
  }), await s.sendResponse({
    type: "SHEET_DELTA",
    actorId: i,
    delta: {
      [`items.${e.cyberdeckId}.system.installedItems.list`]: y,
      [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: m
    },
    success: !0,
    requestId: r
  });
}
async function Wo(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const o = n.items.get(e.cyberdeckId), l = n.items.get(e.programId);
  if (!o) return;
  const h = o.system.installedItems.list || [];
  if (!h.includes(e.programId)) return;
  const u = h.filter((b) => b !== e.programId), f = l && l.system.size || 1, g = o.system.installedItems.usedSlots || 0, y = Math.max(0, g - f);
  await o.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": y
  });
  const m = {
    [`items.${e.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: y
  };
  l && l.system.isRezzed && (await l.update({ "system.isRezzed": !1 }), m[`items.${e.programId}.system.isRezzed`] = !1), await s.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: m, success: !0, requestId: r });
}
async function Ko(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const o = n.items.get(e.programId);
    o && (await o.update({ "system.isRezzed": e.targetState }), await s.sendResponse({
      type: "SHEET_DELTA",
      actorId: i,
      delta: { [`items.${e.programId}.system.isRezzed`]: e.targetState },
      success: !0,
      requestId: r
    }));
  }
}
async function Jo(s, e, { requestId: r, actorId: i }) {
  var o, l;
  const n = game.actors.get(i);
  if (n) {
    const h = document.createElement("a");
    h.dataset.rollType = e.rollType, h.dataset.cyberdeckId = e.cyberdeckId, h.dataset.rollTitle = e.programName, h.dataset.interfaceAbility = e.programName, h.dataset.itemId = e.cyberdeckId, h.dataset.programId = e.programId, h.dataset.executionType = e.executionType;
    const u = async () => {
      await n.sheet._onRoll({
        type: "click",
        currentTarget: h
      });
    }, f = await s.rollAndCapture(i, u, e.rollMode);
    f.success && await s.sendResponse({
      type: "ROLL_RESULT",
      rollMode: f.rollMode,
      requestId: r,
      actorId: i,
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
function Xo(s) {
  const e = String(s ?? "").replace(/<[^>]*>/g, "").trim();
  return /^\d+$/.test(e) ? Number(e) : /^vs\b/i.test(e) ? "VS" : Lt;
}
async function Yo(s) {
  var r;
  const e = (r = s == null ? void 0 : s.system) == null ? void 0 : r.dvTable;
  if (!e) return null;
  try {
    const i = game.packs.get(game.settings.get(game.system.id, "dvRollTableCompendium")), n = i == null ? void 0 : i.index.find((h) => h.name === e);
    if (!n) return null;
    const o = await i.getDocument(n._id), l = [];
    for (const h of o.results) {
      if (h.type !== "text") continue;
      const [u, f] = h.range;
      l.push({ min: u, max: f, dv: Xo(h.text ?? h.description), label: `${u}-${f}m` });
    }
    return l.length ? l.sort((h, u) => h.min - u.min) : null;
  } catch (i) {
    return console.warn("[Bridge] Could not read Foundry DV table, using built-in", i), null;
  }
}
async function rr(s, e) {
  const r = gs(s), i = await Yo(s);
  if (i) {
    const o = i.findIndex((h) => e >= h.min && e <= h.max);
    return { dv: o === -1 ? Lt : i[o].dv, table: i, activeIndex: o, category: r, source: "foundry" };
  }
  const n = ms(r, e);
  return { dv: n === 99 ? Lt : n, table: null, activeIndex: -1, category: r, source: "builtin" };
}
async function Qo(s, e, { requestId: r, actorId: i }) {
  var l, h;
  const n = game.actors.get(i), o = n.items.get(e.weaponId);
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
    }, f = await s.rollAndCapture(i, u, e.rollMode);
    f.success && await s.sendResponse({
      type: "ROLL_RESULT",
      rollMode: f.rollMode,
      requestId: r,
      actorId: i,
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
async function Zo(s, e, { requestId: r, actorId: i }) {
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
    }, u = await s.rollAndCapture(i, h, e.rollMode);
    if (u.success) {
      const f = n.system.derivedStats.deathsave || {};
      await s.sendResponse({
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
      }), await s.sendResponse({
        type: "SHEET_DELTA",
        actorId: i,
        delta: { "system.derivedStats.deathsave": f },
        tab: "stats",
        success: !0
      });
    }
  }
}
async function ea(s, e, { requestId: r, actorId: i }) {
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
  }, l = await s.rollAndCapture(i, o, e.rollMode);
  l.success && await s.sendResponse({
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
async function ta(s, e, { requestId: r, actorId: i }) {
  var o, l;
  const n = game.actors.get(i);
  if (n) {
    const h = async () => {
      await n.rollInitiative();
    }, u = await s.rollAndCapture(i, h, e.rollMode);
    u.success && await s.sendResponse({
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
async function na(s, e, { requestId: r, actorId: i }) {
  var o, l;
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
      const f = async () => {
        await n.sheet._onRoll(u);
      }, g = await s.rollAndCapture(i, f, e.rollMode);
      g.success && await s.sendResponse({
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
          resultTotal: (o = g.rawRoll) == null ? void 0 : o.resultTotal,
          rollTitle: (l = g.rawRoll) == null ? void 0 : l.rollTitle
        },
        success: !0
      });
    }
  }
}
async function ra(s, e, { requestId: r, actorId: i }) {
  var o, l;
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
      }, f = await s.rollAndCapture(i, u, e.rollMode);
      f.success && await s.sendResponse({
        type: "ROLL_RESULT",
        rollMode: f.rollMode,
        requestId: r,
        actorId: i,
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
async function ia(s, e, { requestId: r, actorId: i }) {
  var o, l;
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
    }, u = await s.rollAndCapture(i, h, e.rollMode);
    u.success && await s.sendResponse({
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
        resultTotal: (o = u.rawRoll) == null ? void 0 : o.resultTotal,
        rollTitle: (l = u.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function sa(s, e, { requestId: r, actorId: i }) {
  r && s.activeRequests.set(r, { actorId: i, timestamp: Date.now() });
  const n = new Roll(e.formula);
  await n.evaluate(), await n.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(i) }),
    flavor: e.flavor,
    rollMode: e.rollMode || game.settings.get("core", "rollMode")
  }), await s.sendResponse({
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
async function oa(s, e, { requestId: r, actorId: i, tokenId: n }) {
  var l, h, u, f, g, y;
  const o = game.actors.get(i);
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
        I = (await rr(B, O)).dv;
      }
    }
    const P = await s.rollAndCapture(i, R, e.rollMode);
    if (P.success) {
      let E = null;
      typeof I == "number" ? E = P.total >= I ? "Hit" : "Miss" : I === "Out of Range" && (E = "Miss");
      const O = ((f = (u = (h = o.items.get(m)) == null ? void 0 : h.system) == null ? void 0 : u.magazine) == null ? void 0 : f.value) ?? null;
      await s.sendResponse({
        type: "ROLL_RESULT",
        rollMode: P.rollMode,
        requestId: r,
        actorId: i,
        total: P.total,
        isCriticalSuccess: P.isCriticalSuccess,
        isCriticalFailure: P.isCriticalFailure,
        label: b + " Attack",
        rawRoll: {
          total: P.total,
          isCriticalSuccess: P.isCriticalSuccess,
          isCriticalFailure: P.isCriticalFailure,
          label: P.label,
          resultTotal: (g = P.rawRoll) == null ? void 0 : g.resultTotal,
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
async function aa(s, e, { type: r, requestId: i, actorId: n, tokenId: o }) {
  var h;
  if (game.paused) return;
  if (!((h = canvas.scene) != null && h.active)) {
    await s.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "Scene is not active", requestId: i });
    return;
  }
  const l = canvas.tokens.get(o);
  if (l) {
    let u = {};
    e.direction === "up" ? u.y = l.document.y - canvas.grid.size : e.direction === "down" ? u.y = l.document.y + canvas.grid.size : e.direction === "left" ? u.x = l.document.x - canvas.grid.size : e.direction === "right" && (u.x = l.document.x + canvas.grid.size);
    const f = l.center, g = {
      x: f.x + ((u.x ?? l.document.x) - l.document.x),
      y: f.y + ((u.y ?? l.document.y) - l.document.y)
    };
    if (CONFIG.Canvas.polygonBackends.move.testCollision(
      f,
      g,
      { type: "move", mode: "any" }
    )) {
      ui.notifications.warn(`${l.name}'s path is blocked by a wall.`), await s.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "Path blocked by a wall", requestId: i });
      return;
    }
    await l.document.update(u), await s.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !0, requestId: i });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${o} not found.`), await s.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: o, success: !1, message: "Token not found", requestId: i });
}
async function ca(s, e, { type: r, requestId: i, actorId: n }) {
  const o = canvas.tokens.get(e.targetTokenId);
  o && (o.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await s.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: e.targetTokenId, success: !0, requestId: i }));
}
async function la(s, e, { requestId: r, actorId: i, tokenId: n }) {
  var u;
  const o = canvas.tokens.placeables.filter((f) => {
    var g;
    return ((g = f.actor) == null ? void 0 : g.id) === i;
  });
  n === null && (n = ((u = o[0]) == null ? void 0 : u.id) ?? null);
  const l = canvas.tokens.get(n);
  let h = [];
  if (l) {
    const f = canvas.dimensions;
    h = canvas.tokens.placeables.filter((g) => {
      const y = !g.document.hidden, m = g.actor && (g.actor.type === "character" || g.actor.type === "mook"), b = g.x >= f.sceneX && g.x <= f.sceneX + f.sceneWidth && g.y >= f.sceneY && g.y <= f.sceneY + f.sceneHeight;
      return y && m && b && g.id !== l.id;
    }).map((g) => ({
      name: g.name,
      id: g.id,
      distanceM: Ot(l, g),
      type: g.actor.type
    })).sort((g, y) => g.distanceM - y.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${n} not found.`);
  await s.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: i, tokens: h, requestId: r });
}
async function ua(s, e, { requestId: r, actorId: i, tokenId: n }) {
  var f;
  const o = canvas.tokens.get(n), l = e.targetTokenId || ((f = Array.from(game.user.targets)[0]) == null ? void 0 : f.id), h = canvas.tokens.get(l), u = e.weaponId;
  if (o && h) {
    const g = Ot(o, h), y = o.actor.items.get(u);
    if (!y) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${o.actor.name}.`), await s.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
      return;
    }
    const { dv: m, table: b, activeIndex: C, category: _, source: k } = await rr(y, g), v = {
      targetName: h.name,
      distanceMeters: g,
      weaponCategory: _,
      dv: m,
      table: b,
      activeIndex: C,
      source: k
    };
    await s.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: v, requestId: r });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!o}, Target: ${!!h}`), await s.sendResponse({ type: "DV_INFO_DATA", actorId: i, result: null, requestId: r });
}
async function ha(s, e, { requestId: r, actorId: i }) {
  var P;
  const n = game.actors.get(i);
  if (!n) return;
  const o = e.weaponId, l = o ? n.items.get(o) : null;
  let h = "None", u = 0, f = "None", g = 0, y = 0;
  if (l) {
    h = l.system.weaponSkill;
    const E = n.items.find((O) => O.type === "skill" && O.name === h);
    u = E && Number(E.system.level) || 0, f = E && E.system.stat || "ref", g = Number((P = n.system.stats[f]) == null ? void 0 : P.value) || 0, y = Number(l.system.attackmod) || 0;
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
  const S = n.items.filter((E) => E.type === "criticalInjury"), R = bs(l ? h : null, l);
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
        const de = `${vs(ue.key)} ${he > 0 ? "+" : ""}${he}`, q = String(ue.key).replace(/^bonuses\./, "");
        if (!tt) return Y.push(`${de} (inactive)`);
        if (q === ue.key) return Y.push(`${de} (in stat)`);
        if (!R.includes(q)) return Y.push(`${de} (not this roll)`);
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
    baseBonus: g + u + y,
    breakdown: {
      statName: f,
      statValue: g,
      skillName: h,
      skillLevel: u,
      weaponAcc: y
    },
    totalPenalty: m,
    finalModifier: g + u + y + m,
    injuries: b
  };
  await s.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: i, result: I, requestId: r });
}
async function da(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    const o = `system.${e.label}`;
    let l;
    if (e.operation === "inc") {
      const h = o.split(".");
      let u = n;
      for (let y = 0; y < h.length; y++)
        u = y === 0 ? u[h[y]] : u == null ? void 0 : u[h[y]];
      const f = Number(u) || 0, g = Number(e.delta) || 0;
      l = f + g;
    } else
      l = typeof e.value == "string" ? e.value : Number(e.value) || 0;
    await n.update({ [o]: l }), await s.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [o]: l }, tab: "stats", success: !0, requestId: r });
  }
}
async function fa(s, e, { requestId: r, actorId: i, debug: n }) {
  if (i == null) {
    n && console.log("[Bridge] Actor ID Not set:");
    return;
  }
  let o = game.actors.get(i);
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
  o && await s.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { "system.wealth": o.system.wealth }, tab: "stats", success: !0, requestId: r });
}
function pa(s) {
  if (!game.user.isGM) return [game.user];
  const e = s ? game.actors.get(s) : null;
  return e ? game.users.filter((r) => !r.isGM && e.testUserPermission(r, "OWNER")) : [];
}
async function ga(s, e, { requestId: r, actorId: i, debug: n }) {
  const o = [], l = pa(i), h = (u) => l.length === 0 || l.some((f) => u.testUserPermission(f, "OBSERVER"));
  for (const u of game.journal) {
    const f = u.pages.filter((g) => g.type === "cpr-agent.datapool" && h(u) && h(g));
    for (const g of f) {
      const y = (g.system.entries || []).filter((b) => !b.hidden);
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
        pageId: g.id,
        pageName: g.name,
        entries: m
      });
    }
  }
  n && console.log("[Bridge] Found Data Pools:", o), await s.sendResponse({
    type: "NET_POOL_DATA",
    actorId: i,
    pools: o,
    requestId: r,
    success: !0
  });
}
async function ma(s, e, { debug: r }) {
  var u;
  if (!game.user.isGM) return;
  const i = e.foundryUserId, n = e.agentLink || e.agent_link, o = e.nonce;
  if (!i || !n || !o) {
    console.warn("[Bridge] PAIR_AGENT missing fields.", e);
    return;
  }
  const l = s.pendingPairings.get(o);
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
  s.pendingPairings.delete(o), await h.setFlag(A, "agent-link", n), await h.setFlag(A, "hasApiKey", !0), r && console.log(`[Bridge] PAIR_AGENT: linked ${h.name} -> ${n}`), ui.notifications.info(`Agent: ${h.name} linked successfully.`), (u = Object.values(ui.windows).find((f) => {
    var g;
    return ((g = f.options) == null ? void 0 : g.id) === "cpr-agent-assignment-menu";
  })) == null || u.render(!1), await s.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: i,
    agentLink: n,
    nonce: o,
    success: !0
  });
}
async function ir(s, e, r) {
  try {
    await nr(s, { actorId: e }, { requestId: r, actorId: e });
  } catch (i) {
    console.error("[Bridge] cyberware refreshActor failed", i);
  }
}
function sr(s) {
  return typeof s.recursiveGetAllInstalledItems != "function" ? [] : s.recursiveGetAllInstalledItems().filter((e) => e.type === "cyberware");
}
function ya(s, e) {
  var n, o, l;
  const r = s.items.filter(
    (h) => h.type === "cyberware" && h.system.isInstalled && h.system.isFoundational && h.system.type === e.system.type
  ), i = [];
  for (const h of r) {
    i.push({ id: h._id, name: h.name });
    let u = [...((n = h.system.installedItems) == null ? void 0 : n.list) || []];
    for (; u.length > 0; ) {
      const f = u;
      u = [];
      for (const g of f) {
        const y = s.items.get(g), m = (o = y == null ? void 0 : y.system) == null ? void 0 : o.installedItems;
        if (m != null && m.allowed) {
          const b = typeof y.availableInstallSlots == "function" ? y.availableInstallSlots() : 1 / 0;
          (l = m.allowedTypes) != null && l.includes(e.type) && b >= (e.system.size || 1) && i.push({ id: y._id, name: y.name }), u = u.concat(m.list || []);
        }
      }
    }
  }
  return i;
}
async function ba(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (!n) return;
  const o = n.items.get(e.itemId);
  if (!o) {
    await s.sendResponse({ type: "CYBERWARE_INSTALL_OPTIONS", requestId: r, actorId: i, success: !1, reason: "Item not found." });
    return;
  }
  const l = !!o.system.isFoundational, h = l ? [] : ya(n, o), u = sr(o), f = u.reduce((m, b) => `${m} + ${b.system.humanityLoss.roll}`, o.system.humanityLoss.roll), g = u.reduce((m, b) => m + b.system.humanityLoss.static, o.system.humanityLoss.static), y = l || h.length > 0;
  await s.sendResponse({
    type: "CYBERWARE_INSTALL_OPTIONS",
    requestId: r,
    actorId: i,
    itemId: o._id,
    itemName: o.name,
    isFoundational: l,
    canInstall: y,
    reason: y ? null : "No compatible foundational cyberware of the correct type is installed.",
    targets: h,
    humanityLoss: { roll: `${f}`, static: g },
    success: !0
  });
}
async function va(s, e, { requestId: r, actorId: i }) {
  var y, m, b, C, _, k;
  const n = game.actors.get(i);
  if (!n) return;
  const o = n.items.get(e.itemId);
  if (!o) return;
  const h = !!o.system.isFoundational ? n : n.items.get(e.foundationalId);
  if (!h) {
    await s.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: i, itemId: e.itemId, success: !1, reason: "Install target not found." });
    return;
  }
  const u = sr(o), f = e.humanityLossType || "none";
  let g = !1;
  try {
    const v = Number((b = (m = (y = n.system) == null ? void 0 : y.derivedStats) == null ? void 0 : m.humanity) == null ? void 0 : b.value) || 0;
    if (g = await h.installItems([o]), g && (await n.loseHumanityValue([o].concat(u), f), f !== "none")) {
      const S = Number((k = (_ = (C = n.system) == null ? void 0 : C.derivedStats) == null ? void 0 : _.humanity) == null ? void 0 : k.value) || 0, R = Math.max(0, v - S);
      await s.sendResponse({
        type: "ROLL_RESULT",
        actorId: i,
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
  await s.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: r, actorId: i, itemId: o._id, success: g }), g && await ir(s, i, r);
}
async function wa(s, e, { requestId: r, actorId: i }) {
  const n = game.actors.get(i);
  if (n) {
    try {
      await n.uninstallCyberware(e.itemId, e.foundationalId || null, !0);
    } catch (o) {
      console.error("[Bridge] uninstallCyberware failed", o);
    }
    await s.sendResponse({ type: "CYBERWARE_UNINSTALLED", requestId: r, actorId: i, itemId: e.itemId, success: !0 }), await ir(s, i, r);
  }
}
const ka = {
  UPDATE_ACTOR: Ho,
  GET_ACTOR: nr,
  GET_ACTORS: zo,
  CONSUME_ITEM: $o,
  ITEM_EQUIP: qo,
  RELOAD_WEAPON: Go,
  INSTALL_PROGRAM: Vo,
  REMOVE_PROGRAM: Wo,
  TOGGLE_REZ: Ko,
  PROGRAM_ROLL: Jo,
  PREPARE_CYBERWARE_INSTALL: ba,
  INSTALL_CYBERWARE: va,
  UNINSTALL_CYBERWARE: wa,
  DAMAGE_ROLL: Qo,
  DEATH_SAVE: Zo,
  FACEDOWN_ROLL: ea,
  INITIATIVE_ROLL: ta,
  ROLE_ROLL: na,
  SKILL_ROLL: ra,
  STAT_ROLL: ia,
  DICE_ROLL: sa,
  ATTACK_ROLL: oa,
  MOVE_TOKEN: aa,
  TARGET_TOKEN: ca,
  LIST_VISIBLE_TOKENS: la,
  GET_DV_INFO: ua,
  GET_ROLL_MODIFIERS: ha,
  UPDATE_STAT: da,
  UPDATE_EB: fa,
  GET_NET_POOL: ga,
  PAIR_AGENT: ma
};
async function Rn(s, e, r, i) {
  const n = ka[e];
  if (!n) {
    console.log("Unknown DataType: " + e);
    return;
  }
  return n(s, r, i);
}
class _a {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1, this._captureRollMode = null, this._prevRollMode = null, this._captureSafetyTimer = null, this.embedTransport = null;
  }
  rollAndCapture(e, r, i = null) {
    return Us(this, e, r, i);
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
    jo(this);
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
    const e = game.settings.get(A, "apiUrl"), r = game.settings.get(A, "apiKey"), i = game.settings.get(A, "debugMode"), n = Number(game.settings.get(A, "reverbPort") || 0) || 0, o = game.settings.get(A, "reverbUseSSL"), l = (game.settings.get(A, "reverbHost") || "").trim();
    if (!r || !e) return;
    this.echo && this.echo.disconnect();
    let h;
    try {
      h = new URL(e);
    } catch {
      return;
    }
    const u = l || h.hostname, f = Ns(o, e), g = h.port ? Number(h.port) : h.protocol === "https:" ? 443 : 80, y = n > 0 ? n : g;
    this.echo = new Ps({
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
    await i(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (n, o) => {
      n.id === game.user.id && o.character !== void 0 && i();
    }));
  }
  registerGlobalHooks() {
    var l, h;
    if (this.hookIds.updateActor) return;
    const e = async (u, f) => {
      const g = game.settings.get(A, "apiKey");
      !this.isConnected && !g && !this.embedTransport || !u || !["character", "mook"].includes(u.type) || (console.log(`%c[Bridge] Syncing change for ${u.name}`, "color: #ffaa00;", f), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: u.id,
        uuid: u.id,
        delta: f,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (u, f, g, y) => {
      if (f.system) {
        const m = _t(f.system, "system.");
        e(u, m);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (u, f, g, y) => {
      const m = u.parent;
      if (m instanceof Actor) {
        const b = {}, C = `items.${u.id}.`;
        f.system && _t(f.system, `${C}system.`, b);
        for (let _ in f)
          _ !== "system" && _ !== "_id" && (b[`${C}${_}`] = f[_]);
        Object.keys(b).length > 0 && e(m, b);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (u, f, g) => {
      const y = u.parent;
      if (y instanceof Actor) {
        const m = {
          [`items.+${u.id}`]: u.toObject()
        };
        e(y, m);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (u, f, g) => {
      const y = u.parent;
      if (y instanceof Actor) {
        const m = {
          [`items.${u.id}`]: null
        };
        e(y, m);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (u, f) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (u, f, g, y) => {
      (f.x || f.y || f.disposition || f.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    });
    const r = (u) => (u == null ? void 0 : u.type) === "cpr-agent.datapool";
    let i = null;
    const n = (u) => {
      !this.embedTransport && u !== game.user.id || (clearTimeout(i), i = setTimeout(() => this.broadcastRefresh("NET_POOL_DATA"), 300));
    };
    for (const u of ["createJournalEntryPage", "updateJournalEntryPage", "deleteJournalEntryPage"])
      this.hookIds[u] = Hooks.on(u, (f, ...g) => {
        r(f) && n(g[g.length - 1]);
      });
    for (const u of ["updateJournalEntry", "deleteJournalEntry"])
      this.hookIds[u] = Hooks.on(u, (f, ...g) => {
        f.pages.some(r) && n(g[g.length - 1]);
      });
    const o = (u) => {
      const f = u.parent, g = f == null ? void 0 : f.parent;
      !(f instanceof Item) || !(g instanceof Actor) || e(g, { [`items.${f.id}.effects`]: f.toObject().effects });
    };
    this.hookIds.createActiveEffect = Hooks.on("createActiveEffect", o), this.hookIds.updateActiveEffect = Hooks.on("updateActiveEffect", o), this.hookIds.deleteActiveEffect = Hooks.on("deleteActiveEffect", o), this.hookIds.deleteToken = Hooks.on("deleteToken", (u, f, g) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.preCreateChatMessage = Hooks.on("preCreateChatMessage", (u, f, g, y) => {
      if (!(!this._isCapturingRoll || !this._captureRollMode))
        try {
          const m = this._whisperForRollMode(this._captureRollMode);
          u.updateSource(m), game.settings.get(A, "debugMode") && console.log(`%c[Bridge] Stamped rollMode ${this._captureRollMode}`, "color:#c084fc; font-weight:bold;", m);
        } catch (m) {
          console.warn("[Bridge] Failed to apply roll-mode visibility", m);
        }
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (u, f, g) => {
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
    var b;
    const i = game.users.get(e.author.id), n = e.rolls[0];
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
    const h = vn(e.content), u = wn(), f = h ? u ?? h : null, g = (f == null ? void 0 : f.total) ?? (n == null ? void 0 : n.total) ?? null, y = (n == null ? void 0 : n.formula) ?? null, m = (f == null ? void 0 : f.label) || e.flavor || "Dice Roll";
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((b = e.speaker) == null ? void 0 : b.actor) || null,
      agentLink: i ? i.getFlag(A, "agent-link") : null,
      playerName: e.alias,
      total: g,
      formula: y,
      rollMode: e.rollMode || o,
      label: m,
      isCriticalSuccess: (f == null ? void 0 : f.isCriticalSuccess) ?? !1,
      isCriticalFailure: (f == null ? void 0 : f.isCriticalFailure) ?? !1,
      rawRoll: {
        total: g,
        formula: y,
        rollTitle: m,
        resultTotal: g,
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
    const r = e.payload || e, i = r.type;
    console.log(`%c[Bridge] Incoming Call: ${i}`, "color: #00ffff; font-weight: bold;", r);
    const n = r.requestId, o = r.agent_link || r.agentLink;
    n && o && (this.requestAgentLinks.set(n, o), setTimeout(() => this.requestAgentLinks.delete(n), 3e4));
    const l = game.user.getFlag(A, "agent-link"), h = r.actorId, u = (m = game.user.character) == null ? void 0 : m.id, f = game.settings.get(A, "debugMode");
    f && console.log(`[Bridge] handleIncomingData: requestId=${n}, agentLink=${o}, myAgentLink=${l}, actorId=${h}, myCharacterId=${u}`);
    let g = !1;
    if (game.user.isGM || l && (n === l || o === l) ? g = !0 : !l && n && h && u === h && (console.log(`[Bridge] Discovery: Matching incoming request to character ${h}`), g = !0), !g) {
      f && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && o && l !== o && (n === o || h && u === h) && (console.log(`%c[Bridge] Setting agent-link flag: ${o}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(A, "agent-link", o), (b = ui.notifications) == null || b.info("Agent: Account linked!"));
    const y = yn(r.tokenId, h);
    await Rn(this, i, r, { type: i, requestId: n, actorId: h, tokenId: y, debug: f, remote: !0 });
  }
  /**
   * Ingress for messages arriving from an embedded Agent iframe.
   * Skips the Laravel-oriented channel/agentLink routing in handleIncomingData:
   * the iframe runs in this same client for this same user, already
   * authenticated by Foundry and validated (origin + nonce) at the transport.
   * Foundry's own permission model still gates every handler action.
   */
  async handleIncomingDataLocal(e) {
    const r = e.type, i = e.requestId, n = e.actorId, o = game.settings.get(A, "debugMode"), l = yn(e.tokenId, n);
    o && console.log(`%c[Bridge] Embed Call: ${r}`, "color: #c084fc; font-weight: bold;", e), await Rn(this, r, e, { type: r, requestId: i, actorId: n, tokenId: l, debug: o });
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
    const r = e.currentTarget.dataset.id, n = (this.document.system.entries || []).filter((o) => o.id !== r);
    await this.document.update({ "system.entries": n });
  }
}
/** @override */
gt(ar, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
class Ca {
  constructor(e) {
    this.bridge = e, this.frame = null, this.nonce = null, this.origin = fs(), this.ready = !1, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage);
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
class Sa extends Application {
  constructor(e, r = {}) {
    super(r), this.bridge = e, this.nonce = foundry.utils.randomID(24), e.embedTransport || (e.embedTransport = new Ca(e)), this.transport = e.embedTransport;
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
    const r = e == null ? void 0 : e.currentTarget, i = (n = r == null ? void 0 : r.querySelector) == null ? void 0 : n.call(r, "i");
    i && (i.classList.toggle("fa-expand", !this._isFullscreen), i.classList.toggle("fa-compress", this._isFullscreen)), r && r.childNodes.forEach((o) => {
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
    const i = this.element instanceof HTMLElement ? this.element : (o = this.element) == null ? void 0 : o[0], n = (l = i == null ? void 0 : i.querySelector) == null ? void 0 : l.call(i, "iframe.cpr-agent-frame");
    n && this.transport.frame !== n ? this.transport.attach(n, this.nonce) : n || console.warn("[Bridge] AgentApp: iframe.cpr-agent-frame not found; transport not attached.");
  }
  async close(e) {
    var r;
    return (r = this.transport) == null || r.detach(), super.close(e);
  }
}
window.Pusher = ds;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new _a();
Hooks.once("init", () => {
  Ta(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = or, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", ar, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  xs(), game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), Mo(window.cyberpunkBridge), window.cyberpunkBridge.openAgent = () => {
    window.cyberpunkBridge._agentApp || (window.cyberpunkBridge._agentApp = new Sa(window.cyberpunkBridge)), window.cyberpunkBridge._agentApp.render(!0);
  }, console.log("[Bridge] Cyberpunk Bridge Fully Online. Open the embedded Agent with: cyberpunkBridge.openAgent()");
});
Hooks.on("getSceneControlButtons", (s) => {
  const e = Array.isArray(s) ? s.find((r) => r.name === "token") : s == null ? void 0 : s.token;
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
function Ta() {
  game.settings.settings.has(`${A}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
