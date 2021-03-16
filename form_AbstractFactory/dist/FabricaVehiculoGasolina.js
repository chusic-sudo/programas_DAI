import { AutomovilGasolina } from './automovilGasolina.js';
import { ScooterGasolina } from './scooterGasolina.js';
export class FabricaVehiculoGasolina {
    creaAutomovil(marca, modelo, color, imagen, importe) {
        return new AutomovilGasolina(marca, modelo, color, imagen, importe);
    }
    creaScooter(marca, modelo, color, imagen, importe) {
        return new ScooterGasolina(marca, modelo, color, imagen, importe);
    }
}
