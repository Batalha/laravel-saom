/*! jQuery v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, u = n.push, s = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, d = f.toString, p = d.call(Object), h = {}, g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }, v = function e(t) {
        return null != t && t === t.window
    }, y = {type: !0, src: !0, noModule: !0};

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)for (i in y)n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }

    var x = "3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector", w = function (e, t) {
        return new w.fn.init(e, t)
    }, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: x, constructor: w, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return w.each(this, e)
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, u = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == typeof a || g(a) || (a = {}), u === s && (a = this, u--); u < s; u++)if (null != (e = arguments[u]))for (t in e)n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && d.call(n) === p)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, globalEval: function (e) {
            m(e)
        }, each: function (e, t) {
            var n, r = 0;
            if (T(e)) {
                for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r]))break
            } else for (r in e)if (!1 === t.call(e[r], r, e[r]))break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(C, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, u = !n; o < a; o++)(r = !t(e[o], o)) !== u && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i, o = 0, u = [];
            if (T(e))for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && u.push(i); else for (o in e)null != (i = t(e[o], o, n)) && u.push(i);
            return a.apply([], u)
        }, guid: 1, support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function T(e) {
        var t = !!e && "length" in e && e.length, n = b(e);
        return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    var E = function (e) {
        var t, n, r, i, o, a, u, s, l, c, f, d, p, h, g, v, y, m, b, x = "sizzle" + 1 * new Date, w = e.document, C = 0, T = 0, E = ae(), N = ae(), k = ae(), A = function (e, t) {
            return e === t && (f = !0), 0
        }, D = {}.hasOwnProperty, S = [], L = S.pop, j = S.push, q = S.push, O = S.slice, P = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
            return -1
        }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", B = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]", M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", W = new RegExp(I + "+", "g"), $ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), F = new RegExp("^" + I + "*," + I + "*"), z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), _ = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"), U = new RegExp(M), V = new RegExp("^" + R + "$"), X = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + M),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + H + ")$", "i"),
            needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), ee = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function () {
            d()
        }, ie = me(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e)
        }, {dir: "parentNode", next: "legend"});
        try {
            q.apply(S = O.call(w.childNodes), w.childNodes), S[w.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: S.length ? function (e, t) {
                    j.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, u, l, c, f, h, y, m = t && t.ownerDocument, C = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, g)) {
                if (11 !== C && (f = K.exec(e)))if (o = f[1]) {
                    if (9 === C) {
                        if (!(l = t.getElementById(o)))return r;
                        if (l.id === o)return r.push(l), r
                    } else if (m && (l = m.getElementById(o)) && b(t, l) && l.id === o)return r.push(l), r
                } else {
                    if (f[2])return q.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)return q.apply(r, t.getElementsByClassName(o)), r
                }
                if (n.qsa && !k[e + " "] && (!v || !v.test(e))) {
                    if (1 !== C)m = t, y = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = x), u = (h = a(e)).length;
                        while (u--)h[u] = "#" + c + " " + ye(h[u]);
                        y = h.join(","), m = J.test(e) && ge(t.parentNode) || t
                    }
                    if (y)try {
                        return q.apply(r, m.querySelectorAll(y)), r
                    } catch (e) {
                    } finally {
                        c === x && t.removeAttribute("id")
                    }
                }
            }
            return s(e.replace($, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            return t
        }

        function ue(e) {
            return e[x] = !0, e
        }

        function se(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--)r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return ue(function (t) {
                return t = +t, ue(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, d = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== p && 9 === a.nodeType && a.documentElement ? (p = a, h = p.documentElement, g = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = se(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = se(function (e) {
                return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = G.test(p.getElementsByClassName), n.getById = se(function (e) {
                return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])if ((n = o.getAttributeNode("id")) && n.value === e)return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && g)return t.getElementsByClassName(e)
                }, y = [], v = [], (n.qsa = G.test(p.querySelectorAll)) && (se(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
            }), se(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (n.matchesSelector = G.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", M)
            }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = G.test(h.compareDocumentPosition), b = t || G.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return !0;
                return !1
            }, A = t ? function (e, t) {
                if (e === t)return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t)return f = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], u = [t];
                if (!i || !o)return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (i === o)return ce(e, t);
                n = e;
                while (n = n.parentNode)a.unshift(n);
                n = t;
                while (n = n.parentNode)u.unshift(n);
                while (a[r] === u[r])r++;
                return r ? ce(a[r], u[r]) : a[r] === w ? -1 : u[r] === w ? 1 : 0
            }, p) : p
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && d(e), t = t.replace(_, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (e) {
            }
            return oe(t, p, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && d(e), b(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var i = r.attrHandle[t.toLowerCase()], o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                while (t = e[o++])t === e[o] && (i = r.push(o));
                while (i--)e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += i(e)
                } else if (3 === o || 4 === o)return e.nodeValue
            } else while (t = e[r++])n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), u = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, s) {
                        var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, y = u && t.nodeName.toLowerCase(), m = !s && !u, b = !1;
                        if (v) {
                            if (o) {
                                while (g) {
                                    d = t;
                                    while (d = d[g])if (u ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                b = (p = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], d = p && v.childNodes[p];
                                while (d = ++p && d && d[g] || (b = p = 0) || h.pop())if (1 === d.nodeType && ++b && d === t) {
                                    c[e] = [C, p, b];
                                    break
                                }
                            } else if (m && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b)while (d = ++p && d && d[g] || (b = p = 0) || h.pop())if ((u ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) && ++b && (m && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]), d === t))break;
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)e[r = P(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: ue(function (e) {
                    var t = [], n = [], r = u(e.replace($, "$1"));
                    return r[x] ? ue(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), u = e.length;
                        while (u--)(o = a[u]) && (e[u] = !(t[u] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: ue(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: ue(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }), lang: ue(function (e) {
                    return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === h
                }, focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: pe(!1), disabled: pe(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !r.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2)e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2)e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})r.pseudos[t] = fe(t);
        for (t in{submit: !0, reset: !0})r.pseudos[t] = de(t);
        function ve() {
        }

        ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = oe.tokenize = function (e, t) {
            var n, i, o, a, u, s, l, c = N[e + " "];
            if (c)return t ? 0 : c.slice(0);
            u = e, s = [], l = r.preFilter;
            while (u) {
                n && !(i = F.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), n = !1, (i = z.exec(u)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace($, " ")
                }), u = u.slice(n.length));
                for (a in r.filter)!(i = X[a].exec(u)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), u = u.slice(n.length));
                if (!n)break
            }
            return t ? u.length : u ? oe.error(e) : N(e, s).slice(0)
        };
        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, u = T++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (1 === t.nodeType || a)return e(t, n, i);
                return !1
            } : function (t, n, s) {
                var l, c, f, d = [C, u];
                if (s) {
                    while (t = t[r])if ((1 === t.nodeType || a) && e(t, n, s))return !0
                } else while (t = t[r])if (1 === t.nodeType || a)if (f = t[x] || (t[x] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === C && l[1] === u)return d[2] = l[2];
                    if (c[o] = d, d[2] = e(t, n, s))return !0
                }
                return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function xe(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++)(o = e[u]) && (n && !n(o, r, i) || (a.push(o), l && t.push(u)));
            return a
        }

        function Ce(e, t, n, r, i, o) {
            return r && !r[x] && (r = Ce(r)), i && !i[x] && (i = Ce(i, o)), ue(function (o, a, u, s) {
                var l, c, f, d = [], p = [], h = a.length, g = o || xe(t || "*", u.nodeType ? [u] : u, []), v = !e || !o && t ? g : we(g, d, e, u, s), y = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, y, u, s), r) {
                    l = we(y, p), r(l, [], u, s), c = l.length;
                    while (c--)(f = l[c]) && (y[p[c]] = !(v[p[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--)(f = y[c]) && l.push(v[c] = f);
                            i(null, y = [], l, s)
                        }
                        c = y.length;
                        while (c--)(f = y[c]) && (l = i ? P(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else y = we(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, s) : q.apply(a, y)
            })
        }

        function Te(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], u = a || r.relative[" "], s = a ? 1 : 0, c = me(function (e) {
                return e === t
            }, u, !0), f = me(function (e) {
                return P(t, e) > -1
            }, u, !0), d = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i
            }]; s < o; s++)if (n = r.relative[e[s].type])d = [me(be(d), n)]; else {
                if ((n = r.filter[e[s].type].apply(null, e[s].matches))[x]) {
                    for (i = ++s; i < o; i++)if (r.relative[e[i].type])break;
                    return Ce(s > 1 && be(d), s > 1 && ye(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace($, "$1"), n, s < i && Te(e.slice(s, i)), i < o && Te(e = e.slice(i)), i < o && ye(e))
                }
                d.push(n)
            }
            return be(d)
        }

        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o = function (o, a, u, s, c) {
                var f, h, v, y = 0, m = "0", b = o && [], x = [], w = l, T = o || i && r.find.TAG("*", c), E = C += null == w ? 1 : Math.random() || .1, N = T.length;
                for (c && (l = a === p || a || c); m !== N && null != (f = T[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === p || (d(f), u = !g);
                        while (v = e[h++])if (v(f, a || p, u)) {
                            s.push(f);
                            break
                        }
                        c && (C = E)
                    }
                    n && ((f = !v && f) && y--, o && b.push(f))
                }
                if (y += m, n && m !== y) {
                    h = 0;
                    while (v = t[h++])v(b, x, a, u);
                    if (o) {
                        if (y > 0)while (m--)b[m] || x[m] || (x[m] = L.call(s));
                        x = we(x)
                    }
                    q.apply(s, x), c && !o && x.length > 0 && y + t.length > 1 && oe.uniqueSort(s)
                }
                return c && (C = E, l = w), b
            };
            return n ? ue(o) : o
        }

        return u = oe.compile = function (e, t) {
            var n, r = [], i = [], o = k[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Te(t[n]))[x] ? r.push(o) : i.push(o);
                (o = k(e, Ee(i, r))).selector = e
            }
            return o
        }, s = oe.select = function (e, t, n, i) {
            var o, s, l, c, f, d = "function" == typeof e && e, p = !i && a(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && g && r.relative[s[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))return n;
                    d && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                o = X.needsContext.test(e) ? 0 : s.length;
                while (o--) {
                    if (l = s[o], r.relative[c = l.type])break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), J.test(s[0].type) && ge(t.parentNode) || t))) {
                        if (s.splice(o, 1), !(e = i.length && ye(s)))return q.apply(n, i), n;
                        break
                    }
                }
            }
            return (d || u(e, p))(i, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = se(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), se(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && se(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
        }), se(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(H, function (e, t, n) {
            var r;
            if (!n)return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var N = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)if (1 === e.nodeType) {
            if (i && w(e).is(n))break;
            r.push(e)
        }
        return r
    }, k = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, A = w.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return s.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }

    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++)if (w.contains(i[t], this))return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++)w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(L(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(L(this, e || [], !0))
        }, is: function (e) {
            return !!L(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e)return this;
        if (n = n || j, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), S.test(i[1]) && w.isPlainObject(t))for (i in t)g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, j = w(r);
    var O = /^(?:parents|prev(?:Until|All))/, P = {children: !0, contents: !0, next: !0, prev: !0};
    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)if (w.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!A.test(e))for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function H(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }

    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return N(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return N(e, "parentNode", n)
        }, next: function (e) {
            return H(e, "nextSibling")
        }, prev: function (e) {
            return H(e, "previousSibling")
        }, nextAll: function (e) {
            return N(e, "nextSibling")
        }, prevAll: function (e) {
            return N(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return N(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return N(e, "previousSibling", n)
        }, siblings: function (e) {
            return k((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return k(e.firstChild)
        }, contents: function (e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (P[e] || w.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var I = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(I) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], u = -1, s = function () {
            for (i = i || e.once, r = t = !0; a.length; u = -1) {
                n = a.shift();
                while (++u < o.length)!1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1)
            }
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, l = {
            add: function () {
                return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                    })
                }(arguments), n && !t && s()), this
            }, remove: function () {
                return w.each(arguments, function (e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1)o.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || s()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    };
    function B(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = {
                state: function () {
                    return r
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, "catch": function (e) {
                    return i.then(null, e)
                }, pipe: function () {
                    var e = arguments;
                    return w.Deferred(function (t) {
                        w.each(n, function (n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, then: function (t, r, i) {
                    var o = 0;

                    function a(t, n, r, i) {
                        return function () {
                            var u = this, s = arguments, l = function () {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(u, s)) === n.promise())throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, B, i), a(o, n, M, i)) : (o++, l.call(e, a(o, n, B, i), a(o, n, M, i), a(o, n, B, n.notifyWith))) : (r !== B && (u = void 0, s = [e]), (i || n.resolveWith)(u, s))
                                }
                            }, c = i ? l : function () {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== M && (u = void 0, s = [e]), n.rejectWith(u, s))
                                }
                            };
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                        }
                    }

                    return w.Deferred(function (e) {
                        n[0][3].add(a(0, e, g(i) ? i : B, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : B)), n[2][3].add(a(0, e, g(r) ? r : M))
                    }).promise()
                }, promise: function (e) {
                    return null != e ? w.extend(e, i) : i
                }
            }, o = {};
            return w.each(n, function (e, t) {
                var a = t[2], u = t[5];
                i[t[1]] = a.add, u && a.add(function () {
                    r = u
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), u = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && (W(e, a.done(u(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then)))return a.then();
            while (n--)W(i[n], u(n), a.reject);
            return a.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && $.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;
    function z() {
        r.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), w.ready()
    }

    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
    var _ = function (e, t, n, r, i, o, a) {
        var u = 0, s = e.length, l = null == n;
        if ("object" === b(n)) {
            i = !0;
            for (u in n)_(e, t, u, n[u], !0, o, a)
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(w(e), n)
            })), t))for (; u < s; u++)t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
        return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
    }, U = /^-ms-/, V = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function Q(e) {
        return e.replace(U, "ms-").replace(V, X)
    }

    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = w.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)i[Q(t)] = n; else for (r in t)i[Q(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in r ? [t] : t.match(I) || []).length;
                    while (n--)delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var K = new G, J = new G, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = te(n)
            } catch (e) {
            }
            J.set(e, t, n)
        } else n = void 0;
        return n
    }

    w.extend({
        hasData: function (e) {
            return J.hasData(e) || K.hasData(e)
        }, data: function (e, t, n) {
            return J.access(e, t, n)
        }, removeData: function (e, t) {
            J.remove(e, t)
        }, _data: function (e, t, n) {
            return K.access(e, t, n)
        }, _removeData: function (e, t) {
            K.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--)a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Q(r.slice(5)), ne(o, r, i[r]));
                    K.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                J.set(this, e)
            }) : _(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = J.get(o, e)))return n;
                    if (void 0 !== (n = ne(o, e)))return n
                } else this.each(function () {
                    J.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                J.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                    empty: w.Callbacks("once memory").add(function () {
                        K.remove(e, [t + "queue", n])
                    })
                })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, u = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }, ue = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
    };

    function se(e, t, n, r) {
        var i, o, a = 20, u = r ? function () {
            return r.cur()
        } : function () {
            return w.css(e, t, "")
        }, s = u(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +s) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            s /= 2, l = l || c[3], c = +s || 1;
            while (a--)w.style(e, t, c + l), (1 - o) * (1 - (o = u() / s || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n)));
        for (o = 0; o < a; o++)null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    w.fn.extend({
        show: function () {
            return fe(this, !0)
        }, hide: function () {
            return fe(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i, pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? w.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }

    var me = /<|&#?\w+;/;

    function be(e, t, n, r, i) {
        for (var o, a, u, s, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)if ((o = e[p]) || 0 === o)if ("object" === b(o))w.merge(d, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), u = (pe.exec(o) || ["", ""])[1].toLowerCase(), s = ge[u] || ge._default, a.innerHTML = s[1] + w.htmlPrefilter(o) + s[2], c = s[0];
            while (c--)a = a.lastChild;
            w.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        f.textContent = "", p = 0;
        while (o = d[p++])if (r && w.inArray(o, r) > -1)i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++])he.test(o.type || "") && n.push(o)
        }
        return f
    }

    !function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var xe = r.documentElement, we = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function Ne() {
        return !1
    }

    function ke() {
        try {
            return r.activeElement
        } catch (e) {
        }
    }

    function Ae(e, t, n, r, i, o) {
        var a, u;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (u in t)Ae(e, u, n, r, t[u], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)i = Ne; else if (!i)return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }

    w.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = K.get(e);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(xe, i), n.guid || (n.guid = w.guid++), (s = v.events) || (s = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(I) || [""]).length;
                while (l--)p = g = (u = Te.exec(t[l]) || [])[1], h = (u[2] || "").split(".").sort(), p && (f = w.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = w.event.special[p] || {}, c = w.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = s[p]) || ((d = s[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[p] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = K.hasData(e) && K.get(e);
            if (v && (s = v.events)) {
                l = (t = (t || "").match(I) || [""]).length;
                while (l--)if (u = Te.exec(t[l]) || [], p = g = u[1], h = (u[2] || "").split(".").sort(), p) {
                    f = w.event.special[p] || {}, d = s[p = (r ? f.delegateType : f.bindType) || p] || [], u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;
                    while (o--)c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, p, v.handle), delete s[p])
                } else for (p in s)w.event.remove(e, p + t[l], n, r, !0);
                w.isEmptyObject(s) && K.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t = w.event.fix(e), n, r, i, o, a, u, s = new Array(arguments.length), l = (K.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (s[0] = t, n = 1; n < arguments.length; n++)s[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                u = w.event.handlers.call(this, t, l), n = 0;
                while ((o = u[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, s)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, u = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && !("click" === e.type && e.button >= 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < s; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && u.push({elem: l, handlers: o})
            }
            return l = this, s < t.length && u.push({elem: l, handlers: t.slice(s)}), u
        }, addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent)return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent)return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ke() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === ke() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && D(this, "input"))return this.click(), !1
                }, _default: function (e) {
                    return D(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event))return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return Ae(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Se = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function He(e, t) {
        var n, r, i, o, a, u, s, l;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (o = K.access(e), a = K.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)for (n = 0, r = l[i].length; n < r; n++)w.event.add(t, i, l[i][n])
            }
            J.hasData(e) && (u = J.access(e), s = w.extend({}, u), J.set(t, s))
        }
    }

    function Ie(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, u, s, l, c, f = 0, d = e.length, p = d - 1, v = t[0], y = g(v);
        if (y || d > 1 && "string" == typeof v && !h.checkClone && Le.test(v))return e.each(function (i) {
            var o = e.eq(i);
            y && (t[0] = v.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (d && (i = be(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = (u = w.map(ve(i, "script"), Oe)).length; f < d; f++)l = i, f !== p && (l = w.clone(l, !0, !0), s && w.merge(u, ve(l, "script"))), n.call(e[f], l, f);
            if (s)for (c = u[u.length - 1].ownerDocument, w.map(u, Pe), f = 0; f < s; f++)l = u[f], he.test(l.type || "") && !K.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(je, ""), c, l))
        }
        return e
    }

    function Be(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || w.cleanData(ve(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(De, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, u = e.cloneNode(!0), s = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))for (a = ve(u), r = 0, i = (o = ve(e)).length; r < i; r++)Ie(o[r], a[r]);
            if (t)if (n)for (o = o || ve(e), a = a || ve(u), r = 0, i = o.length; r < i; r++)He(o[r], a[r]); else He(e, u);
            return (a = ve(u, "script")).length > 0 && ye(a, !s && ve(e, "script")), u
        }, cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)if (Y(n)) {
                if (t = n[K.expando]) {
                    if (t.events)for (r in t.events)i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0
                }
                n[J.expando] && (n[J.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Be(this, e, !0)
        }, remove: function (e) {
            return Be(this, e)
        }, text: function (e) {
            return _(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (w.cleanData(ve(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return _(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ve(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), w(i[a])[t](n), u.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), We = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, $e = new RegExp(oe.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", xe.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, s = 12 === n(t.marginLeft), c.style.right = "60%", u = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", xe.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var i, o, a, u, s, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), u
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), s
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, u = e.style;
        return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && Me.test(a) && $e.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function () {
                if (!e())return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    var _e = /^(none|table(?!-c[ea]).+)/, Ue = /^--/, Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Xe = {letterSpacing: "0", fontWeight: "400"}, Qe = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style;

    function Ge(e) {
        if (e in Ye)return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Qe.length;
        while (n--)if ((e = Qe[n] + t) in Ye)return e
    }

    function Ke(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Ge(e) || e), t
    }

    function Je(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, u = 0, s = 0;
        if (n === (r ? "border" : "content"))return 0;
        for (; a < 4; a += 2)"margin" === n && (s += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (s -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (s -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (s += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? s += w.css(e, "border" + oe[a] + "Width", !0, i) : u += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - u - .5))), s
    }

    function et(e, t, n) {
        var r = We(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
        if (Me.test(i)) {
            if (!n)return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
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
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, u = Q(t), s = Ue.test(t), l = e.style;
                if (s || (t = Ke(u)), a = w.cssHooks[t] || w.cssHooks[u], void 0 === n)return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[u] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, u = Q(t);
            return Ue.test(t) || (t = Ke(u)), (a = w.cssHooks[t] || w.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return !_e.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ue(e, Ve, function () {
                    return et(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = We(e), a = "border-box" === w.css(e, "boxSizing", !1, o), u = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Je(e, n, u)
            }
        }
    }), w.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
        if (t)return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Je)
    }), w.fn.extend({
        css: function (e, t) {
            return _(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = We(e), i = t.length; a < i; a++)o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
    }();
    var tt, nt = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return _(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(I);
            if (i && 1 === e.nodeType)while (n = i[r++])e.removeAttribute(n)
        }
    }), tt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = nt[t] || w.find.attr;
        nt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = nt[a], nt[a] = i, i = null != n(e, t, r) ? a : null, nt[a] = o), i
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i, it = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return _(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });
    function ot(e) {
        return (e.match(I) || []).join(" ")
    }

    function at(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ut(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(I) || [] : []
    }

    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, u, s = 0;
            if (g(e))return this.each(function (t) {
                w(this).addClass(e.call(this, t, at(this)))
            });
            if ((t = ut(e)).length)while (n = this[s++])if (i = at(n), r = 1 === n.nodeType && " " + ot(i) + " ") {
                a = 0;
                while (o = t[a++])r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (u = ot(r)) && n.setAttribute("class", u)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, u, s = 0;
            if (g(e))return this.each(function (t) {
                w(this).removeClass(e.call(this, t, at(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ((t = ut(e)).length)while (n = this[s++])if (i = at(n), r = 1 === n.nodeType && " " + ot(i) + " ") {
                a = 0;
                while (o = t[a++])while (r.indexOf(" " + o + " ") > -1)r = r.replace(" " + o + " ", " ");
                i !== (u = ot(r)) && n.setAttribute("class", u)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, at(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = ut(e);
                    while (t = a[i++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = at(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])if (1 === n.nodeType && (" " + ot(at(n)) + " ").indexOf(t) > -1)return !0;
            return !1
        }
    });
    var st = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i)return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(st, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : ot(w.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, u = a ? null : [], s = a ? o + 1 : i.length;
                    for (r = o < 0 ? s : a ? o : 0; r < s; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), a)return t;
                        u.push(t)
                    }
                    return u
                }, set: function (e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t))return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var lt = /^(?:focusinfocus|focusoutblur)$/, ct = function (e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, u, s, l, c, d, p, h, y = [i || r], m = f.call(t, "type") ? t.type : t, b = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = h = s = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (b = m.split(".")).shift(), b.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), p = w.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !v(i)) {
                    for (l = p.delegateType || m, lt.test(l + m) || (u = u.parentNode); u; u = u.parentNode)y.push(u), s = u;
                    s === (i.ownerDocument || r) && y.push(s.defaultView || s.parentWindow || e)
                }
                a = 0;
                while ((u = y[a++]) && !t.isPropagationStopped())h = u, t.type = a > 1 ? l : p.bindType || m, (d = (K.get(u, "events") || {})[t.type] && K.get(u, "handle")) && d.apply(u, n), (d = c && u[c]) && d.apply && Y(u) && (t.result = d.apply(u, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !Y(i) || c && g(i[m]) && !v(i) && ((s = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, ct), i[m](), t.isPropagationStopped() && h.removeEventListener(m, ct), w.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {type: e, isSimulated: !0});
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n)return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = K.access(r, t);
                i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = K.access(r, t) - 1;
                i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t))
            }
        }
    });
    var ft = /\[\]$/, dt = /\r?\n/g, pt = /^(?:submit|button|image|reset|file)$/i, ht = /^(?:input|select|textarea|keygen)/i;

    function gt(e, t, n, r) {
        var i;
        if (Array.isArray(t))w.each(t, function (t, i) {
            n || ft.test(e) ? r(e, i) : gt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== b(t))r(e, t); else for (i in t)gt(e + "[" + i + "]", t[i], n, r)
    }

    w.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))w.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)gt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && ht.test(this.nodeName) && !pt.test(e) && (this.checked || !de.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(dt, "\r\n")}
                }) : {name: t.name, value: n.replace(dt, "\r\n")}
            }).get()
        }
    }), w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild)e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e)return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = S.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = be([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, u, s, l, c = w.css(e, "position"), f = w(e), d = {};
            "static" === c && (e.style.position = "relative"), u = f.offset(), o = w.css(e, "top"), s = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + s).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), g(t) && (t = t.call(e, n, w.extend({}, u))), null != t.top && (d.top = t.top - u.top + a), null != t.left && (d.left = t.left - u.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r)return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === w.css(r, "position"))t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position"))e = e.offsetParent;
                return e || xe
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return _(this, function (e, r, i) {
                var o;
                if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i)return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
            if (n)return n = Fe(e, t), Me.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i), u = n || (!0 === i || !0 === o ? "margin" : "border");
                return _(this, function (t, n, i) {
                    var o;
                    return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, u) : w.style(t, n, i, u)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e))return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = D, w.isFunction = g, w.isWindow = v, w.camelCase = Q, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var vt = e.jQuery, yt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = yt), t && e.jQuery === w && (e.jQuery = vt), w
    }, t || (e.jQuery = e.$ = w), w
});


/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType)return [];
        var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e)return document.body;
        switch (e.nodeName) {
            case'HTML':
            case'BODY':
                return e.ownerDocument.body;
            case'#document':
                return e.body;
        }
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        return 11 === e ? pe : 10 === e ? se : pe || se
    }

    function p(e) {
        if (!e)return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }

    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }

    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }

    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }

    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }

    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }

    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }

    function c(e) {
        var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o);
        return {height: h('Height', t, o, n), width: h('Width', t, o, n)}
    }

    function g(e) {
        return fe({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top'), i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {
        }
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }, s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.right - p.left, a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
        }
        return g(p)
    }

    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10);
        i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
        var b = g({top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height});
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var w = parseFloat(m.marginTop, 10), y = parseFloat(m.marginLeft, 10);
            b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
    }

    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'), d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }

    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n)return !1;
        if ('fixed' === t(e, 'position'))return !0;
        var i = o(e);
        return !!i && y(i)
    }

    function E(e) {
        if (!e || !e.parentElement || r())return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');)o = o.parentElement;
        return o || document.documentElement
    }

    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = {
            top: 0,
            left: 0
        }, d = p ? E(e) : a(e, t);
        if ('viewport' === r)s = w(d, p); else {
            var l;
            'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ('HTML' === l.nodeName && !y(d)) {
                var m = c(e.ownerDocument), h = m.height, g = m.width;
                s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
            } else s = f
        }
        i = i || 0;
        var u = 'number' == typeof i;
        return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s
    }

    function x(e) {
        var t = e.width, o = e.height;
        return t * o
    }

    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))return e;
        var p = v(o, n, r, i), s = {
            top: {width: p.width, height: t.top - p.top},
            right: {width: p.right - t.right, height: p.height},
            bottom: {width: p.width, height: p.bottom - t.bottom},
            left: {width: t.left - p.left, height: p.height}
        }, d = Object.keys(s).map(function (e) {
            return fe({key: e}, s[e], {area: x(s[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), a = d.filter(function (e) {
            var t = e.width, n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? E(t) : a(t, o);
        return b(o, i, n)
    }

    function S(e) {
        var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r
    }

    function T(e) {
        var t = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function D(e, t, o) {
        o = o.split('-')[0];
        var n = S(e), i = {
            width: n.width,
            height: n.height
        }, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
    }

    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function N(e, t, o) {
        if (Array.prototype.findIndex)return e.findIndex(function (e) {
            return e[t] === o
        });
        var n = C(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }

    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function (t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function W(e, t) {
        return e.some(function (e) {
            var o = e.name, n = e.enabled;
            return n && o === t
        })
    }

    function H(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n], r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])return r
        }
        return null
    }

    function B() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {passive: !0}), r || M(n(p.parentNode), t, o, i), i.push(p)
    }

    function F(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {passive: !0});
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
    }

    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }

    function V(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function q(e, t) {
        var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function (e) {
            return e
        }, s = r(i.width), d = r(n.width), a = -1 !== ['left', 'right'].indexOf(e.placement), l = -1 !== e.placement.indexOf('-'), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }

    function K(e, t, o) {
        var n = C(e, function (e) {
            var o = e.name;
            return o === t
        }), i = !!n && e.some(function (e) {
                return e.name === o && e.enabled && e.order < n.order
            });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }

    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = ce.indexOf(e), n = ce.slice(o + 1).concat(ce.slice(0, o));
        return t ? n.reverse() : n
    }

    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
        if (!r)return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case'%p':
                    s = o;
                    break;
                case'%':
                case'%r':
                default:
                    s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function X(e, t, o, n) {
        var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = p.indexOf(C(p, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function (e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return _(e, i, t, o)
            })
        }), a.forEach(function (e, t) {
            e.forEach(function (o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }

    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }

    for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1)if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
        ne = 1;
        break
    }
    var i = te && window.Promise, re = i ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, ne))
        }
    }, pe = te && !!(window.MSInputMethodContext && document.documentMode), se = te && /MSIE 10/.test(navigator.userAgent), de = function (e, t) {
        if (!(e instanceof t))throw new TypeError('Cannot call a class as a function')
    }, ae = function () {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }

        return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }(), le = function (e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e
    }, fe = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++)for (var n in t = arguments[o], t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }, me = te && /Firefox/i.test(navigator.userAgent), he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], ce = he.slice(3), ge = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }, ue = function () {
        function t(o, n) {
            var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            de(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return fe({name: e}, i.options.modifiers[e])
            }).sort(function (e, t) {
                return e.order - t.order
            }), this.modifiers.forEach(function (t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }), this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(), this.state.eventsEnabled = p
        }

        return ae(t, [{
            key: 'update', value: function () {
                return k.call(this)
            }
        }, {
            key: 'destroy', value: function () {
                return B.call(this)
            }
        }, {
            key: 'enableEventListeners', value: function () {
                return I.call(this)
            }
        }, {
            key: 'disableEventListeners', value: function () {
                return U.call(this)
            }
        }]), t
    }();
    return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {
        },
        onUpdate: function () {
        },
        modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = {
                            start: le({}, d, r[d]),
                            end: le({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = fe({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {order: 200, enabled: !0, fn: J, offset: 0},
            preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = H('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
                    i.top = '', i.left = '', i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority, f = e.offsets.popper, m = {
                        primary: function (e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o)
                        }, secondary: function (e) {
                            var o = 'right' === e ? 'left' : 'top', n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n)
                        }
                    };
                    return l.forEach(function (e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = fe({}, f, m[t](e))
                    }), e.offsets.popper = f, e
                }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500, enabled: !0, fn: function (e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether'))return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i)return e;
                    } else if (!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w['margin' + f], 10), E = parseFloat(w['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e
                }, element: '[x-arrow]'
            },
            flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (W(e.instance.modifiers, 'inner'))return e;
                    if (e.flipped && e.placement === e.originalPlacement)return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = [];
                    switch (t.behavior) {
                        case ge.FLIP:
                            p = [n, i];
                            break;
                        case ge.CLOCKWISE:
                            p = G(n);
                            break;
                        case ge.COUNTERCLOCKWISE:
                            p = G(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function (s, d) {
                        if (n !== s || p.length === d + 1)return e;
                        n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, w = -1 !== ['top', 'bottom'].indexOf(n), y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
                        (m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                    }), e
                }, behavior: 'flip', padding: 5, boundariesElement: 'viewport'
            },
            inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
                }
            },
            hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow'))return e;
                    var t = e.offsets.reference, o = C(e.instance.modifiers, function (e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var o = t.x, n = t.y, i = e.offsets.popper, r = C(e.instance.modifiers, function (e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {position: i.position}, h = q(e, 2 > window.devicePixelRatio || !me), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = H('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b)m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else {
                        var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1;
                        m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
                    }
                    var E = {"x-placement": e.placement};
                    return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: 'bottom', y: 'right'
            },
            applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), j(t, {position: o.positionFixed ? 'fixed' : 'absolute'}), o
                }, gpuAcceleration: void 0
            }
        }
    }, ue
});
//# sourceMappingURL=popper.min.js.map


/*!
 * Bootstrap v4.2.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("popper.js"), require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "popper.js", "jquery"], e) : e(t.bootstrap = {}, t.Popper, t.jQuery)
}(this, function (t, u, g) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), e.forEach(function (t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }

    u = u && u.hasOwnProperty("default") ? u.default : u, g = g && g.hasOwnProperty("default") ? g.default : g;
    var e = "transitionend";

    function n(t) {
        var e = this, n = !1;
        return g(this).one(_.TRANSITION_END, function () {
            n = !0
        }), setTimeout(function () {
            n || _.triggerTransitionEnd(e)
        }, t), this
    }

    var _ = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        }, getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            return e && document.querySelector(e) ? e : null
        }, getTransitionDurationFromElement: function (t) {
            if (!t)return 0;
            var e = g(t).css("transition-duration"), n = g(t).css("transition-delay"), i = parseFloat(e), o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        }, reflow: function (t) {
            return t.offsetHeight
        }, triggerTransitionEnd: function (t) {
            g(t).trigger(e)
        }, supportsTransitionEnd: function () {
            return Boolean(e)
        }, isElement: function (t) {
            return (t[0] || t).nodeType
        }, typeCheckConfig: function (t, e, n) {
            for (var i in n)if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i], r = e[i], s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(o).test(s))throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
            }
            var a
        }, findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow)return null;
            if ("function" != typeof t.getRootNode)return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function (t) {
            if (g(t.target).is(this))return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert", r = "bs.alert", a = "." + r, c = g.fn[o], h = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }, f = "alert", d = "fade", m = "show", p = function () {
        function i(t) {
            this._element = t
        }

        var t = i.prototype;
        return t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }, t.dispose = function () {
            g.removeData(this._element, r), this._element = null
        }, t._getRootElement = function (t) {
            var e = _.getSelectorFromElement(t), n = !1;
            return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n
        }, t._triggerCloseEvent = function (t) {
            var e = g.Event(h.CLOSE);
            return g(t).trigger(e), e
        }, t._removeElement = function (e) {
            var n = this;
            if (g(e).removeClass(m), g(e).hasClass(d)) {
                var t = _.getTransitionDurationFromElement(e);
                g(e).one(_.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else this._destroyElement(e)
        }, t._destroyElement = function (t) {
            g(t).detach().trigger(h.CLOSED).remove()
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this), e = t.data(r);
                e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
            })
        }, i._handleDismiss = function (e) {
            return function (t) {
                t && t.preventDefault(), e.close(this)
            }
        }, s(i, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }]), i
    }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
        return g.fn[o] = c, p._jQueryInterface
    };
    var v = "button", E = "bs.button", y = "." + E, C = ".data-api", T = g.fn[v], S = "active", b = "btn", I = "focus", D = '[data-toggle^="button"]', w = '[data-toggle="buttons"]', A = 'input:not([type="hidden"])', N = ".active", O = ".btn", k = {
        CLICK_DATA_API: "click" + y + C,
        FOCUS_BLUR_DATA_API: "focus" + y + C + " blur" + y + C
    }, P = function () {
        function n(t) {
            this._element = t
        }

        var t = n.prototype;
        return t.toggle = function () {
            var t = !0, e = !0, n = g(this._element).closest(w)[0];
            if (n) {
                var i = this._element.querySelector(A);
                if (i) {
                    if ("radio" === i.type)if (i.checked && this._element.classList.contains(S))t = !1; else {
                        var o = n.querySelector(N);
                        o && g(o).removeClass(S)
                    }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))return;
                        i.checked = !this._element.classList.contains(S), g(i).trigger("change")
                    }
                    i.focus(), e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)
        }, t.dispose = function () {
            g.removeData(this._element, E), this._element = null
        }, n._jQueryInterface = function (e) {
            return this.each(function () {
                var t = g(this).data(E);
                t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]()
            })
        }, s(n, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }]), n
    }();
    g(document).on(k.CLICK_DATA_API, D, function (t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle")
    }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
        return g.fn[v] = T, P._jQueryInterface
    };
    var L = "carousel", j = "bs.carousel", H = "." + j, R = ".data-api", U = g.fn[L], W = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, x = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, F = "next", q = "prev", M = "left", K = "right", Q = {
        SLIDE: "slide" + H,
        SLID: "slid" + H,
        KEYDOWN: "keydown" + H,
        MOUSEENTER: "mouseenter" + H,
        MOUSELEAVE: "mouseleave" + H,
        TOUCHSTART: "touchstart" + H,
        TOUCHMOVE: "touchmove" + H,
        TOUCHEND: "touchend" + H,
        POINTERDOWN: "pointerdown" + H,
        POINTERUP: "pointerup" + H,
        DRAG_START: "dragstart" + H,
        LOAD_DATA_API: "load" + H + R,
        CLICK_DATA_API: "click" + H + R
    }, B = "carousel", V = "active", Y = "slide", X = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = "pointer-event", $ = ".active", tt = ".active.carousel-item", et = ".carousel-item", nt = ".carousel-item img", it = ".carousel-item-next, .carousel-item-prev", ot = ".carousel-indicators", rt = "[data-slide], [data-slide-to]", st = '[data-ride="carousel"]', at = {
        TOUCH: "touch",
        PEN: "pen"
    }, lt = function () {
        function r(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
        }

        var t = r.prototype;
        return t.next = function () {
            this._isSliding || this._slide(F)
        }, t.nextWhenVisible = function () {
            !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
        }, t.prev = function () {
            this._isSliding || this._slide(q)
        }, t.pause = function (t) {
            t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, t.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, t.to = function (t) {
            var e = this;
            this._activeElement = this._element.querySelector(tt);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))if (this._isSliding)g(this._element).one(Q.SLID, function () {
                return e.to(t)
            }); else {
                if (n === t)return this.pause(), void this.cycle();
                var i = n < t ? F : q;
                this._slide(i, this._items[t])
            }
        }, t.dispose = function () {
            g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, t._getConfig = function (t) {
            return t = l({}, W, t), _.typeCheckConfig(L, t, x), t
        }, t._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                0 < e && this.prev(), e < 0 && this.next()
            }
        }, t._addEventListeners = function () {
            var e = this;
            this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t)
            }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
                return e.pause(t)
            }).on(Q.MOUSELEAVE, function (t) {
                return e.cycle(t)
            }), this._addTouchEventListeners()
        }, t._addTouchEventListeners = function () {
            var n = this;
            if (this._touchSupported) {
                var e = function (t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                }, i = function (t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval))
                };
                g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
                    return t.preventDefault()
                }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                    return e(t)
                }), g(this._element).on(Q.POINTERUP, function (t) {
                    return i(t)
                }), this._element.classList.add(Z)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
                    return e(t)
                }), g(this._element).on(Q.TOUCHMOVE, function (t) {
                    var e;
                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                }), g(this._element).on(Q.TOUCHEND, function (t) {
                    return i(t)
                }))
            }
        }, t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))switch (t.which) {
                case 37:
                    t.preventDefault(), this.prev();
                    break;
                case 39:
                    t.preventDefault(), this.next()
            }
        }, t._getItemIndex = function (t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t)
        }, t._getItemByDirection = function (t, e) {
            var n = t === F, i = t === q, o = this._getItemIndex(e), r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)return e;
            var s = (o + (t === q ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }, t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(tt)), o = g.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return g(this._element).trigger(o), o
        }, t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                g(e).removeClass(V);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && g(n).addClass(V)
            }
        }, t._slide = function (t, e) {
            var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = t === F ? (n = z, i = G, M) : (n = X, i = J, K), l && g(l).hasClass(V))this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                var u = g.Event(Q.SLID, {relatedTarget: l, direction: o, from: a, to: c});
                if (g(this._element).hasClass(Y)) {
                    g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                    var d = _.getTransitionDurationFromElement(s);
                    g(s).one(_.TRANSITION_END, function () {
                        g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
                            return g(r._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
                h && this.cycle()
            }
        }, r._jQueryInterface = function (i) {
            return this.each(function () {
                var t = g(this).data(j), e = l({}, W, g(this).data());
                "object" == typeof i && (e = l({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i)t.to(i); else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else e.interval && (t.pause(), t.cycle())
            })
        }, r._dataApiClickHandler = function (t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
                var n = g(e)[0];
                if (n && g(n).hasClass(B)) {
                    var i = l({}, g(n).data(), g(this).data()), o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault()
                }
            }
        }, s(r, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "Default", get: function () {
                return W
            }
        }]), r
    }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            lt._jQueryInterface.call(i, i.data())
        }
    }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
        return g.fn[L] = U, lt._jQueryInterface
    };
    var ct = "collapse", ht = "bs.collapse", ut = "." + ht, ft = g.fn[ct], dt = {
        toggle: !0,
        parent: ""
    }, gt = {toggle: "boolean", parent: "(string|element)"}, _t = {
        SHOW: "show" + ut,
        SHOWN: "shown" + ut,
        HIDE: "hide" + ut,
        HIDDEN: "hidden" + ut,
        CLICK_DATA_API: "click" + ut + ".data-api"
    }, mt = "show", pt = "collapse", vt = "collapsing", Et = "collapsed", yt = "width", Ct = "height", Tt = ".show, .collapsing", St = '[data-toggle="collapse"]', bt = function () {
        function a(e, t) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                var r = n[i], s = _.getSelectorFromElement(r), a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }

        var t = a.prototype;
        return t.toggle = function () {
            g(this._element).hasClass(mt) ? this.hide() : this.show()
        }, t.show = function () {
            var t, e, n = this;
            if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
                    return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
                })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                var i = g.Event(_t.SHOW);
                if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                    var o = this._getDimension();
                    g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Et).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1)), s = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function () {
                        g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN)
                    }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                }
            }
        }, t.hide = function () {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                var e = g.Event(_t.HIDE);
                if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                    var i = this._triggerArray.length;
                    if (0 < i)for (var o = 0; o < i; o++) {
                        var r = this._triggerArray[o], s = _.getSelectorFromElement(r);
                        if (null !== s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(Et).attr("aria-expanded", !1)
                    }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function () {
                        t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }, t.setTransitioning = function (t) {
            this._isTransitioning = t
        }, t.dispose = function () {
            g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, t._getConfig = function (t) {
            return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t
        }, t._getDimension = function () {
            return g(this._element).hasClass(yt) ? yt : Ct
        }, t._getParent = function () {
            var t, n = this;
            _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(t.querySelectorAll(e));
            return g(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }), t
        }, t._addAriaAndCollapsedClass = function (t, e) {
            var n = g(t).hasClass(mt);
            e.length && g(e).toggleClass(Et, !n).attr("aria-expanded", n)
        }, a._getTargetFromElement = function (t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }, a._jQueryInterface = function (i) {
            return this.each(function () {
                var t = g(this), e = t.data(ht), n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
                    if ("undefined" == typeof e[i])throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }, s(a, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "Default", get: function () {
                return dt
            }
        }]), a
    }();
    g(document).on(_t.CLICK_DATA_API, St, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this), e = _.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function () {
            var t = g(this), e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e)
        })
    }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
        return g.fn[ct] = ft, bt._jQueryInterface
    };
    var It = "dropdown", Dt = "bs.dropdown", wt = "." + Dt, At = ".data-api", Nt = g.fn[It], Ot = new RegExp("38|40|27"), kt = {
        HIDE: "hide" + wt,
        HIDDEN: "hidden" + wt,
        SHOW: "show" + wt,
        SHOWN: "shown" + wt,
        CLICK: "click" + wt,
        CLICK_DATA_API: "click" + wt + At,
        KEYDOWN_DATA_API: "keydown" + wt + At,
        KEYUP_DATA_API: "keyup" + wt + At
    }, Pt = "disabled", Lt = "show", jt = "dropup", Ht = "dropright", Rt = "dropleft", Ut = "dropdown-menu-right", Wt = "position-static", xt = '[data-toggle="dropdown"]', Ft = ".dropdown form", qt = ".dropdown-menu", Mt = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Qt = "top-start", Bt = "top-end", Vt = "bottom-start", Yt = "bottom-end", Xt = "right-start", zt = "left-start", Gt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }, Jt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }, Zt = function () {
        function c(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }

        var t = c.prototype;
        return t.toggle = function () {
            if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                var t = c._getParentFromElement(this._element), e = g(this._menu).hasClass(Lt);
                if (c._clearMenus(), !e) {
                    var n = {relatedTarget: this._element}, i = g.Event(kt.SHOW, n);
                    if (g(t).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Wt), this._popper = new u(o, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                    }
                }
            }
        }, t.show = function () {
            if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                var t = {relatedTarget: this._element}, e = g.Event(kt.SHOW, t), n = c._getParentFromElement(this._element);
                g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
            }
        }, t.hide = function () {
            if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                var t = {relatedTarget: this._element}, e = g.Event(kt.HIDE, t), n = c._getParentFromElement(this._element);
                g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
            }
        }, t.dispose = function () {
            g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, t.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, t._addEventListeners = function () {
            var e = this;
            g(this._element).on(kt.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle()
            })
        }, t._getConfig = function (t) {
            return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t
        }, t._getMenuElement = function () {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(qt))
            }
            return this._menu
        }, t._getPlacement = function () {
            var t = g(this._element.parentNode), e = Vt;
            return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(Ut) && (e = Bt)) : t.hasClass(Ht) ? e = Xt : t.hasClass(Rt) ? e = zt : g(this._menu).hasClass(Ut) && (e = Yt), e
        }, t._detectNavbar = function () {
            return 0 < g(this._element).closest(".navbar").length
        }, t._getPopperConfig = function () {
            var e = this, t = {};
            "function" == typeof this._config.offset ? t.fn = function (t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t
            } : t.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: t,
                    flip: {enabled: this._config.flip},
                    preventOverflow: {boundariesElement: this._config.boundary}
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
        }, c._jQueryInterface = function (e) {
            return this.each(function () {
                var t = g(this).data(Dt);
                if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e])throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }, c._clearMenus = function (t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))for (var e = [].slice.call(document.querySelectorAll(xt)), n = 0, i = e.length; n < i; n++) {
                var o = c._getParentFromElement(e[n]), r = g(e[n]).data(Dt), s = {relatedTarget: e[n]};
                if (t && "click" === t.type && (s.clickEvent = t), r) {
                    var a = r._menu;
                    if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                        var l = g.Event(kt.HIDE, s);
                        g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                    }
                }
            }
        }, c._getParentFromElement = function (t) {
            var e, n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode
        }, c._dataApiKeydownHandler = function (t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                var e = c._getParentFromElement(this), n = g(e).hasClass(Lt);
                if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(Kt));
                    if (0 !== i.length) {
                        var o = i.indexOf(t.target);
                        38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var r = e.querySelector(xt);
                        g(r).trigger("focus")
                    }
                    g(this).trigger("click")
                }
            }
        }, s(c, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "Default", get: function () {
                return Gt
            }
        }, {
            key: "DefaultType", get: function () {
                return Jt
            }
        }]), c
    }();
    g(document).on(kt.KEYDOWN_DATA_API, xt, Zt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Zt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Zt._clearMenus).on(kt.CLICK_DATA_API, xt, function (t) {
        t.preventDefault(), t.stopPropagation(), Zt._jQueryInterface.call(g(this), "toggle")
    }).on(kt.CLICK_DATA_API, Ft, function (t) {
        t.stopPropagation()
    }), g.fn[It] = Zt._jQueryInterface, g.fn[It].Constructor = Zt, g.fn[It].noConflict = function () {
        return g.fn[It] = Nt, Zt._jQueryInterface
    };
    var $t = "modal", te = "bs.modal", ee = "." + te, ne = g.fn[$t], ie = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, oe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, re = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api"
    }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function () {
        function o(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
        }

        var t = o.prototype;
        return t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
        }, t.show = function (t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                g(this._element).hasClass(ce) && (this._isTransitioning = !0);
                var n = g.Event(re.SHOW, {relatedTarget: t});
                g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, de, function (t) {
                    return e.hide(t)
                }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                    g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function () {
                    return e._showElement(t)
                }))
            }
        }, t.hide = function (t) {
            var e = this;
            if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                var n = g.Event(re.HIDE);
                if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = g(this._element).hasClass(ce);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(he), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
                        var o = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function (t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(o)
                    } else this._hideModal()
                }
            }
        }, t.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
                return g(t).off(ee)
            }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, t.handleUpdate = function () {
            this._adjustDialog()
        }, t._getConfig = function (t) {
            return t = l({}, ie, t), _.typeCheckConfig($t, t, oe), t
        }, t._showElement = function (t) {
            var e = this, n = g(this._element).hasClass(ce);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(he), this._config.focus && this._enforceFocus();
            var i = g.Event(re.SHOWN, {relatedTarget: t}), o = function () {
                e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i)
            };
            if (n) {
                var r = _.getTransitionDurationFromElement(this._dialog);
                g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
            } else o()
        }, t._enforceFocus = function () {
            var e = this;
            g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
                document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
            })
        }, t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                27 === t.which && (t.preventDefault(), e.hide())
            }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
        }, t._setResizeEvent = function () {
            var e = this;
            this._isShown ? g(window).on(re.RESIZE, function (t) {
                return e.handleUpdate(t)
            }) : g(window).off(re.RESIZE)
        }, t._hideModal = function () {
            var t = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                g(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN)
            })
        }, t._removeBackdrop = function () {
            this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
        }, t._showBackdrop = function (t) {
            var e = this, n = g(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(he), !t)return;
                if (!n)return void t();
                var i = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                g(this._backdrop).removeClass(he);
                var o = function () {
                    e._removeBackdrop(), t && t()
                };
                if (g(this._element).hasClass(ce)) {
                    var r = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o()
            } else t && t()
        }, t._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, t._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, t._setScrollbar = function () {
            var o = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(ge)), e = [].slice.call(document.querySelectorAll(_e));
                g(t).each(function (t, e) {
                    var n = e.style.paddingRight, i = g(e).css("padding-right");
                    g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }), g(e).each(function (t, e) {
                    var n = e.style.marginRight, i = g(e).css("margin-right");
                    g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight, i = g(document.body).css("padding-right");
                g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            g(document.body).addClass(le)
        }, t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(ge));
            g(t).each(function (t, e) {
                var n = g(e).data("padding-right");
                g(e).removeData("padding-right"), e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll("" + _e));
            g(e).each(function (t, e) {
                var n = g(e).data("margin-right");
                "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
        }, t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = se, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }, o._jQueryInterface = function (n, i) {
            return this.each(function () {
                var t = g(this).data(te), e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
                    if ("undefined" == typeof t[n])throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else e.show && t.show(i)
            })
        }, s(o, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "Default", get: function () {
                return ie
            }
        }]), o
    }();
    g(document).on(re.CLICK_DATA_API, fe, function (t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function (t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
                g(n).is(":visible") && n.focus()
            })
        });
        me._jQueryInterface.call(g(e), o, this)
    }), g.fn[$t] = me._jQueryInterface, g.fn[$t].Constructor = me, g.fn[$t].noConflict = function () {
        return g.fn[$t] = ne, me._jQueryInterface
    };
    var pe = "tooltip", ve = "bs.tooltip", Ee = "." + ve, ye = g.fn[pe], Ce = "bs-tooltip", Te = new RegExp("(^|\\s)" + Ce + "\\S+", "g"), Se = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
    }, be = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, Ie = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    }, De = "show", we = "out", Ae = {
        HIDE: "hide" + Ee,
        HIDDEN: "hidden" + Ee,
        SHOW: "show" + Ee,
        SHOWN: "shown" + Ee,
        INSERTED: "inserted" + Ee,
        CLICK: "click" + Ee,
        FOCUSIN: "focusin" + Ee,
        FOCUSOUT: "focusout" + Ee,
        MOUSEENTER: "mouseenter" + Ee,
        MOUSELEAVE: "mouseleave" + Ee
    }, Ne = "fade", Oe = "show", ke = ".tooltip-inner", Pe = ".arrow", Le = "hover", je = "focus", He = "click", Re = "manual", Ue = function () {
        function i(t, e) {
            if ("undefined" == typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
        }

        var t = i.prototype;
        return t.enable = function () {
            this._isEnabled = !0
        }, t.disable = function () {
            this._isEnabled = !1
        }, t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
        }, t.toggle = function (t) {
            if (this._isEnabled)if (t) {
                var e = this.constructor.DATA_KEY, n = g(t.currentTarget).data(e);
                n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
            } else {
                if (g(this.getTipElement()).hasClass(Oe))return void this._leave(null, this);
                this._enter(null, this)
            }
        }, t.dispose = function () {
            clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, t.show = function () {
            var e = this;
            if ("none" === g(this.element).css("display"))throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                g(this.element).trigger(t);
                var n = _.findShadowRoot(this.element), i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i)return;
                var o = this.getTipElement(), r = _.getUID(this.constructor.NAME);
                o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(Ne);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
                    placement: a,
                    modifiers: {
                        offset: {offset: this.config.offset},
                        flip: {behavior: this.config.fallbackPlacement},
                        arrow: {element: Pe},
                        preventOverflow: {boundariesElement: this.config.boundary}
                    },
                    onCreate: function (t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function (t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }), g(o).addClass(Oe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                var c = function () {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e)
                };
                if (g(this.tip).hasClass(Ne)) {
                    var h = _.getTransitionDurationFromElement(this.tip);
                    g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                } else c()
            }
        }, t.hide = function (t) {
            var e = this, n = this.getTipElement(), i = g.Event(this.constructor.Event.HIDE), o = function () {
                e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
            };
            if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                if (g(n).removeClass(Oe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[He] = !1, this._activeTrigger[je] = !1, this._activeTrigger[Le] = !1, g(this.tip).hasClass(Ne)) {
                    var r = _.getTransitionDurationFromElement(n);
                    g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o();
                this._hoverState = ""
            }
        }, t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
        }, t.isWithContent = function () {
            return Boolean(this.getTitle())
        }, t.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass(Ce + "-" + t)
        }, t.getTipElement = function () {
            return this.tip = this.tip || g(this.config.template)[0], this.tip
        }, t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(ke)), this.getTitle()), g(t).removeClass(Ne + " " + Oe)
        }, t.setElementContent = function (t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery) ? n ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) : t[n ? "html" : "text"](e)
        }, t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
        }, t._getContainer = function () {
            return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
        }, t._getAttachment = function (t) {
            return be[t.toUpperCase()]
        }, t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
                if ("click" === t)g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                    return i.toggle(t)
                }); else if (t !== Re) {
                    var e = t === Le ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === Le ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    g(i.element).on(e, i.config.selector, function (t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function (t) {
                        return i._leave(t)
                    })
                }
            }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
                i.element && i.hide()
            }), this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }, t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? je : Le] = !0), g(e.getTipElement()).hasClass(Oe) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                e._hoverState === De && e.show()
            }, e.config.delay.show) : e.show())
        }, t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? je : Le] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                e._hoverState === we && e.hide()
            }, e.config.delay.hide) : e.hide())
        }, t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)if (this._activeTrigger[t])return !0;
            return !1
        }, t._getConfig = function (t) {
            return "number" == typeof(t = l({}, this.constructor.Default, g(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(pe, t, this.constructor.DefaultType), t
        }, t._getDelegateConfig = function () {
            var t = {};
            if (this.config)for (var e in this.config)this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }, t._cleanTipClass = function () {
            var t = g(this.getTipElement()), e = t.attr("class").match(Te);
            null !== e && e.length && t.removeClass(e.join(""))
        }, t._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
        }, t._fixTransition = function () {
            var t = this.getTipElement(), e = this.config.animation;
            null === t.getAttribute("x-placement") && (g(t).removeClass(Ne), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this).data(ve), e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(ve, t)), "string" == typeof n)) {
                    if ("undefined" == typeof t[n])throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, s(i, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "Default", get: function () {
                return Ie
            }
        }, {
            key: "NAME", get: function () {
                return pe
            }
        }, {
            key: "DATA_KEY", get: function () {
                return ve
            }
        }, {
            key: "Event", get: function () {
                return Ae
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return Ee
            }
        }, {
            key: "DefaultType", get: function () {
                return Se
            }
        }]), i
    }();
    g.fn[pe] = Ue._jQueryInterface, g.fn[pe].Constructor = Ue, g.fn[pe].noConflict = function () {
        return g.fn[pe] = ye, Ue._jQueryInterface
    };
    var We = "popover", xe = "bs.popover", Fe = "." + xe, qe = g.fn[We], Me = "bs-popover", Ke = new RegExp("(^|\\s)" + Me + "\\S+", "g"), Qe = l({}, Ue.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Be = l({}, Ue.DefaultType, {content: "(string|element|function)"}), Ve = "fade", Ye = "show", Xe = ".popover-header", ze = ".popover-body", Ge = {
        HIDE: "hide" + Fe,
        HIDDEN: "hidden" + Fe,
        SHOW: "show" + Fe,
        SHOWN: "shown" + Fe,
        INSERTED: "inserted" + Fe,
        CLICK: "click" + Fe,
        FOCUSIN: "focusin" + Fe,
        FOCUSOUT: "focusout" + Fe,
        MOUSEENTER: "mouseenter" + Fe,
        MOUSELEAVE: "mouseleave" + Fe
    }, Je = function (t) {
        var e, n;

        function i() {
            return t.apply(this, arguments) || this
        }

        n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function () {
            return this.getTitle() || this._getContent()
        }, o.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass(Me + "-" + t)
        }, o.getTipElement = function () {
            return this.tip = this.tip || g(this.config.template)[0], this.tip
        }, o.setContent = function () {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(Xe), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ze), e), t.removeClass(Ve + " " + Ye)
        }, o._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content
        }, o._cleanTipClass = function () {
            var t = g(this.getTipElement()), e = t.attr("class").match(Ke);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this).data(xe), e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(xe, t)), "string" == typeof n)) {
                    if ("undefined" == typeof t[n])throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, s(i, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "Default", get: function () {
                return Qe
            }
        }, {
            key: "NAME", get: function () {
                return We
            }
        }, {
            key: "DATA_KEY", get: function () {
                return xe
            }
        }, {
            key: "Event", get: function () {
                return Ge
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return Fe
            }
        }, {
            key: "DefaultType", get: function () {
                return Be
            }
        }]), i
    }(Ue);
    g.fn[We] = Je._jQueryInterface, g.fn[We].Constructor = Je, g.fn[We].noConflict = function () {
        return g.fn[We] = qe, Je._jQueryInterface
    };
    var Ze = "scrollspy", $e = "bs.scrollspy", tn = "." + $e, en = g.fn[Ze], nn = {
        offset: 10,
        method: "auto",
        target: ""
    }, on = {offset: "number", method: "string", target: "(string|element)"}, rn = {
        ACTIVATE: "activate" + tn,
        SCROLL: "scroll" + tn,
        LOAD_DATA_API: "load" + tn + ".data-api"
    }, sn = "dropdown-item", an = "active", ln = '[data-spy="scroll"]', cn = ".nav, .list-group", hn = ".nav-link", un = ".nav-item", fn = ".list-group-item", dn = ".dropdown", gn = ".dropdown-item", _n = ".dropdown-toggle", mn = "offset", pn = "position", vn = function () {
        function n(t, e) {
            var n = this;
            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + hn + "," + this._config.target + " " + fn + "," + this._config.target + " " + gn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(rn.SCROLL, function (t) {
                return n._process(t)
            }), this.refresh(), this._process()
        }

        var t = n.prototype;
        return t.refresh = function () {
            var e = this, t = this._scrollElement === this._scrollElement.window ? mn : pn, o = "auto" === this._config.method ? t : this._config.method, r = o === pn ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                var e, n = _.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)), e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height)return [g(e)[o]().top + r, n]
                }
                return null
            }).filter(function (t) {
                return t
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1])
            })
        }, t.dispose = function () {
            g.removeData(this._element, $e), g(this._scrollElement).off(tn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, t._getConfig = function (t) {
            if ("string" != typeof(t = l({}, nn, "object" == typeof t && t ? t : {})).target) {
                var e = g(t.target).attr("id");
                e || (e = _.getUID(Ze), g(t.target).attr("id", e)), t.target = "#" + e
            }
            return _.typeCheckConfig(Ze, t, on), t
        }, t._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, t._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, t._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, t._process = function () {
            var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])return this._activeTarget = null, void this._clear();
                for (var o = this._offsets.length; o--;) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }, t._activate = function (e) {
            this._activeTarget = e, this._clear();
            var t = this._selector.split(",").map(function (t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            }), n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(sn) ? (n.closest(dn).find(_n).addClass(an), n.addClass(an)) : (n.addClass(an), n.parents(cn).prev(hn + ", " + fn).addClass(an), n.parents(cn).prev(un).children(hn).addClass(an)), g(this._scrollElement).trigger(rn.ACTIVATE, {relatedTarget: e})
        }, t._clear = function () {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                return t.classList.contains(an)
            }).forEach(function (t) {
                return t.classList.remove(an)
            })
        }, n._jQueryInterface = function (e) {
            return this.each(function () {
                var t = g(this).data($e);
                if (t || (t = new n(this, "object" == typeof e && e), g(this).data($e, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e])throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }, s(n, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "Default", get: function () {
                return nn
            }
        }]), n
    }();
    g(window).on(rn.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(ln)), e = t.length; e--;) {
            var n = g(t[e]);
            vn._jQueryInterface.call(n, n.data())
        }
    }), g.fn[Ze] = vn._jQueryInterface, g.fn[Ze].Constructor = vn, g.fn[Ze].noConflict = function () {
        return g.fn[Ze] = en, vn._jQueryInterface
    };
    var En = "bs.tab", yn = "." + En, Cn = g.fn.tab, Tn = {
        HIDE: "hide" + yn,
        HIDDEN: "hidden" + yn,
        SHOW: "show" + yn,
        SHOWN: "shown" + yn,
        CLICK_DATA_API: "click" + yn + ".data-api"
    }, Sn = "dropdown-menu", bn = "active", In = "disabled", Dn = "fade", wn = "show", An = ".dropdown", Nn = ".nav, .list-group", On = ".active", kn = "> li > .active", Pn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ln = ".dropdown-toggle", jn = "> .dropdown-menu .active", Hn = function () {
        function i(t) {
            this._element = t
        }

        var t = i.prototype;
        return t.show = function () {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(bn) || g(this._element).hasClass(In))) {
                var t, i, e = g(this._element).closest(Nn)[0], o = _.getSelectorFromElement(this._element);
                if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? kn : On;
                    i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                }
                var s = g.Event(Tn.HIDE, {relatedTarget: this._element}), a = g.Event(Tn.SHOW, {relatedTarget: i});
                if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)), this._activate(this._element, e);
                    var l = function () {
                        var t = g.Event(Tn.HIDDEN, {relatedTarget: n._element}), e = g.Event(Tn.SHOWN, {relatedTarget: i});
                        g(i).trigger(t), g(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }, t.dispose = function () {
            g.removeData(this._element, En), this._element = null
        }, t._activate = function (t, e, n) {
            var i = this, o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(On) : g(e).find(kn))[0], r = n && o && g(o).hasClass(Dn), s = function () {
                return i._transitionComplete(t, o, n)
            };
            if (o && r) {
                var a = _.getTransitionDurationFromElement(o);
                g(o).removeClass(wn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
            } else s()
        }, t._transitionComplete = function (t, e, n) {
            if (e) {
                g(e).removeClass(bn);
                var i = g(e.parentNode).find(jn)[0];
                i && g(i).removeClass(bn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (g(t).addClass(bn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), g(t).addClass(wn), t.parentNode && g(t.parentNode).hasClass(Sn)) {
                var o = g(t).closest(An)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(Ln));
                    g(r).addClass(bn)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this), e = t.data(En);
                if (e || (e = new i(this), t.data(En, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n])throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, s(i, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }]), i
    }();
    g(document).on(Tn.CLICK_DATA_API, Pn, function (t) {
        t.preventDefault(), Hn._jQueryInterface.call(g(this), "show")
    }), g.fn.tab = Hn._jQueryInterface, g.fn.tab.Constructor = Hn, g.fn.tab.noConflict = function () {
        return g.fn.tab = Cn, Hn._jQueryInterface
    };
    var Rn = "toast", Un = "bs.toast", Wn = "." + Un, xn = g.fn[Rn], Fn = {
        CLICK_DISMISS: "click.dismiss" + Wn,
        HIDE: "hide" + Wn,
        HIDDEN: "hidden" + Wn,
        SHOW: "show" + Wn,
        SHOWN: "shown" + Wn
    }, qn = "fade", Mn = "hide", Kn = "show", Qn = "showing", Bn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Vn = {animation: !0, autohide: !0, delay: 500}, Yn = '[data-dismiss="toast"]', Xn = function () {
        function i(t, e) {
            this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
        }

        var t = i.prototype;
        return t.show = function () {
            var t = this;
            g(this._element).trigger(Fn.SHOW), this._config.animation && this._element.classList.add(qn);
            var e = function () {
                t._element.classList.remove(Qn), t._element.classList.add(Kn), g(t._element).trigger(Fn.SHOWN), t._config.autohide && t.hide()
            };
            if (this._element.classList.remove(Mn), this._element.classList.add(Qn), this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else e()
        }, t.hide = function (t) {
            var e = this;
            this._element.classList.contains(Kn) && (g(this._element).trigger(Fn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
                e._close()
            }, this._config.delay))
        }, t.dispose = function () {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Kn) && this._element.classList.remove(Kn), g(this._element).off(Fn.CLICK_DISMISS), g.removeData(this._element, Un), this._element = null, this._config = null
        }, t._getConfig = function (t) {
            return t = l({}, Vn, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Rn, t, this.constructor.DefaultType), t
        }, t._setListeners = function () {
            var t = this;
            g(this._element).on(Fn.CLICK_DISMISS, Yn, function () {
                return t.hide(!0)
            })
        }, t._close = function () {
            var t = this, e = function () {
                t._element.classList.add(Mn), g(t._element).trigger(Fn.HIDDEN)
            };
            if (this._element.classList.remove(Kn), this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else e()
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = g(this), e = t.data(Un);
                if (e || (e = new i(this, "object" == typeof n && n), t.data(Un, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n])throw new TypeError('No method named "' + n + '"');
                    e[n](this)
                }
            })
        }, s(i, null, [{
            key: "VERSION", get: function () {
                return "4.2.1"
            }
        }, {
            key: "DefaultType", get: function () {
                return Bn
            }
        }]), i
    }();
    g.fn[Rn] = Xn._jQueryInterface, g.fn[Rn].Constructor = Xn, g.fn[Rn].noConflict = function () {
        return g.fn[Rn] = xn, Xn._jQueryInterface
    }, function () {
        if ("undefined" == typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = g.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Zt, t.Modal = me, t.Popover = Je, t.Scrollspy = vn, t.Tab = Hn, t.Toast = Xn, t.Tooltip = Ue, Object.defineProperty(t, "__esModule", {value: !0})
});
//# sourceMappingURL=bootstrap.min.js.map