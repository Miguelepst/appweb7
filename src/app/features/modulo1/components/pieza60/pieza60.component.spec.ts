import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza60Component } from './pieza60.component';

describe('Pieza60Component', () => {
  let component: Pieza60Component;
  let fixture: ComponentFixture<Pieza60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza60Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
