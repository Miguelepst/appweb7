import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza50Component } from './pieza50.component';

describe('Pieza50Component', () => {
  let component: Pieza50Component;
  let fixture: ComponentFixture<Pieza50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza50Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
