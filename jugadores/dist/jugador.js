import { Person } from './person.js';
export class jugador extends Person {
    constructor(nombre, direccion, DNI, posicion) {
        super(nombre, direccion, DNI);
        this.posicion = posicion;
    }
    getPosicion() {
        return this.posicion;
    }
    setPosicion(posicion) {
        this.posicion = posicion;
    }
}
