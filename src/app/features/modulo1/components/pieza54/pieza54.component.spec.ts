import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza54Component } from './pieza54.component';

describe('Pieza54Component', () => {
  let component: Pieza54Component;
  let fixture: ComponentFixture<Pieza54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza54Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
