import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  D as n,
  F as r,
  L as i,
  N as a,
  O as o,
  P as s,
  T as c,
  b as l,
  d as u,
  j as d,
  l as f,
  o as p,
  v as m,
  z as h,
} from "./react.mjs";
import { C as g, a as _, r as v, t as y } from "./motion.mjs";
import {
  B as b,
  C as x,
  D as S,
  M as C,
  N as w,
  O as ee,
  T as te,
  V as ne,
  _t as T,
  a as E,
  dt as re,
  gt as ie,
  it as ae,
  k as D,
  q as O,
  r as oe,
} from "./core-lib.mjs";
var k,
  A,
  j,
  M = e(() => {
    (O(),
      w.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      (k = [
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
      (A = [
        `.framer-4el2p .framer-styles-preset-x6ge9v:not(.rich-text-wrapper), .framer-4el2p .framer-styles-preset-x6ge9v.rich-text-wrapper p { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (j = `framer-4el2p`));
  }),
  N,
  se,
  P,
  ce = e(() => {
    (p(),
      c(),
      (N = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (se = {
        ...N,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (P = m((e, t) => f(`div`, { style: se, ref: t }))));
  }),
  le = e(() => {
    ce();
  });
function ue(e, t, n = ``, r, i) {
  let a = d(() => {
    if (n == null || n?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? I(e, t);
  }, [r, n]);
  return t ? r : a;
}
var F,
  I,
  L = e(() => {
    (c(),
      O(),
      (F = {
        onClick: { type: E.EventHandler },
        onMouseDown: { type: E.EventHandler },
        onMouseUp: { type: E.EventHandler },
        onMouseEnter: { type: E.EventHandler },
        onMouseLeave: { type: E.EventHandler },
      }),
      (I = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  }),
  R,
  z,
  B,
  de = e(() => {
    (O(),
      w.loadFonts([
        `GF;Figtree-500`,
        `GF;Figtree-700`,
        `GF;Figtree-700italic`,
        `GF;Figtree-500italic`,
      ]),
      (R = [
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
      (z = [
        `.framer-U9bVq .framer-styles-preset-trq6qq:not(.rich-text-wrapper), .framer-U9bVq .framer-styles-preset-trq6qq.rich-text-wrapper p { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-U9bVq .framer-styles-preset-trq6qq:not(.rich-text-wrapper), .framer-U9bVq .framer-styles-preset-trq6qq.rich-text-wrapper p { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-U9bVq .framer-styles-preset-trq6qq:not(.rich-text-wrapper), .framer-U9bVq .framer-styles-preset-trq6qq.rich-text-wrapper p { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (B = `framer-U9bVq`));
  }),
  V,
  H,
  U,
  W,
  fe = e(() => {
    ((U = (e) => (
      V ||
        ((V = new Map([
          [
            `bold`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z`,
              }),
            ),
          ],
          [
            `duotone`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z`,
                opacity: `0.2`,
              }),
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              }),
            ),
          ],
          [
            `fill`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z`,
              }),
            ),
          ],
          [
            `light`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z`,
              }),
            ),
          ],
          [
            `regular`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              }),
            ),
          ],
          [
            `thin`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z`,
              }),
            ),
          ],
        ])),
        (H = e.forwardRef((t, n) =>
          e.createElement(`g`, { ref: n, ...t }, V.get(t.weight)),
        ))),
      H
    )),
      (W = U));
  }),
  pe = e(() => {
    (fe(), fe());
  });
function G(e) {
  let {
      color: t,
      selectByList: i,
      iconSearch: s,
      iconSelection: c,
      onClick: l,
      onMouseDown: u,
      onMouseUp: d,
      onMouseEnter: p,
      onMouseLeave: m,
      weight: h,
      mirrored: _,
    } = e,
    v = o(!1),
    y = ue(K, i, s, c, he),
    [b, S] = r(y === `Home` ? W(n) : null);
  async function C() {
    try {
      let e = await import(`${me}${y}.js@0.0.57`);
      v.current && S(e.default(n));
    } catch {
      v.current && S(null);
    }
  }
  a(
    () => (
      (v.current = !0),
      C(),
      () => {
        v.current = !1;
      }
    ),
    [y],
  );
  let w = x.current() === x.canvas ? f(P, {}) : null;
  return f(g.div, {
    style: { display: `contents` },
    onClick: l,
    onMouseEnter: p,
    onMouseLeave: m,
    onMouseDown: u,
    onMouseUp: d,
    children: b
      ? f(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: _ ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: f(b, { color: t, weight: h }),
        })
      : w,
  });
}
var K,
  me,
  q,
  he,
  ge = e(() => {
    (p(),
      c(),
      O(),
      y(),
      le(),
      pe(),
      L(),
      (K =
        `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(
          `.`,
        )),
      (me = `https://framer.com/m/phosphor-icons/`),
      (q = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (he = K.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (G.displayName = `Phosphor`),
      (G.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      D(G, {
        selectByList: {
          type: E.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: G.defaultProps.selectByList,
        },
        iconSelection: {
          type: E.Enum,
          options: K,
          defaultValue: G.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: E.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        color: {
          type: E.Color,
          title: `Color`,
          defaultValue: G.defaultProps.color,
        },
        weight: {
          type: E.Enum,
          title: `Weight`,
          optionTitles: q.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: q,
          defaultValue: G.defaultProps.weight,
        },
        mirrored: {
          type: E.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: G.defaultProps.mirrored,
        },
        ...F,
      }));
  });
function _e(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var ve,
  ye,
  J,
  Y,
  be,
  X,
  xe = e(() => {
    (i(),
      (ve = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            ((this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0)));
          else {
            this.currentTime += e;
            let n = _e(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          {
            lerp: n = 0.1,
            duration: r = 1,
            easing: i = (e) => e,
            onStart: a,
            onUpdate: o,
          },
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (ye = class {
        constructor({
          wrapper: e,
          content: t,
          autoResize: n = !0,
          debounce: r = 250,
        } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === h
                ? h.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            h.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper === h
            ? ((this.width = h.innerWidth), (this.height = h.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === h
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }),
      (J = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Y = 100 / 6),
      (be = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new J()),
            h.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, {
              passive: !1,
            }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            h.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, {
              passive: !1,
            }));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          ((t *= r === 1 ? Y : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? Y : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          ((this.windowWidth = h.innerWidth),
            (this.windowHeight = h.innerHeight));
        };
      }),
      (X = class {
        constructor({
          wrapper: e = h,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: u = !c && 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v = !1,
          __experimental__naiveDimensions: y = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching =
                  n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find(
                  (e) =>
                    (typeof c == `function` ? c?.(e) : c) ||
                    e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                    (r &&
                      e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                    (i &&
                      e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                    (e.classList?.contains(`lenis`) &&
                      !e.classList?.contains(`lenis-stopped`)),
                )
              )
                return;
              if (this.isStopped || this.isLocked)
                return void n.preventDefault();
              if (!(
                (this.options.syncTouch && r) ||
                (this.options.smoothWheel && i)
              ))
                return (
                  (this.isScrolling = `native`),
                  void this.animate.stop()
                );
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              (d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        },
                  ),
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (
                !1 === this.isScrolling ||
                this.isScrolling === `native`
              ) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (h.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = h),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              __experimental__naiveDimensions: y,
            }),
            (this.animate = new ve()),
            (this.emitter = new J()),
            (this.dimensions = new ye({
              wrapper: e,
              content: t,
              autoResize: _,
            })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              `scroll`,
              this.onNativeScroll,
              !1,
            ),
            (this.virtualScroll = new be(r, {
              touchMultiplier: m,
              wheelMultiplier: g,
            })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              `scroll`,
              this.onNativeScroll,
              !1,
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = e)
            : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          ((this.userData = e),
            this.emitter.emit(`scroll`, this),
            (this.userData = {}));
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {},
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== h) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = _e(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (c == null || c(this))
                );
              e !== this.targetScroll &&
                (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0),
                      (this.isScrolling = `smooth`),
                      s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit({ userData: d }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: d }),
                        c?.(this),
                        (this.__preventNextNativeScrollEvent = !0)));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === h
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e &&
            ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e &&
            ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e &&
            ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function Se(e) {
  let { intensity: t } = e,
    n = o(null);
  return (
    a(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    a(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: [`style`],
            })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    a(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = h.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    a(() => {
      try {
        if (typeof X != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new X({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    a(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(h.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = h.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n),
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    f(`div`, { style: e.style })
  );
}
var Z,
  Ce,
  we = e(() => {
    (i(),
      p(),
      O(),
      xe(),
      c(),
      (Z = T(
        Se,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``,
      )),
      (Ce = Z),
      (Z.displayName = `Smooth Scroll`),
      D(Z, {
        intensity: {
          title: `Intensity`,
          type: E.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  Te,
  Ee,
  De,
  Oe,
  Q,
  ke,
  Ae,
  je,
  $,
  Me,
  Ne = e(() => {
    (p(),
      O(),
      y(),
      c(),
      ge(),
      M(),
      (Te = b(G)),
      (Ee = `framer-V5EfO`),
      (De = { Q1q6mKwFw: `framer-v-1fiq0w` }),
      (Oe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = d(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(_.Provider, { value: a, children: n });
      }),
      (ke = g.create(s)),
      (Ae = ({
        background: e,
        height: t,
        id: n,
        logoVisible: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        b5FKc3lDF: i ?? o.b5FKc3lDF ?? `Badge`,
        P7WHWvput: e ?? o.P7WHWvput ?? `rgb(13, 13, 13)`,
        YKQkMRbk7: r ?? o.YKQkMRbk7,
      })),
      (je = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      ($ = T(
        m(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = l(),
            { activeLocale: a, setLocale: c } = re();
          ae();
          let {
              style: d,
              className: p,
              layoutId: m,
              variant: h,
              b5FKc3lDF: _,
              YKQkMRbk7: y,
              P7WHWvput: b,
              ...x
            } = Ae(e),
            {
              baseVariant: w,
              classNames: ee,
              clearLoadingGesture: ne,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = ie({
              defaultVariant: `Q1q6mKwFw`,
              ref: r,
              variant: h,
              variantClassNames: De,
            }),
            M = je(e, A),
            N = C(Ee, j);
          return f(v, {
            id: m ?? i,
            children: f(ke, {
              animate: A,
              initial: !1,
              children: f(Q, {
                value: Oe,
                children: u(g.div, {
                  ...x,
                  ...T,
                  className: C(N, `framer-1fiq0w`, p, ee),
                  "data-border": !0,
                  "data-framer-name": `Badge`,
                  layoutDependency: M,
                  layoutId: `Q1q6mKwFw`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: b,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    ...d,
                  },
                  children: [
                    y &&
                      f(oe, {
                        children: f(S, {
                          className: `framer-a6rrsw-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: M,
                          layoutId: `YUzdYtwfs-container`,
                          nodeId: `YUzdYtwfs`,
                          rendersWithMotion: !0,
                          scopeId: `XXd6HJ3Gc`,
                          children: f(G, {
                            color: `var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200))`,
                            height: `100%`,
                            iconSearch: `sparkle`,
                            iconSelection: `House`,
                            id: `YUzdYtwfs`,
                            layoutId: `YUzdYtwfs`,
                            mirrored: !1,
                            selectByList: !1,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    f(te, {
                      __fromCanvasComponent: !0,
                      children: f(s, {
                        children: f(g.p, {
                          className: `framer-styles-preset-x6ge9v`,
                          "data-styles-preset": `D1fS_zrfW`,
                          children: `Badge`,
                        }),
                      }),
                      className: `framer-1s5abq1`,
                      fonts: [`Inter`],
                      layoutDependency: M,
                      layoutId: `liyUzpPwR`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: _,
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
          `.framer-V5EfO.framer-qyu8gw, .framer-V5EfO .framer-qyu8gw { display: block; }`,
          `.framer-V5EfO.framer-1fiq0w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-V5EfO .framer-a6rrsw-container { flex: none; height: 15px; position: relative; width: 15px; }`,
          `.framer-V5EfO .framer-1s5abq1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-V5EfO.framer-1fiq0w { gap: 0px; } .framer-V5EfO.framer-1fiq0w > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-V5EfO.framer-1fiq0w > :first-child { margin-left: 0px; } .framer-V5EfO.framer-1fiq0w > :last-child { margin-right: 0px; } }`,
          ...A,
          `.framer-V5EfO[data-border="true"]::after, .framer-V5EfO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-V5EfO`,
      )),
      (Me = $),
      ($.displayName = `Badge`),
      ($.defaultProps = { height: 33, width: 63 }),
      D($, {
        b5FKc3lDF: {
          defaultValue: `Badge`,
          displayTextArea: !1,
          title: `Title`,
          type: E.String,
        },
        YKQkMRbk7: { defaultValue: !1, title: `Logo Visible`, type: E.Boolean },
        P7WHWvput: {
          defaultValue: `rgb(13, 13, 13)`,
          title: `Background`,
          type: E.Color,
        },
      }),
      ee(
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
          ...Te,
          ...ne(k),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Pe,
  Fe,
  Ie,
  Le = e(() => {
    (O(),
      w.loadFonts([
        `GF;Figtree-600`,
        `GF;Figtree-900`,
        `GF;Figtree-900italic`,
        `GF;Figtree-600italic`,
      ]),
      (Pe = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Figtree`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_ehR15bwkEU4HTy.woff2`,
              weight: `600`,
            },
            {
              family: `Figtree`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_fWR15bwkEU4HTy.woff2`,
              weight: `900`,
            },
            {
              family: `Figtree`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3Ax8ayEA25WTybO8.woff2`,
              weight: `900`,
            },
            {
              family: `Figtree`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/figtree/v7/_Xm9-HUzqDCFdgfMm4GnA4aZFrUvtOK3A2gayEA25WTybO8.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (Fe = [
        `.framer-NzhNA .framer-styles-preset-q2gmjp:not(.rich-text-wrapper), .framer-NzhNA .framer-styles-preset-q2gmjp.rich-text-wrapper h1 { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", sans-serif; --framer-font-family-bold-italic: "Figtree", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -2.2px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-NzhNA .framer-styles-preset-q2gmjp:not(.rich-text-wrapper), .framer-NzhNA .framer-styles-preset-q2gmjp.rich-text-wrapper h1 { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", sans-serif; --framer-font-family-bold-italic: "Figtree", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -2.2px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-NzhNA .framer-styles-preset-q2gmjp:not(.rich-text-wrapper), .framer-NzhNA .framer-styles-preset-q2gmjp.rich-text-wrapper h1 { --framer-font-family: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-family-bold: "Figtree", sans-serif; --framer-font-family-bold-italic: "Figtree", sans-serif; --framer-font-family-italic: "Figtree", "Figtree Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 45px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -2.2px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ie = `framer-NzhNA`));
  });
function Re(e, t) {
  return {
    description: `Syncrotrex is a modern AI automation agency template, perfect for AI startups and tech businesses. It’s sleek, responsive, SEO-friendly, and designed to showcase AI solutions with a clean layout, smooth animations, and a conversion-focused approach.`,
    favicon: `/images/j5lXnL5djhR8orvNcpRh6LSncY_51.png`,
    robots: `max-image-preview:large`,
    socialImage: `/images/HMAXl2OBQIIUUaPBbnSBuo5EQYE_52.png`,
    title: `Syncrotrex - AI automation agency template`,
  };
}
var ze = e(() => {});
export {
  A as C,
  j as S,
  M as T,
  F as _,
  Pe as a,
  le as b,
  Ne as c,
  G as d,
  ge as f,
  de as g,
  R as h,
  Fe as i,
  Ce as l,
  z as m,
  Re as n,
  Le as o,
  B as p,
  Ie as r,
  Me as s,
  ze as t,
  we as u,
  L as v,
  k as w,
  P as x,
  ue as y,
};
//# sourceMappingURL=shared.mjs.map
