export class Person {
	public nombre:string;
	public direccion: string;
	public DNI: string;

	constructor (nombre: string, direccion: string, DNI: string) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.DNI = DNI;
	}

	getNombre () {
		return this.nombre;
	}

	getDireccion () {
		return this.direccion;
	}

	getDNI () {
		return this.DNI;
	}

	setNombre (nombre: string) {
		this.nombre = nombre;
	}

	setDireccion (direccion: string) {
		this.direccion = direccion;
	}

	setDNI (DNI: string) {
		this.DNI = DNI;
	}

}


