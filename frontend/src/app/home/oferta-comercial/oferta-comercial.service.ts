import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfertaComercialService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,

  ) { }

  getOfertas(queryParams: string = ""){
    return this.http.get(`${this.API_URL}commercialOffers${queryParams}`);
  }

  editOfert(data: any,){
    console.log(data)
    // this.clienteEditarService.setDataCliente(data);
    // this.router.navigate(['home/clientes/cliente-editar']);
  }

}
