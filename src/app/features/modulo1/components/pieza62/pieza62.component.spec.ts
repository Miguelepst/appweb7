import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza62Component } from './pieza62.component';

describe('Pieza62Component', () => {
  let component: Pieza62Component;
  let fixture: ComponentFixture<Pieza62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza62Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
