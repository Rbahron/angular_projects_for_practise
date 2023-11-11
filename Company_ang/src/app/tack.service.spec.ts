import { TestBed } from '@angular/core/testing';

import { TackService } from './tack.service';

describe('TackService', () => {
  let service: TackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
