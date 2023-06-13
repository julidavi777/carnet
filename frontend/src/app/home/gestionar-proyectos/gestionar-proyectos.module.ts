import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';

import { IonicModule } from '@ionic/angular';

import { GestionarProyectosPageRoutingModule } from './gestionar-proyectos-routing.module';

import { GestionarProyectosPage } from './gestionar-proyectos.page';
import { GanttSyncfusionModule } from './gantt-syncfusion/gantt-syncfusion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarProyectosPageRoutingModule,
    AccordionModule,
    GanttSyncfusionModule
  ],
  declarations: [GestionarProyectosPage]
})
export class GestionarProyectosPageModule {}
