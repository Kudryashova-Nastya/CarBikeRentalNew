(this["webpackJsonpcar-bike-rental-front"] =
  this["webpackJsonpcar-bike-rental-front"] || []).push([
  [0],
  {
    33: function (e, a, c) {},
    34: function (e, a, c) {},
    35: function (e, a, c) {},
    60: function (e, a, c) {},
    61: function (e, a, c) {},
    62: function (e, a, c) {
      "use strict";
      c.r(a);
      var s = c(1),
        t = c.n(s),
        n = c(26),
        i = c.n(n),
        r = (c(33), c.p + "static/media/logo.de7f50ee.svg"),
        l = (c(11), c(34), c(4)),
        j = c(2),
        d = (c(35), c(0)),
        b = function () {
          return Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)("h1", {
                className: "title",
                children:
                  "\u042f \u0445\u043e\u0447\u0443 \u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c",
              }),
              Object(d.jsxs)("div", {
                className: "columns",
                children: [
                  Object(d.jsx)("div", {
                    className: " column",
                    children: Object(d.jsx)(l.c, {
                      to: "/cars",
                      className: "link-block navbar-item",
                      children:
                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "column",
                    children: Object(d.jsx)(l.c, {
                      to: "/bikes",
                      className: "link-block navbar-item",
                      children:
                        "\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        o = c(12),
        h = c.n(o);
      c(60);
      var m = function () {
          var e = Object(s.useState)([]),
            a = e.cars,
            c = e.setCar;
          return (
            Object(s.useEffect)(
              function () {
                h()({
                  method: "GET",
                  url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars",
                }).then(function (e) {
                  c(e.data.cars);
                });
              },
              [c]
            ),
            Object(d.jsxs)("div", {
              children: [
                Object(d.jsx)("h1", {
                  children:
                    "\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e",
                }),
                a.map(function (e) {
                  e.photo,
                    e.brand,
                    e.price,
                    e.year,
                    e.mileage,
                    l.b,
                    "/cars/".concat(e.id);
                }),
              ],
            })
          );
        },
        x = c(28);
      c(61);
      var O = function (e) {
        var a = e.match,
          c = Object(s.useState)({}),
          t = Object(x.a)(c, 2),
          n = t[0],
          i = t[1],
          r = a.params.id;
        return (
          Object(s.useEffect)(
            function () {
              h()({
                method: "GET",
                url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/".concat(
                  r
                ),
              }).then(function (e) {
                i(e.data);
              });
            },
            [r]
          ),
          Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)(l.b, {
                to: "/cars",
                children: "\u041d\u0430\u0437\u0430\u0434",
              }),
              Object(d.jsx)("h1", { children: "\u0410\u0432\u0442\u043e" }),
              Object(d.jsxs)("div", {
                className: "card",
                children: [
                  Object(d.jsx)("div", {
                    className: "card-image",
                    children: Object(d.jsx)("figure", {
                      className: "image is-4by3",
                      children: Object(d.jsx)("img", {
                        src: n.photo,
                        alt: "car image",
                      }),
                    }),
                  }),
                  Object(d.jsxs)("div", {
                    className: "card-content",
                    children: [
                      Object(d.jsx)("div", {
                        className: "media",
                        children: Object(d.jsxs)("div", {
                          className: "media-content",
                          children: [
                            Object(d.jsx)("p", {
                              className: "title is-4",
                              children: n.brand,
                            }),
                            Object(d.jsx)("p", {
                              className: "subtitle is-6",
                              children: n.price,
                            }),
                          ],
                        }),
                      }),
                      Object(d.jsxs)("div", {
                        className: "content",
                        children: [
                          n.year,
                          " \u0433\u043e\u0434\u0430 \u0432\u044b\u043f\u0443\u0441\u043a\u0430. ",
                          Object(d.jsx)("br", {}),
                          n.mileage,
                          " \u043a\u043c \u043f\u0440\u043e\u0431\u0435\u0433\u0430. ",
                          Object(d.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var v = function () {
          return Object(d.jsxs)("div", {
            className: "App",
            children: [
              Object(d.jsx)("header", {
                children: Object(d.jsxs)("nav", {
                  className: "navbar",
                  role: "navigation",
                  "aria-label": "main navigation",
                  children: [
                    Object(d.jsxs)("div", {
                      className: "navbar-brand",
                      children: [
                        Object(d.jsx)(l.c, {
                          to: "/",
                          className: "navbar-item",
                          children: Object(d.jsx)("img", {
                            src: r,
                            alt: "logo",
                          }),
                        }),
                        Object(d.jsxs)("a", {
                          role: "button",
                          className: "navbar-burger",
                          "aria-label": "menu",
                          "aria-expanded": "false",
                          "data-target": "navbarBasicExample",
                          children: [
                            Object(d.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                            Object(d.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                            Object(d.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(d.jsxs)("div", {
                      id: "navbarBasicExample",
                      className: "navbar-menu",
                      children: [
                        Object(d.jsxs)("div", {
                          className: "navbar-start",
                          children: [
                            Object(d.jsx)(l.c, {
                              to: "/about",
                              className: "navbar-item",
                              children: "\u041e \u043d\u0430\u0441 ",
                            }),
                            Object(d.jsxs)("div", {
                              className:
                                "navbar-item has-dropdown is-hoverable",
                              children: [
                                Object(d.jsx)(l.c, {
                                  to: "/",
                                  className: "navbar-link",
                                  activeClassName: "navbar-link-active",
                                  children:
                                    "\u0410\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c ",
                                }),
                                Object(d.jsxs)("div", {
                                  className: "navbar-dropdown",
                                  children: [
                                    Object(d.jsx)(l.c, {
                                      to: "/cars",
                                      className: "navbar-item",
                                      children:
                                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c ",
                                    }),
                                    Object(d.jsx)("hr", {
                                      className: "navbar-divider",
                                    }),
                                    Object(d.jsx)(l.c, {
                                      to: "/bikes",
                                      className: "navbar-item",
                                      children:
                                        "\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434 ",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(d.jsx)("div", {
                          className: "navbar-end",
                          children: Object(d.jsx)("div", {
                            className: "navbar-item",
                            children: Object(d.jsx)("div", {
                              className: "buttons",
                              children: Object(d.jsx)(l.c, {
                                to: "/profile",
                                className: "button is-primary",
                                children: Object(d.jsx)("strong", {
                                  children:
                                    " \u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 ",
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(d.jsxs)(j.c, {
                children: [
                  Object(d.jsx)(j.a, { exact: !0, path: "/", component: b }),
                  Object(d.jsx)(j.a, {
                    exact: !0,
                    path: "/cars",
                    component: m,
                  }),
                  Object(d.jsx)(j.a, { path: "/cars/:id", component: O }),
                ],
              }),
            ],
          });
        },
        u = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 63))
              .then(function (a) {
                var c = a.getCLS,
                  s = a.getFID,
                  t = a.getFCP,
                  n = a.getLCP,
                  i = a.getTTFB;
                c(e), s(e), t(e), n(e), i(e);
              });
        };
      i.a.render(
        Object(d.jsx)(l.a, {
          children: Object(d.jsx)(t.a.StrictMode, {
            children: Object(d.jsx)(v, {}),
          }),
        }),
        document.getElementById("root")
      ),
        u();
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.f5e1fdd6.chunk.js.map
