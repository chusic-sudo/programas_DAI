import { CreateForm } from './CreateForm.js';
import { createInput } from './CreateInput.js';
import { CreateSelect } from './CreateSelect.js';
import { CreateDiv } from './CreateText.js';
import { AutomovilElectricidad } from './automovilElectricidad.js';
import { AutomovilGasolina } from './automovilGasolina.js';
import { ScooterElectricidad } from './scooterElectricidad.js';
import { ScooterGasolina } from './scooterGasolina.js';
let form = new CreateForm("Formulario", "text", "");
let marca = new createInput("Marca", "text", "");
let modelo = new createInput("Modelo", "text", "");
let color = new createInput("Color", "text", "");
let potencia = new createInput("Potencia", "text", "");
let espacio = new createInput("Espacio", "text", "");
let speed = new createInput("Speed", "text", "");
let select = new CreateSelect("Lista", ["Automóvil Gasolina", "Automóvil Eléctrico", "Scooter Gasolina", "Scooter Eléctrico"]);
let text = document.createTextNode("Marca:");
let br = document.createElement("br");
let bt_create = new createInput("Create", "Button", "Crear el objeto");
let bt_consulta = new createInput("Consulta", "Button", "Consultar los objetos");
let text_error = new CreateDiv("Error", "Error");
let autosGasolina = new Array();
let autosElectrico = new Array();
let scooterGasolina = new Array();
let scooterElectricidad = new Array();
document.getElementById("container").appendChild(form.getElement());
document.getElementById("container").appendChild(text_error.getElement());
text_error.setHidden();
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(marca.getElement());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Modelo: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(modelo.getElement());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Color: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(color.getElement());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Potencia: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(potencia.getElement());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Espacio: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(espacio.getElement());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Velocidad: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(speed.getElement());
form.getElement().appendChild(br.cloneNode());
text = document.createTextNode("Tipo de objeto: ");
form.getElement().appendChild(text);
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(select.getElement());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(br.cloneNode());
form.getElement().appendChild(bt_create.getElement());
form.getElement().appendChild(bt_consulta.getElement());
bt_create.getElement().addEventListener("click", () => createObject());
bt_consulta.getElement().addEventListener("click", () => consultaObject());
function consultaObject() {
    var i, limite;
    // Limpiar la tabla colocada
    /*
        let tmp = document.getElementsByTagName("table");
    
        if (tmp != null) {
            limite = tmp.length;
            for (i = 0; i < limite; i++) {
                tmp [0].parentElement.removeChild(tmp [0]);
            }
        }*/
    let tmp = document.getElementById("objetos");
    if (tmp != null) {
        tmp.parentNode.removeChild(tmp);
    }
    tmp = document.createElement("table");
    tmp.id = "objetos";
    document.getElementById("div_consulta_objetos").appendChild(tmp);
    let tr = document.createElement('tr');
    let td = document.createElement('th');
    td.innerHTML = "Tipo Objeto";
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
    td.innerHTML = "Potencia";
    tr.appendChild(td);
    td = document.createElement("th");
    td.innerHTML = "Espacio";
    tr.appendChild(td);
    td = document.createElement("th");
    td.innerHTML = "Velocidad";
    tr.appendChild(td);
    tmp.appendChild(tr);
    // Colocar las nuevas
    for (let tmp of autosGasolina) {
        tmp.mostrarCaracteristicas();
    }
    for (let tmp of autosElectrico) {
        tmp.mostrarCaracteristicas();
    }
    for (let tmp of scooterGasolina) {
        tmp.mostrarCaracteristicas();
    }
    for (let tmp of scooterElectricidad) {
        tmp.mostrarCaracteristicas();
    }
}
function createObject() {
    if (espacio.getValue() == "") {
        espacio.setValue("0");
    }
    if (speed.getValue() == "") {
        speed.setValue("0");
    }
    if (potencia.getValue() == "") {
        potencia.setValue("0");
    }
    text_error.background("orange");
    text_error.setPosition("absolute");
    if (marca.getValue() == "") {
        text_error.setVisible();
        text_error.setText("*ERROR: El nombre de la marca es necesario");
        text_error.setTop("100px");
        text_error.setLeft("250px");
    }
    else if (modelo.getValue() == "") {
        text_error.setVisible();
        text_error.setText("*ERROR: El nombre del modelo es necesario");
        text_error.setTop("140px");
        text_error.setLeft("250px");
    }
    else if (color.getValue() == "") {
        text_error.setVisible();
        text_error.setText("*ERROR: El color es necesario");
        text_error.setTop("180px");
        text_error.setLeft("250px");
    }
    else {
        // Crear el objeto
        text_error.setHidden();
        switch (select.getValue()) {
            case "Automóvil Gasolina": {
                let tmp = new AutomovilGasolina(marca.getValue(), modelo.getValue(), color.getValue(), 0, parseInt(espacio.getValue()), parseInt(speed.getValue()));
                autosGasolina.push(tmp);
                break;
            }
            case "Automóvil Eléctrico": {
                let tmp = new AutomovilElectricidad(marca.getValue(), modelo.getValue(), color.getValue(), 0, parseInt(espacio.getValue()), parseInt(speed.getValue()));
                autosElectrico.push(tmp);
                break;
            }
            case "Scooter Gasolina": {
                let tmp = new ScooterGasolina(marca.getValue(), modelo.getValue(), color.getValue(), 0);
                scooterGasolina.push(tmp);
                break;
            }
            case "Scooter Eléctrico": {
                let tmp = new ScooterElectricidad(marca.getValue(), modelo.getValue(), color.getValue(), 0);
                scooterElectricidad.push(tmp);
                break;
            }
        }
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
