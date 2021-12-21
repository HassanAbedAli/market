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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
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
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
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
            lineNumber: 26,
            columnNumber: 132
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "http://localhost:3000/shops/" + shop.id,
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            class: "material-icons",
            children: "visibility"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 71
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "../manageShopsInProfile.module.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://code.jquery.com/jquery-3.5.1.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        class: "container-xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "table-responsive text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "table-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              class: "table-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                    class: "text-left text-primary",
                    children: ["Manage Your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
                      children: " Shops"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 54
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6 text-right",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#createShopModal",
                    class: "btn btn-success",
                    "data-toggle": "modal",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                      class: "material-icons",
                      children: "\uE147"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 78
                    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Create New Shop"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 117
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
              id: "shops",
              class: "table table-striped table-hover sortable",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Delete"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "View"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 6
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
                children: rows
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 4
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
                  lineNumber: 87,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "name",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                    class: "form-control",
                    name: "description",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "location",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "phoneNumber",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "hidden",
                  name: "userId",
                  value: this.props.userId
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
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
                  lineNumber: 111,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-success",
                  value: "Create"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
                  lineNumber: 124,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "email",
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
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
                  lineNumber: 148,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-info",
                  value: "Save"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
                  lineNumber: 161,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: "Are you sure you want to delete this Shop?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  class: "text-warning",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("small", {
                    children: "This action cannot be undone."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 30
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
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
                  lineNumber: 169,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-danger",
                  value: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
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
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
                        class: "text-muted font-size-sm",
                        children: "Bay Area, San Francisco, CA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 41
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                        class: "btn btn-outline-primary",
                        children: "Upload Photo"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
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
                  }, this)
                }, void 0, false, {
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
                        children: "Full Name"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
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
                        lineNumber: 49,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
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
                        lineNumber: 55,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
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
                        lineNumber: 58,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
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
                        lineNumber: 65,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
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
                        lineNumber: 68,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
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
                        lineNumber: 74,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
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
                        lineNumber: 77,
                        columnNumber: 37
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "col-sm-9 text-secondary",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
                        action: "http://localhost:3000/logout",
                        method: "POST",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                          type: "submit",
                          value: "logout",
                          class: "btn btn-outline-primary"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 45
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 41
                      }, this), "                                    "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ManageShopsInProfile__WEBPACK_IMPORTED_MODULE_2__.default, {
              userId: this.props.userId,
              shops: this.props.shops
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdmlld3MvUHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFHZSxNQUFNRSxvQkFBTixTQUFtQ0Ysd0RBQW5DLENBQWtEO0FBRS9ESSxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBTztBQUNkLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsWUFBWSxFQUFDO0FBREosS0FBYjtBQUdIOztBQUVEQyxFQUFBQSxNQUFNLEdBQUU7QUFFTixVQUFNQyxLQUFLLEdBQUcsS0FBS0osS0FBTCxDQUFXSSxLQUF6QjtBQUNBLFVBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVVDLElBQUksaUJBQ3ZCO0FBQUEsOEJBQ1E7QUFBQSxrQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUixlQUVRO0FBQUEsa0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlIsZUFHUTtBQUFBLGtCQUFLRixJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhSLGVBSVE7QUFBQSwrQkFDQTtBQUFHLGNBQUksRUFBQyxvQkFBUjtBQUE2QixlQUFLLEVBQUMsTUFBbkM7QUFBMEMseUJBQVksT0FBdEQ7QUFBQSxpQ0FBOEQ7QUFBRyxpQkFBSyxFQUFDLGdCQUFUO0FBQTBCLDJCQUFZLFNBQXRDO0FBQWdELGlCQUFLLEVBQUMsTUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKUixlQU9KO0FBQUEsK0JBQ1k7QUFBRyxjQUFJLEVBQUMsa0JBQVI7QUFBMkIsaUJBQU8sRUFBRSxNQUFLLEtBQUtDLFFBQUwsQ0FBYztBQUFDVCxZQUFBQSxZQUFZLEVBQUNLLElBQUksQ0FBQ0s7QUFBbkIsV0FBZCxDQUF6QztBQUFnRixlQUFLLEVBQUMsUUFBdEY7QUFBK0YseUJBQVksT0FBM0c7QUFBQSxpQ0FBbUg7QUFBRyxpQkFBSyxFQUFDLGdCQUFUO0FBQTBCLDJCQUFZLFNBQXRDO0FBQWdELGlCQUFLLEVBQUMsUUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSSxlQVVRO0FBQUEsZ0NBQUk7QUFBRyxjQUFJLEVBQUUsaUNBQStCTCxJQUFJLENBQUNLLEVBQTdDO0FBQUEsdUNBQWtEO0FBQU0saUJBQUssRUFBQyxnQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURTLENBQWI7QUFlQSx3QkFDRTtBQUFBLDhCQUVFLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0E7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFHQTtBQUFNLGFBQUcsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhBLGVBSUE7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKQSxlQUtBO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEEsZUFPQTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEEsZUFRQTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkEsZUFTQTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFnQkU7QUFBSyxhQUFLLEVBQUMsY0FBWDtBQUFBLCtCQUNQO0FBQUssZUFBSyxFQUFDLDhCQUFYO0FBQUEsaUNBQ0M7QUFBSyxpQkFBSyxFQUFDLGVBQVg7QUFBQSxvQ0FDQztBQUFLLG1CQUFLLEVBQUMsYUFBWDtBQUFBLHFDQUNDO0FBQUsscUJBQUssRUFBQyxLQUFYO0FBQUEsd0NBQ0M7QUFBSyx1QkFBSyxFQUFDLGVBQVg7QUFBQSx5Q0FDQztBQUFJLHlCQUFLLEVBQUMsd0JBQVY7QUFBQSw0REFBK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFJQztBQUFLLHVCQUFLLEVBQUMscUJBQVg7QUFBQSx5Q0FDQztBQUFHLHdCQUFJLEVBQUMsa0JBQVI7QUFBMkIseUJBQUssRUFBQyxpQkFBakM7QUFBbUQsbUNBQVksT0FBL0Q7QUFBQSw0Q0FBdUU7QUFBRywyQkFBSyxFQUFDLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUF2RSxvQkFBOEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQVdDO0FBQU8sZ0JBQUUsRUFBQyxPQUFWO0FBQWtCLG1CQUFLLEVBQUMsMENBQXhCO0FBQUEsc0NBQ0M7QUFBQSx1Q0FDQztBQUFBLDBDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRCxlQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpELGVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEQsZUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBWUM7QUFBQSwwQkFDaUJQO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGLGVBaUROO0FBQUssVUFBRSxFQUFDLGlCQUFSO0FBQTBCLGFBQUssRUFBQyxZQUFoQztBQUFBLCtCQUNDO0FBQUssZUFBSyxFQUFDLGNBQVg7QUFBQSxpQ0FDQztBQUFLLGlCQUFLLEVBQUMsZUFBWDtBQUFBLG1DQUNDO0FBQU0sb0JBQU0sRUFBQyw2QkFBYjtBQUEyQyxvQkFBTSxFQUFDLE1BQWxEO0FBQUEsc0NBQ0M7QUFBSyxxQkFBSyxFQUFDLGNBQVg7QUFBQSx3Q0FDQztBQUFJLHVCQUFLLEVBQUMsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUVDO0FBQVEsc0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFLLEVBQUMsT0FBNUI7QUFBb0Msa0NBQWEsT0FBakQ7QUFBeUQsaUNBQVksTUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBS0M7QUFBSyxxQkFBSyxFQUFDLFlBQVg7QUFBQSx3Q0FDQztBQUFLLHVCQUFLLEVBQUMsWUFBWDtBQUFBLDBDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBTyx3QkFBSSxFQUFDLE1BQVo7QUFBbUIseUJBQUssRUFBQyxjQUF6QjtBQUF3Qyx3QkFBSSxFQUFDLE1BQTdDO0FBQW9ELDRCQUFRO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBTWdCO0FBQUssdUJBQUssRUFBQyxZQUFYO0FBQUEsMENBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRGMsZUFFZDtBQUFVLHlCQUFLLEVBQUMsY0FBaEI7QUFBK0Isd0JBQUksRUFBQyxhQUFwQztBQUFrRCw0QkFBUTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFOaEIsZUFVQztBQUFLLHVCQUFLLEVBQUMsWUFBWDtBQUFBLDBDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBTyx3QkFBSSxFQUFDLE1BQVo7QUFBbUIseUJBQUssRUFBQyxjQUF6QjtBQUF3Qyx3QkFBSSxFQUFDLFVBQTdDO0FBQXdELDRCQUFRO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZELGVBY0M7QUFBSyx1QkFBSyxFQUFDLFlBQVg7QUFBQSwwQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxlQUVDO0FBQU8sd0JBQUksRUFBQyxNQUFaO0FBQW1CLHlCQUFLLEVBQUMsY0FBekI7QUFBd0Msd0JBQUksRUFBQyxhQUE3QztBQUEyRCw0QkFBUTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFkRCxlQWtCZ0I7QUFBTyxzQkFBSSxFQUFDLFFBQVo7QUFBcUIsc0JBQUksRUFBQyxRQUExQjtBQUFtQyx1QkFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV2E7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFsQmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRCxlQXlCQztBQUFLLHFCQUFLLEVBQUMsY0FBWDtBQUFBLHdDQUNDO0FBQU8sc0JBQUksRUFBQyxRQUFaO0FBQXFCLHVCQUFLLEVBQUMsaUJBQTNCO0FBQTZDLGtDQUFhLE9BQTFEO0FBQWtFLHVCQUFLLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUVDO0FBQU8sc0JBQUksRUFBQyxRQUFaO0FBQXFCLHVCQUFLLEVBQUMsaUJBQTNCO0FBQTZDLHVCQUFLLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpETSxlQXNGTjtBQUFLLFVBQUUsRUFBQyxtQkFBUjtBQUE0QixhQUFLLEVBQUMsWUFBbEM7QUFBQSwrQkFDQztBQUFLLGVBQUssRUFBQyxjQUFYO0FBQUEsaUNBQ0M7QUFBSyxpQkFBSyxFQUFDLGVBQVg7QUFBQSxtQ0FDQztBQUFBLHNDQUNDO0FBQUsscUJBQUssRUFBQyxjQUFYO0FBQUEsd0NBQ0M7QUFBSSx1QkFBSyxFQUFDLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBSyxFQUFDLE9BQTVCO0FBQW9DLGtDQUFhLE9BQWpEO0FBQXlELGlDQUFZLE1BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUtDO0FBQUsscUJBQUssRUFBQyxZQUFYO0FBQUEsd0NBQ0M7QUFBSyx1QkFBSyxFQUFDLFlBQVg7QUFBQSwwQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxlQUVDO0FBQU8sd0JBQUksRUFBQyxNQUFaO0FBQW1CLHlCQUFLLEVBQUMsY0FBekI7QUFBd0MsNEJBQVE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFNZ0I7QUFBSyx1QkFBSyxFQUFDLFlBQVg7QUFBQSwwQ0FDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFEYyxlQUVkO0FBQVUseUJBQUssRUFBQyxjQUFoQjtBQUErQiw0QkFBUTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFOaEIsZUFXQztBQUFLLHVCQUFLLEVBQUMsWUFBWDtBQUFBLDBDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBTyx3QkFBSSxFQUFDLE9BQVo7QUFBb0IseUJBQUssRUFBQyxjQUExQjtBQUF5Qyw0QkFBUTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFYRCxlQWVDO0FBQUssdUJBQUssRUFBQyxZQUFYO0FBQUEsMENBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREQsZUFFQztBQUFPLHdCQUFJLEVBQUMsTUFBWjtBQUFtQix5QkFBSyxFQUFDLGNBQXpCO0FBQXdDLDRCQUFRO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRCxlQXlCQztBQUFLLHFCQUFLLEVBQUMsY0FBWDtBQUFBLHdDQUNDO0FBQU8sc0JBQUksRUFBQyxRQUFaO0FBQXFCLHVCQUFLLEVBQUMsaUJBQTNCO0FBQTZDLGtDQUFhLE9BQTFEO0FBQWtFLHVCQUFLLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUVDO0FBQU8sc0JBQUksRUFBQyxRQUFaO0FBQXFCLHVCQUFLLEVBQUMsY0FBM0I7QUFBMEMsdUJBQUssRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEZNLGVBMkhOO0FBQUssVUFBRSxFQUFDLGlCQUFSO0FBQTBCLGFBQUssRUFBQyxZQUFoQztBQUFBLCtCQUNDO0FBQUssZUFBSyxFQUFDLGNBQVg7QUFBQSxpQ0FDQztBQUFLLGlCQUFLLEVBQUMsZUFBWDtBQUFBLG1DQUNDO0FBQU0sb0JBQU0sRUFBRSx3Q0FBc0MsS0FBS1osS0FBTCxDQUFXQyxZQUEvRDtBQUE2RSxvQkFBTSxFQUFDLE1BQXBGO0FBQUEsc0NBQ0M7QUFBSyxxQkFBSyxFQUFDLGNBQVg7QUFBQSx3Q0FDQztBQUFJLHVCQUFLLEVBQUMsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUVDO0FBQVEsc0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFLLEVBQUMsT0FBNUI7QUFBb0Msa0NBQWEsT0FBakQ7QUFBeUQsaUNBQVksTUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBS0M7QUFBSyxxQkFBSyxFQUFDLFlBQVg7QUFBQSx3Q0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUVDO0FBQUcsdUJBQUssRUFBQyxjQUFUO0FBQUEseUNBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELGVBU0M7QUFBSyxxQkFBSyxFQUFDLGNBQVg7QUFBQSx3Q0FDQztBQUFPLHNCQUFJLEVBQUMsUUFBWjtBQUFxQix1QkFBSyxFQUFDLGlCQUEzQjtBQUE2QyxrQ0FBYSxPQUExRDtBQUFrRSx1QkFBSyxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFPLHNCQUFJLEVBQUMsUUFBWjtBQUFxQix1QkFBSyxFQUFDLGdCQUEzQjtBQUE0Qyx1QkFBSyxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNITTtBQUFBLG9CQURGO0FBMkpEOztBQXRMOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKakU7QUFDQTtBQUNBOzs7QUFFZSxNQUFNWSxPQUFOLFNBQXNCbkIsd0RBQXRCLENBQXFDO0FBRWhESSxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBTztBQUVkLFFBQUllLEdBQUcsR0FBRyxNQUFWO0FBQ0EsVUFBTWYsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0g7O0FBRURFLEVBQUFBLE1BQU0sR0FBRTtBQUNKLHdCQUNJO0FBQUEsOEJBQ0EsOERBQUMsa0RBQUQ7QUFBQSxnQ0FDSTtBQUFNLGFBQUcsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUMsMEVBQTVCO0FBQXVHLG1CQUFTLEVBQUMseUVBQWpIO0FBQTJMLHFCQUFXLEVBQUM7QUFBdk07QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUtJO0FBQUssYUFBSyxFQUFDLFdBQVg7QUFBQSwrQkFDSjtBQUFLLGVBQUssRUFBQyxXQUFYO0FBQUEsa0NBQ0k7QUFBSyxpQkFBSyxFQUFDLEtBQVg7QUFBQSxvQ0FDSTtBQUFLLG1CQUFLLEVBQUMsVUFBWDtBQUFBLHFDQUNJO0FBQUsscUJBQUssRUFBQyxNQUFYO0FBQUEsdUNBQ0k7QUFBSyx1QkFBSyxFQUFDLFdBQVg7QUFBQSx5Q0FDSTtBQUFLLHlCQUFLLEVBQUMsbURBQVg7QUFBQSw0Q0FDSTtBQUFLLHlCQUFHLEVBQUMsb0RBQVQ7QUFBOEQseUJBQUcsRUFBQyxPQUFsRTtBQUEwRSwyQkFBSyxFQUFDLCtCQUFoRjtBQUFnSCwyQkFBSyxFQUFDO0FBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFFSTtBQUFLLDJCQUFLLEVBQUMsTUFBWDtBQUFBLDhDQUNJO0FBQUEsbUNBQUssS0FBS0gsS0FBTCxDQUFXZ0IsU0FBWCxHQUF1QixJQUE1QixFQUFrQyxLQUFLaEIsS0FBTCxDQUFXaUIsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLGVBRUk7QUFBRyw2QkFBSyxFQUFDLHlCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZKLGVBR0k7QUFBUSw2QkFBSyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFlSTtBQUFLLG1CQUFLLEVBQUMsVUFBWDtBQUFBLHFDQUNJO0FBQUsscUJBQUssRUFBQyxNQUFYO0FBQUEsdUNBQ0k7QUFBSyx1QkFBSyxFQUFDLFdBQVg7QUFBQSwwQ0FJSTtBQUFLLHlCQUFLLEVBQUMsVUFBWDtBQUFBLDRDQUNJO0FBQUssMkJBQUssRUFBQyxVQUFYO0FBQUEsNkNBQ0k7QUFBSSw2QkFBSyxFQUFDLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBSUk7QUFBSywyQkFBSyxFQUFDLHlCQUFYO0FBQUEsNkNBQ0E7QUFBTyw0QkFBSSxFQUFDLE1BQVo7QUFBbUIsNkJBQUssRUFBQyxjQUF6QjtBQUF3Qyw2QkFBSyxFQUFFLEtBQUtqQixLQUFMLENBQVdnQixTQUFYLEdBQXFCLEdBQXJCLEdBQXlCLEtBQUtoQixLQUFMLENBQVdpQixRQUFuRjtBQUE2RixnQ0FBUTtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkosZUFhSTtBQUFLLHlCQUFLLEVBQUMsVUFBWDtBQUFBLDRDQUNJO0FBQUssMkJBQUssRUFBQyxVQUFYO0FBQUEsNkNBQ0k7QUFBSSw2QkFBSyxFQUFDLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBSUk7QUFBSywyQkFBSyxFQUFDLHlCQUFYO0FBQUEsNkNBQ0E7QUFBTyw0QkFBSSxFQUFDLE1BQVo7QUFBbUIsNkJBQUssRUFBQyxjQUF6QjtBQUF3Qyw2QkFBSyxFQUFFLEtBQUtqQixLQUFMLENBQVdrQixRQUExRDtBQUFvRSxnQ0FBUTtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBYkosZUF1Qkk7QUFBSyx5QkFBSyxFQUFDLFVBQVg7QUFBQSw0Q0FDSTtBQUFLLDJCQUFLLEVBQUMsVUFBWDtBQUFBLDZDQUNJO0FBQUksNkJBQUssRUFBQyxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUlJO0FBQUssMkJBQUssRUFBQyx5QkFBWDtBQUFBLDZDQUNBO0FBQU8sNEJBQUksRUFBQyxNQUFaO0FBQW1CLDZCQUFLLEVBQUMsY0FBekI7QUFBd0MsNkJBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXbUIsS0FBMUQ7QUFBaUUsZ0NBQVE7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXZCSixlQWdDSTtBQUFLLHlCQUFLLEVBQUMsVUFBWDtBQUFBLDRDQUNJO0FBQUssMkJBQUssRUFBQyxVQUFYO0FBQUEsNkNBQ0k7QUFBSSw2QkFBSyxFQUFDLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBSUk7QUFBSywyQkFBSyxFQUFDLHlCQUFYO0FBQUEsNkNBQ0E7QUFBTyw0QkFBSSxFQUFDLE1BQVo7QUFBbUIsNkJBQUssRUFBQyxjQUF6QjtBQUF3Qyw2QkFBSyxFQUFFLEtBQUtuQixLQUFMLENBQVdVLFdBQTFEO0FBQXVFLGdDQUFRO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFoQ0osZUF5Q0k7QUFBSyx5QkFBSyxFQUFDLEtBQVg7QUFBQSw0Q0FDSTtBQUFLLDJCQUFLLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBRUk7QUFBSywyQkFBSyxFQUFDLHlCQUFYO0FBQUEsOENBQ0k7QUFBTSw4QkFBTSxFQUFDLDhCQUFiO0FBQTRDLDhCQUFNLEVBQUMsTUFBbkQ7QUFBQSwrQ0FDSTtBQUFPLDhCQUFJLEVBQUMsUUFBWjtBQUFxQiwrQkFBSyxFQUFDLFFBQTNCO0FBQW9DLCtCQUFLLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkF6Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBMEVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUVKLGVBMkVJO0FBQUssaUJBQUssRUFBQyxLQUFYO0FBQUEsbUNBQ0ksOERBQUMsMERBQUQ7QUFBc0Isb0JBQU0sRUFBRSxLQUFLVixLQUFMLENBQVdhLE1BQXpDO0FBQWlELG1CQUFLLEVBQUUsS0FBS2IsS0FBTCxDQUFXSTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUEsb0JBREo7QUEwRkg7O0FBcEcrQzs7QUF1R3BEVSxPQUFPLENBQUNNLGVBQVIsR0FBMkJDLEdBQUQsSUFBUztBQUMvQixTQUFPO0FBQ0xILElBQUFBLFFBQVEsRUFBR0csR0FBRyxDQUFDQyxLQUFKLENBQVVKLFFBRGhCO0FBRUxGLElBQUFBLFNBQVMsRUFBRUssR0FBRyxDQUFDQyxLQUFKLENBQVVDLFNBRmhCO0FBR0xOLElBQUFBLFFBQVEsRUFBR0ksR0FBRyxDQUFDQyxLQUFKLENBQVVFLFFBSGhCO0FBSUxMLElBQUFBLEtBQUssRUFBR0UsR0FBRyxDQUFDQyxLQUFKLENBQVVILEtBSmI7QUFLTFQsSUFBQUEsV0FBVyxFQUFHVyxHQUFHLENBQUNDLEtBQUosQ0FBVVosV0FMbkI7QUFNTEcsSUFBQUEsTUFBTSxFQUFDUSxHQUFHLENBQUNDLEtBQUosQ0FBVVYsRUFOWjtBQU9MUixJQUFBQSxLQUFLLEVBQUNpQixHQUFHLENBQUNDLEtBQUosQ0FBVWxCO0FBUFgsR0FBUDtBQVNELENBVkg7Ozs7Ozs7Ozs7QUMzR0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvTWFuYWdlU2hvcHNJblByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9tYXJrZXQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21hcmtldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZVNob3BzSW5Qcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIHRvRGVsZXRlU2hvcDowXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuXHJcbiAgICBjb25zdCBzaG9wcyA9IHRoaXMucHJvcHMuc2hvcHM7XHJcbiAgICBjb25zdCByb3dzID0gc2hvcHMubWFwKHNob3AgPT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Nob3AubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzaG9wLmxvY2F0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Nob3AucGhvbmVOdW1iZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjZWRpdEVtcGxveWVlTW9kYWxcIiBjbGFzcz1cImVkaXRcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdFwiPiYjeEUyNTQ7PC9pPjwvYT5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdDx0ZD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjZGVsZXRlU2hvcE1vZGFsXCIgb25DbGljaz17KCk9PiB0aGlzLnNldFN0YXRlKHt0b0RlbGV0ZVNob3A6c2hvcC5pZH0pfSBjbGFzcz1cImRlbGV0ZVwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJEZWxldGVcIj4mI3hFODcyOzwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9e1wiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Nob3BzL1wiK3Nob3AuaWR9PiA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+dmlzaWJpbGl0eTwvc3Bhbj4gPC9hPiA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98VmFyZWxhK1JvdW5kXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL21hbmFnZVNob3BzSW5Qcm9maWxlLm1vZHVsZS5jc3NcIi8+IFxyXG5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIteGxcIj5cclxuXHQ8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZSB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLXRpdGxlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS02IG1iLTNcIj5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwidGV4dC1sZWZ0IHRleHQtcHJpbWFyeVwiPk1hbmFnZSBZb3VyIDxiPiBTaG9wczwvYj48L2gyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI2NyZWF0ZVNob3BNb2RhbFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4mI3hFMTQ3OzwvaT4gPHNwYW4+Q3JlYXRlIE5ldyBTaG9wPC9zcGFuPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHRhYmxlIGlkPVwic2hvcHNcIiBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXIgc29ydGFibGVcIj5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkFkZHJlc3M8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UGhvbmU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+RWRpdDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5EZWxldGU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+VmlldzwvdGg+XHJcblxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cm93c31cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+ICAgICAgICBcclxuPC9kaXY+XHJcblxyXG48ZGl2IGlkPVwiY3JlYXRlU2hvcE1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0PGZvcm0gYWN0aW9uPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Nob3BzXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+Q3JlYXRlIGEgTmV3IFNob3A8L2g0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibG9jYXRpb25cIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5QaG9uZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBob25lTnVtYmVyXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlcklkXCIgdmFsdWU9e3RoaXMucHJvcHMudXNlcklkfS8+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHZhbHVlPVwiQ3JlYXRlXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGlkPVwiZWRpdEVtcGxveWVlTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkVkaXQgRW1wbG95ZWU8L2g0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5QaG9uZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiIHZhbHVlPVwiU2F2ZVwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBpZD1cImRlbGV0ZVNob3BNb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdDxmb3JtIGFjdGlvbj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2hvcHMvZGVsZXRlL1wiK3RoaXMuc3RhdGUudG9EZWxldGVTaG9wfSBtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5EZWxldGUgU2hvcDwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgU2hvcD88L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtd2FybmluZ1wiPjxzbWFsbD5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLjwvc21hbGw+PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgdmFsdWU9XCJEZWxldGVcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTWFuYWdlU2hvcHNJblByb2ZpbGUgZnJvbSAnLi9NYW5hZ2VTaG9wc0luUHJvZmlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHJcbiAgICAgICAgdmFyIHN0ciA9IFwibm9vYlwiXHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTsgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPiBcclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vcHJvZmlsZS5tb2R1bGUuY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYm9vdGRleS5jb20vaW1nL0NvbnRlbnQvYXZhdGFyL2F2YXRhcjYucG5nXCIgYWx0PVwiQWRtaW5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIHAtMSBiZy1wcmltYXJ5XCIgd2lkdGg9XCIxMTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMuZmlyc3RuYW1lICsgXCIgIFwifXt0aGlzLnByb3BzLmxhc3RuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZm9udC1zaXplLXNtXCI+QmF5IEFyZWEsIFNhbiBGcmFuY2lzY28sIENBPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCI+VXBsb2FkIFBob3RvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj5GdWxsIE5hbWU8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMucHJvcHMuZmlyc3RuYW1lK1wiIFwiK3RoaXMucHJvcHMubGFzdG5hbWV9IHJlYWRvbmx5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+VXNlcm5hbWU8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMucHJvcHMudXNlcm5hbWV9IHJlYWRvbmx5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItMFwiPkVtYWlsPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnByb3BzLmVtYWlsfSByZWFkb25seSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItMFwiPlBob25lPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnByb3BzLnBob25lTnVtYmVyfSByZWFkb25seSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9nb3V0XCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJsb2dvdXRcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFuYWdlU2hvcHNJblByb2ZpbGUgdXNlcklkPXt0aGlzLnByb3BzLnVzZXJJZH0gc2hvcHM9e3RoaXMucHJvcHMuc2hvcHN9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VybmFtZSA6IGN0eC5xdWVyeS51c2VybmFtZSxcclxuICAgICAgZmlyc3RuYW1lIDpjdHgucXVlcnkuZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0bmFtZSA6IGN0eC5xdWVyeS5sYXN0TmFtZSxcclxuICAgICAgZW1haWwgOiBjdHgucXVlcnkuZW1haWwsXHJcbiAgICAgIHBob25lTnVtYmVyIDogY3R4LnF1ZXJ5LnBob25lTnVtYmVyLFxyXG4gICAgICB1c2VySWQ6Y3R4LnF1ZXJ5LmlkLFxyXG4gICAgICBzaG9wczpjdHgucXVlcnkuc2hvcHNcclxuICAgIH1cclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiTWFuYWdlU2hvcHNJblByb2ZpbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0b0RlbGV0ZVNob3AiLCJyZW5kZXIiLCJzaG9wcyIsInJvd3MiLCJtYXAiLCJzaG9wIiwibmFtZSIsImxvY2F0aW9uIiwicGhvbmVOdW1iZXIiLCJzZXRTdGF0ZSIsImlkIiwidXNlcklkIiwiUHJvZmlsZSIsInN0ciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9