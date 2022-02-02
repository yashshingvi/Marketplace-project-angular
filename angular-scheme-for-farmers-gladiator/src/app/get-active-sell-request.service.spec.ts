import { TestBed } from '@angular/core/testing';

import { GetActiveSellRequestService } from './get-active-sell-request.service';

describe('GetActiveSellRequestService', () => {
  let service: GetActiveSellRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetActiveSellRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
