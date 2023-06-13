import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguimientosFormService {

  readonly probabilities = [
    {
      id: 1,
      name: 'Probabilidad Alta'
    },
    {
      id: 2,
      name: 'Probabilidad Media'
    },
    {
      id: 3,
      name: 'Probabilidad Baja'
    },
  ];

  constructor() { }
}
