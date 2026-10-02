class Cliente {
    constructor(nombre, documento, telefono) {
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
    }

    verInfo() {
        console.log("Cliente: " + this.nombre + " | Documento: " + this.documento + " | Tel: " + this.telefono);
    }
}

export default Cliente;