import { TestBed } from '@angular/core/testing';

import { GestionarProyectosService } from './gestionar-proyectos.service';

describe('GestionarProyectosService', () => {
  let service: GestionarProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
