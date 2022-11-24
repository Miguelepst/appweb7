import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza26PadreComponent } from './pieza26-padre.component';

describe('Pieza26PadreComponent', () => {
  let component: Pieza26PadreComponent;
  let fixture: ComponentFixture<Pieza26PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza26PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza26PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
