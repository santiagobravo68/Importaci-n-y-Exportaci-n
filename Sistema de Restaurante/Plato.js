class Plato {
    constructor(nombre, categoria, precio, disponible) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.disponible = disponible; // true o false
    }

    verInfo() {
        let estado = "Disponible";
        if (this.disponible === false) {
            estado = "Agotado";
        }
        console.log("Plato: " + this.nombre + " | Categoria: " + this.categoria + " | Precio: $" + this.precio + " | Estado: " + estado);
    }
}

export default Plato;