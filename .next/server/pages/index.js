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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/andresgalindo/Repos/clickup-todo-app/pages/index.js\";\n\n\n\n\n\nfunction Home() {\n  const {\n    0: lists,\n    1: setLists\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n  const {\n    0: tasks,\n    1: setTasks\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n  const {\n    0: taskInput,\n    1: setTaskInput\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async () => {\n    // if(!router.isReady) return;\n    // const {code} = router.query;\n    // console.log(router.query);\n    // if(!code) {\n    //   window.open(`https://app.clickup.com/api?client_id=${clientId}&redirect_uri=https://clickup-todo-app.vercel.app`, \"_self\");\n    // } else {\n    //   const token = axios.post(`https://app.clickup.com/api/v2/oauth/token/?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`);\n    //   console.log('test token', token);\n    //   // const data = await axios.get('https://api.clickuppp.com/api/v2/folder/38093451/list?archived=false', {\n    //   //   headers: {\n    //   //     Authorization: 'pk_14719907_QWTOCXX58D8GS9PNE4QAYZ4LIRKWQPE9'\n    //   //   }\n    //   // })\n    // }\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('https://clickup-todo-app-backend.herokuapp.com/');\n    console.log('test lists', data.lists);\n    setLists(data.lists);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async () => {\n    if (lists.length) {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://clickup-todo-app-backend.herokuapp.com/tasks/${lists[0].id}`);\n      console.log('test tasks', data);\n      setTasks(data.tasks);\n    }\n  }, [lists.length]);\n\n  async function handleTaskSave() {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`https://clickup-todo-app-backend.herokuapp.com/tasks/${lists[0].id}`, {\n      name: taskInput\n    });\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://clickup-todo-app-backend.herokuapp.com/tasks/${lists[0].id}`);\n    setTasks(data.tasks);\n    setTaskInput('');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"ClickUp TODO App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [lists.map(list => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: list.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tasks.map(task => {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: task.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 24\n              }, this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        placeholder: \"Enter new task...\",\n        onChange: e => setTaskInput(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleTaskSave,\n        children: \"Save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlja3VwLXRvZG8tYXBwLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibGlzdHMiLCJzZXRMaXN0cyIsInVzZVN0YXRlIiwidGFza3MiLCJzZXRUYXNrcyIsInRhc2tJbnB1dCIsInNldFRhc2tJbnB1dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImRhdGEiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpZCIsImhhbmRsZVRhc2tTYXZlIiwibmFtZSIsInN0eWxlcyIsIm1hcCIsImxpc3QiLCJ0YXNrIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkosK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTUssTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLFlBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFVBQU07QUFBQ0M7QUFBRCxRQUFTLE1BQU1DLGdEQUFBLENBQVUsaURBQVYsQ0FBckI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkgsSUFBSSxDQUFDVixLQUEvQjtBQUNBQyxZQUFRLENBQUNTLElBQUksQ0FBQ1YsS0FBTixDQUFSO0FBQ0QsR0FuQlEsRUFtQk4sRUFuQk0sQ0FBVDtBQXFCQVMsa0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFFBQUdULEtBQUssQ0FBQ2MsTUFBVCxFQUFpQjtBQUNmLFlBQU07QUFBQ0o7QUFBRCxVQUFTLE1BQU1DLGdEQUFBLENBQVcsd0RBQXVEWCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEVBQUcsRUFBOUUsQ0FBckI7QUFDQUgsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkgsSUFBMUI7QUFDQU4sY0FBUSxDQUFDTSxJQUFJLENBQUNQLEtBQU4sQ0FBUjtBQUNEO0FBQ0YsR0FOUSxFQU1OLENBQUNILEtBQUssQ0FBQ2MsTUFBUCxDQU5NLENBQVQ7O0FBUUEsaUJBQWVFLGNBQWYsR0FBZ0M7QUFDOUIsVUFBTUwsaURBQUEsQ0FBWSx3REFBdURYLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2UsRUFBRyxFQUEvRSxFQUFrRjtBQUFFRSxVQUFJLEVBQUVaO0FBQVIsS0FBbEYsQ0FBTjtBQUNBLFVBQU07QUFBQ0s7QUFBRCxRQUFTLE1BQU1DLGdEQUFBLENBQVcsd0RBQXVEWCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEVBQUcsRUFBOUUsQ0FBckI7QUFDQVgsWUFBUSxDQUFDTSxJQUFJLENBQUNQLEtBQU4sQ0FBUjtBQUNBRyxnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFWSwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLGlCQUNHbEIsS0FBSyxDQUFDbUIsR0FBTixDQUFXQyxJQUFELElBQVU7QUFDbkIsNEJBQ0U7QUFBQSxrQ0FDQTtBQUFBLHNCQUFLQSxJQUFJLENBQUNIO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUVBO0FBQUEsc0JBQ0dkLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBV0UsSUFBRCxJQUFVO0FBQ25CLGtDQUFPO0FBQUEsMEJBQUtBLElBQUksQ0FBQ0o7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFQO0FBQ0QsYUFGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkE7QUFBQSx3QkFERjtBQVVELE9BWEEsQ0FESCxlQWFFO0FBQU8sbUJBQVcsRUFBQyxtQkFBbkI7QUFBdUMsZ0JBQVEsRUFBR0ssQ0FBRCxJQUFPaEIsWUFBWSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0U7QUFBUSxlQUFPLEVBQUVSLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xpc3RzLCBzZXRMaXN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pOyBcbiAgY29uc3QgW3Rhc2tJbnB1dCwgc2V0VGFza0lucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAvLyBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICAvLyBjb25zdCB7Y29kZX0gPSByb3V0ZXIucXVlcnk7XG4gICAgLy8gY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICAvLyBpZighY29kZSkge1xuICAgIC8vICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vYXBwLmNsaWNrdXAuY29tL2FwaT9jbGllbnRfaWQ9JHtjbGllbnRJZH0mcmVkaXJlY3RfdXJpPWh0dHBzOi8vY2xpY2t1cC10b2RvLWFwcC52ZXJjZWwuYXBwYCwgXCJfc2VsZlwiKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc3QgdG9rZW4gPSBheGlvcy5wb3N0KGBodHRwczovL2FwcC5jbGlja3VwLmNvbS9hcGkvdjIvb2F1dGgvdG9rZW4vP2NsaWVudF9pZD0ke2NsaWVudElkfSZjbGllbnRfc2VjcmV0PSR7Y2xpZW50U2VjcmV0fSZjb2RlPSR7Y29kZX1gKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd0ZXN0IHRva2VuJywgdG9rZW4pO1xuICAgIC8vICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuY2xpY2t1cHBwLmNvbS9hcGkvdjIvZm9sZGVyLzM4MDkzNDUxL2xpc3Q/YXJjaGl2ZWQ9ZmFsc2UnLCB7XG4gICAgLy8gICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgIC8vICAgICBBdXRob3JpemF0aW9uOiAncGtfMTQ3MTk5MDdfUVdUT0NYWDU4RDhHUzlQTkU0UUFZWjRMSVJLV1FQRTknXG4gICAgLy8gICAvLyAgIH1cbiAgICAvLyAgIC8vIH0pXG4gICAgLy8gfVxuXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2NsaWNrdXAtdG9kby1hcHAtYmFja2VuZC5oZXJva3VhcHAuY29tLycpO1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0IGxpc3RzJywgZGF0YS5saXN0cyk7XG4gICAgc2V0TGlzdHMoZGF0YS5saXN0cyk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGlmKGxpc3RzLmxlbmd0aCkge1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2NsaWNrdXAtdG9kby1hcHAtYmFja2VuZC5oZXJva3VhcHAuY29tL3Rhc2tzLyR7bGlzdHNbMF0uaWR9YCk7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCB0YXNrcycsIGRhdGEpO1xuICAgICAgc2V0VGFza3MoZGF0YS50YXNrcylcbiAgICB9XG4gIH0sIFtsaXN0cy5sZW5ndGhdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVRhc2tTYXZlKCkge1xuICAgIGF3YWl0IGF4aW9zLnBvc3QoYGh0dHBzOi8vY2xpY2t1cC10b2RvLWFwcC1iYWNrZW5kLmhlcm9rdWFwcC5jb20vdGFza3MvJHtsaXN0c1swXS5pZH1gLCB7IG5hbWU6IHRhc2tJbnB1dCB9KTtcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vY2xpY2t1cC10b2RvLWFwcC1iYWNrZW5kLmhlcm9rdWFwcC5jb20vdGFza3MvJHtsaXN0c1swXS5pZH1gKTtcbiAgICBzZXRUYXNrcyhkYXRhLnRhc2tzKVxuICAgIHNldFRhc2tJbnB1dCgnJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2xpY2tVcCBUT0RPIEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAge2xpc3RzLm1hcCgobGlzdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgzPntsaXN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+e3Rhc2submFtZX08L2xpPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIG5ldyB0YXNrLi4uJyBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tJbnB1dChlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVGFza1NhdmV9PlNhdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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