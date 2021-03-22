import {Automovil} from './automovil.js';
import {Scooter} from './scooter.js';
import {AutomovilElectricidad} from './automovilElectricidad.js';
import {ScooterElectricidad} from './scooterElectricidad.js'
import {FabricaVehiculo} from './FabricaVehiculo.js'

export class FabricaVehiculoElectricidad implements FabricaVehiculo {
	public creaAutomovil (
		marca: string,
		modelo: string,
		color: string,
		imagen: string,
		importe: number) {
		return new AutomovilElectricidad (marca,modelo,color,imagen,importe);
	}

	public creaScooter (
		marca: string,
		modelo: string,
		color: string,
		imagen: string,
		importe: number) {
			return new ScooterElectricidad (marca,modelo,color, imagen,importe);
	}
}