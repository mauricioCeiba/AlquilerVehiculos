import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarDevolucionComponent } from './listar-devolucion.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DevolucionService } from '../../shared/service/devolucion.service';
import { Devolucion } from '../../shared/model/devolucion';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarDevolucionComponent', () => {
  let component: ListarDevolucionComponent;
  let fixture: ComponentFixture<ListarDevolucionComponent>;
  let devolucionService: DevolucionService;
  const listaDevolucions: Devolucion[] = [
    new Devolucion(1, 1, new Date("2021-06-22"), 0, 0, 0, 200000),
    new Devolucion(2, 2, new Date("2021-06-22"), 0, 0, 0, 800000),
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDevolucionComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [DevolucionService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDevolucionComponent);
    component = fixture.componentInstance;
    devolucionService = TestBed.inject(DevolucionService);
    spyOn(devolucionService, "consultar").and.returnValue(of(listaDevolucions));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.listaDevoluciones.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });

});
