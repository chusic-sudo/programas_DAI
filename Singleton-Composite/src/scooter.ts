
export abstract class Scooter {
    protected marca: string;
    protected modelo: string;
    protected color: string;
    protected imagen: string;
    protected importe: number;

    public constructor (
        NewMarca: string,
        NewModel: string,
        NewColor: string,
        imagen: string,
        importe: number
    ) {
        this.marca = NewMarca;
        this.modelo = NewModel;
        this.color = NewColor;
        this.imagen = imagen;
        this.importe = importe;
    }

    abstract mostrarCaracteristicas (): void;
    abstract getImporte (): number;
}
