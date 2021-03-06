import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VehiculoService } from '@vehiculo/shared/service/vehiculo.service';
import { Vehiculo } from '@vehiculo/shared/model/vehiculo';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',

})
export class ListarVehiculoComponent implements OnInit {
  public listaVehiculos: Observable<Vehiculo[]>;
  errorMessage = "";
  constructor(protected vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.listaVehiculos = this.vehiculoService.consultar();
  }

  public eliminar(id: number){

    this.vehiculoService.eliminar(id).subscribe(
      () =>    this.listaVehiculos = this.vehiculoService.consultar(), error => this.errorMessage = error
    );
  }

}
