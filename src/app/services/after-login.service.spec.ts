import { TestBed } from '@angular/core/testing';

import { AfterLoginService } from './after-login.service';

describe('AfterLoginService', () => {
  let service: AfterLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfterLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
