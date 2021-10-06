"use strict";
(() => {
var exports = {};
exports.id = "pages/views/Profile";
exports.ids = ["pages/views/Profile"];
exports.modules = {

/***/ "./pages/views/ManageShopsInProfile.js":
/*!*********************************************!*\
  !*** ./pages/views/ManageShopsInProfile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageShopsInProfile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\ManageShopsInProfile.js";




class ManageShopsInProfile extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      toDeleteShop: 0
    };
  }

  render() {
    const shops = this.props.shops;
    const rows = shops.map(shop => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: shop.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: shop.location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: shop.phoneNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "#editEmployeeModal",
          class: "edit",
          "data-toggle": "modal",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
            class: "material-icons",
            "data-toggle": "tooltip",
            title: "Edit",
            children: "\uE254"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 79
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "#deleteShopModal",
          onClick: () => this.setState({
            toDeleteShop: shop.id
          }),
          class: "delete",
          "data-toggle": "modal",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
            class: "material-icons",
            "data-toggle": "tooltip",
            title: "Delete",
            children: "\uE872"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 132
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "http://localhost:3000/shops/" + shop.id,
          children: " Go to the Shop Page "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this));
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "../manageShopsInProfile.module.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://code.jquery.com/jquery-3.5.1.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        class: "container-xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "table-responsive",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "table-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              class: "table-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                    children: ["Manage Your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
                      children: " Shops"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#createShopModal",
                    class: "btn btn-success",
                    "data-toggle": "modal",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                      class: "material-icons",
                      children: "\uE147"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 78
                    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Create New Shop"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 117
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
              class: "table table-striped table-hover",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Actions"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 6
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
                children: rows
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 4
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "createShopModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: "http://localhost:3000/shops",
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Create a New Shop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "name",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                    class: "form-control",
                    name: "description",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "location",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "phoneNumber",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "hidden",
                  name: "userId",
                  value: this.props.userId
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "button",
                  class: "btn btn-default",
                  "data-dismiss": "modal",
                  value: "Cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-success",
                  value: "Create"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "editEmployeeModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Edit Employee"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "email",
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "button",
                  class: "btn btn-default",
                  "data-dismiss": "modal",
                  value: "Cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-info",
                  value: "Save"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "deleteShopModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: "http://localhost:3000/shops/delete/" + this.state.toDeleteShop,
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Delete Shop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: "Are you sure you want to delete this Shop?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  class: "text-warning",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("small", {
                    children: "This action cannot be undone."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 30
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "button",
                  class: "btn btn-default",
                  "data-dismiss": "modal",
                  value: "Cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-danger",
                  value: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 1
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "./pages/views/Profile.js":
/*!********************************!*\
  !*** ./pages/views/Profile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ManageShopsInProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageShopsInProfile */ "./pages/views/ManageShopsInProfile.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\Profile.js";





class Profile extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    var str = "noob";
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "../profile.module.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
          integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "main-body",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "col-lg-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "card",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  class: "card-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "d-flex flex-column align-items-center text-center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: "https://bootdey.com/img/Content/avatar/avatar6.png",
                      alt: "Admin",
                      class: "rounded-circle p-1 bg-primary",
                      width: "110"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "mt-3",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
                        children: [this.props.firstname + "  ", this.props.lastname]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 41
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                        class: "text-secondary mb-1",
                        children: "Full Stack Developer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 41
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                        class: "text-muted font-size-sm",
                        children: "Bay Area, San Francisco, CA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 41
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                        class: "btn btn-primary",
                        children: "Follow"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 41
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                        class: "btn btn-outline-primary",
                        children: "Message"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 34,
                        columnNumber: 41
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                        class: "btn btn-outline-primary",
                        children: "Upload Photo + About"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 35,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {
                    class: "my-4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 33
                  }, this), "//put here the fck"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "col-lg-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "card",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  class: "card-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "row mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                        class: "mb-0",
                        children: "User ID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-9 text-secondary",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "text",
                        class: "form-control",
                        value: this.props.userId,
                        readonly: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "row mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                        class: "mb-0",
                        children: "Full Name"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-9 text-secondary",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "text",
                        class: "form-control",
                        value: this.props.firstname + " " + this.props.lastname,
                        readonly: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "row mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                        class: "mb-0",
                        children: "Username"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-9 text-secondary",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "text",
                        class: "form-control",
                        value: this.props.username,
                        readonly: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "row mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                        class: "mb-0",
                        children: "Email"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-9 text-secondary",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "text",
                        class: "form-control",
                        value: this.props.email,
                        readonly: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "row mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                        class: "mb-0",
                        children: "Phone"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-9 text-secondary",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "text",
                        class: "form-control",
                        value: this.props.phoneNumber,
                        readonly: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-9 text-secondary",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "button",
                        class: "btn btn-primary px-4",
                        value: "Save Changes",
                        readonly: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ManageShopsInProfile__WEBPACK_IMPORTED_MODULE_2__.default, {
              userId: this.props.userId,
              shops: this.props.shops
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true);
  }

}

