import { AutomovilElectricidad } from './automovilElectricidad.js';
import { ScooterElectricidad } from './scooterElectricidad.js';
export class FabricaVehiculoElectricidad {
    creaAutomovil(marca, modelo, color, imagen, importe) {
        return new AutomovilElectricidad(marca, modelo, color, imagen, importe);
    }
    creaScooter(marca, modelo, color, imagen, importe) {
        return new ScooterElectricidad(marca, modelo, color, imagen, importe);
    }
}
