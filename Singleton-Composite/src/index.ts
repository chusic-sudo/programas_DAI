
import {CreateForm} from './CreateForm.js'
import {createInput} from './CreateInput.js'
import {CreateSelect} from './CreateSelect.js'
import {CreateButton} from './CreateButton.js'
import {CreateDiv} from './CreateText.js'
import {AutomovilElectricidad} from './automovilElectricidad.js'
import {AutomovilGasolina} from './automovilGasolina.js'
import {ScooterElectricidad} from './scooterElectricidad.js'
import {ScooterGasolina} from './scooterGasolina.js'
import {FabricaVehiculoGasolina} from './FabricaVehiculoGasolina.js'
import {FabricaVehiculoElectricidad} from './FabricaVehiculoElectricidad.js'
import {Automovil} from './automovil.js'
import {Scooter} from './scooter.js'
import {ClienteContado} from './Clientecontado.js'
import {ClienteCredito} from './ClienteCredito.js'
import {Comercial} from './comercial.js'
import {Empresa} from './empresa.js'
import {Sucursal} from './empresa.js'
import {EmpresaPrincipal} from './empresa.js'

const Singleton = Comercial.Instance ();

let form = new CreateForm("Formulario","text","");
let bt_gasolina = new createInput ("Create","Button","Catálogo Gasolina");
let bt_electrico = new createInput ("Consulta","Button","Catálogo Eléctrico");
let autos = new Array <Automovil> ();
let scooter = new Array <Scooter> ();
let empresa1 = new Sucursal ("Barcelona");
let empresa2 = new Sucursal ("Madrid");
let grupo = new EmpresaPrincipal ("Principal: New York");
grupo.agregaFilial (empresa1);
grupo.agregaFilial (empresa2);


Singleton.setNombre ("Juan Martinez");
document.getElementById("container").appendChild(form.getElement());
form.getElement().appendChild(bt_gasolina.getElement());
form.getElement().appendChild(bt_electrico.getElement());

bt_gasolina.getElement().addEventListener("click", () => catalogo ("Gasolina"));
bt_electrico.getElement().addEventListener("click", () => catalogo ("Electrico"));

let text = document.createTextNode("   Comercial: ");
let sel_comercial = new CreateSelect ("Comercial",["Juan Martínez","Frederic Vartel"])
sel_comercial.getElement ().addEventListener("change", () => InstanciaSingleton (sel_comercial.getValue ()));
form.getElement ().appendChild (text);
form.getElement ().appendChild (sel_comercial.getElement ());

ColocaInventario ();

function ColocaInventario ()
{
    let tmp = document.createTextNode (" --- Inventarios: ");
    let bt_s0 = new createInput ("EM","Button","Inventario Empresa");
    let bt_s1 = new createInput ("S1","Button","Inventario S1");
    let bt_s2 = new createInput ("S2","Button","Inventario S2");

    bt_s0.getElement().addEventListener("click", () => grupo.obtieneVehiculos ());
    bt_s1.getElement ().addEventListener("click", () => empresa1.obtieneVehiculos ());
    bt_s2.getElement ().addEventListener("click", () => empresa2.obtieneVehiculos ());

    form.getElement ().appendChild (tmp);
    form.getElement ().appendChild (bt_s0.getElement ());
    form.getElement ().appendChild (bt_s1.getElement ());
    form.getElement ().appendChild (bt_s2.getElement ());

}


function ColocaTabla ()
{
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
    tr.appendChild (td);
    td = document.createElement("th");
    td.innerHTML = "Precio";
    tr.appendChild (td);

    td = document.createElement("th");
    td.innerHTML = "¿Solicitar?";
    tr.appendChild (td);

    td = document.createElement ("th");
    td.innerHTML = "Añadir a inventario";
    tr.appendChild (td);

    tmp.appendChild (tr);

}






