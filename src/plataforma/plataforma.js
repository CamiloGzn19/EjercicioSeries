export class Plataforma {
    constructor(sitioWeb) {
        this.sitioWeb = sitioWeb;
        this.planes = [];
    }
    nuevoPlan(plan) {
        this.planes.push(plan);
    }
}
