import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza63Component } from './pieza63.component';

describe('Pieza63Component', () => {
  let component: Pieza63Component;
  let fixture: ComponentFixture<Pieza63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza63Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
