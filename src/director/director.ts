import { Serie } from "../serie/serie.js";

export class Director {
  constructor(
    public nombre: string,
    public foto: string,
    public descripcion: string,
    public series: Serie[]
  ) {}

  public getDetail(): string {
    let detail = `Nombre: ${this.nombre}\n`;
    detail += `Foto: ${this.foto}\n`;
    detail += `Description: ${this.descripcion}\n`;
    detail += `Series: ${this.series.map((serie) => serie.nombre).join(", ")}\n`;
    return detail;
  }
}
