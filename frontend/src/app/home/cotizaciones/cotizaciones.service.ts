import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  saveOffer(data: any){
    return this.http.post(`${this.API_URL}commercialOffers`, data);
  }

  getSequentialNumber(){
    return this.http.get(`${this.API_URL}commercialOffers/others/getNextValue`)
  }

  searchFilterByIdentification(valueParam: string){
    return this.http.get(`${this.API_URL}customers/searchFilterByName/filter?filterParamIdentification=${valueParam}`)
  }

  getUsers(specific_role: string = ''){
    return this.http.get(`${this.API_URL}users?specific_role=${specific_role}`)
  }
}
