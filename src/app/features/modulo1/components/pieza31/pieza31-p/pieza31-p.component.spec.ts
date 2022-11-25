import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza31PComponent } from './pieza31-p.component';

describe('Pieza31PComponent', () => {
  let component: Pieza31PComponent;
  let fixture: ComponentFixture<Pieza31PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza31PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza31PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
