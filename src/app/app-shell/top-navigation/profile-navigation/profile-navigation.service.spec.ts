import { TestBed } from '@angular/core/testing';

import { ProfileNavigationService } from './profile-navigation.service';

describe('ProfileNavigationService', () => {
  let service: ProfileNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
