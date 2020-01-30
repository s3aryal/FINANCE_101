(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Main/styles.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Main/styles.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*body {\n  background: #00151c;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}*/\n\n#chart {\n  background: #0e3040;\n  color: #67809f;\n  width: 100%;\n  height: 100%;\n}\n\n.tooltip {\n  position: absolute;\n  text-align: center;\n  width: 150px;\n  height: 38px;\n  padding: 2px;\n  border-radius: 5px;\n  font: 20px sans-serif;\n  background: lightsteelblue;\n  pointer-events: auto;\n}\n\n.tooltip:after {\n  box-sizing: border-box;\n  display: inline;\n  font-size: 15px;\n  width: 100%;\n  line-height: 0;\n  color: lightsteelblue;\n  content: \"\\25BC\";\n  position: absolute;\n  text-align: center;\n  top: 100%;\n  left: 0;\n}\n\n/*.flex-container {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n\n  -webkit-flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}*/\n\n/*.flex-item {\n  color: white;\n  text-align: left;\n  padding: 1em;\n\n  font-size: 0.9em;\n  letter-spacing: 0.01em;\n}*/\n\na {\n  color: #67809f;\n}\n\n.bars.up-day path {\n  stroke: #03a678;\n}\n\n.bars.down-day path {\n  stroke: #c0392b;\n}\n\n.bars.up-day rect {\n  fill: #03a678;\n}\n\n.bars.down-day rect {\n  fill: #c0392b;\n}\n\n@media screen and (max-width: 768px) {\n  .flex-container {\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NotFound/NotFound.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/NotFound/NotFound.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The below google font is overwriting my fonts in main comopnent, hence commented out */\n/* @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500'); */\n\n@-webkit-keyframes rocket-movement {\n    100% {\n        -webkit-transform: translate(1200px, -600px);\n    }\n}\n\n@keyframes rocket-movement {\n    100% {\n        -webkit-transform: translate(1200px, -600px);\n                transform: translate(1200px, -600px);\n    }\n}\n\n@-webkit-keyframes spin-earth {\n    100% {\n        -webkit-transform: rotate(-360deg);\n        -webkit-transition: -webkit-transform 20s;\n        transition: -webkit-transform 20s;\n        transition: transform 20s;\n        transition: transform 20s, -webkit-transform 20s;\n    }\n}\n\n@keyframes spin-earth {\n    100% {\n        -webkit-transform: rotate(-360deg);\n        transform: rotate(-360deg);\n        -webkit-transition: -webkit-transform 20s;\n        transition: -webkit-transform 20s;\n        transition: transform 20s;\n        transition: transform 20s, -webkit-transform 20s;\n    }\n}\n\n@-webkit-keyframes move-astronaut {\n    100% {\n        -webkit-transform: translate(-160px, -160px);\n    }\n}\n\n@keyframes move-astronaut {\n    100% {\n        -webkit-transform: translate(-160px, -160px);\n        transform: translate(-160px, -160px);\n    }\n}\n\n@-webkit-keyframes rotate-astronaut {\n    100% {\n        -webkit-transform: rotate(-720deg);\n    }\n}\n\n@keyframes rotate-astronaut {\n    100% {\n        -webkit-transform: rotate(-720deg);\n        transform: rotate(-720deg);\n    }\n}\n\n@-webkit-keyframes glow-star {\n    40% {\n        -webkit-opacity: 0.3;\n    }\n\n    90%,\n    100% {\n        -webkit-opacity: 1;\n        -webkit-transform: scale(1.2);\n    }\n}\n\n@keyframes glow-star {\n    40% {\n        -webkit-opacity: 0.3;\n        opacity: 0.3;\n    }\n\n    90%,\n    100% {\n        -webkit-opacity: 1;\n        opacity: 1;\n        -webkit-transform: scale(1.2);\n        transform: scale(1.2);\n        border-radius: 999999px;\n    }\n}\n\n.spin-earth-on-hover {\n\n    -webkit-transition: ease 200s !important;\n\n    transition: ease 200s !important;\n    -webkit-transform: rotate(-3600deg) !important;\n            transform: rotate(-3600deg) !important;\n}\n\nhtml,\nbody {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    font-family: 'Dosis', sans-serif;\n    font-weight: 300;\n    -webkit-user-select: none;\n    /* Safari 3.1+ */\n    -moz-user-select: none;\n    /* Firefox 2+ */\n    -ms-user-select: none;\n    /* IE 10+ */\n    user-select: none;\n    /* Standard syntax */\n}\n\n.bg-purple {\n    background: url(" + escape(__webpack_require__(/*! ./bg_purple.png */ "./src/Components/NotFound/bg_purple.png")) + ");\n    background-repeat: repeat-x;\n    background-size: cover;\n    background-position: left top;\n    height: 100vh;\n    overflow: hidden;\n\n}\n\n/* --------------------------- */\n\n\n.custom-navbar {\n    padding-top: 15px;\n}\n\n.brand-logo {\n    margin-left: 25px;\n    margin-top: 5px;\n    display: inline-block;\n}\n\n.navbar-links {\n    display: inline-block;\n    float: right;\n    margin-right: 15px;\n    text-transform: uppercase;\n\n\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    align-items: center;\n}\n\nli {\n\n    padding: 0px 15px;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    letter-spacing: 2px;\n    font-size: 12px;\n\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in;\n}\n\nli a:hover {\n    color: #ffcb39;\n}\n\n/* clear */\n.btn-request {\n    padding: 10px 25px;\n    border: 1px solid #FFCB39;\n    border-radius: 100px;\n    font-weight: 400;\n}\n\n.btn-request:hover {\n    background-color: #FFCB39;\n    color: #fff;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);\n}\n\n.btn-go-home {\n    position: relative;\n    z-index: 200;\n    margin: 15px auto;\n    width: 100px;\n    padding: 10px 15px;\n    border: 1px solid #FFCB39;\n    border-radius: 100px;\n    font-weight: 400;\n    display: block;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    letter-spacing: 2px;\n    font-size: 11px;\n\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in;\n}\n\n.btn-go-home:hover {\n    background-color: #FFCB39;\n    color: #fff;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);\n}\n\n/* clear */\n.central-body {\n    /*    width: 100%;*/\n    padding: 17% 5% 10% 5%;\n    text-align: center;\n}\n\n.objects img {\n    z-index: 90;\n    pointer-events: none;\n}\n\n/* ============================= */\n.object_rocket {\n    z-index: 95;\n    position: absolute;\n    -webkit-transform: translateX(-50px);\n            transform: translateX(-50px);\n    top: 75%;\n    pointer-events: none;\n    -webkit-animation: rocket-movement 200s linear infinite both running;\n            animation: rocket-movement 200s linear infinite both running;\n}\n\n.object_earth {\n    position: absolute;\n    top: 20%;\n    left: 15%;\n    z-index: 90;\n    /*    animation: spin-earth 100s infinite linear both;*/\n}\n\n.object_moon {\n    position: absolute;\n    top: 12%;\n    left: 25%;\n    /*\n    transform: rotate(0deg);\n    transition: transform ease-in 99999999999s;\n*/\n}\n\n.earth-moon {}\n\n.object_astronaut {\n    -webkit-animation: rotate-astronaut 200s infinite linear both alternate;\n            animation: rotate-astronaut 200s infinite linear both alternate;\n}\n\n.box_astronaut {\n    z-index: 110 !important;\n    position: absolute;\n    top: 60%;\n    right: 20%;\n    will-change: transform;\n    -webkit-animation: move-astronaut 50s infinite linear both alternate;\n            animation: move-astronaut 50s infinite linear both alternate;\n}\n\n.image-404 {\n    position: relative;\n    z-index: 100;\n    pointer-events: none;\n}\n\n.stars {\n    background: url(" + escape(__webpack_require__(/*! ./overlay_stars.svg */ "./src/Components/NotFound/overlay_stars.svg")) + ");\n    background-repeat: repeat;\n    background-size: contain;\n    background-position: left top;\n}\n\n.glowing_stars .star {\n    position: absolute;\n    border-radius: 100%;\n    background-color: #fff;\n    width: 3px;\n    height: 3px;\n    opacity: 0.3;\n    will-change: opacity;\n}\n\n.glowing_stars .star:nth-child(1) {\n    top: 80%;\n    left: 25%;\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 1s;\n            animation: glow-star 2s infinite ease-in-out alternate 1s;\n}\n\n.glowing_stars .star:nth-child(2) {\n    top: 20%;\n    left: 40%;\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 3s;\n            animation: glow-star 2s infinite ease-in-out alternate 3s;\n}\n\n.glowing_stars .star:nth-child(3) {\n    top: 25%;\n    left: 25%;\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 5s;\n            animation: glow-star 2s infinite ease-in-out alternate 5s;\n}\n\n.glowing_stars .star:nth-child(4) {\n    top: 75%;\n    left: 80%;\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 7s;\n            animation: glow-star 2s infinite ease-in-out alternate 7s;\n}\n\n.glowing_stars .star:nth-child(5) {\n    top: 90%;\n    left: 50%;\n    -webkit-animation: glow-star 2s infinite ease-in-out alternate 9s;\n            animation: glow-star 2s infinite ease-in-out alternate 9s;\n}\n\n@media only screen and (max-width: 600px) {\n    .navbar-links {\n        display: none;\n    }\n\n    .custom-navbar {\n        text-align: center;\n    }\n\n    .brand-logo img {\n        width: 120px;\n    }\n\n    .box_astronaut {\n        top: 70%;\n    }\n\n    .central-body {\n        padding-top: 25%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history */ "./src/history.js");
/* harmony import */ var _Components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/NotFound/NotFound */ "./src/Components/NotFound/NotFound.js");
/* harmony import */ var _Components_StockAnalytics_StockAnalyticsDashBoard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/StockAnalytics/StockAnalyticsDashBoard */ "./src/Components/StockAnalytics/StockAnalyticsDashBoard.js");
/* harmony import */ var _Components_AppDashBoard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/AppDashBoard */ "./src/Components/AppDashBoard.js");
/* harmony import */ var _Components_CSVParsing_CSVParsing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/CSVParsing/CSVParsing */ "./src/Components/CSVParsing/CSVParsing.js");
/* harmony import */ var _Components_BitCoin_BitCoin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/BitCoin/BitCoin */ "./src/Components/BitCoin/BitCoin.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/App.js";










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faFilter"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faDownload"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faCalendarAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faShip"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faAnchor"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faUser"]);

__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Router"], {
        history: _history__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        component: _Components_AppDashBoard__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        component: _Components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/AppDashBoard.js":
/*!****************************************!*\
  !*** ./src/Components/AppDashBoard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _SiteDesign_SiteDesign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SiteDesign/SiteDesign */ "./src/Components/SiteDesign/SiteDesign.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/AppDashBoard.js";





var theme = function theme(_theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])({
    palette: {
      type: _theme ? "dark" : "light",
      text: {
        main: "#000000"
      },
      primary: {
        main: _theme ? "#f32c2c" : "#f7f71c"
      }
    },
    typography: {
      useNextVariants: true
    }
  });
};

var AppDashBoard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppDashBoard, _Component);

  function AppDashBoard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppDashBoard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppDashBoard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      themeType: false,
      files: [],
      data: []
    };

    _this.handleThemeTypeChange = function () {
      _this.state.themeType ? _this.setState({
        themeType: false
      }) : _this.setState({
        themeType: true
      });
    };

    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppDashBoard, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          themeType = _this$state.themeType,
          data = _this$state.data;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: theme(themeType),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SiteDesign_SiteDesign__WEBPACK_IMPORTED_MODULE_7__["default"], {
        handleThemeTypeChange: this.handleThemeTypeChange,
        themeType: themeType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })));
    }
  }]);

  return AppDashBoard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AppDashBoard);

/***/ }),

/***/ "./src/Components/BitCoin/AllCryptoCurrencyBarGraph.js":
/*!*************************************************************!*\
  !*** ./src/Components/BitCoin/AllCryptoCurrencyBarGraph.js ***!
  \*************************************************************/
/*! exports provided: AllCryptoCurrencyBarGraph, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCryptoCurrencyBarGraph", function() { return AllCryptoCurrencyBarGraph; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/BitCoin/AllCryptoCurrencyBarGraph.js";


var ReactHighChart = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var AllCryptoCurrencyBarGraph =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AllCryptoCurrencyBarGraph, _Component);

  function AllCryptoCurrencyBarGraph() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AllCryptoCurrencyBarGraph);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AllCryptoCurrencyBarGraph).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AllCryptoCurrencyBarGraph, [{
    key: "render",
    value: function render() {
      var config = {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [[0, "rgb(255, 255, 255)"], [1, "rgb(247, 247, 152)"]]
          },
          polar: true,
          type: "column"
        },
        xAxis: {
          categories: this.props.xSeriesDataForValuationRatios,
          crosshair: true,
          labels: {
            align: "right",
            rotation: "-45"
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Numbers in dollars"
          }
        },
        series: [{
          name: "Other major Crypto Currency Latest Quotes",
          data: this.props.allCryptocurrencyData
        }],
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        title: {
          text: "Other major Crypto Currency Latest Quotes"
        },
        subtitle: {
          text: 'Source: <a href="https://financialmodelingprep.com/">financialmodelingprep.com</a>'
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ReactHighChart, {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    }
  }]);

  return AllCryptoCurrencyBarGraph;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (AllCryptoCurrencyBarGraph); // {console.log("FORMATTED CRYP DATA", this.state.allCryptocurrencyData)}

/***/ }),

/***/ "./src/Components/BitCoin/BitCoin.js":
/*!*******************************************!*\
  !*** ./src/Components/BitCoin/BitCoin.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _vx_curve__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vx/curve */ "./node_modules/@vx/curve/dist/vx-curve.es.js");
/* harmony import */ var _vx_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vx/grid */ "./node_modules/@vx/grid/dist/vx-grid.es.js");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vx/scale */ "./node_modules/@vx/scale/dist/vx-scale.es.js");
/* harmony import */ var _vx_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @vx/tooltip */ "./node_modules/@vx/tooltip/dist/vx-tooltip.es.js");
/* harmony import */ var _vx_event__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @vx/event */ "./node_modules/@vx/event/dist/vx-event.es.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _commonStyles_ModuleItemListStyles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../commonStyles/ModuleItemListStyles */ "./src/Components/commonStyles/ModuleItemListStyles.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _AllCryptoCurrencyBarGraph__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./AllCryptoCurrencyBarGraph */ "./src/Components/BitCoin/AllCryptoCurrencyBarGraph.js");









var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/BitCoin/BitCoin.js";

















var omit = __webpack_require__(/*! lodash.omit */ "./node_modules/lodash.omit/index.js"); // util


var formatDate = Object(d3_time_format__WEBPACK_IMPORTED_MODULE_19__["timeFormat"])("%b %d, '%y");

var min = function min(arr, fn) {
  return Math.min.apply(Math, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(arr.map(fn)));
};

var max = function max(arr, fn) {
  return Math.max.apply(Math, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(arr.map(fn)));
};

var extent = function extent(arr, fn) {
  return [min(arr, fn), max(arr, fn)];
}; // accessors


var xStock = function xStock(d) {
  return new Date(d.date);
};

var yStock = function yStock(d) {
  return d && d.close;
};

var bisectDate = Object(d3_array__WEBPACK_IMPORTED_MODULE_18__["bisector"])(function (d) {
  return new Date(d.date);
}).left; // Function to format the data received from "financialmodelingprep" for all crypto currency price

var getDateAndClosingPrice = function getDateAndClosingPrice(obj) {
  var result = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Filter out currencies that are too small in terms of their closing price
      if (obj[key].Price > 20) {
        result.push([obj[key].name, obj[key].Price]);
      }
    }
  }

  return result;
};

var BitCoin =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(BitCoin, _React$Component);

  function BitCoin(props) {
    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BitCoin);

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BitCoin).call(this, props));
    _this.state = {
      data: [],
      allCryptocurrencyData: []
    };
    _this.handleTooltip = _this.handleTooltip.bind(Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BitCoin, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var res, data;
        return _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.coindesk.com/v1/bpi/historical/close.json");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                axios__WEBPACK_IMPORTED_MODULE_22___default.a.get("https://financialmodelingprep.com/api/cryptocurrency?datatype=json").then(function (res) {
                  var crypData = omit(res.data, ["BTC"]); // const crypData = res.data;
                  // console.log("RECEIVED DATA ", crypData);

                  _this2.setState({
                    data: Object.keys(data.bpi).map(function (item) {
                      return {
                        date: item,
                        close: data && data.bpi && data.bpi[item]
                      };
                    }),
                    allCryptocurrencyData: getDateAndClosingPrice(crypData)
                  });
                }).catch(function (err) {
                  console.log("Error happened while fetching data", err);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handleTooltip",
    value: function handleTooltip(_ref) {
      var event = _ref.event,
          data = _ref.data,
          xStock = _ref.xStock,
          xScale = _ref.xScale,
          yScale = _ref.yScale;
      var showTooltip = this.props.showTooltip;

      var _localPoint = Object(_vx_event__WEBPACK_IMPORTED_MODULE_17__["localPoint"])(event),
          x = _localPoint.x;

      var x0 = xScale.invert(x);
      var index = bisectDate(data, x0, 1);
      var d0 = data[index - 1];
      var d1 = data[index];
      var d = d0;

      if (d1 && d1.date) {
        d = x0 - xStock(d0.date) > xStock(d1.date) - x0 ? d1 : d0;
      }

      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: d && yScale(d.close)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var width = 1200;
      var height = 250;
      var margin = {
        top: 60,
        bottom: 2,
        left: 80,
        right: 0
      };
      var _this$props = this.props,
          classes = _this$props.classes,
          hideTooltip = _this$props.hideTooltip,
          tooltipData = _this$props.tooltipData,
          tooltipTop = _this$props.tooltipTop,
          tooltipLeft = _this$props.tooltipLeft,
          events = _this$props.events;
      if (width < 10) return null; // bounds

      var xMax = width - margin.left - margin.right;
      var yMax = height - margin.top - margin.bottom; // scales

      var xScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_15__["scaleTime"])({
        range: [0, xMax],
        domain: extent(this.state.data, xStock)
      });
      var yScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_15__["scaleLinear"])({
        range: [yMax, 0],
        domain: [0, max(this.state.data, yStock) + yMax / 3],
        nice: true
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          overflowX: "auto"
        },
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          marginTop: "3%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "h5",
        component: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Bit Coin Price Graph"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_20__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        xs: "12",
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
        ref: function ref(s) {
          return _this3.svg = s;
        },
        width: width,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "#32deaa",
        rx: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("stop", {
        offset: "0%",
        stopColor: "#FFFFFF",
        stopOpacity: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("stop", {
        offset: "100%",
        stopColor: "#FFFFFF",
        stopOpacity: 0.2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_vx_grid__WEBPACK_IMPORTED_MODULE_14__["GridRows"], {
        lineStyle: {
          pointerEvents: "none"
        },
        scale: yScale,
        width: xMax,
        strokeDasharray: "2,2",
        stroke: "rgba(255,255,255,0.3)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_vx_grid__WEBPACK_IMPORTED_MODULE_14__["GridColumns"], {
        lineStyle: {
          pointerEvents: "none"
        },
        scale: xScale,
        height: yMax,
        strokeDasharray: "2,2",
        stroke: "rgba(255,255,255,0.3)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_12__["AreaClosed"], {
        data: this.state.data,
        x: function x(d) {
          return xScale(xStock(d));
        },
        y: function y(d) {
          return yScale(yStock(d));
        },
        yScale: yScale,
        strokeWidth: 1,
        stroke: "url(#gradient)",
        fill: "url(#gradient)",
        curve: _vx_curve__WEBPACK_IMPORTED_MODULE_13__["curveMonotoneX"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_12__["Bar"], {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "transparent",
        rx: 14,
        data: this.state.data,
        onTouchStart: function onTouchStart(event) {
          return _this3.handleTooltip({
            event: event,
            xStock: xStock,
            xScale: xScale,
            yScale: yScale,
            data: _this3.state.data
          });
        },
        onTouchMove: function onTouchMove(event) {
          return _this3.handleTooltip({
            event: event,
            xStock: xStock,
            xScale: xScale,
            yScale: yScale,
            data: _this3.state.data
          });
        },
        onMouseMove: function onMouseMove(event) {
          return _this3.handleTooltip({
            event: event,
            xStock: xStock,
            xScale: xScale,
            yScale: yScale,
            data: _this3.state.data
          });
        },
        onMouseLeave: function onMouseLeave(event) {
          return hideTooltip();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }), tooltipData && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_12__["Line"], {
        from: {
          x: tooltipLeft,
          y: 0
        },
        to: {
          x: tooltipLeft,
          y: yMax
        },
        stroke: "rgba(92, 119, 235, 1.000)",
        strokeWidth: 2,
        style: {
          pointerEvents: "none"
        },
        strokeDasharray: "2,2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("circle", {
        cx: tooltipLeft,
        cy: tooltipTop + 1,
        r: 4,
        fill: "black",
        fillOpacity: 0.1,
        stroke: "black",
        strokeOpacity: 0.1,
        strokeWidth: 2,
        style: {
          pointerEvents: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("circle", {
        cx: tooltipLeft,
        cy: tooltipTop,
        r: 4,
        fill: "rgba(92, 119, 235, 1.000)",
        stroke: "white",
        strokeWidth: 2,
        style: {
          pointerEvents: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }))), tooltipData && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_vx_tooltip__WEBPACK_IMPORTED_MODULE_16__["Tooltip"], {
        top: tooltipTop - 12,
        left: tooltipLeft + 12,
        style: {
          backgroundColor: "rgba(92, 119, 235, 1.000)",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "$".concat(yStock(tooltipData))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_vx_tooltip__WEBPACK_IMPORTED_MODULE_16__["Tooltip"], {
        top: yMax - 14,
        left: tooltipLeft,
        style: {
          transform: "translateX(-50%)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, formatDate(xStock(tooltipData))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          marginTop: "2%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_AllCryptoCurrencyBarGraph__WEBPACK_IMPORTED_MODULE_24__["default"], {
        allCryptocurrencyData: this.state.allCryptocurrencyData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      })));
    }
  }]);

  return BitCoin;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component); // export default withTooltip(BitCoin);


/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["withStyles"])(_commonStyles_ModuleItemListStyles__WEBPACK_IMPORTED_MODULE_21__["styles"])(Object(_vx_tooltip__WEBPACK_IMPORTED_MODULE_16__["withTooltip"])(BitCoin)));
/* Understanding the setState mechanism - Basically I have to convert and plain object to an array of objects with 2 fields added ('date' and 'close')

A> From Coindesk API - I will get the below data

const data = {
	bpi: {
		"2019-03-26": 3945.325,
		"2019-03-27": 4051.9033,
		"2019-03-28": 4039.0017,
		"2019-03-29": 4119.0183,
		"2019-03-30": 4117.8483
	},
	disclaimer:
		"This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
	time: {
		updated: "Apr 26, 2019 00:03:00 UTC",
		updatedISO: "2019-04-26T00:03:00+00:00"
	}
};

B> But I need the data (i.e. my state) in the below format

[ { date: '2019-03-26', close: 3945.325 },
  { date: '2019-03-27', close: 4051.9033 },
  { date: '2019-03-28', close: 4039.0017 },
  { date: '2019-03-29', close: 4119.0183 },
  { date: '2019-03-30', close: 4117.8483 } ]

C> Hence, first I get all the dates from the API-data with Object.keys() which will return me all the keys of the original received objects as an array

this.setState({
      data: Object.keys(data.bpi).map(item => {
        return {
          date: item,
          close: data.bpi[item]
        };
      })
    });
*/

/***/ }),

/***/ "./src/Components/CSVParsing/CSVParsing.js":
/*!*************************************************!*\
  !*** ./src/Components/CSVParsing/CSVParsing.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _commonStyles_ModuleItemListStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commonStyles/ModuleItemListStyles */ "./src/Components/commonStyles/ModuleItemListStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _CSVParsingChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CSVParsingChart */ "./src/Components/CSVParsing/CSVParsingChart.js");





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/CSVParsing/CSVParsing.js";









var omit = __webpack_require__(/*! lodash.omit */ "./node_modules/lodash.omit/index.js");

var flatten = __webpack_require__(/*! lodash.flatten */ "./node_modules/lodash.flatten/index.js"); // Function to return the data as an array of arrays for rendering the ReactHighstock data. But if I am not rendering the stock data (instead only a horizontal line chart then use the next two functions instead formattedDataForXAxisForHighChart() and formattedDataForYAxisForHighChart()  )


var formattedDataForHighChartsStocks = function formattedDataForHighChartsStocks(data) {
  return data.map(function (obj) {
    var omittedObject = omit(obj, ["Open", "High", "Low", "Adj Close", "Volume"]);
    return Object.values(omittedObject);
  });
}; // Two Functions to return the data as an array XAxis values and YAxis values for rendering the ReactHighChart data. But if I am rendering the stock data - then use the above function instead formattedDataForHighChartsStocks ()


var formattedDataForXAxisForHighChart = function formattedDataForXAxisForHighChart(data) {
  var result = [];
  data.map(function (obj, index) {
    var omittedObject = omit(obj, ["Open", "High", "Low", "Close", "Adj Close", "Volume"]);
    return result[index] = Object.values(omittedObject);
  });
  return flatten(result);
};

var formattedDataForYAxisForHighChart = function formattedDataForYAxisForHighChart(data) {
  var result = [];
  data.map(function (obj, index) {
    var omittedObject = omit(obj, ["Date", "Open", "High", "Low", "Adj Close", "Volume"]);
    return result[index] = Object.values(omittedObject);
  });
  return flatten(result);
}; // const resultData = _.flatten(formattedDataForHighChartsLodash(data));


var dropzoneStyle = {
  width: 250,
  height: 90,
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5,
  margin: "0 auto"
};

var CSVParsing =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CSVParsing, _Component);

  function CSVParsing() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CSVParsing);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CSVParsing)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      files: [],
      data: [],
      tableState: {},
      rowsPerPage: 10
    };

    _this.onChangeRowsPerPage = function (rowsPerPage) {
      _this.setState({
        rowsPerPage: rowsPerPage
      });
    };

    _this.onDrop = function (files) {
      var file = files[0];

      if (file.type === "text/csv") {
        var reader = new FileReader();

        reader.onload = function () {
          var csv = reader.result;

          var _parse = Object(papaparse__WEBPACK_IMPORTED_MODULE_7__["parse"])(csv, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true
          }),
              data = _parse.data,
              fields = _parse.meta.fields;

          _this.setState({
            data: data
          });
        };

        reader.onabort = function () {
          return alert("File reading was aborted.");
        };

        reader.onerror = function () {
          return alert("File reading has failed.");
        };

        reader.readAsBinaryString(file);
      }
    };

    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CSVParsing, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var data = this.state.data;
      var dataForTableRendering = data.length !== 0 ? data.map(function (i) {
        return Object.values(i);
      }) : null;
      var formattedDataForChartStoks = formattedDataForHighChartsStocks(data);
      var formattedXAxisDataForChartLine = formattedDataForXAxisForHighChart(data);
      var formattedYAxisDataForChartLine = formattedDataForYAxisForHighChart(data); // console.log("PARSED DATA IS ", formattedDataForChart);

      var columns = data.length !== 0 ? data.map(function (i) {
        return Object.keys(i);
      })[0] : null;
      var options = {
        filterType: "dropdown",
        responsive: "scroll",
        selectableRows: true,
        rowsPerPage: this.state.tableState ? this.state.tableState.rowsPerPage : 10,
        onChangeRowsPerPage: this.onChangeRowsPerPage,
        activeColumn: this.state.tableState ? this.state.tableState.activeColumn : 0,
        onTableChange: function onTableChange(action, tableState) {
          // console.log("taBLE STATE IS ", JSON.stringify(tableState));
          _this2.setState({
            tableState: tableState
          });
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginTop: "50px"
        },
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        style: dropzoneStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onDrop: this.onDrop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", Object.assign({}, getRootProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", Object.assign({}, getInputProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, "Drag 'n' drop some files here, or click to select files")));
      })), data.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(mui_datatables__WEBPACK_IMPORTED_MODULE_8___default.a, {
        title: "MSFT Stock",
        data: dataForTableRendering,
        columns: columns,
        options: options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CSVParsingChart__WEBPACK_IMPORTED_MODULE_12__["default"], {
        formattedDataForChartStoks: formattedDataForChartStoks,
        formattedXAxisDataForChartLine: formattedXAxisDataForChartLine,
        formattedYAxisDataForChartLine: formattedYAxisDataForChartLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })) : null));
    }
  }]);

  return CSVParsing;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(_commonStyles_ModuleItemListStyles__WEBPACK_IMPORTED_MODULE_10__["styles"])(CSVParsing));
/*
{console.log("FORMATTED DATA IS ", dataForTableRendering)}
*/

/* 1> Explanation of why I need to the function formattedDataForHighChartsStocks()

I get the data as below

const data = [
	{
		Date: "2019-03-26",
		Open: 118.620003,
		High: 118.709999,
		Low: 116.849998,
		Close: 117.910004
	},
	{
		Date: "2019-03-27",
		Open: 117.879997,
		High: 118.209999,
		Low: 115.519997,
		Close: 116.769997
	}
];

But for HighChartsStocks  - i.e. when I am using the below way of importing

const ReactHighstock = require("react-highcharts/ReactHighstock.src")

I need the data as below

formattedData = [ [ '2019-03-26', 117.910004 ], [ '2019-03-27', 116.769997 ] ]


2>

 */

