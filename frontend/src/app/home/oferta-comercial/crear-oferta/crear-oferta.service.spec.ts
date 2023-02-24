import { TestBed } from '@angular/core/testing';

import { CrearOfertaService } from './crear-oferta.service';

describe('CrearOfertaService', () => {
  let service: CrearOfertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearOfertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
