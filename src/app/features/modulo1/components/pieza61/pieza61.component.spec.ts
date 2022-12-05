import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza61Component } from './pieza61.component';

describe('Pieza61Component', () => {
  let component: Pieza61Component;
  let fixture: ComponentFixture<Pieza61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza61Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
