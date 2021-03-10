export class CreateButton {
    constructor(id, text) {
        this.button = document.createElement("button");
        this.button.id = id;
        this.button.textContent = text;
    }
    getElement() {
        return this.button;
    }
    setPosition(position) {
        this.button.style.position = position;
    }
    setTop(coord) {
        this.button.style.top = coord;
    }
    setLeft(coord) {
        this.button.style.left = coord;
    }
    setColor(color) {
        this.button.style.color = color;
    }
}
