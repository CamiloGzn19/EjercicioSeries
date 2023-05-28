export class Categoria {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getName(): string {
    return this.nombre;
  }
}
