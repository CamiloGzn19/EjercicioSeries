export class Plataforma {
    constructor(nombre, website, planes) {
        this.nombre = nombre;
        this.website = website;
        this.planes = planes;
    }
    getDetail() {
        let detail = `Nombre: ${this.nombre}\n`;
        detail += `Website: ${this.website}\n`;
        detail += `Planes:\n`;
        this.planes.forEach((plan) => {
            detail += `- Nombre: ${plan.nombre}\n`;
            detail += `  Precio: ${plan.precio}\n`;
        });
        return detail;
    }
}
export class Plan {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
