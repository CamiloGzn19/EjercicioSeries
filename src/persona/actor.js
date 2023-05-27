import { Persona } from "./persona.js";
class Actor extends Persona {
    constructor(nombre, fotografia, descripcion, seriesActuadas) {
        super(nombre, fotografia, descripcion);
        this.seriesActuadas = seriesActuadas;
    }
}
