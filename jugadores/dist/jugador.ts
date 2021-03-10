import {Person} from './person.js';

export class jugador extends Person {
	protected posicion: string;

	constructor (nombre: string, direccion: string, DNI: string,posicion: string) {
		super (nombre, direccion,DNI);
		this.posicion = posicion;
	}

	getPosicion () {
		return this.posicion;
	}

	setPosicion (posicion: string) {
		this.posicion = posicion;
	}
}