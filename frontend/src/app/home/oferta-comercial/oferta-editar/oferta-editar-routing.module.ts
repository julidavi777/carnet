import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaEditarPage } from './oferta-editar.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaEditarPageRoutingModule {}
