/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/andresgalindo/Repos/clickup-todo-app/pages/index.js\";\n\n\n\n\n\nconst clientId = 'AQV6BUJES9F2HXYWSITGRI8FMYCPXX44';\nconst clientSecret = 'CSHQQOO1Q9U17W2BVETWDRCB6Z3FXZAOKBV4X86A889TYLHPMI3AM1OX3YOU9C7C';\nfunction Home() {\n  const {\n    0: lists,\n    1: setLists\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const headers = new Headers();\n  headers.append('Authorization', 'pk_14719907_QWTOCXX58D8GS9PNE4QAYZ4LIRKWQPE9');\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async () => {\n    if (!router.isReady) return;\n    const {\n      code\n    } = router.query;\n    console.log(router.query);\n\n    if (!code) {\n      window.open(`https://app.clickup.com/api?client_id=${clientId}&redirect_uri=https://clickup-todo-app.vercel.app/`, \"_self\");\n    } else {\n      const token = await fetch(`https://app.clickup.com/api/v2/oauth/token/?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`, {\n        method: 'POST'\n      });\n      console.log('test token', token); // const data = await axios.get('https://api.clickuppp.com/api/v2/folder/38093451/list?archived=false', {\n      //   headers: {\n      //     Authorization: 'pk_14719907_QWTOCXX58D8GS9PNE4QAYZ4LIRKWQPE9'\n      //   }\n      // })\n    }\n  }, [router.isReady]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"ClickUp TODO App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Hello World\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlja3VwLXRvZG8tYXBwLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIkhvbWUiLCJsaXN0cyIsInNldExpc3RzIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInVzZUVmZmVjdCIsImlzUmVhZHkiLCJjb2RlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib3BlbiIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUcsa0NBQWpCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGtFQUFyQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsUUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsU0FBTyxDQUFDRSxNQUFSLENBQWUsZUFBZixFQUFnQyw4Q0FBaEM7QUFFQUMsa0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFFBQUcsQ0FBQ0wsTUFBTSxDQUFDTSxPQUFYLEVBQW9CO0FBQ3BCLFVBQU07QUFBQ0M7QUFBRCxRQUFTUCxNQUFNLENBQUNRLEtBQXRCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFNLENBQUNRLEtBQW5COztBQUNBLFFBQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ1JJLFlBQU0sQ0FBQ0MsSUFBUCxDQUFhLHlDQUF3Q2xCLFFBQVMsb0RBQTlELEVBQW1ILE9BQW5IO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTW1CLEtBQUssR0FBRyxNQUFNQyxLQUFLLENBQUUseURBQXdEcEIsUUFBUyxrQkFBaUJDLFlBQWEsU0FBUVksSUFBSyxFQUE5RyxFQUFpSDtBQUN4SVEsY0FBTSxFQUFFO0FBRGdJLE9BQWpILENBQXpCO0FBR0ZOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJHLEtBQTFCLEVBSk8sQ0FLTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFFRixHQWxCUSxFQWtCTixDQUFDYixNQUFNLENBQUNNLE9BQVIsQ0FsQk0sQ0FBVDtBQW9CQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVUsMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IGNsaWVudElkID0gJ0FRVjZCVUpFUzlGMkhYWVdTSVRHUkk4Rk1ZQ1BYWDQ0JztcbmNvbnN0IGNsaWVudFNlY3JldCA9ICdDU0hRUU9PMVE5VTE3VzJCVkVUV0RSQ0I2WjNGWFpBT0tCVjRYODZBODg5VFlMSFBNSTNBTTFPWDNZT1U5QzdDJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xpc3RzLCBzZXRMaXN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdwa18xNDcxOTkwN19RV1RPQ1hYNThEOEdTOVBORTRRQVlaNExJUktXUVBFOScpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gICAgY29uc3Qge2NvZGV9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XG4gICAgaWYoIWNvZGUpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2FwcC5jbGlja3VwLmNvbS9hcGk/Y2xpZW50X2lkPSR7Y2xpZW50SWR9JnJlZGlyZWN0X3VyaT1odHRwczovL2NsaWNrdXAtdG9kby1hcHAudmVyY2VsLmFwcC9gLCBcIl9zZWxmXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwcC5jbGlja3VwLmNvbS9hcGkvdjIvb2F1dGgvdG9rZW4vP2NsaWVudF9pZD0ke2NsaWVudElkfSZjbGllbnRfc2VjcmV0PSR7Y2xpZW50U2VjcmV0fSZjb2RlPSR7Y29kZX1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QgdG9rZW4nLCB0b2tlbik7XG4gICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5jbGlja3VwcHAuY29tL2FwaS92Mi9mb2xkZXIvMzgwOTM0NTEvbGlzdD9hcmNoaXZlZD1mYWxzZScsIHtcbiAgICAgIC8vICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgIEF1dGhvcml6YXRpb246ICdwa18xNDcxOTkwN19RV1RPQ1hYNThEOEdTOVBORTRRQVlaNExJUktXUVBFOSdcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICB9XG4gICAgXG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DbGlja1VwIFRPRE8gQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlja3VwLXRvZG8tYXBwLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9jZjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();