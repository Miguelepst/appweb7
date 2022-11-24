import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza28PadreComponent } from './pieza28-padre.component';

describe('Pieza28PadreComponent', () => {
  let component: Pieza28PadreComponent;
  let fixture: ComponentFixture<Pieza28PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza28PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza28PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
