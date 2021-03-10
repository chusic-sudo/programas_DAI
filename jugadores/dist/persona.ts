import {jugador} from './jugador.js';

export class equipo  {
	protected nombreEquipo: string;
	protected numJugadores: number;
	protected jugadores = new Array <jugador> ();

	constructor (nombreEquipo: string, numJugadores: number) {
		this.nombreEquipo = nombreEquipo;
		this.numJugadores = numJugadores;
		/*
		for (var i = 0; i < numJugadores; i++) {
			let jugadorActual = new jugador ("J" + i.toString,"","","");
			this.jugadores.push (jugadorActual); 
		}*/
	}

	añadejugador (actual: jugador) {
		this.jugadores.push (actual);
	}

	eliminarjugador (nombre: string) {
		for (var i = 0; i < this.jugadores.length; i++) {
			if (this.jugadores [i].nombre == nombre) {
				this.jugadores.splice(i,1);
			}
		}
	}

	mostrarjugadores () {
		for (var i = 0; i < this.jugadores.length; i++) {
			console.log ("Nombre jugador: " + this.jugadores[i].nombre);
			console.log ("Nombre direccion: " + this.jugadores[i].direccion);
			console.log ("DNI: " + this.jugadores[i].DNI);
		}
	}

}