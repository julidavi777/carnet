import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactoComponent } from './form-contacto.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    FormContactoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    IonicSelectableModule
  ],
  exports:[
    FormContactoComponent
  ]
})
export class FormContactoModule { }
