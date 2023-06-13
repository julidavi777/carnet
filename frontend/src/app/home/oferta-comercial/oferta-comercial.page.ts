import { OfertaEditarService } from './oferta-editar/oferta-editar.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfertaComercialService } from './oferta-comercial.service';
import { AdminOportunidadService } from './admin-oportunidad/admin-oportunidad.service';
import { CrearCotizacionService } from './crear-cotizacion/crear-cotizacion.service';
import { CotizacionesService } from './cotizaciones/cotizaciones.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearOfertaService } from './crear-oferta/crear-oferta.service';
import { map } from 'rxjs/operators';
import { ClientesService } from '../clientes/clientes.service';

@Component({
  selector: 'app-oferta-comercial',
  templateUrl: './oferta-comercial.page.html',
  styleUrls: ['./oferta-comercial.page.scss'],
})
export class OfertaComercialPage implements OnInit {
  rows: any = []
  loadingIndicator: boolean = true;

  filtersForm: any = new FormGroup({
    comercial_responsables: new FormControl(''),
    operativo_responsables: new FormControl(''),
    clientes: new FormControl(''),
    estados: new FormControl(''),
    sedes: new FormControl(''),
    unidad_negocios: new FormControl(''),
    years: new FormControl('')
  });

  comercial_responsables: any[] = [
    {id: 1, name: 'comercial'}
  ]

  operativo_responsables: any[] = [
    {id: 1, name: 'comercial'}
  ]

  clientes: any[] = []
  estados: any[] = []
  sedes: any[] = []
  unidad_negocios: any[] = []
  years: any[] = []

  readonly STORAGE_URL = environment.storageUrl;



  constructor(
    private ofertaComercialService: OfertaComercialService,
    private router: Router,
    private OfertaEditarService:OfertaEditarService,
    private adminOportunidadService: AdminOportunidadService,
    private crearCotizacionService: CrearCotizacionService,
    private crearOfertaService: CrearOfertaService,
    private clientesService: ClientesService

  ) { }

  ngOnInit() {
    this.getOfertas();
    this.subscribeChangesFilterForm();
    this.getFiltersData();
  }

  getOfertas(){
    this.ofertaComercialService.getOfertas().subscribe((res: any) => {
      this.rows = res.data;
      this.years = res.years;
      this.loadingIndicator = false;
    })
  }

  subscribeChangesFilterForm(): void{
    this.filtersForm.valueChanges.subscribe(() => {
      console.log(this.filtersForm.value)

      let filtersData = [];
      for (const [key, value] of Object.entries(this.filtersForm.value)) {
        const typedKey: string = key;
        const typedValue: any = value;

        let obj = {}
        obj[typedKey] = typedValue?.id ? typedValue.id : null;
        filtersData.push(obj)
      }
      
      console.log(filtersData)

      let route = '/my-route?';

      for (const param of filtersData) {
        const key = Object.keys(param)[0];
        const value = param[key];

        if (value !== null && value !== undefined) {
          route += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
        }
      }

      // Remove the trailing '&' if present
      if (route.endsWith('&')) {
        route = route.slice(0, -1);
      }

      console.log(route);
    })
  }

  clearFiltersValues(){
    this.filtersForm.reset();
  }

  getFiltersData(){
    this.crearOfertaService.getUsers("COMERCIAL").subscribe((res: any) => {
      if(res.data){
        this.comercial_responsables = res.data.map((e) => {
          return {
            id: e.id,
            name: e.name + ' '+ e.surname
          }
        }) 
      }
      //this.comercial_responsables = res.data;
    });
    this.crearOfertaService.getUsers("OPERATIVO").subscribe((res: any) => {
      if(res.data){
        this.operativo_responsables = res.data.map((e) => {
          return {
            id: e.id,
            name: e.name + ' '+ e.surname
          }
        }) 
      }
    });

    //customers
    this.clientesService.getCustomers().subscribe((res: any) => {
      this.clientes =  res.data;

    })

    //estados
    this.estados = [...this.crearCotizacionService.statusOptionsSeguimiento];
    this.estados = this.estados.map((res: any) =>{
      return {
        id: res.value,
        name: res.name
      }
    })

    //sedes

    this.sedes = this.crearOfertaService.sedes;
    this.unidad_negocios = this.crearOfertaService.negocio_unidades;
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
