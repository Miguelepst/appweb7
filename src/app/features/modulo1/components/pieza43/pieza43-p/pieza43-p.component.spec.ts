import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza43PComponent } from './pieza43-p.component';

describe('Pieza43PComponent', () => {
  let component: Pieza43PComponent;
  let fixture: ComponentFixture<Pieza43PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza43PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza43PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
