import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { BorrarDevolucionComponent } from './borrar-devolucion.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('BorrarDevolucionComponent', () => {
  let component: BorrarDevolucionComponent;
  let fixture: ComponentFixture<BorrarDevolucionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarDevolucionComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
