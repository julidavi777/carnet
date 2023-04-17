import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfEstadisticasPage } from './pdf-estadisticas.page';

const routes: Routes = [
  {
    path: '',
    component: PdfEstadisticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfEstadisticasPageRoutingModule {}
