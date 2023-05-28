export class Plataforma {
  constructor(
    public nombre: string,
    public website: string,
    public planes: Plan[]
  ) {}

  public getDetail(): string {
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
  constructor(public nombre: string, public precio: number) {}
}
