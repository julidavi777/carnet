import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {

  readonly API_URL = environment.baseUrl;


  constructor(
    private http:HttpClient,
  ) { }

  getSupplies(){
    return this.http.get(this.API_URL+'supplies');
  }

  saveSupply(data){
    return this.http.post(this.API_URL+'supplies', data);
  }
}
