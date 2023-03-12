import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  getCustomers(){
    return this.http.get(`${this.API_URL}customers`);
  }

  updateCustomer(data: any, id: any){

    return this.http.get(`${this.API_URL}customers/${id}`, data);
  }




  //   return this.http.get(`${this.API_URL}customers/${id}`, data);
  // }


  searchFilter(valueParam: string){
    return this.http.get(`${this.API_URL}customers/searchFilterByName/filter?filterParam=${valueParam}`)
  }

  getClientes(id: string){
    return this.http.get(`${this.API_URL}/$(id)`);
  }


}
