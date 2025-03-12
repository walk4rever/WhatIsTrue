/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/components/Navigation.tsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Navigation.module.css */ \"(pages-dir-node)/./src/styles/Navigation.module.css\");\n/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Navigation() {\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSignOut = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)({\n            redirect: false\n        });\n        router.push('/');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().navContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                    children: \"WhatIsTrue\"\n                }, void 0, false, {\n                    fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().menuButton),\n                    onClick: ()=>setMenuOpen(!menuOpen),\n                    \"aria-label\": \"Toggle menu\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: `${(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().navLinks)} ${menuOpen ? (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ''}`,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/verify\",\n                            className: router.pathname === '/verify' ? (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeLink) : '',\n                            children: \"Verify Content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            className: router.pathname === '/about' ? (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeLink) : '',\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/api-docs\",\n                            className: router.pathname === '/api-docs' ? (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeLink) : '',\n                            children: \"API\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/dashboard\",\n                                    className: router.pathname === '/dashboard' ? (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeLink) : '',\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSignOut,\n                                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().authButton),\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/login\",\n                                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().authButton),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/register\",\n                                    className: `${(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().authButton)} ${(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().registerButton)}`,\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/components/Navigation.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDVztBQUNjO0FBQ0Q7QUFFdEMsU0FBU007SUFDdEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR0wsMkRBQVVBO0lBQ3BDLE1BQU1NLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFFekMsTUFBTVksZ0JBQWdCO1FBQ3BCLE1BQU1SLHdEQUFPQSxDQUFDO1lBQUVTLFVBQVU7UUFBTTtRQUNoQ0osT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1gsaUZBQWlCO2tCQUMvQiw0RUFBQ2E7WUFBSUYsV0FBV1gsbUZBQW1COzs4QkFDakMsOERBQUNKLGtEQUFJQTtvQkFBQ21CLE1BQUs7b0JBQUlKLFdBQVdYLDJFQUFXOzhCQUFFOzs7Ozs7OEJBSXZDLDhEQUFDaUI7b0JBQ0NOLFdBQVdYLGlGQUFpQjtvQkFDNUJtQixTQUFTLElBQU1iLFlBQVksQ0FBQ0Q7b0JBQzVCZSxjQUFXOztzQ0FFWCw4REFBQ0M7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7c0NBQ0QsOERBQUNBOzs7Ozs7Ozs7Ozs4QkFHSCw4REFBQ1I7b0JBQUlGLFdBQVcsR0FBR1gsK0VBQWUsQ0FBQyxDQUFDLEVBQUVLLFdBQVdMLDZFQUFhLEdBQUcsSUFBSTs7c0NBQ25FLDhEQUFDSixrREFBSUE7NEJBQ0htQixNQUFLOzRCQUNMSixXQUFXUCxPQUFPb0IsUUFBUSxLQUFLLFlBQVl4QixpRkFBaUIsR0FBRztzQ0FDaEU7Ozs7OztzQ0FHRCw4REFBQ0osa0RBQUlBOzRCQUNIbUIsTUFBSzs0QkFDTEosV0FBV1AsT0FBT29CLFFBQVEsS0FBSyxXQUFXeEIsaUZBQWlCLEdBQUc7c0NBQy9EOzs7Ozs7c0NBR0QsOERBQUNKLGtEQUFJQTs0QkFDSG1CLE1BQUs7NEJBQ0xKLFdBQVdQLE9BQU9vQixRQUFRLEtBQUssY0FBY3hCLGlGQUFpQixHQUFHO3NDQUNsRTs7Ozs7O3dCQUlBRyx3QkFDQzs7OENBQ0UsOERBQUNQLGtEQUFJQTtvQ0FDSG1CLE1BQUs7b0NBQ0xKLFdBQVdQLE9BQU9vQixRQUFRLEtBQUssZUFBZXhCLGlGQUFpQixHQUFHOzhDQUNuRTs7Ozs7OzhDQUdELDhEQUFDaUI7b0NBQU9FLFNBQVNaO29DQUFlSSxXQUFXWCxpRkFBaUI7OENBQUU7Ozs7Ozs7eURBS2hFOzs4Q0FDRSw4REFBQ0osa0RBQUlBO29DQUNIbUIsTUFBSztvQ0FDTEosV0FBV1gsaUZBQWlCOzhDQUM3Qjs7Ozs7OzhDQUdELDhEQUFDSixrREFBSUE7b0NBQ0htQixNQUFLO29DQUNMSixXQUFXLEdBQUdYLGlGQUFpQixDQUFDLENBQUMsRUFBRUEscUZBQXFCLEVBQUU7OENBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2YiLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZnpodS9Eb2N1bWVudHMvUjEyOVhYWC9Db2RlUmVwby9XaGF0SXNUcnVlL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoeyByZWRpcmVjdDogZmFsc2UgfSk7XG4gICAgcm91dGVyLnB1c2goJy8nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkNvbnRhaW5lcn0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgV2hhdElzVHJ1ZVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9ufSBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbWVudVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZMaW5rc30gJHttZW51T3BlbiA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfT5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvdmVyaWZ5XCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy92ZXJpZnknID8gc3R5bGVzLmFjdGl2ZUxpbmsgOiAnJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWZXJpZnkgQ29udGVudFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2Fib3V0JyA/IHN0eWxlcy5hY3RpdmVMaW5rIDogJyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICBocmVmPVwiL2FwaS1kb2NzXCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9hcGktZG9jcycgPyBzdHlsZXMuYWN0aXZlTGluayA6ICcnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFQSVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICBcbiAgICAgICAgICB7c2Vzc2lvbiA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvZGFzaGJvYXJkJyA/IHN0eWxlcy5hY3RpdmVMaW5rIDogJyd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhCdXR0b259PlxuICAgICAgICAgICAgICAgIFNpZ24gT3V0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgIGhyZWY9XCIvbG9naW5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhCdXR0b259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgIGhyZWY9XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmF1dGhCdXR0b259ICR7c3R5bGVzLnJlZ2lzdGVyQnV0dG9ufWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsInN0eWxlcyIsIk5hdmlnYXRpb24iLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJoYW5kbGVTaWduT3V0IiwicmVkaXJlY3QiLCJwdXNoIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2aWdhdGlvbiIsImRpdiIsIm5hdkNvbnRhaW5lciIsImhyZWYiLCJsb2dvIiwiYnV0dG9uIiwibWVudUJ1dHRvbiIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwic3BhbiIsIm5hdkxpbmtzIiwiYWN0aXZlIiwicGF0aG5hbWUiLCJhY3RpdmVMaW5rIiwiYXV0aEJ1dHRvbiIsInJlZ2lzdGVyQnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/Navigation.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"(pages-dir-node)/./src/components/Navigation.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yfzhu/Documents/R129XXX/CodeRepo/WhatIsTrue/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDQTtBQUNuQjtBQUUvQixTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFZO0lBQzFFLHFCQUNFLDhEQUFDSiw0REFBZUE7UUFBQ0ssU0FBU0E7OzBCQUN4Qiw4REFBQ0osOERBQVVBOzs7OzswQkFDWCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZnpodS9Eb2N1bWVudHMvUjEyOVhYWC9Db2RlUmVwby9XaGF0SXNUcnVlL3NyYy9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsIk5hdmlnYXRpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/Navigation.module.css":
/*!******************************************!*\
  !*** ./src/styles/Navigation.module.css ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navigation\": \"Navigation_navigation__fVgQV\",\n\t\"navContainer\": \"Navigation_navContainer__RdfCR\",\n\t\"logo\": \"Navigation_logo__y0vRk\",\n\t\"navLinks\": \"Navigation_navLinks__E4YEG\",\n\t\"activeLink\": \"Navigation_activeLink__zcjMC\",\n\t\"authButton\": \"Navigation_authButton__k_0u5\",\n\t\"registerButton\": \"Navigation_registerButton__eTvNY\",\n\t\"menuButton\": \"Navigation_menuButton__IPgno\",\n\t\"active\": \"Navigation_active___hVOw\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9zdHlsZXMvTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL3lmemh1L0RvY3VtZW50cy9SMTI5WFhYL0NvZGVSZXBvL1doYXRJc1RydWUvc3JjL3N0eWxlcy9OYXZpZ2F0aW9uLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2aWdhdGlvblwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbl9fZlZnUVZcIixcblx0XCJuYXZDb250YWluZXJcIjogXCJOYXZpZ2F0aW9uX25hdkNvbnRhaW5lcl9fUmRmQ1JcIixcblx0XCJsb2dvXCI6IFwiTmF2aWdhdGlvbl9sb2dvX195MHZSa1wiLFxuXHRcIm5hdkxpbmtzXCI6IFwiTmF2aWdhdGlvbl9uYXZMaW5rc19fRTRZRUdcIixcblx0XCJhY3RpdmVMaW5rXCI6IFwiTmF2aWdhdGlvbl9hY3RpdmVMaW5rX196Y2pNQ1wiLFxuXHRcImF1dGhCdXR0b25cIjogXCJOYXZpZ2F0aW9uX2F1dGhCdXR0b25fX2tfMHU1XCIsXG5cdFwicmVnaXN0ZXJCdXR0b25cIjogXCJOYXZpZ2F0aW9uX3JlZ2lzdGVyQnV0dG9uX19lVHZOWVwiLFxuXHRcIm1lbnVCdXR0b25cIjogXCJOYXZpZ2F0aW9uX21lbnVCdXR0b25fX0lQZ25vXCIsXG5cdFwiYWN0aXZlXCI6IFwiTmF2aWdhdGlvbl9hY3RpdmVfX19oVk93XCJcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/styles/Navigation.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();