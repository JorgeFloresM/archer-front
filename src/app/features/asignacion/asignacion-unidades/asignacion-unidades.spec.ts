import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionUnidades } from './asignacion-unidades';

describe('AsignacionUnidades', () => {
  let component: AsignacionUnidades;
  let fixture: ComponentFixture<AsignacionUnidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionUnidades],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignacionUnidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
