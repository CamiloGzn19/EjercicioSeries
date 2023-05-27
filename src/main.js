import { Planes } from "./plataforma/planes.js";
import { Plataforma } from "./plataforma/plataforma.js";
import { Serie } from "./serie/serie.js";
// Creación de series
const serieDark = new Serie("www.Darimage.com", "Dark", [
    "Ciencia Ficción",
    "Suspenso",
    "Tragedia",
]);
const serieTheoffice = new Serie("www.Darimage.com", "Dark", [
    "Falso documental",
    "Comedia",
    "Sátira",
]);
const serieFriends = new Serie("www.Darimage.com", "Dark", [
    "Sitcom",
    "Suspenso",
    "Romántica",
]);
// Creación de planes
const plan1 = new Planes("Básico", 12);
const plan2 = new Planes("Estándar", 24);
const plan3 = new Planes("Premium", 48);
// Creació de plataformas
const plataforma1 = new Plataforma("www.Netlfix.com");
// Añadiendo planes a las plataformas
plataforma1.nuevoPlan(plan1);
// Pruebas
console.table(plataforma1.planes);
