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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/andresgalindo/Repos/clickup-todo-app/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      lists = _useState[0],\n      setLists = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      tasks = _useState2[0],\n      setTasks = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),\n      taskInput = _useState3[0],\n      setTaskInput = _useState3[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var _yield$axios$get, data;\n\n    return _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://clickup-todo-app-backend.herokuapp.com/');\n\n          case 2:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data;\n            console.log('test lists', data.lists);\n            setLists(data.lists);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var _yield$axios$get2, data;\n\n    return _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!lists.length) {\n              _context2.next = 7;\n              break;\n            }\n\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://clickup-todo-app-backend.herokuapp.com/lists/\".concat(lists[0].id));\n\n          case 3:\n            _yield$axios$get2 = _context2.sent;\n            data = _yield$axios$get2.data;\n            console.log('test tasks', data);\n            setTasks(data.tasks);\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), [lists.length]);\n\n  function handleTaskSave() {\n    return _handleTaskSave.apply(this, arguments);\n  }\n\n  function _handleTaskSave() {\n    _handleTaskSave = (0,_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      var _yield$axios$get3, data;\n\n      return _Users_andresgalindo_Repos_clickup_todo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"https://clickup-todo-app-backend.herokuapp.com/tasks/\".concat(lists[0].id), {\n                name: taskInput\n              });\n\n            case 2:\n              _context3.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://clickup-todo-app-backend.herokuapp.com/lists/\".concat(lists[0].id));\n\n            case 4:\n              _yield$axios$get3 = _context3.sent;\n              data = _yield$axios$get3.data;\n              setTasks(data.tasks);\n              setTaskInput('');\n\n            case 8:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n    return _handleTaskSave.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"ClickUp TODO App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [lists.map(function (list) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: list.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tasks.map(function (task) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: task.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 24\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        placeholder: \"Enter new task...\",\n        onChange: function onChange(e) {\n          return setTaskInput(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleTaskSave,\n        children: \"Save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"3tblYyBgxgkEvHJ0QVbjF5PX3Kk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJsaXN0cyIsInNldExpc3RzIiwidGFza3MiLCJzZXRUYXNrcyIsInRhc2tJbnB1dCIsInNldFRhc2tJbnB1dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImF4aW9zIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpZCIsImhhbmRsZVRhc2tTYXZlIiwibmFtZSIsInN0eWxlcyIsIm1hcCIsImxpc3QiLCJ0YXNrIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVIRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRXRCRyxLQUZzQjtBQUFBLE1BRWZDLFFBRmU7O0FBQUEsbUJBR0tKLCtDQUFRLENBQUMsRUFBRCxDQUhiO0FBQUEsTUFHdEJLLFNBSHNCO0FBQUEsTUFHWEMsWUFIVzs7QUFJN0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyx5U0FBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFnQmFDLGdEQUFBLENBQVUsaURBQVYsQ0FoQmI7O0FBQUE7QUFBQTtBQWdCREMsZ0JBaEJDLG9CQWdCREEsSUFoQkM7QUFpQlJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixJQUFJLENBQUNWLEtBQS9CO0FBQ0FDLG9CQUFRLENBQUNTLElBQUksQ0FBQ1YsS0FBTixDQUFSOztBQWxCUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBbUJOLEVBbkJNLENBQVQ7QUFxQkFRLGtEQUFTLHlTQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTFIsS0FBSyxDQUFDYSxNQUREO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBRWVKLGdEQUFBLGdFQUFrRVQsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTYyxFQUEzRSxFQUZmOztBQUFBO0FBQUE7QUFFQ0osZ0JBRkQscUJBRUNBLElBRkQ7QUFHTkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLElBQTFCO0FBQ0FQLG9CQUFRLENBQUNPLElBQUksQ0FBQ1IsS0FBTixDQUFSOztBQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFNTixDQUFDRixLQUFLLENBQUNhLE1BQVAsQ0FOTSxDQUFUOztBQTNCNkIsV0FtQ2RFLGNBbkNjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdUQW1DN0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1FOLGlEQUFBLGdFQUFtRVQsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTYyxFQUE1RSxHQUFrRjtBQUFFRSxvQkFBSSxFQUFFWjtBQUFSLGVBQWxGLENBRFI7O0FBQUE7QUFBQTtBQUFBLHFCQUV1QkssZ0RBQUEsZ0VBQWtFVCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNjLEVBQTNFLEVBRnZCOztBQUFBO0FBQUE7QUFFU0osa0JBRlQscUJBRVNBLElBRlQ7QUFHRVAsc0JBQVEsQ0FBQ08sSUFBSSxDQUFDUixLQUFOLENBQVI7QUFDQUcsMEJBQVksQ0FBQyxFQUFELENBQVo7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQzZCO0FBQUE7QUFBQTs7QUEwQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFFWSwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLGlCQUNHakIsS0FBSyxDQUFDa0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNuQiw0QkFDRTtBQUFBLGtDQUNBO0FBQUEsc0JBQUtBLElBQUksQ0FBQ0g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBQSxzQkFDR2QsS0FBSyxDQUFDZ0IsR0FBTixDQUFVLFVBQUNFLElBQUQsRUFBVTtBQUNuQixrQ0FBTztBQUFBLDBCQUFLQSxJQUFJLENBQUNKO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUNELGFBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUEsd0JBREY7QUFVRCxPQVhBLENBREgsZUFhRTtBQUFPLG1CQUFXLEVBQUMsbUJBQW5CO0FBQXVDLGdCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxpQkFBT2hCLFlBQVksQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0U7QUFBUSxlQUFPLEVBQUVSLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBbkV1QmpCLEk7VUFJUFMsa0Q7OztLQUpPVCxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsaXN0cywgc2V0TGlzdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTsgXG4gIGNvbnN0IFt0YXNrSW5wdXQsIHNldFRhc2tJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgLy8gaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gICAgLy8gY29uc3Qge2NvZGV9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XG4gICAgLy8gaWYoIWNvZGUpIHtcbiAgICAvLyAgIHdpbmRvdy5vcGVuKGBodHRwczovL2FwcC5jbGlja3VwLmNvbS9hcGk/Y2xpZW50X2lkPSR7Y2xpZW50SWR9JnJlZGlyZWN0X3VyaT1odHRwczovL2NsaWNrdXAtdG9kby1hcHAudmVyY2VsLmFwcGAsIFwiX3NlbGZcIik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnN0IHRva2VuID0gYXhpb3MucG9zdChgaHR0cHM6Ly9hcHAuY2xpY2t1cC5jb20vYXBpL3YyL29hdXRoL3Rva2VuLz9jbGllbnRfaWQ9JHtjbGllbnRJZH0mY2xpZW50X3NlY3JldD0ke2NsaWVudFNlY3JldH0mY29kZT0ke2NvZGV9YCk7XG4gICAgLy8gICBjb25zb2xlLmxvZygndGVzdCB0b2tlbicsIHRva2VuKTtcbiAgICAvLyAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmNsaWNrdXBwcC5jb20vYXBpL3YyL2ZvbGRlci8zODA5MzQ1MS9saXN0P2FyY2hpdmVkPWZhbHNlJywge1xuICAgIC8vICAgLy8gICBoZWFkZXJzOiB7XG4gICAgLy8gICAvLyAgICAgQXV0aG9yaXphdGlvbjogJ3BrXzE0NzE5OTA3X1FXVE9DWFg1OEQ4R1M5UE5FNFFBWVo0TElSS1dRUEU5J1xuICAgIC8vICAgLy8gICB9XG4gICAgLy8gICAvLyB9KVxuICAgIC8vIH1cblxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9jbGlja3VwLXRvZG8tYXBwLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS8nKTtcbiAgICBjb25zb2xlLmxvZygndGVzdCBsaXN0cycsIGRhdGEubGlzdHMpO1xuICAgIHNldExpc3RzKGRhdGEubGlzdHMpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBpZihsaXN0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9jbGlja3VwLXRvZG8tYXBwLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9saXN0cy8ke2xpc3RzWzBdLmlkfWApO1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QgdGFza3MnLCBkYXRhKTtcbiAgICAgIHNldFRhc2tzKGRhdGEudGFza3MpXG4gICAgfVxuICB9LCBbbGlzdHMubGVuZ3RoXSlcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVUYXNrU2F2ZSgpIHtcbiAgICBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL2NsaWNrdXAtdG9kby1hcHAtYmFja2VuZC5oZXJva3VhcHAuY29tL3Rhc2tzLyR7bGlzdHNbMF0uaWR9YCwgeyBuYW1lOiB0YXNrSW5wdXQgfSk7XG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2NsaWNrdXAtdG9kby1hcHAtYmFja2VuZC5oZXJva3VhcHAuY29tL2xpc3RzLyR7bGlzdHNbMF0uaWR9YCk7XG4gICAgc2V0VGFza3MoZGF0YS50YXNrcylcbiAgICBzZXRUYXNrSW5wdXQoJycpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNsaWNrVXAgVE9ETyBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtsaXN0cy5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz57bGlzdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPnt0YXNrLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdFbnRlciBuZXcgdGFzay4uLicgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrSW5wdXQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRhc2tTYXZlfT5TYXZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});