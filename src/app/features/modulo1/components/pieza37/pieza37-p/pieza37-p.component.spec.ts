import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza37PComponent } from './pieza37-p.component';

describe('Pieza37PComponent', () => {
  let component: Pieza37PComponent;
  let fixture: ComponentFixture<Pieza37PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza37PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza37PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
