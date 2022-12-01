import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza47PComponent } from './pieza47-p.component';

describe('Pieza47PComponent', () => {
  let component: Pieza47PComponent;
  let fixture: ComponentFixture<Pieza47PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza47PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza47PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
