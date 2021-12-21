"use strict";
(() => {
var exports = {};
exports.id = "pages/views/AuctionDetail";
exports.ids = ["pages/views/AuctionDetail"];
exports.modules = {

/***/ "./pages/views/AuctionDetail.js":
/*!**************************************!*\
  !*** ./pages/views/AuctionDetail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuctionDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ManageAuctionsInShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageAuctionsInShop */ "./pages/views/ManageAuctionsInShop.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HES\\Desktop\\Capstone Project Code FINAL\\marketplace\\market\\pages\\views\\AuctionDetail.js";






class AuctionDetail extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let bids = this.props.bids;
    let rows;
    let addBid;

    if (bids) {
      rows = bids.map(bid => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
        class: "text-primary",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
          children: bid.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
          children: [bid.amount, " $"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
          children: bid.comment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this));
    }

    if (this.props.user) {
      addBid = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
        action: "http://localhost:3000/bids",
        method: "POST",
        class: "d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          class: "text-center text-primary",
          children: " Place a Bid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "form-floating",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "number",
              id: "name",
              class: "form-control",
              placeholder: "Enter Your Name",
              name: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              for: "name",
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "form-floating",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "text",
              id: "name",
              class: "form-control",
              placeholder: "Enter Your Name",
              name: "comment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              for: "name",
              children: "Comment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "hidden",
          value: this.props.user.id,
          name: "bidderId"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "hidden",
          value: this.props.auctionId,
          name: "auctionId"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "hidden",
          value: this.props.user.email,
          name: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "submit",
          class: "btn btn-primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this);
    } else {
      addBid = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          class: "text-center text-primary",
          children: " Place a Bid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
          class: "text-center text-danger mt-5",
          children: "To add a Bid, Please Login First"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "d-flex justify-content-evenly mt-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            class: "btn btn-primary",
            href: "http://localhost:3000/signIn",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            class: "btn btn-primary",
            href: "http://localhost:3000/register",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "../auctionDetail.module.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
          integrity: "sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
          integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "d-flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "card ms-5 mt-5 me-5 col-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "row g-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "col-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                src: this.props.image,
                class: "img-fluid rounded-start",
                style: {
                  height: 225
                },
                alt: "..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "col-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "card-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
                  class: "card-title",
                  children: this.props.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: this.props.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("small", {
                    class: "text-muted",
                    children: this.props.category
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: ["Highest Bid : ", _ManageAuctionsInShop__WEBPACK_IMPORTED_MODULE_2__.default.getHighestBid(this.props)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, this), addBid]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "ms-5 mt-3 col-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "d-flex justify-content-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
                class: "table bg-active table-bordered table-hover text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("caption", {
                  class: "caption-top",
                  children: "Bids on This Auction"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
                      children: " User Email "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
                      children: " Amount"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
                      children: " Comment"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
                  children: rows
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

}

AuctionDetail.getInitialProps = ctx => {
  console.log(ctx.query.user);
  console.log(ctx.query);
  return {
    auctionId: ctx.query.auction.id,
    name: ctx.query.auction.name,
    shopId: ctx.query.id,
    description: ctx.query.auction.description,
    category: ctx.query.auction.category,
    bids: ctx.query.auction.bids,
    user: ctx.query.user,
    image: ctx.query.auction.image
  };
};

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
var __webpack_exports__ = (__webpack_exec__("./pages/views/AuctionDetail.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5SU07QUFBQSxvQkFERjtBQXlLRjs7QUE1TytEOzs7Ozs7Ozs7O0FDSmpFOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldC8uL3BhZ2VzL3ZpZXdzL0F1Y3Rpb25EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vbWFya2V0Ly4vcGFnZXMvdmlld3MvTWFuYWdlQXVjdGlvbnNJblNob3AuanMiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWFya2V0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL2F1Y3Rpb25EZXRhaWwubW9kdWxlLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTWFuYWdlQXVjdGlvbnNJblNob3AgZnJvbSAnLi9NYW5hZ2VBdWN0aW9uc0luU2hvcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWN0aW9uRGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9OyAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmlkcyA9IHRoaXMucHJvcHMuYmlkcztcclxuICAgICAgICAgICAgbGV0IHJvd3M7XHJcbiAgICAgICAgICAgIGxldCBhZGRCaWQ7XHJcbiAgICAgICAgICAgIGlmKGJpZHMpe1xyXG4gICAgICAgICAgICAgICAgcm93cyA9IGJpZHMubWFwKGJpZCA9PiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2JpZC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YmlkLmFtb3VudH0gJDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YmlkLmNvbW1lbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VyKXtcclxuICAgICAgICAgICAgICAgIGFkZEJpZCA9XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYmlkc1wiIG1ldGhvZD1cIlBPU1RcIiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtcHJpbWFyeVwiPiBQbGFjZSBhIEJpZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPSdFbnRlciBZb3VyIE5hbWUnIG5hbWU9XCJhbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5BbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBOYW1lJyBuYW1lPVwiY29tbWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPkNvbW1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwidmFsdWU9e3RoaXMucHJvcHMudXNlci5pZH0gbmFtZT1cImJpZGRlcklkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3RoaXMucHJvcHMuYXVjdGlvbklkfSBuYW1lPVwiYXVjdGlvbklkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3RoaXMucHJvcHMudXNlci5lbWFpbH0gbmFtZT1cIm5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgYWRkQmlkPVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnlcIj4gUGxhY2UgYSBCaWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZGFuZ2VyIG10LTVcIj5UbyBhZGQgYSBCaWQsIFBsZWFzZSBMb2dpbiBGaXJzdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ25JblwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2F1Y3Rpb25EZXRhaWwubW9kdWxlLmNzc1wiLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHBvcHBlcmpzL2NvcmVAMi4xMC4yL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtNyt6Q05qL0lxSjk1d28xNm9NdGZzS2JaOWNjRWgzMWVPejFIR3lEdUNRNndnbnlKTlNZZHJQYTAzcnRSMXpkQlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUUpIdHZHaG1yOVhPSXBJNllWdXRHKzJRT0s5VCtabk40a3pGTjFSdEszekVGRUlzeGhsbVdsNS9ZRVN2cFoxM1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtcy01IG10LTUgbWUtNSBjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1hZ2V9IGNsYXNzPVwiaW1nLWZsdWlkIHJvdW5kZWQtc3RhcnRcIiBzdHlsZT17e2hlaWdodDoyMjV9fWFsdD1cIi4uLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt0aGlzLnByb3BzLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+e3RoaXMucHJvcHMuY2F0ZWdvcnl9PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IaWdoZXN0IEJpZCA6IHtNYW5hZ2VBdWN0aW9uc0luU2hvcC5nZXRIaWdoZXN0QmlkKHRoaXMucHJvcHMpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAge2FkZEJpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcy01IG10LTMgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGJnLWFjdGl2ZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJjYXB0aW9uLXRvcFwiPkJpZHMgb24gVGhpcyBBdWN0aW9uPC9jYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBVc2VyIEVtYWlsIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gQW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBDb21tZW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuQXVjdGlvbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdHgucXVlcnkudXNlcilcclxuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXVjdGlvbklkOmN0eC5xdWVyeS5hdWN0aW9uLmlkLFxyXG4gICAgICAgIG5hbWU6Y3R4LnF1ZXJ5LmF1Y3Rpb24ubmFtZSxcclxuICAgICAgICBzaG9wSWQ6Y3R4LnF1ZXJ5LmlkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOmN0eC5xdWVyeS5hdWN0aW9uLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNhdGVnb3J5OmN0eC5xdWVyeS5hdWN0aW9uLmNhdGVnb3J5LFxyXG4gICAgICAgIGJpZHM6Y3R4LnF1ZXJ5LmF1Y3Rpb24uYmlkcyxcclxuICAgICAgICB1c2VyOmN0eC5xdWVyeS51c2VyLFxyXG4gICAgICAgIGltYWdlOmN0eC5xdWVyeS5hdWN0aW9uLmltYWdlXHJcbiAgICB9XHJcbiAgICBcclxuICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlQXVjdGlvbnNJblNob3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgdG9EZWxldGVBdWN0aW9uOjAsXHJcblx0XHQgIHRvRWRpdEF1Y3Rpb246e31cclxuICAgICAgfTtcclxuXHJcblx0dGhpcy5nZXRIaWdoZXN0QmlkPU1hbmFnZUF1Y3Rpb25zSW5TaG9wLmdldEhpZ2hlc3RCaWQuYmluZCh0aGlzKTtcclxuXHJcbiAgfVxyXG5cdHN0YXRpYyBnZXRIaWdoZXN0QmlkKGF1Y3Rpb24pe1xyXG5cdFx0aWYoYXVjdGlvbi5iaWRzLmxlbmd0aCE9MCl7XHJcblx0XHRcdGxldCBtYXggPSAwO1xyXG5cdFx0XHR2YXIgY3VycmVudE51bWJlcjtcclxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8YXVjdGlvbi5iaWRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRjdXJyZW50TnVtYmVyPWF1Y3Rpb24uYmlkc1tpXS5hbW91bnRcclxuXHRcdFx0XHRpZihjdXJyZW50TnVtYmVyPm1heClcclxuXHRcdFx0XHRcdG1heD1jdXJyZW50TnVtYmVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBtYXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCJObyBCaWRzXCI7XHJcblx0fVxyXG5cclxuXHRcclxuXHJcbi8vICAgXHRoYW5kbGVOYW1lQ2hhbmdlKGV2ZW50KXtcclxuLy8gXHR0aGlzLnNldFN0YXRlKHt0b0VkaXRQcm9kdWN0OntuYW1lOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcbi8vIFx0aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UoZXZlbnQpe1xyXG4vLyBcdHRoaXMuc2V0U3RhdGUoe3RvRWRpdFByb2R1Y3Q6e2Rlc2NyaXB0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcbi8vIFx0aGFuZGxlUHJpY2VDaGFuZ2UoZXZlbnQpe1xyXG4vLyBcdHRoaXMuc2V0U3RhdGUoe3RvRWRpdFByb2R1Y3Q6e3ByaWNlOmV2ZW50LnRhcmdldC52YWx1ZX19KTtcclxuLy8gICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cdFxyXG4gICAgY29uc3QgYXVjdGlvbnMgPSB0aGlzLnByb3BzLmF1Y3Rpb25zO1xyXG4gICAgbGV0IHJvd3M7XHJcblx0XHJcbiAgICBpZihhdWN0aW9ucyl7XHJcblx0XHRcclxuICAgICAgICByb3dzID0gYXVjdGlvbnMubWFwKGF1Y3Rpb24gPT5cclxuXHJcblx0XHRcdFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnthdWN0aW9uLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2F1Y3Rpb24uY2F0ZWdvcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2F1Y3Rpb24uYmlkcy5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+IHt0aGlzLmdldEhpZ2hlc3RCaWQoYXVjdGlvbil9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2VkaXRBdWN0aW9uTW9kYWxcIiBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvRWRpdEF1Y3Rpb246YXVjdGlvbn0pfSBjbGFzcz1cImVkaXRcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdFwiPiYjeEUyNTQ7PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNkZWxldGVBdWN0aW9uTW9kYWxcIiBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvRGVsZXRlQXVjdGlvbjphdWN0aW9uLmlkfSl9IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkRlbGV0ZVwiPiYjeEU4NzI7PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXVjdGlvbnMvXCIrYXVjdGlvbi5pZH0+IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9zcGFuPjwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG5cdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFZhcmVsYStSb3VuZFwiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9tYW5hZ2VTaG9wc0luUHJvZmlsZS5tb2R1bGUuY3NzXCIvPiBcclxuXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14bFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlIG10LTUgdGV4dC1jZW50ZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS10aXRsZVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgdGV4dC1sZWZ0IG1iLTNcIj5NYW5hZ2UgWW91ciA8Yj4gQXVjdGlvbnM8L2I+PC9oMj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS02IHRleHQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNhZGRBdWN0aW9uTW9kYWxcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+JiN4RTE0Nzs8L2k+IDxzcGFuIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJywgYm90dG9tOjV9fT5BZGQgYSBOZXcgQXVjdGlvbjwvc3Bhbj48L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkNhdGVnb3J5PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkJpZHMgTnVtYmVyPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPiBIaWdoZXN0IEJpZCA8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IEVkaXQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IERlbGV0ZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD4gUHJldmlldzwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj4gICAgICAgIFxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCJhZGRBdWN0aW9uTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXVjdGlvbnNcIiBtZXRob2Q9XCJQT1NUXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5BZGQgYSBOZXcgQXVjdGlvbjwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2hvcElkXCIgdmFsdWU9e3RoaXMucHJvcHMuc2hvcElkfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJjYXRlZ29yeVwiPkNhdGVnb3J5PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwiY3VzdG9tLXNlbGVjdCB0bS1zZWxlY3QtYWNjb3VudHNcIiBuYW1lPVwiY2F0ZWdvcnlcIiBpZD1cImNhdGVnb3J5XCI+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkNsb3RoZXNcIj5DbG90aGVzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkZvb2RcIj5Gb29kPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkVsZWN0cm9uaWNzXCI+RWxlY3Ryb25pY3M8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiSG9tZXNcIj5Ib21lczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJTZXJ2aWNlc1wiPlNlcnZpY2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk90aGVyXCI+T3RoZXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5JbWFnZSA6IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImltYWdlXCIgcmVxdWlyZWQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHZhbHVlPVwiQWRkIEF1Y3Rpb25cIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBpZD1cImVkaXRBdWN0aW9uTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZHVjdHMvZWRpdC8xMGB9IG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkVkaXQgQXVjdGlvbjwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIkhvdXNlXCIgIHJlcXVpcmVkLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlBob25lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgID5BIG5ldyBIb3VzZSB0aGF0IG92ZXJsb29rcyB0aGUgc2VhLCA1IFJvb21zPC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwiY3VzdG9tLXNlbGVjdCB0bS1zZWxlY3QtYWNjb3VudHNcIiBuYW1lPVwiY2F0ZWdvcnlcIiBpZD1cImNhdGVnb3J5XCI+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJDbG90aGVzXCI+IENsb3RoZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkZvb2RcIj5Gb29kPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJFbGVjdHJvbmljc1wiPkVsZWN0cm9uaWNzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJIb21lc1wiPkhvbWVzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJTZXJ2aWNlc1wiPlNlcnZpY2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgdmFsdWU9XCJTYXZlXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNob3BJZFwiIHZhbHVlPXt0aGlzLnByb3BzLnNob3BJZH0gcmVhZE9ubHkgLz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiZGVsZXRlQXVjdGlvbk1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0PGZvcm0gYWN0aW9uPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWN0aW9ucy9kZWxldGUvXCIrdGhpcy5zdGF0ZS50b0RlbGV0ZUF1Y3Rpb259IG1ldGhvZD1cIlBPU1RcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkRlbGV0ZSBBdWN0aW9uPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBBdWN0aW9uPzwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+VGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS48L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIi8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2YWx1ZT1cIkRlbGV0ZVwiLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNob3BJZFwiIHZhbHVlPXt0aGlzLnByb3BzLnNob3BJZH0gcmVhZE9ubHkgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICA8Lz5cclxuICAgIClcclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJNYW5hZ2VBdWN0aW9uc0luU2hvcCIsIkF1Y3Rpb25EZXRhaWwiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiLCJiaWRzIiwicm93cyIsImFkZEJpZCIsIm1hcCIsImJpZCIsIm5hbWUiLCJhbW91bnQiLCJjb21tZW50IiwidXNlciIsImlkIiwiYXVjdGlvbklkIiwiZW1haWwiLCJpbWFnZSIsImhlaWdodCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJnZXRIaWdoZXN0QmlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiYXVjdGlvbiIsInNob3BJZCIsInRvRGVsZXRlQXVjdGlvbiIsInRvRWRpdEF1Y3Rpb24iLCJiaW5kIiwibGVuZ3RoIiwibWF4IiwiY3VycmVudE51bWJlciIsImkiLCJhdWN0aW9ucyIsInNldFN0YXRlIiwicG9zaXRpb24iLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9