import { Persona } from "./persona.js";
class Director extends Persona {
    constructor(nombre, fotografia, descripcion, seriesDirigidas) {
        super(nombre, fotografia, descripcion);
        this.seriesDirigidas = seriesDirigidas;
    }
}