/***/ }),

/***/ "./src/Components/CSVParsing/CSVParsingChart.js":
/*!******************************************************!*\
  !*** ./src/Components/CSVParsing/CSVParsingChart.js ***!
  \******************************************************/
/*! exports provided: CSVParsingChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVParsingChart", function() { return CSVParsingChart; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/CSVParsing/CSVParsingChart.js";
 // const ReactHighstock = require("react-highcharts/ReactHighstock.src");

var ReactHighstock = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var CSVParsingChart =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CSVParsingChart, _Component);

  function CSVParsingChart() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CSVParsingChart);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CSVParsingChart).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CSVParsingChart, [{
    key: "render",
    value: function render() {
      var config = {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [[0, "rgb(255, 255, 255)"], [1, "rgb(247, 247, 152)"]]
          },
          polar: true,
          type: "line"
        },
        xAxis: {
          categories: this.props.formattedXAxisDataForChartLine,
          labels: {
            align: "right",
            rotation: "-45"
          }
        },
        series: [{
          name: "MSFT",
          data: this.props.formattedYAxisDataForChartLine,
          tooltip: {
            valueDecimals: 2
          }
        }],
        title: {
          text: "MSFT Stock Price"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ReactHighstock, {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), ");");
    }
  }]);

  return CSVParsingChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (CSVParsingChart);
/*
series: [
        {
          name: "MSFT",
          data: this.props.formattedDataForChartStoks,
          tooltip: {
            valueDecimals: 2
          }
        }
      ]
*/

/***/ }),

/***/ "./src/Components/Main/MainDashboard.js":
/*!**********************************************!*\
  !*** ./src/Components/Main/MainDashboard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _commonStyles_ModuleItemListStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commonStyles/ModuleItemListStyles */ "./src/Components/commonStyles/ModuleItemListStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _CSVParsing_CSVParsingChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../CSVParsing/CSVParsingChart */ "./src/Components/CSVParsing/CSVParsingChart.js");
/* harmony import */ var _StockChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./StockChart */ "./src/Components/Main/StockChart.js");





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/Main/MainDashboard.js";





 // import { styles } from "./styles.css";





var omit = __webpack_require__(/*! lodash.omit */ "./node_modules/lodash.omit/index.js");

var flatten = __webpack_require__(/*! lodash.flatten */ "./node_modules/lodash.flatten/index.js");

var dropzoneStyle = {
  width: 250,
  height: 90,
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5,
  margin: "0 auto"
};

var formattedDataForHighChartsStocks = function formattedDataForHighChartsStocks(data) {
  return data.map(function (obj) {
    var omittedObject = omit(obj, ["Open", "High", "Low", "Adj Close", "Volume"]);
    return Object.values(omittedObject);
  });
}; // Two Functions to return the data as an array XAxis values and YAxis values for rendering the ReactHighChart data. But if I am rendering the stock data - then use the above function instead formattedDataForHighChartsStocks ()


var formattedDataForXAxisForHighChart = function formattedDataForXAxisForHighChart(data) {
  var result = [];
  data.map(function (obj, index) {
    var omittedObject = omit(obj, ["Open", "High", "Low", "Close", "Adj Close", "Volume"]);
    return result[index] = Object.values(omittedObject);
  });
  return flatten(result);
};

var formattedDataForYAxisForHighChart = function formattedDataForYAxisForHighChart(data) {
  var result = [];
  data.map(function (obj, index) {
    var omittedObject = omit(obj, ["Date", "Open", "High", "Low", "Adj Close", "Volume"]);
    return result[index] = Object.values(omittedObject);
  });
  return flatten(result);
};

var MainDashboard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainDashboard, _Component);

  function MainDashboard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainDashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainDashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      files: [],
      data: [],
      tableState: {},
      rowsPerPage: 10
    };
    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainDashboard, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var data = this.state.data;
      var dataForTableRendering = data.length !== 0 ? data.map(function (i) {
        return Object.values(i);
      }) : null;
      var formattedDataForChartStoks = formattedDataForHighChartsStocks(data);
      var formattedXAxisDataForChartLine = formattedDataForXAxisForHighChart(data);
      var formattedYAxisDataForChartLine = formattedDataForYAxisForHighChart(data);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginTop: "50px"
        },
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_StockChart__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))));
    }
  }]);

  return MainDashboard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(_commonStyles_ModuleItemListStyles__WEBPACK_IMPORTED_MODULE_10__["styles"])(MainDashboard)); // <React.Fragment>
//   <p> NIGGA NIGGA NIGGA </p>
//   <div style={{ marginTop: "50px" }} className={classes.root}>
//   </div>
//   <div id="chart"/>
//   <script src="StockChart.js"/>
// </React.Fragment>

/*
{console.log("FORMATTED DATA IS ", dataForTableRendering)}
*/

/* 1> Explanation of why I need to the function formattedDataForHighChartsStocks()

I get the data as below

const data = [
	{
		Date: "2019-03-26",
		Open: 118.620003,
		High: 118.709999,
		Low: 116.849998,
		Close: 117.910004
	},
	{
		Date: "2019-03-27",
		Open: 117.879997,
		High: 118.209999,
		Low: 115.519997,
		Close: 116.769997
	}
];

But for HighChartsStocks  - i.e. when I am using the below way of importing

const ReactHighstock = require("react-highcharts/ReactHighstock.src")

I need the data as below

formattedData = [ [ '2019-03-26', 117.910004 ], [ '2019-03-27', 116.769997 ] ]


2>

 */

/***/ }),

/***/ "./src/Components/Main/StockChart.js":
/*!*******************************************!*\
  !*** ./src/Components/Main/StockChart.js ***!
  \*******************************************/
