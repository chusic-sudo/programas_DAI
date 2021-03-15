export class Automovil {
    constructor(NewMarca, NewModel, NewColor, NewPotencia, NewEspacio, NewSpeed) {
        this.marca = NewMarca;
        this.modelo = NewModel;
        this.color = NewColor;
        this.potencia = NewPotencia;
        this.espacio = NewEspacio;
        this.speed = NewSpeed || 0;
    }
}
