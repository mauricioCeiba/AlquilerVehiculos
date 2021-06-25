import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkVehiculo = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkUsuario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkAlquiler = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    async clickBotonUsuarios() {
        await this.linkUsuario.click();
    }

    async clickBotonVehiculos() {
      await this.linkVehiculo.click();
  }
  async clickBotonAlquilers() {
    await this.linkAlquiler.click();
}
}
