

import { Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfertaComercialService } from '../oferta-comercial/oferta-comercial.service';


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
    private ofertaComercialService: OfertaComercialService



  ) { }

  ngOnInit() {
    this.getOfertas();
  }
  getOfertas(){
    this.ofertaComercialService.getOfertas().subscribe((res: any) => {
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

  editOffer(data: any,){



    this.router.navigate(['home/oferta-comercial/oferta-editar']);


  }

  /* openAdminOportunidad(data){
    this.adminOportunidadService.dataCommercialOffer = data;
    this.router.navigate(['home/oferta-comercial/ofertas/admin-oportunidad']);
  } */

  openGestionProyectos(row){
    this.router.navigate(['home/gestionar-proyectos']);
  }


}
