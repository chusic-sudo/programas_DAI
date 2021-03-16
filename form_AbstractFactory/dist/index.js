import { CreateForm } from './CreateForm.js';
import { createInput } from './CreateInput.js';
import { FabricaVehiculoGasolina } from './FabricaVehiculoGasolina.js';
import { FabricaVehiculoElectricidad } from './FabricaVehiculoElectricidad.js';
import { ClienteContado } from './Clientecontado.js';
import { ClienteCredito } from './ClienteCredito.js';
let form = new CreateForm("Formulario", "text", "");
let bt_gasolina = new createInput("Create", "Button", "Catálogo Gasolina");
let bt_electrico = new createInput("Consulta", "Button", "Catálogo Eléctrico");
let autos = new Array();
let scooter = new Array();
document.getElementById("container").appendChild(form.getElement());
form.getElement().appendChild(bt_gasolina.getElement());
form.getElement().appendChild(bt_electrico.getElement());
bt_gasolina.getElement().addEventListener("click", () => catalogo("Gasolina"));
bt_electrico.getElement().addEventListener("click", () => catalogo("Electrico"));
function ColocaTabla() {
    let tmp = document.getElementById("objetos");
    if (tmp != null) {
        tmp.parentNode.removeChild(tmp);
    }
    tmp = document.createElement("table");
    tmp.id = "objetos";
    document.getElementById("div_consulta_objetos").appendChild(tmp);
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
    td = document.createElement("th");
    td.innerHTML = "¿Solicitar?";
    tr.appendChild(td);
    tmp.appendChild(tr);
}
function catalogo(tipo) {
    let Cl_Contado = new ClienteContado();
    let Cl_Credito = new ClienteCredito();
    let fabrica = new FabricaVehiculoGasolina();
    let bt_s0 = new createInput("Cr_1", "Button", "Crédito");
    let bt_s1 = new createInput("Cr_1", "Button", "Crédito");
    let bt_s2 = new createInput("Cr_1", "Button", "Crédito");
    let bt_s3 = new createInput("Cr_1", "Button", "Crédito");
    let bt_s4 = new createInput("Cr_1", "Button", "Crédito");
    let bt_s5 = new createInput("Cr_1", "Button", "Crédito");
    ColocaTabla();
    if (tipo == "Gasolina") {
        let fabrica = new FabricaVehiculoGasolina();
        autos.push(fabrica.creaAutomovil("Jaguar", "F-Type", "Azul", "img/jaguar.jpg", 80000));
        scooter.push(fabrica.creaScooter("KEN", "ROD", "Marron", "img/KenRod.jpg", 8000));
        autos.push(fabrica.creaAutomovil("Renault", "Clio", "Naranja", "img/renault.jpg", 20000));
        autos[0].mostrarCaracteristicas();
        autos[1].mostrarCaracteristicas();
        scooter[0].mostrarCaracteristicas();
        let tr = document.getElementById("JaguarF-Type");
        let td = document.createElement("td");
        bt_s0 = new createInput("Cr_1", "Button", "Crédito");
        bt_s0.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[0].getImporte()));
        td.appendChild(bt_s0.getElement());
        bt_s0 = new createInput("Contado1", "Button", "Contado");
        bt_s0.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[0].getImporte()));
        td.appendChild(bt_s0.getElement());
        tr.appendChild(td);
        tr = document.getElementById("KENROD");
        td = document.createElement("td");
        bt_s1 = new createInput("Cr_2", "Button", "Crédito");
        bt_s1.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(scooter[0].getImporte()));
        td.appendChild(bt_s1.getElement());
        bt_s1 = new createInput("Contado2", "Button", "Contado");
        bt_s1.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(scooter[0].getImporte()));
        td.appendChild(bt_s1.getElement());
        tr.appendChild(td);
        tr = document.getElementById("RenaultClio");
        td = document.createElement("td");
        bt_s2 = new createInput("Cr_3", "Button", "Crédito");
        bt_s2.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[1].getImporte()));
        td.appendChild(bt_s2.getElement());
        bt_s2 = new createInput("Contado3", "Button", "Contado");
        bt_s2.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[1].getImporte()));
        td.appendChild(bt_s2.getElement());
        tr.appendChild(td);
    }
    else {
        let fabrica = new FabricaVehiculoElectricidad();
        autos.push(fabrica.creaAutomovil("Tesla", "Model-S", "Rojo", "img/teslamodel_s.jpg", 120000));
        scooter.push(fabrica.creaScooter("Zapp", "300", "Diverso", "img/zapp.jpg", 1000));
        autos.push(fabrica.creaAutomovil("NIO", "ET", "Blanco", "img/nio.jpg", 200000));
        autos[0].mostrarCaracteristicas();
        autos[1].mostrarCaracteristicas();
        scooter[0].mostrarCaracteristicas();
        let tr = document.getElementById("TeslaModel-S");
        let td = document.createElement("td");
        bt_s3 = new createInput("Cr_1", "Button", "Crédito");
        bt_s3.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[0].getImporte()));
        td.appendChild(bt_s3.getElement());
        bt_s3 = new createInput("Contado1", "Button", "Contado");
        bt_s3.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[0].getImporte()));
        td.appendChild(bt_s3.getElement());
        tr.appendChild(td);
        tr = document.getElementById("Zapp300");
        td = document.createElement("td");
        bt_s4 = new createInput("Cr_2", "Button", "Crédito");
        bt_s4.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(scooter[0].getImporte()));
        td.appendChild(bt_s4.getElement());
        bt_s4 = new createInput("Contado2", "Button", "Contado");
        bt_s4.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(scooter[0].getImporte()));
        td.appendChild(bt_s4.getElement());
        tr.appendChild(td);
        tr = document.getElementById("NIOET");
        td = document.createElement("td");
        bt_s5 = new createInput("Cr_3", "Button", "Crédito");
        bt_s5.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[1].getImporte()));
        td.appendChild(bt_s5.getElement());
        bt_s5 = new createInput("Contado3", "Button", "Contado");
        bt_s5.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[1].getImporte()));
        td.appendChild(bt_s5.getElement());
        tr.appendChild(td);
    }
}
// Crea un formulario
/*var f = document.createElement("form");

// Lo añade en el cuerpo ('body') del documento
document.body.appendChild(f);

// Añade los atributos de acción y método
f.action = "/cgi-bin/some.cgi";
f.method = "POST"

// Llama el método de enviar el formulario
f.submit();*/ 
