import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DevolucionService } from '../../shared/service/devolucion.service';
import { Devolucion } from '../../shared/model/devolucion';


@Component({
  selector: 'app-listar-devolucion',
  templateUrl: './listar-devolucion.component.html',

})
export class ListarDevolucionComponent implements OnInit {
  public listaDevoluciones: Observable<Devolucion[]>;

  constructor(protected devolucionService: DevolucionService) { }

  ngOnInit() {
    this.listaDevoluciones = this.devolucionService.consultar();
  }

  public eliminar(id: number){

    this.devolucionService.eliminar(id).subscribe(
      () =>    this.listaDevoluciones = this.devolucionService.consultar()
    );
  }

}
