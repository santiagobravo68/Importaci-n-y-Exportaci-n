class Paciente {
    constructor(nombre, documento, edad, telefono) {
        this.nombre = nombre;
        this.documento = documento;
        this.edad = edad;
        this.telefono = telefono;
    }

    verInfo() {
        console.log("Paciente: " + this.nombre + " | Documento: " + this.documento + " | Edad: " + this.edad + " | Tel: " + this.telefono);
    }
}

export default Paciente;