import {Automovil} from './automovil.js';
import {Scooter} from './scooter.js';

export interface FabricaVehiculo {
	creaAutomovil (
		marca: string,
		modelo: string,
		color: string,
		imagen: string,
		importe: number
					):Automovil

	creaScooter (
		marca: string,
		modelo: string,
		color: string,
		imagen: string,
		importe: number):Scooter
}

