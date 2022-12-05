import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza59Component } from './pieza59.component';

describe('Pieza59Component', () => {
  let component: Pieza59Component;
  let fixture: ComponentFixture<Pieza59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza59Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
