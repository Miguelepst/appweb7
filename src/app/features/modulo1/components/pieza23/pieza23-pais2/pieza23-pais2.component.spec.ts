import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza23Pais2Component } from './pieza23-pais2.component';

describe('Pieza23Pais2Component', () => {
  let component: Pieza23Pais2Component;
  let fixture: ComponentFixture<Pieza23Pais2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza23Pais2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza23Pais2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
