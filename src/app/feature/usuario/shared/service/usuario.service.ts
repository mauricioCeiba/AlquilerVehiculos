import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";
import { Usuario } from "../model/usuario";

@Injectable()
export class UsuarioService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Usuario[]>(
      `${environment.baseUrl}/usuarios`,
      this.http.optsName("consultar usuarios")
    );
  }

  public guardar(usuario: Usuario) {
    return this.http.doPost<Usuario, boolean>(
      `${environment.baseUrl}/usuarios`,
      usuario,
      this.http.optsName("crear/actualizar usuario")
    );
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(
      `${environment.baseUrl}/usuarios/${id}`,
      this.http.optsName("eliminar usuario")
    );
  }
}
