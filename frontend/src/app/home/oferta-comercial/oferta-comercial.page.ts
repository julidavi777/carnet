import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfertaComercialService } from './oferta-comercial.service';

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

    let url = JSON.parse(value)


    let result = url.server_hash_name.replace("public/", "");
    console.log(result)

    window.open(this.STORAGE_URL+result, "_blank");
  }

  editOfert(data: any,){
    console.log(data)
    // this.clienteEditarService.setDataCliente(data);
    // this.router.navigate(['home/clientes/cliente-editar']);
  }


}
