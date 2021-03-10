var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var individuo = /** @class */ (function () {
    function individuo(nombre, direccion, DNI) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.DNI = DNI;
    }
    individuo.prototype.getNombre = function () {
        return this.nombre;
    };
    individuo.prototype.getDireccion = function () {
        return this.direccion;
    };
    individuo.prototype.getDNI = function () {
        return this.DNI;
    };
    individuo.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    individuo.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    individuo.prototype.setDNI = function (DNI) {
        this.DNI = DNI;
    };
    return individuo;
}());
var jugador = /** @class */ (function (_super) {
    __extends(jugador, _super);
    function jugador(nombre, direccion, DNI, posicion) {
        var _this = _super.call(this, nombre, direccion, DNI) || this;
        _this.posicion = posicion;
        return _this;
    }
    jugador.prototype.getPosicion = function () {
        return this.posicion;
    };
    jugador.prototype.setPosicion = function (posicion) {
        this.posicion = posicion;
    };
    return jugador;
}(individuo));
var equipo = /** @class */ (function () {
    function equipo(nombreEquipo, numJugadores) {
        this.jugadores = new Array();
        this.nombreEquipo = nombreEquipo;
        this.numJugadores = numJugadores;
        /*
        for (var i = 0; i < numJugadores; i++) {
            let jugadorActual = new jugador ("J" + i.toString,"","","");
            this.jugadores.push (jugadorActual);
        }*/
    }
    equipo.prototype.insertajugador = function (actual) {
        this.jugadores.push(actual);
    };
    equipo.prototype.eliminarjugador = function (nombre) {
        for (var i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].nombre == nombre) {
                this.jugadores.splice(i, 1);
            }
        }
    };
    equipo.prototype.mostrarjugadores = function () {
        for (var i = 0; i < this.jugadores.length; i++) {
            console.log("Nombre jugador: " + this.jugadores[i].nombre);
            console.log("Nombre direccion: " + this.jugadores[i].direccion);
            console.log("DNI: " + this.jugadores[i].DNI);
        }
    };
    return equipo;
}());
function main() {
    var e1 = new equipo("Real Madrid", 12);
    var j1 = new jugador("Rudy Fernandez", "Madrid", "45678348V", "escolta");
    var j2 = new jugador("Sergio Llull", "Madrid", "3423432432", "base");
    e1.insertajugador(j1);
    e1.insertajugador(j2);
    e1.eliminarjugador("Rudy Fernandez");
    e1.mostrarjugadores();
    return 0;
}
