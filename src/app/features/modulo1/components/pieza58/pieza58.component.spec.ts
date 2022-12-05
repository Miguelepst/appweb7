import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza58Component } from './pieza58.component';

describe('Pieza58Component', () => {
  let component: Pieza58Component;
  let fixture: ComponentFixture<Pieza58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza58Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
