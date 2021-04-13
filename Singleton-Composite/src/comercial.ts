export class Comercial {
	protected nombre: string;
	protected id_comercial: number;
	protected email: string;

	private static instancia: Comercial;

	private constructor () {

	}

	public static Instance (): Comercial {
		if (!Comercial.instancia) {
			Comercial.instancia = new Comercial ();
		}
		
		return Comercial.instancia;
	}

	public visualiza (): void {
		console.log ("Nombre: " + this.nombre);
		console.log ("Email: " + this.email);
		console.log ("id_comercial " + this.id_comercial);
	}

	public getNombre (): string {
		return this.nombre;
	}

	public getEmail (): string {
		return this.email;
	}

	public getId (): number {
		return this.id_comercial;
	}

	public setNombre (nombre: string) {
		this.nombre = nombre;
	}

	public setEmail (email: string) {
		this.email = email;
	}

	public setId (id:number) {
		this.id_comercial = id;
	}
}