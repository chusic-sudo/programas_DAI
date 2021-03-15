export class CreateDiv {
	protected text: HTMLDivElement;

	constructor (id: string, cad:string) {
		this.text = document.createElement("div");
		this.text.id = id;
		this.text.textContent = cad;
	}

	public setText (cad: string) {
		this.text.textContent = cad;
	}

	public getElement (): HTMLDivElement {
		return this.text;
	}

	public setPosition (position: string) {
		this.text.style.position = position;
	}

	public setTop (coord:string) {
		this.text.style.top = coord;
	}
	
	public setLeft (coord: string) {
		this.text.style.left = coord;
	}

	public setColor (color: string) {
		this.text.style.color = color;
	}

	public background (color: string) {
		this.text.style.backgroundColor = color;
	}

	public setVisible () {
		this.text.style.visibility = "visible";
	}

	public setHidden () {
		this.text.style.visibility = "hidden";
	}
}