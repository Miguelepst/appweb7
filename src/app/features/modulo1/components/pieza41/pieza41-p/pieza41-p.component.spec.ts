import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza41PComponent } from './pieza41-p.component';

describe('Pieza41PComponent', () => {
  let component: Pieza41PComponent;
  let fixture: ComponentFixture<Pieza41PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza41PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza41PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
