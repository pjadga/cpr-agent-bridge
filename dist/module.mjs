var Ea = Object.defineProperty;
var Ra = (n, e, t) => e in n ? Ea(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var dn = (n, e, t) => Ra(n, typeof e != "symbol" ? e + "" : e, t);
import.meta.hot && import.meta.hot.accept((n) => {
  console.log("Hot reloading module...");
});
function La(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xr = { exports: {} };
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
        return s.m = t, s.c = r, s.d = function(i, a, l) {
          s.o(i, a) || Object.defineProperty(i, a, { enumerable: !0, get: l });
        }, s.r = function(i) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
        }, s.t = function(i, a) {
          if (a & 1 && (i = s(i)), a & 8 || a & 4 && typeof i == "object" && i && i.__esModule) return i;
          var l = /* @__PURE__ */ Object.create(null);
          if (s.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: i }), a & 2 && typeof i != "string") for (var u in i) s.d(l, u, (function(f) {
            return i[f];
          }).bind(null, u));
          return l;
        }, s.n = function(i) {
          var a = i && i.__esModule ? (
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
        function(t, r, s) {
          var i = this && this.__extends || /* @__PURE__ */ function() {
            var T = function(_, k) {
              return T = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, A) {
                S.__proto__ = A;
              } || function(S, A) {
                for (var E in A) A.hasOwnProperty(E) && (S[E] = A[E]);
              }, T(_, k);
            };
            return function(_, k) {
              T(_, k);
              function S() {
                this.constructor = _;
              }
              _.prototype = k === null ? Object.create(k) : (S.prototype = k.prototype, new S());
            };
          }();
          Object.defineProperty(r, "__esModule", { value: !0 });
          var a = 256, l = (
            /** @class */
            function() {
              function T(_) {
                _ === void 0 && (_ = "="), this._paddingCharacter = _;
              }
              return T.prototype.encodedLength = function(_) {
                return this._paddingCharacter ? (_ + 2) / 3 * 4 | 0 : (_ * 8 + 5) / 6 | 0;
              }, T.prototype.encode = function(_) {
                for (var k = "", S = 0; S < _.length - 2; S += 3) {
                  var A = _[S] << 16 | _[S + 1] << 8 | _[S + 2];
                  k += this._encodeByte(A >>> 3 * 6 & 63), k += this._encodeByte(A >>> 2 * 6 & 63), k += this._encodeByte(A >>> 1 * 6 & 63), k += this._encodeByte(A >>> 0 * 6 & 63);
                }
                var E = _.length - S;
                if (E > 0) {
                  var A = _[S] << 16 | (E === 2 ? _[S + 1] << 8 : 0);
                  k += this._encodeByte(A >>> 3 * 6 & 63), k += this._encodeByte(A >>> 2 * 6 & 63), E === 2 ? k += this._encodeByte(A >>> 1 * 6 & 63) : k += this._paddingCharacter || "", k += this._paddingCharacter || "";
                }
                return k;
              }, T.prototype.maxDecodedLength = function(_) {
                return this._paddingCharacter ? _ / 4 * 3 | 0 : (_ * 6 + 7) / 8 | 0;
              }, T.prototype.decodedLength = function(_) {
                return this.maxDecodedLength(_.length - this._getPaddingLength(_));
              }, T.prototype.decode = function(_) {
                if (_.length === 0)
                  return new Uint8Array(0);
                for (var k = this._getPaddingLength(_), S = _.length - k, A = new Uint8Array(this.maxDecodedLength(S)), E = 0, R = 0, L = 0, P = 0, O = 0, F = 0, j = 0; R < S - 4; R += 4)
                  P = this._decodeChar(_.charCodeAt(R + 0)), O = this._decodeChar(_.charCodeAt(R + 1)), F = this._decodeChar(_.charCodeAt(R + 2)), j = this._decodeChar(_.charCodeAt(R + 3)), A[E++] = P << 2 | O >>> 4, A[E++] = O << 4 | F >>> 2, A[E++] = F << 6 | j, L |= P & a, L |= O & a, L |= F & a, L |= j & a;
                if (R < S - 1 && (P = this._decodeChar(_.charCodeAt(R)), O = this._decodeChar(_.charCodeAt(R + 1)), A[E++] = P << 2 | O >>> 4, L |= P & a, L |= O & a), R < S - 2 && (F = this._decodeChar(_.charCodeAt(R + 2)), A[E++] = O << 4 | F >>> 2, L |= F & a), R < S - 3 && (j = this._decodeChar(_.charCodeAt(R + 3)), A[E++] = F << 6 | j, L |= j & a), L !== 0)
                  throw new Error("Base64Coder: incorrect characters for decoding");
                return A;
              }, T.prototype._encodeByte = function(_) {
                var k = _;
                return k += 65, k += 25 - _ >>> 8 & 6, k += 51 - _ >>> 8 & -75, k += 61 - _ >>> 8 & -15, k += 62 - _ >>> 8 & 3, String.fromCharCode(k);
              }, T.prototype._decodeChar = function(_) {
                var k = a;
                return k += (42 - _ & _ - 44) >>> 8 & -a + _ - 43 + 62, k += (46 - _ & _ - 48) >>> 8 & -a + _ - 47 + 63, k += (47 - _ & _ - 58) >>> 8 & -a + _ - 48 + 52, k += (64 - _ & _ - 91) >>> 8 & -a + _ - 65 + 0, k += (96 - _ & _ - 123) >>> 8 & -a + _ - 97 + 26, k;
              }, T.prototype._getPaddingLength = function(_) {
                var k = 0;
                if (this._paddingCharacter) {
                  for (var S = _.length - 1; S >= 0 && _[S] === this._paddingCharacter; S--)
                    k++;
                  if (_.length < 4 || k > 2)
                    throw new Error("Base64Coder: incorrect padding");
                }
                return k;
              }, T;
            }()
          );
          r.Coder = l;
          var u = new l();
          function f(T) {
            return u.encode(T);
          }
          r.encode = f;
          function p(T) {
            return u.decode(T);
          }
          r.decode = p;
          var m = (
            /** @class */
            function(T) {
              i(_, T);
              function _() {
                return T !== null && T.apply(this, arguments) || this;
              }
              return _.prototype._encodeByte = function(k) {
                var S = k;
                return S += 65, S += 25 - k >>> 8 & 6, S += 51 - k >>> 8 & -75, S += 61 - k >>> 8 & -13, S += 62 - k >>> 8 & 49, String.fromCharCode(S);
              }, _.prototype._decodeChar = function(k) {
                var S = a;
                return S += (44 - k & k - 46) >>> 8 & -a + k - 45 + 62, S += (94 - k & k - 96) >>> 8 & -a + k - 95 + 63, S += (47 - k & k - 58) >>> 8 & -a + k - 48 + 52, S += (64 - k & k - 91) >>> 8 & -a + k - 65 + 0, S += (96 - k & k - 123) >>> 8 & -a + k - 97 + 26, S;
              }, _;
            }(l)
          );
          r.URLSafeCoder = m;
          var y = new m();
          function b(T) {
            return y.encode(T);
          }
          r.encodeURLSafe = b;
          function v(T) {
            return y.decode(T);
          }
          r.decodeURLSafe = v, r.encodedLength = function(T) {
            return u.encodedLength(T);
          }, r.maxDecodedLength = function(T) {
            return u.maxDecodedLength(T);
          }, r.decodedLength = function(T) {
            return u.decodedLength(T);
          };
        },
        /* 1 */
        /***/
        function(t, r, s) {
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = "utf8: invalid string", a = "utf8: invalid source encoding";
          function l(p) {
            for (var m = new Uint8Array(u(p)), y = 0, b = 0; b < p.length; b++) {
              var v = p.charCodeAt(b);
              v < 128 ? m[y++] = v : v < 2048 ? (m[y++] = 192 | v >> 6, m[y++] = 128 | v & 63) : v < 55296 ? (m[y++] = 224 | v >> 12, m[y++] = 128 | v >> 6 & 63, m[y++] = 128 | v & 63) : (b++, v = (v & 1023) << 10, v |= p.charCodeAt(b) & 1023, v += 65536, m[y++] = 240 | v >> 18, m[y++] = 128 | v >> 12 & 63, m[y++] = 128 | v >> 6 & 63, m[y++] = 128 | v & 63);
            }
            return m;
          }
          r.encode = l;
          function u(p) {
            for (var m = 0, y = 0; y < p.length; y++) {
              var b = p.charCodeAt(y);
              if (b < 128)
                m += 1;
              else if (b < 2048)
                m += 2;
              else if (b < 55296)
                m += 3;
              else if (b <= 57343) {
                if (y >= p.length - 1)
                  throw new Error(i);
                y++, m += 4;
              } else
                throw new Error(s);
            }
            return m;
          }
          r.encodedLength = u;
          function f(p) {
            for (var m = [], y = 0; y < p.length; y++) {
              var b = p[y];
              if (b & 128) {
                var v = void 0;
                if (b < 224) {
                  if (y >= p.length)
                    throw new Error(a);
                  var T = p[++y];
                  if ((T & 192) !== 128)
                    throw new Error(a);
                  b = (b & 31) << 6 | T & 63, v = 128;
                } else if (b < 240) {
                  if (y >= p.length - 1)
                    throw new Error(a);
                  var T = p[++y], _ = p[++y];
                  if ((T & 192) !== 128 || (_ & 192) !== 128)
                    throw new Error(a);
                  b = (b & 15) << 12 | (T & 63) << 6 | _ & 63, v = 2048;
                } else if (b < 248) {
                  if (y >= p.length - 2)
                    throw new Error(a);
                  var T = p[++y], _ = p[++y], k = p[++y];
                  if ((T & 192) !== 128 || (_ & 192) !== 128 || (k & 192) !== 128)
                    throw new Error(a);
                  b = (b & 15) << 18 | (T & 63) << 12 | (_ & 63) << 6 | k & 63, v = 65536;
                } else
                  throw new Error(a);
                if (b < v || b >= 55296 && b <= 57343)
                  throw new Error(a);
                if (b >= 65536) {
                  if (b > 1114111)
                    throw new Error(a);
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
              var c = this.lastId, h = this.prefix + c, g = this.name + "[" + c + "]", C = !1, I = function() {
                C || (o.apply(null, arguments), C = !0);
              };
              return this[c] = I, { number: c, id: h, name: g, callback: I };
            }
            remove(t) {
              delete this[t.number];
            }
          }
          var a = new i("_pusher_script_", "Pusher.ScriptReceivers"), l = {
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
          }, u = l;
          class f {
            constructor(o) {
              this.options = o, this.receivers = o.receivers || a, this.loading = {};
            }
            load(o, c, h) {
              var g = this;
              if (g.loading[o] && g.loading[o].length > 0)
                g.loading[o].push(h);
              else {
                g.loading[o] = [h];
                var C = x.createScriptRequest(g.getPath(o, c)), I = g.receivers.create(function(M) {
                  if (g.receivers.remove(I), g.loading[o]) {
                    var N = g.loading[o];
                    delete g.loading[o];
                    for (var D = function(q) {
                      q || C.cleanup();
                    }, B = 0; B < N.length; B++)
                      N[B](M, D);
                  }
                });
                C.send(I);
              }
            }
            getRoot(o) {
              var c, h = x.getDocument().location.protocol;
              return o && o.useTLS || h === "https:" ? c = this.options.cdn_https : c = this.options.cdn_http, c.replace(/\/*$/, "") + "/" + this.options.version;
            }
            getPath(t, a) {
              return this.getRoot(a) + "/" + t + this.options.suffix + ".js";
            }
          }
          var p = new i("_pusher_dependencies", "Pusher.DependenciesReceivers"), m = new f({
            cdn_http: u.cdn_http,
            cdn_https: u.cdn_https,
            version: u.VERSION,
            suffix: u.dependency_suffix,
            receivers: p
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
          var v = { buildLogSuffix: function(d) {
            const o = "See:", c = y.urls[d];
            if (!c)
              return "";
            let h;
            return c.fullUrl ? h = c.fullUrl : c.path && (h = y.baseUrl + c.path), h ? `${o} ${h}` : "";
          } }, T;
          (function(d) {
            d.UserAuthentication = "user-authentication", d.ChannelAuthorization = "channel-authorization";
          })(T || (T = {}));
          class _ extends Error {
            constructor(o) {
              super(o), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class k extends Error {
            constructor(o) {
              super(o), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class S extends Error {
            constructor(o) {
              super(o), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class A extends Error {
            constructor(o) {
              super(o), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class R extends Error {
            constructor(t) {
              super(t), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class R extends Error {
            constructor(o) {
              super(o), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class L extends Error {
            constructor(o) {
              super(o), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class P extends Error {
            constructor(o) {
              super(o), Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          class O extends Error {
            constructor(o, c) {
              super(c), this.status = o, Object.setPrototypeOf(this, new.target.prototype);
            }
          }
          var j = function(d, o, c, h, g) {
            const C = x.createXHR();
            C.open("POST", c.endpoint, !0), C.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var I in c.headers)
              C.setRequestHeader(I, c.headers[I]);
            if (c.headersProvider != null) {
              let M = c.headersProvider();
              for (var I in M)
                C.setRequestHeader(I, M[I]);
            }
            return C.onreadystatechange = function() {
              if (C.readyState === 4)
                if (C.status === 200) {
                  let M, N = !1;
                  try {
                    M = JSON.parse(C.responseText), N = !0;
                  } catch {
                    g(new O(200, `JSON returned from ${h.toString()} endpoint was invalid, yet status code was 200. Data was: ${C.responseText}`), null);
                  }
                  N && g(null, M);
                } else {
                  let M = "";
                  switch (h) {
                    case T.UserAuthentication:
                      M = v.buildLogSuffix("authenticationEndpoint");
                      break;
                    case T.ChannelAuthorization:
                      M = `Clients must be authorized to join private or presence channels. ${v.buildLogSuffix("authorizationEndpoint")}`;
                      break;
                  }
                  g(new O(C.status, `Unable to retrieve auth string from ${h.toString()} endpoint - received status: ${C.status} from ${c.endpoint}. ${M}`), null);
                }
            }, w.send(t), w;
          };
          function ie(d) {
            return kt(vt(d));
          }
          var ue = String.fromCharCode, U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xt = function(d) {
            var o = d.charCodeAt(0);
            return o < 128 ? d : o < 2048 ? ue(192 | o >>> 6) + ue(128 | o & 63) : ue(224 | o >>> 12 & 15) + ue(128 | o >>> 6 & 63) + ue(128 | o & 63);
          }, vt = function(d) {
            return d.replace(/[^\x00-\x7F]/g, Xt);
          }, bt = function(d) {
            var o = [0, 2, 1][d.length % 3], c = d.charCodeAt(0) << 16 | (d.length > 1 ? d.charCodeAt(1) : 0) << 8 | (d.length > 2 ? d.charCodeAt(2) : 0), h = [
              U.charAt(c >>> 18),
              U.charAt(c >>> 12 & 63),
              o >= 2 ? "=" : U.charAt(c >>> 6 & 63),
              o >= 1 ? "=" : U.charAt(c & 63)
            ];
            return h.join("");
          }, kt = window.btoa || function(d) {
            return d.replace(/[\s\S]{1,3}/g, bt);
          };
          class _t {
            constructor(o, c, h, g) {
              this.clear = c, this.timer = o(() => {
                this.timer && (this.timer = g(this.timer));
              }, h);
            }
            isRunning() {
              return this.timer !== null;
            }
            ensureAborted() {
              this.timer && (this.clear(this.timer), this.timer = null);
            }
          }
          var We = _t;
          function St(d) {
            window.clearTimeout(d);
          }
          function Le(d) {
            window.clearInterval(d);
          }
          class he extends We {
            constructor(o, c) {
              super(setTimeout, St, o, function(h) {
                return c(), null;
              });
            }
          }
          class Me extends We {
            constructor(o, c) {
              super(setInterval, Le, o, function(h) {
                return c(), h;
              });
            }
          }
          var fe = {
            now() {
              return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
            },
            defer(d) {
              return new he(0, d);
            },
            method(d, ...o) {
              var c = Array.prototype.slice.call(arguments, 1);
              return function(h) {
                return h[d].apply(h, c.concat(arguments));
              };
            }
          }, V = Pe;
          function J(d, ...o) {
            for (var c = 0; c < o.length; c++) {
              var h = o[c];
              for (var g in h)
                h[g] && h[g].constructor && h[g].constructor === Object ? d[g] = J(d[g] || {}, h[g]) : d[g] = h[g];
            }
            return d;
          }
          function Ct() {
            for (var d = ["Pusher"], o = 0; o < arguments.length; o++)
              typeof arguments[o] == "string" ? d.push(arguments[o]) : d.push(Tt(arguments[o]));
            return d.join(" : ");
          }
          function rr(d, o) {
            var c = Array.prototype.indexOf;
            if (d === null)
              return -1;
            if (c && d.indexOf === c)
              return d.indexOf(o);
            for (var h = 0, g = d.length; h < g; h++)
              if (d[h] === o)
                return h;
            return -1;
          }
          function ge(d, o) {
            for (var c in d)
              Object.prototype.hasOwnProperty.call(d, c) && o(d[c], c, d);
          }
          function sr(d) {
            var o = [];
            return ge(d, function(c, h) {
              o.push(h);
            }), o;
          }
          function Ii(d) {
            var o = [];
            return ge(d, function(c) {
              o.push(c);
            }), o;
          }
          function Ke(d, o, c) {
            for (var h = 0; h < d.length; h++)
              o.call(c || window, d[h], h, d);
          }
          function ir(d, o) {
            for (var c = [], h = 0; h < d.length; h++)
              c.push(o(d[h], h, d, c));
            return c;
          }
          function Ei(d, o) {
            var c = {};
            return ge(d, function(h, g) {
              c[g] = o(h);
            }), c;
          }
          function or(d, o) {
            o = o || function(g) {
              return !!g;
            };
            for (var c = [], h = 0; h < d.length; h++)
              o(d[h], h, d, c) && c.push(d[h]);
            return c;
          }
          function ar(d, o) {
            var c = {};
            return ge(d, function(h, g) {
              (o && o(h, g, d, c) || h) && (c[g] = h);
            }), c;
          }
          function Ri(d) {
            var o = [];
            return ge(d, function(c, h) {
              o.push([h, c]);
            }), o;
          }
          function cr(d, o) {
            for (var c = 0; c < d.length; c++)
              if (o(d[c], c, d))
                return !0;
            return !1;
          }
          function Li(d, o) {
            for (var c = 0; c < d.length; c++)
              if (!o(d[c], c, d))
                return !1;
            return !0;
          }
          function Mi(d) {
            return Ei(d, function(o) {
              return typeof o == "object" && (o = Tt(o)), encodeURIComponent(ie(o.toString()));
            });
          }
          function Pi(d) {
            var o = ar(d, function(h) {
              return h !== void 0;
            }), c = ir(Ri(Mi(o)), V.method("join", "=")).join("&");
            return c;
          }
          function Ni(d) {
            var o = [], c = [];
            return function h(g, C) {
              var I, M, N;
              switch (typeof g) {
                case "object":
                  if (!g)
                    return null;
                  for (I = 0; I < o.length; I += 1)
                    if (o[I] === g)
                      return { $ref: c[I] };
                  if (o.push(g), c.push(C), Object.prototype.toString.apply(g) === "[object Array]")
                    for (N = [], I = 0; I < g.length; I += 1)
                      N[I] = h(g[I], C + "[" + I + "]");
                  else {
                    N = {};
                    for (M in g)
                      Object.prototype.hasOwnProperty.call(g, M) && (N[M] = h(g[M], C + "[" + JSON.stringify(M) + "]"));
                  }
                  return N;
                case "number":
                case "string":
                case "boolean":
                  return g;
              }
            }(d, "$");
          }
          function Tt(d) {
            try {
              return JSON.stringify(d);
            } catch {
              return JSON.stringify(Ni(d));
            }
          }
          class xi {
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
            log(o, ...c) {
              var h = Ct.apply(this, arguments);
              cn.log ? cn.log(h) : cn.logToConsole && o.bind(this)(h);
            }
          }
          var H = new xi(), Oi = function(d, o, c, h, g) {
            (c.headers !== void 0 || c.headersProvider != null) && H.warn(`To send headers with the ${h.toString()} request, you must use AJAX, rather than JSONP.`);
            var C = d.nextAuthCallbackID.toString();
            d.nextAuthCallbackID++;
            var I = d.getDocument(), M = I.createElement("script");
            d.auth_callbacks[C] = function(B) {
              g(null, B);
            };
            var N = "Pusher.auth_callbacks['" + C + "']";
            M.src = c.endpoint + "?callback=" + encodeURIComponent(N) + "&" + o;
            var D = I.getElementsByTagName("head")[0] || I.documentElement;
            D.insertBefore(M, D.firstChild);
          }, Di = Oi;
          class Bi {
            constructor(o) {
              this.src = o;
            }
            send(o) {
              var c = this, h = "Error loading " + c.src;
              c.script = document.createElement("script"), c.script.id = o.id, c.script.src = c.src, c.script.type = "text/javascript", c.script.charset = "UTF-8", c.script.addEventListener ? (c.script.onerror = function() {
                o.callback(h);
              }, c.script.onload = function() {
                o.callback(null);
              }) : c.script.onreadystatechange = function() {
                (c.script.readyState === "loaded" || c.script.readyState === "complete") && o.callback(null);
              }, c.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (c.errorScript = document.createElement("script"), c.errorScript.id = o.id + "_error", c.errorScript.text = o.name + "('" + h + "');", c.script.async = c.errorScript.async = !1) : c.script.async = !0;
              var g = document.getElementsByTagName("head")[0];
              g.insertBefore(c.script, g.firstChild), c.errorScript && g.insertBefore(c.errorScript, c.script.nextSibling);
            }
            cleanup() {
              this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
            }
          }
          class Fi {
            constructor(o, c) {
              this.url = o, this.data = c;
            }
            send(t) {
              if (!this.request) {
                var c = Pi(this.data), h = this.url + "/" + o.number + "?" + c;
                this.request = x.createScriptRequest(h), this.request.send(o);
              }
            }
            cleanup() {
              this.request && this.request.cleanup();
            }
          }
          var $i = function(d, o) {
            return function(c, h) {
              var g = "http" + (o ? "s" : "") + "://", C = g + (d.host || d.options.host) + d.options.path, I = x.createJSONPRequest(C, c), M = x.ScriptReceivers.create(function(N, D) {
                a.remove(M), I.cleanup(), D && D.host && (d.host = D.host), h && h(N, D);
              });
              I.send(M);
            };
          }, Ui = {
            name: "jsonp",
            getAgent: $i
          }, Hi = Ui;
          function Yt(d, o, c) {
            var h = d + (o.useTLS ? "s" : ""), g = o.useTLS ? o.hostTLS : o.hostNonTLS;
            return h + "://" + g + c;
          }
          function Qt(d, o) {
            var c = "/app/" + d, h = "?protocol=" + u.PROTOCOL + "&client=js&version=" + u.VERSION + (o ? "&" + o : "");
            return c + h;
          }
          var ji = {
            getInitial: function(d, o) {
              var c = (o.httpPath || "") + Qt(d, "flash=false");
              return Yt("ws", o, c);
            }
          }, Gi = {
            getInitial: function(d, o) {
              var c = (o.httpPath || "/pusher") + Qt(d);
              return Yt("http", o, c);
            }
          }, qi = {
            getInitial: function(d, o) {
              return Yt("http", o, o.httpPath || "/pusher");
            },
            getPath: function(d, o) {
              return Qt(d);
            }
          };
          class zi {
            constructor() {
              this._callbacks = {};
            }
            get(o) {
              return this._callbacks[Zt(o)];
            }
            add(o, c, h) {
              var g = Zt(o);
              this._callbacks[g] = this._callbacks[g] || [], this._callbacks[g].push({
                fn: c,
                context: h
              });
            }
            remove(t, a, d) {
              if (!t && !a && !d) {
                this._callbacks = {};
                return;
              }
              var g = o ? [Zt(o)] : sr(this._callbacks);
              c || h ? this.removeCallback(g, c, h) : this.removeAllCallbacks(g);
            }
            removeCallback(o, c, h) {
              Ke(o, function(g) {
                this._callbacks[g] = or(this._callbacks[g] || [], function(C) {
                  return c && c !== C.fn || h && h !== C.context;
                }), this._callbacks[g].length === 0 && delete this._callbacks[g];
              }, this);
            }
            removeAllCallbacks(o) {
              Ke(o, function(c) {
                delete this._callbacks[c];
              }, this);
            }
          }
          function Zt(d) {
            return "_" + d;
          }
          class me {
            constructor(o) {
              this.callbacks = new zi(), this.global_callbacks = [], this.failThrough = o;
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
            unbind_global(o) {
              return o ? (this.global_callbacks = or(this.global_callbacks || [], (c) => c !== o), this) : (this.global_callbacks = [], this);
            }
            unbind_all() {
              return this.unbind(), this.unbind_global(), this;
            }
            emit(o, c, h) {
              for (var g = 0; g < this.global_callbacks.length; g++)
                this.global_callbacks[g](o, c);
              var C = this.callbacks.get(o), I = [];
              if (h ? I.push(c, h) : c && I.push(c), C && C.length > 0)
                for (var g = 0; g < C.length; g++)
                  C[g].fn.apply(C[g].context || window, I);
              else this.failThrough && this.failThrough(o, c);
              return this;
            }
          }
          class Vi extends me {
            constructor(o, c, h, g, C) {
              super(), this.initialize = x.transportConnectionInitializer, this.hooks = o, this.name = c, this.priority = h, this.key = g, this.options = C, this.state = "new", this.timeline = C.timeline, this.activityTimeout = C.activityTimeout, this.id = this.timeline.generateUniqueID();
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
                this.socket = this.hooks.getSocket(o, this.options);
              } catch (c) {
                return V.defer(() => {
                  this.onError(c), this.changeState("closed");
                }), !1;
              }
              return this.bindListeners(), H.debug("Connecting", { transport: this.name, url: o }), this.changeState("connecting"), !0;
            }
            close() {
              return this.socket ? (this.socket.close(), !0) : !1;
            }
            send(o) {
              return this.state === "open" ? (V.defer(() => {
                this.socket && this.socket.send(o);
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
            buildTimelineMessage(o) {
              return J({ cid: this.id }, o);
            }
          }
          class pe {
            constructor(t) {
              this.hooks = t;
            }
            isSupported(t) {
              return this.hooks.isSupported(t);
            }
            createConnection(o, c, h, g) {
              return new Vi(this.hooks, o, c, h, g);
            }
          }
          var Wi = new Ne({
            urls: ji,
            handlesActivityChecks: !1,
            supportsPing: !1,
            isInitialized: function() {
              return !!x.getWebSocketAPI();
            },
            isSupported: function() {
              return !!x.getWebSocketAPI();
            },
            getSocket: function(d) {
              return x.createWebSocket(d);
            }
          }), lr = {
            urls: Gi,
            handlesActivityChecks: !1,
            supportsPing: !0,
            isInitialized: function() {
              return !0;
            }
          }, ur = J({
            getSocket: function(d) {
              return x.HTTPFactory.createStreamingSocket(d);
            }
          }, lr), dr = J({
            getSocket: function(d) {
              return x.HTTPFactory.createPollingSocket(d);
            }
          }, lr), hr = {
            isSupported: function() {
              return x.isXHRSupported();
            }
          }, Ki = new Ne(J({}, ur, hr)), Ji = new Ne(J({}, dr, hr)), Xi = {
            ws: Wi,
            xhr_streaming: Ki,
            xhr_polling: Ji
          }, At = Xi, Yi = new Ne({
            file: "sockjs",
            urls: qi,
            handlesActivityChecks: !0,
            supportsPing: !1,
            isSupported: function() {
              return !0;
            },
            isInitialized: function() {
              return window.SockJS !== void 0;
            },
            getSocket: function(d, o) {
              return new window.SockJS(d, null, {
                js_path: m.getPath("sockjs", {
                  useTLS: t.useTLS
                }),
                ignore_null_origin: t.ignoreNullOrigin
              });
            },
            beforeOpen: function(d, o) {
              d.send(JSON.stringify({
                path: o
              }));
            }
          }), fr = {
            isSupported: function(d) {
              var o = x.isXDRSupported(d.useTLS);
              return o;
            }
          }, Qi = new Ne(J({}, ur, fr)), Zi = new Ne(J({}, dr, fr));
          At.xdr_streaming = Qi, At.xdr_polling = Zi, At.sockjs = Yi;
          var eo = At;
          class to extends me {
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
          var no = new to();
          class ro {
            constructor(o, c, h) {
              this.manager = o, this.transport = c, this.minPingDelay = h.minPingDelay, this.maxPingDelay = h.maxPingDelay, this.pingDelay = void 0;
            }
            createConnection(o, c, h, g) {
              g = J({}, g, {
                activityTimeout: this.pingDelay
              });
              var C = this.transport.createConnection(o, c, h, g), I = null, M = function() {
                C.unbind("open", M), C.bind("closed", N), I = V.now();
              }, N = (D) => {
                if (C.unbind("closed", N), D.code === 1002 || D.code === 1003)
                  this.manager.reportDeath();
                else if (!D.wasClean && I) {
                  var B = V.now() - I;
                  B < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(B / 2, this.minPingDelay));
                }
              };
              return C.bind("open", M), C;
            }
            isSupported(t) {
              return this.manager.isAlive() && this.transport.isSupported(t);
            }
          }
          const pr = {
            decodeMessage: function(d) {
              try {
                var o = JSON.parse(d.data), c = o.data;
                if (typeof c == "string")
                  try {
                    a = JSON.parse(t.data);
                  } catch {
                  }
                var d = {
                  event: t.event,
                  channel: t.channel,
                  data: a
                };
                return o.user_id && (h.user_id = o.user_id), h;
              } catch (g) {
                throw { type: "MessageParseError", error: g, data: d.data };
              }
            },
            encodeMessage: function(d) {
              return JSON.stringify(d);
            },
            processHandshake: function(d) {
              var o = pr.decodeMessage(d);
              if (o.event === "pusher:connection_established") {
                if (!o.data.activity_timeout)
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
            getCloseAction: function(d) {
              return d.code < 4e3 ? d.code >= 1002 && d.code <= 1004 ? "backoff" : null : d.code === 4e3 ? "tls_only" : d.code < 4100 ? "refused" : d.code < 4200 ? "backoff" : d.code < 4300 ? "retry" : "refused";
            },
            getCloseError: function(d) {
              return d.code !== 1e3 && d.code !== 1001 ? {
                type: "PusherError",
                data: {
                  code: d.code,
                  message: d.reason || d.message
                }
              } : null;
            }
          };
          var _e = pr;
          class so extends me {
            constructor(o, c) {
              super(), this.id = o, this.transport = c, this.activityTimeout = c.activityTimeout, this.bindListeners();
            }
            handlesActivityChecks() {
              return this.transport.handlesActivityChecks();
            }
            send(t) {
              return this.transport.send(t);
            }
            send_event(o, c, h) {
              var g = { event: o, data: c };
              return h && (g.channel = h), H.debug("Event sent", g), this.send(_e.encodeMessage(g));
            }
            ping() {
              this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
            }
            close() {
              this.transport.close();
            }
            bindListeners() {
              var o = {
                message: (h) => {
                  var g;
                  try {
                    g = _e.decodeMessage(h);
                  } catch (C) {
                    this.emit("error", {
                      type: "MessageParseError",
                      error: w,
                      data: d.data
                    });
                  }
                  if (g !== void 0) {
                    switch (H.debug("Event recd", g), g.event) {
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
              }, c = () => {
                ge(o, (h, g) => {
                  this.transport.unbind(g, h);
                });
              };
              ge(o, (h, g) => {
                this.transport.bind(g, h);
              });
            }
            handleCloseEvent(o) {
              var c = _e.getCloseAction(o), h = _e.getCloseError(o);
              h && this.emit("error", h), c && this.emit(c, { action: c, error: h });
            }
          }
          class oo {
            constructor(o, c) {
              this.transport = o, this.callback = c, this.bindListeners();
            }
            close() {
              this.unbindListeners(), this.transport.close();
            }
            bindListeners() {
              this.onMessage = (t) => {
                this.unbindListeners();
                var a;
                try {
                  c = _e.processHandshake(o);
                } catch (h) {
                  this.finish("error", { error: h }), this.transport.close();
                  return;
                }
                c.action === "connected" ? this.finish("connected", {
                  connection: new so(c.id, this.transport),
                  activityTimeout: c.activityTimeout
                }) : (this.finish(c.action, { error: c.error }), this.transport.close());
              }, this.onClosed = (o) => {
                this.unbindListeners();
                var c = _e.getCloseAction(o) || "backoff", h = _e.getCloseError(o);
                this.finish(c, { error: h });
              }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
            }
            unbindListeners() {
              this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
            }
            finish(o, c) {
              this.callback(J({ transport: this.transport, action: o }, c));
            }
          }
          class ao {
            constructor(o, c) {
              this.timeline = o, this.options = c || {};
            }
            send(o, c) {
              this.timeline.isEmpty() || this.timeline.send(x.TimelineTransport.getAgent(this, o), c);
            }
          }
          class en extends me {
            constructor(o, c) {
              super(function(h, g) {
                H.debug("No callbacks on " + o + " for " + h);
              }), this.name = o, this.pusher = c, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
            }
            authorize(t, a) {
              return a(null, { auth: "" });
            }
            trigger(o, c) {
              if (o.indexOf("client-") !== 0)
                throw new _("Event '" + o + "' does not start with 'client-'");
              if (!this.subscribed) {
                var h = v.buildLogSuffix("triggeringClientEvents");
                H.warn(`Client event triggered before channel 'subscription_succeeded' event . ${h}`);
              }
              return this.pusher.send_event(t, a, this.name);
            }
            disconnect() {
              this.subscribed = !1, this.subscriptionPending = !1;
            }
            handleEvent(o) {
              var c = o.event, h = o.data;
              if (c === "pusher_internal:subscription_succeeded")
                this.handleSubscriptionSucceededEvent(o);
              else if (c === "pusher_internal:subscription_count")
                this.handleSubscriptionCountEvent(o);
              else if (c.indexOf("pusher_internal:") !== 0) {
                var g = {};
                this.emit(c, h, g);
              }
            }
            handleSubscriptionSucceededEvent(t) {
              this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", t.data);
            }
            handleSubscriptionCountEvent(t) {
              t.data.subscription_count && (this.subscriptionCount = t.data.subscription_count), this.emit("pusher:subscription_count", t.data);
            }
            subscribe() {
              this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (o, c) => {
                o ? (this.subscriptionPending = !1, H.error(o.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                  type: "AuthError",
                  error: o.message
                }, o instanceof O ? { status: o.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
                  auth: c.auth,
                  channel_data: c.channel_data,
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
          class tn extends en {
            authorize(o, c) {
              return this.pusher.config.channelAuthorizer({
                channelName: this.name,
                socketId: t
              }, a);
            }
          }
          class co {
            constructor() {
              this.reset();
            }
            get(t) {
              return Object.prototype.hasOwnProperty.call(this.members, t) ? {
                id: t,
                info: this.members[t]
              } : null;
            }
            each(o) {
              ge(this.members, (c, h) => {
                o(this.get(h));
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
          var lo = function(d, o, c, h) {
            function g(C) {
              return C instanceof c ? C : new c(function(I) {
                I(C);
              });
            }
            return new (c || (c = Promise))(function(C, I) {
              function M(B) {
                try {
                  D(h.next(B));
                } catch (q) {
                  I(q);
                }
              }
              function N(B) {
                try {
                  D(h.throw(B));
                } catch (q) {
                  I(q);
                }
              }
              function D(B) {
                B.done ? C(B.value) : g(B.value).then(M, N);
              }
              D((h = h.apply(d, o || [])).next());
            });
          };
          class uo extends tn {
            constructor(o, c) {
              super(o, c), this.members = new co();
            }
            authorize(o, c) {
              super.authorize(o, (h, g) => lo(this, void 0, void 0, function* () {
                if (!h)
                  if (g = g, g.channel_data != null) {
                    var C = JSON.parse(g.channel_data);
                    this.members.setMyID(C.user_id);
                  } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                    this.members.setMyID(this.pusher.user.user_data.id);
                  else {
                    let I = v.buildLogSuffix("authorizationEndpoint");
                    H.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${I}, or the user should be signed in.`), c("Invalid auth response");
                    return;
                  }
                c(h, g);
              }));
            }
            handleEvent(t) {
              var a = t.event;
              if (a.indexOf("pusher_internal:") === 0)
                this.handleInternalEvent(t);
              else {
                var h = o.data, g = {};
                o.user_id && (g.user_id = o.user_id), this.emit(c, h, g);
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
                  var g = this.members.addMember(h);
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
          var ho = s(1), nn = s(0);
          class fo extends tn {
            constructor(o, c, h) {
              super(o, c), this.key = null, this.nacl = h;
            }
            authorize(o, c) {
              super.authorize(o, (h, g) => {
                if (h) {
                  c(h, g);
                  return;
                }
                let C = g.shared_secret;
                if (!C) {
                  c(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                  return;
                }
                this.key = Object(nn.decode)(C), delete g.shared_secret, c(null, g);
              });
            }
            trigger(o, c) {
              throw new R("Client events are not currently supported for encrypted channels");
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
              if (!c.ciphertext || !c.nonce) {
                H.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + c);
                return;
              }
              let h = Object(nn.decode)(c.ciphertext);
              if (h.length < this.nacl.secretbox.overheadLength) {
                H.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${h.length}`);
                return;
              }
              let g = Object(nn.decode)(c.nonce);
              if (g.length < this.nacl.secretbox.nonceLength) {
                H.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${g.length}`);
                return;
              }
              let C = this.nacl.secretbox.open(h, g, this.key);
              if (C === null) {
                H.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (I, M) => {
                  if (I) {
                    H.error(`Failed to make a request to the authEndpoint: ${M}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                  }
                  if (C = this.nacl.secretbox.open(h, g, this.key), C === null) {
                    H.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                  }
                  this.emit(t, this.getDataToEmit(w));
                });
                return;
              }
              this.emit(t, this.getDataToEmit(w));
            }
            getDataToEmit(o) {
              let c = Object(ho.decode)(o);
              try {
                return JSON.parse(a);
              } catch {
                return a;
              }
            }
          }
          class po extends me {
            constructor(o, c) {
              super(), this.state = "initialized", this.connection = null, this.key = o, this.options = c, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
              var h = x.getNetwork();
              h.bind("online", () => {
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
            retryIn(o) {
              this.timeline.info({ action: "retry", delay: o }), o > 0 && this.emit("connecting_in", Math.round(o / 1e3)), this.retryTimer = new he(o || 0, () => {
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
            buildConnectionCallbacks(o) {
              return J({}, o, {
                message: (c) => {
                  this.resetActivityCheck(), this.emit("message", c);
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
            buildHandshakeCallbacks(o) {
              return J({}, o, {
                connected: (c) => {
                  this.activityTimeout = Math.min(this.options.activityTimeout, c.activityTimeout, c.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(c.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
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
            updateState(o, c) {
              var h = this.state;
              if (this.state = o, h !== o) {
                var g = o;
                g === "connected" && (g += " with new socket ID " + c.socket_id), H.debug("State changed", h + " -> " + g), this.timeline.info({ state: o, params: c }), this.emit("state_change", { previous: h, current: o }), this.emit(o, c);
              }
            }
            shouldRetry() {
              return this.state === "connecting" || this.state === "connected";
            }
          }
          class go {
            constructor() {
              this.channels = {};
            }
            add(o, c) {
              return this.channels[o] || (this.channels[o] = mo(o, c)), this.channels[o];
            }
            all() {
              return Ii(this.channels);
            }
            find(t) {
              return this.channels[t];
            }
            remove(t) {
              var a = this.channels[t];
              return delete this.channels[t], a;
            }
            disconnect() {
              ge(this.channels, function(o) {
                o.disconnect();
              });
            }
          }
          function mo(d, o) {
            if (d.indexOf("private-encrypted-") === 0) {
              if (o.config.nacl)
                return ye.createEncryptedChannel(d, o, o.config.nacl);
              let c = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", h = v.buildLogSuffix("encryptedChannelSupport");
              throw new R(`${c}. ${h}`);
            } else {
              if (d.indexOf("private-") === 0)
                return ye.createPrivateChannel(d, o);
              if (d.indexOf("presence-") === 0)
                return ye.createPresenceChannel(d, o);
              if (d.indexOf("#") === 0)
                throw new k('Cannot create a channel with name "' + d + '".');
              return ye.createChannel(d, o);
            }
          }
          var yo = {
            createChannels() {
              return new go();
            },
            createConnectionManager(d, o) {
              return new po(d, o);
            },
            createChannel(d, o) {
              return new en(d, o);
            },
            createPrivateChannel(d, o) {
              return new tn(d, o);
            },
            createPresenceChannel(d, o) {
              return new uo(d, o);
            },
            createEncryptedChannel(d, o, c) {
              return new fo(d, o, c);
            },
            createTimelineSender(d, o) {
              return new ao(d, o);
            },
            createHandshake(d, o) {
              return new oo(d, o);
            },
            createAssistantToTheTransportManager(d, o, c) {
              return new ro(d, o, c);
            }
          }, ye = yo;
          class gr {
            constructor(o) {
              this.options = o || {}, this.livesLeft = this.options.lives || 1 / 0;
            }
            getAssistant(o) {
              return ye.createAssistantToTheTransportManager(this, o, {
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
          class Se {
            constructor(o, c) {
              this.strategies = o, this.loop = !!c.loop, this.failFast = !!c.failFast, this.timeout = c.timeout, this.timeoutLimit = c.timeoutLimit;
            }
            isSupported() {
              return cr(this.strategies, V.method("isSupported"));
            }
            connect(o, c) {
              var h = this.strategies, g = 0, C = this.timeout, I = null, M = (N, D) => {
                D ? c(null, D) : (g = g + 1, this.loop && (g = g % h.length), g < h.length ? (C && (C = C * 2, this.timeoutLimit && (C = Math.min(C, this.timeoutLimit))), I = this.tryStrategy(h[g], o, { timeout: C, failFast: this.failFast }, M)) : c(!0));
              };
              return I = this.tryStrategy(h[g], o, { timeout: C, failFast: this.failFast }, M), {
                abort: function() {
                  I.abort();
                },
                forceMinPriority: function(N) {
                  o = N, I && I.forceMinPriority(N);
                }
              };
            }
            tryStrategy(o, c, h, g) {
              var C = null, I = null;
              return h.timeout > 0 && (C = new he(h.timeout, function() {
                I.abort(), g(!0);
              })), I = o.connect(c, function(M, N) {
                M && C && C.isRunning() && !h.failFast || (C && C.ensureAborted(), g(M, N));
              }), {
                abort: function() {
                  C && C.ensureAborted(), I.abort();
                },
                forceMinPriority: function(M) {
                  I.forceMinPriority(M);
                }
              };
            }
          }
          class rn {
            constructor(o) {
              this.strategies = o;
            }
            isSupported() {
              return cr(this.strategies, V.method("isSupported"));
            }
            connect(o, c) {
              return wo(this.strategies, o, function(h, g) {
                return function(C, I) {
                  if (g[h].error = C, C) {
                    vo(g) && c(!0);
                    return;
                  }
                  Ke(g, function(M) {
                    M.forceMinPriority(I.transport.priority);
                  }), c(null, I);
                };
              });
            }
          }
          function wo(d, o, c) {
            var h = ir(d, function(g, C, I, M) {
              return g.connect(o, c(C, M));
            });
            return {
              abort: function() {
                Ke(h, bo);
              },
              forceMinPriority: function(g) {
                Ke(h, function(C) {
                  C.forceMinPriority(g);
                });
              }
            };
          }
          function vo(d) {
            return Li(d, function(o) {
              return !!o.error;
            });
          }
          function bo(d) {
            !d.error && !d.aborted && (d.abort(), d.aborted = !0);
          }
          class ko {
            constructor(o, c, h) {
              this.strategy = o, this.transports = c, this.ttl = h.ttl || 1800 * 1e3, this.usingTLS = h.useTLS, this.timeline = h.timeline;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(o, c) {
              var h = this.usingTLS, g = _o(h), C = g && g.cacheSkipCount ? g.cacheSkipCount : 0, I = [this.strategy];
              if (g && g.timestamp + this.ttl >= V.now()) {
                var M = this.transports[g.transport];
                M && (["ws", "wss"].includes(g.transport) || C > 3 ? (this.timeline.info({
                  cached: !0,
                  transport: g.transport,
                  latency: g.latency
                }), I.push(new Se([M], {
                  timeout: g.latency * 2 + 1e3,
                  failFast: !0
                }))) : w++);
              }
              var N = V.now(), D = I.pop().connect(o, function B(q, Rt) {
                q ? (mr(h), I.length > 0 ? (N = V.now(), D = I.pop().connect(o, B)) : c(q)) : (So(h, Rt.transport.name, V.now() - N, C), c(null, Rt));
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
          function sn(d) {
            return "pusherTransport" + (d ? "TLS" : "NonTLS");
          }
          function _o(d) {
            var o = x.getLocalStorage();
            if (o)
              try {
                var c = o[sn(d)];
                if (c)
                  return JSON.parse(c);
              } catch {
                mr(d);
              }
            return null;
          }
          function So(d, o, c, h) {
            var g = x.getLocalStorage();
            if (g)
              try {
                g[sn(d)] = Tt({
                  timestamp: V.now(),
                  transport: o,
                  latency: c,
                  cacheSkipCount: h
                });
              } catch {
              }
          }
          function mr(d) {
            var o = x.getLocalStorage();
            if (o)
              try {
                delete o[sn(d)];
              } catch {
              }
          }
          class It {
            constructor(o, { delay: c }) {
              this.strategy = o, this.options = { delay: c };
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(o, c) {
              var h = this.strategy, g, C = new he(this.options.delay, function() {
                g = h.connect(o, c);
              });
              return {
                abort: function() {
                  C.ensureAborted(), g && g.abort();
                },
                forceMinPriority: function(I) {
                  o = I, g && g.forceMinPriority(I);
                }
              };
            }
          }
          class Je {
            constructor(o, c, h) {
              this.test = o, this.trueBranch = c, this.falseBranch = h;
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
          class Co {
            constructor(o) {
              this.strategy = o;
            }
            isSupported() {
              return this.strategy.isSupported();
            }
            connect(o, c) {
              var h = this.strategy.connect(o, function(g, C) {
                C && h.abort(), c(g, C);
              });
              return d;
            }
          }
          function Xe(d) {
            return function() {
              return d.isSupported();
            };
          }
          var To = function(d, o, c) {
            var h = {};
            function g(Ir, Ca, Ta, Aa, Ia) {
              var Er = c(d, Ir, Ca, Ta, Aa, Ia);
              return h[Ir] = Er, Er;
            }
            var C = Object.assign({}, o, {
              hostNonTLS: d.wsHost + ":" + d.wsPort,
              hostTLS: d.wsHost + ":" + d.wssPort,
              httpPath: d.wsPath
            }), I = Object.assign({}, C, {
              useTLS: !0
            }), M = Object.assign({}, o, {
              hostNonTLS: d.httpHost + ":" + d.httpPort,
              hostTLS: d.httpHost + ":" + d.httpsPort,
              httpPath: d.httpPath
            }), N = {
              loop: !0,
              timeout: 15e3,
              timeoutLimit: 6e4
            }, D = new gr({
              minPingDelay: 1e4,
              maxPingDelay: d.activityTimeout
            }), B = new gr({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: d.activityTimeout
            }), q = g("ws", "ws", 3, C, D), Rt = g("wss", "ws", 3, I, D), va = g("sockjs", "sockjs", 1, M), kr = g("xhr_streaming", "xhr_streaming", 1, M, B), ba = g("xdr_streaming", "xdr_streaming", 1, M, B), _r = g("xhr_polling", "xhr_polling", 1, M), ka = g("xdr_polling", "xdr_polling", 1, M), Sr = new Se([q], N), _a = new Se([Rt], N), Sa = new Se([va], N), Cr = new Se([
              new Je(Xe(kr), kr, ba)
            ], N), Tr = new Se([
              new Je(Xe(_r), _r, ka)
            ], N), Ar = new Se([
              new Je(Xe(Cr), new rn([
                Cr,
                new It(Tr, { delay: 4e3 })
              ]), Tr)
            ], N), ln = new Je(Xe(Ar), Ar, Sa), un;
            return o.useTLS ? un = new rn([
              Sr,
              new It(ln, { delay: 2e3 })
            ]) : un = new rn([
              Sr,
              new It(_a, { delay: 2e3 }),
              new It(ln, { delay: 5e3 })
            ]), new ko(new Co(new Je(Xe(q), un, ln)), h, {
              ttl: 18e5,
              timeline: t.timeline,
              useTLS: t.useTLS
            });
          }, Ao = To, Io = function() {
            var d = this;
            d.timeline.info(d.buildTimelineMessage({
              transport: d.name + (d.options.useTLS ? "s" : "")
            })), d.hooks.isInitialized() ? d.changeState("initialized") : d.hooks.file ? (d.changeState("initializing"), m.load(d.hooks.file, { useTLS: d.options.useTLS }, function(o, c) {
              d.hooks.isInitialized() ? (d.changeState("initialized"), c(!0)) : (o && d.onError(o), d.onClose(), c(!1));
            })) : d.onClose();
          }, Eo = {
            getRequest: function(d) {
              var o = new window.XDomainRequest();
              return o.ontimeout = function() {
                d.emit("error", new S()), d.close();
              }, o.onerror = function(c) {
                d.emit("error", c), d.close();
              }, o.onprogress = function() {
                o.responseText && o.responseText.length > 0 && d.onChunk(200, o.responseText);
              }, o.onload = function() {
                o.responseText && o.responseText.length > 0 && d.onChunk(200, o.responseText), d.emit("finished", 200), d.close();
              }, o;
            },
            abortRequest: function(d) {
              d.ontimeout = d.onerror = d.onprogress = d.onload = null, d.abort();
            }
          }, Ro = Eo;
          const Lo = 256 * 1024;
          class Mo extends me {
            constructor(o, c, h) {
              super(), this.hooks = o, this.method = c, this.url = h;
            }
            start(t) {
              this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                this.close();
              }, x.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(o);
            }
            close() {
              this.unloader && (x.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
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
            isBufferTooLong(o) {
              return this.position === o.length && o.length > Lo;
            }
          }
          var on;
          (function(d) {
            d[d.CONNECTING = 0] = "CONNECTING", d[d.OPEN = 1] = "OPEN", d[d.CLOSED = 3] = "CLOSED";
          })(on || (on = {}));
          var Ce = on, Po = 1;
          class No {
            constructor(o, c) {
              this.hooks = o, this.session = wr(1e3) + "/" + Bo(8), this.location = xo(c), this.readyState = Ce.CONNECTING, this.openStream();
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
            sendRaw(o) {
              if (this.readyState === Ce.OPEN)
                try {
                  return x.createSocketRequest("POST", yr(Oo(this.location, this.session))).start(o), !0;
                } catch {
                  return !1;
                }
              else
                return !1;
            }
            reconnect() {
              this.closeStream(), this.openStream();
            }
            onClose(o, c, h) {
              this.closeStream(), this.readyState = Ce.CLOSED, this.onclose && this.onclose({
                code: o,
                reason: c,
                wasClean: h
              });
            }
            onChunk(o) {
              if (o.status === 200) {
                this.readyState === Ce.OPEN && this.onActivity();
                var c, h = o.data.slice(0, 1);
                switch (h) {
                  case "o":
                    a = JSON.parse(t.data.slice(1) || "{}"), this.onOpen(a);
                    break;
                  case "a":
                    c = JSON.parse(o.data.slice(1) || "[]");
                    for (var g = 0; g < c.length; g++)
                      this.onEvent(c[g]);
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
            onOpen(o) {
              this.readyState === Ce.CONNECTING ? (o && o.hostname && (this.location.base = Do(this.location.base, o.hostname)), this.readyState = Ce.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
            }
            onEvent(o) {
              this.readyState === Ce.OPEN && this.onmessage && this.onmessage({ data: o });
            }
            onActivity() {
              this.onactivity && this.onactivity();
            }
            onError(t) {
              this.onerror && this.onerror(t);
            }
            openStream() {
              this.stream = x.createSocketRequest("POST", yr(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (o) => {
                this.onChunk(o);
              }), this.stream.bind("finished", (o) => {
                this.hooks.onFinished(this, o);
              }), this.stream.bind("buffer_too_long", () => {
                this.reconnect();
              });
              try {
                this.stream.start();
              } catch (o) {
                V.defer(() => {
                  this.onError(o), this.onClose(1006, "Could not start streaming", !1);
                });
              }
            }
            closeStream() {
              this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
            }
          }
          function xo(d) {
            var o = /([^\?]*)\/*(\??.*)/.exec(d);
            return {
              base: t[1],
              queryString: t[2]
            };
          }
          function Oo(d, o) {
            return d.base + "/" + o + "/xhr_send";
          }
          function yr(d) {
            var o = d.indexOf("?") === -1 ? "?" : "&";
            return d + o + "t=" + +/* @__PURE__ */ new Date() + "&n=" + Po++;
          }
          function Do(d, o) {
            var c = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(d);
            return c[1] + o + c[3];
          }
          function wr(d) {
            return x.randomInt(d);
          }
          function Bo(d) {
            for (var o = [], c = 0; c < d; c++)
              o.push(wr(32).toString(32));
            return o.join("");
          }
          var Fo = No, $o = {
            getReceiveURL: function(d, o) {
              return d.base + "/" + o + "/xhr_streaming" + d.queryString;
            },
            onHeartbeat: function(d) {
              d.sendRaw("[]");
            },
            sendHeartbeat: function(d) {
              d.sendRaw("[]");
            },
            onFinished: function(d, o) {
              d.onClose(1006, "Connection interrupted (" + o + ")", !1);
            }
          }, Uo = $o, Ho = {
            getReceiveURL: function(d, o) {
              return d.base + "/" + o + "/xhr" + d.queryString;
            },
            onHeartbeat: function() {
            },
            sendHeartbeat: function(d) {
              d.sendRaw("[]");
            },
            onFinished: function(d, o) {
              o === 200 ? d.reconnect() : d.onClose(1006, "Connection interrupted (" + o + ")", !1);
            }
          }, jo = Ho, Go = {
            getRequest: function(d) {
              var o = x.getXHRAPI(), c = new o();
              return c.onreadystatechange = c.onprogress = function() {
                switch (c.readyState) {
                  case 3:
                    c.responseText && c.responseText.length > 0 && d.onChunk(c.status, c.responseText);
                    break;
                  case 4:
                    c.responseText && c.responseText.length > 0 && d.onChunk(c.status, c.responseText), d.emit("finished", c.status), d.close();
                    break;
                }
              }, a;
            },
            abortRequest: function(d) {
              d.onreadystatechange = null, d.abort();
            }
          }, qo = Go, zo = {
            createStreamingSocket(d) {
              return this.createSocket(Uo, d);
            },
            createPollingSocket(d) {
              return this.createSocket(jo, d);
            },
            createSocket(d, o) {
              return new Fo(d, o);
            },
            createXHR(d, o) {
              return this.createRequest(qo, d, o);
            },
            createRequest(d, o, c) {
              return new Mo(d, o, c);
            }
          }, vr = zo;
          vr.createXDR = function(d, o) {
            return this.createRequest(Ro, d, o);
          };
          var Vo = vr, Wo = {
            nextAuthCallbackID: 1,
            auth_callbacks: {},
            ScriptReceivers: a,
            DependenciesReceivers: p,
            getDefaultStrategy: Ao,
            Transports: eo,
            transportConnectionInitializer: Io,
            HTTPFactory: Vo,
            TimelineTransport: Hi,
            getXHRAPI() {
              return window.XMLHttpRequest;
            },
            getWebSocketAPI() {
              return window.WebSocket || window.MozWebSocket;
            },
            setup(d) {
              window.Pusher = d;
              var o = () => {
                this.onDocumentBody(d.ready);
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
              return { ajax: j, jsonp: Di };
            },
            onDocumentBody(d) {
              document.body ? d() : setTimeout(() => {
                this.onDocumentBody(d);
              }, 0);
            },
            createJSONPRequest(d, o) {
              return new Fi(d, o);
            },
            createScriptRequest(d) {
              return new Bi(d);
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
              var d = this.getXHRAPI();
              return new d();
            },
            createMicrosoftXHR() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            },
            getNetwork() {
              return no;
            },
            createWebSocket(d) {
              var o = this.getWebSocketAPI();
              return new o(d);
            },
            createSocketRequest(d, o) {
              if (this.isXHRSupported())
                return this.HTTPFactory.createXHR(d, o);
              if (this.isXDRSupported(o.indexOf("https:") === 0))
                return this.HTTPFactory.createXDR(d, o);
              throw "Cross-origin HTTP requests are not supported";
            },
            isXHRSupported() {
              var d = this.getXHRAPI();
              return !!d && new d().withCredentials !== void 0;
            },
            isXDRSupported(d) {
              var o = d ? "https:" : "http:", c = this.getProtocol();
              return !!window.XDomainRequest && c === o;
            },
            addUnloadListener(d) {
              window.addEventListener !== void 0 ? window.addEventListener("unload", d, !1) : window.attachEvent !== void 0 && window.attachEvent("onunload", d);
            },
            removeUnloadListener(d) {
              window.addEventListener !== void 0 ? window.removeEventListener("unload", d, !1) : window.detachEvent !== void 0 && window.detachEvent("onunload", d);
            },
            randomInt(d) {
              return Math.floor(function() {
                return (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
              }() * d);
            }
          }, x = Wo, an;
          (function(d) {
            d[d.ERROR = 3] = "ERROR", d[d.INFO = 6] = "INFO", d[d.DEBUG = 7] = "DEBUG";
          })(an || (an = {}));
          var Et = an;
          class Ko {
            constructor(o, c, h) {
              this.key = o, this.session = c, this.events = [], this.options = h || {}, this.sent = 0, this.uniqueID = 0;
            }
            log(o, c) {
              o <= this.options.level && (this.events.push(J({}, c, { timestamp: V.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
            }
            error(o) {
              this.log(Et.ERROR, o);
            }
            info(o) {
              this.log(Et.INFO, o);
            }
            debug(o) {
              this.log(Et.DEBUG, o);
            }
            isEmpty() {
              return this.events.length === 0;
            }
            send(o, c) {
              var h = J({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
              }, this.options.params);
              return this.events = [], o(h, (g, C) => {
                g || this.sent++, c && c(g, C);
              }), !0;
            }
            generateUniqueID() {
              return this.uniqueID++, this.uniqueID;
            }
          }
          class Jo {
            constructor(o, c, h, g) {
              this.name = o, this.priority = c, this.transport = h, this.options = g || {};
            }
            isSupported() {
              return this.transport.isSupported({
                useTLS: this.options.useTLS
              });
            }
            connect(t, a) {
              if (this.isSupported()) {
                if (this.priority < o)
                  return br(new A(), c);
              } else return br(new P(), c);
              var h = !1, g = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), C = null, I = function() {
                g.unbind("initialized", I), g.connect();
              }, M = function() {
                C = ye.createHandshake(g, function(q) {
                  h = !0, B(), c(null, q);
                });
              }, N = function(q) {
                B(), c(q);
              }, D = function() {
                B();
                var q;
                q = Tt(g), c(new E(q));
              }, B = function() {
                g.unbind("initialized", I), g.unbind("open", M), g.unbind("error", N), g.unbind("closed", D);
              };
              return g.bind("initialized", I), g.bind("open", M), g.bind("error", N), g.bind("closed", D), g.initialize(), {
                abort: () => {
                  h || (B(), C ? C.close() : g.close());
                },
                forceMinPriority: (q) => {
                  h || this.priority < q && (C ? C.close() : g.close());
                }
              };
            }
          }
          function br(d, o) {
            return V.defer(function() {
              o(d);
            }), {
              abort: function() {
              },
              forceMinPriority: function() {
              }
            };
          }
          const { Transports: Xo } = x;
          var Yo = function(d, o, c, h, g, C) {
            var I = Xo[c];
            if (!I)
              throw new L(c);
            var M = (!d.enabledTransports || rr(d.enabledTransports, o) !== -1) && (!d.disabledTransports || rr(d.disabledTransports, o) === -1), N;
            return M ? (g = Object.assign({ ignoreNullOrigin: d.ignoreNullOrigin }, g), N = new Jo(o, h, C ? C.getAssistant(I) : I, g)) : N = Qo, N;
          }, Qo = {
            isSupported: function() {
              return !1;
            },
            connect: function(d, o) {
              var c = V.defer(function() {
                o(new P());
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
          function Zo(d) {
            if (d == null)
              throw "You must pass an options object";
            if (d.cluster == null)
              throw "Options object must provide a cluster";
            "disableStats" in d && H.warn("The disableStats option is deprecated in favor of enableStats");
          }
          const ea = (d, o) => {
            var c = "socket_id=" + encodeURIComponent(d.socketId);
            for (var h in o.params)
              c += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(o.params[h]);
            if (o.paramsProvider != null) {
              let g = o.paramsProvider();
              for (var h in g)
                c += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(g[h]);
            }
            return a;
          };
          var ta = (d) => {
            if (typeof x.getAuthorizers()[d.transport] > "u")
              throw `'${d.transport}' is not a recognized auth transport`;
            return (o, c) => {
              const h = ea(o, d);
              x.getAuthorizers()[d.transport](x, h, d, T.UserAuthentication, c);
            };
          };
          const na = (d, o) => {
            var c = "socket_id=" + encodeURIComponent(d.socketId);
            c += "&channel_name=" + encodeURIComponent(d.channelName);
            for (var h in o.params)
              c += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(o.params[h]);
            if (o.paramsProvider != null) {
              let g = o.paramsProvider();
              for (var h in g)
                c += "&" + encodeURIComponent(h) + "=" + encodeURIComponent(g[h]);
            }
            return a;
          };
          var ra = (d) => {
            if (typeof x.getAuthorizers()[d.transport] > "u")
              throw `'${d.transport}' is not a recognized auth transport`;
            return (o, c) => {
              const h = na(o, d);
              x.getAuthorizers()[d.transport](x, h, d, T.ChannelAuthorization, c);
            };
          };
          const sa = (d, o, c) => {
            const h = {
              authTransport: o.transport,
              authEndpoint: o.endpoint,
              auth: {
                params: t.params,
                headers: t.headers
              }
            };
            return (g, C) => {
              const I = d.channel(g.channelName);
              c(I, h).authorize(g.socketId, C);
            };
          };
          function ia(d, o) {
            let c = {
              activityTimeout: d.activityTimeout || u.activityTimeout,
              cluster: d.cluster,
              httpPath: d.httpPath || u.httpPath,
              httpPort: d.httpPort || u.httpPort,
              httpsPort: d.httpsPort || u.httpsPort,
              pongTimeout: d.pongTimeout || u.pongTimeout,
              statsHost: d.statsHost || u.stats_host,
              unavailableTimeout: d.unavailableTimeout || u.unavailableTimeout,
              wsPath: d.wsPath || u.wsPath,
              wsPort: d.wsPort || u.wsPort,
              wssPort: d.wssPort || u.wssPort,
              enableStats: ua(d),
              httpHost: oa(d),
              useTLS: la(d),
              wsHost: aa(d),
              userAuthenticator: da(d),
              channelAuthorizer: fa(d, o)
            };
            return "disabledTransports" in d && (c.disabledTransports = d.disabledTransports), "enabledTransports" in d && (c.enabledTransports = d.enabledTransports), "ignoreNullOrigin" in d && (c.ignoreNullOrigin = d.ignoreNullOrigin), "timelineParams" in d && (c.timelineParams = d.timelineParams), "nacl" in d && (c.nacl = d.nacl), c;
          }
          function oa(d) {
            return d.httpHost ? d.httpHost : d.cluster ? `sockjs-${d.cluster}.pusher.com` : u.httpHost;
          }
          function aa(d) {
            return d.wsHost ? d.wsHost : ca(d.cluster);
          }
          function ca(d) {
            return `ws-${d}.pusher.com`;
          }
          function la(d) {
            return x.getProtocol() === "https:" ? !0 : d.forceTLS !== !1;
          }
          function ua(d) {
            return "enableStats" in d ? d.enableStats : "disableStats" in d ? !d.disableStats : !1;
          }
          function da(d) {
            const o = Object.assign(Object.assign({}, u.userAuthentication), d.userAuthentication);
            return "customHandler" in o && o.customHandler != null ? o.customHandler : ta(o);
          }
          function ha(d, o) {
            let c;
            return "channelAuthorization" in d ? c = Object.assign(Object.assign({}, u.channelAuthorization), d.channelAuthorization) : (c = {
              transport: d.authTransport || u.authTransport,
              endpoint: d.authEndpoint || u.authEndpoint
            }, "auth" in d && ("params" in d.auth && (c.params = d.auth.params), "headers" in d.auth && (c.headers = d.auth.headers)), "authorizer" in d && (c.customHandler = sa(o, c, d.authorizer))), c;
          }
          function fa(d, o) {
            const c = ha(d, o);
            return "customHandler" in c && c.customHandler != null ? c.customHandler : ra(c);
          }
          class pa extends me {
            constructor(o) {
              super(function(c, h) {
                H.debug(`No callbacks on watchlist events for ${c}`);
              }), this.pusher = o, this.bindWatchlistInternalEvent();
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
          function ga() {
            let d, o;
            return { promise: new Promise((h, g) => {
              d = h, o = g;
            }), resolve: d, reject: o };
          }
          var ma = ga;
          class ya extends me {
            constructor(o) {
              super(function(c, h) {
                H.debug("No callbacks on user for " + c);
              }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (c, h) => {
                if (c) {
                  H.warn(`Error during signin: ${c}`), this._cleanup();
                  return;
                }
                this.pusher.send_event("pusher:signin", {
                  auth: d.auth,
                  user_data: d.user_data
                });
              }, this.pusher = o, this.pusher.connection.bind("state_change", ({ previous: c, current: h }) => {
                c !== "connected" && h === "connected" && this._signin(), c === "connected" && h !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
              }), this.watchlist = new pa(o), this.pusher.connection.bind("message", (c) => {
                var h = c.event;
                h === "pusher:signin_success" && this._onSigninSuccess(c.data), this.serverToUserChannel && this.serverToUserChannel.name === c.channel && this.serverToUserChannel.handleEvent(c);
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
                H.error(`Failed parsing user data after signin: ${o.user_data}`), this._cleanup();
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
              this.serverToUserChannel = new en(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((c, h) => {
                c.indexOf("pusher_internal:") === 0 || c.indexOf("pusher:") === 0 || this.emit(c, h);
              }), o(this.serverToUserChannel);
            }
            _cleanup() {
              this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
            }
            _newSigninPromiseIfNeeded() {
              if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                return;
              const { promise: o, resolve: c } = ma();
              o.done = !1;
              const h = () => {
                o.done = !0;
              };
              t.then(d).catch(d), this.signinDonePromise = t, this._signinDoneResolve = a;
            }
          }
          class X {
            static ready() {
              X.isReady = !0;
              for (var o = 0, c = X.instances.length; o < c; o++)
                X.instances[o].connect();
            }
            static getClientFeatures() {
              return sr(ar({ ws: x.Transports.ws }, function(o) {
                return o.isSupported({});
              }));
            }
            constructor(o, c) {
              wa(o), Zo(c), this.key = o, this.config = ia(c, this), this.channels = ye.createChannels(), this.global_emitter = new me(), this.sessionID = x.randomInt(1e9), this.timeline = new Ko(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: X.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: Et.INFO,
                version: u.VERSION
              }), this.config.enableStats && (this.timelineSender = ye.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: "/timeline/v2/" + x.TimelineTransport.name
              }));
              var h = (g) => x.getDefaultStrategy(this.config, g, Yo);
              this.connection = ye.createConnectionManager(this.key, {
                getStrategy: h,
                timeline: this.timeline,
                activityTimeout: this.config.activityTimeout,
                pongTimeout: this.config.pongTimeout,
                unavailableTimeout: this.config.unavailableTimeout,
                useTLS: !!this.config.useTLS
              }), this.connection.bind("connected", () => {
                this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
              }), this.connection.bind("message", (g) => {
                var C = g.event, I = C.indexOf("pusher_internal:") === 0;
                if (g.channel) {
                  var M = this.channel(g.channel);
                  M && M.handleEvent(g);
                }
                I || this.global_emitter.emit(g.event, g.data);
              }), this.connection.bind("connecting", () => {
                this.channels.disconnect();
              }), this.connection.bind("disconnected", () => {
                this.channels.disconnect();
              }), this.connection.bind("error", (g) => {
                H.warn(g);
              }), X.instances.push(this), this.timeline.info({ instances: X.instances.length }), this.user = new ya(this), X.isReady && this.connect();
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
          X.instances = [], X.isReady = !1, X.logToConsole = !1, X.Runtime = x, X.ScriptReceivers = x.ScriptReceivers, X.DependenciesReceivers = x.DependenciesReceivers, X.auth_callbacks = x.auth_callbacks;
          var cn = r.default = X;
          function wa(d) {
            if (d == null)
              throw "You must pass your app key when you instantiate Pusher.";
          }
          x.setup(X);
        }
        /******/
      ])
    );
  });
})(Xr);
var Ma = Xr.exports;
const Pa = /* @__PURE__ */ La(Ma), w = "cpr-agent", Yr = "itdsiqtx8cpskowawl1p", Be = "https://agent.surrealdisco.co.uk";
function Qr() {
  var e;
  return (((e = game == null ? void 0 : game.settings) == null ? void 0 : e.get(w, "apiUrl")) || Be).trim().replace(/\/$/, "") || Be;
}
function Na() {
  try {
    return new URL(Qr()).origin;
  } catch {
    return new URL(ge).origin;
  }
}
const Ye = {
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
}, xa = [6, 12, 25, 50, 100, 200, 400, 800], Rr = {
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
function Oa(n) {
  var e, t;
  return Rr[(e = n == null ? void 0 : n.system) == null ? void 0 : e.weaponType] || Rr[(t = n == null ? void 0 : n.system) == null ? void 0 : t.variety] || "Pistol";
}
function Da(n, e) {
  const t = xa.findIndex((s) => e <= s);
  let r = t !== -1 ? Ye[n][t] : 99;
  return Array.isArray(Ye[n]) && typeof Ye[n][0] == "string" && (r = Ye[n][Math.min(t !== -1 ? t : 0, Ye[n].length - 1)]), r;
}
function Ba(n) {
  const e = String(n).split(" ").join(""), t = (r) => r.charAt(0).toLowerCase() + r.slice(1);
  return t(n === "Conceal/Reveal Object" || n === "Paint/Draw/Sculpt" || n === "Resist Torture/Drugs" ? e.split("/").join("Or") : n === "Language (Streetslang)" ? e.split("(").join("").split(")").join("") : e.split("/").join("And").split("&").join("And"));
}
function Fa(n, e) {
  var r, s;
  const t = ["allActions", "allActionsSpeech", "allActionsHands"];
  if (!e) return t;
  if (t.push("universalAttack"), n && n !== "None") {
    const i = Ba(n);
    t.push(i, `${i}Hearing`, `${i}Sight`);
  }
  return ((i = e.system) == null ? void 0 : i.isRanged) === !0 && r.push("ranged", "singleShot"), ((n = e.system) == null ? void 0 : n.isRanged) === !1 && r.push("melee"), r;
}
const Lr = {
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
function $a(n) {
  const e = String(n).match(/^system\.stats\.(\w+)\.value$/);
  if (e) return e[1].toUpperCase();
  const t = String(n).replace(/^bonuses\./, "");
  if (Lr[t]) return Lr[t];
  const r = t.replace(/([A-Z])/g, " $1").toLowerCase().trim();
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function tt(n) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tt(n);
}
function W(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ua(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function K(n, e, t) {
  return e && Ua(n.prototype, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), o;
}
function at() {
  return at = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i]);
    }
    return n;
  }, at.apply(this, arguments);
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
  }), e && wn(n, e);
}
function xt(n) {
  return xt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, xt(n);
}
function wn(n, e) {
  return wn = Object.setPrototypeOf || function(r, s) {
    return r.__proto__ = s, r;
  }, wn(n, e);
}
function Ha() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ja(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Ga(n, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ja(n);
}
function se(n) {
  var e = Ha();
  return function() {
    var r = xt(n), s;
    if (e) {
      var i = xt(this).constructor;
      s = Reflect.construct(r, arguments, i);
    } else
      s = r.apply(this, arguments);
    return Ga(this, s);
  };
}
var Pn = /* @__PURE__ */ function() {
  function n() {
    W(this, n);
  }
  return K(n, [{
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
  }]), n;
}(), Zr = /* @__PURE__ */ function() {
  function n(e) {
    W(this, n), this.namespace = e;
  }
  return K(n, [{
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
function qa(n) {
  try {
    new o();
  } catch (e) {
    if (e.message.includes("is not a constructor")) return !1;
  }
  return !0;
}
var Nn = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t(r, s, i) {
    var a;
    return W(this, t), a = e.call(this), a.name = s, a.pusher = r, a.options = i, a.eventFormatter = new Zr(a.options.namespace), a.subscribe(), a;
  }
  return K(t, [{
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
    value: function(s) {
      var i = this;
      return this.subscription.bind_global(function(a, l) {
        if (!a.startsWith("pusher:")) {
          var u = i.options.namespace.replace(/\./g, "\\"), f = a.startsWith(u) ? a.substring(u.length + 1) : "." + a;
          s(f, l);
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
  }]), t;
}(Pn), es = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), s), this;
      }
    )
  }]), t;
}(Nn), za = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this.pusher.channels.channels[this.name].trigger("client-".concat(n), s), this;
      }
    )
  }]), t;
}(Nn), Va = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
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
  }]), t;
}(es), ts = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t(r, s, i) {
    var a;
    return W(this, t), a = e.call(this), a.events = {}, a.listeners = {}, a.name = s, a.socket = r, a.options = i, a.eventFormatter = new Zr(a.options.namespace), a.subscribe(), a;
  }
  return K(t, [{
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
    value: function(s, i) {
      var a = this;
      return this.listeners[s] = this.listeners[s] || [], this.events[s] || (this.events[s] = function(l, u) {
        a.name === l && a.listeners[s] && a.listeners[s].forEach(function(f) {
          return f(u);
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
  }]), t;
}(Pn), ns = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
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
  }]), t;
}(ts), Wa = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
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
  }]), t;
}(ns), Ot = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
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
  }]), t;
}(Pn), rs = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this;
      }
    )
  }]), t;
}(Ot), Ka = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
    key: "whisper",
    value: (
      /**
       * Send a whisper event to other clients in the channel.
       */
      function(n, s) {
        return this;
      }
    )
  }]), t;
}(Ot), Ja = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    return W(this, t), e.apply(this, arguments);
  }
  return K(t, [{
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
  }]), t;
}(rs), xn = /* @__PURE__ */ function() {
  function n(e) {
    W(this, n), this._defaultOptions = {
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
  return K(n, [{
    key: "setOptions",
    value: function(t) {
      this.options = at(this._defaultOptions, t);
      var r = this.csrfToken();
      return r && (this.options.auth.headers["X-CSRF-TOKEN"] = r, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = r), r = this.options.bearerToken, r && (this.options.auth.headers.Authorization = "Bearer " + r, this.options.userAuthentication.headers.Authorization = "Bearer " + r), t;
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
  }]), n;
}(), Mr = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    var r;
    return W(this, t), r = e.apply(this, arguments), r.channels = {}, r;
  }
  return K(t, [{
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
    value: function(s) {
      return this.channels[s] || (this.channels[s] = new Nn(this.pusher, s, this.options)), this.channels[s];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(s) {
      return this.channels["private-" + s] || (this.channels["private-" + s] = new es(this.pusher, "private-" + s, this.options)), this.channels["private-" + s];
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(s) {
      return this.channels["private-encrypted-" + s] || (this.channels["private-encrypted-" + s] = new za(this.pusher, "private-encrypted-" + s, this.options)), this.channels["private-encrypted-" + s];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(s) {
      return this.channels["presence-" + s] || (this.channels["presence-" + s] = new Va(this.pusher, "presence-" + s, this.options)), this.channels["presence-" + s];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(s) {
      var i = this, a = [s, "private-" + s, "private-encrypted-" + s, "presence-" + s];
      a.forEach(function(l, u) {
        i.leaveChannel(l);
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
  }]), t;
}(xn), Pr = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    var r;
    return W(this, t), r = e.apply(this, arguments), r.channels = {}, r;
  }
  return K(t, [{
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
    value: function(s) {
      return this.channels[s] || (this.channels[s] = new ts(this.socket, s, this.options)), this.channels[s];
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(s) {
      return this.channels["private-" + s] || (this.channels["private-" + s] = new ns(this.socket, "private-" + s, this.options)), this.channels["private-" + s];
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(s) {
      return this.channels["presence-" + s] || (this.channels["presence-" + s] = new Wa(this.socket, "presence-" + s, this.options)), this.channels["presence-" + s];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */
  }, {
    key: "leave",
    value: function(s) {
      var i = this, a = [s, "private-" + s, "presence-" + s];
      a.forEach(function(l) {
        i.leaveChannel(l);
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
  }]), t;
}(xn), Xa = /* @__PURE__ */ function(n) {
  re(t, n);
  var e = se(t);
  function t() {
    var r;
    return W(this, t), r = e.apply(this, arguments), r.channels = {}, r;
  }
  return K(t, [{
    key: "connect",
    value: function() {
    }
    /**
     * Listen for an event on a channel instance.
     */
  }, {
    key: "listen",
    value: function(s, i, a) {
      return new Ot();
    }
    /**
     * Get a channel instance by name.
     */
  }, {
    key: "channel",
    value: function(s) {
      return new Ot();
    }
    /**
     * Get a private channel instance by name.
     */
  }, {
    key: "privateChannel",
    value: function(s) {
      return new rs();
    }
    /**
     * Get a private encrypted channel instance by name.
     */
  }, {
    key: "encryptedPrivateChannel",
    value: function(s) {
      return new Ka();
    }
    /**
     * Get a presence channel instance by name.
     */
  }, {
    key: "presenceChannel",
    value: function(s) {
      return new Ja();
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
  }]), t;
}(xn), Ya = /* @__PURE__ */ function() {
  function n(e) {
    W(this, n), this.options = e, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  return K(n, [{
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
        this.connector = new Mr(at(at({}, this.options), {
          cluster: ""
        }));
      else if (this.options.broadcaster == "pusher")
        this.connector = new Mr(this.options);
      else if (this.options.broadcaster == "socket.io")
        this.connector = new Pr(this.options);
      else if (this.options.broadcaster == "null")
        this.connector = new Xa(this.options);
      else if (typeof this.options.broadcaster == "function" && qa(this.options.broadcaster))
        this.connector = new this.options.broadcaster(this.options);
      else
        throw new Error("Broadcaster ".concat(tt(this.options.broadcaster), " ").concat(this.options.broadcaster, " is not supported."));
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
    value: function(t) {
      if (this.connector instanceof Pr)
        throw new Error("Broadcaster ".concat(tt(this.options.broadcaster), " ").concat(this.options.broadcaster, " does not support encrypted private channels."));
      return this.connector.encryptedPrivateChannel(t);
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
      typeof Vue == "function" && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), (typeof Turbo > "u" ? "undefined" : tt(Turbo)) === "object" && this.registerTurboRequestInterceptor();
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
function Qa(n, e = 6) {
  return !n || n.length <= e * 2 + 3 ? n : `${n.substring(0, e)}...${n.substring(n.length - e)}`;
}
function vn(n, e, t = {}) {
  for (let r in n) {
    const s = n[r];
    s !== null && typeof s == "object" && !Array.isArray(s) && !(s instanceof foundry.utils.Color) ? vn(s, `${e}${r}.`, t) : t[`${e}${r}`] = s;
  }
  return r;
}
function Za(n, e) {
  if (n === "wss") return !0;
  if (n === "ws") return !1;
  try {
    return new URL(e).protocol === "https:";
  } catch {
    return !0;
  }
}
function te() {
  var e, t;
  if (!((e = game.user) != null && e.isGM)) return !1;
  const n = (t = game.users) == null ? void 0 : t.activeGM;
  return !n || n.id === game.user.id;
}
function ft(n, { remote: e = !1 } = {}) {
  return e ? n ? game.users.find((t) => t.getFlag(w, "agent-link") === n) ?? null : null : game.user;
}
function ss(n) {
  return n ? n.getFlag(w, "noclip") ?? n.isGM : !1;
}
function On(n, e) {
  const { distance: t } = canvas.grid.measurePath([n.center, e.center]);
  return Math.ceil(t - 1e-6);
}
function Nr(n, e) {
  var t, r, s, i;
  return n && ((t = canvas.tokens) != null && t.get(n)) || !e ? n : ((i = (s = (r = canvas.tokens) == null ? void 0 : r.placeables) == null ? void 0 : s.find((a) => {
    var l;
    return ((l = a.actor) == null ? void 0 : l.id) === e;
  })) == null ? void 0 : i.id) ?? n;
}
async function ec(n, e, t, r = null) {
  return console.log(`%c[Bridge] Starting Render Interceptor for Actor ${e}`, "color: #00ffff; font-weight: bold;"), await n._beginRollCapture(r), new Promise(async (s, i) => {
    let a = !1;
    const l = renderTemplate, u = function(f, p) {
      return f && typeof f == "string" && f.includes("rollcard") && (console.log(`%c[Bridge] Intercepted Render: ${f}`, "color: #00ff00;", p), a = !0, renderTemplate = l, s({
        success: !0,
        total: p.resultTotal,
        isCriticalSuccess: p.wasCritSuccess ? p.wasCritSuccess() : p.isCriticalSuccess || !1,
        isCriticalFailure: p.wasCritFail ? p.wasCritFail() : p.isCriticalFailure || !1,
        label: p.rollTitle,
        rollMode: n._captureRollMode || game.settings.get("core", "rollMode"),
        rawRoll: p
      })), l.apply(this, arguments);
    };
    renderTemplate = u, setTimeout(async () => {
      a || (renderTemplate = l, console.warn("[Bridge] ❌ Interceptor timed out. No rollcard rendered."), n._endRollCapture(), s({ success: !1, error: "Timed out waiting for render" }));
    }, 5e3);
    try {
      await r();
    } catch {
      renderTemplate = l, n._endRollCapture(), s({ success: !1, error: "Trigger failed" });
    }
  });
}
var pt = {}, tc = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, is = {}, le = {};
let Dn;
const nc = [
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
le.getSymbolTotalCodewords = function(e) {
  return nc[e];
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
  Dn = e;
};
le.isKanjiModeEnabled = function() {
  return typeof Dn < "u";
};
le.toSJIS = function(e) {
  return Dn(e);
};
var jt = {};
(function(n) {
  n.L = { bit: 1 }, n.M = { bit: 0 }, n.Q = { bit: 3 }, n.H = { bit: 2 };
  function e(t) {
    if (typeof t != "string")
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
})(jt);
function os() {
  this.buffer = [], this.length = 0;
}
os.prototype = {
  get: function(n) {
    const e = Math.floor(n / 8);
    return (this.buffer[e] >>> 7 - n % 8 & 1) === 1;
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
var rc = os;
function gt(n) {
  if (!n || n < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = o, this.data = new Uint8Array(o * o), this.reservedBit = new Uint8Array(o * o);
}
gt.prototype.set = function(n, e, t, r) {
  const s = n * this.size + e;
  this.data[s] = t, r && (this.reservedBit[s] = !0);
};
gt.prototype.get = function(n, e) {
  return this.data[n * this.size + e];
};
gt.prototype.xor = function(n, e, t) {
  this.data[n * this.size + e] ^= t;
};
gt.prototype.isReserved = function(n, e) {
  return this.reservedBit[n * this.size + e];
};
var sc = gt, as = {};
(function(n) {
  const e = le.getSymbolSize;
  n.getRowColCoords = function(r) {
    if (r === 1) return [];
    const s = Math.floor(r / 7) + 2, i = e(r), a = i === 145 ? 26 : Math.ceil((i - 13) / (2 * s - 2)) * 2, l = [i - 7];
    for (let u = 1; u < s - 1; u++)
      l[u] = l[u - 1] - a;
    return l.push(6), l.reverse();
  }, n.getPositions = function(r) {
    const s = [], i = n.getRowColCoords(r), a = i.length;
    for (let l = 0; l < a; l++)
      for (let u = 0; u < a; u++)
        l === 0 && u === 0 || // top-left
        l === 0 && u === a - 1 || // bottom-left
        l === a - 1 && u === 0 || s.push([i[l], i[u]]);
    return s;
  };
})(as);
var cs = {};
const ic = le.getSymbolSize, xr = 7;
cs.getPositions = function(e) {
  const t = ic(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [t - xr, 0],
    // bottom-left
    [0, t - xr]
  ];
};
var ls = {};
(function(n) {
  n.Patterns = {
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
  n.isValid = function(s) {
    return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7;
  }, n.from = function(s) {
    return n.isValid(s) ? parseInt(s, 10) : void 0;
  }, n.getPenaltyN1 = function(s) {
    const i = s.size;
    let a = 0, l = 0, u = 0, f = null, p = null;
    for (let m = 0; m < i; m++) {
      l = u = 0, f = p = null;
      for (let y = 0; y < i; y++) {
        let b = s.get(m, y);
        b === f ? l++ : (l >= 5 && (a += e.N1 + (l - 5)), f = b, l = 1), b = s.get(y, m), b === p ? u++ : (u >= 5 && (a += e.N1 + (u - 5)), p = b, u = 1);
      }
      l >= 5 && (a += e.N1 + (l - 5)), u >= 5 && (a += e.N1 + (u - 5));
    }
    return a;
  }, n.getPenaltyN2 = function(s) {
    const i = s.size;
    let a = 0;
    for (let l = 0; l < i - 1; l++)
      for (let u = 0; u < i - 1; u++) {
        const f = s.get(l, u) + s.get(l, u + 1) + s.get(l + 1, u) + s.get(l + 1, u + 1);
        (f === 4 || f === 0) && a++;
      }
    return a * e.N2;
  }, n.getPenaltyN3 = function(s) {
    const i = s.size;
    let a = 0, l = 0, u = 0;
    for (let f = 0; f < i; f++) {
      l = u = 0;
      for (let p = 0; p < i; p++)
        l = l << 1 & 2047 | s.get(f, p), p >= 10 && (l === 1488 || l === 93) && a++, u = u << 1 & 2047 | s.get(p, f), p >= 10 && (u === 1488 || u === 93) && a++;
    }
    return a * e.N3;
  }, n.getPenaltyN4 = function(s) {
    let i = 0;
    const a = s.data.length;
    for (let u = 0; u < a; u++) i += s.data[u];
    return Math.abs(Math.ceil(i * 100 / a / 5) - 10) * e.N4;
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
  n.applyMask = function(s, i) {
    const a = i.size;
    for (let l = 0; l < a; l++)
      for (let u = 0; u < a; u++)
        i.isReserved(u, l) || i.xor(u, l, t(s, u, l));
  }, n.getBestMask = function(s, i) {
    const a = Object.keys(n.Patterns).length;
    let l = 0, u = 1 / 0;
    for (let f = 0; f < a; f++) {
      i(f), n.applyMask(f, s);
      const p = n.getPenaltyN1(s) + n.getPenaltyN2(s) + n.getPenaltyN3(s) + n.getPenaltyN4(s);
      n.applyMask(f, s), p < u && (u = p, l = f);
    }
    return l;
  };
})(ls);
var Gt = {};
const we = jt, Lt = [
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
], Mt = [
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
Gt.getBlocksCount = function(e, t) {
  switch (t) {
    case we.L:
      return Lt[(e - 1) * 4 + 0];
    case we.M:
      return Lt[(e - 1) * 4 + 1];
    case we.Q:
      return Lt[(e - 1) * 4 + 2];
    case we.H:
      return Lt[(e - 1) * 4 + 3];
    default:
      return;
  }
};
Gt.getTotalCodewordsCount = function(e, t) {
  switch (t) {
    case we.L:
      return Mt[(e - 1) * 4 + 0];
    case we.M:
      return Mt[(e - 1) * 4 + 1];
    case we.Q:
      return Mt[(e - 1) * 4 + 2];
    case we.H:
      return Mt[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var us = {}, qt = {};
const nt = new Uint8Array(512), Dt = new Uint8Array(256);
(function() {
  let e = 1;
  for (let t = 0; t < 255; t++)
    nt[t] = e, Dt[e] = t, e <<= 1, e & 256 && (e ^= 285);
  for (let t = 255; t < 512; t++)
    nt[t] = nt[t - 255];
})();
qt.log = function(e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return Dt[e];
};
qt.exp = function(e) {
  return nt[e];
};
qt.mul = function(e, t) {
  return e === 0 || t === 0 ? 0 : nt[Dt[e] + Dt[t]];
};
(function(n) {
  const e = qt;
  n.mul = function(r, s) {
    const i = new Uint8Array(r.length + s.length - 1);
    for (let a = 0; a < r.length; a++)
      for (let l = 0; l < s.length; l++)
        i[a + l] ^= e.mul(r[a], s[l]);
    return i;
  }, n.mod = function(r, s) {
    let i = new Uint8Array(r);
    for (; i.length - s.length >= 0; ) {
      const a = i[0];
      for (let u = 0; u < s.length; u++)
        i[u] ^= e.mul(s[u], a);
      let l = 0;
      for (; l < i.length && i[l] === 0; ) l++;
      i = i.slice(l);
    }
    return s;
  }, o.generateECPolynomial = function(i) {
    let n = new Uint8Array([1]);
    for (let s = 0; s < i; s++)
      n = o.mul(n, new Uint8Array([1, e.exp(s)]));
    return n;
  };
})(us);
const ds = us;
function Bn(n) {
  this.genPoly = void 0, this.degree = n, this.degree && this.initialize(this.degree);
}
Bn.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = ds.generateECPolynomial(this.degree);
};
Bn.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const t = new Uint8Array(e.length + this.degree);
  t.set(e);
  const r = ds.mod(t, this.genPoly), s = this.degree - r.length;
  if (s > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(r, s), i;
  }
  return i;
};
var oc = Bn, hs = {}, ke = {}, Fn = {};
Fn.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var pe = {};
const fs = "[0-9]+", ac = "[A-Z $%*+\\-./:]+";
let ct = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
ct = ct.replace(/u/g, "\\u");
const cc = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ct + `)(?:.|[\r
]))+`;
pe.KANJI = new RegExp(ct, "g");
pe.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
pe.BYTE = new RegExp(cc, "g");
pe.NUMERIC = new RegExp(fs, "g");
pe.ALPHANUMERIC = new RegExp(ac, "g");
const lc = new RegExp("^" + ct + "$"), uc = new RegExp("^" + fs + "$"), dc = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
pe.testKanji = function(e) {
  return lc.test(e);
};
pe.testNumeric = function(e) {
  return uc.test(e);
};
pe.testAlphanumeric = function(e) {
  return dc.test(e);
};
(function(n) {
  const e = Fn, t = pe;
  n.NUMERIC = {
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
})(ke);
(function(n) {
  const e = le, t = Gt, r = jt, s = ke, i = Fn, a = 7973, l = e.getBCHDigit(a);
  function u(y, b, v) {
    for (let T = 1; T <= 40; T++)
      if (b <= n.getCapacity(T, v, y))
        return T;
  }
  function f(y, b) {
    return s.getCharCountIndicator(y, b) + 4;
  }
  function p(y, b) {
    let v = 0;
    return y.forEach(function(T) {
      const _ = f(T.mode, b);
      v += _ + T.getBitsLength();
    }), v;
  }
  function m(y, b) {
    for (let v = 1; v <= 40; v++)
      if (p(y, v) <= n.getCapacity(v, b, s.MIXED))
        return v;
  }
  n.from = function(b, v) {
    return i.isValid(b) ? parseInt(b, 10) : v;
  }, n.getCapacity = function(b, v, T) {
    if (!i.isValid(b))
      throw new Error("Invalid QR Code version");
    typeof T > "u" && (T = s.BYTE);
    const _ = e.getSymbolTotalCodewords(b), k = t.getTotalCodewordsCount(b, v), S = (_ - k) * 8;
    if (T === s.MIXED) return S;
    const A = S - f(T, b);
    switch (T) {
      case s.NUMERIC:
        return Math.floor(A / 10 * 3);
      case s.ALPHANUMERIC:
        return Math.floor(A / 11 * 2);
      case s.KANJI:
        return Math.floor(A / 13);
      case s.BYTE:
      default:
        return Math.floor(A / 8);
    }
  }, n.getBestVersionForData = function(b, v) {
    let T;
    const _ = r.from(v, r.M);
    if (Array.isArray(b)) {
      if (b.length > 1)
        return m(b, _);
      if (b.length === 0)
        return 1;
      T = b[0];
    } else
      T = b;
    return u(T.mode, T.getLength(), _);
  }, n.getEncodedBits = function(b) {
    if (!i.isValid(b) || b < 7)
      throw new Error("Invalid QR Code version");
    let v = b << 12;
    for (; e.getBCHDigit(v) - l >= 0; )
      v ^= a << e.getBCHDigit(v) - l;
    return b << 12 | v;
  };
})(hs);
var ps = {};
const bn = le, gs = 1335, hc = 21522, Or = bn.getBCHDigit(gs);
ps.getEncodedBits = function(e, t) {
  const r = e.bit << 3 | t;
  let s = r << 10;
  for (; bn.getBCHDigit(s) - Or >= 0; )
    s ^= gs << bn.getBCHDigit(s) - Or;
  return (r << 10 | s) ^ hc;
};
var ms = {};
const fc = ke;
function Fe(n) {
  this.mode = fc.NUMERIC, this.data = n.toString();
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
var pc = Fe;
const gc = ke, hn = [
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
function $e(n) {
  this.mode = gc.ALPHANUMERIC, this.data = n;
}
$e.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
$e.prototype.getLength = function() {
  return this.data.length;
};
$e.prototype.getBitsLength = function() {
  return $e.getBitsLength(this.data.length);
};
$e.prototype.write = function(e) {
  let t;
  for (t = 0; t + 2 <= this.data.length; t += 2) {
    let r = hn.indexOf(this.data[t]) * 45;
    r += hn.indexOf(this.data[t + 1]), e.put(r, 11);
  }
  this.data.length % 2 && e.put(hn.indexOf(this.data[t]), 6);
};
var mc = $e;
const yc = ke;
function Ue(n) {
  this.mode = yc.BYTE, typeof n == "string" ? this.data = new TextEncoder().encode(n) : this.data = new Uint8Array(n);
}
Ue.getBitsLength = function(e) {
  return e * 8;
};
Ue.prototype.getLength = function() {
  return this.data.length;
};
Ue.prototype.getBitsLength = function() {
  return Ue.getBitsLength(this.data.length);
};
Ue.prototype.write = function(n) {
  for (let e = 0, t = this.data.length; e < t; e++)
    n.put(this.data[e], 8);
};
var wc = Ue;
const vc = ke, bc = le;
function He(n) {
  this.mode = vc.KANJI, this.data = n;
}
He.getBitsLength = function(e) {
  return e * 13;
};
He.prototype.getLength = function() {
  return this.data.length;
};
He.prototype.getBitsLength = function() {
  return He.getBitsLength(this.data.length);
};
He.prototype.write = function(n) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let t = bc.toSJIS(this.data[e]);
    if (t >= 33088 && t <= 40956)
      t -= 33088;
    else if (t >= 57408 && t <= 60351)
      t -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), o.put(r, 13);
  }
};
var kc = He, ys = { exports: {} };
(function(n) {
  var e = {
    single_source_shortest_paths: function(t, r, s) {
      var i = {}, a = {};
      a[r] = 0;
      var l = e.PriorityQueue.make();
      l.push(r, 0);
      for (var u, f, p, m, y, b, v, T, _; !l.empty(); ) {
        u = l.pop(), f = u.value, m = u.cost, y = t[f] || {};
        for (p in y)
          y.hasOwnProperty(p) && (b = y[p], v = m + b, T = a[p], _ = typeof a[p] > "u", (_ || T > v) && (a[p] = v, l.push(p, v), i[p] = f));
      }
      if (typeof s < "u" && typeof a[s] > "u") {
        var k = ["Could not find a path from ", r, " to ", s, "."].join("");
        throw new Error(k);
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
  n.exports = e;
})(ys);
var _c = ys.exports;
(function(n) {
  const e = ke, t = pc, r = mc, s = wc, i = kc, a = pe, l = le, u = _c;
  function f(k) {
    return unescape(encodeURIComponent(k)).length;
  }
  function p(k, S, A) {
    const E = [];
    let R;
    for (; (R = k.exec(A)) !== null; )
      E.push({
        data: R[0],
        index: R.index,
        mode: S,
        length: R[0].length
      });
    return R;
  }
  function m(k) {
    const S = p(a.NUMERIC, e.NUMERIC, k), A = p(a.ALPHANUMERIC, e.ALPHANUMERIC, k);
    let E, R;
    return l.isKanjiModeEnabled() ? (E = p(a.BYTE, e.BYTE, k), R = p(a.KANJI, e.KANJI, k)) : (E = p(a.BYTE_KANJI, e.BYTE, k), R = []), S.concat(A, E, R).sort(function(P, O) {
      return P.index - O.index;
    }).map(function(P) {
      return {
        data: P.data,
        mode: P.mode,
        length: P.length
      };
    });
  }
  function y(k, S) {
    switch (S) {
      case e.NUMERIC:
        return t.getBitsLength(k);
      case e.ALPHANUMERIC:
        return r.getBitsLength(k);
      case e.KANJI:
        return i.getBitsLength(k);
      case e.BYTE:
        return s.getBitsLength(k);
    }
  }
  function b(k) {
    return k.reduce(function(S, A) {
      const E = S.length - 1 >= 0 ? S[S.length - 1] : null;
      return E && E.mode === A.mode ? (S[S.length - 1].data += A.data, S) : (S.push(A), S);
    }, []);
  }
  function v(k) {
    const S = [];
    for (let A = 0; A < k.length; A++) {
      const E = k[A];
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
            { data: E.data, mode: e.BYTE, length: f(E.data) }
          ]);
          break;
        case e.BYTE:
          S.push([
            { data: E.data, mode: e.BYTE, length: f(E.data) }
          ]);
      }
    }
    return S;
  }
  function T(k, S) {
    const A = {}, E = { start: {} };
    let R = ["start"];
    for (let L = 0; L < k.length; L++) {
      const P = k[L], O = [];
      for (let F = 0; F < P.length; F++) {
        const j = P[F], ie = "" + L + F;
        O.push(ie), A[ie] = { node: j, lastCount: 0 }, E[ie] = {};
        for (let ue = 0; ue < R.length; ue++) {
          const U = R[ue];
          A[U] && A[U].node.mode === j.mode ? (E[U][ie] = y(A[U].lastCount + j.length, j.mode) - y(A[U].lastCount, j.mode), A[U].lastCount += j.length) : (A[U] && (A[U].lastCount = j.length), E[U][ie] = y(j.length, j.mode) + 4 + e.getCharCountIndicator(j.mode, S));
        }
      }
      R = O;
    }
    for (let L = 0; L < R.length; L++)
      E[R[L]].end = 0;
    return { map: E, table: A };
  }
  function _(k, S) {
    let A;
    const E = e.getBestModeForData(k);
    if (A = e.from(S, E), A !== e.BYTE && A.bit < E.bit)
      throw new Error('"' + k + '" cannot be encoded with mode ' + e.toString(A) + `.
 Suggested mode is: ` + e.toString(E));
    switch (A === e.KANJI && !l.isKanjiModeEnabled() && (A = e.BYTE), A) {
      case e.NUMERIC:
        return new t(k);
      case e.ALPHANUMERIC:
        return new r(k);
      case e.KANJI:
        return new i(k);
      case e.BYTE:
        return new s(k);
    }
  }
  n.fromArray = function(S) {
    return S.reduce(function(A, E) {
      return typeof E == "string" ? A.push(_(E, null)) : E.data && A.push(_(E.data, E.mode)), A;
    }, []);
  }, n.fromString = function(S, A) {
    const E = m(S, l.isKanjiModeEnabled()), R = v(E), L = T(R, A), P = u.find_path(L.map, "start", "end"), O = [];
    for (let F = 1; F < P.length - 1; F++)
      O.push(L.table[P[F]].node);
    return n.fromArray(b(O));
  }, n.rawSplit = function(S) {
    return n.fromArray(
      m(S, l.isKanjiModeEnabled())
    );
  };
})(ms);
const zt = le, fn = jt, Sc = rc, Cc = sc, Tc = as, Ac = cs, kn = ls, _n = Gt, Ic = oc, Bt = hs, Ec = ps, Rc = ke, pn = ms;
function Lc(n, e) {
  const t = n.size, r = Ac.getPositions(e);
  for (let s = 0; s < r.length; s++) {
    const i = r[s][0], a = r[s][1];
    for (let l = -1; l <= 7; l++)
      if (!(i + l <= -1 || t <= i + l))
        for (let u = -1; u <= 7; u++)
          a + u <= -1 || t <= a + u || (l >= 0 && l <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && u >= 2 && u <= 4 ? n.set(i + l, a + u, !0, !0) : n.set(i + l, a + u, !1, !0));
  }
}
function Mc(n) {
  const e = n.size;
  for (let t = 8; t < e - 8; t++) {
    const r = t % 2 === 0;
    n.set(t, 6, r, !0), n.set(6, t, r, !0);
  }
}
function Pc(n, e) {
  const t = Tc.getPositions(e);
  for (let r = 0; r < t.length; r++) {
    const s = t[r][0], i = t[r][1];
    for (let a = -2; a <= 2; a++)
      for (let l = -2; l <= 2; l++)
        a === -2 || a === 2 || l === -2 || l === 2 || a === 0 && l === 0 ? n.set(s + a, i + l, !0, !0) : n.set(s + a, i + l, !1, !0);
  }
}
function Nc(n, e) {
  const t = n.size, r = Bt.getEncodedBits(e);
  let s, i, a;
  for (let l = 0; l < 18; l++)
    s = Math.floor(l / 3), i = l % 3 + t - 8 - 3, a = (r >> l & 1) === 1, n.set(s, i, a, !0), n.set(i, s, a, !0);
}
function gn(n, e, t) {
  const r = n.size, s = Ec.getEncodedBits(e, t);
  let i, a;
  for (i = 0; i < 15; i++)
    a = (s >> i & 1) === 1, i < 6 ? n.set(i, 8, a, !0) : i < 8 ? n.set(i + 1, 8, a, !0) : n.set(r - 15 + i, 8, a, !0), i < 8 ? n.set(8, r - i - 1, a, !0) : i < 9 ? n.set(8, 15 - i - 1 + 1, a, !0) : n.set(8, 15 - i - 1, a, !0);
  n.set(r - 8, 8, 1, !0);
}
function xc(n, e) {
  const t = n.size;
  let r = -1, s = t - 1, i = 7, a = 0;
  for (let l = t - 1; l > 0; l -= 2)
    for (l === 6 && l--; ; ) {
      for (let u = 0; u < 2; u++)
        if (!n.isReserved(s, l - u)) {
          let f = !1;
          a < e.length && (f = (e[a] >>> i & 1) === 1), n.set(s, l - u, f), i--, i === -1 && (a++, i = 7);
        }
      if (n += i, n < 0 || r <= n) {
        n -= i, i = -i;
        break;
      }
    }
}
function Oc(n, e, t) {
  const r = new Sc();
  t.forEach(function(u) {
    r.put(u.mode.bit, 4), r.put(u.getLength(), Rc.getCharCountIndicator(u.mode, n)), u.write(r);
  });
  const s = zt.getSymbolTotalCodewords(n), i = _n.getTotalCodewordsCount(n, e), a = (s - i) * 8;
  for (r.getLengthInBits() + 4 <= a && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const l = (a - r.getLengthInBits()) / 8;
  for (let u = 0; u < l; u++)
    r.put(u % 2 ? 17 : 236, 8);
  return Dc(r, n, e);
}
function Dc(n, e, t) {
  const r = zt.getSymbolTotalCodewords(e), s = _n.getTotalCodewordsCount(e, t), i = r - s, a = _n.getBlocksCount(e, t), l = r % a, u = a - l, f = Math.floor(r / a), p = Math.floor(i / a), m = p + 1, y = f - p, b = new Ic(y);
  let v = 0;
  const T = new Array(a), _ = new Array(a);
  let k = 0;
  const S = new Uint8Array(n.buffer);
  for (let P = 0; P < a; P++) {
    const O = P < u ? p : m;
    T[P] = S.slice(v, v + O), _[P] = b.encode(T[P]), v += O, k = Math.max(k, O);
  }
  const A = new Uint8Array(r);
  let E = 0, R, L;
  for (R = 0; R < k; R++)
    for (L = 0; L < a; L++)
      R < T[L].length && (A[E++] = T[L][R]);
  for (R = 0; R < y; R++)
    for (L = 0; L < a; L++)
      A[E++] = _[L][R];
  return A;
}
function Bc(n, e, t, r) {
  let s;
  if (Array.isArray(n))
    s = pn.fromArray(n);
  else if (typeof n == "string") {
    let f = e;
    if (!f) {
      const p = pn.rawSplit(n);
      f = Bt.getBestVersionForData(p, t);
    }
    s = pn.fromString(n, f || 40);
  } else
    throw new Error("Invalid data");
  const i = Bt.getBestVersionForData(s, t);
  if (!i)
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
  const a = Oc(e, t, s), l = zt.getSymbolSize(e), u = new Cc(l);
  return Lc(u, e), Mc(u), Pc(u, e), gn(u, t, 0), e >= 7 && Nc(u, e), xc(u, a), isNaN(r) && (r = kn.getBestMask(
    u,
    gn.bind(null, u, t)
  )), kn.applyMask(r, u), gn(u, t, r), {
    modules: u,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: i,
    segments: n
  };
}
is.create = function(e, t) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let r = fn.M, s, i;
  return typeof t < "u" && (r = fn.from(t.errorCorrectionLevel, fn.M), s = Bt.from(t.version), i = kn.from(t.maskPattern), t.toSJISFunc && zt.setToSJISFunction(t.toSJISFunc)), Bc(e, s, r, i);
};
var ws = {}, $n = {};
(function(n) {
  function e(t) {
    if (typeof t == "number" && (t = t.toString()), typeof t != "string")
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
  }, n.getScale = function(r, s) {
    return s.width && s.width >= r + s.margin * 2 ? s.width / (r + s.margin * 2) : s.scale;
  }, n.getImageWidth = function(r, s) {
    const i = n.getScale(r, s);
    return Math.floor((r + s.margin * 2) * i);
  }, n.qrToImageData = function(r, s, i) {
    const a = s.modules.size, l = s.modules.data, u = n.getScale(a, i), f = Math.floor((a + i.margin * 2) * u), p = i.margin * u, m = [i.color.light, i.color.dark];
    for (let y = 0; y < f; y++)
      for (let b = 0; b < f; b++) {
        let v = (y * f + b) * 4, T = i.color.light;
        if (y >= p && b >= p && y < f - p && b < f - p) {
          const _ = Math.floor((y - p) / u), k = Math.floor((b - p) / u);
          T = m[l[_ * a + k] ? 1 : 0];
        }
        r[v++] = T.r, r[v++] = T.g, r[v++] = T.b, r[v] = T.a;
      }
  };
})($n);
(function(n) {
  const e = $n;
  function t(s, i, a) {
    s.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = a, i.width = a, i.style.height = a + "px", i.style.width = a + "px";
  }
  function i() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  n.render = function(i, a, l) {
    let u = l, f = a;
    typeof u > "u" && (!a || !a.getContext) && (u = a, a = void 0), a || (f = r()), u = e.getOptions(u);
    const p = e.getImageWidth(i.modules.size, u), m = f.getContext("2d"), y = m.createImageData(p, p);
    return e.qrToImageData(y.data, i, u), t(m, f, p), m.putImageData(y, 0, 0), f;
  }, n.renderToDataURL = function(i, a, l) {
    let u = l;
    typeof u > "u" && (!a || !a.getContext) && (u = a, a = void 0), u || (u = {});
    const f = n.render(i, a, u), p = u.type || "image/png", m = u.rendererOpts || {};
    return f.toDataURL(p, m.quality);
  };
})(ws);
var vs = {};
const Fc = $n;
function Dr(n, e) {
  const t = n.a / 255, r = e + '="' + n.hex + '"';
  return t < 1 ? r + " " + e + '-opacity="' + t.toFixed(2).slice(1) + '"' : r;
}
function mn(n, e, t) {
  let r = n + e;
  return typeof t < "u" && (r += " " + t), r;
}
function $c(n, e, t) {
  let r = "", s = 0, i = !1, a = 0;
  for (let l = 0; l < n.length; l++) {
    const u = Math.floor(l % e), f = Math.floor(l / e);
    !u && !i && (i = !0), n[l] ? (a++, l > 0 && u > 0 && n[l - 1] || (r += i ? mn("M", u + t, 0.5 + f + t) : mn("m", s, 0), s = 0, i = !1), u + 1 < e && n[l + 1] || (r += mn("h", a), a = 0)) : s++;
  }
  return i;
}
vs.render = function(e, t, r) {
  const s = Fc.getOptions(t), i = e.modules.size, a = e.modules.data, l = i + s.margin * 2, u = s.color.light.a ? "<path " + Dr(s.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "", f = "<path " + Dr(s.color.dark, "stroke") + ' d="' + $c(a, i, s.margin) + '"/>', p = 'viewBox="0 0 ' + l + " " + l + '"', y = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + p + ' shape-rendering="crispEdges">' + u + f + `</svg>
`;
  return typeof r == "function" && r(null, y), y;
};
const Uc = tc, Sn = is, bs = ws, Hc = vs;
function Un(n, e, t, r, s) {
  const i = [].slice.call(arguments, 1), a = i.length, l = typeof i[a - 1] == "function";
  if (!l && !Uc())
    throw new Error("Callback required as last argument");
  if (l) {
    if (a < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (n = r, r = e, e = i = void 0) : l === 3 && (e.getContext && typeof n > "u" ? (n = i, i = void 0) : (n = i, i = r, r = e, e = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return a === 1 ? (t = e, e = r = void 0) : a === 2 && !e.getContext && (r = t, t = e, e = void 0), new Promise(function(u, f) {
      try {
        const p = Sn.create(t, r);
        u(n(p, e, r));
      } catch (p) {
        f(p);
      }
    });
  }
  try {
    const u = Sn.create(t, r);
    s(null, n(u, e, r));
  } catch (u) {
    s(u);
  }
}
pt.create = Sn.create;
pt.toCanvas = Un.bind(null, bs.render);
pt.toDataURL = Un.bind(null, bs.renderToDataURL);
pt.toString = Un.bind(null, function(n, e, t) {
  return Hc.render(n, t);
});
const Cn = 300, jc = 1;
function ks() {
  return (game.settings.get(w, "apiUrl") || "").replace(/\/$/, "");
}
function Gc({ nonce: n, channelId: e, foundryUserName: t }) {
  return JSON.stringify({
    v: jc,
    agentUrl: ks(),
    channelId: e || null,
    nonce: o,
    foundryUserName: r || null
  });
}
async function _s(n, e, t) {
  const r = ks(), s = game.settings.get(w, "apiKey"), i = game.settings.get(w, "channelId");
  if (!r) throw new Error("Set the Agent URL in module settings first.");
  if (!s) throw new Error("Set your Agent API key in module settings first.");
  if (!i) throw new Error("Set the Channel ID (session code) in module settings first.");
  const a = foundry.utils.randomID(24);
  let l;
  try {
    l = await fetch(`${r}/api/pairing/register`, {
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
        foundry_user_name: t,
        expires_in: Cn
      })
    });
  } catch {
    throw new Error("Could not reach the Agent server. Check the Agent URL and your connection.");
  }
  if (!l.ok)
    throw l.status === 403 ? new Error("Only a GM with a linked Agent account can generate pairings.") : l.status === 404 ? new Error("No Agent session matches this Channel ID. Create/sync the session in the Agent first.") : new Error(`Agent server rejected the pairing (HTTP ${l.status}).`);
  return n.pendingPairings.set(a, { foundryUserId: e, ts: Date.now() }), setTimeout(() => n.pendingPairings.delete(a), Cn * 1e3), { nonce: a, payload: Gc({ nonce: a, channelId: i, foundryUserName: t }) };
}
async function Ss(n, e, t) {
  let r;
  try {
    ({ payload: r } = await _s(n, e, t));
  } catch (s) {
    ui.notifications.error(`Agent pairing: ${s.message}`);
    return;
  }
  await Cs(r, t);
}
async function Cs(n, e) {
  let t;
  try {
    t = await pt.toDataURL(n, { width: 320, margin: 2, errorCorrectionLevel: "M" });
  } catch {
    ui.notifications.error("Agent pairing: failed to render QR code.");
    return;
  }
  const r = Math.round(Cn / 60), s = e || "this player", i = btoa(n);
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
const Ts = "display", As = "NightCity - Out", Br = 2, qc = 3;
function mt(n) {
  var e;
  return !!((e = n == null ? void 0 : n.getFlag) != null && e.call(n, w, Ts));
}
function je() {
  var n;
  return ((n = game.users) == null ? void 0 : n.find(mt)) ?? null;
}
function lt(n) {
  return !!n && !n.isGM && !mt(n);
}
function Hn(n) {
  return (n == null ? void 0 : n.type) !== "character" ? !1 : game.users.some((e) => {
    var t;
    return lt(e) && (((t = e.character) == null ? void 0 : t.id) === n.id || n.testUserPermission(e, qc));
  });
}
async function zc() {
  if (!game.user.isGM) throw new Error("Only a GM can create the display screen.");
  let n = je();
  return n || (n = await User.create({
    name: As,
    role: CONST.USER_ROLES.PLAYER,
    password: "",
    flags: { [w]: { [Ts]: !0 } }
  })), await Is(), n;
}
async function Is(n = game.actors.contents) {
  const e = je();
  if (!e || !game.user.isGM) return 0;
  const t = n.filter((r) => {
    var s;
    return Hn(r) && (((s = r.ownership) == null ? void 0 : s[e.id]) ?? 0) < Br;
  }).map((r) => ({ _id: r.id, [`ownership.${e.id}`]: Br }));
  return t.length && await Actor.updateDocuments(t), t.length;
}
function Vc(n) {
  if (n.hookIds.displayActorCreate) return;
  const e = (t) => {
    te() && je() && Is([t]);
  };
  n.hookIds.displayActorCreate = Hooks.on("createActor", e), n.hookIds.displayActorUpdate = Hooks.on("updateActor", (t, r) => {
    "ownership" in r && e(t);
  }), n.hookIds.displayUserUpdate = Hooks.on("updateUser", (t, r) => {
    "character" in r && t.character && e(t.character);
  });
}
class Wc extends FormApplication {
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
    for (let r of e.users) {
      const s = Qa(r.agentLink);
      t += `<tr><td style="padding: 5px 0;"><strong>${r.name}</strong></td>`, r.hasKey ? (t += '<td style="color: #00ff00;">✔ Linked</td>', t += `<td><small><code title="${r.agentLink || ""}">${s || "Pending..."}</code></small></td>`) : (t += '<td style="color: #ffaa00;" title="No remote key; the embedded Agent still works.">◐ Local only</td>', t += "<td><small>-</small></td>"), t += `<td><select class="character-select" data-userid="${r.id}" style="width: 100%;">
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
    const e = game.users.filter((r) => !mt(r)).map((r) => {
      var s;
      return {
        id: r.id,
        name: r.name,
        isGM: r.isGM,
        hasKey: !!r.getFlag(w, "hasApiKey"),
        agentLink: r.getFlag(w, "agent-link"),
        characterId: ((s = r.character) == null ? void 0 : s.id) || ""
      };
    }), r = game.actors.filter((i) => i.type === "character").map((i) => ({
      id: i.id,
      name: i.name
    }));
    return { users: e, characters: r };
  }
  // This forces Foundry to listen to our specific button click
  activateListeners(e) {
    super.activateListeners(e), e.find("#save-agent-assignments").click(async (t) => {
      t.preventDefault();
      let r = 0;
      const s = [];
      if (e.find(".character-select").each((i, a) => {
        var p;
        const l = a.dataset.userid, u = a.value, f = game.users.get(l);
        if (f) {
          const m = u === "" || u === "null" ? null : u;
          (((p = f.character) == null ? void 0 : p.id) || null) !== m && (s.push({ _id: f.id, character: m }), r++);
        }
      }), s.length > 0) {
        await User.updateDocuments(s), ui.notifications.info(`Cyberpunk Bridge: Updated ${r} player assignments!`);
        for (let i of s) {
          const a = game.users.get(i._id), l = a == null ? void 0 : a.getFlag(w, "agent-link");
          await window.cyberpunkBridge.sendResponse({
            type: "GM_LINK_PLAYER_CHARACTER",
            agentLink: l || i._id,
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
    }), e.find(".show-qr").click(async (t) => {
      t.preventDefault();
      const r = t.currentTarget.dataset.userid, s = t.currentTarget.dataset.username;
      await Ss(window.cyberpunkBridge, r, s);
    }), e.find(".refresh-user").click(async (t) => {
      t.preventDefault();
      const r = t.currentTarget.dataset.userid, s = game.users.get(r);
      s && (await s.unsetFlag(w, "agent-link"), await s.unsetFlag(w, "hasApiKey"), ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${s.name}. They will need to re-sync.`), this.render(!0));
    }), e.find("#refresh-all-users").click(async (t) => {
      t.preventDefault();
      for (let r of game.users)
        await r.unsetFlag(w, "agent-link"), await r.unsetFlag(w, "hasApiKey");
      ui.notifications.info("Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync."), this.render(!0);
    });
  }
}
const Ft = "pairing-request", Ge = "pairing-nonce";
function Kc(n) {
  n.hookIds.pairingUpdateUser || (n.hookIds.pairingUpdateUser = Hooks.on("updateUser", async (e, t) => {
    if (game.user.isGM && foundry.utils.getProperty(t, `flags.${w}.${Ft}`) && await Jc(n, e), e.id === game.user.id) {
      const r = foundry.utils.getProperty(t, `flags.${w}.${Ge}`);
      r && r.payload && (await Cs(r.payload, game.user.name), await game.user.unsetFlag(w, Ge), await game.user.unsetFlag(w, Ft));
    }
  }));
}
async function Jc(n, e) {
  try {
    const { payload: t } = await _s(n, e.id, e.name);
    await e.setFlag(w, Ge, { payload: t, ts: Date.now() });
  } catch (t) {
    console.warn(`[Bridge] Failed to mint pairing for ${e.name}: ${t.message}`), await e.setFlag(w, Ge, { error: t.message, ts: Date.now() });
  }
}
async function Xc() {
  if (game.user.isGM) {
    await Ss(window.cyberpunkBridge, game.user.id, game.user.name);
    return;
  }
  await game.user.setFlag(w, Ge, null), await game.user.setFlag(w, Ft, Date.now()), ui.notifications.info("Agent: requesting a pairing code from the GM…"), setTimeout(async () => {
    game.user.getFlag(w, Ge) || (await game.user.unsetFlag(w, Ft), ui.notifications.warn("Agent: no response from the GM. The GM's Foundry must be online to generate a link."));
  }, 12e3);
}
class Yc extends FormApplication {
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
    super.activateListeners(e), e.find("#cpr-generate-qr").click(async (t) => {
      t.preventDefault(), await Xc(), this.close();
    });
  }
}
const Qc = 1, Zc = /^[A-Z0-9]{4}-?[A-Z0-9]{4}$/i;
function Fr(n) {
  const e = (n || "").trim();
  if (!e) return null;
  for (const r of [() => atob(e), () => e])
    try {
      return JSON.parse(r());
    } catch {
    }
  return null;
}
function $r(n) {
  return Zc.test((n || "").trim());
}
async function el(n) {
  const e = n.trim().toUpperCase().replace(/^([A-Z0-9]{4})([A-Z0-9]{4})$/, "$1-$2"), t = (game.settings.get(w, "apiUrl") || Be).replace(/\/$/, "");
  let r;
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
class tl extends FormApplication {
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
    super.activateListeners(e), e.find("#cpr-setup-code").on("input", (t) => {
      this._renderPreview(e, Fr(t.currentTarget.value));
    }), e.find("#cpr-apply-setup").click(async (t) => {
      t.preventDefault(), await this._apply(e.find("#cpr-setup-code").val());
    });
  }
  /**
   * Render the decoded fields into the preview area. Called on every edit so the
   * displayed values stay in sync with what Apply would save. API/Reverb keys are
   * masked since they are secrets.
   */
  _renderPreview(e, t) {
    const r = e.find("#cpr-setup-preview"), s = e.find("#cpr-setup-code").val().trim();
    if ($r(s)) {
      const l = (game.settings.get(w, "apiUrl") || Be).replace(/\/$/, "");
      r.html(`<div class="notes" style="opacity:0.7;">Short code — configuration will be fetched from ${l} when you Apply.</div>`);
      return;
    }
    if (!t || !t.agentUrl) {
      const l = s ? "Not a valid setup code yet — re-copy it from the Agent." : "Paste a code above to preview its values.";
      r.html(`<div class="notes" style="opacity:0.7;">${l}</div>`);
      return;
    }
    const i = (l) => l ? `••••${String(l).slice(-4)}` : "—", a = [
      ["Agent URL", String(t.agentUrl).replace(/\/$/, "")],
      ["Channel ID", t.channelId ? String(t.channelId) : "—"],
      ["API Key", i(t.apiKey)],
      ["Reverb Key", i(t.reverbKey)],
      ["Reverb Port", t.reverbPort ? String(t.reverbPort) : "same as Agent URL"]
    ];
    r.html(a.map(([l, u]) => `
            <div style="display:flex;justify-content:space-between;gap:8px;">
                <span style="opacity:0.7;">${l}</span>
                <span style="font-family:monospace;">${u}</span>
            </div>
        `).join(""));
  }
  async _apply(e) {
    let t;
    if ($r(e))
      try {
        t = await el(e);
      } catch (i) {
        ui.notifications.error(`Agent setup: ${i.message}`);
        return;
      }
    else
      t = Fr(e);
    if (!t || !t.agentUrl) {
      ui.notifications.error("Agent setup: that does not look like a valid setup code. Re-copy it from the Agent.");
      return;
    }
    if (t.v && t.v !== Qc) {
      ui.notifications.error("Agent setup: this code was made by a newer Agent. Update the Bridge module.");
      return;
    }
    const i = { apiUrl: String(r.agentUrl).replace(/\/$/, "") };
    r.channelId && (i.channelId = String(r.channelId)), r.apiKey && (i.apiKey = String(r.apiKey)), r.reverbKey && (i.reverbKey = String(r.reverbKey)), i.reverbPort = r.reverbPort ? String(r.reverbPort) : "0";
    try {
      for (const [i, a] of Object.entries(r))
        await game.settings.set(w, i, a);
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
    const t = Object.values(ui.windows).find((r) => r instanceof SettingsConfig);
    if (t != null && t.element)
      for (const [r, s] of Object.entries(e)) {
        const i = t.element.find(`[name="${w}.${r}"]`);
        i.length && i.val(s);
      }
  }
}
function nl(n) {
  game.settings.registerMenu(w, "quickSetup", {
    name: "Quick Setup",
    label: "Paste Agent Config",
    hint: "Paste the Foundry Setup Code from the Agent to auto-fill the URL, Channel ID, API key and Reverb key.",
    icon: "fas fa-bolt",
    type: tl,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(w, "characterAssignment", {
    name: "Player Assignments",
    label: "Manage Characters",
    hint: "Assign playable characters to players who have linked their Agent API keys.",
    icon: "fas fa-users",
    type: Wc,
    restricted: !0
    // GM Only
  }), game.settings.registerMenu(w, "agentLink", {
    name: "Link my Agent",
    label: "Link my Agent",
    hint: "Generate a QR code to link the Cyberpunk Agent app on your phone to this game.",
    icon: "fas fa-qrcode",
    type: Yc,
    restricted: !1
    // Available to all players
  }), game.settings.register(w, "apiUrl", {
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
  }), game.settings.register(w, "reverbHost", {
    name: "WebSocket Host (override)",
    hint: 'Leave blank. Blank means "use the same host as the Agent URL". Fill this in only if your Agent serves its WebSocket from a different hostname. Setup codes never carry a host, so this is one field pasting a code will not correct for you - clear it by hand if you set it while troubleshooting.',
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => n.reconnect()
  }), game.settings.register(w, "reverbPort", {
    name: "WebSocket Port (override)",
    hint: 'Leave at 0. Zero means "use the same port as the Agent URL", which is right whenever the Agent serves its WebSocket on its own address - the normal setup. Set a port only if your Agent publishes Reverb separately. Pasting a setup code from a single-origin Agent resets this to 0.',
    scope: "world",
    config: !0,
    type: Number,
    default: 0,
    onChange: () => n.reconnect()
  }), game.settings.register(w, "reverbUseSSL", {
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
    onChange: () => n.reconnect()
  }), game.settings.register(w, "reverbKey", {
    name: "Reverb App Key",
    scope: "world",
    config: !0,
    type: String,
    default: Yr,
    onChange: () => n.reconnect()
  }), game.settings.register(w, "apiKey", {
    name: "API Key (Sanctum Token)",
    hint: "Generate this in your Cyberpunk Agent dashboard.",
    scope: "client",
    // Vital for player uniqueness
    config: !0,
    type: String,
    default: "",
    onChange: async (e) => {
      await game.user.setFlag(w, "hasApiKey", !!e), game.user.isGM && n.reconnect(), n.syncPlayerLink();
    }
  }), game.settings.register(w, "channelId", {
    name: "Channel ID",
    hint: "The unique channel name for this game group. Must match your Agent dashboard.",
    scope: "world",
    config: !0,
    type: String,
    default: "",
    onChange: () => {
      game.user.isGM && o.reconnect();
    }
  }), game.settings.register(w, "debugMode", {
    name: "Debug Mode",
    scope: "client",
    config: !0,
    type: Boolean,
    default: !1
  });
}
async function rl(n, e, { type: t, requestId: r, actorId: s }) {
  const i = game.actors.get(s);
  if (!i) {
    console.warn(`⚠️ Actor ID ${s} not found in this world.`);
    return;
  }
  await s.update(e.changes), ui.notifications.info(`💾 Sync: ${s.name} updated.`), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function Es(n, e, { requestId: t }) {
  let r = e.actorId, s = game.user;
  const i = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  if (i && (s = game.users.find((a) => a.getFlag(w, "agent-link") === i) || game.users.get(i) || (i === game.user.id ? game.user : null)), s || (s = game.user), !r) {
    const a = s.character;
    a && (r = a.id);
  }
  if (r !== null) {
    const a = game.actors.get(r);
    if (a) {
      const l = a.toObject(), u = (p) => (p || []).map((m) => {
        var y;
        return {
          _id: m._id,
          name: m.name,
          disabled: m.disabled,
          changes: m.changes,
          flags: (y = m.flags) != null && y["cyberpunk-red-core"] ? { "cyberpunk-red-core": m.flags["cyberpunk-red-core"] } : {}
        };
      }), f = {
        _id: a.id,
        name: a.name,
        type: a.type,
        img: l.img,
        system: l.system,
        items: (l.items || []).map((p) => {
          const m = {
            _id: p._id,
            name: p.name,
            type: p.type,
            img: p.img,
            system: p.system,
            effects: u(p.effects)
          };
          if (p.type === "cyberware") {
            const y = a.items.get(p._id);
            y && (m.system = {
              ...p.system,
              isInstalled: !!y.system.isInstalled,
              isFoundational: !!y.system.isFoundational
            });
          }
          return m;
        }),
        effects: u(l.effects),
        flags: l.flags && l.flags["cyberpunk-red-core"] ? { "cyberpunk-red-core": l.flags["cyberpunk-red-core"] } : {}
      };
      await n.sendResponse({ type: "ACTOR_DATA", actorId: r, actor: f, requestId: t, isGM: s.isGM, agentLink: s.getFlag(w, "agent-link") || s.id });
      return;
    }
  }
  await n.sendResponse({ type: "ACTOR_DATA", actorId: r, actor: !1, requestId: t, isGM: s.isGM, agentLink: s.getFlag(w, "agent-link") || s.id });
}
async function sl(n, e, { requestId: t, actorId: r }) {
  let s = game.user;
  const i = e.agentLink || e.agent_link || e.foundryUserId || e.requestId;
  i && (s = game.users.find((u) => u.getFlag(w, "agent-link") === i) || game.users.get(i) || (i === game.user.id ? game.user : null)), s || (s = game.user);
  function a(u) {
    var p;
    return ((p = canvas.tokens.placeables.filter((m) => {
      var y;
      return ((y = m.actor) == null ? void 0 : y.id) === u;
    })[0]) == null ? void 0 : p.id) ?? null;
  }
  let l = [];
  s.isGM ? l = game.actors.filter((u) => u.type === "character" || u.type === "mook").map((u) => {
    var p, m;
    const f = (p = Object.entries(u.ownership || {}).find(([y, b]) => {
      const v = game.users.get(y);
      return v && !v.isGM && b >= 3;
    })) == null ? void 0 : p[0];
    return {
      name: u.name,
      actorId: u.id,
      tokenId: a(u.id),
      agentLink: (f ? (m = game.users.get(f)) == null ? void 0 : m.getFlag(w, "agent-link") : null) || f || s.getFlag(w, "agent-link") || s.id
    };
  }) : (l = canvas.tokens.placeables.filter((u) => u.actor && (u.actor.type === "character" || u.actor.type === "mook")).filter((u) => u.actor.testUserPermission(s, "OWNER")).map((u) => {
    var p, m;
    const f = (p = Object.entries(u.actor.ownership || {}).find(([y, b]) => {
      const v = game.users.get(y);
      return v && !v.isGM && b >= 3;
    })) == null ? void 0 : p[0];
    return {
      name: u.name,
      actorId: u.actor.id,
      tokenId: a(u.actor.id),
      agentLink: (f ? (m = game.users.get(f)) == null ? void 0 : m.getFlag(w, "agent-link") : null) || f || null
    };
  }), s.character && (l.some((f) => f.actorId === s.character.id) || l.push({
    name: s.character.name,
    actorId: s.character.id,
    tokenId: a(s.character.id),
    agentLink: s.getFlag(w, "agent-link") || s.id
  })), !s.isGM && s.character && (l = l.filter((u) => u.actorId === s.character.id))), await n.sendResponse({ type: "ACTORS_DATA", actorId: r, actors: l, requestId: t, isGM: s.isGM, agentLink: s.getFlag(w, "agent-link") || s.id });
}
async function il(n, e, { type: t, requestId: r, actorId: s }) {
  const i = game.actors.get(s);
  if (!i) {
    console.warn(`Actor ID ${s} not found in this world.`);
    return;
  }
  const l = s.items.get(e.itemId);
  if (!l) {
    console.warn(`Item ID ${e.itemId} not found on actor ${s.name}.`);
    return;
  }
  await l.snort(), ui.notifications.info(`Sync: ${l.name} consumed.`), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, success: !0, requestId: i });
}
async function ol(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (s) {
    const i = s.items.get(e.itemId);
    if (i) {
      const a = `items.${e.itemId}.system.equipped`;
      await i.update({ "system.equipped": e.state }), await n.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: { [a]: e.state }, success: !0, requestId: t });
    }
  }
}
async function al(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (s) {
    const i = s.items.get(e.weaponId), a = e.ammoId ? s.items.get(e.ammoId) : null, l = async () => {
      await i.reload();
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
      a && (u[`items.${a.id}.system.amount`] = a.system.amount), s.items.filter((p) => p.type === "ammo").forEach((p) => {
        u[`items.${p.id}.system.amount`] = p.system.amount;
      }), await n.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: u, success: !0, requestId: t });
    };
    if (a) {
      let u = i.getInstalledItems("ammo");
      u && u.length > 0 && i.uninstallItems(u), setTimeout(function() {
        i.installItems([a]);
      }, 500), setTimeout(async () => {
        await l();
      }, 1500);
    } else
      await l();
  }
}
async function cl(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (!s) return;
  const i = s.items.get(e.cyberdeckId), a = s.items.get(e.programId);
  if (!i || !a) return;
  const l = i.system.installedItems.usedSlots || 0, u = i.system.installedItems.slots || 0, f = a.system.size || 1;
  if (l + f > u) {
    ui.notifications.warn("Not enough memory slots on cyberdeck.");
    return;
  }
  const p = i.system.installedItems.list || [];
  if (p.includes(e.programId)) return;
  const m = [...p, e.programId], y = l + f;
  await i.update({
    "system.installedItems.list": m,
    "system.installedItems.usedSlots": y
  }), await n.sendResponse({
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
async function ll(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (!s) return;
  const i = s.items.get(e.cyberdeckId), a = s.items.get(e.programId);
  if (!i) return;
  const l = i.system.installedItems.list || [];
  if (!l.includes(e.programId)) return;
  const u = l.filter((b) => b !== e.programId), f = a && a.system.size || 1, p = i.system.installedItems.usedSlots || 0, m = Math.max(0, p - f);
  await i.update({
    "system.installedItems.list": u,
    "system.installedItems.usedSlots": m
  });
  const y = {
    [`items.${e.cyberdeckId}.system.installedItems.list`]: u,
    [`items.${e.cyberdeckId}.system.installedItems.usedSlots`]: m
  };
  a && a.system.isRezzed && (await a.update({ "system.isRezzed": !1 }), y[`items.${e.programId}.system.isRezzed`] = !1), await n.sendResponse({ type: "SHEET_DELTA", actorId: r, delta: y, success: !0, requestId: t });
}
async function ul(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (s) {
    const i = s.items.get(e.programId);
    i && (await i.update({ "system.isRezzed": e.targetState }), await n.sendResponse({
      type: "SHEET_DELTA",
      actorId: i,
      delta: { [`items.${e.programId}.system.isRezzed`]: e.targetState },
      success: !0,
      requestId: r
    }));
  }
}
async function dl(n, e, { requestId: t, actorId: r }) {
  var i, a;
  const s = game.actors.get(r);
  if (s) {
    const l = document.createElement("a");
    l.dataset.rollType = e.rollType, l.dataset.cyberdeckId = e.cyberdeckId, l.dataset.rollTitle = e.programName, l.dataset.interfaceAbility = e.programName, l.dataset.itemId = e.cyberdeckId, l.dataset.programId = e.programId, l.dataset.executionType = e.executionType;
    const u = async () => {
      await s.sheet._onRoll({
        type: "click",
        currentTarget: l
      });
    }, f = await n.rollAndCapture(r, u, e.rollMode);
    f.success && await n.sendResponse({
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
const Tn = "Out of Range";
function hl(n) {
  const e = String(n ?? "").replace(/<[^>]*>/g, "").trim();
  return /^\d+$/.test(e) ? Number(e) : /^vs\b/i.test(e) ? "VS" : Tn;
}
async function fl(n) {
  var t;
  const e = (t = n == null ? void 0 : n.system) == null ? void 0 : t.dvTable;
  if (!e) return null;
  try {
    const r = game.packs.get(game.settings.get(game.system.id, "dvRollTableCompendium")), s = r == null ? void 0 : r.index.find((l) => l.name === e);
    if (!s) return null;
    const i = await r.getDocument(s._id), a = [];
    for (const l of i.results) {
      if (l.type !== "text") continue;
      const [u, f] = l.range;
      a.push({ min: u, max: f, dv: hl(l.text ?? l.description), label: `${u}-${f}m` });
    }
    return a.length ? a.sort((l, u) => l.min - u.min) : null;
  } catch (r) {
    return console.warn("[Bridge] Could not read Foundry DV table, using built-in", r), null;
  }
}
async function Rs(n, e) {
  const t = Oa(n), r = await fl(n);
  if (r) {
    const i = r.findIndex((l) => e >= l.min && e <= l.max);
    return { dv: i === -1 ? Tn : r[i].dv, table: r, activeIndex: i, category: t, source: "foundry" };
  }
  const s = Da(t, e);
  return { dv: s === 99 ? Tn : s, table: null, activeIndex: -1, category: t, source: "builtin" };
}
async function pl(n, e, { requestId: t, actorId: r }) {
  var a, l;
  const s = game.actors.get(r), i = s.items.get(e.weaponId);
  if (s && i) {
    const u = async () => {
      await s.sheet._onRoll({
        "data-roll-type": "damage",
        "data-item-id": s.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "damage",
          "data-item-id": s.id
        }
      });
    }, f = await n.rollAndCapture(r, u, e.rollMode);
    f.success && await n.sendResponse({
      type: "ROLL_RESULT",
      rollMode: p.rollMode,
      requestId: r,
      actorId: i,
      total: p.total,
      isCriticalSuccess: p.isCriticalSuccess,
      isCriticalFailure: p.isCriticalFailure,
      label: `${s.name} (Damage)`,
      rawRoll: {
        total: f.total,
        isCriticalSuccess: f.isCriticalSuccess,
        isCriticalFailure: f.isCriticalFailure,
        label: f.label,
        resultTotal: (a = f.rawRoll) == null ? void 0 : a.resultTotal,
        rollTitle: (l = f.rawRoll) == null ? void 0 : l.rollTitle
      },
      success: !0
    });
  }
}
async function gl(n, e, { requestId: t, actorId: r }) {
  var i, a;
  const s = game.actors.get(r);
  if (s) {
    const l = async () => {
      await s.sheet._onRoll({
        "data-roll-type": "deathsave",
        "data-roll-title": "Death Save",
        type: "click",
        currentTarget: {
          "data-roll-type": "deathsave",
          "data-roll-title": "Death Save"
        }
      });
    }, u = await n.rollAndCapture(r, l, e.rollMode);
    if (u.success) {
      const f = s.system.derivedStats.deathsave || {};
      await n.sendResponse({
        type: "ROLL_RESULT",
        rollMode: u.rollMode,
        requestId: t,
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
          resultTotal: (i = u.rawRoll) == null ? void 0 : i.resultTotal,
          rollTitle: (a = u.rawRoll) == null ? void 0 : a.rollTitle
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
async function ml(n, e, { requestId: t, actorId: r }) {
  var l, u;
  const s = game.actors.get(r), i = async () => {
    await s.sheet._onRoll({
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
      total: a.total,
      isCriticalSuccess: a.isCriticalSuccess,
      isCriticalFailure: a.isCriticalFailure,
      label: a.label,
      resultTotal: (l = a.rawRoll) == null ? void 0 : l.resultTotal,
      rollTitle: (u = a.rawRoll) == null ? void 0 : u.rollTitle
    },
    success: !0
  });
}
async function yl(n, e, { requestId: t, actorId: r }) {
  var i, a;
  const s = game.actors.get(r);
  if (s) {
    const l = async () => {
      await s.rollInitiative();
    }, u = await n.rollAndCapture(r, l, e.rollMode);
    u.success && await n.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: t,
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
        resultTotal: (i = u.rawRoll) == null ? void 0 : i.resultTotal,
        rollTitle: (a = u.rawRoll) == null ? void 0 : a.rollTitle
      },
      success: !0
    });
  }
}
async function wl(n, e, { requestId: t, actorId: r }) {
  var i, a;
  const s = game.actors.get(r);
  if (s) {
    const l = s.items.getName(e.itemName);
    if (l) {
      const u = {
        "data-roll-type": "roleAbility",
        "data-roll-title": e.label,
        "data-item-id": l.id,
        type: "click",
        currentTarget: {
          "data-roll-type": "roleAbility",
          "data-roll-title": e.label,
          "data-item-id": l.id,
          "data-item-subtype": e.label
        }
      };
      e.isAbility && (u["data-roll-subtype"] = "subRoleAbility", u["data-role-name"] = e.label, u.currentTarget["data-roll-subtype"] = "subRoleAbility", u.currentTarget["data-role-name"] = e.label);
      const f = async () => {
        await s.sheet._onRoll(u);
      }, p = await n.rollAndCapture(r, f, e.rollMode);
      p.success && await n.sendResponse({
        type: "ROLL_RESULT",
        rollMode: p.rollMode,
        requestId: t,
        actorId: r,
        total: p.total,
        isCriticalSuccess: p.isCriticalSuccess,
        isCriticalFailure: p.isCriticalFailure,
        label: e.label,
        rawRoll: {
          total: p.total,
          isCriticalSuccess: p.isCriticalSuccess,
          isCriticalFailure: p.isCriticalFailure,
          label: p.label,
          resultTotal: (i = p.rawRoll) == null ? void 0 : i.resultTotal,
          rollTitle: (a = p.rawRoll) == null ? void 0 : a.rollTitle
        },
        success: !0
      });
    }
  }
}
async function vl(n, e, { requestId: t, actorId: r }) {
  var i, a;
  const s = game.actors.get(r);
  if (s) {
    const l = s.items.getName(e.label);
    if (l) {
      const u = async () => {
        await s.sheet._onRoll({
          "data-roll-type": "skill",
          "data-roll-title": e.label,
          "data-item-id": l.id,
          type: "click",
          currentTarget: {
            "data-roll-type": "skill",
            "data-roll-title": e.label,
            "data-item-id": l.id
          }
        });
      }, f = await n.rollAndCapture(r, u, e.rollMode);
      f.success && await n.sendResponse({
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
async function bl(n, e, { requestId: t, actorId: r }) {
  var i, a;
  const s = game.actors.get(r);
  if (s) {
    const l = async () => {
      await s.sheet._onRoll({
        "data-roll-type": "stat",
        "data-roll-title": e.label,
        type: "click",
        currentTarget: {
          "data-roll-type": "stat",
          "data-roll-title": e.label
        }
      });
    }, u = await n.rollAndCapture(r, l, e.rollMode);
    u.success && await n.sendResponse({
      type: "ROLL_RESULT",
      rollMode: u.rollMode,
      requestId: t,
      actorId: r,
      total: u.total,
      isCriticalSuccess: u.isCriticalSuccess,
      isCriticalFailure: u.isCriticalFailure,
      label: e.label,
      rawRoll: {
        total: u.total,
        isCriticalSuccess: u.isCriticalSuccess,
        isCriticalFailure: u.isCriticalFailure,
        label: u.label,
        resultTotal: (i = u.rawRoll) == null ? void 0 : i.resultTotal,
        rollTitle: (a = u.rawRoll) == null ? void 0 : a.rollTitle
      },
      success: !0
    });
  }
}
async function kl(n, e, { requestId: t, actorId: r }) {
  t && n.activeRequests.set(t, { actorId: r, timestamp: Date.now() });
  const s = new Roll(e.formula);
  await s.evaluate(), await s.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: game.actors.get(r) }),
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
async function _l(n, e, { requestId: t, actorId: r, tokenId: s }) {
  var a, l, u, f, p, m;
  const i = game.actors.get(r);
  if (i) {
    const y = e.weaponId, b = e.fireMode, v = canvas.tokens.get(e.targetId), T = "firetype-" + y, _ = "cyberpunk-red-core";
    let k = "";
    switch (b) {
      case "Auto":
        k = "autofire";
        break;
      case "Suppress":
        k = "suppressive";
        break;
      case "Aimed":
        k = "aimed", await i.setFlag(_, "aimedLocation", "head");
        break;
      default:
        k = "";
        break;
    }
    v && v.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), k === "" ? await i.unsetFlag(_, T) : await i.setFlag(_, T, k);
    const S = document.createElement("a");
    S.dataset.rollType = "attack", S.dataset.itemId = y, S.dataset.rollTitle = b + " Attack";
    const A = async () => {
      await i.sheet._onRoll({
        preventDefault: () => {
        },
        currentTarget: S,
        type: "click"
      }, { showDialog: !0 });
    };
    let E = null;
    if (v) {
      const L = canvas.tokens.get(s) || ((a = i.getActiveTokens()) == null ? void 0 : a[0]) || canvas.tokens.placeables.find((P) => {
        var O;
        return ((O = P.actor) == null ? void 0 : O.id) === i.id;
      });
      if (L) {
        const P = On(L, v), O = i.items.get(y);
        E = (await Rs(O, P)).dv;
      }
    }
    const R = await n.rollAndCapture(r, A, e.rollMode);
    if (R.success) {
      let L = null;
      typeof E == "number" ? L = R.total >= E ? "Hit" : "Miss" : E === "Out of Range" && (L = "Miss");
      const P = ((f = (u = (l = i.items.get(y)) == null ? void 0 : l.system) == null ? void 0 : u.magazine) == null ? void 0 : f.value) ?? null;
      await n.sendResponse({
        type: "ROLL_RESULT",
        rollMode: E.rollMode,
        requestId: r,
        actorId: i,
        total: E.total,
        isCriticalSuccess: E.isCriticalSuccess,
        isCriticalFailure: E.isCriticalFailure,
        label: C + " Attack",
        rawRoll: {
          total: R.total,
          isCriticalSuccess: R.isCriticalSuccess,
          isCriticalFailure: R.isCriticalFailure,
          label: R.label,
          resultTotal: (p = R.rawRoll) == null ? void 0 : p.resultTotal,
          rollTitle: (m = R.rawRoll) == null ? void 0 : m.rollTitle
        },
        dv: E,
        ammoTo: P,
        outcome: L,
        success: !0
      });
    }
  }
}
async function Sl(n, e, { type: t, requestId: r, actorId: s, tokenId: i, remote: a }) {
  if (game.paused) return;
  const l = canvas.tokens.get(i);
  if (l) {
    let u = {};
    e.direction === "up" ? u.y = l.document.y - canvas.grid.size : e.direction === "down" ? u.y = l.document.y + canvas.grid.size : e.direction === "left" ? u.x = l.document.x - canvas.grid.size : e.direction === "right" && (u.x = l.document.x + canvas.grid.size);
    const f = l.center, p = {
      x: f.x + ((u.x ?? l.document.x) - l.document.x),
      y: f.y + ((u.y ?? l.document.y) - l.document.y)
    };
    if (!ss(ft(e.agent_link || e.agentLink, { remote: a })) && CONFIG.Canvas.polygonBackends.move.testCollision(
      f,
      p,
      { type: "move", mode: "any" }
    )) {
      ui.notifications.warn(`${l.name}'s path is blocked by a wall.`), await n.sendResponse({ type: "CONFIRMATION", action: t, actorId: s, tokenId: i, success: !1, message: "Path blocked by a wall", requestId: r });
      return;
    }
    await l.document.update(u), await n.sendResponse({ type: "CONFIRMATION", action: t, actorId: s, tokenId: i, success: !0, requestId: r });
  } else
    console.warn(`MOVE_TOKEN: Token ID ${s} not found.`), await o.sendResponse({ type: "CONFIRMATION", action: r, actorId: n, tokenId: s, success: !1, message: "Token not found", requestId: i });
}
async function Cl(n, e, { type: t, requestId: r, actorId: s }) {
  const i = canvas.tokens.get(e.targetTokenId);
  i && (i.setTarget(!0, { releaseOthers: !0, groupSelection: !0 }), await n.sendResponse({ type: "CONFIRMATION", action: t, actorId: s, tokenId: e.targetTokenId, success: !0, requestId: r }));
}
async function Tl(n, e, { requestId: t, actorId: r, tokenId: s }) {
  var u;
  const i = canvas.tokens.placeables.filter((f) => {
    var p;
    return ((p = f.actor) == null ? void 0 : p.id) === r;
  });
  s === null && (s = ((u = i[0]) == null ? void 0 : u.id) ?? null);
  const a = canvas.tokens.get(s);
  let l = [];
  if (a) {
    const f = canvas.dimensions;
    l = canvas.tokens.placeables.filter((p) => {
      const m = !p.document.hidden, y = p.actor && (p.actor.type === "character" || p.actor.type === "mook"), b = p.x >= f.sceneX && p.x <= f.sceneX + f.sceneWidth && p.y >= f.sceneY && p.y <= f.sceneY + f.sceneHeight;
      return m && y && b && p.id !== a.id;
    }).map((p) => ({
      name: p.name,
      id: p.id,
      distanceM: On(a, p),
      type: p.actor.type
    })).sort((p, m) => p.distanceM - m.distanceM);
  } else
    console.warn(`LIST_VISIBLE_TOKENS: Token ID ${s} not found.`);
  await n.sendResponse({ type: "VISIBLE_TOKENS_DATA", actorId: r, tokens: l, requestId: t });
}
async function Al(n, e, { requestId: t, actorId: r, tokenId: s }) {
  var f;
  const i = canvas.tokens.get(s), a = e.targetTokenId || ((f = Array.from(game.user.targets)[0]) == null ? void 0 : f.id), l = canvas.tokens.get(a), u = e.weaponId;
  if (i && l) {
    const p = On(i, l), m = i.actor.items.get(u);
    if (!m) {
      console.warn(`GET_DV_INFO: Weapon ID ${u} not found on actor ${i.actor.name}.`), await n.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: null, requestId: t });
      return;
    }
    const { dv: y, table: b, activeIndex: v, category: T, source: _ } = await Rs(m, p), k = {
      targetName: l.name,
      distanceMeters: p,
      weaponCategory: T,
      dv: y,
      table: b,
      activeIndex: v,
      source: _
    };
    await n.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: k, requestId: t });
  } else
    console.warn(`GET_DV_INFO: Token(s) not found. Jim: ${!!i}, Target: ${!!l}`), await n.sendResponse({ type: "DV_INFO_DATA", actorId: r, result: null, requestId: t });
}
async function Il(n, e, { requestId: t, actorId: r }) {
  var R;
  const s = game.actors.get(r);
  if (!s) return;
  const i = e.weaponId, a = i ? s.items.get(i) : null;
  let l = "None", u = 0, f = "None", p = 0, m = 0;
  if (a) {
    l = a.system.weaponSkill;
    const L = s.items.find((P) => P.type === "skill" && P.name === l);
    u = L && Number(L.system.level) || 0, f = L && L.system.stat || "ref", p = Number((R = s.system.stats[f]) == null ? void 0 : R.value) || 0, m = Number(a.system.attackmod) || 0;
  }
  let y = 0;
  const b = [], v = Number(s.system.derivedStats.hp.value) || 0, T = Number(s.system.derivedStats.seriouslyWounded) || 0, _ = s.items.find((L) => L.name === "Stim" && L.type === "drug"), k = _ && _.effects.some((L) => L.disabled === !1);
  if (v <= 0)
    y -= 4, b.push({ title: "Mortally Wounded", penalty: -4, description: "All actions at -4." });
  else if (v <= T) {
    const L = k ? 0 : -2;
    y += L, b.push({
      title: k ? "Seriously Wounded (Stim Active)" : "Seriously Wounded",
      penalty: L,
      description: k ? "Ignoring penalty due to Stim drug." : "All actions at -2."
    });
  }
  const S = s.items.filter((L) => L.type === "criticalInjury"), A = Fa(a ? l : null, a);
  S.forEach((L) => {
    var ue;
    const P = L.name || "Injury", O = (((ue = L.system.description) == null ? void 0 : ue.value) || "").replace(/<[^>]*>/g, "");
    let F = 0, j = !1;
    const ie = [];
    if ((L.effects || []).forEach((U) => {
      var bt, kt, _t, We, St;
      if (!((bt = U.changes) != null && bt.length)) return;
      j = !0;
      const Xt = U.active ?? (!U.disabled && !((kt = U.system) != null && kt.isSuppressed)), vt = ((St = (We = (_t = U.flags) == null ? void 0 : _t["cyberpunk-red-core"]) == null ? void 0 : We.changes) == null ? void 0 : St.situational) || [];
      U.changes.forEach((Le, he) => {
        var J, Ct;
        const Me = parseInt(Le.value);
        if (isNaN(Me)) return;
        const Pe = `${$a(Le.key)} ${Me > 0 ? "+" : ""}${Me}`, V = String(Le.key).replace(/^bonuses\./, "");
        if (!Xt) return ie.push(`${Pe} (inactive)`);
        if (V === Le.key) return ie.push(`${Pe} (in stat)`);
        if (!A.includes(V)) return ie.push(`${Pe} (not this roll)`);
        if ((J = vt[he]) != null && J.isSituational && !((Ct = vt[he]) != null && Ct.onByDefault))
          return ie.push(`${Pe} (situational, tick it in Foundry's roll dialog)`);
        F += Me;
      });
    }), !j) {
      const U = String(P).toLowerCase();
      (O.includes("-2") || U.includes("arm") || U.includes("eye")) && (F = -2);
    }
    y += F, b.push({ title: P, description: O, penalty: F, note: ie.join(" · ") });
  });
  const E = {
    actorName: s.name,
    baseBonus: p + u + m,
    breakdown: {
      statName: f,
      statValue: p,
      skillName: l,
      skillLevel: u,
      weaponAcc: m
    },
    totalPenalty: y,
    finalModifier: p + u + m + y,
    injuries: b
  };
  await o.sendResponse({ type: "ROLL_MODIFIERS_DATA", actorId: i, result: R, requestId: r });
}
async function El(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (s) {
    const i = `system.${e.label}`;
    let a;
    if (e.operation === "inc") {
      const l = i.split(".");
      let u = s;
      for (let m = 0; m < l.length; m++)
        u = m === 0 ? u[l[m]] : u == null ? void 0 : u[l[m]];
      const f = Number(u) || 0, p = Number(e.delta) || 0;
      a = f + p;
    } else
      l = typeof e.value == "string" ? e.value : Number(e.value) || 0;
    await n.update({ [s]: l }), await o.sendResponse({ type: "SHEET_DELTA", actorId: i, delta: { [s]: l }, tab: "stats", success: !0, requestId: r });
  }
}
async function Rl(n, e, { requestId: t, actorId: r, debug: s }) {
  if (r == null) {
    s && console.log("[Bridge] Actor ID Not set:");
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
async function Ll(n, e, { requestId: t, actorId: r, debug: s, remote: i }) {
  const a = [], l = ft(e.agent_link || e.agentLink, { remote: i }), u = !!(l != null && l.isGM);
  for (const f of game.journal) {
    const p = f.pages.filter((m) => m.type === "cpr-agent.datapool");
    for (const m of p) {
      const y = m.system.entries || [], b = [];
      for (const v of y) {
        if (v.hidden && !u) continue;
        let T = v.htmlContent;
        v.type === "html" && T && (T = await TextEditor.enrichHTML(T, { async: !0 })), b.push({
          id: v.id,
          icon: v.icon,
          title: v.title,
          type: v.type,
          htmlContent: T,
          pdfPath: v.pdfPath,
          hidden: !!v.hidden
        });
      }
      !b.length && y.length || a.push({
        journalId: f.id,
        journalName: f.name,
        pageId: m.id,
        pageName: m.name,
        entries: b
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
async function Ml(n, e, { debug: t }) {
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
  a || console.warn(`[Bridge] PAIR_AGENT nonce not in local cache (GM reload?). Trusting server payload for ${r}.`);
  const l = game.users.get(r);
  if (!l) {
    console.warn(`[Bridge] PAIR_AGENT: Foundry user ${r} not found.`);
    return;
  }
  n.pendingPairings.delete(i), await l.setFlag(w, "agent-link", s), await l.setFlag(w, "hasApiKey", !0), t && console.log(`[Bridge] PAIR_AGENT: linked ${l.name} -> ${s}`), ui.notifications.info(`Agent: ${l.name} linked successfully.`), (u = Object.values(ui.windows).find((f) => {
    var p;
    return ((p = f.options) == null ? void 0 : p.id) === "cpr-agent-assignment-menu";
  })) == null || u.render(!1), await n.sendResponse({
    type: "PAIR_CONFIRMED",
    foundryUserId: i,
    agentLink: n,
    nonce: s,
    success: !0
  });
}
async function Ls(n, e, t) {
  try {
    await Es(n, { actorId: e }, { requestId: t, actorId: e });
  } catch (r) {
    console.error("[Bridge] cyberware refreshActor failed", r);
  }
}
function Ms(n) {
  return typeof n.recursiveGetAllInstalledItems != "function" ? [] : n.recursiveGetAllInstalledItems().filter((e) => e.type === "cyberware");
}
function Pl(n, e) {
  var s, i, a;
  const t = n.items.filter(
    (l) => l.type === "cyberware" && l.system.isInstalled && l.system.isFoundational && l.system.type === e.system.type
  ), r = [];
  for (const l of t) {
    r.push({ id: l._id, name: l.name });
    let u = [...((s = l.system.installedItems) == null ? void 0 : s.list) || []];
    for (; u.length > 0; ) {
      const f = u;
      u = [];
      for (const p of f) {
        const m = n.items.get(p), y = (i = m == null ? void 0 : m.system) == null ? void 0 : i.installedItems;
        if (y != null && y.allowed) {
          const b = typeof m.availableInstallSlots == "function" ? m.availableInstallSlots() : 1 / 0;
          (a = y.allowedTypes) != null && a.includes(e.type) && b >= (e.system.size || 1) && r.push({ id: m._id, name: m.name }), u = u.concat(y.list || []);
        }
      }
    }
  }
  return i;
}
async function Nl(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (!s) return;
  const i = s.items.get(e.itemId);
  if (!i) {
    await n.sendResponse({ type: "CYBERWARE_INSTALL_OPTIONS", requestId: t, actorId: r, success: !1, reason: "Item not found." });
    return;
  }
  const a = !!i.system.isFoundational, l = a ? [] : Pl(s, i), u = Ms(i), f = u.reduce((y, b) => `${y} + ${b.system.humanityLoss.roll}`, i.system.humanityLoss.roll), p = u.reduce((y, b) => y + b.system.humanityLoss.static, i.system.humanityLoss.static), m = a || l.length > 0;
  await n.sendResponse({
    type: "CYBERWARE_INSTALL_OPTIONS",
    requestId: r,
    actorId: i,
    itemId: s._id,
    itemName: s.name,
    isFoundational: l,
    canInstall: m,
    reason: m ? null : "No compatible foundational cyberware of the correct type is installed.",
    targets: l,
    humanityLoss: { roll: `${f}`, static: p },
    success: !0
  });
}
async function xl(n, e, { requestId: t, actorId: r }) {
  var m, y, b, v, T, _;
  const s = game.actors.get(r);
  if (!s) return;
  const i = s.items.get(e.itemId);
  if (!i) return;
  const l = !!i.system.isFoundational ? s : s.items.get(e.foundationalId);
  if (!l) {
    await n.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: t, actorId: r, itemId: e.itemId, success: !1, reason: "Install target not found." });
    return;
  }
  const u = Ms(i), f = e.humanityLossType || "none";
  let p = !1;
  try {
    const k = Number((b = (y = (m = s.system) == null ? void 0 : m.derivedStats) == null ? void 0 : y.humanity) == null ? void 0 : b.value) || 0;
    if (p = await l.installItems([i]), p && (await s.loseHumanityValue([i].concat(u), f), f !== "none")) {
      const S = Number((_ = (T = (v = s.system) == null ? void 0 : v.derivedStats) == null ? void 0 : T.humanity) == null ? void 0 : _.value) || 0, A = Math.max(0, k - S);
      await n.sendResponse({
        type: "ROLL_RESULT",
        actorId: r,
        playerName: s.name,
        total: A,
        rollMode: "publicroll",
        label: `${s.name} Humanity Loss`,
        rawRoll: {
          rollTitle: `${i.name} Humanity Loss`,
          total: A,
          formula: f === "static" ? `${A}` : ""
        },
        success: !0
      });
    }
  } catch (k) {
    console.error("[Bridge] installCyberware failed", k);
  }
  await n.sendResponse({ type: "CYBERWARE_INSTALLED", requestId: t, actorId: r, itemId: i._id, success: p }), p && await Ls(n, r, t);
}
async function Ol(n, e, { requestId: t, actorId: r }) {
  const s = game.actors.get(r);
  if (s) {
    try {
      await n.uninstallCyberware(e.itemId, e.foundationalId || null, !0);
    } catch (s) {
      console.error("[Bridge] uninstallCyberware failed", s);
    }
    await n.sendResponse({ type: "CYBERWARE_UNINSTALLED", requestId: t, actorId: r, itemId: e.itemId, success: !0 }), await Ls(n, r, t);
  }
}
const oe = "phoneNumber", yt = "phoneBook", Ps = "phoneDeadNumbers", Ns = 40, ae = (n) => String(n ?? "").replace(/\D/g, "");
function Q(n) {
  const e = ae(n);
  return e.length === 9 ? `${e.slice(0, 3)}-${e.slice(3, 7)}-${e.slice(7)}` : String(n ?? "");
}
function Dl() {
  game.settings.register(w, Ps, {
    name: "Agent phone: unassigned numbers",
    hint: "What happens when a player dials a number no contact has.",
    scope: "world",
    config: !0,
    type: String,
    choices: {
      "not-in-service": '"This number is not in service"',
      "ring-gm": "Ring the GM, who can answer as any contact"
    },
    default: "not-in-service"
  });
}
function Vt(n) {
  const e = ae(n);
  return e ? game.actors.find((t) => ae(t.getFlag(w, oe)) === e) ?? null : null;
}
function Bl() {
  for (let n = 0; n < 1e3; n++) {
    const e = `555${String(Math.floor(Math.random() * 1e6)).padStart(6, "0")}`;
    if (!Vt(e)) return Q(e);
  }
  throw new Error("No free phone numbers");
}
async function xs(n) {
  const e = n == null ? void 0 : n.getFlag(w, oe);
  if (e || !game.user.isGM) return e ?? null;
  const t = Bl();
  return await n.setFlag(w, oe, t), t;
}
async function jn(n, e) {
  const t = ae(e);
  if (!t) return n.unsetFlag(w, oe);
  const r = Vt(t);
  if (r && r.id !== n.id) throw new Error(`${Q(t)} already belongs to ${r.name}`);
  return n.setFlag(w, oe, Q(t));
}
async function Fl() {
  var e, t, r;
  for (const s of game.scenes)
    for (const i of s.tokens) {
      const a = (r = (t = (e = i._source.delta) == null ? void 0 : e.flags) == null ? void 0 : t[w]) == null ? void 0 : r[oe], l = i.baseActor;
      if (!(!a || !l || l.getFlag(w, oe)))
        try {
          await jn(l, a), console.info(`[Bridge] Moved phone number ${a} from a ${l.name} token onto the actor`);
        } catch (u) {
          console.warn(`[Bridge] Could not move ${a} onto ${l.name}: ${u.message}`);
        }
    }
  const n = game.actors.filter((s) => s.getFlag(w, "phoneEnabled") && !s.getFlag(w, oe));
  for (const s of n) await xs(s);
  n.length && console.info(`[Bridge] Gave phone numbers to ${n.map((s) => s.name).join(", ")}`);
}
const Wt = (n) => (n == null ? void 0 : n.getFlag(w, yt)) ?? {};
async function Os(n, e, t = "") {
  const r = ae(e);
  if (!n || r.length < 3 || r.length > 15) throw new Error("Not a phone number");
  const s = Wt(n), i = s[r] ?? { label: "", savedAt: Date.now() }, a = String(t || "").trim().slice(0, Ns);
  return await n.setFlag(w, yt, { ...s, [r]: { ...i, label: a || i.label } }), r;
}
async function $l(n, e, t) {
  const r = ae(e), s = Wt(n);
  if (!s[r]) throw new Error("Not in your contacts");
  await n.setFlag(w, yt, {
    ...s,
    [r]: { ...s[r], label: String(t || "").trim().slice(0, Ns) }
  });
}
async function Ul(n, e) {
  const t = ae(e);
  Wt(n)[t] && await n.update({ [`flags.${w}.${yt}.-=${t}`]: null });
}
const Hl = /@Phone\[([^\]]+)\](?:\{([^}]+)\})?/g;
function jl(n) {
  var r, s;
  const e = String(n ?? "").trim();
  if (/^[\d\s\-().+]+$/.test(e) && ae(e).length >= 3) return ae(e);
  const t = game.actors.get(e) ?? ((s = (r = game.actors).getName) == null ? void 0 : s.call(r, e)) ?? game.actors.find((i) => i.name === e);
  return ae(t == null ? void 0 : t.getFlag(w, oe)) || null;
}
function Gl(n, e) {
  const t = document.createElement("a");
  return t.className = "cpr-phone-chip", t.dataset.cprPhone = n, t.title = "Phone number", t.innerHTML = '<i class="fas fa-phone"></i> ', t.append(document.createTextNode(e || Q(n))), t;
}
const ql = `
a.cpr-phone-chip {
    display: inline-flex; align-items: center; gap: 0.3em;
    margin: 0 0.1em; padding: 0.05em 0.6em;
    border: 1px solid #22b8b0; border-radius: 999px;
    background: rgba(34, 184, 176, 0.15); color: #138a84;
    font-weight: 700; text-decoration: none; white-space: nowrap; cursor: pointer;
}
a.cpr-phone-chip:hover { background: rgba(34, 184, 176, 0.3); color: #0b5c58; text-shadow: none; }
`;
function zl() {
  if (!document.getElementById("cpr-agent-phone-chip-css")) {
    const n = document.createElement("style");
    n.id = "cpr-agent-phone-chip-css", n.textContent = ql, document.head.append(n);
  }
  CONFIG.TextEditor.enrichers.push({
    pattern: Hl,
    enricher: async (n) => {
      var t;
      const e = jl(n[1]);
      if (!e) {
        const r = document.createElement("span");
        return r.textContent = n[2] || n[1], (t = game.user) != null && t.isGM && (r.className = "cpr-phone-chip cpr-phone-chip--missing", r.title = `@Phone[${n[1]}]: no actor by that name or id has a phone number. Tick "Agent phone contact" in its token config.`, r.style.cssText = "text-decoration: line-through; opacity: 0.6; cursor: help;"), r;
      }
      return Gl(e, n[2]);
    }
  });
}
function Vl() {
  document.addEventListener("click", async (n) => {
    var s, i;
    const e = (i = (s = n.target).closest) == null ? void 0 : i.call(s, "a.cpr-phone-chip[data-cpr-phone]");
    if (!e) return;
    n.preventDefault();
    const t = e.dataset.cprPhone, r = lt(game.user) ? game.user.character : null;
    if (r)
      try {
        await Os(r, t), ui.notifications.info(`${Q(t)} saved to ${r.name}'s Agent contacts.`);
      } catch (a) {
        ui.notifications.warn(a.message);
      }
    else {
      try {
        await navigator.clipboard.writeText(Q(t));
      } catch {
      }
      ui.notifications.info(`${Q(t)} copied.`);
    }
  });
}
const $t = "phoneThreads", be = (n, e) => `${n}.${e}`;
function Y(n) {
  const [e, t] = String(n || "").split(".");
  return e && t ? { npcId: e, pcId: t } : null;
}
function Wl() {
  game.settings.register(w, $t, {
    scope: "world",
    config: !1,
    type: Object,
    default: {}
  });
}
function Kl() {
  return game.actors.filter((n) => n.getFlag(w, "phoneEnabled"));
}
function Jl() {
  const n = /* @__PURE__ */ new Map();
  for (const e of game.users)
    lt(e) && e.character && n.set(e.character.id, e.character);
  return [...n.values()];
}
function ce(n) {
  return n ? game.users.filter((e) => {
    var t;
    return !e.isGM && (((t = e.character) == null ? void 0 : t.id) === n.id || n.testUserPermission(e, CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER));
  }) : [];
}
function rt(n) {
  return { known: !0, gmReadAt: 0, ...(game.settings.get(w, $t) || {})[n] || {} };
}
async function Nt(n, e) {
  if (!game.user.isGM) return;
  const t = foundry.utils.deepClone(game.settings.get(w, $t) || {});
  t[n] = { ...rt(n), ...e }, await game.settings.set(w, $t, t);
}
const Xl = (n) => String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"), Ds = 1e3;
async function Gn({ npc: n, pc: e, fromNpc: t, text: r, kind: s = "text" }) {
  const i = String(r || "").trim().slice(0, Ds);
  if (!i) throw new Error("Empty message");
  const a = t ? n : e, l = game.users.filter((f) => f.isGM).map((f) => f.id), u = [.../* @__PURE__ */ new Set([...ce(e).map((f) => f.id), ...l])];
  return ChatMessage.create({
    content: `<p>${Xl(i)}</p>`,
    speaker: ChatMessage.getSpeaker({ actor: a }),
    whisper: u,
    flags: {
      [w]: {
        phone: {
          thread: be(n.id, e.id),
          from: a.id,
          to: (t ? e : n).id,
          text: i,
          // 'call' marks a call-log line (C2), drawn as a system row.
          ...s !== "text" ? { kind: s } : {}
        }
      }
    }
  });
}
const fe = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.getFlag) == null ? void 0 : e.call(n, w, "phone")) ?? null;
};
function Kt(n) {
  var r;
  const e = fe(n), t = (r = Y(e == null ? void 0 : e.thread)) == null ? void 0 : r.pcId;
  return {
    id: n.id,
    thread: e.thread,
    fromMe: e.from === t,
    text: e.text,
    kind: e.kind ?? "text",
    ts: n.timestamp
  };
}
function Ee(n) {
  const e = Y(n), t = e ? game.actors.get(e.npcId) : null, { known: r } = rt(n);
  if (!t) return { name: "Disconnected", img: null, known: !1, number: null };
  const s = t.getFlag(w, oe), i = s ? Q(s) : null;
  return r ? { name: t.name, img: t.img, known: !0, number: i } : { name: "Unknown number", img: null, known: !1, number: i };
}
function Oe() {
  const n = /* @__PURE__ */ new Map();
  for (const e of game.messages) {
    const t = fe(e);
    t != null && t.thread && (n.has(t.thread) || n.set(t.thread, []), n.get(t.thread).push(e));
  }
  for (const e of n.values()) e.sort((t, r) => t.timestamp - r.timestamp);
  return n;
}
const Bs = "phoneCleared";
async function Yl(n, e) {
  const t = Y(e);
  if ((t == null ? void 0 : t.pcId) !== (n == null ? void 0 : n.id)) throw new Error("Not your thread");
  await n.setFlag(w, Bs, { [t.npcId]: Date.now() });
}
function Ql(n, e) {
  const { npcId: t, pcId: r } = Y(e) ?? {}, s = n == null ? void 0 : n[t];
  return typeof s == "number" ? s : (s == null ? void 0 : s[r]) ?? 0;
}
function Fs(n) {
  var r, s;
  const e = ((r = game.actors.get(n)) == null ? void 0 : r.getFlag(w, Bs)) ?? {}, t = [];
  for (const [i, a] of Oe()) {
    if (((s = Y(i)) == null ? void 0 : s.pcId) !== n) continue;
    const l = Ql(e, i), u = a.filter((f) => f.timestamp > l);
    u.length && t.push({
      id: i,
      contact: Ee(i),
      messages: u.map(Kt)
    });
  }
  return t.sort((i, a) => {
    var l, u;
    return (((l = a.messages.at(-1)) == null ? void 0 : l.ts) ?? 0) - (((u = i.messages.at(-1)) == null ? void 0 : u.ts) ?? 0);
  });
}
async function Zl(n, e, t, r) {
  const s = await Gn({ npc: e, pc: t, fromNpc: !0, text: r }), i = be(e.id, t.id);
  return n.pushToAgents("PHONE_MESSAGE", {
    thread: i,
    contact: Ee(i),
    message: Kt(s)
  }, ce(t)), s;
}
const qn = "phoneCalls", ut = `${w}.callsChanged`, $s = 45e3, Us = 280;
function eu() {
  game.settings.register(w, qn, {
    scope: "world",
    config: !1,
    type: Object,
    default: {},
    onChange: (n) => Hooks.callAll(ut, n)
  });
}
const Re = () => game.settings.get(w, qn) || {}, de = (n) => Re()[n] ?? null;
async function Ae(n, e) {
  if (!game.user.isGM) return;
  const t = foundry.utils.deepClone(Re());
  e ? t[n] = e : delete t[n], await game.settings.set(w, qn, t);
}
function Hs(n) {
  let e = 0;
  for (const t of String(n || "")) e = e * 31 + t.charCodeAt(0) >>> 0;
  return (140 + e % 1e3 / 100).toFixed(2);
}
function tu(n) {
  const e = Math.max(0, Math.round(n / 1e3));
  return `${Math.floor(e / 60)}:${String(e % 60).padStart(2, "0")}`;
}
function zn(n) {
  var t;
  if (!n) return null;
  const e = n.thread ? Ee(n.thread) : { name: Q(n.number), img: null, known: !1, number: Q(n.number) };
  return {
    thread: n.thread,
    contact: e,
    direction: n.direction ?? "in",
    frequency: Hs(((t = Y(n.thread)) == null ? void 0 : t.npcId) ?? n.number),
    state: n.state,
    startedAt: n.startedAt,
    answeredAt: n.answeredAt ?? null,
    line: n.line ?? null
  };
}
function wt(n, e, t = null) {
  const r = game.actors.get(e);
  n.pushToAgents("PHONE_CALL", { pcId: e, call: zn(de(e)), ended: t }, ce(r));
}
async function js(n) {
  const e = game.settings.get(w, "phoneThreads") || {};
  !(n in e) && !Oe().has(n) && await Nt(n, { known: !1 });
}
const dt = /* @__PURE__ */ new Map();
function Vn(n, e, t) {
  clearTimeout(dt.get(e));
  const r = Math.max(0, t + $s - Date.now());
  dt.set(e, setTimeout(() => {
    const s = de(e);
    (s == null ? void 0 : s.state) === "ringing" && s.startedAt === t && te() && ve(n, e, "missed");
  }, r));
}
const Gs = (n) => String(n || "").trim().slice(0, Us);
async function nu(n, e, t, r = "") {
  if (!game.user.isGM) throw new Error("Only a GM can place calls.");
  if (de(t.id)) throw new Error(`${t.name} is already on a call.`);
  const s = {
    thread: be(e.id, t.id),
    state: "ringing",
    startedAt: Date.now(),
    answeredAt: null,
    line: null,
    opener: Gs(r) || null,
    direction: "in",
    number: null
  };
  await Ae(t.id, s), wt(n, t.id), Vn(n, t.id, s.startedAt);
}
async function Wn(n, e) {
  const t = de(e);
  if ((t == null ? void 0 : t.state) !== "ringing") return !1;
  clearTimeout(dt.get(e));
  const r = Date.now(), s = t.opener ? { text: t.opener, ts: r } : null;
  return await Ae(e, { ...t, state: "live", answeredAt: r, line: s, opener: null }), wt(n, e), !0;
}
async function ru(n, e, t) {
  const r = de(e), s = Gs(t);
  return !r || !s ? !1 : r.state === "ringing" ? (await Ae(e, { ...r, opener: s }), !0) : (await Ae(e, { ...r, line: { text: s, ts: Date.now() } }), wt(n, e), !0);
}
function su(n, e, t = Date.now()) {
  return n.answeredAt ? `Call · ${tu(t - n.answeredAt)}` : n.direction === "out" ? e === "voicemail" ? "Voicemail" : e === "declined" ? "Cancelled call" : "No answer" : e === "declined" ? "Declined call" : "Missed call";
}
async function ve(n, e, t = "hangup") {
  const r = de(e);
  if (!r) return !1;
  clearTimeout(dt.get(e)), dt.delete(e), await Ae(e, null), wt(n, e, { reason: t, thread: r.thread, direction: r.direction ?? "in" });
  const s = Y(r.thread), i = game.actors.get(s == null ? void 0 : s.npcId), a = game.actors.get(s == null ? void 0 : s.pcId);
  if (!i || !a) return !0;
  const l = su(r, t);
  try {
    const u = await Gn({ npc: i, pc: a, fromNpc: r.direction !== "out", text: l, kind: "call" });
    n.pushToAgents("PHONE_MESSAGE", {
      thread: r.thread,
      contact: Ee(r.thread),
      message: Kt(u)
    }, ce(a));
  } catch (u) {
    console.error("[Bridge] Could not log the call", u);
  }
  return !0;
}
async function qs(n, e, t) {
  var l;
  const r = ae(t);
  if (!r) return "not-in-service";
  if (de(e.id)) return "busy";
  const s = Vt(r);
  if (!s && game.settings.get(w, Ps) !== "ring-gm") return "not-in-service";
  let i = null;
  s && (i = be(s.id, e.id), await js(i));
  const a = {
    thread: i,
    number: r,
    direction: "out",
    state: "ringing",
    startedAt: Date.now(),
    answeredAt: null,
    line: null,
    opener: null
  };
  return await Ae(e.id, a), wt(n, e.id), Vn(n, e.id, a.startedAt), te() && (ui.notifications.info(s ? `📞 ${e.name} is calling ${s.name}.` : `📞 ${e.name} is dialling ${Q(r)}, which no contact has.`), (l = n.openConsole) == null || l.call(n)), "ringing";
}
async function iu(n, e, t) {
  const r = de(e);
  if (!r || r.thread || !t) return !1;
  const s = be(t.id, e);
  if (await js(s), !t.getFlag(w, "phoneNumber"))
    try {
      await jn(t, r.number);
    } catch {
    }
  return await Ae(e, { ...r, thread: s }), Wn(n, e);
}
const zs = ["answer", "decline", "hangup"];
async function Vs(n, e, t) {
  const r = de(e);
  return r ? t === "answer" ? Wn(n, e) : t === "decline" && r.state === "ringing" ? ve(n, e, "declined") : t === "hangup" ? ve(n, e, r.state === "ringing" ? "declined" : "hangup") : !1 : !1;
}
function ou(n) {
  var e;
  if (!n._callSocketBound && (n._callSocketBound = !0, (e = game.socket) == null || e.on(`module.${w}`, async (t, r) => {
    if (!te() || (t == null ? void 0 : t.kind) !== "phone-call-action" && (t == null ? void 0 : t.kind) !== "phone-dial") return;
    const s = game.actors.get(t.pcId);
    if (!s || !ce(s).some((a) => a.id === r)) return;
    if (t.kind === "phone-call-action") {
      zs.includes(t.action) && Vs(n, s.id, t.action);
      return;
    }
    const i = await qs(n, s, t.number);
    n.pushToAgents("PHONE_DIAL_RESULT", { pcId: s.id, status: i, number: Q(t.number) }, ce(s));
  }), te()))
    for (const [t, r] of Object.entries(Re()))
      r.state === "ringing" && (Date.now() - r.startedAt >= $s ? ve(n, t, "missed") : Vn(n, t, r.startedAt));
}
function ze(n, e) {
  const t = ft(n.agent_link || n.agentLink, { remote: e });
  return t && !t.isGM ? t.character : null;
}
async function au(n, e, { requestId: t, actorId: r, remote: s }) {
  const i = ze(e, s);
  await n.sendResponse({
    type: "PHONE_THREADS_DATA",
    actorId: r,
    requestId: t,
    success: !!i,
    data: {
      characterId: (i == null ? void 0 : i.id) ?? null,
      threads: i ? Fs(i.id) : [],
      // A call in progress survives an Agent reload.
      call: i ? zn(de(i.id)) : null,
      contacts: i ? Jt(i) : []
    }
  });
}
async function cu(n, e, { requestId: t, actorId: r, remote: s }) {
  const i = (p) => n.sendResponse({
    type: "PHONE_SENT",
    actorId: r,
    requestId: t,
    success: !1,
    message: p
  }), a = ze(e, s), l = Y(e.thread);
  if (!a || !l || l.pcId !== a.id) return i("Not your thread");
  const u = game.actors.get(l.npcId);
  if (!u) return i("This number is disconnected");
  let f;
  try {
    f = await Gn({ npc: u, pc: a, fromNpc: !1, text: e.text });
  } catch (p) {
    return i(p.message || "Could not send");
  }
  await n.sendResponse({
    type: "PHONE_SENT",
    actorId: r,
    requestId: t,
    success: !0,
    data: { thread: e.thread, contact: Ee(e.thread), message: Kt(f) }
  });
}
async function lu(n, e, { requestId: t, actorId: r, remote: s }) {
  const i = ze(e, s), a = e.action;
  if (!i || !zs.includes(a))
    return n.sendResponse({ type: "PHONE_CALL_ACK", actorId: r, requestId: t, success: !1, message: "No call" });
  game.user.isGM ? await Vs(n, i.id, a) : game.socket.emit(`module.${w}`, { kind: "phone-call-action", action: a, pcId: i.id });
}
function Jt(n) {
  return Object.entries(Wt(n)).map(([e, t]) => {
    const r = Vt(e), s = r ? be(r.id, n.id) : null, i = s ? Ee(s) : null;
    return {
      number: Q(e),
      label: t.label || "",
      savedAt: t.savedAt ?? 0,
      known: !!(i != null && i.known),
      name: i != null && i.known ? i.name : null,
      img: i != null && i.known ? i.img : null,
      thread: i != null && i.known ? s : null
    };
  }).sort((e, t) => (e.name || e.label || e.number).localeCompare(t.name || t.label || t.number));
}
async function Kn(n, e, { requestId: t, actorId: r, remote: s }, i) {
  const a = ze(e, s);
  let l = !!a, u = a ? null : "No character";
  if (a)
    try {
      await i(a);
    } catch (f) {
      l = !1, u = f.message;
    }
  await n.sendResponse({
    type: "PHONE_BOOK_DATA",
    actorId: r,
    requestId: t,
    success: l,
    message: u,
    data: { contacts: a ? Jt(a) : [] }
  });
}
const uu = (n, e, t) => Kn(n, e, t, (r) => Os(r, e.number, e.label)), du = (n, e, t) => Kn(n, e, t, (r) => $l(r, e.number, e.label)), hu = (n, e, t) => Kn(n, e, t, (r) => Ul(r, e.number));
async function fu(n, e, { requestId: t, actorId: r, remote: s }) {
  const i = ze(e, s);
  if (!i || !ae(e.number))
    return n.sendResponse({ type: "PHONE_DIAL_RESULT", actorId: r, requestId: t, success: !1, data: { status: "not-in-service" } });
  if (game.user.isGM) {
    const a = await qs(n, i, e.number);
    n.pushToAgents("PHONE_DIAL_RESULT", { pcId: i.id, status: a, number: Q(e.number) }, ce(i));
  } else
    game.socket.emit(`module.${w}`, { kind: "phone-dial", number: ae(e.number), pcId: i.id });
}
async function pu(n, e, { requestId: t, actorId: r, remote: s }) {
  const i = ze(e, s);
  let a = !!i;
  if (i)
    try {
      await Yl(i, e.thread);
    } catch {
      a = !1;
    }
  await n.sendResponse({
    type: "PHONE_THREADS_DATA",
    actorId: r,
    requestId: t,
    success: a,
    data: {
      characterId: (i == null ? void 0 : i.id) ?? null,
      threads: i ? Fs(i.id) : [],
      call: i ? zn(de(i.id)) : null,
      contacts: i ? Jt(i) : []
    }
  });
}
const Te = "atlas", gu = "https://rtalsoriangames.com/wp-content/uploads/2025/01/RTG-CPR-DLC-NightCityAtlasv1.01.pdf", mu = 1, yu = 2;
function st() {
  var n;
  return ((n = game.scenes) == null ? void 0 : n.find((e) => e.getFlag(w, Te))) ?? null;
}
async function wu(n, e) {
  if (e) {
    for (const t of game.scenes)
      t.id !== n.id && t.getFlag(w, Te) && await t.unsetFlag(w, Te);
    await n.setFlag(w, Te, !0);
  } else
    await n.unsetFlag(w, Te);
}
function Ur(n) {
  if (n == null || n === "") return null;
  const e = n.css ?? String(n);
  return /^#[0-9a-f]{6}$/i.test(e) ? e.toLowerCase() : null;
}
function vu(n) {
  var s, i;
  const e = ((s = n.entry) == null ? void 0 : s.folder) ?? null, t = Ur(e == null ? void 0 : e.color), r = Ur((i = n.texture) == null ? void 0 : i.tint);
  return {
    color: r && r !== "#ffffff" ? r : t,
    group: e ? { id: e.id, name: e.name, color: t } : null
  };
}
function bu(n) {
  return n.page ?? n.entry ?? null;
}
function ku(n) {
  var t, r;
  return n.page ? n.page.type === "text" ? n.page : null : (((r = (t = n.entry) == null ? void 0 : t.pages) == null ? void 0 : r.contents) ?? []).filter((s) => s.type === "text").sort((s, i) => s.sort - i.sort)[0] ?? null;
}
async function Ws(n, { text: e = !0 } = {}) {
  var u, f, p;
  const t = st();
  if (!t) return null;
  const r = t.dimensions, s = ((u = t.background) == null ? void 0 : u.src) ?? t.img ?? null, i = !!(n != null && n.isGM), a = (m, y) => i || !!n && !!(m != null && m.testUserPermission(n, y)), l = [];
  for (const m of t.notes) {
    const y = bu(m);
    if (y && !a(y, mu)) continue;
    const b = (m.x - r.sceneX) / r.sceneWidth, v = (m.y - r.sceneY) / r.sceneHeight;
    if (!(b >= 0 && b <= 1 && v >= 0 && v <= 1)) continue;
    const T = ku(m);
    let _ = null;
    e && T && a(T, yu) && ((f = T.text) != null && f.content) && (_ = await TextEditor.enrichHTML(T.text.content, { async: !0 })), l.push({
      id: m.id,
      label: m.label,
      icon: ((p = m.texture) == null ? void 0 : p.src) ?? null,
      x: b,
      y: v,
      html: _,
      ...vu(m)
    });
  }
  return {
    sceneId: t.id,
    name: t.navName || t.name,
    image: s,
    width: r.sceneWidth,
    height: r.sceneHeight,
    locations: l
  };
}
function _u(n) {
  if (n.hookIds.atlasConfig) return;
  const e = foundry.utils.debounce(() => {
    n.pushToAgents("ATLAS_CHANGED", {}, "session");
  }, 500), t = () => {
    te() && e();
  }, r = (i) => {
    var a, l;
    return ((a = i == null ? void 0 : i.parent) == null ? void 0 : a.id) && i.parent.id === ((l = st()) == null ? void 0 : l.id);
  };
  for (const i of ["createNote", "updateNote", "deleteNote"])
    n.hookIds[`atlas_${i}`] = Hooks.on(i, (a) => {
      r(a) && t();
    });
  n.hookIds.atlasScene = Hooks.on("updateScene", (i, a) => {
    var u;
    (foundry.utils.hasProperty(a, `flags.${w}`) || i.id === ((u = st()) == null ? void 0 : u.id)) && t();
  }), n.hookIds.atlasSceneDelete = Hooks.on("deleteScene", (i) => {
    i.getFlag(w, Te) && t();
  });
  const s = (i) => {
    var a;
    return !!((a = st()) != null && a.notes.some((l) => l.entryId === i));
  };
  n.hookIds.atlasEntry = Hooks.on("updateJournalEntry", (i) => {
    s(i.id) && t();
  }), n.hookIds.atlasPage = Hooks.on("updateJournalEntryPage", (i) => {
    var a;
    s((a = i.parent) == null ? void 0 : a.id) && t();
  }), n.hookIds.atlasConfig = Hooks.on("renderSceneConfig", (i, a) => {
    var m;
    if (!game.user.isGM) return;
    const l = i.document ?? i.object;
    if (!l) return;
    const u = a instanceof HTMLElement ? a : a == null ? void 0 : a[0], f = (u == null ? void 0 : u.querySelector('.tab[data-tab="basic"]')) ?? (u == null ? void 0 : u.querySelector("form"));
    if (!f || f.querySelector(".cpr-agent-atlas")) return;
    const p = document.createElement("div");
    p.className = "form-group cpr-agent-atlas", p.innerHTML = `
            <label>Agent Atlas</label>
            <div class="form-fields">
                <input type="checkbox" ${l.getFlag(w, Te) ? "checked" : ""}>
            </div>
            <p class="hint">Shows this scene's background and Map Notes as the city map in players' Agents.
            Only one scene can be the Atlas. Each note's linked journal page is its info text, and that
            page's permissions decide who can see it. Need a map? RTG's free
            <a href="${gu}" target="_blank" rel="noopener">Night City Atlas</a>
            is for your own table, so import it yourself; it isn't bundled.</p>`, p.querySelector("input").addEventListener("change", (y) => {
      wu(l, y.currentTarget.checked);
    }), f.append(p), (m = i.setPosition) == null || m.call(i, { height: "auto" });
  });
}
async function Su(n, e, { requestId: t, remote: r }) {
  const s = ft(e.agent_link || e.agentLink, { remote: r }), i = await Ws(s);
  await n.sendResponse({
    type: "ATLAS_DATA",
    requestId: t,
    success: !0,
    data: { atlas: i }
  });
}
const et = 1e-9, Ks = (n, e, t) => Math.hypot((n[0] - e[0]) * t, n[1] - e[1]);
function Cu(n) {
  return !!n && Array.isArray(n.nodes) && Array.isArray(n.edges) && n.edges.length > 0 && n.edges.every((e) => Number.isInteger(e.a) && Number.isInteger(e.b) && n.nodes[e.a] && n.nodes[e.b] && Array.isArray(e.pts) && e.pts.length >= 2);
}
function An(n, e) {
  const t = [0];
  for (let r = 1; r < n.length; r++) t.push(t[r - 1] + Ks(n[r - 1], n[r], e));
  return t;
}
function Tu(n, e, t) {
  const r = An(n, t);
  let s = null;
  for (let i = 0; i < n.length - 1; i++) {
    const a = n[i], l = n[i + 1], u = (l[0] - a[0]) * t, f = l[1] - a[1], p = u * u + f * f, m = p < et ? 0 : Math.max(0, Math.min(
      1,
      ((e[0] - a[0]) * t * u + (e[1] - a[1]) * f) / p
    )), y = [a[0] + (l[0] - a[0]) * m, a[1] + (l[1] - a[1]) * m], b = Ks(e, y, t);
    (!s || b < s.d) && (s = { s: r[i] + m * Math.sqrt(p), point: y, d: b });
  }
  return s;
}
function Au(n, e, t, r, s) {
  const i = (l) => {
    for (let u = 0; u < n.length - 1; u++)
      if (l <= e[u + 1] + et) {
        const f = e[u + 1] - e[u], p = f < et ? 0 : (l - e[u]) / f;
        return [n[u][0] + (n[u + 1][0] - n[u][0]) * p, n[u][1] + (n[u + 1][1] - n[u][1]) * p];
      }
    return n[n.length - 1];
  }, a = [i(t)];
  for (let l = 0; l < n.length; l++) e[l] > t + et && e[l] < r - et && a.push(n[l]);
  return a.push(i(r)), a;
}
function Hr(n, e, t) {
  let r = null;
  return n.edges.forEach((s, i) => {
    const a = Tu(s.pts, e, t);
    (!r || a.d < r.d) && (r = { ...a, index: i });
  }), r;
}
function Iu(n, e, t, r = 1) {
  if (!Cu(n)) return null;
  const s = [e.x, e.y], i = [t.x, t.y], a = Hr(n, s, r), l = Hr(n, i, r), u = /* @__PURE__ */ new Map(), f = (S, A, E) => {
    const R = An(E, r).at(-1);
    u.has(S) || u.set(S, []), u.has(A) || u.set(A, []), u.get(S).push({ to: A, pts: E, len: R }), u.get(A).push({ to: S, pts: [...E].reverse(), len: R });
  }, p = /* @__PURE__ */ new Map();
  for (const [S, A] of [["S", a], ["T", l]])
    p.has(A.index) || p.set(A.index, []), p.get(A.index).push({ key: S, s: A.s, point: A.point });
  n.edges.forEach((S, A) => {
    const E = p.get(A);
    if (!E) return f(`n${S.a}`, `n${S.b}`, S.pts);
    const R = An(S.pts, r), L = R.at(-1), P = [{ key: `n${S.a}`, s: 0 }, ...E.sort((O, F) => O.s - F.s), { key: `n${S.b}`, s: L }];
    for (let O = 0; O < P.length - 1; O++)
      f(P[O].key, P[O + 1].key, Au(S.pts, R, P[O].s, P[O + 1].s));
  });
  const m = /* @__PURE__ */ new Map([["S", 0]]), y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(["S"]), v = /* @__PURE__ */ new Set();
  for (; b.size; ) {
    let S = null;
    for (const A of b) (S === null || m.get(A) < m.get(S)) && (S = A);
    if (b.delete(S), S === "T") break;
    v.add(S);
    for (const A of u.get(S) ?? []) {
      if (v.has(A.to)) continue;
      const E = m.get(S) + A.len;
      E < (m.get(A.to) ?? 1 / 0) && (m.set(A.to, E), y.set(A.to, { from: S, pts: A.pts }), b.add(A.to));
    }
  }
  if (!y.has("T")) return null;
  const T = [];
  for (let S = "T"; S !== "S"; S = y.get(S).from) T.push(y.get(S).pts);
  const _ = T.reverse().flatMap((S, A) => A === 0 ? S : S.slice(1)), k = [s, ..._, i].map(([S, A]) => ({ x: S, y: A }));
  return k.filter((S, A) => A === 0 || Math.hypot(S.x - k[A - 1].x, S.y - k[A - 1].y) > 1e-6);
}
const Jn = "transit", Xn = "travelScene", qe = `${w}.transitChanged`, Ut = 3e4, Js = 5e3, Xs = 30 * 60 * 1e3, Ys = 10, Qs = [1, 2, 4, 8], In = 50, Eu = ["active", "encounter", "paused"], Zs = () => ({ journeys: {}, positions: {}, returnSceneId: null });
function Ie(n, e = Date.now()) {
  const t = n.status === "active" && n.startedAt ? (e - n.startedAt) * (n.rate || 1) : 0;
  return Math.min(n.durationMs, n.elapsedMs + t);
}
function ei(n, e = Date.now()) {
  return n.durationMs > 0 ? Ie(n, e) / n.durationMs : 1;
}
const Ru = {
  requested: "Awaiting approval",
  active: "Travelling",
  paused: "Paused",
  encounter: "Encounter: paused until resumed"
};
function Lu(n, e = Date.now()) {
  const t = n.encounters ?? [];
  return {
    id: n.id,
    from: n.fromLabel || "Unknown",
    to: n.toLabel || "Unknown",
    party: (n.party ?? []).map((r) => r.name).join(", ") || "No one",
    status: n.status,
    statusLabel: Ru[n.status] ?? n.status,
    requested: n.status === "requested",
    running: n.status === "active",
    paused: n.status === "paused",
    encounter: n.status === "encounter",
    pct: Math.round(ei(n, e) * 100),
    seconds: Math.round((n.durationMs ?? 0) / 1e3),
    encountersLeft: t.filter((r) => !r.fired).length,
    encounterCount: t.length,
    rate: n.rate || 1,
    rates: Qs.map((r) => ({ value: r, selected: r === (n.rate || 1) })),
    defaultSeconds: Ut / 1e3,
    minSeconds: Js / 1e3,
    maxSeconds: Xs / 1e3,
    maxEncounters: Ys
  };
}
function jr(n, e = Date.now()) {
  const t = { requested: 0, encounter: 1, active: 2, paused: 3 };
  return Object.values(n.journeys).map((r) => Lu({ ...r, party: r.partyIds.map((s) => {
    var i, a;
    return { id: s, name: ((a = (i = game.actors) == null ? void 0 : i.get(s)) == null ? void 0 : a.name) ?? "Unknown" };
  }) }, e)).sort((r, s) => (t[r.status] ?? 9) - (t[s.status] ?? 9) || r.to.localeCompare(s.to));
}
function Mu(n, e = Math.random) {
  const t = Math.max(0, Math.min(Ys, Math.floor(n) || 0));
  return Array.from({ length: t }, () => 0.1 + e() * 0.8).sort((r, s) => r - s).map((r) => ({ at: r, fired: !1 }));
}
function Pu(n, e = Date.now()) {
  if (n.status !== "active") return null;
  const t = n.encounters.find((s) => !s.fired), r = t ? t.at * n.durationMs : n.durationMs;
  return Math.max(0, (r - Ie(n, e)) / (n.rate || 1));
}
function Nu(n, e, t = null, r = 1) {
  return Iu(t, n, e, r) ?? [{ x: n.x, y: n.y }, { x: e.x, y: e.y }];
}
function xu(n, e) {
  if (!Array.isArray(n) || n.length === 0) return null;
  const t = [];
  let r = 0;
  for (let i = 1; i < n.length; i++) {
    const a = Math.hypot(n[i].x - n[i - 1].x, n[i].y - n[i - 1].y);
    t.push(a), r += a;
  }
  if (r === 0) return { x: n[0].x, y: n[0].y };
  let s = Math.min(1, Math.max(0, Number(e) || 0)) * r;
  for (let i = 0; i < t.length; i++) {
    if (s <= t[i] || i === t.length - 1) {
      const a = t[i] === 0 ? 0 : Math.min(1, s / t[i]), l = n[i], u = n[i + 1];
      return { x: l.x + (u.x - l.x) * a, y: l.y + (u.y - l.y) * a };
    }
    s -= t[i];
  }
  return { ...n[n.length - 1] };
}
const Ou = (n, e, t) => Math.max(e, Math.min(t, n));
function Du() {
  game.settings.register(w, Jn, {
    scope: "world",
    config: !1,
    type: Object,
    default: Zs(),
    onChange: (n) => Hooks.callAll(qe, n)
  }), game.settings.register(w, Xn, {
    name: "Travel scene",
    hint: "Optional. A scene (a moving map or image) to switch to while the party is in transit. The scene you were on is restored when the last journey ends. Leave on None to travel on the Atlas map only.",
    scope: "world",
    config: !0,
    type: String,
    default: ""
  });
}
function ne() {
  return { ...Zs(), ...game.settings.get(w, Jn) || {} };
}
const ti = (n, e) => Object.values(n.journeys).find((t) => t.partyIds.includes(e)) ?? null;
async function ht(n) {
  if (!game.user.isGM) return;
  const e = foundry.utils.deepClone(ne());
  return n(e), await game.settings.set(w, Jn, e), e;
}
function Bu(n) {
  const e = /* @__PURE__ */ new Map();
  for (const r of n.partyIds)
    for (const s of ce(game.actors.get(r))) e.set(s.id, s);
  const t = je();
  return t && e.set(t.id, t), [...e.values()];
}
function ni(n, e = n.status) {
  return {
    ...n,
    status: e,
    party: n.partyIds.map((t) => {
      var r;
      return { id: t, name: ((r = game.actors.get(t)) == null ? void 0 : r.name) ?? "Unknown" };
    }),
    serverNow: Date.now()
  };
}
function Yn(n, e, t) {
  n.pushToAgents("TRANSIT_STATE", { journey: ni(e, t) }, Bu(e));
}
function xe(n, e, t) {
  return n.pushToAgents("TRANSIT_REJECTED", { message: t }, ce(e)), !1;
}
async function ri(n, { user: e, pc: t, toId: r, fromId: s, partyIds: i = [] }) {
  var b;
  const a = ne(), l = [.../* @__PURE__ */ new Set([t.id, ...i])].map((v) => game.actors.get(v)).filter(Hn);
  if (!l.some((v) => v.id === t.id)) return xe(n, t, "Not a player character");
  if (l.some((v) => ti(a, v.id))) return xe(n, t, "Already travelling");
  const u = await Ws(e, { text: !1 });
  if (!u) return xe(n, t, "There is no map to travel on");
  const f = new Map(u.locations.map((v) => [v.id, v])), p = f.get(r), m = f.get(s || a.positions[t.id]);
  if (!p) return xe(n, t, "Unknown destination");
  if (!m) return xe(n, t, "Pick a starting point");
  if (m.id === p.id) return xe(n, t, "Already there");
  const y = {
    id: foundry.utils.randomID(),
    partyIds: l.map((v) => v.id),
    fromId: m.id,
    toId: p.id,
    fromLabel: m.label,
    toLabel: p.label,
    route: Nu(m, p, (b = st()) == null ? void 0 : b.getFlag(w, "roads"), u.width / u.height),
    // So the table screen can draw the map without being able to open the scene.
    map: { image: u.image, width: u.width, height: u.height },
    status: "requested",
    durationMs: Ut,
    elapsedMs: 0,
    startedAt: null,
    rate: 1,
    encounters: []
  };
  return await ht((v) => {
    v.journeys[y.id] = y;
  }), Yn(n, y), !0;
}
async function Ve(n, e, t, r) {
  const s = ne().journeys[e];
  if (!s || !t.includes(s.status)) return !1;
  let i = null;
  return await ht((a) => {
    i = a.journeys[e], r(i);
  }), Zn(n, e), await hi(), Yn(n, i), !0;
}
function si(n, e, { durationMs: t = Ut, encounterCount: r = 0 } = {}) {
  return Ve(n, e, ["requested"], (s) => {
    s.durationMs = Ou(Number(t) || Ut, Js, Xs), s.encounters = Mu(r), s.status = "active", s.startedAt = Date.now();
  });
}
async function ii(n, e) {
  return Qn(n, e, "denied");
}
async function oi(n, e) {
  return Qn(n, e, "cancelled");
}
function ai(n, e) {
  return Ve(n, e, ["active"], (t) => {
    t.elapsedMs = Ie(t), t.startedAt = null, t.status = "encounter";
  });
}
function ci(n, e) {
  return Ve(n, e, ["encounter", "paused"], (t) => {
    t.status = "active", t.startedAt = Date.now();
  });
}
function li(n, e) {
  return Ve(n, e, ["active"], (t) => {
    t.elapsedMs = Ie(t), t.startedAt = null, t.status = "paused";
  });
}
function di(n, e, t) {
  return Qs.includes(t) ? Ve(n, e, ["active", "encounter", "paused"], (r) => {
    r.status === "active" && (r.elapsedMs = Ie(r), r.startedAt = Date.now()), r.rate = t;
  }) : !1;
}
async function Qn(n, e, t) {
  const r = ne().journeys[e];
  return r ? (clearTimeout(De.get(e)), De.delete(e), await ht((s) => {
    if (delete s.journeys[e], t === "arrived") for (const i of r.partyIds) s.positions[i] = r.toId;
  }), await hi(), Yn(n, r, t), !0) : !1;
}
const De = /* @__PURE__ */ new Map();
function Zn(n, e) {
  if (clearTimeout(De.get(e)), De.delete(e), !te()) return;
  const t = ne().journeys[e], r = t ? Pu(t) : null;
  r !== null && De.set(e, setTimeout(() => Fu(n, e), r + In));
}
async function Fu(n, e) {
  De.delete(e);
  const t = ne().journeys[e];
  if (!t || t.status !== "active") return;
  const r = t.encounters.find((s) => !s.fired);
  r && Ie(t) >= r.at * t.durationMs - In ? await Ve(n, e, ["active"], (s) => {
    const i = s.encounters.find((a) => !a.fired);
    i.fired = !0, s.elapsedMs = i.at * s.durationMs, s.startedAt = null, s.status = "encounter";
  }) : Ie(t) >= t.durationMs - In ? await Qn(n, e, "arrived") : Zn(n, e);
}
async function hi() {
  var r;
  if (!game.user.isGM) return;
  const n = game.scenes.get(game.settings.get(w, Xn)), e = ne(), t = Object.values(e.journeys).some((s) => Eu.includes(s.status));
  if (t && n && !n.active) {
    const s = e.returnSceneId ?? ((r = game.scenes.active) == null ? void 0 : r.id) ?? null;
    await ht((i) => {
      i.returnSceneId = s;
    }), await n.activate();
  } else if (!t && e.returnSceneId) {
    const s = game.scenes.get(e.returnSceneId);
    await ht((i) => {
      i.returnSceneId = null;
    }), s && !s.active && await s.activate();
  }
}
function $u(n) {
  var r;
  if (n._transitBound) return;
  n._transitBound = !0, (r = game.socket) == null || r.on(`module.${w}`, async (s, i) => {
    if (!te() || (s == null ? void 0 : s.kind) !== "transit-request") return;
    const a = game.actors.get(s.pcId), l = game.users.get(i);
    !a || !l || !ce(a).some((u) => u.id === i) || ri(n, { user: l, pc: a, toId: s.toId, fromId: s.fromId, partyIds: s.partyIds });
  }), Hooks.on("renderSettingsConfig", (s, i) => {
    const a = i instanceof HTMLElement ? i : i == null ? void 0 : i[0], l = a == null ? void 0 : a.querySelector(`[name="${w}.${Xn}"]`);
    if (!l || l.tagName === "SELECT") return;
    const u = document.createElement("select");
    u.name = l.name, u.append(new Option("None", ""));
    for (const f of game.scenes.contents.sort((p, m) => p.name.localeCompare(m.name)))
      u.append(new Option(f.navName || f.name, f.id, !1, f.id === l.value));
    l.replaceWith(u);
  });
  const e = () => {
    if (te())
      for (const s of Object.keys(ne().journeys)) Zn(n, s);
  };
  Hooks.on(qe, e), e();
  let t = new Set(Object.values(ne().journeys).filter((s) => s.status === "requested").map((s) => s.id));
  Hooks.on(qe, (s) => {
    var u;
    const i = Object.values((s == null ? void 0 : s.journeys) ?? {}).filter((f) => f.status === "requested"), a = i.filter((f) => !t.has(f.id));
    if (t = new Set(i.map((f) => f.id)), !game.user.isGM || !a.length) return;
    const l = a[0];
    ui.notifications.info(`Travel request: ${l.fromLabel || "somewhere"} to ${l.toLabel || "somewhere"}. Opening the Agent Console.`), (u = n.openConsole) == null || u.call(n);
  });
}
function fi(n, e) {
  const t = ft(n.agent_link || n.agentLink, { remote: e });
  return { user: t, pc: t && !t.isGM ? t.character : null };
}
async function Uu(n, e, { requestId: t, actorId: r, remote: s }) {
  const { pc: i } = fi(e, s), a = ne(), l = i ? ti(a, i.id) : null;
  await n.sendResponse({
    type: "TRANSIT_DATA",
    actorId: r,
    requestId: t,
    success: !!i,
    data: {
      journey: l ? ni(l) : null,
      positionId: i ? a.positions[i.id] ?? null : null,
      serverNow: Date.now()
    }
  });
}
async function Hu(n, e, { requestId: t, actorId: r, remote: s }) {
  const { user: i, pc: a } = fi(e, s), l = (f, p) => n.sendResponse({ type: "TRANSIT_ACK", actorId: r, requestId: t, success: f, message: p });
  if (!a || !e.toId) return l(!1, "No character");
  const u = {
    toId: String(e.toId),
    fromId: e.fromId ? String(e.fromId) : void 0,
    partyIds: Array.isArray(e.partyIds) ? e.partyIds.map(String) : []
  };
  return game.user.isGM ? await ri(n, { user: i, pc: a, ...u }) : game.socket.emit(`module.${w}`, { kind: "transit-request", pcId: a.id, ...u }), l(!0, null);
}
const ju = {
  UPDATE_ACTOR: rl,
  GET_ACTOR: Es,
  GET_ACTORS: sl,
  CONSUME_ITEM: il,
  ITEM_EQUIP: ol,
  RELOAD_WEAPON: al,
  INSTALL_PROGRAM: cl,
  REMOVE_PROGRAM: ll,
  TOGGLE_REZ: ul,
  PROGRAM_ROLL: dl,
  PREPARE_CYBERWARE_INSTALL: Nl,
  INSTALL_CYBERWARE: xl,
  UNINSTALL_CYBERWARE: Ol,
  DAMAGE_ROLL: pl,
  DEATH_SAVE: gl,
  FACEDOWN_ROLL: ml,
  INITIATIVE_ROLL: yl,
  ROLE_ROLL: wl,
  SKILL_ROLL: vl,
  STAT_ROLL: bl,
  DICE_ROLL: kl,
  ATTACK_ROLL: _l,
  MOVE_TOKEN: Sl,
  TARGET_TOKEN: Cl,
  LIST_VISIBLE_TOKENS: Tl,
  GET_DV_INFO: Al,
  GET_ROLL_MODIFIERS: Il,
  UPDATE_STAT: El,
  UPDATE_EB: Rl,
  GET_NET_POOL: Ll,
  PAIR_AGENT: Ml,
  GET_PHONE_THREADS: au,
  PHONE_SEND: cu,
  PHONE_CALL_ACTION: lu,
  PHONE_DIAL: fu,
  PHONE_SAVE_NUMBER: uu,
  PHONE_LABEL_NUMBER: du,
  PHONE_FORGET_NUMBER: hu,
  PHONE_DELETE_THREAD: pu,
  GET_ATLAS: Su,
  GET_TRANSIT: Uu,
  TRANSIT_REQUEST: Hu
};
async function Gr(n, e, t, r) {
  const s = ju[e];
  if (!s) {
    console.log("Unknown DataType: " + e);
    return;
  }
  return n(o, r, i);
}
class Gu {
  constructor() {
    this.echo = null, this.isConnected = !1, this.activeRequests = /* @__PURE__ */ new Map(), this.requestAgentLinks = /* @__PURE__ */ new Map(), this.pendingPairings = /* @__PURE__ */ new Map(), this.hookIds = {}, this._isCapturingRoll = !1, this._captureRollMode = null, this._prevRollMode = null, this._captureSafetyTimer = null, this.embedTransport = null;
  }
  rollAndCapture(e, t, r = null) {
    return ec(this, e, t, r);
  }
  /**
   * Begin an Agent-initiated roll capture. Records the desired roll mode and
   * mirrors it onto core.rollMode (so a CPR roll that reads the dropdown picks
   * it up). Awaited, so the setting has landed before the roll fires. A safety
   * timer guarantees the capture state can't leak if, unusually, no chat
   * message is ever created to consume it.
   */
  async _beginRollCapture(e = null) {
    if (this._isCapturingRoll = !0, this._captureRollMode = e || null, this._prevRollMode = game.settings.get("core", "rollMode"), game.settings.get(w, "debugMode") && console.log(`%c[Bridge] Roll capture begin: rollMode=${e}`, "color:#c084fc; font-weight:bold;"), e)
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
    nl(this);
  }
  destroy() {
    var e;
    this.echo && this.echo.disconnect();
    for (let [r, i] of Object.entries(this.hookIds))
      Hooks.off(r, i);
    try {
      (e = game.socket) == null || e.off(`module.${w}`);
    } catch {
    }
    this._originalToMessage && (Roll.prototype.toMessage = this._originalToMessage), console.log("Cyberpunk Bridge: Destroyed and hooks removed.");
  }
  connect() {
    const e = game.settings.get(w, "apiUrl"), t = game.settings.get(w, "apiKey"), r = game.settings.get(w, "debugMode"), s = Number(game.settings.get(w, "reverbPort") || 0) || 0, i = game.settings.get(w, "reverbUseSSL"), a = (game.settings.get(w, "reverbHost") || "").trim();
    if (!t || !e) return;
    this.echo && this.echo.disconnect();
    let l;
    try {
      l = new URL(e);
    } catch {
      return;
    }
    const u = a || l.hostname, f = Za(i, e), p = l.port ? Number(l.port) : l.protocol === "https:" ? 443 : 80, m = s > 0 ? s : p;
    this.echo = new Ya({
      broadcaster: "reverb",
      key: game.settings.get(w, "reverbKey") || Yr,
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
    const e = game.settings.get(w, "channelId"), t = e ? `cpr-agent.${e}` : "cpr-agent";
    this.echo.private(t).listen(".GameUpdate", (r) => {
      this.handleIncomingData(r);
    }), this.registerGlobalHooks();
  }
  /**
   * Syncs the player's assigned character with the Agent.
   * This allows the Agent to know which character the player is using in Foundry.
   */
  async syncPlayerLink() {
    const e = game.settings.get(w, "apiKey"), t = game.settings.get(w, "debugMode");
    if (t && console.log("[Bridge] syncPlayerLink: Checking API status..."), game.user.getFlag(w, "hasApiKey") !== !!e && await game.user.setFlag(w, "hasApiKey", !!e), !e) {
      t && console.log("[Bridge] syncPlayerLink: No API Key set. Skipping character sync.");
      return;
    }
    const r = async () => {
      var a;
      const s = game.user.character, i = game.user.getFlag(w, "agent-link");
      t && (console.log(`[Bridge] syncPlayerLink: Broadcasting character link for ${(s == null ? void 0 : s.name) || "None"}...`), console.log(`[Bridge] syncPlayerLink: Foundry User ID: ${game.user.id}, Name: ${game.user.name}, isGM: ${game.user.isGM}`), console.log(`[Bridge] syncPlayerLink: Current stored agent-link: ${i || "(none)"}`));
      try {
        const l = await this.sendResponse({
          type: "LINK_PLAYER_CHARACTER",
          actorId: n ? n.id : null,
          character: n ? { id: n.id, name: n.name } : null,
          actorName: n ? n.name : null,
          agentLink: s || game.user.id,
          foundryUserId: game.user.id,
          foundryUserName: game.user.name,
          isGM: game.user.isGM
        });
        t && console.log("[Bridge] syncPlayerLink: Laravel response:", l), l && l.agent_link ? i !== l.agent_link && (console.log(`%c[Bridge] Link established! Agent Link: ${l.agent_link}`, "color: #00ff00; font-weight: bold;"), console.log(`%c[Bridge] Laravel User ID: ${l.user_id || "(not provided)"}`, "color: #00ff00;"), await game.user.setFlag(w, "agent-link", l.agent_link), (a = ui.notifications) == null || a.info("Agent: Account linked successfully.")) : console.warn("[Bridge] syncPlayerLink: API responded but no agent_link was returned.", l);
      } catch (l) {
        console.error("[Bridge] syncPlayerLink: Failed to broadcast link to Laravel.", l);
      }
    };
    await i(), this.hookIds.updateUser || (this.hookIds.updateUser = Hooks.on("updateUser", (n, s) => {
      n.id === game.user.id && s.character !== void 0 && i();
    }));
  }
  registerGlobalHooks() {
    var i, n;
    if (this.hookIds.updateActor) return;
    const e = async (i, a) => {
      const l = game.settings.get(w, "apiKey");
      !this.isConnected && !l && !this.embedTransport || !i || !["character", "mook"].includes(i.type) || (console.log(`%c[Bridge] Syncing change for ${i.name}`, "color: #ffaa00;", a), await this.sendResponse({
        type: "SHEET_DELTA",
        actorId: s.id,
        uuid: s.id,
        delta: l,
        success: !0
      }));
    };
    this.hookIds.updateActor = Hooks.on("updateActor", (i, a, l, u) => {
      if (a.system) {
        const f = vn(a.system, "system.");
        e(i, f);
      }
    }), this.hookIds.updateItem = Hooks.on("updateItem", (i, a, l, u) => {
      const f = i.parent;
      if (f instanceof Actor) {
        const p = {}, m = `items.${i.id}.`;
        a.system && vn(a.system, `${m}system.`, p);
        for (let y in a)
          y !== "system" && y !== "_id" && (p[`${m}${y}`] = a[y]);
        Object.keys(p).length > 0 && e(f, p);
      }
    }), this.hookIds.createItem = Hooks.on("createItem", (i, a, l) => {
      const u = i.parent;
      if (u instanceof Actor) {
        const f = {
          [`items.+${i.id}`]: i.toObject()
        };
        e(u, f);
      }
    }), this.hookIds.deleteItem = Hooks.on("deleteItem", (i, a, l) => {
      const u = i.parent;
      if (u instanceof Actor) {
        const f = {
          [`items.${i.id}`]: null
        };
        e(u, f);
      }
    }), this.hookIds.closeSettingsConfig = Hooks.on("closeSettingsConfig", (s, l) => {
      this.syncPlayerLink();
    }), this.hookIds.updateToken = Hooks.on("updateToken", (i, a, l, u) => {
      (a.x || a.y || a.disposition || a.hidden) && this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    });
    const t = (i) => {
      const a = i.parent, l = a == null ? void 0 : a.parent;
      !(a instanceof Item) || !(l instanceof Actor) || e(l, { [`items.${a.id}.effects`]: a.toObject().effects });
    };
    this.hookIds.createActiveEffect = Hooks.on("createActiveEffect", t), this.hookIds.updateActiveEffect = Hooks.on("updateActiveEffect", t), this.hookIds.deleteActiveEffect = Hooks.on("deleteActiveEffect", t), this.hookIds.deleteToken = Hooks.on("deleteToken", (i, a, l) => {
      this.broadcastRefresh("VISIBLE_TOKENS_DATA");
    }), this.hookIds.preCreateChatMessage = Hooks.on("preCreateChatMessage", (i, a, l, u) => {
      if (!(!this._isCapturingRoll || !this._captureRollMode))
        try {
          const f = this._whisperForRollMode(this._captureRollMode);
          i.updateSource(f), game.settings.get(w, "debugMode") && console.log(`%c[Bridge] Stamped rollMode ${this._captureRollMode}`, "color:#c084fc; font-weight:bold;", f);
        } catch (f) {
          console.warn("[Bridge] Failed to apply roll-mode visibility", f);
        }
    }), this.hookIds.createChatMessage = Hooks.on("createChatMessage", (i, a, l) => {
      var p;
      const u = !!(i.rolls && i.rolls.length > 0), f = ((p = i.author) == null ? void 0 : p.id) === game.user.id;
      if (game.settings.get(w, "debugMode") && console.log(`%c[Bridge] createChatMessage: hasRolls=${u} mine=${f} capturing=${this._isCapturingRoll} embed=${!!this.embedTransport}`, "color:#00ff88; font-weight:bold;"), !!u && f) {
        if (this._isCapturingRoll) {
          this._endRollCapture();
          return;
        }
        this.broadcastRoll(s);
      }
    }), console.log(`%c[Bridge] registerGlobalHooks: user=${(r = game.user) == null ? void 0 : r.name} isGM=${(s = game.user) == null ? void 0 : s.isGM} socket=${!!game.socket} → registering peer-roll listener on module.${w}`, "color:#00ffff; font-weight:bold;"), game.socket && game.socket.on(`module.${w}`, (i) => {
      if ((i == null ? void 0 : i.kind) === "agent-push") return this._receivePush(i);
      if (!(!i || i.kind !== "peer-roll" || !i.payload)) {
        if (console.log(`%c[Bridge] peer-roll socket IN (rollMode=${i.payload.rollMode}, recipients=${JSON.stringify(i.recipients)}, embed=${!!this.embedTransport})`, "color:#00ff88; font-weight:bold;"), Array.isArray(i.recipients) && !i.recipients.includes(game.user.id)) {
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
    const t = this._rollRecipients(e.rollMode);
    game.settings.get(w, "debugMode") && console.log(`%c[Bridge] peer-roll socket OUT (type=${e.type}, rollMode=${e.rollMode}, recipients=${JSON.stringify(t)})`, "color:#00ffff; font-weight:bold;");
    try {
      game.socket.emit(`module.${w}`, {
        kind: "peer-roll",
        payload: e,
        recipients: r
      });
    } catch (i) {
      console.error("Cyberpunk Bridge: peer-roll emit failed", i);
    }
  }
  /**
   * Push something to players' Agents that nobody asked for (phone texts,
   * party travel state). Two delivery paths:
   *   - standalone Agents: over Reverb via sendResponse; the Agent's listener
   *     keeps it only if its agent link is in `audience` (isPushForMe).
   *   - embedded Agents: over Foundry's socket; each recipient client tees it
   *     into its own iframe (_receivePush).
   *
   * @param {string} type     message type, e.g. 'PHONE_MESSAGE'
   * @param {object} payload  message body, delivered to the Agent as `data`
   * @param {User[]|'session'} to  recipients, or 'session' for everyone
   */
  pushToAgents(e, t = {}, r = "session") {
    const s = r === "session" ? null : r.filter(Boolean), i = {
      type: e,
      data: t,
      audience: s ? s.map((a) => a.getFlag(w, "agent-link")).filter(Boolean) : "session",
      audienceUserIds: s ? s.map((a) => a.id) : null
    };
    if (this.sendResponse(i), game.socket)
      try {
        game.socket.emit(`module.${w}`, { kind: "agent-push", payload: i });
      } catch (a) {
        console.error("Cyberpunk Bridge: agent-push emit failed", a);
      }
  }
  /** Socket side of pushToAgents: hand a push to this client's iframe if it's ours. */
  _receivePush(e) {
    const t = e.payload;
    if (!t || !this.embedTransport) return;
    const r = t.audienceUserIds;
    if (!(Array.isArray(r) && !r.includes(game.user.id)))
      try {
        this.embedTransport.send(t);
      } catch (s) {
        console.error("Cyberpunk Bridge: agent-push tee failed", s);
      }
  }
  broadcastRefresh(e) {
    this.sendResponse({ type: "REFRESH_SIGNAL", target: e });
  }
  broadcastRoll(e, { localOnly: t = !1 } = {}) {
    var l;
    const r = game.users.get(e.author.id), s = e.rolls[0];
    let i = "publicroll";
    if (e.blind)
      s = "blindroll";
    else if (e.whisper && e.whisper.length > 0) {
      const u = game.users.filter((m) => m.isGM).map((m) => m.id), f = e.whisper.every((m) => u.includes(m) || m === e.author.id);
      e.whisper.length === 1 && e.whisper[0] === e.author.id ? i = "selfroll" : i = "gmroll";
    }
    game.settings.get(w, "debugMode") && console.log(`%c[Bridge] broadcastRoll ${t ? "(peer→iframe)" : "(mine)"} rollMode=${i} total=${s == null ? void 0 : s.total}`, "color:#00ff88; font-weight:bold;");
    let a = null;
    try {
      l = n.toJSON();
    } catch {
    }
    this.sendResponse({
      type: "ROLL_RESULT",
      actorId: ((l = e.speaker) == null ? void 0 : l.actor) || null,
      agentLink: r ? r.getFlag(w, "agent-link") : null,
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
  async sendResponse(e, { localOnly: t = !1 } = {}) {
    const r = (e.requestId ? this.requestAgentLinks.get(e.requestId) : null) || (t ? null : game.user.getFlag(w, "agent-link"));
    r && !e.agentLink && (e.agentLink = r);
    const s = game.settings.get(w, "channelId");
    if (s && !e.channelId && (e.channelId = s), e.type === "ROLL_RESULT") {
      if (!e.playerName) {
        const u = e.actorId ? game.actors.get(e.actorId) : null;
        e.playerName = u ? u.name : game.user.name;
      }
      e.rollMode || (e.rollMode = game.settings.get("core", "rollMode"));
    }
    if (this.embedTransport)
      try {
        this.embedTransport.send(e);
      } catch (u) {
        console.error("Cyberpunk Bridge: Embed send failed", u);
      }
    if (!t && (e.type === "ROLL_RESULT" || e.type === "DICE_ROLL_EVENT") && this._emitRollToPeers(e), t) return null;
    let a = game.settings.get(w, "apiUrl");
    const l = game.settings.get(w, "apiKey");
    if (!a || !l) return null;
    a.endsWith("/") && (a = a.slice(0, -1));
    try {
      const u = await fetch(`${a}/api/foundry/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${l}`,
          Accept: "application/json"
        },
        body: JSON.stringify(e)
      });
      return u.ok ? await u.json() : (console.error("Cyberpunk Bridge: Callback failed", u.statusText), null);
    } catch (u) {
      return console.error("Cyberpunk Bridge: Error sending callback", u), null;
    }
  }
  /**
   * Handle Logic (The Tunnel Output)
   */
  async handleIncomingData(e) {
    var y, b;
    const t = e.payload || e, r = t.type;
    console.log(`%c[Bridge] Incoming Call: ${r}`, "color: #00ffff; font-weight: bold;", t);
    const s = t.requestId, i = t.agent_link || t.agentLink;
    s && i && (this.requestAgentLinks.set(s, i), setTimeout(() => this.requestAgentLinks.delete(s), 3e4));
    const a = game.user.getFlag(w, "agent-link"), l = t.actorId, u = (y = game.user.character) == null ? void 0 : y.id, f = game.settings.get(w, "debugMode");
    f && console.log(`[Bridge] handleIncomingData: requestId=${s}, agentLink=${i}, myAgentLink=${a}, actorId=${l}, myCharacterId=${u}`);
    let p = !1;
    if (game.user.isGM ? p = te() : a && (s === a || i === a) ? p = !0 : !a && s && l && u === l && (console.log(`[Bridge] Discovery: Matching incoming request to character ${l}`), p = !0), !p) {
      f && console.log("[Bridge] handleIncomingData: Message ignored (not for me).");
      return;
    }
    !game.user.isGM && i && a !== i && (s === i || l && u === l) && (console.log(`%c[Bridge] Setting agent-link flag: ${i}`, "color: #00ff00; font-weight: bold;"), await game.user.setFlag(w, "agent-link", i), (b = ui.notifications) == null || b.info("Agent: Account linked!"));
    const m = Nr(t.tokenId, l);
    await Gr(this, r, t, { type: r, requestId: s, actorId: l, tokenId: m, debug: f, remote: !0 });
  }
  /**
   * Ingress for messages arriving from an embedded Agent iframe.
   * Skips the Laravel-oriented channel/agentLink routing in handleIncomingData:
   * the iframe runs in this same client for this same user, already
   * authenticated by Foundry and validated (origin + nonce) at the transport.
   * Foundry's own permission model still gates every handler action.
   */
  async handleIncomingDataLocal(e) {
    const t = e.type, r = e.requestId, s = e.actorId, i = game.settings.get(w, "debugMode"), a = Nr(e.tokenId, s);
    i && console.log(`%c[Bridge] Embed Call: ${t}`, "color: #c084fc; font-weight: bold;", e), await Gr(this, t, e, { type: t, requestId: r, actorId: s, tokenId: a, debug: i });
  }
  reconnect() {
    game.user.isGM && this.echo && this.connect();
  }
}
class pi extends foundry.abstract.TypeDataModel {
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
dn(pi, "metadata", {
  label: "Agent Data Pool"
});
class gi extends JournalPageSheet {
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
dn(gi, "LOCAL_TEMPLATES", {
  "cpr-agent.datapool": "modules/cpr-agent/templates/data-pool.hbs"
});
class qu {
  constructor(e) {
    this.bridge = e, this.frame = null, this.nonce = null, this.origin = Na(), this.ready = !1, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage);
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
class zu extends Application {
  constructor(e, t = {}) {
    super(t), this.bridge = e, this.nonce = foundry.utils.randomID(24), e.embedTransport || (e.embedTransport = new qu(e)), this.transport = e.embedTransport;
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
      src: `${Qr()}/embed?nonce=${encodeURIComponent(this.nonce)}`
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
    var t;
    return (t = this.transport) == null || t.detach(), super.close(e);
  }
}
const er = "codecMic", mi = `${w}.codecVoice`, tr = 12, yi = 66, Vu = 1e3, wi = 0.12, Pt = 100, qr = 4e3;
function Wu() {
  game.settings.register(w, er, {
    scope: "client",
    config: !1,
    type: Boolean,
    default: !1
  }), game.settings.register(w, nr, {
    scope: "client",
    config: !1,
    type: String,
    default: ""
  });
}
const nr = "codecMicDevice", vi = () => !!game.settings.get(w, er), En = () => game.settings.get(w, nr) || "";
function bi() {
  const n = En();
  return {
    audio: {
      ...n ? { deviceId: { exact: n } } : {},
      channelCount: { ideal: 2 },
      echoCancellation: !0,
      noiseSuppression: !0,
      autoGainControl: !0
    },
    video: !1
  };
}
async function Ku() {
  try {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "audioinput" && e.deviceId).map((e, t) => ({ id: e.deviceId, label: e.label || `Input ${t + 1}` }));
  } catch {
    return [];
  }
}
function ki() {
  return Object.entries(Re()).filter(([, n]) => n.state === "live").map(([n]) => n);
}
function Ju(n, e, t, r = tr) {
  const s = e / t, i = [];
  for (let a = 0; a < r; a++) {
    const l = Pt * Math.pow(qr / Pt, a / r), u = Pt * Math.pow(qr / Pt, (a + 1) / r), f = Math.max(0, Math.floor(l / s)), p = Math.min(n.length - 1, Math.max(f, Math.ceil(u / s)));
    let m = 0;
    for (let y = f; y <= p; y++) m = Math.max(m, n[y]);
    i.push(m / 255);
  }
  return i;
}
const Xu = (n) => n <= 0 ? 0 : Math.min(4, 1 + Math.floor(n * 5)), Z = { stream: null, ctx: null, analyser: null, buf: null, timer: null, close: null, starting: null }, ee = { sent: 0, lastAt: 0, pending: null, latest: 0 };
async function Yu() {
  var n;
  if (!((n = navigator.mediaDevices) != null && n.getUserMedia))
    return ui.notifications.warn("The codec mic needs Foundry over https or on localhost."), !1;
  try {
    return (await navigator.mediaDevices.getUserMedia(bi())).getTracks().forEach((t) => t.stop()), !0;
  } catch (e) {
    return ui.notifications.warn(`Codec mic: ${e.name === "NotAllowedError" ? "permission was refused" : e.message}.`), !1;
  }
}
async function Ht(n) {
  game.user.isGM && vi() && ki().length > 0 ? await Qu(n) : td(n);
}
async function Qu(n) {
  return Z.stream || Z.starting || (Z.starting = (async () => {
    var e;
    try {
      Object.assign(Z, await _i()), console.info(`[Bridge] Codec mic open: ${((e = Z.stream.getAudioTracks()[0]) == null ? void 0 : e.label) ?? "unknown input"}`), Z.timer = setInterval(() => nd(n), yi);
    } catch (t) {
      console.warn("[Bridge] Codec mic unavailable", t), ui.notifications.warn("Codec mic unavailable, so the voice wave is off for this call.");
    } finally {
      Z.starting = null;
    }
  })()), Z.starting;
}
let Qe = null;
async function Zu() {
  return (!Qe || Qe.state === "closed") && (Qe = new AudioContext()), await Qe.resume(), Qe;
}
async function _i() {
  const n = await navigator.mediaDevices.getUserMedia(bi()), e = await Zu(), t = e.createAnalyser();
  t.fftSize = 512, t.smoothingTimeConstant = 0.6, t.minDecibels = -85, t.maxDecibels = -25;
  const r = e.createMediaStreamSource(n);
  return r.connect(t), { stream: n, ctx: e, analyser: t, close: () => {
    n.getTracks().forEach((i) => i.stop()), r.disconnect(), !Z.stream && !Rn && e.suspend().catch(() => {
    });
  }, buf: new Uint8Array(t.frequencyBinCount) };
}
let Rn = !1;
function Si(n) {
  n.analyser.getByteFrequencyData(n.buf);
  const e = Ju(n.buf, n.ctx.sampleRate, n.analyser.fftSize);
  return { bands: e, level: e.reduce((t, r) => t + r, 0) / e.length };
}
async function ed(n, e = 8e3) {
  var u;
  Rn = !0;
  const t = await _i(), r = ((u = t.stream.getAudioTracks()[0]) == null ? void 0 : u.label) ?? "unknown input", s = await Ku(), i = setInterval(() => n(Si(t).level, wi), yi), a = () => {
    clearInterval(i), clearTimeout(l), Rn = !1, t.close();
  }, l = setTimeout(a, e);
  return { label: r, devices: s, stop: a };
}
function td(n) {
  if (!Z.stream) return;
  clearInterval(Z.timer);
  const e = Z.close;
  Object.assign(Z, { stream: null, ctx: null, analyser: null, buf: null, timer: null, close: null }), e == null || e(), Ci(new Array(tr).fill(0), 0, []), Ti(n, 0, []);
}
function nd(n) {
  if (!Z.analyser) return;
  let { bands: e, level: t } = Si(Z);
  t < wi && (t = 0, e = e.map(() => 0));
  const r = ki();
  Ci(e, t, r), Ti(n, Xu(t), r);
}
let zr = !1;
function Ci(n, e, t) {
  var s;
  if (e === 0 && zr) return;
  zr = e === 0;
  const r = { kind: "codec-voice", bands: n.map((i) => Math.round(i * 15)), level: Math.round(e * 100) / 100, pcIds: t };
  try {
    (s = game.socket) == null || s.emit(`module.${w}`, r);
  } catch {
  }
}
function Ti(n, e, t) {
  if (ee.latest = e, ee.pcIds = t, e === ee.sent || ee.pending) return;
  const r = Math.max(0, ee.lastAt + Vu - Date.now());
  ee.pending = setTimeout(() => {
    ee.pending = null, ee.latest !== ee.sent && (ee.sent = ee.latest, ee.lastAt = Date.now(), rd(ee.sent, ee.pcIds));
  }, r);
}
async function rd(n, e) {
  let t = game.settings.get(w, "apiUrl");
  const r = game.settings.get(w, "apiKey");
  if (!t || !r) return;
  const s = (e != null && e.length ? e : Object.keys(Re())).map((a) => game.actors.get(a)), i = [...new Set(s.flatMap((a) => ce(a)).map((a) => a.getFlag(w, "agent-link")).filter(Boolean))];
  if (i.length) {
    t.endsWith("/") && (t = t.slice(0, -1));
    try {
      await fetch(`${t}/api/foundry/voice`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${r}`, Accept: "application/json" },
        body: JSON.stringify({ level: n, audience: i })
      });
    } catch {
    }
  }
}
function sd(n) {
  var e;
  n._voiceBound || (n._voiceBound = !0, (e = game.socket) == null || e.on(`module.${w}`, (t) => {
    var s;
    if ((t == null ? void 0 : t.kind) !== "codec-voice") return;
    Hooks.callAll(mi, t);
    const r = (t.pcIds ?? []).some((i) => ce(game.actors.get(i)).some((a) => a.id === game.user.id));
    if (n.embedTransport && (r || !((s = t.pcIds) != null && s.length)))
      try {
        n.embedTransport.send({
          type: "CODEC_VOICE",
          audience: "session",
          data: { level: t.level, bands: t.bands }
        });
      } catch {
      }
  }), Hooks.on(ut, () => Ht(n)), Ht(n));
}
class id extends Application {
  constructor(e, t = {}) {
    super(t), this.bridge = e, this._hookIds = [
      ["updateUser", Hooks.on("updateUser", () => this.rendered && this.render(!1))],
      ["userConnected", Hooks.on("userConnected", () => this.rendered && this.render(!1))],
      // Thread meta (known, GM read time) lives in a world setting.
      ["updateSetting", Hooks.on("updateSetting", (r) => {
        r.key === `${w}.phoneThreads` && this.rendered && this.render(!1);
      })],
      [ut, Hooks.on(ut, () => this.rendered && this.render(!1))],
      [qe, Hooks.on(qe, () => this.rendered && this.render(!1))]
    ], this._openThread = null;
  }
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "cpr-agent-console",
      classes: ["cpr-agent-console"],
      title: "Agent Console",
      template: "modules/cpr-agent/templates/agent-console.hbs",
      width: 460,
      height: "auto",
      resizable: !0
    });
  }
  getData() {
    var t;
    return {
      players: game.users.filter(lt).map((r) => {
        var s;
        return {
          name: r.name,
          character: ((s = r.character) == null ? void 0 : s.name) ?? null,
          linked: !!r.getFlag(w, "agent-link"),
          online: r.active
        };
      }).sort((r, s) => r.name.localeCompare(s.name)),
      isPrimary: te(),
      primaryName: ((t = game.users.activeGM) == null ? void 0 : t.name) ?? game.user.name,
      phone: this._phoneData(),
      display: this._displayData(),
      journeys: jr(ne()),
      maxText: Ds,
      maxLine: Us,
      micOn: vi(),
      noClipUsers: game.users.filter((r) => r.isGM || lt(r)).map((r) => ({ id: r.id, name: r.name, isGM: r.isGM, noClip: ss(r) })).sort((r, s) => s.isGM - r.isGM || r.name.localeCompare(s.name)),
      mics: (this._mics ?? []).map((r) => ({ ...r, selected: r.id === En() }))
    };
  }
  _callStatus(e) {
    const t = (r) => new Date(r).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return e.state === "live" ? { live: !0, status: `Live since ${t(e.answeredAt)}` } : { live: !1, status: "Ringing…" };
  }
  /** Call controls for the open thread: idle, this call, or busy on another. */
  _callPanel(e) {
    var r;
    const t = de(e.pcId);
    return t ? t.thread !== be(e.npcId, e.pcId) ? { busy: !0 } : { mine: !0, line: ((r = t.line) == null ? void 0 : r.text) ?? null, opener: t.opener ?? null, ...this._callStatus(t) } : { idle: !0 };
  }
  _displayData() {
    const e = je();
    if (!e) return { exists: !1, defaultName: As };
    const t = game.actors.filter(Hn), r = t.filter((s) => s.testUserPermission(e, "OBSERVER")).length;
    return { exists: !0, name: e.name, online: e.active, watching: r, total: t.length };
  }
  _phoneData() {
    var i;
    const e = (a) => {
      var l;
      return ((l = game.actors.get(a)) == null ? void 0 : l.name) ?? "Deleted";
    }, t = [];
    for (const [a, l] of Oe()) {
      const u = Y(a), f = rt(a), p = l.at(-1);
      t.push({
        id: a,
        npcName: e(u.npcId),
        pcName: e(u.pcId),
        known: f.known,
        last: ((i = fe(p)) == null ? void 0 : i.text) ?? "",
        lastTs: (p == null ? void 0 : p.timestamp) ?? 0,
        unread: l.filter((m) => fe(m).from === u.pcId && m.timestamp > f.gmReadAt).length,
        open: a === this._openThread
      });
    }
    t.sort((a, l) => l.lastTs - a.lastTs);
    let r = null;
    if (this._openThread) {
      const a = Y(this._openThread), l = Oe().get(this._openThread) ?? [];
      r = {
        id: this._openThread,
        pcId: a.pcId,
        npcName: e(a.npcId),
        pcName: e(a.pcId),
        known: rt(this._openThread).known,
        call: this._callPanel(a),
        messages: l.map((u) => ({
          isCall: fe(u).kind === "call",
          fromNpc: fe(u).from === a.npcId,
          text: fe(u).text,
          time: new Date(u.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }))
      };
    }
    return {
      calls: Object.entries(Re()).map(([a, l]) => ({
        pcId: a,
        thread: l.thread ?? "",
        npcName: l.thread ? e(Y(l.thread).npcId) : Q(l.number),
        pcName: e(a),
        // A player is ringing out and waiting on the GM (C3).
        incoming: l.direction === "out" && l.state === "ringing",
        dead: !l.thread,
        number: Q(l.number),
        ...this._callStatus(l)
      })),
      contacts: Kl().map((a) => ({ id: a.id, name: a.name })),
      characters: Jl().map((a) => ({ id: a.id, name: a.name })),
      threads: t,
      open: r
    };
  }
  activateListeners(e) {
    var s, i, a, l, u, f, p, m, y, b;
    super.activateListeners(e);
    const t = e[0] ?? e;
    (s = t.querySelector('[data-action="compose"]')) == null || s.addEventListener("submit", (v) => this._onCompose(v)), (i = t.querySelector('[data-action="reply"]')) == null || i.addEventListener("submit", (v) => this._onReply(v)), t.querySelectorAll("[data-thread]").forEach((v) => v.addEventListener("click", () => {
      v.dataset.thread && this._openThreadById(v.dataset.thread);
    })), (a = t.querySelector('[data-action="back"]')) == null || a.addEventListener("click", () => {
      this._openThread = null, this.render(!1);
    }), (l = t.querySelector('[data-action="call"]')) == null || l.addEventListener("submit", (v) => this._onCallOpenThread(v)), t.querySelectorAll("[data-hangup]").forEach((v) => v.addEventListener("click", (T) => {
      T.stopPropagation(), ve(this.bridge, v.dataset.hangup, "hangup");
    })), t.querySelectorAll("[data-pickup]").forEach((v) => v.addEventListener("click", (T) => {
      T.stopPropagation();
      const _ = v.dataset.pc, k = v.dataset.pickup;
      k === "answer" ? Wn(this.bridge, _) : k === "voicemail" ? ve(this.bridge, _, "voicemail") : k === "dead" ? ve(this.bridge, _, "not-in-service") : ve(this.bridge, _, "missed");
    })), t.querySelectorAll('[data-action="answer-as"]').forEach((v) => v.addEventListener("submit", (T) => {
      T.preventDefault();
      const _ = game.actors.get(T.currentTarget.npc.value);
      _ && iu(this.bridge, T.currentTarget.dataset.pc, _);
    })), (u = t.querySelector('[data-action="say"]')) == null || u.addEventListener("submit", (v) => this._onSay(v)), (f = t.querySelector('[data-action="mic"]')) == null || f.addEventListener("change", (v) => this._onMic(v)), t.querySelectorAll('[data-action="noclip"]').forEach((v) => v.addEventListener("change", (T) => {
      var _;
      return (_ = game.users.get(T.currentTarget.dataset.user)) == null ? void 0 : _.setFlag(w, "noclip", T.currentTarget.checked);
    })), (p = t.querySelector('[data-action="mic-device"]')) == null || p.addEventListener("change", async (v) => {
      await game.settings.set(w, nr, v.currentTarget.value), await Ht(this.bridge);
    }), (m = t.querySelector('[data-action="mic-test"]')) == null || m.addEventListener("click", (v) => this._onMicTest(v)), (y = t.querySelector('[data-action="display"]')) == null || y.addEventListener("click", (v) => this._onDisplay(v)), this._activateTravel(t), (b = t.querySelector('[data-action="known"]')) == null || b.addEventListener("change", (v) => {
      Nt(this._openThread, { known: v.currentTarget.checked });
    }), this._openThread && this._markRead(this._openThread);
    const r = t.querySelector(".cpr-phone-log");
    r && (r.scrollTop = r.scrollHeight);
  }
  async _onDisplay(e) {
    const t = e.currentTarget;
    t.disabled = !0;
    try {
      const r = !!je(), s = await zc();
      ui.notifications.info(r ? `${s.name}: party vision is up to date.` : `Created ${s.name}. Log in as it on the table screen; it has no password.`);
    } catch (r) {
      console.error("[Bridge] Display screen setup failed", r), ui.notifications.error(`Display screen: ${r.message}`);
    }
    this.render(!1);
  }
  _markRead(e) {
    var s;
    const t = Y(e), r = ((s = (Oe().get(e) ?? []).filter((i) => fe(i).from === t.pcId).at(-1)) == null ? void 0 : s.timestamp) ?? 0;
    r > rt(e).gmReadAt && Nt(e, { gmReadAt: r });
  }
  _openThreadById(e) {
    this._openThread = e, this.render(!1);
  }
  async _onCompose(e) {
    var u;
    e.preventDefault();
    const t = e.currentTarget, r = game.actors.get(t.from.value), s = game.actors.get(t.to.value), i = t.text.value, a = ((u = e.submitter) == null ? void 0 : u.value) === "call";
    if (!r || !s || !a && !i.trim()) return;
    const l = be(r.id, s.id);
    Oe().has(l) || await Nt(l, { known: !t.unknown.checked }), a ? await this._call(r, s, i) : await this._send(r, s, i), this._openThread = l, this.render(!1);
  }
  async _onReply(e) {
    e.preventDefault();
    const t = Y(this._openThread), r = game.actors.get(t == null ? void 0 : t.npcId), s = game.actors.get(t == null ? void 0 : t.pcId), i = e.currentTarget.text.value;
    !r || !s || !i.trim() || await this._send(r, s, i);
  }
  async _onCallOpenThread(e) {
    e.preventDefault();
    const t = Y(this._openThread), r = game.actors.get(t == null ? void 0 : t.npcId), s = game.actors.get(t == null ? void 0 : t.pcId);
    r && s && await this._call(r, s, e.currentTarget.opener.value);
  }
  async _call(e, t, r = "") {
    try {
      await nu(this.bridge, e, t, r);
    } catch (s) {
      ui.notifications.warn(`Call not placed: ${s.message}`);
    }
  }
  /**
   * Listen for 8 seconds and show what the browser hears: which device,
   * a live level against the speech gate, or the error. Looks the meter up
   * each tick, because the console can re-render mid-test.
   */
  async _onMicTest(e) {
    const t = (s) => {
      var i, a, l, u;
      return ((a = (i = this.element) == null ? void 0 : i[0]) == null ? void 0 : a.querySelector(s)) ?? ((u = (l = this.element) == null ? void 0 : l.querySelector) == null ? void 0 : u.call(l, s));
    }, r = (s) => {
      const i = t(".cpr-mic-label");
      i && (i.textContent = s);
    };
    if (this._micTest) {
      this._micTest.stop(), this._micTest = null, r("");
      return;
    }
    r("Opening mic…");
    try {
      let s = 0;
      this._micTest = await ed((l, u) => {
        s = Math.max(s, l);
        const f = t(".cpr-mic-meter > span");
        f && (f.style.width = `${Math.min(100, l * 100)}%`, f.style.background = l >= u ? "#4ade80" : "#6b7280"), r(`Hearing: ${i} · level ${l.toFixed(2)} (peak ${s.toFixed(2)}, wave needs ${u})`);
      });
      const i = this._micTest.label;
      this._mics = this._micTest.devices;
      const a = t('[data-action="mic-device"]');
      if (a) {
        const l = En();
        a.replaceChildren(
          new Option("System default", ""),
          ...this._mics.map((u) => new Option(u.label, u.id, !1, u.id === l))
        );
      }
      setTimeout(() => {
        this._micTest = null;
      }, 8e3);
    } catch (s) {
      this._micTest = null, r(`Mic error: ${s.name}: ${s.message}`), console.error("[Bridge] Mic test failed", s);
    }
  }
  async _onMic(e) {
    const t = e.currentTarget.checked && await Yu();
    await game.settings.set(w, er, t), await Ht(this.bridge), this.render(!1);
  }
  async _onSay(e) {
    e.preventDefault();
    const t = Y(this._openThread), r = e.currentTarget.line;
    t && await ru(this.bridge, t.pcId, r.value) && (r.value = "");
  }
  async _send(e, t, r) {
    try {
      await Zl(this.bridge, e, t, r);
    } catch (s) {
      ui.notifications.error(`Text not sent: ${s.message}`);
    }
  }
  // Atlas travel (#34): approve or deny requests, then drive the trip.
  _activateTravel(e) {
    e.querySelectorAll("[data-travel-approve]").forEach((r) => r.addEventListener("submit", (s) => {
      s.preventDefault();
      const i = s.currentTarget;
      si(this.bridge, i.dataset.travelApprove, {
        durationMs: Number(i.seconds.value) * 1e3,
        encounterCount: Number(i.encounters.value)
      });
    }));
    const t = {
      deny: ii,
      cancel: oi,
      encounter: ai,
      resume: ci,
      pause: li
    };
    e.querySelectorAll("[data-travel]").forEach((r) => r.addEventListener("click", (s) => {
      var l;
      s.preventDefault();
      const { travel: i, id: a } = s.currentTarget.dataset;
      (l = t[i]) == null || l.call(t, this.bridge, a);
    })), e.querySelectorAll("[data-travel-rate]").forEach((r) => r.addEventListener("change", (s) => di(this.bridge, s.currentTarget.dataset.travelRate, Number(s.currentTarget.value)))), clearInterval(this._travelTimer), e.querySelector("[data-progress]") && (this._travelTimer = setInterval(() => {
      const r = ne();
      for (const s of e.querySelectorAll("[data-progress]")) {
        const i = jr(r).find((l) => l.id === s.dataset.progress);
        if (!i) continue;
        s.style.width = `${i.pct}%`;
        const a = s.parentElement.nextElementSibling;
        a && (a.textContent = `${i.pct}%`);
      }
    }, 500));
  }
  async close(e) {
    clearInterval(this._travelTimer);
    for (const [t, r] of this._hookIds) Hooks.off(t, r);
    return this._hookIds = [], this.bridge._agentConsole = null, super.close(e);
  }
}
function od(n) {
  n.hookIds.phoneRender || (n.hookIds.phoneRender = Hooks.on("renderChatMessage", (e, t) => {
    if (!fe(e)) return;
    const r = t instanceof HTMLElement ? t : t == null ? void 0 : t[0];
    r && (r.style.display = "none");
  }), n.hookIds.phoneCreate = Hooks.on("createChatMessage", (e) => {
    var s, i;
    const t = fe(e);
    if (!t || !game.user.isGM) return;
    if ((s = n._agentConsole) != null && s.rendered && n._agentConsole.render(!1), ((i = Y(t.thread)) == null ? void 0 : i.pcId) === t.from && te()) {
      const a = game.actors.get(t.from), l = game.actors.get(t.to);
      ui.notifications.info(`📱 ${(a == null ? void 0 : a.name) ?? "A player"} texted ${(l == null ? void 0 : l.name) ?? "a contact"}. Open the Agent Console to reply.`);
    }
  }), n.hookIds.phoneBook = Hooks.on("updateActor", (e, t) => {
    te() && foundry.utils.hasProperty(t, `flags.${w}`) && yt in t.flags[w] && n.pushToAgents("PHONE_BOOK_DATA", { pcId: e.id, contacts: Jt(e) }, ce(e));
  }), n.hookIds.phoneTokenConfig = Hooks.on("renderTokenConfig", (e, t) => {
    var f;
    if (!game.user.isGM) return;
    const r = e.document ?? e.object ?? e.token, s = (r == null ? void 0 : r.baseActor) ?? (r == null ? void 0 : r.actor) ?? e.actor;
    if (!s) return;
    const i = t instanceof HTMLElement ? t : t == null ? void 0 : t[0], a = (i == null ? void 0 : i.querySelector('.tab[data-tab="character"]')) ?? (i == null ? void 0 : i.querySelector("form"));
    if (!a || a.querySelector(".cpr-agent-phone")) return;
    const l = document.createElement("div");
    l.className = "form-group cpr-agent-phone", l.innerHTML = `
            <label>Agent phone contact</label>
            <div class="form-fields">
                <input type="checkbox" ${s.getFlag(w, "phoneEnabled") ? "checked" : ""}>
            </div>
            <p class="hint">Lets the GM text players as ${Handlebars.escapeExpression(s.name)} from the Agent Console. Saved to the actor straight away.</p>
            <label>Phone number</label>
            <div class="form-fields">
                <input type="text" class="cpr-agent-phone-number" placeholder="Assigned when enabled"
                       value="${Handlebars.escapeExpression(s.getFlag(w, oe) ?? "")}">
            </div>
            <p class="hint">Plant it anywhere with <code>@Phone[${Handlebars.escapeExpression(s.name)}]</code>. Players who find it can save and call it.</p>`;
    const u = l.querySelector(".cpr-agent-phone-number");
    l.querySelector('input[type="checkbox"]').addEventListener("change", async (p) => {
      await s.setFlag(w, "phoneEnabled", p.currentTarget.checked), p.currentTarget.checked && (u.value = await xs(s) ?? "");
    }), u.addEventListener("change", async (p) => {
      try {
        await jn(s, p.currentTarget.value), u.value = s.getFlag(w, oe) ?? "";
      } catch (m) {
        ui.notifications.warn(m.message), u.value = s.getFlag(w, oe) ?? "";
      }
    }), a.prepend(l), (f = e.setPosition) == null || f.call(e, { height: "auto" });
  }));
}
const z = "cpr-agent-codec", it = (n) => Handlebars.escapeExpression(String(n ?? ""));
function ad() {
  let n = null;
  for (const [e, t] of Object.entries(Re())) {
    const r = t.answeredAt ?? t.startedAt;
    (!n || r > n.at) && (n = { pcId: e, call: t, at: r });
  }
  return n;
}
function Vr(n, e, t) {
  const r = n ? `<img src="${it(n)}" alt="">` : '<div class="cpr-codec-static"></div>';
  return `<figure class="cpr-codec-face ${t}">${r}<figcaption>${it(e)}</figcaption></figure>`;
}
function Wr() {
  var u, f;
  const n = ad();
  let e = document.getElementById(z);
  if (!n) {
    e == null || e.remove();
    return;
  }
  e || (e = document.createElement("div"), e.id = z, document.body.append(e));
  const { call: t, pcId: r } = n, s = ((u = Y(t.thread)) == null ? void 0 : u.npcId) ?? t.number, i = t.thread ? Ee(t.thread) : { name: Q(t.number), img: null, known: !0 }, a = game.actors.get(r), l = t.state !== "live";
  e.className = l ? "ringing" : "live", e.innerHTML = `
        <div class="cpr-codec-frame">
            ${Vr(i.known ? i.img : null, i.known ? i.name : "Unknown", "npc")}
            <div class="cpr-codec-tuner">
                <div class="cpr-codec-label">${l ? "Incoming call" : "Codec"}</div>
                <div class="cpr-codec-freq">${Hs(s)}</div>
                ${l ? "" : `<div class="cpr-codec-wave">${"<i></i>".repeat(tr)}</div>`}
                <div class="cpr-codec-label">${l ? t.direction === "out" ? `${it((a == null ? void 0 : a.name) ?? "")} calling` : `Calling ${it((a == null ? void 0 : a.name) ?? "")}` : "PTT"}</div>
            </div>
            ${Vr((a == null ? void 0 : a.img) ?? null, (a == null ? void 0 : a.name) ?? "", "pc")}
            <div class="cpr-codec-line">${(f = t.line) != null && f.text ? it(t.line.text) : ""}</div>
        </div>`;
}
function cd(n) {
  const e = document.querySelectorAll(`#${z} .cpr-codec-wave i`);
  if (!e.length) return;
  const t = n.bands ?? [], r = Math.ceil(e.length / 2);
  e.forEach((s, i) => {
    const a = t[Math.abs(i - r + (i < r ? 1 : 0))] ?? 0;
    s.style.height = `${8 + a / 15 * 92}%`;
  });
}
function ld() {
  if (!mt(game.user)) return;
  const n = document.createElement("style");
  n.textContent = ud, document.head.append(n), Hooks.on(ut, Wr), Hooks.on(mi, cd), Wr();
}
const ud = `
#${z} {
    position: fixed; inset: 0; z-index: 10000;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0, 12, 4, 0.97);
    color: #7dffa0; font-family: monospace; text-transform: uppercase;
    pointer-events: none;
}
#${z}::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0 2px, transparent 2px 4px);
}
#${z} .cpr-codec-frame {
    position: relative; width: min(90vw, 160vh); aspect-ratio: 16 / 9;
    display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr auto;
    gap: 2vh; padding: 3vh; border: 2px solid #2ea85a;
    box-shadow: 0 0 40px rgba(46,168,90,0.35), inset 0 0 40px rgba(46,168,90,0.15);
}
#${z} .cpr-codec-face { margin: 0; display: flex; flex-direction: column; gap: 1vh; }
#${z} .cpr-codec-face.npc { grid-column: 3; grid-row: 1 / 3; align-self: start; }
#${z} .cpr-codec-face.pc { grid-column: 1; grid-row: 1 / 3; align-self: end; }
#${z} .cpr-codec-face img,
#${z} .cpr-codec-static {
    width: 100%; aspect-ratio: 1; object-fit: cover; border: 2px solid #2ea85a;
    filter: grayscale(1) sepia(1) hue-rotate(70deg) saturate(3) brightness(0.9);
}
#${z} .cpr-codec-static {
    background: repeating-radial-gradient(circle at 30% 40%, #0f3 0 1px, #031 1px 3px);
    animation: cpr-codec-flicker 0.15s steps(2) infinite;
}
#${z} figcaption { font-size: 2.4vh; letter-spacing: 0.2em; text-align: center; }
#${z} .cpr-codec-tuner {
    grid-column: 2; grid-row: 1 / 3; align-self: center;
    display: flex; flex-direction: column; align-items: center; gap: 1.5vh;
}
#${z} .cpr-codec-freq { font-size: 10vh; letter-spacing: 0.05em; text-shadow: 0 0 12px #2ea85a; }
#${z} .cpr-codec-label { font-size: 2.2vh; letter-spacing: 0.3em; opacity: 0.8; }
#${z} .cpr-codec-line {
    grid-column: 1 / 4; min-height: 6vh; padding: 1.5vh 2vh; border-top: 1px solid #2ea85a;
    font-size: 3.2vh; text-transform: none; text-align: center;
}
#${z} .cpr-codec-wave {
    display: flex; align-items: center; justify-content: center; gap: 0.6vh;
    width: 100%; height: 9vh;
}
#${z} .cpr-codec-wave i {
    display: block; width: 1.2vh; height: 8%; background: #7dffa0;
    box-shadow: 0 0 6px #2ea85a; transition: height 70ms linear;
}
#${z}.ringing .cpr-codec-freq { animation: cpr-codec-blink 1s steps(2) infinite; }
@keyframes cpr-codec-blink { 50% { opacity: 0.2; } }
@keyframes cpr-codec-flicker { 50% { background-position: 3px 2px; } }
`, G = "cpr-agent-transit", dd = ["active", "encounter", "paused"], Kr = ["#f5e642", "#3de0ff", "#ff4f9a", "#7dff6a"], Ze = (n) => Handlebars.escapeExpression(String(n ?? "")), hd = `
#${G} { position: fixed; inset: 0; z-index: 90; display: flex; flex-direction: column;
    background: rgba(5, 6, 10, 0.94); color: #e8e8e8; font-family: var(--font-primary, sans-serif); }
#${G} .cpr-transit-stage { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; padding: 1.5vmin; }
#${G} .cpr-transit-map { position: relative; max-width: 100%; max-height: 100%;
    border: 1px solid rgba(245, 230, 66, 0.35); box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    background: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 48px),
                repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 48px), #0b0d14; }
#${G} .cpr-transit-map img { display: block; width: 100%; height: 100%; }
#${G} .cpr-transit-map svg { position: absolute; inset: 0; width: 100%; height: 100%; }
#${G} .cpr-transit-end { position: absolute; transform: translate(-50%, 0.6em); white-space: nowrap;
    font-size: 1.1vmax; text-shadow: 0 0 4px #000, 0 0 8px #000; }
#${G} .cpr-transit-van { position: absolute; width: 3.2vmax; height: 3.2vmax; transform: translate(-50%, -50%);
    display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #0a0a0a;
    font-size: 1.5vmax; box-shadow: 0 0 14px rgba(0, 0, 0, 0.8); }
#${G} .cpr-transit-van.paused { opacity: 0.55; }
#${G} .cpr-transit-van.encounter { animation: cpr-transit-flash 0.8s steps(2, jump-none) infinite; }
#${G} .cpr-transit-cards { display: flex; gap: 1.5vmax; justify-content: center; padding: 0 2vmax 2vmax; }
#${G} .cpr-transit-card { flex: 1; max-width: 34vmax; padding: 1vmax 1.4vmax; background: rgba(0, 0, 0, 0.6);
    border-left: 0.4vmax solid var(--tint); }
#${G} .cpr-transit-card h3 { margin: 0; font-size: 1.5vmax; border: 0; color: #fff; }
#${G} .cpr-transit-card p { margin: 0.2vmax 0 0.6vmax; font-size: 1.1vmax; opacity: 0.8; }
#${G} .cpr-transit-bar { height: 0.6vmax; background: rgba(255, 255, 255, 0.15); }
#${G} .cpr-transit-bar i { display: block; height: 100%; width: 0; background: var(--tint); }
#${G} .cpr-transit-status { margin-top: 0.5vmax; font-size: 1vmax; letter-spacing: 0.15em; text-transform: uppercase; }
#${G} .cpr-transit-status.encounter { color: #ff4f4f; animation: cpr-transit-flash 0.8s steps(2, jump-none) infinite; }
@keyframes cpr-transit-flash { 50% { opacity: 0.25; } }
@media (prefers-reduced-motion: reduce) {
    #${G} .cpr-transit-van.encounter, #${G} .cpr-transit-status.encounter { animation: none; }
}
`;
let Ln = null, Mn = [];
const yn = (n) => Kr[n % Kr.length], ot = (n) => `${(n * 100).toFixed(3)}%`;
function fd() {
  return Object.values(ne().journeys).filter((n) => {
    var e;
    return dd.includes(n.status) && ((e = n.route) == null ? void 0 : e.length);
  }).sort((n, e) => n.id.localeCompare(e.id));
}
function Jr() {
  var p;
  cancelAnimationFrame(Ln), Ln = null;
  const n = fd();
  let e = document.getElementById(G);
  if (!n.length) {
    e == null || e.remove(), Mn = [];
    return;
  }
  e || (e = document.createElement("div"), e.id = G, document.body.append(e));
  const t = ((p = n.find((m) => {
    var y;
    return (y = m.map) == null ? void 0 : y.image;
  })) == null ? void 0 : p.map) ?? null, r = t != null && t.width && (t != null && t.height) ? t.width / t.height : 16 / 9, s = n.map((m, y) => `<polyline points="${m.route.map((b) => `${b.x},${b.y}`).join(" ")}"
        fill="none" stroke="${yn(y)}" stroke-width="3" stroke-dasharray="10 8" vector-effect="non-scaling-stroke" opacity="0.85"/>`).join(""), i = n.flatMap((m, y) => [[m.route[0], m.fromLabel], [m.route.at(-1), m.toLabel]].map(([b, v]) => `<span class="cpr-transit-end" style="left:${ot(b.x)};top:${ot(b.y)}">${Ze(v)}</span>`)).join(""), a = n.map((m, y) => `<span class="cpr-transit-van ${m.status}" style="background:${yn(y)}">
        <i class="fa-solid fa-truck"></i></span>`).join(""), l = n.map((m, y) => {
    const b = m.partyIds.map((T) => {
      var _;
      return (_ = game.actors.get(T)) == null ? void 0 : _.name;
    }).filter(Boolean).join(", ") || "Unknown", v = { active: "Travelling", paused: "Paused", encounter: "Encounter" }[m.status];
    return `<div class="cpr-transit-card" style="--tint:${yn(y)}">
            <h3>${Ze(b)}</h3><p>${Ze(m.fromLabel)} &rarr; ${Ze(m.toLabel)}</p>
            <div class="cpr-transit-bar"><i></i></div>
            <div class="cpr-transit-status ${m.status}">${v}</div></div>`;
  }).join("");
  e.innerHTML = `
        <div class="cpr-transit-stage">
            <div class="cpr-transit-map" style="aspect-ratio:${r}">
                ${t != null && t.image ? `<img src="${Ze(t.image)}" alt="">` : ""}
                <svg viewBox="0 0 1 1" preserveAspectRatio="none">${s}</svg>
                ${i}${a}
            </div>
        </div>
        <div class="cpr-transit-cards">${l}</div>`;
  const u = e.querySelectorAll(".cpr-transit-van"), f = e.querySelectorAll(".cpr-transit-bar i");
  Mn = n.map((m, y) => ({ journey: m, van: u[y], bar: f[y] })), Ai();
}
function Ai() {
  const n = Date.now();
  let e = !1;
  for (const { journey: t, van: r, bar: s } of Mn) {
    const i = ei(t, n), a = xu(t.route, i);
    a && (r.style.left = ot(a.x), r.style.top = ot(a.y)), s.style.width = ot(i), t.status === "active" && i < 1 && (e = !0);
  }
  Ln = e ? requestAnimationFrame(Ai) : null;
}
function pd() {
  if (!mt(game.user)) return;
  const n = document.createElement("style");
  n.textContent = hd, document.head.append(n), Hooks.on(qe, Jr), Jr();
}
window.Pusher = Pa;
window.cyberpunkBridge && window.cyberpunkBridge.destroy();
window.cyberpunkBridge = new Gu();
Hooks.once("init", () => {
  gd(), Wl(), eu(), Du(), Dl(), zl(), Wu(), CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] || (CONFIG.JournalEntryPage.dataModels["cpr-agent.datapool"] = pi, console.log("[Bridge] Registered DataPool DataModel.")), DocumentSheetConfig.registerSheet(JournalEntryPage, "cpr-agent", gi, {
    types: ["cpr-agent.datapool"],
    makeDefault: !0,
    label: "Agent Data Pool"
  }), console.log("[Bridge] Registered DataPool Journal Page Sheet.");
});
Hooks.once("ready", () => {
  game.user.isGM && window.cyberpunkBridge.connect(), window.cyberpunkBridge.syncPlayerLink(), window.cyberpunkBridge.registerGlobalHooks(), Kc(window.cyberpunkBridge), od(window.cyberpunkBridge), Vl(), te() && Fl(), _u(window.cyberpunkBridge), Vc(window.cyberpunkBridge), ou(window.cyberpunkBridge), $u(window.cyberpunkBridge), window.cyberpunkBridge.transit = {
    state: ne,
    approve: (n, e) => si(window.cyberpunkBridge, n, e),
    deny: (n) => ii(window.cyberpunkBridge, n),
    cancel: (n) => oi(window.cyberpunkBridge, n),
    encounter: (n) => ai(window.cyberpunkBridge, n),
    resume: (n) => ci(window.cyberpunkBridge, n),
    pause: (n) => li(window.cyberpunkBridge, n),
    rate: (n, e) => di(window.cyberpunkBridge, n, e)
  }, ld(), pd(), sd(window.cyberpunkBridge), window.cyberpunkBridge.openAgent = () => {
    window.cyberpunkBridge._agentApp || (window.cyberpunkBridge._agentApp = new zu(window.cyberpunkBridge)), window.cyberpunkBridge._agentApp.render(!0);
  }, window.cyberpunkBridge.openConsole = () => {
    game.user.isGM && (window.cyberpunkBridge._agentConsole || (window.cyberpunkBridge._agentConsole = new id(window.cyberpunkBridge)), window.cyberpunkBridge._agentConsole.render(!0));
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
function gd() {
  game.settings.settings.has(`${w}.apiUrl`) || (console.log("[Bridge] Registering Module Settings..."), window.cyberpunkBridge.registerSettings());
}
