class Cliente {
    constructor(nombre, documento, telefono, edad) {
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.edad = edad;
        this.rutinas = [];
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina);
        console.log("Rutina " + rutina.nombre + " asignada con exito a " + this.nombre);
    }

    verInfo() {
        console.log("Nombre: " + this.nombre + " | Documento: " + this.documento + " | Edad: " + this.edad + " | Tel: " + this.telefono);
        console.log("--- Rutinas Asignadas ---");
        
        if (this.rutinas.length === 0) {
            console.log("El cliente no tiene rutinas asignadas.");
        } else {
            for (let i = 0; i < this.rutinas.length; i++) {
                this.rutinas[i].verInfo();
            }
        }
    }
}

export default Cliente;