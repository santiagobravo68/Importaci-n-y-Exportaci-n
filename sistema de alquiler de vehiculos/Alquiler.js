class Alquiler {
    constructor(fechaInicio, fechaFin, cliente, vehiculo) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cliente = cliente;
        this.vehiculo = vehiculo;
    }

    verInfo() {
        console.log("================ DETALLE DEL ALQUILER ================");
        console.log("Fecha Inicio: " + this.fechaInicio + " | Fecha Fin: " + this.fechaFin);
        console.log("--- Datos del Cliente ---");
        console.log("Nombre: " + this.cliente.nombre + " | Doc: " + this.cliente.documento + " | Tel: " + this.cliente.telefono);
        console.log("--- Datos del Vehiculo ---");
        console.log("Placa: " + this.vehiculo.placa + " | Marca: " + this.vehiculo.marca + " | Modelo: " + this.vehiculo.modelo + " | Tipo: " + this.vehiculo.tipo);
    }
}

export default Alquiler;