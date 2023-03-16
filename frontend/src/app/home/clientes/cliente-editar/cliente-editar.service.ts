
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteEditarService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  saveCustomer(data: any){
    return this.http.post(`${this.API_URL}customers`, data);
  }

  dataCliente: any | undefined;
  setDataCliente(dataCliente: any){
    this.dataCliente = dataCliente;
  }

  getDataCliente(){
    return this.dataCliente;
  }

  editCustomer(data: any, id: any){
    
    return this.http.post(`${this.API_URL}customers/${id}`, data);
  }
}
