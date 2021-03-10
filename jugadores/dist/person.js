export class Person {
    constructor(nombre, direccion, DNI) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.DNI = DNI;
    }
    getNombre() {
        return this.nombre;
    }
    getDireccion() {
        return this.direccion;
    }
    getDNI() {
        return this.DNI;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    setDNI(DNI) {
        this.DNI = DNI;
    }
}