function catalogo (tipo: string)
{
    let Cl_Contado = new ClienteContado ();
    let Cl_Credito = new ClienteCredito ();
    let fabrica = new FabricaVehiculoGasolina ();
    let bt_s0 = new createInput ("Cr_1","Button","Crédito");
    let bt_s1 = new createInput ("Cr_1","Button","Crédito");
    let bt_s2 = new createInput ("Cr_1","Button","Crédito");
    let bt_s3 = new createInput ("Cr_1","Button","Crédito");
    let bt_s4 = new createInput ("Cr_1","Button","Crédito");
    let bt_s5 = new createInput ("Cr_1","Button","Crédito");
    let td = document.createElement("td");
    let br = document.createElement ("br");

    let bt_invPrincipal = new createInput("Cr_1","Button","Crédito");
    let bt_empresa1 = new createInput("Cr_1","Button","Crédito");
    let bt_empresa2 = new createInput("Cr_1","Button","Crédito");

    ColocaTabla ();
    
    let td2 = document.createElement ("td");


   if (tipo == "Gasolina") {
        let fabrica = new FabricaVehiculoGasolina ();
        autos.length = 0;
        scooter.length = 0;

        autos.push(fabrica.creaAutomovil("Jaguar","F-Type","Azul","img/jaguar.jpg",80000));
        scooter.push (fabrica.creaScooter("KEN","ROD","Marron","img/KenRod.jpg",8000));
        autos.push (fabrica.creaAutomovil("Renault","Clio","Naranja","img/renault.jpg",20000));

        autos [0].mostrarCaracteristicas ();

        autos [1].mostrarCaracteristicas ();
        scooter[0].mostrarCaracteristicas (); 
        let tr = document.getElementById("JaguarF-Type");
        td = document.createElement("td");
        bt_s0 = new createInput ("Cr_1","Button","Crédito");
        bt_s0.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[0].getImporte ()));
        td.appendChild (bt_s0.getElement ());
        bt_s0 = new createInput ("Contado1","Button","Contado");
        bt_s0.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[0].getImporte ()));
        td.appendChild (bt_s0.getElement ());
        tr.appendChild (td);
 
        td2 = document.createElement ("td");
        bt_invPrincipal = new createInput ("EM","Button","Empresa Principal");
        bt_invPrincipal.getElement ().addEventListener("click", () => grupo.agregaVehiculo (autos [0]));
        td2.appendChild (bt_invPrincipal.getElement ());

        td2.appendChild(br.cloneNode ());

        bt_empresa1 = new createInput("empresa1","Button","Sucursal 1");
        bt_empresa1.getElement ().addEventListener ("click", () => empresa1.agregaVehiculo (autos [0]));
        td2.appendChild (bt_empresa1.getElement ());
        td2.appendChild(br.cloneNode ());

        bt_empresa2 = new createInput("empresa1","Button","Sucursal 2");
        bt_empresa2.getElement ().addEventListener ("click", () => empresa2.agregaVehiculo (autos [0]));
        td2.appendChild (bt_empresa2.getElement ());


        tr.appendChild (td2);





        // Introducir el select de comercial:
/*
        let td_sel = document.createElement ("td");
        sel_comercial.getElement ().addEventListener("change", () => InstanciaSingleton (sel_comercial.getValue ()));
        td_sel.appendChild (sel_comercial.getElement());
        tr.appendChild (td_sel);
*/
        // Fin introducir select

        tr = document.getElementById("KENROD");
        td = document.createElement("td");
        bt_s1 = new createInput ("Cr_2","Button","Crédito");
        bt_s1.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(scooter[0].getImporte ()));

        td.appendChild (bt_s1.getElement ());
        bt_s1 = new createInput ("Contado2","Button","Contado");
        bt_s1.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(scooter[0].getImporte ()));
        td.appendChild (bt_s1.getElement ());


        tr.appendChild (td);

        td2 = document.createElement ("td");

        bt_invPrincipal = new createInput ("EM","Button","Empresa Principal");
        bt_invPrincipal.getElement ().addEventListener("click", () => grupo.agregaVehiculo (null,scooter [0]));
        td2.appendChild (bt_invPrincipal.getElement ());

        td2.appendChild(br.cloneNode ());

        bt_empresa1 = new createInput("empresa1","Button","Sucursal 1");
        bt_empresa1.getElement ().addEventListener ("click", () => empresa1.agregaVehiculo (null,scooter [0]));
        td2.appendChild (bt_empresa1.getElement ());
        td2.appendChild(br.cloneNode ());

        bt_empresa2 = new createInput("empresa1","Button","Sucursal 2");
        bt_empresa2.getElement ().addEventListener ("click", () => empresa2.agregaVehiculo (null,scooter [0]));
        td2.appendChild (bt_empresa2.getElement ());


        tr.appendChild (td2);


