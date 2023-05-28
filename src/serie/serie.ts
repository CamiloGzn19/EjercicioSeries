import { Actor } from "../actor/actor";
import { Categoria } from "../categoria/categoria";
import { Director } from "../director/director";
import { Episodio } from "../episodio/episodio";

export class Serie {
  public categorias: Categoria[] = [];
  public directores: Director[] = [];
  public actores: Actor[] = [];
  public episodios: Episodio[] = [];

  constructor(public nombre: string, public imagen: string) {}

  public addCategory(categoria: Categoria): void {
    this.categorias.push(categoria);
  }

  public addDirector(director: Director): void {
    this.directores.push(director);
  }

  public addActor(actor: Actor): void {
    this.actores.push(actor);
  }

  public addEpisode(episode: Episodio): void {
    this.episodios.push(episode);
  }

  public getDetail(): string {
    let detail = `Nombre: ${this.nombre}\n`;
    detail += `Imagen: ${this.imagen}\n`;
    detail += `Categorias: ${this.categorias
      .map((categoria) => categoria.getName())
      .join(", ")}\n`;
    detail += `Directores: ${this.directores
      .map((director) => director.nombre)
      .join(", ")}\n`;
    detail += `Actores: ${this.actores
      .map((actor) => actor.nombre)
      .join(", ")}\n`;
    detail += `Episodios:\n`;
    this.episodios.forEach((episode) => {
      detail += `- Nombre: ${episode.nombre}\n`;
      detail += `  Resumen: ${episode.getResumen()}\n`;
      detail += `  Duración: ${episode.getDuracion()} minutos\n`;
    });
    return detail;
  }
}
