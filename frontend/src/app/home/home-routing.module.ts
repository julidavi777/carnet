import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'clientes',
        children: [
          {
            path: 'clientes-list',
            loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
          },
          {
            path: 'crear-cliente',
            loadChildren: () => import('./clientes/crear-cliente/crear-cliente.module').then( m => m.CrearClientePageModule)
          },
        ]
      },
      {
        path: 'oferta-comercial',
        children: [
          {
            path: 'ofertas',
            loadChildren: () => import('./oferta-comercial/oferta-comercial.module').then( m => m.OfertaComercialPageModule)
          },
          {
            path:"crear-oferta",
            loadChildren: () => import('./oferta-comercial/crear-oferta/crear-oferta.module').then( m => m.CrearOfertaPageModule)
          },
          {
            path: 'crear-cotizacion',
            loadChildren: () => import('./oferta-comercial/crear-cotizacion/crear-cotizacion.module').then( m => m.CrearCotizacionPageModule)
          },
          {
            path: 'cotizaciones',
            loadChildren: () => import('./oferta-comercial/cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
          }

        ]

      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
