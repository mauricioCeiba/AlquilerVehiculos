
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { UsuarioPage } from '../page/usuario/usuario.po';
import { VehiculoPage } from '../page/vehiculo/vehiculo.po';
import { AlquilerPage } from '../page/alquiler/alquiler.po';

describe('workspace-project AlquilerVehiculo', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let usuario: UsuarioPage;
    let vehiculo: VehiculoPage;
    let alquiler: AlquilerPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        usuario = new UsuarioPage();
        vehiculo = new VehiculoPage();
        alquiler = new AlquilerPage();
    });

    it('Deberia crear usuario', () => {
        const NOMBRE_USUARIO = 'Mauricio prueba';
        const CEDULA_USUARIO = '1094894326';



        page.navigateTo();
        navBar.clickBotonUsuarios();
        usuario.clickBotonCrearUsuarios();
        usuario.ingresarNombreUsuario(NOMBRE_USUARIO);
        usuario.ingresarCedulaUsuario(CEDULA_USUARIO);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar usuarios', () => {
        page.navigateTo();
        navBar.clickBotonUsuarios();
        usuario.clickBotonListarUsuarios();

        expect(4).toBe(usuario.contarUsuarios());
    });

    it('Deberia crear vehiculos', () => {
      const PLACA_VEHICULO = 'ICX123';
      const PRECIO_ALQUILER_VEHICULO = 100000;
      const TIPO_VEHICULO = 'CARRO';


      page.navigateTo();
      navBar.clickBotonVehiculos();
      vehiculo.clickBotonCrearVehiculos;
      vehiculo.ingresarPlacaVehiculo(PLACA_VEHICULO);
      vehiculo.ingresarPrecioAlquilerPorDiaVehiculo(PRECIO_ALQUILER_VEHICULO);
      vehiculo.ingresarTipoVehiculo(TIPO_VEHICULO);

      // Adicionamos las validaciones despues de la creación
      // expect(<>).toEqual(<>);
  });

    it('Deberia listar vehiculos', () => {
      page.navigateTo();
      navBar.clickBotonVehiculos;
      vehiculo.clickBotonListarVehiculos;

      expect(5).toBe(vehiculo.contarVehiculos());
  });


    it('Deberia crear alquilers', () => {
    const VEHICULO_ID = '1';
    const USUARIO_ID = '1';
    const CANTIDAD_DIAS_ALQUILER = 2;
    const FECHA_ALQUILER = '2021-06-06';



    page.navigateTo();
    navBar.clickBotonAlquilers;
    alquiler.clickBotonCrearAlquilers();

    alquiler.ingresarVehiculosId(VEHICULO_ID);
    alquiler.ingresarUsuariosId(USUARIO_ID);
    alquiler.ingresarCantidadDiasAlquiler(CANTIDAD_DIAS_ALQUILER);
    alquiler.ingresarFechaAlquiler(FECHA_ALQUILER);

    // Adicionamos las validaciones despues de la creación
    // expect(<>).toEqual(<>);
});

    it('Deberia listar los alquileres', () => {
    page.navigateTo();
    navBar.clickBotonAlquilers();
    alquiler.clickBotonListarAlquilers();

    expect(7).toBe(alquiler.contarAlquilers());
});

});
