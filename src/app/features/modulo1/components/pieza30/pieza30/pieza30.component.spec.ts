import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza30Component } from './pieza30.component';

describe('Pieza30Component', () => {
  let component: Pieza30Component;
  let fixture: ComponentFixture<Pieza30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
