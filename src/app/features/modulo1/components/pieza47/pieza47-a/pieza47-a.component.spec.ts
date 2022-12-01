import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza47AComponent } from './pieza47-a.component';

describe('Pieza47AComponent', () => {
  let component: Pieza47AComponent;
  let fixture: ComponentFixture<Pieza47AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza47AComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza47AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
