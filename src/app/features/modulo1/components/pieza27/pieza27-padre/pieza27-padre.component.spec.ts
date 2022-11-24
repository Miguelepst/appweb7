import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza27PadreComponent } from './pieza27-padre.component';

describe('Pieza27PadreComponent', () => {
  let component: Pieza27PadreComponent;
  let fixture: ComponentFixture<Pieza27PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza27PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza27PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
