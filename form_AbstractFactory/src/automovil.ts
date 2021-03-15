export abstract class Automovil {
	protected marca: string;
	protected modelo: string;
	protected color: string;
	protected potencia: number;
	protected espacio: number;
    protected speed: number;

	public constructor (
		NewMarca: string,
		NewModel: string,
		NewColor: string,
		NewPotencia: number,
		NewEspacio: number,
        NewSpeed: number
	) {
		this.marca = NewMarca;
		this.modelo = NewModel;
		this.color = NewColor;
		this.potencia = NewPotencia;
		this.espacio = NewEspacio;
        this.speed = NewSpeed || 0;
	}

    abstract mostrarCaracteristicas ():void;
    abstract aumentaVelocidad ():number;
    abstract disminuyeVelocidad ():number;
    abstract obtieneVelocidad (): number;
}