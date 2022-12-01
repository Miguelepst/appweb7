import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza49Component } from './pieza49.component';

describe('Pieza49Component', () => {
  let component: Pieza49Component;
  let fixture: ComponentFixture<Pieza49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza49Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
