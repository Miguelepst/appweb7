import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza23Pais1Component } from './pieza23-pais1.component';

describe('Pieza23Pais1Component', () => {
  let component: Pieza23Pais1Component;
  let fixture: ComponentFixture<Pieza23Pais1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza23Pais1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza23Pais1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
