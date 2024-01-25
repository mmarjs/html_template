//modernizr
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-prefixed-setclasses !*/
 !(function (e, n, t) {
    function r(e, n) {
        return typeof e === n;
    }
    function o() {
        var e, n, t, o, s, i, a;
        for (var f in C)
            if (C.hasOwnProperty(f)) {
                if (((e = []), (n = C[f]), n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)
                    (i = e[s]),
                        (a = i.split(".")),
                        1 === a.length ? (Modernizr[a[0]] = o) : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), (Modernizr[a[0]][a[1]] = o)),
                        g.push((o ? "" : "no-") + a.join("-"));
            }
    }
    function s(e) {
        var n = w.className,
            t = Modernizr._config.classPrefix || "";
        if ((x && (n = n.baseVal), Modernizr._config.enableJSClass)) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2");
        }
        Modernizr._config.enableClasses && ((n += " " + t + e.join(" " + t)), x ? (w.className.baseVal = n) : (w.className = n));
    }
    function i(e, n) {
        return !!~("" + e).indexOf(n);
    }
    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
    }
    function f(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function (e, n, t) {
                return n + t.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function l(e, n) {
        return function () {
            return e.apply(n, arguments);
        };
    }
    function u(e, n, t) {
        var o;
        for (var s in e) if (e[s] in n) return t === !1 ? e[s] : ((o = n[e[s]]), r(o, "function") ? l(o, t || n) : o);
        return !1;
    }
    function p(e) {
        return e
            .replace(/([A-Z])/g, function (e, n) {
                return "-" + n.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function d() {
        var e = n.body;
        return e || ((e = a(x ? "svg" : "body")), (e.fake = !0)), e;
    }
    function c(e, t, r, o) {
        var s,
            i,
            f,
            l,
            u = "modernizr",
            p = a("div"),
            c = d();
        if (parseInt(r, 10)) for (; r--; ) (f = a("div")), (f.id = o ? o[r] : u + (r + 1)), p.appendChild(f);
        return (
            (s = a("style")),
            (s.type = "text/css"),
            (s.id = "s" + u),
            (c.fake ? c : p).appendChild(s),
            c.appendChild(p),
            s.styleSheet ? (s.styleSheet.cssText = e) : s.appendChild(n.createTextNode(e)),
            (p.id = u),
            c.fake && ((c.style.background = ""), (c.style.overflow = "hidden"), (l = w.style.overflow), (w.style.overflow = "hidden"), w.appendChild(c)),
            (i = t(p, e)),
            c.fake ? (c.parentNode.removeChild(c), (w.style.overflow = l), w.offsetHeight) : p.parentNode.removeChild(p),
            !!i
        );
    }
    function m(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--; ) if (e.CSS.supports(p(n[o]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; o--; ) s.push("(" + p(n[o]) + ":" + r + ")");
            return (
                (s = s.join(" or ")),
                c("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == getComputedStyle(e, null).position;
                })
            );
        }
        return t;
    }
    function v(e, n, o, s) {
        function l() {
            p && (delete z.style, delete z.modElem);
        }
        if (((s = r(s, "undefined") ? !1 : s), !r(o, "undefined"))) {
            var u = m(e, o);
            if (!r(u, "undefined")) return u;
        }
        for (var p, d, c, v, h, y = ["modernizr", "tspan"]; !z.style; ) (p = !0), (z.modElem = a(y.shift())), (z.style = z.modElem.style);
        for (c = e.length, d = 0; c > d; d++)
            if (((v = e[d]), (h = z.style[v]), i(v, "-") && (v = f(v)), z.style[v] !== t)) {
                if (s || r(o, "undefined")) return l(), "pfx" == n ? v : !0;
                try {
                    z.style[v] = o;
                } catch (g) {}
                if (z.style[v] != h) return l(), "pfx" == n ? v : !0;
            }
        return l(), !1;
    }
    function h(e, n, t, o, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + b.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? v(a, n, o, s) : ((a = (e + " " + E.join(i + " ") + i).split(" ")), u(a, n, t));
    }
    function y(e, n, r) {
        return h(e, t, t, n, r);
    }
    var g = [],
        C = [],
        _ = {
            _version: "3.3.1",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e]);
                }, 0);
            },
            addTest: function (e, n, t) {
                C.push({ name: e, fn: n, options: t });
            },
            addAsyncTest: function (e) {
                C.push({ name: null, fn: e });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = _), (Modernizr = new Modernizr());
    var w = n.documentElement,
        x = "svg" === w.nodeName.toLowerCase(),
        S = "Moz O ms Webkit",
        b = _._config.usePrefixes ? S.split(" ") : [];
    _._cssomPrefixes = b;
    var E = _._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    _._domPrefixes = E;
    var P = { elem: a("modernizr") };
    Modernizr._q.push(function () {
        delete P.elem;
    });
    var z = { style: P.elem.style };
    Modernizr._q.unshift(function () {
        delete z.style;
    }),
        (_.testAllProps = h),
        (_.testAllProps = y),
        Modernizr.addTest("csstransitions", y("transition", "all", !0));
    var N = function (n) {
        var r,
            o = prefixes.length,
            s = e.CSSRule;
        if ("undefined" == typeof s) return t;
        if (!n) return !1;
        if (((n = n.replace(/^@/, "")), (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"), r in s)) return "@" + n;
        for (var i = 0; o > i; i++) {
            var a = prefixes[i],
                f = a.toUpperCase() + "_" + r;
            if (f in s) return "@-" + a.toLowerCase() + "-" + n;
        }
        return !1;
    };
    _.atRule = N;
    _.prefixed = function (e, n, t) {
        return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") && (e = f(e)), n ? h(e, n, t) : h(e, "pfx"));
    };
    o(), s(g), delete _.addTest, delete _.addAsyncTest;
    for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]();
    e.Modernizr = Modernizr;
})(window, document);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//classie function

