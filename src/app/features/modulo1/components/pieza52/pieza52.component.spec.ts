import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza52Component } from './pieza52.component';

describe('Pieza52Component', () => {
  let component: Pieza52Component;
  let fixture: ComponentFixture<Pieza52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza52Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
