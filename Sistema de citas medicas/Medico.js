class Medico {
    constructor(nombre, documento, especialidad, telefono) {
        this.nombre = nombre;
        this.documento = documento;
        this.especialidad = especialidad;
        this.telefono = telefono;
    }

    verInfo() {
        console.log("Medico: " + this.nombre + " | Doc: " + this.documento + " | Especialidad: " + this.especialidad + " | Tel: " + this.telefono);
    }
}

export default Medico;