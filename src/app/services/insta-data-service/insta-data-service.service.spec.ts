import { TestBed } from '@angular/core/testing';

import { InstaDataServiceService } from './insta-data-service.service';

describe('InstaDataServiceService', () => {
  let service: InstaDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
