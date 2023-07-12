// apu-material.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApuMaterialListComponent } from './apu-material-list/apu-material-list.component';
import { ApuMaterialFormComponent } from './apu-material-form/apu-material-form.component';
import { ApuMaterialsRoutingModule } from './apu-materials-routing.module';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ApuMaterialListComponent,
    ApuMaterialFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    ApuMaterialsRoutingModule,
    ButtonModule
  ]
})
export class ApuMaterialModule { }
