import { TestBed } from '@angular/core/testing';

import { GettingStartedService } from './getting-started.service';

describe('GettingStartedService', () => {
  let service: GettingStartedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingStartedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
