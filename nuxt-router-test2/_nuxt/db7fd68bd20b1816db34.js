;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    103: function(t, e, n) {
      'use strict'
      n(5), n(44), n(8), n(50), n(49), n(28), n(18), n(19), n(4), n(34), n(35)
      var r = n(0)
      function o(t) {
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (t = (function(t, e) {
              if (!t) return
              if ('string' == typeof t) return c(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(n)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e)
            })(t))
          ) {
            var i = 0,
              e = function() {}
            return {
              s: e,
              n: function() {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function(t) {
                throw t
              },
              f: e
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var n,
          r,
          o = !0,
          f = !1
        return {
          s: function() {
            n = t[Symbol.iterator]()
          },
          n: function() {
            var t = n.next()
            return (o = t.done), t
          },
          e: function(t) {
            ;(f = !0), (r = t)
          },
          f: function() {
            try {
              o || null == n.return || n.return()
            } finally {
              if (f) throw r
            }
          }
        }
      }
      function c(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      var f =
          window.requestIdleCallback ||
          function(t) {
            var e = Date.now()
            return setTimeout(function() {
              t({
                didTimeout: !1,
                timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - e))
                }
              })
            }, 1)
          },
        l =
          window.cancelIdleCallback ||
          function(t) {
            clearTimeout(t)
          },
        h =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function(t) {
            t.forEach(function(t) {
              var e = t.intersectionRatio,
                link = t.target
              e <= 0 || link.__prefetch()
            })
          })
      e.a = {
        name: 'NuxtLink',
        extends: r.a.component('RouterLink'),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 }
        },
        mounted: function() {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = f(this.observe, { timeout: 2e3 }))
        },
        beforeDestroy: function() {
          l(this.handleId),
            this.__observed &&
              (h.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function() {
            h &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              h.observe(this.$el),
              (this.__observed = !0))
          },
          shouldPrefetch: function() {
            return this.getPrefetchComponents().length > 0
          },
          canPrefetch: function() {
            var t = navigator.connection
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || '').includes('2g') || t.saveData))
            )
          },
          getPrefetchComponents: function() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function(t) {
                return t.components.default
              })
              .filter(function(t) {
                return 'function' == typeof t && !t.options && !t.__prefetched
              })
          },
          prefetchLink: function() {
            if (this.canPrefetch()) {
              h.unobserve(this.$el)
              var t,
                e = o(this.getPrefetchComponents())
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n()
                  r instanceof Promise && r.catch(function() {}),
                    (n.__prefetched = !0)
                }
              } catch (t) {
                e.e(t)
              } finally {
                e.f()
              }
            }
          }
        }
      }
    },
    115: function(t, e, n) {
      'use strict'
      var r = {}
      ;(r.trailingSlashRedirect = n(183)),
        (r.trailingSlashRedirect =
          r.trailingSlashRedirect.default || r.trailingSlashRedirect),
        (e.a = r)
    },
    156: function(t, e, n) {
      'use strict'
      n(4), n(73)
      var r = n(23),
        o = n(0),
        c = n(3),
        f = window.__NUXT__
      function l() {
        if (!this._hydrated) return this.$fetch()
      }
      function h() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t
          ;(this._hydrated = !0),
            (this._fetchKey = +this.$vnode.elm.dataset.fetchKey)
          var data = f.fetch[this._fetchKey]
          if (data && data._error) this.$fetchState.error = data._error
          else for (var e in data) o.a.set(this.$data, e, data[e])
        }
      }
      function d() {
        var t = this
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function() {
              delete t._fetchPromise
            })),
          this._fetchPromise
        )
      }
      function m() {
        return v.apply(this, arguments)
      }
      function v() {
        return (v = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      )
                    case 9:
                      t.next = 14
                      break
                    case 11:
                      ;(t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.o)(t.t0))
                    case 14:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 18
                        break
                      }
                      return (
                        (t.next = 18),
                        new Promise(function(t) {
                          return setTimeout(t, r)
                        })
                      )
                    case 18:
                      ;(this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function() {
                          return o.$nuxt.nbFetching--
                        })
                    case 22:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this,
              [[6, 11]]
            )
          })
        )).apply(this, arguments)
      }
      e.a = {
        beforeCreate: function() {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              'number' == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.a.util.defineReactive(this, '$fetchState', {
              pending: !1,
              error: null,
              timestamp: Date.now()
            }),
            (this.$fetch = d.bind(this)),
            Object(c.a)(this, 'created', h),
            Object(c.a)(this, 'beforeMount', l))
        }
      }
    },
    161: function(t, e, n) {
      t.exports = n(162)
    },
    162: function(t, e, n) {
      'use strict'
      n.r(e),
        function(t) {
          n(44), n(8), n(49), n(18), n(19), n(50)
          var e = n(22),
            r = (n(73), n(89), n(23)),
            o =
              (n(34),
              n(35),
              n(5),
              n(4),
              n(9),
              n(28),
              n(140),
              n(173),
              n(180),
              n(182),
              n(0)),
            c = n(152),
            f = n(115),
            l = n(3),
            h = n(36),
            d = n(156),
            m = n(103)
          function v(t) {
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (t = (function(t, e) {
                  if (!t) return
                  if ('string' == typeof t) return y(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  'Object' === n && t.constructor && (n = t.constructor.name)
                  if ('Map' === n || 'Set' === n) return Array.from(n)
                  if (
                    'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(t, e)
                })(t))
              ) {
                var i = 0,
                  e = function() {}
                return {
                  s: e,
                  n: function() {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] }
                  },
                  e: function(t) {
                    throw t
                  },
                  f: e
                }
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            }
            var n,
              r,
              o = !0,
              c = !1
            return {
              s: function() {
                n = t[Symbol.iterator]()
              },
              n: function() {
                var t = n.next()
                return (o = t.done), t
              },
              e: function(t) {
                ;(c = !0), (r = t)
              },
              f: function() {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
            }
          }
          function y(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
            return n
          }
          o.a.__nuxt__fetch__mixin__ ||
            (o.a.mixin(d.a), (o.a.__nuxt__fetch__mixin__ = !0)),
            o.a.component(m.a.name, m.a),
            o.a.component('NLink', m.a),
            t.fetch || (t.fetch = c.a)
          var x,
            w,
            _ = [],
            $ = window.__NUXT__ || {}
          Object.assign(o.a.config, { silent: !0, performance: !1 })
          var O = o.a.config.errorHandler || console.error
          function j(t, e, n) {
            for (
              var r = function(component) {
                  var t =
                    (function(component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {}
                      var option = component.options[t]
                      if ('function' == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r]
                        return option.apply(void 0, n)
                      }
                      return option
                    })(component, 'transition', e, n) || {}
                  return 'string' == typeof t ? { name: t } : t
                },
                o = n ? Object(l.g)(n) : [],
                c = Math.max(t.length, o.length),
                f = [],
                h = function(i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]))
                  Object.keys(e)
                    .filter(function(t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes('leave')
                      )
                    })
                    .forEach(function(t) {
                      n[t] = e[t]
                    }),
                    f.push(n)
                },
                i = 0;
              i < c;
              i++
            )
              h(i)
            return f
          }
          function C(t, e, n) {
            return k.apply(this, arguments)
          }
          function k() {
            return (k = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  f,
                  h,
                  d = this
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(x.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(l.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12
                            break
                          }
                          return (
                            (t.next = 9),
                            Object(l.q)(e, function(t, e) {
                              return { Component: t, instance: e }
                            })
                          )
                        case 9:
                          ;(o = t.sent),
                            o.some(function(t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function(t) {
                                      return d._diffQuery[t]
                                    })
                                  : 'function' == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              )
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start()
                        case 12:
                          r(), (t.next = 26)
                          break
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (f =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (h = c.message || ''),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                          ) {
                            t.next = 23
                            break
                          }
                          return window.location.reload(!0), t.abrupt('return')
                        case 23:
                          this.error({ statusCode: f, message: h }),
                            this.$nuxt.$emit('routeChanged', e, n, c),
                            r()
                        case 26:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                )
              })
            )).apply(this, arguments)
          }
          function R(t, e) {
            return $.serverRendered && e && Object(l.b)(t, e), (t._Ctor = t), t
          }
          function S(t) {
            var path = Object(l.f)(t.options.base, t.options.mode)
            return Object(l.d)(
              t.match(path),
              (function() {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var f
                    return regeneratorRuntime.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof e || e.options) {
                              t.next = 4
                              break
                            }
                            return (t.next = 3), e()
                          case 3:
                            e = t.sent
                          case 4:
                            return (
                              (f = R(
                                Object(l.r)(e),
                                $.data ? $.data[c] : null
                              )),
                              (r.components[o] = f),
                              t.abrupt('return', f)
                            )
                          case 7:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function(e, n, r, o, c) {
                  return t.apply(this, arguments)
                }
              })()
            )
          }
          function E(t, e, n) {
            var r = this,
              o = ['trailingSlashRedirect'],
              c = !1
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(l.r)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function(t) {
                  t.options.middleware && (o = o.concat(t.options.middleware))
                })),
              (o = o.map(function(t) {
                return 'function' == typeof t
                  ? t
                  : ('function' != typeof f.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: 'Unknown middleware ' + t
                      })),
                    f.a[t])
              })),
              !c)
            )
              return Object(l.n)(o, e)
          }
          function T(t, e, n) {
            return P.apply(this, arguments)
          }
          function P() {
            return (P = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  f,
                  d,
                  m,
                  y,
                  w,
                  $,
                  O,
                  C,
                  k,
                  R,
                  S,
                  T,
                  P,
                  A = this
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2
                            break
                          }
                          return t.abrupt('return', r())
                        case 2:
                          return (
                            e === n
                              ? (_ = [])
                              : ((o = []),
                                (_ = Object(l.g)(n, o).map(function(t, i) {
                                  return Object(l.c)(n.matched[o[i]].path)(
                                    n.params
                                  )
                                }))),
                            (c = !1),
                            (f = function(path) {
                              n.path === path.path &&
                                A.$loading.finish &&
                                A.$loading.finish(),
                                n.path !== path.path &&
                                  A.$loading.pause &&
                                  A.$loading.pause(),
                                c || ((c = !0), r(path))
                            }),
                            (t.next = 7),
                            Object(l.s)(x, {
                              route: e,
                              from: n,
                              next: f.bind(this)
                            })
                          )
                        case 7:
                          if (
                            ((this._dateLastError = x.nuxt.dateErr),
                            (this._hadError = Boolean(x.nuxt.err)),
                            (d = []),
                            (m = Object(l.g)(e, d)).length)
                          ) {
                            t.next = 26
                            break
                          }
                          return (t.next = 14), E.call(this, m, x.context)
                        case 14:
                          if (!c) {
                            t.next = 16
                            break
                          }
                          return t.abrupt('return')
                        case 16:
                          return (
                            (y = (h.a.options || h.a).layout),
                            (t.next = 19),
                            this.loadLayout(
                              'function' == typeof y
                                ? y.call(h.a, x.context)
                                : y
                            )
                          )
                        case 19:
                          return (
                            (w = t.sent),
                            (t.next = 22),
                            E.call(this, m, x.context, w)
                          )
                        case 22:
                          if (!c) {
                            t.next = 24
                            break
                          }
                          return t.abrupt('return')
                        case 24:
                          return (
                            x.context.error({
                              statusCode: 404,
                              message: 'This page could not be found'
                            }),
                            t.abrupt('return', r())
                          )
                        case 26:
                          return (
                            m.forEach(function(t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch))
                            }),
                            this.setTransitions(j(m, e, n)),
                            (t.prev = 28),
                            (t.next = 31),
                            E.call(this, m, x.context)
                          )
                        case 31:
                          if (!c) {
                            t.next = 33
                            break
                          }
                          return t.abrupt('return')
                        case 33:
                          if (!x.context._errored) {
                            t.next = 35
                            break
                          }
                          return t.abrupt('return', r())
                        case 35:
                          return (
                            'function' == typeof ($ = m[0].options.layout) &&
                              ($ = $(x.context)),
                            (t.next = 39),
                            this.loadLayout($)
                          )
                        case 39:
                          return (
                            ($ = t.sent),
                            (t.next = 42),
                            E.call(this, m, x.context, $)
                          )
                        case 42:
                          if (!c) {
                            t.next = 44
                            break
                          }
                          return t.abrupt('return')
                        case 44:
                          if (!x.context._errored) {
                            t.next = 46
                            break
                          }
                          return t.abrupt('return', r())
                        case 46:
                          ;(O = !0),
                            (t.prev = 47),
                            (C = v(m)),
                            (t.prev = 49),
                            C.s()
                        case 51:
                          if ((k = C.n()).done) {
                            t.next = 62
                            break
                          }
                          if (
                            'function' == typeof (R = k.value).options.validate
                          ) {
                            t.next = 55
                            break
                          }
                          return t.abrupt('continue', 60)
                        case 55:
                          return (t.next = 57), R.options.validate(x.context)
                        case 57:
                          if ((O = t.sent)) {
                            t.next = 60
                            break
                          }
                          return t.abrupt('break', 62)
                        case 60:
                          t.next = 51
                          break
                        case 62:
                          t.next = 67
                          break
                        case 64:
                          ;(t.prev = 64), (t.t0 = t.catch(49)), C.e(t.t0)
                        case 67:
                          return (t.prev = 67), C.f(), t.finish(67)
                        case 70:
                          t.next = 76
                          break
                        case 72:
                          return (
                            (t.prev = 72),
                            (t.t1 = t.catch(47)),
                            this.error({
                              statusCode: t.t1.statusCode || '500',
                              message: t.t1.message
                            }),
                            t.abrupt('return', r())
                          )
                        case 76:
                          if (O) {
                            t.next = 79
                            break
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: 'This page could not be found'
                            }),
                            t.abrupt('return', r())
                          )
                        case 79:
                          return (
                            (t.next = 81),
                            Promise.all(
                              m.map(function(t, i) {
                                ;(t._path = Object(l.c)(e.matched[d[i]].path)(
                                  e.params
                                )),
                                  (t._dataRefresh = !1)
                                var r = t._path !== _[i]
                                if (A._routeChanged && r) t._dataRefresh = !0
                                else if (A._paramChanged && r) {
                                  var o = t.options.watchParam
                                  t._dataRefresh = !1 !== o
                                } else if (A._queryChanged) {
                                  var c = t.options.watchQuery
                                  !0 === c
                                    ? (t._dataRefresh = !0)
                                    : Array.isArray(c)
                                    ? (t._dataRefresh = c.some(function(t) {
                                        return A._diffQuery[t]
                                      }))
                                    : 'function' == typeof c &&
                                      (S || (S = Object(l.h)(e)),
                                      (t._dataRefresh = c.apply(S[i], [
                                        e.query,
                                        n.query
                                      ])))
                                }
                                if (
                                  A._hadError ||
                                  !A._isMounted ||
                                  t._dataRefresh
                                ) {
                                  var f = [],
                                    h =
                                      t.options.asyncData &&
                                      'function' == typeof t.options.asyncData,
                                    m =
                                      Boolean(t.options.fetch) &&
                                      t.options.fetch.length,
                                    v = h && m ? 30 : 45
                                  if (h) {
                                    var y = Object(l.p)(
                                      t.options.asyncData,
                                      x.context
                                    ).then(function(e) {
                                      Object(l.b)(t, e),
                                        A.$loading.increase &&
                                          A.$loading.increase(v)
                                    })
                                    f.push(y)
                                  }
                                  if (
                                    ((A.$loading.manual =
                                      !1 === t.options.loading),
                                    m)
                                  ) {
                                    var p = t.options.fetch(x.context)
                                    ;(p &&
                                      (p instanceof Promise ||
                                        'function' == typeof p.then)) ||
                                      (p = Promise.resolve(p)),
                                      p.then(function(t) {
                                        A.$loading.increase &&
                                          A.$loading.increase(v)
                                      }),
                                      f.push(p)
                                  }
                                  return Promise.all(f)
                                }
                              })
                            )
                          )
                        case 81:
                          c ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            r()),
                            (t.next = 98)
                          break
                        case 84:
                          if (
                            ((t.prev = 84),
                            (t.t2 = t.catch(28)),
                            'ERR_REDIRECT' !== (T = t.t2 || {}).message)
                          ) {
                            t.next = 89
                            break
                          }
                          return t.abrupt(
                            'return',
                            this.$nuxt.$emit('routeChanged', e, n, T)
                          )
                        case 89:
                          return (
                            (_ = []),
                            Object(l.k)(T),
                            'function' ==
                              typeof (P = (h.a.options || h.a).layout) &&
                              (P = P(x.context)),
                            (t.next = 95),
                            this.loadLayout(P)
                          )
                        case 95:
                          this.error(T),
                            this.$nuxt.$emit('routeChanged', e, n, T),
                            r()
                        case 98:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this,
                  [
                    [28, 84],
                    [47, 72],
                    [49, 64, 67, 70]
                  ]
                )
              })
            )).apply(this, arguments)
          }
          function A(t, n) {
            Object(l.d)(t, function(t, n, r, c) {
              return (
                'object' !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.a.extend(t))._Ctor = t), (r.components[c] = t)),
                t
              )
            })
          }
          function D(t) {
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              this.error()
            var e = this.$options.nuxt.err
              ? (h.a.options || h.a).layout
              : t.matched[0].components.default.options.layout
            'function' == typeof e && (e = e(x.context)), this.setLayout(e)
          }
          function N(t, e) {
            var n = this
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(l.h)(t),
                c = Object(l.g)(t)
              o.a.nextTick(function() {
                r.forEach(function(t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    'function' == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t)
                    for (var n in e) o.a.set(t.$data, n, e[n])
                    window.$nuxt.$nextTick(function() {
                      window.$nuxt.$emit('triggerScroll')
                    })
                  }
                }),
                  D.call(n, t)
              })
            }
          }
          function I(t) {
            window.onNuxtReadyCbs.forEach(function(e) {
              'function' == typeof e && e(t)
            }),
              'function' == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              w.afterEach(function(e, n) {
                o.a.nextTick(function() {
                  return t.$nuxt.$emit('routeChanged', e, n)
                })
              })
          }
          function L() {
            return (L = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, f
                return regeneratorRuntime.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (x = e.app),
                          (w = e.router),
                          (n = new o.a(x)),
                          (r = function() {
                            n.$mount('#__nuxt'),
                              w.afterEach(A),
                              w.afterEach(N.bind(n)),
                              o.a.nextTick(function() {
                                I(n)
                              })
                          }),
                          (t.next = 6),
                          Promise.all(S(w))
                        )
                      case 6:
                        if (
                          ((c = t.sent),
                          (n.setTransitions = n.$options.nuxt.setTransitions.bind(
                            n
                          )),
                          c.length &&
                            (n.setTransitions(j(c, w.currentRoute)),
                            (_ = w.currentRoute.matched.map(function(t) {
                              return Object(l.c)(t.path)(w.currentRoute.params)
                            }))),
                          (n.$loading = {}),
                          $.error && n.error($.error),
                          w.beforeEach(C.bind(n)),
                          w.beforeEach(T.bind(n)),
                          !$.serverRendered ||
                            $.routePath !== n.context.route.path)
                        ) {
                          t.next = 16
                          break
                        }
                        return r(), t.abrupt('return')
                      case 16:
                        ;(f = function() {
                          A(w.currentRoute, w.currentRoute),
                            D.call(n, w.currentRoute),
                            r()
                        }),
                          T.call(n, w.currentRoute, w.currentRoute, function(
                            path
                          ) {
                            if (path) {
                              var t = w.afterEach(function(e, n) {
                                t(), f()
                              })
                              w.push(path, void 0, function(t) {
                                t && O(t)
                              })
                            } else f()
                          })
                      case 18:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )).apply(this, arguments)
          }
          Object(h.b)()
            .then(function(t) {
              return L.apply(this, arguments)
            })
            .catch(O)
        }.call(this, n(65))
    },
    183: function(t, e, n) {
      'use strict'
      n.r(e),
        (e.default = function(t) {
          var e = t.route,
            n = t.redirect
          '/' !== e.path.slice(-1) && n(301, e.path + '/')
        })
    },
    193: function(t, e, n) {
      'use strict'
      var r = n(96)
      n.n(r).a
    },
    194: function(t, e, n) {
      ;(e = n(11)(!1)).push([t.i, 'h1[data-v-de4b70e6]{font-size:20px}', '']),
        (t.exports = e)
    },
    197: function(t, e, n) {
      'use strict'
      var r = n(97)
      n.n(r).a
    },
    198: function(t, e, n) {
      ;(e = n(11)(!1)).push([
        t.i,
        '.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}',
        ''
      ]),
        (t.exports = e)
    },
    3: function(t, e, n) {
      'use strict'
      n.d(e, 'k', function() {
        return y
      }),
        n.d(e, 'm', function() {
          return x
        }),
        n.d(e, 'l', function() {
          return w
        }),
        n.d(e, 'e', function() {
          return _
        }),
        n.d(e, 'b', function() {
          return $
        }),
        n.d(e, 'r', function() {
          return O
        }),
        n.d(e, 'g', function() {
          return j
        }),
        n.d(e, 'h', function() {
          return C
        }),
        n.d(e, 'd', function() {
          return k
        }),
        n.d(e, 'q', function() {
          return R
        }),
        n.d(e, 'j', function() {
          return S
        }),
        n.d(e, 's', function() {
          return T
        }),
        n.d(e, 'n', function() {
          return A
        }),
        n.d(e, 'p', function() {
          return D
        }),
        n.d(e, 'f', function() {
          return N
        }),
        n.d(e, 'c', function() {
          return I
        }),
        n.d(e, 'i', function() {
          return L
        }),
        n.d(e, 'o', function() {
          return V
        }),
        n.d(e, 'a', function() {
          return J
        })
      n(10), n(44), n(8), n(49), n(34), n(35)
      var r = n(15),
        o = (n(51), n(52), n(93), n(22)),
        c = (n(18), n(19), n(186), n(188), n(53), n(73), n(23)),
        f = (n(50), n(5), n(4), n(9), n(28), n(2)),
        l = n(0)
      function h(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? h(Object(source), !0).forEach(function(e) {
                Object(f.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      function m(t) {
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (t = (function(t, e) {
              if (!t) return
              if ('string' == typeof t) return v(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(n)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return v(t, e)
            })(t))
          ) {
            var i = 0,
              e = function() {}
            return {
              s: e,
              n: function() {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function(t) {
                throw t
              },
              f: e
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var n,
          r,
          o = !0,
          c = !1
        return {
          s: function() {
            n = t[Symbol.iterator]()
          },
          n: function() {
            var t = n.next()
            return (o = t.done), t
          },
          e: function(t) {
            ;(c = !0), (r = t)
          },
          f: function() {
            try {
              o || null == n.return || n.return()
            } finally {
              if (c) throw r
            }
          }
        }
      }
      function v(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      function y(t) {
        l.a.config.errorHandler && l.a.config.errorHandler(t)
      }
      function x(t) {
        return t.then(function(t) {
          return t.default || t
        })
      }
      function w(t) {
        return (
          t.$options &&
          'function' == typeof t.$options.fetch &&
          !t.$options.fetch.length
        )
      }
      function _(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = m(r)
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value
            c.$fetch ? n.push(c) : c.$children && _(c, n)
          }
        } catch (t) {
          o.e(t)
        } finally {
          o.f()
        }
        return n
      }
      function $(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function() {
              return {}
            }
          ;(t.options._originDataFn = n),
            (t.options.data = function() {
              var data = n.call(this, this)
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                d({}, data, {}, e)
              )
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data)
        }
      }
      function O(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = l.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        )
      }
      function j(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'components'
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, r) {
            return Object.keys(t[n]).map(function(o) {
              return e && e.push(r), t[n][o]
            })
          })
        )
      }
      function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return j(t, e, 'instances')
      }
      function k(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.components).reduce(function(r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              )
            }, [])
          })
        )
      }
      function R(t, e) {
        return Promise.all(
          k(
            t,
            (function() {
              var t = Object(c.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ('function' != typeof n || n.options) {
                            t.next = 4
                            break
                          }
                          return (t.next = 3), n()
                        case 3:
                          n = t.sent
                        case 4:
                          return (
                            (o.components[c] = n = O(n)),
                            t.abrupt(
                              'return',
                              'function' == typeof e ? e(n, r, o, c) : n
                            )
                          )
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function(e, n, r, o) {
                return t.apply(this, arguments)
              }
            })()
          )
        )
      }
      function S(t) {
        return E.apply(this, arguments)
      }
      function E() {
        return (E = Object(c.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2
                      break
                    }
                    return t.abrupt('return')
                  case 2:
                    return (t.next = 4), R(e)
                  case 4:
                    return t.abrupt(
                      'return',
                      d({}, e, {
                        meta: j(e).map(function(t, n) {
                          return d(
                            {},
                            t.options.meta,
                            {},
                            (e.matched[n] || {}).meta
                          )
                        })
                      })
                    )
                  case 5:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function T(t, e) {
        return P.apply(this, arguments)
      }
      function P() {
        return (P = Object(c.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var c, f, l, h
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          payload: n.payload,
                          error: n.error,
                          base: '/nuxt-router-test2/',
                          env: {}
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function(t, path, n) {
                          if (t) {
                            e.context._redirected = !0
                            var r = Object(o.a)(path)
                            if (
                              ('number' == typeof t ||
                                ('undefined' !== r && 'object' !== r) ||
                                ((n = path || {}),
                                (path = t),
                                (r = Object(o.a)(path)),
                                (t = 302)),
                              'object' === r &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw ((path = H(path, n)),
                              window.location.replace(path),
                              new Error('ERR_REDIRECT'))
                            e.context.next({ path: path, query: n, status: t })
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([S(n.route), S(n.from)])
                    )
                  case 3:
                    ;(c = t.sent),
                      (f = Object(r.a)(c, 2)),
                      (l = f[0]),
                      (h = f[1]),
                      n.route && (e.context.route = l),
                      n.from && (e.context.from = h),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {})
                  case 15:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function A(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : D(t[0], e).then(function() {
              return A(t.slice(1), e)
            })
      }
      function D(t, e) {
        var n
        return (n =
          2 === t.length
            ? new Promise(function(n) {
                t(e, function(t, data) {
                  t && e.error(t), n((data = data || {}))
                })
              })
            : t(e)) &&
          n instanceof Promise &&
          'function' == typeof n.then
          ? n
          : Promise.resolve(n)
      }
      function N(base, t) {
        var path = decodeURI(window.location.pathname)
        return 'hash' === t
          ? window.location.hash.replace(/^#\//, '')
          : (base &&
              0 === path.indexOf(base) &&
              (path = path.slice(base.length)),
            (path || '/') + window.location.search + window.location.hash)
      }
      function I(t, e) {
        return (function(t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            'object' === Object(o.a)(t[i]) &&
              (n[i] = new RegExp('^(?:' + t[i].pattern + ')$', K(e)))
          return function(e, r) {
            for (
              var path = '',
                data = e || {},
                o = (r || {}).pretty ? F : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var f = t[c]
              if ('string' != typeof f) {
                var l = data[f.name || 'pathMatch'],
                  h = void 0
                if (null == l) {
                  if (f.optional) {
                    f.partial && (path += f.prefix)
                    continue
                  }
                  throw new TypeError('Expected "' + f.name + '" to be defined')
                }
                if (Array.isArray(l)) {
                  if (!f.repeat)
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(l) +
                        '`'
                    )
                  if (0 === l.length) {
                    if (f.optional) continue
                    throw new TypeError(
                      'Expected "' + f.name + '" to not be empty'
                    )
                  }
                  for (var d = 0; d < l.length; d++) {
                    if (((h = o(l[d])), !n[c].test(h)))
                      throw new TypeError(
                        'Expected all "' +
                          f.name +
                          '" to match "' +
                          f.pattern +
                          '", but received `' +
                          JSON.stringify(h) +
                          '`'
                      )
                    path += (0 === d ? f.prefix : f.delimiter) + h
                  }
                } else {
                  if (((h = f.asterisk ? F(l, !0) : o(l)), !n[c].test(h)))
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to match "' +
                        f.pattern +
                        '", but received "' +
                        h +
                        '"'
                    )
                  path += f.prefix + h
                }
              } else path += f
            }
            return path
          }
        })(
          (function(t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = '',
              f = (e && e.delimiter) || '/'
            for (; null != (n = M.exec(t)); ) {
              var l = n[0],
                h = n[1],
                d = n.index
              if (((path += t.slice(c, d)), (c = d + l.length), h)) path += h[1]
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  x = n[4],
                  w = n[5],
                  _ = n[6],
                  $ = n[7]
                path && (r.push(path), (path = ''))
                var O = null != v && null != m && m !== v,
                  j = '+' === _ || '*' === _,
                  C = '?' === _ || '*' === _,
                  k = n[2] || f,
                  pattern = x || w
                r.push({
                  name: y || o++,
                  prefix: v || '',
                  delimiter: k,
                  optional: C,
                  repeat: j,
                  partial: O,
                  asterisk: Boolean($),
                  pattern: pattern ? U(pattern) : $ ? '.*' : '[^' + B(k) + ']+?'
                })
              }
            }
            c < t.length && (path += t.substr(c))
            path && r.push(path)
            return r
          })(t, e),
          e
        )
      }
      function L(t, e) {
        var n = {},
          r = d({}, t, {}, e)
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0)
        return n
      }
      function V(t) {
        var e
        if (t.message || 'string' == typeof t) e = t.message || t
        else
          try {
            e = JSON.stringify(t, null, 2)
          } catch (n) {
            e = '['.concat(t.constructor.name, ']')
          }
        return d({}, t, {
          message: e,
          statusCode:
            t.statusCode || t.status || (t.response && t.response.status) || 500
        })
      }
      ;(window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(t) {
          window.onNuxtReadyCbs.push(t)
        })
      var M = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
        ].join('|'),
        'g'
      )
      function F(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g
        return encodeURI(t).replace(n, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function B(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
      }
      function U(t) {
        return t.replace(/([=!:$/()])/g, '\\$1')
      }
      function K(t) {
        return t && t.sensitive ? '' : 'i'
      }
      function H(t, e) {
        var n,
          o = t.indexOf('://')
        ;-1 !== o
          ? ((n = t.substring(0, o)), (t = t.substring(o + 3)))
          : t.startsWith('//') && (t = t.substring(2))
        var c,
          f = t.split('/'),
          l = (n ? n + '://' : '//') + f.shift(),
          path = f.filter(Boolean).join('/')
        if (2 === (f = path.split('#')).length) {
          var h = f,
            d = Object(r.a)(h, 2)
          ;(path = d[0]), (c = d[1])
        }
        return (
          (l += path ? '/' + path : ''),
          e &&
            '{}' !== JSON.stringify(e) &&
            (l +=
              (2 === t.split('?').length ? '&' : '?') +
              (function(t) {
                return Object.keys(t)
                  .sort()
                  .map(function(e) {
                    var n = t[e]
                    return null == n
                      ? ''
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function(t) {
                            return [e, '=', t].join('')
                          })
                          .join('&')
                      : e + '=' + n
                  })
                  .filter(Boolean)
                  .join('&')
              })(e)),
          (l += c ? '#' + c : '')
        )
      }
      function J(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n)
      }
    },
    36: function(t, e, n) {
      'use strict'
      n.d(e, 'b', function() {
        return ht
      }),
        n.d(e, 'a', function() {
          return A
        })
      n(73), n(10), n(8), n(5), n(4), n(9)
      var r = n(23),
        o = n(2),
        c = (n(28), n(0)),
        f = n(153),
        l = n(116),
        h = n.n(l),
        d = n(63),
        m = n.n(d),
        v = n(77),
        y = n(3)
      'scrollRestoration' in window.history &&
        ((window.history.scrollRestoration = 'manual'),
        window.addEventListener('beforeunload', function() {
          window.history.scrollRestoration = 'auto'
        }),
        window.addEventListener('load', function() {
          window.history.scrollRestoration = 'manual'
        }))
      var x = function() {},
        w = v.a.prototype.push
      ;(v.a.prototype.push = function(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
          n = arguments.length > 2 ? arguments[2] : void 0
        return w.call(this, t, e, n)
      }),
        c.a.use(v.a)
      var _ = {
        mode: 'history',
        base: decodeURI('/nuxt-router-test2/'),
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        scrollBehavior: function(t, e, n) {
          var r = !1,
            o = Object(y.g)(t)
          ;((o.length < 2 &&
            o.every(function(t) {
              return !1 !== t.options.scrollToTop
            })) ||
            o.some(function(t) {
              return t.options.scrollToTop
            })) &&
            (r = { x: 0, y: 0 }),
            n && (r = n)
          var c = window.$nuxt
          return (
            t.path === e.path &&
              t.hash !== e.hash &&
              c.$nextTick(function() {
                return c.$emit('triggerScroll')
              }),
            new Promise(function(e) {
              c.$once('triggerScroll', function() {
                if (t.hash) {
                  var n = t.hash
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = '#' + window.CSS.escape(n.substr(1)))
                  try {
                    document.querySelector(n) && (r = { selector: n })
                  } catch (t) {
                    console.warn(
                      'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
                    )
                  }
                }
                e(r)
              })
            })
          )
        },
        routes: [
          {
            path: '/inspire/',
            component: function() {
              return Object(y.m)(n.e(3).then(n.bind(null, 293)))
            },
            pathToRegexpOptions: { strict: !0 },
            name: 'inspire'
          },
          {
            path: '/user/',
            component: function() {
              return Object(y.m)(n.e(8).then(n.bind(null, 287)))
            },
            pathToRegexpOptions: { strict: !0 },
            name: 'user'
          },
          {
            path: '/user/one/',
            component: function() {
              return Object(y.m)(n.e(9).then(n.bind(null, 288)))
            },
            pathToRegexpOptions: { strict: !0 },
            name: 'user-one'
          },
          {
            path: '/user/:id/',
            component: function() {
              return Object(y.m)(n.e(7).then(n.bind(null, 289)))
            },
            pathToRegexpOptions: { strict: !0 },
            name: 'user-id'
          },
          {
            path: '/user/:id/friend/',
            component: function() {
              return Object(y.m)(n.e(4).then(n.bind(null, 290)))
            },
            pathToRegexpOptions: { strict: !0 },
            name: 'user-id-friend',
            children: [
              {
                path: '',
                component: function() {
                  return Object(y.m)(n.e(6).then(n.bind(null, 291)))
                },
                pathToRegexpOptions: { strict: !0 },
                name: 'user-id-friend'
              },
              {
                path: ':fid/',
                component: function() {
                  return Object(y.m)(n.e(5).then(n.bind(null, 292)))
                },
                pathToRegexpOptions: { strict: !0 },
                name: 'user-id-friend-fid'
              }
            ]
          },
          {
            path: '/',
            component: function() {
              return Object(y.m)(n.e(2).then(n.bind(null, 286)))
            },
            pathToRegexpOptions: { strict: !0 },
            name: 'index'
          }
        ],
        fallback: !1
      }
      function $() {
        return new v.a(_)
      }
      var O = {
          name: 'NuxtChild',
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: '' },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 }
          },
          render: function(t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement
            data.nuxtChild = !0
            for (
              var c = n,
                f = n.$nuxt.nuxt.transitions,
                l = n.$nuxt.nuxt.defaultTransition,
                h = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && h++, (n = n.$parent)
            data.nuxtChildDepth = h
            var d = f[h] || l,
              m = {}
            j.forEach(function(t) {
              void 0 !== d[t] && (m[t] = d[t])
            })
            var v = {}
            C.forEach(function(t) {
              'function' == typeof d[t] && (v[t] = d[t].bind(c))
            })
            var y = v.beforeEnter
            if (
              ((v.beforeEnter = function(t) {
                if (
                  (window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit('triggerScroll')
                  }),
                  y)
                )
                  return y.call(c, t)
              }),
              !1 === d.css)
            ) {
              var x = v.leave
              ;(!x || x.length < 2) &&
                (v.leave = function(t, e) {
                  x && x.call(c, t), c.$nextTick(e)
                })
            }
            var w = o('routerView', data)
            return (
              r.keepAlive &&
                (w = o('keep-alive', { props: r.keepAliveProps }, [w])),
              o('transition', { props: m, on: v }, [w])
            )
          }
        },
        j = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass'
        ],
        C = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled'
        ],
        k = {
          layout: 'empty',
          props: { error: { type: Object, default: null } },
          data: function() {
            return {
              pageNotFound: '404 Not Found',
              otherError: 'An error occurred'
            }
          },
          head: function() {
            return {
              title:
                404 === this.error.statusCode
                  ? this.pageNotFound
                  : this.otherError
            }
          }
        },
        R = (n(193), n(57)),
        S = n(78),
        E = n.n(S),
        T = n(260),
        P = Object(R.a)(
          k,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'v-app',
              { attrs: { dark: '' } },
              [
                404 === t.error.statusCode
                  ? n('h1', [t._v('\n    ' + t._s(t.pageNotFound) + '\n  ')])
                  : n('h1', [t._v('\n    ' + t._s(t.otherError) + '\n  ')]),
                t._v(' '),
                n('NuxtLink', { attrs: { to: '/' } }, [
                  t._v('\n    Home page\n  ')
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          'de4b70e6',
          null
        ),
        A = P.exports
      E()(P, { VApp: T.a })
      n(18), n(19), n(53)
      var D = n(15),
        N = {
          name: 'Nuxt',
          components: { NuxtChild: O, NuxtError: A },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: 'default' }
          },
          errorCaptured: function(t) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = t), this.$forceUpdate())
          },
          computed: {
            routerViewKey: function() {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(y.c)(this.$route.matched[0].path)(this.$route.params)
                )
              var t = Object(D.a)(this.$route.matched, 1)[0]
              if (!t) return this.$route.path
              var e = t.components.default
              if (e && e.options) {
                var n = e.options
                if (n.key)
                  return 'function' == typeof n.key ? n.key(this.$route) : n.key
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, '')
            }
          },
          beforeCreate: function() {
            c.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt)
          },
          render: function(t) {
            var e = this
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function() {
                    return (e.errorFromNuxtError = !1)
                  }),
                  t('div', {}, [
                    t('h2', 'An error occured while showing the error page'),
                    t(
                      'p',
                      'Unfortunately an error occured and while showing the error page another error occured'
                    ),
                    t(
                      'p',
                      'Error details: '.concat(
                        this.errorFromNuxtError.toString()
                      )
                    ),
                    t('nuxt-link', { props: { to: '/' } }, 'Go back to home')
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function() {
                    return (e.displayingNuxtError = !1)
                  }),
                  t(A, { props: { error: this.nuxt.err } }))
              : t('NuxtChild', { key: this.routerViewKey, props: this.$props })
          }
        },
        I =
          (n(44),
          n(49),
          n(50),
          {
            name: 'NuxtLoading',
            data: function() {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1
              }
            },
            computed: {
              left: function() {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? '0px'
                      : 'auto'
                    : this.reversed
                    ? 'auto'
                    : '0px')
                )
              }
            },
            beforeDestroy: function() {
              this.clear()
            },
            methods: {
              clear: function() {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null)
              },
              start: function() {
                var t = this
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function() {
                        return t.startTimer()
                      }, this.throttle))
                    : this.startTimer(),
                  this
                )
              },
              set: function(t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                )
              },
              get: function() {
                return this.percent
              },
              increase: function(t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                )
              },
              decrease: function(t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                )
              },
              pause: function() {
                return clearInterval(this._timer), this
              },
              resume: function() {
                return this.startTimer(), this
              },
              finish: function() {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                )
              },
              hide: function() {
                var t = this
                return (
                  this.clear(),
                  setTimeout(function() {
                    ;(t.show = !1),
                      t.$nextTick(function() {
                        ;(t.percent = 0), (t.reversed = !1)
                      })
                  }, 500),
                  this
                )
              },
              fail: function(t) {
                return (this.canSucceed = !1), this
              },
              startTimer: function() {
                var t = this
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function() {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)))
                  }, 100))
              }
            },
            render: function(t) {
              var e = t(!1)
              return (
                this.show &&
                  (e = t('div', {
                    staticClass: 'nuxt-progress',
                    class: {
                      'nuxt-progress-notransition': this.skipTimerCount > 0,
                      'nuxt-progress-failed': !this.canSucceed
                    },
                    style: { width: this.percent + '%', left: this.left }
                  })),
                e
              )
            }
          }),
        L =
          (n(197),
          Object(R.a)(I, void 0, void 0, !1, null, null, null).exports),
        V = {
          data: function() {
            return {
              clipped: !1,
              drawer: !1,
              fixed: !1,
              items: [
                { icon: 'mdi-apps', title: 'Welcome', to: '/' },
                { icon: 'mdi-chart-bubble', title: 'Inspire', to: '/inspire' }
              ],
              miniVariant: !1,
              right: !0,
              rightDrawer: !1,
              title: 'Vuetify.js'
            }
          }
        },
        M = n(267),
        F = n(261),
        B = n(157),
        U = n(262),
        K = n(263),
        H = n(264),
        J = n(112),
        Q = n(113),
        X = n(74),
        z = n(114),
        W = n(56),
        G = n(266),
        Y = n(265),
        Z = n(155),
        tt = Object(R.a)(
          V,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'v-app',
              { attrs: { dark: '' } },
              [
                n(
                  'v-navigation-drawer',
                  {
                    attrs: {
                      'mini-variant': t.miniVariant,
                      clipped: t.clipped,
                      fixed: '',
                      app: ''
                    },
                    model: {
                      value: t.drawer,
                      callback: function(e) {
                        t.drawer = e
                      },
                      expression: 'drawer'
                    }
                  },
                  [
                    n(
                      'v-list',
                      t._l(t.items, function(e, i) {
                        return n(
                          'v-list-item',
                          {
                            key: i,
                            attrs: { to: e.to, router: '', exact: '' }
                          },
                          [
                            n(
                              'v-list-item-action',
                              [n('v-icon', [t._v(t._s(e.icon))])],
                              1
                            ),
                            t._v(' '),
                            n(
                              'v-list-item-content',
                              [
                                n('v-list-item-title', {
                                  domProps: { textContent: t._s(e.title) }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      1
                    )
                  ],
                  1
                ),
                t._v(' '),
                n(
                  'v-app-bar',
                  { attrs: { 'clipped-left': t.clipped, fixed: '', app: '' } },
                  [
                    n('v-app-bar-nav-icon', {
                      on: {
                        click: function(e) {
                          e.stopPropagation(), (t.drawer = !t.drawer)
                        }
                      }
                    }),
                    t._v(' '),
                    n(
                      'v-btn',
                      {
                        attrs: { icon: '' },
                        on: {
                          click: function(e) {
                            e.stopPropagation(),
                              (t.miniVariant = !t.miniVariant)
                          }
                        }
                      },
                      [
                        n('v-icon', [
                          t._v(
                            'mdi-' +
                              t._s(
                                'chevron-' + (t.miniVariant ? 'right' : 'left')
                              )
                          )
                        ])
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'v-btn',
                      {
                        attrs: { icon: '' },
                        on: {
                          click: function(e) {
                            e.stopPropagation(), (t.clipped = !t.clipped)
                          }
                        }
                      },
                      [n('v-icon', [t._v('mdi-application')])],
                      1
                    ),
                    t._v(' '),
                    n(
                      'v-btn',
                      {
                        attrs: { icon: '' },
                        on: {
                          click: function(e) {
                            e.stopPropagation(), (t.fixed = !t.fixed)
                          }
                        }
                      },
                      [n('v-icon', [t._v('mdi-minus')])],
                      1
                    ),
                    t._v(' '),
                    n('v-toolbar-title', {
                      domProps: { textContent: t._s(t.title) }
                    }),
                    t._v(' '),
                    n('v-spacer'),
                    t._v(' '),
                    n(
                      'v-btn',
                      {
                        attrs: { icon: '' },
                        on: {
                          click: function(e) {
                            e.stopPropagation(),
                              (t.rightDrawer = !t.rightDrawer)
                          }
                        }
                      },
                      [n('v-icon', [t._v('mdi-menu')])],
                      1
                    )
                  ],
                  1
                ),
                t._v(' '),
                n('v-content', [n('v-container', [n('nuxt')], 1)], 1),
                t._v(' '),
                n(
                  'v-navigation-drawer',
                  {
                    attrs: { right: t.right, temporary: '', fixed: '' },
                    model: {
                      value: t.rightDrawer,
                      callback: function(e) {
                        t.rightDrawer = e
                      },
                      expression: 'rightDrawer'
                    }
                  },
                  [
                    n(
                      'v-list',
                      [
                        n(
                          'v-list-item',
                          {
                            nativeOn: {
                              click: function(e) {
                                t.right = !t.right
                              }
                            }
                          },
                          [
                            n(
                              'v-list-item-action',
                              [
                                n('v-icon', { attrs: { light: '' } }, [
                                  t._v('\n            mdi-repeat\n          ')
                                ])
                              ],
                              1
                            ),
                            t._v(' '),
                            n('v-list-item-title', [
                              t._v('Switch drawer (click me)')
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                t._v(' '),
                n('v-footer', { attrs: { fixed: t.fixed, app: '' } }, [
                  n('span', [t._v('© ' + t._s(new Date().getFullYear()))])
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ),
        et = tt.exports
      function nt(t) {
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (t = (function(t, e) {
              if (!t) return
              if ('string' == typeof t) return ot(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(n)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return ot(t, e)
            })(t))
          ) {
            var i = 0,
              e = function() {}
            return {
              s: e,
              n: function() {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function(t) {
                throw t
              },
              f: e
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var n,
          r,
          o = !0,
          c = !1
        return {
          s: function() {
            n = t[Symbol.iterator]()
          },
          n: function() {
            var t = n.next()
            return (o = t.done), t
          },
          e: function(t) {
            ;(c = !0), (r = t)
          },
          f: function() {
            try {
              o || null == n.return || n.return()
            } finally {
              if (c) throw r
            }
          }
        }
      }
      function ot(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      E()(tt, {
        VApp: T.a,
        VAppBar: M.a,
        VAppBarNavIcon: F.a,
        VBtn: B.a,
        VContainer: U.a,
        VContent: K.a,
        VFooter: H.a,
        VIcon: J.a,
        VList: Q.a,
        VListItem: X.a,
        VListItemAction: z.a,
        VListItemContent: W.a,
        VListItemTitle: W.b,
        VNavigationDrawer: G.a,
        VSpacer: Y.a,
        VToolbarTitle: Z.a
      })
      var it = { _default: Object(y.r)(et) },
        at = {
          render: function(t, e) {
            var n = t('NuxtLoading', { ref: 'loading' })
            if (this.nuxt.err && A) {
              var r = (A.options || A).layout
              r &&
                this.setLayout(
                  'function' == typeof r ? r.call(A, this.context) : r
                )
            }
            var o = t(this.layout || 'nuxt'),
              c = t(
                'div',
                { domProps: { id: '__layout' }, key: this.layoutName },
                [o]
              ),
              f = t(
                'transition',
                {
                  props: { name: 'layout', mode: 'out-in' },
                  on: {
                    beforeEnter: function(t) {
                      window.$nuxt.$nextTick(function() {
                        window.$nuxt.$emit('triggerScroll')
                      })
                    }
                  }
                },
                [c]
              )
            return t('div', { domProps: { id: '__nuxt' } }, [n, f])
          },
          data: function() {
            return { isOnline: !0, layout: null, layoutName: '', nbFetching: 0 }
          },
          beforeCreate: function() {
            c.a.util.defineReactive(this, 'nuxt', this.$options.nuxt)
          },
          created: function() {
            ;(c.a.prototype.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener('online', this.refreshOnlineStatus),
              window.addEventListener('offline', this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context)
          },
          mounted: function() {
            this.$loading = this.$refs.loading
          },
          watch: { 'nuxt.err': 'errorChanged' },
          computed: {
            isOffline: function() {
              return !this.isOnline
            },
            isFetching: function() {
              return this.nbFetching > 0
            }
          },
          methods: {
            refreshOnlineStatus: function() {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine)
            },
            refresh: function() {
              var t = this
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r
                  return regeneratorRuntime.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(y.h)(t.$route)).length) {
                              e.next = 3
                              break
                            }
                            return e.abrupt('return')
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function(e) {
                                var p = []
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(y.p)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch())
                                else {
                                  var n,
                                    r = nt(
                                      Object(y.e)(e.$vnode.componentInstance)
                                    )
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value
                                      p.push(component.$fetch())
                                    }
                                  } catch (t) {
                                    r.e(t)
                                  } finally {
                                    r.f()
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(y.p)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function(t) {
                                        for (var n in t)
                                          c.a.set(e.$data, n, t[n])
                                      })
                                    ),
                                  Promise.all(p)
                                )
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            )
                          case 8:
                            e.next = 15
                            break
                          case 10:
                            ;(e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(y.k)(e.t0),
                              t.error(e.t0)
                          case 15:
                            t.$loading.finish()
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  )
                })
              )()
            },
            errorChanged: function() {
              this.nuxt.err &&
                this.$loading &&
                (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                this.$loading.finish && this.$loading.finish())
            },
            setLayout: function(t) {
              return (
                (t && it['_' + t]) || (t = 'default'),
                (this.layoutName = t),
                (this.layout = it['_' + t]),
                this.layout
              )
            },
            loadLayout: function(t) {
              return (
                (t && it['_' + t]) || (t = 'default'),
                Promise.resolve(it['_' + t])
              )
            }
          },
          components: { NuxtLoading: L }
        },
        st = n(117),
        ct = {
          theme: {
            dark: !0,
            themes: {
              dark: {
                primary: '#1976d2',
                accent: '#424242',
                secondary: '#ff8f00',
                info: '#26a69a',
                warning: '#ffc107',
                error: '#dd2c00',
                success: '#00e676'
              }
            }
          }
        }
      c.a.use(st.a, {})
      var ut = function(t) {
        var e = 'function' == typeof ct ? ct(t) : ct
        ;(e.icons = e.icons || {}), (e.icons.iconfont = 'mdi')
        var n = new st.a(e)
        ;(t.app.vuetify = n), (t.$vuetify = n.framework)
      }
      function ft(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function pt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? ft(Object(source), !0).forEach(function(e) {
                Object(o.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : ft(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      c.a.component(h.a.name, h.a),
        c.a.component(
          m.a.name,
          pt({}, m.a, {
            render: function(t, e) {
              return (
                m.a._warned ||
                  ((m.a._warned = !0),
                  console.warn(
                    '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead'
                  )),
                m.a.render(t, e)
              )
            }
          })
        ),
        c.a.component(O.name, O),
        c.a.component('NChild', O),
        c.a.component(N.name, N),
        c.a.use(f.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid'
        })
      var lt = {
        name: 'page',
        mode: 'out-in',
        appear: !0,
        appearClass: 'appear',
        appearActiveClass: 'appear-active',
        appearToClass: 'appear-to'
      }
      function ht(t) {
        return mt.apply(this, arguments)
      }
      function mt() {
        return (mt = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n, r, o, f, path
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), $()
                  case 2:
                    return (
                      (n = t.sent),
                      (r = pt(
                        {
                          head: {
                            titleTemplate: '%s - nuxt-router-test1',
                            title: 'nuxt-router-test1',
                            meta: [
                              { charset: 'utf-8' },
                              {
                                name: 'viewport',
                                content: 'width=device-width, initial-scale=1'
                              },
                              {
                                hid: 'description',
                                name: 'description',
                                content: 'My super Nuxt.js project'
                              }
                            ],
                            link: [
                              {
                                rel: 'icon',
                                type: 'image/x-icon',
                                href: '/favicon.ico'
                              },
                              {
                                rel: 'stylesheet',
                                type: 'text/css',
                                href:
                                  'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap'
                              },
                              {
                                rel: 'stylesheet',
                                type: 'text/css',
                                href:
                                  'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
                              }
                            ],
                            style: [],
                            script: []
                          },
                          router: n,
                          nuxt: {
                            defaultTransition: lt,
                            transitions: [lt],
                            setTransitions: function(t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function(t) {
                                  return (t = t
                                    ? 'string' == typeof t
                                      ? Object.assign({}, lt, { name: t })
                                      : Object.assign({}, lt, t)
                                    : lt)
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              )
                            },
                            err: null,
                            dateErr: null,
                            error: function(t) {
                              ;(t = t || null),
                                (r.context._errored = Boolean(t)),
                                (t = t ? Object(y.o)(t) : null)
                              var n = r.nuxt
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              )
                            }
                          }
                        },
                        at
                      )),
                      (o = e
                        ? e.next
                        : function(t) {
                            return r.router.push(t)
                          }),
                      e
                        ? (f = n.resolve(e.url).route)
                        : ((path = Object(y.f)(n.options.base, n.options.mode)),
                          (f = n.resolve(path).route)),
                      (t.next = 8),
                      Object(y.s)(r, {
                        route: f,
                        next: o,
                        error: r.nuxt.error.bind(r),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e
                      })
                    )
                  case 8:
                    return (
                      function(t, e) {
                        if (!t)
                          throw new Error(
                            'inject(key, value) has no key provided'
                          )
                        if (void 0 === e)
                          throw new Error(
                            "inject('".concat(
                              t,
                              "', value) has no value provided"
                            )
                          )
                        r[(t = '$' + t)] = e
                        var n = '__nuxt_' + t + '_installed__'
                        c.a[n] ||
                          ((c.a[n] = !0),
                          c.a.use(function() {
                            Object.prototype.hasOwnProperty.call(c.a, t) ||
                              Object.defineProperty(c.a.prototype, t, {
                                get: function() {
                                  return this.$root.$options[t]
                                }
                              })
                          }))
                      },
                      (t.next = 12),
                      ut(r.context)
                    )
                  case 12:
                    t.next = 15
                    break
                  case 15:
                    return t.abrupt('return', { app: r, router: n })
                  case 16:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
    },
    96: function(t, e, n) {
      var content = n(194)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('70dd5533', content, !0, { sourceMap: !1 })
    },
    97: function(t, e, n) {
      var content = n(198)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('5b425f4d', content, !0, { sourceMap: !1 })
    }
  },
  [[161, 10, 1, 11]]
])
