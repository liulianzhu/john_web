function bbasetab(e, t, n) {
    var a = this._getObject(e, ["cur", "items"]);
    this._require(["BbaseTab"], function(e) {
        var o = a.viewId;
        this._region(o, e, {
            el: this.$(t),
            tpl: a.tpl || '<a href="javascript:;">{{text}}</a>',
            toolTip: a.toolTip,
            cur: this._get(a.cur) || a["default"] || a.cur,
            require: a.require || !0,
            theme: n || a.theme || "tab-ul-text",
            path: a.path || "value",
            direction: a.direction || "h",
            contSelector: a.contSelector,
            args: {},
            items: this._get(a.items) || [],
            onChange: BbaseEst.proxy(function(e, t, n, o) {
                return "undefined" == typeof this.model.attributes[a.cur] || BbaseEst.isEmpty(a.cur) || t || this._set(a.cur, e.value),
                a.onChange ? a.onChange.apply(this, [e, t, n, o]) : void 0
            }, this),
            handleClick: this._bind(function(e, t) {
                a.handleClick && a.handleClick.call(this, e, t)
            }),
            postData: a.postData
        }),
        "undefined" == typeof this.model.attributes[a.cur] || BbaseEst.isEmpty(a.cur) || this._watch([a.cur], "", function() {
            this._view(o).setValue(this._get(a.cur))
        }),
        this._watch([a.items], "", function() {
            this._view(o).setList(this._get(a.items))
        })
    })
}
function bbaseItemCheck(e, t, n) {
    var a = this._getObject(e, ["cur", "items"]);
    this._require(["BbaseItemCheck"], function(e) {
        var o = a.viewId
          , i = !1
          , l = !1;
        "checkbox" === n && (i = !0,
        l = !0),
        this._region(o, e, {
            el: this.$(t),
            tpl: a.tpl || '<span bb-watch="text:html">{{text}}</span>',
            theme: "ui-item-check-" + (a.theme || n),
            target: a.target || "",
            path: a.path || "value",
            cur: this._get(a.cur) || a["default"] || a.cur,
            checkAppend: "boolean" === BbaseEst.typeOf(a.append) ? a.append : i,
            checkToggle: "boolean" === BbaseEst.typeOf(a.toggle) ? a.toggle : l,
            items: this._get(a.items) || [],
            compare: a.compare,
            onShow: a.onShow,
            onChange: this._bind(function(e, t, o, i) {
                return "undefined" == typeof this._get(a.cur) || BbaseEst.isEmpty(a.cur) || t || this._set(a.cur, "checkbox" === n ? i : e.value),
                a.onChange ? a.onChange.apply(this, [e, t, o, i]) : void 0
            }),
            onClick: this._bind(function(e, t, n, o) {
                a.onClick && a.onClick.apply(this, [e, t, n, o])
            })
        }),
        "undefined" == typeof this.model.attributes[a.cur] || BbaseEst.isEmpty(a.cur) || this._watch([a.cur], "", function() {
            this._view(o).setValue(this._get(a.cur))
        }),
        this._watch([a.items], "", function() {
            this._view(o).setList(this._get(a.items))
        })
    })
}
function baseBbaseDropdown(e, t, n) {
    this._require(["BbaseDropDown"], function(a) {
        var o = this
          , i = this._getObject(e, "cur")
          , l = i.viewId;
        this._region(l, a, {
            el: "body",
            append: !0,
            target: t,
            postData: i.postData,
            content: i.content,
            moduleId: i.moduleId,
            mouseFollow: i.mouseFollow,
            mouseHover: i.mouseHover,
            data: i.data || {},
            width: i.width,
            showClose: i.showClose,
            top: i.top,
            lazy: i.lazy,
            lazyLoad: i.lazyLoad,
            align: i.align,
            items: i.items,
            className: i.className,
            theme: n,
            onReady: function() {
                i.onReady && i.onReady.call(o)
            },
            onShow: function() {
                i.onShow && i.onShow.call(o)
            }
        })
    })
}
if (!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function a(e, t, n) {
        if (it.isFunction(t))
            return it.grep(e, function(e, a) {
                return !!t.call(e, a, e) !== n
            });
        if (t.nodeType)
            return it.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (bt.test(t))
                return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function i(e) {
        var t = {};
        return it.each(e.match(yt) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function l() {
        J.removeEventListener("DOMContentLoaded", l),
        e.removeEventListener("load", l),
        it.ready()
    }
    function r() {
        this.expando = it.expando + r.uid++
    }
    function c(e, t, n) {
        var a;
        if (void 0 === n && 1 === e.nodeType)
            if (a = "data-" + t.replace(At, "-$&").toLowerCase(),
            n = e.getAttribute(a),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : jt.test(n) ? it.parseJSON(n) : n
                } catch (o) {}
                kt.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function s(e, t, n, a) {
        var o, i = 1, l = 20, r = a ? function() {
            return a.cur()
        }
        : function() {
            return it.css(e, t, "")
        }
        , c = r(), s = n && n[3] || (it.cssNumber[t] ? "" : "px"), u = (it.cssNumber[t] || "px" !== s && +c) && St.exec(it.css(e, t));
        if (u && u[3] !== s) {
            s = s || u[3],
            n = n || [],
            u = +c || 1;
            do
                i = i || ".5",
                u /= i,
                it.style(e, t, u + s);
            while (i !== (i = r() / c) && 1 !== i && --l)
        }
        return n && (u = +u || +c || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        a && (a.unit = s,
        a.start = u,
        a.end = o)),
        o
    }
    function u(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], n) : n
    }
    function p(e, t) {
        for (var n = 0, a = e.length; a > n; n++)
            Tt.set(e[n], "globalEval", !t || Tt.get(t[n], "globalEval"))
    }
    function d(e, t, n, a, o) {
        for (var i, l, r, c, s, d, h = t.createDocumentFragment(), f = [], b = 0, v = e.length; v > b; b++)
            if (i = e[b],
            i || 0 === i)
                if ("object" === it.type(i))
                    it.merge(f, i.nodeType ? [i] : i);
                else if (Pt.test(i)) {
                    for (l = l || h.appendChild(t.createElement("div")),
                    r = ($t.exec(i) || ["", ""])[1].toLowerCase(),
                    c = Nt[r] || Nt._default,
                    l.innerHTML = c[1] + it.htmlPrefilter(i) + c[2],
                    d = c[0]; d--; )
                        l = l.lastChild;
                    it.merge(f, l.childNodes),
                    l = h.firstChild,
                    l.textContent = ""
                } else
                    f.push(t.createTextNode(i));
        for (h.textContent = "",
        b = 0; i = f[b++]; )
            if (a && it.inArray(i, a) > -1)
                o && o.push(i);
            else if (s = it.contains(i.ownerDocument, i),
            l = u(h.appendChild(i), "script"),
            s && p(l),
            n)
                for (d = 0; i = l[d++]; )
                    Bt.test(i.type || "") && n.push(i);
        return h
    }
    function h() {
        return !0
    }
    function f() {
        return !1
    }
    function b() {
        try {
            return J.activeElement
        } catch (e) {}
    }
    function v(e, t, n, a, o, i) {
        var l, r;
        if ("object" == typeof t) {
            "string" != typeof n && (a = a || n,
            n = void 0);
            for (r in t)
                v(e, r, n, a, t[r], i);
            return e
        }
        if (null == a && null == o ? (o = n,
        a = n = void 0) : null == o && ("string" == typeof n ? (o = a,
        a = void 0) : (o = a,
        a = n,
        n = void 0)),
        o === !1)
            o = f;
        else if (!o)
            return e;
        return 1 === i && (l = o,
        o = function(e) {
            return it().off(e),
            l.apply(this, arguments)
        }
        ,
        o.guid = l.guid || (l.guid = it.guid++)),
        e.each(function() {
            it.event.add(this, t, o, a, n)
        })
    }
    function g(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function m(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function x(e) {
        var t = Ht.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        var n, a, o, i, l, r, c, s;
        if (1 === t.nodeType) {
            if (Tt.hasData(e) && (i = Tt.access(e),
            l = Tt.set(t, i),
            s = i.events)) {
                delete l.handle,
                l.events = {};
                for (o in s)
                    for (n = 0,
                    a = s[o].length; a > n; n++)
                        it.event.add(t, o, s[o][n])
            }
            kt.hasData(e) && (r = kt.access(e),
            c = it.extend({}, r),
            kt.set(t, c))
        }
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ot.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function I(e, t, n, a) {
        t = Y.apply([], t);
        var o, i, l, r, c, s, p = 0, h = e.length, f = h - 1, b = t[0], v = it.isFunction(b);
        if (v || h > 1 && "string" == typeof b && !at.checkClone && zt.test(b))
            return e.each(function(o) {
                var i = e.eq(o);
                v && (t[0] = b.call(this, o, i.html())),
                I(i, t, n, a)
            });
        if (h && (o = d(t, e[0].ownerDocument, !1, e, a),
        i = o.firstChild,
        1 === o.childNodes.length && (o = i),
        i || a)) {
            for (l = it.map(u(o, "script"), m),
            r = l.length; h > p; p++)
                c = o,
                p !== f && (c = it.clone(c, !0, !0),
                r && it.merge(l, u(c, "script"))),
                n.call(e[p], c, p);
            if (r)
                for (s = l[l.length - 1].ownerDocument,
                it.map(l, x),
                p = 0; r > p; p++)
                    c = l[p],
                    Bt.test(c.type || "") && !Tt.access(c, "globalEval") && it.contains(s, c) && (c.src ? it._evalUrl && it._evalUrl(c.src) : it.globalEval(c.textContent.replace(Vt, "")))
        }
        return e
    }
    function C(e, t, n) {
        for (var a, o = t ? it.filter(t, e) : e, i = 0; null != (a = o[i]); i++)
            n || 1 !== a.nodeType || it.cleanData(u(a)),
            a.parentNode && (n && it.contains(a.ownerDocument, a) && p(u(a, "script")),
            a.parentNode.removeChild(a));
        return e
    }
    function E(e, t) {
        var n = it(t.createElement(e)).appendTo(t.body)
          , a = it.css(n[0], "display");
        return n.detach(),
        a
    }
    function T(e) {
        var t = J
          , n = Qt[e];
        return n || (n = E(e, t),
        "none" !== n && n || (Wt = (Wt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = Wt[0].contentDocument,
        t.write(),
        t.close(),
        n = E(e, t),
        Wt.detach()),
        Qt[e] = n),
        n
    }
    function k(e, t, n) {
        var a, o, i, l, r = e.style;
        return n = n || Xt(e),
        l = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== l && void 0 !== l || it.contains(e.ownerDocument, e) || (l = it.style(e, t)),
        n && !at.pixelMarginRight() && Jt.test(l) && Gt.test(t) && (a = r.width,
        o = r.minWidth,
        i = r.maxWidth,
        r.minWidth = r.maxWidth = r.width = l,
        l = n.width,
        r.width = a,
        r.minWidth = o,
        r.maxWidth = i),
        void 0 !== l ? l + "" : l
    }
    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function A(e) {
        if (e in an)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nn.length; n--; )
            if (e = nn[n] + t,
            e in an)
                return e
    }
    function _(e, t, n) {
        var a = St.exec(t);
        return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
    }
    function S(e, t, n, a, o) {
        for (var i = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, l = 0; 4 > i; i += 2)
            "margin" === n && (l += it.css(e, n + Dt[i], !0, o)),
            a ? ("content" === n && (l -= it.css(e, "padding" + Dt[i], !0, o)),
            "margin" !== n && (l -= it.css(e, "border" + Dt[i] + "Width", !0, o))) : (l += it.css(e, "padding" + Dt[i], !0, o),
            "padding" !== n && (l += it.css(e, "border" + Dt[i] + "Width", !0, o)));
        return l
    }
    function D(e, t, n) {
        var a = !0
          , o = "width" === t ? e.offsetWidth : e.offsetHeight
          , i = Xt(e)
          , l = "border-box" === it.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = k(e, t, i),
            (0 > o || null == o) && (o = e.style[t]),
            Jt.test(o))
                return o;
            a = l && (at.boxSizingReliable() || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + S(e, t, n || (l ? "border" : "content"), a, i) + "px"
    }
    function L(e, t) {
        for (var n, a, o, i = [], l = 0, r = e.length; r > l; l++)
            a = e[l],
            a.style && (i[l] = Tt.get(a, "olddisplay"),
            n = a.style.display,
            t ? (i[l] || "none" !== n || (a.style.display = ""),
            "" === a.style.display && Lt(a) && (i[l] = Tt.access(a, "olddisplay", T(a.nodeName)))) : (o = Lt(a),
            "none" === n && o || Tt.set(a, "olddisplay", o ? n : it.css(a, "display"))));
        for (l = 0; r > l; l++)
            a = e[l],
            a.style && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? i[l] || "" : "none"));
        return e
    }
    function O(e, t, n, a, o) {
        return new O.prototype.init(e,t,n,a,o)
    }
    function $() {
        return e.setTimeout(function() {
            on = void 0
        }),
        on = it.now()
    }
    function B(e, t) {
        var n, a = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > a; a += 2 - t)
            n = Dt[a],
            o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function N(e, t, n) {
        for (var a, o = (q.tweeners[t] || []).concat(q.tweeners["*"]), i = 0, l = o.length; l > i; i++)
            if (a = o[i].call(n, t, e))
                return a
    }
    function P(e, t, n) {
        var a, o, i, l, r, c, s, u, p = this, d = {}, h = e.style, f = e.nodeType && Lt(e), b = Tt.get(e, "fxshow");
        n.queue || (r = it._queueHooks(e, "fx"),
        null == r.unqueued && (r.unqueued = 0,
        c = r.empty.fire,
        r.empty.fire = function() {
            r.unqueued || c()
        }
        ),
        r.unqueued++,
        p.always(function() {
            p.always(function() {
                r.unqueued--,
                it.queue(e, "fx").length || r.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        s = it.css(e, "display"),
        u = "none" === s ? Tt.get(e, "olddisplay") || T(e.nodeName) : s,
        "inline" === u && "none" === it.css(e, "float") && (h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        p.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (a in t)
            if (o = t[a],
            rn.exec(o)) {
                if (delete t[a],
                i = i || "toggle" === o,
                o === (f ? "hide" : "show")) {
                    if ("show" !== o || !b || void 0 === b[a])
                        continue;
                    f = !0
                }
                d[a] = b && b[a] || it.style(e, a)
            } else
                s = void 0;
        if (it.isEmptyObject(d))
            "inline" === ("none" === s ? T(e.nodeName) : s) && (h.display = s);
        else {
            b ? "hidden"in b && (f = b.hidden) : b = Tt.access(e, "fxshow", {}),
            i && (b.hidden = !f),
            f ? it(e).show() : p.done(function() {
                it(e).hide()
            }),
            p.done(function() {
                var t;
                Tt.remove(e, "fxshow");
                for (t in d)
                    it.style(e, t, d[t])
            });
            for (a in d)
                l = N(f ? b[a] : 0, a, p),
                a in b || (b[a] = l.start,
                f && (l.end = l.start,
                l.start = "width" === a || "height" === a ? 1 : 0))
        }
    }
    function F(e, t) {
        var n, a, o, i, l;
        for (n in e)
            if (a = it.camelCase(n),
            o = t[a],
            i = e[n],
            it.isArray(i) && (o = i[1],
            i = e[n] = i[0]),
            n !== a && (e[a] = i,
            delete e[n]),
            l = it.cssHooks[a],
            l && "expand"in l) {
                i = l.expand(i),
                delete e[a];
                for (n in i)
                    n in e || (e[n] = i[n],
                    t[n] = o)
            } else
                t[a] = o
    }
    function q(e, t, n) {
        var a, o, i = 0, l = q.prefilters.length, r = it.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (o)
                return !1;
            for (var t = on || $(), n = Math.max(0, s.startTime + s.duration - t), a = n / s.duration || 0, i = 1 - a, l = 0, c = s.tweens.length; c > l; l++)
                s.tweens[l].run(i);
            return r.notifyWith(e, [s, i, n]),
            1 > i && c ? n : (r.resolveWith(e, [s]),
            !1)
        }, s = r.promise({
            elem: e,
            props: it.extend({}, t),
            opts: it.extend(!0, {
                specialEasing: {},
                easing: it.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: on || $(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var a = it.Tween(e, s.opts, t, n, s.opts.specialEasing[t] || s.opts.easing);
                return s.tweens.push(a),
                a
            },
            stop: function(t) {
                var n = 0
                  , a = t ? s.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; a > n; n++)
                    s.tweens[n].run(1);
                return t ? (r.notifyWith(e, [s, 1, 0]),
                r.resolveWith(e, [s, t])) : r.rejectWith(e, [s, t]),
                this
            }
        }), u = s.props;
        for (F(u, s.opts.specialEasing); l > i; i++)
            if (a = q.prefilters[i].call(s, e, u, s.opts))
                return it.isFunction(a.stop) && (it._queueHooks(s.elem, s.opts.queue).stop = it.proxy(a.stop, a)),
                a;
        return it.map(u, N, s),
        it.isFunction(s.opts.start) && s.opts.start.call(e, s),
        it.fx.timer(it.extend(c, {
            elem: e,
            anim: s,
            queue: s.opts.queue
        })),
        s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always)
    }
    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function R(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var a, o = 0, i = t.toLowerCase().match(yt) || [];
            if (it.isFunction(n))
                for (; a = i[o++]; )
                    "+" === a[0] ? (a = a.slice(1) || "*",
                    (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
        }
    }
    function M(e, t, n, a) {
        function o(r) {
            var c;
            return i[r] = !0,
            it.each(e[r] || [], function(e, r) {
                var s = r(t, n, a);
                return "string" != typeof s || l || i[s] ? l ? !(c = s) : void 0 : (t.dataTypes.unshift(s),
                o(s),
                !1)
            }),
            c
        }
        var i = {}
          , l = e === jn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function z(e, t) {
        var n, a, o = it.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : a || (a = {}))[n] = t[n]);
        return a && it.extend(!0, e, a),
        e
    }
    function H(e, t, n) {
        for (var a, o, i, l, r = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
            void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)
            for (o in r)
                if (r[o] && r[o].test(a)) {
                    c.unshift(o);
                    break
                }
        if (c[0]in n)
            i = c[0];
        else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    i = o;
                    break
                }
                l || (l = o)
            }
            i = i || l
        }
        return i ? (i !== c[0] && c.unshift(i),
        n[i]) : void 0
    }
    function V(e, t, n, a) {
        var o, i, l, r, c, s = {}, u = e.dataTypes.slice();
        if (u[1])
            for (l in e.converters)
                s[l.toLowerCase()] = e.converters[l];
        for (i = u.shift(); i; )
            if (e.responseFields[i] && (n[e.responseFields[i]] = t),
            !c && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            c = i,
            i = u.shift())
                if ("*" === i)
                    i = c;
                else if ("*" !== c && c !== i) {
                    if (l = s[c + " " + i] || s["* " + i],
                    !l)
                        for (o in s)
                            if (r = o.split(" "),
                            r[1] === i && (l = s[c + " " + r[0]] || s["* " + r[0]])) {
                                l === !0 ? l = s[o] : s[o] !== !0 && (i = r[0],
                                u.unshift(r[1]));
                                break
                            }
                    if (l !== !0)
                        if (l && e["throws"])
                            t = l(t);
                        else
                            try {
                                t = l(t)
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: l ? p : "No conversion from " + c + " to " + i
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function W(e, t, n, a) {
        var o;
        if (it.isArray(t))
            it.each(t, function(t, o) {
                n || Dn.test(e) ? a(e, o) : W(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, a)
            });
        else if (n || "object" !== it.type(t))
            a(e, t);
        else
            for (o in t)
                W(e + "[" + o + "]", t[o], n, a)
    }
    function Q(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var G = []
      , J = e.document
      , X = G.slice
      , Y = G.concat
      , K = G.push
      , Z = G.indexOf
      , et = {}
      , tt = et.toString
      , nt = et.hasOwnProperty
      , at = {}
      , ot = "2.2.4"
      , it = function(e, t) {
        return new it.fn.init(e,t)
    }
      , lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , rt = /^-ms-/
      , ct = /-([\da-z])/gi
      , st = function(e, t) {
        return t.toUpperCase()
    };
    it.fn = it.prototype = {
        jquery: ot,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
        },
        pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return it.each(this, e)
        },
        map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: G.sort,
        splice: G.splice
    },
    it.extend = it.fn.extend = function() {
        var e, t, n, a, o, i, l = arguments[0] || {}, r = 1, c = arguments.length, s = !1;
        for ("boolean" == typeof l && (s = l,
        l = arguments[r] || {},
        r++),
        "object" == typeof l || it.isFunction(l) || (l = {}),
        r === c && (l = this,
        r--); c > r; r++)
            if (null != (e = arguments[r]))
                for (t in e)
                    n = l[t],
                    a = e[t],
                    l !== a && (s && a && (it.isPlainObject(a) || (o = it.isArray(a))) ? (o ? (o = !1,
                    i = n && it.isArray(n) ? n : []) : i = n && it.isPlainObject(n) ? n : {},
                    l[t] = it.extend(s, i, a)) : void 0 !== a && (l[t] = a));
        return l
    }
    ,
    it.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === it.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !it.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== it.type(e) || e.nodeType || it.isWindow(e))
                return !1;
            if (e.constructor && !nt.call(e, "constructor") && !nt.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || nt.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[tt.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = it.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"),
            t.text = e,
            J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(rt, "ms-").replace(ct, st)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var a, o = 0;
            if (n(e))
                for (a = e.length; a > o && t.call(e[o], o, e[o]) !== !1; o++)
                    ;
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(lt, "")
        },
        makeArray: function(e, t) {
            var a = t || [];
            return null != e && (n(Object(e)) ? it.merge(a, "string" == typeof e ? [e] : e) : K.call(a, e)),
            a
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, a = 0, o = e.length; n > a; a++)
                e[o++] = t[a];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var a, o = [], i = 0, l = e.length, r = !n; l > i; i++)
                a = !t(e[i], i),
                a !== r && o.push(e[i]);
            return o
        },
        map: function(e, t, a) {
            var o, i, l = 0, r = [];
            if (n(e))
                for (o = e.length; o > l; l++)
                    i = t(e[l], l, a),
                    null != i && r.push(i);
            else
                for (l in e)
                    i = t(e[l], l, a),
                    null != i && r.push(i);
            return Y.apply([], r)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, a, o;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            it.isFunction(e) ? (a = X.call(arguments, 2),
            o = function() {
                return e.apply(t || this, a.concat(X.call(arguments)))
            }
            ,
            o.guid = e.guid = e.guid || it.guid++,
            o) : void 0
        },
        now: Date.now,
        support: at
    }),
    "function" == typeof Symbol && (it.fn[Symbol.iterator] = G[Symbol.iterator]),
    it.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function(e) {
        function t(e, t, n, a) {
            var o, i, l, r, c, s, p, h, f = t && t.ownerDocument, b = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== b && 9 !== b && 11 !== b)
                return n;
            if (!a && ((t ? t.ownerDocument || t : U) !== L && D(t),
            t = t || L,
            $)) {
                if (11 !== b && (s = gt.exec(e)))
                    if (o = s[1]) {
                        if (9 === b) {
                            if (!(l = t.getElementById(o)))
                                return n;
                            if (l.id === o)
                                return n.push(l),
                                n
                        } else if (f && (l = f.getElementById(o)) && F(t, l) && l.id === o)
                            return n.push(l),
                            n
                    } else {
                        if (s[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = s[3]) && y.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (!(!y.qsa || V[e + " "] || B && B.test(e))) {
                    if (1 !== b)
                        f = t,
                        h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((r = t.getAttribute("id")) ? r = r.replace(xt, "\\$&") : t.setAttribute("id", r = q),
                        p = T(e),
                        i = p.length,
                        c = dt.test(r) ? "#" + r : "[id='" + r + "']"; i--; )
                            p[i] = c + " " + d(p[i]);
                        h = p.join(","),
                        f = mt.test(e) && u(t.parentNode) || t
                    }
                    if (h)
                        try {
                            return K.apply(n, f.querySelectorAll(h)),
                            n
                        } catch (v) {} finally {
                            r === q && t.removeAttribute("id")
                        }
                }
            }
            return j(e.replace(rt, "$1"), t, n, a)
        }
        function n() {
            function e(n, a) {
                return t.push(n + " ") > I.cacheLength && delete e[t.shift()],
                e[n + " "] = a
            }
            var t = [];
            return e
        }
        function a(e) {
            return e[q] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function i(e, t) {
            for (var n = e.split("|"), a = n.length; a--; )
                I.attrHandle[n[a]] = t
        }
        function l(e, t) {
            var n = t && e
              , a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (a)
                return a;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function r(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function s(e) {
            return a(function(t) {
                return t = +t,
                a(function(n, a) {
                    for (var o, i = e([], n.length, t), l = i.length; l--; )
                        n[o = i[l]] && (n[o] = !(a[o] = n[o]))
                })
            })
        }
        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function p() {}
        function d(e) {
            for (var t = 0, n = e.length, a = ""; n > t; t++)
                a += e[t].value;
            return a
        }
        function h(e, t, n) {
            var a = t.dir
              , o = n && "parentNode" === a
              , i = M++;
            return t.first ? function(t, n, i) {
                for (; t = t[a]; )
                    if (1 === t.nodeType || o)
                        return e(t, n, i)
            }
            : function(t, n, l) {
                var r, c, s, u = [R, i];
                if (l) {
                    for (; t = t[a]; )
                        if ((1 === t.nodeType || o) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[a]; )
                        if (1 === t.nodeType || o) {
                            if (s = t[q] || (t[q] = {}),
                            c = s[t.uniqueID] || (s[t.uniqueID] = {}),
                            (r = c[a]) && r[0] === R && r[1] === i)
                                return u[2] = r[2];
                            if (c[a] = u,
                            u[2] = e(t, n, l))
                                return !0
                        }
            }
        }
        function f(e) {
            return e.length > 1 ? function(t, n, a) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, a))
                        return !1;
                return !0
            }
            : e[0]
        }
        function b(e, n, a) {
            for (var o = 0, i = n.length; i > o; o++)
                t(e, n[o], a);
            return a
        }
        function v(e, t, n, a, o) {
            for (var i, l = [], r = 0, c = e.length, s = null != t; c > r; r++)
                (i = e[r]) && (n && !n(i, a, o) || (l.push(i),
                s && t.push(r)));
            return l
        }
        function g(e, t, n, o, i, l) {
            return o && !o[q] && (o = g(o)),
            i && !i[q] && (i = g(i, l)),
            a(function(a, l, r, c) {
                var s, u, p, d = [], h = [], f = l.length, g = a || b(t || "*", r.nodeType ? [r] : r, []), m = !e || !a && t ? g : v(g, d, e, r, c), x = n ? i || (a ? e : f || o) ? [] : l : m;
                if (n && n(m, x, r, c),
                o)
                    for (s = v(x, h),
                    o(s, [], r, c),
                    u = s.length; u--; )
                        (p = s[u]) && (x[h[u]] = !(m[h[u]] = p));
                if (a) {
                    if (i || e) {
                        if (i) {
                            for (s = [],
                            u = x.length; u--; )
                                (p = x[u]) && s.push(m[u] = p);
                            i(null, x = [], s, c)
                        }
                        for (u = x.length; u--; )
                            (p = x[u]) && (s = i ? et(a, p) : d[u]) > -1 && (a[s] = !(l[s] = p))
                    }
                } else
                    x = v(x === l ? x.splice(f, x.length) : x),
                    i ? i(null, l, x, c) : K.apply(l, x)
            })
        }
        function m(e) {
            for (var t, n, a, o = e.length, i = I.relative[e[0].type], l = i || I.relative[" "], r = i ? 1 : 0, c = h(function(e) {
                return e === t
            }, l, !0), s = h(function(e) {
                return et(t, e) > -1
            }, l, !0), u = [function(e, n, a) {
                var o = !i && (a || n !== A) || ((t = n).nodeType ? c(e, n, a) : s(e, n, a));
                return t = null,
                o
            }
            ]; o > r; r++)
                if (n = I.relative[e[r].type])
                    u = [h(f(u), n)];
                else {
                    if (n = I.filter[e[r].type].apply(null, e[r].matches),
                    n[q]) {
                        for (a = ++r; o > a && !I.relative[e[a].type]; a++)
                            ;
                        return g(r > 1 && f(u), r > 1 && d(e.slice(0, r - 1).concat({
                            value: " " === e[r - 2].type ? "*" : ""
                        })).replace(rt, "$1"), n, a > r && m(e.slice(r, a)), o > a && m(e = e.slice(a)), o > a && d(e))
                    }
                    u.push(n)
                }
            return f(u)
        }
        function x(e, n) {
            var o = n.length > 0
              , i = e.length > 0
              , l = function(a, l, r, c, s) {
                var u, p, d, h = 0, f = "0", b = a && [], g = [], m = A, x = a || i && I.find.TAG("*", s), w = R += null == m ? 1 : Math.random() || .1, y = x.length;
                for (s && (A = l === L || l || s); f !== y && null != (u = x[f]); f++) {
                    if (i && u) {
                        for (p = 0,
                        l || u.ownerDocument === L || (D(u),
                        r = !$); d = e[p++]; )
                            if (d(u, l || L, r)) {
                                c.push(u);
                                break
                            }
                        s && (R = w)
                    }
                    o && ((u = !d && u) && h--,
                    a && b.push(u))
                }
                if (h += f,
                o && f !== h) {
                    for (p = 0; d = n[p++]; )
                        d(b, g, l, r);
                    if (a) {
                        if (h > 0)
                            for (; f--; )
                                b[f] || g[f] || (g[f] = X.call(c));
                        g = v(g)
                    }
                    K.apply(c, g),
                    s && !a && g.length > 0 && h + n.length > 1 && t.uniqueSort(c)
                }
                return s && (R = w,
                A = m),
                b
            };
            return o ? a(l) : l
        }
        var w, y, I, C, E, T, k, j, A, _, S, D, L, O, $, B, N, P, F, q = "sizzle" + 1 * new Date, U = e.document, R = 0, M = 0, z = n(), H = n(), V = n(), W = function(e, t) {
            return e === t && (S = !0),
            0
        }, Q = 1 << 31, G = {}.hasOwnProperty, J = [], X = J.pop, Y = J.push, K = J.push, Z = J.slice, et = function(e, t) {
            for (var n = 0, a = e.length; a > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", at = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = "\\[" + nt + "*(" + at + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + nt + "*\\]", it = ":(" + at + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", lt = new RegExp(nt + "+","g"), rt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ct = new RegExp("^" + nt + "*," + nt + "*"), st = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), pt = new RegExp(it), dt = new RegExp("^" + at + "$"), ht = {
            ID: new RegExp("^#(" + at + ")"),
            CLASS: new RegExp("^\\.(" + at + ")"),
            TAG: new RegExp("^(" + at + "|[*])"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + it),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + tt + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, ft = /^(?:input|select|textarea|button)$/i, bt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), yt = function(e, t, n) {
            var a = "0x" + t - 65536;
            return a !== a || n ? t : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
        }, It = function() {
            D()
        };
        try {
            K.apply(J = Z.call(U.childNodes), U.childNodes),
            J[U.childNodes.length].nodeType
        } catch (Ct) {
            K = {
                apply: J.length ? function(e, t) {
                    Y.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, a = 0; e[n++] = t[a++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        y = t.support = {},
        E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        D = t.setDocument = function(e) {
            var t, n, a = e ? e.ownerDocument || e : U;
            return a !== L && 9 === a.nodeType && a.documentElement ? (L = a,
            O = L.documentElement,
            $ = !E(L),
            (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", It, !1) : n.attachEvent && n.attachEvent("onunload", It)),
            y.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            y.getElementsByTagName = o(function(e) {
                return e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            y.getElementsByClassName = vt.test(L.getElementsByClassName),
            y.getById = o(function(e) {
                return O.appendChild(e).id = q,
                !L.getElementsByName || !L.getElementsByName(q).length
            }),
            y.getById ? (I.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && $) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            I.filter.ID = function(e) {
                var t = e.replace(wt, yt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete I.find.ID,
            I.filter.ID = function(e) {
                var t = e.replace(wt, yt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            I.find.TAG = y.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, a = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++]; )
                        1 === n.nodeType && a.push(n);
                    return a
                }
                return i
            }
            ,
            I.find.CLASS = y.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && $ ? t.getElementsByClassName(e) : void 0
            }
            ,
            N = [],
            B = [],
            (y.qsa = vt.test(L.querySelectorAll)) && (o(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + nt + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || B.push("\\[" + nt + "*(?:value|" + tt + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || B.push("~="),
                e.querySelectorAll(":checked").length || B.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || B.push(".#.+[+~]")
            }),
            o(function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && B.push("name" + nt + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                B.push(",.*:")
            })),
            (y.matchesSelector = vt.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
                y.disconnectedMatch = P.call(e, "div"),
                P.call(e, "[s!='']:x"),
                N.push("!=", it)
            }),
            B = B.length && new RegExp(B.join("|")),
            N = N.length && new RegExp(N.join("|")),
            t = vt.test(O.compareDocumentPosition),
            F = t || vt.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , a = t && t.parentNode;
                return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            W = t ? function(e, t) {
                if (e === t)
                    return S = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === U && F(U, e) ? -1 : t === L || t.ownerDocument === U && F(U, t) ? 1 : _ ? et(_, e) - et(_, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return S = !0,
                    0;
                var n, a = 0, o = e.parentNode, i = t.parentNode, r = [e], c = [t];
                if (!o || !i)
                    return e === L ? -1 : t === L ? 1 : o ? -1 : i ? 1 : _ ? et(_, e) - et(_, t) : 0;
                if (o === i)
                    return l(e, t);
                for (n = e; n = n.parentNode; )
                    r.unshift(n);
                for (n = t; n = n.parentNode; )
                    c.unshift(n);
                for (; r[a] === c[a]; )
                    a++;
                return a ? l(r[a], c[a]) : r[a] === U ? -1 : c[a] === U ? 1 : 0
            }
            ,
            L) : L
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && D(e),
            n = n.replace(ut, "='$1']"),
            !(!y.matchesSelector || !$ || V[n + " "] || N && N.test(n) || B && B.test(n)))
                try {
                    var a = P.call(e, n);
                    if (a || y.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return a
                } catch (o) {}
            return t(n, L, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e),
            F(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && D(e);
            var n = I.attrHandle[t.toLowerCase()]
              , a = n && G.call(I.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
            return void 0 !== a ? a : y.attributes || !$ ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], a = 0, o = 0;
            if (S = !y.detectDuplicates,
            _ = !y.sortStable && e.slice(0),
            e.sort(W),
            S) {
                for (; t = e[o++]; )
                    t === e[o] && (a = n.push(o));
                for (; a--; )
                    e.splice(n[a], 1)
            }
            return _ = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, n = "", a = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[a++]; )
                    n += C(t);
            return n
        }
        ,
        I = t.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, yt),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(wt, yt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, yt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, a) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : n ? (i += "",
                        "=" === n ? i === a : "!=" === n ? i !== a : "^=" === n ? a && 0 === i.indexOf(a) : "*=" === n ? a && i.indexOf(a) > -1 : "$=" === n ? a && i.slice(-a.length) === a : "~=" === n ? (" " + i.replace(lt, " ") + " ").indexOf(a) > -1 : "|=" === n ? i === a || i.slice(0, a.length + 1) === a + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, a, o) {
                    var i = "nth" !== e.slice(0, 3)
                      , l = "last" !== e.slice(-4)
                      , r = "of-type" === t;
                    return 1 === a && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, c) {
                        var s, u, p, d, h, f, b = i !== l ? "nextSibling" : "previousSibling", v = t.parentNode, g = r && t.nodeName.toLowerCase(), m = !c && !r, x = !1;
                        if (v) {
                            if (i) {
                                for (; b; ) {
                                    for (d = t; d = d[b]; )
                                        if (r ? d.nodeName.toLowerCase() === g : 1 === d.nodeType)
                                            return !1;
                                    f = b = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [l ? v.firstChild : v.lastChild],
                            l && m) {
                                for (d = v,
                                p = d[q] || (d[q] = {}),
                                u = p[d.uniqueID] || (p[d.uniqueID] = {}),
                                s = u[e] || [],
                                h = s[0] === R && s[1],
                                x = h && s[2],
                                d = h && v.childNodes[h]; d = ++h && d && d[b] || (x = h = 0) || f.pop(); )
                                    if (1 === d.nodeType && ++x && d === t) {
                                        u[e] = [R, h, x];
                                        break
                                    }
                            } else if (m && (d = t,
                            p = d[q] || (d[q] = {}),
                            u = p[d.uniqueID] || (p[d.uniqueID] = {}),
                            s = u[e] || [],
                            h = s[0] === R && s[1],
                            x = h),
                            x === !1)
                                for (; (d = ++h && d && d[b] || (x = h = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++x || (m && (p = d[q] || (d[q] = {}),
                                u = p[d.uniqueID] || (p[d.uniqueID] = {}),
                                u[e] = [R, x]),
                                d !== t)); )
                                    ;
                            return x -= o,
                            x === a || x % a === 0 && x / a >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = I.pseudos[e] || I.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[q] ? i(n) : i.length > 1 ? (o = [e, e, "", n],
                    I.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                        for (var a, o = i(e, n), l = o.length; l--; )
                            a = et(e, o[l]),
                            e[a] = !(t[a] = o[l])
                    }) : function(e) {
                        return i(e, 0, o)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: a(function(e) {
                    var t = []
                      , n = []
                      , o = k(e.replace(rt, "$1"));
                    return o[q] ? a(function(e, t, n, a) {
                        for (var i, l = o(e, null, a, []), r = e.length; r--; )
                            (i = l[r]) && (e[r] = !(t[r] = i))
                    }) : function(e, a, i) {
                        return t[0] = e,
                        o(t, null, i, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: a(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: a(function(e) {
                    return e = e.replace(wt, yt),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: a(function(e) {
                    return dt.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(wt, yt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !I.pseudos.empty(e)
                },
                header: function(e) {
                    return bt.test(e.nodeName)
                },
                input: function(e) {
                    return ft.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var a = 0 > n ? n + t : n; --a >= 0; )
                        e.push(a);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var a = 0 > n ? n + t : n; ++a < t; )
                        e.push(a);
                    return e
                })
            }
        },
        I.pseudos.nth = I.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            I.pseudos[w] = r(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            I.pseudos[w] = c(w);
        return p.prototype = I.filters = I.pseudos,
        I.setFilters = new p,
        T = t.tokenize = function(e, n) {
            var a, o, i, l, r, c, s, u = H[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (r = e,
            c = [],
            s = I.preFilter; r; ) {
                a && !(o = ct.exec(r)) || (o && (r = r.slice(o[0].length) || r),
                c.push(i = [])),
                a = !1,
                (o = st.exec(r)) && (a = o.shift(),
                i.push({
                    value: a,
                    type: o[0].replace(rt, " ")
                }),
                r = r.slice(a.length));
                for (l in I.filter)
                    !(o = ht[l].exec(r)) || s[l] && !(o = s[l](o)) || (a = o.shift(),
                    i.push({
                        value: a,
                        type: l,
                        matches: o
                    }),
                    r = r.slice(a.length));
                if (!a)
                    break
            }
            return n ? r.length : r ? t.error(e) : H(e, c).slice(0)
        }
        ,
        k = t.compile = function(e, t) {
            var n, a = [], o = [], i = V[e + " "];
            if (!i) {
                for (t || (t = T(e)),
                n = t.length; n--; )
                    i = m(t[n]),
                    i[q] ? a.push(i) : o.push(i);
                i = V(e, x(o, a)),
                i.selector = e
            }
            return i
        }
        ,
        j = t.select = function(e, t, n, a) {
            var o, i, l, r, c, s = "function" == typeof e && e, p = !a && T(e = s.selector || e);
            if (n = n || [],
            1 === p.length) {
                if (i = p[0] = p[0].slice(0),
                i.length > 2 && "ID" === (l = i[0]).type && y.getById && 9 === t.nodeType && $ && I.relative[i[1].type]) {
                    if (t = (I.find.ID(l.matches[0].replace(wt, yt), t) || [])[0],
                    !t)
                        return n;
                    s && (t = t.parentNode),
                    e = e.slice(i.shift().value.length)
                }
                for (o = ht.needsContext.test(e) ? 0 : i.length; o-- && (l = i[o],
                !I.relative[r = l.type]); )
                    if ((c = I.find[r]) && (a = c(l.matches[0].replace(wt, yt), mt.test(i[0].type) && u(t.parentNode) || t))) {
                        if (i.splice(o, 1),
                        e = a.length && d(i),
                        !e)
                            return K.apply(n, a),
                            n;
                        break
                    }
            }
            return (s || k(e, p))(a, t, !$, n, !t || mt.test(e) && u(t.parentNode) || t),
            n
        }
        ,
        y.sortStable = q.split("").sort(W).join("") === q,
        y.detectDuplicates = !!S,
        D(),
        y.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        y.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(tt, function(e, t, n) {
            var a;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }),
        t
    }(e);
    it.find = ut,
    it.expr = ut.selectors,
    it.expr[":"] = it.expr.pseudos,
    it.uniqueSort = it.unique = ut.uniqueSort,
    it.text = ut.getText,
    it.isXMLDoc = ut.isXML,
    it.contains = ut.contains;
    var pt = function(e, t, n) {
        for (var a = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && it(e).is(n))
                    break;
                a.push(e)
            }
        return a
    }
      , dt = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , ht = it.expr.match.needsContext
      , ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , bt = /^.[^:#\[\.,]*$/;
    it.filter = function(e, t, n) {
        var a = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === a.nodeType ? it.find.matchesSelector(a, e) ? [a] : [] : it.find.matches(e, it.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    it.fn.extend({
        find: function(e) {
            var t, n = this.length, a = [], o = this;
            if ("string" != typeof e)
                return this.pushStack(it(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (it.contains(o[t], this))
                            return !0
                }));
            for (t = 0; n > t; t++)
                it.find(e, o[t], a);
            return a = this.pushStack(n > 1 ? it.unique(a) : a),
            a.selector = this.selector ? this.selector + " " + e : e,
            a
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && ht.test(e) ? it(e) : e || [], !1).length
        }
    });
    var vt, gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mt = it.fn.init = function(e, t, n) {
        var a, o;
        if (!e)
            return this;
        if (n = n || vt,
        "string" == typeof e) {
            if (a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : gt.exec(e),
            !a || !a[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (a[1]) {
                if (t = t instanceof it ? t[0] : t,
                it.merge(this, it.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                ft.test(a[1]) && it.isPlainObject(t))
                    for (a in t)
                        it.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                return this
            }
            return o = J.getElementById(a[2]),
            o && o.parentNode && (this.length = 1,
            this[0] = o),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : it.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        it.makeArray(e, this))
    }
    ;
    mt.prototype = it.fn,
    vt = it(J);
    var xt = /^(?:parents|prev(?:Until|All))/
      , wt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    it.fn.extend({
        has: function(e) {
            var t = it(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (it.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, a = 0, o = this.length, i = [], l = ht.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; o > a; a++)
                for (n = this[a]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (l ? l.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? it.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(it(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(it.uniqueSort(it.merge(this.get(), it(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    it.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return pt(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return pt(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return pt(e, "nextSibling")
        },
        prevAll: function(e) {
            return pt(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return pt(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return pt(e, "previousSibling", n)
        },
        siblings: function(e) {
            return dt((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return dt(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || it.merge([], e.childNodes)
        }
    }, function(e, t) {
        it.fn[e] = function(n, a) {
            var o = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (a = n),
            a && "string" == typeof a && (o = it.filter(a, o)),
            this.length > 1 && (wt[e] || it.uniqueSort(o),
            xt.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var yt = /\S+/g;
    it.Callbacks = function(e) {
        e = "string" == typeof e ? i(e) : it.extend({}, e);
        var t, n, a, o, l = [], r = [], c = -1, s = function() {
            for (o = e.once,
            a = t = !0; r.length; c = -1)
                for (n = r.shift(); ++c < l.length; )
                    l[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = l.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (l = n ? [] : "")
        }, u = {
            add: function() {
                return l && (n && !t && (c = l.length - 1,
                r.push(n)),
                function a(t) {
                    it.each(t, function(t, n) {
                        it.isFunction(n) ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== it.type(n) && a(n)
                    })
                }(arguments),
                n && !t && s()),
                this
            },
            remove: function() {
                return it.each(arguments, function(e, t) {
                    for (var n; (n = it.inArray(t, l, n)) > -1; )
                        l.splice(n, 1),
                        c >= n && c--
                }),
                this
            },
            has: function(e) {
                return e ? it.inArray(e, l) > -1 : l.length > 0
            },
            empty: function() {
                return l && (l = []),
                this
            },
            disable: function() {
                return o = r = [],
                l = n = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return o = r = [],
                n || (l = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                r.push(n),
                t || s()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return u
    }
    ,
    it.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]]
              , n = "pending"
              , a = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return it.Deferred(function(n) {
                        it.each(t, function(t, i) {
                            var l = it.isFunction(e[t]) && e[t];
                            o[i[1]](function() {
                                var e = l && l.apply(this, arguments);
                                e && it.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === a ? n.promise() : this, l ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? it.extend(e, a) : a
                }
            }
              , o = {};
            return a.pipe = a.then,
            it.each(t, function(e, i) {
                var l = i[2]
                  , r = i[3];
                a[i[1]] = l.add,
                r && l.add(function() {
                    n = r
                }, t[1 ^ e][2].disable, t[2][2].lock),
                o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? a : this, arguments),
                    this
                }
                ,
                o[i[0] + "With"] = l.fireWith
            }),
            a.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, n, a, o = 0, i = X.call(arguments), l = i.length, r = 1 !== l || e && it.isFunction(e.promise) ? l : 0, c = 1 === r ? e : it.Deferred(), s = function(e, n, a) {
                return function(o) {
                    n[e] = this,
                    a[e] = arguments.length > 1 ? X.call(arguments) : o,
                    a === t ? c.notifyWith(n, a) : --r || c.resolveWith(n, a)
                }
            };
            if (l > 1)
                for (t = new Array(l),
                n = new Array(l),
                a = new Array(l); l > o; o++)
                    i[o] && it.isFunction(i[o].promise) ? i[o].promise().progress(s(o, n, t)).done(s(o, a, i)).fail(c.reject) : --r;
            return r || c.resolveWith(a, i),
            c.promise()
        }
    });
    var It;
    it.fn.ready = function(e) {
        return it.ready.promise().done(e),
        this
    }
    ,
    it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? it.readyWait++ : it.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --it.readyWait : it.isReady) || (it.isReady = !0,
            e !== !0 && --it.readyWait > 0 || (It.resolveWith(J, [it]),
            it.fn.triggerHandler && (it(J).triggerHandler("ready"),
            it(J).off("ready"))))
        }
    }),
    it.ready.promise = function(t) {
        return It || (It = it.Deferred(),
        "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? e.setTimeout(it.ready) : (J.addEventListener("DOMContentLoaded", l),
        e.addEventListener("load", l))),
        It.promise(t)
    }
    ,
    it.ready.promise();
    var Ct = function(e, t, n, a, o, i, l) {
        var r = 0
          , c = e.length
          , s = null == n;
        if ("object" === it.type(n)) {
            o = !0;
            for (r in n)
                Ct(e, t, r, n[r], !0, i, l)
        } else if (void 0 !== a && (o = !0,
        it.isFunction(a) || (l = !0),
        s && (l ? (t.call(e, a),
        t = null) : (s = t,
        t = function(e, t, n) {
            return s.call(it(e), n)
        }
        )),
        t))
            for (; c > r; r++)
                t(e[r], n, l ? a : a.call(e[r], r, t(e[r], n)));
        return o ? e : s ? t.call(e) : c ? t(e[0], n) : i
    }
      , Et = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    r.uid = 1,
    r.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!Et(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            Et(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var a, o = this.cache(e);
            if ("string" == typeof t)
                o[t] = n;
            else
                for (a in t)
                    o[a] = t[a];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var a;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (a = this.get(e, t),
            void 0 !== a ? a : this.get(e, it.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, a, o, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 === t)
                    this.register(e);
                else {
                    it.isArray(t) ? a = t.concat(t.map(it.camelCase)) : (o = it.camelCase(t),
                    t in i ? a = [t, o] : (a = o,
                    a = a in i ? [a] : a.match(yt) || [])),
                    n = a.length;
                    for (; n--; )
                        delete i[a[n]]
                }
                (void 0 === t || it.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !it.isEmptyObject(t)
        }
    };
    var Tt = new r
      , kt = new r
      , jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , At = /[A-Z]/g;
    it.extend({
        hasData: function(e) {
            return kt.hasData(e) || Tt.hasData(e)
        },
        data: function(e, t, n) {
            return kt.access(e, t, n)
        },
        removeData: function(e, t) {
            kt.remove(e, t)
        },
        _data: function(e, t, n) {
            return Tt.access(e, t, n)
        },
        _removeData: function(e, t) {
            Tt.remove(e, t)
        }
    }),
    it.fn.extend({
        data: function(e, t) {
            var n, a, o, i = this[0], l = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = kt.get(i),
                1 === i.nodeType && !Tt.get(i, "hasDataAttrs"))) {
                    for (n = l.length; n--; )
                        l[n] && (a = l[n].name,
                        0 === a.indexOf("data-") && (a = it.camelCase(a.slice(5)),
                        c(i, a, o[a])));
                    Tt.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                kt.set(this, e)
            }) : Ct(this, function(t) {
                var n, a;
                if (i && void 0 === t) {
                    if (n = kt.get(i, e) || kt.get(i, e.replace(At, "-$&").toLowerCase()),
                    void 0 !== n)
                        return n;
                    if (a = it.camelCase(e),
                    n = kt.get(i, a),
                    void 0 !== n)
                        return n;
                    if (n = c(i, a, void 0),
                    void 0 !== n)
                        return n
                } else
                    a = it.camelCase(e),
                    this.each(function() {
                        var n = kt.get(this, a);
                        kt.set(this, a, t),
                        e.indexOf("-") > -1 && void 0 !== n && kt.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                kt.remove(this, e)
            })
        }
    }),
    it.extend({
        queue: function(e, t, n) {
            var a;
            return e ? (t = (t || "fx") + "queue",
            a = Tt.get(e, t),
            n && (!a || it.isArray(n) ? a = Tt.access(e, t, it.makeArray(n)) : a.push(n)),
            a || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = it.queue(e, t)
              , a = n.length
              , o = n.shift()
              , i = it._queueHooks(e, t)
              , l = function() {
                it.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(),
            a--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(e, l, i)),
            !a && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Tt.get(e, n) || Tt.access(e, n, {
                empty: it.Callbacks("once memory").add(function() {
                    Tt.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    it.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                it.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, a = 1, o = it.Deferred(), i = this, l = this.length, r = function() {
                --a || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; l--; )
                n = Tt.get(i[l], e + "queueHooks"),
                n && n.empty && (a++,
                n.empty.add(r));
            return r(),
            o.promise(t)
        }
    });
    var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , St = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$","i")
      , Dt = ["Top", "Right", "Bottom", "Left"]
      , Lt = function(e, t) {
        return e = t || e,
        "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
    }
      , Ot = /^(?:checkbox|radio)$/i
      , $t = /<([\w:-]+)/
      , Bt = /^$|\/(?:java|ecma)script/i
      , Nt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Nt.optgroup = Nt.option,
    Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead,
    Nt.th = Nt.td;
    var Pt = /<|&#?\w+;/;
    !function() {
        var e = J.createDocumentFragment()
          , t = e.appendChild(J.createElement("div"))
          , n = J.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        at.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        at.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ft = /^key/
      , qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ut = /^([^.]*)(?:\.(.+)|)/;
    it.event = {
        global: {},
        add: function(e, t, n, a, o) {
            var i, l, r, c, s, u, p, d, h, f, b, v = Tt.get(e);
            if (v)
                for (n.handler && (i = n,
                n = i.handler,
                o = i.selector),
                n.guid || (n.guid = it.guid++),
                (c = v.events) || (c = v.events = {}),
                (l = v.handle) || (l = v.handle = function(t) {
                    return "undefined" != typeof it && it.event.triggered !== t.type ? it.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(yt) || [""],
                s = t.length; s--; )
                    r = Ut.exec(t[s]) || [],
                    h = b = r[1],
                    f = (r[2] || "").split(".").sort(),
                    h && (p = it.event.special[h] || {},
                    h = (o ? p.delegateType : p.bindType) || h,
                    p = it.event.special[h] || {},
                    u = it.extend({
                        type: h,
                        origType: b,
                        data: a,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && it.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, i),
                    (d = c[h]) || (d = c[h] = [],
                    d.delegateCount = 0,
                    p.setup && p.setup.call(e, a, f, l) !== !1 || e.addEventListener && e.addEventListener(h, l)),
                    p.add && (p.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    it.event.global[h] = !0)
        },
        remove: function(e, t, n, a, o) {
            var i, l, r, c, s, u, p, d, h, f, b, v = Tt.hasData(e) && Tt.get(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(yt) || [""],
                s = t.length; s--; )
                    if (r = Ut.exec(t[s]) || [],
                    h = b = r[1],
                    f = (r[2] || "").split(".").sort(),
                    h) {
                        for (p = it.event.special[h] || {},
                        h = (a ? p.delegateType : p.bindType) || h,
                        d = c[h] || [],
                        r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = i = d.length; i--; )
                            u = d[i],
                            !o && b !== u.origType || n && n.guid !== u.guid || r && !r.test(u.namespace) || a && a !== u.selector && ("**" !== a || !u.selector) || (d.splice(i, 1),
                            u.selector && d.delegateCount--,
                            p.remove && p.remove.call(e, u));
                        l && !d.length && (p.teardown && p.teardown.call(e, f, v.handle) !== !1 || it.removeEvent(e, h, v.handle),
                        delete c[h])
                    } else
                        for (h in c)
                            it.event.remove(e, h + t[s], n, a, !0);
                it.isEmptyObject(c) && Tt.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = it.event.fix(e);
            var t, n, a, o, i, l = [], r = X.call(arguments), c = (Tt.get(this, "events") || {})[e.type] || [], s = it.event.special[e.type] || {};
            if (r[0] = e,
            e.delegateTarget = this,
            !s.preDispatch || s.preDispatch.call(this, e) !== !1) {
                for (l = it.event.handlers.call(this, e, c),
                t = 0; (o = l[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i,
                        e.data = i.data,
                        a = ((it.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, r),
                        void 0 !== a && (e.result = a) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return s.postDispatch && s.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, a, o, i, l = [], r = t.delegateCount, c = e.target;
            if (r && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (a = [],
                        n = 0; r > n; n++)
                            i = t[n],
                            o = i.selector + " ",
                            void 0 === a[o] && (a[o] = i.needsContext ? it(o, this).index(c) > -1 : it.find(o, this, null, [c]).length),
                            a[o] && a.push(i);
                        a.length && l.push({
                            elem: c,
                            handlers: a
                        })
                    }
            return r < t.length && l.push({
                elem: this,
                handlers: t.slice(r)
            }),
            l
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, a, o, i = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J,
                a = n.documentElement,
                o = n.body,
                e.pageX = t.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0),
                e.pageY = t.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)),
                e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[it.expando])
                return e;
            var t, n, a, o = e.type, i = e, l = this.fixHooks[o];
            for (l || (this.fixHooks[o] = l = qt.test(o) ? this.mouseHooks : Ft.test(o) ? this.keyHooks : {}),
            a = l.props ? this.props.concat(l.props) : this.props,
            e = new it.Event(i),
            t = a.length; t--; )
                n = a[t],
                e[n] = i[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            l.filter ? l.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== b() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === b() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && it.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return it.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    it.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    it.Event = function(e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : f) : this.type = e,
        t && it.extend(this, t),
        this.timeStamp = e && e.timeStamp || it.now(),
        void (this[it.expando] = !0)) : new it.Event(e,t)
    }
    ,
    it.Event.prototype = {
        constructor: it.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        it.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, a = this, o = e.relatedTarget, i = e.handleObj;
                return o && (o === a || it.contains(a, o)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    it.fn.extend({
        on: function(e, t, n, a) {
            return v(this, e, t, n, a)
        },
        one: function(e, t, n, a) {
            return v(this, e, t, n, a, 1)
        },
        off: function(e, t, n) {
            var a, o;
            if (e && e.preventDefault && e.handleObj)
                return a = e.handleObj,
                it(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t,
            t = void 0),
            n === !1 && (n = f),
            this.each(function() {
                it.event.remove(this, e, n, t)
            })
        }
    });
    var Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Mt = /<script|<style|<link/i
      , zt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ht = /^true\/(.*)/
      , Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    it.extend({
        htmlPrefilter: function(e) {
            return e.replace(Rt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var a, o, i, l, r = e.cloneNode(!0), c = it.contains(e.ownerDocument, e);
            if (!(at.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (l = u(r),
                i = u(e),
                a = 0,
                o = i.length; o > a; a++)
                    y(i[a], l[a]);
            if (t)
                if (n)
                    for (i = i || u(e),
                    l = l || u(r),
                    a = 0,
                    o = i.length; o > a; a++)
                        w(i[a], l[a]);
                else
                    w(e, r);
            return l = u(r, "script"),
            l.length > 0 && p(l, !c && u(e, "script")),
            r
        },
        cleanData: function(e) {
            for (var t, n, a, o = it.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Et(n)) {
                    if (t = n[Tt.expando]) {
                        if (t.events)
                            for (a in t.events)
                                o[a] ? it.event.remove(n, a) : it.removeEvent(n, a, t.handle);
                        n[Tt.expando] = void 0
                    }
                    n[kt.expando] && (n[kt.expando] = void 0)
                }
        }
    }),
    it.fn.extend({
        domManip: I,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ct(this, function(e) {
                return void 0 === e ? it.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (it.cleanData(u(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return it.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ct(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , a = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Mt.test(e) && !Nt[($t.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = it.htmlPrefilter(e);
                    try {
                        for (; a > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (it.cleanData(u(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return I(this, arguments, function(t) {
                var n = this.parentNode;
                it.inArray(this, e) < 0 && (it.cleanData(u(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        it.fn[e] = function(e) {
            for (var n, a = [], o = it(e), i = o.length - 1, l = 0; i >= l; l++)
                n = l === i ? this : this.clone(!0),
                it(o[l])[t](n),
                K.apply(a, n.get());
            return this.pushStack(a)
        }
    });
    var Wt, Qt = {
        HTML: "block",
        BODY: "block"
    }, Gt = /^margin/, Jt = new RegExp("^(" + _t + ")(?!px)[a-z%]+$","i"), Xt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }, Yt = function(e, t, n, a) {
        var o, i, l = {};
        for (i in t)
            l[i] = e.style[i],
            e.style[i] = t[i];
        o = n.apply(e, a || []);
        for (i in t)
            e.style[i] = l[i];
        return o
    }, Kt = J.documentElement;
    !function() {
        function t() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            r.innerHTML = "",
            Kt.appendChild(l);
            var t = e.getComputedStyle(r);
            n = "1%" !== t.top,
            i = "2px" === t.marginLeft,
            a = "4px" === t.width,
            r.style.marginRight = "50%",
            o = "4px" === t.marginRight,
            Kt.removeChild(l)
        }
        var n, a, o, i, l = J.createElement("div"), r = J.createElement("div");
        r.style && (r.style.backgroundClip = "content-box",
        r.cloneNode(!0).style.backgroundClip = "",
        at.clearCloneStyle = "content-box" === r.style.backgroundClip,
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        l.appendChild(r),
        it.extend(at, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == a && t(),
                a
            },
            pixelMarginRight: function() {
                return null == a && t(),
                o
            },
            reliableMarginLeft: function() {
                return null == a && t(),
                i
            },
            reliableMarginRight: function() {
                var t, n = r.appendChild(J.createElement("div"));
                return n.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                r.style.width = "1px",
                Kt.appendChild(l),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Kt.removeChild(l),
                r.removeChild(n),
                t
            }
        }))
    }();
    var Zt = /^(none|table(?!-c[ea]).+)/
      , en = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , tn = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , nn = ["Webkit", "O", "Moz", "ms"]
      , an = J.createElement("div").style;
    it.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, l, r = it.camelCase(t), c = e.style;
                return t = it.cssProps[r] || (it.cssProps[r] = A(r) || r),
                l = it.cssHooks[t] || it.cssHooks[r],
                void 0 === n ? l && "get"in l && void 0 !== (o = l.get(e, !1, a)) ? o : c[t] : (i = typeof n,
                "string" === i && (o = St.exec(n)) && o[1] && (n = s(e, t, o),
                i = "number"),
                void (null != n && n === n && ("number" === i && (n += o && o[3] || (it.cssNumber[r] ? "" : "px")),
                at.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                l && "set"in l && void 0 === (n = l.set(e, n, a)) || (c[t] = n))))
            }
        },
        css: function(e, t, n, a) {
            var o, i, l, r = it.camelCase(t);
            return t = it.cssProps[r] || (it.cssProps[r] = A(r) || r),
            l = it.cssHooks[t] || it.cssHooks[r],
            l && "get"in l && (o = l.get(e, !0, n)),
            void 0 === o && (o = k(e, t, a)),
            "normal" === o && t in tn && (o = tn[t]),
            "" === n || n ? (i = parseFloat(o),
            n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }),
    it.each(["height", "width"], function(e, t) {
        it.cssHooks[t] = {
            get: function(e, n, a) {
                return n ? Zt.test(it.css(e, "display")) && 0 === e.offsetWidth ? Yt(e, en, function() {
                    return D(e, t, a)
                }) : D(e, t, a) : void 0
            },
            set: function(e, n, a) {
                var o, i = a && Xt(e), l = a && S(e, t, a, "border-box" === it.css(e, "boxSizing", !1, i), i);
                return l && (o = St.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = it.css(e, t)),
                _(e, n, l)
            }
        }
    }),
    it.cssHooks.marginLeft = j(at.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Yt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    it.cssHooks.marginRight = j(at.reliableMarginRight, function(e, t) {
        return t ? Yt(e, {
            display: "inline-block"
        }, k, [e, "marginRight"]) : void 0
    }),
    it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        it.cssHooks[e + t] = {
            expand: function(n) {
                for (var a = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > a; a++)
                    o[e + Dt[a] + t] = i[a] || i[a - 2] || i[0];
                return o
            }
        },
        Gt.test(e) || (it.cssHooks[e + t].set = _)
    }),
    it.fn.extend({
        css: function(e, t) {
            return Ct(this, function(e, t, n) {
                var a, o, i = {}, l = 0;
                if (it.isArray(t)) {
                    for (a = Xt(e),
                    o = t.length; o > l; l++)
                        i[t[l]] = it.css(e, t[l], !1, a);
                    return i
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Lt(this) ? it(this).show() : it(this).hide()
            })
        }
    }),
    it.Tween = O,
    O.prototype = {
        constructor: O,
        init: function(e, t, n, a, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || it.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = a,
            this.unit = i || (it.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : O.propHooks._default.set(this),
            this
        }
    },
    O.prototype.init.prototype = O.prototype,
    O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = it.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[it.cssProps[e.prop]] && !it.cssHooks[e.prop] ? e.elem[e.prop] = e.now : it.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    it.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    it.fx = O.prototype.init,
    it.fx.step = {};
    var on, ln, rn = /^(?:toggle|show|hide)$/, cn = /queueHooks$/;
    it.Animation = it.extend(q, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return s(n.elem, e, St.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            it.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(yt);
            for (var n, a = 0, o = e.length; o > a; a++)
                n = e[a],
                q.tweeners[n] = q.tweeners[n] || [],
                q.tweeners[n].unshift(t)
        },
        prefilters: [P],
        prefilter: function(e, t) {
            t ? q.prefilters.unshift(e) : q.prefilters.push(e)
        }
    }),
    it.speed = function(e, t, n) {
        var a = e && "object" == typeof e ? it.extend({}, e) : {
            complete: n || !n && t || it.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !it.isFunction(t) && t
        };
        return a.duration = it.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in it.fx.speeds ? it.fx.speeds[a.duration] : it.fx.speeds._default,
        null != a.queue && a.queue !== !0 || (a.queue = "fx"),
        a.old = a.complete,
        a.complete = function() {
            it.isFunction(a.old) && a.old.call(this),
            a.queue && it.dequeue(this, a.queue)
        }
        ,
        a
    }
    ,
    it.fn.extend({
        fadeTo: function(e, t, n, a) {
            return this.filter(Lt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, a)
        },
        animate: function(e, t, n, a) {
            var o = it.isEmptyObject(e)
              , i = it.speed(t, n, a)
              , l = function() {
                var t = q(this, it.extend({}, e), i);
                (o || Tt.get(this, "finish")) && t.stop(!0)
            };
            return l.finish = l,
            o || i.queue === !1 ? this.each(l) : this.queue(i.queue, l)
        },
        stop: function(e, t, n) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , i = it.timers
                  , l = Tt.get(this);
                if (o)
                    l[o] && l[o].stop && a(l[o]);
                else
                    for (o in l)
                        l[o] && l[o].stop && cn.test(o) && a(l[o]);
                for (o = i.length; o--; )
                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                    t = !1,
                    i.splice(o, 1));
                !t && n || it.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = Tt.get(this), a = n[e + "queue"], o = n[e + "queueHooks"], i = it.timers, l = a ? a.length : 0;
                for (n.finish = !0,
                it.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; l > t; t++)
                    a[t] && a[t].finish && a[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    it.each(["toggle", "show", "hide"], function(e, t) {
        var n = it.fn[t];
        it.fn[t] = function(e, a, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, a, o)
        }
    }),
    it.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        it.fn[e] = function(e, n, a) {
            return this.animate(t, e, n, a)
        }
    }),
    it.timers = [],
    it.fx.tick = function() {
        var e, t = 0, n = it.timers;
        for (on = it.now(); t < n.length; t++)
            e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
        n.length || it.fx.stop(),
        on = void 0
    }
    ,
    it.fx.timer = function(e) {
        it.timers.push(e),
        e() ? it.fx.start() : it.timers.pop()
    }
    ,
    it.fx.interval = 13,
    it.fx.start = function() {
        ln || (ln = e.setInterval(it.fx.tick, it.fx.interval))
    }
    ,
    it.fx.stop = function() {
        e.clearInterval(ln),
        ln = null
    }
    ,
    it.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    it.fn.delay = function(t, n) {
        return t = it.fx ? it.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, a) {
            var o = e.setTimeout(n, t);
            a.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e = J.createElement("input")
          , t = J.createElement("select")
          , n = t.appendChild(J.createElement("option"));
        e.type = "checkbox",
        at.checkOn = "" !== e.value,
        at.optSelected = n.selected,
        t.disabled = !0,
        at.optDisabled = !n.disabled,
        e = J.createElement("input"),
        e.value = "t",
        e.type = "radio",
        at.radioValue = "t" === e.value
    }();
    var sn, un = it.expr.attrHandle;
    it.fn.extend({
        attr: function(e, t) {
            return Ct(this, it.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                it.removeAttr(this, e)
            })
        }
    }),
    it.extend({
        attr: function(e, t, n) {
            var a, o, i = e.nodeType;
            return 3 !== i && 8 !== i && 2 !== i ? "undefined" == typeof e.getAttribute ? it.prop(e, t, n) : (1 === i && it.isXMLDoc(e) || (t = t.toLowerCase(),
            o = it.attrHooks[t] || (it.expr.match.bool.test(t) ? sn : void 0)),
            void 0 !== n ? null === n ? void it.removeAttr(e, t) : o && "set"in o && void 0 !== (a = o.set(e, n, t)) ? a : (e.setAttribute(t, n + ""),
            n) : o && "get"in o && null !== (a = o.get(e, t)) ? a : (a = it.find.attr(e, t),
            null == a ? void 0 : a)) : void 0
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!at.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, a, o = 0, i = t && t.match(yt);
            if (i && 1 === e.nodeType)
                for (; n = i[o++]; )
                    a = it.propFix[n] || n,
                    it.expr.match.bool.test(n) && (e[a] = !1),
                    e.removeAttribute(n)
        }
    }),
    sn = {
        set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = un[t] || it.find.attr;
        un[t] = function(e, t, a) {
            var o, i;
            return a || (i = un[t],
            un[t] = o,
            o = null != n(e, t, a) ? t.toLowerCase() : null,
            un[t] = i),
            o
        }
    });
    var pn = /^(?:input|select|textarea|button)$/i
      , dn = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function(e, t) {
            return Ct(this, it.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[it.propFix[e] || e]
            })
        }
    }),
    it.extend({
        prop: function(e, t, n) {
            var a, o, i = e.nodeType;
            return 3 !== i && 8 !== i && 2 !== i ? (1 === i && it.isXMLDoc(e) || (t = it.propFix[t] || t,
            o = it.propHooks[t]),
            void 0 !== n ? o && "set"in o && void 0 !== (a = o.set(e, n, t)) ? a : e[t] = n : o && "get"in o && null !== (a = o.get(e, t)) ? a : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pn.test(e.nodeName) || dn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    at.optSelected || (it.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        it.propFix[this.toLowerCase()] = this
    });
    var hn = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function(e) {
            var t, n, a, o, i, l, r, c = 0;
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).addClass(e.call(this, t, U(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(yt) || []; n = this[c++]; )
                    if (o = U(n),
                    a = 1 === n.nodeType && (" " + o + " ").replace(hn, " ")) {
                        for (l = 0; i = t[l++]; )
                            a.indexOf(" " + i + " ") < 0 && (a += i + " ");
                        r = it.trim(a),
                        o !== r && n.setAttribute("class", r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, a, o, i, l, r, c = 0;
            if (it.isFunction(e))
                return this.each(function(t) {
                    it(this).removeClass(e.call(this, t, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(yt) || []; n = this[c++]; )
                    if (o = U(n),
                    a = 1 === n.nodeType && (" " + o + " ").replace(hn, " ")) {
                        for (l = 0; i = t[l++]; )
                            for (; a.indexOf(" " + i + " ") > -1; )
                                a = a.replace(" " + i + " ", " ");
                        r = it.trim(a),
                        o !== r && n.setAttribute("class", r)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function(n) {
                it(this).toggleClass(e.call(this, n, U(this), t), t)
            }
            : function() {
                var t, a, o, i;
                if ("string" === n)
                    for (a = 0,
                    o = it(this),
                    i = e.match(yt) || []; t = i[a++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = U(this),
                    t && Tt.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Tt.get(this, "__className__") || ""))
            }
            )
        },
        hasClass: function(e) {
            var t, n, a = 0;
            for (t = " " + e + " "; n = this[a++]; )
                if (1 === n.nodeType && (" " + U(n) + " ").replace(hn, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var fn = /\r/g
      , bn = /[\x20\t\r\n\f]+/g;
    it.fn.extend({
        val: function(e) {
            var t, n, a, o = this[0];
            return arguments.length ? (a = it.isFunction(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (o = a ? e.call(this, n, it(this).val()) : e,
                null == o ? o = "" : "number" == typeof o ? o += "" : it.isArray(o) && (o = it.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = it.valHooks[o.type] || it.valHooks[o.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
            "string" == typeof n ? n.replace(fn, "") : null == n ? "" : n)) : void 0
        }
    }),
    it.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e)).replace(bn, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, a = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, l = i ? null : [], r = i ? o + 1 : a.length, c = 0 > o ? r : i ? o : 0; r > c; c++)
                        if (n = a[c],
                        !(!n.selected && c !== o || (at.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(),
                            i)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, a, o = e.options, i = it.makeArray(t), l = o.length; l--; )
                        a = o[l],
                        (a.selected = it.inArray(it.valHooks.option.get(a), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    it.each(["radio", "checkbox"], function() {
        it.valHooks[this] = {
            set: function(e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) > -1 : void 0
            }
        },
        at.checkOn || (it.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var vn = /^(?:focusinfocus|focusoutblur)$/;
    it.extend(it.event, {
        trigger: function(t, n, a, o) {
            var i, l, r, c, s, u, p, d = [a || J], h = nt.call(t, "type") ? t.type : t, f = nt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (l = r = a = a || J,
            3 !== a.nodeType && 8 !== a.nodeType && !vn.test(h + it.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."),
            h = f.shift(),
            f.sort()),
            s = h.indexOf(":") < 0 && "on" + h,
            t = t[it.expando] ? t : new it.Event(h,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = f.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = a),
            n = null == n ? [t] : it.makeArray(n, [t]),
            p = it.event.special[h] || {},
            o || !p.trigger || p.trigger.apply(a, n) !== !1)) {
                if (!o && !p.noBubble && !it.isWindow(a)) {
                    for (c = p.delegateType || h,
                    vn.test(c + h) || (l = l.parentNode); l; l = l.parentNode)
                        d.push(l),
                        r = l;
                    r === (a.ownerDocument || J) && d.push(r.defaultView || r.parentWindow || e)
                }
                for (i = 0; (l = d[i++]) && !t.isPropagationStopped(); )
                    t.type = i > 1 ? c : p.bindType || h,
                    u = (Tt.get(l, "events") || {})[t.type] && Tt.get(l, "handle"),
                    u && u.apply(l, n),
                    u = s && l[s],
                    u && u.apply && Et(l) && (t.result = u.apply(l, n),
                    t.result === !1 && t.preventDefault());
                return t.type = h,
                o || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Et(a) || s && it.isFunction(a[h]) && !it.isWindow(a) && (r = a[s],
                r && (a[s] = null),
                it.event.triggered = h,
                a[h](),
                it.event.triggered = void 0,
                r && (a[s] = r)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var a = it.extend(new it.Event, n, {
                type: e,
                isSimulated: !0
            });
            it.event.trigger(a, null, t)
        }
    }),
    it.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                it.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    }),
    it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    it.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    at.focusin = "onfocusin"in e,
    at.focusin || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            it.event.simulate(t, e.target, it.event.fix(e))
        };
        it.event.special[t] = {
            setup: function() {
                var a = this.ownerDocument || this
                  , o = Tt.access(a, t);
                o || a.addEventListener(e, n, !0),
                Tt.access(a, t, (o || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this
                  , o = Tt.access(a, t) - 1;
                o ? Tt.access(a, t, o) : (a.removeEventListener(e, n, !0),
                Tt.remove(a, t))
            }
        }
    });
    var gn = e.location
      , mn = it.now()
      , xn = /\?/;
    it.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    it.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (a) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t),
        n
    }
    ;
    var wn = /#.*$/
      , yn = /([?&])_=[^&]*/
      , In = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , En = /^(?:GET|HEAD)$/
      , Tn = /^\/\//
      , kn = {}
      , jn = {}
      , An = "*/".concat("*")
      , _n = J.createElement("a");
    _n.href = gn.href,
    it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn.href,
            type: "GET",
            isLocal: Cn.test(gn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": An,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? z(z(e, it.ajaxSettings), t) : z(it.ajaxSettings, e)
        },
        ajaxPrefilter: R(kn),
        ajaxTransport: R(jn),
        ajax: function(t, n) {
            function a(t, n, a, r) {
                var s, p, m, x, y, C = n;
                2 !== w && (w = 2,
                c && e.clearTimeout(c),
                o = void 0,
                l = r || "",
                I.readyState = t > 0 ? 4 : 0,
                s = t >= 200 && 300 > t || 304 === t,
                a && (x = H(d, I, a)),
                x = V(d, x, I, s),
                s ? (d.ifModified && (y = I.getResponseHeader("Last-Modified"),
                y && (it.lastModified[i] = y),
                y = I.getResponseHeader("etag"),
                y && (it.etag[i] = y)),
                204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state,
                p = x.data,
                m = x.error,
                s = !m)) : (m = C,
                !t && C || (C = "error",
                0 > t && (t = 0))),
                I.status = t,
                I.statusText = (n || C) + "",
                s ? b.resolveWith(h, [p, C, I]) : b.rejectWith(h, [I, C, m]),
                I.statusCode(g),
                g = void 0,
                u && f.trigger(s ? "ajaxSuccess" : "ajaxError", [I, d, s ? p : m]),
                v.fireWith(h, [I, C]),
                u && (f.trigger("ajaxComplete", [I, d]),
                --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, i, l, r, c, s, u, p, d = it.ajaxSetup({}, n), h = d.context || d, f = d.context && (h.nodeType || h.jquery) ? it(h) : it.event, b = it.Deferred(), v = it.Callbacks("once memory"), g = d.statusCode || {}, m = {}, x = {}, w = 0, y = "canceled", I = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!r)
                            for (r = {}; t = In.exec(l); )
                                r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? l : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = x[n] = x[n] || e,
                    m[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > w)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            I.always(e[I.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || y;
                    return o && o.abort(t),
                    a(0, t),
                    this
                }
            };
            if (b.promise(I).complete = v.add,
            I.success = I.done,
            I.error = I.fail,
            d.url = ((t || d.url || gn.href) + "").replace(wn, "").replace(Tn, gn.protocol + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(yt) || [""],
            null == d.crossDomain) {
                s = J.createElement("a");
                try {
                    s.href = d.url,
                    s.href = s.href,
                    d.crossDomain = _n.protocol + "//" + _n.host != s.protocol + "//" + s.host
                } catch (C) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)),
            M(kn, d, n, I),
            2 === w)
                return I;
            u = it.event && d.global,
            u && 0 === it.active++ && it.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !En.test(d.type),
            i = d.url,
            d.hasContent || (d.data && (i = d.url += (xn.test(i) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = yn.test(i) ? i.replace(yn, "$1_=" + mn++) : i + (xn.test(i) ? "&" : "?") + "_=" + mn++)),
            d.ifModified && (it.lastModified[i] && I.setRequestHeader("If-Modified-Since", it.lastModified[i]),
            it.etag[i] && I.setRequestHeader("If-None-Match", it.etag[i])),
            (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && I.setRequestHeader("Content-Type", d.contentType),
            I.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + An + "; q=0.01" : "") : d.accepts["*"]);
            for (p in d.headers)
                I.setRequestHeader(p, d.headers[p]);
            if (d.beforeSend && (d.beforeSend.call(h, I, d) === !1 || 2 === w))
                return I.abort();
            y = "abort";
            for (p in {
                success: 1,
                error: 1,
                complete: 1
            })
                I[p](d[p]);
            if (o = M(jn, d, n, I)) {
                if (I.readyState = 1,
                u && f.trigger("ajaxSend", [I, d]),
                2 === w)
                    return I;
                d.async && d.timeout > 0 && (c = e.setTimeout(function() {
                    I.abort("timeout")
                }, d.timeout));
                try {
                    w = 1,
                    o.send(m, a)
                } catch (C) {
                    if (!(2 > w))
                        throw C;
                    a(-1, C)
                }
            } else
                a(-1, "No Transport");
            return I
        },
        getJSON: function(e, t, n) {
            return it.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return it.get(e, void 0, t, "script")
        }
    }),
    it.each(["get", "post"], function(e, t) {
        it[t] = function(e, n, a, o) {
            return it.isFunction(n) && (o = o || a,
            a = n,
            n = void 0),
            it.ajax(it.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: a
            }, it.isPlainObject(e) && e))
        }
    }),
    it._evalUrl = function(e) {
        return it.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    it.fn.extend({
        wrapAll: function(e) {
            var t;
            return it.isFunction(e) ? this.each(function(t) {
                it(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = it(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return this.each(it.isFunction(e) ? function(t) {
                it(this).wrapInner(e.call(this, t))
            }
            : function() {
                var t = it(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    it.expr.filters.hidden = function(e) {
        return !it.expr.filters.visible(e)
    }
    ,
    it.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var Sn = /%20/g
      , Dn = /\[\]$/
      , Ln = /\r?\n/g
      , On = /^(?:submit|button|image|reset|file)$/i
      , $n = /^(?:input|select|textarea|keygen)/i;
    it.param = function(e, t) {
        var n, a = [], o = function(e, t) {
            t = it.isFunction(t) ? t() : null == t ? "" : t,
            a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional),
        it.isArray(e) || e.jquery && !it.isPlainObject(e))
            it.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                W(n, e[n], t, o);
        return a.join("&").replace(Sn, "+")
    }
    ,
    it.fn.extend({
        serialize: function() {
            return it.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && $n.test(this.nodeName) && !On.test(e) && (this.checked || !Ot.test(e))
            }).map(function(e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                }
            }).get()
        }
    }),
    it.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Bn = {
        0: 200,
        1223: 204
    }
      , Nn = it.ajaxSettings.xhr();
    at.cors = !!Nn && "withCredentials"in Nn,
    at.ajax = Nn = !!Nn,
    it.ajaxTransport(function(t) {
        var n, a;
        return at.cors || Nn && !t.crossDomain ? {
            send: function(o, i) {
                var l, r = t.xhr();
                if (r.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
                    for (l in t.xhrFields)
                        r[l] = t.xhrFields[l];
                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (l in o)
                    r.setRequestHeader(l, o[l]);
                n = function(e) {
                    return function() {
                        n && (n = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null,
                        "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? i(0, "error") : i(r.status, r.statusText) : i(Bn[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }
                ,
                r.onload = n(),
                a = r.onerror = n("error"),
                void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && e.setTimeout(function() {
                        n && a()
                    })
                }
                ,
                n = n("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (c) {
                    if (n)
                        throw c
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }),
    it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return it.globalEval(e),
                e
            }
        }
    }),
    it.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(a, o) {
                    t = it("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Pn = []
      , Fn = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Pn.pop() || it.expando + "_" + mn++;
            return this[e] = !0,
            e
        }
    }),
    it.ajaxPrefilter("json jsonp", function(t, n, a) {
        var o, i, l, r = t.jsonp !== !1 && (Fn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(t.data) && "data");
        return r || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        r ? t[r] = t[r].replace(Fn, "$1" + o) : t.jsonp !== !1 && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
        t.converters["script json"] = function() {
            return l || it.error(o + " was not called"),
            l[0]
        }
        ,
        t.dataTypes[0] = "json",
        i = e[o],
        e[o] = function() {
            l = arguments
        }
        ,
        a.always(function() {
            void 0 === i ? it(e).removeProp(o) : e[o] = i,
            t[o] && (t.jsonpCallback = n.jsonpCallback,
            Pn.push(o)),
            l && it.isFunction(i) && i(l[0]),
            l = i = void 0
        }),
        "script") : void 0
    }),
    it.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || J;
        var a = ft.exec(e)
          , o = !n && [];
        return a ? [t.createElement(a[1])] : (a = d([e], t, o),
        o && o.length && it(o).remove(),
        it.merge([], a.childNodes))
    }
    ;
    var qn = it.fn.load;
    it.fn.load = function(e, t, n) {
        if ("string" != typeof e && qn)
            return qn.apply(this, arguments);
        var a, o, i, l = this, r = e.indexOf(" ");
        return r > -1 && (a = it.trim(e.slice(r)),
        e = e.slice(0, r)),
        it.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        l.length > 0 && it.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            l.html(a ? it("<div>").append(it.parseHTML(e)).find(a) : e)
        }).always(n && function(e, t) {
            l.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        it.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    it.offset = {
        setOffset: function(e, t, n) {
            var a, o, i, l, r, c, s, u = it.css(e, "position"), p = it(e), d = {};
            "static" === u && (e.style.position = "relative"),
            r = p.offset(),
            i = it.css(e, "top"),
            c = it.css(e, "left"),
            s = ("absolute" === u || "fixed" === u) && (i + c).indexOf("auto") > -1,
            s ? (a = p.position(),
            l = a.top,
            o = a.left) : (l = parseFloat(i) || 0,
            o = parseFloat(c) || 0),
            it.isFunction(t) && (t = t.call(e, n, it.extend({}, r))),
            null != t.top && (d.top = t.top - r.top + l),
            null != t.left && (d.left = t.left - r.left + o),
            "using"in t ? t.using.call(e, d) : p.css(d)
        }
    },
    it.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    it.offset.setOffset(this, e, t)
                });
            var t, n, a = this[0], o = {
                top: 0,
                left: 0
            }, i = a && a.ownerDocument;
            return i ? (t = i.documentElement,
            it.contains(t, a) ? (o = a.getBoundingClientRect(),
            n = Q(i),
            {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], a = {
                    top: 0,
                    left: 0
                };
                return "fixed" === it.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                it.nodeName(e[0], "html") || (a = e.offset()),
                a.top += it.css(e[0], "borderTopWidth", !0),
                a.left += it.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - a.top - it.css(n, "marginTop", !0),
                    left: t.left - a.left - it.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === it.css(e, "position"); )
                    e = e.offsetParent;
                return e || Kt
            })
        }
    }),
    it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        it.fn[e] = function(a) {
            return Ct(this, function(e, a, o) {
                var i = Q(e);
                return void 0 === o ? i ? i[t] : e[a] : void (i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[a] = o)
            }, e, a, arguments.length)
        }
    }),
    it.each(["top", "left"], function(e, t) {
        it.cssHooks[t] = j(at.pixelPosition, function(e, n) {
            return n ? (n = k(e, t),
            Jt.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }),
    it.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        it.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, a) {
            it.fn[a] = function(a, o) {
                var i = arguments.length && (n || "boolean" != typeof a)
                  , l = n || (a === !0 || o === !0 ? "margin" : "border");
                return Ct(this, function(t, n, a) {
                    var o;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === a ? it.css(t, n, l) : it.style(t, n, a, l)
                }, t, i ? a : void 0, i, null)
            }
        })
    }),
    it.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, a) {
            return this.on(t, e, n, a)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    it.fn.andSelf = it.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return it
    });
    var Un = e.jQuery
      , Rn = e.$;
    return it.noConflict = function(t) {
        return e.$ === it && (e.$ = Rn),
        t && e.jQuery === it && (e.jQuery = Un),
        it
    }
    ,
    t || (e.jQuery = e.$ = it),
    it
}),
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return r.raw ? e : encodeURIComponent(e)
    }
    function n(e) {
        return r.raw ? e : decodeURIComponent(e)
    }
    function a(e) {
        return t(r.json ? JSON.stringify(e) : String(e))
    }
    function o(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(l, " ")),
            r.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    function i(t, n) {
        var a = r.raw ? t : o(t);
        return e.isFunction(n) ? n(a) : a
    }
    var l = /\+/g
      , r = e.cookie = function(o, l, c) {
        if (void 0 !== l && !e.isFunction(l)) {
            if (c = e.extend({}, r.defaults, c),
            "number" == typeof c.expires) {
                var s = c.expires
                  , u = c.expires = new Date;
                u.setTime(+u + 864e5 * s)
            }
            return document.cookie = [t(o), "=", a(l), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
        }
        for (var p = o ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], h = 0, f = d.length; f > h; h++) {
            var b = d[h].split("=")
              , v = n(b.shift())
              , g = b.join("=");
            if (o && o === v) {
                p = i(g, l);
                break
            }
            o || void 0 === (g = i(g)) || (p[v] = g)
        }
        return p
    }
    ;
    r.defaults = {},
    e.removeCookie = function(t, n) {
        return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !e.cookie(t))
    }
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
+function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap")
          , t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1
          , a = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || e(a).trigger(e.support.transition.end)
        };
        return setTimeout(o, t),
        this
    }
    ,
    e(function() {
        e.support.transition = t(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var n = e(this)
              , o = n.data("bs.alert");
            o || n.data("bs.alert", o = new a(this)),
            "string" == typeof t && o[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]'
      , a = function(t) {
        e(t).on("click", n, this.close)
    };
    a.VERSION = "3.3.7",
    a.TRANSITION_DURATION = 150,
    a.prototype.close = function(t) {
        function n() {
            l.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this)
          , i = o.attr("data-target");
        i || (i = o.attr("href"),
        i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var l = e("#" === i ? [] : i);
        t && t.preventDefault(),
        l.length || (l = o.closest(".alert")),
        l.trigger(t = e.Event("close.bs.alert")),
        t.isDefaultPrevented() || (l.removeClass("in"),
        e.support.transition && l.hasClass("fade") ? l.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n())
    }
    ;
    var o = e.fn.alert;
    e.fn.alert = t,
    e.fn.alert.Constructor = a,
    e.fn.alert.noConflict = function() {
        return e.fn.alert = o,
        this
    }
    ,
    e(document).on("click.bs.alert.data-api", n, a.prototype.close)
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var a = e(this)
              , o = a.data("bs.button")
              , i = "object" == typeof t && t;
            o || a.data("bs.button", o = new n(this,i)),
            "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var n = function(t, a) {
        this.$element = e(t),
        this.options = e.extend({}, n.DEFAULTS, a),
        this.isLoading = !1
    };
    n.VERSION = "3.3.7",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(t) {
        var n = "disabled"
          , a = this.$element
          , o = a.is("input") ? "val" : "html"
          , i = a.data();
        t += "Text",
        null == i.resetText && a.data("resetText", a[o]()),
        setTimeout(e.proxy(function() {
            a[o](null == i[t] ? this.options[t] : i[t]),
            "loadingText" == t ? (this.isLoading = !0,
            a.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
            a.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1),
            t.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var a = e.fn.button;
    e.fn.button = t,
    e.fn.button.Constructor = n,
    e.fn.button.noConflict = function() {
        return e.fn.button = a,
        this
    }
    ,
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var a = e(n.target).closest(".btn");
        t.call(a, "toggle"),
        e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
        a.is("input,button") ? a.trigger("focus") : a.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var a = e(this)
              , o = a.data("bs.carousel")
              , i = e.extend({}, n.DEFAULTS, a.data(), "object" == typeof t && t)
              , l = "string" == typeof t ? t : i.slide;
            o || a.data("bs.carousel", o = new n(this,i)),
            "number" == typeof t ? o.to(t) : l ? o[l]() : i.interval && o.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t)
          , a = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (a && !this.options.wrap)
            return t;
        var o = "prev" == e ? -1 : 1
          , i = (n + o) % this.$items.length;
        return this.$items.eq(i)
    }
    ,
    n.prototype.to = function(e) {
        var t = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }
    ,
    n.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    n.prototype.slide = function(t, a) {
        var o = this.$element.find(".item.active")
          , i = a || this.getItemForDirection(t, o)
          , l = this.interval
          , r = "next" == t ? "left" : "right"
          , c = this;
        if (i.hasClass("active"))
            return this.sliding = !1;
        var s = i[0]
          , u = e.Event("slide.bs.carousel", {
            relatedTarget: s,
            direction: r
        });
        if (this.$element.trigger(u),
        !u.isDefaultPrevented()) {
            if (this.sliding = !0,
            l && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = e(this.$indicators.children()[this.getItemIndex(i)]);
                p && p.addClass("active")
            }
            var d = e.Event("slid.bs.carousel", {
                relatedTarget: s,
                direction: r
            });
            return e.support.transition && this.$element.hasClass("slide") ? (i.addClass(t),
            i[0].offsetWidth,
            o.addClass(r),
            i.addClass(r),
            o.one("bsTransitionEnd", function() {
                i.removeClass([t, r].join(" ")).addClass("active"),
                o.removeClass(["active", r].join(" ")),
                c.sliding = !1,
                setTimeout(function() {
                    c.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"),
            i.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(d)),
            l && this.cycle(),
            this
        }
    }
    ;
    var a = e.fn.carousel;
    e.fn.carousel = t,
    e.fn.carousel.Constructor = n,
    e.fn.carousel.noConflict = function() {
        return e.fn.carousel = a,
        this
    }
    ;
    var o = function(n) {
        var a, o = e(this), i = e(o.attr("data-target") || (a = o.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var l = e.extend({}, i.data(), o.data())
              , r = o.attr("data-slide-to");
            r && (l.interval = !1),
            t.call(i, l),
            r && i.data("bs.carousel").to(r),
            n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
    e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        var n, a = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(a)
    }
    function n(t) {
        return this.each(function() {
            var n = e(this)
              , o = n.data("bs.collapse")
              , i = e.extend({}, a.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && i.toggle && /show|hide/.test(t) && (i.toggle = !1),
            o || n.data("bs.collapse", o = new a(this,i)),
            "string" == typeof t && o[t]()
        })
    }
    var a = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, a.DEFAULTS, n),
        this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.7",
    a.TRANSITION_DURATION = 350,
    a.DEFAULTS = {
        toggle: !0
    },
    a.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }
    ,
    a.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse"),
            t && t.transitioning))) {
                var i = e.Event("show.bs.collapse");
                if (this.$element.trigger(i),
                !i.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"),
                    t || o.data("bs.collapse", null));
                    var l = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[l](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)
                        return r.call(this);
                    var c = e.camelCase(["scroll", l].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[l](this.$element[0][c])
                }
            }
        }
    }
    ,
    a.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t),
            !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : o.call(this)
            }
        }
    }
    ,
    a.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    a.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, a) {
            var o = e(a);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }
    ,
    a.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var o = e.fn.collapse;
    e.fn.collapse = n,
    e.fn.collapse.Constructor = a,
    e.fn.collapse.noConflict = function() {
        return e.fn.collapse = o,
        this
    }
    ,
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
        var o = e(this);
        o.attr("data-target") || a.preventDefault();
        var i = t(o)
          , l = i.data("bs.collapse")
          , r = l ? "toggle" : o.data();
        n.call(i, r)
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = n && e(n);
        return a && a.length ? a : t.parent()
    }
    function n(n) {
        n && 3 === n.which || (e(o).remove(),
        e(i).each(function() {
            var a = e(this)
              , o = t(a)
              , i = {
                relatedTarget: this
            };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", i)),
            n.isDefaultPrevented() || (a.attr("aria-expanded", "false"),
            o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", i)))))
        }))
    }
    function a(t) {
        return this.each(function() {
            var n = e(this)
              , a = n.data("bs.dropdown");
            a || n.data("bs.dropdown", a = new l(this)),
            "string" == typeof t && a[t].call(n)
        })
    }
    var o = ".dropdown-backdrop"
      , i = '[data-toggle="dropdown"]'
      , l = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    l.VERSION = "3.3.7",
    l.prototype.toggle = function(a) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var i = t(o)
              , l = i.hasClass("open");
            if (n(),
            !l) {
                "ontouchstart"in document.documentElement && !i.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var r = {
                    relatedTarget: this
                };
                if (i.trigger(a = e.Event("show.bs.dropdown", r)),
                a.isDefaultPrevented())
                    return;
                o.trigger("focus").attr("aria-expanded", "true"),
                i.toggleClass("open").trigger(e.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }
    ,
    l.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var a = e(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !a.is(".disabled, :disabled")) {
                var o = t(a)
                  , l = o.hasClass("open");
                if (!l && 27 != n.which || l && 27 == n.which)
                    return 27 == n.which && o.find(i).trigger("focus"),
                    a.trigger("click");
                var r = " li:not(.disabled):visible a"
                  , c = o.find(".dropdown-menu" + r);
                if (c.length) {
                    var s = c.index(n.target);
                    38 == n.which && s > 0 && s--,
                    40 == n.which && s < c.length - 1 && s++,
                    ~s || (s = 0),
                    c.eq(s).trigger("focus")
                }
            }
        }
    }
    ;
    var r = e.fn.dropdown;
    e.fn.dropdown = a,
    e.fn.dropdown.Constructor = l,
    e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = r,
        this
    }
    ,
    e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, l.prototype.toggle).on("keydown.bs.dropdown.data-api", i, l.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", l.prototype.keydown)
}(jQuery),
+function(e) {
    "use strict";
    function t(t, a) {
        return this.each(function() {
            var o = e(this)
              , i = o.data("bs.modal")
              , l = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            i || o.data("bs.modal", i = new n(this,l)),
            "string" == typeof t ? i[t](a) : l.show && i.show(a)
        })
    }
    var n = function(t, n) {
        this.options = n,
        this.$body = e(document.body),
        this.$element = e(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }
    ,
    n.prototype.show = function(t) {
        var a = this
          , o = e.Event("show.bs.modal", {
            relatedTarget: t
        });
        this.$element.trigger(o),
        this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            a.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(a.$element) && (a.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var o = e.support.transition && a.$element.hasClass("fade");
            a.$element.parent().length || a.$element.appendTo(a.$body),
            a.$element.show().scrollTop(0),
            a.adjustDialog(),
            o && a.$element[0].offsetWidth,
            a.$element.addClass("in"),
            a.enforceFocus();
            var i = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? a.$dialog.one("bsTransitionEnd", function() {
                a.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : a.$element.trigger("focus").trigger(i)
        }))
    }
    ,
    n.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        e(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }
    ,
    n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    n.prototype.backdrop = function(t) {
        var a = this
          , o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
                return;
            i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var l = function() {
                a.removeBackdrop(),
                t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", l).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : l()
        } else
            t && t()
    }
    ,
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }
    ,
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }
    ,
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
        t
    }
    ;
    var a = e.fn.modal;
    e.fn.modal = t,
    e.fn.modal.Constructor = n,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = a,
        this
    }
    ,
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var a = e(this)
          , o = a.attr("href")
          , i = e(a.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""))
          , l = i.data("bs.modal") ? "toggle" : e.extend({
            remote: !/#/.test(o) && o
        }, i.data(), a.data());
        a.is("a") && n.preventDefault(),
        i.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                a.is(":visible") && a.trigger("focus")
            })
        }),
        t.call(i, l, this)
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var a = e(this)
              , o = a.data("bs.tooltip")
              , i = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || a.data("bs.tooltip", o = new n(this,i)),
            "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    n.prototype.init = function(t, n, a) {
        if (this.enabled = !0,
        this.type = t,
        this.$element = e(n),
        this.options = this.getOptions(a),
        this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), i = o.length; i--; ) {
            var l = o[i];
            if ("click" == l)
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != l) {
                var r = "hover" == l ? "mouseenter" : "focusin"
                  , c = "hover" == l ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(c + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    }
    ,
    n.prototype.getDelegateOptions = function() {
        var t = {}
          , n = this.getDefaults();
        return this._options && e.each(this._options, function(e, a) {
            n[e] != a && (t[e] = a)
        }),
        t
    }
    ,
    n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }
    ,
    n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    }
    ,
    n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout),
        n.hoverState = "out",
        n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }
    ,
    n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var a = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !a)
                return;
            var o = this
              , i = this.tip()
              , l = this.getUID(this.type);
            this.setContent(),
            i.attr("id", l),
            this.$element.attr("aria-describedby", l),
            this.options.animation && i.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement
              , c = /\s?auto?\s?/i
              , s = c.test(r);
            s && (r = r.replace(c, "") || "top"),
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this),
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition()
              , p = i[0].offsetWidth
              , d = i[0].offsetHeight;
            if (s) {
                var h = r
                  , f = this.getPosition(this.$viewport);
                r = "bottom" == r && u.bottom + d > f.bottom ? "top" : "top" == r && u.top - d < f.top ? "bottom" : "right" == r && u.right + p > f.width ? "left" : "left" == r && u.left - p < f.left ? "right" : r,
                i.removeClass(h).addClass(r)
            }
            var b = this.getCalculatedOffset(r, u, p, d);
            this.applyPlacement(b, r);
            var v = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type),
                o.hoverState = null,
                "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }
    ,
    n.prototype.applyPlacement = function(t, n) {
        var a = this.tip()
          , o = a[0].offsetWidth
          , i = a[0].offsetHeight
          , l = parseInt(a.css("margin-top"), 10)
          , r = parseInt(a.css("margin-left"), 10);
        isNaN(l) && (l = 0),
        isNaN(r) && (r = 0),
        t.top += l,
        t.left += r,
        e.offset.setOffset(a[0], e.extend({
            using: function(e) {
                a.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0),
        a.addClass("in");
        var c = a[0].offsetWidth
          , s = a[0].offsetHeight;
        "top" == n && s != i && (t.top = t.top + i - s);
        var u = this.getViewportAdjustedDelta(n, t, c, s);
        u.left ? t.left += u.left : t.top += u.top;
        var p = /top|bottom/.test(n)
          , d = p ? 2 * u.left - o + c : 2 * u.top - i + s
          , h = p ? "offsetWidth" : "offsetHeight";
        a.offset(t),
        this.replaceArrow(d, a[0][h], p)
    }
    ,
    n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    n.prototype.hide = function(t) {
        function a() {
            "in" != o.hoverState && i.detach(),
            o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
            t && t()
        }
        var o = this
          , i = e(this.$tip)
          , l = e.Event("hide.bs." + this.type);
        return this.$element.trigger(l),
        l.isDefaultPrevented() ? void 0 : (i.removeClass("in"),
        e.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(),
        this.hoverState = null,
        this)
    }
    ,
    n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0]
          , a = "BODY" == n.tagName
          , o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var i = window.SVGElement && n instanceof window.SVGElement
          , l = a ? {
            top: 0,
            left: 0
        } : i ? null : t.offset()
          , r = {
            scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , c = a ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, o, r, c, l)
    }
    ,
    n.prototype.getCalculatedOffset = function(e, t, n, a) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - a,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - a / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - a / 2,
            left: t.left + t.width
        }
    }
    ,
    n.prototype.getViewportAdjustedDelta = function(e, t, n, a) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return o;
        var i = this.options.viewport && this.options.viewport.padding || 0
          , l = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var r = t.top - i - l.scroll
              , c = t.top + i - l.scroll + a;
            r < l.top ? o.top = l.top - r : c > l.top + l.height && (o.top = l.top + l.height - c)
        } else {
            var s = t.left - i
              , u = t.left + i + n;
            s < l.left ? o.left = l.left - s : u > l.right && (o.left = l.left + l.width - u)
        }
        return o
    }
    ,
    n.prototype.getTitle = function() {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }
    ,
    n.prototype.getUID = function(e) {
        do
            e += ~~(1e6 * Math.random());
        while (document.getElementById(e));
        return e
    }
    ,
    n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    n.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    n.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type),
        n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n))),
        t ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null,
            e.$element = null
        })
    }
    ;
    var a = e.fn.tooltip;
    e.fn.tooltip = t,
    e.fn.tooltip.Constructor = n,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = a,
        this
    }
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var a = e(this)
              , o = a.data("bs.popover")
              , i = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || a.data("bs.popover", o = new n(this,i)),
            "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7",
    n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    n.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var a = e.fn.popover;
    e.fn.popover = t,
    e.fn.popover.Constructor = n,
    e.fn.popover.noConflict = function() {
        return e.fn.popover = a,
        this
    }
}(jQuery),
+function(e) {
    "use strict";
    function t(n, a) {
        this.$body = e(document.body),
        this.$scrollElement = e(e(n).is(document.body) ? window : n),
        this.options = e.extend({}, t.DEFAULTS, a),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var a = e(this)
              , o = a.data("bs.scrollspy")
              , i = "object" == typeof n && n;
            o || a.data("bs.scrollspy", o = new t(this,i)),
            "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.7",
    t.DEFAULTS = {
        offset: 10
    },
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    t.prototype.refresh = function() {
        var t = this
          , n = "offset"
          , a = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        e.isWindow(this.$scrollElement[0]) || (n = "position",
        a = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var t = e(this)
              , o = t.data("target") || t.attr("href")
              , i = /^#./.test(o) && e(o);
            return i && i.length && i.is(":visible") && [[i[n]().top + a, o]] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]),
            t.targets.push(this[1])
        })
    }
    ,
    t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), a = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, i = this.targets, l = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        t >= a)
            return l != (e = i[i.length - 1]) && this.activate(e);
        if (l && t < o[0])
            return this.activeTarget = null,
            this.clear();
        for (e = o.length; e--; )
            l != i[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(i[e])
    }
    ,
    t.prototype.activate = function(t) {
        this.activeTarget = t,
        this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , a = e(n).parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")),
        a.trigger("activate.bs.scrollspy")
    }
    ,
    t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var a = e.fn.scrollspy;
    e.fn.scrollspy = n,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = a,
        this
    }
    ,
    e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var a = e(this)
              , o = a.data("bs.tab");
            o || a.data("bs.tab", o = new n(this)),
            "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var t = this.element
          , n = t.closest("ul:not(.dropdown-menu)")
          , a = t.data("target");
        if (a || (a = t.attr("href"),
        a = a && a.replace(/.*(?=#[^\s]*$)/, "")),
        !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")
              , i = e.Event("hide.bs.tab", {
                relatedTarget: t[0]
            })
              , l = e.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
            if (o.trigger(i),
            t.trigger(l),
            !l.isDefaultPrevented() && !i.isDefaultPrevented()) {
                var r = e(a);
                this.activate(t.closest("li"), n),
                this.activate(r, r.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }),
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }
    ,
    n.prototype.activate = function(t, a, o) {
        function i() {
            l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            r ? (t[0].offsetWidth,
            t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            o && o()
        }
        var l = a.find("> .active")
          , r = o && e.support.transition && (l.length && l.hasClass("fade") || !!a.find("> .fade").length);
        l.length && r ? l.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(),
        l.removeClass("in")
    }
    ;
    var a = e.fn.tab;
    e.fn.tab = t,
    e.fn.tab.Constructor = n,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = a,
        this
    }
    ;
    var o = function(n) {
        n.preventDefault(),
        t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var a = e(this)
              , o = a.data("bs.affix")
              , i = "object" == typeof t && t;
            o || a.data("bs.affix", o = new n(this,i)),
            "string" == typeof t && o[t]()
        })
    }
    var n = function(t, a) {
        this.options = e.extend({}, n.DEFAULTS, a),
        this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = e(t),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.3.7",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(e, t, n, a) {
        var o = this.$target.scrollTop()
          , i = this.$element.offset()
          , l = this.$target.height();
        if (null != n && "top" == this.affixed)
            return n > o && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(o + this.unpin <= i.top) && "bottom" : !(e - a >= o + l) && "bottom";
        var r = null == this.affixed
          , c = r ? o : i.top
          , s = r ? l : t;
        return null != n && n >= o ? "top" : null != a && c + s >= e - a && "bottom"
    }
    ,
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }
    ,
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }
    ,
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height()
              , a = this.options.offset
              , o = a.top
              , i = a.bottom
              , l = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof a && (i = o = a),
            "function" == typeof o && (o = a.top(this.$element)),
            "function" == typeof i && (i = a.bottom(this.$element));
            var r = this.getState(l, t, o, i);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var c = "affix" + (r ? "-" + r : "")
                  , s = e.Event(c + ".bs.affix");
                if (this.$element.trigger(s),
                s.isDefaultPrevented())
                    return;
                this.affixed = r,
                this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(c).trigger(c.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: l - t - i
            })
        }
    }
    ;
    var a = e.fn.affix;
    e.fn.affix = t,
    e.fn.affix.Constructor = n,
    e.fn.affix.noConflict = function() {
        return e.fn.affix = a,
        this
    }
    ,
    e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this)
              , a = n.data();
            a.offset = a.offset || {},
            null != a.offsetBottom && (a.offset.bottom = a.offsetBottom),
            null != a.offsetTop && (a.offset.top = a.offsetTop),
            t.call(n, a)
        })
    })
}(jQuery),
function(e, t) {
    function n(e) {
        return function(t) {
            return {}.toString.call(t) == "[object " + e + "]"
        }
    }
    function a() {
        return k++
    }
    function o(e) {
        return e.match(_)[0]
    }
    function i(e) {
        for (e = e.replace(S, "/"),
        e = e.replace(L, "$1/"); e.match(D); )
            e = e.replace(D, "/");
        return e
    }
    function l(e) {
        var t = e.length - 1
          , n = e.charCodeAt(t);
        return 35 === n ? e.substring(0, t) : ".js" === e.substring(t - 2) || e.indexOf("?") > 0 || 47 === n ? e : e + ".js"
    }
    function r(e) {
        var t = y.alias;
        return t && C(t[e]) ? t[e] : e
    }
    function c(e) {
        var t, n = y.paths;
        return n && (t = e.match(O)) && C(n[t[1]]) && (e = n[t[1]] + t[2]),
        e
    }
    function s(e) {
        var t = y.vars;
        return t && e.indexOf("{") > -1 && (e = e.replace($, function(e, n) {
            return C(t[n]) ? t[n] : e
        })),
        e
    }
    function u(e) {
        var t = y.map
          , n = e;
        if (t)
            for (var a = 0, o = t.length; o > a; a++) {
                var i = t[a];
                if (n = T(i) ? i(e) || e : e.replace(i[0], i[1]),
                n !== e)
                    break
            }
        return n
    }
    function p(e, t) {
        var n, a = e.charCodeAt(0);
        if (B.test(e))
            n = e;
        else if (46 === a)
            n = (t ? o(t) : y.cwd) + e;
        else if (47 === a) {
            var l = y.cwd.match(N);
            n = l ? l[0] + e.substring(1) : e
        } else
            n = y.base + e;
        return 0 === n.indexOf("//") && (n = location.protocol + n),
        i(n)
    }
    function d(e, t) {
        if (!e)
            return "";
        e = r(e),
        e = c(e),
        e = r(e),
        e = s(e),
        e = r(e),
        e = l(e),
        e = r(e);
        var n = p(e, t);
        return n = r(n),
        n = u(n)
    }
    function h(e) {
        return e.hasAttribute ? e.src : e.getAttribute("src", 4)
    }
    function f(e, t) {
        var n;
        try {
            importScripts(e)
        } catch (a) {
            n = a
        }
        t(n)
    }
    function b(e, t, n) {
        var a = X.createElement("script");
        if (n) {
            var o = T(n) ? n(e) : n;
            o && (a.charset = o)
        }
        if ("undefined" != typeof __dirname) {
            var i = require("fs")
              , l = e.replace("http://sj.jihui88.com/mobile/scripts/core/", "");
            i.readFile(l.replace(/\?.*$/gim, ""), function(e, n) {
                if (e)
                    throw e;
                a.innerHTML = n.toString(),
                Z = a,
                tt ? et.insertBefore(a, tt) : et.appendChild(a),
                Z = null,
                t.call(this)
            })
        } else
            v(a, t, e),
            a.async = !0,
            a.src = e,
            Z = a,
            tt ? et.insertBefore(a, tt) : et.appendChild(a),
            Z = null
    }
    function v(e, t, n) {
        function a(n) {
            e.onload = e.onerror = e.onreadystatechange = null,
            y.debug || et.removeChild(e),
            e = null,
            t(n)
        }
        var o = "onload"in e;
        o ? (e.onload = a,
        e.onerror = function() {
            A("error", {
                uri: n,
                node: e
            }),
            a(!0)
        }
        ) : e.onreadystatechange = function() {
            /loaded|complete/.test(e.readyState) && a()
        }
    }
    function g() {
        if (Z)
            return Z;
        if (nt && "interactive" === nt.readyState)
            return nt;
        for (var e = et.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
            var n = e[t];
            if ("interactive" === n.readyState)
                return nt = n
        }
    }
    function m(e) {
        function t() {
            u = e.charAt(p++)
        }
        function n() {
            return /\s/.test(u)
        }
        function a() {
            return '"' == u || "'" == u
        }
        function o() {
            var n = p
              , a = u
              , o = e.indexOf(a, n);
            if (-1 == o)
                p = d;
            else if ("\\" != e.charAt(o - 1))
                p = o + 1;
            else
                for (; d > p; )
                    if (t(),
                    "\\" == u)
                        p++;
                    else if (u == a)
                        break;
            f && (g.push(e.slice(n, p - 1)),
            f = 0)
        }
        function i() {
            for (p--; d > p; )
                if (t(),
                "\\" == u)
                    p++;
                else {
                    if ("/" == u)
                        break;
                    if ("[" == u)
                        for (; d > p; )
                            if (t(),
                            "\\" == u)
                                p++;
                            else if ("]" == u)
                                break
                }
        }
        function l() {
            return /[a-z_$]/i.test(u)
        }
        function r() {
            var t = e.slice(p - 1)
              , n = /^[\w$]+/.exec(t)[0];
            b = {
                "if": 1,
                "for": 1,
                "while": 1,
                "with": 1
            }[n],
            h = {
                "break": 1,
                "case": 1,
                "continue": 1,
                "debugger": 1,
                "delete": 1,
                "do": 1,
                "else": 1,
                "false": 1,
                "if": 1,
                "in": 1,
                "instanceof": 1,
                "return": 1,
                "typeof": 1,
                "void": 1
            }[n],
            f = /^require\s*\(\s*(['"]).+?\1\s*\)/.test(t),
            f ? (n = /^require\s*\(\s*['"]/.exec(t)[0],
            p += n.length - 2) : p += /^[\w$]+(?:\s*\.\s*[\w$]+)*/.exec(t)[0].length - 1
        }
        function c() {
            return /\d/.test(u) || "." == u && /\d/.test(e.charAt(p))
        }
        function s() {
            var t, n = e.slice(p - 1);
            t = "." == u ? /^\.\d+(?:E[+-]?\d*)?\s*/i.exec(n)[0] : /^0x[\da-f]*/i.test(n) ? /^0x[\da-f]*\s*/i.exec(n)[0] : /^\d+\.?\d*(?:E[+-]?\d*)?\s*/i.exec(n)[0],
            p += t.length - 1,
            h = 0
        }
        if (-1 == e.indexOf("require"))
            return [];
        for (var u, p = 0, d = e.length, h = 1, f = 0, b = 0, v = [], g = []; d > p; )
            t(),
            n() || (a() ? (o(),
            h = 1) : "/" == u ? (t(),
            "/" == u ? (p = e.indexOf("\n", p),
            -1 == p && (p = e.length)) : "*" == u ? (p = e.indexOf("*/", p),
            -1 == p ? p = d : p += 2) : h ? (i(),
            h = 0) : (p--,
            h = 1)) : l() ? r() : c() ? s() : "(" == u ? (v.push(b),
            h = 1) : ")" == u ? h = v.pop() : (h = "]" != u,
            f = 0));
        return g
    }
    function x(e, t) {
        this.uri = e,
        this.dependencies = t || [],
        this.deps = {},
        this.status = 0,
        this._entry = []
    }
    if (!e.seajs) {
        var w = e.seajs = {
            version: "3.0.0"
        }
          , y = w.data = {}
          , I = n("Object")
          , C = n("String")
          , E = Array.isArray || n("Array")
          , T = n("Function")
          , k = 0
          , j = y.events = {};
        w.on = function(e, t) {
            var n = j[e] || (j[e] = []);
            return n.push(t),
            w
        }
        ,
        w.off = function(e, t) {
            if (!e && !t)
                return j = y.events = {},
                w;
            var n = j[e];
            if (n)
                if (t)
                    for (var a = n.length - 1; a >= 0; a--)
                        n[a] === t && n.splice(a, 1);
                else
                    delete j[e];
            return w
        }
        ;
        var A = w.emit = function(e, t) {
            var n = j[e];
            if (n) {
                n = n.slice();
                for (var a = 0, o = n.length; o > a; a++)
                    n[a](t)
            }
            return w
        }
          , _ = /[^?#]*\//
          , S = /\/\.\//g
          , D = /\/[^/]+\/\.\.\//
          , L = /([^:/])\/+\//g
          , O = /^([^/:]+)(\/.+)$/
          , $ = /{([^{]+)}/g
          , B = /^\/\/.|:\//
          , N = /^.*?\/\/.*?\//;
        w.resolve = d;
        var P, F, q = "undefined" == typeof window && "undefined" != typeof importScripts && T(importScripts), U = /^(about|blob):/, R = !location.href || U.test(location.href) ? "" : o(location.href);
        if (q) {
            var M;
            try {
                var z = new Error;
                throw z
            } catch (H) {
                M = H.stack.split("\n")
            }
            M.shift();
            for (var V, W = /.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i, Q = /(.*?):\d+:\d+\)?$/; M.length > 0; ) {
                var G = M.shift();
                if (V = W.exec(G),
                null != V)
                    break
            }
            var J;
            if (null != V)
                var J = Q.exec(V[1])[1];
            F = J,
            P = o(J || R),
            "" === R && (R = P)
        } else {
            var X = document
              , Y = X.scripts
              , K = X.getElementById("seajsnode") || Y[Y.length - 1];
            F = h(K),
            P = o(F || R)
        }
        if (q)
            w.request = f;
        else {
            var Z, X = document, et = X.head || X.getElementsByTagName("head")[0] || X.documentElement, tt = et.getElementsByTagName("base")[0];
            w.request = b
        }
        var nt, at, ot = w.cache = {}, it = {}, lt = {}, rt = {}, ct = x.STATUS = {
            FETCHING: 1,
            SAVED: 2,
            LOADING: 3,
            LOADED: 4,
            EXECUTING: 5,
            EXECUTED: 6,
            ERROR: 7
        };
        x.prototype.resolve = function() {
            for (var e = this, t = e.dependencies, n = [], a = 0, o = t.length; o > a; a++)
                n[a] = x.resolve(t[a], e.uri);
            return n
        }
        ,
        x.prototype.pass = function() {
            for (var e = this, t = e.dependencies.length, n = 0; n < e._entry.length; n++) {
                for (var a = e._entry[n], o = 0, i = 0; t > i; i++) {
                    var l = e.deps[e.dependencies[i]];
                    l.status < ct.LOADED && !a.history.hasOwnProperty(l.uri) && (a.history[l.uri] = !0,
                    o++,
                    l._entry.push(a),
                    l.status === ct.LOADING && l.pass())
                }
                o > 0 && (a.remain += o - 1,
                e._entry.shift(),
                n--)
            }
        }
        ,
        x.prototype.load = function() {
            var e = this;
            if (!(e.status >= ct.LOADING)) {
                e.status = ct.LOADING;
                var t = e.resolve();
                A("load", t);
                for (var n = 0, a = t.length; a > n; n++)
                    e.deps[e.dependencies[n]] = x.get(t[n]);
                if (e.pass(),
                e._entry.length)
                    return void e.onload();
                var o, i = {};
                for (n = 0; a > n; n++)
                    o = ot[t[n]],
                    o.status < ct.FETCHING ? o.fetch(i) : o.status === ct.SAVED && o.load();
                for (var l in i)
                    i.hasOwnProperty(l) && i[l]()
            }
        }
        ,
        x.prototype.onload = function() {
            var e = this;
            e.status = ct.LOADED;
            for (var t = 0, n = (e._entry || []).length; n > t; t++) {
                var a = e._entry[t];
                0 === --a.remain && a.callback()
            }
            delete e._entry
        }
        ,
        x.prototype.error = function() {
            var e = this;
            e.onload(),
            e.status = ct.ERROR
        }
        ,
        x.prototype.exec = function() {
            function e(t) {
                var a = n.deps[t] || x.get(e.resolve(t));
                if (a.status == ct.ERROR)
                    throw new Error("module was broken: " + a.uri);
                return a.exec()
            }
            var n = this;
            if (n.status >= ct.EXECUTING)
                return n.exports;
            if (n.status = ct.EXECUTING,
            n._entry && !n._entry.length && delete n._entry,
            !n.hasOwnProperty("factory"))
                return void (n.non = !0);
            var o = n.uri;
            e.resolve = function(e) {
                return x.resolve(e, o)
            }
            ,
            e.async = function(t, n) {
                return x.use(t, n, o + "_async_" + a()),
                e
            }
            ;
            var i = n.factory
              , l = T(i) ? i(e, n.exports = {}, n) : i;
            return l === t && (l = n.exports),
            delete n.factory,
            n.exports = l,
            n.status = ct.EXECUTED,
            A("exec", n),
            n.exports
        }
        ,
        x.prototype.fetch = function(e) {
            function t() {
                w.request(i.requestUri, i.onRequest, i.charset)
            }
            function n(e) {
                delete it[l],
                lt[l] = !0,
                at && (x.save(o, at),
                at = null);
                var t, n = rt[l];
                for (delete rt[l]; t = n.shift(); )
                    e === !0 ? t.error() : t.load()
            }
            var a = this
              , o = a.uri;
            a.status = ct.FETCHING;
            var i = {
                uri: o
            };
            A("fetch", i);
            var l = i.requestUri || o;
            return !l || lt.hasOwnProperty(l) ? void a.load() : it.hasOwnProperty(l) ? void rt[l].push(a) : (it[l] = !0,
            rt[l] = [a],
            A("request", i = {
                uri: o,
                requestUri: l,
                onRequest: n,
                charset: T(y.charset) ? y.charset(l) || "utf-8" : y.charset
            }),
            void (i.requested || (e ? e[i.requestUri] = t : t())))
        }
        ,
        x.resolve = function(e, t) {
            var n = {
                id: e,
                refUri: t
            };
            return A("resolve", n),
            n.uri || w.resolve(n.id, t)
        }
        ,
        x.define = function(e, n, a) {
            var o = arguments.length;
            1 === o ? (a = e,
            e = t) : 2 === o && (a = n,
            E(e) ? (n = e,
            e = t) : n = t),
            !E(n) && T(a) && (n = "undefined" == typeof m ? [] : m(a.toString()));
            var i = {
                id: e,
                uri: x.resolve(e),
                deps: n,
                factory: a
            };
            if (!q && !i.uri && X.attachEvent && "undefined" != typeof g) {
                var l = g();
                l && (i.uri = l.src)
            }
            A("define", i),
            i.uri ? x.save(i.uri, i) : at = i
        }
        ,
        x.save = function(e, t) {
            var n = x.get(e);
            n.status < ct.SAVED && (n.id = t.id || e,
            n.dependencies = t.deps || [],
            n.factory = t.factory,
            n.status = ct.SAVED,
            A("save", n))
        }
        ,
        x.get = function(e, t) {
            return ot[e] || (ot[e] = new x(e,t))
        }
        ,
        x.use = function(t, n, a) {
            var o = x.get(a, E(t) ? t : [t]);
            o._entry.push(o),
            o.history = {},
            o.remain = 1,
            o.callback = function() {
                for (var t = [], a = o.resolve(), i = 0, l = a.length; l > i; i++)
                    t[i] = ot[a[i]].exec();
                n && n.apply(e, t),
                delete o.callback,
                delete o.history,
                delete o.remain,
                delete o._entry
            }
            ,
            o.load()
        }
        ,
        w.use = function(e, t) {
            return x.use(e, t, y.cwd + "_use_" + a()),
            w
        }
        ,
        x.define.cmd = {},
        e.define = x.define,
        w.Module = x,
        y.fetchedList = lt,
        y.cid = a,
        w.require = function(e) {
            var t = x.get(x.resolve(e));
            return t.status < ct.EXECUTING && (t.onload(),
            t.exec()),
            t.exports
        }
        ,
        y.base = P,
        y.dir = P,
        y.loader = F,
        y.cwd = R,
        y.charset = "utf-8",
        w.config = function(e) {
            for (var t in e) {
                var n = e[t]
                  , a = y[t];
                if (a && I(a))
                    for (var o in n)
                        a[o] = n[o];
                else
                    E(a) ? n = a.concat(n) : "base" === t && ("/" !== n.slice(-1) && (n += "/"),
                    n = p(n)),
                    y[t] = n
            }
            return A("config", e),
            w
        }
    }
}(this),
function() {
    function e(e) {
        r[e.name] = e
    }
    function t(e) {
        return e && r.hasOwnProperty(e)
    }
    function n(e) {
        for (var n in r)
            if (t(n)) {
                var a = "," + r[n].ext.join(",") + ",";
                if (a.indexOf("," + e + ",") > -1)
                    return n
            }
    }
    function a(e, t) {
        if ("undefined" == typeof __dirname) {
            var n = l.XMLHttpRequest ? new l.XMLHttpRequest : new l.ActiveXObject("Microsoft.XMLHTTP");
            return n.open("GET", e, !0),
            n.onreadystatechange = function() {
                if (4 === n.readyState) {
                    if (n.status > 399 && n.status < 600)
                        throw new Error("Could not load: " + e + ", status = " + n.status);
                    t(n.responseText)
                }
            }
            ,
            n.send(null)
        }
        var a = require("fs")
          , o = e.replace("http://sj.jihui88.com/mobile/scripts/core/", "");
        a.readFile(o.replace(/\?.*$/gim, ""), function(e, n) {
            if (e)
                throw e;
            t(n.toString())
        })
    }
    function o(e) {
        e && /\S/.test(e) && (l.execScript || function(e) {
            (l.eval || eval).call(l, e)
        }
        )(e)
    }
    function i(e) {
        return e.replace(/(["\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
    }
    var l = window
      , r = {}
      , c = {};
    e({
        name: "text",
        ext: [".tpl", ".html"],
        exec: function(e, t) {
            o('define("' + e + '#", [], "' + i(t) + '")')
        }
    }),
    e({
        name: "json",
        ext: [".json"],
        exec: function(e, t) {
            o('define("' + e + '#", [], ' + t + ")")
        }
    }),
    e({
        name: "handlebars",
        ext: [".handlebars"],
        exec: function(e, t) {
            var n = ['define("' + e + '#", ["handlebars"], function(require, exports, module) {', '  var source = "' + i(t) + '"', '  var Handlebars = require("handlebars")["default"]', "  module.exports = function(data, options) {", "    options || (options = {})", "    options.helpers || (options.helpers = {})", "    for (var key in Handlebars.helpers) {", "      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]", "    }", "    return Handlebars.compile(source)(data, options)", "  }", "})"].join("\n");
            o(n)
        }
    }),
    seajs.on("resolve", function(e) {
        var a = e.id;
        if (!a)
            return "";
        var o, i;
        (i = a.match(/^(\w+)!(.+)$/)) && t(i[1]) ? (o = i[1],
        a = i[2]) : (i = a.match(/[^?]+(\.\w+)(?:\?|#|$)/)) && (o = n(i[1])),
        o && -1 === a.indexOf("#") && (a += "#");
        var l = seajs.resolve(a, e.refUri);
        o && (c[l] = o),
        e.uri = l
    }),
    seajs.on("request", function(e) {
        var t = c[e.uri];
        t && (a(e.requestUri, function(n) {
            r[t].exec(e.uri, n),
            e.onRequest()
        }),
        e.requested = !0)
    }),
    define("seajs/seajs-text/1.1.1/seajs-text-debug", [], {})
}();
var httpName = 0 === window.location.href.indexOf("https") ? "https://" : "http://"
  , href = window.location.href.indexOf(httpName + "pc.") > -1 ? window.location.href : window.location.href.indexOf("localhost:8580") > -1 ? httpName + "localhost:8580/rest/site" : httpName + "pc.jihui88.com/rest/site"
  , _DOMAIN = href.replace(httpName, "");
_DOMAIN = httpName + _DOMAIN.substring(0, _DOMAIN.indexOf("/"));
var tail = _DOMAIN.replace(httpName, "").replace("pc.", "")
  , CONST = {
    SERVER_TEST: href.indexOf("pc.ykit.net") > -1 ? !0 : href.indexOf("debug=true") > -1 ? !0 : !1,
    APP_VERSION: "4.46.75",
    HOST: _DOMAIN + "/pc",
    API: _DOMAIN + "/rest/api",
    PUBLIC_API: _DOMAIN + "/rest",
    DOMAIN: _DOMAIN,
    STATIC_URL: _DOMAIN + "/html/",
    DOMAIN_TAIL: tail,
    ADMIN_URL: _DOMAIN.indexOf("jihui88.com") > -1 ? httpName + "i.jihui88.com" : httpName + "admin." + tail,
    PIC_URL: httpName + "cdn.jihui88.com",
    CDN: httpName + "img.jihui88.com/wcd/cnd/manage",
    MUSIC_URL: "http://f.bbase.com",
    MAIN_COLOR: "#FF5241",
    LIGHT_COLOR: "#f27d72",
    LIGHTEN_COLOR: "#fff7f6",
    LIGHTEST_COLOR: "#fff7f6",
    SEP: "/",
    PIC_NONE: "/pc/images/nopic.png?v=002",
    PIC_LOADING: "/pc/images/nopic.png?v=002",
    BG_NONE: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==",
    DELIVERY_URL: httpName + "api.ickd.cn/?id=108377&secret=1d323e291b7778da812664d0386f7b11&type=json&ord=desc&encode=utf8&ver=2",
    ENTER_KEY: 13,
    COLLAPSE_SPEED: 50,
    SUBMIT_TIP: "提交中",
    AJAX_TIMEOUT: 1e4,
    HEIGHT_WINDOW: "undefined" == typeof $ ? 0 : $(window).height(),
    LIB_FORDER: "lib",
    SCREEN_SIZE: 1280,
    DEBUG_SEAJS: !1,
    DEBUG_LOCALSERVICE: !1,
    ON_BEFORE_UNLOAD: !0,
    EXPERIENCE: !1,
    DEBUG_CONSOLE: !1,
    APP_UPDATE: null,
    APP_TIP: "20160926",
    APP_TIPMSG: null,
    TEST: "97,2448,3170".indexOf(window.layoutId || "99999") > -1,
    LANG: {
        NOT_LOGIN: "未登录",
        SUBMIT: "提交中..",
        COMMIT: "提交",
        SAVE: "保存",
        EDIT: "修改",
        CONFIRM: "确定",
        CLOSE: "关闭",
        ADD: "添加",
        ADD_CONTINUE: "继续添加",
        TIP: "提示",
        SUCCESS: "操作成功",
        WARM_TIP: "温馨提示",
        DEL_TIP: "该分类下还有子分类， 请先删除子分类！",
        DEL_CONFIRM: "是否删除?",
        AUTH_FAILED: "权限验证失败",
        AUTH_LIMIT: "权限不够",
        LOAD_ALL: "已全部加载",
        NO_RESULT: "暂无内容",
        SELECT_ONE: "请至少选择一项",
        DEL_SUCCESS: "删除成功",
        REQUIRE_FAILED: "数据异常, 稍后请重试！",
        SELECT_DEFAULT: "请选择",
        UPLOAD_OPTION_REQUIRE: "图片上传配置不能为空",
        UPLOAD_IMG: "上传图片",
        INSERT_CONTACT: "插入联系方式",
        SELECT_MAP: "选择Google/Baidu地圖",
        SELECT_TPL: "选择模版",
        BUILD_QRCODE: "生成二维码",
        SELECT_IMG: "选择图片",
        SELECT_FLASH: "选择flash",
        SELECT_QQ: "选择QQ/MSN/Skype/阿里旺旺/淘宝旺旺",
        VIEW: "浏览",
        DIALOG_TIP: "对话框",
        WIN_TIP: "窗口",
        INFO_TIP: "提示信息：",
        CANCEL: "取消",
        JSON_TIP: "您的浏览器版本过低， 请升级到IE9及以上或下载谷歌浏览器(https://www.google.com/intl/zh-CN/chrome/browser/desktop/index.html)！"
    }
};
window.CONST = CONST,
function() {
    "use strict";
    function e(e, t) {
        this._chain = !!t,
        this._wrapped = e
    }
    function t(e) {
        return N[typeof e] || N[L.call(e)] || (e ? "object" : "null")
    }
    function n(e) {
        return e
    }
    function a(e) {
        return function(n) {
            return "string" === t(n) ? null : getValue(n, e)
        }
    }
    function o(e) {
        return "function" == typeof e
    }
    function i(e) {
        return function(t) {
            if (null == t)
                return x(e);
            if (t === e)
                return !0;
            for (var n in e)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
    }
    function l(e) {
        if ("object" !== t(e))
            return [];
        if ($)
            return $(e);
        var n = [];
        for (var a in e)
            hasKey(e, a) && n.push(a);
        return n
    }
    function r(e, t, n) {
        var a, o, i = !1, r = !1;
        if (null == e)
            return e;
        if (t = F(t, n),
        e.length === +e.length)
            for (a = 0,
            o = e.length; o > a && (i = 0 === a ? !0 : !1,
            r = a === o - 1 ? !0 : !1,
            t(e[a], a, e, i, r) !== !1); a++)
                ;
        else {
            var c = l(e);
            for (a = 0,
            o = c.length; o > a && (i = 0 === a ? !0 : !1,
            r = a === c.length - 1 ? !0 : !1,
            t(e[c[a]], c[a], e, a, i, r) !== !1); a++)
                ;
        }
        return e
    }
    function c(e) {
        return "object" !== t(e) ? e : (r(S.call(arguments, 1), function(t) {
            for (var n in t)
                e[n] = t[n]
        }),
        e)
    }
    function s(e) {
        var t = [];
        for (var n in e)
            o(e[n]) && t.push(n);
        return t.sort()
    }
    function u(e) {
        try {
            for (var t = 5381, n = e.length; n; )
                t = 33 * t ^ e.charCodeAt(--n);
            return t >>> 0
        } catch (a) {
            debug("err34" + a)
        }
    }
    function p(e) {
        try {
            return String.fromCharCode(e)
        } catch (t) {}
    }
    function d(e) {
        return e = e || "",
        e.replace(/&amp;/gm, "&").replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"').replace(/&#([\d]+);/gm, function(e, t) {
            return p(parseInt(t, 10))
        })
    }
    function h(e, t) {
        if (e.indexOf)
            return e.indexOf(t);
        for (var n = 0, a = e.length; a > n; n++)
            if (t === e[n])
                return n;
        return -1
    }
    function f(e, n) {
        return "array" === t(e) ? e.indexOf ? e.indexOf(n) : h(e, n) : e.indexOf(n)
    }
    function b(e, n) {
        var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
        "undefined" !== t(n) && (n = n.substring(n.indexOf("?"), n.length));
        var o = n || window.location.search
          , i = o.substr(1).match(a);
        return null != i ? unescape(i[2]) : null
    }
    function v(e, t, n) {
        var a, o = "", i = "", l = "", c = "0";
        return n = n || window.location.href,
        -1 == f(n, "?") ? n + "?" + e + "=" + t : (o = n.substr(f(n, "?") + 1),
        -1 != f(o, "&") ? (a = o.split("&"),
        r(a, function(n) {
            n.split("=")[0] == e ? (l = t,
            c = "1") : l = n.split("=")[1],
            i = i + n.split("=")[0] + "=" + l + "&"
        }),
        i = i.substr(0, i.length - 1),
        "0" == c && i == o && (i = i + "&" + e + "=" + t)) : -1 != f(o, "=") ? (a = o.split("="),
        a[0] == e ? (l = t,
        c = "1") : l = a[1],
        i = a[0] + "=" + l,
        "0" == c && i == o && (i = i + "&" + e + "=" + t)) : i = e + "=" + t,
        n.substr(0, f(n, "?")) + "?" + i)
    }
    function g(e, t) {
        var n = null;
        "string" === B.typeOf(e) && (n = parseFloat(e)),
        n && "NaN" !== String(n) && n > 1e4 && (e = n);
        var a = e
          , e = e ? new Date(e) : new Date
          , o = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        if (t = t || "yyyy-MM-dd",
        isNaN(e.getFullYear()))
            t = a;
        else {
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
            try {
                for (var i in o)
                    new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? o[i] : ("00" + o[i]).substr(("" + o[i]).length)))
            } catch (l) {
                console.log("【Error】: DateUtils.dataFormat " + l)
            }
        }
        return t
    }
    function m(e, t, n) {
        var a = [];
        return null === e ? a : (t = P(t, n),
        r(e, function(e, n, o) {
            a.push(t(e, n, o))
        }),
        a)
    }
    function x(e) {
        var n = !0;
        if ("number" === t(e))
            return !1;
        if (!e)
            return n;
        var a = L.call(e)
          , i = e.length;
        return "[object Array]" == a || "[object String]" == a || "[object Arguments]" == a || "[object Object]" == a && "number" == typeof i && o(e.splice) ? "null" === e ? !0 : !i : (r(e, function() {
            return n = !1
        }),
        n)
    }
    function w(e, t, n) {
        var a = -1
          , o = e ? e.length : 0;
        for (t = P(t, n); ++a < o; )
            if (t(e[a], a, e))
                return a;
        return -1
    }
    function y(e, t) {
        var n = q[e];
        return n ? (n.timer = setTimeout(function() {
            for (var n = q[e], a = n ? n.length : 0; a--; )
                n[a].func(e, t);
            n.timer = null
        }, 0),
        !0) : !1
    }
    function I(e, t) {
        q[e] || (q[e] = []);
        var n = (++U).toString();
        return q[e].push({
            token: n,
            func: t
        }),
        n
    }
    function C(e, t) {
        for (var n in q)
            if (n !== e || t || delete q[n],
            t && q[n])
                for (var a = 0, o = q[n].length; o > a; a++)
                    if (q[n][a].token === t)
                        return q[n].splice(a, 1),
                        t;
        return this
    }
    function E(e, n, a) {
        var o = null
          , i = null;
        try {
            var l = /\+/g;
            if (o = function(e) {
                0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return e = decodeURIComponent(e.replace(l, " "))
                } catch (t) {}
            }
            ,
            i = function(e, n) {
                var a = o(e);
                return "function" === t(n) ? n(a) : a
            }
            ,
            arguments.length > 1 && "function" !== t(n)) {
                if (a = B.extend({}, a),
                "number" == typeof a.expires) {
                    var c = a.expires
                      , s = a.expires = new Date;
                    s.setTime(+s + 864e5 * c)
                }
                return document.cookie = [encodeURIComponent(e), "=", encodeURIComponent(n), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
            }
            var u = e ? void 0 : {}
              , p = document.cookie ? document.cookie.split("; ") : [];
            return r(p, function(t) {
                var a = t.split("=")
                  , o = decodeURIComponent(a.shift())
                  , l = a.join("=");
                return e && e === o ? (u = i(l, n),
                !1) : void (e || void 0 === (l = i(l)) || (u[o] = l))
            }),
            u
        } catch (d) {
            return
        }
    }
    function T(e, t, n) {
        return function() {
            var a, o = !1, i = [].slice.call(arguments);
            return "function" == typeof t && (a = t.apply(this, i),
            a instanceof B.setArguments ? i = a.value : (o = void 0 !== a) && i.push(a)),
            "undefined" == typeof a ? !1 : (!o && i.push(e.apply(this, i)),
            a = "function" == typeof n ? n.apply(this, i.concat(o, a && a.append)) : void 0,
            void 0 !== a ? a : i.pop())
        }
    }
    function k(e, t) {
        this.value = [].slice.call(e),
        this.append = t
    }
    function j(e) {
        return "string" === t(e) ? e.toLowerCase() : e
    }
    function A() {
        var e = parseInt((/msie (\d+)/.exec(j(navigator.userAgent)) || [])[1], 10);
        return isNaN(e) && (e = parseInt((/trident\/.*; rv:(\d+)/.exec(j(navigator.userAgent)) || [])[1], 10)),
        isNaN(e) && (e = !1),
        BbaseEst.msie = function() {
            return e
        }
        ,
        e
    }
    var _ = this
      , S = Array.prototype.slice
      , D = Array.prototype.push
      , L = Object.prototype.toString
      , O = Object.prototype.hasOwnProperty
      , $ = (Array.prototype.concat,
    Array.isArray,
    Object.keys)
      , B = (Object.prototype.bind,
    window.location.href,
    function(n) {
        return n && "object" == typeof n && "array" !== t(n) && O.call(n, "_wrapped") ? n : new e(n)
    }
    );
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = B),
    exports.Est = B) : _.Est = B;
    var N = {
        undefined: "undefined",
        number: "number",
        "boolean": "boolean",
        string: "string",
        "[object Function]": "function",
        "[object RegExp]": "regexp",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object Error]": "error",
        "[object File]": "file",
        "[object Blob]": "blob"
    };
    B.typeOf = t,
    B.identity = n,
    B.property = a,
    "function" != typeof /./ && (B.isFunction = o),
    B.matches = i;
    var P = function(e, l, r) {
        return null == e ? n : o(e) ? F(e, l, r) : "object" === t(e) ? i(e) : "array" === t(e) ? e : a(e)
    }
      , F = function(e, t, n) {
        if (!t)
            return e;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, a) {
                return e.call(t, n, a)
            }
            ;
        case 3:
            return function(n, a, o) {
                return e.call(t, n, a, o)
            }
            ;
        case 4:
            return function(n, a, o, i) {
                return e.call(t, n, a, o, i)
            }
        }
        return function() {
            return e.apply(this, arguments)
        }
    };
    B.keys = l,
    B.each = B.forEach = r,
    B.extend = c,
    B.functions = B.methods = s,
    B.chain = function(t) {
        return t = new e(t),
        t._chain = !0,
        t
    }
    ,
    B.hash = u,
    B.fromCharCode = p,
    B.unescapeHTML = d,
    B.arrayIndex = h,
    B.indexOf = f,
    B.getUrlParam = b,
    B.setUrlParam = v,
    B.dateFormat = g,
    B.map = m,
    B.isEmpty = x,
    B.findIndex = w;
    var q = {}
      , U = -1;
    B.trigger = y,
    B.on = I,
    B.off = C,
    B.cookie = E,
    B.inject = T,
    B.setArguments = k,
    B.lowercase = j,
    B.msie = A,
    B.mixin = function(n, a) {
        var o = B;
        "boolean" !== t(a) || a || (o = n),
        r(s(n), function(e) {
            var t = o[e] = n[e];
            o.prototype[e] = function() {
                try {
                    var e = [];
                    "undefined" != typeof this._wrapped && e.push(this._wrapped)
                } catch (n) {
                    console.error("err35")
                }
                return D.apply(e, arguments),
                result.apply(this, [t.apply(o, e), o])
            }
        }),
        e.prototype = o.prototype,
        c(o.prototype, {
            chain: function(t, n) {
                return t = new e(t,n),
                t._chain = !0,
                t
            },
            value: function() {
                return this._wrapped
            }
        })
    }
    ,
    B.mixin(B, !0),
    "function" == typeof define && define.amd ? define("Est", [], function() {
        return B
    }) : "function" == typeof define && define.cmd && define("Est", [], function(e, t, n) {
        n.exports = B
    })
}
.call(this);
var Application = function(e) {
    this.options = e,
    Est.extend(this, e),
    this.initialize.apply(this, arguments)
};
Est.extend(Application.prototype, {
    initialize: function() {
        this.data = {
            itemActiveList: [],
            sessionId: ""
        },
        this.instance = {},
        this.modules = {},
        this.routes = {},
        this.templates = {},
        this.panels = {},
        this.dialog = [],
        this.dialogs = {},
        this.status = {},
        this.cookies = [],
        this.models = [],
        this.compileTemps = {},
        this.filters = {
            navigator: [],
            form: []
        },
        this.cache = {},
        this.directives = {}
    },
    getAppType: function() {
        return "backbone"
    },
    addRegion: function(e, t, n) {
        var a = Est.nextUid("region");
        return n.__panelId || (n.__panelId = n.el),
        n.diff && app.getView(n.viewId || e) ? (app.getView(n.viewId || e)._extend(n),
        void app.getView(n.viewId || e)._reset(n.data)) : (this.addPanel(e, {
            el: n.__panelId,
            template: '<div class="region ' + a + '"></div>',
            append: n.append
        }, n),
        n.viewId || (n.viewId = e),
        n.viewId in this.instance && this.removeView(n.viewId),
        this.addView(n.viewId, new t(n)))
    },
    addPanel: function(e, t, n) {
        var a = "string" === Est.typeOf(t.cid) ? !1 : !0;
        return n = n || {},
        BbaseUtils.addLoading(),
        a && (this.removePanel(e, t),
        t.$template = $(t.template),
        n && (n.el = t.$template),
        t.$template.addClass("__panel_" + e),
        t.$template.attr("data-view", n.viewId || e),
        t.append || $(t.el).empty(),
        $(t.el).append(t.$template)),
        this.panels[e] = t,
        a ? this : t
    },
    removePanel: function(e, t) {
        try {
            var n = [];
            t || (t = this.panels[e]),
            "body" !== t.el && ($(".region", $(t.el)).each(function() {
                n.push($(this).attr("data-view"))
            }),
            n.reverse(),
            Est.each(n, function(e) {
                app.removeView(e)
            })),
            $(".__panel_" + e, $(t.el)).off().remove(),
            delete this.panels[e]
        } catch (a) {
            console.error(a)
        }
    },
    addView: function(e, t) {
        return e in this.instance && this.removeView(e),
        this.instance[e] = t,
        t = t || {},
        t.options = t.options || {},
        t.options.viewId = t.options.viewId || e,
        this.setCurrentView(e),
        this.instance[e]
    },
    removeView: function(e) {
        try {
            this.getView(e) && (this.getView(e).destroy && this.getView(e).destroy(),
            this.getView(e)._destroy && this.getView(e)._destroy(),
            this.getView(e)._empty && this.getView(e)._empty(),
            this.getView(e).stopListening && this.getView(e).stopListening(),
            this.getView(e).$el && this.getView(e).$el.off().remove()),
            delete this.instance[e]
        } catch (t) {
            console.log(t)
        }
        return this
    },
    panel: function(e, t) {
        return this.addPanel(e, t)
    },
    show: function(e) {
        this.addView(this.currentView, e)
    },
    getPanel: function(e) {
        return this.panels[e]
    },
    add: function(e, t) {
        return this.addView(e, t)
    },
    setCurrentView: function(e) {
        this.currentView = e
    },
    getCurrentView: function() {
        return this.currentView
    },
    getView: function(e) {
        return this.instance[e]
    },
    addDialog: function(e, t) {
        return this.dialog.push(e),
        t && (app.addData("_curDialog", t),
        this.dialogs[t] = e),
        e
    },
    getDialogs: function() {
        return this.dialog
    },
    getDialog: function(e) {
        return Est.isEmpty(e) ? this.dialogs : this.dialogs[e]
    },
    getCurrentDialog: function() {
        return app.getData("_curDialog") ? this.dialogs[app.getData("_curDialog")] : null
    },
    emptyDialog: function() {
        Est.each(this.dialog, function(e) {
            e && e.close && e.close().remove()
        }),
        this.dialog = [],
        this.dialogs = {},
        app.addData("_curDialog", null)
    },
    addModel: function(e) {
        return this.models.push(e),
        e
    },
    getModels: function() {
        return this.models
    },
    addData: function(e, t) {
        this.data[e] = t
    },
    getData: function(e) {
        return this.data[e]
    },
    addModule: function(e, t) {
        e in this.modules && console.log("module:" + e + " isExisted"),
        this.modules[e] = t
    },
    getModules: function() {
        return this.modules
    },
    addRoute: function(e, t) {
        e in this.routes && console.log("route:" + e + " isExisted"),
        this.routes[e] = t
    },
    getRoutes: function() {
        return this.routes
    },
    addTemplate: function(e, t) {
        this.templates[e] = t
    },
    getTemplates: function() {
        return this.templates
    },
    addSession: function(e, t, n) {
        try {
            var a = "undefined" === Est.typeOf(n) ? "" : n ? this.data.sessionId : "";
            localStorage["___JHW_BACKBONE__" + Est.hash(a + e)] = JSON.stringify(t)
        } catch (o) {
            debug("Error9 -> addSession -> " + o)
        }
        return t
    },
    getSession: function(e, t) {
        try {
            var n = "undefined" === Est.typeOf(t) ? "" : t ? this.data.sessionId : "";
            return JSON.parse(localStorage["___JHW_BACKBONE__" + Est.hash(n + e)])
        } catch (a) {
            return app.addSession(e, ""),
            ""
        }
    },
    addCompileTemp: function(e, t) {
        this.compileTemps[e] = t
    },
    getCompileTemp: function(e) {
        return this.compileTemps[e]
    },
    addStatus: function(e, t) {
        this.status[e] = t
    },
    getStatus: function(e) {
        return this.status[e]
    },
    getAllStatus: function() {
        return this.status
    },
    addOption: function(e, t) {
        this.options[e] = t
    },
    getOption: function(e) {
        return Est.cloneDeep(this.options[e])
    },
    addFilter: function(e, t) {
        "navigator" === e ? this.filters[e].push(t) : this.filters[e] = t
    },
    getFilter: function(e) {
        return this.filters[e]
    },
    getFilters: function(e) {
        return this.filters[e]
    },
    getParamsHash: function(e) {
        var t = ""
          , n = "";
        for (var a in e)
            t += e[a];
        return n = "_hash" + Est.hash(t)
    },
    addCache: function(e, t) {
        try {
            var n = "";
            if (!t.success)
                return;
            n = this.getParamsHash(e),
            e.session && t ? app.addSession(n, t) : this.cache[n] = t
        } catch (a) {
            debug("Error12 -> addCache -> " + a)
        }
    },
    getCache: function(e) {
        var t = null
          , n = this.getParamsHash(e);
        return !e.session || app.getData("versionUpdated") ? this.cache[n] : (t = app.getSession(n)) ? JSON.parse(t) : void 0
    },
    removeCache: function(e) {
        var t = null;
        return e ? (t = this.getParamsHash(e),
        void delete this.cache[t]) : void (this.cache = {})
    },
    addCookie: function(e) {
        -1 === Est.findIndex(this.cookies, e) && this.cookies.push(e)
    },
    getCookies: function() {
        return this.cookies
    },
    addDirective: function(e, t) {
        this.directives[e] = t
    },
    getDirective: function(e) {
        return this.directives[e]
    }
}),
window.app = window.app || new Application({}),
window.Bbase = {
    MODULE: {},
    ROUTE: {},
    DIRECTIVE: {},
    TEMPLATE: {}
},
window.UEDITOR_HOME_URL = CONST.HOST + "/vendor/ueditor/",
CONST.ON_BEFORE_UNLOAD && !window.closeLeaveTip && (window.onbeforeunload = function() {
    return window.location.href.indexOf("/site/design") > -1 && window.BbaseApp && window.BbaseApp.getView("DesignCenter") && window.BbaseApp.getView("DesignCenter").hasUpdate() ? "您将要离开编辑页面，如果您尚未保存，请不要离开！" : void 0
}
);
var STATUS = {
    showHideStatus: [{
        text: "显示",
        value: "01"
    }, {
        text: "隐藏",
        value: "00"
    }],
    completeStatus: [{
        text: "",
        value: 0
    }, {
        text: '<span style="color: green;">已完成</span>',
        value: 1
    }, {
        text: '<span style="color: red;">未完成</span>',
        value: 2
    }, {
        text: '<span style="color: orange;">部分完成</span>',
        value: 3
    }],
    iconList: [{
        text: "默认",
        value: "iconDefault",
        content: ""
    }, {
        text: "",
        value: "pc-dropdown",
        content: '"\\e6a6"',
        label: ""
    }, {
        text: "",
        value: "pc-copy",
        content: '"\\e67c"',
        label: ""
    }, {
        text: "",
        value: "pc-delete",
        content: '"\\e609"',
        label: ""
    }, {
        text: "",
        value: "pc-more",
        content: '"\\e677"',
        label: ""
    }, {
        text: "",
        value: "pc-pencil",
        content: '"\\e644"',
        label: ""
    }, {
        text: "",
        value: "pc-plus",
        content: '"\\e603"',
        label: ""
    }, {
        text: "",
        value: "pc-list",
        content: '"\\e629"',
        label: ""
    }, {
        text: "",
        value: "pc-insert",
        content: '"\\e63c"',
        label: ""
    }, {
        text: "",
        value: "pc-question",
        content: '"\\e647"',
        label: ""
    }, {
        text: "",
        value: "pc-up",
        content: '"\\e761"',
        label: ""
    }, {
        text: "",
        value: "pc-down",
        content: '"\\e69e"',
        label: ""
    }, {
        text: "",
        value: "pc-edit",
        content: '"\\e893"',
        label: ""
    }, {
        text: "",
        value: "pc-x",
        content: '"\\e611"',
        label: ""
    }, {
        text: "",
        value: "pc-ok",
        content: '"\\e63d"',
        label: ""
    }],
    iconTypeItems: [{
        text: "默认风格图标",
        value: "default",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-3mianliao",
            content: '"\\e9f4"',
            label: "面料"
        }, {
            text: "",
            value: "pc-shenqingshenpi",
            content: '"\\e9ef"',
            label: "申请 审批"
        }, {
            text: "",
            value: "pc-iconset0443",
            content: '"\\e9e1"',
            label: "缩放"
        }, {
            text: "",
            value: "pc-dianchibattery142",
            content: '"\\e9c9"',
            label: "电池_battery"
        }, {
            text: "",
            value: "pc-ui1",
            content: '"\\e9c0"',
            label: "学习办公"
        }, {
            text: "",
            value: "pc-lvxingwaichu",
            content: '"\\e9bf"',
            label: "旅行外出"
        }, {
            text: "",
            value: "pc-ui",
            content: '"\\e9be"',
            label: "清洁护理"
        }, {
            text: "",
            value: "pc-tongzhi1",
            content: '"\\e9bd"',
            label: "通知"
        }, {
            text: "",
            value: "pc-shuju",
            content: '"\\e9bc"',
            label: "数据"
        }, {
            text: "",
            value: "pc-find-fav",
            content: '"\\e9bb"',
            label: "发现好物-首页"
        }, {
            text: "",
            value: "pc-caidan3",
            content: '"\\e9ba"',
            label: "菜单"
        }, {
            text: "",
            value: "pc-tongxintongxun2",
            content: '"\\e9b1"',
            label: "通信通讯"
        }, {
            text: "",
            value: "pc-huagonghuanbao",
            content: '"\\e9b0"',
            label: "化工环保"
        }, {
            text: "",
            value: "pc-dianziyuanqijian",
            content: '"\\e9af"',
            label: "电子元器件"
        }, {
            text: "",
            value: "pc-diangongdianqi",
            content: '"\\e9ae"',
            label: "电工电气"
        }, {
            text: "",
            value: "pc-yiqiyibiao",
            content: '"\\e9da"',
            label: "仪器仪表"
        }, {
            text: "",
            value: "pc-jixieshebei1",
            content: '"\\e9ac"',
            label: "机械设备"
        }, {
            text: "",
            value: "pc-ranqi",
            content: '"\\e9a9"',
            label: "燃气；火"
        }, {
            text: "",
            value: "pc-14wanchengzhifudingdan",
            content: '"\\e9a8"',
            label: "完成支付订单"
        }, {
            text: "",
            value: "pc-ink14",
            content: '"\\e9a6"',
            label: "水滴"
        }, {
            text: "",
            value: "pc-celiang",
            content: '"\\e9a5"',
            label: "测量"
        }, {
            text: "",
            value: "pc-jianqie",
            content: '"\\e99e"',
            label: "裁剪"
        }, {
            text: "",
            value: "pc-zanting",
            content: '"\\e9a9"',
            label: "暂停"
        }, {
            text: "",
            value: "pc-meiwifi",
            content: '"\\e996"',
            label: "没wifi"
        }, {
            text: "",
            value: "pc-wifi1",
            content: '"\\e995"',
            label: "wifi"
        }, {
            text: "",
            value: "pc-suoxiao",
            content: '"\\e994"',
            label: "缩小"
        }, {
            text: "",
            value: "pc-fangda",
            content: '"\\e993"',
            label: "放大"
        }, {
            text: "",
            value: "pc-shanchu1",
            content: '"\\e990"',
            label: "删除"
        }, {
            text: "",
            value: "pc-naozhong",
            content: '"\\e98f"',
            label: "闹钟"
        }, {
            text: "",
            value: "pc-shipin1",
            content: '"\\e98e"',
            label: "视频"
        }, {
            text: "",
            value: "pc-zhuomian-diannao",
            content: '"\\eb4a"',
            label: "桌面-电脑"
        }, {
            text: "",
            value: "pc-yunduanxiazai",
            content: '"\\eb46"',
            label: "云端下载"
        }, {
            text: "",
            value: "pc-yunduanshangchuan",
            content: '"\\eb45"',
            label: "云端上传"
        }, {
            text: "",
            value: "pc-yunduanlianjie",
            content: '"\\eb44"',
            label: "云端链接"
        }, {
            text: "",
            value: "pc-yunduan",
            content: '"\\eb43"',
            label: "云端"
        }, {
            text: "",
            value: "pc-yidongshebei",
            content: '"\\eb42"',
            label: "移动设备手机"
        }, {
            text: "",
            value: "pc-wenjian-wenben",
            content: '"\\eb41"',
            label: "文件-文本"
        }, {
            text: "",
            value: "pc-shuaxin",
            content: '"\\eb40"',
            label: "刷新"
        }, {
            text: "",
            value: "pc-shujuku",
            content: '"\\eb3f"',
            label: "数据库"
        }, {
            text: "",
            value: "pc-liebiao",
            content: '"\\eb3e"',
            label: "列表"
        }, {
            text: "",
            value: "pc-dayin",
            content: '"\\eb3b"',
            label: "打印"
        }, {
            text: "",
            value: "pc-chuangkou",
            content: '"\\eb3a"',
            label: "窗口"
        }, {
            text: "",
            value: "pc-chuanzhen1",
            content: '"\\eb39"',
            label: "传真"
        }, {
            text: "",
            value: "pc-caijian",
            content: '"\\eb38"',
            label: "裁剪"
        }, {
            text: "",
            value: "pc-gongsiguanli",
            content: '"\\eb29"',
            label: "公司管理"
        }, {
            text: "",
            value: "pc-shenqing1",
            content: '"\\eb24"',
            label: "申请"
        }, {
            text: "",
            value: "pc-yuechi1",
            content: '"\\eb0f"',
            label: "钥匙"
        }, {
            text: "",
            value: "pc-qixiang_xiaxue",
            content: '"\\eb0c"',
            label: "气象_下雪"
        }, {
            text: "",
            value: "pc-shuaqia",
            content: '"\\eb0b"',
            label: "刷卡"
        }, {
            text: "",
            value: "pc-jiaoyu1",
            content: '"\\eb09"',
            label: "教育"
        }, {
            text: "",
            value: "pc-dianhua13",
            content: '"\\eb08"',
            label: "电话"
        }, {
            text: "",
            value: "pc-anquanguanli",
            content: '"\\eb07"',
            label: "安全管理"
        }, {
            text: "",
            value: "pc-bichi",
            content: '"\\eb06"',
            label: "标尺"
        }, {
            text: "",
            value: "pc-kaisuo",
            content: '"\\eae3"',
            label: "开锁"
        }, {
            text: "",
            value: "pc-hezuohuoban",
            content: '"\\eae2"',
            label: "合作伙伴"
        }, {
            text: "",
            value: "pc-liuliang1",
            content: '"\\eae1"',
            label: "流量"
        }, {
            text: "",
            value: "pc-xianshang",
            content: '"\\eae0"',
            label: "线上"
        }, {
            text: "",
            value: "pc-kongjian",
            content: '"\\eadf"',
            label: "空间"
        }, {
            text: "",
            value: "pc-weixin1",
            content: '"\\eade"',
            label: "微信"
        }, {
            text: "",
            value: "pc-icon-",
            content: '"\\eadd"',
            label: "查看详情"
        }, {
            text: "",
            value: "pc-shouye3",
            content: '"\\eadc"',
            label: "首页"
        }, {
            text: "",
            value: "pc-zhinengsuo-guan",
            content: '"\\eada"',
            label: "智能锁 -关"
        }, {
            text: "",
            value: "pc-dianhuazhengzaibohao",
            content: '"\\ead9"',
            label: "电话 正在拨号"
        }, {
            text: "",
            value: "pc-location1",
            content: '"\\ead8"',
            label: "定位"
        }, {
            text: "",
            value: "pc-fuwu2",
            content: '"\\ead7"',
            label: "服务"
        }, {
            text: "",
            value: "pc-123",
            content: '"\\ead5"',
            label: "促销"
        }, {
            text: "",
            value: "pc-fangdajing7",
            content: '"\\ead4"',
            label: "放大镜"
        }, {
            text: "",
            value: "pc-xiaochengxu",
            content: '"\\ead3"',
            label: "小程序"
        }, {
            text: "",
            value: "pc-huodong",
            content: '"\\ead1"',
            label: "活动"
        }, {
            text: "",
            value: "pc-shigongzhong",
            content: '"\\ead0"',
            label: "施工中"
        }, {
            text: "",
            value: "pc-wode",
            content: '"\\eace"',
            label: "我的"
        }, {
            text: "",
            value: "pc-lianjie",
            content: '"\\eacd"',
            label: "链接"
        }, {
            text: "",
            value: "pc-fankui",
            content: '"\\eacc"',
            label: "反馈"
        }, {
            text: "",
            value: "pc-shipin2",
            content: '"\\eacb"',
            label: "视频"
        }, {
            text: "",
            value: "pc-kefu2",
            content: '"\\eaca"',
            label: "客服"
        }, {
            text: "",
            value: "pc-tuodaoshouzhang",
            content: '"\\eac8"',
            label: "拖到手掌"
        }, {
            text: "",
            value: "pc-xiazai1",
            content: '"\\eac5"',
            label: "下载"
        }, {
            text: "",
            value: "pc-tuandui2",
            content: '"\\eac4"',
            label: "团队"
        }, {
            text: "",
            value: "pc-fenxiang1",
            content: '"\\eac2"',
            label: "分享"
        }, {
            text: "",
            value: "pc-aixin",
            content: '"\\eac1"',
            label: "爱心"
        }, {
            text: "",
            value: "pc-nianxian",
            content: '"\\eac0"',
            label: "年限"
        }, {
            text: "",
            value: "pc-moban",
            content: '"\\eabf"',
            label: "模板"
        }, {
            text: "",
            value: "pc-batch-export",
            content: '"\\eabe"',
            label: "批量导出"
        }, {
            text: "",
            value: "pc-batch-import",
            content: '"\\eabd"',
            label: "批量导入"
        }, {
            text: "",
            value: "pc-batch-del",
            content: '"\\eabc"',
            label: "批量删除"
        }, {
            text: "",
            value: "pc-batch-reduce",
            content: '"\\eabb"',
            label: "批量减少"
        }, {
            text: "",
            value: "pc-batch-add",
            content: '"\\eaba"',
            label: "批量添加"
        }, {
            text: "",
            value: "pc-shafa",
            content: '"\\eab7"',
            label: "沙发"
        }, {
            text: "",
            value: "pc-tuichu1",
            content: '"\\eab6"',
            label: "退出"
        }, {
            text: "",
            value: "pc-jingpin",
            content: '"\\eab5"',
            label: "精品"
        }, {
            text: "",
            value: "pc-news_icon",
            content: '"\\eab4"',
            label: "新闻"
        }, {
            text: "",
            value: "pc-shejijingli-",
            content: '"\\eab3"',
            label: "设计经理"
        }, {
            text: "",
            value: "pc-xitongshezhi1",
            content: '"\\eab2"',
            label: "系统设置"
        }, {
            text: "",
            value: "pc-yunying",
            content: '"\\eab1"',
            label: "运营"
        }, {
            text: "",
            value: "pc-kaiye",
            content: '"\\eab0"',
            label: "开业"
        }, {
            text: "",
            value: "pc-laba",
            content: '"\\eaaf"',
            label: "喇叭"
        }, {
            text: "",
            value: "pc-fuwuqi",
            content: '"\\eaae"',
            label: "服务器"
        }, {
            text: "",
            value: "pc-L3",
            content: '"\\eaad"',
            label: "收藏"
        }, {
            text: "",
            value: "pc-liangdian",
            content: '"\\eaac"',
            label: "亮点"
        }, {
            text: "",
            value: "pc-youxiang2",
            content: '"\\eaab"',
            label: "邮箱"
        }, {
            text: "",
            value: "pc-window",
            content: '"\\eaaa"',
            label: "视窗"
        }, {
            text: "",
            value: "pc-men-",
            content: '"\\eaa8"',
            label: "门"
        }, {
            text: "",
            value: "pc-jiance1",
            content: '"\\eaa6"',
            label: "检测"
        }, {
            text: "",
            value: "pc-strategy",
            content: '"\\eaa5"',
            label: "策略"
        }, {
            text: "",
            value: "pc-tuijian",
            content: '"\\eaa4"',
            label: "推荐"
        }, {
            text: "",
            value: "pc-yasuobao",
            content: '"\\eaa2"',
            label: "压缩包"
        }, {
            text: "",
            value: "pc-gouwuche4",
            content: '"\\ea7e"',
            label: "购物车"
        }, {
            text: "",
            value: "pc-houtaiweihu",
            content: '"\\ea71"',
            label: "后台维护"
        }, {
            text: "",
            value: "pc-diqiu1",
            content: '"\\e6ad"',
            label: "地球"
        }, {
            text: "",
            value: "pc-fanhui1",
            content: '"\\ea6c"',
            label: "ea6c"
        }, {
            text: "",
            value: "pc-xiangmushenbao",
            content: '"\\ea68"',
            label: "项目申报"
        }, {
            text: "",
            value: "pc-wangluo",
            content: '"\\ea67"',
            label: "网络"
        }, {
            text: "",
            value: "pc-plus-uncheckbox",
            content: '"\\ea66"',
            label: "未多选"
        }, {
            text: "",
            value: "pc-plus-minus",
            content: '"\\ea64"',
            label: "减"
        }, {
            text: "",
            value: "pc-plus-add",
            content: '"\\ea63"',
            label: "加"
        }, {
            text: "",
            value: "pc-plus-preview",
            content: '"\\ea62"',
            label: "预览"
        }, {
            text: "",
            value: "pc-zhiwenjiesuo",
            content: '"\\ea61"',
            label: "指纹解锁"
        }, {
            text: "",
            value: "pc-yifu",
            content: '"\\ea5f"',
            label: "服装"
        }, {
            text: "",
            value: "pc-erji",
            content: '"\\ea5e"',
            label: "耳机"
        }, {
            text: "",
            value: "pc-chilun2",
            content: '"\\ea5d"',
            label: "齿轮"
        }, {
            text: "",
            value: "pc-men",
            content: '"\\ea5c"',
            label: "门"
        }, {
            text: "",
            value: "pc-qiahao",
            content: '"\\ea5b"',
            label: "卡号"
        }, {
            text: "",
            value: "pc-filter1",
            content: '"\\ea5a"',
            label: "过滤"
        }, {
            text: "",
            value: "pc-saoma",
            content: '"\\ea50"',
            label: "扫码"
        }, {
            text: "",
            value: "pc-shandian",
            content: '"\\ea4f"',
            label: "闪电"
        }, {
            text: "",
            value: "pc-zhuanyefuwu",
            content: '"\\ea4e"',
            label: "专业服务"
        }, {
            text: "",
            value: "pc-fangxinjiaoyi",
            content: '"\\ea4d"',
            label: "放心交易"
        }, {
            text: "",
            value: "pc-anquanbaozhang1",
            content: '"\\ea4c"',
            label: "安全保障"
        }, {
            text: "",
            value: "pc-chuanzhen",
            content: '"\\ea49"',
            label: "传真"
        }, {
            text: "",
            value: "pc-jiangbei",
            content: '"\\ea48"',
            label: "奖杯"
        }, {
            text: "",
            value: "pc-tixing",
            content: '"\\ea47"',
            label: "提醒"
        }, {
            text: "",
            value: "pc-fenxiang2",
            content: '"\\ea45"',
            label: "分享"
        }, {
            text: "",
            value: "pc-drgspingtairuanjianxitong46",
            content: '"\\ea44"',
            label: "平台软件系统"
        }, {
            text: "",
            value: "pc-bao1",
            content: '"\\ea43"',
            label: "包"
        }, {
            text: "",
            value: "pc-top2",
            content: '"\\ea42"',
            label: "top"
        }, {
            text: "",
            value: "pc-liebiao5",
            content: '"\\ea41"',
            label: "列表"
        }, {
            text: "",
            value: "pc-qiyefuwu",
            content: '"\\ea40"',
            label: "企业服务"
        }, {
            text: "",
            value: "pc-chuanzhen2",
            content: '"\\ea3f"',
            label: "传真"
        }, {
            text: "",
            value: "pc-gongzuonianxian",
            content: '"\\ea3e"',
            label: "工作年限"
        }, {
            text: "",
            value: "pc-cuowusql",
            content: '"\\ea3d"',
            label: "错误"
        }, {
            text: "",
            value: "pc-peixun1",
            content: '"\\ea31"',
            label: "培训"
        }, {
            text: "",
            value: "pc-shangpinjiarugouwuche",
            content: '"\\ea30"',
            label: "加入购物车"
        }, {
            text: "",
            value: "pc-gongsimingcheng",
            content: '"\\ea2c"',
            label: "公司名称"
        }, {
            text: "",
            value: "pc-yanfa",
            content: '"\\ea2b"',
            label: "研发"
        }, {
            text: "",
            value: "pc-shanchu",
            content: '"\\ea2a"',
            label: "删除"
        }, {
            text: "",
            value: "pc-tianjia",
            content: '"\\ea29"',
            label: "添加"
        }, {
            text: "",
            value: "pc-yuyin",
            content: '"\\ea22"',
            label: "语音"
        }, {
            text: "",
            value: "pc-fenlei2",
            content: '"\\ea1b"',
            label: "分类"
        }, {
            text: "",
            value: "pc-bluetooth2lanya",
            content: '"\\ea1a"',
            label: "-蓝牙"
        }, {
            text: "",
            value: "pc-xiaolvdashiicon02-copy-copy",
            content: '"\\ea07"',
            label: "点击"
        }, {
            text: "",
            value: "pc-zhinengyouhua",
            content: '"\\e9fb"',
            label: "智能优化"
        }, {
            text: "",
            value: "pc-shengqian",
            content: '"\\e9fa"',
            label: "省钱"
        }, {
            text: "",
            value: "pc-store-16",
            content: '"\\e9f9"',
            label: "存储"
        }, {
            text: "",
            value: "pc-sync",
            content: '"\\e797"',
            label: "同步,刷新"
        }, {
            text: "",
            value: "pc-transaction",
            content: '"\\e798"',
            label: "交易；事务；办理；会报，学报"
        }, {
            text: "",
            value: "pc-undo",
            content: '"\\e799"',
            label: "撤消；取消；解开；破坏；扰乱"
        }, {
            text: "",
            value: "pc-redo",
            content: '"\\e79a"',
            label: "重做；重新装饰"
        }, {
            text: "",
            value: "pc-reload",
            content: '"\\e79b"',
            label: "重新装；再装填弹药；重载；重新载入"
        }, {
            text: "",
            value: "pc-reloadtime",
            content: '"\\e79c"',
            label: "时间表"
        }, {
            text: "",
            value: "pc-message1",
            content: '"\\e79d"',
            label: "留言；回复"
        }, {
            text: "",
            value: "pc-dashboard",
            content: '"\\e79e"',
            label: "仪表盘；仪表板;控制面板"
        }, {
            text: "",
            value: "pc-issuesclose",
            content: '"\\e79f"',
            label: "问题关闭"
        }, {
            text: "",
            value: "pc-poweroff",
            content: '"\\e7a0"',
            label: "定时关机；关闭电源"
        }, {
            text: "",
            value: "pc-logout",
            content: '"\\e7a1"',
            label: "注销；退网；退出系统"
        }, {
            text: "",
            value: "pc-login",
            content: '"\\e7a2"',
            label: "进入系统；登录；注册"
        }, {
            text: "",
            value: "pc-piechart",
            content: '"\\e7a3"',
            label: "图表"
        }, {
            text: "",
            value: "pc-setting1",
            content: '"\\e7a4"',
            label: "设置"
        }, {
            text: "",
            value: "pc-eye",
            content: '"\\e7a5"',
            label: "眼睛"
        }, {
            text: "",
            value: "pc-location",
            content: '"\\e7a6"',
            label: "位置"
        }, {
            text: "",
            value: "pc-edit-square",
            content: '"\\e7a7"',
            label: "编辑"
        }, {
            text: "",
            value: "pc-export",
            content: '"\\e7a8"',
            label: "输出；出口"
        }, {
            text: "",
            value: "pc-save",
            content: '"\\e7a9"',
            label: "保存"
        }, {
            text: "",
            value: "pc-Import",
            content: '"\\e7aa"',
            label: "导入；进口；输入；汇入"
        }, {
            text: "",
            value: "pc-appstore",
            content: '"\\e7ab"',
            label: "应用商店"
        }, {
            text: "",
            value: "pc-adduser",
            content: '"\\e7cb"',
            label: "添加账户；建立账号"
        }, {
            text: "",
            value: "pc-deleteteam",
            content: '"\\e7cc"',
            label: "删除账户；删除用户组"
        }, {
            text: "",
            value: "pc-deleteuser",
            content: '"\\e7cd"',
            label: "删除用户"
        }, {
            text: "",
            value: "pc-addteam",
            content: '"\\e7ce"',
            label: "添加选项"
        }, {
            text: "",
            value: "pc-user",
            content: '"\\e7cf"',
            label: "用户"
        }, {
            text: "",
            value: "pc-team",
            content: '"\\e7d0"',
            label: "团队"
        }, {
            text: "",
            value: "pc-areachart",
            content: '"\\e7d1"',
            label: "面积图；分区图；对比图"
        }, {
            text: "",
            value: "pc-linechart",
            content: '"\\e7d2"',
            label: "拆线图；线形图表"
        }, {
            text: "",
            value: "pc-barchart",
            content: '"\\e7d3"',
            label: "柱形图表；条线图"
        }, {
            text: "",
            value: "pc-pointmap",
            content: '"\\e7d4"',
            label: "使尖锐，强调"
        }, {
            text: "",
            value: "pc-container",
            content: '"\\e7d5"',
            label: "集装箱；容器"
        }, {
            text: "",
            value: "pc-database",
            content: '"\\e7d6"',
            label: "数据库，资料库"
        }, {
            text: "",
            value: "pc-sever",
            content: '"\\e7d7"',
            label: "割断，断绝；分开；使分离"
        }, {
            text: "",
            value: "pc-mobile1",
            content: '"\\e7d8"',
            label: "可移动的；机动的；易变的；非固定的；手机"
        }, {
            text: "",
            value: "pc-tablet",
            content: '"\\e7d9"',
            label: "碑；药片；写字板；小块；平板电脑"
        }, {
            text: "",
            value: "pc-redenvelope",
            content: '"\\e7da"',
            label: "红包"
        }, {
            text: "",
            value: "pc-book",
            content: '"\\e7db"',
            label: "书本"
        }, {
            text: "",
            value: "pc-reconciliation",
            content: '"\\e7dd"',
            label: "和解；调和；和谐；甘愿"
        }, {
            text: "",
            value: "pc-solution",
            content: '"\\e7e1"',
            label: "解决方案；溶液；溶解；解答"
        }, {
            text: "",
            value: "pc-Batchfolding",
            content: '"\\e7f3"',
            label: "可折叠的"
        }, {
            text: "",
            value: "pc-securityscan",
            content: '"\\e7f4"',
            label: "安全扫描"
        }, {
            text: "",
            value: "pc-propertysafety",
            content: '"\\"',
            label: "财产安全"
        }, {
            text: "",
            value: "pc-safetycertificate",
            content: '"\\e7f6"',
            label: "安全证书"
        }, {
            text: "",
            value: "pc-insurance",
            content: '"\\e7f7"',
            label: "保险；保险费；保险契约；赔偿金"
        }, {
            text: "",
            value: "pc-alert",
            content: '"\\e7f8"',
            label: "警戒，警惕；警报"
        }, {
            text: "",
            value: "pc-delete1",
            content: '"\\e7f9"',
            label: "删除"
        }, {
            text: "",
            value: "pc-hourglass",
            content: '"\\e7fa"',
            label: "沙漏；水漏"
        }, {
            text: "",
            value: "pc-bulb",
            content: '"\\e7fb"',
            label: "电灯泡；鳞茎；球状物"
        }, {
            text: "",
            value: "pc-experiment",
            content: '"\\e7fc"',
            label: "实验，试验；尝试"
        }, {
            text: "",
            value: "pc-bell",
            content: '"\\e7fd"',
            label: "铃，钟；钟声，铃声；钟状物"
        }, {
            text: "",
            value: "pc-trophy",
            content: '"\\e7fe"',
            label: "奖品；战利品；纪念品"
        }, {
            text: "",
            value: "pc-rest",
            content: '"\\e7ff"',
            label: "休息，静止；休息时间；剩余部分；支架"
        }, {
            text: "",
            value: "pc-USB",
            content: '"\\e800"',
            label: "USB"
        }, {
            text: "",
            value: "pc-skin",
            content: '"\\e801"',
            label: "皮肤；外皮"
        }, {
            text: "",
            value: "pc-home",
            content: '"\\e802"',
            label: "家，住宅；产地；家乡；避难所；主页；首页"
        }, {
            text: "",
            value: "pc-bank",
            content: '"\\e803"',
            label: "银行；岸；浅滩；储库"
        }, {
            text: "",
            value: "pc-filter",
            content: '"\\e804"',
            label: "滤过；渗入；慢慢传开；过滤"
        }, {
            text: "",
            value: "pc-funnelplot",
            content: '"\\e805"',
            label: "漏斗图"
        }, {
            text: "",
            value: "pc-like",
            content: '"\\e806"',
            label: "爱好；同样的人或物"
        }, {
            text: "",
            value: "pc-unlike",
            content: '"\\e807"',
            label: "不同的，不相似的"
        }, {
            text: "",
            value: "pc-unlock",
            content: '"\\e808"',
            label: "开启；开…的锁；表露"
        }, {
            text: "",
            value: "pc-lock",
            content: '"\\e809"',
            label: "锁；水闸；刹车"
        }, {
            text: "",
            value: "pc-customerservice",
            content: '"\\e80a"',
            label: "客户服务；售后服务"
        }, {
            text: "",
            value: "pc-flag",
            content: '"\\e80b"',
            label: "标志；旗子"
        }, {
            text: "",
            value: "pc-moneycollect",
            content: '"\\e80c"',
            label: "集资 ; 筹钱 ; 筹集资金 ; 收钱"
        }, {
            text: "",
            value: "pc-medicinebox",
            content: '"\\e80d"',
            label: "药品箱"
        }, {
            text: "",
            value: "pc-shop",
            content: '"\\e80e"',
            label: "商店；店铺"
        }, {
            text: "",
            value: "pc-rocket",
            content: '"\\e80f"',
            label: "火箭"
        }, {
            text: "",
            value: "pc-shopping",
            content: '"\\e810"',
            label: "购物，买东西"
        }, {
            text: "",
            value: "pc-folder",
            content: '"\\e811"',
            label: "文件夹；折叠机；折叠式印刷品"
        }, {
            text: "",
            value: "pc-folder-open",
            content: '"\\e812"',
            label: "文件夹；折叠机；折叠式印刷品"
        }, {
            text: "",
            value: "pc-folder-add",
            content: '"\\e813"',
            label: "文件夹；折叠机；折叠式印刷品"
        }, {
            text: "",
            value: "pc-deploymentunit",
            content: '"\\e814"',
            label: "部署单元"
        }, {
            text: "",
            value: "pc-accountbook",
            content: '"\\e815"',
            label: "帐簿"
        }, {
            text: "",
            value: "pc-contacts",
            content: '"\\e816"',
            label: "联系人；联络方式；触体；隐形眼镜"
        }, {
            text: "",
            value: "pc-carryout",
            content: '"\\e817"',
            label: "供打包的酒菜；外卖餐馆"
        }, {
            text: "",
            value: "pc-calendar",
            content: '"\\e819"',
            label: "日历；[天] 历法；日程表"
        }, {
            text: "",
            value: "pc-scan",
            content: '"\\e81a"',
            label: "扫描；浏览；审视；细看"
        }, {
            text: "",
            value: "pc-select",
            content: '"\\e81b"',
            label: "被挑选者；精萃"
        }, {
            text: "",
            value: "pc-boxplot",
            content: '"\\e81c"',
            label: "箱形图；盒形图"
        }, {
            text: "",
            value: "pc-build",
            content: '"\\e81ds"',
            label: "构造；体形；体格"
        }, {
            text: "",
            value: "pc-sliders",
            content: '"\\e81e"',
            label: "滑块；滑动条，滑动器"
        }, {
            text: "",
            value: "pc-laptop",
            content: '"\\e81f"',
            label: "膝上型轻便电脑，笔记本电脑"
        }, {
            text: "",
            value: "pc-barcode",
            content: '"\\e820"',
            label: "条形码；条码技术"
        }, {
            text: "",
            value: "pc-camera",
            content: '"\\e821"',
            label: "照相机；摄影机"
        }, {
            text: "",
            value: "pc-cluster",
            content: '"\\e822"',
            label: "群；簇；丛；串"
        }, {
            text: "",
            value: "pc-gateway",
            content: '"\\e823"',
            label: "门；网关；方法；通道；途径"
        }, {
            text: "",
            value: "pc-car",
            content: '"\\e824"',
            label: "汽车；车厢"
        }, {
            text: "",
            value: "pc-printer",
            content: '"\\e825"',
            label: "打印机；印刷工；印花工"
        }, {
            text: "",
            value: "pc-read",
            content: '"\\e826"',
            label: "阅读；读物"
        }, {
            text: "",
            value: "pc-cloud-server",
            content: '"\\e827"',
            label: "云服务器"
        }, {
            text: "",
            value: "pc-cloud-upload",
            content: '"\\e828"',
            label: "云上传"
        }, {
            text: "",
            value: "pc-cloud",
            content: '"\\e829"',
            label: "云"
        }, {
            text: "",
            value: "pc-cloud-download",
            content: '"\\e82a"',
            label: "云下载"
        }, {
            text: "",
            value: "pc-cloud-sync",
            content: '"\\e82b"',
            label: "云同步"
        }, {
            text: "",
            value: "pc-video",
            content: '"\\e82c"',
            label: "视频；录像，录像机；电视"
        }, {
            text: "",
            value: "pc-notification",
            content: '"\\e82d"',
            label: "通知；通告；[法] 告示"
        }, {
            text: "",
            value: "pc-sound",
            content: '"\\e82e"',
            label: "声音，语音；噪音；海峡；吵闹；听力范围；[医] 探条"
        }, {
            text: "",
            value: "pc-radarchart",
            content: '"\\e82f"',
            label: "雷达图"
        }, {
            text: "",
            value: "pc-qrcode",
            content: '"\\e830"',
            label: "二维码"
        }, {
            text: "",
            value: "pc-fund",
            content: '"\\e831"',
            label: "基金；资金；存款"
        }, {
            text: "",
            value: "pc-image",
            content: '"\\e832"',
            label: "影像；想象；肖像；偶像"
        }, {
            text: "",
            value: "pc-mail",
            content: '"\\e833"',
            label: "邮件；邮政，邮递；盔甲"
        }, {
            text: "",
            value: "pc-table",
            content: '"\\e834"',
            label: "桌子；表格；平地层"
        }, {
            text: "",
            value: "pc-idcard",
            content: '"\\e835"',
            label: "身份证；证件号"
        }, {
            text: "",
            value: "pc-creditcard",
            content: '"\\e836"',
            label: "信用卡"
        }, {
            text: "",
            value: "pc-heart",
            content: '"\\e837"',
            label: "心脏；感情；勇气；心形；要点"
        }, {
            text: "",
            value: "pc-block",
            content: '"\\e838"',
            label: "块；街区；大厦；障碍物"
        }, {
            text: "",
            value: "pc-error",
            content: '"\\e839"',
            label: "误差；错误；过失"
        }, {
            text: "",
            value: "pc-star",
            content: '"\\e83a"',
            label: "星，恒星；明星；星形物"
        }, {
            text: "",
            value: "pc-gold",
            content: '"\\e83b"',
            label: "金，黄金；金色；金币"
        }, {
            text: "",
            value: "pc-heatmap",
            content: '"\\e83c"',
            label: ""
        }, {
            text: "",
            value: "pc-wifi",
            content: '"\\e83d"',
            label: "无线网络模块"
        }, {
            text: "",
            value: "pc-attachment",
            content: '"\\e83e"',
            label: "附件；依恋；连接物；扣押财产"
        }, {
            text: "",
            value: "pc-edit1",
            content: '"\\e83f"',
            label: "编辑工作"
        }, {
            text: "",
            value: "pc-key",
            content: '"\\e840"',
            label: "（打字机等的）键；关键；钥匙"
        }, {
            text: "",
            value: "pc-api",
            content: '"\\e841"',
            label: ""
        }, {
            text: "",
            value: "pc-disconnect",
            content: '"\\e842"',
            label: "拆开，使分离"
        }, {
            text: "",
            value: "pc-highlight",
            content: '"\\e843"',
            label: "最精彩的部分；最重要的事情；加亮区"
        }, {
            text: "",
            value: "pc-monitor",
            content: '"\\e844"',
            label: "监视器；监听器；监控器；显示屏；班长"
        }, {
            text: "",
            value: "pc-link1",
            content: '"\\e845"',
            label: "[计] 链环，环节；联系，关系"
        }, {
            text: "",
            value: "pc-man",
            content: '"\\e846"',
            label: "人；男人；人类；丈夫；雇工"
        }, {
            text: "",
            value: "pc-woman",
            content: '"\\e84e"',
            label: "妇女；女性；成年女子"
        }, {
            text: "",
            value: "pc-percentage",
            content: '"\\e847"',
            label: "百分比；百分率，百分数"
        }, {
            text: "",
            value: "pc-search1",
            content: '"\\e848"',
            label: "搜寻；探究，查究"
        }, {
            text: "",
            value: "pc-pushpin",
            content: '"\\e849"',
            label: "图钉"
        }, {
            text: "",
            value: "pc-phone1",
            content: '"\\e84a"',
            label: "电话；耳机，听筒"
        }, {
            text: "",
            value: "pc-shake",
            content: '"\\e84b"',
            label: "摇动；哆嗦"
        }, {
            text: "",
            value: "pc-tag",
            content: '"\\e84c"',
            label: "日子"
        }, {
            text: "",
            value: "pc-wrench",
            content: '"\\e84d"',
            label: "扳手，扳钳；扭伤；痛苦；歪曲；猛扭"
        }, {
            text: "",
            value: "pc-tags",
            content: '"\\e84f"',
            label: "标签；（机动车）牌照；称呼（tag的复数）"
        }, {
            text: "",
            value: "pc-scissor",
            content: '"\\e850"',
            label: "剪刀"
        }, {
            text: "",
            value: "pc-mr",
            content: '"\\e851"',
            label: " 先生（Mister）"
        }, {
            text: "",
            value: "pc-share",
            content: '"\\e852"',
            label: "份额；股份"
        }, {
            text: "",
            value: "pc-branches",
            content: '"\\e853"',
            label: "[计][核] 分支（branch的复数）；分支机构"
        }, {
            text: "",
            value: "pc-fork",
            content: '"\\e854"',
            label: "叉；餐叉；耙"
        }, {
            text: "",
            value: "pc-bold",
            content: '"\\e87d"',
            label: "大胆的，英勇的；黑体的；厚颜无耻的；险峻的"
        }, {
            text: "",
            value: "pc-font-colors",
            content: '"\\e87e"',
            label: "是"
        }, {
            text: "",
            value: "pc-exclaimination",
            content: '"\\e87f"',
            label: ""
        }, {
            text: "",
            value: "pc-line-height",
            content: '"\\e882"',
            label: "行高"
        }, {
            text: "",
            value: "pc-strikethrough",
            content: '"\\e883"',
            label: "删除线，加删除线"
        }, {
            text: "",
            value: "pc-underline",
            content: '"\\e884"',
            label: "下划线；下期节目预告"
        }, {
            text: "",
            value: "pc-number",
            content: '"\\e885"',
            label: "数；（杂志等的）期；号码；数字；算术"
        }, {
            text: "",
            value: "pc-italic",
            content: '"\\e886"',
            label: "斜体字（或字母、数码等）"
        }, {
            text: "",
            value: "pc-code",
            content: '"\\e887"',
            label: "代码，密码；编码；法典"
        }, {
            text: "",
            value: "pc-check",
            content: '"\\e889"',
            label: "<美>支票；制止，抑制；检验，核对"
        }, {
            text: "",
            value: "pc-ellipsis",
            content: '"\\e88a"',
            label: "省略；省略符号；脱漏"
        }, {
            text: "",
            value: "pc-dash",
            content: '"\\e88b"',
            label: "破折号；冲撞"
        }, {
            text: "",
            value: "pc-close",
            content: '"\\e88c"',
            label: "结束"
        }, {
            text: "",
            value: "pc-small-dash",
            content: '"\\e894"',
            label: "小件物品；矮小的人；破折号；冲撞"
        }, {
            text: "",
            value: "pc-pause",
            content: '"\\e895"',
            label: "暂停；间歇"
        }, {
            text: "",
            value: "pc-bg-colors",
            content: '"\\e896"',
            label: "背齿轮"
        }, {
            text: "",
            value: "pc-crown",
            content: '"\\e897"',
            label: "王冠；花冠；王权；顶点"
        }, {
            text: "",
            value: "pc-desktop",
            content: '"\\e899"',
            label: "桌面；台式机"
        }, {
            text: "",
            value: "pc-gift",
            content: '"\\e89a"',
            label: "礼物；天赋；赠品"
        }, {
            text: "",
            value: "pc-stop",
            content: '"\\e89b"',
            label: "停止；车站；障碍；逗留"
        }, {
            text: "",
            value: "pc-fire",
            content: '"\\e89c"',
            label: "火；火灾；炮火；炉火；热情；激情；磨难"
        }, {
            text: "",
            value: "pc-alibabacloud",
            content: '"\\e92f"',
            label: ""
        }, {
            text: "",
            value: "pc-antdesign",
            content: '"\\e930"',
            label: ""
        }, {
            text: "",
            value: "pc-ant-cloud",
            content: '"\\e931"',
            label: "蚂蚁"
        }, {
            text: "",
            value: "pc-sketch",
            content: '"\\e948"',
            label: "素描；略图；梗概"
        }, {
            text: "",
            value: "pc-dribbble",
            content: '"\\e94b"',
            label: "追波网"
        }, {
            text: "",
            value: "pc-instagram",
            content: '"\\e94c"',
            label: "照片分享（一款运行在iPhone平台上的应用程序）"
        }, {
            text: "",
            value: "pc-aislogo",
            content: '"\\e606c"',
            label: ""
        }, {
            text: "",
            value: "pc-mydata",
            content: '"\\e67d"',
            label: "资料管理器"
        }, {
            text: "",
            value: "pc-earth",
            content: '"\\e607"',
            label: "地球；地表，陆地；土地，土壤；尘事，俗事；兽穴"
        }, {
            text: "",
            value: "pc-clear",
            content: '"\\e949"',
            label: "清除；空隙"
        }, {
            text: "",
            value: "pc-preview",
            content: '"\\e674"',
            label: "预览；试映；事先查看"
        }, {
            text: "",
            value: "pc-menu",
            content: '"\\e612"',
            label: "菜单"
        }, {
            text: "",
            value: "pc-module",
            content: '"\\e947"',
            label: "[计] 模块；组件；模数"
        }, {
            text: "",
            value: "pc-config",
            content: '"\\e72a"',
            label: "配置，布局；显示配置信息命令"
        }, {
            text: "",
            value: "pc-cellphone",
            content: '"\\e64f"',
            label: "蜂窝式便携无线电话；大哥大"
        }, {
            text: "",
            value: "pc-theme",
            content: '"\\e62b"',
            label: "主题；主旋律；题目"
        }, {
            text: "",
            value: "pc-iconfontshuangxiang",
            content: '"\\e601"',
            label: ""
        }, {
            text: "",
            value: "pc-nav",
            content: '"\\e602"',
            label: "资产净值"
        }, {
            text: "",
            value: "pc-link",
            content: '"\\e655"',
            label: "[计] 链环，环节；联系，关系"
        }, {
            text: "",
            value: "pc-search",
            content: '"\\e610"',
            label: "搜寻；探究，查究"
        }, {
            text: "",
            value: "pc-computer",
            content: '"\\e6a3"',
            label: "计算机；电脑；电子计算机"
        }, {
            text: "",
            value: "pc-drag",
            content: '"\\e707"',
            label: "拖；拖累"
        }, {
            text: "",
            value: "pc-arrowup",
            content: '"\\e624"',
            label: "箭头向上"
        }, {
            text: "",
            value: "pc-dropdown",
            content: '"\\e6a6"',
            label: "下拉"
        }, {
            text: "",
            value: "pc-copy",
            content: '"\\e67c"',
            label: "副本；一册；摹仿"
        }, {
            text: "",
            value: "pc-delete",
            content: '"\\e609"',
            label: "删除"
        }, {
            text: "",
            value: "pc-more",
            content: '"\\e677"',
            label: "更多"
        }, {
            text: "",
            value: "pc-pencil",
            content: '"\\e644"',
            label: "铅笔；笔状物"
        }, {
            text: "",
            value: "pc-plus",
            content: '"\\e603"',
            label: "更"
        }, {
            text: "",
            value: "pc-yihen",
            content: '"\\e62f"',
            label: ""
        }, {
            text: "",
            value: "pc-list",
            content: '"\\e629"',
            label: "[计] 列表；清单；目录"
        }, {
            text: "",
            value: "pc-insert",
            content: '"\\e63c"',
            label: "插入物；管芯；镶块；[机械]刀片"
        }, {
            text: "",
            value: "pc-question",
            content: '"\\e647"',
            label: "问题，疑问；询问；疑问句"
        }, {
            text: "",
            value: "pc-up",
            content: '"\\e761"',
            label: "上升；繁荣"
        }, {
            text: "",
            value: "pc-down",
            content: '"\\e69e"',
            label: "软毛，绒毛；[地质] 开阔的高地"
        }, {
            text: "",
            value: "pc-edit",
            content: '"\\e893"',
            label: "编辑工作"
        }, {
            text: "",
            value: "pc-ok",
            content: '"\\e63d"',
            label: "同意"
        }, {
            text: "",
            value: "pc-x",
            content: '"\\e611"',
            label: "未知数；Xs或Xs；X级电影，成人电影（十八岁以下儿童不得观看）；英语字母中的第二十四个字母"
        }]
    }, {
        text: "填充风格图标",
        value: "fill",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-yingxiaozhichiicon",
            content: '"\\e9f6"',
            label: "营销支持"
        }, {
            text: "",
            value: "pc-fangxingxuanzhongfill",
            content: '"\\e9f1"',
            label: "方形选中-fill"
        }, {
            text: "",
            value: "pc-shouye",
            content: '"\\e9f0"',
            label: "首页"
        }, {
            text: "",
            value: "pc-39",
            content: '"\\e9b7"',
            label: "邮件"
        }, {
            text: "",
            value: "pc-75",
            content: '"\\e9b6"',
            label: "地区"
        }, {
            text: "",
            value: "pc-yinxingqia",
            content: '"\\e9aa"',
            label: "银行卡"
        }, {
            text: "",
            value: "pc-huiyuanliebian",
            content: '"\\eb1f"',
            label: "会员裂变"
        }, {
            text: "",
            value: "pc-icon_bofang-mian",
            content: '"\\eb1e"',
            label: "播放-面"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-13",
            content: '"\\eb1d"',
            label: "提示告警"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-12",
            content: '"\\eb1c"',
            label: "紧急告警"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-11",
            content: '"\\eb1b"',
            label: "主要告警"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-10",
            content: '"\\eb1a"',
            label: "协转服务器"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-9",
            content: '"\\eb19"',
            label: "终端模拟器"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-8",
            content: '"\\eb18"',
            label: "边界桥接"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-7",
            content: '"\\eb17"',
            label: "实体终端"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-6",
            content: '"\\eb16"',
            label: "业务服务器"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-5",
            content: '"\\eb15"',
            label: "虚拟终端"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-4",
            content: '"\\eb14"',
            label: "存储网关"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-3",
            content: '"\\eb13"',
            label: "自治服务器"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-2",
            content: '"\\eb12"',
            label: "边界路由"
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-1",
            content: '"\\eb11"',
            label: '中心设备"'
        }, {
            text: "",
            value: "pc-weiwangguanicon-defuben-",
            content: '"\\eb10"',
            label: "自治云"
        }, {
            text: "",
            value: "pc-jian-tianchong",
            content: '"\\e6b0"',
            label: "减"
        }, {
            text: "",
            value: "pc-jia-tianchong",
            content: '"\\e6ae"',
            label: "加"
        }, {
            text: "",
            value: "pc-gengduo-",
            content: '"\\eac9"',
            label: "标签-更多-1"
        }, {
            text: "",
            value: "pc-jixiezulin",
            content: '"\\eac6"',
            label: "机械租赁"
        }, {
            text: "",
            value: "pc-tuiguang",
            content: '"\\eac3"',
            label: "推广"
        }, {
            text: "",
            value: "pc-tupian",
            content: '"\\eab9"',
            label: "图片"
        }, {
            text: "",
            value: "pc-shujuxian",
            content: '"\\eab8"',
            label: "数据线"
        }, {
            text: "",
            value: "pc-kaiguanlunci",
            content: '"\\eaa9"',
            label: "开关轮次"
        }, {
            text: "",
            value: "pc-zizhizhengshu",
            content: '"\\eaa7"',
            label: "资质证书"
        }, {
            text: "",
            value: "pc-boshiweb_bofangliang",
            content: '"\\eaa3"',
            label: "播视web_播放量"
        }, {
            text: "",
            value: "pc-cuowuguanbiquxiao-fangkuang",
            content: '"\\ea9a"',
            label: "错误、关闭、取消-方框"
        }, {
            text: "",
            value: "pc-iconfont-tuiguangzhuanqian",
            content: '"\\ea7c"',
            label: "推广赚钱"
        }, {
            text: "",
            value: "pc-iconfont-shezhi",
            content: '"\\ea7b"',
            label: "设置"
        }, {
            text: "",
            value: "pc-iconfont-yinxingka",
            content: '"\\ea7a"',
            label: "信用卡"
        }, {
            text: "",
            value: "pc-iconfont-wodeyouhui",
            content: '"\\ea79"',
            label: "优惠"
        }, {
            text: "",
            value: "pc-iconfont-xinxizhongxin1",
            content: '"\\ea78"',
            label: "信息中心"
        }, {
            text: "",
            value: "pc-iconfont-bangzhuzhongxin",
            content: '"\\ea77"',
            label: "帮助中心"
        }, {
            text: "",
            value: "pc-iconfont-shipanjiaoyi",
            content: '"\\ea76"',
            label: "交易"
        }, {
            text: "",
            value: "pc-iconfont-monijiaoyi",
            content: '"\\ea75"',
            label: "交易"
        }, {
            text: "",
            value: "pc-iconfont-xinxizhongxin",
            content: '"\\ea74"',
            label: "信息中心"
        }, {
            text: "",
            value: "pc-video-channel",
            content: '"\\ea73"',
            label: "视频"
        }, {
            text: "",
            value: "pc-fanhuidingbu1",
            content: '"\\ea70"',
            label: "返回顶部"
        }, {
            text: "",
            value: "pc-yanzhengmatianchong",
            content: '"\\ea6f"',
            label: "验证码填充"
        }, {
            text: "",
            value: "pc-facebook11",
            content: '"\\ea6e"',
            label: "facebook"
        }, {
            text: "",
            value: "pc-xinpin",
            content: '"\\ea6b"',
            label: "新品"
        }, {
            text: "",
            value: "pc-icon_save",
            content: '"\\ea6a"',
            label: "收藏"
        }, {
            text: "",
            value: "pc-minzhengxinxi-jingwairenyuan",
            content: '"\\ea69"',
            label: "民政信息-境外人员"
        }, {
            text: "",
            value: "pc-fenxiangweixinpengyouquan",
            content: '"\\e6aa"',
            label: "分享_微信朋友圈"
        }, {
            text: "",
            value: "pc-pengyouquan1",
            content: '"\\ea59"',
            label: "朋友圈"
        }, {
            text: "",
            value: "pc-qq2",
            content: '"\\ea58"',
            label: "qq"
        }, {
            text: "",
            value: "pc-line1",
            content: '"\\ea57"',
            label: "line"
        }, {
            text: "",
            value: "pc-twitter11",
            content: '"\\ea56"',
            label: "twitter"
        }, {
            text: "",
            value: "pc-qqkongjian1",
            content: '"\\ea55"',
            label: "qq空间"
        }, {
            text: "",
            value: "pc-Instagram",
            content: '"\\ea54"',
            label: "Instagram"
        }, {
            text: "",
            value: "pc-linkedin2",
            content: '"\\ea53"',
            label: "linkedin"
        }, {
            text: "",
            value: "pc-facebook1",
            content: '"\\ea52"',
            label: "Facebook"
        }, {
            text: "",
            value: "pc-gongsi1",
            content: '"\\ea51"',
            label: "BBD公司"
        }, {
            text: "",
            value: "pc-dingwei1",
            content: '"\\ea4a"',
            label: "定位"
        }, {
            text: "",
            value: "pc-userrect",
            content: '"\\ea46"',
            label: "用户方形"
        }, {
            text: "",
            value: "pc-icondd2",
            content: '"\\ea3c"',
            label: "订单"
        }, {
            text: "",
            value: "pc-ai241",
            content: '"\\ea3b"',
            label: "锁"
        }, {
            text: "",
            value: "pc-ai215",
            content: '"\\ea3a"',
            label: "箭头"
        }, {
            text: "",
            value: "pc-ai207",
            content: '"\\ea39"',
            label: "返回"
        }, {
            text: "",
            value: "pc-ai66",
            content: '"\\ea38"',
            label: "购物车"
        }, {
            text: "",
            value: "pc-ai61",
            content: '"\\ea37"',
            label: "编辑"
        }, {
            text: "",
            value: "pc-ai60",
            content: '"\\ea36"',
            label: "办公包"
        }, {
            text: "",
            value: "pc-ai43",
            content: '"\\ea35"',
            label: "警告"
        }, {
            text: "",
            value: "pc-ai31",
            content: '"\\e6a9"',
            label: "云"
        }, {
            text: "",
            value: "pc-ai08",
            content: '"\\ea34"',
            label: "停止"
        }, {
            text: "",
            value: "pc-ai07",
            content: '"\\ea33"',
            label: "暂停"
        }, {
            text: "",
            value: "pc-ai01",
            content: '"\\ea32"',
            label: "语音"
        }, {
            text: "",
            value: "pc-weibo1",
            content: '"\\ea2f"',
            label: "微博"
        }, {
            text: "",
            value: "pc-saoyisao1",
            content: '"\\ea2e"',
            label: "扫一扫"
        }, {
            text: "",
            value: "pc-dianhua3",
            content: '"\\ea28"',
            label: "电话"
        }, {
            text: "",
            value: "pc-z-alipay",
            content: '"\\ea27"',
            label: "支付宝"
        }, {
            text: "",
            value: "pc-toubaoxuzhi",
            content: '"\\ea21"',
            label: "投保须知"
        }, {
            text: "",
            value: "pc-myshare",
            content: '"\\ea20"',
            label: "我的-分享给他人"
        }, {
            text: "",
            value: "pc-myrecommend",
            content: '"\\ea1f"',
            label: "我的-推荐人管理"
        }, {
            text: "",
            value: "pc-mymessage",
            content: '"\\ea1e"',
            label: "我的-消息中心"
        }, {
            text: "",
            value: "pc-myaddress",
            content: '"\\ea1d"',
            label: "我的-地址管理"
        }, {
            text: "",
            value: "pc-fenxiang",
            content: '"\\ea1c"',
            label: "分享"
        }, {
            text: "",
            value: "pc-g",
            content: '"\\ea19"',
            label: "g"
        }, {
            text: "",
            value: "pc-weibo2",
            content: '"\\ea18"',
            label: "微博"
        }, {
            text: "",
            value: "pc-luxiang1",
            content: '"\\ea17"',
            label: "录像"
        }, {
            text: "",
            value: "pc-zan4",
            content: '"\\ea16"',
            label: "赞"
        }, {
            text: "",
            value: "pc-zan1",
            content: '"\\ea15"',
            label: "赞"
        }, {
            text: "",
            value: "pc-xihuan2",
            content: '"\\ea14"',
            label: "喜欢"
        }, {
            text: "",
            value: "pc-zhaoxiang2",
            content: '"\\ea13"',
            label: "照相"
        }, {
            text: "",
            value: "pc-gouwuche2",
            content: '"\\ea21"',
            label: "购物车"
        }, {
            text: "",
            value: "pc-guanbi2",
            content: '"\\ea11"',
            label: "关闭"
        }, {
            text: "",
            value: "pc-laji2",
            content: '"\\ea10"',
            label: "垃圾"
        }, {
            text: "",
            value: "pc-liebiao11",
            content: '"\\ea0f"',
            label: "列表"
        }, {
            text: "",
            value: "pc-xinxi12",
            content: '"\\ea0e"',
            label: "信息"
        }, {
            text: "",
            value: "pc-icon6",
            content: '"\\ea0a"',
            label: "系统集成服务"
        }, {
            text: "",
            value: "pc-kehuzhongxin",
            content: '"\\ea09"',
            label: "客户中心"
        }, {
            text: "",
            value: "pc-gerenzhongxin",
            content: '"\\ea08"',
            label: "个人中心"
        }, {
            text: "",
            value: "pc-zhiyuanshouye8",
            content: '"\\ea06"',
            label: "指缘首页"
        }, {
            text: "",
            value: "pc-wuliu",
            content: '"\\e9ff"',
            label: "物流"
        }, {
            text: "",
            value: "pc-heart-fill",
            content: '"\\e8b8"',
            label: "满足；填满的量；装填物"
        }, {
            text: "",
            value: "pc-piechart-circle-fil",
            content: '"\\e8b9"',
            label: "饼图"
        }, {
            text: "",
            value: "pc-dashboard-fill",
            content: '"\\e8ba"',
            label: "汽车等的仪表板；马车等前部的挡泥板"
        }, {
            text: "",
            value: "pc-message-fill",
            content: '"\\e8bb"',
            label: "消息；差使；启示；预言；广告词"
        }, {
            text: "",
            value: "pc-accountbook-fill",
            content: '"\\e8c6"',
            label: "帐簿"
        }, {
            text: "",
            value: "pc-carryout-fill",
            content: '"\\e8c7"',
            label: "供打包的酒菜；外卖餐馆"
        }, {
            text: "",
            value: "pc-calendar-fill",
            content: '"\\e8c8"',
            label: "日历；[天] 历法；日程表"
        }, {
            text: "",
            value: "pc-save-fill",
            content: '"\\e8cd"',
            label: "救援"
        }, {
            text: "",
            value: "pc-layout-fill",
            content: '"\\e8d0"',
            label: "布局；设计；安排；陈列"
        }, {
            text: "",
            value: "pc-appstore-fill",
            content: '"\\e8d1"',
            label: "苹果应用程序商店"
        }, {
            text: "",
            value: "pc-mobile-fill",
            content: '"\\e8d2"',
            label: " 移动电话"
        }, {
            text: "",
            value: "pc-tablet-fill",
            content: '"\\e8d3"',
            label: "碑；药片；写字板；小块；平板电脑"
        }, {
            text: "",
            value: "pc-book-fill",
            content: '"\\e8d4"',
            label: "书籍；卷；账簿；名册；工作簿"
        }, {
            text: "",
            value: "pc-redenvelope-fill",
            content: '"\\e8d5"',
            label: "红信封"
        }, {
            text: "",
            value: "pc-safetycertificate-f",
            content: '"\\e8d6"',
            label: ""
        }, {
            text: "",
            value: "pc-propertysafety-fill",
            content: '"\\e8d7"',
            label: ""
        }, {
            text: "",
            value: "pc-insurance-fill",
            content: '"\\e8d8"',
            label: "保险；保险费；保险契约；赔偿金"
        }, {
            text: "",
            value: "pc-securityscan-fill",
            content: '"\\e8d9"',
            label: ""
        }, {
            text: "",
            value: "pc-batchfolding-fill",
            content: '"\\e8e9"',
            label: ""
        }, {
            text: "",
            value: "pc-reconciliation-fill",
            content: '"\\e8ea"',
            label: "和解；调和；和谐；甘愿"
        }, {
            text: "",
            value: "pc-database-fill",
            content: '"\\e8ee"',
            label: "数据库"
        }, {
            text: "",
            value: "pc-container-fill",
            content: '"\\e8ef"',
            label: "集装箱；容器"
        }, {
            text: "",
            value: "pc-sever-fill",
            content: '"\\e8f0"',
            label: "割断，断绝；分开；使分离"
        }, {
            text: "",
            value: "pc-calendar-check-fill",
            content: '"\\e8f1"',
            label: "日历；[天] 历法；日程表 <美>支票；制止，抑制；检验，核对"
        }, {
            text: "",
            value: "pc-image-fill",
            content: '"\\e8f2"',
            label: "影像；想象；肖像；偶像"
        }, {
            text: "",
            value: "pc-idcard-fill",
            content: '"\\e8f3"',
            label: "身份证"
        }, {
            text: "",
            value: "pc-creditcard-fill",
            content: '"\\e8f4"',
            label: "信用卡"
        }, {
            text: "",
            value: "pc-fund-fill",
            content: '"\\e8f5"',
            label: "基金；资金；存款"
        }, {
            text: "",
            value: "pc-read-fill",
            content: '"\\e8f6"',
            label: "阅读；读物"
        }, {
            text: "",
            value: "pc-contacts-fill",
            content: '"\\e8f7"',
            label: "联系人；联络方式；触体；隐形眼镜（contact的复数形式）"
        }, {
            text: "",
            value: "pc-delete-fill",
            content: '"\\e8f8"',
            label: "删除"
        }, {
            text: "",
            value: "pc-notification-fill",
            content: '"\\e8f9"',
            label: "通知；通告；[法] 告示"
        }, {
            text: "",
            value: "pc-flag-fill",
            content: '"\\e8fa"',
            label: "标志；旗子"
        }, {
            text: "",
            value: "pc-moneycollect-fill",
            content: '"\\e8fb"',
            label: ""
        }, {
            text: "",
            value: "pc-medicinebox-fill",
            content: '"\\e8fc"',
            label: "药品箱"
        }, {
            text: "",
            value: "pc-rest-fill",
            content: '"\\e8fd"',
            label: "休息，静止；休息时间；剩余部分；支架"
        }, {
            text: "",
            value: "pc-shopping-fill",
            content: '"\\e8fe"',
            label: "购物，买东西"
        }, {
            text: "",
            value: "pc-skin-fill",
            content: '"\\e8ff"',
            label: "皮肤；外皮"
        }, {
            text: "",
            value: "pc-video-fill",
            content: '"\\e900"',
            label: "[电子] 视频；录像，录像机；电视"
        }, {
            text: "",
            value: "pc-sound-fill",
            content: '"\\e901"',
            label: "声音，语音；噪音；海峡；吵闹；听力范围；[医] 探条"
        }, {
            text: "",
            value: "pc-bulb-fill",
            content: '"\\e902"',
            label: " 电灯泡；鳞茎；球状物"
        }, {
            text: "",
            value: "pc-bell-fill",
            content: '"\\e903"',
            label: "铃，钟；钟声，铃声；钟状物"
        }, {
            text: "",
            value: "pc-filter-fill",
            content: '"\\e904"',
            label: "滤波器；[化工] 过滤器；筛选；滤光器"
        }, {
            text: "",
            value: "pc-fire-fill",
            content: '"\\e905"',
            label: "火；火灾；炮火；炉火；热情；激情；磨难"
        }, {
            text: "",
            value: "pc-funnelplot-fill",
            content: '"\\e906"',
            label: ""
        }, {
            text: "",
            value: "pc-gift-fill",
            content: '"\\e907"',
            label: "礼物；天赋；赠品"
        }, {
            text: "",
            value: "pc-hourglass-fill",
            content: '"\\e908"',
            label: "沙漏；水漏"
        }, {
            text: "",
            value: "pc-home-fill",
            content: '"\\e909"',
            label: "家，住宅；产地；家乡；避难所"
        }, {
            text: "",
            value: "pc-trophy-fill",
            content: '"\\e90a"',
            label: "奖品；战利品；纪念品"
        }, {
            text: "",
            value: "pc-location-fill",
            content: '"\\e90b"',
            label: "位置（形容词locational）；地点；外景拍摄场地"
        }, {
            text: "",
            value: "pc-cloud-fill",
            content: '"\\e90c"',
            label: "云；阴云；云状物；一大群；黑斑"
        }, {
            text: "",
            value: "pc-customerservice-fill",
            content: '"\\e90d"',
            label: "客户服务"
        }, {
            text: "",
            value: "pc-experiment-fill",
            content: '"\\e90e"',
            label: "实验，试验；尝试"
        }, {
            text: "",
            value: "pc-eye-fill",
            content: '"\\e90f"',
            label: "眼睛；视力；眼光；见解，观点"
        }, {
            text: "",
            value: "pc-like-fill",
            content: '"\\e910"',
            label: "爱好；同样的人或物"
        }, {
            text: "",
            value: "pc-lock-fill",
            content: '"\\e911"',
            label: "锁；水闸；刹车"
        }, {
            text: "",
            value: "pc-unlike-fill",
            content: '"\\e912"',
            label: "不同的，不相似的"
        }, {
            text: "",
            value: "pc-star-fill",
            content: '"\\e913"',
            label: "星，恒星；明星；星形物"
        }, {
            text: "",
            value: "pc-unlock-fill",
            content: '"\\e914"',
            label: "开启；开…的锁；表露"
        }, {
            text: "",
            value: "pc-alert-fill",
            content: '"\\e915"',
            label: "警戒，警惕；警报"
        }, {
            text: "",
            value: "pc-api-fill",
            content: '"\\e916"',
            label: ""
        }, {
            text: "",
            value: "pc-highlight-fill",
            content: '"\\e917"',
            label: "最精彩的部分；最重要的事情；加亮区"
        }, {
            text: "",
            value: "pc-phone-fill",
            content: '"\\e918"',
            label: "电话；耳机，听筒"
        }, {
            text: "",
            value: "pc-edit-fill",
            content: '"\\e919"',
            label: "编辑工作"
        }, {
            text: "",
            value: "pc-pushpin-fill",
            content: '"\\e91a"',
            label: "图钉"
        }, {
            text: "",
            value: "pc-rocket-fill",
            content: '"\\e91b"',
            label: "火箭"
        }, {
            text: "",
            value: "pc-thunderbolt-fill",
            content: '"\\e91c"',
            label: "霹雳；雷电；突发意外事件；大发雷霆"
        }, {
            text: "",
            value: "pc-tag-fill",
            content: '"\\e91d"',
            label: "日子"
        }, {
            text: "",
            value: "pc-wrench-fill",
            content: '"\\e91e"',
            label: "扳手，扳钳；扭伤；痛苦；歪曲；猛扭"
        }, {
            text: "",
            value: "pc-tags-fill",
            content: '"\\e91f"',
            label: "标签；（机动车）牌照；称呼（tag的复数）"
        }, {
            text: "",
            value: "pc-bank-fill",
            content: '"\\e920"',
            label: "银行；岸；浅滩；储库"
        }, {
            text: "",
            value: "pc-camera-fill",
            content: '"\\e921"',
            label: "照相机；摄影机"
        }, {
            text: "",
            value: "pc-error-fill",
            content: '"\\e922"',
            label: "误差；错误；过失"
        }, {
            text: "",
            value: "pc-crown-fill",
            content: '"\\e923"',
            label: "王冠；花冠；王权；顶点"
        }, {
            text: "",
            value: "pc-mail-fill",
            content: '"\\e924"',
            label: "邮件；邮政，邮递；盔甲"
        }, {
            text: "",
            value: "pc-car-fill",
            content: '"\\e925"',
            label: "汽车；车厢"
        }, {
            text: "",
            value: "pc-printer-fill",
            content: '"\\e926"',
            label: "[计] 打印机；印刷工；印花工"
        }, {
            text: "",
            value: "pc-shop-fill",
            content: '"\\e927"',
            label: "商店；店铺"
        }, {
            text: "",
            value: "pc-setting-fill",
            content: '"\\e928"',
            label: "环境；安装；布置；[天] 沉落"
        }, {
            text: "",
            value: "pc-USB-fill",
            content: '"\\e929"',
            label: "通用串行总线"
        }, {
            text: "",
            value: "pc-golden-fill",
            content: '"\\e92a"',
            label: "金色的，黄金般的；珍贵的；金制的"
        }, {
            text: "",
            value: "pc-build-fill",
            content: '"\\e92b"',
            label: "构造；体形；体格"
        }, {
            text: "",
            value: "pc-boxplot-fill",
            content: '"\\e92c"',
            label: "箱形图；盒形图"
        }, {
            text: "",
            value: "pc-sliders-fill",
            content: '"\\e92d"',
            label: "[机] 滑块；滑动条，滑动器（slider的复数形式）"
        }]
    }, {
        text: "社交风格图标",
        value: "shejiao",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-shoujitaobao",
            content: '"\\e9f2 "',
            label: "手机淘宝"
        }, {
            text: "",
            value: "pc-douban1",
            content: '"\\e9c8"',
            label: "豆瓣"
        }, {
            text: "",
            value: "pc-qq11",
            content: '"\\e9c7"',
            label: "QQ"
        }, {
            text: "",
            value: "pc-weixin11",
            content: '"\\e9c6"',
            label: "微信"
        }, {
            text: "",
            value: "pc-xinlangweibo",
            content: '"\\e9c5"',
            label: "新浪微博"
        }, {
            text: "",
            value: "pc-tengxunweibo",
            content: '"\\e9c4"',
            label: "腾讯微博"
        }, {
            text: "",
            value: "pc-shejiaoweibo",
            content: '"\\eb37"',
            label: "社交微博"
        }, {
            text: "",
            value: "pc-shejiaomomotubiao",
            content: '"\\eb36"',
            label: "社交陌陌图标"
        }, {
            text: "",
            value: "pc-shejiaomiliao",
            content: '"\\eb35"',
            label: "社交米聊"
        }, {
            text: "",
            value: "pc-tm",
            content: '"\\eb0e"',
            label: "天猫"
        }, {
            text: "",
            value: "pc-sr_baidu",
            content: '"\\eb0a"',
            label: "AK-SR百度"
        }, {
            text: "",
            value: "pc-weixin2",
            content: '"\\ea95"',
            label: "微信"
        }, {
            text: "",
            value: "pc-zixun1",
            content: '"\\ea4b"',
            label: "咨询"
        }, {
            text: "",
            value: "pc-kongjian2",
            content: '"\\ea2d"',
            label: "空间"
        }, {
            text: "",
            value: "pc-xinlangweiboon",
            content: '"\\e6a8"',
            label: "新浪微博"
        }, {
            text: "",
            value: "pc-alibaba",
            content: '"\\e92e"',
            label: ""
        }, {
            text: "",
            value: "pc-behance",
            content: '"\\e932"',
            label: ""
        }, {
            text: "",
            value: "pc-googleplus",
            content: '"\\e933"',
            label: ""
        }, {
            text: "",
            value: "pc-medium",
            content: '"\\e934"',
            label: "方法；媒体；媒介；中间物"
        }, {
            text: "",
            value: "pc-google",
            content: '"\\e935"',
            label: "谷歌；谷歌搜索引擎"
        }, {
            text: "",
            value: "pc-IE",
            content: '"\\e936"',
            label: "即"
        }, {
            text: "",
            value: "pc-amazon",
            content: '"\\e937"',
            label: "亚马逊；古希腊女战士"
        }, {
            text: "",
            value: "pc-slack",
            content: '"\\e938"',
            label: "煤末；峡谷"
        }, {
            text: "",
            value: "pc-alipay",
            content: '"\\e939"',
            label: "支付宝"
        }, {
            text: "",
            value: "pc-taobao",
            content: '"\\e93a"',
            label: "淘宝网"
        }, {
            text: "",
            value: "pc-zhihu",
            content: '"\\e93b"',
            label: "问题"
        }, {
            text: "",
            value: "pc-HTML",
            content: '"\\e93c"',
            label: "超文本标记语言"
        }, {
            text: "",
            value: "pc-linkedin",
            content: '"\\e93d"',
            label: "商务化人际关系网"
        }, {
            text: "",
            value: "pc-yahoo",
            content: '"\\e93e"',
            label: "粗鲁的人"
        }, {
            text: "",
            value: "pc-facebook",
            content: '"\\e93f"',
            label: "脸谱网"
        }, {
            text: "",
            value: "pc-skype",
            content: '"\\e940"',
            label: "网络电话（一个网络语音沟通工具）"
        }, {
            text: "",
            value: "pc-CodeSandbox",
            content: '"\\e941"',
            label: ""
        }, {
            text: "",
            value: "pc-chrome",
            content: '"\\e942"',
            label: "铬"
        }, {
            text: "",
            value: "pc-codepen",
            content: '"\\e943"',
            label: ""
        }, {
            text: "",
            value: "pc-aliwangwang",
            content: '"\\e944"',
            label: ""
        }, {
            text: "",
            value: "pc-apple",
            content: '"\\e945"',
            label: "苹果，苹果树，苹果似的东西；[美俚]炸弹，手榴弹，（棒球的）球；[美俚]人，家伙。"
        }, {
            text: "",
            value: "pc-android",
            content: '"\\e946"',
            label: "机器人"
        }, {
            text: "",
            value: "pc-Gitlab",
            content: '"\\e94a"',
            label: ""
        }, {
            text: "",
            value: "pc-reddit",
            content: '"\\e94d"',
            label: "新闻网站名"
        }, {
            text: "",
            value: "pc-windows",
            content: '"\\e94e"',
            label: "微软公司生产的“视窗”操作系统"
        }, {
            text: "",
            value: "pc-yuque",
            content: '"\\e94f"',
            label: ""
        }, {
            text: "",
            value: "pc-Youtube",
            content: '"\\e950"',
            label: "视频网站（可以让用户免费上传、观赏、分享视频短片的热门视频共享网站）"
        }, {
            text: "",
            value: "pc-Gitlab-fill",
            content: '"\\e951"',
            label: ""
        }, {
            text: "",
            value: "pc-dropbox",
            content: '"\\e952"',
            label: "网路随身碟（软件名）"
        }, {
            text: "",
            value: "pc-dingtalk",
            content: '"\\e953"',
            label: "钉钉"
        }, {
            text: "",
            value: "pc-android-fill",
            content: '"\\e954"',
            label: " 机器人"
        }, {
            text: "",
            value: "pc-apple-fill",
            content: '"\\e955"',
            label: "苹果，苹果树，苹果似的东西；[美俚]炸弹，手榴弹，（棒球的）球；[美俚]人，家伙。"
        }, {
            text: "",
            value: "pc-HTML-fill",
            content: '"\\e956"',
            label: "超文本标记语言"
        }, {
            text: "",
            value: "pc-windows-fill",
            content: '"\\e957"',
            label: "微软公司生产的“视窗”操作系统"
        }, {
            text: "",
            value: "pc-QQ",
            content: '"\\e958"',
            label: "腾讯即时聊天工具"
        }, {
            text: "",
            value: "pc-twitter",
            content: '"\\e959"',
            label: "微博客，鸟叫声"
        }, {
            text: "",
            value: "pc-skype-fill",
            content: '"\\e95a"',
            label: "网络电话（一个网络语音沟通工具）"
        }, {
            text: "",
            value: "pc-weibo",
            content: '"\\e95b"',
            label: "微博"
        }, {
            text: "",
            value: "pc-yuque-fill",
            content: '"\\e95c"',
            label: ""
        }, {
            text: "",
            value: "pc-Youtube-fill",
            content: '"\\e95d"',
            label: "视频网站（可以让用户免费上传、观赏、分享视频短片的热门视频共享网站）"
        }, {
            text: "",
            value: "pc-yahoo-fill",
            content: '"\\e95e"',
            label: "雅虎，粗鲁的人"
        }, {
            text: "",
            value: "pc-wechat-fill",
            content: '"\\e95f"',
            label: "微信（腾讯出品的一款语音聊天应用）"
        }, {
            text: "",
            value: "pc-chrome-fill",
            content: '"\\e960"',
            label: "铬"
        }, {
            text: "",
            value: "pc-alipay-circle-fill",
            content: '"\\e961"',
            label: "支付宝"
        }, {
            text: "",
            value: "pc-aliwangwang-fill",
            content: '"\\e962"',
            label: ""
        }, {
            text: "",
            value: "pc-behance-circle-fill",
            content: '"\\e963"',
            label: ""
        }, {
            text: "",
            value: "pc-amazon-circle-fill",
            content: '"\\e964"',
            label: "亚马逊；古希腊女战士"
        }, {
            text: "",
            value: "pc-codepen-circle-fill",
            content: '"\\e965"',
            label: ""
        }, {
            text: "",
            value: "pc-odeSandbox-circle-f",
            content: '"\\e966"',
            label: ""
        }, {
            text: "",
            value: "pc-dropbox-circle-fill",
            content: '"\\e967"',
            label: "网路随身碟（软件名）"
        }, {
            text: "",
            value: "pc-github-fill",
            content: '"\\e968"',
            label: "社交编程及代码托管网站"
        }, {
            text: "",
            value: "pc-dribbble-circle-fill",
            content: '"\\e969"',
            label: "追波网"
        }, {
            text: "",
            value: "pc-googleplus-circle-f",
            content: '"\\e96a"',
            label: ""
        }, {
            text: "",
            value: "pc-medium-circle-fill",
            content: '"\\e96b"',
            label: "方法；媒体；媒介；中间物"
        }, {
            text: "",
            value: "pc-QQ-circle-fill",
            content: '"\\e96c"',
            label: "腾讯即时聊天工具"
        }, {
            text: "",
            value: "pc-IE-circle-fill",
            content: '"\\e96d"',
            label: "工业管理学（Industrial Engineering）；指标误差（Index Error）；工程师协会（Institution of Engineers）"
        }, {
            text: "",
            value: "pc-google-circle-fill",
            content: '"\\e96e"',
            label: "谷歌；谷歌搜索引擎"
        }, {
            text: "",
            value: "pc-dingtalk-circle-fill",
            content: '"\\e96f"',
            label: "钉钉"
        }, {
            text: "",
            value: "pc-sketch-circle-fill",
            content: '"\\e970"',
            label: "素描；略图；梗概"
        }, {
            text: "",
            value: "pc-slack-circle-fill",
            content: '"\\e971"',
            label: "煤末；峡谷"
        }, {
            text: "",
            value: "pc-twitter-circle-fill",
            content: '"\\e972"',
            label: "微博客，鸟叫声"
        }, {
            text: "",
            value: "pc-taobao-circle-fill",
            content: '"\\e973"',
            label: "淘宝网"
        }, {
            text: "",
            value: "pc-weibo-circle-fill",
            content: '"\\e974"',
            label: "微博"
        }, {
            text: "",
            value: "pc-zhihu-circle-fill",
            content: '"\\e975"',
            label: "问题"
        }, {
            text: "",
            value: "pc-reddit-circle-fill",
            content: '"\\e976"',
            label: "新闻网站名"
        }, {
            text: "",
            value: "pc-alipay-square-fill",
            content: '"\\e977"',
            label: "支付宝"
        }, {
            text: "",
            value: "pc-dingtalk-square-fill",
            content: '"\\e978"',
            label: "钉钉"
        }, {
            text: "",
            value: "pc-CodeSandbox-square-f",
            content: '"\\e979"',
            label: ""
        }, {
            text: "",
            value: "pc-behance-square-fill",
            content: '"\\e97a"',
            label: ""
        }, {
            text: "",
            value: "pc-amazon-square-fill",
            content: '"\\e97b"',
            label: "亚马逊；古希腊女战士"
        }, {
            text: "",
            value: "pc-codepen-square-fill",
            content: '"\\e97c"',
            label: ""
        }, {
            text: "",
            value: "pc-dribbble-square-fill",
            content: '"\\e97d"',
            label: "追波网"
        }, {
            text: "",
            value: "pc-dropbox-square-fill",
            content: '"\\e97e"',
            label: "网路随身碟（软件名）"
        }, {
            text: "",
            value: "pc-facebook-fill",
            content: '"\\e97f"',
            label: "脸谱网"
        }, {
            text: "",
            value: "pc-googleplus-square-f",
            content: '"\\e980"',
            label: ""
        }, {
            text: "",
            value: "pc-google-square-fill",
            content: '"\\e981"',
            label: "谷歌；谷歌搜索引擎"
        }, {
            text: "",
            value: "pc-instagram-fill",
            content: '"\\e982"',
            label: "照片分享（一款运行在iPhone平台上的应用程序）"
        }, {
            text: "",
            value: "pc-IE-square-fill",
            content: '"\\e983"',
            label: "工业管理学（Industrial Engineering）；指标误差（Index Error）；工程师协会（Institution of Engineers）"
        }, {
            text: "",
            value: "pc-medium-square-fill",
            content: '"\\e984"',
            label: "方法；媒体；媒介；中间物"
        }, {
            text: "",
            value: "pc-linkedin-fill",
            content: '"\\e985"',
            label: "商务化人际关系网"
        }, {
            text: "",
            value: "pc-QQ-square-fill",
            content: '"\\e986"',
            label: "腾讯即时聊天工具"
        }, {
            text: "",
            value: "pc-reddit-square-fill",
            content: '"\\e987"',
            label: "新闻网站名"
        }, {
            text: "",
            value: "pc-twitter-square-fill",
            content: '"\\e988"',
            label: "微博客，鸟叫声"
        }, {
            text: "",
            value: "pc-sketch-square-fill",
            content: '"\\e989"',
            label: "素描；略图；梗概"
        }, {
            text: "",
            value: "pc-slack-square-fill",
            content: '"\\e98a"',
            label: "煤末；峡谷"
        }, {
            text: "",
            value: "pc-taobao-square-fill",
            content: '"\\e98b"',
            label: "淘宝网"
        }, {
            text: "",
            value: "pc-weibo-square-fill",
            content: '"\\e98c"',
            label: "微博"
        }, {
            text: "",
            value: "pc-zhihu-square-fill",
            content: '"\\e98d"',
            label: "问题"
        }]
    }, {
        text: "圆形风格图标",
        value: "circle",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-fenxianglishichiyou",
            content: '"\\e9f7"',
            label: "分享－历史持有"
        }, {
            text: "",
            value: "pc-xuanxiangoptions",
            content: '"\\e732"',
            label: "选项_options"
        }, {
            text: "",
            value: "pc-tuitetwitter43",
            content: '"\\e716"',
            label: "推特_twitter43"
        }, {
            text: "",
            value: "pc-luopancompass84",
            content: '"\\e6a2"',
            label: "罗盘_compass84"
        }, {
            text: "",
            value: "pc-caifuguanlizhuanjiatuandui",
            content: '"\\e9f5"',
            label: "财富管理专家团队"
        }, {
            text: "",
            value: "pc-qianmoney125",
            content: '"\\e68d"',
            label: "钱"
        }, {
            text: "",
            value: "pc-gugegoogle114",
            content: '"\\e657"',
            label: "谷歌"
        }, {
            text: "",
            value: "pc-gengduomore12",
            content: '"\\e656"',
            label: "更多"
        }, {
            text: "",
            value: "pc-pinterestpinterest30",
            content: '"\\e61f"',
            label: "Pinterest"
        }, {
            text: "",
            value: "pc-facebookfacebook52",
            content: '"\\e60e"',
            label: "facebook"
        }, {
            text: "",
            value: "pc-facebookfacebook51",
            content: '"\\e9f3"',
            label: "facebook"
        }, {
            text: "",
            value: "pc-youjian2",
            content: '"\\e68c"',
            label: "邮件"
        }, {
            text: "",
            value: "pc-iconset0484",
            content: '"\\e9e7"',
            label: "录音"
        }, {
            text: "",
            value: "pc-iconset0483",
            content: '"\\e9e6"',
            label: "暂停"
        }, {
            text: "",
            value: "pc-iconset0482",
            content: '"\\e9e5"',
            label: "暂停"
        }, {
            text: "",
            value: "pc-iconset0481",
            content: '"\\e9e4"',
            label: "播放"
        }, {
            text: "",
            value: "pc-iconset0397",
            content: '"\\e9db"',
            label: "雷达"
        }, {
            text: "",
            value: "pc-iconset0394",
            content: '"\\e9da"',
            label: "指南针"
        }, {
            text: "",
            value: "pc-iconset0359",
            content: '"\\e9d8"',
            label: "Twitter"
        }, {
            text: "",
            value: "pc-iconset0297",
            content: '"\\e9d7"',
            label: "英镑"
        }, {
            text: "",
            value: "pc-iconset0295",
            content: '"\\e9d6"',
            label: "欧元"
        }, {
            text: "",
            value: "pc-iconset0293",
            content: '"\\e9d5"',
            label: "美元"
        }, {
            text: "",
            value: "pc-iconset0288",
            content: '"\\e9d4"',
            label: "禁止"
        }, {
            text: "",
            value: "pc-iconset0284",
            content: '"\\e9d3"',
            label: "谷歌"
        }, {
            text: "",
            value: "pc-iconset0187",
            content: '"\\e9d2"',
            label: "减"
        }, {
            text: "",
            value: "pc-iconset0186",
            content: '"\\e9d1"',
            label: "加"
        }, {
            text: "",
            value: "pc-iconset0167",
            content: '"\\e9cf"',
            label: "喜欢收藏"
        }, {
            text: "",
            value: "pc-iconset0144",
            content: '"\\e9ce"',
            label: "叹号"
        }, {
            text: "",
            value: "pc-iconset0143",
            content: '"\\e9cd"',
            label: "问号"
        }, {
            text: "",
            value: "pc-iconset0142",
            content: '"\\e9cc"',
            label: "关于"
        }, {
            text: "",
            value: "pc-iconset0135",
            content: '"\\e9cb"',
            label: "更多"
        }, {
            text: "",
            value: "pc-gugegoogle115",
            content: '"\\e9ca"',
            label: "谷歌_google"
        }, {
            text: "",
            value: "pc-04",
            content: '"\\e9c2"',
            label: "我的"
        }, {
            text: "",
            value: "pc-fanhui",
            content: '"\\e64d"',
            label: "返回"
        }, {
            text: "",
            value: "pc-yen",
            content: '"\\e9b5"',
            label: "yen"
        }, {
            text: "",
            value: "pc-wireframeglobe",
            content: '"\\e9b4"',
            label: "wireframe-globe"
        }, {
            text: "",
            value: "pc-useradd",
            content: '"\\e9b3"',
            label: "user-add"
        }, {
            text: "",
            value: "pc-textsizeupper",
            content: '"\\e9b2"',
            label: "text-size-upper"
        }, {
            text: "",
            value: "pc-textsizereduce",
            content: '"\\e77c"',
            label: "text-size-reduce"
        }, {
            text: "",
            value: "pc-textnormal",
            content: '"\\e777"',
            label: "text-normal"
        }, {
            text: "",
            value: "pc-telephone",
            content: '"\\e76f"',
            label: "telephone"
        }, {
            text: "",
            value: "pc-star1",
            content: '"\\e76a"',
            label: "star"
        }, {
            text: "",
            value: "pc-speed",
            content: '"\\e768"',
            label: "speed"
        }, {
            text: "",
            value: "pc-soundon",
            content: '"\\e767"',
            label: "声音，喇叭"
        }, {
            text: "",
            value: "pc-soundoff",
            content: '"\\e763"',
            label: "声音，喇叭"
        }, {
            text: "",
            value: "pc-socialyoutube",
            content: '"\\e760"',
            label: "youtube"
        }, {
            text: "",
            value: "pc-socialyahoo",
            content: '"\\e75f"',
            label: "yahoo"
        }, {
            text: "",
            value: "pc-socialskype",
            content: '"\\e75c"',
            label: "skype"
        }, {
            text: "",
            value: "pc-socialsharethis",
            content: '"\\e75b"',
            label: "sharethis"
        }, {
            text: "",
            value: "pc-sociallinkedin",
            content: '"\\e734"',
            label: "linkedin"
        }, {
            text: "",
            value: "pc-refresh",
            content: '"\\e733"',
            label: "refresh"
        }, {
            text: "",
            value: "pc-pin1",
            content: '"\\e731"',
            label: "pin"
        }, {
            text: "",
            value: "pc-optionssettings",
            content: '"\\e730"',
            label: "设置；选项"
        }, {
            text: "",
            value: "pc-officine",
            content: '"\\e72f"',
            label: "设置"
        }, {
            text: "",
            value: "pc-off",
            content: '"\\e72e"',
            label: "关机"
        }, {
            text: "",
            value: "pc-listcircle",
            content: '"\\e72d"',
            label: "列表"
        }, {
            text: "",
            value: "pc-comments",
            content: '"\\e72c"',
            label: "评论"
        }, {
            text: "",
            value: "pc-comment",
            content: '"\\e72b"',
            label: "评论"
        }, {
            text: "",
            value: "pc-blockmenu",
            content: '"\\e729"',
            label: "菜单；列表"
        }, {
            text: "",
            value: "pc-bezier",
            content: '"\\e727"',
            label: "耳机"
        }, {
            text: "",
            value: "pc-bag",
            content: '"\\e726"',
            label: "包"
        }, {
            text: "",
            value: "pc-atom",
            content: '"\\e725"',
            label: "atom"
        }, {
            text: "",
            value: "pc-arrowcurveright",
            content: '"\\e724"',
            label: "向右"
        }, {
            text: "",
            value: "pc-airplane",
            content: '"\\e721"',
            label: "分享；飞机"
        }, {
            text: "",
            value: "pc-shebeipeizhi",
            content: '"\\e68b"',
            label: "设置"
        }, {
            text: "",
            value: "pc-shebeipeizhi1",
            content: '"\\e720"',
            label: "设备配置"
        }, {
            text: "",
            value: "pc-kequntoushi",
            content: '"\\e68a"',
            label: "客群透视"
        }, {
            text: "",
            value: "pc-qiaquanguanli",
            content: '"\\e689"',
            label: "卡券管理"
        }, {
            text: "",
            value: "pc-dianhua2",
            content: '"\\e687"',
            label: "电话"
        }, {
            text: "",
            value: "pc-anquanzhongxin",
            content: '"\\e686"',
            label: "安全中心"
        }, {
            text: "",
            value: "pc-xitongshezhi",
            content: '"\\e685"',
            label: "系统设置"
        }, {
            text: "",
            value: "pc-shebeiguzhangshenbao",
            content: '"\\e684"',
            label: "设备故障申报"
        }, {
            text: "",
            value: "pc-mimazhongzhi",
            content: '"\\e683"',
            label: "密码重置"
        }, {
            text: "",
            value: "pc-kequntoushi1",
            content: '"\\e71f"',
            label: "客群透视"
        }, {
            text: "",
            value: "pc-qq1",
            content: '"\\e65c"',
            label: "qq"
        }, {
            text: "",
            value: "pc-unie654",
            content: '"\\e702"',
            label: "支付宝"
        }, {
            text: "",
            value: "pc-unie651",
            content: '"\\e6ff"',
            label: "淘宝"
        }, {
            text: "",
            value: "pc-dianji",
            content: '"\\e6b9"',
            label: "点击"
        }, {
            text: "",
            value: "pc-3",
            content: '"\\e61e"',
            label: "微信"
        }, {
            text: "",
            value: "pc-servicejinkoubaoshui",
            content: '"\\e71e"',
            label: "进口保税"
        }, {
            text: "",
            value: "pc-anzhuoduanliulanqidakai",
            content: '"\\e71d"',
            label: "安卓端浏览器打开"
        }, {
            text: "",
            value: "pc-sousuo",
            content: '"\\e71c"',
            label: "搜索"
        }, {
            text: "",
            value: "pc-tianmaoanshidaohuo",
            content: '"\\e71b"',
            label: "天猫-按时到货"
        }, {
            text: "",
            value: "pc-tianmaomendianziti",
            content: '"\\e71a"',
            label: "天猫-门店自提 "
        }, {
            text: "",
            value: "pc-tianmaoshiyongfuwu",
            content: '"\\e719"',
            label: "天猫-试用服务"
        }, {
            text: "",
            value: "pc-tianmaojishiqueren",
            content: '"\\e718"',
            label: "天猫-即时确认"
        }, {
            text: "",
            value: "pc-tianmaohuopiaotongxing",
            content: '"\\e717"',
            label: "天猫-货票同行"
        }, {
            text: "",
            value: "pc-tianmaohuodaofukuan",
            content: '"\\e715"',
            label: "天猫-货到付款"
        }, {
            text: "",
            value: "pc-tianmaociribida",
            content: '"\\e714"',
            label: "天猫-次日必达"
        }, {
            text: "",
            value: "pc-tianmaobaoyouqia",
            content: '"\\e713"',
            label: "天猫-包邮卡"
        }, {
            text: "",
            value: "pc-tianmao123shixiao",
            content: '"\\e712"',
            label: "天猫-123时效"
        }, {
            text: "",
            value: "pc-tianmaoanshifahuo",
            content: '"\\e711"',
            label: "天猫-按时发货"
        }, {
            text: "",
            value: "pc-tianmaosonghuoshangmen",
            content: '"\\e710"',
            label: "天猫-送货上门"
        }, {
            text: "",
            value: "pc-tianmaoyuanchengfuwu",
            content: '"\\e70f"',
            label: "天猫-远程服务"
        }, {
            text: "",
            value: "pc-tianmaoyoujirenzheng",
            content: '"\\e70e"',
            label: "天猫-有机认证"
        }, {
            text: "",
            value: "pc-tianmaoxianshihoumai",
            content: '"\\e70d"',
            label: "天猫-先试后买"
        }, {
            text: "",
            value: "pc-tianmaowuyoutuihuanhuo",
            content: '"\\e775"',
            label: "天猫-无忧退换货"
        }, {
            text: "",
            value: "pc-tianmaoshunfengbaoyou",
            content: '"\\e70c"',
            label: "天猫-顺丰包邮"
        }, {
            text: "",
            value: "pc-tianmaodianbaobao",
            content: '"\\e70b"',
            label: "天猫-电保包"
        }, {
            text: "",
            value: "pc-tianmaozengyunfeixian",
            content: '"\\e70a"',
            label: "天猫-赠运费险"
        }, {
            text: "",
            value: "pc-tianmaotuihuobaozhangqia",
            content: '"\\e709"',
            label: "天猫-退货保障卡"
        }, {
            text: "",
            value: "pc-tianmaoshangmentuihuo",
            content: '"\\e708"',
            label: "天猫-上门退货"
        }, {
            text: "",
            value: "pc-tianmaoquanguolianbao",
            content: '"\\e706"',
            label: "天猫-全国联保"
        }, {
            text: "",
            value: "pc-tianmaopeisonganzhuang",
            content: '"\\e705"',
            label: "天猫-配送安装"
        }, {
            text: "",
            value: "pc-tianmaojisutuikuan",
            content: '"\\e704"',
            label: "天猫-极速退款"
        }, {
            text: "",
            value: "pc-89",
            content: '"\\e703"',
            label: "新浪微博"
        }, {
            text: "",
            value: "pc-gouwuche",
            content: '"\\e60a"',
            label: "购物车"
        }, {
            text: "",
            value: "pc-zhengpinbaozhang",
            content: '"\\e701"',
            label: "正品保障"
        }, {
            text: "",
            value: "pc-qitianwuliyoutuihuanhuo",
            content: '"\\e700"',
            label: "七天无理由退换货"
        }, {
            text: "",
            value: "pc-tesefuwu",
            content: '"\\e6fe"',
            label: "特色服务"
        }, {
            text: "",
            value: "pc-shouyeyong",
            content: '"\\eb64"',
            label: "首页"
        }, {
            text: "",
            value: "pc-yuer",
            content: '"\\eb05"',
            label: "育儿"
        }, {
            text: "",
            value: "pc-shumachanpin",
            content: '"\\eb04"',
            label: "数码产品"
        }, {
            text: "",
            value: "pc-yinleyule",
            content: '"\\eb03"',
            label: "音乐娱乐"
        }, {
            text: "",
            value: "pc-yule",
            content: '"\\eb02"',
            label: "娱乐"
        }, {
            text: "",
            value: "pc-jiaoyu",
            content: '"\\e6fd"',
            label: "教育"
        }, {
            text: "",
            value: "pc-jiadian",
            content: '"\\e6fc"',
            label: "家电"
        }, {
            text: "",
            value: "pc-yundong",
            content: '"\\e6fb"',
            label: "运动"
        }, {
            text: "",
            value: "pc-jiaju",
            content: '"\\e6fa"',
            label: "家具"
        }, {
            text: "",
            value: "pc-qicheyongpin",
            content: '"\\e6f9"',
            label: "汽车用品"
        }, {
            text: "",
            value: "pc-shujijiaocai",
            content: '"\\e6f8"',
            label: "书籍教材"
        }, {
            text: "",
            value: "pc-youxi",
            content: '"\\e6f7"',
            label: "游戏"
        }, {
            text: "",
            value: "pc-liwu",
            content: '"\\e6f6"',
            label: "礼物"
        }, {
            text: "",
            value: "pc-xiuliweihu",
            content: '"\\e6f5"',
            label: "修理维护"
        }, {
            text: "",
            value: "pc-chongwu",
            content: '"\\e6f4"',
            label: "宠物"
        }, {
            text: "",
            value: "pc-lvyoudujia",
            content: '"\\e6f3"',
            label: "旅游度假"
        }, {
            text: "",
            value: "pc-jiaotong",
            content: '"\\e6f2"',
            label: "交通"
        }, {
            text: "",
            value: "pc-canyin",
            content: '"\\e6f1"',
            label: "餐饮"
        }, {
            text: "",
            value: "pc-yiban",
            content: '"\\e6f0"',
            label: "一般"
        }, {
            text: "",
            value: "pc-lingshi",
            content: '"\\e6ef"',
            label: "零食"
        }, {
            text: "",
            value: "pc-maicai",
            content: '"\\e6ee"',
            label: "买菜"
        }, {
            text: "",
            value: "pc-riyongpin",
            content: '"\\e6ed"',
            label: "日用品"
        }, {
            text: "",
            value: "pc-shuiguo",
            content: '"\\e6ec"',
            label: "水果"
        }, {
            text: "",
            value: "pc-yiwu",
            content: '"\\e6eb"',
            label: "衣物"
        }, {
            text: "",
            value: "pc-dianying",
            content: '"\\e6ea"',
            label: "电影"
        }, {
            text: "",
            value: "pc-huazhuangpin",
            content: '"\\e6e9"',
            label: "化妆品"
        }, {
            text: "",
            value: "pc-hongbao",
            content: '"\\e6e8q"',
            label: "红包"
        }, {
            text: "",
            value: "pc-yinpin",
            content: '"\\e6e7"',
            label: "饮品"
        }, {
            text: "",
            value: "pc-fangzu",
            content: '"\\e6e6"',
            label: "房租"
        }, {
            text: "",
            value: "pc-yaopin",
            content: '"\\e6e5"',
            label: "药品"
        }, {
            text: "",
            value: "pc-chuzhiqia",
            content: '"\\e6e4"',
            label: "储值卡"
        }, {
            text: "",
            value: "pc-weixinzhifu",
            content: '"\\e6e3"',
            label: '"微信支付'
        }, {
            text: "",
            value: "pc-xinyongqia",
            content: '"\\e6e2"',
            label: "信用卡"
        }, {
            text: "",
            value: "pc-jingdongbaitiao",
            content: '"\\e6e1"',
            label: "京东白条"
        }, {
            text: "",
            value: "pc-mayihuabei",
            content: '"\\e6e0"',
            label: '"蚂蚁花呗'
        }, {
            text: "",
            value: "pc-jiechu",
            content: '"\\e6df"',
            label: "借出"
        }, {
            text: "",
            value: "pc-jieru",
            content: '"\\e6dd"',
            label: "借入"
        }, {
            text: "",
            value: "pc-touzizhongxin",
            content: '"\\e6db"',
            label: "投资中心"
        }, {
            text: "",
            value: "pc-align_center",
            content: '"\\eb01"',
            label: "居中"
        }, {
            text: "",
            value: "pc-zoom_in",
            content: '"\\eb00"',
            label: "放大"
        }, {
            text: "",
            value: "pc-zoom_out",
            content: '"\\eaff"',
            label: "缩小"
        }, {
            text: "",
            value: "pc-wallet1",
            content: '"\\eafe"',
            label: "钱包"
        }, {
            text: "",
            value: "pc-warning",
            content: '"\\eafd"',
            label: "叹号"
        }, {
            text: "",
            value: "pc-volume_roundeds",
            content: '"\\eafc"',
            label: "声音"
        }, {
            text: "",
            value: "pc-video1",
            content: '"\\eafb"',
            label: "录像"
        }, {
            text: "",
            value: "pc-view",
            content: '"\\eafa"',
            label: "查看"
        }, {
            text: "",
            value: "pc-trash",
            content: '"\\eaf9"',
            label: "垃圾筒"
        }, {
            text: "",
            value: "pc-tips_off",
            content: '"\\eaf8"',
            label: "灯泡"
        }, {
            text: "",
            value: "pc-time_oclock",
            content: '"\\eaf7"',
            label: "时间"
        }, {
            text: "",
            value: "pc-sync1",
            content: '"\\eaf6"',
            label: "刷新；同步"
        }, {
            text: "",
            value: "pc-stop1",
            content: '"\\eaf5"',
            label: "停止"
        }, {
            text: "",
            value: "pc-shield_on",
            content: '"\\eaf4"',
            label: "保护"
        }, {
            text: "",
            value: "pc-shield_off",
            content: '"\\eaf3"',
            label: "保护"
        }, {
            text: "",
            value: "pc-shield",
            content: '"\\eaf2"',
            label: "保护"
        }, {
            text: "",
            value: "pc-share1",
            content: '"\\eaf1"',
            label: "分享"
        }, {
            text: "",
            value: "pc-setting_cog",
            content: '"\\eaf0"',
            label: "设置"
        }, {
            text: "",
            value: "pc-setting2",
            content: '"\\eaef"',
            label: "设置"
        }, {
            text: "",
            value: "pc-safety",
            content: '"\\eaee"',
            label: "安全锁"
        }, {
            text: "",
            value: "pc-printer1",
            content: '"\\eaed"',
            label: "打印"
        }, {
            text: "",
            value: "pc-profile_addfrie",
            content: '"\\eaec"',
            label: "会员添加"
        }, {
            text: "",
            value: "pc-plane",
            content: '"\\eaeb"',
            label: "飞机"
        }, {
            text: "",
            value: "pc-photo_remove",
            content: '"\\eaea"',
            label: "删除图片"
        }, {
            text: "",
            value: "pc-pin",
            content: '"\\e77b"',
            label: "图钉"
        }, {
            text: "",
            value: "pc-pie_chart",
            content: '"\\e77a"',
            label: "扇形图"
        }, {
            text: "",
            value: "pc-photo_add",
            content: '"\\e779"',
            label: "图片添加"
        }, {
            text: "",
            value: "pc-movies",
            content: '"\\e778"',
            label: "电影"
        }, {
            text: "",
            value: "pc-pencil_roundeds",
            content: '"\\e776"',
            label: "铅笔"
        }, {
            text: "",
            value: "pc-notification1",
            content: '"\\e774"',
            label: "铃"
        }, {
            text: "",
            value: "pc-money",
            content: '"\\e773"',
            label: "金钱"
        }, {
            text: "",
            value: "pc-minimize",
            content: '"\\e772"',
            label: "缩小"
        }, {
            text: "",
            value: "pc-microphone_roun",
            content: '"\\e771"',
            label: "麦克风"
        }, {
            text: "",
            value: "pc-map",
            content: '"\\e770"',
            label: "地图"
        }, {
            text: "",
            value: "pc-mail_send",
            content: '"\\e76e"',
            label: "邮件发送"
        }, {
            text: "",
            value: "pc-mail_read",
            content: '"\\e76d"',
            label: "读邮件"
        }, {
            text: "",
            value: "pc-lock_unlock",
            content: '"\\e76c"',
            label: "解锁"
        }, {
            text: "",
            value: "pc-location2",
            content: '"\\e76b"',
            label: "定位"
        }, {
            text: "",
            value: "pc-list_",
            content: '"\\e769"',
            label: "列表"
        }, {
            text: "",
            value: "pc-link_roundedsol",
            content: '"\\e766"',
            label: "链接"
        }, {
            text: "",
            value: "pc-like_",
            content: '"\\e765"',
            label: "点赞"
        }, {
            text: "",
            value: "pc-layer_roundedso",
            content: '"\\e764"',
            label: "层叠"
        }, {
            text: "",
            value: "pc-info",
            content: '"\\e762"',
            label: "信息"
        }, {
            text: "",
            value: "pc-heart_break",
            content: '"\\e75e"',
            label: "心碎"
        }, {
            text: "",
            value: "pc-global_geo",
            content: '"\\e75d"',
            label: "全球"
        }, {
            text: "",
            value: "pc-heart1",
            content: '"\\e75a"',
            label: "爱心"
        }, {
            text: "",
            value: "pc-global_earth",
            content: '"\\e759"',
            label: "全球"
        }, {
            text: "",
            value: "pc-fullscreen1",
            content: '"\\e758"',
            label: "放大"
        }, {
            text: "",
            value: "pc-file_import",
            content: '"\\e757"',
            label: "文件上传"
        }, {
            text: "",
            value: "pc-folder_roundeds",
            content: '"\\e756"',
            label: "文件夹"
        }, {
            text: "",
            value: "pc-find",
            content: '"\\e755"',
            label: "发现；放大镜"
        }, {
            text: "",
            value: "pc-flag1",
            content: '"\\e754"',
            label: "旗帜；国旗"
        }, {
            text: "",
            value: "pc-file_export",
            content: '"\\e753"',
            label: "上传"
        }, {
            text: "",
            value: "pc-documents",
            content: '"\\e752"',
            label: "文档"
        }, {
            text: "",
            value: "pc-device_computer",
            content: '"\\e751"',
            label: "电脑"
        }, {
            text: "",
            value: "pc-cursor_roundeds",
            content: '"\\e750"',
            label: "鼠标"
        }, {
            text: "",
            value: "pc-contact_number",
            content: '"\\e74f"',
            label: "电话"
        }, {
            text: "",
            value: "pc-creditcard1",
            content: '"\\e74e"',
            label: "信用卡"
        }, {
            text: "",
            value: "pc-camera1",
            content: '"\\e74d"',
            label: "拍照"
        }, {
            text: "",
            value: "pc-chat_",
            content: '"\\e74c"',
            label: "聊天"
        }, {
            text: "",
            value: "pc-contact",
            content: '"\\e74b"',
            label: "联系"
        }, {
            text: "",
            value: "pc-compass_rounded",
            content: '"\\e748"',
            label: "指南针"
        }, {
            text: "",
            value: "pc-cloud1",
            content: '"\\e747"',
            label: "云上传"
        }, {
            text: "",
            value: "pc-cloud_download",
            content: '"\\e746"',
            label: "云下载"
        }, {
            text: "",
            value: "pc-clock",
            content: '"\\e745"',
            label: "时钟"
        }, {
            text: "",
            value: "pc-call",
            content: '"\\e744"',
            label: "电话"
        }, {
            text: "",
            value: "pc-checkin_",
            content: '"\\e741"',
            label: "地图定位"
        }, {
            text: "",
            value: "pc-book1",
            content: '"\\e73f"',
            label: "书本"
        }, {
            text: "",
            value: "pc-xiangji1",
            content: '"\\eacf"',
            label: "相机"
        }, {
            text: "",
            value: "pc-weidenglutouxiang",
            content: '"\\e6ad"',
            label: "未登录头象"
        }, {
            text: "",
            value: "pc-zanwuweituofangyuan",
            content: '"\\e6ac"',
            label: "暂无委托房源"
        }, {
            text: "",
            value: "pc-xitongxiaoxi",
            content: '"\\e6ab"',
            label: "系统消息"
        }, {
            text: "",
            value: "pc-payfor",
            content: '"\\e6af"',
            label: "购买"
        }, {
            text: "",
            value: "pc-xiangshangshouqi-xianxingyuankuang",
            content: '"\\eaa1"',
            label: "向上、收起-线性圆框"
        }, {
            text: "",
            value: "pc-xiangxiazhankai-xianxingyuankuang",
            content: '"\\eaa0"',
            label: "向下、展开-线性圆框"
        }, {
            text: "",
            value: "pc-xiayiyeqianjinchakangengduo-xianxingyuankuang",
            content: '"\\ea9f"',
            label: "下一页、前进、查看更多-线性圆框"
        }, {
            text: "",
            value: "pc-shangyiyehoutuifanhui-xianxingyuankuang",
            content: '"\\ea9e"',
            label: "上一页、后退、返回-线性圆框"
        }, {
            text: "",
            value: "pc-gantanhao-xianxingyuankuang",
            content: '"\\ea9d"',
            label: "感叹号-线性圆框"
        }, {
            text: "",
            value: "pc-wenhao-xianxingyuankuang",
            content: '"\\ea9c"',
            label: "问号-线性圆框"
        }, {
            text: "",
            value: "pc-xinxi-xianxingyuankuang",
            content: '"\\ea9b"',
            label: "信息-线性圆框"
        }, {
            text: "",
            value: "pc-cuowuguanbiquxiao-xianxingyuankuang",
            content: '"\\ea99"',
            label: "错误、关闭、取消-线性圆框"
        }, {
            text: "",
            value: "pc-jian-xianxingyuankuang",
            content: '"\\ea98"',
            label: "减-线性圆框"
        }, {
            text: "",
            value: "pc-zhengquewancheng-xianxingyuankuang",
            content: '"\\ea97"',
            label: "正确、完成-线性圆框"
        }, {
            text: "",
            value: "pc-jia-xianxingyuankuang",
            content: '"\\ea96"',
            label: "加-线性圆框"
        }, {
            text: "",
            value: "pc-web-icon-",
            content: '"\\ea7d"',
            label: "备注提示"
        }, {
            text: "",
            value: "pc-gouwuche1",
            content: '"\\ea72"',
            label: "购物车"
        }, {
            text: "",
            value: "pc-kuaisuxiadan",
            content: '"\\ea65"',
            label: "快速下单"
        }, {
            text: "",
            value: "pc-guanbi4",
            content: '"\\e749"',
            label: "关闭"
        }, {
            text: "",
            value: "pc-chenggong",
            content: '"\\e742"',
            label: "成功"
        }, {
            text: "",
            value: "pc-youyong",
            content: '"\\e6c7"',
            label: "游泳"
        }, {
            text: "",
            value: "pc-chaxunliebiao",
            content: '"\\e6a5"',
            label: "查询列表"
        }, {
            text: "",
            value: "pc-chakan",
            content: '"\\e6a4"',
            label: "查看"
        }, {
            text: "",
            value: "pc-wuqiazhifu",
            content: '"\\e6a1"',
            label: "无卡支付"
        }, {
            text: "",
            value: "pc-cuidan",
            content: '"\\e6a0"',
            label: "催单"
        }, {
            text: "",
            value: "pc-zhongyangkongdiao",
            content: '"\\e69f"',
            label: "中央空调"
        }, {
            text: "",
            value: "pc-yongcanqu",
            content: '"\\e69d"',
            label: "用餐区"
        }, {
            text: "",
            value: "pc-songcanfuwu",
            content: '"\\e69a"',
            label: "送餐服务"
        }, {
            text: "",
            value: "pc-shouyin",
            content: '"\\e699"',
            label: "收银"
        }, {
            text: "",
            value: "pc-quxiao",
            content: '"\\e698"',
            label: "取消"
        }, {
            text: "",
            value: "pc-mianfeixishuyongpin",
            content: '"\\e697"',
            label: "免费洗漱用品"
        }, {
            text: "",
            value: "pc-mianfeiwifi",
            content: '"\\e696"',
            label: "免费"
        }, {
            text: "",
            value: "pc-jingting",
            content: '"\\e695"',
            label: "经停"
        }, {
            text: "",
            value: "pc-gouwu",
            content: '"\\e694"',
            label: "购物"
        }, {
            text: "",
            value: "pc-chuifengji",
            content: '"\\e639"',
            label: "吹风机"
        }, {
            text: "",
            value: "pc-biangeng",
            content: '"\\e692"',
            label: "变更"
        }, {
            text: "",
            value: "pc-tianjia2",
            content: '"\\ea0d"',
            label: "添加"
        }, {
            text: "",
            value: "pc-shenhe2",
            content: '"\\ea0c"',
            label: "审核"
        }, {
            text: "",
            value: "pc-shanchu2",
            content: '"\\ea0b"',
            label: "删除"
        }, {
            text: "",
            value: "pc-youxiangrenzheng",
            content: '"\\ea05"',
            label: "邮箱认证"
        }, {
            text: "",
            value: "pc-shoujirenzheng",
            content: '"\\ea04"',
            label: "手机认证"
        }, {
            text: "",
            value: "pc-qq",
            content: '"\\ea03"',
            label: "qq"
        }, {
            text: "",
            value: "pc-zhifubao1",
            content: '"\\ea02"',
            label: "支付宝"
        }, {
            text: "",
            value: "pc-shangcheng",
            content: '"\\ea01"',
            label: "商城"
        }, {
            text: "",
            value: "pc-xuetang",
            content: '"\\ea00"',
            label: "学堂"
        }, {
            text: "",
            value: "pc-qian",
            content: '"\\e9fe"',
            label: "钱"
        }, {
            text: "",
            value: "pc-wodeshouhuodizhi",
            content: '"\\e9fc"',
            label: "我的收货地址"
        }, {
            text: "",
            value: "pc-yduitengxunweibo",
            content: '"\\e69c"',
            label: "腾讯微博"
        }, {
            text: "",
            value: "pc-fenxiangshouyilaiyuanqiehuan",
            content: '"\\e9f8"',
            label: '分享－收益来源切换"'
        }, {
            text: "",
            value: "pc-ant-check-circle",
            content: '"\\e77d"',
            label: "<美>支票；制止，抑制；检验，核对"
        }, {
            text: "",
            value: "pc-ant-CI",
            content: '"\\e77e"',
            label: "此地"
        }, {
            text: "",
            value: "pc-Dollar",
            content: '"\\e77f"',
            label: "美元"
        }, {
            text: "",
            value: "pc-compass",
            content: '"\\e780"',
            label: " 指南针，罗盘；圆规"
        }, {
            text: "",
            value: "pc-close-circle",
            content: '"\\e781"',
            label: "结束"
        }, {
            text: "",
            value: "pc-frown",
            content: '"\\e782"',
            label: "皱眉，蹙额"
        }, {
            text: "",
            value: "pc-info-circle",
            content: '"\\e783"',
            label: "信息"
        }, {
            text: "",
            value: "pc-left-circle",
            content: '"\\e784"',
            label: "左边；左派；激进分子"
        }, {
            text: "",
            value: "pc-down-circle",
            content: '"\\e785"',
            label: "软毛，绒毛；[地质] 开阔的高地"
        }, {
            text: "",
            value: "pc-EURO",
            content: '"\\e786"',
            label: "欧元（欧盟的统一货币单位）"
        }, {
            text: "",
            value: "pc-copyright",
            content: '"\\e787"',
            label: "版权，著作权"
        }, {
            text: "",
            value: "pc-minus-circle",
            content: '"\\e788"',
            label: "负号，减号；不足；负数"
        }, {
            text: "",
            value: "pc-meh",
            content: '"\\e789"',
            label: "给水泵汽轮机控制系统；小汽机电液调节系统"
        }, {
            text: "",
            value: "pc-plus-circle",
            content: '"\\e78a"',
            label: "更"
        }, {
            text: "",
            value: "pc-play-circle",
            content: '"\\e78b"',
            label: "游戏；比赛；剧本"
        }, {
            text: "",
            value: "pc-question-circle",
            content: '"\\e78c"',
            label: " 问题，疑问；询问；疑问句"
        }, {
            text: "",
            value: "pc-Pound",
            content: '"\\e78d"',
            label: "英镑；重击，重击声；兽栏；拘留所"
        }, {
            text: "",
            value: "pc-right-circle",
            content: '"\\e78e"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-smile",
            content: '"\\e78f"',
            label: "微笑；笑容；喜色"
        }, {
            text: "",
            value: "pc-trademark",
            content: '"\\e790"',
            label: "商标"
        }, {
            text: "",
            value: "pc-time-circle",
            content: '"\\e791"',
            label: "时间；时代；次数；节拍；倍数"
        }, {
            text: "",
            value: "pc-timeout",
            content: '"\\e792"',
            label: "超时；暂时休息；工间休息"
        }, {
            text: "",
            value: "pc-earth1",
            content: '"\\e793"',
            label: "地球；地表，陆地；土地，土壤；尘事，俗事；兽穴"
        }, {
            text: "",
            value: "pc-YUAN",
            content: '"\\e794"',
            label: "元（中国货币单位）"
        }, {
            text: "",
            value: "pc-up-circle",
            content: '"\\e795"',
            label: "上升；繁荣"
        }, {
            text: "",
            value: "pc-warning-circle",
            content: '"\\e796"',
            label: "警告；预兆；预告"
        }, {
            text: "",
            value: "pc-check-circle-fill",
            content: '"\\e89e"',
            label: "<美>支票；制止，抑制；检验，核对"
        }, {
            text: "",
            value: "pc-left-circle-fill",
            content: '"\\e89f"',
            label: "左边；左派；激进分子"
        }, {
            text: "",
            value: "pc-down-circle-fill",
            content: '"\\e8a0"',
            label: "软毛，绒毛；[地质] 开阔的高地"
        }, {
            text: "",
            value: "pc-minus-circle-fill",
            content: '"\\e8a1"',
            label: "负号，减号；不足；负数"
        }, {
            text: "",
            value: "pc-close-circle-fill",
            content: '"\\e8a2"',
            label: "结束"
        }, {
            text: "",
            value: "pc-info-circle-fill",
            content: '"\\e8a3"',
            label: "信息"
        }, {
            text: "",
            value: "pc-up-circle-fill",
            content: '"\\e8a4"',
            label: "上升；繁荣"
        }, {
            text: "",
            value: "pc-right-circle-fill",
            content: '"\\e8a5"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-plus-circle-fill",
            content: '"\\e8a6"',
            label: "更"
        }, {
            text: "",
            value: "pc-question-circle-fill",
            content: '"\\e8a7"',
            label: "问题，疑问；询问；疑问句"
        }, {
            text: "",
            value: "pc-EURO-circle-fill",
            content: '"\\e8a8"',
            label: "欧元（欧盟的统一货币单位）"
        }, {
            text: "",
            value: "pc-frown-fill",
            content: '"\\e8a9"',
            label: "皱眉，蹙额"
        }, {
            text: "",
            value: "pc-copyright-circle-fil",
            content: '"\\e8aa"',
            label: "版权，著作权"
        }, {
            text: "",
            value: "pc-CI-circle-fill",
            content: '"\\e8ab"',
            label: "此地"
        }, {
            text: "",
            value: "pc-compass-fill",
            content: '"\\e8ac"',
            label: "指南针，罗盘；圆规"
        }, {
            text: "",
            value: "pc-Dollar-circle-fill",
            content: '"\\e8ad"',
            label: "美元"
        }, {
            text: "",
            value: "pc-poweroff-circle-fill",
            content: '"\\e8ae"',
            label: "定时关机；关闭电源"
        }, {
            text: "",
            value: "pc-meh-fill",
            content: '"\\e8af"',
            label: "给水泵汽轮机控制系统；小汽机电液调节系统"
        }, {
            text: "",
            value: "pc-play-circle-fill",
            content: '"\\e8b0"',
            label: "游戏；比赛；剧本"
        }, {
            text: "",
            value: "pc-Pound-circle-fill",
            content: '"\\e8b1"',
            label: "英镑；重击，重击声；兽栏；拘留所"
        }, {
            text: "",
            value: "pc-smile-fill",
            content: '"\\e8b2"',
            label: "微笑；笑容；喜色"
        }, {
            text: "",
            value: "pc-stop-fill",
            content: '"\\e8b3"',
            label: "停止；车站；障碍；逗留"
        }, {
            text: "",
            value: "pc-warning-circle-fill",
            content: '"\\e8b4"',
            label: "警告；预兆；预告"
        }, {
            text: "",
            value: "pc-time-circle-fill",
            content: '"\\e8b5"',
            label: "时间；时代；次数；节拍；倍数"
        }, {
            text: "",
            value: "pc-trademark-circle-fil",
            content: '"\\e8b6"',
            label: "商标 标志"
        }, {
            text: "",
            value: "pc-YUAN-circle-fill",
            content: '"\\e8b7"',
            label: "元（中国货币单位）"
        }]
    }, {
        text: "方形风格图标",
        value: "square",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-iconset0489",
            content: '"\\e9ec"',
            label: "方"
        }, {
            text: "",
            value: "pc-iconset0488",
            content: '"\\e9eb"',
            label: "方"
        }, {
            text: "",
            value: "pc-iconset0471",
            content: '"\\e9e3"',
            label: "华氏度"
        }, {
            text: "",
            value: "pc-iconset0470",
            content: '"\\e9e2"',
            label: "摄氏度"
        }, {
            text: "",
            value: "pc-iconset0381",
            content: '"\\e9d9"',
            label: "盒子"
        }, {
            text: "",
            value: "pc-iconset0168",
            content: '"\\e9d0"',
            label: "系列列表"
        }, {
            text: "",
            value: "pc-adjustbg",
            content: '"\\e9c3"',
            label: "adjust_bg"
        }, {
            text: "",
            value: "pc-snsshareqq",
            content: '"\\e9c1"',
            label: "sns-share-qq"
        }, {
            text: "",
            value: "pc-vimeo2",
            content: '"\\e9b9"',
            label: "vimeo2"
        }, {
            text: "",
            value: "pc-pinterest2",
            content: '"\\e9b8"',
            label: "pinterest2"
        }, {
            text: "",
            value: "pc-tuichu",
            content: '"\\e9ab"',
            label: "退出"
        }, {
            text: "",
            value: "pc-top",
            content: '"\\e9a7"',
            label: "上"
        }, {
            text: "",
            value: "pc-xing",
            content: '"\\e9a4"',
            label: "xing"
        }, {
            text: "",
            value: "pc-wordpress2",
            content: '"\\e9a3"',
            label: "wordpress2"
        }, {
            text: "",
            value: "pc-tumblr2",
            content: '"\\e9a2"',
            label: "tumblr2"
        }, {
            text: "",
            value: "pc-picassa2",
            content: '"\\e9a1"',
            label: "picassa2"
        }, {
            text: "",
            value: "pc-instagram1",
            content: '"\\e9a0"',
            label: "instagram"
        }, {
            text: "",
            value: "pc-feed3",
            content: '"\\e99f"',
            label: "feed3"
        }, {
            text: "",
            value: "pc-tingzhi",
            content: '"\\e99b"',
            label: "停止"
        }, {
            text: "",
            value: "pc-tupian1",
            content: '"\\e992"',
            label: "图片"
        }, {
            text: "",
            value: "pc-quanping",
            content: '"\\e991"',
            label: "全屏"
        }, {
            text: "",
            value: "pc-bangzhu-",
            content: '"\\eb70"',
            label: "帮助"
        }, {
            text: "",
            value: "pc-shezhi",
            content: '"\\eb6f"',
            label: "设置"
        }, {
            text: "",
            value: "pc-shangchuan",
            content: '"\\eb6e"',
            label: "上传"
        }, {
            text: "",
            value: "pc-xiazai",
            content: '"\\eb6d"',
            label: "下载"
        }, {
            text: "",
            value: "pc-duanxin-",
            content: '"\\eb6c"',
            label: "短信"
        }, {
            text: "",
            value: "pc-xiangji",
            content: '"\\eb6b"',
            label: "相机"
        }, {
            text: "",
            value: "pc-zhuti-",
            content: '"\\eb6a"',
            label: "主题"
        }, {
            text: "",
            value: "pc-shipin-",
            content: '"\\eb69"',
            label: "视频"
        }, {
            text: "",
            value: "pc-yinle-",
            content: '"\\eb68"',
            label: "音乐"
        }, {
            text: "",
            value: "pc-shizhong-",
            content: '"\\eb67"',
            label: "时间"
        }, {
            text: "",
            value: "pc-xiangce-",
            content: '"\\eb66"',
            label: "相册"
        }, {
            text: "",
            value: "pc-yingyongshichang-",
            content: '"\\eb65"',
            label: "应用市场"
        }, {
            text: "",
            value: "pc-chengyuanjituanduiguanli",
            content: '"\\eb0d"',
            label: "成员及团队管理"
        }, {
            text: "",
            value: "pc-close-square",
            content: '"\\e7ac"',
            label: " 结束"
        }, {
            text: "",
            value: "pc-down-square",
            content: '"\\e7ad"',
            label: "软毛，绒毛；[地质] 开阔的高地"
        }, {
            text: "",
            value: "pc-layout",
            content: '"\\e7ae"',
            label: "布局；设计；安排；陈列"
        }, {
            text: "",
            value: "pc-left-square",
            content: '"\\e7af"',
            label: "左边；左派；激进分子"
        }, {
            text: "",
            value: "pc-play-square",
            content: '"\\e7b0"',
            label: "游戏；比赛；剧本"
        }, {
            text: "",
            value: "pc-control",
            content: '"\\e7b1"',
            label: "控制；管理；抑制；操纵装置"
        }, {
            text: "",
            value: "pc-codelibrary",
            content: '"\\e7b2"',
            label: "代码链接库"
        }, {
            text: "",
            value: "pc-detail",
            content: '"\\e7b3"',
            label: "细节，详情"
        }, {
            text: "",
            value: "pc-minus-square",
            content: '"\\e7b4"',
            label: "负号，减号；不足；负数"
        }, {
            text: "",
            value: "pc-plus-square",
            content: '"\\e7b5"',
            label: "更"
        }, {
            text: "",
            value: "pc-right-square",
            content: '"\\e7b6"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-project",
            content: '"\\e7b7"',
            label: "工程；计划；事业"
        }, {
            text: "",
            value: "pc-wallet",
            content: '"\\e7b8"',
            label: "钱包，皮夹"
        }, {
            text: "",
            value: "pc-up-square",
            content: '"\\e7b9"',
            label: "上升；繁荣"
        }, {
            text: "",
            value: "pc-calculator",
            content: '"\\e7ba"',
            label: "计算器；计算者"
        }, {
            text: "",
            value: "pc-interation",
            content: '"\\e7bb"',
            label: "交互图标，交互影响"
        }, {
            text: "",
            value: "pc-check-square",
            content: '"\\e7bc"',
            label: "<美>支票；制止，抑制；检验，核对"
        }, {
            text: "",
            value: "pc-check-square-fill",
            content: '"\\e8bc"',
            label: "<美>支票；制止，抑制；检验，核对"
        }, {
            text: "",
            value: "pc-down-square-fill",
            content: '"\\e8bd"',
            label: "软毛，绒毛；[地质] 开阔的高地"
        }, {
            text: "",
            value: "pc-minus-square-fill",
            content: '"\\e8be"',
            label: "负号，减号；不足；负数"
        }, {
            text: "",
            value: "pc-close-square-fill",
            content: '"\\e8bf"',
            label: "结束"
        }, {
            text: "",
            value: "pc-codelibrary-fill",
            content: '"\\e8c0"',
            label: "代码链接库"
        }, {
            text: "",
            value: "pc-left-square-fill",
            content: '"\\e8c1"',
            label: "左边；左派；激进分子"
        }, {
            text: "",
            value: "pc-play-square-fill",
            content: '"\\e8c2"',
            label: "游戏；比赛；剧本"
        }, {
            text: "",
            value: "pc-up-square-fill",
            content: '"\\e8c3"',
            label: "上升；繁荣"
        }, {
            text: "",
            value: "pc-right-square-fill",
            content: '"\\e8c4"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-plus-square-fill",
            content: '"\\e8c5"',
            label: "更"
        }, {
            text: "",
            value: "pc-calculator-fill",
            content: '"\\e8c9"',
            label: "计算器；计算者"
        }, {
            text: "",
            value: "pc-interation-fill",
            content: '"\\e8ca"',
            label: "交互图标，交互影响"
        }, {
            text: "",
            value: "pc-project-fill",
            content: '"\\e8cb"',
            label: "工程；计划；事业"
        }, {
            text: "",
            value: "pc-detail-fill",
            content: '"\\e8cc"',
            label: "细节，详情"
        }, {
            text: "",
            value: "pc-wallet-fill",
            content: '"\\e8ce"',
            label: "钱包，皮夹"
        }, {
            text: "",
            value: "pc-control-fill",
            content: '"\\e8cf"',
            label: "控制；管理；抑制；操纵装置"
        }]
    }, {
        text: "箭头风格图标",
        value: "arrow",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-huilaiback431",
            content: '"\\e74a"',
            label: "回来_back"
        }, {
            text: "",
            value: "pc-xiazaidownload144",
            content: '"\\e728"',
            label: "下载_download"
        }, {
            text: "",
            value: "pc-shideright145",
            content: '"\\e6dc"',
            label: "是的_right145"
        }, {
            text: "",
            value: "pc-qilaiup106",
            content: '"\\e6a7"',
            label: "起来_up106"
        }, {
            text: "",
            value: "pc-07jiantouxiangzuofill",
            content: '"\\e691"',
            label: "07_箭头_向左_fill"
        }, {
            text: "",
            value: "pc-07jiantouxiangyoufill",
            content: '"\\e690"',
            label: "07_箭头_向右_fill"
        }, {
            text: "",
            value: "pc-07jiantouxiangxiafill",
            content: '"\\e68f"',
            label: "07_箭头_向下_fill"
        }, {
            text: "",
            value: "pc-07jiantouxiangshangfill",
            content: '"\\e68e"',
            label: "07_箭头_向上_fill"
        }, {
            text: "",
            value: "pc-iconset0491",
            content: '"\\e9ee"',
            label: "向上"
        }, {
            text: "",
            value: "pc-iconset0490",
            content: '"\\e9ed"',
            label: "向下"
        }, {
            text: "",
            value: "pc-iconset0487",
            content: '"\\e9ea"',
            label: "向上"
        }, {
            text: "",
            value: "pc-iconset0486",
            content: '"\\e9e9"',
            label: "暂停"
        }, {
            text: "",
            value: "pc-iconset0434",
            content: '"\\e9e0"',
            label: "向右"
        }, {
            text: "",
            value: "pc-iconset0433",
            content: '"\\e9df"',
            label: "向左"
        }, {
            text: "",
            value: "pc-iconset0432",
            content: '"\\e9de"',
            label: "向上"
        }, {
            text: "",
            value: "pc-iconset0431",
            content: '"\\e9dd"',
            label: "向下"
        }, {
            text: "",
            value: "pc-iconset0425",
            content: '"\\e9dc"',
            label: "下载"
        }, {
            text: "",
            value: "pc-kuaijin1",
            content: '"\\e99d"',
            label: "下一首"
        }, {
            text: "",
            value: "pc-shangyishou",
            content: '"\\e99c"',
            label: "上一首"
        }, {
            text: "",
            value: "pc-zhankaikuaitui",
            content: '"\\e999"',
            label: "展开快退"
        }, {
            text: "",
            value: "pc-shouqikuaijin",
            content: '"\\e998"',
            label: "收起快进"
        }, {
            text: "",
            value: "pc-huhuan",
            content: '"\\e997"',
            label: "互换"
        }, {
            text: "",
            value: "pc-jiantou_xiangyou_o",
            content: '"\\eb94"',
            label: "箭头_向右"
        }, {
            text: "",
            value: "pc-jiantou_xiangzuo_o",
            content: '"\\eb92"',
            label: "箭头_向左"
        }, {
            text: "",
            value: "pc-jiantou_xiangxia_o",
            content: '"\\eb91"',
            label: "箭头_向下"
        }, {
            text: "",
            value: "pc-jiantou_xiangshang_o",
            content: '"\\eb90"',
            label: "箭头_向上"
        }, {
            text: "",
            value: "pc-jiantou_liebiaozhankai",
            content: '"\\eb4f"',
            label: "箭头_列表展开"
        }, {
            text: "",
            value: "pc-jiantou_liebiaoxiangzuo",
            content: '"\\eb4e"',
            label: "箭头_列表向左"
        }, {
            text: "",
            value: "pc-jiantou_liebiaoshouqi",
            content: '"\\eb4d"',
            label: "箭头_列表收起"
        }, {
            text: "",
            value: "pc-jiantou_liebiaoxiangyou",
            content: '"\\eb4c"',
            label: "箭头_列表向右"
        }, {
            text: "",
            value: "pc-changjiantou-zuo",
            content: '"\\eb4b"',
            label: "长箭头-左"
        }, {
            text: "",
            value: "pc-changjiantou-xia",
            content: '"\\eb49"',
            label: "长箭头-下"
        }, {
            text: "",
            value: "pc-changjiantou-you",
            content: '"\\eb48"',
            label: "长箭头-右"
        }, {
            text: "",
            value: "pc-changjiantou-shang",
            content: '"\\eb47"',
            label: "长箭头-上"
        }, {
            text: "",
            value: "pc-kuaitui",
            content: '"\\eb3d"',
            label: "快退"
        }, {
            text: "",
            value: "pc-kuaijin",
            content: '"\\eb3c"',
            label: "快进"
        }, {
            text: "",
            value: "pc-jiantou-zuo",
            content: '"\\eb2d"',
            label: "箭头2-左"
        }, {
            text: "",
            value: "pc-jiantou-shang",
            content: '"\\eb2c"',
            label: "箭头2-上"
        }, {
            text: "",
            value: "pc-jiantou-you",
            content: '"\\eb2b"',
            label: "箭头2-右"
        }, {
            text: "",
            value: "pc-jiantou-xia",
            content: '"\\eb2a"',
            label: "箭头2-下"
        }, {
            text: "",
            value: "pc-arrows_square_upright",
            content: '"\\ea94"',
            label: "右上角"
        }, {
            text: "",
            value: "pc-arrows_square_upleft",
            content: '"\\ea93"',
            label: "左上角"
        }, {
            text: "",
            value: "pc-arrows_square_up",
            content: '"\\ea92"',
            label: "正上角"
        }, {
            text: "",
            value: "pc-arrows_square_right",
            content: '"\\ea91"',
            label: "正右角"
        }, {
            text: "",
            value: "pc-arrows_square_minus",
            content: '"\\ea90"',
            label: "减号"
        }, {
            text: "",
            value: "pc-arrows_square_plus",
            content: '"\\ea8f"',
            label: "加号"
        }, {
            text: "",
            value: "pc-arrows_square_remove",
            content: '"\\ea8e"',
            label: "乘号"
        }, {
            text: "",
            value: "pc-arrows_square_downright",
            content: '"\\ea8d"',
            label: "右下角"
        }, {
            text: "",
            value: "pc-arrows_square_left",
            content: '"\\ea8c"',
            label: "正左角"
        }, {
            text: "",
            value: "pc-arrows_square_downleft",
            content: '"\\ea8b"',
            label: "左下角"
        }, {
            text: "",
            value: "pc-arrows_square_down",
            content: '"\\ea8a"',
            label: "正下角"
        }, {
            text: "",
            value: "pc-arrows_keyboard_up",
            content: '"\\ea89"',
            label: "上三角形"
        }, {
            text: "",
            value: "pc-arrows_keyboard_tab",
            content: '"\\ea88"',
            label: "向右"
        }, {
            text: "",
            value: "pc-arrows_keyboard_shift",
            content: '"\\ea87"',
            label: "键盘向上"
        }, {
            text: "",
            value: "pc-arrows_keyboard_right",
            content: '"\\ea86"',
            label: "键盘右"
        }, {
            text: "",
            value: "pc-arrows_keyboard_return",
            content: '"\\ea85"',
            label: "返回"
        }, {
            text: "",
            value: "pc-arrows_keyboard_cmd-",
            content: '"\\ea84"',
            label: "功能键"
        }, {
            text: "",
            value: "pc-arrows_keyboard_delete",
            content: '"\\ea83"',
            label: "删除键"
        }, {
            text: "",
            value: "pc-arrows_keyboard_left",
            content: '"\\ea82"',
            label: "键盘左"
        }, {
            text: "",
            value: "pc-arrows_keyboard_down-",
            content: '"\\ea81"',
            label: "键盘下"
        }, {
            text: "",
            value: "pc-arrows_keyboard_alt",
            content: '"\\ea80"',
            label: "键盘alt键"
        }, {
            text: "",
            value: "pc-jiantou34",
            content: '"\\ea26"',
            label: "右箭头"
        }, {
            text: "",
            value: "pc-jiantou33",
            content: '"\\ea25"',
            label: "左箭头"
        }, {
            text: "",
            value: "pc-jiantou32",
            content: '"\\ea24"',
            label: "下箭头"
        }, {
            text: "",
            value: "pc-jiantou31",
            content: '"\\ea32"',
            label: "上箭头"
        }, {
            text: "",
            value: "pc-xiala",
            content: '"\\e9fd"',
            label: "下拉"
        }, {
            text: "",
            value: "pc-shrink",
            content: '"\\e855"',
            label: "收缩；畏缩；<俚>精神病学家"
        }, {
            text: "",
            value: "pc-arrawsalt",
            content: '"\\e856"',
            label: ""
        }, {
            text: "",
            value: "pc-verticalright",
            content: '"\\e857"',
            label: ""
        }, {
            text: "",
            value: "pc-verticalleft",
            content: '"\\e858"',
            label: ""
        }, {
            text: "",
            value: "pc-right",
            content: '"\\e859"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-left",
            content: '"\\e85a"',
            label: "左边；左派；激进分子"
        }, {
            text: "",
            value: "pc-up1",
            content: '"\\e85b"',
            label: "上升；繁荣"
        }, {
            text: "",
            value: "pc-down1",
            content: '"\\e85c"',
            label: "软毛，绒毛；[地质] 开阔的高地"
        }, {
            text: "",
            value: "pc-fullscreen",
            content: '"\\e85d"',
            label: "全屏幕版；全画面"
        }, {
            text: "",
            value: "pc-fullscreen-exit",
            content: '"\\e85e"',
            label: "出口，通道；退场"
        }, {
            text: "",
            value: "pc-doubleleft",
            content: '"\\e85f"',
            label: ""
        }, {
            text: "",
            value: "pc-doubleright",
            content: '"\\e860"',
            label: ""
        }, {
            text: "",
            value: "pc-arrowright",
            content: '"\\e861"',
            label: ""
        }, {
            text: "",
            value: "pc-arrowup1",
            content: '"\\e862"',
            label: "箭头向上"
        }, {
            text: "",
            value: "pc-arrowleft",
            content: '"\\e863"',
            label: ""
        }, {
            text: "",
            value: "pc-arrowdown",
            content: '"\\e864"',
            label: "箭头向下"
        }, {
            text: "",
            value: "pc-upload",
            content: '"\\e865"',
            label: "上传"
        }, {
            text: "",
            value: "pc-column-width",
            content: '"\\e888"',
            label: "宽度；广度"
        }, {
            text: "",
            value: "pc-colum-height",
            content: '"\\e866"',
            label: "高地；高度；身高；顶点"
        }, {
            text: "",
            value: "pc-vertical-align-botto",
            content: '"\\e867"',
            label: " (Botto)人名；(法、西、意、葡)博托"
        }, {
            text: "",
            value: "pc-vertical-align-middl",
            content: '"\\e868"',
            label: "中间"
        }, {
            text: "",
            value: "pc-totop",
            content: '"\\e869"',
            label: ""
        }, {
            text: "",
            value: "pc-vertical-align-top",
            content: '"\\e86a"',
            label: "顶部，顶端；上部；首席；陀螺"
        }, {
            text: "",
            value: "pc-download",
            content: '"\\e86b"',
            label: "[计] 下载"
        }, {
            text: "",
            value: "pc-sort-descending",
            content: '"\\e86c"',
            label: "递减；下行"
        }, {
            text: "",
            value: "pc-sort-ascending",
            content: '"\\e86d"',
            label: "上升；获得（ascend的ing形式）；追溯"
        }, {
            text: "",
            value: "pc-fall",
            content: '"\\e86e"',
            label: "下降；秋天；瀑布"
        }, {
            text: "",
            value: "pc-swap",
            content: '"\\e86f"',
            label: "交换；交换之物"
        }, {
            text: "",
            value: "pc-stock",
            content: '"\\e870"',
            label: "股份，股票；库存；血统；树干；家畜"
        }, {
            text: "",
            value: "pc-rise",
            content: '"\\e871"',
            label: "上升；高地；增加；出现"
        }, {
            text: "",
            value: "pc-enter",
            content: '"\\e88d"',
            label: "[计] 输入；回车"
        }, {
            text: "",
            value: "pc-rollback",
            content: '"\\e892"',
            label: "卷回；反转；（物价、利率等的）回降"
        }, {
            text: "",
            value: "pc-drag1",
            content: '"\\e898"',
            label: " 拖；拖累"
        }]
    }, {
        text: "对齐风格图标",
        value: "align",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-indent",
            content: '"\\e872"',
            label: "缩进；订货单；凹痕；契约"
        }, {
            text: "",
            value: "pc-outdent",
            content: '"\\e873"',
            label: "减少缩进；凸排"
        }, {
            text: "",
            value: "pc-menu1",
            content: '"\\e874"',
            label: "菜单"
        }, {
            text: "",
            value: "pc-unorderedlist",
            content: '"\\e875"',
            label: "插入"
        }, {
            text: "",
            value: "pc-orderedlist",
            content: '"\\e876"',
            label: "插入"
        }, {
            text: "",
            value: "pc-align-right",
            content: '"\\e877"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-align-center",
            content: '"\\e878"',
            label: "中心，中央；中锋；中心点"
        }, {
            text: "",
            value: "pc-align-left",
            content: '"\\e879"',
            label: "左边；左派；激进分子"
        }, {
            text: "",
            value: "pc-pic-center",
            content: '"\\e87a"',
            label: "中心，中央；中锋；中心点"
        }, {
            text: "",
            value: "pc-pic-right",
            content: '"\\e87b"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-pic-left",
            content: '"\\e87c"',
            label: "左边；左派；激进分子"
        }]
    }, {
        text: "边框风格图标",
        value: "border",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-border",
            content: '"\\e7bd"',
            label: "边境；边界；国界"
        }, {
            text: "",
            value: "pc-border-outer",
            content: '"\\e7be"',
            label: "环外命中"
        }, {
            text: "",
            value: "pc-border-top",
            content: '"\\e7bf"',
            label: "顶部，顶端；上部；首席；陀螺"
        }, {
            text: "",
            value: "pc-border-bottom",
            content: '"\\e7c0"',
            label: "底部；末端；臀部；尽头adj.底部的 "
        }, {
            text: "",
            value: "pc-border-left",
            content: '"\\e7c1"',
            label: "左边；左派；激进分子"
        }, {
            text: "",
            value: "pc-border-right",
            content: '"\\e7c2"',
            label: "正确；右边；正义"
        }, {
            text: "",
            value: "pc-border-inner",
            content: '"\\e7c3"',
            label: "内部"
        }, {
            text: "",
            value: "pc-border-verticle",
            content: '"\\e7c4"',
            label: "立式"
        }, {
            text: "",
            value: "pc-border-horizontal",
            content: '"\\e7c5"',
            label: "水平线，水平面；水平位置"
        }, {
            text: "",
            value: "pc-radius-bottomleft",
            content: '"\\e7c6"',
            label: "屏幕左下"
        }, {
            text: "",
            value: "pc-radius-bottomright",
            content: '"\\e7c7"',
            label: "右下方的"
        }, {
            text: "",
            value: "pc-radius-upleft",
            content: '"\\e7c8"',
            label: "左上"
        }, {
            text: "",
            value: "pc-radius-upright",
            content: '"\\e7c9"',
            label: "垂直；竖立"
        }, {
            text: "",
            value: "pc-radius-setting",
            content: '"\\e7ca"',
            label: "环境；安装；布置；[天] 沉落"
        }]
    }, {
        text: "彩色风格图标",
        value: "color",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-zhanghaozhuxiao",
            content: '"\\eb63"',
            label: "账号注销"
        }, {
            text: "",
            value: "pc-shujubeifen",
            content: '"\\eb62"',
            label: "数据备份"
        }, {
            text: "",
            value: "pc-tongxunlu",
            content: '"\\eb61"',
            label: "通讯录"
        }, {
            text: "",
            value: "pc-shenqingfahuo",
            content: '"\\eb60"',
            label: "申请发货"
        }, {
            text: "",
            value: "pc-qianpi",
            content: '"\\eb5f"',
            label: "签批"
        }, {
            text: "",
            value: "pc-kehu",
            content: '"\\eb5e"',
            label: "客户"
        }, {
            text: "",
            value: "pc-daiban",
            content: '"\\eb5d"',
            label: "待办"
        }, {
            text: "",
            value: "pc-weixin6",
            content: '"\\eb5c"',
            label: "微信"
        }, {
            text: "",
            value: "pc-tongyi",
            content: '"\\eb5b"',
            label: "同意"
        }, {
            text: "",
            value: "pc-jujue",
            content: '"\\eb5a"',
            label: "拒绝"
        }, {
            text: "",
            value: "pc-zhuanshen",
            content: '"\\eb59"',
            label: "转审"
        }, {
            text: "",
            value: "pc-gongsi",
            content: '"\\eb58"',
            label: "公司"
        }, {
            text: "",
            value: "pc-dianhua",
            content: '"\\eb57"',
            label: "电话"
        }, {
            text: "",
            value: "pc-gerenxinxi",
            content: '"\\eb56"',
            label: "个人信息"
        }, {
            text: "",
            value: "pc-zhuanzheng",
            content: '"\\eb55"',
            label: "转正"
        }, {
            text: "",
            value: "pc-kaoqintiaozheng",
            content: '"\\eb54"',
            label: "考勤调整"
        }, {
            text: "",
            value: "pc-buqia",
            content: '"\\eb53"',
            label: '"补卡'
        }, {
            text: "",
            value: "pc-baoxiao",
            content: '"\\eb52"',
            label: "报销"
        }, {
            text: "",
            value: "pc-waichu",
            content: '"\\eb51"',
            label: "外出"
        }, {
            text: "",
            value: "pc-chucha",
            content: '"\\eb50"',
            label: "出差"
        }, {
            text: "",
            value: "pc-icon_xinlang-chunselogo",
            content: '"\\eb28"',
            label: "新浪"
        }, {
            text: "",
            value: "pc-icon_weixin-logo",
            content: '"\\eb27"',
            label: "微信"
        }, {
            text: "",
            value: "pc-icon_baidulogo",
            content: '"\\eb26"',
            label: "百度"
        }, {
            text: "",
            value: "pc-icon_QQ-chunselogo",
            content: '"\\eb25"',
            label: "QQ；qq"
        }, {
            text: "",
            value: "pc-back",
            content: '"\\e670"',
            label: "返回"
        }, {
            text: "",
            value: "pc-zhaopian",
            content: '"\\eb23"',
            label: "照片"
        }, {
            text: "",
            value: "pc-youxiang",
            content: '"\\eb22"',
            label: "邮箱"
        }, {
            text: "",
            value: "pc-yunxu",
            content: '"\\eb21"',
            label: "允许"
        }, {
            text: "",
            value: "pc-yinsi",
            content: '"\\eb20"',
            label: "隐私"
        }, {
            text: "",
            value: "pc-xinwennews",
            content: '"\\e682"',
            label: "新闻news"
        }, {
            text: "",
            value: "pc-wuraomoshi",
            content: '"\\e681"',
            label: "勿扰模式"
        }, {
            text: "",
            value: "pc-wuxianjuyuwang",
            content: '"\\e680"',
            label: "无限局域网"
        }, {
            text: "",
            value: "pc-tianqi",
            content: '"\\e67f"',
            label: "天气"
        }, {
            text: "",
            value: "pc-tongzhi",
            content: '"\\e67e"',
            label: "通知"
        }, {
            text: "",
            value: "pc-tishi",
            content: '"\\e67b"',
            label: "提示"
        }, {
            text: "",
            value: "pc-shipin",
            content: '"\\e67a"',
            label: "视频"
        }, {
            text: "",
            value: "pc-redian",
            content: '"\\e679"',
            label: "热点"
        }, {
            text: "",
            value: "pc-lanya",
            content: '"\\e678"',
            label: "蓝牙"
        }, {
            text: "",
            value: "pc-ditu",
            content: '"\\e676"',
            label: "地图"
        }, {
            text: "",
            value: "pc-dianhua1",
            content: '"\\e675"',
            label: "电话"
        }, {
            text: "",
            value: "pc-duanxin",
            content: '"\\e664"',
            label: "短信"
        }, {
            text: "",
            value: "pc-iTunesStore",
            content: '"\\e673"',
            label: "iTunesStore星星；五角星"
        }, {
            text: "",
            value: "pc-Facetime",
            content: '"\\e672"',
            label: "Facetime"
        }, {
            text: "",
            value: "pc-AppleBook",
            content: '"\\e671"',
            label: "AppleBook"
        }, {
            text: "",
            value: "pc-AppStore",
            content: '"\\e66f"',
            label: "AppStore"
        }, {
            text: "",
            value: "pc-iMoviedianying",
            content: '"\\e668"',
            label: "iMovie电影"
        }, {
            text: "",
            value: "pc-line2",
            content: '"\\e65d"',
            label: "line"
        }, {
            text: "",
            value: "pc-skype11",
            content: '"\\e625"',
            label: "skype"
        }, {
            text: "",
            value: "pc-mixi",
            content: '"\\e658"',
            label: "mixi"
        }, {
            text: "",
            value: "pc-vk",
            content: '"\\e654"',
            label: "vk"
        }, {
            text: "",
            value: "pc-tumblr",
            content: '"\\e653"',
            label: "tumblr"
        }, {
            text: "",
            value: "pc-google1",
            content: '"\\e623"',
            label: "google"
        }, {
            text: "",
            value: "pc-linkedin11",
            content: '"\\e652"',
            label: "linkedin"
        }, {
            text: "",
            value: "pc-pinterest",
            content: '"\\e622"',
            label: "pinterest"
        }, {
            text: "",
            value: "pc-alipay1",
            content: '"\\e649"',
            label: "alipay"
        }, {
            text: "",
            value: "pc-Facebook",
            content: '"\\e645"',
            label: "Facebook"
        }, {
            text: "",
            value: "pc-momo",
            content: '"\\e641"',
            label: "momo"
        }, {
            text: "",
            value: "pc-renren1",
            content: '"\\e640"',
            label: "renren"
        }, {
            text: "",
            value: "pc-ins",
            content: '"\\e621"',
            label: "ins"
        }, {
            text: "",
            value: "pc-csdn",
            content: '"\\e620"',
            label: "csdn"
        }, {
            text: "",
            value: "pc-github1",
            content: '"\\e61d"',
            label: "github"
        }, {
            text: "",
            value: "pc-wechat-friend",
            content: '"\\e61c"',
            label: "wechat-friend"
        }, {
            text: "",
            value: "pc-twitter2",
            content: '"\\e61b"',
            label: "twitter"
        }, {
            text: "",
            value: "pc-Youtube1",
            content: '"\\eadb"',
            label: "Youtube"
        }, {
            text: "",
            value: "pc-jingdongshangchengpingtai",
            content: '"\\ead6"',
            label: "京东商城平台"
        }, {
            text: "",
            value: "pc-jingdong",
            content: '"\\eac7"',
            label: "京东"
        }, {
            text: "",
            value: "pc-tmall",
            content: '"\\e61a"',
            label: "tmall"
        }, {
            text: "",
            value: "pc-ding",
            content: '"\\e619"',
            label: "ding"
        }, {
            text: "",
            value: "pc-china-",
            content: '"\\e660"',
            label: "中国地图"
        }, {
            text: "",
            value: "pc-QQ1",
            content: '"\\e73e"',
            label: "QQ"
        }, {
            text: "",
            value: "pc-wodezijin",
            content: '"\\e743"',
            label: "我的资金"
        }, {
            text: "",
            value: "pc-weibo3",
            content: '"\\e73d"',
            label: "微博"
        }, {
            text: "",
            value: "pc-weixin",
            content: '"\\e73c"',
            label: "微信"
        }, {
            text: "",
            value: "pc-kongjian1",
            content: '"\\e73b"',
            label: "空间"
        }, {
            text: "",
            value: "pc-pengyouquan",
            content: '"\\e740"',
            label: "朋友圈"
        }, {
            text: "",
            value: "pc-huiyuanjulebu",
            content: '"\\ea60"',
            label: "会员俱乐部"
        }, {
            text: "",
            value: "pc-fengxianbaozhangjihua",
            content: '"\\e73a"',
            label: "风险保障计划"
        }, {
            text: "",
            value: "pc-fenqishangcheng",
            content: '"\\e739"',
            label: "分期商城"
        }, {
            text: "",
            value: "pc-dingyuehao",
            content: '"\\e738"',
            label: "订阅号"
        }, {
            text: "",
            value: "pc-chujiejihua",
            content: '"\\e773"',
            label: "出借计划"
        }, {
            text: "",
            value: "pc-bangzhuzhongxin",
            content: '"\\e736"',
            label: "帮助中心"
        }, {
            text: "",
            value: "pc-anquanbaozhang",
            content: '"\\e735"',
            label: "安全保障"
        }, {
            text: "",
            value: "pc-youku",
            content: '"\\e66c"',
            label: "icon_youku；优酷"
        }, {
            text: "",
            value: "pc-email",
            content: '"\\e66b"',
            label: "邮件"
        }, {
            text: "",
            value: "pc-renren",
            content: '"\\e66a"',
            label: "人人网"
        }, {
            text: "",
            value: "pc-douban",
            content: '"\\e669"',
            label: "douban"
        }, {
            text: "",
            value: "pc-zhifubao",
            content: '"\\e667"',
            label: "支付宝"
        }, {
            text: "",
            value: "pc-QQ_weibo",
            content: '"\\e666"',
            label: "微博"
        }, {
            text: "",
            value: "pc-linkedin1",
            content: '"\\e665"',
            label: "icon_linkedin"
        }, {
            text: "",
            value: "pc-yamaxun",
            content: '"\\e663"',
            label: "icon_yamaxun"
        }, {
            text: "",
            value: "pc-anzhuo",
            content: '"\\e65e"',
            label: "安卓"
        }, {
            text: "",
            value: "pc-Yahoo",
            content: '"\\e65b"',
            label: "icon_Yahoo"
        }, {
            text: "",
            value: "pc-facebook1",
            content: '"\\e65a"',
            label: "icon_facebook"
        }, {
            text: "",
            value: "pc-twitter12",
            content: '"\\e659"',
            label: "icon_twitter"
        }, {
            text: "",
            value: "pc-taobao1",
            content: '"\\e618"',
            label: "taobao；淘宝"
        }, {
            text: "",
            value: "pc-zhihu1",
            content: '"\\e617"',
            label: "zhihu"
        }, {
            text: "",
            value: "pc-social-pinterest",
            content: '"\\e616"',
            label: "pinterest"
        }, {
            text: "",
            value: "pc-social-instagram",
            content: '"\\e66e"',
            label: "instagram"
        }, {
            text: "",
            value: "pc-social-linkedin",
            content: '"\\e66d"',
            label: "linkedin"
        }, {
            text: "",
            value: "pc-social-fb-simple",
            content: '"\\e650"',
            label: "simple"
        }, {
            text: "",
            value: "pc-github",
            content: '"\\e615"',
            label: "github"
        }, {
            text: "",
            value: "pc-twitter1",
            content: '"\\e614"',
            label: "twitter"
        }, {
            text: "",
            value: "pc-skype1",
            content: '"\\e613"',
            label: "skype"
        }, {
            text: "",
            value: "pc-whatsapp",
            content: '"\\e60f"',
            label: "whatsapp"
        }, {
            text: "",
            value: "pc-baidu",
            content: '"\\e60c"',
            label: "baidu;百度"
        }, {
            text: "",
            value: "pc-dribbble1",
            content: '"\\e60b"',
            label: "dribbble"
        }, {
            text: "",
            value: "pc-instagram2",
            content: '"\\e608"',
            label: "instagram"
        }, {
            text: "",
            value: "pc-youtube",
            content: '"\\e605"',
            label: "youtube"
        }, {
            text: "",
            value: "pc-google_plus",
            content: '"\\e604"',
            label: "google_plus"
        }]
    }, {
        text: "国旗风格图标",
        value: "flaga",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-maqidun",
            content: '"\\e662"',
            label: "马其顿"
        }, {
            text: "",
            value: "pc-luomaniya",
            content: '"\\e661"',
            label: "罗马尼亚"
        }, {
            text: "",
            value: "pc-bilishi",
            content: '"\\e65f"',
            label: "比利时"
        }, {
            text: "",
            value: "pc-lusenbao",
            content: '"\\e651"',
            label: "卢森堡"
        }, {
            text: "",
            value: "pc-aierlan",
            content: '"\\e64e"',
            label: "爱尔兰"
        }, {
            text: "",
            value: "pc-xila",
            content: '"\\e64c"',
            label: "希腊"
        }, {
            text: "",
            value: "pc-maerdaifu",
            content: '"\\e64b"',
            label: "马尔代夫"
        }, {
            text: "",
            value: "pc-bajisitan",
            content: '"\\e648"',
            label: "巴基斯坦"
        }, {
            text: "",
            value: "pc-mengjialaguo",
            content: '"\\e646"',
            label: "孟加拉国"
        }, {
            text: "",
            value: "pc-niboer",
            content: '"\\e643"',
            label: "尼泊尔"
        }, {
            text: "",
            value: "pc-feilvbin",
            content: '"\\e642"',
            label: "菲律宾"
        }, {
            text: "",
            value: "pc-meiguo1",
            content: '"\\e63f"',
            label: "美国"
        }, {
            text: "",
            value: "pc-yuenan",
            content: '"\\e63e"',
            label: "越南"
        }, {
            text: "",
            value: "pc-yingguo1",
            content: '"\\e63b"',
            label: "英国"
        }, {
            text: "",
            value: "pc-xinjiapo",
            content: '"\\e63a"',
            label: "新加坡"
        }, {
            text: "",
            value: "pc-yindunixiya",
            content: '"\\e639"',
            label: "印度尼西亚"
        }, {
            text: "",
            value: "pc-tuerqi",
            content: '"\\e638"',
            label: "土耳其"
        }, {
            text: "",
            value: "pc-taiguo",
            content: '"\\e637"',
            label: "泰国"
        }, {
            text: "",
            value: "pc-riben1",
            content: '"\\e636"',
            label: "日本"
        }, {
            text: "",
            value: "pc-nuowei",
            content: '"\\e635"',
            label: "挪威"
        }, {
            text: "",
            value: "pc-hanguo1",
            content: '"\\e634"',
            label: "韩国"
        }, {
            text: "",
            value: "pc-menggu",
            content: '"\\e633"',
            label: "蒙古"
        }, {
            text: "",
            value: "pc-malaixiya",
            content: '"\\e632"',
            label: "马来西亚"
        }, {
            text: "",
            value: "pc-fenlan",
            content: '"\\e631"',
            label: "芬兰"
        }, {
            text: "",
            value: "pc-jianada",
            content: '"\\e630"',
            label: "加拿大"
        }, {
            text: "",
            value: "pc-danmai",
            content: '"\\e62e"',
            label: "丹麦"
        }, {
            text: "",
            value: "pc-deguo1",
            content: '"\\e62d"',
            label: "德国"
        }, {
            text: "",
            value: "pc-zhaoxian",
            content: '"\\e62c"',
            label: "朝鲜"
        }, {
            text: "",
            value: "pc-faguo1",
            content: '"\\e628"',
            label: "法国"
        }, {
            text: "",
            value: "pc-eluosi1",
            content: '"\\e627"',
            label: "俄罗斯"
        }, {
            text: "",
            value: "pc-zhongguo1",
            content: '"\\e626"',
            label: "中国"
        }, {
            text: "",
            value: "pc-alabolianheqiuchangguo",
            content: '"\\e6de"',
            label: "阿拉伯联合酋长国"
        }, {
            text: "",
            value: "pc-wulagui",
            content: '"\\e6c8"',
            label: "乌拉圭"
        }, {
            text: "",
            value: "pc-agenting",
            content: '"\\e6c6"',
            label: "阿根廷"
        }, {
            text: "",
            value: "pc-bahama",
            content: '"\\e6c5"',
            label: "巴哈马"
        }, {
            text: "",
            value: "pc-babaduosi",
            content: '"\\e6c4"',
            label: "巴巴多斯"
        }, {
            text: "",
            value: "pc-antiguahebadabu",
            content: '"\\e6c3"',
            label: "安提瓜和巴达布"
        }, {
            text: "",
            value: "pc-zhili",
            content: '"\\e6c2"',
            label: "智利"
        }, {
            text: "",
            value: "pc-yamaijia",
            content: '"\\e6c1"',
            label: "牙买加"
        }, {
            text: "",
            value: "pc-sulinan",
            content: '"\\e6c0"',
            label: "苏里南"
        }, {
            text: "",
            value: "pc-tenilidaheduobage",
            content: '"\\e6be"',
            label: "特尼立达和多巴哥"
        }, {
            text: "",
            value: "pc-shengwensentehegelinnadingsi",
            content: '"\\e6bd"',
            label: "圣文森特和格林纳丁斯"
        }, {
            text: "",
            value: "pc-shengluxiya",
            content: '"\\e6bc"',
            label: "圣卢西亚"
        }, {
            text: "",
            value: "pc-shengjiciheniweisi",
            content: '"\\e6bb"',
            label: "圣基茨和尼维斯"
        }, {
            text: "",
            value: "pc-ejialagua",
            content: '"\\e6ba"',
            label: "厄加拉瓜"
        }, {
            text: "",
            value: "pc-hongdulasi",
            content: '"\\e6b8"',
            label: "洪都拉斯"
        }, {
            text: "",
            value: "pc-guiyana",
            content: '"\\e67b"',
            label: "圭亚那"
        }, {
            text: "",
            value: "pc-duominike",
            content: '"\\e6b6"',
            label: "多米尼克"
        }, {
            text: "",
            value: "pc-gelinnada",
            content: '"\\e6b5"',
            label: "格林纳达"
        }, {
            text: "",
            value: "pc-guba",
            content: '"\\e6b4"',
            label: "古巴"
        }, {
            text: "",
            value: "pc-gelunbiya",
            content: '"\\e6b3"',
            label: "哥伦比亚"
        }, {
            text: "",
            value: "pc-baxi",
            content: '"\\e6b2"',
            label: "巴西"
        }, {
            text: "",
            value: "pc-boliweiya",
            content: '"\\e6b1"',
            label: "玻利维亚"
        }]
    }, {
        text: "文件风格图标",
        value: "file",
        url: "",
        iconItems: [{
            text: "",
            value: "pc-zip",
            content: '"\\eb34"',
            label: "zip"
        }, {
            text: "",
            value: "pc-word",
            content: '"\\eb33"',
            label: "word"
        }, {
            text: "",
            value: "pc-txt",
            content: '"\\eb32"',
            label: "txt"
        }, {
            text: "",
            value: "pc-ppt",
            content: '"\\eb31"',
            label: "ppt"
        }, {
            text: "",
            value: "pc-pdf",
            content: '"\\eb30"',
            label: "pdf"
        }, {
            text: "",
            value: "pc-image1",
            content: '"\\eb2f"',
            label: "image"
        }, {
            text: "",
            value: "pc-Excel",
            content: '"\\eb2e"',
            label: "Excel"
        }, {
            text: "",
            value: "pc-filedone",
            content: '"\\e7dc"',
            label: ""
        }, {
            text: "",
            value: "pc-file-exception",
            content: '"\\e7de"',
            label: "例外；异议"
        }, {
            text: "",
            value: "pc-filesync",
            content: '"\\e7df"',
            label: ""
        }, {
            text: "",
            value: "pc-filesearch",
            content: '"\\e7e0"',
            label: ""
        }, {
            text: "",
            value: "pc-fileprotect",
            content: '"\\e7e2"',
            label: "打开软件"
        }, {
            text: "",
            value: "pc-file-add",
            content: '"\\e7e3"',
            label: "加法，加法运算"
        }, {
            text: "",
            value: "pc-file-excel",
            content: '"\\e7e4"',
            label: "电子表格"
        }, {
            text: "",
            value: "pc-file-exclamation",
            content: '"\\e7e5"',
            label: "感叹；惊叫；惊叹词"
        }, {
            text: "",
            value: "pc-file-pdf",
            content: '"\\e7e6"',
            label: "Adobe的可移植文档格式文件的扩展名"
        }, {
            text: "",
            value: "pc-file-image",
            content: '"\\e7e7"',
            label: " 影像；想象；肖像；偶像"
        }, {
            text: "",
            value: "pc-file-markdown",
            content: '"\\e7e8"',
            label: "标低价，[物价] 减价"
        }, {
            text: "",
            value: "pc-file-unknown",
            content: '"\\e7e9"',
            label: "未知数；未知的事物，默默无闻的人"
        }, {
            text: "",
            value: "pc-file-ppt",
            content: '"\\e7ea"',
            label: "微软演示文稿文件"
        }, {
            text: "",
            value: "pc-file-word",
            content: '"\\e7eb"',
            label: "[语] 单词；话语；消息；诺言；命令"
        }, {
            text: "",
            value: "pc-file",
            content: '"\\e7ec"',
            label: "文件；档案；文件夹；锉刀"
        }, {
            text: "",
            value: "pc-file-zip",
            content: '"\\e7ed"',
            label: "拉链；活力，精力；尖啸声，撕裂声；一种程序压缩的档案文件格式"
        }, {
            text: "",
            value: "pc-file-text",
            content: '"\\e7ee"',
            label: "[计] 文本；课文；主题"
        }, {
            text: "",
            value: "pc-file-copy",
            content: '"\\e7ef"',
            label: "副本；一册；摹仿"
        }, {
            text: "",
            value: "pc-snippets",
            content: '"\\e7f0"',
            label: "片段（snippet的复数形式）；小片"
        }, {
            text: "",
            value: "pc-audit",
            content: '"\\e7f1"',
            label: "审计"
        }, {
            text: "",
            value: "pc-diff",
            content: '"\\e7f2"',
            label: "扩散器（diffuser）；微分；差速器（differential）"
        }, {
            text: "",
            value: "pc-file-exclamation-fil",
            content: '"\\e8da"',
            label: "感叹；惊叫；惊叹词"
        }, {
            text: "",
            value: "pc-file-add-fill",
            content: '"\\e8db"',
            label: "加法，加法运算"
        }, {
            text: "",
            value: "pc-file-fill",
            content: '"\\e8dc"',
            label: "满足；填满的量；装填物"
        }, {
            text: "",
            value: "pc-file-excel-fill",
            content: '"\\e8dd"',
            label: "电子表格"
        }, {
            text: "",
            value: "pc-file-markdown-fill",
            content: '"\\e8de"',
            label: "标低价，[物价] 减价"
        }, {
            text: "",
            value: "pc-file-text-fill",
            content: '"\\e8df"',
            label: "[计] 文本；课文；主题"
        }, {
            text: "",
            value: "pc-file-ppt-fill",
            content: '"\\e8e0"',
            label: "微软演示文稿文件"
        }, {
            text: "",
            value: "pc-file-unknown-fill",
            content: '"\\e8e1"',
            label: "未知数；未知的事物，默默无闻的人"
        }, {
            text: "",
            value: "pc-file-word-fill",
            content: '"\\e8e2"',
            label: "[语] 单词；话语；消息；诺言；命令"
        }, {
            text: "",
            value: "pc-file-zip-fill",
            content: '"\\e8e3"',
            label: "拉链；活力，精力；尖啸声，撕裂声；一种程序压缩的档案文件格式"
        }, {
            text: "",
            value: "pc-file-pdf-fill",
            content: '"\\e8e4"',
            label: " Adobe的可移植文档格式文件的扩展名"
        }, {
            text: "",
            value: "pc-file-image-fill",
            content: '"\\e8e5"',
            label: "复数虚部；图像放大"
        }, {
            text: "",
            value: "pc-diff-fill",
            content: '"\\e8e6"',
            label: "扩散器（diffuser）；微分；差速器（differential）"
        }, {
            text: "",
            value: "pc-file-copy-fill",
            content: '"\\e8e7"',
            label: "副本；一册；摹仿"
        }, {
            text: "",
            value: "pc-snippets-fill",
            content: '"\\e8e8"',
            label: "片段（snippet的复数形式）；小片"
        }, {
            text: "",
            value: "pc-folder-add-fill",
            content: '"\\e8eb"',
            label: "加法，加法运算"
        }, {
            text: "",
            value: "pc-folder-fill",
            content: '"\\e8ec"',
            label: "满足；填满的量；装填物"
        }, {
            text: "",
            value: "pc-folder-open-fill",
            content: '"\\e8ed"',
            label: "公开；空旷；户外"
        }]
    }]
}
  , DIRECTIVE = {
    done: function() {
        return ""
    }
}
  , FILTER = {
    navigator: function(e) {
        "undefined" != typeof BbaseApp && (BbaseApp.emptyDialog(),
        -1 === e.indexOf("design_center") && -1 === e.indexOf("member_register") && !CONST.USER.username,
        BbaseUtils.addLoading())
    }
}
  , localStorageSource = {}
  , UTIL = {
    addLoading: function() {
        if (!window.layoutId || "97" !== window.layoutId) {
            try {
                if (window.$loading)
                    return clearTimeout(window.$loading_timer),
                    void (window.$loading_timer = setTimeout(function() {
                        BbaseUtils.removeLoading()
                    }, 3e4));
                window.$loading = $('<div id="loading" class="loading"><div class="object" id="object_one"></div><div class="object" id="object_two"></div><div class="object" id="object_three"></div></div>'),
                $("body").append(window.$loading),
                window.$loading_timer && clearTimeout(window.$loading_timer),
                window.$loading_timer = setTimeout(function() {
                    UTIL.removeLoading()
                }, 3e4)
            } catch (e) {}
            return window.$loading
        }
    },
    removeLoading: function() {
        window.$loading ? (window.$loading.remove(),
        window.$loading = null) : $(".loading").remove()
    },
    createCallback: function(e, t, n) {
        if (!t)
            return e;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, a) {
                return e.call(t, n, a)
            }
            ;
        case 3:
            return function(n, a, o) {
                return e.call(t, n, a, o)
            }
            ;
        case 4:
            return function(n, a, o, i) {
                return e.call(t, n, a, o, i)
            }
        }
        return function() {
            return e.apply(this, arguments)
        }
    },
    typeOf: function(e) {
        var t = {
            undefined: "undefined",
            number: "number",
            "boolean": "boolean",
            string: "string",
            "[object Function]": "function",
            "[object RegExp]": "regexp",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object Error]": "error",
            "[object File]": "file",
            "[object Blob]": "blob"
        };
        return t[typeof e] || t[Object.prototype.toString.call(e)] || (e ? "object" : "null")
    },
    keys: function(e) {
        if ("object" !== UTIL.typeOf(e))
            return [];
        if (Object.keys)
            return Object.keys(e);
        var t = [];
        for (var n in e)
            hasKey(e, n) && t.push(n);
        return t
    },
    each: function(e, t, n) {
        var a, o, i = !1, l = !1;
        if (null == e)
            return e;
        if (t = UTIL.createCallback(t, n),
        e.length === +e.length)
            for (a = 0,
            o = e.length; o > a && (i = 0 === a ? !0 : !1,
            l = a === o - 1 ? !0 : !1,
            t(e[a], a, e, i, l) !== !1); a++)
                ;
        else {
            var r = UTIL.keys(e);
            for (a = 0,
            o = r.length; o > a && (i = 0 === a ? !0 : !1,
            l = a === r.length - 1 ? !0 : !1,
            t(e[r[a]], r[a], e, a, i, l) !== !1); a++)
                ;
        }
        return e
    },
    hash: function(e) {
        try {
            if (!e)
                return null;
            for (var t = 5381, n = e.length; n; )
                t = 33 * t ^ e.charCodeAt(--n);
            return t >>> 0
        } catch (a) {
            debug("err34 -> " + a)
        }
    },
    setArguments: function(e, t) {
        this.value = [].slice.call(e),
        this.append = t
    },
    inject: function(e, t, n) {
        return function() {
            var a, o = !1, i = [].slice.call(arguments);
            return "function" == typeof t && (a = t.apply(this, i),
            a instanceof UTIL.setArguments ? i = a.value : (o = void 0 !== a) && i.push(a)),
            "undefined" == typeof a ? !1 : (!o && i.push(e.apply(this, i)),
            a = "function" == typeof n ? n.apply(this, i.concat(o, a && a.append)) : void 0,
            void 0 !== a ? a : i.pop())
        }
    },
    getItem: function(e, t) {
        try {
            for (var n, a = 0; n = this.tmpList[a++]; )
                if (n.doc === e && n.url == (t.src || t.href))
                    return n
        } catch (o) {
            return null
        }
    },
    loadFile: function(e, t, n) {
        var a = this;
        try {
            0 == window.location.href.indexOf("https:") && (t.href && (t.href = t.href.replace("http:", "https:")),
            t.src && (t.src = t.src.replace("http:", "https:")))
        } catch (o) {
            console.error(o)
        }
        this.tmpList = this.tmpList || [];
        var i = this.getItem(e, t);
        if (i)
            return void (i.ready ? n && n() : i.funs.push(n));
        if (this.tmpList.push({
            doc: e,
            url: t.src || t.href,
            funs: [n]
        }),
        !e.body) {
            var l = [];
            for (var r in t)
                "tag" != r && l.push(r + '="' + t[r] + '"');
            return void e.write("<" + t.tag + " " + l.join(" ") + " ></" + t.tag + ">")
        }
        if (!t.id || !e.getElementById(t.id)) {
            var c = e.createElement(t.tag);
            delete t.tag;
            for (var r in t)
                c.setAttribute(r, t[r]);
            c.onload = c.onreadystatechange = function() {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    if (i = a.getItem(e, t),
                    i.funs.length > 0) {
                        i.ready = 1;
                        for (var n; n = i.funs.pop(); )
                            n()
                    }
                    c.onload = c.onreadystatechange = null
                }
            }
            ,
            c.onerror = function() {
                throw Error("The load " + (t.href || t.src) + " fails")
            }
            ,
            t.href ? e.getElementsByTagName("head")[0].appendChild(c) : e.getElementsByTagName("body")[0].appendChild(c)
        }
    },
    loadFiles: function(e, t) {
        for (var n = e.length, a = 0, o = function() {
            n > a || t && t.call(this)
        }, i = 0; i < e.length; i++) {
            var l = e[i];
            l.indexOf(".js") > -1 ? this.loadFile(document, {
                tag: "script",
                src: l,
                type: "text/javascript",
                defer: "defer"
            }, function() {
                a++,
                o()
            }) : l.indexOf(".css") > -1 ? this.loadFile(document, {
                tag: "link",
                href: l,
                rel: "stylesheet",
                defer: "defer"
            }, function() {
                a++,
                o()
            }) : this.loadFile(document, {
                tag: "script",
                src: l,
                type: "text/javascript",
                defer: "defer"
            }, function() {
                a++,
                o()
            })
        }
    },
    loadFileAdapt: function(e, t) {
        e.indexOf(".js") > -1 ? this.loadFile(document, {
            tag: "script",
            src: e,
            type: "text/javascript",
            defer: "defer"
        }, function() {
            t && t()
        }) : e.indexOf(".css") > -1 && this.loadFile(document, {
            tag: "link",
            href: e,
            rel: "stylesheet",
            defer: "defer"
        }, function() {
            t && t()
        })
    },
    loadFilesSync: function(e, t) {
        var n = this;
        return 1 === e.length ? n.loadFileAdapt(e[0], t) : n.loadFileAdapt(e[0], function() {
            e.shift(),
            n.loadFilesSync(e, t)
        })
    },
    getSsoCode: function() {},
    ssoLogin: function() {},
    urlResolve: function(e) {
        var t = e;
        return urlParsingNode = document && document.createElement("a"),
        urlParsingNode.setAttribute("href", t),
        {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        }
    },
    checkUrl: function() {
        var e = window.location.href
          , t = UTIL.urlResolve(e)
          , n = window.bindAddress
          , a = !1;
        if (!(e.indexOf("rest/site") > -1 || Est.isEmpty(n))) {
            var o = n.split(",");
            UTIL.each(o, function(e) {
                return t.host.indexOf(e) > -1 ? (a = !0,
                !1) : void 0
            }),
            a || $.ajax({
                url: CONST.API + "/comm/layout/copyUrlJsonp",
                dataType: "jsonp",
                type: "get",
                data: {
                    username: window.layoutId,
                    copyUrl: t.host
                },
                success: function() {
                    n.split(",")[0]
                }
            })
        }
    },
    getUrlParam: function(e, t) {
        var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
        "undefined" !== UTIL.typeOf(t) && (t = t.substring(t.indexOf("?"), t.length));
        var a = t || window.location.search
          , o = a.substr(1).match(n);
        return null != o ? unescape(o[2]) : null
    },
    arrayIndex: function(e, t) {
        if (e.indexOf)
            return e.indexOf(t);
        for (var n = 0, a = e.length; a > n; n++)
            if (t === e[n])
                return n;
        return -1
    },
    indexOf: function(e, t) {
        return "array" === UTIL.typeOf(e) ? e.indexOf ? e.indexOf(t) : UTIL.arrayIndex(e, t) : e.indexOf(t)
    },
    setUrlParam: function(e, t, n, a) {
        var o, i = "", l = "", r = "", c = "0";
        n = n || window.location.href;
        var s = e + "=" + t;
        if (-1 == UTIL.indexOf(n, "?"))
            return n + a ? "" : "?" + s;
        i = n.substr(UTIL.indexOf(n, "?") + 1),
        -1 != UTIL.indexOf(i, "&") ? (o = i.split("&"),
        UTIL.each(o, function(n) {
            n.split("=")[0] == e ? (r = t,
            c = "1") : r = n.split("=")[1],
            l = l + n.split("=")[0] + "=" + r + "&"
        }),
        l = l.substr(0, l.length - 1),
        "0" == c && l == i && (l = l + "&" + e + "=" + t)) : -1 != UTIL.indexOf(i, "=") ? (o = i.split("="),
        o[0] == e ? (r = t,
        c = "1") : r = o[1],
        l = o[0] + "=" + r,
        "0" == c && l == i && (l = l + "&" + e + "=" + t)) : l = e + "=" + t;
        var u = n.substr(0, UTIL.indexOf(n, "?")) + "?" + l;
        return a ? u.replace("&" + s, "").replace(s, "") : u
    },
    setLocalStorage: function(e, t, n) {
        var a = localStorage.getItem("localStorageSource") ? JSON.parse(localStorage.getItem("localStorageSource")) : {};
        return a[e] = t,
        n && (a[e + "__expires__"] = Date.now() + n),
        localStorage.setItem("localStorageSource", JSON.stringify(a)),
        t
    },
    getLocalStorage: function(e) {
        var t = localStorage.getItem("localStorageSource") ? JSON.parse(localStorage.getItem("localStorageSource")) : {}
          , n = t[e + "__expires__"] || Date.now + 1
          , a = Date.now();
        if (a >= n)
            return void UTIL.removeLocalStorage(e);
        var o = t[e] ? t[e] : t[e];
        return o
    },
    removeLocalStorage: function(e) {
        var e = e
          , t = localStorage.getItem("localStorageSource") ? JSON.parse(localStorage.getItem("localStorageSource")) : {}
          , n = t[e];
        return delete t[e],
        delete t[e + "__expires__"],
        n
    }
};
window.messageSend = function(e, t, n, a, o, i, l, r) {
    $.ajax({
        url: "http://www.jihui88.com/site_message/ajaxSend",
        dataType: "jsonp",
        jsonp: "callback",
        data: {
            title: e,
            content: t,
            recvEnt: window.enterpriseId,
            recvUser: window.userId,
            domain: document.domain,
            layoutId: window.layoutId,
            valiCode: n,
            posterId: window.posterId,
            fromName: i,
            fromEmail: l,
            fromPhone: r
        },
        success: function(e) {
            "发送成功" === e || "messageSuccess()" === e || '"messageSuccess"' === e ? a && a.call(null, e) : o && o.call(null, e)
        }
    })
}
,
window.memberRegister = function(e, t, n, a, o, i, l) {
    for (var r = {
        name: e,
        username: t,
        password: n,
        comfirmPassword: a,
        enterpriseId: window.enterpriseId,
        cookie: document.cookie,
        layoutId: window.layoutId,
        posterId: window.posterId
    }, c = 0, s = o.length; s > c; c++)
        r[o[c].name] = encodeURIComponent(o[c].value);
    $.ajax({
        type: "get",
        url: "http://www.jihui88.com/rest/api/shop/member/register",
        async: !1,
        dataType: "jsonp",
        jsonpCallback: "register",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: r,
        success: function(e) {
            e.success ? i && i.call(null, e) : l && l.call(null, e)
        }
    })
}
,
window.orderSave = function(e, t, n, a, o, i, l) {
    $.ajax({
        url: "http://www.jihui88.com/rest/api/shop/order/save",
        dataType: "jsonp",
        jsonpCallback: "jsonpCallbackOrderSave",
        data: {
            receiverId: e,
            typeId: t,
            configId: n,
            memo: a || "",
            invoiceName: o || "",
            entId: window.enterpriseId,
            cIds: $.cookie("toPayCartItemId"),
            cookie: document.cookie,
            gainIds: "",
            integralPoint: 0,
            layoutId: window.layoutId,
            posterId: window.posterId
        },
        success: function(e) {
            e.success ? ($.cookie("cartItemListSize", e.attributes.cartListSize),
            $.cookie("toPayCartItemId", null),
            $.cookie("orderId_c", e.attributes.orderId),
            $.cookie("configId_c", e.attributes.paymentConfigId),
            $.cookie("deliverIypeName_c", e.attributes.deliveryTypeName),
            $.cookie("totalAmountTxt_c", e.attributes.totalAmount),
            $.cookie("orderSn_c", e.attributes.orderSn),
            $.cookie("configname_c", e.attributes.paymentConfigName),
            i && i.call(null, e)) : l && l.call(null, e)
        }
    })
}
,
window.buyOrToCart = function(e, t, n, a, o) {
    $.ajax({
        url: "01" === e ? "http://www.jihui88.com/rest/api/shop/cartItem/add" : "http://www.jihui88.com/rest/api/shop/cartItem/toPay",
        async: !1,
        type: "get",
        dataType: "jsonp",
        jsonpCallback: "cartItem_add",
        data: {
            cookie: document.cookie,
            payType: e,
            id: t,
            quantity: n,
            mobileShop: !0,
            proUrl: location.href,
            entName: "",
            productAttr: encodeURIComponent(a),
            appendPrice: "0",
            appendIds: encodeURIComponent(o),
            formulaResult: "1",
            skuCode: encodeURIComponent(o),
            formulaStr: encodeURIComponent(JSON.stringify("1*1"))
        },
        success: function(t) {
            t.success ? "01" === e ? alert("添加购物车成功") : ($.cookie("toPayCartItemId", t.attributes.cartItemId),
            location.href = "orderSubmit") : alert("notLogin" == t.msgType || "未登陆" === t.msg ? "请先登录" : t.msg)
        },
        error: function() {
            alert("请求出错， 请重试")
        }
    })
}
,
window.addFavorite = function(e, t, n, a) {
    $.ajax({
        url: "http://www.jihui88.com/rest/api/shop/favorite/save",
        data: {
            productId: e
        },
        dataType: "jsonp",
        jsonpCallback: "favoritesave",
        beforeSend: t,
        success: function(e) {
            t && t.call(null, e),
            alert(e.msg)
        },
        error: function() {
            null == $.cookie("username"),
            a && a.call(null)
        }
    })
}
,
window.animateFn = function(e) {
    var t = $(window).scrollTop()
      , n = $(window).height();
    e.each(function() {
        t > $(this).offset().top - n + 200 && ($(this).addClass($(this).attr("data-delay")),
        $(this).addClass($(this).attr("data-duration")),
        $(this).addClass($(this).attr("data-infinite")),
        $(this).addClass($(this).attr("data-type")))
    })
}
,
window.doAnimate = function() {
    $(window).height(),
    $(window).scrollTop();
    animateList = $(".animated"),
    window.animateFn(animateList),
    $(window).resize(function() {
        window.animateFn(animateList)
    }),
    $(window.document).scroll(function() {
        window.animateFn(animateList)
    })
}
,
window.getToken = function(e) {
    var t = $.cookie("token");
    return Est.isEmpty(t) ? void $.ajax({
        url: "http://www.jihui88.com/rest/api/comm/user/getTokenJsonp",
        dataType: "jsonp",
        jsonpCallback: "getTokenJsonp",
        success: function(n) {
            if (n.success) {
                t = n.attributes.data;
                var a = new Date;
                a.setTime(a.getTime() + 864e5),
                $.cookie("token", t, {
                    expires: a
                }),
                e.call(null, t)
            }
        }
    }) : void e.call(null, t)
}
,
window.verificationCode = function(e) {
    window.getToken(function(t) {
        var n = $(e);
        n.attr("src", n.attr("src") + "?time=" + (new Date).getTime() + "&token=" + t)
    })
}
,
window.jhwApi = {
    parseData: function(e) {
        return e.attributes = e.data,
        e.success = 0 === e.code ? !0 : !1,
        window.jhwApi.parseCode(e)
    },
    parseCode: function(e) {
        switch (e.code) {
        case 5:
            e.msgType = "notLogin";
            break;
        case 2011:
            e.msgType = "notBind";
            break;
        case 4002:
            e.msgType = "errorCode";
            break;
        case 4003:
            e.msgType = "errorCode";
            break;
        case 4004:
            e.msgType = "errorParam";
            break;
        case 4005:
            e.msgType = "forbid";
            break;
        case 4006:
            e.msgType = "lock";
            break;
        case 4007:
            e.msgType = "lockLimit";
            break;
        case 4008:
            e.msgType = "notPass";
            break;
        case 4009:
            e.msgType = "close";
            break;
        case 4010:
            e.msgType = "enterpriseSelect";
            break;
        case 4011:
            e.msgType = "username_required";
            break;
        case 4012:
            e.msgType = "password_required";
            break;
        case 4013:
            e.msgType = "attrError";
            break;
        case 4014:
            e.msgType = "notPass";
            break;
        case 4016:
            e.msgType = "oauth_none";
            break;
        case 4018:
            e.msgType = "changeUsername";
            break;
        case 7001:
            e.msgType = "notOnline";
            break;
        case 7002:
            e.msgType = "notOnline";
            break;
        case 7003:
            e.msgType = "limit";
            break;
        case 7005:
            e.msgType = "memberLimit";
            break;
        case 7007:
            e.msgType = "store";
            break;
        case 7008:
            e.msgType = "unpublishTimeNotStart";
            break;
        case 7009:
            e.msgType = "unpublishTimeEnd";
            break;
        case 7010:
            e.msgType = "minLimit";
            break;
        case 7013:
            e.msgType = "emptyCart";
            break;
        case 8001:
            e.msgType = "nameRequired";
            break;
        case 8002:
            e.msgType = "areaPathRequired";
            break;
        case 8003:
            e.msgType = "addressRequired";
            break;
        case 8004:
            e.msgType = "zipCodeRequired";
            break;
        case 8005:
            e.msgType = "phoneMobileChoose";
            break;
        case 8006:
            e.msgType = "areaPathError";
            break;
        case 8007:
            e.msgType = "receiverSetLimit";
            break;
        case 8008:
            e.msgType = "receiverError";
            break;
        case 9001:
            e.msgType = "deliveryTypeRequired";
            break;
        case 10001:
            e.msgType = "isSaveReceiverRequired";
            break;
        case 10002:
            e.msgType = "paymentConfigError";
            break;
        case 10003:
            e.msgType = "soldOut";
            break;
        case 10004:
            e.msgType = "moneyNotEnough";
            break;
        case 10005:
            e.msgtype = "orderIdRequired";
            break;
        case 10005:
            e.msgtype = "pointShortage";
            break;
        case 11001:
            e.msgType = "paymentConfigRequired";
            break;
        case 12001:
            e.msgType = "productReadError";
            break;
        case 12002:
            e.msgType = "productExist";
            break;
        case 13001:
            e.msgType = "overflow";
            break;
        case 13002:
            e.msgType = "overCount";
            break;
        case 13004:
            e.msgType = "memberLevelNotMatch"
        }
        return e
    },
    handleImplCount: function(e, t, n) {
        t || (t = 50);
        var a = !1
          , o = UTIL.getLocalStorage(e);
        return 0 === o || o ? o >= t ? a = !0 : (o = parseInt(o, 10),
        UTIL.setLocalStorage(e, ++o, n || 2e3)) : (o = 0,
        UTIL.setLocalStorage(e, ++o, n || 2e3)),
        a && alert("请求过于频繁"),
        a
    },
    messageSend: function(e) {
        return jhwApi.handleImplCount("messageSend", 1, 2e3) ? void 0 : Est.isEmpty(e.title) ? void (e.errorFn && e.errorFn.call(null, {
            msg: "标题不能为空",
            msgType: "titleRequired"
        })) : Est.isEmpty(e.content) ? void (e.errorFn && e.errorFn.call(null, {
            msg: "内容不能为空",
            msgType: "contentRequired"
        })) : void $.ajax({
            type: "post",
            url: "/manage/v4/website/open/message/send",
            dataType: "json",
            data: {
                title: $.trim(e.title),
                content: $.trim(e.content),
                recvEnt: window.enterpriseId,
                recvUser: window.userId,
                domain: document.domain,
                layoutId: window.layoutId,
                valiCode: $.trim(e.valiCode),
                posterId: window.posterId,
                fromName: $.trim(e.fromName),
                fromEmail: $.trim(e.fromEmail),
                fromPhone: $.trim(e.fromPhone)
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    isLogin: function(e) {
        jhwApi.handleImplCount("isLogin") || $.ajax({
            url: "/manage/v4/website/open/member/isLogin",
            dataType: "json",
            data: {
                openid: e.openid || $.cookie("username"),
                enterpriseId: window.enterpriseId
            },
            success: function(t) {
                if (0 === t.code) {
                    window.jhwApi.parseData(t);
                    var n = t.attributes
                      , a = n.openId
                      , o = n.face
                      , i = n.name
                      , l = n.username
                      , r = n.memberId
                      , c = $("body");
                    window.localStorage.setItem("__openid__", a),
                    window.localStorage.setItem("face", o),
                    window.localStorage.setItem("name", i),
                    window.localStorage.setItem("memberRankId", t.attributes.memberRankId),
                    window.localStorage.setItem("rusername", l),
                    window.localStorage.setItem("hasMemberPrice", t.attributes.hasMemberPrice),
                    window.localStorage.setItem("memberId", r),
                    window.isMemberLogin = !0,
                    window.memberRankId = t.attributes.memberRankId,
                    c.addClass("isLoged"),
                    e.successFn && e.successFn.call(null, t)
                } else
                    window.isMemberLogin = !1,
                    window.localStorage.setItem("__openid__", null),
                    window.localStorage.setItem("face", null),
                    window.localStorage.setItem("name", null),
                    window.localStorage.setItem("memberRankId", null),
                    window.localStorage.setItem("rusername", null),
                    window.localStorage.setItem("memberId", null),
                    e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    memberLogin: function(e) {
        jhwApi.handleImplCount("memberLogin", 1, 2e3) || $.ajax({
            type: "post",
            url: "/manage/v4/website/open/member/login",
            dataType: "json",
            data: {
                username: $.trim(e.username),
                password: $.trim(e.password),
                randCode: $.trim(e.randCode),
                enterpriseId: window.enterpriseId,
                layoutId: window.layoutId,
                posterId: window.posterId,
                userDomain: document.domain,
                cookie: document.cookie
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                0 == t.code ? (window.location.reload(),
                e.successFn && e.successFn.call(null, t)) : (t = window.jhwApi.parseCode(t),
                e.errorFn && e.errorFn.call(null, t))
            }
        })
    },
    memberLogout: function(e) {
        jhwApi.handleImplCount("memberLogout") || $.ajax({
            url: "/manage/v4/website/open/member/logout?userDomain=" + document.domain,
            success: function(t) {
                $.cookie("username", null),
                $.cookie("cartItemListSize", null),
                e.successFn && e.successFn.call(null, t)
            }
        })
    },
    memberRegister: function(e) {
        if (!jhwApi.handleImplCount("memberRegister", 1, 2e3)) {
            if (Est.isEmpty(e.username))
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "请输入用户名",
                    msgType: "username_required"
                }));
            if (!/^[A-Za-z0-9]+$/.test(e.username))
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "请输入由数字和26个英文字母组成的账号",
                    msgType: "username_invalid"
                }));
            if (Est.isEmpty(e.password))
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "请输入密码",
                    msgType: "password_required"
                }));
            if (!/^[a-zA-Z]\w{5,17}$/.test(e.password))
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "请输入以字母开头，长度在6~18之间，只能包含字母、数字和下划线的密码",
                    msgType: "password_invalid"
                }));
            if (Est.isEmpty(e.confirmPassword))
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "请再次输入密码",
                    msgType: "confirmPassword_required"
                }));
            if (e.confirmPassword !== e.password)
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "两次密码不匹配",
                    msgType: "difference"
                }));
            var t = {
                name: $.trim(e.nickName),
                username: $.trim(e.username),
                password: $.trim(e.password),
                comfirmPassword: $.trim(e.confirmPassword),
                enterpriseId: window.enterpriseId,
                cookie: document.cookie,
                layoutId: window.layoutId,
                posterId: window.posterId
            };
            if (e.attrArr)
                for (var n = 0, a = e.attrArr.length; a > n; n++)
                    t[e.attrArr[n].name] = encodeURIComponent(e.attrArr[n].value);
            $.ajax({
                type: "post",
                url: "/manage/v4/website/open/member/register",
                async: !1,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data: t,
                success: function(t) {
                    window.jhwApi.parseData(t),
                    t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
                }
            })
        }
    },
    getMemberAttr: function(e) {
        jhwApi.handleImplCount("getMemberAttr") || $.ajax({
            url: "/manage/v4/website/open/member/attr/list",
            data: {
                enterpriseId: window.enterpriseId
            },
            success: function(t) {
                t = jhwApi.parseData(t),
                t.success && e.successFn && e.successFn.call(null, t)
            }
        })
    },
    orderSave: function(e) {
        jhwApi.handleImplCount("orderSave", 1, 2e3) || $.ajax({
            url: "/manage/v4/website/shop/order/save",
            type: "post",
            dataType: "json",
            data: {
                receiverId: $.trim(e.receiverId),
                typeId: $.trim(e.typeId),
                configId: $.trim(e.configId),
                memo: e.memo || "",
                invoiceName: e.invoiceName || "",
                entId: window.enterpriseId,
                cIds: $.cookie("toPayCartItemId"),
                cookie: document.cookie,
                gainIds: e.gainIds || "",
                integralPoint: e.integralPoint || 0,
                layoutId: window.layoutId,
                posterId: window.posterId,
                storeId: e.storeId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? ($.cookie("cartItemListSize", t.attributes.cartListSize),
                $.cookie("toPayCartItemId", null),
                $.cookie("orderId_c", t.attributes.orderId),
                $.cookie("configId_c", t.attributes.paymentConfigId),
                $.cookie("deliverIypeName_c", t.attributes.deliveryTypeName),
                $.cookie("totalAmountTxt_c", t.attributes.totalAmount),
                $.cookie("orderSn_c", t.attributes.orderSn),
                $.cookie("configname_c", t.attributes.paymentConfigName),
                e.successFn && e.successFn.call(null, t)) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    buyOrToCart: function(e) {
        jhwApi.handleImplCount("buyOrToCart", 1, 2e3) || $.ajax({
            url: "01" === e.type ? "/manage/v4/website/shop/cartItem/add" : "/manage/v4/website/shop/cartItem/pay",
            type: "post",
            dataType: "json",
            data: {
                cookie: document.cookie,
                payType: $.trim(e.type),
                id: $.trim(e.productId),
                quantity: e.quantity,
                mobileShop: !0,
                proUrl: location.href,
                entName: "",
                productAttr: encodeURIComponent($.trim(e.productAttr)),
                appendPrice: "0",
                appendIds: encodeURIComponent($.trim(e.skuCode)),
                formulaResult: "1",
                skuCode: encodeURIComponent($.trim(e.skuCode)),
                formulaStr: encodeURIComponent(JSON.stringify("1*1"))
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? "01" === e.type ? e.successFn && e.successFn.call(null, t) : ($.cookie("toPayCartItemId", t.attributes.cartItemId),
                location.href = "orderSubmit") : e.errorFn && e.errorFn.call(null, t)
            },
            error: function() {
                e.errorFn && e.errorFn.call(null, "请求出错， 请重试")
            }
        })
    },
    addFavorite: function(e) {
        jhwApi.handleImplCount("addFavorite", 1, 2e3) || (null == $.cookie("username") && e.errorFn && e.errorFn.call(null, {
            msg: "请先登录",
            msgType: "notLogin"
        }),
        $.ajax({
            url: "/manage/v4/website/favorite/save",
            type: "post",
            data: {
                productId: $.trim(e.productId)
            },
            beforeSend: e.beforeSend,
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            },
            error: function(t) {
                null == $.cookie("username") ? e.errorFn && e.errorFn.call(null, {
                    msg: "请先登录",
                    msgType: "notLogin"
                }) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    getSkuCodeList: function(e) {
        jhwApi.handleImplCount("getSkuCodeList") || $.ajax({
            url: "/manage/v4/website/member/skuCodeList",
            data: {
                productId: $.trim(e.productId),
                enterpriseId: window.enterpriseId,
                memberRankId: window.memberRankId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success && e.successFn && e.successFn.call(null, t)
            }
        })
    },
    getCartItemList: function(e) {
        jhwApi.handleImplCount("getCartItemList") || $.ajax({
            url: "/manage/v4/website/open/cartItem/list",
            dataType: "json",
            data: {
                entId: window.enterpriseId,
                cookie: document.cookie
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    delCartItem: function(e) {
        jhwApi.handleImplCount("delCartItem", 1, 2e3) || $.ajax({
            url: "/manage/v4/website/shop/cartItem/delete",
            type: "get",
            data: {
                id: $.trim(e.productId),
                cartItemId: $.trim(e.cartitemId),
                cookie: document.cookie
            },
            dataType: "json",
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? (t.attributes.cartItemList ? ($.cookie("cartItemList", t.attributes.cartItemList),
                $.cookie("cartItemListSize", t.attributes.cartItemList ? JSON.parse(t.attributes.cartItemList).length : 0)) : t.attributes.totalQuantity && $.cookie("cartItemListSize", t.attributes.totalQuantity),
                e.successFn && e.successFn.call(null, t)) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    clearCartItemList: function(e) {
        jhwApi.handleImplCount("clearCartItemList", 1, 2e3) || $.ajax({
            url: "/manage/v4/website/shop/cartItem/clear",
            dataType: "json",
            success: function(t) {
                t.success ? ($.cookie("cartItemList", null),
                $.cookie("cartItemListSize", 0),
                e.successFn && e.successFn.call(null, t)) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    editCartItem: function(e) {
        jhwApi.handleImplCount("editCartItem", 1, 2e3) || $.ajax({
            url: "/manage/v4/website/shop/cartItem/edit",
            type: "post",
            dataType: "json",
            data: {
                id: $.trim(e.productId),
                quantity: $.trim(e.quantity),
                skuCode: $.trim(e.skuCode),
                cookie: document.cookie
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? ($.cookie("cartItemList", t.attributes.cartItemList, {
                    path: "/"
                }),
                e.successFn && e.successFn.call(null, t)) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getMemberInfo: function(e) {
        jhwApi.handleImplCount("getMemberInfo") || $.ajax({
            url: "/manage/v4/website/member/info?enterpriseId=" + window.enterpriseId,
            dataType: "json",
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getOrderInfo: function(e) {
        jhwApi.handleImplCount("getOrderinfo") || $.ajax({
            url: "/manage/v4/website/shop/order/info",
            dataType: "json",
            data: {
                entId: window.enterpriseId,
                cIds: $.cookie("toPayCartItemId"),
                cookie: document.cookie
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getGainPayList: function(e) {
        jhwApi.handleImplCount("getGainPayList") || $.ajax({
            type: "get",
            url: "/manage/v4/website/shop/gain/getGainPayList?productIds=" + e.productIds,
            dataType: "json",
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getCouponList: function(e) {
        jhwApi.handleImplCount("getCouponList") || (e || (e = {}),
        $.ajax({
            url: "/manage/v4/website/coupon/list?enterpriseId=" + window.enterpriseId,
            dataType: "json",
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    receiveCoupon: function(e) {
        jhwApi.handleImplCount("receiveCoupon") || (e || (e = {}),
        $.ajax({
            url: "/manage/v4/website/member/coupon/receiveList",
            type: "get",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: {
                enterpriseId: window.enterpriseId,
                couponId: $.trim(e.couponId)
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    receiverSave: function(e) {
        jhwApi.handleImplCount("receiverSave", 1, 2e3) || $.ajax({
            url: "/manage/v4/website/shop/receiver/save",
            type: "post",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: {
                entId: window.enterpriseId,
                areaPath: $.trim(e.areaPath),
                name: $.trim(e.name),
                mobile: $.trim(e.mobile),
                zipCode: $.trim(e.zipCode),
                address: $.trim(e.address),
                isDefault: e.isDefault,
                isNoneDelivery: e.isNoneDelivery
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    pieceProductList: function(e) {
        jhwApi.handleImplCount("pieceProductList") || $.ajax({
            type: "get",
            dataType: "jsonp",
            url: "http://pc.jihui88.com/rest/api/comm/piece/pieceProductList",
            data: {
                laymodId: e.laymodId,
                page: e.page,
                pageSize: e.pageSize,
                pagination: e.pagination,
                catePic: e.catePic,
                cateAd: e.cateAd,
                cateId: e.cateId,
                seo: e.seo,
                images: e.images,
                field: e.field,
                proddescOut: e.proddescOut,
                detail1Out: e.detail1Out,
                detail2Out: e.detail2Out,
                tagOut: e.tagOut
            },
            success: function(t) {
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    pieceNewsList: function(e) {
        jhwApi.handleImplCount("pieceNewsList") || $.ajax({
            type: "get",
            dataType: "jsonp",
            url: "http://pc.jihui88.com/rest/api/comm/piece/pieceNewsList",
            data: {
                laymodId: e.laymodId,
                page: e.page,
                pageSize: e.pageSize,
                pagination: e.pagination,
                contentOut: e.content,
                imgNews: e.imgNews,
                field: e.field,
                cateId: e.cateId,
                seo: e.seo
            },
            success: function(t) {
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    pieceDistributionList: function(e) {
        jhwApi.handleImplCount("pieceDistributionList") || $.ajax({
            url: "http://pc.jihui88.com/rest/api/comm/piece/pieceDistributionList",
            dataType: "jsonp",
            jsonpCallback: "pieceDistributionList",
            data: {
                enterpriseId: window.enterpriseId,
                province: e.province,
                city: e.city,
                country: e.country,
                summary: e.summary,
                nationality: e.nationality
            },
            success: function(t) {
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getNewsVisitCount: function(e) {
        jhwApi.handleImplCount("getNewsVisitCount") || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/newsVisitCount",
            data: {
                newsId: e.newsId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success && e.successFn && e.successFn.call(null, t)
            }
        })
    },
    getOauthUrl: function(e) {
        return jhwApi.handleImplCount("getOauthUrl") ? void 0 : (e || (e = {}),
        "http://www.jihui88.com/memberRegOrLoginByWeixin.jsp?url=" + location.href + "&enterpriseId=" + window.enterpriseId)
    },
    getWxJssdk: function(e) {
        jhwApi.handleImplCount("getWxJssdk") || $.ajax({
            url: CONST.API + "/comm/auth/getWxJssdk",
            dataType: "jsonp",
            jsonCallback: "getWxJssdk",
            data: {
                layoutId: window.layoutId,
                url: encodeURIComponent(location.href)
            },
            success: function(t) {
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    siteOauthRegister: function(e) {
        jhwApi.handleImplCount("siteOauthRegister", 1, 2e3) || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/member/register",
            dataType: "jsonp",
            jsonpCallback: "jsonpCallback",
            data: {
                oauthType: e.oauthType,
                oauthOpenId: e.openid,
                username: e.username,
                password: optin.password,
                randCode: e.randCode,
                enterpriseId: window.enterpriseId,
                userDomain: document.domain,
                cookie: document.cookie
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? ($.cookie("cartItemListSize", t.attributes.data.cartItemListSize),
                $.cookie("username", t.attributes.data.username),
                $.cookie("cartItemList", null),
                e.successFn && e.successFn.call(null, t)) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getProductPrice: function(e) {
        jhwApi.handleImplCount("getProductPrice") || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/price/getProductPrice",
            data: {
                proIds: e.proIds,
                enterpriseId: window.enterpriseId,
                username: $.cookie("username"),
                type: "pc"
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : "notLogin" === t.msgType && ($.cookie("username", null),
                e.errorFn && e.errorFn.call(null, t))
            }
        })
    },
    getMemberCenterUrl: function(e) {
        return jhwApi.handleImplCount("getMemberCenterUrl") ? void 0 : (e || (e = {}),
        "http://www.jihui88.com/member/pc_member/index.html#/info?account=" + (e.enterpriseId || window.enterpriseId) + "&color=" + (e.color || "ca471a"))
    },
    handleWxShare: function(e) {
        if (!jhwApi.handleImplCount("handleWxShare")) {
            var t = ""
              , n = $("#share-img")
              , a = $(".share-img");
            n.size() > 0 && n.attr("src") && "null" !== n.attr("src") && "" !== n.attr("src") ? t = n.attr("src") : a.size() > 0 && $("img", a).size() > 0 ? t = $("img", a).eq(0).attr("src") : ("" === t || "null" === t || "undefined" === t) && (t = $("img").eq(0).attr("src"));
            var o = {
                title: $("title").html(),
                desc: $("#meta-description").attr("content"),
                imgUrl: window.sharePic || 0 === t.indexOf("http") ? t : "http:" + t,
                success: function() {
                    return alert("分享成功"),
                    window.beShare = !0,
                    !1
                },
                cancel: function() {
                    alert("已取消分享")
                },
                fail: function() {
                    alert("分享失败")
                },
                complete: function() {}
            };
            window.setWxMenuShare = function(e) {
                e = e || {},
                o = Est.extend(o, e),
                wx.onMenuShareTimeline(o),
                wx.onMenuShareAppMessage(o)
            }
            ;
            var i = CONST.API + "/comm/wx/getWxJssdk?type=02&enterpriseId=" + window.enterpriseId + "&layoutId=" + window.layoutId + "&url=" + encodeURIComponent(location.href);
            $.ajax({
                type: "post",
                url: i,
                dataType: "jsonp",
                jsonpCallback: "jsonpCallback1",
                success: function(t) {
                    if (t.success) {
                        var n = t.attributes.data;
                        n.error && alert(n.error),
                        window.appid = n.appId,
                        window.timestamp = n.timestamp,
                        window.nonceStr = n.nonceStr,
                        window.signature = n.signature,
                        Est.isEmpty(window.appid) || (wx.config({
                            debug: e ? !0 : !1,
                            appId: window.appid,
                            timestamp: window.timestamp,
                            nonceStr: window.nonceStr,
                            signature: window.signature,
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "getLocation"]
                        }),
                        window.setWxMenuShare(o),
                        "107" === window.layoutId)
                    } else
                        alert(t.msg)
                },
                error: function() {}
            }),
            wx.ready(function() {
                window.setWxMenuShare(o)
            })
        }
    },
    siteOauthWeixin: function(e) {
        jhwApi.handleImplCount("siteOauth") || (window.location.href.indexOf("pc.jihui88.com") > -1 && (e.appId = "wx308c58370e47720c"),
        $.ajax({
            url: "/manage/v4/website/open/pcSiteOauth",
            data: {
                requestType: "state",
                backURL: window.location.href
            },
            success: function(t) {
                if (t = window.jhwApi.parseData(t),
                t.success) {
                    var n = window.location.href.substring(0, window.location.href.indexOf("://")) + "://" + window.location.host;
                    t.attributes.url = "https://open.weixin.qq.com/connect/qrconnect?appid=" + e.appId + "&redirect_uri=" + encodeURIComponent(n + "/manage/v4/website/open/pcSiteOauth") + "&response_type=code&scope=snsapi_login&state=" + t.attributes.data + "_" + window.enterpriseId.replace(/^[^1-9]+/gim, "") + "_weixin_pc_" + document.domain + "_" + window.layoutId + "#wechat_redirect",
                    e.successFn && e.successFn.call(null, t)
                }
            }
        }))
    },
    siteOauthQq: function(e) {
        jhwApi.handleImplCount("siteOauth") || (window.location.href.indexOf("pc.jihui88.com") > -1 && (e.appId = "wx308c58370e47720c"),
        $.ajax({
            url: "/rest/manage/website/oauth",
            data: {
                requestType: "state",
                backURL: window.location.href
            },
            success: function(t) {
                if (t.success) {
                    var n = window.location.href.substring(0, window.location.href.indexOf("://")) + "://" + window.location.host;
                    t.attributes.url = "https://graph.qq.com/oauth/show?which=ConfirmPage&display=pc&client_id=${webinfo.oauthQQAppId!''}&response_type=code&state=" + t.attributes.data + "_" + window.enterpriseId.replace(/^[^1-9]+/gim, "") + "_qq_pc_" + document.domain + "_" + window.layoutId + "&scope=&display=&redirect_uri=" + encodeURIComponent(n + "/rest/manage/website/oauth"),
                    e.successFn && e.successFn.call(null, t)
                }
            }
        }))
    },
    handleWeixinAutoLogin: function() {
        if (!jhwApi.handleImplCount("handleWeixinAutoLogin")) {
            var e = UTIL.getUrlParam("code");
            e ? window.jhwApi.weixinLoginOrReg(e) : window.jhwApi.isLogin({
                errorFn: function() {
                    window.jhwApi.getWxJssdk({
                        successFn: function(e) {
                            var t = e.attributes.data;
                            if (window.appid = t.appId,
                            window.timestamp = t.timestamp,
                            window.nonceStr = t.nonceStr,
                            window.signature = t.signature,
                            window.location.href.indexOf("pc.jihui88.com") > -1 && (window.appid = "wx93e4bf53e1a67934"),
                            !Est.isEmpty(window.appid)) {
                                var n = encodeURIComponent(location.href)
                                  , a = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + window.appid + "&redirect_uri=" + n + "&response_type=code&scope=snsapi_userinfo&state=0#wechat_redirect"
                                  , o = UTIL.getUrlParam("code");
                                o ? window.jhwApi.weixinLoginOrReg(o) : window.location.href = a
                            }
                        },
                        errorFn: function() {}
                    })
                }
            })
        }
    },
    weixinLoginOrReg: function(e) {
        jhwApi.handleImplCount("weixinLoginOrReg") || $.ajax({
            url: "/manage/V4/website/open/oauthLoginOrReg",
            data: {
                entAppid: window.appid,
                entAppsecret: window.appsecret,
                code: e,
                layoutId: window.layoutId,
                enterpriseId: window.enterpriseId,
                url: window.location.href
            },
            success: function(e) {
                e = window.jhwApi.parseData(e),
                e.success ? window.location.href = window.location.href.replace(/code=/, "codeold=") : alert("无法注册")
            }
        })
    },
    getMemberCenterInfo: function(e) {
        jhwApi.handleImplCount("memberInfo") || (e || (e = {}),
        $.ajax({
            url: "/manage/v4/website/member/info?enterpriseId=" + window.enterpriseId,
            dataType: "json",
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    saveMemberCenterInfo: function(e) {
        if (!jhwApi.handleImplCount("saveMemberCenterInfo", 1, 2e3)) {
            e || (e = {});
            var t = e.data;
            if (Est.isEmpty(t.name))
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "昵称不能为空",
                    msgType: "nickNameRequired"
                }));
            t.enterpriseId = window.enterpriseId,
            t.name = $.trim(t.name),
            t.mobile = $.trim(t.mobile),
            t.sex = $.trim(t.sex),
            t.email = $.trim(t.email),
            $.ajax({
                type: "post",
                url: "/manage/v4/website/member/edit",
                dataType: "json",
                data: t,
                success: function(t) {
                    t = window.jhwApi.parseData(t),
                    t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
                }
            })
        }
    },
    editMemberPassword: function(e) {
        if (!jhwApi.handleImplCount("editMemberPassword", 1, 2e3)) {
            if (e || (e = {}),
            Est.isEmpty(e.password))
                return void (e.errorFn && e.errorFn.call(null, {
                    msg: "密码不能为空",
                    msgType: "passwordRequired"
                }));
            Est.isEmpty(e.oldPassword) && e.errorfn && e.errorFn.call(null, {
                msg: "原始密码不能为空",
                msdType: "oldPasswordRequired"
            }),
            $.ajax({
                type: "post",
                url: "/manage/v4/website/member/password/edit",
                dataType: "json",
                data: {
                    enterpriseId: window.enterpriseId,
                    password: e.password,
                    oldPassword: e.oldPassword
                },
                success: function(t) {
                    t = window.jhwApi.parseData(t),
                    t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
                }
            })
        }
    },
    getOrderList: function(e) {
        jhwApi.handleImplCount("getOrderList") || (e || (e = {}),
        $.ajax({
            url: "/manage/v4/website/member/order/list",
            dataType: "json",
            data: {
                enterpriseId: window.enterpriseId,
                page: e.page,
                pageSize: e.pageSize,
                ostate: e.ostate
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    getOrderDetail: function(e) {
        jhwApi.handleImplCount("getOrderDetail") || (e || (e = {}),
        $.ajax({
            url: "/manage/v4/website/member/order/detail",
            dataType: "json",
            data: {
                enterpriseId: window.enterpriseId,
                orderId: e.orderId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    orderCancel: function(e) {
        jhwApi.handleImplCount("orderCancel", 1, 2e3) || $.ajax({
            type: "post",
            url: "/manage/v4/website/member/order/cancel",
            data: {
                enterpriseId: window.enterpriseId,
                orderId: e.orderId
            },
            success: function(t) {
                t = widnow.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getFavoriteList: function(e) {
        jhwApi.handleImplCount("getFavoriteList") || (e || (e = {}),
        $.ajax({
            url: "/manage/v4/website/member/favorite/list",
            dataType: "json",
            data: {
                enterpriseId: window.enterpriseId,
                page: e.page,
                pageSize: e.pageSize
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    delFavorite: function(e) {
        jhwApi.handleImplCount("delFavorite", 1, 2e3) || (e || (e = {}),
        $.ajax({
            url: "/manage/v4/website/member/favorite/delete",
            type: "post",
            dataType: "json",
            data: {
                enterpriseId: window.enterpriseId,
                favoriteId: e.favoriteId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        }))
    },
    getGainList: function(e) {
        jhwApi.handleImplCount("getGainList") || $.ajax({
            url: "/manage/v4/website/member/gain/list",
            data: {
                enterpriseId: window.enterpriseId,
                name: e.name,
                listType: e.listType,
                state: e.state,
                amountCount: e.amountCount,
                page: e.page,
                pageSize: e.pageSize
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getReceiverList: function(e) {
        jhwApi.handleImplCount("getReceiverList") || $.ajax({
            url: "/manage/v4/website/member/receiver/list",
            data: {
                enterpriseId: window.enterpriseId,
                page: e.page,
                pageSize: e.pageSize
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    saveReceiver: function(e) {
        jhwApi.handleImplCount("saveReceiver", 1, 2e3) || $.ajax({
            type: "post",
            url: "/manage/v4/website/member/receiver/edit",
            data: {
                enterpriseId: window.enterpriseId,
                receiverId: e.receiverId,
                name: e.name,
                areaPath: e.areaPath,
                address: e.address,
                zipCode: e.zipCode,
                isDefault: e.isDefault,
                mobile: e.mobile,
                phone: e.phone
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    delReceiver: function(e) {
        jhwApi.handleImplCount("delReceiver", 1, 2e3) || $.ajax({
            type: "post",
            url: "/manage/v4/website/member/receiver/delete",
            data: {
                enterpriseId: window.enterpriseId,
                receiverId: e.receiverId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getChildrenArea: function(e) {
        jhwApi.handleImplCount("getChildrenArea") || $.ajax({
            type: "get",
            url: "/manage/v4/website/member/childrenArea",
            data: {
                enterpriseId: window.enterpriseId,
                path: e.path
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getMemberDetail: function(e) {
        jhwApi.handleImplCount("getMemberDetail") || $.ajax({
            type: "get",
            url: "/manage/v4/website/member/detail",
            data: {
                enterpriseId: window.enterpriseId,
                id: e.id
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    editMemberQuestion: function(e) {
        jhwApi.handleImplCount("editMemberQuestion", 1, 2e3) || $.ajax({
            type: "post",
            url: "/manage/v4/website/member/safeQuestion",
            data: {
                enterpriseId: window.enterpriseId,
                safeQuestion: e.safeQuestion,
                safeAnswer: e.safeAnswer
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    orderCompleted: function(e) {
        jhwApi.handleImplCount("orderCompleted", 1, 2e3) || $.ajax({
            type: "post",
            url: "/manage/v4/website/order/completed",
            data: {
                enterpriseId: window.enterpriseId,
                orderId: e.orderId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getStoreList: function(e) {
        jhwApi.handleImplCount("getStoreList", 1, 2e4) || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/store/list",
            data: {
                enterpriseId: window.enterpriseId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getOrderFee: function(e) {
        jhwApi.handleImplCount("getOrderFee") || $.ajax({
            type: "get",
            url: "/manage/v4/website/shop/order/fee",
            data: {
                enterpriseId: window.enterpriseId,
                typeId: $.trim(e.typeId),
                configId: $.trim(e.configId),
                cIds: $.cookie("toPayCartItemId"),
                receiverId: $.trim(e.receiverId)
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    orderDisputeAdd: function(e) {
        jhwApi.handleImplCount("orderDisputeAdd", 1, 2e3) || $.ajax({
            type: "post",
            url: "/manage/v4/website/shop/order/dispute/add",
            data: {
                enterpriseId: window.enterpriseId,
                orderId: e.orderId,
                buyerReason: e.buyerReason,
                mobile: e.mobile,
                totalAmount: e.totalAmount
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    orderDisputeList: function(e) {
        jhwApi.handleImplCount("orderDisputeList") || $.ajax({
            type: "get",
            url: "/manage/v4/website/shop/order/dispute/list",
            data: {
                enterpriseId: window.enterpriseId,
                page: e.page,
                pageSize: e.pageSize
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    memberQuestionDetail: function(e) {
        jhwApi.handleImplCount("memberQuestionDetail") || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/member/question/detail",
            data: {
                enterpriseId: window.enterpriseId,
                username: e.username
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    memberAnswerCheck: function(e) {
        jhwApi.handleImplCount("memberAnswerCheck") || $.ajax({
            type: "post",
            url: "/manage/v4/website/open/member/answer/check",
            data: {
                enterpriseId: window.enterpriseId,
                username: e.username,
                answer: e.answer
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getBindDetail: function(e) {
        if (!jhwApi.handleImplCount("getBindDetail") && window.bindAddress && 0 !== window.bindAddress.length) {
            var t = window.bindAddress.split(",");
            1 !== t.length && $.ajax({
                type: "get",
                url: "/manage/v4/website/open/bind/detail",
                data: {
                    layoutId: window.layoutId,
                    address: window.location.host
                },
                success: function(t) {
                    t = window.jhwApi.parseData(t),
                    t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
                }
            })
        }
    },
    getProductFavorite: function(e) {
        jhwApi.handleImplCount("getProductFavorite") || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/product/favorite",
            data: {
                layoutId: window.layoutId,
                productIds: e.productIds
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getPasswordResetCode: function(e) {
        jhwApi.handleImplCount("getPasswordResetCode") || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/member/password/reset/code",
            data: {
                layoutId: window.layoutId,
                enterpriseId: window.enterpriseId,
                username: e.username,
                verCode: e.verCode
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    passwordResetCodeCheck: function(e) {
        jhwApi.handleImplCount("passwordResetCodeCheck") || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/member/password/reset/code/check",
            data: {
                layoutId: window.layoutId,
                enterpriseId: window.enterpriseId,
                username: e.username,
                code: e.code
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    passwordResetCodeEdit: function(e) {
        jhwApi.handleImplCount("passwordResetCodeCheck") || $.ajax({
            type: "post",
            url: "/manage/v4/website/open/member/password/reset/edit",
            data: {
                layoutId: window.layoutId,
                enterpriseId: window.enterpriseId,
                username: e.username,
                code: e.code,
                password: e.password
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    },
    getJihuiGuanJiaQrcode: function(e) {
        jhwApi.handleImplCount("getJihuiGuanJiaQrcode") || $.ajax({
            type: "get",
            url: "/manage/v4/website/open/jihuiGuanJia",
            data: {
                layoutId: window.layoutId,
                enterpriseId: window.enterpriseId,
                time: e.time,
                url: e.url,
                domain: window.bindAddress || "",
                page: window.page,
                itemId: window.itemId
            },
            success: function(t) {
                t = window.jhwApi.parseData(t),
                t.success ? e.successFn && e.successFn.call(null, t) : e.errorFn && e.errorFn.call(null, t)
            }
        })
    }
},
UTIL.checkUrl(),
$("#verifyPic").attr("src", "/manage/v4/alphveriImg");
var SERVICE = {
    logout: function() {
        $.ajax({
            url: CONST.API + "/user/logout",
            success: function(e, t, n) {
                CONST.USER = {};
                var a = CONST.ADMIN_URL + "/rest/api/user/connect?redirectURL=" + encodeURIComponent("http://pc." + CONST.DOMAIN_TAIL + "/pc/index.html") + "&appId=Wxd939360915065e49&scope=snsapi_login_pc&responseType=code&state=aaa&domain=pc." + CONST.DOMAIN_TAIL + "&logout=true"
                  , o = $('<iframe id="ssoLoginoutIframe" src="" style="display:none;"></iframe>');
                $("body").append(o),
                o.attr("src", a),
                setTimeout(function() {
                    window.location.href = n.getResponseHeader("REQUIRES_AUTH_URL") + "&backURL=" + window.location.href
                }, 500)
            }
        })
    },
    initUserTest: function() {
        return CONST.USER = {
            username: "user01"
        },
        {
            done: function(e) {
                e({
                    attributes: {
                        data: {
                            username: "user01"
                        }
                    },
                    success: !0,
                    msg: ""
                })
            }
        }
    },
    initUser: function(e, t) {
        var n = new e;
        return n.hideTip = !0,
        n.stopCheckLogin = t,
        n.fetch({
            wait: !0,
            timeout: 5e3,
            success: function(e) {
                window.stopCheckLogin = !1,
                CONST.USER = e.attributes && e.attributes._response ? {} : e.attributes
            },
            error: function() {}
        })
    },
    initAdmin: function(e, t) {
        var n = new e;
        return n.hideTip = !0,
        n.stopCheckLogin = t,
        n.fetch({
            wait: !0,
            timeout: 5e3,
            success: function(e) {
                CONST.ADMIN = e.attributes && e.attributes._response ? {} : e.attributes
            },
            error: function() {}
        })
    },
    getCategory: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !0,
            cache: !0,
            defaults: !0,
            select: !0,
            text: "name",
            value: "categoryId",
            url: CONST.API + "/wcdCategory/list?type=wcd"
        }, e))
    },
    getChildModuleList: function(e) {
        return (new BbaseService).factory({
            url: CONST.API + "/modules/list" + (BbaseEst.isEmpty(e) ? "" : "/" + e),
            session: !1,
            cache: !1
        })
    },
    getLaymodList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            defaults: !0,
            defaultValue: "",
            tree: !0,
            extend: !0,
            rootKey: "parentId",
            rootValue: null,
            categoryId: "moduleId",
            belongId: "parentId",
            childTag: "cates",
            text: "type",
            value: "moduleId",
            url: CONST.API + "/modules/listAll"
        }, e))
    },
    getModuleHtml: function(e) {
        return (new BbaseService).factory({
            url: CONST.API + "/common/module/detail/html/" + e
        })
    },
    copyModuleHtml: function(e, t, n) {
        return (new BbaseService).factory({
            url: CONST.API + "/common/module/copy/html/" + t + "/" + e + "/" + (n || "-")
        })
    },
    getSubCategory: function(e) {
        return BbaseEst.isEmpty(e.id) && (e.id = 99999),
        (new BbaseService).factory(BbaseEst.extend({
            session: !0,
            cache: !0,
            select: !0,
            defaults: !0,
            text: "name",
            value: "categoryId",
            url: CONST.API + "/wcdCategory/list?pageSize=1000&type=wcd&parentId=" + e.id
        }, e))
    },
    getProductList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            pageSize: 100,
            text: "name",
            value: "product_id",
            url: CONST.API + "/product/list"
        }, e))
    },
    getNewsList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            pageSize: 100,
            text: "title",
            value: "news_id",
            url: CONST.API + "/news/list"
        }, e))
    },
    getPorductCateList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            defaults: !0,
            defaultValue: "",
            tree: !0,
            pageSize: 50,
            extend: !0,
            rootKey: "isroot",
            rootValue: "01",
            categoryId: "category_id",
            belongId: "belong_id",
            childTag: "cates",
            text: "name",
            value: "category_id",
            url: CONST.API + "/category/product/list"
        }, e))
    },
    getPorductCateListAll: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            defaults: !0,
            defaultValue: "",
            tree: !0,
            pageSize: 50,
            extend: !0,
            rootKey: "isroot",
            rootValue: "01",
            categoryId: "category_id",
            belongId: "belong_id",
            childTag: "cates",
            text: "name",
            value: "category_id",
            url: CONST.API + "/category/product/listAll"
        }, e))
    },
    getNewsCateList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            defaults: !0,
            defaultValue: "",
            tree: !0,
            pageSize: 50,
            extend: !0,
            rootKey: "isroot",
            rootValue: "01",
            categoryId: "category_id",
            belongId: "belong_id",
            childTag: "cates",
            text: "name",
            value: "category_id",
            url: CONST.API + "/category/news/list"
        }, e))
    },
    getlanList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !0,
            select: !0,
            text: "name",
            value: "id",
            url: CONST.API + "/admin/lan/list"
        }, e))
    },
    getgradeList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !0,
            select: !0,
            text: "name",
            value: "gdesc",
            url: CONST.API + "/admin/grade/list"
        }, e))
    },
    getSjCategory: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !0,
            cache: !0,
            defaults: !0,
            select: !0,
            text: "name",
            value: "categoryId",
            url: CONST.API + "/sjCategory/list"
        }, e))
    },
    getSubSjCategory: function(e) {
        return BbaseEst.isEmpty(e.id) && (e.id = 99999),
        (new BbaseService).factory(BbaseEst.extend({
            session: !0,
            cache: !0,
            select: !0,
            defaults: !0,
            text: "name",
            value: "categoryId",
            url: CONST.API + "/sjCategory/list?pageSize=1000&parentId=" + e.id
        }, e))
    },
    getSceneList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            text: "name",
            value: "id",
            url: CONST.API + "/layout/scene"
        }, e))
    },
    initSjCategory: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            url: CONST.API + "/wcdCategory/list?type=wcd",
            rootKey: "parentId",
            rootValue: 0,
            categoryId: "categoryId",
            belongId: "parentId",
            childTag: "cates",
            text: "name",
            value: "categoryId"
        }, e))
    },
    getFormList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            url: CONST.API + "/form/list"
        }, e))
    },
    getAreaList: function(e) {
        return (new BbaseService).factory(BbaseEst.extend({
            session: !1,
            cache: !1,
            select: !0,
            text: "name",
            value: "id",
            url: CONST.API + "/area/ajaxChildrenArea?path=" + e.id || ""
        }, e))
    }
};
Bbase.MODULE.BbaseJquery = "vendor/bbase/bbase_jquery.min.js",
Bbase.MODULE["dialog-plus"] = "vendor/artDialog_v6/dialog-plus.js",
Bbase.MODULE.quill = "vendor/quill/quill.js",
Bbase.MODULE.BbasePagination = "ui/bbase/pagination/controllers/BbasePagination.js",
Bbase.MODULE.BbaseTab = "ui/bbase/tab/controllers/BbaseTab.js",
Bbase.DIRECTIVE.bbaseuitab = {
    bind: function(e, t) {
        bbasetab.apply(this, [e, t])
    }
},
Bbase.DIRECTIVE.bbaseuitabnormal = {
    bind: function(e, t) {
        bbasetab.apply(this, [e, t, "tab-ul-normal"])
    }
},
Bbase.DIRECTIVE.bbaseuitabline = {
    bind: function(e, t) {
        bbasetab.apply(this, [e, t, "tab-ul-line"])
    }
},
Bbase.DIRECTIVE.bbaseuitabtext = {
    bind: function(e, t) {
        bbasetab.apply(this, [e, t, "tab-ul-text"])
    }
},
Bbase.DIRECTIVE.bbaseuitabbtn = {
    bind: function(e, t) {
        bbasetab.apply(this, [e, t, "tab-ul-btn"])
    }
},
Bbase.DIRECTIVE.bbaseuitabblock = {
    bind: function(e, t) {
        bbasetab.apply(this, [e, t, "tab-ul-block"])
    }
},
Bbase.DIRECTIVE.bbaseuitabunderline = {
    bind: function(e, t) {
        bbasetab.apply(this, [e, t, "tab-ul-underline"])
    }
},
Bbase.MODULE.BbaseSelect = "ui/bbase/select/controllers/BbaseSelect.js",
Bbase.DIRECTIVE.bbaseuiselect = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "items"]);
        this._require(["BbaseSelect"], function(e) {
            var a = n.viewId;
            this._region(a, e, {
                el: this.$(t),
                target: n.target,
                postData: n.postData,
                cur: "undefined" != typeof this._get(n.cur) ? this._get(n.cur) : n["default"],
                items: this._get(n.items) || n.items,
                width: n.width,
                fix: n.fix,
                fixed: n.fixed,
                search: n.search,
                onChange: this._bind(function(e, t, a, o) {
                    return "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || t || this._set(n.cur, e.value),
                    n.onChange ? n.onChange.apply(this, [e, t, a, o]) : void 0
                })
            }),
            "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || this._watch([n.cur], "", function() {
                this._view(a).setValue(this._get(n.cur))
            }),
            this._watch([n.items], "", function() {
                this._view(a).setList(this._get(n.items))
            })
        })
    }
},
Bbase.MODULE.BbaseItemCheck = "ui/bbase/item_check/controllers/BbaseItemCheck.js",
Bbase.DIRECTIVE.bbaseuiradio = {
    bind: function(e, t) {
        bbaseItemCheck.apply(this, [e, t, "radio"])
    }
},
Bbase.DIRECTIVE.bbaseuicheckbox = {
    bind: function(e, t) {
        bbaseItemCheck.apply(this, [e, t, "checkbox"])
    }
},
Bbase.DIRECTIVE.bbaseuiitemtab = {
    bind: function(e, t) {
        bbaseItemCheck.apply(this, [e, t, "tab"])
    }
},
Bbase.DIRECTIVE.bbaseuiitemcheck = {
    bind: function(e, t) {
        bbaseItemCheck.apply(this, [e, t, "normal"])
    }
},
Bbase.DIRECTIVE.bbaseuiitemtext = {
    bind: function(e, t) {
        bbaseItemCheck.apply(this, [e, t, "text"])
    }
},
Bbase.DIRECTIVE.bbaseuiitembtn = {
    bind: function(e, t) {
        bbaseItemCheck.apply(this, [e, t, "btn"])
    }
},
Bbase.MODULE.BbaseDropDown = "ui/bbase/dropdown/controllers/BbaseDropDown.js",
Bbase.DIRECTIVE.bbaseuidropdown = {
    bind: function(e, t) {
        baseBbaseDropdown.apply(this, [e, t, null])
    }
},
Bbase.DIRECTIVE.bbaseuidropdownwin = {
    bind: function(e, t) {
        baseBbaseDropdown.apply(this, [e, t, "win"])
    }
},
Bbase.DIRECTIVE.bbaseuidropdownwix = {
    bind: function(e, t) {
        baseBbaseDropdown.apply(this, [e, t, "wix"])
    }
},
Bbase.MODULE.BbaseSlider = "ui/bbase/slider/controllers/BbaseSlider.js",
Bbase.DIRECTIVE.bbaseuislider = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur");
        this._require(["BbaseSlider"], function(e) {
            var a = n.viewId;
            this._region(a, e, {
                el: this.$(t),
                start: this._get(n.cur) || n["default"] || n.cur || [10],
                step: n.step || 1,
                range: n.range || {
                    min: 0,
                    max: 100
                },
                width: n.width,
                onSlide: this._bind(n.onSlide),
                onSet: this._bind(n.onSet),
                onStart: this._bind(n.onStart),
                onEnd: this._bind(n.onEnd),
                onUpdate: this._bind(n.onUpdate),
                onChange: this._bind(function(e, t, a) {
                    return "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || a || this._set(n.cur, e[0]),
                    n.onChange ? n.onChange.apply(this, [e, t, a]) : void 0
                })
            }),
            "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || this._watch([n.cur], "", function() {
                this._view(a).setValue(this._get(n.cur))
            })
        })
    }
},
Bbase.MODULE.BbaseScrollbar = "ui/bbase/scrollbar/controllers/BbaseScrollbar.js",
Bbase.DIRECTIVE.bbaseuiscrollbar = {
    bind: function(e, t) {
        var n = this._getObject(e);
        return n.id = n.id || "iscroll",
        this.$(t).css({
            position: "relative",
            overflow: "hidden"
        }),
        this._require(["BbaseScrollbar"], function(e) {
            var a = this
              , o = null != navigator.userAgent.toLowerCase().match(/(iPad|ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i);
            a[n.id] = new e(a.$(t).get(0),{
                click: "boolean" === BbaseEst.typeOf(n.click) ? n.click : !0,
                mouseWheel: "boolean" === BbaseEst.typeOf(n.mouseWheel) ? n.mouseWheel : !0,
                scrollbars: "boolean" === BbaseEst.typeOf(n.scrollbars) ? n.mouseWheel : !0,
                fadeScrollbars: "boolean" === BbaseEst.typeOf(n.fadeScrollbars) ? n.fadeScrollbars : !0,
                disableMouse: "boolean" === BbaseEst.typeOf(n.disableMouse) ? n.disableMouse : o ? !0 : !1,
                disablePointer: "boolean" === BbaseEst.typeOf(n.disablePointer) ? n.mouseWheel : !0,
                preventFormClick: "boolean" === BbaseEst.typeOf(n.preventFormClick) ? n.preventFormClick : !0,
                interactiveScrollbars: "boolean" === BbaseEst.typeOf(n.interactiveScrollbars) ? n.mouseWheel : !0,
                preventDefault: "boolean" === BbaseEst.typeOf(n.preventDefault) ? n.preventDefault : !1
            }),
            n.disableMouseMove && ($(a[n.id].scroller).on("mousedown", function() {
                $(a[n.id].scroller).off("mousemove").on("mousemove", function(e) {
                    e.stopImmediatePropagation()
                })
            }),
            $(a[n.id].scroller).on("mouseup", function() {
                $(a[n.id].scroller).off("mousemove")
            }))
        }),
        {
            id: n.id
        }
    },
    show: function(e) {
        var t = this;
        e.id = e.id || "iscroll",
        t[e.id] && (t[e.id].refresh(),
        t[e.id].on("scrollEnd", function() {
            this.y == this.minScrollY && e.minScroll && e.minScroll.call(t),
            this.y == this.maxScrollY && e.maxScroll && e.maxScroll.call(t)
        }))
    },
    unbind: function(e) {
        this[e.id] && (this[e.id].disable && this[e.id].disable(),
        this[e.id] = null)
    }
},
Bbase.MODULE.BbaseSortable = "ui/bbase/sortable/controllers/BbaseSortable.js",
Bbase.DIRECTIVE.bbaseuisortable = {
    bind: function(e, t) {
        var n = this
          , a = this._getObject(e);
        a.id = a.id || "sortable",
        this._require(["BbaseSortable"], function(e) {
            this[a.id] = e.create(this.$(t).get(0), {
                animation: 150,
                handle: a.handle || "li",
                draggable: a.draggable || "li",
                onStart: function() {},
                onEnd: this._bind(function(e) {
                    var t = []
                      , o = null;
                    !this._options.subRender && this._insertOrder ? this._insertOrder(e.oldIndex, e.newIndex, function(t) {
                        a.onEnd && a.onEnd.call(this, e, t, !1)
                    }) : this._options.subRender && this._insertOrder ? (o = this.list.children(),
                    o.each(function(a) {
                        var o = this;
                        a >= Math.min(e.oldIndex, e.newIndex) && a <= Math.max(e.newIndex, e.oldIndex) && n._super("view").collection.each(function(e) {
                            (e.view ? e.view.cid : e.cid) === $(o).attr("data-cid") && t.push(e)
                        })
                    }),
                    a.onEnd && a.onEnd.call(this, e, t, !0)) : this._super("view") && this._super("view")._insertOrder ? (o = $(e.target).children(),
                    o.each(function(a) {
                        var o = this;
                        a >= Math.min(e.oldIndex, e.newIndex) && a <= Math.max(e.newIndex, e.oldIndex) && n._super("view").collection.each(function(e) {
                            (e.view ? e.view.cid : e.cid) === $(o).attr("data-cid") && t.push(e)
                        })
                    }),
                    a.onEnd && a.onEnd.call(this, e, t, !0)) : a.onEnd && a.onEnd.call(this, e)
                })
            })
        })
    },
    show: function() {},
    unbind: function(e) {
        this[e.id] && (this[e.id].disable && this[e.id].disable(),
        this[e.id] = null)
    }
},
Bbase.MODULE.BbaseListExpand = "ui/bbase/list_expand/controllers/BbaseListExpand.js",
Bbase.DIRECTIVE.bbaseuilistexpand = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur");
        n.path = n.path || "id",
        this._require(["BbaseListExpand"], function(e) {
            this._region(n.viewId, e, {
                el: this.$(t),
                cur: this._get(n.cur) || n["default"] || n.cur,
                path: n.path,
                postData: n.postData,
                items: n.items,
                listApi: n.listApi,
                max: n.max,
                cache: n.cache,
                fadeScrollbars: n.fadeScrollbars,
                session: n.session,
                height: n.height,
                onChange: this._bind(function(e, t, a, o) {
                    return "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || t || this._set(n.cur, e[n.path]),
                    n.onChange ? n.onChange.apply(this, [e, t, a, o]) : void 0
                })
            }),
            "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || this._watch([n.cur], "", function() {
                this._view(n.viewId).setValue(this._get(n.cur))
            })
        })
    },
    unbind: function() {}
},
Bbase.MODULE.BbaseDialog = "ui/bbase/dialog/controllers/BbaseDialog.js",
Bbase.DIRECTIVE.bbaseuidialog = {
    bind: function(e, t) {
        var n = this._getObject(e)
          , a = n.viewId || BbaseEst.nextUid("bbaseuidialog");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                moduleId: n.moduleId,
                title: n.title,
                target: n.follow ? $(t).get(0) : n.target ? $(n.target).get(0) : null,
                width: n.width || "auto",
                height: n.height || "auto",
                left: n.mouse ? e.pageX : void 0,
                top: n.mouse ? e.pageY : void 0,
                cover: n.cover,
                data: BbaseEst.extend({
                    id: n.id
                }, n.data || {}),
                content: n.content,
                quickClose: n.quickClose,
                onClose: n.onClose,
                align: n.align,
                onReady: this._bind(function() {
                    BbaseApp.getCurrentDialog().reset(),
                    n.onReady && n.onReady.call(this, arguments.length > 0 ? arguments.slice(0) : null)
                }),
                afterShow: function() {
                    BbaseApp.getCurrentDialog().reset()
                },
                onChange: this._bind(function() {
                    n.onChange && n.onChange.call(this, arguments.length > 0 ? arguments.slice(0) : null)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseCopy = "ui/bbase/copy/controllers/BbaseCopy.js",
Bbase.DIRECTIVE.bbaseuicopy = {
    bind: function(e, t) {
        var n = this
          , a = this._getObject(e, "cur");
        a.id = a.id || BbaseEst.nextUid("copy"),
        this._require(["BbaseCopy"], function(e) {
            var o = n.$(t);
            this[a.id] = new e(o.get(0),{
                text: function() {
                    return n._get(a.cur) || a["default"]
                }
            }),
            this[a.id].on("success", function(e) {
                BbaseUtils.tip("已复制", {
                    target: e.trigger,
                    time: 1e3,
                    align: "top",
                    skin: "copy-tip"
                }),
                a.success && a.success.call(n, e)
            }),
            this[a.id].on("error", function(e) {
                BbaseUtils.tip("复制失败", {
                    target: e.trigger
                }),
                a.error && a.error.call(n, e)
            })
        })
    },
    unbind: function(e) {
        this[e.id] && (this[e.id].destory && this[e.id].destory(),
        this[e.id] = null)
    }
},
Bbase.MODULE.BbaseDatePicker = "ui/bbase/date_picker/controllers/BbaseDatePicker.js",
Bbase.DIRECTIVE.bbaseuidatepicker = {
    bind: function(e, t) {
        var n = this
          , a = this._getObject(e, "cur");
        a.id = a.id || BbaseEst.nextUid("datepicker"),
        a.theme = a.theme || "01",
        this._require(["BbaseDatePicker"], function() {
            var e = n.$(t);
            "01" === a.theme ? e.dateDrop({
                animate: !1,
                format: "Y-m-d",
                maxYear: "2100"
            }) : "02" === a.theme && e.dateDropper(),
            e.change(function() {
                "undefined" == typeof n._get(a.cur) || BbaseEst.isEmpty(a.cur) || n._set(a.cur, $(this).val())
            })
        })
    },
    unbind: function(e) {
        this[e.id] && (this[e.id].destory && this[e.id].destory(),
        this[e.id] = null)
    }
},
Bbase.MODULE.NewcomerTip = "ui/bbase/newcomer_tip/controllers/NewcomerTip.js";
var doNewcomerTip = function(e, t) {
    var n = this;
    n._require(["NewcomerTip"], function(a) {
        var o = e.viewId;
        if (e.beforeTip) {
            var i = e.beforeTip.call(n);
            if ("boolean" === BbaseEst.typeOf(i) && !i)
                return
        }
        n._region(o, a, {
            el: n.$(t),
            cur: n._get(e.cur) || e["default"] || e.cur,
            items: n._get(e.items) || [],
            top: e.top,
            left: e.left,
            width: e.width,
            height: e.height,
            onChange: n._bind(function(t, a, o, i) {
                return e.onChange ? e.onChange.apply(n, [t, a, o, i]) : void 0
            })
        })
    })
};
Bbase.DIRECTIVE.bbaseuinewcomertip = {
    bind: function(e, t) {
        var n = this
          , a = n._getObject(e, ["cur", "items"]);
        a.id = a.id || BbaseEst.nextUid("bbaseUid"),
        a.viewId = a.viewId || BbaseEst.nextUid("BbaseViewUid");
        var o = !1
          , o = BbaseApp.getSession("_NewcomerTip_" + a.viewId, !1, !0);
        BbaseApp.addSession("_NewcomerTip_" + a.viewId, !0),
        n._set(a.cur, !1),
        "undefined" == typeof n.model.attributes[a.cur] || BbaseEst.isEmpty(a.cur) || n._watch([a.cur], "", function() {
            var e = n._getBoolean(a.cur);
            e && (n._set(a.cur, !1),
            setTimeout(function() {
                doNewcomerTip.call(n, a, t)
            }, a.delay || 1e3))
        }),
        (BbaseEst.isEmpty(o) || !o) && setTimeout(function() {
            doNewcomerTip.call(n, a, t)
        }, a.delay || 1e3)
    },
    show: function() {},
    update: function() {},
    unbind: function() {}
},
Bbase.MODULE.BbasePhotoPick = "components/bbase/photopick/controllers/BbasePhotoPick.js",
Bbase.DIRECTIVE.bbasecomponentphotopick = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentphotopick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                moduleId: "BbasePhotoPick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 542,
                items: n.items,
                listApi: n.listApi,
                detailApi: n.detailApi,
                uploadApi: n.uploadApi,
                systemAlbumApi: n.systemAlbumApi,
                showSystem: n.showSystem,
                showGroup: n.showGroup,
                albumListApi: n.albumListApi,
                albumAddApi: n.albumAddApi,
                albumDelApi: n.albumDelApi,
                albumEditApi: n.albumEditApi,
                albumAddName: n.albumAddName || "name",
                albumId: n.albumId || "all",
                size: n.size,
                quickClose: !0,
                onChange: this._bind(function(e) {
                    this._set(n.cur, e[0].serverPath),
                    n.onChange && n.onChange.call(this, e)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.Jcrop = "components/bbase/photocrop/vendor/Jcrop/js/jquery.Jcrop.js",
Bbase.MODULE.Cropper = "components/bbase/photocrop/vendor/cropper/cropper.min.js",
Bbase.MODULE.BbasePhotoCrop = "components/bbase/photocrop/controllers/BbasePhotoCrop.js",
Bbase.MODULE.BbasePhotoCropCropper = "components/bbase/photocrop/controllers/BbasePhotoCropCropper.js",
Bbase.DIRECTIVE.bbasecomponentphotocrop = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentmusicpick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                moduleId: "BbasePhotoCrop",
                cover: !0,
                quickClose: !1,
                width: n.width || 350,
                height: n.height || 425,
                data: {
                    boxWidth: n.width || 350,
                    boxHeight: n.height || 350,
                    picWidth: n.picWidth,
                    picHeight: n.picHeight,
                    cropWidth: n.cropWidth,
                    cropHeight: n.cropHeight,
                    pos: n.pos,
                    prefix: n.prefix,
                    cutApi: n.cutApi,
                    image: this._get(n.cur) || n["default"] || n.cur
                },
                onChange: this._bind(function(e, t, a, o) {
                    this._set(n.cur, e[0].serverPath),
                    n.onChange && n.onChange.call(this, e, t, a, o)
                }),
                onCancel: this._bind(function() {
                    n.onCancel && n.onCancel.call(this)
                })
            }),
            !1
        }))
    }
},
Bbase.DIRECTIVE.bbasecomponentphotocropcropper = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentmusicpickcropper");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                moduleId: "BbasePhotoCropCropper",
                cover: !0,
                quickClose: !1,
                width: n.width || 350,
                height: n.height || 425,
                data: {
                    boxWidth: n.width || 350,
                    boxHeight: n.height || 350,
                    picWidth: n.picWidth,
                    picHeight: n.picHeight,
                    cropWidth: n.cropWidth,
                    cropHeight: n.cropHeight,
                    pos: n.pos,
                    prefix: n.prefix,
                    cutApi: n.cutApi,
                    image: this._get(n.cur) || n["default"] || n.cur
                },
                onChange: this._bind(function(e, t, a, o) {
                    this._set(n.cur, e[0].serverPath),
                    n.onChange && n.onChange.call(this, e, t, a, o)
                }),
                onCancel: this._bind(function() {
                    n.onCancel && n.onCancel.call(this)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseMusicPick = "components/bbase/musicpick/controllers/BbaseMusicPick.js",
Bbase.DIRECTIVE.bbasecomponentmusicpick = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentmusicpick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                moduleId: "BbaseMusicPick",
                viewId: a,
                width: n.width || 876,
                cover: !0,
                height: n.height || 542,
                items: n.items,
                listApi: n.listApi,
                detailApi: n.detailApi,
                cache: n.cache,
                session: n.session,
                quickClose: !0,
                onChange: this._bind(function(e) {
                    this._set(n.cur, e[0].serverPath),
                    n.onChange && n.onChange.call(this, e)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbasePhotoBeautify = "components/bbase/photobeautify/controllers/BbasePhotoBeautify.js",
Bbase.MODULE.Xiuxiu = "components/bbase/photobeautify/vendor/xiuxiu.js",
Bbase.DIRECTIVE.bbasecomponentphotobeautify = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentmusicpick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                moduleId: "BbasePhotoBeautify",
                viewId: a,
                width: n.width || 876,
                cover: !0,
                height: n.height || 542,
                quickClose: !0,
                cur: this._get(n.cur) || n["default"] || n.cur,
                onChange: this._bind(function(e) {
                    this._set(n.cur, e[0].serverPath),
                    n.onChange && n.onChange.call(this, e)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseColorPick = "components/bbase/colorpick/controllers/BbaseColorPick.js",
Bbase.DIRECTIVE.bbasecomponentcolorpick = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentcolorpick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                moduleId: "BbaseColorPick",
                width: n.width || 400,
                cover: !0,
                height: n.height || 256,
                target: n.target ? this.$(n.target).get(0) : null,
                quickClose: !0,
                color: this._get(n.cur) || n["default"] || n.cur || "#ffffff",
                onChange: this._bind(function(e, t, a) {
                    t || this._set(n.cur, n.hex ? a : e),
                    n.onChange && n.onChange.call(this, e, t, a)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseColorPanel = "components/bbase/colorpanel/controllers/BbaseColorPanel.js",
Bbase.DIRECTIVE.bbasecomponentcolorpanel = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentcolorpanel");
        this._require(["BbaseColorPanel"], function(e) {
            this._region(a, e, {
                el: this.$(t),
                color: this._get(n.cur) || n["default"] || n.cur || "#ffffff",
                onChange: BbaseEst.proxy(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                }, this)
            })
        })
    }
},
Bbase.MODULE.BbaseIconPick = "components/bbase/iconpick/controllers/BbaseIconPick.js",
Bbase.DIRECTIVE.bbasecomponenticonpick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "iconColor", "iconColorState"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponenticonpick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                moduleId: "BbaseIconPick",
                icon: this._get(n.cur) || n["default"] || n.cur,
                iconColorState: this._get(n.iconColorState),
                iconColor: this._get(n.iconColor),
                font: n.font,
                width: n.width || 518,
                cover: !0,
                items: n.items,
                postData: n.postData,
                height: n.height || 335,
                showTypeSelect: n.showTypeSelect,
                showSearch: n.showSearch,
                iconType: n.iconType || "default",
                iconTypeItems: n.iconTypeItems,
                quickClose: !0,
                onChange: this._bind(function(e) {
                    this._set(n.cur, e.icon),
                    n.iconColor && this._set(n.iconColor, e.iconColor),
                    n.iconColorState && this._set(n.iconColorState, e.iconColorState),
                    n.onChange && n.onChange.call(this, e)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseIconPanel = "components/bbase/iconpanel/controllers/BbaseIconPanel.js",
Bbase.DIRECTIVE.bbasecomponenticonpanel = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponenticonpanel");
        this._require(["BbaseIconPanel"], function(e) {
            this._region(a, e, {
                el: this.$(t),
                cover: !0,
                postData: n.postData,
                width: n.width,
                height: n.height || 272,
                size: n.size,
                picSize: n.picSize,
                icon: this._get(n.cur) || n["default"] || n.cur,
                iconColorState: n.iconColorState,
                iconColor: n.iconColor,
                font: n.font,
                items: n.items,
                showTypeSelect: n.showTypeSelect,
                iconType: n.iconType,
                iconTypeItems: n.iconTypeItems,
                showSearch: n.showSearch,
                picItems: n.picItems,
                picListApi: n.picListApi,
                type: n.type,
                showGroup: n.showGroup,
                albumListApi: n.albumListApi,
                albumAddApi: n.albumAddApi,
                albumDelApi: n.albumDelApi,
                albumEditApi: n.albumEditApi,
                albumAddName: n.albumAddName || "name",
                onChange: BbaseEst.proxy(function(e) {
                    this._set(n.cur, e.icon),
                    n.iconColor && this._set(n.iconColor, e.iconColor),
                    n.iconColorState && this._set(n.iconColorState, e.iconColorState),
                    n.onChange && n.onChange.call(this, e)
                }, this)
            })
        }),
        "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || this._watch([n.cur], "", function() {
            this._view(a).setValue(this._get(n.cur))
        })
    }
},
Bbase.MODULE.BbasePhotoPanel = "components/bbase/photopanel/controllers/BbasePhotoPanel.js",
Bbase.DIRECTIVE.bbasecomponentphotopanel = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentphotopanel");
        this._require(["BbasePhotoPanel"], function(e) {
            this._region(a, e, {
                el: this.$(t),
                cur: this._get(n.cur) || n["default"] || "",
                listApi: n.listApi,
                systemAlbumApi: n.systemAlbumApi,
                items: n.items,
                width: n.width,
                size: n.size,
                showCropBtn: n.showCropBtn,
                showSystem: n.showSystem,
                showGroup: n.showGroup,
                albumListApi: n.albumListApi,
                albumAddApi: n.albumAddApi,
                albumDelApi: n.albumDelApi,
                albumEditApi: n.albumEditApi,
                albumAddName: n.albumAddName || "name",
                showBeautify: n.showBeautify,
                onCrop: this._bind(function(e) {
                    n.onCrop && n.onCrop.call(this, e)
                }),
                showSettingBtn: n.showSettingBtn,
                onChange: BbaseEst.proxy(function(e, t, a, o) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t, a, o)
                }, this)
            })
        }),
        "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || this._watch([n.cur], "", function() {
            this._view(a).setValue(this._get(n.cur))
        })
    }
},
Bbase.MODULE.BbaseNavigatorPanel = "components/bbase/navigator-panel/controllers/BbaseNavigatorPanel.js",
Bbase.DIRECTIVE.bbasecomponentnavigatorpanel = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentnavigatorpanel");
        this._require(["BbaseNavigatorPanel"], function(e) {
            this._region(a, e, {
                el: this.$(t),
                cur: this._get(n.cur) || n["default"] || "",
                listApi: n.listApi,
                detailApi: n.detailApi,
                baseId: n.baseId,
                items: n.items,
                width: n.width,
                path: n.path || "id",
                height: n.height,
                detailModule: n.detailModule,
                fadeScrollbars: n.fadeScrollbars,
                onChange: BbaseEst.proxy(function(e, t) {
                    e && (this._set(n.cur, e[n.path || "id"]),
                    n.onChange && n.onChange.call(this, e, t))
                }, this),
                onShow: this._bind(function() {
                    n.onShow && n.onShow.call(this)
                }),
                onSortEnd: this._bind(function(e, t) {
                    n.onSortEnd && n.onSortEnd.call(this, e, t)
                })
            }),
            "undefined" == typeof this.model.attributes[n.cur] || BbaseEst.isEmpty(n.cur) || this._watch([n.cur], "", function() {
                this._view(a).setValue(this._get(n.cur || "id"))
            }),
            this._watch([n.cur], "", function() {
                this._view(a).setValue(this._get(n.cur || "id"))
            })
        })
    }
},
Bbase.MODULE.BbaseNavigatorPick = "components/bbase/navigator-pick/controllers/BbaseNavigatorPick.js",
Bbase.DIRECTIVE.bbasecomponentnavigatorpick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "navigatorList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentnavigatorpick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择导航",
                moduleId: "BbaseNavigatorPick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                navigatorIdPath: n.navigatorIdPath,
                namePath: n.namePath,
                parentIdPath: n.parentIdPath,
                domain: n.domain,
                size: n.size,
                listApi: n.listApi,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    navigatorList: this._get(n.navigatorList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseAlbumPanel = "components/bbase/albumpanel/controllers/BbaseAlbumPanel.js",
Bbase.DIRECTIVE.bbasecomponentalbumpanel = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentalbumpanel");
        this._require(["BbaseAlbumPanel"], function(e) {
            this._region(a, e, {
                el: this.$(t),
                cur: this._get(n.cur) || n["default"] || "",
                listApi: n.listApi,
                items: n.items,
                width: n.width,
                size: n.size,
                mainPic: n.mainPic,
                manageHref: n.manageHref,
                domain: n.domain,
                showSettingBtn: n.showSettingBtn,
                onChange: BbaseEst.proxy(function(e, t) {
                    this._set(n.cur, e.albumId),
                    n.onChange && n.onChange.call(this, e, t)
                }, this)
            })
        })
    }
},
Bbase.MODULE.BbaseAlubmPick = "components/bbase/albumpick/controllers/BbaseAlbumPick.js",
Bbase.DIRECTIVE.bbasecomponentalbumpick = {
    bind: function(e, t) {
        var n = this._getObject(e, "cur")
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentalbumpick")
          , o = window.localStorage.getItem("token");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                moduleId: "BbaseAlubmPick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 585,
                cur: this._get(n.cur),
                items: n.items,
                listApi: n.listApi,
                detailApi: n.detailApi,
                size: n.size,
                domain: n.domain,
                quickClose: !0,
                manageHref: n.manageHref || CONST.ADMIN_URL + "/manage_v4/index.html?token=" + o + "&lanId=" + window.lanId + "#/album",
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e.album_id),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseAlbumTree = "components/bbase/albumtree/controllers/BbaseAlbumTree.js",
Bbase.DIRECTIVE.bbasecomponentalbumtree = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "categoryList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentalbumtree");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择相册分类",
                moduleId: "BbaseAlbumTree",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                categoryIdPath: n.categoryIdPath,
                imagePath: n.imagePath,
                namePath: n.namePath,
                parentIdPath: n.parentIdPath,
                domain: n.domain,
                manageHref: n.manageHref,
                size: n.size,
                listApi: n.listApi,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    categoryList: this._get(n.categoryList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseProductPick = "components/bbase/productpick/controllers/BbaseProductPick.js",
Bbase.DIRECTIVE.bbasecomponentproductpick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "productList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentproductpick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择产品",
                moduleId: "BbaseProductPick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                productIdPath: n.productIdPath,
                picPathPath: n.picPathPath,
                prodtypePath: n.prodtypePath,
                namePath: n.namePath,
                addTimePath: n.addTimePath,
                domain: n.domain,
                size: n.size,
                listApi: n.listApi,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    productList: this._get(n.productList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseNewsPick = "components/bbase/newspick/controllers/BbaseNewsPick.js",
Bbase.DIRECTIVE.bbasecomponentnewspick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "newsList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentnewspick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择新闻",
                moduleId: "BbaseNewsPick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                newsIdPath: n.newsIdPath,
                picPathPath: n.picPathPath,
                titlePath: n.titlePath,
                originPath: n.originPath,
                addTimePath: n.addTimePath,
                domain: n.domain,
                size: n.size,
                listApi: n.listApi,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    productList: this._get(n.productList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseProductCatePick = "components/bbase/product-cate-pick/controllers/BbaseProductCatePick.js",
Bbase.DIRECTIVE.bbasecomponentproductcatepick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "categoryList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentproductcatepick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择产品分类",
                moduleId: "BbaseProductCatePick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                categoryIdPath: n.categoryIdPath,
                imagePath: n.imagePath,
                namePath: n.namePath,
                parentIdPath: n.parentIdPath,
                domain: n.domain,
                size: n.size,
                listApi: n.listApi,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    categoryList: this._get(n.categoryList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseNewsCatePick = "components/bbase/news-cate-pick/controllers/BbaseNewsCatePick.js",
Bbase.DIRECTIVE.bbasecomponentnewscatepick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "categoryList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentnewscatepick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择新闻分类",
                moduleId: "BbaseNewsCatePick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                categoryIdPath: n.categoryIdPath,
                imagePath: n.imagePath,
                namePath: n.namePath,
                parentIdPath: n.parentIdPath,
                domain: n.domain,
                size: n.size,
                listApi: n.listApi,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    categoryList: this._get(n.categoryList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseAlbumCatePick = "components/bbase/album-cate-pick/controllers/BbaseAlbumCatePick.js",
Bbase.DIRECTIVE.bbasecomponentalbumcatepick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "categoryList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentalbumcatepick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择相册分类",
                moduleId: "BbaseAlbumCatePick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                categoryIdPath: n.categoryIdPath,
                imagePath: n.imagePath,
                namePath: n.namePath,
                parentIdPath: n.parentIdPath,
                domain: n.domain,
                size: n.size,
                listApi: n.listApi,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    categoryList: this._get(n.categoryList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.BbaseCategoryPick = "components/bbase/category-pick/controllers/BbaseCategoryPick.js",
Bbase.DIRECTIVE.bbasecomponentcategorypick = {
    bind: function(e, t) {
        var n = this._getObject(e, ["cur", "categoryList"])
          , a = n.viewId || BbaseEst.nextUid("bbasecomponentcategorypick");
        this.$(t).eq(0).click(this._bind(function(e) {
            return e.stopImmediatePropagation(),
            this._dialog({
                viewId: a,
                title: "选择分类",
                moduleId: "BbaseCategoryPick",
                width: n.width || 876,
                cover: !0,
                height: n.height || 522,
                items: n.items,
                categoryIdPath: n.categoryIdPath,
                imagePath: n.imagePath,
                namePath: n.namePath,
                parentIdPath: n.parentIdPath,
                domain: n.domain,
                size: n.size,
                listApi: n.listApi,
                type: n.cateType,
                data: {
                    cur: this._get(n.cur) || n["default"] || "",
                    categoryList: this._get(n.categoryList) || []
                },
                quickClose: !0,
                onChange: this._bind(function(e, t) {
                    this._set(n.cur, e),
                    n.onChange && n.onChange.call(this, e, t)
                })
            }),
            !1
        }))
    }
},
Bbase.MODULE.LinkComponent = "components/link/controllers/LinkComponent.js",
Bbase.MODULE.PreViewComponent = "components/pre_view/controllers/PreViewComponent.js",
Bbase.MODULE.DesignComponent = "components/design/controllers/DesignComponent.js",
Bbase.MODULE.IframeDialog = "components/design/controllers/IframeDialog.js",
Bbase.MODULE.FormComponent = "components/design/controllers/FormComponent.js",
Bbase.MODULE.OptionAppendComponent = "components/design/controllers/OptionAppendComponent.js",
Bbase.MODULE.MemberLogin = "modules/account/controllers/MemberLogin.js",
Bbase.MODULE.DesignCenter = "modules/design/controllers/DesignCenter.js",
Bbase.MODULE.DesignEditCenter = "modules/design/controllers/DesignEditCenter.js",
Bbase.MODULE.DesignModuleUse = "modules/design/controllers/DesignModuleUse.js",
Bbase.MODULE.DesignModuleAdd = "modules/design/controllers/DesignModuleAdd.js",
Bbase.MODULE.DesignSetting = "modules/design/controllers/DesignSetting.js",
Bbase.MODULE.DesignTheme = "modules/design/controllers/DesignTheme.js",
Bbase.MODULE.DesignBackupList = "modules/design/controllers/DesignBackupList.js",
Bbase.MODULE.DesignBackupLaymodList = "modules/design/controllers/DesignBackupLaymodList.js",
Bbase.MODULE.DesignIeTip = "modules/design/controllers/DesignIeTip.js",
Bbase.MODULE.DesignModuleReplace = "modules/design/controllers/DesignModuleReplace.js",
Bbase.MODULE.NavigateList = "modules/navigate/controllers/NavigateList.js",
Bbase.MODULE.NavigateListEdit = "modules/navigate/controllers/NavigateListEdit.js",
Bbase.MODULE.NavigateDetail = "modules/navigate/controllers/NavigateDetail.js",
Bbase.MODULE.NavigateLaymodCopy = "modules/navigate/controllers/NavigateLaymodCopy",
Bbase.DIRECTIVE.NavigateList = {
    bind: function(e, t) {
        var n = this._object = this._getObject(e);
        n.id = n.id || "NavigateList",
        this._require(["NavigateList"], function(e) {
            this._region("NavigateList", e, {
                el: this.$(t)
            })
        })
    },
    unbind: function() {}
},
Bbase.MODULE.TemplateAdd = "modules/template/controllers/TemplateAdd.js",
Bbase.MODULE.AdminCenter = "modules/admin/controllers/AdminCenter.js",
Bbase.MODULE.AdminModuleList = "modules/admin/controllers/AdminModuleList.js",
Bbase.MODULE.AdminModuleList01 = "modules/admin/controllers/AdminModuleList01.js",
Bbase.MODULE.AdminNavigatorList = "modules/admin/controllers/AdminNavigatorList.js",
Bbase.MODULE.AdminLogin = "modules/admin/controllers/AdminLogin.js",
Bbase.MODULE.AdminModuleDetail = "modules/admin/controllers/AdminModuleDetail.js",
Bbase.MODULE.AdminLayoutAudit = "modules/admin/controllers/AdminLayoutAudit.js",
Bbase.MODULE.AdminLayoutDetail = "modules/admin/controllers/AdminLayoutDetail.js",
Bbase.MODULE.AdminCategoryList = "modules/admin/controllers/AdminCategoryList.js",
Bbase.MODULE.AdminCategoryDetail = "modules/admin/controllers/AdminCategoryDetail.js",
Bbase.MODULE.AdminLangconfigList = "modules/admin/controllers/AdminLangconfigList.js",
Bbase.MODULE.AdminLayoutSetting = "modules/admin/controllers/AdminLayoutSetting.js",
Bbase.MODULE.AdminAuthorInfo = "modules/admin/controllers/AdminAuthorInfo.js",
Bbase.MODULE.AdminAlbumList = "modules/admin/controllers/AdminAlbumList.js",
Bbase.MODULE.AdminAlbumDetail = "modules/admin/controllers/AdminAlbumDetail.js",
Bbase.MODULE.AdminDomain = "modules/admin/controllers/AdminDomain.js",
Bbase.MODULE.AdminTagList = "modules/admin/controllers/AdminTagList.js",
Bbase.MODULE.AdminTagModuleList = "modules/admin/controllers/AdminTagModuleList.js",
Bbase.MODULE.AdminTool = "modules/admin/controllers/AdminTool.js",
Bbase.MODULE.AdminConfig = "modules/admin/controllers/AdminConfig.js",
Bbase.MODULE.AdminTemplateAudit = "modules/admin/controllers/AdminTemplateAudit.js",
Bbase.MODULE.AdminModuleAudit = "modules/admin/controllers/AdminModuleAudit.js",
Bbase.MODULE.AdminFunction = "modules/admin/controllers/AdminFunction.js",
Bbase.MODULE.AdminAnalysis = "modules/admin/controllers/AdminAnalysis.js",
Bbase.MODULE.AdminPastAudit = "modules/admin/controllers/AdminPastAudit.js",
Bbase.MODULE.AdminAgentOrderAudit = "modules/admin/controllers/AdminAgentOrderAudit.js",
Bbase.MODULE.AdminModuleOperatorList = "modules/admin/controllers/AdminModuleOperatorList.js",
Bbase.MODULE.SettingDomain = "modules/setting/controllers/SettingDomain.js",
Bbase.MODULE.SettingNormal = "modules/setting/controllers/SettingNormal.js",
Bbase.MODULE.SettingCache = "modules/setting/controllers/SettingCache.js",
Bbase.MODULE.SettingMobileUrl = "modules/setting/controllers/SettingMobileUrl.js",
Bbase.MODULE.SettingLanguage = "modules/setting/controllers/SettingLanguage.js",
Bbase.MODULE.SettingIco = "modules/setting/controllers/SettingIco.js",
Bbase.MODULE.SettingStatic = "modules/setting/controllers/SettingStatic.js",
Bbase.MODULE.SettingFunc = "modules/setting/controllers/SettingFunc.js",
Bbase.MODULE.SettingSafe = "modules/setting/controllers/SettingSafe.js",
Bbase.MODULE.SettingMainColor = "modules/setting/controllers/SettingMainColor.js",
Bbase.MODULE.FuncPdModByCateList = "modules/func/controllers/FuncPdModByCateList.js",
Bbase.MODULE.FuncNdModByCateList = "modules/func/controllers/FuncNdModByCateList.js",
Bbase.MODULE.FuncWeixinShare = "modules/func/controllers/FuncWeixinShare.js",
Bbase.MODULE.FuncPdModByDetailList = "modules/func/controllers/FuncPdModByDetailList.js",
Bbase.MODULE.FuncNdModByDetailList = "modules/func/controllers/FuncNdModByDetailList.js",
seajs.config({
    base: CONST.HOST,
    alias: Bbase.MODULE,
    paths: {
        bui: CONST.HOST + "/vendor/bui"
    },
    vars: {
        locale: "zh-cn"
    },
    map: [[/lib\/(.*).js/, CONST.LIB_FORDER + "/$1.js"], [/^(.*\.(?:css|js|html))(.*)$/i, "$1?" + UTIL.hash(CONST.APP_VERSION)]],
    debug: "undefined" == typeof CONST.DEBUG_SEAJS ? !1 : CONST.DEBUG_SEAJS,
    charset: "utf-8"
}),
UTIL.each(Bbase.TEMPLATE, function(e, t) {
    define(t, e)
}),
window.initApp = function() {
    if (UTIL.removeLoading(),
    window.location.href.indexOf("/site/design") > -1 && ($("html").addClass("design-html"),
    window.initDesign = !1,
    setTimeout(function() {
        window.initDesign || window.location.reload()
    }, 2e4),
    seajs.use(["BbaseJquery", "DesignCenter"], function(e, t) {
        var n = location.href.substring(0, location.href.indexOf("://"))
          , a = BbaseModel.extend({
            baseId: "userId",
            baseUrl: CONST.API + "/user/isLogin?scheme=" + n
        });
        BbaseEst.on("reRenderDesignCenter", function() {
            BbaseApp.addRegion("DesignCenter", t, {
                el: "#app-head",
                id: window.location.href.replace(/.+\/design\/(\d+)\/.*/gim, "$1")
            })
        }),
        SERVICE.initUser(a, !0).done(function(e) {
            e.attributes && e.attributes.data || (e.attributes = {
                data: {}
            }),
            window.stopRenderDesignCenter || BbaseEst.trigger("reRenderDesignCenter"),
            window.stopRenderDesignCenter = !0,
            setTimeout(function() {
                window.stopRenderDesignCenter = !1
            }, 5e3)
        })
    })),
    window.location.href.indexOf("/pc/admin") > -1 && seajs.use(["BbaseJquery", "AdminCenter"], function(e, t) {
        var n = BbaseModel.extend({
            baseId: "adminId",
            baseUrl: CONST.API + "/admin/isLogin"
        });
        BbaseEst.on("reRenderAdminCenter", function() {
            BbaseApp.addRegion("AdminCenter", t, {
                el: "#app-main"
            })
        }),
        SERVICE.initAdmin(n, !0).done(function(e) {
            e.attributes && e.attributes.data || (e.attributes = {
                data: {}
            }),
            BbaseEst.trigger("reRenderAdminCenter")
        })
    }),
    window.location.href.indexOf("/pc/index") > -1) {
        {
            window.localStorage.getItem("token")
        }
        return void (window.location.href = CONST.ADMIN_URL + "/manage_v4/index.html?token=" + tolen)
    }
}
,
window.getSsoCode = function() {
    UTIL.getSsoCode()
}
,
window.ssoLogin = function(e) {
    UTIL.ssoLogin(e)
}
,
(window.location.href.indexOf("/pc/") > -1 || window.location.href.indexOf("/site/design") > -1) && -1 === window.location.href.indexOf("/pc/admin") && -1 === window.location.href.indexOf("/pc/demo") ? ($("body").hide(),
seajs.use(["BbaseJquery"], function() {
    var e = location.href.substring(0, location.href.indexOf("://"))
      , t = UTIL.getUrlParam("token");
    t && t.length > 0 && window.localStorage.setItem("token", t),
    SERVICE.initUser(BbaseModel.extend({
        baseId: "userId",
        baseUrl: CONST.API + "/user/isLogin?scheme=" + e + "&token=" + t
    }), !0).done(function(n, a, o) {
        if (n && n.attributes && n.attributes.data)
            t ? window.location.href = UTIL.setUrlParam("token", "", null, !0) : ($("body").show(),
            window.initApp());
        else {
            n.attributes = {
                data: {}
            };
            var i = o.getResponseHeader("REQUIRES_AUTH_URL");
            i = window.location.href.indexOf("jihui88.com") > -1 ? i : i.replace("http://www.jihui88.com", CONST.ADMIN_URL),
            top && top.BbaseApp.getView("DesignComponent") ? top.BbaseApp.getView("DesignComponent").goToLoginPage(i + "&scheme=" + e) : window.location.href = i + "&scheme=" + e
        }
    })
})) : window.initApp(),
window.isLayoutEdit = function() {
    var e = !0;
    return "Admin_00000000000000000000000081" === CONST.USER.agentId && (e = !1),
    BbaseEst.isEmpty(CONST.USER.agentId) || (e = !1,
    window.webinfoLayoutEdit && "01" === window.webinfoLayoutEdit && (e = !0)),
    BbaseEst.isEmpty(CONST.USER.adminSubMemberId) || (e = !0),
    e
}
;
