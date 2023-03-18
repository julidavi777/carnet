import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminOportunidadPage } from './admin-oportunidad.page';

const routes: Routes = [
  {
    path: '',
    component: AdminOportunidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminOportunidadPageRoutingModule {}
