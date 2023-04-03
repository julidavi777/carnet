import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformesIndicadoresPage } from './informes-indicadores.page';

const routes: Routes = [
  {
    path: '',
    component: InformesIndicadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesIndicadoresPageRoutingModule {}
