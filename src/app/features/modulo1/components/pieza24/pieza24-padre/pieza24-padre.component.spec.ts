import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza24PadreComponent } from './pieza24-padre.component';

describe('Pieza24PadreComponent', () => {
  let component: Pieza24PadreComponent;
  let fixture: ComponentFixture<Pieza24PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza24PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza24PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
