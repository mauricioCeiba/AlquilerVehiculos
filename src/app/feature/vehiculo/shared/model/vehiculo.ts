export class Vehiculo {
    id: number;
    placa: string;
    precioAlquilerPorDia: number;
    tipoVehiculo: string;


    constructor(id: number, placa: string, precioAlquilerPorDia: number, tipoVehiculo: string ) {
        this.id = id;
        this.placa = placa;
        this.precioAlquilerPorDia = precioAlquilerPorDia;
        this.tipoVehiculo = tipoVehiculo;
    }
}
