import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DevolucionService } from './devolucion.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Devolucion } from '../model/devolucion';
import { HttpResponse } from '@angular/common/http';

fdescribe('DevolucionService', () => {
  let httpMock: HttpTestingController;
  let service: DevolucionService;
  const apiEndpointDevolucionConsulta = `${environment.baseUrl}/devoluciones`;
  const apiEndpointDevolucions = `${environment.baseUrl}/devoluciones`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DevolucionService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(DevolucionService);
  });

  it("should be created", () => {
    const productService: DevolucionService = TestBed.inject(DevolucionService);
    expect(productService).toBeTruthy();
  });

  it("deberia listar devoluciones", () => {
    const dummyDevolucions = [
      new Devolucion(1, 1, new Date("2021-06-22"), 0, 0, 0, 200000),
      new Devolucion(2, 2, new Date("2021-06-22"), 0, 0, 0, 200000),
    ];
    service.consultar().subscribe((devolucions) => {
      expect(devolucions.length).toBe(2);
      expect(devolucions).toEqual(dummyDevolucions);
    });
    const req = httpMock.expectOne(apiEndpointDevolucionConsulta);
    expect(req.request.method).toBe("GET");
    req.flush(dummyDevolucions);
  });

  it("deberia crear un devolucion", () => {
    const dummyDevolucion = new Devolucion(3, 1, new Date("2021-06-22"), 0, 0, 0, 200000);
    service.guardar(dummyDevolucion).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointDevolucions);
    expect(req.request.method).toBe("POST");
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it("deberia eliminar un devolucion", () => {
    new Devolucion(1, 1, new Date("2021-06-22"), 0, 0, 0, 200000);
    service.eliminar(1).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointDevolucions}/1`);
    expect(req.request.method).toBe("DELETE");
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
