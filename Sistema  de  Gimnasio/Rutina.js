class Rutina {
    constructor(nombre, objetivo, duracion, entrenador) {
        this.nombre = nombre;
        this.objetivo = objetivo;
        this.duracion = duracion;
        this.entrenador = entrenador;
    }

    verInfo() {
        console.log("Rutina:" + this.nombre + "| Objetivo:" + this.objetivo + "| Duracion:" + this.duracion + "| Entrenador:" +  this.entrenador.nombre)
    }
}

export default Rutina;