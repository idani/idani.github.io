;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    279: function(t, e, n) {
      'use strict'
      n(119)
      var l = n(122)
      e.a = Object(l.a)('flex')
    },
    280: function(t, e, n) {
      'use strict'
      n(119)
      var l = n(122)
      e.a = Object(l.a)('layout')
    },
    293: function(t, e, n) {
      'use strict'
      n.r(e)
      var l = n(57),
        o = n(78),
        c = n.n(o),
        r = n(279),
        h = n(280),
        component = Object(l.a)(
          {},
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'v-layout',
              [
                e('v-flex', { staticClass: 'text-center' }, [
                  e('img', {
                    staticClass: 'mb-5',
                    attrs: { src: '/v.png', alt: 'Vuetify.js' }
                  }),
                  this._v(' '),
                  e('blockquote', { staticClass: 'blockquote' }, [
                    this._v(
                      '\n      “First, solve the problem. Then, write the code.”\n      '
                    ),
                    e('footer', [
                      e('small', [e('em', [this._v('—John Johnson')])])
                    ])
                  ])
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
        )
      e.default = component.exports
      c()(component, { VFlex: r.a, VLayout: h.a })
    }
  }
])
