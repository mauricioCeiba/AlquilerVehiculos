import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecurityGuard } from "@core/guard/security.guard";
import { HomeComponent } from "@home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [SecurityGuard] },
  {
    path: "vehiculo",
    loadChildren: () =>
      import("@vehiculo/vehiculo.module").then((mod) => mod.VehiculoModule),
  },
  {
    path: "usuario",
    loadChildren: () =>
      import("@usuario/usuario.module").then((mod) => mod.UsuarioModule),
  },
  {
    path: "alquiler",
    loadChildren: () =>
      import("@alquiler/alquiler.module").then((mod) => mod.AlquilerModule),
  },
  {
    path: "devolucion",
    loadChildren: () =>
      import("@devolucion/devolucion.module").then((mod) => mod.DevolucionModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
