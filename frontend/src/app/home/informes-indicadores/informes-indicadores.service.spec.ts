import { TestBed } from '@angular/core/testing';

import { InformesIndicadoresService } from './informes-indicadores.service';

describe('InformesIndicadoresService', () => {
  let service: InformesIndicadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformesIndicadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
