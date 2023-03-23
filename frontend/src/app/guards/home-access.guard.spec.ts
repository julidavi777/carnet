import { TestBed } from '@angular/core/testing';

import { HomeAccessGuard } from './home-access.guard';

describe('HomeAccessGuard', () => {
  let guard: HomeAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
