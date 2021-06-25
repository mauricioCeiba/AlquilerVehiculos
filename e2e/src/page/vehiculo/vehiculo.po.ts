import { by, element } from 'protractor';

export class VehiculoPage {
    private linkCrearVehiculo = element(by.id('linkCrearVehiculo'));
    private linkListarVehiculos = element(by.id('linkListarVehiculo'));
    private inputPlacaVehiculo = element(by.id('placa'));
    private inputPrecioAlquilerPorDia = element(by.id('precioAlquilerPorDia'));
    private inputTipoVehiculo = element(by.id('tipoVehiculo'));
    private listaVehiculos = element.all(by.css('tr.vehiculo td'));

    async clickBotonCrearVehiculos() {
        await this.linkCrearVehiculo.click();
    }

    async clickBotonListarVehiculos() {
        await this.linkListarVehiculos.click();
    }

    async ingresarPlacaVehiculo(inputPlacaVehiculo) {
        await this.inputPlacaVehiculo.sendKeys(inputPlacaVehiculo);
    }

    async ingresarPrecioAlquilerPorDiaVehiculo(inputPrecioAlquilerPorDia) {
        await this.inputPrecioAlquilerPorDia.sendKeys(inputPrecioAlquilerPorDia);
    }
    async ingresarTipoVehiculo(inputTipoVehiculo) {
      await this.inputTipoVehiculo.sendKeys(inputTipoVehiculo);
  }

    async contarVehiculos() {
        return this.listaVehiculos.count();
    }
}
