export class CreateDiv {
    constructor(id, cad) {
        this.text = document.createElement("div");
        this.text.id = id;
        this.text.textContent = cad;
    }
    setText(cad) {
        this.text.textContent = cad;
    }
    getElement() {
        return this.text;
    }
    setPosition(position) {
        this.text.style.position = position;
    }
    setTop(coord) {
        this.text.style.top = coord;
    }
    setLeft(coord) {
        this.text.style.left = coord;
    }
    setColor(color) {
        this.text.style.color = color;
    }
    background(color) {
        this.text.style.backgroundColor = color;
    }
    setVisible() {
        this.text.style.visibility = "visible";
    }
    setHidden() {
        this.text.style.visibility = "hidden";
    }
}
