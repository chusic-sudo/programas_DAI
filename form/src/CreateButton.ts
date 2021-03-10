export class CreateButton {
	protected button: HTMLButtonElement;

	constructor (id: string, text:string) {
		this.button = document.createElement("button");
		this.button.id = id;
		this.button.textContent = text;
	}

	public getElement (): HTMLButtonElement {
		return this.button;
	}

	public setPosition (position: string) {
		this.button.style.position = position;
	}

	public setTop (coord:string) {
		this.button.style.top = coord;
	}
	
	public setLeft (coord: string) {
		this.button.style.left = coord;
	}

	public setColor (color: string) {
		this.button.style.color = color;
	}	
}