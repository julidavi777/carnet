
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaComercialPage } from './oferta-comercial.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaComercialPage
  },
  {
    path: 'crear-oferta',
    loadChildren: () => import('./crear-oferta/crear-oferta.module').then( m => m.CrearOfertaPageModule)
  },
  {
    path: 'cotizaciones',
    loadChildren: () => import('./cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
  },
  {
    path: 'crear-cotizacion',
    loadChildren: () => import('./crear-cotizacion/crear-cotizacion.module').then( m => m.CrearCotizacionPageModule)
  },

  {
    path: 'admin-oportunidad',
    loadChildren: () => import('./admin-oportunidad/admin-oportunidad.module').then( m => m.AdminOportunidadPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaComercialPageRoutingModule {}
