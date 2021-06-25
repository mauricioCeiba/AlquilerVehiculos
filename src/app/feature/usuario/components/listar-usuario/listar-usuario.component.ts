import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { Usuario } from '@usuario/shared/model/usuario';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',

})
export class ListarUsuarioComponent implements OnInit {
  public listaUsuarios: Observable<Usuario[]>;

  constructor(protected usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listaUsuarios = this.usuarioService.consultar();
  }

  public eliminar(id: number){

    this.usuarioService.eliminar(id).subscribe(
      () =>    this.listaUsuarios = this.usuarioService.consultar()
    );
  }

}
