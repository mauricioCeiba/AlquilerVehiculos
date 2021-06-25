import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarAlquilerComponent } from './listar-alquiler.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { Alquiler } from '../../shared/model/alquiler';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('ListarAlquilerComponent', () => {
  let component: ListarAlquilerComponent;
  let fixture: ComponentFixture<ListarAlquilerComponent>;
  let alquilerService: AlquilerService;
  const listaAlquilers: Alquiler[] = [
    new Alquiler("1", "1", "1", 2, 200000, new Date("2021-06-20")),
    new Alquiler("2", "2", "2", 2, 400000, new Date("2021-06-20")),
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAlquilerComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AlquilerService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    spyOn(alquilerService, 'consultar').and.returnValue(
      of(listaAlquilers)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaAlquileres.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
