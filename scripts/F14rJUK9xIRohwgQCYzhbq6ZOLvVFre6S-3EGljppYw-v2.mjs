import { t as e } from "./rolldown-runtime.mjs";
import {
  N as t,
  O as ee,
  P as n,
  T as r,
  b as te,
  d as i,
  l as a,
  o,
  v as s,
  w as ne,
} from "./react.mjs";
import { C as c, r as re, t as l } from "./motion.mjs";
import {
  B as u,
  M as d,
  O as ie,
  T as f,
  V as p,
  _t as m,
  b as h,
  bt as g,
  ct as ae,
  dt as oe,
  ht as _,
  i as v,
  it as se,
  lt as y,
  q as b,
  r as x,
  st as S,
  u as C,
  w,
} from "./core-lib.mjs";
import {
  a as T,
  c as E,
  g as D,
  h as O,
  i as ce,
  l as k,
  m as le,
  o as A,
  p as ue,
  r as de,
  s as j,
  u as fe,
} from "./shared.mjs";
import { n as pe, t as M } from "./chunk-11.mjs";
import { n as me, r as N } from "./chunk-12.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (o(),
    b(),
    l(),
    r(),
    fe(),
    pe(),
    E(),
    A(),
    D(),
    me(),
    (P = u(j)),
    (F = g(v)),
    (I = u(M)),
    (L = g(c.div)),
    (R = u(k)),
    (z = {
      D_708RC6l: `(max-width: 809px)`,
      tb2dINc29: `(min-width: 810px) and (max-width: 1199px)`,
      uAXrTz8E7: `(min-width: 1200px)`,
    }),
    (B = `framer-XtYmW`),
    (V = {
      D_708RC6l: `framer-v-mkjrp1`,
      tb2dINc29: `framer-v-11g2h1k`,
      uAXrTz8E7: `framer-v-knhgcc`,
    }),
    (H = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 1.4, duration: 1.2, type: `spring` },
      x: 0,
      y: 0,
    }),
    (U = {
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
    (W = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (G = {
      damping: 100,
      delay: 0.05,
      mass: 1,
      stiffness: 400,
      type: `spring`,
    }),
    (K = {
      effect: W,
      repeat: !1,
      startDelay: 1.2,
      tokenization: `word`,
      transition: G,
      trigger: `onMount`,
      type: `appear`,
    }),
    (q = {
      effect: W,
      repeat: !1,
      startDelay: 1.3,
      tokenization: `word`,
      transition: G,
      trigger: `onMount`,
      type: `appear`,
    }),
    (J = ({ value: e }) =>
      y()
        ? null
        : a(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Y = { Desktop: `uAXrTz8E7`, Phone: `D_708RC6l`, Tablet: `tb2dINc29` }),
    (X = ({ height: e, id: t, width: ee, ...n }) => ({
      ...n,
      variant: Y[n.variant] ?? n.variant ?? `uAXrTz8E7`,
    })),
    (Z = m(
      s(function (e, r) {
        let o = ee(null),
          s = r ?? o,
          l = te(),
          { activeLocale: u, setLocale: ie } = oe(),
          p = se(),
          { style: m, className: g, layoutId: y, variant: b, ...T } = X(e);
        (t(() => {
          let e = N(void 0, u);
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
          ne(() => {
            let e = N(void 0, u);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, u]));
        let [E, D] = ae(b, z, !1),
          O = d(B, de, ue);
        return (
          _(),
          S({}),
          a(C.Provider, {
            value: { primaryVariantId: `uAXrTz8E7`, variantClassNames: V },
            children: i(re, {
              id: y ?? l,
              children: [
                a(J, {
                  value: `html body { background: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); }`,
                }),
                i(c.div, {
                  ...T,
                  className: d(O, `framer-knhgcc`, g),
                  ref: s,
                  style: { ...m },
                  children: [
                    i(`section`, {
                      className: `framer-8509wc`,
                      "data-framer-name": `Hero section`,
                      children: [
                        a(x, {
                          height: 34,
                          y: (p?.y || 0) + 0 + 0 + 180 + 0,
                          children: a(F, {
                            animate: H,
                            className: `framer-1caco3j-container`,
                            "data-framer-appear-id": `1caco3j`,
                            initial: U,
                            nodeId: `K3JWwoi8d`,
                            optimized: !0,
                            rendersWithMotion: !0,
                            scopeId: `h8fraBXAH`,
                            children: a(j, {
                              b5FKc3lDF: `Page not found`,
                              B6A6qB6b_: 14,
                              height: `100%`,
                              id: `K3JWwoi8d`,
                              layoutId: `K3JWwoi8d`,
                              P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                              v834N_OwF: `var(--token-ea3f5ec2-80ec-412c-a26e-34872584c90c, rgb(255, 255, 255))`,
                              width: `100%`,
                              YKQkMRbk7: !1,
                            }),
                          }),
                        }),
                        i(`div`, {
                          className: `framer-b3fu1m`,
                          "data-framer-name": `Heading+subheading`,
                          children: [
                            a(f, {
                              __fromCanvasComponent: !0,
                              children: a(n, {
                                children: a(`h1`, {
                                  className: `framer-styles-preset-q2gmjp`,
                                  "data-styles-preset": `K0tuspaT8`,
                                  children: `Looks Like You’re Off Track`,
                                }),
                              }),
                              className: `framer-1solky8`,
                              effect: K,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            a(f, {
                              __fromCanvasComponent: !0,
                              children: a(n, {
                                children: a(`p`, {
                                  className: `framer-styles-preset-trq6qq`,
                                  "data-styles-preset": `Qjp1AZZMc`,
                                  children: `The page you're looking for doesn't exist or may have been moved. Let's get you back to where you need to be.`,
                                }),
                              }),
                              className: `framer-kfp8ts`,
                              effect: q,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        a(L, {
                          animate: H,
                          className: `framer-120l5jr`,
                          "data-framer-appear-id": `120l5jr`,
                          "data-framer-name": `CTA`,
                          initial: U,
                          optimized: !0,
                          children: a(w, {
                            links: [
                              {
                                href: { webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              a(x, {
                                height: 36,
                                y: (p?.y || 0) + 0 + 0 + 180 + 301 + 0,
                                children: a(v, {
                                  className: `framer-e6jq6-container`,
                                  nodeId: `D4qQW1O_4`,
                                  scopeId: `h8fraBXAH`,
                                  children: a(h, {
                                    breakpoint: E,
                                    overrides: {
                                      D_708RC6l: { t90xdY6CE: e[2] },
                                      tb2dINc29: { t90xdY6CE: e[1] },
                                    },
                                    children: a(M, {
                                      ae3kdG3b0: `var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200))`,
                                      height: `100%`,
                                      id: `D4qQW1O_4`,
                                      IHCtoN6iC: !0,
                                      layoutId: `D4qQW1O_4`,
                                      NAbd17i0q: `Back to Home ↗`,
                                      t90xdY6CE: e[0],
                                      width: `100%`,
                                      yt52UU3wF: 15,
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        }),
                      ],
                    }),
                    a(x, {
                      children: a(v, {
                        className: `framer-13n7ybn-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `Kc8KS62j7`,
                        scopeId: `h8fraBXAH`,
                        children: a(k, {
                          height: `100%`,
                          id: `Kc8KS62j7`,
                          intensity: 10,
                          layoutId: `Kc8KS62j7`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-XtYmW.framer-135fs1d, .framer-XtYmW .framer-135fs1d { display: block; }`,
        `.framer-XtYmW.framer-knhgcc { align-content: center; align-items: center; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-XtYmW .framer-8509wc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-XtYmW .framer-1caco3j-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-XtYmW .framer-b3fu1m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XtYmW .framer-1solky8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 900px; position: relative; width: 100%; }`,
        `.framer-XtYmW .framer-kfp8ts { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 600px; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XtYmW .framer-120l5jr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-XtYmW .framer-e6jq6-container, .framer-XtYmW .framer-13n7ybn-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-XtYmW.framer-knhgcc, .framer-XtYmW .framer-8509wc, .framer-XtYmW .framer-b3fu1m, .framer-XtYmW .framer-120l5jr { gap: 0px; } .framer-XtYmW.framer-knhgcc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-XtYmW.framer-knhgcc > :first-child, .framer-XtYmW .framer-8509wc > :first-child, .framer-XtYmW .framer-b3fu1m > :first-child { margin-top: 0px; } .framer-XtYmW.framer-knhgcc > :last-child, .framer-XtYmW .framer-8509wc > :last-child, .framer-XtYmW .framer-b3fu1m > :last-child { margin-bottom: 0px; } .framer-XtYmW .framer-8509wc > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-XtYmW .framer-b3fu1m > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-XtYmW .framer-120l5jr > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-XtYmW .framer-120l5jr > :first-child { margin-left: 0px; } .framer-XtYmW .framer-120l5jr > :last-child { margin-right: 0px; } }`,
        ...ce,
        ...le,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-XtYmW.framer-knhgcc { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-XtYmW.framer-knhgcc { width: 390px; }}`,
      ],
      `framer-XtYmW`,
    )),
    (Q = Z),
    (Z.displayName = `Page`),
    (Z.defaultProps = { height: 1e3, width: 1200 }),
    ie(
      Z,
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
        ...P,
        ...I,
        ...R,
        ...p(T),
        ...p(O),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Framerh8fraBXAH`,
          slots: [],
          annotations: {
            framerScrollSections: `* @framerResponsiveScreen`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"tb2dINc29":{"layout":["fixed","fixed"]},"D_708RC6l":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicHeight: `1000`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=F14rJUK9xIRohwgQCYzhbq6ZOLvVFre6S-3EGljppYw-v2.mjs.map