/*! exports provided: StockChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockChart", function() { return StockChart; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ "./src/Components/Main/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/Main/StockChart.js";



var chartStyles = {
  background: '#0e3040',
  color: '#67809f',
  width: '1000%',
  height: '1200%'
};
var StockChart =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StockChart, _Component);

  function StockChart(props) {
    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StockChart);

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StockChart).call(this, props));
    _this.currentData = [];
    _this.dividendData = [];
    _this.bollingerBandsData = undefined;
    _this.movingAverageData = undefined;
    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StockChart, [{
    key: "loadData",
    value: function loadData() {
      var selectedDataset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vig';
      var loadFile = '';

      if (selectedDataset === 'vig') {
        loadFile = 'sample-data-vig.json';
      } else if (selectedDataset === 'vti') {
        loadFile = 'sample-data-vti.json';
      } else if (selectedDataset === 'vea') {
        loadFile = 'sample-data-vea.json';
      }

      return d3__WEBPACK_IMPORTED_MODULE_5__["json"](loadFile).then(function (data) {
        var chartResultsData = data['chart']['result'][0];
        var quoteData = chartResultsData['indicators']['quote'][0];
        return {
          dividends: Object.values(chartResultsData['events']['dividends']).map(function (res) {
            return {
              date: new Date(res['date'] * 1000),
              yield: res['amount']
            };
          }),
          quote: chartResultsData['timestamp'].map(function (time, index) {
            return {
              date: new Date(time * 1000),
              high: quoteData['high'][index],
              low: quoteData['low'][index],
              open: quoteData['open'][index],
              close: quoteData['close'][index],
              volume: quoteData['volume'][index]
            };
          })
        };
      });
    }
  }, {
    key: "calculateMovingAverage",
    value: function calculateMovingAverage(data, numberOfPricePoints) {
      return data.map(function (row, index, total) {
        var start = Math.max(0, index - numberOfPricePoints); //const end = index + numberOfPricePoints;

        var end = index;
        var subset = total.slice(start, end + 1);
        var sum = subset.reduce(function (a, b) {
          return a + b['close'];
        }, 0);
        return {
          date: row['date'],
          average: sum / subset.length
        };
      });
    }
  }, {
    key: "calculateBollingerBands",
    value: function calculateBollingerBands(data, numberOfPricePoints) {
      var sumSquaredDifference = 0;
      return data.map(function (row, index, total) {
        var start = Math.max(0, index - numberOfPricePoints);
        var end = index;
        var subset = total.slice(start, end + 1);
        var sum = subset.reduce(function (a, b) {
          return a + b['close'];
        }, 0);
        var sumSquaredDifference = subset.reduce(function (a, b) {
          var average = sum / subset.length;
          var dfferenceFromMean = b['close'] - average;
          var squaredDifferenceFromMean = Math.pow(dfferenceFromMean, 2);
          return a + squaredDifferenceFromMean;
        }, 0);
        var variance = sumSquaredDifference / subset.length;
        return {
          date: row['date'],
          average: sum / subset.length,
          standardDeviation: Math.sqrt(variance),
          upperBand: sum / subset.length + Math.sqrt(variance) * 2,
          lowerBand: sum / subset.length - Math.sqrt(variance) * 2
        };
      });
    }
  }, {
    key: "initialiseChart",
    value: function initialiseChart(data) {
      var _this2 = this;

      var thisYearStartDate = new Date(2017, 11, 31);
      var nextYearStartDate = new Date(2019, 0, 1); // remove invalid data points

      var validData = data['quote'].filter(function (row) {
        return row['high'] && row['low'] && row['close'] && row['open'];
      }); // filter out data based on time period

      this.currentData = validData.filter(function (row) {
        if (row['date']) {
          return row['date'] >= thisYearStartDate && row['date'] < nextYearStartDate;
        }
      }); // calculates simple moving average over 50 days

      this.movingAverageData = this.calculateMovingAverage(validData, 49); // calculates simple moving average, and standard deviation over 20 days

      this.bollingerBandsData = this.calculateBollingerBands(validData, 19);
      this.margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 20
      };
      this.width = window.innerWidth - this.margin.left - this.margin.right; // Use the window's width

      this.height = window.innerHeight - this.margin.top - this.margin.bottom; // Use the window's height
      // find data range

      var xMin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](this.currentData, function (d) {
        return d['date'];
      });
      var xMax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](this.currentData, function (d) {
        return d['date'];
      });
      var yMin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](this.currentData, function (d) {
        return d['close'];
      });
      var yMax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](this.currentData, function (d) {
        return d['close'];
      }); // scale using range

      this.xScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleTime"]().domain([xMin, xMax]).range([0, this.width]);
      this.yScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([yMin - 5, yMax + 4]).range([this.height, 0]); // add chart SVG to the page

      var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').append('svg').attr('width', this.width + this.margin['left'] + this.margin['right']).attr('height', this.height + this.margin['top'] + this.margin['bottom']).append('g').attr('transform', "translate(".concat(this.margin['left'], ", ").concat(this.margin['top'], ")")); // create the axes component

      this.xAxis = svg.append('g').attr('class', 'xAxis').attr('transform', "translate(0, ".concat(this.height, ")")).call(d3__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](this.xScale));
      this.yAxis = svg.append('g').attr('class', 'yAxis').attr('transform', "translate(".concat(this.width, ", 0)")).call(d3__WEBPACK_IMPORTED_MODULE_5__["axisRight"](this.yScale));
      svg.append('g').attr('id', 'leftAxis').attr('transform', "translate(0, 0)"); // define x and y crosshair properties

      var focus = svg.append('g').attr('class', 'focus').style('display', 'none');
      focus.append('circle').attr('r', 4.5);
      focus.append('line').classed('x', true);
      focus.append('line').classed('y', true);
      svg.append('rect').attr('class', 'overlay').attr('width', this.width).attr('height', this.height);
      d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.overlay').style('fill', 'none').style('pointer-events', 'all');
      d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.focus line').style('fill', 'none').style('stroke', '#67809f').style('stroke-width', '1.5px').style('stroke-dasharray', '3 3'); // get VIG dividend data for year of 2018

      this.dividendData = data['dividends'].filter(function (row) {
        if (row['date']) {
          return row['date'] >= thisYearStartDate && row['date'] < nextYearStartDate;
        }
      });
      svg.append('clipPath').attr('id', 'clip').append('rect').attr('width', this.width).attr('height', this.height); // group volume series bar charts, and with clip-path attribute

      svg.append('g').attr('id', 'volume-series').attr('clip-path', 'url(#clip)'); // group dividend symbols, and with clip-path attribute

      svg.append('g').attr('id', 'dividends').attr('clip-path', 'url(#clip)'); // candlesticks, and with clip-path attribute

      svg.append('g').attr('id', 'candlesticks-series').attr('clip-path', 'url(#clip)'); // ohlc, and with clip-path attribute

      svg.append('g').attr('id', 'ohlc-series').attr('clip-path', 'url(#clip)'); // generates the rest of the graph

      this.updateChart();
      /* Handle zoom and pan */

      this.zoom = d3__WEBPACK_IMPORTED_MODULE_5__["zoom"]().scaleExtent([1, 10]).translateExtent([[0, 0], [this.width, this.height]]) // pan limit
      .extent([[0, 0], [this.width, this.height]]) // zoom limit
      .on('zoom', function (d, i, nodes) {
        return _this2.zoomed(d, i, nodes);
      });
      d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').call(this.zoom);
    }
  }, {
    key: "zoomed",
    value: function zoomed(d, i, nodes) {
      var _this3 = this;

      var xAxis = d3__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](this.xScale);
      var yAxis = d3__WEBPACK_IMPORTED_MODULE_5__["axisRight"](this.yScale);
      var ohlcLine = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
        return d['x'];
      }).y(function (d) {
        return d['y'];
      });
      var candlesticksLine = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
        return d['x'];
      }).y(function (d) {
        return d['y'];
      });
      var tickWidth = 5;
      var bodyWidth = 5; // only fire the zoomed function when an actual event is triggered, rather than on every update

      if (d3__WEBPACK_IMPORTED_MODULE_5__["event"].sourceEvent || d3__WEBPACK_IMPORTED_MODULE_5__["event"].transform.k !== 1) {
        // create new scale ojects based on zoom/pan event
        var updatedXScale = d3__WEBPACK_IMPORTED_MODULE_5__["event"].transform.rescaleX(this.xScale);
        var updatedYScale = d3__WEBPACK_IMPORTED_MODULE_5__["event"].transform.rescaleY(this.yScale); // update axes

        var xMin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](this.currentData, function (d) {
          return d['date'];
        });
        var xMax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](this.currentData, function (d) {
          return d['date'];
        });
        var xRescale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleTime"]().domain([xMin, xMax]).range([0, this.width]);
        this.xScale.domain(d3__WEBPACK_IMPORTED_MODULE_5__["event"].transform.rescaleX(xRescale).domain());
        this.yAxis.call(yAxis.scale(updatedYScale));
        this.xAxis.call(xAxis.scale(updatedXScale)); // update close price and moving average lines based on zoom/pan

        var updateClosePriceChartPlot = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return updatedXScale(d['date']);
        }).y(function (d) {
          return updatedYScale(d['close']);
        });
        var updateMovingAverageLinePlot = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return updatedXScale(d['date']);
        }).y(function (d) {
          return updatedYScale(d['average']);
        }).curve(d3__WEBPACK_IMPORTED_MODULE_5__["curveBasis"]);
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.moving-average-line').attr('d', updateMovingAverageLinePlot);
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.price-chart').attr('d', updateClosePriceChartPlot); // update dividends based on zoom/pan

        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.dividend-group').attr('transform', function (d, i) {
          return "translate(".concat(updatedXScale(d['date']), ",").concat(_this3.height - 80, ")");
        }); // update volume series based on zoom/pan

        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.vol').attr('x', function (d) {
          return updatedXScale(d['date']);
        }); // update ohlc series based on zoom/pan

        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.ohlc .high-low').attr('d', function (d) {
          return ohlcLine([{
            x: updatedXScale(d['date']),
            y: updatedYScale(d['high'])
          }, {
            x: updatedXScale(d['date']),
            y: updatedYScale(d['low'])
          }]);
        });
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.open-tick').attr('d', function (d) {
          return ohlcLine([{
            x: updatedXScale(d['date']) - tickWidth,
            y: updatedYScale(d['open'])
          }, {
            x: updatedXScale(d['date']),
            y: updatedYScale(d['open'])
          }]);
        });
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.close-tick').attr('d', function (d) {
          return ohlcLine([{
            x: updatedXScale(d['date']),
            y: updatedYScale(d['close'])
          }, {
            x: updatedXScale(d['date']) + tickWidth,
            y: updatedYScale(d['close'])
          }]);
        }); // update candlesticks series based on zoom/pan

        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.candlestick .high-low').attr('d', function (d) {
          return candlesticksLine([{
            x: updatedXScale(d['date']),
            y: updatedYScale(d['high'])
          }, {
            x: updatedXScale(d['date']),
            y: updatedYScale(d['low'])
          }]);
        });
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.candlestick rect').attr('x', function (d) {
          return updatedXScale(d['date']) - bodyWidth / 2;
        }).attr('y', function (d) {
          return d['close'] > d['open'] ? updatedYScale(d['close']) : updatedYScale(d['open']);
        }).attr('height', function (d) {
          return d['close'] > d['open'] ? updatedYScale(d['open']) - updatedYScale(d['close']) : updatedYScale(d['close']) - updatedYScale(d['open']);
        }); // update bollinger Bands based on zoom/pan

        var updateUpperBandPlot = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return updatedXScale(d['date']);
        }).y(function (d) {
          return updatedYScale(d['upperBand']);
        });
        var updateLowerBandPlot = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return updatedXScale(d['date']);
        }).y(function (d) {
          return updatedYScale(d['lowerBand']);
        }).curve(d3__WEBPACK_IMPORTED_MODULE_5__["curveBasis"]);
        var area = d3__WEBPACK_IMPORTED_MODULE_5__["area"]().x(function (d) {
          return updatedXScale(d['date']);
        }).y0(function (d) {
          return updatedYScale(d['upperBand']);
        }).y1(function (d) {
          return updatedYScale(d['lowerBand']);
        });
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.upper-band').attr('d', updateUpperBandPlot);
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.lower-band').attr('d', updateLowerBandPlot);
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.middle-band').attr('d', updateMovingAverageLinePlot);
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.band-area').attr('d', area); // update crosshair position on zooming/panning

        var overlay = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.overlay');
        var focus = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.focus');
        var bisectDate = d3__WEBPACK_IMPORTED_MODULE_5__["bisector"](function (d) {
          return d.date;
        }).left; // remove old crosshair

        overlay.exit().remove(); // enter, and update the attributes

        overlay.enter().append('g').attr('class', 'focus').style('display', 'none');
        overlay.attr('class', 'overlay').attr('width', this.width).attr('height', this.height).on('mouseover', function () {
          return focus.style('display', null);
        }).on('mouseout', function () {
          return focus.style('display', 'none');
        }).on('mousemove', function (d, i, nodes) {
          var correspondingDate = updatedXScale.invert(d3__WEBPACK_IMPORTED_MODULE_5__["mouse"](nodes[i])[0]); //gets insertion point

          var i1 = bisectDate(_this3.currentData, correspondingDate, 1);
          var d0 = _this3.currentData[i1 - 1];
          var d1 = _this3.currentData[i1];
          var currentPoint = correspondingDate - d0['date'] > d1['date'] - correspondingDate ? d1 : d0;
          focus.attr('transform', "translate(".concat(updatedXScale(currentPoint['date']), ", ").concat(updatedYScale(currentPoint['close']), ")"));
          focus.select('line.x').attr('x1', 0).attr('x2', _this3.width - updatedXScale(currentPoint['date'])).attr('y1', 0).attr('y2', 0);
          focus.select('line.y').attr('x1', 0).attr('x2', 0).attr('y1', 0).attr('y2', _this3.height - updatedYScale(currentPoint['close']));

          _this3.updateLegends(currentPoint);

          _this3.updateSecondaryLegends(currentPoint['date']);
        });
      }
    }
  }, {
    key: "setDataset",
    value: function setDataset(event) {
      var _this4 = this;

      this.loadData(event.target.value).then(function (response) {
        var thisYearStartDate = new Date(2017, 11, 31);
        var nextYearStartDate = new Date(2019, 0, 1); // remove invalid data points

        var validData = response['quote'].filter(function (row) {
          return row['high'] && row['low'] && row['close'] && row['open'];
        });
        _this4.currentData = validData.filter(function (row) {
          if (row['date']) {
            return row['date'] >= thisYearStartDate && row['date'] < nextYearStartDate;
          }
        });
        _this4.movingAverageData = _this4.calculateMovingAverage(validData, 49);
        _this4.bollingerBandsData = _this4.calculateBollingerBands(validData, 19);
        _this4.margin = {
          top: 50,
          right: 50,
          bottom: 50,
          left: 20
        };
        _this4.width = window.innerWidth - _this4.margin.left - _this4.margin.right; // Use the window's width

        _this4.height = window.innerHeight - _this4.margin.top - _this4.margin.bottom; // Use the window's height

        /* update the min, max values, and scales for the axes */

        var xMin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](_this4.currentData, function (d) {
          return Math.min(d['date']);
        });
        var xMax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](_this4.currentData, function (d) {
          return Math.max(d['date']);
        });
        var yMin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](_this4.currentData, function (d) {
          return Math.min(d['close']);
        });
        var yMax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](_this4.currentData, function (d) {
          return Math.max(d['close']);
        });

        _this4.xScale.domain([xMin, xMax]);

        _this4.yScale.domain([yMin - 5, yMax + 4]); // get dividend data for current dataset


        _this4.dividendData = response['dividends'].filter(function (row) {
          if (row['date']) {
            return row['date'] >= thisYearStartDate && row['date'] < nextYearStartDate;
          }
        });

        _this4.updateChart();
      });
    }
  }, {
    key: "updateChart",
    value: function updateChart() {
      /* Update the axes */
      d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.xAxis').call(d3__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](this.xScale));
      d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.yAxis').call(d3__WEBPACK_IMPORTED_MODULE_5__["axisRight"](this.yScale));
      /* updating of crosshair */

      this.updateCrosshairProperties();
      /* Update the volume series bar chart */

      this.renderVolumeBarCharts();
      /* Update dividend indicators */

      this.renderDividendIndicators();
      /* Update the price chart */

      var closeCheckboxToggle = document.querySelector('input[id=close]').checked;
      this.toggleClose(closeCheckboxToggle);
      /* Update the moving average line */

      var movingAverageCheckboxToggle = document.querySelector('input[id=moving-average]').checked;
      this.toggleMovingAverage(movingAverageCheckboxToggle);
      /* Display OHLC chart */

      var checkboxToggle = document.querySelector('input[id=ohlc]').checked;
      this.toggleOHLC(checkboxToggle);
      /* Display Candlesticks chart */

      var candlesticksToggle = document.querySelector('input[id=candlesticks]').checked;
      this.toggleCandlesticks(candlesticksToggle);
      /* Display Bollinger Bands */

      var toggleBollingerBands = document.querySelector('input[id=bollinger-bands]').checked;
      this.toggleBollingerBands(toggleBollingerBands);
    }
    /* Mouseover function to generate crosshair */

  }, {
    key: "generateCrosshair",
    value: function generateCrosshair(current) {
      //returns corresponding value from the domain
      var focus = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.focus');
      var bisectDate = d3__WEBPACK_IMPORTED_MODULE_5__["bisector"](function (d) {
        return d.date;
      }).left;
      var correspondingDate = this.xScale.invert(d3__WEBPACK_IMPORTED_MODULE_5__["mouse"](current)[0]); //gets insertion point

      var i = bisectDate(this.currentData, correspondingDate, 1);
      var d0 = this.currentData[i - 1];
      var d1 = this.currentData[i];
      var currentPoint = correspondingDate - d0['date'] > d1['date'] - correspondingDate ? d1 : d0;
      focus.attr('transform', "translate(".concat(this.xScale(currentPoint['date']), ", ").concat(this.yScale(currentPoint['close']), ")"));
      focus.select('line.x').attr('x1', 0).attr('x2', this.width - this.xScale(currentPoint['date'])).attr('y1', 0).attr('y2', 0);
      focus.select('line.y').attr('x1', 0).attr('x2', 0).attr('y1', 0).attr('y2', this.height - this.yScale(currentPoint['close'])); // updates the legend to display the date, open, close, high, low, and volume and selected mouseover area

      this.updateLegends(currentPoint); // secondary legends showing moving average and bollinger bands values

      this.updateSecondaryLegends(currentPoint['date']);
    }
  }, {
    key: "updateLegends",
    value: function updateLegends(currentPoint) {
      d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.primary-legend').remove();
      var legendKeys = Object.keys(currentPoint);
      var lineLegendSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('g').selectAll('.primary-legend').data(legendKeys);
      lineLegendSelect.join(function (enter) {
        return enter.append('g').attr('class', 'primary-legend').attr('transform', function (d, i) {
          return "translate(0, ".concat(i * 20, ")");
        }).append('text').text(function (d) {
          if (d === 'date') {
            return "".concat(d, ": ").concat(currentPoint[d].toLocaleDateString());
          } else if (d === 'high' || d === 'low' || d === 'open' || d === 'close') {
            return "".concat(d, ": ").concat(currentPoint[d].toFixed(2));
          } else {
            return "".concat(d, ": ").concat(currentPoint[d]);
          }
        }).style('font-size', '0.8em').style('fill', 'white').attr('transform', 'translate(15,9)');
      } //align texts with boxes*/
      );
    }
  }, {
    key: "updateSecondaryLegends",
    value: function updateSecondaryLegends(currentDate) {
      var secondaryLegend = {};

      if (this.movingAverageData) {
        var currentPoint = this.movingAverageData.filter(function (dataPoint) {
          return dataPoint['date'] === currentDate;
        })[0];
        secondaryLegend['movingAverage'] = currentPoint;
      }

      if (this.bollingerBandsData) {
        var currentBollingerBandsPoint = this.bollingerBandsData.filter(function (dataPoint) {
          return dataPoint['date'] === currentDate;
        })[0];
        secondaryLegend['bollingerBands'] = currentBollingerBandsPoint;
      }

      var secondaryLegendKeys = Object.keys(secondaryLegend);
      d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.secondary-legend').remove();

      if (secondaryLegendKeys.length > 0) {
        var secondaryLegendSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('g').selectAll('.secondary-legend').data(secondaryLegendKeys);
        secondaryLegendSelect.join(function (enter) {
          return enter.append('g').attr('class', 'secondary-legend').attr('transform', function (d, i) {
            return "translate(0, ".concat(i * 20, ")");
          }).append('text').text(function (d) {
            if (d === 'movingAverage') {
              return "Moving Average (50): ".concat(secondaryLegend[d]['average'].toFixed(2));
            } else if (d === 'bollingerBands') {
              return "Bollinger Bands (20, 2.0, MA): ".concat(secondaryLegend[d]['lowerBand'].toFixed(2), " - ").concat(secondaryLegend[d]['average'].toFixed(2), " - ").concat(secondaryLegend[d]['upperBand'].toFixed(2));
            }
          }).style('font-size', '0.8em').style('fill', 'white').attr('transform', 'translate(150,9)');
        }, function (exit) {
          return exit.remove();
        });
      }
    }
  }, {
    key: "updateCrosshairProperties",
    value: function updateCrosshairProperties() {
      var _this5 = this;

      // select the existing crosshair, and bind new data
      var overlay = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.overlay');
      var focus = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.focus'); // remove old crosshair

      overlay.exit().remove(); // enter, and update the attributes

      overlay.enter().append('g').attr('class', 'focus').style('display', 'none');
      overlay.attr('class', 'overlay').attr('width', this.width).attr('height', this.height).on('mouseover', function () {
        return focus.style('display', null);
      }).on('mouseout', function () {
        return focus.style('display', 'none');
      }).on('mousemove', function (d, i, nodes) {
        return _this5.generateCrosshair(nodes[i]);
      });
    }
  }, {
    key: "renderVolumeBarCharts",
    value: function renderVolumeBarCharts() {
      var _this6 = this;

      var chart = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('g');
      var yMinVolume = d3__WEBPACK_IMPORTED_MODULE_5__["min"](this.currentData, function (d) {
        return Math.min(d['volume']);
      });
      var yMaxVolume = d3__WEBPACK_IMPORTED_MODULE_5__["max"](this.currentData, function (d) {
        return Math.max(d['volume']);
      });
      var yVolumeScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([yMinVolume, yMaxVolume]).range([this.height, this.height * (3 / 4)]); //d3.select('#leftAxis').call(d3.axisLeft(yVolumeScale));
      //select, followed by join

      var bars = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#volume-series').selectAll('.vol').data(this.currentData, function (d) {
        return d['date'];
      });
      bars.join(function (enter) {
        return enter.append('rect').attr('class', 'vol').attr('x', function (d) {
          return _this6.xScale(d['date']);
        }).attr('y', function (d) {
          return yVolumeScale(d['volume']);
        }).attr('fill', function (d, i) {
          if (i === 0) {
            return '#03a678';
          } else {
            // green bar if price is rising during that period, and red when price is falling
            return _this6.currentData[i - 1].close > d.close ? '#c0392b' : '#03a678';
          }
        }).attr('width', 1).attr('height', function (d) {
          return _this6.height - yVolumeScale(d['volume']);
        });
      }, function (update) {
        return update.transition().duration(750).attr('x', function (d) {
          return _this6.xScale(d['date']);
        }).attr('y', function (d) {
          return yVolumeScale(d['volume']);
        }).attr('fill', function (d, i) {
          if (i === 0) {
            return '#03a678';
          } else {
            // green bar if price is rising during that period, and red when price is falling
            return _this6.currentData[i - 1].close > d.close ? '#c0392b' : '#03a678';
          }
        }).attr('width', 1).attr('height', function (d) {
          return _this6.height - yVolumeScale(d['volume']);
        });
      });
    }
  }, {
    key: "renderDividendIndicators",
    value: function renderDividendIndicators() {
      var _this7 = this;

      /* Updating of dividends */
      // select all dividend groups, and bind the new data
      var dividendSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#dividends').selectAll('.dividend-group').data(this.dividendData);
      var dividendTooltip = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('body').append('div').attr('class', 'tooltip').style('opacity', 0);
      dividendSelect.join(function (enter) {
        // first, enter and append the group element, with the mousemove and mouseout events
        var enterSelection = enter.append('g').attr('class', 'dividend-group').on('mousemove', function (d) {
          dividendTooltip.style('opacity', 1).style('color', '#464e56').style('left', d3__WEBPACK_IMPORTED_MODULE_5__["event"].pageX - 80 + 'px').style('top', d3__WEBPACK_IMPORTED_MODULE_5__["event"].pageY - 50 + 'px').html("<strong>Dividends: ".concat(d['yield'], "</strong> <br/> Date: ").concat(d['date'].toLocaleDateString()));
        }).on('mouseout', function (d) {
          dividendTooltip.transition().duration(200).style('opacity', 0);
        }); // enter and append the square symbols representing the dividends to the group element

        enterSelection.append('path').attr('class', 'dividend').attr('d', d3__WEBPACK_IMPORTED_MODULE_5__["symbol"]().size(300).type(d3__WEBPACK_IMPORTED_MODULE_5__["symbolSquare"])).style('opacity', 0.8).style('cursor', 'pointer').style('fill', '#00ced1'); // enter and append the 'D' text to the group element

        enterSelection.append('text').attr('x', -6).attr('y', 5).text(function (d) {
          return 'D';
        }).style('cursor', 'pointer').style('pointer-events', 'none') //allow mouseover to propagate
        .style('fill', '#464e56'); // translate the elements to their respective positions

        enterSelection.attr('transform', function (d, i) {
          return "translate(".concat(_this7.xScale(d['date']), ",").concat(_this7.height - 80, ")");
        });
      }, function (update) {
        return update.transition().duration(200).attr('transform', function (d, i) {
          return "translate(".concat(_this7.xScale(d['date']), ",").concat(_this7.height - 80, ")");
        });
      });
    }
  }, {
    key: "toggleClose",
    value: function toggleClose(value) {
      var _this8 = this;

      if (value) {
        if (this.zoom) {
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').transition().duration(750).call(this.zoom.transform, d3__WEBPACK_IMPORTED_MODULE_5__["zoomIdentity"].scale(1));
        }

        var line = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return _this8.xScale(d['date']);
        }).y(function (d) {
          return _this8.yScale(d['close']);
        });
        var lineSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('svg').select('g').selectAll('.price-chart').data([this.currentData]);
        lineSelect.join(function (enter) {
          return enter.append('path').style('fill', 'none').attr('class', 'price-chart').attr('clip-path', 'url(#clip)').attr('stroke', 'steelblue').attr('stroke-width', '1.5').attr('d', line);
        }, function (update) {
          return update.transition().duration(750).attr('d', line);
        });
      } else {
        // Remove close price chart
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.price-chart').remove();
      }
    }
  }, {
    key: "toggleMovingAverage",
    value: function toggleMovingAverage(value) {
      var _this9 = this;

      if (value) {
        if (this.zoom) {
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').transition().duration(750).call(this.zoom.transform, d3__WEBPACK_IMPORTED_MODULE_5__["zoomIdentity"].scale(1));
        }

        var movingAverageLine = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return _this9.xScale(d['date']);
        }).y(function (d) {
          return _this9.yScale(d['average']);
        }).curve(d3__WEBPACK_IMPORTED_MODULE_5__["curveBasis"]);
        var movingAverageSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('svg').select('g').selectAll('.moving-average-line').data([this.movingAverageData]);
        movingAverageSelect.join(function (enter) {
          return enter.append('path').style('fill', 'none').attr('class', 'moving-average-line').attr('clip-path', 'url(#clip)').attr('stroke', '#FF8900').attr('stroke-width', '1.5').attr('d', movingAverageLine);
        }, function (update) {
          return update.transition().duration(750).attr('d', movingAverageLine);
        });
      } else {
        // Remove moving average line
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.moving-average-line').remove();
      }
    }
  }, {
    key: "toggleOHLC",
    value: function toggleOHLC(value) {
      var _this10 = this;

      if (value) {
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').transition().duration(750).call(this.zoom.transform, d3__WEBPACK_IMPORTED_MODULE_5__["zoomIdentity"].scale(1));
        var tickWidth = 5;
        var ohlcLine = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return d['x'];
        }).y(function (d) {
          return d['y'];
        });
        var ohlcSelection = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#ohlc-series').selectAll('.ohlc').data(this.currentData, function (d) {
          return d['volume'];
        });
        ohlcSelection.join(function (enter) {
          var ohlcEnter = enter.append('g').attr('class', 'ohlc').append('g').attr('class', 'bars').classed('up-day', function (d) {
            return d['close'] > d['open'];
          }).classed('down-day', function (d) {
            return d['close'] <= d['open'];
          });
          ohlcEnter.append('path').classed('high-low', true).attr('d', function (d) {
            return ohlcLine([{
              x: _this10.xScale(d['date']),
              y: _this10.yScale(d['high'])
            }, {
              x: _this10.xScale(d['date']),
              y: _this10.yScale(d['low'])
            }]);
          });
          ohlcEnter.append('path').classed('open-tick', true).attr('d', function (d) {
            return ohlcLine([{
              x: _this10.xScale(d['date']) - tickWidth,
              y: _this10.yScale(d['open'])
            }, {
              x: _this10.xScale(d['date']),
              y: _this10.yScale(d['open'])
            }]);
          });
          ohlcEnter.append('path').classed('close-tick', true).attr('d', function (d) {
            return ohlcLine([{
              x: _this10.xScale(d['date']),
              y: _this10.yScale(d['close'])
            }, {
              x: _this10.xScale(d['date']) + tickWidth,
              y: _this10.yScale(d['close'])
            }]);
          });
        });
      } else {
        // remove OHLC
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('g').selectAll('.ohlc').remove();
      }
    }
  }, {
    key: "toggleCandlesticks",
    value: function toggleCandlesticks(value) {
      var _this11 = this;

      if (value) {
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').transition().duration(750).call(this.zoom.transform, d3__WEBPACK_IMPORTED_MODULE_5__["zoomIdentity"].scale(1));
        var bodyWidth = 5;
        var candlesticksLine = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return d['x'];
        }).y(function (d) {
          return d['y'];
        });
        var candlesticksSelection = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#candlesticks-series').selectAll('.candlestick').data(this.currentData, function (d) {
          return d['volume'];
        });
        candlesticksSelection.join(function (enter) {
          var candlesticksEnter = enter.append('g').attr('class', 'candlestick').append('g').attr('class', 'bars').classed('up-day', function (d) {
            return d['close'] > d['open'];
          }).classed('down-day', function (d) {
            return d['close'] <= d['open'];
          });
          candlesticksEnter.append('path').classed('high-low', true).attr('d', function (d) {
            return candlesticksLine([{
              x: _this11.xScale(d['date']),
              y: _this11.yScale(d['high'])
            }, {
              x: _this11.xScale(d['date']),
              y: _this11.yScale(d['low'])
            }]);
          });
          candlesticksEnter.append('rect').attr('x', function (d) {
            return _this11.xScale(d.date) - bodyWidth / 2;
          }).attr('y', function (d) {
            return d['close'] > d['open'] ? _this11.yScale(d.close) : _this11.yScale(d.open);
          }).attr('width', bodyWidth).attr('height', function (d) {
            return d['close'] > d['open'] ? _this11.yScale(d.open) - _this11.yScale(d.close) : _this11.yScale(d.close) - _this11.yScale(d.open);
          });
        });
      } else {
        // remove candlesticks
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('g').selectAll('.candlestick').remove();
      }
    }
  }, {
    key: "toggleBollingerBands",
    value: function toggleBollingerBands(value) {
      var _this12 = this;

      if (value) {
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').transition().duration(750).call(this.zoom.transform, d3__WEBPACK_IMPORTED_MODULE_5__["zoomIdentity"].scale(1));
        var movingAverage = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return _this12.xScale(d['date']);
        }).y(function (d) {
          return _this12.yScale(d['average']);
        }).curve(d3__WEBPACK_IMPORTED_MODULE_5__["curveBasis"]);
        var upperBand = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return _this12.xScale(d['date']);
        }).y(function (d) {
          return _this12.yScale(d['upperBand']);
        }).curve(d3__WEBPACK_IMPORTED_MODULE_5__["curveBasis"]);
        var lowerBand = d3__WEBPACK_IMPORTED_MODULE_5__["line"]().x(function (d) {
          return _this12.xScale(d['date']);
        }).y(function (d) {
          return _this12.yScale(d['lowerBand']);
        }).curve(d3__WEBPACK_IMPORTED_MODULE_5__["curveBasis"]); // middle band - moving average

        var movingAverageSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('svg').select('g').selectAll('.middle-band').data([this.bollingerBandsData]);
        movingAverageSelect.join(function (enter) {
          return enter.append('path').style('fill', 'none').attr('class', 'middle-band').attr('clip-path', 'url(#clip)').attr('stroke', 'darkgrey').attr('stroke-width', '1.5').attr('d', movingAverage);
        }, function (update) {
          return update.transition().duration(750).attr('d', movingAverage);
        }); // upper band

        var upperBandSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('svg').select('g').selectAll('.upper-band').data([this.bollingerBandsData]);
        upperBandSelect.join(function (enter) {
          return enter.append('path').style('fill', 'none').attr('class', 'upper-band').attr('clip-path', 'url(#clip)').attr('stroke', 'darkgrey').attr('stroke-width', '1').attr('d', upperBand);
        }, function (update) {
          return update.transition().duration(750).attr('d', upperBand);
        }); // lower band

        var lowerBandSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('svg').select('g').selectAll('.lower-band').data([this.bollingerBandsData]);
        lowerBandSelect.join(function (enter) {
          return enter.append('path').style('fill', 'none').attr('class', 'lower-band').attr('clip-path', 'url(#clip)').attr('stroke', 'darkgrey').attr('stroke-width', '1').attr('d', lowerBand);
        }, function (update) {
          return update.transition().duration(750).attr('d', lowerBand);
        });
        var area = d3__WEBPACK_IMPORTED_MODULE_5__["area"]().x(function (d) {
          return _this12.xScale(d['date']);
        }).y0(function (d) {
          return _this12.yScale(d['upperBand']);
        }).y1(function (d) {
          return _this12.yScale(d['lowerBand']);
        });
        var areaSelect = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('svg').select('g').selectAll('.band-area').data([this.bollingerBandsData]);
        areaSelect.join(function (enter) {
          return enter.append('path').style('fill', 'darkgrey').style('opacity', 0.2).style('pointer-events', 'none') //allow mouseover to propagate
          .attr('class', 'band-area').attr('clip-path', 'url(#clip)').attr('d', area);
        }, function (update) {
          return update.transition().duration(750).attr('d', area);
        });
      } else {
        // remove bollinger bands
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#chart').select('g').selectAll('.middle-band, .lower-band, .upper-band, .band-area').remove();
      }
    }
  }, {
    key: "createChart",
    value: function createChart() {
      var _this13 = this;

      this.loadData('vig').then(function (data) {
        _this13.initialiseChart(data);
      });
      var selectElement = document.getElementById('select-stock');
      selectElement.addEventListener('change', function (event) {
        _this13.setDataset(event);
      });
      var viewClose = document.querySelector('input[id=close]');
      viewClose.addEventListener('change', function (event) {
        _this13.toggleClose(document.querySelector('input[id=close]').checked);
      });
      var viewMovingAverage = document.querySelector('input[id=moving-average]');
      viewMovingAverage.addEventListener('change', function (event) {
        _this13.toggleMovingAverage(document.querySelector('input[id=moving-average]').checked);
      });
      var viewOHLC = document.querySelector('input[id=ohlc]');
      viewOHLC.addEventListener('change', function (event) {
        _this13.toggleOHLC(document.querySelector('input[id=ohlc]').checked);
      });
      var viewCandlesticks = document.querySelector('input[id=candlesticks]');
      viewCandlesticks.addEventListener('change', function (event) {
        _this13.toggleCandlesticks(document.querySelector('input[id=candlesticks]').checked);
      });
      var viewBollingerBands = document.querySelector('input[id=bollinger-bands]');
      viewBollingerBands.addEventListener('change', function (event) {
        _this13.toggleBollingerBands(document.querySelector('input[id=bollinger-bands]').checked);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createChart();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "flex-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "flex-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        id: "select-stock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        selected: "selected",
        value: "vig",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1206
        },
        __self: this
      }, "Vanguard Dividend Appreciation ETF (VIG)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "vti",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1207
        },
        __self: this
      }, "Vanguard Total Stock Market ETF (VTI)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "vea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1208
        },
        __self: this
      }, "Vanguard FTSE Developed Markets ETF (VEA)"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "flex-item",
        style: {
          'min-width': '15vw'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        id: "close",
        checked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        for: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1214
        },
        __self: this
      }, "Close Price")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        id: "moving-average",
        checked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1217
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        for: "moving-average",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1218
        },
        __self: this
      }, "Moving Average (50 Periods)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        id: "bollinger-bands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1221
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        for: "bollinger-bands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1222
        },
        __self: this
      }, "Bollinger Bands (20 Periods)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        id: "ohlc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1225
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        for: "ohlc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1226
        },
        __self: this
      }, "OHLC")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        id: "candlesticks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1229
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        for: "candlesticks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1230
        },
        __self: this
      }, "Candlesticks")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "chart",
        style: chartStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1234
        },
        __self: this
      }));
    }
  }]);

  return StockChart;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (StockChart);

