import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortType } from '@swimlane/ngx-datatable';
import { debounceTime, delay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  rows: any = []

  readonly STORAGE_URL = environment.storageUrl;
  SortType = SortType;

  searchInput = new FormControl('');
  loadingIndicator = false;
  showCancelButton = false

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCustomers();
    this.searchInputActions();
  }

  getCustomers(){
    this.loadingIndicator = true;
    this.clientesService.getCustomers().subscribe((res: any) => {
      this.rows = res.data;
      this.loadingIndicator = false;

    })
  }

  watchDocument(value:any){
    if(value == null){
      return;
    }

    let url = JSON.parse(value)


    let result = url.server_hash_name.replace("public/", "");
    console.log(result)

    window.open(this.STORAGE_URL+result, "_blank");
  }

  searchInputActions(){

    this.searchInput.valueChanges.pipe(
      debounceTime(370)
    ).subscribe((res: any) => {
      if(res.length > 0){
        this.showCancelButton = true;
      }
      this.loadingIndicator = true;
      this.clientesService.searchFilter(res).subscribe((resFilter: any) => {
        this.rows = resFilter.data;
        this.loadingIndicator = false;
      })
    });
  }

  clearInputSearch(){
    this.searchInput.setValue('');
    this.showCancelButton = false;
  }


  editCustomer(data: any, id: any){
    this.router.navigate(['home/clientes/cliente-editar'], data);
    /* this.clientesService.updateCustomer(data, id).subscribe((res: any)=>{
      this.rows = res.data;
      

    }) */
  }

}
