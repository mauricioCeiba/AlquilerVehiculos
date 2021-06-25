import { by, element } from 'protractor';

export class AlquilerPage {
    private linkCrearAlquiler = element(by.id('linkCrearAlquiler'));
    private linkListarAlquilers = element(by.id('linkListarAlquiler'));
    private inputVehiculosId = element(by.id('vehiculosId'));
    private inputUsuariosId = element(by.id('usuariosId'));
    private inputCantidadDiasAlquiler = element(by.id('cantidadDiasAlquiler'));
    private inputFechaAlquiler = element(by.id('fechaAlquiler'));
    private listaAlquilers = element.all(by.css('tr.alquiler td'));

    async clickBotonCrearAlquilers() {
        await this.linkCrearAlquiler.click();
    }

    async clickBotonListarAlquilers() {
        await this.linkListarAlquilers.click();
    }

    async ingresarVehiculosId(inputVehiculosId) {
        await this.inputVehiculosId.sendKeys(inputVehiculosId);
    }

    async ingresarUsuariosId(inputUsuariosId) {
        await this.inputUsuariosId.sendKeys(inputUsuariosId);
    }

    async ingresarCantidadDiasAlquiler(inputCantidadDiasAlquiler) {
      await this.inputCantidadDiasAlquiler.sendKeys(inputCantidadDiasAlquiler);
  }
 async ingresarFechaAlquiler(inputFechaAlquiler) {
        await this.inputFechaAlquiler.sendKeys(inputFechaAlquiler);
    }

    async contarAlquilers() {
        return this.listaAlquilers.count();
    }
}
