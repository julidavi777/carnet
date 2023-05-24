import { OfertaEditarService } from './oferta-editar/oferta-editar.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfertaComercialService } from './oferta-comercial.service';
import { AdminOportunidadService } from './admin-oportunidad/admin-oportunidad.service';
import { CrearCotizacionService } from './crear-cotizacion/crear-cotizacion.service';
import { CotizacionesService } from './cotizaciones/cotizaciones.service';

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
    private adminOportunidadService: AdminOportunidadService,
    private crearCotizacionService: CrearCotizacionService,
    private CotizacionesService: CotizacionesService

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

    this.crearCotizacionService.dataCommercialOffer = data;
    this.adminOportunidadService.dataCommercialOffer = data;
    this.router.navigate(['home/oferta-comercial/oferta-editar']);


  }

  /* openAdminOportunidad(data){
    this.adminOportunidadService.dataCommercialOffer = data;
    this.router.navigate(['home/oferta-comercial/ofertas/admin-oportunidad']);
  } */

  openSeguimientos(row){
    //console.log(row);
    this.crearCotizacionService.dataCommercialOffer = row;
    this.router.navigate(['home/oferta-comercial/ofertas/seguimientos-form']);
  }

  getColorById(value){

    if(value){
      return this.crearCotizacionService.statusOptionsSeguimiento.find(e => e.value == value)?.color;
    }
    return 'white';
  }

}
