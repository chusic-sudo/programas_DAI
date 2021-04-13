export class Comercial {
    constructor() {
    }
    static Instance() {
        if (!Comercial.instancia) {
            Comercial.instancia = new Comercial();
        }
        return Comercial.instancia;
    }
    visualiza() {
        console.log("Nombre: " + this.nombre);
        console.log("Email: " + this.email);
        console.log("id_comercial " + this.id_comercial);
    }
    getNombre() {
        return this.nombre;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id_comercial;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEmail(email) {
        this.email = email;
    }
    setId(id) {
        this.id_comercial = id;
    }
}
