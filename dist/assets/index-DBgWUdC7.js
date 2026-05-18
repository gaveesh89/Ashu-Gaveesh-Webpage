(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: true, subtree: true });
  function n(l) {
    const i = {};
    return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(l) {
    if (l.ep) return;
    l.ep = true;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yu = { exports: {} }, rl = {}, Xu = { exports: {} }, T = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Zn = Symbol.for("react.element"), uc = Symbol.for("react.portal"), sc = Symbol.for("react.fragment"), ac = Symbol.for("react.strict_mode"), cc = Symbol.for("react.profiler"), fc = Symbol.for("react.provider"), dc = Symbol.for("react.context"), pc = Symbol.for("react.forward_ref"), mc = Symbol.for("react.suspense"), hc = Symbol.for("react.memo"), vc = Symbol.for("react.lazy"), Uo = Symbol.iterator;
function gc(e) {
  return e === null || typeof e != "object" ? null : (e = Uo && e[Uo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Gu = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zu = Object.assign, Ju = {};
function ln(e, t, n) {
  this.props = e, this.context = t, this.refs = Ju, this.updater = n || Gu;
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {
}
qu.prototype = ln.prototype;
function Wi(e, t, n) {
  this.props = e, this.context = t, this.refs = Ju, this.updater = n || Gu;
}
var Vi = Wi.prototype = new qu();
Vi.constructor = Wi;
Zu(Vi, ln.prototype);
Vi.isPureReactComponent = true;
var Ao = Array.isArray, bu = Object.prototype.hasOwnProperty, Hi = { current: null }, es = { key: true, ref: true, __self: true, __source: true };
function ts(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) bu.call(t, r) && !es.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Zn, type: e, key: i, ref: o, props: l, _owner: Hi.current };
}
function yc(e, t) {
  return { $$typeof: Zn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var $o = /\/+/g;
function Sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = false;
  if (e === null) o = true;
  else switch (i) {
    case "string":
    case "number":
      o = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case Zn:
        case uc:
          o = true;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Sl(o, 0) : r, Ao(l) ? (n = "", e != null && (n = e.replace($o, "$&/") + "/"), xr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Qi(l) && (l = yc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace($o, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ao(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Sl(i, u);
    o += xr(i, t, n, s, l);
  }
  else if (s = gc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Sl(i, u++), o += xr(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return xr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function xc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null }, kr = { transition: null }, kc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: kr, ReactCurrentOwner: Hi };
function ns() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: rr, forEach: function(e, t, n) {
  rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = ln;
T.Fragment = sc;
T.Profiler = cc;
T.PureComponent = Wi;
T.StrictMode = ac;
T.Suspense = mc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
T.act = ns;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zu({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Hi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) bu.call(t, s) && !es.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function(e) {
  return e = { $$typeof: dc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: fc, _context: e }, e.Consumer = e;
};
T.createElement = ts;
T.createFactory = function(e) {
  var t = ts.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: pc, render: e };
};
T.isValidElement = Qi;
T.lazy = function(e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: xc };
};
T.memo = function(e, t) {
  return { $$typeof: hc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function(e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
T.unstable_act = ns;
T.useCallback = function(e, t) {
  return ue.current.useCallback(e, t);
};
T.useContext = function(e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return ue.current.useEffect(e, t);
};
T.useId = function() {
  return ue.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return ue.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return ue.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return ue.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return ue.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return ue.current.useRef(e);
};
T.useState = function(e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return ue.current.useTransition();
};
T.version = "18.3.1";
Xu.exports = T;
var Rn = Xu.exports;
const Sc = oc(Rn);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ec = Rn, Nc = Symbol.for("react.element"), _c = Symbol.for("react.fragment"), Cc = Object.prototype.hasOwnProperty, Pc = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jc = { key: true, ref: true, __self: true, __source: true };
function rs(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Cc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Nc, type: e, key: i, ref: o, props: l, _owner: Pc.current };
}
rl.Fragment = _c;
rl.jsx = rs;
rl.jsxs = rs;
Yu.exports = rl;
var h = Yu.exports, Gl = {}, ls = { exports: {} }, ye = {}, is = { exports: {} }, os = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(N, j) {
    var z = N.length;
    N.push(j);
    e: for (; 0 < z; ) {
      var H = z - 1 >>> 1, G = N[H];
      if (0 < l(G, j)) N[H] = j, N[z] = G, z = H;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var j = N[0], z = N.pop();
    if (z !== j) {
      N[0] = z;
      e: for (var H = 0, G = N.length, tr = G >>> 1; H < tr; ) {
        var vt = 2 * (H + 1) - 1, kl = N[vt], gt = vt + 1, nr = N[gt];
        if (0 > l(kl, z)) gt < G && 0 > l(nr, kl) ? (N[H] = nr, N[gt] = z, H = gt) : (N[H] = kl, N[vt] = z, H = vt);
        else if (gt < G && 0 > l(nr, z)) N[H] = nr, N[gt] = z, H = gt;
        else break e;
      }
    }
    return j;
  }
  function l(N, j) {
    var z = N.sortIndex - j.sortIndex;
    return z !== 0 ? z : N.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var s = [], c = [], v = 1, m = null, p = 3, w = false, x = false, k = false, I = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= N) r(c), j.sortIndex = j.expirationTime, t(s, j);
      else break;
      j = n(c);
    }
  }
  function g(N) {
    if (k = false, d(N), !x) if (n(s) !== null) x = true, wl(E);
    else {
      var j = n(c);
      j !== null && xl(g, j.startTime - N);
    }
  }
  function E(N, j) {
    x = false, k && (k = false, f(P), P = -1), w = true;
    var z = p;
    try {
      for (d(j), m = n(s); m !== null && (!(m.expirationTime > j) || N && !Ce()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var G = H(m.expirationTime <= j);
          j = e.unstable_now(), typeof G == "function" ? m.callback = G : m === n(s) && r(s), d(j);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var tr = true;
      else {
        var vt = n(c);
        vt !== null && xl(g, vt.startTime - j), tr = false;
      }
      return tr;
    } finally {
      m = null, p = z, w = false;
    }
  }
  var _ = false, C = null, P = -1, V = 5, L = -1;
  function Ce() {
    return !(e.unstable_now() - L < V);
  }
  function sn() {
    if (C !== null) {
      var N = e.unstable_now();
      L = N;
      var j = true;
      try {
        j = C(true, N);
      } finally {
        j ? an() : (_ = false, C = null);
      }
    } else _ = false;
  }
  var an;
  if (typeof a == "function") an = function() {
    a(sn);
  };
  else if (typeof MessageChannel < "u") {
    var Io = new MessageChannel(), ic = Io.port2;
    Io.port1.onmessage = sn, an = function() {
      ic.postMessage(null);
    };
  } else an = function() {
    I(sn, 0);
  };
  function wl(N) {
    C = N, _ || (_ = true, an());
  }
  function xl(N, j) {
    P = I(function() {
      N(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    x || w || (x = true, wl(E));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(N) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = p;
    }
    var z = p;
    p = j;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, j) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var z = p;
    p = N;
    try {
      return j();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(N, j, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, N) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = z + G, N = { id: v++, callback: j, priorityLevel: N, startTime: z, expirationTime: G, sortIndex: -1 }, z > H ? (N.sortIndex = z, t(c, N), n(s) === null && N === n(c) && (k ? (f(P), P = -1) : k = true, xl(g, z - H))) : (N.sortIndex = G, t(s, N), x || w || (x = true, wl(E))), N;
  }, e.unstable_shouldYield = Ce, e.unstable_wrapCallback = function(N) {
    var j = p;
    return function() {
      var z = p;
      p = j;
      try {
        return N.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(os);
is.exports = os;
var zc = is.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Tc = Rn, ge = zc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var us = /* @__PURE__ */ new Set(), On = {};
function Tt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) us.add(t[e]);
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zl = Object.prototype.hasOwnProperty, Lc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Bo = {}, Wo = {};
function Rc(e) {
  return Zl.call(Wo, e) ? true : Zl.call(Bo, e) ? false : Lc.test(e) ? Wo[e] = true : (Bo[e] = true, false);
}
function Oc(e, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return false;
  }
}
function Mc(e, t, n, r) {
  if (t === null || typeof t > "u" || Oc(e, t, n, r)) return true;
  if (r) return false;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function se(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ee[e] = new se(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ee[t] = new se(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ee[e] = new se(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ee[e] = new se(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ee[e] = new se(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ee[e] = new se(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function(e) {
  ee[e] = new se(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ee[e] = new se(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function(e) {
  ee[e] = new se(e, 5, false, e.toLowerCase(), null, false, false);
});
var Ki = /[\-:]([a-z])/g;
function Yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Ki, Yi);
  ee[t] = new se(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ki, Yi);
  ee[t] = new se(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ki, Yi);
  ee[t] = new se(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, false, e.toLowerCase(), null, false, false);
});
ee.xlinkHref = new se("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, false, e.toLowerCase(), null, true, true);
});
function Xi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Mc(t, n, l, r) && (n = null), r || l === null ? Rc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lr = Symbol.for("react.element"), Ot = Symbol.for("react.portal"), Mt = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), Jl = Symbol.for("react.profiler"), ss = Symbol.for("react.provider"), as = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), ql = Symbol.for("react.suspense"), bl = Symbol.for("react.suspense_list"), Ji = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), cs = Symbol.for("react.offscreen"), Vo = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object" ? null : (e = Vo && e[Vo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, El;
function yn(e) {
  if (El === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    El = t && t[1] || "";
  }
  return `
` + El + e;
}
var Nl = false;
function _l(e, t) {
  if (!e || Nl) return "";
  Nl = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1) do
          if (o--, u--, 0 > u || l[o] !== i[u]) {
            var s = `
` + l[o].replace(" at new ", " at ");
            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
          }
        while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    Nl = false, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? yn(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn("Lazy");
    case 13:
      return yn("Suspense");
    case 19:
      return yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _l(e.type, false), e;
    case 11:
      return e = _l(e.type.render, false), e;
    case 1:
      return e = _l(e.type, true), e;
    default:
      return "";
  }
}
function ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mt:
      return "Fragment";
    case Ot:
      return "Portal";
    case Jl:
      return "Profiler";
    case Gi:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case as:
      return (e.displayName || "Context") + ".Consumer";
    case ss:
      return (e._context.displayName || "Context") + ".Provider";
    case Zi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ji:
      return t = e.displayName || null, t !== null ? t : ei(e.type) || "Memo";
    case Je:
      t = e._payload, e = e._init;
      try {
        return ei(e(t));
      } catch {
      }
  }
  return null;
}
function Fc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ei(t);
    case 8:
      return t === Gi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ic(e) {
  var t = fs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: true, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Ic(e));
}
function ds(e) {
  if (!e) return false;
  var t = e._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e && (r = fs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
}
function Or(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ti(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ho(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ft(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ps(e, t) {
  t = t.checked, t != null && Xi(e, "checked", t, false);
}
function ni(e, t) {
  ps(e, t);
  var n = ft(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ri(e, t.type, n) : t.hasOwnProperty("defaultValue") && ri(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ri(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Qt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = true, r && (e[l].defaultSelected = true);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = true);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ko(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ms(e, t) {
  var n = ft(t.value), r = ft(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Yo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? hs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var or, vs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function(e) {
  Uc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), En[t] = En[e];
  });
});
function gs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || En.hasOwnProperty(e) && En[e] ? ("" + t).trim() : t + "px";
}
function ys(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = gs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ac = B({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function oi(e, t) {
  if (t) {
    if (Ac[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ui(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var si = null;
function qi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ai = null, Kt = null, Yt = null;
function Xo(e) {
  if (e = bn(e)) {
    if (typeof ai != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = sl(t), ai(e.stateNode, e.type, t));
  }
}
function ws(e) {
  Kt ? Yt ? Yt.push(e) : Yt = [e] : Kt = e;
}
function xs() {
  if (Kt) {
    var e = Kt, t = Yt;
    if (Yt = Kt = null, Xo(e), t) for (e = 0; e < t.length; e++) Xo(t[e]);
  }
}
function ks(e, t) {
  return e(t);
}
function Ss() {
}
var Cl = false;
function Es(e, t, n) {
  if (Cl) return e(t, n);
  Cl = true;
  try {
    return ks(e, t, n);
  } finally {
    Cl = false, (Kt !== null || Yt !== null) && (Ss(), xs());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = false;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ci = false;
if (Qe) try {
  var fn = {};
  Object.defineProperty(fn, "passive", { get: function() {
    ci = true;
  } }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
} catch {
  ci = false;
}
function $c(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var Nn = false, Mr = null, Dr = false, fi = null, Bc = { onError: function(e) {
  Nn = true, Mr = e;
} };
function Wc(e, t, n, r, l, i, o, u, s) {
  Nn = false, Mr = null, $c.apply(Bc, arguments);
}
function Vc(e, t, n, r, l, i, o, u, s) {
  if (Wc.apply(this, arguments), Nn) {
    if (Nn) {
      var c = Mr;
      Nn = false, Mr = null;
    } else throw Error(y(198));
    Dr || (Dr = true, fi = c);
  }
}
function Lt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ns(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Go(e) {
  if (Lt(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Lt(e), t === null) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Go(l), e;
        if (i === r) return Go(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = false, u = l.child; u; ) {
        if (u === n) {
          o = true, n = l, r = i;
          break;
        }
        if (u === r) {
          o = true, r = l, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = true, n = i, r = l;
            break;
          }
          if (u === r) {
            o = true, r = i, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function _s(e) {
  return e = Hc(e), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ps = ge.unstable_scheduleCallback, Zo = ge.unstable_cancelCallback, Qc = ge.unstable_shouldYield, Kc = ge.unstable_requestPaint, Q = ge.unstable_now, Yc = ge.unstable_getCurrentPriorityLevel, bi = ge.unstable_ImmediatePriority, js = ge.unstable_UserBlockingPriority, Fr = ge.unstable_NormalPriority, Xc = ge.unstable_LowPriority, zs = ge.unstable_IdlePriority, ll = null, Ie = null;
function Gc(e) {
  if (Ie && typeof Ie.onCommitFiberRoot == "function") try {
    Ie.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Le = Math.clz32 ? Math.clz32 : qc, Zc = Math.log, Jc = Math.LN2;
function qc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zc(e) / Jc | 0) | 0;
}
var ur = 64, sr = 4194304;
function xn(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = xn(u) : (i &= o, i !== 0 && (r = xn(i)));
  } else o = n & ~l, o !== 0 ? r = xn(o) : i !== 0 && (r = xn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Le(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function bc(e, t) {
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
function ef(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Le(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = bc(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function di(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ts() {
  var e = ur;
  return ur <<= 1, !(ur & 4194240) && (ur = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Le(t), e[t] = n;
}
function tf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Le(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function eo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Le(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Ls(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Rs, to, Os, Ms, Ds, pi = false, ar = [], rt = null, lt = null, it = null, Fn = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), be = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      Fn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function dn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = bn(t), t !== null && to(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function rf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return rt = dn(rt, e, t, n, r, l), true;
    case "dragenter":
      return lt = dn(lt, e, t, n, r, l), true;
    case "mouseover":
      return it = dn(it, e, t, n, r, l), true;
    case "pointerover":
      var i = l.pointerId;
      return Fn.set(i, dn(Fn.get(i) || null, e, t, n, r, l)), true;
    case "gotpointercapture":
      return i = l.pointerId, In.set(i, dn(In.get(i) || null, e, t, n, r, l)), true;
  }
  return false;
}
function Fs(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Lt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ns(n), t !== null) {
          e.blockedOn = t, Ds(e.priority, function() {
            Os(n);
          });
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
function Sr(e) {
  if (e.blockedOn !== null) return false;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      si = r, n.target.dispatchEvent(r), si = null;
    } else return t = bn(n), t !== null && to(t), e.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function qo(e, t, n) {
  Sr(e) && n.delete(t);
}
function lf() {
  pi = false, rt !== null && Sr(rt) && (rt = null), lt !== null && Sr(lt) && (lt = null), it !== null && Sr(it) && (it = null), Fn.forEach(qo), In.forEach(qo);
}
function pn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, pi || (pi = true, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, lf)));
}
function Un(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < ar.length) {
    pn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rt !== null && pn(rt, e), lt !== null && pn(lt, e), it !== null && pn(it, e), Fn.forEach(t), In.forEach(t), n = 0; n < be.length; n++) r = be[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && (n = be[0], n.blockedOn === null); ) Fs(n), n.blockedOn === null && be.shift();
}
var Xt = Ge.ReactCurrentBatchConfig, Ur = true;
function of(e, t, n, r) {
  var l = O, i = Xt.transition;
  Xt.transition = null;
  try {
    O = 1, no(e, t, n, r);
  } finally {
    O = l, Xt.transition = i;
  }
}
function uf(e, t, n, r) {
  var l = O, i = Xt.transition;
  Xt.transition = null;
  try {
    O = 4, no(e, t, n, r);
  } finally {
    O = l, Xt.transition = i;
  }
}
function no(e, t, n, r) {
  if (Ur) {
    var l = mi(e, t, n, r);
    if (l === null) Il(e, t, r, Ar, n), Jo(e, r);
    else if (rf(l, e, t, n, r)) r.stopPropagation();
    else if (Jo(e, r), t & 4 && -1 < nf.indexOf(e)) {
      for (; l !== null; ) {
        var i = bn(l);
        if (i !== null && Rs(i), i = mi(e, t, n, r), i === null && Il(e, t, r, Ar, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var Ar = null;
function mi(e, t, n, r) {
  if (Ar = null, e = qi(r), e = xt(e), e !== null) if (t = Lt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ns(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ar = e, null;
}
function Is(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Yc()) {
        case bi:
          return 1;
        case js:
          return 4;
        case Fr:
        case Xc:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null, ro = null, Er = null;
function Us() {
  if (Er) return Er;
  var e, t = ro, n = t.length, r, l = "value" in tt ? tt.value : tt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Er = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Nr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function cr() {
  return true;
}
function bo() {
  return false;
}
function we(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? cr : bo, this.isPropagationStopped = bo, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = cr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = cr);
  }, persist: function() {
  }, isPersistent: cr }), t;
}
var on = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, lo = we(on), qn = B({}, on, { view: 0, detail: 0 }), sf = we(qn), jl, zl, mn, il = B({}, qn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: io, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mn && (mn && e.type === "mousemove" ? (jl = e.screenX - mn.screenX, zl = e.screenY - mn.screenY) : zl = jl = 0, mn = e), jl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zl;
} }), eu = we(il), af = B({}, il, { dataTransfer: 0 }), cf = we(af), ff = B({}, qn, { relatedTarget: 0 }), Tl = we(ff), df = B({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pf = we(df), mf = B({}, on, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hf = we(mf), vf = B({}, on, { data: 0 }), tu = we(vf), gf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, yf = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wf[e]) ? !!t[e] : false;
}
function io() {
  return xf;
}
var kf = B({}, qn, { key: function(e) {
  if (e.key) {
    var t = gf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Nr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: io, charCode: function(e) {
  return e.type === "keypress" ? Nr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Sf = we(kf), Ef = B({}, il, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nu = we(Ef), Nf = B({}, qn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: io }), _f = we(Nf), Cf = B({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pf = we(Cf), jf = B({}, il, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), zf = we(jf), Tf = [9, 13, 27, 32], oo = Qe && "CompositionEvent" in window, _n = null;
Qe && "documentMode" in document && (_n = document.documentMode);
var Lf = Qe && "TextEvent" in window && !_n, As = Qe && (!oo || _n && 8 < _n && 11 >= _n), ru = " ", lu = false;
function $s(e, t) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function Bs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dt = false;
function Rf(e, t) {
  switch (e) {
    case "compositionend":
      return Bs(t);
    case "keypress":
      return t.which !== 32 ? null : (lu = true, ru);
    case "textInput":
      return e = t.data, e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Of(e, t) {
  if (Dt) return e === "compositionend" || !oo && $s(e, t) ? (e = Us(), Er = ro = tt = null, Dt = false, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return As && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mf = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mf[e.type] : t === "textarea";
}
function Ws(e, t, n, r) {
  ws(r), t = $r(t, "onChange"), 0 < t.length && (n = new lo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Cn = null, An = null;
function Df(e) {
  bs(e, 0);
}
function ol(e) {
  var t = Ut(e);
  if (ds(t)) return e;
}
function Ff(e, t) {
  if (e === "change") return t;
}
var Vs = false;
if (Qe) {
  var Ll;
  if (Qe) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var ou = document.createElement("div");
      ou.setAttribute("oninput", "return;"), Rl = typeof ou.oninput == "function";
    }
    Ll = Rl;
  } else Ll = false;
  Vs = Ll && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  Cn && (Cn.detachEvent("onpropertychange", Hs), An = Cn = null);
}
function Hs(e) {
  if (e.propertyName === "value" && ol(An)) {
    var t = [];
    Ws(t, An, e, qi(e)), Es(Df, t);
  }
}
function If(e, t, n) {
  e === "focusin" ? (uu(), Cn = t, An = n, Cn.attachEvent("onpropertychange", Hs)) : e === "focusout" && uu();
}
function Uf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol(An);
}
function Af(e, t) {
  if (e === "click") return ol(t);
}
function $f(e, t) {
  if (e === "input" || e === "change") return ol(t);
}
function Bf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Oe = typeof Object.is == "function" ? Object.is : Bf;
function $n(e, t) {
  if (Oe(e, t)) return true;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !Oe(e[l], t[l])) return false;
  }
  return true;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, t) {
  var n = su(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = su(n);
  }
}
function Qs(e, t) {
  return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Qs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
}
function Ks() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wf(e) {
  var t = Ks(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qs(n.ownerDocument.documentElement, n)) {
    if (r !== null && uo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = au(n, i);
        var o = au(n, r);
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Vf = Qe && "documentMode" in document && 11 >= document.documentMode, Ft = null, hi = null, Pn = null, vi = false;
function cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vi || Ft == null || Ft !== Or(r) || (r = Ft, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pn && $n(Pn, r) || (Pn = r, r = $r(hi, "onSelect"), 0 < r.length && (t = new lo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ft)));
}
function fr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var It = { animationend: fr("Animation", "AnimationEnd"), animationiteration: fr("Animation", "AnimationIteration"), animationstart: fr("Animation", "AnimationStart"), transitionend: fr("Transition", "TransitionEnd") }, Ol = {}, Ys = {};
Qe && (Ys = document.createElement("div").style, "AnimationEvent" in window || (delete It.animationend.animation, delete It.animationiteration.animation, delete It.animationstart.animation), "TransitionEvent" in window || delete It.transitionend.transition);
function ul(e) {
  if (Ol[e]) return Ol[e];
  if (!It[e]) return e;
  var t = It[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ys) return Ol[e] = t[n];
  return e;
}
var Xs = ul("animationend"), Gs = ul("animationiteration"), Zs = ul("animationstart"), Js = ul("transitionend"), qs = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pt(e, t) {
  qs.set(e, t), Tt(t, [e]);
}
for (var Ml = 0; Ml < fu.length; Ml++) {
  var Dl = fu[Ml], Hf = Dl.toLowerCase(), Qf = Dl[0].toUpperCase() + Dl.slice(1);
  pt(Hf, "on" + Qf);
}
pt(Xs, "onAnimationEnd");
pt(Gs, "onAnimationIteration");
pt(Zs, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Js, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function du(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Vc(r, t, void 0, e), e.currentTarget = null;
}
function bs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        du(l, u, c), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        du(l, u, c), i = s;
      }
    }
  }
  if (Dr) throw e = fi, Dr = false, fi = null, e;
}
function D(e, t) {
  var n = t[ki];
  n === void 0 && (n = t[ki] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ea(t, e, 2, false), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), ea(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[dr]) {
    e[dr] = true, us.forEach(function(n) {
      n !== "selectionchange" && (Kf.has(n) || Fl(n, false, e), Fl(n, true, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || (t[dr] = true, Fl("selectionchange", false, t));
  }
}
function ea(e, t, n, r) {
  switch (Is(t)) {
    case 1:
      var l = of;
      break;
    case 4:
      l = uf;
      break;
    default:
      l = no;
  }
  n = l.bind(null, t, n, e), l = void 0, !ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
}
function Il(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = xt(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Es(function() {
    var c = i, v = qi(n), m = [];
    e: {
      var p = qs.get(e);
      if (p !== void 0) {
        var w = lo, x = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Sf;
            break;
          case "focusin":
            x = "focus", w = Tl;
            break;
          case "focusout":
            x = "blur", w = Tl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = cf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = _f;
            break;
          case Xs:
          case Gs:
          case Zs:
            w = pf;
            break;
          case Js:
            w = Pf;
            break;
          case "scroll":
            w = sf;
            break;
          case "wheel":
            w = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = hf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = nu;
        }
        var k = (t & 4) !== 0, I = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, f !== null && (g = Dn(a, f), g != null && k.push(Wn(a, g, d)))), I) break;
          a = a.return;
        }
        0 < k.length && (p = new w(p, x, null, n, v), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== si && (x = n.relatedTarget || n.fromElement) && (xt(x) || x[Ke])) break e;
        if ((w || p) && (p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (x = n.relatedTarget || n.toElement, w = c, x = x ? xt(x) : null, x !== null && (I = Lt(x), x !== I || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = c), w !== x)) {
          if (k = eu, g = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = nu, g = "onPointerLeave", f = "onPointerEnter", a = "pointer"), I = w == null ? p : Ut(w), d = x == null ? p : Ut(x), p = new k(g, a + "leave", w, n, v), p.target = I, p.relatedTarget = d, g = null, xt(v) === c && (k = new k(f, a + "enter", x, n, v), k.target = d, k.relatedTarget = I, g = k), I = g, w && x) t: {
            for (k = w, f = x, a = 0, d = k; d; d = Rt(d)) a++;
            for (d = 0, g = f; g; g = Rt(g)) d++;
            for (; 0 < a - d; ) k = Rt(k), a--;
            for (; 0 < d - a; ) f = Rt(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = Rt(k), f = Rt(f);
            }
            k = null;
          }
          else k = null;
          w !== null && pu(m, p, w, k, false), x !== null && I !== null && pu(m, I, x, k, true);
        }
      }
      e: {
        if (p = c ? Ut(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var E = Ff;
        else if (iu(p)) if (Vs) E = $f;
        else {
          E = Uf;
          var _ = If;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Af);
        if (E && (E = E(e, c))) {
          Ws(m, E, n, v);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && ri(p, "number", p.value);
      }
      switch (_ = c ? Ut(c) : window, e) {
        case "focusin":
          (iu(_) || _.contentEditable === "true") && (Ft = _, hi = c, Pn = null);
          break;
        case "focusout":
          Pn = hi = Ft = null;
          break;
        case "mousedown":
          vi = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vi = false, cu(m, n, v);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          cu(m, n, v);
      }
      var C;
      if (oo) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Dt ? $s(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (As && n.locale !== "ko" && (Dt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Dt && (C = Us()) : (tt = v, ro = "value" in tt ? tt.value : tt.textContent, Dt = true)), _ = $r(c, P), 0 < _.length && (P = new tu(P, e, null, n, v), m.push({ event: P, listeners: _ }), C ? P.data = C : (C = Bs(n), C !== null && (P.data = C)))), (C = Lf ? Rf(e, n) : Of(e, n)) && (c = $r(c, "onBeforeInput"), 0 < c.length && (v = new tu("onBeforeInput", "beforeinput", null, n, v), m.push({ event: v, listeners: c }), v.data = C));
    }
    bs(m, t);
  });
}
function Wn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Dn(e, n), i != null && r.unshift(Wn(e, i, l)), i = Dn(e, t), i != null && r.push(Wn(e, i, l))), e = e.return;
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Dn(n, i), s != null && o.unshift(Wn(n, s, u))) : l || (s = Dn(n, i), s != null && o.push(Wn(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Yf = /\r\n?/g, Xf = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Yf, `
`).replace(Xf, "");
}
function pr(e, t, n) {
  if (t = mu(t), mu(e) !== t && n) throw Error(y(425));
}
function Br() {
}
var gi = null, yi = null;
function wi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xi = typeof setTimeout == "function" ? setTimeout : void 0, Gf = typeof clearTimeout == "function" ? clearTimeout : void 0, hu = typeof Promise == "function" ? Promise : void 0, Zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
  return hu.resolve(null).then(e).catch(Jf);
} : xi;
function Jf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Un(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Un(t);
}
function ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var un = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + un, Vn = "__reactProps$" + un, Ke = "__reactContainer$" + un, ki = "__reactEvents$" + un, qf = "__reactListeners$" + un, bf = "__reactHandles$" + un;
function xt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ke] || n[Fe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vu(e); e !== null; ) {
        if (n = e[Fe]) return n;
        e = vu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function bn(e) {
  return e = e[Fe] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Vn] || null;
}
var Si = [], At = -1;
function mt(e) {
  return { current: e };
}
function F(e) {
  0 > At || (e.current = Si[At], Si[At] = null, At--);
}
function M(e, t) {
  At++, Si[At] = e.current, e.current = t;
}
var dt = {}, le = mt(dt), fe = mt(false), _t = dt;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Wr() {
  F(fe), F(le);
}
function gu(e, t, n) {
  if (le.current !== dt) throw Error(y(168));
  M(le, t), M(fe, n);
}
function ta(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Fc(e) || "Unknown", l));
  return B({}, n, r);
}
function Vr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dt, _t = le.current, M(le, e), M(fe, fe.current), true;
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = ta(e, t, _t), r.__reactInternalMemoizedMergedChildContext = e, F(fe), F(le), M(le, e)) : F(fe), M(fe, n);
}
var $e = null, al = false, Al = false;
function na(e) {
  $e === null ? $e = [e] : $e.push(e);
}
function ed(e) {
  al = true, na(e);
}
function ht() {
  if (!Al && $e !== null) {
    Al = true;
    var e = 0, t = O;
    try {
      var n = $e;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(true);
        while (r !== null);
      }
      $e = null, al = false;
    } catch (l) {
      throw $e !== null && ($e = $e.slice(e + 1)), Ps(bi, ht), l;
    } finally {
      O = t, Al = false;
    }
  }
  return null;
}
var $t = [], Bt = 0, Hr = null, Qr = 0, xe = [], ke = 0, Ct = null, Be = 1, We = "";
function yt(e, t) {
  $t[Bt++] = Qr, $t[Bt++] = Hr, Hr = e, Qr = t;
}
function ra(e, t, n) {
  xe[ke++] = Be, xe[ke++] = We, xe[ke++] = Ct, Ct = e;
  var r = Be;
  e = We;
  var l = 32 - Le(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Le(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Be = 1 << 32 - Le(t) + l | n << l | r, We = i + e;
  } else Be = 1 << i | n << l | r, We = e;
}
function so(e) {
  e.return !== null && (yt(e, 1), ra(e, 1, 0));
}
function ao(e) {
  for (; e === Hr; ) Hr = $t[--Bt], $t[Bt] = null, Qr = $t[--Bt], $t[Bt] = null;
  for (; e === Ct; ) Ct = xe[--ke], xe[ke] = null, We = xe[--ke], xe[ke] = null, Be = xe[--ke], xe[ke] = null;
}
var ve = null, he = null, U = false, Te = null;
function la(e, t) {
  var n = Se(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, he = ot(t.firstChild), true) : false;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, he = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ct !== null ? { id: Be, overflow: We } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Se(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, he = null, true) : false;
    default:
      return false;
  }
}
function Ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ni(e) {
  if (U) {
    var t = he;
    if (t) {
      var n = t;
      if (!wu(e, t)) {
        if (Ei(e)) throw Error(y(418));
        t = ot(n.nextSibling);
        var r = ve;
        t && wu(e, t) ? la(r, n) : (e.flags = e.flags & -4097 | 2, U = false, ve = e);
      }
    } else {
      if (Ei(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = false, ve = e;
    }
  }
}
function xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function mr(e) {
  if (e !== ve) return false;
  if (!U) return xu(e), U = true, false;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t && (t = he)) {
    if (Ei(e)) throw ia(), Error(y(418));
    for (; t; ) la(e, t), t = ot(t.nextSibling);
  }
  if (xu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = ot(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? ot(e.stateNode.nextSibling) : null;
  return true;
}
function ia() {
  for (var e = he; e; ) e = ot(e.nextSibling);
}
function bt() {
  he = ve = null, U = false;
}
function co(e) {
  Te === null ? Te = [e] : Te.push(e);
}
var td = Ge.ReactCurrentBatchConfig;
function hn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ku(e) {
  var t = e._init;
  return t(e._payload);
}
function oa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = ct(f, a), f.index = 0, f.sibling = null, f;
  }
  function i(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6 ? (a = Kl(d, f.mode, g), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, g) {
    var E = d.type;
    return E === Mt ? v(f, a, d.props.children, g, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && ku(E) === a.type) ? (g = l(a, d.props), g.ref = hn(f, a, d), g.return = f, g) : (g = Lr(d.type, d.key, d.props, null, f.mode, g), g.ref = hn(f, a, d), g.return = f, g);
  }
  function c(f, a, d, g) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Yl(d, f.mode, g), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function v(f, a, d, g, E) {
    return a === null || a.tag !== 7 ? (a = Nt(d, f.mode, g, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Kl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return d = Lr(a.type, a.key, a.props, null, f.mode, d), d.ref = hn(f, null, a), d.return = f, d;
        case Ot:
          return a = Yl(a, f.mode, d), a.return = f, a;
        case Je:
          var g = a._init;
          return m(f, g(a._payload), d);
      }
      if (wn(a) || cn(a)) return a = Nt(a, f.mode, d, null), a.return = f, a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, d, g) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === E ? s(f, a, d, g) : null;
        case Ot:
          return d.key === E ? c(f, a, d, g) : null;
        case Je:
          return E = d._init, p(f, a, E(d._payload), g);
      }
      if (wn(d) || cn(d)) return E !== null ? null : v(f, a, d, g, null);
      hr(f, d);
    }
    return null;
  }
  function w(f, a, d, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(d) || null, u(a, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case lr:
          return f = f.get(g.key === null ? d : g.key) || null, s(a, f, g, E);
        case Ot:
          return f = f.get(g.key === null ? d : g.key) || null, c(a, f, g, E);
        case Je:
          var _ = g._init;
          return w(f, a, d, _(g._payload), E);
      }
      if (wn(g) || cn(g)) return f = f.get(d) || null, v(a, f, g, E, null);
      hr(a, g);
    }
    return null;
  }
  function x(f, a, d, g) {
    for (var E = null, _ = null, C = a, P = a = 0, V = null; C !== null && P < d.length; P++) {
      C.index > P ? (V = C, C = null) : V = C.sibling;
      var L = p(f, C, d[P], g);
      if (L === null) {
        C === null && (C = V);
        break;
      }
      e && C && L.alternate === null && t(f, C), a = i(L, a, P), _ === null ? E = L : _.sibling = L, _ = L, C = V;
    }
    if (P === d.length) return n(f, C), U && yt(f, P), E;
    if (C === null) {
      for (; P < d.length; P++) C = m(f, d[P], g), C !== null && (a = i(C, a, P), _ === null ? E = C : _.sibling = C, _ = C);
      return U && yt(f, P), E;
    }
    for (C = r(f, C); P < d.length; P++) V = w(C, f, P, d[P], g), V !== null && (e && V.alternate !== null && C.delete(V.key === null ? P : V.key), a = i(V, a, P), _ === null ? E = V : _.sibling = V, _ = V);
    return e && C.forEach(function(Ce) {
      return t(f, Ce);
    }), U && yt(f, P), E;
  }
  function k(f, a, d, g) {
    var E = cn(d);
    if (typeof E != "function") throw Error(y(150));
    if (d = E.call(d), d == null) throw Error(y(151));
    for (var _ = E = null, C = a, P = a = 0, V = null, L = d.next(); C !== null && !L.done; P++, L = d.next()) {
      C.index > P ? (V = C, C = null) : V = C.sibling;
      var Ce = p(f, C, L.value, g);
      if (Ce === null) {
        C === null && (C = V);
        break;
      }
      e && C && Ce.alternate === null && t(f, C), a = i(Ce, a, P), _ === null ? E = Ce : _.sibling = Ce, _ = Ce, C = V;
    }
    if (L.done) return n(f, C), U && yt(f, P), E;
    if (C === null) {
      for (; !L.done; P++, L = d.next()) L = m(f, L.value, g), L !== null && (a = i(L, a, P), _ === null ? E = L : _.sibling = L, _ = L);
      return U && yt(f, P), E;
    }
    for (C = r(f, C); !L.done; P++, L = d.next()) L = w(C, f, P, L.value, g), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? P : L.key), a = i(L, a, P), _ === null ? E = L : _.sibling = L, _ = L);
    return e && C.forEach(function(sn) {
      return t(f, sn);
    }), U && yt(f, P), E;
  }
  function I(f, a, d, g) {
    if (typeof d == "object" && d !== null && d.type === Mt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Mt) {
                  if (_.tag === 7) {
                    n(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && ku(E) === _.type) {
                  n(f, _.sibling), a = l(_, d.props), a.ref = hn(f, _, d), a.return = f, f = a;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Mt ? (a = Nt(d.props.children, f.mode, g, d.key), a.return = f, f = a) : (g = Lr(d.type, d.key, d.props, null, f.mode, g), g.ref = hn(f, a, d), g.return = f, f = g);
          }
          return o(f);
        case Ot:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = Yl(d, f.mode, g), a.return = f, f = a;
          }
          return o(f);
        case Je:
          return _ = d._init, I(f, a, _(d._payload), g);
      }
      if (wn(d)) return x(f, a, d, g);
      if (cn(d)) return k(f, a, d, g);
      hr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Kl(d, f.mode, g), a.return = f, f = a), o(f)) : n(f, a);
  }
  return I;
}
var en = oa(true), ua = oa(false), Kr = mt(null), Yr = null, Wt = null, fo = null;
function po() {
  fo = Wt = Yr = null;
}
function mo(e) {
  var t = Kr.current;
  F(Kr), e._currentValue = t;
}
function _i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Gt(e, t) {
  Yr = e, fo = Wt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ce = true), e.firstContext = null);
}
function Ne(e) {
  var t = e._currentValue;
  if (fo !== e) if (e = { context: e, memoizedValue: t, next: null }, Wt === null) {
    if (Yr === null) throw Error(y(308));
    Wt = e, Yr.dependencies = { lanes: 0, firstContext: e };
  } else Wt = Wt.next = e;
  return t;
}
var kt = null;
function ho(e) {
  kt === null ? kt = [e] : kt.push(e);
}
function sa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ho(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ye(e, r);
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var qe = false;
function vo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function aa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ve(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ye(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ho(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ye(e, n);
}
function _r(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, eo(e, n);
  }
}
function Su(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Xr(e, t, n, r) {
  var l = e.updateQueue;
  qe = false;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, o === null ? i = c : o.next = c, o = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== o && (u === null ? v.firstBaseUpdate = c : u.next = c, v.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, v = c = s = null, u = i;
    do {
      var p = u.lane, w = u.eventTime;
      if ((r & p) === p) {
        v !== null && (v = v.next = { eventTime: w, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var x = e, k = u;
          switch (p = t, w = n, k.tag) {
            case 1:
              if (x = k.payload, typeof x == "function") {
                m = x.call(w, m, p);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = k.payload, p = typeof x == "function" ? x.call(w, m, p) : x, p == null) break e;
              m = B({}, m, p);
              break e;
            case 2:
              qe = true;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (c = v = w, s = m) : v = v.next = w, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (true);
    if (v === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    jt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Eu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var er = {}, Ue = mt(er), Hn = mt(er), Qn = mt(er);
function St(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function go(e, t) {
  switch (M(Qn, t), M(Hn, e), M(Ue, er), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ii(t, e);
  }
  F(Ue), M(Ue, t);
}
function tn() {
  F(Ue), F(Hn), F(Qn);
}
function ca(e) {
  St(Qn.current);
  var t = St(Ue.current), n = ii(t, e.type);
  t !== n && (M(Hn, e), M(Ue, n));
}
function yo(e) {
  Hn.current === e && (F(Ue), F(Hn));
}
var A = mt(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var $l = [];
function wo() {
  for (var e = 0; e < $l.length; e++) $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Cr = Ge.ReactCurrentDispatcher, Bl = Ge.ReactCurrentBatchConfig, Pt = 0, $ = null, Y = null, Z = null, Zr = false, jn = false, Kn = 0, nd = 0;
function te() {
  throw Error(y(321));
}
function xo(e, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Oe(e[n], t[n])) return false;
  return true;
}
function ko(e, t, n, r, l, i) {
  if (Pt = i, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cr.current = e === null || e.memoizedState === null ? od : ud, e = n(r, l), jn) {
    i = 0;
    do {
      if (jn = false, Kn = 0, 25 <= i) throw Error(y(301));
      i += 1, Z = Y = null, t.updateQueue = null, Cr.current = sd, e = n(r, l);
    } while (jn);
  }
  if (Cr.current = Jr, t = Y !== null && Y.next !== null, Pt = 0, Z = Y = $ = null, Zr = false, t) throw Error(y(300));
  return e;
}
function So() {
  var e = Kn !== 0;
  return Kn = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? $.memoizedState = Z = e : Z = Z.next = e, Z;
}
function _e() {
  if (Y === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? $.memoizedState : Z.next;
  if (t !== null) Z = t, Y = e;
  else {
    if (e === null) throw Error(y(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, Z === null ? $.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = _e(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, s = null, c = i;
    do {
      var v = c.lane;
      if ((Pt & v) === v) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = { lane: v, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        s === null ? (u = s = m, o = r) : s = s.next = m, $.lanes |= v, jt |= v;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = u, Oe(r, t.memoizedState) || (ce = true), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, $.lanes |= i, jt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = _e(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Oe(i, t.memoizedState) || (ce = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function fa() {
}
function da(e, t) {
  var n = $, r = _e(), l = t(), i = !Oe(r.memoizedState, l);
  if (i && (r.memoizedState = l, ce = true), r = r.queue, Eo(ha.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xn(9, ma.bind(null, n, r, l, t), void 0, null), J === null) throw Error(y(349));
    Pt & 30 || pa(n, t, l);
  }
  return l;
}
function pa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ma(e, t, n, r) {
  t.value = n, t.getSnapshot = r, va(t) && ga(e);
}
function ha(e, t, n) {
  return n(function() {
    va(t) && ga(e);
  });
}
function va(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return true;
  }
}
function ga(e) {
  var t = Ye(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Nu(e) {
  var t = De();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = id.bind(null, $, e), [t.memoizedState, e];
}
function Xn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ya() {
  return _e().memoizedState;
}
function Pr(e, t, n, r) {
  var l = De();
  $.flags |= e, l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r);
}
function cl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (i = o.destroy, r !== null && xo(r, o.deps)) {
      l.memoizedState = Xn(t, n, i, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Xn(1 | t, n, i, r);
}
function _u(e, t) {
  return Pr(8390656, 8, e, t);
}
function Eo(e, t) {
  return cl(2048, 8, e, t);
}
function wa(e, t) {
  return cl(4, 2, e, t);
}
function xa(e, t) {
  return cl(4, 4, e, t);
}
function ka(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Sa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cl(4, 4, ka.bind(null, t, e), n);
}
function No() {
}
function Ea(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Na(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _a(e, t, n) {
  return Pt & 21 ? (Oe(n, t) || (n = Ts(), $.lanes |= n, jt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, ce = true), e.memoizedState = n);
}
function rd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(true);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(false), t();
  } finally {
    O = n, Bl.transition = r;
  }
}
function Ca() {
  return _e().memoizedState;
}
function ld(e, t, n) {
  var r = at(e);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, Pa(e)) ja(t, n);
  else if (n = sa(e, t, n, r), n !== null) {
    var l = oe();
    Re(n, e, r, l), za(n, t, r);
  }
}
function id(e, t, n) {
  var r = at(e), l = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (Pa(e)) ja(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = true, l.eagerState = u, Oe(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, ho(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = sa(e, t, l, r), n !== null && (l = oe(), Re(n, e, r, l), za(n, t, r));
  }
}
function Pa(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function ja(e, t) {
  jn = Zr = true;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function za(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, eo(e, n);
  }
}
var Jr = { readContext: Ne, useCallback: te, useContext: te, useEffect: te, useImperativeHandle: te, useInsertionEffect: te, useLayoutEffect: te, useMemo: te, useReducer: te, useRef: te, useState: te, useDebugValue: te, useDeferredValue: te, useTransition: te, useMutableSource: te, useSyncExternalStore: te, useId: te, unstable_isNewReconciler: false }, od = { readContext: Ne, useCallback: function(e, t) {
  return De().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ne, useEffect: _u, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pr(4194308, 4, ka.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return Pr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = De();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = De();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ld.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = De();
  return e = { current: e }, t.memoizedState = e;
}, useState: Nu, useDebugValue: No, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = Nu(false), t = e[0];
  return e = rd.bind(null, e[1]), De().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = De();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(y(349));
    Pt & 30 || pa(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, _u(ha.bind(null, r, i, e), [e]), r.flags |= 2048, Xn(9, ma.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = De(), t = J.identifierPrefix;
  if (U) {
    var n = We, r = Be;
    n = (r & ~(1 << 32 - Le(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = nd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: false }, ud = { readContext: Ne, useCallback: Ea, useContext: Ne, useEffect: Eo, useImperativeHandle: Sa, useInsertionEffect: wa, useLayoutEffect: xa, useMemo: Na, useReducer: Wl, useRef: ya, useState: function() {
  return Wl(Yn);
}, useDebugValue: No, useDeferredValue: function(e) {
  var t = _e();
  return _a(t, Y.memoizedState, e);
}, useTransition: function() {
  var e = Wl(Yn)[0], t = _e().memoizedState;
  return [e, t];
}, useMutableSource: fa, useSyncExternalStore: da, useId: Ca, unstable_isNewReconciler: false }, sd = { readContext: Ne, useCallback: Ea, useContext: Ne, useEffect: Eo, useImperativeHandle: Sa, useInsertionEffect: wa, useLayoutEffect: xa, useMemo: Na, useReducer: Vl, useRef: ya, useState: function() {
  return Vl(Yn);
}, useDebugValue: No, useDeferredValue: function(e) {
  var t = _e();
  return Y === null ? t.memoizedState = e : _a(t, Y.memoizedState, e);
}, useTransition: function() {
  var e = Vl(Yn)[0], t = _e().memoizedState;
  return [e, t];
}, useMutableSource: fa, useSyncExternalStore: da, useId: Ca, unstable_isNewReconciler: false };
function je(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ci(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Lt(e) === e : false;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = oe(), l = at(e), i = Ve(r, l);
  i.payload = t, n != null && (i.callback = n), t = ut(e, i, l), t !== null && (Re(t, e, l, r), _r(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = oe(), l = at(e), i = Ve(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ut(e, i, l), t !== null && (Re(t, e, l, r), _r(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = oe(), r = at(e), l = Ve(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ut(e, l, r), t !== null && (Re(t, e, r, n), _r(t, e, r));
} };
function Cu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !$n(n, r) || !$n(l, i) : true;
}
function Ta(e, t, n) {
  var r = false, l = dt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ne(i) : (l = de(t) ? _t : le.current, r = t.contextTypes, i = (r = r != null) ? qt(e, l) : dt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Pu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, vo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ne(i) : (i = de(t) ? _t : le.current, l.context = qt(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ci(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), Xr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Dc(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ad = typeof WeakMap == "function" ? WeakMap : Map;
function La(e, t, n) {
  n = Ve(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    br || (br = true, Ui = r), ji(e, t);
  }, n;
}
function Ra(e, t, n) {
  n = Ve(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ji(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ji(e, t), typeof r != "function" && (st === null ? st = /* @__PURE__ */ new Set([this]) : st.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ad();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ed.bind(null, e, t, n), t.then(e, e));
}
function zu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ve(-1, 1), t.tag = 2, ut(n, t, 1))), n.lanes |= 1), e);
}
var cd = Ge.ReactCurrentOwner, ce = false;
function ie(e, t, n, r) {
  t.child = e === null ? ua(t, null, n, r) : en(t, e.child, n, r);
}
function Lu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Gt(t, l), r = ko(e, t, n, r, i, l), n = So(), e !== null && !ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xe(e, t, l)) : (U && n && so(t), t.flags |= 1, ie(e, t, r, l), t.child);
}
function Ru(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ro(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Oa(e, t, i, r, l)) : (e = Lr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $n, n(o, r) && e.ref === t.ref) return Xe(e, t, l);
  }
  return t.flags |= 1, e = ct(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Oa(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($n(i, r) && e.ref === t.ref) if (ce = false, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (ce = true);
    else return t.lanes = e.lanes, Xe(e, t, l);
  }
  return zi(e, t, n, r, l);
}
function Ma(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Ht, me), me |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(Ht, me), me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, M(Ht, me), me |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, M(Ht, me), me |= r;
  return ie(e, t, l, n), t.child;
}
function Da(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zi(e, t, n, r, l) {
  var i = de(n) ? _t : le.current;
  return i = qt(t, i), Gt(t, l), n = ko(e, t, n, r, i, l), r = So(), e !== null && !ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xe(e, t, l)) : (U && r && so(t), t.flags |= 1, ie(e, t, n, l), t.child);
}
function Ou(e, t, n, r, l) {
  if (de(n)) {
    var i = true;
    Vr(t);
  } else i = false;
  if (Gt(t, l), t.stateNode === null) jr(e, t), Ta(t, n, r), Pi(t, n, r, l), r = true;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ne(c) : (c = de(n) ? _t : le.current, c = qt(t, c));
    var v = n.getDerivedStateFromProps, m = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && Pu(t, o, r, c), qe = false;
    var p = t.memoizedState;
    o.state = p, Xr(t, r, o, l), s = t.memoizedState, u !== r || p !== s || fe.current || qe ? (typeof v == "function" && (Ci(t, n, v, r), s = t.memoizedState), (u = qe || Cu(t, n, u, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    o = t.stateNode, aa(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : je(t.type, u), o.props = c, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ne(s) : (s = de(n) ? _t : le.current, s = qt(t, s));
    var w = n.getDerivedStateFromProps;
    (v = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && Pu(t, o, r, s), qe = false, p = t.memoizedState, o.state = p, Xr(t, r, o, l);
    var x = t.memoizedState;
    u !== m || p !== x || fe.current || qe ? (typeof w == "function" && (Ci(t, n, w, r), x = t.memoizedState), (c = qe || Cu(t, n, c, r, p, x, s) || false) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = false);
  }
  return Ti(e, t, n, r, i, l);
}
function Ti(e, t, n, r, l, i) {
  Da(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && yu(t, n, false), Xe(e, t, i);
  r = t.stateNode, cd.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = en(t, e.child, null, i), t.child = en(t, null, u, i)) : ie(e, t, u, i), t.memoizedState = r.state, l && yu(t, n, true), t.child;
}
function Fa(e) {
  var t = e.stateNode;
  t.pendingContext ? gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gu(e, t.context, false), go(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return bt(), co(l), t.flags |= 256, ie(e, t, n, r), t.child;
}
var Li = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, t, n) {
  var r = t.pendingProps, l = A.current, i = false, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), u ? (i = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(A, l & 1), e === null) return Ni(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = ml(o, r, 0, null), e = Nt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ri(n), t.memoizedState = Li, e) : _o(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return fd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = ct(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = ct(u, i) : (i = Nt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Ri(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Li, r;
  }
  return i = e.child, e = i.sibling, r = ct(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function _o(e, t) {
  return t = ml({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vr(e, t, n, r) {
  return r !== null && co(r), en(t, e.child, null, n), e = _o(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fd(e, t, n, r, l, i, o) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Hl(Error(y(422))), vr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = ml({ mode: "visible", children: r.children }, l, 0, null), i = Nt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && en(t, e.child, null, o), t.child.memoizedState = Ri(o), t.memoizedState = Li, i);
  if (!(t.mode & 1)) return vr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(y(419)), r = Hl(i, r, void 0), vr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, ce || u) {
    if (r = J, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ye(e, l), Re(r, e, l, -1));
    }
    return Lo(), r = Hl(Error(y(421))), vr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Nd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, he = ot(l.nextSibling), ve = t, U = true, Te = null, e !== null && (xe[ke++] = Be, xe[ke++] = We, xe[ke++] = Ct, Be = e.id, We = e.overflow, Ct = t), t = _o(t, r.children), t.flags |= 4096, t);
}
function Du(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _i(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Ua(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ie(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Du(e, n, t);
      else if (e.tag === 19) Du(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (M(A, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Gr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ql(t, false, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Gr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ql(t, true, n, null, i);
      break;
    case "together":
      Ql(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function jr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Xe(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ct(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function dd(e, t, n) {
  switch (t.tag) {
    case 3:
      Fa(t), bt();
      break;
    case 5:
      ca(t);
      break;
    case 1:
      de(t.type) && Vr(t);
      break;
    case 4:
      go(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      M(Kr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (M(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ia(e, t, n) : (M(A, A.current & 1), e = Xe(e, t, n), e !== null ? e.sibling : null);
      M(A, A.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ua(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(A, A.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ma(e, t, n);
  }
  return Xe(e, t, n);
}
var Aa, Oi, $a, Ba;
Aa = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Oi = function() {
};
$a = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, St(Ue.current);
    var i = null;
    switch (n) {
      case "input":
        l = ti(e, l), r = ti(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = li(e, l), r = li(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Br);
    }
    oi(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (On.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l == null ? void 0 : l[c], r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(c, n)), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (On.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ba = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!U) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function pd(e, t, n) {
  var r = t.pendingProps;
  switch (ao(t), t.tag) {
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
      return ne(t), null;
    case 1:
      return de(t.type) && Wr(), ne(t), null;
    case 3:
      return r = t.stateNode, tn(), F(fe), F(le), wo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Te !== null && (Bi(Te), Te = null))), Oi(e, t), ne(t), null;
    case 5:
      yo(t);
      var l = St(Qn.current);
      if (n = t.type, e !== null && t.stateNode != null) $a(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (e = St(Ue.current), mr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Fe] = t, r[Vn] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) D(kn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Ho(r, i), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, D("invalid", r);
              break;
            case "textarea":
              Ko(r, i), D("invalid", r);
          }
          oi(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== true && pr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== true && pr(r.textContent, u, e), l = ["children", "" + u]) : On.hasOwnProperty(o) && u != null && o === "onScroll" && D("scroll", r);
          }
          switch (n) {
            case "input":
              ir(r), Qo(r, i, true);
              break;
            case "textarea":
              ir(r), Yo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Br);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = true : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Fe] = t, e[Vn] = r, Aa(e, t, false, false), t.stateNode = e;
          e: {
            switch (o = ui(n, r), n) {
              case "dialog":
                D("cancel", e), D("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) D(kn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), l = r;
                break;
              case "details":
                D("toggle", e), l = r;
                break;
              case "input":
                Ho(e, r), l = ti(e, r), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                Ko(e, r), l = li(e, r), D("invalid", e);
                break;
              default:
                l = r;
            }
            oi(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? ys(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vs(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mn(e, s) : typeof s == "number" && Mn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (On.hasOwnProperty(i) ? s != null && i === "onScroll" && D("scroll", e) : s != null && Xi(e, i, s, o));
            }
            switch (n) {
              case "input":
                ir(e), Qo(e, r, false);
                break;
              case "textarea":
                ir(e), Yo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Qt(e, !!r.multiple, i, false) : r.defaultValue != null && Qt(e, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ba(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = St(Qn.current), St(Ue.current), mr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Fe] = t, (i = r.nodeValue !== n) && (e = ve, e !== null)) switch (e.tag) {
            case 3:
              pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== true && pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fe] = t, t.stateNode = r;
      }
      return ne(t), null;
    case 13:
      if (F(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && he !== null && t.mode & 1 && !(t.flags & 128)) ia(), bt(), t.flags |= 98560, i = false;
        else if (i = mr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(y(317));
            i[Fe] = t;
          } else bt(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ne(t), i = false;
        } else Te !== null && (Bi(Te), Te = null), i = true;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? X === 0 && (X = 3) : Lo())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
    case 4:
      return tn(), Oi(e, t), e === null && Bn(t.stateNode.containerInfo), ne(t), null;
    case 10:
      return mo(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Wr(), ne(t), null;
    case 19:
      if (F(A), i = t.memoizedState, i === null) return ne(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) vn(i, false);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Gr(e), o !== null) {
            for (t.flags |= 128, vn(i, false), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return M(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Q() > rn && (t.flags |= 128, r = true, vn(i, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Gr(o), e !== null) {
          if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vn(i, true), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return ne(t), null;
        } else 2 * Q() - i.renderingStartTime > rn && n !== 1073741824 && (t.flags |= 128, r = true, vn(i, false), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Q(), t.sibling = null, n = A.current, M(A, r ? n & 1 | 2 : n & 1), t) : (ne(t), null);
    case 22:
    case 23:
      return To(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function md(e, t) {
  switch (ao(t), t.tag) {
    case 1:
      return de(t.type) && Wr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return tn(), F(fe), F(le), wo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return yo(t), null;
    case 13:
      if (F(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        bt();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F(A), null;
    case 4:
      return tn(), null;
    case 10:
      return mo(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = false, re = false, hd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Vt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    W(e, t, r);
  }
  else n.current = null;
}
function Mi(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Fu = false;
function vd(e, t) {
  if (gi = Ur, e = Ks(), uo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, u = -1, s = -1, c = 0, v = 0, m = e, p = null;
        t: for (; ; ) {
          for (var w; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (w = m.firstChild) !== null; ) p = m, m = w;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (u = o), p === i && ++v === r && (s = o), (w = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = w;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yi = { focusedElem: e, selectionRange: n }, Ur = false, S = t; S !== null; ) if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
  else for (; S !== null; ) {
    t = S;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var k = x.memoizedProps, I = x.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : je(t.type, k), I);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (g) {
      W(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, S = e;
      break;
    }
    S = t.return;
  }
  return x = Fu, Fu = false, x;
}
function zn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Mi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Di(e) {
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
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Wa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Wa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fe], delete t[Vn], delete t[ki], delete t[qf], delete t[bf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Iu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Va(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Br));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fi(e, t, n), e = e.sibling; e !== null; ) Fi(e, t, n), e = e.sibling;
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), e = e.sibling;
}
var q = null, ze = false;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Ha(e, t, n), n = n.sibling;
}
function Ha(e, t, n) {
  if (Ie && typeof Ie.onCommitFiberUnmount == "function") try {
    Ie.onCommitFiberUnmount(ll, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      re || Vt(n, t);
    case 6:
      var r = q, l = ze;
      q = null, Ze(e, t, n), q = r, ze = l, q !== null && (ze ? (e = q, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (ze ? (e = q, n = n.stateNode, e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n), Un(e)) : Ul(q, n.stateNode));
      break;
    case 4:
      r = q, l = ze, q = n.stateNode.containerInfo, ze = true, Ze(e, t, n), q = r, ze = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Mi(n, t, o), l = l.next;
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (!re && (Vt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        W(n, t, u);
      }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (re = (r = re) || n.memoizedState !== null, Ze(e, t, n), re = r) : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Uu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hd()), t.forEach(function(r) {
      var l = _d.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            q = u.stateNode, ze = false;
            break e;
          case 3:
            q = u.stateNode.containerInfo, ze = true;
            break e;
          case 4:
            q = u.stateNode.containerInfo, ze = true;
            break e;
        }
        u = u.return;
      }
      if (q === null) throw Error(y(160));
      Ha(i, o, l), q = null, ze = false;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      W(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qa(t, e), t = t.sibling;
}
function Qa(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Pe(t, e), Me(e), r & 4) {
        try {
          zn(3, e, e.return), dl(3, e);
        } catch (k) {
          W(e, e.return, k);
        }
        try {
          zn(5, e, e.return);
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(t, e), Me(e), r & 512 && n !== null && Vt(n, n.return);
      break;
    case 5:
      if (Pe(t, e), Me(e), r & 512 && n !== null && Vt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mn(l, "");
        } catch (k) {
          W(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && ps(l, i), ui(u, o);
          var c = ui(u, i);
          for (o = 0; o < s.length; o += 2) {
            var v = s[o], m = s[o + 1];
            v === "style" ? ys(l, m) : v === "dangerouslySetInnerHTML" ? vs(l, m) : v === "children" ? Mn(l, m) : Xi(l, v, m, c);
          }
          switch (u) {
            case "input":
              ni(l, i);
              break;
            case "textarea":
              ms(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? Qt(l, !!i.multiple, w, false) : p !== !!i.multiple && (i.defaultValue != null ? Qt(l, !!i.multiple, i.defaultValue, true) : Qt(l, !!i.multiple, i.multiple ? [] : "", false));
          }
          l[Vn] = i;
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Pe(t, e), Me(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Pe(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Un(t.containerInfo);
      } catch (k) {
        W(e, e.return, k);
      }
      break;
    case 4:
      Pe(t, e), Me(e);
      break;
    case 13:
      Pe(t, e), Me(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (jo = Q())), r & 4 && Uu(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (re = (c = re) || v, Pe(t, e), re = c) : Pe(t, e), Me(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !v && e.mode & 1) for (S = e, v = e.child; v !== null; ) {
          for (m = S = v; S !== null; ) {
            switch (p = S, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                zn(4, p, p.return);
                break;
              case 1:
                Vt(p, p.return);
                var x = p.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (k) {
                    W(r, n, k);
                  }
                }
                break;
              case 5:
                Vt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  $u(m);
                  continue;
                }
            }
            w !== null ? (w.return = p, S = w) : $u(m);
          }
          v = v.sibling;
        }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                l = m.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = gs("display", o));
              } catch (k) {
                W(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (v === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (k) {
              W(e, e.return, k);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), m = m.return;
          }
          v === m && (v = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Pe(t, e), Me(e), r & 4 && Uu(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Va(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mn(l, ""), r.flags &= -33);
          var i = Iu(e);
          Ii(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Iu(e);
          Fi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gd(e, t, n) {
  S = e, Ka(e);
}
function Ka(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || gr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || re;
        u = gr;
        var c = re;
        if (gr = o, (re = s) && !c) for (S = l; S !== null; ) o = S, s = o.child, o.tag === 22 && o.memoizedState !== null ? Bu(l) : s !== null ? (s.return = o, S = s) : Bu(l);
        for (; i !== null; ) S = i, Ka(i), i = i.sibling;
        S = l, gr = u, re = c;
      }
      Au(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, S = i) : Au(e);
  }
}
function Au(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            re || dl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !re) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Eu(t, i, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Eu(t, o, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
              var c = t.alternate;
              if (c !== null) {
                var v = c.memoizedState;
                if (v !== null) {
                  var m = v.dehydrated;
                  m !== null && Un(m);
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
            throw Error(y(163));
        }
        re || t.flags & 512 && Di(t);
      } catch (p) {
        W(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, S = n;
      break;
    }
    S = t.return;
  }
}
function $u(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, S = n;
      break;
    }
    S = t.return;
  }
}
function Bu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            Di(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Di(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, S = u;
      break;
    }
    S = t.return;
  }
}
var yd = Math.ceil, qr = Ge.ReactCurrentDispatcher, Co = Ge.ReactCurrentOwner, Ee = Ge.ReactCurrentBatchConfig, R = 0, J = null, K = null, b = 0, me = 0, Ht = mt(0), X = 0, Gn = null, jt = 0, pl = 0, Po = 0, Tn = null, ae = null, jo = 0, rn = 1 / 0, Ae = null, br = false, Ui = null, st = null, yr = false, nt = null, el = 0, Ln = 0, Ai = null, zr = -1, Tr = 0;
function oe() {
  return R & 6 ? Q() : zr !== -1 ? zr : zr = Q();
}
function at(e) {
  return e.mode & 1 ? R & 2 && b !== 0 ? b & -b : td.transition !== null ? (Tr === 0 && (Tr = Ts()), Tr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Is(e.type)), e) : 1;
}
function Re(e, t, n, r) {
  if (50 < Ln) throw Ln = 0, Ai = null, Error(y(185));
  Jn(e, n, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (pl |= n), X === 4 && et(e, b)), pe(e, r), n === 1 && R === 0 && !(t.mode & 1) && (rn = Q() + 500, al && ht()));
}
function pe(e, t) {
  var n = e.callbackNode;
  ef(e, t);
  var r = Ir(e, e === J ? b : 0);
  if (r === 0) n !== null && Zo(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Zo(n), t === 1) e.tag === 0 ? ed(Wu.bind(null, e)) : na(Wu.bind(null, e)), Zf(function() {
      !(R & 6) && ht();
    }), n = null;
    else {
      switch (Ls(r)) {
        case 1:
          n = bi;
          break;
        case 4:
          n = js;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = Fr;
      }
      n = ec(n, Ya.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ya(e, t) {
  if (zr = -1, Tr = 0, R & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = Ga();
    (J !== e || b !== t) && (Ae = null, rn = Q() + 500, Et(e, t));
    do
      try {
        kd();
        break;
      } catch (u) {
        Xa(e, u);
      }
    while (true);
    po(), qr.current = i, R = l, K !== null ? t = 0 : (J = null, b = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = di(e), l !== 0 && (r = l, t = $i(e, l))), t === 1) throw n = Gn, Et(e, 0), et(e, r), pe(e, Q()), n;
    if (t === 6) et(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !wd(l) && (t = tl(e, r), t === 2 && (i = di(e), i !== 0 && (r = i, t = $i(e, i))), t === 1)) throw n = Gn, Et(e, 0), et(e, r), pe(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ae, Ae);
          break;
        case 3:
          if (et(e, r), (r & 130023424) === r && (t = jo + 500 - Q(), 10 < t)) {
            if (Ir(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = xi(wt.bind(null, e, ae, Ae), t);
            break;
          }
          wt(e, ae, Ae);
          break;
        case 4:
          if (et(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Le(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xi(wt.bind(null, e, ae, Ae), r);
            break;
          }
          wt(e, ae, Ae);
          break;
        case 5:
          wt(e, ae, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Ya.bind(null, e) : null;
}
function $i(e, t) {
  var n = Tn;
  return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), e = tl(e, t), e !== 2 && (t = ae, ae = n, t !== null && Bi(t)), e;
}
function Bi(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function wd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Oe(i(), l)) return false;
        } catch {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function et(e, t) {
  for (t &= ~Po, t &= ~pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Le(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Wu(e) {
  if (R & 6) throw Error(y(327));
  Zt();
  var t = Ir(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = di(e);
    r !== 0 && (t = r, n = $i(e, r));
  }
  if (n === 1) throw n = Gn, Et(e, 0), et(e, t), pe(e, Q()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, ae, Ae), pe(e, Q()), null;
}
function zo(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (rn = Q() + 500, al && ht());
  }
}
function zt(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && Zt();
  var t = R;
  R |= 1;
  var n = Ee.transition, r = O;
  try {
    if (Ee.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ee.transition = n, R = t, !(R & 6) && ht();
  }
}
function To() {
  me = Ht.current, F(Ht);
}
function Et(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Gf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (ao(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Wr();
        break;
      case 3:
        tn(), F(fe), F(le), wo();
        break;
      case 5:
        yo(r);
        break;
      case 4:
        tn();
        break;
      case 13:
        F(A);
        break;
      case 19:
        F(A);
        break;
      case 10:
        mo(r.type._context);
        break;
      case 22:
      case 23:
        To();
    }
    n = n.return;
  }
  if (J = e, K = e = ct(e.current, null), b = me = t, X = 0, Gn = null, Po = pl = jt = 0, ae = Tn = null, kt !== null) {
    for (t = 0; t < kt.length; t++) if (n = kt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    kt = null;
  }
  return e;
}
function Xa(e, t) {
  do {
    var n = K;
    try {
      if (po(), Cr.current = Jr, Zr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Zr = false;
      }
      if (Pt = 0, Z = Y = $ = null, jn = false, Kn = 0, Co.current = null, n === null || n.return === null) {
        X = 1, Gn = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = b, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, v = u, m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p ? (v.updateQueue = p.updateQueue, v.memoizedState = p.memoizedState, v.lanes = p.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var w = zu(o);
          if (w !== null) {
            w.flags &= -257, Tu(w, o, u, i, t), w.mode & 1 && ju(i, c, t), t = w, s = c;
            var x = t.updateQueue;
            if (x === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ju(i, c, t), Lo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var I = zu(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Tu(I, o, u, i, t), co(nn(s, u));
            break e;
          }
        }
        i = s = nn(s, u), X !== 4 && (X = 2), Tn === null ? Tn = [i] : Tn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = La(i, s, t);
              Su(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (st === null || !st.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Ra(i, u, t);
                Su(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ja(n);
    } catch (E) {
      t = E, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function Ga() {
  var e = qr.current;
  return qr.current = Jr, e === null ? Jr : e;
}
function Lo() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(jt & 268435455) && !(pl & 268435455) || et(J, b);
}
function tl(e, t) {
  var n = R;
  R |= 2;
  var r = Ga();
  (J !== e || b !== t) && (Ae = null, Et(e, t));
  do
    try {
      xd();
      break;
    } catch (l) {
      Xa(e, l);
    }
  while (true);
  if (po(), R = n, qr.current = r, K !== null) throw Error(y(261));
  return J = null, b = 0, X;
}
function xd() {
  for (; K !== null; ) Za(K);
}
function kd() {
  for (; K !== null && !Qc(); ) Za(K);
}
function Za(e) {
  var t = ba(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, t === null ? Ja(e) : K = t, Co.current = null;
}
function Ja(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = md(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (n = pd(n, t, me), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function wt(e, t, n) {
  var r = O, l = Ee.transition;
  try {
    Ee.transition = null, O = 1, Sd(e, t, n, r);
  } finally {
    Ee.transition = l, O = r;
  }
  return null;
}
function Sd(e, t, n, r) {
  do
    Zt();
  while (nt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (tf(e, i), e === J && (K = J = null, b = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yr || (yr = true, ec(Fr, function() {
    return Zt(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ee.transition, Ee.transition = null;
    var o = O;
    O = 1;
    var u = R;
    R |= 4, Co.current = null, vd(e, n), Qa(n, e), Wf(yi), Ur = !!gi, yi = gi = null, e.current = n, gd(n), Kc(), R = u, O = o, Ee.transition = i;
  } else e.current = n;
  if (yr && (yr = false, nt = e, el = l), i = e.pendingLanes, i === 0 && (st = null), Gc(n.stateNode), pe(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw br = false, e = Ui, Ui = null, e;
  return el & 1 && e.tag !== 0 && Zt(), i = e.pendingLanes, i & 1 ? e === Ai ? Ln++ : (Ln = 0, Ai = e) : Ln = 0, ht(), null;
}
function Zt() {
  if (nt !== null) {
    var e = Ls(el), t = Ee.transition, n = O;
    try {
      if (Ee.transition = null, O = 16 > e ? 16 : e, nt === null) var r = false;
      else {
        if (e = nt, nt = null, el = 0, R & 6) throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var i = S, o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) m.return = v, S = m;
                  else for (; S !== null; ) {
                    v = S;
                    var p = v.sibling, w = v.return;
                    if (Wa(v), v === c) {
                      S = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, S = p;
                      break;
                    }
                    S = w;
                  }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var I = k.sibling;
                    k.sibling = null, k = I;
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, S = o;
          else e: for (; S !== null; ) {
            if (i = S, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                zn(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, S = f;
              break e;
            }
            S = i.return;
          }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, S = d;
          else e: for (o = a; S !== null; ) {
            if (u = S, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  dl(9, u);
              }
            } catch (E) {
              W(u, u.return, E);
            }
            if (u === o) {
              S = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, S = g;
              break e;
            }
            S = u.return;
          }
        }
        if (R = l, ht(), Ie && typeof Ie.onPostCommitFiberRoot == "function") try {
          Ie.onPostCommitFiberRoot(ll, e);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      O = n, Ee.transition = t;
    }
  }
  return false;
}
function Vu(e, t, n) {
  t = nn(n, t), t = La(e, t, 1), e = ut(e, t, 1), t = oe(), e !== null && (Jn(e, 1, t), pe(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Vu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Vu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (st === null || !st.has(r))) {
        e = nn(n, e), e = Ra(t, e, 1), t = ut(t, e, 1), e = oe(), t !== null && (Jn(t, 1, e), pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ed(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = oe(), e.pingedLanes |= e.suspendedLanes & n, J === e && (b & n) === n && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - jo ? Et(e, 0) : Po |= n), pe(e, t);
}
function qa(e, t) {
  t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
  var n = oe();
  e = Ye(e, t), e !== null && (Jn(e, t, n), pe(e, n));
}
function Nd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), qa(e, n);
}
function _d(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), qa(e, n);
}
var ba;
ba = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || fe.current) ce = true;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ce = false, dd(e, t, n);
    ce = !!(e.flags & 131072);
  }
  else ce = false, U && t.flags & 1048576 && ra(t, Qr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      jr(e, t), e = t.pendingProps;
      var l = qt(t, le.current);
      Gt(t, n), l = ko(null, t, r, e, l, n);
      var i = So();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, de(r) ? (i = true, Vr(t)) : i = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, vo(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, Pi(t, r, e, n), t = Ti(null, t, r, true, i, n)) : (t.tag = 0, U && i && so(t), ie(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (jr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Pd(r), e = je(r, e), l) {
          case 0:
            t = zi(null, t, r, e, n);
            break e;
          case 1:
            t = Ou(null, t, r, e, n);
            break e;
          case 11:
            t = Lu(null, t, r, e, n);
            break e;
          case 14:
            t = Ru(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ou(e, t, r, l, n);
    case 3:
      e: {
        if (Fa(t), e === null) throw Error(y(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, aa(e, t), Xr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = nn(Error(y(423)), t), t = Mu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = nn(Error(y(424)), t), t = Mu(e, t, r, n, l);
          break e;
        } else for (he = ot(t.stateNode.containerInfo.firstChild), ve = t, U = true, Te = null, n = ua(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (bt(), r === l) {
            t = Xe(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ca(t), e === null && Ni(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, wi(r, l) ? o = null : i !== null && wi(r, i) && (t.flags |= 32), Da(e, t), ie(e, t, o, n), t.child;
    case 6:
      return e === null && Ni(t), null;
    case 13:
      return Ia(e, t, n);
    case 4:
      return go(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = en(t, null, r, n) : ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Lu(e, t, r, l, n);
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, M(Kr, r._currentValue), r._currentValue = o, i !== null) if (Oe(i.value, o)) {
          if (i.children === l.children && !fe.current) {
            t = Xe(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Ve(-1, n & -n), s.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var v = c.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), c.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), _i(i.return, n, t), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(y(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), _i(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        ie(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Gt(t, n), l = Ne(l), r = r(l), t.flags |= 1, ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), Ru(e, t, r, l, n);
    case 15:
      return Oa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), jr(e, t), t.tag = 1, de(r) ? (e = true, Vr(t)) : e = false, Gt(t, n), Ta(t, r, l), Pi(t, r, l, n), Ti(null, t, r, true, e, n);
    case 19:
      return Ua(e, t, n);
    case 22:
      return Ma(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ec(e, t) {
  return Ps(e, t);
}
function Cd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Se(e, t, n, r) {
  return new Cd(e, t, n, r);
}
function Ro(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Pd(e) {
  if (typeof e == "function") return Ro(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zi) return 11;
    if (e === Ji) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return n === null ? (n = Se(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Lr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Ro(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Mt:
      return Nt(n.children, l, i, t);
    case Gi:
      o = 8, l |= 8;
      break;
    case Jl:
      return e = Se(12, n, t, l | 2), e.elementType = Jl, e.lanes = i, e;
    case ql:
      return e = Se(13, n, t, l), e.elementType = ql, e.lanes = i, e;
    case bl:
      return e = Se(19, n, t, l), e.elementType = bl, e.lanes = i, e;
    case cs:
      return ml(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ss:
          o = 10;
          break e;
        case as:
          o = 9;
          break e;
        case Zi:
          o = 11;
          break e;
        case Ji:
          o = 14;
          break e;
        case Je:
          o = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = Se(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Nt(e, t, n, r) {
  return e = Se(7, e, r, t), e.lanes = n, e;
}
function ml(e, t, n, r) {
  return e = Se(22, e, r, t), e.elementType = cs, e.lanes = n, e.stateNode = { isHidden: false }, e;
}
function Kl(e, t, n) {
  return e = Se(6, e, null, t), e.lanes = n, e;
}
function Yl(e, t, n) {
  return t = Se(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function jd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Oo(e, t, n, r, l, i, o, u, s) {
  return e = new jd(e, t, n, u, s), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = Se(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vo(i), e;
}
function zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ot, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function tc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return ta(e, n, t);
  }
  return t;
}
function nc(e, t, n, r, l, i, o, u, s) {
  return e = Oo(n, r, true, e, l, i, o, u, s), e.context = tc(null), n = e.current, r = oe(), l = at(n), i = Ve(r, l), i.callback = t ?? null, ut(n, i, l), e.current.lanes = l, Jn(e, l, r), pe(e, r), e;
}
function hl(e, t, n, r) {
  var l = t.current, i = oe(), o = at(l);
  return n = tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ve(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ut(l, t, o), e !== null && (Re(e, l, o, i), _r(e, l, o)), o;
}
function nl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mo(e, t) {
  Hu(e, t), (e = e.alternate) && Hu(e, t);
}
function Td() {
  return null;
}
var rc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Do(e) {
  this._internalRoot = e;
}
vl.prototype.render = Do.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  hl(e, t, null, null);
};
vl.prototype.unmount = Do.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function() {
      hl(null, e, null, null);
    }), t[Ke] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ms();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++) ;
    be.splice(n, 0, e), n === 0 && Fs(e);
  }
};
function Fo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function gl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Qu() {
}
function Ld(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = nl(o);
        i.call(c);
      };
    }
    var o = nc(t, r, e, 0, null, false, false, "", Qu);
    return e._reactRootContainer = o, e[Ke] = o.current, Bn(e.nodeType === 8 ? e.parentNode : e), zt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = nl(s);
      u.call(c);
    };
  }
  var s = Oo(e, 0, false, null, null, false, false, "", Qu);
  return e._reactRootContainer = s, e[Ke] = s.current, Bn(e.nodeType === 8 ? e.parentNode : e), zt(function() {
    hl(t, s, n, r);
  }), s;
}
function yl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = nl(o);
        u.call(s);
      };
    }
    hl(t, o, e, l);
  } else o = Ld(n, t, e, l, r);
  return nl(o);
}
Rs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 && (eo(t, n | 1), pe(t, Q()), !(R & 6) && (rn = Q() + 500, ht()));
      }
      break;
    case 13:
      zt(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }), Mo(e, 1);
  }
};
to = function(e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = oe();
      Re(t, e, 134217728, n);
    }
    Mo(e, 134217728);
  }
};
Os = function(e) {
  if (e.tag === 13) {
    var t = at(e), n = Ye(e, t);
    if (n !== null) {
      var r = oe();
      Re(n, e, t, r);
    }
    Mo(e, t);
  }
};
Ms = function() {
  return O;
};
Ds = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
ai = function(e, t, n) {
  switch (t) {
    case "input":
      if (ni(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ds(r), ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      ms(e, n);
      break;
    case "select":
      t = n.value, t != null && Qt(e, !!n.multiple, t, false);
  }
};
ks = zo;
Ss = zt;
var Rd = { usingClientEntryPoint: false, Events: [bn, Ut, sl, ws, xs, zo] }, gn = { findFiberByHostInstance: xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Od = { bundleType: gn.bundleType, version: gn.version, rendererPackageName: gn.rendererPackageName, rendererConfig: gn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _s(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gn.findFiberByHostInstance || Td, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber) try {
    ll = wr.inject(Od), Ie = wr;
  } catch {
  }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
ye.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fo(t)) throw Error(y(200));
  return zd(e, t, null, n);
};
ye.createRoot = function(e, t) {
  if (!Fo(e)) throw Error(y(299));
  var n = false, r = "", l = rc;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Oo(e, 1, false, null, null, n, false, r, l), e[Ke] = t.current, Bn(e.nodeType === 8 ? e.parentNode : e), new Do(t);
};
ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = _s(t), e = e === null ? null : e.stateNode, e;
};
ye.flushSync = function(e) {
  return zt(e);
};
ye.hydrate = function(e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return yl(null, e, t, true, n);
};
ye.hydrateRoot = function(e, t, n) {
  if (!Fo(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = false, i = "", o = rc;
  if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = nc(t, null, e, 1, n ?? null, l, false, i, o), e[Ke] = t.current, Bn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
  return new vl(t);
};
ye.render = function(e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return yl(null, e, t, false, n);
};
ye.unmountComponentAtNode = function(e) {
  if (!gl(e)) throw Error(y(40));
  return e._reactRootContainer ? (zt(function() {
    yl(null, null, e, false, function() {
      e._reactRootContainer = null, e[Ke] = null;
    });
  }), true) : false;
};
ye.unstable_batchedUpdates = zo;
ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!gl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return yl(e, t, n, false, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function lc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
  } catch (e) {
    console.error(e);
  }
}
lc(), ls.exports = ye;
var Md = ls.exports, Ku = Md;
Gl.createRoot = Ku.createRoot, Gl.hydrateRoot = Ku.hydrateRoot;
function Dd() {
  let e, t;
  try {
    const n = He.get_greeting();
    return e = n[0], t = n[1], Id(n[0], n[1]);
  } finally {
    He.__wbindgen_free(e, t, 1);
  }
}
function Fd() {
  return { __proto__: null, "./core_wasm_bg.js": { __proto__: null, __wbindgen_init_externref_table: function() {
    const t = He.__wbindgen_externrefs, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  } } };
}
function Id(e, t) {
  return $d(e >>> 0, t);
}
let Sn = null;
function Ud() {
  return (Sn === null || Sn.byteLength === 0) && (Sn = new Uint8Array(He.memory.buffer)), Sn;
}
let Rr = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Rr.decode();
const Ad = 2146435072;
let Xl = 0;
function $d(e, t) {
  return Xl += t, Xl >= Ad && (Rr = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Rr.decode(), Xl = t), Rr.decode(Ud().subarray(e, e + t));
}
let He;
function Bd(e, t) {
  return He = e.exports, Sn = null, He.__wbindgen_start(), He;
}
async function Wd(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (l) {
      if (e.ok && n(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", l);
      else throw l;
    }
    const r = await e.arrayBuffer();
    return await WebAssembly.instantiate(r, t);
  } else {
    const r = await WebAssembly.instantiate(e, t);
    return r instanceof WebAssembly.Instance ? { instance: r, module: e } : r;
  }
  function n(r) {
    switch (r) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function Vd(e) {
  if (He !== void 0) return He;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("core_wasm_bg-fsKbK6x0.wasm", import.meta.url).href, import.meta.url));
  const t = Fd();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await Wd(await e, t);
  return Bd(n);
}
function Hd() {
  const [e, t] = Rn.useState("Loading Wasm...");
  return Rn.useEffect(() => {
    Vd().then(() => {
      const n = Dd();
      t(n);
    }).catch((n) => {
      console.error("Failed to load Wasm:", n), t("Error loading Wasm module");
    });
  }, []), h.jsxs("div", { className: "min-h-screen flex flex-col", children: [h.jsx("nav", { className: "sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800", children: h.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [h.jsxs("div", { className: "text-2xl font-bold tracking-tight text-white", children: ["A&G", h.jsx("span", { className: "text-gold", children: "." }), " Brand Consultants"] }), h.jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [h.jsx("a", { href: "#services", className: "text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300", children: "Services" }), h.jsx("a", { href: "#approach", className: "text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300", children: "Our Approach" }), h.jsx("a", { href: "#team", className: "text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300", children: "Team" }), h.jsx("a", { href: "#contact", className: "px-6 py-2 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-colors duration-300", children: "Contact Us" })] })] }) }), h.jsx("section", { className: "relative flex flex-col justify-center min-h-[85vh] px-6 py-20 max-w-7xl mx-auto w-full", children: h.jsxs("div", { className: "max-w-4xl", children: [h.jsxs("h1", { className: "text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8", children: ["Big Agency Thinking.", h.jsx("br", {}), h.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200", children: "Built for Startups." })] }), h.jsx("p", { className: "text-xl md:text-2xl text-neutral-400 leading-relaxed mb-12 max-w-3xl", children: "We combine the creative depth of veteran agency leaders with the practical execution of seasoned entrepreneurs. We build brand systems, design identities, and launch campaigns directly with founders\u2014with zero junior teams and zero agency bloat." }), h.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 mb-16", children: [h.jsx("a", { href: "#services", className: "px-8 py-4 bg-white text-neutral-900 font-bold text-center uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300", children: "Explore Our Services" }), h.jsx("a", { href: "#contact", className: "px-8 py-4 border border-neutral-600 text-white font-bold text-center uppercase tracking-widest hover:border-white transition-colors duration-300", children: "Book a Strategic Consultation" })] }), h.jsx("p", { className: "text-sm text-neutral-500 uppercase tracking-widest leading-loose", children: "Managed by leaders who have spent 20+ years at top-tier global networks like WPP and Publicis, shaping over 50 diverse brands and winning 75+ international creative awards." })] }) }), h.jsx("section", { id: "services", className: "bg-neutral-950 py-32 px-6", children: h.jsxs("div", { className: "max-w-7xl mx-auto", children: [h.jsxs("div", { className: "mb-20", children: [h.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Our Services" }), h.jsx("p", { className: "text-xl text-neutral-400 max-w-2xl", children: "Design-first solutions built to help early-stage and growing ventures scale." })] }), h.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [h.jsxs("div", { className: "border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group", children: [h.jsx("h3", { className: "text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300", children: "Core Brand Identity & Design Systems" }), h.jsx("p", { className: "text-neutral-400 leading-relaxed", children: "Comprehensive visual architecture built from scratch or refined for your next growth stage. Deliverables include core brand marks, custom logos, typography rules, color palettes, and integrated visual brand guidelines." })] }), h.jsxs("div", { className: "border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group", children: [h.jsx("h3", { className: "text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300", children: "Product, Menu & Packaging Design" }), h.jsx("p", { className: "text-neutral-400 leading-relaxed", children: "Specialized design systems for physical products, retail presentation, and functional layouts. Creating consumer touchpoints optimized for both physical environments and digital storefronts." })] }), h.jsxs("div", { className: "border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group", children: [h.jsx("h3", { className: "text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300", children: "Visual Comm. & Integrated Campaigns" }), h.jsx("p", { className: "text-neutral-400 leading-relaxed", children: "High-impact creative execution designed to solve real-world customer acquisition problems. Complete design suites tailored for digital-first media, performance ads, print, and major outdoor brand activations." })] }), h.jsxs("div", { className: "border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group", children: [h.jsx("h3", { className: "text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300", children: "Brand Narrative & Digital Content" }), h.jsx("p", { className: "text-neutral-400 leading-relaxed", children: "Content strategies that shift your brand voice from a functional product description to a compelling story that builds audience loyalty. Development of multi-channel digital content, video assets, and foundational marketing materials." })] })] })] }) }), h.jsx("section", { id: "approach", className: "py-32 px-6 bg-neutral-900 border-t border-b border-neutral-800", children: h.jsxs("div", { className: "max-w-7xl mx-auto", children: [h.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-20 text-center", children: "Growth Outcomes" }), h.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [h.jsxs("div", { className: "p-12 bg-neutral-800/30 border-l-4 border-gold", children: [h.jsx("p", { className: "text-2xl font-light italic leading-relaxed mb-8 text-neutral-300", children: '"They skipped the typical agency onboarding process and rebuilt our visual identity to match our growth ambitions. The new brand system directly supported our transition from a local startup to a national presence."' }), h.jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-gold", children: "\u2014 Founder & CEO, Consumer Retail Venture" })] }), h.jsxs("div", { className: "p-12 bg-neutral-800/30 border-l-4 border-gold", children: [h.jsx("p", { className: "text-2xl font-light italic leading-relaxed mb-8 text-neutral-300", children: '"Working directly with senior creatives who understand business metrics saved us months of trial and error. Our landing page conversions and ad creative performance improved almost immediately."' }), h.jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-gold", children: "\u2014 VP of Marketing, Series A Technology Company" })] })] })] }) }), h.jsx("section", { id: "team", className: "py-32 px-6 bg-neutral-950", children: h.jsxs("div", { className: "max-w-7xl mx-auto", children: [h.jsxs("div", { className: "mb-24", children: [h.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "The Partners" }), h.jsx("p", { className: "text-xl text-neutral-400 max-w-3xl", children: "The people who build your strategy are the exact same individuals who execute the work." })] }), h.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24", children: [h.jsxs("div", { className: "border border-neutral-800 p-12", children: [h.jsxs("h3", { className: "text-3xl font-bold mb-2", children: ["Ashu ", h.jsx("span", { className: "text-xl text-neutral-500 font-normal", children: "(Shailender Mahajan)" })] }), h.jsx("p", { className: "text-gold uppercase tracking-widest text-sm mb-10", children: "Creative & Design Lead" }), h.jsxs("ul", { className: "space-y-6 text-neutral-400", children: [h.jsxs("li", { className: "flex gap-4", children: [h.jsx("span", { className: "text-gold font-bold", children: "\u2022" }), h.jsxs("span", { children: [h.jsx("strong", { children: "Background:" }), " Spent over two decades as an Executive Creative Director at premier global advertising networks, including Ogilvy."] })] }), h.jsxs("li", { className: "flex gap-4", children: [h.jsx("span", { className: "text-gold font-bold", children: "\u2022" }), h.jsxs("span", { children: [h.jsx("strong", { children: "Track Record:" }), " Directed the creative vision for over 50 diverse brands, managing multi-member creative teams and earning more than 75 national and international awards for creative effectiveness."] })] }), h.jsxs("li", { className: "flex gap-4", children: [h.jsx("span", { className: "text-gold font-bold", children: "\u2022" }), h.jsxs("span", { children: [h.jsx("strong", { children: "Focus:" }), " Oversees all design-first solutions, visual communication systems, and brand packaging architectures."] })] })] })] }), h.jsxs("div", { className: "border border-neutral-800 p-12", children: [h.jsx("h3", { className: "text-3xl font-bold mb-2", children: "Gaveesh Jain" }), h.jsx("p", { className: "text-gold uppercase tracking-widest text-sm mb-10", children: "Strategy & Growth Lead" }), h.jsxs("ul", { className: "space-y-6 text-neutral-400", children: [h.jsxs("li", { className: "flex gap-4", children: [h.jsx("span", { className: "text-gold font-bold", children: "\u2022" }), h.jsxs("span", { children: [h.jsx("strong", { children: "Background:" }), " Seasoned entrepreneur and strategist who has founded, operated, and successfully scaled multiple startup ventures across technological and consumer markets."] })] }), h.jsxs("li", { className: "flex gap-4", children: [h.jsx("span", { className: "text-gold font-bold", children: "\u2022" }), h.jsxs("span", { children: [h.jsx("strong", { children: "Track Record:" }), " Deep hands-on experience navigating the precise challenges of seed-stage incubation, product-market fit, capital modeling, and early growth constraints."] })] }), h.jsxs("li", { className: "flex gap-4", children: [h.jsx("span", { className: "text-gold font-bold", children: "\u2022" }), h.jsxs("span", { children: [h.jsx("strong", { children: "Focus:" }), " Aligns all creative briefs with operational realities, investor expectations, and unit economics."] })] })] })] })] }), h.jsxs("div", { className: "bg-neutral-900 p-12 md:p-16 border border-neutral-800 text-center max-w-4xl mx-auto", children: [h.jsx("h3", { className: "text-2xl font-bold mb-6 text-white", children: "Our Empanelled Expert Network" }), h.jsx("p", { className: "text-lg text-neutral-400 leading-relaxed", children: "We do not use junior account managers or generalist staff. For specialized execution needs\u2014such as advanced animation, technical development, copy-heavy strategy, or high-end video production\u2014we tap into our pre-vetted network of independent senior professionals. Every external specialist is hand-selected and directly managed by Ashu and Gaveesh, ensuring your startup receives top-tier agency quality without the structural overhead." })] })] }) }), h.jsxs("footer", { id: "contact", className: "bg-white text-neutral-900", children: [h.jsxs("div", { className: "max-w-4xl mx-auto py-32 px-6 text-center border-b border-neutral-200", children: [h.jsx("h2", { className: "text-4xl md:text-5xl font-extrabold mb-8 tracking-tight", children: "Ready to build an investor-ready brand?" }), h.jsx("p", { className: "text-2xl text-neutral-600 mb-12", children: "Let\u2019s skip the pitch meetings and discuss your business goals directly." }), h.jsx("button", { className: "px-10 py-5 bg-neutral-900 text-white font-bold text-center uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300 w-full sm:w-auto", children: "Schedule a Briefing Call" })] }), h.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [h.jsx("div", { className: "text-sm font-medium text-neutral-500", children: "\xA9 2026 A&G Brand Consultants. All rights reserved." }), h.jsxs("div", { className: "flex space-x-6", children: [h.jsx("a", { href: "#services", className: "text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-gold transition-colors", children: "Services" }), h.jsx("a", { href: "#approach", className: "text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-gold transition-colors", children: "Our Approach" }), h.jsx("a", { href: "#team", className: "text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-gold transition-colors", children: "Team" })] })] }), h.jsxs("div", { className: "bg-neutral-100 py-2 text-center text-xs text-neutral-400", children: ["Wasm Core Status: ", e] })] })] });
}
Gl.createRoot(document.getElementById("root")).render(h.jsx(Sc.StrictMode, { children: h.jsx(Hd, {}) }));
