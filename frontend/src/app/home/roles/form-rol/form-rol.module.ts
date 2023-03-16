import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRolPageRoutingModule } from './form-rol-routing.module';

import { FormRolPage } from './form-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRolPageRoutingModule
  ],
  declarations: [FormRolPage]
})
export class FormRolPageModule {}
