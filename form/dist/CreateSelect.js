export class CreateSelect {
    constructor(id, values) {
        this.select = document.createElement("select");
        this.select.id = id;
        for (var i = 0; i < values.length; i++) {
            var option = document.createElement("option");
            option.value = values[i];
            option.text = values[i];
            this.select.appendChild(option);
        }
    }
    getElement() {
        return this.select;
    }
    setPosition(position) {
        this.select.style.position = position;
    }
    setTop(coord) {
        this.select.style.top = coord;
    }
    setLeft(coord) {
        this.select.style.left = coord;
    }
    setColor(color) {
        this.select.style.color = color;
    }
    getValue() {
        return this.select.value;
    }
}
