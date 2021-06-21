import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',

})
export class CrearVehiculoComponent implements OnInit {
  vehiculoForm: FormGroup;
  constructor(protected vehiculoServices: VehiculoService, protected router: Router) { }

  ngOnInit() {
    this.construirFormularioVehiculo();
  }

  cerar() {
    this.vehiculoServices.guardar(this.vehiculoForm.value).subscribe(
      () => this.router.navigateByUrl('/vehiculo/listar')
    );
  }

  private construirFormularioVehiculo() {
    this.vehiculoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      placa: new FormControl('', [Validators.required]),
      precioAlquilerPorDia: new FormControl('', [Validators.required]),
      tipoVehiculo: new FormControl('', [Validators.required]),
    });
  }

}
