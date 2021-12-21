"use strict";
(() => {
var exports = {};
exports.id = "pages/views/ProductDetail";
exports.ids = ["pages/views/ProductDetail"];
exports.modules = {

/***/ "./pages/views/ProductDetail.js":
/*!**************************************!*\
  !*** ./pages/views/ProductDetail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\ProductDetail.js";




class ProductDetail extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
          integrity: "sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
          integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        class: "d-flex mt-5 ms-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "w-30",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: this.props.product.image,
            style: {
              border: '5px solid orange',
              height: 300
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "ms-5 w-70",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: ["Name : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: [" ", this.props.product.name, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 42
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 109
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: ["Description : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: this.props.product.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 120
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: ["Category : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: [" ", this.props.product.category]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 46
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 115
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: [" Price : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: [" ", this.props.product.price, " $"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 44
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 112
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: ["Discount : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: [this.props.product.percentage, " %"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 46
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 119
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: [" Shop : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: [" ", this.props.product.shop.name, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 43
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 114
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: [" Shop Location : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: [" ", this.props.product.shop.location]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 52
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 126
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            class: "text-dark",
            children: [" Phone Number of Shop : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "text-primary",
              children: [" ", this.props.product.shop.phoneNumber, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 59
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

} // assigning the initial props to the component's props

ProductDetail.getInitialProps = ctx => {
  return {
    product: ctx.query
  };
};

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/views/ProductDetail.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQztBQURSLEdBQVA7QUFHRCxDQUpEOzs7Ozs7Ozs7O0FDOUNBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldC8uL3BhZ2VzL3ZpZXdzL1Byb2R1Y3REZXRhaWwuanMiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuXHJcbjxIZWFkPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtMUJtRTRrV0JxNzhpWWhGbGR2S3VoZlRBVTZhdVU4dFQ5NFdySGZ0akRickNFWFNVMW9Cb3F5bDJRdlo2aklXM1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AcG9wcGVyanMvY29yZUAyLjEwLjIvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC03K3pDTmovSXFKOTV3bzE2b010ZnNLYlo5Y2NFaDMxZU96MUhHeUR1Q1E2d2dueUpOU1lkclBhMDNydFIxemRCXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RSkh0dkdobXI5WE9JcEk2WVZ1dEcrMlFPSzlUK1puTjRrekZOMVJ0SzN6RUZFSXN4aGxtV2w1L1lFU3ZwWjEzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG10LTUgbXMtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctMzBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMucHJvZHVjdC5pbWFnZX0gc3R5bGU9e3tib3JkZXI6JzVweCBzb2xpZCBvcmFuZ2UnLCBoZWlnaHQ6MzAwfX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXMtNSB3LTcwXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cInRleHQtZGFya1wiPk5hbWUgOiA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPiB7dGhpcy5wcm9wcy5wcm9kdWN0Lm5hbWV9IDwvc3Bhbj4gPC9oNj48aHIvPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5EZXNjcmlwdGlvbiA6IDxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+e3RoaXMucHJvcHMucHJvZHVjdC5kZXNjcmlwdGlvbn08L3NwYW4+PC9oNj48aHIvPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5DYXRlZ29yeSA6IDxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+IHt0aGlzLnByb3BzLnByb2R1Y3QuY2F0ZWdvcnl9PC9zcGFuPjwvaDY+PGhyLz5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwidGV4dC1kYXJrXCI+IFByaWNlIDogPHNwYW4gY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj4ge3RoaXMucHJvcHMucHJvZHVjdC5wcmljZX0gJDwvc3Bhbj48L2g2Pjxoci8+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cInRleHQtZGFya1wiPkRpc2NvdW50IDogPHNwYW4gY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj57dGhpcy5wcm9wcy5wcm9kdWN0LnBlcmNlbnRhZ2V9ICU8L3NwYW4+IDwvaDY+PGhyLz5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwidGV4dC1kYXJrXCI+IFNob3AgOiA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPiB7dGhpcy5wcm9wcy5wcm9kdWN0LnNob3AubmFtZX0gPC9zcGFuPjwvaDY+PGhyLz5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwidGV4dC1kYXJrXCI+IFNob3AgTG9jYXRpb24gOiA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPiB7dGhpcy5wcm9wcy5wcm9kdWN0LnNob3AubG9jYXRpb259PC9zcGFuPjwvaDY+PGhyLz5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwidGV4dC1kYXJrXCI+IFBob25lIE51bWJlciBvZiBTaG9wIDogPHNwYW4gY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj4ge3RoaXMucHJvcHMucHJvZHVjdC5zaG9wLnBob25lTnVtYmVyfSA8L3NwYW4+PC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8Lz5cclxuICAgICAgXHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG5cclxufVxyXG5cclxuLy8gYXNzaWduaW5nIHRoZSBpbml0aWFsIHByb3BzIHRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG5Qcm9kdWN0RGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdDogY3R4LnF1ZXJ5XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIlByb2R1Y3REZXRhaWwiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiLCJwcm9kdWN0IiwiaW1hZ2UiLCJib3JkZXIiLCJoZWlnaHQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInByaWNlIiwicGVyY2VudGFnZSIsInNob3AiLCJsb2NhdGlvbiIsInBob25lTnVtYmVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9