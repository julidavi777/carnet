import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApuActivitiesPage } from './apu-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ApuActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApuActivitiesPageRoutingModule {}
