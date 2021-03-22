
import {Pedido} from './pedido.js'
import {Cliente} from './Cliente.js'
import {PedidoCredito} from './pedidoCredito.js'

export class ClienteCredito extends Cliente {

	creaPedido (importe: number): Pedido {
		return new PedidoCredito (importe);
	}

}