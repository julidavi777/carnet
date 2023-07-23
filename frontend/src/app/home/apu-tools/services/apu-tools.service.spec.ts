import { TestBed } from '@angular/core/testing';

import { ApuToolsService } from './apu-tools.service';

describe('ApuToolsService', () => {
  let service: ApuToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
