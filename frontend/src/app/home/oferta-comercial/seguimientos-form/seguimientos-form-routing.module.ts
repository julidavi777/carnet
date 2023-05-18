import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientosFormPage } from './seguimientos-form.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientosFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientosFormPageRoutingModule {}
