import { CreateForm } from './CreateForm.js';
import { createInput } from './CreateInput.js';
import { CreateSelect } from './CreateSelect.js';
class individuo {
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
class jugador extends individuo {
    constructor(nombre, direccion, DNI, posicion) {
        super(nombre, direccion, DNI);
        this.posicion = posicion;
    }
    getPosicion() {
        return this.posicion;
    }
    setPosicion(posicion) {
        this.posicion = posicion;
    }
}
class equipo {
    constructor(nombreEquipo) {
        this.jugadores = new Array();
        this.nombreEquipo = nombreEquipo;
        this.numJugadores = 0;
        /*
        for (var i = 0; i < numJugadores; i++) {
            let jugadorActual = new jugador ("J" + i.toString,"","","");
            this.jugadores.push (jugadorActual);
        }*/
    }
    getNombreEquipo() {
        return this.nombreEquipo;
    }
    getNumJugadores() {
        return this.numJugadores;
    }
    insertajugador(actual) {
        this.jugadores.push(actual);
        this.numJugadores++;
    }
    eliminarjugador(nombre) {
        for (var i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].nombre == nombre) {
                this.jugadores.splice(i, 1);
            }
        }
        this.numJugadores--;
    }
    mostrarjugadores() {
        console.clear();
        for (var i = 0; i < this.jugadores.length; i++) {
            console.log("Nombre jugador: " + this.jugadores[i].nombre);
            console.log("Nombre direccion: " + this.jugadores[i].direccion);
            console.log("DNI: " + this.jugadores[i].DNI);
            console.log("Posición: " + this.jugadores[i].posicion);
            console.log("Numero de jugadores: " + this.numJugadores);
        }
    }
}
let form = new CreateForm("Formulario", "text", "");
let strNombre = new createInput("NomJugador", "text", "");
let strDireccion = new createInput("Direccion", "text", "");
let strDNI = new createInput("DNI", "text", "");
let selectPoscion = new CreateSelect("Posicion", ["base", "escolta", "alero", "ala-pivot", "pivot"]);
let text = document.createTextNode("Nombre jugador:");
let br = document.createElement("br");
let bt_create = new createInput("Create", "Button", "Crear el jugador");
let bt_elimina = new createInput("Elimina", "Button", "Eliminar jugador por nombre");
let bt_mostrar = new createInput("Mostrar jugadores", "Button", "Mostrar los jugadores");
let e1 = new equipo("Basket Lleida");
document.getElementById("container").appendChild(form.getElement());
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(strNombre.getElement());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Direción: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(strDireccion.getElement());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("DNI: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(strDNI.getElement());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Posición: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(selectPoscion.getElement());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(bt_create.getElement());
form.getElement().appendChild(bt_elimina.getElement());
form.getElement().appendChild(bt_mostrar.getElement());
bt_create.getElement().addEventListener("click", () => createJugador());
bt_elimina.getElement().addEventListener("click", () => e1.eliminarjugador(strNombre.getValue()));
bt_mostrar.getElement().addEventListener("click", () => e1.mostrarjugadores());
/*
let j1 = new jugador("Rudy Fernandez","Madrid","45678348V","escolta");
let j2 = new jugador ("Sergio Llull","Madrid","3423432432","base");
e1.insertajugador (j1);
e1.insertajugador (j2);
e1.eliminarjugador("Rudy Fernandez");
e1.mostrarjugadores ();*/
function createJugador() {
    let j1 = new jugador(strNombre.getValue(), strDireccion.getValue(), strDNI.getValue(), selectPoscion.getValue());
    e1.insertajugador(j1);
}
