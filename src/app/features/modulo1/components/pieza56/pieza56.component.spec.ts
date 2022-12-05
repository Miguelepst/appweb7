import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza56Component } from './pieza56.component';

describe('Pieza56Component', () => {
  let component: Pieza56Component;
  let fixture: ComponentFixture<Pieza56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza56Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
