import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizationVersionsPage } from './cotization-versions.page';

const routes: Routes = [
  {
    path: '',
    component: CotizationVersionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizationVersionsPageRoutingModule {}
