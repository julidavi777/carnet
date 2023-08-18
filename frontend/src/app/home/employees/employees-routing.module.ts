import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesPage } from './employees.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPage
  },
  {
    path: 'form-employees',
    loadChildren: () => import('./form-employees/form-employees.module').then( m => m.FormEmployeePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule {}
