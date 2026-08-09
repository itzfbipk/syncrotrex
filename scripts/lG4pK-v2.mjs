import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  N as n,
  O as r,
  P as i,
  T as a,
  b as o,
  d as s,
  j as c,
  l,
  o as u,
  v as d,
  w as f,
} from "./react.mjs";
import { C as p, a as m, r as ee, t as h } from "./motion.mjs";
import {
  B as g,
  D as _,
  H as v,
  M as y,
  N as b,
  O as x,
  T as S,
  U as te,
  V as C,
  _t as w,
  a as T,
  at as ne,
  b as E,
  ct as re,
  dt as D,
  f as O,
  g as k,
  gt as ie,
  h as ae,
  ht as oe,
  i as A,
  it as se,
  k as j,
  lt as M,
  pt as ce,
  q as N,
  r as P,
  st as le,
  u as ue,
  ut as de,
  w as fe,
} from "./core-lib.mjs";
import {
  a as F,
  c as I,
  d as L,
  f as pe,
  g as R,
  h as z,
  i as me,
  l as B,
  m as he,
  o as ge,
  p as _e,
  r as ve,
  s as V,
  u as ye,
} from "./shared.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./chunk-13.mjs";
import { i as H, n as U, r as W, t as G } from "./chunk-06.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./chunk-07.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./chunk-19.mjs";
import { i as Me, r as Ne, t as Pe } from "./chunk-18-v2.mjs";
import { n as Fe, r as K } from "./chunk-01.mjs";
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var J,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  Y,
  X,
  We = e(() => {
    (u(),
      N(),
      h(),
      a(),
      pe(),
      H(),
      (J = g(L)),
      (Ie = { kmMH4mVBI: { hover: !0 } }),
      (Le = `framer-tkVYS`),
      (Re = { kmMH4mVBI: `framer-v-oc284j` }),
      (ze = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (Be = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(m.Provider, { value: a, children: n });
      }),
      (Ve = p.create(i)),
      (He = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        PTrYoVjtZ: n ?? i.PTrYoVjtZ,
      })),
      (Ue = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = w(
        d(function (e, t) {
          let n = r(null),
            a = t ?? n,
            c = o(),
            { activeLocale: u, setLocale: d } = D();
          se();
          let {
              style: f,
              className: m,
              layoutId: h,
              variant: g,
              PTrYoVjtZ: v,
              ...b
            } = He(e),
            {
              baseVariant: x,
              classNames: te,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: ne,
              setGestureState: E,
              setVariant: re,
              variants: O,
            } = ie({
              defaultVariant: `kmMH4mVBI`,
              enabledGestures: Ie,
              ref: a,
              variant: g,
              variantClassNames: Re,
            }),
            k = Ue(e, O),
            oe = y(Le, G);
          return l(ee, {
            id: h ?? c,
            children: l(Ve, {
              animate: O,
              initial: !1,
              children: l(Be, {
                value: ze,
                children: l(ae, {
                  href: v,
                  motionChild: !0,
                  nodeId: `kmMH4mVBI`,
                  scopeId: `JRXooJ7jw`,
                  smoothScroll: !0,
                  children: s(p.a, {
                    ...b,
                    ...w,
                    className: `${y(oe, `framer-oc284j`, m, te)} framer-p167rw`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: k,
                    layoutId: `kmMH4mVBI`,
                    ref: a,
                    style: {
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                      ...f,
                    },
                    variants: {
                      "kmMH4mVBI-hover": {
                        backgroundColor: `var(--token-cfb0af42-62a5-486a-837b-9870b5e7030b, rgba(255, 255, 255, 0.05))`,
                      },
                    },
                    ...q(
                      { "kmMH4mVBI-hover": { "data-framer-name": void 0 } },
                      x,
                      T,
                    ),
                    children: [
                      l(P, {
                        children: l(_, {
                          className: `framer-krllin-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: `NwKWftv2s-container`,
                          nodeId: `NwKWftv2s`,
                          rendersWithMotion: !0,
                          scopeId: `JRXooJ7jw`,
                          children: l(L, {
                            color: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgb(204, 204, 204))`,
                            height: `100%`,
                            iconSearch: `arrow-left`,
                            iconSelection: `CaretLeft`,
                            id: `NwKWftv2s`,
                            layoutId: `NwKWftv2s`,
                            mirrored: !1,
                            selectByList: !1,
                            style: { height: `100%`, width: `100%` },
                            weight: `bold`,
                            width: `100%`,
                            ...q(
                              {
                                "kmMH4mVBI-hover": {
                                  color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                },
                              },
                              x,
                              T,
                            ),
                          }),
                        }),
                      }),
                      l(S, {
                        __fromCanvasComponent: !0,
                        children: l(i, {
                          children: l(p.p, {
                            className: `framer-styles-preset-16w1u5n`,
                            "data-styles-preset": `csUbUKGQ_`,
                            style: {
                              "--framer-text-color": `var(--esyncrotrexed-r6o4lv, var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgb(204, 204, 204)))`,
                            },
                            children: `Go back`,
                          }),
                        }),
                        className: `framer-u8np61`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `GHjQI9IOk`,
                        style: {
                          "--esyncrotrexed-r6o4lv": `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgb(204, 204, 204))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "kmMH4mVBI-hover": {
                            "--esyncrotrexed-r6o4lv": `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...q(
                          {
                            "kmMH4mVBI-hover": {
                              children: l(i, {
                                children: l(p.p, {
                                  className: `framer-styles-preset-16w1u5n`,
                                  "data-styles-preset": `csUbUKGQ_`,
                                  style: {
                                    "--framer-text-color": `var(--esyncrotrexed-r6o4lv, var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255)))`,
                                  },
                                  children: `Go back`,
                                }),
                              }),
                            },
                          },
                          x,
                          T,
                        ),
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
          `.framer-tkVYS.framer-p167rw, .framer-tkVYS .framer-p167rw { display: block; }`,
          `.framer-tkVYS.framer-oc284j { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 5px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-tkVYS .framer-krllin-container { flex: none; height: 16px; position: relative; width: 16px; }`,
          `.framer-tkVYS .framer-u8np61 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-tkVYS.framer-oc284j { gap: 0px; } .framer-tkVYS.framer-oc284j > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-tkVYS.framer-oc284j > :first-child { margin-left: 0px; } .framer-tkVYS.framer-oc284j > :last-child { margin-right: 0px; } }`,
          ...U,
        ],
        `framer-tkVYS`,
      )),
      (X = Y),
      (Y.displayName = `Back button`),
      (Y.defaultProps = { height: 32, width: 87 }),
      j(Y, { PTrYoVjtZ: { title: `Link`, type: T.Link } }),
      x(
        Y,
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
          ...J,
          ...C(W),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Ge,
  Ke,
  qe,
  Je = e(() => {
    (N(),
      b.loadFonts([`GF;Fragment Mono-regular`]),
      (Ge = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Fragment Mono`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/fragmentmono/v4/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ke = [
        `.framer-l79hU .framer-styles-preset-d920rg:not(.rich-text-wrapper), .framer-l79hU .framer-styles-preset-d920rg.rich-text-wrapper code { --framer-code-font-family: "Fragment Mono", monospace; --framer-code-font-style: normal; --framer-code-font-weight: 400; --framer-code-text-color: #333; --framer-font-size-scale: 1; background-color: rgba(0, 0, 0, 0.1); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; padding-bottom: 0.1em; padding-left: 0.2em; padding-right: 0.2em; padding-top: 0.1em; }`,
      ]),
      (qe = `framer-l79hU`));
  }),
  Ye,
  Xe,
  Ze,
  Qe = e(() => {
    (N(),
      b.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      (Ye = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
              weight: `500`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15bwkEU4HTy.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A1EayEA25WTybO8.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A4QdyEA25WTybO8.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Xe = [
        `.framer-E8v5e .framer-styles-preset-prcbwp:not(.rich-text-wrapper), .framer-E8v5e .framer-styles-preset-prcbwp.rich-text-wrapper h4 { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ze = `framer-E8v5e`));
  }),
  $e,
  et,
  tt,
  nt = e(() => {
    (N(),
      b.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      ($e = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
              weight: `500`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15bwkEU4HTy.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A1EayEA25WTybO8.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A4QdyEA25WTybO8.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (et = [
        `.framer-NefRe .framer-styles-preset-1uj1jk7:not(.rich-text-wrapper), .framer-NefRe .framer-styles-preset-1uj1jk7.rich-text-wrapper h5 { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (tt = `framer-NefRe`));
  }),
  rt,
  Z,
  it,
  at = e(() => {
    (N(),
      b.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      (rt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5bwkEU4HTy.woff2`,
              weight: `500`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15bwkEU4HTy.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A1EayEA25WTybO8.woff2`,
              weight: `700`,
            },
            {
              family: `Figtree`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A4QdyEA25WTybO8.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Z = [
        `.framer-6C6VY .framer-styles-preset-13fcp0u:not(.rich-text-wrapper), .framer-6C6VY .framer-styles-preset-13fcp0u.rich-text-wrapper h6 { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (it = `framer-6C6VY`));
  }),
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  Q,
  pt,
  mt,
  ht,
  $,
  gt,
  _t;
e(() => {
  (u(),
    N(),
    h(),
    a(),
    ye(),
    We(),
    I(),
    Me(),
    H(),
    Je(),
    Qe(),
    we(),
    nt(),
    at(),
    ge(),
    be(),
    R(),
    Oe(),
    Fe(),
    (ot = g(X)),
    (st = g(V)),
    (ct = g(B)),
    (lt = {
      CnJNt46qn: `(min-width: 1200px)`,
      H80eyMhL0: `(min-width: 810px) and (max-width: 1199px)`,
      jwINY3AmS: `(max-width: 809px)`,
    }),
    (ut = `framer-YPYoS`),
    (dt = {
      CnJNt46qn: `framer-v-v1xxdr`,
      H80eyMhL0: `framer-v-srr0k0`,
      jwINY3AmS: `framer-v-8y6pbe`,
    }),
    (ft = (e, t = {}, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = t.display ? t.display : `date`,
        a = {
          dateStyle: i === `time` ? void 0 : t.dateStyle,
          timeStyle: i === `date` ? void 0 : `short`,
          timeZone: `UTC`,
        },
        o = `en-US`,
        s = t.locale || n || o;
      try {
        return r.toLocaleString(s, a);
      } catch {
        return r.toLocaleString(o, a);
      }
    }),
    (Q = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (pt = ({ value: e }) =>
      M()
        ? null
        : l(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (mt = { Desktop: `CnJNt46qn`, Phone: `jwINY3AmS`, Tablet: `H80eyMhL0` }),
    (ht = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: mt[r.variant] ?? r.variant ?? `CnJNt46qn`,
    })),
    ($ = w(
      d(function (e, t) {
        let a = r(null),
          c = t ?? a,
          u = o(),
          { activeLocale: d, setLocale: m } = D(),
          h = se(),
          g = ne(),
          [_] = ce({
            from: { alias: `a7yG7bakh`, data: Pe, type: `Collection` },
            select: [
              {
                collection: `a7yG7bakh`,
                name: `Hy_0nvWr3`,
                type: `Identifier`,
              },
              {
                collection: `a7yG7bakh`,
                name: `i5cPbn0hM`,
                type: `Identifier`,
              },
              {
                collection: `a7yG7bakh`,
                name: `awOa5ewjf`,
                type: `Identifier`,
              },
              {
                collection: `a7yG7bakh`,
                name: `jpTD_w3Se`,
                type: `Identifier`,
              },
              {
                collection: `a7yG7bakh`,
                name: `k_F4KocZs`,
                type: `Identifier`,
              },
              {
                collection: `a7yG7bakh`,
                name: `wPbYGceu4`,
                type: `Identifier`,
              },
            ],
            where: te(g, `a7yG7bakh`),
          }),
          b = (e) => {
            if (!_)
              throw new k(
                `No data matches path variables: ${JSON.stringify(g)}`,
              );
            return _[e];
          },
          {
            style: x,
            className: C,
            layoutId: w,
            variant: T,
            jpTD_w3Se: ie = b(`jpTD_w3Se`),
            i5cPbn0hM: ae = b(`i5cPbn0hM`),
            Hy_0nvWr3: j = b(`Hy_0nvWr3`) ?? ``,
            k_F4KocZs: M = b(`k_F4KocZs`) ?? ``,
            awOa5ewjf: N = b(`awOa5ewjf`),
            wPbYGceu4: F = b(`wPbYGceu4`) ?? ``,
            ...I
          } = ht(e);
        (n(() => {
          let e = K(_, d);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [_, d]),
          f(() => {
            let e = K(_, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [_, d]));
        let [L, pe] = re(T, lt, !1),
          R = y(ut, ve, _e, je, De, Ze, tt, it, G, Ce, qe);
        oe();
        let z = de();
        return (
          le({}),
          l(ue.Provider, {
            value: { primaryVariantId: `CnJNt46qn`, variantClassNames: dt },
            children: s(ee, {
              id: w ?? u,
              children: [
                l(pt, {
                  value: `html body { background: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); }`,
                }),
                s(p.div, {
                  ...I,
                  className: y(R, `framer-v1xxdr`, C),
                  ref: c,
                  style: { ...x },
                  children: [
                    s(`section`, {
                      className: `framer-2jzjs0`,
                      "data-framer-name": `Container`,
                      children: [
                        s(`div`, {
                          className: `framer-1lefonx`,
                          "data-framer-name": `Header`,
                          children: [
                            l(`div`, {
                              className: `framer-16nwcan`,
                              "data-framer-name": `Back`,
                              children: l(fe, {
                                links: [
                                  {
                                    href: { webPageId: `BrHvGwiT3` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `BrHvGwiT3` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `BrHvGwiT3` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  l(P, {
                                    height: 32,
                                    y:
                                      (h?.y || 0) +
                                      140 +
                                      0 +
                                      100 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    children: l(A, {
                                      className: `framer-1r6dlph-container`,
                                      nodeId: `D_TG4cTeW`,
                                      scopeId: `a7yG7bakh`,
                                      children: l(E, {
                                        breakpoint: L,
                                        overrides: {
                                          H80eyMhL0: { PTrYoVjtZ: e[1] },
                                          jwINY3AmS: { PTrYoVjtZ: e[2] },
                                        },
                                        children: l(X, {
                                          height: `100%`,
                                          id: `D_TG4cTeW`,
                                          layoutId: `D_TG4cTeW`,
                                          PTrYoVjtZ: e[0],
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-1365gjx`,
                              "data-framer-name": `Content`,
                              children: [
                                s(`div`, {
                                  className: `framer-1j3ugw1`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    l(P, {
                                      height: 33,
                                      y:
                                        (h?.y || 0) +
                                        140 +
                                        0 +
                                        100 +
                                        0 +
                                        0 +
                                        59 +
                                        0 +
                                        0 +
                                        0,
                                      children: l(A, {
                                        className: `framer-ecbgga-container`,
                                        nodeId: `GRIiikA5r`,
                                        scopeId: `a7yG7bakh`,
                                        children: l(V, {
                                          b5FKc3lDF: Ne.jpTD_w3Se?.(ie, d),
                                          height: `100%`,
                                          id: `GRIiikA5r`,
                                          layoutId: `GRIiikA5r`,
                                          P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                          width: `100%`,
                                          YKQkMRbk7: !1,
                                        }),
                                      }),
                                    }),
                                    l(P, {
                                      height: 33,
                                      y:
                                        (h?.y || 0) +
                                        140 +
                                        0 +
                                        100 +
                                        0 +
                                        0 +
                                        59 +
                                        0 +
                                        0 +
                                        0,
                                      children: l(A, {
                                        className: `framer-q5x9qm-container`,
                                        nodeId: `P0g_XTX6M`,
                                        scopeId: `a7yG7bakh`,
                                        children: l(V, {
                                          b5FKc3lDF: ft(
                                            ae,
                                            { dateStyle: `medium`, locale: `` },
                                            z,
                                          ),
                                          height: `100%`,
                                          id: `P0g_XTX6M`,
                                          layoutId: `P0g_XTX6M`,
                                          P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                          width: `100%`,
                                          YKQkMRbk7: !1,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                l(S, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`h1`, {
                                      className: `framer-styles-preset-q2gmjp`,
                                      "data-styles-preset": `K0tuspaT8`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `The Future of AI Automation: How It’s Changing Business Operations`,
                                    }),
                                  }),
                                  className: `framer-1dhn0qs`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  text: j,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(S, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `AI automation is transforming the way businesses operate, from streamlining workflows to enhancing decision-making. In this article, we explore the latest trends, innovations, and real-world applications that are reshaping industries worldwide.`,
                                    }),
                                  }),
                                  className: `framer-vc1b5x`,
                                  "data-framer-name": `Short description`,
                                  fonts: [`Inter`],
                                  text: M,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(E, {
                          breakpoint: L,
                          overrides: {
                            H80eyMhL0: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: v((h?.y || 0) + 140 + 0 + 100 + 394),
                                sizes: `calc(min(${h?.width || `100vw`} - 40px, 800px) - 80px)`,
                                ...Q(N),
                              },
                            },
                            jwINY3AmS: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: v((h?.y || 0) + 140 + 0 + 100 + 394),
                                sizes: `calc(min(${h?.width || `100vw`} - 40px, 800px) - 48px)`,
                                ...Q(N),
                              },
                            },
                          },
                          children: l(O, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: v((h?.y || 0) + 140 + 0 + 100 + 394),
                              sizes: `min(${h?.width || `100vw`} - 40px, 800px)`,
                              ...Q(N),
                            },
                            className: `framer-1akmhzj`,
                            "data-framer-name": `Banner`,
                          }),
                        }),
                        l(S, {
                          __fromCanvasComponent: !0,
                          children: F,
                          className: `framer-1g9otut`,
                          "data-framer-name": `Content`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-1arsep9`,
                            code: `framer-styles-preset-d920rg`,
                            h1: `framer-styles-preset-q2gmjp`,
                            h2: `framer-styles-preset-15k0oiw`,
                            h3: `framer-styles-preset-gb7odv`,
                            h4: `framer-styles-preset-prcbwp`,
                            h5: `framer-styles-preset-1uj1jk7`,
                            h6: `framer-styles-preset-13fcp0u`,
                            p: `framer-styles-preset-16w1u5n`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    l(P, {
                      children: l(A, {
                        className: `framer-74t775-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `xgEdAMElu`,
                        scopeId: `a7yG7bakh`,
                        children: l(B, {
                          height: `100%`,
                          id: `xgEdAMElu`,
                          intensity: 10,
                          layoutId: `xgEdAMElu`,
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
        `.framer-YPYoS.framer-wrf9nv, .framer-YPYoS .framer-wrf9nv { display: block; }`,
        `.framer-YPYoS.framer-v1xxdr { align-content: center; align-items: center; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-YPYoS .framer-2jzjs0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 800px; padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-YPYoS .framer-1lefonx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; max-width: 100%; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YPYoS .framer-16nwcan { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 2px 0px; position: relative; width: 100%; }`,
        `.framer-YPYoS .framer-1r6dlph-container, .framer-YPYoS .framer-ecbgga-container, .framer-YPYoS .framer-q5x9qm-container, .framer-YPYoS .framer-74t775-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-YPYoS .framer-1365gjx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YPYoS .framer-1j3ugw1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 5px 0px 5px; position: relative; width: 100%; }`,
        `.framer-YPYoS .framer-1dhn0qs, .framer-YPYoS .framer-vc1b5x { flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-YPYoS .framer-1akmhzj { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 400px; position: relative; width: 100%; }`,
        `.framer-YPYoS .framer-1g9otut { --framer-paragraph-spacing: 32px; flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-YPYoS.framer-v1xxdr, .framer-YPYoS .framer-2jzjs0, .framer-YPYoS .framer-1lefonx, .framer-YPYoS .framer-16nwcan, .framer-YPYoS .framer-1365gjx, .framer-YPYoS .framer-1j3ugw1 { gap: 0px; } .framer-YPYoS.framer-v1xxdr > * { margin: 0px; margin-bottom: calc(160px / 2); margin-top: calc(160px / 2); } .framer-YPYoS.framer-v1xxdr > :first-child, .framer-YPYoS .framer-2jzjs0 > :first-child, .framer-YPYoS .framer-1lefonx > :first-child, .framer-YPYoS .framer-1365gjx > :first-child { margin-top: 0px; } .framer-YPYoS.framer-v1xxdr > :last-child, .framer-YPYoS .framer-2jzjs0 > :last-child, .framer-YPYoS .framer-1lefonx > :last-child, .framer-YPYoS .framer-1365gjx > :last-child { margin-bottom: 0px; } .framer-YPYoS .framer-2jzjs0 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-YPYoS .framer-1lefonx > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-YPYoS .framer-16nwcan > *, .framer-YPYoS .framer-1j3ugw1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-YPYoS .framer-16nwcan > :first-child, .framer-YPYoS .framer-1j3ugw1 > :first-child { margin-left: 0px; } .framer-YPYoS .framer-16nwcan > :last-child, .framer-YPYoS .framer-1j3ugw1 > :last-child { margin-right: 0px; } .framer-YPYoS .framer-1365gjx > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } }`,
        ...me,
        ...he,
        ...ke,
        ...Te,
        ...Xe,
        ...et,
        ...Z,
        ...U,
        ...xe,
        ...Ke,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-YPYoS.framer-v1xxdr { width: 810px; } .framer-YPYoS .framer-2jzjs0 { padding: 100px 40px 100px 40px; }}`,
        `@media (max-width: 809px) { .framer-YPYoS.framer-v1xxdr { width: 390px; } .framer-YPYoS .framer-2jzjs0 { padding: 100px 24px 100px 24px; }}`,
      ],
      `framer-YPYoS`,
    )),
    (gt = $),
    ($.displayName = `Articles Detail`),
    ($.defaultProps = { height: 2851, width: 1200 }),
    x(
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
        ...ot,
        ...st,
        ...ct,
        ...C(F),
        ...C(z),
        ...C(Ae),
        ...C(Ee),
        ...C(Ye),
        ...C($e),
        ...C(rt),
        ...C(W),
        ...C(Se),
        ...C(Ge),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (_t = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Framera7yG7bakh`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"H80eyMhL0":{"layout":["fixed","auto"]},"jwINY3AmS":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `2851`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { _t as __FramerMetadata__, gt as default };
//# sourceMappingURL=lG4pK-v2.mjs.map
