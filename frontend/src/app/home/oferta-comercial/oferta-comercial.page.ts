import { OfertaEditarService } from './oferta-editar/oferta-editar.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfertaComercialService } from './oferta-comercial.service';
import { AdminOportunidadService } from './admin-oportunidad/admin-oportunidad.service';

@Component({
  selector: 'app-oferta-comercial',
  templateUrl: './oferta-comercial.page.html',
  styleUrls: ['./oferta-comercial.page.scss'],
})
export class OfertaComercialPage implements OnInit {
  rows: any = []
  loadingIndicator: boolean = true;

  readonly STORAGE_URL = environment.storageUrl;



  constructor(
    private ofertaComercialService: OfertaComercialService,
    private router: Router,
    private OfertaEditarService:OfertaEditarService,
    private adminOportunidadService: AdminOportunidadService

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

    this.OfertaEditarService.setDataOffer(data);
    this.router.navigate(['home/oferta-comercial/oferta-editar']);


  }
  
  openAdminOportunidad(data){
    this.adminOportunidadService.dataCommercialOffer = data;
    this.router.navigate(['home/oferta-comercial/ofertas/admin-oportunidad']);
  }

}
