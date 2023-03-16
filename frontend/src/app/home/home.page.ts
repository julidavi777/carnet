import { Component } from '@angular/core';
import { HomeService } from './_services/home.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showPassword = false;
  items: MenuItem[] = [];


  constructor(
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
          label:'Administración',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'Usuarios',
                  icon:'pi pi-fw pi-plus',
              },
              {
                separator:true
              },
              {
                  label:'Roles',
                  icon:'pi pi-fw pi-trash'
              },
              
          ]
      },
      {
          label:'Clientes',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                
                  label:'Crear cliente',
                  icon:'pi pi-fw pi-align-left',
                  routerLink: ['clientes/crear-cliente']
              },
              {
                  label:'Clientes',
                  icon:'pi pi-fw pi-align-right',
                  routerLink: ['clientes/clientes-list']
              },

          ]
      },
      {
          label:'Oportunidad Comercial',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Crear oportunidad comercial',
                  icon:'pi pi-fw pi-user-plus',
                  routerLink: ['oferta-comercial/crear-oferta']
              },
              {
                  label:'Oportunidades comerciales',
                  icon:'pi pi-fw pi-user-minus',
                  routerLink: ['oferta-comercial/ofertas']
              },
              {
                separator:true
              },
              {
                label:'Nueva cotizacion',
                icon:'pi pi-fw pi-users',
                routerLink: ['oferta-comercial/cotizaciones']
             },
              {
                  label:'Contizaciones',
                  icon:'pi pi-fw pi-users',
                  routerLink: ['oferta-comercial/crear-cotizacion']
              },
            
          ]
      }
  ];
  }
  logout(){
    this.homeService.logout().subscribe((res: any) => {
        console.log(res)
        localStorage.removeItem('auth_token')
        this.router.navigate(['login'])
    }, err => {
        localStorage.removeItem('auth_token')
        this.router.navigate(['login'])
    })
  }

  // irAPagina() {
  //   this.router.navigate(['registrar-usuario']);
  // }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }


}


