import Plato from "./Plato.js";
import Cliente from "./Cliente.js";
import Pedido from "./Pedido.js";

let plato1 = new Plato("Bandeja Paisa", "Plato Fuerte", 28000, true);
let plato2 = new Plato("Limonada de Coco", "Bebidas", 8000, true);
let plato3 = new Plato("Sancocho", "Sopas", 22000, true);

let cliente1 = new Cliente("Kevin Bravo", "1085123456", "3120001122");

let pedido1 = new Pedido(101, "2/10/2026", cliente1);
let pedido2 = new Pedido(102, "2/10/2026", cliente1);

pedido1.agregarPlato(plato1);
pedido1.agregarPlato(plato2);

pedido2.agregarPlato(plato2);
pedido2.agregarPlato(plato3);

pedido1.verInfo();
pedido2.verInfo();