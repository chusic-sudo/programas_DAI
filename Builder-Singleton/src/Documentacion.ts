export abstract class Documentacion {
	protected List = new Array <String> ();

	public abstract AgregaDocumento (documento: string):void;
	public abstract imprime (): void;
}