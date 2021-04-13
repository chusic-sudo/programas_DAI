/** Producto **/

export class Sucursal {
	protected nif: string;
	protected direccion: string;
	protected tipo: string;

	public setNif (nif: string): void {
		this.nif = nif;
	}

	public setDireccion (direccion: string): void {
		this.direccion = direccion;
	}

	public setTipo (tipo: string) {
		this.tipo = tipo;
	}
}

/** Abstract Builder **/

interface  SucursalBuilder {

	buildNif (): void;
	buildDireccion (): void;
	buildTipo (): void;

}

/** Concrete Builder **/

class SucursalBarcelonaBuilder implements SucursalBuilder {
	protected sucursal: Sucursal;

	public constructor ()
	{
		this.sucursal = new Sucursal ();
	}

	public buildNif (): void {
		this.sucursal.setNif ("40349348V");
	}

	public buildDireccion (): void {
		this.sucursal.setDireccion ("Av diagonal, 147");
	}

	public buildTipo (): void {
		this.sucursal.setTipo("Concesionario Oficial");
	}
}

class SucursalMadridBuilder implements SucursalBuilder {
	protected sucursal: Sucursal;

	public constructor ()
	{
		this.sucursal = new Sucursal ();
	}

	public buildNif (): void {
		this.sucursal.setNif ("533934884F");
	}

	public buildDireccion (): void {
		this.sucursal.setDireccion ("Paseo de la Castellana, 154");
	}

	public buildTipo (): void {
		this.sucursal.setTipo("Concesionario Genérico");
	}
}