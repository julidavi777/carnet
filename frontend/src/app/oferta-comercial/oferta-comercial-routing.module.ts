import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaComercialPage } from './oferta-comercial.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaComercialPage
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'cotizaciones',
    loadChildren: () => import('./cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
  },
  {
    path: 'crear-cotizacion',
    loadChildren: () => import('./crear-cotizacion/crear-cotizacion.module').then( m => m.CrearCotizacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaComercialPageRoutingModule {}
