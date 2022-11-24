import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza25PadreComponent } from './pieza25-padre.component';

describe('Pieza25PadreComponent', () => {
  let component: Pieza25PadreComponent;
  let fixture: ComponentFixture<Pieza25PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza25PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza25PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
