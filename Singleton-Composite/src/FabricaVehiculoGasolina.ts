import {Automovil} from './automovil.js';
import {Scooter} from './scooter.js';
import {AutomovilGasolina} from './automovilGasolina.js';
import {ScooterGasolina} from './scooterGasolina.js'
import {FabricaVehiculo} from './FabricaVehiculo.js'

export class FabricaVehiculoGasolina implements FabricaVehiculo {
	public creaAutomovil (
		marca: string,
		modelo: string,
		color: string,
		imagen: string,
		importe: number) {
		return new AutomovilGasolina (marca,modelo,color,imagen,importe);
	}

	public creaScooter (
		marca: string,
		modelo: string,
		color: string,
		imagen:string,
		importe: number) {
			return new ScooterGasolina (marca,modelo,color,imagen,importe);
	}
}