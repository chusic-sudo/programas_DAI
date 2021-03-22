import { Pedido } from './pedido.js';
export class PedidoCredito extends Pedido {
    constructor(importe) {
        super(importe);
    }
    paga() {
        let tmp = document.getElementById("frase_pedido");
        tmp.style.visibility = "hidden";
        tmp.style.backgroundColor = "#CCCCFF";
        tmp.innerHTML = "Pago a CRÉDITO del importe: " + this.importe;
        tmp.style.visibility = "visible";
    }
    valida() {
        return (this.importe >= 50000) && (this.importe <= 100000);
    }
}
