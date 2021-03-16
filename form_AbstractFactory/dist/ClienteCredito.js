import { Cliente } from './Cliente.js';
import { PedidoCredito } from './pedidoCredito.js';
export class ClienteCredito extends Cliente {
    creaPedido(importe) {
        return new PedidoCredito(importe);
    }
}
