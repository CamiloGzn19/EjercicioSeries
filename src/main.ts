import { Actor } from "./actor/actor.js";
import { Categoria } from "./categoria/categoria";
import { Director } from "./director/director.js";
import { Episodio } from "./episodio/episodio.js";
import { Serie } from "./serie/serie.js";
import { Plataforma, Plan } from "./plataforma/plataforma.js";

// Creación de instancias de ejemplo
const categoria1 = new Categoria("Comedia");
const categoria2 = new Categoria("Drama");

const director1 = new Director(
  "Stanley Kubrick",
  "Stanley_Image.jpg",
  "Stanley Kubrick fue un director de cine, guionista, productor y fotógrafo estadounidense nacionalizado británico. Considerado por muchos como uno de los cineastas más influyentes del siglo XX, destacó tanto por su precisión técnica como por la notable estilización y la profunda carga simbólica de sus películas.​",
  []
);
const director2 = new Director(
  "George Vincent",
  "George_Image.jpg",
  "George Vincent Gilligan, Jr., conocido como Vince Gilligan, es un guionista, director y productor estadounidense. Es el creador de la aclamada serie televisiva Breaking Bad y su spin-off Better Call Saul. Gilligan también ha trabajado en las series The X Files y Los pistoleros solitarios",
  []
);

const actor1 = new Actor(
  "Johnny Depp",
  "johnny_image.jpg",
  "John Christopher Depp II es un actor, productor de cine y músico estadounidense. Ha sido nominado en tres ocasiones al Óscar y recibió un Globo de Oro, ​ un premio del Sindicato de Actores y un César",
  []
);
const actor2 = new Actor(
  "Harrison Ford",
  "harrison_image.jpg",
  "Harrison Ford es un actor estadounidense de cine y televisión. Debe su notoriedad a su colaboración con el guionista, productor y director George Lucas, que fue el primero en darle la posibilidad de ser actor",
  []
);

const episode1 = new Episodio(
  "The Last One",
  "Este episodio cierra varias historias de larga duración. Ross Geller (David Schwimmer) le confiesa su amor a Rachel Green (Jennifer Aniston) y deciden reanudar su relación y Mónica Geller (Courteney Cox Arquette) y Chandler Bing (Matthew Perry) adoptan dos gemelos y se trasladan a las afueras. La escena final del episodio muestra al grupo yendo a Central Perk a tomar una taza de café por última vez",
  45
);
const episode2 = new Episodio(
  "Felina",
  "En el episodio, Walter White (Bryan Cranston) pone fin a su autoexilio en New Hampshire, evadiendo la persecución nacional en su contra, con el fin de regresar a Albuquerque y obtener venganza de los neonazis que lo habían traicionado, así como de asegurarse de que su familia finalmente reciba el resto del dinero que había ganado con la fabricación ilegal de metanfetaminas",
  60
);

const serie = new Serie("Breaking friends", "BreakingFriends_image.jpg");
serie.addCategory(categoria1);
serie.addCategory(categoria2);
serie.addDirector(director1);
serie.addActor(actor1);
serie.addEpisode(episode1);
serie.addEpisode(episode2);

director1.series.push(serie);
director2.series.push(serie);

actor1.series.push(serie);
actor2.series.push(serie);

const plataforma = new Plataforma("Netflix", "www.Netflix.com", []);
const plan1 = new Plan("Básico", 9.99);
const plan2 = new Plan("Premium", 14.99);
plataforma.planes.push(plan1, plan2);

// Prueba de los métodos
console.log("Detalle de serie:");
console.log(serie.getDetail());

console.log("\nDetalle de director");
console.log(director1.getDetail());

console.log("\nDetalle actor:");
console.log(actor1.getDetail());

console.log("\nDetalle plataforma:");
console.log(plataforma.getDetail());
