
import {Automovil} from './automovil.js'

export class AutomovilElectricidad extends Automovil {
	public constructor (
		NewMarca: string,
		NewModel: string,
		NewColor: string,
        imagen: string,
        importe: number) {
		
		super (NewMarca,NewModel,NewColor,imagen,importe); 
	}

	public mostrarCaracteristicas ()
	{
		let table = document.getElementById('objetos');

		let tr = document.createElement('tr');
		tr.id = this.marca + this.modelo;

/*		for (let propiedades in this) {
			let td = document.createElement('td');
			td.innerHTML = propiedades;
			td.classList.add ('gasolina');
			tr.appendChild(td);
 		   
		}

		table.appendChild(tr);
		tr = document.createElement('tr');*/
		let td = document.createElement("td");
		let img = document.createElement("img");
		img.src = this.imagen.toString();
		td.appendChild (img);
		tr.appendChild (td);

		
		for (let propiedades in this) {

			if (propiedades != "imagen") {
				let td = document.createElement('td');
				td.innerHTML = this[propiedades].toString();
				td.classList.add ('gasolina');
				tr.appendChild(td);
			}

 		   
		}

		table.appendChild(tr);
		//document.body.appendChild(table);	
	}

	getImporte ()
	{
		return this.importe;
	}

}