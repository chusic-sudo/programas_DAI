/** Producto **/
export class Sucursal {
    setNif(nif) {
        this.nif = nif;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
}
/** Concrete Builder **/
class SucursalBarcelonaBuilder {
    constructor() {
        this.sucursal = new Sucursal();
    }
    buildNif() {
        this.sucursal.setNif("40349348V");
    }
    buildDireccion() {
        this.sucursal.setDireccion("Av diagonal, 147");
    }
    buildTipo() {
        this.sucursal.setTipo("Concesionario Oficial");
    }
}
class SucursalMadridBuilder {
    constructor() {
        this.sucursal = new Sucursal();
    }
    buildNif() {
        this.sucursal.setNif("533934884F");
    }
    buildDireccion() {
        this.sucursal.setDireccion("Paseo de la Castellana, 154");
    }
    buildTipo() {
        this.sucursal.setTipo("Concesionario Genérico");
    }
}
