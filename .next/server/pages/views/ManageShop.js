"use strict";
(() => {
var exports = {};
exports.id = "pages/views/ManageShop";
exports.ids = ["pages/views/ManageShop"];
exports.modules = {

/***/ "./pages/views/ManageAuctionsInShop.js":
/*!*********************************************!*\
  !*** ./pages/views/ManageAuctionsInShop.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageAuctionsInShop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\ManageAuctionsInShop.js";




class ManageAuctionsInShop extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      toDeleteAuction: 0,
      toEditAuction: {}
    };
    this.getHighestBid = ManageAuctionsInShop.getHighestBid.bind(this);
  }

  static getHighestBid(auction) {
    if (auction.bids.length != 0) {
      let max = 0;
      var currentNumber;

      for (let i = 0; i < auction.bids.length; i++) {
        currentNumber = auction.bids[i].amount;
        if (currentNumber > max) max = currentNumber;
      }

      return max;
    }

    return "No Bids";
  } //   	handleNameChange(event){
  // 	this.setState({toEditProduct:{name:event.target.value}});
  //   }
  // 	handleDescriptionChange(event){
  // 	this.setState({toEditProduct:{description:event.target.value}});
  //   }
  // 	handlePriceChange(event){
  // 	this.setState({toEditProduct:{price:event.target.value}});
  //   }


  render() {
    const auctions = this.props.auctions;
    let rows;

    if (auctions) {
      rows = auctions.map(auction => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: auction.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: auction.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: auction.bids.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: [" ", this.getHighestBid(auction), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "#editAuctionModal",
            onClick: () => this.setState({
              toEditAuction: auction
            }),
            class: "edit",
            "data-toggle": "modal",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
              class: "material-icons",
              "data-toggle": "tooltip",
              title: "Edit",
              children: "\uE254"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 140
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "#deleteAuctionModal",
            onClick: () => this.setState({
              toDeleteAuction: auction.id
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
              lineNumber: 62,
              columnNumber: 149
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "http://localhost:3000/auctions/" + auction.id,
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "material-icons",
              children: "visibility"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 81
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this));
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "../manageShopsInProfile.module.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://code.jquery.com/jquery-3.5.1.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        class: "container-xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "table-responsive mt-5 text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "table-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              class: "table-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                    class: "text-primary text-left mb-3",
                    children: ["Manage Your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
                      children: " Auctions"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 59
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6 text-right",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#addAuctionModal",
                    class: "btn btn-success",
                    "data-toggle": "modal",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                      class: "material-icons",
                      children: "\uE147"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 78
                    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      style: {
                        position: 'relative',
                        bottom: 5
                      },
                      children: "Add a New Auction"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 117
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
              class: "table table-striped table-hover",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Bids Number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Highest Bid "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Delete"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Preview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 6
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
                children: rows
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 4
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "addAuctionModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: "http://localhost:3000/auctions",
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Add a New Auction"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "name",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                    class: "form-control",
                    name: "description",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "hidden",
                  name: "shopId",
                  value: this.props.shopId
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    for: "category",
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
                    class: "custom-select tm-select-accounts",
                    name: "category",
                    id: "category",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Clothes",
                      children: "Clothes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Food",
                      children: "Food"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Electronics",
                      children: "Electronics"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Homes",
                      children: "Homes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Services",
                      children: "Services"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Other",
                      children: "Other"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 8
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 8
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Image : "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "image",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
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
                  lineNumber: 160,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-success",
                  value: "Add Auction"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "editAuctionModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: `http://localhost:3000/products/edit/10`,
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Edit Auction"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    name: "name",
                    class: "form-control",
                    value: "House",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                    class: "form-control",
                    name: "description",
                    children: "A new House that overlooks the sea, 5 Rooms"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
                    class: "custom-select tm-select-accounts",
                    name: "category",
                    id: "category",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Clothes",
                      children: " Clothes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Food",
                      children: "Food"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Electronics",
                      children: "Electronics"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Homes",
                      children: "Homes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Services",
                      children: "Services"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Other",
                      children: "Other"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 7
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
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
                  lineNumber: 201,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-info",
                  value: "Save"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                type: "hidden",
                name: "shopId",
                value: this.props.shopId,
                readOnly: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "deleteAuctionModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: "http://localhost:3000/auctions/delete/" + this.state.toDeleteAuction,
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Delete Auction"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: "Are you sure you want to delete this Auction?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  class: "text-warning",
                  children: "This action cannot be undone."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
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
                  lineNumber: 228,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-danger",
                  value: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "hidden",
                  name: "shopId",
                  value: this.props.shopId,
                  readOnly: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 1
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "./pages/views/ManageProductsInShop.js":
/*!*********************************************!*\
  !*** ./pages/views/ManageProductsInShop.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageProductsInShop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\ManageProductsInShop.js";




class ManageProductsInShop extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      toDeleteProduct: 0,
      toEditProduct: {}
    }; //   this.handleNameChange=this.handleNameChange.bind(this);
    //   this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
    //   this.handlePriceChange=this.handlePriceChange.bind(this);
  } //   	handleNameChange(event){
  // 	this.setState({toEditProduct:{name:event.target.value}});
  //   }
  // 	handleDescriptionChange(event){
  // 	this.setState({toEditProduct:{description:event.target.value}});
  //   }
  // 	handlePriceChange(event){
  // 	this.setState({toEditProduct:{price:event.target.value}});
  //   }


  render() {
    const products = this.props.products;
    let rows;

    if (products) {
      rows = products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: product.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: product.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: product.percentage == null ? "No Discount" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: product.percentage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 8
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "#editProductModal",
            onClick: () => this.setState({
              toEditProduct: product
            }),
            class: "edit",
            "data-toggle": "modal",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
              class: "material-icons",
              "data-toggle": "tooltip",
              title: "Edit",
              children: "\uE254"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 122
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "#deleteProductModal",
            onClick: () => this.setState({
              toDeleteProduct: product.id
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
              lineNumber: 57,
              columnNumber: 131
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "http://localhost:3000/products/" + product.id,
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              class: "material-icons",
              children: "visibility"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 63
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 4
      }, this));
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "../manageShopsInProfile.module.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://code.jquery.com/jquery-3.5.1.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        class: "container-xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "table-responsive",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "table-wrapper mt-3 text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              class: "table-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                    class: "text-primary text-left",
                    children: ["Manage Your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
                      children: " Products"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 54
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "col-sm-6 text-right",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#addProductModal",
                    class: "btn btn-success",
                    "data-toggle": "modal",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                      class: "material-icons",
                      children: "\uE147"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 78
                    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      style: {
                        position: 'relative',
                        bottom: 5
                      },
                      children: "Add a New Product"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 117
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
              class: "table table-striped table-hover",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Discount Percentage "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Delete"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                    children: " Preview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 6
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
                children: rows
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 4
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "addProductModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: "http://localhost:3000/products",
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Add a New Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "name",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                    class: "form-control",
                    name: "description",
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "hidden",
                  name: "shopId",
                  value: this.props.shopId
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    for: "category",
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
                    class: "custom-select tm-select-accounts",
                    name: "category",
                    id: "category",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Clothes",
                      children: "Clothes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Food",
                      children: "Food"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Electronics",
                      children: "Electronics"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Homes",
                      children: "Homes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Services",
                      children: "Services"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 8
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Other",
                      children: "Other"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 8
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 8
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "number",
                    class: "form-control",
                    name: "price",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Image : "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "text",
                    class: "form-control",
                    name: "image",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Discount ( Optional )"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "number",
                    class: "form-control",
                    name: "percentage"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 6
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    class: "row"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 6
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
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
                  class: "btn btn-success",
                  value: "Add Product"
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
              lineNumber: 117,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "editProductModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: `http://localhost:3000/products/edit/10`,
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Edit Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 7
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
                    class: "custom-select tm-select-accounts",
                    name: "category",
                    id: "category",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Clothes",
                      children: " Clothes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Food",
                      children: "Food"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Electronics",
                      children: "Electronics"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Homes",
                      children: "Homes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Services",
                      children: "Services"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 7
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Other",
                      children: "Other"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 7
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 7
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  class: "form-group",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
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
                  lineNumber: 210,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-info",
                  value: "Save"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                type: "hidden",
                name: "shopId",
                value: this.props.shopId,
                readOnly: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "deleteProductModal",
        class: "modal fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            class: "modal-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              action: "http://localhost:3000/products/delete/" + this.state.toDeleteProduct,
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  class: "modal-title",
                  children: "Delete Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  class: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 5
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                class: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: "Are you sure you want to delete this Product?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  class: "text-warning",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("small", {
                    children: "This action cannot be undone."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 30
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 232,
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
                  lineNumber: 237,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "submit",
                  class: "btn btn-danger",
                  value: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 6
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                  type: "hidden",
                  name: "shopId",
                  value: this.props.shopId,
                  readOnly: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 1
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "./pages/views/ManageShop.js":
/*!***********************************!*\
  !*** ./pages/views/ManageShop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageShop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ManageProductsInShop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageProductsInShop */ "./pages/views/ManageProductsInShop.js");
/* harmony import */ var _ManageAuctionsInShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageAuctionsInShop */ "./pages/views/ManageAuctionsInShop.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\ManageShop.js";





class ManageShop extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ManageAuctionsInShop__WEBPACK_IMPORTED_MODULE_2__.default, {
        auctions: this.props.auctions,
        shopId: this.props.shopId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ManageProductsInShop__WEBPACK_IMPORTED_MODULE_1__.default, {
        products: this.props.products,
        shopId: this.props.shopId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  }

}

ManageShop.getInitialProps = ctx => {
  console.log(ctx.query.auctions);
  return {
    name: ctx.query.name,
    shopId: ctx.query.id,
    description: ctx.query.description,
    phoneNumber: ctx.query.phoneNumber,
    location: ctx.query.location,
    products: ctx.query.products,
    auctions: ctx.query.auctions
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
var __webpack_exports__ = (__webpack_exec__("./pages/views/ManageShop.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9tYXJrZXQvLi9wYWdlcy92aWV3cy9NYW5hZ2VBdWN0aW9uc0luU2hvcC5qcyIsIndlYnBhY2s6Ly9tYXJrZXQvLi9wYWdlcy92aWV3cy9NYW5hZ2VQcm9kdWN0c0luU2hvcC5qcyIsIndlYnBhY2s6Ly9tYXJrZXQvLi9wYWdlcy92aWV3cy9NYW5hZ2VTaG9wLmpzIiwid2VicGFjazovL21hcmtldC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL21hcmtldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlQXVjdGlvbnNJblNob3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgdG9EZWxldGVBdWN0aW9uOjAsXHJcblx0XHQgIHRvRWRpdEF1Y3Rpb246e31cclxuICAgICAgfTtcclxuXHJcblx0dGhpcy5nZXRIaWdoZXN0QmlkPU1hbmFnZUF1Y3Rpb25zSW5TaG9wLmdldEhpZ2hlc3RCaWQuYmluZCh0aGlzKTtcclxuXHJcbiAgfVxyXG5cdHN0YXRpYyBnZXRIaWdoZXN0QmlkKGF1Y3Rpb24pe1xyXG5cdFx0aWYoYXVjdGlvbi5iaWRzLmxlbmd0aCE9MCl7XHJcblx0XHRcdGxldCBtYXggPSAwO1xyXG5cdFx0XHR2YXIgY3VycmVudE51bWJlcjtcclxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8YXVjdGlvbi5iaWRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRjdXJyZW50TnVtYmVyPWF1Y3Rpb24uYmlkc1tpXS5hbW91bnRcclxuXHRcdFx0XHRpZihjdXJyZW50TnVtYmVyPm1heClcclxuXHRcdFx0XHRcdG1heD1jdXJyZW50TnVtYmVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBtYXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCJObyBCaWRzXCI7XHJcblx0fVxyXG5cclxuXHRcclxuXHJcbi8vICAgXHRoYW5kbGVOYW1lQ2hhbmdlKGV2ZW50KXtcclxuLy8gXHR0aGlzLnNldFN0YXRlKHt0b0VkaXRQcm9kdWN0OntuYW1lOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcbi8vIFx0aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UoZXZlbnQpe1xyXG4vLyBcdHRoaXMuc2V0U3RhdGUoe3RvRWRpdFByb2R1Y3Q6e2Rlc2NyaXB0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcbi8vIFx0aGFuZGxlUHJpY2VDaGFuZ2UoZXZlbnQpe1xyXG4vLyBcdHRoaXMuc2V0U3RhdGUoe3RvRWRpdFByb2R1Y3Q6e3ByaWNlOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cdFxyXG4gICAgY29uc3QgYXVjdGlvbnMgPSB0aGlzLnByb3BzLmF1Y3Rpb25zO1xyXG4gICAgbGV0IHJvd3M7XHJcblx0XHJcbiAgICBpZihhdWN0aW9ucyl7XHJcblx0XHRcclxuICAgICAgICByb3dzID0gYXVjdGlvbnMubWFwKGF1Y3Rpb24gPT5cclxuXHJcblx0XHRcdFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnthdWN0aW9uLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2F1Y3Rpb24uY2F0ZWdvcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2F1Y3Rpb24uYmlkcy5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+IHt0aGlzLmdldEhpZ2hlc3RCaWQoYXVjdGlvbil9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2VkaXRBdWN0aW9uTW9kYWxcIiBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvRWRpdEF1Y3Rpb246YXVjdGlvbn0pfSBjbGFzcz1cImVkaXRcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdFwiPiYjeEUyNTQ7PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNkZWxldGVBdWN0aW9uTW9kYWxcIiBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvRGVsZXRlQXVjdGlvbjphdWN0aW9uLmlkfSl9IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkRlbGV0ZVwiPiYjeEU4NzI7PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXVjdGlvbnMvXCIrYXVjdGlvbi5pZH0+IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9zcGFuPjwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG5cdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFZhcmVsYStSb3VuZFwiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9tYW5hZ2VTaG9wc0luUHJvZmlsZS5tb2R1bGUuY3NzXCIvPiBcclxuXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14bFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlIG10LTUgdGV4dC1jZW50ZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS10aXRsZVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdGV4dC1sZWZ0IG1iLTNcIj5NYW5hZ2UgWW91ciA8Yj4gQXVjdGlvbnM8L2I+PC9oMj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS02IHRleHQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNhZGRBdWN0aW9uTW9kYWxcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+JiN4RTE0Nzs8L2k+IDxzcGFuIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJywgYm90dG9tOjV9fT5BZGQgYSBOZXcgQXVjdGlvbjwvc3Bhbj48L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkNhdGVnb3J5PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkJpZHMgTnVtYmVyPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPiBIaWdoZXN0IEJpZCA8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IEVkaXQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IERlbGV0ZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD4gUHJldmlldzwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj4gICAgICAgIFxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCJhZGRBdWN0aW9uTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXVjdGlvbnNcIiBtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5BZGQgYSBOZXcgQXVjdGlvbjwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2hvcElkXCIgdmFsdWU9e3RoaXMucHJvcHMuc2hvcElkfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJjYXRlZ29yeVwiPkNhdGVnb3J5PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwiY3VzdG9tLXNlbGVjdCB0bS1zZWxlY3QtYWNjb3VudHNcIiBuYW1lPVwiY2F0ZWdvcnlcIiBpZD1cImNhdGVnb3J5XCI+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkNsb3RoZXNcIj5DbG90aGVzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkZvb2RcIj5Gb29kPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkVsZWN0cm9uaWNzXCI+RWxlY3Ryb25pY3M8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiSG9tZXNcIj5Ib21lczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJTZXJ2aWNlc1wiPlNlcnZpY2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk90aGVyXCI+T3RoZXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5JbWFnZSA6IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImltYWdlXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHZhbHVlPVwiQWRkIEF1Y3Rpb25cIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBpZD1cImVkaXRBdWN0aW9uTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZHVjdHMvZWRpdC8xMGB9IG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkVkaXQgQXVjdGlvbjwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIkhvdXNlXCIgIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlBob25lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgID5BIG5ldyBIb3VzZSB0aGF0IG92ZXJsb29rcyB0aGUgc2VhLCA1IFJvb21zPC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwiY3VzdG9tLXNlbGVjdCB0bS1zZWxlY3QtYWNjb3VudHNcIiBuYW1lPVwiY2F0ZWdvcnlcIiBpZD1cImNhdGVnb3J5XCI+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJDbG90aGVzXCI+IENsb3RoZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkZvb2RcIj5Gb29kPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJFbGVjdHJvbmljc1wiPkVsZWN0cm9uaWNzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJIb21lc1wiPkhvbWVzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJTZXJ2aWNlc1wiPlNlcnZpY2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgdmFsdWU9XCJTYXZlXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNob3BJZFwiIHZhbHVlPXt0aGlzLnByb3BzLnNob3BJZH0gcmVhZE9ubHkgLz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiZGVsZXRlQXVjdGlvbk1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0PGZvcm0gYWN0aW9uPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWN0aW9ucy9kZWxldGUvXCIrdGhpcy5zdGF0ZS50b0RlbGV0ZUF1Y3Rpb259IG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkRlbGV0ZSBBdWN0aW9uPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBBdWN0aW9uPzwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+VGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS48L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2YWx1ZT1cIkRlbGV0ZVwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNob3BJZFwiIHZhbHVlPXt0aGlzLnByb3BzLnNob3BJZH0gcmVhZE9ubHkgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICA8Lz5cclxuICAgIClcclxuXHR9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VQcm9kdWN0c0luU2hvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICB0b0RlbGV0ZVByb2R1Y3Q6MCxcclxuXHRcdCAgdG9FZGl0UHJvZHVjdDp7fVxyXG4gICAgICB9O1xyXG5cclxuXHQvLyAgIHRoaXMuaGFuZGxlTmFtZUNoYW5nZT10aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHQvLyAgIHRoaXMuaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2U9dGhpcy5oYW5kbGVEZXNjcmlwdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdC8vICAgdGhpcy5oYW5kbGVQcmljZUNoYW5nZT10aGlzLmhhbmRsZVByaWNlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gIH1cclxuXHJcbi8vICAgXHRoYW5kbGVOYW1lQ2hhbmdlKGV2ZW50KXtcclxuLy8gXHR0aGlzLnNldFN0YXRlKHt0b0VkaXRQcm9kdWN0OntuYW1lOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcbi8vIFx0aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UoZXZlbnQpe1xyXG4vLyBcdHRoaXMuc2V0U3RhdGUoe3RvRWRpdFByb2R1Y3Q6e2Rlc2NyaXB0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcbi8vIFx0aGFuZGxlUHJpY2VDaGFuZ2UoZXZlbnQpe1xyXG4vLyBcdHRoaXMuc2V0U3RhdGUoe3RvRWRpdFByb2R1Y3Q6e3ByaWNlOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cdFxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLnByb2R1Y3RzO1xyXG4gICAgbGV0IHJvd3M7XHJcblx0aWYocHJvZHVjdHMpe1xyXG5cdFx0cm93cyA9IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD57cHJvZHVjdC5uYW1lfTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+e3Byb2R1Y3QuY2F0ZWdvcnl9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57cHJvZHVjdC5wcmljZX08L3RkPlxyXG5cdFxyXG5cdFx0XHRcdFx0eyA8dGQ+e3Byb2R1Y3QucGVyY2VudGFnZT09bnVsbD8gXCJObyBEaXNjb3VudFwiOlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2Pntwcm9kdWN0LnBlcmNlbnRhZ2V9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR7LyogPHA+e25ldyBEYXRlKHByb2R1Y3QuZGF0ZVN0YXJ0LnRvU3RyaW5nKCkpLnRvRGF0ZVN0cmluZygpfTwvcD5cclxuXHRcdFx0XHRcdDxwPntuZXcgRGF0ZShwcm9kdWN0LmRhdGVFbmQudG9TdHJpbmcoKSkudG9EYXRlU3RyaW5nKCl9PC9wPiAqL31cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC90ZD59XHJcblx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNlZGl0UHJvZHVjdE1vZGFsXCIgb25DbGljaz17KCk9PiB0aGlzLnNldFN0YXRlKHt0b0VkaXRQcm9kdWN0OnByb2R1Y3R9KX0gY2xhc3M9XCJlZGl0XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXRcIj4mI3hFMjU0OzwvaT48L2E+XHJcblx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI2RlbGV0ZVByb2R1Y3RNb2RhbFwiIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9EZWxldGVQcm9kdWN0OnByb2R1Y3QuaWR9KX0gY2xhc3M9XCJkZWxldGVcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRGVsZXRlXCI+JiN4RTg3Mjs8L2k+PC9hPlxyXG5cdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZHVjdHMvXCIrcHJvZHVjdC5pZH0+IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9zcGFuPjwvYT4gXHJcblx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0KVxyXG5cdH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG5cdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFZhcmVsYStSb3VuZFwiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9tYW5hZ2VTaG9wc0luUHJvZmlsZS5tb2R1bGUuY3NzXCIvPiBcclxuXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14bFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlciBtdC0zIHRleHQtY2VudGVyXCIgPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtdGl0bGVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgbWItM1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdGV4dC1sZWZ0XCI+TWFuYWdlIFlvdXIgPGI+IFByb2R1Y3RzPC9iPjwvaDI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjYWRkUHJvZHVjdE1vZGFsXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiYjeEUxNDc7PC9pPiA8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsIGJvdHRvbTo1fX0+QWRkIGEgTmV3IFByb2R1Y3Q8L3NwYW4+PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5DYXRlZ29yeTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QcmljZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD4gRGlzY291bnQgUGVyY2VudGFnZSA8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IEVkaXQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IERlbGV0ZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD4gUHJldmlldzwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj4gICAgICAgIFxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCJhZGRQcm9kdWN0TW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZHVjdHNcIiBtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5BZGQgYSBOZXcgUHJvZHVjdDwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzaG9wSWRcIiB2YWx1ZT17dGhpcy5wcm9wcy5zaG9wSWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY2F0ZWdvcnlcIj5DYXRlZ29yeTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzcz1cImN1c3RvbS1zZWxlY3QgdG0tc2VsZWN0LWFjY291bnRzXCIgbmFtZT1cImNhdGVnb3J5XCIgaWQ9XCJjYXRlZ29yeVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJDbG90aGVzXCI+Q2xvdGhlczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJGb29kXCI+Rm9vZDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJFbGVjdHJvbmljc1wiPkVsZWN0cm9uaWNzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkhvbWVzXCI+SG9tZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiU2VydmljZXNcIj5TZXJ2aWNlczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicHJpY2VcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5JbWFnZSA6IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImltYWdlXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RGlzY291bnQgKCBPcHRpb25hbCApPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwZXJjZW50YWdlXCIvPlxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB2YWx1ZT1cIkFkZCBQcm9kdWN0XCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgaWQ9XCJlZGl0UHJvZHVjdE1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0PGZvcm0gYWN0aW9uPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2R1Y3RzL2VkaXQvMTBgfSBtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5FZGl0IFByb2R1Y3Q8L2g0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHR7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2UoKX0gdmFsdWUgPXt0aGlzLnN0YXRlLnRvRWRpdFByb2R1Y3QubmFtZX0gcmVxdWlyZWQvPiAqL31cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlBob25lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0ey8qIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlKCl9ID57dGhpcy5zdGF0ZS50b0VkaXRQcm9kdWN0LmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+ICovfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5DYXRlZ29yeTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJjdXN0b20tc2VsZWN0IHRtLXNlbGVjdC1hY2NvdW50c1wiIG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnlcIj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkNsb3RoZXNcIj4gQ2xvdGhlczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiRm9vZFwiPkZvb2Q8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkVsZWN0cm9uaWNzXCI+RWxlY3Ryb25pY3M8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkhvbWVzXCI+SG9tZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlNlcnZpY2VzXCI+U2VydmljZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk90aGVyXCI+T3RoZXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHR7LyogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcmljZUNoYW5nZSgpfSB2YWx1ZSA9e3RoaXMuc3RhdGUudG9FZGl0UHJvZHVjdC5wcmljZX0gY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZC8+ICovfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgdmFsdWU9XCJTYXZlXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNob3BJZFwiIHZhbHVlPXt0aGlzLnByb3BzLnNob3BJZH0gcmVhZE9ubHkgLz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiZGVsZXRlUHJvZHVjdE1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0PGZvcm0gYWN0aW9uPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wcm9kdWN0cy9kZWxldGUvXCIrdGhpcy5zdGF0ZS50b0RlbGV0ZVByb2R1Y3R9IG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkRlbGV0ZSBQcm9kdWN0PC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBQcm9kdWN0PzwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+PHNtYWxsPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9zbWFsbD48L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2YWx1ZT1cIkRlbGV0ZVwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNob3BJZFwiIHZhbHVlPXt0aGlzLnByb3BzLnNob3BJZH0gcmVhZE9ubHkgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNYW5hZ2VQcm9kdWN0c0luU2hvcCBmcm9tICcuL01hbmFnZVByb2R1Y3RzSW5TaG9wJztcclxuaW1wb3J0IE1hbmFnZUF1Y3Rpb25zSW5TaG9wIGZyb20gJy4vTWFuYWdlQXVjdGlvbnNJblNob3AnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VTaG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNYW5hZ2VBdWN0aW9uc0luU2hvcCBhdWN0aW9ucz17dGhpcy5wcm9wcy5hdWN0aW9uc30gc2hvcElkPXt0aGlzLnByb3BzLnNob3BJZH0gLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPE1hbmFnZVByb2R1Y3RzSW5TaG9wIHByb2R1Y3RzPXt0aGlzLnByb3BzLnByb2R1Y3RzfSBzaG9wSWQ9e3RoaXMucHJvcHMuc2hvcElkfSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk1hbmFnZVNob3AuZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eC5xdWVyeS5hdWN0aW9ucylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTpjdHgucXVlcnkubmFtZSxcclxuICAgICAgICBzaG9wSWQ6Y3R4LnF1ZXJ5LmlkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOmN0eC5xdWVyeS5kZXNjcmlwdGlvbixcclxuICAgICAgICBwaG9uZU51bWJlcjpjdHgucXVlcnkucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgbG9jYXRpb246Y3R4LnF1ZXJ5LmxvY2F0aW9uLFxyXG4gICAgICAgIHByb2R1Y3RzOmN0eC5xdWVyeS5wcm9kdWN0cyxcclxuICAgICAgICBhdWN0aW9uczpjdHgucXVlcnkuYXVjdGlvbnNcclxuICAgIH1cclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiTWFuYWdlQXVjdGlvbnNJblNob3AiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0b0RlbGV0ZUF1Y3Rpb24iLCJ0b0VkaXRBdWN0aW9uIiwiZ2V0SGlnaGVzdEJpZCIsImJpbmQiLCJhdWN0aW9uIiwiYmlkcyIsImxlbmd0aCIsIm1heCIsImN1cnJlbnROdW1iZXIiLCJpIiwiYW1vdW50IiwicmVuZGVyIiwiYXVjdGlvbnMiLCJyb3dzIiwibWFwIiwibmFtZSIsImNhdGVnb3J5Iiwic2V0U3RhdGUiLCJpZCIsInBvc2l0aW9uIiwiYm90dG9tIiwic2hvcElkIiwiTWFuYWdlUHJvZHVjdHNJblNob3AiLCJ0b0RlbGV0ZVByb2R1Y3QiLCJ0b0VkaXRQcm9kdWN0IiwicHJvZHVjdHMiLCJwcm9kdWN0IiwicHJpY2UiLCJwZXJjZW50YWdlIiwiTWFuYWdlU2hvcCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImRlc2NyaXB0aW9uIiwicGhvbmVOdW1iZXIiLCJsb2NhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=