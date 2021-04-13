import { Cliente } from './Cliente.js';
import { PedidoContado } from './pedidoContado.js';
export class ClienteContado extends Cliente {
    creaPedido(importe) {
        return new PedidoContado(importe);
    }
}
