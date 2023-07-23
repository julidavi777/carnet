import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApuLaborPriceFormComponent } from './apu-labor-price-form/apu-labor-price-form.component';
import { ApuLaborPriceListComponent } from './apu-labor-price-list/apu-labor-price-list.component';


const routes: Routes = [
  {
    path: '',
    component: ApuLaborPriceListComponent
  },
  { path: 'create', component: ApuLaborPriceFormComponent },
  { path: 'edit/:id', component: ApuLaborPriceFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApuLaborPricesPageRoutingModule {}
