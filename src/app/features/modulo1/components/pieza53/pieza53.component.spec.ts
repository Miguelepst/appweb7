import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza53Component } from './pieza53.component';

describe('Pieza53Component', () => {
  let component: Pieza53Component;
  let fixture: ComponentFixture<Pieza53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza53Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
