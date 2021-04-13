
import {Pedido} from './pedido.js'
import {Cliente} from './Cliente.js'
import {PedidoContado} from './pedidoContado.js'

export class ClienteContado extends Cliente {

	creaPedido (importe: number): Pedido {
		return new PedidoContado (importe);
	}

}