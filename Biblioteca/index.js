import Libros from "./libros.js";
import Prestamos from "./prestamos.js";
import Usuarios from "./usuarios.js";

let quijote = new Libros("El Quijote", "Norma", "Miguel de cervantes");
let maria = new Libros("La Maria", "Norma", "Jorge Isaac");

quijote.verLibro();
maria.verLibro();

let alexa = new Usuarios("Alexandra","Muñoz","111","123")
alexa.verinfo()

let prestamoQuijoteMaria = new Prestamos(alexa, "2/10/2026", "5/10/2026");
prestamoQuijoteMaria.registrarLibros(quijote)
prestamoQuijoteMaria.registrarLibros(maria)
prestamoQuijoteMaria.verlibros()

