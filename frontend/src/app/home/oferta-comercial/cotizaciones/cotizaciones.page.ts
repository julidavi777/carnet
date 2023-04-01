import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CotizacionesService } from './cotizaciones.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
})
export class CotizacionesPage implements OnInit {

  rows: any = []
  readonly STORAGE_URL = environment.storageUrl;

  constructor(
    private cotizacionesService: CotizacionesService,
    private router: Router,

  ) { }

  ngOnInit() {

    this.getCotizaciones();
  }

  getCotizaciones(){
    this.cotizacionesService.getCotizaciones().subscribe((res: any) =>{
      this.rows = res.data;
    })
  }

  watchDocument(value:any){

    let url = JSON.parse(value)


    let result = url.server_hash_name.replace("public/", "");
    console.log(result)

    window.open(this.STORAGE_URL+result, "_blank");
  }

}