/***/ }),

/***/ "./src/Components/Main/styles.css":
/*!****************************************!*\
  !*** ./src/Components/Main/styles.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Main/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Main/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Main/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/NotFound/404.svg":
/*!*****************************************!*\
  !*** ./src/Components/NotFound/404.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/404.5b71688c.svg";

/***/ }),

/***/ "./src/Components/NotFound/NotFound.css":
/*!**********************************************!*\
  !*** ./src/Components/NotFound/NotFound.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NotFound/NotFound.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NotFound/NotFound.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NotFound/NotFound.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/NotFound/NotFound.js":
/*!*********************************************!*\
  !*** ./src/Components/NotFound/NotFound.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotFound.css */ "./src/Components/NotFound/NotFound.css");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_NotFound_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/NotFound/NotFound.js";




var NotFound =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NotFound, _Component);

  function NotFound() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotFound);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NotFound).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotFound, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bg-purple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "stars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "custom-navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "brand-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ./logo.svg */ "./src/Components/NotFound/logo.svg"),
        style: {
          width: "150px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "btn-go-home",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Home"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "central-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "image-404",
        src: __webpack_require__(/*! ./404.svg */ "./src/Components/NotFound/404.svg"),
        width: "300px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "btn-go-home",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Return to Home Page")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "objects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "object_rocket",
        src: __webpack_require__(/*! ./rocket.svg */ "./src/Components/NotFound/rocket.svg"),
        width: "40px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "earth-moon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "object_earth",
        src: __webpack_require__(/*! ./earth.svg */ "./src/Components/NotFound/earth.svg"),
        width: "100px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "object_moon",
        src: __webpack_require__(/*! ./moon.svg */ "./src/Components/NotFound/moon.svg"),
        width: "80px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box_astronaut",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "object_astronaut",
        src: __webpack_require__(/*! ./astronaut.svg */ "./src/Components/NotFound/astronaut.svg"),
        width: "140px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "glowing_stars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }))));
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/Components/NotFound/astronaut.svg":
/*!***********************************************!*\
  !*** ./src/Components/NotFound/astronaut.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/astronaut.dcc3e306.svg";

/***/ }),

