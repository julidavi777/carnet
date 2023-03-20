import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfertaEditarService {

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

  dataOffer: any | undefined;
  setDataOffer(dataOffer: any){
    this.dataOffer = dataOffer;
  }

  getDataOffer(){
    return this.dataOffer;
  }

  editOffer(data: any, id: any){

    return this.http.post(`${this.API_URL}commercialOffers/${id}`, data);
  }
}
