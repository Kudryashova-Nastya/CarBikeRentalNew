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
        i = c(27),
        l = c.n(i),
        n = (c(33), c.p + "static/media/logo.de7f50ee.svg"),
        r = (c(13), c(34), c(4)),
        j = c(2),
        d = (c(35), c(0)),
        o = function () {
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
                    children: Object(d.jsx)(r.c, {
                      to: "/cars",
                      className: "link-block navbar-item",
                      children:
                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "column",
                    children: Object(d.jsx)(r.c, {
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
        b = c(8),
        m = c(10),
        h = c.n(m);
      c(60);
      var O = function () {
        var e = Object(s.useState)([]),
          a = Object(b.a)(e, 2),
          c = a[0],
          t = a[1];
        return (
          Object(s.useEffect)(function () {
            h()({
              method: "GET",
              url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/",
            }).then(function (e) {
              t(e.data);
            });
          }, []),
          Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)("h1", {
                className: "title",
                children:
                  "\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e",
              }),
              Object(d.jsx)("div", {
                className: "card-container",
                children: c.map(function (e) {
                  return Object(d.jsxs)(
                    "div",
                    {
                      className: "card",
                      children: [
                        Object(d.jsx)("div", {
                          className: "card-image",
                          children: Object(d.jsx)("img", {
                            src: e.photo,
                            alt: "car image",
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
                                    children: e.brand,
                                  }),
                                  Object(d.jsxs)("p", {
                                    className: "subtitle is-6",
                                    children: [
                                      e.price,
                                      " \u0440\u0443\u0431/\u0434\u0435\u043d\u044c",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(d.jsxs)("div", {
                              className: "content",
                              children: [
                                e.year,
                                " \u0433\u043e\u0434\u0430 \u0432\u044b\u043f\u0443\u0441\u043a\u0430. ",
                                Object(d.jsx)("br", {}),
                                e.mileage,
                                " \u043a\u043c \u043f\u0440\u043e\u0431\u0435\u0433\u0430. ",
                                Object(d.jsx)("br", {}),
                                Object(d.jsx)(r.b, {
                                  to: {
                                    pathname: "/cars/".concat(e.id),
                                    fromDashboard: !1,
                                  },
                                  class:
                                    "card-footer-item button is-primary is-light",
                                  children:
                                    " \u0410\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c ",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  );
                }),
              }),
            ],
          })
        );
      };
      c(61);
      var v = function (e) {
        var a = this,
          c = e.match,
          t = Object(s.useState)({}),
          i = Object(b.a)(t, 2),
          l = i[0],
          n = i[1],
          j = c.params.id,
          o = Object(s.useState)({}),
          m = Object(b.a)(o, 2),
          O = m[0],
          v = m[1],
          x = Object(s.useState)({}),
          u = Object(b.a)(x, 2),
          p = (u[0], u[1]);
        Object(s.useEffect)(
          function () {
            h.a
              .get(
                "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/".concat(
                  j,
                  "/"
                )
              )
              .then(function (e) {
                return (
                  n(e.data),
                  h.a.get(
                    "http://carbikerental.std-953.ist.mospolytech.ru/api/car_models/".concat(
                      e.data.car_model_id,
                      "/"
                    )
                  )
                );
              })
              .then(function (e) {
                v(e.data, function () {
                  return console.log(a.delivery.id);
                });
              });
          },
          [j]
        );
        var N = Object(s.useState)({ start: "" }),
          g = Object(b.a)(N, 2),
          f = g[0],
          y = g[1],
          _ = Object(s.useState)({ startTime: "9:00" }),
          S = Object(b.a)(_, 2),
          T = S[0],
          k = S[1],
          C = Object(s.useState)({ end: "" }),
          E = Object(b.a)(C, 2),
          q = E[0],
          w = E[1],
          D = Object(s.useState)({ endTime: "9:00" }),
          B = Object(b.a)(D, 2),
          F = B[0],
          I = B[1],
          P = Object(s.useState)({ region: "" }),
          J = Object(b.a)(P, 2),
          L = J[0],
          A = J[1],
          G = Object(s.useState)({ location: "" }),
          M = Object(b.a)(G, 2),
          z = M[0],
          H = M[1],
          K = Object(s.useState)({ comment: "" }),
          Q = Object(b.a)(K, 2),
          R = Q[0],
          U = Q[1],
          V = 0,
          W = 0;
        return Object(d.jsxs)("div", {
          children: [
            Object(d.jsx)(r.b, {
              className: "back",
              to: "/cars",
              children: "\u041d\u0430\u0437\u0430\u0434",
            }),
            Object(d.jsx)("h1", { className: "title", children: O.name }),
            Object(d.jsx)("div", {
              className: "card-image",
              children: Object(d.jsx)("img", {
                src: l.photo,
                alt: "car image",
              }),
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: l.year }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u0426\u0432\u0435\u0442",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: l.color }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u041f\u0440\u043e\u0431\u0435\u0433",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsxs)("div", {
                  className: "val",
                  children: [l.mileage, " \u043a\u043c"],
                }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0412\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0431\u0435\u0433",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsxs)("div", {
                  className: "val",
                  children: [l.max_limit, " \u043a\u043c"],
                }),
              ],
            }),
            Object(d.jsx)("h1", {
              className: "title-2",
              children:
                "\u041e\u0431\u0449\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u041a\u043e\u0440\u043e\u0431\u043a\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: O.gearbox }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u041a\u0443\u0437\u043e\u0432",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: O.body }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0412\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: O.seats }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u041f\u0440\u0438\u0432\u043e\u0434",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: O.drive }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: O.engine }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u0420\u0443\u043b\u044c",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: O.rudder }),
              ],
            }),
            Object(d.jsx)("h1", {
              className: "title-2",
              children:
                "\u0424\u043e\u0440\u043c\u0430 \u0430\u0440\u0435\u043d\u0434\u044b",
            }),
            Object(d.jsxs)("form", {
              onSubmit: function (e) {
                e.preventDefault();
                var a = h.a
                    .post(
                      "http://carbikerental.std-953.ist.mospolytech.ru/api/deliverys/",
                      {
                        type_delivery: "\u0430\u0442",
                        user_id: 1,
                        deliveryman_id: 1,
                        location_id: l.location_id,
                        delivery_location: z.location,
                        time: f.start + " " + T.startTime,
                      }
                    )
                    .then(function (e) {
                      console.log(e.data), (V = e.data.id);
                    }),
                  c = h.a
                    .post(
                      "http://carbikerental.std-953.ist.mospolytech.ru/api/deliverys/",
                      {
                        type_delivery: "\u0430\u043e",
                        user_id: 1,
                        deliveryman_id: 1,
                        location_id: l.location_id,
                        delivery_location: z.location,
                        time: q.end + " " + F.endTime,
                      }
                    )
                    .then(function (e) {
                      console.log(e), (W = e.data.id);
                    });
                Promise.all([a, c])
                  .then(function () {
                    return h.a.post(
                      "http://carbikerental.std-953.ist.mospolytech.ru/api/car_rents/",
                      {
                        user_id: 1,
                        car_id: l.id,
                        start: f.start + " " + T.startTime,
                        end: q.end + " " + F.endTime,
                        region: L.region,
                        delivery_to_id: V,
                        delivery_from_id: W,
                        limit: l.max_limit,
                        price: l.price,
                        comment: R.comment,
                      }
                    );
                  })
                  .then(function (e) {
                    console.log(e),
                      alert(
                        "\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0430\u0440\u0435\u043d\u0434\u0443 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0430\u043d\u0430. \u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0432 \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435. \u0412\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0435"
                      ),
                      y({ start: "" }),
                      w({ end: "" }),
                      k({ startTime: "9:00" }),
                      I({ endTime: "9:00" }),
                      A({ region: "" }),
                      H({ location: "" }),
                      U({ comment: "" });
                  })
                  .catch(function (e) {
                    p(),
                      console.log(e),
                      e.response
                        ? (console.log(
                            "---------------------------------------------"
                          ),
                          console.log(e.response.data),
                          console.log(e.response.status),
                          console.log(e.response.headers))
                        : e.request
                        ? (console.log("*************************"),
                          console.log(e.request))
                        : (console.log("++++++++++++++++++++++++"),
                          console.log("Error", e.message)),
                      console.log(e.config),
                      alert(
                        "\u041e\u0448\u0438\u0431\u043a\u0430 " +
                          e.response.status
                      );
                  });
              },
              children: [
                Object(d.jsx)("label", {
                  className: "label",
                  children:
                    "\u041f\u0435\u0440\u0438\u043e\u0434 \u0430\u0440\u0435\u043d\u0434\u044b",
                }),
                Object(d.jsx)("br", {}),
                Object(d.jsxs)("div", {
                  className: "field has-addons",
                  children: [
                    Object(d.jsx)("p", {
                      className: "control",
                      children: Object(d.jsx)("span", {
                        className: "select",
                        children: Object(d.jsxs)("select", {
                          className: "selected",
                          value: T.startTime,
                          onChange: function (e) {
                            k({ startTime: e.target.value });
                          },
                          children: [
                            Object(d.jsx)("option", {
                              value: "09:00",
                              children: "09:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "10:00",
                              children: "10:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "11:00",
                              children: "11:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "12:00",
                              children: "12:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "13:00",
                              children: "13:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "14:00",
                              children: "14:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "15:00",
                              children: "15:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "16:00",
                              children: "16:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "17:00",
                              children: "17:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "18:00",
                              children: "18:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "19:00",
                              children: "19:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "20:00",
                              children: "20:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "21:00",
                              children: "21:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "22:00",
                              children: "22:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "23:00",
                              children: "23:00",
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(d.jsx)("p", {
                      className: "control",
                      children: Object(d.jsx)("input", {
                        className: "input",
                        type: "date",
                        min: new Date().toISOString().slice(0, 10),
                        value: f.start,
                        onChange: function (e) {
                          y({ start: e.target.value });
                        },
                        required: !0,
                      }),
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "field has-addons",
                  children: [
                    Object(d.jsx)("p", {
                      className: "control",
                      children: Object(d.jsx)("span", {
                        className: "select",
                        children: Object(d.jsxs)("select", {
                          className: "selected",
                          value: F.endTime,
                          onChange: function (e) {
                            I({ endTime: e.target.value });
                          },
                          children: [
                            Object(d.jsx)("option", {
                              value: "09:00",
                              children: "09:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "10:00",
                              children: "10:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "11:00",
                              children: "11:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "12:00",
                              children: "12:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "13:00",
                              children: "13:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "14:00",
                              children: "14:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "15:00",
                              children: "15:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "16:00",
                              children: "16:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "17:00",
                              children: "17:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "18:00",
                              children: "18:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "19:00",
                              children: "19:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "20:00",
                              children: "20:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "21:00",
                              children: "21:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "22:00",
                              children: "22:00",
                            }),
                            Object(d.jsx)("option", {
                              value: "23:00",
                              children: "23:00",
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(d.jsx)("p", {
                      className: "control",
                      children: Object(d.jsx)("input", {
                        className: "input",
                        type: "date",
                        min: new Date().toISOString().slice(0, 10),
                        value: q.end,
                        onChange: function (e) {
                          w({ end: e.target.value });
                        },
                        required: !0,
                      }),
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "field",
                  children: [
                    Object(d.jsx)("label", {
                      className: "label",
                      children:
                        "\u0420\u0435\u0433\u0438\u043e\u043d \u043f\u043e\u0435\u0437\u0434\u043a\u0438",
                    }),
                    Object(d.jsx)("div", {
                      className: "control",
                      children: Object(d.jsx)("input", {
                        className: "input",
                        type: "text",
                        placeholder:
                          "\u041c\u0435\u0441\u0442\u043e, \u043a\u0443\u0434\u0430 \u0432\u044b \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u043f\u043e\u0435\u0445\u0430\u0442\u044c",
                        maxlength: "40",
                        value: L.region,
                        onChange: function (e) {
                          A({ region: e.target.value });
                        },
                        required: !0,
                      }),
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "field",
                  children: [
                    Object(d.jsx)("label", {
                      className: "label",
                      children:
                        "\u0410\u0434\u0440\u0435\u0441 \u0432\u044b\u0434\u0430\u0447\u0438 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u043c\u0430\u0448\u0438\u043d\u044b",
                    }),
                    Object(d.jsx)("div", {
                      className: "control",
                      children: Object(d.jsx)("input", {
                        className: "input",
                        type: "text",
                        placeholder:
                          "\u041c\u0435\u0441\u0442\u043e, \u0433\u0434\u0435 \u0432\u044b \u0437\u0430\u0431\u0435\u0440\u0451\u0442\u0435 \u0438 \u043a\u0443\u0434\u0430 \u0432\u0435\u0440\u043d\u0451\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                        maxlength: "100",
                        value: z.location,
                        onChange: function (e) {
                          H({ location: e.target.value });
                        },
                        required: !0,
                      }),
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "field",
                  children: [
                    Object(d.jsx)("label", {
                      className: "label",
                      children:
                        "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 (\u043f\u043e \u0436\u0435\u043b\u0430\u043d\u0438\u044e)",
                    }),
                    Object(d.jsx)("div", {
                      className: "control",
                      children: Object(d.jsx)("textarea", {
                        className: "textarea",
                        placeholder:
                          "\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                        maxlength: "200",
                        value: R.comment,
                        onChange: function (e) {
                          U({ comment: e.target.value });
                        },
                      }),
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  children: [
                    "\u0418\u0442\u043e\u0433\u043e: ",
                    Object(d.jsx)("b", { children: 2 * l.price }),
                  ],
                }),
                Object(d.jsx)("div", {
                  className: "control",
                  children: Object(d.jsx)("button", {
                    className: "button is-link",
                    type: "submit",
                    children: "Submit",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var x = function () {
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
                        Object(d.jsx)(r.c, {
                          to: "/",
                          className: "navbar-item",
                          children: Object(d.jsx)("img", {
                            src: n,
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
                            Object(d.jsx)(r.c, {
                              to: "/about",
                              className: "navbar-item",
                              children: "\u041e \u043d\u0430\u0441 ",
                            }),
                            Object(d.jsxs)("div", {
                              className:
                                "navbar-item has-dropdown is-hoverable",
                              children: [
                                Object(d.jsx)(r.c, {
                                  to: "/",
                                  className: "navbar-link",
                                  activeClassName: "navbar-link-active",
                                  children:
                                    "\u0410\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c ",
                                }),
                                Object(d.jsxs)("div", {
                                  className: "navbar-dropdown",
                                  children: [
                                    Object(d.jsx)(r.c, {
                                      to: "/cars",
                                      className: "navbar-item",
                                      children:
                                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c ",
                                    }),
                                    Object(d.jsx)("hr", {
                                      className: "navbar-divider",
                                    }),
                                    Object(d.jsx)(r.c, {
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
                              children: Object(d.jsx)(r.c, {
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
                  Object(d.jsx)(j.a, { exact: !0, path: "/", component: o }),
                  Object(d.jsx)(j.a, {
                    exact: !0,
                    path: "/cars",
                    component: O,
                  }),
                  Object(d.jsx)(j.a, { path: "/cars/:id", component: v }),
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
                  i = a.getLCP,
                  l = a.getTTFB;
                c(e), s(e), t(e), i(e), l(e);
              });
        };
      l.a.render(
        Object(d.jsx)(r.a, {
          children: Object(d.jsx)(t.a.StrictMode, {
            children: Object(d.jsx)(x, {}),
          }),
        }),
        document.getElementById("root")
      ),
        u();
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.450d6460.chunk.js.map
