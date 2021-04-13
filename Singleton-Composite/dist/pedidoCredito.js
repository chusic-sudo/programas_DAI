import { Comercial } from './comercial.js';
import { Pedido } from './pedido.js';
export class PedidoCredito extends Pedido {
    constructor(importe) {
        super(importe);
    }
    paga() {
        let singleton = Comercial.Instance();
        let tmp = document.getElementById("frase_pedido");
        tmp.style.visibility = "hidden";
        tmp.style.backgroundColor = "#CCCCFF";
        tmp.innerHTML = "Pago a CRÉDITO del importe: " + this.importe + " <BR />";
        tmp.innerHTML += " Le atendió el comercial " + singleton.getNombre();
        tmp.style.visibility = "visible";
    }
    valida() {
        return (this.importe >= 50000) && (this.importe <= 100000);
    }
}
