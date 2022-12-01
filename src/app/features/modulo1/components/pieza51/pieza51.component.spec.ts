import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza51Component } from './pieza51.component';

describe('Pieza51Component', () => {
  let component: Pieza51Component;
  let fixture: ComponentFixture<Pieza51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza51Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
