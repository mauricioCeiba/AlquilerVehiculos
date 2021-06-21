import { NgModule } from '@angular/core';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { BorrarVehiculoComponent } from './components/borrar-vehiculo/borrar-vehiculo.component';
import { ListarVehiculoComponent } from './components/listar-vehiculo/listar-vehiculo.component';
import { CrearVehiculoComponent } from './components/crear-vehiculo/crear-vehiculo.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { SharedModule } from '@shared/shared.module';
import { VehiculoService } from './shared/service/vehiculo.service';


@NgModule({
  declarations: [
    CrearVehiculoComponent,
    ListarVehiculoComponent,
    BorrarVehiculoComponent,
    VehiculoComponent
  ],
  imports: [
    VehiculoRoutingModule,
    SharedModule
  ],
  providers: [VehiculoService]
})
export class VehiculoModule { }
