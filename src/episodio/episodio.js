export class Episodio {
    constructor(nombre, resumen, duracion) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
    }
    getName() {
        return this.nombre;
    }
    getResumen() {
        return this.resumen;
    }
    getDuracion() {
        return this.duracion;
    }
    getDetail() {
        let detail = `Nombre: ${this.nombre}\n`;
        detail += `Resumen: ${this.resumen}\n`;
        detail += `Duracion: ${this.duracion} minutos\n`;
        return detail;
    }
}
