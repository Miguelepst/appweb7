import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza1Component } from './pieza1.component';

describe('Pieza1Component', () => {
  let component: Pieza1Component;
  let fixture: ComponentFixture<Pieza1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
