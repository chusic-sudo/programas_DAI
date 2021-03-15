export class createInput {
	protected input: HTMLInputElement;

	constructor(id: string,type?: string, value?:string) {
		this.input = document.createElement("input");
		this.input.id = id;
		this.input.type = type;
		this.input.value = value;
    	/*this.input.addEventListener("blur", () => this.onblur());
    	this.input.addEventListener("focus", () => this.onfocus());
    	this.input.addEventListener("click", () => this.click());
 */
	}

	public getElement (): HTMLInputElement {
		return this.input;
	}

	public setPosition (position: string) {
		this.input.style.position = position;
	}

	public setTop (coord:string) {
		this.input.style.top = coord;
	}
	
	public setLeft (coord: string) {
		this.input.style.left = coord;
	}

	public setColor (color: string) {
		this.input.style.color = color;
	}

	public getValue () {
		return this.input.value;
	}

	public setValue (value: string) {
		this.input.value = value;
	}


}