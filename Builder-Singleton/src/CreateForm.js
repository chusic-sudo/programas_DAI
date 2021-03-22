"use strict";
exports.__esModule = true;
exports.createInput = exports.CreateForm = void 0;
var CreateForm = /** @class */ (function () {
    function CreateForm(id, action, method) {
        this.elementForm = document.createElement("form");
        this.elementForm.id = id;
        this.elementForm.action = action;
        this.elementForm.method = method;
    }
    CreateForm.prototype.createSelect = function (id, values) {
        var select = document.createElement("select");
        select.id = id;
        //Create and append the options
        for (var i = 0; i < values.length; i++) {
            var option = document.createElement("option");
            option.value = values[i];
            option.text = values[i];
            select.appendChild(option);
        }
        return select;
    };
    CreateForm.prototype.createButton = function (id, text) {
        var button = document.createElement("button");
        button.id = id;
        button.textContent = text;
        return button;
    };
    return CreateForm;
}());
exports.CreateForm = CreateForm;
var createInput = /** @class */ (function () {
    function createInput(id) {
        this.input = document.createElement("input");
        this.input.id = id;
    }
    createInput.prototype.setPosition = function (position) {
        this.input.style.position = position;
    };
    createInput.prototype.setTop = function (coord) {
        this.input.style.top = coord;
    };
    createInput.prototype.setLeft = function (coord) {
        this.input.style.left = coord;
    };
    return createInput;
}());
exports.createInput = createInput;
