import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";
import { Alquiler } from "../model/alquiler";

@Injectable()
export class AlquilerService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Alquiler[]>(
      `${environment.baseUrl}/alquiler`,
      this.http.optsName("consultar alquileres")
    );
  }

  public guardar(producto: Alquiler) {
    return this.http.doPost<Alquiler, boolean>(
      `${environment.baseUrl}/alquiler`,
      producto,
      this.http.optsName("crear/actualizar alquiler")
    );
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(
      `${environment.baseUrl}/alquiler/${id}`,
      this.http.optsName("eliminar alquiler")
    );
  }

  public irADevolucion(id: number){
    return this.http.doGet<Alquiler>(
      `${environment.baseUrl}/alquiler/${id}`,
      this.http.optsName("ir a devolucion llevando alquiler")
    );
  }


}
