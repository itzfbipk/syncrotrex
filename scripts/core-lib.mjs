import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  C as n,
  E as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  p as D,
  v as O,
  w as k,
  x as A,
  y as j,
  z as M,
} from "./react.mjs";
import {
  $ as N,
  A as ee,
  C as P,
  D as te,
  E as F,
  G as ne,
  H as re,
  I as ie,
  J as ae,
  K as oe,
  L as se,
  M as ce,
  N as le,
  O as ue,
  Q as de,
  R as fe,
  T as pe,
  U as I,
  V as me,
  W as he,
  X as ge,
  Y as L,
  Z as _e,
  _ as ve,
  a as ye,
  at as be,
  b as xe,
  c as Se,
  d as Ce,
  et as we,
  f as Te,
  g as Ee,
  h as De,
  i as Oe,
  it as ke,
  j as Ae,
  k as je,
  l as Me,
  m as Ne,
  n as Pe,
  nt as R,
  o as Fe,
  p as Ie,
  r as Le,
  rt as Re,
  s as ze,
  tt as Be,
  u as Ve,
  v as He,
  w as Ue,
  x as We,
  y as Ge,
  z as Ke,
} from "./motion.mjs";
function qe(e) {
  return typeof e == `function`;
}
function Je(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function Ye(e) {
  return Number.isFinite(e);
}
function Xe(e) {
  return Array.isArray(e);
}
function B(e) {
  return typeof e == `object` && !!e && !Xe(e);
}
function Ze(e) {
  for (let t in e) return !1;
  return !0;
}
function Qe(e) {
  return e === void 0;
}
function $e(e) {
  return e === null;
}
function et(e) {
  return e == null;
}
function tt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function nt(e) {
  return B(e) && qe(e.return);
}
function rt(e) {
  return B(e) && qe(e.then);
}
function it(e) {
  return e instanceof Promise;
}
function at(e) {
  return `url('${ot(e)}')`;
}
function ot(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function st(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via #/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function ct() {
  if (!Ph) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = import(n)
      .then((t) => (Vh.set(e, t), t))
      .catch((t) => {
        throw (
          Vh.delete(e),
          console.warn(`Failed to import lazy module: ${n}`, t),
          t
        );
      });
    (r.catch(Nh), Vh.set(e, r));
  }
}
function lt(e) {
  return typeof e == `object` && !!e && !T(e) && Uh in e;
}
function ut(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function dt(e, t = `default`, n) {
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Vh.has(n)) return;
      let e = Vh.get(n);
      it(e) ? s(() => e) : (i = ut(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ut(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = O(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Hh !== void 0 && Hh.add(n), !i)) throw s(e);
      return w(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function ft(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function pt(e) {
  return e === null || !(Gh in e) ? !1 : typeof e.equals == `function`;
}
function mt(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function ht(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!mt(e[r], t[r])) return !1;
  return !0;
}
function gt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!St(e[r], t[r], !0)) return !1;
  return !0;
}
function _t(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!mt(r, t.get(n))) return !1;
  return !0;
}
function vt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!St(r, t.get(n), !0)) return !1;
  return !0;
}
function yt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function bt(e, t) {
  let n = Wh(e);
  if (n.length !== Wh(t).length) return !1;
  for (let r of n)
    if (
      !ft(t, r) ||
      (!(r === `_owner` && ft(e, `$$typeof`) && e.$$typeof) && !mt(e[r], t[r]))
    )
      return !1;
  return !0;
}
function xt(e, t) {
  let n = Wh(e);
  if (n.length !== Wh(t).length) return !1;
  for (let r of n)
    if (
      !ft(t, r) ||
      (!(r === `_owner` && ft(e, `$$typeof`) && e.$$typeof) &&
        !St(e[r], t[r], !0))
    )
      return !1;
  return !0;
}
function St(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? gt(e, t) : ht(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? vt(e, t) : _t(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return yt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? pt(e) && pt(t)
        ? e.equals(t)
        : n
          ? xt(e, t)
          : bt(e, t)
      : !1;
}
function Ct(e, t, n = !0) {
  try {
    return St(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(
          `Warning: isEqual does not handle circular references.`,
          e.name,
          e.message,
        ),
        !1
      );
    throw e;
  }
}
function wt(e) {
  return f.useCallback((t) => e[t], [e]);
}
function Tt({ api: e, children: t }) {
  return w(Kh.Provider, { value: e, children: t });
}
function Et() {
  return f.useContext(Kh);
}
function Dt({ routes: e, children: t }) {
  let n = wt(e),
    r = S(() => ({ getRoute: n }), [n]);
  return w(Kh.Provider, { value: r, children: t });
}
function Ot() {
  let e = Et(),
    n = t(qh),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return S(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function kt() {
  let e = Ot();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function At(e) {
  let t = Ot(),
    n = f.useRef(t);
  Ct(n.current, t) || !t || ((n.current = t), e(t));
}
function jt(e) {
  let t = Et();
  if (e) return t.getRoute?.(e);
}
function Mt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Nt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) &&
        performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++)
    document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Pt(e, t) {
  let n = Ot(),
    r = jt(t) ?? n;
  return f.useMemo(() => (r ? Mt(r, e) : e), [e, r]);
}
function Ft() {
  return Ot()?.pathVariables;
}
function V(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function H(e, t) {
  throw (
    t ||
    Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
  );
}
function It(e) {
  return Object(e) !== e;
}
function Lt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === ng
  );
}
function Rt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function zt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` `
        ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}`
        : ``;
  }
}
function Bt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = zt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Vt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
  );
}
function Ht(e) {
  return rg.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Ut(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  let t = +e;
  return !(t >= 2 ** 32 - 1 || t < 0);
}
function Wt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Ut(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Gt(e) {
  let t = new DataView(e),
    n = ``;
  for (let r = 0; r < e.byteLength; r++)
    n += String.fromCharCode(t.getUint8(r));
  return Jt(n);
}
function Kt(e) {
  let t = qt(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let e = 0; e < n.byteLength; e++) r.setUint8(e, t.charCodeAt(e));
  return n;
}
function qt(e) {
  e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
  let t = ``,
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    ((n <<= 6),
      (n |= ig.indexOf(e[i])),
      (r += 6),
      r === 24 &&
        ((t += String.fromCharCode((n & 16711680) >> 16)),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255)),
        (n = r = 0)));
  return (
    r === 12
      ? ((n >>= 4), (t += String.fromCharCode(n)))
      : r === 18 &&
        ((n >>= 2),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255))),
    t
  );
}
function Jt(e) {
  let t = ``;
  for (let n = 0; n < e.length; n += 3) {
    let r = [void 0, void 0, void 0, void 0];
    ((r[0] = e.charCodeAt(n) >> 2),
      (r[1] = (e.charCodeAt(n) & 3) << 4),
      e.length > n + 1 &&
        ((r[1] |= e.charCodeAt(n + 1) >> 4),
        (r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
      e.length > n + 2 &&
        ((r[2] |= e.charCodeAt(n + 2) >> 6),
        (r[3] = e.charCodeAt(n + 2) & 63)));
    for (let e = 0; e < r.length; e++)
      r[e] === void 0 ? (t += `=`) : (t += ig[r[e]]);
  }
  return t;
}
function Yt(e, t) {
  return Xt(JSON.parse(e), t);
}
function Xt(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === ag) return;
    if (e === sg) return NaN;
    if (e === cg) return 1 / 0;
    if (e === lg) return -1 / 0;
    if (e === ug) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if (
            (typeof t != `number` && (t = n.push(s[1]) - 1),
            (i ??= new Set()),
            i.has(t))
          )
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`:
            let c = Object(s[1]);
            if (Object.hasOwn(c, `__proto__`))
              throw Error("Cannot parse an object with a `__proto__` property");
            r[e] = c;
            break;
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let l = Object.create(null);
            r[e] = l;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error(
                  "Cannot parse an object with a `__proto__` property",
                );
              l[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = new t(a(s[1]));
            r[e] = s[2] === void 0 ? i : i.subarray(s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`)
              throw Error(`Invalid ArrayBuffer encoding`);
            r[e] = Kt(t);
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`:
            r[e] = new URL(s[1]);
            break;
          case `URLSearchParams`:
            r[e] = new URLSearchParams(s[1]);
            break;
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === dg) {
        let t = s[1];
        if (!Number.isInteger(t) || t < 0) throw Error(`Invalid input`);
        let n = Array(t);
        r[e] = n;
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!Number.isInteger(r) || r < 0 || r >= t)
            throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== og && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`)
          throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function Zt(e, t) {
  let n = [],
    r = new Map(),
    i = [];
  if (t)
    for (let e of Object.getOwnPropertyNames(t)) i.push({ key: e, fn: t[e] });
  let a = [],
    o = 0;
  function s(t) {
    if (t === void 0) return ag;
    if (Number.isNaN(t)) return sg;
    if (t === 1 / 0) return cg;
    if (t === -1 / 0) return lg;
    if (t === 0 && 1 / t < 0) return ug;
    if (r.has(t)) return r.get(t);
    let c = o++;
    r.set(t, c);
    for (let { key: e, fn: r } of i) {
      let i = r(t);
      if (i) return ((n[c] = `["${e}",${s(i)}]`), c);
    }
    if (typeof t == `function`)
      throw new tg(`Cannot stringify a function`, a, t, e);
    let l = ``;
    if (It(t)) l = Qt(t);
    else {
      let n = Rt(t);
      switch (n) {
        case `Number`:
        case `String`:
        case `Boolean`:
          l = `["Object",${Qt(t)}]`;
          break;
        case `BigInt`:
          l = `["BigInt",${t}]`;
          break;
        case `Date`:
          l = `["Date","${isNaN(t.getDate()) ? `` : t.toISOString()}"]`;
          break;
        case `URL`:
          l = `["URL",${Bt(t.toString())}]`;
          break;
        case `URLSearchParams`:
          l = `["URLSearchParams",${Bt(t.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = t;
          l = i ? `["RegExp",${Bt(r)},"${i}"]` : `["RegExp",${Bt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          l = `[`;
          for (let n = 0; n < t.length; n += 1)
            if ((n > 0 && (l += `,`), Object.hasOwn(t, n)))
              (a.push(`[${n}]`), (l += s(t[n])), a.pop());
            else if (e) l += og;
            else {
              let n = Wt(t),
                r = n.length,
                i = String(t.length).length;
              if ((t.length - r) * 3 > 4 + i + r * (i + 1)) {
                l = `[` + dg + `,` + t.length;
                for (let e = 0; e < n.length; e++) {
                  let r = n[e];
                  (a.push(`[${r}]`), (l += `,` + r + `,` + s(t[r])), a.pop());
                }
                break;
              } else ((e = !0), (l += og));
            }
          l += `]`;
          break;
        }
        case `Set`:
          l = `["Set"`;
          for (let e of t) l += `,${s(e)}`;
          l += `]`;
          break;
        case `Map`:
          l = `["Map"`;
          for (let [e, n] of t)
            (a.push(`.get(${It(e) ? Qt(e) : `...`})`),
              (l += `,${s(e)},${s(n)}`),
              a.pop());
          l += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let e = t;
          l = `["` + n + `",` + s(e.buffer);
          let r = t.byteOffset,
            i = r + t.byteLength;
          if (r > 0 || i !== e.buffer.byteLength) {
            let e = /(\d+)/.exec(n)[1] / 8;
            l += `,${r / e},${i / e}`;
          }
          l += `]`;
          break;
        }
        case `ArrayBuffer`:
          l = `["ArrayBuffer","${Gt(t)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          l = `["${n}",${Bt(t.toString())}]`;
          break;
        default:
          if (!Lt(t))
            throw new tg(`Cannot stringify arbitrary non-POJOs`, a, t, e);
          if (Vt(t).length > 0)
            throw new tg(`Cannot stringify POJOs with symbolic keys`, a, t, e);
          if (Object.getPrototypeOf(t) === null) {
            l = `["null"`;
            for (let n of Object.keys(t)) {
              if (n === `__proto__`)
                throw new tg(
                  `Cannot stringify objects with __proto__ keys`,
                  a,
                  t,
                  e,
                );
              (a.push(Ht(n)), (l += `,${Bt(n)},${s(t[n])}`), a.pop());
            }
            l += `]`;
          } else {
            l = `{`;
            let n = !1;
            for (let r of Object.keys(t)) {
              if (r === `__proto__`)
                throw new tg(
                  `Cannot stringify objects with __proto__ keys`,
                  a,
                  t,
                  e,
                );
              (n && (l += `,`),
                (n = !0),
                a.push(Ht(r)),
                (l += `${Bt(r)}:${s(t[r])}`),
                a.pop());
            }
            l += `}`;
          }
      }
    }
    return ((n[c] = l), c);
  }
  let c = s(e);
  return c < 0 ? `${c}` : `[${n.join(`,`)}]`;
}
function Qt(e) {
  let t = typeof e;
  return t === `string`
    ? Bt(e)
    : e instanceof String
      ? Bt(e.toString())
      : e === void 0
        ? ag.toString()
        : e === 0 && 1 / e < 0
          ? ug.toString()
          : t === `bigint`
            ? `["BigInt","${e}"]`
            : String(e);
}
function $t(e, t, n = `lazy`) {
  switch ((K.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, {
            detail: { trackingId: e, href: n },
          }),
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }),
        );
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(
        new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }),
      );
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, {
            detail: { trackingId: e },
          }),
        );
      break;
    }
  }
}
function en(e) {
  return z(e) && (e === `` || pg.test(e));
}
function tn() {
  return { [mg.QueryCache]: new Map(), [mg.CollectionUtilsCache]: new Map() };
}
function nn() {
  if (!Ph) return;
  if (hg !== void 0) return hg;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      hg = Yt(e.text) ?? tn();
    } catch (e) {
      ((hg = tn()),
        console.warn(
          `Failed to parse handover data. Falling back to network.`,
          e,
        ));
    }
    return (
      Lh(() => {
        (e?.remove(), (e = null));
      }),
      hg
    );
  }
}
function rn(e, t) {
  if (
    (console.warn(
      st(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`,
      ),
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    $t(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function an(e, t) {
  let n = nn();
  return n ? n[e].has(t) : !1;
}
function on(e, t) {
  let n = nn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function sn(e) {
  return e?.id ?? Qh;
}
function cn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function ln(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (yg.has(n)) return yg.get(n);
    let r = new xg(n, t);
    return (yg.set(n, r), r);
  };
}
function un({ children: e, collectionUtils: t }) {
  let n = S(() => ({ get: ln(t) }), [t]);
  return w(bg.Provider, { value: n, children: e });
}
function dn() {
  return t(bg);
}
function fn() {
  for (let e of wg) e();
  wg.clear();
}
function pn(e) {
  return new Promise((t) => {
    if ((wg.add(t), document.hidden)) {
      fn();
      return;
    }
    (document.addEventListener(`visibilitychange`, fn),
      document.addEventListener(`pagehide`, fn),
      De.read(() => {
        hn(e).then(() => {
          (wg.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function mn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      De.read(
        () => {
          hn(e).then(t);
        },
        !1,
        !0,
      ));
  });
}
function hn(e) {
  let t = e?.priority;
  return Sg || Cg
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : Sg
        ? K.scheduler.yield(e).catch(Nh)
        : K.scheduler.postTask(() => {}, e).catch(Nh)
    : t === `user-blocking`
      ? Promise.resolve()
      : new Promise((e) => {
          setTimeout(e, t === `background` ? 1 : 0);
        });
}
function gn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? pn(r) : t === `paint` ? mn(r) : hn(r);
}
function _n() {
  let e = dn(),
    { autobahnNavigation: t } = Zh(),
    { getRoute: n } = Et();
  return s(
    (r, i, a = !0, o = !0) => {
      if (!r || !n) return;
      let s = n(r),
        { pathVariables: c, locale: l } = i;
      return yn(
        s,
        { routeId: r, pathVariables: c, locale: l, collectionUtils: e },
        a,
        o && t,
      );
    },
    [n, e, t],
  );
}
function vn(e, t = !0) {
  let n = _n();
  c(() => {
    if (!(!t || !Tg)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function yn(e, t, n = !0, r = !0) {
  if (!Tg || !e) return;
  let i = e.page;
  if (!(!i || !lt(i))) {
    n && (await gn());
    try {
      let e = await i.preload();
      r && t && e && (await bn(e, t));
    } catch {}
  }
}
async function bn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function xn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Sn(e),
    [r, i] = Sn(t),
    a = Cn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Sn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Cn(e, t) {
  if (e === t || ((e = `/` + wn(e)), (t = `/` + wn(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Og(e, 1 + s);
    if (n !== Og(t, 1 + s)) break;
    n === Dg && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Og(t, 1 + s) === Dg) return Ag(t, 1 + s + 1);
      if (s === 0) return Ag(t, 1 + s);
    } else r > a && (Og(e, 1 + s) === Dg ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Og(e, s) === Dg) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Ag(t, 1 + o)}`;
}
function wn(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Og(e, o);
    else if (Ng(a)) break;
    else a = Dg;
    if (Ng(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            Og(t, t.length - 1) !== Eg ||
            Og(t, t.length - 2) !== Eg
          ) {
            if (t.length > 2) {
              let e = kg(t, Mg);
              (e === -1
                ? ((t = ``), (n = 0))
                : ((t = Ag(t, 0, e)), (n = t.length - 1 - kg(t, Mg))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          jg && ((t += t.length > 0 ? `${Mg}..` : `..`), (n = 2));
        } else
          (t.length > 0
            ? (t += `${Mg}${Ag(e, r + 1, o)}`)
            : (t = Ag(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Eg && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Tn(e, t) {
  return e.replace(Fg, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function En(e, t = !1) {
  let n = ``;
  if (M !== void 0)
    if (t) n = M.location.search;
    else {
      let e = M.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? M.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Dn(n, e) : e;
}
function Dn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Ig && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function On(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Fg)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u)
          throw Error(
            `Failed to replace path variables: unexpected regex match group`,
          );
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = it(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = it(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = it(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      }),
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
async function kn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await On(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    t.slug && (u.path = `/` + t.slug + u.path),
    o && u.path && (u.path = En(u.path, !0)),
    u
  );
}
function An(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || M.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function jn({ children: e, value: t }) {
  return w(Lg.Provider, { value: t, children: e });
}
function Mn() {
  return f.useContext(Lg);
}
function Nn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Pn(e) {
  let t = Rg,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < zg;) ((n = e.next(t)), r.push(n.value), (t += Rg));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Rg }
  );
}
function Fn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function In(e) {
  let { innerWidth: t, innerHeight: n } = M,
    [r, i] = Fn(e.x),
    [a, o] = Fn(e.y);
  return {
    x: i === `px` ? r : (r / 100) * t,
    y: o === `px` ? a : (a / 100) * n,
  };
}
function Ln(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Rn(e) {
  return e ? Vg[e] : void 0;
}
function zn(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`),
      (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Bn(t)) {
    let { easing: e, duration: n } = Pn(
      ue({ keyframes: [0, 1], ...Vn(t), restDelta: 0.001, restSpeed: 1e-4 }),
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Rn(n?.mask?.type),
    o = Ln(n, `start`, e, a),
    s = Ln({ ...Hg, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Bn(e) {
  return e.type === `spring`;
}
function Vn(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Hn({ exit: e = Wg, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Ug;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += zn(`exit`, e)),
    (r += zn(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Un() {
  Lh(() => {
    De.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Ug);
      e && document.head.removeChild(e);
    });
  });
}
function Wn() {
  return !!document.startViewTransition;
}
function Gn(e) {
  return new Promise((t) => {
    De.render(() => {
      (performance.mark(`framer-vt-style`), Hn(e), t());
    });
  });
}
async function Kn(e, t, n) {
  if (!Wn()) {
    e();
    return;
  }
  if ((await Gn(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted &&
        (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Gg),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Un());
      })
      .catch(Gg),
    r
  );
}
function qn() {
  let e = Mn(),
    t = l(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    s(
      (n, r, i, a) => {
        let o = Nn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Kn(
            async () => {
              (i(), await e);
            },
            o,
            a,
          );
        }
        i();
      },
      [e],
    )
  );
}
function Jn(e, t) {
  Lh(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Yn(e, t, r, i = n) {
  i(() => {
    let t = async (e) => (await gn({ ...r, continueAfter: `paint` }), e()),
      n = t(e);
    return () => {
      (async () => {
        let e = await n;
        e && t(e);
      })();
    };
  }, t);
}
function Xn(e) {
  let t = l(void 0);
  return (
    Yn(
      () => {
        t.current &&= (t.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` },
    ),
    s(
      (n) => {
        let r = new Promise((e) => {
          t.current = e;
        });
        if (!e) return { promise: r, measureDetail: n, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o ||
                (performance.mark(a),
                performance.measure(e, { start: i, end: a, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: n,
            ignore: () => {
              ((o = !0), t.current?.(), (t.current = void 0));
            },
          }
        );
      },
      [e],
    )
  );
}
async function Zn(
  e,
  t,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: c,
    siteCanonicalURL: l,
  },
  u = !1,
) {
  let { path: d } = t;
  if (!d) return;
  let f = ir(t, {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    preserveQueryParams: c,
    siteCanonicalURL: l,
    localeId: s,
  });
  try {
    return await er(
      { routeId: e, hash: a, pathVariables: o, localeId: s },
      f,
      u,
    );
  } catch {}
}
function Qn(e) {
  return B(e) && z(e.routeId);
}
function $n(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    t && Jn(t, M.location.href),
    (n ? M.history.__proto__.replaceState : M.history.replaceState).call(
      M.history,
      e,
      ``,
      t,
    ));
}
async function er(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), Jn(t, M.location.href), !n)) {
    M.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  (Jg &&
    ((i = () => {
      if (((r = !0), Yg)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      (console.error(e),
        $t(`published_site_load_recoverable_error`, { message: e }));
    }),
    M.addEventListener(`popstate`, i, { once: !0 })),
    Yg && Jg
      ? M.history.__proto__.pushState.call(M.history, e, ``, t)
      : M.history.pushState(e, ``, t),
    Jg &&
      queueMicrotask(() => {
        r || ((Jg = !1), M.removeEventListener(`popstate`, i));
      }));
}
function tr({
  disabled: e,
  routeId: t,
  initialPathVariables: r,
  initialLocaleId: i,
}) {
  n(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let n = B(M.history.state) ? M.history.state : {},
      a = M.location.hash ? M.location.hash.slice(1) : void 0;
    $n(
      { ...n, routeId: t, hash: a, pathVariables: r, localeId: i },
      void 0,
      !0,
    );
  }, []);
}
function nr(e, t) {
  let n = qn(),
    r = Xn(`framer-route-change`),
    i = l(void 0),
    a = s(
      async ({ state: a }) => {
        if (
          (M.navigation?.transition &&
            M.navigation?.transition?.navigationType !== `traverse`) ||
          !B(a)
        )
          return;
        let { routeId: o, hash: s, pathVariables: c, localeId: l } = a;
        if (!z(o)) return;
        let u = r({ popstate: !0 }),
          d = Nt();
        u.promise.finally(d);
        let f = await n(e.current, o, () => {
            t(
              o,
              z(l) ? l : void 0,
              z(s) ? s : void 0,
              M.location.pathname + M.location.search + M.location.hash,
              B(c) ? c : void 0,
              !0,
              u,
              !1,
            );
          }),
          p = M.navigation?.transition;
        (await (f?.updateCallbackDone ?? Promise.resolve())
          .then(i.current?.resolve)
          .catch(i.current?.reject),
          await u.promise);
        try {
          await p?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (qg(), Jn(M.location.href));
      },
      [e, r, t, n],
    ),
    o = s((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              i.current = { resolve: e, reject: t };
            }),
              (i.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  c(
    () => (
      M.addEventListener(`popstate`, a),
      Xg && M.navigation.addEventListener(`navigate`, o),
      () => {
        (M.removeEventListener(`popstate`, a),
          Xg && M.navigation.removeEventListener(`navigate`, o));
      }
    ),
    [a, o],
  );
}
function rr(e, t, n) {
  let r = Mt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Fg, (e, t) => i[t] ?? e);
}
function ir(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
  },
) {
  let f = rr(i, e, o);
  if (l) return f ?? ``;
  let p = t ?? `/`;
  (n && d && (p = n[d] ?? p),
    r && (p = p.replace(Fg, (e, t) => String(r[t] || e))));
  let m = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (m = m.replace(Fg, (e, t) => String(a[t] || e)));
  let h = !!(p === m && f);
  if (s)
    if (Pg.has(p) && M !== void 0) {
      let e = An(u);
      m = xn(M.location.pathname, e + m);
    } else m = xn(p, m);
  return ((c || h) && (m = En(m, h)), f && (m = `${m}#${f}`), m);
}
async function ar(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${Tn(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type ===
    `opaqueredirect`
    ? ((M.location.href = M.location.origin + r), !0)
    : !1;
}
function or() {
  let e = dn();
  return s((t) => sr({ ...t, collectionUtils: e }), [e]);
}
async function sr(e) {
  let t = await kn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!z(t.path)) throw Error(`Expected result.path to be a string`);
      if (
        t.isMissingInLocale &&
        (await ar(e.route, t.pathVariables, e.nextLocale))
      )
        return;
    } catch {}
    return t;
  }
}
function cr() {
  let e = l(Promise.resolve()),
    t = l(),
    n = s((n) => {
      if (n.navigationType === `traverse` || !n.canIntercept) return;
      let r = t.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        n.intercept({ handler: () => e.current }));
    }, []);
  return s(
    (r, i, a) => {
      if (!Xg) {
        i();
        return;
      }
      ((e.current = r),
        (t.current = a),
        M.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally(() => {
          M.navigation.removeEventListener(`navigate`, n);
        }));
    },
    [n],
  );
}
function lr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function ur(e) {
  return lr(e.trim().toLowerCase().replace(Zg, `-`));
}
function dr({ children: e, value: t }) {
  return w($g.Provider, { value: t, children: e });
}
function fr() {
  return t($g);
}
function pr(e, t) {
  let n = i(() => ({ inputs: t, result: e() }))[0],
    r = l(!0),
    a = l(n),
    o =
      r.current || (t && a.current.inputs && Ct(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function mr(e, t) {
  return pr(() => e, t);
}
function hr() {
  return f.useContext(n_);
}
function gr() {
  return hr().activeLocale?.code ?? `en-US`;
}
function _r({ children: e }) {
  let [t, n] = i(``),
    r = fr();
  c(() => {
    if (r === `preview`) return;
    j(() => {
      n(M.location.search);
    });
    let e = () => {
      j(() => {
        n(M.location.search);
      });
    };
    return (
      M.addEventListener(`popstate`, e),
      () => {
        M.removeEventListener(`popstate`, e);
      }
    );
  }, []);
  let a = s(async (e) => {
      if (r === `preview`) {
        j(() => {
          n((t) => e(new URLSearchParams(t)).toString());
        });
        return;
      }
      await gn({ continueAfter: `paint` });
      let t = M.history.state,
        i = new URL(M.location.href),
        a = e(i.searchParams).toString();
      i.search = a;
      let o = t?.queryParamBackAnchorSearch,
        s = M.location.search.slice(1),
        c = o === void 0 && a !== s,
        l = o !== void 0 && a === o,
        u = {
          ...t,
          queryParamBackAnchorSearch: l ? void 0 : (o ?? (c ? s : void 0)),
        },
        d = i.toString();
      (c || l ? await er(u, d) : $n(u, d),
        j(() => {
          n(a);
        }));
    }, []),
    o = pr(
      () => ({
        urlSearchParams: new URLSearchParams(t),
        replaceSearchParams: a,
      }),
      [t, a],
    );
  return w(i_.Provider, { value: o, children: e });
}
function vr() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[a_] = 1), e);
}
function yr() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[a_] = 1), e);
}
function br(e) {
  return e instanceof HTMLInputElement &&
    (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function xr(e) {
  return a_ in e && e[a_] === 1;
}
function Sr(e) {
  return o_ in e.nativeEvent && e.nativeEvent[o_] === 1;
}
function Cr(e) {
  let t = l(!1),
    n = l(null),
    r = A(Rh, Bh, s_);
  return (
    c(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = br(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(yr()));
        return;
      }
      if (a === `checked`) {
        let e = yr();
        ((e[o_] = 1), i.dispatchEvent(e), i.dispatchEvent(yr()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(vr());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = vr();
      ((c[o_] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(vr()));
        }));
    }, [r]),
    n
  );
}
function wr() {
  if (!c_) return;
  ((u_ = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  c_.forEach((n) => t.addEventListener(n, l_, e));
}
function Tr() {
  return (
    c(() => {
      if (!u_ || !c_) return;
      let e = { capture: !0 },
        t = document.body;
      (c_.forEach((n) => t.removeEventListener(n, l_, e)),
        (c_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Er(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Dr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Or() {
  ((A_ = new k_()), A_.render.markStart());
}
function kr() {
  (k(() => {
    A_?.useInsertionEffects.markRouterStart();
  }, []),
    n(() => {
      A_?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      A_?.useEffects.markRouterStart();
    }, []));
}
function Ar() {
  (k(() => {
    (A_?.render.markEnd(), A_?.useInsertionEffects.markStart());
  }, []),
    n(() => {
      if (
        (A_?.useLayoutEffects.markStart(),
        document.visibilityState !== `visible`)
      ) {
        j_ = !0;
        return;
      }
      De.read(() => {
        (A_?.browserRendering.requestAnimationFrame.markStart(),
          A_?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (A_?.useEffects.markStart(),
        A_?.browserRendering.hasStarted ||
          (A_?.mutationEffects.measure(), A_?.useEffects.markAreSynchronous()));
    }, []));
}
function jr() {
  (k(() => {
    A_?.useInsertionEffects.markEnd();
  }, []),
    n(() => {
      (A_?.useLayoutEffects.markEnd(),
        !(j_ || document.visibilityState !== `visible`) &&
          De.read(() => {
            (A_?.browserRendering.requestAnimationFrame.markEnd(),
              gn().then(() => {
                A_?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      A_?.useEffects.markEnd();
    }, []));
}
function Mr() {
  return (Ar(), null);
}
function Nr() {
  return (jr(), null);
}
function Pr(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return f.isValidElement(e) ? f.cloneElement(e, n) : w(e, { ...n });
}
function Fr() {
  return F_;
}
function Ir(e) {
  if (I_?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      V(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: zr(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          V(t, `localizedPath must be defined`);
          let i = zr(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    for (let e in ((r = Object.values(t)),
    r.sort(({ depth: e }, { depth: t }) => t - e),
    n)) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    I_ = {
      pathRoutes: t,
      pathRoutesLocalized: n,
      paths: r,
      pathsLocalized: i,
      lastRoutes: a,
    };
  }
  return {
    pathRoutes: I_.pathRoutes,
    paths: I_.paths,
    pathRoutesLocalized: I_.pathRoutesLocalized,
    pathsLocalized: I_.pathsLocalized,
  };
}
function Lr(e, t, n = !0, r = Fr()) {
  return Rr(e, t, r, n);
}
function Rr(e, t, n, r = !0) {
  let {
      pathRoutes: i,
      paths: a,
      pathRoutesLocalized: o,
      pathsLocalized: s,
    } = Ir(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Br(t, n.path);
      if (e.isMatch)
        return {
          routeId: n.routeId,
          localeId: l,
          pathVariables: e.pathVariables,
        };
    }
  }
  let d = i[t];
  if (d) {
    let e = Br(t, d.path);
    if (e.isMatch)
      return {
        routeId: d.routeId,
        localeId: l,
        pathVariables: e.pathVariables,
      };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Br(t, n);
        if (e.isMatch)
          return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Br(t, e);
    if (r.isMatch)
      return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function zr(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Br(e, t) {
  let n = [],
    r = Vr(t).replace(Fg, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Vr(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Hr() {
  if (`PerformanceServerTiming` in M) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Ur(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s =
      e[i].elements || r.elements
        ? { ...e[i].elements, ...r.elements }
        : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Wr(e, t) {
  for (let [n, r] of t) Ur(e, n, r);
}
function Gr(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Kr(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a =
      e[n]?.elements || i.elements
        ? { ...e[n]?.elements, ...i.elements }
        : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function qr(e, t) {
  if (M === void 0) return t;
  let n = t;
  if (t) {
    Kr(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Wr(e, Hr()), Gr(e), n);
}
function Jr(e, ...t) {
  L_.has(e) || (L_.add(e), console.warn(e, ...t));
}
function Yr(e, t, n) {
  Jr(
    `Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`,
  );
}
function Xr(e) {
  return (
    typeof e == `object` &&
    !!e &&
    B_ in e &&
    e[B_] instanceof Function &&
    V_ in e &&
    e[V_] instanceof Function
  );
}
function Zr(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = z_(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Qr(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function $r(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function ei(e) {
  return Math.round(e * 2) / 2;
}
function ti(e, t) {
  return { x: e, y: t };
}
function ni(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function ri(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ii(e) {
  let t = ai(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function ai(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function oi(e, t, n) {
  return (
    (W_.rgb_r = e / 255),
    (W_.rgb_g = t / 255),
    (W_.rgb_b = n / 255),
    W_.rgbToHsluv(),
    { h: W_.hsluv_h, s: W_.hsluv_s, l: W_.hsluv_l }
  );
}
function si(e, t, n, r = 1) {
  return (
    (W_.hsluv_h = e),
    (W_.hsluv_s = t),
    (W_.hsluv_l = n),
    W_.hsluvToRgb(),
    { r: W_.rgb_r * 255, g: W_.rgb_g * 255, b: W_.rgb_b * 255, a: r }
  );
}
function ci(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function li(e, t, n) {
  return {
    r: ri(e) ? gi(e, 255) * 255 : 0,
    g: ri(t) ? gi(t, 255) * 255 : 0,
    b: ri(n) ? gi(n, 255) * 255 : 0,
  };
}
function ui(e, t, n, r) {
  let i = [
    yi(Math.round(e).toString(16)),
    yi(Math.round(t).toString(16)),
    yi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function di(e, t, n) {
  let r,
    i,
    a = gi(e, 255),
    o = gi(t, 255),
    s = gi(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function fi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function pi(e, t, n) {
  let r, i, a;
  if (
    ((e = gi(e, 360)), (t = gi(t * 100, 100)), (n = gi(n * 100, 100)), t === 0)
  )
    r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = fi(s, o, e + 1 / 3)), (i = fi(s, o, e)), (a = fi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function mi(e, t, n) {
  ((e = gi(e, 255)), (t = gi(t, 255)), (n = gi(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function hi(e, t, n) {
  ((e = gi(e, 360) * 6), (t = gi(t * 100, 100)), (n = gi(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function gi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    _i(e) && (e = `100%`);
    let t = vi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))),
      t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function _i(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function vi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function yi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function bi(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = U_[t];
  if ((n && (t = n), t === `transparent`))
    return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = G_.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = G_.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = G_.hsl.exec(t))
        ? {
            h: parseInt(r[1] ?? ``),
            s: ii(r[2] ?? ``),
            l: ii(r[3] ?? ``),
            a: 1,
            format: `hsl`,
          }
        : (r = G_.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: ii(r[2] ?? ``),
              l: ii(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = G_.hsv.exec(t))
            ? {
                h: parseInt(r[1] ?? ``),
                s: ii(r[2] ?? ``),
                v: ii(r[3] ?? ``),
                a: 1,
                format: `hsv`,
              }
            : (r = G_.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: ii(r[2] ?? ``),
                  v: ii(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = G_.hex8.exec(t))
                ? {
                    r: xi(r[1] ?? ``),
                    g: xi(r[2] ?? ``),
                    b: xi(r[3] ?? ``),
                    a: Si(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = G_.hex6.exec(t))
                  ? {
                      r: xi(r[1] ?? ``),
                      g: xi(r[2] ?? ``),
                      b: xi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = G_.hex4.exec(t))
                    ? {
                        r: xi(`${r[1]}${r[1]}`),
                        g: xi(`${r[2]}${r[2]}`),
                        b: xi(`${r[3]}${r[3]}`),
                        a: Si(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = G_.hex3.exec(t))
                      ? {
                          r: xi(`${r[1]}${r[1]}`),
                          g: xi(`${r[2]}${r[2]}`),
                          b: xi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function xi(e) {
  return parseInt(e, 16);
}
function Si(e) {
  return xi(e) / 255;
}
function Ci(e) {
  let t = K_.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return {
    r: parseFloat(n),
    g: parseFloat(r),
    b: parseFloat(i),
    a: a ? parseFloat(a) : 1,
  };
}
function wi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045
    ? e / 12.92
    : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ti({ r: e, g: t, b: n, a: r }) {
  return { r: wi(e), g: wi(t), b: wi(n), a: r };
}
function Ei(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308
    ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055)
    : e * 12.92;
}
function Di({ r: e, g: t, b: n, a: r }) {
  return { r: Ei(e), g: Ei(t), b: Ei(n), a: r };
}
function Oi({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function ki(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Ai({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ki(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function ji(e) {
  return X_(Y_(e));
}
function Mi(e) {
  return J_(q_(e));
}
function Ni(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ii({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Pi(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) &&
            e.hasOwnProperty(`g`) &&
            e.hasOwnProperty(`b`)
              ? Ii(e)
              : Li(e)),
    i
  );
}
function Pi(e) {
  let t = bi(e);
  if (t) return t.format === `hsl` ? Li(t) : t.format === `hsv` ? Fi(t) : Ii(t);
}
function Fi(e) {
  let t = hi(e.h, e.s, e.v);
  return {
    ...di(t.r, t.g, t.b),
    ...t,
    format: `rgb`,
    a: e.a === void 0 ? 1 : Ri(e.a),
  };
}
function Ii(e) {
  let t = li(e.r, e.g, e.b);
  return {
    ...di(t.r, t.g, t.b),
    ...t,
    format: `rgb`,
    a: e.a === void 0 ? 1 : Ri(e.a),
  };
}
function Li(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = ri(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = ri(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = ai(e.s)),
    (r = ri(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = ai(e.l)),
    (i = pi(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Ri(e) {
  return (
    (e = parseFloat(e)),
    e < 0 && (e = 0),
    (Number.isNaN(e) || e > 1) && (e = 1),
    e
  );
}
function zi({ children: e }) {
  if (t(uv).top) return w(_, { children: e });
  let n = l({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = l({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = l(new Set()).current,
    a = l({
      getLayoutId: s(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (
          !a &&
          !i.has(c) &&
          (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c)
        )
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0),
              (n.current.byLayoutId[c] = c),
              (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            V(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return (
                (r.current[o][e] = u),
                (r.current.byLastId[c] = u),
                i.add(u),
                u
              );
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return (
            (r.current[o][e] = t),
            (r.current.byLastId[n] = t),
            i.add(t),
            t
          );
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = Bi(
            p,
            (n.current.count[o][p] ?? -1) + 1,
            i,
          );
        if (
          ((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)
        ) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 &&
                (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: s(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: {
            ...n.current.byPossibleId,
            ...r.current.byPossibleId,
          },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return w(uv.Provider, { value: a, children: e });
}
function Bi(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Vi({ enabled: e = !0, ...n }) {
  let r = t(uv),
    i = S(() => ({ ...r, enabled: e }), [e]);
  return w(uv.Provider, { ...n, value: i });
}
function Hi(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ui(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Wi(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return v(`div`, {
    style: fv,
    children: [
      w(`div`, { className: `text`, style: mv, children: r }),
      i && w(`div`, { className: `text`, style: hv, children: i }),
    ],
  });
}
function Wi(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function U(e) {
  return Number.isFinite(e);
}
function Gi(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Ki(e) {
  return typeof e != `string` && typeof e != `number`;
}
function qi(e) {
  return e != null && typeof e != `boolean` && !Gi(e);
}
function Ji(e) {
  return e * (Math.PI / 180);
}
function Yi(e) {
  return Qe(e) ? !1 : e === 2 || e === 5;
}
function Xi(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Zi(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Qi(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Qi(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      H(e, `unknown constraint key`);
  }
}
function $i(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Zi(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Zi(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function ea(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Zi(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Zi(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function ta(e, t, n, r, i) {
  let a = ea(U(e) ? e : bv, n, r, i),
    o = $i(U(t) ? t : xv, n, r, i);
  return (
    U(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (U(n.left) && U(n.right)
        ? (o = a / n.aspectRatio)
        : (U(n.top) && U(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function na(e, t) {
  return !U(e) || !U(t) ? null : e + t;
}
function ra(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function ia(e) {
  return !e._constraints || ra(e) ? !1 : e._constraints.enabled;
}
function aa(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    U(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    U(n) && U(r) ? { width: n, height: r } : null
  );
}
function oa(e) {
  let t = aa(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return U(n) && U(r) ? { x: n, y: r, ...t } : null;
}
function sa(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!ia(e) || r) return oa(e);
  let i = ca(e),
    a = la(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return yv.toRect(i, o, null, n, null);
}
function ca(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: a,
      _constraints: o,
      size: s,
    } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = vv.quickfix({
      left: U(t),
      right: U(n),
      top: U(r),
      bottom: U(i),
      widthType: Xi(c),
      heightType: Xi(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`)
      ? ((h = 3), (p = e))
      : c === `auto`
        ? (h = 2)
        : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) &&
      ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) &&
      ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function la(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ua() {
  return f.useContext(Sv).parentSize;
}
function da(e) {
  return typeof e == `object`;
}
function fa(e) {
  return da(e) ? e.width : e;
}
function pa(e) {
  return da(e) ? e.height : e;
}
function ma(e, t) {
  return w(Cv, { parentSize: t, children: e });
}
function ha(e) {
  return sa(e, ua(), !0);
}
function ga({ width: e, height: t }) {
  return (
    e === `auto` || e === `min-content` || t === `auto` || t === `min-content`
  );
}
function _a() {
  return d === void 0 ? void 0 : d;
}
function va() {
  let e = _a();
  return e ? Tv.test(e.platform) : !1;
}
function ya() {
  let e = _a();
  return e
    ? Ev.test(e.platform)
      ? !0
      : Dv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function ba() {
  return va() || ya();
}
function xa() {
  let e = _a();
  return e ? Ov.test(e.userAgent) : !1;
}
function Sa() {
  let e = _a();
  return e ? kv.test(e.userAgent) && Av.test(e.vendor) && !xa() : !1;
}
function Ca() {
  let e = _a();
  return e ? jv.test(e.userAgent) && Mv.test(e.vendor) : !1;
}
function wa() {
  let e = _a();
  return e ? Nv.test(e.userAgent) : !1;
}
function Ta() {
  return typeof document == `object`;
}
function Ea() {
  let e = _a();
  return e ? Pv.test(e.userAgent) : !1;
}
function Da() {
  return !1;
}
function Oa() {
  let e = _a();
  return e && Fv.test(e.userAgent)
    ? `tablet`
    : e && Iv.test(e.userAgent)
      ? `phone`
      : `desktop`;
}
function ka() {
  return Oa() === `desktop`;
}
function Aa(e) {
  return ba() ? e.metaKey : e.ctrlKey;
}
function ja(e, t, n = Rv) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!zv) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(
            `not injecting CSS: the document is missing a <head> element`,
          );
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) zv = e.sheet;
        else {
          console.warn(
            `not injecting CSS: injected <style> element does not have a sheet`,
            e,
          );
          return;
        }
      }
      t = zv;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ma() {
  if (Kv !== void 0) return Kv;
  let e = document.createElement(`div`);
  (Object.assign(e.style, {
    position: `absolute`,
    display: `flex`,
    flexDirection: `column`,
    rowGap: `1px`,
  }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e));
  let t = e.scrollHeight === 1;
  return (e.parentNode && e.parentNode.removeChild(e), (Kv = t), t);
}
function Na() {
  Jv || ((Jv = !0), !Ma() && document.body.classList.add(qv));
}
function Pa(e) {
  return typeof e == `number`
    ? e
    : e.startsWith(`--`)
      ? Z.variable(e)
      : e === ``
        ? `""`
        : e;
}
function Fa(e) {
  return e !== ay && e !== oy;
}
function Ia(e) {
  for (let t in e) if (Fa(t) && e?.[t] === !0) return !0;
  return !1;
}
function La(e, t, n, r, i) {
  let a = f.useRef(null),
    o = f.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t],
    ),
    s = f.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !Ia(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n],
    ),
    c = f.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (Ia(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t],
    );
  return f.useMemo(
    () => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }),
    [o, s, c, i],
  );
}
function Ra(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function za(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Ba() {
  return J.current() === J.preview ? ib : rb;
}
function Va(e) {
  return Uv(e, Ba, `framer-lib-combinedCSSRules`);
}
function Ha(e) {
  return B(e) || qe(e);
}
function Ua(e) {
  return !!e && ab in e && e[ab] === !0;
}
function Wa(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Je(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Qe(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = B(e.defaultValue) ? e.defaultValue : {};
        return (B(e.controls) && Ga(t, e.controls), t);
      }
      case `array`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Ga(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Qe(i) || Ua(r)) continue;
    let a = Wa(r);
    Qe(a) || (e[n] = a);
  }
}
function Ka(e) {
  if (B(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function qa(e, t) {
  Ha(e) && Ga(Ka(e), t);
}
function Ja(e, t) {
  (Object.assign(e, { propertyControls: t }), qa(e, t));
}
function Ya(e) {
  return e.propertyControls;
}
function Xa() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function Za() {
  let [e] = i(() => Xa());
  return e;
}
function Qa(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function $a(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of gb) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function eo(e, t) {
  try {
    let n = new URL(e);
    return (
      t
        ? n.searchParams.set(`scale-down-to`, `${t}`)
        : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function to(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < _b) continue;
    let n = eo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${eo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function no(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of hb) {
    let n = eo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function ro(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``))
    return { src: n, srcSet: void 0 };
  if (e) {
    let r = no(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return {
      src: i?.src,
      srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `),
    };
  } else return { src: n, srcSet: to(n, t, $a(t.pixelWidth, t.pixelHeight)) };
}
function io() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: at(pb.imagePlaceholderSvg),
  };
}
function ao(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function oo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function so(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...mb,
    objectPosition: oo(e.positionX, e.positionY),
    objectFit: ao(e.fit),
  };
}
function co(e) {
  let t = f.useRef(e ? `auto` : `async`),
    n = s((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = s(
      (e) => {
        n(e.currentTarget);
      },
      [n],
    ),
    i = s(
      (e) => {
        e?.complete && n(e);
      },
      [n],
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function lo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = pb.useImageSource(e, t, n),
    s = so(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = co(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : ro(e.nodeFixedSize, e, o);
  return w(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function uo({ image: e, containerSize: t, nodeId: n }) {
  let r = f.useRef(null),
    i = pb.useImageElement(e, t, n),
    a = so(e);
  return (
    f.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    w(`div`, { ref: r, style: { display: `contents`, ...mb } })
  );
}
function fo({ nodeId: e, image: t, containerSize: n }) {
  let r = f.useRef(null),
    i = pb.useImageSource(t, n, e);
  return (
    f.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = so(t);
      pb.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    w(`div`, { ref: r, style: { display: `contents`, ...mb } })
  );
}
function po({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = Ye(t.backgroundSize) ? t.backgroundSize : 1,
        n = {
          width: Math.round(e * t.pixelWidth),
          height: Math.round(e * t.pixelHeight),
        },
        o = ei(e * (t.pixelWidth / 2)),
        s = pb.useImageSource(t, n);
      ((r = {
        ...vb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: oo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? pb.canRenderOptimizedCanvasImage(pb.useImageSource(t))
            ? w(fo, { image: t, ...n })
            : w(uo, { image: t, ...n })
          : w(lo, {
              image: t,
              avoidAsyncDecoding: J.current() === J.export,
              ...n,
            });
  let o = a ? vb : (r ?? { ...vb, ...io() });
  return i
    ? w(P.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : w(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function mo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0),
        (s = r.bottom || 0),
        (c = r.left || 0),
        (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function ho(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...mb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), w(P.div, { style: n }))
    : (mo(e, n, !1),
      w(P.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function go(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function _o(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !bb.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : z_.get(t, null)), bb.isImageObject(r)))
    return go(r, e);
}
function vo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth)
      return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function yo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? P[e] : P.div;
}
function bo(e, t) {
  ((e[`data-framer-layout-hint-center-x`] =
    t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] =
      t === !0 || t === `y` ? !0 : void 0));
}
function xo(e) {
  let t = {};
  return (!e || !xb || J.current() !== J.canvas || bo(t, e), t);
}
function So(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Co(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = f.Children.map(t, (e) =>
        f.isValidElement(e) ? f.cloneElement(e, { _forwardedOverrides: n }) : e,
      )),
    { props: e, children: t }
  );
}
function wo(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function To(e, { specificLayoutId: n, postfix: r } = {}) {
  let {
      name: i,
      layoutIdKey: a,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: c,
    } = e,
    { getLayoutId: l, enabled: u } = t(uv);
  return S(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function Eo() {
  let [e, t] = f.useState(0);
  return f.useCallback(() => t((e) => e + 1), []);
}
function Do(e) {
  let t = Eo();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        Tb?.observeElementWithCallback(e.current, t),
        () => {
          Tb?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Oo(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Eb)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ko)
    .map(Ao);
}
function ko(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Ao(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== `contents`
  )
    return e;
  let t = [...e.children].find(ko);
  return t ? Ao(t) : e;
}
function jo(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(Cb),
    u = J.current() === J.canvas;
  Sb(() => {
    !u ||
      l ||
      c ||
      (n.current &&
        a &&
        o &&
        s &&
        pb.queueMeasureRequest(So(a), n.current, r(n.current)));
  });
}
function Mo(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && pb.queueMeasureRequest(So(t.id), t, Oo(t));
}
function No(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  kb && t && (e.translateZ = Db);
}
function Po(e) {
  ((e.willChange = `transform`), Fo(e, !0));
}
function Fo(e, t) {
  let n = J.current() === J.canvas;
  if (!kb || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t
    ? r.includes(Ob) || (e.transform = r + Ob)
    : (e.transform = r.replace(Ob, ``));
}
function Io(e, t, n, r = !0) {
  if (!e) return;
  let i = ob(e.style),
    a = n || i[t],
    o = () => {
      Lo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Lo(e) {
  return z(e) || Ye(e) || $e(e);
}
function Ro(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function zo(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Ro(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Bo(e, t) {
  let n = [e, t];
  return Nb.test(e) ? e : zo(1e3, Pb, n, () => Mb.multiplyAlpha(e, t));
}
function Vo(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Bo(e.value, t) }))
  );
}
function Ho(e, t) {
  let n = 0;
  return (
    Vo(e, t).forEach((e) => {
      n ^= jb(e.value) ^ e.position;
    }),
    n
  );
}
function Uo(e) {
  return e && Fb.every((t) => t in e);
}
function Wo(e) {
  return e && Ib.every((t) => t in e);
}
function Go({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || $_(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = z_.get(e, null)),
      typeof e == `string` || $_(e)
        ? (n.background = e)
        : Rb.isLinearGradient(e)
          ? (n.background = Rb.toCSS(e))
          : Bb.isRadialGradient(e)
            ? (n.background = Bb.toCSS(e))
            : q.isColorObject(e) &&
              (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function W(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Ko(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function qo(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Jo(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    xe(n)
      ? (t.cornerShape = Ae(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    W(e, `size`, t),
    W(e, `width`, t),
    W(e, `height`, t),
    W(e, `minWidth`, t),
    W(e, `minHeight`, t),
    W(e, `top`, t),
    W(e, `right`, t),
    W(e, `bottom`, t),
    W(e, `left`, t),
    W(e, `position`, t),
    W(e, `overflow`, t),
    W(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && W(e, `border`, t),
    W(e, `borderRadius`, t),
    W(e, `radius`, t, `borderRadius`),
    W(e, `color`, t),
    W(e, `shadow`, t, `boxShadow`),
    W(e, `x`, t),
    W(e, `y`, t),
    W(e, `z`, t),
    W(e, `rotate`, t),
    W(e, `rotateX`, t),
    W(e, `rotateY`, t),
    W(e, `rotateZ`, t),
    W(e, `scale`, t),
    W(e, `scaleX`, t),
    W(e, `scaleY`, t),
    W(e, `skew`, t),
    W(e, `skewX`, t),
    W(e, `skewY`, t),
    W(e, `originX`, t),
    W(e, `originY`, t),
    W(e, `originZ`, t),
    Go(e, t),
    t
  );
}
function Yo(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof ob(e)[t] == `function` &&
        t.startsWith(`on`) &&
        !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Xo(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Hb.has(t)) return `pointer`;
}
function Zo(e) {
  return Qo(e) ? !0 : e.style ? !!Qo(e.style) : !1;
}
function Qo(e) {
  return Ub in e && (e[Ub] === `scroll` || e[Ub] === `auto`);
}
function $o(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = F(e.minWidth),
    h = F(e.minHeight),
    g = F(e.maxWidth),
    _ = F(e.maxHeight);
  return {
    top: F(n),
    left: F(t),
    bottom: F(r),
    right: F(i),
    width: F(a),
    height: F(o),
    size: F(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function es(e) {
  let n = t(Cb),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = $o(e),
    c = ha(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Yo(e) && !e.__fromCanvasComponent && !Zo(e),
    d = e.style ? !(`pointerEvents` in e.style) : !0;
  u && d && (l.pointerEvents = `none`);
  let p = f.Children.count(e.children) > 0 &&
      f.Children.toArray(e.children).every(
        (e) => typeof e == `string` || typeof e == `number`,
      ) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = Jo(e);
  (o === void 0 &&
    !a &&
    (Ko(m) || (l.width = Wb.width), qo(m) || (l.height = Wb.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let h = {};
  (ia(s) &&
    c &&
    !ga(e) &&
    (h = {
      left: c.x,
      top: c.y,
      width: c.width,
      height: c.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, p, i, m, h, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Ab.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = Xa();
  return (
    e.positionSticky
      ? (!_ || pb.isOnPageCanvas || n) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = pb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, c]
  );
}
function ts(e) {
  let t = {};
  for (let n in e)
    (We(n) || cb(n)) && !Gb.has(n)
      ? (t[n] = ob(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof ob(e)[n] != `boolean` &&
          !e.transition &&
          (t.transition = ob(e)[n]));
  return t;
}
function ns(e) {
  return `data-framer-name` in e;
}
function rs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function is(e) {
  return w(P.div, { layoutId: Jb, style: Zb, children: e.children });
}
function as(e, t) {
  qe(e) ? e(t) : os(e) && (e.current = t);
}
function os(e) {
  return B(e) && `current` in e;
}
function ss() {
  let e = Hi(() => new Set()),
    t = Hi(() => new Map());
  return Hi(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function cs(e) {
  let t = l(null),
    n = ss();
  return Hi(() => (os(e) ? n(e) : qe(e) ? n(t, e) : n(t)));
}
function ls(e, t, n) {
  let r = l(),
    i = l();
  (pr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}],
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1),
      e.unobserve(r.current),
      e.observe(t),
      (r.current = t)));
}
function us(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Qb({ root: r?.current, rootMargin: a, threshold: o })),
      e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function ds(e, n, r) {
  let i = Hi(() => `${r.rootMargin}`),
    a = t($b),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  ls(
    e,
    (e) => {
      if (o && e !== null) return us(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l],
  );
}
function fs(e, t, n) {
  let r = f.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: a,
      threshold: o,
      rootMargin: s = `0px 0px 0px 0px`,
    } = n;
  ex(
    e,
    f.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = ms(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t],
    ),
    { threshold: tx, rootMargin: s, enabled: i ?? !0 },
  );
}
function ps(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight);
}
function ms(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r,
) {
  return e.height === 0 ? n : n && ps(t, e) >= r;
}
function hs() {
  return new Map();
}
function gs() {
  return Hi(hs);
}
function _s(e, n = []) {
  let { register: r, deregister: i } = t(ox);
  c(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function vs(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function ys(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (U(t.originX) && (r.originX = t.originX),
      U(t.originY) && (r.originY = t.originY),
      U(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (U(n.originX) && (r.originX = n.originX),
      U(n.originY) && (r.originY = n.originY),
      U(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function bs(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function xs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return fx.PushLeft;
    case `left`:
      return fx.PushRight;
    case `bottom`:
      return fx.PushUp;
    case `top`:
      return fx.PushDown;
  }
}
function Ss(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return fx.OverlayLeft;
    case `left`:
      return fx.OverlayRight;
    case `bottom`:
      return fx.OverlayUp;
    case `top`:
      return fx.OverlayDown;
  }
}
function Cs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return fx.FlipLeft;
    case `left`:
      return fx.FlipRight;
    case `bottom`:
      return fx.FlipUp;
    case `top`:
      return fx.FlipDown;
  }
}
function ws(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Es(e, t.transition, t.component);
    case `removeOverlay`:
      return Ds(e);
    case `add`:
      return Os(e, t.key, t.transition, t.component);
    case `remove`:
      return js(e);
    case `update`:
      return Ts(e, t.key, t.component);
    case `back`:
      return ks(e);
    case `forward`:
      return As(e);
    default:
      return;
  }
}
function Ts(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Es(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Ds(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function Os(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Is(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Ps(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Ms(e, t, c),
    p = Fs(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function ks(e) {
  let t = { ...e.containers },
    n = js(e);
  if (n) return ((n.containers = t), n);
}
function As(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Os(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function js(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (V(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Ns(e, r, n),
    u = Fs(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Ms(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    ((r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Ns(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] =
          u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1),
        (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Ps(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Fs(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Ls(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Is(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Ls(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Rs(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Rs(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Rs(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Rs(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Rs(e, t, n) {
  let r = {},
    i = {};
  return (
    mx.forEach((e) => {
      ((r[e] = lx[e]), (i[e] = { ...n, from: lx[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${ob(lx)[a]}%` : ob(lx)[a];
        ((ob(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function zs(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Bs({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Vs({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : vx;
}
function Hs({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function Us(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Ws(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function Gs(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Ks(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function qs(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function Js(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return vx;
}
function Ys(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Xs(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Zs(e) {
  return f.Children.map(e.component, (t) => {
    if (!qi(t) || !Ki(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? B(t.props.style) : !0;
    return (
      i &&
        (`width` in t.props && (n.width = `100%`),
        o && (n.style.width = `100%`)),
      a &&
        (`height` in t.props && (n.height = `100%`),
        o && (n.style.height = `100%`)),
      f.cloneElement(t, n)
    );
  });
}
function Qs(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function $s(e) {
  let t = re(),
    n = ie();
  return w(_x, {
    ...e,
    resetProjection: t,
    skipLayoutAnimation: n,
    children: e.children,
  });
}
function ec(e) {
  return Tx in e;
}
function tc(e, t) {
  if (!ec(e)) return;
  let n = z_.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function nc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`,
    );
    t.push(...n);
  }
  return t;
}
function rc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`)
    .join(`, `);
  n && (t.textShadow = n);
}
function ic(e, t) {
  let n = [];
  (U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...nc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function ac(e, t) {
  U(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function oc(e, t) {
  (ac(e, t), ic(e, t));
}
function sc(e, t) {
  let n,
    r = (...r) => {
      (K.clearTimeout(n), (n = K.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      K.clearTimeout(n);
    }),
    r
  );
}
function cc(...e) {
  return e.filter(Boolean).join(` `);
}
function lc(e) {
  if (e.startsWith(Ax)) return e.substr(jx);
}
function uc(e, t, n) {
  let i = r.map(e, (e) => (T(e) ? C(e, t) : e));
  return n ? i : w(_, { children: i });
}
function dc(e) {
  let t = Hi(() => fc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function fc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = pc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = pc(t)));
    },
    i = !1;
  function a(a, o) {
    if (i)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`,
      );
    return (
      (i = !0),
      r.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      r.map(a, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = qe(o) ? o(e.props) : o;
          return C(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return w(_, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((i = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function pc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (as(n, e), as(t, e));
  };
}
function mc(e, t, n, r, i, a, o, s) {
  let c = f.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !f.isValidElement(l))
    return (
      console.warn(
        `PropertyOverrides: expected exactly one React element for a child`,
        t,
      ),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !vc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = _c([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = _c([i, ...d], a);
  p.length && u.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = e.join(`+`),
      d = w(
        Nx.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c,
      ),
      f = gc(e, a, r);
    (f.length
      ? (V(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = w(
          `div`,
          {
            className: `${Px} ${f.join(` `)}`,
            suppressHydrationWarning: !0,
            children: d,
          },
          c,
        )))
      : V(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    V(
      !s || m.length === 1,
      `Must render exactly one branch when activeVariantId is given`,
    ),
    s ? m : [...m, w(`div`, { className: Fx }, `property-overrides-separator`)]
  );
}
function hc(e) {
  return e.split(`-`)[2];
}
function gc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${hc(a)}`);
  }
  return r;
}
function _c(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function vc(e, t) {
  for (let n of Object.keys(t)) if (!Ct(e[n], t[n], !0)) return !0;
  return !1;
}
function yc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function bc(e) {
  return f.forwardRef(({ optimized: t, ...n }, r) => {
    let i = f.useContext(Mx),
      a = f.useContext(Nx)?.variants,
      o = n[Wx];
    o && !Ta() && Hx.setAll(o, a, t ? n : null, i);
    let s = Kx(n);
    return w(e, { ref: r, ...n, ...s });
  });
}
function xc(e) {
  return z(e) || Array.isArray(e);
}
function Sc(e) {
  return e in Yx;
}
function Cc(e, t) {
  let n = Hi(() => ({ values: Jx(t ? e : void 0) }));
  return (
    f.useEffect(() => {
      if (!t)
        for (let e of qx) {
          let t = Yx[e];
          Qe(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function wc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: a,
    loopPauseOffscreen: o,
  },
  u,
) {
  let d = me(),
    f = Hi(Jx),
    p = l(!1),
    m = $x(),
    h = l(null),
    g = s(async () => {
      if (!a) return;
      let e = n || void 0,
        t = p.current && r === `mirror`,
        i = t ? Yx : a,
        o = t ? a : Yx;
      return (
        (p.current = !p.current),
        (h.current = Promise.all(
          qx.map((t) => {
            if (!(d && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? Yx[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    a = i[t] ?? o[t];
                  typeof a == `number` && Te(f[t], a, r);
                })
              );
          }),
        )),
        h.current
      );
    }, [a, r, n, d]),
    [_, v] = i(!1),
    y = l(!1),
    b = s(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = s(() => {
      y.current || ((y.current = !0), j(() => v(!0)), b());
    }, [b]),
    C = s((e = !0) => {
      (qx.forEach((e) => {
        f[e].stop();
      }),
        qx.forEach((e) => {
          f[e].set(Yx[e]);
        }),
        (p.current = !1),
        e && ((y.current = !1), j(() => v(!1))));
    }, []),
    w = e && a,
    T = s(() => {
      document.hidden ? C(!1) : y.current && ((y.current = !1), x());
    }, [x, C]);
  (c(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    c(() => {
      (w && o) || (w ? x() : C());
    }, [x, C, o, w]),
    c(() => () => C(), [C]));
  let E = l(!1),
    D = s(async () => {
      h.current && (await h.current, !E.current && C());
    }, [C]);
  ex(
    u,
    s(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D],
    ),
    { enabled: w && o },
  );
  let O = _ || !o;
  return S(() => ({ values: f, style: w && O ? Xx : Zx }), [w, O]);
}
function Tc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Ec(e, n, r) {
  let {
      speed: i = 100,
      offset: a = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    c = f.useRef(null),
    l = me(),
    u = f.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : Tc(e, c.current, i, a, o)),
      [i, a, o],
    ),
    { scrollY: d } = I(),
    p = ne(d, u),
    m = fe(o && c.current === null ? `hidden` : r),
    h = fe(0),
    g = t($b);
  return (
    ls(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = us(g, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            De.update(() => {
              (p.set(u(d.get())), o && m.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s],
    ),
    At(() => {
      s && p.set(0);
    }),
    { values: { y: l || !s ? h : p }, style: s ? { ...Xx, visibility: m } : Zx }
  );
}
function Dc(e) {
  return typeof e == `object` && !!e;
}
function Oc(e) {
  if (Dc(e)) return e?.transition;
}
function kc(e, t, n, r, i, a) {
  let o = Oc(e);
  return Promise.all(
    qx.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Dc(e) ? (e?.[s] ?? Yx[s]) : Yx[s];
          if ((xe(u) && (u = u.get()), !Ye(u))) return c();
          let d = oe.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, De);
            e && (f = e);
          }
          a
            ? l.set(u)
            : Te(l, u, {
                ...o,
                velocity: 0,
                startTime: f,
                onComplete: () => c(),
              });
        }),
    ),
  );
}
function Ac(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: a,
  },
  o,
  s,
  c,
  u,
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = Ke(),
    g = l({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Hi(() => {
      let e = d ?? c;
      if (!B(e)) return { values: Jx() };
      let t = {};
      for (let n in e) {
        let r = B(e) ? e[n] : void 0;
        Ye(r) && (t[n] = r);
      }
      return { values: Jx(t) };
    });
  ls(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = oe.get(e);
      if (n)
        for (let e in (Object.assign(g.current, { hasMounted: !0 }),
        _.values)) {
          if (!Sc(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, Ye(t) ? t : Yx[e]);
        }
    },
    [f],
  );
  let v = me();
  ls(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            kc(f, _, v, o, u).then(() =>
              Object.assign(g.current, { running: !1 }),
            ))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              kc(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Ct(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      kc(f, _, v, o, u, !n).then(() =>
        Object.assign(g.current, { running: !1 }),
      ));
  });
  let y = s && f;
  return S(() => ({ values: _.values, style: y ? Xx : Zx }), [y]);
}
function jc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;)
    ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Mc(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = jc(o.current, document.documentElement) - nS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(
        Math.max(c, 0),
        u === void 0 ? d : Math.min(d, Math.max(u - 1, 0)),
      ),
      n?.(a));
  }
  return i;
}
function Nc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Pc(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = kt();
  f.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return te((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0)
        return;
      let u = Nc(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < rS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Fc(e, t, n) {
  let r = Mc(e, t),
    i = [...aS],
    a = r[0];
  if (!Ye(a)) return oS;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!Ye(e)) return oS;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Ic(e) {
  return {
    x: e?.x ?? Yx.x,
    y: e?.y ?? Yx.y,
    scale: e?.scale ?? Yx.scale,
    opacity: e?.opacity ?? Yx.opacity,
    transformPerspective: e?.transformPerspective ?? Yx.transformPerspective,
    rotate: e?.rotate ?? Yx.rotate,
    rotateX: e?.rotateX ?? Yx.rotateX,
    rotateY: e?.rotateY ?? Yx.rotateY,
    skewX: e?.skewX ?? Yx.skewX,
    skewY: e?.skewY ?? Yx.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Lc({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: a,
  ...o
}) {
  return f.useMemo(
    () => ({
      initial: r ?? Ic({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Ic({ opacity: t }),
      exit: i ?? Ic(),
    }),
    [a, o, r, i, e, t, n],
  );
}
function Rc(e, t) {
  let n = me(),
    r = Lc(e),
    i = e.styleAppearEffectEnabled,
    a = Cc(i ? r.initial : r.animate, i),
    o = f.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = kt(),
    c = f.useRef(),
    l = f.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = oe.get(t.current);
      c.current = Promise.all(
        qx.map((e) => {
          s && a.values[e].set(r.initial[e] ?? Yx[e]);
          let t = o[e] ?? Yx[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (Ye(t) && a.values[e].set(t), r());
              else {
                let n = {
                  restDelta: e === `scale` ? 0.001 : void 0,
                  ...l,
                  onComplete: () => r(),
                };
                typeof t == `number` && Te(a.values[e], t, n);
              }
            })
          );
        }),
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  fs(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled:
        !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    },
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    f.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return te((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Fc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit,
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = ee(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = ob(r)[u];
        d && l(d);
      });
    }, [s, d]),
    Pc(e.scrollDirection, (e) => void l(e ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    At(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of qx) a.values[e].set(r.initial?.[e] ?? Yx[e]);
    }),
    S(() => ({ values: a.values, style: i ? Xx : Zx }), [i])
  );
}
function zc(e, t) {
  let n = f.useRef({});
  f.useEffect(() => {
    if (t !== void 0)
      for (let r of Wh(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Ie({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), De.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Bc(e, t) {
  let n = lS();
  return {
    inputRange: Mc(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of qx) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Vc(e) {
  let t = lS();
  for (let { target: n } of e) for (let e of qx) t[e]?.push(n[e]);
  return t;
}
function Hc(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: r,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o,
) {
  let s = me(),
    c = Cc(cS(r, s), t),
    l = !t || !r,
    u = e === `onScrollTarget`,
    d = kt();
  return (
    n(() => {
      if (!(l || !u))
        return te((e, { y: t }) => {
          if (!r[0] || (r[0].ref && !r[0].ref.current)) return;
          let { inputRange: n, effectKeyOutputRange: i } = Bc(
            r,
            a * t.containerLength,
          );
          if (n.length !== 0)
            for (let e of qx)
              (s && e !== `opacity`) ||
                (n.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(ee(t.current, n, i[e])));
        });
    }, [s, u, a, r, l]),
    ls(
      o,
      (t) => {
        if (l || u || t === null) return;
        let n = Vc(r);
        return te(
          (e, { y: t }) => {
            for (let e of qx)
              (s && e !== `opacity`) ||
                (uS.length === n[e].length &&
                  n[e][0] !== void 0 &&
                  c.values[e].set(ee(t.progress, uS, n[e])));
          },
          e === `onInView`
            ? { target: t ?? void 0, offset: [`start end`, `end end`] }
            : void 0,
        );
      },
      [d, s, e, u, r, l],
    ),
    zc(c.values, i),
    At(() => {
      if (l) return;
      let e = cS(r, s);
      for (let t of qx) c.values[t].set(e?.[t] ?? Yx[t]);
    }),
    f.useMemo(() => ({ values: c.values, style: t ? Xx : Zx }), [t])
  );
}
function Uc(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Wc(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (
      n === `__targetOpacity` ||
      n === `__perspectiveFX` ||
      n === `__smartComponentFX`
    )
      continue;
    let r = lc(n);
    if (r) {
      for (let i of fS)
        if (dS[i]?.has(r)) {
          t[i][r] = ob(e)[n];
          break;
        }
    } else t.forwardedProps[n] = ob(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Uc(
      `parallaxTransformEnabled`,
      `speed`,
      t.parallax,
    )),
    (t.styleAppear.styleAppearEffectEnabled = Uc(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear,
    )),
    t
  );
}
function Gc(e) {
  return B(e) && hS in e;
}
function Kc(e, t) {
  if (!e || !B(e)) return t;
  for (let n in e) {
    let r = e[n];
    !xe(r) || !Sc(n) || (Ye(r.get()) && t[n].push(r));
  }
}
function qc(e) {
  return z(e) || Array.isArray(e);
}
function Jc() {
  return f.useContext(_S);
}
function Yc(e) {
  return (
    e instanceof Error &&
    (e.message.includes(
      `A component suspended while responding to synchronous input.`,
    ) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Xc() {
  if (M === void 0 || bS)
    return w(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: {
        __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->`,
      },
    });
  throw SS;
}
function Zc({ children: e }) {
  return t(wS) ? w(_, { children: e }) : w(b, { fallback: CS, children: e });
}
function Qc() {
  return w(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: {
      __html: `<!-- Code boundary fallback rendered -->`,
    },
  });
}
function $c(e, t) {
  if (!Ph || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  $t(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function el(...e) {
  console.error(...e);
}
function tl() {
  return J.current() !== J.canvas;
}
function nl({ getErrorMessage: e, fallback: t, children: n }) {
  return tl()
    ? w(rl, {
        fallback: t,
        children: w(ES, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function rl({ children: e, fallback: t = TS }) {
  return M === void 0
    ? w(b, { fallback: t, children: e })
    : w(Zc, { children: e });
}
function il() {
  return f.useContext(OS);
}
function al() {
  let e = il();
  return f.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function ol({ children: e, scopeId: t, nodeId: n }) {
  let r = il(),
    i = f.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r],
    );
  return w(OS.Provider, { value: i, children: e });
}
function sl(e, t) {
  return `${kS}${e}:${t}`;
}
function cl(e, t) {
  return ul(`component`, e, t);
}
function ll(e, t) {
  return ul(`override`, e, t);
}
function ul(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${sl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function dl(e, t, n, r, i, a) {
  let o = pl(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function fl(e, t, n, r) {
  return pl(e, t, n, r);
}
function pl(e, t, n, r) {
  return !!(Qe(n) || (n === 1 && r && e === t));
}
function ml(e, t, n, r, i, a) {
  let o = il();
  return Qe(t) || Qe(n)
    ? w(DS, { children: e })
    : (dl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = w(nl, {
          getErrorMessage: cl.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = w(ol, { scopeId: t, nodeId: n, children: e })),
      e);
}
function hl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function gl(e) {
  return !(!e || e.placement || e.alignment);
}
function _l(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      H(e);
  }
}
function vl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${_l(t)}, -100%`;
    case `right`:
      return `0%, ${_l(t)}`;
    case `bottom`:
      return `${_l(t)}, 0%`;
    case `left`:
      return `-100%, ${_l(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function yl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(RS)) {
      let e = n.getAttribute(RS);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function bl(e) {
  let { registerCursors: r } = t(MS),
    i = Hi(() => e),
    a = g();
  n(() => r(i, a), [r, a]);
}
function xl(e) {
  return !!(e && typeof e == `object` && BS in e);
}
function Sl(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Cl() {
  return J.current() === J.canvas;
}
function wl(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Tl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function El(e, t, n, r) {
  if (z(e)) {
    let i = wl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Lr(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Dl(e) {
  return z(e) && e.startsWith(`data:${qS}`);
}
function Ol(e) {
  if (Dl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(qS.length),
        r = t.searchParams,
        i = r.has(US) ? r.get(US) : void 0,
        a,
        o = r.get(WS),
        s = r.get(GS),
        c = r.get(KS);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        {
          target: n === `none` ? null : n,
          element: i === `none` ? void 0 : i,
          collectionItem: a,
        }
      );
    } catch {
      return;
    }
}
function kl(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Ol(e);
    if (!n || !n.target) return !1;
    ((r = n.target),
      (i = n.element ?? void 0),
      (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Al(e) {
  if (!Dl(e)) return e;
  let t = Ol(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: jl(i) };
}
function jl(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Ml(e, n, i, a, o, c) {
  let l = t(JS),
    u = al(),
    d = S(
      () => ({ scopeId: n, nodeId: i, furthestExternalComponent: u }),
      [n, i, u],
    ),
    f = Et(),
    p = Ot(),
    { locales: m } = hr(),
    h = S(() => {
      let e = xl(a) ? a : Al(a);
      if (e) return El(e, f, p, m);
    }, [p, a, f, m]),
    g = !!(!Cl() && l?.nodeId && d.nodeId),
    _ = s(
      (e) => {
        if (o.href) {
          if ((e.preventDefault(), e.stopPropagation(), Aa(e))) {
            Fl(o.href, ``, `_blank`);
            return;
          }
          h ? o.navigate?.() : Fl(o.href, o.rel, o.target);
        }
      },
      [o, h],
    ),
    v = s(
      (e) => {
        o.href &&
          (e.preventDefault(), e.stopPropagation(), Fl(o.href, ``, `_blank`));
      },
      [o],
    ),
    b = s(
      (e) => {
        o.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? o.navigate?.() : Fl(o.href, o.rel, o.target));
      },
      [o, h],
    );
  ls(
    c,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g],
  );
  let x = e;
  return (
    g &&
      (r.forEach(e, (e) => {
        Pl(e) &&
          (V(
            Nl(l),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
          ),
          V(
            Nl(d),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
          ),
          HS.collectNestedLink(l, d));
      }),
      (x = r.map(e, (e) => {
        if (!Pl(e)) return e;
        let t = Il(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: v,
            onKeyDown: b,
            as: r.as && Il(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return y(t, { ...i, ref: a }, n);
      }))),
    w(JS.Provider, { value: d, children: x })
  );
}
function Nl(e) {
  return !Qe(e?.nodeId);
}
function Pl(e) {
  return T(e) && (Il(e.type) !== e.type || Il(e.props.as) !== e.props.as);
}
function Fl(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Il(e) {
  return e === `a` ? `span` : Ge(e) && ce(e) === `a` ? P.span : e;
}
function Ll(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Ll(e.parentElement, t)
      : null;
}
function Rl({ children: e }) {
  return w(Zc, { children: e });
}
function zl(e) {
  return O(function (t, n) {
    return w(Rl, { children: w(e, { ...t, ref: n }) });
  });
}
function Bl(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Hl(e, t, o, s, a, c, l, i, r);
}
function Vl(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && wl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      V(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      V(o !== void 0, `A href must have a defined pathname.`);
      let {
          routeId: s,
          pathVariables: c,
          localeId: l,
        } = Lr(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function Hl(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ir(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Ul() {
  let e = t($S),
    n = Ot()?.pathVariables;
  return e || n;
}
function Wl(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(QS))
      if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Gl() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > nC,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? rC : iC));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: tC }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = sC.get(n);
    if (!a?.size || oC.has(n)) return;
    (++s, oC.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), aC.delete(t));
    for (let e of a) (o.unobserve(e), aC.delete(e));
    (a.clear(), sC.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = aC.get(e);
      if (!n || oC.has(n.id)) {
        (o.unobserve(e), aC.delete(e));
        continue;
      }
      let r = n.id,
        a = sC.get(r),
        l = sC.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : sC.set(r, new Set([e])), setTimeout(c, eC, n, e));
      } else (a && a.delete(e), l <= 1 && sC.delete(r));
    }
  }
  return (e, t, n) => {
    if (!oC.has(n))
      return (
        aC.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (aC.delete(e), o.unobserve(e));
        }
      );
  };
}
function Kl(e, t) {
  let n = wl(e),
    r = {
      href: e === `` || Tl(e, n) ? e : `https://${e}`,
      target: ql(t?.openInNewTab, n),
      rel: n ? void 0 : Jl(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams &&
      ((r.href = En(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function ql(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Jl(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function Yl(e, t) {
  console.warn(
    st(
      `Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`,
    ),
  );
}
function Xl(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Yl(
        void 0,
        `Couldn't find collection utils for collection id: "${e.collectionId}"`,
      );
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return it(i) ? i.catch(Yl) : i;
  } catch (e) {
    Yl(e);
  }
}
async function Zl(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      V(a, `unresolvedSlug should be defined`);
      let o = Xl(a, r, n),
        s = it(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Ql(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Xl(o, r, n);
      it(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function $l() {
  let e = dn();
  return s((t, n, r, i = []) => Ql(t, n, r, e, i), [e]);
}
function eu({
  nodeId: e,
  clickTrackingId: t,
  router: n,
  href: r,
  activeLocale: i,
}) {
  let a = dn();
  return s(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = xl(r) ? r : Al(r);
      if (!xl(c))
        return $t(
          `published_site_click`,
          {
            ...s,
            href: o ? tu(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`,
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (it(n) ? await n : n) ?? null;
        }
      }
      return $t(
        `published_site_click`,
        {
          ...s,
          href: o ? tu(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`,
      );
    },
    [e, t, n, r, i, a],
  );
}
function tu(e) {
  try {
    let t = new URL(e, K.document.baseURI);
    return t.origin === K.location.origin
      ? t.pathname + t.search + t.hash
      : t.href;
  } catch {
    return e;
  }
}
function nu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function ru(e, t, n) {
  return async (r) => {
    let i = Aa(r),
      a = Ll(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await gn({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function iu(e, t, n, r, i, a, o, s) {
  if (!n) return Kl(e, r);
  let c = Vl(t, e, s, o);
  if (!c) return Kl(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Kl(e, r);
  let m = ir(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Fh,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = ql(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => nu(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: ru(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Wl(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function au(e, t, n) {
  let r = ou(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (qe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (qe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function ou(e, t) {
  let n = B(e) ? e : void 0,
    r = n && !Ze(n),
    i = t && !Ze(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function su(e, t, n) {
  if (!(t && ya())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: cu } : { ...i, onTap: r }) : e;
}
function cu(e) {
  let t = Ll(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function lu(e, t, n, r, i, a) {
  let o = xl(e) ? e : Al(e);
  if (!xl(o)) return z(e) ? Kl(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (it(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = ir(m, {
      currentRoutePath: s?.path,
      currentRoutePathLocalized: s?.pathLocalized,
      currentPathVariables: t.currentPathVariables,
      hash: l,
      pathVariables: g,
      hashVariables: _,
      relative: !1,
      preserveQueryParams: t.preserveQueryParams,
      onlyHash: r,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: i?.id,
    });
  return r ? v : (i?.slug ? `/${i.slug}` : ``) + v;
}
function uu() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t +=
          `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
            Math.floor(Math.random() * 62),
          );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function du() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(
        new Blob([`(`, uu(), `)()`], { type: `application/javascript` }),
      ),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success
          ? e({ secret: t.data.secret, hash: t.data.hash })
          : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({
        salt: uC,
        difficulty: dC,
        tokenLength: fC,
        maxTime: pC,
      }));
  });
}
function fu(e) {
  return Array.from(e.keys()).map(encodeURIComponent).join(`,`);
}
function pu(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [
        `utm_source`,
        `utm_medium`,
        `utm_campaign`,
        `utm_term`,
        `utm_content`,
        `gclid`,
      ].forEach((n) => {
        typeof t[n] == `string` && e.append(n, t[n]);
      });
    }
  } catch {}
}
function mu(e) {
  let t = f.useContext(kC),
    n = f.useMemo(
      () =>
        e
          ? gC.map((e) => ({
              inputRef: f.createRef(),
              originalName: e,
              methodsUsed: { setAttribute: !1, valueProperty: !1 },
            }))
          : [],
      [e],
    );
  return {
    states: n,
    convertHoneypotFieldsForSubmission: f.useCallback(() => {
      n.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${hC}_${e.originalName}`);
      });
    }, [n]),
    replaceHoneypotWithMetadata: f.useCallback(
      (r) => {
        if (!e) return;
        let i = n.length,
          a = 0,
          o = [];
        (n.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let n = t.name,
              i = t.value;
            if (i) {
              a++;
              let t = {
                [vC.name]: e.originalName,
                [vC.value]: i,
                [vC.setAttribute]: e.methodsUsed.setAttribute,
                [vC.valueProperty]: e.methodsUsed.valueProperty,
                [vC.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [vC.inputChangeTimeSinceModuleLoad]:
                  e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [vC.wasFilledBeforeHydration]:
                  e.methodsUsed.wasFilledBeforeHydration,
              };
              o.push(JSON.stringify(t));
            }
            (r.delete(n), (t.name = e.originalName));
          }
        }),
          r.append(`${hC}_${yC.fieldData}`, `[${o.join(`,`)}]`),
          r.append(`${hC}_${yC.fieldCount}`, i.toString()),
          r.append(`${hC}_${yC.fieldFilledCount}`, a.toString()),
          r.append(`${hC}_${yC.hpVersion}`, mC),
          r.append(`${hC}_${yC.siteId}`, t || ``),
          r.append(`${hC}_${yC.timeToSubmissionSinceModuleLoad}`, bC()));
      },
      [e, n, t],
    ),
  };
}
function hu({ states: e }) {
  return w(_, {
    children: e.map((e) => w(xC, { inputStateRef: e }, `hp_${e.originalName}`)),
  });
}
function gu({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          _u(e, t, n);
        })
      : _u(e.pageviewEventData.current, t, n));
}
function _u(e, t, n) {
  return $t(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`,
  );
}
function vu(e) {
  return `${SC}?render=${encodeURIComponent(e)}&badge=bottomleft`;
}
function yu(e) {
  let t = CC.get(e);
  if (t) return t;
  let n = vu(e);
  if (document.querySelector(`script[src="${n}"]`)) {
    let t = Promise.resolve();
    return (CC.set(e, t), t);
  }
  let r = new Promise((t, r) => {
    let i = document.createElement(`script`);
    ((i.src = n),
      (i.onload = () => t()),
      (i.onerror = () => {
        (CC.delete(e), i.remove(), r(Error(`Failed to load captcha script`)));
      }),
      document.head.appendChild(i));
  });
  return (CC.set(e, r), r);
}
function bu(e, t) {
  return new Promise((t, n) => {
    let { grecaptcha: r } = M;
    if (!r) {
      n(Error(`Captcha script not available`));
      return;
    }
    r.ready(() => {
      r.execute(e).then(t, n);
    });
  });
}
function xu({ provider: e, siteKey: t }) {
  return (
    f.useEffect(() => {
      e === `recaptcha_v3` &&
        t &&
        Lh(() => {
          yu(t).catch(() => {});
        });
    }, [e, t]),
    {
      executeChallenge: f.useCallback(
        async (n) => {
          if (!(e !== `recaptcha_v3` || !t)) return (await yu(t), bu(t, n));
        },
        [e, t],
      ),
    }
  );
}
function Su({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? OC : DC;
    case `incomplete`:
      return e === `error` ? OC : EC;
    case `submit`:
      return wC;
    case `success`:
      return TC;
    case `error`:
      return OC;
    default:
      H(t);
  }
}
function Cu({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function wu(e) {
  e.preventDefault();
}
function Tu(e, t) {
  let n = Tl(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t &&
      t.current &&
      (t.current.appendChild(r), r.click(), r.remove()));
}
function Eu(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Eu(t)) return !0;
  return !1;
}
async function Du(e, t, n, r) {
  let i = await du();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = await r(`submit`),
    o = {
      "Framer-Site-Id": n,
      "Framer-POW": i.secret,
      "Framer-Form-Fields": fu(t),
    };
  a && (o[`Framer-Captcha-Response`] = a);
  let s = await fetch(e, { body: t, method: `POST`, headers: o });
  if (s.ok) return s;
  {
    let e = await s.json(),
      t = `Failed to submit form`;
    throw Ou(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Ou(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    B(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function ku({ EditorBar: e, fast: n = !1 }) {
  let r = Zh(),
    i = t(kC),
    a = A(Rh, n ? NC : PC, Bh),
    o = S(() => {
      let e = {},
        t;
      for (t in r)
        r.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = r[t]);
      return e;
    }, [r]);
  return !e || !i || !a
    ? null
    : w(MC, {
        children: w(b, { children: w(e, { framerSiteId: i, features: o }) }),
      });
}
function Au({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = l(),
    a = l(),
    o = l(t),
    s = l(null);
  ((o.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), a.current?.(e));
    }, [e]));
  let [u] = i(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current
          ? Mu(
              o.current,
              o.current.currentRouteId,
              o.current.currentPathVariables,
            )
          : ``,
      resolveRoute: (e) =>
        o.current ? Mu(o.current, e.webPageId, e.pathVariables) : ``,
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && ju(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return w(FC.Provider, { value: u, children: n });
}
async function ju(e, t) {
  if (!en(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    $t(
      `published_site_trigger_invoke`,
      { ...n, ...t, trackingId: t.trackingId || null },
      `lazy`,
    );
}
function Mu(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Tn(r.path, n) : r.path;
}
function Nu({ children: e, loadSnippetsModule: t }) {
  return w(KC.Provider, { value: t, children: e });
}
function Pu() {
  return f.useContext(KC);
}
function Fu(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Iu(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (V(
        t.parentNode,
        `Can't use 'beforebegin' with a referenceNode at the top level`,
      ),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (V(
        t.parentNode,
        `Can't use 'afterend' with a referenceNode at the top level`,
      ),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      H(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Lu(a.createContextualFragment(e), r, i));
}
async function Lu(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Ru(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Lu(r, e, null)));
  }
}
function Ru(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return zu(r, t, n);
}
function zu(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Bu(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = HC), (n = UC));
      break;
    case `bodyEnd`:
      ((t = WC), (n = GC));
      break;
    case `headStart`:
      ((t = RC), (n = zC));
      break;
    case `headEnd`:
      ((t = BC), (n = VC));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Vu(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Fu(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Hu(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Bu(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Vu(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Uu(t, o), s)) {
      await Iu(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Fu(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Gu(e.id, n, r, i);
    d
      ? await Iu(u, d, `afterend`)
      : await Iu(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Uu(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Wu(n) && n.remove(), (n = e));
  }
}
function Wu(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Gu(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Vu(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Ku() {
  let e = Pu();
  return s(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(IC),
        o = a && a.dataset[LC] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Hu(t, n, r);
      }
    },
    [e],
  );
}
function qu(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Ju() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((qC = e.timeZone), (JC = e.locale));
}
function Yu() {
  let [e, t] = f.useState(0);
  return [e, f.useCallback(() => t((e) => e + 1), [])];
}
function Xu(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    nd(r, t);
    return;
  }
  n || M.scrollTo(0, 0);
}
function Zu(e) {
  let t = l([]);
  return (
    n(() => {
      t.current?.length && (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    s((e) => {
      t.current.push(e);
    }, [])
  );
}
function Qu(e) {
  if (!e) return Nh;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function $u() {
  let e = cr(),
    t = l(void 0);
  return s(
    async (n, r, i, a = !0) => {
      let o = i !== void 0;
      t.current?.abort();
      let s = a ? new AbortController() : void 0;
      t.current = s;
      let c = s?.signal,
        l = Nt(c);
      if ((r.promise.finally(l), !o))
        return ((t.current = void 0), n(c), r.promise);
      n(c);
      let u;
      if (
        (e(
          new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Nh),
          i,
          s,
        ),
        await r.promise,
        c?.aborted)
      )
        return;
      let d = M.navigation?.transition;
      u();
      try {
        await d?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      c?.aborted || qg();
    },
    [e],
  );
}
function ed({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: r,
  initialRoute: i,
  notFoundPage: a,
  collectionUtils: o,
  routes: d,
  initialLocaleId: f,
  initialCollectionItemId: p,
  locales: m = Jh,
  preserveQueryParams: h = !1,
  LayoutTemplate: g,
  EditorBar: _,
  siteCanonicalURL: y,
  adaptLayoutToTextDirection: b,
}) {
  (kr(),
    tr({
      disabled: t,
      routeId: i,
      initialPathVariables: r,
      initialLocaleId: f,
    }));
  let x = qn(),
    [C, T] = Yu(),
    E = Zu(C),
    D = $u(),
    O = Xn(`framer-route-change`),
    { synchronousNavigationOnDesktop: k } = Zh(),
    A = S(() => (!k || !ka() ? j : (e) => e()), [k]),
    N = Ku(),
    ee = l(!0),
    P = l(),
    te = l(i),
    F = l(r),
    ne = l(f),
    re = ne.current,
    ie = S(
      () => m.find(({ id: e }) => (re ? e === re : e === Qh)) ?? null,
      [re, m],
    ),
    ae = ie?.textDirection ?? `ltr`,
    oe = b ? ae : `ltr`;
  n(() => {
    b && document.documentElement.setAttribute(`dir`, ae);
  }, [ae, b]);
  let se = or(),
    ce = S(
      () => ({
        activeLocale: ie,
        locales: m,
        setLocale: async (e) => {
          let t = O({ localized: !0 });
          await gn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          z(e) ? (n = e) : B(e) && (n = e.id);
          let r = m.find(({ id: e }) => e === Qh),
            i = m.find(({ id: e }) => e === n);
          if (!i) return;
          let a = te.current,
            o = d[a];
          if (o)
            try {
              let e = await se({
                currentLocale: ie,
                nextLocale: i,
                route: o,
                routeId: a,
                defaultLocale: r,
                pathVariables: F.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let n = Qn(M.history.state)
                  ? M.history.state.paginationInfo
                  : void 0,
                s = e.path;
              ((ee.current = !1),
                (F.current = e.pathVariables),
                (ne.current = i.id),
                D(
                  () => {
                    x(a, a, () => A(T));
                  },
                  t,
                  async (t = !1) => {
                    if (s)
                      return er(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        s,
                        t,
                      );
                  },
                  !1,
                ));
            } catch {}
        },
      }),
      [ie, T, m, h, d, D, x, O, A, se],
    ),
    le = s(
      (e, t, n, r, i, a, o, s = !1, c) => {
        ee.current = !1;
        let l = te.current;
        if (
          ((te.current = e),
          (F.current = i),
          (ne.current = t),
          (P.current = r),
          E(() => {
            Xu(n, s, a);
          }),
          a)
        ) {
          A(T);
          return;
        }
        D(
          (t) => {
            x(l, e, () => A(T), t);
          },
          o,
          c,
          !0,
        );
      },
      [T, E, D, x, A],
    );
  nr(te, le);
  let ue = s(
      async (e, n, r, i, a) => {
        let o = d[e],
          s = lt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = Qu(a);
        if (
          (gn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await gn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Fg)) {
            let t = n[1];
            if (t === void 0)
              throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Mt(o, n),
          p = F.current,
          m = ne.current;
        if (
          qu(
            { routeId: te.current, pathVariables: p },
            { routeId: e, pathVariables: r },
          )
        ) {
          l.ignore?.();
          let a = d[e];
          (M.history.state?.hash !== n &&
            !t &&
            a &&
            (u(),
            await Zn(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: p,
              pathVariables: r,
              hash: n,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            Xu(f, i, !1));
          return;
        }
        if (!o) return;
        let g = d[te.current];
        le(
          e,
          m,
          f,
          An(y) +
            ir(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              relative: !1,
            }),
          r,
          !1,
          l,
          i,
          t
            ? void 0
            : async (t = !1) => (
                u(),
                Zn(
                  e,
                  o,
                  {
                    currentRoutePath: g?.path,
                    currentPathVariables: p,
                    currentRoutePathLocalized: g?.pathLocalized,
                    hash: n,
                    pathVariables: r,
                    localeId: m,
                    preserveQueryParams: h,
                    siteCanonicalURL: y,
                  },
                  t,
                )
              ),
        );
      },
      [d, le, t, h, y, O],
    ),
    de = wt(d),
    fe = te.current,
    pe = P.current,
    I = F.current,
    me = d[fe],
    he = me?.path,
    ge = YC(me, fe, pe, I, ie, p),
    L = ee.current;
  c(() => {
    N(fe, I ?? {}, ce.activeLocale, L);
  }, [N, fe, I, ce, L]);
  let _e = S(
    () => ({
      navigate: ue,
      getRoute: de,
      currentRouteId: fe,
      currentPathVariables: I,
      routes: d,
      collectionUtils: o,
      preserveQueryParams: h,
      pageviewEventData: ge,
      siteCanonicalURL: y,
      isInitialNavigation: L,
    }),
    [ue, de, fe, I, d, o, h, y, ge, L],
  );
  if (!me) throw Error(`Router cannot find route for ${fe}`);
  let ve = !ie || !me.includedLocales || me.includedLocales.includes(ie.id),
    ye = he && I ? Tn(he, I) : he,
    be = String(re) + ye,
    xe = Hi(() => ({ ...e, display: `contents` }));
  return w(Tt, {
    api: _e,
    children: w(n_.Provider, {
      value: ce,
      children: w(r_.Provider, {
        value: oe,
        children: w(IS, {
          children: w(_r, {
            children: v(Au, {
              currentRoutePath: ye,
              routerAPI: _e,
              children: [
                _ && w(ku, { EditorBar: _, fast: !0 }),
                w(xS, {
                  children: v(Zc, {
                    children: [
                      v(P_, {
                        notFoundPage: a,
                        defaultPageStyle: e,
                        forceUpdateKey: C,
                        children: [
                          w(M_.Start, {}),
                          w(td, {
                            LayoutTemplate: g,
                            webPageId: me?.abTestingVariantId ?? fe,
                            style: e,
                            children: (t) =>
                              w(
                                u,
                                {
                                  children: ve
                                    ? Pr(me.page, t ? xe : e)
                                    : a && Pr(a, e),
                                },
                                be,
                              ),
                          }),
                        ],
                      }),
                      _ && w(ku, { EditorBar: _ }),
                      w(Tr, {}),
                      w(M_.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function td({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? w(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function nd(e, t) {
  let n = t
    ? { behavior: `smooth`, block: `start`, inline: `nearest` }
    : void 0;
  e.scrollIntoView(n);
}
function rd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function id(e) {
  return typeof e == `object` && !!e;
}
function ad(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!id(r)) return;
    r = r[e];
  }
  return r;
}
function od(e) {
  return `${e.credentials}:${e.url}`;
}
function sd(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function cd(e, t) {
  switch (e) {
    case `string`:
      return z(t) || Ye(t);
    case `color`:
      return z(t);
    case `boolean`:
      return Je(t);
    case `number`:
      return Ye(t) || sd(t);
    case `link`:
    case `image`:
      return z(t) && Tl(t, !1);
    default:
      return !1;
  }
}
function ld(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = ad(e.data, t.resultKeyPath);
  if (Qe(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!cd(t.resultOutputType, n))
    throw Error(
      `Resolved value '${n}' is not valid for type '${t.resultOutputType}'`,
    );
  return n;
}
function ud(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, ZC);
  return Date.now() >= e + n;
}
function dd(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    includeDataObserver: d = !1,
    localeId: p,
    locales: m,
    preserveQueryParams: h,
    EditorBar: g,
    defaultPageStyle: _,
    disableHistory: v,
    LayoutTemplate: y,
    siteCanonicalURL: b,
    adaptLayoutToTextDirection: x,
    loadSnippetsModule: S,
    initialCollectionItemId: C,
  } = e;
  return (
    f.useEffect(() => {
      n || sv.start();
    }, []),
    n
      ? w(dr, {
          value: r ?? `preview`,
          children: w(Oe, {
            reducedMotion: u ? `user` : `never`,
            children: w(un, {
              collectionUtils: c,
              children: w(lw, {
                children: w(kC.Provider, {
                  value: a,
                  children: w(Nu, {
                    loadSnippetsModule: S,
                    children: w(ed, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: C,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: _ ?? {
                        minHeight: `100vh`,
                        width: `auto`,
                      },
                      preserveQueryParams: h,
                      EditorBar: g,
                      disableHistory: v,
                      LayoutTemplate: y,
                      siteCanonicalURL: b,
                      adaptLayoutToTextDirection: x,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : w(d ? kx : f.Fragment, {
          children: w(Dt, {
            routes: s,
            children: w(yx, {
              children: f.isValidElement(t)
                ? t
                : f.createElement(t, { key: i }),
            }),
          }),
        })
  );
}
function fd(e) {
  return {
    trace(...t) {
      return pb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return pb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return pb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return pb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return pb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return pb.getLogger(e) !== void 0;
    },
  };
}
function pd(e) {
  let t = e.next();
  return (V(t.done, `Generator must not yield`), t.value);
}
async function md(e, t = e.next()) {
  for (; !t.done;) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function hd(e) {
  let t = e.next();
  return t.done ? t.value : md(e, t);
}
function* gd(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (nt(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            md(n, e).then((e) => {
              t[i] = e;
            }),
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* _d(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (nt(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            md(n, e).then((e) => {
              t[i] = e;
            }),
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function vd(e) {
  return xd(e) || wd(e);
}
function yd(e) {
  return Xe(e) && e.every(B);
}
function bd(e) {
  return B(e) && qe(e.read) && qe(e.preload);
}
function xd(e) {
  return yd(e) || bd(e);
}
function Sd(e) {
  return B(e) && B(e.schema);
}
function Cd(e) {
  return B(e) && B(e.collectionByLocaleId);
}
function wd(e) {
  return Sd(e) || Cd(e);
}
function Td(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = ef(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ed(e, t) {
  switch (e?.type) {
    case `array`:
      return {
        type: `array`,
        value: e.value.map((e) => dw.cast(e, t.definition)),
      };
  }
  return null;
}
function Dd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Od(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function kd(e) {
  return Od(e)?.value ?? !1;
}
function Ad(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function jd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Md(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Nd(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return tt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Pd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Fd(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Id(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ld(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Rd(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function zd(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:`
          ? { type: `link`, value: e.value }
          : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Bd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Vd(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Hd(e) {
  return Vd(e)?.value ?? null;
}
function Ud(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = ef(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Wd(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = dw.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Gd(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Kd(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function qd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function Jd(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Yd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function Xd(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Zd(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Qd(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function $d(e) {
  return Qd(e)?.value ?? null;
}
function ef(e, t, n) {
  if ($e(e) || $e(t)) return (V(e === t), 0);
  switch (e.type) {
    case `array`:
      return (V(e.type === t.type), Td(e, t, n));
    case `boolean`:
      return (V(e.type === t.type), Dd(e, t));
    case `color`:
      return (V(e.type === t.type), Ad(e, t));
    case `date`:
      return (V(e.type === t.type), Md(e, t));
    case `enum`:
      return (V(e.type === t.type), Pd(e, t));
    case `file`:
      return (V(e.type === t.type), Id(e, t));
    case `link`:
      return (V(e.type === t.type), Rd(e, t));
    case `number`:
      return (V(e.type === t.type), Bd(e, t));
    case `object`:
      return (V(e.type === t.type), Ud(e, t, n));
    case `responsiveimage`:
      return (V(e.type === t.type), Gd(e, t));
    case `richtext`:
      return (V(e.type === t.type), qd(e, t));
    case `vectorsetitem`:
      return (V(e.type === t.type), Yd(e, t));
    case `string`:
      return (V(e.type === t.type), Zd(e, t, n));
    default:
      H(e);
  }
}
async function tf(e, t) {
  return bd(e) ? (await e.preload(t), e.read(t)) : e;
}
function nf(e) {
  return e.includes(gw);
}
function rf(e) {
  if (!wd(e) || !e.id) return;
  let t = mw.get(e.id);
  if (!t) return (mw.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function af(e) {
  let t = rf(e);
  if (t) return t;
  let n = hw.get(e);
  if (n) return n;
  let r = `${gw}${Math.random().toString(16).slice(2)}`;
  return (hw.set(e, r), r);
}
function of(e, t) {
  if (xd(e)) {
    let n = af(e) + (t?.id ?? Qh),
      r = _w.get(n);
    if (r) return r;
    let i = new pw(e, t);
    return (_w.set(n, i), i);
  }
  if (Sd(e)) return e;
  if (Cd(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function sf() {
  return 25;
}
function cf() {
  return 12500;
}
function lf(e) {
  return e;
}
function uf(e) {
  return e;
}
function df(e) {
  return B(e) && qe(e.getHash);
}
function G(e, ...t) {
  return uf(
    `${e}(${t.map((e) => (V(!(e instanceof Ew), `Pass CollectionMetadata.id instead`), V(!(e instanceof kw), `Pass FieldMetadata.id instead`), V(!(e instanceof Dw), `Pass IndexMetadata.id instead`), V(!(e instanceof Sw), `Pass RelationalNode.group.id instead`), V(!(e instanceof yw), `Pass Group.id instead`), df(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`,
  );
}
function ff(e, t) {
  return { collectionId: af(e), pointer: t };
}
function pf(e) {
  return B(e) && z(e.collectionId);
}
function mf(e, t) {
  return { collectionId: af(e), pointer: t };
}
function hf(e) {
  return B(e) && z(e.collectionId);
}
function gf(e, t) {
  let n = new Map();
  function r(e) {
    if (B(e))
      if (e.type === `Collection` && vd(e.data)) {
        let r = of(e.data, t),
          i = af(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Xe(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function _f(e) {
  return e;
}
function vf(e) {
  return e;
}
function yf(e) {
  return e;
}
function bf(e) {
  return Array(e).fill({ type: `All` });
}
function xf(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Sf(e) {
  let t = new Set();
  if (!e) return t;
  xf(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
  for (let n of e.value)
    n &&
      (xf(
        n.type === `string`,
        `ScalarIntersection expects an array of strings, got an array with:`,
        n.type,
      ),
      t.add(n.value));
  return t;
}
function Cf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function wf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Tf(e) {
  return `${e.functionName}(${e.arguments.map((e) => Af(e)).join(`, `)})`;
}
function Ef(e) {
  let t = `CASE`;
  e.value && (t += ` ${Af(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Af(n.when)} THEN ${Af(n.then)}`;
  return (e.else && (t += ` ELSE ${Af(e.else)}`), (t += ` END`), t);
}
function Df(e) {
  let t = Af(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Of(e) {
  let t = Af(e.left),
    n = Af(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function kf(e) {
  return `CAST(${Af(e.value)} as ${e.dataType})`;
}
function Af(e) {
  switch (e.type) {
    case `Identifier`:
      return Cf(e);
    case `LiteralValue`:
      return wf(e);
    case `FunctionCall`:
      return Tf(e);
    case `Case`:
      return Ef(e);
    case `UnaryOperation`:
      return Df(e);
    case `BinaryOperation`:
      return Of(e);
    case `TypeCast`:
      return kf(e);
    case `Select`:
      return `${Ff(e)}`;
    default:
      H(e);
  }
}
function jf(e) {
  return Sd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Mf(e) {
  let t = `${Nf(e.left)} LEFT JOIN ${Nf(e.right)}`;
  return (e.constraint && (t += ` ON ${Af(e.constraint)}`), t);
}
function Nf(e) {
  switch (e.type) {
    case `Collection`:
      return jf(e);
    case `LeftJoin`:
      return Mf(e);
    default:
      H(e);
  }
}
function Pf(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Ff(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Af(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Nf(e.from)}`),
    e.where && (t += ` WHERE ${Af(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Af(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Af(e.limit)}`),
    e.offset && (t += ` OFFSET ${Af(e.offset)}`),
    Pf(t)
  );
}
function If(e) {
  return B(e) && e.type === `Collection`;
}
function Lf(e, t) {
  return If(t) && vd(t.data) ? af(t.data) : t;
}
function Rf(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Lf) + n;
}
function zf(e) {
  let { activeLocale: t } = hr();
  return BT.get(e, t).use();
}
function Bf(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Qe(e) || B(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({
        type: `BinaryOperation`,
        operator: `and`,
        left: e,
        right: t,
      }));
}
function Vf(e) {
  let t = l(e);
  return (
    k(() => {
      t.current = e;
    }, [e]),
    mr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Hf(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Uf() {
  return new Set();
}
function Wf(e) {
  let t = Hi(Uf),
    n = Hi(Uf);
  return (
    _s(() => () => Hf(n, t)),
    c(() => () => Hf(n, t), []),
    c(() => {
      Hf(n, t);
    }, [e]),
    l({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Gf(e, t, n) {
  return f.useCallback(
    (r) =>
      !n || !e
        ? {}
        : t
          ? Object.assign({}, n[e]?.[r], n[t]?.[r])
          : n[e]?.[r] || {},
    [e, t, n],
  );
}
function Kf(e) {
  for (let [t, n] of Object.entries(e)) if (K.matchMedia(n).matches) return t;
}
function qf(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e)
    r && K.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Jf(e, n, r = !0) {
  let i = t(gx),
    a = Za(),
    o = l(!a && Ta() ? (Kf(n) ?? e) : e),
    u = l(r && i ? e : o.current),
    d = Eo(),
    f = se(),
    p = s(
      (e) => {
        if (e !== o.current || e !== u.current) {
          let t = function () {
            ((o.current = u.current = e),
              j(() => {
                d();
              }));
          };
          a
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, d, a],
    );
  return (
    Sb(() => {
      a && p(e);
    }, [e, a, p]),
    Sb(() => {
      !r || i !== !0 || p(o.current);
    }, []),
    c(() => {
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = K.matchMedia(r),
          i = (e) => {
            e.matches && p(t);
          };
        (Yf(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Xf(e, t));
    }, [n, p]),
    [o.current, u.current]
  );
}
function Yf(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Xf(e, t) {
  e.removeEventListener
    ? e.removeEventListener(`change`, t)
    : e.removeListener(t);
}
function Zf(e) {
  setTimeout(e, 1);
}
function Qf(e) {
  let t = new Set(),
    n = qf(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        ($f(n.previousSibling) && t.add(n.previousSibling),
          n.parentNode?.removeChild(n));
  (Ih ? K.requestIdleCallback : Zf)(() => {
    document.querySelector(VT)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    ($f(e.previousSibling) && t.add(e.previousSibling),
      e.parentNode?.removeChild(e));
  for (let e of t)
    ep(e.nextSibling) &&
      (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function $f(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function ep(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function tp(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function np(e, t) {
  if (Xa()) return;
  let n = f.useRef(!0),
    r = f.useRef(t);
  (_s((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = tp(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    f.useEffect(() => {
      if (n.current) {
        let t = tp(r.current, e);
        t && t();
      }
    }, [e]));
}
function rp(e) {
  return B(e) && HT in e && e.page !== void 0;
}
function ip(e, t) {
  return `${e}-${t}`;
}
function ap(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (V(r !== void 0, `nextVariant should be defined`), r);
}
function op(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function sp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function cp(e, t) {
  return t[e] || `framer-v-${e}`;
}
function lp(e, t, n) {
  return e && n.has(e) ? e : t;
}
function up() {
  let e = l(),
    t = l(),
    n = s(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n],
    ),
    s(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n],
    )
  );
}
function dp() {
  let e = l(),
    n = l(!1),
    r = l(),
    i = t($b);
  return (
    c(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      [],
    ),
    s(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = us(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i],
    )
  );
}
function fp(e) {
  let t = up(),
    n = dp();
  return s(
    (r, i = !1) => {
      if (Fh) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e],
  );
}
async function pp() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (GT = () => {
        (e(), (t = void 0));
      }));
  });
}
function mp(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (WT = pp()));
}
function hp() {
  (performance.mark(`click-received-listener`),
    (WT = void 0),
    GT?.(),
    (GT = void 0));
}
function gp(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, mp, !0),
      document.__proto__.addEventListener.call(document, `click`, hp, !0));
  }, [e]);
}
function _p({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let u = Eo(),
    d = Cl(),
    f = Hi(() => new Set(i)),
    { yieldOnTap: p } = Zh();
  gp(p);
  let m = fp(c),
    h = l({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: lp(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = s((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = lp(e, a, f),
        s = sp(i?.[o], t, n, !1, r);
      return [o, s ? ip(o, s) : void 0];
    }, []),
    _ = s(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = p && h.current.isPressedHasUpdated;
        (c &&
          WT &&
          (performance.mark(`wait-for-tap-start`),
          await WT,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await gn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          j(u);
          return;
        }
        m(() => j(u), i);
      },
      [g, u, m, p],
    ),
    v = s(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let {
          baseVariant: a,
          gestureVariant: o,
          defaultVariant: s,
        } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_],
    ),
    y = s(
      (e, t = !1) => {
        let {
          defaultVariant: n,
          cycleOrder: r,
          baseVariant: i,
          gestureVariant: a,
        } = h.current;
        _(i, a, n, e === UT ? ap(r || [], i || n) : e, t, !0);
      },
      [_],
    ),
    b = s(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => j(u), !0));
    }, [u, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: C,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = h.current,
    A = Gf(h.current.baseVariant, h.current.gestureVariant, a);
  return S(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? ip(x, `loading`) : C;
    r && e.push(r);
    let i = T?.[x],
      a = {
        onMouseEnter: () => v({ isHovered: !0 }),
        onMouseLeave: () => v({ isHovered: !1 }),
      };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: op(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: cc(cp(x, o), sp(i, E, D, n, O)),
      }
    );
  }, [x, C, E, D, k, A, y, w, T, v, b, o]);
}
function vp(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!tl()) return r(e);
  let a = yp(e, r),
    o = !1;
  function s(r, s) {
    let c = il();
    if (fl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? w(Qg.Provider, {
            value: n,
            children: w(nl, {
              getErrorMessage: ll.bind(null, t, n),
              fallback: w(e, { ...r, ref: s }),
              children: w(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (el(a.error), el(ll(t, n)), $c(a.error), !0)),
          w(e, { ...r, ref: s }));
    if (a.status === `success`)
      return w(Qg.Provider, {
        value: n,
        children: w(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return f.forwardRef(s);
}
function yp(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function bp(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function xp(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${eE[e]}` : `${eE[e]} ${n}`;
}
function Sp() {
  return M === void 0 ? {} : nE || ((nE = Cp()), nE);
}
function Cp() {
  let e = M.location,
    t = M?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = M.top.location.origin), (t = M.top?.bootstrap?.services), t))
      return t;
  } catch {}
  if (n && n !== e.origin)
    throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function wp(e) {
  return e.key + e.extension;
}
function Tp(e) {
  return `${Sp().userContent}/assets/${e}`;
}
function Ep(e) {
  return Tp(wp(e));
}
function Dp(e, t) {
  return t ? `${e} ${rE}` : e;
}
function Op(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Dp(e.name, e.isVariable);
  }
}
function kp(e) {
  return !!(e && Array.isArray(e));
}
function Ap(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Mp(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function jp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Mp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Np(e) {
  return oE[Pp(e)];
}
function Pp(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Fp(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`)
      ? `italic`
      : `normal`
  );
}
function Ip(e, t) {
  return { ...Lp(e, t), ...Rp(e, t) };
}
function Lp(e, t) {
  if (t.length === 0)
    return {
      variantBold: void 0,
      variantBoldItalic: void 0,
      variantItalic: void 0,
    };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function Rp(e, t) {
  if (t.length === 0)
    return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function zp(e) {
  return !!e.variationAxes;
}
function Bp(e) {
  return Vp(e) || Hp(e);
}
function Vp(e) {
  return e.startsWith(lE);
}
function Hp(e) {
  return e.startsWith(cE);
}
function Up(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function Wp(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? rE : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Gp({
  fontFamily: e,
  fontSubFamily: t,
  variationAxes: n,
  faceDescriptors: r,
}) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Ap(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function Kp(e) {
  if (!(!e.weight || !e.style))
    return {
      weight: e.weight,
      style: e.style,
      isVariable: zp(e),
      selector: e.selector,
    };
}
function qp(e) {
  let t = e.fonts.map((e) => Kp(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = Kp(n);
    if (!e) continue;
    let r = Ip(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Jp(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function Yp(e) {
  switch (e) {
    case `google`:
      return (await import(`./chunk-08.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-Q7VOJ3QT.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Xp(e) {
  switch (e) {
    case `google`:
      return (await import(`./chunk-09.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-LJWOE5KG.mjs`)).default;
    case `framer`:
      return (await import(`./core-font-G73BNA7N.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Zp(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Qp);
}
function Qp(e) {
  return dE.includes(e);
}
function $p(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Zp(e)[0];
  return n && t[n];
}
function em(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function tm(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function nm(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = `${r}-${c}-${s}-${i}`;
  if (!DE.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: z(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), rm(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < TE) return nm(e, t, n + 1);
          throw new EE(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`,
          );
        });
    DE.set(l, d);
  }
  await DE.get(l);
}
async function rm(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!OE.has(r)) {
    let i = new CE.default(e, { style: t, weight: n }).load(null, wE);
    OE.set(r, i);
  }
  try {
    await OE.get(r);
  } catch {
    throw new EE(
      `Failed to check if font is ready (${wE}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`,
    );
  }
}
function im(e) {
  try {
    if (e === `framer`) return am(AE) ? AE : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./chunk-10.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-MHXFPDHS.mjs`)).default;
          default:
            H(e);
        }
      })();
      return am(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function am(e) {
  return B(e) && Object.values(e).every(sm);
}
function om(e) {
  return B(e) && z(e.tag);
}
function sm(e) {
  return Array.isArray(e) && e.every(om);
}
function cm(e, t, n, r = NE) {
  let [i, a] = f.useState(e),
    [o, s] = f.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      f.useCallback(
        (e) => {
          Sr(e) ||
            (t && a(r(e)),
            n &&
              f.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t],
      ),
    ]
  );
}
function lm(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function um() {
  return w(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: w(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function dm(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (
      M.addEventListener(`keyup`, n),
      () => M.removeEventListener(`keyup`, n)
    );
  }, [e, t]);
}
function fm(e, t, n, r) {
  let i = M.innerHeight - r,
    a = Math.min(M.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function pm(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new M.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function mm() {
  return (
    document.getElementById(XS) ?? document.getElementById(YS) ?? document.body
  );
}
function hm(e, t) {
  return Ye(e) ? e : (t ?? 0);
}
function gm(e) {
  return hm(e?.paddingTop, e?.padding) + hm(e?.paddingBottom, e?.padding);
}
function _m(e) {
  return hm(e?.paddingLeft, e?.padding) + hm(e?.paddingRight, e?.padding);
}
function vm(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - _m(e)}px)`,
      srcSet: ro(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function ym(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in GE)) continue;
    let n = GE[t],
      r = e[t];
    if (!(!Ye(n) || !Ye(r)) && n !== r) return !0;
  }
  return !1;
}
function bm(e) {
  let t = oe.get(e.current);
  if (!t) return !1;
  if (ym(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (ym(e.latestValues)) return !0;
  return !1;
}
function xm(e) {
  return O(function (
    { lightbox: n, lightboxClassName: r, onClick: a, ...o },
    d,
  ) {
    let f = t(ye),
      p = t(KT),
      m = !!p,
      h = l(null),
      y = d ?? h,
      b = l(),
      C = S(() => vm(n, o.background), [n, o.background]),
      [T, E] = i(!1),
      [D, O] = i(),
      k = s(() => {
        if (n) {
          if (T) {
            j(() => {
              E(!0);
            });
            return;
          }
          De.read(() => {
            if (!y.current) return;
            let e = getComputedStyle(y.current),
              t =
                y.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(y.current, `::after`)
                  : void 0,
              r = y.current.offsetWidth ?? 1,
              i = y.current.offsetHeight ?? 1,
              a = bm(y) || m ? { duration: 0 } : n.transition;
            j(() => {
              (O({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                E(!0),
                p?.stop());
            });
          });
        }
      }, [n, T, y, p?.stop, m]),
      A = D?.aspectRatio ?? 1,
      M = Vf(() => {
        if (!n || !C || !C.src) return;
        let e = b.current?.[C.src];
        if (e) return e;
        let t = fm(A, n.maxWidth, _m(n), gm(n)),
          r = pm(C, { width: t, height: t * A });
        return ((b.current = { [C.src]: r }), r);
      }),
      N = s(
        async (e) => {
          (a?.(e), !(T || !n || !C) && (await M(), k()));
        },
        [a, k, T, C, n, M],
      ),
      ee = s((e) => {
        (e?.stopPropagation(),
          j(() => {
            E(!1);
          }));
      }, []);
    (dm(T, ee),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            M();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = y.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, M),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, M));
          }
        );
      }, [M, y, n]));
    let te = g(),
      F = D?.transition ?? o.transition ?? f.transition,
      ne = D?.borderRadius,
      re = D?.imageRendering,
      ie = D?.filter,
      ae = D?.borderTop,
      oe = D?.borderRight,
      se = D?.borderBottom,
      ce = D?.borderLeft,
      le = D?.borderStyle,
      ue = D?.borderColor,
      de = !!(ae || oe || se || ce || le || ue),
      fe = de
        ? {
            "--border-top-width": ae,
            "--border-right-width": oe,
            "--border-bottom-width": se,
            "--border-left-width": ce,
            "--border-style": le,
            "--border-color": ue,
          }
        : void 0,
      pe = { [RS]: o.id },
      I = hm(n?.paddingTop, n?.padding),
      me = hm(n?.paddingBottom, n?.padding),
      he = hm(n?.paddingLeft, n?.padding),
      ge = hm(n?.paddingRight, n?.padding),
      L = D?.borderRadius
        ? { ...o.style, borderRadius: D.borderRadius }
        : o.style,
      _e = T
        ? o.layoutDependency
          ? `${o.layoutDependency}-open`
          : `open`
        : o.layoutDependency,
      ve = m && T ? void 0 : (o.layoutId ?? (n ? te : void 0));
    return v(_, {
      children: [
        w(e, {
          ...o,
          style: L,
          onClick: N,
          layoutId: ve,
          ref: y,
          layoutDependency: _e,
          transition: F,
        }),
        w(Pe, {
          onExitComplete: () => {
            j(() => {
              (O(void 0), p?.start());
            });
          },
          children:
            T &&
            n &&
            C &&
            w(
              u,
              {
                children: x(
                  v(_, {
                    children: [
                      w(P.div, {
                        ...pe,
                        className: r,
                        onClick: ee,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: F,
                        initial: KE,
                        animate: qE,
                        exit: KE,
                      }),
                      w(P.div, {
                        ...pe,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${I}px ${ge}px ${me}px ${he}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: w(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: A,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: w(P.div, {
                            layoutId: ve,
                            transition: F,
                            onClick: k,
                            className: `framer-lightbox-container`,
                            "data-border": de,
                            style: {
                              aspectRatio: A,
                              borderRadius: ne,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: re,
                              filter: ie,
                              ...fe,
                            },
                            children: w(po, {
                              image: C,
                              alt: C.alt,
                              draggable: o.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  mm(),
                ),
              },
              `backdrop`,
            ),
        }),
      ],
    });
  });
}
function Sm(e, t) {
  return XE && !t
    ? Document.parseHTMLUnsafe(e)
    : ((YE ??= new DOMParser()), YE.parseFromString(e, t ?? `text/html`));
}
function Cm(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function wm(e, t, n, r) {
  return e.replace(ZE, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Ol(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!rp(f) || !rp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Mt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Al(u);
    if (!_ || z(_)) return e;
    Wl(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(QS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = xn(m, v)), i + o + `"${Cm(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Tm(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Em(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Dm(e, t, n) {
  let r = l([]);
  Tm(r.current, e) ||
    ((r.current = e),
    ME.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || J.current() !== J.canvas || (e > 0 && Mo(n.current));
    }));
}
function Om() {
  return { current: null };
}
async function km(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Am(e) {
  return e in tD;
}
function jm(e, t) {
  let n = {};
  for (let r in e) {
    if (!Am(r)) continue;
    let i = e[r],
      a = tD[r];
    Qe(i) || Qe(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Mm(e, t = `character`, n, r, i) {
  if (r) {
    let t = Om();
    return (n.add(t), w(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return v(
          u,
          {
            children: [
              w(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(nD)?.map((e, t) => {
                  let r = Om();
                  return (
                    n.add(r),
                    w(`span`, { ref: r, style: i, children: e }, e + t)
                  );
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a,
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Om();
        return (
          n.add(o),
          v(
            u,
            {
              children: [
                w(`span`, { ref: o, style: i, children: e }),
                a ? null : ` `,
              ],
            },
            e + t + a,
          )
        );
      });
    }
    case `element`:
    default:
      return e;
  }
}
function Nm(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function Pm(e) {
  let t = [];
  return (
    Ye(e.x) && t.push(`translateX(${e.x}px)`),
    Ye(e.y) && t.push(`translateY(${e.y}px)`),
    Ye(e.scale) && t.push(`scale(${e.scale})`),
    Ye(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    Ye(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    Ye(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    Ye(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    Ye(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Fm(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Pm(n.effect),
              };
        case `line`:
        case `word`:
        case `character`:
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Pm(n.effect),
              };
      }
    default:
      H(i);
  }
}
function Im(e, t, n) {
  let r = Hi(() => new Set()),
    i = Xa(),
    a = n || !i,
    o = me(),
    s = l({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let u = e?.trigger ?? `onMount`,
    d = e?.target,
    f = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Rm(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c,
            ),
            () => c.current?.()
          );
        }
        default:
          H(t);
      }
    }
    switch (u) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Ee(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = d?.ref?.current;
        return t
          ? Ee(t, e, {
              amount: f ?? 0,
              root: document,
              margin: d?.offset ? `${d.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(u);
    }
  }, [a, r, n, t, d, f, u]);
  let p = !!e,
    m = e ? Nm(e) : void 0;
  return S(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Fm(a, n || Lm(e, t, i), s.current.effect, o);
        return {
          text: (e) => Mm(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Om();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Rm(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [a, p, r, n, m],
  );
}
function Lm(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t &&
      !n?.repeat &&
      (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Rm(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = jm(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await zm(n, u);
      if (
        e === null ||
        (Te(e, l, {
          ...r,
          restDelta: 0.001,
          delay: je(r?.delay ?? 0, { startDelay: i }),
        }).then(() => s?.()),
        !a || !c)
      )
        return;
      c.current = () => {
        Te(e, o ? { opacity: t.opacity } : t, {
          ...r,
          restDelta: 0.001,
          delay: je(r?.delay ?? 0, { startDelay: i }),
        });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await km(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (De.read(() => {
          ((e = Bm(n)),
            e.length !== 0 &&
              De.update(() => {
                let t = e.map((e, t) =>
                  Te(e, l, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + t * (r?.delay ?? 0),
                  }),
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Te(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      H(e);
  }
}
async function zm(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await km(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Bm(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r
      ? n.push(i.current)
      : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function Vm(e) {
  return e.type === u;
}
function Hm(e) {
  return e.type === `br`;
}
function Um(e, t, n, i, a = {}, o, s = Vm(e) ? -1 : 0) {
  let c = r.toArray(e.props.children);
  Qe(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!T(e) || !Hm(e)) && (l = !1), T(e)))
      return Um(e, t, n, i, a, o, s + 1);
    let r = Qe(n) ? e : n;
    return z(r) && o ? o.text(r) : r;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (z(e.type) || Ge(e.type)) {
    let n = ce(e.type) || e.type,
      r = u || n,
      f = z(r) ? t?.[r] : void 0;
    ((d.className = cc(`framer-text`, d.className, f)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let p =
        n === `h1` ||
        n === `h2` ||
        n === `h3` ||
        n === `h4` ||
        n === `h5` ||
        n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = Wm(c, a);
      d.id = e;
      let t = cc(`framer-text`, m),
        n = w(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...(d.style ?? {}), scrollMarginTop: i }), (c = [n]));
    }
  }
  return C(e, d, ...c);
}
function Wm(e, t) {
  let n = ur(e.map(Gm).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Gm(e) {
  return z(e) || Ye(e)
    ? e.toString()
    : T(e)
      ? Gm(e.props.children)
      : Array.isArray(e)
        ? e.map(Gm).join(``)
        : ``;
}
function Km(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = ti(n.x, n.y),
    i = gv(ti(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: ti.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  V(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !ti.isEqual(e, s) && !ti.isEqual(e, c));
  V(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = gv.intersection(i, gv(s, c)),
    f = gv.intersection(i, gv(l, u));
  return (
    V(d && f, `linearGradientLine: Must have a start and end point.`),
    gv(d, f)
  );
}
function qm(e, t) {
  let n = Km(e.angle),
    r = Vo(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = gv.pointAtPercentDistance(n, i),
    s = gv.pointAtPercentDistance(n, a),
    c = He([i, a], [0, 1]);
  return {
    id: `id${t}g${Rb.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: Mb.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Jm(e, t) {
  return {
    id: `id${t}g${Bb.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Vo(e).map((t) => ({
      color: t.value,
      alpha: Mb.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Ym(e) {
  if (!z(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return Ye(parseFloat(t));
}
function Xm(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Ye(n) ? n : 50;
}
function Zm(e) {
  return Ym(e) ? Xm(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Qm(e) {
  return Ym(e) ? Xm(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function $m(e, t, n, r) {
  if (
    ((e = z_.get(e, `#09F`)),
    !bb.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Zm(e.positionX) + f),
        (d = (t.height - l) * Qm(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Qm(e.positionY)))
        : ((n = g), (u = (1 - g) * Zm(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function eh(e) {
  return e.startsWith(`data:${uD}`);
}
function th(e, t) {
  if (/^\w+:/u.test(e) && !eh(e)) return e;
  t =
    typeof t == `number`
      ? t <= 512
        ? 512
        : t <= 1024
          ? 1024
          : t <= 2048
            ? 2048
            : 4096
      : void 0;
  let n = J.current() === J.export;
  return pb.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function nh(e) {
  try {
    let t = Sm(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function rh(e, t) {
  ah(e, ih(t));
}
function ih(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function ah(e, t) {
  (oh(e, t),
    Array.from(e.children).forEach((e) => {
      ah(e, t);
    }));
}
function oh(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if (
      (n === `id` && e.setAttribute(n, `${t}_${r}`),
      n === `href` || n === `xlink:href`)
    ) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function sh(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (_D[t[2]] || 1));
}
function ch(e) {
  let t = sh(e.getAttribute(`width`)),
    n = sh(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function lh(e) {
  return e.indexOf(`image`) >= 0;
}
function uh(e) {
  return e.indexOf(`var(--`) >= 0;
}
function dh(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function fh(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? K,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = gD.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && ia(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    U(s) &&
    U(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function ph(e) {
  return e > SD ? `lazy` : void 0;
}
function mh(e, t, n) {
  let r = _h(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function hh(e) {
  return e ? (e.fonts ?? Fr()) : Fr();
}
function gh(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : _h(e);
}
function _h(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    vh(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(yh) })
      : t.fonts.push(yh(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function vh(e) {
  return CD in e;
}
function yh(e) {
  let t = bh(e) || xh(e) ? e : Sh(e);
  return xh(t) ? t : Ch(t);
}
function bh(e) {
  return `source` in e;
}
function xh(e) {
  return `cssFamilyName` in e;
}
function Sh(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`/assets/fontshare.bin`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Ch(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${rE}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function wh(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Th(e) {
  return e.loader;
}
function Eh(e, t, n) {
  let r = Th(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  K,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  q,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  J,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  Y,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  X,
  Zv,
  Qv,
  $v,
  ey,
  Z,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  Q,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  $,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD = e(() => {
    (o(
      //! Credit to Astro | MIT License
      /**
       * @license Emotion v11.0.0
       * MIT License
       *
       * Copyright (c) Emotion team and other contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
    ),
      ve(),
      be(),
      p(),
      E(),
      h(),
      (Dh = ae({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, `__esModule`, { value: !0 }),
            (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308
                ? 12.92 * e
                : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon
                ? (t / e.refY) * e.kappa
                : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8
                ? (e.refY * t) / e.kappa
                : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(
                e,
                Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))),
              );
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z,
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x +
                    e.m_g1 * this.xyz_y +
                    e.m_g2 * this.xyz_z,
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x +
                    e.m_b1 * this.xyz_y +
                    e.m_b2 * this.xyz_z,
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x =
                0.41239079926595 * t +
                0.35758433938387 * n +
                0.18048078840183 * r),
                (this.xyz_y =
                  0.21263900587151 * t +
                  0.71516867876775 * n +
                  0.072192315360733 * r),
                (this.xyz_z =
                  0.019330818715591 * t +
                  0.11919477979462 * n +
                  0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z =
                  (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) /
                  (3 * n)));
            }
            luvToLch() {
              ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(
                  this.luv_u * this.luv_u + this.luv_v * this.luv_v,
                )),
                this.lch_c < 1e-8
                  ? (this.lch_h = 0)
                  : ((this.lch_h =
                      (Math.atan2(this.luv_v, this.luv_u) * 180) / Math.PI),
                    this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)));
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              (this.hsluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hsluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hsluv_l),
                    this.calculateBoundingLines(this.hsluv_l),
                    (this.lch_c =
                      (this.calcMaxChromaHsluv(this.hsluv_h) / 100) *
                      this.hsluv_s)),
                (this.lch_h = this.hsluv_h));
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999)
                ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8)
                ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100),
                  (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              (this.hpluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hpluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hpluv_l),
                    this.calculateBoundingLines(this.hpluv_l),
                    (this.lch_c =
                      (this.calcMaxChromaHpluv() / 100) * this.hpluv_p)),
                (this.lch_h = this.hpluv_h));
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999)
                ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8)
                ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100),
                  (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(),
                this.lchToLuv(),
                this.luvToXyz(),
                this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(),
                this.lchToLuv(),
                this.luvToXyz(),
                this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Oh = ae({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create &&
            ((i.prototype = Object.create(null)),
            new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`)
              throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0
              ? (e._events = new i())
              : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events))
              n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols
              ? e.concat(Object.getOwnPropertySymbols(t))
              : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++)
                o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch (
                  (c.once && this.removeListener(e, c.fn, void 0, !0), l)
                ) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++)
                  u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch (
                    (c[d].once && this.removeListener(e, c[d].fn, void 0, !0),
                    l)
                  ) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u)
                        for (p = 1, u = Array(l - 1); p < l; p++)
                          u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn)
                o.fn === t &&
                  (!i || o.once) &&
                  (!n || o.context === n) &&
                  s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t ||
                    (i && !o[c].once) ||
                    (n && o[c].context !== n)) &&
                    l.push(o[c]);
                l.length
                  ? (this._events[a] = l.length === 1 ? l[0] : l)
                  : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (kh = ae({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e,
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Ah = ae({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
          e,
          t,
        ) {
          t.exports = kh();
        },
      })),
      (jh = ae({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
          e,
          t,
        ) {
          var n = Ah(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = {
              $$typeof: !0,
              render: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
            },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Mh = ae({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
          e,
          t,
        ) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t),
                        e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` ||
                        document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= M),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(M.navigator.vendor)
                    ? ((e =
                        /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                          M.navigator.userAgent,
                        )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t =
                        (_ != -1 && v != -1) ||
                        (_ != -1 && y != -1) ||
                        (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              M.navigator.userAgent,
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 &&
                                  11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((M.FontFaceObserver = s),
                  (M.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Nh = () => {}),
      (Ph = M !== void 0),
      (Fh = (() =>
        Ph &&
        (d.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
            d.userAgent,
          )))()),
      (Ih = Ph && typeof M.requestIdleCallback == `function`),
      (Lh = (() => (Ih ? M.requestIdleCallback : setTimeout))()),
      (Rh = () => () => {}),
      (zh = () => !0),
      (Bh = () => !1),
      (Vh = new Map()),
      (Hh = Ph ? void 0 : new Set()),
      (Uh = `preload`),
      (Wh = Object.keys),
      (Gh = `equals`),
      (Kh = (() => f.createContext({}))()),
      (qh = (() => f.createContext({}))()),
      (Jh = []),
      (Yh = f.createContext(void 0)),
      (Yh.displayName = `LibraryFeaturesContext`),
      (Xh = (() => Yh.Provider)()),
      (Zh = () => f.useContext(Yh) ?? {}),
      (Qh = `default`),
      ($h = {
        Pending: `pending`,
        Fulfilled: `fulfilled`,
        Rejected: `rejected`,
      }),
      (eg = class e {
        constructor(e, t) {
          ((this.resolver = e),
            (this.cacheHash = t),
            R(this, `promiseState`, $h.Pending),
            R(this, `preloadPromise`),
            R(this, `value`),
            R(this, `reason`),
            R(this, `read`, () => {
              if (this.promiseState === $h.Fulfilled) return this.value;
              throw this.promiseState === $h.Rejected
                ? this.reason
                : Error(`Need to call preload() before read()`);
            }));
        }
        static is(t) {
          return t instanceof e;
        }
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === $h.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === $h.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== $h.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Hh !== void 0 && Hh.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = $h.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = $h.Rejected), (this.reason = e));
            },
            n;
          try {
            n =
              this.cacheHash && Vh.has(this.cacheHash)
                ? Vh.get(this.cacheHash)
                : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!it(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (tg = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (ng = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (rg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (ig = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
      (ag = -1),
      (og = -2),
      (sg = -3),
      (cg = -4),
      (lg = -5),
      (ug = -6),
      (dg = -7),
      (K = Ph
        ? M
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: {
              hash: ``,
              hostname: ``,
              href: ``,
              origin: ``,
              pathname: ``,
              search: ``,
            },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            scheduler: void 0,
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (fg = 2),
      (pg = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (mg = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (gg = class {
        constructor() {
          (R(this, `payload`, tn()), R(this, `isEmpty`, !0));
        }
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return Zt(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (_g = (() => (Ph ? void 0 : new gg()))()),
      (vg = (() => mg.CollectionUtilsCache)()),
      (yg = new WeakMap()),
      (bg = a(void 0)),
      (xg = class {
        constructor(e, t) {
          ((this.collectionId = t),
            R(this, `module`),
            R(this, `cacheMap`, new Map()),
            (this.module = new eg(async () => {
              try {
                let t = await e();
                return (V(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(st(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = sn(n),
            i = cn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (_g !== void 0) {
              if (it(e)) return e.then((e) => (_g.set(vg, i, e), e));
              _g.set(vg, i, e);
            }
            return e;
          }
          if (an(vg, i)) {
            let e = on(vg, i);
            return (this.cacheMap.set(i, new eg(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = it(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(st(`Failed to call CollectionUtils method.`, e)),
              (s = void 0));
          }
          if (s === void 0) {
            (_g !== void 0 && _g.set(vg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new eg(() =>
            s
              .then((e) => (_g !== void 0 && _g.set(vg, i, e), e))
              .catch((e) => {
                console.error(st(`Failed to call CollectionUtils method.`, e));
              }),
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (Sg = (() => K.scheduler && `yield` in K.scheduler)()),
      (Cg = (() => K.scheduler && `postTask` in K.scheduler)()),
      (wg = new Set()),
      (Tg = !Fh),
      (Eg = 46),
      (Dg = 47),
      (Og = (e, t) => e.charCodeAt(t)),
      (kg = (e, t) => e.lastIndexOf(t)),
      (Ag = (e, t, n) => e.slice(t, n)),
      (jg = !1),
      (Mg = `/`),
      (Ng = (e) => e === Dg),
      (Pg = new Set([`/404.html`, `/404`, `/404/`])),
      (Fg = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Ig = `framer_variant`),
      (Lg = f.createContext({ global: void 0, routes: {} })),
      (Rg = 10),
      (zg = 1e4),
      (Bg = (e) => `--view-transition-${e}`),
      (Vg = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = In(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, M.innerWidth - n), Math.max(r, M.innerHeight - r))}px at ${n}px ${r}px);`;
          },
        },
        conic: {
          makeKeyframe: (e, t, n) => {
            let r = 0;
            return (
              ((n === `exit` &&
                e.angularDirection === `clockwise` &&
                t === `start`) ||
                (n === `exit` &&
                  e.angularDirection === `counter-clockwise` &&
                  t === `end`) ||
                (n === `enter` &&
                  e.angularDirection === `counter-clockwise` &&
                  t === `start`) ||
                (n === `enter` &&
                  e.angularDirection === `clockwise` &&
                  t === `end`)) &&
                (r = (e.sweepAngle / 360) * 100),
              `${Bg(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Bg(`conic-offset`)})`,
              r =
                (t === `exit` && e.angularDirection === `clockwise`) ||
                (t === `enter` && e.angularDirection === `counter-clockwise`),
              i = r ? `transparent` : `black`,
              a = r ? `black` : `transparent`,
              o = `conic-gradient(from `;
            return (
              (o += `${e.angle}deg at ${e.x} ${e.y}, `),
              (o += `${i} 0%, ${i} ${n}, `),
              (o += `${a} ${n}, ${a} 100%)`),
              `mask-image: ${o}; -webkit-mask-image: ${o};`
            );
          },
          makePropertyRules: () => `
        @property ${Bg(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = In(e),
              i = M.innerHeight - r,
              a = M.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Fn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) ||
                (t === `end` && n === `enter`)) &&
                (i = e.width),
              `${Bg(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Bg(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Bg(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r =
              (t === `start` && n === `exit`) || (t === `end` && n === `enter`)
                ? 1
                : 0;
            return `${Bg(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Bg(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Bg(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Hg = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Ug = `view-transition-styles`),
      (Wg = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Gg = () => {}),
      (qg = () => {
        (Kg ||
          ((Kg = document.createElement(`div`)),
          Kg.setAttribute(`aria-live`, `assertive`),
          Kg.setAttribute(`aria-atomic`, `true`),
          (Kg.style.position = `absolute`),
          (Kg.style.transform = `scale(0)`),
          document.body.append(Kg)),
          setTimeout(() => {
            Kg.textContent = document.title;
          }, 60));
      }),
      (Jg = !0),
      (Yg = (() => {
        if (d === void 0) return !1;
        let e = d.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (Xg = (() => Ph && typeof M.navigation?.back == `function`)()),
      (Zg = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Qg = f.createContext(null)),
      ($g = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (e_ = async () => {}),
      (t_ = { activeLocale: null, locales: [], setLocale: e_ }),
      (n_ = (() => {
        let e = f.createContext(t_);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (r_ = (() => {
        let e = f.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (i_ = (() => {
        let e = a({
          urlSearchParams: new URLSearchParams(),
          replaceSearchParams: async () => {},
        });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (a_ = `__f_replay`),
      (o_ = `__f_replay_ignore`),
      (s_ = () => Ph),
      (c_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`,
        )),
      (l_ = (e) => {
        e.target?.closest?.(`#main`) &&
          (xr(e) ||
            (e.stopPropagation(),
            performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (u_ = !1),
      (D_ = [Er]),
      (E_ = [Er]),
      (T_ = [Er]),
      (w_ = [Er]),
      (C_ = [Er]),
      (S_ = [Er]),
      (x_ = [Er]),
      (b_ = [Er]),
      (y_ = [Er]),
      (v_ = [Er]),
      (__ = [Er]),
      (g_ = [Er]),
      (h_ = [Er]),
      (m_ = [Er]),
      (p_ = [Er]),
      (f_ = [Er]),
      (d_ = [Er]),
      (k_ = class {
        constructor() {
          (Re(O_, 5, this),
            R(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            R(this, `mutationEffects`, {
              measure: () => this.measureMutationEffects(),
            }),
            R(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            R(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            R(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            R(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: {
                markEnd: () => this.markLayoutStylePaintEnd(),
              },
            }),
            R(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Dr(
              `framer-hydration-render`,
              `framer-hydration-start`,
              `framer-hydration-render-end`,
            ));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Dr(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`,
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Dr(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`,
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            Dr(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]
                ?.name ??
                performance.getEntriesByName(
                  `framer-hydration-effects-start`,
                )[0]?.name,
              `framer-hydration-effects-end`,
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Dr(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`,
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Dr(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`,
            ),
            Dr(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`,
            ));
        }
        measureMutationEffects() {
          Dr(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`,
          );
        }
        measureUnattributedHydrationOverhead() {
          Dr(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]
              ?.name ??
              performance.getEntriesByName(
                `framer-hydration-layout-effects-end`,
              )[0]?.name,
            `framer-hydration-browser-render-start`,
          );
        }
      }),
      (O_ = _e(null)),
      L(O_, 1, `markRenderStart`, D_, k_),
      L(O_, 1, `markRenderEnd`, E_, k_),
      L(O_, 1, `markUseInsertionEffectsStart`, T_, k_),
      L(O_, 1, `markUseInsertionEffectRouterStart`, w_, k_),
      L(O_, 1, `markUseInsertionEffectsEnd`, C_, k_),
      L(O_, 1, `markUseLayoutEffectsStart`, S_, k_),
      L(O_, 1, `markRouterUseLayoutEffectStart`, x_, k_),
      L(O_, 1, `markUseLayoutEffectsEnd`, b_, k_),
      L(O_, 1, `markUseEffectsStart`, y_, k_),
      L(O_, 1, `markUseEffectsRouterStart`, v_, k_),
      L(O_, 1, `markUseEffectsAreSynchronous`, __, k_),
      L(O_, 1, `markUseEffectsEnd`, g_, k_),
      L(O_, 1, `markRafStart`, h_, k_),
      L(O_, 1, `markRafEnd`, m_, k_),
      L(O_, 1, `markLayoutStylePaintEnd`, p_, k_),
      L(O_, 1, `measureMutationEffects`, f_, k_),
      L(O_, 1, `measureUnattributedHydrationOverhead`, d_, k_),
      ge(O_, k_),
      (j_ = !1),
      (M_ = { Start: Mr, End: Nr }),
      (N_ = class extends Error {}),
      (P_ = class extends D {
        constructor(e) {
          (super(e),
            (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = { forceUpdateKey: e.forceUpdateKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof N_)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Pr(e, t);
        }
      }),
      (F_ = Object.freeze([])),
      (L_ = new Set()),
      (R_ = class {
        constructor() {
          (R(this, `observers`, new Set()), R(this, `transactions`, {}));
        }
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function`
                ? r(e, t)
                : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (z_ = (() => {
        function e(e) {
          return (
            Yr(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (#/api/animation/)`,
            ),
            Xr(e) ? e : new H_(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Xr(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Xr(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (B_ = `onUpdate`),
      (V_ = `finishTransaction`),
      (H_ = class {
        constructor(e) {
          ((this.value = e), R(this, `observers`, new R_()));
        }
        static interpolationFor(e, t) {
          if (Xr(e)) return Zr(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Xr(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) =>
            e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), {
              x: 0,
              y: 0,
            })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({
            x: $r(e.x, t.x),
            y: $r(e.y, t.y),
          })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) =>
            (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) =>
            (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (
                n < 180 && (t -= i * 360),
                n > 180 && (t += i * 360),
                (e = t),
                t
              );
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ti ||= {})),
      (U_ = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (W_ = new ((() => Dh().Hsluv)())()),
      (G_ = (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (K_ =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (q_ = (e) => {
        let { r: t, g: n, b: r, a: i } = Ti(e);
        return {
          x:
            0.486570948648216 * t +
            0.265667693169093 * n +
            0.1982172852343625 * r,
          y:
            0.2289745640697487 * t +
            0.6917385218365062 * n +
            0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (J_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Di({
          r:
            e * 3.2409699419045226 -
            t * 1.537383177570094 -
            0.4986107602930034 * n,
          g:
            e * -0.9692436362808796 +
            t * 1.8759675015077204 +
            0.0415550574071756 * n,
          b:
            e * 0.0556300796969936 -
            t * 0.2039769588889765 +
            1.0569715142428784 * n,
          a: r,
        })),
      (Y_ = (e) => {
        let { r: t, g: n, b: r, a: i } = Ti(e);
        return {
          x:
            0.4123907992659593 * t +
            0.357584339383878 * n +
            0.1804807884018343 * r,
          y:
            0.2126390058715102 * t +
            0.715168678767756 * n +
            0.0721923153607337 * r,
          z:
            0.0193308187155918 * t +
            0.119194779794626 * n +
            0.9505321522496607 * r,
          a: i,
        };
      }),
      (X_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Di({
          r:
            e * 2.4934969119414263 -
            t * 0.9313836179191242 -
            0.402710784450717 * n,
          g:
            e * -0.8294889695615749 +
            t * 1.7626640603183465 +
            0.0236246858419436 * n,
          b:
            e * 0.0358458302437845 -
            t * 0.0761723892680418 +
            0.9568845240076871 * n,
          a: r,
        })),
      (Z_ = class e {
        constructor(e) {
          (R(this, `format`, `p3`),
            R(this, `r`),
            R(this, `g`),
            R(this, `b`),
            R(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return Oi(this);
        }
        rgb() {
          return Mi(this);
        }
        hsl() {
          return di(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1
                ? `rgb(${a}, ${o}, ${s})`
                : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Ai(t));
            case `srgb`:
              return new e(ji(Ai(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            ji({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            }),
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Ci(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Q_ = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Q_.get(n);
            return (
              r ||
              ((r = t(n)),
              r === void 0 ? { ...e(`black`), isValid: !1 } : (Q_.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ni(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue:
                typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) =>
            typeof t == `string` ? e.isColorString(t) : e.isColorObject(t)),
          (e.isColorString = (e) => (typeof e == `string` ? bi(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            B(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ui(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) =>
            typeof e == `string` ? Z_.isP3String(e) : !1),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...oi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = mi(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = mi(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ui(e.r, e.g, e.b, !0);
            for (let e of Object.keys(U_)) if (U_[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(
                0,
                Math.min(255, r.r - Math.round(255 * -(n / 100))),
              )),
              (r.g = Math.max(
                0,
                Math.min(255, r.g - Math.round(255 * -(n / 100))),
              )),
              (r.b = Math.max(
                0,
                Math.min(255, r.b - Math.round(255 * -(n / 100))),
              )),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.l += n / 100),
              (r.l = Math.min(1, Math.max(0, r.l))),
              e(r)
            );
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.l -= n / 100),
              (r.l = Math.min(1, Math.max(0, r.l))),
              e(r)
            );
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.s += n / 100),
              (r.s = Math.min(1, Math.max(0, r.s))),
              e(r)
            );
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.s -= n / 100),
              (r.s = Math.min(1, Math.max(0, r.s))),
              e(r)
            );
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) =>
            e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(
                `Both arguments for Color.interpolate must be Color objects`,
              );
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: ni(i, [0, 1], [t.r, r.r], a),
                g: ni(i, [0, 1], [t.g, r.g], a),
                b: ni(i, [0, 1], [t.b, r.b], a),
                a: ni(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: ni(i, [0, 1], [u, u + f], a),
                s: ni(i, [0, 1], [c.s, l.s], a),
                l: ni(i, [0, 1], [c.l, l.l], a),
                a: ni(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(si(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => di(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` ||
                t === `fill` ||
                t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        let r = He([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045
            ? e / 12.92
            : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      ($_ = (e) => e instanceof ze),
      (ev = (() => Oh().EventEmitter)()),
      (tv = class {
        constructor() {
          R(this, `_emitter`, new ev());
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames())
            e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames())
              if (t === this._emitter.listeners(e)) return;
          }
          n === !0
            ? this._emitter.once(e, t, i)
            : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e
            ? this._emitter.removeListener(e, t)
            : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames())
              e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (nv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (rv = (() => K.requestAnimationFrame || nv)()),
      (iv = (e) => rv(e)),
      (av = (() => 1 / 60)()),
      (ov = class extends tv {
        constructor(e = !1) {
          (super(),
            R(this, `_started`, !1),
            R(this, `_frame`, 0),
            R(this, `_frameTasks`, []),
            R(this, `tick`, () => {
              this._started &&
                (iv(this.tick),
                this.emit(`update`, this._frame, av),
                this.emit(`render`, this._frame, av),
                this._processFrameTasks(),
                this._frame++);
            }),
            e && this.start());
        }
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          av = e;
        }
        static get TimeStep() {
          return av;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), iv(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * av;
        }
      }),
      (sv = new ov()),
      (cv = {
        target:
          K.location.origin === `https://screenshot.framer.invalid`
            ? `EXPORT`
            : `PREVIEW`,
        zoom: 1,
      }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => cv.target,
        hasRestrictions: () => {
          let e = cv.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (lv = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0))
            return `0px`;
          let i = t;
          return (
            n &&
              r &&
              ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Ce({
        borderTopWidth: lv(`y`),
        borderLeftWidth: lv(`x`),
        borderRightWidth: lv(`x`),
        borderBottomWidth: lv(`y`),
      }),
      (uv = f.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (dv = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (fv = (() => ({
        ...dv,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (pv = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (mv = (() => ({ ...pv, fontWeight: 500 }))()),
      (hv = (() => ({
        ...pv,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (gv = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ji(ti.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e(
              { x: t.a.x + i, y: t.a.y - a },
              { x: t.b.x + i, y: t.b.y - a },
            );
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ti(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return {
              x: i * t.b.x + (1 - i) * t.a.x,
              y: i * t.b.y + (1 - i) * t.a.y,
            };
          }),
          (e.distance = (e) => ti.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x &&
                e.y === t.y &&
                e.width === t.width &&
                e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({
          x: e.x * t,
          y: e.y * t,
          width: e.width * t,
          height: e.height * t,
        }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return {
            x: e.x - t,
            y: e.y - t,
            width: e.width + n,
            height: e.height + n,
          };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return {
            x: t,
            y: n,
            width: Math.max(r - t, 0),
            height: Math.max(i - n, 0),
          };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return {
            x: t,
            y: n,
            width: Math.max(r - t, 1),
            height: Math.max(i - n, 1),
          };
        },
        round: (e, t = 0) => ({
          x: Qr(e.x, t),
          y: Qr(e.y, t),
          width: Qr(e.width, t),
          height: Qr(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return {
            x: t,
            y: n,
            width: Math.max(r - t, 0),
            height: Math.max(i - n, 0),
          };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return {
            x: a,
            y: o,
            width: ti.distance(t, n),
            height: ti.distance(t, i),
          };
        },
        merge: (...e) => {
          let t = {
              x: Math.min(...e.map(Y.minX)),
              y: Math.min(...e.map(Y.minY)),
            },
            n = {
              x: Math.max(...e.map(Y.maxX)),
              y: Math.max(...e.map(Y.maxY)),
            };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({
              x: e.x + e.width,
              y: e.y + e.height,
            }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(
            t.x >= Y.maxX(e) ||
            Y.maxX(t) <= e.x ||
            t.y >= Y.maxY(e) ||
            Y.maxY(t) <= e.y
          ),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) =>
          t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x
              ? (n = e.x - t.x)
              : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y
              ? (r = e.y - t.y)
              : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            ti.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t)
            if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [gv(t, n), gv(n, r), gv(r, i), gv(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  H(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              H(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  H(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              H(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = gv(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && gv.intersection(n, t, !0)) {
              let n = _v[e];
              return (V(n, `Invalid edge name`, _v), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          V(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            V(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (_v = [`top`, `right`, `bottom`, `left`]),
      (vv = {
        quickfix: (e) => (
          (Yi(e.widthType) || Yi(e.heightType)) && (e.aspectRatio = null),
          U(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Yi(e.widthType) || U(e.maxWidth)) &&
              (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Yi(e.heightType) || U(e.maxHeight)) &&
              (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (yv = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = vv.quickfix({
              left: U(t) || Xr(t),
              right: U(n) || Xr(n),
              top: U(r) || Xr(r),
              bottom: U(i) || Xr(i),
              widthType: Xi(a),
              heightType: Xi(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = z_.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = z_.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? z_.getNumber(t) : null,
              right: d.right ? z_.getNumber(n) : null,
              top: d.top ? z_.getNumber(r) : null,
              bottom: d.bottom ? z_.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? z_.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? z_.getNumber(t?.sizing.height) : null,
            c = na(e.left, e.right);
          if (o && U(c)) i = o - c;
          else if (n && Yi(e.widthType)) i = n.width;
          else if (U(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r
                  ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                    e.width
                  : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.widthType);
            }
          let l = na(e.top, e.bottom);
          if (s && U(l)) a = s - l;
          else if (n && Yi(e.heightType)) a = n.height;
          else if (U(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height /
                      r.freeSpaceUnitDivisor.height) *
                    e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.heightType);
            }
          return ta(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = yv.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? z_.getNumber(l.width) : null,
            d = l ? z_.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (bv = 200),
      (xv = 200),
      (Sv = f.createContext({ parentSize: 0 })),
      (Cv = (e) => {
        let t = ua(),
          { parentSize: n, children: r } = e,
          i = f.useMemo(() => ({ parentSize: n }), [fa(n), pa(n)]);
        return t === 1
          ? r
            ? w(_, { children: r })
            : null
          : w(Sv.Provider, { value: i, children: r });
      }),
      (wv = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(wv || {})),
      (Tv = /Mac/u),
      (Ev = /iPhone|iPod|iPad/iu),
      (Dv = /MacIntel/iu),
      (Ov = /Edg\//u),
      (kv = /Chrome/u),
      (Av = /Google Inc/u),
      (jv = /Safari/u),
      (Mv = /Apple Computer/u),
      (Nv = /Firefox\/\d+\.\d+$/u),
      (Pv = /FramerX/u),
      (Fv = /tablet|iPad|Nexus 9/iu),
      (Iv = /mobi/iu),
      (Lv = f.createContext(void 0)),
      (Rv = new Set()),
      (Bv = `style[data-framer-css-ssr-minified]`),
      (Vv = (() => {
        if (!Ta()) return new Set();
        let e = document
          .querySelector(Bv)
          ?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Hv = `data-framer-css-ssr`),
      (Uv = (e, t, n) =>
        f.forwardRef((r, i) => {
          let { sheet: a, cache: o } = f.useContext(Lv) ?? {},
            s = n;
          if (!Ta()) {
            qe(t) && (t = t(J.current(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Gv.add(e, s);
          }
          return (
            k(() => {
              (s && Vv.has(s)) ||
                (qe(t)
                  ? t(J.current(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && ja(e, a, o));
            }, []),
            w(e, { ...r, ref: i })
          );
        })),
      (Wv = class {
        constructor() {
          (R(this, `styles`, new Set()), R(this, `componentIds`, new Set()));
        }
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Gv = new Wv()),
      (qv = `flexbox-gap-not-supported`),
      (Jv = !1),
      (Yv = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Xv = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Xv || {})),
      (X = Xv),
      (Zv = `framer-form-input`),
      (Qv = `framer-form-input-wrapper`),
      ($v = `framer-form-input-empty`),
      (ey = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (V(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Pa(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            V(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (ty = (() => [
        Z(`.${Zv}`, {
          padding: Z.variable(X.Padding),
          background: `transparent`,
          fontFamily: Z.variable(X.FontFamily),
          fontWeight: Z.variable(X.FontWeight),
          fontSize: Z.variable(X.FontSize),
          fontStyle: Z.variable(X.FontStyle),
          color: Z.variable(X.FontColor),
          fontFeatureSettings: Z.variable(X.FontOpenType),
          fontVariationSettings: Z.variable(X.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(X.WrapperHeight, `100%`),
          letterSpacing: Z.variable(X.FontLetterSpacing),
          textAlign: Z.variable(X.FontTextAlignment),
          lineHeight: Z.variable(X.FontLineHeight),
        }),
        Z(`.${Zv}:focus-visible`, { outline: `none` }),
      ])()),
      (ny = (() => [Z(`.${Qv}`, { overflow: `hidden` })])()),
      (ry = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`),
      (iy = (() => [
        `.${Qv}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        corner-shape: var(${X.CornerShape});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ])()),
      (ay = `customError`),
      (oy = `valid`),
      (sy = 10),
      (cy = 8),
      (ly = 16),
      (uy = (() => ({
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${ly}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${ly}px`,
        backgroundColor: Z.variable(X.IconColor),
      }))()),
      (dy = (() => ({
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${ly}px`,
        boxSizing: `content-box`,
        padding: Z.variable(X.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...uy,
      }))()),
      (fy = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
      }),
      (py = { display: `inline-block` }),
      (my = { display: `block` }),
      (hy = (() => [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${fy.display};
            flex-direction: ${fy.flexDirection};
            justify-content: ${fy.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Ra([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Ra([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Ra([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${py.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Ra([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Ra([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ra([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ra([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Ra([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Ra([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Ra([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Ra([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Ra([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Ra([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ra([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Ra([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Ra([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ra([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Ra([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ra([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ra([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Ra([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ra([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${my.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10),
        ol.framer-text > li.framer-text:nth-last-child(n + 10) ~ li {
            padding-inline-start: 3ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-inline-start: 4ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-inline-start: 5ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-inline-start: 6ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-inline-start: 7ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-inline-start: 8ch;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `,
        `
        ${za(`.framer-text-module[data-width="fill"]`, `:first-child`)},
        ${za(`.framer-text-module:not([data-width="fit"])[style*="aspect-ratio"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"] {
                position: relative !important;
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            ${za(`.framer-text-module[data-width="fill"]`, `:first-child`)},
            ${za(`.framer-text-module:not([data-width="fit"])[style*="aspect-ratio"]`, `:first-child`)} {
                position: absolute;
                top: 0;
                left: 0;
                height: 100% !important;
            }
        }
    `,
      ])()),
      (gy = `--text-truncation-display-inline-for-safari-16`),
      (_y = `--text-truncation-display-none-for-safari-16`),
      (vy = `--text-truncation-line-break-for-safari-16`),
      (yy = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (by = `(background: -webkit-named-image(i))`),
      (xy = `(contain-intrinsic-size: inherit)`),
      (Sy = (() => [
        `@supports ${by} and (not ${xy}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${yy.join(`, `)} { display: var(${gy}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${yy.map((e) => `${e}::after`).join(`, `)} { content: var(${vy}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${_y}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${gy}, ${py.display}) }
    }`,
      ])()),
      (Cy = [`[data-framer-component-type] { position: absolute; }`]),
      (wy = [
        `[data-framer-component-type="Text"] { cursor: inherit; }`,
        `[data-framer-component-text-autosized] * { white-space: pre; }`,
        `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
        `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
        `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
        `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
        `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
        `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
      ]),
      (Ty = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (Ey = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${qv} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (Dy = (() => `
.${qv} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (Oy = (() => `
.${qv}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${qv}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (ky = (() => `
.${qv}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${qv}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (Ay = (() => [Ty, Dy, ...Ey, Oy, ky])()),
      (jy = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (My = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (Ny = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (Py = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (Fy = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (Iy = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (Ly = [
        `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
      ]),
      (Ry = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (zy = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (By = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (Vy = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (Hy = `--framer-will-change-override`),
      (Uy = `--framer-will-change-effect-override`),
      (Wy = `--framer-will-change-filter-override`),
      (Gy = `(background: -webkit-named-image(i))`),
      (Ky = `(grid-template-rows: subgrid)`),
      (qy = `(position-area: top right)`),
      (Jy = (e) =>
        e
          ? [
              `body { ${Hy}: none; }`,
              `@supports ${Gy} and (not ${Ky}) { body { ${Hy}: transform; } }`,
            ]
          : [`body { ${Hy}: none; ${Uy}: none; }`]),
      (Yy = (e) =>
        e
          ? [
              `body { ${Wy}: none; }`,
              `@supports ${Gy} and (not ${qy}) { body { ${Wy}: filter; } }`,
            ]
          : [`body { ${Wy}: none; }`]),
      (Xy = (e) => (e ? zy : [])),
      (Zy = [`.svgContainer svg { display: block; }`]),
      (Qy = `--overflow-clip-fallback`),
      ($y = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${Qy}: hidden; }
    }`,
      ])()),
      (eb = `--one-if-corner-shape-supported`),
      (tb = (() => [
        `@supports (corner-shape: superellipse(2)) { :root { ${eb}: 1 } }`,
      ])()),
      (nb = (e) => [
        ...Jy(e),
        ...Yy(e),
        ...Cy,
        ...wy,
        ...hy,
        ...Yv,
        ...Ay,
        ...jy,
        ...My,
        ...Ny,
        ...Fy,
        ...Py,
        ...Iy,
        ...Ry,
        ...Xy(e),
        ...Zy,
        ...By,
        ...Vy,
        ...$y,
        ...Ly,
        ...Sy,
        ...tb,
      ]),
      (rb = nb(!1)),
      (ib = nb(!0)),
      (ab = `optional`),
      (ob = (e) => e),
      (sb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (cb = Qa(
        (e) =>
          sb.test(e) ||
          (e.charCodeAt(0) === 111 &&
            e.charCodeAt(1) === 110 &&
            e.charCodeAt(2) < 91),
      )),
      (lb = (e) => () => {
        Jr(e);
      }),
      (ub = () => () => {}),
      (db = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = pb.useImageSource(e, t, n);
          return S(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (fb = !1),
      (pb = new Proxy(db, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? ub()
              : lb(
                  fb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. #/`,
                );
        },
      })),
      (mb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (hb = [1, 2, 2.2]),
      (gb = [512, 1024, 2048, 4096]),
      (_b = 512),
      (vb = (() => ({
        position: `absolute`,
        ...mb,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }))()),
      (yb = `src`),
      (bb = {
        isImageObject: function (e) {
          return !e || typeof e == `string`
            ? !1
            : typeof e == `object` && yb in e;
        },
      }),
      (xb = Sa()),
      (Sb = typeof document < `u` ? n : c),
      (Cb = f.createContext(!1)),
      (wb = class {
        constructor() {
          (R(this, `sharedResizeObserver`),
            R(this, `callbacks`, new WeakMap()),
            (this.sharedResizeObserver = new ResizeObserver(
              this.updateResizedElements.bind(this),
            )));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Tb = (() => (Ta() ? new wb() : void 0))()),
      (Eb = `data-framer-size-compatibility-wrapper`),
      (Db = `0.000001px`),
      (Ob = (() => ` translateZ(${Db})`)()),
      (kb = (() => Ea() || Ca() || Da())()),
      (Ab = (() => {
        class e extends D {
          constructor() {
            (super(...arguments),
              R(this, `layerElement`, null),
              R(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? No(t) : Po(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Ct(this.props, e);
          }
          componentDidUpdate(e) {
            ob(this.props).clip &&
              ob(this.props).radius === 0 &&
              ob(e).radius !== 0 &&
              Io(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (R(e, `defaultProps`, {}), e);
      })()),
      (jb = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++)
          ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Mb = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = bi(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(ci(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(ci(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(ci(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(ci(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ci(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) =>
          q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (Nb = /var\(.+\)/u),
      (Pb = new Map()),
      (Fb = [`stops`]),
      (Ib = [`start`, `end`]),
      (Lb = [`angle`, `alpha`]),
      (Rb = {
        isLinearGradient: (e) =>
          B(e) && Lb.every((t) => t in e) && (Wo(e) || Uo(e)),
        hash: (e) => e.angle ^ Ho(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Vo(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (zb = [
        `widthFactor`,
        `heightFactor`,
        `centerAnchorX`,
        `centerAnchorY`,
        `alpha`,
      ]),
      (Bb = {
        isRadialGradient: (e) =>
          B(e) && zb.every((t) => t in e) && (Wo(e) || Uo(e)),
        hash: (e) =>
          e.centerAnchorX ^
          e.centerAnchorY ^
          e.widthFactor ^
          e.heightFactor ^
          Ho(e, e.alpha),
        toCSS: (e, t) => {
          let {
              alpha: n,
              widthFactor: r,
              heightFactor: i,
              centerAnchorX: a,
              centerAnchorY: o,
            } = e,
            s = Vo(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i =
                  e.position === 1 && r?.position === 1
                    ? e.position - 1e-4
                    : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Vb = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Hb = (() => new Set([...Vb, ...Vb.map((e) => `${e}Capture`)]))()),
      (Ub = `overflow`),
      (Wb = { x: 0, y: 0, width: 200, height: 200 }),
      (Gb = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Kb = O(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: u } = Co(e),
          d = ts(c),
          f = To(e),
          p = Xo(e),
          m = l(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` ? !0 : void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id":
              ob(e)[`data-framer-offset-parent-id`],
          };
        !ns(e) && r && (ob(g)[`data-framer-name`] = r);
        let [y, b] = es(c),
          x = $o(c),
          S = ga(x);
        (i && !(b && !S && ia(x))
          ? ((d.transformTemplate ||= wo(i)), Object.assign(g, xo(i)))
          : (d.transformTemplate ||= void 0),
          jo(e, h));
        let C = _o(e),
          T = rs(c, x, b, t(Cb)),
          E = ma(
            v(_, {
              children: [
                C
                  ? w(po, {
                      alt: e.alt ?? ``,
                      image: C,
                      containerSize: b ?? void 0,
                      nodeId: e.id && So(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                w(ho, { ...o, border: a, layoutId: f }),
              ],
            }),
            T,
          ),
          D = yo(e.as),
          O = vo(C);
        return (
          e.fitImageDimension &&
            O &&
            ((y[e.fitImageDimension] = `auto`),
            (y.aspectRatio = O.width / O.height)),
          v(D, { ...g, ...d, layoutId: f, style: y, ref: h, children: [E, s] })
        );
      })),
      (qb = Va(
        O(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? w(Kb, { ...e, ref: t }) : null;
        }),
      )),
      (Jb = `__LAYOUT_TREE_ROOT`),
      (Yb = f.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Xb = class extends D {
        constructor() {
          (super(...arguments),
            R(this, `shouldAnimate`, !1),
            R(this, `transition`),
            R(this, `lead`),
            R(this, `follow`),
            R(this, `scheduledPromotion`, !1),
            R(this, `scheduledDidUpdate`, !1),
            R(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            R(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            R(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            R(this, `sharedLayoutContext`, {
              schedulePromoteTree: this.schedulePromoteTree,
              scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
              initLead: this.initLead,
            }));
        }
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow)
            return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === Jb && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&=
            (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        render() {
          return w(Yb.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (Zb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Qb = class {
        constructor(e) {
          (R(this, `sharedIntersectionObserver`),
            R(this, `callbacks`, new WeakMap()),
            (this.sharedIntersectionObserver = new IntersectionObserver(
              this.intersectionObserverCallback.bind(this),
              e,
            )));
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e),
            this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e),
            this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      ($b = a(new Map())),
      (ex = typeof IntersectionObserver > `u` ? Nh : ds),
      (tx = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (nx = f.createContext(null)),
      (rx = class extends D {
        constructor() {
          (super(...arguments),
            R(this, `layoutMaybeMutated`, !1),
            R(this, `projectionNodes`, new Map()),
            R(this, `rootProjectionNode`),
            R(this, `isExiting`),
            R(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === Jb && !this.props.isExiting,
            ),
            R(this, `switchLayoutGroupContext`, {
              register: (e) => this.addChild(e),
              deregister: (e) => this.removeChild(e),
              transition:
                this.props.isLead !== void 0 && this.props.animatesLayout
                  ? this.props.transition
                  : void 0,
              shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
            }));
        }
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(
              this,
              !!this.props.animatesLayout,
            );
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l
              ? o.schedulePromoteTree(this, a, !!i)
              : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth
              ? this.rootProjectionNode
              : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return w(Me.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (ix = (e) => {
        let t = f.useContext(Yb);
        return w(rx, { ...e, sharedLayoutContext: t });
      }),
      (ax = f.createContext(!0)),
      (ox = a({ register: () => {}, deregister: () => {} })),
      (sx = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = gs(),
          i = l({
            register: s(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r],
            ),
            deregister: s(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r],
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, qe(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r],
          ),
          w(ox.Provider, { value: i, children: n })
        );
      }),
      (cx = f.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: _,
        exitProps: y,
        position: b = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: x,
        index: S,
        areMagicMotionLayersPresent: C,
        id: T,
        isInitial: E,
      }) {
        let D = le(),
          O = t(Se),
          { persistLayoutIdCache: k } = t(uv),
          A = l({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: ys({}, _, o),
          }),
          j = l(null),
          M = O !== null && !O.isPresent;
        (n && A.current.wasCurrent === void 0 && k(),
          c(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = A.current,
              a = (n && !i) || (!M && A.current.wasBeingRemoved && n),
              s = r && !t,
              c = ys(A.current.origins, _, o),
              l = A.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: S, ...c, ...o }), (l = !1))
              : l === !1 &&
                (D.stop(), D.set({ zIndex: S, ...lx, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, M]));
        let N = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          ee = g ? { type: !1 } : h || m,
          P = { ...b };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let te = (bs(o) || bs(_)) && (e || n || r) ? 1200 : void 0,
          F = { ...lx, ...A.current.origins },
          ne = e
            ? {
                initial: { ...F, ..._ },
                animate: { ...F, ...o, transition: N },
                exit: { ...F, ...y, transition: m },
              }
            : { animate: D, exit: { ...F, ...y, transition: ee } },
          re = !(M || C === !1),
          ie = !!n && re,
          ae = n && E;
        return v(qb, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: te,
          },
          children: [
            e &&
              w(qb, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: M ? void 0 : d,
              }),
            w(qb, {
              ...P,
              ...ne,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: {
                pointerEvents: void 0,
                opacity: ae || e || (n && x) ? 1 : 0,
              },
              "data-is-present": re ? void 0 : !1,
              ref: j,
              children: w(nx.Provider, {
                value: j,
                children: w(ax.Provider, {
                  value: ie,
                  children: w(sx, {
                    isCurrent: ie,
                    isOverlayed: i,
                    children: w(ix, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: N,
                      isExiting: !re,
                      isOverlayed: i,
                      id: T,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, vs)),
      (lx = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (ux = class {
        constructor() {
          (R(this, `warning`, () => {
            Jr(
              `The Navigator API is only available inside of Framer: #/`,
            );
          }),
            R(this, `goBack`, () => this.warning()),
            R(this, `instant`, () => this.warning()),
            R(this, `fade`, () => this.warning()),
            R(this, `push`, () => this.warning()),
            R(this, `modal`, () => this.warning()),
            R(this, `overlay`, () => this.warning()),
            R(this, `flip`, () => this.warning()),
            R(this, `customTransition`, () => this.warning()),
            R(this, `magicMotion`, () => this.warning()));
        }
      }),
      (dx = a(new ux())),
      (fx = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: {
          backfaceVisible: !1,
          exit: { rotateY: -180 },
          enter: { rotateY: 180 },
        },
        FlipRight: {
          backfaceVisible: !1,
          exit: { rotateY: 180 },
          enter: { rotateY: -180 },
        },
        FlipUp: {
          backfaceVisible: !1,
          exit: { rotateX: 180 },
          enter: { rotateX: -180 },
        },
        FlipDown: {
          backfaceVisible: !1,
          exit: { rotateX: -180 },
          enter: { rotateX: 180 },
        },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (px = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (mx = Wh(lx)),
      (hx = f.createContext(void 0)),
      (gx = f.createContext(void 0)),
      (_x = (() => {
        var e, t, n, r, i, a, o;
        return (
          (t = class extends D {
            constructor(t) {
              (super(t),
                de(this, n),
                de(this, e, null),
                R(this, `state`, px()),
                de(this, a, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0)
                    return;
                  let t = ws(this.state, e);
                  if (!t) return;
                  let { skipLayoutAnimation: n } = this.props,
                    r = t.history[t.current],
                    i =
                      (e.type === `add` && e.transition.withMagicMotion) ||
                      (e.type === `forward` && r?.transition.withMagicMotion) ||
                      (e.type === `remove` && !!t.previousTransition),
                    a = () => {
                      (this.setState(t), r?.key && this.context?.(r.key));
                    };
                  n && !i ? n(a) : a();
                }),
                R(this, `goBack`, () => {
                  if (!we(this, n, i).call(this))
                    return (
                      Be(this, e, globalThis.event?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? N(this, a).call(this, { type: `remove` })
                        : N(this, a).call(this, { type: `removeOverlay` })
                    );
                }));
              let r = this.props.children;
              if (!r || !qi(r) || !Ki(r)) return;
              let o = { ...fx.Instant },
                s = {
                  type: `add`,
                  key:
                    r.key?.toString() ||
                    `stack-${this.state.historyItemId + 1}`,
                  transition: o,
                  component: r,
                },
                c = ws(this.state, s);
              c && (this.state = c);
            }
            componentDidMount() {
              let e = this.state.history[this.state.current];
              e && this.context?.(e.key);
            }
            UNSAFE_componentWillReceiveProps(e) {
              let t = e.children;
              if (!qi(t) || !Ki(t)) return;
              let r = t.key?.toString();
              r &&
                (this.state.history.length === 0
                  ? we(this, n, o).call(this, t, fx.Instant)
                  : N(this, a).call(this, {
                      type: `update`,
                      key: r,
                      component: t,
                    }));
            }
            componentWillUnmount() {
              this.props.resetProjection?.();
            }
            instant(e) {
              we(this, n, o).call(this, e, fx.Instant, void 0);
            }
            fade(e, t) {
              we(this, n, o).call(this, e, fx.Fade, t);
            }
            push(e, t) {
              we(this, n, o).call(this, e, xs(t), t);
            }
            modal(e, t) {
              we(this, n, o).call(this, e, fx.Modal, t);
            }
            overlay(e, t) {
              we(this, n, o).call(this, e, Ss(t), t);
            }
            flip(e, t) {
              we(this, n, o).call(this, e, Cs(t), t);
            }
            magicMotion(e, t) {
              we(this, n, o).call(this, e, fx.MagicMotion, t);
            }
            customTransition(e, t) {
              we(this, n, o).call(this, e, t);
            }
            render() {
              let e = we(this, n, r).call(this, { overCurrentContext: !1 }),
                t = we(this, n, r).call(this, { overCurrentContext: !0 }),
                i = zs(t),
                a = t.current > -1,
                o = this.state.history.length === 1,
                s = [];
              for (let [t, n] of Object.entries(this.state.containers)) {
                let r = this.state.containerIndex[t];
                V(r !== void 0, `Container's index must be registered`);
                let i = this.state.containerVisualIndex[t];
                V(i !== void 0, `Container's visual index must be registered`);
                let c = this.state.containerIsRemoved[t],
                  l = this.state.history[r],
                  u = this.state.transitionForContainer[t],
                  d = r === this.state.current,
                  f = r === this.state.previous,
                  p = d ? !1 : c,
                  m =
                    l?.transition?.withMagicMotion ||
                    (d && !!this.state.previousTransition);
                s.push(
                  w(
                    cx,
                    {
                      id: t,
                      index: i,
                      isInitial: o,
                      isCurrent: d,
                      isPrevious: f,
                      isOverlayed: a,
                      visible: d || f,
                      position: l?.transition?.position,
                      instant: Ys(r, e),
                      transitionProps: u,
                      animation: Js(r, e),
                      backfaceVisible: Ks(r, e),
                      exitAnimation: l?.transition?.animation,
                      exitBackfaceVisible: l?.transition?.backfaceVisible,
                      exitProps: l?.transition?.enter,
                      withMagicMotion: m,
                      areMagicMotionLayersPresent: p ? !1 : void 0,
                      children: w(is, {
                        children: Zs({
                          component: n,
                          transition: l?.transition,
                        }),
                      }),
                    },
                    t,
                  ),
                );
              }
              let c = this.state.overlayStack.map((e, n) =>
                w(
                  cx,
                  {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: Gs(n, t),
                    transitionProps: qs(n, t),
                    instant: Ys(n, t, !0),
                    animation: Js(n, t),
                    exitProps: e.transition.enter,
                    visible: Xs(n, t),
                    backdropColor: Us(e.transition),
                    backfaceVisible: Ws(n, t),
                    onTapBackdrop: Qs(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: Zs({
                      component: e.component,
                      transition: e.transition,
                    }),
                  },
                  e.key,
                ),
              );
              return w(qb, {
                "data-framer-component-type": `NavigationRoot`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                position: `relative`,
                style: {
                  overflow: `hidden`,
                  backgroundColor: `unset`,
                  pointerEvents: void 0,
                  ...this.props.style,
                },
                children: w(dx.Provider, {
                  value: this,
                  children: v(gx.Provider, {
                    value: o,
                    children: [
                      w(cx, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: Bs(i),
                        animation: Vs(i),
                        backfaceVisible: Hs(i),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: w(zi, {
                          children: w(Xb, {
                            children: w(Pe, {
                              presenceAffectsLayout: !1,
                              children: s,
                            }),
                          }),
                        }),
                      }),
                      w(Pe, { children: c }),
                    ],
                  }),
                }),
              });
            }
          }),
          (e = new WeakMap()),
          (n = new WeakSet()),
          (r = function (e) {
            let {
              current: t,
              previous: n,
              currentOverlay: r,
              previousOverlay: i,
            } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }),
          (i = function () {
            return globalThis.event
              ? N(this, e) === globalThis.event.timeStamp
              : !1;
          }),
          (a = new WeakMap()),
          (o = function (t, r, o) {
            if (
              we(this, n, i).call(this) ||
              (Be(this, e, globalThis.event?.timeStamp || null),
              !t || !qi(t) || !Ki(t))
            )
              return;
            let s = { ...r, ...o };
            if (s.overCurrentContext)
              return N(this, a).call(this, {
                type: `addOverlay`,
                transition: s,
                component: t,
              });
            let c =
              t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            N(this, a).call(this, {
              type: `add`,
              key: c,
              transition: s,
              component: t,
            });
          }),
          R(t, `defaultProps`, { enabled: !0 }),
          R(t, `contextType`, hx),
          t
        );
      })()),
      (vx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (yx = Va($s)),
      ke(jh(), 1),
      ke(jh(), 1),
      ke(jh(), 1),
      (bx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (xx = Symbol(`private`)),
      (Sx = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [xx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new R_(),
                reset() {
                  for (let t in i)
                    if (bx(i, t)) {
                      let n = bx(e, t) ? ob(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, wx);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[xx].reset()),
          (e.addObserver = (e, t) => e[xx].observers.add(t)),
          e
        );
      })()),
      (Cx = class {
        constructor() {
          (R(this, `set`, (e, t, n, r) => {
            if (t === xx) return !1;
            let i = e[xx],
              a,
              o;
            if (
              (Xr(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = z_(n)),
              i.observeAnimatables && a)
            ) {
              let e = i.transactions;
              a.onUpdate({
                update: (t, n) => {
                  (n && e.add(n), i.observers.notify({ value: r }, n));
                },
                finish: (t) => {
                  e.delete(t) && i.observers.finishTransaction(t);
                },
              });
            }
            let s = !1,
              c = !0,
              l = ob(e)[t];
            if (l !== void 0) {
              Xr(l)
                ? ((c = l.get() !== o), l.set(o))
                : ((c = l !== o), (ob(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            R(this, `get`, (e, t, n) => {
              if (t === xx) return ob(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[xx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(xx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== xx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (wx = new Cx()),
      (Tx = `opacity`),
      (Ex = (() => {
        function e(t = {}) {
          let n = Sx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Sx.resetObject(e));
          }),
          (e.addObserver = (e, t) => Sx.addObserver(e, t)),
          e
        );
      })()),
      (Dx = { update: 0 }),
      (Ox = f.createContext({ update: NaN })),
      (kx = class extends D {
        constructor() {
          (super(...arguments),
            R(this, `observers`, []),
            R(this, `state`, Dx),
            R(this, `taskAdded`, !1),
            R(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }),
                (this.taskAdded = !1));
            }),
            R(this, `observer`, () => {
              this.taskAdded ||
                ((this.taskAdded = !0), sv.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), Ex.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Ex._stores.forEach((e) => {
              let t = Ex.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            w(Ox.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      ke(jh(), 1),
      (Ax = `__framer__`),
      (jx = (() => Ax.length)()),
      (Mx = f.createContext(void 0)),
      (Nx = f.createContext(void 0)),
      (Px = `ssr-variant`),
      (Fx = `ssr-variant-group-separator`),
      (Ix = f.forwardRef(function (e, t) {
        let n = dc(t),
          r = f.useContext(Nx),
          i = f.useSyncExternalStore(Rh, Bh, zh),
          a = Hi(() => (i ? (Ta() ? 1 : 2) : 0)),
          o = f.useContext(Mx);
        return pr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(
                `PropertyOverrides is missing GeneratedComponentContext`,
              ),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, yc(t, c, i));
            case 1:
              return mc(i, s, c, u, l, d, n, t);
            case 2:
              return mc(i, s, c, u, l, d, uc, void 0);
            default:
              H(a);
          }
        }, [o, r, n, e]);
      })),
      (Lx = (() =>
        Uv(Ix, `.${Px} { display: contents }`, `PropertyOverrides`))()),
      (Rx = `default`),
      (zx = new Set([Rx])),
      (Vx = class {
        constructor() {
          (R(this, `entries`, new Map()), de(this, Bx, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (V(
                typeof n == `string`,
                `transformTemplate must be a string, received: ${n}`,
              ),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (V(
                typeof n == `object`,
                `${t} must be a valid object, received: ${n}`,
              ),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Rx, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Rx;
          let n = N(this, Bx)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (N(this, Bx)[e] = hc(r)) : Rx;
        }
        setAll(e, t = zx, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = qe(n.transformTemplate)
              ? n.transformTemplate?.({}, Ux)
              : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: B(a) ? a : void 0,
              animate: B(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (Bx = new WeakMap()),
      (Hx = new Vx()),
      (Ux = `__Appear_Animation_Transform__`),
      (Wx = `data-framer-appear-id`),
      (Gx = `data-framer-appear-animation`),
      (Kx = (e) => {
        if (Xa())
          return {
            animate: xc(e.animate) ? e.animate : void 0,
            initial: xc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (qx = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (Jx = (e) => ({
        x: Ue(e?.x ?? 0),
        y: Ue(e?.y ?? 0),
        opacity: Ue(e?.opacity ?? 1),
        scale: Ue(e?.scale ?? 1),
        rotate: Ue(e?.rotate ?? 0),
        rotateX: Ue(e?.rotateX ?? 0),
        rotateY: Ue(e?.rotateY ?? 0),
        skewX: Ue(e?.skewX ?? 0),
        skewY: Ue(e?.skewY ?? 0),
        transformPerspective: Ue(e?.transformPerspective ?? 0),
      })),
      (Yx = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (Xx = { willChange: `transform` }),
      Object.freeze(Xx),
      (Zx = {}),
      Object.freeze(Zx),
      (Qx = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      ($x = () => {
        let e = l();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            [],
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (eS = new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (tS = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (nS = 1),
      (rS = 4),
      (iS = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (aS = [`animate`, `animate`]),
      (oS = { inputRange: [], outputRange: [] }),
      (sS = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (cS = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (lS = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (uS = [0, 1]),
      (dS = {
        parallax: eS,
        styleAppear: iS,
        styleTransform: sS,
        loop: Qx,
        presence: tS,
      }),
      (fS = Wh(dS)),
      (pS = (e) => e.reduce((e, t) => (e += t), 0)),
      (mS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (hS = `current`),
      (gS = (e) =>
        f.forwardRef((t, n) => {
          if (t.__withFX)
            return w(e, {
              ...t,
              animate: void 0,
              initial: void 0,
              exit: void 0,
              ref: n,
            });
          let r = Kx(t);
          if (r) return w(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: p = !1,
            } = Wc(t),
            m = cs(n),
            { values: h, style: g } = Ac(s, m, p, t.style, t[pe]),
            { values: _, style: v } = Ec(i, m, t.style?.visibility),
            { values: y, style: b } = Hc(o, m),
            { values: x, style: S } = Rc(a, m),
            { values: C, style: T } = wc(c, m),
            E = f.useMemo(() => {
              let e = new ze(u ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [
                  y.transformPerspective,
                  x.transformPerspective,
                ],
              };
            }, [u, y, _, x, C, h]);
          Kc(t.style, E);
          let D = ne(E.scale, mS),
            O = ne(E.opacity, mS),
            k = ne(E.x, pS),
            A = ne(E.y, pS),
            j = ne(E.rotate, pS),
            M = ne(E.rotateX, pS),
            N = ne(E.rotateY, pS),
            ee = ne(E.skewX, pS),
            P = ne(E.skewY, pS),
            te = ne(E.transformPerspective, pS),
            { drag: F, dragConstraints: re } = l;
          Do(F && Gc(re) ? re : void 0);
          let ie = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: N,
            skewX: ee,
            skewY: P,
          };
          Qe(d) && (ie.transformPerspective = te);
          let ae = qc(t.animate) ? t.animate : void 0,
            oe = qc(t.initial) ? t.initial : void 0,
            se = qc(t.exit) ? t.exit : void 0,
            ce =
              p && !s.presenceInitial
                ? { initial: oe, animate: ae, exit: se }
                : {};
          return w(e, {
            ...l,
            ...ce,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...T, ...ie, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (_S = f.createContext({})),
      (vS = f.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a,
      ) {
        let o = f.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = dc(a);
        return w(_S.Provider, { value: o, children: s(r, i) });
      })),
      (yS = (e) =>
        f.forwardRef((t, n) =>
          w(e, {
            layoutId: To(t),
            ...t,
            layoutIdKey: void 0,
            duplicatedFrom: void 0,
            ref: n,
          }),
        )),
      (bS = !1),
      (xS = class extends D {
        constructor() {
          (super(...arguments), R(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Yc(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              st(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`,
              ),
          );
          let r =
            e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          $t(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Yc(e)) throw e;
          return ((bS = !0), this.props.children);
        }
      }),
      (SS = (() => (M === void 0 ? null : new Promise(() => {})))()),
      (CS = w(Xc, {})),
      (wS = a(!1)),
      (wS.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (TS = w(Qc, {})),
      (ES = class extends D {
        constructor() {
          (super(...arguments), R(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (el(this.props.getErrorMessage(), t?.componentStack), $c(e, t));
        }
        render() {
          let { children: e, fallback: t = TS } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (DS = class extends D {
        constructor() {
          (super(...arguments), R(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n,
          ),
            this.setState({ hasError: !0 }),
            $c(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (OS = (() => f.createContext(void 0))()),
      (kS = `code-crash:`),
      (AS = yS(
        f.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l,
        ) {
          let u = Hi(() => (t ? `${t}-container` : void 0)),
            d = yo(n),
            p = ml(
              f.Children.map(e, (e) =>
                f.isValidElement(e) ? f.cloneElement(e, { layoutId: t }) : e,
              ),
              r,
              i,
              a,
              o,
              s,
            );
          return w(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: w(Cb.Provider, {
              value: !0,
              children: w(Qg.Provider, {
                value: i ?? null,
                children: w(Vi, {
                  enabled: !1,
                  children: w(Le, {
                    id: t ?? ``,
                    inherit: c.layout ? !0 : `id`,
                    children: p,
                  }),
                }),
              }),
            }),
          });
        }),
      )),
      (jS = f.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = ml(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = yo(f);
          return w(Qg.Provider, {
            value: a ?? null,
            children: w(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return w(Qg.Provider, {
            value: a ?? null,
            children: w(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (MS = a({
        onRegisterCursors: () => () => {},
        registerCursors: () => {},
      })),
      (NS = `framer-cursor-none`),
      (PS = `framer-pointer-events-none`),
      (FS = m(function ({ children: e }) {
        let t = Hi(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = hl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = me();
        return v(MS.Provider, { value: t, children: [e, !n && w(zS, {})] });
      })),
      (IS = (() =>
        Uv(
          FS,
          [
            `.${NS}, .${NS} * { cursor: none !important; }`,
            `.${PS}, .${PS} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`,
        ))()),
      (LS = (() => ({
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 13,
        pointerEvents: `none`,
      }))()),
      (RS = `data-framer-portal-id`),
      (zS = m(function () {
        let { onRegisterCursors: e } = t(MS),
          [r, a] = i(!1),
          o = fe(0),
          u = fe(0),
          d = fe(0),
          f = l(null),
          p = l({ cursors: {}, cursorHash: void 0 }),
          m = Eo();
        (n(() => {
          let e = K.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? j(() => a(!1)) : a(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || a(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!r) return;
            let e = 0,
              t = 0;
            function n() {
              (o.set(e), u.set(t), Te(d, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (Ze(p.current.cursors)) return;
              let n = yl(e, t);
              n !== p.current.cursorHash &&
                ((p.current.cursorHash = n), De.update(() => m()));
            };
            function a(r) {
              if (r.pointerType === `touch`) {
                Ne(i);
                return;
              }
              (De.read(i, !0), (e = r.clientX), (t = r.clientY), De.update(n));
            }
            function s(e) {
              if (e.target === f.current || !f.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              De.update(() => {
                f.current?.dispatchEvent(t);
              });
            }
            return (
              K.addEventListener(`pointermove`, a),
              document.addEventListener(`pointerdown`, s),
              document.addEventListener(`pointerup`, s),
              De.read(i, !0),
              () => {
                (K.removeEventListener(`pointermove`, a),
                  document.removeEventListener(`pointerdown`, s),
                  document.removeEventListener(`pointerup`, s),
                  Ne(i));
              }
            );
          }, [d, o, u, m, r]),
          c(() => {
            if (!r) return;
            function e() {
              Te(d, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              K.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e),
                  K.removeEventListener(`blur`, e));
              }
            );
          }, [d, r]),
          n(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = Ze(e) ? null : yl(o.get(), u.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(NS, !1));
            };
          }, [o, u, e, m]));
        let { cursors: h, cursorHash: g } = p.current,
          _ = g ? h[g] : null,
          v = gl(_);
        n(() => {
          r && document.body.classList.toggle(NS, v);
        }, [v, r]);
        let y = _?.component,
          x = _?.transition ?? { duration: 0 },
          S = x.duration === void 0 ? x : { ...x, duration: x.duration * 1e3 },
          C = he(o, S),
          T = he(u, S),
          E = ne(() => C.get() + (_?.offset?.x ?? 0)),
          D = ne(() => T.get() + (_?.offset?.y ?? 0)),
          O = _?.alignment,
          k = _?.placement,
          A = s((e, t) => `translate(${vl(k, O)}) ${t}`, [O, k]);
        return !r || !_ || !y
          ? null
          : w(b, {
              children: w(y, {
                transformTemplate: A,
                style: { ...LS, x: E, y: D, opacity: d },
                globalTapTarget: !0,
                variant: _?.variant,
                ref: f,
                className: PS,
              }),
            });
      })),
      (BS = `webPageId`),
      (VS = class {
        constructor() {
          (R(this, `collectedLinks`, new Map()),
            R(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            V(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (V(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Ph && !Da()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Sl(e), e),
            this.collectedLinks.set(Sl(t), t));
          let n = this.nestingInfo.get(Sl(e)) ?? new Set();
          (n.add(Sl(t)), this.nestingInfo.set(Sl(e), n));
        }
      }),
      (HS = new VS()),
      (US = `element`),
      (WS = `collection`),
      (GS = `collectionItemId`),
      (KS = `pathVariables`),
      (qS = `framer/page-link,`),
      (JS = a(void 0)),
      (YS = `overlay`),
      (XS = `template-overlay`),
      (ZS = class extends D {
        constructor() {
          (super(...arguments),
            R(this, `state`, { error: void 0 }),
            R(this, `message`, `Made UI non-interactive due to an error.`),
            R(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((M.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(st(Fh ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t =
            e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          $t(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Fh && document.getElementById(`main`)?.innerHTML) || ``;
          return w(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${st()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (QS = /:([a-z]\w*)/gi),
      ($S = a(void 0)),
      (eC = 500),
      (tC = 0.9),
      (nC = 1.7),
      (rC = 4),
      (iC = 1 / 0),
      (aC = new WeakMap()),
      (oC = new Set()),
      (sC = new Map()),
      (cC = !Tg || typeof IntersectionObserver > `u` ? null : Gl()),
      (lC = zl(
        O(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d,
        ) {
          let f = Et(),
            p = Ot(),
            m = Ul(),
            { activeLocale: h, locales: g } = hr(),
            _ = $l(),
            v = _n(),
            y = Cl(),
            b = eu({
              nodeId: s,
              clickTrackingId: i,
              router: f,
              href: t,
              activeLocale: h,
            }),
            x = S(() => {
              if (!t) return {};
              let e = xl(t) ? t : Al(t);
              if (!e) return {};
              if (z(e))
                return iu(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: b,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m,
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (it(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: x,
                } = Bl(f, p, e, h, c, m),
                S = ql(n, !0),
                C = S === `_blank`,
                w = { pathVariables: y, locale: x },
                T = (e) => nu(f, l, () => v(l, w, !1, !C), d, y, r, e);
              return {
                href: u,
                target: S,
                onClick: ru(u, b, T),
                "data-framer-page-link-current": (p && Wl(p, e, m)) || void 0,
                navigate: T,
                preload: () => v(l, w, !0, !C),
                _routeId: l,
                _pathVariables: y,
                _locale: x,
              };
            }, [t, f, h, m, n, p, r, b, a, g, o, _, v]),
            C = cs(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              ...A
            } = x;
          ls(
            C,
            (e) => {
              if (!(e === null || !D || !E || y))
                return cC?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k],
          );
          let j = !!w;
          return Ml(
            dc(d).cloneAsArray(e, (e) => au(e, { ...u, ...su(A, l, j) }, C)),
            c,
            s,
            t,
            x,
            C,
          );
        }),
      )),
      (uC = `framer`),
      (dC = 3),
      (fC = 30),
      (pC = 1e4),
      (mC = `3`),
      (hC = `__framer`),
      (gC = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (_C = (() => Date.now())()),
      (vC = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (yC = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (bC = () => ((Date.now() - _C) / 1e3).toFixed(2)),
      (xC = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          f.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          f.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` &&
                ((r.setAttribute = !0),
                (r.inputChangeTimeSinceModuleLoad = bC())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(
              HTMLInputElement.prototype,
              `value`,
            );
            o &&
              Object.defineProperty(n, `value`, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = bC()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted),
                (r.inputChangeTimeSinceModuleLoad = bC()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, `value`, o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          w(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (SC = `https://www.google.com/recaptcha/api.js`),
      (CC = new Map()),
      (wC = { state: `pending` }),
      (TC = { state: `success` }),
      (EC = { state: `incomplete` }),
      (DC = { state: `complete` }),
      (OC = { state: `error` }),
      (kC = f.createContext(void 0)),
      (AC = f.forwardRef(function (
        {
          action: e,
          children: n,
          redirectUrl: r,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: c,
          formCaptchaProvider: l,
          formCaptchaSiteKey: u,
          ...d
        },
        p,
      ) {
        let m = f.useRef(null),
          h = p ?? m,
          g = !(l && u),
          {
            states: _,
            convertHoneypotFieldsForSubmission: y,
            replaceHoneypotWithMetadata: b,
          } = mu(g),
          x = Et(),
          S = Ot(),
          C = Ul(),
          T = dn(),
          { executeChallenge: E } = xu({ provider: l, siteKey: u }),
          [D, O] = f.useReducer(Su, EC),
          { activeLocale: k, locales: A } = hr(),
          M = t(kC),
          N = f.useRef({ onSuccess: i, onError: a, onLoading: o });
        N.current = { onSuccess: i, onError: a, onLoading: o };
        let ee = f.useRef(!1);
        async function te(e) {
          if (z(e)) {
            let t = Vl(x, e, C, A);
            if (!t) {
              Tu(e, h);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            x.navigate?.(n, r, i);
            return;
          }
          V(xl(e), `Expected link to be either a LinkToWebPage or a string`, e);
          let {
            routeId: t,
            elementId: n,
            pathVariables: r,
          } = Bl(
            x,
            S,
            e,
            k,
            await Zl(e.unresolvedPathSlugs, e.unresolvedHashSlugs, k, T),
            C,
          );
          x.navigate?.(t, n, r);
        }
        let F = async (t) => {
            if ((t.preventDefault(), !e || !M || ee.current)) return;
            ((ee.current = !0), y());
            let n = new FormData(t.currentTarget);
            (await gn({ priority: `user-visible`, continueAfter: `paint` }),
              b(n),
              j(() => O({ type: `submit` })),
              pu(n, K.document));
            for (let [e, t] of n) t instanceof File && n.delete(e);
            try {
              (N.current.onLoading?.(),
                gu({
                  router: x,
                  nodeId: c,
                  submitTrackingId: s,
                  activeLocale: k,
                }),
                await Du(e, n, M, E),
                j(() => O({ type: `success` })),
                N.current.onSuccess?.(),
                r && (await te(r)));
            } catch (e) {
              (j(() => O({ type: `error` })),
                N.current.onError?.(),
                console.error(e));
            }
            ee.current = !1;
          },
          ne = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` &&
                n.checkValidity() &&
                (e.preventDefault(), F(e)));
          },
          re = async (e) => {
            let t = e.currentTarget;
            (await gn({ priority: `background`, continueAfter: `paint` }),
              j(() => O({ type: Eu(t) ? `incomplete` : `complete` })));
          };
        return v(P.form, {
          ...d,
          onSubmit: Cu(D) ? F : wu,
          onKeyDown: ne,
          onChange: re,
          ref: h,
          children: [n(D), g && w(hu, { states: _ })],
        });
      })),
      (jC = `__framer_force_showing_editorbar_since`),
      (MC = class extends D {
        constructor() {
          (super(...arguments), R(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (NC = () => {
        try {
          return !!localStorage[jC];
        } catch {
          return !1;
        }
      }),
      (PC = () => !NC()),
      (FC = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (IC = `main`),
      (LC = `framerGeneratedPage`),
      (RC = `<!-- Start of headStart -->`),
      (zC = `<!-- End of headStart -->`),
      (BC = `<!-- Start of headEnd -->`),
      (VC = `<!-- End of headEnd -->`),
      (HC = `<!-- Start of bodyStart -->`),
      (UC = `<!-- End of bodyStart -->`),
      (WC = `<!-- Start of bodyEnd -->`),
      (GC = `<!-- End of bodyEnd -->`),
      (KC = (() => f.createContext(void 0))()),
      (qC = null),
      (JC = null),
      Lh(Ju),
      (YC = (e, n, r, i, a, o) => {
        let s = t(kC),
          u = l(),
          d = dn(),
          f = l(!0);
        return (
          c(() => {
            function t() {
              (!qC || !JC) && Ju();
              let t = r ? new URL(K.location.origin + r) : K.location,
                c = {
                  version: fg,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: qC,
                  locale: JC,
                },
                l = f.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && z(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (it(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (u.current = t()),
                n = e instanceof Promise ? await e : e;
              ((u.current = n),
                f.current
                  ? (f.current = !1)
                  : $t(`published_site_pageview`, n, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), $t(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              M.addEventListener(`pageshow`, c),
              () => {
                M.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, n, r, i, a, s, d, o]),
          u
        );
      }),
      (XC = { status: `loading`, data: void 0 }),
      (ZC = 5e3),
      (QC = () => {}),
      (aw = class e {
        constructor() {
          (R(this, `responseValues`, new Map()),
            de(this, $C, new Map()),
            de(this, ew, new Set()),
            de(this, tw, new Map()),
            de(this, nw, new Map()),
            de(this, rw, new Map()),
            de(this, iw, new Map()),
            R(
              this,
              `persistCache`,
              sc(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = N(this, tw).get(e);
                  if (!r || r === 0) continue;
                  let i = N(this, nw).get(e);
                  i && ((i && ud(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500),
            ));
        }
        unmount() {
          for (let [e, t] of N(this, iw))
            (clearInterval(t), N(this, iw).delete(e));
        }
        stopQueryRefetching(e) {
          let t = od(e),
            n = N(this, iw).get(t);
          n && (clearInterval(n), N(this, iw).delete(t));
        }
        startQueryRefetching(e) {
          let t = od(e),
            n = N(this, iw).get(t),
            r = N(this, tw).get(t);
          if (n || !r) return;
          let i = K.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = N(this, nw).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          N(this, iw).set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3)
                throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              ud(r, i) ||
                (N(this, nw).set(e, r),
                N(this, tw).set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = N(this, $C).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!Ta() || !Tl(e.url, !1)) return;
          let t = od(e);
          (N(this, ew).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`)
            throw Error(`Unexpected result status for prefetch`);
          let r = N(this, $C).get(t);
          for (let e of r ?? []) e();
          let i = ld(n, e);
          return (
            e.resultOutputType === `image` && z(i) && (await rd(i).catch(QC)),
            i
          );
        }
        async fetchWithCache(e) {
          if (!Ta()) return;
          let t = od(e),
            n = N(this, rw).get(t);
          if (n) return n;
          let r = N(this, nw).get(t),
            i = r && ud(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, XC);
          let a = (async () => {
            try {
              let n = await fetch(e.url, {
                method: `GET`,
                credentials: e.credentials,
              });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                N(this, nw).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, {
                status: `error`,
                error: e,
                data: void 0,
              });
            }
          })();
          return (
            N(this, rw).set(t, a),
            a.finally(() => {
              N(this, rw).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !N(this, ew).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Tl(r, !1)) return QC;
          let a = od(e),
            o = N(this, tw).get(a);
          ((!o || i < o) && N(this, tw).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = N(this, $C).get(a) ?? new Set();
          return (
            s.add(t),
            N(this, $C).set(a, s),
            () => {
              let n = N(this, $C).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && N(this, $C).delete(a),
                N(this, $C).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      ($C = new WeakMap()),
      (ew = new WeakMap()),
      (tw = new WeakMap()),
      (nw = new WeakMap()),
      (rw = new WeakMap()),
      (iw = new WeakMap()),
      R(aw, `cacheKey`, `framer-fetch-client-cache`),
      (ow = aw),
      (sw = a(void 0)),
      (cw = a(!0)),
      (lw = ({ children: e, client: t }) => {
        let [n] = i(() => t ?? new ow()),
          [r, a] = i(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              j(() => {
                a(!1);
              }),
              () => n.unmount()
            ),
            [n],
          ),
          w(cw.Provider, {
            value: r,
            children: w(sw.Provider, { value: n, children: e }),
          })
        );
      }),
      (Fe.WillChange = Ve),
      (uw = zl(
        O(function ({ links: e, children: t, ...n }, r) {
          let i = Et(),
            { activeLocale: a } = hr(),
            o = dc(r),
            s = $l(),
            c = [],
            l = e.map((e) => {
              if (e)
                return z(e)
                  ? lu(e, i, void 0, void 0, a)
                  : lu(
                      e.href,
                      i,
                      e.implicitPathVariables,
                      e.refKey,
                      a,
                      (e, t) => s(e, t, a, c),
                    );
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        }),
      )),
      (dw = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Ed(e, t);
            case `boolean`:
              return Od(e);
            case `color`:
              return jd(e);
            case `date`:
              return Nd(e);
            case `enum`:
              return Fd(e);
            case `file`:
              return Ld(e);
            case `link`:
              return zd(e);
            case `number`:
              return Vd(e);
            case `object`:
              return Wd(e, t);
            case `responsiveimage`:
              return Kd(e);
            case `richtext`:
              return Jd(e);
            case `string`:
              return Qd(e);
            case `vectorsetitem`:
              return Xd(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Je(e)
            ? { type: `boolean`, value: e }
            : tt(e)
              ? { type: `date`, value: e.toISOString() }
              : Ye(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : Xe(e)
                    ? { type: `array`, value: e.map(dw.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? ef(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? ef(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? ef(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? ef(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? ef(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array`
            ? t.value.some((t) => dw.equal(t, e, n))
            : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array`
            ? e.value.findIndex((e) => dw.equal(e, t, n))
            : -1;
        },
        contains(e, t, n) {
          let r = $d(e),
            i = $d(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.includes(i));
        },
        startsWith(e, t, n) {
          let r = $d(e),
            i = $d(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = $d(e),
            i = $d(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(dw.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              H(e);
          }
        },
      }),
      (fw = { type: `unknown`, isNullable: !0 }),
      (pw = class {
        constructor(e, t) {
          ((this.collection = e),
            (this.locale = t),
            R(this, `schema`),
            R(this, `indexes`, []));
          let n = Ya(e);
          V(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (V(n !== `array`, `Array properties are not supported`),
              V(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (et(i)) continue;
            let a = this.schema[t];
            if (!Qe(a)) {
              if (
                (V(a.type !== `unknown`, `Invalid definition type`),
                a.type === `richtext`)
              ) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await tf(this.collection, this.locale))[t]?.[n];
          return eg.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await tf(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await tf(this.collection, this.locale);
          return e.map((e) => {
            let n = t[Number(e)];
            return (
              V(n, `Can't find collection item`),
              this.getDatabaseItem(n, e)
            );
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (mw = new Map()),
      (hw = new WeakMap()),
      (gw = `$r_`),
      (_w = new Map()),
      (vw = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = sf(),
            i = cf();
          return new e(t * r + n / i);
        }
        static max(t, n) {
          return new e(Math.max(t.network, n.network));
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (yw = class {
        constructor(e, t) {
          ((this.id = e),
            (this.relational = t),
            R(this, `nodes`, []),
            R(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new bw();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (bw = class {
        constructor() {
          (R(this, `node`),
            R(this, `cost`, new Q(1 / 0)),
            R(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e),
            Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (xw = class {
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (Sw = class extends xw {
        constructor() {
          (super(...arguments), R(this, `group`));
        }
        getGroup() {
          return (V(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (V(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return pd(this.evaluate(void 0));
        }
        evaluateAsync() {
          return md(this.evaluate(void 0));
        }
      }),
      (Cw = class {
        constructor(e, t, n = {}) {
          ((this.options = n),
            R(this, `collections`),
            R(this, `richTextCache`, new WeakMap()),
            R(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = gf(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* _d(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* gd(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          V(pf(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          V(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a =
            this.options.richTextMode === `raw`
              ? t.pointer
              : n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return rt(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          V(hf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (V(n, `Can't find collection for vector set item pointer`),
            V(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return rt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (ww = `index`),
      (Tw = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      (Ew = class {
        constructor(e, t, n) {
          ((this.id = e),
            (this.name = t),
            (this.data = n),
            R(this, `indexes`, new Ow()),
            R(this, `fields`, new $()));
        }
      }),
      (Dw = class {
        constructor(e, t, n, r, i, a) {
          for (let o in ((this.id = e),
          (this.data = t),
          (this.collection = n),
          (this.lookupNodes = r),
          (this.constraint = i),
          (this.ordering = a),
          R(this, `resolvedFields`, new $()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (Ow = class extends Tw {
        constructor() {
          (super(...arguments), R(this, `name`, `Indexes`));
        }
      }),
      (kw = class {
        constructor(e, t, n, r) {
          ((this.id = e),
            (this.name = t),
            (this.definition = n),
            (this.collection = r));
        }
        getValue(e) {
          V(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          switch (t?.type) {
            case `richtext`:
              return (
                V(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: ff(this.collection.data, t.value) }
              );
            case `vectorsetitem`:
              return (
                V(
                  this.collection,
                  `Vector set item field must have a collection`,
                ),
                {
                  type: `vectorsetitem`,
                  value: mf(this.collection.data, t.value),
                }
              );
          }
          return t ?? null;
        }
      }),
      ($ = class extends Tw {
        constructor() {
          (super(...arguments), R(this, `name`, `Fields`));
        }
      }),
      (Aw = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (jw = class {
        constructor(e) {
          (R(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e
            ? !0
            : this.length === e.length
              ? this.getHash() === e.getHash()
              : !1;
        }
        providedByFields(e) {
          for (let { field: t } of this.fields)
            if (!e.has(t) && t.name !== ww) return !1;
          return !0;
        }
      }),
      (Mw = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0
            ? !0
            : e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0
            ? !0
            : e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (Nw = class e {
        constructor(e) {
          ((this.parent = e),
            R(this, `node`),
            R(this, `ordering`),
            R(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (V(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (V(!this.node, `Node already set`), (this.node = e));
        }
        setOrdering(e) {
          this.ordering = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.addField(t);
        }
        resolveField(e, t) {
          let n = [];
          for (let r of this.fields)
            r.name === e && ((t && r.collectionName !== t) || n.push(r));
          if (n.length === 1) return n[0];
          if (n.length > 1) throw Error(`Ambiguous fields`);
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fields.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new jw();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new Mw(
            this.getRequiredOrdering(),
            this.getRequiredResolvedFields(),
          );
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          V(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (V(e, `Field must exist`), e.field);
        }
      }),
      (Pw = class {
        constructor() {
          (R(this, `pointers`, new Map()), R(this, `values`, new Map()));
        }
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (Fw = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          return new e(t, this.tuples.map(n));
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (Iw = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (Lw = class e extends Sw {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            R(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(
            `RelationalProject`,
            this.inputGroup.id,
            ...this.projections,
            this.passthrough,
          );
        }
        getOutputFields() {
          let e = new $();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new $();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let e of this.projections)
            (t.merge(e.input.referencedFields), t.delete(e.field));
          return new Mw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.projections.map(
              (e) => new Iw(e.input.getOptimized(), e.field),
            ),
            this.passthrough,
          );
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* _d(
              n.tuples.map((t) =>
                _d(
                  this.projections.map((n) =>
                    gd({ field: n.field, value: n.input.evaluate(e, t) }),
                  ),
                ),
              ),
            );
          return n.map(t, (e, t) => {
            let n = new Pw();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            V(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (Rw = { type: 0 }),
      (zw = class extends xw {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return pd(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return md(this.evaluate(void 0, void 0));
        }
      }),
      (Bw = { type: 0 }),
      (Vw = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (Hw = class e extends zw {
        constructor(e, t, n) {
          let r = new $(),
            i = new $(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n),
            R(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return G(
            `ScalarCase`,
            this.input,
            ...this.conditions,
            this.otherwise,
          );
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions)
            (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map(
              (e) => new Vw(e.when.getOptimized(), e.then.getOptimized()),
            ),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* gd({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: _d(
              this.conditions.map((n) =>
                gd({
                  when: n.when.evaluate(e, t),
                  then: n.then.evaluate(e, t),
                }),
              ),
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r)
              if (dw.equal(n, e, Bw)) return t;
          } else for (let { when: e, then: t } of r) if (kd(e)) return t;
          return i;
        }
      }),
      (Uw = class {
        constructor(e, t, n) {
          ((this.normalizer = e),
            (this.query = t),
            (this.locale = n),
            R(this, `collectionId`, 0),
            R(this, `indexId`, 0),
            R(this, `fieldId`, 0),
            R(this, `subqueries`, []));
        }
        build() {
          let e = new Nw();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new $(),
            o;
          if (t.orderBy) {
            o = new jw();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Qe(t)) continue;
                a.add(t.field);
                let r = new Aw(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new kw(yf(this.fieldId++), void 0, t.definition, void 0),
                  a = new Iw(t, r);
                i.push(a);
                let s = new Aw(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new $(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Qe(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = yf(this.fieldId++),
                a = n.alias,
                s = new kw(r, a, t.definition, void 0),
                c = new Iw(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              H(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = of(t.data, this.locale),
            i = t.alias,
            a = new Ew(_f(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new kw(yf(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }),
              a.fields.add(r));
          }
          {
            let e = new kw(
              yf(this.fieldId++),
              ww,
              { type: `number`, isNullable: !1 },
              a,
            );
            n.addField({ field: e, name: ww, collectionName: i });
            let t = new jw(),
              r = new Aw(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new jw(),
              o = new Dw(vf(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new jw(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              H(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(
                `Subqueries are only supported inside subquery function calls`,
              );
            default:
              H(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)),
                  e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(fw, null);
        }
        buildLiteralValue(e) {
          let t = dw.parse(e.value);
          return this.normalizer.newScalarConstant(fw, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (V(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(
                  n.type === `Select`,
                  `Subqueries require a select expression`,
                ),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(
                  n.type === `Select`,
                  `Subqueries require a select expression`,
                ),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              H(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new Ww(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new Ww(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) =>
                new Vw(
                  this.buildExpression(e, t.when),
                  this.buildExpression(e, t.then),
                ),
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              H(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              H(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, {
                type: `boolean`,
                isNullable: !0,
              });
            case `DATE`:
              return this.normalizer.newScalarCast(n, {
                type: `date`,
                isNullable: !0,
              });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, {
                type: `number`,
                isNullable: !0,
              });
            case `STRING`:
              return this.normalizer.newScalarCast(n, {
                type: `string`,
                isNullable: !0,
              });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (Ww = class {
        constructor(e) {
          ((this.inScope = e),
            R(this, `referencedFields`, new $()),
            R(this, `referencedOuterFields`, new $()));
        }
      }),
      (Gw = class e extends Sw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            R(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (
            t.merge(this.predicate.referencedFields),
            new Mw(e.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.predicate.getOptimized(),
          );
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* _d(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => kd(n[t] ?? null));
        }
      }),
      (Kw = class e extends Sw {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * vw : 50 * vw);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new Fw(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new Pw();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            }),
          );
        }
      }),
      (qw = class e extends Sw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            R(this, `leftGroup`),
            R(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(
            `RelationalIntersection`,
            this.leftGroup.id,
            this.rightGroup.id,
          );
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Mw(new jw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* gd({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (Jw = class e extends Sw {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return G(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * vw);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new Fw(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new Pw();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            }),
          );
        }
      }),
      (Yw = class e extends Sw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            R(this, `leftGroup`),
            R(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Mw(new jw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* gd({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (Xw = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: kd(n) && kd(r) };
        }
      }),
      (Zw = class extends zw {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (Qw = { type: 0 }),
      ($w = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* gd({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.contains(n, r, Qw) };
        }
      }),
      (eT = { type: 0 }),
      (tT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* gd({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.endsWith(n, r, eT) };
        }
      }),
      (nT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.equal(n, r, Rw) };
        }
      }),
      (rT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.greaterThan(n, r, Rw) };
        }
      }),
      (iT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.greaterThanOrEqual(n, r, Rw) };
        }
      }),
      (aT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.lessThan(n, r, Rw) };
        }
      }),
      (oT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.lessThanOrEqual(n, r, Rw) };
        }
      }),
      (sT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !dw.equal(n, r, Rw) };
        }
      }),
      (cT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: kd(n) || kd(r) };
        }
      }),
      (lT = { type: 0 }),
      (uT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* gd({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.startsWith(n, r, lT) };
        }
      }),
      (dT = class {
        constructor(e) {
          ((this.normalizer = e), R(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof Gw) {
            if (e.predicate instanceof Xw) {
              let n = new qw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right),
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof cT) {
              let n = new Yw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right),
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof Jw)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new Kw(n, bf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof Gw) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof Jw)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof nT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof sT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `NotEquals`,
                      value: e.predicate.right.value,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof aT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `LessThan`,
                      value: e.predicate.right.value,
                      inclusive: !1,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof oT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `LessThan`,
                      value: e.predicate.right.value,
                      inclusive: !0,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof rT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `GreaterThan`,
                      value: e.predicate.right.value,
                      inclusive: !1,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof iT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `GreaterThan`,
                      value: e.predicate.right.value,
                      inclusive: !0,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof $w &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `Contains`,
                      value: e.predicate.target.value,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof uT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `StartsWith`,
                      value: e.predicate.target.value,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof tT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Zw &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = bf(r.lookupNodes.length);
                    n[0] = {
                      type: `EndsWith`,
                      value: e.predicate.target.value,
                    };
                    let i = new Kw(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (fT = class {
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (pT = class {
        constructor() {
          (R(this, `nodes`, new Map()), R(this, `groups`, []));
        }
        addGroup(e) {
          let t = new yw(lf(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new fT(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            V(
              i.isCompatible(t.relational),
              `Group has inconsistent relational props`,
            ),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (mT = class e extends Sw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            R(this, `leftGroup`),
            R(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(
            `RelationalLeftJoin`,
            this.leftGroup.id,
            this.rightGroup.id,
            this.constraint,
          );
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new Mw(new jw(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t);
          return new e(
            r,
            this.rightGroup.getOptimized(i),
            this.constraint.getOptimized(),
          );
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new Fw(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new Pw();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* gd({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof nT) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields,
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields,
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e,
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields,
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields,
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e,
              );
          }
          let r = new Fw(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new Pw();
              (n.merge(i),
                n.merge(a),
                kd(yield* this.constraint.evaluate(e, n)) &&
                  (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (hT = class e extends Sw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            R(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (
            t.merge(this.limit.referencedFields),
            new Mw(this.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.limit.getOptimized(),
            this.ordering,
          );
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* gd({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Hd(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (gT = class e extends Sw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            R(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (
            t.merge(this.offset.referencedFields),
            new Mw(this.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.offset.getOptimized(),
            this.ordering,
          );
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* gd({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Hd(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (_T = class e extends zw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            R(this, `inputGroup`),
            R(this, `definition`),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return G(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        getInputRequiredProps() {
          let e = new $(),
            t = Object.values(this.namedFields);
          for (let n of t) Qe(n.collection) || e.add(n);
          return new Mw(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        *evaluate(e, t) {
          let n = new Pw();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (vT = class e extends zw {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            V(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized(), this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return dw.cast(n, this.definition);
        }
      }),
      (yT = class e extends zw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            R(this, `inputGroup`),
            R(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = {
              type: `array`,
              isNullable: !1,
              definition: t.definition,
            }));
        }
        getHash() {
          return G(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        getInputRequiredProps() {
          let e = new $();
          return (
            Qe(this.field.collection) || e.add(this.field),
            new Mw(this.ordering, e)
          );
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        *evaluate(e, t) {
          let n = new Pw();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) =>
                e.getValue(this.field),
              ),
            }
          );
        }
      }),
      (bT = { type: 0 }),
      (xT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: dw.in(n, r, bT) };
        }
      }),
      (ST = { type: 1 }),
      (CT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            R(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* gd({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: dw.indexOf(n, r, ST) };
        }
      }),
      (wT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return G(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Sf(n),
            a = Sf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (TT = class e extends zw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            R(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: dw.length(n) };
        }
      }),
      (ET = class e extends zw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          return {
            type: `boolean`,
            value: !kd(yield* this.input.evaluate(e, t)),
          };
        }
      }),
      (DT = { type: 0 }),
      (OT = class e extends zw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            R(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* gd({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !dw.in(n, r, DT) };
        }
      }),
      (kT = class extends zw {
        constructor(e, t) {
          V(e.name !== ww, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            R(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (V(e, `Context must exist`), e.getValue(this.field))
            : (V(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (AT = class {
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new Jw(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new Kw(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new mT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (
            t instanceof Zw &&
            t.value?.type === `boolean` &&
            t.value.value === !0
          )
            return e;
          if (
            e instanceof mT &&
            t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)
          ) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new Gw(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new Lw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof Lw &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new hT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new gT(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof Zw) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new kT(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new Zw(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof ET)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, {
                  type: `boolean`,
                  isNullable: !0,
                });
          if (e instanceof nT) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof sT) return this.newScalarEquals(e.left, e.right);
          if (e instanceof aT)
            return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof oT)
            return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof rT)
            return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof iT) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof Xw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof cT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new ET(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (
            t instanceof Zw &&
            t.value?.type === `boolean` &&
            t.value.value === !0
          )
            return e;
          if (
            (e instanceof Zw &&
              e.value?.type === `boolean` &&
              e.value.value === !0) ||
            (t instanceof Zw &&
              t.value?.type === `boolean` &&
              t.value.value === !1)
          )
            return t;
          if (
            e instanceof Zw &&
            e.value?.type === `boolean` &&
            e.value.value === !1
          )
            return e;
          let n = new Xw(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (
            t instanceof Zw &&
            t.value?.type === `boolean` &&
            t.value.value === !0
          )
            return t;
          if (
            (e instanceof Zw &&
              e.value?.type === `boolean` &&
              e.value.value === !0) ||
            (t instanceof Zw &&
              t.value?.type === `boolean` &&
              t.value.value === !1)
          )
            return e;
          if (
            e instanceof Zw &&
            e.value?.type === `boolean` &&
            e.value.value === !1
          )
            return t;
          let n = new cT(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof kT;
          if (t instanceof kT && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new nT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof kT;
          if (t instanceof kT && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new sT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof kT;
          if (t instanceof kT && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new aT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof kT;
          if (t instanceof kT && !n)
            return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new oT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof kT;
          if (t instanceof kT && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new rT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof kT;
          if (t instanceof kT && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new iT(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` &&
            (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new xT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` &&
            (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new OT(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new Vw(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new Hw(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new $w(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new uT(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new tT(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new TT(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new CT(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new _T(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new yT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new wT(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new vT(e, t);
          return this.finishScalar(n);
        }
      }),
      (jT = class extends Sw {}),
      (MT = class e extends jT {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            R(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new $();
          return new Mw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * vw).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.fields,
            this.resolver,
          );
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          V(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (V(e.collection, `Collection required to resolve field`),
              n.add(e.collection));
          for (let e of t.tuples)
            for (let t of this.fields) {
              let n = e.getValue(t);
              n?.type === `richtext`
                ? this.resolver.preloadRichTextValue(n)
                : n?.type === `vectorsetitem` &&
                  this.resolver.preloadVectorSetItemValue(n);
            }
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (
                V(r.length === n.length, `Invalid number of items`),
                [e, r]
              );
            }),
          );
          return t.map(t.fields, (e) => {
            let t = new Pw();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (V(a, `Item not found`), V(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (NT = { type: 0 }),
      (PT = class e extends jT {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            R(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== ww && (Qe(e.collection) || t.add(e));
          return new Mw(new jw(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === ww) {
                let r = n.collection;
                V(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                V(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                V(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!dw.equal(a, o, NT)) {
                if ($e(a) || dw.lessThan(a, o, NT)) return i ? -1 : 1;
                if ($e(o) || dw.greaterThan(a, o, NT)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (FT = class {
        constructor(e, t, n) {
          ((this.query = e),
            (this.locale = t),
            (this.resolver = n),
            R(this, `memo`, new pT()),
            R(this, `normalizer`, new AT(this.memo)),
            R(this, `explorer`, new dT(this.normalizer)));
        }
        optimize() {
          let e = new Uw(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (
            this.optimizeGroup(t, n),
            [t.getOptimized(n), e.getNamedFields()]
          );
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (V(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new MT(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new PT(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (IT = fd(`query-engine`)),
      (LT = class {
        async evalQuery(e, t, n, r = {}) {
          IT.enabled &&
            IT.debug(`Query:
${Ff(e)}`);
          let i = new Cw(e, t, r),
            [a, o] = new FT(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = hd(
              _d(
                s.tuples.map((e) => {
                  let t = {},
                    r = {};
                  for (let [a, o] of c) {
                    let s = e.getValue(o);
                    ((t[a] = i.resolveValue(s)), n && (r[a] = s));
                  }
                  return (n && l.push(r), gd(t));
                }),
              ),
            );
          return n ? [it(u) ? await u : u, l] : u;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new Cw(t, n);
          return hd(
            _d(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return gd(t);
              }),
            ),
          );
        }
      }),
      (RT = (() => mg.QueryCache)()),
      (zT = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e),
            (this.maxSize = t),
            R(this, `cache`, new Map()),
            R(this, `serializedCache`, _g === void 0 ? void 0 : new Map()));
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t) {
          let n = Rf(e, t),
            r = this.cache.get(n);
          if (r) {
            if (
              (this.cache.delete(n),
              this.cache.set(n, r),
              _g !== void 0 &&
                this.serializedCache !== void 0 &&
                !nf(n) &&
                r.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && _g.set(RT, n, e);
            }
            return r;
          }
          let i = new eg(() => {
            let r = nf(n),
              i = r ? void 0 : on(RT, n);
            if (i)
              try {
                return this.queryEngine.resolveSerializableQueryResult(i, e, t);
              } catch (e) {
                rn(e, n);
              }
            return _g !== void 0 && !r
              ? this.queryEngine
                  .serializeableQuery(e, t)
                  .then(
                    ([e, t]) => (
                      this.serializedCache?.set(n, t),
                      _g.set(RT, n, t),
                      e
                    ),
                  )
              : this.queryEngine.query(e, t);
          });
          return (this.cache.set(n, i), this.prune(), i);
        }
      }),
      (BT = new zT(new LT())),
      (VT = `style[data-framer-breakpoint-css]`),
      (HT = `page`),
      (UT = Symbol(`cycle`)),
      (KT = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (qT = f.createContext(void 0)),
      (JT = () => f.useContext(qT)),
      (YT = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": {
            selector: `AvenirNextCondensed-UltraLight`,
            weight: void 0,
          },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": {
            selector: `AvenirNextCondensed-DemiBold`,
            weight: void 0,
          },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": {
            selector: `Futura-CondensedExtraBold`,
            weight: void 0,
          },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": {
            selector: `Helvetica-LightOblique`,
            weight: void 0,
          },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": {
            selector: `HelveticaNeue-UltraLightItalic`,
            weight: void 0,
          },
          "Thin Italic": {
            selector: `HelveticaNeue-ThinItalic`,
            weight: void 0,
          },
          "Light Italic": {
            selector: `HelveticaNeue-LightItalic`,
            weight: void 0,
          },
          "Medium Italic": {
            selector: `HelveticaNeue-MediumItalic`,
            weight: void 0,
          },
          "Bold Italic": {
            selector: `HelveticaNeue-BoldItalic`,
            weight: void 0,
          },
          "Condensed Bold": {
            selector: `HelveticaNeue-CondensedBold`,
            weight: void 0,
          },
          "Condensed Black": {
            selector: `HelveticaNeue-CondensedBlack`,
            weight: void 0,
          },
        },
        "Hoefler Text": {
          Regular: { selector: `Hoefler Text`, weight: void 0 },
        },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": {
          Regular: { selector: `Lucida Grande`, weight: void 0 },
        },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": {
            selector: `__SF-UI-Display-Ultralight-Italic__`,
            weight: 100,
          },
          "Thin Italic": {
            selector: `__SF-UI-Display-Thin-Italic__`,
            weight: 200,
          },
          "Light Italic": {
            selector: `__SF-UI-Display-Light-Italic__`,
            weight: 300,
          },
          "Medium Italic": {
            selector: `__SF-UI-Display-Medium-Italic__`,
            weight: 500,
          },
          "Semibold Italic": {
            selector: `__SF-UI-Display-Semibold-Italic__`,
            weight: 600,
          },
          "Bold Italic": {
            selector: `__SF-UI-Display-Bold-Italic__`,
            weight: 700,
          },
          "Heavy Italic": {
            selector: `__SF-UI-Display-Heavy-Italic__`,
            weight: 800,
          },
          "Black Italic": {
            selector: `__SF-UI-Display-Black-Italic__`,
            weight: 900,
          },
        },
        "SF Pro Display Condensed": {
          Regular: {
            selector: `__SF-UI-Display-Condensed-Regular__`,
            weight: 400,
          },
          Ultralight: {
            selector: `__SF-UI-Display-Condensed-Ultralight__`,
            weight: 100,
          },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: {
            selector: `__SF-UI-Display-Condensed-Medium__`,
            weight: 500,
          },
          Semibold: {
            selector: `__SF-UI-Display-Condensed-Semibold__`,
            weight: 600,
          },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": {
            selector: `__SF-UI-Text-Light-Italic__`,
            weight: 200,
          },
          "Medium Italic": {
            selector: `__SF-UI-Text-Medium-Italic__`,
            weight: 500,
          },
          "Semibold Italic": {
            selector: `__SF-UI-Text-Semibold-Italic__`,
            weight: 600,
          },
          "Bold Italic": {
            selector: `__SF-UI-Text-Bold-Italic__`,
            weight: 700,
          },
          "Heavy Italic": {
            selector: `__SF-UI-Text-Heavy-Italic__`,
            weight: 800,
          },
        },
        "SF Pro Text Condensed": {
          Regular: {
            selector: `__SF-UI-Text-Condensed-Regular__`,
            weight: 400,
          },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: {
            selector: `__SF-UI-Text-Condensed-Semibold__`,
            weight: 600,
          },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": {
          Regular: { selector: `Times New Roman`, weight: void 0 },
        },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (XT = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (ZT = YT),
      (QT = `System Default`),
      ($T = class {
        constructor() {
          (R(this, `name`, `local`),
            R(this, `fontFamilies`, []),
            R(this, `byFamilyName`, new Map()),
            R(this, `fontAliasBySelector`, new Map()),
            R(this, `fontAliases`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(ZT)) {
            let n = ZT[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = {
                  variant: e,
                  selector: i,
                  weight: a,
                  family: r,
                  cssFamilyName: r.name,
                };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(XT)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: QT, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = xp(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`,
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (eE = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (tE = class extends Map {
        constructor() {
          (super(...arguments), R(this, `_hash`, 0));
        }
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (rE = `Variable`),
      (iE = `BI;`),
      (aE = class {
        constructor() {
          (R(this, `name`, `builtIn`),
            R(this, `fontFamilies`, []),
            R(this, `byFamilyName`, new Map()),
            R(this, `assetByKey`, new Map()));
        }
        importFonts(e) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(
                r,
                e.font.foundryName,
                e.font.fontVersion,
              ),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Ep(n),
              u = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: kp(a),
                variationAxes: Ap(o),
                category: e.font.fontCategory,
                weight: Np(c),
                style: Fp(c),
                cssFamilyName: Dp(r, s),
              };
            (i.fonts.push(u), this.assetByKey.set(n.key, n), t.push(u));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Np(e.variant),
                r = Np(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          return { weight: oE[Pp(e)], style: Fp(e) };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = {
            source: this.name,
            name: e,
            fonts: [],
            foundryName: t,
            version: n,
          };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font
            ?.openTypeData;
          return kp(t)
            ? t?.map((e) => {
                if (jp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${iE}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(iE)) return null;
          let [t, n] = e.split(iE);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (oE = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (sE = fd(`custom-font-source`)),
      (cE = `CUSTOM;`),
      (lE = `CUSTOMV2;`),
      (uE = class e {
        constructor() {
          (R(this, `name`, `custom`),
            R(this, `fontFamilies`, []),
            R(this, `byFamilyName`, new Map()),
            R(this, `assetsByKey`, new Map()));
        }
        deprecatedImportFonts(t) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.assetsByKey.clear());
          let n = [];
          for (let r of t) {
            if (!this.isValidCustomFontAsset(r)) continue;
            let t = r.properties?.font.variationAxes,
              i = Array.isArray(t),
              a = Wp(r.properties),
              o = this.createFontFamily(a),
              s = r.properties?.font.openTypeData,
              c = i ? `variable` : this.inferVariantName(a),
              l = Ep(r),
              u = e.createLegacySelector(a),
              { family: d, variant: f } = Gp(r.properties.font),
              p = e.createSelector(d, f),
              m = {
                assetKey: r.key,
                family: o,
                selector: u,
                variant: c,
                file: l,
                hasOpenTypeFeatures: kp(s),
                variationAxes: Ap(t),
                owner: Jp(r),
                cssFamilyName: e.cssFontFamilyFromSelector(u),
                alternativeSelectors: {
                  [p]: {
                    variant: f,
                    cssFamilyName: e.cssFontFamilyFromSelector(p),
                  },
                },
              };
            (o.fonts.push(m),
              this.assetsByKey.set(r.key, r),
              n.push(...o.fonts));
          }
          return n;
        }
        importFonts(t, n) {
          if (!n) return this.deprecatedImportFonts(t);
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.assetsByKey.clear());
          let r = {};
          for (let n of t) {
            if (!this.isValidCustomFontAsset(n)) continue;
            let {
                family: t,
                variant: i,
                weight: a,
                style: o,
              } = Gp(n.properties.font),
              s = n.properties.font.variationAxes,
              c = Array.isArray(s),
              l = n.properties.font.openTypeData,
              u = Ep(n),
              d = Jp(n),
              f = Wp(n.properties),
              p = e.createLegacySelector(f),
              m = this.createFontFamily(t),
              h = e.createSelector(m.name, i),
              g = {
                assetKey: n.key,
                family: m,
                selector: h,
                variant: i,
                weight: a,
                style: o,
                file: u,
                hasOpenTypeFeatures: kp(l),
                variationAxes: Ap(s),
                owner: d,
                alternativeSelectors: {
                  [p]: {
                    variant: c ? `variable` : this.inferVariantName(f),
                    cssFamilyName: e.cssFontFamilyFromSelector(p),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(h),
              },
              _ = Up(m.fonts, g);
            if (_?.projectDuplicate)
              g.owner === `project` && ((m.fonts[_.index] = g), (r[h] = g));
            else if (_) {
              sE.debug(
                `Duplicate font found for:`,
                g,
                `with existing font:`,
                _.existingFont,
              );
              let e = _.existingFont,
                t = g.file?.endsWith(`.woff2`) ?? !1,
                n = e.file?.endsWith(`.woff2`) ?? !1;
              t && !n && ((m.fonts[_.index] = g), (r[h] = g));
            } else (m.fonts.push(g), (r[h] = g));
            this.assetsByKey.set(n.key, n);
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && qp(e);
          return Object.values(r);
        }
        static createSelector(e, t) {
          return `${lE}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${cE}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            V(Bp(e), `Selector must be a custom font selector`),
            Hp(e) ? e.slice(cE.length) : e.slice(lE.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font
            ?.openTypeData;
          return kp(t)
            ? t?.map((e) => {
                if (jp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find(
              (e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)),
            );
          return a
            ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase())
            : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (dE = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (fE = `FS;`),
      (pE = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (mE = Object.keys(pE)),
      (hE = (() =>
        RegExp(`^(?:${[...mE, `italic`, `variable`].join(`|`)})`, `u`))()),
      (gE = class e {
        constructor() {
          (R(this, `name`, `fontshare`),
            R(this, `fontFamilies`, []),
            R(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = mE.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return {
            weight: (n && pE[n]) || 400,
            style: r === `italic` ? r : `normal`,
          };
        }
        parseSelector(e) {
          if (!e.startsWith(fE)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(fE, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${fE}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${fE}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Yp(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!hE.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l ||
              ((l = { name: c, fonts: [], source: this.name }),
              this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = Ip(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: $p(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: Dp(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Xp(`fontshare`))[
            e.createMetadataSelector(t.family.name)
          ];
        }
      }),
      (_E = `Inter`),
      (vE = `FR;`),
      (yE = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (bE = class e {
        constructor() {
          (R(this, `name`, `framer`),
            R(this, `fontFamilies`, []),
            R(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (
            this.fontFamilies.push(t),
            this.byFamilyName.set(t.name, t),
            t
          );
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(vE) && !e.startsWith(_E)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && yE[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${vE}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l =
                  t.selector === t.selectorVariable ||
                  t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await Xp(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (xE = `GF;`),
      (SE = class e {
        constructor() {
          (R(this, `name`, `google`),
            R(this, `fontFamilies`, []),
            R(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? {
                weight: parseInt(t[1] || `400`),
                style: t[2] === `italic` ? `italic` : `normal`,
              }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(xE)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : {
                name: r.replace(xE, ``),
                variant: i,
                source: this.name,
                isVariable: t,
              };
        }
        static createSelector(e, t, n) {
          return `${xE}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${xE}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (
            this.fontFamilies.push(t),
            this.byFamilyName.set(t.name, t),
            t
          );
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await Yp(`google`),
            a = [],
            o = tm(t, (e) => e.family),
            s = tm(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(bp),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let {
                  weight: t,
                  style: r,
                  selector: i,
                  googleFontsVariantName: o,
                } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (bp(e) ? Ip(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: em(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: Dp(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Xp(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (CE = ke(Mh(), 1)),
      (wE = 5e3),
      (TE = 3),
      (EE = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (DE = new Map()),
      (OE = new Map()),
      (kE = (e, t) => nm(e, t)),
      (AE = {
        "FR;Inter": [
          {
            tag: `opsz`,
            minValue: 14,
            maxValue: 32,
            defaultValue: 14,
            name: `Optical size`,
          },
          {
            tag: `wght`,
            minValue: 100,
            maxValue: 900,
            defaultValue: 400,
            name: `Weight`,
          },
        ],
      }),
      (jE = class {
        constructor() {
          (R(this, `enabled`, !1),
            R(this, `bySelector`, new tE()),
            R(this, `loadedSelectors`, new Set()),
            R(this, `getGoogleFontsListPromise`),
            R(this, `getFontshareFontsListPromise`),
            R(this, `getBuiltInFontsListPromise`),
            R(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              }),
            ),
            R(this, `local`),
            R(this, `google`),
            R(this, `fontshare`),
            R(this, `builtIn`),
            R(this, `framer`),
            R(this, `custom`),
            R(this, `bySelectorValuesCache`),
            R(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new $T()),
            (this.google = new SE()),
            (this.fontshare = new gE()),
            (this.framer = new bE()),
            (this.custom = new uE()),
            (this.builtIn = new aE()),
            this.importLocalFonts());
        }
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors))
              this.bySelector.set(t, e);
        }
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts())
            (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(
              async () => {
                let { staticFonts: e, variableFonts: t } =
                    await pb.fetchGoogleFontsList(),
                  n = await im(`google`);
                for (let r of await this.google.importFonts(e, t, n))
                  this.addFont(r);
                return { staticFonts: e, variableFonts: t };
              },
            )),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = pb.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await im(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t))
              this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = pb.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = im(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e, t) {
          this.bySelector.forEach((e, t) => {
            Bp(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e, t);
          for (let e of n) this.addFont(e);
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = SE.parseVariant(n.variant);
            if (bp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Op(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = gE.parseVariant(r.variant);
            if (bp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Op(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = aE.parseVariant(i.variant);
            if (bp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Op(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return bE.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = zp(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Da() || (await rm(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await kE(
                  { family: n, url: t.file, weight: t.weight, style: t.style },
                  document,
                );
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
              return t.file
                ? (await kE(
                    {
                      family: n,
                      url: t.file,
                      weight: t.weight,
                      style: t.style,
                    },
                    document,
                  ),
                  this.loadedSelectors.add(e),
                  1)
                : Promise.reject(`Unable to load font: ${e}`);
            default:
              H(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(fE)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Jr(`Failed to load Fontshare fonts:`, e);
              }),
            ),
            e.some((e) => e.startsWith(xE)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Jr(`Failed to load Google fonts:`, e);
                }),
              ),
            e.some((e) => e.startsWith(iE)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Jr(`Failed to load built-in fonts:`, e);
                }),
              ),
            e.some(Bp) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Jr(`Failed to load custom fonts:`, e);
                }),
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1,
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !ME.loadedSelectors.has(e));
          n.length !== 0 &&
            (await ME.loadWebFontsFromSelectors(n),
            n.every((e) => ME.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (V(e, `Can’t find Inter font`), e);
        }
      }),
      (ME = new jE()),
      (NE = (e) => e.target.value),
      (PE = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (FE = O(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: c,
            required: l,
            step: u,
            style: d,
            type: f,
            maxLength: p,
            value: m,
            defaultValue: h,
            autofillEnabled: g,
            onChange: _,
            onBlur: y,
            onInvalid: b,
            onFocus: x,
            onValid: S,
            onClear: C,
            ...T
          } = e,
          E = lm(m ?? h, f),
          [D, O, k] = cm(E ?? ``, !0, _),
          A = Cr(E),
          M = s(() => {
            (O(``), C && j(() => C()));
          }, [C, O]),
          N = La(S, b, k, y, x),
          ee = s(
            (e) => {
              e.target === e.currentTarget && A.current?.focus();
            },
            [A],
          );
        if (f === `hidden`)
          return w(P.input, { type: `hidden`, name: i, defaultValue: h });
        let te = g === !1 ? PE : void 0,
          F = !!D,
          ne = !!C && F,
          re = cc(IE, Qv, r, f === `text` && LE, f === `textarea` && RE);
        return v(P.div, {
          ref: t,
          onClick: ee,
          style: d,
          className: re,
          ...T,
          children: [
            f === `textarea`
              ? w(P.textarea, {
                  ref: A,
                  ...te,
                  ...N,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: Zv,
                  value: D,
                  maxLength: p,
                })
              : w(P.input, {
                  ref: A,
                  ...te,
                  ...N,
                  type: f,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: cc(Zv, !F && $v),
                  value: D,
                  min: o,
                  max: a,
                  step: u,
                  maxLength: p,
                }),
            ne &&
              w(`button`, {
                type: `button`,
                className: zE,
                onClick: M,
                "aria-label": `Clear`,
                children: w(um, {}),
              }),
          ],
        });
      })),
      (IE = `framer-form-text-input`),
      (LE = `framer-form-text-input-type`),
      (RE = `framer-form-textarea-input-type`),
      (zE = `framer-form-text-input-clear`),
      (BE = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (VE = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (HE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (UE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (WE = Uv(
        FE,
        (() => [
          ...ty,
          ...iy,
          ...ny,
          Z(`.${Qv}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(
              `--framer-input-border-radius-top-left`,
            ),
            borderTopRightRadius: Z.variable(
              `--framer-input-border-radius-top-right`,
            ),
            borderBottomRightRadius: Z.variable(
              `--framer-input-border-radius-bottom-right`,
            ),
            borderBottomLeftRadius: Z.variable(
              `--framer-input-border-radius-bottom-left`,
            ),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${IE} .${Zv}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${IE}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${IE} .${Zv}`, {
            flex: 1,
            minWidth: 0,
            width: `auto`,
            padding: 0,
          }),
          Z(`.${IE}.${RE}`, { padding: 0 }),
          Z(`.${IE}.${RE} textarea.${Zv}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${IE} .${Zv}[type="date"], .${IE} .${Zv}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${IE} .${Zv}::-webkit-date-and-time-value`, {
            textAlign: `start`,
          }),
          Z(`.${IE} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${IE} textarea::-webkit-resizer`, {
            background: `no-repeat ${at(BE)}`,
          }),
          Z(`.${IE}:dir(rtl) textarea::-webkit-resizer`, {
            background: `no-repeat ${at(VE)}`,
          }),
          Z(`.${IE} textarea::-webkit-scrollbar`, {
            cursor: `pointer`,
            background: `transparent`,
          }),
          Z(`.${IE} textarea::-webkit-scrollbar-thumb:window-inactive`, {
            opacity: 0,
          }),
          Z(`.${IE} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${IE} .${Zv}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${IE} .${Zv}.${$v}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(
              `--framer-input-placeholder-color`,
            ),
            overflow: `visible`,
          }),
          Z(`.${IE}.${LE}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${ly}px`,
            height: `${ly}px`,
            marginRight: `${cy}px`,
            ...uy,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(
            `.${IE} .${Zv}[type="date"]::before, .${IE} .${Zv}[type="time"]::before`,
            {
              ...dy,
              paddingLeft: `${sy}px`,
              maskPosition: `${sy}px center`,
              backgroundPosition: `${sy}px center`,
            },
          ),
          Z(`.${IE} .${Zv}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, at(HE)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${IE} .${Zv}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, at(UE)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${IE} .${Zv}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${ly}px`,
            height: `100%`,
          }),
          Z(`.${IE}:focus-within, .${IE}.${ey}`, {
            boxShadow: Z.variable(
              `--framer-input-focused-box-shadow`,
              `--framer-input-box-shadow`,
            ),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`,
            ),
          }),
          Z(`.${IE}:focus-within::after, .${IE}.${ey}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`,
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`,
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, ry),
          }),
          Z(`.${zE}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${ly}px`,
            height: `${ly}px`,
            marginLeft: `${cy}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${zE}:hover, .${zE}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ])(),
        `framer-lib-form-plain-text-input`,
      )),
      (GE = (() => ({
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }))()),
      (KE = { opacity: 0 }),
      (qE = { opacity: 1 }),
      (JE = xm(
        f.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = S(() => vo(n), [n]),
            [p, m] = i();
          f.useLayoutEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                m({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let h = d ?? p;
          return (
            s && h && ((u[s] = `auto`), (u.aspectRatio = h.width / h.height)),
            n && delete u.background,
            v(yo(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && w(po, { image: n, alt: a, draggable: o }), r],
            })
          );
        }),
      )),
      (XE = (() =>
        !wa() &&
        typeof Document < `u` &&
        typeof Document.parseHTMLUnsafe == `function`)()),
      (ZE =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (QE = `{{ text-placeholder }}`),
      ($E = `rich-text-wrapper`),
      (eD = Va(
        O(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: _,
              center: v,
              className: y,
              stylesPresetsClassName: b,
              visible: x = !0,
              opacity: C,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = J.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: N,
              positionStickyLeft: ee,
              __htmlStructure: te,
              __fromCanvasComponent: F = !1,
              _forwardedOverrideId: ne,
              _forwardedOverrides: re,
              _usesDOMRect: ie,
              children: ae,
              ...oe
            } = e,
            se = ua(),
            ce = To(e),
            le = l(null),
            ue = n ?? le,
            { navigate: de, getRoute: fe } = Et(),
            pe = Ot();
          (vn(e.preload ?? []), jo(e, ue));
          let I = t(Cb),
            me = Cl(),
            he = s,
            ge = ne ?? r;
          if (ge && re) {
            let e = re[ge];
            typeof e == `string` && (he = e);
          }
          let L = ``;
          if (he) {
            let e = Cm(he);
            L = te ? te.replace(QE, e) : `<p>${e}</p>`;
          } else if (a) L = a;
          else if (u) {
            let e = Cm(u);
            L = te ? te.replace(QE, e) : `<p>${e}</p>`;
          } else o && (L = o);
          let _e = Ul(),
            ve = S(
              () => (me || !fe || !pe ? L : wm(L, fe, pe, _e)),
              [L, fe, pe, _e],
            );
          if (
            (c(() => {
              let e = ue.current;
              if (e === null) return;
              function t(e) {
                let t = Ll(e.target, ue.current);
                Aa(e) ||
                  !de ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (kl(de, t, _e) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [de, _e]),
            Dm(d, F, ue),
            !x)
          )
            return null;
          let ye = D && O() === J.canvas,
            be = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Em(E),
              opacity: ye ? 0 : C,
              flexShrink: 0,
            },
            xe = J.hasRestrictions(),
            Se = sa(e, se || 0, !1),
            Ce = ie && (f === `auto` || p === `auto`),
            we =
              e.transformTemplate || !Se || !xe || F || Ce
                ? (e.transformTemplate ?? wo(v))
                : void 0;
          if (!k) {
            if (Se && xe && !Ce) {
              let e = z_.getNumber(T).toFixed(4);
              ((be.transform = `translate(${Se.x}px, ${Se.y}px) rotate(${e}deg)`),
                (be.width = Se.width),
                (be.minWidth = Se.width),
                (be.height = Se.height));
            } else
              ((be.left = m),
                (be.right = h),
                (be.top = g),
                (be.bottom = _),
                (be.width = f),
                (be.height = p),
                (be.rotate = T));
            A
              ? (!me || I) &&
                ((be.position = `sticky`),
                (be.willChange = `transform`),
                (be.zIndex = 1),
                (be.top = j),
                (be.right = M),
                (be.bottom = N),
                (be.left = ee))
              : me &&
                (e.positionFixed || e.positionAbsolute) &&
                (be.position = `absolute`);
          }
          return (
            oc(e, be),
            rc(e, be),
            Object.assign(be, e.style),
            w(P.div, {
              id: r,
              ref: ue,
              ...oe,
              style: be,
              layoutId: ce,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": v,
              className: cc(y, b, $E),
              transformTemplate: we,
              dangerouslySetInnerHTML: { __html: ve },
            })
          );
        }),
      )),
      (tD = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (nD = (() =>
        RegExp(
          `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
          `gu`,
        ))()),
      (rD = O(function (e, t) {
        return w(`svg`, { ...e, ref: t, children: e.children });
      })),
      (iD = P.create(rD)),
      (aD = O(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return w(iD, {
          ...r,
          ref: i,
          viewBox: t,
          children: w(P.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (oD = []),
      (sD = `RichTextContainer`),
      (cD = O(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: u,
            center: d,
            children: f,
            environment: p = J.current,
            fonts: m = oD,
            height: h,
            isEditable: g = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: C,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: ee = `top`,
            visible: P = !0,
            width: te,
            withExternalLayout: F = !1,
            viewBox: ne,
            viewBoxScale: re = 1,
            effect: ie,
            ...ae
          } = e,
          oe = ua(),
          se = Cl(),
          ce = t(Cb),
          le = To(e),
          ue = l(null),
          de = n ?? ue;
        (jo(e, de), Dm(m, r, de));
        let fe = Im(ie, de),
          pe = S(() => {
            if (f) return Um(f, j, M, s, void 0, fe.getTokenizer());
          }, [f, j, M, s, fe]);
        if (!P) return null;
        let I = { opacity: g && p() === J.canvas ? 0 : y },
          me = Em(ee);
        me !== fy.justifyContent && (I.justifyContent = me);
        let he = {},
          ge = J.hasRestrictions(),
          L = sa(e, oe || 0, !1),
          _e = o && (te === `auto` || h === `auto`),
          ve =
            e.transformTemplate || !L || !ge || r || _e
              ? (e.transformTemplate ?? wo(d))
              : void 0;
        (F ||
          (L && ge && !_e
            ? ((he.x = L.x + (Ye(k?.x) ? k.x : 0)),
              (he.y = L.y + (Ye(k?.y) ? k.y : 0)),
              (he.left = 0),
              (he.top = 0),
              (I.rotate = z_.getNumber(O)),
              (I.width = L.width),
              (I.minWidth = L.width),
              (I.height = L.height))
            : ((I.left = _),
              (I.right = D),
              (I.top = N),
              (I.bottom = u),
              (I.width = te),
              (I.height = h),
              (I.rotate = O)),
          b
            ? (!se || ce) &&
              ((I.position = `sticky`),
              (I.willChange = `transform`),
              (I.zIndex = 1),
              (I.top = E),
              (I.right = T),
              (I.bottom = x),
              (I.left = C))
            : se &&
              (e.positionFixed || e.positionAbsolute) &&
              (I.position = `absolute`)),
          oc(e, I),
          rc(e, I),
          Object.assign(I, A, k, he),
          le && (ae.layout = `preserve-aspect`));
        let ye = yo(e.as),
          be = ae[`data-framer-name`] ?? v;
        return z(e.viewBox)
          ? e.as === void 0
            ? w(aD, {
                ...ae,
                ref: de,
                style: I,
                layoutId: le,
                viewBox: ne,
                viewBoxScale: re,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": sD,
                children: pe,
              })
            : w(ye, {
                ...ae,
                ref: de,
                style: I,
                layoutId: le,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": sD,
                children: w(aD, {
                  viewBox: ne,
                  viewBoxScale: re,
                  style: { width: `100%`, height: `100%` },
                  children: pe,
                }),
              })
          : w(ye, {
              ...ae,
              ref: de,
              style: I,
              layoutId: le,
              transformTemplate: ve,
              "data-framer-name": be,
              "data-framer-component-type": sD,
              children: pe,
            });
      })),
      (lD = Va(
        O(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              B(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(
                r.stylesPresetsClassNames,
              ).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return w(eD, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 ||
            t === void 0 ||
            n === void 0 ||
            i === void 0 ||
            a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`,
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return w(cD, { ...r, ref: i, children: T(a) ? a : void 0 });
        }),
      )),
      (uD = `framer/asset-reference,`),
      (dD = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = th(t);
        return w(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: w(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c,
          ),
        });
      }),
      (fD = Ta()),
      (pD = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (mD = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (hD = class {
        constructor() {
          (R(this, `entries`, new Map()), R(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(jb(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = nh(e);
            (s &&
              (t && rh(s, n),
              (s.id = n),
              (o = ch(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t &&
            (--t.count,
            !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t &&
            (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          fD && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = mD),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          fD && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new pD(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i,
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !fD) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        fD && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${mD}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t) => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (gD = new hD()),
      (_D = (() => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }))()),
      (vD = O(function (e, t) {
        let n = ua(),
          r = To(e),
          i = f.useRef(null),
          a = t ?? i,
          o = JT();
        return (
          jo(e, i),
          w(bD, {
            ...e,
            innerRef: a,
            parentSize: n,
            layoutId: r,
            providedWindow: o,
          })
        );
      })),
      (yD = 5e4),
      (bD = (() => {
        var e;
        return (
          (e = class extends Ab {
            constructor() {
              (super(...arguments),
                R(this, `container`, f.createRef()),
                R(this, `svgElement`, null),
                R(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                R(this, `previouslyRenderedSVG`, ``),
                R(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return sa(e, e.parentSize || 0);
            }
            get frame() {
              return sa(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (gD.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || fh(this.container, this.props);
            }
            componentWillUnmount() {
              (gD.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId))
                return;
              let { fill: t } = this.props;
              (bb.isImageObject(t) &&
                bb.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                Io(this.svgElement, `fill`, null, !1),
                fh(this.container, this.props));
            }
            collectLayout(e, t) {
              if (this.props.withExternalLayout) {
                ((t.width = `100%`),
                  (t.height = `100%`),
                  (t.aspectRatio = `inherit`));
                return;
              }
              let n = this.frame,
                {
                  rotation: r,
                  intrinsicWidth: i,
                  intrinsicHeight: a,
                  width: o,
                  height: s,
                } = this.props,
                c = z_.getNumber(r);
              if (
                ((e.opacity = U(this.props.opacity) ? this.props.opacity : 1),
                J.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  ia(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = cv;
                if (l === J.export) {
                  let e = s > 1 ? s : 1;
                  ((t.transform = `scale(${r * e}, ${o * e})`),
                    (t.zoom = 1 / e));
                } else t.transform = `scale(${r}, ${o})`;
                i && a && ((t.width = i), (t.height = a));
                return;
              }
              let { left: l, right: u, top: d, bottom: f } = this.props;
              (Object.assign(e, {
                left: l,
                right: u,
                top: d,
                bottom: f,
                width: o,
                height: s,
                rotate: c,
              }),
                Object.assign(t, {
                  left: 0,
                  top: 0,
                  bottom: 0,
                  right: 0,
                  position: `absolute`,
                }));
            }
            render() {
              let {
                id: e,
                visible: t,
                style: n,
                fill: r,
                svg: i,
                intrinsicHeight: a,
                intrinsicWidth: o,
                title: s,
                description: c,
                layoutId: l,
                className: u,
                variants: d,
                withExternalLayout: f,
                innerRef: p,
                svgContentId: m,
                height: h,
                opacity: g,
                width: y,
                requiresOverflowVisible: b,
                ...x
              } = this.props;
              if (!f && (!t || !e)) return null;
              let S = e ?? l ?? `svg`,
                C = this.frame,
                T = C || { width: o || 100, height: a || 100 },
                E = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                D = {};
              (this.collectLayout(E, D),
                tc(this.props, E),
                oc(this.props, E),
                Ab.applyWillChange(this.props, E, !1));
              let O = null;
              if (typeof r == `string` || q.isColorObject(r)) {
                let e = q.isColorObject(r)
                  ? r.initialValue || q.toRgbString(r)
                  : r;
                ((E.fill = e), (E.color = e));
              } else if (Rb.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Rb.hash(t)}`;
                E.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = qm(t, S);
                O = w(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: w(`linearGradient`, {
                    id: n,
                    x1: a,
                    x2: o,
                    y1: s,
                    y2: c,
                    children: i.map((e, t) =>
                      w(
                        `stop`,
                        {
                          offset: e.position,
                          stopColor: e.color,
                          stopOpacity: e.alpha,
                        },
                        t,
                      ),
                    ),
                  }),
                });
              } else if (Bb.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Bb.hash(t)}`;
                E.fill = `url(#${n})`;
                let i = Jm(t, S);
                O = w(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: w(`radialGradient`, {
                    id: n,
                    cy: t.centerAnchorY,
                    cx: t.centerAnchorX,
                    r: t.widthFactor,
                    children: i.stops.map((e, t) =>
                      w(
                        `stop`,
                        {
                          offset: e.position,
                          stopColor: e.color,
                          stopOpacity: e.alpha,
                        },
                        t,
                      ),
                    ),
                  }),
                });
              } else if (bb.isImageObject(r)) {
                let e = $m(r, T, S);
                e &&
                  ((E.fill = `url(#${e.id})`),
                  (O = w(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: w(`defs`, { children: w(dD, { ...e }) }),
                  })));
              }
              let k = { "data-framer-component-type": `SVG` },
                A = !C;
              A && Object.assign(k, xo(this.props.center));
              let j =
                  !b &&
                  !O &&
                  !E.fill &&
                  !E.background &&
                  !E.backgroundImage &&
                  i.length < yD &&
                  !lh(i) &&
                  !uh(i),
                M = null;
              if (j)
                ((E.backgroundSize = `100% 100%`),
                  (E.backgroundImage = at(i)),
                  gD.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = gD.subscribe(i, !m, e, b);
                (gD.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  dh(E) && (E.overflow = `hidden`),
                  (M = v(_, {
                    children: [
                      O,
                      w(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: D,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        bb.isImageObject(r) ? r.src : ``,
                      ),
                    ],
                  })));
              }
              let N = yo(this.props.as),
                {
                  href: ee,
                  target: P,
                  rel: te,
                  onClick: F,
                  onTap: ne,
                } = this.props,
                re = s || c;
              return w(N, {
                ...k,
                ...x,
                layoutId: l,
                transformTemplate: A ? wo(this.props.center) : void 0,
                id: e,
                ref: p,
                style: E,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: re ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": re ? void 0 : `true`,
                onTap: ne,
                onClick: F,
                href: ee,
                target: P,
                rel: te,
                children: M,
              });
            }
          }),
          R(e, `supportsConstraints`, !0),
          R(e, `defaultSVGProps`, {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0,
            style: void 0,
            _constraints: { enabled: !0, aspectRatio: null },
            parentSize: 0,
            rotation: 0,
            visible: !0,
            svg: ``,
            shadows: [],
          }),
          R(e, `defaultProps`, { ...Ab.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (xD = Va(vD)),
      (SD = 1e3),
      (CD = `explicitInter`),
      (ze.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = Ue(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
export {
  qr as $,
  ib as A,
  hh as B,
  J as C,
  jS as D,
  xD as E,
  Gx as F,
  Lr as G,
  ph as H,
  Hx as I,
  Na as J,
  ct as K,
  Wx as L,
  cc as M,
  ME as N,
  mh as O,
  Eh as P,
  HS as Q,
  Ux as R,
  LT as S,
  gn as St,
  lD as T,
  Bf as U,
  gh as V,
  _g as W,
  Hh as X,
  dt as Y,
  Or as Z,
  jn as _,
  Uv as _t,
  wv as a,
  Ft as at,
  Lx as b,
  bc as bt,
  AC as c,
  Jf as ct,
  ZS as d,
  hr as dt,
  Qf as et,
  JE as f,
  np as ft,
  N_ as g,
  _p as gt,
  lC as h,
  Et as ht,
  AS as i,
  Jc as it,
  Gv as j,
  Ja as k,
  WE as l,
  Cl as lt,
  Xh as m,
  Pt as mt,
  q as n,
  wr as nt,
  UT as o,
  Ot as ot,
  eg as p,
  zf as pt,
  wD as q,
  vS as r,
  Wf as rt,
  Ui as s,
  bl as st,
  Rl as t,
  gD as tt,
  Mx as u,
  gr as ut,
  dd as v,
  vp as vt,
  uw as w,
  zT as x,
  wh as xt,
  $S as y,
  gS as yt,
  Hv as z,
};
//# sourceMappingURL=core-lib.mjs.map
