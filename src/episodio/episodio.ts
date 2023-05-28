export class Episodio {
  public nombre: string;
  private resumen: string;
  private duracion: number;

  constructor(nombre: string, resumen: string, duracion: number) {
    this.nombre = nombre;
    this.resumen = resumen;
    this.duracion = duracion;
  }

  public getName(): string {
    return this.nombre;
  }

  public getResumen(): string {
    return this.resumen;
  }

  public getDuracion(): number {
    return this.duracion;
  }

  public getDetail(): string {
    let detail = `Nombre: ${this.nombre}\n`;
    detail += `Resumen: ${this.resumen}\n`;
    detail += `Duracion: ${this.duracion} minutos\n`;
    return detail;
  }
}
