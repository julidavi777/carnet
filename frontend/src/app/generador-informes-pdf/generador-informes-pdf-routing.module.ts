import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneradorInformesPdfPage } from './generador-informes-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: GeneradorInformesPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneradorInformesPdfPageRoutingModule {}
