export class WebElement {
    constructor(element, id) {
        var _a;
        this.element = document.createElement(element);
        this.element.id = id;
        (_a = document.getElementById('container')) === null || _a === void 0 ? void 0 : _a.appendChild(this.element);
        this.element.addEventListener("click", () => this.click());
    }
    click() {
        console.log("click");
    }
}
