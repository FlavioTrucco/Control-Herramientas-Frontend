import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarHerramientaComponent } from './actualizar-herramienta.component';

describe('ActualizarHerramientaComponent', () => {
  let component: ActualizarHerramientaComponent;
  let fixture: ComponentFixture<ActualizarHerramientaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarHerramientaComponent]
    });
    fixture = TestBed.createComponent(ActualizarHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
