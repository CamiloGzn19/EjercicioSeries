export class Serie {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = [];
        this.directores = [];
        this.actores = [];
        this.episodios = [];
    }
    addCategory(categoria) {
        this.categorias.push(categoria);
    }
    addDirector(director) {
        this.directores.push(director);
    }
    addActor(actor) {
        this.actores.push(actor);
    }
    addEpisode(episode) {
        this.episodios.push(episode);
    }
    getDetail() {
        let detail = `Nombre: ${this.nombre}\n`;
        detail += `Imagen: ${this.imagen}\n`;
        detail += `Categorias: ${this.categorias
            .map((categoria) => categoria.getName())
            .join(", ")}\n`;
        detail += `Directores: ${this.directores
            .map((director) => director.nombre)
            .join(", ")}\n`;
        detail += `Actores: ${this.actores
            .map((actor) => actor.nombre)
            .join(", ")}\n`;
        detail += `Episodios:\n`;
        this.episodios.forEach((episode) => {
            detail += `- Nombre: ${episode.nombre}\n`;
            detail += `  Resumen: ${episode.getResumen()}\n`;
            detail += `  Duración: ${episode.getDuracion()} minutos\n`;
        });
        return detail;
    }
}
