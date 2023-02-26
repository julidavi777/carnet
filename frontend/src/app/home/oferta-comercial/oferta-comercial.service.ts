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

  getOfertas(){
    return this.http.get(`${this.API_URL}data`);
  }

}
