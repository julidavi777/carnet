import { TestBed } from '@angular/core/testing';

import { ApuActivitiesService } from './apu-activities.service';

describe('ApuActivitiesService', () => {
  let service: ApuActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
