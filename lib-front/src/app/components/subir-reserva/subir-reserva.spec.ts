import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirReserva } from './subir-reserva';

describe('SubirReserva', () => {
  let component: SubirReserva;
  let fixture: ComponentFixture<SubirReserva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirReserva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirReserva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
