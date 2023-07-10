import { TestBed } from '@angular/core/testing';

import { ApuLaborPriceService } from './apu-labor-price.service';

describe('ApuLaborPriceService', () => {
  let service: ApuLaborPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuLaborPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
