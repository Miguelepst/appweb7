import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieza34PComponent } from './pieza34-p.component';

describe('Pieza34PComponent', () => {
  let component: Pieza34PComponent;
  let fixture: ComponentFixture<Pieza34PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pieza34PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieza34PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
