import Vehiculo from "./Vehiculo.js";
import Cliente from "./Cliente.js";
import Alquiler from "./Alquiler.js";

let vehiculo1 = new Vehiculo("KBC123", "Toyota", 2024, "Camioneta");
let vehiculo2 = new Vehiculo("XYZ987", "Chevrolet", 2022, "Automovil");

let cliente1 = new Cliente("Kevin Bravo", "1085123456", "3120001122");

let alquiler1 = new Alquiler("2/10/2026", "10/10/2026", cliente1, vehiculo1);
let alquiler2 = new Alquiler("15/10/2026", "20/10/2026", cliente1, vehiculo2);

alquiler1.verInfo();
alquiler2.verInfo();