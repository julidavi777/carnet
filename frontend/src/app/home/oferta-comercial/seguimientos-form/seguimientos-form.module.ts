import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientosFormPageRoutingModule } from './seguimientos-form-routing.module';

import { SeguimientosFormPage } from './seguimientos-form.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ButtonModule } from 'primeng/button';
import { ProbabilityPipe } from './pipes/probability.pipe';
import { SeguimientosFilesComponent } from './seguimientos-files/seguimientos-files.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SeguimientosFormPageRoutingModule,
    NgxDatatableModule,
    PipesModule,
    ButtonModule
  ],
  declarations: [SeguimientosFormPage, SeguimientosFilesComponent, ProbabilityPipe],
})
export class SeguimientosFormPageModule {}
