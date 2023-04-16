import { TestBed } from '@angular/core/testing';

import { PdfEstadisticasService } from './pdf-estadisticas.service';

describe('PdfEstadisticasService', () => {
  let service: PdfEstadisticasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfEstadisticasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
