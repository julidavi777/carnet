import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRolPage } from './form-rol.page';

const routes: Routes = [
  {
    path: '',
    component: FormRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRolPageRoutingModule {}
