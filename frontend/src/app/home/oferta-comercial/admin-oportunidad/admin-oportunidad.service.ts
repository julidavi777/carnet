import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminOportunidadService {
  readonly API_URL = environment.baseUrl;

  _dataCommercialOffer: any = null;

  constructor(
    private http: HttpClient
  ) { }

  storeOpportunity(data){

    return this.http.post(this.API_URL+'commercialOffersManagement', data)
  }

  saveManagementFile(data){
    return this.http.post(this.API_URL+"commercialOffersManagementFile", data);
  }

  set dataCommercialOffer(data){
    this._dataCommercialOffer = data;
  }

  get dataCommercialOffer(){
    return this._dataCommercialOffer;
  }
}
