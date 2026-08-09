import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  N as n,
  O as r,
  P as i,
  T as a,
  b as ee,
  c as o,
  d as s,
  j as te,
  l as c,
  o as l,
  v as u,
  w as d,
} from "./react.mjs";
import { C as f, a as p, r as m, t as h } from "./motion.mjs";
import {
  B as g,
  D as ne,
  H as _,
  M as v,
  O as y,
  T as b,
  V as x,
  _t as S,
  a as C,
  b as w,
  bt as T,
  ct as E,
  dt as D,
  f as re,
  gt as O,
  h as k,
  ht as ie,
  i as A,
  it as ae,
  k as j,
  lt as oe,
  pt as se,
  q as ce,
  r as M,
  st as N,
  t as P,
  u as F,
  w as le,
  y as ue,
  yt as de,
} from "./core-lib.mjs";
import {
  a as fe,
  c as I,
  g as pe,
  h as me,
  i as he,
  l as L,
  m as ge,
  o as _e,
  p as ve,
  r as ye,
  s as R,
  u as be,
} from "./shared.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./chunk-02.mjs";
import { i as Te, r as Ee, t as De } from "./chunk-18-v2.mjs";
import { n as Oe, r as z } from "./chunk-05.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  H,
  U,
  W,
  G,
  K,
  ke,
  Ae,
  q,
  je,
  Me,
  Ne,
  Pe,
  J,
  Y,
  Fe = e(() => {
    (l(),
      ce(),
      h(),
      a(),
      xe(),
      I(),
      (V = g(R)),
      (H = de(f.a)),
      (U = { t66mCUFjc: { hover: !0 } }),
      (W = `framer-bGNrD`),
      (G = { t66mCUFjc: `framer-v-1ppp9dr` }),
      (K = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 150,
      }),
      (ke = { bounce: 0.2, delay: 0, duration: 1.2, type: `spring` }),
      (Ae = {
        delay: 0,
        duration: 0.6,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (je = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = te(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(p.Provider, { value: a, children: n });
      }),
      (Me = f.create(i)),
      (Ne = ({
        category: e,
        height: t,
        id: n,
        image: r,
        link: i,
        title: a,
        width: ee,
        ...o
      }) => ({
        ...o,
        ay6czHzdj: e ?? o.ay6czHzdj ?? `Blog`,
        j4MDz27xT: i ?? o.j4MDz27xT,
        q75rpN389: r ??
          o.q75rpN389 ?? {
            src: `/images/imjZYprWSGPmSiOiAq7Ll9pZY5Q.png`,
            srcSet: `/images/imjZYprWSGPmSiOiAq7Ll9pZY5Q.png 512w,/images/imjZYprWSGPmSiOiAq7Ll9pZY5Q.png 1024w,/images/imjZYprWSGPmSiOiAq7Ll9pZY5Q.png 1280w`,
          },
        VnNfoGcKy:
          a ??
          o.VnNfoGcKy ??
          `The Future of AI Automation: How It’s Changing Business Operations`,
      })),
      (Pe = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (J = S(
        u(function (e, t) {
          let n = r(null),
            a = t ?? n,
            o = ee(),
            { activeLocale: te, setLocale: l } = D(),
            u = ae(),
            {
              style: d,
              className: p,
              layoutId: h,
              variant: g,
              q75rpN389: y,
              ay6czHzdj: x,
              VnNfoGcKy: S,
              j4MDz27xT: C,
              ...w
            } = Ne(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: ie,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: oe,
              setGestureState: se,
              setVariant: ce,
              variants: N,
            } = O({
              defaultVariant: `t66mCUFjc`,
              enabledGestures: U,
              ref: a,
              variant: g,
              variantClassNames: G,
            }),
            P = Pe(e, N),
            F = v(W, we);
          return c(m, {
            id: h ?? o,
            children: c(Me, {
              animate: N,
              initial: !1,
              children: c(je, {
                value: Ae,
                children: c(k, {
                  href: C,
                  motionChild: !0,
                  nodeId: `t66mCUFjc`,
                  scopeId: `FHHUSWsRS`,
                  smoothScroll: !0,
                  children: s(H, {
                    ...w,
                    ...A,
                    __framer__animate: { transition: ke },
                    __framer__animateOnce: !0,
                    __framer__enter: K,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0.5,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${v(F, `framer-1ppp9dr`, p, E)} framer-n90anx`,
                    "data-border": !0,
                    "data-framer-name": `Blog card`,
                    layoutDependency: P,
                    layoutId: `t66mCUFjc`,
                    ref: a,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-f0cc7bb8-007b-4de4-b069-75b5a498b900, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-cfb0af42-62a5-486a-837b-9870b5e7030b, rgba(255, 255, 255, 0.05))`,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      ...d,
                    },
                    ...B(
                      { "t66mCUFjc-hover": { "data-framer-name": void 0 } },
                      T,
                      j,
                    ),
                    children: [
                      c(f.div, {
                        className: `framer-vha2d5`,
                        "data-framer-name": `Image holder`,
                        layoutDependency: P,
                        layoutId: `rgmoHfuqB`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        children: c(re, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: _(
                              (u?.y || 0) +
                                30 +
                                (((u?.height || 456) - 60 - 451) / 2 + 0 + 0) +
                                0,
                            ),
                            sizes: `max(${u?.width || `100vw`} - 60px, 1px)`,
                            ...q(y),
                          },
                          className: `framer-y6e0h9`,
                          layoutDependency: P,
                          layoutId: `lhkbJ3jrg`,
                          style: {
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            scale: 1,
                          },
                          variants: { "t66mCUFjc-hover": { scale: 1.1 } },
                          ...B(
                            {
                              "t66mCUFjc-hover": {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: _(
                                    (u?.y || 0) +
                                      30 +
                                      (((u?.height || 436) - 60 - 451) / 2 +
                                        0 +
                                        0) +
                                      0,
                                  ),
                                  sizes: `max(${u?.width || `100vw`} - 60px, 1px)`,
                                  ...q(y),
                                },
                              },
                            },
                            T,
                            j,
                          ),
                        }),
                      }),
                      c(M, {
                        height: 33,
                        y:
                          (u?.y || 0) +
                          30 +
                          (((u?.height || 456) - 60 - 451) / 2 + 250 + 15),
                        ...B(
                          {
                            "t66mCUFjc-hover": {
                              y:
                                (u?.y || 0) +
                                30 +
                                (((u?.height || 436) - 60 - 451) / 2 +
                                  250 +
                                  15),
                            },
                          },
                          T,
                          j,
                        ),
                        children: c(ne, {
                          className: `framer-txn03u-container`,
                          layoutDependency: P,
                          layoutId: `uQ7oD661d-container`,
                          nodeId: `uQ7oD661d`,
                          rendersWithMotion: !0,
                          scopeId: `FHHUSWsRS`,
                          children: c(R, {
                            b5FKc3lDF: x,
                            height: `100%`,
                            id: `uQ7oD661d`,
                            layoutId: `uQ7oD661d`,
                            P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                            width: `100%`,
                            YKQkMRbk7: !1,
                          }),
                        }),
                      }),
                      c(f.div, {
                        className: `framer-jha8re`,
                        "data-framer-name": `Title`,
                        layoutDependency: P,
                        layoutId: `GBpxOXdz6`,
                        children: c(b, {
                          __fromCanvasComponent: !0,
                          children: c(i, {
                            children: c(f.p, {
                              className: `framer-styles-preset-owv810`,
                              "data-styles-preset": `Ag1SUJs5E`,
                              children: `The Future of AI Automation: How It’s Changing Business Operations`,
                            }),
                          }),
                          className: `framer-eekct`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `b80DHBy8I`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: S,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
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
          `.framer-bGNrD.framer-n90anx, .framer-bGNrD .framer-n90anx { display: block; }`,
          `.framer-bGNrD.framer-1ppp9dr { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; text-decoration: none; width: 364px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bGNrD .framer-vha2d5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bGNrD .framer-y6e0h9 { flex: 1 0 0px; height: 250px; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bGNrD .framer-txn03u-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-bGNrD .framer-jha8re { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-bGNrD .framer-eekct { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bGNrD.framer-1ppp9dr, .framer-bGNrD .framer-vha2d5, .framer-bGNrD .framer-jha8re { gap: 0px; } .framer-bGNrD.framer-1ppp9dr > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-bGNrD.framer-1ppp9dr > :first-child, .framer-bGNrD .framer-jha8re > :first-child { margin-top: 0px; } .framer-bGNrD.framer-1ppp9dr > :last-child, .framer-bGNrD .framer-jha8re > :last-child { margin-bottom: 0px; } .framer-bGNrD .framer-vha2d5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-bGNrD .framer-vha2d5 > :first-child { margin-left: 0px; } .framer-bGNrD .framer-vha2d5 > :last-child { margin-right: 0px; } .framer-bGNrD .framer-jha8re > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
          ...Se,
          `.framer-bGNrD[data-border="true"]::after, .framer-bGNrD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-bGNrD`,
      )),
      (Y = J),
      (J.displayName = `Blog card`),
      (J.defaultProps = { height: 456, width: 364 }),
      j(J, {
        q75rpN389: {
          __defaultAssetReference: `data:framer/asset-reference,imjZYprWSGPmSiOiAq7Ll9pZY5Q.png?originalFilename=visualelectric-1741840197852.png&preferredSize=auto`,
          title: `Image`,
          type: C.ResponsiveImage,
        },
        ay6czHzdj: {
          defaultValue: `Blog`,
          displayTextArea: !1,
          title: `Category`,
          type: C.String,
        },
        VnNfoGcKy: {
          defaultValue: `The Future of AI Automation: How It’s Changing Business Operations`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        j4MDz27xT: { title: `Link`, type: C.Link },
      }),
      y(
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
            ],
          },
          ...V,
          ...x(Ce),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
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
  $,
  Ze,
  Qe;
e(() => {
  (l(),
    ce(),
    h(),
    a(),
    be(),
    Fe(),
    I(),
    Te(),
    _e(),
    pe(),
    Oe(),
    (Ie = g(R)),
    (Le = T(A)),
    (Re = g(Y)),
    (ze = g(L)),
    (Be = {
      CiTObaz8o: `(max-width: 809px)`,
      Gpz5zR1Ag: `(min-width: 810px) and (max-width: 1199px)`,
      LjF3IlgQB: `(min-width: 1200px)`,
    }),
    (Ve = `framer-tUjPs`),
    (He = {
      CiTObaz8o: `framer-v-1jz6fml`,
      Gpz5zR1Ag: `framer-v-17oeup9`,
      LjF3IlgQB: `framer-v-o1tt4e`,
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
    (Ke = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (qe = ({ query: e, pageSize: t, children: n }) => n(se(e))),
    (Je = ({ value: e }) =>
      oe()
        ? null
        : c(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Ye = { Desktop: `LjF3IlgQB`, Phone: `CiTObaz8o`, Tablet: `Gpz5zR1Ag` }),
    (Xe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ye[r.variant] ?? r.variant ?? `LjF3IlgQB`,
    })),
    ($ = S(
      u(function (e, t) {
        let a = r(null),
          te = t ?? a,
          l = ee(),
          { activeLocale: u, setLocale: p } = D(),
          h = ae(),
          {
            style: g,
            className: ne,
            layoutId: _,
            variant: y,
            awOa5ewjfDV7IfHMzA: x,
            jpTD_w3SeDV7IfHMzA: S,
            Hy_0nvWr3DV7IfHMzA: C,
            Ws_MRUmqoDV7IfHMzA: T,
            idDV7IfHMzA: re,
            ...O
          } = Xe(e);
        (n(() => {
          let e = z(void 0, u);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, u]),
          d(() => {
            let e = z(void 0, u);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, u]));
        let [k, j] = E(y, Be, !1),
          oe = v(Ve, ye, ve);
        return (
          ie(),
          N({}),
          c(F.Provider, {
            value: { primaryVariantId: `LjF3IlgQB`, variantClassNames: He },
            children: s(m, {
              id: _ ?? l,
              children: [
                c(Je, {
                  value: `html body { background: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); }`,
                }),
                s(f.div, {
                  ...O,
                  className: v(oe, `framer-o1tt4e`, ne),
                  ref: te,
                  style: { ...g },
                  children: [
                    s(`section`, {
                      className: `framer-19lcsgr`,
                      "data-framer-name": `Hero section`,
                      children: [
                        s(`div`, {
                          className: `framer-afsk7y`,
                          children: [
                            c(M, {
                              height: 33,
                              y: (h?.y || 0) + 160 + 0 + 180 + 0 + 0 + 0,
                              children: c(Le, {
                                animate: Ue,
                                className: `framer-e9b9ms-container`,
                                "data-framer-appear-id": `e9b9ms`,
                                initial: We,
                                nodeId: `EgofpwcRL`,
                                optimized: !0,
                                rendersWithMotion: !0,
                                scopeId: `BrHvGwiT3`,
                                children: c(R, {
                                  b5FKc3lDF: `Blog`,
                                  height: `100%`,
                                  id: `EgofpwcRL`,
                                  layoutId: `EgofpwcRL`,
                                  P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                  width: `100%`,
                                  YKQkMRbk7: !1,
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-1xomzh8`,
                              "data-framer-name": `Heading+subheading`,
                              children: [
                                c(b, {
                                  __fromCanvasComponent: !0,
                                  children: c(i, {
                                    children: c(`h1`, {
                                      className: `framer-styles-preset-q2gmjp`,
                                      "data-styles-preset": `K0tuspaT8`,
                                      children: `Unlock Software & Tech Insights`,
                                    }),
                                  }),
                                  className: `framer-vm4m3e`,
                                  effect: Ge,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(b, {
                                  __fromCanvasComponent: !0,
                                  children: c(i, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      children: `Stay informed with the latest trends in SaaS, custom software, digital products, and growth strategies.`,
                                    }),
                                  }),
                                  className: `framer-1xjo8ph`,
                                  effect: Q,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        c(`div`, {
                          className: `framer-1t1y1wd`,
                          children: c(P, {
                            children: c(qe, {
                              query: {
                                from: {
                                  alias: `DV7IfHMzA`,
                                  data: De,
                                  type: `Collection`,
                                },
                                select: [
                                  {
                                    collection: `DV7IfHMzA`,
                                    name: `awOa5ewjf`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `DV7IfHMzA`,
                                    name: `jpTD_w3Se`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `DV7IfHMzA`,
                                    name: `Hy_0nvWr3`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `DV7IfHMzA`,
                                    name: `Ws_MRUmqo`,
                                    type: `Identifier`,
                                  },
                                  {
                                    collection: `DV7IfHMzA`,
                                    name: `id`,
                                    type: `Identifier`,
                                  },
                                ],
                              },
                              children: (e, t, n) =>
                                c(o, {
                                  children: e?.map(
                                    (
                                      {
                                        awOa5ewjf: e,
                                        Hy_0nvWr3: t,
                                        id: n,
                                        jpTD_w3Se: r,
                                        Ws_MRUmqo: i,
                                      },
                                      a,
                                    ) => (
                                      (t ??= ``),
                                      (i ??= ``),
                                      c(
                                        m,
                                        {
                                          id: `DV7IfHMzA-${n}`,
                                          children: c(ue.Provider, {
                                            value: { Ws_MRUmqo: i },
                                            children: c(le, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      Ws_MRUmqo: i,
                                                    },
                                                    webPageId: `a7yG7bakh`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      Ws_MRUmqo: i,
                                                    },
                                                    webPageId: `a7yG7bakh`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      Ws_MRUmqo: i,
                                                    },
                                                    webPageId: `a7yG7bakh`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (n) =>
                                                c(w, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    CiTObaz8o: {
                                                      width: `max(min(${h?.width || `100vw`} - 88px, 900px), 50px)`,
                                                    },
                                                  },
                                                  children: c(M, {
                                                    height: 432,
                                                    width: `max((min(${h?.width || `100vw`} - 120px, 900px) - 20px) / 2, 50px)`,
                                                    y:
                                                      (h?.y || 0) +
                                                      160 +
                                                      0 +
                                                      180 +
                                                      345 +
                                                      0 +
                                                      0,
                                                    children: c(A, {
                                                      className: `framer-bd0tv1-container`,
                                                      nodeId: `xYWBufdr8`,
                                                      scopeId: `BrHvGwiT3`,
                                                      children: c(w, {
                                                        breakpoint: k,
                                                        overrides: {
                                                          CiTObaz8o: {
                                                            j4MDz27xT: n[2],
                                                          },
                                                          Gpz5zR1Ag: {
                                                            j4MDz27xT: n[1],
                                                          },
                                                        },
                                                        children: c(Y, {
                                                          ay6czHzdj:
                                                            Ee.jpTD_w3Se?.(
                                                              r,
                                                              u,
                                                            ),
                                                          height: `100%`,
                                                          id: `xYWBufdr8`,
                                                          j4MDz27xT: n[0],
                                                          layoutId: `xYWBufdr8`,
                                                          q75rpN389: Ke(e),
                                                          style: {
                                                            width: `100%`,
                                                          },
                                                          VnNfoGcKy: t,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          }),
                                        },
                                        n,
                                      )
                                    ),
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    c(M, {
                      children: c(A, {
                        className: `framer-1siitpf-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `zYOIpUNyY`,
                        scopeId: `BrHvGwiT3`,
                        children: c(L, {
                          height: `100%`,
                          id: `zYOIpUNyY`,
                          intensity: 10,
                          layoutId: `zYOIpUNyY`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-tUjPs.framer-xvthw2, .framer-tUjPs .framer-xvthw2 { display: block; }`,
        `.framer-tUjPs.framer-o1tt4e { align-content: center; align-items: center; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-tUjPs .framer-19lcsgr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-tUjPs .framer-afsk7y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tUjPs .framer-e9b9ms-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-tUjPs .framer-1xomzh8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tUjPs .framer-vm4m3e { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 900px; position: relative; width: 100%; }`,
        `.framer-tUjPs .framer-1xjo8ph { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 600px; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tUjPs .framer-1t1y1wd { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; max-width: 900px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tUjPs .framer-bd0tv1-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-tUjPs .framer-1siitpf-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-tUjPs.framer-o1tt4e, .framer-tUjPs .framer-19lcsgr, .framer-tUjPs .framer-afsk7y, .framer-tUjPs .framer-1xomzh8 { gap: 0px; } .framer-tUjPs.framer-o1tt4e > * { margin: 0px; margin-bottom: calc(160px / 2); margin-top: calc(160px / 2); } .framer-tUjPs.framer-o1tt4e > :first-child, .framer-tUjPs .framer-19lcsgr > :first-child, .framer-tUjPs .framer-afsk7y > :first-child, .framer-tUjPs .framer-1xomzh8 > :first-child { margin-top: 0px; } .framer-tUjPs.framer-o1tt4e > :last-child, .framer-tUjPs .framer-19lcsgr > :last-child, .framer-tUjPs .framer-afsk7y > :last-child, .framer-tUjPs .framer-1xomzh8 > :last-child { margin-bottom: 0px; } .framer-tUjPs .framer-19lcsgr > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-tUjPs .framer-afsk7y > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-tUjPs .framer-1xomzh8 > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } }`,
        ...he,
        ...ge,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-tUjPs.framer-o1tt4e { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-tUjPs.framer-o1tt4e { width: 390px; } .framer-tUjPs .framer-19lcsgr { padding: 180px 24px 100px 24px; } .framer-tUjPs .framer-1t1y1wd { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-tUjPs`,
    )),
    (Ze = $),
    ($.displayName = `Blog`),
    ($.defaultProps = { height: 1771, width: 1200 }),
    y(
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
        ...Ie,
        ...Re,
        ...ze,
        ...x(fe),
        ...x(me),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (Qe = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerBrHvGwiT3`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Gpz5zR1Ag":{"layout":["fixed","auto"]},"CiTObaz8o":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `1771`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Qe as __FramerMetadata__, Ze as default };
//# sourceMappingURL=GIole-v3.mjs.map
