export class CreateSelect {
	protected select: HTMLSelectElement;
	constructor (id: string, values?: string []) {
		this.select = document.createElement("select");	
		this.select.id = id;

		for (var i = 0; i < values.length; i++) {
		    var option = document.createElement("option");
		    option.value = values[i];
		    option.text = values[i];
		    this.select.appendChild(option);
		}

	}
	
	public getElement (): HTMLSelectElement {
		return this.select;
	}

	public setPosition (position: string) {
		this.select.style.position = position;
	}

	public setTop (coord:string) {
		this.select.style.top = coord;
	}
	
	public setLeft (coord: string) {
		this.select.style.left = coord;
	}

	public setColor (color: string) {
		this.select.style.color = color;
	}

	public getValue () {
		return this.select.value;
	}

}