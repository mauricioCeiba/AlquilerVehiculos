import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearDevolucionComponent } from './components/crear-devolucion/crear-devolucion.component';
import { ListarDevolucionComponent } from './components/listar-devolucion/listar-devolucion.component';
import { BorrarDevolucionComponent } from './components/borrar-devolucion/borrar-devolucion.component';
import { DevolucionComponent } from './components/devolucion/devolucion.component';


const routes: Routes = [
  {
    path: '',
    component: DevolucionComponent,
    children: [
      {
        path: 'crear',
        component: CrearDevolucionComponent
      },
      {
        path: 'crear/:id',
        component: CrearDevolucionComponent
      },
      {
        path: 'listar',
        component: ListarDevolucionComponent
      },
      {
        path: 'borrar',
        component: BorrarDevolucionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevolucionRoutingModule { }
