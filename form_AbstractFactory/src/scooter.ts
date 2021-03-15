
export abstract class Scooter {
    protected marca: string;
    protected modelo: string;
    protected color: string;
    protected potencia: number;

    public constructor (
        NewMarca: string,
        NewModel: string,
        NewColor: string,
        NewPotencia: number
    ) {
        this.marca = NewMarca;
        this.modelo = NewModel;
        this.color = NewColor;
        this.potencia = NewPotencia;
    }

    abstract mostrarCaracteristicas (): void;

}