Profile.getInitialProps = ctx => {
  return {
    username: ctx.query.username,
    firstname: ctx.query.firstName,
    lastname: ctx.query.lastName,
    email: ctx.query.email,
    phoneNumber: ctx.query.phoneNumber,
    userId: ctx.query.id,
    shops: ctx.query.shops
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
var __webpack_exports__ = (__webpack_exec__("./pages/views/Profile.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxTQUZoQjtBQUdMTixJQUFBQSxRQUFRLEVBQUdJLEdBQUcsQ0FBQ0MsS0FBSixDQUFVRSxRQUhoQjtBQUlMTCxJQUFBQSxLQUFLLEVBQUdFLEdBQUcsQ0FBQ0MsS0FBSixDQUFVSCxLQUpiO0FBS0xULElBQUFBLFdBQVcsRUFBR1csR0FBRyxDQUFDQyxLQUFKLENBQVVaLFdBTG5CO0FBTUxHLElBQUFBLE1BQU0sRUFBQ1EsR0FBRyxDQUFDQyxLQUFKLENBQVVWLEVBTlo7QUFPTFIsSUFBQUEsS0FBSyxFQUFDaUIsR0FBRyxDQUFDQyxLQUFKLENBQVVsQjtBQVBYLEdBQVA7QUFTRCxDQVZIOzs7Ozs7Ozs7O0FDdkhBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldC8uL3BhZ2VzL3ZpZXdzL01hbmFnZVNob3BzSW5Qcm9maWxlLmpzIiwid2VicGFjazovL21hcmtldC8uL3BhZ2VzL3ZpZXdzL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VTaG9wc0luUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICB0b0RlbGV0ZVNob3A6MFxyXG4gICAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcblxyXG4gICAgY29uc3Qgc2hvcHMgPSB0aGlzLnByb3BzLnNob3BzO1xyXG4gICAgY29uc3Qgcm93cyA9IHNob3BzLm1hcChzaG9wID0+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzaG9wLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c2hvcC5sb2NhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzaG9wLnBob25lTnVtYmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2VkaXRFbXBsb3llZU1vZGFsXCIgY2xhc3M9XCJlZGl0XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXRcIj4mI3hFMjU0OzwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2RlbGV0ZVNob3BNb2RhbFwiIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9EZWxldGVTaG9wOnNob3AuaWR9KX0gY2xhc3M9XCJkZWxldGVcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRGVsZXRlXCI+JiN4RTg3Mjs8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaG9wcy9cIitzaG9wLmlkfT4gR28gdG8gdGhlIFNob3AgUGFnZSA8L2E+IDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xWYXJlbGErUm91bmRcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vbWFuYWdlU2hvcHNJblByb2ZpbGUubW9kdWxlLmNzc1wiLz4gXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhsXCI+XHJcblx0PGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS10aXRsZVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+TWFuYWdlIFlvdXIgPGI+IFNob3BzPC9iPjwvaDI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI2NyZWF0ZVNob3BNb2RhbFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4mI3hFMTQ3OzwvaT4gPHNwYW4+Q3JlYXRlIE5ldyBTaG9wPC9zcGFuPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QWRkcmVzczwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QaG9uZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5BY3Rpb25zPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvd3N9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PiAgICAgICAgXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBpZD1cImNyZWF0ZVNob3BNb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdDxmb3JtIGFjdGlvbj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaG9wc1wiIG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkNyZWF0ZSBhIE5ldyBTaG9wPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+QWRkcmVzczwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImxvY2F0aW9uXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJJZFwiIHZhbHVlPXt0aGlzLnByb3BzLnVzZXJJZH0vPlx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB2YWx1ZT1cIkNyZWF0ZVwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBpZD1cImVkaXRFbXBsb3llZU1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5FZGl0IEVtcGxveWVlPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIiB2YWx1ZT1cIlNhdmVcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCJkZWxldGVTaG9wTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249e1wiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Nob3BzL2RlbGV0ZS9cIit0aGlzLnN0YXRlLnRvRGVsZXRlU2hvcH0gbWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RGVsZXRlIFNob3A8L2g0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFNob3A/PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj48c21hbGw+VGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS48L3NtYWxsPjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiRGVsZXRlXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE1hbmFnZVNob3BzSW5Qcm9maWxlIGZyb20gJy4vTWFuYWdlU2hvcHNJblByb2ZpbGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblxyXG4gICAgICAgIHZhciBzdHIgPSBcIm5vb2JcIlxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD4gXHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL3Byb2ZpbGUubW9kdWxlLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Jvb3RkZXkuY29tL2ltZy9Db250ZW50L2F2YXRhci9hdmF0YXI2LnBuZ1wiIGFsdD1cIkFkbWluXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBwLTEgYmctcHJpbWFyeVwiIHdpZHRoPVwiMTEwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt0aGlzLnByb3BzLmZpcnN0bmFtZSArIFwiICBcIn17dGhpcy5wcm9wcy5sYXN0bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBtYi0xXCI+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZm9udC1zaXplLXNtXCI+QmF5IEFyZWEsIFNhbiBGcmFuY2lzY28sIENBPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkZvbGxvdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCI+TWVzc2FnZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCI+VXBsb2FkIFBob3RvICsgQWJvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwibXktNFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3B1dCBoZXJlIHRoZSBmY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+VXNlciBJRDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5wcm9wcy51c2VySWR9IHJlYWRvbmx5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItMFwiPkZ1bGwgTmFtZTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5wcm9wcy5maXJzdG5hbWUrXCIgXCIrdGhpcy5wcm9wcy5sYXN0bmFtZX0gcmVhZG9ubHkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj5Vc2VybmFtZTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5wcm9wcy51c2VybmFtZX0gcmVhZG9ubHkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+RW1haWw8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMucHJvcHMuZW1haWx9IHJlYWRvbmx5IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+UGhvbmU8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMucHJvcHMucGhvbmVOdW1iZXJ9IHJlYWRvbmx5IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgcHgtNFwiIHZhbHVlPVwiU2F2ZSBDaGFuZ2VzXCIgcmVhZG9ubHkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYW5hZ2VTaG9wc0luUHJvZmlsZSB1c2VySWQ9e3RoaXMucHJvcHMudXNlcklkfSBzaG9wcz17dGhpcy5wcm9wcy5zaG9wc30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5Qcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJuYW1lIDogY3R4LnF1ZXJ5LnVzZXJuYW1lLFxyXG4gICAgICBmaXJzdG5hbWUgOmN0eC5xdWVyeS5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3RuYW1lIDogY3R4LnF1ZXJ5Lmxhc3ROYW1lLFxyXG4gICAgICBlbWFpbCA6IGN0eC5xdWVyeS5lbWFpbCxcclxuICAgICAgcGhvbmVOdW1iZXIgOiBjdHgucXVlcnkucGhvbmVOdW1iZXIsXHJcbiAgICAgIHVzZXJJZDpjdHgucXVlcnkuaWQsXHJcbiAgICAgIHNob3BzOmN0eC5xdWVyeS5zaG9wc1xyXG4gICAgfVxyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJNYW5hZ2VTaG9wc0luUHJvZmlsZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRvRGVsZXRlU2hvcCIsInJlbmRlciIsInNob3BzIiwicm93cyIsIm1hcCIsInNob3AiLCJuYW1lIiwibG9jYXRpb24iLCJwaG9uZU51bWJlciIsInNldFN0YXRlIiwiaWQiLCJ1c2VySWQiLCJQcm9maWxlIiwic3RyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=