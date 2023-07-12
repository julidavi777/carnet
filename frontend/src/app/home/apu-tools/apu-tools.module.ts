import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApuToolsPageRoutingModule } from './apu-tools-routing.module';
import { ApuToolFormComponent } from './apu-tool-form/apu-tool-form.component';
import { ApuToolListComponent } from './apu-tool-list/apu-tool-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ApuToolsPageRoutingModule,
    NgxDatatableModule,
    ButtonModule
  ],
  declarations: [
    ApuToolFormComponent,
    ApuToolListComponent
  ]
})
export class ApuToolsPageModule {}
