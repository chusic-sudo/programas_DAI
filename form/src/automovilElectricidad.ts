
import {Automovil} from './automovil.js'

export class AutomovilElectricidad extends Automovil {
	public constructor (
		NewMarca: string,
		NewModel: string,
		NewColor: string,
		NewPotencia: number,
		NewEspacio: number,
        NewSpeed: number) {
		
		super (NewMarca,NewModel,NewColor,NewPotencia,NewEspacio,NewSpeed); 
	}

	public mostrarCaracteristicas ()
	{
		let table = document.getElementById('objetos');
		let tr = document.createElement('tr');

		/*for (let propiedades in this) {
			let td = document.createElement('td');
			td.innerHTML = propiedades;
			td.classList.add ('electrico');
			tr.appendChild(td);
 		   
		}

		table.appendChild(tr);
		tr = document.createElement('tr');*/
		let td = document.createElement("td");
		td.innerHTML = "Automóvil Eléctrico";
		td.style.fontWeight ="bold";
        td.style.color = "blue";		
		tr.appendChild (td);
		
		for (let propiedades in this) {
			let td = document.createElement("td");
			td.innerHTML = this[propiedades].toString();
			td.style.color = "blue";
			//td.classList.add ('electrico');
			tr.appendChild(td);
 		   
		}

		table.appendChild(tr);
		document.body.appendChild(table);	}

    public aumentaVelocidad (): number
    {
        this.speed ++;
        return this.speed;
    }

    public disminuyeVelocidad (): number
    {
        this.speed --;
        return this.speed;
    }

    public obtieneVelocidad (): number
    {
        return this.speed;
    }

}