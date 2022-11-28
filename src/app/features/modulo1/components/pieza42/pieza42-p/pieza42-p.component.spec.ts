import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza42PComponent } from './pieza42-p.component';

describe('Pieza42PComponent', () => {
  let component: Pieza42PComponent;
  let fixture: ComponentFixture<Pieza42PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza42PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza42PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
