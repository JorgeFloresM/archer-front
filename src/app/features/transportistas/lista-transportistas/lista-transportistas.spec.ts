import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransportistas } from './lista-transportistas';

describe('ListaTransportistas', () => {
  let component: ListaTransportistas;
  let fixture: ComponentFixture<ListaTransportistas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTransportistas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTransportistas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
