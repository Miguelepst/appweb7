import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza44PComponent } from './pieza44-p.component';

describe('Pieza44PComponent', () => {
  let component: Pieza44PComponent;
  let fixture: ComponentFixture<Pieza44PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza44PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza44PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
