import { TestBed, inject } from '@angular/core/testing';

import { GetApplicationDataService } from './get-application-data.service';

describe('GetApplicationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetApplicationDataService]
    });
  });

  it('should be created', inject([GetApplicationDataService], (service: GetApplicationDataService) => {
    expect(service).toBeTruthy();
  }));
});
