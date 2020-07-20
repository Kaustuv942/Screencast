webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_GoogleLog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GoogleLog */ "./components/GoogleLog.js");
/* harmony import */ var _components_FbLog2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FbLog2 */ "./components/FbLog2.js");
/* harmony import */ var _components_Timer2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Timer2 */ "./components/Timer2.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Date.now()),
      end = _useState[0],
      setEnd = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Date.now()),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      day = _useState3[0],
      setDay = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://screencast2020.herokuapp.com/api/status").then(function (response) {
      console.log("index mounted");
      console.log(response);
      console.log(new Date(response.data.start_time).getTime()); //milliseconds
      //setStart((new Date(response.data.end_time)).getTime())

      setStart(new Date("2020-07-20T13:8:27Z").getTime());
      setEnd(new Date(response.data.end_time).getTime());
      setDay(response.data.current_day);
      localStorage.setItem("start", start);
      console.log(localStorage.getItem('start'));
      if (localStorage.getItem('email') && localStorage.getItem('start') <= Date.now()) next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/game');
    });
  });
  return __jsx("div", {
    style: {
      textAlign: "center",
      minHeight: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Screencast "), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "question.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(_components_Timer2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    start: start,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sign",
    style: {
      marginTop: "40px",
      marginBottom: "20px",
      fontFamily: "'Russo One', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "2020 ")), __jsx("div", {
    className: "login-head",
    style: {
      marginBottom: "60px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Login to play "))), __jsx("div", {
    className: "rowC",
    style: {
      margin: "0 auto",
      marginBottom: '100px',
      textAlign: "center",
      width: "100%",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.bf6d5f1e27fb53372b3c.hot-update.js.map