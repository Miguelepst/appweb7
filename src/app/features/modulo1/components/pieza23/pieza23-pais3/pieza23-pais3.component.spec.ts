import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza23Pais3Component } from './pieza23-pais3.component';

describe('Pieza23Pais3Component', () => {
  let component: Pieza23Pais3Component;
  let fixture: ComponentFixture<Pieza23Pais3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza23Pais3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza23Pais3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
