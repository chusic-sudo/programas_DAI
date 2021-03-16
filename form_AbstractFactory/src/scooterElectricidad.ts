import {Scooter} from './scooter.js';

export class ScooterElectricidad extends Scooter {
    public constructor (
        NewMarca: string,
        NewModelo: string,
        NewColor: string,
        imagen: string,
        importe: number
    ) {
        super (NewMarca,NewModelo,NewColor, imagen,importe);
    }

    public mostrarCaracteristicas ()
    {
        let table = document.getElementById('objetos');

        let tr = document.createElement('tr');
        tr.id = this.marca + this.modelo;

/*        for (let propiedades in this) {
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


    }


    getImporte ()
    {
        return this.importe;
    }    
}