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
import { C as p, a as m, r as h, t as g } from "./motion.mjs";
import {
  B as _,
  D as v,
  E as y,
  H as b,
  M as x,
  O as S,
  T as C,
  V as w,
  _t as T,
  a as E,
  b as D,
  bt as ee,
  ct as te,
  dt as O,
  f as ne,
  gt as k,
  h as re,
  i as A,
  it as j,
  k as M,
  lt as N,
  mt as ie,
  q as P,
  r as F,
  st as ae,
  u as oe,
  yt as I,
} from "./core-lib.mjs";
import {
  C as L,
  S as se,
  T as ce,
  a as le,
  c as ue,
  d as R,
  f as de,
  g as fe,
  h as pe,
  i as me,
  l as he,
  m as ge,
  o as _e,
  p as ve,
  r as ye,
  s as z,
  u as be,
  w as xe,
} from "./shared.mjs";
import { n as Se, t as Ce } from "./chunk-11-v3.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./chunk-06.mjs";
import {
  a as Oe,
  c as ke,
  i as Ae,
  l as je,
  n as B,
  o as Me,
  r as Ne,
  s as Pe,
  t as Fe,
  u as Ie,
} from "./chunk-16.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./chunk-02.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./chunk-19.mjs";
import { n as Ge, r as Ke } from "./chunk-14.mjs";
var qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  V,
  tt,
  nt = e(() => {
    (u(),
      P(),
      g(),
      a(),
      de(),
      ke(),
      (qe = _(R)),
      (Je = `framer-8nmc3`),
      (Ye = { WiIg6MOKc: `framer-v-1g9gdgu` }),
      (Xe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ze = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(m.Provider, { value: a, children: n });
      }),
      (Qe = p.create(i)),
      ($e = ({ background: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        P7WHWvput: e ?? i.P7WHWvput ?? `rgb(13, 13, 13)`,
      })),
      (et = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (V = T(
        d(function (e, t) {
          let n = r(null),
            a = t ?? n,
            c = o(),
            { activeLocale: u, setLocale: d } = O();
          j();
          let {
              style: f,
              className: m,
              layoutId: g,
              variant: _,
              P7WHWvput: y,
              ...b
            } = $e(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: re,
            } = k({
              defaultVariant: `WiIg6MOKc`,
              ref: a,
              variant: _,
              variantClassNames: Ye,
            }),
            A = et(e, re),
            M = x(Je, Oe);
          return l(h, {
            id: g ?? c,
            children: l(Qe, {
              animate: re,
              initial: !1,
              children: l(Ze, {
                value: Xe,
                children: s(p.div, {
                  ...b,
                  ...E,
                  className: x(M, `framer-1g9gdgu`, m, w),
                  "data-border": !0,
                  "data-framer-name": `Cursor`,
                  layoutDependency: A,
                  layoutId: `WiIg6MOKc`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: y,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...f,
                  },
                  children: [
                    l(C, {
                      __fromCanvasComponent: !0,
                      children: l(i, {
                        children: l(p.p, {
                          className: `framer-styles-preset-1kdv3c8`,
                          "data-styles-preset": `PDoVxFHq4`,
                          children: `View LinkedIn Profile`,
                        }),
                      }),
                      className: `framer-11b0bo7`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `WISZZ2BDM`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    l(F, {
                      children: l(v, {
                        className: `framer-fb1mqg-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: A,
                        layoutId: `FB56svyl9-container`,
                        nodeId: `FB56svyl9`,
                        rendersWithMotion: !0,
                        scopeId: `avC_IltMg`,
                        children: l(R, {
                          color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                          height: `100%`,
                          iconSearch: `arrow-up-right`,
                          iconSelection: `House`,
                          id: `FB56svyl9`,
                          layoutId: `FB56svyl9`,
                          mirrored: !1,
                          selectByList: !1,
                          style: { height: `100%`, width: `100%` },
                          weight: `bold`,
                          width: `100%`,
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
          `.framer-8nmc3.framer-po5txo, .framer-8nmc3 .framer-po5txo { display: block; }`,
          `.framer-8nmc3.framer-1g9gdgu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8nmc3 .framer-11b0bo7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8nmc3 .framer-fb1mqg-container { flex: none; height: 15px; position: relative; width: 15px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8nmc3.framer-1g9gdgu { gap: 0px; } .framer-8nmc3.framer-1g9gdgu > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-8nmc3.framer-1g9gdgu > :first-child { margin-left: 0px; } .framer-8nmc3.framer-1g9gdgu > :last-child { margin-right: 0px; } }`,
          ...Me,
          `.framer-8nmc3[data-border="true"]::after, .framer-8nmc3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-8nmc3`,
      )),
      (tt = V),
      (V.displayName = `Team Cursor`),
      (V.defaultProps = { height: 31, width: 147 }),
      M(V, {
        P7WHWvput: {
          defaultValue: `rgb(13, 13, 13)`,
          title: `Background`,
          type: E.Color,
        },
      }),
      S(
        V,
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
          ...qe,
          ...w(Pe),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  H,
  U,
  ft = e(() => {
    (u(),
      P(),
      g(),
      a(),
      de(),
      Le(),
      we(),
      (rt = _(R)),
      (it = `framer-qM5xW`),
      (at = { doXRwh5JM: `framer-v-iuwoim` }),
      (ot = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (st = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ct = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(m.Provider, { value: a, children: n });
      }),
      (lt = p.create(i)),
      (ut = ({
        cursor: e,
        height: t,
        id: n,
        image: r,
        link: i,
        name1: a,
        position: o,
        width: s,
        ...c
      }) => ({
        ...c,
        aXW8JaMJe: e ?? c.aXW8JaMJe,
        b6wtSOYdG: r ??
          c.b6wtSOYdG ?? {
            alt: ``,
            pixelHeight: 444,
            pixelWidth: 500,
            src: `/images/RbbQOrBDhKQ01vkCTCFVdRpeM.png`,
          },
        Gu3gCqCb0: o ?? c.Gu3gCqCb0 ?? `Head of Systems Engineering`,
        wWLhU_IpL: i ?? c.wWLhU_IpL,
        zUad5oICs: a ?? c.zUad5oICs ?? `Sophia Nguyen `,
      })),
      (dt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (H = T(
        d(function (e, t) {
          let n = r(null),
            a = t ?? n,
            c = o(),
            { activeLocale: u, setLocale: d } = O(),
            f = j(),
            {
              style: m,
              className: g,
              layoutId: _,
              variant: y,
              b6wtSOYdG: S,
              zUad5oICs: w,
              Gu3gCqCb0: T,
              wWLhU_IpL: E,
              aXW8JaMJe: D,
              ...ee
            } = ut(e),
            {
              baseVariant: te,
              classNames: A,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: ie,
              isLoading: P,
              setGestureState: ae,
              setVariant: oe,
              variants: I,
            } = k({
              defaultVariant: `doXRwh5JM`,
              ref: a,
              variant: y,
              variantClassNames: at,
            }),
            L = dt(e, I),
            se = x(it, Be, De);
          return l(h, {
            id: _ ?? c,
            children: l(lt, {
              animate: I,
              initial: !1,
              children: l(ct, {
                value: ot,
                children: l(re, {
                  href: E,
                  motionChild: !0,
                  nodeId: `doXRwh5JM`,
                  openInNewTab: !0,
                  scopeId: `UD1ChsFqx`,
                  children: s(p.a, {
                    ...ee,
                    ...N,
                    className: `${x(se, `framer-iuwoim`, g, A)} framer-1o5gf2e`,
                    "data-border": !0,
                    "data-framer-cursor": D,
                    "data-framer-name": `Team card`,
                    layoutDependency: L,
                    layoutId: `doXRwh5JM`,
                    ref: a,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...m,
                    },
                    children: [
                      l(ne, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: b(
                            (f?.y || 0) +
                              20 +
                              (((f?.height || 435) - 40 - 595) / 2 + 0 + 0),
                          ),
                          pixelHeight: 444,
                          pixelWidth: 500,
                          sizes: `calc(${f?.width || `100vw`} - 40px)`,
                          ...st(S),
                        },
                        className: `framer-xab4kb`,
                        layoutDependency: L,
                        layoutId: `EaAYktyU3`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                      }),
                      s(p.div, {
                        className: `framer-10ri3fs`,
                        "data-framer-name": `Name and position`,
                        layoutDependency: L,
                        layoutId: `mglNvOABX`,
                        children: [
                          s(p.div, {
                            className: `framer-mpake8`,
                            "data-framer-name": `Top`,
                            layoutDependency: L,
                            layoutId: `shrGp8Bpc`,
                            children: [
                              l(C, {
                                __fromCanvasComponent: !0,
                                children: l(i, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-owv810`,
                                    "data-styles-preset": `Ag1SUJs5E`,
                                    children: `Sophia Nguyen `,
                                  }),
                                }),
                                className: `framer-1xxc8wg`,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `IpXLA2T70`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: w,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(F, {
                                children: l(v, {
                                  className: `framer-bo4xn7-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: L,
                                  layoutId: `M43o9RDiO-container`,
                                  nodeId: `M43o9RDiO`,
                                  rendersWithMotion: !0,
                                  scopeId: `UD1ChsFqx`,
                                  children: l(R, {
                                    color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    height: `100%`,
                                    iconSearch: `linkedin-logo`,
                                    iconSelection: `House`,
                                    id: `M43o9RDiO`,
                                    layoutId: `M43o9RDiO`,
                                    mirrored: !1,
                                    selectByList: !1,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `light`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          l(C, {
                            __fromCanvasComponent: !0,
                            children: l(i, {
                              children: l(p.p, {
                                className: `framer-styles-preset-16w1u5n`,
                                "data-styles-preset": `csUbUKGQ_`,
                                children: `Head of Systems Engineering`,
                              }),
                            }),
                            className: `framer-qez0n1`,
                            fonts: [`Inter`],
                            layoutDependency: L,
                            layoutId: `vkKZPmGpp`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: T,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
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
          `.framer-qM5xW.framer-1o5gf2e, .framer-qM5xW .framer-1o5gf2e { display: block; }`,
          `.framer-qM5xW.framer-iuwoim { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; text-decoration: none; width: 323px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-qM5xW .framer-xab4kb { flex: none; height: 320px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-qM5xW .framer-10ri3fs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-qM5xW .framer-mpake8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-qM5xW .framer-1xxc8wg { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-qM5xW .framer-bo4xn7-container { flex: none; height: 23px; position: relative; width: 23px; }`,
          `.framer-qM5xW .framer-qez0n1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...Re,
          ...Te,
          `.framer-qM5xW[data-border="true"]::after, .framer-qM5xW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-qM5xW`,
      )),
      (U = H),
      (H.displayName = `team card`),
      (H.defaultProps = { height: 435, width: 323 }),
      M(H, {
        b6wtSOYdG: {
          __defaultAssetReference: `data:framer/asset-reference,RbbQOrBDhKQ01vkCTCFVdRpeM.png?originalFilename=Untitled+design+%2813%29.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,RbbQOrBDhKQ01vkCTCFVdRpeM.png?originalFilename=Untitled+design+%2813%29.png&preferredSize=auto`,
          },
          title: `Image`,
          type: E.ResponsiveImage,
        },
        zUad5oICs: {
          defaultValue: `Sophia Nguyen `,
          displayTextArea: !1,
          title: `Name`,
          type: E.String,
        },
        Gu3gCqCb0: {
          defaultValue: `Head of Systems Engineering`,
          displayTextArea: !1,
          title: `Position`,
          type: E.String,
        },
        wWLhU_IpL: { title: `Link`, type: E.Link },
        aXW8JaMJe: { title: `Cursor`, type: E.CustomCursor },
      }),
      S(
        H,
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
          ...rt,
          ...w(ze),
          ...w(Ee),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  W,
  G,
  xt = e(() => {
    (u(),
      P(),
      g(),
      a(),
      de(),
      Le(),
      we(),
      (pt = _(R)),
      (mt = `framer-SpNzu`),
      (ht = { Bn6quGn0_: `framer-v-1inzl90` }),
      (gt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_t = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(m.Provider, { value: a, children: n });
      }),
      (vt = p.create(i)),
      (yt = ({
        description: e,
        height: t,
        iconName: n,
        id: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        tROcSwVFn: n ?? o.tROcSwVFn ?? `bulb`,
        WRf1ayP2O:
          e ??
          o.WRf1ayP2O ??
          `We embrace modern technology to build fast, scalable, and highly efficient digital products.`,
        yqjkOCtKz: i ?? o.yqjkOCtKz ?? `Driving Innovation Forward`,
      })),
      (bt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (W = T(
        d(function (e, t) {
          let n = r(null),
            a = t ?? n,
            c = o(),
            { activeLocale: u, setLocale: d } = O();
          j();
          let {
              style: f,
              className: m,
              layoutId: g,
              variant: _,
              tROcSwVFn: y,
              yqjkOCtKz: b,
              WRf1ayP2O: S,
              ...w
            } = yt(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: re,
              setVariant: A,
              variants: M,
            } = k({
              defaultVariant: `Bn6quGn0_`,
              ref: a,
              variant: _,
              variantClassNames: ht,
            }),
            N = bt(e, M),
            ie = x(mt, Be, De);
          return l(h, {
            id: g ?? c,
            children: l(vt, {
              animate: M,
              initial: !1,
              children: l(_t, {
                value: gt,
                children: s(p.div, {
                  ...w,
                  ...ee,
                  className: x(ie, `framer-1inzl90`, m, E),
                  "data-border": !0,
                  "data-framer-name": `Values`,
                  layoutDependency: N,
                  layoutId: `Bn6quGn0_`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...f,
                  },
                  children: [
                    s(p.div, {
                      className: `framer-1v6jdl9`,
                      "data-framer-name": `Icon and Title`,
                      layoutDependency: N,
                      layoutId: `ColO75n9c`,
                      children: [
                        l(F, {
                          children: l(v, {
                            className: `framer-11kt4nj-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: N,
                            layoutId: `KeM1BNQrq-container`,
                            nodeId: `KeM1BNQrq`,
                            rendersWithMotion: !0,
                            scopeId: `UQUn7lv7c`,
                            children: l(R, {
                              color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                              height: `100%`,
                              iconSearch: y,
                              iconSelection: `House`,
                              id: `KeM1BNQrq`,
                              layoutId: `KeM1BNQrq`,
                              mirrored: !1,
                              selectByList: !1,
                              style: { height: `100%`, width: `100%` },
                              weight: `fill`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        l(C, {
                          __fromCanvasComponent: !0,
                          children: l(i, {
                            children: l(p.p, {
                              className: `framer-styles-preset-owv810`,
                              "data-styles-preset": `Ag1SUJs5E`,
                              children: `Driving Innovation Forward`,
                            }),
                          }),
                          className: `framer-5rslzz`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `hwtor1pXl`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    l(p.div, {
                      className: `framer-1dmq92n`,
                      "data-framer-name": `Description`,
                      layoutDependency: N,
                      layoutId: `Hr4CwvAGF`,
                      children: l(C, {
                        __fromCanvasComponent: !0,
                        children: l(i, {
                          children: l(p.p, {
                            className: `framer-styles-preset-16w1u5n`,
                            "data-styles-preset": `csUbUKGQ_`,
                            children: `We embrace modern technology to build fast, scalable, and highly efficient digital products.`,
                          }),
                        }),
                        className: `framer-13kb832`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `ndftujPNl`,
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
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SpNzu.framer-140zvqb, .framer-SpNzu .framer-140zvqb { display: block; }`,
          `.framer-SpNzu.framer-1inzl90 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; mix-blend-mode: luminosity; overflow: hidden; padding: 20px 30px 20px 30px; position: relative; width: 465px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-SpNzu .framer-1v6jdl9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SpNzu .framer-11kt4nj-container { flex: none; height: 30px; position: relative; width: 30px; }`,
          `.framer-SpNzu .framer-5rslzz { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-SpNzu .framer-1dmq92n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SpNzu .framer-13kb832 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SpNzu.framer-1inzl90, .framer-SpNzu .framer-1v6jdl9, .framer-SpNzu .framer-1dmq92n { gap: 0px; } .framer-SpNzu.framer-1inzl90 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-SpNzu.framer-1inzl90 > :first-child, .framer-SpNzu .framer-1dmq92n > :first-child { margin-top: 0px; } .framer-SpNzu.framer-1inzl90 > :last-child, .framer-SpNzu .framer-1dmq92n > :last-child { margin-bottom: 0px; } .framer-SpNzu .framer-1v6jdl9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-SpNzu .framer-1v6jdl9 > :first-child { margin-left: 0px; } .framer-SpNzu .framer-1v6jdl9 > :last-child { margin-right: 0px; } .framer-SpNzu .framer-1dmq92n > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
          ...Re,
          ...Te,
          `.framer-SpNzu[data-border="true"]::after, .framer-SpNzu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-SpNzu`,
      )),
      (G = W),
      (W.displayName = `Values Card`),
      (W.defaultProps = { height: 135, width: 465 }),
      M(W, {
        tROcSwVFn: {
          defaultValue: `bulb`,
          placeholder: `Menu, Wifi, Box…`,
          title: `Icon name`,
          type: E.String,
        },
        yqjkOCtKz: {
          defaultValue: `Driving Innovation Forward`,
          displayTextArea: !1,
          title: `Title`,
          type: E.String,
        },
        WRf1ayP2O: {
          defaultValue: `We embrace modern technology to build fast, scalable, and highly efficient digital products.`,
          displayTextArea: !1,
          title: `Description`,
          type: E.String,
        },
      }),
      S(
        W,
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
          ...pt,
          ...w(ze),
          ...w(Ee),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  K,
  q,
  Nt = e(() => {
    (u(),
      P(),
      g(),
      a(),
      de(),
      Le(),
      we(),
      (St = _(R)),
      (Ct = I(p.div)),
      (wt = `framer-gCPX8`),
      (Tt = { lh6lpzyeN: `framer-v-p8pqem` }),
      (Et = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 100,
      }),
      (Dt = { damping: 45, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (Ot = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kt = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(m.Provider, { value: a, children: n });
      }),
      (At = p.create(i)),
      (jt = ({
        description: e,
        height: t,
        iconName: n,
        id: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        D3aNVJ0Aq: n ?? o.D3aNVJ0Aq ?? `chart-bar`,
        gcmdQPSRV:
          e ??
          o.gcmdQPSRV ??
          `Companies have transformed their operations with Syncrotrex’s custom software solutions.`,
        UOKwCj4hF: i ?? o.UOKwCj4hF ?? `150+ Businesses`,
      })),
      (Mt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (K = T(
        d(function (e, t) {
          let n = r(null),
            a = t ?? n,
            c = o(),
            { activeLocale: u, setLocale: d } = O();
          j();
          let {
              style: f,
              className: m,
              layoutId: g,
              variant: _,
              D3aNVJ0Aq: y,
              UOKwCj4hF: b,
              gcmdQPSRV: S,
              ...w
            } = jt(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: re,
              setVariant: A,
              variants: M,
            } = k({
              defaultVariant: `lh6lpzyeN`,
              ref: a,
              variant: _,
              variantClassNames: Tt,
            }),
            N = Mt(e, M),
            ie = x(wt, Be, De);
          return l(h, {
            id: g ?? c,
            children: l(At, {
              animate: M,
              initial: !1,
              children: l(kt, {
                value: Ot,
                children: s(Ct, {
                  ...w,
                  ...ee,
                  __framer__animate: { transition: Dt },
                  __framer__animateOnce: !0,
                  __framer__enter: Et,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: x(ie, `framer-p8pqem`, m, E),
                  "data-border": !0,
                  "data-framer-name": `Stats`,
                  layoutDependency: N,
                  layoutId: `lh6lpzyeN`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    background: `radial-gradient(50% 75% at 98.9% 100%, rgba(129, 74, 200, 0.3) 0%, var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)) /* {"name":"Card background"} */ 100%)`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...f,
                  },
                  children: [
                    s(p.div, {
                      className: `framer-19i0rpr`,
                      "data-framer-name": `Icon and number`,
                      layoutDependency: N,
                      layoutId: `pzWJ7gFPL`,
                      children: [
                        l(p.div, {
                          className: `framer-1u065fp`,
                          "data-framer-name": `Icon holder`,
                          layoutDependency: N,
                          layoutId: `yEc8MAc5k`,
                          style: {
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                          },
                          children: l(F, {
                            children: l(v, {
                              className: `framer-1er3g19-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: N,
                              layoutId: `VpfGq8gcP-container`,
                              nodeId: `VpfGq8gcP`,
                              rendersWithMotion: !0,
                              scopeId: `YIZc6aNdz`,
                              children: l(R, {
                                color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                height: `100%`,
                                iconSearch: y,
                                iconSelection: `House`,
                                id: `VpfGq8gcP`,
                                layoutId: `VpfGq8gcP`,
                                mirrored: !1,
                                selectByList: !1,
                                style: { height: `100%`, width: `100%` },
                                weight: `fill`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        l(C, {
                          __fromCanvasComponent: !0,
                          children: l(i, {
                            children: l(p.p, {
                              className: `framer-styles-preset-owv810`,
                              "data-styles-preset": `Ag1SUJs5E`,
                              children: `150+ Businesses`,
                            }),
                          }),
                          className: `framer-ttuciy`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `tOh8uoKQS`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    l(p.div, {
                      className: `framer-6q0jiy`,
                      "data-framer-name": `Description`,
                      layoutDependency: N,
                      layoutId: `FpFA9RZM6`,
                      children: l(C, {
                        __fromCanvasComponent: !0,
                        children: l(i, {
                          children: l(p.p, {
                            className: `framer-styles-preset-16w1u5n`,
                            "data-styles-preset": `csUbUKGQ_`,
                            children: `Companies have transformed their operations with Syncrotrex’s custom software solutions.`,
                          }),
                        }),
                        className: `framer-ycywhf`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `PZUFR3ndS`,
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
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gCPX8.framer-1r0y06x, .framer-gCPX8 .framer-1r0y06x { display: block; }`,
          `.framer-gCPX8.framer-p8pqem { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 30px 20px 30px; position: relative; width: 303px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-gCPX8 .framer-19i0rpr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-gCPX8 .framer-1u065fp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 5px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-gCPX8 .framer-1er3g19-container { flex: none; height: 25px; position: relative; width: 25px; }`,
          `.framer-gCPX8 .framer-ttuciy { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-gCPX8 .framer-6q0jiy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-gCPX8 .framer-ycywhf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gCPX8.framer-p8pqem, .framer-gCPX8 .framer-19i0rpr, .framer-gCPX8 .framer-1u065fp, .framer-gCPX8 .framer-6q0jiy { gap: 0px; } .framer-gCPX8.framer-p8pqem > *, .framer-gCPX8 .framer-6q0jiy > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-gCPX8.framer-p8pqem > :first-child, .framer-gCPX8 .framer-6q0jiy > :first-child { margin-top: 0px; } .framer-gCPX8.framer-p8pqem > :last-child, .framer-gCPX8 .framer-6q0jiy > :last-child { margin-bottom: 0px; } .framer-gCPX8 .framer-19i0rpr > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-gCPX8 .framer-19i0rpr > :first-child, .framer-gCPX8 .framer-1u065fp > :first-child { margin-left: 0px; } .framer-gCPX8 .framer-19i0rpr > :last-child, .framer-gCPX8 .framer-1u065fp > :last-child { margin-right: 0px; } .framer-gCPX8 .framer-1u065fp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }`,
          ...Re,
          ...Te,
          `.framer-gCPX8[data-border="true"]::after, .framer-gCPX8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-gCPX8`,
      )),
      (q = K),
      (K.displayName = `Stats Card`),
      (K.defaultProps = { height: 152, width: 303 }),
      M(K, {
        D3aNVJ0Aq: {
          defaultValue: `chart-bar`,
          placeholder: `Menu, Wifi, Box…`,
          title: `Icon name`,
          type: E.String,
        },
        UOKwCj4hF: {
          defaultValue: `150+ Businesses`,
          displayTextArea: !1,
          title: `Title`,
          type: E.String,
        },
        gcmdQPSRV: {
          defaultValue: `Companies have transformed their operations with Syncrotrex’s custom software solutions.`,
          displayTextArea: !1,
          title: `Description`,
          type: E.String,
        },
      }),
      S(
        K,
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
          ...St,
          ...w(ze),
          ...w(Ee),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Pt,
  Ft,
  It,
  J,
  Lt,
  Y,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  X,
  Z,
  en,
  tn,
  nn,
  rn,
  an,
  Q,
  on,
  $,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn;
e(() => {
  (u(),
    P(),
    g(),
    a(),
    Ie(),
    be(),
    nt(),
    Ae(),
    Se(),
    Fe(),
    ft(),
    xt(),
    ue(),
    Nt(),
    Le(),
    ce(),
    _e(),
    fe(),
    Ve(),
    Ge(),
    (Pt = _(z)),
    (Ft = ee(A)),
    (It = _(je)),
    (J = I(p.div)),
    (Lt = _(q)),
    (Y = I(A)),
    (Rt = _(G)),
    (zt = _(B)),
    (Bt = _(U)),
    (Vt = _(Ne)),
    (Ht = _(Ce)),
    (Ut = _(he)),
    (Wt = _(tt)),
    (Gt = {
      OZk8B6M_B: `(min-width: 810px) and (max-width: 1199px)`,
      rTb3uF3tf: `(min-width: 1200px)`,
      SMylAAi4m: `(max-width: 809px)`,
    }),
    (Kt = `framer-eCWLy`),
    (qt = {
      OZk8B6M_B: `framer-v-16ne04`,
      rTb3uF3tf: `framer-v-1lqvwvm`,
      SMylAAi4m: `framer-v-yhc3hj`,
    }),
    (Jt = {
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
    (Yt = {
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
    (Xt = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (Zt = {
      damping: 100,
      delay: 0.05,
      mass: 1,
      stiffness: 400,
      type: `spring`,
    }),
    (Qt = {
      effect: Xt,
      repeat: !1,
      startDelay: 0,
      tokenization: `word`,
      transition: Zt,
      trigger: `onMount`,
      type: `appear`,
    }),
    ($t = {
      effect: Xt,
      repeat: !1,
      startDelay: 0.2,
      tokenization: `word`,
      transition: Zt,
      trigger: `onMount`,
      type: `appear`,
    }),
    (X = {
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
    (Z = { damping: 70, delay: 0, mass: 1, stiffness: 320, type: `spring` }),
    (en = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      transition: {
        delay: 0.4,
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        type: `tween`,
      },
      x: 0,
      y: 0,
    }),
    (tn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.9,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 80,
    }),
    (nn = {
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
    (rn = {
      damping: 70,
      delay: 0.15,
      mass: 1,
      stiffness: 320,
      type: `spring`,
    }),
    (an = { damping: 70, delay: 0.3, mass: 1, stiffness: 320, type: `spring` }),
    (Q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 60,
    }),
    (on = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -100,
      y: 0,
    }),
    ($ = { damping: 45, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
    (sn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 100,
      y: 0,
    }),
    (cn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (ln = {
      damping: 45,
      delay: 0.15,
      mass: 1,
      stiffness: 200,
      type: `spring`,
    }),
    (un = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (dn = { damping: 45, delay: 0.3, mass: 1, stiffness: 200, type: `spring` }),
    (fn = ({ value: e }) =>
      N()
        ? null
        : l(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (pn = { Desktop: `rTb3uF3tf`, Phone: `SMylAAi4m`, Tablet: `OZk8B6M_B` }),
    (mn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: pn[r.variant] ?? r.variant ?? `rTb3uF3tf`,
    })),
    (hn = { component: tt, variant: `WiIg6MOKc` }),
    (gn = T(
      d(function (e, t) {
        let a = r(null),
          c = t ?? a,
          u = o(),
          { activeLocale: d, setLocale: m } = O(),
          g = j(),
          { style: _, className: v, layoutId: b, variant: S, ...w } = mn(e);
        (n(() => {
          let e = Ke(void 0, d);
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
            let e = Ke(void 0, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, d]));
        let [T, E] = te(S, Gt, !1),
          ee = x(Kt, ye, ve, se, We, Be),
          ne = ie(`PbaUBmoUz`),
          k = r(null);
        return (
          ae({ "1yqnr6i": hn }),
          l(oe.Provider, {
            value: { primaryVariantId: `rTb3uF3tf`, variantClassNames: qt },
            children: s(h, {
              id: b ?? u,
              children: [
                l(fn, {
                  value: `html body { background: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); }`,
                }),
                s(p.div, {
                  ...w,
                  className: x(ee, `framer-1lqvwvm`, v),
                  ref: c,
                  style: { ..._ },
                  children: [
                    s(`section`, {
                      className: `framer-14cck7y`,
                      "data-framer-name": `Hero section`,
                      children: [
                        l(F, {
                          height: 34,
                          y: (g?.y || 0) + 0 + 0 + 180 + 0,
                          children: l(Ft, {
                            animate: Jt,
                            className: `framer-g1z6yz-container`,
                            "data-framer-appear-id": `g1z6yz`,
                            initial: Yt,
                            nodeId: `HT3e1JEus`,
                            optimized: !0,
                            rendersWithMotion: !0,
                            scopeId: `PnYnZFkf8`,
                            children: l(z, {
                              b5FKc3lDF: `About Us`,
                              B6A6qB6b_: 14,
                              height: `100%`,
                              id: `HT3e1JEus`,
                              layoutId: `HT3e1JEus`,
                              P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                              v834N_OwF: `var(--token-ea3f5ec2-80ec-412c-a26e-34872584c90c, rgb(255, 255, 255))`,
                              width: `100%`,
                              YKQkMRbk7: !1,
                            }),
                          }),
                        }),
                        s(`div`, {
                          className: `framer-1nsprzl`,
                          "data-framer-name": `Heading+subheading`,
                          children: [
                            l(C, {
                              __fromCanvasComponent: !0,
                              children: l(i, {
                                children: l(`h1`, {
                                  className: `framer-styles-preset-q2gmjp`,
                                  "data-styles-preset": `K0tuspaT8`,
                                  children: `Helping Businesses Grow`,
                                }),
                              }),
                              className: `framer-r451t0`,
                              effect: Qt,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(C, {
                              __fromCanvasComponent: !0,
                              children: l(i, {
                                children: l(`p`, {
                                  className: `framer-styles-preset-trq6qq`,
                                  "data-styles-preset": `Qjp1AZZMc`,
                                  children: `Syncrotrex helps businesses streamline operations and grow faster with custom software and SaaS solutions.`,
                                }),
                              }),
                              className: `framer-5k2y35`,
                              effect: $t,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(`section`, {
                      className: `framer-1xzrqhx`,
                      "data-framer-name": `Logos`,
                      children: s(J, {
                        __framer__animate: { transition: Z },
                        __framer__animateOnce: !0,
                        __framer__enter: X,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: `framer-w3erbz`,
                        "data-framer-name": `Content`,
                        children: [
                          l(C, {
                            __fromCanvasComponent: !0,
                            children: l(i, {
                              children: l(`p`, {
                                className: `framer-styles-preset-x6ge9v`,
                                "data-styles-preset": `D1fS_zrfW`,
                                children: `Over 50+ business trust us`,
                              }),
                            }),
                            className: `framer-iae2b1`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          l(F, {
                            children: l(Ft, {
                              animate: en,
                              className: `framer-cvqkxf-container`,
                              "data-framer-appear-id": `cvqkxf`,
                              initial: tn,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `GcYVaNQ5C`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `PnYnZFkf8`,
                              style: { transformPerspective: 1200 },
                              children: l(je, {
                                alignment: `center`,
                                direction: `left`,
                                fadeOptions: {
                                  fadeAlpha: 0,
                                  fadeContent: !0,
                                  fadeInset: 0,
                                  fadeWidth: 50,
                                  overflow: !1,
                                },
                                gap: 74,
                                height: `100%`,
                                hoverFactor: 0.5,
                                id: `GcYVaNQ5C`,
                                layoutId: `GcYVaNQ5C`,
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                sizingOptions: {
                                  heightType: !0,
                                  widthType: !0,
                                },
                                slots: [
                                  l(y, {
                                    className: `framer-1rkoelk`,
                                    "data-framer-name": `sample logo 2`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 24" width="110" height="24"><path d="M 14.671 1.157 L 12.4 0.54 L 10.487 7.781 L 8.759 1.244 L 6.488 1.861 L 8.355 8.924 L 3.705 4.211 L 2.043 5.896 L 7.143 11.066 L 0.792 9.341 L 0.183 11.643 L 7.123 13.528 C 6.685 11.615 7.449 9.625 9.048 8.516 C 10.647 7.407 12.753 7.405 14.353 8.512 C 15.953 9.619 16.72 11.608 16.285 13.521 L 22.592 15.234 L 23.2 12.932 L 16.233 11.039 L 22.584 9.314 L 21.976 7.012 L 15.01 8.904 L 19.659 4.191 L 17.996 2.505 L 12.967 7.604 L 14.671 1.157 Z" fill="rgb(255, 255, 255)"></path><path d="M 16.279 13.548 C 16.087 14.368 15.683 15.122 15.109 15.733 L 19.678 20.365 L 21.341 18.679 Z M 15.063 15.781 C 14.484 16.381 13.759 16.816 12.962 17.041 L 14.624 23.331 L 16.895 22.714 Z M 12.877 17.063 C 12.494 17.163 12.099 17.214 11.703 17.213 C 11.279 17.214 10.857 17.156 10.449 17.042 L 8.785 23.339 L 11.056 23.956 L 12.877 17.064 Z M 10.369 17.019 C 9.582 16.783 8.871 16.342 8.304 15.74 L 3.725 20.384 L 5.387 22.07 L 10.369 17.018 Z M 8.266 15.7 C 7.707 15.093 7.314 14.35 7.126 13.542 L 0.799 15.26 L 1.407 17.563 Z" fill="rgb(255, 255, 255)"></path><text x="28" y="17" fill="rgb(255, 255, 255)" font-family="sans-serif" font-weight="bold" font-size="14" letter-spacing="-0.03em">ngsystem</text></svg>`,
                                    svgContentId: 9921200432,
                                    withExternalLayout: !0,
                                  }),
                                  l(y, {
                                    className: `framer-1q1dsfq`,
                                    "data-framer-name": `sample logo 3`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" width="100" height="24"><path d="M 11.977 0 C 5.362 0 0 5.372 0 12 C 6.615 12 11.977 6.628 11.977 0 Z M 11.977 24 C 18.591 24 23.953 18.628 23.953 12 C 17.339 12 11.977 17.372 11.977 24 Z" fill="rgb(120, 120, 120)"></path><path d="M 11.977 0 C 18.591 0 23.953 5.372 23.953 12 C 17.339 12 11.977 6.628 11.977 0 Z M 11.977 24 C 5.362 24 0 18.628 0 12 C 6.615 12 11.977 17.372 11.977 24 Z" fill="rgb(255, 255, 255)"></path><text x="29" y="17" fill="rgb(255, 255, 255)" font-family="sans-serif" font-weight="bold" font-size="14" letter-spacing="-0.03em">larpix</text></svg>`,
                                    svgContentId: 10871823214,
                                    withExternalLayout: !0,
                                  }),
                                  l(y, {
                                    className: `framer-1idzalg`,
                                    "data-framer-name": `sample logo 4`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24" width="120" height="24"><path d="M 0 12 C 0 5.372 5.404 0 12.07 0 L 27.912 0 C 34.579 0 39.982 5.372 39.982 12 L 39.982 24 L 12.07 24 C 5.404 24 0 18.628 0 12 Z" fill="rgb(255, 255, 255)"></path><path d="M 12.07 19.5 C 7.904 19.5 4.526 19.5 4.526 19.5 L 4.526 4.5 C 4.526 4.5 7.904 4.5 12.07 4.5 L 27.912 4.5 C 32.079 4.5 35.456 4.5 35.456 4.5 L 35.456 19.5 C 35.456 19.5 32.079 19.5 27.912 19.5 Z" fill="rgb(186, 186, 186)"></path><path d="M 8.298 12 C 8.298 9.929 9.987 8.25 12.07 8.25 C 14.153 8.25 15.842 9.929 15.842 12 C 15.842 14.071 14.153 15.75 12.07 15.75 C 9.987 15.75 8.298 14.071 8.298 12 Z" fill="rgb(0,0,0)"></path><path d="M 9.807 10.5 C 9.807 10.086 10.145 9.75 10.561 9.75 C 10.978 9.75 11.316 10.086 11.316 10.5 C 11.316 10.914 10.978 11.25 10.561 11.25 C 10.145 11.25 9.807 10.914 9.807 10.5 Z" fill="rgb(255,255,255)"></path><path d="M 24.895 12 C 24.895 9.929 26.583 8.25 28.667 8.25 C 30.75 8.25 32.439 9.929 32.439 12 C 32.439 14.071 30.75 15.75 28.667 15.75 C 26.583 15.75 24.895 14.071 24.895 12 Z" fill="rgb(0,0,0)"></path><path d="M 26.404 10.5 C 26.404 10.086 26.741 9.75 27.158 9.75 C 27.575 9.75 27.912 10.086 27.912 10.5 C 27.912 10.914 27.575 11.25 27.158 11.25 C 26.741 11.25 26.404 10.914 26.404 10.5 Z" fill="rgb(255,255,255)"></path><text x="48" y="17" fill="rgb(255, 255, 255)" font-family="sans-serif" font-weight="bold" font-size="14" letter-spacing="-0.03em">mrhcrm</text></svg>`,
                                    svgContentId: 10099368679,
                                    withExternalLayout: !0,
                                  }),
                                  l(y, {
                                    className: `framer-1o2mxi8`,
                                    "data-framer-name": `sample logo 1`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24" width="120" height="24"><path d="M 11.727 24 C 18.204 24 23.455 18.628 23.455 12 L 23.455 3.6 C 23.455 1.612 21.879 0 19.936 0 L 12.314 0 L 12.314 5.264 C 12.314 6.466 12.385 7.71 13.001 8.732 C 13.893 10.215 15.37 11.228 17.049 11.509 L 17.274 11.546 C 17.464 11.612 17.591 11.795 17.591 12 C 17.591 12.205 17.464 12.388 17.274 12.454 L 17.049 12.491 C 14.563 12.907 12.614 14.901 12.208 17.446 L 12.171 17.675 C 12.106 17.87 11.928 18 11.727 18 C 11.527 18 11.348 17.87 11.283 17.675 L 11.247 17.446 C 10.973 15.727 9.983 14.216 8.534 13.303 C 7.535 12.673 6.319 12.6 5.145 12.6 L 0.014 12.6 C 0.321 18.949 5.447 24 11.727 24 Z" fill="rgb(255, 255, 255)"></path><path d="M 0 11.4 L 5.145 11.4 C 6.319 11.4 7.535 11.327 8.534 10.697 C 9.315 10.204 9.972 9.532 10.454 8.732 C 11.069 7.71 11.141 6.466 11.141 5.264 L 11.141 0 L 3.518 0 C 1.575 0 0 1.612 0 3.6 Z" fill="rgb(255, 255, 255)"></path><path d="M 27.24 1.2 C 27.24 1.863 26.714 2.4 26.067 2.4 C 25.419 2.4 24.894 1.863 24.894 1.2 C 24.894 0.537 25.419 0 26.067 0 C 26.714 0 27.24 0.537 27.24 1.2 Z" fill="rgb(255, 255, 255)"></path><text x="34" y="17" fill="rgb(255, 255, 255)" font-family="sans-serif" font-weight="bold" font-size="14" letter-spacing="-0.03em">magnimont</text></svg>`,
                                    svgContentId: 12606227492,
                                    withExternalLayout: !0,
                                  }),
                                ],
                                speed: 25,
                                style: {
                                  height: `100%`,
                                  maxWidth: `100%`,
                                  width: `100%`,
                                },
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    s(`section`, {
                      className: `framer-10r3u1d`,
                      "data-framer-name": `Who we are`,
                      children: [
                        s(J, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1rsxwqi`,
                          "data-framer-name": `Header`,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                SMylAAi4m: {
                                  y: (g?.y || 0) + 0 + 722.8 + 64 + 0 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 34,
                                y: (g?.y || 0) + 0 + 752.8 + 100 + 0 + 0 + 0,
                                children: l(A, {
                                  className: `framer-1eyqu72-container`,
                                  nodeId: `Vg6A0dsFG`,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(z, {
                                    b5FKc3lDF: `Who We Are`,
                                    B6A6qB6b_: 14,
                                    height: `100%`,
                                    id: `Vg6A0dsFG`,
                                    layoutId: `Vg6A0dsFG`,
                                    P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                    v834N_OwF: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    width: `100%`,
                                    YKQkMRbk7: !1,
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-1q7fbu2`,
                              "data-framer-name": `Text`,
                              children: [
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-15k0oiw`,
                                      "data-styles-preset": `waKAohxm2`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                      },
                                      children: `Who We Are `,
                                    }),
                                  }),
                                  className: `framer-1abo10j`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      children: `Syncrotrex is a team of developers and innovators dedicated to building high-quality digital products. We help businesses design SaaS platforms, custom software, and modern web applications built to simplify work and drive growth.`,
                                    }),
                                  }),
                                  className: `framer-hc7dwe`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`div`, {
                          className: `framer-1tun34u`,
                          "data-framer-name": `Stats grid`,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 10px) / 2, 50px)`,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 950px), 50px)`,
                                  y: (g?.y || 0) + 0 + 722.8 + 64 + 324 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 152,
                                width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 40px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 752.8 + 100 + 324 + 0 + 0,
                                children: l(Y, {
                                  __framer__animate: { transition: Z },
                                  __framer__animateOnce: !0,
                                  __framer__enter: nn,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-t2szz1-container`,
                                  nodeId: `znyC7kczk`,
                                  rendersWithMotion: !0,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(q, {
                                    D3aNVJ0Aq: `chart-bar`,
                                    gcmdQPSRV: `Companies have transformed their operations with Syncrotrex’s custom software solutions.`,
                                    height: `100%`,
                                    id: `znyC7kczk`,
                                    layoutId: `znyC7kczk`,
                                    style: { width: `100%` },
                                    UOKwCj4hF: `150+ Businesses`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 10px) / 2, 50px)`,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    722.8 +
                                    64 +
                                    324 +
                                    0 +
                                    172,
                                },
                              },
                              children: l(F, {
                                height: 152,
                                width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 40px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 752.8 + 100 + 324 + 0 + 0,
                                children: l(D, {
                                  breakpoint: T,
                                  overrides: {
                                    SMylAAi4m: {
                                      __framer__animate: { transition: Z },
                                    },
                                  },
                                  children: l(Y, {
                                    __framer__animate: { transition: rn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: nn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1z06fm4-container`,
                                    nodeId: `KwCj42D8K`,
                                    rendersWithMotion: !0,
                                    scopeId: `PnYnZFkf8`,
                                    children: l(q, {
                                      D3aNVJ0Aq: `clock`,
                                      gcmdQPSRV: `Replacing inefficient manual work with fast, clean, and reliable systems.`,
                                      height: `100%`,
                                      id: `KwCj42D8K`,
                                      layoutId: `KwCj42D8K`,
                                      style: { width: `100%` },
                                      UOKwCj4hF: `1M+ Hours`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 10px) / 2, 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    752.8 +
                                    100 +
                                    324 +
                                    0 +
                                    162,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    722.8 +
                                    64 +
                                    324 +
                                    0 +
                                    344,
                                },
                              },
                              children: l(F, {
                                height: 152,
                                width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 40px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 752.8 + 100 + 324 + 0 + 0,
                                children: l(D, {
                                  breakpoint: T,
                                  overrides: {
                                    OZk8B6M_B: {
                                      __framer__animate: { transition: Z },
                                    },
                                    SMylAAi4m: {
                                      __framer__animate: { transition: Z },
                                      __framer__enter: Q,
                                    },
                                  },
                                  children: l(Y, {
                                    __framer__animate: { transition: an },
                                    __framer__animateOnce: !0,
                                    __framer__enter: nn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-17vlrfn-container`,
                                    nodeId: `hHAddP6sv`,
                                    rendersWithMotion: !0,
                                    scopeId: `PnYnZFkf8`,
                                    children: l(q, {
                                      D3aNVJ0Aq: `lightning`,
                                      gcmdQPSRV: `Clients see improved efficiency within the first three months of usage.`,
                                      height: `100%`,
                                      id: `hHAddP6sv`,
                                      layoutId: `hHAddP6sv`,
                                      style: { width: `100%` },
                                      UOKwCj4hF: `95% Faster`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s(`section`, {
                      className: `framer-2dpk18`,
                      "data-framer-name": `Our Values`,
                      children: [
                        s(J, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-13vrqsv`,
                          "data-framer-name": `Header`,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  y: (g?.y || 0) + 0 + 1590.8 + 100 + 0 + 0 + 0,
                                },
                                SMylAAi4m: {
                                  y: (g?.y || 0) + 0 + 1670.8 + 64 + 0 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 34,
                                y: (g?.y || 0) + 0 + 1428.8 + 100 + 0 + 0 + 0,
                                children: l(A, {
                                  className: `framer-1y9f9ce-container`,
                                  nodeId: `oNkzUfPn8`,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(z, {
                                    b5FKc3lDF: `Our Values`,
                                    B6A6qB6b_: 14,
                                    height: `100%`,
                                    id: `oNkzUfPn8`,
                                    layoutId: `oNkzUfPn8`,
                                    P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                    v834N_OwF: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    width: `100%`,
                                    YKQkMRbk7: !1,
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-1tccfcu`,
                              "data-framer-name": `Text`,
                              children: [
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-15k0oiw`,
                                      "data-styles-preset": `waKAohxm2`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                      },
                                      children: `The Values Behind Syncrotrex`,
                                    }),
                                  }),
                                  className: `framer-9laloc`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      children: `Our values shape everything we do at Syncrotrex. From innovation to integrity, we’re committed to building custom software that empowers businesses and drives real impact.`,
                                    }),
                                  }),
                                  className: `framer-kwu7fq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`div`, {
                          className: `framer-18p6mzo`,
                          "data-framer-name": `Values grid`,
                          id: ne,
                          ref: k,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `max(min(${g?.width || `100vw`} - 80px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    1590.8 +
                                    100 +
                                    324 +
                                    0 +
                                    0,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) + 0 + 1670.8 + 64 + 324 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 135,
                                width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 20px) / 2, 50px)`,
                                y: (g?.y || 0) + 0 + 1428.8 + 100 + 324 + 0 + 0,
                                children: l(Y, {
                                  __framer__animate: { transition: Z },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Q,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1ox4bi2-container`,
                                  nodeId: `G7FGSunPG`,
                                  rendersWithMotion: !0,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(G, {
                                    height: `100%`,
                                    id: `G7FGSunPG`,
                                    layoutId: `G7FGSunPG`,
                                    style: { width: `100%` },
                                    tROcSwVFn: `bulb`,
                                    width: `100%`,
                                    WRf1ayP2O: `We embrace modern technology to build fast, scalable, and highly efficient digital products.`,
                                    yqjkOCtKz: `Driving Innovation Forward`,
                                  }),
                                }),
                              }),
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `max(min(${g?.width || `100vw`} - 80px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    1590.8 +
                                    100 +
                                    324 +
                                    0 +
                                    155,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    1670.8 +
                                    64 +
                                    324 +
                                    0 +
                                    155,
                                },
                              },
                              children: l(F, {
                                height: 135,
                                width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 20px) / 2, 50px)`,
                                y: (g?.y || 0) + 0 + 1428.8 + 100 + 324 + 0 + 0,
                                children: l(D, {
                                  breakpoint: T,
                                  overrides: {
                                    OZk8B6M_B: {
                                      __framer__animate: { transition: Z },
                                    },
                                    SMylAAi4m: {
                                      __framer__animate: { transition: Z },
                                    },
                                  },
                                  children: l(Y, {
                                    __framer__animate: { transition: rn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-yly7z3-container`,
                                    nodeId: `fQhRVRzz2`,
                                    rendersWithMotion: !0,
                                    scopeId: `PnYnZFkf8`,
                                    children: l(G, {
                                      height: `100%`,
                                      id: `fQhRVRzz2`,
                                      layoutId: `fQhRVRzz2`,
                                      style: { width: `100%` },
                                      tROcSwVFn: `handshake`,
                                      width: `100%`,
                                      WRf1ayP2O: `Trust and transparency are at the core of everything we do for our clients.`,
                                      yqjkOCtKz: `Committed to Integrity & Trust`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `max(min(${g?.width || `100vw`} - 80px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    1590.8 +
                                    100 +
                                    324 +
                                    0 +
                                    310,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    1670.8 +
                                    64 +
                                    324 +
                                    0 +
                                    310,
                                },
                              },
                              children: l(F, {
                                height: 135,
                                width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 20px) / 2, 50px)`,
                                y:
                                  (g?.y || 0) +
                                  0 +
                                  1428.8 +
                                  100 +
                                  324 +
                                  0 +
                                  155,
                                children: l(Y, {
                                  __framer__animate: { transition: Z },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Q,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1kaa8vy-container`,
                                  nodeId: `JSjHubrEQ`,
                                  rendersWithMotion: !0,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(G, {
                                    height: `100%`,
                                    id: `JSjHubrEQ`,
                                    layoutId: `JSjHubrEQ`,
                                    style: { width: `100%` },
                                    tROcSwVFn: `rocket-launch`,
                                    width: `100%`,
                                    WRf1ayP2O: `We create software that helps businesses improve efficiency and scale with confidence.`,
                                    yqjkOCtKz: ` Empowering Business Growth`,
                                  }),
                                }),
                              }),
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `max(min(${g?.width || `100vw`} - 80px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    1590.8 +
                                    100 +
                                    324 +
                                    0 +
                                    465,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 950px), 50px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    1670.8 +
                                    64 +
                                    324 +
                                    0 +
                                    465,
                                },
                              },
                              children: l(F, {
                                height: 135,
                                width: `max((min(${g?.width || `100vw`} - 80px, 950px) - 20px) / 2, 50px)`,
                                y:
                                  (g?.y || 0) +
                                  0 +
                                  1428.8 +
                                  100 +
                                  324 +
                                  0 +
                                  155,
                                children: l(D, {
                                  breakpoint: T,
                                  overrides: {
                                    OZk8B6M_B: {
                                      __framer__animate: { transition: Z },
                                      __framer__enter: X,
                                    },
                                    SMylAAi4m: {
                                      __framer__animate: { transition: Z },
                                    },
                                  },
                                  children: l(Y, {
                                    __framer__animate: { transition: rn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-zw3ezz-container`,
                                    nodeId: `bbcgnEPOf`,
                                    rendersWithMotion: !0,
                                    scopeId: `PnYnZFkf8`,
                                    children: l(G, {
                                      height: `100%`,
                                      id: `bbcgnEPOf`,
                                      layoutId: `bbcgnEPOf`,
                                      style: { width: `100%` },
                                      tROcSwVFn: `Users`,
                                      width: `100%`,
                                      WRf1ayP2O: `Your success is our priority—we build solutions that truly make an impact.`,
                                      yqjkOCtKz: ` Putting Customers First`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s(`section`, {
                      className: `framer-g218vu`,
                      "data-framer-name": `Why us`,
                      children: [
                        s(J, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-bklfd0`,
                          "data-framer-name": `Header`,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  y: (g?.y || 0) + 0 + 2714.8 + 100 + 0 + 0 + 0,
                                },
                                SMylAAi4m: {
                                  y: (g?.y || 0) + 0 + 2722.8 + 64 + 0 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 34,
                                y: (g?.y || 0) + 0 + 2242.8 + 100 + 0 + 0 + 0,
                                children: l(A, {
                                  className: `framer-akc160-container`,
                                  nodeId: `OGg0gEo9y`,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(z, {
                                    b5FKc3lDF: `Why us`,
                                    B6A6qB6b_: 14,
                                    height: `100%`,
                                    id: `OGg0gEo9y`,
                                    layoutId: `OGg0gEo9y`,
                                    P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                    v834N_OwF: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    width: `100%`,
                                    YKQkMRbk7: !1,
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-1wss69i`,
                              "data-framer-name": `Text`,
                              children: [
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-15k0oiw`,
                                      "data-styles-preset": `waKAohxm2`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                      },
                                      children: `What makes us stand out in the industry`,
                                    }),
                                  }),
                                  className: `framer-1hhrf1r`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      children: `Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the competition`,
                                    }),
                                  }),
                                  className: `framer-8qir4k`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`div`, {
                          className: `framer-1ap884l`,
                          "data-framer-name": `Comparison grid`,
                          children: [
                            s(J, {
                              __framer__animate: { transition: $ },
                              __framer__animateOnce: !0,
                              __framer__enter: on,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-12m3c0g`,
                              "data-border": !0,
                              "data-framer-name": `Manual work`,
                              children: [
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-owv810`,
                                      "data-styles-preset": `Ag1SUJs5E`,
                                      style: {
                                        "--framer-text-color": `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                      },
                                      children: `Manual Work`,
                                    }),
                                  }),
                                  className: `framer-ex8cb6`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(`div`, {
                                  className: `framer-1a1vs5k`,
                                  "data-framer-name": `Bullet points`,
                                  children: [
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            0,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          0,
                                        children: l(A, {
                                          className: `framer-12hf51v-container`,
                                          nodeId: `O6Zu7LxRy`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Prone to Human Errors`,
                                            bROCjlOP4: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            height: `100%`,
                                            id: `O6Zu7LxRy`,
                                            It9jctiBf: `x`,
                                            juPs7tgMz: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            layoutId: `O6Zu7LxRy`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            32,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            32,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          32,
                                        children: l(A, {
                                          className: `framer-17pf6nm-container`,
                                          nodeId: `mjFeIYpQa`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Limited by Work Hours`,
                                            bROCjlOP4: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            height: `100%`,
                                            id: `mjFeIYpQa`,
                                            It9jctiBf: `x`,
                                            juPs7tgMz: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            layoutId: `mjFeIYpQa`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            64,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            64,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          64,
                                        children: l(A, {
                                          className: `framer-vq2uam-container`,
                                          nodeId: `OjxWxIaZn`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `High Labor Costs & Overhead`,
                                            bROCjlOP4: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            height: `100%`,
                                            id: `OjxWxIaZn`,
                                            It9jctiBf: `x`,
                                            juPs7tgMz: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            layoutId: `OjxWxIaZn`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            96,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            96,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          96,
                                        children: l(A, {
                                          className: `framer-1j5xmpb-container`,
                                          nodeId: `hrl8TiT0b`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Slow & Time-Consuming Tasks`,
                                            bROCjlOP4: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            height: `100%`,
                                            id: `hrl8TiT0b`,
                                            It9jctiBf: `x`,
                                            juPs7tgMz: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            layoutId: `hrl8TiT0b`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            128,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            128,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          128,
                                        children: l(A, {
                                          className: `framer-1pylho8-container`,
                                          nodeId: `tnanWZSm_`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Disconnected & Repetitive Work`,
                                            bROCjlOP4: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            height: `100%`,
                                            id: `tnanWZSm_`,
                                            It9jctiBf: `x`,
                                            juPs7tgMz: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            layoutId: `tnanWZSm_`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            160,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            0 +
                                            20 +
                                            62.6 +
                                            0 +
                                            160,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          160,
                                        children: l(A, {
                                          className: `framer-1uq1poy-container`,
                                          nodeId: `TU8YYKA8H`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Inconsistent & Dependent on Workforce`,
                                            bROCjlOP4: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            height: `100%`,
                                            id: `TU8YYKA8H`,
                                            It9jctiBf: `x`,
                                            juPs7tgMz: `var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))`,
                                            layoutId: `TU8YYKA8H`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s(J, {
                              __framer__animate: { transition: $ },
                              __framer__animateOnce: !0,
                              __framer__enter: sn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1vgkxpl`,
                              "data-border": !0,
                              "data-framer-name": `AI automation`,
                              children: [
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-owv810`,
                                      "data-styles-preset": `Ag1SUJs5E`,
                                      children: `Syncrotrex Software Solutions`,
                                    }),
                                  }),
                                  className: `framer-5xbb6w`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(`div`, {
                                  className: `framer-1xzjwgv`,
                                  "data-framer-name": `Bullet points`,
                                  children: [
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            0,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          0,
                                        children: l(A, {
                                          className: `framer-2zbe30-container`,
                                          nodeId: `cZqQ1z14Y`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Optimized Business Systems `,
                                            bROCjlOP4: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `cZqQ1z14Y`,
                                            It9jctiBf: `check`,
                                            juPs7tgMz: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            layoutId: `cZqQ1z14Y`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            32,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            32,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          32,
                                        children: l(A, {
                                          className: `framer-1rywhzn-container`,
                                          nodeId: `WkcJXBK82`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Fast & Reliable Workflows`,
                                            bROCjlOP4: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `WkcJXBK82`,
                                            It9jctiBf: `check`,
                                            juPs7tgMz: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            layoutId: `WkcJXBK82`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            64,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            64,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          64,
                                        children: l(A, {
                                          className: `framer-g3l5hr-container`,
                                          nodeId: `ycwXi7zwH`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Scalable & Cost-Effective`,
                                            bROCjlOP4: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `ycwXi7zwH`,
                                            It9jctiBf: `check`,
                                            juPs7tgMz: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            layoutId: `ycwXi7zwH`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            96,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            96,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          96,
                                        children: l(A, {
                                          className: `framer-tipbc9-container`,
                                          nodeId: `KdcU__auu`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Instant Data Processing`,
                                            bROCjlOP4: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `KdcU__auu`,
                                            It9jctiBf: `check`,
                                            juPs7tgMz: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            layoutId: `KdcU__auu`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            128,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            128,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          128,
                                        children: l(A, {
                                          className: `framer-jmni3k-container`,
                                          nodeId: `iTQcHpyz7`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Seamless System Integration`,
                                            bROCjlOP4: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `iTQcHpyz7`,
                                            It9jctiBf: `check`,
                                            juPs7tgMz: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            layoutId: `iTQcHpyz7`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 80px, 800px), 50px) - 60px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2714.8 +
                                            100 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            160,
                                        },
                                        SMylAAi4m: {
                                          width: `calc(max(min(${g?.width || `100vw`} - 48px, 800px), 50px) - 40px)`,
                                          y:
                                            (g?.y || 0) +
                                            0 +
                                            2722.8 +
                                            64 +
                                            324 +
                                            0 +
                                            304.6 +
                                            20 +
                                            62.6 +
                                            0 +
                                            160,
                                        },
                                      },
                                      children: l(F, {
                                        height: 22,
                                        width: `calc(max((min(${g?.width || `100vw`} - 80px, 800px) - 20px) / 2, 50px) - 60px)`,
                                        y:
                                          (g?.y || 0) +
                                          0 +
                                          2242.8 +
                                          100 +
                                          324 +
                                          0 +
                                          0 +
                                          20 +
                                          62.6 +
                                          0 +
                                          160,
                                        children: l(A, {
                                          className: `framer-2rul47-container`,
                                          nodeId: `QjI9zkBHq`,
                                          scopeId: `PnYnZFkf8`,
                                          children: l(B, {
                                            aBab7jJnS: `Consistent & Reliable Output `,
                                            bROCjlOP4: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            height: `100%`,
                                            id: `QjI9zkBHq`,
                                            It9jctiBf: `check`,
                                            juPs7tgMz: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                            layoutId: `QjI9zkBHq`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s(`section`, {
                      className: `framer-vqc6b6`,
                      "data-framer-name": `Our Team`,
                      children: [
                        s(J, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-st8x8h`,
                          "data-framer-name": `Header`,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  y: (g?.y || 0) + 0 + 3828 + 100 + 0 + 0 + 0,
                                },
                                SMylAAi4m: {
                                  y: (g?.y || 0) + 0 + 3764 + 64 + 0 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 34,
                                y: (g?.y || 0) + 0 + 3051.4 + 100 + 0 + 0 + 0,
                                children: l(A, {
                                  className: `framer-s8kp0m-container`,
                                  nodeId: `M5OTYvvVd`,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(z, {
                                    b5FKc3lDF: `Out Team`,
                                    B6A6qB6b_: 14,
                                    height: `100%`,
                                    id: `M5OTYvvVd`,
                                    layoutId: `M5OTYvvVd`,
                                    P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                    v834N_OwF: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    width: `100%`,
                                    YKQkMRbk7: !1,
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-1crsj6y`,
                              "data-framer-name": `Text`,
                              children: [
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-15k0oiw`,
                                      "data-styles-preset": `waKAohxm2`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                      },
                                      children: `Meet the Minds Behind Syncrotrex`,
                                    }),
                                  }),
                                  className: `framer-1ugz8a9`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      children: `We bring together technology and strategy to build custom software that solves real business problems.`,
                                    }),
                                  }),
                                  className: `framer-1rctcis`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`div`, {
                          className: `framer-199n8cx`,
                          "data-framer-name": `Team members grid`,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `min(max(min(${g?.width || `100vw`} - 80px, 1000px), 50px), 323px)`,
                                  y: (g?.y || 0) + 0 + 3828 + 100 + 324 + 0 + 0,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 1000px), 50px)`,
                                  y: (g?.y || 0) + 0 + 3764 + 64 + 324 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 435,
                                width: `max((min(${g?.width || `100vw`} - 80px, 1000px) - 30px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 3051.4 + 100 + 324 + 0 + 0,
                                children: l(Y, {
                                  __framer__animate: { transition: $ },
                                  __framer__animateOnce: !0,
                                  __framer__enter: cn,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-10pj1lt-container`,
                                  nodeId: `lMSgu9mTW`,
                                  rendersWithMotion: !0,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(D, {
                                    breakpoint: T,
                                    overrides: {
                                      OZk8B6M_B: {
                                        style: {
                                          maxWidth: `100%`,
                                          width: `100%`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      aXW8JaMJe: `1yqnr6i`,
                                      Gu3gCqCb0: `Co-Founder & Product Strategist`,
                                      height: `100%`,
                                      id: `lMSgu9mTW`,
                                      layoutId: `lMSgu9mTW`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                      wWLhU_IpL: `linkedin.com`,
                                      zUad5oICs: `Alex Carter`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `min(max(min(${g?.width || `100vw`} - 80px, 1000px), 50px), 323px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    3828 +
                                    100 +
                                    324 +
                                    0 +
                                    450,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 1000px), 50px)`,
                                  y:
                                    (g?.y || 0) + 0 + 3764 + 64 + 324 + 0 + 450,
                                },
                              },
                              children: l(F, {
                                height: 435,
                                width: `max((min(${g?.width || `100vw`} - 80px, 1000px) - 30px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 3051.4 + 100 + 324 + 0 + 0,
                                children: l(D, {
                                  breakpoint: T,
                                  overrides: {
                                    OZk8B6M_B: {
                                      __framer__animate: { transition: $ },
                                    },
                                    SMylAAi4m: {
                                      __framer__animate: { transition: $ },
                                    },
                                  },
                                  children: l(Y, {
                                    __framer__animate: { transition: ln },
                                    __framer__animateOnce: !0,
                                    __framer__enter: cn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-apv1cq-container`,
                                    nodeId: `VBGzLsiWJ`,
                                    rendersWithMotion: !0,
                                    scopeId: `PnYnZFkf8`,
                                    children: l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          style: {
                                            maxWidth: `100%`,
                                            width: `100%`,
                                          },
                                        },
                                      },
                                      children: l(U, {
                                        aXW8JaMJe: `1yqnr6i`,
                                        b6wtSOYdG: un(
                                          {
                                            src: `/images/DrI82c0fjdocE3c8uvx3UMQ60.jpg`,
                                            srcSet: `/images/DrI82c0fjdocE3c8uvx3UMQ60.jpg 512w,/images/DrI82c0fjdocE3c8uvx3UMQ60.jpg 549w`,
                                          },
                                          ``,
                                        ),
                                        Gu3gCqCb0: `Head of Systems Engineering`,
                                        height: `100%`,
                                        id: `VBGzLsiWJ`,
                                        layoutId: `VBGzLsiWJ`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        wWLhU_IpL: `linkedin.com`,
                                        zUad5oICs: `Sophia Nguyen `,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  width: `min(max(min(${g?.width || `100vw`} - 80px, 1000px), 50px), 323px)`,
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    3828 +
                                    100 +
                                    324 +
                                    0 +
                                    900,
                                },
                                SMylAAi4m: {
                                  width: `max(min(${g?.width || `100vw`} - 48px, 1000px), 50px)`,
                                  y:
                                    (g?.y || 0) + 0 + 3764 + 64 + 324 + 0 + 900,
                                },
                              },
                              children: l(F, {
                                height: 435,
                                width: `max((min(${g?.width || `100vw`} - 80px, 1000px) - 30px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 3051.4 + 100 + 324 + 0 + 0,
                                children: l(D, {
                                  breakpoint: T,
                                  overrides: {
                                    OZk8B6M_B: {
                                      __framer__animate: { transition: $ },
                                    },
                                    SMylAAi4m: {
                                      __framer__animate: { transition: $ },
                                    },
                                  },
                                  children: l(Y, {
                                    __framer__animate: { transition: dn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: cn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1kap9m-container`,
                                    nodeId: `uizBQdwYj`,
                                    rendersWithMotion: !0,
                                    scopeId: `PnYnZFkf8`,
                                    children: l(D, {
                                      breakpoint: T,
                                      overrides: {
                                        OZk8B6M_B: {
                                          style: {
                                            maxWidth: `100%`,
                                            width: `100%`,
                                          },
                                        },
                                      },
                                      children: l(U, {
                                        aXW8JaMJe: `1yqnr6i`,
                                        b6wtSOYdG: un(
                                          {
                                            src: `/images/mZvxBrM560XFp25BJFeuugotaNk.png`,
                                          },
                                          ``,
                                        ),
                                        Gu3gCqCb0: `Lead Software Architect`,
                                        height: `100%`,
                                        id: `uizBQdwYj`,
                                        layoutId: `uizBQdwYj`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        wWLhU_IpL: `linkedin.com`,
                                        zUad5oICs: `Ryan Mitchell`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s(`section`, {
                      className: `framer-hjpa51`,
                      "data-framer-name": `FAQs and CTA`,
                      children: [
                        s(J, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-fiufwi`,
                          "data-framer-name": `Headers`,
                          children: [
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  y: (g?.y || 0) + 0 + 5687 + 100 + 0 + 0 + 0,
                                },
                                SMylAAi4m: {
                                  y: (g?.y || 0) + 0 + 5551 + 64 + 0 + 0 + 0,
                                },
                              },
                              children: l(F, {
                                height: 34,
                                y: (g?.y || 0) + 0 + 4010.4 + 100 + 0 + 0 + 0,
                                children: l(A, {
                                  className: `framer-10gehlc-container`,
                                  nodeId: `s1b_v__xA`,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(z, {
                                    b5FKc3lDF: `FAQs`,
                                    B6A6qB6b_: 14,
                                    height: `100%`,
                                    id: `s1b_v__xA`,
                                    layoutId: `s1b_v__xA`,
                                    P7WHWvput: `var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8))`,
                                    v834N_OwF: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    width: `100%`,
                                    YKQkMRbk7: !1,
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-b1x9wf`,
                              "data-framer-name": `Text`,
                              children: [
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-15k0oiw`,
                                      "data-styles-preset": `waKAohxm2`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                      },
                                      children: `We’ve Got the Answers You’re Looking For`,
                                    }),
                                  }),
                                  className: `framer-1xv69u2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(C, {
                                  __fromCanvasComponent: !0,
                                  children: l(i, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-trq6qq`,
                                      "data-styles-preset": `Qjp1AZZMc`,
                                      children: `Get clear answers about our services, development process, and what we can build for your business.`,
                                    }),
                                  }),
                                  className: `framer-cs4isb`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(D, {
                          breakpoint: T,
                          overrides: {
                            OZk8B6M_B: {
                              y: (g?.y || 0) + 0 + 5687 + 100 + 324,
                            },
                            SMylAAi4m: {
                              width: `min(${g?.width || `100vw`} - 48px, 800px)`,
                              y: (g?.y || 0) + 0 + 5551 + 64 + 324,
                            },
                          },
                          children: l(F, {
                            height: 360,
                            width: `min(${g?.width || `100vw`} - 80px, 800px)`,
                            y: (g?.y || 0) + 0 + 4010.4 + 100 + 324,
                            children: l(Y, {
                              __framer__animate: { transition: Z },
                              __framer__animateOnce: !0,
                              __framer__enter: X,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-s7pmpj-container`,
                              nodeId: `wZculJXbO`,
                              rendersWithMotion: !0,
                              scopeId: `PnYnZFkf8`,
                              children: l(Ne, {
                                EgcB91oLO: `Yes. We can connect your software with APIs, databases, third-party platforms, and existing business tools where supported.`,
                                eSMc1PeSB: `Can you integrate with my existing tools?`,
                                height: `100%`,
                                HVaoF8fJz: `Can you turn my idea into a working product?`,
                                i3xcpbF7k: `Can you build software for my specific industry?`,
                                id: `wZculJXbO`,
                                jrcf9OQo5: `What types of software do you build?`,
                                jyRLQhg5l: `We build SaaS platforms, custom business software, CRMs, web applications, PWAs, and modern websites.`,
                                layoutId: `wZculJXbO`,
                                pKHctQEOr: `Absolutely. We can take an idea from planning and design through development, testing, and deployment.`,
                                style: { maxWidth: `100%`, width: `100%` },
                                UROQiff2m: `Yes. We can tailor the system around your industry's workflows, requirements, users, and business processes.`,
                                v_eKSVNqr: `Yes. We can provide ongoing maintenance, improvements, bug fixes, and new features depending on your project.`,
                                width: `100%`,
                                xjvxuRkyX: `Do you provide support after launch?`,
                              }),
                            }),
                          }),
                        }),
                        s(J, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1qrhakl`,
                          "data-framer-name": `CTA`,
                          children: [
                            l(C, {
                              __fromCanvasComponent: !0,
                              children: l(i, {
                                children: l(`h2`, {
                                  className: `framer-styles-preset-15k0oiw`,
                                  "data-styles-preset": `waKAohxm2`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `Turn Your Idea Into Reality`,
                                }),
                              }),
                              className: `framer-we3wnv`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(C, {
                              __fromCanvasComponent: !0,
                              children: l(i, {
                                children: l(`p`, {
                                  className: `framer-styles-preset-trq6qq`,
                                  "data-styles-preset": `Qjp1AZZMc`,
                                  children: `Have a project in mind? Let's build the right solution for your business.`,
                                }),
                              }),
                              className: `framer-59n0mo`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(D, {
                              breakpoint: T,
                              overrides: {
                                OZk8B6M_B: {
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    5687 +
                                    100 +
                                    744 +
                                    80 +
                                    220,
                                },
                                SMylAAi4m: {
                                  y:
                                    (g?.y || 0) +
                                    0 +
                                    5551 +
                                    64 +
                                    744 +
                                    80 +
                                    220,
                                },
                              },
                              children: l(F, {
                                height: 36,
                                y:
                                  (g?.y || 0) +
                                  0 +
                                  4010.4 +
                                  100 +
                                  744 +
                                  80 +
                                  220,
                                children: l(A, {
                                  className: `framer-rcpkm6-container`,
                                  nodeId: `mLS8LGMy5`,
                                  scopeId: `PnYnZFkf8`,
                                  children: l(Ce, {
                                    ae3kdG3b0: `var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200))`,
                                    height: `100%`,
                                    id: `mLS8LGMy5`,
                                    IHCtoN6iC: !0,
                                    layoutId: `mLS8LGMy5`,
                                    NAbd17i0q: `Book a free call`,
                                    t90xdY6CE: `#`,
                                    width: `100%`,
                                    yt52UU3wF: 15,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(F, {
                      children: l(A, {
                        className: `framer-6u5q4l-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `TiRrSs8vn`,
                        scopeId: `PnYnZFkf8`,
                        children: l(he, {
                          height: `100%`,
                          id: `TiRrSs8vn`,
                          intensity: 10,
                          layoutId: `TiRrSs8vn`,
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
        `.framer-eCWLy.framer-1hb6usp, .framer-eCWLy .framer-1hb6usp { display: block; }`,
        `.framer-eCWLy.framer-1lqvwvm { align-content: center; align-items: center; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-eCWLy .framer-14cck7y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-g1z6yz-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-eCWLy .framer-1nsprzl, .framer-eCWLy .framer-1q7fbu2, .framer-eCWLy .framer-1tccfcu, .framer-eCWLy .framer-1wss69i, .framer-eCWLy .framer-1crsj6y, .framer-eCWLy .framer-b1x9wf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-r451t0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 900px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-5k2y35 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 600px; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eCWLy .framer-1xzrqhx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 50px 40px 50px 40px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-w3erbz, .framer-eCWLy .framer-1rsxwqi, .framer-eCWLy .framer-13vrqsv, .framer-eCWLy .framer-bklfd0, .framer-eCWLy .framer-st8x8h, .framer-eCWLy .framer-fiufwi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-iae2b1, .framer-eCWLy .framer-ex8cb6, .framer-eCWLy .framer-5xbb6w { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-eCWLy .framer-cvqkxf-container { flex: none; height: 50px; max-width: 700px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-eCWLy .framer-1rkoelk { height: 24px; position: relative; width: 97px; }`,
        `.framer-eCWLy .framer-1q1dsfq { height: 24px; position: relative; width: 103px; }`,
        `.framer-eCWLy .framer-1idzalg, .framer-eCWLy .framer-1o2mxi8 { height: 24px; position: relative; width: 129px; }`,
        `.framer-eCWLy .framer-10r3u1d, .framer-eCWLy .framer-2dpk18, .framer-eCWLy .framer-g218vu, .framer-eCWLy .framer-vqc6b6, .framer-eCWLy .framer-hjpa51 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-1eyqu72-container, .framer-eCWLy .framer-1y9f9ce-container, .framer-eCWLy .framer-akc160-container, .framer-eCWLy .framer-s8kp0m-container, .framer-eCWLy .framer-10gehlc-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
        `.framer-eCWLy .framer-1abo10j, .framer-eCWLy .framer-9laloc, .framer-eCWLy .framer-1hhrf1r, .framer-eCWLy .framer-1ugz8a9, .framer-eCWLy .framer-1xv69u2, .framer-eCWLy .framer-we3wnv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 700px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-hc7dwe, .framer-eCWLy .framer-kwu7fq, .framer-eCWLy .framer-8qir4k, .framer-eCWLy .framer-1rctcis { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-1tun34u { display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 950px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-t2szz1-container, .framer-eCWLy .framer-1z06fm4-container, .framer-eCWLy .framer-17vlrfn-container, .framer-eCWLy .framer-1ox4bi2-container, .framer-eCWLy .framer-yly7z3-container, .framer-eCWLy .framer-1kaa8vy-container, .framer-eCWLy .framer-zw3ezz-container, .framer-eCWLy .framer-10pj1lt-container, .framer-eCWLy .framer-apv1cq-container, .framer-eCWLy .framer-1kap9m-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-18p6mzo { background: radial-gradient(50% 50% at 50% 50%, rgba(129, 74, 200, 0.25) 0%, rgba(0, 114, 156, 0) 100%); display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; max-width: 950px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-1ap884l { display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-12m3c0g { --border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, #222222); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background: radial-gradient(50% 50% at 52.300000000000004% 0%, var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)) /* {"name":"Card background"} */ 0%, rgba(0, 0, 0, 0) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 20px 30px 20px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eCWLy .framer-1a1vs5k, .framer-eCWLy .framer-1xzjwgv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-12hf51v-container, .framer-eCWLy .framer-17pf6nm-container, .framer-eCWLy .framer-vq2uam-container, .framer-eCWLy .framer-1j5xmpb-container, .framer-eCWLy .framer-1pylho8-container, .framer-eCWLy .framer-1uq1poy-container, .framer-eCWLy .framer-2zbe30-container, .framer-eCWLy .framer-1rywhzn-container, .framer-eCWLy .framer-g3l5hr-container, .framer-eCWLy .framer-tipbc9-container, .framer-eCWLy .framer-jmni3k-container, .framer-eCWLy .framer-2rul47-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-1vgkxpl { --border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, #222222); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background: radial-gradient(50% 50% at 52.300000000000004% 0%, rgba(129, 74, 200, 0.45) 0%, rgba(0, 0, 0, 0) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 20px 30px 20px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eCWLy .framer-199n8cx { display: grid; flex: none; gap: 15px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCWLy .framer-cs4isb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eCWLy .framer-s7pmpj-container { flex: none; height: auto; max-width: 800px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-eCWLy .framer-1qrhakl { align-content: center; align-items: center; background: linear-gradient(149deg, rgba(129, 74, 200, 0.4) 0%, var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)) /* {"name":"Card background"} */ 28.999999999999996%, var(--token-b2fb23d9-6070-4f2d-b3d0-2fe68c4f2aab, rgba(13, 13, 13, 0.8)) /* {"name":"Card background"} */ 74%, rgba(129, 74, 200, 0.4) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; max-width: 750px; overflow: hidden; padding: 80px 30px 80px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eCWLy .framer-59n0mo { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 500px; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eCWLy .framer-rcpkm6-container, .framer-eCWLy .framer-6u5q4l-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-eCWLy.framer-1lqvwvm, .framer-eCWLy .framer-14cck7y, .framer-eCWLy .framer-1nsprzl, .framer-eCWLy .framer-1xzrqhx, .framer-eCWLy .framer-w3erbz, .framer-eCWLy .framer-10r3u1d, .framer-eCWLy .framer-1rsxwqi, .framer-eCWLy .framer-1q7fbu2, .framer-eCWLy .framer-2dpk18, .framer-eCWLy .framer-13vrqsv, .framer-eCWLy .framer-1tccfcu, .framer-eCWLy .framer-g218vu, .framer-eCWLy .framer-bklfd0, .framer-eCWLy .framer-1wss69i, .framer-eCWLy .framer-12m3c0g, .framer-eCWLy .framer-1a1vs5k, .framer-eCWLy .framer-1vgkxpl, .framer-eCWLy .framer-1xzjwgv, .framer-eCWLy .framer-vqc6b6, .framer-eCWLy .framer-st8x8h, .framer-eCWLy .framer-1crsj6y, .framer-eCWLy .framer-hjpa51, .framer-eCWLy .framer-fiufwi, .framer-eCWLy .framer-b1x9wf, .framer-eCWLy .framer-1qrhakl { gap: 0px; } .framer-eCWLy.framer-1lqvwvm > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-eCWLy.framer-1lqvwvm > :first-child, .framer-eCWLy .framer-14cck7y > :first-child, .framer-eCWLy .framer-1nsprzl > :first-child, .framer-eCWLy .framer-1xzrqhx > :first-child, .framer-eCWLy .framer-w3erbz > :first-child, .framer-eCWLy .framer-10r3u1d > :first-child, .framer-eCWLy .framer-1rsxwqi > :first-child, .framer-eCWLy .framer-1q7fbu2 > :first-child, .framer-eCWLy .framer-2dpk18 > :first-child, .framer-eCWLy .framer-13vrqsv > :first-child, .framer-eCWLy .framer-1tccfcu > :first-child, .framer-eCWLy .framer-g218vu > :first-child, .framer-eCWLy .framer-bklfd0 > :first-child, .framer-eCWLy .framer-1wss69i > :first-child, .framer-eCWLy .framer-12m3c0g > :first-child, .framer-eCWLy .framer-1a1vs5k > :first-child, .framer-eCWLy .framer-1vgkxpl > :first-child, .framer-eCWLy .framer-1xzjwgv > :first-child, .framer-eCWLy .framer-vqc6b6 > :first-child, .framer-eCWLy .framer-st8x8h > :first-child, .framer-eCWLy .framer-1crsj6y > :first-child, .framer-eCWLy .framer-hjpa51 > :first-child, .framer-eCWLy .framer-fiufwi > :first-child, .framer-eCWLy .framer-b1x9wf > :first-child, .framer-eCWLy .framer-1qrhakl > :first-child { margin-top: 0px; } .framer-eCWLy.framer-1lqvwvm > :last-child, .framer-eCWLy .framer-14cck7y > :last-child, .framer-eCWLy .framer-1nsprzl > :last-child, .framer-eCWLy .framer-1xzrqhx > :last-child, .framer-eCWLy .framer-w3erbz > :last-child, .framer-eCWLy .framer-10r3u1d > :last-child, .framer-eCWLy .framer-1rsxwqi > :last-child, .framer-eCWLy .framer-1q7fbu2 > :last-child, .framer-eCWLy .framer-2dpk18 > :last-child, .framer-eCWLy .framer-13vrqsv > :last-child, .framer-eCWLy .framer-1tccfcu > :last-child, .framer-eCWLy .framer-g218vu > :last-child, .framer-eCWLy .framer-bklfd0 > :last-child, .framer-eCWLy .framer-1wss69i > :last-child, .framer-eCWLy .framer-12m3c0g > :last-child, .framer-eCWLy .framer-1a1vs5k > :last-child, .framer-eCWLy .framer-1vgkxpl > :last-child, .framer-eCWLy .framer-1xzjwgv > :last-child, .framer-eCWLy .framer-vqc6b6 > :last-child, .framer-eCWLy .framer-st8x8h > :last-child, .framer-eCWLy .framer-1crsj6y > :last-child, .framer-eCWLy .framer-hjpa51 > :last-child, .framer-eCWLy .framer-fiufwi > :last-child, .framer-eCWLy .framer-b1x9wf > :last-child, .framer-eCWLy .framer-1qrhakl > :last-child { margin-bottom: 0px; } .framer-eCWLy .framer-14cck7y > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-eCWLy .framer-1nsprzl > *, .framer-eCWLy .framer-1q7fbu2 > *, .framer-eCWLy .framer-1tccfcu > *, .framer-eCWLy .framer-1wss69i > *, .framer-eCWLy .framer-1crsj6y > *, .framer-eCWLy .framer-b1x9wf > *, .framer-eCWLy .framer-1qrhakl > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-eCWLy .framer-1xzrqhx > *, .framer-eCWLy .framer-w3erbz > *, .framer-eCWLy .framer-1rsxwqi > *, .framer-eCWLy .framer-13vrqsv > *, .framer-eCWLy .framer-bklfd0 > *, .framer-eCWLy .framer-st8x8h > *, .framer-eCWLy .framer-fiufwi > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-eCWLy .framer-10r3u1d > *, .framer-eCWLy .framer-2dpk18 > *, .framer-eCWLy .framer-g218vu > *, .framer-eCWLy .framer-vqc6b6 > *, .framer-eCWLy .framer-hjpa51 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-eCWLy .framer-12m3c0g > *, .framer-eCWLy .framer-1vgkxpl > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } .framer-eCWLy .framer-1a1vs5k > *, .framer-eCWLy .framer-1xzjwgv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
        ...me,
        ...ge,
        ...L,
        ...He,
        ...Re,
        `.framer-eCWLy[data-border="true"]::after, .framer-eCWLy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-eCWLy.framer-1lqvwvm { width: 810px; } .framer-eCWLy .framer-1tun34u { gap: 10px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-eCWLy .framer-18p6mzo, .framer-eCWLy .framer-1ap884l, .framer-eCWLy .framer-199n8cx { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-eCWLy .framer-10pj1lt-container, .framer-eCWLy .framer-apv1cq-container, .framer-eCWLy .framer-1kap9m-container { justify-self: center; max-width: 323px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-eCWLy .framer-1tun34u { gap: 0px; } .framer-eCWLy .framer-1tun34u > *, .framer-eCWLy .framer-1tun34u > :first-child, .framer-eCWLy .framer-1tun34u > :last-child { margin: 0px; } }}`,
        `@media (max-width: 809px) { .framer-eCWLy.framer-1lqvwvm { width: 390px; } .framer-eCWLy .framer-14cck7y { padding: 180px 24px 100px 24px; } .framer-eCWLy .framer-1xzrqhx { padding: 35px 24px 35px 24px; } .framer-eCWLy .framer-10r3u1d, .framer-eCWLy .framer-2dpk18, .framer-eCWLy .framer-g218vu, .framer-eCWLy .framer-vqc6b6, .framer-eCWLy .framer-hjpa51 { padding: 64px 24px 64px 24px; } .framer-eCWLy .framer-1tun34u, .framer-eCWLy .framer-18p6mzo, .framer-eCWLy .framer-1ap884l, .framer-eCWLy .framer-199n8cx { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-eCWLy .framer-12m3c0g, .framer-eCWLy .framer-1vgkxpl { padding: 20px; }}`,
      ],
      `framer-eCWLy`,
    )),
    (_n = gn),
    (gn.displayName = `Page`),
    (gn.defaultProps = { height: 5364, width: 1200 }),
    S(
      gn,
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
        ...Pt,
        ...It,
        ...Lt,
        ...Rt,
        ...zt,
        ...Bt,
        ...Vt,
        ...Ht,
        ...Ut,
        ...Wt,
        ...w(le),
        ...w(pe),
        ...w(xe),
        ...w(Ue),
        ...w(ze),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (vn = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerPnYnZFkf8`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"OZk8B6M_B":{"layout":["fixed","auto"]},"SMylAAi4m":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"PbaUBmoUz":{"pattern":":PbaUBmoUz","name":"valuegridtrigger"}}`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `5364`,
            framerResponsiveScreen: ``,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { vn as __FramerMetadata__, _n as default };
//# sourceMappingURL=2snrshBMMPU1ahGKcLDDD4HdYotrc32ImZBjdInFUZ0-v3.mjs.map
