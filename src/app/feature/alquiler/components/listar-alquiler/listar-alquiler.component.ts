import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { Alquiler } from '@alquiler/shared/model/alquiler';
import { Router } from '@angular/router';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { VehiculoService } from '@vehiculo/shared/service/vehiculo.service';


@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html',

})
export class ListarAlquilerComponent implements OnInit {
  public listaAlquileres: Observable<Alquiler[]>;


  constructor(protected alquilerService: AlquilerService,protected usuarioService: UsuarioService,protected vehiculoService: VehiculoService, protected router: Router) { }

  ngOnInit() {
    this.listaAlquileres = this.alquilerService.consultar();

  }

  public eliminar(id:number){

    this.alquilerService.eliminar(id).subscribe(
      () =>    this.listaAlquileres = this.alquilerService.consultar()
    )
  }
  public irACrearDevolucion(alquiler: Alquiler){

    this.router.navigate(['/devolucion/crear/'],{ queryParams: { id: alquiler.id ,
      vehiculosId: alquiler.vehiculosId,usuariosId: alquiler.usuariosId,cantidadDiasAlquiler: alquiler.cantidadDiasAlquiler,
      valorTotalParcial: alquiler.valorTotalParcial,fechaAlquiler: alquiler.fechaAlquiler } })
  }

}
