import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEmployeePage } from './form-employees.page';

const routes: Routes = [
  {
    path: '',
    component: FormEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEmployeePageRoutingModule {}
