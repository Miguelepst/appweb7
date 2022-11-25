import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza32PComponent } from './pieza32-p.component';

describe('Pieza32PComponent', () => {
  let component: Pieza32PComponent;
  let fixture: ComponentFixture<Pieza32PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza32PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza32PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
