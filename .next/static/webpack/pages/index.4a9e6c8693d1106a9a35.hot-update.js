/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/andresgalindo/Repos/clickup-todo-app/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar clientId = 'AQV6BUJES9F2HXYWSITGRI8FMYCPXX44';\nvar clientSecret = 'CSHQQOO1Q9U17W2BVETWDRCB6Z3FXZAOKBV4X86A889TYLHPMI3AM1OX3YOU9C7C';\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      lists = _useState[0],\n      setLists = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      tasks = _useState2[0],\n      setTasks = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),\n      taskInput = _useState3[0],\n      setTaskInput = _useState3[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var _yield$axios$get, data;\n\n    return _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:5000');\n\n          case 2:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data;\n            console.log('test lists', data.lists);\n            setLists(data.lists);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var _yield$axios$get2, data;\n\n    return _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!lists.length) {\n              _context2.next = 7;\n              break;\n            }\n\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:5000/tasks/\".concat(lists[0].id));\n\n          case 3:\n            _yield$axios$get2 = _context2.sent;\n            data = _yield$axios$get2.data;\n            console.log('test tasks', data);\n            setTasks(data.tasks);\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), [lists.length]);\n\n  function handleTaskSave() {\n    return _handleTaskSave.apply(this, arguments);\n  }\n\n  function _handleTaskSave() {\n    _handleTaskSave = (0,_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      return _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n    return _handleTaskSave.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"ClickUp TODO App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [lists.map(function (list) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: list.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tasks.map(function (task) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: task.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 24\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        placeholder: \"Enter new task...\",\n        onChange: function onChange(e) {\n          return setTaskInput(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleTaskSave,\n        children: \"Save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"3tblYyBgxgkEvHJ0QVbjF5PX3Kk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImxpc3RzIiwic2V0TGlzdHMiLCJ0YXNrcyIsInNldFRhc2tzIiwidGFza0lucHV0Iiwic2V0VGFza0lucHV0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImlkIiwiaGFuZGxlVGFza1NhdmUiLCJzdHlsZXMiLCJtYXAiLCJsaXN0IiwibmFtZSIsInRhc2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLGtDQUFqQjtBQUNBLElBQU1DLFlBQVksR0FBRyxrRUFBckI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFSEYsK0NBQVEsQ0FBQyxFQUFELENBRkw7QUFBQSxNQUV0QkcsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUFBLG1CQUdLSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR3RCSyxTQUhzQjtBQUFBLE1BR1hDLFlBSFc7O0FBSTdCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMseVNBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZ0JhQyxnREFBQSxDQUFVLHVCQUFWLENBaEJiOztBQUFBO0FBQUE7QUFnQkRDLGdCQWhCQyxvQkFnQkRBLElBaEJDO0FBaUJSQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsSUFBSSxDQUFDVixLQUEvQjtBQUNBQyxvQkFBUSxDQUFDUyxJQUFJLENBQUNWLEtBQU4sQ0FBUjs7QUFsQlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQW1CTixFQW5CTSxDQUFUO0FBcUJBUSxrREFBUyx5U0FBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0xSLEtBQUssQ0FBQ2EsTUFERDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUVlSixnREFBQSx1Q0FBeUNULEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2MsRUFBbEQsRUFGZjs7QUFBQTtBQUFBO0FBRUNKLGdCQUZELHFCQUVDQSxJQUZEO0FBR05DLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixJQUExQjtBQUNBUCxvQkFBUSxDQUFDTyxJQUFJLENBQUNSLEtBQU4sQ0FBUjs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBTU4sQ0FBQ0YsS0FBSyxDQUFDYSxNQUFQLENBTk0sQ0FBVDs7QUEzQjZCLFdBbUNkRSxjQW5DYztBQUFBO0FBQUE7O0FBQUE7QUFBQSxnVEFtQzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQzZCO0FBQUE7QUFBQTs7QUF1QzdCLHNCQUNFO0FBQUssYUFBUyxFQUFFQywwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLGlCQUNHaEIsS0FBSyxDQUFDaUIsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNuQiw0QkFDRTtBQUFBLGtDQUNBO0FBQUEsc0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBQSxzQkFDR2pCLEtBQUssQ0FBQ2UsR0FBTixDQUFVLFVBQUNHLElBQUQsRUFBVTtBQUNuQixrQ0FBTztBQUFBLDBCQUFLQSxJQUFJLENBQUNEO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUNELGFBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUEsd0JBREY7QUFVRCxPQVhBLENBREgsZUFhRTtBQUFPLG1CQUFXLEVBQUMsbUJBQW5CO0FBQXVDLGdCQUFRLEVBQUUsa0JBQUNFLENBQUQ7QUFBQSxpQkFBT2hCLFlBQVksQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0U7QUFBUSxlQUFPLEVBQUVSLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBaEV1QmpCLEk7VUFJUFMsa0Q7OztLQUpPVCxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IGNsaWVudElkID0gJ0FRVjZCVUpFUzlGMkhYWVdTSVRHUkk4Rk1ZQ1BYWDQ0JztcbmNvbnN0IGNsaWVudFNlY3JldCA9ICdDU0hRUU9PMVE5VTE3VzJCVkVUV0RSQ0I2WjNGWFpBT0tCVjRYODZBODg5VFlMSFBNSTNBTTFPWDNZT1U5QzdDJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xpc3RzLCBzZXRMaXN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pOyBcbiAgY29uc3QgW3Rhc2tJbnB1dCwgc2V0VGFza0lucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAvLyBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICAvLyBjb25zdCB7Y29kZX0gPSByb3V0ZXIucXVlcnk7XG4gICAgLy8gY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICAvLyBpZighY29kZSkge1xuICAgIC8vICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vYXBwLmNsaWNrdXAuY29tL2FwaT9jbGllbnRfaWQ9JHtjbGllbnRJZH0mcmVkaXJlY3RfdXJpPWh0dHBzOi8vY2xpY2t1cC10b2RvLWFwcC52ZXJjZWwuYXBwYCwgXCJfc2VsZlwiKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc3QgdG9rZW4gPSBheGlvcy5wb3N0KGBodHRwczovL2FwcC5jbGlja3VwLmNvbS9hcGkvdjIvb2F1dGgvdG9rZW4vP2NsaWVudF9pZD0ke2NsaWVudElkfSZjbGllbnRfc2VjcmV0PSR7Y2xpZW50U2VjcmV0fSZjb2RlPSR7Y29kZX1gKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd0ZXN0IHRva2VuJywgdG9rZW4pO1xuICAgIC8vICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuY2xpY2t1cHBwLmNvbS9hcGkvdjIvZm9sZGVyLzM4MDkzNDUxL2xpc3Q/YXJjaGl2ZWQ9ZmFsc2UnLCB7XG4gICAgLy8gICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgIC8vICAgICBBdXRob3JpemF0aW9uOiAncGtfMTQ3MTk5MDdfUVdUT0NYWDU4RDhHUzlQTkU0UUFZWjRMSVJLV1FQRTknXG4gICAgLy8gICAvLyAgIH1cbiAgICAvLyAgIC8vIH0pXG4gICAgLy8gfVxuXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAnKTtcbiAgICBjb25zb2xlLmxvZygndGVzdCBsaXN0cycsIGRhdGEubGlzdHMpO1xuICAgIHNldExpc3RzKGRhdGEubGlzdHMpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBpZihsaXN0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Rhc2tzLyR7bGlzdHNbMF0uaWR9YCk7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCB0YXNrcycsIGRhdGEpO1xuICAgICAgc2V0VGFza3MoZGF0YS50YXNrcylcbiAgICB9XG4gIH0sIFtsaXN0cy5sZW5ndGhdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVRhc2tTYXZlKCkge1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2xpY2tVcCBUT0RPIEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAge2xpc3RzLm1hcCgobGlzdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgzPntsaXN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+e3Rhc2submFtZX08L2xpPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIG5ldyB0YXNrLi4uJyBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tJbnB1dChlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVGFza1NhdmV9PlNhdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});