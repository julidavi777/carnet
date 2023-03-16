import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesPage } from './roles.page';

const routes: Routes = [
  {
    path: '',
    component: RolesPage
  },
  {
    path: 'form-rol',
    loadChildren: () => import('./form-rol/form-rol.module').then( m => m.FormRolPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesPageRoutingModule {}
