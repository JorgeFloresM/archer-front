import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteServicio } from './reporte-servicio';

describe('ReporteServicio', () => {
  let component: ReporteServicio;
  let fixture: ComponentFixture<ReporteServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteServicio],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteServicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
