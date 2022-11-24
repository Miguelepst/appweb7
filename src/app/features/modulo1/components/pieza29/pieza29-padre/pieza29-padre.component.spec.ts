import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza29PadreComponent } from './pieza29-padre.component';

describe('Pieza29PadreComponent', () => {
  let component: Pieza29PadreComponent;
  let fixture: ComponentFixture<Pieza29PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza29PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza29PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
