import { Persona } from "./persona.js";

class Director extends Persona {
  seriesDirigidas: number;

  constructor(
    nombre: string,
    fotografia: string,
    descripcion: string,
    seriesDirigidas: number
  ) {
    super(nombre, fotografia, descripcion);
    this.seriesDirigidas = seriesDirigidas;
  }
}
