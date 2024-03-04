import { TestBed } from '@angular/core/testing';

import { CsrfProtectionService } from './csrf-protection.service';

describe('CsrfProtectionService', () => {
  let service: CsrfProtectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsrfProtectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
