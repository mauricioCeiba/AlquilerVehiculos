import { NgModule } from '@angular/core';

import { AlquilerRoutingModule } from './alquiler-routing.module';
import { BorrarAlquilerComponent } from './components/borrar-alquiler/borrar-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { SharedModule } from '@shared/shared.module';
import { AlquilerService } from './shared/service/alquiler.service';
import { CoreModule } from '@core/core.module';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { VehiculoService } from '@vehiculo/shared/service/vehiculo.service';



@NgModule({
  declarations: [
    CrearAlquilerComponent,
    ListarAlquilerComponent,
    BorrarAlquilerComponent,
    AlquilerComponent,
  ],
  imports: [
    AlquilerRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [AlquilerService, UsuarioService, VehiculoService]
})
export class AlquilerModule { }
