import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaliaAnidado1Component } from './italia-anidado1.component';

describe('ItaliaAnidado1Component', () => {
  let component: ItaliaAnidado1Component;
  let fixture: ComponentFixture<ItaliaAnidado1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItaliaAnidado1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItaliaAnidado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
