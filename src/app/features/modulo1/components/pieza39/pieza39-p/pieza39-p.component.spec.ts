import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza39PComponent } from './pieza39-p.component';

describe('Pieza39PComponent', () => {
  let component: Pieza39PComponent;
  let fixture: ComponentFixture<Pieza39PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza39PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza39PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
