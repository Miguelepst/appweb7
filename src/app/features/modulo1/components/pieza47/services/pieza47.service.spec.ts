import { TestBed } from '@angular/core/testing';

import { Pieza47Service } from './pieza47.service';

describe('Pieza47Service', () => {
  let service: Pieza47Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pieza47Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
