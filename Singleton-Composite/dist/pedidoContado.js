import { Comercial } from './comercial.js';
import { Pedido } from './pedido.js';
export class PedidoContado extends Pedido {
    constructor(importe) {
        super(importe);
    }
    paga() {
        let singleton = Comercial.Instance();
        let tmp = document.getElementById("frase_pedido");
        tmp.style.visibility = "hidden";
        tmp.style.backgroundColor = "#CCFF33";
        tmp.innerHTML = "Pago al CONTADO del importe:" + this.importe + " <br />";
        tmp.innerHTML += " Le atendió el comercial " + singleton.getNombre();
        tmp.style.visibility = "visible";
    }
    valida() {
        return (this.importe < 30000);
    }
}
