import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRolPageRoutingModule } from './form-rol-routing.module';

import { FormRolPage } from './form-rol.page';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRolPageRoutingModule,
    ButtonModule,
    ToastModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    InputSwitchModule
  ],
  declarations: [FormRolPage]
})
export class FormRolPageModule {}
