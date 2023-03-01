import { TestBed } from '@angular/core/testing';

import { VerClienteService } from './ver-cliente.service';

describe('VerClienteService', () => {
  let service: VerClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
