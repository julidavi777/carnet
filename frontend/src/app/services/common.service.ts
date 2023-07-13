import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getMunicipios(){
    return this.http.get(`${this.API_URL}municipios`);
  }

  getDepartamentos(name_departamento: string = ""){
    return this.http.get(`${this.API_URL}departamentos?name_departamento=${name_departamento}`);
  }

  getDepartamentosMunicipios(departamento_id: number, name_municipio: string = ""){
    return this.http.get(`${this.API_URL}departamentos/${departamento_id}/municipios?name_municipio=${name_municipio}`);
  }

  //APU

  getChapters(){
    return this.http.get(`${this.API_URL}chapters`);
  }
}
