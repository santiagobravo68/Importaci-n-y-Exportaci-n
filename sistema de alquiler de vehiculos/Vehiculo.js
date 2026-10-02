class Vehiculo {
    constructor(placa, marca, modelo, tipo) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
    }

    verInfo() {
        console.log("Vehiculo Placa: " + this.placa + " | Marca: " + this.marca + " | Modelo: " + this.modelo + " | Tipo: " + this.tipo);
    }
}

export default Vehiculo;