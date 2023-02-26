import { TestBed } from '@angular/core/testing';

import { OfertaComercialService } from './oferta-comercial.service';

describe('OfertaComercialService', () => {
  let service: OfertaComercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaComercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
