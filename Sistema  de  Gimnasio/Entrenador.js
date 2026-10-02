class Entrenador {
    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
    }

    verInfo() {
        console.log("Nombre: " + this.nombre + " Especialidad:" + this.especialidad + " Tel: " + this.telefono)
    }
}
export default Entrenador;