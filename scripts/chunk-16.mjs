import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  C as n,
  E as r,
  F as i,
  L as a,
  M as ee,
  N as o,
  O as s,
  P as c,
  T as l,
  b as u,
  d,
  j as f,
  k as p,
  l as m,
  o as h,
  v as g,
  z as _,
} from "./react.mjs";
import {
  B as v,
  C as y,
  F as te,
  G as ne,
  R as re,
  a as b,
  h as ie,
  r as ae,
  t as x,
} from "./motion.mjs";
import {
  B as S,
  C,
  D as w,
  E as T,
  M as E,
  N as D,
  O,
  T as oe,
  V as k,
  _t as A,
  a as j,
  dt as M,
  gt as N,
  it as se,
  k as P,
  q as F,
  r as I,
  rt as L,
} from "./core-lib.mjs";
import { d as R, f as z } from "./shared.mjs";
import { i as ce, n as B, r as V, t as H } from "./chunk-06.mjs";
var U,
  le = e(() => {
    U = (e) => e;
  }),
  ue = e(() => {
    le();
  }),
  de = e(() => {
    ue();
  });
function W(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var fe = e(() => {}),
  G,
  pe = e(() => {
    ((G = {}),
      Object.defineProperty(G, `__esModule`, { value: !0 }),
      (G.warning = function () {}),
      (G.invariant = function () {}),
      G.__esModule,
      G.warning,
      G.invariant);
  }),
  K = e(() => {
    le();
  });
function q(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function me(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = q(e),
    ee = new WeakMap(),
    o = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = ee.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function`
                ? ee.set(e.target, n)
                : o.unobserve(e.target);
            } else n && (n(e), ee.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Fe[i] },
    );
  return (a.forEach((e) => o.observe(e)), () => o.disconnect());
}
function he(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function ge({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ie.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return he(e, n);
        },
      });
    });
}
function J(e) {
  e.forEach(ge);
}
function _e() {
  typeof ResizeObserver < `u` && (Y = new ResizeObserver(J));
}
function ve(e, t) {
  Y || _e();
  let n = q(e);
  return (
    n.forEach((e) => {
      let n = Ie.get(e);
      (n || ((n = new Set()), Ie.set(e, n)), n.add(t), Y?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Ie.get(e);
        (n?.delete(t), (n != null && n.size) || Y == null || Y.unobserve(e));
      });
    }
  );
}
function ye() {
  ((Re = () => {
    let e = { width: _.innerWidth, height: _.innerHeight },
      t = { target: _, size: e, contentSize: e };
    Le.forEach((e) => e(t));
  }),
    _.addEventListener(`resize`, Re));
}
function be(e) {
  return (
    Le.add(e),
    Re || ye(),
    () => {
      (Le.delete(e), !Le.size && Re && (Re = void 0));
    }
  );
}
function xe(e, t) {
  return typeof e == `function` ? be(e) : ve(e, t);
}
function Se(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function Ce(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Y,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He = e(() => {
    for (let e in (a(),
    le(),
    de(),
    fe(),
    pe(),
    K(),
    (we = [``, `X`, `Y`, `Z`]),
    (Te = [`translate`, `scale`, `rotate`, `skew`]),
    (Ee = {
      syntax: `<angle>`,
      initialValue: `0deg`,
      toDefaultUnit: (e) => e + `deg`,
    }),
    (De = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: Ee,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: U },
      skew: Ee,
    }),
    (Oe = new Map()),
    (ke = (e) => `--motion-${e}`),
    (Ae = [`x`, `y`, `z`]),
    Te.forEach((e) => {
      we.forEach((t) => {
        (Ae.push(e + t), Oe.set(ke(e + t), De[e]));
      });
    }),
    new Set(Ae),
    (je = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (Me = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          je({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!je({ opacity: [0, 1] }).finished,
    }),
    (Ne = {}),
    (Pe = {}),
    Me))
      Pe[e] = () => (Ne[e] === void 0 && (Ne[e] = Me[e]()), Ne[e]);
    ((Fe = { any: 0, all: 1 }),
      (Ie = new WeakMap()),
      (Le = new Set()),
      (ze = {
        isActive: (e) => !!e.inView,
        subscribe: (
          e,
          { enable: t, disable: n },
          { inViewOptions: r = {} },
        ) => {
          let { once: i } = r;
          return me(
            e,
            (r) => {
              if ((t(), Ce(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), Ce(e, `viewleave`, t));
                };
            },
            W(r, [`once`]),
          );
        },
      }),
      (Be = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), Se(e, t, r));
      }),
      (Ve = {
        inView: ze,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Be(e, `hoverstart`, t),
              i = Be(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(),
                  Se(e, `pressend`, t),
                  _.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(),
                  Se(e, `pressstart`, n),
                  _.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i),
                  _.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Ve)]);
  });
function Ue(e) {
  let {
      slots: t = [],
      gap: a,
      padding: c,
      paddingPerSide: l,
      paddingTop: u,
      paddingRight: h,
      paddingBottom: g,
      paddingLeft: _,
      speed: b,
      hoverFactor: x,
      direction: S,
      alignment: w,
      sizingOptions: T,
      fadeOptions: E,
      style: D,
    } = e,
    {
      fadeContent: O,
      overflow: oe,
      fadeWidth: k,
      fadeInset: A,
      fadeAlpha: j,
    } = E,
    { widthType: M, heightType: N } = T,
    se = l ? `${u}px ${h}px ${g}px ${_}px` : `${c}px`,
    P = C.current(),
    F = P === C.canvas || P === C.export,
    I = t.filter(Boolean),
    L = r.count(I),
    R = L > 0;
  S === !0 && (S = `left`);
  let z = S === `left` || S === `right`,
    ce = re(0),
    B = Ge[S];
  ne(ce, B);
  let V = s(null),
    H = f(() => [{ current: null }, { current: null }], []),
    [U, le] = i({ parent: null, children: null }),
    ue = null,
    de = [],
    W = 0,
    fe = 0;
  (F && ((W = L ? Math.floor(10 / L) : 0), (fe = 1)),
    !F &&
      R &&
      U.parent &&
      ((W = Math.round((U.parent / U.children) * 2) + 1),
      (W = Math.min(W, We)),
      (fe = 1)));
  let G = ee(() => {
      if (R && V.current) {
        let e = z ? V.current.offsetWidth : V.current.offsetHeight,
          t = H[0].current
            ? z
              ? H[0].current.offsetLeft
              : H[0].current.offsetTop
            : 0;
        le({
          parent: e,
          children:
            (H[1].current
              ? z
                ? H[1].current.offsetLeft + H[1].current.offsetWidth
                : H[1].current.offsetTop + H[1].current.offsetHeight
              : 0) -
            t +
            a,
        });
      }
    }, []),
    pe = F ? { contentVisibility: `auto` } : {};
  if (R) {
    if (!F) {
      let e = s(!0);
      n(
        () => (
          ie.read(G, !1, !0),
          xe(V.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && ie.read(G, !1, !0),
              (e.current = !1));
          })
        ),
        [],
      );
    }
    ue = r.map(I, (e, t) => {
      let n;
      (t === 0 && (n = H[0]), t === I.length - 1 && (n = H[1]));
      let r = {
        width: M ? e.props?.width : `100%`,
        height: N ? e.props?.height : `100%`,
      };
      return m(ae, {
        inherit: `id`,
        children: m(`li`, {
          ref: n,
          style: r,
          children: p(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...pe },
              layoutId: e.props.layoutId
                ? e.props.layoutId + `-original-` + t
                : void 0,
            },
            e.props?.children,
          ),
        }),
      });
    });
  }
  let K = F ? !0 : te(V);
  if (!F)
    for (let e = 0; e < W; e++)
      de = de.concat(
        r.map(I, (t, n) =>
          m(
            ae,
            {
              inherit: `id`,
              children: m(
                `li`,
                {
                  style: {
                    width: M ? t.props?.width : `100%`,
                    height: N ? t.props?.height : `100%`,
                    willChange: K ? `transform` : void 0,
                  },
                  "aria-hidden": !0,
                  children: p(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: M ? t.props?.width : `100%`,
                        height: N ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...pe,
                      },
                      layoutId: t.props.layoutId
                        ? t.props.layoutId + `-dupe-` + e
                        : void 0,
                    },
                    t.props?.children,
                  ),
                },
                e + `li` + n,
              ),
            },
            e + `lg` + n,
          ),
        ),
      );
  let q = U.children + U.children * Math.round(U.parent / U.children);
  (s(null), s(null), s(0));
  let me = s(!1),
    he = v(),
    ge = s(null),
    J = s(null);
  if (!F) {
    o(() => {
      if (!(he || !q || !b))
        return (
          (J.current = ge.current.animate(
            { transform: [B(0), B(q)] },
            {
              duration: (Math.abs(q) / b) * 1e3,
              iterations: 1 / 0,
              easing: `linear`,
            },
          )),
          () => J.current.cancel()
        );
    }, [x, q, b]);
    let e = ee(() => {
      if (!J.current) return;
      let e = document.hidden;
      K && !e && J.current.playState === `paused`
        ? J.current.play()
        : (!K || e) && J.current.playState === `running` && J.current.pause();
    }, [K]);
    (o(() => {
      e();
    }, [K, x, q, b]),
      o(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e],
      ));
  }
  let _e = z ? `to right` : `to bottom`,
    ve = k / 2,
    ye = 100 - k / 2,
    be = `linear-gradient(${_e}, rgba(0, 0, 0, ${j}) ${Ze(A, 0, ve)}%, rgba(0, 0, 0, 1) ${ve}%, rgba(0, 0, 0, 1) ${ye}%, rgba(0, 0, 0, ${j}) ${100 - A}%)`;
  return R
    ? m(`section`, {
        style: {
          ...Ke,
          opacity: fe,
          WebkitMaskImage: O ? be : void 0,
          maskImage: O ? be : void 0,
          overflow: oe ? `visible` : `hidden`,
          padding: se,
        },
        ref: V,
        children: d(y.ul, {
          ref: ge,
          style: {
            ...Ke,
            gap: a,
            top: S === `bottom` && Qe(q) ? -q : void 0,
            left: S === `right` && Qe(q) ? -q : void 0,
            placeItems: w,
            position: `relative`,
            flexDirection: z ? `row` : `column`,
            ...D,
            willChange: F || !K ? `auto` : `transform`,
            transform: B(0),
          },
          onMouseEnter: () => {
            ((me.current = !0), J.current && (J.current.playbackRate = x));
          },
          onMouseLeave: () => {
            ((me.current = !1), J.current && (J.current.playbackRate = 1));
          },
          children: [ue, de],
        }),
      })
    : d(`section`, {
        style: qe,
        children: [
          m(`div`, { style: Je, children: `✨` }),
          m(`p`, { style: Ye, children: `Connect to Content` }),
          m(`p`, {
            style: Xe,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    (h(),
      l(),
      F(),
      x(),
      He(),
      (We = 100),
      (Ge = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Ue.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: {
          fadeContent: !0,
          overflow: !1,
          fadeWidth: 25,
          fadeAlpha: 0,
          fadeInset: 0,
        },
        direction: !0,
      }),
      P(Ue, {
        slots: {
          type: j.Array,
          title: `Children`,
          control: { type: j.ComponentInstance },
        },
        speed: {
          type: j.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: j.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [
            `direction-left`,
            `direction-right`,
            `direction-up`,
            `direction-down`,
          ],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: j.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: j.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: j.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: j.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: j.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: j.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: j.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: j.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: j.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: j.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: j.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: j.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: j.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Ke = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (qe = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Je = { fontSize: 32, marginBottom: 10 }),
      (Ye = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: `center`,
      }),
      (Xe = {
        margin: 0,
        opacity: 0.7,
        maxWidth: 150,
        lineHeight: 1.5,
        textAlign: `center`,
      }),
      (Ze = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Qe = (e) => typeof e == `number` && !isNaN(e)));
  }),
  et,
  tt,
  nt,
  rt = e(() => {
    (F(),
      D.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      (et = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Figtree`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
              weight: `500`,
            },
            {
              family: `Figtree`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15bwkEU4HTy.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A1EayEA25WTybO8.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A4QdyEA25WTybO8.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (tt = [
        `.framer-oFeWm .framer-styles-preset-1kdv3c8:not(.rich-text-wrapper), .framer-oFeWm .framer-styles-preset-1kdv3c8.rich-text-wrapper p { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (nt = `framer-oFeWm`));
  });
function it(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  X,
  Z,
  ht = e(() => {
    (h(),
      F(),
      x(),
      l(),
      z(),
      ce(),
      (at = S(R)),
      (ot = [`UwxQxZufg`, `mW9Jgepz6`]),
      (st = `framer-appDX`),
      (ct = { mW9Jgepz6: `framer-v-18rfpfz`, UwxQxZufg: `framer-v-1y0yegn` }),
      (lt = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (ut = ({ value: e, children: n }) => {
        let r = t(b),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: n });
      }),
      (dt = y.create(c)),
      (ft = { Closed: `UwxQxZufg`, Open: `mW9Jgepz6` }),
      (pt = ({ answer: e, height: t, id: n, question: r, width: i, ...a }) => ({
        ...a,
        p2jE3XGQp: e ?? a.p2jE3XGQp ?? `Answer`,
        QAmrW1iRk: r ?? a.QAmrW1iRk ?? `Question`,
        variant: ft[a.variant] ?? a.variant ?? `UwxQxZufg`,
      })),
      (mt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (X = A(
        g(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: ee } = M();
          se();
          let {
              style: o,
              className: l,
              layoutId: f,
              variant: p,
              QAmrW1iRk: h,
              p2jE3XGQp: g,
              ..._
            } = pt(e),
            {
              baseVariant: v,
              classNames: te,
              clearLoadingGesture: ne,
              gestureHandlers: re,
              gestureVariant: b,
              isLoading: ie,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = N({
              cycleOrder: ot,
              defaultVariant: `UwxQxZufg`,
              ref: r,
              variant: p,
              variantClassNames: ct,
            }),
            T = mt(e, C),
            { activeVariantCallback: D, delay: O } = L(v),
            k = D(async (...e) => {
              (x({ isPressed: !1 }), S(`mW9Jgepz6`));
            }),
            A = D(async (...e) => {
              (x({ isPressed: !1 }), S(`UwxQxZufg`));
            }),
            j = E(st, H),
            P = () => v === `mW9Jgepz6`;
          return m(ae, {
            id: f ?? i,
            children: m(dt, {
              animate: C,
              initial: !1,
              children: m(ut, {
                value: lt,
                children: d(y.div, {
                  ..._,
                  ...re,
                  className: E(j, `framer-1y0yegn`, l, te),
                  "data-border": !0,
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: T,
                  layoutId: `UwxQxZufg`,
                  onTap: k,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-cfb0af42-62a5-486a-837b-9870b5e7030b, rgba(255, 255, 255, 0.05))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    ...o,
                  },
                  ...it(
                    { mW9Jgepz6: { "data-framer-name": `Open`, onTap: A } },
                    v,
                    b,
                  ),
                  children: [
                    d(y.div, {
                      className: `framer-1dijg4m`,
                      "data-framer-name": `Question`,
                      layoutDependency: T,
                      layoutId: `tlMzIOsyD`,
                      children: [
                        m(oe, {
                          __fromCanvasComponent: !0,
                          children: m(c, {
                            children: m(y.p, {
                              className: `framer-styles-preset-16w1u5n`,
                              "data-styles-preset": `csUbUKGQ_`,
                              style: {
                                "--framer-text-color": `var(--esyncrotrexed-r6o4lv, var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255)))`,
                              },
                              children: `Question`,
                            }),
                          }),
                          className: `framer-1hrxbmj`,
                          fonts: [`Inter`],
                          layoutDependency: T,
                          layoutId: `Qy_8FiULj`,
                          style: {
                            "--esyncrotrexed-r6o4lv": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        m(y.div, {
                          className: `framer-hxtblb`,
                          "data-framer-name": `Icon Holder`,
                          layoutDependency: T,
                          layoutId: `w96xNaaaU`,
                          children: m(I, {
                            children: m(w, {
                              className: `framer-uyg7ys-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: T,
                              layoutId: `ftSnPqvcx-container`,
                              nodeId: `ftSnPqvcx`,
                              rendersWithMotion: !0,
                              scopeId: `auW4GUU6S`,
                              style: { rotate: 0 },
                              variants: { mW9Jgepz6: { rotate: 180 } },
                              children: m(R, {
                                color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                height: `100%`,
                                iconSearch: `House`,
                                iconSelection: `CaretDown`,
                                id: `ftSnPqvcx`,
                                layoutId: `ftSnPqvcx`,
                                mirrored: !1,
                                selectByList: !0,
                                style: { height: `100%`, width: `100%` },
                                weight: `bold`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    P() &&
                      m(y.div, {
                        className: `framer-h9yihc`,
                        "data-framer-name": `Answer`,
                        layoutDependency: T,
                        layoutId: `bQNQGkN1H`,
                        children: m(oe, {
                          __fromCanvasComponent: !0,
                          children: m(c, {
                            children: m(y.p, {
                              className: `framer-styles-preset-16w1u5n`,
                              "data-styles-preset": `csUbUKGQ_`,
                              children: `Answer`,
                            }),
                          }),
                          className: `framer-1k089k`,
                          fonts: [`Inter`],
                          layoutDependency: T,
                          layoutId: `gkCQgdfTU`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-appDX.framer-1l01lrk, .framer-appDX .framer-1l01lrk { display: block; }`,
          `.framer-appDX.framer-1y0yegn { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 18px 20px 18px 20px; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-appDX .framer-1dijg4m, .framer-appDX .framer-h9yihc { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; user-select: none; width: 100%; }`,
          `.framer-appDX .framer-1hrxbmj, .framer-appDX .framer-1k089k { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-appDX .framer-hxtblb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 16px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 16px; }`,
          `.framer-appDX .framer-uyg7ys-container { flex: none; height: 15px; position: relative; width: 15px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-appDX.framer-1y0yegn, .framer-appDX .framer-hxtblb { gap: 0px; } .framer-appDX.framer-1y0yegn > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-appDX.framer-1y0yegn > :first-child { margin-top: 0px; } .framer-appDX.framer-1y0yegn > :last-child { margin-bottom: 0px; } .framer-appDX .framer-hxtblb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-appDX .framer-hxtblb > :first-child { margin-left: 0px; } .framer-appDX .framer-hxtblb > :last-child { margin-right: 0px; } }`,
          `.framer-appDX.framer-v-18rfpfz.framer-1y0yegn { padding: 18px 20px 20px 20px; }`,
          ...B,
          `.framer-appDX[data-border="true"]::after, .framer-appDX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-appDX`,
      )),
      (Z = X),
      (X.displayName = `Row`),
      (X.defaultProps = { height: 58, width: 400 }),
      P(X, {
        variant: {
          options: [`UwxQxZufg`, `mW9Jgepz6`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: j.Enum,
        },
        QAmrW1iRk: {
          defaultValue: `Question`,
          displayTextArea: !1,
          title: `Question`,
          type: j.String,
        },
        p2jE3XGQp: {
          defaultValue: `Answer`,
          displayTextArea: !1,
          title: `Answer`,
          type: j.String,
        },
      }),
      O(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...at,
          ...k(V),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  Q,
  wt,
  Tt = e(() => {
    (h(),
      F(),
      x(),
      l(),
      ht(),
      (gt = S(Z)),
      (_t = `framer-ZAxah`),
      (vt = { CNOSe3RJ5: `framer-v-1v1ku7g` }),
      (yt = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (bt = ({ value: e, children: n }) => {
        let r = t(b),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: n });
      }),
      (xt = y.create(c)),
      (St = ({
        answer1: e,
        answer2: t,
        answer3: n,
        answer4: r,
        answer5: i,
        height: a,
        id: ee,
        question1: o,
        question2: s,
        question3: c,
        question4: l,
        question5: u,
        width: d,
        ...f
      }) => ({
        ...f,
        EgcB91oLO: r ?? f.EgcB91oLO ?? `Answer`,
        eSMc1PeSB: l ?? f.eSMc1PeSB ?? `Question`,
        HVaoF8fJz: c ?? f.HVaoF8fJz ?? `Question`,
        i3xcpbF7k: s ?? f.i3xcpbF7k ?? `Question`,
        jrcf9OQo5: o ?? f.jrcf9OQo5 ?? `Question`,
        jyRLQhg5l: e ?? f.jyRLQhg5l ?? `Answer`,
        pKHctQEOr: n ?? f.pKHctQEOr ?? `Answer`,
        UROQiff2m: t ?? f.UROQiff2m ?? `Answer`,
        v_eKSVNqr: i ?? f.v_eKSVNqr ?? `Answer`,
        xjvxuRkyX: u ?? f.xjvxuRkyX ?? `Question`,
      })),
      (Ct = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Q = A(
        g(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: ee } = M(),
            o = se(),
            {
              style: c,
              className: l,
              layoutId: f,
              variant: p,
              jrcf9OQo5: h,
              jyRLQhg5l: g,
              i3xcpbF7k: _,
              UROQiff2m: v,
              HVaoF8fJz: te,
              pKHctQEOr: ne,
              eSMc1PeSB: re,
              EgcB91oLO: b,
              xjvxuRkyX: ie,
              v_eKSVNqr: x,
              ...S
            } = St(e),
            {
              baseVariant: C,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: oe,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: P,
              variants: F,
            } = N({
              defaultVariant: `CNOSe3RJ5`,
              ref: r,
              variant: p,
              variantClassNames: vt,
            }),
            L = Ct(e, F),
            R = E(_t);
          return m(ae, {
            id: f ?? i,
            children: m(xt, {
              animate: F,
              initial: !1,
              children: m(bt, {
                value: yt,
                children: d(y.div, {
                  ...S,
                  ...oe,
                  className: E(R, `framer-1v1ku7g`, l, D),
                  "data-framer-name": `Faqs`,
                  layoutDependency: L,
                  layoutId: `CNOSe3RJ5`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...c,
                  },
                  children: [
                    m(I, {
                      height: 58,
                      width: `calc(${o?.width || `100vw`} - 20px)`,
                      y: (o?.y || 0) + 10 + 0,
                      children: m(w, {
                        className: `framer-16xc7kf-container`,
                        layoutDependency: L,
                        layoutId: `Em38uR6a6-container`,
                        nodeId: `Em38uR6a6`,
                        rendersWithMotion: !0,
                        scopeId: `fYZ0jLfWh`,
                        children: m(Z, {
                          height: `100%`,
                          id: `Em38uR6a6`,
                          layoutId: `Em38uR6a6`,
                          p2jE3XGQp: g,
                          QAmrW1iRk: h,
                          style: { width: `100%` },
                          variant: `UwxQxZufg`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(I, {
                      height: 58,
                      width: `calc(${o?.width || `100vw`} - 20px)`,
                      y: (o?.y || 0) + 10 + 70,
                      children: m(w, {
                        className: `framer-gmkmuc-container`,
                        layoutDependency: L,
                        layoutId: `g6oBS7bjM-container`,
                        nodeId: `g6oBS7bjM`,
                        rendersWithMotion: !0,
                        scopeId: `fYZ0jLfWh`,
                        children: m(Z, {
                          height: `100%`,
                          id: `g6oBS7bjM`,
                          layoutId: `g6oBS7bjM`,
                          p2jE3XGQp: v,
                          QAmrW1iRk: _,
                          style: { width: `100%` },
                          variant: `UwxQxZufg`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(I, {
                      height: 58,
                      width: `calc(${o?.width || `100vw`} - 20px)`,
                      y: (o?.y || 0) + 10 + 140,
                      children: m(w, {
                        className: `framer-9squr9-container`,
                        layoutDependency: L,
                        layoutId: `yH7yDMbGX-container`,
                        nodeId: `yH7yDMbGX`,
                        rendersWithMotion: !0,
                        scopeId: `fYZ0jLfWh`,
                        children: m(Z, {
                          height: `100%`,
                          id: `yH7yDMbGX`,
                          layoutId: `yH7yDMbGX`,
                          p2jE3XGQp: ne,
                          QAmrW1iRk: te,
                          style: { width: `100%` },
                          variant: `UwxQxZufg`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(I, {
                      height: 58,
                      width: `calc(${o?.width || `100vw`} - 20px)`,
                      y: (o?.y || 0) + 10 + 210,
                      children: m(w, {
                        className: `framer-1k2ugts-container`,
                        layoutDependency: L,
                        layoutId: `xSD1DIzvc-container`,
                        nodeId: `xSD1DIzvc`,
                        rendersWithMotion: !0,
                        scopeId: `fYZ0jLfWh`,
                        children: m(Z, {
                          height: `100%`,
                          id: `xSD1DIzvc`,
                          layoutId: `xSD1DIzvc`,
                          p2jE3XGQp: b,
                          QAmrW1iRk: re,
                          style: { width: `100%` },
                          variant: `UwxQxZufg`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(I, {
                      height: 58,
                      width: `calc(${o?.width || `100vw`} - 20px)`,
                      y: (o?.y || 0) + 10 + 280,
                      children: m(w, {
                        className: `framer-1umza0j-container`,
                        layoutDependency: L,
                        layoutId: `TAhrbnt_O-container`,
                        nodeId: `TAhrbnt_O`,
                        rendersWithMotion: !0,
                        scopeId: `fYZ0jLfWh`,
                        children: m(Z, {
                          height: `100%`,
                          id: `TAhrbnt_O`,
                          layoutId: `TAhrbnt_O`,
                          p2jE3XGQp: x,
                          QAmrW1iRk: ie,
                          style: { width: `100%` },
                          variant: `UwxQxZufg`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(y.div, {
                      className: `framer-77pyy0`,
                      "data-framer-name": `BG`,
                      layoutDependency: L,
                      layoutId: `i7L88HKa1`,
                      style: {
                        filter: `blur(50px)`,
                        opacity: 0.3,
                        WebkitFilter: `blur(50px)`,
                      },
                      children: m(T, {
                        className: `framer-l8etd0`,
                        layout: `position`,
                        layoutDependency: L,
                        layoutId: `CIU89Br_x`,
                        opacity: 0.5,
                        style: { opacity: 0.5 },
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 930 358"><path d="M 459 0 C 712.499 0 918 34.474 918 77 C 918 119.526 712.499 154 459 154 C 205.501 154 0 119.526 0 77 C 0 34.474 205.501 0 459 0 Z" transform="translate(6.309 102.112) rotate(-13 459 77)" fill="var(--token-5987ca59-a0c2-4562-861a-b7e9d2d04a6e, rgb(129, 74, 200))"></path></svg>`,
                        svgContentId: 12160520360,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ZAxah.framer-1gck4lc, .framer-ZAxah .framer-1gck4lc { display: block; }`,
          `.framer-ZAxah.framer-1v1ku7g { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px; position: relative; width: 1000px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ZAxah .framer-16xc7kf-container, .framer-ZAxah .framer-gmkmuc-container, .framer-ZAxah .framer-9squr9-container, .framer-ZAxah .framer-1k2ugts-container, .framer-ZAxah .framer-1umza0j-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
          `.framer-ZAxah .framer-77pyy0 { flex: none; height: 328px; left: calc(50.00000000000002% - 923px / 2); overflow: hidden; position: absolute; top: calc(50.13774104683198% - 328px / 2); width: 923px; z-index: 0; }`,
          `.framer-ZAxah .framer-l8etd0 { flex: none; height: 358px; left: calc(50.05417118093176% - 930px / 2); position: absolute; top: calc(50.00000000000002% - 358px / 2); width: 930px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZAxah.framer-1v1ku7g { gap: 0px; } .framer-ZAxah.framer-1v1ku7g > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-ZAxah.framer-1v1ku7g > :first-child { margin-top: 0px; } .framer-ZAxah.framer-1v1ku7g > :last-child { margin-bottom: 0px; } }`,
        ],
        `framer-ZAxah`,
      )),
      (wt = Q),
      (Q.displayName = `Accordion`),
      (Q.defaultProps = { height: 360, width: 1e3 }),
      P(Q, {
        jrcf9OQo5: {
          defaultValue: `Question`,
          displayTextArea: !1,
          title: `Question 1`,
          type: j.String,
        },
        jyRLQhg5l: {
          defaultValue: `Answer`,
          displayTextArea: !1,
          title: `Answer 1`,
          type: j.String,
        },
        i3xcpbF7k: {
          defaultValue: `Question`,
          displayTextArea: !1,
          title: `Question 2`,
          type: j.String,
        },
        UROQiff2m: {
          defaultValue: `Answer`,
          displayTextArea: !1,
          title: `Answer 2`,
          type: j.String,
        },
        HVaoF8fJz: {
          defaultValue: `Question`,
          displayTextArea: !1,
          title: `Question 3`,
          type: j.String,
        },
        pKHctQEOr: {
          defaultValue: `Answer`,
          displayTextArea: !1,
          title: `Answer 3`,
          type: j.String,
        },
        eSMc1PeSB: {
          defaultValue: `Question`,
          displayTextArea: !1,
          title: `Question 4`,
          type: j.String,
        },
        EgcB91oLO: {
          defaultValue: `Answer`,
          displayTextArea: !1,
          title: `Answer 4`,
          type: j.String,
        },
        xjvxuRkyX: {
          defaultValue: `Question`,
          displayTextArea: !1,
          title: `Question 5`,
          type: j.String,
        },
        v_eKSVNqr: {
          defaultValue: `Answer`,
          displayTextArea: !1,
          title: `Answer 5`,
          type: j.String,
        },
      }),
      O(Q, [{ explicitInter: !0, fonts: [] }, ...gt], {
        supportsExplicitInterCodegen: !0,
      }));
  }),
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  $,
  Pt,
  Ft = e(() => {
    (h(),
      F(),
      x(),
      l(),
      z(),
      ce(),
      (Et = S(R)),
      (Dt = `framer-sbluq`),
      (Ot = { ZbkICOpPT: `framer-v-1tm44mn` }),
      (kt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (At = ({ value: e, children: n }) => {
        let r = t(b),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: n });
      }),
      (jt = y.create(c)),
      (Mt = ({
        height: e,
        iconColor: t,
        iconName: n,
        id: r,
        textColor: i,
        title: a,
        width: ee,
        ...o
      }) => ({
        ...o,
        aBab7jJnS: a ?? o.aBab7jJnS ?? `Basic workflow automation`,
        bROCjlOP4:
          t ??
          o.bROCjlOP4 ??
          `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
        It9jctiBf: n ?? o.It9jctiBf ?? `check`,
        juPs7tgMz:
          i ??
          o.juPs7tgMz ??
          `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
      })),
      (Nt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      ($ = A(
        g(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: ee } = M();
          se();
          let {
              style: o,
              className: l,
              layoutId: f,
              variant: p,
              aBab7jJnS: h,
              It9jctiBf: g,
              bROCjlOP4: _,
              juPs7tgMz: v,
              ...te
            } = Mt(e),
            {
              baseVariant: ne,
              classNames: re,
              clearLoadingGesture: b,
              gestureHandlers: ie,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: T,
              variants: D,
            } = N({
              defaultVariant: `ZbkICOpPT`,
              ref: r,
              variant: p,
              variantClassNames: Ot,
            }),
            O = Nt(e, D),
            k = E(Dt, H);
          return m(ae, {
            id: f ?? i,
            children: m(jt, {
              animate: D,
              initial: !1,
              children: m(At, {
                value: kt,
                children: d(y.div, {
                  ...te,
                  ...ie,
                  className: E(k, `framer-1tm44mn`, l, re),
                  "data-framer-name": `Feature point`,
                  layoutDependency: O,
                  layoutId: `ZbkICOpPT`,
                  ref: r,
                  style: { ...o },
                  children: [
                    m(I, {
                      children: m(w, {
                        className: `framer-vq2s0p-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `N3wVUvzQp-container`,
                        nodeId: `N3wVUvzQp`,
                        rendersWithMotion: !0,
                        scopeId: `sFWwVQ4sW`,
                        children: m(R, {
                          color: _,
                          height: `100%`,
                          iconSearch: g,
                          iconSelection: `House`,
                          id: `N3wVUvzQp`,
                          layoutId: `N3wVUvzQp`,
                          mirrored: !1,
                          selectByList: !1,
                          style: { height: `100%`, width: `100%` },
                          weight: `bold`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(oe, {
                      __fromCanvasComponent: !0,
                      children: m(c, {
                        children: m(y.p, {
                          className: `framer-styles-preset-16w1u5n`,
                          "data-styles-preset": `csUbUKGQ_`,
                          style: {
                            "--framer-text-color": `var(--esyncrotrexed-r6o4lv, var(--variable-reference-juPs7tgMz-sFWwVQ4sW))`,
                          },
                          children: `Basic workflow automation`,
                        }),
                      }),
                      className: `framer-1c5vbfx`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `vFIdfiMAW`,
                      style: {
                        "--esyncrotrexed-r6o4lv": `var(--variable-reference-juPs7tgMz-sFWwVQ4sW)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--variable-reference-juPs7tgMz-sFWwVQ4sW": v,
                      },
                      text: h,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-sbluq.framer-9advh4, .framer-sbluq .framer-9advh4 { display: block; }`,
          `.framer-sbluq.framer-1tm44mn { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 300px; }`,
          `.framer-sbluq .framer-vq2s0p-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-sbluq .framer-1c5vbfx { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sbluq.framer-1tm44mn { gap: 0px; } .framer-sbluq.framer-1tm44mn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-sbluq.framer-1tm44mn > :first-child { margin-left: 0px; } .framer-sbluq.framer-1tm44mn > :last-child { margin-right: 0px; } }`,
          ...B,
        ],
        `framer-sbluq`,
      )),
      (Pt = $),
      ($.displayName = `features`),
      ($.defaultProps = { height: 22, width: 300 }),
      P($, {
        aBab7jJnS: {
          defaultValue: `Basic workflow automation`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        It9jctiBf: {
          defaultValue: `check`,
          placeholder: `Menu, Wifi, Box…`,
          title: `Icon name`,
          type: j.String,
        },
        bROCjlOP4: {
          defaultValue: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255)) /* {"name":"Primary Text"} */`,
          title: `Icon Color`,
          type: j.Color,
        },
        juPs7tgMz: {
          defaultValue: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
          title: `Text Color`,
          type: j.Color,
        },
      }),
      O(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Et,
          ...k(V),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export {
  nt as a,
  rt as c,
  He as d,
  xe as f,
  Tt as i,
  Ue as l,
  Pt as n,
  tt as o,
  wt as r,
  et as s,
  Ft as t,
  $e as u,
};
//# sourceMappingURL=chunk-16.mjs.map