/*        // Introducir el select de comercial:
        sel_comercial = new CreateSelect ("Comercial",["Juan Martínez","Frederic Vartel"]);
        sel_comercial.getElement ().addEventListener("change", () => InstanciaSingleton (sel_comercial.getValue ()));
        td_sel = document.createElement ("td");
        td_sel.appendChild (sel_comercial.getElement());
        tr.appendChild (td_sel);
*/
        // Fin introducir select





        tr = document.getElementById("RenaultClio");
        td = document.createElement("td");
        bt_s2 = new createInput ("Cr_3","Button","Crédito");
        bt_s2.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[1].getImporte ()));

        td.appendChild (bt_s2.getElement ());
        bt_s2 = new createInput ("Contado3","Button","Contado");
        bt_s2.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[1].getImporte ()));
        td.appendChild (bt_s2.getElement ());

         tr.appendChild (td);

         // último td de momento. Introducimos los botones de Agregar a la empresa
         // o a las filiales
       td2 = document.createElement ("td");

        bt_invPrincipal = new createInput ("EM","Button","Empresa Principal");
        bt_invPrincipal.getElement ().addEventListener("click", () => grupo.agregaVehiculo (autos[1]));
        td2.appendChild (bt_invPrincipal.getElement ());

        td2.appendChild(br.cloneNode ());

        bt_empresa1 = new createInput("empresa1","Button","Sucursal 1");
        bt_empresa1.getElement ().addEventListener ("click", () => empresa1.agregaVehiculo (autos [1]));
        td2.appendChild (bt_empresa1.getElement ());
        td2.appendChild(br.cloneNode ());

        bt_empresa2 = new createInput("empresa1","Button","Sucursal 2");
        bt_empresa2.getElement ().addEventListener ("click", () => empresa2.agregaVehiculo (autos [1]));
        td2.appendChild (bt_empresa2.getElement ());


        tr.appendChild (td2);



        // Introducir el select de comercial:
/*
        sel_comercial = new CreateSelect ("Comercial",["Juan Martínez","Frederic Vartel"]);
        sel_comercial.getElement ().addEventListener("change", () => InstanciaSingleton (sel_comercial.getValue ()));
        td_sel = document.createElement ("td");
        td_sel.appendChild (sel_comercial.getElement());
        tr.appendChild (td_sel);
*/
        // Fin introducir select



    }
    else {
        let fabrica = new FabricaVehiculoElectricidad ();
        autos.length = 0;
        scooter.length = 0;
        autos.push(fabrica.creaAutomovil("Tesla","Model-S","Rojo","img/teslamodel_s.jpg",120000));
        scooter.push (fabrica.creaScooter("Zapp","300","Diverso","img/zapp.jpg",1000));
        autos.push (fabrica.creaAutomovil("NIO","ET","Blanco","img/nio.jpg",200000));

        autos [0].mostrarCaracteristicas ();
        autos [1].mostrarCaracteristicas ();
        scooter[0].mostrarCaracteristicas ();       
        let tr = document.getElementById("TeslaModel-S");
        td = document.createElement ("td");
        bt_s3 = new createInput ("Cr_1","Button","Crédito");
        bt_s3.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[0].getImporte ()));
        td.appendChild (bt_s3.getElement ());
        bt_s3 = new createInput ("Contado1","Button","Contado");
        bt_s3.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[0].getImporte ()));
        td.appendChild (bt_s3.getElement ());
        tr.appendChild (td);

        td2 = document.createElement ("td");
        bt_invPrincipal = new createInput ("EM","Button","Empresa Principal");
        bt_invPrincipal.getElement ().addEventListener("click", () => grupo.agregaVehiculo (autos [0]));
        td2.appendChild (bt_invPrincipal.getElement ());

        td2.appendChild(br.cloneNode ());

        bt_empresa1 = new createInput("empresa1","Button","Sucursal 1");
        bt_empresa1.getElement ().addEventListener ("click", () => empresa1.agregaVehiculo (autos [0]));
        td2.appendChild (bt_empresa1.getElement ());
        td2.appendChild(br.cloneNode ());

        bt_empresa2 = new createInput("empresa1","Button","Sucursal 2");
        bt_empresa2.getElement ().addEventListener ("click", () => empresa2.agregaVehiculo (autos [0]));
        td2.appendChild (bt_empresa2.getElement ());


        tr.appendChild (td2);


        // Introducir el select de comercial:
