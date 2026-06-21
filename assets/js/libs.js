// src/assets/js/libs.js
var Swiper = (function() {
  "use strict";
  function e(e2) {
    return null !== e2 && "object" == typeof e2 && "constructor" in e2 && e2.constructor === Object;
  }
  function t(s2 = {}, a2 = {}) {
    const i2 = ["__proto__", "constructor", "prototype"];
    Object.keys(a2).filter((e2) => i2.indexOf(e2) < 0).forEach((i3) => {
      void 0 === s2[i3] ? s2[i3] = a2[i3] : e(a2[i3]) && e(s2[i3]) && Object.keys(a2[i3]).length > 0 && t(s2[i3], a2[i3]);
    });
  }
  const s = { body: {}, addEventListener() {
  }, removeEventListener() {
  }, activeElement: { blur() {
  }, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {
  } }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {
  }, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
  function a() {
    const e2 = "undefined" != typeof document ? document : {};
    return t(e2, s), e2;
  }
  const i = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
  }, pushState() {
  }, go() {
  }, back() {
  } }, CustomEvent: function() {
    return this;
  }, addEventListener() {
  }, removeEventListener() {
  }, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {
  }, Date() {
  }, screen: {}, setTimeout() {
  }, clearTimeout() {
  }, matchMedia: () => ({}), requestAnimationFrame: (e2) => "undefined" == typeof setTimeout ? (e2(), null) : setTimeout(e2, 0), cancelAnimationFrame(e2) {
    "undefined" != typeof setTimeout && clearTimeout(e2);
  } };
  function r() {
    const e2 = "undefined" != typeof window ? window : {};
    return t(e2, i), e2;
  }
  function n(e2 = "") {
    return e2.trim().split(" ").filter((e3) => !!e3.trim());
  }
  function l(e2, t2 = 0) {
    return setTimeout(e2, t2);
  }
  function o() {
    return Date.now();
  }
  function d(e2, t2 = "x") {
    const s2 = r();
    let a2, i2, n2;
    const l2 = (function(e3) {
      const t3 = r();
      let s3;
      return t3.getComputedStyle && (s3 = t3.getComputedStyle(e3, null)), !s3 && e3.currentStyle && (s3 = e3.currentStyle), s3 || (s3 = e3.style), s3;
    })(e2);
    return s2.WebKitCSSMatrix ? (i2 = l2.transform || l2.webkitTransform, i2.split(",").length > 6 && (i2 = i2.split(", ").map((e3) => e3.replace(",", ".")).join(", ")), n2 = new s2.WebKitCSSMatrix("none" === i2 ? "" : i2)) : (n2 = l2.MozTransform || l2.OTransform || l2.MsTransform || l2.msTransform || l2.transform || l2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a2 = n2.toString().split(",")), "x" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m41 : 16 === a2.length ? parseFloat(a2[12]) : parseFloat(a2[4])), "y" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m42 : 16 === a2.length ? parseFloat(a2[13]) : parseFloat(a2[5])), i2 || 0;
  }
  function c(e2) {
    return "object" == typeof e2 && null !== e2 && e2.constructor && "Object" === Object.prototype.toString.call(e2).slice(8, -1);
  }
  function p(e2) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e2 instanceof HTMLElement : e2 && (1 === e2.nodeType || 11 === e2.nodeType);
  }
  function u(...e2) {
    const t2 = Object(e2[0]);
    for (let s2 = 1; s2 < e2.length; s2 += 1) {
      const a2 = e2[s2];
      if (null != a2 && !p(a2)) {
        const e3 = Object.keys(Object(a2)).filter((e4) => "__proto__" !== e4 && "constructor" !== e4 && "prototype" !== e4);
        for (let s3 = 0, i2 = e3.length; s3 < i2; s3 += 1) {
          const i3 = e3[s3], r2 = Object.getOwnPropertyDescriptor(a2, i3);
          void 0 !== r2 && r2.enumerable && (c(t2[i3]) && c(a2[i3]) ? a2[i3].__swiper__ ? t2[i3] = a2[i3] : u(t2[i3], a2[i3]) : !c(t2[i3]) && c(a2[i3]) ? (t2[i3] = {}, a2[i3].__swiper__ ? t2[i3] = a2[i3] : u(t2[i3], a2[i3])) : t2[i3] = a2[i3]);
        }
      }
    }
    return t2;
  }
  function m(e2, t2, s2) {
    e2.style.setProperty(t2, s2);
  }
  function h({ swiper: e2, targetPosition: t2, side: s2 }) {
    const a2 = r(), i2 = -e2.translate;
    let n2, l2 = null;
    const o2 = e2.params.speed;
    e2.wrapperEl.style.scrollSnapType = "none", a2.cancelAnimationFrame(e2.cssModeFrameID);
    const d2 = t2 > i2 ? "next" : "prev", c2 = (e3, t3) => "next" === d2 && e3 >= t3 || "prev" === d2 && e3 <= t3, p2 = () => {
      n2 = (/* @__PURE__ */ new Date()).getTime(), null === l2 && (l2 = n2);
      const r2 = Math.max(Math.min((n2 - l2) / o2, 1), 0), d3 = 0.5 - Math.cos(r2 * Math.PI) / 2;
      let u2 = i2 + d3 * (t2 - i2);
      if (c2(u2, t2) && (u2 = t2), e2.wrapperEl.scrollTo({ [s2]: u2 }), c2(u2, t2)) return e2.wrapperEl.style.overflow = "hidden", e2.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e2.wrapperEl.style.overflow = "", e2.wrapperEl.scrollTo({ [s2]: u2 });
      }), void a2.cancelAnimationFrame(e2.cssModeFrameID);
      e2.cssModeFrameID = a2.requestAnimationFrame(p2);
    };
    p2();
  }
  function f(e2) {
    return e2.querySelector(".swiper-slide-transform") || e2.shadowRoot && e2.shadowRoot.querySelector(".swiper-slide-transform") || e2;
  }
  function g(e2, t2 = "") {
    const s2 = r(), a2 = [...e2.children];
    return s2.HTMLSlotElement && e2 instanceof HTMLSlotElement && a2.push(...e2.assignedElements()), t2 ? a2.filter((e3) => e3.matches(t2)) : a2;
  }
  function v(e2) {
    try {
      return void console.warn(e2);
    } catch (e3) {
    }
  }
  function w(e2, t2 = []) {
    const s2 = document.createElement(e2);
    return s2.classList.add(...Array.isArray(t2) ? t2 : n(t2)), s2;
  }
  function b(e2) {
    const t2 = r(), s2 = a(), i2 = e2.getBoundingClientRect(), n2 = s2.body, l2 = e2.clientTop || n2.clientTop || 0, o2 = e2.clientLeft || n2.clientLeft || 0, d2 = e2 === t2 ? t2.scrollY : e2.scrollTop, c2 = e2 === t2 ? t2.scrollX : e2.scrollLeft;
    return { top: i2.top + d2 - l2, left: i2.left + c2 - o2 };
  }
  function y(e2, t2) {
    return r().getComputedStyle(e2, null).getPropertyValue(t2);
  }
  function E(e2) {
    let t2, s2 = e2;
    if (s2) {
      for (t2 = 0; null !== (s2 = s2.previousSibling); ) 1 === s2.nodeType && (t2 += 1);
      return t2;
    }
  }
  function x(e2, t2) {
    const s2 = [];
    let a2 = e2.parentElement;
    for (; a2; ) t2 ? a2.matches(t2) && s2.push(a2) : s2.push(a2), a2 = a2.parentElement;
    return s2;
  }
  function S(e2, t2) {
    t2 && e2.addEventListener("transitionend", function s2(a2) {
      a2.target === e2 && (t2.call(e2, a2), e2.removeEventListener("transitionend", s2));
    });
  }
  function T(e2, t2, s2) {
    const a2 = r();
    return s2 ? e2["width" === t2 ? "offsetWidth" : "offsetHeight"] + parseFloat(a2.getComputedStyle(e2, null).getPropertyValue("width" === t2 ? "margin-right" : "margin-top")) + parseFloat(a2.getComputedStyle(e2, null).getPropertyValue("width" === t2 ? "margin-left" : "margin-bottom")) : e2.offsetWidth;
  }
  function M(e2) {
    return (Array.isArray(e2) ? e2 : [e2]).filter((e3) => !!e3);
  }
  function C(e2) {
    return (t2) => Math.abs(t2) > 0 && e2.browser && e2.browser.need3dFix && Math.abs(t2) % 90 == 0 ? t2 + 1e-3 : t2;
  }
  function P(e2, t2 = "") {
    "undefined" != typeof trustedTypes ? e2.innerHTML = trustedTypes.createPolicy("html", { createHTML: (e3) => e3 }).createHTML(t2) : e2.innerHTML = t2;
  }
  let L, I, z;
  function A() {
    return L || (L = (function() {
      const e2 = r(), t2 = a();
      return { smoothScroll: t2.documentElement && t2.documentElement.style && "scrollBehavior" in t2.documentElement.style, touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t2 instanceof e2.DocumentTouch) };
    })()), L;
  }
  function $(e2 = {}) {
    return I || (I = (function({ userAgent: e3 } = {}) {
      const t2 = A(), s2 = r(), a2 = s2.navigator.platform, i2 = e3 || s2.navigator.userAgent, n2 = { ios: false, android: false }, l2 = s2.screen.width, o2 = s2.screen.height, d2 = i2.match(/(Android);?[\s\/]+([\d.]+)?/);
      let c2 = i2.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
      const p2 = i2.match(/(iPod)(.*OS\s([\d_]+))?/), u2 = !c2 && i2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m2 = "Win32" === a2;
      let h2 = "MacIntel" === a2;
      return !c2 && h2 && t2.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l2}x${o2}`) >= 0 && (c2 = i2.match(/(Version)\/([\d.]+)/), c2 || (c2 = [0, 1, "13_0_0"]), h2 = false), d2 && !m2 && (n2.os = "android", n2.android = true), (c2 || u2 || p2) && (n2.os = "ios", n2.ios = true), n2;
    })(e2)), I;
  }
  function k() {
    return z || (z = (function() {
      const e2 = r(), t2 = $();
      let s2 = false;
      function a2() {
        const t3 = e2.navigator.userAgent.toLowerCase();
        return t3.indexOf("safari") >= 0 && t3.indexOf("chrome") < 0 && t3.indexOf("android") < 0;
      }
      if (a2()) {
        const t3 = String(e2.navigator.userAgent);
        if (t3.includes("Version/")) {
          const [e3, a3] = t3.split("Version/")[1].split(" ")[0].split(".").map((e4) => Number(e4));
          s2 = e3 < 16 || 16 === e3 && a3 < 2;
        }
      }
      const i2 = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e2.navigator.userAgent), n2 = a2();
      return { isSafari: s2 || n2, needPerspectiveFix: s2, need3dFix: n2 || i2 && t2.ios, isWebView: i2 };
    })()), z;
  }
  var O = { on(e2, t2, s2) {
    const a2 = this;
    if (!a2.eventsListeners || a2.destroyed) return a2;
    if ("function" != typeof t2) return a2;
    const i2 = s2 ? "unshift" : "push";
    return e2.split(" ").forEach((e3) => {
      a2.eventsListeners[e3] || (a2.eventsListeners[e3] = []), a2.eventsListeners[e3][i2](t2);
    }), a2;
  }, once(e2, t2, s2) {
    const a2 = this;
    if (!a2.eventsListeners || a2.destroyed) return a2;
    if ("function" != typeof t2) return a2;
    function i2(...s3) {
      a2.off(e2, i2), i2.__emitterProxy && delete i2.__emitterProxy, t2.apply(a2, s3);
    }
    return i2.__emitterProxy = t2, a2.on(e2, i2, s2);
  }, onAny(e2, t2) {
    const s2 = this;
    if (!s2.eventsListeners || s2.destroyed) return s2;
    if ("function" != typeof e2) return s2;
    const a2 = t2 ? "unshift" : "push";
    return s2.eventsAnyListeners.indexOf(e2) < 0 && s2.eventsAnyListeners[a2](e2), s2;
  }, offAny(e2) {
    const t2 = this;
    if (!t2.eventsListeners || t2.destroyed) return t2;
    if (!t2.eventsAnyListeners) return t2;
    const s2 = t2.eventsAnyListeners.indexOf(e2);
    return s2 >= 0 && t2.eventsAnyListeners.splice(s2, 1), t2;
  }, off(e2, t2) {
    const s2 = this;
    return !s2.eventsListeners || s2.destroyed ? s2 : s2.eventsListeners ? (e2.split(" ").forEach((e3) => {
      void 0 === t2 ? s2.eventsListeners[e3] = [] : s2.eventsListeners[e3] && s2.eventsListeners[e3].forEach((a2, i2) => {
        (a2 === t2 || a2.__emitterProxy && a2.__emitterProxy === t2) && s2.eventsListeners[e3].splice(i2, 1);
      });
    }), s2) : s2;
  }, emit(...e2) {
    const t2 = this;
    if (!t2.eventsListeners || t2.destroyed) return t2;
    if (!t2.eventsListeners) return t2;
    let s2, a2, i2;
    "string" == typeof e2[0] || Array.isArray(e2[0]) ? (s2 = e2[0], a2 = e2.slice(1, e2.length), i2 = t2) : (s2 = e2[0].events, a2 = e2[0].data, i2 = e2[0].context || t2), a2.unshift(i2);
    return (Array.isArray(s2) ? s2 : s2.split(" ")).forEach((e3) => {
      t2.eventsAnyListeners && t2.eventsAnyListeners.length && t2.eventsAnyListeners.forEach((t3) => {
        t3.apply(i2, [e3, ...a2]);
      }), t2.eventsListeners && t2.eventsListeners[e3] && t2.eventsListeners[e3].forEach((e4) => {
        e4.apply(i2, a2);
      });
    }), t2;
  } };
  const D = (e2, t2, s2) => {
    t2 && !e2.classList.contains(s2) ? e2.classList.add(s2) : !t2 && e2.classList.contains(s2) && e2.classList.remove(s2);
  };
  const G = (e2, t2, s2) => {
    t2 && !e2.classList.contains(s2) ? e2.classList.add(s2) : !t2 && e2.classList.contains(s2) && e2.classList.remove(s2);
  };
  const X = (e2, t2) => {
    if (!e2 || e2.destroyed || !e2.params) return;
    const s2 = t2.closest(e2.isElement ? "swiper-slide" : `.${e2.params.slideClass}`);
    if (s2) {
      let t3 = s2.querySelector(`.${e2.params.lazyPreloaderClass}`);
      !t3 && e2.isElement && (s2.shadowRoot ? t3 = s2.shadowRoot.querySelector(`.${e2.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s2.shadowRoot && (t3 = s2.shadowRoot.querySelector(`.${e2.params.lazyPreloaderClass}`), t3 && !t3.lazyPreloaderManaged && t3.remove());
      })), t3 && !t3.lazyPreloaderManaged && t3.remove();
    }
  }, B = (e2, t2) => {
    if (!e2.slides[t2]) return;
    const s2 = e2.slides[t2].querySelector('[loading="lazy"]');
    s2 && s2.removeAttribute("loading");
  }, Y = (e2) => {
    if (!e2 || e2.destroyed || !e2.params) return;
    let t2 = e2.params.lazyPreloadPrevNext;
    const s2 = e2.slides.length;
    if (!s2 || !t2 || t2 < 0) return;
    t2 = Math.min(t2, s2);
    const a2 = "auto" === e2.params.slidesPerView ? e2.slidesPerViewDynamic() : Math.ceil(e2.params.slidesPerView), i2 = e2.activeIndex;
    if (e2.params.grid && e2.params.grid.rows > 1) {
      const s3 = i2, r3 = [s3 - t2];
      return r3.push(...Array.from({ length: t2 }).map((e3, t3) => s3 + a2 + t3)), void e2.slides.forEach((t3, s4) => {
        r3.includes(t3.column) && B(e2, s4);
      });
    }
    const r2 = i2 + a2 - 1;
    if (e2.params.rewind || e2.params.loop) for (let a3 = i2 - t2; a3 <= r2 + t2; a3 += 1) {
      const t3 = (a3 % s2 + s2) % s2;
      (t3 < i2 || t3 > r2) && B(e2, t3);
    }
    else for (let a3 = Math.max(i2 - t2, 0); a3 <= Math.min(r2 + t2, s2 - 1); a3 += 1) a3 !== i2 && (a3 > r2 || a3 < i2) && B(e2, a3);
  };
  var H = { updateSize: function() {
    const e2 = this;
    let t2, s2;
    const a2 = e2.el;
    t2 = void 0 !== e2.params.width && null !== e2.params.width ? e2.params.width : a2.clientWidth, s2 = void 0 !== e2.params.height && null !== e2.params.height ? e2.params.height : a2.clientHeight, 0 === t2 && e2.isHorizontal() || 0 === s2 && e2.isVertical() || (t2 = t2 - parseInt(y(a2, "padding-left") || 0, 10) - parseInt(y(a2, "padding-right") || 0, 10), s2 = s2 - parseInt(y(a2, "padding-top") || 0, 10) - parseInt(y(a2, "padding-bottom") || 0, 10), Number.isNaN(t2) && (t2 = 0), Number.isNaN(s2) && (s2 = 0), Object.assign(e2, { width: t2, height: s2, size: e2.isHorizontal() ? t2 : s2 }));
  }, updateSlides: function() {
    const e2 = this;
    function t2(t3, s3) {
      return parseFloat(t3.getPropertyValue(e2.getDirectionLabel(s3)) || 0);
    }
    const s2 = e2.params, { wrapperEl: a2, slidesEl: i2, rtlTranslate: r2, wrongRTL: n2 } = e2, l2 = e2.virtual && s2.virtual.enabled, o2 = l2 ? e2.virtual.slides.length : e2.slides.length, d2 = g(i2, `.${e2.params.slideClass}, swiper-slide`), c2 = l2 ? e2.virtual.slides.length : d2.length;
    let p2 = [];
    const u2 = [], h2 = [];
    let f2 = s2.slidesOffsetBefore;
    "function" == typeof f2 && (f2 = s2.slidesOffsetBefore.call(e2));
    let v2 = s2.slidesOffsetAfter;
    "function" == typeof v2 && (v2 = s2.slidesOffsetAfter.call(e2));
    const w2 = e2.snapGrid.length, b2 = e2.slidesGrid.length, E2 = e2.size - f2 - v2;
    let x2 = s2.spaceBetween, S2 = -f2, M2 = 0, C2 = 0;
    if (void 0 === E2) return;
    "string" == typeof x2 && x2.indexOf("%") >= 0 ? x2 = parseFloat(x2.replace("%", "")) / 100 * E2 : "string" == typeof x2 && (x2 = parseFloat(x2)), e2.virtualSize = -x2 - f2 - v2, d2.forEach((e3) => {
      r2 ? e3.style.marginLeft = "" : e3.style.marginRight = "", e3.style.marginBottom = "", e3.style.marginTop = "";
    }), s2.centeredSlides && s2.cssMode && (m(a2, "--swiper-centered-offset-before", ""), m(a2, "--swiper-centered-offset-after", "")), s2.cssMode && (m(a2, "--swiper-slides-offset-before", `${f2}px`), m(a2, "--swiper-slides-offset-after", `${v2}px`));
    const P2 = s2.grid && s2.grid.rows > 1 && e2.grid;
    let L2;
    P2 ? e2.grid.initSlides(d2) : e2.grid && e2.grid.unsetSlides();
    const I2 = "auto" === s2.slidesPerView && s2.breakpoints && Object.keys(s2.breakpoints).filter((e3) => void 0 !== s2.breakpoints[e3].slidesPerView).length > 0;
    for (let a3 = 0; a3 < c2; a3 += 1) {
      L2 = 0;
      const i3 = d2[a3];
      if (!i3 || (P2 && e2.grid.updateSlide(a3, i3, d2), "none" !== y(i3, "display"))) {
        if (l2 && "auto" === s2.slidesPerView) s2.virtual.slidesPerViewAutoSlideSize && (L2 = s2.virtual.slidesPerViewAutoSlideSize), L2 && i3 && (s2.roundLengths && (L2 = Math.floor(L2)), i3.style[e2.getDirectionLabel("width")] = `${L2}px`);
        else if ("auto" === s2.slidesPerView) {
          I2 && (i3.style[e2.getDirectionLabel("width")] = "");
          const a4 = getComputedStyle(i3), r3 = i3.style.transform, n3 = i3.style.webkitTransform;
          if (r3 && (i3.style.transform = "none"), n3 && (i3.style.webkitTransform = "none"), s2.roundLengths) L2 = e2.isHorizontal() ? T(i3, "width", true) : T(i3, "height", true);
          else {
            const e3 = t2(a4, "width"), s3 = t2(a4, "padding-left"), r4 = t2(a4, "padding-right"), n4 = t2(a4, "margin-left"), l3 = t2(a4, "margin-right"), o3 = a4.getPropertyValue("box-sizing");
            if (o3 && "border-box" === o3) L2 = e3 + n4 + l3;
            else {
              const { clientWidth: t3, offsetWidth: a5 } = i3;
              L2 = e3 + s3 + r4 + n4 + l3 + (a5 - t3);
            }
          }
          r3 && (i3.style.transform = r3), n3 && (i3.style.webkitTransform = n3), s2.roundLengths && (L2 = Math.floor(L2));
        } else L2 = (E2 - (s2.slidesPerView - 1) * x2) / s2.slidesPerView, s2.roundLengths && (L2 = Math.floor(L2)), i3 && (i3.style[e2.getDirectionLabel("width")] = `${L2}px`);
        i3 && (i3.swiperSlideSize = L2), h2.push(L2), s2.centeredSlides ? (S2 = S2 + L2 / 2 + M2 / 2 + x2, 0 === M2 && 0 !== a3 && (S2 = S2 - E2 / 2 - x2), 0 === a3 && (S2 = S2 - E2 / 2 - x2), Math.abs(S2) < 1e-3 && (S2 = 0), s2.roundLengths && (S2 = Math.floor(S2)), C2 % s2.slidesPerGroup === 0 && p2.push(S2), u2.push(S2)) : (s2.roundLengths && (S2 = Math.floor(S2)), (C2 - Math.min(e2.params.slidesPerGroupSkip, C2)) % e2.params.slidesPerGroup === 0 && p2.push(S2), u2.push(S2), S2 = S2 + L2 + x2), e2.virtualSize += L2 + x2, M2 = L2, C2 += 1;
      }
    }
    if (e2.virtualSize = Math.max(e2.virtualSize, E2) + v2, r2 && n2 && ("slide" === s2.effect || "coverflow" === s2.effect) && (a2.style.width = `${e2.virtualSize + x2}px`), s2.setWrapperSize && (a2.style[e2.getDirectionLabel("width")] = `${e2.virtualSize + x2}px`), P2 && e2.grid.updateWrapperSize(L2, p2), !s2.centeredSlides) {
      const t3 = "auto" !== s2.slidesPerView && s2.slidesPerView % 1 != 0, a3 = s2.snapToSlideEdge && !s2.loop && ("auto" === s2.slidesPerView || t3);
      let i3 = p2.length;
      if (a3) {
        let e3;
        if ("auto" === s2.slidesPerView) {
          e3 = 1;
          let t4 = 0;
          for (let s3 = h2.length - 1; s3 >= 0 && (t4 += h2[s3] + (s3 < h2.length - 1 ? x2 : 0), t4 <= E2); s3 -= 1) e3 = h2.length - s3;
        } else e3 = Math.floor(s2.slidesPerView);
        i3 = Math.max(c2 - e3, 0);
      }
      const r3 = [];
      for (let t4 = 0; t4 < p2.length; t4 += 1) {
        let n3 = p2[t4];
        s2.roundLengths && (n3 = Math.floor(n3)), a3 ? t4 <= i3 && r3.push(n3) : p2[t4] <= e2.virtualSize - E2 && r3.push(n3);
      }
      p2 = r3, Math.floor(e2.virtualSize - E2) - Math.floor(p2[p2.length - 1]) > 1 && (a3 || p2.push(e2.virtualSize - E2));
    }
    if (l2 && s2.loop) {
      const t3 = h2[0] + x2;
      if (s2.slidesPerGroup > 1) {
        const a3 = Math.ceil((e2.virtual.slidesBefore + e2.virtual.slidesAfter) / s2.slidesPerGroup), i3 = t3 * s2.slidesPerGroup;
        for (let e3 = 0; e3 < a3; e3 += 1) p2.push(p2[p2.length - 1] + i3);
      }
      for (let a3 = 0; a3 < e2.virtual.slidesBefore + e2.virtual.slidesAfter; a3 += 1) 1 === s2.slidesPerGroup && p2.push(p2[p2.length - 1] + t3), u2.push(u2[u2.length - 1] + t3), e2.virtualSize += t3;
    }
    if (0 === p2.length && (p2 = [0]), 0 !== x2) {
      const t3 = e2.isHorizontal() && r2 ? "marginLeft" : e2.getDirectionLabel("marginRight");
      d2.filter((e3, t4) => !(s2.cssMode && !s2.loop) || t4 !== d2.length - 1).forEach((e3) => {
        e3.style[t3] = `${x2}px`;
      });
    }
    if (s2.centeredSlides && s2.centeredSlidesBounds) {
      let e3 = 0;
      h2.forEach((t4) => {
        e3 += t4 + (x2 || 0);
      }), e3 -= x2;
      const t3 = e3 > E2 ? e3 - E2 : 0;
      p2 = p2.map((e4) => e4 <= 0 ? -f2 : e4 > t3 ? t3 + v2 : e4);
    }
    if (s2.centerInsufficientSlides) {
      let e3 = 0;
      if (h2.forEach((t3) => {
        e3 += t3 + (x2 || 0);
      }), e3 -= x2, e3 < E2) {
        const t3 = (E2 - e3) / 2;
        p2.forEach((e4, s3) => {
          p2[s3] = e4 - t3;
        }), u2.forEach((e4, s3) => {
          u2[s3] = e4 + t3;
        });
      }
    }
    if (Object.assign(e2, { slides: d2, snapGrid: p2, slidesGrid: u2, slidesSizesGrid: h2 }), s2.centeredSlides && s2.cssMode && !s2.centeredSlidesBounds) {
      m(a2, "--swiper-centered-offset-before", -p2[0] + "px"), m(a2, "--swiper-centered-offset-after", e2.size / 2 - h2[h2.length - 1] / 2 + "px");
      const t3 = -e2.snapGrid[0], s3 = -e2.slidesGrid[0];
      e2.snapGrid = e2.snapGrid.map((e3) => e3 + t3), e2.slidesGrid = e2.slidesGrid.map((e3) => e3 + s3);
    }
    if (c2 !== o2 && e2.emit("slidesLengthChange"), p2.length !== w2 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), u2.length !== b2 && e2.emit("slidesGridLengthChange"), s2.watchSlidesProgress && e2.updateSlidesOffset(), e2.emit("slidesUpdated"), !(l2 || s2.cssMode || "slide" !== s2.effect && "fade" !== s2.effect)) {
      const t3 = `${s2.containerModifierClass}backface-hidden`, a3 = e2.el.classList.contains(t3);
      c2 <= s2.maxBackfaceHiddenSlides ? a3 || e2.el.classList.add(t3) : a3 && e2.el.classList.remove(t3);
    }
  }, updateAutoHeight: function(e2) {
    const t2 = this, s2 = [], a2 = t2.virtual && t2.params.virtual.enabled;
    let i2, r2 = 0;
    "number" == typeof e2 ? t2.setTransition(e2) : true === e2 && t2.setTransition(t2.params.speed);
    const n2 = (e3) => a2 ? t2.slides[t2.getSlideIndexByData(e3)] : t2.slides[e3];
    if ("auto" !== t2.params.slidesPerView && t2.params.slidesPerView > 1) if (t2.params.centeredSlides) (t2.visibleSlides || []).forEach((e3) => {
      s2.push(e3);
    });
    else for (i2 = 0; i2 < Math.ceil(t2.params.slidesPerView); i2 += 1) {
      const e3 = t2.activeIndex + i2;
      if (e3 > t2.slides.length && !a2) break;
      s2.push(n2(e3));
    }
    else s2.push(n2(t2.activeIndex));
    for (i2 = 0; i2 < s2.length; i2 += 1) if (void 0 !== s2[i2]) {
      const e3 = s2[i2].offsetHeight;
      r2 = e3 > r2 ? e3 : r2;
    }
    (r2 || 0 === r2) && (t2.wrapperEl.style.height = `${r2}px`);
  }, updateSlidesOffset: function() {
    const e2 = this, t2 = e2.slides, s2 = e2.isElement ? e2.isHorizontal() ? e2.wrapperEl.offsetLeft : e2.wrapperEl.offsetTop : 0;
    for (let a2 = 0; a2 < t2.length; a2 += 1) t2[a2].swiperSlideOffset = (e2.isHorizontal() ? t2[a2].offsetLeft : t2[a2].offsetTop) - s2 - e2.cssOverflowAdjustment();
  }, updateSlidesProgress: function(e2 = this && this.translate || 0) {
    const t2 = this, s2 = t2.params, { slides: a2, rtlTranslate: i2, snapGrid: r2 } = t2;
    if (0 === a2.length) return;
    void 0 === a2[0].swiperSlideOffset && t2.updateSlidesOffset();
    let n2 = -e2;
    i2 && (n2 = e2), t2.visibleSlidesIndexes = [], t2.visibleSlides = [];
    let l2 = s2.spaceBetween;
    "string" == typeof l2 && l2.indexOf("%") >= 0 ? l2 = parseFloat(l2.replace("%", "")) / 100 * t2.size : "string" == typeof l2 && (l2 = parseFloat(l2));
    for (let e3 = 0; e3 < a2.length; e3 += 1) {
      const o2 = a2[e3];
      let d2 = o2.swiperSlideOffset;
      s2.cssMode && s2.centeredSlides && (d2 -= a2[0].swiperSlideOffset);
      const c2 = (n2 + (s2.centeredSlides ? t2.minTranslate() : 0) - d2) / (o2.swiperSlideSize + l2), p2 = (n2 - r2[0] + (s2.centeredSlides ? t2.minTranslate() : 0) - d2) / (o2.swiperSlideSize + l2), u2 = -(n2 - d2), m2 = u2 + t2.slidesSizesGrid[e3], h2 = u2 >= 0 && u2 <= t2.size - t2.slidesSizesGrid[e3], f2 = u2 >= 0 && u2 < t2.size - 1 || m2 > 1 && m2 <= t2.size || u2 <= 0 && m2 >= t2.size;
      f2 && (t2.visibleSlides.push(o2), t2.visibleSlidesIndexes.push(e3)), D(o2, f2, s2.slideVisibleClass), D(o2, h2, s2.slideFullyVisibleClass), o2.progress = i2 ? -c2 : c2, o2.originalProgress = i2 ? -p2 : p2;
    }
  }, updateProgress: function(e2) {
    const t2 = this;
    if (void 0 === e2) {
      const s3 = t2.rtlTranslate ? -1 : 1;
      e2 = t2 && t2.translate && t2.translate * s3 || 0;
    }
    const s2 = t2.params, a2 = t2.maxTranslate() - t2.minTranslate();
    let { progress: i2, isBeginning: r2, isEnd: n2, progressLoop: l2 } = t2;
    const o2 = r2, d2 = n2;
    if (0 === a2) i2 = 0, r2 = true, n2 = true;
    else {
      i2 = (e2 - t2.minTranslate()) / a2;
      const s3 = Math.abs(e2 - t2.minTranslate()) < 1, l3 = Math.abs(e2 - t2.maxTranslate()) < 1;
      r2 = s3 || i2 <= 0, n2 = l3 || i2 >= 1, s3 && (i2 = 0), l3 && (i2 = 1);
    }
    if (s2.loop) {
      const s3 = t2.getSlideIndexByData(0), a3 = t2.getSlideIndexByData(t2.slides.length - 1), i3 = t2.slidesGrid[s3], r3 = t2.slidesGrid[a3], n3 = t2.slidesGrid[t2.slidesGrid.length - 1], o3 = Math.abs(e2);
      l2 = o3 >= i3 ? (o3 - i3) / n3 : (o3 + n3 - r3) / n3, l2 > 1 && (l2 -= 1);
    }
    Object.assign(t2, { progress: i2, progressLoop: l2, isBeginning: r2, isEnd: n2 }), (s2.watchSlidesProgress || s2.centeredSlides && s2.autoHeight) && t2.updateSlidesProgress(e2), r2 && !o2 && t2.emit("reachBeginning toEdge"), n2 && !d2 && t2.emit("reachEnd toEdge"), (o2 && !r2 || d2 && !n2) && t2.emit("fromEdge"), t2.emit("progress", i2);
  }, updateSlidesClasses: function() {
    const e2 = this, { slides: t2, params: s2, slidesEl: a2, activeIndex: i2 } = e2, r2 = e2.virtual && s2.virtual.enabled, n2 = e2.grid && s2.grid && s2.grid.rows > 1, l2 = (e3) => g(a2, `.${s2.slideClass}${e3}, swiper-slide${e3}`)[0];
    let o2, d2, c2;
    if (r2) if (s2.loop) {
      let t3 = i2 - e2.virtual.slidesBefore;
      t3 < 0 && (t3 = e2.virtual.slides.length + t3), t3 >= e2.virtual.slides.length && (t3 -= e2.virtual.slides.length), o2 = l2(`[data-swiper-slide-index="${t3}"]`);
    } else o2 = l2(`[data-swiper-slide-index="${i2}"]`);
    else n2 ? (o2 = t2.find((e3) => e3.column === i2), c2 = t2.find((e3) => e3.column === i2 + 1), d2 = t2.find((e3) => e3.column === i2 - 1)) : o2 = t2[i2];
    o2 && (n2 || (c2 = (function(e3, t3) {
      const s3 = [];
      for (; e3.nextElementSibling; ) {
        const a3 = e3.nextElementSibling;
        t3 ? a3.matches(t3) && s3.push(a3) : s3.push(a3), e3 = a3;
      }
      return s3;
    })(o2, `.${s2.slideClass}, swiper-slide`)[0], s2.loop && !c2 && (c2 = t2[0]), d2 = (function(e3, t3) {
      const s3 = [];
      for (; e3.previousElementSibling; ) {
        const a3 = e3.previousElementSibling;
        t3 ? a3.matches(t3) && s3.push(a3) : s3.push(a3), e3 = a3;
      }
      return s3;
    })(o2, `.${s2.slideClass}, swiper-slide`)[0], s2.loop && 0 === !d2 && (d2 = t2[t2.length - 1]))), t2.forEach((e3) => {
      G(e3, e3 === o2, s2.slideActiveClass), G(e3, e3 === c2, s2.slideNextClass), G(e3, e3 === d2, s2.slidePrevClass);
    }), e2.emitSlidesClasses();
  }, updateActiveIndex: function(e2) {
    const t2 = this, s2 = t2.rtlTranslate ? t2.translate : -t2.translate, { snapGrid: a2, params: i2, activeIndex: r2, realIndex: n2, snapIndex: l2 } = t2;
    let o2, d2 = e2;
    const c2 = (e3) => {
      let s3 = e3 - t2.virtual.slidesBefore;
      return s3 < 0 && (s3 = t2.virtual.slides.length + s3), s3 >= t2.virtual.slides.length && (s3 -= t2.virtual.slides.length), s3;
    };
    if (void 0 === d2 && (d2 = (function(e3) {
      const { slidesGrid: t3, params: s3 } = e3, a3 = e3.rtlTranslate ? e3.translate : -e3.translate;
      let i3;
      for (let e4 = 0; e4 < t3.length; e4 += 1) void 0 !== t3[e4 + 1] ? a3 >= t3[e4] && a3 < t3[e4 + 1] - (t3[e4 + 1] - t3[e4]) / 2 ? i3 = e4 : a3 >= t3[e4] && a3 < t3[e4 + 1] && (i3 = e4 + 1) : a3 >= t3[e4] && (i3 = e4);
      return s3.normalizeSlideIndex && (i3 < 0 || void 0 === i3) && (i3 = 0), i3;
    })(t2)), a2.indexOf(s2) >= 0) o2 = a2.indexOf(s2);
    else {
      const e3 = Math.min(i2.slidesPerGroupSkip, d2);
      o2 = e3 + Math.floor((d2 - e3) / i2.slidesPerGroup);
    }
    if (o2 >= a2.length && (o2 = a2.length - 1), d2 === r2 && !t2.params.loop) return void (o2 !== l2 && (t2.snapIndex = o2, t2.emit("snapIndexChange")));
    if (d2 === r2 && t2.params.loop && t2.virtual && t2.params.virtual.enabled) return void (t2.realIndex = c2(d2));
    const p2 = t2.grid && i2.grid && i2.grid.rows > 1;
    let u2;
    if (t2.virtual && i2.virtual.enabled) u2 = i2.loop ? c2(d2) : d2;
    else if (p2) {
      const e3 = t2.slides.find((e4) => e4.column === d2);
      let s3 = parseInt(e3.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(s3) && (s3 = Math.max(t2.slides.indexOf(e3), 0)), u2 = Math.floor(s3 / i2.grid.rows);
    } else if (t2.slides[d2]) {
      const e3 = t2.slides[d2].getAttribute("data-swiper-slide-index");
      u2 = e3 ? parseInt(e3, 10) : d2;
    } else u2 = d2;
    Object.assign(t2, { previousSnapIndex: l2, snapIndex: o2, previousRealIndex: n2, realIndex: u2, previousIndex: r2, activeIndex: d2 }), t2.initialized && Y(t2), t2.emit("activeIndexChange"), t2.emit("snapIndexChange"), (t2.initialized || t2.params.runCallbacksOnInit) && (n2 !== u2 && t2.emit("realIndexChange"), t2.emit("slideChange"));
  }, updateClickedSlide: function(e2, t2) {
    const s2 = this, a2 = s2.params;
    let i2 = e2.closest(`.${a2.slideClass}, swiper-slide`);
    !i2 && s2.isElement && t2 && t2.length > 1 && t2.includes(e2) && [...t2.slice(t2.indexOf(e2) + 1, t2.length)].forEach((e3) => {
      !i2 && e3.matches && e3.matches(`.${a2.slideClass}, swiper-slide`) && (i2 = e3);
    });
    let r2, n2 = false;
    if (i2) {
      for (let e3 = 0; e3 < s2.slides.length; e3 += 1) if (s2.slides[e3] === i2) {
        n2 = true, r2 = e3;
        break;
      }
    }
    if (!i2 || !n2) return s2.clickedSlide = void 0, void (s2.clickedIndex = void 0);
    s2.clickedSlide = i2, s2.virtual && s2.params.virtual.enabled ? s2.clickedIndex = parseInt(i2.getAttribute("data-swiper-slide-index"), 10) : s2.clickedIndex = r2, a2.slideToClickedSlide && void 0 !== s2.clickedIndex && s2.clickedIndex !== s2.activeIndex && s2.slideToClickedSlide();
  } };
  var N = { getTranslate: function(e2 = this.isHorizontal() ? "x" : "y") {
    const { params: t2, rtlTranslate: s2, translate: a2, wrapperEl: i2 } = this;
    if (t2.virtualTranslate) return s2 ? -a2 : a2;
    if (t2.cssMode) return a2;
    let r2 = d(i2, e2);
    return r2 += this.cssOverflowAdjustment(), s2 && (r2 = -r2), r2 || 0;
  }, setTranslate: function(e2, t2) {
    const s2 = this, { rtlTranslate: a2, params: i2, wrapperEl: r2, progress: n2 } = s2;
    let l2, o2 = 0, d2 = 0;
    s2.isHorizontal() ? o2 = a2 ? -e2 : e2 : d2 = e2, i2.roundLengths && (o2 = Math.floor(o2), d2 = Math.floor(d2)), s2.previousTranslate = s2.translate, s2.translate = s2.isHorizontal() ? o2 : d2, i2.cssMode ? r2[s2.isHorizontal() ? "scrollLeft" : "scrollTop"] = s2.isHorizontal() ? -o2 : -d2 : i2.virtualTranslate || (s2.isHorizontal() ? o2 -= s2.cssOverflowAdjustment() : d2 -= s2.cssOverflowAdjustment(), r2.style.transform = `translate3d(${o2}px, ${d2}px, 0px)`);
    const c2 = s2.maxTranslate() - s2.minTranslate();
    l2 = 0 === c2 ? 0 : (e2 - s2.minTranslate()) / c2, l2 !== n2 && s2.updateProgress(e2), s2.emit("setTranslate", s2.translate, t2);
  }, minTranslate: function() {
    return -this.snapGrid[0];
  }, maxTranslate: function() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }, translateTo: function(e2 = 0, t2 = this.params.speed, s2 = true, a2 = true, i2) {
    const r2 = this, { params: n2, wrapperEl: l2 } = r2;
    if (r2.animating && n2.preventInteractionOnTransition) return false;
    const o2 = r2.minTranslate(), d2 = r2.maxTranslate();
    let c2;
    if (c2 = a2 && e2 > o2 ? o2 : a2 && e2 < d2 ? d2 : e2, r2.updateProgress(c2), n2.cssMode) {
      const e3 = r2.isHorizontal();
      if (0 === t2) l2[e3 ? "scrollLeft" : "scrollTop"] = -c2;
      else {
        if (!r2.support.smoothScroll) return h({ swiper: r2, targetPosition: -c2, side: e3 ? "left" : "top" }), true;
        l2.scrollTo({ [e3 ? "left" : "top"]: -c2, behavior: "smooth" });
      }
      return true;
    }
    return 0 === t2 ? (r2.setTransition(0), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionEnd"))) : (r2.setTransition(t2), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionStart")), r2.animating || (r2.animating = true, r2.onTranslateToWrapperTransitionEnd || (r2.onTranslateToWrapperTransitionEnd = function(e3) {
      r2 && !r2.destroyed && e3.target === this && (r2.wrapperEl.removeEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.onTranslateToWrapperTransitionEnd = null, delete r2.onTranslateToWrapperTransitionEnd, r2.animating = false, s2 && r2.emit("transitionEnd"));
    }), r2.wrapperEl.addEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd))), true;
  } };
  function R({ swiper: e2, runCallbacks: t2, direction: s2, step: a2 }) {
    const { activeIndex: i2, previousIndex: r2 } = e2;
    let n2 = s2;
    n2 || (n2 = i2 > r2 ? "next" : i2 < r2 ? "prev" : "reset"), e2.emit(`transition${a2}`), t2 && "reset" === n2 ? e2.emit(`slideResetTransition${a2}`) : t2 && i2 !== r2 && (e2.emit(`slideChangeTransition${a2}`), "next" === n2 ? e2.emit(`slideNextTransition${a2}`) : e2.emit(`slidePrevTransition${a2}`));
  }
  var V = { slideTo: function(e2 = 0, t2, s2 = true, a2, i2) {
    "string" == typeof e2 && (e2 = parseInt(e2, 10));
    const r2 = this;
    let n2 = e2;
    n2 < 0 && (n2 = 0);
    const { params: l2, snapGrid: o2, slidesGrid: d2, previousIndex: c2, activeIndex: p2, rtlTranslate: u2, wrapperEl: m2, enabled: f2 } = r2;
    if (!f2 && !a2 && !i2 || r2.destroyed || r2.animating && l2.preventInteractionOnTransition) return false;
    void 0 === t2 && (t2 = r2.params.speed);
    const g2 = Math.min(r2.params.slidesPerGroupSkip, n2);
    let v2 = g2 + Math.floor((n2 - g2) / r2.params.slidesPerGroup);
    v2 >= o2.length && (v2 = o2.length - 1);
    const w2 = -o2[v2];
    if (l2.normalizeSlideIndex) for (let e3 = 0; e3 < d2.length; e3 += 1) {
      const t3 = -Math.floor(100 * w2), s3 = Math.floor(100 * d2[e3]), a3 = Math.floor(100 * d2[e3 + 1]);
      void 0 !== d2[e3 + 1] ? t3 >= s3 && t3 < a3 - (a3 - s3) / 2 ? n2 = e3 : t3 >= s3 && t3 < a3 && (n2 = e3 + 1) : t3 >= s3 && (n2 = e3);
    }
    if (r2.initialized && n2 !== p2) {
      if (!r2.allowSlideNext && (u2 ? w2 > r2.translate && w2 > r2.minTranslate() : w2 < r2.translate && w2 < r2.minTranslate())) return false;
      if (!r2.allowSlidePrev && w2 > r2.translate && w2 > r2.maxTranslate() && (p2 || 0) !== n2) return false;
    }
    let b2;
    n2 !== (c2 || 0) && s2 && r2.emit("beforeSlideChangeStart"), r2.updateProgress(w2), b2 = n2 > p2 ? "next" : n2 < p2 ? "prev" : "reset";
    const y2 = r2.virtual && r2.params.virtual.enabled;
    if (!(y2 && i2) && (u2 && -w2 === r2.translate || !u2 && w2 === r2.translate)) return r2.updateActiveIndex(n2), l2.autoHeight && r2.updateAutoHeight(), r2.updateSlidesClasses(), "slide" !== l2.effect && r2.setTranslate(w2), "reset" !== b2 && (r2.transitionStart(s2, b2), r2.transitionEnd(s2, b2)), false;
    if (l2.cssMode) {
      const e3 = r2.isHorizontal(), s3 = u2 ? w2 : -w2;
      if (0 === t2) y2 && (r2.wrapperEl.style.scrollSnapType = "none", r2._immediateVirtual = true), y2 && !r2._cssModeVirtualInitialSet && r2.params.initialSlide > 0 ? (r2._cssModeVirtualInitialSet = true, requestAnimationFrame(() => {
        m2[e3 ? "scrollLeft" : "scrollTop"] = s3;
      })) : m2[e3 ? "scrollLeft" : "scrollTop"] = s3, y2 && requestAnimationFrame(() => {
        r2.wrapperEl.style.scrollSnapType = "", r2._immediateVirtual = false;
      });
      else {
        if (!r2.support.smoothScroll) return h({ swiper: r2, targetPosition: s3, side: e3 ? "left" : "top" }), true;
        m2.scrollTo({ [e3 ? "left" : "top"]: s3, behavior: "smooth" });
      }
      return true;
    }
    const E2 = k().isSafari;
    return y2 && !i2 && E2 && r2.isElement && r2.virtual.update(false, false, n2), r2.setTransition(t2), r2.setTranslate(w2), r2.updateActiveIndex(n2), r2.updateSlidesClasses(), r2.emit("beforeTransitionStart", t2, a2), r2.transitionStart(s2, b2), 0 === t2 ? r2.transitionEnd(s2, b2) : r2.animating || (r2.animating = true, r2.onSlideToWrapperTransitionEnd || (r2.onSlideToWrapperTransitionEnd = function(e3) {
      r2 && !r2.destroyed && e3.target === this && (r2.wrapperEl.removeEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.onSlideToWrapperTransitionEnd = null, delete r2.onSlideToWrapperTransitionEnd, r2.transitionEnd(s2, b2));
    }), r2.wrapperEl.addEventListener("transitionend", r2.onSlideToWrapperTransitionEnd)), true;
  }, slideToLoop: function(e2 = 0, t2, s2 = true, a2) {
    if ("string" == typeof e2) {
      e2 = parseInt(e2, 10);
    }
    const i2 = this;
    if (i2.destroyed) return;
    void 0 === t2 && (t2 = i2.params.speed);
    const r2 = i2.grid && i2.params.grid && i2.params.grid.rows > 1;
    let n2 = e2;
    if (i2.params.loop) if (i2.virtual && i2.params.virtual.enabled) n2 += i2.virtual.slidesBefore;
    else {
      let e3;
      if (r2) {
        const t4 = n2 * i2.params.grid.rows;
        e3 = i2.slides.find((e4) => 1 * e4.getAttribute("data-swiper-slide-index") === t4).column;
      } else e3 = i2.getSlideIndexByData(n2);
      const t3 = r2 ? Math.ceil(i2.slides.length / i2.params.grid.rows) : i2.slides.length, { centeredSlides: s3, slidesOffsetBefore: l2, slidesOffsetAfter: o2 } = i2.params, d2 = s3 || !!l2 || !!o2;
      let c2 = i2.params.slidesPerView;
      "auto" === c2 ? c2 = i2.slidesPerViewDynamic() : (c2 = Math.ceil(parseFloat(i2.params.slidesPerView, 10)), d2 && c2 % 2 == 0 && (c2 += 1));
      let p2 = t3 - e3 < c2;
      if (d2 && (p2 = p2 || e3 < Math.ceil(c2 / 2)), a2 && d2 && "auto" !== i2.params.slidesPerView && !r2 && (p2 = false), p2) {
        const s4 = d2 ? e3 < i2.activeIndex ? "prev" : "next" : e3 - i2.activeIndex - 1 < i2.params.slidesPerView ? "next" : "prev";
        i2.loopFix({ direction: s4, slideTo: true, activeSlideIndex: "next" === s4 ? e3 + 1 : e3 - t3 + 1, slideRealIndex: "next" === s4 ? i2.realIndex : void 0 });
      }
      if (r2) {
        const e4 = n2 * i2.params.grid.rows;
        n2 = i2.slides.find((t4) => 1 * t4.getAttribute("data-swiper-slide-index") === e4).column;
      } else n2 = i2.getSlideIndexByData(n2);
    }
    return requestAnimationFrame(() => {
      i2.slideTo(n2, t2, s2, a2);
    }), i2;
  }, slideNext: function(e2, t2 = true, s2) {
    const a2 = this, { enabled: i2, params: r2, animating: n2 } = a2;
    if (!i2 || a2.destroyed) return a2;
    void 0 === e2 && (e2 = a2.params.speed);
    let l2 = r2.slidesPerGroup;
    "auto" === r2.slidesPerView && 1 === r2.slidesPerGroup && r2.slidesPerGroupAuto && (l2 = Math.max(a2.slidesPerViewDynamic("current", true), 1));
    const o2 = a2.activeIndex < r2.slidesPerGroupSkip ? 1 : l2, d2 = a2.virtual && r2.virtual.enabled;
    if (r2.loop) {
      if (n2 && !d2 && r2.loopPreventsSliding) return false;
      if (a2.loopFix({ direction: "next" }), a2._clientLeft = a2.wrapperEl.clientLeft, a2.activeIndex === a2.slides.length - 1 && r2.cssMode) return requestAnimationFrame(() => {
        a2.slideTo(a2.activeIndex + o2, e2, t2, s2);
      }), true;
    }
    return r2.rewind && a2.isEnd ? a2.slideTo(0, e2, t2, s2) : a2.slideTo(a2.activeIndex + o2, e2, t2, s2);
  }, slidePrev: function(e2, t2 = true, s2) {
    const a2 = this, { params: i2, snapGrid: r2, slidesGrid: n2, rtlTranslate: l2, enabled: o2, animating: d2 } = a2;
    if (!o2 || a2.destroyed) return a2;
    void 0 === e2 && (e2 = a2.params.speed);
    const c2 = a2.virtual && i2.virtual.enabled;
    if (i2.loop) {
      if (d2 && !c2 && i2.loopPreventsSliding) return false;
      a2.loopFix({ direction: "prev" }), a2._clientLeft = a2.wrapperEl.clientLeft;
    }
    function p2(e3) {
      return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
    }
    const u2 = p2(l2 ? a2.translate : -a2.translate), m2 = r2.map((e3) => p2(e3)), h2 = i2.freeMode && i2.freeMode.enabled;
    let f2 = r2[m2.indexOf(u2) - 1];
    if (void 0 === f2 && (i2.cssMode || h2)) {
      let e3;
      r2.forEach((t3, s3) => {
        u2 >= t3 && (e3 = s3);
      }), void 0 !== e3 && (f2 = h2 ? r2[e3] : r2[e3 > 0 ? e3 - 1 : e3]);
    }
    let g2 = 0;
    if (void 0 !== f2 && (g2 = n2.indexOf(f2), g2 < 0 && (g2 = a2.activeIndex - 1), "auto" === i2.slidesPerView && 1 === i2.slidesPerGroup && i2.slidesPerGroupAuto && (g2 = g2 - a2.slidesPerViewDynamic("previous", true) + 1, g2 = Math.max(g2, 0))), i2.rewind && a2.isBeginning) {
      const i3 = a2.params.virtual && a2.params.virtual.enabled && a2.virtual ? a2.virtual.slides.length - 1 : a2.slides.length - 1;
      return a2.slideTo(i3, e2, t2, s2);
    }
    return i2.loop && 0 === a2.activeIndex && i2.cssMode ? (requestAnimationFrame(() => {
      a2.slideTo(g2, e2, t2, s2);
    }), true) : a2.slideTo(g2, e2, t2, s2);
  }, slideReset: function(e2, t2 = true, s2) {
    const a2 = this;
    if (!a2.destroyed) return void 0 === e2 && (e2 = a2.params.speed), a2.slideTo(a2.activeIndex, e2, t2, s2);
  }, slideToClosest: function(e2, t2 = true, s2, a2 = 0.5) {
    const i2 = this;
    if (i2.destroyed) return;
    void 0 === e2 && (e2 = i2.params.speed);
    let r2 = i2.activeIndex;
    const n2 = Math.min(i2.params.slidesPerGroupSkip, r2), l2 = n2 + Math.floor((r2 - n2) / i2.params.slidesPerGroup), o2 = i2.rtlTranslate ? i2.translate : -i2.translate;
    if (o2 >= i2.snapGrid[l2]) {
      const e3 = i2.snapGrid[l2];
      o2 - e3 > (i2.snapGrid[l2 + 1] - e3) * a2 && (r2 += i2.params.slidesPerGroup);
    } else {
      const e3 = i2.snapGrid[l2 - 1];
      o2 - e3 <= (i2.snapGrid[l2] - e3) * a2 && (r2 -= i2.params.slidesPerGroup);
    }
    return r2 = Math.max(r2, 0), r2 = Math.min(r2, i2.slidesGrid.length - 1), i2.slideTo(r2, e2, t2, s2);
  }, slideToClickedSlide: function() {
    const e2 = this;
    if (e2.destroyed) return;
    const { params: t2, slidesEl: s2 } = e2, a2 = "auto" === t2.slidesPerView ? e2.slidesPerViewDynamic() : t2.slidesPerView;
    let i2, r2 = e2.getSlideIndexWhenGrid(e2.clickedIndex);
    const n2 = e2.isElement ? "swiper-slide" : `.${t2.slideClass}`, o2 = e2.grid && e2.params.grid && e2.params.grid.rows > 1;
    if (t2.loop) {
      if (e2.animating) return;
      i2 = parseInt(e2.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t2.centeredSlides ? e2.slideToLoop(i2) : r2 > (o2 ? (e2.slides.length - a2) / 2 - (e2.params.grid.rows - 1) : e2.slides.length - a2) ? (e2.loopFix(), r2 = e2.getSlideIndex(g(s2, `${n2}[data-swiper-slide-index="${i2}"]`)[0]), l(() => {
        e2.slideTo(r2);
      })) : e2.slideTo(r2);
    } else e2.slideTo(r2);
  } };
  var q = { loopCreate: function(e2, t2) {
    const s2 = this, { params: a2, slidesEl: i2 } = s2;
    if (!a2.loop || s2.virtual && s2.params.virtual.enabled) return;
    const r2 = () => {
      g(i2, `.${a2.slideClass}, swiper-slide`).forEach((e3, t3) => {
        e3.setAttribute("data-swiper-slide-index", t3);
      });
    }, n2 = s2.grid && a2.grid && a2.grid.rows > 1;
    a2.loopAddBlankSlides && (a2.slidesPerGroup > 1 || n2) && (() => {
      const e3 = g(i2, `.${a2.slideBlankClass}`);
      e3.forEach((e4) => {
        e4.remove();
      }), e3.length > 0 && (s2.recalcSlides(), s2.updateSlides());
    })();
    const l2 = a2.slidesPerGroup * (n2 ? a2.grid.rows : 1), o2 = s2.slides.length % l2 !== 0, d2 = n2 && s2.slides.length % a2.grid.rows !== 0, c2 = (e3) => {
      for (let t3 = 0; t3 < e3; t3 += 1) {
        const e4 = s2.isElement ? w("swiper-slide", [a2.slideBlankClass]) : w("div", [a2.slideClass, a2.slideBlankClass]);
        s2.slidesEl.append(e4);
      }
    };
    if (o2) {
      if (a2.loopAddBlankSlides) {
        c2(l2 - s2.slides.length % l2), s2.recalcSlides(), s2.updateSlides();
      } else v("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r2();
    } else if (d2) {
      if (a2.loopAddBlankSlides) {
        c2(a2.grid.rows - s2.slides.length % a2.grid.rows), s2.recalcSlides(), s2.updateSlides();
      } else v("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r2();
    } else r2();
    const p2 = a2.centeredSlides || !!a2.slidesOffsetBefore || !!a2.slidesOffsetAfter;
    s2.loopFix({ slideRealIndex: e2, direction: p2 ? void 0 : "next", initial: t2 });
  }, loopFix: function({ slideRealIndex: e2, slideTo: t2 = true, direction: s2, setTranslate: a2, activeSlideIndex: i2, initial: r2, byController: n2, byMousewheel: l2 } = {}) {
    const o2 = this;
    if (!o2.params.loop) return;
    o2.emit("beforeLoopFix");
    const { slides: d2, allowSlidePrev: c2, allowSlideNext: p2, slidesEl: u2, params: m2 } = o2, { centeredSlides: h2, slidesOffsetBefore: f2, slidesOffsetAfter: g2, initialSlide: w2 } = m2, b2 = h2 || !!f2 || !!g2;
    if (o2.allowSlidePrev = true, o2.allowSlideNext = true, o2.virtual && m2.virtual.enabled) return t2 && (b2 || 0 !== o2.snapIndex ? b2 && o2.snapIndex < m2.slidesPerView ? o2.slideTo(o2.virtual.slides.length + o2.snapIndex, 0, false, true) : o2.snapIndex === o2.snapGrid.length - 1 && o2.slideTo(o2.virtual.slidesBefore, 0, false, true) : o2.slideTo(o2.virtual.slides.length, 0, false, true)), o2.allowSlidePrev = c2, o2.allowSlideNext = p2, void o2.emit("loopFix");
    let y2 = m2.slidesPerView;
    "auto" === y2 ? y2 = o2.slidesPerViewDynamic() : (y2 = Math.ceil(parseFloat(m2.slidesPerView, 10)), b2 && y2 % 2 == 0 && (y2 += 1));
    const E2 = m2.slidesPerGroupAuto ? y2 : m2.slidesPerGroup;
    let x2 = b2 ? Math.max(E2, Math.ceil(y2 / 2)) : E2;
    x2 % E2 !== 0 && (x2 += E2 - x2 % E2), x2 += m2.loopAdditionalSlides, o2.loopedSlides = x2;
    const S2 = o2.grid && m2.grid && m2.grid.rows > 1;
    d2.length < y2 + x2 || "cards" === o2.params.effect && d2.length < y2 + 2 * x2 ? v("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S2 && "row" === m2.grid.fill && v("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const T2 = [], M2 = [], C2 = S2 ? Math.ceil(d2.length / m2.grid.rows) : d2.length, P2 = r2 && C2 - w2 < y2 && !b2;
    let L2 = P2 ? w2 : o2.activeIndex;
    void 0 === i2 ? i2 = o2.getSlideIndex(d2.find((e3) => e3.classList.contains(m2.slideActiveClass))) : L2 = i2;
    const I2 = "next" === s2 || !s2, z2 = "prev" === s2 || !s2;
    let A2 = 0, $2 = 0;
    const k2 = (S2 ? d2[i2].column : i2) + (b2 && void 0 === a2 ? -y2 / 2 + 0.5 : 0);
    if (k2 < x2) {
      A2 = Math.max(x2 - k2, E2);
      for (let e3 = 0; e3 < x2 - k2; e3 += 1) {
        const t3 = e3 - Math.floor(e3 / C2) * C2;
        if (S2) {
          const e4 = C2 - t3 - 1;
          for (let t4 = d2.length - 1; t4 >= 0; t4 -= 1) d2[t4].column === e4 && T2.push(t4);
        } else T2.push(C2 - t3 - 1);
      }
    } else if (k2 + y2 > C2 - x2) {
      $2 = Math.max(k2 - (C2 - 2 * x2), E2), P2 && ($2 = Math.max($2, y2 - C2 + w2 + 1));
      for (let e3 = 0; e3 < $2; e3 += 1) {
        const t3 = e3 - Math.floor(e3 / C2) * C2;
        S2 ? d2.forEach((e4, s3) => {
          e4.column === t3 && M2.push(s3);
        }) : M2.push(t3);
      }
    }
    if (o2.__preventObserver__ = true, requestAnimationFrame(() => {
      o2.__preventObserver__ = false;
    }), "cards" === o2.params.effect && d2.length < y2 + 2 * x2 && (M2.includes(i2) && M2.splice(M2.indexOf(i2), 1), T2.includes(i2) && T2.splice(T2.indexOf(i2), 1)), z2 && T2.forEach((e3) => {
      d2[e3].swiperLoopMoveDOM = true, u2.prepend(d2[e3]), d2[e3].swiperLoopMoveDOM = false;
    }), I2 && M2.forEach((e3) => {
      d2[e3].swiperLoopMoveDOM = true, u2.append(d2[e3]), d2[e3].swiperLoopMoveDOM = false;
    }), o2.recalcSlides(), "auto" === m2.slidesPerView ? o2.updateSlides() : S2 && (T2.length > 0 && z2 || M2.length > 0 && I2) && o2.slides.forEach((e3, t3) => {
      o2.grid.updateSlide(t3, e3, o2.slides);
    }), m2.watchSlidesProgress && o2.updateSlidesOffset(), t2) {
      if (T2.length > 0 && z2) {
        if (void 0 === e2) {
          const e3 = o2.slidesGrid[L2], t3 = o2.slidesGrid[L2 + A2] - e3;
          l2 ? o2.setTranslate(o2.translate - t3) : (o2.slideTo(L2 + Math.ceil(A2), 0, false, true), a2 && (o2.touchEventsData.startTranslate = o2.touchEventsData.startTranslate - t3, o2.touchEventsData.currentTranslate = o2.touchEventsData.currentTranslate - t3));
        } else if (a2) {
          const e3 = S2 ? T2.length / m2.grid.rows : T2.length;
          o2.slideTo(o2.activeIndex + e3, 0, false, true), o2.touchEventsData.currentTranslate = o2.translate;
        }
      } else if (M2.length > 0 && I2) if (void 0 === e2) {
        const e3 = o2.slidesGrid[L2], t3 = o2.slidesGrid[L2 - $2] - e3;
        l2 ? o2.setTranslate(o2.translate - t3) : (o2.slideTo(L2 - $2, 0, false, true), a2 && (o2.touchEventsData.startTranslate = o2.touchEventsData.startTranslate - t3, o2.touchEventsData.currentTranslate = o2.touchEventsData.currentTranslate - t3));
      } else {
        const e3 = S2 ? M2.length / m2.grid.rows : M2.length;
        o2.slideTo(o2.activeIndex - e3, 0, false, true);
      }
    }
    if (o2.allowSlidePrev = c2, o2.allowSlideNext = p2, o2.controller && o2.controller.control && !n2) {
      const r3 = { slideRealIndex: e2, direction: s2, setTranslate: a2, activeSlideIndex: i2, byController: true };
      Array.isArray(o2.controller.control) ? o2.controller.control.forEach((e3) => {
        !e3.destroyed && e3.params.loop && e3.loopFix({ ...r3, slideTo: e3.params.slidesPerView === m2.slidesPerView && t2 });
      }) : o2.controller.control instanceof o2.constructor && o2.controller.control.params.loop && o2.controller.control.loopFix({ ...r3, slideTo: o2.controller.control.params.slidesPerView === m2.slidesPerView && t2 });
    }
    o2.emit("loopFix");
  }, loopDestroy: function() {
    const e2 = this, { params: t2, slidesEl: s2 } = e2;
    if (!t2.loop || !s2 || e2.virtual && e2.params.virtual.enabled) return;
    e2.recalcSlides();
    const a2 = [];
    e2.slides.forEach((e3) => {
      const t3 = void 0 === e3.swiperSlideIndex ? 1 * e3.getAttribute("data-swiper-slide-index") : e3.swiperSlideIndex;
      a2[t3] = e3;
    }), e2.slides.forEach((e3) => {
      e3.removeAttribute("data-swiper-slide-index");
    }), a2.forEach((e3) => {
      s2.append(e3);
    }), e2.recalcSlides(), e2.slideTo(e2.realIndex, 0);
  } };
  function _(e2, t2, s2) {
    const a2 = r(), { params: i2 } = e2, n2 = i2.edgeSwipeDetection, l2 = i2.edgeSwipeThreshold;
    return !n2 || !(s2 <= l2 || s2 >= a2.innerWidth - l2) || "prevent" === n2 && (t2.preventDefault(), true);
  }
  function F(e2) {
    const t2 = this, s2 = a();
    let i2 = e2;
    i2.originalEvent && (i2 = i2.originalEvent);
    const n2 = t2.touchEventsData;
    if ("pointerdown" === i2.type) {
      if (null !== n2.pointerId && n2.pointerId !== i2.pointerId) return;
      n2.pointerId = i2.pointerId;
    } else "touchstart" === i2.type && 1 === i2.targetTouches.length && (n2.touchId = i2.targetTouches[0].identifier);
    if ("touchstart" === i2.type) return void _(t2, i2, i2.targetTouches[0].pageX);
    const { params: l2, touches: d2, enabled: c2 } = t2;
    if (!c2) return;
    if (!l2.simulateTouch && "mouse" === i2.pointerType) return;
    if (t2.animating && l2.preventInteractionOnTransition) return;
    !t2.animating && l2.cssMode && l2.loop && t2.loopFix();
    let p2 = i2.target;
    if ("wrapper" === l2.touchEventsTarget && !(function(e3, t3) {
      const s3 = r();
      let a2 = t3.contains(e3);
      !a2 && s3.HTMLSlotElement && t3 instanceof HTMLSlotElement && (a2 = [...t3.assignedElements()].includes(e3), a2 || (a2 = (function(e4, t4) {
        const s4 = [t4];
        for (; s4.length > 0; ) {
          const t5 = s4.shift();
          if (e4 === t5) return true;
          s4.push(...t5.children, ...t5.shadowRoot ? t5.shadowRoot.children : [], ...t5.assignedElements ? t5.assignedElements() : []);
        }
      })(e3, t3)));
      return a2;
    })(p2, t2.wrapperEl)) return;
    if ("which" in i2 && 3 === i2.which) return;
    if ("button" in i2 && i2.button > 0) return;
    if (n2.isTouched && n2.isMoved) return;
    const u2 = !!l2.noSwipingClass && "" !== l2.noSwipingClass, m2 = i2.composedPath ? i2.composedPath() : i2.path;
    u2 && i2.target && i2.target.shadowRoot && m2 && (p2 = m2[0]);
    const h2 = l2.noSwipingSelector ? l2.noSwipingSelector : `.${l2.noSwipingClass}`, f2 = !(!i2.target || !i2.target.shadowRoot);
    if (l2.noSwiping && (f2 ? (function(e3, t3 = this) {
      return (function t4(s3) {
        if (!s3 || s3 === a() || s3 === r()) return null;
        s3.assignedSlot && (s3 = s3.assignedSlot);
        const i3 = s3.closest(e3);
        return i3 || s3.getRootNode ? i3 || t4(s3.getRootNode().host) : null;
      })(t3);
    })(h2, p2) : p2.closest(h2))) return void (t2.allowClick = true);
    if (l2.swipeHandler && !p2.closest(l2.swipeHandler)) return;
    d2.currentX = i2.pageX, d2.currentY = i2.pageY;
    const g2 = d2.currentX, v2 = d2.currentY;
    if (!_(t2, i2, g2)) return;
    Object.assign(n2, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), d2.startX = g2, d2.startY = v2, n2.touchStartTime = o(), t2.allowClick = true, t2.updateSize(), t2.swipeDirection = void 0, l2.threshold > 0 && (n2.allowThresholdMove = false);
    let w2 = true;
    p2.matches(n2.focusableElements) && (w2 = false, "SELECT" === p2.nodeName && (n2.isTouched = false)), s2.activeElement && s2.activeElement.matches(n2.focusableElements) && s2.activeElement !== p2 && ("mouse" === i2.pointerType || "mouse" !== i2.pointerType && !p2.matches(n2.focusableElements)) && s2.activeElement.blur();
    const b2 = w2 && t2.allowTouchMove && l2.touchStartPreventDefault;
    !l2.touchStartForcePreventDefault && !b2 || p2.isContentEditable || i2.preventDefault(), l2.freeMode && l2.freeMode.enabled && t2.freeMode && t2.animating && !l2.cssMode && t2.freeMode.onTouchStart(), t2.emit("touchStart", i2);
  }
  function W(e2) {
    const t2 = a(), s2 = this, i2 = s2.touchEventsData, { params: r2, touches: n2, rtlTranslate: l2, enabled: d2 } = s2;
    if (!d2) return;
    if (!r2.simulateTouch && "mouse" === e2.pointerType) return;
    let c2, p2 = e2;
    if (p2.originalEvent && (p2 = p2.originalEvent), "pointermove" === p2.type) {
      if (null !== i2.touchId) return;
      if (p2.pointerId !== i2.pointerId) return;
    }
    if ("touchmove" === p2.type) {
      if (c2 = [...p2.changedTouches].find((e3) => e3.identifier === i2.touchId), !c2 || c2.identifier !== i2.touchId) return;
    } else c2 = p2;
    if (!i2.isTouched) return void (i2.startMoving && i2.isScrolling && s2.emit("touchMoveOpposite", p2));
    const u2 = c2.pageX, m2 = c2.pageY;
    if (p2.preventedByNestedSwiper) return n2.startX = u2, void (n2.startY = m2);
    if (!s2.allowTouchMove) return p2.target.matches(i2.focusableElements) || (s2.allowClick = false), void (i2.isTouched && (Object.assign(n2, { startX: u2, startY: m2, currentX: u2, currentY: m2 }), i2.touchStartTime = o()));
    if (r2.touchReleaseOnEdges && !r2.loop) if (s2.isVertical()) {
      if (m2 < n2.startY && s2.translate <= s2.maxTranslate() || m2 > n2.startY && s2.translate >= s2.minTranslate()) return i2.isTouched = false, void (i2.isMoved = false);
    } else {
      if (l2 && (u2 > n2.startX && -s2.translate <= s2.maxTranslate() || u2 < n2.startX && -s2.translate >= s2.minTranslate())) return;
      if (!l2 && (u2 < n2.startX && s2.translate <= s2.maxTranslate() || u2 > n2.startX && s2.translate >= s2.minTranslate())) return;
    }
    if (t2.activeElement && t2.activeElement.matches(i2.focusableElements) && t2.activeElement !== p2.target && "mouse" !== p2.pointerType && t2.activeElement.blur(), t2.activeElement && p2.target === t2.activeElement && p2.target.matches(i2.focusableElements)) return i2.isMoved = true, void (s2.allowClick = false);
    i2.allowTouchCallbacks && s2.emit("touchMove", p2), n2.previousX = n2.currentX, n2.previousY = n2.currentY, n2.currentX = u2, n2.currentY = m2;
    const h2 = n2.currentX - n2.startX, f2 = n2.currentY - n2.startY;
    if (s2.params.threshold && Math.sqrt(h2 ** 2 + f2 ** 2) < s2.params.threshold) return;
    if (void 0 === i2.isScrolling) {
      let e3;
      s2.isHorizontal() && n2.currentY === n2.startY || s2.isVertical() && n2.currentX === n2.startX ? i2.isScrolling = false : h2 * h2 + f2 * f2 >= 25 && (e3 = 180 * Math.atan2(Math.abs(f2), Math.abs(h2)) / Math.PI, i2.isScrolling = s2.isHorizontal() ? e3 > r2.touchAngle : 90 - e3 > r2.touchAngle);
    }
    if (i2.isScrolling && s2.emit("touchMoveOpposite", p2), void 0 === i2.startMoving && (n2.currentX === n2.startX && n2.currentY === n2.startY || (i2.startMoving = true)), i2.isScrolling || "touchmove" === p2.type && i2.preventTouchMoveFromPointerMove) return void (i2.isTouched = false);
    if (!i2.startMoving) return;
    s2.allowClick = false, !r2.cssMode && p2.cancelable && p2.preventDefault(), r2.touchMoveStopPropagation && !r2.nested && p2.stopPropagation();
    let g2 = s2.isHorizontal() ? h2 : f2, v2 = s2.isHorizontal() ? n2.currentX - n2.previousX : n2.currentY - n2.previousY;
    r2.oneWayMovement && (g2 = Math.abs(g2) * (l2 ? 1 : -1), v2 = Math.abs(v2) * (l2 ? 1 : -1)), n2.diff = g2, g2 *= r2.touchRatio, l2 && (g2 = -g2, v2 = -v2);
    const w2 = s2.touchesDirection;
    s2.swipeDirection = g2 > 0 ? "prev" : "next", s2.touchesDirection = v2 > 0 ? "prev" : "next";
    const b2 = s2.params.loop && !r2.cssMode, y2 = "next" === s2.touchesDirection && s2.allowSlideNext || "prev" === s2.touchesDirection && s2.allowSlidePrev;
    if (!i2.isMoved) {
      if (b2 && y2 && s2.loopFix({ direction: s2.swipeDirection }), i2.startTranslate = s2.getTranslate(), s2.setTransition(0), s2.animating) {
        const e3 = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true, detail: { bySwiperTouchMove: true } });
        s2.wrapperEl.dispatchEvent(e3);
      }
      i2.allowMomentumBounce = false, !r2.grabCursor || true !== s2.allowSlideNext && true !== s2.allowSlidePrev || s2.setGrabCursor(true), s2.emit("sliderFirstMove", p2);
    }
    if ((/* @__PURE__ */ new Date()).getTime(), false !== r2._loopSwapReset && i2.isMoved && i2.allowThresholdMove && w2 !== s2.touchesDirection && b2 && y2 && Math.abs(g2) >= 1) return Object.assign(n2, { startX: u2, startY: m2, currentX: u2, currentY: m2, startTranslate: i2.currentTranslate }), i2.loopSwapReset = true, void (i2.startTranslate = i2.currentTranslate);
    s2.emit("sliderMove", p2), i2.isMoved = true, i2.currentTranslate = g2 + i2.startTranslate;
    let E2 = true, x2 = r2.resistanceRatio;
    if (r2.touchReleaseOnEdges && (x2 = 0), g2 > 0 ? (b2 && y2 && i2.allowThresholdMove && i2.currentTranslate > (r2.centeredSlides ? s2.minTranslate() - s2.slidesSizesGrid[s2.activeIndex + 1] - ("auto" !== r2.slidesPerView && s2.slides.length - r2.slidesPerView >= 2 ? s2.slidesSizesGrid[s2.activeIndex + 1] + s2.params.spaceBetween : 0) - s2.params.spaceBetween : s2.minTranslate()) && s2.loopFix({ direction: "prev", setTranslate: true, activeSlideIndex: 0 }), i2.currentTranslate > s2.minTranslate() && (E2 = false, r2.resistance && (i2.currentTranslate = s2.minTranslate() - 1 + (-s2.minTranslate() + i2.startTranslate + g2) ** x2))) : g2 < 0 && (b2 && y2 && i2.allowThresholdMove && i2.currentTranslate < (r2.centeredSlides ? s2.maxTranslate() + s2.slidesSizesGrid[s2.slidesSizesGrid.length - 1] + s2.params.spaceBetween + ("auto" !== r2.slidesPerView && s2.slides.length - r2.slidesPerView >= 2 ? s2.slidesSizesGrid[s2.slidesSizesGrid.length - 1] + s2.params.spaceBetween : 0) : s2.maxTranslate()) && s2.loopFix({ direction: "next", setTranslate: true, activeSlideIndex: s2.slides.length - ("auto" === r2.slidesPerView ? s2.slidesPerViewDynamic() : Math.ceil(parseFloat(r2.slidesPerView, 10))) }), i2.currentTranslate < s2.maxTranslate() && (E2 = false, r2.resistance && (i2.currentTranslate = s2.maxTranslate() + 1 - (s2.maxTranslate() - i2.startTranslate - g2) ** x2))), E2 && (p2.preventedByNestedSwiper = true), !s2.allowSlideNext && "next" === s2.swipeDirection && i2.currentTranslate < i2.startTranslate && (i2.currentTranslate = i2.startTranslate), !s2.allowSlidePrev && "prev" === s2.swipeDirection && i2.currentTranslate > i2.startTranslate && (i2.currentTranslate = i2.startTranslate), s2.allowSlidePrev || s2.allowSlideNext || (i2.currentTranslate = i2.startTranslate), r2.threshold > 0) {
      if (!(Math.abs(g2) > r2.threshold || i2.allowThresholdMove)) return void (i2.currentTranslate = i2.startTranslate);
      if (!i2.allowThresholdMove) return i2.allowThresholdMove = true, n2.startX = n2.currentX, n2.startY = n2.currentY, i2.currentTranslate = i2.startTranslate, void (n2.diff = s2.isHorizontal() ? n2.currentX - n2.startX : n2.currentY - n2.startY);
    }
    r2.followFinger && !r2.cssMode && ((r2.freeMode && r2.freeMode.enabled && s2.freeMode || r2.watchSlidesProgress) && (s2.updateActiveIndex(), s2.updateSlidesClasses()), r2.freeMode && r2.freeMode.enabled && s2.freeMode && s2.freeMode.onTouchMove(), s2.updateProgress(i2.currentTranslate), s2.setTranslate(i2.currentTranslate));
  }
  function j(e2) {
    const t2 = this, s2 = t2.touchEventsData;
    let a2, i2 = e2;
    i2.originalEvent && (i2 = i2.originalEvent);
    if ("touchend" === i2.type || "touchcancel" === i2.type) {
      if (a2 = [...i2.changedTouches].find((e3) => e3.identifier === s2.touchId), !a2 || a2.identifier !== s2.touchId) return;
    } else {
      if (null !== s2.touchId) return;
      if (i2.pointerId !== s2.pointerId) return;
      a2 = i2;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i2.type)) {
      if (!(["pointercancel", "contextmenu"].includes(i2.type) && (t2.browser.isSafari || t2.browser.isWebView))) return;
    }
    s2.pointerId = null, s2.touchId = null;
    const { params: r2, touches: n2, rtlTranslate: d2, slidesGrid: c2, enabled: p2 } = t2;
    if (!p2) return;
    if (!r2.simulateTouch && "mouse" === i2.pointerType) return;
    if (s2.allowTouchCallbacks && t2.emit("touchEnd", i2), s2.allowTouchCallbacks = false, !s2.isTouched) return s2.isMoved && r2.grabCursor && t2.setGrabCursor(false), s2.isMoved = false, void (s2.startMoving = false);
    r2.grabCursor && s2.isMoved && s2.isTouched && (true === t2.allowSlideNext || true === t2.allowSlidePrev) && t2.setGrabCursor(false);
    const u2 = o(), m2 = u2 - s2.touchStartTime;
    if (t2.allowClick) {
      const e3 = i2.path || i2.composedPath && i2.composedPath();
      t2.updateClickedSlide(e3 && e3[0] || i2.target, e3), t2.emit("tap click", i2), m2 < 300 && u2 - s2.lastClickTime < 300 && t2.emit("doubleTap doubleClick", i2);
    }
    if (s2.lastClickTime = o(), l(() => {
      t2.destroyed || (t2.allowClick = true);
    }), !s2.isTouched || !s2.isMoved || !t2.swipeDirection || 0 === n2.diff && !s2.loopSwapReset || s2.currentTranslate === s2.startTranslate && !s2.loopSwapReset) return s2.isTouched = false, s2.isMoved = false, void (s2.startMoving = false);
    let h2;
    if (s2.isTouched = false, s2.isMoved = false, s2.startMoving = false, h2 = r2.followFinger ? d2 ? t2.translate : -t2.translate : -s2.currentTranslate, r2.cssMode) return;
    if (r2.freeMode && r2.freeMode.enabled) return void t2.freeMode.onTouchEnd({ currentPos: h2 });
    const f2 = h2 >= -t2.maxTranslate() && !t2.params.loop;
    let g2 = 0, v2 = t2.slidesSizesGrid[0];
    for (let e3 = 0; e3 < c2.length; e3 += e3 < r2.slidesPerGroupSkip ? 1 : r2.slidesPerGroup) {
      const t3 = e3 < r2.slidesPerGroupSkip - 1 ? 1 : r2.slidesPerGroup;
      void 0 !== c2[e3 + t3] ? (f2 || h2 >= c2[e3] && h2 < c2[e3 + t3]) && (g2 = e3, v2 = c2[e3 + t3] - c2[e3]) : (f2 || h2 >= c2[e3]) && (g2 = e3, v2 = c2[c2.length - 1] - c2[c2.length - 2]);
    }
    let w2 = null, b2 = null;
    r2.rewind && (t2.isBeginning ? b2 = r2.virtual && r2.virtual.enabled && t2.virtual ? t2.virtual.slides.length - 1 : t2.slides.length - 1 : t2.isEnd && (w2 = 0));
    const y2 = (h2 - c2[g2]) / v2, E2 = g2 < r2.slidesPerGroupSkip - 1 ? 1 : r2.slidesPerGroup;
    if (m2 > r2.longSwipesMs) {
      if (!r2.longSwipes) return void t2.slideTo(t2.activeIndex);
      "next" === t2.swipeDirection && (y2 >= r2.longSwipesRatio ? t2.slideTo(r2.rewind && t2.isEnd ? w2 : g2 + E2) : t2.slideTo(g2)), "prev" === t2.swipeDirection && (y2 > 1 - r2.longSwipesRatio ? t2.slideTo(g2 + E2) : null !== b2 && y2 < 0 && Math.abs(y2) > r2.longSwipesRatio ? t2.slideTo(b2) : t2.slideTo(g2));
    } else {
      if (!r2.shortSwipes) return void t2.slideTo(t2.activeIndex);
      t2.navigation && (i2.target === t2.navigation.nextEl || i2.target === t2.navigation.prevEl) ? i2.target === t2.navigation.nextEl ? t2.slideTo(g2 + E2) : t2.slideTo(g2) : ("next" === t2.swipeDirection && t2.slideTo(null !== w2 ? w2 : g2 + E2), "prev" === t2.swipeDirection && t2.slideTo(null !== b2 ? b2 : g2));
    }
  }
  function U() {
    const e2 = this, { params: t2, el: s2 } = e2;
    if (s2 && 0 === s2.offsetWidth) return;
    t2.breakpoints && e2.setBreakpoint();
    const { allowSlideNext: a2, allowSlidePrev: i2, snapGrid: r2 } = e2, n2 = e2.virtual && e2.params.virtual.enabled;
    e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses();
    const l2 = n2 && t2.loop;
    if (!("auto" === t2.slidesPerView || t2.slidesPerView > 1) || !e2.isEnd || e2.isBeginning || e2.params.centeredSlides || l2) e2.params.loop && !n2 ? e2.slideToLoop(e2.realIndex, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true);
    else {
      const t3 = n2 ? e2.virtual.slides : e2.slides;
      e2.slideTo(t3.length - 1, 0, false, true);
    }
    e2.autoplay && e2.autoplay.running && e2.autoplay.paused && (clearTimeout(e2.autoplay.resizeTimeout), e2.autoplay.resizeTimeout = setTimeout(() => {
      e2.autoplay && e2.autoplay.running && e2.autoplay.paused && e2.autoplay.resume();
    }, 500)), e2.allowSlidePrev = i2, e2.allowSlideNext = a2, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
  }
  function K(e2) {
    const t2 = this;
    t2.enabled && (t2.allowClick || (t2.params.preventClicks && e2.preventDefault(), t2.params.preventClicksPropagation && t2.animating && (e2.stopPropagation(), e2.stopImmediatePropagation())));
  }
  function Z() {
    const e2 = this, { wrapperEl: t2, rtlTranslate: s2, enabled: a2 } = e2;
    if (!a2) return;
    let i2;
    e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = -t2.scrollLeft : e2.translate = -t2.scrollTop, 0 === e2.translate && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
    const r2 = e2.maxTranslate() - e2.minTranslate();
    i2 = 0 === r2 ? 0 : (e2.translate - e2.minTranslate()) / r2, i2 !== e2.progress && e2.updateProgress(s2 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, false);
  }
  function Q(e2) {
    const t2 = this;
    X(t2, e2.target), t2.params.cssMode || "auto" !== t2.params.slidesPerView && !t2.params.autoHeight || t2.update();
  }
  function J() {
    const e2 = this;
    e2.documentTouchHandlerProceeded || (e2.documentTouchHandlerProceeded = true, e2.params.touchReleaseOnEdges && (e2.el.style.touchAction = "auto"));
  }
  const ee = (e2, t2) => {
    const s2 = a(), { params: i2, el: r2, wrapperEl: n2, device: l2 } = e2, o2 = !!i2.nested, d2 = "on" === t2 ? "addEventListener" : "removeEventListener", c2 = t2;
    r2 && "string" != typeof r2 && (s2[d2]("touchstart", e2.onDocumentTouchStart, { passive: false, capture: o2 }), r2[d2]("touchstart", e2.onTouchStart, { passive: false }), r2[d2]("pointerdown", e2.onTouchStart, { passive: false }), s2[d2]("touchmove", e2.onTouchMove, { passive: false, capture: o2 }), s2[d2]("pointermove", e2.onTouchMove, { passive: false, capture: o2 }), s2[d2]("touchend", e2.onTouchEnd, { passive: true }), s2[d2]("pointerup", e2.onTouchEnd, { passive: true }), s2[d2]("pointercancel", e2.onTouchEnd, { passive: true }), s2[d2]("touchcancel", e2.onTouchEnd, { passive: true }), s2[d2]("pointerout", e2.onTouchEnd, { passive: true }), s2[d2]("pointerleave", e2.onTouchEnd, { passive: true }), s2[d2]("contextmenu", e2.onTouchEnd, { passive: true }), (i2.preventClicks || i2.preventClicksPropagation) && r2[d2]("click", e2.onClick, true), i2.cssMode && n2[d2]("scroll", e2.onScroll), i2.updateOnWindowResize ? e2[c2](l2.ios || l2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", U, true) : e2[c2]("observerUpdate", U, true), r2[d2]("load", e2.onLoad, { capture: true }));
  };
  const te = (e2, t2) => e2.grid && t2.grid && t2.grid.rows > 1;
  var se = { init: true, direction: "horizontal", oneWayMovement: false, swiperElementNodeName: "SWIPER-CONTAINER", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, eventsPrefix: "swiper", enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, snapToSlideEdge: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 5, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loop: false, loopAddBlankSlides: true, loopAdditionalSlides: 0, loopPreventsSliding: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-blank", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideFullyVisibleClass: "swiper-slide-fully-visible", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", lazyPreloaderClass: "swiper-lazy-preloader", lazyPreloadPrevNext: 0, runCallbacksOnInit: true, _emitClasses: false };
  function ae(e2, t2) {
    return function(s2 = {}) {
      const a2 = Object.keys(s2)[0], i2 = s2[a2];
      "object" == typeof i2 && null !== i2 ? (true === e2[a2] && (e2[a2] = { enabled: true }), "navigation" === a2 && e2[a2] && e2[a2].enabled && !e2[a2].prevEl && !e2[a2].nextEl && (e2[a2].auto = true), ["pagination", "scrollbar"].indexOf(a2) >= 0 && e2[a2] && e2[a2].enabled && !e2[a2].el && (e2[a2].auto = true), a2 in e2 && "enabled" in i2 ? ("object" != typeof e2[a2] || "enabled" in e2[a2] || (e2[a2].enabled = true), e2[a2] || (e2[a2] = { enabled: false }), u(t2, s2)) : u(t2, s2)) : u(t2, s2);
    };
  }
  const ie = { eventsEmitter: O, update: H, translate: N, transition: { setTransition: function(e2, t2) {
    const s2 = this;
    s2.params.cssMode || (s2.wrapperEl.style.transitionDuration = `${e2}ms`, s2.wrapperEl.style.transitionDelay = 0 === e2 ? "0ms" : ""), s2.emit("setTransition", e2, t2);
  }, transitionStart: function(e2 = true, t2) {
    const s2 = this, { params: a2 } = s2;
    a2.cssMode || (a2.autoHeight && s2.updateAutoHeight(), R({ swiper: s2, runCallbacks: e2, direction: t2, step: "Start" }));
  }, transitionEnd: function(e2 = true, t2) {
    const s2 = this, { params: a2 } = s2;
    s2.animating = false, a2.cssMode || (s2.setTransition(0), R({ swiper: s2, runCallbacks: e2, direction: t2, step: "End" }));
  } }, slide: V, loop: q, grabCursor: { setGrabCursor: function(e2) {
    const t2 = this;
    if (!t2.params.simulateTouch || t2.params.watchOverflow && t2.isLocked || t2.params.cssMode) return;
    const s2 = "container" === t2.params.touchEventsTarget ? t2.el : t2.wrapperEl;
    t2.isElement && (t2.__preventObserver__ = true), s2.style.cursor = "move", s2.style.cursor = e2 ? "grabbing" : "grab", t2.isElement && requestAnimationFrame(() => {
      t2.__preventObserver__ = false;
    });
  }, unsetGrabCursor: function() {
    const e2 = this;
    e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2.isElement && (e2.__preventObserver__ = true), e2["container" === e2.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e2.isElement && requestAnimationFrame(() => {
      e2.__preventObserver__ = false;
    }));
  } }, events: { attachEvents: function() {
    const e2 = this, { params: t2 } = e2;
    e2.onTouchStart = F.bind(e2), e2.onTouchMove = W.bind(e2), e2.onTouchEnd = j.bind(e2), e2.onDocumentTouchStart = J.bind(e2), t2.cssMode && (e2.onScroll = Z.bind(e2)), e2.onClick = K.bind(e2), e2.onLoad = Q.bind(e2), ee(e2, "on");
  }, detachEvents: function() {
    ee(this, "off");
  } }, breakpoints: { setBreakpoint: function() {
    const e2 = this, { realIndex: t2, initialized: s2, params: i2, el: r2 } = e2, n2 = i2.breakpoints;
    if (!n2 || n2 && 0 === Object.keys(n2).length) return;
    const l2 = a(), o2 = "window" !== i2.breakpointsBase && i2.breakpointsBase ? "container" : i2.breakpointsBase, d2 = ["window", "container"].includes(i2.breakpointsBase) || !i2.breakpointsBase ? e2.el : l2.querySelector(i2.breakpointsBase), c2 = e2.getBreakpoint(n2, o2, d2);
    if (!c2 || e2.currentBreakpoint === c2) return;
    const p2 = (c2 in n2 ? n2[c2] : void 0) || e2.originalParams, m2 = te(e2, i2), h2 = te(e2, p2), f2 = e2.params.grabCursor, g2 = p2.grabCursor, v2 = i2.enabled;
    m2 && !h2 ? (r2.classList.remove(`${i2.containerModifierClass}grid`, `${i2.containerModifierClass}grid-column`), e2.emitContainerClasses()) : !m2 && h2 && (r2.classList.add(`${i2.containerModifierClass}grid`), (p2.grid.fill && "column" === p2.grid.fill || !p2.grid.fill && "column" === i2.grid.fill) && r2.classList.add(`${i2.containerModifierClass}grid-column`), e2.emitContainerClasses()), f2 && !g2 ? e2.unsetGrabCursor() : !f2 && g2 && e2.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t3) => {
      if (void 0 === p2[t3]) return;
      const s3 = i2[t3] && i2[t3].enabled, a2 = p2[t3] && p2[t3].enabled;
      s3 && !a2 && e2[t3].disable(), !s3 && a2 && e2[t3].enable();
    });
    const w2 = p2.direction && p2.direction !== i2.direction, b2 = i2.loop && (p2.slidesPerView !== i2.slidesPerView || w2), y2 = i2.loop;
    w2 && s2 && e2.changeDirection(), u(e2.params, p2);
    const E2 = e2.params.enabled, x2 = e2.params.loop;
    Object.assign(e2, { allowTouchMove: e2.params.allowTouchMove, allowSlideNext: e2.params.allowSlideNext, allowSlidePrev: e2.params.allowSlidePrev }), v2 && !E2 ? e2.disable() : !v2 && E2 && e2.enable(), e2.currentBreakpoint = c2, e2.emit("_beforeBreakpoint", p2), s2 && (b2 ? (e2.loopDestroy(), e2.loopCreate(t2), e2.updateSlides()) : !y2 && x2 ? (e2.loopCreate(t2), e2.updateSlides()) : y2 && !x2 && e2.loopDestroy()), e2.emit("breakpoint", p2);
  }, getBreakpoint: function(e2, t2 = "window", s2) {
    if (!e2 || "container" === t2 && !s2) return;
    let a2 = false;
    const i2 = r(), n2 = "window" === t2 ? i2.innerHeight : s2.clientHeight, l2 = Object.keys(e2).map((e3) => {
      if ("string" == typeof e3 && 0 === e3.indexOf("@")) {
        const t3 = parseFloat(e3.substr(1));
        return { value: n2 * t3, point: e3 };
      }
      return { value: e3, point: e3 };
    });
    l2.sort((e3, t3) => parseInt(e3.value, 10) - parseInt(t3.value, 10));
    for (let e3 = 0; e3 < l2.length; e3 += 1) {
      const { point: r2, value: n3 } = l2[e3];
      "window" === t2 ? i2.matchMedia(`(min-width: ${n3}px)`).matches && (a2 = r2) : n3 <= s2.clientWidth && (a2 = r2);
    }
    return a2 || "max";
  } }, checkOverflow: { checkOverflow: function() {
    const e2 = this, { isLocked: t2, params: s2 } = e2, { slidesOffsetBefore: a2 } = s2;
    if (a2) {
      const t3 = e2.slides.length - 1, s3 = e2.slidesGrid[t3] + e2.slidesSizesGrid[t3] + 2 * a2;
      e2.isLocked = e2.size > s3;
    } else e2.isLocked = 1 === e2.snapGrid.length;
    true === s2.allowSlideNext && (e2.allowSlideNext = !e2.isLocked), true === s2.allowSlidePrev && (e2.allowSlidePrev = !e2.isLocked), t2 && t2 !== e2.isLocked && (e2.isEnd = false), t2 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock");
  } }, classes: { addClasses: function() {
    const e2 = this, { classNames: t2, params: s2, rtl: a2, el: i2, device: r2 } = e2, n2 = (function(e3, t3) {
      const s3 = [];
      return e3.forEach((e4) => {
        "object" == typeof e4 ? Object.keys(e4).forEach((a3) => {
          e4[a3] && s3.push(t3 + a3);
        }) : "string" == typeof e4 && s3.push(t3 + e4);
      }), s3;
    })(["initialized", s2.direction, { "free-mode": e2.params.freeMode && s2.freeMode.enabled }, { autoheight: s2.autoHeight }, { rtl: a2 }, { grid: s2.grid && s2.grid.rows > 1 }, { "grid-column": s2.grid && s2.grid.rows > 1 && "column" === s2.grid.fill }, { android: r2.android }, { ios: r2.ios }, { "css-mode": s2.cssMode }, { centered: s2.cssMode && s2.centeredSlides }, { "watch-progress": s2.watchSlidesProgress }], s2.containerModifierClass);
    t2.push(...n2), i2.classList.add(...t2), e2.emitContainerClasses();
  }, removeClasses: function() {
    const { el: e2, classNames: t2 } = this;
    e2 && "string" != typeof e2 && (e2.classList.remove(...t2), this.emitContainerClasses());
  } } }, re = {};
  class ne {
    constructor(...e2) {
      let t2, s2;
      1 === e2.length && e2[0].constructor && "Object" === Object.prototype.toString.call(e2[0]).slice(8, -1) ? s2 = e2[0] : [t2, s2] = e2, s2 || (s2 = {}), s2 = u({}, s2), t2 && !s2.el && (s2.el = t2);
      const i2 = a();
      if (s2.el && "string" == typeof s2.el && i2.querySelectorAll(s2.el).length > 1) {
        const e3 = [];
        return i2.querySelectorAll(s2.el).forEach((t3) => {
          const a2 = u({}, s2, { el: t3 });
          e3.push(new ne(a2));
        }), e3;
      }
      const r2 = this;
      r2.__swiper__ = true, r2.support = A(), r2.device = $({ userAgent: s2.userAgent }), r2.browser = k(), r2.eventsListeners = {}, r2.eventsAnyListeners = [], r2.modules = [...r2.__modules__], s2.modules && Array.isArray(s2.modules) && s2.modules.forEach((e3) => {
        "function" == typeof e3 && r2.modules.indexOf(e3) < 0 && r2.modules.push(e3);
      });
      const n2 = {};
      r2.modules.forEach((e3) => {
        e3({ params: s2, swiper: r2, extendParams: ae(s2, n2), on: r2.on.bind(r2), once: r2.once.bind(r2), off: r2.off.bind(r2), emit: r2.emit.bind(r2) });
      });
      const l2 = u({}, se, n2);
      return r2.params = u({}, l2, re, s2), r2.originalParams = u({}, r2.params), r2.passedParams = u({}, s2), r2.params && r2.params.on && Object.keys(r2.params.on).forEach((e3) => {
        r2.on(e3, r2.params.on[e3]);
      }), r2.params && r2.params.onAny && r2.onAny(r2.params.onAny), Object.assign(r2, { enabled: r2.params.enabled, el: t2, classNames: [], slides: [], slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === r2.params.direction, isVertical: () => "vertical" === r2.params.direction, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      }, allowSlideNext: r2.params.allowSlideNext, allowSlidePrev: r2.params.allowSlidePrev, touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: r2.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, pointerId: null, touchId: null }, allowClick: true, allowTouchMove: r2.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r2.emit("_swiper"), r2.params.init && r2.init(), r2;
    }
    getDirectionLabel(e2) {
      return this.isHorizontal() ? e2 : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[e2];
    }
    getSlideIndex(e2) {
      const { slidesEl: t2, params: s2 } = this, a2 = E(g(t2, `.${s2.slideClass}, swiper-slide`)[0]);
      return E(e2) - a2;
    }
    getSlideIndexByData(e2) {
      return this.getSlideIndex(this.slides.find((t2) => 1 * t2.getAttribute("data-swiper-slide-index") === e2));
    }
    getSlideIndexWhenGrid(e2) {
      return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e2 = Math.floor(e2 / this.params.grid.rows) : "row" === this.params.grid.fill && (e2 %= Math.ceil(this.slides.length / this.params.grid.rows))), e2;
    }
    recalcSlides() {
      const { slidesEl: e2, params: t2 } = this;
      this.slides = g(e2, `.${t2.slideClass}, swiper-slide`);
    }
    enable() {
      const e2 = this;
      e2.enabled || (e2.enabled = true, e2.params.grabCursor && e2.setGrabCursor(), e2.emit("enable"));
    }
    disable() {
      const e2 = this;
      e2.enabled && (e2.enabled = false, e2.params.grabCursor && e2.unsetGrabCursor(), e2.emit("disable"));
    }
    setProgress(e2, t2) {
      const s2 = this;
      e2 = Math.min(Math.max(e2, 0), 1);
      const a2 = s2.minTranslate(), i2 = (s2.maxTranslate() - a2) * e2 + a2;
      s2.translateTo(i2, void 0 === t2 ? 0 : t2), s2.updateActiveIndex(), s2.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e2 = this;
      if (!e2.params._emitClasses || !e2.el) return;
      const t2 = e2.el.className.split(" ").filter((t3) => 0 === t3.indexOf("swiper") || 0 === t3.indexOf(e2.params.containerModifierClass));
      e2.emit("_containerClasses", t2.join(" "));
    }
    getSlideClasses(e2) {
      const t2 = this;
      return t2.destroyed ? "" : e2.className.split(" ").filter((e3) => 0 === e3.indexOf("swiper-slide") || 0 === e3.indexOf(t2.params.slideClass)).join(" ");
    }
    emitSlidesClasses() {
      const e2 = this;
      if (!e2.params._emitClasses || !e2.el) return;
      const t2 = [];
      e2.slides.forEach((s2) => {
        const a2 = e2.getSlideClasses(s2);
        t2.push({ slideEl: s2, classNames: a2 }), e2.emit("_slideClass", s2, a2);
      }), e2.emit("_slideClasses", t2);
    }
    slidesPerViewDynamic(e2 = "current", t2 = false) {
      const { params: s2, slides: a2, slidesGrid: i2, slidesSizesGrid: r2, size: n2, activeIndex: l2 } = this;
      let o2 = 1;
      if ("number" == typeof s2.slidesPerView) return s2.slidesPerView;
      if (s2.centeredSlides) {
        let e3, t3 = a2[l2] ? Math.ceil(a2[l2].swiperSlideSize) : 0;
        for (let s3 = l2 + 1; s3 < a2.length; s3 += 1) a2[s3] && !e3 && (t3 += Math.ceil(a2[s3].swiperSlideSize), o2 += 1, t3 > n2 && (e3 = true));
        for (let s3 = l2 - 1; s3 >= 0; s3 -= 1) a2[s3] && !e3 && (t3 += a2[s3].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
      } else if ("current" === e2) for (let e3 = l2 + 1; e3 < a2.length; e3 += 1) {
        (t2 ? i2[e3] + r2[e3] - i2[l2] < n2 : i2[e3] - i2[l2] < n2) && (o2 += 1);
      }
      else for (let e3 = l2 - 1; e3 >= 0; e3 -= 1) {
        i2[l2] - i2[e3] < n2 && (o2 += 1);
      }
      return o2;
    }
    update() {
      const e2 = this;
      if (!e2 || e2.destroyed) return;
      const { snapGrid: t2, params: s2 } = e2;
      function a2() {
        const t3 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, s3 = Math.min(Math.max(t3, e2.maxTranslate()), e2.minTranslate());
        e2.setTranslate(s3), e2.updateActiveIndex(), e2.updateSlidesClasses();
      }
      let i2;
      if (s2.breakpoints && e2.setBreakpoint(), [...e2.el.querySelectorAll('[loading="lazy"]')].forEach((t3) => {
        t3.complete && X(e2, t3);
      }), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), s2.freeMode && s2.freeMode.enabled && !s2.cssMode) a2(), s2.autoHeight && e2.updateAutoHeight();
      else {
        if (("auto" === s2.slidesPerView || s2.slidesPerView > 1) && e2.isEnd && !s2.centeredSlides) {
          const t3 = e2.virtual && s2.virtual.enabled ? e2.virtual.slides : e2.slides;
          i2 = e2.slideTo(t3.length - 1, 0, false, true);
        } else i2 = e2.slideTo(e2.activeIndex, 0, false, true);
        i2 || a2();
      }
      s2.watchOverflow && t2 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
    }
    changeDirection(e2, t2 = true) {
      const s2 = this, a2 = s2.params.direction;
      return e2 || (e2 = "horizontal" === a2 ? "vertical" : "horizontal"), e2 === a2 || "horizontal" !== e2 && "vertical" !== e2 || (s2.el.classList.remove(`${s2.params.containerModifierClass}${a2}`), s2.el.classList.add(`${s2.params.containerModifierClass}${e2}`), s2.emitContainerClasses(), s2.params.direction = e2, s2.slides.forEach((t3) => {
        "vertical" === e2 ? t3.style.width = "" : t3.style.height = "";
      }), s2.emit("changeDirection"), t2 && s2.update()), s2;
    }
    changeLanguageDirection(e2) {
      const t2 = this;
      t2.rtl && "rtl" === e2 || !t2.rtl && "ltr" === e2 || (t2.rtl = "rtl" === e2, t2.rtlTranslate = "horizontal" === t2.params.direction && t2.rtl, t2.rtl ? (t2.el.classList.add(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "rtl") : (t2.el.classList.remove(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "ltr"), t2.update());
    }
    mount(e2) {
      const t2 = this;
      if (t2.mounted) return true;
      let s2 = e2 || t2.params.el;
      if ("string" == typeof s2 && (s2 = document.querySelector(s2)), !s2) return false;
      s2.swiper = t2, s2.parentNode && s2.parentNode.host && s2.parentNode.host.nodeName === t2.params.swiperElementNodeName.toUpperCase() && (t2.isElement = true);
      const a2 = () => `.${(t2.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i2 = (() => {
        if (s2 && s2.shadowRoot && s2.shadowRoot.querySelector) {
          return s2.shadowRoot.querySelector(a2());
        }
        return g(s2, a2())[0];
      })();
      return !i2 && t2.params.createElements && (i2 = w("div", t2.params.wrapperClass), s2.append(i2), g(s2, `.${t2.params.slideClass}`).forEach((e3) => {
        i2.append(e3);
      })), Object.assign(t2, { el: s2, wrapperEl: i2, slidesEl: t2.isElement && !s2.parentNode.host.slideSlots ? s2.parentNode.host : i2, hostEl: t2.isElement ? s2.parentNode.host : s2, mounted: true, rtl: "rtl" === s2.dir.toLowerCase() || "rtl" === y(s2, "direction"), rtlTranslate: "horizontal" === t2.params.direction && ("rtl" === s2.dir.toLowerCase() || "rtl" === y(s2, "direction")), wrongRTL: "-webkit-box" === y(i2, "display") }), true;
    }
    init(e2) {
      const t2 = this;
      if (t2.initialized) return t2;
      if (false === t2.mount(e2)) return t2;
      t2.emit("beforeInit"), t2.params.breakpoints && t2.setBreakpoint(), t2.addClasses(), t2.updateSize(), t2.updateSlides(), t2.params.watchOverflow && t2.checkOverflow(), t2.params.grabCursor && t2.enabled && t2.setGrabCursor(), t2.params.loop && t2.virtual && t2.params.virtual.enabled ? t2.slideTo(t2.params.initialSlide + t2.virtual.slidesBefore, 0, t2.params.runCallbacksOnInit, false, true) : t2.slideTo(t2.params.initialSlide, 0, t2.params.runCallbacksOnInit, false, true), t2.params.loop && t2.loopCreate(void 0, true), t2.attachEvents();
      const s2 = [...t2.el.querySelectorAll('[loading="lazy"]')];
      return t2.isElement && s2.push(...t2.hostEl.querySelectorAll('[loading="lazy"]')), s2.forEach((e3) => {
        e3.complete ? X(t2, e3) : e3.addEventListener("load", (e4) => {
          X(t2, e4.target);
        });
      }), Y(t2), t2.initialized = true, Y(t2), t2.emit("init"), t2.emit("afterInit"), t2;
    }
    destroy(e2 = true, t2 = true) {
      const s2 = this, { params: a2, el: i2, wrapperEl: r2, slides: n2 } = s2;
      return void 0 === s2.params || s2.destroyed || (s2.emit("beforeDestroy"), s2.initialized = false, s2.detachEvents(), a2.loop && s2.loopDestroy(), t2 && (s2.removeClasses(), i2 && "string" != typeof i2 && i2.removeAttribute("style"), r2 && r2.removeAttribute("style"), n2 && n2.length && n2.forEach((e3) => {
        e3.classList.remove(a2.slideVisibleClass, a2.slideFullyVisibleClass, a2.slideActiveClass, a2.slideNextClass, a2.slidePrevClass), e3.removeAttribute("style"), e3.removeAttribute("data-swiper-slide-index");
      })), s2.emit("destroy"), Object.keys(s2.eventsListeners).forEach((e3) => {
        s2.off(e3);
      }), false !== e2 && (s2.el && "string" != typeof s2.el && (s2.el.swiper = null), (function(e3) {
        const t3 = e3;
        Object.keys(t3).forEach((e4) => {
          try {
            t3[e4] = null;
          } catch (e5) {
          }
          try {
            delete t3[e4];
          } catch (e5) {
          }
        });
      })(s2)), s2.destroyed = true), null;
    }
    static extendDefaults(e2) {
      u(re, e2);
    }
    static get extendedDefaults() {
      return re;
    }
    static get defaults() {
      return se;
    }
    static installModule(e2) {
      ne.prototype.__modules__ || (ne.prototype.__modules__ = []);
      const t2 = ne.prototype.__modules__;
      "function" == typeof e2 && t2.indexOf(e2) < 0 && t2.push(e2);
    }
    static use(e2) {
      return Array.isArray(e2) ? (e2.forEach((e3) => ne.installModule(e3)), ne) : (ne.installModule(e2), ne);
    }
  }
  function le(e2, t2, s2, a2) {
    return e2.params.createElements && Object.keys(a2).forEach((i2) => {
      if (!s2[i2] && true === s2.auto) {
        let r2 = g(e2.el, `.${a2[i2]}`)[0];
        r2 || (r2 = w("div", a2[i2]), r2.className = a2[i2], e2.el.append(r2)), s2[i2] = r2, t2[i2] = r2;
      }
    }), s2;
  }
  Object.keys(ie).forEach((e2) => {
    Object.keys(ie[e2]).forEach((t2) => {
      ne.prototype[t2] = ie[e2][t2];
    });
  }), ne.use([function({ swiper: e2, on: t2, emit: s2 }) {
    const a2 = r();
    let i2 = null, n2 = null;
    const l2 = () => {
      e2 && !e2.destroyed && e2.initialized && (s2("beforeResize"), s2("resize"));
    }, o2 = () => {
      e2 && !e2.destroyed && e2.initialized && s2("orientationchange");
    };
    t2("init", () => {
      e2.params.resizeObserver && void 0 !== a2.ResizeObserver ? e2 && !e2.destroyed && e2.initialized && (i2 = new ResizeObserver((t3) => {
        n2 = a2.requestAnimationFrame(() => {
          const { width: s3, height: a3 } = e2;
          let i3 = s3, r2 = a3;
          t3.forEach(({ contentBoxSize: t4, contentRect: s4, target: a4 }) => {
            a4 && a4 !== e2.el || (i3 = s4 ? s4.width : (t4[0] || t4).inlineSize, r2 = s4 ? s4.height : (t4[0] || t4).blockSize);
          }), i3 === s3 && r2 === a3 || l2();
        });
      }), i2.observe(e2.el)) : (a2.addEventListener("resize", l2), a2.addEventListener("orientationchange", o2));
    }), t2("destroy", () => {
      n2 && a2.cancelAnimationFrame(n2), i2 && i2.unobserve && e2.el && (i2.unobserve(e2.el), i2 = null), a2.removeEventListener("resize", l2), a2.removeEventListener("orientationchange", o2);
    });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: a2 }) {
    const i2 = [], n2 = r(), l2 = (t3, s3 = {}) => {
      const r2 = new (n2.MutationObserver || n2.WebkitMutationObserver)((t4) => {
        if (e2.__preventObserver__) return;
        if (1 === t4.length) return void a2("observerUpdate", t4[0]);
        const s4 = function() {
          a2("observerUpdate", t4[0]);
        };
        n2.requestAnimationFrame ? n2.requestAnimationFrame(s4) : n2.setTimeout(s4, 0);
      });
      r2.observe(t3, { attributes: void 0 === s3.attributes || s3.attributes, childList: e2.isElement || (void 0 === s3.childList || s3).childList, characterData: void 0 === s3.characterData || s3.characterData }), i2.push(r2);
    };
    t2({ observer: false, observeParents: false, observeSlideChildren: false }), s2("init", () => {
      if (e2.params.observer) {
        if (e2.params.observeParents) {
          const t3 = x(e2.hostEl);
          for (let e3 = 0; e3 < t3.length; e3 += 1) l2(t3[e3]);
        }
        l2(e2.hostEl, { childList: e2.params.observeSlideChildren }), l2(e2.wrapperEl, { attributes: false });
      }
    }), s2("destroy", () => {
      i2.forEach((e3) => {
        e3.disconnect();
      }), i2.splice(0, i2.length);
    });
  }]);
  const oe = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
  function de(e2 = "") {
    return `.${e2.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function ce(e2) {
    const t2 = this, { params: s2, slidesEl: a2 } = t2;
    s2.loop && t2.loopDestroy();
    const i2 = (e3) => {
      if ("string" == typeof e3) {
        const t3 = document.createElement("div");
        P(t3, e3), a2.append(t3.children[0]), P(t3, "");
      } else a2.append(e3);
    };
    if ("object" == typeof e2 && "length" in e2) for (let t3 = 0; t3 < e2.length; t3 += 1) e2[t3] && i2(e2[t3]);
    else i2(e2);
    t2.recalcSlides(), s2.loop && t2.loopCreate(), s2.observer && !t2.isElement || t2.update();
  }
  function pe(e2) {
    const t2 = this, { params: s2, activeIndex: a2, slidesEl: i2 } = t2;
    s2.loop && t2.loopDestroy();
    let r2 = a2 + 1;
    const n2 = (e3) => {
      if ("string" == typeof e3) {
        const t3 = document.createElement("div");
        P(t3, e3), i2.prepend(t3.children[0]), P(t3, "");
      } else i2.prepend(e3);
    };
    if ("object" == typeof e2 && "length" in e2) {
      for (let t3 = 0; t3 < e2.length; t3 += 1) e2[t3] && n2(e2[t3]);
      r2 = a2 + e2.length;
    } else n2(e2);
    t2.recalcSlides(), s2.loop && t2.loopCreate(), s2.observer && !t2.isElement || t2.update(), t2.slideTo(r2, 0, false);
  }
  function ue(e2, t2) {
    const s2 = this, { params: a2, activeIndex: i2, slidesEl: r2 } = s2;
    let n2 = i2;
    a2.loop && (n2 -= s2.loopedSlides, s2.loopDestroy(), s2.recalcSlides());
    const l2 = s2.slides.length;
    if (e2 <= 0) return void s2.prependSlide(t2);
    if (e2 >= l2) return void s2.appendSlide(t2);
    let o2 = n2 > e2 ? n2 + 1 : n2;
    const d2 = [];
    for (let t3 = l2 - 1; t3 >= e2; t3 -= 1) {
      const e3 = s2.slides[t3];
      e3.remove(), d2.unshift(e3);
    }
    if ("object" == typeof t2 && "length" in t2) {
      for (let e3 = 0; e3 < t2.length; e3 += 1) t2[e3] && r2.append(t2[e3]);
      o2 = n2 > e2 ? n2 + t2.length : n2;
    } else r2.append(t2);
    for (let e3 = 0; e3 < d2.length; e3 += 1) r2.append(d2[e3]);
    s2.recalcSlides(), a2.loop && s2.loopCreate(), a2.observer && !s2.isElement || s2.update(), a2.loop ? s2.slideTo(o2 + s2.loopedSlides, 0, false) : s2.slideTo(o2, 0, false);
  }
  function me(e2) {
    const t2 = this, { params: s2, activeIndex: a2 } = t2;
    let i2 = a2;
    s2.loop && (i2 -= t2.loopedSlides, t2.loopDestroy());
    let r2, n2 = i2;
    if ("object" == typeof e2 && "length" in e2) {
      for (let s3 = 0; s3 < e2.length; s3 += 1) r2 = e2[s3], t2.slides[r2] && t2.slides[r2].remove(), r2 < n2 && (n2 -= 1);
      n2 = Math.max(n2, 0);
    } else r2 = e2, t2.slides[r2] && t2.slides[r2].remove(), r2 < n2 && (n2 -= 1), n2 = Math.max(n2, 0);
    t2.recalcSlides(), s2.loop && t2.loopCreate(), s2.observer && !t2.isElement || t2.update(), s2.loop ? t2.slideTo(n2 + t2.loopedSlides, 0, false) : t2.slideTo(n2, 0, false);
  }
  function he() {
    const e2 = this, t2 = [];
    for (let s2 = 0; s2 < e2.slides.length; s2 += 1) t2.push(s2);
    e2.removeSlide(t2);
  }
  function fe(e2) {
    const { effect: t2, swiper: s2, on: a2, setTranslate: i2, setTransition: r2, overwriteParams: n2, perspective: l2, recreateShadows: o2, getEffectParams: d2 } = e2;
    let c2;
    a2("beforeInit", () => {
      if (s2.params.effect !== t2) return;
      s2.classNames.push(`${s2.params.containerModifierClass}${t2}`), l2 && l2() && s2.classNames.push(`${s2.params.containerModifierClass}3d`);
      const e3 = n2 ? n2() : {};
      Object.assign(s2.params, e3), Object.assign(s2.originalParams, e3);
    }), a2("setTranslate _virtualUpdated", () => {
      s2.params.effect === t2 && i2();
    }), a2("setTransition", (e3, a3) => {
      s2.params.effect === t2 && r2(a3);
    }), a2("transitionEnd", () => {
      if (s2.params.effect === t2 && o2) {
        if (!d2 || !d2().slideShadows) return;
        s2.slides.forEach((e3) => {
          e3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e4) => e4.remove());
        }), o2();
      }
    }), a2("virtualUpdate", () => {
      s2.params.effect === t2 && (s2.slides.length || (c2 = true), requestAnimationFrame(() => {
        c2 && s2.slides && s2.slides.length && (i2(), c2 = false);
      }));
    });
  }
  function ge(e2, t2) {
    const s2 = f(t2);
    return s2 !== t2 && (s2.style.backfaceVisibility = "hidden", s2.style["-webkit-backface-visibility"] = "hidden"), s2;
  }
  function ve({ swiper: e2, duration: t2, transformElements: s2, allSlides: a2 }) {
    const { activeIndex: i2 } = e2;
    if (e2.params.virtualTranslate && 0 !== t2) {
      let t3, r2 = false;
      t3 = a2 ? s2 : s2.filter((t4) => {
        const s3 = t4.classList.contains("swiper-slide-transform") ? ((t5) => {
          if (!t5.parentElement) return e2.slides.find((e3) => e3.shadowRoot && e3.shadowRoot === t5.parentNode);
          return t5.parentElement;
        })(t4) : t4;
        return e2.getSlideIndex(s3) === i2;
      }), t3.forEach((t4) => {
        S(t4, () => {
          if (r2) return;
          if (!e2 || e2.destroyed) return;
          r2 = true, e2.animating = false;
          const t5 = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true });
          e2.wrapperEl.dispatchEvent(t5);
        });
      });
    }
  }
  function we(e2, t2, s2) {
    const a2 = `swiper-slide-shadow${s2 ? `-${s2}` : ""}${e2 ? ` swiper-slide-shadow-${e2}` : ""}`, i2 = f(t2);
    let r2 = i2.querySelector(`.${a2.split(" ").join(".")}`);
    return r2 || (r2 = w("div", a2.split(" ")), i2.append(r2)), r2;
  }
  const be = [function({ swiper: e2, extendParams: t2, on: s2, emit: i2 }) {
    let r2;
    t2({ virtual: { enabled: false, slides: [], cache: true, slidesPerViewAutoSlideSize: 320, renderSlide: null, renderExternal: null, renderExternalUpdate: true, addSlidesBefore: 0, addSlidesAfter: 0 } });
    const n2 = a();
    e2.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] };
    const l2 = n2.createElement("div");
    function o2(t3, s3) {
      const a2 = e2.params.virtual;
      if (a2.cache && e2.virtual.cache[s3]) return e2.virtual.cache[s3];
      let i3;
      return a2.renderSlide ? (i3 = a2.renderSlide.call(e2, t3, s3), "string" == typeof i3 && (P(l2, i3), i3 = l2.children[0])) : i3 = e2.isElement ? w("swiper-slide") : w("div", e2.params.slideClass), i3.setAttribute("data-swiper-slide-index", s3), a2.renderSlide || P(i3, t3), a2.cache && (e2.virtual.cache[s3] = i3), i3;
    }
    function d2(t3, s3, a2) {
      const { slidesPerGroup: r3, centeredSlides: n3, slidesPerView: l3, loop: d3, initialSlide: c2 } = e2.params;
      if (s3 && !d3 && c2 > 0) return;
      const { addSlidesBefore: p2, addSlidesAfter: u2, slidesPerViewAutoSlideSize: m2 } = e2.params.virtual, { from: h2, to: f2, slides: v2, slidesGrid: w2, offset: b2 } = e2.virtual;
      e2.params.cssMode || e2.updateActiveIndex();
      const y2 = void 0 === a2 ? e2.activeIndex || 0 : a2;
      let E2, x2, S2, T2;
      if (E2 = e2.rtlTranslate ? "right" : e2.isHorizontal() ? "left" : "top", "auto" === l3) if (m2) {
        let t4 = e2.size;
        t4 || (t4 = e2.isHorizontal() ? e2.el.getBoundingClientRect().width : e2.el.getBoundingClientRect().height), x2 = Math.max(1, Math.ceil(t4 / m2));
      } else x2 = 1;
      else x2 = l3;
      n3 ? (S2 = Math.floor(x2 / 2) + r3 + u2, T2 = Math.floor(x2 / 2) + r3 + p2) : (S2 = x2 + (r3 - 1) + u2, T2 = (d3 ? x2 : r3) + p2);
      let M2 = y2 - T2, C2 = y2 + S2;
      d3 || (M2 = Math.max(M2, 0), C2 = Math.min(C2, v2.length - 1));
      let P2 = (e2.slidesGrid[M2] || 0) - (e2.slidesGrid[0] || 0);
      function L2() {
        e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), i2("virtualUpdate");
      }
      if (d3 && y2 >= T2 ? (M2 -= T2, n3 || (P2 += e2.slidesGrid[0])) : d3 && y2 < T2 && (M2 = -T2, n3 && (P2 += e2.slidesGrid[0])), Object.assign(e2.virtual, { from: M2, to: C2, offset: P2, slidesGrid: e2.slidesGrid, slidesBefore: T2, slidesAfter: S2 }), h2 === M2 && f2 === C2 && !t3) return e2.slidesGrid !== w2 && P2 !== b2 && e2.slides.forEach((t4) => {
        t4.style[E2] = P2 - Math.abs(e2.cssOverflowAdjustment()) + "px";
      }), e2.updateProgress(), void i2("virtualUpdate");
      if (e2.params.virtual.renderExternal) return e2.params.virtual.renderExternal.call(e2, { offset: P2, from: M2, to: C2, slides: (function() {
        const e3 = [];
        for (let t4 = M2; t4 <= C2; t4 += 1) e3.push(v2[t4]);
        return e3;
      })() }), void (e2.params.virtual.renderExternalUpdate ? L2() : i2("virtualUpdate"));
      const I2 = [], z2 = [], A2 = (e3) => {
        let t4 = e3;
        return e3 < 0 ? t4 = v2.length + e3 : t4 >= v2.length && (t4 -= v2.length), t4;
      };
      if (t3) e2.slides.filter((t4) => t4.matches(`.${e2.params.slideClass}, swiper-slide`)).forEach((e3) => {
        e3.remove();
      });
      else for (let t4 = h2; t4 <= f2; t4 += 1) if (t4 < M2 || t4 > C2) {
        const s4 = A2(t4);
        e2.slides.filter((t5) => t5.matches(`.${e2.params.slideClass}[data-swiper-slide-index="${s4}"], swiper-slide[data-swiper-slide-index="${s4}"]`)).forEach((e3) => {
          e3.remove();
        });
      }
      const $2 = d3 ? -v2.length : 0, k2 = d3 ? 2 * v2.length : v2.length;
      for (let e3 = $2; e3 < k2; e3 += 1) if (e3 >= M2 && e3 <= C2) {
        const s4 = A2(e3);
        void 0 === f2 || t3 ? z2.push(s4) : (e3 > f2 && z2.push(s4), e3 < h2 && I2.push(s4));
      }
      if (z2.forEach((t4) => {
        e2.slidesEl.append(o2(v2[t4], t4));
      }), d3) for (let t4 = I2.length - 1; t4 >= 0; t4 -= 1) {
        const s4 = I2[t4];
        e2.slidesEl.prepend(o2(v2[s4], s4));
      }
      else I2.sort((e3, t4) => t4 - e3), I2.forEach((t4) => {
        e2.slidesEl.prepend(o2(v2[t4], t4));
      });
      g(e2.slidesEl, ".swiper-slide, swiper-slide").forEach((t4) => {
        t4.style[E2] = P2 - Math.abs(e2.cssOverflowAdjustment()) + "px";
      }), L2();
    }
    s2("beforeInit", () => {
      if (!e2.params.virtual.enabled) return;
      let t3;
      if (void 0 === e2.passedParams.virtual.slides) {
        const s3 = [...e2.slidesEl.children].filter((t4) => t4.matches(`.${e2.params.slideClass}, swiper-slide`));
        s3 && s3.length && (e2.virtual.slides = [...s3], t3 = true, s3.forEach((t4, s4) => {
          t4.setAttribute("data-swiper-slide-index", s4), e2.virtual.cache[s4] = t4, t4.remove();
        }));
      }
      t3 || (e2.virtual.slides = e2.params.virtual.slides), e2.classNames.push(`${e2.params.containerModifierClass}virtual`), e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true, d2(false, true);
    }), s2("setTranslate", () => {
      e2.params.virtual.enabled && (e2.params.cssMode && !e2._immediateVirtual ? (clearTimeout(r2), r2 = setTimeout(() => {
        d2();
      }, 100)) : d2());
    }), s2("init update resize", () => {
      e2.params.virtual.enabled && e2.params.cssMode && m(e2.wrapperEl, "--swiper-virtual-size", `${e2.virtualSize}px`);
    }), Object.assign(e2.virtual, { appendSlide: function(t3) {
      if ("object" == typeof t3 && "length" in t3) for (let s3 = 0; s3 < t3.length; s3 += 1) t3[s3] && e2.virtual.slides.push(t3[s3]);
      else e2.virtual.slides.push(t3);
      d2(true);
    }, prependSlide: function(t3) {
      const s3 = e2.activeIndex;
      let a2 = s3 + 1, i3 = 1;
      if (Array.isArray(t3)) {
        for (let s4 = 0; s4 < t3.length; s4 += 1) t3[s4] && e2.virtual.slides.unshift(t3[s4]);
        a2 = s3 + t3.length, i3 = t3.length;
      } else e2.virtual.slides.unshift(t3);
      if (e2.params.virtual.cache) {
        const t4 = e2.virtual.cache, s4 = {};
        Object.keys(t4).forEach((e3) => {
          const a3 = t4[e3], r3 = a3.getAttribute("data-swiper-slide-index");
          r3 && a3.setAttribute("data-swiper-slide-index", parseInt(r3, 10) + i3), s4[parseInt(e3, 10) + i3] = a3;
        }), e2.virtual.cache = s4;
      }
      d2(true), e2.slideTo(a2, 0);
    }, removeSlide: function(t3) {
      if (null == t3) return;
      let s3 = e2.activeIndex;
      if (Array.isArray(t3)) for (let a2 = t3.length - 1; a2 >= 0; a2 -= 1) e2.params.virtual.cache && (delete e2.virtual.cache[t3[a2]], Object.keys(e2.virtual.cache).forEach((s4) => {
        s4 > t3 && (e2.virtual.cache[s4 - 1] = e2.virtual.cache[s4], e2.virtual.cache[s4 - 1].setAttribute("data-swiper-slide-index", s4 - 1), delete e2.virtual.cache[s4]);
      })), e2.virtual.slides.splice(t3[a2], 1), t3[a2] < s3 && (s3 -= 1), s3 = Math.max(s3, 0);
      else e2.params.virtual.cache && (delete e2.virtual.cache[t3], Object.keys(e2.virtual.cache).forEach((s4) => {
        s4 > t3 && (e2.virtual.cache[s4 - 1] = e2.virtual.cache[s4], e2.virtual.cache[s4 - 1].setAttribute("data-swiper-slide-index", s4 - 1), delete e2.virtual.cache[s4]);
      })), e2.virtual.slides.splice(t3, 1), t3 < s3 && (s3 -= 1), s3 = Math.max(s3, 0);
      d2(true), e2.slideTo(s3, 0);
    }, removeAllSlides: function() {
      e2.virtual.slides = [], e2.params.virtual.cache && (e2.virtual.cache = {}), d2(true), e2.slideTo(0, 0);
    }, update: d2 });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: i2 }) {
    const n2 = a(), l2 = r();
    function o2(t3) {
      if (!e2.enabled) return;
      const { rtlTranslate: s3 } = e2;
      let a2 = t3;
      a2.originalEvent && (a2 = a2.originalEvent);
      const r2 = a2.keyCode || a2.charCode, o3 = e2.params.keyboard.pageUpDown, d3 = o3 && 33 === r2, c3 = o3 && 34 === r2, p2 = 37 === r2, u2 = 39 === r2, m2 = 38 === r2, h2 = 40 === r2;
      if (!e2.allowSlideNext && (e2.isHorizontal() && u2 || e2.isVertical() && h2 || c3)) return false;
      if (!e2.allowSlidePrev && (e2.isHorizontal() && p2 || e2.isVertical() && m2 || d3)) return false;
      if (a2.shiftKey || a2.altKey || a2.ctrlKey || a2.metaKey) return;
      if (n2.activeElement && (n2.activeElement.isContentEditable || n2.activeElement.nodeName && ("input" === n2.activeElement.nodeName.toLowerCase() || "textarea" === n2.activeElement.nodeName.toLowerCase()))) return;
      if (e2.params.keyboard.onlyInViewport && (d3 || c3 || p2 || u2 || m2 || h2)) {
        let t4 = false;
        if (x(e2.el, `.${e2.params.slideClass}, swiper-slide`).length > 0 && 0 === x(e2.el, `.${e2.params.slideActiveClass}`).length) return;
        const a3 = e2.el, i3 = a3.clientWidth, r3 = a3.clientHeight, n3 = l2.innerWidth, o4 = l2.innerHeight, d4 = b(a3);
        s3 && (d4.left -= a3.scrollLeft);
        const c4 = [[d4.left, d4.top], [d4.left + i3, d4.top], [d4.left, d4.top + r3], [d4.left + i3, d4.top + r3]];
        for (let e3 = 0; e3 < c4.length; e3 += 1) {
          const s4 = c4[e3];
          if (s4[0] >= 0 && s4[0] <= n3 && s4[1] >= 0 && s4[1] <= o4) {
            if (0 === s4[0] && 0 === s4[1]) continue;
            t4 = true;
          }
        }
        if (!t4) return;
      }
      const f2 = e2.params.keyboard.speed;
      e2.isHorizontal() ? ((d3 || c3 || p2 || u2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), ((c3 || u2) && !s3 || (d3 || p2) && s3) && e2.slideNext(f2), ((d3 || p2) && !s3 || (c3 || u2) && s3) && e2.slidePrev(f2)) : ((d3 || c3 || m2 || h2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), (c3 || h2) && e2.slideNext(f2), (d3 || m2) && e2.slidePrev(f2)), i2("keyPress", r2);
    }
    function d2() {
      e2.keyboard.enabled || (n2.addEventListener("keydown", o2), e2.keyboard.enabled = true);
    }
    function c2() {
      e2.keyboard.enabled && (n2.removeEventListener("keydown", o2), e2.keyboard.enabled = false);
    }
    e2.keyboard = { enabled: false }, t2({ keyboard: { enabled: false, onlyInViewport: true, pageUpDown: true, speed: void 0 } }), s2("init", () => {
      e2.params.keyboard.enabled && d2();
    }), s2("destroy", () => {
      e2.keyboard.enabled && c2();
    }), Object.assign(e2.keyboard, { enable: d2, disable: c2 });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: a2 }) {
    const i2 = r();
    let n2;
    t2({ mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null, noMousewheelClass: "swiper-no-mousewheel" } }), e2.mousewheel = { enabled: false };
    let d2, c2 = o();
    const p2 = [];
    function u2() {
      e2.enabled && (e2.mouseEntered = true);
    }
    function m2() {
      e2.enabled && (e2.mouseEntered = false);
    }
    function h2(t3) {
      return !(e2.params.mousewheel.thresholdDelta && t3.delta < e2.params.mousewheel.thresholdDelta) && (!(e2.params.mousewheel.thresholdTime && o() - c2 < e2.params.mousewheel.thresholdTime) && (t3.delta >= 6 && o() - c2 < 60 || (t3.direction < 0 ? e2.isEnd && !e2.params.loop || e2.animating || (e2.slideNext(), a2("scroll", t3.raw)) : e2.isBeginning && !e2.params.loop || e2.animating || (e2.slidePrev(), a2("scroll", t3.raw)), c2 = new i2.Date().getTime(), false)));
    }
    function f2(t3) {
      let s3 = t3, i3 = true;
      if (!e2.enabled) return;
      if (t3.target.closest(`.${e2.params.mousewheel.noMousewheelClass}`)) return;
      const r2 = e2.params.mousewheel;
      e2.params.cssMode && s3.preventDefault();
      let c3 = e2.el;
      "container" !== e2.params.mousewheel.eventsTarget && (c3 = document.querySelector(e2.params.mousewheel.eventsTarget));
      const u3 = c3 && c3.contains(s3.target);
      if (!e2.mouseEntered && !u3 && !r2.releaseOnEdges) return true;
      s3.originalEvent && (s3 = s3.originalEvent);
      let m3 = 0;
      const f3 = e2.rtlTranslate ? -1 : 1, g3 = (function(e3) {
        let t4 = 0, s4 = 0, a3 = 0, i4 = 0;
        return "detail" in e3 && (s4 = e3.detail), "wheelDelta" in e3 && (s4 = -e3.wheelDelta / 120), "wheelDeltaY" in e3 && (s4 = -e3.wheelDeltaY / 120), "wheelDeltaX" in e3 && (t4 = -e3.wheelDeltaX / 120), "axis" in e3 && e3.axis === e3.HORIZONTAL_AXIS && (t4 = s4, s4 = 0), a3 = 10 * t4, i4 = 10 * s4, "deltaY" in e3 && (i4 = e3.deltaY), "deltaX" in e3 && (a3 = e3.deltaX), e3.shiftKey && !a3 && (a3 = i4, i4 = 0), (a3 || i4) && e3.deltaMode && (1 === e3.deltaMode ? (a3 *= 40, i4 *= 40) : (a3 *= 800, i4 *= 800)), a3 && !t4 && (t4 = a3 < 1 ? -1 : 1), i4 && !s4 && (s4 = i4 < 1 ? -1 : 1), { spinX: t4, spinY: s4, pixelX: a3, pixelY: i4 };
      })(s3);
      if (r2.forceToAxis) if (e2.isHorizontal()) {
        if (!(Math.abs(g3.pixelX) > Math.abs(g3.pixelY))) return true;
        m3 = -g3.pixelX * f3;
      } else {
        if (!(Math.abs(g3.pixelY) > Math.abs(g3.pixelX))) return true;
        m3 = -g3.pixelY;
      }
      else m3 = Math.abs(g3.pixelX) > Math.abs(g3.pixelY) ? -g3.pixelX * f3 : -g3.pixelY;
      if (0 === m3) return true;
      r2.invert && (m3 = -m3);
      let v3 = e2.getTranslate() + m3 * r2.sensitivity;
      if (v3 >= e2.minTranslate() && (v3 = e2.minTranslate()), v3 <= e2.maxTranslate() && (v3 = e2.maxTranslate()), i3 = !!e2.params.loop || !(v3 === e2.minTranslate() || v3 === e2.maxTranslate()), i3 && e2.params.nested && s3.stopPropagation(), e2.params.freeMode && e2.params.freeMode.enabled) {
        const t4 = { time: o(), delta: Math.abs(m3), direction: Math.sign(m3) }, i4 = d2 && t4.time < d2.time + 500 && t4.delta <= d2.delta && t4.direction === d2.direction;
        if (!i4) {
          d2 = void 0;
          let o2 = e2.getTranslate() + m3 * r2.sensitivity;
          const c4 = e2.isBeginning, u4 = e2.isEnd;
          if (o2 >= e2.minTranslate() && (o2 = e2.minTranslate()), o2 <= e2.maxTranslate() && (o2 = e2.maxTranslate()), e2.setTransition(0), e2.setTranslate(o2), e2.updateProgress(), e2.updateActiveIndex(), e2.updateSlidesClasses(), (!c4 && e2.isBeginning || !u4 && e2.isEnd) && e2.updateSlidesClasses(), e2.params.loop && e2.loopFix({ direction: t4.direction < 0 ? "next" : "prev", byMousewheel: true }), e2.params.freeMode.sticky) {
            clearTimeout(n2), n2 = void 0, p2.length >= 15 && p2.shift();
            const s4 = p2.length ? p2[p2.length - 1] : void 0, a3 = p2[0];
            if (p2.push(t4), s4 && (t4.delta > s4.delta || t4.direction !== s4.direction)) p2.splice(0);
            else if (p2.length >= 15 && t4.time - a3.time < 500 && a3.delta - t4.delta >= 1 && t4.delta <= 6) {
              const s5 = m3 > 0 ? 0.8 : 0.2;
              d2 = t4, p2.splice(0), n2 = l(() => {
                !e2.destroyed && e2.params && e2.slideToClosest(e2.params.speed, true, void 0, s5);
              }, 0);
            }
            n2 || (n2 = l(() => {
              if (e2.destroyed || !e2.params) return;
              d2 = t4, p2.splice(0), e2.slideToClosest(e2.params.speed, true, void 0, 0.5);
            }, 500));
          }
          if (i4 || a2("scroll", s3), e2.params.autoplay && e2.params.autoplay.disableOnInteraction && e2.autoplay.stop(), r2.releaseOnEdges && (o2 === e2.minTranslate() || o2 === e2.maxTranslate())) return true;
        }
      } else {
        const s4 = { time: o(), delta: Math.abs(m3), direction: Math.sign(m3), raw: t3 };
        p2.length >= 2 && p2.shift();
        const a3 = p2.length ? p2[p2.length - 1] : void 0;
        if (p2.push(s4), a3 ? (s4.direction !== a3.direction || s4.delta > a3.delta || s4.time > a3.time + 150) && h2(s4) : h2(s4), (function(t4) {
          const s5 = e2.params.mousewheel;
          if (t4.direction < 0) {
            if (e2.isEnd && !e2.params.loop && s5.releaseOnEdges) return true;
          } else if (e2.isBeginning && !e2.params.loop && s5.releaseOnEdges) return true;
          return false;
        })(s4)) return true;
      }
      return s3.preventDefault ? s3.preventDefault() : s3.returnValue = false, false;
    }
    function g2(t3) {
      let s3 = e2.el;
      "container" !== e2.params.mousewheel.eventsTarget && (s3 = document.querySelector(e2.params.mousewheel.eventsTarget)), s3[t3]("mouseenter", u2), s3[t3]("mouseleave", m2), s3[t3]("wheel", f2);
    }
    function v2() {
      return e2.params.cssMode ? (e2.wrapperEl.removeEventListener("wheel", f2), true) : !e2.mousewheel.enabled && (g2("addEventListener"), e2.mousewheel.enabled = true, true);
    }
    function w2() {
      return e2.params.cssMode ? (e2.wrapperEl.addEventListener(event, f2), true) : !!e2.mousewheel.enabled && (g2("removeEventListener"), e2.mousewheel.enabled = false, true);
    }
    s2("init", () => {
      !e2.params.mousewheel.enabled && e2.params.cssMode && w2(), e2.params.mousewheel.enabled && v2();
    }), s2("destroy", () => {
      e2.params.cssMode && v2(), e2.mousewheel.enabled && w2();
    }), Object.assign(e2.mousewheel, { enable: v2, disable: w2 });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: a2 }) {
    function i2(t3) {
      let s3;
      return t3 && "string" == typeof t3 && e2.isElement && (s3 = e2.el.querySelector(t3) || e2.hostEl.querySelector(t3), s3) ? s3 : (t3 && ("string" == typeof t3 && (s3 = [...document.querySelectorAll(t3)]), e2.params.uniqueNavElements && "string" == typeof t3 && s3 && s3.length > 1 && 1 === e2.el.querySelectorAll(t3).length ? s3 = e2.el.querySelector(t3) : s3 && 1 === s3.length && (s3 = s3[0])), t3 && !s3 ? t3 : s3);
    }
    function r2(t3, s3) {
      const a3 = e2.params.navigation;
      (t3 = M(t3)).forEach((t4) => {
        t4 && (t4.classList[s3 ? "add" : "remove"](...a3.disabledClass.split(" ")), "BUTTON" === t4.tagName && (t4.disabled = s3), e2.params.watchOverflow && e2.enabled && t4.classList[e2.isLocked ? "add" : "remove"](a3.lockClass));
      });
    }
    function n2() {
      const { nextEl: t3, prevEl: s3 } = e2.navigation;
      if (e2.params.loop) return r2(s3, false), void r2(t3, false);
      r2(s3, e2.isBeginning && !e2.params.rewind), r2(t3, e2.isEnd && !e2.params.rewind);
    }
    function l2(t3) {
      t3.preventDefault(), (!e2.isBeginning || e2.params.loop || e2.params.rewind) && (e2.slidePrev(), a2("navigationPrev"));
    }
    function o2(t3) {
      t3.preventDefault(), (!e2.isEnd || e2.params.loop || e2.params.rewind) && (e2.slideNext(), a2("navigationNext"));
    }
    function d2() {
      const t3 = e2.params.navigation;
      if (e2.params.navigation = le(e2, e2.originalParams.navigation, e2.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !t3.nextEl && !t3.prevEl) return;
      let s3 = i2(t3.nextEl), a3 = i2(t3.prevEl);
      Object.assign(e2.navigation, { nextEl: s3, prevEl: a3 }), s3 = M(s3), a3 = M(a3);
      const r3 = (s4, a4) => {
        if (s4) {
          if (t3.addIcons && s4.matches(".swiper-button-next,.swiper-button-prev") && !s4.querySelector("svg")) {
            const e3 = document.createElement("div");
            P(e3, oe), s4.appendChild(e3.querySelector("svg")), e3.remove();
          }
          s4.addEventListener("click", "next" === a4 ? o2 : l2);
        }
        !e2.enabled && s4 && s4.classList.add(...t3.lockClass.split(" "));
      };
      s3.forEach((e3) => r3(e3, "next")), a3.forEach((e3) => r3(e3, "prev"));
    }
    function c2() {
      let { nextEl: t3, prevEl: s3 } = e2.navigation;
      t3 = M(t3), s3 = M(s3);
      const a3 = (t4, s4) => {
        t4.removeEventListener("click", "next" === s4 ? o2 : l2), t4.classList.remove(...e2.params.navigation.disabledClass.split(" "));
      };
      t3.forEach((e3) => a3(e3, "next")), s3.forEach((e3) => a3(e3, "prev"));
    }
    t2({ navigation: { nextEl: null, prevEl: null, addIcons: true, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), e2.navigation = { nextEl: null, prevEl: null, arrowSvg: oe }, s2("init", () => {
      false === e2.params.navigation.enabled ? p2() : (d2(), n2());
    }), s2("toEdge fromEdge lock unlock", () => {
      n2();
    }), s2("destroy", () => {
      c2();
    }), s2("enable disable", () => {
      let { nextEl: t3, prevEl: s3 } = e2.navigation;
      t3 = M(t3), s3 = M(s3), e2.enabled ? n2() : [...t3, ...s3].filter((e3) => !!e3).forEach((t4) => t4.classList.add(e2.params.navigation.lockClass));
    }), s2("click", (t3, s3) => {
      let { nextEl: i3, prevEl: r3 } = e2.navigation;
      i3 = M(i3), r3 = M(r3);
      const n3 = s3.target;
      let l3 = r3.includes(n3) || i3.includes(n3);
      if (e2.isElement && !l3) {
        const e3 = s3.path || s3.composedPath && s3.composedPath();
        e3 && (l3 = e3.find((e4) => i3.includes(e4) || r3.includes(e4)));
      }
      if (e2.params.navigation.hideOnClick && !l3) {
        if (e2.pagination && e2.params.pagination && e2.params.pagination.clickable && (e2.pagination.el === n3 || e2.pagination.el.contains(n3))) return;
        let t4;
        i3.length ? t4 = i3[0].classList.contains(e2.params.navigation.hiddenClass) : r3.length && (t4 = r3[0].classList.contains(e2.params.navigation.hiddenClass)), a2(true === t4 ? "navigationShow" : "navigationHide"), [...i3, ...r3].filter((e3) => !!e3).forEach((t5) => t5.classList.toggle(e2.params.navigation.hiddenClass));
      }
    });
    const p2 = () => {
      e2.el.classList.add(...e2.params.navigation.navigationDisabledClass.split(" ")), c2();
    };
    Object.assign(e2.navigation, { enable: () => {
      e2.el.classList.remove(...e2.params.navigation.navigationDisabledClass.split(" ")), d2(), n2();
    }, disable: p2, update: n2, init: d2, destroy: c2 });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: a2 }) {
    const i2 = "swiper-pagination";
    let r2;
    t2({ pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: (e3) => e3, formatFractionTotal: (e3) => e3, bulletClass: `${i2}-bullet`, bulletActiveClass: `${i2}-bullet-active`, modifierClass: `${i2}-`, currentClass: `${i2}-current`, totalClass: `${i2}-total`, hiddenClass: `${i2}-hidden`, progressbarFillClass: `${i2}-progressbar-fill`, progressbarOppositeClass: `${i2}-progressbar-opposite`, clickableClass: `${i2}-clickable`, lockClass: `${i2}-lock`, horizontalClass: `${i2}-horizontal`, verticalClass: `${i2}-vertical`, paginationDisabledClass: `${i2}-disabled` } }), e2.pagination = { el: null, bullets: [] };
    let n2 = 0;
    function l2() {
      return !e2.params.pagination.el || !e2.pagination.el || Array.isArray(e2.pagination.el) && 0 === e2.pagination.el.length;
    }
    function o2(t3, s3) {
      const { bulletActiveClass: a3 } = e2.params.pagination;
      t3 && (t3 = t3[("prev" === s3 ? "previous" : "next") + "ElementSibling"]) && (t3.classList.add(`${a3}-${s3}`), (t3 = t3[("prev" === s3 ? "previous" : "next") + "ElementSibling"]) && t3.classList.add(`${a3}-${s3}-${s3}`));
    }
    function d2(t3) {
      const s3 = t3.target.closest(de(e2.params.pagination.bulletClass));
      if (!s3) return;
      t3.preventDefault();
      const a3 = E(s3) * e2.params.slidesPerGroup;
      if (e2.params.loop) {
        if (e2.realIndex === a3) return;
        const t4 = (i3 = e2.realIndex, r3 = a3, n3 = e2.slides.length, (r3 %= n3) === 1 + (i3 %= n3) ? "next" : r3 === i3 - 1 ? "previous" : void 0);
        "next" === t4 ? e2.slideNext() : "previous" === t4 ? e2.slidePrev() : e2.slideToLoop(a3);
      } else e2.slideTo(a3);
      var i3, r3, n3;
    }
    function c2() {
      const t3 = e2.rtl, s3 = e2.params.pagination;
      if (l2()) return;
      let i3, d3, c3 = e2.pagination.el;
      c3 = M(c3);
      const p3 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, u3 = e2.params.loop ? Math.ceil(p3 / e2.params.slidesPerGroup) : e2.snapGrid.length;
      if (e2.params.loop ? (d3 = e2.previousRealIndex || 0, i3 = e2.params.slidesPerGroup > 1 ? Math.floor(e2.realIndex / e2.params.slidesPerGroup) : e2.realIndex) : void 0 !== e2.snapIndex ? (i3 = e2.snapIndex, d3 = e2.previousSnapIndex) : (d3 = e2.previousIndex || 0, i3 = e2.activeIndex || 0), "bullets" === s3.type && e2.pagination.bullets && e2.pagination.bullets.length > 0) {
        const a3 = e2.pagination.bullets;
        let l3, p4, u4;
        if (s3.dynamicBullets && (r2 = T(a3[0], e2.isHorizontal() ? "width" : "height", true), c3.forEach((t4) => {
          t4.style[e2.isHorizontal() ? "width" : "height"] = r2 * (s3.dynamicMainBullets + 4) + "px";
        }), s3.dynamicMainBullets > 1 && void 0 !== d3 && (n2 += i3 - (d3 || 0), n2 > s3.dynamicMainBullets - 1 ? n2 = s3.dynamicMainBullets - 1 : n2 < 0 && (n2 = 0)), l3 = Math.max(i3 - n2, 0), p4 = l3 + (Math.min(a3.length, s3.dynamicMainBullets) - 1), u4 = (p4 + l3) / 2), a3.forEach((e3) => {
          const t4 = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e4) => `${s3.bulletActiveClass}${e4}`)].map((e4) => "string" == typeof e4 && e4.includes(" ") ? e4.split(" ") : e4).flat();
          e3.classList.remove(...t4);
        }), c3.length > 1) a3.forEach((t4) => {
          const a4 = E(t4);
          a4 === i3 ? t4.classList.add(...s3.bulletActiveClass.split(" ")) : e2.isElement && t4.setAttribute("part", "bullet"), s3.dynamicBullets && (a4 >= l3 && a4 <= p4 && t4.classList.add(...`${s3.bulletActiveClass}-main`.split(" ")), a4 === l3 && o2(t4, "prev"), a4 === p4 && o2(t4, "next"));
        });
        else {
          const t4 = a3[i3];
          if (t4 && t4.classList.add(...s3.bulletActiveClass.split(" ")), e2.isElement && a3.forEach((e3, t5) => {
            e3.setAttribute("part", t5 === i3 ? "bullet-active" : "bullet");
          }), s3.dynamicBullets) {
            const e3 = a3[l3], t5 = a3[p4];
            for (let e4 = l3; e4 <= p4; e4 += 1) a3[e4] && a3[e4].classList.add(...`${s3.bulletActiveClass}-main`.split(" "));
            o2(e3, "prev"), o2(t5, "next");
          }
        }
        if (s3.dynamicBullets) {
          const i4 = Math.min(a3.length, s3.dynamicMainBullets + 4), n3 = (r2 * i4 - r2) / 2 - u4 * r2, l4 = t3 ? "right" : "left";
          a3.forEach((t4) => {
            t4.style[e2.isHorizontal() ? l4 : "top"] = `${n3}px`;
          });
        }
      }
      c3.forEach((t4, r3) => {
        if ("fraction" === s3.type && (t4.querySelectorAll(de(s3.currentClass)).forEach((e3) => {
          e3.textContent = s3.formatFractionCurrent(i3 + 1);
        }), t4.querySelectorAll(de(s3.totalClass)).forEach((e3) => {
          e3.textContent = s3.formatFractionTotal(u3);
        })), "progressbar" === s3.type) {
          let a3;
          a3 = s3.progressbarOpposite ? e2.isHorizontal() ? "vertical" : "horizontal" : e2.isHorizontal() ? "horizontal" : "vertical";
          const r4 = (i3 + 1) / u3;
          let n3 = 1, l3 = 1;
          "horizontal" === a3 ? n3 = r4 : l3 = r4, t4.querySelectorAll(de(s3.progressbarFillClass)).forEach((t5) => {
            t5.style.transform = `translate3d(0,0,0) scaleX(${n3}) scaleY(${l3})`, t5.style.transitionDuration = `${e2.params.speed}ms`;
          });
        }
        "custom" === s3.type && s3.renderCustom ? (P(t4, s3.renderCustom(e2, i3 + 1, u3)), 0 === r3 && a2("paginationRender", t4)) : (0 === r3 && a2("paginationRender", t4), a2("paginationUpdate", t4)), e2.params.watchOverflow && e2.enabled && t4.classList[e2.isLocked ? "add" : "remove"](s3.lockClass);
      });
    }
    function p2() {
      const t3 = e2.params.pagination;
      if (l2()) return;
      const s3 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.grid && e2.params.grid.rows > 1 ? e2.slides.length / Math.ceil(e2.params.grid.rows) : e2.slides.length;
      let i3 = e2.pagination.el;
      i3 = M(i3);
      let r3 = "";
      if ("bullets" === t3.type) {
        let a3 = e2.params.loop ? Math.ceil(s3 / e2.params.slidesPerGroup) : e2.snapGrid.length;
        e2.params.freeMode && e2.params.freeMode.enabled && a3 > s3 && (a3 = s3);
        for (let s4 = 0; s4 < a3; s4 += 1) t3.renderBullet ? r3 += t3.renderBullet.call(e2, s4, t3.bulletClass) : r3 += `<${t3.bulletElement} ${e2.isElement ? 'part="bullet"' : ""} class="${t3.bulletClass}"></${t3.bulletElement}>`;
      }
      "fraction" === t3.type && (r3 = t3.renderFraction ? t3.renderFraction.call(e2, t3.currentClass, t3.totalClass) : `<span class="${t3.currentClass}"></span> / <span class="${t3.totalClass}"></span>`), "progressbar" === t3.type && (r3 = t3.renderProgressbar ? t3.renderProgressbar.call(e2, t3.progressbarFillClass) : `<span class="${t3.progressbarFillClass}"></span>`), e2.pagination.bullets = [], i3.forEach((s4) => {
        "custom" !== t3.type && P(s4, r3 || ""), "bullets" === t3.type && e2.pagination.bullets.push(...s4.querySelectorAll(de(t3.bulletClass)));
      }), "custom" !== t3.type && a2("paginationRender", i3[0]);
    }
    function u2() {
      e2.params.pagination = le(e2, e2.originalParams.pagination, e2.params.pagination, { el: "swiper-pagination" });
      const t3 = e2.params.pagination;
      if (!t3.el) return;
      let s3;
      "string" == typeof t3.el && e2.isElement && (s3 = e2.el.querySelector(t3.el)), s3 || "string" != typeof t3.el || (s3 = [...document.querySelectorAll(t3.el)]), s3 || (s3 = t3.el), s3 && 0 !== s3.length && (e2.params.uniqueNavElements && "string" == typeof t3.el && Array.isArray(s3) && s3.length > 1 && (s3 = [...e2.el.querySelectorAll(t3.el)], s3.length > 1 && (s3 = s3.find((t4) => x(t4, ".swiper")[0] === e2.el))), Array.isArray(s3) && 1 === s3.length && (s3 = s3[0]), Object.assign(e2.pagination, { el: s3 }), s3 = M(s3), s3.forEach((s4) => {
        "bullets" === t3.type && t3.clickable && s4.classList.add(...(t3.clickableClass || "").split(" ")), s4.classList.add(t3.modifierClass + t3.type), s4.classList.add(e2.isHorizontal() ? t3.horizontalClass : t3.verticalClass), "bullets" === t3.type && t3.dynamicBullets && (s4.classList.add(`${t3.modifierClass}${t3.type}-dynamic`), n2 = 0, t3.dynamicMainBullets < 1 && (t3.dynamicMainBullets = 1)), "progressbar" === t3.type && t3.progressbarOpposite && s4.classList.add(t3.progressbarOppositeClass), t3.clickable && s4.addEventListener("click", d2), e2.enabled || s4.classList.add(t3.lockClass);
      }));
    }
    function m2() {
      const t3 = e2.params.pagination;
      if (l2()) return;
      let s3 = e2.pagination.el;
      s3 && (s3 = M(s3), s3.forEach((s4) => {
        s4.classList.remove(t3.hiddenClass), s4.classList.remove(t3.modifierClass + t3.type), s4.classList.remove(e2.isHorizontal() ? t3.horizontalClass : t3.verticalClass), t3.clickable && (s4.classList.remove(...(t3.clickableClass || "").split(" ")), s4.removeEventListener("click", d2));
      })), e2.pagination.bullets && e2.pagination.bullets.forEach((e3) => e3.classList.remove(...t3.bulletActiveClass.split(" ")));
    }
    s2("changeDirection", () => {
      if (!e2.pagination || !e2.pagination.el) return;
      const t3 = e2.params.pagination;
      let { el: s3 } = e2.pagination;
      s3 = M(s3), s3.forEach((s4) => {
        s4.classList.remove(t3.horizontalClass, t3.verticalClass), s4.classList.add(e2.isHorizontal() ? t3.horizontalClass : t3.verticalClass);
      });
    }), s2("init", () => {
      false === e2.params.pagination.enabled ? h2() : (u2(), p2(), c2());
    }), s2("activeIndexChange", () => {
      void 0 === e2.snapIndex && c2();
    }), s2("snapIndexChange", () => {
      c2();
    }), s2("snapGridLengthChange", () => {
      p2(), c2();
    }), s2("destroy", () => {
      m2();
    }), s2("enable disable", () => {
      let { el: t3 } = e2.pagination;
      t3 && (t3 = M(t3), t3.forEach((t4) => t4.classList[e2.enabled ? "remove" : "add"](e2.params.pagination.lockClass)));
    }), s2("lock unlock", () => {
      c2();
    }), s2("click", (t3, s3) => {
      const i3 = s3.target, r3 = M(e2.pagination.el);
      if (e2.params.pagination.el && e2.params.pagination.hideOnClick && r3 && r3.length > 0 && !i3.classList.contains(e2.params.pagination.bulletClass)) {
        if (e2.navigation && (e2.navigation.nextEl && i3 === e2.navigation.nextEl || e2.navigation.prevEl && i3 === e2.navigation.prevEl)) return;
        const t4 = r3[0].classList.contains(e2.params.pagination.hiddenClass);
        a2(true === t4 ? "paginationShow" : "paginationHide"), r3.forEach((t5) => t5.classList.toggle(e2.params.pagination.hiddenClass));
      }
    });
    const h2 = () => {
      e2.el.classList.add(e2.params.pagination.paginationDisabledClass);
      let { el: t3 } = e2.pagination;
      t3 && (t3 = M(t3), t3.forEach((t4) => t4.classList.add(e2.params.pagination.paginationDisabledClass))), m2();
    };
    Object.assign(e2.pagination, { enable: () => {
      e2.el.classList.remove(e2.params.pagination.paginationDisabledClass);
      let { el: t3 } = e2.pagination;
      t3 && (t3 = M(t3), t3.forEach((t4) => t4.classList.remove(e2.params.pagination.paginationDisabledClass))), u2(), p2(), c2();
    }, disable: h2, render: p2, update: c2, init: u2, destroy: m2 });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: i2 }) {
    const r2 = a();
    let o2, d2, c2, p2, u2 = false, m2 = null, h2 = null;
    function f2() {
      if (!e2.params.scrollbar.el || !e2.scrollbar.el) return;
      const { scrollbar: t3, rtlTranslate: s3 } = e2, { dragEl: a2, el: i3 } = t3, r3 = e2.params.scrollbar, n2 = e2.params.loop ? e2.progressLoop : e2.progress;
      let l2 = d2, o3 = (c2 - d2) * n2;
      s3 ? (o3 = -o3, o3 > 0 ? (l2 = d2 - o3, o3 = 0) : -o3 + d2 > c2 && (l2 = c2 + o3)) : o3 < 0 ? (l2 = d2 + o3, o3 = 0) : o3 + d2 > c2 && (l2 = c2 - o3), e2.isHorizontal() ? (a2.style.transform = `translate3d(${o3}px, 0, 0)`, a2.style.width = `${l2}px`) : (a2.style.transform = `translate3d(0px, ${o3}px, 0)`, a2.style.height = `${l2}px`), r3.hide && (clearTimeout(m2), i3.style.opacity = 1, m2 = setTimeout(() => {
        i3.style.opacity = 0, i3.style.transitionDuration = "400ms";
      }, 1e3));
    }
    function g2() {
      if (!e2.params.scrollbar.el || !e2.scrollbar.el) return;
      const { scrollbar: t3 } = e2, { dragEl: s3, el: a2 } = t3;
      s3.style.width = "", s3.style.height = "", c2 = e2.isHorizontal() ? a2.offsetWidth : a2.offsetHeight, p2 = e2.size / (e2.virtualSize + e2.params.slidesOffsetBefore - (e2.params.centeredSlides ? e2.snapGrid[0] : 0)), d2 = "auto" === e2.params.scrollbar.dragSize ? c2 * p2 : parseInt(e2.params.scrollbar.dragSize, 10), e2.isHorizontal() ? s3.style.width = `${d2}px` : s3.style.height = `${d2}px`, a2.style.display = p2 >= 1 ? "none" : "", e2.params.scrollbar.hide && (a2.style.opacity = 0), e2.params.watchOverflow && e2.enabled && t3.el.classList[e2.isLocked ? "add" : "remove"](e2.params.scrollbar.lockClass);
    }
    function v2(t3) {
      return e2.isHorizontal() ? t3.clientX : t3.clientY;
    }
    function y2(t3) {
      const { scrollbar: s3, rtlTranslate: a2 } = e2, { el: i3 } = s3;
      let r3;
      r3 = (v2(t3) - b(i3)[e2.isHorizontal() ? "left" : "top"] - (null !== o2 ? o2 : d2 / 2)) / (c2 - d2), r3 = Math.max(Math.min(r3, 1), 0), a2 && (r3 = 1 - r3);
      const n2 = e2.minTranslate() + (e2.maxTranslate() - e2.minTranslate()) * r3;
      e2.updateProgress(n2), e2.setTranslate(n2), e2.updateActiveIndex(), e2.updateSlidesClasses();
    }
    function E2(t3) {
      const s3 = e2.params.scrollbar, { scrollbar: a2, wrapperEl: r3 } = e2, { el: n2, dragEl: l2 } = a2;
      u2 = true, o2 = t3.target === l2 ? v2(t3) - t3.target.getBoundingClientRect()[e2.isHorizontal() ? "left" : "top"] : null, t3.preventDefault(), t3.stopPropagation(), r3.style.transitionDuration = "100ms", l2.style.transitionDuration = "100ms", y2(t3), clearTimeout(h2), n2.style.transitionDuration = "0ms", s3.hide && (n2.style.opacity = 1), e2.params.cssMode && (e2.wrapperEl.style["scroll-snap-type"] = "none"), i2("scrollbarDragStart", t3);
    }
    function x2(t3) {
      const { scrollbar: s3, wrapperEl: a2 } = e2, { el: r3, dragEl: n2 } = s3;
      u2 && (t3.preventDefault && t3.cancelable ? t3.preventDefault() : t3.returnValue = false, y2(t3), a2.style.transitionDuration = "0ms", r3.style.transitionDuration = "0ms", n2.style.transitionDuration = "0ms", i2("scrollbarDragMove", t3));
    }
    function S2(t3) {
      const s3 = e2.params.scrollbar, { scrollbar: a2, wrapperEl: r3 } = e2, { el: n2 } = a2;
      u2 && (u2 = false, e2.params.cssMode && (e2.wrapperEl.style["scroll-snap-type"] = "", r3.style.transitionDuration = ""), s3.hide && (clearTimeout(h2), h2 = l(() => {
        n2.style.opacity = 0, n2.style.transitionDuration = "400ms";
      }, 1e3)), i2("scrollbarDragEnd", t3), s3.snapOnRelease && e2.slideToClosest());
    }
    function T2(t3) {
      const { scrollbar: s3, params: a2 } = e2, i3 = s3.el;
      if (!i3) return;
      const n2 = i3, l2 = !!a2.passiveListeners && { passive: false, capture: false }, o3 = !!a2.passiveListeners && { passive: true, capture: false };
      if (!n2) return;
      const d3 = "on" === t3 ? "addEventListener" : "removeEventListener";
      n2[d3]("pointerdown", E2, l2), r2[d3]("pointermove", x2, l2), r2[d3]("pointerup", S2, o3);
    }
    function C2() {
      const { scrollbar: t3, el: s3 } = e2;
      e2.params.scrollbar = le(e2, e2.originalParams.scrollbar, e2.params.scrollbar, { el: "swiper-scrollbar" });
      const a2 = e2.params.scrollbar;
      if (!a2.el) return;
      let i3, l2;
      if ("string" == typeof a2.el && e2.isElement && (i3 = e2.el.querySelector(a2.el)), i3 || "string" != typeof a2.el) i3 || (i3 = a2.el);
      else if (i3 = r2.querySelectorAll(a2.el), !i3.length) return;
      e2.params.uniqueNavElements && "string" == typeof a2.el && i3.length > 1 && 1 === s3.querySelectorAll(a2.el).length && (i3 = s3.querySelector(a2.el)), i3.length > 0 && (i3 = i3[0]), i3.classList.add(e2.isHorizontal() ? a2.horizontalClass : a2.verticalClass), i3 && (l2 = i3.querySelector(de(e2.params.scrollbar.dragClass)), l2 || (l2 = w("div", e2.params.scrollbar.dragClass), i3.append(l2))), Object.assign(t3, { el: i3, dragEl: l2 }), a2.draggable && e2.params.scrollbar.el && e2.scrollbar.el && T2("on"), i3 && i3.classList[e2.enabled ? "remove" : "add"](...n(e2.params.scrollbar.lockClass));
    }
    function P2() {
      const t3 = e2.params.scrollbar, s3 = e2.scrollbar.el;
      s3 && s3.classList.remove(...n(e2.isHorizontal() ? t3.horizontalClass : t3.verticalClass)), e2.params.scrollbar.el && e2.scrollbar.el && T2("off");
    }
    t2({ scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), e2.scrollbar = { el: null, dragEl: null }, s2("changeDirection", () => {
      if (!e2.scrollbar || !e2.scrollbar.el) return;
      const t3 = e2.params.scrollbar;
      let { el: s3 } = e2.scrollbar;
      s3 = M(s3), s3.forEach((s4) => {
        s4.classList.remove(t3.horizontalClass, t3.verticalClass), s4.classList.add(e2.isHorizontal() ? t3.horizontalClass : t3.verticalClass);
      });
    }), s2("init", () => {
      false === e2.params.scrollbar.enabled ? L2() : (C2(), g2(), f2());
    }), s2("update resize observerUpdate lock unlock changeDirection", () => {
      g2();
    }), s2("setTranslate", () => {
      f2();
    }), s2("setTransition", (t3, s3) => {
      !(function(t4) {
        e2.params.scrollbar.el && e2.scrollbar.el && (e2.scrollbar.dragEl.style.transitionDuration = `${t4}ms`);
      })(s3);
    }), s2("enable disable", () => {
      const { el: t3 } = e2.scrollbar;
      t3 && t3.classList[e2.enabled ? "remove" : "add"](...n(e2.params.scrollbar.lockClass));
    }), s2("destroy", () => {
      P2();
    });
    const L2 = () => {
      e2.el.classList.add(...n(e2.params.scrollbar.scrollbarDisabledClass)), e2.scrollbar.el && e2.scrollbar.el.classList.add(...n(e2.params.scrollbar.scrollbarDisabledClass)), P2();
    };
    Object.assign(e2.scrollbar, { enable: () => {
      e2.el.classList.remove(...n(e2.params.scrollbar.scrollbarDisabledClass)), e2.scrollbar.el && e2.scrollbar.el.classList.remove(...n(e2.params.scrollbar.scrollbarDisabledClass)), C2(), g2(), f2();
    }, disable: L2, updateSize: g2, setTranslate: f2, init: C2, destroy: P2 });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ parallax: { enabled: false } });
    const a2 = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", i2 = (t3, s3) => {
      const { rtl: a3 } = e2, i3 = a3 ? -1 : 1, r3 = t3.getAttribute("data-swiper-parallax") || "0";
      let n2 = t3.getAttribute("data-swiper-parallax-x"), l2 = t3.getAttribute("data-swiper-parallax-y");
      const o2 = t3.getAttribute("data-swiper-parallax-scale"), d2 = t3.getAttribute("data-swiper-parallax-opacity"), c2 = t3.getAttribute("data-swiper-parallax-rotate");
      if (n2 || l2 ? (n2 = n2 || "0", l2 = l2 || "0") : e2.isHorizontal() ? (n2 = r3, l2 = "0") : (l2 = r3, n2 = "0"), n2 = n2.indexOf("%") >= 0 ? parseInt(n2, 10) * s3 * i3 + "%" : n2 * s3 * i3 + "px", l2 = l2.indexOf("%") >= 0 ? parseInt(l2, 10) * s3 + "%" : l2 * s3 + "px", null != d2) {
        const e3 = d2 - (d2 - 1) * (1 - Math.abs(s3));
        t3.style.opacity = e3;
      }
      let p2 = `translate3d(${n2}, ${l2}, 0px)`;
      if (null != o2) {
        p2 += ` scale(${o2 - (o2 - 1) * (1 - Math.abs(s3))})`;
      }
      if (c2 && null != c2) {
        p2 += ` rotate(${c2 * s3 * -1}deg)`;
      }
      t3.style.transform = p2;
    }, r2 = () => {
      const { el: t3, slides: s3, progress: r3, snapGrid: n2, isElement: l2 } = e2, o2 = g(t3, a2);
      e2.isElement && o2.push(...g(e2.hostEl, a2)), o2.forEach((e3) => {
        i2(e3, r3);
      }), s3.forEach((t4, s4) => {
        let l3 = t4.progress;
        e2.params.slidesPerGroup > 1 && "auto" !== e2.params.slidesPerView && (l3 += Math.ceil(s4 / 2) - r3 * (n2.length - 1)), l3 = Math.min(Math.max(l3, -1), 1), t4.querySelectorAll(`${a2}, [data-swiper-parallax-rotate]`).forEach((e3) => {
          i2(e3, l3);
        });
      });
    };
    s2("beforeInit", () => {
      e2.params.parallax.enabled && (e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true);
    }), s2("init", () => {
      e2.params.parallax.enabled && r2();
    }), s2("setTranslate", () => {
      e2.params.parallax.enabled && r2();
    }), s2("setTransition", (t3, s3) => {
      e2.params.parallax.enabled && ((t4 = e2.params.speed) => {
        const { el: s4, hostEl: i3 } = e2, r3 = [...s4.querySelectorAll(a2)];
        e2.isElement && r3.push(...i3.querySelectorAll(a2)), r3.forEach((e3) => {
          let s5 = parseInt(e3.getAttribute("data-swiper-parallax-duration"), 10) || t4;
          0 === t4 && (s5 = 0), e3.style.transitionDuration = `${s5}ms`;
        });
      })(s3);
    });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: a2 }) {
    const i2 = r();
    t2({ zoom: { enabled: false, limitToOriginalSize: false, maxRatio: 3, minRatio: 1, panOnMouseMove: false, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), e2.zoom = { enabled: false };
    let n2, l2, o2 = 1, c2 = false, p2 = false, u2 = { x: 0, y: 0 };
    const m2 = [], h2 = { originX: 0, originY: 0, slideEl: void 0, slideWidth: void 0, slideHeight: void 0, imageEl: void 0, imageWrapEl: void 0, maxRatio: 3 }, f2 = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, v2 = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
    let w2, y2 = 1;
    function E2() {
      if (m2.length < 2) return 1;
      const e3 = m2[0].pageX, t3 = m2[0].pageY, s3 = m2[1].pageX, a3 = m2[1].pageY;
      return Math.sqrt((s3 - e3) ** 2 + (a3 - t3) ** 2);
    }
    function S2() {
      const t3 = e2.params.zoom, s3 = h2.imageWrapEl.getAttribute("data-swiper-zoom") || t3.maxRatio;
      if (t3.limitToOriginalSize && h2.imageEl && h2.imageEl.naturalWidth) {
        const e3 = h2.imageEl.naturalWidth / h2.imageEl.offsetWidth;
        return Math.min(e3, s3);
      }
      return s3;
    }
    function T2(t3) {
      const s3 = e2.isElement ? "swiper-slide" : `.${e2.params.slideClass}`;
      return !!t3.target.matches(s3) || e2.slides.filter((e3) => e3.contains(t3.target)).length > 0;
    }
    function M2(t3) {
      const s3 = `.${e2.params.zoom.containerClass}`;
      return !!t3.target.matches(s3) || [...e2.hostEl.querySelectorAll(s3)].filter((e3) => e3.contains(t3.target)).length > 0;
    }
    function C2(t3) {
      if ("mouse" === t3.pointerType && m2.splice(0, m2.length), !T2(t3)) return;
      const s3 = e2.params.zoom;
      if (n2 = false, l2 = false, m2.push(t3), !(m2.length < 2)) {
        if (n2 = true, h2.scaleStart = E2(), !h2.slideEl) {
          h2.slideEl = t3.target.closest(`.${e2.params.slideClass}, swiper-slide`), h2.slideEl || (h2.slideEl = e2.slides[e2.activeIndex]);
          let a3 = h2.slideEl.querySelector(`.${s3.containerClass}`);
          if (a3 && (a3 = a3.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), h2.imageEl = a3, h2.imageWrapEl = a3 ? x(h2.imageEl, `.${s3.containerClass}`)[0] : void 0, !h2.imageWrapEl) return void (h2.imageEl = void 0);
          h2.maxRatio = S2();
        }
        if (h2.imageEl) {
          const [e3, t4] = (function() {
            if (m2.length < 2) return { x: null, y: null };
            const e4 = h2.imageEl.getBoundingClientRect();
            return [(m2[0].pageX + (m2[1].pageX - m2[0].pageX) / 2 - e4.x - i2.scrollX) / o2, (m2[0].pageY + (m2[1].pageY - m2[0].pageY) / 2 - e4.y - i2.scrollY) / o2];
          })();
          h2.originX = e3, h2.originY = t4, h2.imageEl.style.transitionDuration = "0ms";
        }
        c2 = true;
      }
    }
    function P2(t3) {
      if (!T2(t3)) return;
      const s3 = e2.params.zoom, a3 = e2.zoom, i3 = m2.findIndex((e3) => e3.pointerId === t3.pointerId);
      i3 >= 0 && (m2[i3] = t3), m2.length < 2 || (l2 = true, h2.scaleMove = E2(), h2.imageEl && (a3.scale = h2.scaleMove / h2.scaleStart * o2, a3.scale > h2.maxRatio && (a3.scale = h2.maxRatio - 1 + (a3.scale - h2.maxRatio + 1) ** 0.5), a3.scale < s3.minRatio && (a3.scale = s3.minRatio + 1 - (s3.minRatio - a3.scale + 1) ** 0.5), h2.imageEl.style.transform = `translate3d(0,0,0) scale(${a3.scale})`));
    }
    function L2(t3) {
      if (!T2(t3)) return;
      if ("mouse" === t3.pointerType && "pointerout" === t3.type) return;
      const s3 = e2.params.zoom, a3 = e2.zoom, i3 = m2.findIndex((e3) => e3.pointerId === t3.pointerId);
      i3 >= 0 && m2.splice(i3, 1), n2 && l2 && (n2 = false, l2 = false, h2.imageEl && (a3.scale = Math.max(Math.min(a3.scale, h2.maxRatio), s3.minRatio), h2.imageEl.style.transitionDuration = `${e2.params.speed}ms`, h2.imageEl.style.transform = `translate3d(0,0,0) scale(${a3.scale})`, o2 = a3.scale, c2 = false, a3.scale > 1 && h2.slideEl ? h2.slideEl.classList.add(`${s3.zoomedSlideClass}`) : a3.scale <= 1 && h2.slideEl && h2.slideEl.classList.remove(`${s3.zoomedSlideClass}`), 1 === a3.scale && (h2.originX = 0, h2.originY = 0, h2.slideEl = void 0)));
    }
    function I2() {
      e2.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function z2(t3) {
      const s3 = "mouse" === t3.pointerType && e2.params.zoom.panOnMouseMove;
      if (!T2(t3) || !M2(t3)) return;
      const a3 = e2.zoom;
      if (!h2.imageEl) return;
      if (!f2.isTouched || !h2.slideEl) return void (s3 && $2(t3));
      if (s3) return void $2(t3);
      f2.isMoved || (f2.width = h2.imageEl.offsetWidth || h2.imageEl.clientWidth, f2.height = h2.imageEl.offsetHeight || h2.imageEl.clientHeight, f2.startX = d(h2.imageWrapEl, "x") || 0, f2.startY = d(h2.imageWrapEl, "y") || 0, h2.slideWidth = h2.slideEl.offsetWidth, h2.slideHeight = h2.slideEl.offsetHeight, h2.imageWrapEl.style.transitionDuration = "0ms");
      const i3 = f2.width * a3.scale, r2 = f2.height * a3.scale;
      f2.minX = Math.min(h2.slideWidth / 2 - i3 / 2, 0), f2.maxX = -f2.minX, f2.minY = Math.min(h2.slideHeight / 2 - r2 / 2, 0), f2.maxY = -f2.minY, f2.touchesCurrent.x = m2.length > 0 ? m2[0].pageX : t3.pageX, f2.touchesCurrent.y = m2.length > 0 ? m2[0].pageY : t3.pageY;
      if (Math.max(Math.abs(f2.touchesCurrent.x - f2.touchesStart.x), Math.abs(f2.touchesCurrent.y - f2.touchesStart.y)) > 5 && (e2.allowClick = false), !f2.isMoved && !c2) {
        if (e2.isHorizontal() && (Math.floor(f2.minX) === Math.floor(f2.startX) && f2.touchesCurrent.x < f2.touchesStart.x || Math.floor(f2.maxX) === Math.floor(f2.startX) && f2.touchesCurrent.x > f2.touchesStart.x)) return f2.isTouched = false, void I2();
        if (!e2.isHorizontal() && (Math.floor(f2.minY) === Math.floor(f2.startY) && f2.touchesCurrent.y < f2.touchesStart.y || Math.floor(f2.maxY) === Math.floor(f2.startY) && f2.touchesCurrent.y > f2.touchesStart.y)) return f2.isTouched = false, void I2();
      }
      t3.cancelable && t3.preventDefault(), t3.stopPropagation(), clearTimeout(w2), e2.touchEventsData.preventTouchMoveFromPointerMove = true, w2 = setTimeout(() => {
        e2.destroyed || I2();
      }), f2.isMoved = true;
      const n3 = (a3.scale - o2) / (h2.maxRatio - e2.params.zoom.minRatio), { originX: l3, originY: p3 } = h2;
      f2.currentX = f2.touchesCurrent.x - f2.touchesStart.x + f2.startX + n3 * (f2.width - 2 * l3), f2.currentY = f2.touchesCurrent.y - f2.touchesStart.y + f2.startY + n3 * (f2.height - 2 * p3), f2.currentX < f2.minX && (f2.currentX = f2.minX + 1 - (f2.minX - f2.currentX + 1) ** 0.8), f2.currentX > f2.maxX && (f2.currentX = f2.maxX - 1 + (f2.currentX - f2.maxX + 1) ** 0.8), f2.currentY < f2.minY && (f2.currentY = f2.minY + 1 - (f2.minY - f2.currentY + 1) ** 0.8), f2.currentY > f2.maxY && (f2.currentY = f2.maxY - 1 + (f2.currentY - f2.maxY + 1) ** 0.8), v2.prevPositionX || (v2.prevPositionX = f2.touchesCurrent.x), v2.prevPositionY || (v2.prevPositionY = f2.touchesCurrent.y), v2.prevTime || (v2.prevTime = Date.now()), v2.x = (f2.touchesCurrent.x - v2.prevPositionX) / (Date.now() - v2.prevTime) / 2, v2.y = (f2.touchesCurrent.y - v2.prevPositionY) / (Date.now() - v2.prevTime) / 2, Math.abs(f2.touchesCurrent.x - v2.prevPositionX) < 2 && (v2.x = 0), Math.abs(f2.touchesCurrent.y - v2.prevPositionY) < 2 && (v2.y = 0), v2.prevPositionX = f2.touchesCurrent.x, v2.prevPositionY = f2.touchesCurrent.y, v2.prevTime = Date.now(), h2.imageWrapEl.style.transform = `translate3d(${f2.currentX}px, ${f2.currentY}px,0)`;
    }
    function A2() {
      const t3 = e2.zoom;
      h2.slideEl && e2.activeIndex !== e2.slides.indexOf(h2.slideEl) && (h2.imageEl && (h2.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), h2.imageWrapEl && (h2.imageWrapEl.style.transform = "translate3d(0,0,0)"), h2.slideEl.classList.remove(`${e2.params.zoom.zoomedSlideClass}`), t3.scale = 1, o2 = 1, h2.slideEl = void 0, h2.imageEl = void 0, h2.imageWrapEl = void 0, h2.originX = 0, h2.originY = 0);
    }
    function $2(e3) {
      if (o2 <= 1 || !h2.imageWrapEl) return;
      if (!T2(e3) || !M2(e3)) return;
      const t3 = i2.getComputedStyle(h2.imageWrapEl).transform, s3 = new i2.DOMMatrix(t3);
      if (!p2) return p2 = true, u2.x = e3.clientX, u2.y = e3.clientY, f2.startX = s3.e, f2.startY = s3.f, f2.width = h2.imageEl.offsetWidth || h2.imageEl.clientWidth, f2.height = h2.imageEl.offsetHeight || h2.imageEl.clientHeight, h2.slideWidth = h2.slideEl.offsetWidth, void (h2.slideHeight = h2.slideEl.offsetHeight);
      const a3 = -3 * (e3.clientX - u2.x), r2 = -3 * (e3.clientY - u2.y), n3 = f2.width * o2, l3 = f2.height * o2, d2 = h2.slideWidth, c3 = h2.slideHeight, m3 = Math.min(d2 / 2 - n3 / 2, 0), g2 = -m3, v3 = Math.min(c3 / 2 - l3 / 2, 0), w3 = -v3, b2 = Math.max(Math.min(f2.startX + a3, g2), m3), y3 = Math.max(Math.min(f2.startY + r2, w3), v3);
      h2.imageWrapEl.style.transitionDuration = "0ms", h2.imageWrapEl.style.transform = `translate3d(${b2}px, ${y3}px, 0)`, u2.x = e3.clientX, u2.y = e3.clientY, f2.startX = b2, f2.startY = y3, f2.currentX = b2, f2.currentY = y3;
    }
    function k2(t3) {
      const s3 = e2.zoom, a3 = e2.params.zoom;
      if (!h2.slideEl) {
        t3 && t3.target && (h2.slideEl = t3.target.closest(`.${e2.params.slideClass}, swiper-slide`)), h2.slideEl || (e2.params.virtual && e2.params.virtual.enabled && e2.virtual ? h2.slideEl = g(e2.slidesEl, `.${e2.params.slideActiveClass}`)[0] : h2.slideEl = e2.slides[e2.activeIndex]);
        let s4 = h2.slideEl.querySelector(`.${a3.containerClass}`);
        s4 && (s4 = s4.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), h2.imageEl = s4, h2.imageWrapEl = s4 ? x(h2.imageEl, `.${a3.containerClass}`)[0] : void 0;
      }
      if (!h2.imageEl || !h2.imageWrapEl) return;
      let r2, n3, l3, d2, c3, p3, u3, m3, v3, w3, y3, E3, T3, M3, C3, P3, L3, I3;
      h2.maxRatio = S2(), e2.params.cssMode && (e2.wrapperEl.style.overflow = "hidden", e2.wrapperEl.style.touchAction = "none"), h2.slideEl.classList.add(`${a3.zoomedSlideClass}`), void 0 === f2.touchesStart.x && t3 ? (r2 = t3.pageX, n3 = t3.pageY) : (r2 = f2.touchesStart.x, n3 = f2.touchesStart.y);
      const z3 = o2, A3 = "number" == typeof t3 ? t3 : null;
      1 === o2 && A3 && (r2 = void 0, n3 = void 0, f2.touchesStart.x = void 0, f2.touchesStart.y = void 0);
      const $3 = S2();
      s3.scale = A3 || $3, o2 = A3 || $3, !t3 || 1 === o2 && A3 ? (u3 = 0, m3 = 0) : (L3 = h2.slideEl.offsetWidth, I3 = h2.slideEl.offsetHeight, l3 = b(h2.slideEl).left + i2.scrollX, d2 = b(h2.slideEl).top + i2.scrollY, c3 = l3 + L3 / 2 - r2, p3 = d2 + I3 / 2 - n3, v3 = h2.imageEl.offsetWidth || h2.imageEl.clientWidth, w3 = h2.imageEl.offsetHeight || h2.imageEl.clientHeight, y3 = v3 * s3.scale, E3 = w3 * s3.scale, T3 = Math.min(L3 / 2 - y3 / 2, 0), M3 = Math.min(I3 / 2 - E3 / 2, 0), C3 = -T3, P3 = -M3, z3 > 0 && A3 && "number" == typeof f2.currentX && "number" == typeof f2.currentY ? (u3 = f2.currentX * s3.scale / z3, m3 = f2.currentY * s3.scale / z3) : (u3 = c3 * s3.scale, m3 = p3 * s3.scale), u3 < T3 && (u3 = T3), u3 > C3 && (u3 = C3), m3 < M3 && (m3 = M3), m3 > P3 && (m3 = P3)), A3 && 1 === s3.scale && (h2.originX = 0, h2.originY = 0), f2.currentX = u3, f2.currentY = m3, h2.imageWrapEl.style.transitionDuration = "300ms", h2.imageWrapEl.style.transform = `translate3d(${u3}px, ${m3}px,0)`, h2.imageEl.style.transitionDuration = "300ms", h2.imageEl.style.transform = `translate3d(0,0,0) scale(${s3.scale})`;
    }
    function O2() {
      const t3 = e2.zoom, s3 = e2.params.zoom;
      if (!h2.slideEl) {
        e2.params.virtual && e2.params.virtual.enabled && e2.virtual ? h2.slideEl = g(e2.slidesEl, `.${e2.params.slideActiveClass}`)[0] : h2.slideEl = e2.slides[e2.activeIndex];
        let t4 = h2.slideEl.querySelector(`.${s3.containerClass}`);
        t4 && (t4 = t4.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), h2.imageEl = t4, h2.imageWrapEl = t4 ? x(h2.imageEl, `.${s3.containerClass}`)[0] : void 0;
      }
      h2.imageEl && h2.imageWrapEl && (h2.maxRatio = S2(), e2.params.cssMode && (e2.wrapperEl.style.overflow = "", e2.wrapperEl.style.touchAction = ""), t3.scale = 1, o2 = 1, f2.currentX = void 0, f2.currentY = void 0, f2.touchesStart.x = void 0, f2.touchesStart.y = void 0, h2.imageWrapEl.style.transitionDuration = "300ms", h2.imageWrapEl.style.transform = "translate3d(0,0,0)", h2.imageEl.style.transitionDuration = "300ms", h2.imageEl.style.transform = "translate3d(0,0,0) scale(1)", h2.slideEl.classList.remove(`${s3.zoomedSlideClass}`), h2.slideEl = void 0, h2.originX = 0, h2.originY = 0, e2.params.zoom.panOnMouseMove && (u2 = { x: 0, y: 0 }, p2 && (p2 = false, f2.startX = 0, f2.startY = 0)));
    }
    function D2(t3) {
      const s3 = e2.zoom;
      s3.scale && 1 !== s3.scale ? O2() : k2(t3);
    }
    function G2() {
      return { passiveListener: !!e2.params.passiveListeners && { passive: true, capture: false }, activeListenerWithCapture: !e2.params.passiveListeners || { passive: false, capture: true } };
    }
    function X2() {
      const t3 = e2.zoom;
      if (t3.enabled) return;
      t3.enabled = true;
      const { passiveListener: s3, activeListenerWithCapture: a3 } = G2();
      e2.wrapperEl.addEventListener("pointerdown", C2, s3), e2.wrapperEl.addEventListener("pointermove", P2, a3), ["pointerup", "pointercancel", "pointerout"].forEach((t4) => {
        e2.wrapperEl.addEventListener(t4, L2, s3);
      }), e2.wrapperEl.addEventListener("pointermove", z2, a3);
    }
    function B2() {
      const t3 = e2.zoom;
      if (!t3.enabled) return;
      t3.enabled = false;
      const { passiveListener: s3, activeListenerWithCapture: a3 } = G2();
      e2.wrapperEl.removeEventListener("pointerdown", C2, s3), e2.wrapperEl.removeEventListener("pointermove", P2, a3), ["pointerup", "pointercancel", "pointerout"].forEach((t4) => {
        e2.wrapperEl.removeEventListener(t4, L2, s3);
      }), e2.wrapperEl.removeEventListener("pointermove", z2, a3);
    }
    Object.defineProperty(e2.zoom, "scale", { get: () => y2, set(e3) {
      if (y2 !== e3) {
        const t3 = h2.imageEl, s3 = h2.slideEl;
        a2("zoomChange", e3, t3, s3);
      }
      y2 = e3;
    } }), s2("init", () => {
      e2.params.zoom.enabled && X2();
    }), s2("destroy", () => {
      B2();
    }), s2("touchStart", (t3, s3) => {
      e2.zoom.enabled && (function(t4) {
        const s4 = e2.device;
        if (!h2.imageEl) return;
        if (f2.isTouched) return;
        s4.android && t4.cancelable && t4.preventDefault(), f2.isTouched = true;
        const a3 = m2.length > 0 ? m2[0] : t4;
        f2.touchesStart.x = a3.pageX, f2.touchesStart.y = a3.pageY;
      })(s3);
    }), s2("touchEnd", (t3, s3) => {
      e2.zoom.enabled && (function() {
        const t4 = e2.zoom;
        if (m2.length = 0, !h2.imageEl) return;
        if (!f2.isTouched || !f2.isMoved) return f2.isTouched = false, void (f2.isMoved = false);
        f2.isTouched = false, f2.isMoved = false;
        let s4 = 300, a3 = 300;
        const i3 = v2.x * s4, r2 = f2.currentX + i3, n3 = v2.y * a3, l3 = f2.currentY + n3;
        0 !== v2.x && (s4 = Math.abs((r2 - f2.currentX) / v2.x)), 0 !== v2.y && (a3 = Math.abs((l3 - f2.currentY) / v2.y));
        const o3 = Math.max(s4, a3);
        f2.currentX = r2, f2.currentY = l3;
        const d2 = f2.width * t4.scale, c3 = f2.height * t4.scale;
        f2.minX = Math.min(h2.slideWidth / 2 - d2 / 2, 0), f2.maxX = -f2.minX, f2.minY = Math.min(h2.slideHeight / 2 - c3 / 2, 0), f2.maxY = -f2.minY, f2.currentX = Math.max(Math.min(f2.currentX, f2.maxX), f2.minX), f2.currentY = Math.max(Math.min(f2.currentY, f2.maxY), f2.minY), h2.imageWrapEl.style.transitionDuration = `${o3}ms`, h2.imageWrapEl.style.transform = `translate3d(${f2.currentX}px, ${f2.currentY}px,0)`;
      })();
    }), s2("doubleTap", (t3, s3) => {
      !e2.animating && e2.params.zoom.enabled && e2.zoom.enabled && e2.params.zoom.toggle && D2(s3);
    }), s2("transitionEnd", () => {
      e2.zoom.enabled && e2.params.zoom.enabled && A2();
    }), s2("slideChange", () => {
      e2.zoom.enabled && e2.params.zoom.enabled && e2.params.cssMode && A2();
    }), Object.assign(e2.zoom, { enable: X2, disable: B2, in: k2, out: O2, toggle: D2 });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    function a2(e3, t3) {
      const s3 = /* @__PURE__ */ (function() {
        let e4, t4, s4;
        return (a4, i4) => {
          for (t4 = -1, e4 = a4.length; e4 - t4 > 1; ) s4 = e4 + t4 >> 1, a4[s4] <= i4 ? t4 = s4 : e4 = s4;
          return e4;
        };
      })();
      let a3, i3;
      return this.x = e3, this.y = t3, this.lastIndex = e3.length - 1, this.interpolate = function(e4) {
        return e4 ? (i3 = s3(this.x, e4), a3 = i3 - 1, (e4 - this.x[a3]) * (this.y[i3] - this.y[a3]) / (this.x[i3] - this.x[a3]) + this.y[a3]) : 0;
      }, this;
    }
    function i2() {
      e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
    }
    t2({ controller: { control: void 0, inverse: false, by: "slide" } }), e2.controller = { control: void 0 }, s2("beforeInit", () => {
      if ("undefined" != typeof window && ("string" == typeof e2.params.controller.control || e2.params.controller.control instanceof HTMLElement)) {
        return void ("string" == typeof e2.params.controller.control ? [...document.querySelectorAll(e2.params.controller.control)] : [e2.params.controller.control]).forEach((t3) => {
          if (e2.controller.control || (e2.controller.control = []), t3 && t3.swiper) e2.controller.control.push(t3.swiper);
          else if (t3) {
            const s3 = `${e2.params.eventsPrefix}init`, a3 = (i3) => {
              e2.controller.control.push(i3.detail[0]), e2.update(), t3.removeEventListener(s3, a3);
            };
            t3.addEventListener(s3, a3);
          }
        });
      }
      e2.controller.control = e2.params.controller.control;
    }), s2("update", () => {
      i2();
    }), s2("resize", () => {
      i2();
    }), s2("observerUpdate", () => {
      i2();
    }), s2("setTranslate", (t3, s3, a3) => {
      e2.controller.control && !e2.controller.control.destroyed && e2.controller.setTranslate(s3, a3);
    }), s2("setTransition", (t3, s3, a3) => {
      e2.controller.control && !e2.controller.control.destroyed && e2.controller.setTransition(s3, a3);
    }), Object.assign(e2.controller, { setTranslate: function(t3, s3) {
      const i3 = e2.controller.control;
      let r2, n2;
      const l2 = e2.constructor;
      function o2(t4) {
        if (t4.destroyed) return;
        const s4 = e2.rtlTranslate ? -e2.translate : e2.translate;
        "slide" === e2.params.controller.by && (!(function(t5) {
          e2.controller.spline = e2.params.loop ? new a2(e2.slidesGrid, t5.slidesGrid) : new a2(e2.snapGrid, t5.snapGrid);
        })(t4), n2 = -e2.controller.spline.interpolate(-s4)), n2 && "container" !== e2.params.controller.by || (r2 = (t4.maxTranslate() - t4.minTranslate()) / (e2.maxTranslate() - e2.minTranslate()), !Number.isNaN(r2) && Number.isFinite(r2) || (r2 = 1), n2 = (s4 - e2.minTranslate()) * r2 + t4.minTranslate()), e2.params.controller.inverse && (n2 = t4.maxTranslate() - n2), t4.updateProgress(n2), t4.setTranslate(n2, e2), t4.updateActiveIndex(), t4.updateSlidesClasses();
      }
      if (Array.isArray(i3)) for (let e3 = 0; e3 < i3.length; e3 += 1) i3[e3] !== s3 && i3[e3] instanceof l2 && o2(i3[e3]);
      else i3 instanceof l2 && s3 !== i3 && o2(i3);
    }, setTransition: function(t3, s3) {
      const a3 = e2.constructor, i3 = e2.controller.control;
      let r2;
      function n2(s4) {
        s4.destroyed || (s4.setTransition(t3, e2), 0 !== t3 && (s4.transitionStart(), s4.params.autoHeight && l(() => {
          s4.updateAutoHeight();
        }), S(s4.wrapperEl, () => {
          i3 && s4.transitionEnd();
        })));
      }
      if (Array.isArray(i3)) for (r2 = 0; r2 < i3.length; r2 += 1) i3[r2] !== s3 && i3[r2] instanceof a3 && n2(i3[r2]);
      else i3 instanceof a3 && s3 !== i3 && n2(i3);
    } });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, containerRole: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null, scrollOnFocus: true, wrapperLiveRegion: true } }), e2.a11y = { clicked: false };
    let i2, r2, n2 = null, l2 = (/* @__PURE__ */ new Date()).getTime();
    function o2(e3) {
      const t3 = n2;
      0 !== t3.length && P(t3, e3);
    }
    function d2(e3) {
      (e3 = M(e3)).forEach((e4) => {
        e4.setAttribute("tabIndex", "0");
      });
    }
    function c2(e3) {
      (e3 = M(e3)).forEach((e4) => {
        e4.setAttribute("tabIndex", "-1");
      });
    }
    function p2(e3, t3) {
      (e3 = M(e3)).forEach((e4) => {
        e4.setAttribute("role", t3);
      });
    }
    function u2(e3, t3) {
      (e3 = M(e3)).forEach((e4) => {
        e4.setAttribute("aria-roledescription", t3);
      });
    }
    function m2(e3, t3) {
      (e3 = M(e3)).forEach((e4) => {
        e4.setAttribute("aria-label", t3);
      });
    }
    function h2(e3) {
      (e3 = M(e3)).forEach((e4) => {
        e4.setAttribute("aria-disabled", true);
      });
    }
    function f2(e3) {
      (e3 = M(e3)).forEach((e4) => {
        e4.removeAttribute("aria-disabled");
      });
    }
    function g2(t3) {
      if (13 !== t3.keyCode && 32 !== t3.keyCode) return;
      const s3 = e2.params.a11y, a2 = t3.target;
      if (!e2.pagination || !e2.pagination.el || a2 !== e2.pagination.el && !e2.pagination.el.contains(t3.target) || t3.target.matches(de(e2.params.pagination.bulletClass))) {
        if (e2.navigation && e2.navigation.prevEl && e2.navigation.nextEl) {
          const t4 = M(e2.navigation.prevEl);
          M(e2.navigation.nextEl).includes(a2) && (e2.isEnd && !e2.params.loop || e2.slideNext(), e2.isEnd ? o2(s3.lastSlideMessage) : o2(s3.nextSlideMessage)), t4.includes(a2) && (e2.isBeginning && !e2.params.loop || e2.slidePrev(), e2.isBeginning ? o2(s3.firstSlideMessage) : o2(s3.prevSlideMessage));
        }
        e2.pagination && a2.matches(de(e2.params.pagination.bulletClass)) && a2.click();
      }
    }
    function v2() {
      return e2.pagination && e2.pagination.bullets && e2.pagination.bullets.length;
    }
    function b2() {
      return v2() && e2.params.pagination.clickable;
    }
    const y2 = (e3, t3, s3) => {
      d2(e3), "BUTTON" !== e3.tagName && (p2(e3, "button"), e3.addEventListener("keydown", g2)), m2(e3, s3);
    }, x2 = (t3) => {
      r2 && r2 !== t3.target && !r2.contains(t3.target) && (i2 = true), e2.a11y.clicked = true;
    }, S2 = () => {
      i2 = false, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          e2.destroyed || (e2.a11y.clicked = false);
        });
      });
    }, T2 = (e3) => {
      l2 = (/* @__PURE__ */ new Date()).getTime();
    }, C2 = (t3) => {
      if (e2.a11y.clicked || !e2.params.a11y.scrollOnFocus) return;
      if ((/* @__PURE__ */ new Date()).getTime() - l2 < 100) return;
      const s3 = t3.target.closest(`.${e2.params.slideClass}, swiper-slide`);
      if (!s3 || !e2.slides.includes(s3)) return;
      r2 = s3;
      const a2 = e2.virtual && e2.params.virtual.enabled, n3 = (a2 ? parseInt(s3.getAttribute("data-swiper-slide-index"), 10) : e2.slides.indexOf(s3)) === e2.activeIndex, o3 = e2.params.watchSlidesProgress && e2.visibleSlides && e2.visibleSlides.includes(s3);
      n3 || o3 || t3.sourceCapabilities && t3.sourceCapabilities.firesTouchEvents || (e2.isHorizontal() ? e2.el.scrollLeft = 0 : e2.el.scrollTop = 0, requestAnimationFrame(() => {
        i2 || (e2.params.loop ? e2.slideToLoop(e2.getSlideIndexWhenGrid(parseInt(s3.getAttribute("data-swiper-slide-index"))), 0) : a2 ? e2.slideTo(e2.getSlideIndexWhenGrid(parseInt(s3.getAttribute("data-swiper-slide-index"), 10)), 0) : e2.slideTo(e2.getSlideIndexWhenGrid(e2.slides.indexOf(s3)), 0), i2 = false);
      }));
    }, L2 = () => {
      const t3 = e2.params.a11y;
      t3.itemRoleDescriptionMessage && u2(e2.slides, t3.itemRoleDescriptionMessage), t3.slideRole && p2(e2.slides, t3.slideRole);
      const s3 = e2.slides.length;
      t3.slideLabelMessage && e2.slides.forEach((a2, i3) => {
        const r3 = e2.params.loop ? parseInt(a2.getAttribute("data-swiper-slide-index"), 10) : i3;
        m2(a2, t3.slideLabelMessage.replace(/\{\{index\}\}/, r3 + 1).replace(/\{\{slidesLength\}\}/, s3));
      });
    }, I2 = () => {
      const t3 = e2.params.a11y;
      e2.el.append(n2);
      const s3 = e2.el;
      t3.containerRoleDescriptionMessage && u2(s3, t3.containerRoleDescriptionMessage), t3.containerMessage && m2(s3, t3.containerMessage), t3.containerRole && p2(s3, t3.containerRole);
      const i3 = e2.wrapperEl, r3 = t3.id || i3.getAttribute("id") || `swiper-wrapper-${(function(e3 = 16) {
        return "x".repeat(e3).replace(/x/g, () => Math.round(16 * Math.random()).toString(16));
      })(16)}`;
      var l3;
      if (l3 = r3, M(i3).forEach((e3) => {
        e3.setAttribute("id", l3);
      }), t3.wrapperLiveRegion) {
        !(function(e3, t4) {
          (e3 = M(e3)).forEach((e4) => {
            e4.setAttribute("aria-live", t4);
          });
        })(i3, e2.params.autoplay && e2.params.autoplay.enabled ? "off" : "polite");
      }
      L2();
      let { nextEl: o3, prevEl: d3 } = e2.navigation ? e2.navigation : {};
      if (o3 = M(o3), d3 = M(d3), o3 && o3.forEach((e3) => y2(e3, 0, t3.nextSlideMessage)), d3 && d3.forEach((e3) => y2(e3, 0, t3.prevSlideMessage)), b2()) {
        M(e2.pagination.el).forEach((e3) => {
          e3.addEventListener("keydown", g2);
        });
      }
      a().addEventListener("visibilitychange", T2), e2.el.addEventListener("focus", C2, true), e2.el.addEventListener("pointerdown", x2, true), e2.el.addEventListener("pointerup", S2, true);
    };
    s2("beforeInit", () => {
      n2 = w("span", e2.params.a11y.notificationClass), n2.setAttribute("aria-live", "assertive"), n2.setAttribute("aria-atomic", "true");
    }), s2("afterInit", () => {
      e2.params.a11y.enabled && I2();
    }), s2("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      e2.params.a11y.enabled && L2();
    }), s2("fromEdge toEdge afterInit lock unlock", () => {
      e2.params.a11y.enabled && (function() {
        if (e2.params.loop || e2.params.rewind || !e2.navigation) return;
        const { nextEl: t3, prevEl: s3 } = e2.navigation;
        s3 && (e2.isBeginning ? (h2(s3), c2(s3)) : (f2(s3), d2(s3))), t3 && (e2.isEnd ? (h2(t3), c2(t3)) : (f2(t3), d2(t3)));
      })();
    }), s2("paginationUpdate", () => {
      e2.params.a11y.enabled && (function() {
        const t3 = e2.params.a11y;
        v2() && e2.pagination.bullets.forEach((s3) => {
          e2.params.pagination.clickable && (d2(s3), e2.params.pagination.renderBullet || (p2(s3, "button"), m2(s3, t3.paginationBulletMessage.replace(/\{\{index\}\}/, E(s3) + 1)))), s3.matches(de(e2.params.pagination.bulletActiveClass)) ? s3.setAttribute("aria-current", "true") : s3.removeAttribute("aria-current");
        });
      })();
    }), s2("destroy", () => {
      e2.params.a11y.enabled && (function() {
        n2 && n2.remove();
        let { nextEl: t3, prevEl: s3 } = e2.navigation ? e2.navigation : {};
        t3 = M(t3), s3 = M(s3), t3 && t3.forEach((e3) => e3.removeEventListener("keydown", g2)), s3 && s3.forEach((e3) => e3.removeEventListener("keydown", g2)), b2() && M(e2.pagination.el).forEach((e3) => {
          e3.removeEventListener("keydown", g2);
        });
        a().removeEventListener("visibilitychange", T2), e2.el && "string" != typeof e2.el && (e2.el.removeEventListener("focus", C2, true), e2.el.removeEventListener("pointerdown", x2, true), e2.el.removeEventListener("pointerup", S2, true));
      })();
    });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ history: { enabled: false, root: "", replaceState: false, key: "slides", keepQuery: false } });
    let a2 = false, i2 = {};
    const n2 = (e3) => e3.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), l2 = (e3) => {
      const t3 = r();
      let s3;
      s3 = e3 ? new URL(e3) : t3.location;
      const a3 = s3.pathname.slice(1).split("/").filter((e4) => "" !== e4), i3 = a3.length;
      return { key: a3[i3 - 2], value: a3[i3 - 1] };
    }, o2 = (t3, s3) => {
      const i3 = r();
      if (!a2 || !e2.params.history.enabled) return;
      let l3;
      l3 = e2.params.url ? new URL(e2.params.url) : i3.location;
      const o3 = e2.virtual && e2.params.virtual.enabled ? e2.slidesEl.querySelector(`[data-swiper-slide-index="${s3}"]`) : e2.slides[s3];
      let d3 = n2(o3.getAttribute("data-history"));
      if (e2.params.history.root.length > 0) {
        let s4 = e2.params.history.root;
        "/" === s4[s4.length - 1] && (s4 = s4.slice(0, s4.length - 1)), d3 = `${s4}/${t3 ? `${t3}/` : ""}${d3}`;
      } else l3.pathname.includes(t3) || (d3 = `${t3 ? `${t3}/` : ""}${d3}`);
      e2.params.history.keepQuery && (d3 += l3.search);
      const c3 = i3.history.state;
      c3 && c3.value === d3 || (e2.params.history.replaceState ? i3.history.replaceState({ value: d3 }, null, d3) : i3.history.pushState({ value: d3 }, null, d3));
    }, d2 = (t3, s3, a3) => {
      if (s3) for (let i3 = 0, r2 = e2.slides.length; i3 < r2; i3 += 1) {
        const r3 = e2.slides[i3];
        if (n2(r3.getAttribute("data-history")) === s3) {
          const s4 = e2.getSlideIndex(r3);
          e2.slideTo(s4, t3, a3);
        }
      }
      else e2.slideTo(0, t3, a3);
    }, c2 = () => {
      i2 = l2(e2.params.url), d2(e2.params.speed, i2.value, false);
    };
    s2("init", () => {
      e2.params.history.enabled && (() => {
        const t3 = r();
        if (e2.params.history) {
          if (!t3.history || !t3.history.pushState) return e2.params.history.enabled = false, void (e2.params.hashNavigation.enabled = true);
          a2 = true, i2 = l2(e2.params.url), i2.key || i2.value ? (d2(0, i2.value, e2.params.runCallbacksOnInit), e2.params.history.replaceState || t3.addEventListener("popstate", c2)) : e2.params.history.replaceState || t3.addEventListener("popstate", c2);
        }
      })();
    }), s2("destroy", () => {
      e2.params.history.enabled && (() => {
        const t3 = r();
        e2.params.history.replaceState || t3.removeEventListener("popstate", c2);
      })();
    }), s2("transitionEnd _freeModeNoMomentumRelease", () => {
      a2 && o2(e2.params.history.key, e2.activeIndex);
    }), s2("slideChange", () => {
      a2 && e2.params.cssMode && o2(e2.params.history.key, e2.activeIndex);
    });
  }, function({ swiper: e2, extendParams: t2, emit: s2, on: i2 }) {
    let n2 = false;
    const l2 = a(), o2 = r();
    t2({ hashNavigation: { enabled: false, replaceState: false, watchState: false, getSlideIndex(t3, s3) {
      if (e2.virtual && e2.params.virtual.enabled) {
        const t4 = e2.slides.find((e3) => e3.getAttribute("data-hash") === s3);
        if (!t4) return 0;
        return parseInt(t4.getAttribute("data-swiper-slide-index"), 10);
      }
      return e2.getSlideIndex(g(e2.slidesEl, `.${e2.params.slideClass}[data-hash="${s3}"], swiper-slide[data-hash="${s3}"]`)[0]);
    } } });
    const d2 = () => {
      s2("hashChange");
      const t3 = l2.location.hash.replace("#", ""), a2 = e2.virtual && e2.params.virtual.enabled ? e2.slidesEl.querySelector(`[data-swiper-slide-index="${e2.activeIndex}"]`) : e2.slides[e2.activeIndex];
      if (t3 !== (a2 ? a2.getAttribute("data-hash") : "")) {
        const s3 = e2.params.hashNavigation.getSlideIndex(e2, t3);
        if (void 0 === s3 || Number.isNaN(s3)) return;
        e2.slideTo(s3);
      }
    }, c2 = () => {
      if (!n2 || !e2.params.hashNavigation.enabled) return;
      const t3 = e2.virtual && e2.params.virtual.enabled ? e2.slidesEl.querySelector(`[data-swiper-slide-index="${e2.activeIndex}"]`) : e2.slides[e2.activeIndex], a2 = t3 ? t3.getAttribute("data-hash") || t3.getAttribute("data-history") : "";
      e2.params.hashNavigation.replaceState && o2.history && o2.history.replaceState ? (o2.history.replaceState(null, null, `#${a2}` || ""), s2("hashSet")) : (l2.location.hash = a2 || "", s2("hashSet"));
    };
    i2("init", () => {
      e2.params.hashNavigation.enabled && (() => {
        if (!e2.params.hashNavigation.enabled || e2.params.history && e2.params.history.enabled) return;
        n2 = true;
        const t3 = l2.location.hash.replace("#", "");
        if (t3) {
          const s3 = 0, a2 = e2.params.hashNavigation.getSlideIndex(e2, t3);
          e2.slideTo(a2 || 0, s3, e2.params.runCallbacksOnInit, true);
        }
        e2.params.hashNavigation.watchState && o2.addEventListener("hashchange", d2);
      })();
    }), i2("destroy", () => {
      e2.params.hashNavigation.enabled && e2.params.hashNavigation.watchState && o2.removeEventListener("hashchange", d2);
    }), i2("transitionEnd _freeModeNoMomentumRelease", () => {
      n2 && c2();
    }), i2("slideChange", () => {
      n2 && e2.params.cssMode && c2();
    });
  }, function({ swiper: e2, extendParams: t2, on: s2, emit: i2, params: r2 }) {
    let n2, l2;
    e2.autoplay = { running: false, paused: false, timeLeft: 0 }, t2({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: false, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } });
    let o2, d2, c2, p2, u2, m2, h2, f2 = r2 && r2.autoplay ? r2.autoplay.delay : 3e3, g2 = r2 && r2.autoplay ? r2.autoplay.delay : 3e3, v2 = (/* @__PURE__ */ new Date()).getTime();
    function w2(t3) {
      e2 && !e2.destroyed && e2.wrapperEl && t3.target === e2.wrapperEl && (e2.wrapperEl.removeEventListener("transitionend", w2), h2 || t3.detail && t3.detail.bySwiperTouchMove || M2());
    }
    const b2 = () => {
      if (e2.destroyed || !e2.autoplay.running) return;
      e2.autoplay.paused ? d2 = true : d2 && (g2 = o2, d2 = false);
      const t3 = e2.autoplay.paused ? o2 : v2 + g2 - (/* @__PURE__ */ new Date()).getTime();
      e2.autoplay.timeLeft = t3, i2("autoplayTimeLeft", t3, t3 / f2), l2 = requestAnimationFrame(() => {
        b2();
      });
    }, y2 = () => {
      let t3 = e2.params.autoplay.delay;
      const s3 = (() => {
        let t4;
        if (t4 = e2.virtual && e2.params.virtual.enabled ? e2.slides.find((e3) => e3.classList.contains("swiper-slide-active")) : e2.slides[e2.activeIndex], !t4) return;
        return parseInt(t4.getAttribute("data-swiper-autoplay"), 10);
      })();
      return !Number.isNaN(s3) && s3 > 0 && (t3 = s3), t3;
    }, E2 = (t3) => {
      if (e2.destroyed || !e2.autoplay.running) return;
      cancelAnimationFrame(l2), b2();
      let s3 = t3;
      void 0 === s3 && (s3 = y2(), f2 = s3, g2 = s3), o2 = s3;
      const a2 = e2.params.speed, r3 = () => {
        e2 && !e2.destroyed && (e2.params.autoplay.reverseDirection ? !e2.isBeginning || e2.params.loop || e2.params.rewind ? (e2.slidePrev(a2, true, true), i2("autoplay")) : e2.params.autoplay.stopOnLastSlide || (e2.slideTo(e2.slides.length - 1, a2, true, true), i2("autoplay")) : !e2.isEnd || e2.params.loop || e2.params.rewind ? (e2.slideNext(a2, true, true), i2("autoplay")) : e2.params.autoplay.stopOnLastSlide || (e2.slideTo(0, a2, true, true), i2("autoplay")), e2.params.cssMode && (v2 = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
          E2();
        })));
      };
      return s3 > 0 ? (clearTimeout(n2), n2 = setTimeout(() => {
        r3();
      }, s3)) : requestAnimationFrame(() => {
        r3();
      }), s3;
    }, x2 = () => {
      v2 = (/* @__PURE__ */ new Date()).getTime(), e2.autoplay.running = true, E2(), i2("autoplayStart");
    }, S2 = () => {
      e2.autoplay.running = false, clearTimeout(n2), cancelAnimationFrame(l2), i2("autoplayStop");
    }, T2 = (t3, s3) => {
      if (e2.destroyed || !e2.autoplay.running) return;
      clearTimeout(n2), t3 || (m2 = true);
      const a2 = () => {
        i2("autoplayPause"), e2.params.autoplay.waitForTransition ? e2.wrapperEl.addEventListener("transitionend", w2) : M2();
      };
      if (e2.autoplay.paused = true, s3) return void a2();
      const r3 = o2 || e2.params.autoplay.delay;
      o2 = r3 - ((/* @__PURE__ */ new Date()).getTime() - v2), e2.isEnd && o2 < 0 && !e2.params.loop || (o2 < 0 && (o2 = 0), a2());
    }, M2 = () => {
      e2.isEnd && o2 < 0 && !e2.params.loop || e2.destroyed || !e2.autoplay.running || (v2 = (/* @__PURE__ */ new Date()).getTime(), m2 ? (m2 = false, E2(o2)) : E2(), e2.autoplay.paused = false, i2("autoplayResume"));
    }, C2 = () => {
      if (e2.destroyed || !e2.autoplay.running) return;
      const t3 = a();
      "hidden" === t3.visibilityState && (m2 = true, T2(true)), "visible" === t3.visibilityState && M2();
    }, P2 = (t3) => {
      "mouse" === t3.pointerType && (m2 = true, h2 = true, e2.animating || e2.autoplay.paused || T2(true));
    }, L2 = (t3) => {
      "mouse" === t3.pointerType && (h2 = false, e2.autoplay.paused && M2());
    };
    s2("init", () => {
      e2.params.autoplay.enabled && (e2.params.autoplay.pauseOnMouseEnter && (e2.el.addEventListener("pointerenter", P2), e2.el.addEventListener("pointerleave", L2)), a().addEventListener("visibilitychange", C2), x2());
    }), s2("destroy", () => {
      e2.el && "string" != typeof e2.el && (e2.el.removeEventListener("pointerenter", P2), e2.el.removeEventListener("pointerleave", L2)), a().removeEventListener("visibilitychange", C2), e2.autoplay.running && S2();
    }), s2("_freeModeStaticRelease", () => {
      (p2 || m2) && M2();
    }), s2("_freeModeNoMomentumRelease", () => {
      e2.params.autoplay.disableOnInteraction ? S2() : T2(true, true);
    }), s2("beforeTransitionStart", (t3, s3, a2) => {
      !e2.destroyed && e2.autoplay.running && (a2 || !e2.params.autoplay.disableOnInteraction ? T2(true, true) : S2());
    }), s2("sliderFirstMove", () => {
      !e2.destroyed && e2.autoplay.running && (e2.params.autoplay.disableOnInteraction ? S2() : (c2 = true, p2 = false, m2 = false, u2 = setTimeout(() => {
        m2 = true, p2 = true, T2(true);
      }, 200)));
    }), s2("touchEnd", () => {
      if (!e2.destroyed && e2.autoplay.running && c2) {
        if (clearTimeout(u2), clearTimeout(n2), e2.params.autoplay.disableOnInteraction) return p2 = false, void (c2 = false);
        p2 && e2.params.cssMode && M2(), p2 = false, c2 = false;
      }
    }), s2("slideChange", () => {
      !e2.destroyed && e2.autoplay.running && e2.autoplay.paused && (o2 = y2(), f2 = y2());
    }), Object.assign(e2.autoplay, { start: x2, stop: S2, pause: T2, resume: M2 });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ thumbs: { swiper: null, multipleActiveThumbs: true, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
    let i2 = false, r2 = false;
    function n2() {
      const t3 = e2.thumbs.swiper;
      return !(!t3 || t3.destroyed) && (t3.params.virtual && t3.params.virtual.enabled);
    }
    function l2() {
      const t3 = e2.thumbs.swiper;
      if (!t3 || t3.destroyed) return;
      const s3 = t3.clickedIndex, a2 = t3.clickedSlide;
      if (a2 && a2.classList.contains(e2.params.thumbs.slideThumbActiveClass)) return;
      if (null == s3) return;
      let i3;
      i3 = t3.params.loop ? parseInt(t3.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s3, e2.params.loop ? e2.slideToLoop(i3) : e2.slideTo(i3);
    }
    function o2() {
      const { thumbs: t3 } = e2.params;
      if (i2) return false;
      i2 = true;
      const s3 = e2.constructor;
      if (t3.swiper instanceof s3) {
        if (t3.swiper.destroyed) return i2 = false, false;
        e2.thumbs.swiper = t3.swiper, Object.assign(e2.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), Object.assign(e2.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false }), e2.thumbs.swiper.update();
      } else if (c(t3.swiper)) {
        const a2 = Object.assign({}, t3.swiper);
        Object.assign(a2, { watchSlidesProgress: true, slideToClickedSlide: false }), e2.thumbs.swiper = new s3(a2), r2 = true;
      }
      return e2.thumbs.swiper.el.classList.add(e2.params.thumbs.thumbsContainerClass), e2.thumbs.swiper.on("tap", l2), n2() && e2.thumbs.swiper.on("virtualUpdate", () => {
        d2(false, { autoScroll: false });
      }), true;
    }
    function d2(t3, s3) {
      const a2 = e2.thumbs.swiper;
      if (!a2 || a2.destroyed) return;
      let i3 = 1;
      const r3 = e2.params.thumbs.slideThumbActiveClass;
      if (e2.params.slidesPerView > 1 && !e2.params.centeredSlides && (i3 = e2.params.slidesPerView), e2.params.thumbs.multipleActiveThumbs || (i3 = 1), i3 = Math.floor(i3), a2.slides.forEach((e3) => e3.classList.remove(r3)), a2.params.loop || n2()) for (let t4 = 0; t4 < i3; t4 += 1) g(a2.slidesEl, `[data-swiper-slide-index="${e2.realIndex + t4}"]`).forEach((e3) => {
        e3.classList.add(r3);
      });
      else for (let t4 = 0; t4 < i3; t4 += 1) a2.slides[e2.realIndex + t4] && a2.slides[e2.realIndex + t4].classList.add(r3);
      (s3?.autoScroll ?? 1) && (function(t4) {
        const s4 = e2.thumbs.swiper;
        if (!s4 || s4.destroyed) return;
        const a3 = "auto" === s4.params.slidesPerView ? s4.slidesPerViewDynamic() : s4.params.slidesPerView, i4 = e2.params.thumbs.autoScrollOffset, r4 = i4 && !s4.params.loop;
        if (e2.realIndex !== s4.realIndex || r4) {
          const n3 = s4.activeIndex;
          let l3, o3;
          if (s4.params.loop) {
            const t5 = s4.slides.find((t6) => t6.getAttribute("data-swiper-slide-index") === `${e2.realIndex}`);
            l3 = s4.slides.indexOf(t5), o3 = e2.activeIndex > e2.previousIndex ? "next" : "prev";
          } else l3 = e2.realIndex, o3 = l3 > e2.previousIndex ? "next" : "prev";
          r4 && (l3 += "next" === o3 ? i4 : -1 * i4), s4.visibleSlidesIndexes && s4.visibleSlidesIndexes.indexOf(l3) < 0 && (s4.params.centeredSlides ? l3 = l3 > n3 ? l3 - Math.floor(a3 / 2) + 1 : l3 + Math.floor(a3 / 2) - 1 : l3 > n3 && s4.params.slidesPerGroup, s4.slideTo(l3, t4));
        }
      })(t3 ? 0 : void 0);
    }
    e2.thumbs = { swiper: null }, s2("beforeInit", () => {
      const { thumbs: t3 } = e2.params;
      if (t3 && t3.swiper) if ("string" == typeof t3.swiper || t3.swiper instanceof HTMLElement) {
        const s3 = a(), i3 = () => {
          const a2 = "string" == typeof t3.swiper ? s3.querySelector(t3.swiper) : t3.swiper;
          if (a2 && a2.swiper) t3.swiper = a2.swiper, o2(), d2(true);
          else if (a2) {
            const s4 = `${e2.params.eventsPrefix}init`, i4 = (r4) => {
              t3.swiper = r4.detail[0], a2.removeEventListener(s4, i4), o2(), d2(true), t3.swiper.update(), e2.update();
            };
            a2.addEventListener(s4, i4);
          }
          return a2;
        }, r3 = () => {
          if (e2.destroyed) return;
          i3() || requestAnimationFrame(r3);
        };
        requestAnimationFrame(r3);
      } else o2(), d2(true);
    }), s2("slideChange update resize observerUpdate", () => {
      d2();
    }), s2("setTransition", (t3, s3) => {
      const a2 = e2.thumbs.swiper;
      a2 && !a2.destroyed && a2.setTransition(s3);
    }), s2("beforeDestroy", () => {
      const t3 = e2.thumbs.swiper;
      t3 && !t3.destroyed && r2 && t3.destroy();
    }), Object.assign(e2.thumbs, { init: o2, update: d2 });
  }, function({ swiper: e2, extendParams: t2, emit: s2, once: a2 }) {
    t2({ freeMode: { enabled: false, momentum: true, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: false, minimumVelocity: 0.02 } }), Object.assign(e2, { freeMode: { onTouchStart: function() {
      if (e2.params.cssMode) return;
      const t3 = e2.getTranslate();
      e2.setTranslate(t3), e2.setTransition(0), e2.touchEventsData.velocities.length = 0, e2.freeMode.onTouchEnd({ currentPos: e2.rtl ? e2.translate : -e2.translate });
    }, onTouchMove: function() {
      if (e2.params.cssMode) return;
      const { touchEventsData: t3, touches: s3 } = e2;
      0 === t3.velocities.length && t3.velocities.push({ position: s3[e2.isHorizontal() ? "startX" : "startY"], time: t3.touchStartTime }), t3.velocities.push({ position: s3[e2.isHorizontal() ? "currentX" : "currentY"], time: o() });
    }, onTouchEnd: function({ currentPos: t3 }) {
      if (e2.params.cssMode) return;
      const { params: i2, wrapperEl: r2, rtlTranslate: n2, snapGrid: l2, touchEventsData: d2 } = e2, c2 = o() - d2.touchStartTime;
      if (t3 < -e2.minTranslate()) e2.slideTo(e2.activeIndex);
      else if (t3 > -e2.maxTranslate()) e2.slides.length < l2.length ? e2.slideTo(l2.length - 1) : e2.slideTo(e2.slides.length - 1);
      else {
        if (i2.freeMode.momentum) {
          if (d2.velocities.length > 1) {
            const t5 = d2.velocities.pop(), s3 = d2.velocities.pop(), a3 = t5.position - s3.position, r3 = t5.time - s3.time;
            e2.velocity = a3 / r3, e2.velocity /= 2, Math.abs(e2.velocity) < i2.freeMode.minimumVelocity && (e2.velocity = 0), (r3 > 150 || o() - t5.time > 300) && (e2.velocity = 0);
          } else e2.velocity = 0;
          e2.velocity *= i2.freeMode.momentumVelocityRatio, d2.velocities.length = 0;
          let t4 = 1e3 * i2.freeMode.momentumRatio;
          const c3 = e2.velocity * t4;
          let p2 = e2.translate + c3;
          n2 && (p2 = -p2);
          let u2, m2 = false;
          const h2 = 20 * Math.abs(e2.velocity) * i2.freeMode.momentumBounceRatio;
          let f2;
          if (p2 < e2.maxTranslate()) i2.freeMode.momentumBounce ? (p2 + e2.maxTranslate() < -h2 && (p2 = e2.maxTranslate() - h2), u2 = e2.maxTranslate(), m2 = true, d2.allowMomentumBounce = true) : p2 = e2.maxTranslate(), i2.loop && i2.centeredSlides && (f2 = true);
          else if (p2 > e2.minTranslate()) i2.freeMode.momentumBounce ? (p2 - e2.minTranslate() > h2 && (p2 = e2.minTranslate() + h2), u2 = e2.minTranslate(), m2 = true, d2.allowMomentumBounce = true) : p2 = e2.minTranslate(), i2.loop && i2.centeredSlides && (f2 = true);
          else if (i2.freeMode.sticky) {
            let t5;
            for (let e3 = 0; e3 < l2.length; e3 += 1) if (l2[e3] > -p2) {
              t5 = e3;
              break;
            }
            p2 = Math.abs(l2[t5] - p2) < Math.abs(l2[t5 - 1] - p2) || "next" === e2.swipeDirection ? l2[t5] : l2[t5 - 1], p2 = -p2;
          }
          if (f2 && a2("transitionEnd", () => {
            e2.loopFix();
          }), 0 !== e2.velocity) {
            if (t4 = n2 ? Math.abs((-p2 - e2.translate) / e2.velocity) : Math.abs((p2 - e2.translate) / e2.velocity), i2.freeMode.sticky) {
              const s3 = Math.abs((n2 ? -p2 : p2) - e2.translate), a3 = e2.slidesSizesGrid[e2.activeIndex];
              t4 = s3 < a3 ? i2.speed : s3 < 2 * a3 ? 1.5 * i2.speed : 2.5 * i2.speed;
            }
          } else if (i2.freeMode.sticky) return void e2.slideToClosest();
          i2.freeMode.momentumBounce && m2 ? (e2.updateProgress(u2), e2.setTransition(t4), e2.setTranslate(p2), e2.transitionStart(true, e2.swipeDirection), e2.animating = true, S(r2, () => {
            e2 && !e2.destroyed && d2.allowMomentumBounce && (s2("momentumBounce"), e2.setTransition(i2.speed), setTimeout(() => {
              e2.setTranslate(u2), S(r2, () => {
                e2 && !e2.destroyed && e2.transitionEnd();
              });
            }, 0));
          })) : e2.velocity ? (s2("_freeModeNoMomentumRelease"), e2.updateProgress(p2), e2.setTransition(t4), e2.setTranslate(p2), e2.transitionStart(true, e2.swipeDirection), e2.animating || (e2.animating = true, S(r2, () => {
            e2 && !e2.destroyed && e2.transitionEnd();
          }))) : e2.updateProgress(p2), e2.updateActiveIndex(), e2.updateSlidesClasses();
        } else {
          if (i2.freeMode.sticky) return void e2.slideToClosest();
          i2.freeMode && s2("_freeModeNoMomentumRelease");
        }
        (!i2.freeMode.momentum || c2 >= i2.longSwipesMs) && (s2("_freeModeStaticRelease"), e2.updateProgress(), e2.updateActiveIndex(), e2.updateSlidesClasses());
      }
    } } });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    let a2, i2, r2, n2;
    t2({ grid: { rows: 1, fill: "column" } });
    const l2 = () => {
      let t3 = e2.params.spaceBetween;
      return "string" == typeof t3 && t3.indexOf("%") >= 0 ? t3 = parseFloat(t3.replace("%", "")) / 100 * e2.size : "string" == typeof t3 && (t3 = parseFloat(t3)), t3;
    };
    s2("init", () => {
      n2 = e2.params.grid && e2.params.grid.rows > 1;
    }), s2("update", () => {
      const { params: t3, el: s3 } = e2, a3 = t3.grid && t3.grid.rows > 1;
      n2 && !a3 ? (s3.classList.remove(`${t3.containerModifierClass}grid`, `${t3.containerModifierClass}grid-column`), r2 = 1, e2.emitContainerClasses()) : !n2 && a3 && (s3.classList.add(`${t3.containerModifierClass}grid`), "column" === t3.grid.fill && s3.classList.add(`${t3.containerModifierClass}grid-column`), e2.emitContainerClasses()), n2 = a3;
    }), e2.grid = { initSlides: (t3) => {
      const { slidesPerView: s3 } = e2.params, { rows: n3, fill: l3 } = e2.params.grid, o2 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : t3.length;
      r2 = Math.floor(o2 / n3), a2 = Math.floor(o2 / n3) === o2 / n3 ? o2 : Math.ceil(o2 / n3) * n3, "auto" !== s3 && "row" === l3 && (a2 = Math.max(a2, Math.floor(s3) * n3)), i2 = a2 / n3;
    }, unsetSlides: () => {
      e2.slides && e2.slides.forEach((t3) => {
        t3.swiperSlideGridSet && (t3.style.height = "", t3.style[e2.getDirectionLabel("margin-top")] = "");
      });
    }, updateSlide: (t3, s3, n3) => {
      const { slidesPerGroup: o2 } = e2.params, d2 = l2(), { rows: c2, fill: p2 } = e2.params.grid, u2 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : n3.length;
      let m2, h2, f2;
      if ("row" === p2 && o2 > 1) {
        const e3 = Math.floor(t3 / (o2 * c2)), i3 = t3 - c2 * o2 * e3, r3 = 0 === e3 ? o2 : Math.min(Math.ceil((u2 - e3 * c2 * o2) / c2), o2);
        f2 = Math.floor(i3 / r3), h2 = i3 - f2 * r3 + e3 * o2, m2 = h2 + f2 * a2 / c2, s3.style.order = m2;
      } else "column" === p2 ? (h2 = Math.floor(t3 / c2), f2 = t3 - h2 * c2, (h2 > r2 || h2 === r2 && f2 === c2 - 1) && (f2 += 1, f2 >= c2 && (f2 = 0, h2 += 1))) : (f2 = Math.floor(t3 / i2), h2 = t3 - f2 * i2);
      s3.row = f2, s3.column = h2, s3.style.height = `calc((100% - ${(c2 - 1) * d2}px) / ${c2})`, s3.style[e2.getDirectionLabel("margin-top")] = 0 !== f2 ? d2 && `${d2}px` : "", s3.swiperSlideGridSet = true;
    }, updateWrapperSize: (t3, s3) => {
      const { centeredSlides: i3, roundLengths: r3 } = e2.params, n3 = l2(), { rows: o2 } = e2.params.grid;
      if (e2.virtualSize = (t3 + n3) * a2, e2.virtualSize = Math.ceil(e2.virtualSize / o2) - n3, e2.params.cssMode || (e2.wrapperEl.style[e2.getDirectionLabel("width")] = `${e2.virtualSize + n3}px`), i3) {
        const t4 = [];
        for (let a3 = 0; a3 < s3.length; a3 += 1) {
          let i4 = s3[a3];
          r3 && (i4 = Math.floor(i4)), s3[a3] < e2.virtualSize + s3[0] && t4.push(i4);
        }
        s3.splice(0, s3.length), s3.push(...t4);
      }
    } };
  }, function({ swiper: e2 }) {
    Object.assign(e2, { appendSlide: ce.bind(e2), prependSlide: pe.bind(e2), addSlide: ue.bind(e2), removeSlide: me.bind(e2), removeAllSlides: he.bind(e2) });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ fadeEffect: { crossFade: false } }), fe({ effect: "fade", swiper: e2, on: s2, setTranslate: () => {
      const { slides: t3 } = e2;
      e2.params.fadeEffect;
      for (let s3 = 0; s3 < t3.length; s3 += 1) {
        const t4 = e2.slides[s3];
        let a2 = -t4.swiperSlideOffset;
        e2.params.virtualTranslate || (a2 -= e2.translate);
        let i2 = 0;
        e2.isHorizontal() || (i2 = a2, a2 = 0);
        const r2 = e2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t4.progress), 0) : 1 + Math.min(Math.max(t4.progress, -1), 0), n2 = ge(0, t4);
        n2.style.opacity = r2, n2.style.transform = `translate3d(${a2}px, ${i2}px, 0px)`;
      }
    }, setTransition: (t3) => {
      const s3 = e2.slides.map((e3) => f(e3));
      s3.forEach((e3) => {
        e3.style.transitionDuration = `${t3}ms`;
      }), ve({ swiper: e2, duration: t3, transformElements: s3, allSlides: true });
    }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !e2.params.cssMode }) });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } });
    const a2 = (e3, t3, s3) => {
      let a3 = s3 ? e3.querySelector(".swiper-slide-shadow-left") : e3.querySelector(".swiper-slide-shadow-top"), i2 = s3 ? e3.querySelector(".swiper-slide-shadow-right") : e3.querySelector(".swiper-slide-shadow-bottom");
      a3 || (a3 = w("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s3 ? "left" : "top")).split(" ")), e3.append(a3)), i2 || (i2 = w("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s3 ? "right" : "bottom")).split(" ")), e3.append(i2)), a3 && (a3.style.opacity = Math.max(-t3, 0)), i2 && (i2.style.opacity = Math.max(t3, 0));
    };
    fe({ effect: "cube", swiper: e2, on: s2, setTranslate: () => {
      const { el: t3, wrapperEl: s3, slides: i2, width: r2, height: n2, rtlTranslate: l2, size: o2, browser: d2 } = e2, c2 = C(e2), p2 = e2.params.cubeEffect, u2 = e2.isHorizontal(), m2 = e2.virtual && e2.params.virtual.enabled;
      let h2, f2 = 0;
      p2.shadow && (u2 ? (h2 = e2.wrapperEl.querySelector(".swiper-cube-shadow"), h2 || (h2 = w("div", "swiper-cube-shadow"), e2.wrapperEl.append(h2)), h2.style.height = `${r2}px`) : (h2 = t3.querySelector(".swiper-cube-shadow"), h2 || (h2 = w("div", "swiper-cube-shadow"), t3.append(h2))));
      for (let e3 = 0; e3 < i2.length; e3 += 1) {
        const t4 = i2[e3];
        let s4 = e3;
        m2 && (s4 = parseInt(t4.getAttribute("data-swiper-slide-index"), 10));
        let r3 = 90 * s4, n3 = Math.floor(r3 / 360);
        l2 && (r3 = -r3, n3 = Math.floor(-r3 / 360));
        const d3 = Math.max(Math.min(t4.progress, 1), -1);
        let h3 = 0, g3 = 0, v2 = 0;
        s4 % 4 == 0 ? (h3 = 4 * -n3 * o2, v2 = 0) : (s4 - 1) % 4 == 0 ? (h3 = 0, v2 = 4 * -n3 * o2) : (s4 - 2) % 4 == 0 ? (h3 = o2 + 4 * n3 * o2, v2 = o2) : (s4 - 3) % 4 == 0 && (h3 = -o2, v2 = 3 * o2 + 4 * o2 * n3), l2 && (h3 = -h3), u2 || (g3 = h3, h3 = 0);
        const w2 = `rotateX(${c2(u2 ? 0 : -r3)}deg) rotateY(${c2(u2 ? r3 : 0)}deg) translate3d(${h3}px, ${g3}px, ${v2}px)`;
        d3 <= 1 && d3 > -1 && (f2 = 90 * s4 + 90 * d3, l2 && (f2 = 90 * -s4 - 90 * d3)), t4.style.transform = w2, p2.slideShadows && a2(t4, d3, u2);
      }
      if (s3.style.transformOrigin = `50% 50% -${o2 / 2}px`, s3.style["-webkit-transform-origin"] = `50% 50% -${o2 / 2}px`, p2.shadow) if (u2) h2.style.transform = `translate3d(0px, ${r2 / 2 + p2.shadowOffset}px, ${-r2 / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p2.shadowScale})`;
      else {
        const e3 = Math.abs(f2) - 90 * Math.floor(Math.abs(f2) / 90), t4 = 1.5 - (Math.sin(2 * e3 * Math.PI / 360) / 2 + Math.cos(2 * e3 * Math.PI / 360) / 2), s4 = p2.shadowScale, a3 = p2.shadowScale / t4, i3 = p2.shadowOffset;
        h2.style.transform = `scale3d(${s4}, 1, ${a3}) translate3d(0px, ${n2 / 2 + i3}px, ${-n2 / 2 / a3}px) rotateX(-89.99deg)`;
      }
      const g2 = (d2.isSafari || d2.isWebView) && d2.needPerspectiveFix ? -o2 / 2 : 0;
      s3.style.transform = `translate3d(0px,0,${g2}px) rotateX(${c2(e2.isHorizontal() ? 0 : f2)}deg) rotateY(${c2(e2.isHorizontal() ? -f2 : 0)}deg)`, s3.style.setProperty("--swiper-cube-translate-z", `${g2}px`);
    }, setTransition: (t3) => {
      const { el: s3, slides: a3 } = e2;
      if (a3.forEach((e3) => {
        e3.style.transitionDuration = `${t3}ms`, e3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e4) => {
          e4.style.transitionDuration = `${t3}ms`;
        });
      }), e2.params.cubeEffect.shadow && !e2.isHorizontal()) {
        const e3 = s3.querySelector(".swiper-cube-shadow");
        e3 && (e3.style.transitionDuration = `${t3}ms`);
      }
    }, recreateShadows: () => {
      const t3 = e2.isHorizontal();
      e2.slides.forEach((e3) => {
        const s3 = Math.max(Math.min(e3.progress, 1), -1);
        a2(e3, s3, t3);
      });
    }, getEffectParams: () => e2.params.cubeEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true }) });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ flipEffect: { slideShadows: true, limitRotation: true } });
    const a2 = (t3, s3) => {
      let a3 = e2.isHorizontal() ? t3.querySelector(".swiper-slide-shadow-left") : t3.querySelector(".swiper-slide-shadow-top"), i2 = e2.isHorizontal() ? t3.querySelector(".swiper-slide-shadow-right") : t3.querySelector(".swiper-slide-shadow-bottom");
      a3 || (a3 = we("flip", t3, e2.isHorizontal() ? "left" : "top")), i2 || (i2 = we("flip", t3, e2.isHorizontal() ? "right" : "bottom")), a3 && (a3.style.opacity = Math.max(-s3, 0)), i2 && (i2.style.opacity = Math.max(s3, 0));
    };
    fe({ effect: "flip", swiper: e2, on: s2, setTranslate: () => {
      const { slides: t3, rtlTranslate: s3 } = e2, i2 = e2.params.flipEffect, r2 = C(e2);
      for (let n2 = 0; n2 < t3.length; n2 += 1) {
        const l2 = t3[n2];
        let o2 = l2.progress;
        e2.params.flipEffect.limitRotation && (o2 = Math.max(Math.min(l2.progress, 1), -1));
        const d2 = l2.swiperSlideOffset;
        let c2 = -180 * o2, p2 = 0, u2 = e2.params.cssMode ? -d2 - e2.translate : -d2, m2 = 0;
        e2.isHorizontal() ? s3 && (c2 = -c2) : (m2 = u2, u2 = 0, p2 = -c2, c2 = 0), l2.style.zIndex = -Math.abs(Math.round(o2)) + t3.length, i2.slideShadows && a2(l2, o2);
        const h2 = `translate3d(${u2}px, ${m2}px, 0px) rotateX(${r2(p2)}deg) rotateY(${r2(c2)}deg)`;
        ge(0, l2).style.transform = h2;
      }
    }, setTransition: (t3) => {
      const s3 = e2.slides.map((e3) => f(e3));
      s3.forEach((e3) => {
        e3.style.transitionDuration = `${t3}ms`, e3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e4) => {
          e4.style.transitionDuration = `${t3}ms`;
        });
      }), ve({ swiper: e2, duration: t3, transformElements: s3 });
    }, recreateShadows: () => {
      e2.params.flipEffect, e2.slides.forEach((t3) => {
        let s3 = t3.progress;
        e2.params.flipEffect.limitRotation && (s3 = Math.max(Math.min(t3.progress, 1), -1)), a2(t3, s3);
      });
    }, getEffectParams: () => e2.params.flipEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !e2.params.cssMode }) });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: true } }), fe({ effect: "coverflow", swiper: e2, on: s2, setTranslate: () => {
      const { width: t3, height: s3, slides: a2, slidesSizesGrid: i2 } = e2, r2 = e2.params.coverflowEffect, n2 = e2.isHorizontal(), l2 = e2.translate, o2 = n2 ? t3 / 2 - l2 : s3 / 2 - l2, d2 = n2 ? r2.rotate : -r2.rotate, c2 = r2.depth, p2 = C(e2);
      for (let e3 = 0, t4 = a2.length; e3 < t4; e3 += 1) {
        const t5 = a2[e3], s4 = i2[e3], l3 = (o2 - t5.swiperSlideOffset - s4 / 2) / s4, u2 = "function" == typeof r2.modifier ? r2.modifier(l3) : l3 * r2.modifier;
        let m2 = n2 ? d2 * u2 : 0, h2 = n2 ? 0 : d2 * u2, f2 = -c2 * Math.abs(u2), g2 = r2.stretch;
        "string" == typeof g2 && -1 !== g2.indexOf("%") && (g2 = parseFloat(r2.stretch) / 100 * s4);
        let v2 = n2 ? 0 : g2 * u2, w2 = n2 ? g2 * u2 : 0, b2 = 1 - (1 - r2.scale) * Math.abs(u2);
        Math.abs(w2) < 1e-3 && (w2 = 0), Math.abs(v2) < 1e-3 && (v2 = 0), Math.abs(f2) < 1e-3 && (f2 = 0), Math.abs(m2) < 1e-3 && (m2 = 0), Math.abs(h2) < 1e-3 && (h2 = 0), Math.abs(b2) < 1e-3 && (b2 = 0);
        const y2 = `translate3d(${w2}px,${v2}px,${f2}px)  rotateX(${p2(h2)}deg) rotateY(${p2(m2)}deg) scale(${b2})`;
        if (ge(0, t5).style.transform = y2, t5.style.zIndex = 1 - Math.abs(Math.round(u2)), r2.slideShadows) {
          let e4 = n2 ? t5.querySelector(".swiper-slide-shadow-left") : t5.querySelector(".swiper-slide-shadow-top"), s5 = n2 ? t5.querySelector(".swiper-slide-shadow-right") : t5.querySelector(".swiper-slide-shadow-bottom");
          e4 || (e4 = we("coverflow", t5, n2 ? "left" : "top")), s5 || (s5 = we("coverflow", t5, n2 ? "right" : "bottom")), e4 && (e4.style.opacity = u2 > 0 ? u2 : 0), s5 && (s5.style.opacity = -u2 > 0 ? -u2 : 0);
        }
      }
    }, setTransition: (t3) => {
      e2.slides.map((e3) => f(e3)).forEach((e3) => {
        e3.style.transitionDuration = `${t3}ms`, e3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e4) => {
          e4.style.transitionDuration = `${t3}ms`;
        });
      });
    }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true }) });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ creativeEffect: { limitProgress: 1, shadowPerProgress: false, progressMultiplier: 1, perspective: true, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } });
    const a2 = (e3) => "string" == typeof e3 ? e3 : `${e3}px`;
    fe({ effect: "creative", swiper: e2, on: s2, setTranslate: () => {
      const { slides: t3, wrapperEl: s3, slidesSizesGrid: i2 } = e2, r2 = e2.params.creativeEffect, { progressMultiplier: n2 } = r2, l2 = e2.params.centeredSlides, o2 = C(e2);
      if (l2) {
        const t4 = i2[0] / 2 - e2.params.slidesOffsetBefore || 0;
        s3.style.transform = `translateX(calc(50% - ${t4}px))`;
      }
      for (let s4 = 0; s4 < t3.length; s4 += 1) {
        const i3 = t3[s4], d2 = i3.progress, c2 = Math.min(Math.max(i3.progress, -r2.limitProgress), r2.limitProgress);
        let p2 = c2;
        l2 || (p2 = Math.min(Math.max(i3.originalProgress, -r2.limitProgress), r2.limitProgress));
        const u2 = i3.swiperSlideOffset, m2 = [e2.params.cssMode ? -u2 - e2.translate : -u2, 0, 0], h2 = [0, 0, 0];
        let f2 = false;
        e2.isHorizontal() || (m2[1] = m2[0], m2[0] = 0);
        let g2 = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
        c2 < 0 ? (g2 = r2.next, f2 = true) : c2 > 0 && (g2 = r2.prev, f2 = true), m2.forEach((e3, t4) => {
          m2[t4] = `calc(${e3}px + (${a2(g2.translate[t4])} * ${Math.abs(c2 * n2)}))`;
        }), h2.forEach((e3, t4) => {
          let s5 = g2.rotate[t4] * Math.abs(c2 * n2);
          h2[t4] = s5;
        }), i3.style.zIndex = -Math.abs(Math.round(d2)) + t3.length;
        const v2 = m2.join(", "), w2 = `rotateX(${o2(h2[0])}deg) rotateY(${o2(h2[1])}deg) rotateZ(${o2(h2[2])}deg)`, b2 = p2 < 0 ? `scale(${1 + (1 - g2.scale) * p2 * n2})` : `scale(${1 - (1 - g2.scale) * p2 * n2})`, y2 = p2 < 0 ? 1 + (1 - g2.opacity) * p2 * n2 : 1 - (1 - g2.opacity) * p2 * n2, E2 = `translate3d(${v2}) ${w2} ${b2}`;
        if (f2 && g2.shadow || !f2) {
          let e3 = i3.querySelector(".swiper-slide-shadow");
          if (!e3 && g2.shadow && (e3 = we("creative", i3)), e3) {
            const t4 = r2.shadowPerProgress ? c2 * (1 / r2.limitProgress) : c2;
            e3.style.opacity = Math.min(Math.max(Math.abs(t4), 0), 1);
          }
        }
        const x2 = ge(0, i3);
        x2.style.transform = E2, x2.style.opacity = y2, g2.origin && (x2.style.transformOrigin = g2.origin);
      }
    }, setTransition: (t3) => {
      const s3 = e2.slides.map((e3) => f(e3));
      s3.forEach((e3) => {
        e3.style.transitionDuration = `${t3}ms`, e3.querySelectorAll(".swiper-slide-shadow").forEach((e4) => {
          e4.style.transitionDuration = `${t3}ms`;
        });
      }), ve({ swiper: e2, duration: t3, transformElements: s3, allSlides: true });
    }, perspective: () => e2.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !e2.params.cssMode }) });
  }, function({ swiper: e2, extendParams: t2, on: s2 }) {
    t2({ cardsEffect: { slideShadows: true, rotate: true, perSlideRotate: 2, perSlideOffset: 8 } }), fe({ effect: "cards", swiper: e2, on: s2, setTranslate: () => {
      const { slides: t3, activeIndex: s3, rtlTranslate: a2 } = e2, i2 = e2.params.cardsEffect, { startTranslate: r2, isTouched: n2 } = e2.touchEventsData, l2 = a2 ? -e2.translate : e2.translate;
      for (let o2 = 0; o2 < t3.length; o2 += 1) {
        const d2 = t3[o2], c2 = d2.progress, p2 = Math.min(Math.max(c2, -4), 4);
        let u2 = d2.swiperSlideOffset;
        e2.params.centeredSlides && !e2.params.cssMode && (e2.wrapperEl.style.transform = `translateX(${e2.minTranslate()}px)`), e2.params.centeredSlides && e2.params.cssMode && (u2 -= t3[0].swiperSlideOffset);
        let m2 = e2.params.cssMode ? -u2 - e2.translate : -u2, h2 = 0;
        const f2 = -100 * Math.abs(p2);
        let g2 = 1, v2 = -i2.perSlideRotate * p2, w2 = i2.perSlideOffset - 0.75 * Math.abs(p2);
        const b2 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.from + o2 : o2, y2 = (b2 === s3 || b2 === s3 - 1) && p2 > 0 && p2 < 1 && (n2 || e2.params.cssMode) && l2 < r2, E2 = (b2 === s3 || b2 === s3 + 1) && p2 < 0 && p2 > -1 && (n2 || e2.params.cssMode) && l2 > r2;
        if (y2 || E2) {
          const t4 = (1 - Math.abs((Math.abs(p2) - 0.5) / 0.5)) ** 0.5;
          v2 += -28 * p2 * t4, g2 += -0.5 * t4, w2 += 96 * t4, h2 = (i2.rotate || e2.isHorizontal() ? -25 : 0) * t4 * Math.abs(p2) + "%";
        }
        if (m2 = p2 < 0 ? `calc(${m2}px ${a2 ? "-" : "+"} (${w2 * Math.abs(p2)}%))` : p2 > 0 ? `calc(${m2}px ${a2 ? "-" : "+"} (-${w2 * Math.abs(p2)}%))` : `${m2}px`, !e2.isHorizontal()) {
          const e3 = h2;
          h2 = m2, m2 = e3;
        }
        const x2 = p2 < 0 ? "" + (1 + (1 - g2) * p2) : "" + (1 - (1 - g2) * p2), S2 = `
        translate3d(${m2}, ${h2}, ${f2}px)
        rotateZ(${i2.rotate ? a2 ? -v2 : v2 : 0}deg)
        scale(${x2})
      `;
        if (i2.slideShadows) {
          let e3 = d2.querySelector(".swiper-slide-shadow");
          e3 || (e3 = we("cards", d2)), e3 && (e3.style.opacity = Math.min(Math.max((Math.abs(p2) - 0.5) / 0.5, 0), 1));
        }
        d2.style.zIndex = -Math.abs(Math.round(c2)) + t3.length;
        ge(0, d2).style.transform = S2;
      }
    }, setTransition: (t3) => {
      const s3 = e2.slides.map((e3) => f(e3));
      s3.forEach((e3) => {
        e3.style.transitionDuration = `${t3}ms`, e3.querySelectorAll(".swiper-slide-shadow").forEach((e4) => {
          e4.style.transitionDuration = `${t3}ms`;
        });
      }), ve({ swiper: e2, duration: t3, transformElements: s3 });
    }, perspective: () => true, overwriteParams: () => ({ _loopSwapReset: false, watchSlidesProgress: true, loopAdditionalSlides: e2.params.cardsEffect.rotate ? 3 : 2, centeredSlides: true, virtualTranslate: !e2.params.cssMode }) });
  }];
  return ne.use(be), ne;
})();
