import Cliente from "./Cliente.js";
import Entrenador from "./Entrenador.js";
import Rutina from "./Rutina.js";

let entrenador1 = new Entrenador("Carlos Ruiz", "Hipertrofia / Fuerza", "3001234567");
let entrenador2 = new Entrenador("Laura Gómez", "Resistencia Cardio", "3159876543");

let rutinaHeavyDuty = new Rutina("Heavy Duty", "Ganancia muscular e intensidad", "45 min", entrenador1);
let rutinaCardio = new Rutina("Cardio HIIT", "Pérdida de grasa y resistencia", "30 min", entrenador2);


let cliente1 = new Cliente("Kevin Bravo", "1085123456", "3120001122", 20);
let cliente2 = new Cliente("Sofia Trujillo", "1085654321", "3140003344", 22);

cliente1.asignarRutina(rutinaHeavyDuty);
cliente1.asignarRutina(rutinaCardio);

cliente2.asignarRutina(rutinaCardio);

cliente1.verInfo();
cliente2.verInfo();
