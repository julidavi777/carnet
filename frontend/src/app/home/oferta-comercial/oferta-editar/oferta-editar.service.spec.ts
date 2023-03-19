import { TestBed } from '@angular/core/testing';

import { OfertaEditarService } from './oferta-editar.service';

describe('OfertaEditarService', () => {
  let service: OfertaEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
