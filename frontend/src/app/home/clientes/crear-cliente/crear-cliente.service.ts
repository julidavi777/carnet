import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrearClienteService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  saveCustomer(data: any){
    return this.http.post(`${this.API_URL}`, data);
  }
}