/***/ "./src/Components/NotFound/bg_purple.png":
/*!***********************************************!*\
  !*** ./src/Components/NotFound/bg_purple.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg_purple.315b225d.png";

/***/ }),

/***/ "./src/Components/NotFound/earth.svg":
/*!*******************************************!*\
  !*** ./src/Components/NotFound/earth.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/earth.dbfa284b.svg";

/***/ }),

/***/ "./src/Components/NotFound/logo.svg":
/*!******************************************!*\
  !*** ./src/Components/NotFound/logo.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.fd07dc86.svg";

/***/ }),

/***/ "./src/Components/NotFound/moon.svg":
/*!******************************************!*\
  !*** ./src/Components/NotFound/moon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/moon.551a0cd5.svg";

/***/ }),

/***/ "./src/Components/NotFound/overlay_stars.svg":
/*!***************************************************!*\
  !*** ./src/Components/NotFound/overlay_stars.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/overlay_stars.de325276.svg";

/***/ }),

/***/ "./src/Components/NotFound/rocket.svg":
/*!********************************************!*\
  !*** ./src/Components/NotFound/rocket.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rocket.be464a54.svg";

/***/ }),

/***/ "./src/Components/SiteDesign/SiteDesign.js":
/*!*************************************************!*\
  !*** ./src/Components/SiteDesign/SiteDesign.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../history */ "./src/history.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SiteDesignStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SiteDesignStyles */ "./src/Components/SiteDesign/SiteDesignStyles.js");
/* harmony import */ var _SiteDesignStyles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_SiteDesignStyles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/index.es.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_Images_car_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/Images/car.svg */ "./src/assets/Images/car.svg");
/* harmony import */ var _assets_Images_car_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_Images_car_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_Images_Icons_images_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/Images/Icons/images.jpg */ "./src/assets/Images/Icons/images.jpg");
/* harmony import */ var _assets_Images_Icons_images_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_Images_Icons_images_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_Images_Icons_Bold_and_Vibrant_colors_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/Images/Icons/Bold-and-Vibrant-colors.png */ "./src/assets/Images/Icons/Bold-and-Vibrant-colors.png");
/* harmony import */ var _assets_Images_Icons_Bold_and_Vibrant_colors_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_Images_Icons_Bold_and_Vibrant_colors_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_Images_Icons_bitcoin_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/Images/Icons/bitcoin.svg */ "./src/assets/Images/Icons/bitcoin.svg");
/* harmony import */ var _assets_Images_Icons_bitcoin_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_Images_Icons_bitcoin_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_Images_Icons_stock_chart_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/Images/Icons/stock_chart.png */ "./src/assets/Images/Icons/stock_chart.png");
/* harmony import */ var _assets_Images_Icons_stock_chart_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_Images_Icons_stock_chart_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _Routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../Routes/DashboardRoutes */ "./src/Routes/DashboardRoutes.js");






var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/SiteDesign/SiteDesign.js";





















var SiteDesign =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SiteDesign, _React$Component);

  function SiteDesign() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SiteDesign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SiteDesign)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: false,
      openDashboard: false,
      openAdmin: false,
      openOptions: false,
      openWebAdmin: false,
      anchorEl: null
    };

    _this.handleDrawerOpen = function () {
      _this.setState({
        open: true,
        openAdmin: true
      });
    };

    _this.handleDrawerClose = function () {
      _this.setState({
        open: false,
        openDashboard: false,
        openAdmin: false,
        openOptions: false,
        openWebAdmin: false
      });
    };

    _this.handleClickDashboard = function () {
      _this.setState(function (state) {
        return {
          openDashboard: !state.openDashboard,
          openAdmin: false,
          openOptions: false,
          openWebAdmin: false
        };
      });
    };

    _this.handleClickAdmin = function () {
      _this.setState(function (state) {
        return {
          openAdmin: !state.openAdmin,
          openDashboard: false,
          openOptions: false,
          openWebAdmin: false
        };
      });
    };

    _this.handleClickOptions = function () {
      _this.setState(function (state) {
        return {
          openOptions: !state.openOptions,
          openAdmin: false,
          openDashboard: false,
          openWebAdmin: false
        };
      });
    };

    _this.handleMenu = function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    };

    _this.handleClose = function () {
      _this.setState({
        anchorEl: null
      });
    };

    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SiteDesign, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames3,
          _classNames4;

      var open = Boolean(this.state.anchorEl);
      var _this$props = this.props,
          classes = _this$props.classes,
          children = _this$props.children,
          theme = _this$props.theme,
          themeType = _this$props.themeType,
          handleThemeTypeChange = _this$props.handleThemeTypeChange;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["CssBaseline"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.appRoot,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["AppBar"], {
        position: "fixed",
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.appBar, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.appBarShift, this.state.open)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Toolbar"], {
        disableGutters: !this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.menuButton, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.hide, this.state.open)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_17__["Menu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), this.state.open ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
        variant: "h6",
        color: "inherit",
        className: classes.title,
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
        variant: "h6",
        color: "inherit",
        className: classes.title,
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "JSK Analytics"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Switch"], {
        checked: themeType,
        onChange: handleThemeTypeChange,
        value: themeType,
        color: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.profileNameIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
        position: "fixed",
        "aria-owns": open ? "menu-list-grow" : undefined,
        "aria-haspopup": "true",
        onClick: this.handleMenu,
        color: "inherit",
        className: classes.profileIconButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../assets/Images/Icons/krishna.png */ "./src/assets/Images/Icons/krishna.png"),
        alt: "",
        style: {
          width: 42,
          height: 42
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
        variant: "body2",
        className: classes.profileButtonIconText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Krishna"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Popper"], {
        open: open,
        anchorEl: this.anchorEl,
        transition: true,
        disablePortal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grow"], Object.assign({}, TransitionProps, {
          id: "menu-list-grow",
          style: {
            transformOrigin: placement === "bottom" ? "center top" : "center bottom"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Paper"], {
          style: {
            marginRight: "100px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_16___default.a, {
          onClickAway: _this2.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["MenuList"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItem"], {
          button: true,
          className: classes.nestedProfile,
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
          to: "/profile",
          onClick: _this2.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
          className: classes.myAccountIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }), " ", "My account"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["MenuItem"], {
          onClose: _this2.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: {
            paddingRight: "25px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }), " Log Out")))));
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Drawer"], {
        variant: "permanent",
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.drawer, (_classNames3 = {}, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, classes.drawerOpen, this.state.open), Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, classes.drawerClose, !this.state.open), _classNames3)),
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames4 = {}, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, classes.drawerOpen, this.state.open), Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, classes.drawerClose, !this.state.open), _classNames4))
        },
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.sideNavBarImageContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_Images_car_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
        alt: "Port Logo",
        className: classes.sideNavBarImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: classes.sideNavBarText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "JSK")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
        onClick: this.handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, theme.direction === "rtl" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["List"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["List"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItem"], {
        button: true,
        key: "Main",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_Images_Icons_stock_chart_png__WEBPACK_IMPORTED_MODULE_24___default.a,
        className: classes.sideNavBarIcon,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemText"], {
        primary: "Main Page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItem"], {
        button: true,
        key: "Stock Dashboard",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/stock_dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_Images_Icons_images_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
        className: classes.sideNavBarIcon,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemText"], {
        primary: "Stock Dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItem"], {
        button: true,
        key: "CSV Parsing",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/csvparsing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_Images_Icons_Bold_and_Vibrant_colors_png__WEBPACK_IMPORTED_MODULE_22___default.a,
        className: classes.sideNavBarIcon,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemText"], {
        primary: "CSV Parsing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItem"], {
        button: true,
        key: "Bitcoin Pricing",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/bitcoin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_Images_Icons_bitcoin_svg__WEBPACK_IMPORTED_MODULE_23___default.a,
        className: classes.sideNavBarIcon,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ListItemText"], {
        primary: "Bitcoin Pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        className: classes.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_25__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      })));
    }
  }]);

  return SiteDesign;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

SiteDesign.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(_SiteDesignStyles__WEBPACK_IMPORTED_MODULE_11__["styles"], {
  withTheme: true
})(SiteDesign));

/***/ }),

/***/ "./src/Components/SiteDesign/SiteDesignStyles.js":
/*!*******************************************************!*\
  !*** ./src/Components/SiteDesign/SiteDesignStyles.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var drawerWidth = 300;
module.exports = {
  styles: function styles(theme) {
    return {
      palette: {
        primary: {
          main: "#9E9E9E"
        },
        secondary: {
          main: "#ee0053"
        },
        error: {
          main: "#ee0053"
        }
      },
      root: {
        display: "flex"
      },
      appRoot: {
        flexGrow: 1
      },
      title: {
        flexGrow: 1
      },
      profileNameIcon: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "right",
        marginRight: 10
      },
      profileIconButton: {
        borderRadius: 0
      },
      profileButtonIconText: {
        marginLeft: 10
      },
      myAccountIcon: {
        paddingRight: "15px",
        fontSize: "35px",
        height: "20px"
      },
      portIcon: {
        paddingRight: "15px",
        fontSize: "30px",
        height: "20px"
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: "calc(100% - ".concat(drawerWidth, "px)"),
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 36
      },
      hide: {
        display: "none"
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
      },

      /* PROBLEM STARTS HERE */
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },

      /* The below for the width of the side-drawer when the drawer is completely closed */
      drawerClose: {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 10 + 1
      },
      toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px"
      },

      /* END */
      content: {
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing.unit * 2
      },
      nested: {
        paddingLeft: theme.spacing.unit * 3
      },
      nestedProfile: {
        paddingLeft: theme.spacing.unit * 1
      },
      menuList: {
        position: "relative",
        right: 80
      },
      sideNavBarImageContainer: {
        display: "flex",
        margin: "auto auto auto 10px"
      },
      sideNavBarImage: {
        height: 44,
        width: 44,
        marginRight: 30
      },
      sideNavBarText: {
        marginBottom: 0
      },
      sideNavBarIcon: {
        marginTop: "15px",
        height: 35,
        width: 35
      },
      sideNavBarIconDashboard: {
        marginTop: "15px",
        height: 35,
        width: 35
      },
      sideNavBarIconAdmin: {
        height: 35,
        width: 35
      }
    };
  }
};

/***/ }),

/***/ "./src/Components/StockAnalytics/DebtRatios.js":
/*!*****************************************************!*\
  !*** ./src/Components/StockAnalytics/DebtRatios.js ***!
  \*****************************************************/
/*! exports provided: DebtRatios, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtRatios", function() { return DebtRatios; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/StockAnalytics/DebtRatios.js";


var ReactHighChart = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var DebtRatios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DebtRatios, _Component);

  function DebtRatios() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DebtRatios);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DebtRatios).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DebtRatios, [{
    key: "render",
    value: function render() {
      var config = {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [[0, "rgb(255, 255, 255)"], [1, "rgb(247, 247, 152)"]]
          },
          polar: true,
          type: "column"
        },
        xAxis: {
          categories: this.props.xSeriesDataForValuationRatios,
          crosshair: true,
          labels: {
            align: "right",
            rotation: "-45"
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Numbers in ratio"
          }
        },
        series: this.props.ySeriesDataForDebtRatios,
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        title: {
          text: "".concat(this.props.stockTicker || "Stock Ticker")
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ReactHighChart, {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    }
  }]);

  return DebtRatios;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (DebtRatios);

/***/ }),

/***/ "./src/Components/StockAnalytics/ProfitabilityRatios.js":
/*!**************************************************************!*\
  !*** ./src/Components/StockAnalytics/ProfitabilityRatios.js ***!
  \**************************************************************/
/*! exports provided: ProfitabilityRatios, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitabilityRatios", function() { return ProfitabilityRatios; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/StockAnalytics/ProfitabilityRatios.js";


var ReactHighChart = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var ProfitabilityRatios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProfitabilityRatios, _Component);

  function ProfitabilityRatios() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfitabilityRatios);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProfitabilityRatios).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfitabilityRatios, [{
    key: "render",
    value: function render() {
      var config = {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [[0, "rgb(255, 255, 255)"], [1, "rgb(247, 247, 152)"]]
          },
          polar: true,
          type: "column"
        },
        xAxis: {
          categories: this.props.xSeriesDataForValuationRatios,
          crosshair: true,
          labels: {
            align: "right",
            rotation: "-45"
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Numbers in ratio"
          }
        },
        series: this.props.ySeriesDataForProfitabilityRatios,
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        title: {
          text: "".concat(this.props.stockTicker || "Stock Ticker")
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ReactHighChart, {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return ProfitabilityRatios;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ProfitabilityRatios);

/***/ }),

/***/ "./src/Components/StockAnalytics/SandP500_PE.js":
/*!******************************************************!*\
  !*** ./src/Components/StockAnalytics/SandP500_PE.js ***!
  \******************************************************/
