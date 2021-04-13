export abstract class Documentacion {
	protected contenido = new Array <String> ();

	public abstract AgregaDocumento (documento: string):void;
	public abstract imprime (): void;
}