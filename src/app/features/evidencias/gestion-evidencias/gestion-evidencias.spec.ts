import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEvidencias } from './gestion-evidencias';

describe('GestionEvidencias', () => {
  let component: GestionEvidencias;
  let fixture: ComponentFixture<GestionEvidencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEvidencias],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionEvidencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
