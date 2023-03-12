import { TestBed } from '@angular/core/testing';

import { ClienteEditarService } from './cliente-editar.service';

describe('ClienteEditarService', () => {
  let service: ClienteEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
