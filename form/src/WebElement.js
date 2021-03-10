"use strict";
exports.__esModule = true;
exports.WebElement = void 0;
var WebElement = /** @class */ (function () {
    function WebElement(element, id) {
        var _this = this;
        var _a;
        this.element = document.createElement(element);
        this.element.id = id;
        (_a = document.getElementById('container')) === null || _a === void 0 ? void 0 : _a.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.click(); });
    }
    WebElement.prototype.click = function () {
        console.log("click");
    };
    return WebElement;
}());
exports.WebElement = WebElement;
