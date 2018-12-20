import { TestBed, inject } from '@angular/core/testing';

import { CompanySPAService } from './company-spa.service';

describe('CompanySPAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanySPAService]
    });
  });

  it('should be created', inject([CompanySPAService], (service: CompanySPAService) => {
    expect(service).toBeTruthy();
  }));
});
