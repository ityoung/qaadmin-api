/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        "createCanvas" === t && (rg = null), ng[t] = e
    }

    function n(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, i = qp.call(t);
        if ("[object Array]" === i) {
            if (!z(t)) {
                e = [];
                for (var r = 0, o = t.length; r < o; r++) e[r] = n(t[r])
            }
        } else if (jp[i]) {
            if (!z(t)) {
                var a = t.constructor;
                if (t.constructor.from) e = a.from(t); else {
                    e = new a(t.length);
                    for (var r = 0, o = t.length; r < o; r++) e[r] = n(t[r])
                }
            }
        } else if (!Yp[i] && !z(t) && !M(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
        }
        return e
    }

    function i(t, e, r) {
        if (!w(e) || !w(t)) return r ? n(e) : t;
        for (var o in e) if (e.hasOwnProperty(o)) {
            var a = t[o], s = e[o];
            !w(s) || !w(a) || y(s) || y(a) || M(s) || M(a) || b(s) || b(a) || z(s) || z(a) ? !r && o in t || (t[o] = n(e[o], !0)) : i(a, s, r)
        }
        return t
    }

    function r(t, e) {
        for (var n = t[0], r = 1, o = t.length; r < o; r++) n = i(n, t[r], e);
        return n
    }

    function o(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function a(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t
    }

    function s() {
        return rg || (rg = ig().getContext("2d")), rg
    }

    function l(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
        }
        return -1
    }

    function u(t, e) {
        function n() {
        }

        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n;
        for (var r in i) t.prototype[r] = i[r];
        t.prototype.constructor = t, t.superClass = e
    }

    function h(t, e, n) {
        a(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, n)
    }

    function c(t) {
        if (t) return "string" != typeof t && "number" == typeof t.length
    }

    function d(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === Kp) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t); else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
    }

    function f(t, e, n) {
        if (t && e) {
            if (t.map && t.map === tg) return t.map(e, n);
            for (var i = [], r = 0, o = t.length; r < o; r++) i.push(e.call(n, t[r], r, t));
            return i
        }
    }

    function p(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === eg) return t.reduce(e, n, i);
            for (var r = 0, o = t.length; r < o; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function g(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === Qp) return t.filter(e, n);
            for (var i = [], r = 0, o = t.length; r < o; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }

    function m(t, e) {
        var n = Jp.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(Jp.call(arguments)))
        }
    }

    function v(t) {
        var e = Jp.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(Jp.call(arguments)))
        }
    }

    function y(t) {
        return "[object Array]" === qp.call(t)
    }

    function x(t) {
        return "function" == typeof t
    }

    function _(t) {
        return "[object String]" === qp.call(t)
    }

    function w(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }

    function b(t) {
        return !!Yp[qp.call(t)]
    }

    function S(t) {
        return !!jp[qp.call(t)]
    }

    function M(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function I(t) {
        return t !== t
    }

    function T(t) {
        for (var e = 0, n = arguments.length; e < n; e++) if (null != arguments[e]) return arguments[e]
    }

    function C(t, e) {
        return null != t ? t : e
    }

    function A(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function D() {
        return Function.call.apply(Jp, arguments)
    }

    function k(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function P(t, e) {
        if (!t) throw new Error(e)
    }

    function L(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function O(t) {
        t[og] = !0
    }

    function z(t) {
        return t[og]
    }

    function E(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t)
        }

        var n = y(t);
        this.data = {};
        var i = this;
        t instanceof E ? t.each(e) : t && d(t, e)
    }

    function N(t) {
        return new E(t)
    }

    function R() {
    }

    function B(t, e) {
        var n = new sg(2);
        return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
    }

    function F(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function V(t) {
        var e = new sg(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function W(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }

    function H(t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
    }

    function G(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }

    function Z(t) {
        return Math.sqrt(U(t))
    }

    function U(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function X(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function Y(t, e) {
        var n = Z(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function j(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function q(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function $(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function K(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function Q(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    function J() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
    }

    function tt(t, e) {
        return {target: t, topTarget: e && e.topTarget}
    }

    function et(t, e) {
        var n = t._$eventProcessor;
        return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e
    }

    function nt(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
    }

    function it(t, e, n, i) {
        return n = n || {}, i || !Xp.canvasSupported ? rt(t, e, n) : Xp.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : rt(t, e, n), n
    }

    function rt(t, e, n) {
        var i = nt(t);
        n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
    }

    function ot(t, e, n) {
        if (null != (e = e || window.event).zrX) return e;
        var i = e.type;
        if (i && i.indexOf("touch") >= 0) {
            var r = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
            r && it(t, r, e, n)
        } else it(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && mg.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }

    function at(t, e, n) {
        gg ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }

    function st(t, e, n) {
        gg ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function lt(t) {
        return t.which > 1
    }

    function ut(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: ht
        }
    }

    function ht(t) {
        vg(this.event)
    }

    function ct() {
    }

    function dt(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
                r.silent && (i = !0), r = r.parent
            }
            return !i || yg
        }
        return !1
    }

    function ft() {
        var t = new wg(6);
        return pt(t), t
    }

    function pt(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function gt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function mt(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], o = e[0] * n[2] + e[2] * n[3],
            a = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
    }

    function vt(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
    }

    function yt(t, e, n) {
        var i = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], u = Math.sin(n), h = Math.cos(n);
        return t[0] = i * h + a * u, t[1] = -i * u + a * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * o + u * l, t[5] = h * l - u * o, t
    }

    function xt(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function _t(t, e) {
        var n = e[0], i = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = n * a - o * i;
        return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - a * r) * l, t[5] = (o * r - n * s) * l, t) : null
    }

    function wt(t) {
        return t > Mg || t < -Mg
    }

    function bt(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    function St(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
    }

    function Mt(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
    }

    function It(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function Tt(t) {
        return St(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function Ct(t) {
        return It(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function At(t, e, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function Dt(t, e, n) {
        return t + (e - t) * n
    }

    function kt(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function Pt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function Lt(t, e) {
        Bg && Pt(Bg, e), Bg = Rg.put(t, Bg || e.slice())
    }

    function Ot(t, e) {
        if (t) {
            e = e || [];
            var n = Rg.get(t);
            if (n) return Pt(e, n);
            var i = (t += "").replace(/ /g, "").toLowerCase();
            if (i in Ng) return Pt(e, Ng[i]), Lt(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("), o = i.indexOf(")");
                if (-1 !== r && o + 1 === i.length) {
                    var a = i.substr(0, r), s = i.substr(r + 1, o - (r + 1)).split(","), l = 1;
                    switch (a) {
                        case"rgba":
                            if (4 !== s.length) return void kt(e, 0, 0, 0, 1);
                            l = Ct(s.pop());
                        case"rgb":
                            return 3 !== s.length ? void kt(e, 0, 0, 0, 1) : (kt(e, Tt(s[0]), Tt(s[1]), Tt(s[2]), l), Lt(t, e), e);
                        case"hsla":
                            return 4 !== s.length ? void kt(e, 0, 0, 0, 1) : (s[3] = Ct(s[3]), zt(s, e), Lt(t, e), e);
                        case"hsl":
                            return 3 !== s.length ? void kt(e, 0, 0, 0, 1) : (zt(s, e), Lt(t, e), e);
                        default:
                            return
                    }
                }
                kt(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length) return (u = parseInt(i.substr(1), 16)) >= 0 && u <= 4095 ? (kt(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Lt(t, e), e) : void kt(e, 0, 0, 0, 1);
                if (7 === i.length) {
                    var u = parseInt(i.substr(1), 16);
                    return u >= 0 && u <= 16777215 ? (kt(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Lt(t, e), e) : void kt(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function zt(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = Ct(t[1]), r = Ct(t[2]),
            o = r <= .5 ? r * (i + 1) : r + i - r * i, a = 2 * r - o;
        return e = e || [], kt(e, St(255 * At(a, o, n + 1 / 3)), St(255 * At(a, o, n)), St(255 * At(a, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function Et(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, o = t[2] / 255, a = Math.min(i, r, o), s = Math.max(i, r, o),
                l = s - a, u = (s + a) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = u < .5 ? l / (s + a) : l / (2 - s - a);
                var h = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - o) / 6 + l / 2) / l;
                i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : o === s && (e = 2 / 3 + c - h), e < 0 && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, n, u];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function Nt(t, e) {
        var n = Ot(t);
        if (n) {
            for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return Wt(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function Rt(t) {
        var e = Ot(t);
        if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
    }

    function Bt(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = e[r], s = e[o], l = i - r;
            return n[0] = St(Dt(a[0], s[0], l)), n[1] = St(Dt(a[1], s[1], l)), n[2] = St(Dt(a[2], s[2], l)), n[3] = It(Dt(a[3], s[3], l)), n
        }
    }

    function Ft(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = Ot(e[r]), s = Ot(e[o]), l = i - r,
                u = Wt([St(Dt(a[0], s[0], l)), St(Dt(a[1], s[1], l)), St(Dt(a[2], s[2], l)), It(Dt(a[3], s[3], l))], "rgba");
            return n ? {color: u, leftIndex: r, rightIndex: o, value: i} : u
        }
    }

    function Vt(t, e) {
        if ((t = Ot(t)) && null != e) return t[3] = It(e), Wt(t, "rgba")
    }

    function Wt(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    function Ht(t, e) {
        return t[e]
    }

    function Gt(t, e, n) {
        t[e] = n
    }

    function Zt(t, e, n) {
        return (e - t) * n + t
    }

    function Ut(t, e, n) {
        return n > .5 ? e : t
    }

    function Xt(t, e, n, i, r) {
        var o = t.length;
        if (1 == r) for (s = 0; s < o; s++) i[s] = Zt(t[s], e[s], n); else for (var a = o && t[0].length, s = 0; s < o; s++) for (var l = 0; l < a; l++) i[s][l] = Zt(t[s][l], e[s][l], n)
    }

    function Yt(t, e, n) {
        var i = t.length, r = e.length;
        if (i !== r) if (i > r) t.length = r; else for (a = i; a < r; a++) t.push(1 === n ? e[a] : Hg.call(e[a]));
        for (var o = t[0] && t[0].length, a = 0; a < t.length; a++) if (1 === n) isNaN(t[a]) && (t[a] = e[a]); else for (var s = 0; s < o; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s])
    }

    function jt(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (o = 0; o < i; o++) if (t[o] !== e[o]) return !1
        } else for (var r = t[0].length, o = 0; o < i; o++) for (var a = 0; a < r; a++) if (t[o][a] !== e[o][a]) return !1;
        return !0
    }

    function qt(t, e, n, i, r, o, a, s, l) {
        var u = t.length;
        if (1 == l) for (c = 0; c < u; c++) s[c] = $t(t[c], e[c], n[c], i[c], r, o, a); else for (var h = t[0].length, c = 0; c < u; c++) for (var d = 0; d < h; d++) s[c][d] = $t(t[c][d], e[c][d], n[c][d], i[c][d], r, o, a)
    }

    function $t(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Kt(t) {
        if (c(t)) {
            var e = t.length;
            if (c(t[0])) {
                for (var n = [], i = 0; i < e; i++) n.push(Hg.call(t[i]));
                return n
            }
            return Hg.call(t)
        }
        return t
    }

    function Qt(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function Jt(t) {
        var e = t[t.length - 1].value;
        return c(e && e[0]) ? 2 : 1
    }

    function te(t, e, n, i, r, o) {
        var a = t._getter, s = t._setter, l = "spline" === e, u = i.length;
        if (u) {
            var h, d = c(i[0].value), f = !1, p = !1, g = d ? Jt(i) : 0;
            i.sort(function (t, e) {
                return t.time - e.time
            }), h = i[u - 1].time;
            for (var m = [], v = [], y = i[0].value, x = !0, _ = 0; _ < u; _++) {
                m.push(i[_].time / h);
                var w = i[_].value;
                if (d && jt(w, y, g) || !d && w === y || (x = !1), y = w, "string" == typeof w) {
                    var b = Ot(w);
                    b ? (w = b, f = !0) : p = !0
                }
                v.push(w)
            }
            if (o || !x) {
                for (var S = v[u - 1], _ = 0; _ < u - 1; _++) d ? Yt(v[_], S, g) : !isNaN(v[_]) || isNaN(S) || p || f || (v[_] = S);
                d && Yt(a(t._target, r), S, g);
                var M, I, T, C, A, D, k = 0, P = 0;
                if (f) var L = [0, 0, 0, 0];
                var O = new bt({
                    target: t._target, life: h, loop: t._loop, delay: t._delay, onframe: function (t, e) {
                        var n;
                        if (e < 0) n = 0; else if (e < P) {
                            for (n = M = Math.min(k + 1, u - 1); n >= 0 && !(m[n] <= e); n--) ;
                            n = Math.min(n, u - 2)
                        } else {
                            for (n = k; n < u && !(m[n] > e); n++) ;
                            n = Math.min(n - 1, u - 2)
                        }
                        k = n, P = e;
                        var i = m[n + 1] - m[n];
                        if (0 !== i) if (I = (e - m[n]) / i, l) if (C = v[n], T = v[0 === n ? n : n - 1], A = v[n > u - 2 ? u - 1 : n + 1], D = v[n > u - 3 ? u - 1 : n + 2], d) qt(T, C, A, D, I, I * I, I * I * I, a(t, r), g); else {
                            if (f) o = qt(T, C, A, D, I, I * I, I * I * I, L, 1), o = Qt(L); else {
                                if (p) return Ut(C, A, I);
                                o = $t(T, C, A, D, I, I * I, I * I * I)
                            }
                            s(t, r, o)
                        } else if (d) Xt(v[n], v[n + 1], I, a(t, r), g); else {
                            var o;
                            if (f) Xt(v[n], v[n + 1], I, L, 1), o = Qt(L); else {
                                if (p) return Ut(v[n], v[n + 1], I);
                                o = Zt(v[n], v[n + 1], I)
                            }
                            s(t, r, o)
                        }
                    }, ondestroy: n
                });
                return e && "spline" !== e && (O.easing = e), O
            }
        }
    }

    function ee(t, e, n, i, r, o, a, s) {
        _(i) ? (o = r, r = i, i = 0) : x(r) ? (o = r, r = "linear", i = 0) : x(i) ? (o = i, i = 0) : x(n) ? (o = n, n = 500) : n || (n = 500), t.stopAnimation(), ne(t, "", t, e, n, i, s);
        var l = t.animators.slice(), u = l.length;
        u || o && o();
        for (var h = 0; h < l.length; h++) l[h].done(function () {
            --u || o && o()
        }).start(r, a)
    }

    function ne(t, e, n, i, r, o, a) {
        var s = {}, l = 0;
        for (var u in i) i.hasOwnProperty(u) && (null != n[u] ? w(i[u]) && !c(i[u]) ? ne(t, e ? e + "." + u : u, n[u], i[u], r, o, a) : (a ? (s[u] = n[u], ie(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || a || ie(t, e, u, i[u]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(o || 0)
    }

    function ie(t, e, n, i) {
        if (e) {
            var r = {};
            r[e] = {}, r[e][n] = i, t.attr(r)
        } else t.attr(n, i)
    }

    function re(t, e, n, i) {
        n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
    }

    function oe(t) {
        for (var e = 0; t >= tm;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function ae(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; r < n && i(t[r], t[r - 1]) < 0;) r++;
            se(t, e, r)
        } else for (; r < n && i(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function se(t, e, n) {
        for (n--; e < n;) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i
        }
    }

    function le(t, e, n, i, r) {
        for (i === e && i++; i < n; i++) {
            for (var o, a = t[i], s = e, l = i; s < l;) r(a, t[o = s + l >>> 1]) < 0 ? l = o : s = o + 1;
            var u = i - s;
            switch (u) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; u > 0;) t[s + u] = t[s + u - 1], u--
            }
            t[s] = a
        }
    }

    function ue(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) > 0) {
            for (s = i - r; l < s && o(t, e[n + r + l]) > 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), a += r, l += r
        } else {
            for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u
        }
        for (a++; a < l;) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) > 0 ? a = h + 1 : l = h
        }
        return l
    }

    function he(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) < 0) {
            for (s = r + 1; l < s && o(t, e[n + r - l]) < 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u
        } else {
            for (s = i - r; l < s && o(t, e[n + r + l]) >= 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), a += r, l += r
        }
        for (a++; a < l;) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) < 0 ? l = h : a = h + 1
        }
        return l
    }

    function ce(t, e) {
        function n(n) {
            var s = o[n], u = a[n], h = o[n + 1], c = a[n + 1];
            a[n] = u + c, n === l - 3 && (o[n + 1] = o[n + 2], a[n + 1] = a[n + 2]), l--;
            var d = he(t[h], t, s, u, 0, e);
            s += d, 0 !== (u -= d) && 0 !== (c = ue(t[s + u - 1], t, h, c, c - 1, e)) && (u <= c ? i(s, u, h, c) : r(s, u, h, c))
        }

        function i(n, i, r, o) {
            var a = 0;
            for (a = 0; a < i; a++) u[a] = t[n + a];
            var l = 0, h = r, c = n;
            if (t[c++] = t[h++], 0 != --o) if (1 !== i) {
                for (var d, f, p, g = s; ;) {
                    d = 0, f = 0, p = !1;
                    do {
                        if (e(t[h], u[l]) < 0) {
                            if (t[c++] = t[h++], f++, d = 0, 0 == --o) {
                                p = !0;
                                break
                            }
                        } else if (t[c++] = u[l++], d++, f = 0, 1 == --i) {
                            p = !0;
                            break
                        }
                    } while ((d | f) < g);
                    if (p) break;
                    do {
                        if (0 !== (d = he(t[h], u, l, i, 0, e))) {
                            for (a = 0; a < d; a++) t[c + a] = u[l + a];
                            if (c += d, l += d, (i -= d) <= 1) {
                                p = !0;
                                break
                            }
                        }
                        if (t[c++] = t[h++], 0 == --o) {
                            p = !0;
                            break
                        }
                        if (0 !== (f = ue(u[l], t, h, o, 0, e))) {
                            for (a = 0; a < f; a++) t[c + a] = t[h + a];
                            if (c += f, h += f, 0 === (o -= f)) {
                                p = !0;
                                break
                            }
                        }
                        if (t[c++] = u[l++], 1 == --i) {
                            p = !0;
                            break
                        }
                        g--
                    } while (d >= em || f >= em);
                    if (p) break;
                    g < 0 && (g = 0), g += 2
                }
                if ((s = g) < 1 && (s = 1), 1 === i) {
                    for (a = 0; a < o; a++) t[c + a] = t[h + a];
                    t[c + o] = u[l]
                } else {
                    if (0 === i) throw new Error;
                    for (a = 0; a < i; a++) t[c + a] = u[l + a]
                }
            } else {
                for (a = 0; a < o; a++) t[c + a] = t[h + a];
                t[c + o] = u[l]
            } else for (a = 0; a < i; a++) t[c + a] = u[l + a]
        }

        function r(n, i, r, o) {
            var a = 0;
            for (a = 0; a < o; a++) u[a] = t[r + a];
            var l = n + i - 1, h = o - 1, c = r + o - 1, d = 0, f = 0;
            if (t[c--] = t[l--], 0 != --i) if (1 !== o) {
                for (var p = s; ;) {
                    var g = 0, m = 0, v = !1;
                    do {
                        if (e(u[h], t[l]) < 0) {
                            if (t[c--] = t[l--], g++, m = 0, 0 == --i) {
                                v = !0;
                                break
                            }
                        } else if (t[c--] = u[h--], m++, g = 0, 1 == --o) {
                            v = !0;
                            break
                        }
                    } while ((g | m) < p);
                    if (v) break;
                    do {
                        if (0 != (g = i - he(u[h], t, n, i, i - 1, e))) {
                            for (i -= g, f = (c -= g) + 1, d = (l -= g) + 1, a = g - 1; a >= 0; a--) t[f + a] = t[d + a];
                            if (0 === i) {
                                v = !0;
                                break
                            }
                        }
                        if (t[c--] = u[h--], 1 == --o) {
                            v = !0;
                            break
                        }
                        if (0 != (m = o - ue(t[l], u, 0, o, o - 1, e))) {
                            for (o -= m, f = (c -= m) + 1, d = (h -= m) + 1, a = 0; a < m; a++) t[f + a] = u[d + a];
                            if (o <= 1) {
                                v = !0;
                                break
                            }
                        }
                        if (t[c--] = t[l--], 0 == --i) {
                            v = !0;
                            break
                        }
                        p--
                    } while (g >= em || m >= em);
                    if (v) break;
                    p < 0 && (p = 0), p += 2
                }
                if ((s = p) < 1 && (s = 1), 1 === o) {
                    for (f = (c -= i) + 1, d = (l -= i) + 1, a = i - 1; a >= 0; a--) t[f + a] = t[d + a];
                    t[c] = u[h]
                } else {
                    if (0 === o) throw new Error;
                    for (d = c - (o - 1), a = 0; a < o; a++) t[d + a] = u[a]
                }
            } else {
                for (f = (c -= i) + 1, d = (l -= i) + 1, a = i - 1; a >= 0; a--) t[f + a] = t[d + a];
                t[c] = u[h]
            } else for (d = c - (o - 1), a = 0; a < o; a++) t[d + a] = u[a]
        }

        var o, a, s = em, l = 0, u = [];
        o = [], a = [], this.mergeRuns = function () {
            for (; l > 1;) {
                var t = l - 2;
                if (t >= 1 && a[t - 1] <= a[t] + a[t + 1] || t >= 2 && a[t - 2] <= a[t] + a[t - 1]) a[t - 1] < a[t + 1] && t--; else if (a[t] > a[t + 1]) break;
                n(t)
            }
        }, this.forceMergeRuns = function () {
            for (; l > 1;) {
                var t = l - 2;
                t > 0 && a[t - 1] < a[t + 1] && t--, n(t)
            }
        }, this.pushRun = function (t, e) {
            o[l] = t, a[l] = e, l += 1
        }
    }

    function de(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(r < 2)) {
            var o = 0;
            if (r < tm) return o = ae(t, n, i, e), void le(t, n, i, n + o, e);
            var a = new ce(t, e), s = oe(r);
            do {
                if ((o = ae(t, n, i, e)) < s) {
                    var l = r;
                    l > s && (l = s), le(t, n, n + l, n + o, e), o = l
                }
                a.pushRun(n, o), a.mergeRuns(), r -= o, n += o
            } while (0 !== r);
            a.forceMergeRuns()
        }
    }

    function fe(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function pe(t, e, n) {
        var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, o = null == e.y ? 0 : e.y,
            a = null == e.y2 ? 0 : e.y2;
        return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, o = o * n.height + n.y, a = a * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, t.createLinearGradient(i, o, r, a)
    }

    function ge(t, e, n) {
        var i = n.width, r = n.height, o = Math.min(i, r), a = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        return e.global || (a = a * i + n.x, s = s * r + n.y, l *= o), t.createRadialGradient(a, s, 0, a, s, l)
    }

    function me() {
        return !1
    }

    function ve(t, e, n) {
        var i = ig(), r = e.getWidth(), o = e.getHeight(), a = i.style;
        return a && (a.position = "absolute", a.left = 0, a.top = 0, a.width = r + "px", a.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = o * n, i
    }

    function ye(t) {
        if ("string" == typeof t) {
            var e = fm.get(t);
            return e && e.image
        }
        return t
    }

    function xe(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var o = fm.get(t), a = {hostEl: n, cb: i, cbPayload: r};
                return o ? !we(e = o.image) && o.pending.push(a) : (!e && (e = new Image), e.onload = e.onerror = _e, fm.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [a]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function _e() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function we(t) {
        return t && t.width && t.height
    }

    function be(t, e) {
        var n = t + ":" + (e = e || ym);
        if (pm[n]) return pm[n];
        for (var i = (t + "").split("\n"), r = 0, o = 0, a = i.length; o < a; o++) r = Math.max(ze(i[o], e).width, r);
        return gm > mm && (gm = 0, pm = {}), gm++, pm[n] = r, r
    }

    function Se(t, e, n, i, r, o, a) {
        return o ? Ie(t, e, n, i, r, o, a) : Me(t, e, n, i, r, a)
    }

    function Me(t, e, n, i, r, o) {
        var a = Ee(t, e, r, o), s = be(t, e);
        r && (s += r[1] + r[3]);
        var l = a.outerHeight, u = new re(Te(0, s, n), Ce(0, l, i), s, l);
        return u.lineHeight = a.lineHeight, u
    }

    function Ie(t, e, n, i, r, o, a) {
        var s = Ne(t, {rich: o, truncate: a, font: e, textAlign: n, textPadding: r}), l = s.outerWidth,
            u = s.outerHeight;
        return new re(Te(0, l, n), Ce(0, u, i), l, u)
    }

    function Te(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function Ce(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function Ae(t, e, n) {
        var i = e.x, r = e.y, o = e.height, a = e.width, s = o / 2, l = "left", u = "top";
        switch (t) {
            case"left":
                i -= n, r += s, l = "right", u = "middle";
                break;
            case"right":
                i += n + a, r += s, u = "middle";
                break;
            case"top":
                i += a / 2, r -= n, l = "center", u = "bottom";
                break;
            case"bottom":
                i += a / 2, r += o + n, l = "center";
                break;
            case"inside":
                i += a / 2, r += s, l = "center", u = "middle";
                break;
            case"insideLeft":
                i += n, r += s, u = "middle";
                break;
            case"insideRight":
                i += a - n, r += s, l = "right", u = "middle";
                break;
            case"insideTop":
                i += a / 2, r += n, l = "center";
                break;
            case"insideBottom":
                i += a / 2, r += o - n, l = "center", u = "bottom";
                break;
            case"insideTopLeft":
                i += n, r += n;
                break;
            case"insideTopRight":
                i += a - n, r += n, l = "right";
                break;
            case"insideBottomLeft":
                i += n, r += o - n, u = "bottom";
                break;
            case"insideBottomRight":
                i += a - n, r += o - n, l = "right", u = "bottom"
        }
        return {x: i, y: r, textAlign: l, textVerticalAlign: u}
    }

    function De(t, e, n, i, r) {
        if (!e) return "";
        var o = (t + "").split("\n");
        r = ke(e, n, i, r);
        for (var a = 0, s = o.length; a < s; a++) o[a] = Pe(o[a], r);
        return o.join("\n")
    }

    function ke(t, e, n, i) {
        (i = o({}, i)).font = e;
        var n = C(n, "...");
        i.maxIterations = C(i.maxIterations, 2);
        var r = i.minChar = C(i.minChar, 0);
        i.cnCharWidth = be("国", e);
        var a = i.ascCharWidth = be("a", e);
        i.placeholder = C(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; l < r && s >= a; l++) s -= a;
        var u = be(n);
        return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i
    }

    function Pe(t, e) {
        var n = e.containerWidth, i = e.font, r = e.contentWidth;
        if (!n) return "";
        var o = be(t, i);
        if (o <= n) return t;
        for (var a = 0; ; a++) {
            if (o <= r || a >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === a ? Le(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
            o = be(t = t.substr(0, s), i)
        }
        return "" === t && (t = e.placeholder), t
    }

    function Le(t, e, n, i) {
        for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
            var s = t.charCodeAt(o);
            r += 0 <= s && s <= 127 ? n : i
        }
        return o
    }

    function Oe(t) {
        return be("国", t)
    }

    function ze(t, e) {
        return xm.measureText(t, e)
    }

    function Ee(t, e, n, i) {
        null != t && (t += "");
        var r = Oe(e), o = t ? t.split("\n") : [], a = o.length * r, s = a;
        if (n && (s += n[0] + n[2]), t && i) {
            var l = i.outerHeight, u = i.outerWidth;
            if (null != l && s > l) t = "", o = []; else if (null != u) for (var h = ke(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
                minChar: i.minChar,
                placeholder: i.placeholder
            }), c = 0, d = o.length; c < d; c++) o[c] = Pe(o[c], h)
        }
        return {lines: o, height: a, outerHeight: s, lineHeight: r}
    }

    function Ne(t, e) {
        var n = {lines: [], width: 0, height: 0};
        if (null != t && (t += ""), !t) return n;
        for (var i, r = vm.lastIndex = 0; null != (i = vm.exec(t));) {
            var o = i.index;
            o > r && Re(n, t.substring(r, o)), Re(n, i[2], i[1]), r = vm.lastIndex
        }
        r < t.length && Re(n, t.substring(r, t.length));
        var a = n.lines, s = 0, l = 0, u = [], h = e.textPadding, c = e.truncate, d = c && c.outerWidth,
            f = c && c.outerHeight;
        h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));
        for (k = 0; k < a.length; k++) {
            for (var p = a[k], g = 0, m = 0, v = 0; v < p.tokens.length; v++) {
                var y = (P = p.tokens[v]).styleName && e.rich[P.styleName] || {}, x = P.textPadding = y.textPadding,
                    _ = P.font = y.font || e.font, w = P.textHeight = C(y.textHeight, Oe(_));
                if (x && (w += x[0] + x[2]), P.height = w, P.lineHeight = A(y.textLineHeight, e.textLineHeight, w), P.textAlign = y && y.textAlign || e.textAlign, P.textVerticalAlign = y && y.textVerticalAlign || "middle", null != f && s + P.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                P.textWidth = be(P.text, _);
                var b = y.textWidth, S = null == b || "auto" === b;
                if ("string" == typeof b && "%" === b.charAt(b.length - 1)) P.percentWidth = b, u.push(P), b = 0; else {
                    if (S) {
                        b = P.textWidth;
                        var M = y.textBackgroundColor, I = M && M.image;
                        I && we(I = ye(I)) && (b = Math.max(b, I.width * w / I.height))
                    }
                    var T = x ? x[1] + x[3] : 0;
                    b += T;
                    var D = null != d ? d - m : null;
                    null != D && D < b && (!S || D < T ? (P.text = "", P.textWidth = b = 0) : (P.text = De(P.text, D - T, _, c.ellipsis, {minChar: c.minChar}), P.textWidth = be(P.text, _), b = P.textWidth + T))
                }
                m += P.width = b, y && (g = Math.max(g, P.lineHeight))
            }
            p.width = m, p.lineHeight = g, s += g, l = Math.max(l, m)
        }
        n.outerWidth = n.width = C(e.textWidth, l), n.outerHeight = n.height = C(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);
        for (var k = 0; k < u.length; k++) {
            var P = u[k], L = P.percentWidth;
            P.width = parseInt(L, 10) / 100 * l
        }
        return n
    }

    function Re(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), o = t.lines, a = 0; a < r.length; a++) {
            var s = r[a], l = {styleName: n, text: s, isLineHolder: !s && !i};
            if (a) o.push({tokens: [l]}); else {
                var u = (o[o.length - 1] || (o[0] = {tokens: []})).tokens, h = u.length;
                1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l)
            }
        }
    }

    function Be(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && L(e) || t.textFont || t.font
    }

    function Fe(t, e) {
        var n, i, r, o, a = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
        l < 0 && (a += l, l = -l), u < 0 && (s += u, u = -u), "number" == typeof h ? n = i = r = o = h : h instanceof Array ? 1 === h.length ? n = i = r = o = h[0] : 2 === h.length ? (n = r = h[0], i = o = h[1]) : 3 === h.length ? (n = h[0], i = o = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], o = h[3]) : n = i = r = o = 0;
        var c;
        n + i > l && (n *= l / (c = n + i), i *= l / c), r + o > l && (r *= l / (c = r + o), o *= l / c), i + r > u && (i *= u / (c = i + r), r *= u / c), n + o > u && (n *= u / (c = n + o), o *= u / c), t.moveTo(a + n, s), t.lineTo(a + l - i, s), 0 !== i && t.arc(a + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(a + l, s + u - r), 0 !== r && t.arc(a + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(a + o, s + u), 0 !== o && t.arc(a + o, s + u - o, o, Math.PI / 2, Math.PI), t.lineTo(a, s + n), 0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }

    function Ve(t) {
        return We(t), d(t.rich, We), t
    }

    function We(t) {
        if (t) {
            t.font = Be(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || _m[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), t.textVerticalAlign = null == n || wm[n] ? n : "top", t.textPadding && (t.textPadding = k(t.textPadding))
        }
    }

    function He(t, e, n, i, r, o) {
        i.rich ? Ze(t, e, n, i, r) : Ge(t, e, n, i, r, o)
    }

    function Ge(t, e, n, i, r, o) {
        var a = o && o.style, s = a && "text" === o.type, l = i.font || ym;
        s && l === (a.font || ym) || (e.font = l);
        var u = t.__computedFont;
        t.__styleFont !== l && (t.__styleFont = l, u = t.__computedFont = e.font);
        var h = i.textPadding, c = t.__textCotentBlock;
        c && !t.__dirtyText || (c = t.__textCotentBlock = Ee(n, u, h, i.truncate));
        var d = c.outerHeight, f = c.lines, p = c.lineHeight, g = Ke(d, i, r), m = g.baseX, v = g.baseY,
            y = g.textAlign || "left", x = g.textVerticalAlign;
        Xe(e, i, r, m, v);
        var _ = Ce(v, d, x), w = m, b = _, S = je(i);
        if (S || h) {
            var M = be(n, u);
            h && (M += h[1] + h[3]);
            var I = Te(m, M, y);
            S && qe(t, e, i, I, _, M, d), h && (w = nn(m, y, h), b += h[0])
        }
        e.textAlign = y, e.textBaseline = "middle";
        for (N = 0; N < bm.length; N++) {
            var T = bm[N], C = T[0], A = T[1], D = i[C];
            s && D === a[C] || (e[A] = rm(e, A, D || T[2]))
        }
        b += p / 2;
        var k = i.textStrokeWidth, P = s ? a.textStrokeWidth : null, L = !s || k !== P,
            O = !s || L || i.textStroke !== a.textStroke, z = Je(i.textStroke, k), E = tn(i.textFill);
        if (z && (L && (e.lineWidth = k), O && (e.strokeStyle = z)), E && (s && i.textFill === a.textFill && !a.textBackgroundColor || (e.fillStyle = E)), 1 === f.length) z && e.strokeText(f[0], w, b), E && e.fillText(f[0], w, b); else for (var N = 0; N < f.length; N++) z && e.strokeText(f[N], w, b), E && e.fillText(f[N], w, b), b += p
    }

    function Ze(t, e, n, i, r) {
        var o = t.__textCotentBlock;
        o && !t.__dirtyText || (o = t.__textCotentBlock = Ne(n, i)), Ue(t, e, o, i, r)
    }

    function Ue(t, e, n, i, r) {
        var o = n.width, a = n.outerWidth, s = n.outerHeight, l = i.textPadding, u = Ke(s, i, r), h = u.baseX,
            c = u.baseY, d = u.textAlign, f = u.textVerticalAlign;
        Xe(e, i, r, h, c);
        var p = Te(h, a, d), g = Ce(c, s, f), m = p, v = g;
        l && (m += l[3], v += l[0]);
        var y = m + o;
        je(i) && qe(t, e, i, p, g, a, s);
        for (var x = 0; x < n.lines.length; x++) {
            for (var _, w = n.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = m, A = y, D = S - 1; T < S && (!(_ = b[T]).textAlign || "left" === _.textAlign);) Ye(t, e, _, i, M, v, C, "left"), I -= _.width, C += _.width, T++;
            for (; D >= 0 && "right" === (_ = b[D]).textAlign;) Ye(t, e, _, i, M, v, A, "right"), I -= _.width, A -= _.width, D--;
            for (C += (o - (C - m) - (y - A) - I) / 2; T <= D;) Ye(t, e, _ = b[T], i, M, v, C + _.width / 2, "center"), C += _.width, T++;
            v += M
        }
    }

    function Xe(t, e, n, i, r) {
        if (n && e.textRotation) {
            var o = e.textOrigin;
            "center" === o ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : o && (i = o[0] + n.x, r = o[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
        }
    }

    function Ye(t, e, n, i, r, o, a, s) {
        var l = i.rich[n.styleName] || {};
        l.text = n.text;
        var u = n.textVerticalAlign, h = o + r / 2;
        "top" === u ? h = o + n.height / 2 : "bottom" === u && (h = o + r - n.height / 2), !n.isLineHolder && je(l) && qe(t, e, l, "right" === s ? a - n.width : "center" === s ? a - n.width / 2 : a, h - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && (a = nn(a, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), Qe(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)), Qe(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), Qe(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)), Qe(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Qe(e, "textAlign", s), Qe(e, "textBaseline", "middle"), Qe(e, "font", n.font || ym);
        var d = Je(l.textStroke || i.textStroke, p), f = tn(l.textFill || i.textFill),
            p = C(l.textStrokeWidth, i.textStrokeWidth);
        d && (Qe(e, "lineWidth", p), Qe(e, "strokeStyle", d), e.strokeText(n.text, a, h)), f && (Qe(e, "fillStyle", f), e.fillText(n.text, a, h))
    }

    function je(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function qe(t, e, n, i, r, o, a) {
        var s = n.textBackgroundColor, l = n.textBorderWidth, u = n.textBorderColor, h = _(s);
        if (Qe(e, "shadowBlur", n.textBoxShadowBlur || 0), Qe(e, "shadowColor", n.textBoxShadowColor || "transparent"), Qe(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Qe(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? Fe(e, {x: i, y: r, width: o, height: a, r: c}) : e.rect(i, r, o, a), e.closePath()
        }
        if (h) if (Qe(e, "fillStyle", s), null != n.fillOpacity) {
            f = e.globalAlpha;
            e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = f
        } else e.fill(); else if (x(s)) Qe(e, "fillStyle", s(n)), e.fill(); else if (w(s)) {
            var d = s.image;
            (d = xe(d, null, t, $e, s)) && we(d) && e.drawImage(d, i, r, o, a)
        }
        if (l && u) if (Qe(e, "lineWidth", l), Qe(e, "strokeStyle", u), null != n.strokeOpacity) {
            var f = e.globalAlpha;
            e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = f
        } else e.stroke()
    }

    function $e(t, e) {
        e.image = t
    }

    function Ke(t, e, n) {
        var i = e.x || 0, r = e.y || 0, o = e.textAlign, a = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + en(s[0], n.width), r = n.y + en(s[1], n.height); else {
                var l = Ae(s, n, e.textDistance);
                i = l.x, r = l.y, o = o || l.textAlign, a = a || l.textVerticalAlign
            }
            var u = e.textOffset;
            u && (i += u[0], r += u[1])
        }
        return {baseX: i, baseY: r, textAlign: o, textVerticalAlign: a}
    }

    function Qe(t, e, n) {
        return t[e] = rm(t, e, n), t[e]
    }

    function Je(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function tn(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function en(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function nn(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function rn(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    function on(t) {
        t = t || {}, qg.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new am(t.style, this), this._rect = null, this.__clipPaths = []
    }

    function an(t) {
        on.call(this, t)
    }

    function sn(t) {
        return parseInt(t, 10)
    }

    function ln(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
    }

    function un(t, e, n) {
        return Im.copy(t.getBoundingRect()), t.transform && Im.applyTransform(t.transform), Tm.width = e, Tm.height = n, !Im.intersect(Tm)
    }

    function hn(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0
    }

    function cn(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
        }
    }

    function dn(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    function fn(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }

    function pn(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function gn(t) {
        return "mousewheel" === t && Xp.browser.firefox ? "DOMMouseScroll" : t
    }

    function mn(t, e, n) {
        var i = t._gestureMgr;
        "start" === n && i.clear();
        var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === n && i.clear(), r) {
            var o = r.type;
            e.gestureEvent = o, t.handler.dispatchToElement({target: r.target}, o, r.event)
        }
    }

    function vn(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
            t._touching = !1
        }, 700)
    }

    function yn(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function xn(t) {
        function e(t, e) {
            return function () {
                if (!e._touching) return t.apply(e, arguments)
            }
        }

        d(Lm, function (e) {
            t._handlers[e] = m(Em[e], t)
        }), d(zm, function (e) {
            t._handlers[e] = m(Em[e], t)
        }), d(Pm, function (n) {
            t._handlers[n] = e(Em[n], t)
        })
    }

    function _n(t) {
        function e(e, n) {
            d(e, function (e) {
                at(t, gn(e), n._handlers[e])
            }, n)
        }

        pg.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Dm, this._handlers = {}, xn(this), Xp.pointerEventsSupported ? e(zm, this) : (Xp.touchEventsSupported && e(Lm, this), e(Pm, this))
    }

    function wn(t, e) {
        var n = new Vm(Zp(), t, e);
        return Fm[n.id] = n, n
    }

    function bn(t, e) {
        Bm[t] = e
    }

    function Sn(t) {
        delete Fm[t]
    }

    function Mn(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function In(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o])
            }
        }
    }

    function Tn(t) {
        return !Gm(t) || Zm(t) || t instanceof Date ? t : t.value
    }

    function Cn(t) {
        return Gm(t) && !(t instanceof Array)
    }

    function An(t, e) {
        e = (e || []).slice();
        var n = f(t || [], function (t, e) {
            return {exist: t}
        });
        return Hm(e, function (t, i) {
            if (Gm(t)) {
                for (r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void(e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var o = n[r].exist;
                    if (!(n[r].option || null != o.id && null != t.id || null == t.name || Pn(t) || Pn(o) || o.name !== t.name + "")) return n[r].option = t, void(e[i] = null)
                }
            }
        }), Hm(e, function (t, e) {
            if (Gm(t)) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i].exist;
                    if (!n[i].option && !Pn(r) && null == t.id) {
                        n[i].option = t;
                        break
                    }
                }
                i >= n.length && n.push({option: t})
            }
        }), n
    }

    function Dn(t) {
        var e = N();
        Hm(t, function (t, n) {
            var i = t.exist;
            i && e.set(i.id, t)
        }), Hm(t, function (t, n) {
            var i = t.option;
            P(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {})
        }), Hm(t, function (t, n) {
            var i = t.exist, r = t.option, o = t.keyInfo;
            if (Gm(r)) {
                if (o.name = null != r.name ? r.name + "" : i ? i.name : Um + n, i) o.id = i.id; else if (null != r.id) o.id = r.id + ""; else {
                    var a = 0;
                    do {
                        o.id = "\0" + o.name + "\0" + a++
                    } while (e.get(o.id))
                }
                e.set(o.id, t)
            }
        })
    }

    function kn(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Um))
    }

    function Pn(t) {
        return Gm(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }

    function Ln(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? y(e.dataIndex) ? f(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y(e.name) ? f(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function On() {
        var t = "__\0ec_inner_" + Ym++ + "_" + Math.random().toFixed(5);
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function zn(t, e, n) {
        if (_(e)) {
            var i = {};
            i[e + "Index"] = 0, e = i
        }
        var r = n && n.defaultMainType;
        !r || En(e, r + "Index") || En(e, r + "Id") || En(e, r + "Name") || (e[r + "Index"] = 0);
        var o = {};
        return Hm(e, function (i, r) {
            var i = e[r];
            if ("dataIndex" !== r && "dataIndexInside" !== r) {
                var a = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = a[1], u = (a[2] || "").toLowerCase();
                if (!(!s || !u || null == i || "index" === u && "none" === i || n && n.includeMainTypes && l(n.includeMainTypes, s) < 0)) {
                    var h = {mainType: s};
                    "index" === u && "all" === i || (h[u] = i);
                    var c = t.queryComponents(h);
                    o[s + "Models"] = c, o[s + "Model"] = c[0]
                }
            } else o[r] = i
        }), o
    }

    function En(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function Nn(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }

    function Rn(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function Bn(t) {
        return "auto" === t ? Xp.domSupported ? "html" : "richText" : t || "html"
    }

    function Fn(t) {
        var e = {main: "", sub: ""};
        return t && (t = t.split(jm), e.main = t[0] || "", e.sub = t[1] || ""), e
    }

    function Vn(t) {
        P(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function Wn(t, e) {
        t.$constructor = t, t.extend = function (t) {
            var e = this, n = function () {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return o(n.prototype, t), n.extend = this.extend, n.superCall = Gn, n.superApply = Zn, u(n, this), n.superClass = e, n
        }
    }

    function Hn(t) {
        var e = ["__\0is_clz", $m++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function Gn(t, e) {
        var n = D(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }

    function Zn(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }

    function Un(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[qm] || ((e = i[t.main] = {})[qm] = !0), e
        }

        e = e || {};
        var i = {};
        if (t.registerClass = function (t, e) {
                return e && (Vn(e), (e = Fn(e)).sub ? e.sub !== qm && (n(e)[e.sub] = t) : i[e.main] = t), t
            }, t.getClass = function (t, e, n) {
                var r = i[t];
                if (r && r[qm] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                return r
            }, t.getClassesByMainType = function (t) {
                t = Fn(t);
                var e = [], n = i[t.main];
                return n && n[qm] ? d(n, function (t, n) {
                    n !== qm && e.push(t)
                }) : e.push(n), e
            }, t.hasClass = function (t) {
                return t = Fn(t), !!i[t.main]
            }, t.getAllClassMainTypes = function () {
                var t = [];
                return d(i, function (e, n) {
                    t.push(n)
                }), t
            }, t.hasSubTypes = function (t) {
                t = Fn(t);
                var e = i[t.main];
                return e && e[qm]
            }, t.parseClassType = Fn, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function (e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type)
            })
        }
        return t
    }

    function Xn(t) {
        return t > -rv && t < rv
    }

    function Yn(t) {
        return t > rv || t < -rv
    }

    function jn(t, e, n, i, r) {
        var o = 1 - r;
        return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
    }

    function qn(t, e, n, i, r) {
        var o = 1 - r;
        return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
    }

    function $n(t, e, n, i, r, o) {
        var a = i + 3 * (e - n) - t, s = 3 * (n - 2 * e + t), l = 3 * (e - t), u = t - r, h = s * s - 3 * a * l,
            c = s * l - 9 * a * u, d = l * l - 3 * s * u, f = 0;
        if (Xn(h) && Xn(c)) Xn(s) ? o[0] = 0 : (M = -l / s) >= 0 && M <= 1 && (o[f++] = M); else {
            var p = c * c - 4 * h * d;
            if (Xn(p)) {
                var g = c / h, m = -g / 2;
                (M = -s / a + g) >= 0 && M <= 1 && (o[f++] = M), m >= 0 && m <= 1 && (o[f++] = m)
            } else if (p > 0) {
                var v = iv(p), y = h * s + 1.5 * a * (-c + v), x = h * s + 1.5 * a * (-c - v);
                (M = (-s - ((y = y < 0 ? -nv(-y, sv) : nv(y, sv)) + (x = x < 0 ? -nv(-x, sv) : nv(x, sv)))) / (3 * a)) >= 0 && M <= 1 && (o[f++] = M)
            } else {
                var _ = (2 * h * s - 3 * a * c) / (2 * iv(h * h * h)), w = Math.acos(_) / 3, b = iv(h), S = Math.cos(w),
                    M = (-s - 2 * b * S) / (3 * a), m = (-s + b * (S + av * Math.sin(w))) / (3 * a),
                    I = (-s + b * (S - av * Math.sin(w))) / (3 * a);
                M >= 0 && M <= 1 && (o[f++] = M), m >= 0 && m <= 1 && (o[f++] = m), I >= 0 && I <= 1 && (o[f++] = I)
            }
        }
        return f
    }

    function Kn(t, e, n, i, r) {
        var o = 6 * n - 12 * e + 6 * t, a = 9 * e + 3 * i - 3 * t - 9 * n, s = 3 * e - 3 * t, l = 0;
        if (Xn(a)) Yn(o) && (c = -s / o) >= 0 && c <= 1 && (r[l++] = c); else {
            var u = o * o - 4 * a * s;
            if (Xn(u)) r[0] = -o / (2 * a); else if (u > 0) {
                var h = iv(u), c = (-o + h) / (2 * a), d = (-o - h) / (2 * a);
                c >= 0 && c <= 1 && (r[l++] = c), d >= 0 && d <= 1 && (r[l++] = d)
            }
        }
        return l
    }

    function Qn(t, e, n, i, r, o) {
        var a = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, u = (s - a) * r + a, h = (l - s) * r + s,
            c = (h - u) * r + u;
        o[0] = t, o[1] = a, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = i
    }

    function Jn(t, e, n, i, r, o, a, s, l, u, h) {
        var c, d, f, p, g, m = .005, v = 1 / 0;
        lv[0] = l, lv[1] = u;
        for (var y = 0; y < 1; y += .05) uv[0] = jn(t, n, r, a, y), uv[1] = jn(e, i, o, s, y), (p = cg(lv, uv)) < v && (c = y, v = p);
        v = 1 / 0;
        for (var x = 0; x < 32 && !(m < ov); x++) d = c - m, f = c + m, uv[0] = jn(t, n, r, a, d), uv[1] = jn(e, i, o, s, d), p = cg(uv, lv), d >= 0 && p < v ? (c = d, v = p) : (hv[0] = jn(t, n, r, a, f), hv[1] = jn(e, i, o, s, f), g = cg(hv, lv), f <= 1 && g < v ? (c = f, v = g) : m *= .5);
        return h && (h[0] = jn(t, n, r, a, c), h[1] = jn(e, i, o, s, c)), iv(v)
    }

    function ti(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function ei(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function ni(t, e, n, i, r) {
        var o = t - 2 * e + n, a = 2 * (e - t), s = t - i, l = 0;
        if (Xn(o)) Yn(a) && (c = -s / a) >= 0 && c <= 1 && (r[l++] = c); else {
            var u = a * a - 4 * o * s;
            if (Xn(u)) (c = -a / (2 * o)) >= 0 && c <= 1 && (r[l++] = c); else if (u > 0) {
                var h = iv(u), c = (-a + h) / (2 * o), d = (-a - h) / (2 * o);
                c >= 0 && c <= 1 && (r[l++] = c), d >= 0 && d <= 1 && (r[l++] = d)
            }
        }
        return l
    }

    function ii(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }

    function ri(t, e, n, i, r) {
        var o = (e - t) * i + t, a = (n - e) * i + e, s = (a - o) * i + o;
        r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = n
    }

    function oi(t, e, n, i, r, o, a, s, l) {
        var u, h = .005, c = 1 / 0;
        lv[0] = a, lv[1] = s;
        for (var d = 0; d < 1; d += .05) uv[0] = ti(t, n, r, d), uv[1] = ti(e, i, o, d), (m = cg(lv, uv)) < c && (u = d, c = m);
        c = 1 / 0;
        for (var f = 0; f < 32 && !(h < ov); f++) {
            var p = u - h, g = u + h;
            uv[0] = ti(t, n, r, p), uv[1] = ti(e, i, o, p);
            var m = cg(uv, lv);
            if (p >= 0 && m < c) u = p, c = m; else {
                hv[0] = ti(t, n, r, g), hv[1] = ti(e, i, o, g);
                var v = cg(hv, lv);
                g <= 1 && v < c ? (u = g, c = v) : h *= .5
            }
        }
        return l && (l[0] = ti(t, n, r, u), l[1] = ti(e, i, o, u)), iv(c)
    }

    function ai(t, e, n) {
        if (0 !== t.length) {
            var i, r = t[0], o = r[0], a = r[0], s = r[1], l = r[1];
            for (i = 1; i < t.length; i++) r = t[i], o = cv(o, r[0]), a = dv(a, r[0]), s = cv(s, r[1]), l = dv(l, r[1]);
            e[0] = o, e[1] = s, n[0] = a, n[1] = l
        }
    }

    function si(t, e, n, i, r, o) {
        r[0] = cv(t, n), r[1] = cv(e, i), o[0] = dv(t, n), o[1] = dv(e, i)
    }

    function li(t, e, n, i, r, o, a, s, l, u) {
        var h, c = Kn, d = jn, f = c(t, n, r, a, xv);
        for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; h < f; h++) {
            var p = d(t, n, r, a, xv[h]);
            l[0] = cv(p, l[0]), u[0] = dv(p, u[0])
        }
        for (f = c(e, i, o, s, _v), h = 0; h < f; h++) {
            var g = d(e, i, o, s, _v[h]);
            l[1] = cv(g, l[1]), u[1] = dv(g, u[1])
        }
        l[0] = cv(t, l[0]), u[0] = dv(t, u[0]), l[0] = cv(a, l[0]), u[0] = dv(a, u[0]), l[1] = cv(e, l[1]), u[1] = dv(e, u[1]), l[1] = cv(s, l[1]), u[1] = dv(s, u[1])
    }

    function ui(t, e, n, i, r, o, a, s) {
        var l = ii, u = ti, h = dv(cv(l(t, n, r), 1), 0), c = dv(cv(l(e, i, o), 1), 0), d = u(t, n, r, h),
            f = u(e, i, o, c);
        a[0] = cv(t, r, d), a[1] = cv(e, o, f), s[0] = dv(t, r, d), s[1] = dv(e, o, f)
    }

    function hi(t, e, n, i, r, o, a, s, l) {
        var u = K, h = Q, c = Math.abs(r - o);
        if (c % gv < 1e-4 && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
        if (mv[0] = pv(r) * n + t, mv[1] = fv(r) * i + e, vv[0] = pv(o) * n + t, vv[1] = fv(o) * i + e, u(s, mv, vv), h(l, mv, vv), (r %= gv) < 0 && (r += gv), (o %= gv) < 0 && (o += gv), r > o && !a ? o += gv : r < o && a && (r += gv), a) {
            var d = o;
            o = r, r = d
        }
        for (var f = 0; f < o; f += Math.PI / 2) f > r && (yv[0] = pv(f) * n + t, yv[1] = fv(f) * i + e, u(s, yv, s), h(l, yv, l))
    }

    function ci(t, e, n, i, r, o, a) {
        if (0 === r) return !1;
        var s = r, l = 0, u = t;
        if (a > e + s && a > i + s || a < e - s && a < i - s || o > t + s && o > n + s || o < t - s && o < n - s) return !1;
        if (t === n) return Math.abs(o - t) <= s / 2;
        var h = (l = (e - i) / (t - n)) * o - a + (u = (t * i - n * e) / (t - n));
        return h * h / (l * l + 1) <= s / 2 * s / 2
    }

    function di(t, e, n, i, r, o, a, s, l, u, h) {
        if (0 === l) return !1;
        var c = l;
        return !(h > e + c && h > i + c && h > o + c && h > s + c || h < e - c && h < i - c && h < o - c && h < s - c || u > t + c && u > n + c && u > r + c && u > a + c || u < t - c && u < n - c && u < r - c && u < a - c) && Jn(t, e, n, i, r, o, a, s, u, h, null) <= c / 2
    }

    function fi(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var u = a;
        return !(l > e + u && l > i + u && l > o + u || l < e - u && l < i - u && l < o - u || s > t + u && s > n + u && s > r + u || s < t - u && s < n - u && s < r - u) && oi(t, e, n, i, r, o, s, l, null) <= u / 2
    }

    function pi(t) {
        return (t %= zv) < 0 && (t += zv), t
    }

    function gi(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var u = a;
        s -= t, l -= e;
        var h = Math.sqrt(s * s + l * l);
        if (h - u > n || h + u < n) return !1;
        if (Math.abs(i - r) % Ev < 1e-4) return !0;
        if (o) {
            var c = i;
            i = pi(r), r = pi(c)
        } else i = pi(i), r = pi(r);
        i > r && (r += Ev);
        var d = Math.atan2(l, s);
        return d < 0 && (d += Ev), d >= i && d <= r || d + Ev >= i && d + Ev <= r
    }

    function mi(t, e, n, i, r, o) {
        if (o > e && o > i || o < e && o < i) return 0;
        if (i === e) return 0;
        var a = i < e ? 1 : -1, s = (o - e) / (i - e);
        1 !== s && 0 !== s || (a = i < e ? .5 : -.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? a : 0
    }

    function vi(t, e) {
        return Math.abs(t - e) < Bv
    }

    function yi() {
        var t = Vv[0];
        Vv[0] = Vv[1], Vv[1] = t
    }

    function xi(t, e, n, i, r, o, a, s, l, u) {
        if (u > e && u > i && u > o && u > s || u < e && u < i && u < o && u < s) return 0;
        var h = $n(e, i, o, s, u, Fv);
        if (0 === h) return 0;
        for (var c, d, f = 0, p = -1, g = 0; g < h; g++) {
            var m = Fv[g], v = 0 === m || 1 === m ? .5 : 1;
            jn(t, n, r, a, m) < l || (p < 0 && (p = Kn(e, i, o, s, Vv), Vv[1] < Vv[0] && p > 1 && yi(), c = jn(e, i, o, s, Vv[0]), p > 1 && (d = jn(e, i, o, s, Vv[1]))), 2 == p ? m < Vv[0] ? f += c < e ? v : -v : m < Vv[1] ? f += d < c ? v : -v : f += s < d ? v : -v : m < Vv[0] ? f += c < e ? v : -v : f += s < c ? v : -v)
        }
        return f
    }

    function _i(t, e, n, i, r, o, a, s) {
        if (s > e && s > i && s > o || s < e && s < i && s < o) return 0;
        var l = ni(e, i, o, s, Fv);
        if (0 === l) return 0;
        var u = ii(e, i, o);
        if (u >= 0 && u <= 1) {
            for (var h = 0, c = ti(e, i, o, u), d = 0; d < l; d++) {
                f = 0 === Fv[d] || 1 === Fv[d] ? .5 : 1;
                (p = ti(t, n, r, Fv[d])) < a || (Fv[d] < u ? h += c < e ? f : -f : h += o < c ? f : -f)
            }
            return h
        }
        var f = 0 === Fv[0] || 1 === Fv[0] ? .5 : 1, p = ti(t, n, r, Fv[0]);
        return p < a ? 0 : o < e ? f : -f
    }

    function wi(t, e, n, i, r, o, a, s) {
        if ((s -= e) > n || s < -n) return 0;
        u = Math.sqrt(n * n - s * s);
        Fv[0] = -u, Fv[1] = u;
        var l = Math.abs(i - r);
        if (l < 1e-4) return 0;
        if (l % Rv < 1e-4) {
            i = 0, r = Rv;
            p = o ? 1 : -1;
            return a >= Fv[0] + t && a <= Fv[1] + t ? p : 0
        }
        if (o) {
            var u = i;
            i = pi(r), r = pi(u)
        } else i = pi(i), r = pi(r);
        i > r && (r += Rv);
        for (var h = 0, c = 0; c < 2; c++) {
            var d = Fv[c];
            if (d + t > a) {
                var f = Math.atan2(s, d), p = o ? 1 : -1;
                f < 0 && (f = Rv + f), (f >= i && f <= r || f + Rv >= i && f + Rv <= r) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (p = -p), h += p)
            }
        }
        return h
    }

    function bi(t, e, n, i, r) {
        for (var o = 0, a = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
            var c = t[h++];
            switch (c === Nv.M && h > 1 && (n || (o += mi(a, s, l, u, i, r))), 1 == h && (l = a = t[h], u = s = t[h + 1]), c) {
                case Nv.M:
                    a = l = t[h++], s = u = t[h++];
                    break;
                case Nv.L:
                    if (n) {
                        if (ci(a, s, t[h], t[h + 1], e, i, r)) return !0
                    } else o += mi(a, s, t[h], t[h + 1], i, r) || 0;
                    a = t[h++], s = t[h++];
                    break;
                case Nv.C:
                    if (n) {
                        if (di(a, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
                    } else o += xi(a, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
                    a = t[h++], s = t[h++];
                    break;
                case Nv.Q:
                    if (n) {
                        if (fi(a, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
                    } else o += _i(a, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
                    a = t[h++], s = t[h++];
                    break;
                case Nv.A:
                    var d = t[h++], f = t[h++], p = t[h++], g = t[h++], m = t[h++], v = t[h++],
                        y = (t[h++], 1 - t[h++]), x = Math.cos(m) * p + d, _ = Math.sin(m) * g + f;
                    h > 1 ? o += mi(a, s, x, _, i, r) : (l = x, u = _);
                    var w = (i - d) * g / p + d;
                    if (n) {
                        if (gi(d, f, g, m, m + v, y, e, w, r)) return !0
                    } else o += wi(d, f, g, m, m + v, y, w, r);
                    a = Math.cos(m + v) * p + d, s = Math.sin(m + v) * g + f;
                    break;
                case Nv.R:
                    l = a = t[h++], u = s = t[h++];
                    var x = l + t[h++], _ = u + t[h++];
                    if (n) {
                        if (ci(l, u, x, u, e, i, r) || ci(x, u, x, _, e, i, r) || ci(x, _, l, _, e, i, r) || ci(l, _, l, u, e, i, r)) return !0
                    } else o += mi(x, u, x, _, i, r), o += mi(l, _, l, u, i, r);
                    break;
                case Nv.Z:
                    if (n) {
                        if (ci(a, s, l, u, e, i, r)) return !0
                    } else o += mi(a, s, l, u, i, r);
                    a = l, s = u
            }
        }
        return n || vi(s, u) || (o += mi(a, s, l, u, i, r) || 0), 0 !== o
    }

    function Si(t, e, n) {
        return bi(t, 0, !1, e, n)
    }

    function Mi(t, e, n, i) {
        return bi(t, e, !0, n, i)
    }

    function Ii(t) {
        on.call(this, t), this.path = null
    }

    function Ti(t, e, n, i, r, o, a, s, l, u, h) {
        var c = l * (Qv / 180), d = Kv(c) * (t - n) / 2 + $v(c) * (e - i) / 2,
            f = -1 * $v(c) * (t - n) / 2 + Kv(c) * (e - i) / 2, p = d * d / (a * a) + f * f / (s * s);
        p > 1 && (a *= qv(p), s *= qv(p));
        var g = (r === o ? -1 : 1) * qv((a * a * (s * s) - a * a * (f * f) - s * s * (d * d)) / (a * a * (f * f) + s * s * (d * d))) || 0,
            m = g * a * f / s, v = g * -s * d / a, y = (t + n) / 2 + Kv(c) * m - $v(c) * v,
            x = (e + i) / 2 + $v(c) * m + Kv(c) * v, _ = ey([1, 0], [(d - m) / a, (f - v) / s]),
            w = [(d - m) / a, (f - v) / s], b = [(-1 * d - m) / a, (-1 * f - v) / s], S = ey(w, b);
        ty(w, b) <= -1 && (S = Qv), ty(w, b) >= 1 && (S = 0), 0 === o && S > 0 && (S -= 2 * Qv), 1 === o && S < 0 && (S += 2 * Qv), h.addData(u, y, x, a, s, _, S, c, o)
    }

    function Ci(t) {
        if (!t) return new Ov;
        for (var e, n = 0, i = 0, r = n, o = i, a = new Ov, s = Ov.CMD, l = t.match(ny), u = 0; u < l.length; u++) {
            for (var h, c = l[u], d = c.charAt(0), f = c.match(iy) || [], p = f.length, g = 0; g < p; g++) f[g] = parseFloat(f[g]);
            for (var m = 0; m < p;) {
                var v, y, x, _, w, b, S, M = n, I = i;
                switch (d) {
                    case"l":
                        n += f[m++], i += f[m++], h = s.L, a.addData(h, n, i);
                        break;
                    case"L":
                        n = f[m++], i = f[m++], h = s.L, a.addData(h, n, i);
                        break;
                    case"m":
                        n += f[m++], i += f[m++], h = s.M, a.addData(h, n, i), r = n, o = i, d = "l";
                        break;
                    case"M":
                        n = f[m++], i = f[m++], h = s.M, a.addData(h, n, i), r = n, o = i, d = "L";
                        break;
                    case"h":
                        n += f[m++], h = s.L, a.addData(h, n, i);
                        break;
                    case"H":
                        n = f[m++], h = s.L, a.addData(h, n, i);
                        break;
                    case"v":
                        i += f[m++], h = s.L, a.addData(h, n, i);
                        break;
                    case"V":
                        i = f[m++], h = s.L, a.addData(h, n, i);
                        break;
                    case"C":
                        h = s.C, a.addData(h, f[m++], f[m++], f[m++], f[m++], f[m++], f[m++]), n = f[m - 2], i = f[m - 1];
                        break;
                    case"c":
                        h = s.C, a.addData(h, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i), n += f[m - 2], i += f[m - 1];
                        break;
                    case"S":
                        v = n, y = i;
                        var T = a.len(), C = a.data;
                        e === s.C && (v += n - C[T - 4], y += i - C[T - 3]), h = s.C, M = f[m++], I = f[m++], n = f[m++], i = f[m++], a.addData(h, v, y, M, I, n, i);
                        break;
                    case"s":
                        v = n, y = i;
                        var T = a.len(), C = a.data;
                        e === s.C && (v += n - C[T - 4], y += i - C[T - 3]), h = s.C, M = n + f[m++], I = i + f[m++], n += f[m++], i += f[m++], a.addData(h, v, y, M, I, n, i);
                        break;
                    case"Q":
                        M = f[m++], I = f[m++], n = f[m++], i = f[m++], h = s.Q, a.addData(h, M, I, n, i);
                        break;
                    case"q":
                        M = f[m++] + n, I = f[m++] + i, n += f[m++], i += f[m++], h = s.Q, a.addData(h, M, I, n, i);
                        break;
                    case"T":
                        v = n, y = i;
                        var T = a.len(), C = a.data;
                        e === s.Q && (v += n - C[T - 4], y += i - C[T - 3]), n = f[m++], i = f[m++], h = s.Q, a.addData(h, v, y, n, i);
                        break;
                    case"t":
                        v = n, y = i;
                        var T = a.len(), C = a.data;
                        e === s.Q && (v += n - C[T - 4], y += i - C[T - 3]), n += f[m++], i += f[m++], h = s.Q, a.addData(h, v, y, n, i);
                        break;
                    case"A":
                        x = f[m++], _ = f[m++], w = f[m++], b = f[m++], S = f[m++], Ti(M = n, I = i, n = f[m++], i = f[m++], b, S, x, _, w, h = s.A, a);
                        break;
                    case"a":
                        x = f[m++], _ = f[m++], w = f[m++], b = f[m++], S = f[m++], Ti(M = n, I = i, n += f[m++], i += f[m++], b, S, x, _, w, h = s.A, a)
                }
            }
            "z" !== d && "Z" !== d || (h = s.Z, a.addData(h), n = r, i = o), e = h
        }
        return a.toStatic(), a
    }

    function Ai(t, e) {
        var n = Ci(t);
        return e = e || {}, e.buildPath = function (t) {
            if (t.setData) t.setData(n.data), (e = t.getContext()) && t.rebuildPath(e); else {
                var e = t;
                n.rebuildPath(e)
            }
        }, e.applyTransform = function (t) {
            jv(n, t), this.dirty(!0)
        }, e
    }

    function Di(t, e) {
        return new Ii(Ai(t, e))
    }

    function ki(t, e) {
        return Ii.extend(Ai(t, e))
    }

    function Pi(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Li(t, e, n) {
        var i = e.points, r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var o = cy(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var a = i.length, s = 0; s < (n ? a : a - 1); s++) {
                    var l = o[2 * s], u = o[2 * s + 1], h = i[(s + 1) % a];
                    t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
                }
            } else {
                "spline" === r && (i = hy(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var s = 1, c = i.length; s < c; s++) t.lineTo(i[s][0], i[s][1])
            }
            n && t.closePath()
        }
    }

    function Oi(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [(n ? qn : jn)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? qn : jn)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? ei : ti)(t.x1, t.cpx1, t.x2, e), (n ? ei : ti)(t.y1, t.cpy1, t.y2, e)]
    }

    function zi(t) {
        on.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
    }

    function Ei(t) {
        return Ii.extend(t)
    }

    function Ni(t, e, n, i) {
        var r = Di(t, e);
        return n && ("center" === i && (n = Bi(n, r.getBoundingRect())), Fi(r, n)), r
    }

    function Ri(t, e, n) {
        var i = new an({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === n) {
                    var r = {width: t.width, height: t.height};
                    i.setStyle(Bi(e, r))
                }
            }
        });
        return i
    }

    function Bi(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        return n = r <= t.width ? t.height : (r = t.width) / i, {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - n / 2,
            width: r,
            height: n
        }
    }

    function Fi(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect().calculateTransform(e);
            t.applyTransform(n)
        }
    }

    function Vi(t) {
        var e = t.shape, n = t.style.lineWidth;
        return My(2 * e.x1) === My(2 * e.x2) && (e.x1 = e.x2 = Hi(e.x1, n, !0)), My(2 * e.y1) === My(2 * e.y2) && (e.y1 = e.y2 = Hi(e.y1, n, !0)), t
    }

    function Wi(t) {
        var e = t.shape, n = t.style.lineWidth, i = e.x, r = e.y, o = e.width, a = e.height;
        return e.x = Hi(e.x, n, !0), e.y = Hi(e.y, n, !0), e.width = Math.max(Hi(i + o, n, !1) - e.x, 0 === o ? 0 : 1), e.height = Math.max(Hi(r + a, n, !1) - e.y, 0 === a ? 0 : 1), t
    }

    function Hi(t, e, n) {
        var i = My(2 * t);
        return (i + My(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function Gi(t) {
        return null != t && "none" !== t
    }

    function Zi(t) {
        if ("string" != typeof t) return t;
        var e = Ay.get(t);
        return e || (e = Nt(t, -.1), Dy < 1e4 && (Ay.set(t, e), Dy++)), e
    }

    function Ui(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (e) {
                var n = t.__normalStl = {}, i = t.style;
                for (var r in e) null != e[r] && (n[r] = i[r]);
                n.fill = i.fill, n.stroke = i.stroke
            } else t.__normalStl = null
        }
    }

    function Xi(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var n = t.useHoverLayer;
            t.__highlighted = n ? "layer" : "plain";
            var i = t.__zr;
            if (i || !n) {
                var r = t, o = t.style;
                n && (o = (r = i.addHover(t)).style), dr(o), n || Ui(r), o.extendFrom(e), Yi(o, e, "fill"), Yi(o, e, "stroke"), cr(o), n || (t.dirty(!1), t.z2 += 1)
            }
        }
    }

    function Yi(t, e, n) {
        !Gi(e[n]) && Gi(t[n]) && (t[n] = Zi(t[n]))
    }

    function ji(t) {
        t.__highlighted && (qi(t), t.__highlighted = !1)
    }

    function qi(t) {
        var e = t.__highlighted;
        if ("layer" === e) t.__zr && t.__zr.removeHover(t); else if (e) {
            var n = t.style, i = t.__normalStl;
            i && (dr(n), t.setStyle(i), cr(n), t.z2 -= 1)
        }
    }

    function $i(t, e) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && e(t)
        }) : e(t)
    }

    function Ki(t, e) {
        e = t.__hoverStl = !1 !== e && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (ji(t), Xi(t))
    }

    function Qi(t) {
        return t && t.__isEmphasisEntered
    }

    function Ji(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && $i(this, Xi)
    }

    function tr(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && $i(this, ji)
    }

    function er() {
        this.__isEmphasisEntered = !0, $i(this, Xi)
    }

    function nr() {
        this.__isEmphasisEntered = !1, $i(this, ji)
    }

    function ir(t, e, n) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && Ki(t, t.hoverStyle || e)
        }) : Ki(t, t.hoverStyle || e), rr(t, n)
    }

    function rr(t, e) {
        var n = !1 === e;
        if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
            var i = n ? "off" : "on";
            t[i]("mouseover", Ji)[i]("mouseout", tr), t[i]("emphasis", er)[i]("normal", nr), t.__hoverStyleTrigger = !n
        }
    }

    function or(t, e, n, i, r, o, a) {
        var s, l = (r = r || Cy).labelFetcher, u = r.labelDataIndex, h = r.labelDimIndex, c = n.getShallow("show"),
            d = i.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = x(r.defaultText) ? r.defaultText(u, r) : r.defaultText));
        var f = c ? s : null, p = d ? C(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
        null == f && null == p || (ar(t, n, o, r), ar(e, i, a, r, !0)), t.text = f, e.text = p
    }

    function ar(t, e, n, i, r) {
        return sr(t, e, i, r), n && o(t, n), t
    }

    function sr(t, e, n, i) {
        if ((n = n || Cy).isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var o = e.getShallow("rotate");
            null != o && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = C(e.getShallow("distance"), i ? null : 5)
        }
        var a, s = e.ecModel, l = s && s.option.textStyle, u = lr(e);
        if (u) {
            a = {};
            for (var h in u) if (u.hasOwnProperty(h)) {
                var c = e.getModel(["rich", h]);
                ur(a[h] = {}, c, l, n, i)
            }
        }
        return t.rich = a, ur(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
    }

    function lr(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || Cy).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function ur(t, e, n, i, r, o) {
        n = !r && n || Cy, t.textFill = hr(e.getShallow("color"), i) || n.color, t.textStroke = hr(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = C(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (o && (t.insideRollbackOpt = i, cr(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), o && i.disableBox || (t.textBackgroundColor = hr(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = hr(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }

    function hr(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function cr(t) {
        var e = t.insideRollbackOpt;
        if (e && null == t.textFill) {
            var n, i = e.useInsideStyle, r = t.insideRawTextPosition, o = e.autoColor;
            !1 !== i && (!0 === i || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
                textFill: null,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = o, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != o && (n = {textFill: null}, t.textFill = o), n && (t.insideRollback = n)
        }
    }

    function dr(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
    }

    function fr(t, e) {
        var n = e || e.getModel("textStyle");
        return L([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function pr(t, e, n, i, r, o) {
        if ("function" == typeof r && (o = r, r = null), i && i.isAnimationEnabled()) {
            var a = t ? "Update" : "", s = i.getShallow("animationDuration" + a),
                l = i.getShallow("animationEasing" + a), u = i.getShallow("animationDelay" + a);
            "function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, u || 0, l, o, !!o) : (e.stopAnimation(), e.attr(n), o && o())
        } else e.stopAnimation(), e.attr(n), o && o()
    }

    function gr(t, e, n, i, r) {
        pr(!0, t, e, n, i, r)
    }

    function mr(t, e, n, i, r) {
        pr(!1, t, e, n, i, r)
    }

    function vr(t, e) {
        for (var n = pt([]); t && t !== e;) mt(n, t.getLocalTransform(), n), t = t.parent;
        return n
    }

    function yr(t, e, n) {
        return e && !c(e) && (e = Ig.getLocalTransform(e)), n && (e = _t([], e)), $([], t, e)
    }

    function xr(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return o = yr(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
    }

    function _r(t, e, n, i) {
        function r(t) {
            var e = {position: V(t.position), rotation: t.rotation};
            return t.shape && (e.shape = o({}, t.shape)), e
        }

        if (t && e) {
            var a = function (t) {
                var e = {};
                return t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), gr(t, i, n, t.dataIndex)
                    }
                }
            })
        }
    }

    function wr(t, e) {
        return f(t, function (t) {
            var n = t[0];
            n = Iy(n, e.x), n = Ty(n, e.x + e.width);
            var i = t[1];
            return i = Iy(i, e.y), i = Ty(i, e.y + e.height), [n, i]
        })
    }

    function br(t, e, n) {
        var i = (e = o({rectHover: !0}, e)).style = {strokeNoScale: !0};
        if (n = n || {
                x: -1,
                y: -1,
                width: 2,
                height: 2
            }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), a(i, n), new an(e)) : Ni(t.replace("path://", ""), e, n, "center")
    }

    function Sr(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t
    }

    function Mr(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++) ;
        return null == t && n && (t = n.get(e)), t
    }

    function Ir(t, e) {
        var n = Ny(t).getParent;
        return n ? n.call(t, e) : t.parentModel
    }

    function Tr(t) {
        return [t || "", Ry++, Math.random().toFixed(5)].join("_")
    }

    function Cr(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function Ar(t, e, n, i) {
        var r = e[1] - e[0], o = n[1] - n[0];
        if (0 === r) return 0 === o ? n[0] : (n[0] + n[1]) / 2;
        if (i) if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1]
        } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1]
        } else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1]
        }
        return (t - e[0]) / r * o + n[0]
    }

    function Dr(t, e) {
        switch (t) {
            case"center":
            case"middle":
                t = "50%";
                break;
            case"left":
            case"top":
                t = "0%";
                break;
            case"right":
            case"bottom":
                t = "100%"
        }
        return "string" == typeof t ? Cr(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
    }

    function kr(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
    }

    function Pr(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function Lr(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
        return n
    }

    function Or(t) {
        var e = t.toString(), n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return i < 0 ? -i : 0
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r
    }

    function zr(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i),
            o = Math.round(n(Math.abs(e[1] - e[0])) / i), a = Math.min(Math.max(-r + o, 0), 20);
        return isFinite(a) ? a : 20
    }

    function Er(t, e, n) {
        if (!t[e]) return 0;
        var i = p(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), o = f(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), a = 100 * r, s = f(o, function (t) {
            return Math.floor(t)
        }), l = p(s, function (t, e) {
            return t + e
        }, 0), u = f(o, function (t, e) {
            return t - s[e]
        }); l < a;) {
            for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, g = u.length; d < g; ++d) u[d] > h && (h = u[d], c = d);
            ++s[c], u[c] = 0, ++l
        }
        return s[e] / r
    }

    function Nr(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function Rr(t) {
        return t > -By && t < By
    }

    function Br(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = Fy.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return null == t ? new Date(NaN) : new Date(Math.round(t))
    }

    function Fr(t) {
        return Math.pow(10, Vr(t))
    }

    function Vr(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }

    function Wr(t, e) {
        var n, i = Vr(t), r = Math.pow(10, i), o = t / r;
        return n = e ? o < 1.5 ? 1 : o < 2.5 ? 2 : o < 4 ? 3 : o < 7 ? 5 : 10 : o < 1 ? 1 : o < 2 ? 2 : o < 3 ? 3 : o < 5 ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
    }

    function Hr(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
    }

    function Gr(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function Zr(t) {
        return null == t ? "" : (t + "").replace(Hy, function (t, e) {
            return Gy[e]
        })
    }

    function Ur(t, e, n) {
        y(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
            var a = Zy[o];
            t = t.replace(Uy(a), Uy(a, 0))
        }
        for (var s = 0; s < i; s++) for (var l = 0; l < r.length; l++) {
            var u = e[s][r[l]];
            t = t.replace(Uy(Zy[l], s), n ? Zr(u) : u)
        }
        return t
    }

    function Xr(t, e) {
        var n = (t = _(t) ? {color: t, extraCssText: e} : t || {}).color, i = t.type, e = t.extraCssText,
            r = t.renderMode || "html", o = t.markerId || "X";
        return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Zr(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Zr(n) + ";" + (e || "") + '"></span>' : {
            renderMode: r,
            content: "{marker" + o + "|}  ",
            style: {color: n}
        } : ""
    }

    function Yr(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function jr(t, e, n) {
        "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
        var i = Br(e), r = n ? "UTC" : "", o = i["get" + r + "FullYear"](), a = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), u = i["get" + r + "Minutes"](),
            h = i["get" + r + "Seconds"](), c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", Yr(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", o % 100).replace("dd", Yr(s, 2)).replace("d", s).replace("hh", Yr(l, 2)).replace("h", l).replace("mm", Yr(u, 2)).replace("m", u).replace("ss", Yr(h, 2)).replace("s", h).replace("SSS", Yr(c, 3))
    }

    function qr(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function $r(t, e, n, i, r) {
        var o = 0, a = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, u) {
            var h, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(u + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var m = f.width + (g ? -g.x + f.x : 0);
                (h = o + m) > i || l.newline ? (o = 0, h = m, a += s + n, s = f.height) : s = Math.max(s, f.height)
            } else {
                var v = f.height + (g ? -g.y + f.y : 0);
                (c = a + v) > r || l.newline ? (o += s + n, a = 0, c = v, s = f.width) : s = Math.max(s, f.width)
            }
            l.newline || (d[0] = o, d[1] = a, "horizontal" === t ? o = h + n : a = c + n)
        })
    }

    function Kr(t, e, n) {
        n = Wy(n || 0);
        var i = e.width, r = e.height, o = Dr(t.left, i), a = Dr(t.top, r), s = Dr(t.right, i), l = Dr(t.bottom, r),
            u = Dr(t.width, i), h = Dr(t.height, r), c = n[2] + n[0], d = n[1] + n[3], f = t.aspect;
        switch (isNaN(u) && (u = i - s - d - o), isNaN(h) && (h = r - l - c - a), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(o) && (o = i - s - u - d), isNaN(a) && (a = r - l - h - c), t.left || t.right) {
            case"center":
                o = i / 2 - u / 2 - n[3];
                break;
            case"right":
                o = i - u - d
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                a = r / 2 - h / 2 - n[0];
                break;
            case"bottom":
                a = r - h - c
        }
        o = o || 0, a = a || 0, isNaN(u) && (u = i - d - o - (s || 0)), isNaN(h) && (h = r - c - a - (l || 0));
        var p = new re(o + n[3], a + n[0], u, h);
        return p.margin = n, p
    }

    function Qr(t, e, n, i, r) {
        var o = !r || !r.hv || r.hv[0], s = !r || !r.hv || r.hv[1], l = r && r.boundingMode || "all";
        if (o || s) {
            var u;
            if ("raw" === l) u = "group" === t.type ? new re(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (u = t.getBoundingRect(), t.needLocalTransform()) {
                var h = t.getLocalTransform();
                (u = u.clone()).applyTransform(h)
            }
            e = Kr(a({width: u.width, height: u.height}, e), n, i);
            var c = t.position, d = o ? e.x - u.x : 0, f = s ? e.y - u.y : 0;
            t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f])
        }
    }

    function Jr(t, e, n) {
        function i(n, i) {
            var a = {}, l = 0, u = {}, h = 0;
            if (qy(n, function (e) {
                    u[e] = t[e]
                }), qy(n, function (t) {
                    r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++
                }), s[i]) return o(e, n[1]) ? u[n[2]] = null : o(e, n[2]) && (u[n[1]] = null), u;
            if (2 !== h && l) {
                if (l >= 2) return a;
                for (var c = 0; c < n.length; c++) {
                    var d = n[c];
                    if (!r(a, d) && r(t, d)) {
                        a[d] = t[d];
                        break
                    }
                }
                return a
            }
            return u
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function o(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function a(t, e, n) {
            qy(t, function (t) {
                e[t] = n[t]
            })
        }

        !w(n) && (n = {});
        var s = n.ignoreSize;
        !y(s) && (s = [s, s]);
        var l = i(Ky[0], 0), u = i(Ky[1], 1);
        a(Ky[0], t, l), a(Ky[1], t, u)
    }

    function to(t) {
        return eo({}, t)
    }

    function eo(t, e) {
        return e && t && qy($y, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    function no(t, e) {
        for (var n = t.length, i = 0; i < n; i++) if (t[i].length > e) return t[i];
        return t[n - 1]
    }

    function io(t) {
        var e = t.get("coordinateSystem"), n = {coordSysName: e, coordSysDims: [], axisMap: N(), categoryAxisMap: N()},
            i = ax[e];
        if (i) return i(t, n, n.axisMap, n.categoryAxisMap), n
    }

    function ro(t) {
        return "category" === t.get("type")
    }

    function oo(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === hx ? {} : []), this.sourceFormat = t.sourceFormat || cx, this.seriesLayoutBy = t.seriesLayoutBy || fx, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && N(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
    }

    function ao(t) {
        var e = t.option.source, n = cx;
        if (S(e)) n = dx; else if (y(e)) {
            0 === e.length && (n = lx);
            for (var i = 0, r = e.length; i < r; i++) {
                var o = e[i];
                if (null != o) {
                    if (y(o)) {
                        n = lx;
                        break
                    }
                    if (w(o)) {
                        n = ux;
                        break
                    }
                }
            }
        } else if (w(e)) {
            for (var a in e) if (e.hasOwnProperty(a) && c(e[a])) {
                n = hx;
                break
            }
        } else if (null != e) throw new Error("Invalid data");
        gx(t).sourceFormat = n
    }

    function so(t) {
        return gx(t).source
    }

    function lo(t) {
        gx(t).datasetMap = N()
    }

    function uo(t) {
        var e = t.option, n = e.data, i = S(n) ? dx : sx, r = !1, o = e.seriesLayoutBy, a = e.sourceHeader,
            s = e.dimensions, l = mo(t);
        if (l) {
            var u = l.option;
            n = u.source, i = gx(l).sourceFormat, r = !0, o = o || u.seriesLayoutBy, null == a && (a = u.sourceHeader), s = s || u.dimensions
        }
        var h = ho(n, i, o, a, s), c = e.encode;
        !c && l && (c = go(t, l, n, i, o, h)), gx(t).source = new oo({
            data: n,
            fromDataset: r,
            seriesLayoutBy: o,
            sourceFormat: i,
            dimensionsDefine: h.dimensionsDefine,
            startIndex: h.startIndex,
            dimensionsDetectCount: h.dimensionsDetectCount,
            encodeDefine: c
        })
    }

    function ho(t, e, n, i, r) {
        if (!t) return {dimensionsDefine: co(r)};
        var o, a, s;
        if (e === lx) "auto" === i || null == i ? fo(function (t) {
            null != t && "-" !== t && (_(t) ? null == a && (a = 1) : a = 0)
        }, n, t, 10) : a = i ? 1 : 0, r || 1 !== a || (r = [], fo(function (t, e) {
            r[e] = null != t ? t : ""
        }, n, t)), o = r ? r.length : n === px ? t.length : t[0] ? t[0].length : null; else if (e === ux) r || (r = po(t), s = !0); else if (e === hx) r || (r = [], s = !0, d(t, function (t, e) {
            r.push(e)
        })); else if (e === sx) {
            var l = Tn(t[0]);
            o = y(l) && l.length || 1
        }
        var u;
        return s && d(r, function (t, e) {
            "name" === (w(t) ? t.name : t) && (u = e)
        }), {startIndex: a, dimensionsDefine: co(r), dimensionsDetectCount: o, potentialNameDimIndex: u}
    }

    function co(t) {
        if (t) {
            var e = N();
            return f(t, function (t, n) {
                if (null == (t = o({}, w(t) ? t : {name: t})).name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var i = e.get(t.name);
                return i ? t.name += "-" + i.count++ : e.set(t.name, {count: 1}), t
            })
        }
    }

    function fo(t, e, n, i) {
        if (null == i && (i = 1 / 0), e === px) for (o = 0; o < n.length && o < i; o++) t(n[o] ? n[o][0] : null, o); else for (var r = n[0] || [], o = 0; o < r.length && o < i; o++) t(r[o], o)
    }

    function po(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]);) ;
        if (e) {
            var i = [];
            return d(e, function (t, e) {
                i.push(e)
            }), i
        }
    }

    function go(t, e, n, i, r, o) {
        var a = io(t), s = {}, l = [], u = [], h = t.subType, c = N(["pie", "map", "funnel"]),
            f = N(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (a && null != f.get(h)) {
            var p = t.ecModel, g = gx(p).datasetMap, m = e.uid + "_" + r,
                v = g.get(m) || g.set(m, {categoryWayDim: 1, valueWayDim: 0});
            d(a.coordSysDims, function (t) {
                if (null == a.firstCategoryDimIndex) {
                    e = v.valueWayDim++;
                    s[t] = e, u.push(e)
                } else if (a.categoryAxisMap.get(t)) s[t] = 0, l.push(0); else {
                    var e = v.categoryWayDim++;
                    s[t] = e, u.push(e)
                }
            })
        } else if (null != c.get(h)) {
            for (var y, x = 0; x < 5 && null == y; x++) yo(n, i, r, o.dimensionsDefine, o.startIndex, x) || (y = x);
            if (null != y) {
                s.value = y;
                var _ = o.potentialNameDimIndex || Math.max(y - 1, 0);
                u.push(_), l.push(_)
            }
        }
        return l.length && (s.itemName = l), u.length && (s.seriesName = u), s
    }

    function mo(t) {
        var e = t.option;
        if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }

    function vo(t, e) {
        return yo(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function yo(t, e, n, i, r, o) {
        function a(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!_(t) || "-" === t) || void 0)
        }

        var s;
        if (S(t)) return !1;
        var l;
        if (i && (l = w(l = i[o]) ? l.name : l), e === lx) if (n === px) {
            for (var u = t[o], h = 0; h < (u || []).length && h < 5; h++) if (null != (s = a(u[r + h]))) return s
        } else for (h = 0; h < t.length && h < 5; h++) {
            var c = t[r + h];
            if (c && null != (s = a(c[o]))) return s
        } else if (e === ux) {
            if (!l) return;
            for (h = 0; h < t.length && h < 5; h++) if ((d = t[h]) && null != (s = a(d[l]))) return s
        } else if (e === hx) {
            if (!l) return;
            if (!(u = t[l]) || S(u)) return !1;
            for (h = 0; h < u.length && h < 5; h++) if (null != (s = a(u[h]))) return s
        } else if (e === sx) for (h = 0; h < t.length && h < 5; h++) {
            var d = t[h], f = Tn(d);
            if (!y(f)) return !1;
            if (null != (s = a(f[o]))) return s
        }
        return !1
    }

    function xo(t, e) {
        if (e) {
            var n = e.seiresIndex, i = e.seriesId, r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }

    function _o(t, e) {
        var r = t.color && !t.colorLayer;
        d(e, function (e, o) {
            "colorLayer" === o && r || ex.hasClass(o) || ("object" == typeof e ? t[o] = t[o] ? i(t[o], e, !1) : n(e) : null == t[o] && (t[o] = e))
        })
    }

    function wo(t) {
        t = t, this.option = {}, this.option[mx] = 1, this._componentsMap = N({series: []}), this._seriesIndices, this._seriesIndicesMap, _o(t, this._theme.option), i(t, ix, !1), this.mergeOption(t)
    }

    function bo(t, e) {
        y(e) || (e = e ? [e] : []);
        var n = {};
        return d(e, function (e) {
            n[e] = (t.get(e) || []).slice()
        }), n
    }

    function So(t, e, n) {
        return e.type ? e.type : n ? n.subType : ex.determineSubType(t, e)
    }

    function Mo(t, e) {
        t._seriesIndicesMap = N(t._seriesIndices = f(e, function (t) {
            return t.componentIndex
        }) || [])
    }

    function Io(t, e) {
        return e.hasOwnProperty("subType") ? g(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    function To(t) {
        d(yx, function (e) {
            this[e] = m(t[e], t)
        }, this)
    }

    function Co() {
        this._coordinateSystems = []
    }

    function Ao(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function Do(t, e, n) {
        var i, r, o = [], a = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, o = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            _x(l, function (t) {
                t && t.option && (t.query ? a.push(t) : i || (i = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), _x([r].concat(o).concat(f(a, function (t) {
            return t.option
        })), function (t) {
            _x(e, function (e) {
                e(t, n)
            })
        }), {baseOption: r, timelineOptions: o, mediaDefault: i, mediaList: a}
    }

    function ko(t, e, n) {
        var i = {width: e, height: n, aspectratio: e / n}, r = !0;
        return d(t, function (t, e) {
            var n = e.match(Ix);
            if (n && n[1] && n[2]) {
                var o = n[1], a = n[2].toLowerCase();
                Po(i[a], t, o) || (r = !1)
            }
        }), r
    }

    function Po(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? t <= e : t === e
    }

    function Lo(t, e) {
        return t.join(",") === e.join(",")
    }

    function Oo(t, e) {
        _x(e = e || {}, function (e, n) {
            if (null != e) {
                var i = t[n];
                if (ex.hasClass(n)) {
                    e = Mn(e);
                    var r = An(i = Mn(i), e);
                    t[n] = Sx(r, function (t) {
                        return t.option && t.exist ? Mx(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[n] = Mx(i, e, !0)
            }
        })
    }

    function zo(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, r = Ax.length; n < r; n++) {
            var o = Ax[n], a = e.normal, s = e.emphasis;
            a && a[o] && (t[o] = t[o] || {}, t[o].normal ? i(t[o].normal, a[o]) : t[o].normal = a[o], a[o] = null), s && s[o] && (t[o] = t[o] || {}, t[o].emphasis ? i(t[o].emphasis, s[o]) : t[o].emphasis = s[o], s[o] = null)
        }
    }

    function Eo(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal, r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, a(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
        }
    }

    function No(t) {
        Eo(t, "itemStyle"), Eo(t, "lineStyle"), Eo(t, "areaStyle"), Eo(t, "label"), Eo(t, "labelLine"), Eo(t, "upperLabel"), Eo(t, "edgeLabel")
    }

    function Ro(t, e) {
        var n = Cx(t) && t[e], i = Cx(n) && n.textStyle;
        if (i) for (var r = 0, o = Xm.length; r < o; r++) {
            var e = Xm[r];
            i.hasOwnProperty(e) && (n[e] = i[e])
        }
    }

    function Bo(t) {
        t && (No(t), Ro(t, "label"), t.emphasis && Ro(t.emphasis, "label"))
    }

    function Fo(t) {
        if (Cx(t)) {
            zo(t), No(t), Ro(t, "label"), Ro(t, "upperLabel"), Ro(t, "edgeLabel"), t.emphasis && (Ro(t.emphasis, "label"), Ro(t.emphasis, "upperLabel"), Ro(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (zo(e), Bo(e));
            var n = t.markLine;
            n && (zo(n), Bo(n));
            var i = t.markArea;
            i && Bo(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var o = t.links || t.edges;
                if (o && !S(o)) for (s = 0; s < o.length; s++) Bo(o[s]);
                d(t.categories, function (t) {
                    No(t)
                })
            }
            if (r && !S(r)) for (s = 0; s < r.length; s++) Bo(r[s]);
            if ((e = t.markPoint) && e.data) for (var a = e.data, s = 0; s < a.length; s++) Bo(a[s]);
            if ((n = t.markLine) && n.data) for (var l = n.data, s = 0; s < l.length; s++) y(l[s]) ? (Bo(l[s][0]), Bo(l[s][1])) : Bo(l[s]);
            "gauge" === t.type ? (Ro(t, "axisLabel"), Ro(t, "title"), Ro(t, "detail")) : "treemap" === t.type ? (Eo(t.breadcrumb, "itemStyle"), d(t.levels, function (t) {
                No(t)
            })) : "tree" === t.type && No(t.leaves)
        }
    }

    function Vo(t) {
        return y(t) ? t : t ? [t] : []
    }

    function Wo(t) {
        return (y(t) ? t[0] : t) || {}
    }

    function Ho(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++) ;
        return n
    }

    function Go(t, e, n, i) {
        e = e.split(",");
        for (var r, o = t, a = 0; a < e.length - 1; a++) null == o[r = e[a]] && (o[r] = {}), o = o[r];
        (i || null == o[e[a]]) && (o[e[a]] = n)
    }

    function Zo(t) {
        d(kx, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function Uo(t) {
        d(t, function (e, n) {
            var i = [], r = [NaN, NaN], o = [e.stackResultDimension, e.stackedOverDimension], a = e.data,
                s = e.isStackedByIndex, l = a.map(o, function (o, l, u) {
                    var h = a.get(e.stackedDimension, u);
                    if (isNaN(h)) return r;
                    var c, d;
                    s ? d = a.getRawIndex(u) : c = a.get(e.stackedByDimension, u);
                    for (var f = NaN, p = n - 1; p >= 0; p--) {
                        var g = t[p];
                        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                            var m = g.data.getByRawIndex(g.stackResultDimension, d);
                            if (h >= 0 && m > 0 || h <= 0 && m < 0) {
                                h += m, f = m;
                                break
                            }
                        }
                    }
                    return i[0] = h, i[1] = f, i
                });
            a.hostModel.setData(l), e.data = l
        })
    }

    function Xo(t, e) {
        oo.isInstance(t) || (t = oo.seriesDataToSource(t)), this._source = t;
        var n = this._data = t.data, i = t.sourceFormat;
        i === dx && (this._offset = 0, this._dimSize = e, this._data = n), o(this, zx[i === lx ? i + "_" + t.seriesLayoutBy : i])
    }

    function Yo() {
        return this._data.length
    }

    function jo(t) {
        return this._data[t]
    }

    function qo(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e])
    }

    function $o(t, e, n, i) {
        return null != n ? t[n] : t
    }

    function Ko(t, e, n, i) {
        return Qo(t[i], this._dimensionInfos[e])
    }

    function Qo(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Br(t)), null == t || "" === t ? NaN : +t
    }

    function Jo(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, o, a = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(n);
                return s && (r = s.name, o = s.index), Ex[a](i, e, o, r)
            }
        }
    }

    function ta(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === sx || i === ux) {
                var r = t.getRawDataItem(e);
                return i !== sx || w(r) || (r = null), r ? r[n] : void 0
            }
        }
    }

    function ea(t) {
        return new na(t)
    }

    function na(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
    }

    function ia(t, e, n, i, r, o) {
        Vx.reset(n, i, r, o), t._callingProgress = e, t._callingProgress({
            start: n,
            end: i,
            count: i - n,
            next: Vx.next
        }, t.context)
    }

    function ra(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var n, i;
        !e && t._reset && ((n = t._reset(t.context)) && n.progress && (i = n.forceFirstProgress, n = n.progress), y(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), i
    }

    function oa(t) {
        var e = t.name;
        kn(t) || (t.name = aa(t) || e)
    }

    function aa(t) {
        var e = t.getRawData(), n = [];
        return d(e.mapDimension("seriesName", !0), function (t) {
            var i = e.getDimensionInfo(t);
            i.displayName && n.push(i.displayName)
        }), n.join(" ")
    }

    function sa(t) {
        return t.model.getRawData().count()
    }

    function la(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), ua
    }

    function ua(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function ha(t, e) {
        d(t.CHANGABLE_METHODS, function (n) {
            t.wrapMethod(n, v(ca, e))
        })
    }

    function ca(t) {
        var e = da(t);
        e && e.setOutputEnd(this.count())
    }

    function da(t) {
        var e = (t.ecModel || {}).scheduler, n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }

    function fa() {
        this.group = new Jg, this.uid = Tr("viewChart"), this.renderTask = ea({
            plan: ma,
            reset: va
        }), this.renderTask.context = {view: this}
    }

    function pa(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) pa(t.childAt(n), e)
    }

    function ga(t, e, n) {
        var i = Ln(t, e);
        null != i ? d(Mn(i), function (e) {
            pa(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function (t) {
            pa(t, n)
        })
    }

    function ma(t) {
        return Yx(t.model)
    }

    function va(t) {
        var e = t.model, n = t.ecModel, i = t.api, r = t.payload, o = e.pipelineContext.progressiveRender, a = t.view,
            s = r && Xx(r).updateMethod, l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
        return "render" !== l && a[l](e, n, i, r), qx[l]
    }

    function ya(t, e, n) {
        function i() {
            h = (new Date).getTime(), c = null, t.apply(a, s || [])
        }

        var r, o, a, s, l, u = 0, h = 0, c = null;
        e = e || 0;
        var d = function () {
            r = (new Date).getTime(), a = this, s = arguments;
            var t = l || e, d = l || n;
            l = null, o = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : o >= 0 ? i() : c = setTimeout(i, -o), u = r
        };
        return d.clear = function () {
            c && (clearTimeout(c), c = null)
        }, d.debounceNextCall = function (t) {
            l = t
        }, d
    }

    function xa(t, e, n, i) {
        var r = t[e];
        if (r) {
            var o = r[$x] || r, a = r[Qx];
            if (r[Kx] !== n || a !== i) {
                if (null == n || !i) return t[e] = o;
                (r = t[e] = ya(o, n, "debounce" === i))[$x] = o, r[Qx] = i, r[Kx] = n
            }
            return r
        }
    }

    function _a(t, e) {
        var n = t[e];
        n && n[$x] && (t[e] = n[$x])
    }

    function wa(t, e, n, i) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice();
        this._allHandlers = n.concat(i), this._stageTaskMap = N()
    }

    function ba(t, e, n, i, r) {
        function o(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }

        r = r || {};
        var a;
        d(e, function (e, s) {
            if (!r.visualType || r.visualType === e.visualType) {
                var l = t._stageTaskMap.get(e.uid), u = l.seriesTaskMap, h = l.overallTask;
                if (h) {
                    var c, d = h.agentStubMap;
                    d.each(function (t) {
                        o(r, t) && (t.dirty(), c = !0)
                    }), c && h.dirty(), r_(h, i);
                    var f = t.getPerformArgs(h, r.block);
                    d.each(function (t) {
                        t.perform(f)
                    }), a |= h.perform(f)
                } else u && u.each(function (s, l) {
                    o(r, s) && s.dirty();
                    var u = t.getPerformArgs(s, r.block);
                    u.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), r_(s, i), a |= s.perform(u)
                })
            }
        }), t.unfinished |= a
    }

    function Sa(t, e, n, i, r) {
        function o(n) {
            var o = n.uid, s = a.get(o) || a.set(o, ea({plan: Da, reset: ka, count: La}));
            s.context = {
                model: n,
                ecModel: i,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, Oa(t, n, s)
        }

        var a = n.seriesTaskMap || (n.seriesTaskMap = N()), s = e.seriesType, l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(o) : s ? i.eachRawSeriesByType(s, o) : l && l(i, r).each(o);
        var u = t._pipelineMap;
        a.each(function (t, e) {
            u.get(e) || (t.dispose(), a.removeKey(e))
        })
    }

    function Ma(t, e, n, i, r) {
        function o(e) {
            var n = e.uid, i = s.get(n);
            i || (i = s.set(n, ea({reset: Ta, onDirty: Aa})), a.dirty()), i.context = {
                model: e,
                overallProgress: h,
                modifyOutputEnd: c
            }, i.agent = a, i.__block = h, Oa(t, e, i)
        }

        var a = n.overallTask = n.overallTask || ea({reset: Ia});
        a.context = {ecModel: i, api: r, overallReset: e.overallReset, scheduler: t};
        var s = a.agentStubMap = a.agentStubMap || N(), l = e.seriesType, u = e.getTargetSeries, h = !0,
            c = e.modifyOutputEnd;
        l ? i.eachRawSeriesByType(l, o) : u ? u(i, r).each(o) : (h = !1, d(i.getSeries(), o));
        var f = t._pipelineMap;
        s.each(function (t, e) {
            f.get(e) || (t.dispose(), a.dirty(), s.removeKey(e))
        })
    }

    function Ia(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function Ta(t, e) {
        return t.overallProgress && Ca
    }

    function Ca() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function Aa() {
        this.agent && this.agent.dirty()
    }

    function Da(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }

    function ka(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Mn(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? f(e, function (t, e) {
            return Pa(e)
        }) : o_
    }

    function Pa(t) {
        return function (e, n) {
            var i = n.data, r = n.resetDefines[t];
            if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(i, o); else r && r.progress && r.progress(e, i)
        }
    }

    function La(t) {
        return t.data.count()
    }

    function Oa(t, e, n) {
        var i = e.uid, r = t._pipelineMap.get(i);
        !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
    }

    function za(t) {
        a_ = null;
        try {
            t(s_, l_)
        } catch (t) {
        }
        return a_
    }

    function Ea(t, e) {
        for (var n in e.prototype) t[n] = R
    }

    function Na(t) {
        for (_(t) && (t = (new DOMParser).parseFromString(t, "text/xml")), 9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function Ra() {
        this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
    }

    function Ba(t, e) {
        for (var n = t.firstChild; n;) {
            if (1 === n.nodeType) {
                var i = n.getAttribute("offset");
                i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
                var r = n.getAttribute("stop-color") || "#000000";
                e.addColorStop(i, r)
            }
            n = n.nextSibling
        }
    }

    function Fa(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), a(e.__inheritedStyle, t.__inheritedStyle))
    }

    function Va(t) {
        for (var e = L(t).split(p_), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]), o = parseFloat(e[i + 1]);
            n.push([r, o])
        }
        return n
    }

    function Wa(t, e, n, i) {
        var r = e.__inheritedStyle || {}, a = "text" === e.type;
        if (1 === t.nodeType && (Ga(t, e), o(r, Za(t)), !i)) for (var s in v_) if (v_.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[v_[s]] = l)
        }
        var u = a ? "textFill" : "fill", h = a ? "textStroke" : "stroke";
        e.style = e.style || new am;
        var c = e.style;
        null != r.fill && c.set(u, Ha(r.fill, n)), null != r.stroke && c.set(h, Ha(r.stroke, n)), d(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
            var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
            null != r[t] && c.set(e, parseFloat(r[t]))
        }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), d(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
            null != r[t] && c.set(t, r[t])
        }), r.lineDash && (e.style.lineDash = L(r.lineDash).split(p_)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = r
    }

    function Ha(t, e) {
        var n = e && t && t.match(y_);
        return n ? e[L(n[1])] : t
    }

    function Ga(t, e) {
        var n = t.getAttribute("transform");
        if (n) {
            var i = null, r = [];
            (n = n.replace(/,/g, " ")).replace(x_, function (t, e, n) {
                r.push(e, n)
            });
            for (var o = r.length - 1; o > 0; o -= 2) {
                var a = r[o], s = r[o - 1];
                switch (i = i || ft(), s) {
                    case"translate":
                        a = L(a).split(p_), vt(i, i, [parseFloat(a[0]), parseFloat(a[1] || 0)]);
                        break;
                    case"scale":
                        a = L(a).split(p_), xt(i, i, [parseFloat(a[0]), parseFloat(a[1] || a[0])]);
                        break;
                    case"rotate":
                        a = L(a).split(p_), yt(i, i, parseFloat(a[0]));
                        break;
                    case"skew":
                        a = L(a).split(p_), console.warn("Skew transform is not supported yet");
                        break;
                    case"matrix":
                        a = L(a).split(p_);
                        i[0] = parseFloat(a[0]), i[1] = parseFloat(a[1]), i[2] = parseFloat(a[2]), i[3] = parseFloat(a[3]), i[4] = parseFloat(a[4]), i[5] = parseFloat(a[5])
                }
            }
        }
        e.setLocalTransform(i)
    }

    function Za(t) {
        var e = t.getAttribute("style"), n = {};
        if (!e) return n;
        var i = {};
        __.lastIndex = 0;
        for (var r; null != (r = __.exec(e));) i[r[1]] = r[2];
        for (var o in v_) v_.hasOwnProperty(o) && null != i[o] && (n[v_[o]] = i[o]);
        return n
    }

    function Ua(t, e, n) {
        var i = e / t.width, r = n / t.height, o = Math.min(i, r);
        return {scale: [o, o], position: [-(t.x + t.width / 2) * o + e / 2, -(t.y + t.height / 2) * o + n / 2]}
    }

    function Xa(t) {
        return function (e, n, i) {
            e = e && e.toLowerCase(), pg.prototype[t].call(this, e, n, i)
        }
    }

    function Ya() {
        pg.call(this)
    }

    function ja(t, e, i) {
        function r(t, e) {
            return t.__prio - e.__prio
        }

        i = i || {}, "string" == typeof e && (e = X_[e]), this.id, this.group, this._dom = t;
        var o = this._zr = wn(t, {
            renderer: i.renderer || "canvas",
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = ya(m(o.flush, o), 17), (e = n(e)) && Lx(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Co;
        var a = this._api = ds(this);
        de(U_, r), de(H_, r), this._scheduler = new wa(this, a, H_, U_), pg.call(this, this._ecEventProcessor = new fs), this._messageCenter = new Ya, this._initEvents(), this.resize = m(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), ns(o, this), O(this)
    }

    function qa(t, e, n) {
        var i, r = this._model, o = this._coordSysMgr.getCoordinateSystems();
        e = zn(r, e);
        for (var a = 0; a < o.length; a++) {
            var s = o[a];
            if (s[t] && null != (i = s[t](r, e, n))) return i
        }
    }

    function $a(t) {
        var e = t._model, n = t._scheduler;
        n.restorePipelines(e), n.prepareStageTasks(), is(t, "component", e, n), is(t, "chart", e, n), n.plan()
    }

    function Ka(t, e, n, i, r) {
        function o(i) {
            i && i.__alive && i[e] && i[e](i.__model, a, t._api, n)
        }

        var a = t._model;
        if (i) {
            var s = {};
            s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
            var l = {mainType: i, query: s};
            r && (l.subType = r);
            var u = n.excludeSeriesId;
            null != u && (u = N(Mn(u))), a && a.eachComponent(l, function (e) {
                u && null != u.get(e.id) || o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
            }, t)
        } else I_(t._componentsViews.concat(t._chartsViews), o)
    }

    function Qa(t, e) {
        var n = t._chartsMap, i = t._scheduler;
        e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId])
        })
    }

    function Ja(t, e) {
        var n = t.type, i = t.escapeConnect, r = V_[n], s = r.actionInfo, l = (s.update || "update").split(":"),
            u = l.pop();
        l = null != l[0] && A_(l[0]), this[z_] = !0;
        var h = [t], c = !1;
        t.batch && (c = !0, h = f(t.batch, function (e) {
            return e = a(o({}, e), t), e.batch = null, e
        }));
        var d, p = [], g = "highlight" === n || "downplay" === n;
        I_(h, function (t) {
            d = r.action(t, this._model, this._api), (d = d || o({}, t)).type = s.event || d.type, p.push(d), g ? Ka(this, u, t, "series") : l && Ka(this, u, t, l.main, l.sub)
        }, this), "none" === u || g || l || (this[E_] ? ($a(this), B_.update.call(this, t), this[E_] = !1) : B_[u].call(this, t)), d = c ? {
            type: s.event || n,
            escapeConnect: i,
            batch: p
        } : p[0], this[z_] = !1, !e && this._messageCenter.trigger(d.type, d)
    }

    function ts(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            Ja.call(this, n, t)
        }
    }

    function es(t) {
        !t && this.trigger("updated")
    }

    function ns(t, e) {
        t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[E_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }

    function is(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type, r = s[e];
            if (!r) {
                var h = A_(t.type);
                (r = new (o ? Gx.getClass(h.main, h.sub) : fa.getClass(h.sub))).init(n, u), s[e] = r, a.push(r), l.add(r.group)
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !o && i.prepareView(r, t, n, u)
        }

        for (var o = "component" === e, a = o ? t._componentsViews : t._chartsViews, s = o ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < a.length; h++) a[h].__alive = !1;
        o ? n.eachComponent(function (t, e) {
            "series" !== t && r(e)
        }) : n.eachSeries(r);
        for (h = 0; h < a.length;) {
            var c = a[h];
            c.__alive ? h++ : (!o && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), a.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
        }
    }

    function rs(t) {
        t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
        })
    }

    function os(t, e, n, i) {
        as(t, e, n, i), I_(t._chartsViews, function (t) {
            t.__alive = !1
        }), ss(t, e, n, i), I_(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n)
        })
    }

    function as(t, e, n, i, r) {
        I_(r || t._componentsViews, function (t) {
            var r = t.__model;
            t.render(r, e, n, i), cs(r, t)
        })
    }

    function ss(t, e, n, i, r) {
        var o, a = t._scheduler;
        e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            a.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), o |= s.perform(a.getPerformArgs(s)), n.group.silent = !!e.get("silent"), cs(e, n), hs(e, n)
        }), a.unfinished |= o, us(t._zr, e), e_(t._zr.dom, e)
    }

    function ls(t, e) {
        I_(Z_, function (n) {
            n(t, e)
        })
    }

    function us(t, e) {
        var n = t.storage, i = 0;
        n.traverse(function (t) {
            t.isGroup || i++
        }), i > e.get("hoverLayerThreshold") && !Xp.node && n.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function hs(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                t.setStyle("blend", n)
            })
        })
    }

    function cs(t, e) {
        var n = t.get("z"), i = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        })
    }

    function ds(t) {
        var e = t._coordSysMgr;
        return o(new To(t), {
            getCoordinateSystems: m(e.getCoordinateSystems, e), getComponentByElement: function (e) {
                for (; e;) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }

    function fs() {
        this.eventInfo
    }

    function ps(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) t[i][n] = e
        }

        var n = "__connectUpdateStatus";
        I_(W_, function (i, r) {
            t._messageCenter.on(r, function (i) {
                if (q_[t.group] && 0 !== t[n]) {
                    if (i && i.escapeConnect) return;
                    var r = t.makeActionFromEvent(i), o = [];
                    I_(j_, function (e) {
                        e !== t && e.group === t.group && o.push(e)
                    }), e(o, 0), I_(o, function (t) {
                        1 !== t[n] && t.dispatchAction(r)
                    }), e(o, 2)
                }
            })
        })
    }

    function gs(t) {
        q_[t] = !1
    }

    function ms(t) {
        return j_[Rn(t, Q_)]
    }

    function vs(t, e) {
        X_[t] = e
    }

    function ys(t) {
        G_.push(t)
    }

    function xs(t, e) {
        Ss(H_, t, e, k_)
    }

    function _s(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = C_(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, M_(N_.test(i) && N_.test(e)), V_[i] || (V_[i] = {
            action: n,
            actionInfo: t
        }), W_[e] = i
    }

    function ws(t, e) {
        Ss(U_, t, e, P_, "layout")
    }

    function bs(t, e) {
        Ss(U_, t, e, L_, "visual")
    }

    function Ss(t, e, n, i, r) {
        (T_(e) || C_(e)) && (n = e, e = i);
        var o = wa.wrapStageHandler(n, r);
        return o.__prio = e, o.__raw = n, t.push(o), o
    }

    function Ms(t, e) {
        Y_[t] = e
    }

    function Is(t) {
        return ex.extend(t)
    }

    function Ts(t) {
        return Gx.extend(t)
    }

    function Cs(t) {
        return Hx.extend(t)
    }

    function As(t) {
        return fa.extend(t)
    }

    function Ds(t) {
        return t
    }

    function ks(t, e, n, i, r) {
        this._old = t, this._new = e, this._oldKeyGetter = n || Ds, this._newKeyGetter = i || Ds, this.context = r
    }

    function Ps(t, e, n, i, r) {
        for (var o = 0; o < t.length; o++) {
            var a = "_ec_" + r[i](t[o], o), s = e[a];
            null == s ? (n.push(a), e[a] = o) : (s.length || (e[a] = s = [s]), s.push(o))
        }
    }

    function Ls(t) {
        var e = {}, n = e.encode = {}, i = N(), r = [], o = [];
        d(t.dimensions, function (e) {
            var a = t.getDimensionInfo(e), s = a.coordDim;
            if (s) {
                var l = n[s];
                n.hasOwnProperty(s) || (l = n[s] = []), l[a.coordDimIndex] = e, a.isExtraCoord || (i.set(s, 1), zs(a.type) && (r[0] = e)), a.defaultTooltip && o.push(e)
            }
            ew.each(function (t, e) {
                var i = n[e];
                n.hasOwnProperty(e) || (i = n[e] = []);
                var r = a.otherDims[e];
                null != r && !1 !== r && (i[r] = a.name)
            })
        });
        var a = [], s = {};
        i.each(function (t, e) {
            var i = n[e];
            s[e] = i[0], a = a.concat(i)
        }), e.dataDimsOnCoord = a, e.encodeFirstDimNotExtra = s;
        var l = n.label;
        l && l.length && (r = l.slice());
        var u = n.tooltip;
        return u && u.length ? o = u.slice() : o.length || (o = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = o, e
    }

    function Os(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function zs(t) {
        return !("ordinal" === t || "time" === t)
    }

    function Es(t) {
        return t._rawCount > 65535 ? ow : aw
    }

    function Ns(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }

    function Rs(t, e) {
        d(sw.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t.__wrappedMethods = e.__wrappedMethods, d(lw, function (i) {
            t[i] = n(e[i])
        }), t._calculationInfo = o(e._calculationInfo)
    }

    function Bs(t) {
        var e = t._invertedIndicesMap;
        d(e, function (n, i) {
            var r = t._dimensionInfos[i].ordinalMeta;
            if (r) {
                n = e[i] = new ow(r.categories.length);
                for (o = 0; o < n.length; o++) n[o] = NaN;
                for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
            }
        })
    }

    function Fs(t, e, n) {
        var i;
        if (null != e) {
            var r = t._chunkSize, o = Math.floor(n / r), a = n % r, s = t.dimensions[e], l = t._storage[s][o];
            if (l) {
                i = l[a];
                var u = t._dimensionInfos[s].ordinalMeta;
                u && u.categories.length && (i = u.categories[i])
            }
        }
        return i
    }

    function Vs(t) {
        return t
    }

    function Ws(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }

    function Hs(t, e) {
        var n = t._idList[e];
        return null == n && (n = Fs(t, t._idDimIdx, e)), null == n && (n = iw + e), n
    }

    function Gs(t) {
        return y(t) || (t = [t]), t
    }

    function Zs(t, e) {
        var n = t.dimensions, i = new uw(f(n, t.getDimensionInfo, t), t.hostModel);
        Rs(i, t);
        for (var r = i._storage = {}, o = t._storage, a = 0; a < n.length; a++) {
            var s = n[a];
            o[s] && (l(e, s) >= 0 ? (r[s] = Us(o[s]), i._rawExtent[s] = Xs(), i._extent[s] = null) : r[s] = o[s])
        }
        return i
    }

    function Us(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Ns(t[n]);
        return e
    }

    function Xs() {
        return [1 / 0, -1 / 0]
    }

    function Ys(t, e, i) {
        function r(t, e, n) {
            null != ew.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0))
        }

        oo.isInstance(e) || (e = oo.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
        for (var s = (i.dimsDef || []).slice(), l = N(i.encodeDef), u = N(), h = N(), c = [], f = js(e, t, s, i.dimCount), p = 0; p < f; p++) {
            var g = s[p] = o({}, w(s[p]) ? s[p] : {name: s[p]}), m = g.name, v = c[p] = {otherDims: {}};
            null != m && null == u.get(m) && (v.name = v.displayName = m, u.set(m, p)), null != g.type && (v.type = g.type), null != g.displayName && (v.displayName = g.displayName)
        }
        l.each(function (t, e) {
            if (1 === (t = Mn(t).slice()).length && t[0] < 0) l.set(e, !1); else {
                var n = l.set(e, []);
                d(t, function (t, i) {
                    _(t) && (t = u.get(t)), null != t && t < f && (n[i] = t, r(c[t], e, i))
                })
            }
        });
        var y = 0;
        d(t, function (t, e) {
            var i, t, o, s;
            if (_(t)) i = t, t = {}; else {
                i = t.name;
                var u = t.ordinalMeta;
                t.ordinalMeta = null, (t = n(t)).ordinalMeta = u, o = t.dimsDef, s = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var h = l.get(i);
            if (!1 !== h) {
                if (!(h = Mn(h)).length) for (var f = 0; f < (o && o.length || 1); f++) {
                    for (; y < c.length && null != c[y].coordDim;) y++;
                    y < c.length && h.push(y++)
                }
                d(h, function (e, n) {
                    var l = c[e];
                    if (r(a(l, t), i, n), null == l.name && o) {
                        var u = o[n];
                        !w(u) && (u = {name: u}), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
                    }
                    s && a(l.otherDims, s)
                })
            }
        });
        var x = i.generateCoord, b = i.generateCoordCount, S = null != b;
        b = x ? b || 1 : 0;
        for (var M = x || "value", I = 0; I < f; I++) null == (v = c[I] = c[I] || {}).coordDim && (v.coordDim = qs(M, h, S), v.coordDimIndex = 0, (!x || b <= 0) && (v.isExtraCoord = !0), b--), null == v.name && (v.name = qs(v.coordDim, u)), null == v.type && vo(e, I, v.name) && (v.type = "ordinal");
        return c
    }

    function js(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return d(e, function (t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }), r
    }

    function qs(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);) i++;
            t += i
        }
        return e.set(t, !0), t
    }

    function $s(t, e, n) {
        var i, r, o, a, s = (n = n || {}).byIndex, l = n.stackedCoordDimension, u = !(!t || !t.get("stack"));
        if (d(e, function (t, n) {
                _(t) && (e[n] = t = {name: t}), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
            }), !r || s || i || (s = !0), r) {
            o = "__\0ecstackresult", a = "__\0ecstackedover", i && (i.createInvertedIndices = !0);
            var h = r.coordDim, c = r.type, f = 0;
            d(e, function (t) {
                t.coordDim === h && f++
            }), e.push({
                name: o,
                coordDim: h,
                coordDimIndex: f,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), f++, e.push({name: a, coordDim: a, coordDimIndex: f, type: c, isExtraCoord: !0, isCalculationCoord: !0})
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: a,
            stackResultDimension: o
        }
    }

    function Ks(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function Qs(t, e) {
        return Ks(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function Js(t, e, n) {
        n = n || {}, oo.isInstance(t) || (t = oo.seriesDataToSource(t));
        var i, r = e.get("coordinateSystem"), o = Co.get(r), a = io(e);
        a && (i = f(a.coordSysDims, function (t) {
            var e = {name: t}, n = a.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = Os(i)
            }
            return e
        })), i || (i = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"]);
        var s, l, u = dw(t, {coordDimensions: i, generateCoord: n.generateCoord});
        a && d(u, function (t, e) {
            var n = t.coordDim, i = a.categoryAxisMap.get(n);
            i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
        }), l || null == s || (u[s].otherDims.itemName = 0);
        var h = $s(e, u), c = new uw(u, e);
        c.setCalculationInfo(h);
        var p = null != s && tl(t) ? function (t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, p), c
    }

    function tl(t) {
        if (t.sourceFormat === sx) {
            var e = el(t.data || []);
            return null != e && !y(Tn(e))
        }
    }

    function el(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function nl(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
    }

    function il(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
    }

    function rl(t) {
        return t._map || (t._map = N(t.categories))
    }

    function ol(t) {
        return w(t) && null != t.value ? t.value : t + ""
    }

    function al(t, e, n, i) {
        var r = {}, o = t[1] - t[0], a = r.interval = Wr(o / e, !0);
        null != n && a < n && (a = r.interval = n), null != i && a > i && (a = r.interval = i);
        var s = r.intervalPrecision = sl(a);
        return ul(r.niceTickExtent = [mw(Math.ceil(t[0] / a) * a, s), mw(Math.floor(t[1] / a) * a, s)], t), r
    }

    function sl(t) {
        return Or(t) + 2
    }

    function ll(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }

    function ul(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), ll(t, 0, e), ll(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function hl(t, e, n, i) {
        var r = [];
        if (!t) return r;
        e[0] < n[0] && r.push(e[0]);
        for (var o = n[0]; o <= n[1] && (r.push(o), (o = mw(o + t, i)) !== r[r.length - 1]);) if (r.length > 1e4) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
    }

    function cl(t) {
        return t.get("stack") || xw + t.seriesIndex
    }

    function dl(t) {
        return t.dim + t.index
    }

    function fl(t, e) {
        var n = [];
        return e.eachSeriesByType(t, function (t) {
            vl(t) && !yl(t) && n.push(t)
        }), n
    }

    function pl(t) {
        var e = [];
        return d(t, function (t) {
            var n = t.getData(), i = t.coordinateSystem.getBaseAxis(), r = i.getExtent(),
                o = "category" === i.type ? i.getBandWidth() : Math.abs(r[1] - r[0]) / n.count(),
                a = Dr(t.get("barWidth"), o), s = Dr(t.get("barMaxWidth"), o), l = t.get("barGap"),
                u = t.get("barCategoryGap");
            e.push({
                bandWidth: o,
                barWidth: a,
                barMaxWidth: s,
                barGap: l,
                barCategoryGap: u,
                axisKey: dl(i),
                stackId: cl(t)
            })
        }), gl(e)
    }

    function gl(t) {
        var e = {};
        d(t, function (t, n) {
            var i = t.axisKey, r = t.bandWidth, o = e[i] || {
                bandWidth: r,
                remainedWidth: r,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, a = o.stacks;
            e[i] = o;
            var s = t.stackId;
            a[s] || o.autoWidthCount++, a[s] = a[s] || {width: 0, maxWidth: 0};
            var l = t.barWidth;
            l && !a[s].width && (a[s].width = l, l = Math.min(o.remainedWidth, l), o.remainedWidth -= l);
            var u = t.barMaxWidth;
            u && (a[s].maxWidth = u);
            var h = t.barGap;
            null != h && (o.gap = h);
            var c = t.barCategoryGap;
            null != c && (o.categoryGap = c)
        });
        var n = {};
        return d(e, function (t, e) {
            n[e] = {};
            var i = t.stacks, r = t.bandWidth, o = Dr(t.categoryGap, r), a = Dr(t.gap, 1), s = t.remainedWidth,
                l = t.autoWidthCount, u = (s - o) / (l + (l - 1) * a);
            u = Math.max(u, 0), d(i, function (t, e) {
                var n = t.maxWidth;
                n && n < u && (n = Math.min(n, s), t.width && (n = Math.min(n, t.width)), s -= n, t.width = n, l--)
            }), u = (s - o) / (l + (l - 1) * a), u = Math.max(u, 0);
            var h, c = 0;
            d(i, function (t, e) {
                t.width || (t.width = u), h = t, c += t.width * (1 + a)
            }), h && (c -= h.width * a);
            var f = -c / 2;
            d(i, function (t, i) {
                n[e][i] = n[e][i] || {offset: f, width: t.width}, f += t.width * (1 + a)
            })
        }), n
    }

    function ml(t, e, n) {
        if (t && e) {
            var i = t[dl(e)];
            return null != i && null != n && (i = i[cl(n)]), i
        }
    }

    function vl(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function yl(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function xl(t, e, n) {
        var i, r, o = e.getGlobalExtent();
        o[0] > o[1] ? (i = o[1], r = o[0]) : (i = o[0], r = o[1]);
        var a = e.toGlobalCoord(e.dataToCoord(0));
        return a < i && (a = i), a > r && (a = r), a
    }

    function _l(t, e) {
        return Pw(t, kw(e))
    }

    function wl(t, e) {
        var n, i, r, o = t.type, a = e.getMin(), s = e.getMax(), l = null != a, u = null != s, h = t.getExtent();
        "ordinal" === o ? n = e.getCategories().length : (y(i = e.get("boundaryGap")) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Dr(i[0], 1), i[1] = Dr(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == a && (a = "ordinal" === o ? n ? 0 : NaN : h[0] - i[0] * r), null == s && (s = "ordinal" === o ? n ? n - 1 : NaN : h[1] + i[1] * r), "dataMin" === a ? a = h[0] : "function" == typeof a && (a = a({
            min: h[0],
            max: h[1]
        })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
            min: h[0],
            max: h[1]
        })), (null == a || !isFinite(a)) && (a = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(I(a) || I(s) || "ordinal" === o && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (a > 0 && s > 0 && !l && (a = 0), a < 0 && s < 0 && !u && (s = 0));
        var c = e.ecModel;
        if (c && "time" === o) {
            var f, p = fl("bar", c);
            if (d(p, function (t) {
                    f |= t.getBaseAxis() === e.axis
                }), f) {
                var g = pl(p), m = bl(a, s, e, g);
                a = m.min, s = m.max
            }
        }
        return [a, s]
    }

    function bl(t, e, n, i) {
        var r = n.axis.getExtent(), o = r[1] - r[0], a = ml(i, n.axis);
        if (void 0 === a) return {min: t, max: e};
        var s = 1 / 0;
        d(a, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        d(a, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var u = s + l, h = e - t, c = h / (1 - (s + l) / o) - h;
        return e += c * (l / u), t -= c * (s / u), {min: t, max: e}
    }

    function Sl(t, e) {
        var n = wl(t, e), i = null != e.getMin(), r = null != e.getMax(), o = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var a = t.type;
        t.setExtent(n[0], n[1]), t.niceExtent({
            splitNumber: o,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === a || "time" === a ? e.get("minInterval") : null,
            maxInterval: "interval" === a || "time" === a ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }

    function Ml(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case"category":
                return new gw(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
            case"value":
                return new yw;
            default:
                return (nl.getClass(e) || yw).create(t)
        }
    }

    function Il(t) {
        var e = t.scale.getExtent(), n = e[0], i = e[1];
        return !(n > 0 && i > 0 || n < 0 && i < 0)
    }

    function Tl(t) {
        var e = t.getLabelModel().get("formatter"), n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function (e) {
            return function (n) {
                return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "")
            }
        }(e) : "function" == typeof e ? function (i, r) {
            return null != n && (r = i - n), e(Cl(t, i), r)
        } : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function Cl(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    function Al(t) {
        var e = t.model, n = t.scale;
        if (e.get("axisLabel.show") && !n.isBlank()) {
            var i, r, o = "category" === t.type, a = n.getExtent();
            r = o ? n.count() : (i = n.getTicks()).length;
            var s, l = t.getLabelModel(), u = Tl(t), h = 1;
            r > 40 && (h = Math.ceil(r / 40));
            for (var c = 0; c < r; c += h) {
                var d = u(i ? i[c] : a[0] + c), f = Dl(l.getTextRect(d), l.get("rotate") || 0);
                s ? s.union(f) : s = f
            }
            return s
        }
    }

    function Dl(t, e) {
        var n = e * Math.PI / 180, i = t.plain(), r = i.width, o = i.height, a = r * Math.cos(n) + o * Math.sin(n),
            s = r * Math.sin(n) + o * Math.cos(n);
        return new re(i.x, i.y, a, s)
    }

    function kl(t, e) {
        if ("image" !== this.type) {
            var n = this.style, i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
        }
    }

    function Pl(t, e, n, i, r, o, a) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Ri(t.slice(8), new re(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? Ni(t.slice(7), {}, new re(e, n, i, r), a ? "center" : "cover") : new Zw({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = kl, l.setColor(o), l
    }

    function Ll(t, e) {
        return Math.abs(t - e) < Yw
    }

    function Ol(t, e, n) {
        var i = 0, r = t[0];
        if (!r) return !1;
        for (var o = 1; o < t.length; o++) {
            var a = t[o];
            i += mi(r[0], r[1], a[0], a[1], e, n), r = a
        }
        var s = t[0];
        return Ll(r[0], s[0]) && Ll(r[1], s[1]) || (i += mi(r[0], r[1], s[0], s[1], e, n)), 0 !== i
    }

    function zl(t, e, n) {
        if (this.name = t, this.geometries = e, n) n = [n[0], n[1]]; else {
            var i = this.getBoundingRect();
            n = [i.x + i.width / 2, i.y + i.height / 2]
        }
        this.center = n
    }

    function El(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features, i = 0; i < n.length; i++) for (var r = n[i].geometry, o = r.coordinates, a = r.encodeOffsets, s = 0; s < o.length; s++) {
            var l = o[s];
            if ("Polygon" === r.type) o[s] = Nl(l, a[s], e); else if ("MultiPolygon" === r.type) for (var u = 0; u < l.length; u++) {
                var h = l[u];
                l[u] = Nl(h, a[s][u], e)
            }
        }
        return t.UTF8Encoding = !1, t
    }

    function Nl(t, e, n) {
        for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
            var s = t.charCodeAt(a) - 64, l = t.charCodeAt(a + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), r = s += r, o = l += o, i.push([s / n, l / n])
        }
        return i
    }

    function Rl(t) {
        return "category" === t.type ? Fl(t) : Hl(t)
    }

    function Bl(t, e) {
        return "category" === t.type ? Wl(t, e) : {ticks: t.scale.getTicks()}
    }

    function Fl(t) {
        var e = t.getLabelModel(), n = Vl(t, e);
        return !e.get("show") || t.scale.isBlank() ? {labels: [], labelCategoryInterval: n.labelCategoryInterval} : n
    }

    function Vl(t, e) {
        var n = Gl(t, "labels"), i = Kl(e), r = Zl(n, i);
        if (r) return r;
        var o, a;
        return o = x(i) ? $l(t, i) : ql(t, a = "auto" === i ? Xl(t) : i), Ul(n, i, {
            labels: o,
            labelCategoryInterval: a
        })
    }

    function Wl(t, e) {
        var n = Gl(t, "ticks"), i = Kl(e), r = Zl(n, i);
        if (r) return r;
        var o, a;
        if (e.get("show") && !t.scale.isBlank() || (o = []), x(i)) o = $l(t, i, !0); else if ("auto" === i) {
            var s = Vl(t, t.getLabelModel());
            a = s.labelCategoryInterval, o = f(s.labels, function (t) {
                return t.tickValue
            })
        } else o = ql(t, a = i, !0);
        return Ul(n, i, {ticks: o, tickCategoryInterval: a})
    }

    function Hl(t) {
        var e = t.scale.getTicks(), n = Tl(t);
        return {
            labels: f(e, function (e, i) {
                return {formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e}
            })
        }
    }

    function Gl(t, e) {
        return qw(t)[e] || (qw(t)[e] = [])
    }

    function Zl(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
    }

    function Ul(t, e, n) {
        return t.push({key: e, value: n}), n
    }

    function Xl(t) {
        var e = qw(t).autoInterval;
        return null != e ? e : qw(t).autoInterval = t.calculateCategoryInterval()
    }

    function Yl(t) {
        var e = jl(t), n = Tl(t), i = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, o = r.getExtent(),
            a = r.count();
        if (o[1] - o[0] < 1) return 0;
        var s = 1;
        a > 40 && (s = Math.max(1, Math.floor(a / 40)));
        for (var l = o[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= o[1]; l += s) {
            var p = 0, g = 0, m = Se(n(l), e.font, "center", "top");
            p = 1.3 * m.width, g = 1.3 * m.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
        }
        var v = d / h, y = f / c;
        isNaN(v) && (v = 1 / 0), isNaN(y) && (y = 1 / 0);
        var x = Math.max(0, Math.floor(Math.min(v, y))), _ = qw(t.model), w = _.lastAutoInterval, b = _.lastTickCount;
        return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - a) <= 1 && w > x ? x = w : (_.lastTickCount = a, _.lastAutoInterval = x), x
    }

    function jl(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function ql(t, e, n) {
        function i(t) {
            l.push(n ? t : {formattedLabel: r(t), rawLabel: o.getLabel(t), tickValue: t})
        }

        var r = Tl(t), o = t.scale, a = o.getExtent(), s = t.getLabelModel(), l = [], u = Math.max((e || 0) + 1, 1),
            h = a[0], c = o.count();
        0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var d = {min: s.get("showMinLabel"), max: s.get("showMaxLabel")};
        d.min && h !== a[0] && i(a[0]);
        for (var f = h; f <= a[1]; f += u) i(f);
        return d.max && f !== a[1] && i(a[1]), l
    }

    function $l(t, e, n) {
        var i = t.scale, r = Tl(t), o = [];
        return d(i.getTicks(), function (t) {
            var a = i.getLabel(t);
            e(t, a) && o.push(n ? t : {formattedLabel: r(t), rawLabel: a, tickValue: t})
        }), o
    }

    function Kl(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function Ql(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        t[0] += n, t[1] -= n
    }

    function Jl(t, e, n, i, r) {
        function o(t, e) {
            return h ? t > e : t < e
        }

        var a = e.length;
        if (t.onBand && !i && a) {
            var s, l = t.getExtent();
            if (1 === a) e[0].coord = l[0], s = e[1] = {coord: l[0]}; else {
                var u = e[1].coord - e[0].coord;
                d(e, function (t) {
                    t.coord -= u / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= u / (2 * (e + 1)))
                }), s = {coord: e[a - 1].coord + u}, e.push(s)
            }
            var h = l[0] > l[1];
            o(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && o(l[0], e[0].coord) && e.unshift({coord: l[0]}), o(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && o(s.coord, l[1]) && e.push({coord: l[1]})
        }
    }

    function tu(t, e) {
        var n = t.mapDimension("defaultedLabel", !0), i = n.length;
        if (1 === i) return Jo(t, e, n[0]);
        if (i) {
            for (var r = [], o = 0; o < n.length; o++) {
                var a = Jo(t, e, n[o]);
                r.push(a)
            }
            return r.join(" ")
        }
    }

    function eu(t, e, n) {
        Jg.call(this), this.updateData(t, e, n)
    }

    function nu(t) {
        return [t[0] / 2, t[1] / 2]
    }

    function iu(t, e) {
        this.parent.drift(t, e)
    }

    function ru() {
        !Qi(this) && au.call(this)
    }

    function ou() {
        !Qi(this) && su.call(this)
    }

    function au() {
        if (!this.incremental && !this.useHoverLayer) {
            var t = this.__symbolOriginalScale, e = t[1] / t[0];
            this.animateTo({scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)]}, 400, "elasticOut")
        }
    }

    function su() {
        this.incremental || this.useHoverLayer || this.animateTo({scale: this.__symbolOriginalScale}, 400, "elasticOut")
    }

    function lu(t) {
        this.group = new Jg, this._symbolCtor = t || eu
    }

    function uu(t, e, n, i) {
        return e && !isNaN(e[0]) && !isNaN(e[1]) && !(i.isIgnore && i.isIgnore(n)) && !(i.clipShape && !i.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(n, "symbol")
    }

    function hu(t) {
        return null == t || w(t) || (t = {isIgnore: t}), t || {}
    }

    function cu(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        }
    }

    function du(t, e, n) {
        var i, r = t.getBaseAxis(), o = t.getOtherAxis(r), a = fu(o, n), s = r.dim, l = o.dim, u = e.mapDimension(l),
            h = e.mapDimension(s), c = "x" === l || "radius" === l ? 1 : 0, d = f(t.dimensions, function (t) {
                return e.mapDimension(t)
            }), p = e.getCalculationInfo("stackResultDimension");
        return (i |= Ks(e, d[0])) && (d[0] = p), (i |= Ks(e, d[1])) && (d[1] = p), {
            dataDimsForPoint: d,
            valueStart: a,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!i,
            valueDim: u,
            baseDim: h,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }

    function fu(t, e) {
        var n = 0, i = t.scale.getExtent();
        return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
    }

    function pu(t, e, n, i) {
        var r = NaN;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
        var o = t.baseDataOffset, a = [];
        return a[o] = n.get(t.baseDim, i), a[1 - o] = r, e.dataToPoint(a)
    }

    function gu(t, e) {
        var n = [];
        return e.diff(t).add(function (t) {
            n.push({cmd: "+", idx: t})
        }).update(function (t, e) {
            n.push({cmd: "=", idx: e, idx1: t})
        }).remove(function (t) {
            n.push({cmd: "-", idx: t})
        }).execute(), n
    }

    function mu(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function vu(t, e, n, i, r, o, a, s, l, u, h) {
        return "none" !== u && u ? yu.apply(this, arguments) : xu.apply(this, arguments)
    }

    function yu(t, e, n, i, r, o, a, s, l, u, h) {
        for (var c = 0, d = n, f = 0; f < i; f++) {
            var p = e[d];
            if (d >= r || d < 0) break;
            if (mu(p)) {
                if (h) {
                    d += o;
                    continue
                }
                break
            }
            if (d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]); else if (l > 0) {
                var g = e[c], m = "y" === u ? 1 : 0, v = (p[m] - g[m]) * l;
                db(pb, g), pb[m] = g[m] + v, db(gb, p), gb[m] = p[m] - v, t.bezierCurveTo(pb[0], pb[1], gb[0], gb[1], p[0], p[1])
            } else t.lineTo(p[0], p[1]);
            c = d, d += o
        }
        return f
    }

    function xu(t, e, n, i, r, o, a, s, l, u, h) {
        for (var c = 0, d = n, f = 0; f < i; f++) {
            var p = e[d];
            if (d >= r || d < 0) break;
            if (mu(p)) {
                if (h) {
                    d += o;
                    continue
                }
                break
            }
            if (d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]), db(pb, p); else if (l > 0) {
                var g = d + o, m = e[g];
                if (h) for (; m && mu(e[g]);) m = e[g += o];
                var v = .5, y = e[c];
                if (!(m = e[g]) || mu(m)) db(gb, p); else {
                    mu(m) && !h && (m = p), G(fb, m, y);
                    var x, _;
                    if ("x" === u || "y" === u) {
                        var w = "x" === u ? 0 : 1;
                        x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - m[w])
                    } else x = hg(p, y), _ = hg(p, m);
                    cb(gb, p, fb, -l * (1 - (v = _ / (_ + x))))
                }
                ub(pb, pb, s), hb(pb, pb, a), ub(gb, gb, s), hb(gb, gb, a), t.bezierCurveTo(pb[0], pb[1], gb[0], gb[1], p[0], p[1]), cb(pb, p, fb, l * v)
            } else t.lineTo(p[0], p[1]);
            c = d, d += o
        }
        return f
    }

    function _u(t, e) {
        var n = [1 / 0, 1 / 0], i = [-1 / 0, -1 / 0];
        if (e) for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o[0] < n[0] && (n[0] = o[0]), o[1] < n[1] && (n[1] = o[1]), o[0] > i[0] && (i[0] = o[0]), o[1] > i[1] && (i[1] = o[1])
        }
        return {min: e ? n : i, max: e ? i : n}
    }

    function wu(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n], r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1]) return
            }
            return !0
        }
    }

    function bu(t) {
        return "number" == typeof t ? t : t ? .5 : 0
    }

    function Su(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1, i = e[1] > e[0] ? 1 : -1;
            e[0] += i * n, e[1] -= i * n
        }
        return e
    }

    function Mu(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = [], r = 0, o = e.count(); r < o; r++) i.push(pu(n, t, e, r));
        return i
    }

    function Iu(t, e, n, i) {
        var r = Su(t.getAxis("x")), o = Su(t.getAxis("y")), a = t.getBaseAxis().isHorizontal(),
            s = Math.min(r[0], r[1]), l = Math.min(o[0], o[1]), u = Math.max(r[0], r[1]) - s,
            h = Math.max(o[0], o[1]) - l;
        if (n) s -= .5, u += .5, l -= .5, h += .5; else {
            var c = i.get("lineStyle.width") || 2, d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);
            a ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d)
        }
        var f = new py({shape: {x: s, y: l, width: u, height: h}});
        return e && (f.shape[a ? "width" : "height"] = 0, mr(f, {shape: {width: u, height: h}}, i)), f
    }

    function Tu(t, e, n, i) {
        var r = t.getAngleAxis(), o = t.getRadiusAxis().getExtent().slice();
        o[0] > o[1] && o.reverse();
        var a = r.getExtent(), s = Math.PI / 180;
        n && (o[0] -= .5, o[1] += .5);
        var l = new ly({
            shape: {
                cx: kr(t.cx, 1),
                cy: kr(t.cy, 1),
                r0: kr(o[0], 1),
                r: kr(o[1], 1),
                startAngle: -a[0] * s,
                endAngle: -a[1] * s,
                clockwise: r.inverse
            }
        });
        return e && (l.shape.endAngle = -a[0] * s, mr(l, {shape: {endAngle: -a[1] * s}}, i)), l
    }

    function Cu(t, e, n, i) {
        return "polar" === t.type ? Tu(t, e, n, i) : Iu(t, e, n, i)
    }

    function Au(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, o = [], a = 0; a < t.length - 1; a++) {
            var s = t[a + 1], l = t[a];
            o.push(l);
            var u = [];
            switch (n) {
                case"end":
                    u[r] = s[r], u[1 - r] = l[1 - r], o.push(u);
                    break;
                case"middle":
                    var h = (l[r] + s[r]) / 2, c = [];
                    u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], o.push(u), o.push(c);
                    break;
                default:
                    u[r] = l[r], u[1 - r] = s[1 - r], o.push(u)
            }
        }
        return t[a] && o.push(t[a]), o
    }

    function Du(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, o = n.length - 1; o >= 0; o--) {
                var a = n[o].dimension, s = t.dimensions[a], l = t.getDimensionInfo(s);
                if ("x" === (i = l && l.coordDim) || "y" === i) {
                    r = n[o];
                    break
                }
            }
            if (r) {
                var u = e.getAxis(i), h = f(r.stops, function (t) {
                    return {coord: u.toGlobalCoord(u.dataToCoord(t.value)), color: t.color}
                }), c = h.length, p = r.outerColors.slice();
                c && h[0].coord > h[c - 1].coord && (h.reverse(), p.reverse());
                var g = h[0].coord - 10, m = h[c - 1].coord + 10, v = m - g;
                if (v < .001) return "transparent";
                d(h, function (t) {
                    t.offset = (t.coord - g) / v
                }), h.push({
                    offset: c ? h[c - 1].offset : .5,
                    color: p[1] || "transparent"
                }), h.unshift({offset: c ? h[0].offset : .5, color: p[0] || "transparent"});
                var y = new wy(0, 0, 0, 0, h, !0);
                return y[i] = g, y[i + "2"] = m, y
            }
        }
    }

    function ku(t, e, n) {
        var i = t.get("showAllSymbol"), r = "auto" === i;
        if (!i || r) {
            var o = n.getAxesByScale("ordinal")[0];
            if (o && (!r || !Pu(o, e))) {
                var a = e.mapDimension(o.dim), s = {};
                return d(o.getViewLabels(), function (t) {
                    s[t.tickValue] = 1
                }), function (t) {
                    return !s.hasOwnProperty(e.get(a, t))
                }
            }
        }
    }

    function Pu(t, e) {
        var n = t.getExtent(), i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0; a < r; a += o) if (1.5 * eu.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > i) return !1;
        return !0
    }

    function Lu(t) {
        return this._axes[t]
    }

    function Ou(t) {
        bb.call(this, t)
    }

    function zu(t, e) {
        return e.type || (e.data ? "category" : "value")
    }

    function Eu(t, e, n) {
        return t.getCoordSysModel() === e
    }

    function Nu(t, e, n) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
    }

    function Ru(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index
        }

        n.getAxesOnZeroOf = function () {
            return o ? [o] : []
        };
        var o, a = t[e], s = n.model, l = s.get("axisLine.onZero"), u = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != u) Bu(a[u]) && (o = a[u]); else for (var h in a) if (a.hasOwnProperty(h) && Bu(a[h]) && !i[r(a[h])]) {
                o = a[h];
                break
            }
            o && (i[r(o)] = !0)
        }
    }

    function Bu(t) {
        return t && "category" !== t.type && "time" !== t.type && Il(t)
    }

    function Fu(t, e) {
        var n = t.getExtent(), i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return i - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return i - t + e
        }
    }

    function Vu(t, e) {
        return f(Pb, function (e) {
            return t.getReferringComponents(e)[0]
        })
    }

    function Wu(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    function Hu(t) {
        var e = {componentType: t.mainType, componentIndex: t.componentIndex};
        return e[t.mainType + "Index"] = t.componentIndex, e
    }

    function Gu(t, e, n, i) {
        var r, o, a = Nr(n - t.rotation), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return Rr(a - Lb / 2) ? (o = l ? "bottom" : "top", r = "center") : Rr(a - 1.5 * Lb) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = a < 1.5 * Lb && a > Lb / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: a,
            textAlign: r,
            textVerticalAlign: o
        }
    }

    function Zu(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }

    function Uu(t, e, n) {
        var i = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
        e = e || [], n = n || [];
        var o = e[0], a = e[1], s = e[e.length - 1], l = e[e.length - 2], u = n[0], h = n[1], c = n[n.length - 1],
            d = n[n.length - 2];
        !1 === i ? (Xu(o), Xu(u)) : Yu(o, a) && (i ? (Xu(a), Xu(h)) : (Xu(o), Xu(u))), !1 === r ? (Xu(s), Xu(c)) : Yu(l, s) && (r ? (Xu(l), Xu(d)) : (Xu(s), Xu(c)))
    }

    function Xu(t) {
        t && (t.ignore = !0)
    }

    function Yu(t, e, n) {
        var i = t && t.getBoundingRect().clone(), r = e && e.getBoundingRect().clone();
        if (i && r) {
            var o = pt([]);
            return yt(o, o, -t.rotation), i.applyTransform(mt([], o, t.getLocalTransform())), r.applyTransform(mt([], o, e.getLocalTransform())), i.intersect(r)
        }
    }

    function ju(t) {
        return "middle" === t || "center" === t
    }

    function qu(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), o = r.getModel("lineStyle"), s = r.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * s, c && ($(u, u, c), $(h, h, c));
                var g = new gy(Vi({
                    anid: "tick_" + l[f].tickValue,
                    shape: {x1: u[0], y1: u[1], x2: h[0], y2: h[1]},
                    style: a(o.getLineStyle(), {stroke: e.get("axisLine.lineStyle.color")}),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(g), d.push(g)
            }
            return d
        }
    }

    function $u(t, e, n) {
        var i = e.axis;
        if (T(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
            var r = e.getModel("axisLabel"), o = r.get("margin"), a = i.getViewLabels(),
                s = (T(n.labelRotate, r.get("rotate")) || 0) * Lb / 180, l = Eb(n.rotation, s, n.labelDirection),
                u = e.getCategories(!0), h = [], c = Zu(e), f = e.get("triggerEvent");
            return d(a, function (a, s) {
                var d = a.tickValue, p = a.formattedLabel, g = a.rawLabel, m = r;
                u && u[d] && u[d].textStyle && (m = new Sr(u[d].textStyle, r, e.ecModel));
                var v = m.getTextColor() || e.get("axisLine.lineStyle.color"),
                    y = [i.dataToCoord(d), n.labelOffset + n.labelDirection * o],
                    x = new ry({anid: "label_" + d, position: y, rotation: l.rotation, silent: c, z2: 10});
                ar(x.style, m, {
                    text: p,
                    textAlign: m.getShallow("align", !0) || l.textAlign,
                    textVerticalAlign: m.getShallow("verticalAlign", !0) || m.getShallow("baseline", !0) || l.textVerticalAlign,
                    textFill: "function" == typeof v ? v("category" === i.type ? g : "value" === i.type ? d + "" : d, s) : v
                }), f && (x.eventData = Hu(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), h.push(x), t.group.add(x), x.decomposeTransform()
            }), h
        }
    }

    function Ku(t, e) {
        var n = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return Qu(n, t, e), n.seriesInvolved && th(n, t), n
    }

    function Qu(t, e, n) {
        var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), o = r.get("link", !0) || [], a = [];
        Nb(n.getCoordinateSystems(), function (n) {
            function s(i, s, l) {
                var c = l.model.getModel("axisPointer", r), d = c.get("show");
                if (d && ("auto" !== d || i || ah(c))) {
                    null == s && (s = c.get("triggerTooltip"));
                    var f = (c = i ? Ju(l, h, r, e, i, s) : c).get("snap"), p = sh(l.model),
                        g = s || f || "category" === l.type, m = t.axesInfo[p] = {
                            key: p,
                            axis: l,
                            coordSys: n,
                            axisPointerModel: c,
                            triggerTooltip: s,
                            involveSeries: g,
                            snap: f,
                            useHandle: ah(c),
                            seriesModels: []
                        };
                    u[p] = m, t.seriesInvolved |= g;
                    var v = eh(o, l);
                    if (null != v) {
                        var y = a[v] || (a[v] = {axesInfo: {}});
                        y.axesInfo[p] = m, y.mapper = o[v].mapper, m.linkGroup = y
                    }
                }
            }

            if (n.axisPointerEnabled) {
                var l = sh(n.model), u = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = n;
                var h = n.model.getModel("tooltip", i);
                if (Nb(n.getAxes(), Rb(s, !1, null)), n.getTooltipAxes && i && h.get("show")) {
                    var c = "axis" === h.get("trigger"), d = "cross" === h.get("axisPointer.type"),
                        f = n.getTooltipAxes(h.get("axisPointer.axis"));
                    (c || d) && Nb(f.baseAxes, Rb(s, !d || "cross", c)), d && Nb(f.otherAxes, Rb(s, "cross", !1))
                }
            }
        })
    }

    function Ju(t, e, i, r, o, s) {
        var l = e.getModel("axisPointer"), u = {};
        Nb(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            u[t] = n(l.get(t))
        }), u.snap = "category" !== t.type && !!s, "cross" === l.get("type") && (u.type = "line");
        var h = u.label || (u.label = {});
        if (null == h.show && (h.show = !1), "cross" === o) {
            var c = l.get("label.show");
            if (h.show = null == c || c, !s) {
                var d = u.lineStyle = l.get("crossStyle");
                d && a(h, d.textStyle)
            }
        }
        return t.model.getModel("axisPointer", new Sr(u, i, r))
    }

    function th(t, e) {
        e.eachSeries(function (e) {
            var n = e.coordinateSystem, i = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            n && "none" !== i && !1 !== i && "item" !== i && !1 !== r && !1 !== e.get("axisPointer.show", !0) && Nb(t.coordSysAxesInfo[sh(n.model)], function (t) {
                var i = t.axis;
                n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        }, this)
    }

    function eh(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var o = t[r] || {};
            if (nh(o[i + "AxisId"], n.id) || nh(o[i + "AxisIndex"], n.componentIndex) || nh(o[i + "AxisName"], n.name)) return r
        }
    }

    function nh(t, e) {
        return "all" === t || y(t) && l(t, e) >= 0 || t === e
    }

    function ih(t) {
        var e = rh(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, o = n.get("status"), a = n.get("value");
            null != a && (a = i.parse(a));
            var s = ah(n);
            null == o && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function rh(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[sh(t)]
    }

    function oh(t) {
        var e = rh(t);
        return e && e.axisPointerModel
    }

    function ah(t) {
        return !!t.get("handle.show")
    }

    function sh(t) {
        return t.type + "||" + t.id
    }

    function lh(t, e, n, i, r, o) {
        var a = Bb.getAxisPointerClass(t.axisPointerClass);
        if (a) {
            var s = oh(e);
            s ? (t._axisPointer || (t._axisPointer = new a)).render(e, s, i, o) : uh(t, i)
        }
    }

    function uh(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), t._axisPointer = null
    }

    function hh(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, r = e.axis, o = {}, a = r.getAxesOnZeroOf()[0], s = r.position,
            l = a ? "onZero" : s, u = r.dim, h = i.getRect(), c = [h.x, h.x + h.width, h.y, h.y + h.height],
            d = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (a) {
            var g = a.toGlobalCoord(a.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
        }
        o.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        var m = {top: -1, bottom: 1, left: -1, right: 1};
        o.labelDirection = o.tickDirection = o.nameDirection = m[s], o.labelOffset = a ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection), T(n.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
        var v = e.get("axisLabel.rotate");
        return o.labelRotate = "top" === l ? -v : v, o.z2 = 1, o
    }

    function ch(t, e, n, i, r, o, a) {
        or(t, e, n.getModel("label"), n.getModel("emphasis.label"), {
            labelFetcher: r,
            labelDataIndex: o,
            defaultText: tu(r.getData(), o),
            isRectText: !0,
            autoColor: i
        }), dh(t), dh(e)
    }

    function dh(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }

    function fh(t, e, n) {
        n.style.text = null, gr(n, {shape: {width: 0}}, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function ph(t, e, n) {
        n.style.text = null, gr(n, {shape: {r: n.shape.r0}}, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function gh(t, e, n, i, r, o, s, l) {
        var u = e.getItemVisual(n, "color"), h = e.getItemVisual(n, "opacity"), c = i.getModel("itemStyle"),
            d = i.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(a({fill: u, opacity: h}, c.getBarItemStyle()));
        var f = i.getShallow("cursor");
        f && t.attr("cursor", f);
        var p = s ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || ch(t.style, d, i, u, o, n, p), ir(t, d)
    }

    function mh(t, e) {
        var n = t.get(Ub) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height))
    }

    function vh(t, e, n) {
        var i = t.getData(), r = [], o = i.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - o] = i.getLayout("valueAxisStart");
        var a = new jb({shape: {points: i.getLayout("largePoints")}, incremental: !!n, __startPoint: r, __valueIdx: o});
        e.add(a), yh(a, t, i)
    }

    function yh(t, e, n) {
        var i = n.getVisual("borderColor") || n.getVisual("color"),
            r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
        t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
    }

    function xh(t, e, n, i) {
        var r = e.getData(), o = this.dataIndex, a = r.getName(o), s = e.get("selectedOffset");
        i.dispatchAction({type: "pieToggleSelect", from: t, name: a, seriesId: e.id}), r.each(function (t) {
            _h(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
        })
    }

    function _h(t, e, n, i, r) {
        var o = (e.startAngle + e.endAngle) / 2, a = Math.cos(o), s = Math.sin(o), l = n ? i : 0, u = [a * l, s * l];
        r ? t.animate().when(200, {position: u}).start("bounceOut") : t.attr("position", u)
    }

    function wh(t, e) {
        function n() {
            o.ignore = o.hoverIgnore, a.ignore = a.hoverIgnore
        }

        function i() {
            o.ignore = o.normalIgnore, a.ignore = a.normalIgnore
        }

        Jg.call(this);
        var r = new ly({z2: 2}), o = new fy, a = new ry;
        this.add(r), this.add(o), this.add(a), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
    }

    function bh(t, e, n, i, r, o, a) {
        function s(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) ;
        }

        function l(t, e, n, i, r, o) {
            for (var a = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++) if ("center" !== t[s].position) {
                var u = Math.abs(t[s].y - i), h = t[s].len, c = t[s].len2,
                    d = u < r + h ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - n);
                e && d >= a && (d = a - 10), !e && d <= a && (d = a + 10), t[s].x = n + d * o, a = d
            }
        }

        t.sort(function (t, e) {
            return t.y - e.y
        });
        for (var u, h = 0, c = t.length, d = [], f = [], p = 0; p < c; p++) (u = t[p].y - h) < 0 && function (e, n, i, r) {
            for (var o = e; o < n; o++) if (t[o].y += i, o > e && o + 1 < n && t[o + 1].y > t[o].y + t[o].height) return void s(o, i / 2);
            s(n - 1, i / 2)
        }(p, c, -u), h = t[p].y + t[p].height;
        a - h < 0 && s(c - 1, h - a);
        for (p = 0; p < c; p++) t[p].y >= n ? f.push(t[p]) : d.push(t[p]);
        l(d, !1, e, n, i, r), l(f, !0, e, n, i, r)
    }

    function Sh(t, e, n, i, r, o) {
        for (var a = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? a.push(t[l]) : s.push(t[l]);
        bh(s, e, n, i, 1, r, o), bh(a, e, n, i, -1, r, o);
        for (l = 0; l < t.length; l++) {
            var u = t[l].linePoints;
            if (u) {
                var h = u[1][0] - u[2][0];
                t[l].x < e ? u[2][0] = t[l].x + 3 : u[2][0] = t[l].x - 3, u[1][1] = u[2][1] = t[l].y, u[1][0] = u[2][0] + h
            }
        }
    }

    function Mh() {
        this.group = new Jg
    }

    function Ih(t, e, n, i) {
        var r = n.type, o = new (0, ky[r.charAt(0).toUpperCase() + r.slice(1)])(n);
        e.add(o), i.set(t, o), o.__ecGraphicId = t
    }

    function Th(t, e) {
        var n = t && t.parent;
        n && ("group" === t.type && t.traverse(function (t) {
            Th(t, e)
        }), e.removeKey(t.__ecGraphicId), n.remove(t))
    }

    function Ch(t) {
        return t = o({}, t), d(["id", "parentId", "$action", "hv", "bounding"].concat($y), function (e) {
            delete t[e]
        }), t
    }

    function Ah(t, e) {
        var n;
        return d(e, function (e) {
            null != t[e] && "auto" !== t[e] && (n = !0)
        }), n
    }

    function Dh(t, e) {
        var n = t.exist;
        if (e.id = t.keyInfo.id, !e.type && n && (e.type = n.type), null == e.parentId) {
            var i = e.parentOption;
            i ? e.parentId = i.id : n && (e.parentId = n.parentId)
        }
        e.parentOption = null
    }

    function kh(t, e, n) {
        var r = o({}, n), a = t[e], s = n.$action || "merge";
        "merge" === s ? a ? (i(a, r, !0), Jr(a, r, {ignoreSize: !0}), eo(n, a)) : t[e] = r : "replace" === s ? t[e] = r : "remove" === s && a && (t[e] = null)
    }

    function Ph(t, e) {
        t && (t.hv = e.hv = [Ah(e, ["left", "right"]), Ah(e, ["top", "bottom"])], "group" === t.type && (null == t.width && (t.width = e.width = 0), null == t.height && (t.height = e.height = 0)))
    }

    function Lh(t, e, n) {
        var i = t.eventData;
        t.silent || t.ignore || i || (i = t.eventData = {
            componentType: "graphic",
            componentIndex: e.componentIndex,
            name: t.name
        }), i && (i.info = t.info)
    }

    function Oh(t, e, n, i, r) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e)) if (t.involveSeries) {
            var s = zh(e, t), l = s.payloadBatch, u = s.snapToValue;
            l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u)
        } else n.showPointer(t, e)
    }

    function zh(t, e) {
        var n = e.axis, i = n.dim, r = t, o = [], a = Number.MAX_VALUE, s = -1;
        return aS(e.seriesModels, function (e, l) {
            var u, h, c = e.getData().mapDimension(i, !0);
            if (e.getAxisTooltipData) {
                var d = e.getAxisTooltipData(c, t, n);
                h = d.dataIndices, u = d.nestestValue
            } else {
                if (!(h = e.getData().indicesOfNearest(c[0], t, "category" === n.type ? .5 : null)).length) return;
                u = e.getData().get(c[0], h[0])
            }
            if (null != u && isFinite(u)) {
                var f = t - u, p = Math.abs(f);
                p <= a && ((p < a || f >= 0 && s < 0) && (a = p, s = f, r = u, o.length = 0), aS(h, function (t) {
                    o.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: o, snapToValue: r}
    }

    function Eh(t, e, n, i) {
        t[e.key] = {value: n, payloadBatch: i}
    }

    function Nh(t, e, n, i) {
        var r = n.payloadBatch, o = e.axis, a = o.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, u = sh(l), h = t.map[u];
            h || (h = t.map[u] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(h)), h.dataByAxis.push({
                axisDim: o.dim,
                axisIndex: a.componentIndex,
                axisType: a.type,
                axisId: a.id,
                value: i,
                valueLabelOpt: {precision: s.get("label.precision"), formatter: s.get("label.formatter")},
                seriesDataIndices: r.slice()
            })
        }
    }

    function Rh(t, e, n) {
        var i = n.axesInfo = [];
        aS(e, function (e, n) {
            var r = e.axisPointerModel.option, o = t[n];
            o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function Bh(t, e, n, i) {
        if (!Hh(e) && t.list.length) {
            var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
            i({
                type: "showTip",
                escapeConnect: !0,
                x: e[0],
                y: e[1],
                tooltipOption: n.tooltipOption,
                position: n.position,
                dataIndexInside: r.dataIndexInside,
                dataIndex: r.dataIndex,
                seriesIndex: r.seriesIndex,
                dataByCoordSys: t.list
            })
        } else i({type: "hideTip"})
    }

    function Fh(t, e, n) {
        var i = n.getZr(), r = lS(i).axisPointerLastHighlights || {}, o = lS(i).axisPointerLastHighlights = {};
        aS(t, function (t, e) {
            var n = t.axisPointerModel.option;
            "show" === n.status && aS(n.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                o[e] = t
            })
        });
        var a = [], s = [];
        d(r, function (t, e) {
            !o[e] && s.push(t)
        }), d(o, function (t, e) {
            !r[e] && a.push(t)
        }), s.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: s
        }), a.length && n.dispatchAction({type: "highlight", escapeConnect: !0, batch: a})
    }

    function Vh(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
        }
    }

    function Wh(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
    }

    function Hh(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    function Gh(t, e, n) {
        if (!Xp.node) {
            var i = e.getZr();
            uS(i).records || (uS(i).records = {}), Zh(i, e), (uS(i).records[t] || (uS(i).records[t] = {})).handler = n
        }
    }

    function Zh(t, e) {
        function n(n, i) {
            t.on(n, function (n) {
                var r = jh(e);
                hS(uS(t).records, function (t) {
                    t && i(t, n, r.dispatchAction)
                }), Uh(r.pendings, e)
            })
        }

        uS(t).initialized || (uS(t).initialized = !0, n("click", v(Yh, "click")), n("mousemove", v(Yh, "mousemove")), n("globalout", Xh))
    }

    function Uh(t, e) {
        var n, i = t.showTip.length, r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
    }

    function Xh(t, e, n) {
        t.handler("leave", null, n)
    }

    function Yh(t, e, n, i) {
        e.handler(t, n, i)
    }

    function jh(t) {
        var e = {showTip: [], hideTip: []}, n = function (i) {
            var r = e[i.type];
            r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
        };
        return {dispatchAction: n, pendings: e}
    }

    function qh(t, e) {
        if (!Xp.node) {
            var n = e.getZr();
            (uS(n).records || {})[t] && (uS(n).records[t] = null)
        }
    }

    function $h() {
    }

    function Kh(t, e, n, i) {
        Qh(dS(n).lastProp, i) || (dS(n).lastProp = i, e ? gr(n, i, t) : (n.stopAnimation(), n.attr(i)))
    }

    function Qh(t, e) {
        if (w(t) && w(e)) {
            var n = !0;
            return d(e, function (e, i) {
                n = n && Qh(t[i], e)
            }), !!n
        }
        return t === e
    }

    function Jh(t, e) {
        t[e.get("label.show") ? "show" : "hide"]()
    }

    function tc(t) {
        return {position: t.position.slice(), rotation: t.rotation || 0}
    }

    function ec(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
        })
    }

    function nc(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle()).fill = null : "shadow" === n && ((e = i.getAreaStyle()).stroke = null), e
    }

    function ic(t, e, n, i, r) {
        var o = oc(n.get("value"), e.axis, e.ecModel, n.get("seriesDataIndices"), {
                precision: n.get("label.precision"),
                formatter: n.get("label.formatter")
            }), a = n.getModel("label"), s = Wy(a.get("padding") || 0), l = a.getFont(), u = Se(o, l), h = r.position,
            c = u.width + s[1] + s[3], d = u.height + s[0] + s[2], f = r.align;
        "right" === f && (h[0] -= c), "center" === f && (h[0] -= c / 2);
        var p = r.verticalAlign;
        "bottom" === p && (h[1] -= d), "middle" === p && (h[1] -= d / 2), rc(h, c, d, i);
        var g = a.get("backgroundColor");
        g && "auto" !== g || (g = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: c,
                height: d,
                r: a.get("borderRadius")
            },
            position: h.slice(),
            style: {
                text: o,
                textFont: l,
                textFill: a.getTextColor(),
                textPosition: "inside",
                fill: g,
                stroke: a.get("borderColor") || "transparent",
                lineWidth: a.get("borderWidth") || 0,
                shadowBlur: a.get("shadowBlur"),
                shadowColor: a.get("shadowColor"),
                shadowOffsetX: a.get("shadowOffsetX"),
                shadowOffsetY: a.get("shadowOffsetY")
            },
            z2: 10
        }
    }

    function rc(t, e, n, i) {
        var r = i.getWidth(), o = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function oc(t, e, n, i, r) {
        t = e.scale.parse(t);
        var o = e.scale.getLabel(t, {precision: r.precision}), a = r.formatter;
        if (a) {
            var s = {value: Cl(e, t), seriesData: []};
            d(i, function (t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r)
            }), _(a) ? o = a.replace("{value}", o) : x(a) && (o = a(s))
        }
        return o
    }

    function ac(t, e, n) {
        var i = ft();
        return yt(i, i, n.rotation), vt(i, i, n.position), yr([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
    }

    function sc(t, e, n, i, r, o) {
        var a = Ob.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = r.get("label.margin"), ic(e, i, r, o, {
            position: ac(i.axis, t, n),
            align: a.textAlign,
            verticalAlign: a.textVerticalAlign
        })
    }

    function lc(t, e, n) {
        return n = n || 0, {x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n]}
    }

    function uc(t, e, n) {
        return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
    }

    function hc(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
    }

    function cc(t) {
        return "x" === t.dim ? 0 : 1
    }

    function dc(t) {
        var e = "left " + t + "s cubic-bezier(0.23, 1, 0.32, 1),top " + t + "s cubic-bezier(0.23, 1, 0.32, 1)";
        return f(xS, function (t) {
            return t + "transition:" + e
        }).join(";")
    }

    function fc(t) {
        var e = [], n = t.get("fontSize"), i = t.getTextColor();
        return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), vS(["decoration", "align"], function (n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i)
        }), e.join(";")
    }

    function pc(t) {
        var e = [], n = t.get("transitionDuration"), i = t.get("backgroundColor"), r = t.getModel("textStyle"),
            o = t.get("padding");
        return n && e.push(dc(n)), i && (Xp.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Rt(i)), e.push("filter:alpha(opacity=70)"))), vS(["width", "color", "radius"], function (n) {
            var i = "border-" + n, r = yS(i), o = t.get(r);
            null != o && e.push(i + ":" + o + ("color" === n ? "" : "px"))
        }), e.push(fc(r)), null != o && e.push("padding:" + Wy(o).join("px ") + "px"), e.join(";") + ";"
    }

    function gc(t, e) {
        if (Xp.wxa) return null;
        var n = document.createElement("div"), i = this._zr = e.getZr();
        this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        n.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
        }, n.onmousemove = function (e) {
            if (e = e || window.event, !r._enterable) {
                var n = i.handler;
                ot(t, e, !0), n.dispatch("mousemove", e)
            }
        }, n.onmouseleave = function () {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
        }
    }

    function mc(t) {
        this._zr = t.getZr(), this._show = !1, this._hideTimeout
    }

    function vc(t) {
        for (var e = t.pop(); t.length;) {
            var n = t.pop();
            n && (Sr.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {formatter: n}), e = new Sr(n, e, e.ecModel))
        }
        return e
    }

    function yc(t, e) {
        return t.dispatchAction || m(e.dispatchAction, e)
    }

    function xc(t, e, n, i, r, o, a) {
        var s = n.getOuterSize(), l = s.width, u = s.height;
        return null != o && (t + l + o > i ? t -= l + o : t += o), null != a && (e + u + a > r ? e -= u + a : e += a), [t, e]
    }

    function _c(t, e, n, i, r) {
        var o = n.getOuterSize(), a = o.width, s = o.height;
        return t = Math.min(t + a, i) - a, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function wc(t, e, n) {
        var i = n[0], r = n[1], o = 0, a = 0, s = e.width, l = e.height;
        switch (t) {
            case"inside":
                o = e.x + s / 2 - i / 2, a = e.y + l / 2 - r / 2;
                break;
            case"top":
                o = e.x + s / 2 - i / 2, a = e.y - r - 5;
                break;
            case"bottom":
                o = e.x + s / 2 - i / 2, a = e.y + l + 5;
                break;
            case"left":
                o = e.x - i - 5, a = e.y + l / 2 - r / 2;
                break;
            case"right":
                o = e.x + s + 5, a = e.y + l / 2 - r / 2
        }
        return [o, a]
    }

    function bc(t) {
        return "center" === t || "middle" === t
    }

    function Sc(t, e, n) {
        var i, r = {}, o = "toggleSelected" === t;
        return n.eachComponent("legend", function (n) {
            o && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name)), d(n.getData(), function (t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var i = n.isSelected(e);
                    r.hasOwnProperty(e) ? r[e] = r[e] && i : r[e] = i
                }
            })
        }), {name: e.name, selected: r}
    }

    function Mc(t, e, n) {
        var i = e.getBoxLayoutParams(), r = e.get("padding"), o = {width: n.getWidth(), height: n.getHeight()},
            a = Kr(i, o, r);
        Qy(e.get("orient"), t, e.get("itemGap"), a.width, a.height), Qr(t, i, o, r)
    }

    function Ic(t, e) {
        var n = Wy(e.get("padding")), i = e.getItemStyle(["color", "opacity"]);
        return i.fill = e.get("backgroundColor"), t = new py({
            shape: {
                x: t.x - n[3],
                y: t.y - n[0],
                width: t.width + n[1] + n[3],
                height: t.height + n[0] + n[2],
                r: e.get("borderRadius")
            }, style: i, silent: !0, z2: -1
        })
    }

    function Tc(t, e) {
        e.dispatchAction({type: "legendToggleSelect", name: t})
    }

    function Cc(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || n.dispatchAction({type: "highlight", seriesName: t, name: e, excludeSeriesId: i})
    }

    function Ac(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || n.dispatchAction({type: "downplay", seriesName: t, name: e, excludeSeriesId: i})
    }

    function Dc(t, e, n) {
        var i = [1, 1];
        i[t.getOrient().index] = 0, Jr(e, n, {type: "box", ignoreSize: i})
    }

    function kc(t) {
        In(t, "label", ["show"])
    }

    function Pc(t) {
        return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
    }

    function Lc(t) {
        return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
    }

    function Oc(t, e, n, i, r, o) {
        var a = [], s = Ks(e, i) ? e.getCalculationInfo("stackResultDimension") : i, l = Fc(e, s, t),
            u = e.indicesOfNearest(s, l)[0];
        a[r] = e.get(n, u), a[o] = e.get(i, u);
        var h = Lr(e.get(i, u));
        return (h = Math.min(h, 20)) >= 0 && (a[o] = +a[o].toFixed(h)), a
    }

    function zc(t, e) {
        var i = t.getData(), r = t.coordinateSystem;
        if (e && !Lc(e) && !y(e.coord) && r) {
            var o = r.dimensions, a = Ec(e, i, r, t);
            if ((e = n(e)).type && FS[e.type] && a.baseAxis && a.valueAxis) {
                var s = RS(o, a.baseAxis.dim), l = RS(o, a.valueAxis.dim);
                e.coord = FS[e.type](i, a.baseDataDim, a.valueDataDim, s, l), e.value = e.coord[l]
            } else {
                for (var u = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], h = 0; h < 2; h++) FS[u[h]] && (u[h] = Fc(i, i.mapDimension(o[h]), u[h]));
                e.coord = u
            }
        }
        return e
    }

    function Ec(t, e, n, i) {
        var r = {};
        return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = n.getAxis(Nc(i, r.valueDataDim)), r.baseAxis = n.getOtherAxis(r.valueAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim)) : (r.baseAxis = i.getBaseAxis(), r.valueAxis = n.getOtherAxis(r.baseAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim), r.valueDataDim = e.mapDimension(r.valueAxis.dim)), r
    }

    function Nc(t, e) {
        var n = t.getData(), i = n.dimensions;
        e = n.getDimension(e);
        for (var r = 0; r < i.length; r++) {
            var o = n.getDimensionInfo(i[r]);
            if (o.name === e) return o.coordDim
        }
    }

    function Rc(t, e) {
        return !(t && t.containData && e.coord && !Pc(e)) || t.containData(e.coord)
    }

    function Bc(t, e, n, i) {
        return i < 2 ? t.coord && t.coord[i] : t.value
    }

    function Fc(t, e, n) {
        if ("average" === n) {
            var i = 0, r = 0;
            return t.each(e, function (t, e) {
                isNaN(t) || (i += t, r++)
            }), i / r
        }
        return "median" === n ? t.getMedian(e) : t.getDataExtent(e, !0)["max" === n ? 1 : 0]
    }

    function Vc(t, e, n) {
        var i = e.coordinateSystem;
        t.each(function (r) {
            var o, a = t.getItemModel(r), s = Dr(a.get("x"), n.getWidth()), l = Dr(a.get("y"), n.getHeight());
            if (isNaN(s) || isNaN(l)) {
                if (e.getMarkerPosition) o = e.getMarkerPosition(t.getValues(t.dimensions, r)); else if (i) {
                    var u = t.get(i.dimensions[0], r), h = t.get(i.dimensions[1], r);
                    o = i.dataToPoint([u, h])
                }
            } else o = [s, l];
            isNaN(s) || (o[0] = s), isNaN(l) || (o[1] = l), t.setItemLayout(r, o)
        })
    }

    function Wc(t, e, n) {
        var i;
        i = t ? f(t && t.dimensions, function (t) {
            return a({name: t}, e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {})
        }) : [{name: "value", type: "float"}];
        var r = new uw(i, n), o = f(n.get("data"), v(zc, e));
        return t && (o = g(o, v(Rc, t))), r.initData(o, null, t ? Bc : function (t) {
            return t.value
        }), r
    }

    function Hc(t) {
        return isNaN(+t.cpx1) || isNaN(+t.cpy1)
    }

    function Gc(t) {
        return "_" + t + "Type"
    }

    function Zc(t, e, n) {
        var i = e.getItemVisual(n, "color"), r = e.getItemVisual(n, t), o = e.getItemVisual(n, t + "Size");
        if (r && "none" !== r) {
            y(o) || (o = [o, o]);
            var a = Pl(r, -o[0] / 2, -o[1] / 2, o[0], o[1], i);
            return a.name = t, a
        }
    }

    function Uc(t) {
        var e = new GS({name: "line"});
        return Xc(e.shape, t), e
    }

    function Xc(t, e) {
        var n = e[0], i = e[1], r = e[2];
        t.x1 = n[0], t.y1 = n[1], t.x2 = i[0], t.y2 = i[1], t.percent = 1, r ? (t.cpx1 = r[0], t.cpy1 = r[1]) : (t.cpx1 = NaN, t.cpy1 = NaN)
    }

    function Yc(t, e, n) {
        Jg.call(this), this._createLine(t, e, n)
    }

    function jc(t) {
        this._ctor = t || Yc, this.group = new Jg
    }

    function qc(t, e, n, i) {
        if (Jc(e.getItemLayout(n))) {
            var r = new t._ctor(e, n, i);
            e.setItemGraphicEl(n, r), t.group.add(r)
        }
    }

    function $c(t, e, n, i, r, o) {
        var a = e.getItemGraphicEl(i);
        Jc(n.getItemLayout(r)) ? (a ? a.updateData(n, r, o) : a = new t._ctor(n, r, o), n.setItemGraphicEl(r, a), t.group.add(a)) : t.group.remove(a)
    }

    function Kc(t) {
        var e = t.hostModel;
        return {
            lineStyle: e.getModel("lineStyle").getLineStyle(),
            hoverLineStyle: e.getModel("emphasis.lineStyle").getLineStyle(),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label")
        }
    }

    function Qc(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function Jc(t) {
        return !Qc(t[0]) && !Qc(t[1])
    }

    function td(t) {
        return !isNaN(t) && !isFinite(t)
    }

    function ed(t, e, n, i) {
        var r = 1 - t, o = i.dimensions[t];
        return td(e[r]) && td(n[r]) && e[t] === n[t] && i.getAxis(o).containData(e[t])
    }

    function nd(t, e) {
        if ("cartesian2d" === t.type) {
            var n = e[0].coord, i = e[1].coord;
            if (n && i && (ed(1, n, i, t) || ed(0, n, i, t))) return !0
        }
        return Rc(t, e[0]) && Rc(t, e[1])
    }

    function id(t, e, n, i, r) {
        var o, a = i.coordinateSystem, s = t.getItemModel(e), l = Dr(s.get("x"), r.getWidth()),
            u = Dr(s.get("y"), r.getHeight());
        if (isNaN(l) || isNaN(u)) {
            if (i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(t.dimensions, e)); else {
                var h = a.dimensions, c = t.get(h[0], e), d = t.get(h[1], e);
                o = a.dataToPoint([c, d])
            }
            if ("cartesian2d" === a.type) {
                var f = a.getAxis("x"), p = a.getAxis("y"), h = a.dimensions;
                td(t.get(h[0], e)) ? o[0] = f.toGlobalCoord(f.getExtent()[n ? 0 : 1]) : td(t.get(h[1], e)) && (o[1] = p.toGlobalCoord(p.getExtent()[n ? 0 : 1]))
            }
            isNaN(l) || (o[0] = l), isNaN(u) || (o[1] = u)
        } else o = [l, u];
        t.setItemLayout(e, o)
    }

    function rd(t, e, n) {
        var i;
        i = t ? f(t && t.dimensions, function (t) {
            return a({name: t}, e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {})
        }) : [{name: "value", type: "float"}];
        var r = new uw(i, n), o = new uw(i, n), s = new uw([], n), l = f(n.get("data"), v(YS, e, t, n));
        t && (l = g(l, v(nd, t)));
        var u = t ? Bc : function (t) {
            return t.value
        };
        return r.initData(f(l, function (t) {
            return t[0]
        }), null, u), o.initData(f(l, function (t) {
            return t[1]
        }), null, u), s.initData(f(l, function (t) {
            return t[2]
        })), s.hasItemOption = !0, {from: r, to: o, line: s}
    }

    function od(t) {
        return !isNaN(t) && !isFinite(t)
    }

    function ad(t, e, n, i) {
        var r = 1 - t;
        return od(e[r]) && od(n[r])
    }

    function sd(t, e) {
        var n = e.coord[0], i = e.coord[1];
        return !("cartesian2d" !== t.type || !n || !i || !ad(1, n, i, t) && !ad(0, n, i, t)) || (Rc(t, {
            coord: n,
            x: e.x0,
            y: e.y0
        }) || Rc(t, {coord: i, x: e.x1, y: e.y1}))
    }

    function ld(t, e, n, i, r) {
        var o, a = i.coordinateSystem, s = t.getItemModel(e), l = Dr(s.get(n[0]), r.getWidth()),
            u = Dr(s.get(n[1]), r.getHeight());
        if (isNaN(l) || isNaN(u)) {
            if (i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(n, e)); else {
                var h = [f = t.get(n[0], e), p = t.get(n[1], e)];
                a.clampData && a.clampData(h, h), o = a.dataToPoint(h, !0)
            }
            if ("cartesian2d" === a.type) {
                var c = a.getAxis("x"), d = a.getAxis("y"), f = t.get(n[0], e), p = t.get(n[1], e);
                od(f) ? o[0] = c.toGlobalCoord(c.getExtent()["x0" === n[0] ? 0 : 1]) : od(p) && (o[1] = d.toGlobalCoord(d.getExtent()["y0" === n[1] ? 0 : 1]))
            }
            isNaN(l) || (o[0] = l), isNaN(u) || (o[1] = u)
        } else o = [l, u];
        return o
    }

    function ud(t, e, n) {
        var i, r, o = ["x0", "y0", "x1", "y1"];
        t ? (i = f(t && t.dimensions, function (t) {
            var n = e.getData();
            return a({name: t}, n.getDimensionInfo(n.mapDimension(t)) || {})
        }), r = new uw(f(o, function (t, e) {
            return {name: t, type: i[e % 2].type}
        }), n)) : r = new uw(i = [{name: "value", type: "float"}], n);
        var s = f(n.get("data"), v(jS, e, t, n));
        t && (s = g(s, v(sd, t)));
        var l = t ? function (t, e, n, i) {
            return t.coord[Math.floor(i / 2)][i % 2]
        } : function (t) {
            return t.value
        };
        return r.initData(s, null, l), r.hasItemOption = !0, r
    }

    function hd(t) {
        return l($S, t) >= 0
    }

    function cd(t, e, n) {
        function i(t, e) {
            return l(e.nodes, t) >= 0
        }

        function r(t, i) {
            var r = !1;
            return e(function (e) {
                d(n(t, e) || [], function (t) {
                    i.records[e.name][t] && (r = !0)
                })
            }), r
        }

        function o(t, i) {
            i.nodes.push(t), e(function (e) {
                d(n(t, e) || [], function (t) {
                    i.records[e.name][t] = !0
                })
            })
        }

        return function (n) {
            var a = {nodes: [], records: {}};
            if (e(function (t) {
                    a.records[t.name] = {}
                }), !n) return a;
            o(n, a);
            var s;
            do {
                s = !1, t(function (t) {
                    !i(t, a) && r(t, a) && (o(t, a), s = !0)
                })
            } while (s);
            return a
        }
    }

    function dd(t, e, n) {
        var i = [1 / 0, -1 / 0];
        return QS(n, function (t) {
            var n = t.getData();
            n && QS(n.mapDimension(e, !0), function (t) {
                var e = n.getApproximateExtent(t);
                e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
            })
        }), i[1] < i[0] && (i = [NaN, NaN]), fd(t, i), i
    }

    function fd(t, e) {
        var n = t.getAxisModel(), i = n.getMin(!0), r = "category" === n.get("type"), o = r && n.getCategories().length;
        null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : r && (e[0] = o > 0 ? 0 : NaN);
        var a = n.getMax(!0);
        return null != a && "dataMax" !== a && "function" != typeof a ? e[1] = a : r && (e[1] = o > 0 ? o - 1 : NaN), n.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e
    }

    function pd(t, e) {
        var n = t.getAxisModel(), i = t._percentWindow, r = t._valueWindow;
        if (i) {
            var o = zr(r, [0, 500]);
            o = Math.min(o, 20);
            var a = e || 0 === i[0] && 100 === i[1];
            n.setRange(a ? null : +r[0].toFixed(o), a ? null : +r[1].toFixed(o))
        }
    }

    function gd(t) {
        var e = t._minMaxSpan = {}, n = t._dataZoomModel;
        QS(["min", "max"], function (i) {
            e[i + "Span"] = n.get(i + "Span");
            var r = n.get(i + "ValueSpan");
            if (null != r && (e[i + "ValueSpan"] = r, null != (r = t.getAxisModel().axis.scale.parse(r)))) {
                var o = t._dataExtent;
                e[i + "Span"] = Ar(o[0] + r, o, [0, 100], !0)
            }
        })
    }

    function md(t) {
        var e = {};
        return eM(["start", "end", "startValue", "endValue", "throttle"], function (n) {
            t.hasOwnProperty(n) && (e[n] = t[n])
        }), e
    }

    function vd(t, e) {
        var n = t._rangePropMode, i = t.get("rangeMode");
        eM([["start", "startValue"], ["end", "endValue"]], function (t, r) {
            var o = null != e[t[0]], a = null != e[t[1]];
            o && !a ? n[r] = "percent" : !o && a ? n[r] = "value" : i ? n[r] = i[r] : o && (n[r] = "percent")
        })
    }

    function yd(t, e) {
        var n = t[e] - t[1 - e];
        return {span: Math.abs(n), sign: n > 0 ? -1 : n < 0 ? 1 : e ? -1 : 1}
    }

    function xd(t, e) {
        return Math.min(e[1], Math.max(e[0], t))
    }

    function _d(t) {
        return {x: "y", y: "x", radius: "angle", angle: "radius"}[t]
    }

    function wd(t) {
        return "vertical" === t ? "ns-resize" : "ew-resize"
    }

    function bd(t, e, n) {
        Id(t)[e] = n
    }

    function Sd(t, e, n) {
        var i = Id(t);
        i[e] === n && (i[e] = null)
    }

    function Md(t, e) {
        return !!Id(t)[e]
    }

    function Id(t) {
        return t[gM] || (t[gM] = {})
    }

    function Td(t) {
        this.pointerChecker, this._zr = t, this._opt = {};
        var e = m, i = e(Cd, this), r = e(Ad, this), o = e(Dd, this), s = e(kd, this), l = e(Pd, this);
        pg.call(this), this.setPointerChecker = function (t) {
            this.pointerChecker = t
        }, this.enable = function (e, u) {
            this.disable(), this._opt = a(n(u) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0
            }), null == e && (e = !0), !0 !== e && "move" !== e && "pan" !== e || (t.on("mousedown", i), t.on("mousemove", r), t.on("mouseup", o)), !0 !== e && "scale" !== e && "zoom" !== e || (t.on("mousewheel", s), t.on("pinch", l))
        }, this.disable = function () {
            t.off("mousedown", i), t.off("mousemove", r), t.off("mouseup", o), t.off("mousewheel", s), t.off("pinch", l)
        }, this.dispose = this.disable, this.isDragging = function () {
            return this._dragging
        }, this.isPinching = function () {
            return this._pinching
        }
    }

    function Cd(t) {
        if (!(lt(t) || t.target && t.target.draggable)) {
            var e = t.offsetX, n = t.offsetY;
            this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, this._dragging = !0)
        }
    }

    function Ad(t) {
        if (!lt(t) && zd("moveOnMouseMove", t, this._opt) && this._dragging && "pinch" !== t.gestureEvent && !Md(this._zr, "globalPan")) {
            var e = t.offsetX, n = t.offsetY, i = this._x, r = this._y, o = e - i, a = n - r;
            this._x = e, this._y = n, this._opt.preventDefaultMouseMove && vg(t.event), Od(this, "pan", "moveOnMouseMove", t, {
                dx: o,
                dy: a,
                oldX: i,
                oldY: r,
                newX: e,
                newY: n
            })
        }
    }

    function Dd(t) {
        lt(t) || (this._dragging = !1)
    }

    function kd(t) {
        var e = zd("zoomOnMouseWheel", t, this._opt), n = zd("moveOnMouseWheel", t, this._opt), i = t.wheelDelta,
            r = Math.abs(i), o = t.offsetX, a = t.offsetY;
        if (0 !== i && (e || n)) {
            if (e) {
                var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1;
                Ld(this, "zoom", "zoomOnMouseWheel", t, {scale: i > 0 ? s : 1 / s, originX: o, originY: a})
            }
            if (n) {
                var l = Math.abs(i);
                Ld(this, "scrollMove", "moveOnMouseWheel", t, {
                    scrollDelta: (i > 0 ? 1 : -1) * (l > 3 ? .4 : l > 1 ? .15 : .05),
                    originX: o,
                    originY: a
                })
            }
        }
    }

    function Pd(t) {
        Md(this._zr, "globalPan") || Ld(this, "zoom", null, t, {
            scale: t.pinchScale > 1 ? 1.1 : 1 / 1.1,
            originX: t.pinchX,
            originY: t.pinchY
        })
    }

    function Ld(t, e, n, i, r) {
        t.pointerChecker && t.pointerChecker(i, r.originX, r.originY) && (vg(i.event), Od(t, e, n, i, r))
    }

    function Od(t, e, n, i, r) {
        r.isAvailableBehavior = m(zd, null, n, i), t.trigger(e, r)
    }

    function zd(t, e, n) {
        var i = n[t];
        return !t || i && (!_(i) || e.event[i + "Key"])
    }

    function Ed(t, e) {
        var n = Bd(t), i = e.dataZoomId, r = e.coordId;
        d(n, function (t, n) {
            var o = t.dataZoomInfos;
            o[i] && l(e.allCoordIds, r) < 0 && (delete o[i], t.count--)
        }), Vd(n);
        var o = n[r];
        o || ((o = n[r] = {
            coordId: r,
            dataZoomInfos: {},
            count: 0
        }).controller = Fd(t, o), o.dispatchAction = v(Wd, t)), !o.dataZoomInfos[i] && o.count++, o.dataZoomInfos[i] = e;
        var a = Hd(o.dataZoomInfos);
        o.controller.enable(a.controlType, a.opt), o.controller.setPointerChecker(e.containsPoint), xa(o, "dispatchAction", e.dataZoomModel.get("throttle", !0), "fixRate")
    }

    function Nd(t, e) {
        var n = Bd(t);
        d(n, function (t) {
            t.controller.dispose();
            var n = t.dataZoomInfos;
            n[e] && (delete n[e], t.count--)
        }), Vd(n)
    }

    function Rd(t) {
        return t.type + "\0_" + t.id
    }

    function Bd(t) {
        var e = t.getZr();
        return e[mM] || (e[mM] = {})
    }

    function Fd(t, e) {
        var n = new Td(t.getZr());
        return d(["pan", "zoom", "scrollMove"], function (t) {
            n.on(t, function (n) {
                var i = [];
                d(e.dataZoomInfos, function (r) {
                    if (n.isAvailableBehavior(r.dataZoomModel.option)) {
                        var o = (r.getRange || {})[t], a = o && o(e.controller, n);
                        !r.dataZoomModel.get("disabled", !0) && a && i.push({
                            dataZoomId: r.dataZoomId,
                            start: a[0],
                            end: a[1]
                        })
                    }
                }), i.length && e.dispatchAction(i)
            })
        }), n
    }

    function Vd(t) {
        d(t, function (e, n) {
            e.count || (e.controller.dispose(), delete t[n])
        })
    }

    function Wd(t, e) {
        t.dispatchAction({type: "dataZoom", batch: e})
    }

    function Hd(t) {
        var e, n = {type_true: 2, type_move: 1, type_false: 0, type_undefined: -1}, i = !0;
        return d(t, function (t) {
            var r = t.dataZoomModel, o = !r.get("disabled", !0) && (!r.get("zoomLock", !0) || "move");
            n["type_" + o] > n["type_" + e] && (e = o), i &= r.get("preventDefaultMouseMove", !0)
        }), {
            controlType: e,
            opt: {zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !0, preventDefaultMouseMove: !!i}
        }
    }

    function Gd(t) {
        return function (e, n, i, r) {
            var o = this._range, a = o.slice(), s = e.axisModels[0];
            if (s) {
                var l = t(a, s, e, n, i, r);
                return oM(l, a, [0, 100], "all"), this._range = a, o[0] !== a[0] || o[1] !== a[1] ? a : void 0
            }
        }
    }

    function Zd(t, e) {
        wM[t] = e
    }

    function Ud(t) {
        return wM[t]
    }

    function Xd(t) {
        return 0 === t.indexOf("my")
    }

    function Yd(t) {
        this.model = t
    }

    function jd(t) {
        this.model = t
    }

    function qd(t) {
        var e = {}, n = [], i = [];
        return t.eachRawSeries(function (t) {
            var r = t.coordinateSystem;
            if (!r || "cartesian2d" !== r.type && "polar" !== r.type) n.push(t); else {
                var o = r.getBaseAxis();
                if ("category" === o.type) {
                    var a = o.dim + "_" + o.index;
                    e[a] || (e[a] = {categoryAxis: o, valueAxis: r.getOtherAxis(o), series: []}, i.push({
                        axisDim: o.dim,
                        axisIndex: o.index
                    })), e[a].series.push(t)
                } else n.push(t)
            }
        }), {seriesGroupByCategoryAxis: e, other: n, meta: i}
    }

    function $d(t) {
        var e = [];
        return d(t, function (t, n) {
            var i = t.categoryAxis, r = t.valueAxis.dim, o = [" "].concat(f(t.series, function (t) {
                return t.name
            })), a = [i.model.getCategories()];
            d(t.series, function (t) {
                a.push(t.getRawData().mapArray(r, function (t) {
                    return t
                }))
            });
            for (var s = [o.join(kM)], l = 0; l < a[0].length; l++) {
                for (var u = [], h = 0; h < a.length; h++) u.push(a[h][l]);
                s.push(u.join(kM))
            }
            e.push(s.join("\n"))
        }), e.join("\n\n" + DM + "\n\n")
    }

    function Kd(t) {
        return f(t, function (t) {
            var e = t.getRawData(), n = [t.name], i = [];
            return e.each(e.dimensions, function () {
                for (var t = arguments.length, r = arguments[t - 1], o = e.getName(r), a = 0; a < t - 1; a++) i[a] = arguments[a];
                n.push((o ? o + kM : "") + i.join(kM))
            }), n.join("\n")
        }).join("\n\n" + DM + "\n\n")
    }

    function Qd(t) {
        var e = qd(t);
        return {
            value: g([$d(e.seriesGroupByCategoryAxis), Kd(e.other)], function (t) {
                return t.replace(/[\n\t\s]/g, "")
            }).join("\n\n" + DM + "\n\n"), meta: e.meta
        }
    }

    function Jd(t) {
        return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function tf(t) {
        if (t.slice(0, t.indexOf("\n")).indexOf(kM) >= 0) return !0
    }

    function ef(t) {
        for (var e = t.split(/\n+/g), n = [], i = f(Jd(e.shift()).split(PM), function (t) {
            return {name: t, data: []}
        }), r = 0; r < e.length; r++) {
            var o = Jd(e[r]).split(PM);
            n.push(o.shift());
            for (var a = 0; a < o.length; a++) i[a] && (i[a].data[r] = o[a])
        }
        return {series: i, categories: n}
    }

    function nf(t) {
        for (var e = t.split(/\n+/g), n = Jd(e.shift()), i = [], r = 0; r < e.length; r++) {
            var o, a = Jd(e[r]).split(PM), s = "", l = !1;
            isNaN(a[0]) ? (l = !0, s = a[0], a = a.slice(1), i[r] = {
                name: s,
                value: []
            }, o = i[r].value) : o = i[r] = [];
            for (var u = 0; u < a.length; u++) o.push(+a[u]);
            1 === o.length && (l ? i[r].value = o[0] : i[r] = o[0])
        }
        return {name: n, data: i}
    }

    function rf(t, e) {
        var n = {series: []};
        return d(t.split(new RegExp("\n*" + DM + "\n*", "g")), function (t, i) {
            if (tf(t)) {
                var r = ef(t), o = e[i], a = o.axisDim + "Axis";
                o && (n[a] = n[a] || [], n[a][o.axisIndex] = {data: r.categories}, n.series = n.series.concat(r.series))
            } else {
                r = nf(t);
                n.series.push(r)
            }
        }), n
    }

    function of(t) {
        this._dom = null, this.model = t
    }

    function af(t, e) {
        return f(t, function (t, n) {
            var i = e && e[n];
            return w(i) && !y(i) ? (w(t) && !y(t) && (t = t.value), a({value: t}, i)) : t
        })
    }

    function sf(t) {
        pg.call(this), this._zr = t, this.group = new Jg, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + UM++, this._handlers = {}, OM(XM, function (t, e) {
            this._handlers[e] = m(t, this)
        }, this)
    }

    function lf(t, e) {
        var r = t._zr;
        t._enableGlobalPan || bd(r, WM, t._uid), OM(t._handlers, function (t, e) {
            r.on(e, t)
        }), t._brushType = e.brushType, t._brushOption = i(n(ZM), e, !0)
    }

    function uf(t) {
        var e = t._zr;
        Sd(e, WM, t._uid), OM(t._handlers, function (t, n) {
            e.off(n, t)
        }), t._brushType = t._brushOption = null
    }

    function hf(t, e) {
        var n = YM[e.brushType].createCover(t, e);
        return n.__brushOption = e, ff(n, e), t.group.add(n), n
    }

    function cf(t, e) {
        var n = gf(e);
        return n.endCreating && (n.endCreating(t, e), ff(e, e.__brushOption)), e
    }

    function df(t, e) {
        var n = e.__brushOption;
        gf(e).updateCoverShape(t, e, n.range, n)
    }

    function ff(t, e) {
        var n = e.z;
        null == n && (n = BM), t.traverse(function (t) {
            t.z = n, t.z2 = n
        })
    }

    function pf(t, e) {
        gf(e).updateCommon(t, e), df(t, e)
    }

    function gf(t) {
        return YM[t.__brushOption.brushType]
    }

    function mf(t, e, n) {
        var i = t._panels;
        if (!i) return !0;
        var r, o = t._transform;
        return OM(i, function (t) {
            t.isTargetByCursor(e, n, o) && (r = t)
        }), r
    }

    function vf(t, e) {
        var n = t._panels;
        if (!n) return !0;
        var i = e.__brushOption.panelId;
        return null == i || n[i]
    }

    function yf(t) {
        var e = t._covers, n = e.length;
        return OM(e, function (e) {
            t.group.remove(e)
        }, t), e.length = 0, !!n
    }

    function xf(t, e) {
        var i = zM(t._covers, function (t) {
            var e = t.__brushOption, i = n(e.range);
            return {brushType: e.brushType, panelId: e.panelId, range: i}
        });
        t.trigger("brush", i, {isEnd: !!e.isEnd, removeOnClick: !!e.removeOnClick})
    }

    function _f(t) {
        var e = t._track;
        if (!e.length) return !1;
        var n = e[e.length - 1], i = e[0], r = n[0] - i[0], o = n[1] - i[1];
        return RM(r * r + o * o, .5) > FM
    }

    function wf(t) {
        var e = t.length - 1;
        return e < 0 && (e = 0), [t[0], t[e]]
    }

    function bf(t, e, n, i) {
        var r = new Jg;
        return r.add(new py({
            name: "main",
            style: Tf(n),
            silent: !0,
            draggable: !0,
            cursor: "move",
            drift: LM(t, e, r, "nswe"),
            ondragend: LM(xf, e, {isEnd: !0})
        })), OM(i, function (n) {
            r.add(new py({
                name: n,
                style: {opacity: 0},
                draggable: !0,
                silent: !0,
                invisible: !0,
                drift: LM(t, e, r, n),
                ondragend: LM(xf, e, {isEnd: !0})
            }))
        }), r
    }

    function Sf(t, e, n, i) {
        var r = i.brushStyle.lineWidth || 0, o = NM(r, VM), a = n[0][0], s = n[1][0], l = a - r / 2, u = s - r / 2,
            h = n[0][1], c = n[1][1], d = h - o + r / 2, f = c - o + r / 2, p = h - a, g = c - s, m = p + r, v = g + r;
        If(t, e, "main", a, s, p, g), i.transformable && (If(t, e, "w", l, u, o, v), If(t, e, "e", d, u, o, v), If(t, e, "n", l, u, m, o), If(t, e, "s", l, f, m, o), If(t, e, "nw", l, u, o, o), If(t, e, "ne", d, u, o, o), If(t, e, "sw", l, f, o, o), If(t, e, "se", d, f, o, o))
    }

    function Mf(t, e) {
        var n = e.__brushOption, i = n.transformable, r = e.childAt(0);
        r.useStyle(Tf(n)), r.attr({
            silent: !i,
            cursor: i ? "move" : "default"
        }), OM(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (n) {
            var r = e.childOfName(n), o = Df(t, n);
            r && r.attr({silent: !i, invisible: !i, cursor: i ? GM[o] + "-resize" : null})
        })
    }

    function If(t, e, n, i, r, o, a) {
        var s = e.childOfName(n);
        s && s.setShape(zf(Of(t, e, [[i, r], [i + o, r + a]])))
    }

    function Tf(t) {
        return a({strokeNoScale: !0}, t.brushStyle)
    }

    function Cf(t, e, n, i) {
        var r = [EM(t, n), EM(e, i)], o = [NM(t, n), NM(e, i)];
        return [[r[0], o[0]], [r[1], o[1]]]
    }

    function Af(t) {
        return vr(t.group)
    }

    function Df(t, e) {
        if (e.length > 1) return ("e" === (i = [Df(t, (e = e.split(""))[0]), Df(t, e[1])])[0] || "w" === i[0]) && i.reverse(), i.join("");
        var n = {left: "w", right: "e", top: "n", bottom: "s"},
            i = xr({w: "left", e: "right", n: "top", s: "bottom"}[e], Af(t));
        return n[i]
    }

    function kf(t, e, n, i, r, o, a, s) {
        var l = i.__brushOption, u = t(l.range), h = Lf(n, o, a);
        OM(r.split(""), function (t) {
            var e = HM[t];
            u[e[0]][e[1]] += h[e[0]]
        }), l.range = e(Cf(u[0][0], u[1][0], u[0][1], u[1][1])), pf(n, i), xf(n, {isEnd: !1})
    }

    function Pf(t, e, n, i, r) {
        var o = e.__brushOption.range, a = Lf(t, n, i);
        OM(o, function (t) {
            t[0] += a[0], t[1] += a[1]
        }), pf(t, e), xf(t, {isEnd: !1})
    }

    function Lf(t, e, n) {
        var i = t.group, r = i.transformCoordToLocal(e, n), o = i.transformCoordToLocal(0, 0);
        return [r[0] - o[0], r[1] - o[1]]
    }

    function Of(t, e, i) {
        var r = vf(t, e);
        return r && !0 !== r ? r.clipPath(i, t._transform) : n(i)
    }

    function zf(t) {
        var e = EM(t[0][0], t[1][0]), n = EM(t[0][1], t[1][1]);
        return {x: e, y: n, width: NM(t[0][0], t[1][0]) - e, height: NM(t[0][1], t[1][1]) - n}
    }

    function Ef(t, e, n) {
        if (t._brushType) {
            var i = t._zr, r = t._covers, o = mf(t, e, n);
            if (!t._dragging) for (var a = 0; a < r.length; a++) {
                var s = r[a].__brushOption;
                if (o && (!0 === o || s.panelId === o.panelId) && YM[s.brushType].contain(r[a], n[0], n[1])) return
            }
            o && i.setCursorStyle("crosshair")
        }
    }

    function Nf(t) {
        var e = t.event;
        e.preventDefault && e.preventDefault()
    }

    function Rf(t, e, n) {
        return t.childOfName("main").contain(e, n)
    }

    function Bf(t, e, i, r) {
        var o, a = t._creatingCover, s = t._creatingPanel, l = t._brushOption;
        if (t._track.push(i.slice()), _f(t) || a) {
            if (s && !a) {
                "single" === l.brushMode && yf(t);
                var u = n(l);
                u.brushType = Ff(u.brushType, s), u.panelId = !0 === s ? null : s.panelId, a = t._creatingCover = hf(t, u), t._covers.push(a)
            }
            if (a) {
                var h = YM[Ff(t._brushType, s)];
                a.__brushOption.range = h.getCreatingRange(Of(t, a, t._track)), r && (cf(t, a), h.updateCommon(t, a)), df(t, a), o = {isEnd: r}
            }
        } else r && "single" === l.brushMode && l.removeOnClick && mf(t, e, i) && yf(t) && (o = {
            isEnd: r,
            removeOnClick: !0
        });
        return o
    }

    function Ff(t, e) {
        return "auto" === t ? e.defaultBrushType : t
    }

    function Vf(t) {
        if (this._dragging) {
            Nf(t);
            var e = Bf(this, t, this.group.transformCoordToLocal(t.offsetX, t.offsetY), !0);
            this._dragging = !1, this._track = [], this._creatingCover = null, e && xf(this, e)
        }
    }

    function Wf(t) {
        return {
            createCover: function (e, n) {
                return bf(LM(kf, function (e) {
                    var n = [e, [0, 100]];
                    return t && n.reverse(), n
                }, function (e) {
                    return e[t]
                }), e, n, [["w", "e"], ["n", "s"]][t])
            }, getCreatingRange: function (e) {
                var n = wf(e);
                return [EM(n[0][t], n[1][t]), NM(n[0][t], n[1][t])]
            }, updateCoverShape: function (e, n, i, r) {
                var o, a = vf(e, n);
                if (!0 !== a && a.getLinearBrushOtherExtent) o = a.getLinearBrushOtherExtent(t, e._transform); else {
                    var s = e._zr;
                    o = [0, [s.getWidth(), s.getHeight()][1 - t]]
                }
                var l = [i, o];
                t && l.reverse(), Sf(e, n, l, r)
            }, updateCommon: Mf, contain: Rf
        }
    }

    function Hf(t, e, n) {
        var i = e.getComponentByElement(t.topTarget), r = i && i.coordinateSystem;
        return i && i !== n && !jM[i.mainType] && r && r.model !== n
    }

    function Gf(t) {
        return t = Xf(t), function (e, n) {
            return wr(e, t)
        }
    }

    function Zf(t, e) {
        return t = Xf(t), function (n) {
            var i = null != e ? e : n, r = i ? t.width : t.height, o = i ? t.x : t.y;
            return [o, o + (r || 0)]
        }
    }

    function Uf(t, e, n) {
        return t = Xf(t), function (i, r, o) {
            return t.contain(r[0], r[1]) && !Hf(i, e, n)
        }
    }

    function Xf(t) {
        return re.create(t)
    }

    function Yf(t, e, n) {
        var i = this._targetInfoList = [], r = {}, o = qf(e, t);
        qM(eI, function (t, e) {
            (!n || !n.include || $M(n.include, e) >= 0) && t(o, i, r)
        })
    }

    function jf(t) {
        return t[0] > t[1] && t.reverse(), t
    }

    function qf(t, e) {
        return zn(t, e, {includeMainTypes: JM})
    }

    function $f(t, e, n, i) {
        var r = n.getAxis(["x", "y"][t]), o = jf(f([0, 1], function (t) {
            return e ? r.coordToData(r.toLocalCoord(i[t])) : r.toGlobalCoord(r.dataToCoord(i[t]))
        })), a = [];
        return a[t] = o, a[1 - t] = [NaN, NaN], {values: o, xyMinMax: a}
    }

    function Kf(t, e, n, i) {
        return [e[0] - i[t] * n[0], e[1] - i[t] * n[1]]
    }

    function Qf(t, e) {
        var n = Jf(t), i = Jf(e), r = [n[0] / i[0], n[1] / i[1]];
        return isNaN(r[0]) && (r[0] = 1), isNaN(r[1]) && (r[1] = 1), r
    }

    function Jf(t) {
        return t ? [t[0][1] - t[0][0], t[1][1] - t[1][0]] : [NaN, NaN]
    }

    function tp(t, e) {
        var n = rp(t);
        aI(e, function (e, i) {
            for (var r = n.length - 1; r >= 0 && !n[r][i]; r--) ;
            if (r < 0) {
                var o = t.queryComponents({mainType: "dataZoom", subType: "select", id: i})[0];
                if (o) {
                    var a = o.getPercentRange();
                    n[0][i] = {dataZoomId: i, start: a[0], end: a[1]}
                }
            }
        }), n.push(e)
    }

    function ep(t) {
        var e = rp(t), n = e[e.length - 1];
        e.length > 1 && e.pop();
        var i = {};
        return aI(n, function (t, n) {
            for (var r = e.length - 1; r >= 0; r--) if (t = e[r][n]) {
                i[n] = t;
                break
            }
        }), i
    }

    function np(t) {
        t[sI] = null
    }

    function ip(t) {
        return rp(t).length
    }

    function rp(t) {
        var e = t[sI];
        return e || (e = t[sI] = [{}]), e
    }

    function op(t, e, n) {
        (this._brushController = new sf(n.getZr())).on("brush", m(this._onBrush, this)).mount(), this._isZoomActive
    }

    function ap(t) {
        var e = {};
        return d(["xAxisIndex", "yAxisIndex"], function (n) {
            e[n] = t[n], null == e[n] && (e[n] = "all"), (!1 === e[n] || "none" === e[n]) && (e[n] = [])
        }), e
    }

    function sp(t, e) {
        t.setIconStatus("back", ip(e) > 1 ? "emphasis" : "normal")
    }

    function lp(t, e, n, i, r) {
        var o = n._isZoomActive;
        i && "takeGlobalCursor" === i.type && (o = "dataZoomSelect" === i.key && i.dataZoomSelectActive), n._isZoomActive = o, t.setIconStatus("zoom", o ? "emphasis" : "normal");
        var a = new Yf(ap(t.option), e, {include: ["grid"]});
        n._brushController.setPanels(a.makePanelOpts(r, function (t) {
            return t.xAxisDeclared && !t.yAxisDeclared ? "lineX" : !t.xAxisDeclared && t.yAxisDeclared ? "lineY" : "rect"
        })).enableBrush(!!o && {brushType: "auto", brushStyle: {lineWidth: 0, fill: "rgba(0,0,0,0.2)"}})
    }

    function up(t) {
        this.model = t
    }

    function hp(t) {
        return pI(t)
    }

    function cp() {
        if (!vI && yI) {
            vI = !0;
            var t = yI.styleSheets;
            t.length < 31 ? yI.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
        }
    }

    function dp(t) {
        return parseInt(t, 10)
    }

    function fp(t, e) {
        cp(), this.root = t, this.storage = e;
        var n = document.createElement("div"), i = document.createElement("div");
        n.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", i.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(n), this._vmlRoot = i, this._vmlViewport = n, this.resize();
        var r = e.delFromStorage, o = e.addToStorage;
        e.delFromStorage = function (t) {
            r.call(e, t), t && t.onRemove && t.onRemove(i)
        }, e.addToStorage = function (t) {
            t.onAdd && t.onAdd(i), o.call(e, t)
        }, this._firstPaint = !0
    }

    function pp(t) {
        return function () {
            Yg('In IE8.0 VML mode painter not support method "' + t + '"')
        }
    }

    function gp(t) {
        return document.createElementNS(QI, t)
    }

    function mp(t) {
        return nT(1e4 * t) / 1e4
    }

    function vp(t) {
        return t < lT && t > -lT
    }

    function yp(t, e) {
        var n = e ? t.textFill : t.fill;
        return null != n && n !== eT
    }

    function xp(t, e) {
        var n = e ? t.textStroke : t.stroke;
        return null != n && n !== eT
    }

    function _p(t, e) {
        e && wp(t, "transform", "matrix(" + tT.call(e, ",") + ")")
    }

    function wp(t, e, n) {
        (!n || "linear" !== n.type && "radial" !== n.type) && ("string" == typeof n && n.indexOf("NaN") > -1 && console.log(n), t.setAttribute(e, n))
    }

    function bp(t, e, n) {
        t.setAttributeNS("http://www.w3.org/1999/xlink", e, n)
    }

    function Sp(t, e, n, i) {
        if (yp(e, n)) {
            var r = n ? e.textFill : e.fill;
            r = "transparent" === r ? eT : r, "none" !== t.getAttribute("clip-path") && r === eT && (r = "rgba(0, 0, 0, 0.002)"), wp(t, "fill", r), wp(t, "fill-opacity", null != e.fillOpacity ? e.fillOpacity * e.opacity : e.opacity)
        } else wp(t, "fill", eT);
        if (xp(e, n)) {
            var o = n ? e.textStroke : e.stroke;
            wp(t, "stroke", o = "transparent" === o ? eT : o), wp(t, "stroke-width", (n ? e.textStrokeWidth : e.lineWidth) / (!n && e.strokeNoScale ? i.getLineScale() : 1)), wp(t, "paint-order", n ? "stroke" : "fill"), wp(t, "stroke-opacity", null != e.strokeOpacity ? e.strokeOpacity : e.opacity), e.lineDash ? (wp(t, "stroke-dasharray", e.lineDash.join(",")), wp(t, "stroke-dashoffset", nT(e.lineDashOffset || 0))) : wp(t, "stroke-dasharray", ""), e.lineCap && wp(t, "stroke-linecap", e.lineCap), e.lineJoin && wp(t, "stroke-linejoin", e.lineJoin), e.miterLimit && wp(t, "stroke-miterlimit", e.miterLimit)
        } else wp(t, "stroke", eT)
    }

    function Mp(t) {
        for (var e = [], n = t.data, i = t.len(), r = 0; r < i;) {
            var o = "", a = 0;
            switch (n[r++]) {
                case JI.M:
                    o = "M", a = 2;
                    break;
                case JI.L:
                    o = "L", a = 2;
                    break;
                case JI.Q:
                    o = "Q", a = 4;
                    break;
                case JI.C:
                    o = "C", a = 6;
                    break;
                case JI.A:
                    var s = n[r++], l = n[r++], u = n[r++], h = n[r++], c = n[r++], d = n[r++], f = n[r++], p = n[r++],
                        g = Math.abs(d), m = vp(g - aT) && !vp(g), v = !1;
                    v = g >= aT || !vp(g) && (d > -oT && d < 0 || d > oT) == !!p;
                    var y = mp(s + u * rT(c)), x = mp(l + h * iT(c));
                    m && (d = p ? aT - 1e-4 : 1e-4 - aT, v = !0, 9 === r && e.push("M", y, x));
                    var _ = mp(s + u * rT(c + d)), w = mp(l + h * iT(c + d));
                    e.push("A", mp(u), mp(h), nT(f * sT), +v, +p, _, w);
                    break;
                case JI.Z:
                    o = "Z";
                    break;
                case JI.R:
                    var _ = mp(n[r++]), w = mp(n[r++]), b = mp(n[r++]), S = mp(n[r++]);
                    e.push("M", _, w, "L", _ + b, w, "L", _ + b, w + S, "L", _, w + S, "L", _, w)
            }
            o && e.push(o);
            for (var M = 0; M < a; M++) e.push(mp(n[r++]))
        }
        return e.join(" ")
    }

    function Ip(t) {
        return "middle" === t ? "middle" : "bottom" === t ? "after-edge" : "hanging"
    }

    function Tp() {
    }

    function Cp(t, e, n, i) {
        for (var r = 0, o = e.length, a = 0, s = 0; r < o; r++) {
            var l = e[r];
            if (l.removed) {
                for (var u = [], h = s; h < s + l.count; h++) u.push(h);
                l.indices = u, s += l.count
            } else {
                for (var u = [], h = a; h < a + l.count; h++) u.push(h);
                l.indices = u, a += l.count, l.added || (s += l.count)
            }
        }
        return e
    }

    function Ap(t) {
        return {newPos: t.newPos, components: t.components.slice(0)}
    }

    function Dp(t, e, n, i, r) {
        this._zrId = t, this._svgRoot = e, this._tagNames = "string" == typeof n ? [n] : n, this._markLabel = i, this._domName = r || "_dom", this.nextId = 0
    }

    function kp(t, e) {
        Dp.call(this, t, e, ["linearGradient", "radialGradient"], "__gradient_in_use__")
    }

    function Pp(t, e) {
        Dp.call(this, t, e, "clipPath", "__clippath_in_use__")
    }

    function Lp(t, e) {
        Dp.call(this, t, e, ["filter"], "__filter_in_use__", "_shadowDom")
    }

    function Op(t) {
        return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY || t.textShadowBlur || t.textShadowOffsetX || t.textShadowOffsetY)
    }

    function zp(t) {
        return parseInt(t, 10)
    }

    function Ep(t) {
        return t instanceof Ii ? uT : t instanceof an ? hT : t instanceof ry ? cT : uT
    }

    function Np(t, e) {
        return e && t && e.parentNode !== t
    }

    function Rp(t, e, n) {
        if (Np(t, e) && n) {
            var i = n.nextSibling;
            i ? t.insertBefore(e, i) : t.appendChild(e)
        }
    }

    function Bp(t, e) {
        if (Np(t, e)) {
            var n = t.firstChild;
            n ? t.insertBefore(e, n) : t.appendChild(e)
        }
    }

    function Fp(t, e) {
        e && t && e.parentNode === t && t.removeChild(e)
    }

    function Vp(t) {
        return t.__textSvgEl
    }

    function Wp(t) {
        return t.__svgEl
    }

    function Hp(t) {
        return function () {
            Yg('In SVG mode painter not support method "' + t + '"')
        }
    }

    var Gp = 2311, Zp = function () {
            return Gp++
        }, Up = {}, Xp = Up = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
            browser: {},
            os: {},
            node: !1,
            wxa: !0,
            canvasSupported: !0,
            svgSupported: !1,
            touchEventsSupported: !0,
            domSupported: !1
        } : "undefined" == typeof document && "undefined" != typeof self ? {
            browser: {},
            os: {},
            node: !1,
            worker: !0,
            canvasSupported: !0,
            domSupported: !1
        } : "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            worker: !1,
            canvasSupported: !0,
            svgSupported: !0,
            domSupported: !1
        } : function (t) {
            var e = {}, n = {}, i = t.match(/Firefox\/([\d.]+)/),
                r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge\/([\d.]+)/),
                a = /micromessenger/i.test(t);
            return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), o && (n.edge = !0, n.version = o[1]), a && (n.weChat = !0), {
                browser: n,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                svgSupported: "undefined" != typeof SVGRect,
                touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
                pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
                domSupported: "undefined" != typeof document
            }
        }(navigator.userAgent), Yp = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        }, jp = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, qp = Object.prototype.toString, $p = Array.prototype, Kp = $p.forEach, Qp = $p.filter, Jp = $p.slice,
        tg = $p.map, eg = $p.reduce, ng = {}, ig = function () {
            return ng.createCanvas()
        };
    ng.createCanvas = function () {
        return document.createElement("canvas")
    };
    var rg, og = "__ec_primitive__";
    E.prototype = {
        constructor: E, get: function (t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null
        }, set: function (t, e) {
            return this.data[t] = e
        }, each: function (t, e) {
            void 0 !== e && (t = m(t, e));
            for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
        }, removeKey: function (t) {
            delete this.data[t]
        }
    };
    var ag = (Object.freeze || Object)({
            $override: e,
            clone: n,
            merge: i,
            mergeAll: r,
            extend: o,
            defaults: a,
            createCanvas: ig,
            getContext: s,
            indexOf: l,
            inherits: u,
            mixin: h,
            isArrayLike: c,
            each: d,
            map: f,
            reduce: p,
            filter: g,
            find: function (t, e, n) {
                if (t && e) for (var i = 0, r = t.length; i < r; i++) if (e.call(n, t[i], i, t)) return t[i]
            },
            bind: m,
            curry: v,
            isArray: y,
            isFunction: x,
            isString: _,
            isObject: w,
            isBuiltInObject: b,
            isTypedArray: S,
            isDom: M,
            eqNaN: I,
            retrieve: T,
            retrieve2: C,
            retrieve3: A,
            slice: D,
            normalizeCssArray: k,
            assert: P,
            trim: L,
            setAsPrimitive: O,
            isPrimitive: z,
            createHashMap: N,
            concatArray: function (t, e) {
                for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
                var r = t.length;
                for (i = 0; i < e.length; i++) n[i + r] = e[i];
                return n
            },
            noop: R
        }), sg = "undefined" == typeof Float32Array ? Array : Float32Array, lg = Z, ug = U, hg = j, cg = q,
        dg = (Object.freeze || Object)({
            create: B,
            copy: F,
            clone: V,
            set: function (t, e, n) {
                return t[0] = e, t[1] = n, t
            },
            add: W,
            scaleAndAdd: H,
            sub: G,
            len: Z,
            length: lg,
            lenSquare: U,
            lengthSquare: ug,
            mul: function (t, e, n) {
                return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
            },
            div: function (t, e, n) {
                return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
            },
            dot: function (t, e) {
                return t[0] * e[0] + t[1] * e[1]
            },
            scale: X,
            normalize: Y,
            distance: j,
            dist: hg,
            distanceSquare: q,
            distSquare: cg,
            negate: function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            },
            lerp: function (t, e, n, i) {
                return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
            },
            applyTransform: $,
            min: K,
            max: Q
        });
    J.prototype = {
        constructor: J, _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(tt(e, t), "dragstart", t.event))
        }, _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX, i = t.offsetY, r = n - this._x, o = i - this._y;
                this._x = n, this._y = i, e.drift(r, o, t), this.dispatchToElement(tt(e, t), "drag", t.event);
                var a = this.findHover(n, i, e).target, s = this._dropTarget;
                this._dropTarget = a, e !== a && (s && a !== s && this.dispatchToElement(tt(s, t), "dragleave", t.event), a && a !== s && this.dispatchToElement(tt(a, t), "dragenter", t.event))
            }
        }, _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(tt(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(tt(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var fg = Array.prototype.slice, pg = function (t) {
        this._$handlers = {}, this._$eventProcessor = t
    };
    pg.prototype = {
        constructor: pg, one: function (t, e, n, i) {
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
            e = et(this, e), r[t] || (r[t] = []);
            for (var o = 0; o < r[t].length; o++) if (r[t][o].h === n) return this;
            return r[t].push({h: n, one: !0, query: e, ctx: i || this}), this
        }, on: function (t, e, n, i) {
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
            e = et(this, e), r[t] || (r[t] = []);
            for (var o = 0; o < r[t].length; o++) if (r[t][o].h === n) return this;
            return r[t].push({h: n, one: !1, query: e, ctx: i || this}), this
        }, isSilent: function (t) {
            var e = this._$handlers;
            return e[t] && e[t].length
        }, off: function (t, e) {
            var n = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, o = n[t].length; r < o; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i
                }
                n[t] && 0 === n[t].length && delete n[t]
            } else delete n[t];
            return this
        }, trigger: function (t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 3 && (i = fg.call(i, 1));
                for (var o = e.length, a = 0; a < o;) {
                    var s = e[a];
                    if (n && n.filter && null != s.query && !n.filter(t, s.query)) a++; else {
                        switch (r) {
                            case 1:
                                s.h.call(s.ctx);
                                break;
                            case 2:
                                s.h.call(s.ctx, i[1]);
                                break;
                            case 3:
                                s.h.call(s.ctx, i[1], i[2]);
                                break;
                            default:
                                s.h.apply(s.ctx, i)
                        }
                        s.one ? (e.splice(a, 1), o--) : a++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this
        }, triggerWithContext: function (t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 4 && (i = fg.call(i, 1, i.length - 1));
                for (var o = i[i.length - 1], a = e.length, s = 0; s < a;) {
                    var l = e[s];
                    if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++; else {
                        switch (r) {
                            case 1:
                                l.h.call(o);
                                break;
                            case 2:
                                l.h.call(o, i[1]);
                                break;
                            case 3:
                                l.h.call(o, i[1], i[2]);
                                break;
                            default:
                                l.h.apply(o, i)
                        }
                        l.one ? (e.splice(s, 1), a--) : s++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this
        }
    };
    var gg = "undefined" != typeof window && !!window.addEventListener,
        mg = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, vg = gg ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        }, yg = "silent";
    ct.prototype.dispose = function () {
    };
    var xg = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        _g = function (t, e, n, i) {
            pg.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new ct, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, J.call(this), this.setHandlerProxy(n)
        };
    _g.prototype = {
        constructor: _g, setHandlerProxy: function (t) {
            this.proxy && this.proxy.dispose(), t && (d(xg, function (e) {
                t.on && t.on(e, this[e], this)
            }, this), t.handler = this), this.proxy = t
        }, mousemove: function (t) {
            var e = t.zrX, n = t.zrY, i = this._hovered, r = i.target;
            r && !r.__zr && (r = (i = this.findHover(i.x, i.y)).target);
            var o = this._hovered = this.findHover(e, n), a = o.target, s = this.proxy;
            s.setCursor && s.setCursor(a ? a.cursor : "default"), r && a !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(o, "mousemove", t), a && a !== r && this.dispatchToElement(o, "mouseover", t)
        }, mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do {
                n = n && n.parentNode
            } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", {event: t})
        }, resize: function (t) {
            this._hovered = {}
        }, dispatch: function (t, e) {
            var n = this[t];
            n && n.call(this, e)
        }, dispose: function () {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        }, setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        }, dispatchToElement: function (t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
                for (var r = "on" + e, o = ut(e, t, n); i && (i[r] && (o.cancelBubble = i[r].call(i, o)), i.trigger(e, o), i = i.parent, !o.cancelBubble);) ;
                o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
                }))
            }
        }, findHover: function (t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {x: t, y: e}, o = i.length - 1; o >= 0; o--) {
                var a;
                if (i[o] !== n && !i[o].ignore && (a = dt(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), a !== yg)) {
                    r.target = i[o];
                    break
                }
            }
            return r
        }
    }, d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        _g.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY), i = n.target;
            if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i; else if ("mouseup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || hg(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }), h(_g, pg), h(_g, J);
    var wg = "undefined" == typeof Float32Array ? Array : Float32Array, bg = (Object.freeze || Object)({
        create: ft,
        identity: pt,
        copy: gt,
        mul: mt,
        translate: vt,
        rotate: yt,
        scale: xt,
        invert: _t,
        clone: function (t) {
            var e = ft();
            return gt(e, t), e
        }
    }), Sg = pt, Mg = 5e-5, Ig = function (t) {
        (t = t || {}).position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    }, Tg = Ig.prototype;
    Tg.transform = null, Tg.needLocalTransform = function () {
        return wt(this.rotation) || wt(this.position[0]) || wt(this.position[1]) || wt(this.scale[0] - 1) || wt(this.scale[1] - 1)
    };
    var Cg = [];
    Tg.updateTransform = function () {
        var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
        if (n || e) {
            i = i || ft(), n ? this.getLocalTransform(i) : Sg(i), e && (n ? mt(i, t.transform, i) : gt(i, t.transform)), this.transform = i;
            var r = this.globalScaleRatio;
            if (null != r && 1 !== r) {
                this.getGlobalScale(Cg);
                var o = Cg[0] < 0 ? -1 : 1, a = Cg[1] < 0 ? -1 : 1, s = ((Cg[0] - o) * r + o) / Cg[0] || 0,
                    l = ((Cg[1] - a) * r + a) / Cg[1] || 0;
                i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l
            }
            this.invTransform = this.invTransform || ft(), _t(this.invTransform, i)
        } else i && Sg(i)
    }, Tg.getLocalTransform = function (t) {
        return Ig.getLocalTransform(this, t)
    }, Tg.setTransform = function (t) {
        var e = this.transform, n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    }, Tg.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var Ag = [], Dg = ft();
    Tg.setLocalTransform = function (t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = this.position, r = this.scale;
            wt(e - 1) && (e = Math.sqrt(e)), wt(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e)
        }
    }, Tg.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (mt(Ag, t.invTransform, e), e = Ag);
            var n = this.origin;
            n && (n[0] || n[1]) && (Dg[4] = n[0], Dg[5] = n[1], mt(Ag, e, Dg), Ag[4] -= n[0], Ag[5] -= n[1], e = Ag), this.setLocalTransform(e)
        }
    }, Tg.getGlobalScale = function (t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
    }, Tg.transformCoordToLocal = function (t, e) {
        var n = [t, e], i = this.invTransform;
        return i && $(n, n, i), n
    }, Tg.transformCoordToGlobal = function (t, e) {
        var n = [t, e], i = this.transform;
        return i && $(n, n, i), n
    }, Ig.getLocalTransform = function (t, e) {
        Sg(e = e || []);
        var n = t.origin, i = t.scale || [1, 1], r = t.rotation || 0, o = t.position || [0, 0];
        return n && (e[4] -= n[0], e[5] -= n[1]), xt(e, e, i), r && yt(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += o[0], e[5] += o[1], e
    };
    var kg = {
        linear: function (t) {
            return t
        }, quadraticIn: function (t) {
            return t * t
        }, quadraticOut: function (t) {
            return t * (2 - t)
        }, quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, cubicIn: function (t) {
            return t * t * t
        }, cubicOut: function (t) {
            return --t * t * t + 1
        }, cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, quarticIn: function (t) {
            return t * t * t * t
        }, quarticOut: function (t) {
            return 1 - --t * t * t * t
        }, quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, quinticIn: function (t) {
            return t * t * t * t * t
        }, quinticOut: function (t) {
            return --t * t * t * t * t + 1
        }, quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        }, sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }, exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }, exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }, circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        }, circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, elasticIn: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
        }, elasticOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
        }, elasticInOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        }, backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }, bounceIn: function (t) {
            return 1 - kg.bounceOut(1 - t)
        }, bounceOut: function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, bounceInOut: function (t) {
            return t < .5 ? .5 * kg.bounceIn(2 * t) : .5 * kg.bounceOut(2 * t - 1) + .5
        }
    };
    bt.prototype = {
        constructor: bt, step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e; else {
                var n = (t - this._startTime - this._pausedTime) / this._life;
                if (!(n < 0)) {
                    n = Math.min(n, 1);
                    var i = this.easing, r = "string" == typeof i ? kg[i] : i, o = "function" == typeof r ? r(n) : n;
                    return this.fire("frame", o), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }
        }, restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        }, fire: function (t, e) {
            this[t = "on" + t] && this[t](this._target, e)
        }, pause: function () {
            this._paused = !0
        }, resume: function () {
            this._paused = !1
        }
    };
    var Pg = function () {
        this.head = null, this.tail = null, this._len = 0
    }, Lg = Pg.prototype;
    Lg.insert = function (t) {
        var e = new Og(t);
        return this.insertEntry(e), e
    }, Lg.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, Lg.remove = function (t) {
        var e = t.prev, n = t.next;
        e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, Lg.len = function () {
        return this._len
    }, Lg.clear = function () {
        this.head = this.tail = null, this._len = 0
    };
    var Og = function (t) {
        this.value = t, this.next, this.prev
    }, zg = function (t) {
        this._list = new Pg, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    }, Eg = zg.prototype;
    Eg.put = function (t, e) {
        var n = this._list, i = this._map, r = null;
        if (null == i[t]) {
            var o = n.len(), a = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
                var s = n.head;
                n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
            }
            a ? a.value = e : a = new Og(e), a.key = t, n.insertEntry(a), i[t] = a
        }
        return r
    }, Eg.get = function (t) {
        var e = this._map[t], n = this._list;
        if (null != e) return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value
    }, Eg.clear = function () {
        this._list.clear(), this._map = {}
    };
    var Ng = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }, Rg = new zg(20), Bg = null, Fg = Bt, Vg = Ft, Wg = (Object.freeze || Object)({
        parse: Ot,
        lift: Nt,
        toHex: Rt,
        fastLerp: Bt,
        fastMapToColor: Fg,
        lerp: Ft,
        mapToColor: Vg,
        modifyHSL: function (t, e, n, i) {
            if (t = Ot(t)) return t = Et(t), null != e && (t[0] = Mt(e)), null != n && (t[1] = Ct(n)), null != i && (t[2] = Ct(i)), Wt(zt(t), "rgba")
        },
        modifyAlpha: Vt,
        stringify: Wt
    }), Hg = Array.prototype.slice, Gg = function (t, e, n, i) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Ht, this._setter = i || Gt, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
    Gg.prototype = {
        when: function (t, e) {
            var n = this._tracks;
            for (var i in e) if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                    n[i] = [];
                    var r = this._getter(this._target, i);
                    if (null == r) continue;
                    0 !== t && n[i].push({time: 0, value: Kt(r)})
                }
                n[i].push({time: t, value: e[i]})
            }
            return this
        }, during: function (t) {
            return this._onframeList.push(t), this
        }, pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        }, resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        }, isPaused: function () {
            return !!this._paused
        }, _doneCallback: function () {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, n = 0; n < e; n++) t[n].call(this)
        }, start: function (t, e) {
            var n, i = this, r = 0;
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var a = te(this, t, function () {
                    --r || i._doneCallback()
                }, this._tracks[o], o, e);
                a && (this._clipList.push(a), r++, this.animation && this.animation.addClip(a), n = a)
            }
            if (n) {
                var s = n.onframe;
                n.onframe = function (t, e) {
                    s(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
                }
            }
            return r || this._doneCallback(), this
        }, stop: function (t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1), n && n.removeClip(r)
            }
            e.length = 0
        }, delay: function (t) {
            return this._delay = t, this
        }, done: function (t) {
            return t && this._doneList.push(t), this
        }, getClips: function () {
            return this._clipList
        }
    };
    var Zg = 1;
    "undefined" != typeof window && (Zg = Math.max(window.devicePixelRatio || 1, 1));
    var Ug = Zg, Xg = function () {
    }, Yg = Xg, jg = function () {
        this.animators = []
    };
    jg.prototype = {
        constructor: jg, animate: function (t, e) {
            var n, i = !1, r = this, o = this.__zr;
            if (t) {
                var a = t.split("."), s = r;
                i = "shape" === a[0];
                for (var u = 0, h = a.length; u < h; u++) s && (s = s[a[u]]);
                s && (n = s)
            } else n = r;
            if (n) {
                var c = r.animators, d = new Gg(n, e);
                return d.during(function (t) {
                    r.dirty(i)
                }).done(function () {
                    c.splice(l(c, d), 1)
                }), c.push(d), o && o.animation.addAnimator(d), d
            }
            Yg('Property "' + t + '" is not existed in element ' + r.id)
        }, stopAnimation: function (t) {
            for (var e = this.animators, n = e.length, i = 0; i < n; i++) e[i].stop(t);
            return e.length = 0, this
        }, animateTo: function (t, e, n, i, r, o) {
            ee(this, t, e, n, i, r, o)
        }, animateFrom: function (t, e, n, i, r, o) {
            ee(this, t, e, n, i, r, o, !0)
        }
    };
    var qg = function (t) {
        Ig.call(this, t), pg.call(this, t), jg.call(this, t), this.id = t.id || Zp()
    };
    qg.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function (t, e) {
            switch (this.draggable) {
                case"horizontal":
                    e = 0;
                    break;
                case"vertical":
                    t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
        },
        beforeUpdate: function () {
        },
        afterUpdate: function () {
        },
        update: function () {
            this.updateTransform()
        },
        traverse: function (t, e) {
        },
        attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
                }
            } else this[t] = e
        },
        hide: function () {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        },
        show: function () {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        },
        attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (w(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1), this
        },
        setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        },
        removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        },
        addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        },
        removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, h(qg, jg), h(qg, Ig), h(qg, pg);
    var $g = $, Kg = Math.min, Qg = Math.max;
    re.prototype = {
        constructor: re, union: function (t) {
            var e = Kg(t.x, this.x), n = Kg(t.y, this.y);
            this.width = Qg(t.x + t.width, this.x + this.width) - e, this.height = Qg(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
        }, applyTransform: function () {
            var t = [], e = [], n = [], i = [];
            return function (r) {
                if (r) {
                    t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, $g(t, t, r), $g(e, e, r), $g(n, n, r), $g(i, i, r), this.x = Kg(t[0], e[0], n[0], i[0]), this.y = Kg(t[1], e[1], n[1], i[1]);
                    var o = Qg(t[0], e[0], n[0], i[0]), a = Qg(t[1], e[1], n[1], i[1]);
                    this.width = o - this.x, this.height = a - this.y
                }
            }
        }(), calculateTransform: function (t) {
            var e = this, n = t.width / e.width, i = t.height / e.height, r = ft();
            return vt(r, r, [-e.x, -e.y]), xt(r, r, [n, i]), vt(r, r, [t.x, t.y]), r
        }, intersect: function (t) {
            if (!t) return !1;
            t instanceof re || (t = re.create(t));
            var e = this, n = e.x, i = e.x + e.width, r = e.y, o = e.y + e.height, a = t.x, s = t.x + t.width, l = t.y,
                u = t.y + t.height;
            return !(i < a || s < n || o < l || u < r)
        }, contain: function (t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        }, clone: function () {
            return new re(this.x, this.y, this.width, this.height)
        }, copy: function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, plain: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }
    }, re.create = function (t) {
        return new re(t.x, t.y, t.width, t.height)
    };
    var Jg = function (t) {
        t = t || {}, qg.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0
    };
    Jg.prototype = {
        constructor: Jg, isGroup: !0, type: "group", silent: !1, children: function () {
            return this._children.slice()
        }, childAt: function (t) {
            return this._children[t]
        }, childOfName: function (t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n]
        }, childCount: function () {
            return this._children.length
        }, add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        }, addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        }, _doAdd: function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof Jg && t.addChildrenToStorage(e)), n && n.refresh()
        }, remove: function (t) {
            var e = this.__zr, n = this.__storage, i = this._children, r = l(i, t);
            return r < 0 ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Jg && t.delChildrenFromStorage(n)), e && e.refresh(), this)
        }, removeAll: function () {
            var t, e, n = this._children, i = this.__storage;
            for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof Jg && t.delChildrenFromStorage(i)), t.parent = null;
            return n.length = 0, this
        }, eachChild: function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        }, traverse: function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i), "group" === i.type && i.traverse(t, e)
            }
            return this
        }, addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n), n instanceof Jg && n.addChildrenToStorage(t)
            }
        }, delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n), n instanceof Jg && n.delChildrenFromStorage(t)
            }
        }, dirty: function () {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        }, getBoundingRect: function (t) {
            for (var e = null, n = new re(0, 0, 0, 0), i = t || this._children, r = [], o = 0; o < i.length; o++) {
                var a = i[o];
                if (!a.ignore && !a.invisible) {
                    var s = a.getBoundingRect(), l = a.getLocalTransform(r);
                    l ? (n.copy(s), n.applyTransform(l), (e = e || n.clone()).union(n)) : (e = e || s.clone()).union(s)
                }
            }
            return e || n
        }
    }, u(Jg, qg);
    var tm = 32, em = 7, nm = function () {
        this._roots = [], this._displayList = [], this._displayListLen = 0
    };
    nm.prototype = {
        constructor: nm, traverse: function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        }, getDisplayList: function (t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        }, updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, Xp.canvasSupported && de(n, fe)
        }, _updateAndAddDisplayable: function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, o = t; r;) r.parent = o, r.updateTransform(), e.push(r), o = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var a = t._children, s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        }, addRoot: function (t) {
            t.__storage !== this && (t instanceof Jg && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        }, delRoot: function (t) {
            if (null == t) {
                for (n = 0; n < this._roots.length; n++) {
                    var e = this._roots[n];
                    e instanceof Jg && e.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
            }
            if (t instanceof Array) for (var n = 0, i = t.length; n < i; n++) this.delRoot(t[n]); else {
                var r = l(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Jg && t.delChildrenFromStorage(this))
            }
        }, addToStorage: function (t) {
            return t && (t.__storage = this, t.dirty(!1)), this
        }, delFromStorage: function (t) {
            return t && (t.__storage = null), this
        }, dispose: function () {
            this._renderList = this._roots = null
        }, displayableSortFunc: fe
    };
    var im = {
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            textShadowBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textBoxShadowBlur: 1,
            textBoxShadowOffsetX: 1,
            textBoxShadowOffsetY: 1
        }, rm = function (t, e, n) {
            return im.hasOwnProperty(e) ? n *= t.dpr : n
        },
        om = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
        am = function (t) {
            this.extendFrom(t, !1)
        };
    am.prototype = {
        constructor: am,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, n) {
            for (var i = this, r = n && n.style, o = !r, a = 0; a < om.length; a++) {
                var s = om[a], l = s[0];
                (o || i[l] !== r[l]) && (t[l] = rm(t, l, i[l] || s[1]))
            }
            if ((o || i.fill !== r.fill) && (t.fillStyle = i.fill), (o || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (o || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (o || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
                var u = i.lineWidth;
                t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
            if (t) for (var n in t) !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function (t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function (t, e, n) {
            for (var i = ("radial" === e.type ? ge : pe)(t, e, n), r = e.colorStops, o = 0; o < r.length; o++) i.addColorStop(r[o].offset, r[o].color);
            return i
        }
    };
    for (var sm = am.prototype, lm = 0; lm < om.length; lm++) {
        var um = om[lm];
        um[0] in sm || (sm[um[0]] = um[1])
    }
    am.getGradient = sm.getGradient;
    var hm = function (t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    hm.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var cm = function (t, e, n) {
        var i;
        n = n || Ug, "string" == typeof t ? i = ve(t, e, n) : w(t) && (t = (i = t).id), this.id = t, this.dom = i;
        var r = i.style;
        r && (i.onselectstart = me, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
    };
    cm.prototype = {
        constructor: cm,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function () {
            return this.__endIndex - this.__startIndex
        },
        initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
        },
        createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = ve("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
        },
        resize: function (t, e) {
            var n = this.dpr, i = this.dom, r = i.style, o = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, o && (o.width = t * n, o.height = e * n, 1 != n && this.ctxBack.scale(n, n))
        },
        clear: function (t, e) {
            var n = this.dom, i = this.ctx, r = n.width, o = n.height, e = e || this.clearColor,
                a = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
            if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, o / l)), i.clearRect(0, 0, r, o), e && "transparent" !== e) {
                var u;
                e.colorStops ? (u = e.__canvasGradient || am.getGradient(i, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: o
                }), e.__canvasGradient = u) : e.image && (u = hm.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, o), i.restore()
            }
            if (a) {
                var h = this.domBack;
                i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, o), i.restore()
            }
        }
    };
    var dm = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        }, fm = new zg(50), pm = {}, gm = 0, mm = 5e3, vm = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, ym = "12px sans-serif",
        xm = {};
    xm.measureText = function (t, e) {
        var n = s();
        return n.font = e || ym, n.measureText(t)
    };
    var _m = {left: 1, right: 1, center: 1}, wm = {top: 1, bottom: 1, middle: 1},
        bm = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
        Sm = new re, Mm = function () {
        };
    Mm.prototype = {
        constructor: Mm, drawRectText: function (t, e) {
            var n = this.style;
            e = n.textRect || e, this.__dirty && Ve(n);
            var i = n.text;
            if (null != i && (i += ""), rn(i, n)) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (Sm.copy(e), Sm.applyTransform(r), e = Sm), He(this, t, i, n, e), t.restore()
            }
        }
    }, on.prototype = {
        constructor: on,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function (t) {
        },
        afterBrush: function (t) {
        },
        brush: function (t, e) {
        },
        getBoundingRect: function () {
        },
        contain: function (t, e) {
            return this.rectContain(t, e)
        },
        traverse: function (t, e) {
            t.call(e, this)
        },
        rectContain: function (t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1])
        },
        dirty: function () {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function (t) {
            return this.animate("style", t)
        },
        attrKV: function (t, e) {
            "style" !== t ? qg.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function (t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function (t) {
            return this.style = new am(t, this), this.dirty(!1), this
        }
    }, u(on, qg), h(on, Mm), an.prototype = {
        constructor: an, type: "image", brush: function (t, e) {
            var n = this.style, i = n.image;
            n.bind(t, this, e);
            var r = this._image = xe(i, this._image, this, this.onload);
            if (r && we(r)) {
                var o = n.x || 0, a = n.y || 0, s = n.width, l = n.height, u = r.width / r.height;
                if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var h = n.sx || 0, c = n.sy || 0;
                    t.drawImage(r, h, c, n.sWidth, n.sHeight, o, a, s, l)
                } else if (n.sx && n.sy) {
                    var d = s - (h = n.sx), f = l - (c = n.sy);
                    t.drawImage(r, h, c, d, f, o, a, s, l)
                } else t.drawImage(r, o, a, s, l);
                null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            }
        }, getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new re(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, u(an, on);
    var Im = new re(0, 0, 0, 0), Tm = new re(0, 0, 0, 0), Cm = function (t, e, n) {
        this.type = "canvas";
        var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Ug, this._singleCanvas = i, this.root = t;
        var r = t.style;
        r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
        var a = this._zlevelList = [], s = this._layers = {};
        if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
            var l = t.width, u = t.height;
            null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;
            var h = new cm(t, this, this.dpr);
            h.__builtin__ = !0, h.initContext(), s[314159] = h, h.zlevel = 314159, a.push(314159), this._domRoot = t
        } else {
            this._width = this._getSize(0), this._height = this._getSize(1);
            var c = this._domRoot = dn(this._width, this._height);
            t.appendChild(c)
        }
        this._hoverlayer = null, this._hoverElements = []
    };
    Cm.prototype = {
        constructor: Cm, getType: function () {
            return "canvas"
        }, isSingleCanvas: function () {
            return this._singleCanvas
        }, getViewportRoot: function () {
            return this._domRoot
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0}
        }, refresh: function (t) {
            var e = this.storage.getDisplayList(!0), n = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                if (!o.__builtin__ && o.refresh) {
                    var a = 0 === i ? this._backgroundColor : null;
                    o.refresh(a)
                }
            }
            return this.refreshHover(), this
        }, addHover: function (t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent});
                return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n
            }
        }, removeHover: function (t) {
            var e = t.__hoverMir, n = this._hoverElements, i = l(n, e);
            i >= 0 && n.splice(i, 1), t.__hoverMir = null
        }, clearHover: function (t) {
            for (var e = this._hoverElements, n = 0; n < e.length; n++) {
                var i = e[n].__from;
                i && (i.__hoverMir = null)
            }
            e.length = 0
        }, refreshHover: function () {
            var t = this._hoverElements, e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                de(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(1e5));
                var i = {};
                n.ctx.save();
                for (var r = 0; r < e;) {
                    var o = t[r], a = o.__from;
                    a && a.__zr ? (r++, a.invisible || (o.transform = a.transform, o.invTransform = a.invTransform, o.__clipPaths = a.__clipPaths, this._doPaintEl(o, n, !0, i))) : (t.splice(r, 1), a.__hoverMir = null, e--)
                }
                n.ctx.restore()
            }
        }, getHoverLayer: function () {
            return this.getLayer(1e5)
        }, _paintList: function (t, e, n) {
            if (this._redrawId === n) {
                e = e || !1, this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !i) {
                    var r = this;
                    dm(function () {
                        r._paintList(t, e, n)
                    })
                }
            }
        }, _compositeManually: function () {
            var t = this.getLayer(314159).ctx, e = this._domRoot.width, n = this._domRoot.height;
            t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n)
            })
        }, _doPaintList: function (t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i];
                (s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && n.push(s)
            }
            for (var o = !0, a = 0; a < n.length; a++) {
                var s = n[a], l = s.ctx, u = {};
                l.save();
                var h = e ? s.__startIndex : s.__drawIndex, c = !e && s.incremental && Date.now, f = c && Date.now(),
                    p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, p); else if (h === s.__startIndex) {
                    var g = t[h];
                    g.incremental && g.notClear && !e || s.clear(!1, p)
                }
                -1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = s.__startIndex);
                for (var m = h; m < s.__endIndex; m++) {
                    var v = t[m];
                    if (this._doPaintEl(v, s, e, u), v.__dirty = v.__dirtyText = !1, c && Date.now() - f > 15) break
                }
                s.__drawIndex = m, s.__drawIndex < s.__endIndex && (o = !1), u.prevElClipPaths && l.restore(), l.restore()
            }
            return Xp.wxa && d(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }), o
        }, _doPaintEl: function (t, e, n, i) {
            var r = e.ctx, o = t.transform;
            if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!o || o[0] || o[3]) && (!t.culling || !un(t, this._width, this._height))) {
                var a = t.__clipPaths;
                i.prevElClipPaths && !hn(a, i.prevElClipPaths) || (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), a && (r.save(), cn(a, r), i.prevElClipPaths = a)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        }, getLayer: function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
            var n = this._layers[t];
            return n || ((n = new cm("zr_" + t, this, this.dpr)).zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && i(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
        }, insertLayer: function (t, e) {
            var n = this._layers, i = this._zlevelList, r = i.length, o = null, a = -1, s = this._domRoot;
            if (n[t]) Yg("ZLevel " + t + " has been used already"); else if (ln(e)) {
                if (r > 0 && t > i[0]) {
                    for (a = 0; a < r - 1 && !(i[a] < t && i[a + 1] > t); a++) ;
                    o = n[i[a]]
                }
                if (i.splice(a + 1, 0, t), n[t] = e, !e.virtual) if (o) {
                    var l = o.dom;
                    l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
                } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
            } else Yg("Layer of zlevel " + t + " is not valid")
        }, eachLayer: function (t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
        }, eachBuiltinLayer: function (t, e) {
            var n, i, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) i = o[r], (n = this._layers[i]).__builtin__ && t.call(e, n, i)
        }, eachOtherLayer: function (t, e) {
            var n, i, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) i = o[r], (n = this._layers[i]).__builtin__ || t.call(e, n, i)
        }, getLayers: function () {
            return this._layers
        }, _updateLayerStatus: function (t) {
            function e(t) {
                n && (n.__endIndex !== t && (n.__dirty = !0), n.__endIndex = t)
            }

            if (this.eachBuiltinLayer(function (t, e) {
                    t.__dirty = t.__used = !1
                }), this._singleCanvas) for (r = 1; r < t.length; r++) if ((a = t[r]).zlevel !== t[r - 1].zlevel || a.incremental) {
                this._needsManuallyCompositing = !0;
                break
            }
            for (var n = null, i = 0, r = 0; r < t.length; r++) {
                var o, a = t[r], s = a.zlevel;
                a.incremental ? ((o = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, i = 1) : o = this.getLayer(s + (i > 0 ? .01 : 0), this._needsManuallyCompositing), o.__builtin__ || Yg("ZLevel " + s + " has been used by unkown layer " + o.id), o !== n && (o.__used = !0, o.__startIndex !== r && (o.__dirty = !0), o.__startIndex = r, o.incremental ? o.__drawIndex = -1 : o.__drawIndex = r, e(r), n = o), a.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = r))
            }
            e(r), this.eachBuiltinLayer(function (t, e) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        }, clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, _clearLayer: function (t) {
            t.clear()
        }, setBackgroundColor: function (t) {
            this._backgroundColor = t
        }, configLayer: function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? i(n[t], e, !0) : n[t] = e;
                for (var r = 0; r < this._zlevelList.length; r++) {
                    var o = this._zlevelList[r];
                    o !== t && o !== t + .01 || i(this._layers[o], n[t], !0)
                }
            }
        }, delLayer: function (t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(l(n, t), 1))
        }, resize: function (t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
                    n.style.width = t + "px", n.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    d(this._progressiveLayers, function (n) {
                        n.resize(t, e)
                    }), this.refresh(!0)
                }
                this._width = t, this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(314159).resize(t, e)
            }
            return this
        }, clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear()
        }, dispose: function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        }, getRenderedCanvas: function (t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
            var e = new cm("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var n = e.dom.width, i = e.dom.height, r = e.ctx;
                this.eachLayer(function (t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                })
            } else for (var o = {}, a = this.storage.getDisplayList(!0), s = 0; s < a.length; s++) {
                var l = a[s];
                this._doPaintEl(l, e, !0, o)
            }
            return e.dom
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var a = this.root, s = document.defaultView.getComputedStyle(a);
            return (a[i] || sn(s[n]) || sn(a.style[n])) - (sn(s[r]) || 0) - (sn(s[o]) || 0) | 0
        }, pathToImage: function (t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), o = t.style,
                a = o.shadowBlur * e, s = o.shadowOffsetX * e, l = o.shadowOffsetY * e,
                u = o.hasStroke() ? o.lineWidth : 0, h = Math.max(u / 2, -s + a), c = Math.max(u / 2, s + a),
                d = Math.max(u / 2, -l + a), f = Math.max(u / 2, l + a), p = r.width + h + c, g = r.height + d + f;
            n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
            var m = {position: t.position, rotation: t.rotation, scale: t.scale};
            t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
            var v = new an({style: {x: 0, y: 0, image: n}});
            return null != m.position && (v.position = t.position = m.position), null != m.rotation && (v.rotation = t.rotation = m.rotation), null != m.scale && (v.scale = t.scale = m.scale), v
        }
    };
    var Am = function (t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
        }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, pg.call(this)
    };
    Am.prototype = {
        constructor: Am, addClip: function (t) {
            this._clips.push(t)
        }, addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
        }, removeClip: function (t) {
            var e = l(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        }, removeAnimator: function (t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null
        }, _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], o = [], a = 0; a < i; a++) {
                var s = n[a], l = s.step(t, e);
                l && (r.push(l), o.push(s))
            }
            for (a = 0; a < i;) n[a]._needsRemove ? (n[a] = n[i - 1], n.pop(), i--) : a++;
            i = r.length;
            for (a = 0; a < i; a++) o[a].fire(r[a]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        }, _startLoop: function () {
            function t() {
                e._running && (dm(t), !e._paused && e._update())
            }

            var e = this;
            this._running = !0, dm(t)
        }, start: function () {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        }, stop: function () {
            this._running = !1
        }, pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, clear: function () {
            this._clips = []
        }, isFinished: function () {
            return !this._clips.length
        }, animate: function (t, e) {
            var n = new Gg(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(n), n
        }
    }, h(Am, pg);
    var Dm = function () {
        this._track = []
    };
    Dm.prototype = {
        constructor: Dm, recognize: function (t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t)
        }, clear: function () {
            return this._track.length = 0, this
        }, _doTrack: function (t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {points: [], touches: [], target: e, event: t}, o = 0, a = i.length; o < a; o++) {
                    var s = i[o], l = it(n, s, {});
                    r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                }
                this._track.push(r)
            }
        }, _recognize: function (t) {
            for (var e in km) if (km.hasOwnProperty(e)) {
                var n = km[e](this._track, t);
                if (n) return n
            }
        }
    };
    var km = {
            pinch: function (t, e) {
                var n = t.length;
                if (n) {
                    var i = (t[n - 1] || {}).points, r = (t[n - 2] || {}).points || i;
                    if (r && r.length > 1 && i && i.length > 1) {
                        var o = fn(i) / fn(r);
                        !isFinite(o) && (o = 1), e.pinchScale = o;
                        var a = pn(i);
                        return e.pinchX = a[0], e.pinchY = a[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        }, Pm = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Lm = ["touchstart", "touchend", "touchmove"],
        Om = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}, zm = f(Pm, function (t) {
            var e = t.replace("mouse", "pointer");
            return Om[e] ? e : t
        }), Em = {
            mousemove: function (t) {
                t = ot(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                var e = (t = ot(this.dom, t)).toElement || t.relatedTarget;
                if (e != this.dom) for (; e && 9 != e.nodeType;) {
                    if (e === this.dom) return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                (t = ot(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date, mn(this, t, "start"), Em.mousemove.call(this, t), Em.mousedown.call(this, t), vn(this)
            }, touchmove: function (t) {
                (t = ot(this.dom, t)).zrByTouch = !0, mn(this, t, "change"), Em.mousemove.call(this, t), vn(this)
            }, touchend: function (t) {
                (t = ot(this.dom, t)).zrByTouch = !0, mn(this, t, "end"), Em.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && Em.click.call(this, t), vn(this)
            }, pointerdown: function (t) {
                Em.mousedown.call(this, t)
            }, pointermove: function (t) {
                yn(t) || Em.mousemove.call(this, t)
            }, pointerup: function (t) {
                Em.mouseup.call(this, t)
            }, pointerout: function (t) {
                yn(t) || Em.mouseout.call(this, t)
            }
        };
    d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Em[t] = function (e) {
            e = ot(this.dom, e), this.trigger(t, e)
        }
    });
    var Nm = _n.prototype;
    Nm.dispose = function () {
        for (var t = Pm.concat(Lm), e = 0; e < t.length; e++) {
            var n = t[e];
            st(this.dom, gn(n), this._handlers[n])
        }
    }, Nm.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    }, h(_n, pg);
    var Rm = !Xp.canvasSupported, Bm = {canvas: Cm}, Fm = {}, Vm = function (t, e, n) {
        n = n || {}, this.dom = e, this.id = t;
        var i = this, r = new nm, o = n.renderer;
        if (Rm) {
            if (!Bm.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            o = "vml"
        } else o && Bm[o] || (o = "canvas");
        var a = new Bm[o](e, r, n, t);
        this.storage = r, this.painter = a;
        var s = Xp.node || Xp.worker ? null : new _n(a.getViewportRoot());
        this.handler = new _g(r, a, s, a.root), this.animation = new Am({stage: {update: m(this.flush, this)}}), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, u = r.addToStorage;
        r.delFromStorage = function (t) {
            l.call(r, t), t && t.removeSelfFromZr(i)
        }, r.addToStorage = function (t) {
            u.call(r, t), t.addSelfToZr(i)
        }
    };
    Vm.prototype = {
        constructor: Vm, getId: function () {
            return this.id
        }, add: function (t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        }, remove: function (t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        }, configLayer: function (t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
        }, setBackgroundColor: function (t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
        }, refreshImmediately: function () {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
        }, refresh: function () {
            this._needsRefresh = !0
        }, flush: function () {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
        }, addHover: function (t, e) {
            if (this.painter.addHover) {
                var n = this.painter.addHover(t, e);
                return this.refreshHover(), n
            }
        }, removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        }, clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        }, refreshHover: function () {
            this._needsRefreshHover = !0
        }, refreshHoverImmediately: function () {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        }, resize: function (t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        }, clearAnimation: function () {
            this.animation.clear()
        }, getWidth: function () {
            return this.painter.getWidth()
        }, getHeight: function () {
            return this.painter.getHeight()
        }, pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e)
        }, setCursorStyle: function (t) {
            this.handler.setCursorStyle(t)
        }, findHover: function (t, e) {
            return this.handler.findHover(t, e)
        }, on: function (t, e, n) {
            this.handler.on(t, e, n)
        }, off: function (t, e) {
            this.handler.off(t, e)
        }, trigger: function (t, e) {
            this.handler.trigger(t, e)
        }, clear: function () {
            this.storage.delRoot(), this.painter.clear()
        }, dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Sn(this.id)
        }
    };
    var Wm = (Object.freeze || Object)({
            version: "4.0.5", init: wn, dispose: function (t) {
                if (t) t.dispose(); else {
                    for (var e in Fm) Fm.hasOwnProperty(e) && Fm[e].dispose();
                    Fm = {}
                }
                return this
            }, getInstance: function (t) {
                return Fm[t]
            }, registerPainter: bn
        }), Hm = d, Gm = w, Zm = y, Um = "series\0",
        Xm = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        Ym = 0, jm = ".", qm = "___EC__COMPONENT__CONTAINER___", $m = 0, Km = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, n, i) {
                for (var r = {}, o = 0; o < t.length; o++) {
                    var a = t[o][1];
                    if (!(n && l(n, a) >= 0 || i && l(i, a) < 0)) {
                        var s = e.getShallow(a);
                        null != s && (r[t[o][0]] = s)
                    }
                }
                return r
            }
        },
        Qm = Km([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        Jm = {
            getLineStyle: function (t) {
                var e = Qm(this, t), n = this.getLineDash(e.lineWidth);
                return n && (e.lineDash = n), e
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), n = Math.max(t, 2), i = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
            }
        },
        tv = Km([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
        ev = {
            getAreaStyle: function (t, e) {
                return tv(this, t, e)
            }
        }, nv = Math.pow, iv = Math.sqrt, rv = 1e-8, ov = 1e-4, av = iv(3), sv = 1 / 3, lv = B(), uv = B(), hv = B(),
        cv = Math.min, dv = Math.max, fv = Math.sin, pv = Math.cos, gv = 2 * Math.PI, mv = B(), vv = B(), yv = B(),
        xv = [], _v = [], wv = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, bv = [], Sv = [], Mv = [], Iv = [],
        Tv = Math.min, Cv = Math.max, Av = Math.cos, Dv = Math.sin, kv = Math.sqrt, Pv = Math.abs,
        Lv = "undefined" != typeof Float32Array, Ov = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    Ov.prototype = {
        constructor: Ov,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e) {
            this._ux = Pv(1 / Ug / t) || 0, this._uy = Pv(1 / Ug / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(wv.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var n = Pv(t - this._xi) > this._ux || Pv(e - this._yi) > this._uy || this._len < 5;
            return this.addData(wv.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, n, i, r, o) {
            return this.addData(wv.C, t, e, n, i, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, o) : this._ctx.bezierCurveTo(t, e, n, i, r, o)), this._xi = r, this._yi = o, this
        },
        quadraticCurveTo: function (t, e, n, i) {
            return this.addData(wv.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
        },
        arc: function (t, e, n, i, r, o) {
            return this.addData(wv.A, t, e, n, n, i, r - i, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), this._xi = Av(r) * n + t, this._yi = Dv(r) * n + e, this
        },
        arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
        },
        rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(wv.R, t, e, n, i), this
        },
        closePath: function () {
            this.addData(wv.Z);
            var t = this._ctx, e = this._x0, n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
        },
        fill: function (t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function (t) {
            return this._dashOffset = t, this
        },
        len: function () {
            return this._len
        },
        setData: function (t) {
            var e = t.length;
            this.data && this.data.length == e || !Lv || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++) this.data[n] = t[n];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();
            Lv && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (r = 0; r < e; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
            this._len = i
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function () {
            return this._lineDash
        },
        _dashedLineTo: function (t, e) {
            var n, i, r = this._dashSum, o = this._dashOffset, a = this._lineDash, s = this._ctx, l = this._xi,
                u = this._yi, h = t - l, c = e - u, d = kv(h * h + c * c), f = l, p = u, g = a.length;
            for (h /= d, c /= d, o < 0 && (o = r + o), f -= (o %= r) * h, p -= o * c; h > 0 && f <= t || h < 0 && f >= t || 0 == h && (c > 0 && p <= e || c < 0 && p >= e);) f += h * (n = a[i = this._dashIdx]), p += c * n, this._dashIdx = (i + 1) % g, h > 0 && f < l || h < 0 && f > l || c > 0 && p < u || c < 0 && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Tv(f, t) : Cv(f, t), c >= 0 ? Tv(p, e) : Cv(p, e));
            h = f - t, c = p - e, this._dashOffset = -kv(h * h + c * c)
        },
        _dashedBezierTo: function (t, e, n, i, r, o) {
            var a, s, l, u, h, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi,
                m = this._yi, v = jn, y = 0, x = this._dashIdx, _ = f.length, w = 0;
            for (d < 0 && (d = c + d), d %= c, a = 0; a < 1; a += .1) s = v(g, t, n, r, a + .1) - v(g, t, n, r, a), l = v(m, e, i, o, a + .1) - v(m, e, i, o, a), y += kv(s * s + l * l);
            for (; x < _ && !((w += f[x]) > d); x++) ;
            for (a = (w - d) / y; a <= 1;) u = v(g, t, n, r, a), h = v(m, e, i, o, a), x % 2 ? p.moveTo(u, h) : p.lineTo(u, h), a += f[x] / y, x = (x + 1) % _;
            x % 2 != 0 && p.lineTo(r, o), s = r - u, l = o - h, this._dashOffset = -kv(s * s + l * l)
        },
        _dashedQuadraticTo: function (t, e, n, i) {
            var r = n, o = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, o)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, Lv && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            bv[0] = bv[1] = Mv[0] = Mv[1] = Number.MAX_VALUE, Sv[0] = Sv[1] = Iv[0] = Iv[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, o = 0; o < t.length;) {
                var a = t[o++];
                switch (1 == o && (i = e = t[o], r = n = t[o + 1]), a) {
                    case wv.M:
                        e = i = t[o++], n = r = t[o++], Mv[0] = i, Mv[1] = r, Iv[0] = i, Iv[1] = r;
                        break;
                    case wv.L:
                        si(e, n, t[o], t[o + 1], Mv, Iv), e = t[o++], n = t[o++];
                        break;
                    case wv.C:
                        li(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Mv, Iv), e = t[o++], n = t[o++];
                        break;
                    case wv.Q:
                        ui(e, n, t[o++], t[o++], t[o], t[o + 1], Mv, Iv), e = t[o++], n = t[o++];
                        break;
                    case wv.A:
                        var s = t[o++], l = t[o++], u = t[o++], h = t[o++], c = t[o++], d = t[o++] + c,
                            f = (t[o++], 1 - t[o++]);
                        1 == o && (i = Av(c) * u + s, r = Dv(c) * h + l), hi(s, l, u, h, c, d, f, Mv, Iv), e = Av(d) * u + s, n = Dv(d) * h + l;
                        break;
                    case wv.R:
                        si(i = e = t[o++], r = n = t[o++], i + t[o++], r + t[o++], Mv, Iv);
                        break;
                    case wv.Z:
                        e = i, n = r
                }
                K(bv, bv, Mv), Q(Sv, Sv, Iv)
            }
            return 0 === o && (bv[0] = bv[1] = Sv[0] = Sv[1] = 0), new re(bv[0], bv[1], Sv[0] - bv[0], Sv[1] - bv[1])
        },
        rebuildPath: function (t) {
            for (var e, n, i, r, o, a, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; c < h;) {
                var d = s[c++];
                switch (1 == c && (e = i = s[c], n = r = s[c + 1]), d) {
                    case wv.M:
                        e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
                        break;
                    case wv.L:
                        o = s[c++], a = s[c++], (Pv(o - i) > l || Pv(a - r) > u || c === h - 1) && (t.lineTo(o, a), i = o, r = a);
                        break;
                    case wv.C:
                        t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case wv.Q:
                        t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case wv.A:
                        var f = s[c++], p = s[c++], g = s[c++], m = s[c++], v = s[c++], y = s[c++], x = s[c++],
                            _ = s[c++], w = g > m ? g : m, b = g > m ? 1 : g / m, S = g > m ? m / g : 1, M = v + y;
                        Math.abs(g - m) > .001 ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, v, M, 1 - _), t.scale(1 / b, 1 / S), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, v, M, 1 - _), 1 == c && (e = Av(v) * g + f, n = Dv(v) * m + p), i = Av(M) * g + f, r = Dv(M) * m + p;
                        break;
                    case wv.R:
                        e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                        break;
                    case wv.Z:
                        t.closePath(), i = e, r = n
                }
            }
        }
    }, Ov.CMD = wv;
    var zv = 2 * Math.PI, Ev = 2 * Math.PI, Nv = Ov.CMD, Rv = 2 * Math.PI, Bv = 1e-4, Fv = [-1, -1, -1], Vv = [-1, -1],
        Wv = hm.prototype.getCanvasPattern, Hv = Math.abs, Gv = new Ov(!0);
    Ii.prototype = {
        constructor: Ii, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t, e) {
            var n = this.style, i = this.path || Gv, r = n.hasStroke(), o = n.hasFill(), a = n.fill, s = n.stroke,
                l = o && !!a.colorStops, u = r && !!s.colorStops, h = o && !!a.image, c = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, a, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Wv.call(a, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Wv.call(s, t));
            var f = n.lineDash, p = n.lineDashOffset, g = !!t.setLineDash, m = this.getGlobalScale();
            if (i.setScale(m[0], m[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), o) if (null != n.fillOpacity) {
                v = t.globalAlpha;
                t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = v
            } else i.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
                var v = t.globalAlpha;
                t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = v
            } else i.stroke(t);
            f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        }, buildPath: function (t, e, n) {
        }, createPathProxy: function () {
            this.path = new Ov
        }, getBoundingRect: function () {
            var t = this._rect, e = this.style, n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new Ov), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var o = e.lineWidth, a = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), a > 1e-10 && (r.width += o / a, r.height += o / a, r.x -= o / a / 2, r.y -= o / a / 2)
                }
                return r
            }
            return t
        }, contain: function (t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var o = this.path.data;
                if (r.hasStroke()) {
                    var a = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), Mi(o, a / s, t, e))) return !0
                }
                if (r.hasFill()) return Si(o, t, e)
            }
            return !1
        }, dirty: function (t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        }, animateShape: function (t) {
            return this.animate("shape", t)
        }, attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : on.prototype.attrKV.call(this, t, e)
        }, setShape: function (t, e) {
            var n = this.shape;
            if (n) {
                if (w(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]); else n[t] = e;
                this.dirty(!0)
            }
            return this
        }, getLineScale: function () {
            var t = this.transform;
            return t && Hv(t[0] - 1) > 1e-10 && Hv(t[3] - 1) > 1e-10 ? Math.sqrt(Hv(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, Ii.extend = function (t) {
        var e = function (e) {
            Ii.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
            }
            t.init && t.init.call(this, e)
        };
        u(e, Ii);
        for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e
    }, u(Ii, on);
    var Zv = Ov.CMD, Uv = [[], [], []], Xv = Math.sqrt, Yv = Math.atan2, jv = function (t, e) {
        var n, i, r, o, a, s, l = t.data, u = Zv.M, h = Zv.C, c = Zv.L, d = Zv.R, f = Zv.A, p = Zv.Q;
        for (r = 0, o = 0; r < l.length;) {
            switch (n = l[r++], o = r, i = 0, n) {
                case u:
                case c:
                    i = 1;
                    break;
                case h:
                    i = 3;
                    break;
                case p:
                    i = 2;
                    break;
                case f:
                    var g = e[4], m = e[5], v = Xv(e[0] * e[0] + e[1] * e[1]), y = Xv(e[2] * e[2] + e[3] * e[3]),
                        x = Yv(-e[1] / y, e[0] / v);
                    l[r] *= v, l[r++] += g, l[r] *= y, l[r++] += m, l[r++] *= v, l[r++] *= y, l[r++] += x, l[r++] += x, o = r += 2;
                    break;
                case d:
                    s[0] = l[r++], s[1] = l[r++], $(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], s[1] += l[r++], $(s, s, e), l[o++] = s[0], l[o++] = s[1]
            }
            for (a = 0; a < i; a++) (s = Uv[a])[0] = l[r++], s[1] = l[r++], $(s, s, e), l[o++] = s[0], l[o++] = s[1]
        }
    }, qv = Math.sqrt, $v = Math.sin, Kv = Math.cos, Qv = Math.PI, Jv = function (t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }, ty = function (t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Jv(t) * Jv(e))
    }, ey = function (t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(ty(t, e))
    }, ny = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, iy = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, ry = function (t) {
        on.call(this, t)
    };
    ry.prototype = {
        constructor: ry, type: "text", brush: function (t, e) {
            var n = this.style;
            this.__dirty && Ve(n), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""), rn(i, n) && (this.setTransform(t), He(this, t, i, n, null, e), this.restoreTransform(t))
        }, getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && Ve(t), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = Se(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (n.x += t.x || 0, n.y += t.y || 0, Je(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
                }
                this._rect = n
            }
            return this._rect
        }
    }, u(ry, on);
    var oy = Ii.extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, n) {
                n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        }), ay = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
        sy = function (t) {
            return Xp.browser.ie && Xp.browser.version >= 11 ? function () {
                var e, n = this.__clipPaths, i = this.style;
                if (n) for (var r = 0; r < n.length; r++) {
                    var o = n[r], a = o && o.shape, s = o && o.type;
                    if (a && ("sector" === s && a.startAngle === a.endAngle || "rect" === s && (!a.width || !a.height))) {
                        for (l = 0; l < ay.length; l++) ay[l][2] = i[ay[l][0]], i[ay[l][0]] = ay[l][1];
                        e = !0;
                        break
                    }
                }
                if (t.apply(this, arguments), e) for (var l = 0; l < ay.length; l++) i[ay[l][0]] = ay[l][2]
            } : t
        }, ly = Ii.extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            brush: sy(Ii.prototype.brush),
            buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = e.startAngle, s = e.endAngle,
                    l = e.clockwise, u = Math.cos(a), h = Math.sin(a);
                t.moveTo(u * r + n, h * r + i), t.lineTo(u * o + n, h * o + i), t.arc(n, i, o, a, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, a, l), t.closePath()
            }
        }), uy = Ii.extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = 2 * Math.PI;
                t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
            }
        }), hy = function (t, e) {
            for (var n = t.length, i = [], r = 0, o = 1; o < n; o++) r += j(t[o - 1], t[o]);
            var a = r / 2;
            a = a < n ? n : a;
            for (o = 0; o < a; o++) {
                var s, l, u, h = o / (a - 1) * (e ? n : n - 1), c = Math.floor(h), d = h - c, f = t[c % n];
                e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
                var p = d * d, g = d * p;
                i.push([Pi(s[0], f[0], l[0], u[0], d, p, g), Pi(s[1], f[1], l[1], u[1], d, p, g)])
            }
            return i
        }, cy = function (t, e, n, i) {
            var r, o, a, s, l = [], u = [], h = [], c = [];
            if (i) {
                a = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
                for (var d = 0, f = t.length; d < f; d++) K(a, a, t[d]), Q(s, s, t[d]);
                K(a, a, i[0]), Q(s, s, i[1])
            }
            for (var d = 0, f = t.length; d < f; d++) {
                var p = t[d];
                if (n) r = t[d ? d - 1 : f - 1], o = t[(d + 1) % f]; else {
                    if (0 === d || d === f - 1) {
                        l.push(V(t[d]));
                        continue
                    }
                    r = t[d - 1], o = t[d + 1]
                }
                G(u, o, r), X(u, u, e);
                var g = j(p, r), m = j(p, o), v = g + m;
                0 !== v && (g /= v, m /= v), X(h, u, -g), X(c, u, m);
                var y = W([], p, h), x = W([], p, c);
                i && (Q(y, y, a), K(y, y, s), Q(x, x, a), K(x, x, s)), l.push(y), l.push(x)
            }
            return n && l.push(l.shift()), l
        }, dy = Ii.extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                Li(t, e, !0)
            }
        }), fy = Ii.extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                Li(t, e, !1)
            }
        }), py = Ii.extend({
            type: "rect", shape: {r: 0, x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.x, i = e.y, r = e.width, o = e.height;
                e.r ? Fe(t, e) : t.rect(n, i, r, o), t.closePath()
            }
        }), gy = Ii.extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.x1, i = e.y1, r = e.x2, o = e.y2, a = e.percent;
                0 !== a && (t.moveTo(n, i), a < 1 && (r = n * (1 - a) + r * a, o = i * (1 - a) + o * a), t.lineTo(r, o))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        }), my = [], vy = Ii.extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.x1, i = e.y1, r = e.x2, o = e.y2, a = e.cpx1, s = e.cpy1, l = e.cpx2, u = e.cpy2, h = e.percent;
                0 !== h && (t.moveTo(n, i), null == l || null == u ? (h < 1 && (ri(n, a, r, h, my), a = my[1], r = my[2], ri(i, s, o, h, my), s = my[1], o = my[2]), t.quadraticCurveTo(a, s, r, o)) : (h < 1 && (Qn(n, a, l, r, h, my), a = my[1], l = my[2], r = my[3], Qn(i, s, u, o, h, my), s = my[1], u = my[2], o = my[3]), t.bezierCurveTo(a, s, l, u, r, o)))
            },
            pointAt: function (t) {
                return Oi(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = Oi(this.shape, t, !0);
                return Y(e, e)
            }
        }), yy = Ii.extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise,
                    l = Math.cos(o), u = Math.sin(o);
                t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s)
            }
        }), xy = Ii.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), Ii.prototype.getBoundingRect.call(this)
            }
        }), _y = function (t) {
            this.colorStops = t || []
        };
    _y.prototype = {
        constructor: _y, addColorStop: function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }
    };
    var wy = function (t, e, n, i, r, o) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = o || !1, _y.call(this, r)
    };
    wy.prototype = {constructor: wy}, u(wy, _y);
    var by = function (t, e, n, i, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, _y.call(this, i)
    };
    by.prototype = {constructor: by}, u(by, _y), zi.prototype.incremental = !0, zi.prototype.clearDisplaybles = function () {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
    }, zi.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
    }, zi.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
    }, zi.prototype.eachPendingDisplayable = function (t) {
        for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
    }, zi.prototype.update = function () {
        this.updateTransform();
        for (t = this._cursor; t < this._displayables.length; t++) (e = this._displayables[t]).parent = this, e.update(), e.parent = null;
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null
        }
    }, zi.prototype.brush = function (t, e) {
        for (n = this._cursor; n < this._displayables.length; n++) (i = this._displayables[n]).beforeBrush && i.beforeBrush(t), i.brush(t, n === this._cursor ? null : this._displayables[n - 1]), i.afterBrush && i.afterBrush(t);
        this._cursor = n;
        for (var n = 0; n < this._temporaryDisplayables.length; n++) {
            var i = this._temporaryDisplayables[n];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === n ? null : this._temporaryDisplayables[n - 1]), i.afterBrush && i.afterBrush(t)
        }
        this._temporaryDisplayables = [], this.notClear = !0
    };
    var Sy = [];
    zi.prototype.getBoundingRect = function () {
        if (!this._rect) {
            for (var t = new re(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e], i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Sy)), t.union(i)
            }
            this._rect = t
        }
        return this._rect
    }, zi.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(n[0], n[1])) for (var i = 0; i < this._displayables.length; i++) if (this._displayables[i].contain(t, e)) return !0;
        return !1
    }, u(zi, on);
    var My = Math.round, Iy = Math.max, Ty = Math.min, Cy = {}, Ay = N(), Dy = 0, ky = (Object.freeze || Object)({
            extendShape: Ei,
            extendPath: function (t, e) {
                return ki(t, e)
            },
            makePath: Ni,
            makeImage: Ri,
            mergePath: function (t, e) {
                for (var n = [], i = t.length, r = 0; r < i; r++) {
                    var o = t[r];
                    o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), n.push(o.path)
                }
                var a = new Ii(e);
                return a.createPathProxy(), a.buildPath = function (t) {
                    t.appendPath(n);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, a
            },
            resizePath: Fi,
            subPixelOptimizeLine: Vi,
            subPixelOptimizeRect: Wi,
            subPixelOptimize: Hi,
            setElementHoverStyle: Ki,
            isInEmphasis: Qi,
            setHoverStyle: ir,
            setAsHoverStyleTrigger: rr,
            setLabelStyle: or,
            setTextStyle: ar,
            setText: function (t, e, n) {
                var i, r = {isRectText: !0};
                !1 === n ? i = !0 : r.autoColor = n, sr(t, e, r, i)
            },
            getFont: fr,
            updateProps: gr,
            initProps: mr,
            getTransform: vr,
            applyTransform: yr,
            transformDirection: xr,
            groupTransition: _r,
            clipPointsByRect: wr,
            clipRectByRect: function (t, e) {
                var n = Iy(t.x, e.x), i = Ty(t.x + t.width, e.x + e.width), r = Iy(t.y, e.y),
                    o = Ty(t.y + t.height, e.y + e.height);
                if (i >= n && o >= r) return {x: n, y: r, width: i - n, height: o - r}
            },
            createIcon: br,
            Group: Jg,
            Image: an,
            Text: ry,
            Circle: oy,
            Sector: ly,
            Ring: uy,
            Polygon: dy,
            Polyline: fy,
            Rect: py,
            Line: gy,
            BezierCurve: vy,
            Arc: yy,
            IncrementalDisplayable: zi,
            CompoundPath: xy,
            LinearGradient: wy,
            RadialGradient: by,
            BoundingRect: re
        }), Py = ["textStyle", "color"], Ly = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(Py) : null)
            }, getFont: function () {
                return fr({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, getTextRect: function (t) {
                return Se(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        },
        Oy = Km([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
        zy = {
            getItemStyle: function (t, e) {
                var n = Oy(this, t, e), i = this.getBorderLineDash();
                return i && (n.lineDash = i), n
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }, Ey = h, Ny = On();
    Sr.prototype = {
        constructor: Sr, init: null, mergeOption: function (t) {
            i(this.option, t, !0)
        }, get: function (t, e) {
            return null == t ? this.option : Mr(this.option, this.parsePath(t), !e && Ir(this, t))
        }, getShallow: function (t, e) {
            var n = this.option, i = null == n ? n : n[t], r = !e && Ir(this, t);
            return null == i && r && (i = r.getShallow(t)), i
        }, getModel: function (t, e) {
            var n, i = null == t ? this.option : Mr(this.option, t = this.parsePath(t));
            return e = e || (n = Ir(this, t)) && n.getModel(t), new Sr(i, e, this.ecModel)
        }, isEmpty: function () {
            return null == this.option
        }, restoreData: function () {
        }, clone: function () {
            return new (0, this.constructor)(n(this.option))
        }, setReadOnly: function (t) {
        }, parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        }, customizeGetParent: function (t) {
            Ny(this).getParent = t
        }, isAnimationEnabled: function () {
            if (!Xp.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, Wn(Sr), Hn(Sr), Ey(Sr, Jm), Ey(Sr, ev), Ey(Sr, Ly), Ey(Sr, zy);
    var Ry = 0, By = 1e-4,
        Fy = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        Vy = (Object.freeze || Object)({
            linearMap: Ar,
            parsePercent: Dr,
            round: kr,
            asc: Pr,
            getPrecision: Lr,
            getPrecisionSafe: Or,
            getPixelPrecision: zr,
            getPercentWithPrecision: Er,
            MAX_SAFE_INTEGER: 9007199254740991,
            remRadian: Nr,
            isRadianAroundZero: Rr,
            parseDate: Br,
            quantity: Fr,
            nice: Wr,
            quantile: function (t, e) {
                var n = (t.length - 1) * e + 1, i = Math.floor(n), r = +t[i - 1], o = n - i;
                return o ? r + o * (t[i] - r) : r
            },
            reformIntervals: function (t) {
                function e(t, n, i) {
                    return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] == (i ? -1 : 1) || !i && e(t, n, 1))
                }

                t.sort(function (t, n) {
                    return e(t, n, 0) ? -1 : 1
                });
                for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
                    for (var o = t[r].interval, a = t[r].close, s = 0; s < 2; s++) o[s] <= n && (o[s] = n, a[s] = s ? 1 : 1 - i), n = o[s], i = a[s];
                    o[0] === o[1] && a[0] * a[1] != 1 ? t.splice(r, 1) : r++
                }
                return t
            },
            isNumeric: function (t) {
                return t - parseFloat(t) >= 0
            }
        }), Wy = k, Hy = /([&<>"'])/g, Gy = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        Zy = ["a", "b", "c", "d", "e", "f", "g"], Uy = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, Xy = De, Yy = Se, jy = (Object.freeze || Object)({
            addCommas: Hr,
            toCamelCase: Gr,
            normalizeCssArray: Wy,
            encodeHTML: Zr,
            formatTpl: Ur,
            formatTplSimple: function (t, e, n) {
                return d(e, function (e, i) {
                    t = t.replace("{" + i + "}", n ? Zr(e) : e)
                }), t
            },
            getTooltipMarker: Xr,
            formatTime: jr,
            capitalFirst: qr,
            truncateText: Xy,
            getTextRect: Yy
        }), qy = d, $y = ["left", "right", "top", "bottom", "width", "height"],
        Ky = [["width", "left", "right"], ["height", "top", "bottom"]], Qy = $r,
        Jy = (v($r, "vertical"), v($r, "horizontal"), {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }), tx = On(), ex = Sr.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, n, i) {
                Sr.call(this, t, e, n, i), this.uid = Tr("ec_cpt_model")
            },
            init: function (t, e, n, i) {
                this.mergeDefaultAndTheme(t, n)
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode, r = n ? to(t) : {};
                i(t, e.getTheme().get(this.mainType)), i(t, this.getDefaultOption()), n && Jr(t, r, n)
            },
            mergeOption: function (t, e) {
                i(this.option, t, !0);
                var n = this.layoutMode;
                n && Jr(this.option, t, n)
            },
            optionUpdated: function (t, e) {
            },
            getDefaultOption: function () {
                var t = tx(this);
                if (!t.defaultOption) {
                    for (var e = [], n = this.constructor; n;) {
                        var r = n.prototype.defaultOption;
                        r && e.push(r), n = n.superClass
                    }
                    for (var o = {}, a = e.length - 1; a >= 0; a--) o = i(o, e[a], !0);
                    t.defaultOption = o
                }
                return t.defaultOption
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
    Un(ex, {registerWhenExtend: !0}), function (t) {
        var e = {};
        t.registerSubTypeDefaulter = function (t, n) {
            t = Fn(t), e[t.main] = n
        }, t.determineSubType = function (n, i) {
            var r = i.type;
            if (!r) {
                var o = Fn(n).main;
                t.hasSubTypes(n) && e[o] && (r = e[o](i))
            }
            return r
        }
    }(ex), function (t, e) {
        function n(t) {
            var n = {}, o = [];
            return d(t, function (a) {
                var s = i(n, a), u = r(s.originalDeps = e(a), t);
                s.entryCount = u.length, 0 === s.entryCount && o.push(a), d(u, function (t) {
                    l(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    l(e.successor, t) < 0 && e.successor.push(a)
                })
            }), {graph: n, noEntryList: o}
        }

        function i(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var n = [];
            return d(t, function (t) {
                l(e, t) >= 0 && n.push(t)
            }), n
        }

        t.topologicalTravel = function (t, e, i, r) {
            function o(t) {
                s[t].entryCount--, 0 === s[t].entryCount && l.push(t)
            }

            if (t.length) {
                var a = n(e), s = a.graph, l = a.noEntryList, u = {};
                for (d(t, function (t) {
                    u[t] = !0
                }); l.length;) {
                    var h = l.pop(), c = s[h], f = !!u[h];
                    f && (i.call(r, h, c.originalDeps.slice()), delete u[h]), d(c.successor, f ? function (t) {
                        u[t] = !0, o(t)
                    } : o)
                }
                d(u, function () {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }(ex, function (t) {
        var e = [];
        return d(ex.getClassesByMainType(t), function (t) {
            e = e.concat(t.prototype.dependencies || [])
        }), e = f(e, function (t) {
            return Fn(t).main
        }), "dataset" !== t && l(e, "dataset") <= 0 && e.unshift("dataset"), e
    }), h(ex, Jy);
    var nx = "";
    "undefined" != typeof navigator && (nx = navigator.platform || "");
    var ix = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: {
                fontFamily: nx.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, rx = On(), ox = {
            clearColorPalette: function () {
                rx(this).colorIdx = 0, rx(this).colorNameMap = {}
            }, getColorFromPalette: function (t, e, n) {
                var i = rx(e = e || this), r = i.colorIdx || 0, o = i.colorNameMap = i.colorNameMap || {};
                if (o.hasOwnProperty(t)) return o[t];
                var a = Mn(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != n && s ? no(s, n) : a;
                if ((l = l || a) && l.length) {
                    var u = l[r];
                    return t && (o[t] = u), i.colorIdx = (r + 1) % l.length, u
                }
            }
        }, ax = {
            cartesian2d: function (t, e, n, i) {
                var r = t.getReferringComponents("xAxis")[0], o = t.getReferringComponents("yAxis")[0];
                e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", o), ro(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), ro(o) && (i.set("y", o), e.firstCategoryDimIndex = 1)
            }, singleAxis: function (t, e, n, i) {
                var r = t.getReferringComponents("singleAxis")[0];
                e.coordSysDims = ["single"], n.set("single", r), ro(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
            }, polar: function (t, e, n, i) {
                var r = t.getReferringComponents("polar")[0], o = r.findAxisModel("radiusAxis"),
                    a = r.findAxisModel("angleAxis");
                e.coordSysDims = ["radius", "angle"], n.set("radius", o), n.set("angle", a), ro(o) && (i.set("radius", o), e.firstCategoryDimIndex = 0), ro(a) && (i.set("angle", a), e.firstCategoryDimIndex = 1)
            }, geo: function (t, e, n, i) {
                e.coordSysDims = ["lng", "lat"]
            }, parallel: function (t, e, n, i) {
                var r = t.ecModel, o = r.getComponent("parallel", t.get("parallelIndex")),
                    a = e.coordSysDims = o.dimensions.slice();
                d(o.parallelAxisIndex, function (t, o) {
                    var s = r.getComponent("parallelAxis", t), l = a[o];
                    n.set(l, s), ro(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = o)
                })
            }
        }, sx = "original", lx = "arrayRows", ux = "objectRows", hx = "keyedColumns", cx = "unknown", dx = "typedArray",
        fx = "column", px = "row";
    oo.seriesDataToSource = function (t) {
        return new oo({data: t, sourceFormat: S(t) ? dx : sx, fromDataset: !1})
    }, Hn(oo);
    var gx = On(), mx = "\0_ec_inner", vx = Sr.extend({
        init: function (t, e, n, i) {
            n = n || {}, this.option = null, this._theme = new Sr(n), this._optionManager = i
        }, setOption: function (t, e) {
            P(!(mx in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
        }, resetOption: function (t) {
            var e = !1, n = this._optionManager;
            if (!t || "recreate" === t) {
                var i = n.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : wo.call(this, i), e = !0
            }
            if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = n.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
                var o = n.getMediaOption(this, this._api);
                o.length && d(o, function (t) {
                    this.mergeOption(t, e = !0)
                }, this)
            }
            return e
        }, mergeOption: function (t) {
            var e = this.option, r = this._componentsMap, a = [];
            lo(this), d(t, function (t, r) {
                null != t && (ex.hasClass(r) ? r && a.push(r) : e[r] = null == e[r] ? n(t) : i(e[r], t, !0))
            }), ex.topologicalTravel(a, ex.getAllClassMainTypes(), function (n, i) {
                var a = Mn(t[n]), s = An(r.get(n), a);
                Dn(s), d(s, function (t, e) {
                    var i = t.option;
                    w(i) && (t.keyInfo.mainType = n, t.keyInfo.subType = So(n, i, t.exist))
                });
                var l = bo(r, i);
                e[n] = [], r.set(n, []), d(s, function (t, i) {
                    var a = t.exist, s = t.option;
                    if (P(w(s) || a, "Empty component definition"), s) {
                        var u = ex.getClass(n, t.keyInfo.subType, !0);
                        if (a && a instanceof u) a.name = t.keyInfo.name, a.mergeOption(s, this), a.optionUpdated(s, !1); else {
                            var h = o({dependentModels: l, componentIndex: i}, t.keyInfo);
                            o(a = new u(s, this, this, h), h), a.init(s, this, this, h), a.optionUpdated(null, !0)
                        }
                    } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                    r.get(n)[i] = a, e[n][i] = a.option
                }, this), "series" === n && Mo(this, r.get("series"))
            }, this), this._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || [])
        }, getOption: function () {
            var t = n(this.option);
            return d(t, function (e, n) {
                if (ex.hasClass(n)) {
                    for (var i = (e = Mn(e)).length - 1; i >= 0; i--) Pn(e[i]) && e.splice(i, 1);
                    t[n] = e
                }
            }), delete t[mx], t
        }, getTheme: function () {
            return this._theme
        }, getComponent: function (t, e) {
            var n = this._componentsMap.get(t);
            if (n) return n[e || 0]
        }, queryComponents: function (t) {
            var e = t.mainType;
            if (!e) return [];
            var n = t.index, i = t.id, r = t.name, o = this._componentsMap.get(e);
            if (!o || !o.length) return [];
            var a;
            if (null != n) y(n) || (n = [n]), a = g(f(n, function (t) {
                return o[t]
            }), function (t) {
                return !!t
            }); else if (null != i) {
                var s = y(i);
                a = g(o, function (t) {
                    return s && l(i, t.id) >= 0 || !s && t.id === i
                })
            } else if (null != r) {
                var u = y(r);
                a = g(o, function (t) {
                    return u && l(r, t.name) >= 0 || !u && t.name === r
                })
            } else a = o.slice();
            return Io(a, t)
        }, findComponents: function (t) {
            var e = t.query, n = t.mainType, i = function (t) {
                var e = n + "Index", i = n + "Id", r = n + "Name";
                return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                    mainType: n,
                    index: t[e],
                    id: t[i],
                    name: t[r]
                }
            }(e);
            return function (e) {
                return t.filter ? g(e, t.filter) : e
            }(Io(i ? this.queryComponents(i) : this._componentsMap.get(n), t))
        }, eachComponent: function (t, e, n) {
            var i = this._componentsMap;
            "function" == typeof t ? (n = e, e = t, i.each(function (t, i) {
                d(t, function (t, r) {
                    e.call(n, i, t, r)
                })
            })) : _(t) ? d(i.get(t), e, n) : w(t) && d(this.findComponents(t), e, n)
        }, getSeriesByName: function (t) {
            return g(this._componentsMap.get("series"), function (e) {
                return e.name === t
            })
        }, getSeriesByIndex: function (t) {
            return this._componentsMap.get("series")[t]
        }, getSeriesByType: function (t) {
            return g(this._componentsMap.get("series"), function (e) {
                return e.subType === t
            })
        }, getSeries: function () {
            return this._componentsMap.get("series").slice()
        }, getSeriesCount: function () {
            return this._componentsMap.get("series").length
        }, eachSeries: function (t, e) {
            d(this._seriesIndices, function (n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n)
            }, this)
        }, eachRawSeries: function (t, e) {
            d(this._componentsMap.get("series"), t, e)
        }, eachSeriesByType: function (t, e, n) {
            d(this._seriesIndices, function (i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i)
            }, this)
        }, eachRawSeriesByType: function (t, e, n) {
            return d(this.getSeriesByType(t), e, n)
        }, isSeriesFiltered: function (t) {
            return null == this._seriesIndicesMap.get(t.componentIndex)
        }, getCurrentSeriesIndices: function () {
            return (this._seriesIndices || []).slice()
        }, filterSeries: function (t, e) {
            Mo(this, g(this._componentsMap.get("series"), t, e))
        }, restoreData: function (t) {
            var e = this._componentsMap;
            Mo(this, e.get("series"));
            var n = [];
            e.each(function (t, e) {
                n.push(e)
            }), ex.topologicalTravel(n, ex.getAllClassMainTypes(), function (n, i) {
                d(e.get(n), function (e) {
                    ("series" !== n || !xo(e, t)) && e.restoreData()
                })
            })
        }
    });
    h(vx, ox);
    var yx = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        xx = {};
    Co.prototype = {
        constructor: Co, create: function (t, e) {
            var n = [];
            d(xx, function (i, r) {
                var o = i.create(t, e);
                n = n.concat(o || [])
            }), this._coordinateSystems = n
        }, update: function (t, e) {
            d(this._coordinateSystems, function (n) {
                n.update && n.update(t, e)
            })
        }, getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
        }
    }, Co.register = function (t, e) {
        xx[t] = e
    }, Co.get = function (t) {
        return xx[t]
    };
    var _x = d, bx = n, Sx = f, Mx = i, Ix = /^(min|max)?(.+)$/;
    Ao.prototype = {
        constructor: Ao, setOption: function (t, e) {
            t && d(Mn(t.series), function (t) {
                t && t.data && S(t.data) && O(t.data)
            }), t = bx(t, !0);
            var n = this._optionBackup, i = Do.call(this, t, e, !n);
            this._newBaseOption = i.baseOption, n ? (Oo(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        }, mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = Sx(e.timelineOptions, bx), this._mediaList = Sx(e.mediaList, bx), this._mediaDefault = bx(e.mediaDefault), this._currentMediaIndices = [], bx(t ? e.baseOption : this._newBaseOption)
        }, getTimelineOption: function (t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = bx(n[i.getCurrentIndex()], !0))
            }
            return e
        }, getMediaOption: function (t) {
            var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, r = this._mediaDefault,
                o = [], a = [];
            if (!i.length && !r) return a;
            for (var s = 0, l = i.length; s < l; s++) ko(i[s].query, e, n) && o.push(s);
            return !o.length && r && (o = [-1]), o.length && !Lo(o, this._currentMediaIndices) && (a = Sx(o, function (t) {
                return bx(-1 === t ? r.option : i[t].option)
            })), this._currentMediaIndices = o, a
        }
    };
    var Tx = d, Cx = w, Ax = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        Dx = function (t, e) {
            Tx(Vo(t.series), function (t) {
                Cx(t) && Fo(t)
            });
            var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Tx(n, function (e) {
                Tx(Vo(t[e]), function (t) {
                    t && (Ro(t, "axisLabel"), Ro(t.axisPointer, "label"))
                })
            }), Tx(Vo(t.parallel), function (t) {
                var e = t && t.parallelAxisDefault;
                Ro(e, "axisLabel"), Ro(e && e.axisPointer, "label")
            }), Tx(Vo(t.calendar), function (t) {
                Eo(t, "itemStyle"), Ro(t, "dayLabel"), Ro(t, "monthLabel"), Ro(t, "yearLabel")
            }), Tx(Vo(t.radar), function (t) {
                Ro(t, "name")
            }), Tx(Vo(t.geo), function (t) {
                Cx(t) && (Bo(t), Tx(Vo(t.regions), function (t) {
                    Bo(t)
                }))
            }), Tx(Vo(t.timeline), function (t) {
                Bo(t), Eo(t, "label"), Eo(t, "itemStyle"), Eo(t, "controlStyle", !0);
                var e = t.data;
                y(e) && d(e, function (t) {
                    w(t) && (Eo(t, "label"), Eo(t, "itemStyle"))
                })
            }), Tx(Vo(t.toolbox), function (t) {
                Eo(t, "iconStyle"), Tx(t.feature, function (t) {
                    Eo(t, "iconStyle")
                })
            }), Ro(Wo(t.axisPointer), "label"), Ro(Wo(t.tooltip).axisPointer, "label")
        }, kx = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        Px = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        Lx = function (t, e) {
            Dx(t, e), t.series = Mn(t.series), d(t.series, function (t) {
                if (w(t)) {
                    var e = t.type;
                    if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var n = Ho(t, "pointer.color");
                        null != n && Go(t, "itemStyle.normal.color", n)
                    }
                    Zo(t)
                }
            }), t.dataRange && (t.visualMap = t.dataRange), d(Px, function (e) {
                var n = t[e];
                n && (y(n) || (n = [n]), d(n, function (t) {
                    Zo(t)
                }))
            })
        }, Ox = Xo.prototype;
    Ox.pure = !1, Ox.persistent = !0, Ox.getSource = function () {
        return this._source
    };
    var zx = {
        arrayRows_column: {
            pure: !0, count: function () {
                return Math.max(0, this._data.length - this._source.startIndex)
            }, getItem: function (t) {
                return this._data[t + this._source.startIndex]
            }, appendData: qo
        }, arrayRows_row: {
            pure: !0, count: function () {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0
            }, getItem: function (t) {
                t += this._source.startIndex;
                for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                    var r = n[i];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function () {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
            }
        }, objectRows: {pure: !0, count: Yo, getItem: jo, appendData: qo}, keyedColumns: {
            pure: !0, count: function () {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0
            }, getItem: function (t) {
                for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                    var r = this._data[n[i].name];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function (t) {
                var e = this._data;
                d(t, function (t, n) {
                    for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
                })
            }
        }, original: {count: Yo, getItem: jo, appendData: qo}, typedArray: {
            persistent: !1, pure: !0, count: function () {
                return this._data ? this._data.length / this._dimSize : 0
            }, getItem: function (t, e) {
                t -= this._offset, e = e || [];
                for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
                return e
            }, appendData: function (t) {
                this._data = t
            }, clean: function () {
                this._offset += this.count(), this._data = null
            }
        }
    }, Ex = {
        arrayRows: $o, objectRows: function (t, e, n, i) {
            return null != n ? t[i] : t
        }, keyedColumns: $o, original: function (t, e, n, i) {
            var r = Tn(t);
            return null != n && r instanceof Array ? r[n] : r
        }, typedArray: $o
    }, Nx = {
        arrayRows: Ko, objectRows: function (t, e, n, i) {
            return Qo(t[e], this._dimensionInfos[e])
        }, keyedColumns: Ko, original: function (t, e, n, i) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && Cn(t) && (this.hasItemOption = !0), Qo(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
        }, typedArray: function (t, e, n, i) {
            return t[i]
        }
    }, Rx = /\{@(.+?)\}/g, Bx = {
        getDataParams: function (t, e) {
            var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), o = n.getName(t),
                a = n.getRawDataItem(t), s = n.getItemVisual(t, "color"), l = this.ecModel.getComponent("tooltip"),
                u = Bn(l && l.get("renderMode")), h = this.mainType, c = "series" === h;
            return {
                componentType: h,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: c ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: c ? this.id : null,
                seriesName: c ? this.name : null,
                name: o,
                dataIndex: r,
                data: a,
                dataType: e,
                value: i,
                color: s,
                marker: Xr({color: s, renderMode: u}),
                $vars: ["seriesName", "name", "value"]
            }
        }, getFormattedLabel: function (t, e, n, i, r) {
            e = e || "normal";
            var o = this.getData(n), a = o.getItemModel(t), s = this.getDataParams(t, n);
            null != i && s.value instanceof Array && (s.value = s.value[i]);
            var l = a.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
            return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? Ur(l, s).replace(Rx, function (e, n) {
                var i = n.length;
                return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), Jo(o, t, n)
            }) : void 0
        }, getRawValue: function (t, e) {
            return Jo(this.getData(e), t)
        }, formatTooltip: function () {
        }
    }, Fx = na.prototype;
    Fx.perform = function (t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t
        }

        var n = this._upstream, i = t && t.skip;
        if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var o;
        this._plan && !i && (o = this._plan(this.context));
        var a = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), u = t && t.modDataCount || 0;
        a === l && s === u || (o = "reset");
        var h;
        (this._dirty || "reset" === o) && (this._dirty = !1, h = ra(this, i)), this._modBy = l, this._modDataCount = u;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!i && (h || d < f)) {
                var p = this._progress;
                if (y(p)) for (var g = 0; g < p.length; g++) ia(this, p[g], d, f, l, u); else ia(this, p, d, f, l, u)
            }
            this._dueIndex = f;
            var m = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = m
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
    };
    var Vx = function () {
        function t() {
            return i < n ? i++ : null
        }

        function e() {
            var t = i % a * r + Math.ceil(i / a), e = i >= n ? null : t < o ? t : i;
            return i++, e
        }

        var n, i, r, o, a, s = {
            reset: function (l, u, h, c) {
                i = l, n = u, r = h, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t
            }
        };
        return s
    }();
    Fx.dirty = function () {
        this._dirty = !0, this._onDirty && this._onDirty(this.context)
    }, Fx.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
    }, Fx.pipe = function (t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
    }, Fx.dispose = function () {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
    }, Fx.getUpstream = function () {
        return this._upstream
    }, Fx.getDownstream = function () {
        return this._downstream
    }, Fx.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
    };
    var Wx = On(), Hx = ex.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function (t, e, n, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = ea({
                count: sa,
                reset: la
            }), this.dataTask.context = {model: this}, this.mergeDefaultAndTheme(t, n), uo(this);
            var r = this.getInitialData(t, n);
            ha(r, this), this.dataTask.context.data = r, Wx(this).dataBeforeProcessed = r, oa(this)
        },
        mergeDefaultAndTheme: function (t, e) {
            var n = this.layoutMode, r = n ? to(t) : {}, o = this.subType;
            ex.hasClass(o) && (o += "Series"), i(t, e.getTheme().get(this.subType)), i(t, this.getDefaultOption()), In(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && Jr(t, r, n)
        },
        mergeOption: function (t, e) {
            t = i(this.option, t, !0), this.fillDataTextStyle(t.data);
            var n = this.layoutMode;
            n && Jr(this.option, t, n), uo(this);
            var r = this.getInitialData(t, e);
            ha(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, Wx(this).dataBeforeProcessed = r, oa(this)
        },
        fillDataTextStyle: function (t) {
            if (t && !S(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && In(t[n], "label", e)
        },
        getInitialData: function () {
        },
        appendData: function (t) {
            this.getRawData().appendData(t.data)
        },
        getData: function (t) {
            var e = da(this);
            if (e) {
                var n = e.context.data;
                return null == t ? n : n.getLinkedData(t)
            }
            return Wx(this).data
        },
        setData: function (t) {
            var e = da(this);
            if (e) {
                var n = e.context;
                n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
            }
            Wx(this).data = t
        },
        getSource: function () {
            return so(this)
        },
        getRawData: function () {
            return Wx(this).dataBeforeProcessed
        },
        getBaseAxis: function () {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
        },
        formatTooltip: function (t, e, n, i) {
            function r(t) {
                return {renderMode: i, content: Zr(Hr(t)), style: l}
            }

            var o = this, a = "html" === (i = i || "html") ? "<br/>" : "\n", s = "richText" === i, l = {}, u = 0,
                h = this.getData(), c = h.mapDimension("defaultedTooltip", !0), f = c.length, g = this.getRawValue(t),
                m = y(g), v = h.getItemVisual(t, "color");
            w(v) && v.colorStops && (v = (v.colorStops[0] || {}).color), v = v || "transparent";
            var x = (f > 1 || m && !f ? function (n) {
                    function r(t, n) {
                        var r = h.getDimensionInfo(n);
                        if (r && !1 !== r.otherDims.tooltip) {
                            var c = r.type, d = "sub" + o.seriesIndex + "at" + u,
                                p = Xr({color: v, type: "subItem", renderMode: i, markerId: d}),
                                g = "string" == typeof p ? p : p.content,
                                m = (a ? g + Zr(r.displayName || "-") + ": " : "") + Zr("ordinal" === c ? t + "" : "time" === c ? e ? "" : jr("yyyy/MM/dd hh:mm:ss", t) : Hr(t));
                            m && f.push(m), s && (l[d] = v, ++u)
                        }
                    }

                    var a = p(n, function (t, e, n) {
                        var i = h.getDimensionInfo(n);
                        return t |= i && !1 !== i.tooltip && null != i.displayName
                    }, 0), f = [];
                    c.length ? d(c, function (e) {
                        r(Jo(h, t, e), e)
                    }) : d(n, r);
                    var g = a ? s ? "\n" : "<br/>" : "", m = g + f.join(g || ", ");
                    return {renderMode: i, content: m, style: l}
                }(g) : r(f ? Jo(h, t, c[0]) : m ? g[0] : g)).content, _ = o.seriesIndex + "at" + u,
                b = Xr({color: v, type: "item", renderMode: i, markerId: _});
            l[_] = v, ++u;
            var S = h.getName(t), M = this.name;
            kn(this) || (M = ""), M = M ? Zr(M) + (e ? ": " : a) : "";
            var I = "string" == typeof b ? b : b.content;
            return {html: e ? I + M + x : M + I + (S ? Zr(S) + ": " + x : x), markers: l}
        },
        isAnimationEnabled: function () {
            if (Xp.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
        },
        restoreData: function () {
            this.dataTask.dirty()
        },
        getColorFromPalette: function (t, e, n) {
            var i = this.ecModel, r = ox.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)), r
        },
        coordDimToDataDim: function (t) {
            return this.getRawData().mapDimension(t, !0)
        },
        getProgressive: function () {
            return this.get("progressive")
        },
        getProgressiveThreshold: function () {
            return this.get("progressiveThreshold")
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    h(Hx, Bx), h(Hx, ox);
    var Gx = function () {
        this.group = new Jg, this.uid = Tr("viewComponent")
    };
    Gx.prototype = {
        constructor: Gx, init: function (t, e) {
        }, render: function (t, e, n, i) {
        }, dispose: function () {
        }, filterForExposedEvent: null
    };
    var Zx = Gx.prototype;
    Zx.updateView = Zx.updateLayout = Zx.updateVisual = function (t, e, n, i) {
    }, Wn(Gx), Un(Gx, {registerWhenExtend: !0});
    var Ux = function () {
        var t = On();
        return function (e) {
            var n = t(e), i = e.pipelineContext, r = n.large, o = n.progressiveRender, a = n.large = i.large,
                s = n.progressiveRender = i.progressiveRender;
            return !!(r ^ a || o ^ s) && "reset"
        }
    }, Xx = On(), Yx = Ux();
    fa.prototype = {
        type: "chart", init: function (t, e) {
        }, render: function (t, e, n, i) {
        }, highlight: function (t, e, n, i) {
            ga(t.getData(), i, "emphasis")
        }, downplay: function (t, e, n, i) {
            ga(t.getData(), i, "normal")
        }, remove: function (t, e) {
            this.group.removeAll()
        }, dispose: function () {
        }, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null
    };
    var jx = fa.prototype;
    jx.updateView = jx.updateLayout = jx.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
    }, Wn(fa), Un(fa, {registerWhenExtend: !0}), fa.markUpdateMethod = function (t, e) {
        Xx(t).updateMethod = e
    };
    var qx = {
        incrementalPrepareRender: {
            progress: function (t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
            }
        }, render: {
            forceFirstProgress: !0, progress: function (t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload)
            }
        }
    }, $x = "\0__throttleOriginMethod", Kx = "\0__throttleRate", Qx = "\0__throttleType", Jx = {
        createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
            var n = t.getData(), i = (t.visualColorAccessPath || "itemStyle.color").split("."),
                r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof _y || n.each(function (e) {
                    n.setItemVisual(e, "color", r(t.getDataParams(e)))
                });
                return {
                    dataEach: n.hasItemOption ? function (t, e) {
                        var n = t.getItemModel(e).get(i, !0);
                        null != n && t.setItemVisual(e, "color", n)
                    } : null
                }
            }
        }
    }, t_ = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {title: "数据视图", lang: ["数据视图", "关闭", "刷新"]},
            dataZoom: {title: {zoom: "区域缩放", back: "区域缩放还原"}},
            magicType: {title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"}},
            restore: {title: "还原"},
            saveAsImage: {title: "保存为图片", lang: ["右键另存为图片"]}
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，"},
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {middle: "；", end: "。"}
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {middle: "，", end: ""}
            }
        }
    }, e_ = function (t, e) {
        function n(t, e) {
            if ("string" != typeof t) return t;
            var n = t;
            return d(e, function (t, e) {
                n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
            }), n
        }

        function i(t) {
            var e = o.get(t);
            if (null == e) {
                for (var n = t.split("."), i = t_.aria, r = 0; r < n.length; ++r) i = i[n[r]];
                return i
            }
            return e
        }

        function r(t) {
            return t_.series.typeNames[t] || "自定义图"
        }

        var o = e.getModel("aria");
        if (o.get("show")) if (o.get("description")) t.setAttribute("aria-label", o.get("description")); else {
            var a = 0;
            e.eachSeries(function (t, e) {
                ++a
            }, this);
            var s, l = o.get("data.maxCount") || 10, u = o.get("series.maxCount") || 10, h = Math.min(a, u);
            if (!(a < 1)) {
                var c = function () {
                    var t = e.getModel("title").option;
                    return t && t.length && (t = t[0]), t && t.text
                }();
                s = c ? n(i("general.withTitle"), {title: c}) : i("general.withoutTitle");
                var f = [];
                s += n(i(a > 1 ? "series.multiple.prefix" : "series.single.prefix"), {seriesCount: a}), e.eachSeries(function (t, e) {
                    if (e < h) {
                        var o, s = t.get("name"), u = "series." + (a > 1 ? "multiple" : "single") + ".";
                        o = n(o = i(s ? u + "withName" : u + "withoutName"), {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: r(t.subType)
                        });
                        var c = t.getData();
                        window.data = c, c.count() > l ? o += n(i("data.partialData"), {displayCnt: l}) : o += i("data.allData");
                        for (var d = [], p = 0; p < c.count(); p++) if (p < l) {
                            var g = c.getName(p), m = Jo(c, p);
                            d.push(n(i(g ? "data.withName" : "data.withoutName"), {name: g, value: m}))
                        }
                        o += d.join(i("data.separator.middle")) + i("data.separator.end"), f.push(o)
                    }
                }), s += f.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", s)
            }
        }
    }, n_ = Math.PI, i_ = wa.prototype;
    i_.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (t) {
            var e = t.overallTask;
            e && e.dirty()
        })
    }, i_.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id), i = n.context,
                r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex ? n.step : null,
                o = i && i.modDataCount;
            return {step: r, modBy: null != o ? Math.ceil(o / r) : null, modDataCount: o}
        }
    }, i_.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, i_.updateStreamModes = function (t, e) {
        var n = this._pipelineMap.get(t.uid), i = t.getData().count(),
            r = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold,
            o = t.get("large") && i >= t.get("largeThreshold"), a = "mod" === t.get("progressiveChunkMode") ? i : null;
        t.pipelineContext = n.context = {progressiveRender: r, modDataCount: a, large: o}
    }, i_.restorePipelines = function (t) {
        var e = this, n = e._pipelineMap = N();
        t.eachSeries(function (t) {
            var i = t.getProgressive(), r = t.uid;
            n.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(i || 700),
                count: 0
            }), Oa(e, t, t.dataTask)
        })
    }, i_.prepareStageTasks = function () {
        var t = this._stageTaskMap, e = this.ecInstance.getModel(), n = this.api;
        d(this._allHandlers, function (i) {
            var r = t.get(i.uid) || t.set(i.uid, []);
            i.reset && Sa(this, i, r, e, n), i.overallReset && Ma(this, i, r, e, n)
        }, this)
    }, i_.prepareView = function (t, e, n, i) {
        var r = t.renderTask, o = r.context;
        o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, Oa(this, e, r)
    }, i_.performDataProcessorTasks = function (t, e) {
        ba(this, this._dataProcessorHandlers, t, e, {block: !0})
    }, i_.performVisualTasks = function (t, e, n) {
        ba(this, this._visualHandlers, t, e, n)
    }, i_.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (t) {
            e |= t.dataTask.perform()
        }), this.unfinished |= e
    }, i_.plan = function () {
        this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    };
    var r_ = i_.updatePayload = function (t, e) {
        "remain" !== e && (t.context.payload = e)
    }, o_ = Pa(0);
    wa.wrapStageHandler = function (t, e) {
        return x(t) && (t = {
            overallReset: t,
            seriesType: za(t)
        }), t.uid = Tr("stageHandler"), e && (t.visualType = e), t
    };
    var a_, s_ = {}, l_ = {};
    Ea(s_, vx), Ea(l_, To), s_.eachSeriesByType = s_.eachRawSeriesByType = function (t) {
        a_ = t
    }, s_.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (a_ = t.subType)
    };
    var u_ = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        h_ = {
            color: u_,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], u_]
        },
        c_ = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
        d_ = {
            color: c_,
            backgroundColor: "#333",
            tooltip: {axisPointer: {lineStyle: {color: "#eee"}, crossStyle: {color: "#eee"}}},
            legend: {textStyle: {color: "#eee"}},
            textStyle: {color: "#eee"},
            title: {textStyle: {color: "#eee"}},
            toolbox: {iconStyle: {normal: {borderColor: "#eee"}}},
            dataZoom: {textStyle: {color: "#eee"}},
            visualMap: {textStyle: {color: "#eee"}},
            timeline: {
                lineStyle: {color: "#eee"},
                itemStyle: {normal: {color: c_[1]}},
                label: {normal: {textStyle: {color: "#eee"}}},
                controlStyle: {normal: {color: "#eee", borderColor: "#eee"}}
            },
            timeAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            logAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            valueAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            categoryAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            line: {symbol: "circle"},
            graph: {color: c_},
            gauge: {title: {textStyle: {color: "#eee"}}},
            candlestick: {
                itemStyle: {
                    normal: {
                        color: "#FD1050",
                        color0: "#0CF49B",
                        borderColor: "#FD1050",
                        borderColor0: "#0CF49B"
                    }
                }
            }
        };
    d_.categoryAxis.splitLine.show = !1, ex.extend({
        type: "dataset",
        defaultOption: {seriesLayoutBy: fx, sourceHeader: null, dimensions: null, source: null},
        optionUpdated: function () {
            ao(this)
        }
    }), Gx.extend({type: "dataset"});
    var f_ = Ii.extend({
        type: "ellipse", shape: {cx: 0, cy: 0, rx: 0, ry: 0}, buildPath: function (t, e) {
            var n = .5522848, i = e.cx, r = e.cy, o = e.rx, a = e.ry, s = o * n, l = a * n;
            t.moveTo(i - o, r), t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a), t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r), t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a), t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r), t.closePath()
        }
    }), p_ = /[\s,]+/;
    Ra.prototype.parse = function (t, e) {
        e = e || {};
        var n = Na(t);
        if (!n) throw new Error("Illegal svg");
        var i = new Jg;
        this._root = i;
        var r = n.getAttribute("viewBox") || "", o = parseFloat(n.getAttribute("width") || e.width),
            a = parseFloat(n.getAttribute("height") || e.height);
        isNaN(o) && (o = null), isNaN(a) && (a = null), Wa(n, i, null, !0);
        for (var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;
        var l, u;
        if (r) {
            var h = L(r).split(p_);
            h.length >= 4 && (l = {
                x: parseFloat(h[0] || 0),
                y: parseFloat(h[1] || 0),
                width: parseFloat(h[2]),
                height: parseFloat(h[3])
            })
        }
        if (l && null != o && null != a && (u = Ua(l, o, a), !e.ignoreViewBox)) {
            var c = i;
            (i = new Jg).add(c), c.scale = u.scale.slice(), c.position = u.position.slice()
        }
        return e.ignoreRootClip || null == o || null == a || i.setClipPath(new py({
            shape: {
                x: 0,
                y: 0,
                width: o,
                height: a
            }
        })), {root: i, width: o, height: a, viewBoxRect: l, viewBoxTransform: u}
    }, Ra.prototype._parseNode = function (t, e) {
        var n = t.nodeName.toLowerCase();
        "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
        var i;
        if (this._isDefine) {
            if (a = m_[n]) {
                var r = a.call(this, t), o = t.getAttribute("id");
                o && (this._defs[o] = r)
            }
        } else {
            var a = g_[n];
            a && (i = a.call(this, t, e), e.add(i))
        }
        for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
        "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
    }, Ra.prototype._parseText = function (t, e) {
        if (1 === t.nodeType) {
            var n = t.getAttribute("dx") || 0, i = t.getAttribute("dy") || 0;
            this._textX += parseFloat(n), this._textY += parseFloat(i)
        }
        var r = new ry({
            style: {text: t.textContent, transformText: !0},
            position: [this._textX || 0, this._textY || 0]
        });
        Fa(e, r), Wa(t, r, this._defs);
        var o = r.style.fontSize;
        o && o < 9 && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= o / 9, r.scale[1] *= o / 9);
        var a = r.getBoundingRect();
        return this._textX += a.width, e.add(r), r
    };
    var g_ = {
            g: function (t, e) {
                var n = new Jg;
                return Fa(e, n), Wa(t, n, this._defs), n
            }, rect: function (t, e) {
                var n = new py;
                return Fa(e, n), Wa(t, n, this._defs), n.setShape({
                    x: parseFloat(t.getAttribute("x") || 0),
                    y: parseFloat(t.getAttribute("y") || 0),
                    width: parseFloat(t.getAttribute("width") || 0),
                    height: parseFloat(t.getAttribute("height") || 0)
                }), n
            }, circle: function (t, e) {
                var n = new oy;
                return Fa(e, n), Wa(t, n, this._defs), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    r: parseFloat(t.getAttribute("r") || 0)
                }), n
            }, line: function (t, e) {
                var n = new gy;
                return Fa(e, n), Wa(t, n, this._defs), n.setShape({
                    x1: parseFloat(t.getAttribute("x1") || 0),
                    y1: parseFloat(t.getAttribute("y1") || 0),
                    x2: parseFloat(t.getAttribute("x2") || 0),
                    y2: parseFloat(t.getAttribute("y2") || 0)
                }), n
            }, ellipse: function (t, e) {
                var n = new f_;
                return Fa(e, n), Wa(t, n, this._defs), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    rx: parseFloat(t.getAttribute("rx") || 0),
                    ry: parseFloat(t.getAttribute("ry") || 0)
                }), n
            }, polygon: function (t, e) {
                var n = t.getAttribute("points");
                n && (n = Va(n));
                var i = new dy({shape: {points: n || []}});
                return Fa(e, i), Wa(t, i, this._defs), i
            }, polyline: function (t, e) {
                var n = new Ii;
                Fa(e, n), Wa(t, n, this._defs);
                var i = t.getAttribute("points");
                return i && (i = Va(i)), new fy({shape: {points: i || []}})
            }, image: function (t, e) {
                var n = new an;
                return Fa(e, n), Wa(t, n, this._defs), n.setStyle({
                    image: t.getAttribute("xlink:href"),
                    x: t.getAttribute("x"),
                    y: t.getAttribute("y"),
                    width: t.getAttribute("width"),
                    height: t.getAttribute("height")
                }), n
            }, text: function (t, e) {
                var n = t.getAttribute("x") || 0, i = t.getAttribute("y") || 0, r = t.getAttribute("dx") || 0,
                    o = t.getAttribute("dy") || 0;
                this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(o);
                var a = new Jg;
                return Fa(e, a), Wa(t, a, this._defs), a
            }, tspan: function (t, e) {
                var n = t.getAttribute("x"), i = t.getAttribute("y");
                null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
                var r = t.getAttribute("dx") || 0, o = t.getAttribute("dy") || 0, a = new Jg;
                return Fa(e, a), Wa(t, a, this._defs), this._textX += r, this._textY += o, a
            }, path: function (t, e) {
                var n = Di(t.getAttribute("d") || "");
                return Fa(e, n), Wa(t, n, this._defs), n
            }
        }, m_ = {
            lineargradient: function (t) {
                var e = parseInt(t.getAttribute("x1") || 0, 10), n = parseInt(t.getAttribute("y1") || 0, 10),
                    i = parseInt(t.getAttribute("x2") || 10, 10), r = parseInt(t.getAttribute("y2") || 0, 10),
                    o = new wy(e, n, i, r);
                return Ba(t, o), o
            }, radialgradient: function (t) {
            }
        }, v_ = {
            fill: "fill",
            stroke: "stroke",
            "stroke-width": "lineWidth",
            opacity: "opacity",
            "fill-opacity": "fillOpacity",
            "stroke-opacity": "strokeOpacity",
            "stroke-dasharray": "lineDash",
            "stroke-dashoffset": "lineDashOffset",
            "stroke-linecap": "lineCap",
            "stroke-linejoin": "lineJoin",
            "stroke-miterlimit": "miterLimit",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "text-align": "textAlign",
            "alignment-baseline": "textBaseline"
        }, y_ = /url\(\s*#(.*?)\)/, x_ = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
        __ = /([^\s:;]+)\s*:\s*([^:;]+)/g, w_ = N(), b_ = {
            registerMap: function (t, e, n) {
                var i;
                return y(e) ? i = e : e.svg ? i = [{
                    type: "svg",
                    source: e.svg,
                    specialAreas: e.specialAreas
                }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
                    type: "geoJSON",
                    source: e,
                    specialAreas: n
                }]), d(i, function (t) {
                    var e = t.type;
                    "geoJson" === e && (e = t.type = "geoJSON"), (0, S_[e])(t)
                }), w_.set(t, i)
            }, retrieveMap: function (t) {
                return w_.get(t)
            }
        }, S_ = {
            geoJSON: function (t) {
                var e = t.source;
                t.geoJSON = _(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
            }, svg: function (t) {
                t.svgXML = Na(t.source)
            }
        }, M_ = P, I_ = d, T_ = x, C_ = w, A_ = ex.parseClassType, D_ = {zrender: "4.0.5"}, k_ = 1e3, P_ = 1e3, L_ = 3e3,
        O_ = {
            PROCESSOR: {FILTER: k_, STATISTIC: 5e3},
            VISUAL: {LAYOUT: P_, GLOBAL: 2e3, CHART: L_, COMPONENT: 4e3, BRUSH: 5e3}
        }, z_ = "__flagInMainProcess", E_ = "__optionUpdated", N_ = /^[a-zA-Z0-9_]+$/;
    Ya.prototype.on = Xa("on"), Ya.prototype.off = Xa("off"), Ya.prototype.one = Xa("one"), h(Ya, pg);
    var R_ = ja.prototype;
    R_._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[E_]) {
                var e = this[E_].silent;
                this[z_] = !0, $a(this), B_.update.call(this), this[z_] = !1, this[E_] = !1, ts.call(this, e), es.call(this, e)
            } else if (t.unfinished) {
                var n = 1, i = this._model;
                this._api;
                t.unfinished = !1;
                do {
                    var r = +new Date;
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), Qa(this, i), t.performVisualTasks(i), ss(this, this._model, 0, "remain"), n -= +new Date - r
                } while (n > 0 && t.unfinished);
                t.unfinished || this._zr.flush()
            }
        }
    }, R_.getDom = function () {
        return this._dom
    }, R_.getZr = function () {
        return this._zr
    }, R_.setOption = function (t, e, n) {
        var i;
        if (C_(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[z_] = !0, !this._model || e) {
            var r = new Ao(this._api), o = this._theme, a = this._model = new vx(null, null, o, r);
            a.scheduler = this._scheduler, a.init(null, null, o, r)
        }
        this._model.setOption(t, G_), n ? (this[E_] = {silent: i}, this[z_] = !1) : ($a(this), B_.update.call(this), this._zr.flush(), this[E_] = !1, this[z_] = !1, ts.call(this, i), es.call(this, i))
    }, R_.setTheme = function () {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, R_.getModel = function () {
        return this._model
    }, R_.getOption = function () {
        return this._model && this._model.getOption()
    }, R_.getWidth = function () {
        return this._zr.getWidth()
    }, R_.getHeight = function () {
        return this._zr.getHeight()
    }, R_.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, R_.getRenderedCanvas = function (t) {
        if (Xp.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), this._zr.painter.getRenderedCanvas(t)
    }, R_.getSvgDataUrl = function () {
        if (Xp.svgSupported) {
            var t = this._zr;
            return d(t.storage.getDisplayList(), function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToDataUrl()
        }
    }, R_.getDataURL = function (t) {
        var e = (t = t || {}).excludeComponents, n = this._model, i = [], r = this;
        I_(e, function (t) {
            n.eachComponent({mainType: t}, function (t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), e.group.ignore = !0)
            })
        });
        var o = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return I_(i, function (t) {
            t.group.ignore = !1
        }), o
    }, R_.getConnectedDataURL = function (t) {
        if (Xp.canvasSupported) {
            var e = this.group, i = Math.min, r = Math.max;
            if (q_[e]) {
                var o = 1 / 0, a = 1 / 0, s = -1 / 0, l = -1 / 0, u = [], h = t && t.pixelRatio || 1;
                d(j_, function (h, c) {
                    if (h.group === e) {
                        var d = h.getRenderedCanvas(n(t)), f = h.getDom().getBoundingClientRect();
                        o = i(f.left, o), a = i(f.top, a), s = r(f.right, s), l = r(f.bottom, l), u.push({
                            dom: d,
                            left: f.left,
                            top: f.top
                        })
                    }
                });
                var c = (s *= h) - (o *= h), f = (l *= h) - (a *= h), p = ig();
                p.width = c, p.height = f;
                var g = wn(p);
                return I_(u, function (t) {
                    var e = new an({style: {x: t.left * h - o, y: t.top * h - a, image: t.dom}});
                    g.add(e)
                }), g.refreshImmediately(), p.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, R_.convertToPixel = v(qa, "convertToPixel"), R_.convertFromPixel = v(qa, "convertFromPixel"), R_.containPixel = function (t, e) {
        var n;
        return t = zn(this._model, t), d(t, function (t, i) {
            i.indexOf("Models") >= 0 && d(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e); else if ("seriesModels" === i) {
                    var o = this._chartsMap[t.__viewId];
                    o && o.containPoint && (n |= o.containPoint(e, t))
                }
            }, this)
        }, this), !!n
    }, R_.getVisual = function (t, e) {
        var n = (t = zn(this._model, t, {defaultMainType: "series"})).seriesModel.getData(),
            i = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
        return null != i ? n.getItemVisual(i, e) : n.getVisual(e)
    }, R_.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, R_.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var B_ = {
        prepareAndUpdate: function (t) {
            $a(this), B_.update.call(this, t)
        }, update: function (t) {
            var e = this._model, n = this._api, i = this._zr, r = this._coordSysMgr, o = this._scheduler;
            if (e) {
                o.restoreData(e, t), o.performSeriesTasks(e), r.create(e, n), o.performDataProcessorTasks(e, t), Qa(this, e), r.update(e, n), rs(e), o.performVisualTasks(e, t), os(this, e, n, t);
                var a = e.get("backgroundColor") || "transparent";
                if (Xp.canvasSupported) i.setBackgroundColor(a); else {
                    var s = Ot(a);
                    a = Wt(s, "rgb"), 0 === s[3] && (a = "transparent")
                }
                ls(e, n)
            }
        }, updateTransform: function (t) {
            var e = this._model, n = this, i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function (o, a) {
                    var s = n.getViewOfComponentModel(a);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(a, e, i, t);
                        l && l.update && r.push(s)
                    } else r.push(s)
                });
                var o = N();
                e.eachSeries(function (r) {
                    var a = n._chartsMap[r.__viewId];
                    if (a.updateTransform) {
                        var s = a.updateTransform(r, e, i, t);
                        s && s.update && o.set(r.uid, 1)
                    } else o.set(r.uid, 1)
                }), rs(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: o
                }), ss(n, e, 0, t, o), ls(e, this._api)
            }
        }, updateView: function (t) {
            var e = this._model;
            e && (fa.markUpdateMethod(t, "updateView"), rs(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), os(this, this._model, this._api, t), ls(e, this._api))
        }, updateVisual: function (t) {
            B_.update.call(this, t)
        }, updateLayout: function (t) {
            B_.update.call(this, t)
        }
    };
    R_.resize = function (t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"), i = t && t.silent;
            this[z_] = !0, n && $a(this), B_.update.call(this), this[z_] = !1, ts.call(this, i), es.call(this, i)
        }
    }, R_.showLoading = function (t, e) {
        if (C_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Y_[t]) {
            var n = Y_[t](this._api, e), i = this._zr;
            this._loadingFX = n, i.add(n)
        }
    }, R_.hideLoading = function () {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
    }, R_.makeActionFromEvent = function (t) {
        var e = o({}, t);
        return e.type = W_[t.type], e
    }, R_.dispatchAction = function (t, e) {
        C_(e) || (e = {silent: !!e}), V_[t.type] && this._model && (this[z_] ? this._pendingActions.push(t) : (Ja.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && Xp.browser.weChat && this._throttledZrFlush(), ts.call(this, e.silent), es.call(this, e.silent)))
    }, R_.appendData = function (t) {
        var e = t.seriesIndex;
        this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0
    }, R_.on = Xa("on"), R_.off = Xa("off"), R_.one = Xa("one");
    var F_ = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    R_._initEvents = function () {
        I_(F_, function (t) {
            this._zr.on(t, function (e) {
                var n, i = this.getModel(), r = e.target;
                if ("globalout" === t) n = {}; else if (r && null != r.dataIndex) {
                    var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = a && a.getDataParams(r.dataIndex, r.dataType, r) || {}
                } else r && r.eventData && (n = o({}, r.eventData));
                if (n) {
                    var s = n.componentType, l = n.componentIndex;
                    "markLine" !== s && "markPoint" !== s && "markArea" !== s || (s = "series", l = n.seriesIndex);
                    var u = s && null != l && i.getComponent(s, l),
                        h = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                    n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: n,
                        model: u,
                        view: h
                    }, this.trigger(t, n)
                }
            }, this)
        }, this), I_(W_, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, R_.isDisposed = function () {
        return this._disposed
    }, R_.clear = function () {
        this.setOption({series: []}, !0)
    }, R_.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0, Nn(this.getDom(), Q_, "");
            var t = this._api, e = this._model;
            I_(this._componentsViews, function (n) {
                n.dispose(e, t)
            }), I_(this._chartsViews, function (n) {
                n.dispose(e, t)
            }), this._zr.dispose(), delete j_[this.id]
        }
    }, h(ja, pg), fs.prototype = {
        constructor: fs, normalizeQuery: function (t) {
            var e = {}, n = {}, i = {};
            if (_(t)) {
                var r = A_(t);
                e.mainType = r.main || null, e.subType = r.sub || null
            } else {
                var o = ["Index", "Name", "Id"], a = {name: 1, dataIndex: 1, dataType: 1};
                d(t, function (t, r) {
                    for (var s = !1, l = 0; l < o.length; l++) {
                        var u = o[l], h = r.lastIndexOf(u);
                        if (h > 0 && h === r.length - u.length) {
                            var c = r.slice(0, h);
                            "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
                        }
                    }
                    a.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
                })
            }
            return {cptQuery: e, dataQuery: n, otherQuery: i}
        }, filter: function (t, e, n) {
            function i(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n]
            }

            var r = this.eventInfo;
            if (!r) return !0;
            var o = r.targetEl, a = r.packedEvent, s = r.model, l = r.view;
            if (!s || !l) return !0;
            var u = e.cptQuery, h = e.dataQuery;
            return i(u, s, "mainType") && i(u, s, "subType") && i(u, s, "index", "componentIndex") && i(u, s, "name") && i(u, s, "id") && i(h, a, "name") && i(h, a, "dataIndex") && i(h, a, "dataType") && (!l.filterForExposedEvent || l.filterForExposedEvent(t, e.otherQuery, o, a))
        }, afterTrigger: function () {
            this.eventInfo = null
        }
    };
    var V_ = {}, W_ = {}, H_ = [], G_ = [], Z_ = [], U_ = [], X_ = {}, Y_ = {}, j_ = {}, q_ = {}, $_ = new Date - 0,
        K_ = new Date - 0, Q_ = "_echarts_instance_", J_ = gs;
    bs(2e3, Jx), ys(Lx), xs(5e3, function (t) {
        var e = N();
        t.eachSeries(function (t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []), r = t.getData(), o = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o)
            }
        }), e.each(Uo)
    }), Ms("default", function (t, e) {
        a(e = e || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new py({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4}), i = new yy({
            shape: {startAngle: -n_ / 2, endAngle: -n_ / 2 + .1, r: 10},
            style: {stroke: e.color, lineCap: "round", lineWidth: 5},
            zlevel: e.zlevel,
            z: 10001
        }), r = new py({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            }, zlevel: e.zlevel, z: 10001
        });
        i.animateShape(!0).when(1e3, {endAngle: 3 * n_ / 2}).start("circularInOut"), i.animateShape(!0).when(1e3, {startAngle: 3 * n_ / 2}).delay(300).start("circularInOut");
        var o = new Jg;
        return o.add(i), o.add(r), o.add(n), o.resize = function () {
            var e = t.getWidth() / 2, o = t.getHeight() / 2;
            i.setShape({cx: e, cy: o});
            var a = i.shape.r;
            r.setShape({x: e - a, y: o - a, width: 2 * a, height: 2 * a}), n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, o.resize(), o
    }), _s({type: "highlight", event: "highlight", update: "highlight"}, R), _s({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    }, R), vs("light", h_), vs("dark", d_);
    var tw = {};
    ks.prototype = {
        constructor: ks, add: function (t) {
            return this._add = t, this
        }, update: function (t) {
            return this._update = t, this
        }, remove: function (t) {
            return this._remove = t, this
        }, execute: function () {
            var t = this._old, e = this._new, n = {}, i = [], r = [];
            for (Ps(t, {}, i, "_oldKeyGetter", this), Ps(e, n, r, "_newKeyGetter", this), o = 0; o < t.length; o++) null != (s = n[a = i[o]]) ? ((u = s.length) ? (1 === u && (n[a] = null), s = s.unshift()) : n[a] = null, this._update && this._update(s, o)) : this._remove && this._remove(o);
            for (var o = 0; o < r.length; o++) {
                var a = r[o];
                if (n.hasOwnProperty(a)) {
                    var s = n[a];
                    if (null == s) continue;
                    if (s.length) for (var l = 0, u = s.length; l < u; l++) this._add && this._add(s[l]); else this._add && this._add(s)
                }
            }
        }
    };
    var ew = N(["tooltip", "label", "itemName", "itemId", "seriesName"]), nw = w, iw = "e\0\0", rw = {
            float: "undefined" == typeof Float64Array ? Array : Float64Array,
            int: "undefined" == typeof Int32Array ? Array : Int32Array,
            ordinal: Array,
            number: Array,
            time: Array
        }, ow = "undefined" == typeof Uint32Array ? Array : Uint32Array,
        aw = "undefined" == typeof Uint16Array ? Array : Uint16Array,
        sw = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
        lw = ["_extent", "_approximateExtent", "_rawExtent"], uw = function (t, e) {
            t = t || ["x", "y"];
            for (var n = {}, i = [], r = {}, o = 0; o < t.length; o++) {
                var a = t[o];
                _(a) && (a = {name: a});
                var s = a.name;
                a.type = a.type || "float", a.coordDim || (a.coordDim = s, a.coordDimIndex = 0), a.otherDims = a.otherDims || {}, i.push(s), n[s] = a, a.index = o, a.createInvertedIndices && (r[s] = [])
            }
            this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Ls(this), this._invertedIndicesMap = r, this._calculationInfo = {}
        }, hw = uw.prototype;
    hw.type = "list", hw.hasItemOption = !0, hw.getDimension = function (t) {
        return isNaN(t) || (t = this.dimensions[t] || t), t
    }, hw.getDimensionInfo = function (t) {
        return this._dimensionInfos[this.getDimension(t)]
    }, hw.getDimensionsOnCoord = function () {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    }, hw.mapDimension = function (t, e) {
        var n = this._dimensionsSummary;
        if (null == e) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return !0 === e ? (i || []).slice() : i && i[e]
    }, hw.initData = function (t, e, n) {
        (oo.isInstance(t) || c(t)) && (t = new Xo(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = Nx[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
    }, hw.getProvider = function () {
        return this._rawData
    }, hw.appendData = function (t) {
        var e = this._rawData, n = this.count();
        e.appendData(t);
        var i = e.count();
        e.persistent || (i += n), this._initDataFromProvider(n, i)
    }, hw._initDataFromProvider = function (t, e) {
        if (!(t >= e)) {
            for (var n, i = this._chunkSize, r = this._rawData, o = this._storage, a = this.dimensions, s = a.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; g < s; g++) {
                c[T = a[g]] || (c[T] = [1 / 0, -1 / 0]);
                var m = l[T];
                0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
                var v = rw[m.type];
                o[T] || (o[T] = []);
                var y = o[T][p];
                if (y && y.length < i) {
                    for (var x = new v(Math.min(e - p * i, i)), _ = 0; _ < y.length; _++) x[_] = y[_];
                    o[T][p] = x
                }
                for (I = f * i; I < e; I += i) o[T].push(new v(Math.min(e - I, i)));
                this._chunkCount = o[T].length
            }
            for (var w = new Array(s), b = t; b < e; b++) {
                w = r.getItem(b, w);
                for (var S = Math.floor(b / i), M = b % i, I = 0; I < s; I++) {
                    var T = a[I], C = o[T][S], A = this._dimValueGetter(w, T, b, I);
                    C[M] = A;
                    var D = c[T];
                    A < D[0] && (D[0] = A), A > D[1] && (D[1] = A)
                }
                if (!r.pure) {
                    var k = u[b];
                    if (w && null == k) if (null != w.name) u[b] = k = w.name; else if (null != n) {
                        var P = a[n], L = o[P][S];
                        if (L) {
                            k = L[M];
                            var O = l[P].ordinalMeta;
                            O && O.categories.length && (k = O.categories[k])
                        }
                    }
                    var z = null == w ? null : w.id;
                    null == z && null != k && (d[k] = d[k] || 0, z = k, d[k] > 0 && (z += "__ec__" + d[k]), d[k]++), null != z && (h[b] = z)
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Bs(this)
        }
    }, hw.count = function () {
        return this._count
    }, hw.getIndices = function () {
        var t = this._indices;
        if (t) {
            var e = t.constructor, n = this._count;
            if (e === Array) {
                i = new e(n);
                for (r = 0; r < n; r++) i[r] = t[r]
            } else i = new e(t.buffer, 0, n)
        } else for (var i = new (e = Es(this))(this.count()), r = 0; r < i.length; r++) i[r] = r;
        return i
    }, hw.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return NaN;
        var n = this._storage;
        if (!n[t]) return NaN;
        e = this.getRawIndex(e);
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return n[t][i][r]
    }, hw.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return NaN;
        var n = this._storage[t];
        if (!n) return NaN;
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return n[i][r]
    }, hw._getFast = function (t, e) {
        var n = Math.floor(e / this._chunkSize), i = e % this._chunkSize;
        return this._storage[t][n][i]
    }, hw.getValues = function (t, e) {
        var n = [];
        y(t) || (e = t, t = this.dimensions);
        for (var i = 0, r = t.length; i < r; i++) n.push(this.get(t[i], e));
        return n
    }, hw.hasValue = function (t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; i < r; i++) if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
        return !0
    }, hw.getDataExtent = function (t) {
        t = this.getDimension(t);
        var e = [1 / 0, -1 / 0];
        if (!this._storage[t]) return e;
        var n, i = this.count();
        if (!this._indices) return this._rawExtent[t].slice();
        if (n = this._extent[t]) return n.slice();
        for (var r = (n = e)[0], o = n[1], a = 0; a < i; a++) {
            var s = this._getFast(t, this.getRawIndex(a));
            s < r && (r = s), s > o && (o = s)
        }
        return n = [r, o], this._extent[t] = n, n
    }, hw.getApproximateExtent = function (t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
    }, hw.setApproximateExtent = function (t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice()
    }, hw.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
    }, hw.setCalculationInfo = function (t, e) {
        nw(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
    }, hw.getSum = function (t) {
        var e = 0;
        if (this._storage[t]) for (var n = 0, i = this.count(); n < i; n++) {
            var r = this.get(t, n);
            isNaN(r) || (e += r)
        }
        return e
    }, hw.getMedian = function (t) {
        var e = [];
        this.each(t, function (t, n) {
            isNaN(t) || e.push(t)
        });
        var n = [].concat(e).sort(function (t, e) {
            return t - e
        }), i = this.count();
        return 0 === i ? 0 : i % 2 == 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
    }, hw.rawIndexOf = function (t, e) {
        var n = (t && this._invertedIndicesMap[t])[e];
        return null == n || isNaN(n) ? -1 : n
    }, hw.indexOfName = function (t) {
        for (var e = 0, n = this.count(); e < n; e++) if (this.getName(e) === t) return e;
        return -1
    }, hw.indexOfRawIndex = function (t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || t < 0) return -1;
        var e = this._indices, n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; i <= r;) {
            var o = (i + r) / 2 | 0;
            if (e[o] < t) i = o + 1; else {
                if (!(e[o] > t)) return o;
                r = o - 1
            }
        }
        return -1
    }, hw.indicesOfNearest = function (t, e, n) {
        var i = [];
        if (!this._storage[t]) return i;
        null == n && (n = 1 / 0);
        for (var r = Number.MAX_VALUE, o = -1, a = 0, s = this.count(); a < s; a++) {
            var l = e - this.get(t, a), u = Math.abs(l);
            l <= n && u <= r && ((u < r || l >= 0 && o < 0) && (r = u, o = l, i.length = 0), i.push(a))
        }
        return i
    }, hw.getRawIndex = Vs, hw.getRawDataItem = function (t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t))
        }
        return e
    }, hw.getName = function (t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || Fs(this, this._nameDimIdx, e) || ""
    }, hw.getId = function (t) {
        return Hs(this, this.getRawIndex(t))
    }, hw.each = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
            for (var r = (t = f(Gs(t), this.getDimension, this)).length, o = 0; o < this.count(); o++) switch (r) {
                case 0:
                    e.call(n, o);
                    break;
                case 1:
                    e.call(n, this.get(t[0], o), o);
                    break;
                case 2:
                    e.call(n, this.get(t[0], o), this.get(t[1], o), o);
                    break;
                default:
                    for (var a = 0, s = []; a < r; a++) s[a] = this.get(t[a], o);
                    s[a] = o, e.apply(n, s)
            }
        }
    }, hw.filterSelf = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = f(Gs(t), this.getDimension, this);
            for (var r = this.count(), o = new (Es(this))(r), a = [], s = t.length, l = 0, u = t[0], h = 0; h < r; h++) {
                var c, d = this.getRawIndex(h);
                if (0 === s) c = e.call(n, h); else if (1 === s) {
                    var p = this._getFast(u, d);
                    c = e.call(n, p, h)
                } else {
                    for (var g = 0; g < s; g++) a[g] = this._getFast(u, d);
                    a[g] = h, c = e.apply(n, a)
                }
                c && (o[l++] = d)
            }
            return l < r && (this._indices = o), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? Ws : Vs, this
        }
    }, hw.selectRange = function (t) {
        if (this._count) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
                var r = this.count(), o = new (Es(this))(r), a = 0, s = e[0], l = t[s][0], u = t[s][1], h = !1;
                if (!this._indices) {
                    var c = 0;
                    if (1 === i) {
                        for (var d = this._storage[e[0]], f = 0; f < this._chunkCount; f++) for (var p = d[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), m = 0; m < g; m++) ((w = p[m]) >= l && w <= u || isNaN(w)) && (o[a++] = c), c++;
                        h = !0
                    } else if (2 === i) {
                        for (var d = this._storage[s], v = this._storage[e[1]], y = t[e[1]][0], x = t[e[1]][1], f = 0; f < this._chunkCount; f++) for (var p = d[f], _ = v[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), m = 0; m < g; m++) {
                            var w = p[m], b = _[m];
                            (w >= l && w <= u || isNaN(w)) && (b >= y && b <= x || isNaN(b)) && (o[a++] = c), c++
                        }
                        h = !0
                    }
                }
                if (!h) if (1 === i) for (m = 0; m < r; m++) {
                    M = this.getRawIndex(m);
                    ((w = this._getFast(s, M)) >= l && w <= u || isNaN(w)) && (o[a++] = M)
                } else for (m = 0; m < r; m++) {
                    for (var S = !0, M = this.getRawIndex(m), f = 0; f < i; f++) {
                        var I = e[f];
                        ((w = this._getFast(n, M)) < t[I][0] || w > t[I][1]) && (S = !1)
                    }
                    S && (o[a++] = this.getRawIndex(m))
                }
                return a < r && (this._indices = o), this._count = a, this._extent = {}, this.getRawIndex = this._indices ? Ws : Vs, this
            }
        }
    }, hw.mapArray = function (t, e, n, i) {
        "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
        var r = [];
        return this.each(t, function () {
            r.push(e && e.apply(this, arguments))
        }, n), r
    }, hw.map = function (t, e, n, i) {
        n = n || i || this;
        var r = Zs(this, t = f(Gs(t), this.getDimension, this));
        r._indices = this._indices, r.getRawIndex = r._indices ? Ws : Vs;
        for (var o = r._storage, a = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; d < u; d++) {
            for (var p = 0; p < l; p++) h[p] = this.get(t[p], d);
            h[l] = d;
            var g = e && e.apply(n, h);
            if (null != g) {
                "object" != typeof g && (a[0] = g, g = a);
                for (var m = this.getRawIndex(d), v = Math.floor(m / s), y = m % s, x = 0; x < g.length; x++) {
                    var _ = t[x], w = g[x], b = c[_], S = o[_];
                    S && (S[v][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    }, hw.downSample = function (t, e, n, i) {
        for (var r = Zs(this, [t]), o = r._storage, a = [], s = Math.floor(1 / e), l = o[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (Es(this))(u), f = 0, p = 0; p < u; p += s) {
            s > u - p && (s = u - p, a.length = s);
            for (var g = 0; g < s; g++) {
                var m = this.getRawIndex(p + g), v = Math.floor(m / h), y = m % h;
                a[g] = l[v][y]
            }
            var x = n(a), _ = this.getRawIndex(Math.min(p + i(a, x) || 0, u - 1)), w = _ % h;
            l[Math.floor(_ / h)][w] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _
        }
        return r._count = f, r._indices = d, r.getRawIndex = Ws, r
    }, hw.getItemModel = function (t) {
        var e = this.hostModel;
        return new Sr(this.getRawDataItem(t), e, e && e.ecModel)
    }, hw.diff = function (t) {
        var e = this;
        return new ks(t ? t.getIndices() : [], this.getIndices(), function (e) {
            return Hs(t, e)
        }, function (t) {
            return Hs(e, t)
        })
    }, hw.getVisual = function (t) {
        var e = this._visual;
        return e && e[t]
    }, hw.setVisual = function (t, e) {
        if (nw(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]); else this._visual = this._visual || {}, this._visual[t] = e
    }, hw.setLayout = function (t, e) {
        if (nw(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e
    }, hw.getLayout = function (t) {
        return this._layout[t]
    }, hw.getItemLayout = function (t) {
        return this._itemLayouts[t]
    }, hw.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
    }, hw.clearItemLayouts = function () {
        this._itemLayouts.length = 0
    }, hw.getItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t], r = i && i[e];
        return null != r || n ? r : this.getVisual(e)
    }, hw.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = i, nw(e)) for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o], r[o] = !0); else i[e] = n, r[e] = !0
    }, hw.clearAllVisual = function () {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
    };
    var cw = function (t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
    };
    hw.setItemGraphicEl = function (t, e) {
        var n = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(cw, e)), this._graphicEls[t] = e
    }, hw.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
    }, hw.eachItemGraphicEl = function (t, e) {
        d(this._graphicEls, function (n, i) {
            n && t && t.call(e, n, i)
        })
    }, hw.cloneShallow = function (t) {
        if (!t) {
            var e = f(this.dimensions, this.getDimensionInfo, this);
            t = new uw(e, this.hostModel)
        }
        if (t._storage = this._storage, Rs(t, this), this._indices) {
            var n = this._indices.constructor;
            t._indices = new n(this._indices)
        } else t._indices = null;
        return t.getRawIndex = t._indices ? Ws : Vs, t
    }, hw.wrapMethod = function (t, e) {
        var n = this[t];
        "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(D(arguments)))
        })
    }, hw.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], hw.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var dw = function (t, e) {
        return e = e || {}, Ys(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    };
    nl.prototype.parse = function (t) {
        return t
    }, nl.prototype.getSetting = function (t) {
        return this._setting[t]
    }, nl.prototype.contain = function (t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, nl.prototype.normalize = function (t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, nl.prototype.scale = function (t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, nl.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, nl.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }, nl.prototype.getExtent = function () {
        return this._extent.slice()
    }, nl.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }, nl.prototype.isBlank = function () {
        return this._isBlank
    }, nl.prototype.setBlank = function (t) {
        this._isBlank = t
    }, nl.prototype.getLabel = null, Wn(nl), Un(nl, {registerWhenExtend: !0}), il.createByAxisModel = function (t) {
        var e = t.option, n = e.data, i = n && f(n, ol);
        return new il({categories: i, needCollect: !i, deduplication: !1 !== e.dedplication})
    };
    var fw = il.prototype;
    fw.getOrdinal = function (t) {
        return rl(this).get(t)
    }, fw.parseAndCollect = function (t) {
        var e, n = this._needCollect;
        if ("string" != typeof t && !n) return t;
        if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
        var i = rl(this);
        return null == (e = i.get(t)) && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e
    };
    var pw = nl.prototype, gw = nl.extend({
        type: "ordinal", init: function (t, e) {
            t && !y(t) || (t = new il({categories: t})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
        }, parse: function (t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        }, contain: function (t) {
            return t = this.parse(t), pw.contain.call(this, t) && null != this._ordinalMeta.categories[t]
        }, normalize: function (t) {
            return pw.normalize.call(this, this.parse(t))
        }, scale: function (t) {
            return Math.round(pw.scale.call(this, t))
        }, getTicks: function () {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
            return t
        }, getLabel: function (t) {
            if (!this.isBlank()) return this._ordinalMeta.categories[t]
        }, count: function () {
            return this._extent[1] - this._extent[0] + 1
        }, unionExtentFromData: function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, getOrdinalMeta: function () {
            return this._ordinalMeta
        }, niceTicks: R, niceExtent: R
    });
    gw.create = function () {
        return new gw
    };
    var mw = kr, vw = kr, yw = nl.extend({
        type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
        }, unionExtent: function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), yw.prototype.setExtent.call(this, e[0], e[1])
        }, getInterval: function () {
            return this._interval
        }, setInterval: function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = sl(t)
        }, getTicks: function () {
            return hl(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
        }, getLabel: function (t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            return null == n ? n = Or(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = vw(t, n, !0), Hr(t)
        }, niceTicks: function (t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                r < 0 && (r = -r, i.reverse());
                var o = al(i, t, e, n);
                this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent
            }
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = vw(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = vw(Math.ceil(e[1] / r) * r))
        }
    });
    yw.create = function () {
        return new yw
    };
    var xw = "__ec_stack_", _w = "undefined" != typeof Float32Array ? Float32Array : Array, ww = {
        seriesType: "bar", plan: Ux(), reset: function (t) {
            if (vl(t) && yl(t)) {
                var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), r = n.getOtherAxis(i),
                    o = e.mapDimension(r.dim), a = e.mapDimension(i.dim), s = r.isHorizontal(), l = s ? 0 : 1,
                    u = ml(pl([t]), i, t).width;
                return u > .5 || (u = .5), {
                    progress: function (t, e) {
                        for (var i, h = new _w(2 * t.count), c = [], d = [], f = 0; null != (i = t.next());) d[l] = e.get(o, i), d[1 - l] = e.get(a, i), c = n.dataToPoint(d, null, c), h[f++] = c[0], h[f++] = c[1];
                        e.setLayout({largePoints: h, barWidth: u, valueAxisStart: xl(0, r), valueAxisHorizontal: s})
                    }
                }
            }
        }
    }, bw = yw.prototype, Sw = Math.ceil, Mw = Math.floor, Iw = function (t, e, n, i) {
        for (; n < i;) {
            var r = n + i >>> 1;
            t[r][1] < e ? n = r + 1 : i = r
        }
        return n
    }, Tw = yw.extend({
        type: "time", getLabel: function (t) {
            var e = this._stepLvl, n = new Date(t);
            return jr(e[0], n, this.getSetting("useUTC"))
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -1 / 0 && e[0] === 1 / 0) {
                var n = new Date;
                e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - 864e5
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var i = this._interval;
            t.fixMin || (e[0] = kr(Mw(e[0] / i) * i)), t.fixMax || (e[1] = kr(Sw(e[1] / i) * i))
        }, niceTicks: function (t, e, n) {
            t = t || 10;
            var i = this._extent, r = i[1] - i[0], o = r / t;
            null != e && o < e && (o = e), null != n && o > n && (o = n);
            var a = Cw.length, s = Iw(Cw, o, 0, a), l = Cw[Math.min(s, a - 1)], u = l[1];
            "year" === l[0] && (u *= Wr(r / u / t, !0));
            var h = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                c = [Math.round(Sw((i[0] - h) / u) * u + h), Math.round(Mw((i[1] - h) / u) * u + h)];
            ul(c, i), this._stepLvl = l, this._interval = u, this._niceExtent = c
        }, parse: function (t) {
            return +Br(t)
        }
    });
    d(["contain", "normalize"], function (t) {
        Tw.prototype[t] = function (e) {
            return bw[t].call(this, this.parse(e))
        }
    });
    var Cw = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 6048e6], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];
    Tw.create = function (t) {
        return new Tw({useUTC: t.ecModel.get("useUTC")})
    };
    var Aw = nl.prototype, Dw = yw.prototype, kw = Or, Pw = kr, Lw = Math.floor, Ow = Math.ceil, zw = Math.pow,
        Ew = Math.log, Nw = nl.extend({
            type: "log", base: 10, $constructor: function () {
                nl.apply(this, arguments), this._originalScale = new yw
            }, getTicks: function () {
                var t = this._originalScale, e = this._extent, n = t.getExtent();
                return f(Dw.getTicks.call(this), function (i) {
                    var r = kr(zw(this.base, i));
                    return r = i === e[0] && t.__fixMin ? _l(r, n[0]) : r, r = i === e[1] && t.__fixMax ? _l(r, n[1]) : r
                }, this)
            }, getLabel: Dw.getLabel, scale: function (t) {
                return t = Aw.scale.call(this, t), zw(this.base, t)
            }, setExtent: function (t, e) {
                var n = this.base;
                t = Ew(t) / Ew(n), e = Ew(e) / Ew(n), Dw.setExtent.call(this, t, e)
            }, getExtent: function () {
                var t = this.base, e = Aw.getExtent.call(this);
                e[0] = zw(t, e[0]), e[1] = zw(t, e[1]);
                var n = this._originalScale, i = n.getExtent();
                return n.__fixMin && (e[0] = _l(e[0], i[0])), n.__fixMax && (e[1] = _l(e[1], i[1])), e
            }, unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = Ew(t[0]) / Ew(e), t[1] = Ew(t[1]) / Ew(e), Aw.unionExtent.call(this, t)
            }, unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, n = e[1] - e[0];
                if (!(n === 1 / 0 || n <= 0)) {
                    var i = Fr(n);
                    for (t / n * i <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                    var r = [kr(Ow(e[0] / i) * i), kr(Lw(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = r
                }
            }, niceExtent: function (t) {
                Dw.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    d(["contain", "normalize"], function (t) {
        Nw.prototype[t] = function (e) {
            return e = Ew(e) / Ew(this.base), Aw[t].call(this, e)
        }
    }), Nw.create = function () {
        return new Nw
    };
    var Rw = {
        getMin: function (t) {
            var e = this.option, n = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
        }, getMax: function (t) {
            var e = this.option, n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
        }, getNeedCrossZero: function () {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale
        }, getCoordSysModel: R, setRange: function (t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e
        }, resetRange: function () {
            this.option.rangeStart = this.option.rangeEnd = null
        }
    }, Bw = Ei({
        type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath()
        }
    }), Fw = Ei({
        type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), t.closePath()
        }
    }), Vw = Ei({
        type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.x, i = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a),
                l = i - o + a + s, u = Math.asin(s / a), h = Math.cos(u) * a, c = Math.sin(u), d = Math.cos(u),
                f = .6 * a, p = .7 * a;
            t.moveTo(n - h, l + s), t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath()
        }
    }), Ww = Ei({
        type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.height, i = e.width, r = e.x, o = e.y, a = i / 3 * 2;
            t.moveTo(r, o), t.lineTo(r + a, o + n), t.lineTo(r, o + n / 4 * 3), t.lineTo(r - a, o + n), t.lineTo(r, o), t.closePath()
        }
    }), Hw = {
        line: function (t, e, n, i, r) {
            r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
        }, rect: function (t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i
        }, roundRect: function (t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
        }, square: function (t, e, n, i, r) {
            var o = Math.min(n, i);
            r.x = t, r.y = e, r.width = o, r.height = o
        }, circle: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
        }, diamond: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
        }, pin: function (t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
        }, arrow: function (t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
        }, triangle: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
        }
    }, Gw = {};
    d({
        line: gy,
        rect: py,
        roundRect: py,
        square: py,
        circle: oy,
        diamond: Fw,
        pin: Vw,
        arrow: Ww,
        triangle: Bw
    }, function (t, e) {
        Gw[e] = new t
    });
    var Zw = Ei({
        type: "symbol", shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0}, beforeBrush: function () {
            var t = this.style;
            "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
        }, buildPath: function (t, e, n) {
            var i = e.symbolType, r = Gw[i];
            "none" !== e.symbolType && (r || (r = Gw[i = "rect"]), Hw[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
        }
    }), Uw = {isDimensionStacked: Ks, enableDataStack: $s, getStackedDimension: Qs}, Xw = (Object.freeze || Object)({
        createList: function (t) {
            return Js(t.getSource(), t)
        }, getLayoutRect: Kr, dataStack: Uw, createScale: function (t, e) {
            var n = e;
            Sr.isInstance(e) || h(n = new Sr(e), Rw);
            var i = Ml(n);
            return i.setExtent(t[0], t[1]), Sl(i, n), i
        }, mixinAxisModelCommonMethods: function (t) {
            h(t, Rw)
        }, completeDimensions: Ys, createDimensions: dw, createSymbol: Pl
    }), Yw = 1e-8;
    zl.prototype = {
        constructor: zl, properties: null, getBoundingRect: function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], o = [], a = this.geometries, s = 0; s < a.length; s++) "polygon" === a[s].type && (ai(a[s].exterior, r, o), K(n, n, r), Q(i, i, o));
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new re(n[0], n[1], i[0] - n[0], i[1] - n[1])
        }, contain: function (t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t:for (var i = 0, r = n.length; i < r; i++) if ("polygon" === n[i].type) {
                var o = n[i].exterior, a = n[i].interiors;
                if (Ol(o, t[0], t[1])) {
                    for (var s = 0; s < (a ? a.length : 0); s++) if (Ol(a[s])) continue t;
                    return !0
                }
            }
            return !1
        }, transformTo: function (t, e, n, i) {
            var r = this.getBoundingRect(), o = r.width / r.height;
            n ? i || (i = n / o) : n = o * i;
            for (var a = new re(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
                for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) $(h[d], h[d], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (d = 0; d < c[f].length; d++) $(c[f][d], c[f][d], s)
            }
            (r = this._rect).copy(a), this.center = [r.x + r.width / 2, r.y + r.height / 2]
        }, cloneShallow: function (t) {
            null == t && (t = this.name);
            var e = new zl(t, this.geometries, this.center);
            return e._rect = this._rect, e.transformTo = null, e
        }
    };
    var jw = function (t) {
        return El(t), f(g(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var e = t.properties, n = t.geometry, i = n.coordinates, r = [];
            "Polygon" === n.type && r.push({
                type: "polygon",
                exterior: i[0],
                interiors: i.slice(1)
            }), "MultiPolygon" === n.type && d(i, function (t) {
                t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
            });
            var o = new zl(e.name, r, e.cp);
            return o.properties = e, o
        })
    }, qw = On(), $w = [0, 1], Kw = function (t, e, n) {
        this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
    };
    Kw.prototype = {
        constructor: Kw, contain: function (t) {
            var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
            return t >= n && t <= i
        }, containData: function (t) {
            return this.contain(this.dataToCoord(t))
        }, getExtent: function () {
            return this._extent.slice()
        }, getPixelPrecision: function (t) {
            return zr(t || this.scale.getExtent(), this._extent)
        }, setExtent: function (t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e
        }, dataToCoord: function (t, e) {
            var n = this._extent, i = this.scale;
            return t = i.normalize(t), this.onBand && "ordinal" === i.type && Ql(n = n.slice(), i.count()), Ar(t, $w, n, e)
        }, coordToData: function (t, e) {
            var n = this._extent, i = this.scale;
            this.onBand && "ordinal" === i.type && Ql(n = n.slice(), i.count());
            var r = Ar(t, n, $w, e);
            return this.scale.scale(r)
        }, pointToData: function (t, e) {
        }, getTicksCoords: function (t) {
            var e = (t = t || {}).tickModel || this.getTickModel(), n = Bl(this, e), i = f(n.ticks, function (t) {
                return {coord: this.dataToCoord(t), tickValue: t}
            }, this), r = e.get("alignWithLabel");
            return Jl(this, i, n.tickCategoryInterval, r, t.clamp), i
        }, getViewLabels: function () {
            return Rl(this).labels
        }, getLabelModel: function () {
            return this.model.getModel("axisLabel")
        }, getTickModel: function () {
            return this.model.getModel("axisTick")
        }, getBandWidth: function () {
            var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n
        }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function () {
            return Yl(this)
        }
    };
    var Qw = jw, Jw = {};
    d(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        Jw[t] = ag[t]
    });
    var tb = {};
    d(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
        tb[t] = ky[t]
    }), Hx.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function (t, e) {
            return Js(this.getSource(), this)
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {position: "top"},
            lineStyle: {width: 2, type: "solid"},
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var eb = eu.prototype, nb = eu.getSymbolSize = function (t, e) {
        var n = t.getItemVisual(e, "symbolSize");
        return n instanceof Array ? n.slice() : [+n, +n]
    };
    eb._createSymbol = function (t, e, n, i, r) {
        this.removeAll();
        var o = Pl(t, -1, -1, 2, 2, e.getItemVisual(n, "color"), r);
        o.attr({z2: 100, culling: !0, scale: nu(i)}), o.drift = iu, this._symbolType = t, this.add(o)
    }, eb.stopSymbolAnimation = function (t) {
        this.childAt(0).stopAnimation(t)
    }, eb.getSymbolPath = function () {
        return this.childAt(0)
    }, eb.getScale = function () {
        return this.childAt(0).scale
    }, eb.highlight = function () {
        this.childAt(0).trigger("emphasis")
    }, eb.downplay = function () {
        this.childAt(0).trigger("normal")
    }, eb.setZ = function (t, e) {
        var n = this.childAt(0);
        n.zlevel = t, n.z = e
    }, eb.setDraggable = function (t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : "pointer"
    }, eb.updateData = function (t, e, n) {
        this.silent = !1;
        var i = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, o = nb(t, e), a = i !== this._symbolType;
        if (a) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(i, t, e, o, s)
        } else (l = this.childAt(0)).silent = !1, gr(l, {scale: nu(o)}, r, e);
        if (this._updateCommon(t, e, o, n), a) {
            var l = this.childAt(0), u = n && n.fadeIn, h = {scale: l.scale.slice()};
            u && (h.style = {opacity: l.style.opacity}), l.scale = [0, 0], u && (l.style.opacity = 0), mr(l, h, r, e)
        }
        this._seriesModel = r
    };
    var ib = ["itemStyle"], rb = ["emphasis", "itemStyle"], ob = ["label"], ab = ["emphasis", "label"];
    eb._updateCommon = function (t, e, n, i) {
        var r = this.childAt(0), a = t.hostModel, s = t.getItemVisual(e, "color");
        "image" !== r.type && r.useStyle({strokeNoScale: !0});
        var l = i && i.itemStyle, u = i && i.hoverItemStyle, h = i && i.symbolRotate, c = i && i.symbolOffset,
            d = i && i.labelModel, f = i && i.hoverLabelModel, p = i && i.hoverAnimation, g = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            l = m.getModel(ib).getItemStyle(["color"]), u = m.getModel(rb).getItemStyle(), h = m.getShallow("symbolRotate"), c = m.getShallow("symbolOffset"), d = m.getModel(ob), f = m.getModel(ab), p = m.getShallow("hoverAnimation"), g = m.getShallow("cursor")
        } else u = o({}, u);
        var v = r.style;
        r.attr("rotation", (h || 0) * Math.PI / 180 || 0), c && r.attr("position", [Dr(c[0], n[0]), Dr(c[1], n[1])]), g && r.attr("cursor", g), r.setColor(s, i && i.symbolInnerColor), r.setStyle(l);
        var y = t.getItemVisual(e, "opacity");
        null != y && (v.opacity = y);
        var x = t.getItemVisual(e, "liftZ"), _ = r.__z2Origin;
        null != x ? null == _ && (r.__z2Origin = r.z2, r.z2 += x) : null != _ && (r.z2 = _, r.__z2Origin = null);
        var w = i && i.useNameLabel;
        or(v, u, d, f, {
            labelFetcher: a, labelDataIndex: e, defaultText: function (e, n) {
                return w ? t.getName(e) : tu(t, e)
            }, isRectText: !0, autoColor: s
        }), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), r.hoverStyle = u, ir(r), r.__symbolOriginalScale = nu(n), p && a.isAnimationEnabled() && r.on("mouseover", ru).on("mouseout", ou).on("emphasis", au).on("normal", su)
    }, eb.fadeOut = function (t, e) {
        var n = this.childAt(0);
        this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), gr(n, {
            style: {opacity: 0},
            scale: [0, 0]
        }, this._seriesModel, this.dataIndex, t)
    }, u(eu, Jg);
    var sb = lu.prototype;
    sb.updateData = function (t, e) {
        e = hu(e);
        var n = this.group, i = t.hostModel, r = this._data, o = this._symbolCtor, a = cu(t);
        r || n.removeAll(), t.diff(r).add(function (i) {
            var r = t.getItemLayout(i);
            if (uu(t, r, i, e)) {
                var s = new o(t, i, a);
                s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s)
            }
        }).update(function (s, l) {
            var u = r.getItemGraphicEl(l), h = t.getItemLayout(s);
            uu(t, h, s, e) ? (u ? (u.updateData(t, s, a), gr(u, {position: h}, i)) : (u = new o(t, s)).attr("position", h), n.add(u), t.setItemGraphicEl(s, u)) : n.remove(u)
        }).remove(function (t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function () {
                n.remove(e)
            })
        }).execute(), this._data = t
    }, sb.isPersistent = function () {
        return !0
    }, sb.updateLayout = function () {
        var t = this._data;
        t && t.eachItemGraphicEl(function (e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i)
        })
    }, sb.incrementalPrepareUpdate = function (t) {
        this._seriesScope = cu(t), this._data = null, this.group.removeAll()
    }, sb.incrementalUpdate = function (t, e, n) {
        n = hu(n);
        for (var i = t.start; i < t.end; i++) {
            var r = e.getItemLayout(i);
            if (uu(e, r, i, n)) {
                var o = new this._symbolCtor(e, i, this._seriesScope);
                o.traverse(function (t) {
                    t.isGroup || (t.incremental = t.useHoverLayer = !0)
                }), o.attr("position", r), this.group.add(o), e.setItemGraphicEl(i, o)
            }
        }
    }, sb.remove = function (t) {
        var e = this.group, n = this._data;
        n && t ? n.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
                e.remove(t)
            })
        }) : e.removeAll()
    };
    var lb = function (t, e, n, i, r, o, a, s) {
        for (var l = gu(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], m = du(r, e, a), v = du(o, t, s), y = 0; y < l.length; y++) {
            var x = l[y], _ = !0;
            switch (x.cmd) {
                case"=":
                    var w = t.getItemLayout(x.idx), b = e.getItemLayout(x.idx1);
                    (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(n[x.idx]), d.push(i[x.idx1]), g.push(e.getRawIndex(x.idx1));
                    break;
                case"+":
                    S = x.idx;
                    u.push(r.dataToPoint([e.get(m.dataDimsForPoint[0], S), e.get(m.dataDimsForPoint[1], S)])), h.push(e.getItemLayout(S).slice()), c.push(pu(m, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));
                    break;
                case"-":
                    var S = x.idx, M = t.getRawIndex(S);
                    M !== S ? (u.push(t.getItemLayout(S)), h.push(o.dataToPoint([t.get(v.dataDimsForPoint[0], S), t.get(v.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(pu(v, o, t, S)), g.push(M)) : _ = !1
            }
            _ && (f.push(x), p.push(p.length))
        }
        p.sort(function (t, e) {
            return g[t] - g[e]
        });
        for (var I = [], T = [], C = [], A = [], D = [], y = 0; y < p.length; y++) {
            S = p[y];
            I[y] = u[S], T[y] = h[S], C[y] = c[S], A[y] = d[S], D[y] = f[S]
        }
        return {current: I, next: T, stackedOnCurrent: C, stackedOnNext: A, status: D}
    }, ub = K, hb = Q, cb = H, db = F, fb = [], pb = [], gb = [], mb = Ii.extend({
        type: "ec-polyline",
        shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
        style: {fill: null, stroke: "#000"},
        brush: sy(Ii.prototype.brush),
        buildPath: function (t, e) {
            var n = e.points, i = 0, r = n.length, o = _u(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (; r > 0 && mu(n[r - 1]); r--) ;
                for (; i < r && mu(n[i]); i++) ;
            }
            for (; i < r;) i += vu(t, n, i, r, r, 1, o.min, o.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
        }
    }), vb = Ii.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: sy(Ii.prototype.brush),
        buildPath: function (t, e) {
            var n = e.points, i = e.stackedOnPoints, r = 0, o = n.length, a = e.smoothMonotone,
                s = _u(n, e.smoothConstraint), l = _u(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (; o > 0 && mu(n[o - 1]); o--) ;
                for (; r < o && mu(n[r]); r++) ;
            }
            for (; r < o;) {
                var u = vu(t, n, r, o, o, 1, s.min, s.max, e.smooth, a, e.connectNulls);
                vu(t, i, r + u - 1, u, o, -1, l.min, l.max, e.stackedOnSmooth, a, e.connectNulls), r += u + 1, t.closePath()
            }
        }
    });
    fa.extend({
        type: "line", init: function () {
            var t = new Jg, e = new lu;
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
        }, render: function (t, e, n) {
            var i = t.coordinateSystem, r = this.group, o = t.getData(), s = t.getModel("lineStyle"),
                l = t.getModel("areaStyle"), u = o.mapArray(o.getItemLayout), h = "polar" === i.type,
                c = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, g = this._lineGroup,
                m = t.get("animation"), v = !l.isEmpty(), y = l.get("origin"), x = Mu(i, o, du(i, o, y)),
                _ = t.get("showSymbol"), w = _ && !h && ku(t, o, i), b = this._data;
            b && b.eachItemGraphicEl(function (t, e) {
                t.__temp && (r.remove(t), b.setItemGraphicEl(e, null))
            }), _ || d.remove(), r.add(g);
            var S = !h && t.get("step");
            f && c.type === i.type && S === this._step ? (v && !p ? p = this._newPolygon(u, x, i, m) : p && !v && (g.remove(p), p = this._polygon = null), g.setClipPath(Cu(i, !1, !1, t)), _ && d.updateData(o, {
                isIgnore: w,
                clipShape: Cu(i, !1, !0, t)
            }), o.eachItemGraphicEl(function (t) {
                t.stopAnimation(!0)
            }), wu(this._stackedOnPoints, x) && wu(this._points, u) || (m ? this._updateAnimation(o, x, i, n, S, y) : (S && (u = Au(u, i, S), x = Au(x, i, S)), f.setShape({points: u}), p && p.setShape({
                points: u,
                stackedOnPoints: x
            })))) : (_ && d.updateData(o, {
                isIgnore: w,
                clipShape: Cu(i, !1, !0, t)
            }), S && (u = Au(u, i, S), x = Au(x, i, S)), f = this._newPolyline(u, i, m), v && (p = this._newPolygon(u, x, i, m)), g.setClipPath(Cu(i, !0, !1, t)));
            var M = Du(o, i) || o.getVisual("color");
            f.useStyle(a(s.getLineStyle(), {fill: "none", stroke: M, lineJoin: "bevel"}));
            var I = t.get("smooth");
            if (I = bu(t.get("smooth")), f.setShape({
                    smooth: I,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                }), p) {
                var T = o.getCalculationInfo("stackedOnSeries"), C = 0;
                p.useStyle(a(l.getAreaStyle(), {
                    fill: M,
                    opacity: .7,
                    lineJoin: "bevel"
                })), T && (C = bu(T.get("smooth"))), p.setShape({
                    smooth: I,
                    stackedOnSmooth: C,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                })
            }
            this._data = o, this._coordSys = i, this._stackedOnPoints = x, this._points = u, this._step = S, this._valueOrigin = y
        }, dispose: function () {
        }, highlight: function (t, e, n, i) {
            var r = t.getData(), o = Ln(r, i);
            if (!(o instanceof Array) && null != o && o >= 0) {
                var a = r.getItemGraphicEl(o);
                if (!a) {
                    var s = r.getItemLayout(o);
                    if (!s) return;
                    (a = new eu(r, o)).position = s, a.setZ(t.get("zlevel"), t.get("z")), a.ignore = isNaN(s[0]) || isNaN(s[1]), a.__temp = !0, r.setItemGraphicEl(o, a), a.stopSymbolAnimation(!0), this.group.add(a)
                }
                a.highlight()
            } else fa.prototype.highlight.call(this, t, e, n, i)
        }, downplay: function (t, e, n, i) {
            var r = t.getData(), o = Ln(r, i);
            if (null != o && o >= 0) {
                var a = r.getItemGraphicEl(o);
                a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay())
            } else fa.prototype.downplay.call(this, t, e, n, i)
        }, _newPolyline: function (t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new mb({
                shape: {points: t},
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e, e
        }, _newPolygon: function (t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n), n = new vb({
                shape: {points: t, stackedOnPoints: e},
                silent: !0
            }), this._lineGroup.add(n), this._polygon = n, n
        }, _updateAnimation: function (t, e, n, i, r, o) {
            var a = this._polyline, s = this._polygon, l = t.hostModel,
                u = lb(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, o), h = u.current,
                c = u.stackedOnCurrent, d = u.next, f = u.stackedOnNext;
            r && (h = Au(u.current, n, r), c = Au(u.stackedOnCurrent, n, r), d = Au(u.next, n, r), f = Au(u.stackedOnNext, n, r)), a.shape.__points = u.current, a.shape.points = h, gr(a, {shape: {points: d}}, l), s && (s.setShape({
                points: h,
                stackedOnPoints: c
            }), gr(s, {shape: {points: d, stackedOnPoints: f}}, l));
            for (var p = [], g = u.status, m = 0; m < g.length; m++) if ("=" === g[m].cmd) {
                var v = t.getItemGraphicEl(g[m].idx1);
                v && p.push({el: v, ptIdx: m})
            }
            a.animators && a.animators.length && a.animators[0].during(function () {
                for (var t = 0; t < p.length; t++) p[t].el.attr("position", a.shape.__points[p[t].ptIdx])
            })
        }, remove: function (t) {
            var e = this.group, n = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function (t, i) {
                t.__temp && (e.remove(t), n.setItemGraphicEl(i, null))
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
    });
    var yb = function (t, e, n) {
        return {
            seriesType: t, performRawSeries: !0, reset: function (t, i, r) {
                var o = t.getData(), a = t.get("symbol") || e, s = t.get("symbolSize"), l = t.get("symbolKeepAspect");
                if (o.setVisual({
                        legendSymbol: n || a,
                        symbol: a,
                        symbolSize: s,
                        symbolKeepAspect: l
                    }), !i.isSeriesFiltered(t)) {
                    var u = "function" == typeof s;
                    return {
                        dataEach: o.hasItemOption || u ? function (e, n) {
                            if ("function" == typeof s) {
                                var i = t.getRawValue(n), r = t.getDataParams(n);
                                e.setItemVisual(n, "symbolSize", s(i, r))
                            }
                            if (e.hasItemOption) {
                                var o = e.getItemModel(n), a = o.getShallow("symbol", !0),
                                    l = o.getShallow("symbolSize", !0), u = o.getShallow("symbolKeepAspect", !0);
                                null != a && e.setItemVisual(n, "symbol", a), null != l && e.setItemVisual(n, "symbolSize", l), null != u && e.setItemVisual(n, "symbolKeepAspect", u)
                            }
                        } : null
                    }
                }
            }
        }
    }, xb = function (t) {
        return {
            seriesType: t, plan: Ux(), reset: function (t) {
                var e = t.getData(), n = t.coordinateSystem, i = t.pipelineContext.large;
                if (n) {
                    var r = f(n.dimensions, function (t) {
                        return e.mapDimension(t)
                    }).slice(0, 2), o = r.length, a = e.getCalculationInfo("stackResultDimension");
                    return Ks(e, r[0]) && (r[0] = a), Ks(e, r[1]) && (r[1] = a), o && {
                        progress: function (t, e) {
                            for (var a = t.end - t.start, s = i && new Float32Array(a * o), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {
                                var d;
                                if (1 === o) f = e.get(r[0], l), d = !isNaN(f) && n.dataToPoint(f, null, c); else {
                                    var f = h[0] = e.get(r[0], l), p = h[1] = e.get(r[1], l);
                                    d = !isNaN(f) && !isNaN(p) && n.dataToPoint(h, null, c)
                                }
                                i ? (s[u++] = d ? d[0] : NaN, s[u++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [NaN, NaN])
                            }
                            i && e.setLayout("symbolPoints", s)
                        }
                    }
                }
            }
        }
    }, _b = {
        average: function (t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
            return 0 === n ? NaN : e / n
        }, sum: function (t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
            return e
        }, max: function (t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return isFinite(e) ? e : NaN
        }, min: function (t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return isFinite(e) ? e : NaN
        }, nearest: function (t) {
            return t[0]
        }
    }, wb = function (t, e) {
        return Math.round(t.length / 2)
    }, bb = function (t) {
        this._axes = {}, this._dimList = [], this.name = t || ""
    };
    bb.prototype = {
        constructor: bb, type: "cartesian", getAxis: function (t) {
            return this._axes[t]
        }, getAxes: function () {
            return f(this._dimList, Lu, this)
        }, getAxesByScale: function (t) {
            return t = t.toLowerCase(), g(this.getAxes(), function (e) {
                return e.scale.type === t
            })
        }, addAxis: function (t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e)
        }, dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord")
        }, coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData")
        }, _dataCoordConvert: function (t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
                var o = n[r], a = this._axes[o];
                i[o] = a[e](t[o])
            }
            return i
        }
    }, Ou.prototype = {
        constructor: Ou, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        }, containPoint: function (t) {
            var e = this.getAxis("x"), n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
        }, containData: function (t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        }, dataToPoint: function (t, e, n) {
            var i = this.getAxis("x"), r = this.getAxis("y");
            return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n
        }, clampData: function (t, e) {
            var n = this.getAxis("x").scale, i = this.getAxis("y").scale, r = n.getExtent(), o = i.getExtent(),
                a = n.parse(t[0]), s = i.parse(t[1]);
            return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e
        }, pointToData: function (t, e) {
            var n = this.getAxis("x"), i = this.getAxis("y");
            return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
        }, getOtherAxis: function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
        }
    }, u(Ou, bb);
    var Sb = function (t, e, n, i, r) {
        Kw.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom"
    };
    Sb.prototype = {
        constructor: Sb, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t
        }, getGlobalExtent: function (t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
        }, getOtherAxis: function () {
            this.grid.getOtherAxis()
        }, pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        }, toLocalCoord: null, toGlobalCoord: null
    }, u(Sb, Kw);
    var Mb = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {show: !1},
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {color: "#333", width: 1, type: "solid"},
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
        axisLabel: {show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12},
        splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
        splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
    }, Ib = {};
    Ib.categoryAxis = i({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {show: !1},
        axisTick: {alignWithLabel: !1, interval: "auto"},
        axisLabel: {interval: "auto"}
    }, Mb), Ib.valueAxis = i({boundaryGap: [0, 0], splitNumber: 5}, Mb), Ib.timeAxis = a({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, Ib.valueAxis), Ib.logAxis = a({scale: !0, logBase: 10}, Ib.valueAxis);
    var Tb = ["value", "category", "time", "log"], Cb = function (t, e, n, o) {
        d(Tb, function (a) {
            e.extend({
                type: t + "Axis." + a, mergeDefaultAndTheme: function (e, r) {
                    var o = this.layoutMode, s = o ? to(e) : {};
                    i(e, r.getTheme().get(a + "Axis")), i(e, this.getDefaultOption()), e.type = n(t, e), o && Jr(e, s, o)
                }, optionUpdated: function () {
                    "category" === this.option.type && (this.__ordinalMeta = il.createByAxisModel(this))
                }, getCategories: function (t) {
                    var e = this.option;
                    if ("category" === e.type) return t ? e.data : this.__ordinalMeta.categories
                }, getOrdinalMeta: function () {
                    return this.__ordinalMeta
                }, defaultOption: r([{}, Ib[a + "Axis"], o], !0)
            })
        }), ex.registerSubTypeDefaulter(t + "Axis", v(n, t))
    }, Ab = ex.extend({
        type: "cartesian2dAxis", axis: null, init: function () {
            Ab.superApply(this, "init", arguments), this.resetRange()
        }, mergeOption: function () {
            Ab.superApply(this, "mergeOption", arguments), this.resetRange()
        }, restoreData: function () {
            Ab.superApply(this, "restoreData", arguments), this.resetRange()
        }, getCoordSysModel: function () {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0]
        }
    });
    i(Ab.prototype, Rw);
    var Db = {offset: 0};
    Cb("x", Ab, zu, Db), Cb("y", Ab, zu, Db), ex.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var kb = Nu.prototype;
    kb.type = "grid", kb.axisPointerEnabled = !0, kb.getRect = function () {
        return this._rect
    }, kb.update = function (t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model), d(n.x, function (t) {
            Sl(t.scale, t.model)
        }), d(n.y, function (t) {
            Sl(t.scale, t.model)
        });
        var i = {};
        d(n.x, function (t) {
            Ru(n, "y", t, i)
        }), d(n.y, function (t) {
            Ru(n, "x", t, i)
        }), this.resize(this.model, e)
    }, kb.resize = function (t, e, n) {
        function i() {
            d(o, function (t) {
                var e = t.isHorizontal(), n = e ? [0, r.width] : [0, r.height], i = t.inverse ? 1 : 0;
                t.setExtent(n[i], n[1 - i]), Fu(t, e ? r.x : r.y)
            })
        }

        var r = Kr(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
        this._rect = r;
        var o = this._axesList;
        i(), !n && t.get("containLabel") && (d(o, function (t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = Al(t);
                if (e) {
                    var n = t.isHorizontal() ? "height" : "width", i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
                }
            }
        }), i())
    }, kb.getAxis = function (t, e) {
        var n = this._axesMap[t];
        if (null != n) {
            if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
            return n[e]
        }
    }, kb.getAxes = function () {
        return this._axesList.slice()
    }, kb.getCartesian = function (t, e) {
        if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n]
        }
        w(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
    }, kb.getCartesians = function () {
        return this._coordsList.slice()
    }, kb.convertToPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
    }, kb.convertFromPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
    }, kb._findConvertTarget = function (t, e) {
        var n, i, r = e.seriesModel, o = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
            a = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, u = this._coordsList;
        return r ? l(u, n = r.coordinateSystem) < 0 && (n = null) : o && a ? n = this.getCartesian(o.componentIndex, a.componentIndex) : o ? i = this.getAxis("x", o.componentIndex) : a ? i = this.getAxis("y", a.componentIndex) : s && s.coordinateSystem === this && (n = this._coordsList[0]), {
            cartesian: n,
            axis: i
        }
    }, kb.containPoint = function (t) {
        var e = this._coordsList[0];
        if (e) return e.containPoint(t)
    }, kb._initCartesian = function (t, e, n) {
        function i(n) {
            return function (i, s) {
                if (Eu(i, t, e)) {
                    var l = i.get("position");
                    "x" === n ? "top" !== l && "bottom" !== l && r[l = "bottom"] && (l = "top" === l ? "bottom" : "top") : "left" !== l && "right" !== l && r[l = "left"] && (l = "left" === l ? "right" : "left"), r[l] = !0;
                    var u = new Sb(n, Ml(i), [0, 0], i.get("type"), l), h = "category" === u.type;
                    u.onBand = h && i.get("boundaryGap"), u.inverse = i.get("inverse"), i.axis = u, u.model = i, u.grid = this, u.index = s, this._axesList.push(u), o[n][s] = u, a[n]++
                }
            }
        }

        var r = {left: !1, right: !1, top: !1, bottom: !1}, o = {x: {}, y: {}}, a = {x: 0, y: 0};
        if (e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), !a.x || !a.y) return this._axesMap = {}, void(this._axesList = []);
        this._axesMap = o, d(o.x, function (e, n) {
            d(o.y, function (i, r) {
                var o = "x" + n + "y" + r, a = new Ou(o);
                a.grid = this, a.model = t, this._coordsMap[o] = a, this._coordsList.push(a), a.addAxis(e), a.addAxis(i)
            }, this)
        }, this)
    }, kb._updateScale = function (t, e) {
        function n(t, e, n) {
            d(t.mapDimension(e.dim, !0), function (n) {
                e.scale.unionExtentFromData(t, Qs(t, n))
            })
        }

        d(this._axesList, function (t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }), t.eachSeries(function (i) {
            if (Wu(i)) {
                var r = Vu(i), o = r[0], a = r[1];
                if (!Eu(o, e, t) || !Eu(a, e, t)) return;
                var s = this.getCartesian(o.componentIndex, a.componentIndex), l = i.getData(), u = s.getAxis("x"),
                    h = s.getAxis("y");
                "list" === l.type && (n(l, u), n(l, h))
            }
        }, this)
    }, kb.getTooltipAxes = function (t) {
        var e = [], n = [];
        return d(this.getCartesians(), function (i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(r);
            l(e, r) < 0 && e.push(r), l(n, o) < 0 && n.push(o)
        }), {baseAxes: e, otherAxes: n}
    };
    var Pb = ["xAxis", "yAxis"];
    Nu.create = function (t, e) {
        var n = [];
        return t.eachComponent("grid", function (i, r) {
            var o = new Nu(i, t, e);
            o.name = "grid_" + r, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o)
        }), t.eachSeries(function (t) {
            if (Wu(t)) {
                var e = Vu(t), n = e[0], i = e[1], r = n.getCoordSysModel().coordinateSystem;
                t.coordinateSystem = r.getCartesian(n.componentIndex, i.componentIndex)
            }
        }), n
    }, Nu.dimensions = Nu.prototype.dimensions = Ou.prototype.dimensions, Co.register("cartesian2d", Nu);
    var Lb = Math.PI, Ob = function (t, e) {
        this.opt = e, this.axisModel = t, a(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new Jg;
        var n = new Jg({position: e.position.slice(), rotation: e.rotation});
        n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
    };
    Ob.prototype = {
        constructor: Ob, hasBuilder: function (t) {
            return !!zb[t]
        }, add: function (t) {
            zb[t].call(this)
        }, getGroup: function () {
            return this.group
        }
    };
    var zb = {
        axisLine: function () {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var n = this.axisModel.axis.getExtent(), i = this._transform, r = [n[0], 0], a = [n[1], 0];
                i && ($(r, r, i), $(a, a, i));
                var s = o({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new gy(Vi({
                    anid: "line",
                    shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = e.get("axisLine.symbol"), u = e.get("axisLine.symbolSize"),
                    h = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof h && (h = [h, h]), null != l) {
                    "string" == typeof l && (l = [l, l]), "string" != typeof u && "number" != typeof u || (u = [u, u]);
                    var c = u[0], f = u[1];
                    d([{rotate: t.rotation + Math.PI / 2, offset: h[0], r: 0}, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: h[1],
                        r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                    }], function (e, n) {
                        if ("none" !== l[n] && null != l[n]) {
                            var i = Pl(l[n], -c / 2, -f / 2, c, f, s.stroke, !0), o = e.r + e.offset,
                                a = [r[0] + o * Math.cos(t.rotation), r[1] - o * Math.sin(t.rotation)];
                            i.attr({rotation: e.rotate, position: a, silent: !0}), this.group.add(i)
                        }
                    }, this)
                }
            }
        }, axisTickLabel: function () {
            var t = this.axisModel, e = this.opt, n = qu(this, t, e);
            Uu(t, $u(this, t, e), n)
        }, axisName: function () {
            var t = this.opt, e = this.axisModel, n = T(t.axisName, e.get("name"));
            if (n) {
                var i, r = e.get("nameLocation"), a = t.nameDirection, s = e.getModel("nameTextStyle"),
                    l = e.get("nameGap") || 0, u = this.axisModel.axis.getExtent(), h = u[0] > u[1] ? -1 : 1,
                    c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, ju(r) ? t.labelOffset + a * l : 0],
                    d = e.get("nameRotate");
                null != d && (d = d * Lb / 180);
                var f;
                ju(r) ? i = Eb(t.rotation, null != d ? d : t.rotation, a) : (i = Gu(t, r, d || 0, u), null != (f = t.axisNameAvailableWidth) && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
                var p = s.getFont(), g = e.get("nameTruncate", !0) || {}, m = g.ellipsis,
                    v = T(t.nameTruncateMaxWidth, g.maxWidth, f),
                    y = null != m && null != v ? Xy(n, v, p, m, {minChar: 2, placeholder: g.placeholder}) : n,
                    x = e.get("tooltip", !0), _ = e.mainType, w = {componentType: _, name: n, $vars: ["name"]};
                w[_ + "Index"] = e.componentIndex;
                var b = new ry({
                    anid: "name",
                    __fullText: n,
                    __truncatedText: y,
                    position: c,
                    rotation: i.rotation,
                    silent: Zu(e),
                    z2: 1,
                    tooltip: x && x.show ? o({
                        content: n, formatter: function () {
                            return n
                        }, formatterParams: w
                    }, x) : null
                });
                ar(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: i.textAlign,
                    textVerticalAlign: i.textVerticalAlign
                }), e.get("triggerEvent") && (b.eventData = Hu(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
            }
        }
    }, Eb = Ob.innerTextLayout = function (t, e, n) {
        var i, r, o = Nr(e - t);
        return Rr(o) ? (r = n > 0 ? "top" : "bottom", i = "center") : Rr(o - Lb) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = o > 0 && o < Lb ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
            rotation: o,
            textAlign: i,
            textVerticalAlign: r
        }
    }, Nb = d, Rb = v, Bb = Ts({
        type: "axis", _axisPointer: null, axisPointerClass: null, render: function (t, e, n, i) {
            this.axisPointerClass && ih(t), Bb.superApply(this, "render", arguments), lh(this, t, 0, n, 0, !0)
        }, updateAxisPointer: function (t, e, n, i, r) {
            lh(this, t, 0, n, 0, !1)
        }, remove: function (t, e) {
            var n = this._axisPointer;
            n && n.remove(e), Bb.superApply(this, "remove", arguments)
        }, dispose: function (t, e) {
            uh(this, e), Bb.superApply(this, "dispose", arguments)
        }
    }), Fb = [];
    Bb.registerAxisPointerClass = function (t, e) {
        Fb[t] = e
    }, Bb.getAxisPointerClass = function (t) {
        return t && Fb[t]
    };
    var Vb = ["axisLine", "axisTickLabel", "axisName"], Wb = ["splitArea", "splitLine"], Hb = Bb.extend({
        type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function (t, e, n, i) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new Jg, this.group.add(this._axisGroup), t.get("show")) {
                var o = t.getCoordSysModel(), a = hh(o, t), s = new Ob(t, a);
                d(Vb, s.add, s), this._axisGroup.add(s.getGroup()), d(Wb, function (e) {
                    t.get(e + ".show") && this["_" + e](t, o)
                }, this), _r(r, this._axisGroup, t), Hb.superCall(this, "render", t, e, n, i)
            }
        }, remove: function () {
            this._splitAreaColors = null
        }, _splitLine: function (t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitLine"), r = i.getModel("lineStyle"), o = r.get("color");
                o = y(o) ? o : [o];
                for (var s = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({tickModel: i}), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
                    var g = n.toGlobalCoord(h[p].coord);
                    l ? (c[0] = g, c[1] = s.y, d[0] = g, d[1] = s.y + s.height) : (c[0] = s.x, c[1] = g, d[0] = s.x + s.width, d[1] = g);
                    var m = u++ % o.length, v = h[p].tickValue;
                    this._axisGroup.add(new gy(Vi({
                        anid: null != v ? "line_" + h[p].tickValue : null,
                        shape: {x1: c[0], y1: c[1], x2: d[0], y2: d[1]},
                        style: a({stroke: o[m]}, f),
                        silent: !0
                    })))
                }
            }
        }, _splitArea: function (t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitArea"), r = i.getModel("areaStyle"), o = r.get("color"),
                    s = e.coordinateSystem.getRect(), l = n.getTicksCoords({tickModel: i, clamp: !0});
                if (l.length) {
                    var u = o.length, h = this._splitAreaColors, c = N(), d = 0;
                    if (h) for (m = 0; m < l.length; m++) {
                        var f = h.get(l[m].tickValue);
                        if (null != f) {
                            d = (f + (u - 1) * m) % u;
                            break
                        }
                    }
                    var p = n.toGlobalCoord(l[0].coord), g = r.getAreaStyle();
                    o = y(o) ? o : [o];
                    for (var m = 1; m < l.length; m++) {
                        var v, x, _, w, b = n.toGlobalCoord(l[m].coord);
                        n.isHorizontal() ? (v = p, x = s.y, _ = b - v, w = s.height, p = v + _) : (v = s.x, x = p, _ = s.width, p = x + (w = b - x));
                        var S = l[m - 1].tickValue;
                        null != S && c.set(S, d), this._axisGroup.add(new py({
                            anid: null != S ? "area_" + S : null,
                            shape: {x: v, y: x, width: _, height: w},
                            style: a({fill: o[d]}, g),
                            silent: !0
                        })), d = (d + 1) % u
                    }
                    this._splitAreaColors = c
                }
            }
        }
    });
    Hb.extend({type: "xAxis"}), Hb.extend({type: "yAxis"}), Ts({
        type: "grid", render: function (t, e) {
            this.group.removeAll(), t.get("show") && this.group.add(new py({
                shape: t.coordinateSystem.getRect(),
                style: a({fill: t.get("backgroundColor")}, t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }), ys(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    }), bs(yb("line", "circle", "line")), ws(xb("line")), xs(O_.PROCESSOR.STATISTIC, function (t) {
        return {
            seriesType: t, modifyOutputEnd: !0, reset: function (t, e, n) {
                var i = t.getData(), r = t.get("sampling"), o = t.coordinateSystem;
                if ("cartesian2d" === o.type && r) {
                    var a = o.getBaseAxis(), s = o.getOtherAxis(a), l = a.getExtent(), u = l[1] - l[0],
                        h = Math.round(i.count() / u);
                    if (h > 1) {
                        var c;
                        "string" == typeof r ? c = _b[r] : "function" == typeof r && (c = r), c && t.setData(i.downSample(i.mapDimension(s.dim), 1 / h, c, wb))
                    }
                }
            }
        }
    }("line")), Hx.extend({
        type: "series.__base_bar__",
        getInitialData: function (t, e) {
            return Js(this.getSource(), this)
        },
        getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t)), i = this.getData(), r = i.getLayout("offset"),
                    o = i.getLayout("size");
                return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + o / 2, n
            }
            return [NaN, NaN]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod",
            itemStyle: {},
            emphasis: {}
        }
    }).extend({
        type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect", getProgressive: function () {
            return !!this.get("large") && this.get("progressive")
        }, getProgressiveThreshold: function () {
            var t = this.get("progressiveThreshold"), e = this.get("largeThreshold");
            return e > t && (t = e), t
        }
    });
    var Gb = Km([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        Zb = {
            getBarItemStyle: function (t) {
                var e = Gb(this, t);
                if (this.getBorderLineDash) {
                    var n = this.getBorderLineDash();
                    n && (e.lineDash = n)
                }
                return e
            }
        }, Ub = ["itemStyle", "barBorderWidth"];
    o(Sr.prototype, Zb), As({
        type: "bar", render: function (t, e, n) {
            this._updateDrawMode(t);
            var i = t.get("coordinateSystem");
            return "cartesian2d" !== i && "polar" !== i || (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group
        }, incrementalPrepareRender: function (t, e, n) {
            this._clear(), this._updateDrawMode(t)
        }, incrementalRender: function (t, e, n, i) {
            this._incrementalRenderLarge(t, e)
        }, _updateDrawMode: function (t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
        }, _renderNormal: function (t, e, n) {
            var i, r = this.group, o = t.getData(), a = this._data, s = t.coordinateSystem, l = s.getBaseAxis();
            "cartesian2d" === s.type ? i = l.isHorizontal() : "polar" === s.type && (i = "angle" === l.dim);
            var u = t.isAnimationEnabled() ? t : null;
            o.diff(a).add(function (e) {
                if (o.hasValue(e)) {
                    var n = o.getItemModel(e), a = Yb[s.type](o, e, n), l = Xb[s.type](o, e, n, a, i, u);
                    o.setItemGraphicEl(e, l), r.add(l), gh(l, o, e, n, a, t, i, "polar" === s.type)
                }
            }).update(function (e, n) {
                var l = a.getItemGraphicEl(n);
                if (o.hasValue(e)) {
                    var h = o.getItemModel(e), c = Yb[s.type](o, e, h);
                    l ? gr(l, {shape: c}, u, e) : l = Xb[s.type](o, e, h, c, i, u, !0), o.setItemGraphicEl(e, l), r.add(l), gh(l, o, e, h, c, t, i, "polar" === s.type)
                } else r.remove(l)
            }).remove(function (t) {
                var e = a.getItemGraphicEl(t);
                "cartesian2d" === s.type ? e && fh(t, u, e) : e && ph(t, u, e)
            }).execute(), this._data = o
        }, _renderLarge: function (t, e, n) {
            this._clear(), vh(t, this.group)
        }, _incrementalRenderLarge: function (t, e) {
            vh(e, this.group, !0)
        }, dispose: R, remove: function (t) {
            this._clear(t)
        }, _clear: function (t) {
            var e = this.group, n = this._data;
            t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function (e) {
                "sector" === e.type ? ph(e.dataIndex, t, e) : fh(e.dataIndex, t, e)
            }) : e.removeAll(), this._data = null
        }
    });
    var Xb = {
        cartesian2d: function (t, e, n, i, r, a, s) {
            var l = new py({shape: o({}, i)});
            if (a) {
                var u = l.shape, h = r ? "height" : "width", c = {};
                u[h] = 0, c[h] = i[h], ky[s ? "updateProps" : "initProps"](l, {shape: c}, a, e)
            }
            return l
        }, polar: function (t, e, n, i, r, o, s) {
            var l = i.startAngle < i.endAngle, u = new ly({shape: a({clockwise: l}, i)});
            if (o) {
                var h = u.shape, c = r ? "r" : "endAngle", d = {};
                h[c] = r ? 0 : i.startAngle, d[c] = i[c], ky[s ? "updateProps" : "initProps"](u, {shape: d}, o, e)
            }
            return u
        }
    }, Yb = {
        cartesian2d: function (t, e, n) {
            var i = t.getItemLayout(e), r = mh(n, i), o = i.width > 0 ? 1 : -1, a = i.height > 0 ? 1 : -1;
            return {x: i.x + o * r / 2, y: i.y + a * r / 2, width: i.width - o * r, height: i.height - a * r}
        }, polar: function (t, e, n) {
            var i = t.getItemLayout(e);
            return {cx: i.cx, cy: i.cy, r0: i.r0, r: i.r, startAngle: i.startAngle, endAngle: i.endAngle}
        }
    }, jb = Ii.extend({
        type: "largeBar", shape: {points: []}, buildPath: function (t, e) {
            for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, o = 0; o < n.length; o += 2) i[this.__valueIdx] = n[o + r], t.moveTo(i[0], i[1]), t.lineTo(n[o], n[o + 1])
        }
    });
    ws(v(function (t, e) {
        var n = fl(t, e), i = pl(n), r = {};
        d(n, function (t) {
            var e = t.getData(), n = t.coordinateSystem, o = n.getBaseAxis(), a = cl(t), s = i[dl(o)][a], l = s.offset,
                u = s.width, h = n.getOtherAxis(o), c = t.get("barMinHeight") || 0;
            r[a] = r[a] || [], e.setLayout({offset: l, size: u});
            for (var d = e.mapDimension(h.dim), f = e.mapDimension(o.dim), p = Ks(e, d), g = h.isHorizontal(), m = xl(0, h), v = 0, y = e.count(); v < y; v++) {
                var x = e.get(d, v), _ = e.get(f, v);
                if (!isNaN(x)) {
                    var w = x >= 0 ? "p" : "n", b = m;
                    p && (r[a][_] || (r[a][_] = {p: m, n: m}), b = r[a][_][w]);
                    var S, M, I, T;
                    if (g) S = b, M = (C = n.dataToPoint([x, _]))[1] + l, I = C[0] - m, T = u, Math.abs(I) < c && (I = (I < 0 ? -1 : 1) * c), p && (r[a][_][w] += I); else {
                        var C = n.dataToPoint([_, x]);
                        S = C[0] + l, M = b, I = u, T = C[1] - m, Math.abs(T) < c && (T = (T <= 0 ? -1 : 1) * c), p && (r[a][_][w] += T)
                    }
                    e.setItemLayout(v, {x: S, y: M, width: I, height: T})
                }
            }
        }, this)
    }, "bar")), ws(ww), bs({
        seriesType: "bar", reset: function (t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        }
    });
    var qb = function (t, e, n) {
        e = y(e) && {coordDimensions: e} || o({}, e);
        var i = t.getSource(), r = dw(i, e), a = new uw(r, t);
        return a.initData(i, n), a
    }, $b = {
        updateSelectedMap: function (t) {
            this._targetList = y(t) ? t.slice() : [], this._selectTargetMap = p(t || [], function (t, e) {
                return t.set(e.name, e), t
            }, N())
        }, select: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            "single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
                t.selected = !1
            }), n && (n.selected = !0)
        }, unSelect: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1)
        }, toggleSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            if (null != n) return this[n.selected ? "unSelect" : "select"](t, e), n.selected
        }, isSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected
        }
    }, Kb = Cs({
        type: "series.pie",
        init: function (t) {
            Kb.superApply(this, "init", arguments), this.legendDataProvider = function () {
                return this.getRawData()
            }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
        },
        mergeOption: function (t) {
            Kb.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
        },
        getInitialData: function (t, e) {
            return qb(this, ["value"])
        },
        _createSelectableList: function () {
            for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); i < r; i++) n.push({
                name: t.getName(i),
                value: t.get(e, i),
                selected: ta(t, i, "selected")
            });
            return n
        },
        getDataParams: function (t) {
            var e = this.getData(), n = Kb.superCall(this, "getDataParams", t), i = [];
            return e.each(e.mapDimension("value"), function (t) {
                i.push(t)
            }), n.percent = Er(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
        },
        _defaultLabelLine: function (t) {
            In(t, "labelLine", ["show"]);
            var e = t.labelLine, n = t.emphasis.labelLine;
            e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {rotate: !1, show: !0, position: "outer"},
            labelLine: {show: !0, length: 15, length2: 15, smooth: !1, lineStyle: {width: 1, type: "solid"}},
            itemStyle: {borderWidth: 1},
            animationType: "expansion",
            animationEasing: "cubicOut"
        }
    });
    h(Kb, $b);
    var Qb = wh.prototype;
    Qb.updateData = function (t, e, n) {
        function i() {
            s.stopAnimation(!0), s.animateTo({shape: {r: h.r + l.get("hoverOffset")}}, 300, "elasticOut")
        }

        function r() {
            s.stopAnimation(!0), s.animateTo({shape: {r: h.r}}, 300, "elasticOut")
        }

        var s = this.childAt(0), l = t.hostModel, u = t.getItemModel(e), h = t.getItemLayout(e), c = o({}, h);
        c.label = null, n ? (s.setShape(c), "scale" === l.getShallow("animationType") ? (s.shape.r = h.r0, mr(s, {shape: {r: h.r}}, l, e)) : (s.shape.endAngle = h.startAngle, gr(s, {shape: {endAngle: h.endAngle}}, l, e))) : gr(s, {shape: c}, l, e);
        var d = t.getItemVisual(e, "color");
        s.useStyle(a({
            lineJoin: "bevel",
            fill: d
        }, u.getModel("itemStyle").getItemStyle())), s.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
        var f = u.getShallow("cursor");
        f && s.attr("cursor", f), _h(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), s.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && l.isAnimationEnabled() && s.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), ir(this)
    }, Qb._updateLabel = function (t, e) {
        var n = this.childAt(1), i = this.childAt(2), r = t.hostModel, o = t.getItemModel(e),
            a = t.getItemLayout(e).label, s = t.getItemVisual(e, "color");
        gr(n, {shape: {points: a.linePoints || [[a.x, a.y], [a.x, a.y], [a.x, a.y]]}}, r, e), gr(i, {
            style: {
                x: a.x,
                y: a.y
            }
        }, r, e), i.attr({rotation: a.rotation, origin: [a.x, a.y], z2: 10});
        var l = o.getModel("label"), u = o.getModel("emphasis.label"), h = o.getModel("labelLine"),
            c = o.getModel("emphasis.labelLine"), s = t.getItemVisual(e, "color");
        or(i.style, i.hoverStyle = {}, l, u, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: s,
            useInsideStyle: !!a.inside
        }, {
            textAlign: a.textAlign,
            textVerticalAlign: a.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), i.ignore = i.normalIgnore = !l.get("show"), i.hoverIgnore = !u.get("show"), n.ignore = n.normalIgnore = !h.get("show"), n.hoverIgnore = !c.get("show"), n.setStyle({
            stroke: s,
            opacity: t.getItemVisual(e, "opacity")
        }), n.setStyle(h.getModel("lineStyle").getLineStyle()), n.hoverStyle = c.getModel("lineStyle").getLineStyle();
        var d = h.get("smooth");
        d && !0 === d && (d = .4), n.setShape({smooth: d})
    }, u(wh, Jg);
    fa.extend({
        type: "pie", init: function () {
            var t = new Jg;
            this._sectorGroup = t
        }, render: function (t, e, n, i) {
            if (!i || i.from !== this.uid) {
                var r = t.getData(), o = this._data, a = this.group, s = e.get("animation"), l = !o,
                    u = t.get("animationType"), h = v(xh, this.uid, t, s, n), c = t.get("selectedMode");
                if (r.diff(o).add(function (t) {
                        var e = new wh(r, t);
                        l && "scale" !== u && e.eachChild(function (t) {
                            t.stopAnimation(!0)
                        }), c && e.on("click", h), r.setItemGraphicEl(t, e), a.add(e)
                    }).update(function (t, e) {
                        var n = o.getItemGraphicEl(e);
                        n.updateData(r, t), n.off("click"), c && n.on("click", h), a.add(n), r.setItemGraphicEl(t, n)
                    }).remove(function (t) {
                        var e = o.getItemGraphicEl(t);
                        a.remove(e)
                    }).execute(), s && l && r.count() > 0 && "scale" !== u) {
                    var d = r.getItemLayout(0), f = Math.max(n.getWidth(), n.getHeight()) / 2,
                        p = m(a.removeClipPath, a);
                    a.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
                } else a.removeClipPath();
                this._data = r
            }
        }, dispose: function () {
        }, _createClipPath: function (t, e, n, i, r, o, a) {
            var s = new ly({shape: {cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r}});
            return mr(s, {shape: {endAngle: i + (r ? 1 : -1) * Math.PI * 2}}, a, o), s
        }, containPoint: function (t, e) {
            var n = e.getData().getItemLayout(0);
            if (n) {
                var i = t[0] - n.cx, r = t[1] - n.cy, o = Math.sqrt(i * i + r * r);
                return o <= n.r && o >= n.r0
            }
        }
    });
    var Jb = function (t, e, n, i) {
        var r, o, a = t.getData(), s = [], l = !1;
        a.each(function (n) {
            var i, u, h, c, d = a.getItemLayout(n), f = a.getItemModel(n), p = f.getModel("label"),
                g = p.get("position") || f.get("emphasis.label.position"), m = f.getModel("labelLine"),
                v = m.get("length"), y = m.get("length2"), x = (d.startAngle + d.endAngle) / 2, _ = Math.cos(x),
                w = Math.sin(x);
            r = d.cx, o = d.cy;
            var b = "inside" === g || "inner" === g;
            if ("center" === g) i = d.cx, u = d.cy, c = "center"; else {
                var S = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + r, M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + o;
                if (i = S + 3 * _, u = M + 3 * w, !b) {
                    var I = S + _ * (v + e - d.r), T = M + w * (v + e - d.r), C = I + (_ < 0 ? -1 : 1) * y, A = T;
                    i = C + (_ < 0 ? -5 : 5), u = A, h = [[S, M], [I, T], [C, A]]
                }
                c = b ? "center" : _ > 0 ? "left" : "right"
            }
            var D = p.getFont(), k = p.get("rotate") ? _ < 0 ? -x + Math.PI : -x : 0,
                P = Se(t.getFormattedLabel(n, "normal") || a.getName(n), D, c, "top");
            l = !!k, d.label = {
                x: i,
                y: u,
                position: g,
                height: P.height,
                len: v,
                len2: y,
                linePoints: h,
                textAlign: c,
                verticalAlign: "middle",
                rotation: k,
                inside: b
            }, b || s.push(d.label)
        }), !l && t.get("avoidLabelOverlap") && Sh(s, r, o, e, n, i)
    }, tS = 2 * Math.PI, eS = Math.PI / 180;
    !function (t, e) {
        d(e, function (e) {
            e.update = "updateView", _s(e, function (n, i) {
                var r = {};
                return i.eachComponent({mainType: "series", subType: t, query: n}, function (t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function (e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1
                    })
                }), {name: n.name, selected: r}
            })
        })
    }("pie", [{type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected"}, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {type: "pieUnSelect", event: "pieunselected", method: "unSelect"}]), bs(function (t) {
        return {
            getTargetSeries: function (e) {
                var n = {}, i = N();
                return e.eachSeriesByType(t, function (t) {
                    t.__paletteScope = n, i.set(t.uid, t)
                }), i
            }, reset: function (t, e) {
                var n = t.getRawData(), i = {}, r = t.getData();
                r.each(function (t) {
                    var e = r.getRawIndex(t);
                    i[e] = t
                }), n.each(function (e) {
                    var o = i[e], a = null != o && r.getItemVisual(o, "color", !0);
                    if (a) n.setItemVisual(e, "color", a); else {
                        var s = n.getItemModel(e).get("itemStyle.color") || t.getColorFromPalette(n.getName(e) || e + "", t.__paletteScope, n.count());
                        n.setItemVisual(e, "color", s), null != o && r.setItemVisual(o, "color", s)
                    }
                })
            }
        }
    }("pie")), ws(v(function (t, e, n, i) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), i = e.mapDimension("value"), r = t.get("center"), o = t.get("radius");
            y(o) || (o = [0, o]), y(r) || (r = [r, r]);
            var a = n.getWidth(), s = n.getHeight(), l = Math.min(a, s), u = Dr(r[0], a), h = Dr(r[1], s),
                c = Dr(o[0], l / 2), d = Dr(o[1], l / 2), f = -t.get("startAngle") * eS, p = t.get("minAngle") * eS,
                g = 0;
            e.each(i, function (t) {
                !isNaN(t) && g++
            });
            var m = e.getSum(i), v = Math.PI / (m || g) * 2, x = t.get("clockwise"), _ = t.get("roseType"),
                w = t.get("stillShowZeroSum"), b = e.getDataExtent(i);
            b[0] = 0;
            var S = tS, M = 0, I = f, T = x ? 1 : -1;
            if (e.each(i, function (t, n) {
                    var i;
                    if (isNaN(t)) e.setItemLayout(n, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: x,
                        cx: u,
                        cy: h,
                        r0: c,
                        r: _ ? NaN : d
                    }); else {
                        (i = "area" !== _ ? 0 === m && w ? v : t * v : tS / g) < p ? (i = p, S -= p) : M += t;
                        var r = I + T * i;
                        e.setItemLayout(n, {
                            angle: i,
                            startAngle: I,
                            endAngle: r,
                            clockwise: x,
                            cx: u,
                            cy: h,
                            r0: c,
                            r: _ ? Ar(t, b, [c, d]) : d
                        }), I = r
                    }
                }), S < tS && g) if (S <= .001) {
                var C = tS / g;
                e.each(i, function (t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n);
                        i.angle = C, i.startAngle = f + T * n * C, i.endAngle = f + T * (n + 1) * C
                    }
                })
            } else v = S / M, I = f, e.each(i, function (t, n) {
                if (!isNaN(t)) {
                    var i = e.getItemLayout(n), r = i.angle === p ? p : t * v;
                    i.startAngle = I, i.endAngle = I + T * r, I += T * r
                }
            });
            Jb(t, d, a, s)
        })
    }, "pie")), xs(function (t) {
        return {
            seriesType: t, reset: function (t, e) {
                var n = e.findComponents({mainType: "legend"});
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function (t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    }("pie")), Hx.extend({
        type: "series.scatter",
        dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
        getInitialData: function (t, e) {
            return Js(this.getSource(), this)
        },
        brushSelector: "point",
        getProgressive: function () {
            var t = this.option.progressive;
            return null == t ? this.option.large ? 5e3 : this.get("progressive") : t
        },
        getProgressiveThreshold: function () {
            var t = this.option.progressiveThreshold;
            return null == t ? this.option.large ? 1e4 : this.get("progressiveThreshold") : t
        },
        defaultOption: {
            coordinateSystem: "cartesian2d",
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            symbolSize: 10,
            large: !1,
            largeThreshold: 2e3,
            itemStyle: {opacity: .8}
        }
    });
    var nS = Ei({
        shape: {points: null}, symbolProxy: null, buildPath: function (t, e) {
            var n = e.points, i = e.size, r = this.symbolProxy, o = r.shape;
            if (!((t.getContext ? t.getContext() : t) && i[0] < 4)) for (var a = 0; a < n.length;) {
                var s = n[a++], l = n[a++];
                isNaN(s) || isNaN(l) || (o.x = s - i[0] / 2, o.y = l - i[1] / 2, o.width = i[0], o.height = i[1], r.buildPath(t, o, !0))
            }
        }, afterBrush: function (t) {
            var e = this.shape, n = e.points, i = e.size;
            if (i[0] < 4) {
                this.setTransform(t);
                for (var r = 0; r < n.length;) {
                    var o = n[r++], a = n[r++];
                    isNaN(o) || isNaN(a) || t.fillRect(o - i[0] / 2, a - i[1] / 2, i[0], i[1])
                }
                this.restoreTransform(t)
            }
        }, findDataIndex: function (t, e) {
            for (var n = this.shape, i = n.points, r = n.size, o = Math.max(r[0], 4), a = Math.max(r[1], 4), s = i.length / 2 - 1; s >= 0; s--) {
                var l = 2 * s, u = i[l] - o / 2, h = i[l + 1] - a / 2;
                if (t >= u && e >= h && t <= u + o && e <= h + a) return s
            }
            return -1
        }
    }), iS = Mh.prototype;
    iS.isPersistent = function () {
        return !this._incremental
    }, iS.updateData = function (t) {
        this.group.removeAll();
        var e = new nS({rectHover: !0, cursor: "default"});
        e.setShape({points: t.getLayout("symbolPoints")}), this._setCommon(e, t), this.group.add(e), this._incremental = null
    }, iS.updateLayout = function (t) {
        if (!this._incremental) {
            var e = t.getLayout("symbolPoints");
            this.group.eachChild(function (t) {
                if (null != t.startIndex) {
                    var n = 2 * (t.endIndex - t.startIndex), i = 4 * t.startIndex * 2;
                    e = new Float32Array(e.buffer, i, n)
                }
                t.setShape("points", e)
            })
        }
    }, iS.incrementalPrepareUpdate = function (t) {
        this.group.removeAll(), this._clearIncremental(), t.count() > 2e6 ? (this._incremental || (this._incremental = new zi({silent: !0})), this.group.add(this._incremental)) : this._incremental = null
    }, iS.incrementalUpdate = function (t, e) {
        var n;
        this._incremental ? (n = new nS, this._incremental.addDisplayable(n, !0)) : ((n = new nS({
            rectHover: !0,
            cursor: "default",
            startIndex: t.start,
            endIndex: t.end
        })).incremental = !0, this.group.add(n)), n.setShape({points: e.getLayout("symbolPoints")}), this._setCommon(n, e, !!this._incremental)
    }, iS._setCommon = function (t, e, n) {
        var i = e.hostModel, r = e.getVisual("symbolSize");
        t.setShape("size", r instanceof Array ? r : [r, r]), t.symbolProxy = Pl(e.getVisual("symbol"), 0, 0, 0, 0), t.setColor = t.symbolProxy.setColor;
        var o = t.shape.size[0] < 4;
        t.useStyle(i.getModel("itemStyle").getItemStyle(o ? ["color", "shadowBlur", "shadowColor"] : ["color"]));
        var a = e.getVisual("color");
        a && t.setColor(a), n || (t.seriesIndex = i.seriesIndex, t.on("mousemove", function (e) {
            t.dataIndex = null;
            var n = t.findDataIndex(e.offsetX, e.offsetY);
            n >= 0 && (t.dataIndex = n + (t.startIndex || 0))
        }))
    }, iS.remove = function () {
        this._clearIncremental(), this._incremental = null, this.group.removeAll()
    }, iS._clearIncremental = function () {
        var t = this._incremental;
        t && t.clearDisplaybles()
    }, As({
        type: "scatter", render: function (t, e, n) {
            var i = t.getData();
            this._updateSymbolDraw(i, t).updateData(i), this._finished = !0
        }, incrementalPrepareRender: function (t, e, n) {
            var i = t.getData();
            this._updateSymbolDraw(i, t).incrementalPrepareUpdate(i), this._finished = !1
        }, incrementalRender: function (t, e, n) {
            this._symbolDraw.incrementalUpdate(t, e.getData()), this._finished = t.end === e.getData().count()
        }, updateTransform: function (t, e, n) {
            var i = t.getData();
            if (this.group.dirty(), !this._finished || i.count() > 1e4 || !this._symbolDraw.isPersistent()) return {update: !0};
            var r = xb().reset(t);
            r.progress && r.progress({start: 0, end: i.count()}, i), this._symbolDraw.updateLayout(i)
        }, _updateSymbolDraw: function (t, e) {
            var n = this._symbolDraw, i = e.pipelineContext.large;
            return n && i === this._isLargeDraw || (n && n.remove(), n = this._symbolDraw = i ? new Mh : new lu, this._isLargeDraw = i, this.group.removeAll()), this.group.add(n.group), n
        }, remove: function (t, e) {
            this._symbolDraw && this._symbolDraw.remove(!0), this._symbolDraw = null
        }, dispose: function () {
        }
    }), bs(yb("scatter", "circle")), ws(xb("scatter")), ys(function (t) {
        var e = t.graphic;
        y(e) ? e[0] && e[0].elements ? t.graphic = [t.graphic[0]] : t.graphic = [{elements: e}] : e && !e.elements && (t.graphic = [{elements: [e]}])
    });
    var rS = Is({
        type: "graphic",
        defaultOption: {elements: [], parentId: null},
        _elOptionsToUpdate: null,
        mergeOption: function (t) {
            var e = this.option.elements;
            this.option.elements = null, rS.superApply(this, "mergeOption", arguments), this.option.elements = e
        },
        optionUpdated: function (t, e) {
            var n = this.option, i = (e ? n : t).elements, r = n.elements = e ? [] : n.elements, o = [];
            this._flatten(i, o);
            var a = An(r, o);
            Dn(a);
            var s = this._elOptionsToUpdate = [];
            d(a, function (t, e) {
                var n = t.option;
                n && (s.push(n), Dh(t, n), kh(r, e, n), Ph(r[e], n))
            }, this);
            for (var l = r.length - 1; l >= 0; l--) null == r[l] ? r.splice(l, 1) : delete r[l].$action
        },
        _flatten: function (t, e, n) {
            d(t, function (t) {
                if (t) {
                    n && (t.parentOption = n), e.push(t);
                    var i = t.children;
                    "group" === t.type && i && this._flatten(i, e, t), delete t.children
                }
            }, this)
        },
        useElOptionsToUpdate: function () {
            var t = this._elOptionsToUpdate;
            return this._elOptionsToUpdate = null, t
        }
    });
    Ts({
        type: "graphic", init: function (t, e) {
            this._elMap = N(), this._lastGraphicModel
        }, render: function (t, e, n) {
            t !== this._lastGraphicModel && this._clear(), this._lastGraphicModel = t, this._updateElements(t), this._relocate(t, n)
        }, _updateElements: function (t) {
            var e = t.useElOptionsToUpdate();
            if (e) {
                var n = this._elMap, i = this.group;
                d(e, function (e) {
                    var r = e.$action, o = e.id, a = n.get(o), s = e.parentId, l = null != s ? n.get(s) : i,
                        u = e.style;
                    "text" === e.type && u && (e.hv && e.hv[1] && (u.textVerticalAlign = u.textBaseline = null), !u.hasOwnProperty("textFill") && u.fill && (u.textFill = u.fill), !u.hasOwnProperty("textStroke") && u.stroke && (u.textStroke = u.stroke));
                    var h = Ch(e);
                    r && "merge" !== r ? "replace" === r ? (Th(a, n), Ih(o, l, h, n)) : "remove" === r && Th(a, n) : a ? a.attr(h) : Ih(o, l, h, n);
                    var c = n.get(o);
                    c && (c.__ecGraphicWidth = e.width, c.__ecGraphicHeight = e.height, Lh(c, t))
                })
            }
        }, _relocate: function (t, e) {
            for (var n = t.option.elements, i = this.group, r = this._elMap, o = n.length - 1; o >= 0; o--) {
                var a = n[o], s = r.get(a.id);
                if (s) {
                    var l = s.parent;
                    Qr(s, a, l === i ? {width: e.getWidth(), height: e.getHeight()} : {
                        width: l.__ecGraphicWidth || 0,
                        height: l.__ecGraphicHeight || 0
                    }, null, {hv: a.hv, boundingMode: a.bounding})
                }
            }
        }, _clear: function () {
            var t = this._elMap;
            t.each(function (e) {
                Th(e, t)
            }), this._elMap = N()
        }, dispose: function () {
            this._clear()
        }
    });
    var oS = function (t, e) {
        var n, i = [], r = t.seriesIndex;
        if (null == r || !(n = e.getSeriesByIndex(r))) return {point: []};
        var o = n.getData(), a = Ln(o, t);
        if (null == a || a < 0 || y(a)) return {point: []};
        var s = o.getItemGraphicEl(a), l = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(a) || []; else if (l && l.dataToPoint) i = l.dataToPoint(o.getValues(f(l.dimensions, function (t) {
            return o.mapDimension(t)
        }), a, !0)) || []; else if (s) {
            var u = s.getBoundingRect().clone();
            u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2]
        }
        return {point: i, el: s}
    }, aS = d, sS = v, lS = On(), uS = (Is({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {color: "#aaa", width: 1, type: "solid"},
            shadowStyle: {color: "rgba(150,150,150,0.3)"},
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [5, 7, 5, 7],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), On()), hS = d, cS = Ts({
        type: "axisPointer", render: function (t, e, n) {
            var i = e.getComponent("tooltip"), r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
            Gh("axisPointer", n, function (t, e, n) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                })
            })
        }, remove: function (t, e) {
            qh(e.getZr(), "axisPointer"), cS.superApply(this._model, "remove", arguments)
        }, dispose: function (t, e) {
            qh("axisPointer", e), cS.superApply(this._model, "dispose", arguments)
        }
    }), dS = On(), fS = n, pS = m;
    ($h.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, n, i) {
            var r = e.get("value"), o = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== o) {
                this._lastValue = r, this._lastStatus = o;
                var a = this._group, s = this._handle;
                if (!o || "hide" === o) return a && a.hide(), void(s && s.hide());
                a && a.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, n);
                var u = l.graphicKey;
                u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
                var h = this._moveAnimation = this.determineAnimation(t, e);
                if (a) {
                    var c = v(Kh, e, h);
                    this.updatePointerEl(a, l, c, e), this.updateLabelEl(a, l, c, e)
                } else a = this._group = new Jg, this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), n.getZr().add(a);
                ec(a, e, !0), this._renderHandle(r)
            }
        },
        remove: function (t) {
            this.clear(t)
        },
        dispose: function (t) {
            this.clear(t)
        },
        determineAnimation: function (t, e) {
            var n = e.get("animation"), i = t.axis, r = "category" === i.type, o = e.get("snap");
            if (!o && !r) return !1;
            if ("auto" === n || null == n) {
                var a = this.animationThreshold;
                if (r && i.getBandWidth() > a) return !0;
                if (o) {
                    var s = rh(t).seriesDataCount, l = i.getExtent();
                    return Math.abs(l[0] - l[1]) / s > a
                }
                return !1
            }
            return !0 === n
        },
        makeElOption: function (t, e, n, i, r) {
        },
        createPointerEl: function (t, e, n, i) {
            var r = e.pointer;
            if (r) {
                var o = dS(t).pointerEl = new ky[r.type](fS(e.pointer));
                t.add(o)
            }
        },
        createLabelEl: function (t, e, n, i) {
            if (e.label) {
                var r = dS(t).labelEl = new py(fS(e.label));
                t.add(r), Jh(r, i)
            }
        },
        updatePointerEl: function (t, e, n) {
            var i = dS(t).pointerEl;
            i && (i.setStyle(e.pointer.style), n(i, {shape: e.pointer.shape}))
        },
        updateLabelEl: function (t, e, n, i) {
            var r = dS(t).labelEl;
            r && (r.setStyle(e.label.style), n(r, {shape: e.label.shape, position: e.label.position}), Jh(r, i))
        },
        _renderHandle: function (t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, r = e.getModel("handle"),
                    o = e.get("status");
                if (!r.get("show") || !o || "hide" === o) return i && n.remove(i), void(this._handle = null);
                var a;
                this._handle || (a = !0, i = this._handle = br(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function (t) {
                        vg(t.event)
                    },
                    onmousedown: pS(this._onHandleDragMove, this, 0, 0),
                    drift: pS(this._onHandleDragMove, this),
                    ondragend: pS(this._onHandleDragEnd, this)
                }), n.add(i)), ec(i, e, !1);
                var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
                i.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                y(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), xa(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, a)
            }
        },
        _moveHandleToValue: function (t, e) {
            Kh(this._axisPointerModel, !e && this._moveAnimation, this._handle, tc(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        },
        _onHandleDragMove: function (t, e) {
            var n = this._handle;
            if (n) {
                this._dragging = !0;
                var i = this.updateHandleTransform(tc(n), [t, e], this._axisModel, this._axisPointerModel);
                this._payloadInfo = i, n.stopAnimation(), n.attr(tc(i)), dS(n).lastProp = null, this._doDispatchAxisPointer()
            }
        },
        _doDispatchAxisPointer: function () {
            if (this._handle) {
                var t = this._payloadInfo, e = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: t.cursorPoint[0],
                    y: t.cursorPoint[1],
                    tooltipOption: t.tooltipOption,
                    axesInfo: [{axisDim: e.axis.dim, axisIndex: e.componentIndex}]
                })
            }
        },
        _onHandleDragEnd: function (t) {
            if (this._dragging = !1, this._handle) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), n = this._group, i = this._handle;
            e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
        },
        doClear: function () {
        },
        buildLabel: function (t, e, n) {
            return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
        }
    }).constructor = $h, Wn($h);
    var gS = $h.extend({
        makeElOption: function (t, e, n, i, r) {
            var o = n.axis, a = o.grid, s = i.get("type"), l = hc(a, o).getOtherAxis(o).getGlobalExtent(),
                u = o.toGlobalCoord(o.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var h = nc(i), c = mS[s](o, u, l, h);
                c.style = h, t.graphicKey = c.type, t.pointer = c
            }
            sc(e, t, hh(a.model, n), n, i, r)
        }, getHandleTransform: function (t, e, n) {
            var i = hh(e.axis.grid.model, e, {labelInside: !1});
            return i.labelMargin = n.get("handle.margin"), {
                position: ac(e.axis, t, i),
                rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
            }
        }, updateHandleTransform: function (t, e, n, i) {
            var r = n.axis, o = r.grid, a = r.getGlobalExtent(!0), s = hc(o, r).getOtherAxis(r).getGlobalExtent(),
                l = "x" === r.dim ? 0 : 1, u = t.position;
            u[l] += e[l], u[l] = Math.min(a[1], u[l]), u[l] = Math.max(a[0], u[l]);
            var h = (s[1] + s[0]) / 2, c = [h, h];
            c[l] = u[l];
            var d = [{verticalAlign: "middle"}, {align: "center"}];
            return {position: u, rotation: t.rotation, cursorPoint: c, tooltipOption: d[l]}
        }
    }), mS = {
        line: function (t, e, n, i) {
            var r = lc([e, n[0]], [e, n[1]], cc(t));
            return Vi({shape: r, style: i}), {type: "Line", shape: r}
        }, shadow: function (t, e, n, i) {
            var r = Math.max(1, t.getBandWidth()), o = n[1] - n[0];
            return {type: "Rect", shape: uc([e - r / 2, n[0]], [r, o], cc(t))}
        }
    };
    Bb.registerAxisPointerClass("CartesianAxisPointer", gS), ys(function (t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !y(e) && (t.axisPointer.link = [e])
        }
    }), xs(O_.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = Ku(t, e)
    }), _s({type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer"}, function (t, e, n) {
        var i = t.currTrigger, r = [t.x, t.y], o = t, a = t.dispatchAction || m(n.dispatchAction, n),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            Hh(r) && (r = oS({seriesIndex: o.seriesIndex, dataIndex: o.dataIndex}, e).point);
            var l = Hh(r), u = o.axesInfo, h = s.axesInfo, c = "leave" === i || Hh(r), d = {}, f = {},
                p = {list: [], map: {}}, g = {showPointer: sS(Eh, f), showTooltip: sS(Nh, p)};
            aS(s.coordSysMap, function (t, e) {
                var n = l || t.containPoint(r);
                aS(s.coordSysAxesInfo[e], function (t, e) {
                    var i = t.axis, o = Vh(u, t);
                    if (!c && n && (!u || o)) {
                        var a = o && o.value;
                        null != a || l || (a = i.pointToData(r)), null != a && Oh(t, a, g, !1, d)
                    }
                })
            });
            var v = {};
            return aS(h, function (t, e) {
                var n = t.linkGroup;
                n && !f[e] && aS(n.axesInfo, function (e, i) {
                    var r = f[i];
                    if (e !== t && r) {
                        var o = r.value;
                        n.mapper && (o = t.axis.scale.parse(n.mapper(o, Wh(e), Wh(t)))), v[t.key] = o
                    }
                })
            }), aS(v, function (t, e) {
                Oh(h[e], t, g, !0, d)
            }), Rh(f, h, d), Bh(p, r, t, a), Fh(h, 0, n), d
        }
    }), Is({
        type: "tooltip",
        dependencies: ["axisPointer"],
        defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            renderMode: "auto",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
            },
            textStyle: {color: "#fff", fontSize: 14}
        }
    });
    var vS = d, yS = Gr, xS = ["", "-webkit-", "-moz-", "-o-"];
    gc.prototype = {
        constructor: gc, _enterable: !0, update: function () {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), n = t.style;
            "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
        }, show: function (t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + pc(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
        }, setContent: function (t) {
            this.el.innerHTML = null == t ? "" : t
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el;
            return [t.clientWidth, t.clientHeight]
        }, moveTo: function (t, e) {
            var n, i = this._zr;
            i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
        }, hide: function () {
            this.el.style.display = "none", this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            var t = this.el.clientWidth, e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var n = document.defaultView.getComputedStyle(this.el);
                n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
            }
            return {width: t, height: e}
        }
    }, mc.prototype = {
        constructor: mc, _enterable: !0, update: function () {
        }, show: function (t) {
            this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
        }, setContent: function (t, e, n) {
            this.el && this._zr.remove(this.el);
            for (var i = {}, r = t, o = r.indexOf("{marker"); o >= 0;) {
                var a = r.indexOf("|}"), s = r.substr(o + "{marker".length, a - o - "{marker".length);
                s.indexOf("sub") > -1 ? i["marker" + s] = {
                    textWidth: 4,
                    textHeight: 4,
                    textBorderRadius: 2,
                    textBackgroundColor: e[s],
                    textOffset: [3, 0]
                } : i["marker" + s] = {
                    textWidth: 10,
                    textHeight: 10,
                    textBorderRadius: 5,
                    textBackgroundColor: e[s]
                }, o = (r = r.substr(a + 1)).indexOf("{marker")
            }
            this.el = new ry({
                style: {
                    rich: i,
                    text: t,
                    textLineHeight: 20,
                    textBackgroundColor: n.get("backgroundColor"),
                    textBorderRadius: n.get("borderRadius"),
                    textFill: n.get("textStyle.color"),
                    textPadding: n.get("padding")
                }, z: n.get("z")
            }), this._zr.add(this.el);
            var l = this;
            this.el.on("mouseover", function () {
                l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0
            }), this.el.on("mouseout", function () {
                l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1
            })
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el.getBoundingRect();
            return [t.width, t.height]
        }, moveTo: function (t, e) {
            this.el && this.el.attr("position", [t, e])
        }, hide: function () {
            this.el.hide(), this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            return this.getSize()
        }
    };
    var _S = m, wS = d, bS = Dr, SS = new py({shape: {x: -1, y: -1, width: 2, height: 2}});
    Ts({
        type: "tooltip", init: function (t, e) {
            if (!Xp.node) {
                var n = t.getComponent("tooltip").get("renderMode");
                this._renderMode = Bn(n);
                var i;
                "html" === this._renderMode ? (i = new gc(e.getDom(), e), this._newLine = "<br/>") : (i = new mc(e), this._newLine = "\n"), this._tooltipContent = i
            }
        }, render: function (t, e, n) {
            if (!Xp.node) {
                this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                var i = this._tooltipContent;
                i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
            }
        }, _initGlobalListener: function () {
            var t = this._tooltipModel.get("triggerOn");
            Gh("itemTooltip", this._api, _S(function (e, n, i) {
                "none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(n, i) : "leave" === e && this._hide(i))
            }, this))
        }, _keepShow: function () {
            var t = this._tooltipModel, e = this._ecModel, n = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var i = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                    i.manuallyShowTip(t, e, n, {x: i._lastX, y: i._lastY})
                })
            }
        }, manuallyShowTip: function (t, e, n, i) {
            if (i.from !== this.uid && !Xp.node) {
                var r = yc(i, n);
                this._ticket = "";
                var o = i.dataByCoordSys;
                if (i.tooltip && null != i.x && null != i.y) {
                    var a = SS;
                    a.position = [i.x, i.y], a.update(), a.tooltip = i.tooltip, this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        target: a
                    }, r)
                } else if (o) this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    event: {},
                    dataByCoordSys: i.dataByCoordSys,
                    tooltipOption: i.tooltipOption
                }, r); else if (null != i.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, n, i)) return;
                    var s = oS(i, e), l = s.point[0], u = s.point[1];
                    null != l && null != u && this._tryShow({
                        offsetX: l,
                        offsetY: u,
                        position: i.position,
                        target: s.el,
                        event: {}
                    }, r)
                } else null != i.x && null != i.y && (n.dispatchAction({
                    type: "updateAxisPointer",
                    x: i.x,
                    y: i.y
                }), this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    target: n.getZr().findHover(i.x, i.y).target,
                    event: {}
                }, r))
            }
        }, manuallyHideTip: function (t, e, n, i) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(yc(i, n))
        }, _manuallyAxisShowTip: function (t, e, n, i) {
            var r = i.seriesIndex, o = i.dataIndex, a = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != o && null != a) {
                var s = e.getSeriesByIndex(r);
                if (s && "axis" === (t = vc([s.getData().getItemModel(o), s, (s.coordinateSystem || {}).model, t])).get("trigger")) return n.dispatchAction({
                    type: "updateAxisPointer",
                    seriesIndex: r,
                    dataIndex: o,
                    position: i.position
                }), !0
            }
        }, _tryShow: function (t, e) {
            var n = t.target;
            if (this._tooltipModel) {
                this._lastX = t.offsetX, this._lastY = t.offsetY;
                var i = t.dataByCoordSys;
                i && i.length ? this._showAxisTooltip(i, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
            }
        }, _showOrMove: function (t, e) {
            var n = t.get("showDelay");
            e = m(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
        }, _showAxisTooltip: function (t, e) {
            var n = this._ecModel, r = this._tooltipModel, o = [e.offsetX, e.offsetY], a = [], s = [],
                l = vc([e.tooltipOption, r]), u = this._renderMode, h = this._newLine, c = {};
            wS(t, function (t) {
                wS(t.dataByAxis, function (t) {
                    var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), r = t.value, o = [];
                    if (e && null != r) {
                        var l = oc(r, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                        d(t.seriesDataIndices, function (a) {
                            var h = n.getSeriesByIndex(a.seriesIndex), d = a.dataIndexInside,
                                f = h && h.getDataParams(d);
                            if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = Cl(e.axis, r), f.axisValueLabel = l, f) {
                                s.push(f);
                                var p, g = h.formatTooltip(d, !0, null, u);
                                if (w(g)) {
                                    p = g.html;
                                    var m = g.markers;
                                    i(c, m)
                                } else p = g;
                                o.push(p)
                            }
                        });
                        var f = l;
                        "html" !== u ? a.push(o.join(h)) : a.push((f ? Zr(f) + h : "") + o.join(h))
                    }
                })
            }, this), a.reverse(), a = a.join(this._newLine + this._newLine);
            var f = e.position;
            this._showOrMove(l, function () {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, f, o[0], o[1], this._tooltipContent, s) : this._showTooltipContent(l, a, s, Math.random(), o[0], o[1], f, void 0, c)
            })
        }, _showSeriesItemTooltip: function (t, e, n) {
            var i = this._ecModel, r = e.seriesIndex, o = i.getSeriesByIndex(r), a = e.dataModel || o, s = e.dataIndex,
                l = e.dataType, u = a.getData(),
                h = vc([u.getItemModel(s), a, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
                c = h.get("trigger");
            if (null == c || "item" === c) {
                var d, f, p = a.getDataParams(s, l), g = a.formatTooltip(s, !1, l, this._renderMode);
                w(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
                var m = "item_" + a.name + "_" + s;
                this._showOrMove(h, function () {
                    this._showTooltipContent(h, d, p, m, t.offsetX, t.offsetY, t.position, t.target, f)
                }), n({
                    type: "showTip",
                    dataIndexInside: s,
                    dataIndex: u.getRawIndex(s),
                    seriesIndex: r,
                    from: this.uid
                })
            }
        }, _showComponentItemTooltip: function (t, e, n) {
            var i = e.tooltip;
            if ("string" == typeof i) {
                var r = i;
                i = {content: r, formatter: r}
            }
            var o = new Sr(i, this._tooltipModel, this._ecModel), a = o.get("content"), s = Math.random();
            this._showOrMove(o, function () {
                this._showTooltipContent(o, a, o.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
            }), n({type: "showTip", from: this.uid})
        }, _showTooltipContent: function (t, e, n, i, r, o, a, s, l) {
            if (this._ticket = "", t.get("showContent") && t.get("show")) {
                var u = this._tooltipContent, h = t.get("formatter");
                a = a || t.get("position");
                var c = e;
                if (h && "string" == typeof h) c = Ur(h, n, !0); else if ("function" == typeof h) {
                    var d = _S(function (e, i) {
                        e === this._ticket && (u.setContent(i, l, t), this._updatePosition(t, a, r, o, u, n, s))
                    }, this);
                    this._ticket = i, c = h(n, i, d)
                }
                u.setContent(c, l, t), u.show(t), this._updatePosition(t, a, r, o, u, n, s)
            }
        }, _updatePosition: function (t, e, n, i, r, o, a) {
            var s = this._api.getWidth(), l = this._api.getHeight();
            e = e || t.get("position");
            var u = r.getSize(), h = t.get("align"), c = t.get("verticalAlign"), d = a && a.getBoundingRect().clone();
            if (a && d.applyTransform(a.transform), "function" == typeof e && (e = e([n, i], o, r.el, d, {
                    viewSize: [s, l],
                    contentSize: u.slice()
                })), y(e)) n = bS(e[0], s), i = bS(e[1], l); else if (w(e)) {
                e.width = u[0], e.height = u[1];
                var f = Kr(e, {width: s, height: l});
                n = f.x, i = f.y, h = null, c = null
            } else "string" == typeof e && a ? (n = (p = wc(e, d, u))[0], i = p[1]) : (n = (p = xc(n, i, r, s, l, h ? null : 20, c ? null : 20))[0], i = p[1]);
            if (h && (n -= bc(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= bc(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
                var p = _c(n, i, r, s, l);
                n = p[0], i = p[1]
            }
            r.moveTo(n, i)
        }, _updateContentNotChangedOnAxis: function (t) {
            var e = this._lastDataByCoordSys, n = !!e && e.length === t.length;
            return n && wS(e, function (e, i) {
                var r = e.dataByAxis || {}, o = (t[i] || {}).dataByAxis || [];
                (n &= r.length === o.length) && wS(r, function (t, e) {
                    var i = o[e] || {}, r = t.seriesDataIndices || [], a = i.seriesDataIndices || [];
                    (n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length) && wS(r, function (t, e) {
                        var i = a[e];
                        n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
                    })
                })
            }), this._lastDataByCoordSys = t, !!n
        }, _hide: function (t) {
            this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
        }, dispose: function (t, e) {
            Xp.node || (this._tooltipContent.hide(), qh("itemTooltip", e))
        }
    }), _s({type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip"}, function () {
    }), _s({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
    });
    var MS = Is({
        type: "legend.plain",
        dependencies: ["series"],
        layoutMode: {type: "box", ignoreSize: !0},
        init: function (t, e, n) {
            this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
        },
        mergeOption: function (t) {
            MS.superCall(this, "mergeOption", t)
        },
        optionUpdated: function () {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && "single" === this.get("selectedMode")) {
                for (var e = !1, n = 0; n < t.length; n++) {
                    var i = t[n].get("name");
                    if (this.isSelected(i)) {
                        this.select(i), e = !0;
                        break
                    }
                }
                !e && this.select(t[0].get("name"))
            }
        },
        _updateData: function (t) {
            var e = [], n = [];
            t.eachRawSeries(function (i) {
                var r = i.name;
                n.push(r);
                var o;
                if (i.legendDataProvider) {
                    var a = i.legendDataProvider(), s = a.mapArray(a.getName);
                    t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : o = !0
                } else o = !0;
                o && kn(i) && e.push(i.name)
            }), this._availableNames = n;
            var i = f(this.get("data") || e, function (t) {
                return "string" != typeof t && "number" != typeof t || (t = {name: t}), new Sr(t, this, this.ecModel)
            }, this);
            this._data = i
        },
        getData: function () {
            return this._data
        },
        select: function (t) {
            var e = this.option.selected;
            "single" === this.get("selectedMode") && d(this._data, function (t) {
                e[t.get("name")] = !1
            }), e[t] = !0
        },
        unSelect: function (t) {
            "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
        },
        toggleSelected: function (t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
        },
        isSelected: function (t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && l(this._availableNames, t) >= 0
        },
        defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: "horizontal",
            left: "center",
            top: 0,
            align: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: "#ccc",
            textStyle: {color: "#333"},
            selectedMode: !0,
            tooltip: {show: !1}
        }
    });
    _s("legendToggleSelect", "legendselectchanged", v(Sc, "toggleSelected")), _s("legendSelect", "legendselected", v(Sc, "select")), _s("legendUnSelect", "legendunselected", v(Sc, "unSelect"));
    var IS = v, TS = d, CS = Jg, AS = Ts({
        type: "legend.plain", newlineDisabled: !1, init: function () {
            this.group.add(this._contentGroup = new CS), this._backgroundEl
        }, getContentGroup: function () {
            return this._contentGroup
        }, render: function (t, e, n) {
            if (this.resetInner(), t.get("show", !0)) {
                var i = t.get("align");
                i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(i, t, e, n);
                var r = t.getBoxLayoutParams(), o = {width: n.getWidth(), height: n.getHeight()}, s = t.get("padding"),
                    l = Kr(r, o, s), u = this.layoutInner(t, i, l),
                    h = Kr(a({width: u.width, height: u.height}, r), o, s);
                this.group.attr("position", [h.x - u.x, h.y - u.y]), this.group.add(this._backgroundEl = Ic(u, t))
            }
        }, resetInner: function () {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
        }, renderInner: function (t, e, n, i) {
            var r = this.getContentGroup(), o = N(), a = e.get("selectedMode"), s = [];
            n.eachRawSeries(function (t) {
                !t.get("legendHoverLink") && s.push(t.id)
            }), TS(e.getData(), function (l, u) {
                var h = l.get("name");
                if (this.newlineDisabled || "" !== h && "\n" !== h) {
                    var c = n.getSeriesByName(h)[0];
                    if (!o.get(h)) if (c) {
                        var d = c.getData(), f = d.getVisual("color");
                        "function" == typeof f && (f = f(c.getDataParams(0)));
                        var p = d.getVisual("legendSymbol") || "roundRect", g = d.getVisual("symbol");
                        this._createItem(h, u, l, e, p, g, t, f, a).on("click", IS(Tc, h, i)).on("mouseover", IS(Cc, c.name, null, i, s)).on("mouseout", IS(Ac, c.name, null, i, s)), o.set(h, !0)
                    } else n.eachRawSeries(function (n) {
                        if (!o.get(h) && n.legendDataProvider) {
                            var r = n.legendDataProvider(), c = r.indexOfName(h);
                            if (c < 0) return;
                            var d = r.getItemVisual(c, "color");
                            this._createItem(h, u, l, e, "roundRect", null, t, d, a).on("click", IS(Tc, h, i)).on("mouseover", IS(Cc, null, h, i, s)).on("mouseout", IS(Ac, null, h, i, s)), o.set(h, !0)
                        }
                    }, this)
                } else r.add(new CS({newline: !0}))
            }, this)
        }, _createItem: function (t, e, n, i, r, a, s, l, u) {
            var h = i.get("itemWidth"), c = i.get("itemHeight"), d = i.get("inactiveColor"),
                f = i.get("symbolKeepAspect"), p = i.isSelected(t), g = new CS, m = n.getModel("textStyle"),
                v = n.get("icon"), y = n.getModel("tooltip"), x = y.parentModel;
            if (r = v || r, g.add(Pl(r, 0, 0, h, c, p ? l : d, null == f || f)), !v && a && (a !== r || "none" === a)) {
                var _ = .8 * c;
                "none" === a && (a = "circle"), g.add(Pl(a, (h - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f || f))
            }
            var w = "left" === s ? h + 5 : -5, b = s, S = i.get("formatter"), M = t;
            "string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new ry({
                style: ar({}, m, {
                    text: M,
                    x: w,
                    y: c / 2,
                    textFill: p ? m.getTextColor() : d,
                    textAlign: b,
                    textVerticalAlign: "middle"
                })
            }));
            var I = new py({
                shape: g.getBoundingRect(),
                invisible: !0,
                tooltip: y.get("show") ? o({
                    content: t,
                    formatter: x.get("formatter", !0) || function () {
                        return t
                    },
                    formatterParams: {componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"]}
                }, y.option) : null
            });
            return g.add(I), g.eachChild(function (t) {
                t.silent = !0
            }), I.silent = !u, this.getContentGroup().add(g), ir(g), g.__legendDataIndex = e, g
        }, layoutInner: function (t, e, n) {
            var i = this.getContentGroup();
            Qy(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
            var r = i.getBoundingRect();
            return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
        }
    });
    xs(function (t) {
        var e = t.findComponents({mainType: "legend"});
        e && e.length && t.filterSeries(function (t) {
            for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
            return !0
        })
    }), ex.registerSubTypeDefaulter("legend", function () {
        return "plain"
    });
    var DS = MS.extend({
        type: "legend.scroll",
        setScrollDataIndex: function (t) {
            this.option.scrollDataIndex = t
        },
        defaultOption: {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
                horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
                vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {color: "#333"},
            animationDurationUpdate: 800
        },
        init: function (t, e, n, i) {
            var r = to(t);
            DS.superCall(this, "init", t, e, n, i), Dc(this, t, r)
        },
        mergeOption: function (t, e) {
            DS.superCall(this, "mergeOption", t, e), Dc(this, this.option, t)
        },
        getOrient: function () {
            return "vertical" === this.get("orient") ? {index: 1, name: "vertical"} : {index: 0, name: "horizontal"}
        }
    }), kS = Jg, PS = ["width", "height"], LS = ["x", "y"], OS = AS.extend({
        type: "legend.scroll", newlineDisabled: !0, init: function () {
            OS.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new kS), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new kS), this._showController
        }, resetInner: function () {
            OS.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
        }, renderInner: function (t, e, n, i) {
            function r(t, n) {
                var r = t + "DataIndex",
                    l = br(e.get("pageIcons", !0)[e.getOrient().name][n], {onclick: m(o._pageGo, o, r, e, i)}, {
                        x: -s[0] / 2,
                        y: -s[1] / 2,
                        width: s[0],
                        height: s[1]
                    });
                l.name = t, a.add(l)
            }

            var o = this;
            OS.superCall(this, "renderInner", t, e, n, i);
            var a = this._controllerGroup, s = e.get("pageIconSize", !0);
            y(s) || (s = [s, s]), r("pagePrev", 0);
            var l = e.getModel("pageTextStyle");
            a.add(new ry({
                name: "pageText",
                style: {
                    textFill: l.getTextColor(),
                    font: l.getFont(),
                    textVerticalAlign: "middle",
                    textAlign: "center"
                },
                silent: !0
            })), r("pageNext", 1)
        }, layoutInner: function (t, e, n) {
            var i = this.getContentGroup(), r = this._containerGroup, o = this._controllerGroup,
                a = t.getOrient().index, s = PS[a], l = PS[1 - a], u = LS[1 - a];
            Qy(t.get("orient"), i, t.get("itemGap"), a ? n.width : null, a ? null : n.height), Qy("horizontal", o, t.get("pageButtonItemGap", !0));
            var h = i.getBoundingRect(), c = o.getBoundingRect(), d = this._showController = h[s] > n[s],
                f = [-h.x, -h.y];
            f[a] = i.position[a];
            var p = [0, 0], g = [-c.x, -c.y], m = C(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            d && ("end" === t.get("pageButtonPosition", !0) ? g[a] += n[s] - c[s] : p[a] += c[s] + m), g[1 - a] += h[l] / 2 - c[l] / 2, i.attr("position", f), r.attr("position", p), o.attr("position", g);
            var v = this.group.getBoundingRect();
            if ((v = {
                    x: 0,
                    y: 0
                })[s] = d ? n[s] : h[s], v[l] = Math.max(h[l], c[l]), v[u] = Math.min(0, c[u] + g[1 - a]), r.__rectSize = n[s], d) {
                var y = {x: 0, y: 0};
                y[s] = Math.max(n[s] - c[s] - m, 0), y[l] = v[l], r.setClipPath(new py({shape: y})), r.__rectSize = y[s]
            } else o.eachChild(function (t) {
                t.attr({invisible: !0, silent: !0})
            });
            var x = this._getPageInfo(t);
            return null != x.pageIndex && gr(i, {position: x.contentPosition}, !!d && t), this._updatePageInfoView(t, x), v
        }, _pageGo: function (t, e, n) {
            var i = this._getPageInfo(e)[t];
            null != i && n.dispatchAction({type: "legendScroll", scrollDataIndex: i, legendId: e.id})
        }, _updatePageInfoView: function (t, e) {
            var n = this._controllerGroup;
            d(["pagePrev", "pageNext"], function (i) {
                var r = null != e[i + "DataIndex"], o = n.childOfName(i);
                o && (o.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), o.cursor = r ? "pointer" : "default")
            });
            var i = n.childOfName("pageText"), r = t.get("pageFormatter"), o = e.pageIndex, a = null != o ? o + 1 : 0,
                s = e.pageCount;
            i && r && i.setStyle("text", _(r) ? r.replace("{current}", a).replace("{total}", s) : r({
                current: a,
                total: s
            }))
        }, _getPageInfo: function (t) {
            function e(t) {
                var e = t.getBoundingRect().clone();
                return e[f] += t.position[h], e
            }

            var n, i, r, o, a = t.get("scrollDataIndex", !0), s = this.getContentGroup(), l = s.getBoundingRect(),
                u = this._containerGroup.__rectSize, h = t.getOrient().index, c = PS[h], d = PS[1 - h], f = LS[h],
                p = s.position.slice();
            this._showController ? s.eachChild(function (t) {
                t.__legendDataIndex === a && (o = t)
            }) : o = s.childAt(0);
            var g = u ? Math.ceil(l[c] / u) : 0;
            if (o) {
                var m = o.getBoundingRect(), v = o.position[h] + m[f];
                p[h] = -v - l[f], n = Math.floor(g * (v + m[f] + u / 2) / l[c]), n = l[c] && g ? Math.max(0, Math.min(g - 1, n)) : -1;
                var y = {x: 0, y: 0};
                y[c] = u, y[d] = l[d], y[f] = -p[h] - l[f];
                var x, _ = s.children();
                if (s.eachChild(function (t, n) {
                        var i = e(t);
                        i.intersect(y) && (null == x && (x = n), r = t.__legendDataIndex), n === _.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null)
                    }), null != x) {
                    var w = e(_[x]);
                    if (y[f] = w[f] + w[c] - y[c], x <= 0 && w[f] >= y[f]) i = null; else {
                        for (; x > 0 && e(_[x - 1]).intersect(y);) x--;
                        i = _[x].__legendDataIndex
                    }
                }
            }
            return {contentPosition: p, pageIndex: n, pageCount: g, pagePrevDataIndex: i, pageNextDataIndex: r}
        }
    });
    _s("legendScroll", "legendscroll", function (t, e) {
        var n = t.scrollDataIndex;
        null != n && e.eachComponent({mainType: "legend", subType: "scroll", query: t}, function (t) {
            t.setScrollDataIndex(n)
        })
    }), Is({
        type: "title",
        layoutMode: {type: "box", ignoreSize: !0},
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
            subtextStyle: {color: "#aaa"}
        }
    }), Ts({
        type: "title", render: function (t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group, r = t.getModel("textStyle"), o = t.getModel("subtextStyle"), a = t.get("textAlign"),
                    s = t.get("textBaseline"), l = new ry({
                        style: ar({}, r, {text: t.get("text"), textFill: r.getTextColor()}, {disableBox: !0}),
                        z2: 10
                    }), u = l.getBoundingRect(), h = t.get("subtext"), c = new ry({
                        style: ar({}, o, {
                            text: h,
                            textFill: o.getTextColor(),
                            y: u.height + t.get("itemGap"),
                            textVerticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), d = t.get("link"), f = t.get("sublink"), p = t.get("triggerEvent", !0);
                l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function () {
                    window.open(d, "_" + t.get("target"))
                }), f && c.on("click", function () {
                    window.open(f, "_" + t.get("subtarget"))
                }), l.eventData = c.eventData = p ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, i.add(l), h && i.add(c);
                var g = i.getBoundingRect(), m = t.getBoxLayoutParams();
                m.width = g.width, m.height = g.height;
                var v = Kr(m, {width: n.getWidth(), height: n.getHeight()}, t.get("padding"));
                a || ("middle" === (a = t.get("left") || t.get("right")) && (a = "center"), "right" === a ? v.x += v.width : "center" === a && (v.x += v.width / 2)), s || ("center" === (s = t.get("top") || t.get("bottom")) && (s = "middle"), "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2), s = s || "top"), i.attr("position", [v.x, v.y]);
                var y = {textAlign: a, textVerticalAlign: s};
                l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();
                var x = v.margin, _ = t.getItemStyle(["color", "opacity"]);
                _.fill = t.get("backgroundColor");
                var w = new py({
                    shape: {
                        x: g.x - x[3],
                        y: g.y - x[0],
                        width: g.width + x[1] + x[3],
                        height: g.height + x[0] + x[2],
                        r: t.get("borderRadius")
                    }, style: _, silent: !0
                });
                Wi(w), i.add(w)
            }
        }
    });
    var zS = Hr, ES = Zr, NS = Is({
        type: "marker", dependencies: ["series", "grid", "polar", "geo"], init: function (t, e, n, i) {
            this.mergeDefaultAndTheme(t, n), this.mergeOption(t, n, i.createdBySelf, !0)
        }, isAnimationEnabled: function () {
            if (Xp.node) return !1;
            var t = this.__hostSeries;
            return this.getShallow("animation") && t && t.isAnimationEnabled()
        }, mergeOption: function (t, e, n, i) {
            var r = this.constructor, a = this.mainType + "Model";
            n || e.eachSeries(function (t) {
                var n = t.get(this.mainType, !0), s = t[a];
                n && n.data ? (s ? s.mergeOption(n, e, !0) : (i && kc(n), d(n.data, function (t) {
                    t instanceof Array ? (kc(t[0]), kc(t[1])) : kc(t)
                }), o(s = new r(n, this, e), {
                    mainType: this.mainType,
                    seriesIndex: t.seriesIndex,
                    name: t.name,
                    createdBySelf: !0
                }), s.__hostSeries = t), t[a] = s) : t[a] = null
            }, this)
        }, formatTooltip: function (t) {
            var e = this.getData(), n = this.getRawValue(t), i = y(n) ? f(n, zS).join(", ") : zS(n), r = e.getName(t),
                o = ES(this.name);
            return (null != n || r) && (o += "<br />"), r && (o += ES(r), null != n && (o += " : ")), null != n && (o += ES(i)), o
        }, getData: function () {
            return this._data
        }, setData: function (t) {
            this._data = t
        }
    });
    h(NS, Bx), NS.extend({
        type: "markPoint",
        defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: "pin",
            symbolSize: 50,
            tooltip: {trigger: "item"},
            label: {show: !0, position: "inside"},
            itemStyle: {borderWidth: 2},
            emphasis: {label: {show: !0}}
        }
    });
    var RS = l, BS = v, FS = {min: BS(Oc, "min"), max: BS(Oc, "max"), average: BS(Oc, "average")}, VS = Ts({
        type: "marker", init: function () {
            this.markerGroupMap = N()
        }, render: function (t, e, n) {
            var i = this.markerGroupMap;
            i.each(function (t) {
                t.__keep = !1
            });
            var r = this.type + "Model";
            e.eachSeries(function (t) {
                var i = t[r];
                i && this.renderSeries(t, i, e, n)
            }, this), i.each(function (t) {
                !t.__keep && this.group.remove(t.group)
            }, this)
        }, renderSeries: function () {
        }
    });
    VS.extend({
        type: "markPoint", updateTransform: function (t, e, n) {
            e.eachSeries(function (t) {
                var e = t.markPointModel;
                e && (Vc(e.getData(), t, n), this.markerGroupMap.get(t.id).updateLayout(e))
            }, this)
        }, renderSeries: function (t, e, n, i) {
            var r = t.coordinateSystem, o = t.id, a = t.getData(), s = this.markerGroupMap,
                l = s.get(o) || s.set(o, new lu), u = Wc(r, t, e);
            e.setData(u), Vc(e.getData(), t, i), u.each(function (t) {
                var n = u.getItemModel(t), i = n.getShallow("symbolSize");
                "function" == typeof i && (i = i(e.getRawValue(t), e.getDataParams(t))), u.setItemVisual(t, {
                    symbolSize: i,
                    color: n.get("itemStyle.color") || a.getVisual("color"),
                    symbol: n.getShallow("symbol")
                })
            }), l.updateData(u), this.group.add(l.group), u.eachItemGraphicEl(function (t) {
                t.traverse(function (t) {
                    t.dataModel = e
                })
            }), l.__keep = !0, l.group.silent = e.get("silent") || t.get("silent")
        }
    }), ys(function (t) {
        t.markPoint = t.markPoint || {}
    }), NS.extend({
        type: "markLine",
        defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: ["circle", "arrow"],
            symbolSize: [8, 16],
            precision: 2,
            tooltip: {trigger: "item"},
            label: {show: !0, position: "end"},
            lineStyle: {type: "dashed"},
            emphasis: {label: {show: !0}, lineStyle: {width: 3}},
            animationEasing: "linear"
        }
    });
    var WS = gy.prototype, HS = vy.prototype, GS = Ei({
        type: "ec-line",
        style: {stroke: "#000", fill: null},
        shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
        buildPath: function (t, e) {
            (Hc(e) ? WS : HS).buildPath(t, e)
        },
        pointAt: function (t) {
            return Hc(this.shape) ? WS.pointAt.call(this, t) : HS.pointAt.call(this, t)
        },
        tangentAt: function (t) {
            var e = this.shape, n = Hc(e) ? [e.x2 - e.x1, e.y2 - e.y1] : HS.tangentAt.call(this, t);
            return Y(n, n)
        }
    }), ZS = ["fromSymbol", "toSymbol"], US = Yc.prototype;
    US.beforeUpdate = function () {
        var t = this, e = t.childOfName("fromSymbol"), n = t.childOfName("toSymbol"), i = t.childOfName("label");
        if (e || n || !i.ignore) {
            for (var r = 1, o = this.parent; o;) o.scale && (r /= o.scale[0]), o = o.parent;
            var a = t.childOfName("line");
            if (this.__dirty || a.__dirty) {
                var s = a.shape.percent, l = a.pointAt(0), u = a.pointAt(s), h = G([], u, l);
                if (Y(h, h), e && (e.attr("position", l), c = a.tangentAt(0), e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])), e.attr("scale", [r * s, r * s])), n) {
                    n.attr("position", u);
                    var c = a.tangentAt(1);
                    n.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])), n.attr("scale", [r * s, r * s])
                }
                if (!i.ignore) {
                    i.attr("position", u);
                    var d, f, p, g = 5 * r;
                    if ("end" === i.__position) d = [h[0] * g + u[0], h[1] * g + u[1]], f = h[0] > .8 ? "left" : h[0] < -.8 ? "right" : "center", p = h[1] > .8 ? "top" : h[1] < -.8 ? "bottom" : "middle"; else if ("middle" === i.__position) {
                        var m = s / 2, v = [(c = a.tangentAt(m))[1], -c[0]], y = a.pointAt(m);
                        v[1] > 0 && (v[0] = -v[0], v[1] = -v[1]), d = [y[0] + v[0] * g, y[1] + v[1] * g], f = "center", p = "bottom";
                        var x = -Math.atan2(c[1], c[0]);
                        u[0] < l[0] && (x = Math.PI + x), i.attr("rotation", x)
                    } else d = [-h[0] * g + l[0], -h[1] * g + l[1]], f = h[0] > .8 ? "right" : h[0] < -.8 ? "left" : "center", p = h[1] > .8 ? "bottom" : h[1] < -.8 ? "top" : "middle";
                    i.attr({
                        style: {textVerticalAlign: i.__verticalAlign || p, textAlign: i.__textAlign || f},
                        position: d,
                        scale: [r, r]
                    })
                }
            }
        }
    }, US._createLine = function (t, e, n) {
        var i = t.hostModel, r = Uc(t.getItemLayout(e));
        r.shape.percent = 0, mr(r, {shape: {percent: 1}}, i, e), this.add(r);
        var o = new ry({name: "label"});
        this.add(o), d(ZS, function (n) {
            var i = Zc(n, t, e);
            this.add(i), this[Gc(n)] = t.getItemVisual(e, n)
        }, this), this._updateCommonStl(t, e, n)
    }, US.updateData = function (t, e, n) {
        var i = t.hostModel, r = this.childOfName("line"), o = t.getItemLayout(e), a = {shape: {}};
        Xc(a.shape, o), gr(r, a, i, e), d(ZS, function (n) {
            var i = t.getItemVisual(e, n), r = Gc(n);
            if (this[r] !== i) {
                this.remove(this.childOfName(n));
                var o = Zc(n, t, e);
                this.add(o)
            }
            this[r] = i
        }, this), this._updateCommonStl(t, e, n)
    }, US._updateCommonStl = function (t, e, n) {
        var i = t.hostModel, r = this.childOfName("line"), o = n && n.lineStyle, s = n && n.hoverLineStyle,
            l = n && n.labelModel, u = n && n.hoverLabelModel;
        if (!n || t.hasItemOption) {
            var h = t.getItemModel(e);
            o = h.getModel("lineStyle").getLineStyle(), s = h.getModel("emphasis.lineStyle").getLineStyle(), l = h.getModel("label"), u = h.getModel("emphasis.label")
        }
        var c = t.getItemVisual(e, "color"), f = A(t.getItemVisual(e, "opacity"), o.opacity, 1);
        r.useStyle(a({
            strokeNoScale: !0,
            fill: "none",
            stroke: c,
            opacity: f
        }, o)), r.hoverStyle = s, d(ZS, function (t) {
            var e = this.childOfName(t);
            e && (e.setColor(c), e.setStyle({opacity: f}))
        }, this);
        var p, g, m = l.getShallow("show"), v = u.getShallow("show"), y = this.childOfName("label");
        if ((m || v) && (p = c || "#000", null == (g = i.getFormattedLabel(e, "normal", t.dataType)))) {
            var x = i.getRawValue(e);
            g = null == x ? t.getName(e) : isFinite(x) ? kr(x) : x
        }
        var _ = m ? g : null, w = v ? C(i.getFormattedLabel(e, "emphasis", t.dataType), g) : null, b = y.style;
        null == _ && null == w || (ar(y.style, l, {text: _}, {autoColor: p}), y.__textAlign = b.textAlign, y.__verticalAlign = b.textVerticalAlign, y.__position = l.get("position") || "middle"), y.hoverStyle = null != w ? {
            text: w,
            textFill: u.getTextColor(!0),
            fontStyle: u.getShallow("fontStyle"),
            fontWeight: u.getShallow("fontWeight"),
            fontSize: u.getShallow("fontSize"),
            fontFamily: u.getShallow("fontFamily")
        } : {text: null}, y.ignore = !m && !v, ir(this)
    }, US.highlight = function () {
        this.trigger("emphasis")
    }, US.downplay = function () {
        this.trigger("normal")
    }, US.updateLayout = function (t, e) {
        this.setLinePoints(t.getItemLayout(e))
    }, US.setLinePoints = function (t) {
        var e = this.childOfName("line");
        Xc(e.shape, t), e.dirty()
    }, u(Yc, Jg);
    var XS = jc.prototype;
    XS.isPersistent = function () {
        return !0
    }, XS.updateData = function (t) {
        var e = this, n = e.group, i = e._lineData;
        e._lineData = t, i || n.removeAll();
        var r = Kc(t);
        t.diff(i).add(function (n) {
            qc(e, t, n, r)
        }).update(function (n, o) {
            $c(e, i, t, o, n, r)
        }).remove(function (t) {
            n.remove(i.getItemGraphicEl(t))
        }).execute()
    }, XS.updateLayout = function () {
        var t = this._lineData;
        t && t.eachItemGraphicEl(function (e, n) {
            e.updateLayout(t, n)
        }, this)
    }, XS.incrementalPrepareUpdate = function (t) {
        this._seriesScope = Kc(t), this._lineData = null, this.group.removeAll()
    }, XS.incrementalUpdate = function (t, e) {
        for (var n = t.start; n < t.end; n++) if (Jc(e.getItemLayout(n))) {
            var i = new this._ctor(e, n, this._seriesScope);
            i.traverse(function (t) {
                t.isGroup || (t.incremental = t.useHoverLayer = !0)
            }), this.group.add(i), e.setItemGraphicEl(n, i)
        }
    }, XS.remove = function () {
        this._clearIncremental(), this._incremental = null, this.group.removeAll()
    }, XS._clearIncremental = function () {
        var t = this._incremental;
        t && t.clearDisplaybles()
    };
    var YS = function (t, e, r, a) {
        var s = t.getData(), l = a.type;
        if (!y(a) && ("min" === l || "max" === l || "average" === l || "median" === l || null != a.xAxis || null != a.yAxis)) {
            var u, h;
            if (null != a.yAxis || null != a.xAxis) u = null != a.yAxis ? "y" : "x", e.getAxis(u), h = T(a.yAxis, a.xAxis); else {
                var c = Ec(a, s, e, t);
                u = c.valueDataDim, c.valueAxis, h = Fc(s, u, l)
            }
            var d = "x" === u ? 0 : 1, f = 1 - d, p = n(a), g = {};
            p.type = null, p.coord = [], g.coord = [], p.coord[f] = -1 / 0, g.coord[f] = 1 / 0;
            var m = r.get("precision");
            m >= 0 && "number" == typeof h && (h = +h.toFixed(Math.min(m, 20))), p.coord[d] = g.coord[d] = h, a = [p, g, {
                type: l,
                valueIndex: a.valueIndex,
                value: h
            }]
        }
        return a = [zc(t, a[0]), zc(t, a[1]), o({}, a[2])], a[2].type = a[2].type || "", i(a[2], a[0]), i(a[2], a[1]), a
    };
    VS.extend({
        type: "markLine", updateTransform: function (t, e, n) {
            e.eachSeries(function (t) {
                var e = t.markLineModel;
                if (e) {
                    var i = e.getData(), r = e.__from, o = e.__to;
                    r.each(function (e) {
                        id(r, e, !0, t, n), id(o, e, !1, t, n)
                    }), i.each(function (t) {
                        i.setItemLayout(t, [r.getItemLayout(t), o.getItemLayout(t)])
                    }), this.markerGroupMap.get(t.id).updateLayout()
                }
            }, this)
        }, renderSeries: function (t, e, n, i) {
            function r(e, n, r) {
                var o = e.getItemModel(n);
                id(e, n, r, t, i), e.setItemVisual(n, {
                    symbolSize: o.get("symbolSize") || g[r ? 0 : 1],
                    symbol: o.get("symbol", !0) || p[r ? 0 : 1],
                    color: o.get("itemStyle.color") || s.getVisual("color")
                })
            }

            var o = t.coordinateSystem, a = t.id, s = t.getData(), l = this.markerGroupMap,
                u = l.get(a) || l.set(a, new jc);
            this.group.add(u.group);
            var h = rd(o, t, e), c = h.from, d = h.to, f = h.line;
            e.__from = c, e.__to = d, e.setData(f);
            var p = e.get("symbol"), g = e.get("symbolSize");
            y(p) || (p = [p, p]), "number" == typeof g && (g = [g, g]), h.from.each(function (t) {
                r(c, t, !0), r(d, t, !1)
            }), f.each(function (t) {
                var e = f.getItemModel(t).get("lineStyle.color");
                f.setItemVisual(t, {color: e || c.getItemVisual(t, "color")}), f.setItemLayout(t, [c.getItemLayout(t), d.getItemLayout(t)]), f.setItemVisual(t, {
                    fromSymbolSize: c.getItemVisual(t, "symbolSize"),
                    fromSymbol: c.getItemVisual(t, "symbol"),
                    toSymbolSize: d.getItemVisual(t, "symbolSize"),
                    toSymbol: d.getItemVisual(t, "symbol")
                })
            }), u.updateData(f), h.line.eachItemGraphicEl(function (t, n) {
                t.traverse(function (t) {
                    t.dataModel = e
                })
            }), u.__keep = !0, u.group.silent = e.get("silent") || t.get("silent")
        }
    }), ys(function (t) {
        t.markLine = t.markLine || {}
    }), NS.extend({
        type: "markArea",
        defaultOption: {
            zlevel: 0,
            z: 1,
            tooltip: {trigger: "item"},
            animation: !1,
            label: {show: !0, position: "top"},
            itemStyle: {borderWidth: 0},
            emphasis: {label: {show: !0, position: "top"}}
        }
    });
    var jS = function (t, e, n, i) {
        var o = zc(t, i[0]), a = zc(t, i[1]), s = T, l = o.coord, u = a.coord;
        l[0] = s(l[0], -1 / 0), l[1] = s(l[1], -1 / 0), u[0] = s(u[0], 1 / 0), u[1] = s(u[1], 1 / 0);
        var h = r([{}, o, a]);
        return h.coord = [o.coord, a.coord], h.x0 = o.x, h.y0 = o.y, h.x1 = a.x, h.y1 = a.y, h
    }, qS = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
    VS.extend({
        type: "markArea", updateTransform: function (t, e, n) {
            e.eachSeries(function (t) {
                var e = t.markAreaModel;
                if (e) {
                    var i = e.getData();
                    i.each(function (e) {
                        var r = f(qS, function (r) {
                            return ld(i, e, r, t, n)
                        });
                        i.setItemLayout(e, r), i.getItemGraphicEl(e).setShape("points", r)
                    })
                }
            }, this)
        }, renderSeries: function (t, e, n, i) {
            var r = t.coordinateSystem, o = t.id, s = t.getData(), l = this.markerGroupMap,
                u = l.get(o) || l.set(o, {group: new Jg});
            this.group.add(u.group), u.__keep = !0;
            var h = ud(r, t, e);
            e.setData(h), h.each(function (e) {
                h.setItemLayout(e, f(qS, function (n) {
                    return ld(h, e, n, t, i)
                })), h.setItemVisual(e, {color: s.getVisual("color")})
            }), h.diff(u.__data).add(function (t) {
                var e = new dy({shape: {points: h.getItemLayout(t)}});
                h.setItemGraphicEl(t, e), u.group.add(e)
            }).update(function (t, n) {
                var i = u.__data.getItemGraphicEl(n);
                gr(i, {shape: {points: h.getItemLayout(t)}}, e, t), u.group.add(i), h.setItemGraphicEl(t, i)
            }).remove(function (t) {
                var e = u.__data.getItemGraphicEl(t);
                u.group.remove(e)
            }).execute(), h.eachItemGraphicEl(function (t, n) {
                var i = h.getItemModel(n), r = i.getModel("label"), o = i.getModel("emphasis.label"),
                    s = h.getItemVisual(n, "color");
                t.useStyle(a(i.getModel("itemStyle").getItemStyle(), {
                    fill: Vt(s, .4),
                    stroke: s
                })), t.hoverStyle = i.getModel("emphasis.itemStyle").getItemStyle(), or(t.style, t.hoverStyle, r, o, {
                    labelFetcher: e,
                    labelDataIndex: n,
                    defaultText: h.getName(n) || "",
                    isRectText: !0,
                    autoColor: s
                }), ir(t, {}), t.dataModel = e
            }), u.__data = h, u.group.silent = e.get("silent") || t.get("silent")
        }
    }), ys(function (t) {
        t.markArea = t.markArea || {}
    }), ex.registerSubTypeDefaulter("dataZoom", function () {
        return "slider"
    });
    var $S = ["cartesian2d", "polar", "singleAxis"], KS = function (t, e) {
            var n = f(t = t.slice(), qr), i = f(e = (e || []).slice(), qr);
            return function (r, o) {
                d(t, function (t, a) {
                    for (var s = {name: t, capital: n[a]}, l = 0; l < e.length; l++) s[e[l]] = t + i[l];
                    r.call(o, s)
                })
            }
        }(["x", "y", "z", "radius", "angle", "single"], ["axisIndex", "axis", "index", "id"]), QS = d, JS = Pr,
        tM = function (t, e, n, i) {
            this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this._minMaxSpan, this.ecModel = i, this._dataZoomModel = n
        };
    tM.prototype = {
        constructor: tM, hostedBy: function (t) {
            return this._dataZoomModel === t
        }, getDataValueWindow: function () {
            return this._valueWindow.slice()
        }, getDataPercentWindow: function () {
            return this._percentWindow.slice()
        }, getTargetSeriesModels: function () {
            var t = [], e = this.ecModel;
            return e.eachSeries(function (n) {
                if (hd(n.get("coordinateSystem"))) {
                    var i = this._dimName, r = e.queryComponents({
                        mainType: i + "Axis",
                        index: n.get(i + "AxisIndex"),
                        id: n.get(i + "AxisId")
                    })[0];
                    this._axisIndex === (r && r.componentIndex) && t.push(n)
                }
            }, this), t
        }, getAxisModel: function () {
            return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
        }, getOtherAxisModel: function () {
            var t, e, n = this._dimName, i = this.ecModel, r = this.getAxisModel();
            "x" === n || "y" === n ? (e = "gridIndex", t = "x" === n ? "y" : "x") : (e = "polarIndex", t = "angle" === n ? "radius" : "angle");
            var o;
            return i.eachComponent(t + "Axis", function (t) {
                (t.get(e) || 0) === (r.get(e) || 0) && (o = t)
            }), o
        }, getMinMaxSpan: function () {
            return n(this._minMaxSpan)
        }, calculateDataWindow: function (t) {
            var e = this._dataExtent, n = this.getAxisModel().axis.scale, i = this._dataZoomModel.getRangePropMode(),
                r = [0, 100], o = [t.start, t.end], a = [];
            return QS(["startValue", "endValue"], function (e) {
                a.push(null != t[e] ? n.parse(t[e]) : null)
            }), QS([0, 1], function (t) {
                var s = a[t], l = o[t];
                "percent" === i[t] ? (null == l && (l = r[t]), s = n.parse(Ar(l, r, e, !0))) : l = Ar(s, e, r, !0), a[t] = s, o[t] = l
            }), {valueWindow: JS(a), percentWindow: JS(o)}
        }, reset: function (t) {
            if (t === this._dataZoomModel) {
                var e = this.getTargetSeriesModels();
                this._dataExtent = dd(this, this._dimName, e);
                var n = this.calculateDataWindow(t.option);
                this._valueWindow = n.valueWindow, this._percentWindow = n.percentWindow, gd(this), pd(this)
            }
        }, restore: function (t) {
            t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, pd(this, !0))
        }, filterData: function (t, e) {
            function n(t) {
                return t >= a[0] && t <= a[1]
            }

            if (t === this._dataZoomModel) {
                var i = this._dimName, r = this.getTargetSeriesModels(), o = t.get("filterMode"), a = this._valueWindow;
                "none" !== o && QS(r, function (t) {
                    var e = t.getData(), r = e.mapDimension(i, !0);
                    r.length && ("weakFilter" === o ? e.filterSelf(function (t) {
                        for (var n, i, o, s = 0; s < r.length; s++) {
                            var l = e.get(r[s], t), u = !isNaN(l), h = l < a[0], c = l > a[1];
                            if (u && !h && !c) return !0;
                            u && (o = !0), h && (n = !0), c && (i = !0)
                        }
                        return o && n && i
                    }) : QS(r, function (i) {
                        if ("empty" === o) t.setData(e.map(i, function (t) {
                            return n(t) ? t : NaN
                        })); else {
                            var r = {};
                            r[i] = a, e.selectRange(r)
                        }
                    }), QS(r, function (t) {
                        e.setApproximateExtent(a, t)
                    }))
                })
            }
        }
    };
    var eM = d, nM = KS, iM = Is({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                filterMode: "filter",
                throttle: null,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null,
                minSpan: null,
                maxSpan: null,
                minValueSpan: null,
                maxValueSpan: null,
                rangeMode: null
            },
            init: function (t, e, n) {
                this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0, this._rangePropMode = ["percent", "percent"];
                var i = md(t);
                this.mergeDefaultAndTheme(t, n), this.doInit(i)
            },
            mergeOption: function (t) {
                var e = md(t);
                i(this.option, t, !0), this.doInit(e)
            },
            doInit: function (t) {
                var e = this.option;
                Xp.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), vd(this, t), eM([["start", "startValue"], ["end", "endValue"]], function (t, n) {
                    "value" === this._rangePropMode[n] && (e[t[0]] = null)
                }, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
            },
            _giveAxisProxies: function () {
                var t = this._axisProxies;
                this.eachTargetAxis(function (e, n, i, r) {
                    var o = this.dependentModels[e.axis][n],
                        a = o.__dzAxisProxy || (o.__dzAxisProxy = new tM(e.name, n, this, r));
                    t[e.name + "_" + n] = a
                }, this)
            },
            _resetTarget: function () {
                var t = this.option, e = this._judgeAutoMode();
                nM(function (e) {
                    var n = e.axisIndex;
                    t[n] = Mn(t[n])
                }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
            },
            _judgeAutoMode: function () {
                var t = this.option, e = !1;
                nM(function (n) {
                    null != t[n.axisIndex] && (e = !0)
                }, this);
                var n = t.orient;
                return null == n && e ? "orient" : e ? void 0 : (null == n && (t.orient = "horizontal"), "axisIndex")
            },
            _autoSetAxisIndex: function () {
                var t = !0, e = this.get("orient", !0), n = this.option, i = this.dependentModels;
                if (t) {
                    var r = "vertical" === e ? "y" : "x";
                    i[r + "Axis"].length ? (n[r + "AxisIndex"] = [0], t = !1) : eM(i.singleAxis, function (i) {
                        t && i.get("orient", !0) === e && (n.singleAxisIndex = [i.componentIndex], t = !1)
                    })
                }
                t && nM(function (e) {
                    if (t) {
                        var i = [], r = this.dependentModels[e.axis];
                        if (r.length && !i.length) for (var o = 0, a = r.length; o < a; o++) "category" === r[o].get("type") && i.push(o);
                        n[e.axisIndex] = i, i.length && (t = !1)
                    }
                }, this), t && this.ecModel.eachSeries(function (t) {
                    this._isSeriesHasAllAxesTypeOf(t, "value") && nM(function (e) {
                        var i = n[e.axisIndex], r = t.get(e.axisIndex), o = t.get(e.axisId);
                        l(i, r = t.ecModel.queryComponents({
                            mainType: e.axis,
                            index: r,
                            id: o
                        })[0].componentIndex) < 0 && i.push(r)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var t;
                this.eachTargetAxis(function (e) {
                    !t && (t = e.name)
                }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (t, e) {
                var n = !0;
                return nM(function (i) {
                    var r = t.get(i.axisIndex), o = this.dependentModels[i.axis][r];
                    o && o.get("type") === e || (n = !1)
                }, this), n
            },
            _setDefaultThrottle: function (t) {
                if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                    var e = this.ecModel.option;
                    this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
                }
            },
            getFirstTargetAxisModel: function () {
                var t;
                return nM(function (e) {
                    if (null == t) {
                        var n = this.get(e.axisIndex);
                        n.length && (t = this.dependentModels[e.axis][n[0]])
                    }
                }, this), t
            },
            eachTargetAxis: function (t, e) {
                var n = this.ecModel;
                nM(function (i) {
                    eM(this.get(i.axisIndex), function (r) {
                        t.call(e, i, r, this, n)
                    }, this)
                }, this)
            },
            getAxisProxy: function (t, e) {
                return this._axisProxies[t + "_" + e]
            },
            getAxisModel: function (t, e) {
                var n = this.getAxisProxy(t, e);
                return n && n.getAxisModel()
            },
            setRawRange: function (t, e) {
                var n = this.option;
                eM([["start", "startValue"], ["end", "endValue"]], function (e) {
                    null == t[e[0]] && null == t[e[1]] || (n[e[0]] = t[e[0]], n[e[1]] = t[e[1]])
                }, this), !e && vd(this, t)
            },
            getPercentRange: function () {
                var t = this.findRepresentativeAxisProxy();
                if (t) return t.getDataPercentWindow()
            },
            getValueRange: function (t, e) {
                if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
                var n = this.findRepresentativeAxisProxy();
                return n ? n.getDataValueWindow() : void 0
            },
            findRepresentativeAxisProxy: function (t) {
                if (t) return t.__dzAxisProxy;
                var e = this._axisProxies;
                for (var n in e) if (e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];
                for (var n in e) if (e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n]
            },
            getRangePropMode: function () {
                return this._rangePropMode.slice()
            }
        }), rM = Gx.extend({
            type: "dataZoom", render: function (t, e, n, i) {
                this.dataZoomModel = t, this.ecModel = e, this.api = n
            }, getTargetCoordInfo: function () {
                function t(t, e, n, i) {
                    for (var r, o = 0; o < n.length; o++) if (n[o].model === t) {
                        r = n[o];
                        break
                    }
                    r || n.push(r = {model: t, axisModels: [], coordIndex: i}), r.axisModels.push(e)
                }

                var e = this.dataZoomModel, n = this.ecModel, i = {};
                return e.eachTargetAxis(function (e, r) {
                    var o = n.getComponent(e.axis, r);
                    if (o) {
                        var a = o.getCoordSysModel();
                        a && t(a, o, i[a.mainType] || (i[a.mainType] = []), a.componentIndex)
                    }
                }, this), i
            }
        }), oM = (iM.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
                show: !0,
                right: "ph",
                top: "ph",
                width: "ph",
                height: "ph",
                left: null,
                bottom: null,
                backgroundColor: "rgba(47,69,84,0)",
                dataBackground: {
                    lineStyle: {color: "#2f4554", width: .5, opacity: .3},
                    areaStyle: {color: "rgba(47,69,84,0.3)", opacity: .3}
                },
                borderColor: "#ddd",
                fillerColor: "rgba(167,183,204,0.4)",
                handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
                handleSize: "100%",
                handleStyle: {color: "#a7b7cc"},
                labelPrecision: null,
                labelFormatter: null,
                showDetail: !0,
                showDataShadow: "auto",
                realtime: !0,
                zoomLock: !1,
                textStyle: {color: "#333"}
            }
        }), function (t, e, n, i, r, o) {
            e[0] = xd(e[0], n), e[1] = xd(e[1], n), t = t || 0;
            var a = n[1] - n[0];
            null != r && (r = xd(r, [0, a])), null != o && (o = Math.max(o, null != r ? r : 0)), "all" === i && (r = o = Math.abs(e[1] - e[0]), i = 0);
            var s = yd(e, i);
            e[i] += t;
            var l = r || 0, u = n.slice();
            s.sign < 0 ? u[0] += l : u[1] -= l, e[i] = xd(e[i], u);
            h = yd(e, i);
            null != r && (h.sign !== s.sign || h.span < r) && (e[1 - i] = e[i] + s.sign * r);
            var h = yd(e, i);
            return null != o && h.span > o && (e[1 - i] = e[i] + h.sign * o), e
        }), aM = py, sM = Ar, lM = Pr, uM = m, hM = d, cM = "horizontal", dM = 5,
        fM = ["line", "bar", "candlestick", "scatter"], pM = rM.extend({
            type: "dataZoom.slider", init: function (t, e) {
                this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e
            }, render: function (t, e, n, i) {
                pM.superApply(this, "render", arguments), xa(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), !1 !== this.dataZoomModel.get("show") ? (i && "dataZoom" === i.type && i.from === this.uid || this._buildView(), this._updateView()) : this.group.removeAll()
            }, remove: function () {
                pM.superApply(this, "remove", arguments), _a(this, "_dispatchZoomAction")
            }, dispose: function () {
                pM.superApply(this, "dispose", arguments), _a(this, "_dispatchZoomAction")
            }, _buildView: function () {
                var t = this.group;
                t.removeAll(), this._resetLocation(), this._resetInterval();
                var e = this._displayables.barGroup = new Jg;
                this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup()
            }, _resetLocation: function () {
                var t = this.dataZoomModel, e = this.api, n = this._findCoordRect(),
                    i = {width: e.getWidth(), height: e.getHeight()}, r = this._orient === cM ? {
                        right: i.width - n.x - n.width,
                        top: i.height - 30 - 7,
                        width: n.width,
                        height: 30
                    } : {right: 7, top: n.y, width: 30, height: n.height}, o = to(t.option);
                d(["right", "top", "width", "height"], function (t) {
                    "ph" === o[t] && (o[t] = r[t])
                });
                var a = Kr(o, i, t.padding);
                this._location = {
                    x: a.x,
                    y: a.y
                }, this._size = [a.width, a.height], "vertical" === this._orient && this._size.reverse()
            }, _positionGroup: function () {
                var t = this.group, e = this._location, n = this._orient, i = this.dataZoomModel.getFirstTargetAxisModel(),
                    r = i && i.get("inverse"), o = this._displayables.barGroup,
                    a = (this._dataShadowInfo || {}).otherAxisInverse;
                o.attr(n !== cM || r ? n === cM && r ? {scale: a ? [-1, 1] : [-1, -1]} : "vertical" !== n || r ? {
                    scale: a ? [-1, -1] : [-1, 1],
                    rotation: Math.PI / 2
                } : {scale: a ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: a ? [1, 1] : [1, -1]});
                var s = t.getBoundingRect([o]);
                t.attr("position", [e.x - s.x, e.y - s.y])
            }, _getViewExtent: function () {
                return [0, this._size[0]]
            }, _renderBackground: function () {
                var t = this.dataZoomModel, e = this._size, n = this._displayables.barGroup;
                n.add(new aM({
                    silent: !0,
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: t.get("backgroundColor")},
                    z2: -40
                })), n.add(new aM({
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: "transparent"},
                    z2: 0,
                    onclick: m(this._onClickPanelClick, this)
                }))
            }, _renderDataShadow: function () {
                var t = this._dataShadowInfo = this._prepareDataShadowInfo();
                if (t) {
                    var e = this._size, n = t.series, i = n.getRawData(),
                        r = n.getShadowDim ? n.getShadowDim() : t.otherDim;
                    if (null != r) {
                        var o = i.getDataExtent(r), s = .3 * (o[1] - o[0]);
                        o = [o[0] - s, o[1] + s];
                        var l, u = [0, e[1]], h = [0, e[0]], c = [[e[0], 0], [0, 0]], d = [], f = h[1] / (i.count() - 1),
                            p = 0, g = Math.round(i.count() / e[0]);
                        i.each([r], function (t, e) {
                            if (g > 0 && e % g) p += f; else {
                                var n = null == t || isNaN(t) || "" === t, i = n ? 0 : sM(t, o, u, !0);
                                n && !l && e ? (c.push([c[c.length - 1][0], 0]), d.push([d[d.length - 1][0], 0])) : !n && l && (c.push([p, 0]), d.push([p, 0])), c.push([p, i]), d.push([p, i]), p += f, l = n
                            }
                        });
                        var m = this.dataZoomModel;
                        this._displayables.barGroup.add(new dy({
                            shape: {points: c},
                            style: a({fill: m.get("dataBackgroundColor")}, m.getModel("dataBackground.areaStyle").getAreaStyle()),
                            silent: !0,
                            z2: -20
                        })), this._displayables.barGroup.add(new fy({
                            shape: {points: d},
                            style: m.getModel("dataBackground.lineStyle").getLineStyle(),
                            silent: !0,
                            z2: -19
                        }))
                    }
                }
            }, _prepareDataShadowInfo: function () {
                var t = this.dataZoomModel, e = t.get("showDataShadow");
                if (!1 !== e) {
                    var n, i = this.ecModel;
                    return t.eachTargetAxis(function (r, o) {
                        d(t.getAxisProxy(r.name, o).getTargetSeriesModels(), function (t) {
                            if (!(n || !0 !== e && l(fM, t.get("type")) < 0)) {
                                var a, s = i.getComponent(r.axis, o).axis, u = _d(r.name), h = t.coordinateSystem;
                                null != u && h.getOtherAxis && (a = h.getOtherAxis(s).inverse), u = t.getData().mapDimension(u), n = {
                                    thisAxis: s,
                                    series: t,
                                    thisDim: r.name,
                                    otherDim: u,
                                    otherAxisInverse: a
                                }
                            }
                        }, this)
                    }, this), n
                }
            }, _renderHandle: function () {
                var t = this._displayables, e = t.handles = [], n = t.handleLabels = [], i = this._displayables.barGroup,
                    r = this._size, o = this.dataZoomModel;
                i.add(t.filler = new aM({
                    draggable: !0,
                    cursor: wd(this._orient),
                    drift: uM(this._onDragMove, this, "all"),
                    onmousemove: function (t) {
                        vg(t.event)
                    },
                    ondragstart: uM(this._showDataInfo, this, !0),
                    ondragend: uM(this._onDragEnd, this),
                    onmouseover: uM(this._showDataInfo, this, !0),
                    onmouseout: uM(this._showDataInfo, this, !1),
                    style: {fill: o.get("fillerColor"), textPosition: "inside"}
                })), i.add(new aM(Wi({
                    silent: !0,
                    shape: {x: 0, y: 0, width: r[0], height: r[1]},
                    style: {
                        stroke: o.get("dataBackgroundColor") || o.get("borderColor"),
                        lineWidth: 1,
                        fill: "rgba(0,0,0,0)"
                    }
                }))), hM([0, 1], function (t) {
                    var r = br(o.get("handleIcon"), {
                        cursor: wd(this._orient),
                        draggable: !0,
                        drift: uM(this._onDragMove, this, t),
                        onmousemove: function (t) {
                            vg(t.event)
                        },
                        ondragend: uM(this._onDragEnd, this),
                        onmouseover: uM(this._showDataInfo, this, !0),
                        onmouseout: uM(this._showDataInfo, this, !1)
                    }, {x: -1, y: 0, width: 2, height: 2}), a = r.getBoundingRect();
                    this._handleHeight = Dr(o.get("handleSize"), this._size[1]), this._handleWidth = a.width / a.height * this._handleHeight, r.setStyle(o.getModel("handleStyle").getItemStyle());
                    var s = o.get("handleColor");
                    null != s && (r.style.fill = s), i.add(e[t] = r);
                    var l = o.textStyleModel;
                    this.group.add(n[t] = new ry({
                        silent: !0,
                        invisible: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            textFill: l.getTextColor(),
                            textFont: l.getFont()
                        },
                        z2: 10
                    }))
                }, this)
            }, _resetInterval: function () {
                var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
                this._handleEnds = [sM(t[0], [0, 100], e, !0), sM(t[1], [0, 100], e, !0)]
            }, _updateInterval: function (t, e) {
                var n = this.dataZoomModel, i = this._handleEnds, r = this._getViewExtent(),
                    o = n.findRepresentativeAxisProxy().getMinMaxSpan(), a = [0, 100];
                oM(e, i, r, n.get("zoomLock") ? "all" : t, null != o.minSpan ? sM(o.minSpan, a, r, !0) : null, null != o.maxSpan ? sM(o.maxSpan, a, r, !0) : null);
                var s = this._range, l = this._range = lM([sM(i[0], r, a, !0), sM(i[1], r, a, !0)]);
                return !s || s[0] !== l[0] || s[1] !== l[1]
            }, _updateView: function (t) {
                var e = this._displayables, n = this._handleEnds, i = lM(n.slice()), r = this._size;
                hM([0, 1], function (t) {
                    var i = e.handles[t], o = this._handleHeight;
                    i.attr({scale: [o / 2, o / 2], position: [n[t], r[1] / 2 - o / 2]})
                }, this), e.filler.setShape({x: i[0], y: 0, width: i[1] - i[0], height: r[1]}), this._updateDataInfo(t)
            }, _updateDataInfo: function (t) {
                function e(t) {
                    var e = vr(i.handles[t].parent, this.group), n = xr(0 === t ? "right" : "left", e),
                        s = this._handleWidth / 2 + dM, l = yr([c[t] + (0 === t ? -s : s), this._size[1] / 2], e);
                    r[t].setStyle({
                        x: l[0],
                        y: l[1],
                        textVerticalAlign: o === cM ? "middle" : n,
                        textAlign: o === cM ? n : "center",
                        text: a[t]
                    })
                }

                var n = this.dataZoomModel, i = this._displayables, r = i.handleLabels, o = this._orient, a = ["", ""];
                if (n.get("showDetail")) {
                    var s = n.findRepresentativeAxisProxy();
                    if (s) {
                        var l = s.getAxisModel().axis, u = this._range,
                            h = t ? s.calculateDataWindow({start: u[0], end: u[1]}).valueWindow : s.getDataValueWindow();
                        a = [this._formatLabel(h[0], l), this._formatLabel(h[1], l)]
                    }
                }
                var c = lM(this._handleEnds.slice());
                e.call(this, 0), e.call(this, 1)
            }, _formatLabel: function (t, e) {
                var n = this.dataZoomModel, i = n.get("labelFormatter"), r = n.get("labelPrecision");
                null != r && "auto" !== r || (r = e.getPixelPrecision());
                var o = null == t || isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(r, 20));
                return x(i) ? i(t, o) : _(i) ? i.replace("{value}", o) : o
            }, _showDataInfo: function (t) {
                t = this._dragging || t;
                var e = this._displayables.handleLabels;
                e[0].attr("invisible", !t), e[1].attr("invisible", !t)
            }, _onDragMove: function (t, e, n) {
                this._dragging = !0;
                var i = yr([e, n], this._displayables.barGroup.getLocalTransform(), !0), r = this._updateInterval(t, i[0]),
                    o = this.dataZoomModel.get("realtime");
                this._updateView(!o), r && o && this._dispatchZoomAction()
            }, _onDragEnd: function () {
                this._dragging = !1, this._showDataInfo(!1), !this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
            }, _onClickPanelClick: function (t) {
                var e = this._size, n = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
                if (!(n[0] < 0 || n[0] > e[0] || n[1] < 0 || n[1] > e[1])) {
                    var i = this._handleEnds, r = (i[0] + i[1]) / 2, o = this._updateInterval("all", n[0] - r);
                    this._updateView(), o && this._dispatchZoomAction()
                }
            }, _dispatchZoomAction: function () {
                var t = this._range;
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: t[0],
                    end: t[1]
                })
            }, _findCoordRect: function () {
                var t;
                if (hM(this.getTargetCoordInfo(), function (e) {
                        if (!t && e.length) {
                            var n = e[0].model.coordinateSystem;
                            t = n.getRect && n.getRect()
                        }
                    }), !t) {
                    var e = this.api.getWidth(), n = this.api.getHeight();
                    t = {x: .2 * e, y: .2 * n, width: .6 * e, height: .6 * n}
                }
                return t
            }
        });
    iM.extend({
        type: "dataZoom.inside",
        defaultOption: {
            disabled: !1,
            zoomLock: !1,
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0
        }
    });
    var gM = "\0_ec_interaction_mutex";
    _s({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
    }), h(Td, pg);
    var mM = "\0_ec_dataZoom_roams", vM = m, yM = rM.extend({
        type: "dataZoom.inside", init: function (t, e) {
            this._range
        }, render: function (t, e, n, i) {
            yM.superApply(this, "render", arguments), this._range = t.getPercentRange(), d(this.getTargetCoordInfo(), function (e, i) {
                var r = f(e, function (t) {
                    return Rd(t.model)
                });
                d(e, function (e) {
                    var o = e.model, a = {};
                    d(["pan", "zoom", "scrollMove"], function (t) {
                        a[t] = vM(xM[t], this, e, i)
                    }, this), Ed(n, {
                        coordId: Rd(o), allCoordIds: r, containsPoint: function (t, e, n) {
                            return o.coordinateSystem.containPoint([e, n])
                        }, dataZoomId: t.id, dataZoomModel: t, getRange: a
                    })
                }, this)
            }, this)
        }, dispose: function () {
            Nd(this.api, this.dataZoomModel.id), yM.superApply(this, "dispose", arguments), this._range = null
        }
    }), xM = {
        zoom: function (t, e, n, i) {
            var r = this._range, o = r.slice(), a = t.axisModels[0];
            if (a) {
                var s = _M[e](null, [i.originX, i.originY], a, n, t),
                    l = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (o[1] - o[0]) + o[0],
                    u = Math.max(1 / i.scale, 0);
                o[0] = (o[0] - l) * u + l, o[1] = (o[1] - l) * u + l;
                var h = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
                return oM(0, o, [0, 100], 0, h.minSpan, h.maxSpan), this._range = o, r[0] !== o[0] || r[1] !== o[1] ? o : void 0
            }
        }, pan: Gd(function (t, e, n, i, r, o) {
            var a = _M[i]([o.oldX, o.oldY], [o.newX, o.newY], e, r, n);
            return a.signal * (t[1] - t[0]) * a.pixel / a.pixelLength
        }), scrollMove: Gd(function (t, e, n, i, r, o) {
            return _M[i]([0, 0], [o.scrollDelta, o.scrollDelta], e, r, n).signal * (t[1] - t[0]) * o.scrollDelta
        })
    }, _M = {
        grid: function (t, e, n, i, r) {
            var o = n.axis, a = {}, s = r.model.coordinateSystem.getRect();
            return t = t || [0, 0], "x" === o.dim ? (a.pixel = e[0] - t[0], a.pixelLength = s.width, a.pixelStart = s.x, a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = s.height, a.pixelStart = s.y, a.signal = o.inverse ? -1 : 1), a
        }, polar: function (t, e, n, i, r) {
            var o = n.axis, a = {}, s = r.model.coordinateSystem, l = s.getRadiusAxis().getExtent(),
                u = s.getAngleAxis().getExtent();
            return t = t ? s.pointToCoord(t) : [0, 0], e = s.pointToCoord(e), "radiusAxis" === n.mainType ? (a.pixel = e[0] - t[0], a.pixelLength = l[1] - l[0], a.pixelStart = l[0], a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = u[1] - u[0], a.pixelStart = u[0], a.signal = o.inverse ? -1 : 1), a
        }, singleAxis: function (t, e, n, i, r) {
            var o = n.axis, a = r.model.coordinateSystem.getRect(), s = {};
            return t = t || [0, 0], "horizontal" === o.orient ? (s.pixel = e[0] - t[0], s.pixelLength = a.width, s.pixelStart = a.x, s.signal = o.inverse ? 1 : -1) : (s.pixel = e[1] - t[1], s.pixelLength = a.height, s.pixelStart = a.y, s.signal = o.inverse ? -1 : 1), s
        }
    };
    xs({
        getTargetSeries: function (t) {
            var e = N();
            return t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, n, i) {
                    d(i.getAxisProxy(t.name, n).getTargetSeriesModels(), function (t) {
                        e.set(t.uid, t)
                    })
                })
            }), e
        }, modifyOutputEnd: !0, overallReset: function (t, e) {
            t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, n, i) {
                    i.getAxisProxy(t.name, n).reset(i, e)
                }), t.eachTargetAxis(function (t, n, i) {
                    i.getAxisProxy(t.name, n).filterData(i, e)
                })
            }), t.eachComponent("dataZoom", function (t) {
                var e = t.findRepresentativeAxisProxy(), n = e.getDataPercentWindow(), i = e.getDataValueWindow();
                t.setRawRange({start: n[0], end: n[1], startValue: i[0], endValue: i[1]}, !0)
            })
        }
    }), _s("dataZoom", function (t, e) {
        var n = cd(m(e.eachComponent, e, "dataZoom"), KS, function (t, e) {
            return t.get(e.axisIndex)
        }), i = [];
        e.eachComponent({mainType: "dataZoom", query: t}, function (t, e) {
            i.push.apply(i, n(t).nodes)
        }), d(i, function (e, n) {
            e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
        })
    });
    var wM = {}, bM = Is({
        type: "toolbox",
        layoutMode: {type: "box", ignoreSize: !0},
        optionUpdated: function () {
            bM.superApply(this, "optionUpdated", arguments), d(this.option.feature, function (t, e) {
                var n = Ud(e);
                n && i(t, n.defaultOption)
            })
        },
        defaultOption: {
            show: !0,
            z: 6,
            zlevel: 0,
            orient: "horizontal",
            left: "right",
            top: "top",
            backgroundColor: "transparent",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemSize: 15,
            itemGap: 8,
            showTitle: !0,
            iconStyle: {borderColor: "#666", color: "none"},
            emphasis: {iconStyle: {borderColor: "#3E98C5"}}
        }
    });
    Ts({
        type: "toolbox", render: function (t, e, n, i) {
            function r(r, a) {
                var s, c = h[r], d = h[a], f = new Sr(l[c], t, t.ecModel);
                if (c && !d) {
                    if (Xd(c)) s = {model: f, onclick: f.option.onclick, featureName: c}; else {
                        var p = Ud(c);
                        if (!p) return;
                        s = new p(f, e, n)
                    }
                    u[c] = s
                } else {
                    if (!(s = u[d])) return;
                    s.model = f, s.ecModel = e, s.api = n
                }
                c || !d ? f.get("show") && !s.unusable ? (o(f, s, c), f.setIconStatus = function (t, e) {
                    var n = this.option, i = this.iconPaths;
                    n.iconStatus = n.iconStatus || {}, n.iconStatus[t] = e, i[t] && i[t].trigger(e)
                }, s.render && s.render(f, e, n, i)) : s.remove && s.remove(e, n) : s.dispose && s.dispose(e, n)
            }

            function o(i, r, o) {
                var l = i.getModel("iconStyle"), u = i.getModel("emphasis.iconStyle"),
                    h = r.getIcons ? r.getIcons() : i.get("icon"), c = i.get("title") || {};
                if ("string" == typeof h) {
                    var f = h, p = c;
                    c = {}, (h = {})[o] = f, c[o] = p
                }
                var g = i.iconPaths = {};
                d(h, function (o, h) {
                    var d = br(o, {}, {x: -s / 2, y: -s / 2, width: s, height: s});
                    d.setStyle(l.getItemStyle()), d.hoverStyle = u.getItemStyle(), ir(d), t.get("showTitle") && (d.__title = c[h], d.on("mouseover", function () {
                        var t = u.getItemStyle();
                        d.setStyle({
                            text: c[h],
                            textPosition: t.textPosition || "bottom",
                            textFill: t.fill || t.stroke || "#000",
                            textAlign: t.textAlign || "center"
                        })
                    }).on("mouseout", function () {
                        d.setStyle({textFill: null})
                    })), d.trigger(i.get("iconStatus." + h) || "normal"), a.add(d), d.on("click", m(r.onclick, r, e, n, h)), g[h] = d
                })
            }

            var a = this.group;
            if (a.removeAll(), t.get("show")) {
                var s = +t.get("itemSize"), l = t.get("feature") || {}, u = this._features || (this._features = {}),
                    h = [];
                d(l, function (t, e) {
                    h.push(e)
                }), new ks(this._featureNames || [], h).add(r).update(r).remove(v(r, null)).execute(), this._featureNames = h, Mc(a, t, n), a.add(Ic(a.getBoundingRect(), t)), a.eachChild(function (t) {
                    var e = t.__title, i = t.hoverStyle;
                    if (i && e) {
                        var r = Se(e, Be(i)), o = t.position[0] + a.position[0], l = !1;
                        t.position[1] + a.position[1] + s + r.height > n.getHeight() && (i.textPosition = "top", l = !0);
                        var u = l ? -5 - r.height : s + 8;
                        o + r.width / 2 > n.getWidth() ? (i.textPosition = ["100%", u], i.textAlign = "right") : o - r.width / 2 < 0 && (i.textPosition = [0, u], i.textAlign = "left")
                    }
                })
            }
        }, updateView: function (t, e, n, i) {
            d(this._features, function (t) {
                t.updateView && t.updateView(t.model, e, n, i)
            })
        }, remove: function (t, e) {
            d(this._features, function (n) {
                n.remove && n.remove(t, e)
            }), this.group.removeAll()
        }, dispose: function (t, e) {
            d(this._features, function (n) {
                n.dispose && n.dispose(t, e)
            })
        }
    });
    var SM = t_.toolbox.saveAsImage;
    Yd.defaultOption = {
        show: !0,
        icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
        title: SM.title,
        type: "png",
        name: "",
        excludeComponents: ["toolbox"],
        pixelRatio: 1,
        lang: SM.lang.slice()
    }, Yd.prototype.unusable = !Xp.canvasSupported, Yd.prototype.onclick = function (t, e) {
        var n = this.model, i = n.get("name") || t.get("title.0.text") || "echarts", r = document.createElement("a"),
            o = n.get("type", !0) || "png";
        r.download = i + "." + o, r.target = "_blank";
        var a = e.getConnectedDataURL({
            type: o,
            backgroundColor: n.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
            excludeComponents: n.get("excludeComponents"),
            pixelRatio: n.get("pixelRatio")
        });
        if (r.href = a, "function" != typeof MouseEvent || Xp.browser.ie || Xp.browser.edge) if (window.navigator.msSaveOrOpenBlob) {
            for (var s = atob(a.split(",")[1]), l = s.length, u = new Uint8Array(l); l--;) u[l] = s.charCodeAt(l);
            var h = new Blob([u]);
            window.navigator.msSaveOrOpenBlob(h, i + "." + o)
        } else {
            var c = n.get("lang"),
                d = '<body style="margin:0;"><img src="' + a + '" style="max-width:100%;" title="' + (c && c[0] || "") + '" /></body>';
            window.open().document.write(d)
        } else {
            var f = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
            r.dispatchEvent(f)
        }
    }, Zd("saveAsImage", Yd);
    var MM = t_.toolbox.magicType;
    jd.defaultOption = {
        show: !0,
        type: [],
        icon: {
            line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
            bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
            stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
            tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
        },
        title: n(MM.title),
        option: {},
        seriesIndex: {}
    };
    var IM = jd.prototype;
    IM.getIcons = function () {
        var t = this.model, e = t.get("icon"), n = {};
        return d(t.get("type"), function (t) {
            e[t] && (n[t] = e[t])
        }), n
    };
    var TM = {
        line: function (t, e, n, r) {
            if ("bar" === t) return i({
                id: e,
                type: "line",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, r.get("option.line") || {}, !0)
        }, bar: function (t, e, n, r) {
            if ("line" === t) return i({
                id: e,
                type: "bar",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, r.get("option.bar") || {}, !0)
        }, stack: function (t, e, n, r) {
            if ("line" === t || "bar" === t) return i({
                id: e,
                stack: "__ec_magicType_stack__"
            }, r.get("option.stack") || {}, !0)
        }, tiled: function (t, e, n, r) {
            if ("line" === t || "bar" === t) return i({id: e, stack: ""}, r.get("option.tiled") || {}, !0)
        }
    }, CM = [["line", "bar"], ["stack", "tiled"]];
    IM.onclick = function (t, e, n) {
        var i = this.model, r = i.get("seriesIndex." + n);
        if (TM[n]) {
            var o = {series: []};
            d(CM, function (t) {
                l(t, n) >= 0 && d(t, function (t) {
                    i.setIconStatus(t, "normal")
                })
            }), i.setIconStatus(n, "emphasis"), t.eachComponent({
                mainType: "series",
                query: null == r ? null : {seriesIndex: r}
            }, function (e) {
                var r = e.subType, s = e.id, l = TM[n](r, s, e, i);
                l && (a(l, e.option), o.series.push(l));
                var u = e.coordinateSystem;
                if (u && "cartesian2d" === u.type && ("line" === n || "bar" === n)) {
                    var h = u.getAxesByScale("ordinal")[0];
                    if (h) {
                        var c = h.dim + "Axis", d = t.queryComponents({
                            mainType: c,
                            index: e.get(name + "Index"),
                            id: e.get(name + "Id")
                        })[0].componentIndex;
                        o[c] = o[c] || [];
                        for (var f = 0; f <= d; f++) o[c][d] = o[c][d] || {};
                        o[c][d].boundaryGap = "bar" === n
                    }
                }
            }), e.dispatchAction({type: "changeMagicType", currentType: n, newOption: o})
        }
    }, _s({type: "changeMagicType", event: "magicTypeChanged", update: "prepareAndUpdate"}, function (t, e) {
        e.mergeOption(t.newOption)
    }), Zd("magicType", jd);
    var AM = t_.toolbox.dataView, DM = new Array(60).join("-"), kM = "\t", PM = new RegExp("[" + kM + "]+", "g");
    of.defaultOption = {
        show: !0,
        readOnly: !1,
        optionToContent: null,
        contentToOption: null,
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: n(AM.title),
        lang: n(AM.lang),
        backgroundColor: "#fff",
        textColor: "#000",
        textareaColor: "#fff",
        textareaBorderColor: "#333",
        buttonColor: "#c23531",
        buttonTextColor: "#fff"
    }, of.prototype.onclick = function (t, e) {
        function n() {
            i.removeChild(o), x._dom = null
        }

        var i = e.getDom(), r = this.model;
        this._dom && i.removeChild(this._dom);
        var o = document.createElement("div");
        o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style.backgroundColor = r.get("backgroundColor") || "#fff";
        var a = document.createElement("h4"), s = r.get("lang") || [];
        a.innerHTML = s[0] || r.get("title"), a.style.cssText = "margin: 10px 20px;", a.style.color = r.get("textColor");
        var l = document.createElement("div"), u = document.createElement("textarea");
        l.style.cssText = "display:block;width:100%;overflow:auto;";
        var h = r.get("optionToContent"), c = r.get("contentToOption"), d = Qd(t);
        if ("function" == typeof h) {
            var f = h(e.getOption());
            "string" == typeof f ? l.innerHTML = f : M(f) && l.appendChild(f)
        } else l.appendChild(u), u.readOnly = r.get("readOnly"), u.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", u.style.color = r.get("textColor"), u.style.borderColor = r.get("textareaBorderColor"), u.style.backgroundColor = r.get("textareaColor"), u.value = d.value;
        var p = d.meta, g = document.createElement("div");
        g.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
        var m = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
            v = document.createElement("div"), y = document.createElement("div");
        m += ";background-color:" + r.get("buttonColor"), m += ";color:" + r.get("buttonTextColor");
        var x = this;
        at(v, "click", n), at(y, "click", function () {
            var t;
            try {
                t = "function" == typeof c ? c(l, e.getOption()) : rf(u.value, p)
            } catch (t) {
                throw n(), new Error("Data view format error " + t)
            }
            t && e.dispatchAction({type: "changeDataView", newOption: t}), n()
        }), v.innerHTML = s[1], y.innerHTML = s[2], y.style.cssText = m, v.style.cssText = m, !r.get("readOnly") && g.appendChild(y), g.appendChild(v), at(u, "keydown", function (t) {
            if (9 === (t.keyCode || t.which)) {
                var e = this.value, n = this.selectionStart, i = this.selectionEnd;
                this.value = e.substring(0, n) + kM + e.substring(i), this.selectionStart = this.selectionEnd = n + 1, vg(t)
            }
        }), o.appendChild(a), o.appendChild(l), o.appendChild(g), l.style.height = i.clientHeight - 80 + "px", i.appendChild(o), this._dom = o
    }, of.prototype.remove = function (t, e) {
        this._dom && e.getDom().removeChild(this._dom)
    }, of.prototype.dispose = function (t, e) {
        this.remove(t, e)
    }, Zd("dataView", of), _s({
        type: "changeDataView",
        event: "dataViewChanged",
        update: "prepareAndUpdate"
    }, function (t, e) {
        var n = [];
        d(t.newOption.series, function (t) {
            var i = e.getSeriesByName(t.name)[0];
            if (i) {
                var r = i.get("data");
                n.push({name: t.name, data: af(t.data, r)})
            } else n.push(o({type: "scatter"}, t))
        }), e.mergeOption(a({series: n}, t.newOption))
    });
    var LM = v, OM = d, zM = f, EM = Math.min, NM = Math.max, RM = Math.pow, BM = 1e4, FM = 6, VM = 6, WM = "globalPan",
        HM = {w: [0, 0], e: [0, 1], n: [1, 0], s: [1, 1]},
        GM = {w: "ew", e: "ew", n: "ns", s: "ns", ne: "nesw", sw: "nesw", nw: "nwse", se: "nwse"}, ZM = {
            brushStyle: {lineWidth: 2, stroke: "rgba(0,0,0,0.3)", fill: "rgba(0,0,0,0.1)"},
            transformable: !0,
            brushMode: "single",
            removeOnClick: !1
        }, UM = 0;
    sf.prototype = {
        constructor: sf, enableBrush: function (t) {
            return this._brushType && uf(this), t.brushType && lf(this, t), this
        }, setPanels: function (t) {
            if (t && t.length) {
                var e = this._panels = {};
                d(t, function (t) {
                    e[t.panelId] = n(t)
                })
            } else this._panels = null;
            return this
        }, mount: function (t) {
            t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
            var e = this.group;
            return this._zr.add(e), e.attr({
                position: t.position || [0, 0],
                rotation: t.rotation || 0,
                scale: t.scale || [1, 1]
            }), this._transform = e.getLocalTransform(), this
        }, eachCover: function (t, e) {
            OM(this._covers, t, e)
        }, updateCovers: function (t) {
            function e(t, e) {
                return (null != t.id ? t.id : o + e) + "-" + t.brushType
            }

            function r(e, n) {
                var i = t[e];
                if (null != n && a[n] === u) s[e] = a[n]; else {
                    var r = s[e] = null != n ? (a[n].__brushOption = i, a[n]) : cf(l, hf(l, i));
                    pf(l, r)
                }
            }

            t = f(t, function (t) {
                return i(n(ZM), t, !0)
            });
            var o = "\0-brush-index-", a = this._covers, s = this._covers = [], l = this, u = this._creatingCover;
            return new ks(a, t, function (t, n) {
                return e(t.__brushOption, n)
            }, e).add(r).update(r).remove(function (t) {
                a[t] !== u && l.group.remove(a[t])
            }).execute(), this
        }, unmount: function () {
            return this.enableBrush(!1), yf(this), this._zr.remove(this.group), this
        }, dispose: function () {
            this.unmount(), this.off()
        }
    }, h(sf, pg);
    var XM = {
            mousedown: function (t) {
                if (this._dragging) Vf.call(this, t); else if (!t.target || !t.target.draggable) {
                    Nf(t);
                    var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
                    this._creatingCover = null, (this._creatingPanel = mf(this, t, e)) && (this._dragging = !0, this._track = [e.slice()])
                }
            }, mousemove: function (t) {
                var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
                if (Ef(this, t, e), this._dragging) {
                    Nf(t);
                    var n = Bf(this, t, e, !1);
                    n && xf(this, n)
                }
            }, mouseup: Vf
        }, YM = {
            lineX: Wf(0), lineY: Wf(1), rect: {
                createCover: function (t, e) {
                    return bf(LM(kf, function (t) {
                        return t
                    }, function (t) {
                        return t
                    }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
                }, getCreatingRange: function (t) {
                    var e = wf(t);
                    return Cf(e[1][0], e[1][1], e[0][0], e[0][1])
                }, updateCoverShape: function (t, e, n, i) {
                    Sf(t, e, n, i)
                }, updateCommon: Mf, contain: Rf
            }, polygon: {
                createCover: function (t, e) {
                    var n = new Jg;
                    return n.add(new fy({name: "main", style: Tf(e), silent: !0})), n
                }, getCreatingRange: function (t) {
                    return t
                }, endCreating: function (t, e) {
                    e.remove(e.childAt(0)), e.add(new dy({
                        name: "main",
                        draggable: !0,
                        drift: LM(Pf, t, e),
                        ondragend: LM(xf, t, {isEnd: !0})
                    }))
                }, updateCoverShape: function (t, e, n, i) {
                    e.childAt(0).setShape({points: Of(t, e, n)})
                }, updateCommon: Mf, contain: Rf
            }
        }, jM = {axisPointer: 1, tooltip: 1, brush: 1}, qM = d, $M = l, KM = v, QM = ["dataToPoint", "pointToData"],
        JM = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"], tI = Yf.prototype;
    tI.setOutputRanges = function (t, e) {
        this.matchOutputRanges(t, e, function (t, e, n) {
            if ((t.coordRanges || (t.coordRanges = [])).push(e), !t.coordRange) {
                t.coordRange = e;
                var i = rI[t.brushType](0, n, e);
                t.__rangeOffset = {offset: oI[t.brushType](i.values, t.range, [1, 1]), xyMinMax: i.xyMinMax}
            }
        })
    }, tI.matchOutputRanges = function (t, e, n) {
        qM(t, function (t) {
            var i = this.findTargetInfo(t, e);
            i && !0 !== i && d(i.coordSyses, function (i) {
                var r = rI[t.brushType](1, i, t.range);
                n(t, r.values, i, e)
            })
        }, this)
    }, tI.setInputRanges = function (t, e) {
        qM(t, function (t) {
            var n = this.findTargetInfo(t, e);
            if (t.range = t.range || [], n && !0 !== n) {
                t.panelId = n.panelId;
                var i = rI[t.brushType](0, n.coordSys, t.coordRange), r = t.__rangeOffset;
                t.range = r ? oI[t.brushType](i.values, r.offset, Qf(i.xyMinMax, r.xyMinMax)) : i.values
            }
        }, this)
    }, tI.makePanelOpts = function (t, e) {
        return f(this._targetInfoList, function (n) {
            var i = n.getPanelRect();
            return {
                panelId: n.panelId,
                defaultBrushType: e && e(n),
                clipPath: Gf(i),
                isTargetByCursor: Uf(i, t, n.coordSysModel),
                getLinearBrushOtherExtent: Zf(i)
            }
        })
    }, tI.controlSeries = function (t, e, n) {
        var i = this.findTargetInfo(t, n);
        return !0 === i || i && $M(i.coordSyses, e.coordinateSystem) >= 0
    }, tI.findTargetInfo = function (t, e) {
        for (var n = this._targetInfoList, i = qf(e, t), r = 0; r < n.length; r++) {
            var o = n[r], a = t.panelId;
            if (a) {
                if (o.panelId === a) return o
            } else for (r = 0; r < nI.length; r++) if (nI[r](i, o)) return o
        }
        return !0
    };
    var eI = {
        grid: function (t, e) {
            var n = t.xAxisModels, i = t.yAxisModels, r = t.gridModels, o = N(), a = {}, s = {};
            (n || i || r) && (qM(n, function (t) {
                var e = t.axis.grid.model;
                o.set(e.id, e), a[e.id] = !0
            }), qM(i, function (t) {
                var e = t.axis.grid.model;
                o.set(e.id, e), s[e.id] = !0
            }), qM(r, function (t) {
                o.set(t.id, t), a[t.id] = !0, s[t.id] = !0
            }), o.each(function (t) {
                var r = t.coordinateSystem, o = [];
                qM(r.getCartesians(), function (t, e) {
                    ($M(n, t.getAxis("x").model) >= 0 || $M(i, t.getAxis("y").model) >= 0) && o.push(t)
                }), e.push({
                    panelId: "grid--" + t.id,
                    gridModel: t,
                    coordSysModel: t,
                    coordSys: o[0],
                    coordSyses: o,
                    getPanelRect: iI.grid,
                    xAxisDeclared: a[t.id],
                    yAxisDeclared: s[t.id]
                })
            }))
        }, geo: function (t, e) {
            qM(t.geoModels, function (t) {
                var n = t.coordinateSystem;
                e.push({
                    panelId: "geo--" + t.id,
                    geoModel: t,
                    coordSysModel: t,
                    coordSys: n,
                    coordSyses: [n],
                    getPanelRect: iI.geo
                })
            })
        }
    }, nI = [function (t, e) {
        var n = t.xAxisModel, i = t.yAxisModel, r = t.gridModel;
        return !r && n && (r = n.axis.grid.model), !r && i && (r = i.axis.grid.model), r && r === e.gridModel
    }, function (t, e) {
        var n = t.geoModel;
        return n && n === e.geoModel
    }], iI = {
        grid: function () {
            return this.coordSys.grid.getRect().clone()
        }, geo: function () {
            var t = this.coordSys, e = t.getBoundingRect().clone();
            return e.applyTransform(vr(t)), e
        }
    }, rI = {
        lineX: KM($f, 0), lineY: KM($f, 1), rect: function (t, e, n) {
            var i = e[QM[t]]([n[0][0], n[1][0]]), r = e[QM[t]]([n[0][1], n[1][1]]),
                o = [jf([i[0], r[0]]), jf([i[1], r[1]])];
            return {values: o, xyMinMax: o}
        }, polygon: function (t, e, n) {
            var i = [[1 / 0, -1 / 0], [1 / 0, -1 / 0]];
            return {
                values: f(n, function (n) {
                    var r = e[QM[t]](n);
                    return i[0][0] = Math.min(i[0][0], r[0]), i[1][0] = Math.min(i[1][0], r[1]), i[0][1] = Math.max(i[0][1], r[0]), i[1][1] = Math.max(i[1][1], r[1]), r
                }), xyMinMax: i
            }
        }
    }, oI = {
        lineX: KM(Kf, 0), lineY: KM(Kf, 1), rect: function (t, e, n) {
            return [[t[0][0] - n[0] * e[0][0], t[0][1] - n[0] * e[0][1]], [t[1][0] - n[1] * e[1][0], t[1][1] - n[1] * e[1][1]]]
        }, polygon: function (t, e, n) {
            return f(t, function (t, i) {
                return [t[0] - n[0] * e[i][0], t[1] - n[1] * e[i][1]]
            })
        }
    }, aI = d, sI = "\0_ec_hist_store";
    iM.extend({type: "dataZoom.select"}), rM.extend({type: "dataZoom.select"});
    var lI = t_.toolbox.dataZoom, uI = d, hI = "\0_ec_\0toolbox-dataZoom_";
    op.defaultOption = {
        show: !0,
        icon: {
            zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
            back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
        },
        title: n(lI.title)
    };
    var cI = op.prototype;
    cI.render = function (t, e, n, i) {
        this.model = t, this.ecModel = e, this.api = n, lp(t, e, this, i, n), sp(t, e)
    }, cI.onclick = function (t, e, n) {
        dI[n].call(this)
    }, cI.remove = function (t, e) {
        this._brushController.unmount()
    }, cI.dispose = function (t, e) {
        this._brushController.dispose()
    };
    var dI = {
        zoom: function () {
            var t = !this._isZoomActive;
            this.api.dispatchAction({type: "takeGlobalCursor", key: "dataZoomSelect", dataZoomSelectActive: t})
        }, back: function () {
            this._dispatchZoomAction(ep(this.ecModel))
        }
    };
    cI._onBrush = function (t, e) {
        function n(t, e, n) {
            var a = e.getAxis(t), s = a.model, l = i(t, s, o), u = l.findRepresentativeAxisProxy(s).getMinMaxSpan();
            null == u.minValueSpan && null == u.maxValueSpan || (n = oM(0, n.slice(), a.scale.getExtent(), 0, u.minValueSpan, u.maxValueSpan)), l && (r[l.id] = {
                dataZoomId: l.id,
                startValue: n[0],
                endValue: n[1]
            })
        }

        function i(t, e, n) {
            var i;
            return n.eachComponent({mainType: "dataZoom", subType: "select"}, function (n) {
                n.getAxisModel(t, e.componentIndex) && (i = n)
            }), i
        }

        if (e.isEnd && t.length) {
            var r = {}, o = this.ecModel;
            this._brushController.updateCovers([]), new Yf(ap(this.model.option), o, {include: ["grid"]}).matchOutputRanges(t, o, function (t, e, i) {
                if ("cartesian2d" === i.type) {
                    var r = t.brushType;
                    "rect" === r ? (n("x", i, e[0]), n("y", i, e[1])) : n({lineX: "x", lineY: "y"}[r], i, e)
                }
            }), tp(o, r), this._dispatchZoomAction(r)
        }
    }, cI._dispatchZoomAction = function (t) {
        var e = [];
        uI(t, function (t, i) {
            e.push(n(t))
        }), e.length && this.api.dispatchAction({type: "dataZoom", from: this.uid, batch: e})
    }, Zd("dataZoom", op), ys(function (t) {
        function e(t, e) {
            if (e) {
                var r = t + "Index", o = e[r];
                null == o || "all" === o || y(o) || (o = !1 === o || "none" === o ? [] : [o]), n(t, function (e, n) {
                    if (null == o || "all" === o || -1 !== l(o, n)) {
                        var a = {type: "select", $fromToolbox: !0, id: hI + t + n};
                        a[r] = n, i.push(a)
                    }
                })
            }
        }

        function n(e, n) {
            var i = t[e];
            y(i) || (i = i ? [i] : []), uI(i, n)
        }

        if (t) {
            var i = t.dataZoom || (t.dataZoom = []);
            y(i) || (t.dataZoom = i = [i]);
            var r = t.toolbox;
            if (r && (y(r) && (r = r[0]), r && r.feature)) {
                var o = r.feature.dataZoom;
                e("xAxis", o), e("yAxis", o)
            }
        }
    });
    var fI = t_.toolbox.restore;
    up.defaultOption = {
        show: !0,
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: fI.title
    }, up.prototype.onclick = function (t, e, n) {
        np(t), e.dispatchAction({type: "restore", from: this.uid})
    }, Zd("restore", up), _s({type: "restore", event: "restore", update: "prepareAndUpdate"}, function (t, e) {
        e.resetOption("recreate")
    });
    var pI, gI = "urn:schemas-microsoft-com:vml", mI = "undefined" == typeof window ? null : window, vI = !1,
        yI = mI && mI.document;
    if (yI && !Xp.canvasSupported) try {
        !yI.namespaces.zrvml && yI.namespaces.add("zrvml", gI), pI = function (t) {
            return yI.createElement("<zrvml:" + t + ' class="zrvml">')
        }
    } catch (t) {
        pI = function (t) {
            return yI.createElement("<" + t + ' xmlns="' + gI + '" class="zrvml">')
        }
    }
    var xI = Ov.CMD, _I = Math.round, wI = Math.sqrt, bI = Math.abs, SI = Math.cos, MI = Math.sin, II = Math.max;
    if (!Xp.canvasSupported) {
        var TI = 21600, CI = TI / 2, AI = function (t) {
            t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = TI + "," + TI, t.coordorigin = "0,0"
        }, DI = function (t) {
            return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        }, kI = function (t, e, n) {
            return "rgb(" + [t, e, n].join(",") + ")"
        }, PI = function (t, e) {
            e && t && e.parentNode !== t && t.appendChild(e)
        }, LI = function (t, e) {
            e && t && e.parentNode === t && t.removeChild(e)
        }, OI = function (t, e, n) {
            return 1e5 * (parseFloat(t) || 0) + 1e3 * (parseFloat(e) || 0) + n
        }, zI = function (t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }, EI = function (t, e, n) {
            var i = Ot(e);
            n = +n, isNaN(n) && (n = 1), i && (t.color = kI(i[0], i[1], i[2]), t.opacity = n * i[3])
        }, NI = function (t) {
            var e = Ot(t);
            return [kI(e[0], e[1], e[2]), e[3]]
        }, RI = function (t, e, n) {
            var i = e.fill;
            if (null != i) if (i instanceof _y) {
                var r, o = 0, a = [0, 0], s = 0, l = 1, u = n.getBoundingRect(), h = u.width, c = u.height;
                if ("linear" === i.type) {
                    r = "gradient";
                    var d = n.transform, f = [i.x * h, i.y * c], p = [i.x2 * h, i.y2 * c];
                    d && ($(f, f, d), $(p, p, d));
                    var g = p[0] - f[0], m = p[1] - f[1];
                    (o = 180 * Math.atan2(g, m) / Math.PI) < 0 && (o += 360), o < 1e-6 && (o = 0)
                } else {
                    r = "gradientradial";
                    var f = [i.x * h, i.y * c], d = n.transform, v = n.scale, y = h, x = c;
                    a = [(f[0] - u.x) / y, (f[1] - u.y) / x], d && $(f, f, d), y /= v[0] * TI, x /= v[1] * TI;
                    var _ = II(y, x);
                    s = 0 / _, l = 2 * i.r / _ - s
                }
                var w = i.colorStops.slice();
                w.sort(function (t, e) {
                    return t.offset - e.offset
                });
                for (var b = w.length, S = [], M = [], I = 0; I < b; I++) {
                    var T = w[I], C = NI(T.color);
                    M.push(T.offset * l + s + " " + C[0]), 0 !== I && I !== b - 1 || S.push(C)
                }
                if (b >= 2) {
                    var A = S[0][0], D = S[1][0], k = S[0][1] * e.opacity, P = S[1][1] * e.opacity;
                    t.type = r, t.method = "none", t.focus = "100%", t.angle = o, t.color = A, t.color2 = D, t.colors = M.join(","), t.opacity = P, t.opacity2 = k
                }
                "radial" === r && (t.focusposition = a.join(","))
            } else EI(t, i, e.opacity)
        }, BI = function (t, e) {
            null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof _y || EI(t, e.stroke, e.opacity)
        }, FI = function (t, e, n, i) {
            var r = "fill" == e, o = t.getElementsByTagName(e)[0];
            null != n[e] && "none" !== n[e] && (r || !r && n.lineWidth) ? (t[r ? "filled" : "stroked"] = "true", n[e] instanceof _y && LI(t, o), o || (o = hp(e)), r ? RI(o, n, i) : BI(o, n), PI(t, o)) : (t[r ? "filled" : "stroked"] = "false", LI(t, o))
        }, VI = [[], [], []], WI = function (t, e) {
            var n, i, r, o, a, s, l = xI.M, u = xI.C, h = xI.L, c = xI.A, d = xI.Q, f = [], p = t.data, g = t.len();
            for (o = 0; o < g;) {
                switch (r = p[o++], i = "", n = 0, r) {
                    case l:
                        i = " m ", n = 1, a = p[o++], s = p[o++], VI[0][0] = a, VI[0][1] = s;
                        break;
                    case h:
                        i = " l ", n = 1, a = p[o++], s = p[o++], VI[0][0] = a, VI[0][1] = s;
                        break;
                    case d:
                    case u:
                        i = " c ", n = 3;
                        var m, v, y = p[o++], x = p[o++], _ = p[o++], w = p[o++];
                        r === d ? (m = _, v = w, _ = (_ + 2 * y) / 3, w = (w + 2 * x) / 3, y = (a + 2 * y) / 3, x = (s + 2 * x) / 3) : (m = p[o++], v = p[o++]), VI[0][0] = y, VI[0][1] = x, VI[1][0] = _, VI[1][1] = w, VI[2][0] = m, VI[2][1] = v, a = m, s = v;
                        break;
                    case c:
                        var b = 0, S = 0, M = 1, I = 1, T = 0;
                        e && (b = e[4], S = e[5], M = wI(e[0] * e[0] + e[1] * e[1]), I = wI(e[2] * e[2] + e[3] * e[3]), T = Math.atan2(-e[1] / I, e[0] / M));
                        var C = p[o++], A = p[o++], D = p[o++], k = p[o++], P = p[o++] + T, L = p[o++] + P + T;
                        o++;
                        var O = p[o++], z = C + SI(P) * D, E = A + MI(P) * k, y = C + SI(L) * D, x = A + MI(L) * k,
                            N = O ? " wa " : " at ";
                        Math.abs(z - y) < 1e-4 && (Math.abs(L - P) > .01 ? O && (z += .0125) : Math.abs(E - A) < 1e-4 ? O && z < C || !O && z > C ? x -= .0125 : x += .0125 : O && E < A || !O && E > A ? y += .0125 : y -= .0125), f.push(N, _I(((C - D) * M + b) * TI - CI), ",", _I(((A - k) * I + S) * TI - CI), ",", _I(((C + D) * M + b) * TI - CI), ",", _I(((A + k) * I + S) * TI - CI), ",", _I((z * M + b) * TI - CI), ",", _I((E * I + S) * TI - CI), ",", _I((y * M + b) * TI - CI), ",", _I((x * I + S) * TI - CI)), a = y, s = x;
                        break;
                    case xI.R:
                        var R = VI[0], B = VI[1];
                        R[0] = p[o++], R[1] = p[o++], B[0] = R[0] + p[o++], B[1] = R[1] + p[o++], e && ($(R, R, e), $(B, B, e)), R[0] = _I(R[0] * TI - CI), B[0] = _I(B[0] * TI - CI), R[1] = _I(R[1] * TI - CI), B[1] = _I(B[1] * TI - CI), f.push(" m ", R[0], ",", R[1], " l ", B[0], ",", R[1], " l ", B[0], ",", B[1], " l ", R[0], ",", B[1]);
                        break;
                    case xI.Z:
                        f.push(" x ")
                }
                if (n > 0) {
                    f.push(i);
                    for (var F = 0; F < n; F++) {
                        var V = VI[F];
                        e && $(V, V, e), f.push(_I(V[0] * TI - CI), ",", _I(V[1] * TI - CI), F < n - 1 ? "," : "")
                    }
                }
            }
            return f.join("")
        };
        Ii.prototype.brushVML = function (t) {
            var e = this.style, n = this._vmlEl;
            n || (n = hp("shape"), AI(n), this._vmlEl = n), FI(n, "fill", e, this), FI(n, "stroke", e, this);
            var i = this.transform, r = null != i, o = n.getElementsByTagName("stroke")[0];
            if (o) {
                var a = e.lineWidth;
                if (r && !e.strokeNoScale) {
                    var s = i[0] * i[3] - i[1] * i[2];
                    a *= wI(bI(s))
                }
                o.weight = a + "px"
            }
            var l = this.path || (this.path = new Ov);
            this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), n.path = WI(l, this.transform), n.style.zIndex = OI(this.zlevel, this.z, this.z2), PI(t, n), null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
        }, Ii.prototype.onRemove = function (t) {
            LI(t, this._vmlEl), this.removeRectText(t)
        }, Ii.prototype.onAdd = function (t) {
            PI(t, this._vmlEl), this.appendRectText(t)
        };
        var HI = function (t) {
            return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
        };
        an.prototype.brushVML = function (t) {
            var e, n, i = this.style, r = i.image;
            if (HI(r)) {
                var o = r.src;
                if (o === this._imageSrc) e = this._imageWidth, n = this._imageHeight; else {
                    var a = r.runtimeStyle, s = a.width, l = a.height;
                    a.width = "auto", a.height = "auto", e = r.width, n = r.height, a.width = s, a.height = l, this._imageSrc = o, this._imageWidth = e, this._imageHeight = n
                }
                r = o
            } else r === this._imageSrc && (e = this._imageWidth, n = this._imageHeight);
            if (r) {
                var u = i.x || 0, h = i.y || 0, c = i.width, d = i.height, f = i.sWidth, p = i.sHeight, g = i.sx || 0,
                    m = i.sy || 0, v = f && p, y = this._vmlEl;
                y || (y = yI.createElement("div"), AI(y), this._vmlEl = y);
                var x, _ = y.style, w = !1, b = 1, S = 1;
                if (this.transform && (x = this.transform, b = wI(x[0] * x[0] + x[1] * x[1]), S = wI(x[2] * x[2] + x[3] * x[3]), w = x[1] || x[2]), w) {
                    var M = [u, h], I = [u + c, h], T = [u, h + d], C = [u + c, h + d];
                    $(M, M, x), $(I, I, x), $(T, T, x), $(C, C, x);
                    var A = II(M[0], I[0], T[0], C[0]), D = II(M[1], I[1], T[1], C[1]), k = [];
                    k.push("M11=", x[0] / b, ",", "M12=", x[2] / S, ",", "M21=", x[1] / b, ",", "M22=", x[3] / S, ",", "Dx=", _I(u * b + x[4]), ",", "Dy=", _I(h * S + x[5])), _.padding = "0 " + _I(A) + "px " + _I(D) + "px 0", _.filter = "progid:DXImageTransform.Microsoft.Matrix(" + k.join("") + ", SizingMethod=clip)"
                } else x && (u = u * b + x[4], h = h * S + x[5]), _.filter = "", _.left = _I(u) + "px", _.top = _I(h) + "px";
                var P = this._imageEl, L = this._cropEl;
                P || (P = yI.createElement("div"), this._imageEl = P);
                var O = P.style;
                if (v) {
                    if (e && n) O.width = _I(b * e * c / f) + "px", O.height = _I(S * n * d / p) + "px"; else {
                        var z = new Image, E = this;
                        z.onload = function () {
                            z.onload = null, e = z.width, n = z.height, O.width = _I(b * e * c / f) + "px", O.height = _I(S * n * d / p) + "px", E._imageWidth = e, E._imageHeight = n, E._imageSrc = r
                        }, z.src = r
                    }
                    L || ((L = yI.createElement("div")).style.overflow = "hidden", this._cropEl = L);
                    var N = L.style;
                    N.width = _I((c + g * c / f) * b), N.height = _I((d + m * d / p) * S), N.filter = "progid:DXImageTransform.Microsoft.Matrix(Dx=" + -g * c / f * b + ",Dy=" + -m * d / p * S + ")", L.parentNode || y.appendChild(L), P.parentNode != L && L.appendChild(P)
                } else O.width = _I(b * c) + "px", O.height = _I(S * d) + "px", y.appendChild(P), L && L.parentNode && (y.removeChild(L), this._cropEl = null);
                var R = "", B = i.opacity;
                B < 1 && (R += ".Alpha(opacity=" + _I(100 * B) + ") "), R += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + r + ", SizingMethod=scale)", O.filter = R, y.style.zIndex = OI(this.zlevel, this.z, this.z2), PI(t, y), null != i.text && this.drawRectText(t, this.getBoundingRect())
            }
        }, an.prototype.onRemove = function (t) {
            LI(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
        }, an.prototype.onAdd = function (t) {
            PI(t, this._vmlEl), this.appendRectText(t)
        };
        var GI, ZI = {}, UI = 0, XI = document.createElement("div"), YI = function (t) {
            var e = ZI[t];
            if (!e) {
                UI > 100 && (UI = 0, ZI = {});
                var n, i = XI.style;
                try {
                    i.font = t, n = i.fontFamily.split(",")[0]
                } catch (t) {
                }
                e = {
                    style: i.fontStyle || "normal",
                    variant: i.fontVariant || "normal",
                    weight: i.fontWeight || "normal",
                    size: 0 | parseFloat(i.fontSize || 12),
                    family: n || "Microsoft YaHei"
                }, ZI[t] = e, UI++
            }
            return e
        };
        !function (t, e) {
            xm[t] = e
        }("measureText", function (t, e) {
            var n = yI;
            GI || ((GI = n.createElement("div")).style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", yI.body.appendChild(GI));
            try {
                GI.style.font = e
            } catch (t) {
            }
            return GI.innerHTML = "", GI.appendChild(n.createTextNode(t)), {width: GI.offsetWidth}
        });
        for (var jI = new re, qI = [Mm, on, an, Ii, ry], $I = 0; $I < qI.length; $I++) {
            var KI = qI[$I].prototype;
            KI.drawRectText = function (t, e, n, i) {
                var r = this.style;
                this.__dirty && Ve(r);
                var o = r.text;
                if (null != o && (o += ""), o) {
                    if (r.rich) {
                        var a = Ne(o, r);
                        o = [];
                        for (var s = 0; s < a.lines.length; s++) {
                            for (var l = a.lines[s].tokens, u = [], h = 0; h < l.length; h++) u.push(l[h].text);
                            o.push(u.join(""))
                        }
                        o = o.join("\n")
                    }
                    var c, d, f = r.textAlign, p = r.textVerticalAlign, g = YI(r.font),
                        m = g.style + " " + g.variant + " " + g.weight + " " + g.size + 'px "' + g.family + '"';
                    n = n || Se(o, m, f, p);
                    var v = this.transform;
                    if (v && !i && (jI.copy(e), jI.applyTransform(v), e = jI), i) c = e.x, d = e.y; else {
                        var y = r.textPosition, x = r.textDistance;
                        if (y instanceof Array) c = e.x + zI(y[0], e.width), d = e.y + zI(y[1], e.height), f = f || "left"; else {
                            var _ = Ae(y, e, x);
                            c = _.x, d = _.y, f = f || _.textAlign, p = p || _.textVerticalAlign
                        }
                    }
                    c = Te(c, n.width, f), d = Ce(d, n.height, p), d += n.height / 2;
                    var w, b, S, M = hp, I = this._textVmlEl;
                    I ? b = (w = (S = I.firstChild).nextSibling).nextSibling : (I = M("line"), w = M("path"), b = M("textpath"), S = M("skew"), b.style["v-text-align"] = "left", AI(I), w.textpathok = !0, b.on = !0, I.from = "0 0", I.to = "1000 0.05", PI(I, S), PI(I, w), PI(I, b), this._textVmlEl = I);
                    var T = [c, d], C = I.style;
                    v && i ? ($(T, T, v), S.on = !0, S.matrix = v[0].toFixed(3) + "," + v[2].toFixed(3) + "," + v[1].toFixed(3) + "," + v[3].toFixed(3) + ",0,0", S.offset = (_I(T[0]) || 0) + "," + (_I(T[1]) || 0), S.origin = "0 0", C.left = "0px", C.top = "0px") : (S.on = !1, C.left = _I(c) + "px", C.top = _I(d) + "px"), b.string = DI(o);
                    try {
                        b.style.font = m
                    } catch (t) {
                    }
                    FI(I, "fill", {fill: r.textFill, opacity: r.opacity}, this), FI(I, "stroke", {
                        stroke: r.textStroke,
                        opacity: r.opacity,
                        lineDash: r.lineDash
                    }, this), I.style.zIndex = OI(this.zlevel, this.z, this.z2), PI(t, I)
                }
            }, KI.removeRectText = function (t) {
                LI(t, this._textVmlEl), this._textVmlEl = null
            }, KI.appendRectText = function (t) {
                PI(t, this._textVmlEl)
            }
        }
        ry.prototype.brushVML = function (t) {
            var e = this.style;
            null != e.text ? this.drawRectText(t, {
                x: e.x || 0,
                y: e.y || 0,
                width: 0,
                height: 0
            }, this.getBoundingRect(), !0) : this.removeRectText(t)
        }, ry.prototype.onRemove = function (t) {
            this.removeRectText(t)
        }, ry.prototype.onAdd = function (t) {
            this.appendRectText(t)
        }
    }
    fp.prototype = {
        constructor: fp, getType: function () {
            return "vml"
        }, getViewportRoot: function () {
            return this._vmlViewport
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0}
        }, refresh: function () {
            var t = this.storage.getDisplayList(!0, !0);
            this._paintList(t)
        }, _paintList: function (t) {
            for (var e = this._vmlRoot, n = 0; n < t.length; n++) {
                var i = t[n];
                i.invisible || i.ignore ? (i.__alreadyNotVisible || i.onRemove(e), i.__alreadyNotVisible = !0) : (i.__alreadyNotVisible && i.onAdd(e), i.__alreadyNotVisible = !1, i.__dirty && (i.beforeBrush && i.beforeBrush(), (i.brushVML || i.brush).call(i, e), i.afterBrush && i.afterBrush())), i.__dirty = !1
            }
            this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
        }, resize: function (t, e) {
            var t = null == t ? this._getWidth() : t, e = null == e ? this._getHeight() : e;
            if (this._width != t || this._height != e) {
                this._width = t, this._height = e;
                var n = this._vmlViewport.style;
                n.width = t + "px", n.height = e + "px"
            }
        }, dispose: function () {
            this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, clear: function () {
            this._vmlViewport && this.root.removeChild(this._vmlViewport)
        }, _getWidth: function () {
            var t = this.root, e = t.currentStyle;
            return (t.clientWidth || dp(e.width)) - dp(e.paddingLeft) - dp(e.paddingRight) | 0
        }, _getHeight: function () {
            var t = this.root, e = t.currentStyle;
            return (t.clientHeight || dp(e.height)) - dp(e.paddingTop) - dp(e.paddingBottom) | 0
        }
    }, d(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
        fp.prototype[t] = pp(t)
    }), bn("vml", fp);
    var QI = "http://www.w3.org/2000/svg", JI = Ov.CMD, tT = Array.prototype.join, eT = "none", nT = Math.round,
        iT = Math.sin, rT = Math.cos, oT = Math.PI, aT = 2 * Math.PI, sT = 180 / oT, lT = 1e-4, uT = {};
    uT.brush = function (t) {
        var e = t.style, n = t.__svgEl;
        n || (n = gp("path"), t.__svgEl = n), t.path || t.createPathProxy();
        var i = t.path;
        if (t.__dirtyPath) {
            i.beginPath(), t.buildPath(i, t.shape), t.__dirtyPath = !1;
            var r = Mp(i);
            r.indexOf("NaN") < 0 && wp(n, "d", r)
        }
        Sp(n, e, !1, t), _p(n, t.transform), null != e.text && fT(t, t.getBoundingRect())
    };
    var hT = {};
    hT.brush = function (t) {
        var e = t.style, n = e.image;
        if (n instanceof HTMLImageElement && (n = n.src), n) {
            var i = e.x || 0, r = e.y || 0, o = e.width, a = e.height, s = t.__svgEl;
            s || (s = gp("image"), t.__svgEl = s), n !== t.__imageSrc && (bp(s, "href", n), t.__imageSrc = n), wp(s, "width", o), wp(s, "height", a), wp(s, "x", i), wp(s, "y", r), _p(s, t.transform), null != e.text && fT(t, t.getBoundingRect())
        }
    };
    var cT = {}, dT = new re, fT = function (t, e, n) {
        var i = t.style;
        t.__dirty && Ve(i);
        var r = i.text;
        if (null != r) {
            r += "";
            var o = t.__textSvgEl;
            o || (o = gp("text"), t.__textSvgEl = o);
            var a, s, l = i.textPosition, u = i.textDistance, h = i.textAlign || "left";
            "number" == typeof i.fontSize && (i.fontSize += "px");
            var c = i.font || [i.fontStyle || "", i.fontWeight || "", i.fontSize || "", i.fontFamily || ""].join(" ") || ym,
                d = Ip(i.textVerticalAlign), f = (n = Se(r, c, h, d)).lineHeight;
            if (l instanceof Array) a = e.x + l[0], s = e.y + l[1]; else {
                var p = Ae(l, e, u);
                a = p.x, s = p.y, d = Ip(p.textVerticalAlign), h = p.textAlign
            }
            wp(o, "alignment-baseline", d), c && (o.style.font = c);
            var g = i.textPadding;
            if (wp(o, "x", a), wp(o, "y", s), Sp(o, i, !0, t), t instanceof ry || t.style.transformText) _p(o, t.transform); else {
                if (t.transform) dT.copy(e), dT.applyTransform(t.transform), e = dT; else {
                    var m = t.transformCoordToGlobal(e.x, e.y);
                    e.x = m[0], e.y = m[1], t.transform = pt(ft())
                }
                var v = i.textOrigin;
                "center" === v ? (a = n.width / 2 + a, s = n.height / 2 + s) : v && (a = v[0] + a, s = v[1] + s);
                var y = -i.textRotation || 0, x = ft();
                yt(x, x, y), vt(x, x, m = [t.transform[4], t.transform[5]]), _p(o, x)
            }
            var _ = r.split("\n"), w = _.length, b = h;
            "left" === b ? (b = "start", g && (a += g[3])) : "right" === b ? (b = "end", g && (a -= g[1])) : "center" === b && (b = "middle", g && (a += (g[3] - g[1]) / 2));
            var S = 0;
            if ("after-edge" === d ? (S = -n.height + f, g && (S -= g[2])) : "middle" === d ? (S = (-n.height + f) / 2, g && (s += (g[0] - g[2]) / 2)) : g && (S += g[0]), t.__text !== r || t.__textFont !== c) {
                var M = t.__tspanList || [];
                t.__tspanList = M;
                for (T = 0; T < w; T++) (C = M[T]) ? C.innerHTML = "" : (C = M[T] = gp("tspan"), o.appendChild(C), wp(C, "alignment-baseline", d), wp(C, "text-anchor", b)), wp(C, "x", a), wp(C, "y", s + T * f + S), C.appendChild(document.createTextNode(_[T]));
                for (; T < M.length; T++) o.removeChild(M[T]);
                M.length = w, t.__text = r, t.__textFont = c
            } else if (t.__tspanList.length) for (var I = t.__tspanList.length, T = 0; T < I; ++T) {
                var C = t.__tspanList[T];
                C && (wp(C, "x", a), wp(C, "y", s + T * f + S))
            }
        }
    };
    cT.drawRectText = fT, cT.brush = function (t) {
        var e = t.style;
        null != e.text && (e.textPosition = [0, 0], fT(t, {
            x: e.x || 0,
            y: e.y || 0,
            width: 0,
            height: 0
        }, t.getBoundingRect()))
    }, Tp.prototype = {
        diff: function (t, e, n) {
            n || (n = function (t, e) {
                return t === e
            }), this.equals = n;
            var i = this;
            t = t.slice();
            var r = (e = e.slice()).length, o = t.length, a = 1, s = r + o, l = [{newPos: -1, components: []}],
                u = this.extractCommon(l[0], e, t, 0);
            if (l[0].newPos + 1 >= r && u + 1 >= o) {
                for (var h = [], c = 0; c < e.length; c++) h.push(c);
                return [{indices: h, count: e.length}]
            }
            for (; a <= s;) {
                var d = function () {
                    for (var n = -1 * a; n <= a; n += 2) {
                        var s, u = l[n - 1], h = l[n + 1], c = (h ? h.newPos : 0) - n;
                        u && (l[n - 1] = void 0);
                        var d = u && u.newPos + 1 < r, f = h && 0 <= c && c < o;
                        if (d || f) {
                            if (!d || f && u.newPos < h.newPos ? (s = Ap(h), i.pushComponent(s.components, void 0, !0)) : ((s = u).newPos++, i.pushComponent(s.components, !0, void 0)), c = i.extractCommon(s, e, t, n), s.newPos + 1 >= r && c + 1 >= o) return Cp(0, s.components);
                            l[n] = s
                        } else l[n] = void 0
                    }
                    a++
                }();
                if (d) return d
            }
        }, pushComponent: function (t, e, n) {
            var i = t[t.length - 1];
            i && i.added === e && i.removed === n ? t[t.length - 1] = {
                count: i.count + 1,
                added: e,
                removed: n
            } : t.push({count: 1, added: e, removed: n})
        }, extractCommon: function (t, e, n, i) {
            for (var r = e.length, o = n.length, a = t.newPos, s = a - i, l = 0; a + 1 < r && s + 1 < o && this.equals(e[a + 1], n[s + 1]);) a++, s++, l++;
            return l && t.components.push({count: l}), t.newPos = a, s
        }, tokenize: function (t) {
            return t.slice()
        }, join: function (t) {
            return t.slice()
        }
    };
    var pT = new Tp, gT = function (t, e, n) {
        return pT.diff(t, e, n)
    };
    Dp.prototype.createElement = gp, Dp.prototype.getDefs = function (t) {
        var e = this._svgRoot, n = this._svgRoot.getElementsByTagName("defs");
        return 0 === n.length ? t ? ((n = e.insertBefore(this.createElement("defs"), e.firstChild)).contains || (n.contains = function (t) {
            var e = n.children;
            if (!e) return !1;
            for (var i = e.length - 1; i >= 0; --i) if (e[i] === t) return !0;
            return !1
        }), n) : null : n[0]
    }, Dp.prototype.update = function (t, e) {
        if (t) {
            var n = this.getDefs(!1);
            if (t[this._domName] && n.contains(t[this._domName])) "function" == typeof e && e(t); else {
                var i = this.add(t);
                i && (t[this._domName] = i)
            }
        }
    }, Dp.prototype.addDom = function (t) {
        this.getDefs(!0).appendChild(t)
    }, Dp.prototype.removeDom = function (t) {
        var e = this.getDefs(!1);
        e && t[this._domName] && (e.removeChild(t[this._domName]), t[this._domName] = null)
    }, Dp.prototype.getDoms = function () {
        var t = this.getDefs(!1);
        if (!t) return [];
        var e = [];
        return d(this._tagNames, function (n) {
            var i = t.getElementsByTagName(n);
            e = e.concat([].slice.call(i))
        }), e
    }, Dp.prototype.markAllUnused = function () {
        var t = this;
        d(this.getDoms(), function (e) {
            e[t._markLabel] = "0"
        })
    }, Dp.prototype.markUsed = function (t) {
        t && (t[this._markLabel] = "1")
    }, Dp.prototype.removeUnused = function () {
        var t = this.getDefs(!1);
        if (t) {
            var e = this;
            d(this.getDoms(), function (n) {
                "1" !== n[e._markLabel] && t.removeChild(n)
            })
        }
    }, Dp.prototype.getSvgProxy = function (t) {
        return t instanceof Ii ? uT : t instanceof an ? hT : t instanceof ry ? cT : uT
    }, Dp.prototype.getTextSvgElement = function (t) {
        return t.__textSvgEl
    }, Dp.prototype.getSvgElement = function (t) {
        return t.__svgEl
    }, u(kp, Dp), kp.prototype.addWithoutUpdate = function (t, e) {
        if (e && e.style) {
            var n = this;
            d(["fill", "stroke"], function (i) {
                if (e.style[i] && ("linear" === e.style[i].type || "radial" === e.style[i].type)) {
                    var r, o = e.style[i], a = n.getDefs(!0);
                    o._dom ? (r = o._dom, a.contains(o._dom) || n.addDom(r)) : r = n.add(o), n.markUsed(e);
                    var s = r.getAttribute("id");
                    t.setAttribute(i, "url(#" + s + ")")
                }
            })
        }
    }, kp.prototype.add = function (t) {
        var e;
        if ("linear" === t.type) e = this.createElement("linearGradient"); else {
            if ("radial" !== t.type) return Yg("Illegal gradient type."), null;
            e = this.createElement("radialGradient")
        }
        return t.id = t.id || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-gradient-" + t.id), this.updateDom(t, e), this.addDom(e), e
    }, kp.prototype.update = function (t) {
        var e = this;
        Dp.prototype.update.call(this, t, function () {
            var n = t.type, i = t._dom.tagName;
            "linear" === n && "linearGradient" === i || "radial" === n && "radialGradient" === i ? e.updateDom(t, t._dom) : (e.removeDom(t), e.add(t))
        })
    }, kp.prototype.updateDom = function (t, e) {
        if ("linear" === t.type) e.setAttribute("x1", t.x), e.setAttribute("y1", t.y), e.setAttribute("x2", t.x2), e.setAttribute("y2", t.y2); else {
            if ("radial" !== t.type) return void Yg("Illegal gradient type.");
            e.setAttribute("cx", t.x), e.setAttribute("cy", t.y), e.setAttribute("r", t.r)
        }
        t.global ? e.setAttribute("gradientUnits", "userSpaceOnUse") : e.setAttribute("gradientUnits", "objectBoundingBox"), e.innerHTML = "";
        for (var n = t.colorStops, i = 0, r = n.length; i < r; ++i) {
            var o = this.createElement("stop");
            o.setAttribute("offset", 100 * n[i].offset + "%"), o.setAttribute("stop-color", n[i].color), e.appendChild(o)
        }
        t._dom = e
    }, kp.prototype.markUsed = function (t) {
        if (t.style) {
            var e = t.style.fill;
            e && e._dom && Dp.prototype.markUsed.call(this, e._dom), (e = t.style.stroke) && e._dom && Dp.prototype.markUsed.call(this, e._dom)
        }
    }, u(Pp, Dp), Pp.prototype.update = function (t) {
        var e = this.getSvgElement(t);
        e && this.updateDom(e, t.__clipPaths, !1);
        var n = this.getTextSvgElement(t);
        n && this.updateDom(n, t.__clipPaths, !0), this.markUsed(t)
    }, Pp.prototype.updateDom = function (t, e, n) {
        if (e && e.length > 0) {
            var i, r, o = this.getDefs(!0), a = e[0], s = n ? "_textDom" : "_dom";
            a[s] ? (r = a[s].getAttribute("id"), i = a[s], o.contains(i) || o.appendChild(i)) : (r = "zr" + this._zrId + "-clip-" + this.nextId, ++this.nextId, (i = this.createElement("clipPath")).setAttribute("id", r), o.appendChild(i), a[s] = i);
            var l = this.getSvgProxy(a);
            if (a.transform && a.parent.invTransform && !n) {
                var u = Array.prototype.slice.call(a.transform);
                mt(a.transform, a.parent.invTransform, a.transform), l.brush(a), a.transform = u
            } else l.brush(a);
            var h = this.getSvgElement(a);
            i.innerHTML = "", i.appendChild(h.cloneNode()), t.setAttribute("clip-path", "url(#" + r + ")"), e.length > 1 && this.updateDom(i, e.slice(1), n)
        } else t && t.setAttribute("clip-path", "none")
    }, Pp.prototype.markUsed = function (t) {
        var e = this;
        t.__clipPaths && t.__clipPaths.length > 0 && d(t.__clipPaths, function (t) {
            t._dom && Dp.prototype.markUsed.call(e, t._dom), t._textDom && Dp.prototype.markUsed.call(e, t._textDom)
        })
    }, u(Lp, Dp), Lp.prototype.addWithoutUpdate = function (t, e) {
        if (e && Op(e.style)) {
            var n, i = e.style;
            i._shadowDom ? (n = i._shadowDom, this.getDefs(!0).contains(i._shadowDom) || this.addDom(n)) : n = this.add(e), this.markUsed(e);
            var r = n.getAttribute("id");
            t.style.filter = "url(#" + r + ")"
        }
    }, Lp.prototype.add = function (t) {
        var e = this.createElement("filter"), n = t.style;
        return n._shadowDomId = n._shadowDomId || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-shadow-" + n._shadowDomId), this.updateDom(t, e), this.addDom(e), e
    }, Lp.prototype.update = function (t, e) {
        var n = e.style;
        if (Op(n)) {
            var i = this;
            Dp.prototype.update.call(this, e, function (t) {
                i.updateDom(e, t._shadowDom)
            })
        } else this.remove(t, n)
    }, Lp.prototype.remove = function (t, e) {
        null != e._shadowDomId && (this.removeDom(e), t.style.filter = "")
    }, Lp.prototype.updateDom = function (t, e) {
        var n = e.getElementsByTagName("feDropShadow");
        n = 0 === n.length ? this.createElement("feDropShadow") : n[0];
        var i, r, o, a, s = t.style, l = t.scale ? t.scale[0] || 1 : 1, u = t.scale ? t.scale[1] || 1 : 1;
        if (s.shadowBlur || s.shadowOffsetX || s.shadowOffsetY) i = s.shadowOffsetX || 0, r = s.shadowOffsetY || 0, o = s.shadowBlur, a = s.shadowColor; else {
            if (!s.textShadowBlur) return void this.removeDom(e, s);
            i = s.textShadowOffsetX || 0, r = s.textShadowOffsetY || 0, o = s.textShadowBlur, a = s.textShadowColor
        }
        n.setAttribute("dx", i / l), n.setAttribute("dy", r / u), n.setAttribute("flood-color", a);
        var h = o / 2 / l + " " + o / 2 / u;
        n.setAttribute("stdDeviation", h), e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", Math.ceil(o / 2 * 200) + "%"), e.setAttribute("height", Math.ceil(o / 2 * 200) + "%"), e.appendChild(n), s._shadowDom = e
    }, Lp.prototype.markUsed = function (t) {
        var e = t.style;
        e && e._shadowDom && Dp.prototype.markUsed.call(this, e._shadowDom)
    };
    var mT = function (t, e, n, i) {
        this.root = t, this.storage = e, this._opts = n = o({}, n || {});
        var r = gp("svg");
        r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("version", "1.1"), r.setAttribute("baseProfile", "full"), r.style.cssText = "user-select:none;position:absolute;left:0;top:0;", this.gradientManager = new kp(i, r), this.clipPathManager = new Pp(i, r), this.shadowManager = new Lp(i, r);
        var a = document.createElement("div");
        a.style.cssText = "overflow:hidden;position:relative", this._svgRoot = r, this._viewport = a, t.appendChild(a), a.appendChild(r), this.resize(n.width, n.height), this._visibleList = []
    };
    mT.prototype = {
        constructor: mT, getType: function () {
            return "svg"
        }, getViewportRoot: function () {
            return this._viewport
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0}
        }, refresh: function () {
            var t = this.storage.getDisplayList(!0);
            this._paintList(t)
        }, setBackgroundColor: function (t) {
            this._viewport.style.background = t
        }, _paintList: function (t) {
            this.gradientManager.markAllUnused(), this.clipPathManager.markAllUnused(), this.shadowManager.markAllUnused();
            var e, n = this._svgRoot, i = this._visibleList, r = t.length, o = [];
            for (e = 0; e < r; e++) {
                var a = Ep(f = t[e]), s = Wp(f) || Vp(f);
                f.invisible || (f.__dirty && (a && a.brush(f), this.clipPathManager.update(f), f.style && (this.gradientManager.update(f.style.fill), this.gradientManager.update(f.style.stroke), this.shadowManager.update(s, f)), f.__dirty = !1), o.push(f))
            }
            var l, u = gT(i, o);
            for (e = 0; e < u.length; e++) if ((c = u[e]).removed) for (d = 0; d < c.count; d++) {
                var s = Wp(f = i[c.indices[d]]), h = Vp(f);
                Fp(n, s), Fp(n, h)
            }
            for (e = 0; e < u.length; e++) {
                var c = u[e];
                if (c.added) for (d = 0; d < c.count; d++) {
                    var s = Wp(f = o[c.indices[d]]), h = Vp(f);
                    l ? Rp(n, s, l) : Bp(n, s), s ? Rp(n, h, s) : l ? Rp(n, h, l) : Bp(n, h), Rp(n, h, s), l = h || s || l, this.gradientManager.addWithoutUpdate(s, f), this.shadowManager.addWithoutUpdate(l, f), this.clipPathManager.markUsed(f)
                } else if (!c.removed) for (var d = 0; d < c.count; d++) {
                    var f = o[c.indices[d]];
                    l = s = Vp(f) || Wp(f) || l, this.gradientManager.markUsed(f), this.gradientManager.addWithoutUpdate(s, f), this.shadowManager.markUsed(f), this.shadowManager.addWithoutUpdate(s, f), this.clipPathManager.markUsed(f)
                }
            }
            this.gradientManager.removeUnused(), this.clipPathManager.removeUnused(), this.shadowManager.removeUnused(), this._visibleList = o
        }, _getDefs: function (t) {
            var e = this._svgRoot, n = this._svgRoot.getElementsByTagName("defs");
            return 0 === n.length ? t ? ((n = e.insertBefore(gp("defs"), e.firstChild)).contains || (n.contains = function (t) {
                var e = n.children;
                if (!e) return !1;
                for (var i = e.length - 1; i >= 0; --i) if (e[i] === t) return !0;
                return !1
            }), n) : null : n[0]
        }, resize: function (t, e) {
            var n = this._viewport;
            n.style.display = "none";
            var i = this._opts;
            if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || this._height !== e) {
                this._width = t, this._height = e;
                var r = n.style;
                r.width = t + "px", r.height = e + "px";
                var o = this._svgRoot;
                o.setAttribute("width", t), o.setAttribute("height", e)
            }
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var a = this.root, s = document.defaultView.getComputedStyle(a);
            return (a[i] || zp(s[n]) || zp(a.style[n])) - (zp(s[r]) || 0) - (zp(s[o]) || 0) | 0
        }, dispose: function () {
            this.root.innerHTML = "", this._svgRoot = this._viewport = this.storage = null
        }, clear: function () {
            this._viewport && this.root.removeChild(this._viewport)
        }, pathToDataUrl: function () {
            return this.refresh(), "data:image/svg+xml;charset=UTF-8," + this._svgRoot.outerHTML
        }
    }, d(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
        mT.prototype[t] = Hp(t)
    }), bn("svg", mT), t.version = "4.2.0", t.dependencies = D_, t.PRIORITY = O_, t.init = function (t, e, n) {
        var i = ms(t);
        if (i) return i;
        var r = new ja(t, e, n);
        return r.id = "ec_" + $_++, j_[r.id] = r, Nn(t, Q_, r.id), ps(r), r
    }, t.connect = function (t) {
        if (y(t)) {
            var e = t;
            t = null, I_(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + K_++, I_(e, function (e) {
                e.group = t
            })
        }
        return q_[t] = !0, t
    }, t.disConnect = gs, t.disconnect = J_, t.dispose = function (t) {
        "string" == typeof t ? t = j_[t] : t instanceof ja || (t = ms(t)), t instanceof ja && !t.isDisposed() && t.dispose()
    }, t.getInstanceByDom = ms, t.getInstanceById = function (t) {
        return j_[t]
    }, t.registerTheme = vs, t.registerPreprocessor = ys, t.registerProcessor = xs, t.registerPostUpdate = function (t) {
        Z_.push(t)
    }, t.registerAction = _s, t.registerCoordinateSystem = function (t, e) {
        Co.register(t, e)
    }, t.getCoordinateSystemDimensions = function (t) {
        var e = Co.get(t);
        if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
    }, t.registerLayout = ws, t.registerVisual = bs, t.registerLoading = Ms, t.extendComponentModel = Is, t.extendComponentView = Ts, t.extendSeriesModel = Cs, t.extendChartView = As, t.setCanvasCreator = function (t) {
        e("createCanvas", t)
    }, t.registerMap = function (t, e, n) {
        b_.registerMap(t, e, n)
    }, t.getMap = function (t) {
        var e = b_.retrieveMap(t);
        return e && e[0] && {geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas}
    }, t.dataTool = tw, t.zrender = Wm, t.number = Vy, t.format = jy, t.throttle = ya, t.helper = Xw, t.matrix = bg, t.vector = dg, t.color = Wg, t.parseGeoJSON = jw, t.parseGeoJson = Qw, t.util = Jw, t.graphic = tb, t.List = uw, t.Model = Sr, t.Axis = Kw, t.env = Xp
});
