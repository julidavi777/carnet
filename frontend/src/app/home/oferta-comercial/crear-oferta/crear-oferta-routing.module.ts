import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearOfertaPage } from './crear-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearOfertaPageRoutingModule {}
