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
  T as f,
  b as p,
  c as m,
  d as h,
  f as g,
  j as _,
  k as v,
  l as y,
  m as b,
  o as x,
  p as S,
  v as C,
  w as ee,
  z as w,
} from "./react.mjs";
var T,
  E,
  te,
  ne,
  re,
  ie,
  ae,
  oe,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De = e(() => {
    ((T = Object.create),
      (E = Object.defineProperty),
      (te = Object.getOwnPropertyDescriptor),
      (ne = Object.getOwnPropertyNames),
      (re = Object.getPrototypeOf),
      (ie = Object.prototype.hasOwnProperty),
      (ae = (e, t) => ((t = Symbol[e]) ? t : Symbol.for(`Symbol.` + e))),
      (oe = (e) => {
        throw TypeError(e);
      }),
      (se = (e, t, n) =>
        t in e
          ? E(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (ce = (e, t) => E(e, `name`, { value: t, configurable: !0 })),
      (le = (e, t) =>
        function () {
          return (
            t || (0, e[ne(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (ue = (e, t) => {
        for (var n in t) E(e, n, { get: t[n], enumerable: !0 });
      }),
      (de = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of ne(t))
            !ie.call(e, i) &&
              i !== n &&
              E(e, i, {
                get: () => t[i],
                enumerable: !(r = te(t, i)) || r.enumerable,
              });
        return e;
      }),
      (fe = (e, t, n) => (
        (n = e == null ? {} : T(re(e))),
        de(
          t || !e || !e.__esModule
            ? E(n, `default`, { value: e, enumerable: !0 })
            : n,
          e,
        )
      )),
      (pe = (e) => [, , , T(e?.[ae(`metadata`)] ?? null)]),
      (me = [
        `class`,
        `method`,
        `getter`,
        `setter`,
        `accessor`,
        `field`,
        `value`,
        `get`,
        `set`,
      ]),
      (he = (e) =>
        e !== void 0 && typeof e != `function` ? oe(`Function expected`) : e),
      (ge = (e, t, n, r, i) => ({
        kind: me[e],
        name: t,
        metadata: r,
        addInitializer: (e) =>
          n._ ? oe(`Already initialized`) : i.push(he(e || null)),
      })),
      (_e = (e, t) => se(t, ae(`metadata`), e[3])),
      (ve = (e, t, n, r) => {
        for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++)
          t & 1 ? a[i].call(n) : (r = a[i].call(n, r));
        return r;
      }),
      (ye = (e, t, n, r, i, a) => {
        var o,
          s,
          c,
          l,
          u,
          d = t & 7,
          f = !!(t & 8),
          p = !!(t & 16),
          m = d > 3 ? e.length + 1 : d ? (f ? 1 : 2) : 0,
          h = me[d + 5],
          g = d > 3 && (e[m - 1] = []),
          _ = e[m] || (e[m] = []),
          v =
            d &&
            (!p && !f && (i = i.prototype),
            d < 5 &&
              (d > 3 || !p) &&
              te(
                d < 4
                  ? i
                  : {
                      get [n]() {
                        return Ce(this, a);
                      },
                      set [n](e) {
                        return Te(this, a, e);
                      },
                    },
                n,
              ));
        d
          ? p && d < 4 && ce(a, (d > 2 ? `set ` : d > 1 ? `get ` : ``) + n)
          : ce(i, n);
        for (var y = r.length - 1; y >= 0; y--)
          ((l = ge(d, n, (c = {}), e[3], _)),
            d &&
              ((l.static = f),
              (l.private = p),
              (u = l.access = { has: p ? (e) => Se(i, e) : (e) => n in e }),
              d ^ 3 &&
                (u.get = p
                  ? (e) => (d ^ 1 ? Ce : Ee)(e, i, d ^ 4 ? a : v.get)
                  : (e) => e[n]),
              d > 2 &&
                (u.set = p
                  ? (e, t) => Te(e, i, t, d ^ 4 ? a : v.set)
                  : (e, t) => (e[n] = t))),
            (s = (0, r[y])(
              d
                ? d < 4
                  ? p
                    ? a
                    : v[h]
                  : d > 4
                    ? void 0
                    : { get: v.get, set: v.set }
                : i,
              l,
            )),
            (c._ = 1),
            d ^ 4 || s === void 0
              ? he(s) &&
                (d > 4
                  ? g.unshift(s)
                  : d
                    ? p
                      ? (a = s)
                      : (v[h] = s)
                    : (i = s))
              : typeof s != `object` || !s
                ? oe(`Object expected`)
                : (he((o = s.get)) && (v.get = o),
                  he((o = s.set)) && (v.set = o),
                  he((o = s.init)) && g.unshift(o)));
        return (d || _e(e, i), v && E(i, n, v), p ? (d ^ 4 ? a : v) : i);
      }),
      (be = (e, t, n) => se(e, typeof t == `symbol` ? t : t + ``, n)),
      (xe = (e, t, n) => t.has(e) || oe(`Cannot ` + n)),
      (Se = (e, t) =>
        Object(t) === t
          ? e.has(t)
          : oe(`Cannot use the "in" operator on this value`)),
      (Ce = (e, t, n) => (
        xe(e, t, `read from private field`),
        n ? n.call(e) : t.get(e)
      )),
      (we = (e, t, n) =>
        t.has(e)
          ? oe(`Cannot add the same private member more than once`)
          : t instanceof WeakSet
            ? t.add(e)
            : t.set(e, n)),
      (Te = (e, t, n, r) => (
        xe(e, t, `write to private field`),
        r ? r.call(e, n) : t.set(e, n),
        n
      )),
      (Ee = (e, t, n) => (xe(e, t, `access private method`), n)));
  });
function Oe(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ke(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Ae([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let r = n < 0 ? e.length + n : n,
      [i] = e.splice(t, 1);
    e.splice(r, 0, i);
  }
  return e;
}
function je(e) {
  return typeof e == `object` && !!e;
}
function Me(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
function Ne(e, t) {
  return t ? (1e3 / t) * e : 0;
}
function Pe(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = Fs(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > Is && ++s < Ls);
  return o;
}
function Fe(e, t, n, r) {
  if (e === t && n === r) return F;
  let i = (t) => Pe(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : Fs(i(e), t, r));
}
function Ie(e, t) {
  return Xs(e) ? e[Ps(0, e.length, t)] : e;
}
function Le(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    a = !1,
    o = new WeakSet(),
    s = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = 0;
  function l(t) {
    (o.has(t) && (u.schedule(t), e()), c++, t(s));
  }
  let u = {
    schedule: (e, t = !1, a = !1) => {
      let s = a && i ? n : r;
      return (t && o.add(e), s.has(e) || s.add(e), e);
    },
    cancel: (e) => {
      (r.delete(e), o.delete(e));
    },
    process: (e) => {
      if (((s = e), i)) {
        a = !0;
        return;
      }
      ((i = !0),
        ([n, r] = [r, n]),
        n.forEach(l),
        t && R.value && R.value.frameloop[t].push(c),
        (c = 0),
        n.clear(),
        (i = !1),
        a && ((a = !1), u.process(e)));
    },
  };
  return u;
}
function Re(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = tc.reduce((e, n) => ((e[n] = Le(a, t ? n : void 0)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = P.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        P.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, nc), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    g = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: tc.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < tc.length; t++) o[tc[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
function ze() {
  ic = void 0;
}
function Be(e) {
  return typeof e == `string` ? e.split(`/*`)[0].includes(`var(--`) : !1;
}
function Ve(e) {
  return e == null;
}
function He(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
function Ue(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(hc)?.length || 0) + (e.match(Oc)?.length || 0) > 0
  );
}
function We(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Pc,
        (e) => (
          K.test(e)
            ? (r.color.push(a), i.push(Ac), n.push(K.parse(e)))
            : e.startsWith(Mc)
              ? (r.var.push(a), i.push(jc), n.push(e))
              : (r.number.push(a), i.push(kc), n.push(parseFloat(e))),
          ++a,
          Nc
        ),
      )
      .split(Nc),
    indexes: r,
    types: i,
  };
}
function Ge(e) {
  return We(e).values;
}
function Ke(e) {
  let { split: t, types: n } = We(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        t === kc
          ? (i += mc(e[a]))
          : t === Ac
            ? (i += K.transform(e[a]))
            : (i += e[a]);
      }
    return i;
  };
}
function qe(e) {
  let t = Ge(e);
  return Ke(e)(t.map(Fc));
}
function Je(e, t, n) {
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
function Ye({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Je(s, r, e + 1 / 3)), (a = Je(s, r, e)), (o = Je(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Xe(e, t) {
  return (n) => (n > 0 ? t : e);
}
function Ze(e) {
  let t = Rc(e);
  if (
    (Ds(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      `color-not-animatable`,
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === Dc && (n = Ye(n)), n);
}
function Qe(e, t) {
  return Bc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function $e(e, t) {
  return (n) => J(e, t, n);
}
function et(e) {
  return typeof e == `number`
    ? $e
    : typeof e == `string`
      ? lc(e)
        ? Xe
        : K.test(e)
          ? zc
          : Vc
      : Array.isArray(e)
        ? tt
        : typeof e == `object`
          ? K.test(e)
            ? zc
            : nt
          : Xe;
}
function tt(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => et(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function nt(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = et(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function rt(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    ((n[i] = e.values[o] ?? 0), r[a]++);
  }
  return n;
}
function it(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? J(e, t, n)
    : et(e)(e, t);
}
function at(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < Uc;) ((t += 50), (n = e.next(t)));
  return t >= Uc ? 1 / 0 : t;
}
function ot(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(at(r), Uc);
  return {
    type: `keyframes`,
    ease: (e) => r.next(i * e).value / t,
    duration: L(i),
  };
}
function st(e, t, n) {
  let r = Math.max(t - Wc, 0);
  return Ne(n - e(r), t - r);
}
function ct({
  duration: e = Y.duration,
  bounce: t = Y.bounce,
  velocity: n = Y.velocity,
  mass: r = Y.mass,
}) {
  let i, a;
  Ds(
    e <= I(Y.maxDuration),
    `Spring duration must be 10 seconds or less`,
    `spring-duration-limit`,
  );
  let o = 1 - t;
  ((o = M(Y.minDamping, Y.maxDamping, o)),
    (e = M(Y.minDuration, Y.maxDuration, L(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = ut(t, o),
            c = Math.exp(-i);
          return Gc - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = ut(t ** 2, o);
          return ((-i(t) + Gc > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1;
          return -Gc + r * i;
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = lt(i, a, s);
  if (((e = I(e)), isNaN(c)))
    return { stiffness: Y.stiffness, damping: Y.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
function lt(e, t, n) {
  let r = n;
  for (let n = 1; n < Kc; n++) r -= e(r) / t(r);
  return r;
}
function ut(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function dt(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function ft(e) {
  let t = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!dt(e, Jc) && dt(e, qc))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * M(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Y.mass, stiffness: i, damping: a };
    } else {
      let n = ct({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: Y.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function pt(e = Y.visualDuration, t = Y.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = ft({ ...n, velocity: -L(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = L(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? Y.restSpeed.granular : Y.restSpeed.default),
    (i ||= v ? Y.restDelta.granular : Y.restDelta.default));
  let y;
  if (h < 1) {
    let e = ut(_, h);
    y = (t) =>
      o -
      Math.exp(-h * _ * t) *
        (((m + h * _ * g) / e) * Math.sin(e * t) + g * Math.cos(e * t));
  } else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
  else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
  }
  let b = {
    calculatedDuration: (p && d) || null,
    next: (e) => {
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = e === 0 ? m : 0;
        h < 1 && (n = e === 0 ? I(m) : st(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(at(b), Uc),
        t = Hc((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return b;
}
function mt({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = pt({
          keyframes: [f.value, m(f.value)],
          velocity: st(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function ht(e, t, n) {
  let r = [],
    i = n || P.mix || it,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = js(Array.isArray(t) ? t[n] || F : t, a)), r.push(a));
  }
  return r;
}
function gt(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if (
    (N(
      a === t.length,
      `Both input and output ranges must be the same length`,
      `range-length`,
    ),
    a === 1)
  )
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = ht(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Ms(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(M(e[0], e[a - 1], t)) : l;
}
function _t(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Ms(0, t, r);
    e.push(J(n, 1, i));
  }
}
function vt(e) {
  let t = [0];
  return (_t(t, e.length - 1), t);
}
function yt(e, t) {
  return e.map((e) => e * t);
}
function bt(e, t) {
  return e.map(() => t || Ys).splice(0, e.length - 1);
}
function xt({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = Xs(r) ? r.map(ec) : ec(r),
    a = { done: !1, value: t[0] },
    o = gt(yt(n && n.length === t.length ? n : vt(t), e), t, {
      ease: Array.isArray(i) ? i : bt(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
function St(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(Xc),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
function Ct(e) {
  typeof e.type == `string` && (e.type = Zc[e.type]);
}
function wt(e) {
  return new el(e);
}
function Tt(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
function Et(e) {
  return e.includes(`scale`) ? 1 : 0;
}
function Dt(e, t) {
  if (!e || e === `none`) return Et(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = cl), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = rl), (i = t));
  }
  if (!i) return Et(t);
  let a = r[t],
    o = i[1].split(`,`).map(Ot);
  return typeof a == `function` ? a(o) : o[a];
}
function Ot(e) {
  return parseFloat(e.trim());
}
function kt(e) {
  let t = [];
  return (
    ml.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith(`scale`) ? 1 : 0));
    }),
    t
  );
}
function At() {
  if (vl) {
    let e = Array.from(gl).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = kt(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && w.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((vl = !1), (_l = !1), gl.forEach((e) => e.complete(yl)), gl.clear());
}
function jt() {
  gl.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (vl = !0));
  });
}
function Mt() {
  ((yl = !0), jt(), At(), (yl = !1));
}
function Nt(e, t, n) {
  xl(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
function Pt(e, t) {
  let n = Me(e);
  return () => Sl[t] ?? n();
}
function Ft(e, t) {
  if (e)
    return typeof e == `function`
      ? wl()
        ? Hc(e, t)
        : `ease-out`
      : Zs(e)
        ? Tl(e)
        : Array.isArray(e)
          ? e.map((e) => Ft(e, t) || El.easeOut)
          : El[e];
}
function It(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = Ft(s, i);
  (Array.isArray(d) && (u.easing = d), R.value && ac.waapi++);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  l && (f.pseudoElement = l);
  let p = e.animate(u, f);
  return (
    R.value &&
      p.finished.finally(() => {
        ac.waapi--;
      }),
    p
  );
}
function Lt(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Rt({ type: e, ...t }) {
  return Lt(e) && wl()
    ? e.applyToOptions(t)
    : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
function zt(e) {
  return e in Ol;
}
function Bt(e) {
  typeof e.ease == `string` && zt(e.ease) && (e.ease = Ol[e.ease]);
}
function Vt(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
function Ht(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
  } = e;
  if (!(t?.owner?.current instanceof HTMLElement)) return !1;
  let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
  return (
    Ml() &&
    n &&
    jl.has(n) &&
    (n !== `transform` || !c) &&
    !s &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
function Ut(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Wt(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Nl(i, t),
    s = Nl(a, t);
  return (
    Ds(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`,
      `value-not-animatable`,
    ),
    !o || !s ? !1 : Ut(e) || ((n === `spring` || Lt(n)) && r)
  );
}
function Gt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
function Kt(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
function qt(e) {
  let t = Rl.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Jt(e, t, n = 1) {
  N(
    n <= zl,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    `max-css-var-depth`,
  );
  let [r, i] = qt(e);
  if (!r) return;
  let a = w.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Os(e) ? parseFloat(e) : e;
  }
  return lc(i) ? Jt(i, t, n + 1) : i;
}
function Yt(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(Gl),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
function Xt(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Zt(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Xt(n, e);
}
function Qt({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
function $t(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function en(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = $t(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = $t(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function tn(e, t, n) {
  let r = e.getProps();
  return en(r, t, n === void 0 ? r.custom : n, e);
}
function D(e, t) {
  return new Zl(e, t);
}
function nn(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, D(n));
}
function rn(e) {
  return Ql(e) ? e[e.length - 1] || 0 : e;
}
function an(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = tn(e, t) || {};
  for (let t in ((i = { ...i, ...n }), i)) nn(e, t, rn(i[t]));
}
function on(e) {
  return !!(X(e) && e.add);
}
function sn(e, t) {
  let n = e.getValue(`willChange`);
  if (on(n)) return n.add(t);
  if (!n && P.WillChange) {
    let n = new P.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function cn(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
function ln(e) {
  return e.props[eu];
}
function un({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function dn(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? Xt(a, c) : c;
  let l = a?.reduceMotion;
  r && (a = r);
  let u = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (d && un(d, t))) continue;
    let o = { delay: n, ...Zt(a || {}, t) },
      c = r.get();
    if (
      c !== void 0 &&
      !r.isAnimating &&
      !Array.isArray(i) &&
      i === c &&
      !o.velocity
    )
      continue;
    let f = !1;
    if (w.MotionHandoffAnimation) {
      let n = ln(e);
      if (n) {
        let e = w.MotionHandoffAnimation(n, t, z);
        e !== null && ((o.startTime = e), (f = !0));
      }
    }
    sn(e, t);
    let p = l ?? e.shouldReduceMotion;
    r.start(Kl(t, r, i, p && ql.has(t) ? { type: !1 } : o, e, f));
    let m = r.animation;
    m && u.push(m);
  }
  if (o) {
    let t = () =>
      z.update(() => {
        o && an(e, o);
      });
    u.length ? Promise.all(u).then(t) : t();
  }
  return u;
}
function fn(e, t, n = {}) {
  let r = tn(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(dn(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return pn(e, t, r, a, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function pn(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        fn(c, t, {
          ...o,
          delay:
            n +
            (typeof r == `function` ? 0 : r) +
            Kt(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t)),
      ));
  return Promise.all(s);
}
function mn(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => fn(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = fn(e, t, n);
  else {
    let i = typeof t == `function` ? tn(e, t, n.custom) : t;
    r = Promise.all(dn(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
function hn(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(hc) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = su.has(t) ? 1 : 0;
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
function gn(e, t) {
  let n = fu(e);
  return (
    pu.has(n) || (n = q),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function _n(e) {
  return typeof e == `number`
    ? e === 0
    : e === null
      ? !0
      : e === `none` || e === `0` || ks(e);
}
function vn(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !mu.has(t) && We(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = gn(n, i);
}
function yn(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
function bn(e) {
  return je(e) && `offsetHeight` in e;
}
function xn() {
  return Z.x || Z.y;
}
function Sn(e) {
  return e === `x` || e === `y`
    ? Z[e]
      ? null
      : ((Z[e] = !0),
        () => {
          Z[e] = !1;
        })
    : Z.x || Z.y
      ? null
      : ((Z.x = Z.y = !0),
        () => {
          Z.x = Z.y = !1;
        });
}
function Cn(e, t) {
  let n = yn(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function wn(e) {
  return !(e.pointerType === `touch` || xn());
}
function Tn(e, t, n = {}) {
  let [r, i, a] = Cn(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            w.removeEventListener(`pointerup`, c),
            w.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            w.addEventListener(`pointerup`, c, i),
            w.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            s(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!wn(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` &&
            ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i,
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
function En(e) {
  return Su.has(e.tagName) || e.isContentEditable === !0;
}
function Dn(e) {
  return Cu.has(e.tagName) || e.isContentEditable === !0;
}
function On(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function kn(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
function An(e) {
  return xu(e) && !xn();
}
function jn(e, t, n = {}) {
  let [r, i, a] = Cn(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!An(e) || Eu.has(e)) return;
      (wu.add(r), n.stopPropagation && Eu.add(e));
      let a = t(r, e),
        o = (e, t) => {
          (w.removeEventListener(`pointerup`, s),
            w.removeEventListener(`pointercancel`, c),
            wu.has(r) && wu.delete(r),
            An(e) && typeof a == `function` && a(e, { success: t }));
        },
        s = (e) => {
          o(
            e,
            r === w || r === document || n.useGlobalTarget || bu(r, e.target),
          );
        },
        c = (e) => {
          o(e, !1);
        };
      (w.addEventListener(`pointerup`, s, i),
        w.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? w : e).addEventListener(`pointerdown`, o, i),
        bn(e) &&
          (e.addEventListener(`focus`, (e) => Tu(e, i)),
          !En(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function Mn(e) {
  return je(e) && `ownerSVGElement` in e;
}
function Nn({ target: e, borderBoxSize: t }) {
  Du.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return Au(e, t);
      },
      get height() {
        return ju(e, t);
      },
    });
  });
}
function Pn(e) {
  e.forEach(Nn);
}
function Fn() {
  typeof ResizeObserver > `u` || (Ou = new ResizeObserver(Pn));
}
function In(e, t) {
  Ou || Fn();
  let n = yn(e);
  return (
    n.forEach((e) => {
      let n = Du.get(e);
      (n || ((n = new Set()), Du.set(e, n)), n.add(t), Ou?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Du.get(e);
        (n?.delete(t), n?.size || Ou?.unobserve(e));
      });
    }
  );
}
function Ln() {
  ((Nu = () => {
    let e = {
      get width() {
        return w.innerWidth;
      },
      get height() {
        return w.innerHeight;
      },
    };
    Mu.forEach((t) => t(e));
  }),
    w.addEventListener(`resize`, Nu));
}
function Rn(e) {
  return (
    Mu.add(e),
    Nu || Ln(),
    () => {
      (Mu.delete(e),
        !Mu.size &&
          typeof Nu == `function` &&
          (w.removeEventListener(`resize`, Nu), (Nu = void 0)));
    }
  );
}
function zn(e, t) {
  return typeof e == `function` ? Rn(e) : In(e, t);
}
function Bn(e, t) {
  let n,
    r = () => {
      let { currentTime: r } = t,
        i = (r === null ? 0 : r.value) / 100;
      (n !== i && e(i), (n = i));
    };
  return (z.preUpdate(r, !0), () => B(r));
}
function Vn(e) {
  return Mn(e) && e.tagName === `svg`;
}
function Hn(e, t) {
  if (e === `first`) return 0;
  {
    let n = t - 1;
    return e === `last` ? n : n / 2;
  }
}
function Un(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, a) => {
    let o = typeof n == `number` ? n : Hn(n, a),
      s = e * Math.abs(o - i);
    if (r) {
      let t = a * e;
      s = ec(r)(s / t) * t;
    }
    return t + s;
  };
}
function Wn(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = gt(i, a, o);
  return t ? s(r) : s;
}
function Gn(e, t, n = {}) {
  let r = e.get(),
    i = null,
    a = r,
    o,
    s = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    c = () => {
      i &&= (i.stop(), null);
    },
    l = () => {
      c();
      let t = qn(e.get()),
        r = qn(a);
      t !== r &&
        (i = new el({
          keyframes: [t, r],
          velocity: e.getVelocity(),
          type: `spring`,
          restDelta: 0.001,
          restSpeed: 0.01,
          ...n,
          onUpdate: o,
        }));
    };
  if (
    (e.attach((t, n) => {
      ((a = t),
        (o = (e) => n(Kn(e, s))),
        z.postRender(() => {
          (l(),
            e.events.animationStart?.notify(),
            i?.then(() => {
              e.events.animationComplete?.notify();
            }));
        }));
    }, c),
    X(t))
  ) {
    let n = t.on(`change`, (t) => e.set(Kn(t, s))),
      r = e.on(`destroy`, n);
    return () => {
      (n(), r());
    };
  }
  return c;
}
function Kn(e, t) {
  return t ? e + t : e;
}
function qn(e) {
  return typeof e == `number` ? e : parseFloat(e);
}
function Jn(e, t, n) {
  let r = () => t.set(n()),
    i = () => z.preRender(r, !1, !0),
    a = e.map((e) => e.on(`change`, i));
  t.on(`destroy`, () => {
    (a.forEach((e) => e()), B(r));
  });
}
function Yn(e) {
  let t = [];
  Xl.current = t;
  let n = e();
  Xl.current = void 0;
  let r = D(n);
  return (Jn(t, r, e), r);
}
function Xn(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Zn(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Qn(e) {
  return Xn(e.animate) || Vu.some((t) => Zn(e[t]));
}
function $n(e) {
  return !!(Qn(e) || e.variants);
}
function er(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (X(i)) e.addValue(r, i);
    else if (X(a)) e.addValue(r, D(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, D(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
function tr() {
  if (((Uu.current = !0), Wu))
    if (w.matchMedia) {
      let e = w.matchMedia(`(prefers-reduced-motion)`),
        t = () => (Hu.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else Hu.current = !1;
}
function nr(e) {
  Ku = e;
}
function rr() {
  return Ku;
}
function ir({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ar({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function or(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function sr(e) {
  return e === void 0 || e === 1;
}
function cr({ scale: e, scaleX: t, scaleY: n }) {
  return !sr(e) || !sr(t) || !sr(n);
}
function lr(e) {
  return (
    cr(e) ||
    ur(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function ur(e) {
  return dr(e.x) || dr(e.y);
}
function dr(e) {
  return e && e !== `0%`;
}
function fr(e, t, n) {
  return n + t * (e - n);
}
function pr(e, t, n, r, i) {
  return (i !== void 0 && (e = fr(e, i, r)), fr(e, n, r) + t);
}
function mr(e, t = 0, n = 1, r, i) {
  ((e.min = pr(e.min, t, n, r, i)), (e.max = pr(e.max, t, n, r, i)));
}
function hr(e, { x: t, y: n }) {
  (mr(e.x, t.translate, t.scale, t.originPoint),
    mr(e.y, n.translate, n.scale, n.originPoint));
}
function gr(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        yr(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), hr(e, o)),
      r && lr(a.latestValues) && yr(e, a.latestValues));
  }
  (t.x < Zu && t.x > Xu && (t.x = 1), t.y < Zu && t.y > Xu && (t.y = 1));
}
function _r(e, t) {
  ((e.min += t), (e.max += t));
}
function vr(e, t, n, r, i = 0.5) {
  mr(e, t, n, J(e.min, e.max, i), r);
}
function yr(e, t) {
  (vr(e.x, t.x, t.scaleX, t.scale, t.originX),
    vr(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function br(e, t) {
  return ir(or(e.getBoundingClientRect(), t));
}
function xr(e, t, n) {
  let r = br(e, n),
    { scroll: i } = t;
  return (i && (_r(r.x, i.offset.x), _r(r.y, i.offset.y)), r);
}
function Sr(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < $u; a++) {
    let o = ul[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === (o.startsWith(`scale`) ? 1 : 0);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = _u(s, ou[o]);
      if (!c) {
        i = !1;
        let t = Qu[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function Cr(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (dl.has(e)) {
      o = !0;
      continue;
    } else if (sc(e)) {
      i[e] = n;
      continue;
    } else {
      let t = _u(n, ou[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Sr(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function wr(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function Tr(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function Er(e) {
  for (let t in e) ((nd[t] = e[t]), sc(t) && (nd[t].isCSSVariable = !0));
}
function Dr(e, { layout: t, layoutId: n }) {
  return (
    dl.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!nd[e] || e === `opacity`))
  );
}
function Or(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (X(r[t]) ||
      (i && X(i[t])) ||
      Dr(t, e) ||
      n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function kr(e) {
  return w.getComputedStyle(e);
}
function Ar(e, t) {
  return e in t;
}
function jr(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? ad : od;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
function Mr(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
  },
  c,
  l,
  u,
) {
  if ((Cr(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = u?.transformBox ?? `fill-box`),
      delete d.transformBox));
  for (let e of sd) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && jr(d, i, a, o, !1));
}
function Nr(e, t, n, r) {
  for (let n in (wr(e, t, void 0, r), t.attrs))
    e.setAttribute(cd.has(n) ? n : cn(n), t.attrs[n]);
}
function Pr(e, t, n) {
  let r = Or(e, t, n);
  for (let n in e)
    if (X(e[n]) || X(t[n])) {
      let t =
        ul.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function Fr(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && Fr(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < dd; n++) {
    let r = Vu[n],
      i = e.props[r];
    (Zn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Ir(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Lr(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => mn(e, t, n)));
}
function Rr(e) {
  let t = Lr(e),
    n = Vr(),
    r = !0,
    i = (t) => (n, r) => {
      let i = tn(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function a(n) {
    t = n(e);
  }
  function o(a) {
    let { props: o } = e,
      s = Fr(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < pd; t++) {
      let f = fd[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = Zn(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) ||
          (!m && !p.prevProp) ||
          Xn(m) ||
          typeof m == `boolean`)
      )
        continue;
      if (f === `exit` && p.isActive && g !== !0) {
        p.prevResolvedValues && (u = { ...u, ...p.prevResolvedValues });
        continue;
      }
      let v = zr(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {});
      g === !1 && (S = {});
      let { prevResolvedValues: C = {} } = p,
        ee = { ...C, ...S },
        w = (t) => {
          ((y = !0),
            l.has(t) && ((b = !0), l.delete(t)),
            (p.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in ee) {
        let t = S[e],
          n = C[e];
        if (u.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = Ql(t) && Ql(n) ? !Ir(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : w(e)
            : t !== void 0 && l.has(e)
              ? w(e)
              : (p.protectedKeys[e] = !0));
      }
      ((p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive && (u = { ...u, ...S }),
        r && e.blockInitialAnimation && (y = !1));
      let T = _ && v;
      y &&
        (!T || b) &&
        c.push(
          ...x.map((t) => {
            let n = { type: f };
            if (
              typeof t == `string` &&
              r &&
              !T &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              let { parent: r } = e,
                i = tn(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = Kt(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          }),
        );
    }
    if (l.size) {
      let t = {};
      if (typeof o.initial != `boolean`) {
        let n = tn(e, Array.isArray(o.initial) ? o.initial[0] : o.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (l.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        c.push({ animation: t }));
    }
    let f = !!c.length;
    return (
      r &&
        (o.initial === !1 || o.initial === o.animate) &&
        !e.manuallyAnimateOnMount &&
        (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    );
  }
  function s(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let i = o(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      n = Vr();
    },
  };
}
function zr(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Ir(t, e) : !1;
}
function Br(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Vr() {
  return {
    animate: Br(!0),
    whileInView: Br(),
    whileHover: Br(),
    whileTap: Br(),
    whileDrag: Br(),
    whileFocus: Br(),
    exit: Br(),
  };
}
function Hr(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function O(e, t) {
  (Hr(e.x, t.x), Hr(e.y, t.y));
}
function Ur(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function k(e) {
  return e.max - e.min;
}
function Wr(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Gr(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = J(t.min, t.max, e.origin)),
    (e.scale = k(n) / k(t)),
    (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= hd && e.scale <= gd) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= vd && e.translate <= yd) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Kr(e, t, n, r) {
  (Gr(e.x, t.x, n.x, r ? r.originX : void 0),
    Gr(e.y, t.y, n.y, r ? r.originY : void 0));
}
function qr(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + k(t)));
}
function Jr(e, t, n) {
  (qr(e.x, t.x, n.x), qr(e.y, t.y, n.y));
}
function Yr(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + k(t)));
}
function Xr(e, t, n) {
  (Yr(e.x, t.x, n.x), Yr(e.y, t.y, n.y));
}
function Zr(e, t, n, r, i) {
  return (
    (e -= t),
    (e = fr(e, 1 / n, r)),
    i !== void 0 && (e = fr(e, 1 / i, r)),
    e
  );
}
function Qr(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (W.test(t) && ((t = parseFloat(t)), (t = J(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = J(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = Zr(e.min, t, n, s, i)),
    (e.max = Zr(e.max, t, n, s, i)));
}
function $r(e, t, [n, r, i], a, o) {
  Qr(e, t[n], t[r], t[i], t.scale, a, o);
}
function ei(e, t, n, r) {
  ($r(e.x, t, bd, n ? n.x : void 0, r ? r.x : void 0),
    $r(e.y, t, xd, n ? n.y : void 0, r ? r.y : void 0));
}
function ti(e) {
  return e.translate === 0 && e.scale === 1;
}
function ni(e) {
  return ti(e.x) && ti(e.y);
}
function ri(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ii(e, t) {
  return ri(e.x, t.x) && ri(e.y, t.y);
}
function ai(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function oi(e, t) {
  return ai(e.x, t.x) && ai(e.y, t.y);
}
function si(e) {
  return k(e.x) / k(e.y);
}
function ci(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function A(e) {
  return [e(`x`), e(`y`)];
}
function li(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
function ui(e, t, n, r, i, a) {
  i
    ? ((e.opacity = J(0, n.opacity ?? 1, Ed(r))),
      (e.opacityExit = J(t.opacity ?? 1, 0, Dd(r))))
    : a && (e.opacity = J(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < Cd; i++) {
    let a = `border${Sd[i]}Radius`,
      o = di(t, a),
      s = di(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Td(o) === Td(s)
        ? ((e[a] = Math.max(J(wd(o), wd(s), r), 0)),
          (W.test(s) || W.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function di(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
function fi(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ms(e, t, r)));
}
function pi(e, t, n) {
  let r = X(e) ? e : D(e);
  return (r.start(Kl(``, r, t, n)), r.animation);
}
function mi(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function hi(e, t) {
  let n = H.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (B(r), e(a - t));
    };
  return (z.setup(r, !0), () => B(r));
}
function gi(e) {
  return X(e) ? e.get() : e;
}
function _i(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function vi(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = ln(t);
  if (w.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    w.MotionCancelOptimisedAnimation(n, `transform`, z, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && vi(r);
}
function yi({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = Fd++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            R.value &&
              (Md.nodes =
                Md.calculatedTargetDeltas =
                Md.calculatedProjections =
                  0),
            this.nodes.forEach(Si),
            this.nodes.forEach(ki),
            this.nodes.forEach(Ai),
            this.nodes.forEach(Ci),
            R.addProjectionMetrics && R.addProjectionMetrics(Md));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new kd());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new Ns()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = Mn(t) && !Vn(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (z.read(() => {
          r = w.innerWidth;
        }),
          e(t, () => {
            let e = w.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = hi(i, 250)),
              jd.hasAnimatedSinceResize &&
                ((jd.hasAnimatedSinceResize = !1), this.nodes.forEach(Oi)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || Id,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  i.getProps(),
                c = !this.targetLayout || !oi(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...Zt(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l));
              } else
                (t || Oi(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        B(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(ji),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (w.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          vi(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Ti));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ei);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Di),
            this.nodes.forEach(bi),
            this.nodes.forEach(xi))
          : this.nodes.forEach(Ei),
        this.clearAllSnapshots());
      let e = H.now();
      ((V.delta = M(0, 1e3 / 60, e - V.timestamp)),
        (V.timestamp = e),
        (V.isProcessing = !0),
        rc.update.process(V),
        rc.preRender.process(V),
        rc.render.process(V),
        (V.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), vu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(wi), this.sharedNodes.forEach(Mi));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !k(this.snapshot.measuredBox.x) &&
          !k(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !ni(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || lr(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        Ri(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return Q();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Bi))) {
        let { scroll: e } = this.root;
        e && (_r(t.x, e.offset.x), _r(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = Q();
      if ((O(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && O(t, e), _r(t.x, i.offset.x), _r(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = Q();
      O(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        (!t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          yr(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
          lr(r.latestValues) && yr(n, r.latestValues));
      }
      return (lr(this.latestValues) && yr(n, this.latestValues), n);
    }
    removeTransform(e) {
      let t = Q();
      O(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !lr(n.latestValues)) continue;
        cr(n.latestValues) && n.updateSnapshot();
        let r = Q();
        (O(r, n.measurePageBox()),
          ei(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r));
      }
      return (lr(this.latestValues) && ei(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 ? !0 : e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== V.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = V.timestamp;
      let a = this.getClosestProjectingParent();
      (a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (a && a.layout
            ? this.createRelativeTarget(
                a,
                this.layout.layoutBox,
                a.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Q()), (this.targetWithTransforms = Q())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Jr(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : O(this.target, this.layout.layoutBox),
                hr(this.target, this.targetDelta))
              : O(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          R.value && Md.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        cr(this.parent.latestValues) ||
        ur(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Q()),
        (this.relativeTargetOrigin = Q()),
        Xr(this.relativeTargetOrigin, t, n),
        O(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === V.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      O(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (gr(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Q())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ur(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ur(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Kr(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !ci(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ci(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        R.value && Md.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Lu()),
        (this.projectionDelta = Lu()),
        (this.projectionDeltaWithTransform = Lu()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = Lu();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = Q(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Ii));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (Ni(a.x, e.x, n),
          Ni(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Xr(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Fi(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && ii(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= Q()),
            O(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), ui(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (B(this.pendingAnimation), void 0)),
        (this.pendingAnimation = z.update(() => {
          ((jd.hasAnimatedSinceResize = !0),
            ac.layout++,
            (this.motionValue ||= D(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = pi(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onStop: () => {
                ac.layout--;
              },
              onComplete: () => {
                (ac.layout--,
                  e.onComplete && e.onComplete(),
                  this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pd),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          zi(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || Q();
          let t = k(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = k(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (O(t, n),
          yr(t, i),
          Kr(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new Ad()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return e ? e.lead === this : !0;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && _i(`z`, e, r, this.animationValues);
      for (let t = 0; t < Nd.length; t++)
        (_i(`rotate${Nd[t]}`, e, r, this.animationValues),
          _i(`skew${Nd[t]}`, e, r, this.animationValues));
      for (let t in (e.render(), r))
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = gi(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity =
            this.latestValues.opacity === void 0
              ? 1
              : this.latestValues.opacity),
          (e.pointerEvents = gi(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !lr(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = li(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      for (let t in ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
      r.animationValues
        ? (e.opacity =
            r === this
              ? (i.opacity ?? this.latestValues.opacity ?? 1)
              : this.preserveOpacity
                ? this.latestValues.opacity
                : i.opacityExit)
        : (e.opacity =
            r === this
              ? i.opacity === void 0
                ? ``
                : i.opacity
              : i.opacityExit === void 0
                ? 0
                : i.opacityExit),
      nd)) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = nd[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else
          s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId &&
        (e.pointerEvents = r === this ? gi(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Ti),
        this.root.sharedNodes.clear());
    }
  };
}
function bi(e) {
  e.updateLayout();
}
function xi(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? A((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = k(r);
          ((r.min = n[e].min), (r.max = r.min + i));
        })
      : zi(i, t.layoutBox, n) &&
        A((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = k(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = Lu();
    Kr(o, n, t.layoutBox);
    let s = Lu();
    a ? Kr(s, e.applyTransform(r, !0), t.measuredBox) : Kr(s, n, t.layoutBox);
    let c = !ni(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = Q();
          Xr(o, t.layoutBox, i.layoutBox);
          let s = Q();
          (Xr(s, n, a.layoutBox),
            oi(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = o),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Si(e) {
  (R.value && Md.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Ci(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function wi(e) {
  e.clearSnapshot();
}
function Ti(e) {
  e.clearMeasurements();
}
function Ei(e) {
  e.isLayoutDirty = !1;
}
function Di(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function Oi(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function ki(e) {
  e.resolveTargetDelta();
}
function Ai(e) {
  e.calcProjection();
}
function ji(e) {
  e.resetSkewAndRotation();
}
function Mi(e) {
  e.removeLeadSnapshot();
}
function Ni(e, t, n) {
  ((e.translate = J(t.translate, 0, n)),
    (e.scale = J(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Pi(e, t, n, r) {
  ((e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r)));
}
function Fi(e, t, n, r) {
  (Pi(e.x, t.x, n.x, r), Pi(e.y, t.y, n.y, r));
}
function Ii(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
function Li(e) {
  ((e.min = Rd(e.min)), (e.max = Rd(e.max)));
}
function Ri(e) {
  (Li(e.x), Li(e.y));
}
function zi(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !Wr(si(t), si(n), 0.2))
  );
}
function Bi(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
function Vi() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(Bd);
  return {
    add: (r) => {
      (e.add(r), t.set(r, r.addEventListener(`willUpdate`, n)));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      (i && (i(), t.delete(r)), n());
    },
    dirty: n,
  };
}
function Hi(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function Ui(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Hi(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Hi(e[t], null);
        }
      };
  };
}
function Wi(...e) {
  return s(Ui(...e), e);
}
function Gi({
  children: e,
  isPresent: n,
  anchorX: r,
  anchorY: i,
  root: a,
  pop: o,
}) {
  let s = p(),
    c = l(null),
    u = l({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: d } = t($),
    f = Wi(c, e.props?.ref ?? e?.ref);
  return (
    ee(() => {
      let {
        width: e,
        height: t,
        top: l,
        left: f,
        right: p,
        bottom: m,
      } = u.current;
      if (n || o === !1 || !c.current || !e || !t) return;
      let h = r === `left` ? `left: ${f}` : `right: ${p}`,
        g = i === `bottom` ? `bottom: ${m}` : `top: ${l}`;
      c.current.dataset.motionPopId = s;
      let _ = document.createElement(`style`);
      d && (_.nonce = d);
      let v = a ?? document.head;
      return (
        v.appendChild(_),
        _.sheet &&
          _.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),
        () => {
          v.contains(_) && v.removeChild(_);
        }
      );
    }, [n]),
    y(Ud, {
      isPresent: n,
      childRef: c,
      sizeRef: u,
      pop: o,
      children: o === !1 ? e : v(e, { ref: f }),
    })
  );
}
function j(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ki() {
  return new Map();
}
function qi(e = !0) {
  let n = t(Es);
  if (n === null) return [!0, null];
  let { isPresent: r, onExitComplete: i, register: a } = n,
    o = p();
  c(() => {
    if (e) return a(o);
  }, [e]);
  let l = s(() => e && i && i(o), [o, i, e]);
  return !r && i ? [!1, l] : [!0];
}
function Ji(e) {
  let t = [];
  return (
    r.forEach(e, (e) => {
      b(e) && t.push(e);
    }),
    t
  );
}
function Yi() {
  let e = l(!1);
  return (
    Ts(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function Xi() {
  let e = Yi(),
    [t, n] = i(0),
    r = s(() => {
      e.current && n(t + 1);
    }, [t]);
  return [s(() => z.postRender(r), [r]), t];
}
function Zi() {
  if ($d) return;
  let e = {};
  for (let t in Qd) e[t] = { isEnabled: (e) => Qd[t].some((t) => !!e[t]) };
  (nr(e), ($d = !0));
}
function Qi() {
  return (Zi(), rr());
}
function $i(e) {
  let t = Qi();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  nr(t);
}
function ea(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    ef.has(e)
  );
}
function ta(e) {
  typeof e == `function` && (tf = (t) => (t.startsWith(`on`) ? !ea(t) : e(t)));
}
function na(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      ((tf(i) ||
        (n === !0 && ea(i)) ||
        (!t && !ea(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function ra({ children: e, isValidProp: n, ...r }) {
  n && ta(n);
  let i = t($);
  ((r = { ...i, ...r }),
    (r.transition = Xt(r.transition, i.transition)),
    (r.isStatic = j(() => r.isStatic)));
  let a = _(
    () => r,
    [
      JSON.stringify(r.transition),
      r.transformPagePoint,
      r.reducedMotion,
      r.skipAnimations,
    ],
  );
  return y($.Provider, { value: a, children: e });
}
function ia({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: aa(n, r, i, e), renderState: t() };
}
function aa(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = gi(a[e]);
  let { initial: o, animate: s } = e,
    c = Qn(e),
    l = $n(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Xn(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = en(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
function oa(e, t) {
  if (Qn(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || Zn(t) ? t : void 0,
      animate: Zn(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function sa(e) {
  let { initial: n, animate: r } = oa(e, t(nf));
  return _(() => ({ initial: n, animate: r }), [ca(n), ca(r)]);
}
function ca(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
function la(e, t, n) {
  for (let r in t) !X(t[r]) && !Dr(r, n) && (e[r] = t[r]);
}
function ua({ transformTemplate: e }, t) {
  return _(() => {
    let n = of();
    return (Cr(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function da(e, t) {
  let n = e.style || {},
    r = {};
  return (la(r, n, e), Object.assign(r, ua(e, t)), r);
}
function fa(e, t) {
  let n = {},
    r = da(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function pa(e, t, n, r) {
  let i = _(() => {
    let n = sf();
    return (
      Mr(n, t, ld(r), e.transformTemplate, e.style),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (la(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
function ma(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(cf.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ha(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o ?? ma(e)) ? pa : fa)(t, r, i, e),
    c = na(t, typeof e == `string`, a),
    l = e === u ? {} : { ...c, ...s, ref: n },
    { children: d } = t,
    f = _(() => (X(d) ? d.get() : d), [d]);
  return g(e, { ...l, children: f });
}
function ga(e, t, n) {
  let r = l(n);
  ee(() => {
    r.current = n;
  });
  let i = l(null);
  return s(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`)
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      else a && (a.current = n);
    },
    [t],
  );
}
function _a(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function va(e, n, r, i, a, o) {
  let { visualElement: s } = t(nf),
    u = t(Zd),
    d = t(Es),
    f = t($),
    p = f.reducedMotion,
    m = f.skipAnimations,
    h = l(null),
    g = l(!1);
  ((i ||= u.renderer),
    !h.current &&
      i &&
      ((h.current = i(e, {
        visualState: n,
        parent: s,
        props: r,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: p,
        skipAnimations: m,
        isSVG: o,
      })),
      g.current && h.current && (h.current.manuallyAnimateOnMount = !0)));
  let _ = h.current,
    v = t(af);
  _ &&
    !_.projection &&
    a &&
    (_.type === `html` || _.type === `svg`) &&
    ya(h.current, r, a, v);
  let y = l(!1);
  ee(() => {
    _ && y.current && _.update(r, d);
  });
  let b = r[eu],
    x = l(
      !!b &&
        !w.MotionHandoffIsComplete?.(b) &&
        w.MotionHasOptimisedAnimation?.(b),
    );
  return (
    Ts(() => {
      ((g.current = !0),
        _ &&
          ((y.current = !0),
          (w.MotionIsMounted = !0),
          _.updateFeatures(),
          _.scheduleRenderMicrotask(),
          x.current && _.animationState && _.animationState.animateChanges()));
    }),
    c(() => {
      _ &&
        (!x.current && _.animationState && _.animationState.animateChanges(),
        (x.current &&=
          (queueMicrotask(() => {
            w.MotionHandoffMarkAsComplete?.(b);
          }),
          !1)),
        (_.enteringChildren = void 0));
    }),
    _
  );
}
function ya(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutCrossfade: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : ba(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && _a(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: u,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function ba(e) {
  if (e) return e.options.allowProjection === !1 ? ba(e.parent) : e.projection;
}
function xa(e, { forwardMotionProps: n = !1, type: r } = {}, i, a) {
  i && $i(i);
  let o = r ? r === `svg` : ma(e),
    s = o ? uf : lf;
  function c(r, c) {
    let l,
      u = { ...t($), ...r, layoutId: Sa(r) },
      { isStatic: d } = u,
      f = sa(r),
      p = s(r, d);
    if (!d && ws) {
      Ca(u, i);
      let t = wa(u);
      ((l = t.MeasureLayout),
        (f.visualElement = va(e, p, u, a, t.ProjectionNode, o)));
    }
    return h(nf.Provider, {
      value: f,
      children: [
        l && f.visualElement
          ? y(l, { visualElement: f.visualElement, ...u })
          : null,
        ha(e, r, ga(p, f.visualElement, c), p, d, n, o),
      ],
    });
  }
  c.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let l = C(c);
  return ((l[df] = e), l);
}
function Sa({ layoutId: e }) {
  let n = t(Cs).id;
  return n && e !== void 0 ? n + `-` + e : e;
}
function Ca(e, n) {
  t(Zd).strict;
}
function wa(e) {
  let { drag: t, layout: n } = Qi();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Ta(e, t) {
  if (typeof Proxy > `u`) return xa;
  let n = new Map(),
    r = (n, r) => xa(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) =>
      a === `create`
        ? r
        : (n.has(a) || n.set(a, xa(a, void 0, e, t)), n.get(a)),
  });
}
function Ea(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
function Da(e, t, n, r) {
  return mi(e, t, gf(n), r);
}
function Oa(e, t) {
  let n = _f(e.x, t.x),
    r = _f(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function ka(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Aa(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ja({ point: e }, t) {
  return {
    point: e,
    delta: Aa(e, Na(t)),
    offset: Aa(e, Ma(t)),
    velocity: Pa(t, 0.1),
  };
}
function Ma(e) {
  return e[0];
}
function Na(e) {
  return e[e.length - 1];
}
function Pa(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Na(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > I(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > I(t) * 2 &&
    (r = e[1]);
  let a = L(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Fa(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? J(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ia(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function La(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ia(e.x, n, i), y: Ia(e.y, t, r) };
}
function Ra(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function za(e, t) {
  return { x: Ra(e.x, t.x), y: Ra(e.y, t.y) };
}
function Ba(e, t) {
  let n = 0.5,
    r = k(e),
    i = k(t);
  return (
    i > r
      ? (n = Ms(t.min, t.max - r, e.min))
      : r > i && (n = Ms(e.min, e.max - i, t.min)),
    M(0, 1, n)
  );
}
function Va(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
function Ha(e = Sf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Sf),
    { x: Ua(e, `left`, `right`), y: Ua(e, `top`, `bottom`) }
  );
}
function Ua(e, t, n) {
  return { min: Wa(e, t), max: Wa(e, n) };
}
function Wa(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
function Ga(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function Ka(e, t, n) {
  let r = zn(e, Ga(n)),
    i = zn(t, Ga(n));
  return () => {
    (r(), i());
  };
}
function qa(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ja(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
function Ya(e) {
  let [n, r] = qi(),
    i = t(Cs);
  return y(kf, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: t(af),
    isPresent: n,
    safeToRemove: r,
  });
}
function Xa(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && z.postRender(() => i(t, Ea(t)));
}
function Za(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && z.postRender(() => i(t, Ea(t)));
}
function Qa({ root: e, ...t }) {
  let n = e || document;
  Ff.has(n) || Ff.set(n, {});
  let r = Ff.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(Lf, { root: e, ...t })),
    r[i]
  );
}
function $a(e, t, n) {
  let r = Qa(t);
  return (
    Pf.set(e, n),
    r.observe(e),
    () => {
      (Pf.delete(e), r.unobserve(e));
    }
  );
}
function eo({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
function to(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = qf[t],
    s = i.current,
    c = n.time;
  ((i.current = e[`scroll${o}`]),
    (i.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Ms(0, i.scrollLength, i.current)));
  let l = r - c;
  i.velocity = l > Wf ? 0 : Ne(i.current - s, l);
}
function no(e, t, n) {
  (to(e, `x`, t, n), to(e, `y`, t, n), (t.time = n));
}
function ro(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t;)
    if (bn(r))
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === `svg`) {
      let e = r.getBoundingClientRect();
      r = r.parentElement;
      let t = r.getBoundingClientRect();
      ((n.x += e.left - t.left), (n.y += e.top - t.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: e, y: t } = r.getBBox();
      ((n.x += e), (n.y += t));
      let i = null,
        a = r.parentNode;
      for (; !i;) (a.tagName === `svg` && (i = a), (a = r.parentNode));
      r = i;
    } else break;
  return n;
}
function io(e, t, n = 0) {
  let r = 0;
  if ((e in Jf && (e = Jf[e]), typeof e == `string`)) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (typeof e == `number` && (r = t * e), n + r);
}
function ao(e, t, n, r) {
  let i = Array.isArray(e) ? e : Yf,
    a = 0,
    o = 0;
  return (
    typeof e == `number`
      ? (i = [e, e])
      : typeof e == `string` &&
        ((e = e.trim()),
        (i = e.includes(` `) ? e.split(` `) : [e, Jf[e] ? e : `0`])),
    (a = io(i[0], n, r)),
    (o = io(i[1], t)),
    a - o
  );
}
function oo(e) {
  return `getBBox` in e && e.tagName !== `svg`
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function so(e, t, n) {
  let { offset: r = Xf.All } = n,
    { target: i = e, axis: a = `y` } = n,
    o = a === `y` ? `height` : `width`,
    s = i === e ? Zf : ro(i, e),
    c = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : oo(i),
    l = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let u = !t[a].interpolate,
    d = r.length;
  for (let e = 0; e < d; e++) {
    let n = ao(r[e], l[o], c[o], s[a]);
    (!u && n !== t[a].interpolatorOffsets[e] && (u = !0), (t[a].offset[e] = n));
  }
  (u &&
    ((t[a].interpolate = gt(t[a].offset, vt(r), { clamp: !1 })),
    (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = M(0, 1, t[a].interpolate(t[a].current))));
}
function co(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e;)
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function lo(e, t, n, r = {}) {
  return {
    measure: (t) => {
      (co(e, r.target, n), no(e, n, t), (r.offset || r.target) && so(e, n, r));
    },
    notify: () => t(n),
  };
}
function uo(
  e,
  {
    container: t = document.scrollingElement,
    trackContentSize: n = !1,
    ...r
  } = {},
) {
  if (!t) return F;
  let i = ep.get(t);
  i || ((i = new Set()), ep.set(t, i));
  let a = lo(t, e, Kf(), r);
  if ((i.add(a), !Qf.has(t))) {
    let e = () => {
        for (let e of i) e.measure(V.timestamp);
        z.preUpdate(n);
      },
      n = () => {
        for (let e of i) e.notify();
      },
      r = () => z.read(e);
    Qf.set(t, r);
    let a = rp(t);
    (w.addEventListener(`resize`, r),
      t !== document.documentElement && $f.set(t, zn(t, r)),
      a.addEventListener(`scroll`, r),
      r());
  }
  if (n && !np.has(t)) {
    let e = Qf.get(t),
      n = { width: t.scrollWidth, height: t.scrollHeight };
    tp.set(t, n);
    let r = z.read(() => {
      let r = t.scrollWidth,
        i = t.scrollHeight;
      (n.width !== r || n.height !== i) && (e(), (n.width = r), (n.height = i));
    }, !0);
    np.set(t, r);
  }
  let o = Qf.get(t);
  return (
    z.read(o, !1, !0),
    () => {
      B(o);
      let e = ep.get(t);
      if (!e || (e.delete(a), e.size)) return;
      let n = Qf.get(t);
      (Qf.delete(t),
        n &&
          (rp(t).removeEventListener(`scroll`, n),
          $f.get(t)?.(),
          w.removeEventListener(`resize`, n)));
      let r = np.get(t);
      (r && (B(r), np.delete(t)), tp.delete(t));
    }
  );
}
function fo(e) {
  return w !== void 0 && !e && Cl();
}
function po(e) {
  let t = { value: 0 };
  return {
    currentTime: t,
    cancel: uo((n) => {
      t.value = n[e.axis].progress * 100;
    }, e),
  };
}
function mo({ source: e, container: t, ...n }) {
  let { axis: r } = n;
  e && (t = e);
  let i = ip.get(t) ?? new Map();
  ip.set(t, i);
  let a = n.target ?? `self`,
    o = i.get(a) ?? {},
    s = r + (n.offset ?? []).join(`,`);
  return (
    o[s] ||
      (o[s] = fo(n.target)
        ? new ScrollTimeline({ source: t, axis: r })
        : po({ container: t, ...n })),
    o[s]
  );
}
function ho(e, t) {
  let n = mo(t);
  return e.attachTimeline({
    timeline: t.target ? void 0 : n,
    observe: (e) => (
      e.pause(),
      Bn((t) => {
        e.time = e.iterationDuration * t;
      }, n)
    ),
  });
}
function go(e) {
  return e.length === 2;
}
function _o(e, t) {
  return go(e)
    ? uo((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : Bn(e, mo(t));
}
function vo(
  e,
  { axis: t = `y`, container: n = document.scrollingElement, ...r } = {},
) {
  if (!n) return F;
  let i = { axis: t, container: n, ...r };
  return typeof e == `function` ? _o(e, i) : ho(e, i);
}
function yo(e, t, n) {
  return {
    factory: (r) => vo(r, { ...t, axis: e, container: n }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (e) => e,
    duration: 1,
  };
}
function bo({ container: e, target: t, ...n } = {}) {
  let r = j(ap);
  if (!t && fo()) {
    let t = e?.current || void 0;
    ((r.scrollXProgress.accelerate = yo(`x`, n, t)),
      (r.scrollYProgress.accelerate = yo(`y`, n, t)));
  }
  let i = l(null),
    a = l(!1),
    o = s(
      () => (
        (i.current = vo(
          (e, { x: t, y: n }) => {
            (r.scrollX.set(t.current),
              r.scrollXProgress.set(t.progress),
              r.scrollY.set(n.current),
              r.scrollYProgress.set(n.progress));
          },
          {
            ...n,
            container: e?.current || void 0,
            target: t?.current || void 0,
          },
        )),
        () => {
          i.current?.();
        }
      ),
      [e, t, JSON.stringify(n.offset)],
    );
  return (
    Ts(() => {
      if (((a.current = !1), op(e) || op(t))) {
        a.current = !0;
        return;
      } else return o();
    }, [o]),
    c(() => {
      if (a.current)
        return (
          N(
            !op(e),
            `Container ref is defined but not hydrated`,
            `use-scroll-ref`,
          ),
          N(!op(t), `Target ref is defined but not hydrated`, `use-scroll-ref`),
          o()
        );
    }, [o]),
    r
  );
}
function xo(e) {
  let n = j(() => D(e)),
    { isStatic: r } = t($);
  if (r) {
    let [, t] = i(e);
    c(() => n.on(`change`, t), []);
  }
  return n;
}
function So(e, t) {
  let n = xo(t()),
    r = () => n.set(t());
  return (
    r(),
    Ts(() => {
      let t = () => z.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), B(r));
      };
    }),
    n
  );
}
function Co(e) {
  ((Xl.current = []), e());
  let t = So(Xl.current, e);
  return ((Xl.current = void 0), t);
}
function wo(e, t, n, r) {
  if (typeof e == `function`) return Co(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`)
    return Eo(e, t, n, r);
  let i = typeof t == `function` ? t : Wn(t, n, r),
    a = Array.isArray(e) ? To(e, i) : To([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    o &&
      !o.isTransformed &&
      typeof t != `function` &&
      Array.isArray(n) &&
      r?.clamp !== !1 &&
      (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    a
  );
}
function To(e, t) {
  let n = j(() => []);
  return So(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function Eo(e, t, n, r) {
  let i = j(() => Object.keys(n)),
    a = j(() => ({}));
  for (let o of i) a[o] = wo(e, t, n[o], r);
  return a;
}
function Do(e, n = {}) {
  let { isStatic: r } = t($),
    i = () => (X(e) ? e.get() : e);
  if (r) return wo(i);
  let a = xo(i());
  return (ee(() => Gn(a, e, n), [a, JSON.stringify(n)]), a);
}
function Oo(e, t = {}) {
  return Do(e, { type: `spring`, ...t });
}
function ko() {
  !Uu.current && tr();
  let [e] = i(Hu.current);
  return e;
}
function Ao() {
  let e = ko(),
    { reducedMotion: n } = t($);
  return n === `never` ? !1 : n === `always` ? !0 : e;
}
function jo(e) {
  e.values.forEach((e) => e.stop());
}
function Mo(e, t) {
  [...t].reverse().forEach((n) => {
    let r = e.getVariant(n);
    (r && an(e, r),
      e.variantChildren &&
        e.variantChildren.forEach((e) => {
          Mo(e, t);
        }));
  });
}
function No(e, t) {
  if (Array.isArray(t)) return Mo(e, t);
  if (typeof t == `string`) return Mo(e, [t]);
  an(e, t);
}
function Po() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(e) {
        return (t.add(e), () => void t.delete(e));
      },
      start(n, r) {
        N(
          e,
          `controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.`,
        );
        let i = [];
        return (
          t.forEach((e) => {
            i.push(mn(e, n, { transitionOverride: r }));
          }),
          Promise.all(i)
        );
      },
      set(n) {
        return (
          N(
            e,
            `controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.`,
          ),
          t.forEach((e) => {
            No(e, n);
          })
        );
      },
      stop() {
        t.forEach((e) => {
          jo(e);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            ((e = !1), n.stop());
          }
        );
      },
    };
  return n;
}
function Fo(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function Io(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && Fo(t)
      ? yn(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function Lo(e, t, n) {
  return e * (t + 1);
}
function Ro(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function zo(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (ke(e, i), r--);
  }
}
function Bo(e, t, n, r, i, a) {
  zo(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: J(i, a, r[o]), easing: Ie(n, o) });
}
function Vo(e, t) {
  for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
function Ho(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
function Uo(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    } else if (!Array.isArray(o)) {
      l.set(o.name, Ro(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = Ro(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = Ko(e),
          {
            delay: l = 0,
            times: u = vt(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = Lt(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && dp(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = I(b));
          let r = ot(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let ee = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let w = u.length - c.length;
        if ((w > 0 && _t(u, w), c.length === 1 && c.unshift(null), m)) {
          (N(
            m < lp,
            `Repeat count too high, must be less than 20`,
            `repeat-count-high`,
          ),
            (b = Lo(b, m)));
          let e = [...c],
            t = [...u];
          y = Array.isArray(y) ? [...y] : [y];
          let n = [...y];
          for (let r = 0; r < m; r++) {
            c.push(...e);
            for (let i = 0; i < e.length; i++)
              (u.push(t[i] + (r + 1)),
                y.push(i === 0 ? `linear` : Ie(n, i - 1)));
          }
          Vo(u, m);
        }
        let T = ee + b;
        (Bo(r, c, y, u, ee, T), (g = Math.max(x + b, g)), (f = Math.max(T, f)));
      };
    if (X(p)) {
      let e = Wo(p, s);
      _(m, h, Go(`default`, e));
    } else {
      let e = Io(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = Wo(r, s);
        for (let e in m) _(m[e], qo(h, e), Go(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(Ho);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(Ms(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(cp)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        u.keyframes[i] = s;
        let { type: d, ...p } = t;
        u.transition[i] = { ...p, duration: f, ease: l, times: c, ...n };
      }
    }),
    o
  );
}
function Wo(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function Go(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function Ko(e) {
  return Array.isArray(e) ? e : [e];
}
function qo(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
function Jo(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = Mn(e) && !Vn(e) ? new ud(t) : new rd(t);
  (n.mount(e), zu.set(e, n));
}
function Yo(e) {
  let t = new id({
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  });
  (t.mount(e), zu.set(e, t));
}
function Xo(e, t) {
  return X(e) || typeof e == `number` || (typeof e == `string` && !Fo(t));
}
function Zo(e, t, n, r) {
  let i = [];
  if (Xo(e, t)) i.push(pi(e, (Fo(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = Io(e, t, r),
      o = a.length;
    N(!!o, `No valid elements provided.`, `no-valid-elements`);
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = r instanceof Element ? Jo : Yo;
      zu.has(r) || s(r);
      let c = zu.get(r),
        l = { ...n };
      (`delay` in l &&
        typeof l.delay == `function` &&
        (l.delay = l.delay(e, o)),
        i.push(...dn(c, { ...t, transition: l }, {})));
    }
  }
  return i;
}
function Qo(e, t, n) {
  let r = [];
  return (
    Uo(
      e.map((e) => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
          let t = e[0],
            n = D(0);
          return (
            n.on(`change`, t),
            e.length === 1
              ? [n, [0, 1]]
              : e.length === 2
                ? [n, [0, 1], e[1]]
                : [n, e[1], e[2]]
          );
        }
        return e;
      }),
      t,
      n,
      { spring: pt },
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...Zo(n, e, t));
    }),
    r
  );
}
function $o(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function es(e = {}) {
  let { scope: t, reduceMotion: n } = e;
  function r(e, r, i) {
    let a = [],
      o;
    if ($o(e)) a = Qo(e, n === void 0 ? r : { reduceMotion: n, ...r }, t);
    else {
      let { onComplete: s, ...c } = i || {};
      (typeof s == `function` && (o = s),
        (a = Zo(e, r, n === void 0 ? c : { reduceMotion: n, ...c }, t)));
    }
    let s = new Ll(a);
    return (
      o && s.finished.then(o),
      t &&
        (t.animations.push(s),
        s.finished.then(() => {
          ke(t.animations, s);
        })),
      s
    );
  }
  return r;
}
function ts() {
  let e = j(Po);
  return (Ts(e.mount, []), e);
}
function ns(e) {
  return typeof e == `object` && !!e && df in e;
}
function rs(e) {
  if (ns(e)) return e[df];
}
function is() {
  return as;
}
function as(e) {
  Vd.current &&
    ((Vd.current.isUpdating = !1), Vd.current.blockUpdate(), e && e());
}
function os() {
  return s(() => {
    let e = Vd.current;
    e && e.resetTree();
  }, []);
}
function ss(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = yn(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function`
                ? o.set(e.target, n)
                : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : mp[i] },
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function cs(
  e,
  { root: t, margin: n, amount: r, once: a = !1, initial: o = !1 } = {},
) {
  let [s, l] = i(o);
  return (
    c(() => {
      if (!e.current || (a && s)) return;
      let i = () => (l(!0), a ? void 0 : () => l(!1)),
        o = { root: (t && t.current) || void 0, margin: n, amount: r };
      return ss(e.current, i, o);
    }, [t, e, n, a, r]),
    s
  );
}
function ls() {
  let [e, t] = Xi(),
    n = is(),
    r = l(-1);
  return (
    c(() => {
      z.postRender(() =>
        z.postRender(() => {
          t === r.current && (P.instantAnimations = !1);
        }),
      );
    }, [t]),
    (i) => {
      n(() => {
        ((P.instantAnimations = !0), e(), i(), (r.current = t + 1));
      });
    }
  );
}
function us(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((e) => e.value === t);
  if (i === -1) return e;
  let a = r > 0 ? 1 : -1,
    o = e[i + a];
  if (!o) return e;
  let s = e[i],
    c = o.layout,
    l = J(c.min, c.max, 0.5);
  return (a === 1 && s.layout.max + n > l) || (a === -1 && s.layout.min + n < l)
    ? Ae(e, i, i + a)
    : e;
}
function ds(
  { children: e, as: t = `ul`, axis: n = `y`, onReorder: r, values: i, ...a },
  o,
) {
  let s = j(() => Hf[t]),
    u = [],
    d = l(!1),
    f = l(null);
  N(!!i, `Reorder.Group must be provided a values prop`, `reorder-values`);
  let p = {
    axis: n,
    groupRef: f,
    registerItem: (e, t) => {
      let r = u.findIndex((t) => e === t.value);
      (r === -1 ? u.push({ value: e, layout: t[n] }) : (u[r].layout = t[n]),
        u.sort(ps));
    },
    updateOrder: (e, t, n) => {
      if (d.current) return;
      let a = us(u, e, t, n);
      u !== a &&
        ((d.current = !0), r(a.map(fs).filter((e) => i.indexOf(e) !== -1)));
    },
  };
  c(() => {
    d.current = !1;
  });
  let m = (e) => {
      ((f.current = e), typeof o == `function` ? o(e) : o && (o.current = e));
    },
    h = { overflowAnchor: `none`, ...a.style };
  return y(s, {
    ...a,
    style: h,
    ref: m,
    ignoreStrict: !0,
    children: y(_p.Provider, { value: p, children: e }),
  });
}
function fs(e) {
  return e.value;
}
function ps(e, t) {
  return e.layout.min - t.layout.min;
}
function ms() {
  if (wp) {
    let e = gs(wp, `y`);
    e && (Cp.delete(e), Sp.delete(e));
    let t = gs(wp, `x`);
    (t && t !== e && (Cp.delete(t), Sp.delete(t)), (wp = null));
  }
}
function hs(e, t) {
  let n = getComputedStyle(e),
    r = t === `x` ? n.overflowX : n.overflowY,
    i = e === document.body || e === document.documentElement;
  return xp.has(r) || i;
}
function gs(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (hs(n, t)) return n;
    n = n.parentElement;
  }
  return null;
}
function _s(e, t, n) {
  let r = t.getBoundingClientRect(),
    i = n === `x` ? Math.max(0, r.left) : Math.max(0, r.top),
    a =
      n === `x`
        ? Math.min(w.innerWidth, r.right)
        : Math.min(w.innerHeight, r.bottom),
    o = e - i,
    s = a - e;
  if (o < yp) {
    let e = 1 - o / yp;
    return { amount: -bp * e * e, edge: `start` };
  } else if (s < yp) {
    let e = 1 - s / yp;
    return { amount: bp * e * e, edge: `end` };
  }
  return { amount: 0, edge: null };
}
function vs(e, t, n, r) {
  if (!e) return;
  wp = e;
  let i = gs(e, n);
  if (!i) return;
  let { amount: a, edge: o } = _s(
    t - (n === `x` ? w.scrollX : w.scrollY),
    i,
    n,
  );
  if (o === null) {
    (Cp.delete(i), Sp.delete(i));
    return;
  }
  let s = Cp.get(i),
    c = i === document.body || i === document.documentElement;
  if (s !== o) {
    if (!((o === `start` && r < 0) || (o === `end` && r > 0))) return;
    Cp.set(i, o);
    let e =
      n === `x`
        ? i.scrollWidth - (c ? w.innerWidth : i.clientWidth)
        : i.scrollHeight - (c ? w.innerHeight : i.clientHeight);
    Sp.set(i, e);
  }
  if (a > 0) {
    let e = Sp.get(i);
    if (
      (n === `x`
        ? c
          ? w.scrollX
          : i.scrollLeft
        : c
          ? w.scrollY
          : i.scrollTop) >= e
    )
      return;
  }
  n === `x`
    ? c
      ? w.scrollBy({ left: a })
      : (i.scrollLeft += a)
    : c
      ? w.scrollBy({ top: a })
      : (i.scrollTop += a);
}
function ys(e, t = 0) {
  return X(e) ? e : xo(t);
}
function bs(
  {
    children: e,
    style: n = {},
    value: r,
    as: i = `li`,
    onDrag: a,
    onDragEnd: o,
    layout: s = !0,
    ...c
  },
  l,
) {
  let u = j(() => Hf[i]),
    d = t(_p),
    f = { x: ys(n.x), y: ys(n.y) },
    p = wo([f.x, f.y], ([e, t]) => (e || t ? 1 : `unset`));
  N(!!d, `Reorder.Item must be a child of Reorder.Group`, `reorder-item-child`);
  let { axis: m, registerItem: h, updateOrder: g, groupRef: _ } = d;
  return y(u, {
    drag: m,
    ...c,
    dragSnapToOrigin: !0,
    style: { ...n, x: f.x, y: f.y, zIndex: p },
    layout: s,
    onDrag: (e, t) => {
      let { velocity: n, point: i } = t;
      (g(r, f[m].get(), n[m]), vs(_.current, i[m], m, n[m]), a && a(e, t));
    },
    onDragEnd: (e, t) => {
      (ms(), o && o(e, t));
    },
    onLayoutMeasure: (e) => {
      h(r, e);
    },
    ref: l,
    ignoreStrict: !0,
    children: e,
  });
}
var xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  M,
  Ds,
  N,
  P,
  Os,
  ks,
  F,
  As,
  js,
  Ms,
  Ns,
  I,
  L,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  R,
  tc,
  nc,
  z,
  B,
  V,
  rc,
  ic,
  H,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  U,
  W,
  G,
  wc,
  Tc,
  Ec,
  Dc,
  K,
  Oc,
  kc,
  Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  q,
  J,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Y,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  X,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu,
  Z,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  Q,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  $,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep = e(() => {
    (o(),
      De(),
      f(),
      x(),
      (xs = le({
        "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(
          e,
        ) {
          Object.defineProperty(e, `__esModule`, { value: !0 });
          function t(e) {
            var t = {};
            return function (n) {
              return (t[n] === void 0 && (t[n] = e(n)), t[n]);
            };
          }
          e.default = t;
        },
      })),
      (Ss = le({
        "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
          e,
        ) {
          Object.defineProperty(e, `__esModule`, { value: !0 });
          function t(e) {
            return e && typeof e == `object` && `default` in e ? e.default : e;
          }
          var n = t(xs()),
            r =
              /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
          e.default = n(function (e) {
            return (
              r.test(e) ||
              (e.charCodeAt(0) === 111 &&
                e.charCodeAt(1) === 110 &&
                e.charCodeAt(2) < 91)
            );
          });
        },
      })),
      (Cs = a({})),
      (ws = w !== void 0),
      (Ts = ws ? n : c),
      (Es = a(null)),
      (M = (e, t, n) => (n > t ? t : n < e ? e : n)),
      (Ds = () => {}),
      (N = () => {}),
      (P = {}),
      (Os = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)),
      (ks = (e) => /^0[^.\s]+$/u.test(e)),
      (F = (e) => e),
      (As = (e, t) => (n) => t(e(n))),
      (js = (...e) => e.reduce(As)),
      (Ms = (e, t, n) => {
        let r = t - e;
        return r === 0 ? 1 : (n - e) / r;
      }),
      (Ns = class {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (Oe(this.subscriptions, e), () => ke(this.subscriptions, e));
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r)
            if (r === 1) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }),
      (I = (e) => e * 1e3),
      (L = (e) => e / 1e3),
      (Ps = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (Fs = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e),
      (Is = 1e-7),
      (Ls = 12),
      (Rs = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2)),
      (zs = (e) => (t) => 1 - e(1 - t)),
      (Bs = Fe(0.33, 1.53, 0.69, 0.99)),
      (Vs = zs(Bs)),
      (Hs = Rs(Vs)),
      (Us = (e) =>
        (e *= 2) < 1 ? 0.5 * Vs(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
      (Ws = (e) => 1 - Math.sin(Math.acos(e))),
      (Gs = zs(Ws)),
      (Ks = Rs(Ws)),
      (qs = Fe(0.42, 0, 1, 1)),
      (Js = Fe(0, 0, 0.58, 1)),
      (Ys = Fe(0.42, 0, 0.58, 1)),
      (Xs = (e) => Array.isArray(e) && typeof e[0] != `number`),
      (Zs = (e) => Array.isArray(e) && typeof e[0] == `number`),
      (Qs = {
        linear: F,
        easeIn: qs,
        easeInOut: Ys,
        easeOut: Js,
        circIn: Ws,
        circInOut: Ks,
        circOut: Gs,
        backIn: Vs,
        backInOut: Hs,
        backOut: Bs,
        anticipate: Us,
      }),
      ($s = (e) => typeof e == `string`),
      (ec = (e) => {
        if (Zs(e)) {
          N(
            e.length === 4,
            `Cubic bezier arrays must contain four numerical values.`,
            `cubic-bezier-length`,
          );
          let [t, n, r, i] = e;
          return Fe(t, n, r, i);
        } else if ($s(e))
          return (
            N(
              Qs[e] !== void 0,
              `Invalid easing type '${e}'`,
              `invalid-easing-type`,
            ),
            Qs[e]
          );
        return e;
      }),
      (R = { value: null, addProjectionMetrics: null }),
      (tc = [
        `setup`,
        `read`,
        `resolveKeyframes`,
        `preUpdate`,
        `update`,
        `preRender`,
        `render`,
        `postRender`,
      ]),
      (nc = 40),
      ({
        schedule: z,
        cancel: B,
        state: V,
        steps: rc,
      } = Re(
        typeof requestAnimationFrame < `u` ? requestAnimationFrame : F,
        !0,
      )),
      (H = {
        now: () => (
          ic === void 0 &&
            H.set(
              V.isProcessing || P.useManualTiming
                ? V.timestamp
                : performance.now(),
            ),
          ic
        ),
        set: (e) => {
          ((ic = e), queueMicrotask(ze));
        },
      }),
      (ac = { layout: 0, mainThread: 0, waapi: 0 }),
      (oc = (e) => (t) => typeof t == `string` && t.startsWith(e)),
      (sc = oc(`--`)),
      (cc = oc(`var(--`)),
      (lc = (e) => (cc(e) ? uc.test(e.split(`/*`)[0].trim()) : !1)),
      (uc =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu),
      (dc = {
        test: (e) => typeof e == `number`,
        parse: parseFloat,
        transform: (e) => e,
      }),
      (fc = { ...dc, transform: (e) => M(0, 1, e) }),
      (pc = { ...dc, default: 1 }),
      (mc = (e) => Math.round(e * 1e5) / 1e5),
      (hc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu),
      (gc =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu),
      (_c = (e, t) => (n) =>
        !!(
          (typeof n == `string` && gc.test(n) && n.startsWith(e)) ||
          (t && !Ve(n) && Object.prototype.hasOwnProperty.call(n, t))
        )),
      (vc = (e, t, n) => (r) => {
        if (typeof r != `string`) return r;
        let [i, a, o, s] = r.match(hc);
        return {
          [e]: parseFloat(i),
          [t]: parseFloat(a),
          [n]: parseFloat(o),
          alpha: s === void 0 ? 1 : parseFloat(s),
        };
      }),
      (yc = (e) => M(0, 255, e)),
      (bc = { ...dc, transform: (e) => Math.round(yc(e)) }),
      (xc = {
        test: _c(`rgb`, `red`),
        parse: vc(`red`, `green`, `blue`),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
          `rgba(` +
          bc.transform(e) +
          `, ` +
          bc.transform(t) +
          `, ` +
          bc.transform(n) +
          `, ` +
          mc(fc.transform(r)) +
          `)`,
      }),
      (Sc = { test: _c(`#`), parse: He, transform: xc.transform }),
      (Cc = (e) => ({
        test: (t) =>
          typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      })),
      (U = Cc(`deg`)),
      (W = Cc(`%`)),
      (G = Cc(`px`)),
      (wc = Cc(`vh`)),
      (Tc = Cc(`vw`)),
      (Ec = (() => ({
        ...W,
        parse: (e) => W.parse(e) / 100,
        transform: (e) => W.transform(e * 100),
      }))()),
      (Dc = {
        test: _c(`hsl`, `hue`),
        parse: vc(`hue`, `saturation`, `lightness`),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
          `hsla(` +
          Math.round(e) +
          `, ` +
          W.transform(mc(t)) +
          `, ` +
          W.transform(mc(n)) +
          `, ` +
          mc(fc.transform(r)) +
          `)`,
      }),
      (K = {
        test: (e) => xc.test(e) || Sc.test(e) || Dc.test(e),
        parse: (e) =>
          xc.test(e) ? xc.parse(e) : Dc.test(e) ? Dc.parse(e) : Sc.parse(e),
        transform: (e) =>
          typeof e == `string`
            ? e
            : e.hasOwnProperty(`red`)
              ? xc.transform(e)
              : Dc.transform(e),
        getAnimatableNone: (e) => {
          let t = K.parse(e);
          return ((t.alpha = 0), K.transform(t));
        },
      }),
      (Oc =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu),
      (kc = `number`),
      (Ac = `color`),
      (jc = `var`),
      (Mc = `var(`),
      (Nc = "${}"),
      (Pc =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu),
      (Fc = (e) =>
        typeof e == `number` ? 0 : K.test(e) ? K.getAnimatableNone(e) : e),
      (q = {
        test: Ue,
        parse: Ge,
        createTransformer: Ke,
        getAnimatableNone: qe,
      }),
      (J = (e, t, n) => e + (t - e) * n),
      (Ic = (e, t, n) => {
        let r = e * e,
          i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i);
      }),
      (Lc = [Sc, xc, Dc]),
      (Rc = (e) => Lc.find((t) => t.test(e))),
      (zc = (e, t) => {
        let n = Ze(e),
          r = Ze(t);
        if (!n || !r) return Xe(e, t);
        let i = { ...n };
        return (e) => (
          (i.red = Ic(n.red, r.red, e)),
          (i.green = Ic(n.green, r.green, e)),
          (i.blue = Ic(n.blue, r.blue, e)),
          (i.alpha = J(n.alpha, r.alpha, e)),
          xc.transform(i)
        );
      }),
      (Bc = new Set([`none`, `hidden`])),
      (Vc = (e, t) => {
        let n = q.createTransformer(t),
          r = We(e),
          i = We(t);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (Bc.has(e) && !i.values.length) || (Bc.has(t) && !r.values.length)
            ? Qe(e, t)
            : js(tt(rt(r, i), i.values), n)
          : (Ds(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              `complex-values-different`,
            ),
            Xe(e, t));
      }),
      (Hc = (e, t, n = 10) => {
        let r = ``,
          i = Math.max(Math.round(t / n), 2);
        for (let t = 0; t < i; t++)
          r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
        return `linear(${r.substring(0, r.length - 2)})`;
      }),
      (Uc = 2e4),
      (Wc = 5),
      (Y = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      }),
      (Gc = 0.001),
      (Kc = 12),
      (qc = [`duration`, `bounce`]),
      (Jc = [`stiffness`, `damping`, `mass`]),
      (pt.applyToOptions = (e) => {
        let t = ot(e, 100, pt);
        return (
          (e.ease = t.ease),
          (e.duration = I(t.duration)),
          (e.type = `keyframes`),
          e
        );
      }),
      (Yc = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: (e = !0) => z.update(t, e),
          stop: () => B(t),
          now: () => (V.isProcessing ? V.timestamp : H.now()),
        };
      }),
      (Xc = (e) => e !== null),
      (Zc = { decay: mt, inertia: mt, tween: xt, keyframes: xt, spring: pt }),
      (Qc = class {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((e) => {
            this.resolve = e;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
      }),
      ($c = (e) => e / 100),
      (el = class extends Qc {
        constructor(e) {
          (super(),
            (this.state = `idle`),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: e } = this.options;
              (e && e.updatedAt !== H.now() && this.tick(H.now()),
                (this.isStopped = !0),
                this.state !== `idle` &&
                  (this.teardown(), this.options.onStop?.()));
            }),
            ac.mainThread++,
            (this.options = e),
            this.initAnimation(),
            this.play(),
            e.autoplay === !1 && this.pause());
        }
        initAnimation() {
          let { options: e } = this;
          Ct(e);
          let {
              type: t = xt,
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: i,
              velocity: a = 0,
            } = e,
            { keyframes: o } = e,
            s = t || xt;
          s !== xt &&
            typeof o[0] != `number` &&
            ((this.mixKeyframes = js($c, it(o[0], o[1]))), (o = [0, 100]));
          let c = s({ ...e, keyframes: o });
          (i === `mirror` &&
            (this.mirroredGenerator = s({
              ...e,
              keyframes: [...o].reverse(),
              velocity: -a,
            })),
            c.calculatedDuration === null && (c.calculatedDuration = at(c)));
          let { calculatedDuration: l } = c;
          ((this.calculatedDuration = l),
            (this.resolvedDuration = l + r),
            (this.totalDuration = this.resolvedDuration * (n + 1) - r),
            (this.generator = c));
        }
        updateTime(e) {
          let t = Math.round(e - this.startTime) * this.playbackSpeed;
          this.holdTime === null
            ? (this.currentTime = t)
            : (this.currentTime = this.holdTime);
        }
        tick(e, t = !1) {
          let {
            generator: n,
            totalDuration: r,
            mixKeyframes: i,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: s,
          } = this;
          if (this.startTime === null) return n.next(0);
          let {
            delay: c = 0,
            keyframes: l,
            repeat: u,
            repeatType: d,
            repeatDelay: f,
            type: p,
            onUpdate: m,
            finalKeyframe: h,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - r / this.speed, this.startTime)),
            t ? (this.currentTime = e) : this.updateTime(e));
          let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
            _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
          ((this.currentTime = Math.max(g, 0)),
            this.state === `finished` &&
              this.holdTime === null &&
              (this.currentTime = r));
          let v = this.currentTime,
            y = n;
          if (u) {
            let e = Math.min(this.currentTime, r) / o,
              t = Math.floor(e),
              n = e % 1;
            (!n && e >= 1 && (n = 1),
              n === 1 && t--,
              (t = Math.min(t, u + 1)),
              t % 2 &&
                (d === `reverse`
                  ? ((n = 1 - n), f && (n -= f / o))
                  : d === `mirror` && (y = a)),
              (v = M(0, 1, n) * o));
          }
          let b = _ ? { done: !1, value: l[0] } : y.next(v);
          i && (b.value = i(b.value));
          let { done: x } = b;
          !_ &&
            s !== null &&
            (x =
              this.playbackSpeed >= 0
                ? this.currentTime >= r
                : this.currentTime <= 0);
          let S =
            this.holdTime === null &&
            (this.state === `finished` || (this.state === `running` && x));
          return (
            S && p !== mt && (b.value = St(l, this.options, h, this.speed)),
            m && m(b.value),
            S && this.finish(),
            b
          );
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
        get duration() {
          return L(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + L(e);
        }
        get time() {
          return L(this.currentTime);
        }
        set time(e) {
          ((e = I(e)),
            (this.currentTime = e),
            this.startTime === null ||
            this.holdTime !== null ||
            this.playbackSpeed === 0
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.playbackSpeed),
            this.driver?.start(!1));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          this.updateTime(H.now());
          let t = this.playbackSpeed !== e;
          ((this.playbackSpeed = e), t && (this.time = L(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: e = Yc, startTime: t } = this.options;
          ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
          let n = this.driver.now();
          (this.state === `finished`
            ? (this.updateFinished(), (this.startTime = n))
            : this.holdTime === null
              ? (this.startTime ||= t ?? n)
              : (this.startTime = n - this.holdTime),
            this.state === `finished` &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = `running`),
            this.driver.start());
        }
        pause() {
          ((this.state = `paused`),
            this.updateTime(H.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          (this.state !== `running` && this.play(),
            (this.state = `finished`),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = `finished`),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = `idle`),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            ac.mainThread--);
        }
        stopDriver() {
          this.driver &&= (this.driver.stop(), void 0);
        }
        sample(e) {
          return ((this.startTime = 0), this.tick(e, !0));
        }
        attachTimeline(e) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = `keyframes`),
              (this.options.ease = `linear`),
              this.initAnimation()),
            this.driver?.stop(),
            e.observe(this)
          );
        }
      }),
      (tl = (e) => (e * 180) / Math.PI),
      (nl = (e) => il(tl(Math.atan2(e[1], e[0])))),
      (rl = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: nl,
        rotateZ: nl,
        skewX: (e) => tl(Math.atan(e[1])),
        skewY: (e) => tl(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      }),
      (il = (e) => ((e %= 360), e < 0 && (e += 360), e)),
      (al = nl),
      (ol = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1])),
      (sl = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5])),
      (cl = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: ol,
        scaleY: sl,
        scale: (e) => (ol(e) + sl(e)) / 2,
        rotateX: (e) => il(tl(Math.atan2(e[6], e[5]))),
        rotateY: (e) => il(tl(Math.atan2(-e[2], e[0]))),
        rotateZ: al,
        rotate: al,
        skewX: (e) => tl(Math.atan(e[4])),
        skewY: (e) => tl(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      }),
      (ll = (e, t) => {
        let { transform: n = `none` } = getComputedStyle(e);
        return Dt(n, t);
      }),
      (ul = [
        `transformPerspective`,
        `x`,
        `y`,
        `z`,
        `translateX`,
        `translateY`,
        `translateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `skew`,
        `skewX`,
        `skewY`,
      ]),
      (dl = (() => new Set(ul))()),
      (fl = (e) => e === dc || e === G),
      (pl = new Set([`x`, `y`, `z`])),
      (ml = ul.filter((e) => !pl.has(e))),
      (hl = {
        width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: (e, { transform: t }) => Dt(t, `x`),
        y: (e, { transform: t }) => Dt(t, `y`),
      }),
      (hl.translateX = hl.x),
      (hl.translateY = hl.y),
      (gl = new Set()),
      (_l = !1),
      (vl = !1),
      (yl = !1),
      (bl = class {
        constructor(e, t, n, r, i, a = !1) {
          ((this.state = `pending`),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = a));
        }
        scheduleResolve() {
          ((this.state = `scheduled`),
            this.isAsync
              ? (gl.add(this),
                _l || ((_l = !0), z.read(jt), z.resolveKeyframes(At)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: r,
          } = this;
          if (e[0] === null) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          }
          Tt(e);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
          ((this.state = `complete`),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
            gl.delete(this));
        }
        cancel() {
          this.state === `scheduled` &&
            (gl.delete(this), (this.state = `pending`));
        }
        resume() {
          this.state === `pending` && this.scheduleResolve();
        }
      }),
      (xl = (e) => e.startsWith(`--`)),
      (Sl = {}),
      (Cl = Pt(() => w.ScrollTimeline !== void 0, `scrollTimeline`)),
      (wl = Pt(() => {
        try {
          document
            .createElement(`div`)
            .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
        } catch {
          return !1;
        }
        return !0;
      }, `linearEasing`)),
      (Tl = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`),
      (El = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: Tl([0, 0.65, 0.55, 1]),
        circOut: Tl([0.55, 0, 1, 0.45]),
        backIn: Tl([0.31, 0.01, 0.66, -0.59]),
        backOut: Tl([0.33, 1.53, 0.69, 0.99]),
      }),
      (Dl = class extends Qc {
        constructor(e) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !e)
          )
            return;
          let {
            element: t,
            name: n,
            keyframes: r,
            pseudoElement: i,
            allowFlatten: a = !1,
            finalKeyframe: o,
            onComplete: s,
          } = e;
          ((this.isPseudoElement = !!i),
            (this.allowFlatten = a),
            (this.options = e),
            N(
              typeof e.type != `string`,
              `Mini animate() doesn't support "type" as a string.`,
              `mini-spring`,
            ));
          let c = Rt(e);
          ((this.animation = It(t, n, r, c, i)),
            c.autoplay === !1 && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !i)) {
                let e = St(r, this.options, o, this.speed);
                (this.updateMotionValue
                  ? this.updateMotionValue(e)
                  : Nt(t, n, e),
                  this.animation.cancel());
              }
              (s?.(), this.notifyFinished());
            }));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            this.state === `finished` && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: e } = this;
          e === `idle` ||
            e === `finished` ||
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let e = this.options?.element;
          !this.isPseudoElement &&
            e?.isConnected &&
            this.animation.commitStyles?.();
        }
        get duration() {
          let e = this.animation.effect?.getComputedTiming?.().duration || 0;
          return L(Number(e));
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + L(e);
        }
        get time() {
          return L(Number(this.animation.currentTime) || 0);
        }
        set time(e) {
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = I(e)));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(e) {
          (e < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = e));
        }
        get state() {
          return this.finishedTime === null
            ? this.animation.playState
            : `finished`;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(e) {
          this.manualStartTime = this.animation.startTime = e;
        }
        attachTimeline({ timeline: e, observe: t }) {
          return (
            this.allowFlatten &&
              this.animation.effect?.updateTiming({ easing: `linear` }),
            (this.animation.onfinish = null),
            e && Cl() ? ((this.animation.timeline = e), F) : t(this)
          );
        }
      }),
      (Ol = { anticipate: Us, backInOut: Hs, circInOut: Ks }),
      (kl = 10),
      (Al = class extends Dl {
        constructor(e) {
          (Bt(e),
            Ct(e),
            super(e),
            e.startTime !== void 0 && (this.startTime = e.startTime),
            (this.options = e));
        }
        updateMotionValue(e) {
          let {
            motionValue: t,
            onUpdate: n,
            onComplete: r,
            element: i,
            ...a
          } = this.options;
          if (!t) return;
          if (e !== void 0) {
            t.set(e);
            return;
          }
          let o = new el({ ...a, autoplay: !1 }),
            s = Math.max(kl, H.now() - this.startTime),
            c = M(0, kl, s - kl);
          (t.setWithVelocity(
            o.sample(Math.max(0, s - c)).value,
            o.sample(s).value,
            c,
          ),
            o.stop());
        }
      }),
      (jl = new Set([`opacity`, `clipPath`, `filter`, `transform`])),
      (Ml = Me(() => Object.hasOwnProperty.call(Element.prototype, `animate`))),
      (Nl = (e, t) =>
        t === `zIndex`
          ? !1
          : !!(
              typeof e == `number` ||
              Array.isArray(e) ||
              (typeof e == `string` &&
                (q.test(e) || e === `0`) &&
                !e.startsWith(`url(`))
            )),
      (Pl = 40),
      (Fl = class extends Qc {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = `keyframes`,
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: a = `loop`,
          keyframes: o,
          name: s,
          motionValue: c,
          element: l,
          ...u
        }) {
          (super(),
            (this.stop = () => {
              (this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = H.now()));
          let d = {
            autoplay: e,
            delay: t,
            type: n,
            repeat: r,
            repeatDelay: i,
            repeatType: a,
            name: s,
            motionValue: c,
            element: l,
            ...u,
          };
          ((this.keyframeResolver = new (l?.KeyframeResolver || bl)(
            o,
            (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
            s,
            c,
            l,
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(e, t, n, r) {
          this.keyframeResolver = void 0;
          let {
            name: i,
            type: a,
            velocity: o,
            delay: s,
            isHandoff: c,
            onUpdate: l,
          } = n;
          ((this.resolvedAt = H.now()),
            Wt(e, i, a, o) ||
              ((P.instantAnimations || !s) && l?.(St(e, n, t)),
              (e[0] = e[e.length - 1]),
              Vt(n),
              (n.repeat = 0)));
          let u = {
              startTime: r
                ? this.resolvedAt && this.resolvedAt - this.createdAt > Pl
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: t,
              ...n,
              keyframes: e,
            },
            d = !c && Ht(u),
            f = u.motionValue?.owner?.current,
            p = d ? new Al({ ...u, element: f }) : new el(u);
          (p.finished
            .then(() => {
              this.notifyFinished();
            })
            .catch(F),
            (this.pendingTimeline &&=
              ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)),
              void 0)),
            (this._animation = p));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
        get animation() {
          return (
            this._animation || (this.keyframeResolver?.resume(), Mt()),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(e) {
          this.animation.time = e;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(e) {
          this.animation.speed = e;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(e) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(e))
              : (this.pendingTimeline = e),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel());
        }
      }),
      (Il = class {
        constructor(e) {
          ((this.stop = () => this.runAll(`stop`)),
            (this.animations = e.filter(Boolean)));
        }
        get finished() {
          return Promise.all(this.animations.map((e) => e.finished));
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => t.attachTimeline(e));
          return () => {
            t.forEach((e, t) => {
              (e && e(), this.animations[t].stop());
            });
          };
        }
        get time() {
          return this.getAll(`time`);
        }
        set time(e) {
          this.setAll(`time`, e);
        }
        get speed() {
          return this.getAll(`speed`);
        }
        set speed(e) {
          this.setAll(`speed`, e);
        }
        get state() {
          return this.getAll(`state`);
        }
        get startTime() {
          return this.getAll(`startTime`);
        }
        get duration() {
          return Gt(this.animations, `duration`);
        }
        get iterationDuration() {
          return Gt(this.animations, `iterationDuration`);
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll(`play`);
        }
        pause() {
          this.runAll(`pause`);
        }
        cancel() {
          this.runAll(`cancel`);
        }
        complete() {
          this.runAll(`complete`);
        }
      }),
      (Ll = class extends Il {
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
      }),
      (Rl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u),
      (zl = 4),
      (Bl = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 }),
      (Vl = (e) => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
      })),
      (Hl = { type: `keyframes`, duration: 0.8 }),
      (Ul = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }),
      (Wl = (e, { keyframes: t }) =>
        t.length > 2
          ? Hl
          : dl.has(e)
            ? e.startsWith(`scale`)
              ? Vl(t[1])
              : Bl
            : Ul),
      (Gl = (e) => e !== null),
      (Kl =
        (e, t, n, r = {}, i, a) =>
        (o) => {
          let s = Zt(r, e) || {},
            c = s.delay || r.delay || 0,
            { elapsed: l = 0 } = r;
          l -= I(c);
          let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: `easeOut`,
            velocity: t.getVelocity(),
            ...s,
            delay: -l,
            onUpdate: (e) => {
              (t.set(e), s.onUpdate && s.onUpdate(e));
            },
            onComplete: () => {
              (o(), s.onComplete && s.onComplete());
            },
            name: e,
            motionValue: t,
            element: a ? void 0 : i,
          };
          (Qt(s) || Object.assign(u, Wl(e, u)),
            (u.duration &&= I(u.duration)),
            (u.repeatDelay &&= I(u.repeatDelay)),
            u.from !== void 0 && (u.keyframes[0] = u.from));
          let d = !1;
          if (
            ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
              (Vt(u), u.delay === 0 && (d = !0)),
            (P.instantAnimations ||
              P.skipAnimations ||
              i?.shouldSkipAnimations) &&
              ((d = !0), Vt(u), (u.delay = 0)),
            (u.allowFlatten = !s.type && !s.ease),
            d && !a && t.get() !== void 0)
          ) {
            let e = Yt(u.keyframes, s);
            if (e !== void 0) {
              z.update(() => {
                (u.onUpdate(e), u.onComplete());
              });
              return;
            }
          }
          return s.isSync ? new el(u) : new Fl(u);
        }),
      (ql = new Set([
        `width`,
        `height`,
        `top`,
        `left`,
        `right`,
        `bottom`,
        ...ul,
      ])),
      (Jl = 30),
      (Yl = (e) => !isNaN(parseFloat(e))),
      (Xl = { current: void 0 }),
      (Zl = class {
        constructor(e, t = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e) => {
              let t = H.now();
              if (
                (this.updatedAt !== t && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let e of this.dependents) e.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          ((this.current = e),
            (this.updatedAt = H.now()),
            this.canTrackVelocity === null &&
              e !== void 0 &&
              (this.canTrackVelocity = Yl(this.current)));
        }
        setPrevFrameValue(e = this.current) {
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on(`change`, e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new Ns());
          let n = this.events[e].add(t);
          return e === `change`
            ? () => {
                (n(),
                  z.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          ((this.passiveEffect = e), (this.stopPassiveEffect = t));
        }
        set(e) {
          this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e);
        }
        setWithVelocity(e, t, n) {
          (this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n));
        }
        jump(e, t = !0) {
          (this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(e) {
          ((this.dependents ||= new Set()), this.dependents.add(e));
        }
        removeDependent(e) {
          this.dependents && this.dependents.delete(e);
        }
        get() {
          return (Xl.current && Xl.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = H.now();
          if (
            !this.canTrackVelocity ||
            this.prevFrameValue === void 0 ||
            e - this.updatedAt > Jl
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, Jl);
          return Ne(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t,
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              ((this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }),
      (Ql = (e) => Array.isArray(e)),
      (X = (e) => !!(e && e.getVelocity)),
      ($l = `framerAppearId`),
      (eu = `data-` + cn($l)),
      (tu = (e) => (t) => t.test(e)),
      (nu = [
        dc,
        G,
        W,
        U,
        Tc,
        wc,
        { test: (e) => e === `auto`, parse: (e) => e },
      ]),
      (ru = (e) => nu.find(tu(e))),
      (iu = {
        rotate: U,
        rotateX: U,
        rotateY: U,
        rotateZ: U,
        scale: pc,
        scaleX: pc,
        scaleY: pc,
        scaleZ: pc,
        skew: U,
        skewX: U,
        skewY: U,
        distance: G,
        translateX: G,
        translateY: G,
        translateZ: G,
        x: G,
        y: G,
        z: G,
        perspective: G,
        transformPerspective: G,
        opacity: fc,
        originX: Ec,
        originY: Ec,
        originZ: G,
      }),
      (au = { ...dc, transform: Math.round }),
      (ou = {
        borderWidth: G,
        borderTopWidth: G,
        borderRightWidth: G,
        borderBottomWidth: G,
        borderLeftWidth: G,
        borderRadius: G,
        borderTopLeftRadius: G,
        borderTopRightRadius: G,
        borderBottomRightRadius: G,
        borderBottomLeftRadius: G,
        width: G,
        maxWidth: G,
        height: G,
        maxHeight: G,
        top: G,
        right: G,
        bottom: G,
        left: G,
        inset: G,
        insetBlock: G,
        insetBlockStart: G,
        insetBlockEnd: G,
        insetInline: G,
        insetInlineStart: G,
        insetInlineEnd: G,
        padding: G,
        paddingTop: G,
        paddingRight: G,
        paddingBottom: G,
        paddingLeft: G,
        paddingBlock: G,
        paddingBlockStart: G,
        paddingBlockEnd: G,
        paddingInline: G,
        paddingInlineStart: G,
        paddingInlineEnd: G,
        margin: G,
        marginTop: G,
        marginRight: G,
        marginBottom: G,
        marginLeft: G,
        marginBlock: G,
        marginBlockStart: G,
        marginBlockEnd: G,
        marginInline: G,
        marginInlineStart: G,
        marginInlineEnd: G,
        fontSize: G,
        backgroundPositionX: G,
        backgroundPositionY: G,
        ...iu,
        zIndex: au,
        fillOpacity: fc,
        strokeOpacity: fc,
        numOctaves: au,
      }),
      (su = new Set([`brightness`, `contrast`, `saturate`, `opacity`])),
      (cu = /\b([a-z-]*)\(.*?\)/gu),
      (lu = {
        ...q,
        getAnimatableNone: (e) => {
          let t = e.match(cu);
          return t ? t.map(hn).join(` `) : e;
        },
      }),
      (uu = {
        ...q,
        getAnimatableNone: (e) => {
          let t = q.parse(e);
          return q.createTransformer(e)(
            t.map((e) =>
              typeof e == `number`
                ? 0
                : typeof e == `object`
                  ? { ...e, alpha: 1 }
                  : e,
            ),
          );
        },
      }),
      (du = {
        ...ou,
        color: K,
        backgroundColor: K,
        outlineColor: K,
        fill: K,
        stroke: K,
        borderColor: K,
        borderTopColor: K,
        borderRightColor: K,
        borderBottomColor: K,
        borderLeftColor: K,
        filter: lu,
        WebkitFilter: lu,
        mask: uu,
        WebkitMask: uu,
      }),
      (fu = (e) => du[e]),
      (pu = new Set([lu, uu])),
      (mu = new Set([`auto`, `none`, `0`])),
      (hu = class extends bl {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (typeof r == `string` && ((r = r.trim()), lc(r))) {
              let i = Jt(r, t.current);
              (i !== void 0 && (e[n] = i),
                n === e.length - 1 && (this.finalKeyframe = r));
            }
          }
          if ((this.resolveNoneKeyframes(), !ql.has(n) || e.length !== 2))
            return;
          let [r, i] = e,
            a = ru(r),
            o = ru(i);
          if (Be(r) !== Be(i) && hl[n]) {
            this.needsMeasurement = !0;
            return;
          }
          if (a !== o)
            if (fl(a) && fl(o))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                typeof n == `string` && (e[t] = parseFloat(n));
              }
            else hl[n] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++)
            (e[t] === null || _n(e[t])) && n.push(t);
          n.length && vn(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          (n === `height` && (this.suspendedScrollY = w.pageYOffset),
            (this.measuredOrigin = hl[n](
              e.measureViewportBox(),
              w.getComputedStyle(e.current),
            )),
            (t[0] = this.measuredOrigin));
          let r = t[t.length - 1];
          r !== void 0 && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          let { element: e, name: t, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(t);
          r && r.jump(this.measuredOrigin, !1);
          let i = n.length - 1,
            a = n[i];
          ((n[i] = hl[t](
            e.measureViewportBox(),
            w.getComputedStyle(e.current),
          )),
            a !== null &&
              this.finalKeyframe === void 0 &&
              (this.finalKeyframe = a),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes());
        }
      }),
      (gu = new Set([`opacity`, `clipPath`, `filter`, `transform`])),
      (_u = (e, t) => (t && typeof e == `number` ? t.transform(e) : e)),
      ({ schedule: vu, cancel: yu } = Re(queueMicrotask, !1)),
      (Z = { x: !1, y: !1 }),
      (bu = (e, t) => (t ? (e === t ? !0 : bu(e, t.parentElement)) : !1)),
      (xu = (e) =>
        e.pointerType === `mouse`
          ? typeof e.button != `number` || e.button <= 0
          : e.isPrimary !== !1),
      (Su = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`])),
      (Cu = new Set([`INPUT`, `SELECT`, `TEXTAREA`])),
      (wu = new WeakSet()),
      (Tu = (e, t) => {
        let n = e.currentTarget;
        if (!n) return;
        let r = On(() => {
          if (wu.has(n)) return;
          kn(n, `down`);
          let e = On(() => {
            kn(n, `up`);
          });
          (n.addEventListener(`keyup`, e, t),
            n.addEventListener(`blur`, () => kn(n, `cancel`), t));
        });
        (n.addEventListener(`keydown`, r, t),
          n.addEventListener(
            `blur`,
            () => n.removeEventListener(`keydown`, r),
            t,
          ));
      }),
      (Eu = new WeakSet()),
      (Du = new WeakMap()),
      (ku = (e, t, n) => (r, i) =>
        i && i[0]
          ? i[0][e + `Size`]
          : Mn(r) && `getBBox` in r
            ? r.getBBox()[t]
            : r[n]),
      (Au = ku(`inline`, `width`, `offsetWidth`)),
      (ju = ku(`block`, `height`, `offsetHeight`)),
      (Mu = new Set()),
      (Pu = [...nu, K, q]),
      (Fu = (e) => Pu.find(tu(e))),
      (Iu = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 })),
      (Lu = () => ({ x: Iu(), y: Iu() })),
      (Ru = () => ({ min: 0, max: 0 })),
      (Q = () => ({ x: Ru(), y: Ru() })),
      (zu = new WeakMap()),
      (Bu = [
        `animate`,
        `whileInView`,
        `whileFocus`,
        `whileHover`,
        `whileTap`,
        `whileDrag`,
        `exit`,
      ]),
      (Vu = [`initial`, ...Bu]),
      (Hu = { current: null }),
      (Uu = { current: !1 }),
      (Wu = w !== void 0),
      (Gu = [
        `AnimationStart`,
        `AnimationComplete`,
        `Update`,
        `BeforeLayoutMeasure`,
        `LayoutMeasure`,
        `LayoutAnimationStart`,
        `LayoutAnimationComplete`,
      ]),
      (Ku = {}),
      (qu = class {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            skipAnimations: i,
            blockInitialAnimation: a,
            visualState: o,
          },
          s = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = bl),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify(`Update`, this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = H.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), z.render(this.render, !1, !0));
            }));
          let { latestValues: c, renderState: l } = o;
          ((this.latestValues = c),
            (this.baseTarget = { ...c }),
            (this.initialValues = t.initial ? { ...c } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.skipAnimationsConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!a),
            (this.isControllingVariants = Qn(t)),
            (this.isVariantNode = $n(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current)));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this,
          );
          for (let e in d) {
            let t = d[e];
            c[e] !== void 0 && X(t) && t.set(c[e]);
          }
        }
        mount(e) {
          if (this.hasBeenMounted)
            for (let e in this.initialValues)
              (this.values.get(e)?.jump(this.initialValues[e]),
                (this.latestValues[e] = this.initialValues[e]));
          ((this.current = e),
            zu.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            this.reducedMotionConfig === `never`
              ? (this.shouldReduceMotion = !1)
              : this.reducedMotionConfig === `always`
                ? (this.shouldReduceMotion = !0)
                : (Uu.current || tr(), (this.shouldReduceMotion = Hu.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          for (let e in (this.projection && this.projection.unmount(),
          B(this.notifyUpdate),
          B(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        addChild(e) {
          (this.children.add(e),
            (this.enteringChildren ??= new Set()),
            this.enteringChildren.add(e));
        }
        removeChild(e) {
          (this.children.delete(e),
            this.enteringChildren && this.enteringChildren.delete(e));
        }
        bindToMotionValue(e, t) {
          if (
            (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
            t.accelerate && gu.has(e) && this.current instanceof HTMLElement)
          ) {
            let {
                factory: n,
                keyframes: r,
                times: i,
                ease: a,
                duration: o,
              } = t.accelerate,
              s = new Dl({
                element: this.current,
                name: e,
                keyframes: r,
                times: i,
                ease: a,
                duration: I(o),
              }),
              c = n(s);
            this.valueSubscriptions.set(e, () => {
              (c(), s.cancel());
            });
            return;
          }
          let n = dl.has(e);
          n && this.onBindTransform && this.onBindTransform();
          let r = t.on(`change`, (t) => {
              ((this.latestValues[e] = t),
                this.props.onUpdate && z.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender());
            }),
            i;
          (w !== void 0 &&
            w.MotionCheckAppearSync &&
            (i = w.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              (r(), i && i(), t.owner && t.stop());
            }));
        }
        sortNodePosition(e) {
          return !this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== e.type
            ? 0
            : this.sortInstanceNodePosition(this.current, e.current);
        }
        updateFeatures() {
          let e = `animation`;
          for (e in Ku) {
            let t = Ku[e];
            if (!t) continue;
            let { isEnabled: n, Feature: r } = t;
            if (
              (!this.features[e] &&
                r &&
                n(this.props) &&
                (this.features[e] = new r(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : Q();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          ((e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t));
          for (let t = 0; t < Gu.length; t++) {
            let n = Gu[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = e[`on` + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          ((this.prevMotionValues = er(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          (t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState));
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            n === void 0 &&
              t !== void 0 &&
              ((n = D(t === null ? void 0 : t, { owner: this })),
              this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          let n =
            this.latestValues[e] !== void 0 || !this.current
              ? this.latestValues[e]
              : (this.getBaseTargetFromProps(this.props, e) ??
                this.readValueFromInstance(this.current, e, this.options));
          return (
            n != null &&
              (typeof n == `string` && (Os(n) || ks(n))
                ? (n = parseFloat(n))
                : !Fu(n) && q.test(t) && (n = gn(e, t)),
              this.setBaseTarget(e, X(n) ? n.get() : n)),
            X(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          let { initial: t } = this.props,
            n;
          if (typeof t == `string` || typeof t == `object`) {
            let r = en(this.props, t, this.presenceContext?.custom);
            r && (n = r[e]);
          }
          if (t && n !== void 0) return n;
          let r = this.getBaseTargetFromProps(this.props, e);
          return r !== void 0 && !X(r)
            ? r
            : this.initialValues[e] !== void 0 && n === void 0
              ? void 0
              : this.baseTarget[e];
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new Ns()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
        scheduleRenderMicrotask() {
          vu.render(this.render);
        }
      }),
      (Ju = class extends qu {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = hu));
        }
        sortInstanceNodePosition(e, t) {
          return e.compareDocumentPosition(t) & 2 ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          let n = e.style;
          return n ? n[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          (delete t[e], delete n[e]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          X(e) &&
            (this.childSubscription = e.on(`change`, (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }),
      (Yu = class {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }),
      (Xu = 0.999999999999),
      (Zu = 1.0000000000001),
      (Qu = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`,
      }),
      ($u = ul.length),
      (ed = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`)
            if (G.test(e)) e = parseFloat(e);
            else return e;
          return `${Tr(e, t.target.x)}% ${Tr(e, t.target.y)}%`;
        },
      }),
      (td = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
          let r = e,
            i = q.parse(e);
          if (i.length > 5) return r;
          let a = q.createTransformer(e),
            o = typeof i[0] == `number` ? 0 : 1,
            s = n.x.scale * t.x,
            c = n.y.scale * t.y;
          ((i[0 + o] /= s), (i[1 + o] /= c));
          let l = J(s, c, 0.5);
          return (
            typeof i[2 + o] == `number` && (i[2 + o] /= l),
            typeof i[3 + o] == `number` && (i[3 + o] /= l),
            a(i)
          );
        },
      }),
      (nd = {
        borderRadius: {
          ...ed,
          applyTo: [
            `borderTopLeftRadius`,
            `borderTopRightRadius`,
            `borderBottomLeftRadius`,
            `borderBottomRightRadius`,
          ],
        },
        borderTopLeftRadius: ed,
        borderTopRightRadius: ed,
        borderBottomLeftRadius: ed,
        borderBottomRightRadius: ed,
        boxShadow: td,
      }),
      (rd = class extends Ju {
        constructor() {
          (super(...arguments),
            (this.type = `html`),
            (this.renderInstance = wr));
        }
        readValueFromInstance(e, t) {
          if (dl.has(t))
            return this.projection?.isProjecting ? Et(t) : ll(e, t);
          {
            let n = kr(e),
              r = (sc(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == `string` ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return br(e, t);
        }
        build(e, t, n) {
          Cr(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return Or(e, t, n);
        }
      }),
      (id = class extends qu {
        constructor() {
          (super(...arguments), (this.type = `object`));
        }
        readValueFromInstance(e, t) {
          if (Ar(t, e)) {
            let n = e[t];
            if (typeof n == `string` || typeof n == `number`) return n;
          }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(e, t) {
          delete t.output[e];
        }
        measureInstanceViewportBox() {
          return Q();
        }
        build(e, t) {
          Object.assign(e.output, t);
        }
        renderInstance(e, { output: t }) {
          Object.assign(e, t);
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }),
      (ad = { offset: `stroke-dashoffset`, array: `stroke-dasharray` }),
      (od = { offset: `strokeDashoffset`, array: `strokeDasharray` }),
      (sd = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`]),
      (cd = new Set([
        `baseFrequency`,
        `diffuseConstant`,
        `kernelMatrix`,
        `kernelUnitLength`,
        `keySplines`,
        `keyTimes`,
        `limitingConeAngle`,
        `markerHeight`,
        `markerWidth`,
        `numOctaves`,
        `targetX`,
        `targetY`,
        `surfaceScale`,
        `specularConstant`,
        `specularExponent`,
        `stdDeviation`,
        `tableValues`,
        `viewBox`,
        `gradientTransform`,
        `pathLength`,
        `startOffset`,
        `textLength`,
        `lengthAdjust`,
      ])),
      (ld = (e) => typeof e == `string` && e.toLowerCase() === `svg`),
      (ud = class extends Ju {
        constructor() {
          (super(...arguments),
            (this.type = `svg`),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Q));
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (dl.has(t)) {
            let e = fu(t);
            return (e && e.default) || 0;
          }
          return ((t = cd.has(t) ? t : cn(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return Pr(e, t, n);
        }
        build(e, t, n) {
          Mr(e, t, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(e, t, n, r) {
          Nr(e, t, n, r);
        }
        mount(e) {
          ((this.isSVGTag = ld(e.tagName)), super.mount(e));
        }
      }),
      (dd = Vu.length),
      (fd = [...Bu].reverse()),
      (pd = Bu.length),
      (md = 1e-4),
      (hd = 1 - md),
      (gd = 1 + md),
      (_d = 0.01),
      (vd = 0 - _d),
      (yd = 0 + _d),
      (bd = [`x`, `scaleX`, `originX`]),
      (xd = [`y`, `scaleY`, `originY`]),
      (Sd = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`]),
      (Cd = Sd.length),
      (wd = (e) => (typeof e == `string` ? parseFloat(e) : e)),
      (Td = (e) => typeof e == `number` || G.test(e)),
      (Ed = fi(0, 0.5, Gs)),
      (Dd = fi(0.5, 0.95, F)),
      (Od = (e, t) => e.depth - t.depth),
      (kd = class {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (Oe(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (ke(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(Od),
            (this.isDirty = !1),
            this.children.forEach(e));
        }
      }),
      (Ad = class {
        constructor() {
          this.members = [];
        }
        add(e) {
          Oe(this.members, e);
          for (let t = this.members.length - 1; t >= 0; t--) {
            let n = this.members[t];
            if (n === e || n === this.lead || n === this.prevLead) continue;
            let r = n.instance;
            r &&
              r.isConnected === !1 &&
              n.isPresent !== !1 &&
              !n.snapshot &&
              ke(this.members, n);
          }
          e.scheduleRender();
        }
        remove(e) {
          if (
            (ke(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t = this.members.findIndex((t) => e === t);
          if (t === 0) return !1;
          let n;
          for (let e = t; e >= 0; e--) {
            let t = this.members[e],
              r = t.instance;
            if (t.isPresent !== !1 && (!r || r.isConnected !== !1)) {
              n = t;
              break;
            }
          }
          return n ? (this.promote(n), !0) : !1;
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            (n.instance && n.scheduleRender(), e.scheduleRender());
            let r = n.options.layoutDependency,
              i = e.options.layoutDependency;
            if (!(r !== void 0 && i !== void 0 && r === i)) {
              let r = n.instance;
              (r && r.isConnected === !1 && !n.snapshot) ||
                ((e.resumeFrom = n),
                t && (e.resumeFrom.preserveOpacity = !0),
                n.snapshot &&
                  ((e.snapshot = n.snapshot),
                  (e.snapshot.latestValues =
                    n.animationValues || n.latestValues)),
                e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
            }
            let { crossfade: a } = e.options;
            a === !1 && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: n } = e;
            (t.onExitComplete && t.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete());
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }),
      (jd = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }),
      (Md = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }),
      (Nd = [``, `X`, `Y`, `Z`]),
      (Pd = 1e3),
      (Fd = 0),
      (Id = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }),
      (Ld = (e) =>
        d !== void 0 && d.userAgent && d.userAgent.toLowerCase().includes(e)),
      (Rd = Ld(`applewebkit/`) && !Ld(`chrome/`) ? Math.round : F),
      (zd = yi({
        attachResizeListener: (e, t) => mi(e, `resize`, t),
        measureScroll: () => ({
          x:
            document.documentElement.scrollLeft ||
            document.body?.scrollLeft ||
            0,
          y:
            document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      })),
      (Bd = (e) => !e.isLayoutDirty && e.willUpdate(!1)),
      (Vd = { current: void 0 }),
      (Hd = yi({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!Vd.current) {
            let e = new zd({});
            (e.mount(w), e.setOptions({ layoutScroll: !0 }), (Vd.current = e));
          }
          return Vd.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = t === void 0 ? `none` : t;
        },
        checkIsScrollRoot: (e) => w.getComputedStyle(e).position === `fixed`,
      })),
      tc.reduce((e, t) => ((e[t] = (e) => B(e)), e), {}),
      ($ = a({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: `never`,
      })),
      (Ud = class extends S {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (
            t &&
            e.isPresent &&
            !this.props.isPresent &&
            this.props.pop !== !1
          ) {
            let e = t.offsetParent,
              n = (bn(e) && e.offsetWidth) || 0,
              r = (bn(e) && e.offsetHeight) || 0,
              i = this.props.sizeRef.current;
            ((i.height = t.offsetHeight || 0),
              (i.width = t.offsetWidth || 0),
              (i.top = t.offsetTop),
              (i.left = t.offsetLeft),
              (i.right = n - i.width - i.left),
              (i.bottom = r - i.height - i.top));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }),
      (Wd = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: r,
        custom: i,
        presenceAffectsLayout: a,
        mode: o,
        anchorX: s,
        anchorY: l,
        root: u,
      }) => {
        let d = j(Ki),
          f = p(),
          m = !0,
          h = _(
            () => (
              (m = !1),
              {
                id: f,
                initial: t,
                isPresent: n,
                custom: i,
                onExitComplete: (e) => {
                  d.set(e, !0);
                  for (let e of d.values()) if (!e) return;
                  r && r();
                },
                register: (e) => (d.set(e, !1), () => d.delete(e)),
              }
            ),
            [n, d, r],
          );
        return (
          a && m && (h = { ...h }),
          _(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [n]),
          c(() => {
            !n && !d.size && r && r();
          }, [n]),
          (e = y(Gi, {
            pop: o === `popLayout`,
            isPresent: n,
            anchorX: s,
            anchorY: l,
            root: u,
            children: e,
          })),
          y(Es.Provider, { value: h, children: e })
        );
      }),
      (Gd = (e) => e.key || ``),
      (Kd = ({
        children: e,
        custom: n,
        initial: r = !0,
        onExitComplete: a,
        presenceAffectsLayout: o = !0,
        mode: s = `sync`,
        propagate: c = !1,
        anchorX: u = `left`,
        anchorY: d = `top`,
        root: f,
      }) => {
        let [p, h] = qi(c),
          g = _(() => Ji(e), [e]),
          v = c && !p ? [] : g.map(Gd),
          b = l(!0),
          x = l(g),
          S = j(() => new Map()),
          C = l(new Set()),
          [ee, w] = i(g),
          [T, E] = i(g);
        Ts(() => {
          ((b.current = !1), (x.current = g));
          for (let e = 0; e < T.length; e++) {
            let t = Gd(T[e]);
            v.includes(t)
              ? (S.delete(t), C.current.delete(t))
              : S.get(t) !== !0 && S.set(t, !1);
          }
        }, [T, v.length, v.join(`-`)]);
        let te = [];
        if (g !== ee) {
          let e = [...g];
          for (let t = 0; t < T.length; t++) {
            let n = T[t],
              r = Gd(n);
            v.includes(r) || (e.splice(t, 0, n), te.push(n));
          }
          return (s === `wait` && te.length && (e = te), E(Ji(e)), w(g), null);
        }
        let { forceRender: ne } = t(Cs);
        return y(m, {
          children: T.map((e) => {
            let t = Gd(e),
              i = c && !p ? !1 : g === T || v.includes(t);
            return y(
              Wd,
              {
                isPresent: i,
                initial: !b.current || r ? void 0 : !1,
                custom: n,
                presenceAffectsLayout: o,
                mode: s,
                root: f,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (C.current.has(t)) return;
                      if ((C.current.add(t), S.has(t))) S.set(t, !0);
                      else return;
                      let e = !0;
                      (S.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (ne?.(), E(x.current), c && h?.(), a && a()));
                    },
                anchorX: u,
                anchorY: d,
                children: e,
              },
              t,
            );
          }),
        });
      }),
      (qd = a(null)),
      (Jd = (e) => e === !0),
      (Yd = (e) => Jd(e === !0) || e === `id`),
      (Xd = ({ children: e, id: n, inherit: r = !0 }) => {
        let i = t(Cs),
          a = t(qd),
          [o, s] = Xi(),
          c = l(null),
          u = i.id || a;
        c.current === null &&
          (Yd(r) && u && (n = n ? u + `-` + n : u),
          (c.current = { id: n, group: (Jd(r) && i.group) || Vi() }));
        let d = _(() => ({ ...c.current, forceRender: o }), [s]);
        return y(Cs.Provider, { value: d, children: e });
      }),
      (Zd = a({ strict: !1 })),
      (Qd = {
        animation: [
          `animate`,
          `variants`,
          `whileHover`,
          `whileTap`,
          `exit`,
          `whileInView`,
          `whileFocus`,
          `whileDrag`,
        ],
        exit: [`exit`],
        drag: [`drag`, `dragControls`],
        focus: [`whileFocus`],
        hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
        tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
        pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
        inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
        layout: [`layout`, `layoutId`],
      }),
      ($d = !1),
      (ef = new Set(
        `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
          `.`,
        ),
      )),
      (tf = (e) => !ea(e)));
    try {
      ta(Ss().default);
    } catch {}
    ((nf = a({})),
      (rf = (e) => (n, r) => {
        let i = t(nf),
          a = t(Es),
          o = () => ia(e, n, i, a);
        return r ? o() : j(o);
      }),
      (af = a({})),
      (of = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      })),
      (sf = () => ({ ...of(), attrs: {} })),
      (cf = [
        `animate`,
        `circle`,
        `defs`,
        `desc`,
        `ellipse`,
        `g`,
        `image`,
        `line`,
        `filter`,
        `marker`,
        `mask`,
        `metadata`,
        `path`,
        `pattern`,
        `polygon`,
        `polyline`,
        `rect`,
        `stop`,
        `switch`,
        `symbol`,
        `svg`,
        `text`,
        `tspan`,
        `use`,
        `view`,
      ]),
      (lf = rf({ scrapeMotionValuesFromProps: Or, createRenderState: of })),
      (uf = rf({ scrapeMotionValuesFromProps: Pr, createRenderState: sf })),
      (df = Symbol.for(`motionComponentSymbol`)),
      (ff = class extends Yu {
        constructor(e) {
          (super(e), (e.animationState ||= Rr(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          Xn(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }),
      (pf = 0),
      (mf = class extends Yu {
        constructor() {
          (super(...arguments), (this.id = pf++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              t(this.id);
            });
        }
        mount() {
          let { register: e, onExitComplete: t } =
            this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      }),
      (hf = { animation: { Feature: ff }, exit: { Feature: mf } }),
      (gf = (e) => (t) => xu(t) && e(t, Ea(t))),
      (_f = (e, t) => Math.abs(e - t)),
      (vf = (e, t) =>
        (t.isSVG ?? ma(e))
          ? new ud(t)
          : new rd(t, { allowProjection: e !== u })),
      (yf = ({ current: e }) => (e ? e.ownerDocument.defaultView : null)),
      (bf = new Set([`auto`, `scroll`])),
      (xf = class {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r = w,
            dragSnapToOrigin: i = !1,
            distanceThreshold: a = 3,
            element: o,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = w),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (e) => {
              this.handleScroll(e.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(w);
            }),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = ja(this.lastMoveEventInfo, this.history),
                t = this.startEvent !== null,
                n = Oa(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!t && !n) return;
              let { point: r } = e,
                { timestamp: i } = V;
              this.history.push({ ...r, timestamp: i });
              let { onStart: a, onMove: o } = this.handlers;
              (t ||
                (a && a(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastMoveEventInfo = ka(t, this.transformPagePoint)),
                z.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: r,
                resumeAnimation: i,
              } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = ja(
                e.type === `pointercancel`
                  ? this.lastMoveEventInfo
                  : ka(t, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && n && n(e, a), r && r(e, a));
            }),
            !xu(e))
          )
            return;
          ((this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.distanceThreshold = a),
            (this.contextWindow = r || w));
          let s = ka(Ea(e), this.transformPagePoint),
            { point: c } = s,
            { timestamp: l } = V;
          this.history = [{ ...c, timestamp: l }];
          let { onSessionStart: u } = t;
          (u && u(e, ja(s, this.history)),
            (this.removeListeners = js(
              Da(this.contextWindow, `pointermove`, this.handlePointerMove),
              Da(this.contextWindow, `pointerup`, this.handlePointerUp),
              Da(this.contextWindow, `pointercancel`, this.handlePointerUp),
            )),
            o && this.startScrollTracking(o));
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t;) {
            let e = getComputedStyle(t);
            ((bf.has(e.overflowX) || bf.has(e.overflowY)) &&
              this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
              (t = t.parentElement));
          }
          (this.scrollPositions.set(w, { x: w.scrollX, y: w.scrollY }),
            w.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
            w.addEventListener(`scroll`, this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (w.removeEventListener(`scroll`, this.onElementScroll, {
                capture: !0,
              }),
                w.removeEventListener(`scroll`, this.onWindowScroll));
            }));
        }
        handleScroll(e) {
          let t = this.scrollPositions.get(e);
          if (!t) return;
          let n = e === w,
            r = n
              ? { x: w.scrollX, y: w.scrollY }
              : { x: e.scrollLeft, y: e.scrollTop },
            i = { x: r.x - t.x, y: r.y - t.y };
          (i.x === 0 && i.y === 0) ||
            (n
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += i.x),
                (this.lastMoveEventInfo.point.y += i.y))
              : this.history.length > 0 &&
                ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
            this.scrollPositions.set(e, r),
            z.update(this.updatePoint, !0));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            B(this.updatePoint));
        }
      }),
      (Sf = 0.35),
      (Cf = new WeakMap()),
      (wf = class {
        constructor(e) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Q()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = e));
        }
        start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && r.isPresent === !1) return;
          let i = (e) => {
              (t && this.snapToCursor(Ea(e).point), this.stopAnimation());
            },
            a = (e, t) => {
              let {
                drag: n,
                dragPropagation: r,
                onDragStart: i,
              } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = Sn(n)),
                !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                A((e) => {
                  let t = this.getAxisMotionValue(e).get() || 0;
                  if (W.test(t)) {
                    let { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      let r = n.layout.layoutBox[e];
                      r && (t = k(r) * (parseFloat(t) / 100));
                    }
                  }
                  this.originPoint[e] = t;
                }),
                i && z.update(() => i(e, t), !1, !0),
                sn(this.visualElement, `transform`));
              let { animationState: a } = this.visualElement;
              a && a.setActive(`whileDrag`, !0);
            },
            o = (e, t) => {
              ((this.latestPointerEvent = e), (this.latestPanInfo = t));
              let {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: a,
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              let { offset: o } = t;
              if (r && this.currentDirection === null) {
                ((this.currentDirection = Ja(o)),
                  this.currentDirection !== null &&
                    i &&
                    i(this.currentDirection));
                return;
              }
              (this.updateAxis(`x`, t.point, o),
                this.updateAxis(`y`, t.point, o),
                this.visualElement.render(),
                a && z.update(() => a(e, t), !1, !0));
            },
            s = (e, t) => {
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                this.stop(e, t),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            c = () => {
              let { dragSnapToOrigin: e } = this.getProps();
              (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new xf(
            e,
            {
              onSessionStart: i,
              onStart: a,
              onMove: o,
              onSessionEnd: s,
              resumeAnimation: c,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              distanceThreshold: n,
              contextWindow: yf(this.visualElement),
              element: this.visualElement.current,
            },
          );
        }
        stop(e, t) {
          let n = e || this.latestPointerEvent,
            r = t || this.latestPanInfo,
            i = this.isDragging;
          if ((this.cancel(), !i || !r || !n)) return;
          let { velocity: a } = r;
          this.startAnimation(a);
          let { onDragEnd: o } = this.getProps();
          o && z.postRender(() => o(n, r));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: n } = this.getProps();
          (!n &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive(`whileDrag`, !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(),
            (this.panSession = void 0));
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !qa(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            a = this.originPoint[e] + n[e];
          (this.constraints &&
            this.constraints[e] &&
            (a = Fa(a, this.constraints[e], this.elastic[e])),
            i.set(a));
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            r = this.constraints;
          (e && _a(e)
            ? (this.constraints ||= this.resolveRefConstraints())
            : e && n
              ? (this.constraints = La(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = Ha(t)),
            r !== this.constraints &&
              !_a(e) &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              A((e) => {
                this.constraints !== !1 &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = Va(
                    n.layoutBox[e],
                    this.constraints[e],
                  ));
              }));
        }
        resolveRefConstraints() {
          let { dragConstraints: e, onMeasureDragConstraints: t } =
            this.getProps();
          if (!e || !_a(e)) return !1;
          let n = e.current;
          N(
            n !== null,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            `drag-constraints-ref`,
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let i = xr(n, r.root, this.visualElement.getTransformPagePoint()),
            a = za(r.layout.layoutBox, i);
          if (t) {
            let e = t(ar(a));
            ((this.hasMutatedConstraints = !!e), e && (a = ir(e)));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: a,
              onDragTransitionEnd: o,
            } = this.getProps(),
            s = this.constraints || {},
            c = A((o) => {
              if (!qa(o, t, this.currentDirection)) return;
              let c = (s && s[o]) || {};
              a && (c = { min: 0, max: 0 });
              let l = r ? 200 : 1e6,
                u = r ? 40 : 1e7,
                d = {
                  type: `inertia`,
                  velocity: n ? e[o] : 0,
                  bounceStiffness: l,
                  bounceDamping: u,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...c,
                };
              return this.startAxisValueAnimation(o, d);
            });
          return Promise.all(c).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return (
            sn(this.visualElement, e),
            n.start(Kl(e, n, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          A((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[t] ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0,
            )
          );
        }
        snapToCursor(e) {
          A((t) => {
            let { drag: n } = this.getProps();
            if (!qa(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: a } = r.layout.layoutBox[t],
                o = i.get() || 0;
              i.set(e[t] - J(n, a, 0.5) + o);
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!_a(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          A((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && this.constraints !== !1) {
              let n = t.get();
              r[e] = Ba({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = i
            ? i({}, ``)
            : `none`),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            A((t) => {
              if (!qa(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: a } = this.constraints[t];
              n.set(J(i, a, r[t]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Cf.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = Da(e, `pointerdown`, (t) => {
              let { drag: n, dragListener: r = !0 } = this.getProps(),
                i = t.target,
                a = i !== e && Dn(i);
              n && r && !a && this.start(t);
            }),
            n,
            r = () => {
              let { dragConstraints: t } = this.getProps();
              _a(t) &&
                t.current &&
                ((this.constraints = this.resolveRefConstraints()),
                (n ||= Ka(e, t.current, () =>
                  this.scalePositionWithinConstraints(),
                )));
            },
            { projection: i } = this.visualElement,
            a = i.addEventListener(`measure`, r);
          (i &&
            !i.layout &&
            (i.root && i.root.updateScroll(), i.updateLayout()),
            z.read(r));
          let o = mi(w, `resize`, () => this.scalePositionWithinConstraints()),
            s = i.addEventListener(
              `didUpdate`,
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (A((t) => {
                    let n = this.getAxisMotionValue(t);
                    n &&
                      ((this.originPoint[t] += e[t].translate),
                      n.set(n.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (o(), t(), a(), s && s(), n && n());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = Sf,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: o,
          };
        }
      }),
      (Tf = class extends Yu {
        constructor(e) {
          (super(e),
            (this.removeGroupControls = F),
            (this.removeListeners = F),
            (this.controls = new wf(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || F));
        }
        update() {
          let { dragControls: e } = this.node.getProps(),
            { dragControls: t } = this.node.prevProps || {};
          e !== t &&
            (this.removeGroupControls(),
            e && (this.removeGroupControls = e.subscribe(this.controls)));
        }
        unmount() {
          (this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession());
        }
      }),
      (Ef = (e) => (t, n) => {
        e && z.update(() => e(t, n), !1, !0);
      }),
      (Df = class extends Yu {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = F));
        }
        onPointerDown(e) {
          this.session = new xf(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: yf(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: n,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: Ef(e),
            onStart: Ef(t),
            onMove: Ef(n),
            onEnd: (e, t) => {
              (delete this.session, r && z.postRender(() => r(e, t)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = Da(
            this.node.current,
            `pointerdown`,
            (e) => this.onPointerDown(e),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }),
      (Of = !1),
      (kf = class extends S {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: i } = e;
          (i &&
            (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            Of && i.root.didUpdate(),
            i.addEventListener(`animationComplete`, () => {
              this.safeToRemove();
            }),
            i.setOptions({
              ...i.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (jd.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: n,
              drag: r,
              isPresent: i,
            } = this.props,
            { projection: a } = n;
          return a
            ? ((a.isPresent = i),
              e.layoutDependency !== t &&
                a.setOptions({ ...a.options, layoutDependency: t }),
              (Of = !0),
              r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== i &&
                (i
                  ? a.promote()
                  : a.relegate() ||
                    z.postRender(() => {
                      let e = a.getStack();
                      (!e || !e.members.length) && this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            vu.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = e;
          ((Of = !0),
            r &&
              (r.scheduleCheckAfterUnmount(),
              t && t.group && t.group.remove(r),
              n && n.deregister && n.deregister(r)));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }),
      (Af = {
        pan: { Feature: Df },
        drag: { Feature: Tf, ProjectionNode: Hd, MeasureLayout: Ya },
      }),
      (jf = class extends Yu {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = Tn(
              e,
              (e, t) => (
                Xa(this.node, t, `Start`),
                (e) => Xa(this.node, e, `End`)
              ),
            ));
        }
        unmount() {}
      }),
      (Mf = class extends Yu {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(`:focus-visible`);
          } catch {
            e = !0;
          }
          !e ||
            !this.node.animationState ||
            (this.node.animationState.setActive(`whileFocus`, !0),
            (this.isActive = !0));
        }
        onBlur() {
          !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive(`whileFocus`, !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = js(
            mi(this.node.current, `focus`, () => this.onFocus()),
            mi(this.node.current, `blur`, () => this.onBlur()),
          );
        }
        unmount() {}
      }),
      (Nf = class extends Yu {
        mount() {
          let { current: e } = this.node;
          if (!e) return;
          let { globalTapTarget: t, propagate: n } = this.node.props;
          this.unmount = jn(
            e,
            (e, t) => (
              Za(this.node, t, `Start`),
              (e, { success: t }) => Za(this.node, e, t ? `End` : `Cancel`)
            ),
            { useGlobalTarget: t, stopPropagation: n?.tap === !1 },
          );
        }
        unmount() {}
      }),
      (Pf = new WeakMap()),
      (Ff = new WeakMap()),
      (If = (e) => {
        let t = Pf.get(e.target);
        t && t(e);
      }),
      (Lf = (e) => {
        e.forEach(If);
      }),
      (Rf = { some: 0, all: 1 }),
      (zf = class extends Yu {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = `some`, once: i } = e,
            a = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: typeof r == `number` ? r : Rf[r],
            };
          return $a(this.node.current, a, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), i && !t && this.hasEnteredView)
            )
              return;
            (t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive(`whileInView`, t));
            let { onViewportEnter: n, onViewportLeave: r } =
                this.node.getProps(),
              a = t ? n : r;
            a && a(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver > `u`) return;
          let { props: e, prevProps: t } = this.node;
          [`amount`, `margin`, `root`].some(eo(e, t)) && this.startObserver();
        }
        unmount() {}
      }),
      (Bf = {
        inView: { Feature: zf },
        tap: { Feature: Nf },
        focus: { Feature: Mf },
        hover: { Feature: jf },
      }),
      (Vf = { layout: { ProjectionNode: Hd, MeasureLayout: Ya } }),
      (Hf = Ta({ ...hf, ...Bf, ...Af, ...Vf }, vf)),
      (Uf = { renderer: vf, ...hf, ...Bf }),
      { ...Uf, ...Af, ...Vf },
      { ...hf },
      (Wf = 50),
      (Gf = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      })),
      (Kf = () => ({ time: 0, x: Gf(), y: Gf() })),
      (qf = {
        x: { length: `Width`, position: `Left` },
        y: { length: `Height`, position: `Top` },
      }),
      (Jf = { start: 0, center: 0.5, end: 1 }),
      (Yf = [0, 0]),
      (Xf = {
        Enter: [
          [0, 1],
          [1, 1],
        ],
        Exit: [
          [0, 0],
          [1, 0],
        ],
        Any: [
          [1, 0],
          [0, 1],
        ],
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      (Zf = { x: 0, y: 0 }),
      (Qf = new WeakMap()),
      ($f = new WeakMap()),
      (ep = new WeakMap()),
      (tp = new WeakMap()),
      (np = new WeakMap()),
      (rp = (e) => (e === document.scrollingElement ? w : e)),
      (ip = new Map()),
      (ap = () => ({
        scrollX: D(0),
        scrollY: D(0),
        scrollXProgress: D(0),
        scrollYProgress: D(0),
      })),
      (op = (e) => (e ? !e.current : !1)),
      (sp = class extends Zl {
        constructor() {
          (super(...arguments), (this.isEnabled = !1));
        }
        add(e) {
          (dl.has(e) || gu.has(e)) && ((this.isEnabled = !0), this.update());
        }
        update() {
          this.set(this.isEnabled ? `transform` : `auto`);
        }
      }),
      (cp = `easeInOut`),
      (lp = 20),
      (up = (e) => typeof e == `number`),
      (dp = (e) => e.every(up)),
      (fp = es()),
      (pp = ts),
      (mp = { some: 0, all: 1 }),
      (hp = () => ({})),
      rf({ scrapeMotionValuesFromProps: hp, createRenderState: hp }),
      (gp = {}),
      ue(gp, { Group: () => vp, Item: () => Tp }),
      (_p = a(null)),
      (vp = C(ds)),
      (yp = 50),
      (bp = 25),
      (xp = new Set([`auto`, `scroll`])),
      (Sp = new WeakMap()),
      (Cp = new WeakMap()),
      (wp = null),
      (Tp = C(bs)));
  }),
  Dp = e(() => {
    Ep();
  });
export {
  Ce as $,
  Wn as A,
  ko as B,
  Hf as C,
  vo as D,
  gi as E,
  cs as F,
  wo as G,
  os as H,
  is as I,
  le as J,
  zu as K,
  ls as L,
  rs as M,
  pp as N,
  pt as O,
  ts as P,
  we as Q,
  xo as R,
  it as S,
  eu as T,
  bo as U,
  Ao as V,
  Oo as W,
  _e as X,
  ye as Y,
  pe as Z,
  Ep as _,
  $ as a,
  De as at,
  X as b,
  Es as c,
  Er as d,
  Ee as et,
  fp as f,
  ss as g,
  z as h,
  ra as i,
  fe as it,
  Yn as j,
  Un as k,
  af as l,
  B as m,
  Kd as n,
  be as nt,
  P as o,
  wt as p,
  Ps as q,
  Xd as r,
  ve as rt,
  Zl as s,
  Dp as t,
  Te as tt,
  sp as u,
  gt as v,
  D as w,
  ea as x,
  ns as y,
  qi as z,
};
//# sourceMappingURL=motion.mjs.map
