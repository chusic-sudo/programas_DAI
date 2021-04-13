import {Automovil} from './automovil.js'
import {Scooter} from './scooter.js'

export abstract class Empresa {
	vehiculos = new Array <Automovil> ();
	sc_list = new Array <Scooter> ();
	protected nombre: string;

	constructor (nombre: string) {
		this.nombre = nombre;
	}

	public agregaVehiculo (Vehiculo?: Automovil,Scooter?: Scooter): void {
		if (Vehiculo != null)
			this.vehiculos.push (Vehiculo);
		else if (Scooter != null)
			this.sc_list.push (Scooter);
	}


	getNombre ()
	{
		return this.nombre;
	}


	abstract agregaFilial (filial: Empresa): boolean;
	abstract getVehiculos (): number;
	abstract obtieneVehiculos (): void;
}

export class Sucursal extends Empresa {
	agregaFilial (filial: Empresa) {
		return false;
	}

	obtieneVehiculos () {
	    let tmp = document.getElementById("objetos");
	    let titulo = document.createElement("thead");
	    let pie = document.createElement("tfoot");
	    titulo.innerHTML ="Listado de la empresa: " + this.nombre;
	    pie.innerHTML = "Total de vehiculos: " + this.getVehiculos ();
	    if (tmp != null) {
	        tmp.parentNode.removeChild(tmp);
	    }

	    tmp = document.createElement("table");
	    tmp.id = "objetos";
	    tmp.appendChild(titulo);
	    tmp.appendChild (pie);
	    document.getElementById("div_consulta_objetos").appendChild(tmp);

	    // Colocamos solo imagen + Marca + Modelo

	    let tr = document.createElement('tr');
	    let td = document.createElement('th');
	    td.innerHTML = "Imagen";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Marca";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Modelo";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Color";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Precio";
	    tr.appendChild(td);
	    tmp.appendChild (tr);


		for (var i = 0; i < this.vehiculos.length; i++) {
			this.vehiculos[i].mostrarCaracteristicas ();
		}

		for (var j = 0; j < this.sc_list.length; j++) {
			this.sc_list [j].mostrarCaracteristicas ();
		}


		return 0;
	}

	getVehiculos ()
	{
		return this.vehiculos.length + this.sc_list.length;
	}
}

export class EmpresaPrincipal extends Empresa {
	protected filiales = new Array <Empresa> ();

	agregaFilial (filial: Empresa) {
		this.filiales.push (filial);
		return true;
	}

	obtieneVehiculos () {
		var i,j: number;
	    let tmp = document.getElementById("objetos");
	    let titulo = document.createElement("thead");
	    let pie = document.createElement("tfoot");
	    let column = document.createElement("td");
	    titulo.innerHTML ="Listado de la empresa: " + this.nombre;
	    pie.innerHTML = "Total de vehiculos: " + this.getVehiculos ();
	    if (tmp != null) {
	        tmp.parentNode.removeChild(tmp);
	    }

	    tmp = document.createElement("table");
	    tmp.id = "objetos";
	    tmp.appendChild(titulo);
	    tmp.appendChild (pie);
	    document.getElementById("div_consulta_objetos").appendChild(tmp);

	    // Colocamos solo imagen + Marca + Modelo

	    let tr = document.createElement('tr');
	    let td = document.createElement('th');
	    td.innerHTML = "Imagen";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Marca";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Modelo";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Color";
	    tr.appendChild(td);
	    td = document.createElement("th");
	    td.innerHTML = "Precio";
	    tr.appendChild(td);
	    tmp.appendChild (tr);

		for (i = 0; i < this.vehiculos.length; i++) {
			this.vehiculos[i].mostrarCaracteristicas ();
		}

		for (i = 0; i < this.sc_list.length; i++) {
			this.sc_list [i].mostrarCaracteristicas ();
		}

		for (i= 0; i < this.filiales.length; i++) {
			tr = document.createElement("tr");
			column = document.createElement ("td");
			column.innerHTML = "Listado filial: " + this.filiales [i].getNombre ();
			column.colSpan = 5;
			column.id ="filial";
			tr.appendChild (column);
			tmp.appendChild (tr);

			for (j = 0; j < this.filiales[i].vehiculos.length;j++) {
				this.filiales[i].vehiculos [j].mostrarCaracteristicas ();
			}
			for (j = 0; j < this.filiales[i].sc_list.length;j++) {
				this.filiales[i].sc_list [j].mostrarCaracteristicas ();
			}
		}


		/*for (var i = 0; i < this.filiales.length; i++) {
			this.filiales [i].obtieneVehiculos ();
		}*/
	}

	getVehiculos ()
	{
		var totalV = 0;

		for (var i = 0; i < this.filiales.length; i++) {
			totalV = totalV + this.filiales[i].getVehiculos ();
		}
		return this.vehiculos.length + this.sc_list.length + totalV;
	}


}
