import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza35PComponent } from './pieza35-p.component';

describe('Pieza35PComponent', () => {
  let component: Pieza35PComponent;
  let fixture: ComponentFixture<Pieza35PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza35PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza35PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
