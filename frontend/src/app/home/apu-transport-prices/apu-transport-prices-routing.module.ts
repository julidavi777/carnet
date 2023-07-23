import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApuTransportPriceListComponent } from './apu-transport-price-list/apu-transport-price-list.component';
import { ApuTransportPriceFormComponent } from './apu-transport-price-form/apu-transport-price-form.component';


const routes: Routes = [
  {
    path: '',
    component: ApuTransportPriceListComponent
  },
  { path: 'create', component: ApuTransportPriceFormComponent },
  { path: 'edit/:id', component: ApuTransportPriceFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApuTransportPricesPageRoutingModule {}
