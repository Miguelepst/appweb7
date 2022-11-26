import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza40PComponent } from './pieza40-p.component';

describe('Pieza40PComponent', () => {
  let component: Pieza40PComponent;
  let fixture: ComponentFixture<Pieza40PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza40PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza40PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
