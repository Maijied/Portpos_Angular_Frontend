import { TestBed } from '@angular/core/testing';

import { BeforeLoginService } from './before-login.service';

describe('BeforeLoginService', () => {
  let service: BeforeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeforeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
