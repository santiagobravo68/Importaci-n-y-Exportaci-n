import Paciente from "./Paciente.js";
import Medico from "./Medico.js";
import Cita from "./Cita.js";

let medico1 = new Medico("Dr. Carlos Perez", "12345678", "Medicina General", "3101112233");
let medico2 = new Medico("Dra. Sofia Lopez", "87654321", "Odtontologia", "3204445566");

let paciente1 = new Paciente("Kevin Bravo", "1085123456", 20, "3120001122");

let cita1 = new Cita("2/10/2026", "08:00 AM", "Control general", paciente1, medico1);
let cita2 = new Cita("15/10/2026", "02:30 PM", "Limpieza dental", paciente1, medico2);

cita1.verInfo();
cita2.verInfo();