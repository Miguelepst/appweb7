import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza45HComponent } from './pieza45-h.component';

describe('Pieza45HComponent', () => {
  let component: Pieza45HComponent;
  let fixture: ComponentFixture<Pieza45HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza45HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza45HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
