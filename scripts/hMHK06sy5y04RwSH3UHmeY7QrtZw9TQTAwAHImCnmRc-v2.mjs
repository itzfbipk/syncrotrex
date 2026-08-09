import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  N as n,
  O as r,
  P as i,
  T as a,
  b as o,
  c as s,
  d as c,
  j as ee,
  l,
  o as u,
  v as d,
  w as f,
} from "./react.mjs";
import { C as p, a as m, r as te, t as h } from "./motion.mjs";
import {
  B as g,
  M as _,
  O as v,
  T as y,
  V as b,
  _t as x,
  a as S,
  b as C,
  bt as w,
  c as ne,
  ct as re,
  dt as ie,
  gt as ae,
  h as T,
  i as E,
  it as D,
  k as O,
  l as k,
  lt as A,
  q as j,
  r as M,
  st as oe,
  u as se,
  yt as N,
} from "./core-lib.mjs";
import {
  C as ce,
  S as le,
  T as ue,
  a as de,
  c as fe,
  d as P,
  f as pe,
  g as me,
  h as he,
  i as ge,
  l as F,
  m as _e,
  o as ve,
  p as ye,
  r as be,
  s as I,
  u as xe,
  w as Se,
} from "./shared.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./chunk-06.mjs";
import { n as De, r as L } from "./chunk-03.mjs";
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z,
  B,
  V,
  H,
  U,
  W,
  Oe,
  G,
  K,
  q,
  ke,
  Ae,
  je,
  Me,
  J,
  Y,
  Ne = e(() => {
    (u(),
      j(),
      h(),
      a(),
      ue(),
      (z = N(p.div)),
      (B = { SMbRtPIbK: { hover: !0, pressed: !0 } }),
      (V = [`SMbRtPIbK`, `UKmZxv6Kh`, `XyhNCwBpv`, `Hc9tTH273`, `NThrJvVmJ`]),
      (H = `framer-FOFUK`),
      (U = {
        Hc9tTH273: `framer-v-fah8em`,
        NThrJvVmJ: `framer-v-dosf0q`,
        SMbRtPIbK: `framer-v-g8h95c`,
        UKmZxv6Kh: `framer-v-f27ez7`,
        XyhNCwBpv: `framer-v-17dms84`,
      }),
      (W = {
        delay: 0,
        duration: 0.2,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Oe = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (G = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (K = (e, t) => `translateX(-50%) ${t}`),
      (q = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = ee(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(m.Provider, { value: a, children: n });
      }),
      (ke = p.create(i)),
      (Ae = {
        Default: `SMbRtPIbK`,
        Disabled: `XyhNCwBpv`,
        Error: `NThrJvVmJ`,
        Loading: `UKmZxv6Kh`,
        Success: `Hc9tTH273`,
      }),
      (je = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ae[r.variant] ?? r.variant ?? `SMbRtPIbK`,
      })),
      (Me = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (J = x(
        d(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = o(),
            { activeLocale: ee, setLocale: u } = ie();
          D();
          let { style: d, className: f, layoutId: m, variant: h, ...g } = je(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: ne,
              setVariant: re,
              variants: T,
            } = ae({
              cycleOrder: V,
              defaultVariant: `SMbRtPIbK`,
              enabledGestures: B,
              ref: a,
              variant: h,
              variantClassNames: U,
            }),
            E = Me(e, T),
            O = _(H, le),
            k = () => v !== `UKmZxv6Kh`,
            A = () => v === `UKmZxv6Kh`;
          return l(te, {
            id: m ?? s,
            children: l(ke, {
              animate: T,
              initial: !1,
              children: l(q, {
                value: W,
                children: c(p.button, {
                  ...g,
                  ...S,
                  className: _(O, `framer-g8h95c`, f, b),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: E,
                  layoutId: `SMbRtPIbK`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    opacity: 1,
                    ...d,
                  },
                  variants: {
                    "SMbRtPIbK-hover": {
                      backgroundColor: `rgba(51, 51, 51, 0.85)`,
                      opacity: 1,
                    },
                    "SMbRtPIbK-pressed": {
                      backgroundColor: `rgb(51, 51, 51)`,
                      opacity: 1,
                    },
                    Hc9tTH273: { opacity: 1 },
                    NThrJvVmJ: {
                      backgroundColor: `rgba(255, 34, 68, 0.15)`,
                      opacity: 1,
                    },
                    XyhNCwBpv: { opacity: 0.5 },
                  },
                  ...R(
                    {
                      "SMbRtPIbK-hover": { "data-framer-name": void 0 },
                      "SMbRtPIbK-pressed": { "data-framer-name": void 0 },
                      Hc9tTH273: { "data-framer-name": `Success` },
                      NThrJvVmJ: { "data-framer-name": `Error` },
                      UKmZxv6Kh: { "data-framer-name": `Loading` },
                      XyhNCwBpv: { "data-framer-name": `Disabled` },
                    },
                    v,
                    C,
                  ),
                  children: [
                    k() &&
                      l(y, {
                        __fromCanvasComponent: !0,
                        children: l(i, {
                          children: l(p.p, {
                            className: `framer-styles-preset-x6ge9v`,
                            "data-styles-preset": `D1fS_zrfW`,
                            children: `Submit Form`,
                          }),
                        }),
                        className: `framer-kxvw44`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `hnrjACM88`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          Hc9tTH273: {
                            "--esyncrotrexed-r6o4lv": `rgb(255, 255, 255)`,
                          },
                          NThrJvVmJ: {
                            "--esyncrotrexed-r6o4lv": `rgb(255, 34, 68)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...R(
                          {
                            Hc9tTH273: {
                              children: l(i, {
                                children: l(p.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--esyncrotrexed-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                            NThrJvVmJ: {
                              children: l(i, {
                                children: l(p.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--esyncrotrexed-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                          },
                          v,
                          C,
                        ),
                      }),
                    A() &&
                      l(p.div, {
                        className: `framer-16s45gl`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: E,
                        layoutId: `FYtJ4TfwZ`,
                        style: {
                          mask: `url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          WebkitMask: `url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        },
                        children: l(z, {
                          __framer__loop: G,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: Oe,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-itzx6c`,
                          "data-framer-name": `Conic`,
                          layoutDependency: E,
                          layoutId: `Do0eX0n3k`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            UKmZxv6Kh: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                              WebkitMask: `url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            },
                          },
                          children: l(p.div, {
                            className: `framer-h08tdf`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: E,
                            layoutId: `qy25ejepn`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: K,
                          }),
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
          `.framer-FOFUK.framer-10w9iyp, .framer-FOFUK .framer-10w9iyp { display: block; }`,
          `.framer-FOFUK.framer-g8h95c { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px 18px 12px 18px; position: relative; width: min-content; }`,
          `.framer-FOFUK .framer-kxvw44 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-FOFUK .framer-16s45gl { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-FOFUK .framer-itzx6c { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-FOFUK .framer-h08tdf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FOFUK.framer-g8h95c { gap: 0px; } .framer-FOFUK.framer-g8h95c > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-FOFUK.framer-g8h95c > :first-child { margin-left: 0px; } .framer-FOFUK.framer-g8h95c > :last-child { margin-right: 0px; } }`,
          `.framer-FOFUK.framer-v-f27ez7.framer-g8h95c, .framer-FOFUK.framer-v-17dms84.framer-g8h95c, .framer-FOFUK.framer-v-fah8em.framer-g8h95c, .framer-FOFUK.framer-v-dosf0q.framer-g8h95c { cursor: unset; }`,
          `.framer-FOFUK.framer-v-f27ez7 .framer-itzx6c { overflow: hidden; }`,
          ...ce,
        ],
        `framer-FOFUK`,
      )),
      (Y = J),
      (J.displayName = `Form Button`),
      (J.defaultProps = { height: 41, width: 114 }),
      O(J, {
        variant: {
          options: [
            `SMbRtPIbK`,
            `UKmZxv6Kh`,
            `XyhNCwBpv`,
            `Hc9tTH273`,
            `NThrJvVmJ`,
          ],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      v(
        J,
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
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/1ZFS7N918ojhhd0nQWdj3jz4w.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
          ...b(Se),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  X,
  Z,
  Ge,
  Q,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  $,
  Qe,
  $e;
e(() => {
  (u(),
    j(),
    h(),
    a(),
    pe(),
    xe(),
    Ne(),
    fe(),
    Ce(),
    ve(),
    me(),
    De(),
    (Pe = g(I)),
    (Fe = w(E)),
    (Ie = g(P)),
    (Le = g(Y)),
    (Re = N(p.div)),
    (ze = g(F)),
    (Be = {
      mkMNETeUh: `(max-width: 809px)`,
      pArhjZpsa: `(min-width: 810px) and (max-width: 1199px)`,
      zQ8qldglH: `(min-width: 1200px)`,
    }),
    (Ve = `framer-9siex`),
    (He = {
      mkMNETeUh: `framer-v-1yki1wv`,
      pArhjZpsa: `framer-v-1n90ssl`,
      zQ8qldglH: `framer-v-epjf54`,
    }),
    (Ue = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.3, duration: 1.2, type: `spring` },
      x: 0,
      y: 0,
    }),
    (We = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (X = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (Z = {
      damping: 100,
      delay: 0.05,
      mass: 1,
      stiffness: 400,
      type: `spring`,
    }),
    (Ge = {
      effect: X,
      repeat: !1,
      startDelay: 0,
      tokenization: `word`,
      transition: Z,
      trigger: `onMount`,
      type: `appear`,
    }),
    (Q = {
      effect: X,
      repeat: !1,
      startDelay: 0.2,
      tokenization: `word`,
      transition: Z,
      trigger: `onMount`,
      type: `appear`,
    }),
    (Ke = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (qe = { damping: 70, delay: 0, mass: 1, stiffness: 320, type: `spring` }),
    (Je = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
      }
    }),
    (Ye = ({ value: e }) =>
      A()
        ? null
        : l(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Xe = { Desktop: `zQ8qldglH`, Phone: `mkMNETeUh`, Tablet: `pArhjZpsa` }),
    (Ze = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Xe[r.variant] ?? r.variant ?? `zQ8qldglH`,
    })),
    ($ = x(
      d(function (e, t) {
        let a = r(null),
          ee = t ?? a,
          u = o(),
          { activeLocale: d, setLocale: m } = ie(),
          h = D(),
          { style: g, className: v, layoutId: b, variant: x, ...S } = Ze(e);
        (n(() => {
          let e = L(void 0, d);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, d]),
          f(() => {
            let e = L(void 0, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, d]));
        let [w, ae] = re(x, Be, !1),
          O = _(Ve, be, ye, Ee);
        return (
          oe({}),
          l(se.Provider, {
            value: { primaryVariantId: `zQ8qldglH`, variantClassNames: He },
            children: c(te, {
              id: b ?? u,
              children: [
                l(Ye, {
                  value: `html body { background: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); }`,
                }),
                c(p.div, {
                  ...S,
                  className: _(O, `framer-epjf54`, v),
                  ref: ee,
                  style: { ...g },
                  children: [
                    c(`section`, {
                      className: `framer-1dmduvo`,
                      "data-framer-name": `Content`,
                      children: [
                        c(`div`, {
                          className: `framer-gkcx11`,
                          "data-framer-name": `Header`,
                          children: [
                            l(M, {
                              height: 33,
                              children: l(Fe, {
                                animate: Ue,
                                className: `framer-u4irpk-container`,
                                "data-framer-appear-id": `u4irpk`,
                                initial: We,
                                nodeId: `o3_H0M4v2`,
                                optimized: !0,
                                rendersWithMotion: !0,
                                scopeId: `atppc3P5_`,
                                children: l(I, {
                                  b5FKc3lDF: `Contact`,
                                  height: `100%`,
                                  id: `o3_H0M4v2`,
                                  layoutId: `o3_H0M4v2`,
                                  P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                  width: `100%`,
                                  YKQkMRbk7: !1,
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-i4j98n`,
                              "data-framer-name": `Heading+subheading`,
                              children: [
                                l(y, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`h1`, {
                                      className: `framer-styles-preset-q2gmjp`,
                                      "data-styles-preset": `K0tuspaT8`,
                                      children: `Get in Touch with Us`,
                                    }),
                                  }),
                                  className: `framer-1at7hj0`,
                                  effect: Ge,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(y, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      children: `Have a project in mind or need a custom digital solution? Tell us what you're looking to build and we'll get back to you.`,
                                    }),
                                  }),
                                  className: `framer-vc2ess`,
                                  effect: Q,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        c(Re, {
                          __framer__animate: { transition: qe },
                          __framer__animateOnce: !0,
                          __framer__enter: Ke,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-30pifu`,
                          "data-framer-name": `Form Container`,
                          children: [
                            c(`div`, {
                              className: `framer-6csv5o`,
                              "data-framer-name": `Email and phone`,
                              children: [
                                l(T, {
                                  href: `mailto:mail@test.com`,
                                  motionChild: !0,
                                  nodeId: `QgCCYxfDT`,
                                  scopeId: `atppc3P5_`,
                                  children: c(p.a, {
                                    className: `framer-15a1yuw framer-1w8br35`,
                                    "data-border": !0,
                                    "data-framer-name": `Email`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-sq81zl`,
                                        "data-framer-name": `Icon and title`,
                                        children: [
                                          l(M, {
                                            children: l(E, {
                                              className: `framer-2js1kf-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `e1W1dGwgW`,
                                              scopeId: `atppc3P5_`,
                                              children: l(P, {
                                                color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                iconSearch: `envelope-simple`,
                                                iconSelection: `House`,
                                                id: `e1W1dGwgW`,
                                                layoutId: `e1W1dGwgW`,
                                                mirrored: !1,
                                                selectByList: !1,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                weight: `fill`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          l(y, {
                                            __fromCanvasComponent: !0,
                                            children: l(i, {
                                              children: l(`p`, {
                                                className: `framer-styles-preset-trq6qq`,
                                                "data-styles-preset": `Qjp1AZZMc`,
                                                style: {
                                                  "--framer-text-color": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                                },
                                                children: `E-mail`,
                                              }),
                                            }),
                                            className: `framer-1358sm2`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      l(`div`, {
                                        className: `framer-18ytxkw`,
                                        "data-framer-name": `Email address`,
                                        children: l(y, {
                                          __fromCanvasComponent: !0,
                                          children: l(i, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-16w1u5n`,
                                              "data-styles-preset": `csUbUKGQ_`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                              },
                                              children: `Admin@syncrotrex.com`,
                                            }),
                                          }),
                                          className: `framer-1x85pd0`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                l(T, {
                                  href: `tel:(969) 819-8061`,
                                  motionChild: !0,
                                  nodeId: `sfrg4AVIa`,
                                  scopeId: `atppc3P5_`,
                                  children: c(p.a, {
                                    className: `framer-1n2439y framer-1w8br35`,
                                    "data-border": !0,
                                    "data-framer-name": `Phone`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-15uwd0o`,
                                        "data-framer-name": `Icon and title`,
                                        children: [
                                          l(M, {
                                            children: l(E, {
                                              className: `framer-yf3wvz-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `Y61AYXVKV`,
                                              scopeId: `atppc3P5_`,
                                              children: l(P, {
                                                color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                iconSearch: `phone`,
                                                iconSelection: `House`,
                                                id: `Y61AYXVKV`,
                                                layoutId: `Y61AYXVKV`,
                                                mirrored: !1,
                                                selectByList: !1,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                weight: `fill`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          l(y, {
                                            __fromCanvasComponent: !0,
                                            children: l(i, {
                                              children: l(`p`, {
                                                className: `framer-styles-preset-trq6qq`,
                                                "data-styles-preset": `Qjp1AZZMc`,
                                                style: {
                                                  "--framer-text-color": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                                },
                                                children: `Phone`,
                                              }),
                                            }),
                                            className: `framer-1kcxyg2`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      l(`div`, {
                                        className: `framer-1orge6n`,
                                        "data-framer-name": `Number`,
                                        children: l(y, {
                                          __fromCanvasComponent: !0,
                                          children: l(i, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-16w1u5n`,
                                              "data-styles-preset": `csUbUKGQ_`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                              },
                                              children: `+1(969) 819-8061`,
                                            }),
                                          }),
                                          className: `framer-1yn96l9`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            l(ne, {
                              className: `framer-qzjgoc`,
                              "data-border": !0,
                              nodeId: `wCUTGRJ2_`,
                              children: (e) =>
                                c(s, {
                                  children: [
                                    c(`label`, {
                                      className: `framer-1eq9xvb`,
                                      children: [
                                        l(y, {
                                          __fromCanvasComponent: !0,
                                          children: l(i, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-16w1u5n`,
                                              "data-styles-preset": `csUbUKGQ_`,
                                              style: {
                                                "--framer-text-color": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                              },
                                              children: `First Name`,
                                            }),
                                          }),
                                          className: `framer-fycyaq`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(k, {
                                          className: `framer-1sexggw`,
                                          inputName: `Name`,
                                          placeholder: `Jane`,
                                          required: !0,
                                          type: `text`,
                                        }),
                                      ],
                                    }),
                                    c(`label`, {
                                      className: `framer-krhipc`,
                                      children: [
                                        l(y, {
                                          __fromCanvasComponent: !0,
                                          children: l(i, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-16w1u5n`,
                                              "data-styles-preset": `csUbUKGQ_`,
                                              style: {
                                                "--framer-text-color": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                              },
                                              children: `Last Name`,
                                            }),
                                          }),
                                          className: `framer-1n9wg43`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(k, {
                                          className: `framer-10zmbs5`,
                                          inputName: `Name`,
                                          placeholder: `Smith`,
                                          required: !0,
                                          type: `text`,
                                        }),
                                      ],
                                    }),
                                    c(`label`, {
                                      className: `framer-17er4tw`,
                                      children: [
                                        l(y, {
                                          __fromCanvasComponent: !0,
                                          children: l(i, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-16w1u5n`,
                                              "data-styles-preset": `csUbUKGQ_`,
                                              style: {
                                                "--framer-text-color": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                              },
                                              children: `Email`,
                                            }),
                                          }),
                                          className: `framer-mf27d3`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(k, {
                                          className: `framer-a0luw9`,
                                          inputName: `Name`,
                                          placeholder: `Jane@mail.com`,
                                          required: !0,
                                          type: `email`,
                                        }),
                                      ],
                                    }),
                                    c(`label`, {
                                      className: `framer-1y78cre`,
                                      children: [
                                        l(y, {
                                          __fromCanvasComponent: !0,
                                          children: l(i, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-16w1u5n`,
                                              "data-styles-preset": `csUbUKGQ_`,
                                              style: {
                                                "--framer-text-color": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                              },
                                              children: `Phone`,
                                            }),
                                          }),
                                          className: `framer-1973may`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(k, {
                                          className: `framer-e9wjwz`,
                                          inputName: `Name`,
                                          placeholder: `+1(969) 819-8061`,
                                          required: !0,
                                          type: `tel`,
                                        }),
                                      ],
                                    }),
                                    c(`label`, {
                                      className: `framer-2sv3nq`,
                                      children: [
                                        l(y, {
                                          __fromCanvasComponent: !0,
                                          children: l(i, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-16w1u5n`,
                                              "data-styles-preset": `csUbUKGQ_`,
                                              style: {
                                                "--framer-text-color": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                              },
                                              children: `Message`,
                                            }),
                                          }),
                                          className: `framer-30xaty`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(k, {
                                          className: `framer-dd0mao`,
                                          inputName: `Name`,
                                          placeholder: `Hi, I am jane i want help with....`,
                                          required: !0,
                                          type: `textarea`,
                                        }),
                                      ],
                                    }),
                                    l(C, {
                                      breakpoint: w,
                                      overrides: {
                                        mkMNETeUh: {
                                          width: `calc(max((min(${h?.width || `100vw`} - 48px, 700px) - 40px) / 2, 50px) * 2 + 10px)`,
                                        },
                                      },
                                      children: l(M, {
                                        height: 41,
                                        width: `calc(max((min(${h?.width || `100vw`} - 80px, 700px) - 60px) / 2, 50px) * 2 + 20px)`,
                                        children: l(E, {
                                          className: `framer-bby5ym-container`,
                                          nodeId: `xzG5ijlF5`,
                                          scopeId: `atppc3P5_`,
                                          children: l(Y, {
                                            height: `100%`,
                                            id: `xzG5ijlF5`,
                                            layoutId: `xzG5ijlF5`,
                                            style: { width: `100%` },
                                            type: `submit`,
                                            variant: Je(
                                              e,
                                              {
                                                pending: `UKmZxv6Kh`,
                                                success: `Hc9tTH273`,
                                              },
                                              `SMbRtPIbK`,
                                            ),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(M, {
                      children: l(E, {
                        className: `framer-197xdqf-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `QtPc9Mfyj`,
                        scopeId: `atppc3P5_`,
                        children: l(F, {
                          height: `100%`,
                          id: `QtPc9Mfyj`,
                          intensity: 10,
                          layoutId: `QtPc9Mfyj`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-9siex.framer-1w8br35, .framer-9siex .framer-1w8br35 { display: block; }`,
        `.framer-9siex.framer-epjf54 { align-content: center; align-items: center; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-9siex .framer-1dmduvo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-gkcx11 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-u4irpk-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-9siex .framer-i4j98n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-1at7hj0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 900px; position: relative; width: auto; }`,
        `.framer-9siex .framer-vc2ess { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 600px; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-9siex .framer-30pifu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-6csv5o { display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 700px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-15a1yuw { --border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, #222222); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background: radial-gradient(50% 75% at 98.9% 100%, rgba(129, 74, 200, 0.3) 0%, var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 20px 30px 20px 30px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9siex .framer-sq81zl, .framer-9siex .framer-15uwd0o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-2js1kf-container, .framer-9siex .framer-yf3wvz-container { flex: none; height: 25px; position: relative; width: 25px; }`,
        `.framer-9siex .framer-1358sm2, .framer-9siex .framer-1kcxyg2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9siex .framer-18ytxkw, .framer-9siex .framer-1orge6n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-1x85pd0, .framer-9siex .framer-1yn96l9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-9siex .framer-1n2439y { --border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, #222222); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background: radial-gradient(50% 75% at 98.9% 100%, rgba(129, 74, 200, 0.3) 0%, var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 20px 30px 20px 30px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9siex .framer-qzjgoc { --border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, #222222); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; max-width: 700px; overflow: hidden; padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9siex .framer-1eq9xvb, .framer-9siex .framer-krhipc, .framer-9siex .framer-17er4tw, .framer-9siex .framer-1y78cre { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-fycyaq, .framer-9siex .framer-1n9wg43, .framer-9siex .framer-mf27d3, .framer-9siex .framer-1973may, .framer-9siex .framer-30xaty { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9siex .framer-1sexggw, .framer-9siex .framer-10zmbs5, .framer-9siex .framer-a0luw9, .framer-9siex .framer-e9wjwz { --framer-input-background: var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, #222222); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 4px; --framer-input-border-radius-bottom-right: 4px; --framer-input-border-radius-top-left: 4px; --framer-input-border-radius-top-right: 4px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-input-font-family: "Figtree"; --framer-input-font-letter-spacing: -0.02em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-padding: 15px 10px 15px 10px; --framer-input-placeholder-color: var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-9siex .framer-2sv3nq { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-dd0mao { --framer-input-background: var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, #222222); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 4px; --framer-input-border-radius-bottom-right: 4px; --framer-input-border-radius-top-left: 4px; --framer-input-border-radius-top-right: 4px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-input-font-family: "Figtree"; --framer-input-font-letter-spacing: -0.02em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-padding: 15px 10px 15px 10px; --framer-input-placeholder-color: var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75)); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-9siex .framer-bby5ym-container { align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-9siex .framer-197xdqf-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...ge,
        ..._e,
        ...we,
        `.framer-9siex[data-border="true"]::after, .framer-9siex [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-9siex.framer-epjf54 { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-9siex.framer-epjf54 { width: 390px; } .framer-9siex .framer-1dmduvo { padding: 180px 24px 100px 24px; } .framer-9siex .framer-6csv5o { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-9siex .framer-qzjgoc { gap: 10px; padding: 15px; }}`,
      ],
      `framer-9siex`,
    )),
    (Qe = $),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 1501, width: 1200 }),
    v(
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
            {
              family: `Figtree`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Pe,
        ...Ie,
        ...Le,
        ...ze,
        ...b(de),
        ...b(he),
        ...b(Te),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($e = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Frameratppc3P5_`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `1501`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"pArhjZpsa":{"layout":["fixed","fixed"]},"mkMNETeUh":{"layout":["fixed","fixed"]}}}`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerScrollSections: `* @framerResponsiveScreen`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $e as __FramerMetadata__, Qe as default };
//# sourceMappingURL=hMHK06sy5y04RwSH3UHmeY7QrtZw9TQTAwAHImCnmRc-v2.mjs.map
