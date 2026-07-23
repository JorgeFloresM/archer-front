import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroServicio } from './registro-servicio';

describe('RegistroServicio', () => {
  let component: RegistroServicio;
  let fixture: ComponentFixture<RegistroServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroServicio],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroServicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
