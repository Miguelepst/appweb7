import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza48Component } from './pieza48.component';

describe('Pieza48Component', () => {
  let component: Pieza48Component;
  let fixture: ComponentFixture<Pieza48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza48Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
