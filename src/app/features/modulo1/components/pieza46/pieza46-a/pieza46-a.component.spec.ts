import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza46AComponent } from './pieza46-a.component';

describe('Pieza46AComponent', () => {
  let component: Pieza46AComponent;
  let fixture: ComponentFixture<Pieza46AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza46AComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza46AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
