import { n as e, t } from "./rolldown-runtime.mjs";
var n,
  r,
  i,
  a = t(() => {
    if (
      ((n = typeof document < `u` ? globalThis.navigator : void 0),
      (r = typeof document < `u` ? globalThis.window : void 0),
      (i = typeof document > `u` ? {} : void 0),
      typeof document > `u`)
    ) {
      let e = Object.prototype.toString;
      Object.prototype.toString = function (...t) {
        return this === i ? `[object global]` : e.call(this, ...t);
      };
    }
  }),
  o = e({
    Children: () => Se,
    Component: () => Ce,
    Fragment: () => we,
    Profiler: () => Te,
    PureComponent: () => Ee,
    StrictMode: () => De,
    Suspense: () => Oe,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ke,
    cloneElement: () => Ae,
    createContext: () => je,
    createElement: () => Me,
    createFactory: () => Ne,
    createRef: () => Pe,
    default: () => y,
    forwardRef: () => Fe,
    isValidElement: () => Ie,
    lazy: () => Le,
    memo: () => Re,
    startTransition: () => ze,
    unstable_act: () => Be,
    useCallback: () => Ve,
    useContext: () => He,
    useDebugValue: () => Ue,
    useDeferredValue: () => We,
    useEffect: () => Ge,
    useId: () => Ke,
    useImperativeHandle: () => qe,
    useInsertionEffect: () => Je,
    useLayoutEffect: () => Ye,
    useMemo: () => Xe,
    useReducer: () => Ze,
    useRef: () => Qe,
    useState: () => $e,
    useSyncExternalStore: () => et,
    useTransition: () => tt,
    version: () => nt,
  });
