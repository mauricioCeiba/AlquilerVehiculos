import { by, element } from 'protractor';

export class UsuarioPage {
    private linkCrearUsuario = element(by.id('linkCrearUsuario'));
    private linkListarUsuarios = element(by.id('linkListarUsuario'));
    private inputNombreUsuario = element(by.id('nombreUsuario'));
    private inputCedulaUsuario = element(by.id('cedulaUsuario'));
    private listaUsuarios = element.all(by.css('tr.usuario td'));

    async clickBotonCrearUsuarios() {
        await this.linkCrearUsuario.click();
    }

    async clickBotonListarUsuarios() {
        await this.linkListarUsuarios.click();
    }

    async ingresarNombreUsuario(inputNombreUsuario) {
        await this.inputNombreUsuario.sendKeys(inputNombreUsuario);
    }

    async ingresarCedulaUsuario(inputCedulaUsuario) {
        await this.inputCedulaUsuario.sendKeys(inputCedulaUsuario);
    }

    async contarUsuarios() {
        return this.listaUsuarios.count();
    }
}
