import { Persona } from "./persona.js";

class Actor extends Persona {
  seriesActuadas: number;

  constructor(
    nombre: string,
    fotografia: string,
    descripcion: string,
    seriesActuadas: number
  ) {
    super(nombre, fotografia, descripcion);
    this.seriesActuadas = seriesActuadas;
  }
}
