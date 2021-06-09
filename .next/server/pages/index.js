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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/andresgalindo/Repos/clickup-todo-app/pages/index.js\";\n\n\n\n\n\nconst clientId = 'AQV6BUJES9F2HXYWSITGRI8FMYCPXX44';\nconst clientSecret = 'CSHQQOO1Q9U17W2BVETWDRCB6Z3FXZAOKBV4X86A889TYLHPMI3AM1OX3YOU9C7C';\nfunction Home() {\n  const {\n    0: lists,\n    1: setLists\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n  const {\n    0: tasks,\n    1: setTasks\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n  const {\n    0: taskInput,\n    1: setTaskInput\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async () => {\n    // if(!router.isReady) return;\n    // const {code} = router.query;\n    // console.log(router.query);\n    // if(!code) {\n    //   window.open(`https://app.clickup.com/api?client_id=${clientId}&redirect_uri=https://clickup-todo-app.vercel.app`, \"_self\");\n    // } else {\n    //   const token = axios.post(`https://app.clickup.com/api/v2/oauth/token/?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`);\n    //   console.log('test token', token);\n    //   // const data = await axios.get('https://api.clickuppp.com/api/v2/folder/38093451/list?archived=false', {\n    //   //   headers: {\n    //   //     Authorization: 'pk_14719907_QWTOCXX58D8GS9PNE4QAYZ4LIRKWQPE9'\n    //   //   }\n    //   // })\n    // }\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('http://localhost:5000');\n    console.log('test lists', data.lists);\n    setLists(data.lists);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async () => {\n    if (lists.length) {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:5000/tasks/${lists[0].id}`);\n      console.log('test tasks', data);\n      setTasks(data.tasks);\n    }\n  }, [lists.length]);\n\n  async function handleTaskSave() {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:5000/tasks/${lists[0].id}`, {\n      name: taskInput\n    });\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:5000/tasks/${lists[0].id}`);\n    setTasks(data.tasks);\n    setTaskInput('');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"ClickUp TODO App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [lists.map(list => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: list.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tasks.map(task => {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: task.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 24\n              }, this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        placeholder: \"Enter new task...\",\n        onChange: e => setTaskInput(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleTaskSave,\n        children: \"Save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlja3VwLXRvZG8tYXBwLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIkhvbWUiLCJsaXN0cyIsInNldExpc3RzIiwidXNlU3RhdGUiLCJ0YXNrcyIsInNldFRhc2tzIiwidGFza0lucHV0Iiwic2V0VGFza0lucHV0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZGF0YSIsImF4aW9zIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImlkIiwiaGFuZGxlVGFza1NhdmUiLCJuYW1lIiwic3R5bGVzIiwibWFwIiwibGlzdCIsInRhc2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxHQUFHLGtDQUFqQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxrRUFBckI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJKLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1LLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxZQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxVQUFNO0FBQUNDO0FBQUQsUUFBUyxNQUFNQyxnREFBQSxDQUFVLHVCQUFWLENBQXJCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILElBQUksQ0FBQ1YsS0FBL0I7QUFDQUMsWUFBUSxDQUFDUyxJQUFJLENBQUNWLEtBQU4sQ0FBUjtBQUNELEdBbkJRLEVBbUJOLEVBbkJNLENBQVQ7QUFxQkFTLGtEQUFTLENBQUMsWUFBWTtBQUNwQixRQUFHVCxLQUFLLENBQUNjLE1BQVQsRUFBaUI7QUFDZixZQUFNO0FBQUNKO0FBQUQsVUFBUyxNQUFNQyxnREFBQSxDQUFXLCtCQUE4QlgsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTZSxFQUFHLEVBQXJELENBQXJCO0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILElBQTFCO0FBQ0FOLGNBQVEsQ0FBQ00sSUFBSSxDQUFDUCxLQUFOLENBQVI7QUFDRDtBQUNGLEdBTlEsRUFNTixDQUFDSCxLQUFLLENBQUNjLE1BQVAsQ0FOTSxDQUFUOztBQVFBLGlCQUFlRSxjQUFmLEdBQWdDO0FBQzlCLFVBQU1MLGlEQUFBLENBQVksK0JBQThCWCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEVBQUcsRUFBdEQsRUFBeUQ7QUFBRUUsVUFBSSxFQUFFWjtBQUFSLEtBQXpELENBQU47QUFDQSxVQUFNO0FBQUNLO0FBQUQsUUFBUyxNQUFNQyxnREFBQSxDQUFXLCtCQUE4QlgsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTZSxFQUFHLEVBQXJELENBQXJCO0FBQ0FYLFlBQVEsQ0FBQ00sSUFBSSxDQUFDUCxLQUFOLENBQVI7QUFDQUcsZ0JBQVksQ0FBQyxFQUFELENBQVo7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRVksMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSxpQkFDR2xCLEtBQUssQ0FBQ21CLEdBQU4sQ0FBV0MsSUFBRCxJQUFVO0FBQ25CLDRCQUNFO0FBQUEsa0NBQ0E7QUFBQSxzQkFBS0EsSUFBSSxDQUFDSDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFBLHNCQUNHZCxLQUFLLENBQUNnQixHQUFOLENBQVdFLElBQUQsSUFBVTtBQUNuQixrQ0FBTztBQUFBLDBCQUFLQSxJQUFJLENBQUNKO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBUDtBQUNELGFBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBO0FBQUEsd0JBREY7QUFVRCxPQVhBLENBREgsZUFhRTtBQUFPLG1CQUFXLEVBQUMsbUJBQW5CO0FBQXVDLGdCQUFRLEVBQUdLLENBQUQsSUFBT2hCLFlBQVksQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQWNFO0FBQVEsZUFBTyxFQUFFUixjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IGNsaWVudElkID0gJ0FRVjZCVUpFUzlGMkhYWVdTSVRHUkk4Rk1ZQ1BYWDQ0JztcbmNvbnN0IGNsaWVudFNlY3JldCA9ICdDU0hRUU9PMVE5VTE3VzJCVkVUV0RSQ0I2WjNGWFpBT0tCVjRYODZBODg5VFlMSFBNSTNBTTFPWDNZT1U5QzdDJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xpc3RzLCBzZXRMaXN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pOyBcbiAgY29uc3QgW3Rhc2tJbnB1dCwgc2V0VGFza0lucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAvLyBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICAvLyBjb25zdCB7Y29kZX0gPSByb3V0ZXIucXVlcnk7XG4gICAgLy8gY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICAvLyBpZighY29kZSkge1xuICAgIC8vICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vYXBwLmNsaWNrdXAuY29tL2FwaT9jbGllbnRfaWQ9JHtjbGllbnRJZH0mcmVkaXJlY3RfdXJpPWh0dHBzOi8vY2xpY2t1cC10b2RvLWFwcC52ZXJjZWwuYXBwYCwgXCJfc2VsZlwiKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc3QgdG9rZW4gPSBheGlvcy5wb3N0KGBodHRwczovL2FwcC5jbGlja3VwLmNvbS9hcGkvdjIvb2F1dGgvdG9rZW4vP2NsaWVudF9pZD0ke2NsaWVudElkfSZjbGllbnRfc2VjcmV0PSR7Y2xpZW50U2VjcmV0fSZjb2RlPSR7Y29kZX1gKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd0ZXN0IHRva2VuJywgdG9rZW4pO1xuICAgIC8vICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuY2xpY2t1cHBwLmNvbS9hcGkvdjIvZm9sZGVyLzM4MDkzNDUxL2xpc3Q/YXJjaGl2ZWQ9ZmFsc2UnLCB7XG4gICAgLy8gICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgIC8vICAgICBBdXRob3JpemF0aW9uOiAncGtfMTQ3MTk5MDdfUVdUT0NYWDU4RDhHUzlQTkU0UUFZWjRMSVJLV1FQRTknXG4gICAgLy8gICAvLyAgIH1cbiAgICAvLyAgIC8vIH0pXG4gICAgLy8gfVxuXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAnKTtcbiAgICBjb25zb2xlLmxvZygndGVzdCBsaXN0cycsIGRhdGEubGlzdHMpO1xuICAgIHNldExpc3RzKGRhdGEubGlzdHMpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBpZihsaXN0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Rhc2tzLyR7bGlzdHNbMF0uaWR9YCk7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCB0YXNrcycsIGRhdGEpO1xuICAgICAgc2V0VGFza3MoZGF0YS50YXNrcylcbiAgICB9XG4gIH0sIFtsaXN0cy5sZW5ndGhdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVRhc2tTYXZlKCkge1xuICAgIGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90YXNrcy8ke2xpc3RzWzBdLmlkfWAsIHsgbmFtZTogdGFza0lucHV0IH0pO1xuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Rhc2tzLyR7bGlzdHNbMF0uaWR9YCk7XG4gICAgc2V0VGFza3MoZGF0YS50YXNrcylcbiAgICBzZXRUYXNrSW5wdXQoJycpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNsaWNrVXAgVE9ETyBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtsaXN0cy5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz57bGlzdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPnt0YXNrLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdFbnRlciBuZXcgdGFzay4uLicgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrSW5wdXQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRhc2tTYXZlfT5TYXZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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