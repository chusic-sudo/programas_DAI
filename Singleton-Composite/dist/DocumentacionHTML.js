import { Documentacion } from './Documentacion.js';
export class DocumentacionHTML extends Documentacion {
    AgregaDocumento(documento) {
        this.contenido.push(documento);
    }
    imprime() {
        console.log("Documento HTML");
        for (let cadena in this.contenido) {
            console.log(cadena);
        }
    }
}