/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

	'use strict';
	
	// class helper functions from bonzo https://github.com/ded/bonzo
	
	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}
	
	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;
	
	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
		return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
		elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
		elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
		return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
		if ( !hasClass( elem, c ) ) {
		  elem.className = elem.className + ' ' + c;
		}
	  };
	  removeClass = function( elem, c ) {
		elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}
	
	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}
	
	var classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};
	
	// transport
	if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( classie );
	} else if ( typeof exports === 'object' ) {
	  // CommonJS
	  module.exports = classie;
	} else {
	  // browser global
	  window.classie = classie;
	}
	
})( window );

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//list de-min function

!(function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw ((j.code = "MODULE_NOT_FOUND"), j);
            }
            var k = (c[g] = { exports: {} });
            b[g][0].call(
                k.exports,
                function (a) {
                    var c = b[g][1][a];
                    return e(c ? c : a);
                },
                k,
                k.exports,
                a,
                b,
                c,
                d
            );
        }
        return c[g].exports;
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
})(
    {
        1: [
            function (a, b, c) {
                !(function (c, d) {
                    "use strict";
                    var e = c.document,
                        f = a("./src/utils/get-by-class"),
                        g = a("./src/utils/extend"),
                        h = a("./src/utils/index-of"),
                        i = a("./src/utils/events"),
                        j = a("./src/utils/to-string"),
                        k = a("./src/utils/natural-sort"),
                        l = a("./src/utils/classes"),
                        m = a("./src/utils/get-attribute"),
                        n = a("./src/utils/to-array"),
                        o = function (b, c, p) {
                            var q,
                                r = this,
                                s = a("./src/item")(r),
                                t = a("./src/add-async")(r);
                            (q = {
                                start: function () {
                                    (r.listClass = "list"),
                                        (r.searchClass = "search"),
                                        (r.sortClass = "sort"),
                                        (r.page = 1e4),
                                        (r.i = 1),
                                        (r.items = []),
                                        (r.visibleItems = []),
                                        (r.matchingItems = []),
                                        (r.searched = !1),
                                        (r.filtered = !1),
                                        (r.searchColumns = d),
                                        (r.handlers = { updated: [] }),
                                        (r.plugins = {}),
                                        (r.valueNames = []),
                                        (r.utils = { getByClass: f, extend: g, indexOf: h, events: i, toString: j, naturalSort: k, classes: l, getAttribute: m, toArray: n }),
                                        r.utils.extend(r, c),
                                        (r.listContainer = "string" == typeof b ? e.getElementById(b) : b),
                                        r.listContainer &&
                                            ((r.list = f(r.listContainer, r.listClass, !0)),
                                            (r.parse = a("./src/parse")(r)),
                                            (r.templater = a("./src/templater")(r)),
                                            (r.search = a("./src/search")(r)),
                                            (r.filter = a("./src/filter")(r)),
                                            (r.sort = a("./src/sort")(r)),
                                            this.handlers(),
                                            this.items(),
                                            r.update(),
                                            this.plugins());
                                },
                                handlers: function () {
                                    for (var a in r.handlers) r[a] && r.on(a, r[a]);
                                },
                                items: function () {
                                    r.parse(r.list), p !== d && r.add(p);
                                },
                                plugins: function () {
                                    for (var a = 0; a < r.plugins.length; a++) {
                                        var b = r.plugins[a];
                                        (r[b.name] = b), b.init(r, o);
                                    }
                                },
                            }),
                                (this.reIndex = function () {
                                    (r.items = []), (r.visibleItems = []), (r.matchingItems = []), (r.searched = !1), (r.filtered = !1), r.parse(r.list);
                                }),
                                (this.toJSON = function () {
                                    for (var a = [], b = 0, c = r.items.length; c > b; b++) a.push(r.items[b].values());
                                    return a;
                                }),
                                (this.add = function (a, b) {
                                    if (0 !== a.length) {
                                        if (b) return void t(a, b);
                                        var c = [],
                                            e = !1;
                                        a[0] === d && (a = [a]);
                                        for (var f = 0, g = a.length; g > f; f++) {
                                            var h = null;
                                            (e = r.items.length > r.page ? !0 : !1), (h = new s(a[f], d, e)), r.items.push(h), c.push(h);
                                        }
                                        return r.update(), c;
                                    }
                                }),
                                (this.show = function (a, b) {
                                    return (this.i = a), (this.page = b), r.update(), r;
                                }),
                                (this.remove = function (a, b, c) {
                                    for (var d = 0, e = 0, f = r.items.length; f > e; e++) r.items[e].values()[a] == b && (r.templater.remove(r.items[e], c), r.items.splice(e, 1), f--, e--, d++);
                                    return r.update(), d;
                                }),
                                (this.get = function (a, b) {
                                    for (var c = [], d = 0, e = r.items.length; e > d; d++) {
                                        var f = r.items[d];
                                        f.values()[a] == b && c.push(f);
                                    }
                                    return c;
                                }),
                                (this.size = function () {
                                    return r.items.length;
                                }),
                                (this.clear = function () {
                                    return r.templater.clear(), (r.items = []), r;
                                }),
                                (this.on = function (a, b) {
                                    return r.handlers[a].push(b), r;
                                }),
                                (this.off = function (a, b) {
                                    var c = r.handlers[a],
                                        d = h(c, b);
                                    return d > -1 && c.splice(d, 1), r;
                                }),
                                (this.trigger = function (a) {
                                    for (var b = r.handlers[a].length; b--; ) r.handlers[a][b](r);
                                    return r;
                                }),
                                (this.reset = {
                                    filter: function () {
                                        for (var a = r.items, b = a.length; b--; ) a[b].filtered = !1;
                                        return r;
                                    },
                                    search: function () {
                                        for (var a = r.items, b = a.length; b--; ) a[b].found = !1;
                                        return r;
                                    },
                                }),
                                (this.update = function () {
                                    var a = r.items,
                                        b = a.length;
                                    (r.visibleItems = []), (r.matchingItems = []), r.templater.clear();
                                    for (var c = 0; b > c; c++)
                                        a[c].matching() && r.matchingItems.length + 1 >= r.i && r.visibleItems.length < r.page
                                            ? (a[c].show(), r.visibleItems.push(a[c]), r.matchingItems.push(a[c]))
                                            : a[c].matching()
                                            ? (r.matchingItems.push(a[c]), a[c].hide())
                                            : a[c].hide();
                                    return r.trigger("updated"), r;
                                }),
                                q.start();
                        };
                    "function" == typeof define &&
                        define.amd &&
                        define(function () {
                            return o;
                        }),
                        (b.exports = o),
                        (c.List = o);
                })(window);
            },
            {
                "./src/add-async": 2,
                "./src/filter": 3,
                "./src/item": 4,
                "./src/parse": 5,
                "./src/search": 6,
                "./src/sort": 7,
                "./src/templater": 8,
                "./src/utils/classes": 9,
                "./src/utils/events": 10,
                "./src/utils/extend": 11,
                "./src/utils/get-attribute": 12,
                "./src/utils/get-by-class": 13,
                "./src/utils/index-of": 14,
                "./src/utils/natural-sort": 15,
                "./src/utils/to-array": 16,
                "./src/utils/to-string": 17,
            },
        ],
        2: [
            function (a, b, c) {
                b.exports = function (a) {
                    var b = function (c, d, e) {
                        var f = c.splice(0, 50);
                        (e = e || []),
                            (e = e.concat(a.add(f))),
                            c.length > 0
                                ? setTimeout(function () {
                                      b(c, d, e);
                                  }, 1)
                                : (a.update(), d(e));
                    };
                    return b;
                };
            },
            {},
        ],
        3: [
            function (a, b, c) {
                b.exports = function (a) {
                    return (
                        (a.handlers.filterStart = a.handlers.filterStart || []),
                        (a.handlers.filterComplete = a.handlers.filterComplete || []),
                        function (b) {
                            if ((a.trigger("filterStart"), (a.i = 1), a.reset.filter(), void 0 === b)) a.filtered = !1;
                            else {
                                a.filtered = !0;
                                for (var c = a.items, d = 0, e = c.length; e > d; d++) {
                                    var f = c[d];
                                    b(f) ? (f.filtered = !0) : (f.filtered = !1);
                                }
                            }
                            return a.update(), a.trigger("filterComplete"), a.visibleItems;
                        }
                    );
                };
            },
            {},
        ],
        4: [
            function (a, b, c) {
                b.exports = function (a) {
                    return function (b, c, d) {
                        var e = this;
                        (this._values = {}), (this.found = !1), (this.filtered = !1);
                        var f = function (b, c, d) {
                            if (void 0 === c) d ? e.values(b, d) : e.values(b);
                            else {
                                e.elm = c;
                                var f = a.templater.get(e, b);
                                e.values(f);
                            }
                        };
                        (this.values = function (b, c) {
                            if (void 0 === b) return e._values;
                            for (var d in b) e._values[d] = b[d];
                            c !== !0 && a.templater.set(e, e.values());
                        }),
                            (this.show = function () {
                                a.templater.show(e);
                            }),
                            (this.hide = function () {
                                a.templater.hide(e);
                            }),
                            (this.matching = function () {
                                return (a.filtered && a.searched && e.found && e.filtered) || (a.filtered && !a.searched && e.filtered) || (!a.filtered && a.searched && e.found) || (!a.filtered && !a.searched);
                            }),
                            (this.visible = function () {
                                return e.elm && e.elm.parentNode == a.list ? !0 : !1;
                            }),
                            f(b, c, d);
                    };
                };
            },
            {},
        ],
        5: [
            function (a, b, c) {
                b.exports = function (b) {
                    var c = a("./item")(b),
                        d = function (a) {
                            for (var b = a.childNodes, c = [], d = 0, e = b.length; e > d; d++) void 0 === b[d].data && c.push(b[d]);
                            return c;
                        },
                        e = function (a, d) {
                            for (var e = 0, f = a.length; f > e; e++) b.items.push(new c(d, a[e]));
                        },
                        f = function (a, c) {
                            var d = a.splice(0, 50);
                            e(d, c),
                                a.length > 0
                                    ? setTimeout(function () {
                                          f(a, c);
                                      }, 1)
                                    : (b.update(), b.trigger("parseComplete"));
                        };
                    return (
                        (b.handlers.parseComplete = b.handlers.parseComplete || []),
                        function () {
                            var a = d(b.list),
                                c = b.valueNames;
                            b.indexAsync ? f(a, c) : e(a, c);
                        }
                    );
                };
            },
            { "./item": 4 },
        ],
        6: [
            function (a, b, c) {
                b.exports = function (a) {
                    var b,
                        c,
                        d,
                        e,
                        f = {
                            resetList: function () {
                                (a.i = 1), a.templater.clear(), (e = void 0);
                            },
                            setOptions: function (a) {
                                2 == a.length && a[1] instanceof Array ? (c = a[1]) : 2 == a.length && "function" == typeof a[1] ? (e = a[1]) : 3 == a.length && ((c = a[1]), (e = a[2]));
                            },
                            setColumns: function () {
                                0 !== a.items.length && void 0 === c && (c = void 0 === a.searchColumns ? f.toArray(a.items[0].values()) : a.searchColumns);
                            },
                            setSearchString: function (b) {
                                (b = a.utils.toString(b).toLowerCase()), (b = b.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&")), (d = b);
                            },
                            toArray: function (a) {
                                var b = [];
                                for (var c in a) b.push(c);
                                return b;
                            },
                        },
                        g = {
                            list: function () {
                                for (var b = 0, c = a.items.length; c > b; b++) g.item(a.items[b]);
                            },
                            item: function (a) {
                                a.found = !1;
                                for (var b = 0, d = c.length; d > b; b++) if (g.values(a.values(), c[b])) return void (a.found = !0);
                            },
                            values: function (c, e) {
                                return c.hasOwnProperty(e) && ((b = a.utils.toString(c[e]).toLowerCase()), "" !== d && b.search(d) > -1) ? !0 : !1;
                            },
                            reset: function () {
                                a.reset.search(), (a.searched = !1);
                            },
                        },
                        h = function (b) {
                            return (
                                a.trigger("searchStart"),
                                f.resetList(),
                                f.setSearchString(b),
                                f.setOptions(arguments),
                                f.setColumns(),
                                "" === d ? g.reset() : ((a.searched = !0), e ? e(d, c) : g.list()),
                                a.update(),
                                a.trigger("searchComplete"),
                                a.visibleItems
                            );
                        };
                    return (
                        (a.handlers.searchStart = a.handlers.searchStart || []),
                        (a.handlers.searchComplete = a.handlers.searchComplete || []),
                        a.utils.events.bind(a.utils.getByClass(a.listContainer, a.searchClass), "keyup", function (b) {
                            var c = b.target || b.srcElement,
                                d = "" === c.value && !a.searched;
                            d || h(c.value);
                        }),
                        a.utils.events.bind(a.utils.getByClass(a.listContainer, a.searchClass), "input", function (a) {
                            var b = a.target || a.srcElement;
                            "" === b.value && h("");
                        }),
                        h
                    );
                };
            },
            {},
        ],
        7: [
            function (a, b, c) {
                b.exports = function (a) {
                    a.sortFunction =
                        a.sortFunction ||
                        function (b, c, d) {
                            return (d.desc = "desc" == d.order ? !0 : !1), a.utils.naturalSort(b.values()[d.valueName], c.values()[d.valueName], d);
                        };
                    var b = {
                            els: void 0,
                            clear: function () {
                                for (var c = 0, d = b.els.length; d > c; c++) a.utils.classes(b.els[c]).remove("asc"), a.utils.classes(b.els[c]).remove("desc");
                            },
                            getOrder: function (b) {
                                var c = a.utils.getAttribute(b, "data-order");
                                return "asc" == c || "desc" == c ? c : a.utils.classes(b).has("desc") ? "asc" : a.utils.classes(b).has("asc") ? "desc" : "asc";
                            },
                            getInSensitive: function (b, c) {
                                var d = a.utils.getAttribute(b, "data-insensitive");
                                "false" === d ? (c.insensitive = !1) : (c.insensitive = !0);
                            },
                            setOrder: function (c) {
                                for (var d = 0, e = b.els.length; e > d; d++) {
                                    var f = b.els[d];
                                    if (a.utils.getAttribute(f, "data-sort") === c.valueName) {
                                        var g = a.utils.getAttribute(f, "data-order");
                                        "asc" == g || "desc" == g ? g == c.order && a.utils.classes(f).add(c.order) : a.utils.classes(f).add(c.order);
                                    }
                                }
                            },
                        },
                        c = function () {
                            a.trigger("sortStart");
                            var c = {},
                                d = arguments[0].currentTarget || arguments[0].srcElement || void 0;
                            d
                                ? ((c.valueName = a.utils.getAttribute(d, "data-sort")), b.getInSensitive(d, c), (c.order = b.getOrder(d)))
                                : ((c = arguments[1] || c), (c.valueName = arguments[0]), (c.order = c.order || "asc"), (c.insensitive = "undefined" == typeof c.insensitive ? !0 : c.insensitive)),
                                b.clear(),
                                b.setOrder(c),
                                (c.sortFunction = c.sortFunction || a.sortFunction),
                                a.items.sort(function (a, b) {
                                    var d = "desc" === c.order ? -1 : 1;
                                    return c.sortFunction(a, b, c) * d;
                                }),
                                a.update(),
                                a.trigger("sortComplete");
                        };
                    return (
                        (a.handlers.sortStart = a.handlers.sortStart || []),
                        (a.handlers.sortComplete = a.handlers.sortComplete || []),
                        (b.els = a.utils.getByClass(a.listContainer, a.sortClass)),
                        a.utils.events.bind(b.els, "click", c),
                        a.on("searchStart", b.clear),
                        a.on("filterStart", b.clear),
                        c
                    );
                };
            },
            {},
        ],
        8: [
            function (a, b, c) {
                var d = function (a) {
                    var b,
                        c = this,
                        d = function () {
                            (b = c.getItemSource(a.item)), (b = c.clearSourceItem(b, a.valueNames));
                        };
                    (this.clearSourceItem = function (b, c) {
                        for (var d = 0, e = c.length; e > d; d++) {
                            var f;
                            if (c[d].data) for (var g = 0, h = c[d].data.length; h > g; g++) b.setAttribute("data-" + c[d].data[g], "");
                            else c[d].attr && c[d].name ? ((f = a.utils.getByClass(b, c[d].name, !0)), f && f.setAttribute(c[d].attr, "")) : ((f = a.utils.getByClass(b, c[d], !0)), f && (f.innerHTML = ""));
                            f = void 0;
                        }
                        return b;
                    }),
                        (this.getItemSource = function (b) {
                            if (void 0 === b) {
                                for (var c = a.list.childNodes, d = 0, e = c.length; e > d; d++) if (void 0 === c[d].data) return c[d].cloneNode(!0);
                            } else {
                                if (/^tr[\s>]/.exec(b)) {
                                    var f = document.createElement("table");
                                    return (f.innerHTML = b), f.firstChild;
                                }
                                if (-1 !== b.indexOf("<")) {
                                    var g = document.createElement("div");
                                    return (g.innerHTML = b), g.firstChild;
                                }
                                var h = document.getElementById(a.item);
                                if (h) return h;
                            }
                            throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
                        }),
                        (this.get = function (b, d) {
                            c.create(b);
                            for (var e = {}, f = 0, g = d.length; g > f; f++) {
                                var h;
                                if (d[f].data) for (var i = 0, j = d[f].data.length; j > i; i++) e[d[f].data[i]] = a.utils.getAttribute(b.elm, "data-" + d[f].data[i]);
                                else
                                    d[f].attr && d[f].name
                                        ? ((h = a.utils.getByClass(b.elm, d[f].name, !0)), (e[d[f].name] = h ? a.utils.getAttribute(h, d[f].attr) : ""))
                                        : ((h = a.utils.getByClass(b.elm, d[f], !0)), (e[d[f]] = h ? h.innerHTML : ""));
                                h = void 0;
                            }
                            return e;
                        }),
                        (this.set = function (b, d) {
                            var e = function (b) {
                                    for (var c = 0, d = a.valueNames.length; d > c; c++)
                                        if (a.valueNames[c].data) {
                                            for (var e = a.valueNames[c].data, f = 0, g = e.length; g > f; f++) if (e[f] === b) return { data: b };
                                        } else {
                                            if (a.valueNames[c].attr && a.valueNames[c].name && a.valueNames[c].name == b) return a.valueNames[c];
                                            if (a.valueNames[c] === b) return b;
                                        }
                                },
                                f = function (c, d) {
                                    var f,
                                        g = e(c);
                                    g &&
                                        (g.data
                                            ? b.elm.setAttribute("data-" + g.data, d)
                                            : g.attr && g.name
                                            ? ((f = a.utils.getByClass(b.elm, g.name, !0)), f && f.setAttribute(g.attr, d))
                                            : ((f = a.utils.getByClass(b.elm, g, !0)), f && (f.innerHTML = d)),
                                        (f = void 0));
                                };
                            if (!c.create(b)) for (var g in d) d.hasOwnProperty(g) && f(g, d[g]);
                        }),
                        (this.create = function (a) {
                            if (void 0 !== a.elm) return !1;
                            var d = b.cloneNode(!0);
                            return d.removeAttribute("id"), (a.elm = d), c.set(a, a.values()), !0;
                        }),
                        (this.remove = function (b) {
                            b.elm.parentNode === a.list && a.list.removeChild(b.elm);
                        }),
                        (this.show = function (b) {
                            c.create(b), a.list.appendChild(b.elm);
                        }),
                        (this.hide = function (b) {
                            void 0 !== b.elm && b.elm.parentNode === a.list && a.list.removeChild(b.elm);
                        }),
                        (this.clear = function () {
                            if (a.list.hasChildNodes()) for (; a.list.childNodes.length >= 1; ) a.list.removeChild(a.list.firstChild);
                        }),
                        d();
                };
                b.exports = function (a) {
                    return new d(a);
                };
            },
            {},
        ],
        9: [
            function (a, b, c) {
                function d(a) {
                    if (!a || !a.nodeType) throw new Error("A DOM element reference is required");
                    (this.el = a), (this.list = a.classList);
                }
                var e = a("./index-of"),
                    f = /\s+/,
                    g = Object.prototype.toString;
                (b.exports = function (a) {
                    return new d(a);
                }),
                    (d.prototype.add = function (a) {
                        if (this.list) return this.list.add(a), this;
                        var b = this.array(),
                            c = e(b, a);
                        return ~c || b.push(a), (this.el.className = b.join(" ")), this;
                    }),
                    (d.prototype.remove = function (a) {
                        if ("[object RegExp]" == g.call(a)) return this.removeMatching(a);
                        if (this.list) return this.list.remove(a), this;
                        var b = this.array(),
                            c = e(b, a);
                        return ~c && b.splice(c, 1), (this.el.className = b.join(" ")), this;
                    }),
                    (d.prototype.removeMatching = function (a) {
                        for (var b = this.array(), c = 0; c < b.length; c++) a.test(b[c]) && this.remove(b[c]);
                        return this;
                    }),
                    (d.prototype.toggle = function (a, b) {
                        return this.list
                            ? ("undefined" != typeof b ? b !== this.list.toggle(a, b) && this.list.toggle(a) : this.list.toggle(a), this)
                            : ("undefined" != typeof b ? (b ? this.add(a) : this.remove(a)) : this.has(a) ? this.remove(a) : this.add(a), this);
                    }),
                    (d.prototype.array = function () {
                        var a = this.el.getAttribute("class") || "",
                            b = a.replace(/^\s+|\s+$/g, ""),
                            c = b.split(f);
                        return "" === c[0] && c.shift(), c;
                    }),
                    (d.prototype.has = d.prototype.contains = function (a) {
                        return this.list ? this.list.contains(a) : !!~e(this.array(), a);
                    });
            },
            { "./index-of": 14 },
        ],
        10: [
            function (a, b, c) {
                var d = window.addEventListener ? "addEventListener" : "attachEvent",
                    e = window.removeEventListener ? "removeEventListener" : "detachEvent",
                    f = "addEventListener" !== d ? "on" : "",
                    g = a("./to-array");
                (c.bind = function (a, b, c, e) {
                    a = g(a);
                    for (var h = 0; h < a.length; h++) a[h][d](f + b, c, e || !1);
                }),
                    (c.unbind = function (a, b, c, d) {
                        a = g(a);
                        for (var h = 0; h < a.length; h++) a[h][e](f + b, c, d || !1);
                    });
            },
            { "./to-array": 16 },
        ],
        11: [
            function (a, b, c) {
                b.exports = function (a) {
                    for (var b, c = Array.prototype.slice.call(arguments, 1), d = 0; (b = c[d]); d++) if (b) for (var e in b) a[e] = b[e];
                    return a;
                };
            },
            {},
        ],
        12: [
            function (a, b, c) {
                b.exports = function (a, b) {
                    var c = (a.getAttribute && a.getAttribute(b)) || null;
                    if (!c) for (var d = a.attributes, e = d.length, f = 0; e > f; f++) void 0 !== b[f] && b[f].nodeName === b && (c = b[f].nodeValue);
                    return c;
                };
            },
            {},
        ],
        13: [
            function (a, b, c) {
                b.exports = (function () {
                    return document.getElementsByClassName
                        ? function (a, b, c) {
                              return c ? a.getElementsByClassName(b)[0] : a.getElementsByClassName(b);
                          }
                        : document.querySelector
                        ? function (a, b, c) {
                              return (b = "." + b), c ? a.querySelector(b) : a.querySelectorAll(b);
                          }
                        : function (a, b, c) {
                              var d = [],
                                  e = "*";
                              null === a && (a = document);
                              for (var f = a.getElementsByTagName(e), g = f.length, h = new RegExp("(^|\\s)" + b + "(\\s|$)"), i = 0, j = 0; g > i; i++)
                                  if (h.test(f[i].className)) {
                                      if (c) return f[i];
                                      (d[j] = f[i]), j++;
                                  }
                              return d;
                          };
                })();
            },
            {},
        ],
        14: [
            function (a, b, c) {
                var d = [].indexOf;
                b.exports = function (a, b) {
                    if (d) return a.indexOf(b);
                    for (var c = 0; c < a.length; ++c) if (a[c] === b) return c;
                    return -1;
                };
            },
            {},
        ],
        15: [
            function (a, b, c) {
                b.exports = function (a, b, c) {
                    var d,
                        e,
                        f = /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[\da-fA-F]+$|\d+)/g,
                        g = /^\s+|\s+$/g,
                        h = /\s+/g,
                        i = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                        j = /^0x[0-9a-f]+$/i,
                        k = /^0/,
                        l = c || {},
                        m = function (a) {
                            return (l.insensitive && ("" + a).toLowerCase()) || "" + a;
                        },
                        n = m(a) || "",
                        o = m(b) || "",
                        p = n.replace(f, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
                        q = o.replace(f, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
                        r = parseInt(n.match(j), 16) || (1 !== p.length && Date.parse(n)),
                        s = parseInt(o.match(j), 16) || (r && o.match(i) && Date.parse(o)) || null,
                        t = function (a, b) {
                            return ((!a.match(k) || 1 == b) && parseFloat(a)) || a.replace(h, " ").replace(g, "") || 0;
                        };
                    if (s) {
                        if (s > r) return -1;
                        if (r > s) return 1;
                    }
                    for (var u = 0, v = p.length, w = q.length, x = Math.max(v, w); x > u; u++) {
                        if (((d = t(p[u], v)), (e = t(q[u], w)), isNaN(d) !== isNaN(e))) return isNaN(d) ? 1 : -1;
                        if ((typeof d != typeof e && ((d += ""), (e += "")), e > d)) return -1;
                        if (d > e) return 1;
                    }
                    return 0;
                };
            },
            {},
        ],
        16: [
            function (a, b, c) {
                function d(a) {
                    return "[object Array]" === Object.prototype.toString.call(a);
                }
                b.exports = function (a) {
                    if ("undefined" == typeof a) return [];
                    if (null === a) return [null];
                    if (a === window) return [window];
                    if ("string" == typeof a) return [a];
                    if (d(a)) return a;
                    if ("number" != typeof a.length) return [a];
                    if ("function" == typeof a && a instanceof Function) return [a];
                    for (var b = [], c = 0; c < a.length; c++) (Object.prototype.hasOwnProperty.call(a, c) || c in a) && b.push(a[c]);
                    return b.length ? b : [];
                };
            },
            {},
        ],
        17: [
            function (a, b, c) {
                b.exports = function (a) {
                    return (a = void 0 === a ? "" : a), (a = null === a ? "" : a), (a = a.toString());
                };
            },
            {},
        ],
    },
    {},
    [1]
);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//main.js

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// helper functions
	// from https://davidwalsh.name/vendor-prefix
	var prefix = (function () {
		var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		
		return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		};
	})();
	
	// vars & stuff
	var support = {transitions : Modernizr.csstransitions},
		transEndEventNames = {'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend'},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		onEndTransition = function(el, callback, propTest) {
			var onEndCallbackFn = function( ev ) {
				if( support.transitions ) {
					if( ev.target != this || propTest && ev.propertyName !== propTest && ev.propertyName !== prefix.css + propTest ) return;
					this.removeEventListener( transEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(this); }
			};
			if( support.transitions ) {
				el.addEventListener( transEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		},
		// the mall element
		mall = document.querySelector('.mall'),
		// mall´s levels wrapper
		mallLevelsEl = mall.querySelector('.levels'),
		// mall´s levels
		mallLevels = [].slice.call(mallLevelsEl.querySelectorAll('.level')),
		// total levels
		mallLevelsTotal = mallLevels.length,
		// surroundings elems
		mallSurroundings = [].slice.call(mall.querySelectorAll('.surroundings')),
		// selected level position
		selectedLevel,
		// navigation element wrapper
		mallNav = document.querySelector('.mallnav'),
		// show all mall´s levels ctrl
		allLevelsCtrl = mallNav.querySelector('.mallnav__button--all-levels'),
		// levels navigation up/down ctrls
		levelUpCtrl = mallNav.querySelector('.mallnav__button--up'),
		levelDownCtrl = mallNav.querySelector('.mallnav__button--down'),
		// pins
		pins = [].slice.call(mallLevelsEl.querySelectorAll('.pin')),
		// content element
		contentEl = document.querySelector('.content'),
		// content close ctrl
		contentCloseCtrl = contentEl.querySelector('button.content__button'),
		// check if a content item is opened
		isOpenContentArea,
		// check if currently animating/navigating
		isNavigating,
		// check if all levels are shown or if one level is shown (expanded)
		isExpanded,
		// spaces list element
		spacesListEl = document.getElementById('spaces-list'),
		// spaces list ul
		spacesEl = spacesListEl.querySelector('ul.list'),
		// all the spaces listed
		spaces = [].slice.call(spacesEl.querySelectorAll('.list__item > a.list__link')),
		// reference to the current shows space (name set in the data-name attr of both the listed spaces and the pins on the map)
		spaceref,
		// sort by ctrls
		sortByNameCtrl = document.querySelector('#sort-by-name'),
		// listjs initiliazation (all mall´s spaces)
		spacesList = new List('spaces-list', { valueNames: ['list__link', { data: ['level'] }, { data: ['category'] } ]} ),

		// smaller screens:
		// open search ctrl
		openSearchCtrl = document.querySelector('button.open-search'),
		// main container
		containerEl = document.querySelector('.container'),
		// close search ctrl
		closeSearchCtrl = spacesListEl.querySelector('button.close-search');

	function init() {
		// init/bind events
		initEvents();
	}

	/**
	 * Initialize/Bind events fn.
	 */
	function initEvents() {
		// click on a Mall´s level
		mallLevels.forEach(function(level, pos) {
			level.addEventListener('click', function() {
				// shows this level
				showLevel(pos+1);
			});
		});

		// click on the show mall´s levels ctrl
		allLevelsCtrl.addEventListener('click', function() {
			// shows all levels
			showAllLevels();
		});

		// navigating through the levels
		levelUpCtrl.addEventListener('click', function() { navigate('Down'); });
		levelDownCtrl.addEventListener('click', function() { navigate('Up'); });

		// sort by name ctrl - add/remove category name (css pseudo element) from list and sorts the spaces by name 
		sortByNameCtrl.addEventListener('click', function() {
			if( this.checked ) {
				classie.remove(spacesEl, 'grouped-by-category');
				spacesList.sort('list__link');
			}
			else {
				classie.add(spacesEl, 'grouped-by-category'); 
				spacesList.sort('category');
			}
		});

		// hovering a pin / clicking a pin
		pins.forEach(function(pin) {
			var contentItem = contentEl.querySelector('.content__item[data-space="' + pin.getAttribute('data-space') + '"]');

			pin.addEventListener('mouseenter', function() {
				if( !isOpenContentArea ) {
					classie.add(contentItem, 'content__item--hover');
				}
			});
			pin.addEventListener('mouseleave', function() {
				if( !isOpenContentArea ) {
					classie.remove(contentItem, 'content__item--hover');
				}
			});
			pin.addEventListener('click', function(ev) {
				ev.preventDefault();
				// open content for this pin
				openContent(pin.getAttribute('data-space'));
				// remove hover class (showing the title)
				classie.remove(contentItem, 'content__item--hover');
			});
		});

		// closing the content area
		contentCloseCtrl.addEventListener('click', function() {
			closeContentArea();
		});

		// clicking on a listed space: open level - shows space
		spaces.forEach(function(space) {
			var spaceItem = space.parentNode,
				level = spaceItem.getAttribute('data-level'),
				spacerefval = spaceItem.getAttribute('data-space');

			space.addEventListener('click', function(ev) {
				ev.preventDefault();
				// for smaller screens: close search bar
				closeSearch();
				// open level
				showLevel(level);
				// open content for this space
				openContent(spacerefval);
			});
		});

		// smaller screens: open the search bar
		openSearchCtrl.addEventListener('click', function() {
			openSearch();
		});

		// smaller screens: close the search bar
		closeSearchCtrl.addEventListener('click', function() {
			closeSearch();
		});
	}

	/**
	 * Opens a level. The current level moves to the center while the other ones move away.
	 */
	function showLevel(level) {
		if( isExpanded ) {
			return false;
		}
		
		// update selected level val
		selectedLevel = level;

		// control navigation controls state
		setNavigationState();

		classie.add(mallLevelsEl, 'levels--selected-' + selectedLevel);
		
		// the level element
		var levelEl = mallLevels[selectedLevel - 1];
		classie.add(levelEl, 'level--current');

		onEndTransition(levelEl, function() {
			classie.add(mallLevelsEl, 'levels--open');

			// show level pins
			showPins();

			isExpanded = true;
		}, 'transform');
		
		// hide surroundings element
		hideSurroundings();
		
		// show mall nav ctrls
		showMallNav();

		// filter the spaces for this level
		showLevelSpaces();
	}

	/**
	 * Shows all Mall´s levels
	 */
	function showAllLevels() {
		if( isNavigating || !isExpanded ) {
			return false;
		}
		isExpanded = false;

		classie.remove(mallLevels[selectedLevel - 1], 'level--current');
		classie.remove(mallLevelsEl, 'levels--selected-' + selectedLevel);
		classie.remove(mallLevelsEl, 'levels--open');

		// hide level pins
		removePins();

		// shows surrounding element
		showSurroundings();
		
		// hide mall nav ctrls
		hideMallNav();

		// show back the complete list of spaces
		spacesList.filter();

		// close content area if it is open
		if( isOpenContentArea ) {
			closeContentArea();
		}
	}

	/**
	 * Shows all spaces for current level
	 */
	function showLevelSpaces() {
		spacesList.filter(function(item) { 
			return item.values().level === selectedLevel.toString(); 
		});
	}

	/**
	 * Shows the level´s pins
	 */
	function showPins(levelEl) {
		var levelEl = levelEl || mallLevels[selectedLevel - 1];
		classie.add(levelEl.querySelector('.level__pins'), 'level__pins--active');
	}

	/**
	 * Removes the level´s pins
	 */
	function removePins(levelEl) {
		var levelEl = levelEl || mallLevels[selectedLevel - 1];
		classie.remove(levelEl.querySelector('.level__pins'), 'level__pins--active');
	}

	/**
	 * Show the navigation ctrls
	 */
	function showMallNav() {
		classie.remove(mallNav, 'mallnav--hidden');
	}

	/**
	 * Hide the navigation ctrls
	 */
	function hideMallNav() {
		classie.add(mallNav, 'mallnav--hidden');
	}

	/**
	 * Show the surroundings level
	 */
	function showSurroundings() {
		mallSurroundings.forEach(function(el) {
			classie.remove(el, 'surroundings--hidden');
		});
	}

	/**
	 * Hide the surroundings level
	 */
	function hideSurroundings() {
		mallSurroundings.forEach(function(el) {
			classie.add(el, 'surroundings--hidden');
		});
	}

	/**
	 * Navigate through the mall´s levels
	 */
	function navigate(direction) {
		if( isNavigating || !isExpanded || isOpenContentArea ) {
			return false;
		}
		isNavigating = true;

		var prevSelectedLevel = selectedLevel;

		// current level
		var currentLevel = mallLevels[prevSelectedLevel-1];

		if( direction === 'Up' && prevSelectedLevel > 1 ) {
			--selectedLevel;
		}
		else if( direction === 'Down' && prevSelectedLevel < mallLevelsTotal ) {
			++selectedLevel;
		}
		else {
			isNavigating = false;	
			return false;
		}

		// control navigation controls state (enabled/disabled)
		setNavigationState();
		// transition direction class
		classie.add(currentLevel, 'level--moveOut' + direction);
		// next level element
		var nextLevel = mallLevels[selectedLevel-1]
		// ..becomes the current one
		classie.add(nextLevel, 'level--current');

		// when the transition ends..
		onEndTransition(currentLevel, function() {
			classie.remove(currentLevel, 'level--moveOut' + direction);
			// solves rendering bug for the SVG opacity-fill property
			setTimeout(function() {classie.remove(currentLevel, 'level--current');}, 60);

			classie.remove(mallLevelsEl, 'levels--selected-' + prevSelectedLevel);
			classie.add(mallLevelsEl, 'levels--selected-' + selectedLevel);

			// show the current level´s pins
			showPins();

			isNavigating = false;
		});

		// filter the spaces for this level
		showLevelSpaces();

		// hide the previous level´s pins
		removePins(currentLevel);
	}

	/**
	 * Control navigation ctrls state. Add disable class to the respective ctrl when the current level is either the first or the last.
	 */
	function setNavigationState() {
		if( selectedLevel == 1 ) {
			classie.add(levelDownCtrl, 'boxbutton--disabled');
		}
		else {
			classie.remove(levelDownCtrl, 'boxbutton--disabled');
		}

		if( selectedLevel == mallLevelsTotal ) {
			classie.add(levelUpCtrl, 'boxbutton--disabled');
		}
		else {
			classie.remove(levelUpCtrl, 'boxbutton--disabled');
		}
	}

	/**
	 * Opens/Reveals a content item.
	 */
	function openContent(spacerefval) {
		// if one already shown:
		if( isOpenContentArea ) {
			hideSpace();
			spaceref = spacerefval;
			showSpace();
		}
		else {
			spaceref = spacerefval;
			openContentArea();
		}
		
		// remove class active (if any) from current list item
		var activeItem = spacesEl.querySelector('li.list__item--active');
		if( activeItem ) {
			classie.remove(activeItem, 'list__item--active');
		}
		// list item gets class active (if the list item is currently shown in the list)
		var listItem = spacesEl.querySelector('li[data-space="' + spacerefval + '"]')
		if( listItem ) {
			classie.add(listItem, 'list__item--active');
		}

		// remove class selected (if any) from current space
		var activeSpaceArea = mallLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
		if( activeSpaceArea ) {
			classie.remove(activeSpaceArea, 'map__space--selected');
		}
		// svg area gets selected
		classie.add(mallLevels[selectedLevel - 1].querySelector('svg > .map__space[data-space="' + spaceref + '"]'), 'map__space--selected');
	}

	/**
	 * Opens the content area.
	 */
	function openContentArea() {
		isOpenContentArea = true;
		// shows space
		showSpace(true);
		// show close ctrl
		classie.remove(contentCloseCtrl, 'content__button--hidden');
		// resize mall area
		classie.add(mall, 'mall--content-open');
		// disable mall nav ctrls
		classie.add(levelDownCtrl, 'boxbutton--disabled');
		classie.add(levelUpCtrl, 'boxbutton--disabled');
	}

	/**
	 * Shows a space.
	 */
	function showSpace(sliding) {
		// the content item
		var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
		// show content
		classie.add(contentItem, 'content__item--current');
		if( sliding ) {
			onEndTransition(contentItem, function() {
				classie.add(contentEl, 'content--open');
			});
		}
		// map pin gets selected
		classie.add(mallLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
	}

	/**
	 * Closes the content area.
	 */
	function closeContentArea() {
		classie.remove(contentEl, 'content--open');
		// close current space
		hideSpace();
		// hide close ctrl
		classie.add(contentCloseCtrl, 'content__button--hidden');
		// resize mall area
		classie.remove(mall, 'mall--content-open');
		// enable mall nav ctrls
		if( isExpanded ) {
			setNavigationState();
		}
		isOpenContentArea = false;
	}

	/**
	 * Hides a space.
	 */
	function hideSpace() {
		// the content item
		var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
		// hide content
		classie.remove(contentItem, 'content__item--current');
		// map pin gets unselected
		classie.remove(mallLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
		// remove class active (if any) from current list item
		var activeItem = spacesEl.querySelector('li.list__item--active');
		if( activeItem ) {
			classie.remove(activeItem, 'list__item--active');
		}
		// remove class selected (if any) from current space
		var activeSpaceArea = mallLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
		if( activeSpaceArea ) {
			classie.remove(activeSpaceArea, 'map__space--selected');
		}
	}

	/**
	 * for smaller screens: open search bar
	 */
	function openSearch() {
		// shows all levels - we want to show all the spaces for smaller screens 
		showAllLevels();

		classie.add(spacesListEl, 'spaces-list--open');
		classie.add(containerEl, 'container--overflow');
	}

	/**
	 * for smaller screens: close search bar
	 */
	function closeSearch() {
		classie.remove(spacesListEl, 'spaces-list--open');
		classie.remove(containerEl, 'container--overflow');
	}
	
	init();

})(window);