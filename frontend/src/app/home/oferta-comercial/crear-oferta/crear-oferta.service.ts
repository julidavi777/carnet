import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrearOfertaService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  saveOffer(data: any){
    return this.http.post(`${this.API_URL}`, data);
  }
}
