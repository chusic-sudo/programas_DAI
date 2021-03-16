export class Cliente {
    constructor() {
        this.ListaPedidos = new Array();
    }
    nuevopedido(importe) {
        let pedido = this.creaPedido(importe);
        if (pedido.valida()) {
            pedido.paga();
            this.ListaPedidos.push(pedido);
        }
        else {
            let tmp = document.getElementById("frase_pedido");
            tmp.style.visibility = "hidden";
            tmp.style.backgroundColor = "#ee0467";
            tmp.innerHTML = "EL PEDIDO NO HA PODIDO REALIZARSE";
            tmp.style.visibility = "visible";
        }
    }
}
