import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza46PComponent } from './pieza46-p.component';

describe('Pieza46PComponent', () => {
  let component: Pieza46PComponent;
  let fixture: ComponentFixture<Pieza46PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza46PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza46PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
