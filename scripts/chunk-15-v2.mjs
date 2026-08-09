import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  L as n,
  O as r,
  P as i,
  T as a,
  b as o,
  c as ee,
  d as s,
  j as te,
  l as c,
  o as l,
  v as u,
  x as d,
  z as f,
} from "./react.mjs";
import { C as p, a as m, r as ne, t as re } from "./motion.mjs";
import {
  B as h,
  C as g,
  M as _,
  O as v,
  _t as y,
  a as b,
  bt as ie,
  dt as ae,
  gt as oe,
  h as se,
  it as ce,
  k as x,
  q as S,
  vt as C,
  yt as le,
} from "./core-lib.mjs";
function ue() {
  let e = !1;
  try {
    e = f.self !== f.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (f.location.ancestorOrigins && f.location.ancestorOrigins.length > 0) {
    let e = f.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === w || t.endsWith(`.${w}`)), n);
}
function de(e) {
  return u((t, n) => {
    let r = d(T, E, D),
      i = g.current() === g.canvas;
    return r && !i
      ? null
      : c(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              f.open(
                `#/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(f?.location?.origin)}`,
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function fe(e) {
  return u((t, n) =>
    s(ee, {
      children: [
        c(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        c(e, { ...t, ref: n }),
      ],
    }),
  );
}
var w,
  T,
  E,
  D,
  pe = e(() => {
    (n(),
      l(),
      a(),
      S(),
      (w = `syncrotrex.com`),
      (T = () => () => {}),
      (E = () => ue()),
      (D = () => !1));
  }),
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  me = e(() => {
    (l(),
      S(),
      a(),
      (O = `url('/images/syncrotrex-logo-text-only.svg'), var(--framer-icon-mask, none)`),
      (k = `alpha, var(--framer-icon-mask-mode, add)`),
      (A = `no-repeat`),
      (j = `center`),
      (M = `auto`),
      (N = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? c(p.div, { ...a, layoutId: r, ref: t })
          : c(`div`, { ...a, ref: t });
      })),
      (P = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (F = y(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: ee,
            ...s
          } = P(e);
          return c(N, {
            ...s,
            className: _(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${O}; -webkit-mask-position: ${j}; -webkit-mask-repeat: ${A}; -webkit-mask-size: ${M}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${O}; mask-mode: ${k}; mask-position: ${j}; mask-repeat: ${A}; mask-size: ${M}; width: 97px; }`,
        ],
        `framer-g7oZR`,
      )),
      (F.displayName = `Text`),
      (I = F),
      x(F, {
        Z1QnXqTEb: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: b.Color,
        },
        vtL2DrqsL: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !0,
          title: `Fill 2`,
          type: b.Color,
        },
      }));
  }),
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  he = e(() => {
    (l(),
      S(),
      a(),
      (L = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (R = `alpha, var(--framer-icon-mask-mode, add)`),
      (z = `no-repeat`),
      (B = `center`),
      (V = `auto`),
      (H = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? c(p.div, { ...a, layoutId: r, ref: t })
          : c(`div`, { ...a, ref: t });
      })),
      (U = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (W = y(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: ee,
            ...s
          } = U(e);
          return c(H, {
            ...s,
            className: _(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${L}; -webkit-mask-position: ${B}; -webkit-mask-repeat: ${z}; -webkit-mask-size: ${V}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${L}; mask-mode: ${R}; mask-position: ${B}; mask-repeat: ${z}; mask-size: ${V}; width: 12px; }`,
        ],
        `framer-hcsc7`,
      )),
      (W.displayName = `Framer`),
      (G = W),
      x(W, {
        Z1QnXqTEb: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: b.Color,
        },
        vtL2DrqsL: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !0,
          title: `Fill 2`,
          type: b.Color,
        },
      }));
  }),
  K,
  q,
  J,
  Y,
  X,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Z,
  Ce,
  we,
  Q,
  Te,
  $;
e(() => {
  (l(),
    S(),
    re(),
    a(),
    pe(),
    me(),
    he(),
    (K = h(G)),
    (q = h(I)),
    (J = C(I, { nodeId: `pBR1Ew0r8`, override: fe, scopeId: `PX9hIOIVM` })),
    (Y = ie(
      le(C(p.a, { nodeId: `HK2sXlagE`, override: de, scopeId: `PX9hIOIVM` })),
    )),
    (X = `framer-6jWyo`),
    (ge = { HK2sXlagE: `framer-v-n0ccwk` }),
    (_e = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 40,
        delay: 1,
        mass: 1.5,
        stiffness: 350,
        type: `spring`,
      },
      x: 0,
      y: 0,
    }),
    (ve = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (ye = { duration: 0, type: `tween` }),
    (be = (e, t) => `translate(-50%, -50%) ${t}`),
    (xe = (e, t) => `translateX(-50%) ${t}`),
    (Se = ({ value: e, children: n }) => {
      let r = t(m),
        i = e ?? r.transition,
        a = te(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
      return c(m.Provider, { value: a, children: n });
    }),
    (Z = p.create(i)),
    (Ce = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
    (we = (e, t) =>
      e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
    (Q = y(
      u(function (e, t) {
        let n = r(null),
          i = t ?? n,
          a = o(),
          { activeLocale: ee, setLocale: te } = ae();
        ce();
        let { style: l, className: u, layoutId: d, variant: f, ...m } = Ce(e),
          {
            baseVariant: re,
            classNames: h,
            clearLoadingGesture: g,
            gestureHandlers: v,
            gestureVariant: y,
            isLoading: b,
            setGestureState: ie,
            setVariant: x,
            variants: S,
          } = oe({
            defaultVariant: `HK2sXlagE`,
            ref: i,
            variant: f,
            variantClassNames: ge,
          }),
          C = we(e, S),
          le = _(X);
        return c(ne, {
          id: d ?? a,
          children: c(Z, {
            animate: S,
            initial: !1,
            children: c(Se, {
              value: ye,
              children: c(se, {
                href: `/`,
                motionChild: !0,
                nodeId: `HK2sXlagE`,
                openInNewTab: !1,
                relValues: [],
                scopeId: `PX9hIOIVM`,
                children: s(Y, {
                  ...m,
                  ...v,
                  __framer__presenceAnimate: _e,
                  __framer__presenceInitial: ve,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: `${_(le, `framer-n0ccwk`, u, h)} framer-bmpgw8`,
                  "data-framer-appear-id": `n0ccwk`,
                  "data-framer-name": `Light`,
                  "data-nosnippet": !0,
                  layoutDependency: C,
                  layoutId: `HK2sXlagE`,
                  optimized: !0,
                  ref: i,
                  style: { ...l },
                  children: [
                    c(p.div, {
                      className: `framer-13yxzio`,
                      "data-framer-name": `Backdrop`,
                      layoutDependency: C,
                      layoutId: `IH1cvP0s5`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow: `0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`,
                      },
                    }),
                    s(p.div, {
                      className: `framer-19yaanm`,
                      "data-framer-name": `Content`,
                      layoutDependency: C,
                      layoutId: `U6HIU1IEW`,
                      transformTemplate: be,
                      children: [
                        c(p.div, {
                          className: `framer-1kflzx5`,
                          layoutDependency: C,
                          layoutId: `roMJYXHnO`,
                          children: c(G, {
                            animated: !0,
                            className: `framer-e50co`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `O3s3GcxMZ`,
                            style: {
                              "--1bd4d3i": `rgb(0, 0, 0)`,
                              "--otdjsv": `rgb(0, 0, 0)`,
                            },
                            transformTemplate: xe,
                          }),
                        }),
                        c(J, {
                          animated: !0,
                          className: `framer-1um7t9d`,
                          "data-framer-name": `Text`,
                          layoutDependency: C,
                          layoutId: `pBR1Ew0r8`,
                          style: {
                            "--1bd4d3i": `rgb(0, 0, 0)`,
                            "--otdjsv": `rgb(0, 0, 0)`,
                          },
                        }),
                      ],
                    }),
                    c(p.div, {
                      className: `framer-j4ugry`,
                      "data-framer-name": `Bottom`,
                      layoutDependency: C,
                      layoutId: `vCwsHyUh8`,
                      style: {
                        borderBottomLeftRadius: 11,
                        borderBottomRightRadius: 11,
                        borderTopLeftRadius: 11,
                        borderTopRightRadius: 11,
                        boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                        mask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                        opacity: 0.06,
                        WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                      },
                    }),
                    c(p.div, {
                      className: `framer-jnuwbw`,
                      "data-framer-name": `Border`,
                      layoutDependency: C,
                      layoutId: `ZirFGX8Eh`,
                      style: {
                        borderBottomLeftRadius: 11,
                        borderBottomRightRadius: 11,
                        borderTopLeftRadius: 11,
                        borderTopRightRadius: 11,
                        boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                        opacity: 0.04,
                      },
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,
        `.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,
        `.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
        `.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,
        `.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,
        `.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,
        `.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
      ],
      `framer-6jWyo`,
    )),
    (Te = Q),
    (Q.displayName = `Badge`),
    (Q.defaultProps = { height: 38, width: 140 }),
    v(Q, [{ explicitInter: !0, fonts: [] }, ...K, ...q], {
      supportsExplicitInterCodegen: !0,
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerPX9hIOIVM`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `140`,
            framerIntrinsicHeight: `38`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Te as default };
//# sourceMappingURL=chunk-15-v2.mjs.map
