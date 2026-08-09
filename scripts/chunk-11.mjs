import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  D as n,
  F as r,
  N as i,
  O as a,
  P as o,
  T as s,
  b as c,
  d as l,
  j as u,
  l as d,
  o as f,
  v as p,
} from "./react.mjs";
import { C as m, a as h, r as g, t as _ } from "./motion.mjs";
import {
  B as v,
  C as y,
  D as b,
  M as x,
  N as S,
  O as C,
  T as ee,
  V as w,
  _t as te,
  a as T,
  dt as ne,
  gt as re,
  h as ie,
  it as ae,
  k as E,
  q as D,
  r as O,
} from "./core-lib.mjs";
import {
  C as k,
  S as oe,
  T as A,
  _ as se,
  b as ce,
  v as le,
  w as j,
  x as M,
  y as N,
} from "./shared.mjs";
var P,
  F,
  I = e(() => {
    F = (e) => {
      if (!P) {
        let t = e.forwardRef(
          ({ color: t = `currentColor`, size: n = 24, ...r }, i) =>
            e.createElement(
              `svg`,
              {
                ref: i,
                xmlns: `http://www.w3.org/2000/svg`,
                width: n,
                height: n,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: t,
                strokeWidth: `2`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                ...r,
              },
              e.createElement(`path`, {
                d: `M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
              }),
              e.createElement(`polyline`, { points: `9 22 9 12 15 12 15 22` }),
            ),
        );
        ((t.displayName = `Home`), (P = t));
      }
      return P;
    };
  }),
  ue = e(() => {
    (I(), I());
  });
function L(e) {
  let {
    color: t,
    selectByList: o,
    iconSearch: s,
    iconSelection: c,
    onClick: l,
    onMouseDown: u,
    onMouseUp: f,
    onMouseEnter: p,
    onMouseLeave: m,
    mirrored: h,
  } = e;
  a(!1);
  let g = N(R, o, s, c, V),
    [_, v] = r(g === `Home` ? F(n) : null);
  async function b() {
    let e = !0;
    try {
      let t = await import(`${z}${g}.js@0.0.29`);
      e && v(t.default(n));
    } catch (t) {
      (console.log(t), e && v(null));
    }
    return () => {
      e = !1;
    };
  }
  i(() => {
    b();
  }, [g]);
  let x = y.current() === y.canvas ? d(M, {}) : null;
  return d(`div`, {
    style: { display: `contents` },
    onClick: l,
    onMouseEnter: p,
    onMouseLeave: m,
    onMouseDown: u,
    onMouseUp: f,
    children: _
      ? d(_, {
          style: {
            width: `100%`,
            height: `100%`,
            transform: h ? `scale(-1, 1)` : void 0,
          },
          color: t,
        })
      : x,
  });
}
var R,
  z,
  B,
  V,
  de = e(() => {
    (f(),
      s(),
      D(),
      ce(),
      ue(),
      le(),
      (R =
        `activity.airplay.alert-circle.alert-octagon.alert-triangle.align-center.align-justify.align-left.align-right.anchor.aperture.archive.arrow-down.arrow-down-circle.arrow-down-left.arrow-down-right.arrow-left.arrow-left-circle.arrow-right.arrow-right-circle.arrow-up.arrow-up-circle.arrow-up-left.arrow-up-right.at-sign.award.bar-chart.bar-chart-2.battery.battery-charging.bell.bell-off.bluetooth.bold.book.book-open.bookmark.box.briefcase.calendar.camera.camera-off.cast.check.check-circle.check-square.chevron-down.chevron-left.chevron-right.chevron-up.chevrons-down.chevrons-left.chevrons-right.chevrons-up.chrome.circle.clipboard.clock.cloud.cloud-drizzle.cloud-lightning.cloud-off.cloud-rain.cloud-snow.code.codepen.codesandbox.coffee.columns.command.compass.copy.corner-down-left.corner-down-right.corner-left-down.corner-left-up.corner-right-down.corner-right-up.corner-up-left.corner-up-right.cpu.credit-card.crop.crosshair.database.delete.disc.divide.divide-circle.divide-square.dollar-sign.download.download-cloud.dribbble.droplet.edit.edit-2.edit-3.external-link.eye.eye-off.facebook.fast-forward.feather.figma.file.file-minus.file-plus.file-text.film.filter.flag.folder.folder-minus.folder-plus.framer.frown.gift.git-branch.git-commit.git-merge.git-pull-request.github.gitlab.globe.grid.hard-drive.hash.headphones.heart.help-circle.hexagon.home.image.inbox.info.instagram.italic.key.layers.layout.life-buoy.link.link-2.linkedin.list.loader.lock.log-in.log-out.mail.map.map-pin.maximize.maximize-2.meh.menu.message-circle.message-square.mic.mic-off.minimize.minimize-2.minus.minus-circle.minus-square.monitor.moon.more-horizontal.more-vertical.mouse-pointer.move.music.navigation.navigation-2.octagon.package.paperclip.pause.pause-circle.pen-tool.percent.phone.phone-call.phone-forwarded.phone-incoming.phone-missed.phone-off.phone-outgoing.pie-chart.play.play-circle.plus.plus-circle.plus-square.pocket.power.printer.radio.refresh-ccw.refresh-cw.repeat.rewind.rotate-ccw.rotate-cw.rss.save.scissors.search.send.server.settings.share.share-2.shield.shield-off.shopping-bag.shopping-cart.shuffle.sidebar.skip-back.skip-forward.slack.slash.sliders.smartphone.smile.speaker.square.star.stop-circle.sun.sunrise.sunset.tablet.tag.target.terminal.thermometer.thumbs-down.thumbs-up.toggle-left.toggle-right.tool.trash.trash-2.trello.trending-down.trending-up.triangle.truck.tv.twitch.twitter.type.umbrella.underline.unlock.upload.upload-cloud.user.user-check.user-minus.user-plus.user-x.users.video.video-off.voicemail.volume.volume-1.volume-2.volume-x.watch.wifi.wifi-off.wind.x.x-circle.x-octagon.x-square.youtube.zap.zap-off.zoom-in.zoom-out`.split(
          `.`,
        )),
      (z = `https://framer.com/m/feather-icons/`),
      (B = R.map((e) => e.charAt(0).toUpperCase() + e.slice(1))),
      (V = R.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (L.displayName = `Feather`),
      (L.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        mirrored: !1,
      }),
      E(L, {
        selectByList: {
          type: T.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: L.defaultProps.selectByList,
        },
        iconSelection: {
          type: T.Enum,
          options: R,
          optionTitles: B,
          defaultValue: L.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Feather site](https://feathericons.com/)`,
        },
        iconSearch: {
          type: T.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: {
          type: T.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: L.defaultProps.mirrored,
        },
        color: {
          type: T.Color,
          title: `Color`,
          defaultValue: L.defaultProps.color,
        },
        ...se,
      }));
  }),
  H,
  U,
  W,
  G = e(() => {
    (D(),
      S.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      (H = [
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
      (U = [
        `.framer-OWAph .framer-styles-preset-13sktzi:not(.rich-text-wrapper), .framer-OWAph .framer-styles-preset-13sktzi.rich-text-wrapper p { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (W = `framer-OWAph`));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var q,
  J,
  Y,
  X,
  fe,
  pe,
  me,
  he,
  Z,
  ge,
  _e,
  Q,
  $,
  ve = e(() => {
    (f(),
      D(),
      _(),
      s(),
      de(),
      A(),
      G(),
      (q = v(L)),
      (J = { aTOd2sDSm: { hover: !0 }, NJ0cRlRKh: { hover: !0 } }),
      (Y = [`NJ0cRlRKh`, `aTOd2sDSm`]),
      (X = `framer-mscS8`),
      (fe = { aTOd2sDSm: `framer-v-1dhrp5e`, NJ0cRlRKh: `framer-v-1e5l598` }),
      (pe = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (me = ({ value: e, children: n }) => {
        let r = t(h),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(h.Provider, { value: a, children: n });
      }),
      (he = { Basic: `NJ0cRlRKh`, Small: `aTOd2sDSm` }),
      (Z = m.create(o)),
      (ge = ({
        arrow: e,
        background: t,
        height: n,
        id: r,
        link: i,
        title: a,
        tracking: o,
        width: s,
        ...c
      }) => ({
        ...c,
        ae3kdG3b0:
          t ??
          c.ae3kdG3b0 ??
          `var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200))`,
        IHCtoN6iC: e ?? c.IHCtoN6iC ?? !0,
        NAbd17i0q: a ?? c.NAbd17i0q ?? `Get in touch`,
        rwtetofgW: o ?? c.rwtetofgW,
        t90xdY6CE: i ?? c.t90xdY6CE,
        variant: he[c.variant] ?? c.variant ?? `NJ0cRlRKh`,
      })),
      (_e = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Q = te(
        p(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = c(),
            { activeLocale: s, setLocale: u } = ne();
          ae();
          let {
              style: f,
              className: p,
              layoutId: h,
              variant: _,
              NAbd17i0q: v,
              ae3kdG3b0: y,
              IHCtoN6iC: S,
              t90xdY6CE: C,
              rwtetofgW: w,
              ...te
            } = ge(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: se,
              setGestureState: ce,
              setVariant: le,
              variants: j,
            } = re({
              cycleOrder: Y,
              defaultVariant: `NJ0cRlRKh`,
              enabledGestures: J,
              ref: r,
              variant: _,
              variantClassNames: fe,
            }),
            M = _e(e, j),
            N = x(X, W, oe);
          return d(g, {
            id: h ?? i,
            children: d(Z, {
              animate: j,
              initial: !1,
              children: d(me, {
                value: pe,
                children: d(ie, {
                  clickTrackingId: w,
                  href: C,
                  motionChild: !0,
                  nodeId: `NJ0cRlRKh`,
                  scopeId: `gtiWKd4GS`,
                  smoothScroll: !0,
                  children: d(m.a, {
                    ...te,
                    ...k,
                    className: `${x(N, `framer-1e5l598`, p, E)} framer-x05rpg`,
                    "data-border": !0,
                    "data-framer-name": `Basic`,
                    layoutDependency: M,
                    layoutId: `NJ0cRlRKh`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-6839e435-35f3-4ab3-b723-e98c27e525bc, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: y,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                      boxShadow: `0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.15), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.14), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.13), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.1), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
                      ...f,
                    },
                    variants: {
                      "NJ0cRlRKh-hover": {
                        "--border-color": `rgba(255, 255, 255, 0.3)`,
                      },
                    },
                    ...K(
                      {
                        "aTOd2sDSm-hover": { "data-framer-name": void 0 },
                        "NJ0cRlRKh-hover": { "data-framer-name": void 0 },
                        aTOd2sDSm: { "data-framer-name": `Small` },
                      },
                      T,
                      A,
                    ),
                    children: l(m.div, {
                      className: `framer-1hhkatf`,
                      "data-framer-name": `Text Container`,
                      layoutDependency: M,
                      layoutId: `aUsk2snBt`,
                      children: [
                        l(m.div, {
                          className: `framer-15k178i`,
                          "data-framer-name": `1st state`,
                          layoutDependency: M,
                          layoutId: `y3vLcCC14`,
                          children: [
                            d(ee, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(m.p, {
                                  className: `framer-styles-preset-13sktzi`,
                                  "data-styles-preset": `ZlAG9svTx`,
                                  children: `Get in touch`,
                                }),
                              }),
                              className: `framer-1bob7ie`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `KL3zWXp6f`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...K(
                                {
                                  aTOd2sDSm: {
                                    children: d(o, {
                                      children: d(m.p, {
                                        className: `framer-styles-preset-x6ge9v`,
                                        "data-styles-preset": `D1fS_zrfW`,
                                        children: `Get in touch`,
                                      }),
                                    }),
                                  },
                                },
                                T,
                                A,
                              ),
                            }),
                            S !== !1 &&
                              d(O, {
                                children: d(b, {
                                  className: `framer-1k6b1d-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: M,
                                  layoutId: `oSlWUBAks-container`,
                                  nodeId: `oSlWUBAks`,
                                  rendersWithMotion: !0,
                                  scopeId: `gtiWKd4GS`,
                                  children: d(L, {
                                    color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    height: `100%`,
                                    iconSearch: `arrow-up-right`,
                                    iconSelection: `arrow-up-right`,
                                    id: `oSlWUBAks`,
                                    layoutId: `oSlWUBAks`,
                                    mirrored: !1,
                                    selectByList: !0,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                        l(m.div, {
                          className: `framer-4obbbk`,
                          "data-framer-name": `2nd state`,
                          layoutDependency: M,
                          layoutId: `GIieEaFiA`,
                          children: [
                            d(ee, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(m.p, {
                                  className: `framer-styles-preset-13sktzi`,
                                  "data-styles-preset": `ZlAG9svTx`,
                                  children: `Get in touch`,
                                }),
                              }),
                              className: `framer-134t9n`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `EBmkoERUa`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...K(
                                {
                                  aTOd2sDSm: {
                                    children: d(o, {
                                      children: d(m.p, {
                                        className: `framer-styles-preset-x6ge9v`,
                                        "data-styles-preset": `D1fS_zrfW`,
                                        children: `Get in touch`,
                                      }),
                                    }),
                                  },
                                },
                                T,
                                A,
                              ),
                            }),
                            S !== !1 &&
                              d(O, {
                                children: d(b, {
                                  className: `framer-rgp1h6-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: M,
                                  layoutId: `HRkbUA3uT-container`,
                                  nodeId: `HRkbUA3uT`,
                                  rendersWithMotion: !0,
                                  scopeId: `gtiWKd4GS`,
                                  children: d(L, {
                                    color: `var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))`,
                                    height: `100%`,
                                    iconSearch: `arrow-up-right`,
                                    iconSelection: `arrow-right`,
                                    id: `HRkbUA3uT`,
                                    layoutId: `HRkbUA3uT`,
                                    mirrored: !1,
                                    selectByList: !0,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-mscS8.framer-x05rpg, .framer-mscS8 .framer-x05rpg { display: block; }`,
          `.framer-mscS8.framer-1e5l598 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 9px 13px 9px 13px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-mscS8 .framer-1hhkatf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 18px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-mscS8 .framer-15k178i, .framer-mscS8 .framer-4obbbk { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-mscS8 .framer-1bob7ie, .framer-mscS8 .framer-134t9n { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-mscS8 .framer-1k6b1d-container, .framer-mscS8 .framer-rgp1h6-container { flex: none; height: 16px; position: relative; width: 16px; }`,
          `.framer-mscS8.framer-v-1dhrp5e .framer-1hhkatf { height: 17px; }`,
          `.framer-mscS8.framer-v-1e5l598.hover .framer-1hhkatf, .framer-mscS8.framer-v-1dhrp5e.hover .framer-1hhkatf { justify-content: flex-end; }`,
          ...U,
          ...k,
          `.framer-mscS8[data-border="true"]::after, .framer-mscS8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-mscS8`,
      )),
      ($ = Q),
      (Q.displayName = `CTA Button`),
      (Q.defaultProps = { height: 36, width: 124 }),
      E(Q, {
        variant: {
          options: [`NJ0cRlRKh`, `aTOd2sDSm`],
          optionTitles: [`Basic`, `Small`],
          title: `Variant`,
          type: T.Enum,
        },
        NAbd17i0q: {
          defaultValue: `Get in touch`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        onNAbd17i0qChange: { changes: `NAbd17i0q`, type: T.ChangeHandler },
        ae3kdG3b0: {
          defaultValue: `var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200)) /* {"name":"Purple"} */`,
          title: `Background`,
          type: T.Color,
        },
        IHCtoN6iC: { defaultValue: !0, title: `arrow `, type: T.Boolean },
        onIHCtoN6iCChange: { changes: `IHCtoN6iC`, type: T.ChangeHandler },
        t90xdY6CE: { title: `Link`, type: T.Link },
        rwtetofgW: { title: `Tracking`, type: T.TrackingId },
      }),
      C(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...q,
          ...w(H),
          ...w(j),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export { H as a, U as i, ve as n, G as o, W as r, $ as t };
//# sourceMappingURL=chunk-11.mjs.map
