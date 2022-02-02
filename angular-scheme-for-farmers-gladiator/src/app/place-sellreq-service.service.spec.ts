import { TestBed } from '@angular/core/testing';

import { PlaceSellreqServiceService } from './place-sellreq-service.service';

describe('PlaceSellreqServiceService', () => {
  let service: PlaceSellreqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceSellreqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
