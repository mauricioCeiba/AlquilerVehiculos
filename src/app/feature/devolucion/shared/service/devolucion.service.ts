import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";
import { Devolucion } from "../model/devolucion";

@Injectable()
export class DevolucionService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Devolucion[]>(
      `${environment.baseUrl}/devoluciones`,
      this.http.optsName("consultar devoluciones")
    );
  }

  public guardar(devolucion: Devolucion) {
    return this.http.doPost<Devolucion, boolean>(
      `${environment.baseUrl}/devoluciones`,
      devolucion,
      this.http.optsName("crear/actualizar devoluciones")
    );
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(
      `${environment.baseUrl}/devoluciones/${id}`,
      this.http.optsName("eliminar devoluciones")
    );
  }
}
