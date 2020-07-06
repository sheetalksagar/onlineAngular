import { TestBed } from '@angular/core/testing';

import { SuperAuthService } from './super-auth.service';

describe('SuperAuthService', () => {
  let service: SuperAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
