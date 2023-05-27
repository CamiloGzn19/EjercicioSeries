export class Serie {
    constructor(imagenRepresentativa, nombre, categorias) {
        this.imagenRepresentativa = imagenRepresentativa;
        this.nombre = nombre;
        this.categorias = categorias;
    }
    getimagenRepresentativa() {
        return this.imagenRepresentativa;
    }
    getNombre() {
        return this.nombre;
    }
    getCategorias() {
        return this.categorias;
    }
}
