import { TestBed } from '@angular/core/testing';

import { ViewDetailsServiceService } from './view-details-service.service';

describe('ViewDetailsServiceService', () => {
  let service: ViewDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
