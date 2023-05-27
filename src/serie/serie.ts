export class Serie {
  private imagenRepresentativa: string;
  private nombre: string;
  private categorias: string[];

  constructor(
    imagenRepresentativa: string,
    nombre: string,
    categorias: string[]
  ) {
    this.imagenRepresentativa = imagenRepresentativa;
    this.nombre = nombre;
    this.categorias = categorias;
  }

  public getimagenRepresentativa(): string {
    return this.imagenRepresentativa;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public getCategorias(): string[] {
    return this.categorias;
  }
}
