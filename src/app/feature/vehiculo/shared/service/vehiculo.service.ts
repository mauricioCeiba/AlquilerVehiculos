import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";
import { Vehiculo } from "../model/vehiculo";

@Injectable()
export class VehiculoService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Vehiculo[]>(
      `${environment.baseUrl}/vehiculos`,
      this.http.optsName("consultar vehiculos")
    );
  }

  public guardar(vehiculo: Vehiculo) {
    return this.http.doPost<Vehiculo, boolean>(
      `${environment.baseUrl}/vehiculos`,
      vehiculo,
      this.http.optsName("crear/actualizar vehiculo")
    );
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(
      `${environment.baseUrl}/vehiculos/${id}`,
      this.http.optsName("eliminar vehiculos")
    );
  }
}
