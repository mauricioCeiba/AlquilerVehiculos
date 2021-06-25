import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',

})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  constructor(protected usuarioServices: UsuarioService, protected router: Router) { }

  ngOnInit() {
    this.construirFormularioUsuario();
  }

  cerar() {
    this.usuarioServices.guardar(this.usuarioForm.value).subscribe(
      () => this.router.navigateByUrl('/usuario/listar')
    );
  }

  private construirFormularioUsuario() {
    this.usuarioForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
    });
  }

}
