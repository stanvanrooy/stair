"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/airportPicker.tsx":
/*!**************************************!*\
  !*** ./components/airportPicker.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AirportPicker\": () => (/* binding */ AirportPicker),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst onResolveSuggestions = (filter, _)=>{\n    const url = `https://tequila-api.kiwi.com/locations/query`;\n    const params = {\n        limit: 5,\n        sort: 'name',\n        term: filter,\n        location_types: 'airport'\n    };\n    const headers = {\n        apikey: '9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ'\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        url: url,\n        headers: headers,\n        params: params\n    }).then((r)=>r.data.locations.map((l)=>({\n                name: l.name,\n                key: l.type === 'city' ? l.name : l.code\n            })\n        )\n    );\n};\nconst AirportPicker = (props)=>{\n    const selectedItems = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>props.selected.map((a)=>({\n                name: a.name,\n                key: a.iata ?? a.city\n            })\n        )\n    , [\n        props.selected\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.TagPicker, {\n        selectedItems: selectedItems,\n        onResolveSuggestions: onResolveSuggestions,\n        inputProps: {\n            placeholder: 'To!'\n        },\n        __source: {\n            fileName: \"/workspace/stair/stair/components/airportPicker.tsx\",\n            lineNumber: 39,\n            columnNumber: 10\n        },\n        __self: undefined\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AirportPicker);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FpcnBvcnRQaWNrZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ2xCO0FBQ047QUFRekIsS0FBSyxDQUFDRyxvQkFBb0IsSUFBSUMsTUFBYyxFQUFFQyxDQUFNLEdBQTBCLENBQUM7SUFDN0UsS0FBSyxDQUFDQyxHQUFHLElBQUksNENBQTRDO0lBQ3pELEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7UUFDZEMsS0FBSyxFQUFFLENBQUM7UUFDUkMsSUFBSSxFQUFFLENBQU07UUFDWkMsSUFBSSxFQUFFTixNQUFNO1FBQ1pPLGNBQWMsRUFBRSxDQUFTO0lBQzNCLENBQUM7SUFDRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO1FBQ2ZDLE1BQU0sRUFBRSxDQUFrQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxDQUFDWCw0Q0FBSyxDQUFDLENBQUM7UUFDWkksR0FBRyxFQUFFQSxHQUFHO1FBQ1JNLE9BQU8sRUFBRUEsT0FBTztRQUNoQkwsTUFBTSxFQUFFQSxNQUFNO0lBQ2hCLENBQUMsRUFBRU8sSUFBSSxFQUFDQyxDQUFDLEdBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsRUFBQ0MsQ0FBQyxJQUFLLENBQUM7Z0JBQ3ZDQyxJQUFJLEVBQUVELENBQUMsQ0FBQ0MsSUFBSTtnQkFDWkMsR0FBRyxFQUFFRixDQUFDLENBQUNHLElBQUksS0FBSyxDQUFNLFFBQUdILENBQUMsQ0FBQ0MsSUFBSSxHQUFHRCxDQUFDLENBQUNJLElBQUk7WUFDMUMsQ0FBQzs7O0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsYUFBYSxJQUFJQyxLQUEwQixHQUFLLENBQUM7SUFDNUQsS0FBSyxDQUFDQyxhQUFhLEdBQUd6Qiw4Q0FBTyxLQUFPd0IsS0FBSyxDQUFDRSxRQUFRLENBQUNULEdBQUcsRUFBQ1UsQ0FBQyxJQUNyRCxDQUFDUjtnQkFBQUEsSUFBSSxFQUFFUSxDQUFDLENBQUNSLElBQUk7Z0JBQUVDLEdBQUcsRUFBRU8sQ0FBQyxDQUFDQyxJQUFJLElBQUlELENBQUMsQ0FBQ0UsSUFBSTtZQUFBLENBQUM7O01BQ25DLENBQUNMO1FBQUFBLEtBQUssQ0FBQ0UsUUFBUTtJQUFBLENBQUM7SUFFckIsTUFBTSxzRUFBRTNCLHNEQUFTO1FBQ2YwQixhQUFhLEVBQUVBLGFBQWE7UUFDNUJ2QixvQkFBb0IsRUFBRUEsb0JBQW9CO1FBQzFDNEIsVUFBVSxFQUFFLENBQUM7WUFDWEMsV0FBVyxFQUFFLENBQUs7UUFDcEIsQ0FBQzs7Ozs7Ozs7QUFFTCxDQUFDO0FBRUQsaUVBQWVSLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YWlyLy4vY29tcG9uZW50cy9haXJwb3J0UGlja2VyLnRzeD9lNzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFpcnBvcnQgfSBmcm9tIFwiLi4vbW9kZWxzL2FpcnBvcnRcIjtcbmltcG9ydCB7IFRhZ1BpY2tlciwgSVRhZyB9IGZyb20gXCJAZmx1ZW50dWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIElBaXJwb3J0UGlja2VyUHJvcHMge1xuICBzZWxlY3RlZDogQWlycG9ydFtdO1xuICBvbkNoYW5nZTogKGE6IEFpcnBvcnRbXSkgPT4gdm9pZDtcbn1cblxuY29uc3Qgb25SZXNvbHZlU3VnZ2VzdGlvbnMgPSAoZmlsdGVyOiBzdHJpbmcsIF86IGFueSk6IFByb21pc2VMaWtlPElUYWdbXT4gPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly90ZXF1aWxhLWFwaS5raXdpLmNvbS9sb2NhdGlvbnMvcXVlcnlgXG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBsaW1pdDogNSxcbiAgICBzb3J0OiAnbmFtZScsXG4gICAgdGVybTogZmlsdGVyLFxuICAgIGxvY2F0aW9uX3R5cGVzOiAnYWlycG9ydCdcbiAgfVxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIGFwaWtleTogJzluZkhVQVhBMy1nb29SVlAtVEN4alBpSXM3Ul9DNGdRJyxcbiAgfVxuXG4gIHJldHVybiBheGlvcyh7XG4gICAgdXJsOiB1cmwsXG4gICAgaGVhZGVyczogaGVhZGVycyxcbiAgICBwYXJhbXM6IHBhcmFtcyxcbiAgfSkudGhlbihyID0+IHIuZGF0YS5sb2NhdGlvbnMubWFwKGwgPT4gKHtcbiAgICBuYW1lOiBsLm5hbWUsXG4gICAga2V5OiBsLnR5cGUgPT09ICdjaXR5JyA/IGwubmFtZSA6IGwuY29kZVxuICB9KSkpO1xufVxuXG5leHBvcnQgY29uc3QgQWlycG9ydFBpY2tlciA9IChwcm9wczogSUFpcnBvcnRQaWNrZXJQcm9wcykgPT4ge1xuICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdXNlTWVtbygoKSA9PiBwcm9wcy5zZWxlY3RlZC5tYXAoYSA9PiBcbiAgICAoe25hbWU6IGEubmFtZSwga2V5OiBhLmlhdGEgPz8gYS5jaXR5fSlcbiAgICApLCBbcHJvcHMuc2VsZWN0ZWRdKTtcblxuICByZXR1cm4gPFRhZ1BpY2tlciBcbiAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZEl0ZW1zfVxuICAgIG9uUmVzb2x2ZVN1Z2dlc3Rpb25zPXtvblJlc29sdmVTdWdnZXN0aW9uc31cbiAgICBpbnB1dFByb3BzPXt7XG4gICAgICBwbGFjZWhvbGRlcjogJ1RvISdcbiAgICB9fVxuICAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBaXJwb3J0UGlja2VyOyJdLCJuYW1lcyI6WyJUYWdQaWNrZXIiLCJ1c2VNZW1vIiwiYXhpb3MiLCJvblJlc29sdmVTdWdnZXN0aW9ucyIsImZpbHRlciIsIl8iLCJ1cmwiLCJwYXJhbXMiLCJsaW1pdCIsInNvcnQiLCJ0ZXJtIiwibG9jYXRpb25fdHlwZXMiLCJoZWFkZXJzIiwiYXBpa2V5IiwidGhlbiIsInIiLCJkYXRhIiwibG9jYXRpb25zIiwibWFwIiwibCIsIm5hbWUiLCJrZXkiLCJ0eXBlIiwiY29kZSIsIkFpcnBvcnRQaWNrZXIiLCJwcm9wcyIsInNlbGVjdGVkSXRlbXMiLCJzZWxlY3RlZCIsImEiLCJpYXRhIiwiY2l0eSIsImlucHV0UHJvcHMiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/airportPicker.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_airportPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/airportPicker */ \"./components/airportPicker.tsx\");\n\n\nconst Index = (props)=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/workspace/stair/stair/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 10\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_airportPicker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            selected: props.from ?? [],\n            onChange: (a)=>console.log(a)\n            ,\n            __source: {\n                fileName: \"/workspace/stair/stair/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFXdkQsS0FBSyxDQUFDQyxLQUFLLElBQUlDLEtBQWtCLEdBQUssQ0FBQztJQUNyQyxNQUFNLHNFQUFFQyxDQUFHOzs7Ozs7O3VGQUNSSCxpRUFBYTtZQUFDSSxRQUFRLEVBQUVGLEtBQUssQ0FBQ0csSUFBSSxJQUFJLENBQUMsQ0FBQztZQUFFQyxRQUFRLEdBQUdDLENBQU0sR0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUM7Ozs7Ozs7Ozs7QUFFbEYsQ0FBQztBQUVELGlFQUFlTixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFpci8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBaXJwb3J0UGlja2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2FpcnBvcnRQaWNrZXJcIjtcbmltcG9ydCB7IEFpcnBvcnQgfSBmcm9tIFwiLi4vbW9kZWxzL2FpcnBvcnRcIjtcbmltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gXCIuLi9tb2RlbHMvZGF0ZVJhbmdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUluZGV4UHJvcHMge1xuICBmcm9tPzogQWlycG9ydFtdO1xuICB0bz86IEFpcnBvcnRbXTtcbiAgZGVwYXJ0dXJlPzogRGF0ZVJhbmdlO1xuICBhcnJpdmFsOiBEYXRlUmFuZ2U7XG59XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzOiBJSW5kZXhQcm9wcykgPT4ge1xuICByZXR1cm4gPGRpdj5cbiAgICA8QWlycG9ydFBpY2tlciBzZWxlY3RlZD17cHJvcHMuZnJvbSA/PyBbXX0gb25DaGFuZ2U9eyhhOiBhbnkpID0+IGNvbnNvbGUubG9nKGEpfSAvPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiQWlycG9ydFBpY2tlciIsIkluZGV4IiwicHJvcHMiLCJkaXYiLCJzZWxlY3RlZCIsImZyb20iLCJvbkNoYW5nZSIsImEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@fluentui/react":
/*!**********************************!*\
  !*** external "@fluentui/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@fluentui/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();