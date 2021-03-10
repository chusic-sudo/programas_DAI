export class CreateForm {
    constructor(id, action, method) {
        this.elementForm = document.createElement('form');
        this.elementForm.id = id;
        this.elementForm.action = action;
        this.elementForm.method = method;
    }
    getElement() {
        return this.elementForm;
    }
    submit() {
        return false;
    }
}
