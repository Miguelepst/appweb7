import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza38PComponent } from './pieza38-p.component';

describe('Pieza38PComponent', () => {
  let component: Pieza38PComponent;
  let fixture: ComponentFixture<Pieza38PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza38PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza38PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
