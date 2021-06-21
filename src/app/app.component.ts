import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'AlquilerVehiculos';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Inicio' },
    { url: '/vehiculo', nombre: 'Vehiculos' },
    { url: '/usuario', nombre: 'Usuarios' },
    { url: '/alquiler', nombre: 'Alquiler' },
    { url: '/devolucion', nombre: 'Devolucion'}

  ];


}
