import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlquilerService } from './alquiler.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Alquiler } from '../model/alquiler';
import { HttpResponse } from '@angular/common/http';

fdescribe('AlquilerService', () => {
  let httpMock: HttpTestingController;
  let service: AlquilerService;
  const apiEndpointAlquilerConsulta = `${environment.baseUrl}/alquiler`;
  const apiEndpointAlquilers = `${environment.baseUrl}/alquiler`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlquilerService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AlquilerService);
  });

  it('deberia crear', () => {
    const productService: AlquilerService = TestBed.inject(AlquilerService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar alquilers', () => {
    const dummyAlquilers = [
      new Alquiler('1', '1', '1', 2, 200000, new Date("2021-06-20")), new Alquiler('2', '2', '2', 2, 400000, new Date("2021-06-20"))
    ];
    service.consultar().subscribe(alquilers => {
      expect(alquilers.length).toBe(2);
      expect(alquilers).toEqual(dummyAlquilers);
    });
    const req = httpMock.expectOne(apiEndpointAlquilerConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAlquilers);
  });

  it('deberia crear un alquiler', () => {
    const dummyAlquiler = new Alquiler('1', '1', '1', 2, 200000, new Date("2021-06-20"));
    service.guardar(dummyAlquiler).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointAlquilers);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un alquiler', () => {
    // const dummyAlquiler = new Alquiler('1', 'Alquiler 1');
    service.eliminar(1).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointAlquilers}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
