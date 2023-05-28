export class Actor {
    constructor(nombre, foto, descripcion, series) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.series = series;
    }
    getDetail() {
        let detail = `Nombre: ${this.nombre}\n`;
        detail += `Foto: ${this.foto}\n`;
        detail += `Descripción: ${this.descripcion}\n`;
        detail += `Series: ${this.series.map((serie) => serie.nombre).join(", ")}\n`;
        return detail;
    }
}
