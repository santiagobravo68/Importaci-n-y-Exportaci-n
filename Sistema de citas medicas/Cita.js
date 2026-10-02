class Cita {
    constructor(fecha, hora, motivo, paciente, medico) {
        this.fecha = fecha;
        this.hora = hora;
        this.motivo = motivo;
        this.paciente = paciente;
        this.medico = medico;
    }

    verInfo() {
        console.log("================ DETALLE DE LA CITA MEDICA ================");
        console.log("Fecha: " + this.fecha + " | Hora: " + this.hora);
        console.log("Motivo: " + this.motivo);
        console.log("--- Datos del Paciente ---");
        console.log("Nombre: " + this.paciente.nombre + " | Doc: " + this.paciente.documento + " | Edad: " + this.paciente.edad + " | Tel: " + this.paciente.telefono);
        console.log("--- Datos del Medico ---");
        console.log("Nombre: " + this.medico.nombre + " | Especialidad: " + this.medico.especialidad + " | Tel: " + this.medico.telefono);
    }
}

export default Cita;