/*
        td = document.createElement ("td");
        sel_comercial.getElement ().addEventListener("change", () => InstanciaSingleton (sel_comercial.getValue ()));
        td.appendChild (sel_comercial.getElement());
        tr.appendChild (td);
*/
        // Fin introducir select




        tr = document.getElementById("Zapp300");
        td = document.createElement("td");
        bt_s4 = new createInput ("Cr_2","Button","Crédito");
        bt_s4.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(scooter[0].getImporte ()));

        td.appendChild (bt_s4.getElement ());
        bt_s4 = new createInput ("Contado2","Button","Contado");
        bt_s4.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(scooter[0].getImporte ()));
        td.appendChild (bt_s4.getElement ());
        tr.appendChild (td);


        td2 = document.createElement ("td");
        bt_invPrincipal = new createInput ("EM","Button","Empresa Principal");
        bt_invPrincipal.getElement ().addEventListener("click", () => grupo.agregaVehiculo (null,scooter[0]));
        td2.appendChild (bt_invPrincipal.getElement ());

        td2.appendChild(br.cloneNode ());

        bt_empresa1 = new createInput("empresa1","Button","Sucursal 1");
        bt_empresa1.getElement ().addEventListener ("click", () => empresa1.agregaVehiculo (null,scooter[0]));
        td2.appendChild (bt_empresa1.getElement ());
        td2.appendChild(br.cloneNode ());

        bt_empresa2 = new createInput("empresa1","Button","Sucursal 2");
        bt_empresa2.getElement ().addEventListener ("click", () => empresa2.agregaVehiculo (null,scooter [0]));
        td2.appendChild (bt_empresa2.getElement ());


        tr.appendChild (td2);


        // Introducir el select de comercial:
/*
        sel_comercial = new CreateSelect ("Comercial",["Juan Martínez","Frederic Vartel"]);
        sel_comercial.getElement ().addEventListener("change", () => InstanciaSingleton (sel_comercial.getValue ()));
        td = document.createElement ("td");
        td.appendChild (sel_comercial.getElement());
        tr.appendChild (td);
*/
        // Fin introducir select





        tr = document.getElementById("NIOET");
        td = document.createElement("td");
        bt_s5 = new createInput ("Cr_3","Button","Crédito");
        bt_s5.getElement().addEventListener("click", () => Cl_Credito.nuevopedido(autos[1].getImporte ()));

        td.appendChild (bt_s5.getElement ());
        bt_s5 = new createInput ("Contado3","Button","Contado");
        bt_s5.getElement().addEventListener("click", () => Cl_Contado.nuevopedido(autos[1].getImporte ()));
        td.appendChild (bt_s5.getElement ());
        tr.appendChild (td);

        td2 = document.createElement ("td");
        bt_invPrincipal = new createInput ("EM","Button","Empresa Principal");
        bt_invPrincipal.getElement ().addEventListener("click", () => grupo.agregaVehiculo (autos [1]));
        td2.appendChild (bt_invPrincipal.getElement ());

        td2.appendChild(br.cloneNode ());

        bt_empresa1 = new createInput("empresa1","Button","Sucursal 1");
        bt_empresa1.getElement ().addEventListener ("click", () => empresa1.agregaVehiculo (autos [1]));
        td2.appendChild (bt_empresa1.getElement ());
        td2.appendChild(br.cloneNode ());

        bt_empresa2 = new createInput("empresa1","Button","Sucursal 2");
        bt_empresa2.getElement ().addEventListener ("click", () => empresa2.agregaVehiculo (autos [1]));
        td2.appendChild (bt_empresa2.getElement ());


        tr.appendChild (td2);


        // Introducir el select de comercial:
/*
        sel_comercial = new CreateSelect ("Comercial",["Juan Martínez","Frederic Vartel"]);
        sel_comercial.getElement ().addEventListener("change", () => InstanciaSingleton (sel_comercial.getValue ()));
        td = document.createElement ("td");
        td.appendChild (sel_comercial.getElement());
        tr.appendChild (td);
*/
        // Fin introducir select


    }


}

function InstanciaSingleton (comercial: string): void {
    const Singleton = Comercial.Instance ();

    Singleton.setNombre (comercial);
    Singleton.visualiza ();


}
