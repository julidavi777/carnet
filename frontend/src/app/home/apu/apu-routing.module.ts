import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApuPage } from './apu.page';

const routes: Routes = [
  {
    path: '',
    component: ApuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApuPageRoutingModule {}
