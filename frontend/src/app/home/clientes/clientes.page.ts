import { Component, OnInit } from '@angular/core';
import { SortType } from '@swimlane/ngx-datatable';
import { environment } from 'src/environments/environment';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  rows: any = []

  readonly STORAGE_URL = environment.storageUrl;
  SortType = SortType;
  
  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.clientesService.getCustomers().subscribe((res: any) => {
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
