import { Planes } from "./planes";

export class Plataforma {
  sitioWeb: string;
  planes: Planes[];

  constructor(sitioWeb: string) {
    this.sitioWeb = sitioWeb;
    this.planes = [];
  }

  

  public nuevoPlan(plan: Planes) {
    this.planes.push(plan);
  }
}
