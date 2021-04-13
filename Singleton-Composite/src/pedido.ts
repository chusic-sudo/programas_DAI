export abstract class Pedido {
	protected importe: number;

	public constructor (importe: number
	) {
		this.importe = importe;
	}

    abstract valida ():boolean;
    abstract paga ():void;
}