"use strict";
self["webpackHotUpdate_N_E"]("pages/views/Profile",{

/***/ "./pages/views/ManageShopsInProfile.js":
/*!*********************************************!*\
  !*** ./pages/views/ManageShopsInProfile.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ManageShopsInProfile; }
/* harmony export */ });
/* harmony import */ var C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\ManageShopsInProfile.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var ManageShopsInProfile = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ManageShopsInProfile, _React$Component);

  var _super = _createSuper(ManageShopsInProfile);

  function ManageShopsInProfile(props) {
    var _this;

    (0,C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ManageShopsInProfile);

    _this = _super.call(this, props);
    _this.state = {
      toDeleteShop: 0
    };
    return _this;
  }

  (0,C_Users_HES_Desktop_Capstone_Project_Code_FINAL_marketplace_market_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ManageShopsInProfile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var shops = this.props.shops;
      var rows = shops.map(function (shop) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
            children: shop.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
            children: shop.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
            children: shop.phoneNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
              href: "#editEmployeeModal",
              "class": "edit",
              "data-toggle": "modal",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
                "class": "material-icons",
                "data-toggle": "tooltip",
                title: "Edit",
                children: "\uE254"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 79
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 17
            }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
              href: "#deleteShopModal",
              onClick: function onClick() {
                return _this2.setState({
                  toDeleteShop: shop.id
                });
              },
              "class": "delete",
              "data-toggle": "modal",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
                "class": "material-icons",
                "data-toggle": "tooltip",
                title: "Delete",
                children: "\uE872"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 132
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
              href: "http://localhost:3000/shops/" + shop.id,
              children: " Go to the Shop Page "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 21
            }, _this2), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 17
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, _this2);
      });
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
            rel: "stylesheet",
            href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/icon?family=Material+Icons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
            rel: "stylesheet",
            href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
            rel: "stylesheet",
            href: "../manageShopsInProfile.module.css"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("script", {
            src: "https://code.jquery.com/jquery-3.5.1.min.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("script", {
            src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("script", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          "class": "container-xl",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            "class": "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              "class": "table-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                "class": "table-title",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "col-sm-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
                      children: ["Manage Your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "col-sm-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                      href: "#createShopModal",
                      "class": "btn btn-success",
                      "data-toggle": "modal",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
                        "class": "material-icons",
                        children: "\uE147"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 78
                      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("table", {
                "class": "table table-striped table-hover",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                      children: "Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                      children: "Phone"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          id: "createShopModal",
          "class": "modal fade",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            "class": "modal-dialog",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              "class": "modal-content",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
                action: "http://localhost:3000/shops",
                method: "POST",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-header",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
                    "class": "modal-title",
                    children: "Create a New Shop"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                    type: "button",
                    "class": "close",
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      type: "text",
                      "class": "form-control",
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Description"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("textarea", {
                      "class": "form-control",
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      type: "text",
                      "class": "form-control",
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Phone"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      type: "text",
                      "class": "form-control",
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-footer",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "button",
                    "class": "btn btn-default",
                    "data-dismiss": "modal",
                    value: "Cancel"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "submit",
                    "class": "btn btn-success",
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          id: "editEmployeeModal",
          "class": "modal fade",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            "class": "modal-dialog",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              "class": "modal-content",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-header",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
                    "class": "modal-title",
                    children: "Edit Employee"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                    type: "button",
                    "class": "close",
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      type: "text",
                      "class": "form-control",
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Description"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("textarea", {
                      "class": "form-control",
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      type: "email",
                      "class": "form-control",
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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    "class": "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                      children: "Phone"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      type: "text",
                      "class": "form-control",
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-footer",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "button",
                    "class": "btn btn-default",
                    "data-dismiss": "modal",
                    value: "Cancel"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "submit",
                    "class": "btn btn-info",
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          id: "deleteShopModal",
          "class": "modal fade",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            "class": "modal-dialog",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              "class": "modal-content",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
                action: "http://localhost:3000/shops/delete/" + this.state.toDeleteShop,
                method: "POST",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-header",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
                    "class": "modal-title",
                    children: "Delete Shop"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                    type: "button",
                    "class": "close",
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
                    children: "Are you sure you want to delete this Shop?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
                    "class": "text-warning",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("small", {
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  "class": "modal-footer",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "button",
                    "class": "btn btn-default",
                    "data-dismiss": "modal",
                    value: "Cancel"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "submit",
                    "class": "btn btn-danger",
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
  }]);

  return ManageShopsInProfile;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlld3MvUHJvZmlsZS44ZjdhZmRmYzI2YjY5MWMwYjFkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7SUFHcUJFOzs7OztBQUVuQixnQ0FBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFlBQVksRUFBQztBQURKLEtBQWI7QUFGYztBQUtqQjs7OztXQUVELGtCQUFRO0FBQUE7O0FBRU4sVUFBTUMsS0FBSyxHQUFHLEtBQUtILEtBQUwsQ0FBV0csS0FBekI7QUFDQSxVQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSw0QkFDdkI7QUFBQSxrQ0FDUTtBQUFBLHNCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUixlQUVRO0FBQUEsc0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZSLGVBR1E7QUFBQSxzQkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSFIsZUFJUTtBQUFBLG9DQUNBO0FBQUcsa0JBQUksRUFBQyxvQkFBUjtBQUE2Qix1QkFBTSxNQUFuQztBQUEwQyw2QkFBWSxPQUF0RDtBQUFBLHFDQUE4RDtBQUFHLHlCQUFNLGdCQUFUO0FBQTBCLCtCQUFZLFNBQXRDO0FBQWdELHFCQUFLLEVBQUMsTUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxlQUVBO0FBQUcsa0JBQUksRUFBQyxrQkFBUjtBQUEyQixxQkFBTyxFQUFFO0FBQUEsdUJBQUssTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ1Isa0JBQUFBLFlBQVksRUFBQ0ks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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlld3MvTWFuYWdlU2hvcHNJblByb2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlU2hvcHNJblByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgdG9EZWxldGVTaG9wOjBcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cclxuICAgIGNvbnN0IHNob3BzID0gdGhpcy5wcm9wcy5zaG9wcztcclxuICAgIGNvbnN0IHJvd3MgPSBzaG9wcy5tYXAoc2hvcCA9PlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57c2hvcC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Nob3AubG9jYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c2hvcC5waG9uZU51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNlZGl0RW1wbG95ZWVNb2RhbFwiIGNsYXNzPVwiZWRpdFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJFZGl0XCI+JiN4RTI1NDs8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNkZWxldGVTaG9wTW9kYWxcIiBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvRGVsZXRlU2hvcDpzaG9wLmlkfSl9IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkRlbGV0ZVwiPiYjeEU4NzI7PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2hvcHMvXCIrc2hvcC5pZH0+IEdvIHRvIHRoZSBTaG9wIFBhZ2UgPC9hPiA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98VmFyZWxhK1JvdW5kXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL21hbmFnZVNob3BzSW5Qcm9maWxlLm1vZHVsZS5jc3NcIi8+IFxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14bFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtdGl0bGVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0PGgyPk1hbmFnZSBZb3VyIDxiPiBTaG9wczwvYj48L2gyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNjcmVhdGVTaG9wTW9kYWxcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+JiN4RTE0Nzs8L2k+IDxzcGFuPkNyZWF0ZSBOZXcgU2hvcDwvc3Bhbj48L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkFkZHJlc3M8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UGhvbmU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj4gICAgICAgIFxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCJjcmVhdGVTaG9wTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2hvcHNcIiBtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5DcmVhdGUgYSBOZXcgU2hvcDwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJsb2NhdGlvblwiIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlBob25lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VySWRcIiB2YWx1ZT17dGhpcy5wcm9wcy51c2VySWR9Lz5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdmFsdWU9XCJDcmVhdGVcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCJlZGl0RW1wbG95ZWVNb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RWRpdCBFbXBsb3llZTwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+QWRkcmVzczwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlBob25lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgdmFsdWU9XCJTYXZlXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGlkPVwiZGVsZXRlU2hvcE1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0PGZvcm0gYWN0aW9uPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaG9wcy9kZWxldGUvXCIrdGhpcy5zdGF0ZS50b0RlbGV0ZVNob3B9IG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkRlbGV0ZSBTaG9wPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBTaG9wPzwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+PHNtYWxsPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9zbWFsbD48L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2YWx1ZT1cIkRlbGV0ZVwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiTWFuYWdlU2hvcHNJblByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwidG9EZWxldGVTaG9wIiwic2hvcHMiLCJyb3dzIiwibWFwIiwic2hvcCIsIm5hbWUiLCJsb2NhdGlvbiIsInBob25lTnVtYmVyIiwic2V0U3RhdGUiLCJpZCIsInVzZXJJZCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=