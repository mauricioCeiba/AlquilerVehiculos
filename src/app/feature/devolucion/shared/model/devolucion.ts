export class Devolucion {
    id: number;
    idAlquilerVehiculos: number;
    fechaEntrega: Date;
    porcentajeDeDano: number;
    valorPorMora: number;
    valorPorDanos: number;
    valorTotalAPagar: number;

    constructor(id: number,  idAlquilerVehiculos: number, fechaEntrega: Date,
                porcentajeDeDano: number, valorPorMora: number,  valorPorDanos: number, valorTotalAPagar: number) {
        this.id = id;
        this.idAlquilerVehiculos = idAlquilerVehiculos;
        this.fechaEntrega = fechaEntrega;
        this.porcentajeDeDano = porcentajeDeDano;
        this.valorPorMora = valorPorMora;
        this.valorPorDanos = valorPorDanos;
        this.valorTotalAPagar = valorTotalAPagar;
    }
}
