

import { Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CotizacionesService } from './cotizaciones.service';


@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
})
export class CotizacionesPage implements OnInit {
  rows: any = []
  loadingIndicator: boolean = true;

  readonly STORAGE_URL = environment.storageUrl;



  constructor(

    private router: Router,
    private cotizacionesService: CotizacionesService



  ) { }

  ngOnInit() {
    this.getOfertas();
  }

  getOfertas(){
    this.cotizacionesService.getOfertas().subscribe((res: any) => {
      this.rows = res.data;
      this.loadingIndicator = false;
    })
  }

  watchDocument(value:any){

    if(value){
      let url = value;
      if(typeof value === 'string'){

        url = JSON.parse(value)
      }


      let result = url.server_hash_name.replace("public/", "");
      console.log(result)

      window.open(this.STORAGE_URL+result, "_blank");
    }

  }

  openGestionProyectos(row){
    this.router.navigate(['home/gestionar-proyectos'], {queryParams: {id: row.id}});
  }


}
