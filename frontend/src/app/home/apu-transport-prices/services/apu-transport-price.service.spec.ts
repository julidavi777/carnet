import { TestBed } from '@angular/core/testing';

import { ApuTransportPriceService } from './apu-transport-price.service';

describe('ApuTransportPriceService', () => {
  let service: ApuTransportPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuTransportPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
