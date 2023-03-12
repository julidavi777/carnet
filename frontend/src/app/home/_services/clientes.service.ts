import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  getCliente(id: string | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
