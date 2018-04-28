import { TestBed, inject } from '@angular/core/testing';

import { SummonersService } from './summoners.service';

describe('SummonersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummonersService]
    });
  });

  it('should be created', inject([SummonersService], (service: SummonersService) => {
    expect(service).toBeTruthy();
  }));
});
