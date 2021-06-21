import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { VehiculoModule } from '@vehiculo/vehiculo.module';
import { UsuarioModule } from '@usuario/usuario.module';
import { AlquilerModule } from '@alquiler/alquiler.module';
import { DevolucionModule } from '@devolucion/devolucion.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    VehiculoModule,
    UsuarioModule,
    AlquilerModule,
    DevolucionModule,

  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
