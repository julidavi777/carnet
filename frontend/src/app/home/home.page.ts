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


  items: MenuItem[] = [];


  constructor(
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
          label:'Administración',
          icon:'pi pi-fw pi-sitemap',
          items:[
              {
                  label:'Usuarios',

                  icon:'pi pi-fw pi-users',


                  routerLink: ['users']

              },
              {
                separator:true
              },
              {
                  label:'Roles',

                  icon:'pi pi-fw pi-id-card',


                  routerLink: ['roles']

              },

          ]
      },
      {
          label:'Clientes',
          icon:'pi pi-fw pi-user',
          items:[
              {

                  label:'Crear cliente',
                  icon:'pi pi-fw pi-user-plus',
                  routerLink: ['clientes/crear-cliente']
              },
              {
                  label:'Clientes',
                  icon:'pi pi-fw pi-users',
                  routerLink: ['clientes/clientes-list']
              },

          ]
      },
      {
          label:'Oportunidad Comercial',
          icon:'pi pi-fw pi-tag',
          items:[
              {
                  label:'Crear oportunidad comercial',
                  icon:'pi pi-fw pi-tag',
                  routerLink: ['oferta-comercial/crear-oferta']
              },
              {
                  label:'Oportunidades comerciales',
                  icon:'pi pi-fw pi-tags',
                  routerLink: ['oferta-comercial/ofertas']
              },
              {
                separator:true
              },
              {
                label:'Nueva cotizacion',
                icon:'pi pi-fw pi-dollar',
                routerLink: ['oferta-comercial/cotizaciones']
             },
              {
                  label:'Cotizaciones',
                  icon:'pi pi-fw pi-money-bill',
                  routerLink: ['oferta-comercial/crear-cotizacion']
              },

          ]
      },

      {
        label:'Indicadores',
        icon:'pi pi-fw pi-chart-bar',
        items:[
            {

                label:'Oportunidades abiertas',
                icon:'pi pi-fw pi-lock-open',
                routerLink: ['clientes/crear-cliente']
            },
            {
                label:' Oportunidades cerradas',
                icon:'pi pi-fw pi-lock',
                routerLink: ['clientes/clientes-list']
            },

        ]
    },

    {
      label:'Informes',
      icon:'pi pi-fw pi-file',
      items:[
          // {

          //     label:'Crear cliente',
          //     icon:'pi pi-fw pi-user-plus',
          //     routerLink: ['clientes/crear-cliente']
          // },
          // {
          //     label:'Clientes',
          //     icon:'pi pi-fw pi-users',
          //     routerLink: ['clientes/clientes-list']
          // },

      ]
  },
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





}


