import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApuActivitiesPageRoutingModule } from './apu-activities-routing.module';

import { ApuActivitiesPage } from './apu-activities.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {ButtonModule} from 'primeng/button';
import { IonicSelectableModule } from 'ionic-selectable';
import { ApuActivitiesFormComponent } from './apu-activities-form/apu-activities-form.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ApuActivitiesPageRoutingModule,
    NgxDatatableModule,
    ButtonModule,
    IonicSelectableModule,
    TooltipModule
  ],
  declarations: [ApuActivitiesPage, ApuActivitiesFormComponent]
})
export class ApuActivitiesPageModule {}
