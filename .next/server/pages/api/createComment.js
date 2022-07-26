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
exports.id = "pages/api/createComment";
exports.ids = ["pages/api/createComment"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./pages/api/createComment.ts":
/*!************************************!*\
  !*** ./pages/api/createComment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createComment)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    dataset: \"production\",\n    projectId: \"dwo00hmy\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function createComment(req, res) {\n    const { _id , name , email , comment  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: \"comment\",\n            post: {\n                _type: \"reference\",\n                _ref: _id\n            },\n            name,\n            email,\n            comment\n        });\n    } catch (error) {\n        console.log(error);\n    }\n    res.status(200).json({\n        name: \"John Doe\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMEM7QUFNMUMsTUFBTUMsTUFBTSxHQUFHO0lBQ2JDLE9BQU8sRUFBRUMsWUFBc0M7SUFDL0NHLFNBQVMsRUFBRUgsVUFBeUM7SUFDcERLLE1BQU0sRUFBRUwsYUFYRyxLQVdzQixZQUFZO0lBQzdDTSxLQUFLLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxnQkFBZ0I7Q0FDcEM7QUFDRCxNQUFNQyxNQUFNLEdBQUdYLHFEQUFZLENBQUNDLE1BQU0sQ0FBQztBQUVwQixlQUFlVyxhQUFhLENBQ3pDQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNLEVBQUVDLEdBQUcsR0FBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsR0FBRyxDQUFDUSxJQUFJLENBQUM7SUFFMUQsSUFBSTtRQUNGLE1BQU1WLE1BQU0sQ0FBQ1csTUFBTSxDQUFDO1lBQ2xCQyxLQUFLLEVBQUUsU0FBUztZQUNoQkMsSUFBSSxFQUFFO2dCQUNKRCxLQUFLLEVBQUUsV0FBVztnQkFDbEJFLElBQUksRUFBRVYsR0FBRzthQUNWO1lBQ0RDLElBQUk7WUFDSkMsS0FBSztZQUNMQyxPQUFPO1NBQ1IsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxPQUFPUSxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0lBRURaLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRWQsSUFBSSxFQUFFLFVBQVU7S0FBRSxDQUFDLENBQUM7Q0FDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpdW0vLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cz9hOGU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VULFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXHJcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4sXHJcbn07XHJcbmNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudChjb25maWcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29tbWVudChcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gIGNvbnN0IHsgX2lkLCBuYW1lLCBlbWFpbCwgY29tbWVudCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY3JlYXRlKHtcclxuICAgICAgX3R5cGU6IFwiY29tbWVudFwiLFxyXG4gICAgICBwb3N0OiB7XHJcbiAgICAgICAgX3R5cGU6IFwicmVmZXJlbmNlXCIsXHJcbiAgICAgICAgX3JlZjogX2lkLFxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgY29tbWVudCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6IFwiSm9obiBEb2VcIiB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiY29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwidXNlQ2RuIiwidG9rZW4iLCJTQU5JVFlfQVBJX1RPS0VOIiwiY2xpZW50IiwiY3JlYXRlQ29tbWVudCIsInJlcSIsInJlcyIsIl9pZCIsIm5hbWUiLCJlbWFpbCIsImNvbW1lbnQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY3JlYXRlIiwiX3R5cGUiLCJwb3N0IiwiX3JlZiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createComment.ts"));
module.exports = __webpack_exports__;

})();