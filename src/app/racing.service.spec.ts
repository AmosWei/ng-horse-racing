import { TestBed } from '@angular/core/testing';

import { RacingService } from './racing.service';

describe('RacingService', () => {
  let service: RacingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
