import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza36PComponent } from './pieza36-p.component';

describe('Pieza36PComponent', () => {
  let component: Pieza36PComponent;
  let fixture: ComponentFixture<Pieza36PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza36PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza36PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
