import { TestBed } from '@angular/core/testing';

import { ShowHistoryService } from './show-history.service';

describe('ShowHistoryService', () => {
  let service: ShowHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
