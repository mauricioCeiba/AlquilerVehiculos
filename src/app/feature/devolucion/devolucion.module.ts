import { NgModule } from '@angular/core';

import { DevolucionRoutingModule } from './devolucion-routing.module';
import { BorrarDevolucionComponent } from './components/borrar-devolucion/borrar-devolucion.component';
import { ListarDevolucionComponent } from './components/listar-devolucion/listar-devolucion.component';
import { CrearDevolucionComponent } from './components/crear-devolucion/crear-devolucion.component';
import { DevolucionComponent } from './components/devolucion/devolucion.component';
import { SharedModule } from '@shared/shared.module';
import { DevolucionService } from './shared/service/devolucion.service';


@NgModule({
  declarations: [
    CrearDevolucionComponent,
    ListarDevolucionComponent,
    BorrarDevolucionComponent,
    DevolucionComponent
  ],
  imports: [
    DevolucionRoutingModule,
    SharedModule
  ],
  providers: [DevolucionService]
})
export class DevolucionModule { }
