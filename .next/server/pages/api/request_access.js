"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    // TODO: nonce CANNOT BE hardcoded. The number should only be used once and have expiration.
    // Store it persistently for validation.
    res.status(200).json({
        nonce: 42
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(489));
module.exports = __webpack_exports__;

})();