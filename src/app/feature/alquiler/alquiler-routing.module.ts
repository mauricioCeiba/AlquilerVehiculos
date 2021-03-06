import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { BorrarAlquilerComponent } from './components/borrar-alquiler/borrar-alquiler.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';


const routes: Routes = [
  {
    path: '',
    component: AlquilerComponent,
    children: [
      {
        path: 'crear',
        component: CrearAlquilerComponent
      },
      {
        path: 'listar',
        component: ListarAlquilerComponent
      },
      {
        path: 'borrar',
        component: BorrarAlquilerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerRoutingModule { }
