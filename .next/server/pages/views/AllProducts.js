"use strict";
(() => {
var exports = {};
exports.id = "pages/views/AllProducts";
exports.ids = ["pages/views/AllProducts"];
exports.modules = {

/***/ "./pages/views/AllProducts.js":
/*!************************************!*\
  !*** ./pages/views/AllProducts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllProducts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ "./pages/views/ProductCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\AllProducts.js";





class AllProducts extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    let clothes, foods, electronics, apartments, services, others;
    const products = this.props.allProducts;
    let items;

    if (products) {
      items = products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        product: product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this));
    } else items = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        children: " Currently There is No Products !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 24
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }, this);

    clothes = products.filter(item => item.category == 'Clothes');
    console.log(clothes);
    let clothesItems = clothes.map(cloth => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: cloth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this));
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "../auctionDetail.module.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
          integrity: "sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
          integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "row mb-3",
          style: {
            backgroundColor: 'orange'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "col-3 mt-5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "http://localhost:3000/",
              class: " ms-5 btn btn-primary me-3",
              children: " Main "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "http://localhost:3000/auctions",
              class: "btn btn-primary me-5",
              children: " Auctions "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "col-6 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
              class: "text-center mb-5 mt-3",
              children: "Below is all the available products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
              action: "",
              class: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
                action: "http://localhost:3000/products/search",
                method: "POST",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  class: "input-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    type: "text",
                    name: "search",
                    onChange: event => {
                      this.setState({
                        search: event.target.value
                      });
                    },
                    value: this.state.search,
                    class: "form-control form-control-lg",
                    placeholder: "Search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    type: "submit",
                    class: "input-group-text btn-primary",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      class: "bi bi-search me-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 100
                    }, this), " Search"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "col-3 mt-5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "http://localhost:3000/register",
              class: " ms-5 btn btn-primary me-3",
              children: " Register "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "http://localhost:3000/signIn",
              class: "btn btn-primary me-5",
              children: " Login "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "row mt-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "col-2 position-relative pt-3",
            style: {
              left: 30,
              border: '3px solid rgb(0,255,255)'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
              class: "text-center text-primary mb-5",
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
              class: "nav nav-pills mb-3 d-flex flex-column ms-3",
              id: "pills-tab",
              role: "tablist",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                class: "nav-item text-center",
                role: "presentation",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  class: "nav-link active",
                  id: "pills-all-tab",
                  "data-bs-toggle": "pill",
                  "data-bs-target": "#pills-all",
                  type: "button",
                  role: "tab",
                  "aria-controls": "pills-clothes",
                  "aria-selected": "true",
                  children: "All"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                class: "nav-item text-center",
                role: "presentation",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  class: "nav-link",
                  id: "pills-home-tab",
                  "data-bs-toggle": "pill",
                  "data-bs-target": "#pills-clothes",
                  type: "button",
                  role: "tab",
                  "aria-controls": "pills-clothes",
                  "aria-selected": "true",
                  children: "Clothes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                class: "nav-item text-center",
                role: "presentation",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  class: "nav-link",
                  id: "pills-profile-tab",
                  "data-bs-toggle": "pill",
                  "data-bs-target": "#pills-electronics",
                  type: "button",
                  role: "tab",
                  "aria-controls": "pills-electronics",
                  "aria-selected": "false",
                  children: "Electronics"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                class: "nav-item text-center",
                role: "presentation",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  class: "nav-link",
                  id: "pills-contact-tab",
                  "data-bs-toggle": "pill",
                  "data-bs-target": "#pills-food",
                  type: "button",
                  role: "tab",
                  "aria-controls": "pills-food",
                  "aria-selected": "false",
                  children: "Food"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                class: "nav-item text-center",
                role: "presentation",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  class: "nav-link",
                  id: "pills-contact-tab",
                  "data-bs-toggle": "pill",
                  "data-bs-target": "#pills-apartments",
                  type: "button",
                  role: "tab",
                  "aria-controls": "pills-apartments",
                  "aria-selected": "false",
                  children: "Apartments"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                class: "nav-item text-center",
                role: "presentation",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  class: "nav-link",
                  id: "pills-contact-tab",
                  "data-bs-toggle": "pill",
                  "data-bs-target": "#pills-services",
                  type: "button",
                  role: "tab",
                  "aria-controls": "pills-services",
                  "aria-selected": "false",
                  children: "Services"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                class: "nav-item text-center",
                role: "presentation",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  class: "nav-link",
                  id: "pills-contact-tab",
                  "data-bs-toggle": "pill",
                  "data-bs-target": "#pills-other",
                  type: "button",
                  role: "tab",
                  "aria-controls": "pills-other",
                  "aria-selected": "false",
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "col-10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "col-10 position-relative",
                style: {
                  left: 65
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  class: "tab-content",
                  id: "pills-tabContent",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "tab-pane fade show active",
                    id: "pills-all",
                    role: "tabpanel",
                    "aria-labelledby": "pills-all-tab",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "d-flex flex-wrap",
                      children: items
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 37
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "tab-pane fade",
                    id: "pills-clothes",
                    role: "tabpanel",
                    "aria-labelledby": "pills-clothes-tab",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "d-flex flex-wrap",
                      children: clothesItems
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 37
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "tab-pane fade",
                    id: "pills-electronics",
                    role: "tabpanel",
                    "aria-labelledby": "pills-electronics-tab",
                    children: "2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "tab-pane fade",
                    id: "pills-food",
                    role: "tabpanel",
                    "aria-labelledby": "pills-food-tab",
                    children: "3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "tab-pane fade",
                    id: "pills-apartments",
                    role: "tabpanel",
                    "aria-labelledby": "pills-apartments-tab",
                    children: "4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "tab-pane fade",
                    id: "pills-services",
                    role: "tabpanel",
                    "aria-labelledby": "pills-services-tab",
                    children: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "tab-pane fade",
                    id: "pills-other",
                    role: "tabpanel",
                    "aria-labelledby": "pills-other-tab",
                    children: "6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "col-2 position-relative pt-3",
                style: {
                  right: 10,
                  border: '3px solid rgb(0,255,255)'
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
                  class: "text-center text-primary mb-4",
                  children: "Price Range : "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
                  action: "http://localhost:3000/products/range",
                  method: "POST",
                  class: "mb-5",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "mb-4",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "form-floating",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "number",
                        id: "name",
                        class: "form-control form-control-sm",
                        placeholder: "Enter Your Name",
                        required: true,
                        min: "0",
                        name: "min"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        for: "name",
                        children: "minimum"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 122,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    class: "mb-4",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "form-floating",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        type: "number",
                        id: "name",
                        class: "form-control form-control-sm",
                        placeholder: "Enter Your Name",
                        required: true,
                        min: "0",
                        name: "max"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        for: "name",
                        children: "maximum"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    class: "btn btn-primary",
                    children: "Submit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
                  action: "http://localhost:3000/products/sort",
                  method: "POST",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
                    class: "text-center text-primary mb-4",
                    children: "Sort By : "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "form-check",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        class: "form-check-input",
                        type: "radio",
                        value: "false",
                        name: "sort",
                        id: "flexRadioDefault1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        class: "form-check-label",
                        for: "flexRadioDefault1",
                        children: "Increasing"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      class: "form-check mt-3",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        class: "form-check-input",
                        type: "radio",
                        value: "true",
                        name: "sort",
                        id: "flexRadioDefault2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        class: "form-check-label",
                        for: "flexRadioDefault2",
                        children: "Decreasing"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                      class: "btn btn-primary mt-3",
                      children: "Submit"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "row"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  }

}

AllProducts.getInitialProps = ctx => {
  console.log(ctx);
  console.log(ctx.query.products);
  return {
    allProducts: ctx.query.products
  };
};

/***/ }),

/***/ "./pages/views/ProductCard.js":
/*!************************************!*\
  !*** ./pages/views/ProductCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\ProductCard.js";



class ProductCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        class: "card col-3 me-5 mb-5 text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: this.props.product.image,
          class: "card-img-top",
          alt: "...",
          style: {
            maxHeight: 175
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 114
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          class: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            class: "card-title",
            children: this.props.product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            class: "card-text text-muted",
            children: ["Price : ", this.props.product.price, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: 'http://localhost:3000/products/' + this.props.product.id,
            class: "btn btn-primary",
            children: "View More Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

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
var __webpack_exports__ = (__webpack_exec__("./pages/views/AllProducts.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBWDtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFFLEtBQUtILEtBQUwsQ0FBV2MsT0FBWCxDQUFtQm1CLEtBQTdCO0FBQW9DLGVBQUssRUFBQyxjQUExQztBQUF5RCxhQUFHLEVBQUMsS0FBN0Q7QUFBbUUsZUFBSyxFQUFFO0FBQUNDLFlBQUFBLFNBQVMsRUFBRTtBQUFaO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFDaUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEakcsZUFFSTtBQUFLLGVBQUssRUFBQyxXQUFYO0FBQUEsa0NBQ0k7QUFBSSxpQkFBSyxFQUFDLFlBQVY7QUFBQSxzQkFBd0IsS0FBS2xDLEtBQUwsQ0FBV2MsT0FBWCxDQUFtQnFCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLGlCQUFLLEVBQUMsc0JBQVQ7QUFBQSxtQ0FBeUMsS0FBS25DLEtBQUwsQ0FBV2MsT0FBWCxDQUFtQnNCLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUcsZ0JBQUksRUFBRSxvQ0FBa0MsS0FBS3BDLEtBQUwsQ0FBV2MsT0FBWCxDQUFtQnVCLEVBQTlEO0FBQWtFLGlCQUFLLEVBQUMsaUJBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxxQkFESjtBQWVIOztBQXpCK0M7Ozs7Ozs7Ozs7QUNIeEQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvQWxsUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuL1Byb2R1Y3RDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsbFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzZWFyY2g6XCJcIn07XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgbGV0IGNsb3RoZXMsZm9vZHMsZWxlY3Ryb25pY3MsYXBhcnRtZW50cyxzZXJ2aWNlcyxvdGhlcnM7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLmFsbFByb2R1Y3RzO1xyXG4gICAgICAgIGxldCBpdGVtc1xyXG4gICAgICAgIGlmKHByb2R1Y3RzKXtcclxuICAgICAgICAgICAgaXRlbXMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGl0ZW1zPTxkaXY+PGgxPiBDdXJyZW50bHkgVGhlcmUgaXMgTm8gUHJvZHVjdHMgITwvaDE+PC9kaXY+XHJcblxyXG4gICAgICAgIGNsb3RoZXMgPSBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5PT0nQ2xvdGhlcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNsb3RoZXMpO1xyXG4gICAgICAgIGxldCBjbG90aGVzSXRlbXMgPSBjbG90aGVzLm1hcChjbG90aCA9PiBcclxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e2Nsb3RofS8+KTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vYXVjdGlvbkRldGFpbC5tb2R1bGUuY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0Bwb3BwZXJqcy9jb3JlQDIuMTAuMi9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTcrekNOai9JcUo5NXdvMTZvTXRmc0tiWjljY0VoMzFlT3oxSEd5RHVDUTZ3Z255Sk5TWWRyUGEwM3J0UjF6ZEJcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUUpIdHZHaG1yOVhPSXBJNllWdXRHKzJRT0s5VCtabk40a3pGTjFSdEszekVGRUlzeGhsbVdsNS9ZRVN2cFoxM1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi0zXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J29yYW5nZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIgY2xhc3M9XCIgbXMtNSBidG4gYnRuLXByaW1hcnkgbWUtM1wiPiBNYWluIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXVjdGlvbnNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtZS01XCI+IEF1Y3Rpb25zIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi01IG10LTNcIj5CZWxvdyBpcyBhbGwgdGhlIGF2YWlsYWJsZSBwcm9kdWN0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZHVjdHMvc2VhcmNoXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWUgPSBcInNlYXJjaFwiIG9uQ2hhbmdlPXtldmVudCA9PiB7dGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCBidG4tcHJpbWFyeVwiPjxpIGNsYXNzPVwiYmkgYmktc2VhcmNoIG1lLTJcIj48L2k+IFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXJcIiBjbGFzcz1cIiBtcy01IGJ0biBidG4tcHJpbWFyeSBtZS0zXCI+IFJlZ2lzdGVyIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbkluXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWUtNVwiPiBMb2dpbiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcG9zaXRpb24tcmVsYXRpdmUgcHQtM1wiIHN0eWxlPXt7bGVmdDozMCwgYm9yZGVyOiczcHggc29saWQgcmdiKDAsMjU1LDI1NSknfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnkgbWItNVwiPkNhdGVnb3J5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxscyBtYi0zIGQtZmxleCBmbGV4LWNvbHVtbiBtcy0zXCIgaWQ9XCJwaWxscy10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gdGV4dC1jZW50ZXJcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGlkPVwicGlsbHMtYWxsLXRhYlwiIGRhdGEtYnMtdG9nZ2xlPVwicGlsbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI3BpbGxzLWFsbFwiIHR5cGU9XCJidXR0b25cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInBpbGxzLWNsb3RoZXNcIiBhcmlhLXNlbGVjdGVkPVwidHJ1ZVwiPkFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwicGlsbHMtaG9tZS10YWJcIiBkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIiBkYXRhLWJzLXRhcmdldD1cIiNwaWxscy1jbG90aGVzXCIgdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwicGlsbHMtY2xvdGhlc1wiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+Q2xvdGhlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwicGlsbHMtcHJvZmlsZS10YWJcIiBkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIiBkYXRhLWJzLXRhcmdldD1cIiNwaWxscy1lbGVjdHJvbmljc1wiIHR5cGU9XCJidXR0b25cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInBpbGxzLWVsZWN0cm9uaWNzXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RWxlY3Ryb25pY3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInBpbGxzLWNvbnRhY3QtdGFiXCIgZGF0YS1icy10b2dnbGU9XCJwaWxsXCIgZGF0YS1icy10YXJnZXQ9XCIjcGlsbHMtZm9vZFwiIHR5cGU9XCJidXR0b25cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInBpbGxzLWZvb2RcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5Gb29kPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gdGV4dC1jZW50ZXJcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJwaWxscy1jb250YWN0LXRhYlwiIGRhdGEtYnMtdG9nZ2xlPVwicGlsbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI3BpbGxzLWFwYXJ0bWVudHNcIiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwaWxscy1hcGFydG1lbnRzXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+QXBhcnRtZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwicGlsbHMtY29udGFjdC10YWJcIiBkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIiBkYXRhLWJzLXRhcmdldD1cIiNwaWxscy1zZXJ2aWNlc1wiIHR5cGU9XCJidXR0b25cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInBpbGxzLXNlcnZpY2VzXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+U2VydmljZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInBpbGxzLWNvbnRhY3QtdGFiXCIgZGF0YS1icy10b2dnbGU9XCJwaWxsXCIgZGF0YS1icy10YXJnZXQ9XCIjcGlsbHMtb3RoZXJcIiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwaWxscy1vdGhlclwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPk90aGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcG9zaXRpb24tcmVsYXRpdmVcIiBzdHlsZT17e2xlZnQ6NjV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBpZD1cInBpbGxzLXRhYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwicGlsbHMtYWxsXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwicGlsbHMtYWxsLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwicGlsbHMtY2xvdGhlc1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInBpbGxzLWNsb3RoZXMtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xvdGhlc0l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwicGlsbHMtZWxlY3Ryb25pY3NcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJwaWxscy1lbGVjdHJvbmljcy10YWJcIj4yPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInBpbGxzLWZvb2RcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJwaWxscy1mb29kLXRhYlwiPjM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwicGlsbHMtYXBhcnRtZW50c1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInBpbGxzLWFwYXJ0bWVudHMtdGFiXCI+NDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJwaWxscy1zZXJ2aWNlc1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInBpbGxzLXNlcnZpY2VzLXRhYlwiPjU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwicGlsbHMtb3RoZXJcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJwaWxscy1vdGhlci10YWJcIj42PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcG9zaXRpb24tcmVsYXRpdmUgcHQtM1wiIHN0eWxlPXt7cmlnaHQ6MTAsIGJvcmRlcjonM3B4IHNvbGlkIHJnYigwLDI1NSwyNTUpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtcHJpbWFyeSBtYi00XCI+UHJpY2UgUmFuZ2UgOiA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wcm9kdWN0cy9yYW5nZVwiIG1ldGhvZD1cIlBPU1RcIiBjbGFzcz1cIm1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiBwbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBOYW1lJyByZXF1aXJlZCBtaW49XCIwXCIgbmFtZT1cIm1pblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5taW5pbXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiBwbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBOYW1lJyByZXF1aXJlZCBtaW49XCIwXCIgbmFtZT1cIm1heFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5tYXhpbXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2R1Y3RzL3NvcnRcIiBtZXRob2Q9J1BPU1QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnkgbWItNFwiPlNvcnQgQnkgOiA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJmYWxzZVwiIG5hbWU9XCJzb3J0XCIgaWQ9XCJmbGV4UmFkaW9EZWZhdWx0MVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImZsZXhSYWRpb0RlZmF1bHQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmNyZWFzaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJ0cnVlXCIgbmFtZT1cInNvcnRcIiBpZD1cImZsZXhSYWRpb0RlZmF1bHQyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmxleFJhZGlvRGVmYXVsdDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY3JlYXNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbkFsbFByb2R1Y3RzLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGN0eClcclxuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeS5wcm9kdWN0cylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWxsUHJvZHVjdHM6Y3R4LnF1ZXJ5LnByb2R1Y3RzXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTsgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNvbC0zIG1lLTUgbWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnByb2R1Y3QuaW1hZ2V9IGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgc3R5bGU9e3ttYXhIZWlnaHQ6IDE3NX19Lz48aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt0aGlzLnByb3BzLnByb2R1Y3QubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LW11dGVkXCI+UHJpY2UgOiB7dGhpcy5wcm9wcy5wcm9kdWN0LnByaWNlfSAkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2R1Y3RzLycrdGhpcy5wcm9wcy5wcm9kdWN0LmlkfSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlZpZXcgTW9yZSBEZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJQcm9kdWN0Q2FyZCIsIkFsbFByb2R1Y3RzIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVuZGVyIiwiY2xvdGhlcyIsImZvb2RzIiwiZWxlY3Ryb25pY3MiLCJhcGFydG1lbnRzIiwic2VydmljZXMiLCJvdGhlcnMiLCJwcm9kdWN0cyIsImFsbFByb2R1Y3RzIiwiaXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsImNsb3RoZXNJdGVtcyIsImNsb3RoIiwiYmFja2dyb3VuZENvbG9yIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibGVmdCIsImJvcmRlciIsInJpZ2h0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJpbWFnZSIsIm1heEhlaWdodCIsIm5hbWUiLCJwcmljZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==