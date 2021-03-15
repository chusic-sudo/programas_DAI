
export class CreateForm  {
	protected elementForm:HTMLFormElement;
	constructor (id:string,action?: string, method?:string) {
		this.elementForm = document.createElement('form');
		this.elementForm.id = id;
		this.elementForm.action = action;
		this.elementForm.method = method;

	}

	public getElement () {
		return this.elementForm;
	}

	public submit () {
		return false;
	}
}

