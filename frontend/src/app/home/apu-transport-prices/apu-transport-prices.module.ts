import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApuTransportPricesPageRoutingModule } from './apu-transport-prices-routing.module';
import { ApuTransportPriceFormComponent } from './apu-transport-price-form/apu-transport-price-form.component';
import { ApuTransportPriceListComponent } from './apu-transport-price-list/apu-transport-price-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    IonicModule,
    ApuTransportPricesPageRoutingModule
  ],
  declarations: [
    ApuTransportPriceFormComponent,
    ApuTransportPriceListComponent
  ]
})
export class ApuTransportPricesPageModule {}
