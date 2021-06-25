import { Component, OnInit } from '@angular/core';
import { DevolucionService } from '../../shared/service/devolucion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';


@Component({
  selector: 'app-crear-devolucion',
  templateUrl: './crear-devolucion.component.html',

})
export class CrearDevolucionComponent implements OnInit {
  devolucionForm: FormGroup;
  constructor(protected devolucionServices: DevolucionService, protected alquilerService: AlquilerService,
              protected route: ActivatedRoute, protected router: Router) { }


  // datos del alquiler
  idAlquilerVehiculos: number;
  vehiculosId: number;
  usuariosId: number;
  cantidadDiasAlquiler: number;
  valorTotalParcial: number;
  fechaAlquiler: Date;
 // datos del alquiler

  ngOnInit() {
    this.construirFormularioDevolucion();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.idAlquilerVehiculos = params.id;
      this.vehiculosId = params.vehiculosId;
      this.usuariosId = params.usuariosId;
      this.cantidadDiasAlquiler = params.cantidadDiasAlquiler;
      this.valorTotalParcial = params.valorTotalParcial;
      this.fechaAlquiler = params.fechaAlquiler;


    }
  );

  }

  cerar() {
    const devolucion = this.devolucionForm.value;
    devolucion.idAlquilerVehiculos = this.idAlquilerVehiculos;
    this.devolucionServices.guardar(devolucion).subscribe(
      () => this.router.navigateByUrl('/devolucion/listar')
    );
  }

  private construirFormularioDevolucion() {
    this.devolucionForm = new FormGroup({

      fechaEntrega: new FormControl('', [Validators.required]),
      porcentajeDeDano: new FormControl('', [Validators.required])
    });
  }

}
