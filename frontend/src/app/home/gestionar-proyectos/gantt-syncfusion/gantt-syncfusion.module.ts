import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttSyncfusionComponent } from './gantt-syncfusion.component';

import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import {
  TextBoxAllModule,
  NumericTextBoxAllModule,
} from '@syncfusion/ej2-angular-inputs';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import {
  CheckBoxAllModule,
  SwitchAllModule,
} from '@syncfusion/ej2-angular-buttons';


import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [GanttSyncfusionComponent],
  imports: [
    CommonModule,
    GanttAllModule,
    DropDownListAllModule,
    CheckBoxAllModule,
    SwitchAllModule,
    TextBoxAllModule,
    NumericTextBoxAllModule,
    MultiSelectAllModule,
    ButtonModule
  ],
  exports: [GanttSyncfusionComponent],
})
export class GanttSyncfusionModule {}
