export class createInput {
    constructor(id, type, value) {
        this.input = document.createElement("input");
        this.input.id = id;
        this.input.type = type;
        this.input.value = value;
        /*this.input.addEventListener("blur", () => this.onblur());
        this.input.addEventListener("focus", () => this.onfocus());
        this.input.addEventListener("click", () => this.click());
 */
    }
    getElement() {
        return this.input;
    }
    setPosition(position) {
        this.input.style.position = position;
    }
    setTop(coord) {
        this.input.style.top = coord;
    }
    setLeft(coord) {
        this.input.style.left = coord;
    }
    setColor(color) {
        this.input.style.color = color;
    }
    getValue() {
        return this.input.value;
    }
    setValue(value) {
        this.input.value = value;
    }
}
