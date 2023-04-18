import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizationVersionsPageRoutingModule } from './cotization-versions-routing.module';

import { CotizationVersionsPage } from './cotization-versions.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizationVersionsPageRoutingModule,
    NgxDatatableModule,
    ButtonModule
  ],
  declarations: [CotizationVersionsPage]
})
export class CotizationVersionsPageModule {}
