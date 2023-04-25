import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrearCotizacionService {
  readonly API_URL = environment.baseUrl;


  readonly statusOptionsSeguimiento = [
    { value: 1, name: "ABIERTA" },
    { value: 2, name: "ADJUDICADA A CUBIKAR" },
    { value: 3, name: "ADJUDICADA A OTRO PROVEEDOR" },
    { value: 4, name: "NO DAN INFORMACIÓN" },
    { value: 5, name: "NO SE HA PODIDO ESTABLECER COMUNICACIÓN" },
    { value: 6, name: "NO SE VA A EJECUTAR" },
    { value: 7, name: "SUSPENDIDO O APLAZADO" },
  ];

  _dataCommercialOffer = null;

  constructor(
    private http:HttpClient,
  ) { }

  saveCotizacion(data: any){
    return this.http.post(`${this.API_URL}commercialOffersCotizations`, data);
  }


  saveCommercialOffersSeguimientos(data){
    return this.http.post(`${this.API_URL}commercialOffersSeguimientos`, data);
  }

  getCommercialOffersSeguimientos(id_offer){
    return this.http.get(`${this.API_URL}commercialOffers/${id_offer}/commercialOffersSeguimientos`);
  }

  set dataCommercialOffer(data: any){
    this._dataCommercialOffer = data;
  }
  
  get dataCommercialOffer(){
    return this._dataCommercialOffer;
  }
}