function s(e) {
  return typeof e != `object` || !e
    ? null
    : ((e = (ue && e[ue]) || e[`@@iterator`]),
      typeof e == `function` ? e : null);
}
function c(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = pe),
    (this.updater = n || de));
}
function l() {}
function u(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = pe),
    (this.updater = n || de));
}
function d(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = `` + t.key),
    t))
      ge.call(t, r) && !ve.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: b, type: e, key: a, ref: o, props: i, _owner: _e.current };
}
function f(e, t) {
  return {
    $$typeof: b,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function p(e) {
  return typeof e == `object` && !!e && e.$$typeof === b;
}
function m(e) {
  var t = { "=": `=0`, ":": `=2` };
  return (
    `$` +
    e.replace(/[=:]/g, function (e) {
      return t[e];
    })
  );
}
function h(e, t) {
  return typeof e == `object` && e && e.key != null
    ? m(`` + e.key)
    : t.toString(36);
}
function g(e, t, n, r, i) {
  var a = typeof e;
  (a !== `undefined` && a !== `boolean`) || (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case `string`:
      case `number`:
        o = !0;
        break;
      case `object`:
        switch (e.$$typeof) {
          case b:
          case ee:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === `` ? `.` + h(o, 0) : r),
      he(i)
        ? ((n = ``),
          e != null && (n = e.replace(ye, `$&/`) + `/`),
          g(i, t, n, ``, function (e) {
            return e;
          }))
        : i != null &&
          (p(i) &&
            (i = f(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ``
                  : (`` + i.key).replace(ye, `$&/`) + `/`) +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === `` ? `.` : r + `:`), he(e)))
    for (var c = 0; c < e.length; c++) {
      a = e[c];
      var l = r + h(a, c);
      o += g(a, t, n, l, i);
    }
  else if (((l = s(e)), typeof l == `function`))
    for (e = l.call(e), c = 0; !(a = e.next()).done;)
      ((a = a.value), (l = r + h(a, c++)), (o += g(a, t, n, l, i)));
  else if (a === `object`)
    throw (
      (t = String(e)),
      Error(
        `Objects are not valid as a React child (found: ` +
          (t === `[object Object]`
            ? `object with keys {` + Object.keys(e).join(`, `) + `}`
            : t) +
          `). If you meant to render a collection of children, use an array instead.`,
      )
    );
  return o;
}
function _(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    g(e, r, ``, ``, function (e) {
      return t.call(n, e, i++);
    }),
    r
  );
}
function v(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (t) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = t));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var y,
  b,
  ee,
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
  x,
  be,
  xe,
  Se,
  Ce,
  we,
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
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt = t(() => {
    ((y = {}),
      (b = Symbol.for(`react.element`)),
      (ee = Symbol.for(`react.portal`)),
      (te = Symbol.for(`react.fragment`)),
      (ne = Symbol.for(`react.strict_mode`)),
      (re = Symbol.for(`react.profiler`)),
      (ie = Symbol.for(`react.provider`)),
      (ae = Symbol.for(`react.context`)),
      (oe = Symbol.for(`react.forward_ref`)),
      (se = Symbol.for(`react.suspense`)),
      (ce = Symbol.for(`react.memo`)),
      (le = Symbol.for(`react.lazy`)),
      (ue = Symbol.iterator),
      (de = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      }),
      (fe = Object.assign),
      (pe = {}),
      (c.prototype.isReactComponent = {}),
      (c.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `setState(...): takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (c.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }),
      (l.prototype = c.prototype),
      (me = u.prototype = new l()),
      (me.constructor = u),
      fe(me, c.prototype),
      (me.isPureReactComponent = !0),
      (he = Array.isArray),
      (ge = Object.prototype.hasOwnProperty),
      (_e = { current: null }),
      (ve = { key: !0, ref: !0, __self: !0, __source: !0 }),
      (ye = /\/+/g),
      (x = { current: null }),
      (be = { transition: null }),
      (xe = {
        ReactCurrentDispatcher: x,
        ReactCurrentBatchConfig: be,
        ReactCurrentOwner: _e,
      }),
      (y.Children = {
        map: _,
        forEach: function (e, t, n) {
          _(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            _(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            _(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!p(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      }),
      (y.Component = c),
      (y.Fragment = te),
      (y.Profiler = re),
      (y.PureComponent = u),
      (y.StrictMode = ne),
      (y.Suspense = se),
      (y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe),
      (y.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `React.cloneElement(...): The argument must be a React element, but you passed ` +
              e +
              `.`,
          );
        var r = fe({}, e.props),
          i = e.key,
          a = e.ref,
          o = e._owner;
        if (t != null) {
          if (
            (t.ref !== void 0 && ((a = t.ref), (o = _e.current)),
            t.key !== void 0 && (i = `` + t.key),
            e.type && e.type.defaultProps)
          )
            var s = e.type.defaultProps;
          for (c in t)
            ge.call(t, c) &&
              !ve.hasOwnProperty(c) &&
              (r[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
        }
        var c = arguments.length - 2;
        if (c === 1) r.children = n;
        else if (1 < c) {
          s = Array(c);
          for (var l = 0; l < c; l++) s[l] = arguments[l + 2];
          r.children = s;
        }
        return {
          $$typeof: b,
          type: e.type,
          key: i,
          ref: a,
          props: r,
          _owner: o,
        };
      }),
      (y.createContext = function (e) {
        return (
          (e = {
            $$typeof: ae,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (e.Provider = { $$typeof: ie, _context: e }),
          (e.Consumer = e)
        );
      }),
      (y.createElement = d),
      (y.createFactory = function (e) {
        var t = d.bind(null, e);
        return ((t.type = e), t);
      }),
      (y.createRef = function () {
        return { current: null };
      }),
      (y.forwardRef = function (e) {
        return { $$typeof: oe, render: e };
      }),
      (y.isValidElement = p),
      (y.lazy = function (e) {
        return {
          $$typeof: le,
          _payload: { _status: -1, _result: e },
          _init: v,
        };
      }),
      (y.memo = function (e, t) {
        return { $$typeof: ce, type: e, compare: t === void 0 ? null : t };
      }),
      (y.startTransition = function (e) {
        var t = be.transition;
        be.transition = {};
        try {
          e();
        } finally {
          be.transition = t;
        }
      }),
      (y.unstable_act = function () {
        throw Error(`act(...) is not supported in production builds of React.`);
      }),
      (y.useCallback = function (e, t) {
        return x.current.useCallback(e, t);
      }),
      (y.useContext = function (e) {
        return x.current.useContext(e);
      }),
      (y.useDebugValue = function () {}),
      (y.useDeferredValue = function (e) {
        return x.current.useDeferredValue(e);
      }),
      (y.useEffect = function (e, t) {
        return x.current.useEffect(e, t);
      }),
      (y.useId = function () {
        return x.current.useId();
      }),
      (y.useImperativeHandle = function (e, t, n) {
        return x.current.useImperativeHandle(e, t, n);
      }),
      (y.useInsertionEffect = function (e, t) {
        return x.current.useInsertionEffect(e, t);
      }),
      (y.useLayoutEffect = function (e, t) {
        return x.current.useLayoutEffect(e, t);
      }),
      (y.useMemo = function (e, t) {
        return x.current.useMemo(e, t);
      }),
      (y.useReducer = function (e, t, n) {
        return x.current.useReducer(e, t, n);
      }),
      (y.useRef = function (e) {
        return x.current.useRef(e);
      }),
      (y.useState = function (e) {
        return x.current.useState(e);
      }),
      (y.useSyncExternalStore = function (e, t, n) {
        return x.current.useSyncExternalStore(e, t, n);
      }),
      (y.useTransition = function () {
        return x.current.useTransition();
      }),
      (y.version = `18.2.0`),
      (Se = y.Children),
      (Ce = y.Component),
      (we = y.Fragment),
      (Te = y.Profiler),
      (Ee = y.PureComponent),
      (De = y.StrictMode),
      (Oe = y.Suspense),
      (ke = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (Ae = y.cloneElement),
      (je = y.createContext),
      (Me = y.createElement),
      (Ne = y.createFactory),
      (Pe = y.createRef),
      (Fe = y.forwardRef),
      (Ie = y.isValidElement),
      (Le = y.lazy),
      (Re = y.memo),
      (ze = y.startTransition),
      (Be = y.unstable_act),
      (Ve = y.useCallback),
      (He = y.useContext),
      (Ue = y.useDebugValue),
      (We = y.useDeferredValue),
      (Ge = y.useEffect),
      (Ke = y.useId),
      (qe = y.useImperativeHandle),
      (Je = y.useInsertionEffect),
      (Ye = y.useLayoutEffect),
      (Xe = y.useMemo),
      (Ze = y.useReducer),
      (Qe = y.useRef),
      ($e = y.useState),
      (et = y.useSyncExternalStore),
      (tt = y.useTransition),
      (nt = y.version));
  }),
  it = e({
    Fragment: () => mt,
    default: () => st,
    jsx: () => ht,
    jsxs: () => gt,
  });
function at(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  for (r in (n !== void 0 && (a = `` + n),
  t.key !== void 0 && (a = `` + t.key),
  t.ref !== void 0 && (o = t.ref),
  t))
    dt.call(t, r) && !pt.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: lt,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: ft.current,
  };
}
var ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t = t(() => {
    (rt(),
      (ot = `default` in o ? y : o),
      (st = {}),
      (ct = ot),
      (lt = Symbol.for(`react.element`)),
      (ut = Symbol.for(`react.fragment`)),
      (dt = Object.prototype.hasOwnProperty),
      (ft =
        ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentOwner),
      (pt = { key: !0, ref: !0, __self: !0, __source: !0 }),
      (st.Fragment = ut),
      (st.jsx = at),
      (st.jsxs = at),
      (mt = st.Fragment),
      (ht = st.jsx),
      (gt = st.jsxs));
  }),
  vt = e({
    default: () => S,
    unstable_IdlePriority: () => Qt,
    unstable_ImmediatePriority: () => $t,
    unstable_LowPriority: () => en,
    unstable_NormalPriority: () => tn,
    unstable_Profiling: () => nn,
    unstable_UserBlockingPriority: () => rn,
    unstable_cancelCallback: () => an,
    unstable_continueExecution: () => on,
    unstable_forceFrameRate: () => sn,
    unstable_getCurrentPriorityLevel: () => cn,
    unstable_getFirstCallbackNode: () => ln,
    unstable_next: () => un,
    unstable_now: () => Zt,
    unstable_pauseExecution: () => dn,
    unstable_requestPaint: () => fn,
    unstable_runWithPriority: () => pn,
    unstable_scheduleCallback: () => mn,
    unstable_shouldYield: () => hn,
    unstable_wrapCallback: () => gn,
  });
function yt(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n;) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < St(i, t))) break e;
    ((e[r] = t), (e[n] = i), (n = r));
  }
}
function bt(e) {
  return e.length === 0 ? null : e[0];
}
function xt(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, a = i >>> 1; r < a;) {
      var o = 2 * (r + 1) - 1,
        s = e[o],
        c = o + 1,
        l = e[c];
      if (0 > St(s, n))
        c < i && 0 > St(l, s)
          ? ((e[r] = l), (e[c] = n), (r = c))
          : ((e[r] = s), (e[o] = n), (r = o));
      else {
        if (!(c < i && 0 > St(l, n))) break e;
        ((e[r] = l), (e[c] = n), (r = c));
      }
    }
  }
  return t;
}
function St(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n === 0 ? e.id - t.id : n;
}
function Ct(e) {
  for (var t = bt(Pt); t !== null;) {
    if (t.callback === null) xt(Pt);
    else {
      if (!(t.startTime <= e)) break;
      (xt(Pt), (t.sortIndex = t.expirationTime), yt(Nt, t));
    }
    t = bt(Pt);
  }
}
function wt(e) {
  if (((zt = !1), Ct(e), !Rt))
    if (bt(Nt) !== null) ((Rt = !0), Ot(Tt));
    else {
      var t = bt(Pt);
      t !== null && kt(wt, t.startTime - e);
    }
}
function Tt(e, t) {
  ((Rt = !1), zt && ((zt = !1), Vt(Gt), (Gt = -1)), (Lt = !0));
  var n = C;
  try {
    for (
      Ct(t), It = bt(Nt);
      It !== null && (!(It.expirationTime > t) || (e && !Et()));
    ) {
      var r = It.callback;
      if (typeof r == `function`) {
        ((It.callback = null), (C = It.priorityLevel));
        var i = r(It.expirationTime <= t);
        ((t = S.unstable_now()),
          typeof i == `function` ? (It.callback = i) : It === bt(Nt) && xt(Nt),
          Ct(t));
      } else xt(Nt);
      It = bt(Nt);
    }
    if (It !== null) var a = !0;
    else {
      var o = bt(Pt);
      (o !== null && kt(wt, o.startTime - t), (a = !1));
    }
    return a;
  } finally {
    ((It = null), (C = n), (Lt = !1));
  }
}
function Et() {
  return !(S.unstable_now() - qt < Kt);
}
function Dt() {
  if (Wt !== null) {
    var e = S.unstable_now();
    qt = e;
    var t = !0;
    try {
      t = Wt(!0, e);
    } finally {
      t ? Jt() : ((Ut = !1), (Wt = null));
    }
  } else Ut = !1;
}
function Ot(e) {
  ((Wt = e), Ut || ((Ut = !0), Jt()));
}
function kt(e, t) {
  Gt = Bt(function () {
    e(S.unstable_now());
  }, t);
}
var S,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  C,
  Lt,
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
  en,
  tn,
  nn,
  rn,
  an,
  on,
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
  _n = t(() => {
    (a(),
      (S = {}),
      typeof performance == `object` && typeof performance.now == `function`
        ? ((At = performance),
          (S.unstable_now = function () {
            return At.now();
          }))
        : ((jt = Date),
          (Mt = jt.now()),
          (S.unstable_now = function () {
            return jt.now() - Mt;
          })),
      (Nt = []),
      (Pt = []),
      (Ft = 1),
      (It = null),
      (C = 3),
      (Lt = !1),
      (Rt = !1),
      (zt = !1),
      (Bt = typeof setTimeout == `function` ? setTimeout : null),
      (Vt = typeof clearTimeout == `function` ? clearTimeout : null),
      (Ht = typeof setImmediate < `u` ? setImmediate : null),
      n !== void 0 &&
        n.scheduling !== void 0 &&
        n.scheduling.isInputPending !== void 0 &&
        n.scheduling.isInputPending.bind(n.scheduling),
      (Ut = !1),
      (Wt = null),
      (Gt = -1),
      (Kt = 5),
      (qt = -1),
      typeof Ht == `function`
        ? (Jt = function () {
            Ht(Dt);
          })
        : typeof MessageChannel < `u`
          ? ((Yt = new MessageChannel()),
            (Xt = Yt.port2),
            (Yt.port1.onmessage = Dt),
            (Jt = function () {
              Xt.postMessage(null);
            }))
          : (Jt = function () {
              Bt(Dt, 0);
            }),
      (S.unstable_IdlePriority = 5),
      (S.unstable_ImmediatePriority = 1),
      (S.unstable_LowPriority = 4),
      (S.unstable_NormalPriority = 3),
      (S.unstable_Profiling = null),
      (S.unstable_UserBlockingPriority = 2),
      (S.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (S.unstable_continueExecution = function () {
        Rt || Lt || ((Rt = !0), Ot(Tt));
      }),
      (S.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (Kt = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (S.unstable_getCurrentPriorityLevel = function () {
        return C;
      }),
      (S.unstable_getFirstCallbackNode = function () {
        return bt(Nt);
      }),
      (S.unstable_next = function (e) {
        switch (C) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = C;
        }
        var n = C;
        C = t;
        try {
          return e();
        } finally {
          C = n;
        }
      }),
      (S.unstable_pauseExecution = function () {}),
      (S.unstable_requestPaint = function () {}),
      (S.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = C;
        C = e;
        try {
          return t();
        } finally {
          C = n;
        }
      }),
      (S.unstable_scheduleCallback = function (e, t, n) {
        var r = S.unstable_now();
        switch (
          (typeof n == `object` && n
            ? ((n = n.delay), (n = typeof n == `number` && 0 < n ? r + n : r))
            : (n = r),
          e)
        ) {
          case 1:
            var i = -1;
            break;
          case 2:
            i = 250;
            break;
          case 5:
            i = 1073741823;
            break;
          case 4:
            i = 1e4;
            break;
          default:
            i = 5e3;
        }
        return (
          (i = n + i),
          (e = {
            id: Ft++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: i,
            sortIndex: -1,
          }),
          n > r
            ? ((e.sortIndex = n),
              yt(Pt, e),
              bt(Nt) === null &&
                e === bt(Pt) &&
                (zt ? (Vt(Gt), (Gt = -1)) : (zt = !0), kt(wt, n - r)))
            : ((e.sortIndex = i), yt(Nt, e), Rt || Lt || ((Rt = !0), Ot(Tt))),
          e
        );
      }),
      (S.unstable_shouldYield = Et),
      (S.unstable_wrapCallback = function (e) {
        var t = C;
        return function () {
          var n = C;
          C = t;
          try {
            return e.apply(this, arguments);
          } finally {
            C = n;
          }
        };
      }),
      (Zt = S.unstable_now),
      (Qt = S.unstable_IdlePriority),
      ($t = S.unstable_ImmediatePriority),
      (en = S.unstable_LowPriority),
      (tn = S.unstable_NormalPriority),
      (nn = S.unstable_Profiling),
      (rn = S.unstable_UserBlockingPriority),
      (an = S.unstable_cancelCallback),
      (on = S.unstable_continueExecution),
      (sn = S.unstable_forceFrameRate),
      (cn = S.unstable_getCurrentPriorityLevel),
      (ln = S.unstable_getFirstCallbackNode),
      (un = S.unstable_next),
      (dn = S.unstable_pauseExecution),
      (fn = S.unstable_requestPaint),
      (pn = S.unstable_runWithPriority),
      (mn = S.unstable_scheduleCallback),
      (hn = S.unstable_shouldYield),
      (gn = S.unstable_wrapCallback));
  }),
  vn = e({
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => _p,
    createPortal: () => vp,
    createRoot: () => yp,
    default: () => gp,
    findDOMNode: () => bp,
    flushSync: () => xp,
    hydrate: () => Sp,
    hydrateRoot: () => Cp,
    render: () => wp,
    unmountComponentAtNode: () => Tp,
    unstable_batchedUpdates: () => Ep,
    unstable_renderSubtreeIntoContainer: () => Dp,
    version: () => Op,
  });
function w(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function yn(e, t) {
  (bn(e, t), bn(e + `Capture`, t));
}
function bn(e, t) {
  for (Gc[e] = t, e = 0; e < t.length; e++) Wc.add(t[e]);
}
function xn(e) {
  return qc.call(Xc, e)
    ? !0
    : qc.call(Yc, e)
      ? !1
      : Jc.test(e)
        ? (Xc[e] = !0)
        : ((Yc[e] = !0), !1);
}
function Sn(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case `function`:
    case `symbol`:
      return !0;
    case `boolean`:
      return r
        ? !1
        : n === null
          ? ((e = e.toLowerCase().slice(0, 5)), e !== `data-` && e !== `aria-`)
          : !n.acceptsBooleans;
    default:
      return !1;
  }
}
function Cn(e, t, n, r) {
  if (t == null || Sn(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return !1 === t;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function T(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function wn(e) {
  return e[1].toUpperCase();
}
function Tn(e, t, n, r) {
  var i = P.hasOwnProperty(t) ? P[t] : null;
  (i === null
    ? r ||
      !(2 < t.length) ||
      (t[0] !== `o` && t[0] !== `O`) ||
      (t[1] !== `n` && t[1] !== `N`)
    : i.type !== 0) &&
    (Cn(t, n, i, r) && (n = null),
    r || i === null
      ? xn(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? i.type !== 3 && `` : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && !0 === n) ? `` : `` + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
function En(e) {
  return typeof e != `object` || !e
    ? null
    : ((e = (fl && e[fl]) || e[`@@iterator`]),
      typeof e == `function` ? e : null);
}
function Dn(e) {
  if (pl === void 0)
    try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      pl = (t && t[1]) || ``;
    }
  return (
    `
` +
    pl +
    e
  );
}
function On(e, t) {
  if (!e || ml) return ``;
  ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, `props`, {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == `object` && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (e) {
          var r = e;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (e) {
          r = e;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (e) {
        r = e;
      }
      e();
    }
  } catch (t) {
    if (t && r && typeof t.stack == `string`) {
      for (
        var i = t.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          s = a.length - 1;
        1 <= o && 0 <= s && i[o] !== a[s];
      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== a[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== a[s])) {
                var c =
                  `
` + i[o].replace(` at new `, ` at `);
                return (
                  e.displayName &&
                    c.includes(`<anonymous>`) &&
                    (c = c.replace(`<anonymous>`, e.displayName)),
                  c
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    ((ml = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : ``) ? Dn(e) : ``;
}
function kn(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn(`Lazy`);
    case 13:
      return Dn(`Suspense`);
    case 19:
      return Dn(`SuspenseList`);
    case 0:
    case 2:
    case 15:
      return ((e = On(e.type, !1)), e);
    case 11:
      return ((e = On(e.type.render, !1)), e);
    case 1:
      return ((e = On(e.type, !0)), e);
    default:
      return ``;
  }
}
function An(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case tl:
      return `Fragment`;
    case el:
      return `Portal`;
    case rl:
      return `Profiler`;
    case nl:
      return `StrictMode`;
    case sl:
      return `Suspense`;
    case cl:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case al:
        return (e.displayName || `Context`) + `.Consumer`;
      case il:
        return (e._context.displayName || `Context`) + `.Provider`;
      case ol:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case ll:
        return (
          (t = e.displayName || null),
          t === null ? An(e.type) || `Memo` : t
        );
      case ul:
        ((t = e._payload), (e = e._init));
        try {
          return An(e(t));
        } catch {}
    }
  return null;
}
function jn(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return `Cache`;
    case 9:
      return (t.displayName || `Context`) + `.Consumer`;
    case 10:
      return (t._context.displayName || `Context`) + `.Provider`;
    case 18:
      return `DehydratedFragment`;
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ``),
        t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)
      );
    case 7:
      return `Fragment`;
    case 5:
      return t;
    case 4:
      return `Portal`;
    case 3:
      return `Root`;
    case 6:
      return `Text`;
    case 16:
      return An(t);
    case 8:
      return t === nl ? `StrictMode` : `Mode`;
    case 22:
      return `Offscreen`;
    case 12:
      return `Profiler`;
    case 21:
      return `Scope`;
    case 13:
      return `Suspense`;
    case 19:
      return `SuspenseList`;
    case 25:
      return `TracingMarker`;
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == `function`) return t.displayName || t.name || null;
      if (typeof t == `string`) return t;
  }
  return null;
}
function Mn(e) {
  switch (typeof e) {
    case `boolean`:
    case `number`:
    case `string`:
    case `undefined`:
      return e;
    case `object`:
      return e;
    default:
      return ``;
  }
}
function Nn(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === `input` &&
    (t === `checkbox` || t === `radio`)
  );
}
function Pn(e) {
  var t = Nn(e) ? `checked` : `value`,
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = `` + e[t];
  if (
    !e.hasOwnProperty(t) &&
    n !== void 0 &&
    typeof n.get == `function` &&
    typeof n.set == `function`
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (e) {
          ((r = `` + e), a.call(this, e));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (e) {
          r = `` + e;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Fn(e) {
  e._valueTracker ||= Pn(e);
}
function In(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = ``;
  return (
    e && (r = Nn(e) ? (e.checked ? `true` : `false`) : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function Ln(e) {
  if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rn(e, t) {
  var n = t.checked;
  return F({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zn(e, t) {
  var n = t.defaultValue == null ? `` : t.defaultValue,
    r = t.checked == null ? t.defaultChecked : t.checked;
  ((n = Mn(t.value == null ? n : t.value)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === `checkbox` || t.type === `radio`
          ? t.checked != null
          : t.value != null,
    }));
}
function Bn(e, t) {
  ((t = t.checked), t != null && Tn(e, `checked`, t, !1));
}
function Vn(e, t) {
  Bn(e, t);
  var n = Mn(t.value),
    r = t.type;
  if (n != null)
    r === `number`
      ? ((n === 0 && e.value === ``) || e.value != n) && (e.value = `` + n)
      : e.value !== `` + n && (e.value = `` + n);
  else if (r === `submit` || r === `reset`) {
    e.removeAttribute(`value`);
    return;
  }
  (t.hasOwnProperty(`value`)
    ? Un(e, t.type, n)
    : t.hasOwnProperty(`defaultValue`) && Un(e, t.type, Mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Hn(e, t, n) {
  if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
    var r = t.type;
    if (!(
      (r !== `submit` && r !== `reset`) ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = `` + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== `` && (e.name = ``),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== `` && (e.name = n));
}
function Un(e, t, n) {
  (t === `number` && Ln(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = `` + e._wrapperState.initialValue)
      : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
}
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty(`$` + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = `` + Mn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gn(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return F({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: `` + e._wrapperState.initialValue,
  });
}
function Kn(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (hl(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    ((t ??= ``), (n = t));
  }
  e._wrapperState = { initialValue: Mn(n) };
}
function qn(e, t) {
  var n = Mn(t.value),
    r = Mn(t.defaultValue);
  (n != null &&
    ((n = `` + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = `` + r));
}
function Jn(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== `` && t !== null && (e.value = t);
}
function Yn(e) {
  switch (e) {
    case `svg`:
      return `http://www.w3.org/2000/svg`;
    case `math`:
      return `http://www.w3.org/1998/Math/MathML`;
    default:
      return `http://www.w3.org/1999/xhtml`;
  }
}
function Xn(e, t) {
  return e == null || e === `http://www.w3.org/1999/xhtml`
    ? Yn(t)
    : e === `http://www.w3.org/2000/svg` && t === `foreignObject`
      ? `http://www.w3.org/1999/xhtml`
      : e;
}
function Zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
function Qn(e, t, n) {
  return t == null || typeof t == `boolean` || t === ``
    ? ``
    : n || typeof t != `number` || t === 0 || (vl.hasOwnProperty(e) && vl[e])
      ? (`` + t).trim()
      : t + `px`;
}
function $n(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf(`--`) === 0,
        i = Qn(n, t[n], r);
      (n === `float` && (n = `cssFloat`), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
function er(e, t) {
  if (t) {
    if (bl[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != `object` ||
        !(`__html` in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != `object`) throw Error(w(62));
  }
}
function tr(e, t) {
  if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
  switch (e) {
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return !1;
    default:
      return !0;
  }
}
function nr(e) {
  return (
    (e = e.target || e.srcElement || r),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
function rr(e) {
  if ((e = Gi(e))) {
    if (typeof Sl != `function`) throw Error(w(280));
    var t = e.stateNode;
    t && ((t = qi(t)), Sl(e.stateNode, e.type, t));
  }
}
function ir(e) {
  Cl ? (wl ? wl.push(e) : (wl = [e])) : (Cl = e);
}
function ar() {
  if (Cl) {
    var e = Cl,
      t = wl;
    if (((wl = Cl = null), rr(e), t)) for (e = 0; e < t.length; e++) rr(t[e]);
  }
}
function or(e, t) {
  return e(t);
}
function sr() {}
function cr(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return or(e, t, n);
  } finally {
    ((Tl = !1), Cl !== null || wl !== null) && (sr(), ar());
  }
}
function lr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case `onClick`:
    case `onClickCapture`:
    case `onDoubleClick`:
    case `onDoubleClickCapture`:
    case `onMouseDown`:
    case `onMouseDownCapture`:
    case `onMouseMove`:
    case `onMouseMoveCapture`:
    case `onMouseUp`:
    case `onMouseUpCapture`:
    case `onMouseEnter`:
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === `button` ||
          e === `input` ||
          e === `select` ||
          e === `textarea`
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != `function`) throw Error(w(231, t, typeof n));
  return n;
}
function ur(e, t, n, r, i, a, o, s, c) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, l);
  } catch (e) {
    this.onError(e);
  }
}
function dr(e, t, n, r, i, a, o, s, c) {
  ((Ol = !1), (kl = null), ur.apply(Ml, arguments));
}
function fr(e, t, n, r, i, a, o, s, c) {
  if ((dr.apply(this, arguments), Ol)) {
    if (!Ol) throw Error(w(198));
    var l = kl;
    ((Ol = !1), (kl = null), Al || ((Al = !0), (jl = l)));
  }
}
function pr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), 4098 & t.flags && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function mr(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hr(e) {
  if (pr(e) !== e) throw Error(w(188));
}
function gr(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pr(e)), t === null)) throw Error(w(188));
    return t === e ? e : null;
  }
  for (var n = e, r = t; ;) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a;) {
        if (a === n) return (hr(i), e);
        if (a === r) return (hr(i), t);
        a = a.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) ((n = i), (r = a));
    else {
      for (var o = !1, s = i.child; s;) {
        if (s === n) {
          ((o = !0), (n = i), (r = a));
          break;
        }
        if (s === r) {
          ((o = !0), (r = i), (n = a));
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s;) {
          if (s === n) {
            ((o = !0), (n = a), (r = i));
            break;
          }
          if (s === r) {
            ((o = !0), (r = a), (n = i));
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function _r(e) {
  return ((e = gr(e)), e === null ? null : vr(e));
}
function vr(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = vr(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
function yr(e) {
  if (Wl && typeof Wl.onCommitFiberRoot == `function`)
    try {
      Wl.onCommitFiberRoot(Ul, e, void 0, (128 & e.current.flags) == 128);
    } catch {}
}
function br(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Kl(e) / ql) | 0)) | 0);
}
function xr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Sr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = 268435455 & n;
  if (o !== 0) {
    var s = o & ~i;
    s === 0 ? ((a &= o), a !== 0 && (r = xr(a))) : (r = xr(s));
  } else ((o = n & ~i), o === 0 ? a !== 0 && (r = xr(a)) : (r = xr(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & i) === 0 &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && 4194240 & a))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - Gl(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Cr(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wr(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;
  ) {
    var o = 31 - Gl(a),
      s = 1 << o,
      c = i[o];
    (c === -1
      ? ((s & n) !== 0 && (s & r) === 0) || (i[o] = Cr(s, t))
      : c <= t && (e.expiredLanes |= s),
      (a &= ~s));
  }
}
function Tr(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e === 0 ? (1073741824 & e ? 1073741824 : 0) : e
  );
}
function Er() {
  var e = Jl;
  return ((Jl <<= 1), !(4194240 & Jl) && (Jl = 64), e);
}
function Dr(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Gl(t)),
    (e[t] = n));
}
function kr(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - Gl(n),
      a = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
  }
}
function Ar(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - Gl(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
function jr(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1
  );
}
function Mr(e, t) {
  switch (e) {
    case `focusin`:
    case `focusout`:
      ru = null;
      break;
    case `dragenter`:
    case `dragleave`:
      iu = null;
      break;
    case `mouseover`:
    case `mouseout`:
      au = null;
      break;
    case `pointerover`:
    case `pointerout`:
      ou.delete(t.pointerId);
      break;
    case `gotpointercapture`:
    case `lostpointercapture`:
      su.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Gi(t)), t !== null && Zl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Pr(e, t, n, r, i) {
  switch (t) {
    case `focusin`:
      return ((ru = Nr(ru, e, t, n, r, i)), !0);
    case `dragenter`:
      return ((iu = Nr(iu, e, t, n, r, i)), !0);
    case `mouseover`:
      return ((au = Nr(au, e, t, n, r, i)), !0);
    case `pointerover`:
      var a = i.pointerId;
      return (ou.set(a, Nr(ou.get(a) || null, e, t, n, r, i)), !0);
    case `gotpointercapture`:
      return (
        (a = i.pointerId),
        su.set(a, Nr(su.get(a) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Fr(e) {
  var t = Wi(e.target);
  if (t !== null) {
    var n = pr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = mr(n)), t !== null)) {
          ((e.blockedOn = t),
            eu(e.priority, function () {
              Ql(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ir(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Wr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return ((t = Gi(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    ((xl = r), n.target.dispatchEvent(r), (xl = null), t.shift());
  }
  return !0;
}
function Lr(e, t, n) {
  Ir(e) && n.delete(t);
}
function Rr() {
  ((tu = !1),
    ru !== null && Ir(ru) && (ru = null),
    iu !== null && Ir(iu) && (iu = null),
    au !== null && Ir(au) && (au = null),
    ou.forEach(Lr),
    su.forEach(Lr));
}
function zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tu ||
      ((tu = !0),
      Uc.unstable_scheduleCallback(Uc.unstable_NormalPriority, Rr)));
}
function Br(e) {
  function t(t) {
    return zr(t, e);
  }
  if (0 < nu.length) {
    zr(nu[0], e);
    for (var n = 1; n < nu.length; n++) {
      var r = nu[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ru !== null && zr(ru, e),
      iu !== null && zr(iu, e),
      au !== null && zr(au, e),
      ou.forEach(t),
      su.forEach(t),
      n = 0;
    n < cu.length;
    n++
  )
    ((r = cu[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < cu.length && ((n = cu[0]), n.blockedOn === null);)
    (Fr(n), n.blockedOn === null && cu.shift());
}
function Vr(e, t, n, r) {
  var i = L,
    a = uu.transition;
  uu.transition = null;
  try {
    ((L = 1), Ur(e, t, n, r));
  } finally {
    ((L = i), (uu.transition = a));
  }
}
function Hr(e, t, n, r) {
  var i = L,
    a = uu.transition;
  uu.transition = null;
  try {
    ((L = 4), Ur(e, t, n, r));
  } finally {
    ((L = i), (uu.transition = a));
  }
}
function Ur(e, t, n, r) {
  if (du) {
    var i = Wr(e, t, n, r);
    if (i === null) (ji(e, t, r, fu, n), Mr(e, r));
    else if (Pr(i, e, t, n, r)) r.stopPropagation();
    else if ((Mr(e, r), 4 & t && -1 < lu.indexOf(e))) {
      for (; i !== null;) {
        var a = Gi(i);
        if (
          (a !== null && Xl(a),
          (a = Wr(e, t, n, r)),
          a === null && ji(e, t, r, fu, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else ji(e, t, r, null, n);
  }
}
function Wr(e, t, n, r) {
  if (((fu = null), (e = nr(r)), (e = Wi(e)), e !== null))
    if (((t = pr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = mr(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((fu = e), null);
}
function Gr(e) {
  switch (e) {
    case `cancel`:
    case `click`:
    case `close`:
    case `contextmenu`:
    case `copy`:
    case `cut`:
    case `auxclick`:
    case `dblclick`:
    case `dragend`:
    case `dragstart`:
    case `drop`:
    case `focusin`:
    case `focusout`:
    case `input`:
    case `invalid`:
    case `keydown`:
    case `keypress`:
    case `keyup`:
    case `mousedown`:
    case `mouseup`:
    case `paste`:
    case `pause`:
    case `play`:
    case `pointercancel`:
    case `pointerdown`:
    case `pointerup`:
    case `ratechange`:
    case `reset`:
    case `resize`:
    case `seeked`:
    case `submit`:
    case `touchcancel`:
    case `touchend`:
    case `touchstart`:
    case `volumechange`:
    case `change`:
    case `selectionchange`:
    case `textInput`:
    case `compositionstart`:
    case `compositionend`:
    case `compositionupdate`:
    case `beforeblur`:
    case `afterblur`:
    case `beforeinput`:
    case `blur`:
    case `fullscreenchange`:
    case `focus`:
    case `hashchange`:
    case `popstate`:
    case `select`:
    case `selectstart`:
      return 1;
    case `drag`:
    case `dragenter`:
    case `dragexit`:
    case `dragleave`:
    case `dragover`:
    case `mousemove`:
    case `mouseout`:
    case `mouseover`:
    case `pointermove`:
    case `pointerout`:
    case `pointerover`:
    case `scroll`:
    case `toggle`:
    case `touchmove`:
    case `wheel`:
    case `mouseenter`:
    case `mouseleave`:
    case `pointerenter`:
    case `pointerleave`:
      return 4;
    case `message`:
      switch (Ll()) {
        case Rl:
          return 1;
        case zl:
          return 4;
        case Bl:
        case Vl:
          return 16;
        case Hl:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
function Kr() {
  if (hu) return hu;
  var e,
    t,
    n = mu,
    r = n.length,
    i = `value` in pu ? pu.value : pu.textContent,
    a = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var o = r - e;
  for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
  return (hu = i.slice(e, 1 < t ? 1 - t : void 0));
}
function qr(e) {
  var t = e.keyCode;
  return (
    `charCode` in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Jr() {
  return !0;
}
function Yr() {
  return !1;
}
function Xr(e) {
  function t(t, n, r, i, a) {
    for (var o in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = i),
    (this.target = a),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
      )
        ? Jr
        : Yr),
      (this.isPropagationStopped = Yr),
      this
    );
  }
  return (
    F(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : typeof e.returnValue != `unknown` && (e.returnValue = !1),
          (this.isDefaultPrevented = Jr));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
          (this.isPropagationStopped = Jr));
      },
      persist: function () {},
      isPersistent: Jr,
    }),
    t
  );
}
function Zr(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = Mu[e]) && !!t[e];
}
function Qr() {
  return Zr;
}
function $r(e, t) {
  switch (e) {
    case `keyup`:
      return Ru.indexOf(t.keyCode) !== -1;
    case `keydown`:
      return t.keyCode !== 229;
    case `keypress`:
    case `mousedown`:
    case `focusout`:
      return !0;
    default:
      return !1;
  }
}
function ei(e) {
  return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
}
function ti(e, t) {
  switch (e) {
    case `compositionend`:
      return ei(t);
    case `keypress`:
      return t.which === 32 ? ((Wu = !0), Uu) : null;
    case `textInput`:
      return ((e = t.data), e === Uu && Wu ? null : e);
    default:
      return null;
  }
}
function ni(e, t) {
  if (Gu)
    return e === `compositionend` || (!zu && $r(e, t))
      ? ((e = Kr()), (hu = mu = pu = null), (Gu = !1), e)
      : null;
  switch (e) {
    case `paste`:
      return null;
    case `keypress`:
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case `compositionend`:
      return Hu && t.locale !== `ko` ? null : t.data;
    default:
      return null;
  }
}
function ri(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === `input` ? !!Ku[e.type] : t === `textarea`;
}
function ii(e, t, n, r) {
  (ir(r),
    (t = Ni(t, `onChange`)),
    0 < t.length &&
      ((n = new bu(`onChange`, `change`, null, n, r)),
      e.push({ event: n, listeners: t })));
}
function ai(e) {
  Di(e, 0);
}
function oi(e) {
  if (In(Ki(e))) return e;
}
function si(e, t) {
  if (e === `change`) return t;
}
function ci() {
  qu && (qu.detachEvent(`onpropertychange`, li), (Ju = qu = null));
}
function li(e) {
  if (e.propertyName === `value` && oi(Ju)) {
    var t = [];
    (ii(t, Ju, e, nr(e)), cr(ai, t));
  }
}
function ui(e, t, n) {
  e === `focusin`
    ? (ci(), (qu = t), (Ju = n), qu.attachEvent(`onpropertychange`, li))
    : e === `focusout` && ci();
}
function di(e) {
  if (e === `selectionchange` || e === `keyup` || e === `keydown`)
    return oi(Ju);
}
function fi(e, t) {
  if (e === `click`) return oi(t);
}
function pi(e, t) {
  if (e === `input` || e === `change`) return oi(t);
}
function mi(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function hi(e, t) {
  if ($u(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!qc.call(t, i) || !$u(e[i], t[i])) return !1;
  }
  return !0;
}
function gi(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function _i(e, t) {
  var n = gi(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gi(n);
  }
}
function vi(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? vi(e, t.parentNode)
          : `contains` in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
  );
}
function yi() {
  for (var e = r, t = Ln(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == `string`;
    } catch {
      n = !1;
    }
    if (!n) break;
    ((e = t.contentWindow), (t = Ln(e.document)));
  }
  return t;
}
function bi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === `input` &&
      (e.type === `text` ||
        e.type === `search` ||
        e.type === `tel` ||
        e.type === `url` ||
        e.type === `password`)) ||
      t === `textarea` ||
      e.contentEditable === `true`)
  );
}
function xi(e) {
  var t = yi(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vi(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && bi(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        `selectionStart` in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || r),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = n.textContent.length,
          o = Math.min(i.start, a);
        ((i = i.end === void 0 ? o : Math.min(i.end, a)),
          !e.extend && o > i && ((a = i), (i = o), (o = a)),
          (a = _i(n, o)));
        var s = _i(n, i);
        a &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          o > i
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == `function` && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
function Si(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  id ||
    td == null ||
    td !== Ln(i) ||
    ((i = td),
    `selectionStart` in i && bi(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          r
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (rd && hi(rd, i)) ||
      ((rd = i),
      (i = Ni(nd, `onSelect`)),
      0 < i.length &&
        ((t = new bu(`onSelect`, `select`, null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = td))));
}
function Ci(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n[`Webkit` + e] = `webkit` + t),
    (n[`Moz` + e] = `moz` + t),
    n
  );
}
function wi(e) {
  if (od[e]) return od[e];
  if (!ad[e]) return e;
  var t,
    n = ad[e];
  for (t in n) if (n.hasOwnProperty(t) && t in sd) return (od[e] = n[t]);
  return e;
}
function Ti(e, t) {
  (fd.set(e, t), yn(t, [e]));
}
function Ei(e, t, n) {
  var r = e.type || `unknown-event`;
  ((e.currentTarget = n), fr(r, t, void 0, e), (e.currentTarget = null));
}
function Di(e, t) {
  t = (4 & t) != 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            c = s.instance,
            l = s.currentTarget;
          if (((s = s.listener), c !== a && i.isPropagationStopped())) break e;
          (Ei(i, s, l), (a = c));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (c = s.instance),
            (l = s.currentTarget),
            (s = s.listener),
            c !== a && i.isPropagationStopped())
          )
            break e;
          (Ei(i, s, l), (a = c));
        }
    }
  }
  if (Al) throw ((e = jl), (Al = !1), (jl = null), e);
}
function E(e, t) {
  var n = t[jd];
  n === void 0 && (n = t[jd] = new Set());
  var r = e + `__bubble`;
  n.has(r) || (Ai(t, e, 2, !1), n.add(r));
}
function Oi(e, t, n) {
  var r = 0;
  (t && (r |= 4), Ai(n, e, r, t));
}
function ki(e) {
  if (!e[vd]) {
    ((e[vd] = !0),
      Wc.forEach(function (t) {
        t !== `selectionchange` && (_d.has(t) || Oi(t, !1, e), Oi(t, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vd] || ((t[vd] = !0), Oi(`selectionchange`, !1, t));
  }
}
function Ai(e, t, n, r) {
  switch (Gr(t)) {
    case 1:
      var i = Vr;
      break;
    case 4:
      i = Hr;
      break;
    default:
      i = Ur;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !El ||
      (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
      (i = !0),
    r
      ? i === void 0
        ? e.addEventListener(t, n, !0)
        : e.addEventListener(t, n, { capture: !0, passive: i })
      : i === void 0
        ? e.addEventListener(t, n, !1)
        : e.addEventListener(t, n, { passive: i }));
}
function ji(e, t, n, i, a) {
  var o = i;
  if (!(1 & t) && !(2 & t) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var s = i.tag;
      if (s === 3 || s === 4) {
        var c = i.stateNode.containerInfo;
        if (c === a || (c.nodeType === 8 && c.parentNode === a)) break;
        if (s === 4)
          for (s = i.return; s !== null;) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === a || (l.nodeType === 8 && l.parentNode === a))
            )
              return;
            s = s.return;
          }
        for (; c !== null;) {
          if (((s = Wi(c)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            i = o = s;
            continue e;
          }
          c = c.parentNode;
        }
      }
      i = i.return;
    }
  cr(function () {
    var i = o,
      a = nr(n),
      s = [];
    e: {
      var c = fd.get(e);
      if (c !== void 0) {
        var l = bu,
          u = e;
        switch (e) {
          case `keypress`:
            if (qr(n) === 0) break e;
          case `keydown`:
          case `keyup`:
            l = Nu;
            break;
          case `focusin`:
            ((u = `focus`), (l = Eu));
            break;
          case `focusout`:
            ((u = `blur`), (l = Eu));
            break;
          case `beforeblur`:
          case `afterblur`:
            l = Eu;
            break;
          case `click`:
            if (n.button === 2) break e;
          case `auxclick`:
          case `dblclick`:
          case `mousedown`:
          case `mousemove`:
          case `mouseup`:
          case `mouseout`:
          case `mouseover`:
          case `contextmenu`:
            l = wu;
            break;
          case `drag`:
          case `dragend`:
          case `dragenter`:
          case `dragexit`:
          case `dragleave`:
          case `dragover`:
          case `dragstart`:
          case `drop`:
            l = Tu;
            break;
          case `touchcancel`:
          case `touchend`:
          case `touchmove`:
          case `touchstart`:
            l = Fu;
            break;
          case cd:
          case ld:
          case ud:
            l = Du;
            break;
          case dd:
            l = Iu;
            break;
          case `scroll`:
            l = Su;
            break;
          case `wheel`:
            l = Lu;
            break;
          case `copy`:
          case `cut`:
          case `paste`:
            l = Ou;
            break;
          case `gotpointercapture`:
          case `lostpointercapture`:
          case `pointercancel`:
          case `pointerdown`:
          case `pointermove`:
          case `pointerout`:
          case `pointerover`:
          case `pointerup`:
            l = Pu;
        }
        var d = (4 & t) != 0,
          f = !d && e === `scroll`,
          p = d ? (c === null ? null : c + `Capture`) : c;
        d = [];
        for (var m, h = i; h !== null;) {
          m = h;
          var g = m.stateNode;
          if (
            (m.tag === 5 &&
              g !== null &&
              ((m = g),
              p !== null && ((g = lr(h, p)), g != null && d.push(Mi(h, g, m)))),
            f)
          )
            break;
          h = h.return;
        }
        0 < d.length &&
          ((c = new l(c, u, null, n, a)), s.push({ event: c, listeners: d }));
      }
    }
    if (!(7 & t)) {
      if (
        ((c = e === `mouseover` || e === `pointerover`),
        (l = e === `mouseout` || e === `pointerout`),
        (!c ||
          n === xl ||
          !(u = n.relatedTarget || n.fromElement) ||
          (!Wi(u) && !u[Ad])) &&
          (l || c) &&
          ((c =
            a.window === a
              ? a
              : (c = a.ownerDocument)
                ? c.defaultView || c.parentWindow
                : r),
          l
            ? ((u = n.relatedTarget || n.toElement),
              (l = i),
              (u = u ? Wi(u) : null),
              u !== null &&
                ((f = pr(u)), u !== f || (u.tag !== 5 && u.tag !== 6))) &&
              (u = null)
            : ((l = null), (u = i)),
          l !== u))
      ) {
        if (
          ((d = wu),
          (g = `onMouseLeave`),
          (p = `onMouseEnter`),
          (h = `mouse`),
          (e !== `pointerout` && e !== `pointerover`) ||
            ((d = Pu),
            (g = `onPointerLeave`),
            (p = `onPointerEnter`),
            (h = `pointer`)),
          (f = l == null ? c : Ki(l)),
          (m = u == null ? c : Ki(u)),
          (c = new d(g, h + `leave`, l, n, a)),
          (c.target = f),
          (c.relatedTarget = m),
          (g = null),
          Wi(a) === i &&
            ((d = new d(p, h + `enter`, u, n, a)),
            (d.target = m),
            (d.relatedTarget = f),
            (g = d)),
          (f = g),
          l && u)
        )
          e: {
            for (d = l, p = u, h = 0, m = d; m; m = Pi(m)) h++;
            for (m = 0, g = p; g; g = Pi(g)) m++;
            for (; 0 < h - m;) ((d = Pi(d)), h--);
            for (; 0 < m - h;) ((p = Pi(p)), m--);
            for (; h--;) {
              if (d === p || (p !== null && d === p.alternate)) break e;
              ((d = Pi(d)), (p = Pi(p)));
            }
            d = null;
          }
        else d = null;
        (l !== null && Fi(s, c, l, d, !1),
          u !== null && f !== null && Fi(s, f, u, d, !0));
      }
      if (
        ((c = i ? Ki(i) : r),
        (l = c.nodeName && c.nodeName.toLowerCase()),
        l === `select` || (l === `input` && c.type === `file`))
      )
        var _ = si;
      else if (ri(c))
        if (Yu) _ = pi;
        else {
          _ = di;
          var v = ui;
        }
      else
        (l = c.nodeName) &&
          l.toLowerCase() === `input` &&
          (c.type === `checkbox` || c.type === `radio`) &&
          (_ = fi);
      switch (
        ((_ &&= _(e, i))
          ? ii(s, _, n, a)
          : (v && v(e, c, i),
            e === `focusout` &&
              (v = c._wrapperState) &&
              v.controlled &&
              c.type === `number` &&
              Un(c, `number`, c.value)),
        (v = i ? Ki(i) : r),
        e)
      ) {
        case `focusin`:
          (ri(v) || v.contentEditable === `true`) &&
            ((td = v), (nd = i), (rd = null));
          break;
        case `focusout`:
          rd = nd = td = null;
          break;
        case `mousedown`:
          id = !0;
          break;
        case `contextmenu`:
        case `mouseup`:
        case `dragend`:
          ((id = !1), Si(s, n, a));
          break;
        case `selectionchange`:
          if (ed) break;
        case `keydown`:
        case `keyup`:
          Si(s, n, a);
      }
      var y;
      if (zu)
        e: {
          switch (e) {
            case `compositionstart`:
              var b = `onCompositionStart`;
              break e;
            case `compositionend`:
              b = `onCompositionEnd`;
              break e;
            case `compositionupdate`:
              b = `onCompositionUpdate`;
              break e;
          }
          b = void 0;
        }
      else
        Gu
          ? $r(e, n) && (b = `onCompositionEnd`)
          : e === `keydown` && n.keyCode === 229 && (b = `onCompositionStart`);
      (b &&
        (Hu &&
          n.locale !== `ko` &&
          (Gu || b !== `onCompositionStart`
            ? b === `onCompositionEnd` && Gu && (y = Kr())
            : ((pu = a),
              (mu = `value` in pu ? pu.value : pu.textContent),
              (Gu = !0))),
        (v = Ni(i, b)),
        0 < v.length &&
          ((b = new ku(b, e, null, n, a)),
          s.push({ event: b, listeners: v }),
          y ? (b.data = y) : ((y = ei(n)), y !== null && (b.data = y)))),
        (y = Vu ? ti(e, n) : ni(e, n)) &&
          ((i = Ni(i, `onBeforeInput`)),
          0 < i.length &&
            ((a = new ku(`onBeforeInput`, `beforeinput`, null, n, a)),
            s.push({ event: a, listeners: i }),
            (a.data = y))));
    }
    Di(s, t);
  });
}
function Mi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ni(e, t) {
  for (var n = t + `Capture`, r = []; e !== null;) {
    var i = e,
      a = i.stateNode;
    (i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = lr(e, n)),
      a != null && r.unshift(Mi(e, a, i)),
      (a = lr(e, t)),
      a != null && r.push(Mi(e, a, i))),
      (e = e.return));
  }
  return r;
}
function Pi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fi(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r;) {
    var s = n,
      c = s.alternate,
      l = s.stateNode;
    if (c !== null && c === r) break;
    (s.tag === 5 &&
      l !== null &&
      ((s = l),
      i
        ? ((c = lr(n, a)), c != null && o.unshift(Mi(n, c, s)))
        : i || ((c = lr(n, a)), c != null && o.push(Mi(n, c, s)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function Ii(e) {
  return (typeof e == `string` ? e : `` + e)
    .replace(
      yd,
      `
`,
    )
    .replace(bd, ``);
}
function Li(e, t, n) {
  if (((t = Ii(t)), Ii(e) !== t && n)) throw Error(w(425));
}
function Ri() {}
function zi(e, t) {
  return (
    e === `textarea` ||
    e === `noscript` ||
    typeof t.children == `string` ||
    typeof t.children == `number` ||
    (typeof t.dangerouslySetInnerHTML == `object` &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
function Bi(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vi(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === `/$`)) {
        if (r === 0) {
          (e.removeChild(i), Br(t));
          return;
        }
        r--;
      } else (n !== `$` && n !== `$?` && n !== `$!`) || r++;
    n = i;
  } while (n);
  Br(t);
}
function Hi(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === `$` || t === `$!` || t === `$?`)) break;
      if (t === `/$`) return null;
    }
  }
  return e;
}
function Ui(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === `$` || n === `$!` || n === `$?`) {
        if (t === 0) return e;
        t--;
      } else n === `/$` && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
function Wi(e) {
  var t = e[Od];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Ad] || n[Od])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ui(e); e !== null;) {
          if ((n = e[Od])) return n;
          e = Ui(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Gi(e) {
  return (
    (e = e[Od] || e[Ad]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ki(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function qi(e) {
  return e[kd] || null;
}
function Ji(e) {
  return { current: e };
}
function D(e) {
  0 > Fd || ((e.current = Pd[Fd]), (Pd[Fd] = null), Fd--);
}
function O(e, t) {
  (Fd++, (Pd[Fd] = e.current), (e.current = t));
}
function Yi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Id;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    a = {};
  for (i in n) a[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function Xi(e) {
  return ((e = e.childContextTypes), e != null);
}
function Zi() {
  (D(z), D(R));
}
function Qi(e, t, n) {
  if (R.current !== Id) throw Error(w(168));
  (O(R, t), O(z, n));
}
function $i(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != `function`))
    return n;
  for (var i in ((r = r.getChildContext()), r))
    if (!(i in t)) throw Error(w(108, jn(e) || `Unknown`, i));
  return F({}, n, r);
}
function ea(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Id),
    (Ld = R.current),
    O(R, e),
    O(z, z.current),
    !0
  );
}
function ta(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  (n
    ? ((e = $i(e, t, Ld)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(z),
      D(R),
      O(R, e))
    : D(z),
    O(z, n));
}
function na(e) {
  Rd === null ? (Rd = [e]) : Rd.push(e);
}
function ra(e) {
  ((zd = !0), na(e));
}
function ia() {
  if (!Bd && Rd !== null) {
    Bd = !0;
    var e = 0,
      t = L;
    try {
      var n = Rd;
      for (L = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Rd = null), (zd = !1));
    } catch (t) {
      throw (Rd !== null && (Rd = Rd.slice(e + 1)), Nl(Rl, ia), t);
    } finally {
      ((L = t), (Bd = !1));
    }
  }
  return null;
}
function aa(e, t) {
  ((Vd[Hd++] = Wd), (Vd[Hd++] = Ud), (Ud = e), (Wd = t));
}
function oa(e, t, n) {
  ((Gd[Kd++] = Jd), (Gd[Kd++] = Yd), (Gd[Kd++] = qd), (qd = e));
  var r = Jd;
  e = Yd;
  var i = 32 - Gl(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Gl(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    ((a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Jd = (1 << (32 - Gl(t) + i)) | (n << i) | r),
      (Yd = a + e));
  } else ((Jd = (1 << a) | (n << i) | r), (Yd = e));
}
function sa(e) {
  e.return !== null && (aa(e, 1), oa(e, 1, 0));
}
function ca(e) {
  for (; e === Ud;)
    ((Ud = Vd[--Hd]), (Vd[Hd] = null), (Wd = Vd[--Hd]), (Vd[Hd] = null));
  for (; e === qd;)
    ((qd = Gd[--Kd]),
      (Gd[Kd] = null),
      (Yd = Gd[--Kd]),
      (Gd[Kd] = null),
      (Jd = Gd[--Kd]),
      (Gd[Kd] = null));
}
function la(e, t) {
  var n = fc(5, null, null, 0);
  ((n.elementType = `DELETED`),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ua(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (Xd = e), (Zd = Hi(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === `` || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (Xd = e), (Zd = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType === 8 ? t : null),
        t !== null &&
          ((n = qd === null ? null : { id: Jd, overflow: Yd }),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = fc(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (Xd = e),
          (Zd = null),
          !0)
      );
    default:
      return !1;
  }
}
function da(e) {
  return (1 & e.mode) != 0 && (128 & e.flags) == 0;
}
function fa(e) {
  if (B) {
    var t = Zd;
    if (t) {
      var n = t;
      if (!ua(e, t)) {
        if (da(e)) throw Error(w(418));
        t = Hi(n.nextSibling);
        var r = Xd;
        t && ua(e, t)
          ? la(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (B = !1), (Xd = e));
      }
    } else {
      if (da(e)) throw Error(w(418));
      ((e.flags = (-4097 & e.flags) | 2), (B = !1), (Xd = e));
    }
  }
}
function pa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Xd = e;
}
function ma(e) {
  if (e !== Xd) return !1;
  if (!B) return (pa(e), (B = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== `head` && t !== `body` && !zi(e.type, e.memoizedProps))),
    (t &&= Zd))
  ) {
    if (da(e)) throw (ha(), Error(w(418)));
    for (; t;) (la(e, t), (t = Hi(t.nextSibling)));
  }
  if ((pa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$`) {
            if (t === 0) {
              Zd = Hi(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
        }
        e = e.nextSibling;
      }
      Zd = null;
    }
  } else Zd = Xd ? Hi(e.stateNode.nextSibling) : null;
  return !0;
}
function ha() {
  for (var e = Zd; e;) e = Hi(e.nextSibling);
}
function ga() {
  ((Zd = Xd = null), (B = !1));
}
function _a(e) {
  Qd === null ? (Qd = [e]) : Qd.push(e);
}
function va(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = F({}, t)), (e = e.defaultProps), e))
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ya() {
  rf = nf = tf = null;
}
function ba(e) {
  var t = ef.current;
  (D(ef), (e._currentValue = t));
}
function xa(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) === t
        ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
        : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sa(e, t) {
  ((tf = e),
    (rf = nf = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (G = !0), (e.firstContext = null)));
}
function Ca(e) {
  var t = e._currentValue;
  if (rf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nf === null)) {
      if (tf === null) throw Error(w(308));
      ((nf = e), (tf.dependencies = { lanes: 0, firstContext: e }));
    } else nf = nf.next = e;
  return t;
}
function wa(e) {
  af === null ? (af = [e]) : af.push(e);
}
function Ta(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), wa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ea(e, r)
  );
}
function Ea(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
function Da(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Oa(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ka(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Aa(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & Y)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ea(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), wa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ea(e, n)
  );
}
function ja(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), 4194240 & n))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ar(e, n));
  }
}
function Ma(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  else {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
  }
}
function Na(e, t, n, r) {
  var i = e.updateQueue;
  of = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var c = s,
      l = c.next;
    ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (s = u.lastBaseUpdate),
      s !== o &&
        (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
        (u.lastBaseUpdate = c)));
  }
  if (a !== null) {
    var d = i.baseState;
    ((o = 0), (u = l = c = null), (s = a));
    do {
      var f = s.lane,
        p = s.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            h = s;
          switch (((f = t), (p = n), h.tag)) {
            case 1:
              if (((m = h.payload), typeof m == `function`)) {
                d = m.call(p, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (-65537 & m.flags) | 128;
            case 0:
              if (
                ((m = h.payload),
                (f = typeof m == `function` ? m.call(p, d, f) : m),
                f == null)
              )
                break e;
              d = F({}, d, f);
              break e;
            case 2:
              of = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        ((p = {
          eventTime: p,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
          (o |= f));
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        ((f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (1);
    if (
      (u === null && (c = d),
      (i.baseState = c),
      (i.firstBaseUpdate = l),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    ((Gf |= o), (e.lanes = o), (e.memoizedState = d));
  }
}
function Pa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != `function`))
          throw Error(w(191, i));
        i.call(r);
      }
    }
}
function Fa(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : F({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
function Ia(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == `function`
      ? e.shouldComponentUpdate(r, a, o)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !hi(n, r) ||
        !hi(i, a)
  );
}
function La(e, t, n) {
  var r = !1,
    i = Id,
    a = t.contextType;
  return (
    typeof a == `object` && a
      ? (a = Ca(a))
      : ((i = Xi(t) ? Ld : R.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Yi(e, i) : Id)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cf),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Ra(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == `function` &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == `function` &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cf.enqueueReplaceState(t, t.state, null));
}
function za(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = sf), Da(e));
  var a = t.contextType;
  (typeof a == `object` && a
    ? (i.context = Ca(a))
    : ((a = Xi(t) ? Ld : R.current), (i.context = Yi(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == `function` && (Fa(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == `function` ||
      typeof i.getSnapshotBeforeUpdate == `function` ||
      (typeof i.UNSAFE_componentWillMount != `function` &&
        typeof i.componentWillMount != `function`) ||
      ((t = i.state),
      typeof i.componentWillMount == `function` && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == `function` &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && cf.enqueueReplaceState(i, i.state, null),
      Na(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == `function` && (e.flags |= 4194308));
}
function Ba(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != `function` && typeof e != `object`)
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var i = r,
        a = `` + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == `function` &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (e) {
            var t = i.refs;
            (t === sf && (t = i.refs = {}),
              e === null ? delete t[a] : (t[a] = e));
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != `string`) throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Va(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === `[object Object]`
          ? `object with keys {` + Object.keys(t).join(`, `) + `}`
          : e,
      ),
    )
  );
}
function Ha(e) {
  var t = e._init;
  return t(e._payload);
}
function Ua(e) {
  function t(t, n) {
    if (e) {
      var r = t.deletions;
      r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
    }
  }
  function n(n, r) {
    if (!e) return null;
    for (; r !== null;) (t(n, r), (r = r.sibling));
    return null;
  }
  function r(e, t) {
    for (e = new Map(); t !== null;)
      (t.key === null ? e.set(t.index, t) : e.set(t.key, t), (t = t.sibling));
    return e;
  }
  function i(e, t) {
    return ((e = hc(e, t)), (e.index = 0), (e.sibling = null), e);
  }
  function a(t, n, r) {
    return (
      (t.index = r),
      e
        ? ((r = t.alternate),
          r === null
            ? ((t.flags |= 2), n)
            : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
        : ((t.flags |= 1048576), n)
    );
  }
  function o(t) {
    return (e && t.alternate === null && (t.flags |= 2), t);
  }
  function s(e, t, n, r) {
    return t === null || t.tag !== 6
      ? ((t = yc(n, e.mode, r)), (t.return = e), t)
      : ((t = i(t, n)), (t.return = e), t);
  }
  function c(e, t, n, r) {
    var a = n.type;
    return a === tl
      ? u(e, t, n.props.children, r, n.key)
      : t !== null &&
          (t.elementType === a ||
            (typeof a == `object` &&
              a &&
              a.$$typeof === ul &&
              Ha(a) === t.type))
        ? ((r = i(t, n.props)), (r.ref = Ba(e, t, n)), (r.return = e), r)
        : ((r = gc(n.type, n.key, n.props, null, e.mode, r)),
          (r.ref = Ba(e, t, n)),
          (r.return = e),
          r);
  }
  function l(e, t, n, r) {
    return t === null ||
      t.tag !== 4 ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? ((t = bc(n, e.mode, r)), (t.return = e), t)
      : ((t = i(t, n.children || [])), (t.return = e), t);
  }
  function u(e, t, n, r, a) {
    return t === null || t.tag !== 7
      ? ((t = _c(n, e.mode, r, a)), (t.return = e), t)
      : ((t = i(t, n)), (t.return = e), t);
  }
  function d(e, t, n) {
    if ((typeof t == `string` && t !== ``) || typeof t == `number`)
      return ((t = yc(`` + t, e.mode, n)), (t.return = e), t);
    if (typeof t == `object` && t) {
      switch (t.$$typeof) {
        case $c:
          return (
            (n = gc(t.type, t.key, t.props, null, e.mode, n)),
            (n.ref = Ba(e, null, t)),
            (n.return = e),
            n
          );
        case el:
          return ((t = bc(t, e.mode, n)), (t.return = e), t);
        case ul:
          var r = t._init;
          return d(e, r(t._payload), n);
      }
      if (hl(t) || En(t))
        return ((t = _c(t, e.mode, n, null)), (t.return = e), t);
      Va(e, t);
    }
    return null;
  }
  function f(e, t, n, r) {
    var i = t === null ? null : t.key;
    if ((typeof n == `string` && n !== ``) || typeof n == `number`)
      return i === null ? s(e, t, `` + n, r) : null;
    if (typeof n == `object` && n) {
      switch (n.$$typeof) {
        case $c:
          return n.key === i ? c(e, t, n, r) : null;
        case el:
          return n.key === i ? l(e, t, n, r) : null;
        case ul:
          return ((i = n._init), f(e, t, i(n._payload), r));
      }
      if (hl(n) || En(n)) return i === null ? u(e, t, n, r, null) : null;
      Va(e, n);
    }
    return null;
  }
  function p(e, t, n, r, i) {
    if ((typeof r == `string` && r !== ``) || typeof r == `number`)
      return ((e = e.get(n) || null), s(t, e, `` + r, i));
    if (typeof r == `object` && r) {
      switch (r.$$typeof) {
        case $c:
          return (
            (e = e.get(r.key === null ? n : r.key) || null),
            c(t, e, r, i)
          );
        case el:
          return (
            (e = e.get(r.key === null ? n : r.key) || null),
            l(t, e, r, i)
          );
        case ul:
          var a = r._init;
          return p(e, t, n, a(r._payload), i);
      }
      if (hl(r) || En(r)) return ((e = e.get(n) || null), u(t, e, r, i, null));
      Va(t, r);
    }
    return null;
  }
  function m(i, o, s, c) {
    for (
      var l = null, u = null, m = o, h = (o = 0), g = null;
      m !== null && h < s.length;
      h++
    ) {
      m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
      var _ = f(i, m, s[h], c);
      if (_ === null) {
        m === null && (m = g);
        break;
      }
      (e && m && _.alternate === null && t(i, m),
        (o = a(_, o, h)),
        u === null ? (l = _) : (u.sibling = _),
        (u = _),
        (m = g));
    }
    if (h === s.length) return (n(i, m), B && aa(i, h), l);
    if (m === null) {
      for (; h < s.length; h++)
        ((m = d(i, s[h], c)),
          m !== null &&
            ((o = a(m, o, h)),
            u === null ? (l = m) : (u.sibling = m),
            (u = m)));
      return (B && aa(i, h), l);
    }
    for (m = r(i, m); h < s.length; h++)
      ((g = p(m, i, h, s[h], c)),
        g !== null &&
          (e && g.alternate !== null && m.delete(g.key === null ? h : g.key),
          (o = a(g, o, h)),
          u === null ? (l = g) : (u.sibling = g),
          (u = g)));
    return (
      e &&
        m.forEach(function (e) {
          return t(i, e);
        }),
      B && aa(i, h),
      l
    );
  }
  function h(i, o, s, c) {
    var l = En(s);
    if (typeof l != `function`) throw Error(w(150));
    if (((s = l.call(s)), s == null)) throw Error(w(151));
    for (
      var u = (l = null), m = o, h = (o = 0), g = null, _ = s.next();
      m !== null && !_.done;
      h++, _ = s.next()
    ) {
      m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
      var v = f(i, m, _.value, c);
      if (v === null) {
        m === null && (m = g);
        break;
      }
      (e && m && v.alternate === null && t(i, m),
        (o = a(v, o, h)),
        u === null ? (l = v) : (u.sibling = v),
        (u = v),
        (m = g));
    }
    if (_.done) return (n(i, m), B && aa(i, h), l);
    if (m === null) {
      for (; !_.done; h++, _ = s.next())
        ((_ = d(i, _.value, c)),
          _ !== null &&
            ((o = a(_, o, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _)));
      return (B && aa(i, h), l);
    }
    for (m = r(i, m); !_.done; h++, _ = s.next())
      ((_ = p(m, i, h, _.value, c)),
        _ !== null &&
          (e && _.alternate !== null && m.delete(_.key === null ? h : _.key),
          (o = a(_, o, h)),
          u === null ? (l = _) : (u.sibling = _),
          (u = _)));
    return (
      e &&
        m.forEach(function (e) {
          return t(i, e);
        }),
      B && aa(i, h),
      l
    );
  }
  function g(e, r, a, s) {
    if (
      (typeof a == `object` &&
        a &&
        a.type === tl &&
        a.key === null &&
        (a = a.props.children),
      typeof a == `object` && a)
    ) {
      switch (a.$$typeof) {
        case $c:
          e: {
            for (var c = a.key, l = r; l !== null;) {
              if (l.key === c) {
                if (((c = a.type), c === tl)) {
                  if (l.tag === 7) {
                    (n(e, l.sibling),
                      (r = i(l, a.props.children)),
                      (r.return = e),
                      (e = r));
                    break e;
                  }
                } else if (
                  l.elementType === c ||
                  (typeof c == `object` &&
                    c &&
                    c.$$typeof === ul &&
                    Ha(c) === l.type)
                ) {
                  (n(e, l.sibling),
                    (r = i(l, a.props)),
                    (r.ref = Ba(e, l, a)),
                    (r.return = e),
                    (e = r));
                  break e;
                }
                n(e, l);
                break;
              }
              (t(e, l), (l = l.sibling));
            }
            a.type === tl
              ? ((r = _c(a.props.children, e.mode, s, a.key)),
                (r.return = e),
                (e = r))
              : ((s = gc(a.type, a.key, a.props, null, e.mode, s)),
                (s.ref = Ba(e, r, a)),
                (s.return = e),
                (e = s));
          }
          return o(e);
        case el:
          e: {
            for (l = a.key; r !== null;) {
              if (r.key === l) {
                if (
                  r.tag === 4 &&
                  r.stateNode.containerInfo === a.containerInfo &&
                  r.stateNode.implementation === a.implementation
                ) {
                  (n(e, r.sibling),
                    (r = i(r, a.children || [])),
                    (r.return = e),
                    (e = r));
                  break e;
                }
                n(e, r);
                break;
              }
              (t(e, r), (r = r.sibling));
            }
            ((r = bc(a, e.mode, s)), (r.return = e), (e = r));
          }
          return o(e);
        case ul:
          return ((l = a._init), g(e, r, l(a._payload), s));
      }
      if (hl(a)) return m(e, r, a, s);
      if (En(a)) return h(e, r, a, s);
      Va(e, a);
    }
    return (typeof a == `string` && a !== ``) || typeof a == `number`
      ? ((a = `` + a),
        r !== null && r.tag === 6
          ? (n(e, r.sibling), (r = i(r, a)), (r.return = e), (e = r))
          : (n(e, r), (r = yc(a, e.mode, s)), (r.return = e), (e = r)),
        o(e))
      : n(e, r);
  }
  return g;
}
function Wa(e) {
  if (e === df) throw Error(w(174));
  return e;
}
function Ga(e, t) {
  switch ((O(mf, t), O(pf, e), O(ff, df), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xn(null, ``);
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xn(t, e)));
  }
  (D(ff), O(ff, t));
}
function Ka() {
  (D(ff), D(pf), D(mf));
}
function qa(e) {
  Wa(mf.current);
  var t = Wa(ff.current),
    n = Xn(t, e.type);
  t !== n && (O(pf, e), O(ff, n));
}
function Ja(e) {
  pf.current === e && (D(ff), D(pf));
}
function Ya(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === `$?` || n.data === `$!`)
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
function Xa() {
  for (var e = 0; e < hf.length; e++)
    hf[e]._workInProgressVersionPrimary = null;
  hf.length = 0;
}
function k() {
  throw Error(w(321));
}
function Za(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$u(e[n], t[n])) return !1;
  return !0;
}
function Qa(e, t, n, r, i, a) {
  if (
    ((vf = a),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (gf.current = e === null || e.memoizedState === null ? wf : Tf),
    (e = n(r, i)),
    bf)
  ) {
    a = 0;
    do {
      if (((bf = !1), (xf = 0), 25 <= a)) throw Error(w(301));
      ((a += 1),
        (W = U = null),
        (t.updateQueue = null),
        (gf.current = Ef),
        (e = n(r, i)));
    } while (bf);
  }
  if (
    ((gf.current = Cf),
    (t = U !== null && U.next !== null),
    (vf = 0),
    (W = U = H = null),
    (yf = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function $a() {
  var e = xf !== 0;
  return ((xf = 0), e);
}
function eo() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (W === null ? (H.memoizedState = W = e) : (W = W.next = e), W);
}
function to() {
  if (U === null) {
    var e = H.alternate;
    e = e === null ? null : e.memoizedState;
  } else e = U.next;
  var t = W === null ? H.memoizedState : W.next;
  if (t !== null) ((W = t), (U = e));
  else {
    if (e === null) throw Error(w(310));
    ((U = e),
      (e = {
        memoizedState: U.memoizedState,
        baseState: U.baseState,
        baseQueue: U.baseQueue,
        queue: U.queue,
        next: null,
      }),
      W === null ? (H.memoizedState = W = e) : (W = W.next = e));
  }
  return W;
}
function no(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function ro(e) {
  var t = to(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = U,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = a.next), (a.next = o));
    }
    ((r.baseQueue = i = a), (n.pending = null));
  }
  if (i !== null) {
    ((a = i.next), (r = r.baseState));
    var s = (o = null),
      c = null,
      l = a;
    do {
      var u = l.lane;
      if ((vf & u) === u)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.hasEagerState ? l.eagerState : e(r, l.action)));
      else {
        var d = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        };
        (c === null ? ((s = c = d), (o = r)) : (c = c.next = d),
          (H.lanes |= u),
          (Gf |= u));
      }
      l = l.next;
    } while (l !== null && l !== a);
    (c === null ? (o = r) : (c.next = s),
      $u(r, t.memoizedState) || (G = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((a = i.lane), (H.lanes |= a), (Gf |= a), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function io(e) {
  var t = to(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((a = e(a, o.action)), (o = o.next));
    while (o !== i);
    ($u(a, t.memoizedState) || (G = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a));
  }
  return [a, r];
}
function ao() {}
function oo(e, t) {
  var n = H,
    r = to(),
    i = t(),
    a = !$u(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (G = !0)),
    (r = r.queue),
    yo(lo.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (W !== null && 1 & W.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      mo(9, co.bind(null, n, r, i, t), void 0, null),
      X === null)
    )
      throw Error(w(349));
    30 & vf || so(n, t, i);
  }
  return i;
}
function so(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function co(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), uo(t) && fo(e));
}
function lo(e, t, n) {
  return n(function () {
    uo(t) && fo(e);
  });
}
function uo(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$u(e, n);
  } catch {
    return !0;
  }
}
function fo(e) {
  var t = Ea(e, 1);
  t !== null && Is(t, e, 1, -1);
}
function po(e) {
  var t = eo();
  return (
    typeof e == `function` && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: no,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = jo.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function mo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ho() {
  return to().memoizedState;
}
function go(e, t, n, r) {
  var i = eo();
  ((H.flags |= e),
    (i.memoizedState = mo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function _o(e, t, n, r) {
  var i = to();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (U !== null) {
    var o = U.memoizedState;
    if (((a = o.destroy), r !== null && Za(r, o.deps))) {
      i.memoizedState = mo(t, n, a, r);
      return;
    }
  }
  ((H.flags |= e), (i.memoizedState = mo(1 | t, n, a, r)));
}
function vo(e, t) {
  return go(8390656, 8, e, t);
}
function yo(e, t) {
  return _o(2048, 8, e, t);
}
function bo(e, t) {
  return _o(4, 2, e, t);
}
function xo(e, t) {
  return _o(4, 4, e, t);
}
function So(e, t) {
  return typeof t == `function`
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t == null
      ? void 0
      : ((e = e()),
        (t.current = e),
        function () {
          t.current = null;
        });
}
function Co(e, t, n) {
  return (
    (n = n == null ? null : n.concat([e])),
    _o(4, 4, So.bind(null, t, e), n)
  );
}
function wo() {}
function To(e, t) {
  var n = to();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Eo(e, t) {
  var n = to();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Do(e, t, n) {
  return 21 & vf
    ? ($u(n, t) || ((n = Er()), (H.lanes |= n), (Gf |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (G = !0)), (e.memoizedState = n));
}
function Oo(e, t) {
  var n = L;
  ((L = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = _f.transition;
  _f.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((L = n), (_f.transition = r));
  }
}
function ko() {
  return to().memoizedState;
}
function Ao(e, t, n) {
  var r = Fs(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mo(e))
  )
    No(t, n);
  else if (((n = Ta(e, t, n, r)), n !== null)) {
    var i = M();
    (Is(n, e, r, i), Po(n, t, r));
  }
}
function jo(e, t, n) {
  var r = Fs(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mo(e)) No(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), $u(s, o))) {
          var c = t.interleaved;
          (c === null
            ? ((i.next = i), wa(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {}
    ((n = Ta(e, t, i, r)),
      n !== null && ((i = M()), Is(n, e, r, i), Po(n, t, r)));
  }
}
function Mo(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function No(e, t) {
  bf = yf = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Po(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ar(e, n));
  }
}
function Fo(e, t) {
  try {
    var n = ``,
      r = t;
    do ((n += kn(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (e) {
    i =
      `
Error generating stack: ` +
      e.message +
      `
` +
      e.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lo(e, t) {
  try {
    console.error(t.value);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function Ro(e, t, n) {
  ((n = ka(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      ($f || (($f = !0), (ep = r)), Lo(e, t));
    }),
    n
  );
}
function zo(e, t, n) {
  ((n = ka(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == `function`) {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Lo(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == `function` &&
      (n.callback = function () {
        (Lo(e, t),
          typeof r != `function` &&
            (tp === null ? (tp = new Set([this])) : tp.add(this)));
        var n = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: n === null ? `` : n,
        });
      }),
    n
  );
}
function Bo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Df();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = oc.bind(null, e, t, n)), t.then(e, e));
}
function Vo(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ho(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ka(-1, 1)), (t.tag = 2), Aa(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
function A(e, t, n, r) {
  t.child = e === null ? uf(t, null, n, r) : lf(t, e.child, n, r);
}
function Uo(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    Sa(t, i),
    (r = Qa(e, t, n, r, a, i)),
    (n = $a()),
    e !== null && !G
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        cs(e, t, i))
      : (B && n && sa(t), (t.flags |= 1), A(e, t, r, i), t.child)
  );
}
function Wo(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == `function` &&
      !pc(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Go(e, t, a, r, i))
      : ((e = gc(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), (e.lanes & i) === 0)) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n === null ? hi : n), n(o, r) && e.ref === t.ref)
    )
      return cs(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = hc(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Go(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (hi(a, r) && e.ref === t.ref) {
      if (((G = !1), (t.pendingProps = r = a), (e.lanes & i) === 0))
        return ((t.lanes = e.lanes), cs(e, t, i));
      131072 & e.flags && (G = !0);
    }
  }
  return Jo(e, t, n, r, i);
}
function Ko(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e === null ? null : e.memoizedState;
  if (r.mode === `hidden`)
    if (!(1 & t.mode))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Uf, Hf),
        (Hf |= n));
    else {
      if (!(1073741824 & n))
        return (
          (e = a === null ? n : a.baseLanes | n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(Uf, Hf),
          (Hf |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a === null ? n : a.baseLanes),
        O(Uf, Hf),
        (Hf |= r));
    }
  else
    (a === null ? (r = n) : ((r = a.baseLanes | n), (t.memoizedState = null)),
      O(Uf, Hf),
      (Hf |= r));
  return (A(e, t, i, n), t.child);
}
function qo(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Jo(e, t, n, r, i) {
  var a = Xi(n) ? Ld : R.current;
  return (
    (a = Yi(t, a)),
    Sa(t, i),
    (n = Qa(e, t, n, r, a, i)),
    (r = $a()),
    e !== null && !G
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        cs(e, t, i))
      : (B && r && sa(t), (t.flags |= 1), A(e, t, n, i), t.child)
  );
}
function Yo(e, t, n, r, i) {
  if (Xi(n)) {
    var a = !0;
    ea(t);
  } else a = !1;
  if ((Sa(t, i), t.stateNode === null))
    (ss(e, t), La(t, n, r), za(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var c = o.context,
      l = n.contextType;
    typeof l == `object` && l
      ? (l = Ca(l))
      : ((l = Xi(n) ? Ld : R.current), (l = Yi(t, l)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == `function` ||
        typeof o.getSnapshotBeforeUpdate == `function`;
    (d ||
      (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
        typeof o.componentWillReceiveProps != `function`) ||
      ((s !== r || c !== l) && Ra(t, o, r, l)),
      (of = !1));
    var f = t.memoizedState;
    ((o.state = f),
      Na(t, r, o, i),
      (c = t.memoizedState),
      s !== r || f !== c || z.current || of
        ? (typeof u == `function` && (Fa(t, n, u, r), (c = t.memoizedState)),
          (s = of || Ia(t, n, s, r, f, c, l))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != `function` &&
                  typeof o.componentWillMount != `function`) ||
                (typeof o.componentWillMount == `function` &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == `function` &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == `function` && (t.flags |= 4194308))
            : (typeof o.componentDidMount == `function` && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (o.props = r),
          (o.state = c),
          (o.context = l),
          (r = s))
        : (typeof o.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Oa(e, t),
      (s = t.memoizedProps),
      (l = t.type === t.elementType ? s : va(t.type, s)),
      (o.props = l),
      (d = t.pendingProps),
      (f = o.context),
      (c = n.contextType),
      typeof c == `object` && c
        ? (c = Ca(c))
        : ((c = Xi(n) ? Ld : R.current), (c = Yi(t, c))));
    var p = n.getDerivedStateFromProps;
    ((u =
      typeof p == `function` ||
      typeof o.getSnapshotBeforeUpdate == `function`) ||
      (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
        typeof o.componentWillReceiveProps != `function`) ||
      ((s !== d || f !== c) && Ra(t, o, r, c)),
      (of = !1),
      (f = t.memoizedState),
      (o.state = f),
      Na(t, r, o, i));
    var m = t.memoizedState;
    s !== d || f !== m || z.current || of
      ? (typeof p == `function` && (Fa(t, n, p, r), (m = t.memoizedState)),
        (l = of || Ia(t, n, l, r, f, m, c) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != `function` &&
                typeof o.componentWillUpdate != `function`) ||
              (typeof o.componentWillUpdate == `function` &&
                o.componentWillUpdate(r, m, c),
              typeof o.UNSAFE_componentWillUpdate == `function` &&
                o.UNSAFE_componentWillUpdate(r, m, c)),
            typeof o.componentDidUpdate == `function` && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (o.props = r),
        (o.state = m),
        (o.context = c),
        (r = l))
      : (typeof o.componentDidUpdate != `function` ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != `function` ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xo(e, t, n, r, a, i);
}
function Xo(e, t, n, r, i, a) {
  qo(e, t);
  var o = (128 & t.flags) != 0;
  if (!r && !o) return (i && ta(t, n, !1), cs(e, t, a));
  ((r = t.stateNode), (Of.current = t));
  var s =
    o && typeof n.getDerivedStateFromError != `function` ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = lf(t, e.child, null, a)), (t.child = lf(t, null, s, a)))
      : A(e, t, s, a),
    (t.memoizedState = r.state),
    i && ta(t, n, !0),
    t.child
  );
}
function Zo(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Qi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qi(e, t.context, !1),
    Ga(e, t.containerInfo));
}
function Qo(e, t, n, r, i) {
  return (ga(), _a(i), (t.flags |= 256), A(e, t, n, r), t.child);
}
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function es(e, t, n) {
  var r,
    i = t.pendingProps,
    a = V.current,
    o = !1,
    s = (128 & t.flags) != 0;
  if (
    ((r = s) || (r = (e === null || e.memoizedState !== null) && (2 & a) != 0),
    r
      ? ((o = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (a |= 1),
    O(V, 1 & a),
    e === null)
  )
    return (
      fa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === `$!`
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = i.children),
          (e = i.fallback),
          o
            ? ((i = t.mode),
              (o = t.child),
              (s = { mode: `hidden`, children: s }),
              !(1 & i) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = vc(s, i, 0, null)),
              (e = _c(e, i, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = $o(n)),
              (t.memoizedState = kf),
              e)
            : ts(t, s))
    );
  if (((a = e.memoizedState), a !== null && ((r = a.dehydrated), r !== null)))
    return rs(e, t, s, i, r, a, n);
  if (o) {
    ((o = i.fallback), (s = t.mode), (a = e.child), (r = a.sibling));
    var c = { mode: `hidden`, children: i.children };
    return (
      !(1 & s) && t.child !== a
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = c),
          (t.deletions = null))
        : ((i = hc(a, c)), (i.subtreeFlags = 14680064 & a.subtreeFlags)),
      r === null ? ((o = _c(o, s, n, null)), (o.flags |= 2)) : (o = hc(r, o)),
      (o.return = t),
      (i.return = t),
      (i.sibling = o),
      (t.child = i),
      (i = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? $o(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = kf),
      i
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (i = hc(o, { mode: `visible`, children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function ts(e, t) {
  return (
    (t = vc({ mode: `visible`, children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ns(e, t, n, r) {
  return (
    r !== null && _a(r),
    lf(t, e.child, null, n),
    (e = ts(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rs(e, t, n, r, i, a, o) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = Io(Error(w(422)))), ns(e, t, o, r))
      : t.memoizedState === null
        ? ((a = r.fallback),
          (i = t.mode),
          (r = vc({ mode: `visible`, children: r.children }, i, 0, null)),
          (a = _c(a, i, o, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          1 & t.mode && lf(t, e.child, null, o),
          (t.child.memoizedState = $o(o)),
          (t.memoizedState = kf),
          a)
        : ((t.child = e.child), (t.flags |= 128), null);
  if (!(1 & t.mode)) return ns(e, t, o, null);
  if (i.data === `$!`) {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (a = Error(w(419))),
      (r = Io(a, r, void 0)),
      ns(e, t, o, r)
    );
  }
  if (((s = (o & e.childLanes) !== 0), G || s)) {
    if (((r = X), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = (i & (r.suspendedLanes | o)) === 0 ? i : 0),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), Ea(e, i), Is(r, e, i, -1)));
    }
    return (Xs(), (r = Io(Error(w(421)))), ns(e, t, o, r));
  }
  return i.data === `$?`
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cc.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Zd = Hi(i.nextSibling)),
      (Xd = t),
      (B = !0),
      (Qd = null),
      e !== null &&
        ((Gd[Kd++] = Jd),
        (Gd[Kd++] = Yd),
        (Gd[Kd++] = qd),
        (Jd = e.id),
        (Yd = e.overflow),
        (qd = t)),
      (t = ts(t, r.children)),
      (t.flags |= 4096),
      t);
}
function is(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), xa(e.return, t, n));
}
function as(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function os(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((A(e, t, r.children, n), (r = V.current), 2 & r))
    ((r = (1 & r) | 2), (t.flags |= 128));
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && is(e, n, t);
        else if (e.tag === 19) is(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((O(V, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case `forwards`:
        for (n = t.child, i = null; n !== null;)
          ((e = n.alternate),
            e !== null && Ya(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          as(t, !1, i, n, a));
        break;
      case `backwards`:
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && Ya(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        as(t, !0, n, null, a);
        break;
      case `together`:
        as(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ss(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cs(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gf |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hc(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = hc(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function ls(e, t, n) {
  switch (t.tag) {
    case 3:
      (Zo(t), ga());
      break;
    case 5:
      qa(t);
      break;
    case 1:
      Xi(t.type) && ea(t);
      break;
    case 4:
      Ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (O(ef, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated === null
          ? (n & t.child.childLanes) === 0
            ? (O(V, 1 & V.current),
              (e = cs(e, t, n)),
              e === null ? null : e.sibling)
            : es(e, t, n)
          : (O(V, 1 & V.current), (t.flags |= 128), null);
      O(V, 1 & V.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return os(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        O(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Ko(e, t, n));
  }
  return cs(e, t, n);
}
function us(e, t) {
  if (!B)
    switch (e.tailMode) {
      case `hidden`:
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case `collapsed`:
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function j(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function ds(e, t, n) {
  var r = t.pendingProps;
  switch ((ca(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (j(t), null);
    case 1:
      return (Xi(t.type) && Zi(), j(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Ka(),
        D(z),
        D(R),
        Xa(),
        (r.pendingContext &&= ((r.context = r.pendingContext), null)),
        (e !== null && e.child !== null) ||
          (ma(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), Qd !== null && (Bs(Qd), (Qd = null)))),
        jf(e, t),
        j(t),
        null
      );
    case 5:
      Ja(t);
      var i = Wa(mf.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Mf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return (j(t), null);
        }
        if (((e = Wa(ff.current)), ma(t))) {
          ((r = t.stateNode), (n = t.type));
          var a = t.memoizedProps;
          switch (((r[Od] = t), (r[kd] = a), (e = (1 & t.mode) != 0), n)) {
            case `dialog`:
              (E(`cancel`, r), E(`close`, r));
              break;
            case `iframe`:
            case `object`:
            case `embed`:
              E(`load`, r);
              break;
            case `video`:
            case `audio`:
              for (i = 0; i < gd.length; i++) E(gd[i], r);
              break;
            case `source`:
              E(`error`, r);
              break;
            case `img`:
            case `image`:
            case `link`:
              (E(`error`, r), E(`load`, r));
              break;
            case `details`:
              E(`toggle`, r);
              break;
            case `input`:
              (zn(r, a), E(`invalid`, r));
              break;
            case `select`:
              ((r._wrapperState = { wasMultiple: !!a.multiple }),
                E(`invalid`, r));
              break;
            case `textarea`:
              (Kn(r, a), E(`invalid`, r));
          }
          for (var o in (er(n, a), (i = null), a))
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === `children`
                ? typeof s == `string`
                  ? r.textContent !== s &&
                    (!0 !== a.suppressHydrationWarning &&
                      Li(r.textContent, s, e),
                    (i = [`children`, s]))
                  : typeof s == `number` &&
                    r.textContent !== `` + s &&
                    (!0 !== a.suppressHydrationWarning &&
                      Li(r.textContent, s, e),
                    (i = [`children`, `` + s]))
                : Gc.hasOwnProperty(o) &&
                  s != null &&
                  o === `onScroll` &&
                  E(`scroll`, r);
            }
          switch (n) {
            case `input`:
              (Fn(r), Hn(r, a, !0));
              break;
            case `textarea`:
              (Fn(r), Jn(r));
              break;
            case `select`:
            case `option`:
              break;
            default:
              typeof a.onClick == `function` && (r.onclick = Ri);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === `http://www.w3.org/1999/xhtml` && (e = Yn(n)),
            e === `http://www.w3.org/1999/xhtml`
              ? n === `script`
                ? ((e = o.createElement(`div`)),
                  (e.innerHTML = `<script><\/script>`),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == `string`
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === `select` &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Od] = t),
            (e[kd] = r),
            Af(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = tr(n, r)), n)) {
              case `dialog`:
                (E(`cancel`, e), E(`close`, e), (i = r));
                break;
              case `iframe`:
              case `object`:
              case `embed`:
                (E(`load`, e), (i = r));
                break;
              case `video`:
              case `audio`:
                for (i = 0; i < gd.length; i++) E(gd[i], e);
                i = r;
                break;
              case `source`:
                (E(`error`, e), (i = r));
                break;
              case `img`:
              case `image`:
              case `link`:
                (E(`error`, e), E(`load`, e), (i = r));
                break;
              case `details`:
                (E(`toggle`, e), (i = r));
                break;
              case `input`:
                (zn(e, r), (i = Rn(e, r)), E(`invalid`, e));
                break;
              case `option`:
                i = r;
                break;
              case `select`:
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = F({}, r, { value: void 0 })),
                  E(`invalid`, e));
                break;
              case `textarea`:
                (Kn(e, r), (i = Gn(e, r)), E(`invalid`, e));
                break;
              default:
                i = r;
            }
            for (a in (er(n, i), (s = i), s))
              if (s.hasOwnProperty(a)) {
                var c = s[a];
                a === `style`
                  ? $n(e, c)
                  : a === `dangerouslySetInnerHTML`
                    ? ((c = c ? c.__html : void 0), c != null && _l(e, c))
                    : a === `children`
                      ? typeof c == `string`
                        ? (n !== `textarea` || c !== ``) && Zn(e, c)
                        : typeof c == `number` && Zn(e, `` + c)
                      : a !== `suppressContentEditableWarning` &&
                        a !== `suppressHydrationWarning` &&
                        a !== `autoFocus` &&
                        (Gc.hasOwnProperty(a)
                          ? c != null && a === `onScroll` && E(`scroll`, e)
                          : c != null && Tn(e, a, c, o));
              }
            switch (n) {
              case `input`:
                (Fn(e), Hn(e, r, !1));
                break;
              case `textarea`:
                (Fn(e), Jn(e));
                break;
              case `option`:
                r.value != null && e.setAttribute(`value`, `` + Mn(r.value));
                break;
              case `select`:
                ((e.multiple = !!r.multiple),
                  (a = r.value),
                  a == null
                    ? r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0)
                    : Wn(e, !!r.multiple, a, !1));
                break;
              default:
                typeof i.onClick == `function` && (e.onclick = Ri);
            }
            switch (n) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                r = !!r.autoFocus;
                break e;
              case `img`:
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (j(t), null);
    case 6:
      if (e && t.stateNode != null) Nf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != `string` && t.stateNode === null) throw Error(w(166));
        if (((n = Wa(mf.current)), Wa(ff.current), ma(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Od] = t),
            (a = r.nodeValue !== n) && ((e = Xd), e !== null))
          )
            switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (1 & e.mode) != 0);
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning &&
                  Li(r.nodeValue, n, (1 & e.mode) != 0);
            }
          a && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Od] = t),
            (t.stateNode = r));
      }
      return (j(t), null);
    case 13:
      if (
        (D(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && Zd !== null && 1 & t.mode && !(128 & t.flags))
          (ha(), ga(), (t.flags |= 98560), (a = !1));
        else if (((a = ma(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(w(318));
            if (
              ((a = t.memoizedState),
              (a = a === null ? null : a.dehydrated),
              !a)
            )
              throw Error(w(317));
            a[Od] = t;
          } else
            (ga(),
              !(128 & t.flags) && (t.memoizedState = null),
              (t.flags |= 4));
          (j(t), (a = !1));
        } else (Qd !== null && (Bs(Qd), (Qd = null)), (a = !0));
        if (!a) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & V.current ? $ === 0 && ($ = 3) : Xs())),
          t.updateQueue !== null && (t.flags |= 4),
          j(t),
          null);
    case 4:
      return (
        Ka(),
        jf(e, t),
        e === null && ki(t.stateNode.containerInfo),
        j(t),
        null
      );
    case 10:
      return (ba(t.type._context), j(t), null);
    case 17:
      return (Xi(t.type) && Zi(), j(t), null);
    case 19:
      if ((D(V), (a = t.memoizedState), a === null)) return (j(t), null);
      if (((r = (128 & t.flags) != 0), (o = a.rendering), o === null))
        if (r) us(a, !1);
        else {
          if ($ !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null;) {
              if (((o = Ya(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    us(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (O(V, (1 & V.current) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            I() > Zf &&
            ((t.flags |= 128), (r = !0), us(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ya(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              us(a, !0),
              a.tail === null && a.tailMode === `hidden` && !o.alternate && !B)
            )
              return (j(t), null);
          } else
            2 * I() - a.renderingStartTime > Zf &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), us(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n === null ? (t.child = o) : (n.sibling = o),
            (a.last = o));
      }
      return a.tail === null
        ? (j(t), null)
        : ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = I()),
          (t.sibling = null),
          (n = V.current),
          O(V, r ? (1 & n) | 2 : 1 & n),
          t);
    case 22:
    case 23:
      return (
        Ks(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & Hf && (j(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : j(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function fs(e, t) {
  switch ((ca(t), t.tag)) {
    case 1:
      return (
        Xi(t.type) && Zi(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Ka(),
        D(z),
        D(R),
        Xa(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return (Ja(t), null);
    case 13:
      if ((D(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        ga();
      }
      return (
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return (D(V), null);
    case 4:
      return (Ka(), null);
    case 10:
      return (ba(t.type._context), null);
    case 22:
    case 23:
      return (Ks(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
function ps(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == `function`)
      try {
        n(null);
      } catch (n) {
        N(e, t, n);
      }
    else n.current = null;
}
function ms(e, t, n) {
  try {
    n();
  } catch (n) {
    N(e, t, n);
  }
}
function hs(e, t) {
  if (((xd = du), (e = yi()), bi(e))) {
    if (`selectionStart` in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || r;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var a = i.anchorOffset,
            o = i.focusNode;
          i = i.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            c = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            p = null;
          n: for (;;) {
            for (
              var m;
              f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;
            )
              ((p = f), (f = m));
            for (;;) {
              if (f === e) break n;
              if (
                (p === n && ++u === a && (c = s),
                p === o && ++d === i && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              ((f = p), (p = f.parentNode));
            }
            f = m;
          }
          n = c === -1 || l === -1 ? null : { start: c, end: l };
        } else n = null;
      }
    n ||= { start: 0, end: 0 };
  } else n = null;
  for (Sd = { focusedElem: e, selectionRange: n }, du = !1, q = t; q !== null;)
    if (((t = q), (e = t.child), 1028 & t.subtreeFlags && e !== null))
      ((e.return = t), (q = e));
    else
      for (; q !== null;) {
        t = q;
        try {
          var h = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var g = h.memoizedProps,
                    _ = h.memoizedState,
                    v = t.stateNode;
                  v.__reactInternalSnapshotBeforeUpdate =
                    v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : va(t.type, g),
                      _,
                    );
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = ``)
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (e) {
          N(t, t.return, e);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (q = e));
          break;
        }
        q = t.return;
      }
  return ((h = If), (If = !1), h);
}
function gs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r === null ? null : r.lastEffect), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        ((i.destroy = void 0), a !== void 0 && ms(t, n, a));
      }
      i = i.next;
    } while (i !== r);
  }
}
function _s(e, t) {
  if (
    ((t = t.updateQueue), (t = t === null ? null : t.lastEffect), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function vs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == `function` ? t(e) : (t.current = e);
  }
}
function ys(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), ys(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Od], delete t[kd], delete t[jd], delete t[Md], delete t[Nd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function bs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xs(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || bs(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ri)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ss(e, t, n), e = e.sibling; e !== null;)
      (Ss(e, t, n), (e = e.sibling));
}
function Cs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cs(e, t, n), e = e.sibling; e !== null;)
      (Cs(e, t, n), (e = e.sibling));
}
function ws(e, t, n) {
  for (n = n.child; n !== null;) (Ts(e, t, n), (n = n.sibling));
}
function Ts(e, t, n) {
  if (Wl && typeof Wl.onCommitFiberUnmount == `function`)
    try {
      Wl.onCommitFiberUnmount(Ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      K || ps(n, t);
    case 6:
      var r = J,
        i = Lf;
      ((J = null),
        ws(e, t, n),
        (J = r),
        (Lf = i),
        J !== null &&
          (Lf
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode)));
      break;
    case 18:
      J !== null &&
        (Lf
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vi(e.parentNode, n)
              : e.nodeType === 1 && Vi(e, n),
            Br(e))
          : Vi(J, n.stateNode));
      break;
    case 4:
      ((r = J),
        (i = Lf),
        (J = n.stateNode.containerInfo),
        (Lf = !0),
        ws(e, t, n),
        (J = r),
        (Lf = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !K &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          ((a = a.tag),
            o !== void 0 && (2 & a || 4 & a) && ms(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      ws(e, t, n);
      break;
    case 1:
      if (
        !K &&
        (ps(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == `function`)
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (e) {
          N(n, t, e);
        }
      ws(e, t, n);
      break;
    case 21:
      ws(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((K = (r = K) || n.memoizedState !== null), ws(e, t, n), (K = r))
        : ws(e, t, n);
      break;
    default:
      ws(e, t, n);
  }
}
function Es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Ff()),
      t.forEach(function (t) {
        var r = lc.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      }));
  }
}
function Ds(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          s = o;
        e: for (; s !== null;) {
          switch (s.tag) {
            case 5:
              ((J = s.stateNode), (Lf = !1));
              break e;
            case 3:
              ((J = s.stateNode.containerInfo), (Lf = !0));
              break e;
            case 4:
              ((J = s.stateNode.containerInfo), (Lf = !0));
              break e;
          }
          s = s.return;
        }
        if (J === null) throw Error(w(160));
        (Ts(a, o, i), (J = null), (Lf = !1));
        var c = i.alternate;
        (c !== null && (c.return = null), (i.return = null));
      } catch (e) {
        N(i, t, e);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null;) (Os(t, e), (t = t.sibling));
}
function Os(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ds(t, e), ks(e), 4 & r)) {
        try {
          (gs(3, e, e.return), _s(3, e));
        } catch (t) {
          N(e, e.return, t);
        }
        try {
          gs(5, e, e.return);
        } catch (t) {
          N(e, e.return, t);
        }
      }
      break;
    case 1:
      (Ds(t, e), ks(e), 512 & r && n !== null && ps(n, n.return));
      break;
    case 5:
      if (
        (Ds(t, e),
        ks(e),
        512 & r && n !== null && ps(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Zn(i, ``);
        } catch (t) {
          N(e, e.return, t);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n === null ? a : n.memoizedProps,
          s = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (s === `input` && a.type === `radio` && a.name != null && Bn(i, a),
              tr(s, o));
            var l = tr(s, a);
            for (o = 0; o < c.length; o += 2) {
              var u = c[o],
                d = c[o + 1];
              u === `style`
                ? $n(i, d)
                : u === `dangerouslySetInnerHTML`
                  ? _l(i, d)
                  : u === `children`
                    ? Zn(i, d)
                    : Tn(i, u, d, l);
            }
            switch (s) {
              case `input`:
                Vn(i, a);
                break;
              case `textarea`:
                qn(i, a);
                break;
              case `select`:
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var p = a.value;
                p == null
                  ? f !== !!a.multiple &&
                    (a.defaultValue == null
                      ? Wn(i, !!a.multiple, a.multiple ? [] : ``, !1)
                      : Wn(i, !!a.multiple, a.defaultValue, !0))
                  : Wn(i, !!a.multiple, p, !1);
            }
            i[kd] = a;
          } catch (t) {
            N(e, e.return, t);
          }
      }
      break;
    case 6:
      if ((Ds(t, e), ks(e), 4 & r)) {
        if (e.stateNode === null) throw Error(w(162));
        ((i = e.stateNode), (a = e.memoizedProps));
        try {
          i.nodeValue = a;
        } catch (t) {
          N(e, e.return, t);
        }
      }
      break;
    case 3:
      if (
        (Ds(t, e), ks(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Br(t.containerInfo);
        } catch (t) {
          N(e, e.return, t);
        }
      break;
    case 4:
      (Ds(t, e), ks(e));
      break;
    case 13:
      (Ds(t, e),
        ks(e),
        (i = e.child),
        8192 & i.flags &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Xf = I())),
        4 & r && Es(e));
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((K = (l = K) || u), Ds(t, e), (K = l)) : Ds(t, e),
        ks(e),
        8192 & r)
      ) {
        if (
          ((l = e.memoizedState !== null),
          (e.stateNode.isHidden = l) && !u && 1 & e.mode)
        )
          for (q = e, u = e.child; u !== null;) {
            for (d = q = u; q !== null;) {
              switch (((f = q), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gs(4, f, f.return);
                  break;
                case 1:
                  ps(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == `function`) {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount());
                    } catch (e) {
                      N(r, n, e);
                    }
                  }
                  break;
                case 5:
                  ps(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ns(d);
                    continue;
                  }
              }
              p === null ? Ns(d) : ((p.return = f), (q = p));
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ;) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                ((i = d.stateNode),
                  l
                    ? ((a = i.style),
                      typeof a.setProperty == `function`
                        ? a.setProperty(`display`, `none`, `important`)
                        : (a.display = `none`))
                    : ((s = d.stateNode),
                      (c = d.memoizedProps.style),
                      (o =
                        c != null && c.hasOwnProperty(`display`)
                          ? c.display
                          : null),
                      (s.style.display = Qn(`display`, o))));
              } catch (t) {
                N(e, e.return, t);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = l ? `` : d.memoizedProps;
              } catch (t) {
                N(e, e.return, t);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null;) {
            if (d.return === null || d.return === e) break e;
            (u === d && (u = null), (d = d.return));
          }
          (u === d && (u = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Ds(t, e), ks(e), 4 & r && Es(e));
      break;
    case 21:
      break;
    default:
      (Ds(t, e), ks(e));
  }
}
function ks(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (bs(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          (32 & r.flags && (Zn(i, ``), (r.flags &= -33)), Cs(e, xs(e), i));
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo;
          Ss(e, xs(e), a);
          break;
        default:
          throw Error(w(161));
      }
    } catch (t) {
      N(e, e.return, t);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function As(e, t, n) {
  ((q = e), js(e, t, n));
}
function js(e, t, n) {
  for (var r = (1 & e.mode) != 0; q !== null;) {
    var i = q,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Pf;
      if (!o) {
        var s = i.alternate,
          c = (s !== null && s.memoizedState !== null) || K;
        s = Pf;
        var l = K;
        if (((Pf = o), (K = c) && !l))
          for (q = i; q !== null;)
            ((o = q),
              (c = o.child),
              (o.tag === 22 && o.memoizedState !== null) || c === null
                ? Ps(i)
                : ((c.return = o), (q = c)));
        for (; a !== null;) ((q = a), js(a, t, n), (a = a.sibling));
        ((q = i), (Pf = s), (K = l));
      }
      Ms(e, t, n);
    } else
      8772 & i.subtreeFlags && a !== null
        ? ((a.return = i), (q = a))
        : Ms(e, t, n);
  }
}
function Ms(e) {
  for (; q !== null;) {
    var t = q;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              K || _s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !K)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : va(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && Pa(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pa(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = s;
                var c = t.memoizedProps;
                switch (t.type) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    c.autoFocus && n.focus();
                    break;
                  case `img`:
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate;
                if (l !== null) {
                  var u = l.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Br(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        K || (512 & t.flags && vs(t));
      } catch (e) {
        N(t, t.return, e);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (q = n));
      break;
    }
    q = t.return;
  }
}
function Ns(e) {
  for (; q !== null;) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (q = n));
      break;
    }
    q = t.return;
  }
}
function Ps(e) {
  for (; q !== null;) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _s(4, t);
          } catch (e) {
            N(t, n, e);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == `function`) {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (e) {
              N(t, i, e);
            }
          }
          var a = t.return;
          try {
            vs(t);
          } catch (e) {
            N(t, a, e);
          }
          break;
        case 5:
          var o = t.return;
          try {
            vs(t);
          } catch (e) {
            N(t, o, e);
          }
      }
    } catch (e) {
      N(t, t.return, e);
    }
    if (t === e) {
      q = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (q = s));
      break;
    }
    q = t.return;
  }
}
function M() {
  return 6 & Y ? I() : sp === -1 ? (sp = I()) : sp;
}
function Fs(e) {
  return 1 & e.mode
    ? 2 & Y && Q !== 0
      ? Q & -Q
      : $d.transition === null
        ? ((e = L),
          e === 0
            ? ((e = r.event), (e = e === void 0 ? 16 : Gr(e.type)), e)
            : e)
        : (cp === 0 && (cp = Er()), cp)
    : 1;
}
function Is(e, t, n, r) {
  if (50 < ap) throw ((ap = 0), (op = null), Error(w(185)));
  (Or(e, n, r),
    (2 & Y && e === X) ||
      (e === X && (!(2 & Y) && (Kf |= n), $ === 4 && Hs(e, Q)),
      Ls(e, r),
      n === 1 && Y === 0 && !(1 & t.mode) && ((Zf = I() + 500), zd && ia())));
}
function Ls(e, t) {
  var n = e.callbackNode;
  wr(e, t);
  var r = Sr(e, e === X ? Q : 0);
  if (r === 0)
    (n !== null && Pl(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pl(n), t === 1))
      (e.tag === 0 ? ra(Us.bind(null, e)) : na(Us.bind(null, e)),
        Ed(function () {
          !(6 & Y) && ia();
        }),
        (n = null));
    else {
      switch (jr(r)) {
        case 1:
          n = Rl;
          break;
        case 4:
          n = zl;
          break;
        case 16:
          n = Bl;
          break;
        case 536870912:
          n = Hl;
          break;
        default:
          n = Bl;
      }
      n = uc(n, Rs.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Rs(e, t) {
  if (((sp = -1), (cp = 0), 6 & Y)) throw Error(w(327));
  var n = e.callbackNode;
  if (ic() && e.callbackNode !== n) return null;
  var r = Sr(e, e === X ? Q : 0);
  if (r === 0) return null;
  if (30 & r || (r & e.expiredLanes) !== 0 || t) t = Zs(e, r);
  else {
    t = r;
    var i = Y;
    Y |= 2;
    var a = Ys();
    (X === e && Q === t) || ((Qf = null), (Zf = I() + 500), qs(e, t));
    do
      try {
        $s();
        break;
      } catch (t) {
        Js(e, t);
      }
    while (1);
    (ya(),
      (zf.current = a),
      (Y = i),
      Z === null ? ((X = null), (Q = 0), (t = $)) : (t = 0));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Tr(e)), i !== 0 && ((r = i), (t = zs(e, i)))), t === 1)
    )
      throw ((n = Wf), qs(e, 0), Hs(e, r), Ls(e, I()), n);
    if (t === 6) Hs(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !Vs(i) &&
          ((t = Zs(e, r)),
          t === 2 && ((a = Tr(e)), a !== 0 && ((r = a), (t = zs(e, a)))),
          t === 1))
      )
        throw ((n = Wf), qs(e, 0), Hs(e, r), Ls(e, I()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          nc(e, Yf, Qf);
          break;
        case 3:
          if (
            (Hs(e, r), (130023424 & r) === r && ((t = Xf + 500 - I()), 10 < t))
          ) {
            if (Sr(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (M(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Cd(nc.bind(null, e, Yf, Qf), t);
            break;
          }
          nc(e, Yf, Qf);
          break;
        case 4:
          if ((Hs(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r;) {
            var o = 31 - Gl(r);
            ((a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a));
          }
          if (
            ((r = i),
            (r = I() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Rf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Cd(nc.bind(null, e, Yf, Qf), r);
            break;
          }
          nc(e, Yf, Qf);
          break;
        case 5:
          nc(e, Yf, Qf);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return (Ls(e, I()), e.callbackNode === n ? Rs.bind(null, e) : null);
}
function zs(e, t) {
  var n = Jf;
  return (
    e.current.memoizedState.isDehydrated && (qs(e, t).flags |= 256),
    (e = Zs(e, t)),
    e !== 2 && ((t = Yf), (Yf = n), t !== null && Bs(t)),
    e
  );
}
function Bs(e) {
  Yf === null ? (Yf = e) : Yf.push.apply(Yf, e);
}
function Vs(e) {
  for (var t = e; ;) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!$u(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Hs(e, t) {
  for (
    t &= ~qf,
      t &= ~Kf,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Gl(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Us(e) {
  if (6 & Y) throw Error(w(327));
  ic();
  var t = Sr(e, 0);
  if (!(1 & t)) return (Ls(e, I()), null);
  var n = Zs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tr(e);
    r !== 0 && ((t = r), (n = zs(e, r)));
  }
  if (n === 1) throw ((n = Wf), qs(e, 0), Hs(e, t), Ls(e, I()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nc(e, Yf, Qf),
    Ls(e, I()),
    null
  );
}
function Ws(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    ((Y = n), Y === 0 && ((Zf = I() + 500), zd && ia()));
  }
}
function Gs(e) {
  rp !== null && rp.tag === 0 && !(6 & Y) && ic();
  var t = Y;
  Y |= 1;
  var n = Vf.transition,
    r = L;
  try {
    if (((Vf.transition = null), (L = 1), e)) return e();
  } finally {
    ((L = r), (Vf.transition = n), (Y = t), !(6 & Y) && ia());
  }
}
function Ks() {
  ((Hf = Uf.current), D(Uf));
}
function qs(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wd(n)), Z !== null))
    for (n = Z.return; n !== null;) {
      var r = n;
      switch ((ca(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Zi());
          break;
        case 3:
          (Ka(), D(z), D(R), Xa());
          break;
        case 5:
          Ja(r);
          break;
        case 4:
          Ka();
          break;
        case 13:
          D(V);
          break;
        case 19:
          D(V);
          break;
        case 10:
          ba(r.type._context);
          break;
        case 22:
        case 23:
          Ks();
      }
      n = n.return;
    }
  if (
    ((X = e),
    (Z = e = hc(e.current, null)),
    (Q = Hf = t),
    ($ = 0),
    (Wf = null),
    (qf = Kf = Gf = 0),
    (Yf = Jf = null),
    af !== null)
  ) {
    for (t = 0; t < af.length; t++)
      if (((n = af[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          ((a.next = i), (r.next = o));
        }
        n.pending = r;
      }
    af = null;
  }
  return e;
}
function Js(e, t) {
  do {
    var n = Z;
    try {
      if ((ya(), (gf.current = Cf), yf)) {
        for (var r = H.memoizedState; r !== null;) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        yf = !1;
      }
      if (
        ((vf = 0),
        (W = U = H = null),
        (bf = !1),
        (xf = 0),
        (Bf.current = null),
        n === null || n.return === null)
      ) {
        (($ = 1), (Wf = t), (Z = null));
        break;
      }
      e: {
        var a = e,
          o = n.return,
          s = n,
          c = t;
        if (
          ((t = Q),
          (s.flags |= 32768),
          typeof c == `object` && c && typeof c.then == `function`)
        ) {
          var l = c,
            u = s,
            d = u.tag;
          if (!(1 & u.mode) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = Vo(o);
          if (p !== null) {
            ((p.flags &= -257),
              Ho(p, o, s, a, t),
              1 & p.mode && Bo(a, l, t),
              (t = p),
              (c = l));
            var m = t.updateQueue;
            if (m === null) {
              var h = new Set();
              (h.add(c), (t.updateQueue = h));
            } else m.add(c);
            break e;
          }
          if (!(1 & t)) {
            (Bo(a, l, t), Xs());
            break e;
          }
          c = Error(w(426));
        } else if (B && 1 & s.mode) {
          var g = Vo(o);
          if (g !== null) {
            (!(65536 & g.flags) && (g.flags |= 256),
              Ho(g, o, s, a, t),
              _a(Fo(c, s)));
            break e;
          }
        }
        ((a = c = Fo(c, s)),
          $ !== 4 && ($ = 2),
          Jf === null ? (Jf = [a]) : Jf.push(a),
          (a = o));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var _ = Ro(a, c, t);
              Ma(a, _);
              break e;
            case 1:
              s = c;
              var v = a.type,
                y = a.stateNode;
              if (
                !(128 & a.flags) &&
                (typeof v.getDerivedStateFromError == `function` ||
                  (y !== null &&
                    typeof y.componentDidCatch == `function` &&
                    (tp === null || !tp.has(y))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var b = zo(a, s, t);
                Ma(a, b);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      tc(n);
    } catch (e) {
      ((t = e), Z === n && n !== null && (Z = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function Ys() {
  var e = zf.current;
  return ((zf.current = Cf), e === null ? Cf : e);
}
function Xs() {
  (($ !== 0 && $ !== 3 && $ !== 2) || ($ = 4),
    X === null || (!(268435455 & Gf) && !(268435455 & Kf)) || Hs(X, Q));
}
function Zs(e, t) {
  var n = Y;
  Y |= 2;
  var r = Ys();
  (X === e && Q === t) || ((Qf = null), qs(e, t));
  do
    try {
      Qs();
      break;
    } catch (t) {
      Js(e, t);
    }
  while (1);
  if ((ya(), (Y = n), (zf.current = r), Z !== null)) throw Error(w(261));
  return ((X = null), (Q = 0), $);
}
function Qs() {
  for (; Z !== null;) ec(Z);
}
function $s() {
  for (; Z !== null && !Fl();) ec(Z);
}
function ec(e) {
  var t = lp(e.alternate, e, Hf);
  ((e.memoizedProps = e.pendingProps),
    t === null ? tc(e) : (Z = t),
    (Bf.current = null));
}
function tc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = fs(n, t)), n !== null)) {
        ((n.flags &= 32767), (Z = n));
        return;
      }
      if (e === null) {
        (($ = 6), (Z = null));
        return;
      }
      ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
    } else if (((n = ds(n, t, Hf)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  $ === 0 && ($ = 5);
}
function nc(e, t, n) {
  var r = L,
    i = Vf.transition;
  try {
    ((Vf.transition = null), (L = 1), rc(e, t, n, r));
  } finally {
    ((Vf.transition = i), (L = r));
  }
  return null;
}
function rc(e, t, n, r) {
  do ic();
  while (rp !== null);
  if (6 & Y) throw Error(w(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = n.lanes | n.childLanes;
  if (
    (kr(e, a),
    e === X && ((Z = X = null), (Q = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      np ||
      ((np = !0),
      uc(Bl, function () {
        return (ic(), null);
      })),
    (a = (15990 & n.flags) != 0),
    15990 & n.subtreeFlags || a)
  ) {
    ((a = Vf.transition), (Vf.transition = null));
    var o = L;
    L = 1;
    var s = Y;
    ((Y |= 4),
      (Bf.current = null),
      hs(e, n),
      Os(n, e),
      xi(Sd),
      (du = !!xd),
      (Sd = xd = null),
      (e.current = n),
      As(n, e, i),
      Il(),
      (Y = s),
      (L = o),
      (Vf.transition = a));
  } else e.current = n;
  if (
    (np && ((np = !1), (rp = e), (ip = i)),
    (a = e.pendingLanes),
    a === 0 && (tp = null),
    yr(n.stateNode, r),
    Ls(e, I()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if ($f) throw (($f = !1), (e = ep), (ep = null), e);
  return (
    1 & ip && e.tag !== 0 && ic(),
    (a = e.pendingLanes),
    1 & a ? (e === op ? ap++ : ((ap = 0), (op = e))) : (ap = 0),
    ia(),
    null
  );
}
function ic() {
  if (rp !== null) {
    var e = jr(ip),
      t = Vf.transition,
      n = L;
    try {
      if (((Vf.transition = null), (L = 16 > e ? 16 : e), rp === null))
        var r = !1;
      else {
        if (((e = rp), (rp = null), (ip = 0), 6 & Y)) throw Error(w(331));
        var i = Y;
        for (Y |= 4, q = e.current; q !== null;) {
          var a = q,
            o = a.child;
          if (16 & q.flags) {
            var s = a.deletions;
            if (s !== null) {
              for (var c = 0; c < s.length; c++) {
                var l = s[c];
                for (q = l; q !== null;) {
                  var u = q;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gs(8, u, a);
                  }
                  var d = u.child;
                  if (d !== null) ((d.return = u), (q = d));
                  else
                    for (; q !== null;) {
                      u = q;
                      var f = u.sibling,
                        p = u.return;
                      if ((ys(u), u === l)) {
                        q = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = p), (q = f));
                        break;
                      }
                      q = p;
                    }
                }
              }
              var m = a.alternate;
              if (m !== null) {
                var h = m.child;
                if (h !== null) {
                  m.child = null;
                  do {
                    var g = h.sibling;
                    ((h.sibling = null), (h = g));
                  } while (h !== null);
                }
              }
              q = a;
            }
          }
          if (2064 & a.subtreeFlags && o !== null) ((o.return = a), (q = o));
          else
            e: for (; q !== null;) {
              if (((a = q), 2048 & a.flags))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gs(9, a, a.return);
                }
              var _ = a.sibling;
              if (_ !== null) {
                ((_.return = a.return), (q = _));
                break e;
              }
              q = a.return;
            }
        }
        var v = e.current;
        for (q = v; q !== null;) {
          o = q;
          var y = o.child;
          if (2064 & o.subtreeFlags && y !== null) ((y.return = o), (q = y));
          else
            e: for (o = v; q !== null;) {
              if (((s = q), 2048 & s.flags))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _s(9, s);
                  }
                } catch (e) {
                  N(s, s.return, e);
                }
              if (s === o) {
                q = null;
                break e;
              }
              var b = s.sibling;
              if (b !== null) {
                ((b.return = s.return), (q = b));
                break e;
              }
              q = s.return;
            }
        }
        if (
          ((Y = i), ia(), Wl && typeof Wl.onPostCommitFiberRoot == `function`)
        )
          try {
            Wl.onPostCommitFiberRoot(Ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((L = n), (Vf.transition = t));
    }
  }
  return !1;
}
function ac(e, t, n) {
  ((t = Fo(n, t)),
    (t = Ro(e, t, 1)),
    (e = Aa(e, t, 1)),
    (t = M()),
    e !== null && (Or(e, 1, t), Ls(e, t)));
}
function N(e, t, n) {
  if (e.tag === 3) ac(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        ac(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == `function` ||
          (typeof r.componentDidCatch == `function` &&
            (tp === null || !tp.has(r)))
        ) {
          ((e = Fo(n, e)),
            (e = zo(t, e, 1)),
            (t = Aa(t, e, 1)),
            (e = M()),
            t !== null && (Or(t, 1, e), Ls(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function oc(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = M()),
    (e.pingedLanes |= e.suspendedLanes & n),
    X === e &&
      (Q & n) === n &&
      ($ === 4 || ($ === 3 && (130023424 & Q) === Q && 500 > I() - Xf)
        ? qs(e, 0)
        : (qf |= n)),
    Ls(e, t));
}
function sc(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = Yl), (Yl <<= 1), !(130023424 & Yl) && (Yl = 4194304))
      : (t = 1));
  var n = M();
  ((e = Ea(e, t)), e !== null && (Or(e, t, n), Ls(e, n)));
}
function cc(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), sc(e, n));
}
function lc(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  (r !== null && r.delete(t), sc(e, n));
}
function uc(e, t) {
  return Nl(e, t);
}
function dc(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function fc(e, t, n, r) {
  return new dc(e, t, n, r);
}
function pc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function mc(e) {
  if (typeof e == `function`) return pc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ol)) return 11;
    if (e === ll) return 14;
  }
  return 2;
}
function hc(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = fc(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gc(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == `function`)) pc(e) && (o = 1);
  else if (typeof e == `string`) o = 5;
  else
    e: switch (e) {
      case tl:
        return _c(n.children, i, a, t);
      case nl:
        ((o = 8), (i |= 8));
        break;
      case rl:
        return (
          (e = fc(12, n, t, 2 | i)),
          (e.elementType = rl),
          (e.lanes = a),
          e
        );
      case sl:
        return ((e = fc(13, n, t, i)), (e.elementType = sl), (e.lanes = a), e);
      case cl:
        return ((e = fc(19, n, t, i)), (e.elementType = cl), (e.lanes = a), e);
      case dl:
        return vc(n, i, a, t);
      default:
        if (typeof e == `object` && e)
          switch (e.$$typeof) {
            case il:
              o = 10;
              break e;
            case al:
              o = 9;
              break e;
            case ol:
              o = 11;
              break e;
            case ll:
              o = 14;
              break e;
            case ul:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ``));
    }
  return (
    (t = fc(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = a),
    t
  );
}
function _c(e, t, n, r) {
  return ((e = fc(7, e, r, t)), (e.lanes = n), e);
}
function vc(e, t, n, r) {
  return (
    (e = fc(22, e, r, t)),
    (e.elementType = dl),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yc(e, t, n) {
  return ((e = fc(6, e, null, t)), (e.lanes = n), e);
}
function bc(e, t, n) {
  return (
    (t = fc(4, e.children === null ? [] : e.children, e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xc(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Dr(0)),
    (this.expirationTimes = Dr(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Dr(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Sc(e, t, n, r, i, a, o, s, c) {
  return (
    (e = new xc(e, t, n, s, c)),
    t === 1 ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
    (a = fc(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Da(a),
    e
  );
}
function Cc(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: el,
    key: r == null ? null : `` + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wc(e) {
  if (!e) return Id;
  e = e._reactInternals;
  e: {
    if (pr(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xi(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xi(n)) return $i(e, n, t);
  }
  return t;
}
function Tc(e, t, n, r, i, a, o, s, c) {
  return (
    (e = Sc(n, r, !0, e, i, a, o, s, c)),
    (e.context = wc(null)),
    (n = e.current),
    (r = M()),
    (i = Fs(n)),
    (a = ka(r, i)),
    (a.callback = t ?? null),
    Aa(n, a, i),
    (e.current.lanes = i),
    Or(e, i, r),
    Ls(e, r),
    e
  );
}
function Ec(e, t, n, r) {
  var i = t.current,
    a = M(),
    o = Fs(i);
  return (
    (n = wc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ka(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Aa(i, t, o)),
    e !== null && (Is(e, i, o, a), ja(e, i, o)),
    o
  );
}
function Dc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function kc(e, t) {
  (Oc(e, t), (e = e.alternate) && Oc(e, t));
}
function Ac() {
  return null;
}
function jc(e) {
  this._internalRoot = e;
}
function Mc(e) {
  this._internalRoot = e;
}
function Nc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
  );
}
function Fc() {}
function Ic(e, t, n, r, i) {
  if (i) {
    if (typeof r == `function`) {
      var a = r;
      r = function () {
        var e = Dc(o);
        a.call(e);
      };
    }
    var o = Tc(t, r, e, 0, null, !1, !1, ``, Fc);
    return (
      (e._reactRootContainer = o),
      (e[Ad] = o.current),
      ki(e.nodeType === 8 ? e.parentNode : e),
      Gs(),
      o
    );
  }
  for (; (i = e.lastChild);) e.removeChild(i);
  if (typeof r == `function`) {
    var s = r;
    r = function () {
      var e = Dc(c);
      s.call(e);
    };
  }
  var c = Sc(e, 0, !1, null, null, !1, !1, ``, Fc);
  return (
    (e._reactRootContainer = c),
    (e[Ad] = c.current),
    ki(e.nodeType === 8 ? e.parentNode : e),
    Gs(function () {
      Ec(t, c, n, r);
    }),
    c
  );
}
function Lc(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == `function`) {
      var s = i;
      i = function () {
        var e = Dc(o);
        s.call(e);
      };
    }
    Ec(t, o, e, i);
  } else o = Ic(n, t, e, i, r);
  return Dc(o);
}
function Rc() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc);
    } catch (e) {
      console.error(e);
    }
}
var zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  P,
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
  F,
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
  I,
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
  L,
  Xl,
  Zl,
  Ql,
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
  R,
  z,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  B,
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
  V,
  hf,
  gf,
  _f,
  vf,
  H,
  U,
  W,
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
  G,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  K,
  Ff,
  q,
  If,
  J,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Y,
  X,
  Z,
  Q,
  Hf,
  Uf,
  $,
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
  Ep,
  Dp,
  Op,
  kp = t(() => {
    if (
      (a(),
      rt(),
      _n(),
      (zc = `default` in o ? y : o),
      (Bc = `default` in vt ? S : vt),
      (Vc = {}),
      (Hc = zc),
      (Uc = Bc),
      (Wc = new Set()),
      (Gc = {}),
      (Kc = !(
        r === void 0 ||
        r.document === void 0 ||
        r.document.createElement === void 0
      )),
      (qc = Object.prototype.hasOwnProperty),
      (Jc =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Yc = {}),
      (Xc = {}),
      (P = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          P[e] = new T(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        P[t] = new T(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(
        function (e) {
          P[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
        },
      ),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        P[e] = new T(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          P[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        P[e] = new T(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        P[e] = new T(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        P[e] = new T(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        P[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Zc = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Zc, wn);
          P[t] = new T(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Zc, wn);
          P[t] = new T(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(Zc, wn);
        P[t] = new T(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1,
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        P[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (P.xlinkHref = new T(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        P[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (Qc = Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      ($c = Symbol.for(`react.element`)),
      (el = Symbol.for(`react.portal`)),
      (tl = Symbol.for(`react.fragment`)),
      (nl = Symbol.for(`react.strict_mode`)),
      (rl = Symbol.for(`react.profiler`)),
      (il = Symbol.for(`react.provider`)),
      (al = Symbol.for(`react.context`)),
      (ol = Symbol.for(`react.forward_ref`)),
      (sl = Symbol.for(`react.suspense`)),
      (cl = Symbol.for(`react.suspense_list`)),
      (ll = Symbol.for(`react.memo`)),
      (ul = Symbol.for(`react.lazy`)),
      (dl = Symbol.for(`react.offscreen`)),
      (fl = Symbol.iterator),
      (F = Object.assign),
      (ml = !1),
      (hl = Array.isArray),
      (_l = (function (e) {
        return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e)
          e.innerHTML = t;
        else {
          for (
            gl ||= document.createElement(`div`),
              gl.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`,
              t = gl.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild);
        }
      })),
      (vl = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (yl = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(vl).forEach(function (e) {
        yl.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)),
            (vl[t] = vl[e]));
        });
      }),
      (bl = F(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
      )),
      (xl = null),
      (Sl = null),
      (Cl = null),
      (wl = null),
      (Tl = !1),
      (El = !1),
      Kc)
    )
      try {
        ((Dl = {}),
          Object.defineProperty(Dl, `passive`, {
            get: function () {
              El = !0;
            },
          }),
          r.addEventListener(`test`, Dl, Dl),
          r.removeEventListener(`test`, Dl, Dl));
      } catch {
        El = !1;
      }
    for (
      Ol = !1,
        kl = null,
        Al = !1,
        jl = null,
        Ml = {
          onError: function (e) {
            ((Ol = !0), (kl = e));
          },
        },
        Nl = Uc.unstable_scheduleCallback,
        Pl = Uc.unstable_cancelCallback,
        Fl = Uc.unstable_shouldYield,
        Il = Uc.unstable_requestPaint,
        I = Uc.unstable_now,
        Ll = Uc.unstable_getCurrentPriorityLevel,
        Rl = Uc.unstable_ImmediatePriority,
        zl = Uc.unstable_UserBlockingPriority,
        Bl = Uc.unstable_NormalPriority,
        Vl = Uc.unstable_LowPriority,
        Hl = Uc.unstable_IdlePriority,
        Ul = null,
        Wl = null,
        Gl = Math.clz32 ? Math.clz32 : br,
        Kl = Math.log,
        ql = Math.LN2,
        Jl = 64,
        Yl = 4194304,
        L = 0,
        tu = !1,
        nu = [],
        ru = null,
        iu = null,
        au = null,
        ou = new Map(),
        su = new Map(),
        cu = [],
        lu =
          `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(
            ` `,
          ),
        uu = Qc.ReactCurrentBatchConfig,
        du = !0,
        fu = null,
        pu = null,
        mu = null,
        hu = null,
        yu = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        bu = Xr(yu),
        xu = F({}, yu, { view: 0, detail: 0 }),
        Su = Xr(xu),
        Cu = F({}, xu, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Qr,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return e.relatedTarget === void 0
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return (`movementX` in e)
              ? e.movementX
              : (e !== vu &&
                  (vu && e.type === `mousemove`
                    ? ((gu = e.screenX - vu.screenX),
                      (_u = e.screenY - vu.screenY))
                    : (_u = gu = 0),
                  (vu = e)),
                gu);
          },
          movementY: function (e) {
            return (`movementY` in e) ? e.movementY : _u;
          },
        }),
        wu = Xr(Cu),
        Tu = Xr(F({}, Cu, { dataTransfer: 0 })),
        Eu = Xr(F({}, xu, { relatedTarget: 0 })),
        Du = Xr(
          F({}, yu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        Ou = Xr(
          F({}, yu, {
            clipboardData: function (e) {
              return (`clipboardData` in e) ? e.clipboardData : r.clipboardData;
            },
          }),
        ),
        ku = Xr(F({}, yu, { data: 0 })),
        Au = {
          Esc: `Escape`,
          Spacebar: ` `,
          Left: `ArrowLeft`,
          Up: `ArrowUp`,
          Right: `ArrowRight`,
          Down: `ArrowDown`,
          Del: `Delete`,
          Win: `OS`,
          Menu: `ContextMenu`,
          Apps: `ContextMenu`,
          Scroll: `ScrollLock`,
          MozPrintableKey: `Unidentified`,
        },
        ju = {
          8: `Backspace`,
          9: `Tab`,
          12: `Clear`,
          13: `Enter`,
          16: `Shift`,
          17: `Control`,
          18: `Alt`,
          19: `Pause`,
          20: `CapsLock`,
          27: `Escape`,
          32: ` `,
          33: `PageUp`,
          34: `PageDown`,
          35: `End`,
          36: `Home`,
          37: `ArrowLeft`,
          38: `ArrowUp`,
          39: `ArrowRight`,
          40: `ArrowDown`,
          45: `Insert`,
          46: `Delete`,
          112: `F1`,
          113: `F2`,
          114: `F3`,
          115: `F4`,
          116: `F5`,
          117: `F6`,
          118: `F7`,
          119: `F8`,
          120: `F9`,
          121: `F10`,
          122: `F11`,
          123: `F12`,
          144: `NumLock`,
          145: `ScrollLock`,
          224: `Meta`,
        },
        Mu = {
          Alt: `altKey`,
          Control: `ctrlKey`,
          Meta: `metaKey`,
          Shift: `shiftKey`,
        },
        Nu = Xr(
          F({}, xu, {
            key: function (e) {
              if (e.key) {
                var t = Au[e.key] || e.key;
                if (t !== `Unidentified`) return t;
              }
              return e.type === `keypress`
                ? ((e = qr(e)), e === 13 ? `Enter` : String.fromCharCode(e))
                : e.type === `keydown` || e.type === `keyup`
                  ? ju[e.keyCode] || `Unidentified`
                  : ``;
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Qr,
            charCode: function (e) {
              return e.type === `keypress` ? qr(e) : 0;
            },
            keyCode: function (e) {
              return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
            },
            which: function (e) {
              return e.type === `keypress`
                ? qr(e)
                : e.type === `keydown` || e.type === `keyup`
                  ? e.keyCode
                  : 0;
            },
          }),
        ),
        Pu = Xr(
          F({}, Cu, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          }),
        ),
        Fu = Xr(
          F({}, xu, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Qr,
          }),
        ),
        Iu = Xr(
          F({}, yu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        Lu = Xr(
          F({}, Cu, {
            deltaX: function (e) {
              return (`deltaX` in e)
                ? e.deltaX
                : (`wheelDeltaX` in e)
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return (`deltaY` in e)
                ? e.deltaY
                : (`wheelDeltaY` in e)
                  ? -e.wheelDeltaY
                  : (`wheelDelta` in e)
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
        ),
        Ru = [9, 13, 27, 32],
        zu = Kc && (`CompositionEvent` in r),
        Bu = null,
        Kc && (`documentMode` in document) && (Bu = document.documentMode),
        Vu = Kc && (`TextEvent` in r) && !Bu,
        Hu = Kc && (!zu || (Bu && 8 < Bu && 11 >= Bu)),
        Uu = ` `,
        Wu = !1,
        Gu = !1,
        Ku = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        },
        qu = null,
        Ju = null,
        Yu = !1,
        Kc &&
          (Kc
            ? ((Zu = (`oninput` in document)),
              (Zu ||=
                ((Qu = document.createElement(`div`)),
                Qu.setAttribute(`oninput`, `return;`),
                typeof Qu.oninput == `function`)),
              (Xu = Zu))
            : (Xu = !1),
          (Yu = Xu && (!document.documentMode || 9 < document.documentMode))),
        $u = typeof Object.is == `function` ? Object.is : mi,
        ed = Kc && (`documentMode` in document) && 11 >= document.documentMode,
        td = null,
        nd = null,
        rd = null,
        id = !1,
        ad = {
          animationend: Ci(`Animation`, `AnimationEnd`),
          animationiteration: Ci(`Animation`, `AnimationIteration`),
          animationstart: Ci(`Animation`, `AnimationStart`),
          transitionend: Ci(`Transition`, `TransitionEnd`),
        },
        od = {},
        sd = {},
        Kc &&
          ((sd = document.createElement(`div`).style),
          (`AnimationEvent` in r) ||
            (delete ad.animationend.animation,
            delete ad.animationiteration.animation,
            delete ad.animationstart.animation),
          (`TransitionEvent` in r) || delete ad.transitionend.transition),
        cd = wi(`animationend`),
        ld = wi(`animationiteration`),
        ud = wi(`animationstart`),
        dd = wi(`transitionend`),
        fd = new Map(),
        pd =
          `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
            ` `,
          ),
        md = 0;
      md < pd.length;
      md++
    )
      ((hd = pd[md]),
        Ti(hd.toLowerCase(), `on` + (hd[0].toUpperCase() + hd.slice(1))));
    if (
      (Ti(cd, `onAnimationEnd`),
      Ti(ld, `onAnimationIteration`),
      Ti(ud, `onAnimationStart`),
      Ti(`dblclick`, `onDoubleClick`),
      Ti(`focusin`, `onFocus`),
      Ti(`focusout`, `onBlur`),
      Ti(dd, `onTransitionEnd`),
      bn(`onMouseEnter`, [`mouseout`, `mouseover`]),
      bn(`onMouseLeave`, [`mouseout`, `mouseover`]),
      bn(`onPointerEnter`, [`pointerout`, `pointerover`]),
      bn(`onPointerLeave`, [`pointerout`, `pointerover`]),
      yn(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      yn(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      yn(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      yn(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      yn(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      yn(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ),
      (gd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        )),
      (_d = new Set(
        `cancel close invalid load scroll toggle`.split(` `).concat(gd),
      )),
      (vd = `_reactListening` + Math.random().toString(36).slice(2)),
      (yd = /\r\n?/g),
      (bd = /\u0000|\uFFFD/g),
      (xd = null),
      (Sd = null),
      (Cd = typeof setTimeout == `function` ? setTimeout : void 0),
      (wd = typeof clearTimeout == `function` ? clearTimeout : void 0),
      (Td = typeof Promise == `function` ? Promise : void 0),
      (Ed =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Td === void 0
            ? Cd
            : function (e) {
                return Td.resolve(null).then(e).catch(Bi);
              }),
      (Dd = Math.random().toString(36).slice(2)),
      (Od = `__reactFiber$` + Dd),
      (kd = `__reactProps$` + Dd),
      (Ad = `__reactContainer$` + Dd),
      (jd = `__reactEvents$` + Dd),
      (Md = `__reactListeners$` + Dd),
      (Nd = `__reactHandles$` + Dd),
      (Pd = []),
      (Fd = -1),
      (Id = {}),
      (R = Ji(Id)),
      (z = Ji(!1)),
      (Ld = Id),
      (Rd = null),
      (zd = !1),
      (Bd = !1),
      (Vd = []),
      (Hd = 0),
      (Ud = null),
      (Wd = 0),
      (Gd = []),
      (Kd = 0),
      (qd = null),
      (Jd = 1),
      (Yd = ``),
      (Xd = null),
      (Zd = null),
      (B = !1),
      (Qd = null),
      ($d = Qc.ReactCurrentBatchConfig),
      (ef = Ji(null)),
      (tf = null),
      (nf = null),
      (rf = null),
      (af = null),
      (of = !1),
      (sf = new Hc.Component().refs),
      (cf = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && pr(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = M(),
            i = Fs(e),
            a = ka(r, i);
          ((a.payload = t),
            n != null && (a.callback = n),
            (t = Aa(e, a, i)),
            t !== null && (Is(t, e, i, r), ja(t, e, i)));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = M(),
            i = Fs(e),
            a = ka(r, i);
          ((a.tag = 1),
            (a.payload = t),
            n != null && (a.callback = n),
            (t = Aa(e, a, i)),
            t !== null && (Is(t, e, i, r), ja(t, e, i)));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = M(),
            r = Fs(e),
            i = ka(n, r);
          ((i.tag = 2),
            t != null && (i.callback = t),
            (t = Aa(e, i, r)),
            t !== null && (Is(t, e, r, n), ja(t, e, r)));
        },
      }),
      (lf = Ua(!0)),
      (uf = Ua(!1)),
      (df = {}),
      (ff = Ji(df)),
      (pf = Ji(df)),
      (mf = Ji(df)),
      (V = Ji(0)),
      (hf = []),
      (gf = Qc.ReactCurrentDispatcher),
      (_f = Qc.ReactCurrentBatchConfig),
      (vf = 0),
      (H = null),
      (U = null),
      (W = null),
      (yf = !1),
      (bf = !1),
      (xf = 0),
      (Sf = 0),
      (Cf = {
        readContext: Ca,
        useCallback: k,
        useContext: k,
        useEffect: k,
        useImperativeHandle: k,
        useInsertionEffect: k,
        useLayoutEffect: k,
        useMemo: k,
        useReducer: k,
        useRef: k,
        useState: k,
        useDebugValue: k,
        useDeferredValue: k,
        useTransition: k,
        useMutableSource: k,
        useSyncExternalStore: k,
        useId: k,
        unstable_isNewReconciler: !1,
      }),
      (wf = {
        readContext: Ca,
        useCallback: function (e, t) {
          return ((eo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Ca,
        useEffect: vo,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = n == null ? null : n.concat([e])),
            go(4194308, 4, So.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return go(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return go(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = eo();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = eo();
          return (
            (t = n === void 0 ? t : n(t)),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = Ao.bind(null, H, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = eo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: po,
        useDebugValue: wo,
        useDeferredValue: function (e) {
          return (eo().memoizedState = e);
        },
        useTransition: function () {
          var e = po(!1),
            t = e[0];
          return ((e = Oo.bind(null, e[1])), (eo().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = H,
            i = eo();
          if (B) {
            if (n === void 0) throw Error(w(407));
            n = n();
          } else {
            if (((n = t()), X === null)) throw Error(w(349));
            30 & vf || so(r, t, n);
          }
          i.memoizedState = n;
          var a = { value: n, getSnapshot: t };
          return (
            (i.queue = a),
            vo(lo.bind(null, r, a, e), [e]),
            (r.flags |= 2048),
            mo(9, co.bind(null, r, a, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = eo(),
            t = X.identifierPrefix;
          if (B) {
            var n = Yd,
              r = Jd;
            ((n = (r & ~(1 << (32 - Gl(r) - 1))).toString(32) + n),
              (t = `:` + t + `R` + n),
              (n = xf++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `:`));
          } else ((n = Sf++), (t = `:` + t + `r` + n.toString(32) + `:`));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      }),
      (Tf = {
        readContext: Ca,
        useCallback: To,
        useContext: Ca,
        useEffect: yo,
        useImperativeHandle: Co,
        useInsertionEffect: bo,
        useLayoutEffect: xo,
        useMemo: Eo,
        useReducer: ro,
        useRef: ho,
        useState: function () {
          return ro(no);
        },
        useDebugValue: wo,
        useDeferredValue: function (e) {
          return Do(to(), U.memoizedState, e);
        },
        useTransition: function () {
          return [ro(no)[0], to().memoizedState];
        },
        useMutableSource: ao,
        useSyncExternalStore: oo,
        useId: ko,
        unstable_isNewReconciler: !1,
      }),
      (Ef = {
        readContext: Ca,
        useCallback: To,
        useContext: Ca,
        useEffect: yo,
        useImperativeHandle: Co,
        useInsertionEffect: bo,
        useLayoutEffect: xo,
        useMemo: Eo,
        useReducer: io,
        useRef: ho,
        useState: function () {
          return io(no);
        },
        useDebugValue: wo,
        useDeferredValue: function (e) {
          var t = to();
          return U === null ? (t.memoizedState = e) : Do(t, U.memoizedState, e);
        },
        useTransition: function () {
          return [io(no)[0], to().memoizedState];
        },
        useMutableSource: ao,
        useSyncExternalStore: oo,
        useId: ko,
        unstable_isNewReconciler: !1,
      }),
      (Df = typeof WeakMap == `function` ? WeakMap : Map),
      (Of = Qc.ReactCurrentOwner),
      (G = !1),
      (kf = { dehydrated: null, treeContext: null, retryLane: 0 }),
      (Af = function (e, t) {
        for (var n = t.child; n !== null;) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      }),
      (jf = function () {}),
      (Mf = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          ((e = t.stateNode), Wa(ff.current));
          var a = null;
          switch (n) {
            case `input`:
              ((i = Rn(e, i)), (r = Rn(e, r)), (a = []));
              break;
            case `select`:
              ((i = F({}, i, { value: void 0 })),
                (r = F({}, r, { value: void 0 })),
                (a = []));
              break;
            case `textarea`:
              ((i = Gn(e, i)), (r = Gn(e, r)), (a = []));
              break;
            default:
              typeof i.onClick != `function` &&
                typeof r.onClick == `function` &&
                (e.onclick = Ri);
          }
          er(n, r);
          var o;
          for (l in ((n = null), i))
            if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null)
              if (l === `style`) {
                var s = i[l];
                for (o in s) s.hasOwnProperty(o) && ((n ||= {}), (n[o] = ``));
              } else
                l !== `dangerouslySetInnerHTML` &&
                  l !== `children` &&
                  l !== `suppressContentEditableWarning` &&
                  l !== `suppressHydrationWarning` &&
                  l !== `autoFocus` &&
                  (Gc.hasOwnProperty(l)
                    ? (a ||= [])
                    : (a ||= []).push(l, null));
          for (l in r) {
            var c = r[l];
            if (
              ((s = i?.[l]),
              r.hasOwnProperty(l) && c !== s && (c != null || s != null))
            )
              if (l === `style`)
                if (s) {
                  for (o in s)
                    !s.hasOwnProperty(o) ||
                      (c && c.hasOwnProperty(o)) ||
                      ((n ||= {}), (n[o] = ``));
                  for (o in c)
                    c.hasOwnProperty(o) &&
                      s[o] !== c[o] &&
                      ((n ||= {}), (n[o] = c[o]));
                } else (n || ((a ||= []), a.push(l, n)), (n = c));
              else
                l === `dangerouslySetInnerHTML`
                  ? ((c = c ? c.__html : void 0),
                    (s = s ? s.__html : void 0),
                    c != null && s !== c && (a ||= []).push(l, c))
                  : l === `children`
                    ? (typeof c != `string` && typeof c != `number`) ||
                      (a ||= []).push(l, `` + c)
                    : l !== `suppressContentEditableWarning` &&
                      l !== `suppressHydrationWarning` &&
                      (Gc.hasOwnProperty(l)
                        ? (c != null && l === `onScroll` && E(`scroll`, e),
                          a || s === c || (a = []))
                        : (a ||= []).push(l, c));
          }
          n && (a ||= []).push(`style`, n);
          var l = a;
          (t.updateQueue = l) && (t.flags |= 4);
        }
      }),
      (Nf = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      }),
      (Pf = !1),
      (K = !1),
      (Ff = typeof WeakSet == `function` ? WeakSet : Set),
      (q = null),
      (If = !1),
      (J = null),
      (Lf = !1),
      (Rf = Math.ceil),
      (zf = Qc.ReactCurrentDispatcher),
      (Bf = Qc.ReactCurrentOwner),
      (Vf = Qc.ReactCurrentBatchConfig),
      (Y = 0),
      (X = null),
      (Z = null),
      (Q = 0),
      (Hf = 0),
      (Uf = Ji(0)),
      ($ = 0),
      (Wf = null),
      (Gf = 0),
      (Kf = 0),
      (qf = 0),
      (Jf = null),
      (Yf = null),
      (Xf = 0),
      (Zf = 1 / 0),
      (Qf = null),
      ($f = !1),
      (ep = null),
      (tp = null),
      (np = !1),
      (rp = null),
      (ip = 0),
      (ap = 0),
      (op = null),
      (sp = -1),
      (cp = 0),
      (lp = function (e, t, n) {
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps || z.current) G = !0;
          else {
            if ((e.lanes & n) === 0 && !(128 & t.flags))
              return ((G = !1), ls(e, t, n));
            G = (131072 & e.flags) != 0;
          }
        else ((G = !1), B && 1048576 & t.flags && oa(t, Wd, t.index));
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            var r = t.type;
            (ss(e, t), (e = t.pendingProps));
            var i = Yi(t, R.current);
            (Sa(t, n), (i = Qa(null, t, r, e, i, n)));
            var a = $a();
            return (
              (t.flags |= 1),
              typeof i == `object` &&
              i &&
              typeof i.render == `function` &&
              i.$$typeof === void 0
                ? ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  Xi(r) ? ((a = !0), ea(t)) : (a = !1),
                  (t.memoizedState =
                    i.state !== null && i.state !== void 0 ? i.state : null),
                  Da(t),
                  (i.updater = cf),
                  (t.stateNode = i),
                  (i._reactInternals = t),
                  za(t, r, e, n),
                  (t = Xo(null, t, r, !0, a, n)))
                : ((t.tag = 0),
                  B && a && sa(t),
                  A(null, t, i, n),
                  (t = t.child)),
              t
            );
          case 16:
            r = t.elementType;
            e: {
              switch (
                (ss(e, t),
                (e = t.pendingProps),
                (i = r._init),
                (r = i(r._payload)),
                (t.type = r),
                (i = t.tag = mc(r)),
                (e = va(r, e)),
                i)
              ) {
                case 0:
                  t = Jo(null, t, r, e, n);
                  break e;
                case 1:
                  t = Yo(null, t, r, e, n);
                  break e;
                case 11:
                  t = Uo(null, t, r, e, n);
                  break e;
                case 14:
                  t = Wo(null, t, r, va(r.type, e), n);
                  break e;
              }
              throw Error(w(306, r, ``));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : va(r, i)),
              Jo(e, t, r, i, n)
            );
          case 1:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : va(r, i)),
              Yo(e, t, r, i, n)
            );
          case 3:
            e: {
              if ((Zo(t), e === null)) throw Error(w(387));
              ((r = t.pendingProps),
                (a = t.memoizedState),
                (i = a.element),
                Oa(e, t),
                Na(t, r, null, n));
              var o = t.memoizedState;
              if (((r = o.element), a.isDehydrated)) {
                if (
                  ((a = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions,
                  }),
                  (t.updateQueue.baseState = a),
                  (t.memoizedState = a),
                  256 & t.flags)
                ) {
                  ((i = Fo(Error(w(423)), t)), (t = Qo(e, t, r, n, i)));
                  break e;
                }
                if (r !== i) {
                  ((i = Fo(Error(w(424)), t)), (t = Qo(e, t, r, n, i)));
                  break e;
                }
                for (
                  Zd = Hi(t.stateNode.containerInfo.firstChild),
                    Xd = t,
                    B = !0,
                    Qd = null,
                    n = uf(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
              } else {
                if ((ga(), r === i)) {
                  t = cs(e, t, n);
                  break e;
                }
                A(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return (
              qa(t),
              e === null && fa(t),
              (r = t.type),
              (i = t.pendingProps),
              (a = e === null ? null : e.memoizedProps),
              (o = i.children),
              zi(r, i) ? (o = null) : a !== null && zi(r, a) && (t.flags |= 32),
              qo(e, t),
              A(e, t, o, n),
              t.child
            );
          case 6:
            return (e === null && fa(t), null);
          case 13:
            return es(e, t, n);
          case 4:
            return (
              Ga(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              e === null ? (t.child = lf(t, null, r, n)) : A(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : va(r, i)),
              Uo(e, t, r, i, n)
            );
          case 7:
            return (A(e, t, t.pendingProps, n), t.child);
          case 8:
            return (A(e, t, t.pendingProps.children, n), t.child);
          case 12:
            return (A(e, t, t.pendingProps.children, n), t.child);
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (i = t.pendingProps),
                (a = t.memoizedProps),
                (o = i.value),
                O(ef, r._currentValue),
                (r._currentValue = o),
                a !== null)
              )
                if ($u(a.value, o)) {
                  if (a.children === i.children && !z.current) {
                    t = cs(e, t, n);
                    break e;
                  }
                } else
                  for (a = t.child, a !== null && (a.return = t); a !== null;) {
                    var s = a.dependencies;
                    if (s !== null) {
                      o = a.child;
                      for (var c = s.firstContext; c !== null;) {
                        if (c.context === r) {
                          if (a.tag === 1) {
                            ((c = ka(-1, n & -n)), (c.tag = 2));
                            var l = a.updateQueue;
                            if (l !== null) {
                              l = l.shared;
                              var u = l.pending;
                              (u === null
                                ? (c.next = c)
                                : ((c.next = u.next), (u.next = c)),
                                (l.pending = c));
                            }
                          }
                          ((a.lanes |= n),
                            (c = a.alternate),
                            c !== null && (c.lanes |= n),
                            xa(a.return, n, t),
                            (s.lanes |= n));
                          break;
                        }
                        c = c.next;
                      }
                    } else if (a.tag === 10)
                      o = a.type === t.type ? null : a.child;
                    else if (a.tag === 18) {
                      if (((o = a.return), o === null)) throw Error(w(341));
                      ((o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        xa(o, n, t),
                        (o = a.sibling));
                    } else o = a.child;
                    if (o !== null) o.return = a;
                    else
                      for (o = a; o !== null;) {
                        if (o === t) {
                          o = null;
                          break;
                        }
                        if (((a = o.sibling), a !== null)) {
                          ((a.return = o.return), (o = a));
                          break;
                        }
                        o = o.return;
                      }
                    a = o;
                  }
              (A(e, t, i.children, n), (t = t.child));
            }
            return t;
          case 9:
            return (
              (i = t.type),
              (r = t.pendingProps.children),
              Sa(t, n),
              (i = Ca(i)),
              (r = r(i)),
              (t.flags |= 1),
              A(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (r = t.type),
              (i = va(r, t.pendingProps)),
              (i = va(r.type, i)),
              Wo(e, t, r, i, n)
            );
          case 15:
            return Go(e, t, t.type, t.pendingProps, n);
          case 17:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : va(r, i)),
              ss(e, t),
              (t.tag = 1),
              Xi(r) ? ((e = !0), ea(t)) : (e = !1),
              Sa(t, n),
              La(t, r, i),
              za(t, r, i, n),
              Xo(null, t, r, !0, e, n)
            );
          case 19:
            return os(e, t, n);
          case 22:
            return Ko(e, t, n);
        }
        throw Error(w(156, t.tag));
      }),
      (up =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              console.error(e);
            }),
      (Mc.prototype.render = jc.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (t === null) throw Error(w(409));
          Ec(e, t, null, null);
        }),
      (Mc.prototype.unmount = jc.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (Gs(function () {
              Ec(null, e, null, null);
            }),
              (t[Ad] = null));
          }
        }),
      (Mc.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = $l();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < cu.length && t !== 0 && t < cu[n].priority; n++);
          (cu.splice(n, 0, e), n === 0 && Fr(e));
        }
      }),
      (Xl = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = xr(t.pendingLanes);
              n !== 0 &&
                (Ar(t, 1 | n),
                Ls(t, I()),
                !(6 & Y) && ((Zf = I() + 500), ia()));
            }
            break;
          case 13:
            (Gs(function () {
              var t = Ea(e, 1);
              t !== null && Is(t, e, 1, M());
            }),
              kc(e, 1));
        }
      }),
      (Zl = function (e) {
        if (e.tag === 13) {
          var t = Ea(e, 134217728);
          (t !== null && Is(t, e, 134217728, M()), kc(e, 134217728));
        }
      }),
      (Ql = function (e) {
        if (e.tag === 13) {
          var t = Fs(e),
            n = Ea(e, t);
          (n !== null && Is(n, e, t, M()), kc(e, t));
        }
      }),
      ($l = function () {
        return L;
      }),
      (eu = function (e, t) {
        var n = L;
        try {
          return ((L = e), t());
        } finally {
          L = n;
        }
      }),
      (Sl = function (e, t, n) {
        switch (t) {
          case `input`:
            if ((Vn(e, n), (t = n.name), n.type === `radio` && t != null)) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name=` + JSON.stringify(`` + t) + `][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = qi(r);
                  if (!i) throw Error(w(90));
                  (In(r), Vn(r, i));
                }
              }
            }
            break;
          case `textarea`:
            qn(e, n);
            break;
          case `select`:
            ((t = n.value), t != null && Wn(e, !!n.multiple, t, !1));
        }
      }),
      (or = Ws),
      (sr = Gs),
      (dp = { usingClientEntryPoint: !1, Events: [Gi, Ki, qi, ir, ar, Ws] }),
      (fp = {
        findFiberByHostInstance: Wi,
        bundleType: 0,
        version: `18.2.0`,
        rendererPackageName: `react-dom`,
      }),
      (pp = {
        bundleType: fp.bundleType,
        version: fp.version,
        rendererPackageName: fp.rendererPackageName,
        rendererConfig: fp.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Qc.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = _r(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: fp.findFiberByHostInstance || Ac,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: `18.2.0-next-9e3b772b8-20220608`,
      }),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        ((mp = __REACT_DEVTOOLS_GLOBAL_HOOK__),
        !mp.isDisabled && mp.supportsFiber))
    )
      try {
        ((Ul = mp.inject(pp)), (Wl = mp));
      } catch {}
    ((Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp),
      (Vc.createPortal = function (e, t) {
        var n =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Nc(t)) throw Error(w(200));
        return Cc(e, t, null, n);
      }),
      (Vc.createRoot = function (e, t) {
        if (!Nc(e)) throw Error(w(299));
        var n = !1,
          r = ``,
          i = up;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
          (t = Sc(e, 1, !1, null, null, n, !1, r, i)),
          (e[Ad] = t.current),
          ki(e.nodeType === 8 ? e.parentNode : e),
          new jc(t)
        );
      }),
      (Vc.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == `function`
            ? Error(w(188))
            : ((e = Object.keys(e).join(`,`)), Error(w(268, e)));
        return ((e = _r(t)), (e = e === null ? null : e.stateNode), e);
      }),
      (Vc.flushSync = function (e) {
        return Gs(e);
      }),
      (Vc.hydrate = function (e, t, n) {
        if (!Pc(t)) throw Error(w(200));
        return Lc(null, e, t, !0, n);
      }),
      (Vc.hydrateRoot = function (e, t, n) {
        if (!Nc(e)) throw Error(w(405));
        var r = (n != null && n.hydratedSources) || null,
          i = !1,
          a = ``,
          o = up;
        if (
          (n != null &&
            (!0 === n.unstable_strictMode && (i = !0),
            n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
          (t = Tc(t, null, e, 1, n ?? null, i, !1, a, o)),
          (e[Ad] = t.current),
          ki(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            ((n = r[e]),
              (i = n._getVersion),
              (i = i(n._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [n, i])
                : t.mutableSourceEagerHydrationData.push(n, i));
        return new Mc(t);
      }),
      (Vc.render = function (e, t, n) {
        if (!Pc(t)) throw Error(w(200));
        return Lc(null, e, t, !1, n);
      }),
      (Vc.unmountComponentAtNode = function (e) {
        if (!Pc(e)) throw Error(w(40));
        return (
          !!e._reactRootContainer &&
          (Gs(function () {
            Lc(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ad] = null));
            });
          }),
          !0)
        );
      }),
      (Vc.unstable_batchedUpdates = Ws),
      (Vc.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Pc(n)) throw Error(w(200));
        if (e == null || e._reactInternals === void 0) throw Error(w(38));
        return Lc(e, t, n, !1, r);
      }),
      (Vc.version = `18.2.0-next-9e3b772b8-20220608`),
      Rc(),
      (hp = Vc),
      (gp = hp),
      (_p = hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (vp = hp.createPortal),
      (yp = hp.createRoot),
      (bp = hp.findDOMNode),
      (xp = hp.flushSync),
      (Sp = hp.hydrate),
      (Cp = hp.hydrateRoot),
      (wp = hp.render),
      (Tp = hp.unmountComponentAtNode),
      (Ep = hp.unstable_batchedUpdates),
      (Dp = hp.unstable_renderSubtreeIntoContainer),
      (Op = hp.version));
  }),
  Ap,
  jp,
  Mp,
  Np,
  Pp,
  Fp = t(() => {
    (kp(),
      (Ap = `default` in vn ? gp : vn),
      (jp = {}),
      (Mp = Ap),
      (jp.createRoot = Mp.createRoot),
      (jp.hydrateRoot = Mp.hydrateRoot),
      (Np = jp.createRoot),
      (Pp = jp.hydrateRoot));
  });
export {
  He as A,
  Ye as C,
  o as D,
  Se as E,
  $e as F,
  je as I,
  a as L,
  Ve as M,
  Ge as N,
  Qe as O,
  we as P,
  n as R,
  y as S,
  rt as T,
  Re as _,
  kp as a,
  Ke as b,
  mt as c,
  gt as d,
  Me as f,
  Oe as g,
  Le as h,
  vp as i,
  Xe as j,
  Ae as k,
  ht as l,
  Ie as m,
  Fp as n,
  _t as o,
  Ce as p,
  Np as r,
  it as s,
  Pp as t,
  st as u,
  Fe as v,
  Je as w,
  et as x,
  ze as y,
  r as z,
};
//# sourceMappingURL=react.mjs.map
