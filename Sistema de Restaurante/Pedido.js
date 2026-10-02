class Pedido {
    constructor(numeroPedido, fecha, cliente) {
        this.numeroPedido = numeroPedido;
        this.fecha = fecha;
        this.cliente = cliente;
        this.platos = [];
    }

    agregarPlato(plato) {
        if (plato.disponible) {
            this.platos.push(plato);
            console.log("Plato '" + plato.nombre + "' agregado al pedido #" + this.numeroPedido);
        } else {
            console.log("El plato '" + plato.nombre + "' no esta disponible.");
        }
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.platos.length; i++) {
            total = total + this.platos[i].precio;
        }
        return total;
    }

    verInfo() {
        console.log("================ PEDIDO #" + this.numeroPedido + " ================");
        console.log("Fecha: " + this.fecha);
        console.log("Cliente: " + this.cliente.nombre + " | Doc: " + this.cliente.documento);
        console.log("--- Platos Solicitados (" + this.platos.length + ") ---");
        
        if (this.platos.length === 0) {
            console.log("No hay platos asignados a este pedido.");
        } else {
            for (let i = 0; i < this.platos.length; i++) {
                this.platos[i].verInfo();
            }
        }
        console.log("TOTAL A PAGAR: $" + this.calcularTotal());
    }
}

export default Pedido;