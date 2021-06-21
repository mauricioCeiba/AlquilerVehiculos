import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearDevolucionComponent } from './crear-devolucion.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DevolucionService } from '../../shared/service/devolucion.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearDevolucionComponent', () => {
  let component: CrearDevolucionComponent;
  let fixture: ComponentFixture<CrearDevolucionComponent>;
  let devolucionService: DevolucionService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDevolucionComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [DevolucionService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDevolucionComponent);
    component = fixture.componentInstance;
    devolucionService = TestBed.inject(DevolucionService);
    spyOn(devolucionService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.devolucionForm.valid).toBeFalsy();
  });

  it('Registrando devolucion', () => {
    expect(component.devolucionForm.valid).toBeFalsy();
    component.devolucionForm.controls.id.setValue('001');
    component.devolucionForm.controls.descripcion.setValue('Devolucion test');
    expect(component.devolucionForm.valid).toBeTruthy();

    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
