import { Person } from './person.js';
class jugador extends Person {
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
export class equipo {
    constructor(nombreEquipo, numJugadores) {
        this.jugadores = new Array();
        this.nombreEquipo = nombreEquipo;
        this.numJugadores = numJugadores;
        /*
        for (var i = 0; i < numJugadores; i++) {
            let jugadorActual = new jugador ("J" + i.toString,"","","");
            this.jugadores.push (jugadorActual);
        }*/
    }
    añadejugador(actual) {
        this.jugadores.push(actual);
    }
    eliminarjugador(nombre) {
        for (var i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].nombre == nombre) {
                this.jugadores.splice(i, 1);
            }
        }
    }
    mostrarjugadores() {
        for (var i = 0; i < this.jugadores.length; i++) {
            console.log("Nombre jugador: " + this.jugadores[i].nombre);
            console.log("Nombre direccion: " + this.jugadores[i].direccion);
            console.log("DNI: " + this.jugadores[i].DNI);
        }
    }
}
