import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionarProyectosService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  getProjectManagementByCommercialOfferId(id: any){
    return this.http.get(`${this.API_URL}commercialOffers/${id}/project_managements`);
  }

  saveProjectManagement(data: any){
    return this.http.post(`${this.API_URL}project_managements`, data)
  }
}
