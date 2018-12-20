import { TestBed, inject } from '@angular/core/testing';

import { CustomerSpaService } from './customer-spa.service';

describe('CustomerSpaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerSpaService]
    });
  });

  it('should be created', inject([CustomerSpaService], (service: CustomerSpaService) => {
    expect(service).toBeTruthy();
  }));
});
