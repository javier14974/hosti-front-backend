import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDoctor } from './registrar-doctor';

describe('RegistrarDoctor', () => {
  let component: RegistrarDoctor;
  let fixture: ComponentFixture<RegistrarDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarDoctor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDoctor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
