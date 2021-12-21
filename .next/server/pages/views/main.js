"use strict";
(() => {
var exports = {};
exports.id = "pages/views/main";
exports.ids = ["pages/views/main"];
exports.modules = {

/***/ "./pages/views/AuctionCard.js":
/*!************************************!*\
  !*** ./pages/views/AuctionCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuctionCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ManageAuctionsInShop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageAuctionsInShop */ "./pages/views/ManageAuctionsInShop.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\AuctionCard.js";




class AuctionCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        class: "card col-3 me-5 mb-5 text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: this.props.auction.image,
          class: "card-img-top",
          alt: "..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          class: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
            class: "card-title",
            children: this.props.auction.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            class: "card-text text-muted",
            children: ["Highest Bid : ", _ManageAuctionsInShop__WEBPACK_IMPORTED_MODULE_1__.default.getHighestBid(this.props.auction)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: 'http://localhost:3000/auctions/' + this.props.auction.id,
            class: "btn btn-primary",
            children: "View More Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/***/ }),

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

/***/ "./pages/views/Nav.js":
/*!****************************!*\
  !*** ./pages/views/Nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\Nav.js";

function Nav() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    class: "navbar navbar-expand-lg navbar-light bg-white",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        class: "navbar-toggler",
        type: "button",
        "data-mdb-toggle": "collapse",
        "data-mdb-target": "#navbarExample01",
        "aria-controls": "navbarExample01",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          class: "fas fa-bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "collapse navbar-collapse",
        id: "navbarExample01",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          class: "navbar-nav me-auto mb-2 mb-lg-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            class: "nav-item active",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              class: "nav-link text-primary",
              "aria-current": "page",
              href: "http://localhost:3000/signIn",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            class: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              class: "nav-link text-primary",
              href: "http://localhost:3000/register",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            class: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              class: "nav-link text-primary",
              href: "http://localhost:3000/products",
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            class: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              class: "nav-link text-primary",
              href: "http://localhost:3000/auctions",
              children: "Auctions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 29
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

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

/***/ "./pages/views/main.js":
/*!*****************************!*\
  !*** ./pages/views/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ "./pages/views/ProductCard.js");
/* harmony import */ var _AuctionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuctionCard */ "./pages/views/AuctionCard.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./pages/views/Nav.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\main.js";








class main extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let topProducts;
    topProducts = this.props.products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: product
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this));
    let topAuctions;
    topAuctions = this.props.auctions.map(auction => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_AuctionCard__WEBPACK_IMPORTED_MODULE_3__.default, {
      auction: auction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this));
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
          integrity: "sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
          integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        class: "row",
        style: {
          borderBottom: '5px solid blue',
          borderTop: '5px solid blue'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          class: "col-4 mt-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            class: "d-flex justify-content-evenly",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              class: "btn btn-primary",
              style: {
                backgroundColor: '#3b5998'
              },
              href: "#!",
              role: "button",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
                class: "fa fa-facebook-f"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              class: "btn btn-primary",
              style: {
                backgroundColor: '#55acee'
              },
              href: "#!",
              role: "button",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
                class: "fa fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              class: "btn btn-primary",
              style: {
                backgroundColor: '#dd4b39'
              },
              href: "#!",
              role: "button",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
                class: "fa fa-google"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              class: "btn btn-primary",
              style: {
                backgroundColor: '#ac2bac'
              },
              href: "#!",
              role: "button",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
                class: "fa fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          class: "col-4 mt-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            class: "text-center text-info",
            children: " Marketera"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          class: "col-4 mt-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        class: "row mt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          class: "d-flex flex-column justify-content-center align-items-center col-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            class: "text-primary text-center mb-5",
            children: " Bid on the Most Competitive Auctions!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: "https://www.adexchanger.com/wp-content/uploads/2020/10/in-app-bidding.png",
            class: "w-70",
            style: {
              width: 750
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        class: "row mt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          class: "d-flex flex-column justify-content-center align-items-center col-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            class: "text-primary text-center mb-5",
            children: " Buy The Best Products Available on the Market!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: "https://www.internetx.com/fileadmin/_processed_/0/c/csm_E-Commerce_dcc2719819.png",
            class: "w-70",
            style: {
              width: 750
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        class: "row mt-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          class: "text-primary text-center mb-5",
          children: " Our Top Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          class: "d-flex flex-wrap justify-content-center",
          children: topProducts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        class: "row mt-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          class: "text-primary text-center mb-5",
          children: " Our Top Auctions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          class: "d-flex flex-wrap justify-content-center",
          children: topAuctions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        class: "row"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  }

}

main.getInitialProps = ctx => {
  return {
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
var __webpack_exports__ = (__webpack_exec__("./pages/views/main.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssYUFBSyxFQUFDLFVBQVg7QUFBQSxnQ0FDSTtBQUFJLGVBQUssRUFBQywrQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssZUFBSyxFQUFDLHlDQUFYO0FBQUEsb0JBQ0tFO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4REEsZUE4REE7QUFBSyxhQUFLLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOURBO0FBQUEsb0JBREo7QUFtRUg7O0FBdEY0Qzs7QUF5RmpESCxJQUFJLENBQUNRLGVBQUwsR0FBd0JDLEdBQUQsSUFBUztBQUM1QixTQUFPO0FBQ0hQLElBQUFBLFFBQVEsRUFBQ08sR0FBRyxDQUFDQyxLQUFKLENBQVVSLFFBRGhCO0FBRUhmLElBQUFBLFFBQVEsRUFBQ3NCLEdBQUcsQ0FBQ0MsS0FBSixDQUFVdkI7QUFGaEIsR0FBUDtBQUlELENBTEg7Ozs7Ozs7Ozs7QUNoR0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvQXVjdGlvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvTWFuYWdlQXVjdGlvbnNJblNob3AuanMiLCJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvTmF2LmpzIiwid2VicGFjazovL21hcmtldC8uL3BhZ2VzL3ZpZXdzL1Byb2R1Y3RDYXJkLmpzIiwid2VicGFjazovL21hcmtldC8uL3BhZ2VzL3ZpZXdzL21haW4uanMiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYW5hZ2VBdWN0aW9uc0luU2hvcCBmcm9tIFwiLi9NYW5hZ2VBdWN0aW9uc0luU2hvcFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1Y3Rpb25DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9OyAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY29sLTMgbWUtNSBtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuYXVjdGlvbi5pbWFnZX0gY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3RoaXMucHJvcHMuYXVjdGlvbi5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtbXV0ZWRcIj5IaWdoZXN0IEJpZCA6IHtNYW5hZ2VBdWN0aW9uc0luU2hvcC5nZXRIaWdoZXN0QmlkKHRoaXMucHJvcHMuYXVjdGlvbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1Y3Rpb25zLycrdGhpcy5wcm9wcy5hdWN0aW9uLmlkfSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlZpZXcgTW9yZSBEZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VBdWN0aW9uc0luU2hvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICB0b0RlbGV0ZUF1Y3Rpb246MCxcclxuXHRcdCAgdG9FZGl0QXVjdGlvbjp7fVxyXG4gICAgICB9O1xyXG5cclxuXHR0aGlzLmdldEhpZ2hlc3RCaWQ9TWFuYWdlQXVjdGlvbnNJblNob3AuZ2V0SGlnaGVzdEJpZC5iaW5kKHRoaXMpO1xyXG5cclxuICB9XHJcblx0c3RhdGljIGdldEhpZ2hlc3RCaWQoYXVjdGlvbil7XHJcblx0XHRpZihhdWN0aW9uLmJpZHMubGVuZ3RoIT0wKXtcclxuXHRcdFx0bGV0IG1heCA9IDA7XHJcblx0XHRcdHZhciBjdXJyZW50TnVtYmVyO1xyXG5cdFx0XHRmb3IobGV0IGk9MDsgaTxhdWN0aW9uLmJpZHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGN1cnJlbnROdW1iZXI9YXVjdGlvbi5iaWRzW2ldLmFtb3VudFxyXG5cdFx0XHRcdGlmKGN1cnJlbnROdW1iZXI+bWF4KVxyXG5cdFx0XHRcdFx0bWF4PWN1cnJlbnROdW1iZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG1heDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBcIk5vIEJpZHNcIjtcclxuXHR9XHJcblxyXG5cdFxyXG5cclxuLy8gICBcdGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpe1xyXG4vLyBcdHRoaXMuc2V0U3RhdGUoe3RvRWRpdFByb2R1Y3Q6e25hbWU6ZXZlbnQudGFyZ2V0LnZhbHVlfX0pO1xyXG4vLyAgIH1cclxuLy8gXHRoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZShldmVudCl7XHJcbi8vIFx0dGhpcy5zZXRTdGF0ZSh7dG9FZGl0UHJvZHVjdDp7ZGVzY3JpcHRpb246ZXZlbnQudGFyZ2V0LnZhbHVlfX0pO1xyXG4vLyAgIH1cclxuLy8gXHRoYW5kbGVQcmljZUNoYW5nZShldmVudCl7XHJcbi8vIFx0dGhpcy5zZXRTdGF0ZSh7dG9FZGl0UHJvZHVjdDp7cHJpY2U6ZXZlbnQudGFyZ2V0LnZhbHVlfX0pO1xyXG4vLyAgIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcblx0XHJcbiAgICBjb25zdCBhdWN0aW9ucyA9IHRoaXMucHJvcHMuYXVjdGlvbnM7XHJcbiAgICBsZXQgcm93cztcclxuXHRcclxuICAgIGlmKGF1Y3Rpb25zKXtcclxuXHRcdFxyXG4gICAgICAgIHJvd3MgPSBhdWN0aW9ucy5tYXAoYXVjdGlvbiA9PlxyXG5cclxuXHRcdFx0XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2F1Y3Rpb24ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YXVjdGlvbi5jYXRlZ29yeX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YXVjdGlvbi5iaWRzLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ge3RoaXMuZ2V0SGlnaGVzdEJpZChhdWN0aW9uKX0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjZWRpdEF1Y3Rpb25Nb2RhbFwiIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9FZGl0QXVjdGlvbjphdWN0aW9ufSl9IGNsYXNzPVwiZWRpdFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJFZGl0XCI+JiN4RTI1NDs8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2RlbGV0ZUF1Y3Rpb25Nb2RhbFwiIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9EZWxldGVBdWN0aW9uOmF1Y3Rpb24uaWR9KX0gY2xhc3M9XCJkZWxldGVcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRGVsZXRlXCI+JiN4RTg3Mjs8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWN0aW9ucy9cIithdWN0aW9uLmlkfT4gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnZpc2liaWxpdHk8L3NwYW4+PC9hPiBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuXHJcbiAgICAgICAgPEhlYWQ+XHJcblx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98VmFyZWxhK1JvdW5kXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL21hbmFnZVNob3BzSW5Qcm9maWxlLm1vZHVsZS5jc3NcIi8+IFxyXG5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhsXCI+XHJcblx0PGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmUgbXQtNSB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLXRpdGxlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzcz1cInRleHQtcHJpbWFyeSB0ZXh0LWxlZnQgbWItM1wiPk1hbmFnZSBZb3VyIDxiPiBBdWN0aW9uczwvYj48L2gyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI2FkZEF1Y3Rpb25Nb2RhbFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4mI3hFMTQ3OzwvaT4gPHNwYW4gc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLCBib3R0b206NX19PkFkZCBhIE5ldyBBdWN0aW9uPC9zcGFuPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+Q2F0ZWdvcnk8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QmlkcyBOdW1iZXI8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IEhpZ2hlc3QgQmlkIDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD4gRWRpdDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD4gRGVsZXRlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPiBQcmV2aWV3PC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvd3N9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PiAgICAgICAgXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBpZD1cImFkZEF1Y3Rpb25Nb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdDxmb3JtIGFjdGlvbj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWN0aW9uc1wiIG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkFkZCBhIE5ldyBBdWN0aW9uPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzaG9wSWRcIiB2YWx1ZT17dGhpcy5wcm9wcy5zaG9wSWR9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImNhdGVnb3J5XCI+Q2F0ZWdvcnk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJjdXN0b20tc2VsZWN0IHRtLXNlbGVjdC1hY2NvdW50c1wiIG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQ2xvdGhlc1wiPkNsb3RoZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiRm9vZFwiPkZvb2Q8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiRWxlY3Ryb25pY3NcIj5FbGVjdHJvbmljczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJIb21lc1wiPkhvbWVzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlNlcnZpY2VzXCI+U2VydmljZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiT3RoZXJcIj5PdGhlcjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkltYWdlIDogPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaW1hZ2VcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdmFsdWU9XCJBZGQgQXVjdGlvblwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiZWRpdEF1Y3Rpb25Nb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdDxmb3JtIGFjdGlvbj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wcm9kdWN0cy9lZGl0LzEwYH0gbWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RWRpdCBBdWN0aW9uPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiSG91c2VcIiAgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiAgPkEgbmV3IEhvdXNlIHRoYXQgb3Zlcmxvb2tzIHRoZSBzZWEsIDUgUm9vbXM8L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5DYXRlZ29yeTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJjdXN0b20tc2VsZWN0IHRtLXNlbGVjdC1hY2NvdW50c1wiIG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnlcIj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkNsb3RoZXNcIj4gQ2xvdGhlczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiRm9vZFwiPkZvb2Q8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkVsZWN0cm9uaWNzXCI+RWxlY3Ryb25pY3M8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkhvbWVzXCI+SG9tZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlNlcnZpY2VzXCI+U2VydmljZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk90aGVyXCI+T3RoZXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIiB2YWx1ZT1cIlNhdmVcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2hvcElkXCIgdmFsdWU9e3RoaXMucHJvcHMuc2hvcElkfSByZWFkT25seSAvPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbjxkaXYgaWQ9XCJkZWxldGVBdWN0aW9uTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249e1wiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1Y3Rpb25zL2RlbGV0ZS9cIit0aGlzLnN0YXRlLnRvRGVsZXRlQXVjdGlvbn0gbWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RGVsZXRlIEF1Y3Rpb248L2g0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIEF1Y3Rpb24/PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiRGVsZXRlXCIvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2hvcElkXCIgdmFsdWU9e3RoaXMucHJvcHMuc2hvcElkfSByZWFkT25seSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tZGItdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW1kYi10YXJnZXQ9XCIjbmF2YmFyRXhhbXBsZTAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhckV4YW1wbGUwMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyRXhhbXBsZTAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHRleHQtcHJpbWFyeVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ25JblwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayB0ZXh0LXByaW1hcnlcIiBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHRleHQtcHJpbWFyeVwiIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZHVjdHNcIj5Qcm9kdWN0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgdGV4dC1wcmltYXJ5XCIgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWN0aW9uc1wiPkF1Y3Rpb25zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9OyAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY29sLTMgbWUtNSBtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMucHJvZHVjdC5pbWFnZX0gY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiBzdHlsZT17e21heEhlaWdodDogMTc1fX0vPjxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3RoaXMucHJvcHMucHJvZHVjdC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtbXV0ZWRcIj5QcmljZSA6IHt0aGlzLnByb3BzLnByb2R1Y3QucHJpY2V9ICQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZHVjdHMvJyt0aGlzLnByb3BzLnByb2R1Y3QuaWR9IGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmlldyBNb3JlIERldGFpbHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vbWFpbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuL1Byb2R1Y3RDYXJkJ1xyXG5pbXBvcnQgQXVjdGlvbkNhcmQgZnJvbSAnLi9BdWN0aW9uQ2FyZCdcclxuaW1wb3J0IE5hdiBmcm9tICcuL05hdidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307ICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCB0b3BQcm9kdWN0cztcclxuICAgICAgICB0b3BQcm9kdWN0cyA9IHRoaXMucHJvcHMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT5cclxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9Lz4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0b3BBdWN0aW9ucztcclxuICAgICAgICB0b3BBdWN0aW9ucyA9IHRoaXMucHJvcHMuYXVjdGlvbnMubWFwKGF1Y3Rpb24gPT5cclxuICAgICAgICAgICAgPEF1Y3Rpb25DYXJkIGF1Y3Rpb249e2F1Y3Rpb259Lz4pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC40LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHBvcHBlcmpzL2NvcmVAMi4xMC4yL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtNyt6Q05qL0lxSjk1d28xNm9NdGZzS2JaOWNjRWgzMWVPejFIR3lEdUNRNndnbnlKTlNZZHJQYTAzcnRSMXpkQlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVFKSHR2R2htcjlYT0lwSTZZVnV0RysyUU9LOVQrWm5ONGt6Rk4xUnRLM3pFRkVJc3hobG1XbDUvWUVTdnBaMTNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT17e2JvcmRlckJvdHRvbTonNXB4IHNvbGlkIGJsdWUnLCBib3JkZXJUb3A6JzVweCBzb2xpZCBibHVlJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzNiNTk5OCd9fSBocmVmPVwiIyFcIiByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2stZlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM1NWFjZWUnfX0gaHJlZj1cIiMhXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ0YjM5J319IGhyZWY9XCIjIVwiIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJmYSBmYS1nb29nbGVcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjYWMyYmFjJ319IGhyZWY9XCIjIVwiIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJmYSBmYS1pbnN0YWdyYW1cIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LWluZm9cIj4gTWFya2V0ZXJhPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRleHQtY2VudGVyIG1iLTVcIj4gQmlkIG9uIHRoZSBNb3N0IENvbXBldGl0aXZlIEF1Y3Rpb25zITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5hZGV4Y2hhbmdlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTAvaW4tYXBwLWJpZGRpbmcucG5nXCIgY2xhc3M9XCJ3LTcwXCIgc3R5bGU9e3t3aWR0aDo3NTB9fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdGV4dC1jZW50ZXIgbWItNVwiPiBCdXkgVGhlIEJlc3QgUHJvZHVjdHMgQXZhaWxhYmxlIG9uIHRoZSBNYXJrZXQhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmludGVybmV0eC5jb20vZmlsZWFkbWluL19wcm9jZXNzZWRfLzAvYy9jc21fRS1Db21tZXJjZV9kY2MyNzE5ODE5LnBuZ1wiIGNsYXNzPVwidy03MFwiIHN0eWxlPXt7d2lkdGg6NzUwfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdGV4dC1jZW50ZXIgbWItNVwiPiBPdXIgVG9wIFByb2R1Y3RzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wUHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1wcmltYXJ5IHRleHQtY2VudGVyIG1iLTVcIj4gT3VyIFRvcCBBdWN0aW9uczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvcEF1Y3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbm1haW4uZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0czpjdHgucXVlcnkucHJvZHVjdHMsXHJcbiAgICAgICAgYXVjdGlvbnM6Y3R4LnF1ZXJ5LmF1Y3Rpb25zXHJcbiAgICB9XHJcbiAgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFuYWdlQXVjdGlvbnNJblNob3AiLCJBdWN0aW9uQ2FyZCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlciIsImF1Y3Rpb24iLCJpbWFnZSIsIm5hbWUiLCJnZXRIaWdoZXN0QmlkIiwiaWQiLCJIZWFkIiwidG9EZWxldGVBdWN0aW9uIiwidG9FZGl0QXVjdGlvbiIsImJpbmQiLCJiaWRzIiwibGVuZ3RoIiwibWF4IiwiY3VycmVudE51bWJlciIsImkiLCJhbW91bnQiLCJhdWN0aW9ucyIsInJvd3MiLCJtYXAiLCJjYXRlZ29yeSIsInNldFN0YXRlIiwicG9zaXRpb24iLCJib3R0b20iLCJzaG9wSWQiLCJOYXYiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJtYXhIZWlnaHQiLCJwcmljZSIsIm1haW4iLCJ0b3BQcm9kdWN0cyIsInByb2R1Y3RzIiwidG9wQXVjdGlvbnMiLCJib3JkZXJCb3R0b20iLCJib3JkZXJUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==