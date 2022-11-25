import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza33PComponent } from './pieza33-p.component';

describe('Pieza33PComponent', () => {
  let component: Pieza33PComponent;
  let fixture: ComponentFixture<Pieza33PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza33PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza33PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