/*! exports provided: SandP500_PE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandP500_PE", function() { return SandP500_PE; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/StockAnalytics/SandP500_PE.js";



var ReactHighstock = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js"); // Function to re-structure the data received from the API


var getDateAndClosingPrice = function getDateAndClosingPrice(obj) {
  var xAxis = [];
  var yAxis = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      xAxis.push(key);
      yAxis.push(parseInt(obj[key].close));
    }
  }

  return [xAxis, yAxis];
};

var SandP500_PE =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SandP500_PE, _Component);

  function SandP500_PE() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SandP500_PE);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SandP500_PE)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      s_and_p_500_index: [],
      closingDate: ""
    };
    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SandP500_PE, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.fromDate !== prevProps.fromDate || this.props.toDate !== prevProps.toDate) {
        var _this$props = this.props,
            fromDate = _this$props.fromDate,
            toDate = _this$props.toDate;
        var APIkey = "5TTZhdGlgTt4VVNrFYcAxaShSxvKJ9wKcinwoLl75NoVYWadlh7WiJ3l6SZJ";
        var url = "https://www.worldtradingdata.com/api/v1/history?symbol=^INX&date_from=".concat(fromDate, "&date_to=").concat(toDate, "&sort=newest&api_token=").concat(APIkey);

        if (fromDate !== "" && toDate !== "") {
          axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url).then(function (res) {
            if (res.data && res.data.history && Object.entries(res.data.history).length !== 0) {
              _this2.setState({
                closingDate: getDateAndClosingPrice(res.data.history)[0],
                s_and_p_500_index: getDateAndClosingPrice(res.data.history)[1]
              });
            }
          }).catch(function (err) {
            return console.log("Error while fetching data ", err);
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _this$props2 = this.props,
          fromDate = _this$props2.fromDate,
          toDate = _this$props2.toDate;
      var APIkey = "5TTZhdGlgTt4VVNrFYcAxaShSxvKJ9wKcinwoLl75NoVYWadlh7WiJ3l6SZJ";
      var url = "https://www.worldtradingdata.com/api/v1/history?symbol=^INX&date_from=".concat(fromDate, "&date_to=").concat(toDate, "&sort=newest&api_token=").concat(APIkey);

      if (fromDate !== "" && toDate !== "") {
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url).then(function (res) {
          if (res.data && res.data.history && Object.entries(res.data.history).length !== 0) {
            _this3.setState({
              closingDate: getDateAndClosingPrice(res.data.history)[0],
              s_and_p_500_index: getDateAndClosingPrice(res.data.history)[1]
            });
          }
        }).catch(function (err) {
          return console.log("Error while fetching data ", err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          s_and_p_500_index = _this$state.s_and_p_500_index,
          closingDate = _this$state.closingDate;
      var config = {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [[0, "rgb(255, 255, 255)"], [1, "rgb(247, 247, 152)"]]
          },
          polar: true,
          type: "line"
        },
        xAxis: {
          categories: closingDate,
          labels: {
            align: "right",
            rotation: "-45"
          }
        },
        series: [{
          name: "S&P",
          data: s_and_p_500_index,
          tooltip: {
            valueDecimals: 2
          }
        }],
        title: {
          text: "S&P 500 closing from worldtradingdata.com"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ReactHighstock, {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), ");");
    }
  }]);

  return SandP500_PE;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (SandP500_PE);

/***/ }),

/***/ "./src/Components/StockAnalytics/StockAnalyticsDashBoard.js":
/*!******************************************************************!*\
  !*** ./src/Components/StockAnalytics/StockAnalyticsDashBoard.js ***!
  \******************************************************************/
/*! exports provided: StockAnalyticsDashBoard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAnalyticsDashBoard", function() { return StockAnalyticsDashBoard; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Styles_analyticsStyles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Styles/analyticsStyles.js */ "./src/Components/StockAnalytics/Styles/analyticsStyles.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _SandP500_PE__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SandP500_PE */ "./src/Components/StockAnalytics/SandP500_PE.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var material_ui_pickers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! material-ui-pickers */ "./node_modules/material-ui-pickers/dist/material-ui-pickers.esm.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _StockLineChart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StockLineChart */ "./src/Components/StockAnalytics/StockLineChart.js");
/* harmony import */ var _ValuationRatios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ValuationRatios */ "./src/Components/StockAnalytics/ValuationRatios.js");
/* harmony import */ var _ProfitabilityRatios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ProfitabilityRatios */ "./src/Components/StockAnalytics/ProfitabilityRatios.js");
/* harmony import */ var _DebtRatios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./DebtRatios */ "./src/Components/StockAnalytics/DebtRatios.js");







var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/StockAnalytics/StockAnalyticsDashBoard.js";


















var height = 35; // I had to resort to this special way of rendering react-select for handling 30,000 rows of data in the autosuggestion

var MenuList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuList, _Component);

  function MenuList() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MenuList);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuList).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          children = _this$props.children,
          maxHeight = _this$props.maxHeight,
          getValue = _this$props.getValue;

      var _getValue = getValue(),
          _getValue2 = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, 1),
          value = _getValue2[0];

      var initialOffset = options.indexOf(value) * height; // const initialOffset = height;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_window__WEBPACK_IMPORTED_MODULE_16__["FixedSizeList"], {
        height: maxHeight,
        itemCount: children.length,
        itemSize: height,
        initialScrollOffset: initialOffset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, function (_ref) {
        var index = _ref.index,
            style = _ref.style;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, children[index]);
      });
    }
  }]);

  return MenuList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // Function to convert the date format that I received from "material-ui-pickers" package to the YYYY-MM-DD required by the Quandl API


var convertDateFromStringToAPIFormat = function convertDateFromStringToAPIFormat(str) {
  var date = new Date(str);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), month, day].join("-");
};

var getDateAndClosingPrice = function getDateAndClosingPrice(obj) {
  var date = [];
  var closingPrice = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      date.push(key);
      closingPrice.push(parseInt(obj[key].close));
    }
  }

  return [date, closingPrice];
};

var getYSeriesDataValuationMatrix = function getYSeriesDataValuationMatrix(obj) {
  var set1,
      set2,
      set3,
      set4,
      set5 = {};
  var yAxisSeries = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      yAxisSeries.push([key, obj[key].investmentValuationRatios]);
    }
  }

  var priceBookValueRatio = yAxisSeries.map(function (i) {
    return i[1].priceBookValueRatio;
  });
  var arrPriceEarningRatio = yAxisSeries.map(function (i) {
    return i[1].priceEarningsRatio;
  });
  var arrPriceSalesRatio = yAxisSeries.map(function (i) {
    return i[1].priceSalesRatio;
  });
  var arrEnterpriseValueMultiple = yAxisSeries.map(function (i) {
    return i[1].enterpriseValueMultiple;
  });
  var priceEarningsToGrowthRatio = yAxisSeries.map(function (i) {
    return i[1].priceEarningsToGrowthRatio;
  });
  set1 = {
    name: "Price to Book-Value Ratio",
    data: priceBookValueRatio
  };
  set2 = {
    name: "Price Earnings Ratio",
    data: arrPriceEarningRatio
  };
  set3 = {
    name: "Price Sales Ratio",
    data: arrPriceSalesRatio
  };
  set4 = {
    name: "Enterprise Value Multiple",
    data: arrEnterpriseValueMultiple
  };
  set5 = {
    name: "PriceEarnings To GrowthRatio",
    data: priceEarningsToGrowthRatio
  };
  return [set1, set2, set3, set4, set5];
};

var getYSeriesDataProfitabilityMatrix = function getYSeriesDataProfitabilityMatrix(obj) {
  var set1,
      set2,
      set3,
      set4,
      set5 = {};
  var yAxisSeries = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      yAxisSeries.push([key, obj[key].profitabilityIndicatorRatios]);
    }
  }

  var grossProfitMargin = yAxisSeries.map(function (i) {
    return i[1].grossProfitMargin;
  });
  var operatingProfitMargin = yAxisSeries.map(function (i) {
    return i[1].operatingProfitMargin;
  });
  var netProfitMargin = yAxisSeries.map(function (i) {
    return i[1].netProfitMargin;
  });
  var returnOnEquity = yAxisSeries.map(function (i) {
    return i[1].returnOnEquity;
  });
  var eBITperRevenue = yAxisSeries.map(function (i) {
    return i[1].eBITperRevenue;
  });
  set1 = {
    name: "Gross Profit Margin",
    data: grossProfitMargin
  };
  set2 = {
    name: "Operating Profit Margin",
    data: operatingProfitMargin
  };
  set3 = {
    name: "Net Profit Margin",
    data: netProfitMargin
  };
  set4 = {
    name: "Return on Equity",
    data: returnOnEquity
  };
  set5 = {
    name: "EBIT per Revenue",
    data: eBITperRevenue
  };
  return [set1, set2, set3, set4, set5];
};

var getYSeriesDataDebtMatrix = function getYSeriesDataDebtMatrix(obj) {
  var set1,
      set2,
      set3,
      set4 = {};
  var yAxisSeries = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      yAxisSeries.push([key, obj[key].debtRatios]);
    }
  }

  var debtRatio = yAxisSeries.map(function (i) {
    return i[1].debtRatio;
  });
  var debtEquityRatio = yAxisSeries.map(function (i) {
    return i[1].debtEquityRatio;
  });
  var totalDebtToCapitalization = yAxisSeries.map(function (i) {
    return i[1].totalDebtToCapitalization;
  });
  var companyEquityMultiplier = yAxisSeries.map(function (i) {
    return i[1].companyEquityMultiplier;
  });
  set1 = {
    name: "Debt Ratio",
    data: debtRatio
  };
  set2 = {
    name: "Debt to Equity Ratio",
    data: debtEquityRatio
  };
  set3 = {
    name: "Total Debt To Capitalization ratio",
    data: totalDebtToCapitalization
  };
  set4 = {
    name: "Company Equity Multiplier",
    data: companyEquityMultiplier
  };
  return [set1, set2, set3, set4];
};

