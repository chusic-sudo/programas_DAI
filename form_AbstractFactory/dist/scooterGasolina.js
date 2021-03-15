import { Scooter } from './scooter.js';
export class ScooterGasolina extends Scooter {
    constructor(NewMarca, NewModelo, NewColor, NewPotencia) {
        super(NewMarca, NewModelo, NewColor, NewPotencia);
    }
    mostrarCaracteristicas() {
        let table = document.getElementById('objetos');
        let tr = document.createElement('tr');
        /*for (let propiedades in this) {
            let td = document.createElement('td');
            td.innerHTML = propiedades;
            td.classList.add ('s_gasolina');
            tr.appendChild(td);
            
        }

        table.appendChild(tr);
        tr = document.createElement('tr');*/
        let td = document.createElement("td");
        td.innerHTML = "Scooter Gasolina";
        td.style.fontWeight = "bold";
        td.style.color = "orange";
        tr.appendChild(td);
        for (let propiedades in this) {
            let td = document.createElement('td');
            td.innerHTML = this[propiedades].toString();
            td.style.color = "orange";
            td.classList.add('s_gasolina');
            tr.appendChild(td);
        }
        td = document.createElement("td");
        td.innerHTML = "&nbsp";
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = "&nbsp";
        tr.appendChild(td);
        table.appendChild(tr);
        document.body.appendChild(table);
    }
}
