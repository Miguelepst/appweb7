import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza45PComponent } from './pieza45-p.component';

describe('Pieza45PComponent', () => {
  let component: Pieza45PComponent;
  let fixture: ComponentFixture<Pieza45PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza45PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza45PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
