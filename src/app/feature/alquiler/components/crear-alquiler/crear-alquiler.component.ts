import { Component, OnInit } from '@angular/core';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '@usuario/shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { Observable } from 'rxjs';
import { VehiculoService } from '@vehiculo/shared/service/vehiculo.service';
import { Vehiculo } from '@vehiculo/shared/model/vehiculo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',

})
export class CrearAlquilerComponent implements OnInit {
  alquilerForm: FormGroup;
  public usuarios:Observable<Usuario[]>;
  public vehiculos:Observable<Vehiculo[]>;



  constructor(protected alquilerServices: AlquilerService,protected router: Router,
     protected usuarioService:UsuarioService, protected vehiculoService:VehiculoService) { }

  ngOnInit() {
    this.construirFormularioAlquiler();
    this.usuarios = this.usuarioService.consultar();
    this.vehiculos = this.vehiculoService.consultar();
  }

  cerar() {
    this.alquilerServices.guardar(this.alquilerForm.value).subscribe(
      () => this.router.navigateByUrl('/alquiler/listar')
    );
  }

  private construirFormularioAlquiler() {
    this.alquilerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      vehiculosId: new FormControl('', [Validators.required]),
      usuariosId: new FormControl('', [Validators.required]),
      cantidadDiasAlquiler: new FormControl('', [Validators.required]),
      valorTotalParcial: new FormControl('', [Validators.required]),
      fechaAlquiler: new FormControl('', [Validators.required]),


    });

  }

}
