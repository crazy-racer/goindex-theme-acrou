! function(e) {
    function t(t) {
        for (var n, r, c = t[0], s = t[1], u = t[2], d = 0, f = []; d < c.length; d++) r = c[d], Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]), o[r] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        for (l && l(t); f.length;) f.shift()();
        return i.push.apply(i, u || []), a()
    }

    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], n = !0, r = 1; r < a.length; r++) {
                var s = a[r];
                0 !== o[s] && (n = !1)
            }
            n && (i.splice(t--, 1), e = c(c.s = a[0]))
        }
        return e
    }
    var n = {},
        r = {
            app: 0
        },
        o = {
            app: 0
        },
        i = [];

    function c(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports
    }
    c.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            "chunk-02979915": 1,
            "chunk-1f1f60af": 1,
            "chunk-6f177d7a": 1,
            "chunk-075e2f32": 1,
            "chunk-4b66a741": 1,
            "chunk-57544d36": 1,
            "chunk-74a0e63a": 1
        } [e] && t.push(r[e] = new Promise(function(t, a) {
            for (var n = "css/" + ({} [e] || e) + "." + {
                    "chunk-02979915": "7494f567",
                    "chunk-2d225416": "31d6cfe0",
                    "chunk-0609f824": "31d6cfe0",
                    "chunk-1f1f60af": "5e8b0fa8",
                    "chunk-2d0af48a": "31d6cfe0",
                    "chunk-6f177d7a": "9b848216",
                    "chunk-072ae9f4": "31d6cfe0",
                    "chunk-075e2f32": "63d5b552",
                    "chunk-2d0b2ee4": "31d6cfe0",
                    "chunk-2d0f0fbe": "31d6cfe0",
                    "chunk-4b66a741": "9b848216",
                    "chunk-57544d36": "30be7901",
                    "chunk-74a0e63a": "63fc079f",
                    "chunk-2d1e3ca3": "31d6cfe0",
                    "chunk-40ad1794": "31d6cfe0"
                } [e] + ".css", o = c.p + n, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var u = i[s],
                    d = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (d === n || d === o)) return t()
            }
            var l = document.getElementsByTagName("style");
            for (s = 0; s < l.length; s++)
                if ((d = (u = l[s]).getAttribute("data-href")) === n || d === o) return t();
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function(t) {
                var n = t && t.target && t.target.src || o,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = n, delete r[e], f.parentNode.removeChild(f), a(i)
            }, f.href = o, document.getElementsByTagName("head")[0].appendChild(f)
        }).then(function() {
            r[e] = 0
        }));
        var a = o[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var n = new Promise(function(t, n) {
                    a = o[e] = [t, n]
                });
                t.push(a[2] = n);
                var i, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = function(e) {
                    return c.p + "js/" + ({} [e] || e) + "." + {
                        "chunk-02979915": "dbf243db",
                        "chunk-2d225416": "434bb4f5",
                        "chunk-0609f824": "2923b048",
                        "chunk-1f1f60af": "aa1f85c9",
                        "chunk-2d0af48a": "2a7f864b",
                        "chunk-6f177d7a": "9e63a858",
                        "chunk-072ae9f4": "ba799a67",
                        "chunk-075e2f32": "a72b9966",
                        "chunk-2d0b2ee4": "4b78daef",
                        "chunk-2d0f0fbe": "69f90caa",
                        "chunk-4b66a741": "931e3990",
                        "chunk-57544d36": "20baab1a",
                        "chunk-74a0e63a": "c88af107",
                        "chunk-2d1e3ca3": "6f34a72d",
                        "chunk-40ad1794": "9718f8ab"
                    } [e] + ".js"
                }(e);
                var u = new Error;
                i = function(t) {
                    s.onerror = s.onload = null, clearTimeout(d);
                    var a = o[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", u.name = "ChunkLoadError", u.type = n, u.request = r, a[1](u)
                        }
                        o[e] = void 0
                    }
                };
                var d = setTimeout(function() {
                    i({
                        type: "timeout",
                        target: s
                    })
                }, 12e4);
                s.onerror = s.onload = i, document.head.appendChild(s)
            } return Promise.all(t)
    }, c.m = e, c.c = n, c.d = function(e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) c.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/", c.oe = function(e) {
        throw console.error(e), e
    };
    var s = window.webpackJsonp = window.webpackJsonp || [],
        u = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var d = 0; d < s.length; d++) t(s[d]);
    var l = u;
    i.push([0, "chunk-vendors"]), a()
}({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "0853": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = (a("d3b7"), a("3ca3"), a("ddb0"), a("5530")),
            r = a("5880"),
            o = {
                data: function() {
                    return {}
                },
                mounted: function() {
                    var e = this;
                    this.load(), Promise.all([a.e("chunk-74a0e63a").then(a.t.bind(null, "764d", 7)), a.e("chunk-2d0f0fbe").then(a.t.bind(null, "9f61", 7))]).then(function(t) {
                        var a = t[1].default;
                        e.set(new a(e.options))
                    })
                },
                computed: Object(n.a)({}, Object(r.mapState)("acrou/aplayer", ["player", "audios", "openedAudios"]), {
                    container: function() {
                        return document.getElementById("aplayer")
                    },
                    options: function() {
                        var e = window.themeOptions.audio;
                        return Object(n.a)({
                            autoplay: !1,
                            loop: "all",
                            order: "list",
                            preload: "auto"
                        }, e, {
                            container: this.container,
                            fixed: !0,
                            audio: this.audios || []
                        })
                    },
                    show: function() {
                        return this.audios && this.audios.length > 0 || this.openedAudios && this.openedAudios.length > 0
                    }
                }),
                methods: Object(n.a)({}, Object(r.mapActions)("acrou/aplayer", ["load", "set"]))
            },
            i = a("2877"),
            c = Object(i.a)(o, function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    attrs: {
                        id: "aplayer"
                    }
                })
            }, [], !1, null, null, null);
        t.default = c.exports
    },
    "2e32": function(e) {
        e.exports = JSON.parse('{"_name":"简体中文","languages":"选择语言","index":"首页","folder":"文件夹","notify":{"title":"提示"},"copy":{"text":"复制","success":"复制成功","error":"复制失败"},"list":{"view":{"gridMode":"网格视图","listMode":"列表视图"},"auth":"目录加密，请输入密码","title":{"file":"文件","moditime":"修改时间","size":"大小","operation":"操作"},"loading":"加载中...","opt":{"copy":"复制链接","newTab":"打开新的标签页","download":"下载"},"total":"共","item":"项"},"search":{"placeholder":"搜索..."},"page":{"video":{"play":"播放","download":"下载","link":"下载地址"},"text":{"loading":"加载中..."}},"setting":{"clear":{"text":"清理缓存","success":"缓存清理成功"}},"checkVersion":{"tips":"检测到有新版本，<a href=\'${url}\'>前往GitHub</a>"},"error":{"401":"未授权，请登录","shortcut_not_down":"快捷方式无法打开/下载"}}')
    },
    "3c26": function(e, t, a) {
        "use strict";
        a.r(t), a("4160"), a("d3b7"), a("159b"), t.default = {
            namespaced: !0,
            state: {
                cancelToken: []
            },
            actions: {
                push: function(e, t) {
                    var a = e.commit;
                    return new Promise(function(e) {
                        a("push", t), e()
                    })
                },
                cancel: function(e) {
                    var t = e.commit;
                    return new Promise(function(e) {
                        t("clear"), e()
                    })
                }
            },
            mutations: {
                push: function(e, t) {
                    e.cancelToken.push(t)
                },
                clear: function(e) {
                    e.cancelToken.forEach(function(e) {
                        e()
                    }), e.cancelToken = []
                }
            }
        }
    },
    4360: function(e, t, a) {
        "use strict";
        var n = a("8bbf"),
            r = a.n(n),
            o = a("5880"),
            i = a.n(o),
            c = (a("4160"), a("d3b7"), a("ac1f"), a("5319"), a("159b"), a("ddb0"), a("a363")),
            s = {};
        c.keys().forEach(function(e) {
            s[e.replace(/(\.\/|\.js)/g, "")] = c(e).default
        });
        var u = {
            namespaced: !0,
            modules: s
        };
        r.a.use(i.a), t.a = new i.a.Store({
            modules: {
                acrou: u
            }
        })
    },
    "49f8": function(e, t, a) {
        var n = {
            "./en.json": "edd4",
            "./zh-chs.json": "2e32",
            "./zh-cht.json": "e862"
        };

        function r(e) {
            var t = o(e);
            return a(t)
        }

        function o(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }
        r.keys = function() {
            return Object.keys(n)
        }, r.resolve = o, e.exports = r, r.id = "49f8"
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t), a("be4f"), a("450d");
        var n = a("896a"),
            r = a.n(n),
            o = (a("e260"), a("e6cf"), a("cca6"), a("a79d"), a("8bbf")),
            i = a.n(o),
            c = (a("ac1f"), a("5319"), a("c276")),
            s = {
                name: "App",
                components: {
                    Layout: a("88e9").default
                },
                data: function() {
                    return {
                        github: "https://github.com/ParveenBhadooOfficial/goindex-theme-acrou"
                    }
                },
                watch: {
                    "$i18n.locale": "i18nHandle"
                },
                created: function() {
                    this.i18nHandle(this.$i18n.locale)
                },
                mounted: function() {
                    this.checkVersion()
                },
                methods: {
                    i18nHandle: function(e) {
                        c.a.cookies.set("lang", e), document.querySelector("html").setAttribute("lang", e)
                    },
                    checkVersion: function() {
                        var e = window.gdconfig.version;
                        e && "1.1.2" === e || this.$notify({
                            title: this.$t("notify.title"),
                            dangerouslyUseHTMLString: !0,
                            message: this.$t("checkVersion.tips").replace("${url}", this.github),
                            duration: 0,
                            type: "success"
                        })
                    }
                }
            },
            u = a("2877"),
            d = Object(u.a)(s, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("Layout", {
                    ref: "layout"
                })], 1)
            }, [], !1, null, null, null).exports,
            l = (a("aaa5"), a("46a1"), a("9bd2")),
            f = a("a7fe"),
            p = a.n(f),
            h = a("a18c"),
            v = a("9225"),
            m = a("4360"),
            b = (a("d3b7"), a("53ca")),
            g = a("b311"),
            y = a.n(g),
            w = a("d40e"),
            k = {
                autoSetContainer: !1,
                appendToBody: !0
            },
            O = function(e, t) {
                return new Promise(function(a, n) {
                    var r = document.createElement("button"),
                        o = new y.a(r, {
                            text: function() {
                                return e
                            },
                            action: function() {
                                return "copy"
                            },
                            container: "object" === Object(b.a)(t) ? t : document.body
                        });
                    o.on("success", function(e) {
                        o.destroy(), a(e)
                    }), o.on("error", function(e) {
                        o.destroy(), n(e)
                    }), k.appendToBody && document.body.appendChild(r), r.click(), k.appendToBody && document.body.removeChild(r)
                })
            },
            A = {
                copy: O,
                copyText: function(e, t) {
                    return O(e, t).then(function() {
                        Object(w.a)({
                            title: "notify.title",
                            message: "copy.success",
                            type: "success"
                        })
                    }).catch(function() {
                        Object(w.a)({
                            title: "notify.title",
                            message: "copy.error",
                            type: "error"
                        })
                    })
                },
                install: function(e) {
                    e.prototype.$clipboardConfig = k, e.prototype.$copy = O, e.prototype.$copyText = this.copyText, e.directive("clipboard", {
                        bind: function(e, t, a) {
                            if ("success" === t.arg) e._vClipboard_success = t.value;
                            else if ("error" === t.arg) e._vClipboard_error = t.value;
                            else {
                                var n = new y.a(e, {
                                    text: function() {
                                        return t.value
                                    },
                                    action: function() {
                                        return "cut" === t.arg ? "cut" : "copy"
                                    },
                                    container: k.autoSetContainer ? e : void 0
                                });
                                n.on("success", function(t) {
                                    var a = e._vClipboard_success;
                                    a && a(t)
                                }), n.on("error", function(t) {
                                    var a = e._vClipboard_error;
                                    a && a(t)
                                }), e._vClipboard = n
                            }
                        },
                        update: function(e, t) {
                            "success" === t.arg ? e._vClipboard_success = t.value : "error" === t.arg ? e._vClipboard_error = t.value : (e._vClipboard.text = function() {
                                return t.value
                            }, e._vClipboard.action = function() {
                                return "cut" === t.arg ? "cut" : "copy"
                            })
                        },
                        unbind: function(e, t) {
                            "success" === t.arg ? delete e._vClipboard_success : "error" === t.arg ? delete e._vClipboard_error : (e._vClipboard.destroy(), delete e._vClipboard)
                        }
                    })
                },
                config: k
            },
            _ = a("caf9"),
            C = a("6944"),
            x = a.n(C),
            j = a("cbd9");
        i.a.prototype.$notify = w.a, i.a.component("markdown", function() {
            return Promise.all([a.e("chunk-2d0af48a"), a.e("chunk-075e2f32")]).then(a.bind(null, "b6ba"))
        }), a("0808"), a("e558"), document.write('<script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();<\/script>'), i.a.config.productionTip = !1, i.a.prototype.$cdnpath = j.a, i.a.use(r.a), i.a.use(p.a, l.a), i.a.use(A), i.a.use(_.a, {
            loading: Object(j.a)("images/airplane.gif")
        }), i.a.use(x.a), new i.a({
            router: h.a,
            store: m.a,
            i18n: v.a,
            render: function(e) {
                return e(d)
            },
            mounted: function() {
                this.$store.dispatch("acrou/view/load")
            }
        }).$mount("#app")
    },
    5726: function(e, t) {
        e.exports = low
    },
    5880: function(e, t) {
        e.exports = Vuex
    },
    "5c1a": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("a18c"),
            r = a("60bb"),
            o = a("95a2");
        t.default = {
            namespaced: !0,
            actions: {
                set: function(e, t) {
                    var a = t.dbName,
                        n = void 0 === a ? "database" : a,
                        r = t.path,
                        i = void 0 === r ? "" : r,
                        c = t.value,
                        s = void 0 === c ? "" : c,
                        u = t.user,
                        d = void 0 !== u && u;
                    Object(o.c)({
                        dbName: n,
                        path: i,
                        value: s,
                        user: d
                    })
                },
                get: function(e, t) {
                    var a = t.dbName,
                        n = void 0 === a ? "database" : a,
                        r = t.path,
                        i = void 0 === r ? "" : r,
                        c = t.defaultValue,
                        s = void 0 === c ? "" : c,
                        u = t.user,
                        d = void 0 !== u && u;
                    return Object(o.b)({
                        dbName: n,
                        path: i,
                        defaultValue: s,
                        user: d
                    })
                },
                database: function(e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).user,
                        a = void 0 !== t && t;
                    return Object(o.a)({
                        user: a,
                        defaultValue: {}
                    })
                },
                databaseClear: function(e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).user,
                        a = void 0 !== t && t;
                    return Object(o.a)({
                        user: a,
                        validator: function() {
                            return !1
                        },
                        defaultValue: {}
                    })
                },
                databasePage: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = t.basis,
                        r = void 0 === a ? "fullPath" : a,
                        i = t.user,
                        c = void 0 !== i && i;
                    return Object(o.a)({
                        path: "$page.".concat(n.a.app.$route[r]),
                        user: c,
                        defaultValue: {}
                    })
                },
                databasePageClear: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = t.basis,
                        r = void 0 === a ? "fullPath" : a,
                        i = t.user,
                        c = void 0 !== i && i;
                    return Object(o.a)({
                        path: "$page.".concat(n.a.app.$route[r]),
                        user: c,
                        validator: function() {
                            return !1
                        },
                        defaultValue: {}
                    })
                },
                pageSet: function(e, t) {
                    var a = t.instance,
                        i = t.basis,
                        c = void 0 === i ? "fullPath" : i,
                        s = t.user,
                        u = void 0 !== s && s;
                    return Object(o.a)({
                        path: "$page.".concat(n.a.app.$route[c], ".$data"),
                        user: u,
                        validator: function() {
                            return !1
                        },
                        defaultValue: Object(r.cloneDeep)(a.$data)
                    })
                },
                pageGet: function(e, t) {
                    var a = t.instance,
                        i = t.basis,
                        c = void 0 === i ? "fullPath" : i,
                        s = t.user,
                        u = void 0 !== s && s;
                    return Object(o.b)({
                        path: "$page.".concat(n.a.app.$route[c], ".$data"),
                        user: u,
                        defaultValue: Object(r.cloneDeep)(a.$data)
                    })
                },
                pageClear: function(e, t) {
                    var a = t.basis,
                        r = void 0 === a ? "fullPath" : a,
                        i = t.user,
                        c = void 0 !== i && i;
                    return Object(o.a)({
                        path: "$page.".concat(n.a.app.$route[r], ".$data"),
                        user: c,
                        validator: function() {
                            return !1
                        },
                        defaultValue: {}
                    })
                }
            }
        }
    },
    "60bb": function(e, t) {
        e.exports = _
    },
    6389: function(e, t) {
        e.exports = VueRouter
    },
    "6c69": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = (a("4de4"), a("d81d"), a("b0c0"), a("ac1f"), a("466d"), function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "navbar-item has-dropdown is-hoverable bhadoohidden"
                }, [e._m(0), a("div", {
                    staticClass: "navbar-dropdown is-left"
                }, e._l(e.$languages, function(t) {
                    return a("a", {
                        key: t.value,
                        class: "navbar-item" + (e.currLanguage === t.value ? " is-active" : ""),
                        on: {
                            click: function(a) {
                                return e.onChangeLocale(t.value)
                            }
                        }
                    }, [e._v(e._s(t.label))])
                }), 0)])
            }),
            r = {
                data: function() {
                    return {
                        currLanguage: ""
                    }
                },
                methods: {
                    onChangeLocale: function(e) {
                        this.currLanguage = e, this.$i18n.locale = e
                    }
                },
                created: function() {
                    this.currLanguage = this.$i18n.locale
                }
            },
            o = a("2877"),
            i = Object(o.a)(r, n, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("a", {
                    staticClass: "navbar-link is-arrowless"
                }, [t("i", {
                    staticClass: "fa fa-language"
                })])
            }], !1, null, null, null).exports,
            c = (a("4160"), a("c975"), a("b64b"), a("d3b7"), a("159b"), a("5530")),
            s = a("5880"),
            u = a("c276"),
            d = {
                data: function() {
                    return {}
                },
                methods: Object(c.a)({}, Object(s.mapActions)("acrou/db", ["databaseClear"]), {
                    cleanCache: function() {
                        var e = this;
                        new Promise(function(t) {
                            Object.keys(localStorage).forEach(function(e) {
                                -1 !== e.indexOf("file_path_") && localStorage.removeItem(e)
                            }), u.a.cookies.remove("lang"), e.databaseClear(), t()
                        }).then(function() {
                            e.$notify({
                                title: e.$t("notify.title"),
                                message: e.$t("setting.clear.success"),
                                type: "success"
                            })
                        })
                    }
                })
            },
            l = {
                components: {
                    headerLocales: i,
                    headerSetting: Object(o.a)(d, function() {
                        var e = this,
                            t = e.$createElement,
                            a = e._self._c || t;
                        return a("div", {
                            staticClass: "navbar-item has-dropdown is-hoverable"
                        }, [e._m(0), a("div", {
                            staticClass: "navbar-dropdown is-left"
                        }, [a("a", {
                            staticClass: "navbar-item",
                            on: {
                                click: e.cleanCache
                            }
                        }, [e._m(1), e._v(" " + e._s(e.$t("setting.clear.text")) + " ")])])])
                    }, [function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("a", {
                            staticClass: "navbar-link is-arrowless",
                            attrs: {
                                title: "Setting"
                            }
                        }, [t("i", {
                            staticClass: "fa fa-cog",
                            attrs: {
                                "aria-hidden": "true"
                            }
                        })])
                    }, function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("span", {
                            staticClass: "icon"
                        }, [t("i", {
                            staticClass: "fa fa-trash",
                            attrs: {
                                "aria-hidden": "true"
                            }
                        })])
                    }], !1, null, null, null).exports,
                    ViewMode: a("f3f7").a
                },
                created: function() {
                    this.siteName = document.getElementsByTagName("title")[0].innerText, window.gds && window.gds.length > 0 && (this.gds = window.gds.map(function(e, t) {
                        return {
                            name: e,
                            id: "/" + t + ":/"
                        }
                    }), this.chooseGD()), window.MODEL && (this.param = window.MODEL.q ? window.MODEL.q : "")
                },
                data: function() {
                    return {
                        siteName: "",
                        param: "",
                        currgd: {},
                        gds: [],
                        isActive: !1,
                        eyes: ""
                    }
                },
                methods: {
                    chooseGD: function() {
                        var e = this.$route.params.id;
                        this.gds && this.gds.length >= e && (this.currgd = this.gds[e])
                    },
                    changeItem: function(e) {
                        this.currgd = e, this.$router.push({
                            path: e.id
                        })
                    },
                    query: function() {
                        this.param && this.$router.push({
                            path: this.currgd.id.match("/[0-9]+:") + "search?q=" + this.param
                        })
                    },
                    burgerClick: function() {
                        this.isActive = !this.isActive
                    }
                },
                computed: {
                    getCurrGD: function() {
                        var e = this;
                        return this.gds.filter(function(t) {
                            return t.name !== e.currgd.name
                        })
                    },
                    showSearch: function() {
                        return !window.MODEL || window.MODEL.root_type < 2
                    }
                },
                watch: {
                    "$route.params.id": "chooseGD"
                }
            },
            f = Object(o.a)(l, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("nav", {
                    staticClass: "navbar is-dark",
                    attrs: {
                        role: "navigation",
                        "aria-label": "main navigation"
                    }
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "navbar-brand"
                }, [a("a", {
                    staticClass: "navbar-item",
                    attrs: {
                        href: e.currgd.id
                    }
                }, [a("h3", {
                    staticClass: "title is-3 has-text-white"
                }, [e._v(e._s(e.siteName))])]), a("a", {
                    class: "navbar-burger burger " + (e.isActive ? "is-active" : ""),
                    attrs: {
                        role: "button",
                        "aria-label": "menu",
                        "aria-expanded": "false",
                        "data-target": "navbarBasicExample"
                    },
                    on: {
                        click: e.burgerClick
                    }
                }, [a("span", {
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), a("span", {
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), a("span", {
                    attrs: {
                        "aria-hidden": "true"
                    }
                })])]), a("div", {
                    class: "navbar-menu " + (e.isActive ? "is-active" : ""),
                    attrs: {
                        id: "navbarBasicExample"
                    }
                }, [a("div", {
                    staticClass: "navbar-start"
                }, [e.gds.length > 0 && e.getCurrGD.length > 0 ? a("div", {
                    staticClass: "navbar-item has-dropdown is-hoverable"
                }, [a("a", {
                    staticClass: "navbar-link"
                }, [e._v(e._s(this.currgd.name))]), a("div", {
                    staticClass: "navbar-dropdown is-boxed"
                }, e._l(e.getCurrGD, function(t, n) {
                    return a("a", {
                        key: n,
                        staticClass: "navbar-item",
                        on: {
                            click: function(a) {
                                return e.changeItem(t)
                            }
                        }
                    }, [e._v(e._s(t.name))])
                }), 0)]) : e._e()]), a("div", {
                    staticClass: "navbar-end"
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showSearch,
                        expression: "showSearch"
                    }],
                    staticClass: "navbar-item"
                }, [a("div", {
                    staticClass: "field is-grouped"
                }, [a("p", {
                    staticClass: "control is-dark",
                    staticStyle: {
                        width: "100%"
                    }
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.param,
                        expression: "param"
                    }],
                    staticClass: "input is-rounded search-input",
                    staticStyle: {
                        "background-color": "rgb(68, 66, 66)",
                        "border-color": "#272727"
                    },
                    attrs: {
                        type: "search",
                        placeholder: e.$t("search.placeholder")
                    },
                    domProps: {
                        value: e.param
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.query(t)
                        },
                        input: function(t) {
                            t.target.composing || (e.param = t.target.value)
                        }
                    }
                }), a("span", {
                    staticClass: "icon is-small is-left bhadoohidden",
                    staticStyle: {
                        padding: "0 5px"
                    }
                })])])]), a("header-locales"), a("header-setting"), a("a", {
                    staticClass: "navbar-item is-hidden-desktop",
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.$refs.viewMode.toggleMode(t)
                        }
                    }
                }, [a("view-mode", {
                    ref: "viewMode"
                })], 1)], 1)])])])
            }, [], !1, null, null, null);
        t.default = f.exports
    },
    "85b3": function(e, t) {
        e.exports = VueI18n
    },
    "88e9": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("e0a1"),
            r = a("a1c2"),
            o = a("0853"),
            i = {
                data: function() {
                    return {}
                },
                components: {
                    Head: n.default,
                    Footer: r.default,
                    APlayer: o.default
                },
                methods: {}
            },
            c = a("2877"),
            s = Object(c.a)(i, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("Head"), t("section", {
                    staticClass: "section"
                }, [t("div", {
                    staticClass: "container"
                }, [t("feb-alive", [t("router-view")], 1), t("Footer")], 1)]), t("APlayer")], 1)
            }, [], !1, null, null, null);
        t.default = s.exports
    },
    "8bbf": function(e, t) {
        e.exports = Vue
    },
    9225: function(e, t, a) {
        "use strict";
        a("4160"), a("d81d"), a("b64b"), a("d3b7"), a("ac1f"), a("466d"), a("159b"), a("ddb0");
        var n = a("8bbf"),
            r = a.n(n),
            o = a("85b3"),
            i = a.n(o),
            c = a("c276");
        r.a.use(i.a);
        var s = function() {
            var e = a("49f8"),
                t = {};
            return e.keys().forEach(function(a) {
                var n = a.match(/([A-Za-z0-9-_]+)\./i);
                if (n && n.length > 1) {
                    var r = n[1];
                    t[r] = e(a)
                }
            }), t
        }();
        r.a.prototype.$languages = Object.keys(s).map(function(e) {
            return {
                label: s[e]._name,
                value: e
            }
        }), t.a = new i.a({
            locale: c.a.cookies.get("lang") || window.gdconfig.themeOptions.languages || "zh-chs",
            fallbackLocale: "en",
            messages: s
        })
    },
    "95a2": function(e, t, a) {
        "use strict";
        a.d(t, "c", function() {
            return f
        }), a.d(t, "b", function() {
            return p
        }), a.d(t, "a", function() {
            return h
        }), a("99af"), a("d3b7");
        var n = a("5726"),
            r = a.n(n),
            o = a("c758"),
            i = a.n(o),
            c = a("c276"),
            s = a("60bb"),
            u = new i.a("go2index-".concat("2.0.8")),
            d = r()(u);

        function l(e) {
            var t = e.dbName,
                a = void 0 === t ? "database" : t,
                n = e.path,
                r = void 0 === n ? "" : n,
                o = e.user,
                i = void 0 === o || o,
                s = e.validator,
                u = void 0 === s ? function() {
                    return !0
                } : s,
                l = e.defaultValue,
                f = void 0 === l ? "" : l,
                p = c.a.cookies.get("uuid") || "ghost-uuid",
                h = "".concat(a, ".").concat(i ? "user.".concat(p) : "public").concat(r ? ".".concat(r) : ""),
                v = d.get(h).value();
            return void 0 !== v && u(v) || d.set(h, f).write(), h
        }

        function f(e) {
            var t = e.dbName,
                a = void 0 === t ? "database" : t,
                n = e.path,
                r = void 0 === n ? "" : n,
                o = e.value,
                i = void 0 === o ? "" : o,
                c = e.user,
                s = void 0 !== c && c;
            d.set(l({
                dbName: a,
                path: r,
                user: s
            }), i).write()
        }

        function p(e) {
            var t = e.dbName,
                a = void 0 === t ? "database" : t,
                n = e.path,
                r = void 0 === n ? "" : n,
                o = e.defaultValue,
                i = void 0 === o ? "" : o,
                c = e.user,
                u = void 0 !== c && c;
            return new Promise(function(e) {
                e(Object(s.cloneDeep)(d.get(l({
                    dbName: a,
                    path: r,
                    user: u,
                    defaultValue: i
                })).value()))
            })
        }

        function h() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.dbName,
                a = void 0 === t ? "database" : t,
                n = e.path,
                r = void 0 === n ? "" : n,
                o = e.user,
                i = void 0 !== o && o,
                c = e.validator,
                s = void 0 === c ? function() {
                    return !0
                } : c,
                u = e.defaultValue,
                f = void 0 === u ? "" : u;
            return new Promise(function(e) {
                e(d.get(l({
                    dbName: a,
                    path: r,
                    user: i,
                    validator: s,
                    defaultValue: f
                })))
            })
        }
        d.defaults({
            sys: {},
            database: {}
        }).write(), t.d = d
    },
    "9bd2": function(e, t, a) {
        "use strict";
        a("d3b7");
        var n = a("cebe"),
            r = a.n(n),
            o = a("4360"),
            i = a("d40e"),
            c = r.a.create({
                baseURL: Object({
                    NODE_ENV: "production",
                    VUE_APP_I18N_LOCALE: "zh-chs",
                    VUE_APP_I18N_FALLBACK_LOCALE: "en",
                    VUE_APP_CDN_PATH: "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/",
                    VUE_APP_VERSION: "2.0.8",
                    VUE_APP_G2INDEX_VERSION: "1.1.2",
                    BASE_URL: "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/"
                }).VUE_APP_API ? Object({
                    NODE_ENV: "production",
                    VUE_APP_I18N_LOCALE: "zh-chs",
                    VUE_APP_I18N_FALLBACK_LOCALE: "en",
                    VUE_APP_CDN_PATH: "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/",
                    VUE_APP_VERSION: "2.0.8",
                    VUE_APP_G2INDEX_VERSION: "1.1.2",
                    BASE_URL: "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/"
                }).VUE_APP_API : ""
            });
        c.interceptors.request.use(function(e) {
            return e.cancelToken = new r.a.CancelToken(function(e) {
                o.a.dispatch("acrou/cancelToken/push", e)
            }), e
        }, function(e) {
            return console.log(e), Promise.reject(e)
        }), c.interceptors.response.use(function(e) {
            return e
        }, function(e) {
            if (e && e.response) switch (e.response.status) {
                case 401:
                    e.message = "error.401", Object(i.a)({
                        title: "notify.title",
                        message: e.message,
                        type: "error",
                        duration: 5e3
                    });
                    break;
                default:
                    console.log(e)
            }
            return Promise.reject(e)
        }), t.a = c
    },
    "9dac": function(e, t, a) {
        var n = {
            "./Layout": ["88e9"],
            "./Layout.vue": ["88e9"],
            "./common/APlayer": ["0853"],
            "./common/APlayer.vue": ["0853"],
            "./common/BreadCrumb": ["2db9", "chunk-02979915"],
            "./common/BreadCrumb.vue": ["2db9", "chunk-02979915"],
            "./common/Footer": ["a1c2"],
            "./common/Footer.vue": ["a1c2"],
            "./common/Head": ["e0a1"],
            "./common/Head.vue": ["e0a1"],
            "./common/Markdown": ["3bcf", "chunk-2d0af48a", "chunk-072ae9f4"],
            "./common/Markdown.vue": ["3bcf", "chunk-2d0af48a", "chunk-072ae9f4"],
            "./common/Navbar": ["6c69"],
            "./common/Navbar.vue": ["6c69"],
            "./page/GoList": ["e65d", "chunk-2d0af48a", "chunk-02979915", "chunk-6f177d7a"],
            "./page/GoList.vue": ["e65d", "chunk-2d0af48a", "chunk-02979915", "chunk-6f177d7a"],
            "./page/GoPdf": ["fe7f", "chunk-57544d36"],
            "./page/GoPdf.vue": ["fe7f", "chunk-57544d36"],
            "./page/GoText": ["c556", "chunk-1f1f60af"],
            "./page/GoText.vue": ["c556", "chunk-1f1f60af"],
            "./page/GoVideo": ["0262", "chunk-0609f824"],
            "./page/GoVideo.vue": ["0262", "chunk-0609f824"],
            "./page/GoView": ["e42c", "chunk-02979915", "chunk-2d225416"],
            "./page/GoView.vue": ["e42c", "chunk-02979915", "chunk-2d225416"],
            "./page/components/grid": ["2a7a", "chunk-4b66a741"],
            "./page/components/grid/": ["2a7a", "chunk-4b66a741"],
            "./page/components/grid/index": ["2a7a", "chunk-4b66a741"],
            "./page/components/grid/index.vue": ["2a7a", "chunk-4b66a741"],
            "./page/components/list": ["25e0", "chunk-2d0b2ee4"],
            "./page/components/list/": ["25e0", "chunk-2d0b2ee4"],
            "./page/components/list/index": ["25e0", "chunk-2d0b2ee4"],
            "./page/components/list/index.vue": ["25e0", "chunk-2d0b2ee4"]
        };

        function r(e) {
            if (!a.o(n, e)) return Promise.resolve().then(function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            });
            var t = n[e],
                r = t[0];
            return Promise.all(t.slice(1).map(a.e)).then(function() {
                return a(r)
            })
        }
        r.keys = function() {
            return Object.keys(n)
        }, r.id = "9dac", e.exports = r
    },
    a18c: function(e, t, a) {
        "use strict";
        a("ac1f"), a("5319"), a("96cf");
        var n = a("1da1"),
            r = a("8bbf"),
            o = a.n(r),
            i = a("0499"),
            c = a("6389"),
            s = a.n(c),
            u = a("323e"),
            d = a.n(u),
            l = (a("a5d8"), a("5530")),
            f = a("e36f"),
            p = {
                disableCache: !1
            },
            h = [{
                path: "/:id(\\d+)::cmd(text)/:path",
                component: f("page/GoView"),
                meta: Object(l.a)({}, p, {
                    view: "text"
                }),
                children: [{
                    path: "",
                    component: f("page/GoText")
                }]
            }, {
                path: "/:id(\\d+)::cmd(pdf)/:path",
                component: f("page/GoView"),
                meta: Object(l.a)({}, p, {
                    view: "pdf"
                }),
                children: [{
                    path: "",
                    component: f("page/GoPdf")
                }]
            }, {
                path: "/:id(\\d+)::cmd(video)/:path",
                component: f("page/GoView"),
                meta: Object(l.a)({}, p, {
                    view: "video"
                }),
                children: [{
                    path: "",
                    component: f("page/GoVideo")
                }]
            }, {
                path: "/:id(\\d+)::cmd(search)(/?q=)*",
                component: f("page/GoList"),
                meta: Object(l.a)({}, p, {
                    view: "list"
                })
            }, {
                path: "/:id(\\d+):/:path*",
                component: f("page/GoList"),
                meta: Object(l.a)({}, p, {
                    view: "list"
                })
            }],
            v = a("4360");
        i.a.resetHistory();
        var m = s.a.prototype.push;
        s.a.prototype.push = function(e) {
            return m.call(this, e).catch(function(e) {
                return e
            })
        };
        var b = s.a.prototype.replace;
        s.a.prototype.replace = function(e) {
            return b.call(this, e).catch(function(e) {
                return e
            })
        }, o.a.use(s.a);
        var g = new s.a({
            mode: "history",
            scrollBehavior: function(e, t, a) {
                return a || {
                    x: 0,
                    y: 0
                }
            },
            routes: h
        });
        o.a.use(i.a, {
            router: g
        }), g.beforeEach(function() {
            var e = Object(n.a)(regeneratorRuntime.mark(function e(t, a, n) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            d.a.start(), v.a.dispatch("acrou/cancelToken/cancel"), n();
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(t, a, n) {
                return e.apply(this, arguments)
            }
        }()), g.afterEach(function(e) {
            d.a.done()
        }), t.a = g
    },
    a1c2: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = {
                props: {},
                watch: {},
                data: function() {
                    return {
                        content: ""
                    }
                },
                components: {},
                methods: {}
            },
            r = a("2877"),
            o = Object(r.a)(n, function() {
                var e = this;
                e.$createElement;
                return e._self._c, e._m(0)
            }, [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("footer", {
                    staticClass: "footer"
                }, [a("div", {
                    staticClass: "columns is-mobile is-centered"
                }, [a("div", {
                    staticClass: "field is-grouped is-grouped-multiline"
                }, [a("div", {
                    staticClass: "control"
                }, [a("div", {
                    staticClass: "tags has-addons bhadoohidden"
                }, [a("a", {
                    staticClass: "tag is-dark",
                    attrs: {
                        href: "https://github.com/ParveenBhadooOfficial/goindex-theme-acrou"
                    }
                }, [e._v("goindex-theme-acrou")]), a("span", {
                    staticClass: "tag is-light"
                }, [e._v(" MIT "), a("span", {
                    staticClass: "icon"
                }, [a("i", {
                    staticClass: "fa fa-github"
                })])])])])])])])
            }], !1, null, null, null);
        t.default = o.exports
    },
    a363: function(e, t, a) {
        var n = {
            "./aplayer.js": "c6a0",
            "./cancelToken.js": "3c26",
            "./db.js": "5c1a",
            "./view.js": "d6c0"
        };

        function r(e) {
            var t = o(e);
            return a(t)
        }

        function o(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }
        r.keys = function() {
            return Object.keys(n)
        }, r.resolve = o, e.exports = r, r.id = "a363"
    },
    be65: function(e, t) {
        e.exports = Cookies
    },
    c276: function(e, t, a) {
        "use strict";
        a("99af");
        var n = a("be65"),
            r = a.n(n),
            o = {
                cookies: {
                    set: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = {
                                expires: 1
                            };
                        Object.assign(n, a), r.a.set("go2index-".concat("2.0.8", "-").concat(e), t, n)
                    },
                    get: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                        return r.a.get("go2index-".concat("2.0.8", "-").concat(e))
                    },
                    getAll: function() {
                        return r.a.get()
                    },
                    remove: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                        return r.a.remove("go2index-".concat("2.0.8", "-").concat(e))
                    }
                },
                db: a("95a2").d,
                title: function(e) {
                    var t = Object({
                        NODE_ENV: "production",
                        VUE_APP_I18N_LOCALE: "zh-chs",
                        VUE_APP_I18N_FALLBACK_LOCALE: "en",
                        VUE_APP_CDN_PATH: "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/",
                        VUE_APP_VERSION: "2.0.8",
                        VUE_APP_G2INDEX_VERSION: "1.1.2",
                        BASE_URL: "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/"
                    }).VUE_APP_TITLE || "GoIndex";
                    window.document.title = "".concat(t).concat(e ? " | ".concat(e) : "")
                },
                open: function(e) {
                    var t = document.createElement("a");
                    t.setAttribute("href", e), t.setAttribute("target", "_blank"), t.setAttribute("id", "d2admin-link-temp"), document.body.appendChild(t), t.click(), document.body.removeChild(document.getElementById("d2admin-link-temp"))
                }
            };
        t.a = o
    },
    c6a0: function(e, t, a) {
        "use strict";
        a.r(t), a("99af"), a("c740"), a("a434"), a("d3b7"), a("96cf");
        var n = a("1da1");
        t.default = {
            namespaced: !0,
            state: {
                player: null,
                audios: [],
                openedAudios: [],
                customAudios: window.themeOptions.audio.audios || []
            },
            actions: {
                set: function(e, t) {
                    e.state.player = t
                },
                add: function(e, t) {
                    var a = e.state,
                        n = e.dispatch,
                        r = t.audio,
                        o = t.play;
                    return new Promise(function(e) {
                        var t = a.openedAudios.findIndex(function(e) {
                            return e.id === r.id
                        });
                        if (t >= 0 && (a.openedAudios.splice(t, 1), a.player.list.remove(t + a.customAudios.length || 0)), a.player.list.add(r), a.openedAudios.push(r), o) {
                            var i = a.player.list.audios.length || 1;
                            a.player.list.switch(i - 1), a.player.play()
                        }
                        n("acrou/db/set", {
                            path: "audio.list",
                            value: a.openedAudios
                        }, {
                            root: !0
                        }), e()
                    })
                },
                load: function(e) {
                    var t = e.state,
                        a = e.dispatch;
                    return new Promise(function() {
                        var e = Object(n.a)(regeneratorRuntime.mark(function e(n) {
                            var r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a("acrou/db/get", {
                                            path: "audio.list",
                                            defaultValue: []
                                        }, {
                                            root: !0
                                        });
                                    case 2:
                                        r = e.sent, t.openedAudios = r, t.audios = t.customAudios.concat(r), n();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
            }
        }
    },
    c758: function(e, t) {
        e.exports = LocalStorage
    },
    cbd9: function(e, t, a) {
        "use strict";

        function n(e) {
            return "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/goindex-theme-acrou@3.0.12/dist/" + e
        }
        a.d(t, "a", function() {
            return n
        })
    },
    cebe: function(e, t) {
        e.exports = axios
    },
    d40e: function(e, t, a) {
        "use strict";
        a("46a1"), a("450d");
        var n = a("e5f2"),
            r = a.n(n),
            o = a("9225");
        t.a = function(e) {
            var t = e.title,
                a = e.message,
                n = e.type,
                i = e.duration;
            r()({
                title: o.a.t(t),
                message: o.a.t(a),
                type: n,
                duration: i
            })
        }
    },
    d6c0: function(e, t, a) {
        "use strict";
        a.r(t), a("d3b7"), a("96cf");
        var n = a("1da1");
        t.default = {
            namespaced: !0,
            state: {
                mode: "list"
            },
            actions: {
                load: function(e) {
                    var t = e.state,
                        a = e.dispatch,
                        r = e.commit;
                    return new Promise(function() {
                        var e = Object(n.a)(regeneratorRuntime.mark(function e(n) {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a("acrou/db/get", {
                                            dbName: "sys",
                                            path: "view.mode.value",
                                            defaultValue: "list",
                                            user: !0
                                        }, {
                                            root: !0
                                        });
                                    case 2:
                                        t.mode = e.sent, r("set", t.mode), n();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                },
                toggle: function(e, t) {
                    var a = e.state,
                        r = e.dispatch,
                        o = e.commit;
                    return new Promise(function() {
                        var e = Object(n.a)(regeneratorRuntime.mark(function e(n) {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.mode = t || "list", e.next = 3, r("acrou/db/set", {
                                            dbName: "sys",
                                            path: "view.mode.value",
                                            value: a.mode,
                                            user: !0
                                        }, {
                                            root: !0
                                        });
                                    case 3:
                                        o("set", a.mode), n();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
            },
            mutations: {
                set: function(e, t) {
                    e.mode = t
                }
            }
        }
    },
    e0a1: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = {
                data: function() {
                    return {}
                },
                methods: {},
                components: {
                    Navbar: a("6c69").default
                }
            },
            r = a("2877"),
            o = Object(r.a)(n, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("Navbar", {
                    ref: "navbar"
                })], 1)
            }, [], !1, null, null, null);
        t.default = o.exports
    },
    e36f: function(e, t, a) {
        a("d3b7"), e.exports = function(e) {
            return function() {
                return a("9dac")("./" + e)
            }
        }
    },
    e558: function(e, t, a) {},
    e862: function(e) {
        e.exports = JSON.parse('{"_name":"繁体中文","languages":"選擇語言","index":"首頁","folder":"文件夾","notify":{"title":"提示"},"copy":{"text":"復制","success":"復制成功","error":"復制失敗"},"list":{"view":{"gridMode":"網格視圖","listMode":"列表視圖"},"auth":"目錄加密，請輸入密碼","title":{"file":"文件","moditime":"修改時間","size":"大小","operation":"操作"},"loading":"加載中...","opt":{"copy":"復制鏈接","newTab":"打開新的標簽頁","download":"下載"},"total":"共","item":"項"},"search":{"placeholder":"搜索..."},"page":{"video":{"play":"播放","download":"下載","link":"下載地址"},"text":{"loading":"加載中..."}},"setting":{"clear":{"text":"清理緩存","success":"緩存清理成功"}},"checkVersion":{"tips":"檢測到有新版本，<a href=\'${url}\'>前往GitHub</a>"},"error":{"401":"未授權，請登錄","shortcut_not_down":"快捷方式無法打開/下載"}}')
    },
    edd4: function(e) {
        e.exports = JSON.parse('{"_name":"English","languages":"Languages","index":"Home","folder":"Folder","notify":{"title":"Notify"},"copy":{"text":"Copy","success":"Copy successful","error":"Copy failed"},"list":{"view":{"gridMode":"Grid view","listMode":"List view"},"auth":"Directory encryption, please enter password","title":{"file":"File","moditime":"Modified Time","size":"Size","operation":"Actions"},"loading":"Loading...","opt":{"copy":"Copy link","newTab":"Open a new tab","download":"Download"},"total":"Total","item":"item"},"search":{"placeholder":"Search Here"},"page":{"video":{"play":"Play","download":"Download","link":"Download link"},"text":{"loading":"Loading..."}},"setting":{"clear":{"text":"Clean cache","success":"Cache cleanup successful"}},"checkVersion":{"tips":"New version detected, <a href=\'${url}\'>Go to GitHub</a>"},"error":{"401":"Unauthorized, please login","shortcut_not_down":"Shortcut can\'t open/download"}}')
    },
    f3f7: function(e, t, a) {
        "use strict";
        var n = a("5530"),
            r = a("5880"),
            o = {
                data: function() {
                    return {}
                },
                computed: Object(n.a)({}, Object(r.mapState)("acrou/view", ["mode"])),
                methods: Object(n.a)({}, Object(r.mapActions)("acrou/view", ["toggle"]), {
                    toggleMode: function() {
                        this.toggle("list" === this.mode ? "grid" : "list")
                    }
                })
            },
            i = a("2877"),
            c = Object(i.a)(o, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "list" === e.$route.meta.view,
                        expression: "$route.meta.view === 'list'"
                    }],
                    staticClass: "icon",
                    attrs: {
                        title: "list" === e.mode ? e.$t("list.view.gridMode") : e.$t("list.view.listMode")
                    },
                    on: {
                        click: e.toggleMode
                    }
                }, [a("i", {
                    class: "fa" + ("list" === e.mode ? " fa-th" : " fa-th-list"),
                    attrs: {
                        "aria-hidden": "true"
                    }
                })])
            }, [], !1, null, null, null);
        t.a = c.exports
    }
});
