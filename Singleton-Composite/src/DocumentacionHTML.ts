import {Documentacion} from './Documentacion.js'

export class DocumentacionHTML extends Documentacion {

	public AgregaDocumento (documento: string):void {
		this.contenido.push (documento);
	}
	public imprime (): void {
		console.log ("Documento HTML");
		for (let cadena in this.contenido) {
			console.log (cadena);
		}
	}
}