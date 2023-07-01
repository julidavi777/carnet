import { Component } from '@angular/core';
import { HomeService } from './_services/home.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NgxPermissionsService } from 'ngx-permissions';
import { LocalStorageEncryptService } from '../services/local-storage-encrypt.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  items: MenuItem[] = [];


  constructor(
    private homeService: HomeService,
    private router: Router,
    private localStorageEncryptService: LocalStorageEncryptService,
    private permissionsService: NgxPermissionsService,
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


          ]
      },


    {
      label:'Informes / Indicadores',
      icon:'pi pi-fw pi-chart-line',
      items:[
          {

              label:'Historico de ventas',
              icon:'pi pi-fw pi-shopping-cart',
              routerLink: ['informes-indicadores']
          },
          // {
          //     label:'Clientes',
          //     icon:'pi pi-fw pi-users',
          //     routerLink: ['clientes/clientes-list']
          // },

      ]
  },

  {
    label:'Gestion de Proyectos',
    icon:'pi pi-fw pi-building',
    items:[
        {

            label:'Ofertas Adjudicadas',
            icon:'pi pi-fw pi-key',
            routerLink: ['cotizaciones']
        },
        // {
        //     label:' Oportunidades cerradas',
        //     icon:'pi pi-fw pi-lock',
        //     routerLink: ['cotizaciones']
        // },

    ]
  },

  {
    label:'Presupuesto general',
    icon:'pi pi-fw pi-database',

    items:[
        {
            label:'Administrar capitulación',
            icon:'pi pi-fw pi-lock',
            routerLink: ['chapters']
        },
        {
            label:'Administrar insumos',
            icon:'pi pi-fw pi-lock',
            routerLink: ['supplies']
        },
        {
            label:'Administrar actividades',
            icon:'pi pi-fw pi-lock',
            routerLink: ['apu-activities']
        },
        /* {
            label:'APU',
            icon:'pi pi-fw pi-lock-open',
            routerLink: ['apu']
        }, */
    ]
  },
    ];

    var permissions = this.localStorageEncryptService.getJsonValue('permissions');
    /* var permissions = [
        'admin.home'
        , 'admin.customers.index'
        , 'admin.customers.store'
        , 'admin.customers.update'
        , 'admin.customers.watchDocuments'
        , 'admin.commercialOffers.index'
        , 'admin.commercialOffers.store'
        , 'admin.commercialOffers.update'
        , 'admin'
    ] */

    this.permissionsService.loadPermissions(permissions);
  

    /* ADMIN */
    if(!permissions.includes('admin')){
            this.deleteItemMenu('Administración')
    }

    /* CUSTOMERS */
    //sub_items
    if(!permissions.includes('admin.customers.index')){
        this.deleteItemMenu('Clientes'
        , true, 'Clientes')
    }
    if(!permissions.includes('admin.customers.store')){
        this.deleteItemMenu('Clientes', true, 'Crear cliente')
    }
    //main
    if(!permissions.includes('admin.customers.store') && !permissions.includes('admin.customers.index')){
        this.deleteItemMenu('Clientes')
    }

     /* COMMERCIAL_OFFERS */
    //sub_items
    if(!permissions.includes('admin.commercialOffers.index')){
        this.deleteItemMenu('Oportunidad Comercial', true, 'Oportunidades comerciales')
    }
    if(!permissions.includes('admin.commercialOffers.store')){
        this.deleteItemMenu('Oportunidad Comercial', true, 'Crear oportunidad comercial')
    }
    //main
    /* if(!permissions.includes('admin.commercialOffers.index') && !permissions.includes('admin.commercialOffers.store')){
        this.deleteItemMenu('Clientes')
    } */


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

  deleteItemMenu(nameLabel, isChildren = false, nameChildren = ""){
    let index = this.items.map(e => e.label).indexOf(nameLabel)
    if(isChildren){
        let indexChildren = this.items[index].items.map(e => e.label).indexOf(nameChildren)
        this.items[index].items.splice(indexChildren, 1);
        return;
    }

    this.items.splice(index, 1);
  }




}


