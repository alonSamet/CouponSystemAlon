import { TestBed, inject } from '@angular/core/testing';

import { AdminSpaService } from './admin-spa.service';

describe('AdminSpaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminSpaService]
    });
  });

  it('should be created', inject([AdminSpaService], (service: AdminSpaService) => {
    expect(service).toBeTruthy();
  }));
});
