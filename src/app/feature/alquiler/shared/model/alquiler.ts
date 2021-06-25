export class Alquiler {
  id: string;
  vehiculosId: string;
  usuariosId: string;
  cantidadDiasAlquiler: number;
  valorTotalParcial: number;
  fechaAlquiler: Date;

  constructor(
    id: string,
    vehiculosId: string,
    usuariosId: string,
    cantidadDiasAlquiler: number,
    valorTotalParcial: number,
    fechaAlquiler: Date
  ) {
    this.id = id;
    this.vehiculosId = vehiculosId;
    this.usuariosId = usuariosId;
    this.cantidadDiasAlquiler = cantidadDiasAlquiler;
    this.valorTotalParcial = valorTotalParcial;
    this.fechaAlquiler = fechaAlquiler;
  }
}