var StockAnalyticsDashBoard =
/*#__PURE__*/
function (_Component2) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StockAnalyticsDashBoard, _Component2);

  function StockAnalyticsDashBoard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StockAnalyticsDashBoard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(StockAnalyticsDashBoard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      stockTicker: "",
      stockTickerAndLabel: "",
      symbolList: [],
      fromDate: "",
      toDate: "",
      xAxisData: [],
      yAxisData_StockClosingPrice: [],
      shouldSandP_Data_fetch: false,
      ySeriesDataForValuationRatios: [],
      xSeriesDataForValuationRatios: [],
      ySeriesDataForProfitabilityRatios: [],
      ySeriesDataForDebtRatios: []
    };

    _this.handleAutocompletionChange = function (name) {
      return function (value) {
        _this.setState({
          stockTicker: value.value
        }, function () {
          var stockTickerWithName = _this.state.symbolList.filter(function (i) {
            return i.value === _this.state.stockTicker;
          })[0].label;

          _this.setState({
            stockTickerAndLabel: stockTickerWithName
          });
        });
      };
    };

    _this.handleSubmitToFetchAPI = function () {
      var _this$state = _this.state,
          stockTicker = _this$state.stockTicker,
          fromDate = _this$state.fromDate,
          toDate = _this$state.toDate;
      var APIkey = "5TTZhdGlgTt4VVNrFYcAxaShSxvKJ9wKcinwoLl75NoVYWadlh7WiJ3l6SZJ";

      if (stockTicker !== "" && fromDate !== "" && toDate !== "") {
        var url_stockPrice = "https://www.worldtradingdata.com/api/v1/history?symbol=".concat(stockTicker, "&date_from=").concat(fromDate, "&date_to=").concat(toDate, "&output=json&sort=newest&api_token=").concat(APIkey);
        var url_stockFundamentalsValuationRatios = "https://financialmodelingprep.com/api/financial-ratios/".concat(stockTicker, "?datatype=json");
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.all([axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(url_stockPrice), axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(url_stockFundamentalsValuationRatios)]).then(axios__WEBPACK_IMPORTED_MODULE_12___default.a.spread(function (stockPriceData, stockFundamentalsData) {
          console.log("RECEIVED DATA ", stockPriceData.data.history);
          var closingPriceDate = getDateAndClosingPrice(stockPriceData.data.history)[0];
          var closingPrice = getDateAndClosingPrice(stockPriceData.data.history)[1];

          _this.setState({
            xAxisData: closingPriceDate,
            yAxisData_StockClosingPrice: closingPrice,
            ySeriesDataForValuationRatios: getYSeriesDataValuationMatrix(stockFundamentalsData.data.financialRatios),
            xSeriesDataForValuationRatios: Object.keys(stockFundamentalsData.data.financialRatios),
            ySeriesDataForProfitabilityRatios: getYSeriesDataProfitabilityMatrix(stockFundamentalsData.data.financialRatios),
            ySeriesDataForDebtRatios: getYSeriesDataDebtMatrix(stockFundamentalsData.data.financialRatios),
            shouldSandP_Data_fetch: true
          });
        })).catch(function (error) {
          console.log(error);
        });
      }
    };

    _this.handleFromDateChange = function (date) {
      var fromDateFormatted = convertDateFromStringToAPIFormat(date);

      _this.setState({
        fromDate: fromDateFormatted
      });
    };

    _this.handleToDateChange = function (date) {
      var toDateFormatted = convertDateFromStringToAPIFormat(date);

      _this.setState({
        toDate: toDateFormatted
      });
    };

    return _this;
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StockAnalyticsDashBoard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://api.iextrading.com/1.0/ref-data/symbols?filter=symbol,name").then(function (res) {
        _this2.setState({
          symbolList: res.data.map(function (item) {
            return {
              value: item.symbol,
              label: "".concat(item.symbol, " ").concat(item.name)
            };
          })
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (this.state.fromDate !== prevState.fromDate && this.state.shouldSandP_Data_fetch || this.state.toDate !== prevState.toDate && this.state.shouldSandP_Data_fetch) {
        var _this$state2 = this.state,
            stockTicker = _this$state2.stockTicker,
            fromDate = _this$state2.fromDate,
            toDate = _this$state2.toDate;
        var APIkey = "5TTZhdGlgTt4VVNrFYcAxaShSxvKJ9wKcinwoLl75NoVYWadlh7WiJ3l6SZJ";

        if (stockTicker !== "" && fromDate !== "" && toDate !== "") {
          var url_stockPrice = "https://www.worldtradingdata.com/api/v1/history?symbol=".concat(stockTicker, "&date_from=").concat(fromDate, "&date_to=").concat(toDate, "&output=json&sort=newest&api_token=").concat(APIkey);
          axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(url_stockPrice).then(function (res) {
            var closingPriceDate = getDateAndClosingPrice(res.data.history)[0];
            var closingPrice = getDateAndClosingPrice(res.data.history)[1];

            _this3.setState({
              xAxisData: closingPriceDate,
              yAxisData_StockClosingPrice: closingPrice,
              shouldSandP_Data_fetch: true
            });
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          theme = _this$props2.theme;
      var selectStyles = {
        input: function input(base) {
          return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
            width: "20em",
            margin: "auto",
            color: theme.palette.text.primary,
            "& input": {
              font: "inherit"
            }
          });
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(material_ui_pickers__WEBPACK_IMPORTED_MODULE_17__["MuiPickersUtilsProvider"], {
        utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, console.log("CLOSING PRICE ", this.state.yAxisData_StockClosingPrice), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.topSearchBarPaper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.reactSelectAndDatePicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_15__["default"], {
        classes: classes,
        styles: selectStyles,
        onChange: this.handleAutocompletionChange("single"),
        filterOption: Object(react_select__WEBPACK_IMPORTED_MODULE_15__["createFilter"])({
          ignoreAccents: false
        }) // this makes all the difference to handle very large number of list
        ,
        components: {
          MenuList: MenuList
        },
        options: this.state.symbolList,
        value: this.state.stockTicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.bothDatePicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(material_ui_pickers__WEBPACK_IMPORTED_MODULE_17__["DatePicker"], {
        className: classes.individualDatePicker,
        keyboard: true,
        format: "dd/MM/yyyy",
        mask: function mask(value) {
          return value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : [];
        },
        label: "From Date",
        disableOpenOnEnter: true,
        animateYearScrolling: false,
        value: this.state.fromDate,
        onChange: this.handleFromDateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(material_ui_pickers__WEBPACK_IMPORTED_MODULE_17__["DatePicker"], {
        className: classes.individualDatePicker,
        keyboard: true,
        format: "dd/MM/yyyy",
        mask: function mask(value) {
          return value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : [];
        },
        label: "To Date",
        disableOpenOnEnter: true,
        animateYearScrolling: false,
        value: this.state.toDate,
        onChange: this.handleToDateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.handleSubmitToFetchAPI,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, "Get data", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_20___default.a, {
        className: classes.rightIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "send"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.bottomLeftPaper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "h6",
        component: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, "End of Day Closing Price of ", this.state.stockTickerAndLabel, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StockLineChart__WEBPACK_IMPORTED_MODULE_21__["default"], {
        xAxisData: this.state.xAxisData,
        yAxisData_StockClosingPrice: this.state.yAxisData_StockClosingPrice,
        stockTicker: this.state.stockTicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.bottomRightPaper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "h6",
        component: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, "S&P 500 P/E index EOD closing price during same time", this.state.fromDate !== "" && this.state.toDate !== "" && this.state.shouldSandP_Data_fetch === true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SandP500_PE__WEBPACK_IMPORTED_MODULE_14__["default"], {
        fromDate: this.state.fromDate,
        toDate: this.state.toDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }) : null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.bottomRightPaper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "h6",
        component: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "Key Valuation matrix for past five years matrix", " ", this.state.stockTickerAndLabel, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ValuationRatios__WEBPACK_IMPORTED_MODULE_22__["default"], {
        ySeriesDataForValuationRatios: this.state.ySeriesDataForValuationRatios,
        xSeriesDataForValuationRatios: this.state.xSeriesDataForValuationRatios,
        yAxisData_StockClosingPrice: this.state.yAxisData_StockClosingPrice,
        stockTicker: this.state.stockTicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.bottomRightPaper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "h6",
        component: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, "Key Profitabilty matrix for past five years matrix", " ", this.state.stockTickerAndLabel, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProfitabilityRatios__WEBPACK_IMPORTED_MODULE_23__["default"], {
        ySeriesDataForProfitabilityRatios: this.state.ySeriesDataForProfitabilityRatios,
        xSeriesDataForValuationRatios: this.state.xSeriesDataForValuationRatios,
        stockTicker: this.state.stockTicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.bottomRightPaper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "h6",
        component: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, "Key Debt matrix for past five years matrix", " ", this.state.stockTickerAndLabel, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DebtRatios__WEBPACK_IMPORTED_MODULE_24__["default"], {
        ySeriesDataForDebtRatios: this.state.ySeriesDataForDebtRatios,
        xSeriesDataForValuationRatios: this.state.xSeriesDataForValuationRatios,
        stockTicker: this.state.stockTicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }))))));
    }
  }]);

  return StockAnalyticsDashBoard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
StockAnalyticsDashBoard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(_Styles_analyticsStyles_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
  withTheme: true
})(StockAnalyticsDashBoard));
/* 1> Explanation on the two function getXAxis and getYAxis

Received data from API will be as below
"data": [
            ["2018-02-23", 183.29],
            ["2018-02-22", 178.99], ]

But for the line-graph I need

var config = {
  xAxis: {
    categories: ["2018-02-23", '2018-02-22']
  },
  series: [{
    data: [29.9, 71.5 ]
  }]
};

*/

/***/ }),

/***/ "./src/Components/StockAnalytics/StockLineChart.js":
/*!*********************************************************!*\
  !*** ./src/Components/StockAnalytics/StockLineChart.js ***!
  \*********************************************************/
/*! exports provided: StockLineChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLineChart", function() { return StockLineChart; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/StockAnalytics/StockLineChart.js";


var ReactHighChart = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var _require = __webpack_require__(/*! moving-averages */ "./node_modules/moving-averages/src/index.js"),
    ma = _require.ma,
    dma = _require.dma,
    ema = _require.ema,
    sma = _require.sma,
    wma = _require.wma;

var StockLineChart =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StockLineChart, _Component);

  function StockLineChart() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StockLineChart);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StockLineChart).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StockLineChart, [{
    key: "render",
    value: function render() {
      var config = {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [[0, "rgb(255, 255, 255)"], [1, "rgb(247, 247, 152)"]]
          }
        },
        title: {
          text: "Showing end of day closing price and 5-day moving average for stock ".concat(this.props.stockTicker, " ")
        },
        yAxis: {
          title: {
            text: "Price in USD"
          }
        },
        xAxis: {
          categories: this.props.xAxisData,
          labels: {
            align: "right",
            rotation: "-45"
          }
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            }
          }
        },
        series: [{
          name: "".concat(this.props.stockTicker || "Closing Price"),
          data: this.props.yAxisData_StockClosingPrice.reverse()
        }, {
          name: "Moving Averages",
          color: "red",
          data: ma(this.props.yAxisData_StockClosingPrice, 5).slice(4).reverse()
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 800
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
              }
            }
          }]
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ReactHighChart, {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    }
  }]);

  return StockLineChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (StockLineChart);

/***/ }),

/***/ "./src/Components/StockAnalytics/Styles/analyticsStyles.js":
/*!*****************************************************************!*\
  !*** ./src/Components/StockAnalytics/Styles/analyticsStyles.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    topLeftPaper: {
      width: "100%",
      height: "145px",
      paddingLeft: "15px",
      verticalAlign: "center",
      textAlign: "center",
      color: "white",
      backgroundColor: "rgb(255, 87, 34)",
      borderRadius: "5px",
      fontSize: 20,
      cursor: "pointer"
    },
    topRightPaper: {
      marginLeft: "15px",
      width: "100%",
      height: "145px",
      paddingLeft: "15px",
      verticalAlign: "center",
      textAlign: "center",
      color: "white",
      backgroundColor: "rgb(41, 182, 246)",
      borderRadius: "5px",
      fontSize: 20,
      cursor: "pointer"
    },
    bottomLeftPaper: {
      marginTop: "15px",
      width: "100%",
      minWidth: "400px",
      height: "450px",
      paddingLeft: "15px",
      verticalAlign: "center",
      textAlign: "center",
      color: "white",
      backgroundColor: "white",
      borderRadius: "5px",
      fontSize: 20,
      cursor: "pointer",
      overflow: "auto"
    },
    bottomRightPaper: {
      marginLeft: "15px",
      marginTop: "15px",
      width: "100%",
      height: "450px",
      paddingLeft: "15px",
      verticalAlign: "center",
      textAlign: "center",
      color: "white",
      backgroundColor: "white",
      borderRadius: "5px",
      fontSize: 20,
      cursor: "pointer",
      overflow: "auto"
    },
    topSearchBarPaper: {
      display: "flex",
      flexDirection: "row",
      margin: "70px auto 0",
      maxWidth: "100%",
      height: "75px"
    },
    reactSelectAndDatePicker: {
      display: "flex",
      flexDirection: "row",
      margin: "auto"
    },
    bothDatePicker: {
      display: "flex",
      flexDirection: "row",
      marginLeft: "10px",
      marginTop: 0
    },
    individualDatePicker: {
      marginLeft: "10px",
      width: "30%",
      marginTop: 0
    },
    button: {
      marginLeft: "15px"
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    },
    anchorIcon: {
      paddingRight: "15px",
      marginTop: "20%",
      marginRight: "85%"
    },
    portuser: {
      marginLeft: "85%",
      marginTop: "2%",
      marginBottom: "10%",
      fontSize: "65px"
    },
    ports: {
      marginLeft: "80%",
      fontSize: "65px"
    },
    numberofPorts: {
      float: "right",
      paddingRight: "3%",
      fontSize: "25px"
    },
    divider: {
      height: theme.spacing.unit * 2
      /* styles for the Autocompletion while searching for stock ticker */

      /*  List: {
        border: 1px solid #d9dddd;
      },
        ListItemOdd : {
        display: flex;
        align-items: center;
        justify-content: center;
      }
       ListItemEven: {
        background-color: #f8f8f0;
      } */

    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/Components/StockAnalytics/ValuationRatios.js":
/*!**********************************************************!*\
  !*** ./src/Components/StockAnalytics/ValuationRatios.js ***!
  \**********************************************************/
/*! exports provided: ValuationRatios, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuationRatios", function() { return ValuationRatios; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Components/StockAnalytics/ValuationRatios.js";


var ReactHighChart = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var ValuationRatios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ValuationRatios, _Component);

  function ValuationRatios() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ValuationRatios);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ValuationRatios).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ValuationRatios, [{
    key: "render",
    value: function render() {
      var config = Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [[0, "rgb(255, 255, 255)"], [1, "rgb(247, 247, 152)"]]
          },
          polar: true,
          type: "column"
        },
        xAxis: {
          categories: this.props.xSeriesDataForValuationRatios,
          crosshair: true,
          labels: {
            align: "right",
            rotation: "-45"
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Numbers in ratio"
          }
        },
        series: this.props.ySeriesDataForValuationRatios
      }, this.props.yAxisData_StockClosingPrice, {
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        title: {
          text: "".concat(this.props.stockTicker || "Stock Ticker")
        }
      });

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ReactHighChart, {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return ValuationRatios;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ValuationRatios);

/***/ }),

/***/ "./src/Components/commonStyles/ModuleItemListStyles.js":
/*!*************************************************************!*\
  !*** ./src/Components/commonStyles/ModuleItemListStyles.js ***!
  \*************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = function styles(theme) {
  return {
    palette: {
      primary: {
        main: "#2196f3"
      },
      secondary: {
        main: "#0023ff"
      },
      error: {
        main: "#ee0053"
      }
    },
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 4,
      overflow: "auto"
    },
    space: {
      marginTop: theme.spacing.unit * 2
    },
    fab: {
      margin: theme.spacing.unit
    },
    fabButton: {
      margin: theme.spacing.unit,
      marginLeft: "46%"
    },
    extendedIcon: {
      marginRight: theme.spacing.unit
    },
    lightTooltip: {
      background: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      fontSize: 16
    }
  };
};

/***/ }),

/***/ "./src/Dashboard.js":
/*!**************************!*\
  !*** ./src/Dashboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Dashboard.js";


var Dashboard = function Dashboard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "100px",
      marginTop: "100px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Open the side bar to move to different section"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/Routes/DashboardRoutes.js":
/*!***************************************!*\
  !*** ./src/Routes/DashboardRoutes.js ***!
  \***************************************/
/*! exports provided: DashboardRoutes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/NotFound/NotFound */ "./src/Components/NotFound/NotFound.js");
/* harmony import */ var _Components_StockAnalytics_StockAnalyticsDashBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/StockAnalytics/StockAnalyticsDashBoard */ "./src/Components/StockAnalytics/StockAnalyticsDashBoard.js");
/* harmony import */ var _Components_AppDashBoard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/AppDashBoard */ "./src/Components/AppDashBoard.js");
/* harmony import */ var _Components_CSVParsing_CSVParsing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/CSVParsing/CSVParsing */ "./src/Components/CSVParsing/CSVParsing.js");
/* harmony import */ var _Components_Main_MainDashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Main/MainDashboard */ "./src/Components/Main/MainDashboard.js");
/* harmony import */ var _Components_BitCoin_BitCoin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/BitCoin/BitCoin */ "./src/Components/BitCoin/BitCoin.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Dashboard */ "./src/Dashboard.js");





var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/Routes/DashboardRoutes.js";









var DashboardRoutes =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DashboardRoutes, _Component);

  function DashboardRoutes() {
    Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardRoutes);

    return Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DashboardRoutes).apply(this, arguments));
  }

  Object(_Users_nandupokhrel_Desktop_FINANCE_101_stock_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardRoutes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/",
        component: _Dashboard__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/stock_dashboard",
        component: _Components_StockAnalytics_StockAnalyticsDashBoard__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/csvparsing",
        component: _Components_CSVParsing_CSVParsing__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/bitcoin",
        component: _Components_BitCoin_BitCoin__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/main",
        component: _Components_Main_MainDashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        component: _Components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })));
    }
  }]);

  return DashboardRoutes;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (DashboardRoutes);

/***/ }),

/***/ "./src/assets/Images/Icons/Bold-and-Vibrant-colors.png":
/*!*************************************************************!*\
  !*** ./src/assets/Images/Icons/Bold-and-Vibrant-colors.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/Images/Icons/bitcoin.svg":
/*!*********************************************!*\
  !*** ./src/assets/Images/Icons/bitcoin.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bitcoin.cfa9ddba.svg";

/***/ }),

/***/ "./src/assets/Images/Icons/images.jpg":
/*!********************************************!*\
  !*** ./src/assets/Images/Icons/images.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/images.8b65baa7.jpg";

/***/ }),

/***/ "./src/assets/Images/Icons/krishna.png":
/*!*********************************************!*\
  !*** ./src/assets/Images/Icons/krishna.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/Images/Icons/stock_chart.png":
/*!*************************************************!*\
  !*** ./src/assets/Images/Icons/stock_chart.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/stock_chart.e84056e9.png";

/***/ }),

/***/ "./src/assets/Images/car.svg":
/*!***********************************!*\
  !*** ./src/assets/Images/car.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/car.53fe152c.svg";

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])());

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/index.js";







__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();

var Dashboard = function Dashboard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dashboard, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), document.getElementById("root"));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/nandupokhrel/Desktop/FINANCE_101/stock-dashboard-react-master/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map