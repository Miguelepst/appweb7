import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza55Component } from './pieza55.component';

describe('Pieza55Component', () => {
  let component: Pieza55Component;
  let fixture: ComponentFixture<Pieza55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza55Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
