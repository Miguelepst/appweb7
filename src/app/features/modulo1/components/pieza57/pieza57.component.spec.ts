import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza57Component } from './pieza57.component';

describe('Pieza57Component', () => {
  let component: Pieza57Component;
  let fixture: ComponentFixture<Pieza57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza57Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
